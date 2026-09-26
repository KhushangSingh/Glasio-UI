"use client";
import React from "react";

export default function GlassStatCard({
  title,
  value,
  trendValue,
  isPositive = true,
  icon,
  className = "",
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] ${className}`}>
      <div className="flex items-center justify-between relative z-10">
        <h3 className="text-sm font-medium text-white/60">{title}</h3>
        {icon && (
          <div className="text-white/80 p-2 rounded-full bg-white/[0.06] border border-white/10">
            {icon}
          </div>
        )}
      </div>
      <div className="mt-4 flex items-baseline gap-4 relative z-10">
        <p className="text-3xl font-bold tracking-tight text-white">
          {value}
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

