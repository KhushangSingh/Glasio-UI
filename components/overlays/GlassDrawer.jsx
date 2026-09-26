'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function GlassDrawer({ isOpen, onClose, title, children, side = 'right', isPreview = false }) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen && !isPreview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, isPreview]);

  const slideVariants = {
    hidden: { 
      x: side === 'right' ? '100%' : side === 'left' ? '-100%' : 0, 
      y: side === 'top' ? '-100%' : side === 'bottom' ? '100%' : 0,
      opacity: 0 
    },
    visible: { x: 0, y: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } },
    exit: { 
      x: side === 'right' ? '100%' : side === 'left' ? '-100%' : 0,
      y: side === 'top' ? '-100%' : side === 'bottom' ? '100%' : 0,
      opacity: 0, transition: { ease: 'anticipate', duration: 0.3 } 
    }
  };

  const positioning = {
    right: 'top-0 bottom-0 right-0 w-[90%] max-w-sm border-l',
    left: 'top-0 bottom-0 left-0 w-[90%] max-w-sm border-r',
    top: 'top-0 left-0 right-0 h-[60%] max-h-96 border-b',
    bottom: 'bottom-0 left-0 right-0 h-[60%] max-h-96 border-t',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`${isPreview ? 'absolute' : 'fixed'} inset-0 z-50 bg-black/40 backdrop-blur-sm`}
          />
          
          {/* Drawer Panel */}
          <motion.div
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`${isPreview ? 'absolute' : 'fixed'} z-50 ${positioning[side]} bg-white/[0.05] backdrop-blur-2xl border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
