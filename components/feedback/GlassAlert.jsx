"use client";
import { motion } from "framer-motion";

export default function GlassAlert({
  title,
  description,
  type = "info",
  className = "",
  onClose,
}) {
  const styles = {
    info:    "border-blue-500/30 bg-blue-500/10 text-blue-200 shadow-[0_4px_20px_rgba(59,130,246,0.15)]",
    success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200 shadow-[0_4px_20px_rgba(16,185,129,0.15)]",
    warning: "border-amber-500/30 bg-amber-500/10 text-amber-200 shadow-[0_4px_20px_rgba(245,158,11,0.15)]",
    error:   "border-rose-500/30 bg-rose-500/10 text-rose-200 shadow-[0_4px_20px_rgba(244,63,94,0.15)]",
  };
  const icons = {
    info: (
      <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    success: (
      <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    error: (
      <svg className="h-5 w-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={`relative flex gap-4 rounded-2xl border p-4 backdrop-blur-md backdrop-saturate-150 ${styles[type]} ${className}`}
    >
      <div className="mt-0.5 shrink-0">{icons[type]}</div>
      <div className="flex-1 pr-6">
        {title && <h4 className="text-sm font-semibold">{title}</h4>}
        {description && (
          <p className={`text-sm ${title ? "mt-1 opacity-80" : ""}`}>{description}</p>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 opacity-50 hover:bg-white/10 hover:opacity-100 transition-all duration-150 focus:outline-none"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </motion.div>
  );
}
