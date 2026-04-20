import { Activity, ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function PageHeader() {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Offshore production surveillance</p>
        <h1 className="text-3xl font-bold tracking-tight">Well Monitoring Dashboard</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Near-real-time monitoring for pressure, flow, tank level, and critical alarms across offshore assets.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="secondary"><Activity className="mr-1 h-3 w-3" />30s refresh</Badge>
        <Badge variant="outline"><ShieldCheck className="mr-1 h-3 w-3" />Audit-ready UX</Badge>
      </div>
    </div>
  )
}
