"use client";
import React, { useState } from "react";
import { Search, Bell, Menu, User } from "lucide-react";
import GlassButton from "./GlassButton";
import GlassAvatar from "./GlassAvatar";

export default function GlassNavbar({
  logoText = "Glasio UI",
  links = [],
  className = "",
}) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav
      className={`relative w-full max-w-5xl mx-auto rounded-3xl border border-white/20 bg-white/[0.08] px-4 py-2 md:px-5 md:py-3 shadow-2xl backdrop-blur-lg backdrop-saturate-150 ${className}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white/30 to-white/5 border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-300">
            <div className="h-4 w-4 rotate-45 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white drop-shadow-md whitespace-nowrap shrink-0">
            {logoText}
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {links.map((link, i) => {
            const label = typeof link === "string" ? link : link.label;
            const href = typeof link === "string" ? "#" : link.href;
            return (
              <a
                key={i}
                href={href}
                onClick={(e) => { if (href === "#") e.preventDefault(); }}
                className="text-sm font-semibold text-white/70 transition-all hover:text-white relative group"
              >
                {label}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-white/0 via-white/80 to-white/0 transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
        </div>

        {/* Right side Actions */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5">
          <button className="text-white/60 hover:text-white hover:scale-110 transition-all focus:outline-none">
            <Search className="h-5 w-5 drop-shadow-md" />
          </button>

          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-white/60 hover:text-white hover:scale-110 transition-all focus:outline-none relative"
            >
              <Bell className="h-5 w-5 drop-shadow-md" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
              </span>
            </button>
            {showNotifications && (
              <div className="absolute top-12 right-0 w-64 p-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50 flex flex-col gap-3">
                <p className="text-sm font-bold text-white/90">Notifications</p>
                <div className="text-xs text-white/60 bg-white/5 rounded-lg p-3 border border-white/5">
                  You have a new message from the team!
                </div>
              </div>
            )}
          </div>

          <div className="h-6 w-[1px] bg-white/20" />

          <div className="flex items-center gap-2 lg:gap-4">
            <GlassAvatar
              fallback={<User className="h-5 w-5 text-white/80" />}
              size="sm"
              className="cursor-pointer hover:ring-2 ring-white/50 transition-all shrink-0"
            />
            <GlassButton className="!py-1.5 !px-3 lg:!py-2 lg:!px-5 text-xs lg:text-sm">Dashboard</GlassButton>
          </div>
        </div>

        {/* Mobile menu */}
        <button className="md:hidden text-white focus:outline-none">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}
