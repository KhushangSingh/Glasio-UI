"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function GlassCursorGlow({ isPreview = false }) {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(!isPreview);
  
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPreview && containerRef.current) {
      containerRef.current.style.cursor = "none";
    }

    const targetElement = isPreview ? containerRef.current : window;
    if (!targetElement) return;

    const handleMouseMove = (e) => {
      let x, y;
      if (isPreview) {
        const rect = containerRef.current.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      } else {
        x = e.clientX;
        y = e.clientY;
      }
      
      setMousePos({ x, y });
      setIsActive(true);

      const target = e.target;
      const clickable = target.closest('button') || target.closest('a') || window.getComputedStyle(target).cursor === 'pointer';
      setIsHovering(clickable);
    };

    const handleMouseLeave = () => {
      if (isPreview) setIsActive(false);
    };

    targetElement.addEventListener("mousemove", handleMouseMove);
    if (isPreview) targetElement.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      targetElement.removeEventListener("mousemove", handleMouseMove);
      if (isPreview) targetElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isPreview]);

  return (
    <div 
      ref={containerRef} 
      data-hide-cursor={isPreview ? "true" : "false"}
      className={isPreview ? "relative w-full h-64 bg-[#050505] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center group" : "pointer-events-none fixed inset-0 z-[99999] overflow-hidden"}
    >
      {isPreview && (
        <div className="flex flex-col items-center gap-4 z-10 pointer-events-none">
          <p className="text-white/50 text-sm">Spotlight Glow</p>
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors cursor-none pointer-events-auto">
            Interact
          </button>
        </div>
      )}

      {isActive && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-screen">
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[60px]"
            animate={{
              x: mousePos.x - 128,
              y: mousePos.y - 128,
              scale: isHovering ? 1.5 : 1,
              backgroundColor: isHovering ? "rgba(59, 130, 246, 0.4)" : "rgba(59, 130, 246, 0.2)"
            }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
          />
          <motion.div
            className="absolute top-0 left-0 w-8 h-8 bg-white rounded-full mix-blend-difference"
            animate={{
              x: mousePos.x - 16,
              y: mousePos.y - 16,
              scale: isHovering ? 0 : 0.2,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
          />
        </div>
      )}
    </div>
  );
}
