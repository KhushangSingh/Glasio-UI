# GlassDashboardLayout

A complete dashboard and analytics layout utilizing glassmorphism aesthetics. It includes a responsive sidebar navigation, a top search bar, KPI metric cards, a CSS-based mock chart, and an activity feed.

## Preview

![GlassDashboardLayout Preview](preview.png)

## Usage

Copy \`GlassDashboardLayout.jsx\` to your project. It requires Tailwind CSS and \`lucide-react\` for icons.

\`\`\`jsx
import GlassDashboardLayout from './GlassDashboardLayout';

export default function App() {
  return (
    <div className="p-4 md:p-10 w-full min-h-screen bg-black">
      <GlassDashboardLayout />
    </div>
  );
}
\`\`\`
