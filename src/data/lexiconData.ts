import { WordGrammar } from '../types';

export interface LexiconEntry {
  translation: string;
  shoresh: string;
  transliteration: string;
  grammar: WordGrammar;
}

export const MISHNA_LEXICON: Record<string, LexiconEntry> = {
  "נכרי": {
    "translation": "gentile / non-Jew (goy)",
    "shoresh": "נ - כ - ר",
    "transliteration": "nokh-ri",
    "grammar": {
      "pos": "Noun / Adjective",
      "gender": "M",
      "number": "Singular",
      "notes": "Standard Halakhic term for a non-Jew (gentile / goy)."
    }
  },
  "לנכרי": {
    "translation": "to a gentile / non-Jew (goy)",
    "shoresh": "נ - כ - ר",
    "transliteration": "le-nokh-ri",
    "grammar": {
      "pos": "Preposition + Noun",
      "gender": "M",
      "number": "Singular",
      "prefixes": [
        {
          "hePrefix": "לְ־",
          "name": "Preposition",
          "meaning": "to / for"
        }
      ],
      "notes": "To a non-Jew or gentile (goy)."
    }
  },
  "נכרית": {
    "translation": "gentile woman / non-Jewess",
    "shoresh": "נ - כ - ר",
    "transliteration": "nokh-rit",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Singular"
    }
  },
  "נכרים": {
    "translation": "gentiles / non-Jews (goyim)",
    "shoresh": "נ - כ - ר",
    "transliteration": "nokh-rim",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Plural"
    }
  },
  "גוי": {
    "translation": "gentile / non-Jew (goy)",
    "shoresh": "ג - ו - י",
    "transliteration": "goy",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular"
    }
  },
  "גויים": {
    "translation": "gentiles / nations (goyim)",
    "shoresh": "ג - ו - י",
    "transliteration": "goy-yim",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Plural"
    }
  },
  "שעה": {
    "translation": "time / hour",
    "shoresh": "ש - ע - ה",
    "transliteration": "sha-ah",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Singular",
      "notes": "Halakhic hour (1/12th of daylight) or designated time."
    }
  },
  "בשעה": {
    "translation": "at the time that / when",
    "shoresh": "ש - ע - ה",
    "transliteration": "bi-sha-ah",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "בִּ־",
          "name": "Preposition",
          "meaning": "in / at"
        }
      ]
    }
  },
  "משעה": {
    "translation": "from the time that",
    "shoresh": "ש - ע - ה",
    "transliteration": "mi-sha-ah",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "מִ־",
          "name": "Preposition",
          "meaning": "from"
        }
      ]
    }
  },
  "שמתר": {
    "translation": "that is permitted",
    "shoresh": "נ - ת - ר",
    "transliteration": "she-mu-tar",
    "grammar": {
      "pos": "Relative Particle + Participle",
      "prefixes": [
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "that / which"
        }
      ],
      "notes": "Defective spelling (כתיב חסר) for שמותר."
    }
  },
  "שמותר": {
    "translation": "that is permitted",
    "shoresh": "נ - ת - ר",
    "transliteration": "she-mu-tar",
    "grammar": {
      "pos": "Relative Particle + Participle",
      "prefixes": [
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "that / which"
        }
      ]
    }
  },
  "ומתר": {
    "translation": "and is permitted",
    "shoresh": "נ - ת - ר",
    "transliteration": "u-mu-tar",
    "grammar": {
      "pos": "Conjunction + Participle",
      "prefixes": [
        {
          "hePrefix": "וּ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ],
      "notes": "Defective spelling (כתיב חסר) for ומותר."
    }
  },
  "מתר": {
    "translation": "permitted",
    "shoresh": "נ - ת - ר",
    "transliteration": "mu-tar",
    "grammar": {
      "pos": "Adjective / Participle",
      "notes": "Defective spelling (כתיב חסר) for מותר."
    }
  },
  "לאכל": {
    "translation": "to eat",
    "shoresh": "א - כ - ל",
    "transliteration": "le-e-khol",
    "grammar": {
      "pos": "Infinitive Verb",
      "prefixes": [
        {
          "hePrefix": "לֶ־",
          "name": "Infinitive Prefix",
          "meaning": "to"
        }
      ],
      "notes": "Defective spelling (כתיב חסר) for לאכול."
    }
  },
  "לאכול": {
    "translation": "to eat",
    "shoresh": "א - כ - ל",
    "transliteration": "le-e-khol",
    "grammar": {
      "pos": "Infinitive Verb",
      "prefixes": [
        {
          "hePrefix": "לֶ־",
          "name": "Infinitive Prefix",
          "meaning": "to"
        }
      ]
    }
  },
  "הנאה": {
    "translation": "benefit / enjoyment",
    "shoresh": "ה - נ - ה",
    "transliteration": "ha-na-ah",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Singular",
      "notes": "Halakhic benefit derived from an item."
    }
  },
  "בהנאה": {
    "translation": "in deriving benefit",
    "shoresh": "ה - נ - ה",
    "transliteration": "be-ha-na-ah",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "בְּ־",
          "name": "Preposition",
          "meaning": "in / from"
        }
      ]
    }
  },
  "בהנאתו": {
    "translation": "from its benefit / to derive benefit from it",
    "shoresh": "ה - נ - ה",
    "transliteration": "ba-ha-na-a-to",
    "grammar": {
      "pos": "Preposition + Noun + Suffix",
      "prefixes": [
        {
          "hePrefix": "בַּ־",
          "name": "Preposition",
          "meaning": "in / from"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־וֹ",
          "name": "Pronominal Suffix",
          "meaning": "its / his"
        }
      ]
    }
  },
  "הנאתו": {
    "translation": "its benefit",
    "shoresh": "ה - נ - ה",
    "transliteration": "ha-na-a-to",
    "grammar": {
      "pos": "Noun + Suffix",
      "suffixes": [
        {
          "heSuffix": "־וֹ",
          "name": "Pronominal Suffix",
          "meaning": "its / his"
        }
      ]
    }
  },
  "זמן": {
    "translation": "appointed time / season",
    "shoresh": "ז - מ - ן",
    "transliteration": "zman",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular"
    }
  },
  "זמנו": {
    "translation": "its appointed time",
    "shoresh": "ז - מ - ן",
    "transliteration": "zma-no",
    "grammar": {
      "pos": "Noun + Suffix",
      "suffixes": [
        {
          "heSuffix": "־וֹ",
          "name": "Pronominal Suffix",
          "meaning": "its"
        }
      ]
    }
  },
  "עבר": {
    "translation": "passed / has passed",
    "shoresh": "ע - ב - ר",
    "transliteration": "a-var",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past / Perfect",
      "gender": "M",
      "number": "Singular"
    }
  },
  "מוכר": {
    "translation": "sells",
    "shoresh": "מ - כ - ר",
    "transliteration": "mo-kher",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present / Participle",
      "gender": "M",
      "number": "Singular"
    }
  },
  "מוכרו": {
    "translation": "sells it",
    "shoresh": "מ - כ - ר",
    "transliteration": "mokh-ro",
    "grammar": {
      "pos": "Verb + Suffix",
      "binyan": "Pa'al",
      "tense": "Present / Participle",
      "suffixes": [
        {
          "heSuffix": "־וֹ",
          "name": "Pronominal Suffix",
          "meaning": "it / him"
        }
      ]
    }
  },
  "ומוכרו": {
    "translation": "and he may sell it",
    "shoresh": "מ - כ - ר",
    "transliteration": "u-mokh-ro",
    "grammar": {
      "pos": "Verb + Suffix",
      "prefixes": [
        {
          "hePrefix": "וּ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־וֹ",
          "name": "Pronominal Suffix",
          "meaning": "it"
        }
      ]
    }
  },
  "יסיק": {
    "translation": "light / kindle (the stove)",
    "shoresh": "נ - ס - ק",
    "transliteration": "ya-sik",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Future / Imperfect",
      "gender": "M",
      "number": "Singular",
      "notes": "To heat or stoke an oven or stove with fuel."
    }
  },
  "תנור": {
    "translation": "an oven",
    "shoresh": "ת - נ - ר",
    "transliteration": "ta-nur",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular",
      "notes": "Baking oven made of clay, wider at the base."
    }
  },
  "כירים": {
    "translation": "a stove",
    "shoresh": "כ - י - ר",
    "transliteration": "ke-ra-yim",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Dual",
      "notes": "Portable clay cooking stove with places for two pots."
    }
  },
  "וכירים": {
    "translation": "or a stove",
    "shoresh": "כ - י - ר",
    "transliteration": "ve-khe-ra-yim",
    "grammar": {
      "pos": "Noun",
      "prefixes": [
        {
          "hePrefix": "וְ־",
          "name": "Conjunction",
          "meaning": "and / or"
        }
      ]
    }
  },
  "בו": {
    "translation": "in it / with it",
    "shoresh": "—",
    "transliteration": "bo",
    "grammar": {
      "pos": "Preposition + Suffix",
      "prefixes": [
        {
          "hePrefix": "בְּ־",
          "name": "Preposition",
          "meaning": "in / with"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־וֹ",
          "name": "Pronominal Suffix",
          "meaning": "it / him"
        }
      ]
    }
  },
  "בה": {
    "translation": "in it / with her",
    "shoresh": "—",
    "transliteration": "bah",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "בהן": {
    "translation": "in them / with them",
    "shoresh": "—",
    "transliteration": "ba-hen",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "בהם": {
    "translation": "in them / with them",
    "shoresh": "—",
    "transliteration": "ba-hem",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "לו": {
    "translation": "to him / for him",
    "shoresh": "—",
    "transliteration": "lo",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "לה": {
    "translation": "to her / for her",
    "shoresh": "—",
    "transliteration": "lah",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "שלו": {
    "translation": "his / belonging to him",
    "shoresh": "—",
    "transliteration": "she-lo",
    "grammar": {
      "pos": "Possessive Pronoun"
    }
  },
  "שלה": {
    "translation": "hers / belonging to her",
    "shoresh": "—",
    "transliteration": "she-lah",
    "grammar": {
      "pos": "Possessive Pronoun"
    }
  },
  "שלהם": {
    "translation": "theirs / of theirs",
    "shoresh": "—",
    "transliteration": "she-la-hem",
    "grammar": {
      "pos": "Possessive Pronoun"
    }
  },
  "של": {
    "translation": "of / belonging to",
    "shoresh": "—",
    "transliteration": "shel",
    "grammar": {
      "pos": "Preposition"
    }
  },
  "על": {
    "translation": "on / upon / concerning",
    "shoresh": "—",
    "transliteration": "al",
    "grammar": {
      "pos": "Preposition"
    }
  },
  "עליו": {
    "translation": "upon it / on him",
    "shoresh": "—",
    "transliteration": "a-lav",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "עליה": {
    "translation": "upon her / on it",
    "shoresh": "—",
    "transliteration": "a-le-ha",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "אין": {
    "translation": "there is no / not",
    "shoresh": "א - י - ן",
    "transliteration": "ein",
    "grammar": {
      "pos": "Negative Particle",
      "notes": "Particle of nonexistence or absolute negation."
    }
  },
  "אלא": {
    "translation": "only / except / rather",
    "shoresh": "—",
    "transliteration": "el-la",
    "grammar": {
      "pos": "Limiting Conjunction",
      "notes": "Means 'only' or 'except' (אין... אלא = there is none other than...)."
    }
  },
  "בעור": {
    "translation": "removal / destruction",
    "shoresh": "ב - ע - ר",
    "transliteration": "bi-ur",
    "grammar": {
      "pos": "Noun / Gerund",
      "binyan": "Pi'el",
      "notes": "Defective spelling (כתיב חסר) for ביעור."
    }
  },
  "ביעור": {
    "translation": "removal / destruction",
    "shoresh": "ב - ע - ר",
    "transliteration": "bi-ur",
    "grammar": {
      "pos": "Noun / Gerund",
      "binyan": "Pi'el",
      "notes": "Obligation to destroy or remove chametz."
    }
  },
  "שרפה": {
    "translation": "burning",
    "shoresh": "ש - ר - פ",
    "transliteration": "sre-fah",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Singular",
      "notes": "Defective spelling (כתיב חסר) for שריפה."
    }
  },
  "שריפה": {
    "translation": "burning",
    "shoresh": "ש - ר - פ",
    "transliteration": "sre-fah",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Singular",
      "notes": "Destruction by fire."
    }
  },
  "אף": {
    "translation": "even / also",
    "shoresh": "—",
    "transliteration": "af",
    "grammar": {
      "pos": "Conjunction / Adverb"
    }
  },
  "או": {
    "translation": "or",
    "shoresh": "—",
    "transliteration": "o",
    "grammar": {
      "pos": "Conjunction"
    }
  },
  "ולא": {
    "translation": "and not / neither",
    "shoresh": "—",
    "transliteration": "ve-lo",
    "grammar": {
      "pos": "Conjunction + Negative Particle",
      "prefixes": [
        {
          "hePrefix": "וְ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ]
    }
  },
  "לא": {
    "translation": "not / no",
    "shoresh": "—",
    "transliteration": "lo",
    "grammar": {
      "pos": "Negative Particle"
    }
  },
  "מפרר": {
    "translation": "crumbles / crushes into crumbs",
    "shoresh": "פ - ר - ר",
    "transliteration": "me-fa-rer",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pi'el",
      "tense": "Present / Participle",
      "gender": "M",
      "number": "Singular"
    }
  },
  "זורה": {
    "translation": "scatters / winnows",
    "shoresh": "ז - ר - ה",
    "transliteration": "zo-reh",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present / Participle",
      "gender": "M",
      "number": "Singular"
    }
  },
  "וזורה": {
    "translation": "and scatters / winnows",
    "shoresh": "ז - ר - ה",
    "transliteration": "ve-zo-reh",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present / Participle",
      "prefixes": [
        {
          "hePrefix": "וְ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ]
    }
  },
  "רוח": {
    "translation": "wind / spirit",
    "shoresh": "ר - ו - ח",
    "transliteration": "ru-ach",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Singular"
    }
  },
  "לרוח": {
    "translation": "to the wind / into the wind",
    "shoresh": "ר - ו - ח",
    "transliteration": "la-ru-ach",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "לָ־",
          "name": "Preposition",
          "meaning": "to the"
        }
      ]
    }
  },
  "ים": {
    "translation": "sea",
    "shoresh": "י - מ - ם",
    "transliteration": "yam",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular"
    }
  },
  "לים": {
    "translation": "into the sea",
    "shoresh": "י - מ - ם",
    "transliteration": "la-yam",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "לַ־",
          "name": "Preposition",
          "meaning": "into the"
        }
      ]
    }
  },
  "מטיל": {
    "translation": "casts / throws",
    "shoresh": "ט - ו - ל",
    "transliteration": "ma-til",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Present / Participle",
      "gender": "M",
      "number": "Singular"
    }
  },
  "יהודה": {
    "translation": "Yehudah (Judah)",
    "shoresh": "—",
    "transliteration": "ye-hu-dah",
    "grammar": {
      "pos": "Proper Noun",
      "notes": "Rabbi Yehudah bar Ilai, prominent Tanna."
    }
  },
  "רבי": {
    "translation": "Rabbi",
    "shoresh": "ר - ב - ב",
    "transliteration": "rab-bi",
    "grammar": {
      "pos": "Title / Noun",
      "notes": "Title given to ordained Tannaic and Amoraic sages."
    }
  },
  "וחכמים": {
    "translation": "and the Sages",
    "shoresh": "ח - כ - ם",
    "transliteration": "va-kha-kha-mim",
    "grammar": {
      "pos": "Noun",
      "prefixes": [
        {
          "hePrefix": "וַ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ],
      "notes": "The consensus majority of the Rabbinic authorities."
    }
  },
  "חכמים": {
    "translation": "the Sages / the Wise",
    "shoresh": "ח - כ - ם",
    "transliteration": "kha-kha-mim",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Plural"
    }
  },
  "אומר": {
    "translation": "says",
    "shoresh": "א - מ - ר",
    "transliteration": "o-mer",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present / Participle",
      "gender": "M",
      "number": "Singular"
    }
  },
  "אומרים": {
    "translation": "say",
    "shoresh": "א - מ - ר",
    "transliteration": "om-rim",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present / Participle",
      "gender": "M",
      "number": "Plural"
    }
  },
  "אבל": {
    "translation": "but / however",
    "shoresh": "—",
    "transliteration": "a-val",
    "grammar": {
      "pos": "Conjunction"
    }
  },
  "אפילו": {
    "translation": "even if / even",
    "shoresh": "—",
    "transliteration": "a-fi-lu",
    "grammar": {
      "pos": "Conjunction"
    }
  },
  "אחר": {
    "translation": "another / other",
    "shoresh": "א - ח - ר",
    "transliteration": "a-kher",
    "grammar": {
      "pos": "Adjective",
      "gender": "M",
      "number": "Singular"
    }
  },
  "ישראל": {
    "translation": "an Israelite (Jew)",
    "shoresh": "—",
    "transliteration": "yis-ra-el",
    "grammar": {
      "pos": "Proper Noun / Noun",
      "notes": "A Jewish person / the people of Israel."
    }
  },
  "כהן": {
    "translation": "a Kohen (priest)",
    "shoresh": "כ - ה - ן",
    "transliteration": "ko-hen",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular"
    }
  },
  "לוי": {
    "translation": "a Levite",
    "shoresh": "ל - ו - י",
    "transliteration": "le-vi",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular"
    }
  },
  "תרומה": {
    "translation": "terumah (heave-offering)",
    "shoresh": "ר - ו - ם",
    "transliteration": "te-ru-mah",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Singular"
    }
  },
  "תרומתו": {
    "translation": "its terumah (heave-offering)",
    "shoresh": "ר - ו - ם",
    "transliteration": "te-ru-ma-to",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "מעשר": {
    "translation": "tithe (ma'aser)",
    "shoresh": "ע - ש - ר",
    "transliteration": "ma-a-ser",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular"
    }
  },
  "ובמעשר": {
    "translation": "and with tithes",
    "shoresh": "ע - ש - ר",
    "transliteration": "u-ve-ma-a-ser",
    "grammar": {
      "pos": "Preposition + Noun"
    }
  },
  "ראשון": {
    "translation": "first",
    "shoresh": "ר - א - ש",
    "transliteration": "ri-shon",
    "grammar": {
      "pos": "Adjective / Ordinal",
      "gender": "M",
      "number": "Singular"
    }
  },
  "שני": {
    "translation": "second",
    "shoresh": "ש - נ - ה",
    "transliteration": "she-ni",
    "grammar": {
      "pos": "Adjective / Ordinal",
      "gender": "M",
      "number": "Singular"
    }
  },
  "שלישי": {
    "translation": "third",
    "shoresh": "ש - ל - ש",
    "transliteration": "shli-shi",
    "grammar": {
      "pos": "Adjective / Ordinal",
      "gender": "M",
      "number": "Singular"
    }
  },
  "והקדש": {
    "translation": "and consecrated property",
    "shoresh": "ק - ד - ש",
    "transliteration": "ve-hek-desh",
    "grammar": {
      "pos": "Noun",
      "prefixes": [
        {
          "hePrefix": "וְ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ]
    }
  },
  "הקדש": {
    "translation": "consecrated property (hekdesh)",
    "shoresh": "ק - ד - ש",
    "transliteration": "hek-desh",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular"
    }
  },
  "יוצאין": {
    "translation": "they fulfill their obligation",
    "shoresh": "י - צ - א",
    "transliteration": "yotz-in",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present / Participle",
      "gender": "M",
      "number": "Plural",
      "notes": "Halakhic term meaning to fulfill the mitzvah obligation."
    }
  },
  "יוצא": {
    "translation": "fulfills the obligation",
    "shoresh": "י - צ - א",
    "transliteration": "yo-tze",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present / Participle",
      "gender": "M",
      "number": "Singular"
    }
  },
  "שהלוה": {
    "translation": "who lent / gave a loan",
    "shoresh": "ל - ו - ה",
    "transliteration": "she-hil-vah",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Past / Perfect",
      "prefixes": [
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "who / that"
        }
      ]
    }
  },
  "חמצו": {
    "translation": "his chametz (leaven)",
    "shoresh": "ח - מ - ץ",
    "transliteration": "cham-tzo",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "בפסח": {
    "translation": "on Passover (Pesach)",
    "shoresh": "פ - ס - ח",
    "transliteration": "be-fe-sach",
    "grammar": {
      "pos": "Preposition + Proper Noun"
    }
  },
  "מאכיל": {
    "translation": "feeds / gives food to",
    "shoresh": "א - כ - ל",
    "transliteration": "ma-a-khil",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Present / Participle (Beinoni)",
      "gender": "M",
      "number": "Singular",
      "notes": "Hif‘il causative participle of root א-כ-ל (to eat): 'causes to eat' or 'feeds'."
    }
  },
  "ומאכיל": {
    "translation": "and feeds / gives food to",
    "shoresh": "א - כ - ל",
    "transliteration": "u-ma-a-khil",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Present / Participle (Beinoni)",
      "gender": "M",
      "number": "Singular",
      "prefixes": [
        {
          "hePrefix": "וּ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ],
      "notes": "Hif‘il causative participle of root א-כ-ל with conjunction vav."
    }
  },
  "מאכילין": {
    "translation": "they feed / give food to",
    "shoresh": "א - כ - ל",
    "transliteration": "ma-a-khi-lin",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Present / Participle (Beinoni)",
      "gender": "M",
      "number": "Plural",
      "notes": "Hif‘il plural participle of root א-כ-ל."
    }
  },
  "מאכילה": {
    "translation": "she feeds / gives food to",
    "shoresh": "א - כ - ל",
    "transliteration": "ma-a-khi-lah",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Present / Participle (Beinoni)",
      "gender": "F",
      "number": "Singular",
      "notes": "Hif‘il feminine singular participle of root א-כ-ל."
    }
  },
  "מותר": {
    "translation": "permitted",
    "shoresh": "נ - ת - ר",
    "transliteration": "mu-tar",
    "grammar": {
      "pos": "Adjective / Participle",
      "binyan": "Huf'al",
      "gender": "M",
      "number": "Singular",
      "notes": "Halakhic term meaning permitted or lawful, opposite of אסור."
    }
  },
  "אסור": {
    "translation": "forbidden",
    "shoresh": "א - ס - ר",
    "transliteration": "a-sur",
    "grammar": {
      "pos": "Adjective / Participle",
      "binyan": "Pa'al (Passive)",
      "gender": "M",
      "number": "Singular",
      "notes": "Halakhic term meaning forbidden or prohibited, opposite of מותר."
    }
  },
  "חייב": {
    "translation": "is obligated / liable",
    "shoresh": "ח - י - ב",
    "transliteration": "cha-yav",
    "grammar": {
      "pos": "Adjective / Verb",
      "binyan": "Pi'el",
      "gender": "M",
      "number": "Singular",
      "notes": "Halakhic status of liability or obligation."
    }
  },
  "פטור": {
    "translation": "is exempt",
    "shoresh": "פ - ט - ר",
    "transliteration": "pa-tur",
    "grammar": {
      "pos": "Adjective / Participle",
      "binyan": "Pa'al (Passive)",
      "gender": "M",
      "number": "Singular",
      "notes": "Exempt from liability or obligation."
    }
  },
  "כשר": {
    "translation": "fit / valid",
    "shoresh": "כ - ש - ר",
    "transliteration": "ka-sher",
    "grammar": {
      "pos": "Adjective",
      "gender": "M",
      "number": "Singular",
      "notes": "Halakhically valid or suitable."
    }
  },
  "פסול": {
    "translation": "invalid / disqualified",
    "shoresh": "פ - ס - ל",
    "transliteration": "pa-sul",
    "grammar": {
      "pos": "Adjective",
      "gender": "M",
      "number": "Singular",
      "notes": "Halakhically invalid or defective."
    }
  },
  "לבהמה": {
    "translation": "to an animal / livestock",
    "shoresh": "ב - ה - מ",
    "transliteration": "li-ve-he-mah",
    "grammar": {
      "pos": "Preposition + Noun",
      "gender": "F",
      "number": "Singular",
      "prefixes": [
        {
          "hePrefix": "לִ־",
          "name": "Preposition",
          "meaning": "to / for"
        }
      ],
      "notes": "Domestic animal, cattle, or livestock."
    }
  },
  "בהמה": {
    "translation": "animal / livestock",
    "shoresh": "ב - ה - מ",
    "transliteration": "be-he-mah",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Singular",
      "notes": "Domestic animal or cattle."
    }
  },
  "לחיה": {
    "translation": "to a wild animal",
    "shoresh": "ח - י - ה",
    "transliteration": "le-cha-yah",
    "grammar": {
      "pos": "Preposition + Noun",
      "gender": "F",
      "number": "Singular",
      "prefixes": [
        {
          "hePrefix": "לְ־",
          "name": "Preposition",
          "meaning": "to / for"
        }
      ],
      "notes": "Wild beast or non-domesticated animal."
    }
  },
  "חיה": {
    "translation": "wild beast / animal",
    "shoresh": "ח - י - ה",
    "transliteration": "cha-yah",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Singular",
      "notes": "Wild beast as distinguished from domestic cattle (בהמה)."
    }
  },
  "ולעופות": {
    "translation": "and to birds / fowl",
    "shoresh": "ע - ו - ף",
    "transliteration": "u-le-o-fot",
    "grammar": {
      "pos": "Preposition + Noun",
      "gender": "M",
      "number": "Plural",
      "prefixes": [
        {
          "hePrefix": "וּ־",
          "name": "Conjunction",
          "meaning": "and"
        },
        {
          "hePrefix": "לְ־",
          "name": "Preposition",
          "meaning": "to / for"
        }
      ],
      "notes": "Plural of עוף (bird, winged creature)."
    }
  },
  "עופות": {
    "translation": "birds / fowl",
    "shoresh": "ע - ו - ף",
    "transliteration": "o-fot",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Plural",
      "notes": "Plural form of עוף."
    }
  },
  "עוף": {
    "translation": "bird / fowl",
    "shoresh": "ע - ו - ף",
    "transliteration": "of",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular"
    }
  },
  "חמץ": {
    "translation": "leavened bread / chametz",
    "shoresh": "ח - מ - ץ",
    "transliteration": "cha-metz",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular",
      "notes": "Grain products that have fermented; prohibited on Passover."
    }
  },
  "החמץ": {
    "translation": "the chametz / leaven",
    "shoresh": "ח - מ - ץ",
    "transliteration": "ha-cha-metz",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular",
      "prefixes": [
        {
          "hePrefix": "הַ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ]
    }
  },
  "מצה": {
    "translation": "matzah / unleavened bread",
    "shoresh": "מ - צ - ה",
    "transliteration": "ma-tzah",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Singular",
      "notes": "Unleavened bread commanded to be eaten on Passover."
    }
  },
  "מרור": {
    "translation": "bitter herbs / maror",
    "shoresh": "מ - ר - ר",
    "transliteration": "ma-ror",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular",
      "notes": "Bitter herbs eaten at the Passover Seder."
    }
  },
  "פסח": {
    "translation": "Passover / Pesach offering",
    "shoresh": "פ - ס - ח",
    "transliteration": "pe-sach",
    "grammar": {
      "pos": "Proper Noun",
      "gender": "M",
      "number": "Singular",
      "notes": "The festival of Passover or the paschal sacrifice."
    }
  },
  "הפסח": {
    "translation": "the Passover offering",
    "shoresh": "פ - ס - ח",
    "transliteration": "ha-pe-sach",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular",
      "prefixes": [
        {
          "hePrefix": "הַ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ]
    }
  },
  "סוכה": {
    "translation": "sukkah (booth)",
    "shoresh": "ס - כ - ך",
    "transliteration": "su-kkah",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Singular",
      "notes": "Temporary dwelling commanded for the festival of Sukkot."
    }
  },
  "לולב": {
    "translation": "lulav (palm branch)",
    "shoresh": "ל - ל - ב",
    "transliteration": "lu-lav",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular",
      "notes": "Date palm branch taken on Sukkot as one of the four species."
    }
  },
  "אתרוג": {
    "translation": "etrog (citron)",
    "shoresh": "א - ת - ר - ג",
    "transliteration": "et-rog",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular",
      "notes": "Citron fruit, the fruit of a splendid tree (פרי עץ הדר) on Sukkot."
    }
  },
  "שופר": {
    "translation": "shofar (ram's horn)",
    "shoresh": "ש - פ - ר",
    "transliteration": "sho-far",
    "grammar": {
      "pos": "Noun",
      "gender": "M",
      "number": "Singular",
      "notes": "Horn blown on Rosh Hashanah and Yom Kippur of the Jubilee."
    }
  },
  "מגילה": {
    "translation": "scroll / Megillah",
    "shoresh": "ג - ל - ל",
    "transliteration": "me-gil-lah",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Singular",
      "notes": "Scroll, specifically the Scroll of Esther read on Purim."
    }
  },
  "מאימתי": {
    "translation": "From when",
    "shoresh": "מ - ת - י",
    "transliteration": "me-ei-ma-tai",
    "grammar": {
      "pos": "Interrogative Adverb",
      "prefixes": [
        {
          "hePrefix": "מֵ־",
          "name": "Preposition",
          "meaning": "from"
        }
      ],
      "notes": "Compound of מִן (from) + אֵימָתַי (when). Opens halakhic inquiry on time windows."
    }
  },
  "קורין": {
    "translation": "do they recite",
    "shoresh": "ק - ר - א",
    "transliteration": "ko-rin",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al (Qal)",
      "tense": "Present / Participle (Beinoni)",
      "gender": "M",
      "number": "Plural",
      "notes": "Mishnaic plural suffix ־ִין (Aramaic influence) equivalent to Biblical ־ִים."
    }
  },
  "את": {
    "translation": "[direct object]",
    "shoresh": "—",
    "transliteration": "et",
    "grammar": {
      "pos": "Particle / Preposition",
      "notes": "Definite direct object marker in Hebrew syntax."
    }
  },
  "שמע": {
    "translation": "the Shema",
    "shoresh": "שׁ - מ - ע",
    "transliteration": "she-ma",
    "grammar": {
      "pos": "Proper Noun / Imperative",
      "shoreshMeaning": "to hear / heed",
      "notes": "Opening word of Deut. 6:4, central affirmation of Jewish faith."
    }
  },
  "בערבית": {
    "translation": "in the evening",
    "shoresh": "ע - ר - ב",
    "transliteration": "be-ar-vit",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "בְּ־",
          "name": "Preposition",
          "meaning": "in / during"
        }
      ],
      "notes": "Refers to nighttime or the evening prayer time."
    }
  },
  "שהכהנים": {
    "translation": "that the priests",
    "shoresh": "כ - ה - ן",
    "transliteration": "she-ha-ko-ha-nim",
    "grammar": {
      "pos": "Noun (Plural)",
      "prefixes": [
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "that / when"
        },
        {
          "hePrefix": "הַ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ],
      "gender": "M",
      "number": "Plural",
      "suffixes": [
        {
          "heSuffix": "־ִים",
          "name": "Plural Ending",
          "meaning": "masc. plural"
        }
      ]
    }
  },
  "נכנסים": {
    "translation": "enter",
    "shoresh": "כ - נ - ס",
    "transliteration": "nich-na-sim",
    "grammar": {
      "pos": "Verb",
      "binyan": "Nif'al",
      "tense": "Present / Participle (Beinoni)",
      "gender": "M",
      "number": "Plural",
      "notes": "Refers to priests who immersed for purification waiting until stars emerge to enter and eat."
    }
  },
  "בתרומתן": {
    "translation": "of their heave-offering",
    "shoresh": "ר - ו - ם",
    "transliteration": "bit-ru-ma-tan",
    "grammar": {
      "pos": "Preposition + Noun + Suffix",
      "prefixes": [
        {
          "hePrefix": "בִּ־",
          "name": "Preposition",
          "meaning": "of / in"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־ָן",
          "name": "Pronominal Suffix",
          "meaning": "their (f.pl.)"
        }
      ],
      "notes": "Terumah (holy produce given to priests) requires ritual purity to consume."
    }
  },
  "עד": {
    "translation": "until",
    "shoresh": "ע - ד - ה",
    "transliteration": "ad",
    "grammar": {
      "pos": "Preposition",
      "meaning": "until / as far as"
    }
  },
  "סוף": {
    "translation": "the end of",
    "shoresh": "ס - ו - ף",
    "transliteration": "sof",
    "grammar": {
      "pos": "Noun (Construct)",
      "gender": "M",
      "number": "Singular"
    }
  },
  "האשמורה": {
    "translation": "the watch",
    "shoresh": "שׁ - מ - ר",
    "transliteration": "ha-ash-mu-rah",
    "grammar": {
      "pos": "Noun",
      "prefixes": [
        {
          "hePrefix": "הָ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ],
      "gender": "F",
      "number": "Singular",
      "notes": "The night is divided into three watches (ashmurot)."
    }
  },
  "הראשונה": {
    "translation": "the first",
    "shoresh": "ר - א - שׁ",
    "transliteration": "ha-ri-sho-nah",
    "grammar": {
      "pos": "Ordinal Adjective",
      "prefixes": [
        {
          "hePrefix": "הָ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ],
      "gender": "F",
      "number": "Singular"
    }
  },
  "דברי": {
    "translation": "these are the words of",
    "shoresh": "ד - ב - ר",
    "transliteration": "div-rei",
    "grammar": {
      "pos": "Noun (Plural Construct)",
      "gender": "M",
      "number": "Plural"
    }
  },
  "אליעזר": {
    "translation": "Eliezer",
    "shoresh": "—",
    "transliteration": "E-li-e-zer",
    "grammar": {
      "pos": "Proper Name",
      "notes": "Rabbi Eliezer ben Hyrcanus, leading 2nd-generation Tanna."
    }
  },
  "חצות": {
    "translation": "midnight",
    "shoresh": "ח - צ - ה",
    "transliteration": "cha-tzot",
    "grammar": {
      "pos": "Noun",
      "notes": "Halakhic midnight (the midpoint between sunset and sunrise)."
    }
  },
  "רבן": {
    "translation": "Rabban",
    "shoresh": "ר - ב - ב",
    "transliteration": "Rab-ban",
    "grammar": {
      "pos": "Title / Honorific",
      "notes": "Title reserved for the Nasi (head of the Sanhedrin)."
    }
  },
  "גמליאל": {
    "translation": "Gamliel",
    "shoresh": "—",
    "transliteration": "Gam-li-el",
    "grammar": {
      "pos": "Proper Name",
      "notes": "Rabban Gamliel of Yavne, Nasi of the Sanhedrin."
    }
  },
  "שיעלה": {
    "translation": "that rises",
    "shoresh": "ע - ל - ה",
    "transliteration": "she-ya-a-leh",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al (Qal)",
      "tense": "Future / Subjunctive (Yiqtol)",
      "prefixes": [
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "that / until that"
        }
      ],
      "gender": "M",
      "number": "Singular"
    }
  },
  "עמוד": {
    "translation": "the pillar of",
    "shoresh": "ע - מ - ד",
    "transliteration": "am-mud",
    "grammar": {
      "pos": "Noun (Construct)",
      "gender": "M",
      "number": "Singular"
    }
  },
  "השחר": {
    "translation": "dawn",
    "shoresh": "שׁ - ח - ר",
    "transliteration": "ha-sha-char",
    "grammar": {
      "pos": "Noun",
      "prefixes": [
        {
          "hePrefix": "הַ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ],
      "notes": "Ammud haShachar: first light of dawn ascending in the eastern sky."
    }
  },
  "מעשה": {
    "translation": "An incident occurred",
    "shoresh": "ע - שׂ - ה",
    "transliteration": "ma-a-seh",
    "grammar": {
      "pos": "Noun / Narrative Marker",
      "notes": "Classic Mishnaic formula introducing a real-life precedent."
    }
  },
  "שבאו": {
    "translation": "that came",
    "shoresh": "ב - ו - א",
    "transliteration": "she-ba-u",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al (Qal)",
      "tense": "Past (Qatal)",
      "prefixes": [
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "that"
        }
      ],
      "number": "Plural",
      "person": "3rd"
    }
  },
  "בניו": {
    "translation": "his sons",
    "shoresh": "ב - נ - ה",
    "transliteration": "ba-nav",
    "grammar": {
      "pos": "Noun + Suffix",
      "suffixes": [
        {
          "heSuffix": "־ָיו",
          "name": "Pronominal Suffix",
          "meaning": "his"
        }
      ],
      "gender": "M",
      "number": "Plural"
    }
  },
  "מבית": {
    "translation": "from the house of",
    "shoresh": "ב - י - ת",
    "transliteration": "mi-beit",
    "grammar": {
      "pos": "Preposition + Noun Construct",
      "prefixes": [
        {
          "hePrefix": "מִ־",
          "name": "Preposition",
          "meaning": "from"
        }
      ]
    }
  },
  "המשתה": {
    "translation": "the wedding feast",
    "shoresh": "שׁ - ת - ה",
    "transliteration": "ha-mish-teh",
    "grammar": {
      "pos": "Noun",
      "prefixes": [
        {
          "hePrefix": "הַ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ],
      "notes": "Literally a drinking feast / banquet, specifically a wedding celebration."
    }
  },
  "אמרו": {
    "translation": "they said",
    "shoresh": "א - מ - ר",
    "transliteration": "am-ru",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past",
      "person": "3rd",
      "number": "Plural"
    }
  },
  "קרינו": {
    "translation": "we recited",
    "shoresh": "ק - ר - א",
    "transliteration": "ka-ri-nu",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al (Qal)",
      "tense": "Past (Qatal)",
      "person": "1st",
      "number": "Plural",
      "suffixes": [
        {
          "heSuffix": "־נוּ",
          "name": "Subject Suffix",
          "meaning": "we"
        }
      ]
    }
  },
  "אמר": {
    "translation": "He said",
    "shoresh": "א - מ - ר",
    "transliteration": "a-mar",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past",
      "person": "3rd",
      "gender": "M",
      "number": "Singular"
    }
  },
  "להם": {
    "translation": "to them",
    "shoresh": "—",
    "transliteration": "la-hem",
    "grammar": {
      "pos": "Preposition + Pronoun",
      "prefixes": [
        {
          "hePrefix": "לְ־",
          "name": "Preposition",
          "meaning": "to"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־הֶם",
          "name": "Pronoun",
          "meaning": "them (m.)"
        }
      ]
    }
  },
  "אם": {
    "translation": "If",
    "shoresh": "—",
    "transliteration": "im",
    "grammar": {
      "pos": "Conditional Particle",
      "meaning": "if"
    }
  },
  "עלה": {
    "translation": "has risen",
    "shoresh": "ע - ל - ה",
    "transliteration": "a-lah",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past",
      "person": "3rd",
      "gender": "M",
      "number": "Singular"
    }
  },
  "חייבין": {
    "translation": "obligated",
    "shoresh": "ח - י - ב",
    "transliteration": "chay-ya-vin",
    "grammar": {
      "pos": "Adjective / Participle",
      "binyan": "Pi'el / Pa'al",
      "gender": "M",
      "number": "Plural",
      "suffixes": [
        {
          "heSuffix": "־ִין",
          "name": "Plural Suffix",
          "meaning": "masc. plural"
        }
      ]
    }
  },
  "אתם": {
    "translation": "you (pl.)",
    "shoresh": "—",
    "transliteration": "a-tem",
    "grammar": {
      "pos": "Personal Pronoun",
      "person": "2nd",
      "gender": "M",
      "number": "Plural"
    }
  },
  "לקרות": {
    "translation": "to recite",
    "shoresh": "ק - ר - א",
    "transliteration": "lik-rot",
    "grammar": {
      "pos": "Verb (Infinitive)",
      "binyan": "Pa'al (Qal)",
      "tense": "Infinitive Construct",
      "prefixes": [
        {
          "hePrefix": "לִ־",
          "name": "Infinitive Prefix",
          "meaning": "to"
        }
      ]
    }
  },
  "זו": {
    "translation": "this alone",
    "shoresh": "—",
    "transliteration": "zo",
    "grammar": {
      "pos": "Demonstrative Pronoun",
      "gender": "F",
      "number": "Singular"
    }
  },
  "בלבד": {
    "translation": "only",
    "shoresh": "ב - ד - ד",
    "transliteration": "bil-vad",
    "grammar": {
      "pos": "Adverb",
      "prefixes": [
        {
          "hePrefix": "בִּ־",
          "name": "Preposition",
          "meaning": "in"
        }
      ],
      "notes": "Meaning alone / exclusively."
    }
  },
  "כל": {
    "translation": "all",
    "shoresh": "כ - ל - ל",
    "transliteration": "kol",
    "grammar": {
      "pos": "Quantifier / Noun",
      "meaning": "every / all / whatever"
    }
  },
  "מה": {
    "translation": "that",
    "shoresh": "—",
    "transliteration": "mah",
    "grammar": {
      "pos": "Interrogative / Relative Pronoun",
      "meaning": "whatever / what"
    }
  },
  "שאמרו": {
    "translation": "that the Sages said",
    "shoresh": "א - מ - ר",
    "transliteration": "she-am-ru",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past",
      "prefixes": [
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "that"
        }
      ],
      "number": "Plural"
    }
  },
  "מצותן": {
    "translation": "their obligation is",
    "shoresh": "צ - ו - ה",
    "transliteration": "mitz-va-tan",
    "grammar": {
      "pos": "Noun + Suffix",
      "suffixes": [
        {
          "heSuffix": "־ָן",
          "name": "Pronominal Suffix",
          "meaning": "their (f.pl.)"
        }
      ],
      "notes": "Refers to the performance window of these mitzvot."
    }
  },
  "הקטר": {
    "translation": "the burning of",
    "shoresh": "ק - ט - ר",
    "transliteration": "hek-ter",
    "grammar": {
      "pos": "Noun (Construct)",
      "binyan": "Hif'il Action Noun",
      "notes": "Placing sacrificial fats and limbs onto the altar fire."
    }
  },
  "חלבים": {
    "translation": "sacrificial fats",
    "shoresh": "ח - ל - ב",
    "transliteration": "cha-la-vim",
    "grammar": {
      "pos": "Noun (Plural)",
      "gender": "M",
      "number": "Plural"
    }
  },
  "ואברים": {
    "translation": "and limbs",
    "shoresh": "א - ב - ר",
    "transliteration": "ve-e-va-rim",
    "grammar": {
      "pos": "Noun (Plural)",
      "prefixes": [
        {
          "hePrefix": "וְ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ],
      "gender": "M",
      "number": "Plural"
    }
  },
  "וכל": {
    "translation": "and all",
    "shoresh": "כ - ל - ל",
    "transliteration": "ve-chol",
    "grammar": {
      "pos": "Quantifier",
      "prefixes": [
        {
          "hePrefix": "וְ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ]
    }
  },
  "הנאכלים": {
    "translation": "those sacrifices eaten",
    "shoresh": "א - כ - ל",
    "transliteration": "ha-ne-e-cha-lim",
    "grammar": {
      "pos": "Verb / Participle",
      "binyan": "Nif'al",
      "tense": "Present (Beinoni)",
      "prefixes": [
        {
          "hePrefix": "הַ־",
          "name": "Relative Article",
          "meaning": "that which are"
        }
      ],
      "gender": "M",
      "number": "Plural"
    }
  },
  "ליום": {
    "translation": "for a day",
    "shoresh": "י - ו - ם",
    "transliteration": "le-yom",
    "grammar": {
      "pos": "Preposition + Noun Construct",
      "prefixes": [
        {
          "hePrefix": "לְ־",
          "name": "Preposition",
          "meaning": "for"
        }
      ]
    }
  },
  "אחד": {
    "translation": "one",
    "shoresh": "א - ח - ד",
    "transliteration": "e-chad",
    "grammar": {
      "pos": "Cardinal Number",
      "gender": "M"
    }
  },
  "למה": {
    "translation": "why",
    "shoresh": "מ - ה",
    "transliteration": "la-mah",
    "grammar": {
      "pos": "Interrogative",
      "prefixes": [
        {
          "hePrefix": "לָ־",
          "name": "Preposition",
          "meaning": "for what / why"
        }
      ]
    }
  },
  "כדי": {
    "translation": "in order",
    "shoresh": "ד - י",
    "transliteration": "ke-dei",
    "grammar": {
      "pos": "Conjunction",
      "prefixes": [
        {
          "hePrefix": "כְּ־",
          "name": "Preposition",
          "meaning": "as / according to"
        }
      ],
      "notes": "Expresses purpose: in order to."
    }
  },
  "להרחיק": {
    "translation": "to distance",
    "shoresh": "ר - ח - ק",
    "transliteration": "le-har-chik",
    "grammar": {
      "pos": "Verb (Infinitive)",
      "binyan": "Hif'il",
      "tense": "Infinitive Construct",
      "prefixes": [
        {
          "hePrefix": "לְ־",
          "name": "Infinitive Prefix",
          "meaning": "to"
        }
      ],
      "notes": "Creating a protective fence around Torah law (syag)."
    }
  },
  "האדם": {
    "translation": "a person",
    "shoresh": "א - ד - ם",
    "transliteration": "ha-a-dam",
    "grammar": {
      "pos": "Noun",
      "prefixes": [
        {
          "hePrefix": "הָ־",
          "name": "Definite Article",
          "meaning": "the / a"
        }
      ]
    }
  },
  "מן": {
    "translation": "from",
    "shoresh": "—",
    "transliteration": "min",
    "grammar": {
      "pos": "Preposition",
      "meaning": "from / away from"
    }
  },
  "העברה": {
    "translation": "transgression",
    "shoresh": "ע - ב - ר",
    "transliteration": "ha-a-vei-rah",
    "grammar": {
      "pos": "Noun",
      "prefixes": [
        {
          "hePrefix": "הָ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ],
      "gender": "F",
      "number": "Singular"
    }
  },
  "בשחרית": {
    "translation": "in the morning",
    "shoresh": "שׁ - ח - ר",
    "transliteration": "be-sha-cha-rit",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "בְּ־",
          "name": "Preposition",
          "meaning": "in / during"
        }
      ]
    }
  },
  "משיכיר": {
    "translation": "From when one can distinguish",
    "shoresh": "נ - כ - ר",
    "transliteration": "mi-she-yak-kir",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Future / Subjunctive",
      "prefixes": [
        {
          "hePrefix": "מִ־",
          "name": "Preposition",
          "meaning": "from"
        },
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "when"
        }
      ]
    }
  },
  "בין": {
    "translation": "between",
    "shoresh": "ב - י - ן",
    "transliteration": "bein",
    "grammar": {
      "pos": "Preposition",
      "meaning": "between"
    }
  },
  "תכלת": {
    "translation": "sky-blue (tekhelet)",
    "shoresh": "ת - כ - ל",
    "transliteration": "tche-let",
    "grammar": {
      "pos": "Noun",
      "notes": "The ritual biblical blue dye used for tzitzit."
    }
  },
  "ללבן": {
    "translation": "and white",
    "shoresh": "ל - ב - ן",
    "transliteration": "le-la-van",
    "grammar": {
      "pos": "Adjective",
      "prefixes": [
        {
          "hePrefix": "לְ־",
          "name": "Preposition",
          "meaning": "to / and"
        }
      ]
    }
  },
  "לכרתי": {
    "translation": "and leek-green",
    "shoresh": "כ - ר - ת",
    "transliteration": "le-khar-ti",
    "grammar": {
      "pos": "Noun / Adjective",
      "prefixes": [
        {
          "hePrefix": "לְ־",
          "name": "Preposition",
          "meaning": "to / and"
        }
      ],
      "notes": "A greenish hue resembling the color of a leek."
    }
  },
  "וגומרה": {
    "translation": "and finishes it",
    "shoresh": "ג - מ - ר",
    "transliteration": "ve-gom-rah",
    "grammar": {
      "pos": "Verb + Suffix",
      "binyan": "Pa'al (Qal)",
      "tense": "Present (Beinoni)",
      "prefixes": [
        {
          "hePrefix": "וְ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־ָהּ",
          "name": "Object Suffix",
          "meaning": "it (f.)"
        }
      ]
    }
  },
  "הנץ": {
    "translation": "the sparkling of",
    "shoresh": "נ - צ - ץ",
    "transliteration": "he-netz",
    "grammar": {
      "pos": "Noun (Construct)",
      "notes": "Hanetz HaChamah: the initial rays of sunrise."
    }
  },
  "החמה": {
    "translation": "the sun",
    "shoresh": "ח - מ - ם",
    "transliteration": "ha-cha-mah",
    "grammar": {
      "pos": "Noun",
      "prefixes": [
        {
          "hePrefix": "הַ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ]
    }
  },
  "יהושע": {
    "translation": "Yehoshua",
    "shoresh": "—",
    "transliteration": "Ye-ho-shu-a",
    "grammar": {
      "pos": "Proper Name",
      "notes": "Rabbi Yehoshua ben Chananya, leading Tanna."
    }
  },
  "שלש": {
    "translation": "three",
    "shoresh": "שׁ - ל - שׁ",
    "transliteration": "sha-losh",
    "grammar": {
      "pos": "Numeral",
      "gender": "F"
    }
  },
  "שעות": {
    "translation": "hours",
    "shoresh": "שׁ - ע - ה",
    "transliteration": "sha-ot",
    "grammar": {
      "pos": "Noun (Plural)",
      "gender": "F",
      "number": "Plural"
    }
  },
  "שכן": {
    "translation": "for such is",
    "shoresh": "כ - ו - ן",
    "transliteration": "she-ken",
    "grammar": {
      "pos": "Conjunction",
      "prefixes": [
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "that / for"
        }
      ]
    }
  },
  "דרך": {
    "translation": "the custom of",
    "shoresh": "ד - ר - ך",
    "transliteration": "de-rech",
    "grammar": {
      "pos": "Noun (Construct)",
      "meaning": "way / practice / custom"
    }
  },
  "בני": {
    "translation": "the sons of",
    "shoresh": "ב - נ - ה",
    "transliteration": "be-nei",
    "grammar": {
      "pos": "Noun (Construct Plural)",
      "meaning": "children / sons of"
    }
  },
  "מלכים": {
    "translation": "kings",
    "shoresh": "מ - ל - ך",
    "transliteration": "me-la-chim",
    "grammar": {
      "pos": "Noun (Plural)",
      "gender": "M",
      "number": "Plural"
    }
  },
  "לעמוד": {
    "translation": "to arise",
    "shoresh": "ע - מ - ד",
    "transliteration": "la-a-mod",
    "grammar": {
      "pos": "Verb (Infinitive)",
      "binyan": "Pa'al (Qal)",
      "prefixes": [
        {
          "hePrefix": "לַ־",
          "name": "Infinitive Prefix",
          "meaning": "to"
        }
      ]
    }
  },
  "בשלוש": {
    "translation": "at three",
    "shoresh": "שׁ - ל - שׁ",
    "transliteration": "be-sha-losh",
    "grammar": {
      "pos": "Numeral",
      "prefixes": [
        {
          "hePrefix": "בְּ־",
          "name": "Preposition",
          "meaning": "at"
        }
      ]
    }
  },
  "הקורא": {
    "translation": "One who recites",
    "shoresh": "ק - ר - א",
    "transliteration": "ha-ko-rei",
    "grammar": {
      "pos": "Verb / Participle",
      "binyan": "Pa'al",
      "tense": "Present (Beinoni)",
      "prefixes": [
        {
          "hePrefix": "הַ־",
          "name": "Relative Article",
          "meaning": "the one who"
        }
      ]
    }
  },
  "מכאן": {
    "translation": "from here",
    "shoresh": "כ - א - ן",
    "transliteration": "mi-kan",
    "grammar": {
      "pos": "Adverb",
      "prefixes": [
        {
          "hePrefix": "מִ־",
          "name": "Preposition",
          "meaning": "from"
        }
      ]
    }
  },
  "ואילך": {
    "translation": "and forward / onward",
    "shoresh": "ה - ל - ך",
    "transliteration": "ve-ei-lach",
    "grammar": {
      "pos": "Adverb",
      "prefixes": [
        {
          "hePrefix": "וְ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ]
    }
  },
  "הפסיד": {
    "translation": "does not lose out",
    "shoresh": "פ - ס - ד",
    "transliteration": "hif-sid",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Past"
    }
  },
  "כאדם": {
    "translation": "like a person",
    "shoresh": "א - ד - ם",
    "transliteration": "ke-a-dam",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "כְּ־",
          "name": "Preposition",
          "meaning": "as / like"
        }
      ]
    }
  },
  "בתורה": {
    "translation": "in the Torah",
    "shoresh": "י - ר - ה",
    "transliteration": "ba-To-rah",
    "grammar": {
      "pos": "Noun",
      "prefixes": [
        {
          "hePrefix": "בַּ־",
          "name": "Preposition + Article",
          "meaning": "in the"
        }
      ]
    }
  },
  "בית": {
    "translation": "The School of",
    "shoresh": "ב - י - ת",
    "transliteration": "Beit",
    "grammar": {
      "pos": "Noun (Construct)",
      "meaning": "House / Academy of"
    }
  },
  "שמאי": {
    "translation": "Shammai",
    "shoresh": "—",
    "transliteration": "Sham-mai",
    "grammar": {
      "pos": "Proper Name",
      "notes": "The Academy of Shammai."
    }
  },
  "בערב": {
    "translation": "In the evening",
    "shoresh": "ע - ר - ב",
    "transliteration": "ba-e-rev",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "בָּ־",
          "name": "Preposition + Article",
          "meaning": "in the"
        }
      ]
    }
  },
  "אדם": {
    "translation": "person",
    "shoresh": "א - ד - ם",
    "transliteration": "a-dam",
    "grammar": {
      "pos": "Noun",
      "meaning": "man / person / everyone"
    }
  },
  "יטו": {
    "translation": "should recline",
    "shoresh": "נ - ט - ה",
    "transliteration": "yat-tu",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Future / Jussive",
      "number": "Plural",
      "notes": "Literally to incline or lean sideways on a couch."
    }
  },
  "ויקראו": {
    "translation": "and recite",
    "shoresh": "ק - ר - א",
    "transliteration": "ve-yik-re-u",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Future",
      "prefixes": [
        {
          "hePrefix": "וְ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ],
      "number": "Plural"
    }
  },
  "ובבקר": {
    "translation": "and in the morning",
    "shoresh": "ב - ק - ר",
    "transliteration": "u-va-bo-ker",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "וּ־",
          "name": "Conjunction",
          "meaning": "and"
        },
        {
          "hePrefix": "בַ־",
          "name": "Preposition + Article",
          "meaning": "in the"
        }
      ]
    }
  },
  "יעמדו": {
    "translation": "should stand",
    "shoresh": "ע - מ - ד",
    "transliteration": "ya-am-du",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Future / Jussive",
      "number": "Plural"
    }
  },
  "שנאמר": {
    "translation": "as it is stated",
    "shoresh": "א - מ - ר",
    "transliteration": "she-ne-e-mar",
    "grammar": {
      "pos": "Verb Formula",
      "binyan": "Nif'al",
      "tense": "Past",
      "prefixes": [
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "as / that"
        }
      ],
      "notes": "Standard rabbinic formula introducing a biblical prooftext."
    }
  },
  "דברים": {
    "translation": "things / guiding principles",
    "shoresh": "ד - ב - ר",
    "transliteration": "de-va-rim",
    "grammar": {
      "pos": "Noun (Plural)",
      "gender": "M",
      "number": "Plural"
    }
  },
  "ו": {
    "translation": "6",
    "shoresh": "—",
    "transliteration": "6",
    "grammar": {
      "pos": "Numeral",
      "notes": "Chapter 6 of Deuteronomy."
    }
  },
  "ובשכבך": {
    "translation": "and when you lie down",
    "shoresh": "שׁ - כ - ב",
    "transliteration": "u-ve-shoch-be-cha",
    "grammar": {
      "pos": "Verb (Infinitive Construct) + Suffix",
      "prefixes": [
        {
          "hePrefix": "וּ־",
          "name": "Conjunction",
          "meaning": "and"
        },
        {
          "hePrefix": "בְ־",
          "name": "Preposition",
          "meaning": "in / when"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־ךָ",
          "name": "Pronominal Suffix",
          "meaning": "your (m.s.)"
        }
      ],
      "notes": "Quoting Deut. 6:7."
    }
  },
  "ובקומך": {
    "translation": "and when you rise up",
    "shoresh": "ק - ו - ם",
    "transliteration": "u-ve-ku-me-cha",
    "grammar": {
      "pos": "Verb (Infinitive Construct) + Suffix",
      "prefixes": [
        {
          "hePrefix": "וּ־",
          "name": "Conjunction",
          "meaning": "and"
        },
        {
          "hePrefix": "בְ־",
          "name": "Preposition",
          "meaning": "in / when"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־ךָ",
          "name": "Pronominal Suffix",
          "meaning": "your (m.s.)"
        }
      ],
      "notes": "Quoting Deut. 6:7."
    }
  },
  "הלל": {
    "translation": "Hillel",
    "shoresh": "—",
    "transliteration": "Hil-lel",
    "grammar": {
      "pos": "Proper Name",
      "notes": "The Academy of Hillel (Beit Hillel)."
    }
  },
  "קורא": {
    "translation": "recites",
    "shoresh": "ק - ר - א",
    "transliteration": "ko-rei",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present (Beinoni)",
      "gender": "M",
      "number": "Singular"
    }
  },
  "כדרכו": {
    "translation": "in his customary manner",
    "shoresh": "ד - ר - ך",
    "transliteration": "ke-dar-ko",
    "grammar": {
      "pos": "Preposition + Noun + Suffix",
      "prefixes": [
        {
          "hePrefix": "כְּ־",
          "name": "Preposition",
          "meaning": "in accordance with"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־וֹ",
          "name": "Pronominal Suffix",
          "meaning": "his"
        }
      ]
    }
  },
  "שם": {
    "translation": "there (ibid.)",
    "shoresh": "—",
    "transliteration": "sham",
    "grammar": {
      "pos": "Adverb",
      "notes": "Refers to the same biblical chapter previously cited."
    }
  },
  "ובלכתך": {
    "translation": "and when you walk",
    "shoresh": "ה - ל - ך",
    "transliteration": "u-ve-lech-te-cha",
    "grammar": {
      "pos": "Verb (Infinitive Construct) + Suffix",
      "prefixes": [
        {
          "hePrefix": "וּ־",
          "name": "Conjunction",
          "meaning": "and"
        },
        {
          "hePrefix": "בְ־",
          "name": "Preposition",
          "meaning": "in / while"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־ךָ",
          "name": "Pronominal Suffix",
          "meaning": "your (m.s.)"
        }
      ],
      "notes": "Quoting Deut. 6:7."
    }
  },
  "בדרך": {
    "translation": "along the way",
    "shoresh": "ד - ר - ך",
    "transliteration": "ba-da-rech",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "בַּ־",
          "name": "Preposition + Article",
          "meaning": "on the"
        }
      ]
    }
  },
  "נאמר": {
    "translation": "was it stated",
    "shoresh": "א - מ - ר",
    "transliteration": "ne-e-mar",
    "grammar": {
      "pos": "Verb",
      "binyan": "Nif'al",
      "tense": "Past",
      "gender": "M"
    }
  },
  "שבני": {
    "translation": "that people",
    "shoresh": "ב - נ - ה",
    "transliteration": "she-be-nei",
    "grammar": {
      "pos": "Noun (Construct)",
      "prefixes": [
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "that"
        }
      ]
    }
  },
  "שוכבים": {
    "translation": "sleep / lie down",
    "shoresh": "שׁ - כ - ב",
    "transliteration": "shoch-vim",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present (Beinoni)",
      "gender": "M",
      "number": "Plural"
    }
  },
  "עומדים": {
    "translation": "awake / standing up",
    "shoresh": "ע - מ - ד",
    "transliteration": "om-dim",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present (Beinoni)",
      "gender": "M",
      "number": "Plural"
    }
  },
  "טרפון": {
    "translation": "Tarfon",
    "shoresh": "—",
    "transliteration": "Tar-fon",
    "grammar": {
      "pos": "Proper Name",
      "notes": "Rabbi Tarfon, renowned priest and scholar of Lod."
    }
  },
  "אני": {
    "translation": "I",
    "shoresh": "—",
    "transliteration": "a-ni",
    "grammar": {
      "pos": "Personal Pronoun",
      "person": "1st",
      "number": "Singular"
    }
  },
  "הייתי": {
    "translation": "was",
    "shoresh": "ה - י - ה",
    "transliteration": "ha-yi-ti",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past",
      "person": "1st",
      "number": "Singular"
    }
  },
  "בא": {
    "translation": "traveling / coming",
    "shoresh": "ב - ו - א",
    "transliteration": "ba",
    "grammar": {
      "pos": "Verb / Participle",
      "binyan": "Pa'al",
      "tense": "Present",
      "gender": "M",
      "number": "Singular"
    }
  },
  "והטיתי": {
    "translation": "and I reclined",
    "shoresh": "נ - ט - ה",
    "transliteration": "ve-hit-tei-ti",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Past",
      "person": "1st",
      "prefixes": [
        {
          "hePrefix": "וְ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ]
    }
  },
  "כדברי": {
    "translation": "in accordance with the words of",
    "shoresh": "ד - ב - ר",
    "transliteration": "ke-div-rei",
    "grammar": {
      "pos": "Preposition + Noun Construct",
      "prefixes": [
        {
          "hePrefix": "כְּ־",
          "name": "Preposition",
          "meaning": "according to"
        }
      ]
    }
  },
  "וסכנתי": {
    "translation": "and I endangered",
    "shoresh": "ס - כ - ן",
    "transliteration": "ve-sik-kan-ti",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pi'el",
      "tense": "Past",
      "person": "1st",
      "prefixes": [
        {
          "hePrefix": "וְ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ]
    }
  },
  "בעצמי": {
    "translation": "myself",
    "shoresh": "ע - צ - ם",
    "transliteration": "be-atz-mi",
    "grammar": {
      "pos": "Noun + Suffix",
      "prefixes": [
        {
          "hePrefix": "בְּ־",
          "name": "Preposition",
          "meaning": "in / with"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־ִי",
          "name": "Pronominal Suffix",
          "meaning": "my / myself"
        }
      ]
    }
  },
  "מפני": {
    "translation": "because of",
    "shoresh": "פ - נ - ה",
    "transliteration": "mip-pe-nei",
    "grammar": {
      "pos": "Compound Preposition",
      "prefixes": [
        {
          "hePrefix": "מִ־",
          "name": "Preposition",
          "meaning": "from the presence of"
        }
      ]
    }
  },
  "הלסטים": {
    "translation": "the bandits / highwaymen",
    "shoresh": "ל - ס - ט",
    "transliteration": "ha-lis-tim",
    "grammar": {
      "pos": "Noun (Plural)",
      "prefixes": [
        {
          "hePrefix": "הַ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ],
      "notes": "From Greek λῃστής (lēstēs): brigand or robber."
    }
  },
  "כדאי": {
    "translation": "deserving",
    "shoresh": "ד - י",
    "transliteration": "ke-dai",
    "grammar": {
      "pos": "Adjective",
      "meaning": "worthy / deserving"
    }
  },
  "היית": {
    "translation": "you were",
    "shoresh": "ה - י - ה",
    "transliteration": "ha-yi-ta",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past",
      "person": "2nd",
      "gender": "M"
    }
  },
  "לחוב": {
    "translation": "to be held liable",
    "shoresh": "ח - ו - ב",
    "transliteration": "la-chuv",
    "grammar": {
      "pos": "Verb (Infinitive)",
      "binyan": "Pa'al",
      "prefixes": [
        {
          "hePrefix": "לָ־",
          "name": "Infinitive Prefix",
          "meaning": "to"
        }
      ]
    }
  },
  "בעצמך": {
    "translation": "with your own life",
    "shoresh": "ע - צ - ם",
    "transliteration": "be-atz-me-cha",
    "grammar": {
      "pos": "Noun + Suffix",
      "prefixes": [
        {
          "hePrefix": "בְּ־",
          "name": "Preposition",
          "meaning": "in / with"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־ךָ",
          "name": "Pronominal Suffix",
          "meaning": "your (m.s.)"
        }
      ]
    }
  },
  "שעברת": {
    "translation": "for you transgressed",
    "shoresh": "ע - ב - ר",
    "transliteration": "she-a-var-ta",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past",
      "person": "2nd",
      "prefixes": [
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "that / because"
        }
      ]
    }
  },
  "בשחר": {
    "translation": "In the morning",
    "shoresh": "שׁ - ח - ר",
    "transliteration": "ba-sha-char",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "בַּ־",
          "name": "Preposition + Article",
          "meaning": "in the"
        }
      ]
    }
  },
  "מברך": {
    "translation": "one recites blessings",
    "shoresh": "ב - ר - ך",
    "transliteration": "me-va-rech",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pi'el",
      "tense": "Present (Beinoni)",
      "gender": "M",
      "number": "Singular"
    }
  },
  "שתים": {
    "translation": "two",
    "shoresh": "שׁ - נ - ה",
    "transliteration": "shta-yim",
    "grammar": {
      "pos": "Cardinal Number",
      "gender": "F"
    }
  },
  "לפניה": {
    "translation": "before it",
    "shoresh": "פ - נ - ה",
    "transliteration": "le-fa-ne-ha",
    "grammar": {
      "pos": "Preposition + Suffix",
      "prefixes": [
        {
          "hePrefix": "לְ־",
          "name": "Preposition",
          "meaning": "to / before"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־הָ",
          "name": "Object Suffix",
          "meaning": "it (f.)"
        }
      ]
    }
  },
  "ואחת": {
    "translation": "and one",
    "shoresh": "א - ח - ד",
    "transliteration": "ve-a-chat",
    "grammar": {
      "pos": "Cardinal Number",
      "prefixes": [
        {
          "hePrefix": "וְ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ],
      "gender": "F"
    }
  },
  "לאחריה": {
    "translation": "after it",
    "shoresh": "א - ח - ר",
    "transliteration": "le-a-cha-re-ha",
    "grammar": {
      "pos": "Preposition + Suffix",
      "prefixes": [
        {
          "hePrefix": "לְ־",
          "name": "Preposition",
          "meaning": "after"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־הָ",
          "name": "Object Suffix",
          "meaning": "it (f.)"
        }
      ]
    }
  },
  "ושתים": {
    "translation": "and two",
    "shoresh": "שׁ - נ - ה",
    "transliteration": "u-shta-yim",
    "grammar": {
      "pos": "Cardinal Number",
      "prefixes": [
        {
          "hePrefix": "וּ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ],
      "gender": "F"
    }
  },
  "אחת": {
    "translation": "one blessing",
    "shoresh": "א - ח - ד",
    "transliteration": "a-chat",
    "grammar": {
      "pos": "Cardinal Number",
      "gender": "F"
    }
  },
  "ארכה": {
    "translation": "a long one",
    "shoresh": "א - ר - ך",
    "transliteration": "a-ru-kah",
    "grammar": {
      "pos": "Adjective",
      "gender": "F",
      "number": "Singular"
    }
  },
  "קצרה": {
    "translation": "a short one",
    "shoresh": "ק - צ - ר",
    "transliteration": "ktza-rah",
    "grammar": {
      "pos": "Adjective",
      "gender": "F",
      "number": "Singular"
    }
  },
  "מקום": {
    "translation": "In a place where",
    "shoresh": "ק - ו - ם",
    "transliteration": "ma-kom",
    "grammar": {
      "pos": "Noun (Construct)",
      "meaning": "place / circumstance"
    }
  },
  "להאריך": {
    "translation": "to lengthen",
    "shoresh": "א - ר - ך",
    "transliteration": "le-ha-a-rich",
    "grammar": {
      "pos": "Verb (Infinitive)",
      "binyan": "Hif'il",
      "prefixes": [
        {
          "hePrefix": "לְ־",
          "name": "Infinitive Prefix",
          "meaning": "to"
        }
      ]
    }
  },
  "אינו": {
    "translation": "he is not",
    "shoresh": "א - י - ן",
    "transliteration": "ei-no",
    "grammar": {
      "pos": "Negative Copula + Suffix",
      "suffixes": [
        {
          "heSuffix": "־וֹ",
          "name": "Pronoun",
          "meaning": "he"
        }
      ]
    }
  },
  "רשאי": {
    "translation": "permitted",
    "shoresh": "ר - שׁ - ה",
    "transliteration": "ra-shai",
    "grammar": {
      "pos": "Adjective",
      "meaning": "authorized / allowed"
    }
  },
  "לקצר": {
    "translation": "to shorten",
    "shoresh": "ק - צ - ר",
    "transliteration": "le-katz-tzer",
    "grammar": {
      "pos": "Verb (Infinitive)",
      "binyan": "Pi'el",
      "prefixes": [
        {
          "hePrefix": "לְ־",
          "name": "Infinitive Prefix",
          "meaning": "to"
        }
      ]
    }
  },
  "לחתם": {
    "translation": "to conclude with a blessing seal",
    "shoresh": "ח - ת - ם",
    "transliteration": "lach-tom",
    "grammar": {
      "pos": "Verb (Infinitive)",
      "binyan": "Pa'al",
      "prefixes": [
        {
          "hePrefix": "לַ־",
          "name": "Infinitive Prefix",
          "meaning": "to"
        }
      ],
      "notes": "Chatimah: concluding formula (e.g. Barukh Attah Hashem...)"
    }
  },
  "שלא": {
    "translation": "not to",
    "shoresh": "—",
    "transliteration": "she-lo",
    "grammar": {
      "pos": "Conjunction + Negative",
      "prefixes": [
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "that"
        }
      ]
    }
  },
  "מזכירין": {
    "translation": "We mention",
    "shoresh": "ז - כ - ר",
    "transliteration": "maz-ki-rin",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Present (Beinoni)",
      "gender": "M",
      "number": "Plural"
    }
  },
  "יציאת": {
    "translation": "the Exodus of",
    "shoresh": "י - צ - א",
    "transliteration": "ye-tzi-at",
    "grammar": {
      "pos": "Noun (Construct)",
      "gender": "F",
      "number": "Singular"
    }
  },
  "מצרים": {
    "translation": "Egypt",
    "shoresh": "מ - צ - ר",
    "transliteration": "Mitz-ra-yim",
    "grammar": {
      "pos": "Proper Noun",
      "notes": "The land of Egypt."
    }
  },
  "בלילות": {
    "translation": "at nights",
    "shoresh": "ל - י - ל",
    "transliteration": "ba-lei-lot",
    "grammar": {
      "pos": "Noun (Plural)",
      "prefixes": [
        {
          "hePrefix": "בַּ־",
          "name": "Preposition + Article",
          "meaning": "in the"
        }
      ],
      "gender": "M/F",
      "number": "Plural"
    }
  },
  "אלעזר": {
    "translation": "Elazar",
    "shoresh": "—",
    "transliteration": "El-a-zar",
    "grammar": {
      "pos": "Proper Name",
      "notes": "Rabbi Elazar ben Azarya, appointed head of the Yeshiva at age 18."
    }
  },
  "בן": {
    "translation": "son of",
    "shoresh": "ב - נ - ה",
    "transliteration": "ben",
    "grammar": {
      "pos": "Noun (Construct)",
      "meaning": "son of"
    }
  },
  "עזריה": {
    "translation": "Azarya",
    "shoresh": "—",
    "transliteration": "A-zar-yah",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "הרי": {
    "translation": "Behold",
    "shoresh": "—",
    "transliteration": "ha-rei",
    "grammar": {
      "pos": "Presentative Particle",
      "meaning": "behold / here"
    }
  },
  "כשבעים": {
    "translation": "like seventy",
    "shoresh": "שׁ - ב - ע",
    "transliteration": "kich-shiv-im",
    "grammar": {
      "pos": "Numeral",
      "prefixes": [
        {
          "hePrefix": "כִּ־",
          "name": "Preposition",
          "meaning": "as / like"
        }
      ]
    }
  },
  "שנה": {
    "translation": "years of age",
    "shoresh": "שׁ - נ - ה",
    "transliteration": "sha-nah",
    "grammar": {
      "pos": "Noun",
      "gender": "F",
      "number": "Singular"
    }
  },
  "זכיתי": {
    "translation": "did I merit",
    "shoresh": "ז - כ - ה",
    "transliteration": "za-chi-ti",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past",
      "person": "1st"
    }
  },
  "שתאמר": {
    "translation": "that it should be recited",
    "shoresh": "א - מ - ר",
    "transliteration": "she-te-a-mer",
    "grammar": {
      "pos": "Verb",
      "binyan": "Nif'al",
      "tense": "Future",
      "prefixes": [
        {
          "hePrefix": "שֶׁ־",
          "name": "Relative Particle",
          "meaning": "that"
        }
      ]
    }
  },
  "זומא": {
    "translation": "Zoma",
    "shoresh": "—",
    "transliteration": "Zo-ma",
    "grammar": {
      "pos": "Proper Name",
      "notes": "Ben Zoma (Shimon ben Zoma), famed early sage and exegete."
    }
  },
  "דרשה": {
    "translation": "interpreted it",
    "shoresh": "ד - ר - שׁ",
    "transliteration": "de-ra-shah",
    "grammar": {
      "pos": "Verb + Suffix",
      "binyan": "Pa'al",
      "tense": "Past",
      "suffixes": [
        {
          "heSuffix": "־ָהּ",
          "name": "Object Suffix",
          "meaning": "it (f.)"
        }
      ]
    }
  },
  "למען": {
    "translation": "So that",
    "shoresh": "—",
    "transliteration": "le-ma-an",
    "grammar": {
      "pos": "Conjunction",
      "meaning": "in order that"
    }
  },
  "תזכר": {
    "translation": "you may remember",
    "shoresh": "ז - כ - ר",
    "transliteration": "tiz-kor",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Future",
      "person": "2nd"
    }
  },
  "יום": {
    "translation": "the day of",
    "shoresh": "י - ו - ם",
    "transliteration": "yom",
    "grammar": {
      "pos": "Noun (Construct)"
    }
  },
  "צאתך": {
    "translation": "your departure",
    "shoresh": "י - צ - א",
    "transliteration": "tzet-cha",
    "grammar": {
      "pos": "Infinitive Construct + Suffix",
      "suffixes": [
        {
          "heSuffix": "־ךָ",
          "name": "Pronominal Suffix",
          "meaning": "your (m.s.)"
        }
      ]
    }
  },
  "מארץ": {
    "translation": "from the land of",
    "shoresh": "א - ר - ץ",
    "transliteration": "me-e-retz",
    "grammar": {
      "pos": "Preposition + Noun Construct",
      "prefixes": [
        {
          "hePrefix": "מֵ־",
          "name": "Preposition",
          "meaning": "from"
        }
      ]
    }
  },
  "ימי": {
    "translation": "the days of",
    "shoresh": "י - ו - ם",
    "transliteration": "ye-mei",
    "grammar": {
      "pos": "Noun (Construct Plural)"
    }
  },
  "חייך": {
    "translation": "your life",
    "shoresh": "ח - י - י",
    "transliteration": "cha-ye-cha",
    "grammar": {
      "pos": "Noun (Plural) + Suffix",
      "suffixes": [
        {
          "heSuffix": "־ךָ",
          "name": "Pronominal Suffix",
          "meaning": "your (m.s.)"
        }
      ]
    }
  },
  "הימים": {
    "translation": "the days",
    "shoresh": "י - ו - ם",
    "transliteration": "ha-ya-mim",
    "grammar": {
      "pos": "Noun (Plural)",
      "prefixes": [
        {
          "hePrefix": "הַ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ]
    }
  },
  "הלילות": {
    "translation": "the nights",
    "shoresh": "ל - י - ל",
    "transliteration": "ha-lei-lot",
    "grammar": {
      "pos": "Noun (Plural)",
      "prefixes": [
        {
          "hePrefix": "הַ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ]
    }
  },
  "להביא": {
    "translation": "to include",
    "shoresh": "ב - ו - א",
    "transliteration": "le-ha-vi",
    "grammar": {
      "pos": "Verb (Infinitive)",
      "binyan": "Hif'il",
      "prefixes": [
        {
          "hePrefix": "לְ־",
          "name": "Infinitive Prefix",
          "meaning": "to"
        }
      ]
    }
  },
  "הזה": {
    "translation": "this present world",
    "shoresh": "ז - ה",
    "transliteration": "ha-zeh",
    "grammar": {
      "pos": "Demonstrative Pronoun",
      "prefixes": [
        {
          "hePrefix": "הַ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ]
    }
  },
  "העולם": {
    "translation": "this world",
    "shoresh": "ע - ל - ם",
    "transliteration": "ha-o-lam",
    "grammar": {
      "pos": "Noun",
      "prefixes": [
        {
          "hePrefix": "הָ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ]
    }
  },
  "לימות": {
    "translation": "for the era of",
    "shoresh": "י - ו - ם",
    "transliteration": "li-mot",
    "grammar": {
      "pos": "Preposition + Noun Construct",
      "prefixes": [
        {
          "hePrefix": "לִ־",
          "name": "Preposition",
          "meaning": "for"
        }
      ]
    }
  },
  "המשיח": {
    "translation": "the Messiah",
    "shoresh": "מ - שׁ - ח",
    "transliteration": "ha-Ma-shi-ach",
    "grammar": {
      "pos": "Noun",
      "prefixes": [
        {
          "hePrefix": "הַ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ],
      "notes": "The Messianic redemption era."
    }
  },
  "משה": {
    "translation": "Moses",
    "shoresh": "—",
    "transliteration": "Mo-sheh",
    "grammar": {
      "pos": "Proper Name",
      "notes": "Moses our teacher (Moshe Rabbeinu)."
    }
  },
  "קבל": {
    "translation": "received",
    "shoresh": "ק - ב - ל",
    "transliteration": "kib-bel",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pi'el",
      "tense": "Past",
      "person": "3rd",
      "gender": "M"
    }
  },
  "תורה": {
    "translation": "the Torah",
    "shoresh": "י - ר - ה",
    "transliteration": "To-rah",
    "grammar": {
      "pos": "Noun",
      "notes": "Both the Written Torah and Oral Torah."
    }
  },
  "מסיני": {
    "translation": "from Mount Sinai",
    "shoresh": "—",
    "transliteration": "mi-Si-nai",
    "grammar": {
      "pos": "Proper Noun",
      "prefixes": [
        {
          "hePrefix": "מִ־",
          "name": "Preposition",
          "meaning": "from"
        }
      ]
    }
  },
  "ומסרה": {
    "translation": "and transmitted it",
    "shoresh": "מ - ס - ר",
    "transliteration": "u-me-sa-rah",
    "grammar": {
      "pos": "Verb + Suffix",
      "binyan": "Pa'al",
      "tense": "Past",
      "prefixes": [
        {
          "hePrefix": "וּ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ],
      "suffixes": [
        {
          "heSuffix": "־ָהּ",
          "name": "Object Suffix",
          "meaning": "it (f.)"
        }
      ]
    }
  },
  "ליהושע": {
    "translation": "to Joshua",
    "shoresh": "—",
    "transliteration": "li-Ho-shu-a",
    "grammar": {
      "pos": "Proper Name",
      "prefixes": [
        {
          "hePrefix": "לִ־",
          "name": "Preposition",
          "meaning": "to"
        }
      ]
    }
  },
  "ויהושע": {
    "translation": "and Joshua",
    "shoresh": "—",
    "transliteration": "vi-Ho-shu-a",
    "grammar": {
      "pos": "Proper Name",
      "prefixes": [
        {
          "hePrefix": "וִ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ]
    }
  },
  "לזקנים": {
    "translation": "to the Elders",
    "shoresh": "ז - ק - ן",
    "transliteration": "liz-kei-nim",
    "grammar": {
      "pos": "Noun (Plural)",
      "prefixes": [
        {
          "hePrefix": "לִ־",
          "name": "Preposition",
          "meaning": "to the"
        }
      ],
      "notes": "The Elders who led the generation following Joshua (Judges 2:7)."
    }
  },
  "וזקנים": {
    "translation": "and the Elders",
    "shoresh": "ז - ק - ן",
    "transliteration": "u-ze-kei-nim",
    "grammar": {
      "pos": "Noun (Plural)",
      "prefixes": [
        {
          "hePrefix": "וּ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ]
    }
  },
  "לנביאים": {
    "translation": "to the Prophets",
    "shoresh": "נ - ב - א",
    "transliteration": "lin-vi-im",
    "grammar": {
      "pos": "Noun (Plural)",
      "prefixes": [
        {
          "hePrefix": "לִ־",
          "name": "Preposition",
          "meaning": "to the"
        }
      ]
    }
  },
  "ונביאים": {
    "translation": "and the Prophets",
    "shoresh": "נ - ב - א",
    "transliteration": "un-vi-im",
    "grammar": {
      "pos": "Noun (Plural)",
      "prefixes": [
        {
          "hePrefix": "וּ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ]
    }
  },
  "מסרוה": {
    "translation": "transmitted it",
    "shoresh": "מ - ס - ר",
    "transliteration": "me-sa-ru-ha",
    "grammar": {
      "pos": "Verb + Suffix",
      "binyan": "Pa'al",
      "tense": "Past",
      "number": "Plural",
      "suffixes": [
        {
          "heSuffix": "־הָ",
          "name": "Object Suffix",
          "meaning": "it"
        }
      ]
    }
  },
  "לאנשי": {
    "translation": "to the Men of",
    "shoresh": "א - נ - שׁ",
    "transliteration": "le-an-shei",
    "grammar": {
      "pos": "Noun (Construct Plural)",
      "prefixes": [
        {
          "hePrefix": "לְ־",
          "name": "Preposition",
          "meaning": "to"
        }
      ]
    }
  },
  "כנסת": {
    "translation": "the Assembly",
    "shoresh": "כ - נ - ס",
    "transliteration": "kne-set",
    "grammar": {
      "pos": "Noun (Construct)"
    }
  },
  "הגדולה": {
    "translation": "the Great",
    "shoresh": "ג - ד - ל",
    "transliteration": "ha-ge-do-lah",
    "grammar": {
      "pos": "Adjective",
      "prefixes": [
        {
          "hePrefix": "הַ־",
          "name": "Definite Article",
          "meaning": "the"
        }
      ],
      "notes": "Anshei Knesset HaGedolah (The Great Assembly of 120 prophets and sages, Ezra era)."
    }
  },
  "הם": {
    "translation": "They",
    "shoresh": "—",
    "transliteration": "hem",
    "grammar": {
      "pos": "Personal Pronoun",
      "person": "3rd",
      "gender": "M",
      "number": "Plural"
    }
  },
  "שלושה": {
    "translation": "three",
    "shoresh": "שׁ - ל - שׁ",
    "transliteration": "shlo-shah",
    "grammar": {
      "pos": "Numeral",
      "gender": "M"
    }
  },
  "הוו": {
    "translation": "Be",
    "shoresh": "ה - ו - ה",
    "transliteration": "he-vu",
    "grammar": {
      "pos": "Verb (Imperative)",
      "binyan": "Pa'al",
      "number": "Plural"
    }
  },
  "מתונים": {
    "translation": "deliberate / patient",
    "shoresh": "מ - ת - ן",
    "transliteration": "me-tu-nim",
    "grammar": {
      "pos": "Adjective",
      "gender": "M",
      "number": "Plural"
    }
  },
  "בדין": {
    "translation": "in judgment",
    "shoresh": "ד - י - ן",
    "transliteration": "ba-din",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "בַּ־",
          "name": "Preposition + Article",
          "meaning": "in the"
        }
      ]
    }
  },
  "והעמידו": {
    "translation": "and establish / raise up",
    "shoresh": "ע - מ - ד",
    "transliteration": "ve-ha-a-mi-du",
    "grammar": {
      "pos": "Verb (Imperative)",
      "binyan": "Hif'il",
      "prefixes": [
        {
          "hePrefix": "וְ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ],
      "number": "Plural"
    }
  },
  "תלמידים": {
    "translation": "students / disciples",
    "shoresh": "ל - מ - ד",
    "transliteration": "tal-mi-dim",
    "grammar": {
      "pos": "Noun (Plural)",
      "gender": "M",
      "number": "Plural"
    }
  },
  "הרבה": {
    "translation": "many",
    "shoresh": "ר - ב - ה",
    "transliteration": "har-beh",
    "grammar": {
      "pos": "Adverb / Quantifier",
      "meaning": "many / abundantly"
    }
  },
  "ועשו": {
    "translation": "and make",
    "shoresh": "ע - שׂ - ה",
    "transliteration": "va-a-su",
    "grammar": {
      "pos": "Verb (Imperative)",
      "binyan": "Pa'al",
      "prefixes": [
        {
          "hePrefix": "וַ־",
          "name": "Conjunction",
          "meaning": "and"
        }
      ],
      "number": "Plural"
    }
  },
  "סיג": {
    "translation": "a protective fence",
    "shoresh": "ס - ו - ג",
    "transliteration": "siyag",
    "grammar": {
      "pos": "Noun",
      "notes": "Rabbinic safeguards and preventative decrees to protect biblical commandments."
    }
  },
  "לתורה": {
    "translation": "around the Torah",
    "shoresh": "י - ר - ה",
    "transliteration": "la-To-rah",
    "grammar": {
      "pos": "Preposition + Noun",
      "prefixes": [
        {
          "hePrefix": "לַ־",
          "name": "Preposition + Article",
          "meaning": "for the"
        }
      ]
    }
  }
};

export const COMMON_MISHNA_ROOTS: Record<string, string> = {
  "קרא": "to call / recite / read",
  "כנס": "to enter / gather",
  "אכל": "to eat",
  "רום": "to raise / terumah heave-offering",
  "שמר": "to guard / watch",
  "ראש": "head / first",
  "חכם": "wise / sage",
  "אמר": "to say",
  "חצה": "to divide in half / midnight",
  "עלה": "to rise / ascend",
  "עמד": "to stand",
  "שחר": "dawn",
  "עשה": "to make / do",
  "בוא": "to come / enter",
  "בנה": "to build / son",
  "שתה": "to drink / feast",
  "חיב": "to obligate / be liable",
  "צוה": "to command / mitzvah",
  "קטר": "to burn sacrificial fat/incense",
  "חלב": "fat / milk",
  "רחק": "to distance / keep far",
  "עבר": "to pass / transgress",
  "נכר": "to recognize / distinguish",
  "גמר": "to complete / finish",
  "מלך": "king / reign",
  "פסד": "to lose",
  "נטה": "to incline / recline",
  "סכן": "to endanger",
  "ברך": "to bless",
  "ארך": "to lengthen",
  "קצר": "to shorten",
  "חתם": "to seal / conclude",
  "זכר": "to remember / mention",
  "קבל": "to receive",
  "מסר": "to hand over / transmit",
  "למד": "to learn / teach",
  "שמע": "to hear / listen",
  "שכב": "to lie down",
  "קום": "to arise",
  "הלך": "to walk / go",
  "ירד": "to descend",
  "נתן": "to give",
  "לקח": "to take",
  "ידע": "to know",
  "ראה": "to see",
  "ישב": "to sit / dwell",
  "דבר": "to speak / word",
  "כתב": "to write",
  "פתח": "to open",
  "סגר": "to close",
  "טהר": "to be pure",
  "טמא": "to be impure",
  "קדש": "to sanctify / holy",
  "בדל": "to separate / divide",
  "דלק": "to burn / kindle",
  "פרש": "to separate / tithe",
  "חמץ": "to leaven / ferment",
  "כשר": "to be fit / valid",
  "פסל": "to disqualify / invalidate",
  "שבת": "to cease / rest",
  "שבע": "to swear / oath",
  "נדר": "to vow",
  "בדק": "to examine / search",
  "בער": "to burn / clear out",
  "בטל": "to nullify / cancel",
  "שחט": "to slaughter",
  "מלח": "to salt",
  "סכך": "to cover / shelter",
  "שפר": "to be clear / horn",
  "עשר": "to tithe",
  "פקר": "to abandon / ownerless",
  "חוב": "to obligate / be liable",
  "פטר": "to exempt / release"
};
