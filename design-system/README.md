# Handoff — Pegasus Pixels Frontpage

## Overview

A premium-tech homepage for **Pegasus Pixels**, a small business technology consultancy run by Alejandro. The site positions the brand as a "business technology operator" (not a web design studio) with three pillars: **Adquisición** (Acquisition), **Operaciones** (Operations), **Comunicación** (Communication).

The site is **Spanish-first** with the target market in LATAM and Spain. All copy in the design is final and should be preserved as-is.

---

## About the Design Files

The files in this bundle are **design references created in HTML** — high-fidelity prototypes showing the intended look, layout, motion, and behavior. They are **not production code to copy verbatim**.

The task is to **recreate these HTML designs in your existing codebase** (Next.js / Astro / Framer / whatever stack is in use) using its established patterns, component library, and conventions. If there is no existing stack, **Next.js 14+ with the App Router and Tailwind** is recommended for parity with the design's CSS-driven approach.

The HTML uses vanilla CSS with custom properties and Google Fonts loaded directly. In the target codebase, port these tokens to the design system (Tailwind config, CSS variables, or theme provider) and componentize the repeating elements (button, card, mini-card, gradient-text).

---

## Fidelity

**High-fidelity.** Colors, type, spacing, radii, shadows, and motion durations are all final. Reproduce them pixel-perfectly. The exact hex / `oklch` values are documented below in the **Design Tokens** section.

The only intentionally-flexible element is the **hero portrait**: it is currently a stylized placeholder (gold gradient + abstract silhouette + monogram "A."). In production, replace with Alejandro's real portrait photo — the placeholder code can be removed entirely once a real image is in place.

---

## Files

- `01-pegasus-frontpage.html` — the full homepage prototype
- `02-brand-direction.html` — the broader brand direction document (color, type, voice, components — useful for any other surface beyond this page)
- `image-slot.js` — the drag-and-drop image placeholder web component used for the portrait (can be discarded once production replaces it with a real `<img>`)
- `screenshots/` — high-resolution PNGs of each section, captured from the prototype

### Screenshots reference

| File                                  | Section                       |
|---------------------------------------|-------------------------------|
| `screenshots/01-hero.png`             | Ribbon + topbar + hero        |
| `screenshots/02-problem.png`          | "Una nota antes de empezar"   |
| `screenshots/03-stats.png`            | 4-stat editorial row          |
| `screenshots/04-workflow.png`         | 3-stage workflow              |
| `screenshots/05-engine.png`           | 3 pillars                     |
| `screenshots/06-testimonial.png`      | Single big quote              |
| `screenshots/07-usecases.png`         | Asymmetric 5-card grid        |
| `screenshots/08-closing.png`          | Closing CTA + footer          |

---

## Design Tokens

### Colors (CSS custom properties as authored)

| Token             | Value                                | Use                              |
|-------------------|--------------------------------------|----------------------------------|
| `--bg`            | `#FAFAF7`                            | Page background base             |
| `--bg-soft`       | `#F4F2EC`                            | Alternating section background   |
| `--bg-warm`       | `#FBF9F2`                            | Cards / warm surfaces            |
| `--paper`         | `#FFFFFF`                            | Elevated cards                   |
| `--rule`          | `#E4E0D4`                            | Hairline borders                 |
| `--rule-2`        | `#D2CDBC`                            | Stronger borders                 |
| `--ink`           | `#0A0A0B`                            | Body text, primary buttons       |
| `--ink-2`         | `#3D3B36`                            | Secondary body text              |
| `--ink-3`         | `#6E6C66`                            | Captions, metadata               |
| `--ink-4`         | `#A09C90`                            | Most muted text                  |
| `--sun`           | `oklch(0.86 0.16 92)`                | Brand accent (warm yellow)       |
| `--sun-dim`       | `oklch(0.74 0.14 90)`                | Hover, secondary accent          |
| `--sun-deep`      | `oklch(0.62 0.16 88)`                | Stars, chart lines               |
| `--sun-glow`      | `oklch(0.86 0.18 92 / .38)`          | Box-shadow halos                 |
| `--ok`            | `oklch(0.55 0.12 150)`               | Status dots, "verified" pulses   |

