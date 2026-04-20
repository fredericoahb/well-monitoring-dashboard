import { MoonStar, SunMedium } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useMonitoringStore } from '@/features/monitoring/hooks/useMonitoringStore'

export function FilterBar({ basins, assets }: { basins: string[]; assets: string[] }) {
  const { filters, setBasin, setAsset, setStatus, setRange, darkMode, toggleTheme } = useMonitoringStore()

  return (
    <Card>
      <CardContent className="grid gap-4 pt-6 md:grid-cols-5">
        <div>
          <label className="mb-2 block text-sm text-muted-foreground">Basin</label>
          <Select value={filters.basin} onValueChange={setBasin}>
            <SelectTrigger><SelectValue placeholder="Select basin" /></SelectTrigger>
            <SelectContent>{basins.map((value) => <SelectItem key={value} value={value}>{value}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div>
          <label className="mb-2 block text-sm text-muted-foreground">Asset</label>
          <Select value={filters.asset} onValueChange={setAsset}>
            <SelectTrigger><SelectValue placeholder="Select asset" /></SelectTrigger>
            <SelectContent>{assets.map((value) => <SelectItem key={value} value={value}>{value}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div>
          <label className="mb-2 block text-sm text-muted-foreground">Status</label>
          <Select value={filters.status} onValueChange={(value) => setStatus(value as 'all' | 'healthy' | 'warning' | 'critical')}>
            <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">all</SelectItem>
              <SelectItem value="healthy">healthy</SelectItem>
              <SelectItem value="warning">warning</SelectItem>
              <SelectItem value="critical">critical</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="mb-2 block text-sm text-muted-foreground">Trend Window</label>
          <Select value={filters.range} onValueChange={(value) => setRange(value as '24h' | '7d')}>
            <SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7d</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end">
          <Button variant="outline" className="w-full" onClick={toggleTheme}>
            {darkMode ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            {darkMode ? 'Light mode' : 'Dark mode'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
