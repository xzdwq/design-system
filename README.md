# Design system
---
## Local
### dev
- storybook: `pnpm dev:storybook` - `http://localhost:6006`
- app: `pnpm dev:app` - `http://localhost:5001`

### prod preview
- storybook: `preview:storybook` - `http://localhost:6006`
- app: `preview:app` - `http://localhost:5001`
---
## Docker
### dev
- `docker-compose -f docker/development/docker-compose.yml up --build`
output:
  - storybook: `http://localhost:6006`
  - app: `http://localhost:6006/mf`
