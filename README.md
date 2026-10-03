# Velto Solutions

A premium, production-ready marketing website built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

1. **Install dependencies:**
   ```cmd
   npm install
   ```

2. **Run the development server:**
   ```cmd
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Build for production:**
   ```cmd
   npm run build
   ```

## How to Customize

### Adding a New Service Category

1. Open `src/lib/services.ts`.
2. Locate the `serviceCategories` array.
3. Copy an existing object in the array (e.g., the "Academic Support" one) and paste it below.
4. Update the `slug`, `title`, `description`, `icon`, and `href` (which should point to the new service page route).
5. Ensure `live: true` is set for it to appear on the homepage.
6. Create the new service page route by creating a folder matching your slug inside `src/app/services/` (e.g., `src/app/services/your-new-slug/page.tsx`). You can copy the structure of `src/app/services/academic-support/page.tsx` as a starting point.

### Changing Phone Numbers

1. Open `src/lib/services.ts`.
2. Locate the `phoneNumbers` array at the bottom of the file.
3. Update the `display` and `tel` fields. This will automatically update all contact links across the site.

### Updating the Logo

1. Open `src/components/ui/VeltoLogo.tsx`.
2. The current implementation uses a placeholder SVG component.
3. When you have your final logo file, place it in the `public/` directory (e.g., `public/logo.svg`).
4. Replace the SVG code in `VeltoLogo.tsx` with an `Image` component referencing your file:
   ```tsx
   import Image from "next/image";
   
   export default function VeltoLogo({ className = "", size = 40 }: VeltoLogoProps) {
     return (
       <div className={`flex items-center gap-3 ${className}`}>
         <Image src="/logo.svg" alt="Velto Solutions" width={size * 3} height={size} />
       </div>
     );
   }
   ```
