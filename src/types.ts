export interface TractateInfo {
  title: string;
  slug: string;
  shortTitle: string;
  heTitle: string;
  heShortTitle: string;
  enDesc: string;
  heDesc: string;
  chaptersCount: number;
  mishnahCounts: number[];
}

export interface SederInfo {
  id: string;
  name: string;
  heName: string;
  tractates: TractateInfo[];
}

export interface GrammarPrefix {
  hePrefix: string;
  name: string;
  meaning: string;
}

export interface GrammarSuffix {
  heSuffix: string;
  name: string;
  meaning: string;
}

export interface WordGrammar {
  pos: string;
  shoresh?: string;
  shoreshMeaning?: string;
  meaning?: string;
  binyan?: string | null;
  tense?: string | null;
  gender?: 'M' | 'F' | 'Common' | 'M/F' | null;
  number?: 'Singular' | 'Plural' | 'Dual' | null;
  person?: '1st' | '2nd' | '3rd' | null;
  state?: 'Absolute' | 'Construct' | null;
  prefixes?: GrammarPrefix[];
  suffixes?: GrammarSuffix[];
  notes?: string;
}

export interface WordData {
  id: string;
  raw: string; // Token from text
  cleanWord: string; // Vocalized word without trailing punctuation
  consonants: string; // Consonants only (no nikkud)
  punctuation: string; // Trailing punctuation
  translation: string; // ONE contextual translation per word
  shoresh: string; // Hebrew root letters, e.g. "ע - ר - ב" or "—"
  transliteration: string; // Phonetic pronunciation
  grammar: WordGrammar;
}

export interface MishnahData {
  number: number;
  heRef: string;
  enRef: string;
  hebrewFull: string;
  englishFull: string;
  words: WordData[];
}

export interface ChapterData {
  tractate: TractateInfo;
  chapter: number;
  mishnayot: MishnahData[];
}

export type ThemeMode = 'light' | 'sepia' | 'dark';
export type HebrewFont = 'frank' | 'david' | 'assistant';
