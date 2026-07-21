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

```bash
pnpm build
# Subir el contenido de dist/ al branch gh-pages
```

## Características

- **Terminal animado** — comandos git que se tipean en vivo en la sección "Flujo de trabajo"
- **Checklist interactiva** — demo paso a paso con persistencia en localStorage y botón de reinicio
- **Scroll-spy sidebar** — navegación con resaltado automático de la sección actual y `aria-current`
- **Git commit hash** — muestra el SHA del build actual, enlace directo al commit en GitHub
- **Skip-to-content** — enlace de accesibilidad para navegación por teclado
- **Sitemap + robots.txt** — configuración SEO
- **Easter egg** — mensaje oculto para desarrolladores
- **Tema oscuro** — paleta de colores personalizada con Tailwind v4
- **GitHub Stars** — contador de estrellas en vivo

## Estructura

```
src/
├── components/
│   ├── layout/       # Sidebar, MainLayout, Section
│   └── ui/           # Command, Terminal, CommitCard, Timeline, etc.
├── pages/            # Secciones de la presentación
├── data/             # Datos estáticos (navegación, comandos)
├── hooks/            # Custom hooks
├── lib/              # Utilidades
└── styles/           # CSS global
```
