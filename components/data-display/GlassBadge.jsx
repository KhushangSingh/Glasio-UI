"use client";
export default function GlassBadge({
  children,
  className = "",
  color = "blue",
}) {
  const colors = {
    blue: "border-blue-400/50 bg-blue-500/30 text-blue-100 shadow-[0_0_15px_rgba(59,130,246,0.4)]",
    purple:
      "border-purple-400/50 bg-purple-500/30 text-purple-100 shadow-[0_0_15px_rgba(168,85,247,0.4)]",
    green:
      "border-emerald-400/50 bg-emerald-500/30 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    pink: "border-pink-400/50 bg-pink-500/30 text-pink-100 shadow-[0_0_15px_rgba(236,72,153,0.4)]",
    white:
      "border-white/40 bg-white/25 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]",
  };
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide backdrop-blur-md backdrop-saturate-150",
        colors[color] || colors.white,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {" "}
      {children}{" "}
    </span>
  );
}
