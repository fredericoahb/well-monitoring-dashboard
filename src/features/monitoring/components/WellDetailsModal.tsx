import { Download, ShieldAlert } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useMonitoringStore } from '@/features/monitoring/hooks/useMonitoringStore'
import { exportWellHistoryToExcel, exportWellSummaryToPdf } from '@/features/monitoring/utils/export'
import { TrendChart } from './TrendChart'

export function WellDetailsModal() {
  const selectedWell = useMonitoringStore((state) => state.selectedWell)
  const setSelectedWell = useMonitoringStore((state) => state.setSelectedWell)
  const range = useMonitoringStore((state) => state.filters.range)
  if (!selectedWell) return null

  const trend = range === '24h' ? selectedWell.trend24h : selectedWell.trend7d
  return (
    <Dialog open={!!selectedWell} onOpenChange={() => setSelectedWell(null)}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{selectedWell.name}</DialogTitle>
          <DialogDescription>{selectedWell.asset} · {selectedWell.basin} · {selectedWell.id}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Metric title="Pressure" value={`${Math.round(selectedWell.latestPressurePsi)} psi`} />
          <Metric title="Temperature" value={`${Math.round(selectedWell.latestTemperatureC)} °C`} />
          <Metric title="Flow Rate" value={`${Math.round(selectedWell.latestFlowRateBopd)} bopd`} />
          <Metric title="Tank Level" value={`${Math.round(selectedWell.latestTankLevelPct)} %`} />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Metric title="API Gravity" value={`${selectedWell.apiGravity.toFixed(1)}°`} />
          <Metric title="Water Cut" value={`${selectedWell.waterCutPct.toFixed(1)} %`} />
          <Metric title="Production Today" value={`${selectedWell.productionTodayBbl} bbl`} />
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => exportWellSummaryToPdf(selectedWell)}><Download className="h-4 w-4" />Export PDF</Button>
          <Button variant="outline" onClick={() => exportWellHistoryToExcel(selectedWell, trend)}><Download className="h-4 w-4" />Export Excel</Button>
          {selectedWell.h2sDetected && (
            <div className="inline-flex items-center gap-2 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200"><ShieldAlert className="h-4 w-4" />H2S detected</div>
          )}
        </div>

        <TrendChart data={trend} title={`Production Trend (${range})`} />
      </DialogContent>
    </Dialog>
  )
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">{title}</CardTitle></CardHeader>
      <CardContent><div className="text-2xl font-bold">{value}</div></CardContent>
    </Card>
  )
}
