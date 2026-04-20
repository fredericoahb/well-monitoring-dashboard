SHELL := /bin/bash
NPM ?= npm
COMPOSE ?= docker compose

.PHONY: help install dev build preview test test-watch lint typecheck check clean docker-build docker-up docker-dev docker-down docker-logs

help:
	@echo "Available targets:"
	@echo "  make install      - install dependencies"
	@echo "  make dev          - run local dev server"
	@echo "  make build        - build production bundle"
	@echo "  make preview      - preview built app"
	@echo "  make test         - run tests once"
	@echo "  make test-watch   - run tests in watch mode"
	@echo "  make lint         - run eslint"
	@echo "  make typecheck    - run TypeScript type check"
	@echo "  make check        - run lint + typecheck + test + build"
	@echo "  make docker-build - build production image"
	@echo "  make docker-up    - run production container on http://localhost:8080"
	@echo "  make docker-dev   - run dev container on http://localhost:5173"
	@echo "  make docker-down  - stop containers"
	@echo "  make docker-logs  - tail container logs"

install:
	$(NPM) install

dev:
	$(NPM) run dev

build:
	$(NPM) run build

preview:
	$(NPM) run preview

test:
	$(NPM) run test

test-watch:
	$(NPM) run test:watch

lint:
	$(NPM) run lint

typecheck:
	$(NPM) run typecheck

check:
	$(NPM) run check

clean:
	rm -rf dist coverage .vite node_modules

docker-build:
	$(COMPOSE) build app

docker-up:
	$(COMPOSE) up --build -d app

docker-dev:
	$(COMPOSE) --profile dev up --build app-dev

docker-down:
	$(COMPOSE) down

docker-logs:
	$(COMPOSE) logs -f
