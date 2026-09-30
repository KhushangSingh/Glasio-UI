"use client";
import React from "react";

export default function GlassBarChart({ className = "", data = [40, 70, 45, 90, 65, 85, 100, 55, 80, 40, 65, 50] }) {
  const maxValue = Math.max(...data);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return (
    <div
      className={[
        "relative rounded-2xl p-6 flex flex-col h-full",
        "border border-white/20",
        "bg-white/10",
        "shadow-xl shadow-black/10",
        "backdrop-blur-xl backdrop-saturate-150",
        className,
      ].filter(Boolean).join(" ")}
    >
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white tracking-tight">Revenue Overview</h3>
        <select className="bg-white/10 border border-white/20 text-white text-sm rounded-lg px-3 py-1 outline-none appearance-none backdrop-blur-md">
          <option value="2026" className="text-black">2026</option>
          <option value="2025" className="text-black">2025</option>
        </select>
      </div>
      
      <div className="flex-1 flex items-end gap-2 sm:gap-4 mt-auto pt-4 border-b border-white/10 pb-4">
        {data.map((val, idx) => {
          const heightPercent = (val / maxValue) * 100;
          return (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full relative h-40 bg-white/5 rounded-t-sm flex items-end overflow-hidden">
                <div 
                  className="w-full bg-white/40 rounded-t-sm transition-all duration-500 ease-out group-hover:bg-white/60"
                  style={{ height: `${heightPercent}%` }}
                ></div>
              </div>
              <span className="text-[10px] text-white/50 group-hover:text-white/80 transition-colors">
                {months[idx % months.length]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
