"use client";
import React, { useState } from "react";
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  ChevronDown,
  TrendingUp,
  Activity,
  DollarSign,
  Menu,
  X
} from "lucide-react";

export default function GlassDashboardLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { title: "Total Revenue", value: "$45,231", icon: <DollarSign size={20} />, trend: "+20.1%", positive: true },
    { title: "Active Users", value: "2,314", icon: <Users size={20} />, trend: "+12.5%", positive: true },
    { title: "Bounce Rate", value: "42.3%", icon: <Activity size={20} />, trend: "-4.2%", positive: true },
    { title: "Conversion", value: "3.24%", icon: <TrendingUp size={20} />, trend: "+1.2%", positive: true }
  ];

  const sidebarLinks = [
    { label: "Dashboard", icon: <LayoutDashboard size={20} />, active: true },
    { label: "Analytics", icon: <BarChart3 size={20} /> },
    { label: "Audience", icon: <Users size={20} /> },
    { label: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="relative w-full h-[700px] overflow-hidden rounded-3xl border border-white/20 bg-black/40 shadow-2xl backdrop-blur-xl flex text-white font-sans">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      {/* Sidebar (Desktop) */}
      <aside className={\`absolute md:relative z-40 h-full w-64 border-r border-white/10 bg-white/5 backdrop-blur-3xl transition-transform duration-300 ease-in-out \${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}\`}>
        <div className="flex h-20 items-center justify-between px-6 border-b border-white/10">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white">G</span>
            </div>
            Glasio
          </div>
          <button className="md:hidden text-white/50 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {sidebarLinks.map((link) => (
            <button 
              key={link.label}
              className={\`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all \${
                link.active 
                  ? "bg-white/10 text-white shadow-inner border border-white/5" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }\`}
            >
              <span className={link.active ? "text-blue-400" : ""}>{link.icon}</span>
              <span className="font-medium text-sm">{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-white/10 bg-black/20">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 p-[2px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-white/20 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="User" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold">Admin User</span>
              <span className="text-xs text-white/40">Pro Plan</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative z-10 overflow-hidden">
        
        {/* Topbar */}
        <header className="h-20 border-b border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-white/70 hover:text-white" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-2 relative">
              <Search className="absolute left-3 text-white/40" size={18} />
              <input 
                type="text" 
                placeholder="Search analytics..." 
                className="w-64 rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none focus:border-white/20 focus:bg-white/10 transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <span className="text-sm font-medium">Export</span>
              <ChevronDown size={16} className="text-white/50" />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            
            <div>
              <h1 className="text-2xl font-bold tracking-tight mb-1">Dashboard Overview</h1>
              <p className="text-white/50 text-sm">Welcome back! Here's what's happening with your projects today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-transform hover:scale-[1.02] hover:bg-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-white/60">{stat.title}</span>
                    <div className="p-2 rounded-lg bg-white/5 text-white/80">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                  </div>
                  <div className="mt-2 text-xs">
                    <span className={stat.positive ? "text-emerald-400" : "text-red-400"}>
                      {stat.trend}
                    </span>
                    <span className="text-white/40 ml-1">vs last month</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Main Chart Mock */}
              <div className="col-span-1 lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm flex flex-col min-h-[300px]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg">Revenue Overview</h3>
                  <select className="bg-transparent border border-white/20 rounded-md text-xs p-1 outline-none">
                    <option>This Week</option>
                    <option>This Month</option>
                  </select>
                </div>
                
                {/* CSS Mock Chart */}
                <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 mt-auto pt-4 relative">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between border-y border-white/5 pb-8 pointer-events-none">
                    <div className="border-b border-white/5 w-full h-1/4"></div>
                    <div className="border-b border-white/5 w-full h-1/4"></div>
                    <div className="border-b border-white/5 w-full h-1/4"></div>
                  </div>
                  
                  {/* Bars */}
                  {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                    <div key={i} className="relative w-full group flex flex-col items-center justify-end h-full z-10 pb-8">
                      <div 
                        className="w-full bg-gradient-to-t from-blue-500/20 to-purple-500/60 rounded-t-sm transition-all duration-500 ease-out hover:to-purple-400/80 hover:from-blue-400/40"
                        style={{ height: \`\${h}%\` }}
                      ></div>
                      <span className="absolute bottom-0 text-[10px] text-white/40 font-mono mt-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side Panel */}
              <div className="col-span-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-6">Recent Activity</h3>
                <div className="space-y-6">
                  {[
                    { u: "Alice", a: "upgraded to Pro", t: "2h ago" },
                    { u: "Bob", a: "canceled plan", t: "4h ago" },
                    { u: "Charlie", a: "created 3 projects", t: "5h ago" },
                    { u: "Dave", a: "invited a team member", t: "1d ago" }
                  ].map((act, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                        <span className="text-xs font-bold">{act.u[0]}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{act.u} <span className="text-white/50 font-normal">{act.a}</span></span>
                        <span className="text-xs text-white/40">{act.t}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-2 rounded-lg border border-white/10 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-colors">
                  View All Activity
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="md:hidden absolute inset-0 z-30 bg-black/60 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <style dangerouslySetInnerHTML={{__html: \`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      \`}} />
    </div>
  );
}
