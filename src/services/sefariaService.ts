import { SederInfo, TractateInfo, ChapterData, MishnahData, WordData } from '../types';
import mishnahCatalog from '../data/mishnahCatalog.json';
import { PRELOADED_CHAPTERS } from '../data/preloadedChapters';
import { parseMishnah, cleanHebrewLetters } from '../utils/mishnaParser';

const CHAPTER_CACHE = new Map<string, ChapterData>();
const DYNAMIC_WORD_CACHE = new Map<string, WordData>();

// Purge legacy corrupted/bracketed chapter caches from localStorage
try {
  if (typeof window !== 'undefined' && window.localStorage) {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('mishna_') && !k.startsWith('mishna_v4_')) {
        keysToRemove.push(k);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  }
} catch {
  // Ignore
}

function cleanLexiconDefinition(raw: string): string {
  if (!raw) return '';
  let text = raw.replace(/<[^>]+>/g, ' ');
  text = text.replace(/\[.*?\]/g, ''); // strip etymology in brackets
  text = text.replace(/\([bB]\.\s*[hH]\.\)/g, ''); // strip (b. h.)
  text = text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  text = text.replace(/\s+/g, ' ').trim();
  text = text.replace(/^[\s—–\-:;,.]+/, '').trim();
  return text;
}

function parseLexiconEntries(
  entries: any[],
  cleanWord: string,
  prefixLabel = ''
): { translation: string; pos: string; shoresh?: string; binyan?: string; notes?: string } | null {
  if (!entries || !entries.length) return null;

  const sorted = [...entries].sort((a, b) => {
    const hwA = cleanHebrewLetters(a.headword || '');
    const hwB = cleanHebrewLetters(b.headword || '');
    const matchA = hwA === cleanWord ? 3 : (cleanWord.includes(hwA) ? 1 : 0);
    const matchB = hwB === cleanWord ? 3 : (cleanWord.includes(hwB) ? 1 : 0);
    if (matchB !== matchA) return matchB - matchA;

    const scoreLex = (lex: string) => {
      if (lex === 'Klein Dictionary') return 4;
      if (lex === 'BDB Augmented Strong') return 3;
      if (lex === 'Jastrow Dictionary') return 2;
      return 1;
    };
    return scoreLex(b.parent_lexicon) - scoreLex(a.parent_lexicon);
  });

  for (const item of sorted) {
    const hw = item.headword || '';
    const hwClean = cleanHebrewLetters(hw);
    const lex = item.parent_lexicon;
    const morph = item.content?.morphology;

    // 1. Klein Dictionary
    if (lex === 'Klein Dictionary' && item.content?.senses) {
      // In Rabbinic/Mishnaic Hebrew, prefer senses mentioning non-Jew/gentile if present
      const rabbinicSense = item.content.senses.find((s: any) =>
        s.definition && (s.definition.includes('non-Jew') || s.definition.includes('gentile'))
      );
      const targetSenses = rabbinicSense ? [rabbinicSense, ...item.content.senses] : item.content.senses;

      for (const s of targetSenses) {
        const def = cleanLexiconDefinition(s.definition);
        if (def && def.length > 1 && !def.startsWith('see ') && !def.startsWith('v. ') && !def.startsWith('inflected')) {
          const primary = def.split(/[.;]/)[0].trim();
          if (primary) {
            return {
              translation: `${prefixLabel}${primary}`,
              pos: morph || 'Noun / Term',
              shoresh: hwClean.length === 3 ? `${hwClean[0]} - ${hwClean[1]} - ${hwClean[2]}` : undefined,
              notes: `Source: Klein Dictionary (${hw})`
            };
          }
        }
      }
    }

    // 2. BDB Augmented Strong
    if (lex === 'BDB Augmented Strong' && item.content?.senses) {
      const senses = item.content.senses;
      for (const s of senses) {
        if (cleanWord.startsWith('מ') && s.senses) {
          const hiphil = s.senses.find((sub: any) => sub.grammar?.verbal_stem === 'Hiphil');
          if (hiphil?.senses?.[0]?.definition) {
            const def = cleanLexiconDefinition(hiphil.senses[0].definition);
            return {
              translation: `${prefixLabel}${def}`,
              pos: "Verb (Hif'il)",
              binyan: "Hif'il",
              shoresh: hwClean.length === 3 ? `${hwClean[0]} - ${hwClean[1]} - ${hwClean[2]}` : undefined,
              notes: `Hif'il of ${hw} (BDB)`
            };
          }
        }
        if (s.definition) {
          const def = cleanLexiconDefinition(s.definition).split(';')[0].trim();
          if (def && !def.startsWith('see ') && def.length > 1) {
            return {
              translation: `${prefixLabel}${def}`,
              pos: morph === 'v' ? 'Verb' : (morph || 'Noun'),
              shoresh: hwClean.length === 3 ? `${hwClean[0]} - ${hwClean[1]} - ${hwClean[2]}` : undefined,
              notes: `Source: BDB (${hw})`
            };
          }
        }
      }
    }

    // 3. Jastrow Dictionary
    if (lex === 'Jastrow Dictionary' && item.content?.senses) {
      for (const s of item.content.senses) {
        const rawDef = s.definition || '';
        const italicMatches = rawDef.match(/<i>(.*?)<\/i>/g);
        if (italicMatches) {
          for (const m of italicMatches) {
            const cleaned = cleanLexiconDefinition(m);
            if (cleaned && cleaned.length > 2 && !cleaned.includes('preced') && !cleaned.includes('same') && !cleaned.includes('v.')) {
              return {
                translation: `${prefixLabel}${cleaned}`,
                pos: morph || 'Rabbinic Term',
                shoresh: hwClean.length === 3 ? `${hwClean[0]} - ${hwClean[1]} - ${hwClean[2]}` : undefined,
                notes: `Source: Jastrow Dictionary (${hw})`
              };
            }
          }
        }
      }
    }
  }

  return null;
}

