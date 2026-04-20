import { monitoringMock } from '@/features/monitoring/mocks/data'
import type { MonitoringSnapshot } from '@/features/monitoring/types'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchMonitoringSnapshot(): Promise<MonitoringSnapshot> {
  await delay(250)
  return structuredClone(monitoringMock)
}
