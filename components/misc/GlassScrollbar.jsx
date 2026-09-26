"use client";

export default function GlassScrollbar({
  children,
  orientation = "vertical",
  className = "",
}) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={[
        "glass-scrollbar rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md backdrop-saturate-150",
        isHorizontal
          ? "overflow-x-auto overflow-y-hidden"
          : "overflow-y-auto overflow-x-hidden",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

