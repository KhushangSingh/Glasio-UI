"use client";
import React from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

export default function GlassKpiCard({ 
  title = "Total Revenue", 
  value = "$45,231.89", 
  trend = "+20.1%", 
  trendUp = true,
  icon: Icon = Activity,
  className = "" 
}) {
  return (
    <div
      className={[
        "relative rounded-2xl p-6",
        "border border-white/20",
        "bg-white/10",
        "shadow-xl shadow-black/10",
        "backdrop-blur-xl backdrop-saturate-150",
        className,
      ].filter(Boolean).join(" ")}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-xl bg-white/10 border border-white/20">
          <Icon size={20} className="text-white" />
        </div>
        <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full border ${trendUp ? 'bg-white/20 border-white/30 text-white' : 'bg-white/10 border-white/20 text-white/70'}`}>
          {trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {trend}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-white/60 mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
      </div>
    </div>
  );
}
