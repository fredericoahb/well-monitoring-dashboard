export type WellStatus = 'healthy' | 'warning' | 'critical'
export type AlarmSeverity = 'medium' | 'high' | 'critical'

export interface WellPoint {
  timestamp: string
  pressurePsi: number
  temperatureC: number
  flowRateBopd: number
  tankLevelPct: number
  cumulativeOilBbl: number
}

export interface Alarm {
  id: string
  wellId: string
  title: string
  severity: AlarmSeverity
  message: string
  acknowledged: boolean
  createdAt: string
}

export interface Well {
  id: string
  name: string

  // localização
  basin: string
  asset: string

  lat: number
  lng: number

  status: WellStatus
  active: boolean

  // produção
  productionTodayBbl: number

  // métricas
  latestPressurePsi: number
  latestTemperatureC: number
  latestFlowRateBopd: number
  latestTankLevelPct: number

  // qualidade do fluido
  apiGravity: number
  waterCutPct: number
  h2sDetected: boolean

  alarms: Alarm[]
  trend24h: WellPoint[]
  trend7d: WellPoint[]
}

export interface MonitoringSnapshot {
  generatedAt: string
  wells: Well[]
}