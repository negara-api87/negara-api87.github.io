# Design System Inspired by Videy

## 1. Visual Theme & Atmosphere

Videy's design system embodies clean minimalism with a focus on content presentation and straightforward user interactions. The visual language prioritizes clarity and accessibility, with a light, open aesthetic that makes video content the focal point. The interface employs generous whitespace, subtle shadows, and a restrained color palette centered on neutrals with strategic dark accents. This creates a professional yet approachable experience ideal for video sharing and hosting, where the interface recedes into the background to let user-generated content shine.

**Key Characteristics**
- Minimal, content-first design philosophy
- Neutral-dominant color scheme with strategic dark anchors
- Subtle elevation and shadow system
- Rounded, friendly interactive elements
- Clean typography hierarchy with Poppins as primary font
- Accessible contrast ratios throughout
- Focus on whitespace and breathing room

## 2. Color Palette & Roles

### Primary
- **Dark Navy** (`#111827`): Primary heading text and brand-critical UI elements; establishes visual hierarchy and authority

### Interactive
- **Navy Dark** (`#1A1A1A`): Interactive element backgrounds, button fills, and primary CTA containers; highest contrast interactive state
- **Pure Black** (`#000000`): Deep shadow layers and maximum contrast overlays
- **Charcoal** (`#171717`): Secondary interactive states and tertiary button backgrounds

### Neutral Scale
- **Off-White** (`#F3F4F6`): Subtle background tinting and light surface variations; gentle contrast from pure white
- **White** (`#FFFFFF`): Primary background color, card surfaces, and default container fill
- **Light Gray** (`#E5E5E5`): Borders, dividers, and subtle UI separation; most frequently used neutral
- **Medium Gray** (`#CCCCCC`): Secondary borders and less prominent dividers
- **Dark Gray** (`#737373`): Secondary text and subtle UI elements; lower prominence than primary text

### Semantic / Status
- **Red Danger** (`#DC2626`): Error states, warnings, and critical alerts; demands immediate user attention

### Surface & Borders
- **Border Default** (`#E5E5E5`): Primary border color for input fields, cards, and container edges
- **Surface Overlay** (`#0000` — transparent black): Video overlay gradients and translucent depth layers; supports content readability over video

## 3. Typography Rules

