"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Key, ArrowLeft, Send, CheckCircle2 } from "lucide-react";

export default function GlassAuthBlock({ initialView = "login" }) {
  // view can be "login", "register", "forgot", "sso", "reset_sent"
  const [view, setView] = useState(initialView);

  const handleToggleLogin = (e) => {
    e.preventDefault();
    setView(view === "login" ? "register" : "login");
  };

  const getTitle = () => {
    switch (view) {
      case "login": return "Welcome Back";
      case "register": return "Create Account";
      case "forgot": return "Reset Password";
      case "reset_sent": return "Check Your Email";
      case "sso": return "Single Sign-On";
      default: return "";
    }
  };

  const getSubtitle = () => {
    switch (view) {
      case "login": return "Sign in to continue to your dashboard";
      case "register": return "Sign up to start your 14-day free trial";
      case "forgot": return "Enter your email to receive a reset link";
      case "reset_sent": return "We've sent password reset instructions to your inbox.";
      case "sso": return "Choose a provider to sign in with";
      default: return "";
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-md backdrop-saturate-150 border border-white/10">
      <div className="p-8 pb-10">
        <div className="text-center mb-8">
          <motion.div
            initial={false}
            animate={{ 
              rotate: view === "login" ? 0 : view === "register" ? 180 : 360,
              scale: view === "reset_sent" ? 1.1 : 1
            }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-white/20 to-white/5 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.15)] border border-white/10"
          >
            {view === "reset_sent" ? (
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            ) : view === "forgot" ? (
              <Key className="w-8 h-8 text-white" />
            ) : (
              <Lock className="w-8 h-8 text-white" />
            )}
          </motion.div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            {getTitle()}
          </h2>
          <p className="text-white/60 mt-2 font-medium">
            {getSubtitle()}
          </p>
        </div>
        
        <div className="relative overflow-hidden min-h-[220px]">
          <AnimatePresence mode="wait" initial={false}>
            {(view === "login" || view === "register") && (
              <motion.div
                key={view}
                initial={{ opacity: 0, x: view === "login" ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: view === "login" ? 50 : -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-4"
              >
                {view === "register" && (
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-white/80 transition-colors" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-white/[0.06] border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all backdrop-blur-md backdrop-saturate-150"
                    />
                  </div>
                )}
                
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-white/[0.06] border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all backdrop-blur-md backdrop-saturate-150"
                  />
                </div>
                
                <div className="relative group">
                  <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-purple-400 transition-colors" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-white/[0.06] border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all backdrop-blur-md backdrop-saturate-150"
                  />
                </div>

                {view === "login" && (
                  <div className="flex justify-between items-center px-1">
                    <label className="flex items-center gap-2 text-sm text-white/60 cursor-pointer">
                      <input type="checkbox" className="rounded border-white/30 bg-white/20 text-[#4AC5C9] focus:ring-0 focus:ring-offset-0 transition-colors" />
                      Remember me
                    </label>
                    <button onClick={() => setView("forgot")} className="text-sm font-medium text-blue-400 hover:text-white transition-colors">
                      Forgot password?
                    </button>
                  </div>
                )}

                <button className="w-full mt-2 bg-white text-black font-bold py-3.5 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center gap-2 group hover:scale-[1.02]">
                  {view === "login" ? "Sign In" : "Create Account"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}

            {view === "forgot" && (
              <motion.div
                key="forgot"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-white/[0.06] border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all backdrop-blur-md backdrop-saturate-150"
                  />
                </div>
                <button onClick={() => setView("reset_sent")} className="w-full bg-white text-black font-bold py-3.5 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02]">
                  Send Reset Link <Send className="w-4 h-4" />
                </button>
                <button onClick={() => setView("login")} className="w-full py-3 text-white/60 hover:text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back to login
                </button>
              </motion.div>
            )}

            {view === "reset_sent" && (
              <motion.div
                key="reset_sent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 flex flex-col items-center"
              >
                <button onClick={() => setView("login")} className="mt-4 px-8 py-3.5 border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all shadow-lg hover:scale-105">
                  Return to Login
                </button>
              </motion.div>
            )}

            {view === "sso" && (
              <motion.div
                key="sso"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <button className="w-full bg-white/[0.06] hover:bg-white/15 border border-white/10 hover:border-white/30 text-white font-semibold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </button>
                <button className="w-full bg-white/[0.06] hover:bg-white/15 border border-white/10 hover:border-white/30 text-white font-semibold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Continue with GitHub
                </button>
                <button onClick={() => setView("login")} className="w-full py-4 text-white/60 hover:text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Use email instead
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Separator / Alternate Actions */}
        {(view === "login" || view === "register") && (
          <div className="mt-6 border-t border-white/10 pt-6 space-y-4">
            <button onClick={() => setView("sso")} className="w-full bg-white/[0.06] hover:bg-white/15 border border-white/10 text-white font-semibold py-3 rounded-2xl transition-all">
              Sign in with SSO
            </button>
            <p className="text-center text-white/50 text-sm font-medium">
              {view === "login" ? "Don't have an account?" : "Already have an account?"}
              <a href="#" onClick={handleToggleLogin} className="text-white hover:underline ml-2 font-bold">
                {view === "login" ? "Sign Up" : "Log In"}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
