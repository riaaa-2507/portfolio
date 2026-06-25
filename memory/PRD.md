# Personal Portfolio · PRD

## Original Problem Statement
Premium, interactive, single-page personal website telling a story:
Mission → Vision → Journey → Skills → Projects → Achievements → Certificates → Contact.
Ambitious, youthful, intellectually curious, purpose-driven. NOT a corporate resume.

## User Choices (Dec 2025)
- Placeholder content (editable)
- "Surprise me" visual style → designer chose **Warm Luxury / Intellectual Expressive** (dark deep indigo + coral + warm gold + plum accents)
- No backend — pure static SPA
- Placeholder PDF for resume
- Identity brief: bright, confident, ambitious young woman in tech; vibrant but sophisticated; commitment to equality, social impact, empowerment
- Fonts: Outfit (display) + Manrope (body) + Instrument Serif (italic accents)

## Architecture
- React 19 SPA (no backend)
- Tailwind CSS + custom CSS variables (dark mode default)
- Framer Motion for entrance/scroll/carousel/modal animations
- Lucide-react icons
- Shadcn UI primitives available (used minimally; custom layouts dominate)
- Single route `/` rendering all sections

## File Map
- `src/App.js` — composition root
- `src/content.js` — all editable placeholder content (SITE, VISION, JOURNEY, SKILLS, PROJECTS, ACHIEVEMENTS, CERTIFICATES, CERT_CATEGORIES)
- `src/sections/Nav.jsx` — sticky glass nav, mobile menu
- `src/sections/Hero.jsx` — mission-first hero, animated carousel, portrait frame
- `src/sections/Vision.jsx` — "Why I Build" + 4 pillars
- `src/sections/Journey.jsx` — alternating timeline (7 milestones)
- `src/sections/Skills.jsx` — 4 grouped cards, no progress bars
- `src/sections/Projects.jsx` — 3 premium cards (image, tech, GitHub, demo, learning)
- `src/sections/Achievements.jsx` — 6 stat cards
- `src/sections/Certificates.jsx` — category filters + masonry + modal
- `src/sections/Connect.jsx` — email/LinkedIn/GitHub + resume + quote + footer
- `public/resume-placeholder.pdf` — replaceable PDF

## What's Implemented (2025-12)
- All 8 sections + sticky nav with mobile menu
- Mission-first hero (mission is largest); animated 6-string carousel
- Portrait frame with glow + "Currently" chip + "est. 2017" notch
- Smooth-scroll anchor links
- Certificate gallery with filter pills (All / Programming / Data Analytics / Leadership / Other Learning) + modal preview
- Resume PDF download from nav and contact
- Dark mode, fully responsive (375px → desktop), SEO meta + OG tags
- All interactive elements have `data-testid`
- 100% pass on testing agent (frontend) — see `/app/test_reports/iteration_1.json`

## Prioritized Backlog
- **P1**: Replace placeholders with real content (name, photo, university, projects, certificates, links, resume)
- **P1**: Add custom favicon and OG image
- **P2**: Add a working contact form (requires adding backend)
- **P2**: Lenis-based momentum smooth scroll for premium feel
- **P2**: Per-project detail pages or modal expansion
- **P3**: Subtle particle/canvas background in hero
- **P3**: Light mode toggle (currently dark-only by design)
- **P3**: Blog / writing section
- **P3**: Analytics / view counter

## Notes
- Pure SPA — no backend, no DB used in this iteration.
- All content lives in `src/content.js` — non-design edits should never touch JSX.