**Rule of use**: the page is ~95% monochrome (warm linen + ink). The `--sun` accent appears only where something is **live, in focus, or in motion** — pulse dots, gradient text, ribbon dot, chart endpoint, hero rating stars. Never as a background fill larger than ~30vw.

### Gradient text palette (HSL, for the animated `<span class="gtext">` blobs)

| Variable | HSL              | Color name |
|----------|------------------|------------|
| `--gt-1` | `42 90% 55%`     | Gold       |
| `--gt-2` | `28 85% 60%`     | Amber      |
| `--gt-3` | `18 70% 55%`     | Peach      |
| `--gt-4` | `50 30% 88%`     | Bone       |

### Typography

| Family               | Weights      | Use                                          |
|----------------------|--------------|----------------------------------------------|
| **Geist**            | 300 / 400 / 500 / 600 / 700 | Body, headings, UI labels  |
| **Instrument Serif** | 400 italic   | Accent — italic emphasis on single words     |
| **Geist Mono**       | 400 / 500    | Metadata only (timestamps, IDs, file paths). Used sparingly — never decoratively. |

Load via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
```

**Heading scale** (all `font-weight: 400`, `letter-spacing: -0.025em` to `-0.04em`):

| Step  | clamp                            | line-height |
|-------|----------------------------------|-------------|
| h1    | `clamp(48px, 6.4vw, 108px)`      | 0.96        |
| h2    | `clamp(36px, 4.8vw, 84px)`       | 0.98        |
| h3    | `clamp(22px, 2.2vw, 36px)`       | 1.1         |
| h4    | `clamp(18px, 1.4vw, 22px)`       | 1.25        |

**Voice rule**: sentence case throughout. Uppercase is reserved for the announcement ribbon and the mono `13–14px` system labels only. Never use uppercase for headlines or kickers. Section kickers are sentence case (e.g. "Una nota antes de empezar", "El sistema, paso a paso").

### Spacing & layout

- **Container**: `max-width: 1320px`, horizontal padding `clamp(24px, 5vw, 80px)`
- **Section padding (vertical)**: `clamp(120px, 14vw, 180px)` for major sections; `clamp(72px, 10vw, 140px)` for stat row
- **Grid gap**: typically `clamp(20px, 3vw, 40px)`
- **Border radii**: 6px (chips, small elements), 10–14px (cards), 16–20px (large containers / portrait), 999px (pills/buttons)

### Shadows

```css
/* Card */
0 20px 50px -28px rgba(80,70,30,0.16)

/* Portrait */
0 30px 80px -20px rgba(80,60,20,0.25),
0 4px 16px rgba(60,50,20,0.10)

/* Floating workflow card */
0 20px 50px -16px rgba(80,60,20,0.22),
0 2px 6px rgba(60,50,20,0.08)

