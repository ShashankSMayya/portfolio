# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro 4.0.2, featuring blog functionality, project showcases, CV/resume display, and testimonials. The site is deployed at https://shashanksmayya.netlify.app.

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
- `src/content/` - Content collections for blog posts and store items
- `src/layouts/` - Page layout templates
- `src/config.ts` - Central site configuration
- `astro.config.mjs` - Astro configuration with plugins and integrations

### Content Management
- Blog posts: Add MDX files to `src/content/blog/`
- Blog posts require frontmatter with: title, description, pubDate, image (optional), tags (optional)
- Content collections are defined in `src/content/config.ts`
- Automatic slug generation from titles is enabled

### Key Components
- `BaseLayout.astro` - Main layout wrapper
- `HorizontalCard.astro` - Project/content card display
- `TimeLineElement.astro` - CV timeline items
- `TestimonialCard.astro` - Testimonial display

### Styling
- Theme switching via DaisyUI (30+ themes available)
- Theme stored in localStorage as "theme"
- Responsive design with Tailwind utilities

## Important Considerations

1. **Static Site**: This generates static HTML - no server-side runtime
2. **Image Optimization**: Place images in `public/` directory
3. **RSS Feed**: Automatically generated at `/rss.xml`
4. **Sitemap**: Automatically generated for SEO
5. **View Transitions**: Enabled for smoother navigation between pages
6. **No Testing Setup**: Project doesn't include test configuration