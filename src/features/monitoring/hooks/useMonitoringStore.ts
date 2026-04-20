import { create } from 'zustand'
import type { Well, WellStatus } from '@/features/monitoring/types'

interface MonitoringFilters {
  basin: string
  asset: string
  status: WellStatus | 'all'
  range: '24h' | '7d'
}

interface MonitoringState {
  selectedWell: Well | null
  darkMode: boolean
  filters: MonitoringFilters
  setSelectedWell: (well: Well | null) => void
  setBasin: (basin: string) => void
  setAsset: (asset: string) => void
  setStatus: (status: MonitoringFilters['status']) => void
  setRange: (range: MonitoringFilters['range']) => void
  toggleTheme: () => void
}

export const useMonitoringStore = create<MonitoringState>((set) => ({
  selectedWell: null,
  darkMode: true,
  filters: { basin: 'all', asset: 'all', status: 'all', range: '24h' },
  setSelectedWell: (selectedWell) => set({ selectedWell }),
  setBasin: (basin) => set((state) => ({ filters: { ...state.filters, basin } })),
  setAsset: (asset) => set((state) => ({ filters: { ...state.filters, asset } })),
  setStatus: (status) => set((state) => ({ filters: { ...state.filters, status } })),
  setRange: (range) => set((state) => ({ filters: { ...state.filters, range } })),
  toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),
}))