/* Primary button */
0 1px 0 rgba(255,255,255,0.15) inset,
0 6px 20px rgba(10,10,11,0.10)
```

All shadows are warm-toned (rgba with brown/amber tinting), never pure black.

---

## Sections / Views

### 0. Ribbon (announcement strip)

- **Position**: very top of page, sticky? No — scrolls with content.
- **Background**: `var(--ink)` (#0A0A0B)
- **Text**: `var(--bg)` (#FAFAF7), 13px, sentence case
- **Content**: pulse dot (animated, sun-colored) + announcement copy + sun-colored underlined link
- **Padding**: `10px clamp(24px, 5vw, 80px)`

### 1. Topbar

- **Position**: sticky (`top: 0`)
- **Backdrop**: `backdrop-filter: blur(14px) saturate(140%)` over `rgba(250,250,247,0.72)` — semi-transparent so content shows through subtly on scroll
- **Border-bottom**: 1px solid `rgba(228,224,212,0.6)`
- **Padding**: `18px clamp(24px, 5vw, 80px)`
- **Layout**: three slots — brand (left), nav (center), CTAs (right)
- **Brand mark**: 24×24 rounded-square (radius 6) with dark gradient + Instrument Serif italic "P" centered
- **Nav links**: 14px `var(--ink-2)`, gap 32px, hover → `var(--ink)`
- **CTAs**: 
  - Secondary: "Iniciar sesión" — transparent + `rule-2` border
  - Primary: "Agendar llamada →" — ink fill, bg text, hover lifts 1px

### 2. Hero

The flagship section. Two-column grid with portrait + floating workflow cards on the right.

**Background**: layered radial gradients (warm yellow dominant, white wash bottom-right):
```css
background:
  radial-gradient(1400px 1000px at -10% 110%, oklch(0.92 0.20 92 / .95), transparent 65%),
  radial-gradient(1000px 800px at 35% 70%, oklch(0.94 0.18 90 / .55), transparent 60%),
  radial-gradient(1000px 800px at 110% 110%, oklch(0.99 0.01 90 / .95), transparent 60%),
  radial-gradient(600px 500px at 100% -10%, oklch(0.98 0.02 90 / .5), transparent 60%),
  linear-gradient(180deg, oklch(0.94 0.10 90) 0%, oklch(0.96 0.08 90) 60%, oklch(0.97 0.05 90) 100%);
