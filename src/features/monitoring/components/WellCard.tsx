import { AlertTriangle, Droplets, Gauge, Thermometer } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Well } from '@/features/monitoring/types'

const badgeVariantByStatus = { healthy: 'success', warning: 'warning', critical: 'destructive' } as const

export function WellCard({ well, onOpen }: { well: Well; onOpen: (well: Well) => void }) {
  return (
    <Card className="transition-transform hover:-translate-y-0.5">
      <CardHeader className="flex flex-row items-start justify-between gap-4 pb-3">
        <div>
          <CardTitle className="text-base">{well.name}</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">{well.asset} · {well.basin}</p>
        </div>
        <Badge variant={badgeVariantByStatus[well.status]}>{well.status}</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-muted p-3"><Gauge className="mb-1 h-4 w-4" />{Math.round(well.latestPressurePsi)} psi</div>
          <div className="rounded-lg bg-muted p-3"><Thermometer className="mb-1 h-4 w-4" />{Math.round(well.latestTemperatureC)} °C</div>
          <div className="rounded-lg bg-muted p-3"><Droplets className="mb-1 h-4 w-4" />{Math.round(well.latestFlowRateBopd)} bopd</div>
          <div className="rounded-lg bg-muted p-3"><AlertTriangle className="mb-1 h-4 w-4" />{well.alarms.length} alarms</div>
        </div>
        <Button className="w-full" variant="outline" onClick={() => onOpen(well)}>View details</Button>
      </CardContent>
    </Card>
  )
}
