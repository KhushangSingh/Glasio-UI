"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function RollingDigit({ char }) {
  return (
    <span className="relative inline-flex flex-col overflow-hidden h-[1.15em] align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={char}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block leading-none"
        >
          {char}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function AnimatedNumber({ value }) {
  const chars = String(value).split("");
  return (
    <span className="inline-flex items-end tabular-nums">
      {chars.map((char, i) => (
        // Non-numeric chars (commas, $, %) don't roll — only digits do
        /\d/.test(char)
          ? <RollingDigit key={`d-${i}`} char={char} />
          : <span key={`s-${i}`} className="inline-block leading-none">{char}</span>
      ))}
    </span>
  );
}

export default function GlassLiveStatCard({
  title,
  value,
  trendValue,
  isPositive = true,
  icon,
  live = false,
  liveMin = 1,
  liveMax = 7,
  liveIntervalMs = 3500,
  className = "",
}) {
  // Parse prefix/suffix and numeric value from the `value` prop
  const raw = String(value);
  const prefix = raw.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix = raw.match(/[^0-9,]*$/)?.[0] ?? "";
  const parseNum = (s) => parseFloat(String(s).replace(/[^0-9.]/g, "")) || 0;
  const decimals = (raw.split(".")[1] ?? "").length;

  const [liveNum, setLiveNum] = useState(parseNum(value));

  useEffect(() => {
    setLiveNum(parseNum(value));
  }, [value]);

  useEffect(() => {
    if (!live) return;
    const id = setInterval(() => {
      setLiveNum(n => n + liveMin + Math.random() * (liveMax - liveMin));
    }, liveIntervalMs);
    return () => clearInterval(id);
  }, [live, liveMin, liveMax, liveIntervalMs]);

  const formatted = (() => {
    const num = live ? liveNum : parseNum(value);
    const fixed = num.toFixed(decimals);
    // Add commas like 1,234,567
    const [int, dec] = fixed.split(".");
    const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${prefix}${withCommas}${dec ? "." + dec : ""}${suffix}`;
  })();

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] ${className}`}>
      <div className="flex items-center justify-between relative z-10">
        <h3 className="text-sm font-medium text-white/60">{title}</h3>
        {icon && (
          <div className="text-white/80 p-2 rounded-full bg-white/[0.06] border border-white/10">
            {icon}
          </div>
        )}
        {live && (
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white border border-emerald-500/60 bg-emerald-500/60 rounded-full px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        )}
      </div>
      <div className="mt-4 flex items-baseline gap-4 relative z-10">
        <p className="text-3xl font-bold tracking-tight text-white">
          <AnimatedNumber value={formatted} />
        </p>
        {trendValue && (
          <span className={`inline-flex items-center text-sm font-medium ${isPositive ? "text-emerald-400" : "text-rose-400"}`}>
            {isPositive ? "↑" : "↓"} {trendValue}
          </span>
        )}
      </div>
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/[0.06] blur-3xl" />
    </div>
  );
}

