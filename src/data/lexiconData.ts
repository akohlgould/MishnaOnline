export interface LexiconEntry {
  translation: string;
  shoresh: string;
  transliteration: string;
  grammar: {
    pos: string;
    binyan?: string;
    tense?: string;
    gender?: 'M' | 'F' | 'Common' | 'M/F' | string;
    number?: 'Singular' | 'Plural' | 'Dual' | string;
    person?: '1st' | '2nd' | '3rd' | string;
    prefixes?: Array<{ hePrefix: string; name: string; meaning: string }>;
    suffixes?: Array<{ heSuffix: string; name: string; meaning: string }>;
    notes?: string;
    meaning?: string;
    shoreshMeaning?: string;
    [key: string]: any;
  };
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
    "translation": "hour / moment / time",
    "shoresh": "ש - ע - ה",
    "transliteration": "sha-ah",
    "grammar": {
      "pos": "Noun"
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
    "shoresh": "ל",
    "transliteration": "lo",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "לה": {
    "translation": "to her / for her",
    "shoresh": "ל",
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
    "translation": "upon him / regarding it",
    "shoresh": "ע - ל - ה",
    "transliteration": "a-lav",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "עליה": {
    "translation": "upon her / regarding it",
    "shoresh": "ע - ל - ה",
    "transliteration": "a-le-ha",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "אין": {
    "translation": "there is not / one may not",
    "shoresh": "א - י - ן",
    "transliteration": "ein",
    "grammar": {
      "pos": "Particle of Negation"
    }
  },
  "אלא": {
    "translation": "rather / but / except",
    "shoresh": "—",
    "transliteration": "el-la",
    "grammar": {
      "pos": "Adversative Particle"
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
    "translation": "Yehuda",
    "shoresh": "י - ד - ה",
    "transliteration": "Yehuda",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "רבי": {
    "translation": "Rabbi",
    "shoresh": "ר - ב - ב",
    "transliteration": "Rabbi",
    "grammar": {
      "pos": "Honorific Title"
    }
  },
  "וחכמים": {
    "translation": "and the Sages",
    "shoresh": "ח - כ - ם",
    "transliteration": "va-cha-kha-mim",
    "grammar": {
      "pos": "Conjunction + Noun"
    }
  },
  "חכמים": {
    "translation": "the Sages",
    "shoresh": "ח - כ - ם",
    "transliteration": "cha-kha-mim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "אומר": {
    "translation": "says",
    "shoresh": "א - מ - ר",
    "transliteration": "o-mer",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present"
    }
  },
  "אומרים": {
    "translation": "they say",
    "shoresh": "א - מ - ר",
    "transliteration": "om-rim",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present Plural"
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
    "translation": "even / even if",
    "shoresh": "נ - פ - ל",
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
    "translation": "priest (kohen)",
    "shoresh": "כ - ה - ן",
    "transliteration": "ko-hen",
    "grammar": {
      "pos": "Noun"
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
    "translation": "terumah (priestly heave offering)",
    "shoresh": "ר - ו - ם",
    "transliteration": "te-ru-mah",
    "grammar": {
      "pos": "Noun (Zeraim)"
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
    "translation": "tithe (tenth part)",
    "shoresh": "ע - ש - ר",
    "transliteration": "ma-a-ser",
    "grammar": {
      "pos": "Noun (Zeraim)"
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
    "translation": "consecrated Temple property",
    "shoresh": "ק - ד - ש",
    "transliteration": "hek-desh",
    "grammar": {
      "pos": "Halakhic Status"
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
    "translation": "permitted / allowed",
    "shoresh": "נ - ת - ר",
    "transliteration": "mu-tar",
    "grammar": {
      "pos": "Halakhic Status / Adjective"
    }
  },
  "אסור": {
    "translation": "forbidden / prohibited",
    "shoresh": "א - ס - ר",
    "transliteration": "a-sur",
    "grammar": {
      "pos": "Halakhic Status / Adjective"
    }
  },
  "חייב": {
    "translation": "liable / obligated",
    "shoresh": "ח - ו - ב",
    "transliteration": "cha-yav",
    "grammar": {
      "pos": "Halakhic Status / Adjective"
    }
  },
  "פטור": {
    "translation": "exempt",
    "shoresh": "פ - ט - ר",
    "transliteration": "pa-tur",
    "grammar": {
      "pos": "Halakhic Status / Adjective"
    }
  },
  "כשר": {
    "translation": "fit / valid / kosher",
    "shoresh": "כ - ש - ר",
    "transliteration": "ka-sher",
    "grammar": {
      "pos": "Halakhic Status / Adjective"
    }
  },
  "פסול": {
    "translation": "disqualified / invalid",
    "shoresh": "פ - ס - ל",
    "transliteration": "pa-sul",
    "grammar": {
      "pos": "Halakhic Status / Adjective"
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
    "translation": "leaven / chametz",
    "shoresh": "ח - מ - ץ",
    "transliteration": "cha-metz",
    "grammar": {
      "pos": "Noun (Moed)"
    }
  },
  "החמץ": {
    "translation": "the leaven",
    "shoresh": "ח - מ - ץ",
    "transliteration": "ha-cha-metz",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "מצה": {
    "translation": "matzah (unleavened bread)",
    "shoresh": "מ - צ - ה",
    "transliteration": "ma-tzah",
    "grammar": {
      "pos": "Noun (Moed)"
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
    "translation": "Passover / paschal offering",
    "shoresh": "פ - ס - ח",
    "transliteration": "pe-sach",
    "grammar": {
      "pos": "Noun (Moed)"
    }
  },
  "הפסח": {
    "translation": "the Passover / the paschal lamb",
    "shoresh": "פ - ס - ח",
    "transliteration": "ha-pe-sach",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "סוכה": {
    "translation": "sukkah (festival booth)",
    "shoresh": "ס - כ - ך",
    "transliteration": "su-kah",
    "grammar": {
      "pos": "Noun (Moed)"
    }
  },
  "לולב": {
    "translation": "lulav (palm branch)",
    "shoresh": "ל - ל - ב",
    "transliteration": "lu-lav",
    "grammar": {
      "pos": "Noun (Moed)"
    }
  },
  "אתרוג": {
    "translation": "etrog (citron)",
    "shoresh": "א - ת - ר - ג",
    "transliteration": "et-rog",
    "grammar": {
      "pos": "Noun (Moed)"
    }
  },
  "שופר": {
    "translation": "shofar (ram's horn)",
    "shoresh": "ש - פ - ר",
    "transliteration": "sho-far",
    "grammar": {
      "pos": "Noun (Moed)"
    }
  },
  "מגילה": {
    "translation": "scroll (of Esther)",
    "shoresh": "ג - ל - ל",
    "transliteration": "me-gi-lah",
    "grammar": {
      "pos": "Noun (Moed)"
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
    "translation": "(direct object marker)",
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
    "translation": "the words of",
    "shoresh": "ד - ב - ר",
    "transliteration": "div-rei",
    "grammar": {
      "pos": "Noun (Construct Plural)"
    }
  },
  "אליעזר": {
    "translation": "Eliezer",
    "shoresh": "ע - ז - ר",
    "transliteration": "Eliezer",
    "grammar": {
      "pos": "Proper Name"
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
    "translation": "Rabban (our Master)",
    "shoresh": "ר - ב - ב",
    "transliteration": "Rabban",
    "grammar": {
      "pos": "Honorific Title"
    }
  },
  "גמליאל": {
    "translation": "Gamliel",
    "shoresh": "ג - מ - ל",
    "transliteration": "Gamliel",
    "grammar": {
      "pos": "Proper Name"
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
      "tense": "Past Plural"
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
    "translation": "he said",
    "shoresh": "א - מ - ר",
    "transliteration": "a-mar",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past"
    }
  },
  "להם": {
    "translation": "to them (masc.)",
    "shoresh": "ל",
    "transliteration": "la-hem",
    "grammar": {
      "pos": "Preposition + Suffix"
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
    "translation": "they are liable / obligated",
    "shoresh": "ח - ו - ב",
    "transliteration": "cha-ya-vin",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "אתם": {
    "translation": "you (pl.m.)",
    "shoresh": "א - ת - ם",
    "transliteration": "a-tem",
    "grammar": {
      "pos": "Personal Pronoun (2mp)"
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
    "translation": "this (fem.)",
    "shoresh": "ז - ו",
    "transliteration": "zo",
    "grammar": {
      "pos": "Demonstrative Pronoun (Fem.)"
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
    "translation": "every / all",
    "shoresh": "כ - ל - ל",
    "transliteration": "kol",
    "grammar": {
      "pos": "Quantifier"
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
    "translation": "and every / and all",
    "shoresh": "כ - ל - ל",
    "transliteration": "ve-khol",
    "grammar": {
      "pos": "Conjunction + Quantifier"
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
    "translation": "one (masc.)",
    "shoresh": "א - ח - ד",
    "transliteration": "e-chad",
    "grammar": {
      "pos": "Numeral (Masc.)"
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
    "translation": "so that / in order to / sufficient",
    "shoresh": "ד - י - י",
    "transliteration": "ke-dei",
    "grammar": {
      "pos": "Preposition"
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
    "shoresh": "י - ש - ע",
    "transliteration": "Yehoshua",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "שלש": {
    "translation": "three (fem.)",
    "shoresh": "ש - ל - ש",
    "transliteration": "sha-losh",
    "grammar": {
      "pos": "Numeral (Fem.)"
    }
  },
  "שעות": {
    "translation": "hours",
    "shoresh": "ש - ע - ה",
    "transliteration": "sha-ot",
    "grammar": {
      "pos": "Noun (Plural)"
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
    "translation": "house of / school of",
    "shoresh": "ב - י - ת",
    "transliteration": "beit",
    "grammar": {
      "pos": "Noun (Construct)"
    }
  },
  "שמאי": {
    "translation": "Shammai",
    "shoresh": "ש - מ - ם",
    "transliteration": "Shammai",
    "grammar": {
      "pos": "Proper Name"
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
    "translation": "as it is stated (in Scripture)",
    "shoresh": "א - מ - ר",
    "transliteration": "she-ne-e-mar",
    "grammar": {
      "pos": "Biblical Citation Formula"
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
    "shoresh": "ה - ל - ל",
    "transliteration": "Hillel",
    "grammar": {
      "pos": "Proper Name"
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
    "transliteration": "Tarfon",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "אני": {
    "translation": "I",
    "shoresh": "א - נ - י",
    "transliteration": "a-ni",
    "grammar": {
      "pos": "Personal Pronoun (1s)"
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
    "translation": "because of / before",
    "shoresh": "פ - נ - ה",
    "transliteration": "mip-nei",
    "grammar": {
      "pos": "Prepositional Phrase"
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
    "translation": "two (fem.)",
    "shoresh": "ש - נ - ה",
    "transliteration": "shte-yim",
    "grammar": {
      "pos": "Numeral (Fem.)"
    }
  },
  "לפניה": {
    "translation": "before her",
    "shoresh": "פ - נ - ה",
    "transliteration": "le-fa-ne-ha",
    "grammar": {
      "pos": "Prep + Suffix"
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
    "translation": "one (fem.)",
    "shoresh": "א - ח - ד",
    "transliteration": "a-chat",
    "grammar": {
      "pos": "Numeral (Fem.)"
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
    "translation": "is not (masc.)",
    "shoresh": "א - י - ן",
    "transliteration": "ei-no",
    "grammar": {
      "pos": "Negative Particle + Suffix"
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
    "shoresh": "ע - ז - ר",
    "transliteration": "Elazar",
    "grammar": {
      "pos": "Proper Name"
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
    "translation": "behold / it is considered",
    "shoresh": "—",
    "transliteration": "ha-rei",
    "grammar": {
      "pos": "Demonstrative Particle"
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
    "translation": "day",
    "shoresh": "י - ו - ם",
    "transliteration": "yom",
    "grammar": {
      "pos": "Noun"
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
      "pos": "Definite Noun"
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
    "translation": "the world",
    "shoresh": "ע - ל - ם",
    "transliteration": "ha-o-lam",
    "grammar": {
      "pos": "Definite Noun"
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
    "translation": "the large / adult (fem.)",
    "shoresh": "ג - ד - ל",
    "transliteration": "ha-gdo-lah",
    "grammar": {
      "pos": "Definite Adjective"
    }
  },
  "הם": {
    "translation": "they (masc.)",
    "shoresh": "ה - מ - ם",
    "transliteration": "hem",
    "grammar": {
      "pos": "Personal Pronoun (3mp)"
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
    "translation": "by law / logically",
    "shoresh": "ד - י - ן",
    "transliteration": "ba-din",
    "grammar": {
      "pos": "Prep + Noun"
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
  },
  "מאיר": {
    "translation": "Meir",
    "shoresh": "א - ו - ר",
    "transliteration": "Meir",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "שמעון": {
    "translation": "Shimon",
    "shoresh": "ש - מ - ע",
    "transliteration": "Shimon",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "עקיבא": {
    "translation": "Akiva",
    "shoresh": "ע - ק - ב",
    "transliteration": "Akiva",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "יוסי": {
    "translation": "Yose",
    "shoresh": "י - ס - ף",
    "transliteration": "Yose",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "יוחנן": {
    "translation": "Yochanan",
    "shoresh": "ח - נ - ן",
    "transliteration": "Yochanan",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "חנינא": {
    "translation": "Chanina",
    "shoresh": "ח - נ - ן",
    "transliteration": "Chanina",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "חנניה": {
    "translation": "Chananya",
    "shoresh": "ח - נ - ן",
    "transliteration": "Chananya",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "ישמעאל": {
    "translation": "Yishmael",
    "shoresh": "ש - מ - ע",
    "transliteration": "Yishmael",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "דוסא": {
    "translation": "Dosa",
    "shoresh": "—",
    "transliteration": "Dosa",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "אמרה": {
    "translation": "she said",
    "shoresh": "א - מ - ר",
    "transliteration": "am-rah",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past Fem."
    }
  },
  "ודברי": {
    "translation": "and the words of",
    "shoresh": "ד - ב - ר",
    "transliteration": "ve-div-rei",
    "grammar": {
      "pos": "Conjunction + Noun"
    }
  },
  "וחייב": {
    "translation": "and is liable / obligated",
    "shoresh": "ח - ו - ב",
    "transliteration": "ve-cha-yav",
    "grammar": {
      "pos": "Conjunction + Adjective"
    }
  },
  "חייבת": {
    "translation": "is liable (fem.)",
    "shoresh": "ח - ו - ב",
    "transliteration": "cha-ye-vet",
    "grammar": {
      "pos": "Halakhic Status (Fem.)"
    }
  },
  "ופטור": {
    "translation": "and is exempt",
    "shoresh": "פ - ט - ר",
    "transliteration": "u-fa-tur",
    "grammar": {
      "pos": "Conjunction + Adjective"
    }
  },
  "פטורין": {
    "translation": "they are exempt",
    "shoresh": "פ - ט - ר",
    "transliteration": "pe-tu-rin",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "פטורה": {
    "translation": "exempt (fem.)",
    "shoresh": "פ - ט - ר",
    "transliteration": "pe-tu-rah",
    "grammar": {
      "pos": "Halakhic Status (Fem.)"
    }
  },
  "ומותר": {
    "translation": "and is permitted",
    "shoresh": "נ - ת - ר",
    "transliteration": "u-mu-tar",
    "grammar": {
      "pos": "Conjunction + Adjective"
    }
  },
  "מותרים": {
    "translation": "they are permitted",
    "shoresh": "י - ת - ר",
    "transliteration": "mu-ta-rim",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "מותרת": {
    "translation": "permitted (fem.)",
    "shoresh": "נ - ת - ר",
    "transliteration": "mu-te-ret",
    "grammar": {
      "pos": "Halakhic Status (Fem.)"
    }
  },
  "ואסור": {
    "translation": "and is forbidden",
    "shoresh": "א - ס - ר",
    "transliteration": "ve-a-sur",
    "grammar": {
      "pos": "Conjunction + Adjective"
    }
  },
  "אסורים": {
    "translation": "they are forbidden",
    "shoresh": "א - ס - ר",
    "transliteration": "asu-rim",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "אסורה": {
    "translation": "forbidden (fem.)",
    "shoresh": "א - ס - ר",
    "transliteration": "asu-rah",
    "grammar": {
      "pos": "Halakhic Status (Fem.)"
    }
  },
  "וכשר": {
    "translation": "and is valid / fit",
    "shoresh": "כ - ש - ר",
    "transliteration": "ve-kha-sher",
    "grammar": {
      "pos": "Conjunction + Adjective"
    }
  },
  "כשרין": {
    "translation": "they are valid / fit",
    "shoresh": "כ - ש - ר",
    "transliteration": "kshi-rin",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "כשרה": {
    "translation": "is valid (fem.)",
    "shoresh": "כ - ש - ר",
    "transliteration": "keshe-rah",
    "grammar": {
      "pos": "Halakhic Status (Fem.)"
    }
  },
  "ופסול": {
    "translation": "and is invalid / disqualified",
    "shoresh": "פ - ס - ל",
    "transliteration": "u-fa-sul",
    "grammar": {
      "pos": "Conjunction + Adjective"
    }
  },
  "פסולין": {
    "translation": "they are disqualified / invalid",
    "shoresh": "פ - ס - ל",
    "transliteration": "psu-lin",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "פסולה": {
    "translation": "disqualified / invalid (fem.)",
    "shoresh": "פ - ס - ל",
    "transliteration": "psu-lah",
    "grammar": {
      "pos": "Halakhic Status (Fem.)"
    }
  },
  "טהור": {
    "translation": "ritually pure / clean",
    "shoresh": "ט - ה - ר",
    "transliteration": "ta-hor",
    "grammar": {
      "pos": "Halakhic Status / Adjective"
    }
  },
  "וטהור": {
    "translation": "and is pure",
    "shoresh": "ט - ה - ר",
    "transliteration": "ve-ta-hor",
    "grammar": {
      "pos": "Conjunction + Adjective"
    }
  },
  "טהורים": {
    "translation": "they are pure",
    "shoresh": "ט - ה - ר",
    "transliteration": "teho-rim",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "טהורה": {
    "translation": "pure (fem.)",
    "shoresh": "ט - ה - ר",
    "transliteration": "te-ho-rah",
    "grammar": {
      "pos": "Halakhic Status (Fem.)"
    }
  },
  "טמא": {
    "translation": "ritually impure / defiled",
    "shoresh": "ט - מ - א",
    "transliteration": "ta-me",
    "grammar": {
      "pos": "Halakhic Status / Adjective"
    }
  },
  "וטמא": {
    "translation": "and is impure",
    "shoresh": "ט - מ - א",
    "transliteration": "ve-ta-me",
    "grammar": {
      "pos": "Conjunction + Adjective"
    }
  },
  "טמאין": {
    "translation": "they are impure",
    "shoresh": "ט - מ - א",
    "transliteration": "tme-in",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "טמאה": {
    "translation": "impure (fem.)",
    "shoresh": "ט - מ - א",
    "transliteration": "tme-ah",
    "grammar": {
      "pos": "Halakhic Status (Fem.)"
    }
  },
  "הבית": {
    "translation": "the house",
    "shoresh": "ב - י - ת",
    "transliteration": "ha-ba-yit",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "ובית": {
    "translation": "and the house of",
    "shoresh": "ב - י - ת",
    "transliteration": "u-veit",
    "grammar": {
      "pos": "Conjunction + Noun"
    }
  },
  "בעל": {
    "translation": "master / owner / husband",
    "shoresh": "ב - ע - ל",
    "transliteration": "ba'al",
    "grammar": {
      "pos": "Noun"
    }
  },
  "ובעל": {
    "translation": "and the master / owner of",
    "shoresh": "ב - ע - ל",
    "transliteration": "u-va'al",
    "grammar": {
      "pos": "Conjunction + Noun"
    }
  },
  "יד": {
    "translation": "hand",
    "shoresh": "י - ד - ה",
    "transliteration": "yad",
    "grammar": {
      "pos": "Noun (Fem.)"
    }
  },
  "ידו": {
    "translation": "his hand",
    "shoresh": "י - ד - ה",
    "transliteration": "ya-do",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "ידה": {
    "translation": "her hand",
    "shoresh": "י - ד - ה",
    "transliteration": "ya-dah",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "ידי": {
    "translation": "hands of",
    "shoresh": "י - ד - ה",
    "transliteration": "ye-dei",
    "grammar": {
      "pos": "Noun (Dual Construct)"
    }
  },
  "ידים": {
    "translation": "hands",
    "shoresh": "י - ד - ה",
    "transliteration": "ya-da-yim",
    "grammar": {
      "pos": "Noun (Dual)"
    }
  },
  "העני": {
    "translation": "the poor person",
    "shoresh": "ע - נ - ה",
    "transliteration": "he-a-ni",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "עני": {
    "translation": "poor person",
    "shoresh": "ע - נ - ה",
    "transliteration": "a-ni",
    "grammar": {
      "pos": "Noun / Adjective"
    }
  },
  "מבעוד": {
    "translation": "while still (day)",
    "shoresh": "ע - ו - ד",
    "transliteration": "mi-be-od",
    "grammar": {
      "pos": "Prepositional Phrase"
    }
  },
  "היום": {
    "translation": "today / the day",
    "shoresh": "י - ו - ם",
    "transliteration": "ha-yom",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "לילה": {
    "translation": "night",
    "shoresh": "ל - י - ל",
    "transliteration": "lay-lah",
    "grammar": {
      "pos": "Noun"
    }
  },
  "שבת": {
    "translation": "Shabbat / week",
    "shoresh": "ש - ב - ת",
    "transliteration": "Shabbat",
    "grammar": {
      "pos": "Proper Noun"
    }
  },
  "מלאכה": {
    "translation": "prohibited work / creative labor",
    "shoresh": "ל - א - ך",
    "transliteration": "me-la-khah",
    "grammar": {
      "pos": "Noun (Moed)"
    }
  },
  "מלאכות": {
    "translation": "labors / categories of work",
    "shoresh": "ל - א - ך",
    "transliteration": "me-la-khot",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "הוצאה": {
    "translation": "carrying out / transfer",
    "shoresh": "י - צ - א",
    "transliteration": "ho-tza-ah",
    "grammar": {
      "pos": "Verbal Noun"
    }
  },
  "הכנסה": {
    "translation": "bringing in / transfer",
    "shoresh": "כ - נ - ס",
    "transliteration": "hakh-na-sah",
    "grammar": {
      "pos": "Verbal Noun"
    }
  },
  "פשט": {
    "translation": "extended / reached out",
    "shoresh": "פ - ש - ט",
    "transliteration": "pa-shat",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past"
    }
  },
  "ופשט": {
    "translation": "and extended",
    "shoresh": "פ - ש - ט",
    "transliteration": "u-fa-shat",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "פושטין": {
    "translation": "they extend",
    "shoresh": "פ - ש - ט",
    "transliteration": "posh-tin",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present Plural"
    }
  },
  "נתן": {
    "translation": "he placed / gave",
    "shoresh": "נ - ת - ן",
    "transliteration": "na-tan",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past"
    }
  },
  "ונתן": {
    "translation": "and he placed / gave",
    "shoresh": "נ - ת - ן",
    "transliteration": "ve-na-tan",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "נותן": {
    "translation": "places / gives",
    "shoresh": "נ - ת - ן",
    "transliteration": "no-ten",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present"
    }
  },
  "נותנין": {
    "translation": "they place / give",
    "shoresh": "נ - ת - ן",
    "transliteration": "not-nin",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present Plural"
    }
  },
  "מתירין": {
    "translation": "they permit",
    "shoresh": "י - ת - ר",
    "transliteration": "ma-ti-rin",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Present Plural"
    }
  },
  "מתיר": {
    "translation": "permits",
    "shoresh": "י - ת - ר",
    "transliteration": "ma-tir",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Present"
    }
  },
  "תוך": {
    "translation": "inside / interior of",
    "shoresh": "ת - ו - ך",
    "transliteration": "tokh",
    "grammar": {
      "pos": "Noun (Construct)"
    }
  },
  "לתוך": {
    "translation": "into / inside of",
    "shoresh": "ת - ו - ך",
    "transliteration": "le-tokh",
    "grammar": {
      "pos": "Preposition"
    }
  },
  "מתוכה": {
    "translation": "from inside it",
    "shoresh": "ת - ו - ך",
    "transliteration": "mi-to-khah",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "מתוכו": {
    "translation": "from inside it (masc.)",
    "shoresh": "ת - ו - ך",
    "transliteration": "mi-to-kho",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "בתוכה": {
    "translation": "inside it",
    "shoresh": "ת - ו - ך",
    "transliteration": "be-to-khah",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "בתוכו": {
    "translation": "inside it (masc.)",
    "shoresh": "ת - ו - ך",
    "transliteration": "be-to-kho",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "פנים": {
    "translation": "inside / face",
    "shoresh": "פ - נ - ה",
    "transliteration": "pa-nim",
    "grammar": {
      "pos": "Noun"
    }
  },
  "בפנים": {
    "translation": "inside",
    "shoresh": "פ - נ - ה",
    "transliteration": "bif-nim",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "לפנים": {
    "translation": "inside / inwards",
    "shoresh": "פ - נ - ה",
    "transliteration": "lif-nim",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "חוץ": {
    "translation": "outside / except for",
    "shoresh": "ח - ו - ץ",
    "transliteration": "chutz",
    "grammar": {
      "pos": "Adverb / Preposition"
    }
  },
  "בחוץ": {
    "translation": "outside",
    "shoresh": "ח - ו - ץ",
    "transliteration": "ba-chutz",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "לחוץ": {
    "translation": "outside / outwards",
    "shoresh": "ח - ו - ץ",
    "transliteration": "la-chutz",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "שהן": {
    "translation": "that they are",
    "shoresh": "—",
    "transliteration": "she-hen",
    "grammar": {
      "pos": "Relative + Pronoun"
    }
  },
  "שהוא": {
    "translation": "that he / that it is",
    "shoresh": "ה - ו - א",
    "transliteration": "she-hu",
    "grammar": {
      "pos": "Relative + Pronoun"
    }
  },
  "שהיא": {
    "translation": "that she / that it is",
    "shoresh": "ה - י - א",
    "transliteration": "she-hi",
    "grammar": {
      "pos": "Relative + Pronoun"
    }
  },
  "שהם": {
    "translation": "that they (masc.)",
    "shoresh": "ה - מ - ם",
    "transliteration": "she-hem",
    "grammar": {
      "pos": "Relative + Pronoun"
    }
  },
  "ואין": {
    "translation": "and there is not / and one may not",
    "shoresh": "א - י - ן",
    "transliteration": "ve-ein",
    "grammar": {
      "pos": "Conjunction + Particle"
    }
  },
  "יש": {
    "translation": "there is / exists",
    "shoresh": "י - ש - ש",
    "transliteration": "yesh",
    "grammar": {
      "pos": "Particle of Existence"
    }
  },
  "כיצד": {
    "translation": "how so?",
    "shoresh": "—",
    "transliteration": "kei-tzad",
    "grammar": {
      "pos": "Interrogative Adverb"
    }
  },
  "שנים": {
    "translation": "two (masc.)",
    "shoresh": "ש - נ - ה",
    "transliteration": "she-na-yim",
    "grammar": {
      "pos": "Numeral (Masc.)"
    }
  },
  "שלשה": {
    "translation": "three (masc.)",
    "shoresh": "ש - ל - ש",
    "transliteration": "she-lo-shah",
    "grammar": {
      "pos": "Numeral (Masc.)"
    }
  },
  "ארבע": {
    "translation": "four (fem.)",
    "shoresh": "ר - ב - ע",
    "transliteration": "ar-ba",
    "grammar": {
      "pos": "Numeral (Fem.)"
    }
  },
  "ארבעה": {
    "translation": "four (masc.)",
    "shoresh": "ר - ב - ע",
    "transliteration": "ar-ba-ah",
    "grammar": {
      "pos": "Numeral (Masc.)"
    }
  },
  "חמש": {
    "translation": "five (fem.)",
    "shoresh": "ח - מ - ש",
    "transliteration": "cha-mesh",
    "grammar": {
      "pos": "Numeral (Fem.)"
    }
  },
  "חמשה": {
    "translation": "five (masc.)",
    "shoresh": "ח - מ - ש",
    "transliteration": "cha-mi-shah",
    "grammar": {
      "pos": "Numeral (Masc.)"
    }
  },
  "שש": {
    "translation": "six (fem.)",
    "shoresh": "ש - ש - ש",
    "transliteration": "shesh",
    "grammar": {
      "pos": "Numeral (Fem.)"
    }
  },
  "ששה": {
    "translation": "six (masc.)",
    "shoresh": "ש - ש - ש",
    "transliteration": "shi-shah",
    "grammar": {
      "pos": "Numeral (Masc.)"
    }
  },
  "שבע": {
    "translation": "seven (fem.)",
    "shoresh": "ש - ב - ע",
    "transliteration": "she-va",
    "grammar": {
      "pos": "Numeral (Fem.)"
    }
  },
  "שבעה": {
    "translation": "seven (masc.)",
    "shoresh": "ש - ב - ע",
    "transliteration": "shiv-ah",
    "grammar": {
      "pos": "Numeral (Masc.)"
    }
  },
  "שמונה": {
    "translation": "eight",
    "shoresh": "ש - מ - ן",
    "transliteration": "she-mo-neh",
    "grammar": {
      "pos": "Numeral"
    }
  },
  "תשע": {
    "translation": "nine (fem.)",
    "shoresh": "ת - ש - ע",
    "transliteration": "te-sha",
    "grammar": {
      "pos": "Numeral (Fem.)"
    }
  },
  "תשעה": {
    "translation": "nine (masc.)",
    "shoresh": "ת - ש - ע",
    "transliteration": "tish-ah",
    "grammar": {
      "pos": "Numeral (Masc.)"
    }
  },
  "עשר": {
    "translation": "ten (fem.)",
    "shoresh": "ע - ש - ר",
    "transliteration": "e-ser",
    "grammar": {
      "pos": "Numeral (Fem.)"
    }
  },
  "עשרה": {
    "translation": "ten (masc.)",
    "shoresh": "ע - ש - ר",
    "transliteration": "asa-rah",
    "grammar": {
      "pos": "Numeral (Masc.)"
    }
  },
  "עשרים": {
    "translation": "twenty",
    "shoresh": "ע - ש - ר",
    "transliteration": "es-rim",
    "grammar": {
      "pos": "Numeral"
    }
  },
  "שלשים": {
    "translation": "thirty",
    "shoresh": "ש - ל - ש",
    "transliteration": "shlo-shim",
    "grammar": {
      "pos": "Numeral"
    }
  },
  "ארבעים": {
    "translation": "forty",
    "shoresh": "ר - ב - ע",
    "transliteration": "ar-ba-im",
    "grammar": {
      "pos": "Numeral"
    }
  },
  "מאה": {
    "translation": "one hundred",
    "shoresh": "מ - א - ה",
    "transliteration": "me-ah",
    "grammar": {
      "pos": "Numeral"
    }
  },
  "זה": {
    "translation": "this (masc.)",
    "shoresh": "ז - ה",
    "transliteration": "zeh",
    "grammar": {
      "pos": "Demonstrative Pronoun (Masc.)"
    }
  },
  "וזה": {
    "translation": "and this (masc.)",
    "shoresh": "ז - ה",
    "transliteration": "ve-zeh",
    "grammar": {
      "pos": "Conjunction + Pronoun"
    }
  },
  "שזה": {
    "translation": "that this (masc.)",
    "shoresh": "ז - ה",
    "transliteration": "she-zeh",
    "grammar": {
      "pos": "Relative + Pronoun"
    }
  },
  "וזו": {
    "translation": "and this (fem.)",
    "shoresh": "ז - ו",
    "transliteration": "ve-zo",
    "grammar": {
      "pos": "Conjunction + Pronoun"
    }
  },
  "שזו": {
    "translation": "that this (fem.)",
    "shoresh": "ז - ו",
    "transliteration": "she-zo",
    "grammar": {
      "pos": "Relative + Pronoun"
    }
  },
  "זאת": {
    "translation": "this (fem.)",
    "shoresh": "ז - א - ת",
    "transliteration": "zot",
    "grammar": {
      "pos": "Demonstrative Pronoun (Fem.)"
    }
  },
  "אלו": {
    "translation": "these",
    "shoresh": "א - ל - ה",
    "transliteration": "e-lu",
    "grammar": {
      "pos": "Demonstrative Pronoun (Plural)"
    }
  },
  "ואלו": {
    "translation": "and these",
    "shoresh": "א - ל - ה",
    "transliteration": "ve-e-lu",
    "grammar": {
      "pos": "Conjunction + Pronoun"
    }
  },
  "שאלו": {
    "translation": "that these / they asked",
    "shoresh": "א - ל - ה",
    "transliteration": "she-e-lu",
    "grammar": {
      "pos": "Relative + Pronoun / Verb"
    }
  },
  "הוא": {
    "translation": "he / it (masc.)",
    "shoresh": "ה - ו - א",
    "transliteration": "hu",
    "grammar": {
      "pos": "Personal Pronoun (3ms)"
    }
  },
  "והוא": {
    "translation": "and he / while it",
    "shoresh": "ה - ו - א",
    "transliteration": "ve-hu",
    "grammar": {
      "pos": "Conjunction + Pronoun"
    }
  },
  "היא": {
    "translation": "she / it (fem.)",
    "shoresh": "ה - י - א",
    "transliteration": "hi",
    "grammar": {
      "pos": "Personal Pronoun (3fs)"
    }
  },
  "והיא": {
    "translation": "and she / while it",
    "shoresh": "ה - י - א",
    "transliteration": "ve-hi",
    "grammar": {
      "pos": "Conjunction + Pronoun"
    }
  },
  "והם": {
    "translation": "and they (masc.)",
    "shoresh": "ה - מ - ם",
    "transliteration": "ve-hem",
    "grammar": {
      "pos": "Conjunction + Pronoun"
    }
  },
  "הן": {
    "translation": "they (fem.) / behold / yes",
    "shoresh": "ה - נ - ן",
    "transliteration": "hen",
    "grammar": {
      "pos": "Personal Pronoun / Particle"
    }
  },
  "והן": {
    "translation": "and they (fem.)",
    "shoresh": "ה - נ - ן",
    "transliteration": "ve-hen",
    "grammar": {
      "pos": "Conjunction + Pronoun"
    }
  },
  "אנו": {
    "translation": "we",
    "shoresh": "א - נ - ח",
    "transliteration": "a-nu",
    "grammar": {
      "pos": "Personal Pronoun (1pl)"
    }
  },
  "אתה": {
    "translation": "you (masc.)",
    "shoresh": "א - ת - ה",
    "transliteration": "a-tah",
    "grammar": {
      "pos": "Personal Pronoun (2ms)"
    }
  },
  "היה": {
    "translation": "was / existed",
    "shoresh": "ה - י - ה",
    "transliteration": "ha-yah",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past (3ms)"
    }
  },
  "והיה": {
    "translation": "and was / and it shall be",
    "shoresh": "ה - י - ה",
    "transliteration": "ve-ha-yah",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "שהיה": {
    "translation": "that was",
    "shoresh": "ה - י - ה",
    "transliteration": "she-ha-yah",
    "grammar": {
      "pos": "Relative + Verb"
    }
  },
  "היתה": {
    "translation": "she was / it (fem.) was",
    "shoresh": "ה - י - ה",
    "transliteration": "hay-tah",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past (3fs)"
    }
  },
  "והיתה": {
    "translation": "and she was",
    "shoresh": "ה - י - ה",
    "transliteration": "ve-hay-tah",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "שהיתה": {
    "translation": "that was (fem.)",
    "shoresh": "ה - י - ה",
    "transliteration": "she-hay-tah",
    "grammar": {
      "pos": "Relative + Verb"
    }
  },
  "היו": {
    "translation": "they were",
    "shoresh": "ה - י - ה",
    "transliteration": "ha-yu",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past (3pl)"
    }
  },
  "והיו": {
    "translation": "and they were",
    "shoresh": "ה - י - ה",
    "transliteration": "ve-ha-yu",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "שהיו": {
    "translation": "that they were",
    "shoresh": "ה - י - ה",
    "transliteration": "she-ha-yu",
    "grammar": {
      "pos": "Relative + Verb"
    }
  },
  "יהיה": {
    "translation": "will be",
    "shoresh": "ה - י - ה",
    "transliteration": "yih-yeh",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Future (3ms)"
    }
  },
  "תהיה": {
    "translation": "will be (fem.)",
    "shoresh": "ה - י - ה",
    "transliteration": "tih-yeh",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Future (3fs)"
    }
  },
  "יהיו": {
    "translation": "they will be",
    "shoresh": "ה - י - ה",
    "transliteration": "yih-yu",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Future (3pl)"
    }
  },
  "חיב": {
    "translation": "liable / obligated",
    "shoresh": "ח - ו - ב",
    "transliteration": "cha-yav",
    "grammar": {
      "pos": "Halakhic Status / Adjective"
    }
  },
  "וחיב": {
    "translation": "and is liable / obligated",
    "shoresh": "ח - ו - ב",
    "transliteration": "ve-cha-yav",
    "grammar": {
      "pos": "Conjunction + Adjective"
    }
  },
  "חיבין": {
    "translation": "they are liable / obligated",
    "shoresh": "ח - ו - ב",
    "transliteration": "cha-ya-vin",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "שפטור": {
    "translation": "that he is exempt",
    "shoresh": "פ - ט - ר",
    "transliteration": "she-pa-tur",
    "grammar": {
      "pos": "Relative + Adjective"
    }
  },
  "פטורים": {
    "translation": "they are exempt",
    "shoresh": "פ - ט - ר",
    "transliteration": "pe-tu-rim",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "כשירה": {
    "translation": "fit / valid (fem.)",
    "shoresh": "כ - ש - ר",
    "transliteration": "kshi-rah",
    "grammar": {
      "pos": "Halakhic Status (Fem.)"
    }
  },
  "פסולים": {
    "translation": "they are disqualified / invalid",
    "shoresh": "פ - ס - ל",
    "transliteration": "psu-lim",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "אסורין": {
    "translation": "they are forbidden",
    "shoresh": "א - ס - ר",
    "transliteration": "asu-rin",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "מותרין": {
    "translation": "they are permitted",
    "shoresh": "נ - ת - ר",
    "transliteration": "mu-ta-rin",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "טהורין": {
    "translation": "they are pure",
    "shoresh": "ט - ה - ר",
    "transliteration": "te-ho-rin",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "טמאים": {
    "translation": "they are impure",
    "shoresh": "ט - מ - א",
    "transliteration": "tme-im",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "אפלו": {
    "translation": "even / even if",
    "shoresh": "נ - פ - ל",
    "transliteration": "a-fi-lu",
    "grammar": {
      "pos": "Conjunction"
    }
  },
  "ואפלו": {
    "translation": "and even if",
    "shoresh": "נ - פ - ל",
    "transliteration": "ve-a-fi-lu",
    "grammar": {
      "pos": "Conjunction"
    }
  },
  "שאפלו": {
    "translation": "that even if",
    "shoresh": "נ - פ - ל",
    "transliteration": "she-a-fi-lu",
    "grammar": {
      "pos": "Relative + Conjunction"
    }
  },
  "ואפילו": {
    "translation": "and even if",
    "shoresh": "נ - פ - ל",
    "transliteration": "ve-a-fi-lu",
    "grammar": {
      "pos": "Conjunction"
    }
  },
  "משום": {
    "translation": "in the name of / because of",
    "shoresh": "ש - מ - ם",
    "transliteration": "mi-shum",
    "grammar": {
      "pos": "Prepositional Phrase"
    }
  },
  "ומשום": {
    "translation": "and because of",
    "shoresh": "ש - מ - ם",
    "transliteration": "u-mi-shum",
    "grammar": {
      "pos": "Conjunction + Prep"
    }
  },
  "שמשום": {
    "translation": "that because of",
    "shoresh": "ש - מ - ם",
    "transliteration": "she-mi-shum",
    "grammar": {
      "pos": "Relative + Prep"
    }
  },
  "ומפני": {
    "translation": "and because of",
    "shoresh": "פ - נ - ה",
    "transliteration": "u-mip-nei",
    "grammar": {
      "pos": "Conjunction + Prep"
    }
  },
  "שמפני": {
    "translation": "that because of",
    "shoresh": "פ - נ - ה",
    "transliteration": "she-mip-nei",
    "grammar": {
      "pos": "Relative + Prep"
    }
  },
  "לפיכך": {
    "translation": "therefore / on that account",
    "shoresh": "כ - כ - ה",
    "transliteration": "le-fi-khakh",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "הואיל": {
    "translation": "since / inasmuch as",
    "shoresh": "י - א - ל",
    "transliteration": "ho-il",
    "grammar": {
      "pos": "Subordinating Conjunction"
    }
  },
  "והואיל": {
    "translation": "and since",
    "shoresh": "י - א - ל",
    "transliteration": "ve-ho-il",
    "grammar": {
      "pos": "Conjunction"
    }
  },
  "וכדי": {
    "translation": "and so that",
    "shoresh": "ד - י - י",
    "transliteration": "u-khe-dei",
    "grammar": {
      "pos": "Conjunction + Prep"
    }
  },
  "שכדי": {
    "translation": "that so that",
    "shoresh": "ד - י - י",
    "transliteration": "she-khe-dei",
    "grammar": {
      "pos": "Relative + Prep"
    }
  },
  "שמא": {
    "translation": "lest / perhaps",
    "shoresh": "ש - מ - א",
    "transliteration": "she-ma",
    "grammar": {
      "pos": "Conjunction"
    }
  },
  "בשביל": {
    "translation": "for the sake of / because",
    "shoresh": "ש - ב - ל",
    "transliteration": "bish-vil",
    "grammar": {
      "pos": "Prepositional Phrase"
    }
  },
  "כלומר": {
    "translation": "that is to say / meaning",
    "shoresh": "א - מ - ר",
    "transliteration": "klo-mar",
    "grammar": {
      "pos": "Explanatory Particle"
    }
  },
  "כגון": {
    "translation": "such as / for example",
    "shoresh": "ג - ו - ן",
    "transliteration": "ke-gon",
    "grammar": {
      "pos": "Prepositional Particle"
    }
  },
  "וכך": {
    "translation": "and thus / and so",
    "shoresh": "כ - כ - ה",
    "transliteration": "ve-khakh",
    "grammar": {
      "pos": "Conjunction + Adverb"
    }
  },
  "כך": {
    "translation": "so / thus",
    "shoresh": "כ - כ - ה",
    "transliteration": "kakh",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "וכן": {
    "translation": "and similarly / and likewise",
    "shoresh": "כ - ו - ן",
    "transliteration": "ve-khen",
    "grammar": {
      "pos": "Conjunction + Adverb"
    }
  },
  "כן": {
    "translation": "so / yes / thus",
    "shoresh": "כ - ו - ן",
    "transliteration": "ken",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "איש": {
    "translation": "man / person",
    "shoresh": "א - י - ש",
    "transliteration": "ish",
    "grammar": {
      "pos": "Noun"
    }
  },
  "והאיש": {
    "translation": "and the man",
    "shoresh": "א - י - ש",
    "transliteration": "ve-ha-ish",
    "grammar": {
      "pos": "Conjunction + Definite Noun"
    }
  },
  "האיש": {
    "translation": "the man",
    "shoresh": "א - י - ש",
    "transliteration": "ha-ish",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "אנשים": {
    "translation": "men / people",
    "shoresh": "א - נ - ש",
    "transliteration": "a-na-shim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "אשה": {
    "translation": "woman / wife",
    "shoresh": "א - נ - ש",
    "transliteration": "i-shah",
    "grammar": {
      "pos": "Noun (Fem.)"
    }
  },
  "האשה": {
    "translation": "the woman / the wife",
    "shoresh": "א - נ - ש",
    "transliteration": "ha-i-shah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "והאשה": {
    "translation": "and the woman",
    "shoresh": "א - נ - ש",
    "transliteration": "ve-ha-i-shah",
    "grammar": {
      "pos": "Conjunction + Definite Noun"
    }
  },
  "נשים": {
    "translation": "women / wives",
    "shoresh": "א - נ - ש",
    "transliteration": "na-shim",
    "grammar": {
      "pos": "Noun (Plural Fem.)"
    }
  },
  "הנשים": {
    "translation": "the women",
    "shoresh": "א - נ - ש",
    "transliteration": "ha-na-shim",
    "grammar": {
      "pos": "Definite Noun (Plural)"
    }
  },
  "אשתו": {
    "translation": "his wife",
    "shoresh": "א - נ - ש",
    "transliteration": "ish-to",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "ואשתו": {
    "translation": "and his wife",
    "shoresh": "א - נ - ש",
    "transliteration": "ve-ish-to",
    "grammar": {
      "pos": "Conjunction + Noun + Suffix"
    }
  },
  "אביו": {
    "translation": "his father",
    "shoresh": "א - ב - ה",
    "transliteration": "a-viv",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "ואביו": {
    "translation": "and his father",
    "shoresh": "א - ב - ה",
    "transliteration": "ve-a-viv",
    "grammar": {
      "pos": "Conjunction + Noun + Suffix"
    }
  },
  "אמו": {
    "translation": "his mother",
    "shoresh": "א - מ - ם",
    "transliteration": "i-mo",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "בנו": {
    "translation": "his son",
    "shoresh": "ב - נ - ה",
    "transliteration": "bno",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "בתו": {
    "translation": "his daughter",
    "shoresh": "ב - ת - ה",
    "transliteration": "bi-to",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "אחיו": {
    "translation": "his brother",
    "shoresh": "א - ח - ה",
    "transliteration": "a-chiv",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "אביה": {
    "translation": "her father",
    "shoresh": "א - ב - ה",
    "transliteration": "a-vi-ha",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "בעלה": {
    "translation": "her husband",
    "shoresh": "ב - ע - ל",
    "transliteration": "ba'a-lah",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "ובה": {
    "translation": "and in her / and in it",
    "shoresh": "ב - ה",
    "transliteration": "u-vah",
    "grammar": {
      "pos": "Conjunction + Prep + Suffix"
    }
  },
  "אותו": {
    "translation": "him / it (direct object)",
    "shoresh": "א - ת",
    "transliteration": "o-to",
    "grammar": {
      "pos": "Object Pronoun (3ms)"
    }
  },
  "ואותו": {
    "translation": "and him / and it",
    "shoresh": "א - ת",
    "transliteration": "ve-o-to",
    "grammar": {
      "pos": "Conjunction + Object Pronoun"
    }
  },
  "אותה": {
    "translation": "her / it (direct object)",
    "shoresh": "א - ת",
    "transliteration": "o-tah",
    "grammar": {
      "pos": "Object Pronoun (3fs)"
    }
  },
  "ואותה": {
    "translation": "and her / and it",
    "shoresh": "א - ת",
    "transliteration": "ve-o-tah",
    "grammar": {
      "pos": "Conjunction + Object Pronoun"
    }
  },
  "אותם": {
    "translation": "them (masc. direct object)",
    "shoresh": "א - ת",
    "transliteration": "o-tam",
    "grammar": {
      "pos": "Object Pronoun (3mp)"
    }
  },
  "ואותם": {
    "translation": "and them",
    "shoresh": "א - ת",
    "transliteration": "ve-o-tam",
    "grammar": {
      "pos": "Conjunction + Object Pronoun"
    }
  },
  "אותן": {
    "translation": "them (fem. direct object)",
    "shoresh": "א - ת",
    "transliteration": "o-tan",
    "grammar": {
      "pos": "Object Pronoun (3fp)"
    }
  },
  "אמה": {
    "translation": "cubit / forearm / maidservant",
    "shoresh": "א - מ - ה",
    "transliteration": "a-mah",
    "grammar": {
      "pos": "Noun (Measurement)"
    }
  },
  "האמה": {
    "translation": "the cubit",
    "shoresh": "א - מ - ה",
    "transliteration": "ha-a-mah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "אמות": {
    "translation": "cubits",
    "shoresh": "א - מ - ה",
    "transliteration": "a-mot",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "טפח": {
    "translation": "handbreadth (tefach)",
    "shoresh": "ט - פ - ח",
    "transliteration": "te-fach",
    "grammar": {
      "pos": "Noun (Measurement)"
    }
  },
  "הטפח": {
    "translation": "the handbreadth",
    "shoresh": "ט - פ - ח",
    "transliteration": "ha-te-fach",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "טפחים": {
    "translation": "handbreadths",
    "shoresh": "ט - פ - ח",
    "transliteration": "te-fa-chim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "ארבעה טפחים": {
    "translation": "four handbreadths",
    "shoresh": "ט - פ - ח",
    "transliteration": "ar-ba-ah te-fa-chim",
    "grammar": {
      "pos": "Noun Phrase"
    }
  },
  "עשרה טפחים": {
    "translation": "ten handbreadths",
    "shoresh": "ט - פ - ח",
    "transliteration": "asa-rah te-fa-chim",
    "grammar": {
      "pos": "Noun Phrase"
    }
  },
  "סאה": {
    "translation": "se'ah (measure of volume)",
    "shoresh": "ס - א - ה",
    "transliteration": "se-ah",
    "grammar": {
      "pos": "Noun (Measurement)"
    }
  },
  "סאין": {
    "translation": "se'ahs",
    "shoresh": "ס - א - ה",
    "transliteration": "se-in",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "ארבעים סאה": {
    "translation": "forty se'ah (mikveh volume)",
    "shoresh": "ס - א - ה",
    "transliteration": "ar-ba-im se-ah",
    "grammar": {
      "pos": "Halakhic Measure"
    }
  },
  "לוג": {
    "translation": "log (liquid measure)",
    "shoresh": "ל - ו - ג",
    "transliteration": "log",
    "grammar": {
      "pos": "Noun (Measurement)"
    }
  },
  "רביעית": {
    "translation": "quarter-log (revi'it)",
    "shoresh": "ר - ב - ע",
    "transliteration": "re-vi-it",
    "grammar": {
      "pos": "Noun (Measurement)"
    }
  },
  "כזית": {
    "translation": "olive-bulk (kezayit)",
    "shoresh": "ז - י - ת",
    "transliteration": "ke-za-yit",
    "grammar": {
      "pos": "Noun (Measurement)"
    }
  },
  "ככותבת": {
    "translation": "date-bulk (kakotevet)",
    "shoresh": "כ - ת - ב",
    "transliteration": "ki-khot-vet",
    "grammar": {
      "pos": "Noun (Measurement)"
    }
  },
  "כביצה": {
    "translation": "egg-bulk (kebaytza)",
    "shoresh": "ב - י - צ",
    "transliteration": "ke-vei-tzah",
    "grammar": {
      "pos": "Noun (Measurement)"
    }
  },
  "דינר": {
    "translation": "dinar (coin)",
    "shoresh": "ד - נ - ר",
    "transliteration": "di-nar",
    "grammar": {
      "pos": "Noun (Coin)"
    }
  },
  "דינרים": {
    "translation": "dinars",
    "shoresh": "ד - נ - ר",
    "transliteration": "di-na-rim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "פרוטה": {
    "translation": "perutah (smallest copper coin)",
    "shoresh": "פ - ר - ט",
    "transliteration": "pru-tah",
    "grammar": {
      "pos": "Noun (Coin)"
    }
  },
  "שקל": {
    "translation": "shekel",
    "shoresh": "ש - ק - ל",
    "transliteration": "she-kel",
    "grammar": {
      "pos": "Noun (Coin)"
    }
  },
  "סלע": {
    "translation": "sela (four dinars)",
    "shoresh": "ס - ל - ע",
    "transliteration": "se-la",
    "grammar": {
      "pos": "Noun (Coin)"
    }
  },
  "מנה": {
    "translation": "maneh (100 dinars)",
    "shoresh": "מ - נ - ה",
    "transliteration": "ma-neh",
    "grammar": {
      "pos": "Noun (Coin)"
    }
  },
  "מאתים": {
    "translation": "two hundred (ketubah sum)",
    "shoresh": "מ - א - ה",
    "transliteration": "ma-ta-yim",
    "grammar": {
      "pos": "Numeral"
    }
  },
  "פאה": {
    "translation": "pe'ah (field corner for the poor)",
    "shoresh": "פ - א - ה",
    "transliteration": "pe-ah",
    "grammar": {
      "pos": "Noun (Zeraim)"
    }
  },
  "הפאה": {
    "translation": "the pe'ah",
    "shoresh": "פ - א - ה",
    "transliteration": "ha-pe-ah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בפאה": {
    "translation": "in the pe'ah",
    "shoresh": "פ - א - ה",
    "transliteration": "ba-pe-ah",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "לקט": {
    "translation": "gleanings (dropped ears for poor)",
    "shoresh": "ל - ק - ט",
    "transliteration": "le-ket",
    "grammar": {
      "pos": "Noun (Zeraim)"
    }
  },
  "שכחה": {
    "translation": "forgotten sheaf (for the poor)",
    "shoresh": "ש - כ - ח",
    "transliteration": "shikh-chah",
    "grammar": {
      "pos": "Noun (Zeraim)"
    }
  },
  "המעשר": {
    "translation": "the tithe",
    "shoresh": "ע - ש - ר",
    "transliteration": "ha-ma-a-ser",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "מעשרות": {
    "translation": "tithes",
    "shoresh": "ע - ש - ר",
    "transliteration": "ma-as-rot",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "המעשרות": {
    "translation": "the tithes",
    "shoresh": "ע - ש - ר",
    "transliteration": "ha-ma-as-rot",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "במעשרות": {
    "translation": "in tithes",
    "shoresh": "ע - ש - ר",
    "transliteration": "be-ma-as-rot",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "התרומה": {
    "translation": "the terumah",
    "shoresh": "ר - ו - ם",
    "transliteration": "ha-te-ru-mah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בתרומה": {
    "translation": "in terumah",
    "shoresh": "ר - ו - ם",
    "transliteration": "bit-ru-mah",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "הפקר": {
    "translation": "ownerless property / renunciation",
    "shoresh": "פ - ק - ר",
    "transliteration": "hef-ker",
    "grammar": {
      "pos": "Halakhic Status"
    }
  },
  "חולין": {
    "translation": "non-sacred everyday food / unconsecrated",
    "shoresh": "ח - ל - ל",
    "transliteration": "chu-lin",
    "grammar": {
      "pos": "Halakhic Status"
    }
  },
  "שדה": {
    "translation": "field",
    "shoresh": "ש - ד - ה",
    "transliteration": "sa-deh",
    "grammar": {
      "pos": "Noun"
    }
  },
  "השדה": {
    "translation": "the field",
    "shoresh": "ש - ד - ה",
    "transliteration": "ha-sa-deh",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בשדה": {
    "translation": "in the field",
    "shoresh": "ש - ד - ה",
    "transliteration": "ba-sa-deh",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "כרם": {
    "translation": "vineyard",
    "shoresh": "כ - ר - ם",
    "transliteration": "ke-rem",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הכרם": {
    "translation": "the vineyard",
    "shoresh": "כ - ר - ם",
    "transliteration": "ha-ke-rem",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "אילן": {
    "translation": "tree",
    "shoresh": "א - ל - ן",
    "transliteration": "i-lan",
    "grammar": {
      "pos": "Noun"
    }
  },
  "האילן": {
    "translation": "the tree",
    "shoresh": "א - ל - ן",
    "transliteration": "ha-i-lan",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "באילן": {
    "translation": "in the tree",
    "shoresh": "א - ל - ן",
    "transliteration": "ba-i-lan",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "אילנות": {
    "translation": "trees",
    "shoresh": "א - ל - ן",
    "transliteration": "i-la-not",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "גרן": {
    "translation": "threshing floor",
    "shoresh": "ג - ר - ן",
    "transliteration": "go-ren",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הגרן": {
    "translation": "the threshing floor",
    "shoresh": "ג - ר - ן",
    "transliteration": "ha-go-ren",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בגרן": {
    "translation": "in the threshing floor",
    "shoresh": "ג - ר - ן",
    "transliteration": "ba-go-ren",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "גורן": {
    "translation": "threshing floor",
    "shoresh": "ג - ר - ן",
    "transliteration": "go-ren",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הגורן": {
    "translation": "the threshing floor",
    "shoresh": "ג - ר - ן",
    "transliteration": "ha-go-ren",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "ארץ": {
    "translation": "land / earth",
    "shoresh": "א - ר - ץ",
    "transliteration": "e-retz",
    "grammar": {
      "pos": "Noun (Fem.)"
    }
  },
  "הארץ": {
    "translation": "the land (of Israel) / the earth",
    "shoresh": "א - ר - ץ",
    "transliteration": "ha-a-retz",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בארץ": {
    "translation": "in the land",
    "shoresh": "א - ר - ץ",
    "transliteration": "ba-a-retz",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "עולם": {
    "translation": "world / universe / eternity",
    "shoresh": "ע - ל - ם",
    "transliteration": "o-lam",
    "grammar": {
      "pos": "Noun"
    }
  },
  "בעולם": {
    "translation": "in the world",
    "shoresh": "ע - ל - ם",
    "transliteration": "ba-o-lam",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "המלאכה": {
    "translation": "the prohibited labor",
    "shoresh": "ל - א - ך",
    "transliteration": "ha-me-la-khah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "עירוב": {
    "translation": "eruv (boundary / courtyard merger)",
    "shoresh": "ע - ר - ב",
    "transliteration": "e-ruv",
    "grammar": {
      "pos": "Noun (Moed)"
    }
  },
  "העירוב": {
    "translation": "the eruv",
    "shoresh": "ע - ר - ב",
    "transliteration": "ha-e-ruv",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "המצה": {
    "translation": "the matzah",
    "shoresh": "מ - צ - ה",
    "transliteration": "ha-ma-tzah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "הסוכה": {
    "translation": "the sukkah",
    "shoresh": "ס - כ - ך",
    "transliteration": "ha-su-kah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "הלולב": {
    "translation": "the lulav",
    "shoresh": "ל - ל - ב",
    "transliteration": "ha-lu-lav",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "האתרוג": {
    "translation": "the etrog",
    "shoresh": "א - ת - ר - ג",
    "transliteration": "ha-et-rog",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "השופר": {
    "translation": "the shofar",
    "shoresh": "ש - פ - ר",
    "transliteration": "ha-sho-far",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "המגילה": {
    "translation": "the Megillah",
    "shoresh": "ג - ל - ל",
    "transliteration": "ha-me-gi-lah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "גט": {
    "translation": "bill of divorce (get)",
    "shoresh": "ג - ט - ט",
    "transliteration": "get",
    "grammar": {
      "pos": "Noun (Nashim)"
    }
  },
  "הגט": {
    "translation": "the bill of divorce",
    "shoresh": "ג - ט - ט",
    "transliteration": "ha-get",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בגט": {
    "translation": "with a bill of divorce",
    "shoresh": "ג - ט - ט",
    "transliteration": "be-get",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "גיטין": {
    "translation": "bills of divorce",
    "shoresh": "ג - ט - ט",
    "transliteration": "gi-tin",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "כתובה": {
    "translation": "ketubah (marriage contract)",
    "shoresh": "כ - ת - ב",
    "transliteration": "ktu-bah",
    "grammar": {
      "pos": "Noun (Nashim)"
    }
  },
  "הכתובה": {
    "translation": "the ketubah",
    "shoresh": "כ - ת - ב",
    "transliteration": "ha-ktu-bah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "יבם": {
    "translation": "levir (brother-in-law)",
    "shoresh": "י - ב - ם",
    "transliteration": "ya-vam",
    "grammar": {
      "pos": "Noun (Nashim)"
    }
  },
  "יבמה": {
    "translation": "yevamah (levirate widow)",
    "shoresh": "י - ב - ם",
    "transliteration": "ye-va-mah",
    "grammar": {
      "pos": "Noun (Nashim)"
    }
  },
  "חליצה": {
    "translation": "chalitzah (shoe release ritual)",
    "shoresh": "ח - ל - ץ",
    "transliteration": "cha-li-tzah",
    "grammar": {
      "pos": "Noun (Nashim)"
    }
  },
  "נזיר": {
    "translation": "nazirite",
    "shoresh": "נ - ז - ר",
    "transliteration": "na-zir",
    "grammar": {
      "pos": "Noun (Nashim)"
    }
  },
  "הנזיר": {
    "translation": "the nazirite",
    "shoresh": "נ - ז - ר",
    "transliteration": "ha-na-zir",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "סוטה": {
    "translation": "sotah (suspected adulteress)",
    "shoresh": "ס - ט - ה",
    "transliteration": "so-tah",
    "grammar": {
      "pos": "Noun (Nashim)"
    }
  },
  "טלית": {
    "translation": "cloak / tallit",
    "shoresh": "ט - ל - ל",
    "transliteration": "ta-lit",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הטלית": {
    "translation": "the cloak / tallit",
    "shoresh": "ט - ל - ל",
    "transliteration": "ha-ta-lit",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בטלית": {
    "translation": "in the cloak / tallit",
    "shoresh": "ט - ל - ל",
    "transliteration": "ba-ta-lit",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "שור": {
    "translation": "ox / bull",
    "shoresh": "ש - ו - ר",
    "transliteration": "shor",
    "grammar": {
      "pos": "Noun (Nezikin)"
    }
  },
  "השור": {
    "translation": "the ox",
    "shoresh": "ש - ו - ר",
    "transliteration": "ha-shor",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בור": {
    "translation": "pit / cistern",
    "shoresh": "ב - ו - ר",
    "transliteration": "bor",
    "grammar": {
      "pos": "Noun (Nezikin)"
    }
  },
  "הבור": {
    "translation": "the pit",
    "shoresh": "ב - ו - ר",
    "transliteration": "ha-bor",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בורות": {
    "translation": "pits / cisterns",
    "shoresh": "ב - ו - ר",
    "transliteration": "bo-rot",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "נזק": {
    "translation": "damage / injury",
    "shoresh": "נ - ז - ק",
    "transliteration": "ne-zek",
    "grammar": {
      "pos": "Noun (Nezikin)"
    }
  },
  "הנזק": {
    "translation": "the damage",
    "shoresh": "נ - ז - ק",
    "transliteration": "ha-ne-zek",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "מציאה": {
    "translation": "found lost object",
    "shoresh": "מ - צ - א",
    "transliteration": "me-tzi-ah",
    "grammar": {
      "pos": "Noun (Nezikin)"
    }
  },
  "שומר": {
    "translation": "bailee / guardian",
    "shoresh": "ש - מ - ר",
    "transliteration": "sho-mer",
    "grammar": {
      "pos": "Noun (Nezikin)"
    }
  },
  "עדים": {
    "translation": "witnesses",
    "shoresh": "ע - ו - ד",
    "transliteration": "e-dim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "העדים": {
    "translation": "the witnesses",
    "shoresh": "ע - ו - ד",
    "transliteration": "ha-e-dim",
    "grammar": {
      "pos": "Definite Noun (Plural)"
    }
  },
  "עדות": {
    "translation": "testimony",
    "shoresh": "ע - ו - ד",
    "transliteration": "e-dut",
    "grammar": {
      "pos": "Noun"
    }
  },
  "העדות": {
    "translation": "the testimony",
    "shoresh": "ע - ו - ד",
    "transliteration": "ha-e-dut",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "שבועה": {
    "translation": "oath",
    "shoresh": "ש - ב - ע",
    "transliteration": "shvu-ah",
    "grammar": {
      "pos": "Noun"
    }
  },
  "השבועה": {
    "translation": "the oath",
    "shoresh": "ש - ב - ע",
    "transliteration": "ha-shvu-ah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "קרבן": {
    "translation": "offering / sacrifice",
    "shoresh": "ק - ר - ב",
    "transliteration": "kor-ban",
    "grammar": {
      "pos": "Noun (Kodashim)"
    }
  },
  "הקרבן": {
    "translation": "the offering",
    "shoresh": "ק - ר - ב",
    "transliteration": "ha-kor-ban",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "עולה": {
    "translation": "burnt offering",
    "shoresh": "ע - ל - ה",
    "transliteration": "o-lah",
    "grammar": {
      "pos": "Noun (Kodashim)"
    }
  },
  "העולה": {
    "translation": "the burnt offering",
    "shoresh": "ע - ל - ה",
    "transliteration": "ha-o-lah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "חטאת": {
    "translation": "sin offering",
    "shoresh": "ח - ט - א",
    "transliteration": "cha-tat",
    "grammar": {
      "pos": "Noun (Kodashim)"
    }
  },
  "החטאת": {
    "translation": "the sin offering",
    "shoresh": "ח - ט - א",
    "transliteration": "ha-cha-tat",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "אשם": {
    "translation": "guilt offering",
    "shoresh": "א - ש - ם",
    "transliteration": "a-sham",
    "grammar": {
      "pos": "Noun (Kodashim)"
    }
  },
  "האשם": {
    "translation": "the guilt offering",
    "shoresh": "א - ש - ם",
    "transliteration": "ha-a-sham",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "שלמים": {
    "translation": "peace offerings",
    "shoresh": "ש - ל - ם",
    "transliteration": "shla-mim",
    "grammar": {
      "pos": "Noun (Plural Kodashim)"
    }
  },
  "מזבח": {
    "translation": "altar",
    "shoresh": "ז - ב - ח",
    "transliteration": "miz-be-ach",
    "grammar": {
      "pos": "Noun (Kodashim)"
    }
  },
  "המזבח": {
    "translation": "the altar",
    "shoresh": "ז - ב - ח",
    "transliteration": "ha-miz-be-ach",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "שחיטה": {
    "translation": "ritual slaughter",
    "shoresh": "ש - ח - ט",
    "transliteration": "shchi-tah",
    "grammar": {
      "pos": "Noun (Kodashim)"
    }
  },
  "השחיטה": {
    "translation": "the ritual slaughter",
    "shoresh": "ש - ח - ט",
    "transliteration": "ha-shchi-tah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "דם": {
    "translation": "blood",
    "shoresh": "ד - מ - ה",
    "transliteration": "dam",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הדם": {
    "translation": "the blood",
    "shoresh": "ד - מ - ה",
    "transliteration": "ha-dam",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בשר": {
    "translation": "meat / flesh",
    "shoresh": "ב - ש - ר",
    "transliteration": "ba-sar",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הבשר": {
    "translation": "the meat",
    "shoresh": "ב - ש - ר",
    "transliteration": "ha-ba-sar",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "חלב": {
    "translation": "milk / fat (chelev)",
    "shoresh": "ח - ל - ב",
    "transliteration": "cha-lav / che-lev",
    "grammar": {
      "pos": "Noun"
    }
  },
  "החלב": {
    "translation": "the milk / the fat",
    "shoresh": "ח - ל - ב",
    "transliteration": "he-cha-lav",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "כלי": {
    "translation": "vessel / utensil",
    "shoresh": "כ - ל - ה",
    "transliteration": "kli",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הכלי": {
    "translation": "the vessel / utensil",
    "shoresh": "כ - ל - ה",
    "transliteration": "ha-kli",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בכלי": {
    "translation": "in a vessel",
    "shoresh": "כ - ל - ה",
    "transliteration": "bi-khli",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "כלים": {
    "translation": "vessels / utensils",
    "shoresh": "כ - ל - ה",
    "transliteration": "ke-lim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "הכלים": {
    "translation": "the vessels",
    "shoresh": "כ - ל - ה",
    "transliteration": "ha-ke-lim",
    "grammar": {
      "pos": "Definite Noun (Plural)"
    }
  },
  "מקוה": {
    "translation": "mikveh (ritual immersion pool)",
    "shoresh": "ק - ו - ה",
    "transliteration": "mik-veh",
    "grammar": {
      "pos": "Noun (Tahorot)"
    }
  },
  "המקוה": {
    "translation": "the mikveh",
    "shoresh": "ק - ו - ה",
    "transliteration": "ha-mik-veh",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "מקואות": {
    "translation": "mikvehs",
    "shoresh": "ק - ו - ה",
    "transliteration": "mik-va-ot",
    "grammar": {
      "pos": "Noun (Plural Tahorot)"
    }
  },
  "במקואות": {
    "translation": "in mikvehs",
    "shoresh": "ק - ו - ה",
    "transliteration": "be-mik-va-ot",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "שרץ": {
    "translation": "creeping animal carcass (sheretz)",
    "shoresh": "ש - ר - ץ",
    "transliteration": "she-retz",
    "grammar": {
      "pos": "Noun (Tahorot)"
    }
  },
  "השרץ": {
    "translation": "the creeping carcass",
    "shoresh": "ש - ר - ץ",
    "transliteration": "ha-she-retz",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "נבלה": {
    "translation": "unslaughtered carcass (neveilah)",
    "shoresh": "נ - ב - ל",
    "transliteration": "ne-vei-lah",
    "grammar": {
      "pos": "Noun (Tahorot)"
    }
  },
  "הנבלה": {
    "translation": "the carcass",
    "shoresh": "נ - ב - ל",
    "transliteration": "ha-ne-vei-lah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "מת": {
    "translation": "corpse / dead person / died",
    "shoresh": "מ - ו - ת",
    "transliteration": "met",
    "grammar": {
      "pos": "Noun / Verb"
    }
  },
  "המת": {
    "translation": "the corpse / the deceased",
    "shoresh": "מ - ו - ת",
    "transliteration": "ha-met",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "נדה": {
    "translation": "menstruant woman (niddah)",
    "shoresh": "נ - ד - ה",
    "transliteration": "ni-dah",
    "grammar": {
      "pos": "Noun (Tahorot)"
    }
  },
  "הנדה": {
    "translation": "the menstruant",
    "shoresh": "נ - ד - ה",
    "transliteration": "ha-ni-dah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "זב": {
    "translation": "man with bodily discharge (zav)",
    "shoresh": "ז - ו - ב",
    "transliteration": "zav",
    "grammar": {
      "pos": "Noun (Tahorot)"
    }
  },
  "הזב": {
    "translation": "the zav",
    "shoresh": "ז - ו - ב",
    "transliteration": "ha-zav",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "מצורע": {
    "translation": "leper / afflicted person (metzora)",
    "shoresh": "צ - ר - ע",
    "transliteration": "me-tzo-ra",
    "grammar": {
      "pos": "Noun (Tahorot)"
    }
  },
  "הקרובים": {
    "translation": "the near relatives / close ones",
    "shoresh": "ק - ר - ב",
    "transliteration": "ha-kro-vim",
    "grammar": {
      "pos": "Definite Noun (Plural)"
    }
  },
  "הגשמים": {
    "translation": "the rains",
    "shoresh": "ג - ש - ם",
    "transliteration": "ha-gsha-mim",
    "grammar": {
      "pos": "Definite Noun (Plural)"
    }
  },
  "גשמים": {
    "translation": "rains",
    "shoresh": "ג - ש - ם",
    "transliteration": "gsha-mim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "פי": {
    "translation": "mouth of / according to",
    "shoresh": "פ - ה",
    "transliteration": "pi",
    "grammar": {
      "pos": "Noun (Construct)"
    }
  },
  "על פי": {
    "translation": "according to / by word of",
    "shoresh": "פ - ה",
    "transliteration": "al pi",
    "grammar": {
      "pos": "Prepositional Phrase"
    }
  },
  "מי": {
    "translation": "water of / who?",
    "shoresh": "מ - י - ם",
    "transliteration": "mei / mi",
    "grammar": {
      "pos": "Noun (Construct) / Pronoun"
    }
  },
  "שתי": {
    "translation": "two (fem.)",
    "shoresh": "ש - נ - ה",
    "transliteration": "shtei",
    "grammar": {
      "pos": "Numeral (Fem. Construct)"
    }
  },
  "ושתי": {
    "translation": "and two (fem.)",
    "shoresh": "ש - נ - ה",
    "transliteration": "u-shtei",
    "grammar": {
      "pos": "Conjunction + Numeral"
    }
  },
  "לי": {
    "translation": "to me / for me",
    "shoresh": "ל",
    "transliteration": "li",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "לך": {
    "translation": "to you",
    "shoresh": "ל",
    "transliteration": "le-kha / lakh",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "לנו": {
    "translation": "to us",
    "shoresh": "ל",
    "transliteration": "la-nu",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "להן": {
    "translation": "to them (fem.)",
    "shoresh": "ל",
    "transliteration": "la-hen",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "עם": {
    "translation": "with / people / nation",
    "shoresh": "ע - מ - ם",
    "transliteration": "im / am",
    "grammar": {
      "pos": "Preposition / Noun"
    }
  },
  "עמו": {
    "translation": "with him",
    "shoresh": "ע - מ - ם",
    "transliteration": "i-mo",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "עמה": {
    "translation": "with her",
    "shoresh": "ע - מ - ם",
    "transliteration": "i-mah",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "עמם": {
    "translation": "with them",
    "shoresh": "ע - מ - ם",
    "transliteration": "i-mam",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "ממנו": {
    "translation": "from him / from it",
    "shoresh": "מ - נ - ן",
    "transliteration": "mi-me-nu",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "ממנה": {
    "translation": "from her / from it",
    "shoresh": "מ - נ - ן",
    "transliteration": "mi-me-nah",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "מהם": {
    "translation": "from them (masc.)",
    "shoresh": "מ - נ - ן",
    "transliteration": "me-hem",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "מהן": {
    "translation": "from them (fem.)",
    "shoresh": "מ - נ - ן",
    "transliteration": "me-hen",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "הימנו": {
    "translation": "from him / from it",
    "shoresh": "מ - נ - ן",
    "transliteration": "hei-me-nu",
    "grammar": {
      "pos": "Preposition + Suffix (Mishnaic)"
    }
  },
  "אינה": {
    "translation": "is not (fem.)",
    "shoresh": "א - י - ן",
    "transliteration": "ei-nah",
    "grammar": {
      "pos": "Negative Particle + Suffix"
    }
  },
  "אינם": {
    "translation": "they are not (masc.)",
    "shoresh": "א - י - ן",
    "transliteration": "ei-nam",
    "grammar": {
      "pos": "Negative Particle + Suffix"
    }
  },
  "אינן": {
    "translation": "they are not (fem./pl.)",
    "shoresh": "א - י - ן",
    "transliteration": "ei-nan",
    "grammar": {
      "pos": "Negative Particle + Suffix"
    }
  },
  "איני": {
    "translation": "I am not",
    "shoresh": "א - י - ן",
    "transliteration": "ei-ni",
    "grammar": {
      "pos": "Negative Particle + Suffix"
    }
  },
  "שאינו": {
    "translation": "that is not (masc.)",
    "shoresh": "א - י - ן",
    "transliteration": "she-ei-no",
    "grammar": {
      "pos": "Relative + Negative"
    }
  },
  "שאינה": {
    "translation": "that is not (fem.)",
    "shoresh": "א - י - ן",
    "transliteration": "she-ei-nah",
    "grammar": {
      "pos": "Relative + Negative"
    }
  },
  "שאינם": {
    "translation": "that they are not",
    "shoresh": "א - י - ן",
    "transliteration": "she-ei-nam",
    "grammar": {
      "pos": "Relative + Negative"
    }
  },
  "שאינן": {
    "translation": "that they are not",
    "shoresh": "א - י - ן",
    "transliteration": "she-ei-nan",
    "grammar": {
      "pos": "Relative + Negative"
    }
  },
  "ואינו": {
    "translation": "and is not",
    "shoresh": "א - י - ן",
    "transliteration": "ve-ei-no",
    "grammar": {
      "pos": "Conjunction + Negative"
    }
  },
  "ואינה": {
    "translation": "and is not (fem.)",
    "shoresh": "א - י - ן",
    "transliteration": "ve-ei-nah",
    "grammar": {
      "pos": "Conjunction + Negative"
    }
  },
  "ואינם": {
    "translation": "and they are not",
    "shoresh": "א - י - ן",
    "transliteration": "ve-ei-nam",
    "grammar": {
      "pos": "Conjunction + Negative"
    }
  },
  "ואינן": {
    "translation": "and they are not",
    "shoresh": "א - י - ן",
    "transliteration": "ve-ei-nan",
    "grammar": {
      "pos": "Conjunction + Negative"
    }
  },
  "גבי": {
    "translation": "upon / surface of",
    "shoresh": "ג - ב - ב",
    "transliteration": "ga-bei",
    "grammar": {
      "pos": "Preposition"
    }
  },
  "על גבי": {
    "translation": "upon / on top of",
    "shoresh": "ג - ב - ב",
    "transliteration": "al ga-bei",
    "grammar": {
      "pos": "Prepositional Phrase"
    }
  },
  "על גביו": {
    "translation": "on top of it",
    "shoresh": "ג - ב - ב",
    "transliteration": "al ga-bav",
    "grammar": {
      "pos": "Prep + Suffix"
    }
  },
  "תחת": {
    "translation": "under / beneath / in place of",
    "shoresh": "ת - ח - ת",
    "transliteration": "ta-chat",
    "grammar": {
      "pos": "Preposition"
    }
  },
  "תחתיו": {
    "translation": "under him / in his place",
    "shoresh": "ת - ח - ת",
    "transliteration": "tach-tav",
    "grammar": {
      "pos": "Prep + Suffix"
    }
  },
  "תחתיה": {
    "translation": "under her / in her place",
    "shoresh": "ת - ח - ת",
    "transliteration": "tach-te-ha",
    "grammar": {
      "pos": "Prep + Suffix"
    }
  },
  "לפני": {
    "translation": "before / in the presence of",
    "shoresh": "פ - נ - ה",
    "transliteration": "lif-nei",
    "grammar": {
      "pos": "Preposition"
    }
  },
  "לפניו": {
    "translation": "before him",
    "shoresh": "פ - נ - ה",
    "transliteration": "le-fa-nav",
    "grammar": {
      "pos": "Prep + Suffix"
    }
  },
  "לפניהם": {
    "translation": "before them",
    "shoresh": "פ - נ - ה",
    "transliteration": "lif-nei-hem",
    "grammar": {
      "pos": "Prep + Suffix"
    }
  },
  "בפני": {
    "translation": "in the presence of / before",
    "shoresh": "פ - נ - ה",
    "transliteration": "bif-nei",
    "grammar": {
      "pos": "Preposition"
    }
  },
  "בפניו": {
    "translation": "in his presence",
    "shoresh": "פ - נ - ה",
    "transliteration": "be-fa-nav",
    "grammar": {
      "pos": "Prep + Suffix"
    }
  },
  "אצל": {
    "translation": "beside / next to / near",
    "shoresh": "א - צ - ל",
    "transliteration": "e-tzel",
    "grammar": {
      "pos": "Preposition"
    }
  },
  "בתוך": {
    "translation": "inside / within",
    "shoresh": "ת - ו - ך",
    "transliteration": "be-tokh",
    "grammar": {
      "pos": "Preposition"
    }
  },
  "מתוך": {
    "translation": "from within / since",
    "shoresh": "ת - ו - ך",
    "transliteration": "mi-tokh",
    "grammar": {
      "pos": "Preposition"
    }
  },
  "מחוץ": {
    "translation": "outside of",
    "shoresh": "ח - ו - ץ",
    "transliteration": "mi-chutz",
    "grammar": {
      "pos": "Preposition"
    }
  },
  "רשות": {
    "translation": "domain / legal realm / permission",
    "shoresh": "ר - ש - י",
    "transliteration": "re-shut",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הרשות": {
    "translation": "the domain / the authority",
    "shoresh": "ר - ש - י",
    "transliteration": "ha-re-shut",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "ברשות": {
    "translation": "in the domain of / with permission",
    "shoresh": "ר - ש - י",
    "transliteration": "bi-rshut",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "רשות היחיד": {
    "translation": "private domain (on Shabbat)",
    "shoresh": "ר - ש - י",
    "transliteration": "re-shut ha-ya-chid",
    "grammar": {
      "pos": "Halakhic Term"
    }
  },
  "רשות הרבים": {
    "translation": "public domain (on Shabbat)",
    "shoresh": "ר - ש - י",
    "transliteration": "re-shut ha-ra-bim",
    "grammar": {
      "pos": "Halakhic Term"
    }
  },
  "היחיד": {
    "translation": "the individual / the private domain",
    "shoresh": "י - ח - ד",
    "transliteration": "ha-ya-chid",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "הרבים": {
    "translation": "the public / the majority",
    "shoresh": "ר - ב - ב",
    "transliteration": "ha-ra-bim",
    "grammar": {
      "pos": "Definite Noun (Plural)"
    }
  },
  "רבים": {
    "translation": "many / the public",
    "shoresh": "ר - ב - ב",
    "transliteration": "ra-bim",
    "grammar": {
      "pos": "Adjective / Noun"
    }
  },
  "גדול": {
    "translation": "great / large / adult",
    "shoresh": "ג - ד - ל",
    "transliteration": "ga-dol",
    "grammar": {
      "pos": "Adjective"
    }
  },
  "הגדול": {
    "translation": "the great / the large / the adult",
    "shoresh": "ג - ד - ל",
    "transliteration": "ha-ga-dol",
    "grammar": {
      "pos": "Definite Adjective"
    }
  },
  "גדולה": {
    "translation": "great / large / adult (fem.)",
    "shoresh": "ג - ד - ל",
    "transliteration": "gdo-lah",
    "grammar": {
      "pos": "Adjective (Fem.)"
    }
  },
  "גדולים": {
    "translation": "great / adults (masc.)",
    "shoresh": "ג - ד - ל",
    "transliteration": "gdo-lim",
    "grammar": {
      "pos": "Adjective (Plural)"
    }
  },
  "קטן": {
    "translation": "small / minor / child",
    "shoresh": "ק - ט - ן",
    "transliteration": "ka-tan",
    "grammar": {
      "pos": "Adjective / Noun"
    }
  },
  "הקטן": {
    "translation": "the minor / the small",
    "shoresh": "ק - ט - ן",
    "transliteration": "ha-ka-tan",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "קטנה": {
    "translation": "small / minor (fem.)",
    "shoresh": "ק - ט - ן",
    "transliteration": "kta-nah",
    "grammar": {
      "pos": "Adjective (Fem.)"
    }
  },
  "הקטנה": {
    "translation": "the minor (fem.)",
    "shoresh": "ק - ט - ן",
    "transliteration": "ha-kta-nah",
    "grammar": {
      "pos": "Definite Noun (Fem.)"
    }
  },
  "קטנים": {
    "translation": "minors / small ones",
    "shoresh": "ק - ט - ן",
    "transliteration": "kta-nim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "טוב": {
    "translation": "good / pleasant",
    "shoresh": "ט - ו - ב",
    "transliteration": "tov",
    "grammar": {
      "pos": "Adjective"
    }
  },
  "הטוב": {
    "translation": "the good",
    "shoresh": "ט - ו - ב",
    "transliteration": "ha-tov",
    "grammar": {
      "pos": "Definite Adjective"
    }
  },
  "טובה": {
    "translation": "good / benefit (fem.)",
    "shoresh": "ט - ו - ב",
    "transliteration": "to-vah",
    "grammar": {
      "pos": "Adjective (Fem.)"
    }
  },
  "חצי": {
    "translation": "half",
    "shoresh": "ח - צ - ה",
    "transliteration": "cha-tzi",
    "grammar": {
      "pos": "Noun (Measurement)"
    }
  },
  "החצי": {
    "translation": "the half",
    "shoresh": "ח - צ - ה",
    "transliteration": "he-cha-tzi",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "מחצה": {
    "translation": "half / fifty percent",
    "shoresh": "ח - צ - ה",
    "transliteration": "me-che-tzah",
    "grammar": {
      "pos": "Noun"
    }
  },
  "פחות": {
    "translation": "less than / fewer",
    "shoresh": "פ - ח - ת",
    "transliteration": "pa-chot",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "יותר": {
    "translation": "more / exceeding",
    "shoresh": "י - ת - ר",
    "transliteration": "yo-ter",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "כלן": {
    "translation": "all of them (fem./general)",
    "shoresh": "כ - ל - ל",
    "transliteration": "ku-lan",
    "grammar": {
      "pos": "Quantifier + Suffix"
    }
  },
  "כולן": {
    "translation": "all of them",
    "shoresh": "כ - ל - ל",
    "transliteration": "ku-lan",
    "grammar": {
      "pos": "Quantifier + Suffix"
    }
  },
  "כולם": {
    "translation": "all of them (masc.)",
    "shoresh": "כ - ל - ל",
    "transliteration": "ku-lam",
    "grammar": {
      "pos": "Quantifier + Suffix"
    }
  },
  "כולו": {
    "translation": "all of it / entirely",
    "shoresh": "כ - ל - ל",
    "transliteration": "ku-lo",
    "grammar": {
      "pos": "Quantifier + Suffix"
    }
  },
  "עצמו": {
    "translation": "himself / itself",
    "shoresh": "ע - צ - ם",
    "transliteration": "atz-mo",
    "grammar": {
      "pos": "Reflexive Pronoun"
    }
  },
  "עצמה": {
    "translation": "herself / itself",
    "shoresh": "ע - צ - ם",
    "transliteration": "atz-mah",
    "grammar": {
      "pos": "Reflexive Pronoun"
    }
  },
  "כלום": {
    "translation": "anything at all",
    "shoresh": "כ - ל - ם",
    "transliteration": "klu-m",
    "grammar": {
      "pos": "Indefinite Pronoun"
    }
  },
  "מים": {
    "translation": "water",
    "shoresh": "מ - י - ם",
    "transliteration": "ma-yim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "המים": {
    "translation": "the water",
    "shoresh": "מ - י - ם",
    "transliteration": "ha-ma-yim",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "במים": {
    "translation": "in water",
    "shoresh": "מ - י - ם",
    "transliteration": "ba-ma-yim",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "יין": {
    "translation": "wine",
    "shoresh": "י - י - ן",
    "transliteration": "ya-yin",
    "grammar": {
      "pos": "Noun"
    }
  },
  "היין": {
    "translation": "the wine",
    "shoresh": "י - י - ן",
    "transliteration": "ha-ya-yin",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "ביין": {
    "translation": "in wine",
    "shoresh": "י - י - ן",
    "transliteration": "ba-ya-yin",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "שמן": {
    "translation": "olive oil",
    "shoresh": "ש - מ - ן",
    "transliteration": "she-men",
    "grammar": {
      "pos": "Noun"
    }
  },
  "השמן": {
    "translation": "the oil",
    "shoresh": "ש - מ - ן",
    "transliteration": "ha-she-men",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בשמן": {
    "translation": "in oil",
    "shoresh": "ש - מ - ן",
    "transliteration": "ba-she-men",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "זהב": {
    "translation": "gold",
    "shoresh": "ז - ה - ב",
    "transliteration": "za-hav",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הזהב": {
    "translation": "the gold",
    "shoresh": "ז - ה - ב",
    "transliteration": "ha-za-hav",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "כסף": {
    "translation": "silver / money",
    "shoresh": "כ - ס - ף",
    "transliteration": "ke-sef",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הכסף": {
    "translation": "the silver / the money",
    "shoresh": "כ - ס - ף",
    "transliteration": "ha-ke-sef",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בכסף": {
    "translation": "with money",
    "shoresh": "כ - ס - ף",
    "transliteration": "be-khe-sef",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "מעות": {
    "translation": "coins / money",
    "shoresh": "מ - ע - ה",
    "transliteration": "ma-ot",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "המעות": {
    "translation": "the coins",
    "shoresh": "מ - ע - ה",
    "transliteration": "ha-ma-ot",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "פרות": {
    "translation": "fruits / produce / usufruct",
    "shoresh": "פ - ר - ה",
    "transliteration": "pei-rot",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "פירות": {
    "translation": "fruits / produce / usufruct",
    "shoresh": "פ - ר - ה",
    "transliteration": "pei-rot",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "הפירות": {
    "translation": "the produce / fruits",
    "shoresh": "פ - ר - ה",
    "transliteration": "ha-pei-rot",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "הפרות": {
    "translation": "the produce / the cows",
    "shoresh": "פ - ר - ה",
    "transliteration": "ha-pei-rot / ha-pa-rot",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "פרותיהן": {
    "translation": "their fruits / produce",
    "shoresh": "פ - ר - ה",
    "transliteration": "pei-ro-tei-hen",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "פירותיהן": {
    "translation": "their fruits / produce",
    "shoresh": "פ - ר - ה",
    "transliteration": "pei-ro-tei-hen",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "ירק": {
    "translation": "vegetable / greens",
    "shoresh": "י - ר - ק",
    "transliteration": "ye-rek",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הירק": {
    "translation": "the vegetable",
    "shoresh": "י - ר - ק",
    "transliteration": "ha-ye-rek",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "ירקות": {
    "translation": "vegetables",
    "shoresh": "י - ר - ק",
    "transliteration": "ye-ra-kot",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "זית": {
    "translation": "olive / olive tree",
    "shoresh": "ז - י - ת",
    "transliteration": "za-yit",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הזית": {
    "translation": "the olive",
    "shoresh": "ז - י - ת",
    "transliteration": "ha-za-yit",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "זיתים": {
    "translation": "olives",
    "shoresh": "ז - י - ת",
    "transliteration": "zei-tim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "חרס": {
    "translation": "earthenware / pottery shard",
    "shoresh": "ח - ר - ס",
    "transliteration": "che-res",
    "grammar": {
      "pos": "Noun"
    }
  },
  "החרס": {
    "translation": "the earthenware",
    "shoresh": "ח - ר - ס",
    "transliteration": "he-che-res",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "כלי חרס": {
    "translation": "earthenware vessel",
    "shoresh": "ח - ר - ס",
    "transliteration": "kli che-res",
    "grammar": {
      "pos": "Halakhic Term"
    }
  },
  "משקין": {
    "translation": "liquids / beverages",
    "shoresh": "ש - ק - ה",
    "transliteration": "mash-kin",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "המשקין": {
    "translation": "the liquids",
    "shoresh": "ש - ק - ה",
    "transliteration": "ha-mash-kin",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "מדרס": {
    "translation": "midras (foot-treading impurity of zav)",
    "shoresh": "ד - ר - ס",
    "transliteration": "mid-ras",
    "grammar": {
      "pos": "Halakhic Status (Tahorot)"
    }
  },
  "טומאת": {
    "translation": "impurity of (construct)",
    "shoresh": "ט - מ - א",
    "transliteration": "tum-at",
    "grammar": {
      "pos": "Noun (Construct)"
    }
  },
  "טמאת": {
    "translation": "impurity of (construct)",
    "shoresh": "ט - מ - א",
    "transliteration": "tum-at",
    "grammar": {
      "pos": "Noun (Construct)"
    }
  },
  "שביעית": {
    "translation": "seventh / Sabbatical year (Shevi'it)",
    "shoresh": "ש - ב - ע",
    "transliteration": "shvi-it",
    "grammar": {
      "pos": "Ordinal / Noun"
    }
  },
  "בשביעית": {
    "translation": "in the Sabbatical year",
    "shoresh": "ש - ב - ע",
    "transliteration": "ba-shvi-it",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "שבוע": {
    "translation": "seven-year cycle (Shemitah week) / week",
    "shoresh": "ש - ב - ע",
    "transliteration": "sha-vu-a",
    "grammar": {
      "pos": "Noun"
    }
  },
  "ימים": {
    "translation": "days",
    "shoresh": "י - ו - ם",
    "transliteration": "ya-mim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "פעמים": {
    "translation": "times",
    "shoresh": "פ - ע - ם",
    "transliteration": "pe-a-mim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "בתחלה": {
    "translation": "initially / at first",
    "shoresh": "ת - ח - ל",
    "transliteration": "ba-te-chi-lah",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "למחר": {
    "translation": "on the morrow / next day",
    "shoresh": "מ - ח - ר",
    "transliteration": "le-ma-char",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "פלוני": {
    "translation": "so-and-so / anonymous person",
    "shoresh": "פ - ל - ה",
    "transliteration": "plo-ni",
    "grammar": {
      "pos": "Indefinite Name"
    }
  },
  "קונם": {
    "translation": "konam (substitute word for vow of dedication)",
    "shoresh": "ק - נ - ם",
    "transliteration": "ko-nam",
    "grammar": {
      "pos": "Halakhic Vow Formula (Nedarim)"
    }
  },
  "האב": {
    "translation": "the father / the archetype",
    "shoresh": "א - ב - ה",
    "transliteration": "ha-av",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "אב": {
    "translation": "father / archetype principle",
    "shoresh": "א - ב - ה",
    "transliteration": "av",
    "grammar": {
      "pos": "Noun"
    }
  },
  "בת": {
    "translation": "daughter / girl",
    "shoresh": "ב - ת - ה",
    "transliteration": "bat",
    "grammar": {
      "pos": "Noun (Fem.)"
    }
  },
  "בנות": {
    "translation": "daughters / women",
    "shoresh": "ב - ת - ה",
    "transliteration": "ba-not",
    "grammar": {
      "pos": "Noun (Plural Fem.)"
    }
  },
  "הכהן": {
    "translation": "the priest",
    "shoresh": "כ - ה - ן",
    "transliteration": "ha-ko-hen",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "כהנים": {
    "translation": "priests",
    "shoresh": "כ - ה - ן",
    "transliteration": "ko-ha-nim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "הכהנים": {
    "translation": "the priests",
    "shoresh": "כ - ה - ן",
    "transliteration": "ha-ko-ha-nim",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בכהנים": {
    "translation": "among the priests",
    "shoresh": "כ - ה - ן",
    "transliteration": "ba-ko-ha-nim",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "בעלי": {
    "translation": "masters of / husbands of",
    "shoresh": "ב - ע - ל",
    "transliteration": "ba'a-lei",
    "grammar": {
      "pos": "Noun (Construct Plural)"
    }
  },
  "אמן": {
    "translation": "amen (so be it) / faithful",
    "shoresh": "א - מ - ן",
    "transliteration": "a-men",
    "grammar": {
      "pos": "Interjection"
    }
  },
  "וגו": {
    "translation": "and so forth (etc.)",
    "shoresh": "ג - מ - ר",
    "transliteration": "ve-go-mar",
    "grammar": {
      "pos": "Abbreviation"
    }
  },
  "יכול": {
    "translation": "can / is able / might one think?",
    "shoresh": "י - כ - ל",
    "transliteration": "ya-khol",
    "grammar": {
      "pos": "Modal Verb"
    }
  },
  "צריך": {
    "translation": "needs / is required to",
    "shoresh": "צ - ר - ך",
    "transliteration": "tza-rikh",
    "grammar": {
      "pos": "Participle / Adjective"
    }
  },
  "וצריך": {
    "translation": "and is required to",
    "shoresh": "צ - ר - ך",
    "transliteration": "ve-tza-rikh",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "צריכין": {
    "translation": "they need / are required",
    "shoresh": "צ - ר - ך",
    "transliteration": "tzri-khin",
    "grammar": {
      "pos": "Participle (Plural)"
    }
  },
  "להיות": {
    "translation": "to be",
    "shoresh": "ה - י - ה",
    "transliteration": "lih-yot",
    "grammar": {
      "pos": "Infinitive"
    }
  },
  "לעשות": {
    "translation": "to do / to make",
    "shoresh": "ע - ש - ה",
    "transliteration": "la-a-sot",
    "grammar": {
      "pos": "Infinitive"
    }
  },
  "לומר": {
    "translation": "to say",
    "shoresh": "א - מ - ר",
    "transliteration": "lo-mar",
    "grammar": {
      "pos": "Infinitive"
    }
  },
  "תלמוד לומר": {
    "translation": "Scripture teaches to say",
    "shoresh": "א - מ - ר",
    "transliteration": "tal-mud lo-mar",
    "grammar": {
      "pos": "Hermeneutical Formula"
    }
  },
  "עושה": {
    "translation": "makes / performs / does",
    "shoresh": "ע - ש - ה",
    "transliteration": "o-seh",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present"
    }
  },
  "ועושה": {
    "translation": "and makes / performs",
    "shoresh": "ע - ש - ה",
    "transliteration": "ve-o-seh",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "עושין": {
    "translation": "they make / they perform",
    "shoresh": "ע - ש - ה",
    "transliteration": "o-sin",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present Plural"
    }
  },
  "ועושין": {
    "translation": "and they perform / make",
    "shoresh": "ע - ש - ה",
    "transliteration": "ve-o-sin",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "עושים": {
    "translation": "they make / perform",
    "shoresh": "ע - ש - ה",
    "transliteration": "o-sim",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present Plural"
    }
  },
  "מביא": {
    "translation": "brings",
    "shoresh": "ב - ו - א",
    "transliteration": "me-vi",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Present"
    }
  },
  "ומביא": {
    "translation": "and brings",
    "shoresh": "ב - ו - א",
    "transliteration": "u-me-vi",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "מביאין": {
    "translation": "they bring",
    "shoresh": "ב - ו - א",
    "transliteration": "me-vi-in",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Present Plural"
    }
  },
  "ומביאין": {
    "translation": "and they bring",
    "shoresh": "ב - ו - א",
    "transliteration": "u-me-vi-in",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "יביא": {
    "translation": "shall bring",
    "shoresh": "ב - ו - א",
    "transliteration": "ya-vi",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Future"
    }
  },
  "יביאו": {
    "translation": "they shall bring",
    "shoresh": "ב - ו - א",
    "transliteration": "ya-vi-u",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hif'il",
      "tense": "Future Plural"
    }
  },
  "יתן": {
    "translation": "shall give",
    "shoresh": "נ - ת - ן",
    "transliteration": "yi-ten",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Future"
    }
  },
  "ויתן": {
    "translation": "and shall give",
    "shoresh": "נ - ת - ן",
    "transliteration": "ve-yi-ten",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "יתנו": {
    "translation": "they shall give",
    "shoresh": "נ - ת - ן",
    "transliteration": "yit-nu",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Future Plural"
    }
  },
  "מכר": {
    "translation": "sold",
    "shoresh": "מ - כ - ר",
    "transliteration": "ma-khar",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past"
    }
  },
  "מכרו": {
    "translation": "they sold",
    "shoresh": "מ - כ - ר",
    "transliteration": "makh-ru",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past Plural"
    }
  },
  "חזר": {
    "translation": "returned / retracted",
    "shoresh": "ח - ז - ר",
    "transliteration": "cha-zar",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past"
    }
  },
  "חזרו": {
    "translation": "they retracted / returned",
    "shoresh": "ח - ז - ר",
    "transliteration": "chaz-ru",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Past Plural"
    }
  },
  "מטהר": {
    "translation": "declares pure / purifies",
    "shoresh": "ט - ה - ר",
    "transliteration": "me-ta-her",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pi'el",
      "tense": "Present"
    }
  },
  "ומטהר": {
    "translation": "and declares pure",
    "shoresh": "ט - ה - ר",
    "transliteration": "u-me-ta-her",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "מטהרין": {
    "translation": "they declare pure / purify",
    "shoresh": "ט - ה - ר",
    "transliteration": "me-ta-ha-rin",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pi'el",
      "tense": "Present Plural"
    }
  },
  "מטמא": {
    "translation": "declares impure / defiles",
    "shoresh": "ט - מ - א",
    "transliteration": "me-ta-me",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pi'el",
      "tense": "Present"
    }
  },
  "ומטמא": {
    "translation": "and declares impure",
    "shoresh": "ט - מ - א",
    "transliteration": "u-me-ta-me",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "מטמאין": {
    "translation": "they declare impure / defile",
    "shoresh": "ט - מ - א",
    "transliteration": "me-tam-in",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pi'el",
      "tense": "Present Plural"
    }
  },
  "מצטרפין": {
    "translation": "they combine together",
    "shoresh": "צ - ר - ף",
    "transliteration": "mitz-tar-fin",
    "grammar": {
      "pos": "Verb",
      "binyan": "Hitpa'el",
      "tense": "Present Plural"
    }
  },
  "מועלין": {
    "translation": "they commit sacrilege (me'ilah)",
    "shoresh": "מ - ע - ל",
    "transliteration": "mo-a-lin",
    "grammar": {
      "pos": "Verb",
      "binyan": "Pa'al",
      "tense": "Present Plural"
    }
  },
  "נטמא": {
    "translation": "became ritually impure",
    "shoresh": "ט - מ - א",
    "transliteration": "nit-ma",
    "grammar": {
      "pos": "Verb",
      "binyan": "Nif'al",
      "tense": "Past"
    }
  },
  "הריני": {
    "translation": "behold I am",
    "shoresh": "ר - א - ה",
    "transliteration": "ha-rei-ni",
    "grammar": {
      "pos": "Deictic Particle + Suffix"
    }
  },
  "שיהא": {
    "translation": "that there should be",
    "shoresh": "ה - י - ה",
    "transliteration": "she-ye-he",
    "grammar": {
      "pos": "Relative + Verb (Future)"
    }
  },
  "אל": {
    "translation": "unto / to / do not",
    "shoresh": "א - ל",
    "transliteration": "el / al",
    "grammar": {
      "pos": "Preposition / Negative Particle"
    }
  },
  "ואל": {
    "translation": "and to / and do not",
    "shoresh": "א - ל",
    "transliteration": "ve-el",
    "grammar": {
      "pos": "Conjunction + Prep"
    }
  },
  "שאל": {
    "translation": "that to / that do not / asked",
    "shoresh": "א - ל / ש - א - ל",
    "transliteration": "she-al / sha-al",
    "grammar": {
      "pos": "Relative + Prep / Verb"
    }
  },
  "עלי": {
    "translation": "upon me / my obligation",
    "shoresh": "ע - ל - ה",
    "transliteration": "a-lai",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "עליהם": {
    "translation": "upon them (masc.)",
    "shoresh": "ע - ל - ה",
    "transliteration": "a-lei-hem",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "עליהן": {
    "translation": "upon them (fem.)",
    "shoresh": "ע - ל - ה",
    "transliteration": "a-lei-hen",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "עלינו": {
    "translation": "upon us",
    "shoresh": "ע - ל - ה",
    "transliteration": "a-lei-nu",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "כי": {
    "translation": "because / when / that / for",
    "shoresh": "כ - י",
    "transliteration": "ki",
    "grammar": {
      "pos": "Conjunction"
    }
  },
  "וכי": {
    "translation": "and is it that / and when?",
    "shoresh": "כ - י",
    "transliteration": "ve-khi",
    "grammar": {
      "pos": "Interrogative / Conjunction"
    }
  },
  "בכי": {
    "translation": "with weeping / under liquid law (ki yutan)",
    "shoresh": "ב - כ - ה",
    "transliteration": "bi-khi",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "אשר": {
    "translation": "which / that / who",
    "shoresh": "א - ש - ר",
    "transliteration": "a-sher",
    "grammar": {
      "pos": "Relative Pronoun"
    }
  },
  "אימתי": {
    "translation": "when?",
    "shoresh": "מ - ת - י",
    "transliteration": "ei-ma-tai",
    "grammar": {
      "pos": "Interrogative Adverb"
    }
  },
  "איזהו": {
    "translation": "which is it?",
    "shoresh": "א - י - ז - ה",
    "transliteration": "ei-ze-hu",
    "grammar": {
      "pos": "Interrogative Pronoun (Masc.)"
    }
  },
  "איזו": {
    "translation": "which one? (fem.)",
    "shoresh": "א - י - ז - ה",
    "transliteration": "ei-zo",
    "grammar": {
      "pos": "Interrogative Pronoun (Fem.)"
    }
  },
  "איזה": {
    "translation": "which / what?",
    "shoresh": "א - י - ז - ה",
    "transliteration": "ei-zeh",
    "grammar": {
      "pos": "Interrogative Pronoun"
    }
  },
  "כאן": {
    "translation": "here / in this case",
    "shoresh": "כ - א - ן",
    "transliteration": "kan",
    "grammar": {
      "pos": "Adverb of Place"
    }
  },
  "למטה": {
    "translation": "below / downwards",
    "shoresh": "נ - ט - ה",
    "transliteration": "le-ma-tah",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "למעלה": {
    "translation": "above / upwards",
    "shoresh": "ע - ל - ה",
    "transliteration": "le-ma-lah",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "באמצע": {
    "translation": "in the middle / midway",
    "shoresh": "א - מ - צ - ע",
    "transliteration": "ba-em-tza",
    "grammar": {
      "pos": "Prepositional Phrase"
    }
  },
  "אמצע": {
    "translation": "middle",
    "shoresh": "א - מ - צ - ע",
    "transliteration": "em-tza",
    "grammar": {
      "pos": "Noun"
    }
  },
  "מנת": {
    "translation": "portion / condition (al menat)",
    "shoresh": "מ - נ - ה",
    "transliteration": "me-nat",
    "grammar": {
      "pos": "Noun (Construct)"
    }
  },
  "על מנת": {
    "translation": "on the condition that",
    "shoresh": "מ - נ - ה",
    "transliteration": "al me-nat",
    "grammar": {
      "pos": "Conditional Formula"
    }
  },
  "בשעת": {
    "translation": "at the time of",
    "shoresh": "ש - ע - ה",
    "transliteration": "bi-sh'at",
    "grammar": {
      "pos": "Prep + Noun (Construct)"
    }
  },
  "השעה": {
    "translation": "the hour",
    "shoresh": "ש - ע - ה",
    "transliteration": "ha-sha-ah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "חלין": {
    "translation": "unconsecrated / non-sacred food",
    "shoresh": "ח - ל - ל",
    "transliteration": "chu-lin",
    "grammar": {
      "pos": "Halakhic Status"
    }
  },
  "פגול": {
    "translation": "pigul (disqualified by improper thought of time)",
    "shoresh": "פ - ג - ל",
    "transliteration": "pi-gul",
    "grammar": {
      "pos": "Halakhic Status (Kodashim)"
    }
  },
  "הפגול": {
    "translation": "the pigul offering",
    "shoresh": "פ - ג - ל",
    "transliteration": "ha-pi-gul",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "נותר": {
    "translation": "notar (sacrificial meat left over past deadline)",
    "shoresh": "י - ת - ר",
    "transliteration": "no-tar",
    "grammar": {
      "pos": "Halakhic Status (Kodashim)"
    }
  },
  "הנותר": {
    "translation": "the leftover notar meat",
    "shoresh": "י - ת - ר",
    "transliteration": "ha-no-tar",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "טבל": {
    "translation": "tevel (untithed produce strictly forbidden to eat)",
    "shoresh": "ט - ב - ל",
    "transliteration": "te-vel",
    "grammar": {
      "pos": "Halakhic Status (Zeraim)"
    }
  },
  "הטבל": {
    "translation": "the untithed tevel",
    "shoresh": "ט - ב - ל",
    "transliteration": "ha-te-vel",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "חבית": {
    "translation": "barrel / jar / cask",
    "shoresh": "ח - ב - ת",
    "transliteration": "cha-vit",
    "grammar": {
      "pos": "Noun"
    }
  },
  "החבית": {
    "translation": "the barrel / jar",
    "shoresh": "ח - ב - ת",
    "transliteration": "ha-cha-vit",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "חביות": {
    "translation": "barrels / jars",
    "shoresh": "ח - ב - ת",
    "transliteration": "cha-vi-yot",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "נאמן": {
    "translation": "believed / deemed credible in testimony",
    "shoresh": "א - מ - ן",
    "transliteration": "ne-e-man",
    "grammar": {
      "pos": "Participle / Halakhic Status"
    }
  },
  "נאמנת": {
    "translation": "believed (fem.)",
    "shoresh": "א - מ - ן",
    "transliteration": "ne-e-me-net",
    "grammar": {
      "pos": "Participle (Fem.)"
    }
  },
  "נאמנים": {
    "translation": "believed / credible (plural)",
    "shoresh": "א - מ - ן",
    "transliteration": "ne-e-ma-nim",
    "grammar": {
      "pos": "Participle (Plural)"
    }
  },
  "נאמנין": {
    "translation": "they are believed / credible",
    "shoresh": "א - מ - ן",
    "transliteration": "ne-e-ma-nin",
    "grammar": {
      "pos": "Participle (Plural)"
    }
  },
  "ירושלים": {
    "translation": "Jerusalem",
    "shoresh": "ש - ל - ם",
    "transliteration": "ye-ru-sha-la-yim",
    "grammar": {
      "pos": "Proper Name"
    }
  },
  "בירושלים": {
    "translation": "in Jerusalem",
    "shoresh": "ש - ל - ם",
    "transliteration": "bi-yru-sha-la-yim",
    "grammar": {
      "pos": "Prep + Proper Name"
    }
  },
  "עיר": {
    "translation": "city / town",
    "shoresh": "ע - י - ר",
    "transliteration": "ir",
    "grammar": {
      "pos": "Noun (Fem.)"
    }
  },
  "העיר": {
    "translation": "the city / town",
    "shoresh": "ע - י - ר",
    "transliteration": "ha-ir",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בעיר": {
    "translation": "in the city",
    "shoresh": "ע - י - ר",
    "transliteration": "ba-ir",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "עיירות": {
    "translation": "towns / cities",
    "shoresh": "ע - י - ר",
    "transliteration": "a-ya-rot",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "לחם": {
    "translation": "bread / loaf",
    "shoresh": "ל - ח - ם",
    "transliteration": "le-chem",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הלחם": {
    "translation": "the bread",
    "shoresh": "ל - ח - ם",
    "transliteration": "ha-le-chem",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "מום": {
    "translation": "blemish / physical defect",
    "shoresh": "מ - ו - ם",
    "transliteration": "mum",
    "grammar": {
      "pos": "Noun"
    }
  },
  "המום": {
    "translation": "the blemish",
    "shoresh": "מ - ו - ם",
    "transliteration": "ha-mum",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "מומין": {
    "translation": "blemishes",
    "shoresh": "מ - ו - ם",
    "transliteration": "mu-min",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "מומים": {
    "translation": "blemishes",
    "shoresh": "מ - ו - ם",
    "transliteration": "mu-mim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "חומר": {
    "translation": "stringency / severity",
    "shoresh": "ח - מ - ר",
    "transliteration": "cho-mer",
    "grammar": {
      "pos": "Noun"
    }
  },
  "חמר": {
    "translation": "stringency / donkey / clay",
    "shoresh": "ח - מ - ר",
    "transliteration": "cho-mer / cha-mor",
    "grammar": {
      "pos": "Noun"
    }
  },
  "קולא": {
    "translation": "leniency",
    "shoresh": "ק - ל - ל",
    "transliteration": "ku-la",
    "grammar": {
      "pos": "Noun"
    }
  },
  "מקצת": {
    "translation": "part of / a portion of",
    "shoresh": "ק - צ - ץ",
    "transliteration": "mik-tzat",
    "grammar": {
      "pos": "Noun (Construct)"
    }
  },
  "רוצה": {
    "translation": "wishes / desires",
    "shoresh": "ר - צ - ה",
    "transliteration": "ro-tzeh",
    "grammar": {
      "pos": "Verb (Present)"
    }
  },
  "נכסים": {
    "translation": "property / assets / estate",
    "shoresh": "נ - כ - ס",
    "transliteration": "ne-kha-sim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "הנכסים": {
    "translation": "the property / the assets",
    "shoresh": "נ - כ - ס",
    "transliteration": "ha-ne-kha-sim",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "אבן": {
    "translation": "stone",
    "shoresh": "א - ב - ן",
    "transliteration": "e-ven",
    "grammar": {
      "pos": "Noun (Fem.)"
    }
  },
  "האבן": {
    "translation": "the stone",
    "shoresh": "א - ב - ן",
    "transliteration": "ha-e-ven",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "אבנים": {
    "translation": "stones",
    "shoresh": "א - ב - ן",
    "transliteration": "a-va-nim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "עץ": {
    "translation": "wood / tree",
    "shoresh": "ע - צ - ה",
    "transliteration": "etz",
    "grammar": {
      "pos": "Noun"
    }
  },
  "העץ": {
    "translation": "the tree / the wood",
    "shoresh": "ע - צ - ה",
    "transliteration": "ha-etz",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "עצים": {
    "translation": "wood / trees / firewood for altar",
    "shoresh": "ע - צ - ה",
    "transliteration": "e-tzim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "הולך": {
    "translation": "goes / walks",
    "shoresh": "ה - ל - ך",
    "transliteration": "ho-lekh",
    "grammar": {
      "pos": "Verb (Present)"
    }
  },
  "והולך": {
    "translation": "and goes / and walks",
    "shoresh": "ה - ל - ך",
    "transliteration": "ve-ho-lekh",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "הולכין": {
    "translation": "they go / they walk",
    "shoresh": "ה - ל - ך",
    "transliteration": "hol-khin",
    "grammar": {
      "pos": "Verb (Present Plural)"
    }
  },
  "ברוך": {
    "translation": "blessed",
    "shoresh": "ב - ר - ך",
    "transliteration": "ba-rukh",
    "grammar": {
      "pos": "Passive Participle"
    }
  },
  "ראיה": {
    "translation": "proof / appearance offering in Temple (re'iyah)",
    "shoresh": "ר - א - ה",
    "transliteration": "re-i-yah",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הראיה": {
    "translation": "the proof / the appearance offering",
    "shoresh": "ר - א - ה",
    "transliteration": "ha-re-i-yah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "מצוה": {
    "translation": "commandment (mitzvah)",
    "shoresh": "צ - ו - ה",
    "transliteration": "mitz-vah",
    "grammar": {
      "pos": "Noun"
    }
  },
  "המצוה": {
    "translation": "the commandment",
    "shoresh": "צ - ו - ה",
    "transliteration": "ha-mitz-vah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "מצות": {
    "translation": "commandments / matzot (unleavened bread)",
    "shoresh": "צ - ו - ה / מ - צ - ה",
    "transliteration": "mitz-vot / ma-tzot",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "המצות": {
    "translation": "the commandments / the matzot",
    "shoresh": "צ - ו - ה",
    "transliteration": "ha-mitz-vot",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "אשת": {
    "translation": "wife of",
    "shoresh": "א - נ - ש",
    "transliteration": "e-shet",
    "grammar": {
      "pos": "Noun (Construct)"
    }
  },
  "אשת איש": {
    "translation": "married woman",
    "shoresh": "א - נ - ש",
    "transliteration": "e-shet ish",
    "grammar": {
      "pos": "Halakhic Status"
    }
  },
  "מגע": {
    "translation": "touch / physical contact (transmitting impurity)",
    "shoresh": "נ - ג - ע",
    "transliteration": "ma-ga",
    "grammar": {
      "pos": "Noun (Tahorot)"
    }
  },
  "במגע": {
    "translation": "by touch / contact",
    "shoresh": "נ - ג - ע",
    "transliteration": "be-ma-ga",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "משא": {
    "translation": "carrying burden (transmitting impurity / melakhah)",
    "shoresh": "נ - ש - א",
    "transliteration": "ma-sa",
    "grammar": {
      "pos": "Noun"
    }
  },
  "במשא": {
    "translation": "by carrying",
    "shoresh": "נ - ש - א",
    "transliteration": "be-ma-sa",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "לתוכו": {
    "translation": "into its interior / into it",
    "shoresh": "ת - ו - ך",
    "transliteration": "le-to-kho",
    "grammar": {
      "pos": "Prep + Suffix"
    }
  },
  "לתוכה": {
    "translation": "into her interior / into it",
    "shoresh": "ת - ו - ך",
    "transliteration": "le-to-khah",
    "grammar": {
      "pos": "Prep + Suffix"
    }
  },
  "הגיע": {
    "translation": "arrived / reached / touched",
    "shoresh": "נ - ג - ע",
    "transliteration": "hi-gi-a",
    "grammar": {
      "pos": "Verb (Hif'il Past)"
    }
  },
  "הגיעו": {
    "translation": "they arrived / reached",
    "shoresh": "נ - ג - ע",
    "transliteration": "hig-i-u",
    "grammar": {
      "pos": "Verb (Hif'il Past Plural)"
    }
  },
  "אבא": {
    "translation": "Abba (father / Sage title)",
    "shoresh": "א - ב - ה",
    "transliteration": "ab-ba",
    "grammar": {
      "pos": "Honorific / Proper Name"
    }
  },
  "רבו": {
    "translation": "his master / his teacher",
    "shoresh": "ר - ב - ב",
    "transliteration": "ra-bo",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "מתרת": {
    "translation": "permitted (fem.) / frees",
    "shoresh": "נ - ת - ר",
    "transliteration": "mu-te-ret",
    "grammar": {
      "pos": "Participle (Fem.)"
    }
  },
  "יהא": {
    "translation": "shall be / let it be",
    "shoresh": "ה - י - ה",
    "transliteration": "ye-he",
    "grammar": {
      "pos": "Verb (Future Jussive)"
    }
  },
  "תהא": {
    "translation": "shall be (fem.) / let it be",
    "shoresh": "ה - י - ה",
    "transliteration": "te-he",
    "grammar": {
      "pos": "Verb (Future Jussive)"
    }
  },
  "יהו": {
    "translation": "shall be (plural)",
    "shoresh": "ה - י - ה",
    "transliteration": "ye-hu",
    "grammar": {
      "pos": "Verb (Future Plural)"
    }
  },
  "זרה": {
    "translation": "foreign / strange / idol worship (avodah zarah)",
    "shoresh": "ז - ו - ר",
    "transliteration": "za-rah",
    "grammar": {
      "pos": "Adjective (Fem.)"
    }
  },
  "עבודה זרה": {
    "translation": "idolatry / foreign worship",
    "shoresh": "ע - ב - ד",
    "transliteration": "a-vo-dah za-rah",
    "grammar": {
      "pos": "Halakhic Term"
    }
  },
  "כתבתה": {
    "translation": "her marriage contract (ketubah)",
    "shoresh": "כ - ת - ב",
    "transliteration": "ktu-ba-tah",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "מטה": {
    "translation": "bed / couch / downward",
    "shoresh": "נ - ט - ה",
    "transliteration": "mi-tah",
    "grammar": {
      "pos": "Noun (Fem.)"
    }
  },
  "המטה": {
    "translation": "the bed",
    "shoresh": "נ - ט - ה",
    "transliteration": "ha-mi-tah",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "קרן": {
    "translation": "principal capital / horn / goring",
    "shoresh": "ק - ר - ן",
    "transliteration": "ke-ren",
    "grammar": {
      "pos": "Noun (Nezikin)"
    }
  },
  "הקרן": {
    "translation": "the principal capital / the horn",
    "shoresh": "ק - ר - ן",
    "transliteration": "ha-ke-ren",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "תלמוד": {
    "translation": "study / Talmud",
    "shoresh": "ל - מ - ד",
    "transliteration": "tal-mud",
    "grammar": {
      "pos": "Noun"
    }
  },
  "תלמוד תורה": {
    "translation": "Torah study",
    "shoresh": "ל - מ - ד",
    "transliteration": "tal-mud to-rah",
    "grammar": {
      "pos": "Noun Phrase"
    }
  },
  "גמילות": {
    "translation": "bestowal / acts of",
    "shoresh": "ג - מ - ל",
    "transliteration": "gmi-lut",
    "grammar": {
      "pos": "Noun (Construct)"
    }
  },
  "גמילות חסדים": {
    "translation": "acts of lovingkindness",
    "shoresh": "ג - מ - ל",
    "transliteration": "gmi-lut cha-sa-dim",
    "grammar": {
      "pos": "Noun Phrase"
    }
  },
  "חסדים": {
    "translation": "kindnesses / mercies",
    "shoresh": "ח - ס - ד",
    "transliteration": "cha-sa-dim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "בכורים": {
    "translation": "first fruits (bikkurim)",
    "shoresh": "ב - כ - ר",
    "transliteration": "bi-ku-rim",
    "grammar": {
      "pos": "Noun (Plural Zeraim)"
    }
  },
  "הבכורים": {
    "translation": "the first fruits",
    "shoresh": "ב - כ - ר",
    "transliteration": "ha-bi-ku-rim",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "ראיון": {
    "translation": "appearance offering on pilgrim festivals (re'ayon)",
    "shoresh": "ר - א - ה",
    "transliteration": "re-a-yon",
    "grammar": {
      "pos": "Noun (Moed)"
    }
  },
  "שיעור": {
    "translation": "fixed measure / minimum quantity (shiur)",
    "shoresh": "ש - ע - ר",
    "transliteration": "shi-ur",
    "grammar": {
      "pos": "Noun"
    }
  },
  "שעור": {
    "translation": "fixed measure / minimum quantity (shiur)",
    "shoresh": "ש - ע - ר",
    "transliteration": "shi-ur",
    "grammar": {
      "pos": "Noun"
    }
  },
  "השיעור": {
    "translation": "the fixed measure",
    "shoresh": "ש - ע - ר",
    "transliteration": "ha-shi-ur",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "קים": {
    "translation": "enduring / established / valid",
    "shoresh": "ק - ו - ם",
    "transliteration": "ka-yam",
    "grammar": {
      "pos": "Adjective"
    }
  },
  "קיים": {
    "translation": "enduring / established / valid",
    "shoresh": "ק - ו - ם",
    "transliteration": "ka-yam",
    "grammar": {
      "pos": "Adjective"
    }
  },
  "קימת": {
    "translation": "endures / remains established (fem.)",
    "shoresh": "ק - ו - ם",
    "transliteration": "ka-ye-met",
    "grammar": {
      "pos": "Adjective (Fem.)"
    }
  },
  "קיימת": {
    "translation": "endures / remains established (fem.)",
    "shoresh": "ק - ו - ם",
    "transliteration": "ka-ye-met",
    "grammar": {
      "pos": "Adjective (Fem.)"
    }
  },
  "קימין": {
    "translation": "enduring / valid (plural)",
    "shoresh": "ק - ו - ם",
    "transliteration": "ka-ya-min",
    "grammar": {
      "pos": "Adjective (Plural)"
    }
  },
  "קיימין": {
    "translation": "enduring / valid (plural)",
    "shoresh": "ק - ו - ם",
    "transliteration": "ka-ya-min",
    "grammar": {
      "pos": "Adjective (Plural)"
    }
  },
  "כבוד": {
    "translation": "honor / respect",
    "shoresh": "כ - ב - ד",
    "transliteration": "ka-vod",
    "grammar": {
      "pos": "Noun"
    }
  },
  "כיבוד": {
    "translation": "honoring / respect",
    "shoresh": "כ - ב - ד",
    "transliteration": "ki-bud",
    "grammar": {
      "pos": "Noun (Action)"
    }
  },
  "שלום": {
    "translation": "peace / wholeness",
    "shoresh": "ש - ל - ם",
    "transliteration": "sha-lom",
    "grammar": {
      "pos": "Noun"
    }
  },
  "והבאת": {
    "translation": "and bringing of",
    "shoresh": "ב - ו - א",
    "transliteration": "ve-ha-va-at",
    "grammar": {
      "pos": "Conjunction + Noun (Construct)"
    }
  },
  "חבר": {
    "translation": "fellow / associate / observant scholar",
    "shoresh": "ח - ב - ר",
    "transliteration": "cha-ver",
    "grammar": {
      "pos": "Noun"
    }
  },
  "החבר": {
    "translation": "the associate / observant scholar",
    "shoresh": "ח - ב - ר",
    "transliteration": "ha-cha-ver",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "חברו": {
    "translation": "his fellow / his peer",
    "shoresh": "ח - ב - ר",
    "transliteration": "cha-ve-ro",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "לחברו": {
    "translation": "to his fellow",
    "shoresh": "ח - ב - ר",
    "transliteration": "le-cha-ve-ro",
    "grammar": {
      "pos": "Prep + Noun + Suffix"
    }
  },
  "חברים": {
    "translation": "associates / fellows",
    "shoresh": "ח - ב - ר",
    "transliteration": "cha-ve-rim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "להקל": {
    "translation": "to be lenient",
    "shoresh": "ק - ל - ל",
    "transliteration": "le-ha-kel",
    "grammar": {
      "pos": "Infinitive (Hif'il)"
    }
  },
  "להחמיר": {
    "translation": "to be stringent",
    "shoresh": "ח - מ - ר",
    "transliteration": "le-hach-mir",
    "grammar": {
      "pos": "Infinitive (Hif'il)"
    }
  },
  "תלוי": {
    "translation": "suspended / in abeyance (doubtful guilt offering)",
    "shoresh": "ת - ל - ה",
    "transliteration": "ta-lui",
    "grammar": {
      "pos": "Passive Participle"
    }
  },
  "תלויה": {
    "translation": "suspended (fem.)",
    "shoresh": "ת - ל - ה",
    "transliteration": "tlu-yah",
    "grammar": {
      "pos": "Passive Participle (Fem.)"
    }
  },
  "תלויין": {
    "translation": "suspended / pending",
    "shoresh": "ת - ל - ה",
    "transliteration": "tlu-yin",
    "grammar": {
      "pos": "Passive Participle (Plural)"
    }
  },
  "אשם תלוי": {
    "translation": "conditional / suspended guilt offering",
    "shoresh": "ת - ל - ה",
    "transliteration": "a-sham ta-lui",
    "grammar": {
      "pos": "Halakhic Term"
    }
  },
  "אשם ודאי": {
    "translation": "definite guilt offering",
    "shoresh": "י - ד - ע",
    "transliteration": "a-sham va-dai",
    "grammar": {
      "pos": "Halakhic Term"
    }
  },
  "ודאי": {
    "translation": "certain / definite",
    "shoresh": "י - ד - ע",
    "transliteration": "va-dai",
    "grammar": {
      "pos": "Adverb / Adjective"
    }
  },
  "ודאית": {
    "translation": "certain (fem.)",
    "shoresh": "י - ד - ע",
    "transliteration": "va-da-it",
    "grammar": {
      "pos": "Adjective (Fem.)"
    }
  },
  "ספק": {
    "translation": "doubt / uncertainty",
    "shoresh": "ס - פ - ק",
    "transliteration": "sa-fek",
    "grammar": {
      "pos": "Noun"
    }
  },
  "ספקות": {
    "translation": "doubts / uncertain cases",
    "shoresh": "ס - פ - ק",
    "transliteration": "sfe-kot",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "רובא": {
    "translation": "majority",
    "shoresh": "ר - ב - ב",
    "transliteration": "ru-ba",
    "grammar": {
      "pos": "Legal Principle"
    }
  },
  "רוב": {
    "translation": "majority / most of",
    "shoresh": "ר - ב - ב",
    "transliteration": "rov",
    "grammar": {
      "pos": "Noun"
    }
  },
  "רובו": {
    "translation": "most of it",
    "shoresh": "ר - ב - ב",
    "transliteration": "ru-bo",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "רובה": {
    "translation": "most of her / most of it",
    "shoresh": "ר - ב - ב",
    "transliteration": "ru-bah",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "תשלומי": {
    "translation": "payments of / compensation for",
    "shoresh": "ש - ל - ם",
    "transliteration": "tash-lu-mei",
    "grammar": {
      "pos": "Noun (Construct Plural)"
    }
  },
  "תשלומין": {
    "translation": "payments / compensations",
    "shoresh": "ש - ל - ם",
    "transliteration": "tash-lu-min",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "דיני": {
    "translation": "laws of / judgments of",
    "shoresh": "ד - י - ן",
    "transliteration": "di-nei",
    "grammar": {
      "pos": "Noun (Construct Plural)"
    }
  },
  "דין": {
    "translation": "law / judgment / legal logic",
    "shoresh": "ד - י - ן",
    "transliteration": "din",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הדין": {
    "translation": "the law / the legal argument",
    "shoresh": "ד - י - ן",
    "transliteration": "ha-din",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "דיני ממונות": {
    "translation": "civil / monetary laws",
    "shoresh": "ד - י - ן",
    "transliteration": "di-nei ma-mo-not",
    "grammar": {
      "pos": "Halakhic Category"
    }
  },
  "דיני נפשות": {
    "translation": "capital criminal laws",
    "shoresh": "ד - י - ן",
    "transliteration": "di-nei ne-fa-shot",
    "grammar": {
      "pos": "Halakhic Category"
    }
  },
  "ממון": {
    "translation": "money / financial property",
    "shoresh": "מ - מ - ן",
    "transliteration": "ma-mon",
    "grammar": {
      "pos": "Noun"
    }
  },
  "ממונות": {
    "translation": "monetary matters",
    "shoresh": "מ - מ - ן",
    "transliteration": "ma-mo-not",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "נפש": {
    "translation": "soul / life / person",
    "shoresh": "נ - פ - ש",
    "transliteration": "ne-fesh",
    "grammar": {
      "pos": "Noun (Fem.)"
    }
  },
  "נפשות": {
    "translation": "lives / capital cases",
    "shoresh": "נ - פ - ש",
    "transliteration": "ne-fa-shot",
    "grammar": {
      "pos": "Noun (Plural Fem.)"
    }
  },
  "נפשו": {
    "translation": "his life / himself",
    "shoresh": "נ - פ - ש",
    "transliteration": "naf-sho",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "מין": {
    "translation": "species / type / kind",
    "shoresh": "מ - י - ן",
    "transliteration": "min",
    "grammar": {
      "pos": "Noun"
    }
  },
  "המין": {
    "translation": "the species / kind",
    "shoresh": "מ - י - ן",
    "transliteration": "ha-min",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "מינים": {
    "translation": "species / kinds",
    "shoresh": "מ - י - ן",
    "transliteration": "mi-nim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "מינו": {
    "translation": "its species / its kind",
    "shoresh": "מ - י - ן",
    "transliteration": "mi-no",
    "grammar": {
      "pos": "Noun + Suffix"
    }
  },
  "במינו": {
    "translation": "in its own species",
    "shoresh": "מ - י - ן",
    "transliteration": "be-mi-no",
    "grammar": {
      "pos": "Prep + Noun + Suffix"
    }
  },
  "שאינו מינו": {
    "translation": "not of its own species (mixed species)",
    "shoresh": "מ - י - ן",
    "transliteration": "she-ei-no mi-no",
    "grammar": {
      "pos": "Halakhic Formula"
    }
  },
  "כמין": {
    "translation": "like the species of / resembling",
    "shoresh": "מ - י - ן",
    "transliteration": "ki-min",
    "grammar": {
      "pos": "Preposition"
    }
  },
  "חטים": {
    "translation": "wheat grains",
    "shoresh": "ח - ט - ה",
    "transliteration": "chi-tim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "חיטים": {
    "translation": "wheat grains",
    "shoresh": "ח - ט - ה",
    "transliteration": "chi-tim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "שעורים": {
    "translation": "barley grains",
    "shoresh": "ש - ע - ר",
    "transliteration": "se-o-rim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "תאנים": {
    "translation": "figs",
    "shoresh": "ת - א - ן",
    "transliteration": "te-e-nim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "תאנה": {
    "translation": "fig / fig tree",
    "shoresh": "ת - א - ן",
    "transliteration": "te-e-nah",
    "grammar": {
      "pos": "Noun"
    }
  },
  "גפן": {
    "translation": "grapevine",
    "shoresh": "ג - פ - ן",
    "transliteration": "ge-fen",
    "grammar": {
      "pos": "Noun (Fem.)"
    }
  },
  "ענבים": {
    "translation": "grapes",
    "shoresh": "ע - נ - ב",
    "transliteration": "a-na-vim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "רימון": {
    "translation": "pomegranate",
    "shoresh": "ר - מ - ן",
    "transliteration": "ri-mon",
    "grammar": {
      "pos": "Noun"
    }
  },
  "בגד": {
    "translation": "garment / cloth",
    "shoresh": "ב - ג - ד",
    "transliteration": "be-ged",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הבגד": {
    "translation": "the garment",
    "shoresh": "ב - ג - ד",
    "transliteration": "ha-be-ged",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בגדים": {
    "translation": "garments / clothes",
    "shoresh": "ב - ג - ד",
    "transliteration": "bga-dim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "הבגדים": {
    "translation": "the garments",
    "shoresh": "ב - ג - ד",
    "transliteration": "ha-bga-dim",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בבגד": {
    "translation": "in a garment",
    "shoresh": "ב - ג - ד",
    "transliteration": "be-ve-ged",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "עצם": {
    "translation": "bone / essence / self",
    "shoresh": "ע - צ - ם",
    "transliteration": "e-tzem",
    "grammar": {
      "pos": "Noun"
    }
  },
  "העצם": {
    "translation": "the bone / the essence",
    "shoresh": "ע - צ - ם",
    "transliteration": "ha-e-tzem",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "עצמות": {
    "translation": "bones",
    "shoresh": "ע - צ - ם",
    "transliteration": "atza-mot",
    "grammar": {
      "pos": "Noun (Plural Fem.)"
    }
  },
  "בהרת": {
    "translation": "bright white spot (primary tzaraat affliction)",
    "shoresh": "ב - ה - ר",
    "transliteration": "ba-he-ret",
    "grammar": {
      "pos": "Noun (Tahorot/Negaim)"
    }
  },
  "הבהרת": {
    "translation": "the bright white affliction spot",
    "shoresh": "ב - ה - ר",
    "transliteration": "ha-ba-he-ret",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בכור": {
    "translation": "firstborn (beast or human dedicated to God)",
    "shoresh": "ב - כ - ר",
    "transliteration": "be-khor",
    "grammar": {
      "pos": "Noun (Kodashim)"
    }
  },
  "הבכור": {
    "translation": "the firstborn",
    "shoresh": "ב - כ - ר",
    "transliteration": "ha-be-khor",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "בכורה": {
    "translation": "firstborn (fem.) / birthright",
    "shoresh": "ב - כ - ר",
    "transliteration": "bkho-rah",
    "grammar": {
      "pos": "Noun (Fem.)"
    }
  },
  "ככר": {
    "translation": "loaf of bread / talent weight",
    "shoresh": "כ - כ - ר",
    "transliteration": "ki-kar",
    "grammar": {
      "pos": "Noun"
    }
  },
  "הככר": {
    "translation": "the loaf of bread",
    "shoresh": "כ - כ - ר",
    "transliteration": "ha-ki-kar",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "לג": {
    "translation": "log (liquid measure)",
    "shoresh": "ל - ו - ג",
    "transliteration": "log",
    "grammar": {
      "pos": "Noun (Measurement)"
    }
  },
  "הלג": {
    "translation": "the log",
    "shoresh": "ל - ו - ג",
    "transliteration": "ha-log",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "לגין": {
    "translation": "logs (liquid measures)",
    "shoresh": "ל - ו - ג",
    "transliteration": "lu-gin",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "חולץ": {
    "translation": "removes chalitzah shoe",
    "shoresh": "ח - ל - ץ",
    "transliteration": "cho-letz",
    "grammar": {
      "pos": "Verb (Present)"
    }
  },
  "חולצת": {
    "translation": "removes shoe (fem.)",
    "shoresh": "ח - ל - ץ",
    "transliteration": "cho-le-tzet",
    "grammar": {
      "pos": "Verb (Present Fem.)"
    }
  },
  "חרש": {
    "translation": "deaf-mute / silent / craftsman",
    "shoresh": "ח - ר - ש",
    "transliteration": "che-resh",
    "grammar": {
      "pos": "Halakhic Classification"
    }
  },
  "שוטה": {
    "translation": "halakhic imbecile / incompetent",
    "shoresh": "ש - ט - ה",
    "transliteration": "sho-teh",
    "grammar": {
      "pos": "Halakhic Classification"
    }
  },
  "חרש שוטה וקטן": {
    "translation": "deaf-mute, imbecile, and minor (lacking legal halakhic capacity)",
    "shoresh": "ח - ר - ש",
    "transliteration": "che-resh sho-teh ve-ka-tan",
    "grammar": {
      "pos": "Halakhic Triad"
    }
  },
  "בן חורין": {
    "translation": "free person / emancipated",
    "shoresh": "ח - ר - ר",
    "transliteration": "ben cho-rin",
    "grammar": {
      "pos": "Halakhic Status"
    }
  },
  "בני חורין": {
    "translation": "free people",
    "shoresh": "ח - ר - ר",
    "transliteration": "bnei cho-rin",
    "grammar": {
      "pos": "Halakhic Status (Plural)"
    }
  },
  "עבד": {
    "translation": "servant / slave",
    "shoresh": "ע - ב - ד",
    "transliteration": "e-ved",
    "grammar": {
      "pos": "Noun"
    }
  },
  "העבד": {
    "translation": "the servant / slave",
    "shoresh": "ע - ב - ד",
    "transliteration": "ha-e-ved",
    "grammar": {
      "pos": "Definite Noun"
    }
  },
  "עבדים": {
    "translation": "servants / slaves",
    "shoresh": "ע - ב - ד",
    "transliteration": "a-va-dim",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "שפחה": {
    "translation": "maidservant / bondwoman",
    "shoresh": "ש - פ - ח",
    "transliteration": "shif-chah",
    "grammar": {
      "pos": "Noun (Fem.)"
    }
  },
  "שפחות": {
    "translation": "maidservants",
    "shoresh": "ש - פ - ח",
    "transliteration": "shfa-chot",
    "grammar": {
      "pos": "Noun (Plural Fem.)"
    }
  },
  "מוציא": {
    "translation": "brings out / carries out (on Shabbat) / fulfills obligation",
    "shoresh": "י - צ - א",
    "transliteration": "mo-tzi",
    "grammar": {
      "pos": "Verb (Hif'il Present)"
    }
  },
  "ומוציא": {
    "translation": "and brings out",
    "shoresh": "י - צ - א",
    "transliteration": "u-mo-tzi",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "מוציאין": {
    "translation": "they carry out / bring out",
    "shoresh": "י - צ - א",
    "transliteration": "mo-tzi-in",
    "grammar": {
      "pos": "Verb (Hif'il Present Plural)"
    }
  },
  "יחזיר": {
    "translation": "shall return / restore",
    "shoresh": "ח - ז - ר",
    "transliteration": "yach-zir",
    "grammar": {
      "pos": "Verb (Hif'il Future)"
    }
  },
  "יחזירו": {
    "translation": "they shall return",
    "shoresh": "ח - ז - ר",
    "transliteration": "yach-zi-ru",
    "grammar": {
      "pos": "Verb (Hif'il Future Plural)"
    }
  },
  "החזיר": {
    "translation": "returned / restored",
    "shoresh": "ח - ז - ר",
    "transliteration": "hech-zir",
    "grammar": {
      "pos": "Verb (Hif'il Past)"
    }
  },
  "החזירו": {
    "translation": "they returned / restored",
    "shoresh": "ח - ז - ר",
    "transliteration": "hech-zi-ru",
    "grammar": {
      "pos": "Verb (Hif'il Past Plural)"
    }
  },
  "לתן": {
    "translation": "to give / to place",
    "shoresh": "נ - ת - ן",
    "transliteration": "la-tet",
    "grammar": {
      "pos": "Infinitive"
    }
  },
  "לתת": {
    "translation": "to give / to place",
    "shoresh": "נ - ת - ן",
    "transliteration": "la-tet",
    "grammar": {
      "pos": "Infinitive"
    }
  },
  "תצא": {
    "translation": "shall go out / depart / be divorced without ketubah",
    "shoresh": "י - צ - א",
    "transliteration": "te-tze",
    "grammar": {
      "pos": "Verb (Future Fem.)"
    }
  },
  "יצאו": {
    "translation": "they went out / fulfilled their obligation",
    "shoresh": "י - צ - א",
    "transliteration": "yatz-u",
    "grammar": {
      "pos": "Verb (Past Plural)"
    }
  },
  "רואין": {
    "translation": "they view / estimate / regard",
    "shoresh": "ר - א - ה",
    "transliteration": "ro-in",
    "grammar": {
      "pos": "Verb (Present Plural)"
    }
  },
  "ורואין": {
    "translation": "and they view / estimate",
    "shoresh": "ר - א - ה",
    "transliteration": "ve-ro-in",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "רואה": {
    "translation": "sees / views",
    "shoresh": "ר - א - ה",
    "transliteration": "ro-eh",
    "grammar": {
      "pos": "Verb (Present)"
    }
  },
  "מודים": {
    "translation": "they admit / concede agreement",
    "shoresh": "י - ד - ה",
    "transliteration": "mo-dim",
    "grammar": {
      "pos": "Verb (Hif'il Present Plural)"
    }
  },
  "מודין": {
    "translation": "they admit / concede",
    "shoresh": "י - ד - ה",
    "transliteration": "mo-din",
    "grammar": {
      "pos": "Verb (Hif'il Present Plural)"
    }
  },
  "ומודים": {
    "translation": "and they concede / agree",
    "shoresh": "י - ד - ה",
    "transliteration": "u-mo-dim",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "ומודין": {
    "translation": "and they concede",
    "shoresh": "י - ד - ה",
    "transliteration": "u-mo-din",
    "grammar": {
      "pos": "Conjunction + Verb"
    }
  },
  "חל": {
    "translation": "takes effect / applies / occurs on",
    "shoresh": "ח - ו - ל",
    "transliteration": "chal",
    "grammar": {
      "pos": "Verb (Present)"
    }
  },
  "חלה": {
    "translation": "dough offering (challah) / takes effect (fem.)",
    "shoresh": "ח - ל - ל / ח - ו - ל",
    "transliteration": "chal-lah",
    "grammar": {
      "pos": "Noun / Verb"
    }
  },
  "בצד": {
    "translation": "at the side of / beside",
    "shoresh": "צ - ד - ד",
    "transliteration": "be-tzad",
    "grammar": {
      "pos": "Prep + Noun"
    }
  },
  "צד": {
    "translation": "side / aspect",
    "shoresh": "צ - ד - ד",
    "transliteration": "tzad",
    "grammar": {
      "pos": "Noun"
    }
  },
  "צדדין": {
    "translation": "sides / aspects",
    "shoresh": "צ - ד - ד",
    "transliteration": "tzda-din",
    "grammar": {
      "pos": "Noun (Plural)"
    }
  },
  "גבוה": {
    "translation": "high / tall / Temple treasury",
    "shoresh": "ג - ב - ה",
    "transliteration": "ga-vo-ah",
    "grammar": {
      "pos": "Adjective / Noun"
    }
  },
  "נמוך": {
    "translation": "low / short",
    "shoresh": "נ - מ - ך",
    "transliteration": "na-mukh",
    "grammar": {
      "pos": "Adjective"
    }
  },
  "מלמטן": {
    "translation": "from below / underneath",
    "shoresh": "נ - ט - ה",
    "transliteration": "mi-le-ma-tan",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "מלמעלן": {
    "translation": "from above",
    "shoresh": "ע - ל - ה",
    "transliteration": "mi-le-ma-lan",
    "grammar": {
      "pos": "Adverb"
    }
  },
  "ביניהם": {
    "translation": "between them (masc.)",
    "shoresh": "ב - י - ן",
    "transliteration": "bei-nei-hem",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "ביניהן": {
    "translation": "between them (fem.)",
    "shoresh": "ב - י - ן",
    "transliteration": "bei-nei-hen",
    "grammar": {
      "pos": "Preposition + Suffix"
    }
  },
  "אומרת": {
    "translation": "says / states (fem.)",
    "shoresh": "א - מ - ר",
    "transliteration": "o-me-ret",
    "grammar": {
      "pos": "Verb (Present Fem.)"
    }
  },
  "בוקעת": {
    "translation": "breaks through / cleaves upward",
    "shoresh": "ב - ק - ע",
    "transliteration": "bo-ka-at",
    "grammar": {
      "pos": "Verb (Present Fem.)"
    }
  },
  "רע": {
    "translation": "bad / evil / neighbor",
    "shoresh": "ר - ע - ע",
    "transliteration": "ra",
    "grammar": {
      "pos": "Adjective / Noun"
    }
  },
  "אנשי": {
    "translation": "men of / people of",
    "shoresh": "א - נ - ש",
    "transliteration": "an-shei",
    "grammar": {
      "pos": "Noun (Construct Plural)"
    }
  }
};

export const COMMON_MISHNA_ROOTS: Record<string, string> = {
  "אבד": "to lose / perish / destroy",
  "אבה": "to consent / desire",
  "אבל": "to mourn",
  "אגר": "to gather / hire",
  "אדם": "to be red",
  "אחז": "to grasp / seize / hold",
  "אחר": "to delay / remain behind",
  "אכל": "to eat / consume",
  "אמר": "to say / state",
  "אסף": "to gather / collect",
  "אסר": "to bind / prohibit / forbid",
  "אפה": "to bake",
  "אפק": "to hold back / contain",
  "ארג": "to weave",
  "ארך": "to lengthen / prolong",
  "ארס": "to betroth",
  "אתה": "to come",
  "בוא": "to come / arrive / bring",
  "בוז": "to despise / hold in contempt",
  "בזה": "to despise / treat lightly",
  "בטל": "to nullify / cancel / cease",
  "בין": "to understand / distinguish",
  "בכה": "to weep / cry",
  "בלט": "to protrude / stand out",
  "בלל": "to mix / blend flour with oil",
  "בלע": "to swallow / absorb taste",
  "בנה": "to build / construct",
  "בער": "to burn / consume / remove leaven",
  "בצר": "to harvest grapes / vintage",
  "בקע": "to split / cleave",
  "בקר": "to inspect / examine for blemishes",
  "ברא": "to create",
  "ברח": "to flee / escape",
  "ברך": "to bless / recite benediction",
  "ברר": "to select / sort out",
  "בשל": "to cook / boil",
  "גאל": "to redeem",
  "גבה": "to collect debt / seize payment",
  "גדע": "to chop off / cut down",
  "גדר": "to fence / hedge in",
  "גזל": "to rob / seize unlawfully",
  "גזר": "to decree / cut / sever",
  "גלה": "to reveal / exile",
  "גלח": "to shave hair / razor",
  "גנב": "to steal",
  "גרד": "to scrape / scratch",
  "גרם": "to cause / bring about",
  "גרס": "to crush / study text",
  "גרר": "to drag / haul",
  "גרש": "to divorce / banish",
  "דבק": "to cling / adhere",
  "דבר": "to speak / converse",
  "דחה": "to override / push aside / postpone",
  "דין": "to judge / adjudicate",
  "דלג": "to skip / leap",
  "דלל": "to thin out / impoverish",
  "דלק": "to kindle / burn / ignite",
  "דמע": "to mix terumah into chullin / weep",
  "דקדק": "to scrutinize / be meticulous",
  "דרך": "to tread grapes / press / step",
  "דרש": "to expound / interpret / investigate",
  "הדס": "to adorn with myrtle",
  "הזם": "to prove witnesses conspiring (edim zomemin)",
  "הלך": "to go / walk",
  "הלל": "to praise / recite Hallel",
  "הפך": "to turn / overturn / invert",
  "הרג": "to kill / execute by sword",
  "זהר": "to warn / take heed / be careful",
  "זוב": "to flow (bodily discharge)",
  "זוז": "to move / budge / shift",
  "זכה": "to merit / acquire legal title",
  "זכר": "to remember / mention",
  "זמן": "to invite / designate / summon",
  "זמר": "to prune vines / sing",
  "זקף": "to erect / set upright / charge debt",
  "זרע": "to sow / plant seed",
  "זרק": "to throw / sprinkle blood on altar",
  "חבא": "to hide / conceal",
  "חבר": "to associate / join together",
  "חבש": "to bind / bandage wound",
  "חגג": "to celebrate festival / bring pilgrim offering",
  "חדד": "to sharpen knife",
  "חדל": "to cease / refrain",
  "חדש": "to renew / innovate",
  "חוב": "to obligate / be liable",
  "חוף": "to rub / wash hair thoroughly",
  "חזה": "to see / perceive / envision",
  "חזק": "to hold / strengthen / establish presumption (chazakah)",
  "חטא": "to sin / miss mark / cleanse",
  "חטף": "to snatch / seize quickly",
  "חיה": "to live / revive",
  "חלל": "to desecrate / profane / redeem consecrated food",
  "חלק": "to divide / apportion / disagree in opinion",
  "חמם": "to heat / warm",
  "חמץ": "to leaven / ferment",
  "חנה": "to encamp / park",
  "חנק": "to execute by strangulation / suffocate",
  "חפר": "to dig / excavate",
  "חפש": "to search / free slave",
  "חצב": "to quarry / hew stone",
  "חרב": "to be desolate / dry up",
  "חרך": "to scorch / singe",
  "חרם": "to ban / dedicate to Temple or priests",
  "חרש": "to plow soil / be silent / be deaf",
  "חשב": "to calculate / formulate intent",
  "חשך": "to become dark",
  "חשש": "to suspect / be concerned",
  "חתם": "to seal / sign document",
  "חתן": "to contract marriage alliance",
  "טבע": "to sink / drown / stamp coin",
  "טבול": "to immerse in ritual mikveh",
  "טוח": "to plaster wall / smear",
  "טול": "to cast / throw / impose",
  "טמן": "to insulate hot food / conceal",
  "טנף": "to soil / foul with dirt",
  "טעם": "to taste",
  "טען": "to load burden / plead legal claim",
  "טפח": "to clap hands / handbreadth",
  "טפל": "to attach / subordinate / smear",
  "טרד": "to bother / drive away",
  "טרח": "to exert effort / toil",
  "טרף": "to tear prey / render treifah (mortally wounded)",
  "יבש": "to dry up / wither",
  "יגע": "to toil / exert oneself",
  "ידע": "to know / recognize",
  "יהב": "to give / grant",
  "יחד": "to designate / unite / seclude",
  "יחס": "to trace lineage / pedigree",
  "ילד": "to give birth / bear child",
  "יסד": "to establish / found",
  "יסף": "to add / increase",
  "יעד": "to designate / appoint / betroth",
  "יעץ": "to advise / counsel",
  "יפה": "to be beautiful / improve quality",
  "יצא": "to go out / fulfill religious obligation",
  "יצק": "to pour oil or liquid",
  "יצר": "to fashion / create / form",
  "יקד": "to blaze / burn",
  "ירד": "to descend / go down",
  "ירה": "to instruct / shoot",
  "ירש": "to inherit / possess estate",
  "ישב": "to sit / dwell / reside",
  "ישן": "to sleep / be old/aged",
  "ישר": "to be straight / upright",
  "יתר": "to remain over / exceed",
  "כבד": "to be heavy / honor / sweep floor",
  "כבה": "to extinguish / put out flame",
  "כבס": "to launder / wash clothes",
  "כבש": "to press / pickle / subdue / ramp of altar",
  "כוה": "to burn / scorch",
  "כון": "to intend / direct heart / establish",
  "כוף": "to bend / force / compel",
  "כחד": "to deny / conceal truth",
  "כחש": "to contradict witnesses / diminish",
  "כלה": "to complete / finish / consume",
  "כלל": "to generalize / include",
  "כנס": "to bring in / gather / enter",
  "כנע": "to humble / surrender",
  "כסה": "to cover / conceal blood",
  "כפר": "to atone / wipe away guilt",
  "כפף": "to bend / bow head",
  "כפל": "to double / fold over",
  "כרך": "to wrap / bind / combine matzah",
  "כרע": "to kneel / bow knees",
  "כרת": "to cut off / excise / incur karet punishment",
  "כשל": "to stumble / fail",
  "כתב": "to write / inscribe",
  "כתת": "to beat / crush fine",
  "לבן": "to whiten / make bricks",
  "לבש": "to wear / put on garment",
  "לוה": "to borrow money / accompany",
  "לוש": "to knead dough",
  "לון": "to lodge / stay overnight",
  "לכד": "to capture / trap",
  "למד": "to learn / study / teach",
  "לקט": "to glean fallen ears / collect",
  "לקח": "to take / buy / acquire",
  "לקק": "to lap up with tongue",
  "מדד": "to measure dimensions",
  "מהר": "to hasten / hurry",
  "מול": "to circumcise",
  "מוך": "to become impoverished",
  "מור": "to exchange / substitute consecrated beast",
  "מות": "to die",
  "מזג": "to dilute wine with water",
  "מחה": "to protest / erase / wipe out",
  "מחץ": "to strike / shatter",
  "מטר": "to rain",
  "מלך": "to reign as king / consult",
  "מלח": "to salt meat and offerings",
  "מלק": "to pinch bird's neck with thumbnail",
  "מנע": "to prevent / withhold",
  "מסר": "to hand over / transmit tradition",
  "מעט": "to decrease / diminish",
  "מעל": "to commit sacrilege against holy property",
  "מצא": "to find / happen upon lost item",
  "מצה": "to squeeze out blood / drain",
  "מצר": "to delimit boundary / border",
  "מרט": "to pluck hair or feathers",
  "מרק": "to scour / rinse sacrificial pot",
  "משך": "to pull / draw / acquire by meshikhah",
  "משל": "to rule / speak parable",
  "משח": "to anoint with sacred oil / measure",
  "משש": "to feel with fingers / palpate",
  "מתח": "to stretch / extend rope",
  "מתק": "to be sweet",
  "נבא": "to prophesy",
  "נבט": "to look / sprout",
  "נבל": "to wither / unslaughtered carcass",
  "נגד": "to narrate / tell / opposite",
  "נגע": "to touch / contact / afflict with tzaraat",
  "נגף": "to strike / stub foot / plague",
  "נגש": "to approach / draw near",
  "נדב": "to donate / volunteer gift",
  "נדה": "to banish / excommunicate / menstruant",
  "נדר": "to take a vow",
  "נהג": "to conduct / practice custom / lead",
  "נוח": "to rest / be at ease",
  "נוף": "to wave offering (tenufah)",
  "נוס": "to flee / escape",
  "נוע": "to sway / shake",
  "נזק": "to damage / harm / cause loss",
  "נזר": "to separate as nazirite / abstain",
  "נחל": "to inherit estate / wadi stream",
  "נחם": "to comfort / console mourner",
  "נחת": "to descend / come down",
  "נטה": "to incline / stretch out / pitch tent",
  "נטל": "to take / lift / wash hands (netilat yadayim)",
  "נטע": "to plant sapling or tree",
  "נטף": "to drip liquid / drop",
  "נטר": "to guard field / keep watch",
  "נטש": "to abandon / forsake land in Sheviit",
  "נכה": "to strike / wound / deduct sum",
  "נכר": "to recognize / alienate",
  "נסה": "to test / try",
  "נסך": "to pour wine/water libation on altar",
  "נסע": "to journey / travel",
  "נענע": "to wave lulav in six directions",
  "נעץ": "to insert / stick knife into earth",
  "נעל": "to lock door / put on shoe",
  "נפל": "to fall / drop down",
  "נצב": "to stand upright / station",
  "נצח": "to overcome / prevail / endure",
  "נצל": "to rescue / deliver / strip",
  "נצר": "to preserve / guard",
  "נקב": "to pierce hole / bore / specify name",
  "נקה": "to be clean / innocent of guilt",
  "נקם": "to avenge",
  "נקף": "to strike / go round",
  "נשא": "to lift / carry / marry woman",
  "נשך": "to bite / take usury interest",
  "נשל": "to slip off / drop fruit",
  "נשק": "to kiss",
  "נשר": "to drop leaves or feathers / fall off",
  "נתח": "to dismember offering into limbs",
  "נתן": "to give / place / put",
  "נתק": "to tear away / snap bond",
  "סבב": "to surround / turn round altar",
  "סבל": "to bear burden / endure",
  "סגר": "to close / shut / quarantine leper",
  "סדר": "to arrange / set in order",
  "סוך": "to anoint body with oil",
  "סוף": "to come to an end / cease",
  "סור": "to turn aside / depart / remove",
  "סחט": "to squeeze out juice from grapes/olives",
  "סחר": "to trade / engage in commerce",
  "סטה": "to stray / commit adultery (sotah)",
  "סכך": "to cover / thatch sukkah roof",
  "סכן": "to be in danger / endanger life",
  "סכר": "to dam up / block flowing water",
  "סלח": "to forgive / pardon",
  "סלק": "to remove / take away / ascend",
  "סמך": "to lean hands on sacrificial animal / ordain",
  "סמן": "to provide identifying mark (siman)",
  "ספד": "to eulogize deceased at funeral",
  "ספה": "to add / sweep away",
  "ספח": "to attach / secondary scurf mark",
  "ספק": "to suffice / clap hands / be in doubt",
  "ספר": "to count days / cut hair / scribe book",
  "סקל": "to execute by stoning (sekilah)",
  "סתר": "to conceal / seclude with adulterer / demolish",
  "עבד": "to work / serve God / tan leather",
  "עבר": "to pass over / transgress / impregnate",
  "עגל": "to roll / make round",
  "עוד": "to testify / give witness testimony",
  "עוז": "to take refuge / strengthen",
  "עוף": "to fly / bird",
  "עור": "to awaken / skin animal / blind",
  "עזב": "to leave / abandon",
  "עזר": "to help / assist",
  "עטף": "to wrap oneself in tallit / faint",
  "עין": "to examine closely / inspect",
  "עכב": "to delay / impede halakhic validity",
  "עכר": "to muddy water / trouble",
  "עלה": "to ascend / go up / bring offering",
  "עלל": "to enter / glean poor grapes (olelot)",
  "עלם": "to conceal / overlook halakhah",
  "עמד": "to stand / endure / assess value",
  "עמל": "to toil / labor",
  "עמס": "to load heavy burden",
  "עמק": "to be deep",
  "עמר": "to bind sheaves of grain",
  "ענה": "to answer / testify / afflict oneself on Yom Kippur",
  "ענש": "to penalize / impose fine",
  "עסק": "to occupy oneself in study / dispute",
  "עפר": "to cover with earth or dust",
  "עצר": "to press olives / restrain / hold assembly",
  "עקב": "to follow at heel / trace",
  "עקד": "to bind limbs of sacrificial animal",
  "עקר": "to uproot tree / castrate / barren",
  "ערב": "to mix / merge eruv / guarantee debt / sunset",
  "ערה": "to uncover nakedness / pour out",
  "ערך": "to arrange / assess valuation vow",
  "ערל": "to be uncircumcised / foreskin / orlah fruit",
  "ערם": "to heap into grain stack / act shrewdly",
  "ערף": "to decapitate heifer in wadi (eglah arufah)",
  "עשה": "to do / make / perform commandment",
  "עשק": "to oppress / withhold laborer's wages",
  "עשר": "to tithe produce / separate tenth part",
  "עתד": "to prepare / be ready",
  "עתר": "to pray / entreat God abundantly",
  "פאר": "to adorn head / glorify",
  "פגע": "to encounter / strike / meet",
  "פדה": "to redeem / ransom firstborn or consecrated item",
  "פול": "to separate bean varieties",
  "פזר": "to scatter / disperse grain",
  "פטר": "to exempt from liability / discharge / release",
  "פלח": "to cleave / serve",
  "פלט": "to discharge seed / escape",
  "פלג": "to divide / dispute / half",
  "פלל": "to pray (tefillah)",
  "פנה": "to turn / clear out area / face",
  "פסד": "to cause monetary loss / ruin",
  "פסח": "to pass over / offer paschal lamb",
  "פסל": "to disqualify offering / invalidate",
  "פסק": "to decide legal ruling / cease / stipulate",
  "פעל": "to work / labor / do",
  "פצה": "to open mouth / compensate",
  "פצע": "to wound / bruise",
  "פקד": "to deposit item / appoint / count",
  "פקח": "to open eyes / supervise / sane person",
  "פקע": "to burst / split open / snap rope",
  "פרד": "to separate / divide apart",
  "פרה": "to be fruitful / bear fruit",
  "פרח": "to blossom / fly / spread affliction mark",
  "פרט": "to drop single grape (peret for the poor)",
  "פרך": "to crush ruthlessly / refute argument",
  "פרם": "to rend mourning clothes",
  "פרס": "to break bread / divide half",
  "פרע": "to repay loan / uncover woman's hair",
  "פרץ": "to breach wall / break through fence",
  "פרק": "to unload burden / dismantle / chapter",
  "פרר": "to annul vow / crumble",
  "פרש": "to separate tithe / depart / explain text",
  "פשט": "to extend hand / spread out / strip garment",
  "פשע": "to act with negligence (peshiah)",
  "פתה": "to entice / persuade / be open",
  "פתח": "to open door / engrave",
  "פתל": "to twist threads together",
  "פתת": "to crumble meal offering into pieces",
  "צבע": "to dye fabric / color",
  "צבר": "to accumulate / heap together",
  "צדד": "to turn to side",
  "צדק": "to be righteous / justify",
  "צוה": "to command / instruct",
  "צום": "to fast / abstain from food",
  "צוף": "to float on water / honeycomb",
  "צוד": "to hunt / trap animals on Shabbat",
  "צור": "to shape / form / besiege",
  "צחק": "to laugh / mock",
  "צמד": "to pair together / fasten bracelet",
  "צמח": "to sprout / grow vegetation",
  "צמק": "to dry into raisins / shrivel",
  "צנע": "to be modest / conceal secretly",
  "צעד": "to step / walk",
  "צעק": "to cry out",
  "צפה": "to gaze / anticipate / overlay with gold",
  "צפן": "to hide / treasure up / north",
  "צפף": "to compress / crowd together",
  "צרך": "to need / require / be necessary",
  "צרף": "to refine precious metal / combine",
  "צרר": "to tie up bundle / be narrow / co-wife",
  "קבל": "to receive / accept legal tradition / accept blood",
  "קבע": "to establish fixed status / rob",
  "קבר": "to bury deceased in grave",
  "קדד": "to bow head to ground",
  "קדם": "to precede in order / anticipate",
  "קדש": "to sanctify / betroth woman / consecrate to Temple",
  "קוה": "to collect rainwater into mikveh / hope",
  "קום": "to arise / stand up / confirm",
  "קטר": "to burn incense / burn fats on altar",
  "קלל": "to be light / lenient / curse",
  "קלט": "to absorb / take in / city of refuge",
  "קלף": "to peel fruit / parchment (klaf)",
  "קמץ": "to scoop fistful of flour offering",
  "קנא": "to warn suspected adulteress (kinui)",
  "קנה": "to acquire ownership / purchase / reed",
  "קנס": "to impose rabbinic penalty or biblical fine",
  "קעקע": "to tattoo skin permanently",
  "קפץ": "to leap / shut hand or mouth",
  "קפא": "to congeal / freeze liquid",
  "קצץ": "to cut off / chop down tree",
  "קצר": "to reap harvest / be short",
  "קרא": "to recite Shema / read Torah / call",
  "קרב": "to offer sacrifice / draw near",
  "קרה": "to happen / befall / nocturnal emission",
  "קרח": "to pull out hair in mourning (baldness)",
  "קרע": "to rend clothes in mourning (keriah)",
  "קרקע": "to ground / attach to soil / land",
  "קשר": "to tie knot / bind on Shabbat",
  "קשש": "to gather stubble in field",
  "קשה": "to be difficult / hard / severe",
  "ראה": "to see / inspect blemish / appear in Temple",
  "ראש": "to lead / head / beginning",
  "רבה": "to multiply / increase / expand law",
  "רבב": "to be numerous / master / rabbi",
  "רבץ": "to lie down / crouch",
  "רגז": "to tremble / be angry",
  "רגל": "to accustom / foot / pilgrim festival",
  "רגם": "to stone to death",
  "רגע": "to rest / brief moment",
  "רדף": "to pursue / chase pursuer (rodef)",
  "רדה": "to scrape baked bread from oven wall",
  "רוח": "to breathe / wind / open space",
  "רום": "to raise terumah / be exalted",
  "רוק": "to spit in chalitzah ritual",
  "רוץ": "to run quickly",
  "רחב": "to widen / be broad",
  "רחם": "to have mercy / pity",
  "רחץ": "to wash / bathe in water",
  "רחק": "to distance / keep far away",
  "רטב": "to be moist / wet",
  "ריב": "to dispute / litigate in court",
  "ריק": "to empty out container",
  "רכב": "to ride beast / graft tree branch",
  "רכש": "to acquire property",
  "רמז": "to hint / signal with eyes/hands",
  "רמה": "to deceive / cast down",
  "רמס": "to trample underfoot",
  "רמש": "to creep / crawling creature",
  "רסס": "to sprinkle droplets / crush",
  "רעה": "to graze animal / pasture / shepherd",
  "רעב": "to be hungry / suffer famine",
  "רעד": "to tremble with fear",
  "רעע": "to break / be evil",
  "רעש": "to quake / earthquake",
  "רפא": "to heal / cure illness",
  "רפה": "to be slack / let go",
  "רצה": "to desire / favor / appease altar",
  "רצח": "to murder intentionally",
  "רצע": "to pierce ear of Hebrew slave",
  "רצף": "to pave floor with stones",
  "רקק": "to spit / bake thin wafer (rakik)",
  "רקח": "to compound incense spices",
  "רקם": "to weave / embroider",
  "רקד": "to sift flour / dance",
  "רשם": "to inscribe / mark boundary",
  "רשע": "to be wicked / convict in court",
  "שאב": "to draw water in vessel (mayim she'uvin)",
  "שאל": "to ask halakhic question / borrow utensil",
  "שאר": "to leave remainder / leaven dough",
  "שבה": "to take captive in war",
  "שבח": "to praise / enhance value of estate",
  "שבר": "to break utensil / purchase grain",
  "שבת": "to rest from creative work on Sabbath",
  "שגג": "to sin unwittingly / commit accidental error",
  "שגה": "to err / wander unintentionally",
  "שדד": "to harrow field / plunder",
  "שהה": "to linger / interrupt slaughter pausing knife",
  "שוב": "to return / repent from sin",
  "שוה": "to be equal in value / worth monetary equivalent",
  "שוט": "to swim in water / row boat",
  "שום": "to appraise monetary value in court",
  "שוע": "to cry out for help",
  "שוף": "to smooth / rub surface",
  "שחט": "to slaughter animal according to kosher law",
  "שחק": "to grind fine / pulverize",
  "שחר": "to seek early / morning dawn",
  "שחת": "to corrupt / destroy offering",
  "שטח": "to spread out fruit/grain in sun",
  "שטף": "to rinse thoroughly with water",
  "שטר": "to write contract / legal document",
  "שיח": "to converse / discuss halakhah",
  "שיר": "to leave over remaining portion / sing",
  "שית": "to place / underground cavities under altar",
  "שכב": "to lie down / sleep / marital relations",
  "שכח": "to forget sheaf in field (shikh'chah)",
  "שכל": "to comprehend / bereave of children",
  "שכם": "to rise early in morning",
  "שכן": "to dwell / reside as neighbor",
  "שכר": "to hire worker / receive reward / intoxicate",
  "שלב": "to connect ladder rungs",
  "שלח": "to send agent or divorce bill",
  "שלט": "to exercise authority / govern",
  "שליך": "to cast away / throw out",
  "שלל": "to sew temporary baste / plunder",
  "שלם": "to pay monetary compensation / complete / be whole",
  "שלף": "to draw out sword / pluck hair",
  "שלש": "to divide into thirds / deposit with third party",
  "שמד": "to destroy / force apostasy",
  "שמט": "to release loan or drop fruit in Sabbatical year",
  "שמח": "to rejoice on pilgrimage festival",
  "שמם": "to become desolate / barren",
  "שמן": "to grow fat / produce olive oil",
  "שמע": "to hear / perceive / receive oral tradition",
  "שמר": "to guard property / watch bailee / observe Shabbat",
  "שמש": "to use utensil / serve as attendant",
  "שנא": "to hate / detest",
  "שנה": "to repeat / teach Mishna / change status",
  "שסע": "to split cleft hooves / tear bird offering",
  "שעה": "to turn attention / hour",
  "שער": "to estimate measure / gate / hair blemish",
  "שפה": "to smooth / rim of vessel",
  "שפך": "to spill blood or water",
  "שפל": "to be low / humble oneself",
  "שפט": "to judge / administer justice",
  "שפשף": "to rub / scrub pot clean",
  "שפר": "to be pleasing / improve / sound shofar",
  "שקע": "to sink / submerge",
  "שקף": "to look down / lintel beam",
  "שקל": "to weigh coins / pay shekel to Temple",
  "שקץ": "to abominate / unclean creature",
  "שקה": "to irrigate field / give drink to sotah",
  "שקט": "to be quiet / peaceful",
  "שרב": "to parch / dry up in heat",
  "שרט": "to scratch skin in mourning laceration",
  "שרך": "to twist shoe strap",
  "שרע": "to have stretched or deformed limb",
  "שרף": "to burn with fire (sin offering/chametz)",
  "שרץ": "to teem with creeping rodents/insects (sheretz)",
  "שרק": "to whistle / comb wool",
  "שרר": "to exercise mastery / navel",
  "שרת": "to minister in Temple holy service",
  "שתה": "to drink liquid",
  "שתל": "to plant sapling in soil",
  "שתק": "to remain silent / quiet",
  "שתף": "to enter legal partnership / share courtyard",
  "תאר": "to outline shape / form",
  "תאב": "to long for / crave",
  "תגר": "to trade as merchant",
  "תלה": "to suspend doubtful status / hang on gallows",
  "תלל": "to heap into mound",
  "תלם": "to plow furrow in field",
  "תמם": "to be complete / unblemished offering",
  "תמה": "to marvel / wonder in astonishment",
  "תמך": "to support / uphold",
  "תמר": "to rise straight as palm tree",
  "תנה": "to stipulate legal condition (tenai)",
  "תעב": "to abominate idol",
  "תעה": "to stray from path / err",
  "תער": "to shave with razor / empty out",
  "תפש": "to seize property / catch red-handed",
  "תפר": "to sew stitches with thread",
  "תקוע": "to blow shofar blast / strike covenant",
  "תקן": "to establish rabbinic ordinance / fix / tithe",
  "תקף": "to overpower / seize by force",
  "תרם": "to separate priestly terumah offering",
  "תרע": "to breach wall / door",
  "תשש": "to weaken / diminish in strength"
};
