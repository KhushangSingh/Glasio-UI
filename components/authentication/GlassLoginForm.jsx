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
          Glasio UI
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
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
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
          By logging in, you agree to our <a href="#" className="underline hover:text-white">Terms of Service</a> and <a href="#" className="underline hover:text-white">Privacy Policy.</a>
        </p>
        <button className="flex h-12 w-20 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs font-medium text-white/70">
          Design with clarity and purpose.
        </p>
      </div>
    </div>
  );
}
