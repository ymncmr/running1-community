# Malmon Running Club - Brand & Design System Guidelines
**Target AI:** Claude Code
**Project Context:** Website for a Philippine-based running community.
**Core Features:** Member Registration, Weekly Run Schedules, Inquiry Forms, User Authentication.

## 1. Brand Identity & Strategy
*   **Mission:** To inspire a healthier lifestyle across the Philippines by transforming running from a chore into a rewarding, communal habit.
*   **Target Audience:** Individuals seeking physical/mental health improvements through community. All levels welcome (absolute beginners to veterans).
*   **Core Values:** Fun (celebrating every km), Community-Driven, Hospitality.
*   **Tone of Voice:** Warm, encouraging, inclusive. Use "We" and "Us". **CRITICAL:** Avoid technical running jargon (e.g., negative splits, VO2 max) in user-facing marketing copy to prevent intimidating beginners.
*   **Tagline:** "Run together, stay together."

## 2. Design Tokens (CSS Architecture)
**AI INSTRUCTION:** Implement the following as global CSS variables (`:root`) in the core stylesheet. The design assumes a strictly "Dark Mode" aesthetic.

### 2.1. Color Palette
```css
:root {
  /* Core Brand Colors */
  --color-brand-primary: #2F2FE4;    /* Electric Lead - Primary actions, active states */
  --color-brand-secondary: #162E93;  /* Deep Velocity - Icons, hover states, gradients */
  
  /* UI Layout Colors */
  --color-ui-supportive: #1A1953;    /* Midnight Pace - Cards, nav bars, dividers */
  --color-bg-foundation: #080616;    /* Obsidian Finish - Main site background */
  
  /* Text Colors (Calculated for contrast against dark background) */
  --color-text-primary: #FFFFFF;     /* Pure White for main headings */
  --color-text-secondary: #D1D5DB;   /* Light Gray for body text (Tailwind gray-300 eq) */
  
  /* Utilities */
  --gradient-motion: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary));
}