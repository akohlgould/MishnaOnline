import React, { useRef, useState, useEffect } from 'react';
import { MishnahData, WordData, HebrewFont, TractateInfo } from '../types';
import { Volume2, VolumeX, BookOpen, Bookmark, Copy, Check, Share2 } from 'lucide-react';

interface MishnahReaderProps {
  tractate?: TractateInfo;
  chapter?: number;
  mishnayot: MishnahData[];
  selectedWord: WordData | null;
  onSelectWord: (word: WordData) => void;
  showInterlinear: boolean;
  fontSize: number;
  hebrewFont: HebrewFont;
  onOpenFullTranslationForMishnah?: (mishnahNum: number) => void;
  onOpenSearchRoot?: (root: string) => void;
}

export const MishnahReader: React.FC<MishnahReaderProps> = ({
  tractate,
  chapter = 1,
  mishnayot,
  selectedWord,
  onSelectWord,
  showInterlinear,
  fontSize,
  hebrewFont,
  onOpenFullTranslationForMishnah
}) => {
  const readerRef = useRef<HTMLDivElement>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
  const [playingMishnah, setPlayingMishnah] = useState<number | null>(null);
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({});

  // Load bookmarks
  useEffect(() => {
    try {
      const stored = localStorage.getItem('mishnah_bookmarks');
      if (stored) {
        const list = JSON.parse(stored);
        const map: Record<string, boolean> = {};
        list.forEach((b: any) => {
          map[`${b.slug}_${b.chapter}_${b.mishnah}`] = true;
        });
        setBookmarks(map);
      }
    } catch {}
  }, []);

  const toggleBookmark = (m: MishnahData) => {
    if (!tractate) return;
    const key = `${tractate.slug}_${chapter}_${m.number}`;
    try {
      const stored = localStorage.getItem('mishnah_bookmarks');
      const list = stored ? JSON.parse(stored) : [];
      let updated;
      if (bookmarks[key]) {
        updated = list.filter(
          (b: any) => !(b.slug === tractate.slug && b.chapter === chapter && b.mishnah === m.number)
        );
        setBookmarks((prev) => ({ ...prev, [key]: false }));
      } else {
        const newBm = {
          slug: tractate.slug,
          title: tractate.shortTitle,
          heTitle: tractate.heShortTitle || tractate.heTitle,
          chapter,
          mishnah: m.number,
          hebrewSnippet: m.hebrewFull.slice(0, 100),
          englishSnippet: m.englishFull?.slice(0, 120),
          timestamp: Date.now()
        };
        updated = [newBm, ...list];
        setBookmarks((prev) => ({ ...prev, [key]: true }));
      }
      localStorage.setItem('mishnah_bookmarks', JSON.stringify(updated));
    } catch {}
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
    setActiveMenuId(null);
  };

  const formatInterlinear = (m: MishnahData) => {
    const title = tractate ? tractate.shortTitle : 'Mishnah';
    let out = `${title} ${chapter}:${m.number} (${m.heRef})\n\n`;
    out += `HEBREW:\n${m.hebrewFull}\n\n`;
    if (m.englishFull) {
      out += `ENGLISH:\n${m.englishFull}\n\n`;
    }
    out += `INTERLINEAR WORD GLOSSES:\n`;
    m.words.forEach((w) => {
      const translit = w.transliteration ? ` [${w.transliteration}]` : '';
      const root = w.shoresh && w.shoresh !== '—' ? ` (Root: ${w.shoresh})` : '';
      out += `${w.cleanWord}${translit} = "${w.translation}"${root}\n`;
    });
    out += `\nVia https://mishnah.online`;
    return out;
  };

  const handleToggleAudio = (m: MishnahData) => {
    if (playingMishnah === m.number) {
      window.speechSynthesis?.cancel();
      setPlayingMishnah(null);
    } else {
      window.speechSynthesis?.cancel();
      if (!('speechSynthesis' in window)) return;
      const utterance = new SpeechSynthesisUtterance(m.hebrewFull);
      utterance.lang = 'he-IL';
      utterance.rate = 0.85;
      utterance.onend = () => setPlayingMishnah(null);
      utterance.onerror = () => setPlayingMishnah(null);
      setPlayingMishnah(m.number);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Font family mapping
  const fontClass =
    hebrewFont === 'frank'
      ? 'font-serifHe'
      : hebrewFont === 'david'
      ? 'font-["David_Libre",serif]'
      : 'font-sansHe';

  return (
    <div ref={readerRef} className="space-y-8 pb-32">
      {mishnayot.map((mishnah) => {
        const isBookmarked =
          tractate && bookmarks[`${tractate.slug}_${chapter}_${mishnah.number}`];
        const isMenuOpen = activeMenuId === mishnah.number;
        const isPlaying = playingMishnah === mishnah.number;

        return (
          <article
            key={mishnah.number}
            id={`mishnah-${mishnah.number}`}
            className="pb-10 mb-10 border-b border-stone-200/60 dark:border-stone-800/80 last:border-b-0"
          >
            {/* Mishnah Header & Action Toolbar */}
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-stone-100 dark:border-stone-800/60">
              <div className="flex items-center gap-2">
                <span className="font-serifHe font-bold text-lg text-stone-900 dark:text-stone-100">
                  {mishnah.heRef}
                </span>
                <span className="text-xs text-stone-400 font-serif">
                  ({mishnah.enRef})
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 text-xs">
                {/* Audio Recite Button */}
                <button
                  onClick={() => handleToggleAudio(mishnah)}
                  className={`px-2 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                    isPlaying
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 font-bold'
                      : 'text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                  title={isPlaying ? 'Stop reciting' : 'Recite in Hebrew (TTS)'}
                >
                  {isPlaying ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 animate-pulse text-amber-600" />
                      <span className="hidden sm:inline">Playing</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Recite</span>
                    </>
                  )}
                </button>

                {/* Bookmark Toggle */}
                <button
                  onClick={() => toggleBookmark(mishnah)}
                  className={`p-1.5 rounded-md transition-colors ${
                    isBookmarked
                      ? 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400'
                      : 'text-stone-400 hover:text-stone-700 hover:bg-stone-100 dark:hover:text-stone-200 dark:hover:bg-stone-800'
                  }`}
                  title={isBookmarked ? 'Remove bookmark' : 'Bookmark this Mishnah'}
                >
                  <Bookmark
                    className="w-3.5 h-3.5"
                    fill={isBookmarked ? 'currentColor' : 'none'}
                  />
                </button>

                {/* Copy / Export Menu */}
                <div className="relative">
                  <button
                    onClick={() => setActiveMenuId(isMenuOpen ? null : mishnah.number)}
                    className="px-2 py-1 rounded-md text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center gap-1"
                    title="Copy or export Mishnah"
                  >
                    {copiedId?.startsWith(`m_${mishnah.number}`) ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span className="hidden sm:inline">Copy</span>
                  </button>

                  {isMenuOpen && (
                    <div
                      className="absolute right-0 mt-1 w-52 bg-white dark:bg-stone-900 rounded-xl shadow-xl border border-stone-200 dark:border-stone-800 p-1.5 z-40 text-xs space-y-1 font-sans"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() =>
                          handleCopy(mishnah.hebrewFull, `m_${mishnah.number}_he`)
                        }
                        className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-between"
                      >
                        <span>Copy Hebrew text</span>
                        <span className="text-[10px] text-stone-400">עברית</span>
                      </button>

                      {mishnah.englishFull && (
                        <button
                          onClick={() =>
                            handleCopy(mishnah.englishFull, `m_${mishnah.number}_en`)
                          }
                          className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
                        >
                          Copy English translation
                        </button>
                      )}

                      <button
                        onClick={() =>
                          handleCopy(formatInterlinear(mishnah), `m_${mishnah.number}_inter`)
                        }
                        className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-950/40 text-amber-700 dark:text-amber-400 font-semibold"
                      >
                        Copy Interlinear Study Sheet
                      </button>

                      <button
                        onClick={() => {
                          const url = `https://mishnah.online#${tractate?.slug}_${chapter}_${mishnah.number}`;
                          handleCopy(url, `m_${mishnah.number}_link`);
                        }}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 flex items-center gap-1.5 border-t border-stone-100 dark:border-stone-800"
                      >
                        <Share2 className="w-3 h-3" />
                        <span>Copy link to Mishnah</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* English Side Panel Toggle */}
                {onOpenFullTranslationForMishnah && (
                  <button
                    onClick={() => onOpenFullTranslationForMishnah(mishnah.number)}
                    className="px-2 py-1 rounded-md text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center gap-1"
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
                        title={
                          word.translation?.startsWith('[')
                            ? 'Tap to view contextual definition'
                            : word.translation
                        }
                      >
                        {word.translation?.startsWith('[') ? '—' : word.translation}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </article>
        );
      })}
    </div>
  );
};
