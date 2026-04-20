import jsPDF from 'jspdf'
import * as XLSX from 'xlsx'
import type { Well, WellPoint } from '@/features/monitoring/types'

export function exportWellSummaryToPdf(well: Well) {
  const doc = new jsPDF()
  doc.setFontSize(18)
  doc.text('Well Monitoring Summary', 14, 20)
  doc.setFontSize(11)
  doc.text(`Well: ${well.name}`, 14, 34)
  doc.text(`Asset: ${well.asset}`, 14, 42)
  doc.text(`Basin: ${well.basin}`, 14, 50)
  doc.text(`Status: ${well.status}`, 14, 58)
  doc.text(`Pressure: ${well.latestPressurePsi} psi`, 14, 66)
  doc.text(`Temperature: ${well.latestTemperatureC} C`, 14, 74)
  doc.text(`Flow rate: ${well.latestFlowRateBopd} bopd`, 14, 82)
  doc.text(`Tank level: ${well.latestTankLevelPct}%`, 14, 90)
  doc.save(`${well.id.toLowerCase()}-summary.pdf`)
}

export function exportWellHistoryToExcel(well: Well, data: WellPoint[]) {
  const worksheet = XLSX.utils.json_to_sheet(data)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'History')
  XLSX.writeFile(workbook, `${well.id.toLowerCase()}-history.xlsx`)
}
