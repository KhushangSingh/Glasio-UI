'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlassAutocomplete({ label, placeholder, options = [], value, onChange, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = query === '' 
    ? options 
    : options.filter((option) => option.label.toLowerCase().includes(query.toLowerCase()));

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`} ref={wrapperRef}>
      {label && <label className="text-sm font-semibold text-white/70 ml-1">{label}</label>}
      
      <div className="relative">
        <div 
          className="relative w-full bg-white/[0.1] backdrop-blur-md backdrop-saturate-150 border border-white/10 rounded-2xl flex items-center overflow-hidden transition-all focus-within:ring-2 focus-within:ring-[#4AC5C9]/50 focus-within:border-[#4AC5C9]/50 shadow-inner shadow-white/5 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Search className="w-5 h-5 text-white/40 ml-4 shrink-0" />
          <input
            type="text"
            className="w-full bg-transparent px-3 py-3.5 text-white placeholder-white/30 outline-none font-medium"
            placeholder={selectedOption ? selectedOption.label : placeholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />
          <button className="pr-4 shrink-0" onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}>
            <ChevronDown className={`w-4 h-4 text-white/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute z-50 w-full mt-2 bg-white/[0.05] backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10"
            >
              {filteredOptions.length === 0 ? (
                <div className="px-4 py-3 text-sm text-white/50 text-center">No options found.</div>
              ) : (
                <ul className="py-2">
                  {filteredOptions.map((option) => (
                    <li
                      key={option.value}
                      className={`px-4 py-2.5 mx-2 rounded-xl text-sm font-medium cursor-pointer transition-colors flex items-center justify-between ${
                        value === option.value ? 'bg-[#4AC5C9]/20 text-[#4AC5C9]' : 'text-white/80 hover:bg-white/10'
                      }`}
                      onClick={() => {
                        onChange(option.value);
                        setQuery('');
                        setIsOpen(false);
                      }}
                    >
                      {option.label}
                      {value === option.value && <Check className="w-4 h-4" />}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
