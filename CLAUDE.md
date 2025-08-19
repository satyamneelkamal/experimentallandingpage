# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbo (Next.js app runs on localhost:3000)
- `npm run build` - Build the production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Project Architecture

This is a modern Next.js 15 application using the App Router with React 19, featuring a landing page with dashboard components.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI/Styling**: Tailwind CSS v4 with shadcn/ui components
- **Component System**: Radix UI primitives with class-variance-authority for variants
- **Animations**: Motion library (formerly Framer Motion)
- **Theme**: Dark/light mode support via next-themes
- **Icons**: Lucide React

### Component Architecture
- **shadcn/ui Pattern**: Components follow the shadcn/ui architecture with `components/ui/` containing base components
- **Feature Components**: Main components in `components/` (hero-section, features, header, etc.)
- **Layout**: Root layout includes ThemeProvider wrapper for theme management
- **Styling Utilities**: Uses `cn()` utility combining clsx and tailwind-merge for className management

### Key Files
- `app/page.tsx` - Main page rendering HeroSection and FeaturesSection
- `app/layout.tsx` - Root layout with fonts (Geist Sans/Mono) and ThemeProvider
- `components.json` - shadcn/ui configuration with New York style
- `lib/utils.ts` - Contains the `cn()` utility function for className merging

### Path Aliases
- `@/*` - Root directory alias
- `@/components` - Components directory
- `@/lib` - Lib directory  
- `@/components/ui` - UI components directory

### Component Patterns
- Most components use TypeScript with proper typing
- UI components support variants via class-variance-authority
- Animation components use motion library for transitions
- Header includes scroll detection and mobile menu states
- Theme toggle component supports system/light/dark modes

## Styling Conventions

**IMPORTANT**: For uniformity, all styling changes must begin with `app/globals.css` unless component-specific changes are absolutely necessary.

### CSS Architecture
- Uses Tailwind CSS v4 with comprehensive custom property system
- Global styles defined in `app/globals.css` with extensive CSS custom properties
- Theme variables for both light and dark modes using OKLCH color space
- Custom shadows, spacing, typography, and radius variables
- Component-specific styles should only be added when global changes are insufficient