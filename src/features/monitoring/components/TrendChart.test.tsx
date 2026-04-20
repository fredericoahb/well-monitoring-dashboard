import { render, screen } from '@testing-library/react'
import { monitoringMock } from '@/features/monitoring/mocks/data'
import { TrendChart } from './TrendChart'

describe('TrendChart', () => {
  it('renders chart title', () => {
    render(<TrendChart title="Overview" data={monitoringMock.wells[0].trend24h} />)
    expect(screen.getByText('Overview')).toBeInTheDocument()
  })
})
