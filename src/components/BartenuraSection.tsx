import React, { useMemo } from 'react';
import { BartenuraComment, BartenuraLang } from '../types';
import { sanitizeCommentaryHtml } from '../utils/htmlSanitizer';
import { Loader2, ScrollText, X } from 'lucide-react';

interface BartenuraSectionProps {
  mishnahNum: number;
  comments?: BartenuraComment[];
  loading: boolean;
  error: string | null;
  lang: BartenuraLang;
  onChangeLang: (lang: BartenuraLang) => void;
  fontClass: string;
  fontSize: number;
  onRetry?: () => void;
  onClose?: () => void;
}

export const BartenuraSection: React.FC<BartenuraSectionProps> = ({
  mishnahNum,
  comments,
  loading,
  error,
  lang,
  onChangeLang,
  fontClass,
  fontSize,
  onRetry,
  onClose
}) => {
  const sanitizedComments = useMemo(() => {
    if (!comments) return [];
    return comments.map((c) => ({
      he: sanitizeCommentaryHtml(c.he),
      en: sanitizeCommentaryHtml(c.en)
    }));
  }, [comments]);

  const hebrewBartenuraSize = Math.max(16, Math.min(24, Math.round(fontSize * 0.62)));

  return (
    <div
      className="bartenura-panel mt-7 rounded-xl border border-stone-200/80 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-900/50 p-4 sm:p-5 transition-colors"
      aria-label={`Bartenura commentary on Mishnah ${mishnahNum}`}
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3.5 border-b border-stone-200/70 dark:border-stone-800/80">
        <div className="flex items-center gap-2">
          <ScrollText className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
          <span
            dir="rtl"
            lang="he"
            className="font-serifHe font-bold text-base text-stone-900 dark:text-stone-100"
          >
            ר״ע מברטנורא
          </span>
          <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
            · Bartenura
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div
            className="inline-flex items-center rounded-lg border border-stone-200 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 p-0.5 text-[11px] font-medium"
            role="group"
            aria-label="Bartenura language"
          >
            {(
              [
                { id: 'he', label: 'עברית' },
                { id: 'en', label: 'English' },
                { id: 'both', label: 'Both' }
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => onChangeLang(opt.id)}
                className={`px-2 py-0.5 rounded-md transition-colors ${
                  lang === opt.id
                    ? 'bg-amber-100 text-amber-900 dark:bg-amber-900/50 dark:text-amber-200 font-semibold'
                    : 'text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 dark:hover:text-stone-200 dark:hover:bg-stone-800 transition-colors"
              title="Hide Bartenura for this Mishnah"
              aria-label="Hide Bartenura for this Mishnah"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Body */}
      {loading && !comments && (
        <div className="py-4 flex items-center justify-center gap-2 text-xs text-stone-500 dark:text-stone-400">
          <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
          <span>Loading Bartenura commentary from Sefaria...</span>
        </div>
      )}

      {error && !comments && (
        <div className="py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-red-600 dark:text-red-400">
          <span>{error}</span>
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="px-2.5 py-1 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          )}
        </div>
      )}

      {!loading && !error && sanitizedComments.length === 0 && (
        <p className="text-xs text-stone-500 dark:text-stone-400 italic">
          No Bartenura commentary available for this Mishnah.
        </p>
      )}

      {sanitizedComments.length > 0 && (
        <div className="space-y-3.5">
          {sanitizedComments.map((comment, idx) => {
            const showHe = (lang === 'he' || lang === 'both') && Boolean(comment.he);
            const showEn = (lang === 'en' || lang === 'both') && Boolean(comment.en);
            const fallbackToHe = lang === 'en' && !comment.en && Boolean(comment.he);
            const fallbackToEn = lang === 'he' && !comment.he && Boolean(comment.en);

            return (
              <div
                key={idx}
                className="pb-3 border-b border-stone-200/50 dark:border-stone-800/60 last:border-b-0 last:pb-0 space-y-2"
              >
                {(showHe || fallbackToHe) && (
                  <div
                    dir="rtl"
                    lang="he"
                    style={{ fontSize: `${hebrewBartenuraSize}px` }}
                    className={`${fontClass} leading-[1.75] text-stone-800 dark:text-stone-200 [&_b]:font-bold [&_b]:text-stone-950 dark:[&_b]:text-amber-200`}
                    dangerouslySetInnerHTML={{ __html: comment.he }}
                  />
                )}

                {(showEn || fallbackToEn) && (
                  <div
                    dir="ltr"
                    lang="en"
                    className="text-sm leading-relaxed text-stone-600 dark:text-stone-300 font-sans [&_b]:font-semibold [&_b]:text-stone-900 dark:[&_b]:text-stone-100 [&_i]:italic"
                    dangerouslySetInnerHTML={{ __html: comment.en }}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
