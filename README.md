# Git Journey

Presentación interactiva sobre Git y GitHub para Hackathon.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Deploy a GitHub Pages

El proyecto está configurado con el base path `/git-journey/`.

### Opción 1: Manual

```bash
npm run build
# Subir el contenido de dist/ al branch gh-pages
```

### Opción 2: GitHub Actions

Crear `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Estructura

```
src/
├── components/
│   ├── layout/       # Sidebar, MainLayout
│   └── ui/           # Command, Terminal, CommitCard, Timeline, etc.
├── pages/            # Secciones de la presentación
├── data/             # Datos estáticos (navegación, comandos)
├── hooks/            # Custom hooks
├── lib/              # Utilidades
└── styles/           # CSS global
```
