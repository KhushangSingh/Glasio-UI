"use client";
import React from "react";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

export default function GlassRecentActivity({ className = "" }) {
  const activities = [
    { id: 1, user: "Sarah Jenkins", action: "completed a purchase", time: "2 mins ago", status: "success" },
    { id: 2, user: "Mike Ross", action: "refunded order #4092", time: "1 hour ago", status: "failed" },
    { id: 3, user: "System", action: "database backup completed", time: "3 hours ago", status: "success" },
    { id: 4, user: "Anna Smith", action: "is reviewing order #4095", time: "5 hours ago", status: "pending" },
  ];

  return (
    <div
      className={[
        "relative rounded-2xl p-6",
        "border border-white/20",
        "bg-white/10",
        "shadow-xl shadow-black/10",
        "backdrop-blur-xl backdrop-saturate-150",
        className,
      ].filter(Boolean).join(" ")}
    >
      <h3 className="mb-6 text-lg font-semibold text-white tracking-tight">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((item) => (
          <div key={item.id} className="flex items-start gap-4">
            <div className="mt-1">
              {item.status === "success" && <CheckCircle2 size={16} className="text-white" />}
              {item.status === "failed" && <XCircle size={16} className="text-white/50" />}
              {item.status === "pending" && <Clock size={16} className="text-white/70" />}
            </div>
            <div>
              <p className="text-sm text-white/90">
                <span className="font-semibold text-white">{item.user}</span> {item.action}
              </p>
              <p className="text-xs text-white/50 mt-0.5">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-2 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20">
        View All Activity
      </button>
    </div>
  );
}
