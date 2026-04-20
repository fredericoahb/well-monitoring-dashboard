# Well Monitoring Dashboard

Production-focused frontend for real-time well surveillance, alarm visibility, and short-horizon production trend analysis.

![Dashboard Demo](public/demo.gif)

## Highlights

- React 19 + TypeScript + Vite
- Tailwind CSS + reusable UI components
- Leaflet + OpenStreetMap
- Recharts for time-series visualization
- TanStack Query + Zustand
- Docker for production and development
- GitHub Actions CI + GitHub Pages deploy
- Realistic mocked oil & gas telemetry

## Run locally

```bash
make install
make dev
```

Open `http://localhost:5173`

## Quality gate

```bash
make check
```

## Docker

```bash
make docker-up
```

Open `http://localhost:8080`

Development container:

```bash
make docker-dev
```

## GitHub push

```bash
git init
git add .
git commit -m "feat: final corrected well monitoring dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/well-monitoring-dashboard.git
git push -u origin main
```

## Pages

This project is already configured for a repository named `well-monitoring-dashboard`.
In GitHub:
1. Settings
2. Pages
3. Source = GitHub Actions

## Notes

- If you change the repo name, update `base` in `vite.config.ts`.
- Replace `public/demo.gif` with your own screen recording later.
