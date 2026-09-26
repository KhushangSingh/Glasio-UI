"use client";
export default function GlassAvatar({
  src,
  alt = "Avatar",
  fallback,
  size = "md",
  className = "",
}) {
  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-12 w-12 text-sm",
    lg: "h-16 w-16 text-base",
  };
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur-md backdrop-saturate-150 transition-transform hover:scale-105 duration-300 ${sizes[size]} ${className}`}
    >
      {" "}
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span className="font-semibold text-white/80">{fallback}</span>
      )}{" "}
      <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] pointer-events-none" />{" "}
    </div>
  );
}
