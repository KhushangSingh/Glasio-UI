"use client";
export default function GlassButton({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
}) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden group active:scale-95";
  const variants = {
    primary:
      "border border-white/20 bg-white/15 text-white shadow-[0_0_15px_rgba(255,255,255,0.10)] hover:bg-white/25 hover:border-white/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.22)] hover:-translate-y-px backdrop-blur-md backdrop-saturate-150",
    secondary:
      "border border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white hover:-translate-y-px backdrop-blur-md backdrop-saturate-150",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[baseStyles, variants[variant], className].filter(Boolean).join(" ")}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </button>
  );
}
