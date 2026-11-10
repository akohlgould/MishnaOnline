import React, { useRef } from 'react';
import { MishnahData, WordData, HebrewFont } from '../types';
import { Volume2, BookOpen } from 'lucide-react';
import { SefariaService } from '../services/sefariaService';

interface MishnahReaderProps {
  mishnayot: MishnahData[];
  selectedWord: WordData | null;
  onSelectWord: (word: WordData) => void;
  showInterlinear: boolean;
  fontSize: number;
  hebrewFont: HebrewFont;
  onOpenFullTranslationForMishnah?: (mishnahNum: number) => void;
}

export const MishnahReader: React.FC<MishnahReaderProps> = ({
  mishnayot,
  selectedWord,
  onSelectWord,
  showInterlinear,
  fontSize,
  hebrewFont,
  onOpenFullTranslationForMishnah
}) => {
  const readerRef = useRef<HTMLDivElement>(null);

  // Font family mapping
  const fontClass =
    hebrewFont === 'frank'
      ? 'font-serifHe'
      : hebrewFont === 'david'
      ? 'font-["David_Libre",serif]'
      : 'font-sansHe';

  return (
    <div ref={readerRef} className="space-y-8 pb-32">
      {mishnayot.map((mishnah) => (
        <article
          key={mishnah.number}
          id={`mishnah-${mishnah.number}`}
          className="pb-10 mb-10 border-b border-stone-200/60 dark:border-stone-800/80 last:border-b-0"
        >
          {/* Mishnah Header */}
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-stone-100 dark:border-stone-800/60">
            <div className="flex items-center gap-2">
              <span className="font-serifHe font-bold text-lg text-stone-900 dark:text-stone-100">
                {mishnah.heRef}
              </span>
              <span className="text-xs text-stone-400 font-serif">
                ({mishnah.enRef})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => SefariaService.speakHebrew(mishnah.hebrewFull)}
                className="px-2.5 py-1 rounded text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-xs flex items-center gap-1.5"
                title="Recite full Mishnah in Hebrew"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Recite</span>
              </button>

              {onOpenFullTranslationForMishnah && (
                <button
                  onClick={() => onOpenFullTranslationForMishnah(mishnah.number)}
                  className="px-2.5 py-1 rounded text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-xs flex items-center gap-1.5"
                  title="View full English translation"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">English</span>
                </button>
              )}
            </div>
          </div>

          {/* Hebrew Text Flow */}
          <div
            dir="rtl"
            className={`flex flex-wrap items-end gap-x-2 gap-y-3 leading-[2.4] select-text ${fontClass}`}
            style={{ fontSize: `${fontSize}px` }}
          >
            {mishnah.words.map((word) => {
              const isSelected = selectedWord?.id === word.id;

              return (
                <span
                  key={word.id}
                  onClick={() => onSelectWord(word)}
                  className={`inline-flex flex-col items-center cursor-pointer rounded px-1.5 py-0.5 transition-colors ${
                    isSelected
                      ? 'bg-amber-100 text-stone-950 dark:bg-amber-950/70 dark:text-amber-100'
                      : 'hover:bg-stone-200/50 dark:hover:bg-stone-800/60 text-stone-900 dark:text-stone-100'
                  }`}
                >
                  {/* Vocalized Hebrew Word */}
                  <span>
                    {word.cleanWord}
                    {word.punctuation && (
                      <span className="text-stone-400 dark:text-stone-500 mr-0.5">
                        {word.punctuation}
                      </span>
                    )}
                  </span>

                  {/* Interlinear Subtitle (Shown if toggle enabled) */}
                  {showInterlinear && (
                    <span
                      dir="ltr"
                      className="text-[11px] font-sans font-normal text-stone-500 dark:text-stone-400 leading-none mt-1 select-none text-center max-w-[100px] truncate"
                      title={word.translation}
                    >
                      {word.translation}
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
};

