# Planning Guide

A modern marketing website showcasing Partner, a SaaS provider for intelligent retail business management, highlighting their platform modernization journey and AI-assisted redesign powered by Microsoft partnership.

**Experience Qualities**: 
1. **Professional** - Corporate credibility with enterprise-grade visual polish that builds trust
2. **Forward-thinking** - Modern design language that reflects the AI-powered transformation and platform modernization
3. **Clear** - Straightforward presentation of complex platform capabilities without overwhelming technical jargon

**Complexity Level**: Content Showcase (information-focused) - This is a marketing landing page presenting company information, product portfolio, and value propositions for a hackathon scenario.

## Essential Features

### Hero Section with Company Overview
- **Functionality**: Present Partner's core value proposition and positioning
- **Purpose**: Immediately communicate what Partner does and their modernization focus
- **Trigger**: Page load
- **Progression**: User lands on page → sees logo and tagline → reads key messaging → understands company positioning
- **Success criteria**: Clear headline, subheadline, and visual identity establish Partner as an enterprise SaaS provider

### Product Portfolio Display
- **Functionality**: Showcase the three main platform offerings with details
- **Purpose**: Demonstrate the breadth of Partner's SaaS solutions
- **Trigger**: User scrolls to products section
- **Progression**: User scrolls → sees categorized products → reads descriptions → understands legacy challenges → recognizes modernization opportunity
- **Success criteria**: Customer Loyalty, Wage-Worker Timekeeping, and Content Streaming platforms are clearly presented with context

### Legacy & Modernization Narrative
- **Functionality**: Communicate the current state (legacy architecture) and future direction (AI-assisted redesign)
- **Purpose**: Provide hackathon context about technical debt and transformation goals
- **Trigger**: User explores content sections
- **Progression**: User reads → understands legacy challenges → sees Microsoft partnership → recognizes modernization priorities
- **Success criteria**: Clear narrative about outdated UX, mixed architecture, and AI-powered future

### Microsoft Partnership Highlight
- **Functionality**: Feature the renewed Microsoft partnership as a key differentiator
- **Purpose**: Establish enterprise credibility and technical backing
- **Trigger**: User scrolls through page
- **Progression**: User sees partnership badge → recognizes Microsoft affiliation → gains confidence in platform direction
- **Success criteria**: Microsoft partnership is prominently featured and visually integrated

## Edge Case Handling
- **Missing Content**: Graceful handling if sections are empty (shouldn't occur in static site)
- **Small Screens**: Responsive layout ensures mobile readability for hackathon participants reviewing on various devices
- **Long Product Names**: Text wrapping and truncation prevent layout breaking
- **Slow Loading**: Progressive content loading ensures critical information appears first

## Design Direction

The design should evoke enterprise professionalism with a forward-looking tech aesthetic. Think Microsoft-adjacent corporate design: clean, spacious, confident, with subtle modern touches that signal innovation without being flashy. The visual language should balance "established business platform" with "AI-powered future."

## Color Selection

A professional blue-based palette with warm accents to convey trust, technology, and approachability.

- **Primary Color**: Deep corporate blue (oklch(0.45 0.12 250)) - represents reliability, enterprise trust, and aligns with tech/Microsoft aesthetic
- **Secondary Colors**: 
  - Slate gray (oklch(0.35 0.02 250)) for supporting elements and text
  - Light blue-gray background (oklch(0.97 0.01 250)) for sections
- **Accent Color**: Vibrant orange (oklch(0.68 0.18 45)) - energetic highlight for CTAs and innovation messaging, creates warmth against cool blues
- **Foreground/Background Pairings**: 
  - Primary Blue (oklch(0.45 0.12 250)): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓
  - Accent Orange (oklch(0.68 0.18 45)): White text (oklch(1 0 0)) - Ratio 4.9:1 ✓
  - Background Light (oklch(0.97 0.01 250)): Slate text (oklch(0.35 0.02 250)) - Ratio 11.5:1 ✓
  - Card White (oklch(1 0 0)): Foreground Dark (oklch(0.2 0.01 250)) - Ratio 14.8:1 ✓

## Font Selection

Typography should convey modern professionalism with excellent readability - clean sans-serifs that work well for both headlines and body copy, with a slightly technical edge.

- **Typographic Hierarchy**: 
  - H1 (Company Name/Hero): Space Grotesk Bold/48px/tight letter-spacing for modern tech feel
  - H2 (Section Headers): Space Grotesk SemiBold/32px/normal spacing for clear hierarchy
  - H3 (Product Names): Space Grotesk Medium/24px/normal spacing
  - Body (Descriptions): Inter Regular/16px/relaxed line-height (1.6) for comfortable reading
  - Small (Supporting): Inter Regular/14px/normal spacing

## Animations

Animations should be minimal and functional, reinforcing the professional enterprise context while adding subtle modern polish. Use gentle fade-ins on scroll for content sections to create progressive disclosure. Hover states on product cards should have subtle lift/shadow effects to indicate interactivity. Avoid flashy or playful animations that would undermine corporate credibility.

## Component Selection

- **Components**: 
  - Card component for product portfolio items with subtle shadows and hover states
  - Badge component for platform tags (legacy/modernizing/AI-powered)
  - Button component for potential CTAs with primary/secondary variants
  - Separator for clean section divisions
- **Customizations**: 
  - Custom logo component with SVG graphics
  - Custom hero section with background pattern
  - Grid layout for product cards (3-column on desktop, 1-column on mobile)
- **States**: 
  - Product cards: default state with light shadow, hover state with elevated shadow and subtle scale
  - Badges: static colored indicators for platform status
  - Links: subtle underline on hover with color transition
- **Icon Selection**: 
  - UsersFour for customer loyalty platform
  - ClockCountdown for wage-worker timekeeping
  - PlayCircle for content streaming
  - Gear for line-of-business apps
  - Sparkle for AI features
  - MicrosoftLogo for partnership (or fallback geometric icon)
- **Spacing**: 
  - Section padding: py-24 (large vertical breathing room)
  - Container max-width: max-w-6xl for comfortable reading width
  - Card spacing: gap-8 between cards, p-6 internal padding
  - Consistent 4px base unit (spacing-4, 6, 8, 12, 16, 24)
- **Mobile**: 
  - Hero text scales down to 36px on mobile
  - Product grid collapses to single column below 768px
  - Padding reduces from py-24 to py-12 on mobile
  - Logo scales proportionally
  - Navigation becomes simpler single-column layout if present
