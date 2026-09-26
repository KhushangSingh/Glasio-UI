'use client';
import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function GlassBreadcrumbs({ items = [], className = '' }) {
  return (
    <nav className={`flex items-center space-x-1 sm:space-x-2 bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-2.5 backdrop-blur-md shadow-lg w-max ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center">
            {isLast ? (
              <span className="text-sm font-bold text-white tracking-wide px-2 py-1 rounded-lg bg-white/10 border border-white/10 shadow-inner shadow-white/5">
                {item.label}
              </span>
            ) : (
              <a href={item.href || '#'} onClick={(e) => e.preventDefault()} className="text-sm font-medium text-white/50 hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-white/5">
                {item.label}
              </a>
            )}
            {!isLast && <ChevronRight className="w-4 h-4 text-white/20 mx-1" />}
          </div>
        );
      })}
    </nav>
  );
}
