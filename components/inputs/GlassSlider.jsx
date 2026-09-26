'use client';
import React, { useState, useRef, useEffect } from 'react';

export default function GlassSlider({ min = 0, max = 100, step = 1, defaultValue = 50, onChange, className = '' }) {
  const [value, setValue] = useState(defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleUpdate = (clientX) => {
    if (trackRef.current) {
      const rect = trackRef.current.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const clampedX = Math.max(0, Math.min(relativeX, rect.width));
      const newPercent = clampedX / rect.width;
      
      let newValue = min + newPercent * (max - min);
      // Snap to step
      newValue = Math.round(newValue / step) * step;
      newValue = Math.max(min, Math.min(newValue, max));
      
      setValue(newValue);
      if (onChange) onChange(newValue);
    }
  };

  const onMouseDown = (e) => {
    setIsDragging(true);
    handleUpdate(e.clientX);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (isDragging) {
        handleUpdate(e.clientX);
      }
    };
    const onMouseUp = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, min, max, step]);

  return (
    <div className={`w-full py-4 flex items-center relative ${className}`}>
      {/* Track Background */}
      <div 
        ref={trackRef}
        onMouseDown={onMouseDown}
        className="w-full h-3 bg-white/[0.05] border border-white/10 rounded-full cursor-pointer relative shadow-inner shadow-white/5 overflow-hidden"
      >
        {/* Active Track */}
        <div 
          className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#4AC5C9]/50 to-[#4AC5C9] rounded-full pointer-events-none"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Thumb */}
      <div 
        className="absolute w-6 h-6 bg-white rounded-full shadow-[0_0_15px_rgba(74,197,201,0.5)] border border-white/20 flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
        style={{ left: `calc(${percentage}% - 12px)` }}
        onMouseDown={onMouseDown}
      >
        <div className="w-2 h-2 rounded-full bg-[#4AC5C9]" />
      </div>
    </div>
  );
}
