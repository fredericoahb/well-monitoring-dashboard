import { Siren } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { formatDateTime } from '@/lib/format'
import type { Alarm } from '@/features/monitoring/types'

export function AlarmBanner({ alarms }: { alarms: Alarm[] }) {
  const critical = alarms.filter((alarm) => !alarm.acknowledged)
  if (critical.length === 0) return null

  return (
    <div className="grid gap-3">
      {critical.map((alarm) => (
        <Card key={alarm.id} className="border-red-500/40 bg-red-500/10">
          <CardContent className="flex flex-col gap-4 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <Siren className="mt-0.5 h-5 w-5 text-red-400" />
              <div>
                <p className="font-semibold text-red-200">{alarm.title}</p>
                <p className="text-sm text-red-100/90">{alarm.message}</p>
                <p className="mt-1 text-xs text-red-100/70">Raised {formatDateTime(alarm.createdAt)}</p>
              </div>
            </div>
            <Button variant="destructive" onClick={() => toast.success(`Alarm ${alarm.title} acknowledged (mock action).`)}>Acknowledge</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
