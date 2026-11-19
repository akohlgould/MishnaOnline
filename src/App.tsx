import { useState, useEffect, useMemo, useCallback, lazy, Suspense } from 'react';
import { TractateInfo, ChapterData, WordData, ThemeMode, HebrewFont } from './types';
import { SefariaService } from './services/sefariaService';
import { PRELOADED_BERAKHOT_1 } from './data/preloadedChapters';
import { Header } from './components/Header';
import { MishnahReader } from './components/MishnahReader';
import { WordInspector } from './components/WordInspector';
import { ChapterBar } from './components/ChapterBar';
import { BrandLogo } from './components/BrandLogo';
import { Loader2 } from 'lucide-react';
import { toHebrewNumeral } from './utils/hebrewNumerals';

const TractateSelectorModal = lazy(() => import('./components/TractateSelectorModal').then(m => ({ default: m.TractateSelectorModal })));
const FullTranslationPanel = lazy(() => import('./components/FullTranslationPanel').then(m => ({ default: m.FullTranslationPanel })));
const ShasSearchModal = lazy(() => import('./components/ShasSearchModal').then(m => ({ default: m.ShasSearchModal })));

function tractateToSlug(tractate: TractateInfo): string {
  return tractate.shortTitle
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function parseUrlPath(): {
  tractateQuery?: string;
  chapter?: number;
  mishnah?: number;
} {
  let path = window.location.pathname;

  // Support hash fallback e.g. /#pesachim/5/2 or /#Pesachim_5_2
  if ((!path || path === '/') && window.location.hash) {
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    if (rawHash.includes('_')) {
      const parts = rawHash.split('_');
      return {
        tractateQuery: parts[0],
        chapter: parts[1] ? parseInt(parts[1], 10) : undefined,
        mishnah: parts[2] ? parseInt(parts[2], 10) : undefined,
      };
    }
    path = '/' + rawHash;
  }

  const segments = path.split('/').filter(Boolean);
  if (segments.length === 0) return {};

  const tractateQuery = segments[0];
  const chapter = segments[1] ? parseInt(segments[1], 10) : undefined;
  const mishnah = segments[2] ? parseInt(segments[2], 10) : undefined;

  return {
    tractateQuery,
    chapter: Number.isFinite(chapter) && chapter! > 0 ? chapter : undefined,
    mishnah: Number.isFinite(mishnah) && mishnah! > 0 ? mishnah : undefined,
  };
}

function syncUrl(
  tractate: TractateInfo,
  chapter: number,
  mishnah?: number,
  mode: 'push' | 'replace' | 'none' = 'push'
) {
  const slug = tractateToSlug(tractate);
  const targetPath = `/${slug}/${chapter}${mishnah ? `/${mishnah}` : ''}`;
  const title = `${tractate.shortTitle} ${chapter}${mishnah ? `:${mishnah}` : ''} · Mishnah.Online`;

  document.title = title;

  if (mode === 'none') return;

  const currentPath = window.location.pathname;
  if (currentPath === targetPath) return;

  if (mode === 'push') {
    window.history.pushState({ slug: tractate.slug, chapter, mishnah }, title, targetPath);
  } else if (mode === 'replace') {
    window.history.replaceState({ slug: tractate.slug, chapter, mishnah }, title, targetPath);
  }
}

export function App() {
  // Navigation State
  const [currentTractate, setCurrentTractate] = useState<TractateInfo>(PRELOADED_BERAKHOT_1.tractate);
  const [currentChapter, setCurrentChapter] = useState<number>(1);
  const [chapterData, setChapterData] = useState<ChapterData>(PRELOADED_BERAKHOT_1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Search & Explorer Modal State
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState<string>('');
  const [searchInitialMode, setSearchInitialMode] = useState<'search' | 'root' | 'bookmarks'>('search');

  // Word Interaction State
  const [selectedWord, setSelectedWord] = useState<WordData | null>(null);

  // Display & Reading Preferences State
  // Invisible translations by default as requested: "The translations should be invisible but you should be able to view each word's translation by tapping on the word like in sefaria"
  const [showInterlinear, setShowInterlinear] = useState<boolean>(false);
  const [showFullTranslation, setShowFullTranslation] = useState<boolean>(false);
  const [selectedMishnahForTrans, setSelectedMishnahForTrans] = useState<number | undefined>(undefined);
  const [fontSize, setFontSize] = useState<number>(30);
  const [hebrewFont, setHebrewFont] = useState<HebrewFont>('frank');
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [isTractateModalOpen, setIsTractateModalOpen] = useState<boolean>(false);

  // Sync theme to document class
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'sepia-mode');
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'sepia') {
      root.classList.add('sepia-mode');
    }
  }, [theme]);

  // Global search shortcut (Cmd+K / Ctrl+K or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchInitialQuery('');
        setSearchInitialMode('search');
        setIsSearchModalOpen((prev) => !prev);
      } else if (
        e.key === '/' &&
        !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)
      ) {
        e.preventDefault();
        setSearchInitialQuery('');
        setSearchInitialMode('search');
        setIsSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Load Chapter Data from Sefaria or Cache with URL history sync
  const loadChapter = useCallback(
    async (
      tractate: TractateInfo,
      chapter: number,
      options: {
        targetMishnah?: number;
        historyMode?: 'push' | 'replace' | 'none';
        scrollToTop?: boolean;
      } = {}
    ) => {
      const { targetMishnah, historyMode = 'push', scrollToTop = true } = options;
      setLoading(true);
      setError(null);
      setSelectedWord(null);
      try {
        const data = await SefariaService.fetchChapter(tractate.slug, chapter);
        setChapterData(data);
        setCurrentTractate(data.tractate);
        setCurrentChapter(chapter);

        syncUrl(data.tractate, chapter, targetMishnah, historyMode);

        if (targetMishnah) {
          setTimeout(() => {
            const el = document.getElementById(`mishnah-${targetMishnah}`);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 150);
        } else if (scrollToTop) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch (err) {
        console.error(err);
        setError('Could not load Mishna chapter from Sefaria. Please check your internet connection.');
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Initial mount: load chapter from URL path or last studied
  useEffect(() => {
    const parsed = parseUrlPath();
    if (parsed.tractateQuery) {
      const tractate = SefariaService.getTractate(parsed.tractateQuery);
      if (tractate) {
        const ch = Math.min(Math.max(1, parsed.chapter || 1), tractate.chaptersCount);
        loadChapter(tractate, ch, {
          targetMishnah: parsed.mishnah,
          historyMode: 'replace',
          scrollToTop: !parsed.mishnah,
        });
        return;
      }
    }

    // If no valid tractate in URL, check last studied
    const last = SefariaService.getLastStudied();
    if (last && last.slug && last.chapter) {
      const tractate = SefariaService.getTractate(last.slug);
      if (tractate) {
        loadChapter(tractate, last.chapter, {
          historyMode: 'replace',
        });
        return;
      }
    }

    // Default to Berakhot 1 and canonicalize URL
    syncUrl(PRELOADED_BERAKHOT_1.tractate, 1, undefined, 'replace');
  }, [loadChapter]);

  // Listen for browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseUrlPath();
      if (parsed.tractateQuery) {
        const found = SefariaService.getTractate(parsed.tractateQuery);
        if (found) {
          const ch = Math.min(Math.max(1, parsed.chapter || 1), found.chaptersCount);
          loadChapter(found, ch, {
            targetMishnah: parsed.mishnah,
            historyMode: 'none',
            scrollToTop: !parsed.mishnah,
          });
          return;
        }
      }
      loadChapter(PRELOADED_BERAKHOT_1.tractate, 1, {
        historyMode: 'none',
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [loadChapter]);

  const handleSelectChapter = (ch: number) => {
    loadChapter(currentTractate, ch, { historyMode: 'push' });
  };

  const handleSelectTractateAndChapter = (tractate: TractateInfo, chapter: number) => {
    loadChapter(tractate, chapter, { historyMode: 'push' });
  };

  // Flatten all words across all mishnayot in current chapter for step navigation
  const allChapterWords = useMemo(() => {
    const words: WordData[] = [];
    chapterData.mishnayot.forEach(m => words.push(...m.words));
    return words;
  }, [chapterData]);

  const currentWordIndex = useMemo(() => {
    if (!selectedWord) return -1;
    return allChapterWords.findIndex(w => w.id === selectedWord.id);
  }, [selectedWord, allChapterWords]);

  const handleNextWord = () => {
    if (currentWordIndex >= 0 && currentWordIndex < allChapterWords.length - 1) {
      setSelectedWord(allChapterWords[currentWordIndex + 1]);
    }
  };

  const handlePrevWord = () => {
    if (currentWordIndex > 0) {
      setSelectedWord(allChapterWords[currentWordIndex - 1]);
    }
  };

  const handleWordUpdated = useCallback((updatedWord: WordData) => {
    setChapterData((prevData) => {
      const updatedMishnayot = prevData.mishnayot.map((m) => {
        const wordIndex = m.words.findIndex((w) => w.id === updatedWord.id);
        if (wordIndex === -1) return m;
        const newWords = [...m.words];
        newWords[wordIndex] = updatedWord;
        return {
          ...m,
          words: newWords
        };
      });
      return {
        ...prevData,
        mishnayot: updatedMishnayot
      };
    });

    setSelectedWord((prev) => (prev?.id === updatedWord.id ? updatedWord : prev));
  }, []);

  const handleScrollToMishnah = (num: number) => {
    const el = document.getElementById(`mishnah-${num}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      syncUrl(currentTractate, currentChapter, num, 'replace');
    }
  };

  const handleOpenFullTranslationForMishnah = (num: number) => {
    setSelectedMishnahForTrans(num);
    setShowFullTranslation(true);
    setTimeout(() => {
      const el = document.getElementById(`trans-mishnah-${num}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleSelectMishnahFromSearch = (
    tractateSlug: string,
    chapter: number,
    mishnahNum: number
  ) => {
    const tractate = SefariaService.getTractate(tractateSlug);
    if (tractate) {
      loadChapter(tractate, chapter, {
        targetMishnah: mishnahNum,
        historyMode: 'push',
        scrollToTop: false,
      });
    }
  };

  const handleExploreRoot = (root: string) => {
    const cleanRoot = root.replace(/[\s\-–—]/g, '');
    setSearchInitialQuery(cleanRoot);
    setSearchInitialMode('root');
    setIsSearchModalOpen(true);
  };

  const handleOpenSearch = () => {
    setSearchInitialQuery('');
    setSearchInitialMode('search');
    setIsSearchModalOpen(true);
  };

  const handleOpenBookmarks = () => {
    setSearchInitialQuery('');
    setSearchInitialMode('bookmarks');
    setIsSearchModalOpen(true);
  };

  const themeContainerClass =
    theme === 'dark'
      ? 'bg-[#181a1b] text-stone-100'
      : theme === 'sepia'
        ? 'bg-[#f5efe3] text-[#2c221a]'
        : 'bg-[#fbfbf9] text-stone-900';

  return (
    <div className={`min-h-screen ${themeContainerClass} flex flex-col font-sans transition-colors duration-150`}>
      {/* Top Navigation Bar */}
      <Header
        currentTractate={currentTractate}
        currentChapter={currentChapter}
        onSelectChapter={handleSelectChapter}
        onOpenTractateModal={() => setIsTractateModalOpen(true)}
        onOpenSearch={handleOpenSearch}
        onOpenBookmarks={handleOpenBookmarks}
        showInterlinear={showInterlinear}
        onToggleInterlinear={() => setShowInterlinear(!showInterlinear)}
        showFullTranslation={showFullTranslation}
        onToggleFullTranslation={() => setShowFullTranslation(!showFullTranslation)}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
        hebrewFont={hebrewFont}
        onChangeHebrewFont={setHebrewFont}
        theme={theme}
        onChangeTheme={setTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Dignified Book Chapter Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-serif tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-1.5">
            {currentTractate.shortTitle} · Chapter {currentChapter}
          </p>
          <h1
            dir="rtl"
            className="font-serifHe text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 font-bold tracking-tight"
          >
            {currentTractate.heTitle} · פרק {toHebrewNumeral(currentChapter)}
          </h1>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="py-24 text-center space-y-3">
            <Loader2 className="w-8 h-8 text-amber-600 animate-spin mx-auto" />
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Loading {currentTractate.shortTitle} Chapter {currentChapter} from Sefaria...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-center space-y-3 my-8">
            <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            <button
              onClick={() => loadChapter(currentTractate, currentChapter)}
              className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-semibold hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Mishnah Text Reader */}
        {!loading && !error && (
          <>
            <MishnahReader
              tractate={currentTractate}
              chapter={currentChapter}
              mishnayot={chapterData.mishnayot}
              selectedWord={selectedWord}
              onSelectWord={setSelectedWord}
              showInterlinear={showInterlinear}
              fontSize={fontSize}
              hebrewFont={hebrewFont}
              onOpenFullTranslationForMishnah={handleOpenFullTranslationForMishnah}
              onOpenSearchRoot={handleExploreRoot}
            />

            {/* Chapter Navigator Bar */}
            <ChapterBar
              tractate={currentTractate}
              chapter={currentChapter}
              mishnayot={chapterData.mishnayot}
              onSelectChapter={handleSelectChapter}
              onScrollToMishnah={handleScrollToMishnah}
            />
          </>
        )}
      </main>

      {/* Floating Word Inspector Popup / Card */}
      <WordInspector
        word={selectedWord}
        onClose={() => setSelectedWord(null)}
        onNextWord={handleNextWord}
        onPrevWord={handlePrevWord}
        hasNextWord={currentWordIndex < allChapterWords.length - 1}
        hasPrevWord={currentWordIndex > 0}
        onWordUpdated={handleWordUpdated}
        onExploreRoot={handleExploreRoot}
      />

      {/* Side Panel: Full Sefaria Translation */}
      {showFullTranslation && (
        <Suspense fallback={null}>
          <FullTranslationPanel
            isOpen={showFullTranslation}
            onClose={() => setShowFullTranslation(false)}
            tractate={currentTractate}
            chapter={currentChapter}
            mishnayot={chapterData.mishnayot}
            selectedMishnahNum={selectedMishnahForTrans}
            onSelectMishnah={(num) => handleScrollToMishnah(num)}
          />
        </Suspense>
      )}

      {/* Shas Tractate Selector Modal */}
      {isTractateModalOpen && (
        <Suspense fallback={null}>
          <TractateSelectorModal
            isOpen={isTractateModalOpen}
            onClose={() => setIsTractateModalOpen(false)}
            currentTractate={currentTractate}
            currentChapter={currentChapter}
            onSelect={handleSelectTractateAndChapter}
          />
        </Suspense>
      )}

      {/* Global Search & Shoresh (Root) Explorer Modal */}
      {isSearchModalOpen && (
        <Suspense fallback={null}>
          <ShasSearchModal
            isOpen={isSearchModalOpen}
            onClose={() => setIsSearchModalOpen(false)}
            onSelectMishnah={handleSelectMishnahFromSearch}
            initialQuery={searchInitialQuery}
            initialMode={searchInitialMode}
          />
        </Suspense>
      )}

      {/* Footer */}
      <footer className="mt-auto py-12 border-t border-stone-200/70 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400">
        <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <BrandLogo size="sm" />
          <div className="text-center sm:text-right text-[11px] text-stone-400 dark:text-stone-500">
            Hebrew text and lexical data via Sefaria Open API
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

