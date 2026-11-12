import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Search,
  X,
  BookOpen,
  Sparkles,
  Bookmark,
  ChevronRight,
  Layers,
  Hash
} from 'lucide-react';
import { toHebrewNumeral } from '../utils/hebrewNumerals';

export interface SearchIndexItem {
  slug: string;
  title: string;
  heTitle: string;
  ch: number;
  m: number;
  ref: string;
  heRef: string;
  he: string;
  en: string;
  roots: string[];
}

export interface BookmarkItem {
  slug: string;
  title: string;
  heTitle: string;
  chapter: number;
  mishnah: number;
  hebrewSnippet: string;
  englishSnippet?: string;
  timestamp: number;
}

interface ShasSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMishnah: (tractateSlug: string, chapter: number, mishnahNum: number) => void;
  initialQuery?: string;
  initialMode?: 'search' | 'root' | 'bookmarks';
}

export const ShasSearchModal: React.FC<ShasSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMishnah,
  initialQuery = '',
  initialMode = 'search'
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [mode, setMode] = useState<'all' | 'root' | 'hebrew' | 'english' | 'bookmarks'>(
    initialMode === 'root' ? 'root' : initialMode === 'bookmarks' ? 'bookmarks' : 'all'
  );
  const [indexData, setIndexData] = useState<SearchIndexItem[]>([]);
  const [loadingIndex, setLoadingIndex] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync initial query when opened
  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      if (initialMode === 'root') setMode('root');
      if (initialMode === 'bookmarks') setMode('bookmarks');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen, initialQuery, initialMode]);

  // Load bookmarks from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('mishnah_bookmarks');
      if (stored) {
        setBookmarks(JSON.parse(stored));
      }
    } catch {}
  }, [isOpen]);

  // Lazy load search index
  useEffect(() => {
    if (!isOpen || indexData.length > 0) return;
    setLoadingIndex(true);
    fetch('/data/shas_search_index.json')
      .then((res) => (res.ok ? res.json() : []))
      .then((data: SearchIndexItem[]) => {
        setIndexData(data);
      })
      .catch((err) => console.error('Could not load Shas search index:', err))
      .finally(() => setLoadingIndex(false));
  }, [isOpen, indexData.length]);

  // Clean Hebrew root / letters for matching
  const cleanHeb = (str: string) => str.replace(/[\u0591-\u05BD\u05BF-\u05C7\s\-–—]/g, '');

  // Filtered Results
  const filteredResults = useMemo(() => {
    if (mode === 'bookmarks') return [];
    const q = query.trim().toLowerCase();
    if (!q) return indexData.slice(0, 15);

    const cleanQ = cleanHeb(q);

    return indexData
      .filter((item) => {
        // Root filter mode
        if (mode === 'root') {
          return item.roots.some(
            (r) => r.includes(cleanQ) || cleanHeb(r).includes(cleanQ)
          );
        }

        // Hebrew text filter
        if (mode === 'hebrew') {
          return cleanHeb(item.he).includes(cleanQ) || cleanHeb(item.heTitle).includes(cleanQ);
        }

        // English text filter
        if (mode === 'english') {
          return (
            item.en.toLowerCase().includes(q) ||
            item.title.toLowerCase().includes(q) ||
            item.ref.toLowerCase().includes(q)
          );
        }

        // 'All' mode matches everything
        const matchesRef = item.ref.toLowerCase().includes(q) || item.heRef.includes(q);
        const matchesTitle =
          item.title.toLowerCase().includes(q) || cleanHeb(item.heTitle).includes(cleanQ);
        const matchesEn = item.en.toLowerCase().includes(q);
        const matchesHe = cleanHeb(item.he).includes(cleanQ);
        const matchesRoot = cleanQ.length >= 2 && item.roots.some((r) => r.includes(cleanQ));

        return matchesRef || matchesTitle || matchesEn || matchesHe || matchesRoot;
      })
      .slice(0, 40);
  }, [indexData, query, mode]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < (mode === 'bookmarks' ? bookmarks.length - 1 : filteredResults.length - 1)
            ? prev + 1
            : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0
            ? prev - 1
            : mode === 'bookmarks'
            ? bookmarks.length - 1
            : filteredResults.length - 1
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (mode === 'bookmarks' && bookmarks[selectedIndex]) {
          const b = bookmarks[selectedIndex];
          onSelectMishnah(b.slug, b.chapter, b.mishnah);
          onClose();
        } else if (filteredResults[selectedIndex]) {
          const item = filteredResults[selectedIndex];
          onSelectMishnah(item.slug, item.ch, item.m);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, bookmarks, selectedIndex, mode, onClose, onSelectMishnah]);

  const removeBookmark = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    const updated = bookmarks.filter((_, i) => i !== idx);
    setBookmarks(updated);
    try {
      localStorage.setItem('mishnah_bookmarks', JSON.stringify(updated));
    } catch {}
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#181a1b] sepia-mode:bg-[#f5efe3] rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 sepia-mode:border-amber-200 overflow-hidden flex flex-col max-h-[80vh] transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Search Input */}
        <div className="p-3.5 sm:p-4 border-b border-stone-200/80 dark:border-stone-800 sepia-mode:border-amber-200/60 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder={
              mode === 'root'
                ? 'Type Hebrew root (e.g. קדש, ברך, שבת)...'
                : mode === 'bookmarks'
                ? 'Filter bookmarks...'
                : 'Search all 63 tractates by English, Hebrew, or reference...'
            }
            className="flex-1 bg-transparent text-sm sm:text-base outline-none text-stone-900 dark:text-stone-100 placeholder-stone-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-500 font-mono"
          >
            ESC
          </button>
        </div>

        {/* Filter Chips Bar */}
        <div className="px-3 py-2 bg-stone-50 dark:bg-stone-900/60 sepia-mode:bg-amber-100/50 border-b border-stone-200/60 dark:border-stone-800/60 flex items-center gap-1.5 overflow-x-auto text-xs">
          {[
            { id: 'all', label: 'All Shas', icon: BookOpen },
            { id: 'root', label: 'Shoresh (Root)', icon: Sparkles },
            { id: 'hebrew', label: 'Hebrew', icon: Hash },
            { id: 'english', label: 'English', icon: Layers },
            { id: 'bookmarks', label: `Bookmarks (${bookmarks.length})`, icon: Bookmark }
          ].map((tab) => {
            const Icon = tab.icon;
            const active = mode === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setMode(tab.id as any);
                  setSelectedIndex(0);
                }}
                className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors font-medium whitespace-nowrap ${
                  active
                    ? 'bg-amber-600 text-white shadow-sm font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body / Results List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-stone-100 dark:divide-stone-800/40">
          {loadingIndex && (
            <div className="py-12 text-center text-sm text-stone-400">
              Loading Shas search index...
            </div>
          )}

          {/* Bookmarks Mode */}
          {mode === 'bookmarks' && (
            <>
              {bookmarks.length === 0 ? (
                <div className="py-12 text-center text-stone-400 text-xs sm:text-sm">
                  <Bookmark className="w-8 h-8 text-stone-300 dark:text-stone-700 mx-auto mb-2" />
                  <p className="font-medium text-stone-600 dark:text-stone-400">No bookmarks saved yet</p>
                  <p className="text-xs text-stone-400 mt-1">
                    Click the bookmark icon on any Mishnah while reading to save it here.
                  </p>
                </div>
              ) : (
                bookmarks.map((b, idx) => (
                  <div
                    key={`${b.slug}_${b.chapter}_${b.mishnah}`}
                    onClick={() => {
                      onSelectMishnah(b.slug, b.chapter, b.mishnah);
                      onClose();
                    }}
                    className={`p-3 rounded-xl cursor-pointer transition-colors flex items-start justify-between gap-3 ${
                      selectedIndex === idx
                        ? 'bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800'
                        : 'hover:bg-stone-50 dark:hover:bg-stone-800/40 border border-transparent'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-xs text-amber-700 dark:text-amber-400">
                          {b.title} {b.chapter}:{b.mishnah}
                        </span>
                        <span dir="rtl" className="font-serifHe text-xs text-stone-500">
                          {b.heTitle} פרק {toHebrewNumeral(b.chapter)} משנה {toHebrewNumeral(b.mishnah)}
                        </span>
                      </div>
                      <p dir="rtl" className="font-serifHe text-sm text-stone-800 dark:text-stone-200 line-clamp-1">
                        {b.hebrewSnippet}
                      </p>
                    </div>
                    <button
                      onClick={(e) => removeBookmark(e, idx)}
                      className="p-1 rounded text-stone-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40"
                      title="Remove bookmark"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </>
          )}

          {/* Search Results Mode */}
          {mode !== 'bookmarks' && !loadingIndex && (
            <>
              {filteredResults.length === 0 ? (
                <div className="py-12 text-center text-stone-400 text-sm">
                  No Mishnayot found matching &ldquo;{query}&rdquo;
                </div>
              ) : (
                filteredResults.map((item, idx) => (
                  <div
                    key={`${item.slug}_${item.ch}_${item.m}`}
                    onClick={() => {
                      onSelectMishnah(item.slug, item.ch, item.m);
                      onClose();
                    }}
                    className={`p-3 rounded-xl cursor-pointer transition-colors flex items-start justify-between gap-3 ${
                      selectedIndex === idx
                        ? 'bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800'
                        : 'hover:bg-stone-50 dark:hover:bg-stone-800/40 border border-transparent'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      {/* Ref Tag */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-1.5 py-0.5 rounded text-[11px] font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                          {item.ref}
                        </span>
                        <span dir="rtl" className="font-serifHe text-xs text-stone-500">
                          {item.heRef}
                        </span>
                      </div>

                      {/* Hebrew snippet */}
                      <p dir="rtl" className="font-serifHe text-base text-stone-900 dark:text-stone-100 line-clamp-1 mb-1">
                        {item.he}...
                      </p>

                      {/* English translation snippet */}
                      <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-1">
                        {item.en}...
                      </p>

                      {/* Roots Tags */}
                      {item.roots.length > 0 && (
                        <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                          <span className="text-[10px] text-stone-400">Roots:</span>
                          {item.roots.slice(0, 5).map((r) => (
                            <button
                              key={r}
                              onClick={(e) => {
                                e.stopPropagation();
                                setQuery(r);
                                setMode('root');
                              }}
                              className="px-1.5 py-0.2 rounded text-[10px] bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-amber-100 dark:hover:bg-amber-900/50"
                            >
                              {r}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <ChevronRight className="w-4 h-4 text-stone-400 shrink-0 mt-2" />
                  </div>
                ))
              )}
            </>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-stone-50 dark:bg-stone-900/80 sepia-mode:bg-amber-100/50 border-t border-stone-200/60 dark:border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
          <div className="flex items-center gap-2">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>4,192 Mishnayot Indexed Across 63 Tractates</span>
        </div>
      </div>
    </div>
  );
};
