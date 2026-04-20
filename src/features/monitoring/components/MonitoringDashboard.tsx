import { Card, CardContent } from '@/components/ui/card'
import { PageHeader } from '@/components/common/PageHeader'
import { useMonitoringData } from '@/features/monitoring/hooks/useMonitoringData'
import { useMonitoringStore } from '@/features/monitoring/hooks/useMonitoringStore'
import { AlarmBanner } from './AlarmBanner'
import { FilterBar } from './FilterBar'
import { KpiCards } from './KpiCards'
import { TrendChart } from './TrendChart'
import { WellCard } from './WellCard'
import { WellDetailsModal } from './WellDetailsModal'
import { WellMap } from './WellMap'

export function MonitoringDashboard() {
  const { filteredWells, basins, assets, kpis, isLoading } = useMonitoringData()
  const setSelectedWell = useMonitoringStore((state) => state.setSelectedWell)
  const range = useMonitoringStore((state) => state.filters.range)
  const alarms = filteredWells.flatMap((well) => well.alarms)
  const firstWell = filteredWells[0]
  const trend = firstWell ? (range === '24h' ? firstWell.trend24h : firstWell.trend7d) : []

  return (
    <main className="min-h-screen px-4 py-6 md:px-6 xl:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6">
        <PageHeader />
        <AlarmBanner alarms={alarms} />
        <FilterBar basins={basins} assets={assets} />
        <KpiCards {...kpis} />
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <WellMap wells={filteredWells} onOpenWell={setSelectedWell} />
          <TrendChart data={trend} title={`Overview Trend (${range})`} />
        </div>
        <section>
          <h2 className="mb-4 text-xl font-semibold">Well inventory</h2>
          {isLoading ? (
            <Card><CardContent className="pt-6">Loading monitoring data...</CardContent></Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredWells.map((well) => <WellCard key={well.id} well={well} onOpen={setSelectedWell} />)}
            </div>
          )}
        </section>
      </div>
      <WellDetailsModal />
    </main>
  )
}
