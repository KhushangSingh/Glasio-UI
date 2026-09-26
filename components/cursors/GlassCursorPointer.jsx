"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export default function GlassCursorPointer({ isPreview = false }) {
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
          <p className="text-white/50 text-sm">Pointer Cursor</p>
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors cursor-none pointer-events-auto">
            Morph Me
          </button>
        </div>
      )}

      {isActive && (
        <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden text-[#4AC5C9]">
          <motion.div
            className="absolute top-0 left-0 flex items-center justify-center drop-shadow-[0_0_10px_rgba(74,197,201,0.5)]"
            animate={{
              x: mousePos.x - 10,
              y: mousePos.y - 10,
              scale: isHovering ? 1.2 : 1,
              rotate: isHovering ? -15 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <MousePointer2 className={`w-7 h-7 ${isHovering ? "fill-[#4AC5C9] text-[#4AC5C9]" : "fill-transparent text-[#4AC5C9]"}`} />
          </motion.div>
        </div>
      )}
    </div>
  );
}
