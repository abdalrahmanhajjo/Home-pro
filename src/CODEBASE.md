# HomePro — `src/` Codebase Documentation

> A modern React landing page for a home services company (repairs, maintenance, improvements).  
> Built with **Vite**, **React**, **Bootstrap 5**, and custom CSS.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Folder Structure](#folder-structure)
3. [Entry Points](#entry-points)
4. [Components](#components)
5. [Styles](#styles)
6. [Design System](#design-system)
7. [Key Patterns](#key-patterns)
8. [Tech Stack](#tech-stack)

---

## Project Overview

**HomePro** is a single-page marketing website for a home services company. It has no routing — all sections live on one scrollable page rendered in sequence by `App.jsx`. There is no backend, no API calls, and no global state manager. All data (services list, FAQ items, testimonials, blog posts) is hardcoded as arrays inside each component.

---

## Folder Structure

```
src/
├── main.jsx                  ← React entry point
├── App.jsx                   ← Page layout orchestrator
│
├── components/               ← One file per section
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Guarantee.jsx
│   ├── HowItWorks.jsx
│   ├── Reviews.jsx
│   ├── Blog.jsx
│   ├── Faq.jsx
│   ├── Cta.jsx
│   └── Footer.jsx
│
└── styles/                   ← One CSS file per component
    ├── global.css
    ├── Navbar.css
    ├── Hero.css
    ├── About.css
    ├── Services.css
    ├── Guarantee.css
    ├── HowItWorks.css
    ├── Reviews.css
    ├── Blog.css
    ├── Faq.css
    ├── Cta.css
    └── Footer.css
```

---

## Entry Points

### `main.jsx`
The root of the React app.

- Imports **Bootstrap CSS** globally (layout + utilities)
- Imports `global.css` (CSS variables, icon system, resets)
- Wraps `<App />` in `<React.StrictMode>`
- Mounts to the `#root` div in `index.html`

### `App.jsx`
Pure layout component — no logic, no state.

Renders all page sections in this order:

| # | Component     | Section ID  |
|---|---------------|-------------|
| 1 | `<Hero />`    | —           |
| 2 | `<About />`   | `#about`    |
| 3 | `<Services />`| `#services` |
| 4 | `<Guarantee />`| —          |
| 5 | `<HowItWorks />`| —         |
| 6 | `<Reviews />` | —           |
| 7 | `<Blog />`    | `#blog`     |
| 8 | `<Faq />`     | —           |
| 9 | `<Cta />`     | `#contact`  |
| 10| `<Footer />` | —           |

---

## Components

### `Navbar.jsx`
**Purpose:** Fixed top navigation bar.

**State:**
| Variable    | Type    | Purpose                        |
|-------------|---------|--------------------------------|
| `open`      | boolean | Controls mobile menu visibility|

**Features:**
- Logo + brand name on the left
- Desktop nav links: About, Services, Blog, Contact
- "24 Hour Services" red status badge (desktop only)
- Hamburger button that opens a mobile sidebar (offcanvas)
- Locks `document.body` scroll when mobile menu is open
- Closes mobile menu when a nav link is clicked

**Rendered inside:** `Hero.jsx` (not directly in `App.jsx`)

---

### `Hero.jsx`
**Purpose:** Full-screen hero banner at the top of the page.

**Features:**
- Contains `<Navbar />` at the top
- Two background images (left technician, right technician) with dark gradient overlays
- Main headline and subtitle
- Two trust badges: "Free Quotes" and "100% Commitment-Free"
- "Call Us Now" CTA button with phone icon
- 4 mini feature cards at the bottom row:
  - Satisfaction Guarantee
  - 24H Availability
  - Local US Professional
  - Flexible Appointments
- Decorative notch shape at the bottom (clip-path)

**No state. No logic.**

---

### `About.jsx`
**Purpose:** Company intro section.

**Section ID:** `#about`

**Layout:** Two columns on desktop (text left, image right); stacks on mobile.

**Content:**
- Heading: *"Professional for your home services"*
- Description paragraph
- 6 checkmark list items in a 2-column grid
- Contact alert box showing phone number **(888) 617-5894**
- Roof workers image with decorative clip-path shape

**No state. No logic.**

---

### `Services.jsx`
**Purpose:** Displays the company's service offerings as a card grid.

**Section ID:** `#services`

**Data (hardcoded array of 7 services):**

| Icon class    | Title                |
|---------------|----------------------|
| `ic-plumbing` | Plumbing Services    |
| `ic-roof`     | Roofing Repair       |
| `ic-wall`     | Mold Removal         |
| `ic-wood`     | Tree Trimming        |
| `ic-repair`   | Appliance Repair     |
| `ic-bathroom` | Bathroom Remodeling  |
| `ic-door`     | Locksmith            |

- An 8th "More service?" card contains a CTA button
- Grid: **1 column** (mobile) → **2 columns** (tablet) → **4 columns** (desktop)

**No state.** Renders via `.map()` over the services array.

---

### `Guarantee.jsx`
**Purpose:** Dark blue section listing why customers should trust HomePro.

**Content:** 6 benefit cards in a 2-column grid:

| Icon              | Benefit                  |
|-------------------|--------------------------|
| `ic-guarantee`    | Satisfaction Guarantee   |
| `ic-quotes`       | Free Quotes              |
| `ic-pin`          | Local Professionals      |
| `ic-clock`        | 24-Hour Service          |
| `ic-calendar`     | Flexible Appointments    |
| `ic-repair`       | Expertise                |

- Decorative white vertical bars on left/right edges (hidden on medium screens)

**No state. No logic.**

---

### `HowItWorks.jsx`
**Purpose:** Explains the 3-step process of using HomePro.

**Layout:** Two columns — artwork (left) + steps list (right); stacks on mobile.

**Left side (artwork):**
- Background frame with clip-path mask
- Worker image absolutely positioned
- A "Verified" badge overlaid on the frame

**Right side (3 steps):**

| Step | Title                    |
|------|--------------------------|
| 1    | Call us anytime 24/7     |
| 2    | Schedule Service         |
| 3    | Your request is completed|

**No state. No logic.**

---

### `Reviews.jsx`
**Purpose:** Testimonial carousel with customer reviews.

**State:**
| Variable      | Type   | Purpose                             |
|---------------|--------|-------------------------------------|
| `activeIndex` | number | Index of the currently shown review |

**Data:** Array of 4 testimonials (each with text, author name, avatar).

**Features:**
- Previous / Next navigation buttons (disabled at boundaries)
- Dot indicators — active dot widens to a pill shape
- 4-star rating display
- Trustpilot logo
- Gradient divider at the bottom
- Content fades on change (CSS animation)
- Responsive: smaller nav buttons on mobile

---

### `Blog.jsx`
**Purpose:** Displays 3 blog post preview cards.

**Section ID:** `#blog`

**Data (3 posts):**

| Image | Date         | Title                                    |
|-------|--------------|------------------------------------------|
| img   | Jan 19, 2023 | Smart Home Systems & Maintenance         |
| img   | Jan 19, 2023 | Home Repairs and Renovations             |
| img   | Jan 19, 2023 | Painting Techniques for Kitchen          |

**Each card includes:**
- Fixed-height image (303px desktop)
- Date, title, excerpt
- Category tag pills (Plumbing, Architecture, Maintenance, etc.)
- "View More" link with `›` icon

**Grid:** 3 columns (desktop) → 1 column (mobile)  
**Tags:** Hidden on mobile (replaced with `…`)

**No state.** Renders via `.map()`.

---

### `Faq.jsx`
**Purpose:** Frequently asked questions with an animated accordion.

**State:**
| Variable    | Type           | Purpose                            |
|-------------|----------------|------------------------------------|
| `openIndex` | number \| null | Which FAQ item is currently expanded |

**Data (5 FAQ items):**

| Question                            |
|-------------------------------------|
| What is HomePro?                    |
| Are service providers reliable?     |
| What if I have a complaint?         |
| How are payments handled?           |
| How do I leave a review?            |

**Features:**
- Sticky heading column on the left (desktop)
- "Get Help Now" link next to the heading
- Smooth expand/collapse using CSS Grid height trick (`grid-template-rows: 0fr → 1fr`)
- Chevron icon rotates 180° when item is open
- Open item gets a blue background

**Layout:** Two columns on desktop (heading + accordion); stacks on mobile.

---

### `Cta.jsx`
**Purpose:** Final call-to-action section before the footer.

**Section ID:** `#contact`

**Features:**
- SVG notch / wave shape as the top separator (white on dark blue)
- Worker + house image (right-aligned)
- Headline: *"Already to improve or repair your home? Let's Talk!"*
- Feature checkmarks
- "Call Us Now" button with phone icon

**No state. No logic.**

---

### `Footer.jsx`
**Purpose:** Site footer with newsletter signup, links, and social media.

**Features:**

1. **Newsletter card** (light blue background)
   - Heading, subtitle
   - Email input + "Subscribe" button

2. **Footer grid (4 columns desktop):**
   - Brand: logo, description, social icons (YouTube, Instagram, Facebook, Twitter, Email)
   - Company links: About, Services, Blog, Contact
   - Legal links: Terms, Privacy, Cookies, License

3. **Copyright bar** — year generated dynamically via `new Date().getFullYear()`

**No state. No logic.**

---

## Styles

Every component imports its own CSS file. Styles are **not scoped** (no CSS Modules) — they rely on specific class names.

### `global.css`
The foundation of the entire design system.

**Contains:**
- **CSS custom properties** (variables) on `:root`
- **Reset rules** for `*`, `html`, `body`, `a`, `img`
- **`scroll-behavior: smooth`** for anchor navigation
- **Icon system** — 20+ icons defined as CSS classes using `mask-image` with inline base64 SVGs

#### CSS Variables Reference

| Variable             | Value       | Usage                          |
|----------------------|-------------|--------------------------------|
| `--dark-blue`        | `#142257`   | Primary dark background         |
| `--primary-blue`     | `#15B2F5`   | Accent color, buttons, links    |
| `--text-dark`        | `#171923`   | Main body text                  |
| `--text-muted`       | `#5d6681`   | Subtitles, descriptions         |
| `--soft-gray`        | `#f0f2f8`   | Light section backgrounds       |
| `--accent-red`       | `#ff5f5f`   | "24H" status badge              |

#### Icon Classes

Icons are applied by adding `.ic-{name}` to a `<span>` or `<i>` element:

```
ic-menu       ic-close      ic-check      ic-phone
ic-guarantee  ic-clock      ic-pin        ic-calendar
ic-repair     ic-roof       ic-wall       ic-wood
ic-plumbing   ic-bathroom   ic-door       ic-quotes
ic-chevron    ic-angle-right
```

---

### Component CSS Files Summary

| File              | Lines | Key Techniques                                      |
|-------------------|-------|-----------------------------------------------------|
| `Navbar.css`      | 177   | Fixed position, z-index, offcanvas sidebar (273px)  |
| `Hero.css`        | 492   | Gradient overlays, `clamp()` sizing, clip-path notch|
| `About.css`       | 115   | Clip-path for image shape, alert box                |
| `Services.css`    | 123   | Dark card grid, icon squares                        |
| `Guarantee.css`   | 118   | Dark section, decorative white bars                 |
| `HowItWorks.css`  | 304   | Clip-path artwork, absolute badge, worker overlay   |
| `Reviews.css`     | 293   | Carousel buttons, dot pill animation, star rating   |
| `Blog.css`        | 98    | Fixed-height card images, tag pills                 |
| `Faq.css`         | 253   | `grid-template-rows` accordion, chevron rotation    |
| `Cta.css`         | 208   | SVG notch separator, responsive clip-path           |
| `Footer.css`      | 350   | Newsletter input group, social hover, link columns  |

---

## Design System

### Colors

| Name          | Hex       | Used For                        |
|---------------|-----------|---------------------------------|
| Dark Blue     | `#142257` | Navbar, hero overlay, dark sections, footer |
| Primary Blue  | `#15B2F5` | Buttons, links, active states, CTA accents |
| Text Dark     | `#171923` | Headings and body text          |
| Text Muted    | `#5d6681` | Descriptions, subtitles         |
| Soft Gray     | `#f0f2f8` | Newsletter card, light backgrounds |
| Accent Red    | `#ff5f5f` | "24H Services" badge            |
| White         | `#ffffff`  | Text on dark backgrounds        |

### Typography

- **Font Family:** `"Plus Jakarta Sans"` (loaded externally) + system fallbacks
- **Weights used:** 400 (regular), 500 (medium), 700 (bold), 800 (extra-bold)
- **Letter spacing:** `-1px` to `-2px` on large headings
- **Fluid sizing:** `clamp(min, preferred, max)` used throughout for responsive type

### Breakpoints

| Breakpoint | Width       | Bootstrap alias |
|------------|-------------|-----------------|
| Mobile     | < 480px     | xs              |
| Small      | 576px       | sm              |
| Tablet     | 767.98px    | md              |
| Desktop    | 991.98px    | lg              |
| Large      | 1199.98px   | xl              |
| X-Large    | 1399.98px   | xxl             |

---

## Key Patterns

### 1. Static Data in Components
All content (services, reviews, FAQ, blog posts) is stored as plain JS arrays **inside** the component file. There is no separate data layer or JSON files.

```jsx
// Example from Services.jsx
const services = [
  { icon: 'ic-plumbing', title: 'Plumbing Services', desc: '...' },
  { icon: 'ic-roof',     title: 'Roofing Repair',    desc: '...' },
  // ...
];
```

### 2. CSS Icon System
Icons use a CSS `mask-image` approach — no icon font, no external library. A colored `<span>` has its shape masked by an inline SVG:

```css
.ic-check {
  mask-image: url("data:image/svg+xml,...");
  background-color: var(--primary-blue);
  width: 20px;
  height: 20px;
}
```

### 3. Accordion Animation (FAQ)
Smooth expand/collapse without JavaScript height calculations — uses CSS Grid:

```css
/* Collapsed */
.faq-body { display: grid; grid-template-rows: 0fr; }

/* Expanded */
.faq-body.open { grid-template-rows: 1fr; }

/* Inner wrapper clips overflow */
.faq-inner { overflow: hidden; }
```

### 4. Mobile Menu with Body Lock
When the Navbar mobile menu opens, `document.body.style.overflow = 'hidden'` prevents the page from scrolling behind the overlay. It resets to `''` on close.

### 5. Responsive Images
Hero background images use `clamp()` for sizing rather than media queries for every breakpoint:

```css
.hero-img { width: clamp(200px, 40vw, 600px); }
```

### 6. Dynamic Copyright Year
The footer always shows the current year — no manual updates needed:

```jsx
<span>{new Date().getFullYear()}</span>
```

---

## Tech Stack

| Tool / Library  | Version | Role                            |
|-----------------|---------|---------------------------------|
| React           | 18+     | UI component framework          |
| Vite            | 5+      | Build tool and dev server       |
| Bootstrap 5     | CSS only| Grid system and utility classes |
| Plus Jakarta Sans | —     | Primary font (external)         |
| Custom CSS      | —       | All component-specific styling  |

> **No routing library** (React Router not used — single page).  
> **No state manager** (Redux/Zustand not used — local `useState` only).  
> **No UI component library** (no MUI/Chakra — fully custom styled).  
> **No HTTP client** (no Axios/fetch — no API calls).
