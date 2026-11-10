import React from 'react';
import { TractateInfo, MishnahData } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { toHebrewNumeral } from '../utils/hebrewNumerals';

interface ChapterBarProps {
  tractate: TractateInfo;
  chapter: number;
  mishnayot: MishnahData[];
  onSelectChapter: (ch: number) => void;
  onScrollToMishnah: (mishnahNum: number) => void;
}

export const ChapterBar: React.FC<ChapterBarProps> = ({
  tractate,
  chapter,
  mishnayot,
  onSelectChapter,
  onScrollToMishnah
}) => {
  const hasPrev = chapter > 1;
  const hasNext = chapter < tractate.chaptersCount;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-stone-200/70 dark:border-stone-800 text-xs sm:text-sm">
      {/* Prev Chapter */}
      {hasPrev ? (
        <button
          onClick={() => onSelectChapter(chapter - 1)}
          className="flex items-center gap-1 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 transition-colors font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Chapter {chapter - 1}</span>
        </button>
      ) : (
        <span />
      )}

      {/* Mishnah Quick Jump Numbers */}
      <div className="flex items-center gap-1.5 flex-wrap justify-center font-serifHe text-sm">
        {mishnayot.map((m) => (
          <button
            key={m.number}
            onClick={() => onScrollToMishnah(m.number)}
            className="w-7 h-7 rounded hover:bg-stone-200/60 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 font-bold transition-colors"
            title={`Scroll to Mishnah ${m.number}`}
          >
            {toHebrewNumeral(m.number)}
          </button>
        ))}
      </div>

      {/* Next Chapter */}
      {hasNext ? (
        <button
          onClick={() => onSelectChapter(chapter + 1)}
          className="flex items-center gap-1 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 transition-colors font-medium"
        >
          <span>Chapter {chapter + 1}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      ) : (
        <span />
      )}
    </div>
  );
};

