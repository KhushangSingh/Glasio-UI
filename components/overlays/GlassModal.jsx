"use client";
export default function GlassModal({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}) {
  if (!isOpen) return null;
  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden p-4 md:p-0">
      {" "}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />{" "}
      <div
        className={`relative z-50 w-full max-w-md transform overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/40 backdrop-blur-md backdrop-saturate-150 transition-all ${className}`}
      >
        {" "}
        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-white/[0.06] blur-3xl pointer-events-none" />{" "}
        <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />{" "}
        <div className="relative p-5 md:p-6">
          {" "}
          <div className="mb-4 flex items-center justify-between">
            {" "}
            <h3 className="text-xl font-semibold text-white">{title}</h3>{" "}
            <button
              onClick={onClose}
              className="rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              {" "}
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />{" "}
              </svg>{" "}
            </button>{" "}
          </div>{" "}
          <div className="text-white/80"> {children} </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
