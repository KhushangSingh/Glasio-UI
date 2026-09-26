"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassTabs({ tabs = [], className = "" }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="inline-flex space-x-1 rounded-2xl border border-white/10 bg-white/[0.06] p-1 backdrop-blur-md backdrop-saturate-150 w-max relative shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        {/* Sliding indicator */}
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className="relative rounded-xl px-4 py-2 text-sm font-semibold transition-colors duration-200 z-10"
            style={{ color: activeTab === i ? "white" : "rgba(255,255,255,0.55)" }}
          >
            {activeTab === i && (
              <motion.div
                layoutId="active-tab-pill"
                className="absolute inset-0 rounded-xl bg-white/25 shadow-lg shadow-black/20 ring-1 ring-white/20"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md backdrop-saturate-150"
        >
          {tabs[activeTab]?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