```

**Padding**: `clamp(64px, 8vw, 120px) 0 clamp(80px, 10vw, 160px)`

**Grid**: `grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr)`, gap `clamp(40px, 6vw, 96px)`, align-items center. Collapses to single column at `max-width: 1000px`.

#### Hero left column

1. **Rating chip** — pill with 3 stacked avatars (Instrument Serif italic initials), 5 sun-deep stars, separator, "Calificado por *42 dueños de negocios*" (the number in Instrument Serif italic)
   - background `rgba(255,255,255,0.65)` + `backdrop-filter: blur(8px)`
   - border `1px solid rgba(228,224,212,0.9)`
   - padding `6px 14px 6px 6px`, radius 999px, 13px text

2. **Headline** (h1):
   ```
   Sistemas que
       operan        ← gradient-text effect
   tu negocio, no
   solo lo presentan.
   ```
   - max-width 14ch, letter-spacing `-0.04em`
   - The word "operan" is wrapped in `<span class="gtext">` (see Components section)
   - Line 2 is indented `padding-left: 1.2em` (`.indent` class) — breaks the grid intentionally

3. **Subhead** (p.sub):
   - 28px top margin, max-width 50ch, font-size `clamp(19px, 1.5vw, 23px)`
   - Words "adquisición, operaciones y comunicación" wrapped in `<em>` styled as Instrument Serif italic
   - Color `var(--ink-2)`

4. **CTAs** (40px top margin):
   - Primary `.btn.primary.lg` — "Agendar diagnóstico →"
   - Secondary `.btn.secondary.lg` — "Ver capacidades"
   - Note (13px, ink-3, with ✓ ok-color prefix) — "Sin compromiso, 30 minutos"

#### Hero right column — portrait + cards

- **Portrait slot**: `aspect-ratio: 4/5`, max-width 560px, border-radius 20px, big warm shadow
- **Placeholder** (visible until image is loaded): gradient backdrop + abstract head-and-shoulders SVG silhouette + "A." Instrument Serif monogram top-left + corner frame marks
- **Image slot**: a custom `<image-slot>` element accepts drag-and-drop in the prototype; in production, replace with a real `<img>` of Alejandro

- **5 floating workflow cards** layered absolutely over the portrait:
  | # | Position                  | Rotation | Content                                            |
  |---|---------------------------|----------|----------------------------------------------------|
  | 1 | `top: 6%; left: -8%`      | -3deg    | User icon · "Lead identificado" / "Industrias Río Claro" |
  | 2 | `top: 28%; right: -12%`   | 2deg     | Sun-bg chart icon · "Lead score" / "87/100"        |
  | 3 | `top: 52%; left: -12%`    | -1.5deg  | Message icon · "Respuesta sugerida" / "Borrador listo" + green pulse |
  | 4 | `bottom: 14%; right: -6%` | 3deg     | Calendar icon · "Reunión agendada" / "Jue 23 · 15:00" |
  | 5 | `bottom: -3%; left: 12%`  | -2deg    | Compass icon · "Sincronizando · CRM" / "HubSpot · OK"  |

  Each card has its own idle animation (`@keyframes float-1..5`, 9–13s ease-in-out infinite, max 5px translation + 0.5deg rotation drift). Cards have:
  - `background: rgba(255,255,255,0.96)`
  - `backdrop-filter: blur(14px)`
  - `border: 1px solid rgba(255,255,255,0.7)`
  - `border-radius: 14px`
  - 32×32 icon square (radius 8) on the left, two-line text on the right (11.5px label + 14px value)

#### Hero trust strip

- Grid `220px 1fr`, 40px gap, 72–120px top margin, 32px top padding, 1px top border `rgba(0,0,0,0.08)`
- Left label: 13.5px ink-3, "Integra con el stack que ya usás"
- Right: 7 inline integration names with tiny line-icons — Stripe, Notion, WhatsApp, Gmail, HubSpot, Meta Ads, Claude. 16px font, opacity 0.72.

### 3. Problem → Promise

- **Background**: `var(--bg)`
- **Padding**: `clamp(120px, 14vw, 200px) 0`
- **Kicker**: "Una nota antes de empezar" (14px ink-3, prefixed with a 28×1px ink-4 dash, 12px gap)
- **h2**: "No diseñamos páginas. *Diseñamos la forma en que un negocio funciona por dentro.*" (italic clause wrapped in `<em>` → ink-3 color)
- **Lede** (italic Instrument Serif, 20–26px, max-width 32ch): the longer paragraph about pages, funnels, dashboards being the surface of a bigger operating system

### 4. Stats

- **Background**: linear-gradient from `var(--bg)` → `var(--bg-soft)`
- **Borders**: 1px top + bottom rule
- **Padding**: `clamp(72px, 10vw, 140px) 0`
- **Grid**: 4 columns, separated by 1px right border on each `.stat`
- **Each stat**:
  - Value: `clamp(48px, 5vw, 80px)`, `letter-spacing: -0.04em`, ink color, with smaller unit (`.u` class, `0.42em`, ink-3) — e.g. `18hrs`, `2.3×`, `−64%`, `6sem`
  - Caption: Instrument Serif italic, `clamp(15px, 1.2vw, 18px)`, ink-2, max-width 22ch

  Stats in order:
  1. `18 hrs` — "recuperadas por semana en promedio."
  2. `2.3 ×` — "más conversiones desde un embudo conectado."
  3. `−64 %` — "menos errores operativos en el primer mes."
  4. `6 sem` — "para tener el sistema funcionando en producción."

At `max-width: 800px`, switches to 2×2 grid with bottom borders between rows.

### 5. Workflow

- **Background**: `var(--bg)`
- **Padding**: `clamp(120px, 14vw, 180px) 0`
- **Head** (max-width 760px): kicker "El sistema, paso a paso" + h2 "Un solo flujo, de la primera conversación al cliente." + Instrument Serif italic sub
- **Track**: 3-column grid, gap `clamp(20px, 3vw, 40px)`, collapses to single column under 900px

- **Each stage** has:
  - **Visual** (aspect-ratio 4/3, radius 16, 1px rule border, gradient warm-tinted background varying by stage 1→3 progressively warmer): a faded engineering-grid mask plus 2–3 absolutely-positioned mini-cards stacked vertically
  - **Meta** below: stage number ("Etapa uno/dos/tres", 13px ink-3) + h3 with Instrument Serif italic emphasis word + paragraph

  Stage 1 — *Encontramos a las personas correctas*
  Stage 2 — *Hacemos visible lo que en realidad pasa*
  Stage 3 — *Mantenemos las conversaciones vivas*

### 6. Engine / Pillars

- **Background**: linear-gradient from `var(--bg-soft)` → `var(--bg-warm)`
- **Padding**: `clamp(120px, 14vw, 180px) 0`
- **Head** (max-width 780px): kicker "El motor, tres oficios" + h2 "Todo bajo una sola capa." + italic sub
- **Pillars grid**: 3 columns separated by 1px rule, wrapped in 16px-radius rounded container with hairline border, collapses to single column under 900px

- **Each pillar** (padding `clamp(32px, 4vw, 56px)`, min-height 360px, paper background):
  1. Num-line: "Pilar uno/dos/tres" + tag pill ("Adquisición" / "Operaciones" / "Comunicación")
  2. h3 with one italic Instrument Serif clause
  3. Paragraph (max-width 38ch)
  4. List of 4 capabilities (auto-margin-top to bottom), each row with capability name (14px ink-2) + status value (13px ink-3)

### 7. Testimonial

- **Background**: `var(--bg)`
- **Padding**: `clamp(120px, 14vw, 200px) 0`
- **Inner**: max-width 980px
- **Kicker**: "Lo que dicen los clientes" (40px bottom margin)
- **Blockquote**: large 28–52px ink text, max-width 22ch:
  > "Nos ordenaron *las operaciones enteras* en seis semanas. Dejamos de adivinar."
- **Attribution row** (40–64px top margin, 24px top padding, 1px top rule):
  - 56×56 round avatar with Instrument Serif italic letter
  - Name "Mariana Salgado" (15.5px medium) + role "Directora general · Industrias Río Claro" (13.5px ink-3)
  - Right-aligned "Cliente verificado · 2025" with green pulse dot

### 8. Use cases

- **Background**: linear-gradient `var(--bg)` → `var(--bg-soft)`
- **Padding**: `clamp(120px, 14vw, 180px) 0`
- **Head**: kicker "Para distintos tipos de negocio" + h2 "Construido para cómo operás hoy." + italic sub
- **Grid**: asymmetric — 3 columns (`1.4fr 1fr 1fr`), first card spans 2 rows. Collapses to single column under 900px.

- **5 cards**:
  | Card  | Background                                                        | Type                |
  |-------|-------------------------------------------------------------------|---------------------|
  | uc-1  | Dark ink gradient + warm sun glow blob + mini area chart          | Featured case study |
  | uc-2  | Warm amber-yellow gradient                                        | Comercios físicos   |
  | uc-3  | White → bg-warm gradient                                          | Servicios profesionales |
  | uc-4  | Lighter yellow gradient                                           | E-commerce          |
  | uc-5  | White → bg-soft gradient                                          | Restaurantes y hotelería |

  Each has a label (top), h3 with italic clause (middle), arrow-link (bottom). uc-1 is full text + arrow + mini line chart with sun-colored area fill.

### 9. Closing CTA

- **Background**: linear-gradient `var(--bg-soft)` → `var(--bg-warm)` + bottom sun radial overlay
- **Padding**: `clamp(120px, 16vw, 220px) 0 clamp(80px, 10vw, 140px)`
- **Text-aligned center**
- **h2**: very large `clamp(48px, 7vw, 120px)`, line-height 0.95, max-width 14ch, with Instrument Serif italic on line 2 ("la forma"):
  > Diseñamos
  > *la forma*
  > en que un negocio
  > funciona por dentro.
- **Sub** (max-width 36ch, 17–20px): "Treinta minutos para entender cómo funcionan tus días. Si no te sirve, te decimos qué sí."
- **CTAs**: primary "Agendar diagnóstico →" + secondary "hello@pegasuspixels.com" + 13px note "Sin tarjeta · sin compromiso"

### 10. Footer

- **Background**: `var(--bg)`
- **Padding**: `clamp(64px, 8vw, 96px) 0 32px`
- **Border-top**: 1px rule
- **Grid**: 4 columns (`1.4fr 1fr 1fr 1fr`), 40px gap, collapses to 2×2 under 800px
  - Brand col: mark + name + 14.5px description
  - Sistema col: Adquisición / Operaciones / Comunicación / Diagnóstico
  - Casos col: Industria / Servicios / E-commerce / Hotelería
  - Contacto col: hello@pegasuspixels.com / +1 301 257 4500 / Instagram / LinkedIn
- **Bottom row**: 24px top padding, 1px top rule, copyright left + "Todos los sistemas operativos" with green pulse right

---

## Components to extract

In the target codebase, factor these into reusable components:

1. **Button** — `primary` / `secondary` variants, `lg` modifier, `arrow` child (animates on hover)
2. **GradientText** — wraps any inline text in animated colored blobs (see below)
3. **FloatingCard** — used in hero for workflow steps (icon + label + value)
4. **MiniCard** — used in workflow stage visuals (smaller, more compact)
5. **Pillar** — engine section card
6. **UseCaseCard** — use-cases section card
7. **SectionKicker** — the `—— text` lead element

### GradientText (highest-detail spec)

The headline word "operan" uses an animated multi-blob mix-blend technique. Faithful port of the original component shape with these adjustments:

```html
<span class="gtext">operan
  <span class="overlay" aria-hidden="true">
    <span class="blob b1"></span>
    <span class="blob b2"></span>
    <span class="blob b3"></span>
    <span class="blob b4"></span>
  </span>
