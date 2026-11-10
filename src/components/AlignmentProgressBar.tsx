import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronDown, ChevronUp, CheckCircle2, RefreshCw } from 'lucide-react';

interface AlignmentStatus {
  isRunning: boolean;
  currentTractate: string;
  currentChapter: number;
  totalChaptersInTractate: number;
  currentMishnah: number;
  totalMishnayotInChapter: number;
  statusText: string;
  chaptersCompleted: number;
  totalChapters: number;
  mishnayotCompleted: number;
  wordsAligned: number;
  percent: number;
  lastUpdated: number;
}

export const AlignmentProgressBar: React.FC = () => {
  const [status, setStatus] = useState<AlignmentStatus | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchStatus = async () => {
      try {
        const res = await fetch(`/data/alignment_status.json?t=${Date.now()}`);
        if (res.ok) {
          const data: AlignmentStatus = await res.json();
          if (isMounted) {
            setStatus(data);
          }
        }
      } catch {
        // Silently ignore if file not yet ready
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 2500);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (!status || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm w-full transition-all duration-300 font-sans">
      <div className="bg-white/95 dark:bg-stone-900/95 sepia-mode:bg-amber-50/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-200/80 dark:border-stone-800 sepia-mode:border-amber-200/80 overflow-hidden text-stone-800 dark:text-stone-100 sepia-mode:text-amber-950">
        
        {/* Compact Pill / Header Bar */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-3.5 py-2.5 flex items-center justify-between gap-3 text-left hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors"
          title="Click to toggle alignment details"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 sepia-mode:bg-amber-100 text-indigo-600 dark:text-indigo-400 shrink-0">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide">
                <span>AI Aligning Shas</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                  {status.percent}%
                </span>
              </div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 sepia-mode:text-amber-800/70 truncate">
                {status.currentTractate} {status.currentChapter}:{status.currentMishnah}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 text-stone-400 dark:text-stone-500">
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </div>
        </button>

        {/* Global Progress Bar Line */}
        <div className="h-1.5 w-full bg-stone-100 dark:bg-stone-800 sepia-mode:bg-amber-100/80 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 transition-all duration-500 rounded-r-full"
            style={{ width: `${Math.max(status.percent, 1.5)}%` }}
          />
        </div>

        {/* Expanded Details Drawer */}
        {isExpanded && (
          <div className="p-3.5 pt-3 space-y-3 border-t border-stone-100 dark:border-stone-800/80 sepia-mode:border-amber-200/50 text-xs">
            
            {/* Live Activity Row */}
            <div className="flex items-start gap-2 bg-stone-50 dark:bg-stone-800/40 sepia-mode:bg-amber-100/40 p-2.5 rounded-xl">
              <RefreshCw className="w-3.5 h-3.5 mt-0.5 text-indigo-500 shrink-0 animate-spin" style={{ animationDuration: '3s' }} />
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-medium leading-tight text-stone-700 dark:text-stone-300 sepia-mode:text-amber-900">
                  {status.statusText}
                </p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded-lg bg-stone-50/80 dark:bg-stone-800/30 sepia-mode:bg-amber-100/30 border border-stone-100 dark:border-stone-800 sepia-mode:border-amber-200/40">
                <span className="text-stone-400 dark:text-stone-500 block text-[10px] uppercase font-semibold">Chapters</span>
                <span className="font-semibold text-stone-700 dark:text-stone-200 sepia-mode:text-amber-950 text-xs">
                  {status.chaptersCompleted} / {status.totalChapters}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-stone-50/80 dark:bg-stone-800/30 sepia-mode:bg-amber-100/30 border border-stone-100 dark:border-stone-800 sepia-mode:border-amber-200/40">
                <span className="text-stone-400 dark:text-stone-500 block text-[10px] uppercase font-semibold">Words Aligned</span>
                <span className="font-semibold text-stone-700 dark:text-stone-200 sepia-mode:text-amber-950 text-xs">
                  {status.wordsAligned.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Current Tractate Progress */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-stone-500 dark:text-stone-400">
                <span>{status.currentTractate} Chapters</span>
                <span>Ch. {status.currentChapter} of {status.totalChaptersInTractate}</span>
              </div>
              <div className="h-1 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                  style={{ width: `${(status.currentChapter / Math.max(status.totalChaptersInTractate, 1)) * 100}%` }}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-1 text-[10px] text-stone-400 dark:text-stone-500">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Auto-saves every chapter
              </span>
              <button
                onClick={() => setIsVisible(false)}
                className="hover:underline text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
              >
                Hide badge
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
