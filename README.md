# Yasmine Khaled Portfolio

Premium portfolio site for a Laravel Backend Developer, built with Next.js (App Router), Tailwind CSS, and Framer Motion. Includes dark/light mode with system detection and a contact form endpoint ready to swap with a Laravel API.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- TypeScript

## Getting Started
1. Install dependencies:
   - `npm install`
2. Run the dev server:
   - `npm run dev`
3. Build for production:
   - `npm run build`
4. Start production server:
   - `npm run start`

## Project Structure
- `app/` Next.js app router pages and API routes
- `components/` UI and animation components
- `public/` static assets and CV placeholder
- `tailwind.config.ts` Tailwind configuration

## Contact Form
The contact form posts to `app/api/contact/route.ts` for now. This is a simple placeholder endpoint so the UI works out of the box.

To integrate a Laravel REST API later, replace the `fetch("/api/contact")` call in `components/ContactForm.tsx` with your Laravel endpoint and add server-side validation there.

## Notes
- Dark mode uses `class` strategy with a persisted toggle in `localStorage`.
- Animations respect reduced motion preferences.
- Update `public/cv-placeholder.txt` with the final PDF resume.