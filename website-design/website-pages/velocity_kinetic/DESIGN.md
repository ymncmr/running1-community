---
name: Velocity Kinetic
colors:
  surface: '#fcf8ff'
  surface-dim: '#dbd8e6'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#efecfa'
  surface-container-high: '#e9e6f5'
  surface-container-highest: '#e3e1ef'
  on-surface: '#1b1b24'
  on-surface-variant: '#454556'
  inverse-surface: '#302f3a'
  inverse-on-surface: '#f2effd'
  outline: '#767588'
  outline-variant: '#c6c4d9'
  surface-tint: '#3f42f1'
  primary: '#1000c7'
  on-primary: '#ffffff'
  primary-container: '#2f2fe4'
  on-primary-container: '#bdbfff'
  inverse-primary: '#c0c1ff'
  secondary: '#4256b9'
  on-secondary: '#ffffff'
  secondary-container: '#8397fe'
  on-secondary-container: '#0e288e'
  tertiary: '#721800'
  on-tertiary: '#ffffff'
  tertiary-container: '#9b2400'
  on-tertiary-container: '#ffb19d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#04006d'
  on-primary-fixed-variant: '#201cdb'
  secondary-fixed: '#dee1ff'
  secondary-fixed-dim: '#bac3ff'
  on-secondary-fixed: '#001159'
  on-secondary-fixed-variant: '#273ca0'
  tertiary-fixed: '#ffdbd2'
  tertiary-fixed-dim: '#ffb4a1'
  on-tertiary-fixed: '#3c0800'
  on-tertiary-fixed-variant: '#891f00'
  background: '#fcf8ff'
  on-background: '#1b1b24'
  surface-variant: '#e3e1ef'
typography:
  display-xl:
    fontFamily: anybody
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: anybody
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: anybody
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: lexend
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: anybody
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system embodies the spirit of forward motion. It is a high-performance, premium athletic aesthetic that balances the raw energy of professional racing with the warm, inclusive nature of a community-driven club. The visual language is characterized by **High-Contrast Modernism**, utilizing bold typography and expansive whitespace to create a sense of breathability and focus.

The design should evoke a "premium-technical" feeling—where every element serves a purpose, but the overall atmosphere remains inviting for beginners. The style relies on high-impact visual anchors, smooth transitions, and a clean, light-mode foundation that feels fresh and energetic.

## Colors

The palette is anchored by **Electric Lead**, a high-vibrancy blue that serves as the primary action color to drive momentum and user engagement. **Deep Velocity** and **Midnight Pace** provide the necessary depth and "athletic weight," used primarily for sophisticated layering and high-contrast text.

Backgrounds remain strictly clean, using **White** for primary surfaces and **Soft Gray** to define secondary content areas or container backgrounds. Gradients should be used sparingly but impactfully—specifically the "Kinetic Gradient" (Primary to Secondary) to represent movement and progression.

## Typography

This design system utilizes a dual-type approach to balance impact with accessibility. **Anybody** is the engine of the brand—used for headlines with an aggressive, variable weight that feels like a starting block. Large headers should utilize tight tracking and uppercase styling to mimic the "Nike-style" editorial impact.

**Lexend** is employed for all body and instructional text. Chosen for its specific design roots in reading proficiency and athletic clarity, it ensures that race details and community posts are legible at a glance, even for users viewing the app while mid-run.

## Layout & Spacing

The layout philosophy follows a **Dynamic Fixed Grid** (12-column) with extremely generous vertical margins to emphasize a "premium" editorial feel. Content should never feel cramped; the design system relies on the `lg` and `xl` spacing tokens to separate major sections, creating a clear narrative flow.

Rhythm is maintained through an 8px base unit. Component internal padding should lean toward the `md` (24px) token to ensure touch targets are large and accessible for active users.

## Elevation & Depth

Hierarchy is established through **Ambient Blue Shadows**. Rather than neutral black or gray shadows, this system uses low-opacity versions of Midnight Pace (#1A1953) to create "Deep Depth." Shadows should be highly diffused (blur radius of 30px+) with low alpha (8-12%) to keep the interface feeling light and modern.

Secondary depth is created through **Tonal Layering**, where Soft Gray surfaces sit atop White backgrounds. This prevents "shadow fatigue" and maintains the clean, flat-athletic aesthetic favored by modern fitness platforms.

## Shapes

The shape language is defined by **High-Radius Geometry**. Standard components use a 16px (rounded-lg) corner, while larger layout containers and hero cards utilize a 24px (rounded-xl) corner. 

This softness contrasts with the aggressive, sharp typography to create a "Warm Athleticism"—the type is the sweat and the effort, while the shapes are the supportive community and the comfort of the club. Interactive elements like tags and "Join" buttons should use pill-shaped (full-round) geometry.

## Components

### Buttons & Interaction
Buttons are the primary vehicle for the Electric Lead (#2F2FE4) color. They should be large (min-height: 56px), utilizing the Kinetic Gradient on hover. Text within buttons should use the `label-caps` style for maximum urgency.

### Athletic Cards
Cards are the core of the community experience. They feature a White background, 24px rounded corners, and a soft Midnight Pace ambient shadow. Use generous internal padding (24px) and clear entry points for data (e.g., "Pace," "Distance," "Time").

### Progress Indicators
Utilize the Electric Lead color for active states. Progress bars and rings should have rounded caps and use Soft Gray for the "track" to maintain the light-mode purity.

### Input Fields
Fields use the Soft Gray background with no border in their default state. On focus, they transition to a 2px Electric Lead bottom border or a subtle outer glow to signal activity.

### Community Chips
Used for tagging run types (e.g., "Social," "Tempo," "Trail"). These are small, pill-shaped elements with a light tint of the primary color and bold, high-contrast labels.