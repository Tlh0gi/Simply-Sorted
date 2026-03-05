# Simply Sorted

> *Calm. Clear. Effortless.*

**Simply Sorted** is a professional web presence built for a boutique professional organising and home staging business based in Randburg, Gauteng, South Africa. The platform serves as the primary digital touchpoint for the business — communicating services, company values, and enabling direct client enquiries through an integrated contact system.

[![Live Site](https://img.shields.io/badge/Live%20Site-simplysorted.vercel.app-black?style=flat-square)](https://simply-sorted-rho.vercel.app/)
[![Built with Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

---

## Table of Contents

- [About the Project](#about-the-project)
- [About the Business](#about-the-business)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Core Concepts](#core-concepts)
  - [Next.js App Router](#nextjs-app-router)
  - [React Server & Client Components](#react-server--client-components)
  - [Next.js Image Optimisation](#nextjs-image-optimisation)
  - [Next.js Metadata API & SEO](#nextjs-metadata-api--seo)
  - [Tailwind CSS Utility-First Styling](#tailwind-css-utility-first-styling)
  - [React Hooks](#react-hooks)
  - [EmailJS Integration](#emailjs-integration)
  - [Environment Variables](#environment-variables)
- [Pages & Features](#pages--features)
- [Deployment](#deployment)
- [Getting Started](#getting-started)
- [Contact](#contact)

---

## About the Project

This project is a multi-page, production-grade marketing website built using the **Next.js App Router**, styled with **Tailwind CSS**, and deployed on **Vercel**. It was designed to reflect the calm, refined brand identity of Simply Sorted — using a neutral colour palette, clean typography via the Inter font, and responsive layouts across all screen sizes.

The website prioritises:
- Fast page load performance through Next.js image optimisation and server-side rendering
- Search engine visibility through the Next.js Metadata API
- Seamless client communication via an integrated EmailJS contact form
- A professional, accessible user interface on both desktop and mobile

---

## About the Business

**Simply Sorted** is a boutique professional organising and home staging service run by **Funi (Funeka Kgala)** — a Project Management Professional (PMP) and Certified Professional Organiser (CPO).

The business serves families, professionals, and homeowners in Randburg, Gauteng, offering three core service areas:

| Service | Description |
|---|---|
| **Professional Organising** | Decluttering, organising, and building functional systems for the home |
| **Life Transitions** | Compassionate support during downsizing and major life changes |
| **Home Staging** | Styling spaces to maximise appeal and perceived value for selling or renting |

> *"An organised home is more than just tidy shelves and labelled bins — it is about creating calm, clarity, and breathing room in your life."*
> — Funi, Founder of Simply Sorted

📍 Randburg, Gauteng, South Africa
📧 Funeka.Kgala@SimplySorted.com
📞 079 892 7486

---

## Project Structure

The project follows the **Next.js App Router** convention, where the file system directly maps to application routes.

```
new-project/
└── src/
    └── app/
        ├── layout.js           # Root layout — wraps all pages with Header, Footer, metadata
        ├── page.js             # Home page (/)
        ├── globals.css         # Global styles — Tailwind CSS directives
        ├── about/
        │   └── page.js         # About page (/about)
        ├── pricing/
        │   └── page.js         # Services/Pricing page (/pricing)
        ├── contact/
        │   └── page.js         # Contact page (/contact)
        └── components/
            ├── Header.js       # Sticky navigation with mobile hamburger menu
            └── Footer.js       # Footer with links and contact information
```

Each folder inside `app/` that contains a `page.js` file automatically becomes a publicly accessible route — no manual router configuration is required.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15 | React framework — routing, rendering, image optimisation, metadata |
| [React](https://react.dev/) | 19 | UI component model, hooks, state management |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first CSS framework for all styling and layout |
| [EmailJS](https://www.emailjs.com/) | Latest | Client-side email sending without a backend server |
| [Vercel](https://vercel.com/) | — | Hosting and deployment platform |
| [Inter (Google Fonts)](https://fonts.google.com/specimen/Inter) | — | Primary typeface, loaded via `next/font/google` |

---

## Core Concepts

### Next.js App Router

The **App Router** is the modern routing system introduced in Next.js 13+. Unlike the legacy Pages Router, it uses the `app/` directory and introduces React Server Components by default.

**How it works in this project:**
- Every folder inside `src/app/` with a `page.js` file becomes a route
- `layout.js` at the root level wraps every page with the shared `<Header />` and `<Footer />` components, maintaining consistent structure without re-rendering on navigation
- Navigation between pages is handled by `next/link`, which performs **client-side transitions** — the browser does not perform a full page reload, resulting in a faster and smoother user experience

```js
// layout.js — applied to every page automatically
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

### React Server & Client Components

Next.js App Router renders components as **Server Components** by default — they are rendered on the server at request time and sent to the browser as HTML. This improves performance and SEO.

However, components that require **interactivity** (event listeners, state, browser APIs) must be explicitly declared as **Client Components** using the `'use client'` directive at the top of the file.

**In this project:**

| Component | Type | Reason |
|---|---|---|
| `page.js` (Home) | Server Component | Static content, no interactivity |
| `layout.js` | Server Component | Structural wrapper, metadata only |
| `Footer.js` | Server Component | Static links and text |
| `Header.js` | **Client Component** | Uses `useState` for mobile menu toggle |
| `contact/page.js` | **Client Component** | Uses `useState`, `useRef`, form submission handler |

```js
// Header.js — must be a Client Component to use useState
'use client';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ...
}
```

---

### Next.js Image Optimisation

The `next/image` component is used throughout the project instead of the standard HTML `<img>` tag. It provides automatic image optimisation out of the box.

**Key benefits applied in this project:**
- **Automatic format conversion** — images are served as WebP where supported, reducing file size
- **Lazy loading** — images only load when they enter the viewport, improving initial page load
- **`priority` prop** — used on above-the-fold images (hero and logo) to preload them immediately and avoid Cumulative Layout Shift (CLS)
- **`fill` layout** — used inside relatively-positioned containers so images cover their parent element responsively without specifying fixed dimensions

```jsx
// Hero image using fill and priority
<div className="relative h-96 rounded-lg overflow-hidden">
  <Image
    src="/images/indoor-service.jpeg"
    alt="Professional home organizing"
    fill
    className="object-cover"
    priority
  />
</div>
```

> **Note:** When using `fill`, the parent container must have `position: relative` and a defined height. Tailwind's `relative` and `h-96` classes fulfil this requirement.

---

### Next.js Metadata API & SEO

Search engine optimisation is handled declaratively through the **Next.js Metadata API**. By exporting a `metadata` object from `layout.js`, Next.js automatically injects the appropriate `<meta>` tags into the HTML `<head>`.

This project defines:
- `title` — the browser tab title and primary search result heading
- `description` — the search engine result snippet
- `keywords` — an array of relevant search terms targeting local South African audiences
- `icons` — the browser favicon

```js
// layout.js
export const metadata = {
  title: 'Simply Sorted - Professional Organizing & Home Staging',
  description: 'Professional organizing and home staging services in Randburg, Gauteng.',
  keywords: [
    'professional organizing Randburg',
    'home staging Gauteng',
    'certified professional organizer',
    // ...
  ],
};
```

This approach keeps all SEO configuration co-located with the layout rather than scattered across individual page files.

---

### Tailwind CSS Utility-First Styling

Tailwind CSS is a **utility-first** framework — instead of writing custom CSS classes, styles are applied directly in JSX using small, single-purpose class names. There are no separate `.css` files other than `globals.css`, which contains only the three Tailwind directives.

**Patterns used across this project:**

| Pattern | Example Classes | Purpose |
|---|---|---|
| Responsive layout | `grid-cols-1 md:grid-cols-2` | Single column on mobile, two columns on tablet and above |
| Flexbox alignment | `flex items-center justify-between` | Horizontal navbar layout |
| Spacing | `px-4 sm:px-6 lg:px-8` | Responsive horizontal padding |
| Hover transitions | `hover:bg-gray-800 transition-colors` | Smooth interactive state changes |
| Custom colours | `bg-beige-light`, `bg-blue-light` | Brand-specific colours defined in Tailwind config |
| Conditional animation | `group-hover:scale-105 transition-transform` | Image zoom on card hover |
| Mobile menu animation | `max-h-0 opacity-0` → `max-h-96 opacity-100` | CSS height transition for accordion-style menu |

---

### React Hooks

React Hooks are functions that allow functional components to manage state and side effects. Two hooks are used in this project:

**`useState`** — manages dynamic values that, when changed, cause the component to re-render.

Used in `Header.js` to track whether the mobile navigation menu is open or closed:
```js
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

Used in `contact/page.js` to track form field values and submission status:
```js
const [formData, setFormData] = useState({ firstName: '', email: '', ... });
const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
```

**`useRef`** — holds a reference to a DOM element without triggering a re-render.

Used in `contact/page.js` to reference the `<form>` element directly, which is a common pattern when working with form-based SDKs:
```js
const form = useRef();
```

---

### EmailJS Integration

The contact form sends emails directly from the browser using **EmailJS** — a service that allows client-side JavaScript to send emails without a dedicated backend server or API endpoint.

**How the flow works:**
1. The user fills in the contact form and submits it
2. `handleSubmit` is called, which prevents the default form behaviour and sets `status` to `'sending'`
3. `emailjs.send()` is called with the configured **Service ID**, **Template ID**, and **Public Key** — all sourced from environment variables
4. On success, the form resets and `status` is set to `'success'`
5. On failure, `status` is set to `'error'` and a fallback message is shown

```js
emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  templateParams,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
)
.then(() => setStatus('success'))
.catch(() => setStatus('error'));
```


---

### Environment Variables

Sensitive configuration values — such as API keys and service identifiers — are stored as **environment variables** rather than hardcoded in source code. This prevents credentials from being exposed in version control.

In Next.js, environment variables prefixed with `NEXT_PUBLIC_` are safely exposed to the browser (client-side). Variables without this prefix remain server-side only.

**Variables used in this project:**

| Variable | Exposed To | Purpose |
|---|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Client | EmailJS service identifier |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Client | EmailJS email template identifier |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Client | EmailJS authentication key |
| `NEXT_PUBLIC_ADMIN_EMAIL` | Client | Recipient email address for contact form submissions |

These are defined in a `.env.local` file at the project root (excluded from version control via `.gitignore`) and configured as **Environment Variables** in the Vercel project dashboard for production.

---

## Pages & Features

### Home (`/`)
- Full-width hero section with headline, subtext, and dual CTA buttons
- Services preview grid with hover image zoom effects
- Founder (Meet Funi) section with biography and portrait
- Call-to-action banner section

### About (`/about`)
- Detailed background on the founder and business philosophy

### Services (`/pricing`)
- Service packages and pricing information

### Contact (`/contact`)
- Validated contact form with fields for name, email, phone, purpose, and message
- Real-time submission status feedback (sending, success, error states)
- Contact information panel (location, email, phone)
- EmailJS-powered delivery — no backend required

### Shared Components

**Header** — Sticky top navigation bar featuring the company logo, page links, a CTA button, and a fully animated responsive hamburger menu for mobile screens.

**Footer** — Four-column layout with company description, quick navigation links, and contact details. Copyright year is generated dynamically via `new Date().getFullYear()`.

---

## Deployment

The project is deployed on **Vercel**, the hosting platform built specifically for Next.js applications. Vercel provides:

- **Automatic deployments** — every push to the main branch triggers a new production deployment
- **Preview deployments** — pull requests generate isolated preview URLs for review before merging
- **Edge network** — static assets and pages are served from a global CDN for low-latency delivery
- **Environment variable management** — production secrets are stored securely in the Vercel project dashboard, separate from the codebase

**Live URL:** [https://simply-sorted-rho.vercel.app](https://simply-sorted-rho.vercel.app)

---

## Getting Started

To run the project locally:

**Prerequisites:** Node.js 18+ and npm

```bash
# 1. Clone the repository
git clone https://github.com/your-username/simply-sorted.git
cd simply-sorted

# 2. Install dependencies
npm install

# 3. Create environment variables file
cp .env.example .env.local
# Then fill in your EmailJS credentials in .env.local

# 4. Start the development server
npm run dev
```



**Required `.env.local` variables:**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_ADMIN_EMAIL=your_email@example.com
```

---

## Contact

**Simply Sorted**
Randburg, Gauteng, South Africa

- 📧 [Funeka.Kgala@SimplySorted.com](mailto:Funeka.Kgala@SimplySorted.com)
- 📞 079 892 7486
- 🌐 [simply-sorted-rho.vercel.app](https://simply-sorted-rho.vercel.app)

---

*© 2026 Simply Sorted | Randburg, Gauteng. All rights reserved.*
