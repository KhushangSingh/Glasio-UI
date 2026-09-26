"use client";
export default function GlassInput({
  label,
  type = "text",
  placeholder = "",
  className = "",
  id,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-white/80 ml-1 transition-colors">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder-white/50 shadow-inner backdrop-blur-md backdrop-saturate-150 transition-all duration-200 focus:border-white/30 focus:bg-white/[0.10] focus:outline-none focus:ring-2 focus:ring-white/15 hover:border-white/20"
        {...props}
      />
    </div>
  );
}
