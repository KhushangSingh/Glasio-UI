"use client";
import React from "react";
import { Send } from "lucide-react";

export default function GlassUserCard({ className = "" }) {
  return (
    <div
      className={[
        "relative rounded-[2.5rem]",
        "border border-white/20",
        "bg-white/10",
        "p-8",
        "shadow-2xl shadow-black/20",
        "backdrop-blur-xl backdrop-saturate-150",
        "w-80",
        "flex flex-col items-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Avatar */}
      <div className="relative mb-4 h-20 w-20 rounded-full border-4 border-white/20 p-1 shadow-lg backdrop-blur-sm">
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80"
          alt="Kasun Dilanka"
          className="h-full w-full rounded-full object-cover"
        />
      </div>

      {/* Info */}
      <h2 className="mb-2 text-xl font-bold text-white tracking-wide">Kasun Dilanka</h2>
      <p className="mb-8 text-center text-sm font-medium leading-relaxed text-white/80">
        “Designer who creates delightful experiences”
      </p>

      {/* Stats */}
      <div className="mb-4 flex w-full justify-between gap-2">
        <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-4 shadow-inner backdrop-blur-md">
          <span className="text-xl font-bold text-white">144</span>
          <span className="text-[10px] uppercase tracking-wider text-white/60">Projects</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-4 shadow-inner backdrop-blur-md">
          <span className="text-xl font-bold text-white">604</span>
          <span className="text-[10px] uppercase tracking-wider text-white/60">Likes</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-4 shadow-inner backdrop-blur-md">
          <span className="text-xl font-bold text-white">44</span>
          <span className="text-[10px] uppercase tracking-wider text-white/60">Comments</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="mb-8 flex w-full gap-2">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white shadow-inner backdrop-blur-md transition-colors hover:bg-white/10">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white shadow-inner backdrop-blur-md transition-colors hover:bg-white/10">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
          </svg>
          Behance
        </button>
      </div>

      {/* Action Button */}
      <button className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 text-sm font-bold text-[#1F2937] shadow-[0_8px_30px_rgba(255,255,255,0.3)] transition-transform hover:scale-105 active:scale-95">
        <Send size={18} className="fill-current" />
        Contact me
      </button>
    </div>
  );
}
