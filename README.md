# Jenil.de – Personal Portfolio (React)

A clean, fast portfolio website to showcase projects, skills, and experience.

* **Live site:** [https://jenil.de](https://jenil.de)
* **Author:** Jenil Paladiya
* **Tech:** React (Vite) · Tailwind CSS · React Router · (optional) Framer Motion · (optional) react‑i18next

> This README is a starter you can keep in your repo. Adjust any section to match your codebase.

---

## 🚀 Features

* Responsive, mobile‑first UI
* Projects grid with live/code links
* About & Skills sections
* Contact section with social links
* Dark mode ready (Tailwind `dark` class)
* SEO basics (meta tags, Open Graph, favicon)
* Easy content editing via a small data file

> If your current site differs, update the **Tech Stack**/**Project Structure** to match your repo.

---

## 🧱 Tech Stack

* **Frontend:** React 18 + Vite
* **Styling:** Tailwind CSS (utility‑first)
* **Routing:** React Router (optional)
* **Animations:** Framer Motion (optional)
* **i18n (optional):** react‑i18next

---

## 📸 Screenshots
![1](https://github.com/user-attachments/assets/a027f25d-2092-4e09-9988-5ac4eddc67ac)
![6](https://github.com/user-attachments/assets/8b1d3282-a768-4530-abc8-f0f968bd1a49)
![5](https://github.com/user-attachments/assets/e5c2d276-42b3-4f6d-911a-8d502238e0b1)
![4](https://github.com/user-attachments/assets/5a69aa91-ff7d-4590-ab5d-6a98ee9708af)
![3](https://github.com/user-attachments/assets/1e7c45fa-e84d-4af4-be01-a6a52ffaf163)
![2](https://github.com/user-attachments/assets/5cd75c22-7e9a-419c-8e28-7a6009089b6c)




---

## 📂 Project Structure (suggested)

MyResumeReact/
├─ public/
│  └─ favicon.ico
├─ src/
│  ├─ assets/                 # optional icons/fonts/svg
│  ├─ images/                 # screenshots, thumbnails, logos
│  ├─ components/             # Navbar, Footer, ProjectCard, etc.
│  ├─ pages/                  # Home, Projects, About, Contact
│  ├─ hooks/                  # useTheme, useScroll, etc.
│  ├─ Utils/                  # data + helpers (projects.js, api.js)
│  ├─ App.js
│  ├─ index.css               # imports Tailwind directives
│  ├─ index.js
│  ├─ reportWebVitals.js
│  └─ setupTests.js
├─ postcss.config.js
├─ tailwind.config.js
├─ package.json
├─ yarn.lock / package-lock.json
└─ README.md

Tip: keep folder names consistent (prefer lowercase). You can rename Utils → utils later if you like; Tailwind content paths already include all src/** files.
---

## 🛠️ Setup & Development

### Prerequisites

* **Node.js** ≥ 18

### Install

```bash
# clone your repo
git clone <your-repo-url>.git
cd <your-repo-folder>

# install deps
npm install
```

### Run locally

```bash
npm run dev
```

Open the printed URL (usually `http://localhost:5173`).

### Build & Preview

```bash
npm run build
npm run preview
```

---

## 🎛️ Configure Content

Edit the file `src/data/projects.js` (create it if missing). Example shape:

```js
// src/data/projects.js
export const projects = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Responsive portfolio built with React + Tailwind.",
    tech: ["React", "Tailwind", "Vite"],
    liveUrl: "https://jenil.de",
    codeUrl: "https://github.com/<your-username>/<your-repo>",
    image: "/screenshots/portfolio.png",
    featured: true
  },
  {
    id: "countries",
    title: "Countries App",
    description: "Browse countries with search & details using REST Countries API.",
    tech: ["React", "Axios"],
    liveUrl: "https://<deploy-link>",
    codeUrl: "https://github.com/<your-username>/countries-app",
    image: "/screenshots/countries.png"
  }
];
```

Then render them in a `Projects` component:

```jsx
import { projects } from "../data/projects";

export default function ProjectsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map(p => (
        <article key={p.id} className="bg-white dark:bg-neutral-900 rounded-2xl shadow p-4">
          {p.image && <img src={p.image} alt={p.title} className="rounded-xl mb-3" />}
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">{p.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech?.map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Live
              </a>
            )}
            {p.codeUrl && (
              <a href={p.codeUrl} target="_blank" rel="noreferrer" className="btn">
                Code
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
```

> Tip: If a project has no `codeUrl`, just omit the button.

---

## 🎨 Tailwind Setup (quick)

If starting fresh:

```bash
npm i -D tailwindcss postcss autoprefixer
# if npx is flaky on Windows, call the CLI directly
node node_modules/tailwindcss/lib/cli.js init -p
```

`tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

`src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🌐 Internationalization (optional)

To add English/German toggle with **react‑i18next**:

```bash
npm i i18next react-i18next
```

Create `src/i18n.js`:

```js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: { translation: { greeting: "Hello" } },
  de: { translation: { greeting: "Hallo" } },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
```

In `main.jsx`:

```jsx
import "./i18n";
```

Use it:

```jsx
import { useTranslation } from "react-i18next";
export default function Hero(){
  const { t, i18n } = useTranslation();
  return (
    <div>
      <p>{t("greeting")}</p>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("de")}>DE</button>
    </div>
  );
}
```

---

## 🔎 SEO Checklist

* `index.html`: set `<title>`, meta `description`, and Open Graph tags
* Add `favicon.ico` and `apple-touch-icon`
* Optional: `robots.txt` and `sitemap.xml`
* Social preview image at `public/og.png`

Example in `index.html`:

```html
<meta name="description" content="Portfolio of Jenil Paladiya – React/WordPress developer in Berlin.">
<meta property="og:title" content="Jenil Paladiya – Portfolio" />
<meta property="og:description" content="Selected projects, skills, and contact." />
<meta property="og:image" content="/og.png" />
<meta property="og:url" content="https://jenil.de" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## ☁️ Deployment

* **Vercel:** `vercel` → auto‑detects Vite. Set build command `npm run build`, output `dist/`.
* **Netlify:** build `npm run build`, publish `dist/`.
* **GitHub Pages:** `npm run build` → push `dist/` to `gh-pages` branch (use `gh-pages` package or pages settings).

---

## 🧾 License

Choose a license you prefer. Example:

```
MIT License © 2025 Jenil Paladiya
```

---

## 📬 Contact

* Website: [https://jenil.de](https://jenil.de)
* LinkedIn: [https://www.linkedin.com/in/jenil-paladiya](https://www.linkedin.com/in/jenil-paladiya)

> Found an issue or want me to list a new project? Open a PR or create an issue in the repo.
﻿# my-resume-in-react-js



