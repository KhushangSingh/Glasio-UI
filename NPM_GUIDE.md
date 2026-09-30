# Installation Guide

Glasio UI provides a highly convenient CLI to add our copy-and-paste components directly into your project!

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

## 3. Install Components via CLI (Recommended)

You can easily pull any component directly into your project using the `glasio-ui` CLI package!

```bash
npx glasio-ui add glass-card
```

This will automatically search the library and download `GlassCard.jsx` right into your project's `components` directory. 

You can then import it like this:

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

## 4. Manual Installation

If you prefer not to use the CLI, you can always manually copy the components:
1. Browse to the component you want in this GitHub repository (e.g., `components/cards/GlassCard.jsx`).
2. **Copy** the raw code.
3. **Paste** it into a new file in your own project.
