"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassSelect({
  label,
  id,
  options = [],
  value,
  onChange,
  className = "",
  placeholder = "Select an option",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(value || (options.length > 0 ? options[0].value : ""));
  const dropdownRef = useRef(null);

  const currentValue = value !== undefined ? value : internalValue;
  const selectedOption = options.find((opt) => opt.value === currentValue);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optValue) => {
    if (onChange) {
      onChange(optValue);
    } else {
      setInternalValue(optValue);
    }
    setIsOpen(false);
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`} ref={dropdownRef}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-white/80 ml-1">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          id={id}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm text-white shadow-inner backdrop-blur-md backdrop-saturate-150 transition-all duration-300 focus:border-white/30 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          <span className={selectedOption ? "text-white" : "text-white/50"}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown className={`w-4 h-4 text-white/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 min-w-full whitespace-nowrap mt-2 rounded-xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl shadow-black/20 backdrop-blur-md backdrop-saturate-150"
            >
              <ul className="max-h-60 overflow-y-auto overflow-x-hidden space-y-1">
                {options.map((opt, i) => (
                  <li
                    key={i}
                    onClick={() => handleSelect(opt.value)}
                    className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-all ${
                      currentValue === opt.value
                        ? "bg-white/15 text-white shadow-inner font-medium"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {opt.label}
                    {currentValue === opt.value && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
