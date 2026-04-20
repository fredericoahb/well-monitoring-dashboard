import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { Well, WellStatus } from '@/features/monitoring/types'

const statusColor: Record<WellStatus, string> = { healthy: '#00FF00', warning: '#FFC107', critical: '#FF0000' }

function markerIcon(status: WellStatus) {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background:${statusColor[status]};width:18px;height:18px;border-radius:9999px;border:2px solid white;box-shadow:0 0 0 4px rgba(15,23,42,.25)"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  })
}

export function WellMap({ wells, onOpenWell }: { wells: Well[]; onOpenWell: (well: Well) => void }) {
  const center: [number, number] = wells.length ? [wells[0].lat, wells[0].lng] : [-23.5, -42.4]
  return (
    <Card className="h-[420px] overflow-hidden">
      <CardHeader><CardTitle>Live Well Map</CardTitle></CardHeader>
      <CardContent className="h-[340px]">
        <MapContainer center={center} zoom={6} scrollWheelZoom className="z-0">
          <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {wells.map((well) => (
            <Marker key={well.id} position={[well.lat, well.lng]} icon={markerIcon(well.status)}>
              <Popup>
                <div className="space-y-2">
                  <div>
                    <p className="font-semibold">{well.name}</p>
                    <p className="text-xs text-slate-500">{well.asset} · {well.basin}</p>
                  </div>
                  <Button size="sm" onClick={() => onOpenWell(well)}>Open details</Button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </CardContent>
    </Card>
  )
}
