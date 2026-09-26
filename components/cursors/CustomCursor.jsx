"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOffScreen, setIsOffScreen] = useState(true);
  const [isHiddenByTarget, setIsHiddenByTarget] = useState(false);

  useEffect(() => {
    // Only show on desktop (fine pointers)
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    setIsVisible(true);

    const moveCursor = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsOffScreen(false);
      
      const target = e.target;
      
      // Hide global cursor if hovering over a specific preview area
      if (target.closest('[data-hide-cursor="true"]')) {
        setIsHiddenByTarget(true);
      } else {
        setIsHiddenByTarget(false);
      }
      
      const isClickable = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsHovering(isClickable);
    };

    const handleMouseLeave = () => {
      setIsOffScreen(true);
    };

    const handleMouseEnter = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsOffScreen(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
          input, textarea { cursor: text !important; }
        }
      `}</style>
      
      <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 pointer-events-none flex items-center justify-center"
          animate={{
            x: mousePos.x - 2, // Slight offset so pointer tip matches exact cursor position
            y: mousePos.y - 2,
            scale: isHovering ? 1.15 : 1,
            rotate: isHovering ? -10 : 0,
            opacity: isOffScreen || isHiddenByTarget ? 0 : 1
          }}
          transition={{ 
            type: "tween", 
            ease: "backOut", 
            // When offscreen, snap instantly (0 duration) so it doesn't fly from old location when returning
            duration: isOffScreen ? 0 : 0.15 
          }}
        >
          <svg className="w-7 h-7 text-[#4AC5C9] drop-shadow-[0_4px_12px_rgba(74,197,201,0.5)]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4l5.36 17.5c.34 1.12 1.94 1.15 2.34.05l2.4-6.6 6.6-2.4c1.1-.4 1.07-2-.05-2.34L4 4z" />
          </svg>
        </motion.div>
      </div>
    </>
  );
}
