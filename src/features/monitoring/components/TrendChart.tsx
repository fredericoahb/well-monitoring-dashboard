import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDateTime } from '@/lib/format'
import type { WellPoint } from '@/features/monitoring/types'

export function TrendChart({ data, title }: { data: WellPoint[]; title: string }) {
  return (
    <Card className="h-[360px]">
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent className="h-[290px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="timestamp" tickFormatter={(value) => formatDateTime(value).split(',')[0]} minTickGap={24} />
            <YAxis />
            <Tooltip labelFormatter={(value) => formatDateTime(String(value))} />
            <Legend />
            <Line type="monotone" dataKey="pressurePsi" stroke="#3b82f6" dot={false} name="Pressure (psi)" />
            <Line type="monotone" dataKey="temperatureC" stroke="#f97316" dot={false} name="Temperature (C)" />
            <Line type="monotone" dataKey="flowRateBopd" stroke="#14b8a6" dot={false} name="Flow (bopd)" />
            <Line type="monotone" dataKey="cumulativeOilBbl" stroke="#a855f7" dot={false} name="Cum. oil (bbl)" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
