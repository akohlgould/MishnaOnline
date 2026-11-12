import React, { useState, useEffect } from 'react';
import { WordData, MishnahData } from '../types';
import { SefariaService } from '../services/sefariaService';
import { Volume2, ChevronLeft, ChevronRight, X, BookOpen, ExternalLink, Loader2, Sparkles } from 'lucide-react';

interface WordInspectorProps {
  word: WordData | null;
  onClose: () => void;
  onNextWord?: () => void;
  onPrevWord?: () => void;
  hasNextWord?: boolean;
  hasPrevWord?: boolean;
  onWordUpdated?: (updatedWord: WordData) => void;
  mishnah?: MishnahData | null;
  onExploreRoot?: (root: string) => void;
}

export const WordInspector: React.FC<WordInspectorProps> = ({
  word,
  onClose,
  onNextWord,
  onPrevWord,
  hasNextWord = false,
  hasPrevWord = false,
  onWordUpdated,
  mishnah,
  onExploreRoot
}) => {
  const [displayWord, setDisplayWord] = useState<WordData | null>(word);
  const [isResolving, setIsResolving] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rawLexicon, setRawLexicon] = useState<any[] | null>(null);
  const [loadingLexicon, setLoadingLexicon] = useState(false);
  const [showDeepLexicon, setShowDeepLexicon] = useState(false);

  useEffect(() => {
    setDisplayWord(word);
    // Reset deep lexicon state when word changes
    setRawLexicon(null);
    setShowDeepLexicon(false);

    if (!word) return;

    const isPlaceholder =
      !word.translation ||
      (word.translation.startsWith('[') && word.translation.endsWith(']')) ||
      word.translation === '—';

    if (isPlaceholder) {
      setIsResolving(true);
      let active = true;

      SefariaService.resolveWordTranslation(word)
        .then((resolved) => {
          if (active && resolved) {
            setDisplayWord(resolved);
            onWordUpdated?.(resolved);
          }
        })
        .catch((err) => {
          console.warn('Error resolving word translation:', err);
        })
        .finally(() => {
          if (active) {
            setIsResolving(false);
          }
        });

      return () => {
        active = false;
      };
    } else {
      setIsResolving(false);
    }
  }, [word?.id, word?.cleanWord, word?.translation]);

  // Keyboard navigation for stepping through words
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!word) return;
      if (e.key === 'ArrowRight' && onPrevWord && hasPrevWord) {
        // In Hebrew RTL, arrow right moves to previous (earlier in reading order)
        onPrevWord();
      } else if (e.key === 'ArrowLeft' && onNextWord && hasNextWord) {
        // Arrow left moves to next (later in reading order)
        onNextWord();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [word, onNextWord, onPrevWord, hasNextWord, hasPrevWord, onClose]);

  const activeWord = displayWord || word;
  if (!activeWord) return null;

  const handleSpeak = () => {
    setIsPlaying(true);
    SefariaService.speakHebrew(activeWord.cleanWord);
    setTimeout(() => setIsPlaying(false), 1200);
  };

  const handleFetchLexicon = async () => {
    if (rawLexicon) {
      setShowDeepLexicon(!showDeepLexicon);
      return;
    }
    setLoadingLexicon(true);
    setShowDeepLexicon(true);
    try {
      const data = await SefariaService.fetchRawLexicon(activeWord.consonants);
      setRawLexicon(data);
    } catch {
      setRawLexicon([]);
    } finally {
      setLoadingLexicon(false);
    }
  };

  const { grammar } = activeWord;

  return (
    <aside
      aria-label="Word Analysis and Translation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-[#1a1b1e] border-t border-stone-200 dark:border-stone-800 shadow-xl transition-all md:bottom-6 md:right-6 md:left-auto md:w-[380px] md:rounded-xl md:border"
    >
      {/* Top Bar / Navigation */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-100 dark:border-stone-800/80 text-xs text-stone-500 dark:text-stone-400">
        <span className="font-medium text-stone-700 dark:text-stone-300">Lexicon & Grammar</span>

        <div className="flex items-center gap-1">
          <button
            onClick={onPrevWord}
            disabled={!hasPrevWord}
            title="Previous word (Arrow Right)"
            className="p-1 rounded hover:bg-stone-100 dark:hover:bg-stone-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={onNextWord}
            disabled={!hasNextWord}
            title="Next word (Arrow Left)"
            className="p-1 rounded hover:bg-stone-100 dark:hover:bg-stone-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1 ml-1 rounded hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4 max-h-[70vh] md:max-h-[75vh] overflow-y-auto space-y-4">
        {/* Word Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-baseline gap-2.5">
              <span
                dir="rtl"
                className="font-serifHe text-3xl font-bold tracking-normal text-stone-900 dark:text-stone-100"
              >
                {activeWord.cleanWord}
              </span>
              <button
                onClick={handleSpeak}
                className={`p-1.5 rounded-full transition-colors ${
                  isPlaying
                    ? 'bg-stone-200 text-stone-900 dark:bg-stone-700 dark:text-stone-100'
                    : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
                title="Pronounce word"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            {activeWord.transliteration && (
              <p className="text-xs text-stone-400 font-sans italic mt-0.5">
                {activeWord.transliteration}
              </p>
            )}
          </div>
        </div>

        {/* Translation */}
        <div className="pb-3 border-b border-stone-100 dark:border-stone-800/80">
          <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block mb-1">
            Translation
          </span>
          {isResolving ? (
            <div className="flex items-center gap-2 py-1 text-stone-500">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-xs">Finding definition...</span>
            </div>
          ) : (
            <p className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">
              {activeWord.translation}
            </p>
          )}
        </div>

        {/* Root / Shoresh */}
        {activeWord.shoresh && activeWord.shoresh !== '—' && (
          <div className="pb-3 border-b border-stone-100 dark:border-stone-800/80 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block mb-1">
                Root (Shoresh)
              </span>
              <div className="flex items-baseline gap-2">
                <span dir="rtl" className="font-serifHe font-bold text-lg text-stone-900 dark:text-stone-100">
                  {activeWord.shoresh}
                </span>
                {grammar?.shoreshMeaning && (
                  <span className="text-stone-500 dark:text-stone-400 text-xs">
                    — &ldquo;{grammar.shoreshMeaning}&rdquo;
                  </span>
                )}
              </div>
            </div>
            {onExploreRoot && (
              <button
                onClick={() => onExploreRoot(activeWord.shoresh)}
                className="px-2 py-1 rounded-lg text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:text-amber-300 dark:hover:bg-amber-900/60 transition-colors flex items-center gap-1.5 shrink-0"
                title="Search this root across all 63 tractates"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Explore Shas</span>
              </button>
            )}
          </div>
        )}

        {/* Morphology Definition List */}
        <div className="space-y-1.5 text-xs">
          <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block mb-1">
            Morphology
          </span>
          <div className="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800/60">
            <span className="text-stone-400">Part of Speech</span>
            <span className="font-medium text-stone-800 dark:text-stone-200">
              {grammar?.pos || 'Term'}
            </span>
          </div>

          {grammar?.binyan && (
            <div className="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800/60">
              <span className="text-stone-400">Binyan</span>
              <span className="font-medium text-stone-800 dark:text-stone-200">
                {grammar.binyan}
              </span>
            </div>
          )}

          {grammar?.tense && (
            <div className="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800/60">
              <span className="text-stone-400">Tense / Form</span>
              <span className="font-medium text-stone-800 dark:text-stone-200">
                {grammar.tense}
                {grammar.gender && ` · ${grammar.gender === 'M' ? 'Masc.' : grammar.gender === 'F' ? 'Fem.' : 'Common'}`}
                {grammar.number && ` · ${grammar.number}`}
              </span>
            </div>
          )}

          {grammar?.prefixes && grammar.prefixes.length > 0 && (
            <div className="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800/60">
              <span className="text-stone-400">Prefix</span>
              <span className="font-medium text-stone-800 dark:text-stone-200">
                {grammar.prefixes.map(p => `${p.name} (${p.meaning})`).join(', ')}
              </span>
            </div>
          )}

          {grammar?.suffixes && grammar.suffixes.length > 0 && (
            <div className="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800/60">
              <span className="text-stone-400">Suffix</span>
              <span className="font-medium text-stone-800 dark:text-stone-200">
                {grammar.suffixes.map(s => `${s.name} (${s.meaning})`).join(', ')}
              </span>
            </div>
          )}

          {grammar?.notes && (
            <div className="pt-2 text-stone-600 dark:text-stone-400 leading-relaxed text-xs">
              <span className="font-medium text-stone-700 dark:text-stone-300">Usage: </span>
              {grammar.notes}
            </div>
          )}
        </div>

        {/* Mishnah Context */}
        {mishnah && mishnah.englishFull && (
          <div className="pt-2 border-t border-stone-100 dark:border-stone-800/80 text-xs">
            <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block mb-1">
              Context ({mishnah.enRef})
            </span>
            <div
              className="text-stone-600 dark:text-stone-400 leading-relaxed italic max-h-24 overflow-y-auto"
              dangerouslySetInnerHTML={{ __html: mishnah.englishFull }}
            />
          </div>
        )}

        {/* Deep Lexicon / Sefaria Jastrow Expandable Accordion */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={handleFetchLexicon}
            className="w-full flex items-center justify-between py-2 text-xs font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
          >
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Sefaria Lexicon & Jastrow Entry</span>
            </div>
            <span className="text-[11px] text-amber-600 dark:text-amber-400">
              {showDeepLexicon ? 'Hide' : 'Explore'}
            </span>
          </button>

          {showDeepLexicon && (
            <div className="mt-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-2">
              {loadingLexicon ? (
                <div className="py-4 text-center text-slate-400">Loading Sefaria dictionary...</div>
              ) : rawLexicon && rawLexicon.length > 0 ? (
                <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                  {rawLexicon.slice(0, 2).map((item, i) => (
                    <div key={i} className="pb-2 border-b border-slate-200 dark:border-slate-700 last:border-none">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                          {item.headword}
                        </span>
                        <span className="text-[10px] text-slate-400 bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                          {item.parent_lexicon || 'Dictionary'}
                        </span>
                      </div>
                      {item.content?.senses?.[0]?.definition && (
                        <div
                          className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal prose-sm"
                          dangerouslySetInnerHTML={{
                            __html: item.content.senses[0].definition
                          }}
                        />
                      )}
                    </div>
                  ))}
                  <a
                    href={`https://www.sefaria.org/${encodeURIComponent(activeWord.consonants)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 hover:underline pt-1"
                  >
                    <span>View full dictionary on Sefaria</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ) : (
                <div className="py-2 text-center text-slate-400">
                  No additional raw lexicon entries found on Sefaria for this form.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

