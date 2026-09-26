"use client";

export default function GlassTooltip({
  children,
  content,
  position = "top",
  className = "",
}) {
  const positions = {
    top:    "bottom-full left-1/2 -translate-x-1/2 mb-2 group-hover:-translate-y-1",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2 group-hover:translate-y-1",
    left:   "right-full top-1/2 -translate-y-1/2 mr-2 group-hover:-translate-x-1",
    right:  "left-full top-1/2 -translate-y-1/2 ml-2 group-hover:translate-x-1",
  };

  return (
    <div className="group relative inline-flex">
      {children}
      <div
        className={`pointer-events-none absolute z-50 whitespace-nowrap rounded-lg border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-white shadow-2xl shadow-black/20 backdrop-blur-md backdrop-saturate-150 opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible ${positions[position]} ${className}`}
      >
        {content}
      </div>
    </div>
  );
}
