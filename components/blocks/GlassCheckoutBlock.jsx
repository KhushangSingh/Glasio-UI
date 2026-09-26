"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, CreditCard, Apple, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Tag } from "lucide-react";

export default function GlassCheckoutBlock({ initialStep = 1 }) {
  const [step, setStep] = useState(initialStep); // 1 = cart, 2 = payment, 3 = success

  const items = [
    { id: 1, name: "Pro Plan Subscription", desc: "Billed annually", price: "$149.00" },
    { id: 2, name: "Priority Support", desc: "24/7 response time", price: "$29.00" },
  ];

  return (
    <div className="w-full max-w-md mx-auto p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-md backdrop-saturate-150 border border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="p-8 pb-10 relative z-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="cart"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Checkout</h2>
              </div>

              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-center p-4 rounded-2xl bg-white/[0.06] border border-white/10">
                    <div>
                      <h4 className="text-white font-semibold">{item.name}</h4>
                      <p className="text-white/50 text-xs">{item.desc}</p>
                    </div>
                    <div className="text-white font-bold">{item.price}</div>
                  </div>
                ))}
              </div>

              <div className="relative group">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input type="text" placeholder="Promo code" className="w-full bg-white/[0.06] border border-white/10 rounded-xl py-3 pl-10 pr-24 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-500/50 outline-none" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg transition-colors">
                  Apply
                </button>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                <span className="text-white/60">Total</span>
                <span className="text-3xl font-extrabold text-white">$178.00</span>
              </div>

              <button 
                onClick={() => setStep(2)}
                className="w-full mt-4 bg-white hover:bg-gray-200 text-black font-bold py-4 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                Continue to Payment <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <span className="text-xl font-extrabold text-white">$178.00</span>
              </div>

              <button className="w-full bg-white hover:bg-gray-200 text-black font-bold py-3.5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.02]">
                <Apple className="w-5 h-5" fill="black" /> Pay
              </button>

              <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] flex-1 bg-white/10"></div>
                <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">or pay with card</span>
                <div className="h-[1px] flex-1 bg-white/10"></div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-white/60 uppercase tracking-wider mb-2 block">Card Number</label>
                  <div className="relative group">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white/[0.06] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-500/50 outline-none font-mono" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-white/60 uppercase tracking-wider mb-2 block">Expiry</label>
                    <input type="text" placeholder="MM/YY" className="w-full bg-white/[0.06] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-500/50 outline-none text-center" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-white/60 uppercase tracking-wider mb-2 block">CVC</label>
                    <input type="text" placeholder="123" className="w-full bg-white/[0.06] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-500/50 outline-none text-center" />
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setStep(3)}
                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-bold py-4 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                Pay $178.00
              </button>
              <div className="flex justify-center items-center gap-1.5 text-white/40 text-xs font-medium mt-4">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Payments are secure and encrypted.
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center space-y-4 py-8"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mb-4 border-2 border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Payment Successful</h2>
              <p className="text-white/60 max-w-[250px]">Your receipt has been sent to your email address.</p>
              <button 
                onClick={() => setStep(1)}
                className="mt-4 px-8 py-3 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold rounded-2xl transition-all hover:scale-[1.02] shadow-lg"
              >
                Buy another
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
