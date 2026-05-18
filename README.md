# My UI Component Library

A modern, accessible, and highly customizable React component library built with TypeScript.

## Features

- **TypeScript First** - Fully typed components with excellent developer experience
- **Design Tokens** - Consistent design system with CSS variables
- **Accessible** - Built with accessibility in mind (ARIA labels, keyboard navigation)
- **CSS Modules** - Scoped styles with no runtime overhead
- **Storybook** - Interactive documentation and development environment
- **Vitest** - Fast and reliable unit testing

## Installation

```bash
npm install @my-ui/core
```

Or with yarn:

```bash
yarn add @my-ui/core
```

Or with pnpm:

```bash
pnpm add @my-ui/core
```

## Quick Start

```tsx
import { Button } from '@my-ui/core';

function App() {
  return (
    <Button variant="primary" size="md">
      Click Me
    </Button>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@my-ui/core';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
```

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual style variant |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| loading | `boolean` | `false` | Shows loading spinner |
| disabled | `boolean` | `false` | Disables the button |
| onClick | `React.MouseEventHandler` | - | Click handler |
| children | `React.ReactNode` | - | Button content |
| className | `string` | - | Additional CSS class |

## Design Tokens

The library includes a comprehensive design token system exported as CSS variables.

### Colors

```css
--color-primary-500: #6366f1;
--color-gray-100: #f3f4f6;
```

### Spacing

```css
--spacing-4: 1rem;
--spacing-8: 2rem;
```

### Typography

```css
--font-family-sans: Inter, sans-serif;
--font-size-base: 1rem;
```

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test

# Build for production
npm run build

# Lint
npm run lint
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run storybook` | Start Storybook |
| `npm run build-storybook` | Build Storybook static |
| `npm run test` | Run tests |
| `npm run lint` | Run ESLint |

## License

MIT
