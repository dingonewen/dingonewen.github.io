# Yiwen Ding — Personal Portfolio

Personal portfolio and resume site for Yiwen Ding, Penn Master of Applied Science in CS student and software engineering intern.

🔗 **Live Site**: [https://www.dingonewen.dev](https://www.dingonewen.dev)

---

## Stack

| Layer | Tech |
|---|---|
| Generator | Jekyll + GitHub Pages |
| Theme base | [modern-resume-theme](https://github.com/sproogen/modern-resume-theme) (heavily customized) |
| Styling | SCSS — Atom One Dark, Consolas monospace |
| Content | `_config.yml` — YAML with Liquid + Markdown (kramdown GFM) |
| Interactivity | Vanilla JS |

---

## Customizations

### Visual Theme
- **Atom One Dark** color scheme — `#282c34` background, green/purple/blue/yellow/red accents
- Consolas monospace typography throughout
- Colors integrated into base SCSS partials (`_sass/`) — no `!important` wars

### Animations & Effects
- `nameReveal` — name fade-in with letter-spacing collapse
- `fadeInUp` — staggered paragraph reveal in About section
- **Scroll-triggered reveal** — IntersectionObserver adds `.is-visible` as cards enter viewport
- **Cursor spotlight** — `--mouse-x`/`--mouse-y` CSS custom properties drive radial-gradient overlay on cards
- Card lift on hover: `translateY(-4px)` + box-shadow
- Social icon hover: green circle → blue ring outline transition

### Layout
- **Three-column layout** (`layout: three-col`) — image (38%) | quote/body (35%) | title/details (27%)
- **Three-column right** (`layout: three-col-right`) — details left, image center, body right; poster zoom hover
- Entry thumbnail images with `object-fit: contain`, hover scale, `loading="lazy"`
- `border: weak` dashed separators between entries

### Header
- Status badge with pulsing green dot
- Hover-to-reveal contact info (anti-scraping)
- Console easter egg (Atom One Dark themed)

---

## Content

### Education
- **Penn MAS-CS** — University of Pennsylvania (Aug 2025 – May 2027), GPA 3.9
- **BS Food Science** — Cornell University, Magna Cum Laude (2018–2022), GPA 3.9
- **BEng Food Science & Engineering** — China Agricultural University, Dual Degree (2018–2022)

### Experience
- **Cronwell** — Software Engineering Intern (Jun 2026 – Present)
- **FIFA World Cup 2026** — Accreditation & Fan Operations Support (May – Jul 2026)
- **Amerigo Scientific** — Project Manager (Jun 2023 – May 2025)
- **Cornell O'Brien Lab** — Clinical Research Coordinator (Dec 2022 – Jun 2023)
- **Eurofins Lancaster Laboratories** — Associate Scientist (Aug – Dec 2022)

### Projects
- **Vellum** — LLM-powered autonomous email agent with integration testing sandbox
- **MOSH Synapse** — Omnichannel analytics with CoxPH churn model + DCF LTV simulator
- **Dingle** — Hybrid BM25 + vector search engine with RAG (C++ server from scratch)
- **Branch Barber** — Chrome extension: AI chat history as interactive thinking tree
- **Ding's NeuroAtlas** — Interactive 3D brain anatomy from MRI data
- **Oystraz** — Gamified health tracking with virtual character
- **Genetic Data Explorer** — Genetic variant annotation with ACMG visualizations
- **Clinical Research** — USDA-funded DHA bioavailability study (O'Brien Lab)
- **Microbiota Research** — Bumblebee gut microbiota (*Insect Science* + *PNAS*)

---

## Local Development

```bash
git clone https://github.com/dingonewen/dingonewen.github.io.git
cd dingonewen.github.io
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`.

> The `_site/` directory is git-ignored. GitHub Pages builds from source on every push. Hard-refresh after deploys to bypass browser cache.

---

## File Structure

```
_config.yml              # All content and site config
assets/
  main.scss              # Custom styles: animations, layouts, refinements
  js/index.js            # Scroll reveal, cursor spotlight, console easter egg
_sass/                   # Base theme partials (dark-adapted)
  base.scss              # Bootstrap grid, Font Awesome, reset
  type.scss              # Typography, colors
  modern-resume-theme.scss  # Layout grid, cards, profile, quote, footer
  button.scss            # Social icon buttons
  icons.scss             # Social icon list
_includes/
  section-list.html      # Renders all list sections (left, right, three-col, three-col-right)
  header.html            # Status badge, contact hover-reveal, social icons
  about.html             # Profile image + about content
  a.html                 # Anchor helper (protocol-aware)
_layouts/
  default.html           # Base page layout
index.md                 # Homepage (layout: default)
```

---

## Cleanup (2026-07)

Removed ~30 files inherited from the original template fork that were never used:
- `_includes/v1/` — legacy v1 template system (dead since `version: 2`)
- `_test/` — CI test fixtures for upstream theme
- `lib/`, `*.gemspec` — Ruby gem metadata
- `app.json`, `Procfile`, `.dockerignore`, `docker-compose.yml` — Heroku/Docker
- `_sass/dark.scss` — unused dark-mode toggle (site is always dark)
- `.github/ISSUE_TEMPLATE/` — upstream issue templates
- Duplicate `assets/favicon.ico`

---

## Credits

- Original theme: [modern-resume-theme](https://github.com/sproogen/modern-resume-theme) by [@sproogen](https://github.com/sproogen) — MIT License
- Color scheme: Atom One Dark
- Icons: [Font Awesome](https://fontawesome.com/) 6.5.1

---

*Last updated: July 2026*
