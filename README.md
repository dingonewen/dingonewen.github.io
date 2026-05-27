# Yiwen Ding — Personal Portfolio

Personal portfolio and resume site for Yiwen Ding, Penn MAS-CS student and 2026 Summer SDE/TPM internship candidate.

🔗 **Live Site**: [https://dingonewen.github.io](https://dingonewen.github.io)

---

## Stack

| Layer | Tech |
|---|---|
| Generator | Jekyll + GitHub Pages |
| Theme base | [modern-resume-theme](https://github.com/sproogen/modern-resume-theme) |
| Styling | SCSS (heavily customized) |
| Content | `_config.yml` (Liquid + Markdown) |
| Interactivity | Vanilla JS |

---

## Customizations

### Visual Theme
- **Atom One Dark** color scheme — `#282c34` background, `#e06c75` / `#61afef` / `#c678dd` / `#98c379` / `#e5c07b` accents
- Consolas monospace typography throughout
- Custom heading colors per level (h1–h6 each a different palette color)

### Animations & Effects
- `nameReveal` keyframe on h1 — fade-in with letter-spacing collapse
- `fadeInUp` staggered animation on about-section paragraphs
- **Scroll-triggered reveal** — IntersectionObserver marks cards `.is-visible` as they enter viewport, with per-section stagger delay
- **Cursor spotlight** — CSS custom properties `--mouse-x` / `--mouse-y` drive a `radial-gradient` overlay on each card, updated via `mousemove`
- **Magnetic hover** — social icon buttons spring toward the cursor and snap back on leave
- Card lift on hover: `translateY(-4px)` + layered box-shadow

### Layout
- **Three-column layout** (`layout: three-col`) for featured experience entries — image (40%) | quote/body (35%) | title/details (25%), overriding Bootstrap's equal-thirds `col-md-4`
- Entry thumbnail images with `aspect-ratio: 4/3`, `object-fit: cover`, hover scale
- Research poster images with hover scale + glow

### Header
- Status badge with pulsing green dot ("Available for 2026 Summer Internship")
- Hover-to-reveal contact info (anti-scraping: label visible, value expands on hover)
- Developer console easter egg (styled with Atom One Dark colors)

---

## Content

### Education
- **Penn MAS-CS** — University of Pennsylvania (Aug 2025 – May 2027)
- **BS Food Science** — Cornell University, Magna Cum Laude (2018–2022)
- **BEng Food Science & Engineering** — China Agricultural University (2018–2022)

### Experience
- **FIFA World Cup 2026** — Accreditation Operations Support, Philadelphia (May 2026)
- **Amerigo Scientific** — Project Manager (Jun 2023 – May 2025)
- **Cornell O'Brien Lab** — Clinical Research Coordinator (Dec 2022 – Jun 2023)
- **Eurofins Lancaster Laboratories** — Associate Scientist (Aug 2022 – Dec 2022)

### Projects
- **MOSH Synapse** — Omnichannel analytics platform with CoxPH churn model + DCF LTV simulator
- **Dingle** — Hybrid BM25 + vector search engine with RAG pipeline backed by Claude (C++ HTTP server from scratch)
- **Branch Barber** — Chrome extension that maps AI chat history as an interactive thinking tree (published on Chrome Web Store)
- **Ding's NeuroAtlas** — Interactive 3D neuroanatomy viewer reconstructed from MRI data
- **Oystraz** — Gamified health tracking app with virtual character
- **Genetic Data Explorer** — Multi-API genetic variant annotation with ACMG pathogenicity visualizations
- **LC4 Disassembler** — Binary-to-assembly reverse engineering system in C
- **Spell Checker / Blackjack Solitaire** — Java coursework projects
- **Clinical Research** — USDA-funded DHA bioavailability study at O'Brien Lab
- **Microbiota Research** — Bumblebee gut microbiota published in *Insect Science* + *PNAS*

---

## Local Development

```bash
git clone https://github.com/dingonewen/dingonewen.github.io.git
cd dingonewen.github.io
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`.

> **Note:** The local `_site/` directory is a stale build artifact and is not committed. GitHub Pages compiles SCSS on every push — hard-refresh (`Ctrl+Shift+R`) after deploys to bypass browser cache.

---

## File Structure

```
_config.yml          # All content (education, experience, projects, about)
assets/main.scss     # All custom styles (theme, animations, layout overrides)
assets/js/index.js   # Scroll reveal, cursor spotlight, magnetic hover, console egg
_includes/
  header.html        # Status badge, contact hover-reveal
  section-list.html  # Renders list items; handles three-col and standard layouts
_layouts/
  default.html       # Base layout; conditional JS loading
```

---

## Credits

- Original theme: [modern-resume-theme](https://github.com/sproogen/modern-resume-theme) by [@sproogen](https://github.com/sproogen) — MIT License
- Color scheme: Atom One Dark (VS Code / Atom)
- Icons: [Font Awesome](https://fontawesome.com/)

---

## Contact

- 📧 dingywn@seas.upenn.edu
- 💼 [linkedin.com/in/dingyiwen](https://linkedin.com/in/dingyiwen)
- 🐙 [github.com/dingonewen](https://github.com/dingonewen)

---

*Last updated: May 2026*
