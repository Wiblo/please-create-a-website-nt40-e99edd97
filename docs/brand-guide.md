# Brand Guide — Vitality Physiotherapy

## Overview

Professional, healing aesthetic for a physiotherapy clinic in Johannesburg. Purple conveys expertise, wellness, and calm authority. The palette is predominantly neutral with purple reserved for key actions and brand moments — sophisticated without being overpowering.

## Colors

### Primary Palette

| Token | Purpose | Usage |
|-------|---------|-------|
| **Primary** | Buttons, links, CTAs | Rich purple — use sparingly for key actions |
| **Secondary** | Subtle backgrounds | FAQ cards, alternate sections, soft highlights |
| **Accent** | Hover states | Interactive element highlights |

### Neutral Palette

| Token | Purpose |
|-------|---------|
| **Background** | Page background (white) |
| **Foreground** | Body text (dark with subtle purple undertone) |
| **Muted** | Disabled states, quiet backgrounds |
| **Muted Foreground** | Secondary text, captions |
| **Border** | Dividers, input borders |

### OKLCH Values

#### Light Mode

```css
--background: oklch(0.995 0 0);
--foreground: oklch(0.15 0.01 300);
--primary: oklch(0.50 0.20 300);
--primary-foreground: oklch(0.98 0 0);
--secondary: oklch(0.90 0.04 300);
--secondary-foreground: oklch(0.25 0.06 300);
--muted: oklch(0.96 0.01 300);
--muted-foreground: oklch(0.48 0.03 300);
--accent: oklch(0.93 0.04 300);
--accent-foreground: oklch(0.25 0.06 300);
--border: oklch(0.90 0.02 300);
--ring: oklch(0.50 0.20 300);
```

#### Dark Mode

```css
--background: oklch(0.13 0.015 300);
--foreground: oklch(0.96 0.005 300);
--primary: oklch(0.72 0.18 300);
--primary-foreground: oklch(0.13 0.015 300);
--secondary: oklch(0.22 0.03 300);
--secondary-foreground: oklch(0.96 0.005 300);
--muted: oklch(0.22 0.02 300);
--muted-foreground: oklch(0.65 0.03 300);
--accent: oklch(0.26 0.05 300);
--accent-foreground: oklch(0.96 0.005 300);
--border: oklch(1 0 0 / 10%);
--ring: oklch(0.72 0.18 300);
```

### Color Hue Reference

- **Hue 300** = Purple / violet (primary brand color)
- **Chroma 0.20** = Rich saturation (vibrant but professional)
- **Chroma 0.01-0.04** = Very subtle purple tint (for neutrals)

## Typography

### Fonts

| Role | Font | Characteristics |
|------|------|-----------------|
| **Headings** | Geist Sans | Clean, modern, geometric |
| **Body** | Geist Sans | Same family for consistency |

## Shape & Space

### Border Radius

| Variable | Value | Components |
|----------|-------|------------|
| `--radius` | `0.625rem` | Base radius |
| `--radius-sm` | `0.375rem` | Small elements |
| `--radius-lg` | `0.625rem` | Cards, modals |
| `--radius-xl` | `1rem` | Large containers |
| `--radius-4xl` | `2rem` | Hero sections, major blocks |

**Feel**: Balanced — professional yet approachable. Rounded enough to feel welcoming, structured enough to convey expertise.

### Spacing

Use Tailwind's default spacing scale. Key patterns:
- Section padding: `py-16 md:py-24`
- Card padding: `p-6` or `p-8`
- Gap between items: `gap-4` to `gap-8`

## Visual Guidelines

### Do

- Use primary purple only for buttons, links, and key CTAs
- Keep backgrounds neutral (white, light lavender-gray)
- Add subtle purple undertones to grays for cohesion
- Use high-quality physiotherapy and lifestyle images
- Use generous whitespace — the clinic is clean and calm
- Maintain strong contrast for readability

### Don't

- Don't use gradients (solid colors only)
- Don't use glow effects
- Don't overuse the primary color
- Don't use pure black (#000) — use the foreground token
- Don't use highly saturated or neon colors

## Component Patterns

### Buttons

```tsx
// Primary action
className="bg-primary text-primary-foreground hover:bg-primary/90"

// Secondary action
className="bg-secondary text-secondary-foreground hover:bg-secondary/80"

// Outline
className="border border-primary text-primary hover:bg-accent"
```

### Cards

```tsx
className="bg-card text-card-foreground border border-border rounded-lg"
```

### Subtle Backgrounds

```tsx
// For sections needing visual separation
className="bg-secondary/30"
```

## Tone & Voice

- **Professional but warm** — expert care, not cold or clinical
- **Confident** — use active language, "We treat", "You'll recover"
- **Local** — Johannesburg references, South African context (medical aid, rands)
- **Empowering** — focus on recovery outcomes and getting back to life

## Accessibility

- Primary on white: meets WCAG AA contrast ratio
- Foreground on background: WCAG AAA
- All interactive elements have visible focus states
- Minimum touch target: 44x44px
