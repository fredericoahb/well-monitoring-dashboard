import { Activity, AlertTriangle, Gauge } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatNumber } from '@/lib/format'

export function KpiCards({ dailyProductionBbl, activeWells, openAlarms }: { dailyProductionBbl: number; activeWells: number; openAlarms: number }) {
  const items = [
    { title: 'Daily Production', value: `${formatNumber(dailyProductionBbl)} bbl`, subtitle: 'Oil produced in the current day', icon: Gauge },
    { title: 'Active Wells', value: formatNumber(activeWells), subtitle: 'Streaming or available wells', icon: Activity },
    { title: 'Open Alarms', value: formatNumber(openAlarms), subtitle: 'Requires supervisor attention', icon: AlertTriangle },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="mt-1 text-xs text-muted-foreground">{item.subtitle}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
