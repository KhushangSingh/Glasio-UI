"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassCursorText({ isPreview = false }) {
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
      className={isPreview ? "relative w-full h-64 bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center group" : "pointer-events-none fixed inset-0 z-[99999] overflow-hidden"}
    >
      {isPreview && (
        <div className="flex flex-col items-center gap-4 z-10 pointer-events-none">
          <p className="text-white/50 text-sm">Expandable Text Cursor</p>
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors cursor-none pointer-events-auto">
            Hover to Read
          </button>
        </div>
      )}

      {isActive && (
        <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden mix-blend-difference">
          <motion.div
            className="absolute top-0 left-0 bg-white rounded-full flex items-center justify-center overflow-hidden"
            animate={{
              x: isHovering ? mousePos.x - 32 : mousePos.x - 6,
              y: isHovering ? mousePos.y - 32 : mousePos.y - 6,
              width: isHovering ? 64 : 12,
              height: isHovering ? 64 : 12,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
          >
            <AnimatePresence>
              {isHovering && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="text-black text-xs font-bold tracking-widest pointer-events-none"
                >
                  VIEW
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </div>
  );
}
