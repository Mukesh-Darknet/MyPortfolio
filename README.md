# Mukesh Yadav - 3D Developer Portfolio

A futuristic, 3D animated MERN Stack Developer portfolio built with React (Vite), Tailwind CSS v4, Framer Motion, and Three.js. This portfolio features a 2026 dark theme, glassmorphism UI, smooth scrolling, and an interactive animated cursor.

## Tech Stack
- **React 18** (via Vite)
- **Tailwind CSS v4** (for styling and neon glow effects)
- **Framer Motion** (for page, scroll, and micro-animations)
- **Three.js & React Three Fiber** (for the 3D rotating globe scene)
- **Lucide React** (for modern aesthetic icons)

## Structure
- `src/components/layout/Navbar.jsx` - Glassmorphism floating navbar.
- `src/components/layout/CustomCursor.jsx` - Custom interactive cursor that follows the mouse.
- `src/components/3d/Scene.jsx` - The main ThreeJS canvas for the Hero background.
- `src/components/sections/*` - Holds individual sections (Hero, About, Skills, Projects, Contact).
- `src/index.css` - Custom layered Tailwind CSS defining theme colors and base aesthetics.
- `src/utils/animations.js` - Centralized Framer Motion variants.

## How to Run Locally

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

## How to Deploy on Vercel

Vercel provides seamless deployment for Vite apps.

### Option 1: Deploy via Vercel UI
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Log in to [Vercel](https://vercel.com/) and click "Add New Project".
3. Import your repository.
4. Vercel will automatically detect `Vite`.
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

### Option 2: Deploy via Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command in the project root:
   ```bash
   vercel
   ```
3. Follow the prompts to configure and deploy the project to production:
   ```bash
   vercel --prod
   ```

## Optimization Features included
- **Responsive Layout**: Full support from mobile down to 320px width up to 4K displays.
- **Micro-Interactions**: Custom cursors, button glows, and card tilts.
- **ThreeJS Optimization**: Limited polygons in Canvas, `<Suspense>` loaders, and disabled zoom/pan for smooth scrolling.
