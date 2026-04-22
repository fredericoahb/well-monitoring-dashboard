import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import { MonitoringDashboard } from './MonitoringDashboard'

describe('MonitoringDashboard', () => {
  it('renders mocked wells', async () => {
    const client = new QueryClient()
    render(
      <QueryClientProvider client={client}>
        <MonitoringDashboard />
      </QueryClientProvider>,
    )
    await waitFor(() => {
      expect(screen.getByText('Well Alpha-01')).toBeInTheDocument()
    })
  })
})
