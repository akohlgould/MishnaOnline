import { WordData, MishnahData } from '../types';
import { MISHNA_LEXICON, COMMON_MISHNA_ROOTS } from '../data/lexiconData';

export function stripNikkud(text: string): string {
  // Remove Hebrew vowels, cantillation marks, and dagesh
  return text.replace(/[\u0591-\u05BD\u05BF-\u05C7]/g, '');
}

export function cleanHebrewLetters(text: string): string {
  return stripNikkud(text).replace(/[^א-ת]/g, '');
}

export function separatePunctuation(token: string): { word: string; punct: string } {
  // Separate trailing Hebrew colon (׃), period, comma, quotes, parentheses
  const matchEnd = token.match(/([.:,;”"'\-׃־)\]]+)$/);
  const punct = matchEnd ? matchEnd[1] : '';
  let word = punct ? token.slice(0, -punct.length) : token;
  
  // Separate leading parens or quotes
  const matchStart = word.match(/^([(\["'״]+)/);
  if (matchStart) {
    const leadPunct = matchStart[1];
    word = word.slice(leadPunct.length);
  }
  return { word, punct };
}

import { toHebrewNumeral } from './hebrewNumerals';
export { toHebrewNumeral };

// Generate phonetic transliteration from vocalized Hebrew
export function transliterateHebrew(vocalized: string): string {
  const charMap: Record<string, string> = {
    'א': '', 'ב': 'v', 'ג': 'g', 'ד': 'd', 'ה': 'h', 'ו': 'v', 'ז': 'z', 'ח': 'ch', 'ט': 't',
    'י': 'y', 'כ': 'ch', 'ך': 'ch', 'ל': 'l', 'מ': 'm', 'ם': 'm', 'נ': 'n', 'ן': 'n', 'ס': 's',
    'ע': "'", 'פ': 'f', 'ף': 'f', 'צ': 'tz', 'ץ': 'tz', 'ק': 'k', 'ר': 'r', 'ש': 'sh', 'ת': 't'
  };

  const vowelMap: Record<string, string> = {
    '\u05B8': 'a', // Kamatz
    '\u05B7': 'a', // Patach
    '\u05B6': 'e', // Segol
    '\u05B5': 'ei', // Tzere
    '\u05B4': 'i', // Chiriq
    '\u05B9': 'o', // Cholam
    '\u05BA': 'o', // Cholam Chaser
    '\u05BB': 'u', // Qubutz
    '\u05B0': 'e', // Sheva
    '\u05B1': 'e', // Chataf Segol
    '\u05B2': 'a', // Chataf Patach
    '\u05B3': 'o', // Chataf Kamatz
  };

  let result = '';
  for (let i = 0; i < vocalized.length; i++) {
    const char = vocalized[i];
    
    // Check Dagesh
    if (char === '\u05BC') {
      const prev = vocalized[i - 1];
      if (prev === 'ב') result = result.slice(0, -1) + 'b';
      else if (prev === 'כ' || prev === 'ך') result = result.slice(0, -1) + 'k';
      else if (prev === 'פ' || prev === 'ף') result = result.slice(0, -1) + 'p';
      continue;
    }

    if (char === '\u05C1') continue; // Shin dot
    if (char === '\u05C2') { // Sin dot
      result = result.slice(0, -2) + 's';
      continue;
    }

    if (vowelMap[char]) {
      result += vowelMap[char];
    } else if (charMap[char] !== undefined) {
      result += charMap[char];
    }
  }

  const cleaned = result.replace(/''+/g, "'").replace(/^-|-$/g, '');
  return cleaned || vocalized;
}

// Normalize final letters to regular letters for root matching
function normalizeFinalLetters(str: string): string {
  return str
    .replace(/ך/g, 'כ')
    .replace(/ם/g, 'מ')
    .replace(/ן/g, 'נ')
    .replace(/ף/g, 'פ')
    .replace(/ץ/g, 'צ');
}

const PREFIX_DECOMPOSITION: Array<{ pfx: string; hePrefix: string; name: string; meaning: string; label: string }> = [
  { pfx: 'וכש', hePrefix: 'וּכְשֶׁ־', name: 'Conjunction + Relative', meaning: 'and when / and while', label: 'and when ' },
  { pfx: 'מש', hePrefix: 'מִשֶּׁ־', name: 'Preposition + Relative', meaning: 'from the time that', label: 'from the time that ' },
  { pfx: 'וש', hePrefix: 'וְשֶׁ־', name: 'Conjunction + Relative', meaning: 'and that / and which', label: 'and that ' },
  { pfx: 'כש', hePrefix: 'כְּשֶׁ־', name: 'Relative Particle', meaning: 'when / as', label: 'when ' },
  { pfx: 'וב', hePrefix: 'וּבְ־', name: 'Conjunction + Preposition', meaning: 'and in / and with', label: 'and in ' },
  { pfx: 'ול', hePrefix: 'וּלְ־', name: 'Conjunction + Preposition', meaning: 'and to / and for', label: 'and to ' },
  { pfx: 'ומ', hePrefix: 'וּמִ־', name: 'Conjunction + Preposition', meaning: 'and from', label: 'and from ' },
  { pfx: 'וכ', hePrefix: 'וּכְ־', name: 'Conjunction + Preposition', meaning: 'and like / and as', label: 'and as ' },
  { pfx: 'שב', hePrefix: 'שֶׁבְּ־', name: 'Relative + Preposition', meaning: 'that in / which is in', label: 'that in ' },
  { pfx: 'של', hePrefix: 'שֶׁלְּ־', name: 'Relative + Preposition', meaning: 'of / belonging to', label: 'of ' },
  { pfx: 'שמ', hePrefix: 'שֶׁמִּ־', name: 'Relative + Preposition', meaning: 'that from', label: 'that from ' },
  { pfx: 'וה', hePrefix: 'וְהַ־', name: 'Conjunction + Article', meaning: 'and the', label: 'and the ' },
  { pfx: 'מה', hePrefix: 'מֵהַ־', name: 'Preposition + Article', meaning: 'from the', label: 'from the ' },
  { pfx: 'בה', hePrefix: 'בַּ־', name: 'Preposition + Article', meaning: 'in the', label: 'in the ' },
  { pfx: 'לה', hePrefix: 'לַ־', name: 'Preposition + Article', meaning: 'to the', label: 'to the ' },
  { pfx: 'כה', hePrefix: 'כַּ־', name: 'Preposition + Article', meaning: 'like the', label: 'like the ' },
  { pfx: 'ו', hePrefix: 'וְ־', name: 'Conjunction', meaning: 'and / but', label: 'and ' },
  { pfx: 'ש', hePrefix: 'שֶׁ־', name: 'Relative Particle', meaning: 'that / which / when', label: 'that ' },
  { pfx: 'ה', hePrefix: 'הַ־', name: 'Definite Article', meaning: 'the', label: 'the ' },
  { pfx: 'ב', hePrefix: 'בְּ־', name: 'Preposition', meaning: 'in / with / at', label: 'in ' },
  { pfx: 'ל', hePrefix: 'לְ־', name: 'Preposition', meaning: 'to / for', label: 'to ' },
  { pfx: 'מ', hePrefix: 'מִ־', name: 'Preposition', meaning: 'from', label: 'from ' },
  { pfx: 'כ', hePrefix: 'כְּ־', name: 'Preposition', meaning: 'as / like', label: 'as ' }
];

const SUFFIX_DECOMPOSITION: Array<{ sfx: string; heSuffix: string; name: string; meaning: string; label: string }> = [
  { sfx: 'תיהם', heSuffix: '־ְתֵיהֶם', name: 'Pronominal Plural Suffix', meaning: 'their', label: ' of theirs' },
  { sfx: 'תיהן', heSuffix: '־ְתֵיהֶן', name: 'Pronominal Plural Suffix', meaning: 'their (f.)', label: ' of theirs (f.)' },
  { sfx: 'יהם', heSuffix: '־ֵיהֶם', name: 'Pronominal Plural Suffix', meaning: 'their (m.)', label: ' (their)' },
  { sfx: 'יהן', heSuffix: '־ֵיהֶן', name: 'Pronominal Plural Suffix', meaning: 'their (f.)', label: ' (their f.)' },
  { sfx: 'תם', heSuffix: '־ְתָם', name: 'Pronominal Suffix', meaning: 'their', label: ' (their)' },
  { sfx: 'תן', heSuffix: '־ְתָן', name: 'Pronominal Suffix', meaning: 'their (f.)', label: ' (their f.)' },
  { sfx: 'ינו', heSuffix: '־ֵינוּ', name: 'Pronominal Plural Suffix', meaning: 'our', label: ' (our)' },
  { sfx: 'כם', heSuffix: '־ְכֶם', name: 'Pronominal Suffix', meaning: 'your (pl.m.)', label: ' (your)' },
  { sfx: 'הם', heSuffix: '־ָהֶם', name: 'Pronominal Suffix', meaning: 'their (m.)', label: ' (their)' },
  { sfx: 'הן', heSuffix: '־ָהֶן', name: 'Pronominal Suffix', meaning: 'their (f.)', label: ' (their f.)' },
  { sfx: 'ין', heSuffix: '־ִין', name: 'Masc. Plural (Mishnaic)', meaning: 'plural masculine', label: ' (pl.)' },
  { sfx: 'ים', heSuffix: '־ִים', name: 'Masc. Plural', meaning: 'plural masculine', label: ' (pl.)' },
  { sfx: 'ות', heSuffix: '־וֹת', name: 'Fem. Plural', meaning: 'plural feminine', label: ' (pl.)' },
  { sfx: 'נו', heSuffix: '־ֵנוּ', name: 'Pronominal Suffix', meaning: 'we / our', label: ' (our)' },
  { sfx: 'יו', heSuffix: '־ָיו', name: 'Pronominal Plural Suffix', meaning: 'his', label: ' (his)' },
  { sfx: 'תי', heSuffix: '־ְתִּי', name: 'Past 1st Person Suffix', meaning: 'I did', label: ' (I)' },
  { sfx: 'ך', heSuffix: '־ְךָ', name: 'Pronominal Suffix', meaning: 'your', label: ' (your)' },
  { sfx: 'ו', heSuffix: '־וֹ', name: 'Pronominal Suffix / Past 3pl', meaning: 'his / him / it / they', label: ' (his / it)' },
  { sfx: 'ה', heSuffix: '־ָהּ', name: 'Pronominal Suffix / Past 3fs', meaning: 'her / it', label: ' (her / it)' }
];

function findLexiconCandidate(stemKey: string) {
  if (MISHNA_LEXICON[stemKey]) {
    return { key: stemKey, item: MISHNA_LEXICON[stemKey] };
  }

  // Construct ending in Tav -> Hei (e.g. הנאת -> הנאה, תרומת -> תרומה, טמאת -> טומאה)
  if (stemKey.endsWith('ת') && stemKey.length > 2) {
    const withHe = stemKey.slice(0, -1) + 'ה';
    if (MISHNA_LEXICON[withHe]) {
      return { key: withHe, item: MISHNA_LEXICON[withHe] };
    }
  }

  // Malei / chaser variations
  if (!stemKey.includes('ו') && stemKey.length === 3) {
    const withVav1 = `${stemKey[0]}ו${stemKey.slice(1)}`;
    if (MISHNA_LEXICON[withVav1]) return { key: withVav1, item: MISHNA_LEXICON[withVav1] };
    const withVav2 = `${stemKey.slice(0, 2)}ו${stemKey[2]}`;
    if (MISHNA_LEXICON[withVav2]) return { key: withVav2, item: MISHNA_LEXICON[withVav2] };
  }
  if (!stemKey.includes('י') && stemKey.length >= 3) {
    const withYud = `${stemKey[0]}י${stemKey.slice(1)}`;
    if (MISHNA_LEXICON[withYud]) return { key: withYud, item: MISHNA_LEXICON[withYud] };
  }
  if (stemKey.includes('ו')) {
    const noVav = stemKey.replace(/ו/g, '');
    if (MISHNA_LEXICON[noVav]) return { key: noVav, item: MISHNA_LEXICON[noVav] };
  }
  if (stemKey.includes('י')) {
    const noYud = stemKey.replace(/י/g, '');
    if (MISHNA_LEXICON[noYud]) return { key: noYud, item: MISHNA_LEXICON[noYud] };
  }

  return null;
}

function cleanRootMeaning(shoreshKey: string): string {
  const raw = COMMON_MISHNA_ROOTS[shoreshKey];
  if (!raw) return shoreshKey;
  const noTo = raw.replace(/^to\s+/, '');
  return noTo.split('/')[0].trim();
}

export function parseWordToken(token: string, wordId: string): WordData {
  const { word, punct } = separatePunctuation(token);
  const consonants = cleanHebrewLetters(word);

  // 1. Direct match in pre-curated lexicon
  if (MISHNA_LEXICON[consonants]) {
    const item = MISHNA_LEXICON[consonants];
    return {
      id: wordId,
      raw: token,
      cleanWord: word,
      consonants,
      punctuation: punct,
      translation: item.translation,
      shoresh: item.shoresh,
      transliteration: item.transliteration || transliterateHebrew(word),
      grammar: {
        pos: item.grammar.pos,
        binyan: item.grammar.binyan,
        tense: item.grammar.tense,
        gender: item.grammar.gender,
        number: item.grammar.number,
        person: item.grammar.person,
        prefixes: item.grammar.prefixes,
        suffixes: item.grammar.suffixes,
        notes: item.grammar.notes,
        shoresh: item.shoresh
      }
    };
  }

  // 2. Prefixes + Lexicon lookup
  for (const p of PREFIX_DECOMPOSITION) {
    if (consonants.startsWith(p.pfx) && consonants.length > p.pfx.length) {
      const stem = consonants.slice(p.pfx.length);
      const foundStem = findLexiconCandidate(stem);
      if (foundStem) {
        const item = foundStem.item;
        return {
          id: wordId,
          raw: token,
          cleanWord: word,
          consonants,
          punctuation: punct,
          translation: `${p.label}${item.translation}`,
          shoresh: item.shoresh,
          transliteration: transliterateHebrew(word),
          grammar: {
            pos: item.grammar.pos,
            binyan: item.grammar.binyan,
            tense: item.grammar.tense,
            prefixes: [{ hePrefix: p.hePrefix, name: p.name, meaning: p.meaning }, ...(item.grammar.prefixes || [])],
            suffixes: item.grammar.suffixes,
            notes: item.grammar.notes,
            shoresh: item.shoresh
          }
        };
      }

      // Prefix + Suffix + Lexicon lookup
      for (const s of SUFFIX_DECOMPOSITION) {
        if (stem.endsWith(s.sfx) && stem.length > s.sfx.length + 1) {
          const base = stem.slice(0, -s.sfx.length);
          const foundBase = findLexiconCandidate(base);
          if (foundBase) {
            const item = foundBase.item;
            const suffixNote = s.sfx === 'ין' || s.sfx === 'ים' || s.sfx === 'ות' ? '' : s.label;
            return {
              id: wordId,
              raw: token,
              cleanWord: word,
              consonants,
              punctuation: punct,
              translation: `${p.label}${item.translation}${suffixNote}`,
              shoresh: item.shoresh,
              transliteration: transliterateHebrew(word),
              grammar: {
                pos: item.grammar.pos,
                binyan: item.grammar.binyan,
                tense: item.grammar.tense,
                prefixes: [{ hePrefix: p.hePrefix, name: p.name, meaning: p.meaning }, ...(item.grammar.prefixes || [])],
                suffixes: [{ heSuffix: s.heSuffix, name: s.name, meaning: s.meaning }, ...(item.grammar.suffixes || [])],
                notes: item.grammar.notes,
                shoresh: item.shoresh
              }
            };
          }
        }
      }
    }
  }

  // 3. Suffix only + Lexicon lookup
  for (const s of SUFFIX_DECOMPOSITION) {
    if (consonants.endsWith(s.sfx) && consonants.length > s.sfx.length + 1) {
      const base = consonants.slice(0, -s.sfx.length);
      const foundBase = findLexiconCandidate(base);
      if (foundBase) {
        const item = foundBase.item;
        const suffixNote = s.sfx === 'ין' || s.sfx === 'ים' || s.sfx === 'ות' ? '' : s.label;
        return {
          id: wordId,
          raw: token,
          cleanWord: word,
          consonants,
          punctuation: punct,
          translation: `${item.translation}${suffixNote}`,
          shoresh: item.shoresh,
          transliteration: transliterateHebrew(word),
          grammar: {
            pos: item.grammar.pos,
            binyan: item.grammar.binyan,
            tense: item.grammar.tense,
            prefixes: item.grammar.prefixes,
            suffixes: [{ heSuffix: s.heSuffix, name: s.name, meaning: s.meaning }, ...(item.grammar.suffixes || [])],
            notes: item.grammar.notes,
            shoresh: item.shoresh
          }
        };
      }
    }
  }

  // 4. Morphological Prefix & Suffix Extraction for Verbs & Roots
  let pfxLabel = '';
  let prefixesList: Array<{ hePrefix: string; name: string; meaning: string }> = [];
  let stem = consonants;

  for (const p of PREFIX_DECOMPOSITION) {
    if (consonants.startsWith(p.pfx) && consonants.length > p.pfx.length + 2) {
      stem = consonants.slice(p.pfx.length);
      pfxLabel = p.label;
      prefixesList = [{ hePrefix: p.hePrefix, name: p.name, meaning: p.meaning }];
      break;
    }
  }

  let sfxLabel = '';
  let suffixesList: Array<{ heSuffix: string; name: string; meaning: string }> = [];
  let core = stem;
  let isPlural = false;

  for (const s of SUFFIX_DECOMPOSITION) {
    if (stem.endsWith(s.sfx) && stem.length > s.sfx.length + 2) {
      core = stem.slice(0, -s.sfx.length);
      sfxLabel = s.label;
      suffixesList = [{ heSuffix: s.heSuffix, name: s.name, meaning: s.meaning }];
      if (s.sfx === 'ין' || s.sfx === 'ים' || s.sfx === 'ות') {
        isPlural = true;
      }
      break;
    }
  }

  const normCore = normalizeFinalLetters(core);

  // 5. Verbal and Nominal Patterns
  // A. Verbal Noun (Shem Pe'ulah): C1-C2-י-C3 or C1-C2-י-C3-ה (e.g. בדיקה, שמירה, שחיטה, טבילה, קצירה)
  if (normCore.length === 5 && normCore[2] === 'י' && normCore.endsWith('ה')) {
    const rKey = `${normCore[0]}${normCore[1]}${normCore[3]}`;
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}act of ${m}ing${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verbal Noun (Shem Peulah)',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          suffixes: suffixesList.length ? suffixesList : undefined,
          notes: `Verbal noun of root ${shoresh}.`
        }
      };
    }
  }

  // B. Hif'il Participle: מ-C1-C2-י-C3 (e.g. מאכיל, מפריש, מוציא, מביא, מכניס)
  if (normCore.startsWith('מ') && normCore.length === 5 && normCore[3] === 'י') {
    const rKey = `${normCore[1]}${normCore[2]}${normCore[4]}`;
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      const verbTrans = isPlural ? `they cause to ${m}` : `causes to ${m}`;
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}${verbTrans}${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb',
          binyan: "Hif'il",
          tense: 'Present / Participle (Beinoni)',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          suffixes: suffixesList.length ? suffixesList : undefined,
          notes: `Hif'il causative participle of root ${shoresh}.`
        }
      };
    }
  }

  // C. Hif'il Past: ה-C1-C2-י-C3 (e.g. האכיל, הפריש, הוציא, הביא, הכניס)
  if (normCore.startsWith('ה') && normCore.length === 5 && normCore[3] === 'י') {
    const rKey = `${normCore[1]}${normCore[2]}${normCore[4]}`;
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      const verbTrans = isPlural ? `they caused to ${m}` : `caused to ${m}`;
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}${verbTrans}${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb',
          binyan: "Hif'il",
          tense: 'Past',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          suffixes: suffixesList.length ? suffixesList : undefined,
          notes: `Hif'il past of root ${shoresh}.`
        }
      };
    }
  }

  // D. Pi'el Participle: מ-C1-C2-C3 (e.g. מברך, מלמד, משלם, מחייב, מקדש, מטהר)
  if (normCore.startsWith('מ') && normCore.length === 4) {
    const rKey = normCore.slice(1);
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      const verbTrans = isPlural ? `they ${m}` : `${m}s`;
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}${verbTrans}${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb',
          binyan: "Pi'el",
          tense: 'Present / Participle (Beinoni)',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          suffixes: suffixesList.length ? suffixesList : undefined,
          notes: `Pi'el participle of root ${shoresh}.`
        }
      };
    }
  }

  // E. Pa'al Participle (Beinoni): C1-ו-C2-C3 (e.g. אוכל, שומר, כותב, בודק, פוטר, חולק, נותן)
  if (normCore.length === 4 && normCore[1] === 'ו') {
    const rKey = `${normCore[0]}${normCore[2]}${normCore[3]}`;
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      const verbTrans = isPlural ? `they ${m}` : `${m}s`;
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}${verbTrans}${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb',
          binyan: "Pa'al",
          tense: 'Present / Participle (Beinoni)',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          suffixes: suffixesList.length ? suffixesList : undefined,
          notes: `Pa'al active participle of root ${shoresh}.`
        }
      };
    }
  }

  // F. Pa'ul Passive Participle: C1-C2-ו-C3 (e.g. אסור, פטור, שחוט, כתוב, שמור)
  if (normCore.length === 4 && normCore[2] === 'ו') {
    const rKey = `${normCore[0]}${normCore[1]}${normCore[3]}`;
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      const verbTrans = isPlural ? `are ${m}ed` : `is ${m}ed`;
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}${verbTrans}${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb / Adjective',
          binyan: "Pa'al (Pa'ul)",
          tense: 'Passive Participle',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          suffixes: suffixesList.length ? suffixesList : undefined,
          notes: `Pa'ul passive participle of root ${shoresh}.`
        }
      };
    }
  }

  // G. Nif'al: נ-C1-C2-C3 (e.g. נאכל, נעשה, נאמר, נמצא, נפסל, נשחט)
  if (normCore.startsWith('נ') && normCore.length === 4) {
    const rKey = normCore.slice(1);
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      const verbTrans = isPlural ? `are ${m}ed` : `is ${m}ed`;
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}${verbTrans}${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb',
          binyan: "Nif'al",
          tense: 'Participle / Past',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          suffixes: suffixesList.length ? suffixesList : undefined,
          notes: `Nif'al passive/reflexive of root ${shoresh}.`
        }
      };
    }
  }

  // H. Nitpa'el: נת-C1-C2-C3 or נשת-C1-C2-C3 (e.g. נתקדש, נתבטל, נתערב, נשתנה)
  if (normCore.startsWith('נת') && normCore.length === 5) {
    const rKey = normCore.slice(2);
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}became ${m}ed${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb',
          binyan: "Nitpa'el",
          tense: 'Past',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          suffixes: suffixesList.length ? suffixesList : undefined,
          notes: `Nitpa'el Mishnaic reflexive of root ${shoresh}.`
        }
      };
    }
  }
  if (normCore.startsWith('נשת') && normCore.length === 6) {
    const rKey = `ש${normCore.slice(3)}`;
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}became ${m}ed${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb',
          binyan: "Nitpa'el",
          tense: 'Past',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          suffixes: suffixesList.length ? suffixesList : undefined,
          notes: `Nitpa'el Mishnaic reflexive of root ${shoresh}.`
        }
      };
    }
  }

  // I. Future Tense: י-C1-C2-C3 or ת-C1-C2-C3 or נ-C1-C2-C3 or א-C1-C2-C3
  if ((normCore.startsWith('י') || normCore.startsWith('ת') || normCore.startsWith('נ') || normCore.startsWith('א')) && normCore.length === 4) {
    const rKey = normCore.slice(1);
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      const subj = isPlural ? 'they shall ' : (normCore.startsWith('א') ? 'I shall ' : 'shall ');
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}${subj}${m}${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb',
          binyan: "Pa'al",
          tense: 'Future',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          suffixes: suffixesList.length ? suffixesList : undefined,
          notes: `Future tense of root ${shoresh}.`
        }
      };
    }
  }

  // J. Weak Root Conjugations (ל״ה, ע״ו, פ״י)
  // ל״ה past plural: C1-C2-ו (e.g. עשו -> עשה, שתו -> שתה, בנו -> בנה, ראו -> ראה)
  if (normCore.length === 3 && normCore.endsWith('ו')) {
    const rKey = `${normCore.slice(0, 2)}ה`;
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}they ${m}ed${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb',
          binyan: "Pa'al",
          tense: 'Past Plural',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          notes: `Past plural of weak root ${shoresh}.`
        }
      };
    }
  }

  // ע״ו Hif'il: ה-C1-י-C2 (e.g. הביא -> בוא, העיד -> עוד, הקים -> קום)
  if (normCore.length === 4 && normCore.startsWith('ה') && normCore[2] === 'י') {
    const rKey = `${normCore[1]}ו${normCore[3]}`;
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}brought / ${m}${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb',
          binyan: "Hif'il",
          tense: 'Past',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          notes: `Hif'il of hollow root ${shoresh}.`
        }
      };
    }
  }

  // ע״ו Hif'il future: י-C1-י-C2 (e.g. יביא -> בוא, יעיד -> עוד, יקים -> קום)
  if (normCore.length === 4 && normCore.startsWith('י') && normCore[2] === 'י') {
    const rKey = `${normCore[1]}ו${normCore[3]}`;
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}shall ${m}${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb',
          binyan: "Hif'il",
          tense: 'Future',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          notes: `Hif'il future of hollow root ${shoresh}.`
        }
      };
    }
  }

  // פ״י Hif'il: הו-C1-י-C2 or מו-C1-י-C2 or יו-C1-י-C2 (e.g. הוציא -> יצא, מוציא -> יצא, יוציא -> יצא)
  if (normCore.length === 5 && (normCore.startsWith('הו') || normCore.startsWith('מו') || normCore.startsWith('יו')) && normCore[3] === 'י') {
    const rKey = `י${normCore[2]}${normCore[4]}`;
    if (COMMON_MISHNA_ROOTS[rKey]) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      const prefixTense = normCore.startsWith('הו') ? 'caused to ' : (normCore.startsWith('מו') ? 'causes to ' : 'shall cause to ');
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}${prefixTense}${m}${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb',
          binyan: "Hif'il",
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          notes: `Hif'il of initial-yod root ${shoresh}.`
        }
      };
    }
  }

  // K. Direct 3-letter Root in Pa'al Past
  if (normCore.length === 3 && COMMON_MISHNA_ROOTS[normCore]) {
    const m = cleanRootMeaning(normCore);
    const shoresh = `${normCore[0]} - ${normCore[1]} - ${normCore[2]}`;
    const verbTrans = isPlural ? `they ${m}` : m;
    return {
      id: wordId,
      raw: token,
      cleanWord: word,
      consonants,
      punctuation: punct,
      translation: `${pfxLabel}${verbTrans}${sfxLabel}`,
      shoresh,
      transliteration: transliterateHebrew(word),
      grammar: {
        pos: 'Verb',
        binyan: "Pa'al",
        tense: 'Past / Base',
        shoresh,
        prefixes: prefixesList.length ? prefixesList : undefined,
        suffixes: suffixesList.length ? suffixesList : undefined,
        notes: `Base root ${shoresh}.`
      }
    };
  }

  // L. Root Substring Scanner (Guarantees meaningful translation without brackets)
  for (const [rKey] of Object.entries(COMMON_MISHNA_ROOTS)) {
    if (rKey.length === 3 && normCore.includes(rKey)) {
      const m = cleanRootMeaning(rKey);
      const shoresh = `${rKey[0]} - ${rKey[1]} - ${rKey[2]}`;
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${pfxLabel}${m}${sfxLabel}`,
        shoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Mishnaic Term',
          shoresh,
          prefixes: prefixesList.length ? prefixesList : undefined,
          suffixes: suffixesList.length ? suffixesList : undefined,
          notes: `Associated with root ${shoresh} (${COMMON_MISHNA_ROOTS[rKey]}).`
        }
      };
    }
  }

  // M. Final Dignified Mishnaic Term Gloss (NEVER BRACKETS!)
  const translit = transliterateHebrew(word);
  return {
    id: wordId,
    raw: token,
    cleanWord: word,
    consonants,
    punctuation: punct,
    translation: `${pfxLabel}${translit}`,
    shoresh: '—',
    transliteration: translit,
    grammar: {
      pos: 'Proper Noun / Rabbinic Term',
      prefixes: prefixesList.length ? prefixesList : undefined,
      suffixes: suffixesList.length ? suffixesList : undefined,
      notes: 'Mishnaic technical term or proper authority name.'
    }
  };
}

export function parseMishnah(
  hebrewText: string,
  englishText: string,
  chapterNum: number,
  mishnahNum: number
): MishnahData {
  const tokens = hebrewText.trim().split(/\s+/);
  const words = tokens
    .filter(t => cleanHebrewLetters(t).length > 0)
    .map((token, idx) => parseWordToken(token, `w_${chapterNum}_${mishnahNum}_${idx + 1}`));

  return {
    number: mishnahNum,
    heRef: `משנה ${toHebrewNumeral(mishnahNum)}`,
    enRef: `Mishnah ${mishnahNum}`,
    hebrewFull: hebrewText.trim(),
    englishFull: englishText.trim(),
    words
  };
}
