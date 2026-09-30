"use client";
import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Check, Sparkles, User, Briefcase, Palette } from "lucide-react";

export default function GlassOnboardingWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", role: "", theme: "dark" });
  const totalSteps = 3;

  const handleNext = () => setStep((s) => Math.min(totalSteps, s + 1));
  const handlePrev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
      {/* Background ambient glow */}
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />

      <div className="relative z-10">
        {/* Progress Bar & Header */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {step === 1 && "Welcome to Glasio"}
              {step === 2 && "Personalize Workspace"}
              {step === 3 && "You're All Set!"}
            </h2>
            <span className="text-sm font-medium text-white/50">
              Step {step} of {totalSteps}
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ease-out"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Content Area */}
        <div className="min-h-[250px]">
          {/* STEP 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-white/70">Let's start with the basics. How should we address you?</p>
              
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder-white/30 outline-none transition-all focus:border-white/30 focus:bg-white/10 focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
                
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                  <input 
                    type="text" 
                    placeholder="Your Role (e.g. Designer, Developer)"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder-white/30 outline-none transition-all focus:border-white/30 focus:bg-white/10 focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Preferences */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-white/70">Choose your preferred aesthetic style.</p>
              
              <div className="grid grid-cols-2 gap-4">
                {['light', 'dark', 'midnight', 'glassmorphism'].map((themeName) => (
                  <button 
                    key={themeName}
                    onClick={() => setFormData({...formData, theme: themeName})}
                    className={`flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all ${
                      formData.theme === themeName 
                        ? 'border-purple-400/50 bg-white/10 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]' 
                        : 'border-white/10 bg-white/5 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    <Palette size={24} className={formData.theme === themeName ? "text-purple-300" : "text-white/40"} />
                    <span className="capitalize font-medium">{themeName}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Complete */}
          {step === 3 && (
            <div className="flex flex-col items-center justify-center text-center space-y-6 animate-fade-in-up py-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <Check size={40} strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Profile Created!</h3>
                <p className="text-white/60">
                  Welcome aboard, <span className="text-white font-medium">{formData.name || 'User'}</span>. 
                  Your <span className="capitalize text-white font-medium">{formData.theme}</span> workspace is ready.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
          <button 
            onClick={handlePrev}
            disabled={step === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              step === 1 
                ? 'opacity-0 pointer-events-none' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <ChevronLeft size={18} /> Back
          </button>
          
          <button 
            onClick={step === totalSteps ? () => alert('Launching app...') : handleNext}
            className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500/80 to-purple-500/80 border border-white/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:from-blue-400/90 hover:to-purple-400/90 transition-all hover:scale-105 active:scale-95"
          >
            {step === totalSteps ? (
              <>Launch <Sparkles size={18} /></>
            ) : (
              <>Next <ChevronRight size={18} /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
