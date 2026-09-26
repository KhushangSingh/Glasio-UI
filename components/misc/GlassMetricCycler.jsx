"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassMetricCycler({
  metrics = [],
  intervalMs = 3000,
  className = "",
}) {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (metrics.length < 2) return;
    const t = setInterval(() => {
      setDirection(1);
      setIdx(i => (i + 1) % metrics.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [metrics.length, intervalMs]);

  const go = (next) => {
    const d = next > idx ? 1 : -1;
    setDirection(d);
    setIdx(next);
  };

  const current = metrics[idx] ?? {};

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Card */}
      {/* Card Wrapper with stable backdrop-blur */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]">
        {/* Decorative blur (static) */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/[0.06] blur-3xl pointer-events-none" />
        
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={idx}
            custom={direction}
            initial={{ opacity: 0, x: direction * 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-white/60">{current.title}</h3>
              {current.icon && (
                <div className="text-white/80 p-2 rounded-full bg-white/[0.06] border border-white/10">
                  {current.icon}
                </div>
              )}
            </div>
            <div className="mt-4 flex items-baseline gap-4">
              <p className="text-3xl font-bold tracking-tight text-white">
                {current.value}
              </p>
              {current.trendValue && (
                <span className={`inline-flex items-center text-sm font-medium ${current.isPositive !== false ? "text-emerald-400" : "text-rose-400"}`}>
                  {current.isPositive !== false ? "↑" : "↓"} {current.trendValue}
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2">
        {metrics.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? "bg-white w-6" : "bg-white/30 w-1.5"
            }`}
            aria-label={`Show metric ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

