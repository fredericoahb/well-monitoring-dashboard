import { render, screen } from '@testing-library/react'
import { KpiCards } from './KpiCards'

describe('KpiCards', () => {
  it('renders KPI values', () => {
    render(<KpiCards dailyProductionBbl={8120} activeWells={6} openAlarms={3} />)
    expect(screen.getByText(/8,120 bbl/i)).toBeInTheDocument()
    expect(screen.getByText(/^6$/)).toBeInTheDocument()
    expect(screen.getByText(/^3$/)).toBeInTheDocument()
  })
})
