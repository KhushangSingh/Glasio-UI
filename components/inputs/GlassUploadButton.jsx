"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

export default function GlassUploadButton({ className = "" }) {
  return (
    <div
      className={[
        "flex items-center gap-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white shadow-[inset_0_4px_4px_rgba(255,255,255,0.4),inset_0_-4px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.2)] backdrop-blur-md transition-transform hover:scale-105 active:scale-95">
        <ArrowUp size={24} strokeWidth={2} />
      </button>

      <button className="flex h-16 items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 text-xl font-medium text-white shadow-[inset_0_4px_4px_rgba(255,255,255,0.4),inset_0_-4px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.2)] backdrop-blur-md transition-transform hover:scale-105 active:scale-95">
        Upload
      </button>
    </div>
  );
}
