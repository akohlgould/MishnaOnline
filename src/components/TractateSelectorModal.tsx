import React, { useState, useMemo } from 'react';
import { TractateInfo } from '../types';
import { SefariaService } from '../services/sefariaService';
import { Search, X, Layers } from 'lucide-react';
import { toHebrewNumeral } from '../utils/mishnaParser';

interface TractateSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTractate: TractateInfo;
  currentChapter: number;
  onSelect: (tractate: TractateInfo, chapter: number) => void;
}

export const TractateSelectorModal: React.FC<TractateSelectorModalProps> = ({
  isOpen,
  onClose,
  currentTractate,
  currentChapter,
  onSelect
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSederId, setSelectedSederId] = useState<string>('all');
  const [activeTractateForChapters, setActiveTractateForChapters] = useState<TractateInfo | null>(null);

  const seders = useMemo(() => SefariaService.getSeders(), []);

  // Filter tractates based on search query and selected Seder
  const filteredTractates = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const result: Array<{ sederName: string; tractate: TractateInfo }> = [];

    for (const seder of seders) {
      if (selectedSederId !== 'all' && seder.id !== selectedSederId) {
        continue;
      }
      for (const t of seder.tractates) {
        const matchTitle = t.title.toLowerCase().includes(q);
        const matchShort = t.shortTitle.toLowerCase().includes(q);
        const matchHe = t.heTitle.includes(q) || t.heShortTitle.includes(q);
        const matchDesc = t.enDesc.toLowerCase().includes(q) || t.heDesc.includes(q);

        if (!q || matchTitle || matchShort || matchHe || matchDesc) {
          result.push({
            sederName: seder.name,
            tractate: t
          });
        }
      }
    }
    return result;
  }, [seders, searchQuery, selectedSederId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#1a1b1e] w-full max-w-4xl max-h-[85vh] rounded-xl shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif">
              Tractates of the Mishnah · ששת סדרי משנה
            </h2>
            <p className="text-xs text-stone-400">
              Select an order and tractate
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Seder Tabs Bar */}
        <div className="p-4 bg-stone-50 dark:bg-stone-900/40 border-b border-stone-200 dark:border-stone-800 space-y-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tractate (e.g. Berakhot, Shabbat, ברכות)..."
              className="w-full pl-9 pr-3 py-1.5 rounded border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-850 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none"
              autoFocus
            />
          </div>

          {/* Seder Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setSelectedSederId('all')}
              className={`px-2.5 py-1 rounded font-medium whitespace-nowrap transition-colors ${
                selectedSederId === 'all'
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800'
              }`}
            >
              All (63)
            </button>
            {seders.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSederId(s.id)}
                className={`px-2.5 py-1 rounded font-medium whitespace-nowrap transition-colors flex items-center gap-1 ${
                  selectedSederId === s.id
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800'
                }`}
              >
                <span className="font-serifHe font-bold">{s.heName}</span>
                <span className="opacity-70">({s.name})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activeTractateForChapters ? (
            /* Chapter Grid View for Selected Tractate */
            <div className="space-y-4 animate-fadeIn">
              <button
                onClick={() => setActiveTractateForChapters(null)}
                className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
              >
                ← Back to all tractates
              </button>

              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-slate-800 border border-amber-200/80 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold font-serifHe text-slate-900 dark:text-slate-100">
                    {activeTractateForChapters.heTitle}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {activeTractateForChapters.title} • {activeTractateForChapters.chaptersCount} Chapters (פרקים)
                  </p>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                  Select Chapter (Perek)
                </span>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
                  {Array.from({ length: activeTractateForChapters.chaptersCount }, (_, i) => i + 1).map((ch) => {
                    const isCurrent =
                      currentTractate.slug === activeTractateForChapters.slug && currentChapter === ch;
                    const mishnahCount = activeTractateForChapters.mishnahCounts?.[ch - 1] || '';
                    return (
                      <button
                        key={ch}
                        onClick={() => {
                          onSelect(activeTractateForChapters, ch);
                          onClose();
                        }}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          isCurrent
                            ? 'bg-amber-600 text-white border-amber-600 shadow-md ring-2 ring-amber-500/30 font-bold'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-amber-400 hover:bg-amber-50/40 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <div className="font-serifHe text-lg font-bold">
                          פרק {toHebrewNumeral(ch)}
                        </div>
                        <div className="text-[11px] opacity-75 mt-0.5">
                          Chapter {ch}
                        </div>
                        {mishnahCount && (
                          <div className="text-[10px] opacity-60 mt-0.5">
                            {mishnahCount} Mishnayot
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Tractate List Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {filteredTractates.length === 0 ? (
                <div className="col-span-full py-12 text-center text-slate-400 text-sm">
                  No tractates matching "{searchQuery}"
                </div>
              ) : (
                filteredTractates.map(({ sederName, tractate }) => {
                  const isCurrent = currentTractate.slug === tractate.slug;
                  return (
                    <div
                      key={tractate.slug}
                      onClick={() => setActiveTractateForChapters(tractate)}
                      className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all hover:scale-[1.01] hover:shadow-md ${
                        isCurrent
                          ? 'border-amber-500 bg-amber-50/40 dark:bg-slate-800/90 ring-1 ring-amber-500'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-amber-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider block mb-0.5">
                            {sederName}
                          </span>
                          <h4 className="font-serifHe font-bold text-lg text-slate-900 dark:text-slate-100 leading-tight">
                            {tractate.heShortTitle || tractate.heTitle}
                          </h4>
                          <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                            {tractate.shortTitle}
                          </span>
                        </div>

                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {tractate.chaptersCount} {tractate.chaptersCount === 1 ? 'ch' : 'chs'}
                        </span>
                      </div>

                      {tractate.enDesc && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                          {tractate.enDesc}
                        </p>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Open-source Mishna dataset powered by Sefaria</span>
          </div>
          <span className="font-medium text-slate-700 dark:text-slate-300">
            63 Tractates • 523 Chapters
          </span>
        </div>
      </div>
    </div>
  );
};

