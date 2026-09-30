"use client";
import React from "react";
import { Search, Bell, Menu } from "lucide-react";

export default function GlassDashboardNavbar({ className = "", onMenuClick }) {
  return (
    <div
      className={[
        "relative flex items-center justify-between px-6 py-4",
        "border-b border-white/20",
        "bg-white/10",
        "shadow-lg shadow-black/10",
        "backdrop-blur-2xl backdrop-saturate-150",
        className,
      ].filter(Boolean).join(" ")}
    >
      <div className="flex items-center gap-4 flex-1">
        {onMenuClick && (
          <button 
            onClick={onMenuClick}
            className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 md:hidden"
          >
            <Menu size={20} />
          </button>
        )}
        
        {/* Search Bar */}
        <div className="relative max-w-md w-full hidden sm:block">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/50">
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full rounded-xl border border-white/10 bg-white/[0.05] py-2 pl-10 pr-4 text-sm text-white placeholder-white/50 shadow-inner outline-none transition-all focus:bg-white/[0.1] focus:ring-2 focus:ring-white/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
        </button>
        
        {/* User Profile */}
        <button className="flex items-center gap-3 pl-2 border-l border-white/10">
          <div className="text-right hidden md:block">
            <div className="text-sm font-medium text-white leading-tight">Alex Rivera</div>
            <div className="text-xs text-white/50">Admin</div>
          </div>
          <div className="h-9 w-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center overflow-hidden">
            <span className="text-sm font-bold text-white">AR</span>
          </div>
        </button>
      </div>
    </div>
  );
}
