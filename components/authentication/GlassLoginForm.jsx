"use client";
import React from "react";
import { AtSign, Key, ArrowRight } from "lucide-react";

export default function GlassLoginForm({ className = "" }) {
  return (
    <div
      className={[
        "relative rounded-[2rem]",
        "border border-white/20",
        "bg-white/10",
        "p-8",
        "shadow-2xl shadow-black/20",
        "backdrop-blur-2xl backdrop-saturate-150",
        "w-96",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex justify-between items-center mb-10">
        <span className="text-white/60 font-medium tracking-wide">
          Cannabis Lab
        </span>
        <a href="#" className="text-white font-semibold hover:text-white/80 transition-colors">
          Sign up
        </a>
      </div>

      <div className="flex justify-between items-end mb-8">
        <h2 className="text-4xl font-light text-white tracking-tight">
          Log in
        </h2>
        <button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-white/10">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </button>
      </div>

      <form className="space-y-4 mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/50">
            <AtSign size={18} />
          </div>
          <input
            type="email"
            placeholder="e-mail address"
            className="w-full rounded-full border border-white/10 bg-white/[0.08] py-4 pl-12 pr-4 text-sm text-white placeholder-white/50 shadow-inner outline-none transition-all focus:bg-white/[0.15] focus:ring-2 focus:ring-white/20"
          />
        </div>
        
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/50">
            <Key size={18} />
          </div>
          <input
            type="password"
            placeholder="password"
            className="w-full rounded-full border border-white/10 bg-white/[0.08] py-4 pl-12 pr-24 text-sm text-white placeholder-white/50 shadow-inner outline-none transition-all focus:bg-white/[0.15] focus:ring-2 focus:ring-white/20"
          />
          <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-transform hover:scale-105 active:scale-95">
            I forgot
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between">
        <p className="text-[10px] leading-tight text-white/50 max-w-[180px]">
          For use by adults only (18 years of age and older). Keep out of reach of children and pets. In case of accidental ingestion contact our <a href="#" className="underline hover:text-white">hotline.</a>
        </p>
        <button className="flex h-12 w-20 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs font-medium text-white/70">
          Please consume responsibly!
        </p>
      </div>
    </div>
  );
}
