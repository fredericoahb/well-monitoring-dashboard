# SPEC: Well Monitoring Dashboard - Frontend

## Objective

Build a responsive web dashboard that allows production engineers to monitor multiple wells in near real time, visualize production trends, identify critical alarms, and track key operational KPIs.

## User Stories

- As a production engineer, I want to see a map with all wells and their current status.
- As an engineer, I want to view pressure, flow, temperature, and tank level trends for the last 24 hours and 7 days.
- As a supervisor, I want visual alerts for critical conditions such as high pressure or H2S detection.

## Functional Requirements

### Must Have

- Interactive map using Leaflet and OpenStreetMap with status-colored markers
- KPI cards for production, active wells, and open alarms
- Interactive charts using Recharts
- Filters by basin, asset, and status
- Detailed modal on well click

### Should Have

- Dark / light mode
- PDF and Excel export
- CI/CD with GitHub Actions

## Acceptance Criteria

- Dashboard data refreshes every 30 seconds
- Critical alarms are highlighted and can be acknowledged
- Charts render with realistic mocked data
- Interface is responsive for desktop and tablet
