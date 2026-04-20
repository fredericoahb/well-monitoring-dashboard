import { useEffect } from 'react'
import { MonitoringDashboard } from '@/features/monitoring/components/MonitoringDashboard'
import { useMonitoringStore } from '@/features/monitoring/hooks/useMonitoringStore'

export default function App() {
  const darkMode = useMonitoringStore((state) => state.darkMode)
  useEffect(() => {
    document.documentElement.classList.toggle('light', !darkMode)
  }, [darkMode])
  return <MonitoringDashboard />
}
