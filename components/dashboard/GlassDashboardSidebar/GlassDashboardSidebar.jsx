"use client";
import React, { useState } from "react";
import { LayoutDashboard, Users, Settings, PieChart, Folder, ChevronLeft, ChevronRight, LogOut } from "lucide-react";

export default function GlassDashboardSidebar({ className = "" }) {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: PieChart, label: "Analytics" },
    { icon: Users, label: "Team" },
    { icon: Folder, label: "Projects" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div
      className={[
        "relative flex flex-col h-full",
        "border-r border-white/20",
        "bg-white/10",
        "shadow-2xl shadow-black/20",
        "backdrop-blur-2xl backdrop-saturate-150",
        "transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64",
        className,
      ].filter(Boolean).join(" ")}
    >
      {/* Header */}
      <div className="flex h-20 items-center justify-between px-6 border-b border-white/10">
        {!collapsed && (
          <span className="font-bold text-xl tracking-tighter text-white">
            Glasio<span className="text-white/50">UI</span>
          </span>
        )}
        {collapsed && (
          <div className="mx-auto w-8 h-8 rounded bg-white/20 flex items-center justify-center font-bold text-white">
            G
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-24 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-black text-white hover:bg-white/10 hover:border-white/40 transition-colors"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              className={[
                "flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all",
                item.active 
                  ? "bg-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              ].join(" ")}
            >
              <Icon size={20} className={item.active ? "opacity-100" : "opacity-70"} />
              {!collapsed && <span className="font-medium text-sm">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Footer Profile */}
      <div className="p-4 border-t border-white/10">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-white/60 hover:bg-white/10 hover:text-white transition-all">
          <LogOut size={20} />
          {!collapsed && <span className="font-medium text-sm">Log out</span>}
        </button>
      </div>
    </div>
  );
}