</span>
```

**CSS** (replicate exactly):

```css
@keyframes gradient-border {
  0%, 100% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; }
  25%      { border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%; }
  50%      { border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%; }
  75%      { border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%; }
}
@keyframes gt-1 { 0%,100% { top: 0; right: 0; } 50% { top: 50%; right: 25%; } 75% { top: 25%; right: 50%; } }
@keyframes gt-2 { 0%,100% { top: 0; left: 0; } 60% { top: 75%; left: 25%; } 85% { top: 50%; left: 50%; } }
@keyframes gt-3 { 0%,100% { bottom: 0; left: 0; } 40% { bottom: 50%; left: 25%; } 65% { bottom: 25%; left: 50%; } }
@keyframes gt-4 { 0%,100% { bottom: 0; right: 0; } 50% { bottom: 25%; right: 40%; } 90% { bottom: 50%; right: 25%; } }

.gtext {
  position: relative; display: inline-flex; overflow: hidden;
  background: #FFFFFF; padding: 0 0.06em; border-radius: 6px;
  isolation: isolate; line-height: 0.94;
  box-shadow: inset 0 0 0 1px rgba(160,130,40,0.10), 0 1px 0 rgba(255,255,255,0.6);
}
.gtext .overlay { position: absolute; inset: 0; pointer-events: none; mix-blend-mode: lighten; }
.gtext .blob {
  position: absolute; width: 22vw; height: 22vw; max-width: 280px; max-height: 280px;
  filter: blur(24px); mix-blend-mode: overlay; pointer-events: none;
  animation-duration: 8s, 14s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-direction: normal, alternate;
}
.gtext .b1 { top: -50%;        background: hsl(42 90% 55%); animation-name: gradient-border, gt-1; }
.gtext .b2 { top: 0; right: 0; background: hsl(28 85% 60%); animation-name: gradient-border, gt-2; }
.gtext .b3 { bottom: 0; left: 0; background: hsl(18 70% 55%); animation-name: gradient-border, gt-3; }
.gtext .b4 { bottom: -50%; right: 0; background: hsl(50 30% 88%); animation-name: gradient-border, gt-4; }
```

**Usage rule**: only one word per headline gets the gradient treatment, only in the primary hero h1. Never apply to body text, captions, or secondary headings.

---

## Interactions & Behavior

### Hover
- **Buttons**: 1px lift on `transform: translateY(-1px)`, 200ms ease
- **Button `.arrow`**: translates 3px right on parent hover, 250ms ease
- **Nav links**: color shift ink-2 → ink, 200ms
- **Use case `.arrow-link`**: svg translates 3px right on parent hover

### Idle animations
- **Floating workflow cards**: each card has its own `@keyframes float-N`, 9–13s ease-in-out infinite — translate ≤5px in any direction + 0.5deg rotation drift around its base rotation
- **Pulse dots**: status indicators don't actually pulse (visual glow only, static)
- **Gradient-text blobs**: 8s `gradient-border` + 14s position track, alternating direction. Slow on purpose — "respira, no actúa."

### Responsive
- Major breakpoints: `1000px` (hero collapses), `900px` (workflow + pillars + use-cases collapse), `800px` (stats collapse to 2×2, footer to 2×2)
- All padding/gaps use `clamp()` to scale fluidly down to mobile
- Topbar nav hides under 900px (mobile menu not designed — add a hamburger trigger if needed)

### Scroll behavior
- `html { scroll-behavior: smooth }` is set
- Topbar is sticky with backdrop blur — no shrink-on-scroll
- No parallax, no scroll-jacking. The brand explicitly avoids that pattern.

---

## State Management

This is a marketing page, mostly static. The only stateful pieces:

- **Mobile menu** (if added): standard open/close toggle
- **CTA destinations**: `/contact`, `/book-a-diagnostic`, or whatever the routing convention is. The five hero workflow cards are decorative — not interactive.
- **Image-slot** (prototype only): in production, replace with `<img src="/portrait/alejandro.jpg" alt="Alejandro, fundador de Pegasus Pixels" />` and delete the `.portrait-placeholder` decoration

---

## Assets

- **Fonts**: Geist + Geist Mono + Instrument Serif via Google Fonts (URL above)
- **Icons**: all icons in the design are inline SVG, single-stroke style, `stroke-width: 1.5–1.6`. Replace with `lucide-react` or similar in production:
  - User icon (hero card 1) — `lucide:user-round`
  - Trending up (hero card 2, stage 2) — `lucide:trending-up`
  - Mail (hero card 3) — `lucide:mail`
  - Calendar (hero card 4, stage 3) — `lucide:calendar`
  - Compass/sync (hero card 5) — `lucide:refresh-cw` or `lucide:rotate-cw`
  - Grid (stage 2 dashboard) — `lucide:layout-dashboard`
  - Clock (stage 2 timer) — `lucide:clock`
  - Stripe / Notion / etc. (trust strip) — use real brand SVGs from `simple-icons`

- **Portrait image**: needs to be supplied by Alejandro. Replace the `.portrait-placeholder` div with `<img>`. Recommended: 1120×1400 (2x of design size), object-fit cover.

- **No other images** are needed — the page is entirely typography + CSS + SVG.

---

## Anchors and accessibility

- All sections have `data-screen-label` attributes (00 Ribbon → 10 Footer). These are for the design tool — remove or rename in production.
- The floating workflow cards are decorative — they have `aria-hidden="true"` (or should — verify and add if missing).
- The portrait placeholder is `aria-hidden="true"`. The real `<img>` needs alt text.
- All buttons are real `<a>` tags — make sure routes are wired.
- Color contrast: ink on bg/paper passes AA easily. Verify the ink-3 captions on yellow backgrounds in the hero/closing sections (should still pass, but worth a contrast check).

---

## Implementation tips for the developer

1. **Start with the design tokens** — port colors, type, spacing, radii, shadows into the codebase's design system (Tailwind config or CSS variables).
2. **Build the GradientText component first** — it's the trickiest piece and is used in two places (hero h1 + can be used elsewhere).
3. **Then build the page top-to-bottom** — each section is mostly independent. The hero is the densest; consider building it last once you have buttons + gradient-text + the floating-card component.
4. **Use real measurements** — `clamp()` is used extensively. Preserve the exact min/preferred/max values; the design has been tuned across breakpoints.
5. **Don't substitute fonts** — Geist + Instrument Serif together create the brand's voice. Substituting either (especially the italic serif) breaks the system.
6. **Resist adding effects** — no parallax, no scroll reveals, no card hover lifts on the pillars or use-cases. The brand's motion philosophy is "respira, no actúa" (breathes, doesn't act).

---

## Open questions for product/design

- Real portrait of Alejandro to replace the placeholder
- Final CTAs / routes (`/contact`? `/book`? something else?)
- Real client testimonial (current quote is a placeholder for the design)
- Real case study link target for the dark "Caso destacado" card in use-cases
- Translation strategy if/when EN version is needed (Instrument Serif italic accents may need re-tuning per language)
