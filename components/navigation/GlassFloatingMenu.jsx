"use client";
import React, { useState } from "react";
import { Home, Heart, MessageCircle, Settings } from "lucide-react";

export default function GlassFloatingMenu({ className = "" }) {
  const [active, setActive] = useState("Feed");

  const menuItems = [
    { name: "Feed", icon: <Home size={20} /> },
    { name: "Stats", icon: <Heart size={20} /> },
    { name: "Messages", icon: <MessageCircle size={20} /> },
    { name: "Setting", icon: <Settings size={20} /> },
  ];

  return (
    <nav
      className={[
        "relative rounded-3xl",
        "border border-white/20",
        "bg-white/10",
        "p-4",
        "shadow-2xl shadow-black/20",
        "backdrop-blur-xl backdrop-saturate-150",
        "w-64",
        "flex flex-col gap-2",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {menuItems.map((item) => {
        const isActive = active === item.name;
        return (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 ${
              isActive
                ? "bg-white/20 shadow-inner text-white font-semibold"
                : "text-white/70 hover:bg-white/10 hover:text-white font-medium"
            }`}
          >
            <span className={isActive ? "text-white" : "text-white/70"}>
              {item.icon}
            </span>
            <span>{item.name}</span>
          </button>
        );
      })}

      <div className="my-2 h-px w-full bg-white/10" />

      <button
        onClick={() => setActive("Profile")}
        className={`flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 ${
          active === "Profile"
            ? "bg-white/20 shadow-inner text-white font-semibold"
            : "text-white/70 hover:bg-white/10 hover:text-white font-medium"
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
          alt="Profile"
          className="h-7 w-7 rounded-full object-cover border border-white/30"
        />
        <span>Profile</span>
      </button>
    </nav>
  );
}
