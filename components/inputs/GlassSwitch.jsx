"use client";
export default function GlassSwitch({
  checked,
  onChange,
  label,
  className = "",
}) {
  return (
    <label className={`flex items-center gap-3 cursor-pointer ${className}`}>
      {" "}
      <div className="relative">
        {" "}
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={onChange}
        />{" "}
        <div className="block h-6 w-11 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-md backdrop-saturate-150 transition-colors peer-checked:bg-white/60 peer-checked:border-white/60 peer-focus:ring-2 peer-focus:ring-white/20" />{" "}
        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-300 peer-checked:translate-x-5" />{" "}
      </div>{" "}
      {label && (
        <span className="text-sm font-medium text-white/80">{label}</span>
      )}{" "}
    </label>
  );
}
