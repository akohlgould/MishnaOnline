import { WordData, MishnahData, WordGrammar } from '../types';
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

// Convert number to Hebrew letter numeral (1 -> א׳, 2 -> ב׳, etc.)
export function toHebrewNumeral(n: number): string {
  const letters: Record<number, string> = {
    1: 'א׳', 2: 'ב׳', 3: 'ג׳', 4: 'ד׳', 5: 'ה׳', 6: 'ו׳', 7: 'ז׳', 8: 'ח׳', 9: 'ט׳', 10: 'י׳',
    11: 'י״א', 12: 'י״ב', 13: 'י״ג', 14: 'י״ד', 15: 'ט״ו', 16: 'ט״ז', 17: 'י״ז', 18: 'י״ח', 19: 'י״ט', 20: 'כ׳',
    21: 'כ״א', 22: 'כ״ב', 23: 'כ״ג', 24: 'כ״ד', 25: 'כ״ה', 26: 'כ״ו', 27: 'כ״ז', 28: 'כ״ח', 29: 'כ״ט', 30: 'ל׳'
  };
  return letters[n] || `${n}`;
}

// Generate phonetic transliteration from vocalized Hebrew
export function transliterateHebrew(vocalized: string): string {
  // Common letter map
  const charMap: Record<string, string> = {
    'א': '', 'ב': 'v', 'ג': 'g', 'ד': 'd', 'ה': 'h', 'ו': 'v', 'ז': 'z', 'ח': 'ch', 'ט': 't',
    'י': 'y', 'כ': 'ch', 'ך': 'ch', 'ל': 'l', 'מ': 'm', 'ם': 'm', 'נ': 'n', 'ן': 'n', 'ס': 's',
    'ע': "'", 'פ': 'f', 'ף': 'f', 'צ': 'tz', 'ץ': 'tz', 'ק': 'k', 'ר': 'r', 'ש': 'sh', 'ת': 't'
  };

  // Vowel points
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

    // Shin dot / Sin dot
    if (char === '\u05C1') { // Shin dot
      continue;
    }
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

  return result.replace(/''+/g, "'").replace(/^-|-$/g, '');
}

