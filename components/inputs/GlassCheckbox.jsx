"use client";
export default function GlassCheckbox({ label, id, className = "", ...props }) {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-3 cursor-pointer group ${className}`}
    >
      {" "}
      <div className="relative flex items-center justify-center">
        {" "}
        <input
          type="checkbox"
          id={id}
          className="peer sr-only"
          {...props}
        />{" "}
        <div className="h-5 w-5 rounded border border-white/10 bg-white/[0.06] backdrop-blur-md backdrop-saturate-150 transition-all duration-300 peer-checked:border-white/30 peer-checked:bg-white/20 peer-focus:ring-2 peer-focus:ring-white/20 group-hover:bg-white/20" />{" "}
        <svg
          className="absolute h-3.5 w-3.5 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />{" "}
        </svg>{" "}
      </div>{" "}
      {label && (
        <span className="text-sm font-medium text-white/80 select-none group-hover:text-white transition-colors">
          {label}
        </span>
      )}{" "}
    </label>
  );
}
