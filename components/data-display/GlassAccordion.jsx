"use client";
import { useState } from "react";
export default function GlassAccordion({ items = [], className = "" }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {" "}
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md backdrop-saturate-150 transition-all duration-300 shadow-2xl shadow-black/20"
          >
            {" "}
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`flex w-full items-center justify-between px-5 transition-all duration-300 ease-in-out text-left focus:outline-none hover:bg-white/10 ${isOpen ? "py-3" : "py-5"}`}
            >
              {" "}
              <span className={`font-medium transition-all duration-300 ${isOpen ? "text-white/60 text-xs uppercase tracking-wider" : "text-white text-base"}`}>
                {item.title}
              </span>{" "}
              <svg
                className={`h-5 w-5 text-white/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />{" "}
              </svg>{" "}
            </button>{" "}
            <div
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              {" "}
              <div className="overflow-hidden">
                {" "}
                <div className="px-5 pb-5 pt-1 text-sm text-white/90 leading-relaxed">
                  {" "}
                  {item.content}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        );
      })}{" "}
    </div>
  );
}
