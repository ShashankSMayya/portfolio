# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro 7, featuring blog functionality, project showcases, CV/resume display, and testimonials. The site is deployed at https://shashanksmayya.dev.

## Development Commands

```bash
# Install dependencies (use bun)
bun install

# Start development server
bun dev
# or
bun start

# Build for production
bun build

# Preview production build locally
bun preview
```

## Architecture & Key Files

### Technology Stack
- **Framework**: Astro (static site generator)
- **Styling**: TailwindCSS + DaisyUI
- **Content**: MDX support for enhanced markdown
- **View Transitions**: Enabled for smooth page transitions

### Project Structure
- `src/pages/` - Route-based pages (index, blog, cv, projects, services, testimonials)
- `src/components/` - Reusable components organized by feature (cv/, projects/, testimonials/)
- `src/content/blog/` - Blog post content files
- `src/content.config.ts` - Content collection definitions (Content Layer API with glob loaders)
- `src/layouts/` - Page layout templates
- `src/config.ts` - Central site configuration
- `astro.config.mjs` - Astro configuration with plugins and integrations

### Content Management
- Blog posts: Add MD/MDX files to `src/content/blog/`
- Blog posts require frontmatter with: title, description, pubDate; optional: updatedDate, heroImage, badge, tags
- Content collections are defined in `src/content.config.ts` using the Content Layer API (entries have `id`, not `slug`; render with `render(entry)` from `astro:content`)
- Automatic slug generation from titles is enabled (`GENERATE_SLUG_FROM_TITLE` in `src/config.ts`, via `src/lib/createSlug.ts`)

### Key Components
- `BaseLayout.astro` - Main layout wrapper (top nav, main, footer); `sideBarActiveItemID` prop sets the active nav item
- `HorizontalCard.astro` - Project/content card display
- `cv/TimeLine.astro` - CV timeline items
- `TestimonialCard.astro` - Testimonial display

### Styling
- "Ink & signal" design: two DaisyUI themes defined in `tailwind.config.cjs`, `ink` (dark, default) and `paper` (light)
- One accent color (`primary`, blue), used only for the main CTA, links on hover, and the availability dot. No gradient text, glows, emoji, or entrance animations
- Font: Geist (Google Fonts, loaded in `BaseHead.astro`). Muted text via `text-base-content/60`, hairlines via `border-base-300`, secondary links via the `link-quiet` class in `src/styles/global.css`
- Theme stored in localStorage as "theme"; toggled by `ThemeSwitcher.astro`
- Layout: slim sticky top nav (`TopNav.astro`) and `Footer.astro`; no sidebar

## Important Considerations

1. **Static Site**: This generates static HTML - no server-side runtime
2. **Image Optimization**: Place images in `public/` directory
3. **RSS Feed**: Automatically generated at `/rss.xml`
4. **Sitemap**: Automatically generated for SEO
5. **View Transitions**: Enabled via `<ClientRouter />` in `BaseLayout.astro` (toggled by `TRANSITION_API` in `src/config.ts`)
6. **No Testing Setup**: Project doesn't include test configuration