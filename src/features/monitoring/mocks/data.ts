import type { Alarm, MonitoringSnapshot, Well, WellPoint } from '@/features/monitoring/types'

function buildSeries(seed: number, points: number, intervalHours: number): WellPoint[] {
  const now = Date.now()
  return Array.from({ length: points }).map((_, index) => {
    const factor = seed + index
    return {
      timestamp: new Date(now - (points - index) * intervalHours * 3600_000).toISOString(),
      pressurePsi: 1800 + Math.sin(factor / 2) * 180 + seed * 15,
      temperatureC: 74 + Math.cos(factor / 4) * 5 + seed,
      flowRateBopd: 820 + Math.sin(factor / 3) * 95 + seed * 12,
      tankLevelPct: 58 + Math.cos(factor / 5) * 12,
      cumulativeOilBbl: 12000 + index * (50 + seed * 2),
    }
  })
}

function buildAlarms(wellId: string, status: Well['status'], seed: number): Alarm[] {
  const base: Alarm[] = []
  if (status === 'critical') {
    base.push({
      id: `${wellId}-alarm-1`,
      wellId,
      title: 'High tubing pressure',
      severity: 'critical',
      message: 'Tubing pressure exceeded operating threshold for more than 5 minutes.',
      acknowledged: false,
      createdAt: new Date(Date.now() - 12 * 60_000).toISOString(),
    })
  }
  if (status !== 'healthy') {
    base.push({
      id: `${wellId}-alarm-2`,
      wellId,
      title: 'Flow instability',
      severity: status === 'warning' ? 'high' : 'critical',
      message: `Production instability detected on well ${wellId}.`,
      acknowledged: seed % 2 === 0,
      createdAt: new Date(Date.now() - 45 * 60_000).toISOString(),
    })
  }
  return base
}

export const monitoringMock: MonitoringSnapshot = {
  generatedAt: new Date().toISOString(),
  wells: [
    {
      id: 'WELL-001',
      name: 'Well Alpha-01',
      basin: 'Campos Basin',
      asset: 'P-71',
      lat: -22.532,
      lng: -40.112,
      status: 'healthy',
      active: true,
      productionTodayBbl: 1420,
      apiGravity: 30,
      waterCutPct: 18,
      latestPressurePsi: 1820,
      latestTemperatureC: 76,
      latestFlowRateBopd: 835,
      latestTankLevelPct: 60,
      h2sDetected: false,
      alarms: buildAlarms('WELL-001', 'healthy', 1),
      trend24h: buildSeries(1, 24, 1),
      trend7d: buildSeries(1, 7, 24),
    },
    {
      id: 'WELL-002',
      name: 'Well Bravo-07',
      basin: 'Campos Basin',
      asset: 'P-71',
      lat: -22.544,
      lng: -40.154,
      status: 'warning',
      active: true,
      productionTodayBbl: 1310,
      apiGravity: 29,
      waterCutPct: 22,
      latestPressurePsi: 1960,
      latestTemperatureC: 81,
      latestFlowRateBopd: 760,
      latestTankLevelPct: 52,
      h2sDetected: false,
      alarms: buildAlarms('WELL-002', 'warning', 2),
      trend24h: buildSeries(2, 24, 1),
      trend7d: buildSeries(2, 7, 24),
    },
    {
      id: 'WELL-003',
      name: 'Well Charlie-11',
      basin: 'Santos Basin',
      asset: 'FPSO Carioca',
      lat: -24.110,
      lng: -42.001,
      status: 'critical',
      active: true,
      productionTodayBbl: 980,
      apiGravity: 27,
      waterCutPct: 30,
      latestPressurePsi: 2260,
      latestTemperatureC: 88,
      latestFlowRateBopd: 620,
      latestTankLevelPct: 43,
      h2sDetected: true,
      alarms: buildAlarms('WELL-003', 'critical', 3),
      trend24h: buildSeries(3, 24, 1),
      trend7d: buildSeries(3, 7, 24),
    },
    {
      id: 'WELL-004',
      name: 'Well Delta-03',
      basin: 'Santos Basin',
      asset: 'FPSO Carioca',
      lat: -24.064,
      lng: -41.955,
      status: 'healthy',
      active: false,
      productionTodayBbl: 0,
      apiGravity: 28.5,
      waterCutPct: 0,
      latestPressurePsi: 0,
      latestTemperatureC: 0,
      latestFlowRateBopd: 0,
      latestTankLevelPct: 17,
      h2sDetected: false,
      alarms: [],
      trend24h: buildSeries(4, 24, 1),
      trend7d: buildSeries(4, 7, 24),
    }
  ]
}
