<div align="center">
  <img src="https://raw.githubusercontent.com/KhushangSingh/Glasio-UI/main/public/hero-image.png" alt="Glasio UI Hero" />

  <h1>Glasio UI</h1>
  <p><strong>Modern Glassmorphism UI Components for React & Tailwind CSS</strong></p>

  <p>
    <a href="https://glasio-ui.vercel.app"><b>Browse Documentation</b></a> •
    <a href="https://github.com/KhushangSingh/Glasio-UI/issues"><b>Report Bug</b></a> •
    <a href="https://github.com/KhushangSingh/Glasio-UI/discussions"><b>Community</b></a>
  </p>
</div>

<br />

**Glasio UI** is a beautifully crafted, zero-dependency, copy-and-paste component library designed for fast and stunning web development.

Instead of dealing with massive npm packages and rigid APIs, Glasio UI gives you the raw code. Just copy, paste, and customize everything directly in your React or Next.js project using standard Tailwind utility classes.

---

## 📁 Repository Structure

Unlike traditional UI libraries, this repository contains *only* the raw, copy-pasteable components so you can easily browse the source code.

👉 **[View the full A-Z Component Index here (COMPONENTS.md)](COMPONENTS.md)**

```text
components/
├── authentication/   # Login, Register, and SSO blocks
├── blocks/           # Large sections like Checkouts and Profiles
├── cards/            # Stat cards, Pricing cards, Live Metrics
├── cursors/          # Custom animated cursor effects
├── data-display/     # Avatars, Badges, Tables, Accordions
├── feedback/         # Alerts, Toasts, Tooltips, Progress bars
├── inputs/           # Buttons, Inputs, Switches, Sliders
├── navigation/       # Navbars, Sidebars, Tabs, Breadcrumbs
├── overlays/         # Modals, Drawers, Dropdowns
└── misc/             # Scrollbars, Number cyclers
```

## ✨ Quick Start

1. **Install Tailwind CSS**: Ensure your own project is set up with React and Tailwind CSS.
2. **Find a Component**: Browse the `components/` folder in this repository or go to our [Component Registry](https://glasio-ui.vercel.app/) to find what you need.
3. **Copy the Code**: Open the specific `.jsx` file (e.g., `GlassCard.jsx`) and copy the raw code.
4. **Paste into Your Project**: Create a new file in your own project (e.g., `src/components/GlassCard.jsx`) and paste the code inside.
5. **Import and Use**: You can now import the component locally into your app just like any other file!

### Example Usage:

If you copied `GlassCard.jsx` into your project's `components` folder, you would use it like this:

```jsx
// This imports the local file you just created!
import { GlassCard } from "./components/GlassCard";

export default function App() {
  return (
    <div className="bg-black min-h-screen p-10">
        <GlassCard>
            <h1 className="text-white text-2xl font-bold">Hello Glasio UI!</h1>
        </GlassCard>
    </div>
  )
}
```

## 🖱️ Vanilla HTML (Non-React) Users

If you aren't using React but want our **premium glowing custom cursors** on a standard HTML website (like WordPress, Shopify, or Webflow), simply drop this script tag into your `<head>`:

```html
<script src="https://unpkg.com/glasio-ui/cursors.js"></script>
```

This zero-dependency script instantly adds our smooth, glassmorphism-styled trailing cursor to any website.

## ✨ Micro-Interactions

Glasio UI goes beyond basic components. We provide highly polished, interactive micro-features out of the box:
- **Glowing Multi-Cursors:** A custom SVG cursor engine that tracks your mouse and expands on clickable elements (`CustomCursor.jsx`).
- **Bouncing Elements:** Playful components that react to user proximity (e.g., `FooterBouncingCursor.jsx` which dodges the mouse).
- **Command Palettes:** Fully animated, keyboard-navigable search modals (`GlassCommandBar.jsx`).

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/KhushangSingh/Glasio-UI/issues/new/choose) if you want to contribute to the growing list of components.

## 📝 License
This project is open-source and free to use in personal and commercial projects.
