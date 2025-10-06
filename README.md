# Professional Portfolio Website

Modern portfolio built with React (Vite), Tailwind CSS, and animated UI components.

## Quick Start

1) Install dependencies:
```
npm i
```

2) Start dev server:
```
npm run dev
```

3) Build for production:
```
npm run build
```

## Content Management

All site content is centralized in `src/data/content.ts`.

- Personal info: `contentData.personal`
  - Name, title, tagline, bio, links
  - Resume URL: `contentData.personal.resume`

- Skills, Projects, Research, Publications, Certifications, Education
  - Update arrays/fields directly in `content.ts`

### Update Profile Photo
- Add your image at `src/public/profile.png`.
- Hero, Navigation, and Footer already reference this image.
- To change the file name or path, update imports in:
  - `src/components/Hero.tsx`
  - `src/components/Navigation.tsx`
  - `src/components/Footer.tsx`

### Update Resume
- Option A (local file): place your PDF at `src/public/resume.pdf` and set:
  - `resume: "/resume.pdf"` in `src/data/content.ts`
- Option B (external URL): set `resume` to your public link (Google Drive, etc.)
- Both Navigation and Footer open the resume in a new tab.

## Conventions
- Styling: Tailwind CSS utility classes
- Components: located in `src/components`
- UI primitives: `src/components/ui`
- Public assets: `src/public`

## Scripts
- `dev`: start local dev server
- `build`: production build (output in `build/`)

## Notes
- Ensure links in `content.ts` are valid.
- If images don’t load, verify paths and file names (case sensitive).
  