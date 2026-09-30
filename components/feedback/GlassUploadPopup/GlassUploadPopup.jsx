"use client";
import React, { useState, useEffect } from "react";
import { UploadCloud, CheckCircle2, X } from "lucide-react";

export default function GlassUploadPopup({ className = "" }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prev) => Math.min(prev + Math.floor(Math.random() * 20) + 10, 100));
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div
      className={[
        "relative rounded-2xl",
        "border border-white/20",
        "bg-white/10",
        "p-4",
        "shadow-2xl shadow-black/20",
        "backdrop-blur-xl backdrop-saturate-150",
        "w-80",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors"
      >
        <X size={16} />
      </button>

      <div className="flex items-center gap-4 mb-4">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${isComplete ? 'bg-emerald-500/20 text-emerald-400' : 'bg-purple-500/20 text-purple-400'}`}>
          {isComplete ? <CheckCircle2 size={20} /> : <UploadCloud size={20} className="animate-pulse" />}
        </div>
        <div className="flex-1 overflow-hidden">
          <h4 className="truncate text-sm font-semibold text-white">
            {isComplete ? "Upload Complete" : "Uploading Document..."}
          </h4>
          <p className="truncate text-xs text-white/60">
            {isComplete ? "q3_financial_report.pdf" : `${progress}% • Syncing to cloud`}
          </p>
        </div>
      </div>

      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={`absolute left-0 top-0 h-full transition-all duration-500 ease-out ${isComplete ? 'bg-emerald-400' : 'bg-purple-400'}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
