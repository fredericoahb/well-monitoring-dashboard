import { create } from 'zustand'
import type { Well, WellStatus } from '@/features/monitoring/types'

interface MonitoringFilters {
  field: string
  platform: string
  status: WellStatus | 'all'
  range: '24h' | '7d'
}

interface MonitoringState {
  selectedWell: Well | null
  filters: MonitoringFilters
  darkMode: boolean
  setSelectedWell: (well: Well | null) => void
  setField: (field: string) => void
  setPlatform: (platform: string) => void
  setStatus: (status: MonitoringFilters['status']) => void
  setRange: (range: MonitoringFilters['range']) => void
  toggleTheme: () => void
}

export const useMonitoringStore = create<MonitoringState>((set) => ({
  selectedWell: null,
  darkMode: true,
  filters: {
    field: 'all',
    platform: 'all',
    status: 'all',
    range: '24h',
  },
  setSelectedWell: (selectedWell) => set({ selectedWell }),
  setField: (field) => set((state) => ({ filters: { ...state.filters, field } })),
  setPlatform: (platform) => set((state) => ({ filters: { ...state.filters, platform } })),
  setStatus: (status) => set((state) => ({ filters: { ...state.filters, status } })),
  setRange: (range) => set((state) => ({ filters: { ...state.filters, range } })),
  toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),
}))
