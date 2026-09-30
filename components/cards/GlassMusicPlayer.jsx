"use client";
import { Play, Pause, SkipForward, SkipBack, Shuffle, Repeat, CheckCircle2 } from "lucide-react";

export default function GlassMusicPlayer({
  title = "Fascist",
  artist = "Cerpow",
  albumArt = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=256&auto=format&fit=crop",
  currentTime = "0:30",
  totalTime = "-2:12",
  progress = 25,
  isPlaying = true,
  className = "",
}) {
  return (
    <article
      className={[
        "relative rounded-3xl",
        "border border-white/20",
        "bg-white/10",
        "p-5",
        "shadow-2xl shadow-black/30",
        "backdrop-blur-xl backdrop-saturate-150",
        "w-80",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Top Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl shadow-lg border border-white/10">
          <img src={albumArt} alt={title} className="h-full w-full object-cover" />
        </div>
        <div className="flex-1 overflow-hidden">
          <h3 className="truncate text-lg font-bold text-white tracking-tight">
            {title}
          </h3>
          <p className="truncate text-sm text-white/60 font-medium">
            {artist}
          </p>
        </div>
        <button className="shrink-0 text-blue-400 transition-transform hover:scale-110">
          <CheckCircle2 size={24} className="fill-blue-400 text-black/50" />
        </button>
      </div>

      {/* Progress Section */}
      <div className="mb-6 space-y-2">
        <div className="flex justify-between text-xs font-medium text-white/60">
          <span>{currentTime}</span>
          <span>{totalTime}</span>
        </div>
        <div className="group relative h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-white/10">
          <div
            className="absolute left-0 top-0 h-full bg-white transition-all group-hover:bg-blue-400"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-md opacity-0 transition-opacity group-hover:opacity-100"
            style={{ left: `calc(${progress}% - 6px)` }}
          />
        </div>
      </div>

      {/* Controls Section */}
      <div className="flex items-center justify-between text-white">
        <button className="flex flex-col items-center gap-1 transition-colors hover:text-white text-blue-400">
          <Shuffle size={20} strokeWidth={2.5} />
          <div className="h-1 w-1 rounded-full bg-blue-400" />
        </button>
        <button className="transition-all hover:scale-110 hover:text-white/80 active:scale-95">
          <SkipBack size={24} fill="currentColor" />
        </button>
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all hover:scale-105 active:scale-95">
          {isPlaying ? (
            <Pause size={24} fill="currentColor" strokeWidth={0} />
          ) : (
            <Play size={24} fill="currentColor" className="ml-1" strokeWidth={0} />
          )}
        </button>
        <button className="transition-all hover:scale-110 hover:text-white/80 active:scale-95">
          <SkipForward size={24} fill="currentColor" />
        </button>
        <button className="transition-colors hover:text-white text-white/40">
          <Repeat size={20} strokeWidth={2.5} />
        </button>
      </div>
    </article>
  );
}