function findLexiconCandidate(stemKey: string) {
  if (MISHNA_LEXICON[stemKey]) {
    return { key: stemKey, item: MISHNA_LEXICON[stemKey] };
  }

  // Construct ending in Tav -> Hei (e.g. הנאת -> הנאה, תרומת -> תרומה)
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

  // 2. Morphological decomposition of prefixes (משכבלו"ה)
  let stem = consonants;
  const prefixes: Array<{ hePrefix: string; name: string; meaning: string }> = [];

  // Conjunction Vav
  if (stem.startsWith('ו') && stem.length > 3) {
    prefixes.push({ hePrefix: 'וְ־', name: 'Conjunction', meaning: 'and / but' });
    stem = stem.slice(1);
  }

  // Relative Shin
  if (stem.startsWith('ש') && stem.length > 3) {
    prefixes.push({ hePrefix: 'שֶׁ־', name: 'Relative Particle', meaning: 'that / which / when' });
    stem = stem.slice(1);
  }

  // Check if stem is a participle starting with Mem (Hif'il / Pi'el)
  const isParticipleMem =
    stem.startsWith('מ') &&
    ((stem.length === 5 && stem[3] === 'י') || // e.g. מאכיל, מבדיל, מדליק, מזכיר, מפריש
     (stem.length === 6 && stem[3] === 'י' && stem.endsWith('ה')) || // e.g. מאכילה
     (stem.length === 7 && stem[3] === 'י' && (stem.endsWith('ין') || stem.endsWith('ים'))) || // e.g. מאכילין
     (stem.length === 4)); // e.g. מברך, מלמד, משלם

  // Definite Article Hei or Preposition (Bet, Kaf, Lamed, Mem)
  if (stem.startsWith('ה') && stem.length > 3) {
    prefixes.push({ hePrefix: 'הַ־', name: 'Definite Article', meaning: 'the' });
    stem = stem.slice(1);
  } else if ((stem.startsWith('ב') || stem.startsWith('ל') || stem.startsWith('כ')) && stem.length > 3) {
    const pLetter = stem[0];
    const meanings: Record<string, string> = {
      'ב': 'in / with / at',
      'ל': 'to / for',
      'כ': 'as / like'
    };
    prefixes.push({ hePrefix: `${pLetter}ְ־`, name: 'Preposition', meaning: meanings[pLetter] });
    stem = stem.slice(1);

    // Followed by definite article
    if (stem.startsWith('ה') && stem.length > 3) {
      prefixes.push({ hePrefix: 'הַ־', name: 'Definite Article', meaning: 'the' });
      stem = stem.slice(1);
    }
  } else if (stem.startsWith('מ') && stem.length > 3 && !isParticipleMem && (MISHNA_LEXICON[stem.slice(1)] || stem.startsWith('מה') || stem.startsWith('מי'))) {
    prefixes.push({ hePrefix: 'מִ־', name: 'Preposition', meaning: 'from' });
    stem = stem.slice(1);

    if (stem.startsWith('ה') && stem.length > 3) {
      prefixes.push({ hePrefix: 'הַ־', name: 'Definite Article', meaning: 'the' });
      stem = stem.slice(1);
    }
  }

  // Suffix detection
  const suffixes: Array<{ heSuffix: string; name: string; meaning: string }> = [];
  let baseStem = stem;

  if (baseStem.endsWith('ין') && baseStem.length > 4) {
    suffixes.push({ heSuffix: '־ִין', name: 'Masc. Plural Ending', meaning: 'plural masculine' });
    baseStem = baseStem.slice(0, -2);
  } else if (baseStem.endsWith('ים') && baseStem.length > 4) {
    suffixes.push({ heSuffix: '־ִים', name: 'Masc. Plural Ending', meaning: 'plural masculine' });
    baseStem = baseStem.slice(0, -2);
  } else if (baseStem.endsWith('ות') && baseStem.length > 4) {
    suffixes.push({ heSuffix: '־וֹת', name: 'Fem. Plural Ending', meaning: 'plural feminine' });
    baseStem = baseStem.slice(0, -2);
  } else if (baseStem.endsWith('נו') && baseStem.length > 4) {
    suffixes.push({ heSuffix: '־נוּ', name: 'Pronominal / Subject Suffix', meaning: 'we / our' });
    baseStem = baseStem.slice(0, -2);
  } else if (baseStem.endsWith('כם') && baseStem.length > 4) {
    suffixes.push({ heSuffix: '־כֶם', name: 'Pronominal Suffix', meaning: 'your (pl.m.)' });
    baseStem = baseStem.slice(0, -2);
  } else if (baseStem.endsWith('ך') && baseStem.length > 3) {
    suffixes.push({ heSuffix: '־ךָ', name: 'Pronominal Suffix', meaning: 'your' });
    baseStem = baseStem.slice(0, -1);
  } else if (baseStem.endsWith('ו') && baseStem.length > 3) {
    suffixes.push({ heSuffix: '־וֹ', name: 'Pronominal Suffix', meaning: 'his / him' });
    baseStem = baseStem.slice(0, -1);
  } else if (baseStem.endsWith('ה') && baseStem.length > 3) {
    suffixes.push({ heSuffix: '־ָהּ', name: 'Pronominal Suffix', meaning: 'her / it' });
    baseStem = baseStem.slice(0, -1);
  }

  // Check if stem or baseStem exists in lexicon (with spelling variants)
  const found = findLexiconCandidate(stem) || findLexiconCandidate(baseStem);
  if (found) {
    const candidate = found.item;
    const prefixLabel = prefixes.some(p => p.hePrefix === 'וְ־') ? 'and ' : '';
    const articleLabel = prefixes.some(p => p.hePrefix === 'הַ־') ? 'the ' : '';
    const suffixLabel = suffixes.some(s => s.heSuffix === '־וֹ') && !candidate.translation.includes('it') && !candidate.translation.includes('his')
      ? ' (it / his)'
      : '';
    return {
      id: wordId,
      raw: token,
      cleanWord: word,
      consonants,
      punctuation: punct,
      translation: `${prefixLabel}${articleLabel}${candidate.translation}${suffixLabel}`,
      shoresh: candidate.shoresh,
      transliteration: candidate.transliteration || transliterateHebrew(word),
      grammar: {
        pos: candidate.grammar.pos,
        binyan: candidate.grammar.binyan,
        tense: candidate.grammar.tense,
        prefixes: [...prefixes, ...(candidate.grammar.prefixes || [])],
        suffixes: [...suffixes, ...(candidate.grammar.suffixes || [])],
        notes: candidate.grammar.notes || `Derived from base word ${found.key}.`,
        shoresh: candidate.shoresh
      }
    };
  }

  // Participle detection (Hif'il / Pi'el)
  const prefixLabel = prefixes.some(p => p.hePrefix === 'וְ־') ? 'and ' : '';

  // Hif'il participle ms: מ-r1-r2-י-r3 (e.g. מאכיל, מבדיל, מדליק, מזכיר, מפריש)
  if (stem.startsWith('מ') && stem.length === 5 && stem[3] === 'י') {
    const r1 = stem[1];
    const r2 = stem[2];
    const r3 = stem[4];
    const rootKey = `${r1}${r2}${r3}`;
    const pShoresh = `${r1} - ${r2} - ${r3}`;

    const HIFIL_TRANSLATIONS: Record<string, string> = {
      'אכל': 'feeds / gives food to',
      'בדל': 'separates / distinguishes',
      'דלק': 'lights / kindles',
      'זכר': 'mentions',
      'פרש': 'separates / tithes',
      'כנס': 'brings in / gathers',
      'עמד': 'sets up / erects',
      'שמע': 'sounds / proclaims',
      'חזק': 'holds / strengthens',
      'בוא': 'brings',
      'יצא': 'takes out / fulfills obligation'
    };

    const trans = HIFIL_TRANSLATIONS[rootKey] ||
      (COMMON_MISHNA_ROOTS[rootKey] ? `causes to ${COMMON_MISHNA_ROOTS[rootKey].replace(/^to\s+/, '').split('/')[0].trim()}` : `causes ${rootKey}`);

    return {
      id: wordId,
      raw: token,
      cleanWord: word,
      consonants,
      punctuation: punct,
      translation: `${prefixLabel}${trans}`,
      shoresh: pShoresh,
      transliteration: transliterateHebrew(word),
      grammar: {
        pos: 'Verb',
        binyan: "Hif'il",
        tense: 'Present / Participle (Beinoni)',
        gender: 'M',
        number: 'Singular',
        prefixes: prefixes.length ? prefixes : undefined,
        notes: `Hif'il causative participle of root ${pShoresh}.`,
        shoresh: pShoresh
      }
    };
  }

  // Pi'el participle ms: מ-r1-r2-r3 (e.g. מברך, מלמד, משלם, מחייב)
  if (stem.startsWith('מ') && stem.length === 4) {
    const r1 = stem[1];
    const r2 = stem[2];
    const r3 = stem[3];
    const rootKey = `${r1}${r2}${r3}`;
    const pShoresh = `${r1} - ${r2} - ${r3}`;

    const PIEL_TRANSLATIONS: Record<string, string> = {
      'ברך': 'blesses',
      'למד': 'teaches',
      'שלם': 'pays / fulfills',
      'חיב': 'obligates',
      'חוב': 'obligates',
      'קדש': 'sanctifies',
      'טהר': 'purifies',
      'טמא': 'defiles / renders impure',
      'חלק': 'disagrees / divides'
    };

    if (PIEL_TRANSLATIONS[rootKey] || COMMON_MISHNA_ROOTS[rootKey]) {
      const trans = PIEL_TRANSLATIONS[rootKey] || COMMON_MISHNA_ROOTS[rootKey].replace(/^to\s+/, '').split('/')[0].trim();
      return {
        id: wordId,
        raw: token,
        cleanWord: word,
        consonants,
        punctuation: punct,
        translation: `${prefixLabel}${trans}`,
        shoresh: pShoresh,
        transliteration: transliterateHebrew(word),
        grammar: {
          pos: 'Verb',
          binyan: "Pi'el",
          tense: 'Present / Participle (Beinoni)',
          gender: 'M',
          number: 'Singular',
          prefixes: prefixes.length ? prefixes : undefined,
          notes: `Pi'el participle of root ${pShoresh}.`,
          shoresh: pShoresh
        }
      };
    }
  }

  // Root finding heuristic (for grammatical context only; NEVER used to fake word translations)
  let shoresh = '—';
  let shoreshMeaning = '';
  for (const [r, m] of Object.entries(COMMON_MISHNA_ROOTS)) {
    if (baseStem === r || stem === r) {
      shoresh = `${r[0]} - ${r[1]} - ${r[2]}`;
      shoreshMeaning = m;
      break;
    }
  }

  const grammar: WordGrammar = {
    pos: 'Mishnaic Term',
    shoresh,
    shoreshMeaning,
    prefixes: prefixes.length ? prefixes : undefined,
    suffixes: suffixes.length ? suffixes : undefined,
    notes: shoreshMeaning ? `Associated with root ${shoresh} (${shoreshMeaning}).` : undefined
  };

  return {
    id: wordId,
    raw: token,
    cleanWord: word,
    consonants,
    punctuation: punct,
    translation: `[${consonants}]`,
    shoresh,
    transliteration: transliterateHebrew(word),
    grammar
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

