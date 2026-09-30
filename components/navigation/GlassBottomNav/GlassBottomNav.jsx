"use client";
import React, { useState } from "react";
import { Home, Search, PlusSquare, Bell, User } from "lucide-react";

export default function GlassBottomNav({ className = "" }) {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "search", icon: Search, label: "Search" },
    { id: "create", icon: PlusSquare, label: "Create" },
    { id: "activity", icon: Bell, label: "Activity" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <div
      className={[
        "fixed bottom-6 left-1/2 -translate-x-1/2",
        "flex items-center gap-2",
        "rounded-full",
        "border border-white/20",
        "bg-white/10",
        "p-2",
        "shadow-2xl shadow-black/20",
        "backdrop-blur-2xl backdrop-saturate-150",
        "z-50",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300
              ${isActive ? "text-black bg-white shadow-lg scale-105" : "text-white/60 hover:text-white hover:bg-white/5"}
            `}
            aria-label={item.label}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            {isActive && (
              <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-white opacity-0 transition-opacity" />
            )}
          </button>
        );
      })}
    </div>
  );
}
