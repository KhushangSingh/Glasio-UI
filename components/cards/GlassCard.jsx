"use client";
export default function GlassCard({
  children,
  className = "",
  interactive = false,
}) {
  return (
    <article
      className={[
        "rounded-3xl",
        "border border-white/10",
        "bg-white/[0.06]",
        "p-6",
        "shadow-2xl shadow-black/20",
        "backdrop-blur-md backdrop-saturate-150",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09] hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)] cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {" "}
      {children}{" "}
    </article>
  );
}
