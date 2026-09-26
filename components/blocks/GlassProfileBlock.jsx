"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Trash2, Shield, User, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";

export default function GlassProfileBlock({ defaultTab = "general" }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  // Interactive states
  const [isSaved, setIsSaved] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  // Handle Save
  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  // Define tabs internally so they can use state
  const tabs = [
    {
      id: "general",
      icon: <User className="w-4 h-4" />,
      label: "General",
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Profile Picture</h2>
            <p className="text-white/70 text-sm mt-1">Upload a new avatar. Max size 2MB.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-white/20 to-white/5 p-1">
                <div className="w-full h-full rounded-full border-2 border-transparent bg-white/10 flex items-center justify-center">
                  <User className="w-10 h-10 text-white/80" />
                </div>
              </div>
              <button className="absolute inset-0 m-1 bg-white/[0.06] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md backdrop-saturate-150">
                <Camera className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white/15 hover:bg-white/25 border border-white/20 text-white text-sm font-semibold rounded-xl shadow-lg transition-all">
                Upload New
              </button>
              <button className="px-4 py-2 border border-rose-500 bg-rose-600 hover:bg-rose-500 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)] text-sm font-bold rounded-xl transition-all">
                Remove
              </button>
            </div>
          </div>
          <div className="space-y-4 pt-4 border-t border-white/10 relative">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">First Name</label>
                <input type="text" defaultValue="Khushang" className="w-full bg-white/[0.06] border border-white/10 rounded-xl py-2.5 px-4 text-white focus:ring-2 focus:ring-white/30 outline-none transition-all" />
              </div>
              <div>
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">Last Name</label>
                <input type="text" defaultValue="Singh" className="w-full bg-white/[0.06] border border-white/10 rounded-xl py-2.5 px-4 text-white focus:ring-2 focus:ring-white/30 outline-none transition-all" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">Email Address</label>
                <input type="email" defaultValue="khushang@example.com" className="w-full bg-white/[0.06] border border-white/10 rounded-xl py-2.5 px-4 text-white focus:ring-2 focus:ring-white/30 outline-none transition-all" />
              </div>
              <div>
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">Phone Number</label>
                <input type="tel" defaultValue="+1 (555) 000-0000" className="w-full bg-white/[0.06] border border-white/10 rounded-xl py-2.5 px-4 text-white focus:ring-2 focus:ring-white/30 outline-none transition-all" />
              </div>
            </div>
            
            {/* Dynamic Socials List */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider block">Social Links</label>
                <button type="button" className="text-xs font-semibold text-[#4AC5C9] hover:text-white transition-colors flex items-center gap-1">+ Add Link</button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2.5 text-sm font-medium text-white/60">GitHub</div>
                  <input type="text" defaultValue="https://github.com/khushang" className="flex-1 bg-white/[0.06] border border-white/10 rounded-xl py-2.5 px-4 text-white focus:ring-2 focus:ring-white/30 outline-none transition-all" />
                  <button type="button" className="p-2.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-xl text-rose-400 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2.5 text-sm font-medium text-white/60">Twitter</div>
                  <input type="text" defaultValue="https://twitter.com/khushang" className="flex-1 bg-white/[0.06] border border-white/10 rounded-xl py-2.5 px-4 text-white focus:ring-2 focus:ring-white/30 outline-none transition-all" />
                  <button type="button" className="p-2.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-xl text-rose-400 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <button onClick={handleSave} className="px-6 py-2.5 bg-gradient-to-r from-white/30 to-white/10 border border-white/30 text-white font-semibold rounded-xl shadow-2xl shadow-black/20 transition-all hover:scale-105">
                Save Changes
              </button>
              <AnimatePresence>
                {isSaved && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-emerald-400 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5" /> Saved successfully
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "security",
      icon: <Shield className="w-4 h-4" />,
      label: "Security",
      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Security Settings</h2>
            <p className="text-white/70 text-sm mt-1">Update your password and 2FA preferences.</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">Current Password</label>
              <input type="password" placeholder="••••••••" className="w-full max-w-sm bg-white/[0.06] border border-white/10 rounded-xl py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all" />
            </div>
            <div>
              <label className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">New Password</label>
              <input type="password" placeholder="••••••••" className="w-full max-w-sm bg-white/[0.06] border border-white/10 rounded-xl py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all" />
            </div>
            <button className="px-6 py-2.5 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold rounded-xl shadow-lg transition-all">
              Update Password
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "danger",
      icon: <Trash2 className="w-4 h-4" />,
      label: "Danger Zone",
      danger: true,
      content: (
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {!isDeleting && !isDeleted ? (
              <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-rose-400">Danger Zone</h2>
                  <p className="text-white/70 text-sm mt-1">Irreversible actions for your account.</p>
                </div>
                <div className="p-6 rounded-2xl border border-rose-500/30 bg-rose-500/10 space-y-4">
                  <h3 className="text-white font-bold">Delete Account</h3>
                  <p className="text-rose-200/70 text-sm">Once you delete your account, there is no going back. Please be certain.</p>
                  <button onClick={() => setIsDeleting(true)} className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 border border-rose-500 text-white shadow-[0_0_20px_rgba(225,29,72,0.5)] font-bold rounded-xl transition-all">
                    Delete Account
                  </button>
                </div>
              </motion.div>
            ) : isDeleting && !isDeleted ? (
              <motion.div key="confirm" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-rose-400 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6" /> Are you absolutely sure?
                  </h2>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">
                    This action cannot be undone. This will permanently delete the <strong>Khushang Singh</strong> account, all associated projects, and remove your data from our servers.
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-rose-200/60 uppercase tracking-wider block">Please type "delete my account" to confirm</label>
                  <input type="text" placeholder="delete my account" className="w-full bg-rose-950/30 border border-rose-500/30 rounded-xl py-2.5 px-4 text-white focus:ring-2 focus:ring-rose-500/50 outline-none transition-all placeholder:text-rose-500/30" />
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={() => setIsDeleting(false)} className="px-6 py-2.5 border border-white/10 hover:bg-white/5 text-white/70 font-semibold rounded-xl transition-all">
                    Cancel
                  </button>
                  <button onClick={() => setIsDeleted(true)} className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white shadow-[0_0_20px_rgba(225,29,72,0.4)] font-bold rounded-xl transition-all">
                    Permanently Delete
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="deleted" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-rose-500/20 flex items-center justify-center mb-2 border border-rose-500/50 shadow-[0_0_30px_rgba(244,63,94,0.3)]">
                  <CheckCircle2 className="w-8 h-8 text-rose-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Account Deleted</h2>
                <p className="text-white/60 text-sm max-w-xs">Your account has been successfully removed. We're sorry to see you go.</p>
                <button onClick={() => {setIsDeleted(false); setIsDeleting(false); setActiveTab("general");}} className="mt-4 text-sm text-blue-400 hover:text-white transition-colors flex items-center gap-1">
                  <ArrowLeft className="w-4 h-4" /> Return home
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-md backdrop-saturate-150 border border-white/10 flex flex-col md:flex-row overflow-hidden min-h-[440px]">
      {/* Sidebar Nav */}
      <div className="w-full md:w-48 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.14] p-6 flex flex-col gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeTab === tab.id
                ? tab.danger
                  ? "bg-rose-500/20 text-rose-400 shadow-inner border border-rose-500/30"
                  : "bg-white/[0.06] text-white shadow-inner border border-white/10"
                : tab.danger
                ? "text-rose-400/90 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent"
                : "text-white/80 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>
      {/* Content Area */}
      <div className="flex-1 p-8 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {tabs.map((tab) => {
            if (activeTab === tab.id) {
              return (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab.content}
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
