import type { Well } from '@/features/monitoring/types'

// função helper (já deve existir no seu projeto)
function buildSeries(seed: number, points: number, intervalHours: number) {
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

import type { MonitoringSnapshot } from '@/features/monitoring/types'

export const monitoringMock: MonitoringSnapshot = {  generatedAt: new Date().toISOString(),

  wells: [
    // ===============================
    // CAMPOS / SANTOS (EXISTENTES)
    // ===============================

    {
      id: 'WELL-001',
      name: 'Well Alpha-01',
      basin: 'Bacia de Campos',
      asset: 'P-71',
      lat: -22.532,
      lng: -40.112,
      status: 'healthy',
      active: true,
      productionTodayBbl: 1420,
      latestPressurePsi: 1820,
      latestTemperatureC: 76,
      latestFlowRateBopd: 835,
      latestTankLevelPct: 60,
      apiGravity: 30,
      waterCutPct: 18,
      h2sDetected: false,
      alarms: [],
      trend24h: buildSeries(1, 24, 1),
      trend7d: buildSeries(1, 7, 24),
    },

    {
      id: 'WELL-002',
      name: 'Well Bravo-07',
      basin: 'Bacia de Campos',
      asset: 'P-71',
      lat: -22.544,
      lng: -40.154,
      status: 'warning',
      active: true,
      productionTodayBbl: 1310,
      latestPressurePsi: 1960,
      latestTemperatureC: 81,
      latestFlowRateBopd: 760,
      latestTankLevelPct: 52,
      apiGravity: 29,
      waterCutPct: 22,
      h2sDetected: false,
      alarms: [],
      trend24h: buildSeries(2, 24, 1),
      trend7d: buildSeries(2, 7, 24),
    },

    {
      id: 'WELL-003',
      name: 'Well Charlie-11',
      basin: 'Bacia de Santos',
      asset: 'FPSO Carioca',
      lat: -24.11,
      lng: -42.001,
      status: 'critical',
      active: true,
      productionTodayBbl: 980,
      latestPressurePsi: 2260,
      latestTemperatureC: 88,
      latestFlowRateBopd: 620,
      latestTankLevelPct: 43,
      apiGravity: 27,
      waterCutPct: 30,
      h2sDetected: true,
      alarms: [],
      trend24h: buildSeries(3, 24, 1),
      trend7d: buildSeries(3, 7, 24),
    },

    // ===============================
    // 🔥 NOVOS — BACIA DO ES
    // ===============================

    {
      id: 'WELL-ES-001',
      name: 'Well ES-01',
      basin: 'Bacia do Espírito Santo',
      asset: 'FPSO Vitória',
      lat: -19.5,
      lng: -39.5,
      status: 'healthy',
      active: true,
      productionTodayBbl: 980,
      latestPressurePsi: 2100,
      latestTemperatureC: 82,
      latestFlowRateBopd: 650,
      latestTankLevelPct: 55,
      apiGravity: 28.5,
      waterCutPct: 22,
      h2sDetected: false,
      alarms: [],
      trend24h: buildSeries(5, 24, 1),
      trend7d: buildSeries(5, 7, 24),
    },

    {
      id: 'WELL-ES-002',
      name: 'Well Vitória-02',
      basin: 'Bacia de Vitória-ES',
      asset: 'FPSO Capixaba',
      lat: -20.1,
      lng: -39.2,
      status: 'critical',
      active: true,
      productionTodayBbl: 720,
      latestPressurePsi: 2400,
      latestTemperatureC: 91,
      latestFlowRateBopd: 520,
      latestTankLevelPct: 38,
      apiGravity: 26.0,
      waterCutPct: 35,
      h2sDetected: true,
      alarms: [],
      trend24h: buildSeries(6, 24, 1),
      trend7d: buildSeries(6, 7, 24),
    },
  ],
}