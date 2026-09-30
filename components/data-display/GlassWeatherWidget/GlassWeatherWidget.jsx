"use client";
import React from "react";
import { CloudRain, Wind, Droplets } from "lucide-react";

export default function GlassWeatherWidget({ className = "" }) {
  return (
    <div
      className={[
        "relative rounded-3xl",
        "border border-white/20",
        "bg-white/10",
        "p-6",
        "shadow-2xl shadow-black/20",
        "backdrop-blur-2xl backdrop-saturate-150",
        "w-72",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-white text-lg font-medium tracking-wide">Seattle, WA</h3>
          <p className="text-white/60 text-sm">Light Rain</p>
        </div>
        <CloudRain size={32} className="text-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]" />
      </div>

      <div className="mb-6">
        <h1 className="text-6xl font-light text-white tracking-tighter">
          52°<span className="text-3xl text-white/50 align-top">F</span>
        </h1>
      </div>

      <div className="flex items-center gap-6 text-sm text-white/80">
        <div className="flex items-center gap-2">
          <Wind size={16} className="text-white/50" />
          <span>8 mph</span>
        </div>
        <div className="flex items-center gap-2">
          <Droplets size={16} className="text-white/50" />
          <span>78%</span>
        </div>
      </div>
    </div>
  );
}
