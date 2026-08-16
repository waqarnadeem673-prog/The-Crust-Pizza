# The Crust Pizza — Modern Redesign

A complete, production-ready visual redesign of [thecrustpizza.pk](https://thecrustpizza.pk/), rebuilt with a premium, cinematic design system on top of the restaurant's real business content (menu, pricing, locations, contact details, awards, and social links).

## What this is

A **static, dependency-free website** — no build step, no `npm install`, no server required. Open `index.html` in a browser, or deploy the folder as-is to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, or a plain Apache/Nginx server).

Animation libraries (GSAP, ScrollTrigger, Lenis) are loaded from CDN in each page's `<script>` tags — there is nothing to compile.

> **Note on stack:** the brief asked for a Next.js/React/Framer Motion build. This delivery is intentionally a static HTML/CSS/vanilla-JS site instead, using GSAP + ScrollTrigger + Lenis for all motion. It ships the same design, animation quality, WhatsApp ordering flow, and content architecture, but requires no Node tooling to run — just open the files. If you'd like, this can be re-scaffolded into Next.js/React on request.

## Structure

```
/
├── index.html          Homepage (hero, menu preview, about, news, locations teaser)
├── menu.html            Full menu with animated category tabs
├── news.html             Achievements / announcements
├── contact.html         All 7 branches, hours, phone/email/social
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── css/style.css     Full design system (tokens, components, responsive rules)
    └── js/
        ├── data.js       All real business data (menu, prices, locations, hours, awards)
        ├── menu-render.js Card rendering + WhatsApp message builder + tab logic
        └── main.js        Lenis smooth scroll, GSAP/ScrollTrigger animation orchestration
```

## Content source

All business content — menu items & prices, 7 branch addresses/phone numbers, hours, email, social links, and the "Rising Brand of the Year 2025" / "Best CEO of the Year" award — was extracted directly from the live site. Nothing was invented. Two menu deals (Value Deal 1 & 2) have no published price on the source site, so their cards prompt "Ask on WhatsApp" rather than a fabricated number. A leftover WordPress demo item ("Lasagne", priced in USD) was excluded as it isn't real menu content.

Food photography is referenced directly from `thecrustpizza.pk`'s existing media library (hot-linked). For a permanent production deployment, download and re-host these images on your own CDN/asset host and update the `img` paths in `assets/js/data.js`.

## WhatsApp ordering

There is no cart or checkout. Every "Order" button opens `https://wa.me/923353770072` with a pre-filled message naming the item (and price, where a single price exists). The number is the business's real published WhatsApp/phone number.

To change the number, edit `whatsappNumberIntl` in `assets/js/data.js`.

## Editing content

Everything editable lives in `assets/js/data.js` — menu items, prices, locations, hours, social links, and the award/news post. Add a new pizza, change a price, or add an 8th branch by editing that one file; every page re-renders from it.

## Design notes

- **Palette:** charcoal (#17110c) base with crust-gold (#e3a23d) and chili-red (#c43b24) accents, WhatsApp green reserved only for order actions.
- **Type:** Fraunces (display) + Inter (body) + JetBrains Mono (prices, eyebrows, tags).
- **Signature element:** every food card carries a rotated, perforated "kitchen ticket" price stub — a nod to real order tickets.
- Respects `prefers-reduced-motion`; keyboard focus states are visible throughout.

## Testing performed

- HTML tag balance checked across all 4 pages.
- All JS files pass `node -c` syntax validation.
- Menu data validated: 5 categories, 36 real items, 7 locations, correctly-encoded `wa.me` links.
- Responsive breakpoints defined for 1440 / 1280 / 1024 / 768 / 480 / 375px.
