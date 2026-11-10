import React, { useState } from 'react';
import { TractateInfo, ThemeMode, HebrewFont } from '../types';
import { BrandLogo } from './BrandLogo';
import {
  ChevronDown,
  Moon,
  Sun,
  Eye,
  EyeOff,
  PanelRightClose,
  PanelRightOpen,
  Type,
  ExternalLink
} from 'lucide-react';
import { toHebrewNumeral } from '../utils/mishnaParser';

interface HeaderProps {
  currentTractate: TractateInfo;
  currentChapter: number;
  onSelectChapter: (chapter: number) => void;
  onOpenTractateModal: () => void;
  showInterlinear: boolean;
  onToggleInterlinear: () => void;
  showFullTranslation: boolean;
  onToggleFullTranslation: () => void;
  fontSize: number;
  onChangeFontSize: (size: number) => void;
  hebrewFont: HebrewFont;
  onChangeHebrewFont: (font: HebrewFont) => void;
  theme: ThemeMode;
  onChangeTheme: (theme: ThemeMode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTractate,
  currentChapter,
  onSelectChapter,
  onOpenTractateModal,
  showInterlinear,
  onToggleInterlinear,
  showFullTranslation,
  onToggleFullTranslation,
  fontSize,
  onChangeFontSize,
  hebrewFont,
  onChangeHebrewFont,
  theme,
  onChangeTheme
}) => {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  // Generate chapter options based on tractate's chapter count
  const chapterOptions = Array.from({ length: currentTractate.chaptersCount }, (_, i) => i + 1);

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-[#181a1b]/90 backdrop-blur-sm border-b border-stone-200/80 dark:border-stone-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand & Navigation */}
        <div className="flex items-center gap-3">
          <BrandLogo size="md" />

          <div className="h-4 w-px bg-stone-200 dark:bg-stone-700 hidden sm:block" />

          {/* Tractate Selector Button */}
          <button
            onClick={onOpenTractateModal}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 transition-colors text-sm font-medium"
            title="Select Tractate"
          >
            <span className="font-serifHe font-bold text-base">
              {currentTractate.heShortTitle || currentTractate.heTitle}
            </span>
            <span className="text-stone-400 text-xs hidden md:inline">
              ({currentTractate.shortTitle})
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 ml-0.5" />
          </button>

          {/* Chapter Selector Dropdown */}
          <div className="relative">
            <select
              value={currentChapter}
              onChange={(e) => onSelectChapter(Number(e.target.value))}
              aria-label="Select chapter"
              className="appearance-none pl-2.5 pr-6 py-1 rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-850 text-stone-800 dark:text-stone-200 text-xs sm:text-sm font-medium cursor-pointer transition-colors focus:outline-none"
            >
              {chapterOptions.map((c) => (
                <option key={c} value={c}>
                  פרק {toHebrewNumeral(c)} (Ch. {c})
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Right: Reading Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Interlinear Mode Toggle */}
          <button
            onClick={onToggleInterlinear}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors border ${
              showInterlinear
                ? 'border-stone-400 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100'
                : 'border-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-100 dark:text-stone-400 dark:hover:text-stone-200 dark:hover:bg-stone-800'
            }`}
            title={showInterlinear ? 'Hide interlinear subtitles' : 'Show interlinear subtitles'}
          >
            {showInterlinear ? (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Subtitles</span>
              </>
            ) : (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Subtitles</span>
              </>
            )}
          </button>

          {/* Full Translation Panel Toggle */}
          <button
            onClick={onToggleFullTranslation}
            className={`p-1.5 sm:px-2.5 sm:py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors border ${
              showFullTranslation
                ? 'border-stone-400 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100'
                : 'border-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-100 dark:text-stone-400 dark:hover:text-stone-200 dark:hover:bg-stone-800'
            }`}
            title="Toggle full English translation"
          >
            {showFullTranslation ? (
              <PanelRightClose className="w-3.5 h-3.5" />
            ) : (
              <PanelRightOpen className="w-3.5 h-3.5" />
            )}
            <span className="hidden md:inline">English</span>
          </button>

          {/* Settings Menu Button */}
          <div className="relative">
            <button
              onClick={() => setShowSettingsMenu(!showSettingsMenu)}
              className="p-1.5 rounded-md text-stone-500 hover:text-stone-800 hover:bg-stone-100 dark:text-stone-400 dark:hover:text-stone-200 dark:hover:bg-stone-800 transition-colors"
              title="Display settings"
            >
              <Type className="w-4 h-4" />
            </button>

            {showSettingsMenu && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-4 space-y-4 z-50 text-xs">
                {/* Font Size Adjuster */}
                <div>
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 mb-2 font-medium">
                    <span>Hebrew Text Size</span>
                    <span className="font-mono">{fontSize}px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onChangeFontSize(Math.max(20, fontSize - 2))}
                      className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 font-bold"
                    >
                      A-
                    </button>
                    <input
                      type="range"
                      min={20}
                      max={46}
                      step={2}
                      value={fontSize}
                      onChange={(e) => onChangeFontSize(Number(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />
                    <button
                      onClick={() => onChangeFontSize(Math.min(46, fontSize + 2))}
                      className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 font-bold"
                    >
                      A+
                    </button>
                  </div>
                </div>

                {/* Hebrew Font Family */}
                <div>
                  <div className="text-slate-600 dark:text-slate-400 mb-2 font-medium">Hebrew Typeface</div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(
                      [
                        { id: 'frank', label: 'Frank Ruhl' },
                        { id: 'david', label: 'David' },
                        { id: 'assistant', label: 'Assistant' }
                      ] as const
                    ).map((f) => (
                      <button
                        key={f.id}
                        onClick={() => onChangeHebrewFont(f.id)}
                        className={`py-1.5 rounded-lg border text-center font-medium transition-colors ${
                          hebrewFont === f.id
                            ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 font-bold'
                            : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Theme Selector */}
                <div>
                  <div className="text-slate-600 dark:text-slate-400 mb-2 font-medium">Color Theme</div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(
                      [
                        { id: 'light', label: 'Light', bg: 'bg-[#faf7f2]' },
                        { id: 'sepia', label: 'Sepia', bg: 'bg-[#f4efe6]' },
                        { id: 'dark', label: 'Dark', bg: 'bg-[#0b0f17]' }
                      ] as const
                    ).map((t) => (
                      <button
                        key={t.id}
                        onClick={() => onChangeTheme(t.id)}
                        className={`py-1.5 rounded-lg border text-center font-medium transition-colors flex items-center justify-center gap-1.5 ${
                          theme === t.id
                            ? 'border-amber-500 ring-1 ring-amber-500 font-bold text-amber-900 dark:text-amber-300'
                            : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className={`w-2.5 h-2.5 rounded-full border border-slate-300 ${t.bg}`} />
                        <span>{t.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
                  <span>Data from Sefaria API</span>
                  <a
                    href={`https://www.sefaria.org/${currentTractate.slug}.${currentChapter}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500 inline-flex items-center gap-0.5"
                  >
                    <span>View on Sefaria</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Quick Theme Toggle */}
          <button
            onClick={() => onChangeTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700 transition-colors"
            title="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};