### Font Family
- **Primary Font**: Poppins (`font-family: 'Poppins', sans-serif`)
  - Fallback: `-apple-system`, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **Secondary Font**: System stack (`font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
  - Used for body text, links, and supporting content

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | Poppins | 26px | 600 | 41.6px | 0px | Page titles and primary branding |
| Heading Large | -apple-system | 20px | 600 | 32px | 0px | Section headings and card titles |
| Heading Medium | -apple-system | 18px | 600 | 28.8px | 0px | Subsection headings |
| Heading Small | -apple-system | 16px | 600 | 25.6px | 0px | Minor headings and form labels |
| Body Large | -apple-system | 16px | 400 | 25.6px | 0px | Primary body text and descriptions |
| Body Regular | -apple-system | 14px | 400 | 22.4px | 0px | Standard body copy |
| Button / Label | -apple-system | 14px | 600 | 20px | 0px | Button text and UI labels |
| Link Primary | -apple-system | 16px | 400 | 25.6px | 0px | Inline navigation links |
| Link Secondary | -apple-system | 15px | 600 | 24px | 0px | Prominent link styling |
| Captions / Small | -apple-system | 12px | 400 | 16px | 0px | Helper text and captions |
| Code / Mono | Courier New, monospace | 14px | 400 | 20px | 0px | Code blocks and technical text |

### Principles
- **Hierarchy through weight**: Use weight (400, 500, 600) to establish visual priority over size changes alone
- **Generous line height**: All text maintains at least 1.4x line-height multiplier for readability
- **Poppins for emphasis**: Reserve Poppins 600 for display-scale headings and hero content
- **System fonts for efficiency**: Use -apple-system stack for body and UI text for optimal platform rendering
- **Accessibility first**: Maintain minimum 4.5:1 contrast ratio for all body text and interactive elements

## 4. Component Stylings

### Buttons

#### Primary Button (Dark Navy)
- **Background Color**: `#1A1A1A`
- **Text Color**: `#FFFFFF`
- **Font**: -apple-system, 14px, weight 600
- **Padding**: `6px 16px`
- **Border Radius**: `9999px`
- **Border**: `0px solid #E5E5E5`
- **Box Shadow**: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Height**: `36px`
- **Line Height**: `20px`
- **Hover State**: Background `#111827` (darker navy), text remains `#FFFFFF`, shadow intensifies to `rgba(0, 0, 0, 0.1) 0px 4px 6px 0px`
- **Active State**: Background `#000000`, shadow increases to `rgba(0, 0, 0, 0.15) 0px 6px 12px 0px`
- **Disabled State**: Background `#CCCCCC`, text `#737373`, shadow `none`

#### Secondary Button (Light Gray)
- **Background Color**: `#F3F4F6`
- **Text Color**: `#171717`
- **Font**: -apple-system, 14px, weight 600
- **Padding**: `8px 24px`
- **Border Radius**: `9999px`
- **Border**: `0px solid #E5E5E5`
- **Box Shadow**: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Height**: `36px`
- **Line Height**: `20px`
- **Hover State**: Background `#E5E5E5`, text `#1A1A1A`, shadow `rgba(0, 0, 0, 0.05) 0px 2px 4px 0px`
- **Active State**: Background `#CCCCCC`, text `#000000`, shadow `rgba(0, 0, 0, 0.1) 0px 4px 6px 0px`
- **Disabled State**: Background `#FFFFFF`, text `#CCCCCC`, border `1px solid #E5E5E5`, shadow `none`

#### Ghost Button (Transparent)
- **Background Color**: `rgba(0, 0, 0, 0)`
- **Text Color**: `#737373`
- **Font**: -apple-system, 12px, weight 400
- **Padding**: `0px 0px`
- **Border Radius**: `0px`
- **Border**: `0px solid transparent`
- **Box Shadow**: `none`
- **Height**: `16px`
- **Line Height**: `16px`
- **Hover State**: Text color `#1A1A1A`, underline `1px solid #737373` (optional)
- **Active State**: Text color `#000000`
- **Disabled State**: Text color `#CCCCCC`, cursor `not-allowed`

### Cards & Containers

#### Video Card
- **Background Color**: `#FFFFFF`
- **Border**: `1px solid #E5E5E5`
- **Border Radius**: `12px`
- **Padding**: `0px` (children contain spacing)
- **Box Shadow**: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Hover State**: Border color `#CCCCCC`, shadow `rgba(0, 0, 0, 0.08) 0px 4px 8px 0px`

#### Standard Card
- **Background Color**: `#FFFFFF`
- **Border**: `1px solid #E5E5E5`
- **Border Radius**: `8px`
- **Padding**: `24px`
- **Box Shadow**: `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Hover State**: Box shadow `rgba(0, 0, 0, 0.08) 0px 4px 8px 0px`

#### Surface Layer
- **Background Color**: `#F3F4F6`
- **Border**: `1px solid #E5E5E5`
- **Border Radius**: `8px`
- **Padding**: `16px`
- **Box Shadow**: `none`

### Inputs & Forms

#### Text Input
- **Background Color**: `#FFFFFF`
- **Text Color**: `#1A1A1A`
- **Border**: `1px solid #E5E5E5`
- **Border Radius**: `6px`
- **Padding**: `12px 16px`
- **Font**: -apple-system, 14px, weight 400
- **Line Height**: `20px`
- **Focus State**: Border color `#1A1A1A`, box shadow `0px 0px 0px 2px rgba(26, 26, 26, 0.1)`
- **Error State**: Border color `#DC2626`, background `#FFFFFF`, text `#DC2626` (for error message)
- **Disabled State**: Background `#F3F4F6`, border `1px solid #CCCCCC`, text `#737373`, cursor `not-allowed`
- **Placeholder**: Text color `#737373`, font-weight `400`

#### Form Label
- **Font**: -apple-system, 14px, weight 600
- **Text Color**: `#171717`
- **Margin Bottom**: `8px`
- **Display**: `block`

#### Checkbox / Radio
- **Size**: `16px × 16px`
- **Border**: `1px solid #E5E5E5`
- **Border Radius**: `4px` (checkbox), `9999px` (radio)
- **Background (unchecked)**: `#FFFFFF`
- **Background (checked)**: `#1A1A1A`
- **Check mark / dot**: `#FFFFFF`
- **Focus**: Box shadow `0px 0px 0px 2px rgba(26, 26, 26, 0.1)`

### Navigation

#### Header / Top Navigation
- **Background Color**: `#FFFFFF`
- **Border Bottom**: `1px solid #E5E5E5`
- **Padding**: `16px 24px`
- **Height**: `64px`
- **Display**: `flex`
- **Align Items**: `center`
- **Justify Content**: `space-between`

#### Logo
- **Font**: Poppins, 20px, weight 600
- **Text Color**: `#111827`
- **Text Transform**: `lowercase`

#### Navigation Link (Active)
- **Text Color**: `#1A1A1A`
- **Font**: -apple-system, 14px, weight 600
- **Text Decoration**: `none`
- **Border Bottom**: `2px solid #1A1A1A`
- **Padding Bottom**: `4px`

#### Navigation Link (Inactive)
- **Text Color**: `#737373`
- **Font**: -apple-system, 14px, weight 400
- **Text Decoration**: `none`
- **Hover State**: Text color `#1A1A1A`, transition `color 200ms ease`

#### Footer Navigation
- **Font**: -apple-system, 12px, weight 400
- **Text Color**: `#737373`
- **Background**: `#FFFFFF`
- **Border Top**: `1px solid #E5E5E5`
- **Padding**: `24px`
- **Display**: `flex`
- **Gap**: `24px`
- **Justify Content**: `center`

### Badge

#### Success Badge
- **Background Color**: `rgba(34, 197, 94, 0.1)` (inferred green)
- **Text Color**: `#15803D` (inferred dark green)
- **Border**: `1px solid rgba(34, 197, 94, 0.3)`
- **Border Radius**: `9999px`
- **Padding**: `4px 12px`
- **Font**: -apple-system, 12px, weight 600

#### Error Badge
- **Background Color**: `rgba(220, 38, 38, 0.1)`
- **Text Color**: `#DC2626`
- **Border**: `1px solid rgba(220, 38, 38, 0.3)`
- **Border Radius**: `9999px`
- **Padding**: `4px 12px`
- **Font**: -apple-system, 12px, weight 600

#### Neutral Badge
- **Background Color**: `#F3F4F6`
- **Text Color**: `#737373`
- **Border**: `1px solid #E5E5E5`
- **Border Radius**: `9999px`
- **Padding**: `4px 12px`
- **Font**: -apple-system, 12px, weight 600

## 5. Layout Principles

### Spacing System

**Base Unit**: `8px`

**Scale**:
- `4px` — xs: micro-spacing within components (icon gaps, tight padding)
- `8px` — sm: compact spacing between elements
- `12px` — md: standard spacing between sections
- `16px` — lg: comfortable spacing between content blocks
- `24px` — xl: generous spacing between major sections
- `32px` — 2xl: large breathing room between layout sections
- `48px` — 3xl: hero-level spacing
- `64px` — 4xl: page-level spacing
- `144px` — hero: maximum spacing for page margins and full-bleed layouts

**Usage Context**:
- `12px`: Margin within grids and card collections
- `16px`: Padding inside cards, input field spacing
- `24px`: Padding within larger containers, gap between card rows
- `32px`: Section padding, gap between major content blocks
- `144px`: Page-side margins, hero section top/bottom spacing

### Grid & Container

- **Max Width**: `1200px` (primary container for content)
- **Page Margin**: `24px` (desktop), `16px` (tablet), `12px` (mobile)
- **Column Strategy**: 12-column grid with flexible gutters; 8-column on tablet, 4-column on mobile
- **Gutter Width**: `24px` (desktop/tablet), `16px` (mobile)
- **Content Width**: `1200px` centered with `auto` side margins
- **Section Pattern**: Full-bleed sections at `100vw` with internal padding; contained sections at `1200px` max

### Whitespace Philosophy

Videy prioritizes generous whitespace to create visual clarity and reduce cognitive load. Content is never crowded; vertical rhythm is maintained through consistent spacing multiples. Whitespace is not merely negative space but an active design element that establishes visual hierarchy and guides user focus toward primary actions (e.g., "Upload" button, video player).

### Border Radius Scale

- `0px` — Sharp corners for technical content (code blocks, data tables)
- `4px` — Subtle rounding for checkboxes, small UI elements
- `6px` — Standard rounding for input fields and minor containers
- `8px` — Default rounding for cards and panels
- `12px` — Larger cards and video containers
- `9999px` — Full pill rounding for buttons, badges, and circular elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow, border `1px solid #E5E5E5` | Inactive sections, disabled states, minimal hierarchy |
| Raised (+1) | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | Cards, buttons, default interactive elements |
| Elevated (+2) | `rgba(0, 0, 0, 0.08) 0px 4px 8px 0px` | Hover states on cards, floating panels, dropdowns |
| Floating (+3) | `rgba(0, 0, 0, 0.12) 0px 6px 12px 0px` | Modal overlays, tooltips, popovers |
| Modal (+4) | `rgba(0, 0, 0, 0.15) 0px 10px 25px 0px` | Full-page modals, critical alerts, overlay content |
| Overlay Video (+5) | `rgba(0, 0, 0, 0.3) 0px 0px 0px 0px, inset rgba(0, 0, 0, 0.2) 0px 0px 24px 0px` | Video player gradients, semi-transparent darken overlays |

**Shadow Philosophy**: Videy employs a subtle, restrained shadow system that avoids harsh depth cues. Shadows are used sparingly to indicate interactive state changes and elevation, never as visual decoration. This approach maintains the clean, minimal aesthetic while providing sufficient depth cues for usability. Video content is never obscured by shadows; overlays use semi-transparent color instead.

## 7. Do's and Don'ts

### Do
- Use Poppins 600 exclusively for display-scale headings above 20px; this reserves visual weight for primary messaging
- Maintain all button padding at `6px 16px` minimum to ensure `36px` height for touch targets
- Apply `border-radius: 9999px` to all interactive buttons and badges for a consistent, friendly appearance
- Center all modals and overlays on the viewport with `position: fixed` and transparent backdrop `rgba(0, 0, 0, 0.5)`
- Use `#F3F4F6` as the subtle background tint for secondary surfaces; never use pure white for nested containers
- Preserve at least `24px` of whitespace above major section headings to establish visual rhythm
- Apply the raised shadow (`0px 1px 2px rgba(0, 0, 0, 0.05)`) as the default shadow for all interactive elements
- Test all text on both light (`#FFFFFF`) and dark (`#1A1A1A`) backgrounds to ensure 4.5:1 WCAG AA contrast
- Group related form inputs with `12px` vertical gap; group unrelated sections with `24px` or more

### Don't
- Never use color alone to communicate critical information (errors, warnings); always pair with icons or text
- Don't apply shadows to video overlays; use semi-transparent color (`rgba(0, 0, 0, 0.3)`) for darken effects instead
- Avoid mixing system fonts (-apple-system) with Poppins in body copy; maintain font separation by role (display vs. body)
- Don't set line-height below 1.4x font size; this breaks readability and accessibility standards
- Never use `#000000` for default text; use `#1A1A1A` or `#171717` to maintain softness and reduce eye strain
- Don't remove the focus outline on interactive elements; replace with `box-shadow: 0px 0px 0px 2px rgba(26, 26, 26, 0.1)` instead
- Avoid nested cards with identical borders; differentiate with subtle background tints (`#F3F4F6` vs. `#FFFFFF`)
- Don't truncate link text; if space is constrained, use descriptive aria-labels and tooltips
- Never make buttons smaller than `36px` in height; maintain touch-friendly minimum sizing

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|-----------|-------|------------|
| Mobile | 320px — 639px | Single column, `16px` page margin, `12px` gutter, stacked navigation |
| Tablet | 640px — 1023px | 2–4 column grid, `20px` page margin, `16px` gutter, collapsible nav |
| Desktop | 1024px+ | 12 column grid, `24px` page margin, `24px` gutter, full navigation visible |
| Wide | 1440px+ | Max-width container `1200px` centered, expanded whitespace around edges |

### Touch Targets

- **Minimum Size**: `44px × 44px` for all interactive elements (buttons, links, form fields)
- **Recommended Size**: `48px × 48px` for primary CTAs and frequently used controls
- **Spacing Between Targets**: Minimum `8px` gap to prevent accidental activation
- **Tap Area Expansion**: Hover/focus states should expand visual feedback zone by `4px` on all sides

### Collapsing Strategy

- **Mobile**: Single-column layout; off-canvas navigation behind hamburger menu; full-width video player; bottom-aligned share button
- **Tablet**: Two-column layout for content + sidebar; horizontal scrolling for related items; condensed header with dropdown menus
- **Desktop**: Full layout with sidebars; multi-column grid for related content; sticky header on scroll; expanded information panels
- **Font Scaling**: Headings reduce by 2–4px per breakpoint going mobile; body text maintains 14px minimum; buttons always `36px` height
- **Spacing Reduction**: All spacing multiples reduce by 25% on mobile (e.g., `24px` becomes `16px`), maintain full scale on desktop
- **Image Behavior**: Hero images scale with container width, maintain aspect ratio; thumbnails scale responsively with column count

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA**: Navy Dark (`#1A1A1A`) background with white text (`#FFFFFF`)
- **Secondary CTA**: Light Gray (`#F3F4F6`) background with dark text (`#171717`)
- **Background**: White (`#FFFFFF`)
- **Heading Text**: Dark Navy (`#111827`)
- **Body Text**: Charcoal (`#1A1A1A`)
- **Supporting Text**: Dark Gray (`#737373`)
- **Borders**: Light Gray (`#E5E5E5`)
- **Error States**: Red Danger (`#DC2626`)
- **Surface Tint**: Off-White (`#F3F4F6`)
- **Overlay Darken**: Transparent Black (`#0000`, applies rgba(0, 0, 0, 0.3) for video overlays)

### Iteration Guide

1. **Font Authority**: Poppins is reserved for display headings (26px+, weight 600). All UI text uses -apple-system stack, 14px weight 600 for labels/buttons, 14px weight 400 for body. Never mix primary/body fonts in the same text element.

2. **Color Anchors**: All interactive elements are either `#1A1A1A` (primary) or `#F3F4F6` (secondary). Text on primary uses white; text on secondary uses `#171717`. Do not introduce new colors for interactive states; use opacity (`rgba(0, 0, 0, 0.05)`) instead.

3. **Radius Consistency**: Apply `border-radius: 9999px` to all buttons and badges for visual unity. Cards and containers use `8px` or `12px`. Inputs use `6px`. Never mix radius values in the same component family.

4. **Spacing Grid**: All spacing derives from 8px base unit. Use `12px`, `16px`, `24px`, `32px` multiples only. Never arbitrary spacing (e.g., 13px, 25px). Header padding is always `16px 24px`, card padding is `24px`, button padding is `6px 16px`.

5. **Shadow Hierarchy**: Default shadow is always `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`. Hover/interactive states escalate to `rgba(0, 0, 0, 0.08) 0px 4px 8px 0px`. Video overlays use `inset rgba(0, 0, 0, 0.2)` gradients, never drop shadows.

6. **Button States**: Primary buttons are `#1A1A1A` with white text. Secondary buttons are `#F3F4F6` with `#171717` text. All buttons are `36px` height with `6px 16px` padding and full pill radius. Hover state darkens background by one shade; active state darkens further or applies shadow elevation.

7. **Touch-Friendly Sizing**: Minimum interactive element height/width is `36px`. Links within text are not interactive elements; use underline decoration instead. Form fields (inputs, selects, textareas) maintain `36px`–`44px` minimum height.

8. **Border Default**: All cards, inputs, and panels have `1px solid #E5E5E5` border unless on colored background. On `#F3F4F6` surface, use same light gray border for consistency. On `#FFFFFF`, border provides subtle frame.

9. **Contrast Compliance**: All text elements maintain 4.5:1 WCAG AA contrast minimum. Body text on white uses `#1A1A1A` or darker. Links use `#1A1A1A` (or white on dark backgrounds). Secondary text uses `#737373` only for captions, never for critical information.

10. **Video Component Context**: Video players have full-bleed layout with `border-radius: 12px`. Overlay controls use semi-transparent background (`rgba(0, 0, 0, 0.3)`) with white text (`#FFFFFF`). Play button is centered, corners are rounded. Share button below player is primary button (`#1A1A1A`), full width on mobile, inline on desktop.