"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassSelect from "./GlassSelect";
import { CheckCircle2, ArrowRight, ArrowLeft, Send } from "lucide-react";
export default function GlassFormFlowBlock({
  steps = [
    {
      id: "details",
      title: "Project Details",
      description: "Tell us about what you want to build.",
      content: (
        <div className="space-y-4">
          {" "}
          <div>
            {" "}
            <label className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">
              Project Name
            </label>{" "}
            <input
              type="text"
              placeholder="e.g. Glasio UI Redesign"
              className="w-full bg-white/[0.06] border border-white/10 rounded-2xl py-3 px-4 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all backdrop-blur-md backdrop-saturate-150"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 block">
              Timeline
            </label>{" "}
            <select className="w-full bg-white/[0.06] border border-white/10 rounded-2xl py-3 px-4 text-white/80 outline-none focus:ring-2 focus:ring-white/30 transition-all backdrop-blur-md backdrop-saturate-150 appearance-none">
              {" "}
              <option>1-3 months</option> <option>3-6 months</option>{" "}
              <option>6+ months</option>{" "}
            </select>{" "}
          </div>{" "}
        </div>
      ),
    },
    {
      id: "review",
      title: "Review & Confirm",
      description: "Double check your details before submitting.",
      content: (
        <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4 space-y-3 backdrop-blur-md backdrop-saturate-150">
          {" "}
          <div className="flex justify-between border-b border-white/10 pb-3">
            {" "}
            <span className="text-white/50 text-sm">Project Name</span>{" "}
            <span className="text-white font-medium text-sm">
              Glasio UI Redesign
            </span>{" "}
          </div>{" "}
          <div className="flex justify-between">
            {" "}
            <span className="text-white/50 text-sm">Timeline</span>{" "}
            <span className="text-white font-medium text-sm">
              1-3 months
            </span>{" "}
          </div>{" "}
        </div>
      ),
    },
  ],
  successTitle = "Submitted!",
  successMessage = "We've received your request and will be in touch shortly.",
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleNext = () =>
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  const handleBack = () => setStepIndex((i) => Math.max(i - 1, 0));
  const handleSubmit = () => {
    setIsSubmitting(true);
    /* Simulate API call */ setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };
  const variants = {
    initial: (direction) => ({ opacity: 0, x: direction > 0 ? 50 : -50 }),
    animate: { opacity: 1, x: 0 },
    exit: (direction) => ({ opacity: 0, x: direction > 0 ? -50 : 50 }),
  };
  return (
    <div className="w-full max-w-lg mx-auto p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-md backdrop-saturate-150 border border-white/10 overflow-hidden">
      {" "}
      <div className="p-8 pb-10">
        {" "}
        <div className="flex items-center justify-between mb-8 relative z-10">
          {" "}
          <div className="flex gap-2">
            {" "}
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-12 rounded-full transition-all duration-500 ${stepIndex >= idx ? "bg-purple-500 shadow-[0_0_10px_rgba(255,255,255,0.2)]" : "bg-white/[0.06]"}`}
              />
            ))}{" "}
          </div>{" "}
          <span className="text-xs font-bold uppercase tracking-widest text-white/40">
            {" "}
            {isSuccess
              ? "Done"
              : `Step ${stepIndex + 1} of ${steps.length}`}{" "}
          </span>{" "}
        </div>{" "}
        <div className="relative min-h-[300px]">
          {" "}
          <AnimatePresence mode="wait" custom={stepIndex}>
            {" "}
            {!isSuccess && (
              <motion.div
                key={stepIndex}
                custom={1}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {" "}
                <div>
                  {" "}
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {steps[stepIndex].title}
                  </h2>{" "}
                  <p className="text-white/60 text-sm">
                    {steps[stepIndex].description}
                  </p>{" "}
                </div>{" "}
                {steps[stepIndex].content}{" "}
                {stepIndex < steps.length - 1 ? (
                  <div className="flex gap-3 pt-4">
                    {" "}
                    {stepIndex > 0 && (
                      <button
                        onClick={handleBack}
                        className="w-1/3 bg-white/[0.06] hover:bg-white/15 border border-white/10 hover:border-white/20 text-white font-medium py-3.5 rounded-2xl transition-all flex items-center justify-center"
                      >
                        {" "}
                        <ArrowLeft className="w-4 h-4" />{" "}
                      </button>
                    )}{" "}
                    <button
                      onClick={handleNext}
                      className="flex-1 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold py-3.5 rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all flex items-center justify-center gap-2 group"
                    >
                      {" "}
                      Continue{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />{" "}
                    </button>{" "}
                  </div>
                ) : (
                  <div className="flex gap-3 pt-4">
                    {" "}
                    <button
                      onClick={handleBack}
                      disabled={isSubmitting}
                      className="w-1/3 bg-white/[0.06] hover:bg-white/15 border border-white/10 hover:border-white/20 text-white font-medium py-3.5 rounded-2xl transition-all flex items-center justify-center disabled:opacity-50"
                    >
                      {" "}
                      <ArrowLeft className="w-4 h-4" />{" "}
                    </button>{" "}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-2/3 bg-gradient-to-r from-white/30 to-white/10 hover:from-white/40 hover:to-white/20 border border-white/30 text-white font-bold py-3.5 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {" "}
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/10 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit <Send className="w-4 h-4" />
                        </>
                      )}{" "}
                    </button>{" "}
                  </div>
                )}{" "}
              </motion.div>
            )}{" "}
            {/* SUCCESS STATE */}{" "}
            {isSuccess && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="flex flex-col items-center justify-center text-center space-y-4 py-8"
              >
                {" "}
                <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mb-4 border border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                  {" "}
                  <CheckCircle2 className="w-10 h-10 text-white" />{" "}
                </div>{" "}
                <h2 className="text-3xl font-bold text-white">
                  {successTitle}
                </h2>{" "}
                <p className="text-white/60">{successMessage}</p>{" "}
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setStepIndex(0);
                  }}
                  className="mt-6 px-6 py-2.5 bg-white/15 hover:bg-white/25 border border-white/20 rounded-xl text-sm font-bold text-white shadow-lg transition-all"
                >
                  Start over
                </button>{" "}
              </motion.div>
            )}{" "}
          </AnimatePresence>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
