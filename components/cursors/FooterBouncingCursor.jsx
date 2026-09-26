import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FooterBouncingCursor() {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    // Sync with Tailwind's 1s animate-bounce loop
    const interval = setInterval(() => {
      const id = Date.now();
      setSparks([{ id }]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute -bottom-3 -right-4 pointer-events-none transition-all duration-300 group-hover:opacity-0 group-hover:scale-50">
      <div className="relative animate-bounce">
        <svg className="w-5 h-5 text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)] relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4l5.36 17.5c.34 1.12 1.94 1.15 2.34.05l2.4-6.6 6.6-2.4c1.1-.4 1.07-2-.05-2.34L4 4z" />
        </svg>
        
        {/* Sparks burst from the tip of the arrow (top-left) */}
        <div className="absolute top-[16%] left-[16%]">
          <AnimatePresence mode="popLayout">
            {sparks.map((spark) => (
              <div key={spark.id} className="absolute">
                {[...Array(6)].map((_, i) => {
                  const angle = (i * Math.PI * 2) / 6;
                  const distance = 12 + Math.random() * 8;
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                      animate={{
                        scale: 0,
                        opacity: 0,
                        x: Math.cos(angle) * distance,
                        y: Math.sin(angle) * distance,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute h-1 w-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] rounded-full"
                      style={{
                        transformOrigin: "center",
                        rotate: `${(angle * 180) / Math.PI}deg`,
                        marginTop: "-2px",
                        marginLeft: "-4px"
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
