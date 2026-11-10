import React from 'react';
import { MishnahData, TractateInfo } from '../types';
import { X, ExternalLink } from 'lucide-react';

interface FullTranslationPanelProps {
  isOpen: boolean;
  onClose: () => void;
  tractate: TractateInfo;
  chapter: number;
  mishnayot: MishnahData[];
  selectedMishnahNum?: number;
  onSelectMishnah?: (num: number) => void;
}

export const FullTranslationPanel: React.FC<FullTranslationPanelProps> = ({
  isOpen,
  onClose,
  tractate,
  chapter,
  mishnayot,
  selectedMishnahNum,
  onSelectMishnah
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-40 w-full sm:w-[420px] bg-white dark:bg-[#1a1b1e] border-l border-stone-200 dark:border-stone-800 shadow-xl flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
        <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100">
          {tractate.shortTitle} · Chapter {chapter} Translation
        </h3>
        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Translations List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {mishnayot.map((m) => {
          const isSelected = selectedMishnahNum === m.number;
          return (
            <div
              key={m.number}
              id={`trans-mishnah-${m.number}`}
              onClick={() => onSelectMishnah?.(m.number)}
              className={`p-3.5 rounded-lg border transition-colors cursor-pointer ${
                isSelected
                  ? 'border-stone-400 bg-stone-100/70 dark:bg-stone-800/60 dark:border-stone-600'
                  : 'border-stone-200/80 dark:border-stone-800 bg-transparent hover:border-stone-300 dark:hover:border-stone-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif font-bold text-xs text-stone-900 dark:text-stone-200">
                  {m.enRef} · {m.heRef}
                </span>
                <span className="text-[11px] text-stone-400 font-mono">
                  {m.words.length} words
                </span>
              </div>

              {m.englishFull ? (
                <div
                  className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 prose prose-sm dark:prose-invert max-w-none [&_b]:text-slate-950 dark:[&_b]:text-white [&_b]:font-semibold [&_i]:text-slate-600 dark:[&_i]:text-slate-400"
                  dangerouslySetInnerHTML={{ __html: m.englishFull }}
                />
              ) : (
                <p className="text-xs text-slate-400 italic">
                  Translation not available for this segment in Sefaria.
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Sefaria Community Translation</span>
        <a
          href={`https://www.sefaria.org/${tractate.slug}.${chapter}`}
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 inline-flex items-center gap-1"
        >
          <span>Open on Sefaria</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

