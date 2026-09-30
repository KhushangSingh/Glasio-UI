"use client";
import React from "react";
import { motion } from "framer-motion";

export default function GlassMascotAvatar({ 
  src, 
  alt = "Glass Mascot", 
  size = 120, 
  glowColor = "rgba(168, 85, 247, 0.4)", // Default purple glow
  className = "" 
}) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Background Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ backgroundColor: glowColor }}
      />

      {/* Floating Mascot Image */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10 w-full h-full rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      >
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover scale-110" 
        />
        
        {/* Inner Glass Highlight */}
        <div className="absolute inset-0 rounded-full border border-white/30 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none" />
      </motion.div>
    </div>
  );
}
