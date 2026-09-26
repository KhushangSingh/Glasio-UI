"use client";
export default function GlassSkeleton({
  className = "",
  type = "rect", // rect, circle, text
}) {
  const styles = {
    rect: "rounded-xl",
    circle: "rounded-full",
    text: "rounded-md h-4",
  };
  return (
    <div
      className={`relative overflow-hidden bg-white/[0.06] border border-white/10 ${styles[type]} ${className}`}
    >
      {" "}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />{" "}
    </div>
  );
}
