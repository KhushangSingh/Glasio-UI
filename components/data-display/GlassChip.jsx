'use client';
import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GlassChip({ label, icon, onDelete, onClick, className = '' }) {
  const InteractiveTag = onClick ? motion.button : motion.div;
  
  return (
    <InteractiveTag
      whileHover={onClick ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.05] border border-white/10 rounded-full backdrop-blur-md shadow-sm text-sm font-medium text-white/80 transition-colors ${onClick ? 'cursor-pointer hover:bg-white/10 hover:border-white/20 hover:text-white' : ''} ${className}`}
    >
      {icon && <span className="text-white/60">{icon}</span>}
      {label}
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="ml-1 w-4 h-4 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors border border-white/5"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </InteractiveTag>
  );
}
