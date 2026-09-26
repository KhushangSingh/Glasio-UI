"use client";

export default function GlassCommandBar({
  placeholder = "Search...",
  shortcuts = [],
  className = "",
}) {
  return (
    <div
      className={`flex w-full max-w-2xl items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-md backdrop-saturate-150 transition-all duration-200 hover:border-white/20 focus-within:border-white/25 focus-within:bg-white/[0.09] focus-within:shadow-[0_0_24px_rgba(255,255,255,0.08)] ${className}`}
    >
      <svg
        className="h-5 w-5 text-white/50 ml-2 shrink-0 transition-colors duration-200 group-focus-within:text-white/80"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-white placeholder-white/50 focus:outline-none transition-colors duration-200"
      />
      {shortcuts.length > 0 && (
        <div className="flex gap-1 pr-2 shrink-0">
          {shortcuts.map((key, i) => (
            <kbd
              key={i}
              className="inline-flex h-6 items-center justify-center rounded border border-white/10 bg-white/[0.06] px-2 text-xs font-medium text-white/60 shadow-inner transition-colors duration-200"
            >
              {key}
            </kbd>
          ))}
        </div>
      )}
    </div>
  );
}