// Pre-fill cache with preloaded chapters
for (const [key, data] of Object.entries(PRELOADED_CHAPTERS)) {
  CHAPTER_CACHE.set(key, data);
}

export class SefariaService {
  /**
   * Get all 6 Orders of the Mishnah with all 63 tractates
   */
  static getSeders(): SederInfo[] {
    return mishnahCatalog as SederInfo[];
  }

  /**
   * Find tractate by its slug or title
   */
  static getTractate(slug: string): TractateInfo | undefined {
    const seders = this.getSeders();
    for (const seder of seders) {
      const found = seder.tractates.find(t => t.slug === slug || t.title === slug);
      if (found) return found;
    }
    return undefined;
  }

  /**
   * Fetch chapter text from Sefaria API or cache, and parse word-by-word
   */
  static async fetchChapter(tractateSlug: string, chapter: number): Promise<ChapterData> {
    const cacheKey = `${tractateSlug}_${chapter}`;
    const storageKey = `mishna_v4_${cacheKey}`;

    // 1. Check in-memory cache
    if (CHAPTER_CACHE.has(cacheKey)) {
      return CHAPTER_CACHE.get(cacheKey)!;
    }

    // 2. Check static pre-aligned AI datasets FIRST in /data/tractates/{slug}.json
    try {
      const cleanSlug = tractateSlug.toLowerCase().replace(/^mishnah_/, 'mishnah_');
      const staticUrl = `/data/tractates/${cleanSlug}.json`;
      const staticRes = await fetch(staticUrl);
      if (staticRes.ok) {
        const tractateMap = await staticRes.json();
        const chapterEntry = tractateMap[String(chapter)];
        if (chapterEntry && chapterEntry.mishnayot && chapterEntry.mishnayot.length > 0) {
          CHAPTER_CACHE.set(cacheKey, chapterEntry);
          try {
            localStorage.setItem(storageKey, JSON.stringify(chapterEntry));
          } catch {}
          return chapterEntry;
        }
      }
    } catch {
      // Fallback to cache or live Sefaria fetch
    }

    // 3. Check localStorage cache
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored) as ChapterData;
        CHAPTER_CACHE.set(cacheKey, parsed);
        return parsed;
      }
    } catch {
      // Ignore localStorage errors
    }

    // 4. Fetch from Sefaria API
    const tractate = this.getTractate(tractateSlug);
    const url = `https://www.sefaria.org/api/texts/${tractateSlug}.${chapter}?context=0`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Sefaria API returned status ${response.status}`);
      }
      const data = await response.json();

      const heMishnayot: string[] = Array.isArray(data.he) ? data.he : [data.he || ''];
      const enMishnayot: string[] = Array.isArray(data.text) ? data.text : [data.text || ''];

      const parsedMishnayot: MishnahData[] = heMishnayot.map((he, index) => {
        const en = enMishnayot[index] || '';
        return parseMishnah(he, en, chapter, index + 1);
      });

      const chapterData: ChapterData = {
        tractate: tractate || {
          title: tractateSlug.replace(/_/g, ' '),
          slug: tractateSlug,
          shortTitle: tractateSlug.replace(/^(Mishnah_|Pirkei_)/, ''),
          heTitle: data.heTitle || '',
          heShortTitle: data.heTitle?.replace(/^(משנה |פרקי )/, '') || '',
          enDesc: '',
          heDesc: '',
          chaptersCount: 1,
          mishnahCounts: [parsedMishnayot.length]
        },
        chapter,
        mishnayot: parsedMishnayot
      };

      CHAPTER_CACHE.set(cacheKey, chapterData);

      try {
        localStorage.setItem(storageKey, JSON.stringify(chapterData));
      } catch {
        // localStorage might be full
      }

      // Background pass: Resolve any remaining bracketed words across the chapter
      setTimeout(async () => {
        let hasUpdates = false;
        for (const mishnah of parsedMishnayot) {
          for (let i = 0; i < mishnah.words.length; i++) {
            const w = mishnah.words[i];
            if (w.translation.startsWith('[') && w.translation.endsWith(']')) {
              try {
                const resolved = await SefariaService.resolveWordTranslation(w);
                if (resolved && !resolved.translation.startsWith('[')) {
                  mishnah.words[i] = resolved;
                  hasUpdates = true;
                }
              } catch {}
            }
          }
        }
        if (hasUpdates) {
          try {
            localStorage.setItem(storageKey, JSON.stringify(chapterData));
          } catch {}
        }
      }, 50);

      return chapterData;
    } catch (err) {
      console.error(`Failed to fetch ${tractateSlug}.${chapter} from Sefaria:`, err);
      // Fallback to preloaded Berakhot 1 if network fails
      if (PRELOADED_CHAPTERS['Mishnah_Berakhot_1']) {
        return PRELOADED_CHAPTERS['Mishnah_Berakhot_1'];
      }
      throw err;
    }
  }

  /**
   * Speak Hebrew word using Web Speech API
   */
  static speakHebrew(text: string) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'he-IL';
    utterance.rate = 0.85;

    // Try finding Hebrew voice
    const voices = window.speechSynthesis.getVoices();
    const heVoice = voices.find(v => v.lang.startsWith('he'));
    if (heVoice) {
      utterance.voice = heVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  /**
   * Fetch raw Sefaria dictionary/lexicon entries for deep reference
   */
  static async fetchRawLexicon(word: string): Promise<any[]> {
    const clean = cleanHebrewLetters(word);
    if (!clean) return [];
    try {
      const res = await fetch(`https://www.sefaria.org/api/words/${encodeURIComponent(clean)}`);
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn('Could not fetch raw lexicon:', err);
    }
    return [];
  }

  /**
   * Dynamically resolve and enhance a word's translation from Sefaria lexicon
   */
  static async resolveWordTranslation(word: WordData): Promise<WordData> {
    const isPlaceholder =
      !word.translation ||
      (word.translation.startsWith('[') && word.translation.endsWith(']')) ||
      word.translation === '—';

    // If already has high-quality curated translation and root, keep it
    if (!isPlaceholder && word.shoresh && word.shoresh !== '—' && word.grammar?.pos !== 'Mishnaic Term') {
      return word;
    }

    const consonants = word.consonants;
    if (!consonants) return word;

    // 1. Check in-memory cache
    if (DYNAMIC_WORD_CACHE.has(consonants)) {
      const cached = DYNAMIC_WORD_CACHE.get(consonants)!;
      return {
        ...word,
        translation: cached.translation,
        shoresh: cached.shoresh || word.shoresh,
        grammar: {
          ...word.grammar,
          ...cached.grammar
        }
      };
    }

    // 2. Check localStorage
    try {
      const stored = localStorage.getItem(`mishna_dyn_word_${consonants}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        DYNAMIC_WORD_CACHE.set(consonants, parsed);
        return {
          ...word,
          translation: parsed.translation,
          shoresh: parsed.shoresh || word.shoresh,
          grammar: {
            ...word.grammar,
            ...parsed.grammar
          }
        };
      }
    } catch {
      // ignore
    }

    // 3. Query Sefaria lexicon API for direct consonants
    try {
      const rawEntries = await this.fetchRawLexicon(consonants);
      let parsed = parseLexiconEntries(rawEntries, consonants);

      // If no entries and starts with prefix, try stripping prefix
      if (!parsed && consonants.length > 3) {
        const prefixes = [
          { p: 'ומ', label: 'and from ', strip: 2 },
          { p: 'וש', label: 'and that ', strip: 2 },
          { p: 'ו', label: 'and ', strip: 1 },
          { p: 'ש', label: 'that ', strip: 1 },
          { p: 'ה', label: 'the ', strip: 1 },
          { p: 'ב', label: 'in ', strip: 1 },
          { p: 'ל', label: 'to ', strip: 1 },
          { p: 'כ', label: 'as ', strip: 1 },
          { p: 'מ', label: 'from ', strip: 1 }
        ];

        for (const pref of prefixes) {
          if (consonants.startsWith(pref.p)) {
            const stem = consonants.slice(pref.strip);
            if (stem.length >= 3) {
              const stemEntries = await this.fetchRawLexicon(stem);
              parsed = parseLexiconEntries(stemEntries, stem, pref.label);
              if (parsed) break;
            }
          }
        }
      }

      // If still not parsed, try Mishnaic lemmatization (participles, plural, future, object suffixes)
      if (!parsed) {
        let base = consonants;
        if (base.startsWith('ו') || base.startsWith('ש') || base.startsWith('ה') || base.startsWith('ב') || base.startsWith('ל') || base.startsWith('כ')) {
          base = base.slice(1);
        }

        const lemmaCandidates: Array<{ lemma: string; typeHint?: string; prefixText?: string; suffixText?: string }> = [];

        // Plural masculine in -in / -im (e.g. אוחזין -> אחז, בודקין -> בדק)
        if (base.endsWith('ין') || base.endsWith('ים')) {
          const cut = base.slice(0, -2);
          if (cut.length === 4 && cut[1] === 'ו') {
            lemmaCandidates.push({ lemma: cut[0] + cut[2] + cut[3], typeHint: "Pa'al Participle (Plural)", suffixText: ' (pl.)' });
          }
          lemmaCandidates.push({ lemma: cut });
        }
        // Plural feminine in -ot (e.g. ממונות -> ממון, חבלות -> חבלה)
        if (base.endsWith('ות')) {
          const cut = base.slice(0, -2);
          lemmaCandidates.push({ lemma: cut });
          lemmaCandidates.push({ lemma: cut + 'ה' });
        }
        // Future prefix Yud (e.g. יחלוקו -> חלק, ישבע -> שבע)
        if (base.startsWith('י') && base.length >= 4) {
          let core = base.slice(1);
          if (core.endsWith('ו')) core = core.slice(0, -1);
          core = core.replace(/ו/g, '');
          if (core.length === 3) {
            lemmaCandidates.push({ lemma: core, typeHint: 'Verb (Future)', prefixText: 'shall / will ' });
          }
        }
        // Object suffixes -tiah / -tiha (e.g. מצאתיה -> מצא)
        if (base.endsWith('תיה') || base.endsWith('תיו')) {
          const cut = base.slice(0, -3);
          lemmaCandidates.push({ lemma: cut, suffixText: ' it' });
        }

        for (const cand of lemmaCandidates) {
          const entries = await this.fetchRawLexicon(cand.lemma);
          if (entries && entries.length > 0) {
            const res = parseLexiconEntries(entries, cand.lemma, cand.prefixText || '');
            if (res) {
              parsed = {
                ...res,
                translation: `${res.translation}${cand.suffixText || ''}`,
                pos: cand.typeHint || res.pos,
                shoresh: cand.lemma.length === 3 ? `${cand.lemma[0]} - ${cand.lemma[1]} - ${cand.lemma[2]}` : res.shoresh
              };
              break;
            }
          }
        }
      }

      if (parsed) {
        const updated: WordData = {
          ...word,
          translation: parsed.translation,
          shoresh: parsed.shoresh || word.shoresh,
          grammar: {
            ...word.grammar,
            pos: parsed.pos || word.grammar.pos,
            binyan: parsed.binyan || word.grammar.binyan,
            shoresh: parsed.shoresh || word.grammar.shoresh,
            notes: parsed.notes || word.grammar.notes
          }
        };

        DYNAMIC_WORD_CACHE.set(consonants, updated);
        try {
          localStorage.setItem(`mishna_dyn_word_${consonants}`, JSON.stringify(updated));
        } catch {
          // ignore localStorage errors
        }

        return updated;
      }
    } catch (err) {
      console.warn(`Could not resolve translation for ${word.cleanWord}:`, err);
    }

    return word;
  }
}

