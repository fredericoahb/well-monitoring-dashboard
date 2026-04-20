# 🛢️ Well Monitoring Dashboard

<p>
  Real-time oil & gas well monitoring dashboard with maps, KPIs, alarms and production analytics.
</p>

---

## 🚀 Tech Stack

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss)
![Recharts](https://img.shields.io/badge/Recharts-Charts-orange)
![Leaflet](https://img.shields.io/badge/Leaflet-Maps-green?logo=leaflet)
![Zustand](https://img.shields.io/badge/Zustand-State-black)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-Data-red)
![Docker](https://img.shields.io/badge/Docker-Container-blue?logo=docker)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-black?logo=githubactions)

</p>

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
