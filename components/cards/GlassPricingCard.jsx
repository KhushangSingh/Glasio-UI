"use client";
export default function GlassPricingCard({
  title,
  price,
  period = "/month",
  features = [],
  highlighted = false,
  buttonText = "Get Started",
  onButtonClick,
  className = "",
}) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl border ${highlighted ? "border-white/10 bg-white/[0.06]" : "border-white/10 bg-white/[0.06]"} p-8 shadow-2xl backdrop-blur-md backdrop-saturate-150 transition-all hover:border-white/20 hover:-translate-y-1 duration-300 ${className}`}
    >
      {" "}
      {highlighted && (
        <div className="absolute -top-px left-0 right-0 mx-auto flex w-max -translate-y-1/2 items-center justify-center rounded-full bg-white/30 backdrop-blur-md border border-white/30 px-3 py-1 text-xs font-semibold text-white shadow-2xl shadow-black/20">
          {" "}
          Most Popular{" "}
        </div>
      )}{" "}
      <div className="mb-6 relative z-10">
        {" "}
        <h3 className="text-lg font-medium text-white/80">{title}</h3>{" "}
        <div className="mt-2 flex items-baseline gap-2">
          {" "}
          <span className="text-4xl font-bold text-white">{price}</span>{" "}
          <span className="text-sm font-medium text-white/50">
            {period}
          </span>{" "}
        </div>{" "}
      </div>{" "}
      <ul className="mb-8 flex-1 space-y-4 relative z-10">
        {" "}
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-white/70">
            {" "}
            <svg
              className="h-5 w-5 text-white/80 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />{" "}
            </svg>{" "}
            {feature}{" "}
          </li>
        ))}{" "}
      </ul>{" "}
      <button
        onClick={onButtonClick}
        className={`relative z-10 w-full rounded-xl py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 ${highlighted ? "bg-white/20 border border-white/40 text-white hover:bg-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]" : "bg-white/10 text-white border border-white/30 hover:bg-white/20"}`}
      >
        {" "}
        {buttonText}{" "}
      </button>{" "}
      {highlighted && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
      )}{" "}
    </div>
  );
}
