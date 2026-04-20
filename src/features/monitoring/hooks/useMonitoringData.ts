import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { monitoringMock } from '@/features/monitoring/data/mockData'
import { useMonitoringStore } from '@/features/monitoring/hooks/useMonitoringStore'
import type { MonitoringSnapshot } from '@/features/monitoring/types'

async function fetchMonitoringSnapshot(): Promise<MonitoringSnapshot> {
  await new Promise((resolve) => setTimeout(resolve, 250))
  return structuredClone(monitoringMock)
}

export function useMonitoringData() {
  const filters = useMonitoringStore((state) => state.filters)

  const query = useQuery({
    queryKey: ['monitoring-snapshot'],
    queryFn: fetchMonitoringSnapshot,
    refetchInterval: 30_000,
  })

  const filteredWells = useMemo(() => {
    const wells = query.data?.wells ?? []
    return wells.filter((well) => {
      const basinMatch = filters.basin === 'all' || well.basin === filters.basin
      const assetMatch = filters.asset === 'all' || well.asset === filters.asset
      const statusMatch = filters.status === 'all' || well.status === filters.status
      return basinMatch && assetMatch && statusMatch
    })
  }, [filters, query.data?.wells])

  const basins = useMemo(() => ['all', ...new Set((query.data?.wells ?? []).map((well) => well.basin))], [query.data?.wells])
  const assets = useMemo(() => ['all', ...new Set((query.data?.wells ?? []).map((well) => well.asset))], [query.data?.wells])

  const kpis = useMemo(() => ({
    dailyProductionBbl: filteredWells.reduce((sum, well) => sum + well.productionTodayBbl, 0),
    activeWells: filteredWells.filter((well) => well.active).length,
    openAlarms: filteredWells.flatMap((well) => well.alarms).filter((alarm) => !alarm.acknowledged).length,
  }), [filteredWells])

  return { ...query, filteredWells, basins, assets, kpis }
}
