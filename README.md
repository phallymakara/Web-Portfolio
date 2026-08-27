# Makara Phally — Developer Portfolio & AI Systems Showcase

A modern, fast, and responsive personal portfolio website designed with an editorial aesthetic, dark/light theme support, deep hash routing, and detailed sections showcasing AI engineering projects, technical stack, career experience, and blog articles.

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## Features

- **Editorial & Minimalist UI**: Clean typography (Inter + JetBrains Mono), sleek dark/light mode toggle with system preference detection, and smooth layout transitions.
- **Deep-Linkable Navigation**: Hash-based client-side routing (`#projects`, `#projects/:slug`, `#stack`, `#work`, `#now`, `#blog`, `#blog/:slug`, `#contact`, `#about`).
- **Interactive Project Showcase**:
  - Filterable by categories (*All*, *AI & Agents*, *Machine Learning*, *Systems*, *Web*).
  - Detailed case study pages with problem statements, architecture diagrams, key features, metrics, and tech badges.
- **Tech Stack & Tooling Grid**: Grouped by tier (Languages, AI & ML, Backend, Frontend & DevOps) with experience levels.
- **Career Timeline & Experience**: Interactive work history with role highlights, key achievements, and metric tags.
- **Now Page (`/now`)**: Dedicated living document of current focus, reading list, ongoing experiments, and life status.
- **Articles & Insights**: Technical blog writing section with clean markdown/editorial layout and metadata.
- **Contact Hub**: Built-in interactive contact form with copy-to-clipboard actions and direct social links.

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

---

## Quick Start Guide

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js**: `v18.0.0` or higher (Recommended: LTS `v20.x`)
- **npm** (comes with Node.js), **pnpm**, or **yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/phallymakara/Web-Portfolio.git
cd Web-Portfolio
```

### 2. Install Dependencies

Using `npm`:
```bash
npm install
```

*(Or using `pnpm install` / `yarn install`)*

### 3. Start the Development Server

```bash
npm run dev
```

The application will start locally at:
**`http://localhost:5173`** (or the port displayed in your terminal).

---

## Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Runs TypeScript type checks (`tsc`) and compiles optimized production assets into `dist/`. |
| `npm run preview` | Spins up a local static server to preview the built `dist/` bundle. |

---

## Project Structure

```text
Web-Portfolio/
├── public/                  # Static assets (images, icons, resume, etc.)
│   └── images/
│       └── profile.jpg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── layout/          # Header, Footer, Container, Navigation
│   │   └── ui/              # Badges, Buttons, Cards, Modals, etc.
│   ├── data/                # Content data files (easy to customize)
│   │   ├── blog.ts          # Blog posts and articles
│   │   ├── experience.ts    # Career history and milestones
│   │   ├── now.ts           # Current activities and focus
│   │   ├── profile.ts       # Profile bio, social links, philosophy
│   │   ├── projects.ts      # Projects data & detailed case studies
│   │   └── stack.ts         # Technologies, tools, and proficiencies
│   ├── hooks/               # Custom React hooks (e.g., useTheme)
│   ├── pages/               # Page views (Home, About, Projects, Stack, Work, etc.)
│   ├── types/               # TypeScript interface and type declarations
│   ├── App.tsx              # Root component & view router
│   ├── index.css            # Tailwind directives and global CSS rules
│   └── main.tsx             # Application entry point
├── index.html               # Main HTML template & font preloads
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

---

## Customization Guide

You can customize the portfolio contents without touching the component templates by editing the files inside `src/data/`:

1. **Personal Information & Bio**:
   - Edit [`src/data/profile.ts`](file:///d:/Personal/Project/Web-Portfolio/src/data/profile.ts) to update your name, title, bio, email, social links, and engineering philosophy.
2. **Projects & Case Studies**:
   - Edit [`src/data/projects.ts`](file:///d:/Personal/Project/Web-Portfolio/src/data/projects.ts) to add or modify projects, tags, metrics, architecture details, and live URLs.
3. **Experience & Roles**:
   - Edit [`src/data/experience.ts`](file:///d:/Personal/Project/Web-Portfolio/src/data/experience.ts) to update your work history, company details, responsibilities, and achievements.
4. **Tech Stack**:
   - Edit [`src/data/stack.ts`](file:///d:/Personal/Project/Web-Portfolio/src/data/stack.ts) to adjust categorized skills, technologies, and years of experience.
5. **Now & Current Focus**:
   - Edit [`src/data/now.ts`](file:///d:/Personal/Project/Web-Portfolio/src/data/now.ts) to update what you are currently building, learning, and reading.
6. **Blog Posts**:
   - Edit [`src/data/blog.ts`](file:///d:/Personal/Project/Web-Portfolio/src/data/blog.ts) to publish new articles and guides.

---

## Deployment

### Vercel (Recommended)

1. Push your repository to GitHub / GitLab.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.

### GitHub Pages

1. In `vite.config.ts`, add the `base` field if deploying under a subpath:
   ```ts
   export default defineConfig({
     base: '/<repository-name>/',
     plugins: [react()],
   })
   ```
2. Build the app and deploy the `dist/` directory using `gh-pages` or GitHub Actions.

### Netlify

1. Connect your repository in [Netlify](https://www.netlify.com).
2. Set Build Command to `npm run build` and Publish Directory to `dist`.

---

## License

This project is open source and available under the [MIT License](LICENSE).
