# Installation Guide

Glasio UI is designed as a **copy-and-paste** component library, meaning you do not install a monolithic `glasio-ui` package. Instead, you own the code and can customize it endlessly!

However, to use these components out of the box, your project needs a few standard dependencies.

## Prerequisites

1. **React** (or a framework like Next.js / Vite)
2. **Tailwind CSS** (for styling the glassmorphism effects)

## 1. Install Required Dependencies

Many of the interactive and animated components in this library rely on two incredibly popular packages: **Framer Motion** (for smooth animations) and **Lucide React** (for beautiful, lightweight icons).

Run the following command in your terminal to install them:

```bash
npm install framer-motion lucide-react
```

*(Alternatively, if you use yarn or pnpm: `yarn add framer-motion lucide-react`)*

## 2. Configure Tailwind CSS

Because Glasio UI relies heavily on Tailwind CSS utility classes (especially `backdrop-blur`, `bg-white/10`, and gradients), ensure your `tailwind.config.js` is properly scanning your component files.

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}", // <--- Make sure this line exists!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 3. How to "Install" a Component

Since there is no `npm install glasio-ui`, adding a component to your project is as simple as:

1. Browse to the component you want in this GitHub repository (e.g., `components/cards/GlassCard.jsx`).
2. **Copy** the raw code.
3. **Paste** it into a new file in your own project (e.g., `src/components/GlassCard.jsx`).
4. **Import** and use it anywhere!

```jsx
// In your App.jsx or Page.jsx
import GlassCard from "./components/GlassCard";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <GlassCard>
        <h1 className="text-white text-xl">My first glass component!</h1>
      </GlassCard>
    </div>
  );
}
```

## 4. (Optional) Missing Dependencies?
If you ever copy a complex component (like the `GlassLiveStatCard`) and get an error about a missing package, just check the `import` statements at the top of the file. If it requires an extra package, simply `npm install` that specific package!
