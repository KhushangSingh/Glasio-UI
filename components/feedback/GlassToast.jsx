"use client";
export default function GlassToast({
  title,
  message,
  onClose,
  visible = true,
  className = "",
}) {
  if (!visible) return null;
  return (
    <div
      className={`pointer-events-auto flex w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-md backdrop-saturate-150 transition-all animate-[slide-up_0.3s_ease-out] ${className}`}
    >
      {" "}
      <div className="w-1 bg-gradient-to-b from-white/20 to-white/5" />{" "}
      <div className="flex w-full items-start p-4">
        {" "}
        <div className="flex-1">
          {" "}
          {title && (
            <h3 className="text-sm font-semibold text-white">{title}</h3>
          )}{" "}
          {message && (
            <p className={`text-sm text-white/70 ${title ? "mt-1" : ""}`}>
              {message}
            </p>
          )}{" "}
        </div>{" "}
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 flex shrink-0 rounded-lg p-1 text-white/40 hover:bg-white/10 hover:text-white transition-colors"
          >
            {" "}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>{" "}
          </button>
        )}{" "}
      </div>{" "}
    </div>
  );
}
