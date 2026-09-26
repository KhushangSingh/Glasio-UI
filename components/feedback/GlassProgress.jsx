"use client";
export default function GlassProgress({
  value = 0,
  max = 100,
  label,
  className = "",
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {" "}
      {(label || label === "") && (
        <div className="flex justify-between text-xs font-medium text-white/80">
          {" "}
          <span>{label}</span> <span>{Math.round(percentage)}%</span>{" "}
        </div>
      )}{" "}
      <div className="h-3 w-full overflow-hidden rounded-full border border-white/10 bg-white/[0.06] shadow-inner backdrop-blur-md backdrop-saturate-150">
        {" "}
        <div
          className="h-full bg-gradient-to-r from-white/20 to-white/60 transition-all duration-500 ease-out relative"
          style={{ width: `${percentage}%` }}
        >
          {" "}
          <div className="absolute inset-0 bg-white/[0.06] w-full animate-[shimmer_2s_infinite]" />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
