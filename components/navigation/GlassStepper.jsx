'use client';
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GlassStepper({ steps = [], currentStep = 1 }) {
  return (
    <div className="flex items-center w-full relative pt-2 pb-10">
      {/* Background Track */}
      <div className="absolute left-0 top-7 w-full h-[2px] bg-white/10 rounded-full" />
      
      {/* Active Track (Animated) */}
      <motion.div 
        className="absolute left-0 top-7 h-[2px] bg-[#4AC5C9] rounded-full shadow-[0_0_10px_rgba(74,197,201,0.5)]"
        initial={{ width: '0%' }}
        animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />

      {/* Step Indicators */}
      <div className="flex items-center justify-between w-full relative z-10">
        {steps.map((step, idx) => {
          const stepNum = idx + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;
          
          return (
            <div key={idx} className="flex flex-col items-center gap-4 relative">
              <motion.div 
                initial={false}
                animate={{
                  backgroundColor: isCompleted ? 'rgba(74,197,201,0.6)' : isActive ? 'rgba(74,197,201,0.3)' : 'rgba(255,255,255,0.02)',
                  borderColor: isCompleted ? 'rgba(74,197,201,0.8)' : isActive ? 'rgba(74,197,201,1)' : 'rgba(255,255,255,0.1)',
                  boxShadow: isActive ? '0 0 20px rgba(74,197,201,0.6)' : isCompleted ? '0 0 10px rgba(74,197,201,0.3)' : 'none',
                  scale: isActive ? 1.15 : 1
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-md transition-colors ${isActive ? 'ring-4 ring-[#4AC5C9]/30' : ''}`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 text-white drop-shadow-md" />
                ) : (
                  <span className={`text-sm font-bold ${isActive ? 'text-[#4AC5C9] drop-shadow-[0_0_8px_rgba(74,197,201,0.8)]' : 'text-white/40'}`}>
                    {stepNum}
                  </span>
                )}
              </motion.div>
              <span className={`text-[11px] font-bold uppercase tracking-widest absolute -bottom-6 whitespace-nowrap ${isActive ? 'text-white' : 'text-white/40'}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
