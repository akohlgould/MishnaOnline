import urllib.request
import json
import re

def strip_nikkud(text):
    return re.sub(r'[\u0591-\u05BD\u05BF-\u05C7]', '', text)

def clean_letters(text):
    text = strip_nikkud(text)
    return re.sub(r'[^א-ת]', '', text)

def separate_punct(token):
    match_end = re.search(r'([.:,;”"\'\-)\]]+)$', token)
    punct = match_end.group(1) if match_end else ''
    word = token[:-len(punct)] if punct else token
    # Also strip leading parens if any
    match_start = re.match(r'^([(\["\']+)', word)
    lead_punct = match_start.group(1) if match_start else ''
    if lead_punct:
        word = word[len(lead_punct):]
    return word, lead_punct + punct

# Master dictionary of known Mishna words
LEXICON = {
    # Mishna Berakhot 1:1
    'מאימתי': {
        'translation': 'From when',
        'shoresh': 'מ - ת - י',
        'transliteration': 'me-ei-ma-tai',
        'grammar': {
            'pos': 'Interrogative Adverb',
            'prefixes': [{'hePrefix': 'מֵ־', 'name': 'Preposition', 'meaning': 'from'}],
            'notes': 'Compound of מִן (from) + אֵימָתַי (when). Opens halakhic inquiry on time windows.'
        }
    },
    'קורין': {
        'translation': 'do they recite',
        'shoresh': 'ק - ר - א',
        'transliteration': 'ko-rin',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Pa'al (Qal)",
            'tense': 'Present / Participle (Beinoni)',
            'gender': 'M',
            'number': 'Plural',
            'notes': 'Mishnaic plural suffix ־ִין (Aramaic influence) equivalent to Biblical ־ִים.'
        }
    },
    'את': {
        'translation': '[direct object]',
        'shoresh': '—',
        'transliteration': 'et',
        'grammar': {
            'pos': 'Particle / Preposition',
            'notes': 'Definite direct object marker in Hebrew syntax.'
        }
    },
    'שמע': {
        'translation': 'the Shema',
        'shoresh': 'שׁ - מ - ע',
        'transliteration': 'she-ma',
        'grammar': {
            'pos': 'Proper Noun / Imperative',
            'shoreshMeaning': 'to hear / heed',
            'notes': 'Opening word of Deut. 6:4, central affirmation of Jewish faith.'
        }
    },
    'בערבית': {
        'translation': 'in the evening',
        'shoresh': 'ע - ר - ב',
        'transliteration': 'be-ar-vit',
        'grammar': {
            'pos': 'Preposition + Noun',
            'prefixes': [{'hePrefix': 'בְּ־', 'name': 'Preposition', 'meaning': 'in / during'}],
            'notes': 'Refers to nighttime or the evening prayer time.'
        }
    },
    'משעה': {
        'translation': 'From the time that',
        'shoresh': 'שׁ - ע - ה',
        'transliteration': 'mi-sha-ah',
        'grammar': {
            'pos': 'Preposition + Noun',
            'prefixes': [{'hePrefix': 'מִ־', 'name': 'Preposition', 'meaning': 'from'}],
            'gender': 'F',
            'number': 'Singular'
        }
    },
    'שהכהנים': {
        'translation': 'that the priests',
        'shoresh': 'כ - ה - ן',
        'transliteration': 'she-ha-ko-ha-nim',
        'grammar': {
            'pos': 'Noun (Plural)',
            'prefixes': [
                {'hePrefix': 'שֶׁ־', 'name': 'Relative Particle', 'meaning': 'that / when'},
                {'hePrefix': 'הַ־', 'name': 'Definite Article', 'meaning': 'the'}
            ],
            'gender': 'M',
            'number': 'Plural',
            'suffixes': [{'heSuffix': '־ִים', 'name': 'Plural Ending', 'meaning': 'masc. plural'}]
        }
    },
    'נכנסים': {
        'translation': 'enter',
        'shoresh': 'כ - נ - ס',
        'transliteration': 'nich-na-sim',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Nif'al",
            'tense': 'Present / Participle (Beinoni)',
            'gender': 'M',
            'number': 'Plural',
            'notes': 'Refers to priests who immersed for purification waiting until stars emerge to enter and eat.'
        }
    },
    'לאכול': {
        'translation': 'to eat',
        'shoresh': 'א - כ - ל',
        'transliteration': 'le-e-chol',
        'grammar': {
            'pos': 'Verb (Infinitive)',
            'binyan': "Pa'al (Qal)",
            'tense': 'Infinitive Construct',
            'prefixes': [{'hePrefix': 'לְ־', 'name': 'Infinitive Marker', 'meaning': 'to'}]
        }
    },
    'בתרומתן': {
        'translation': 'of their heave-offering',
        'shoresh': 'ר - ו - ם',
        'transliteration': 'bit-ru-ma-tan',
        'grammar': {
            'pos': 'Preposition + Noun + Suffix',
            'prefixes': [{'hePrefix': 'בִּ־', 'name': 'Preposition', 'meaning': 'of / in'}],
            'suffixes': [{'heSuffix': '־ָן', 'name': 'Pronominal Suffix', 'meaning': 'their (f.pl.)'}],
            'notes': 'Terumah (holy produce given to priests) requires ritual purity to consume.'
        }
    },
    'עד': {
        'translation': 'until',
        'shoresh': 'ע - ד - ה',
        'transliteration': 'ad',
        'grammar': {'pos': 'Preposition', 'meaning': 'until / as far as'}
    },
    'סוף': {
        'translation': 'the end of',
        'shoresh': 'ס - ו - ף',
        'transliteration': 'sof',
        'grammar': {'pos': 'Noun (Construct)', 'gender': 'M', 'number': 'Singular'}
    },
    'האשמורה': {
        'translation': 'the watch',
        'shoresh': 'שׁ - מ - ר',
        'transliteration': 'ha-ash-mu-rah',
        'grammar': {
            'pos': 'Noun',
            'prefixes': [{'hePrefix': 'הָ־', 'name': 'Definite Article', 'meaning': 'the'}],
            'gender': 'F',
            'number': 'Singular',
            'notes': 'The night is divided into three watches (ashmurot).'
        }
    },
    'הראשונה': {
        'translation': 'the first',
        'shoresh': 'ר - א - שׁ',
        'transliteration': 'ha-ri-sho-nah',
        'grammar': {
            'pos': 'Ordinal Adjective',
            'prefixes': [{'hePrefix': 'הָ־', 'name': 'Definite Article', 'meaning': 'the'}],
            'gender': 'F',
            'number': 'Singular'
        }
    },
    'דברי': {
        'translation': 'these are the words of',
        'shoresh': 'ד - ב - ר',
        'transliteration': 'div-rei',
        'grammar': {'pos': 'Noun (Plural Construct)', 'gender': 'M', 'number': 'Plural'}
    },
    'רבי': {
        'translation': 'Rabbi',
        'shoresh': 'ר - ב - ב',
        'transliteration': 'Rab-bi',
        'grammar': {'pos': 'Title / Honorific', 'meaning': 'my master / teacher'}
    },
    'אליעזר': {
        'translation': 'Eliezer',
        'shoresh': '—',
        'transliteration': 'E-li-e-zer',
        'grammar': {'pos': 'Proper Name', 'notes': 'Rabbi Eliezer ben Hyrcanus, leading 2nd-generation Tanna.'}
    },
    'וחכמים': {
        'translation': 'And the Sages',
        'shoresh': 'ח - כ - ם',
        'transliteration': 'va-cha-cha-mim',
        'grammar': {
            'pos': 'Noun (Plural)',
            'prefixes': [{'hePrefix': 'וַ־', 'name': 'Conjunction', 'meaning': 'and'}],
            'gender': 'M',
            'number': 'Plural',
            'notes': 'Refers to the collective majority opinion of the Rabbinic court.'
        }
    },
    'אומרים': {
        'translation': 'say',
        'shoresh': 'א - מ - ר',
        'transliteration': 'om-rim',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Pa'al (Qal)",
            'tense': 'Present / Participle (Beinoni)',
            'gender': 'M',
            'number': 'Plural'
        }
    },
    'חצות': {
        'translation': 'midnight',
        'shoresh': 'ח - צ - ה',
        'transliteration': 'cha-tzot',
        'grammar': {'pos': 'Noun', 'notes': 'Halakhic midnight (the midpoint between sunset and sunrise).'}
    },
    'רבן': {
        'translation': 'Rabban',
        'shoresh': 'ר - ב - ב',
        'transliteration': 'Rab-ban',
        'grammar': {'pos': 'Title / Honorific', 'notes': 'Title reserved for the Nasi (head of the Sanhedrin).'}
    },
    'גמליאל': {
        'translation': 'Gamliel',
        'shoresh': '—',
        'transliteration': 'Gam-li-el',
        'grammar': {'pos': 'Proper Name', 'notes': 'Rabban Gamliel of Yavne, Nasi of the Sanhedrin.'}
    },
    'אומר': {
        'translation': 'says',
        'shoresh': 'א - מ - ר',
        'transliteration': 'o-mer',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Pa'al (Qal)",
            'tense': 'Present / Participle (Beinoni)',
            'gender': 'M',
            'number': 'Singular'
        }
    },
    'שיעלה': {
        'translation': 'that rises',
        'shoresh': 'ע - ל - ה',
        'transliteration': 'she-ya-a-leh',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Pa'al (Qal)",
            'tense': 'Future / Subjunctive (Yiqtol)',
            'prefixes': [{'hePrefix': 'שֶׁ־', 'name': 'Relative Particle', 'meaning': 'that / until that'}],
            'gender': 'M',
            'number': 'Singular'
        }
    },
    'עמוד': {
        'translation': 'the pillar of',
        'shoresh': 'ע - מ - ד',
        'transliteration': 'am-mud',
        'grammar': {'pos': 'Noun (Construct)', 'gender': 'M', 'number': 'Singular'}
    },
    'השחר': {
        'translation': 'dawn',
        'shoresh': 'שׁ - ח - ר',
        'transliteration': 'ha-sha-char',
        'grammar': {
            'pos': 'Noun',
            'prefixes': [{'hePrefix': 'הַ־', 'name': 'Definite Article', 'meaning': 'the'}],
            'notes': 'Ammud haShachar: first light of dawn ascending in the eastern sky.'
        }
    },
    'מעשה': {
        'translation': 'An incident occurred',
        'shoresh': 'ע - שׂ - ה',
        'transliteration': 'ma-a-seh',
        'grammar': {
            'pos': 'Noun / Narrative Marker',
            'notes': 'Classic Mishnaic formula introducing a real-life precedent.'
        }
    },
    'שבאו': {
        'translation': 'that came',
        'shoresh': 'ב - ו - א',
        'transliteration': 'she-ba-u',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Pa'al (Qal)",
            'tense': 'Past (Qatal)',
            'prefixes': [{'hePrefix': 'שֶׁ־', 'name': 'Relative Particle', 'meaning': 'that'}],
            'number': 'Plural',
            'person': '3rd'
        }
    },
    'בניו': {
        'translation': 'his sons',
        'shoresh': 'ב - נ - ה',
        'transliteration': 'ba-nav',
        'grammar': {
            'pos': 'Noun + Suffix',
            'suffixes': [{'heSuffix': '־ָיו', 'name': 'Pronominal Suffix', 'meaning': 'his'}],
            'gender': 'M',
            'number': 'Plural'
        }
    },
    'מבית': {
        'translation': 'from the house of',
        'shoresh': 'ב - י - ת',
        'transliteration': 'mi-beit',
        'grammar': {
            'pos': 'Preposition + Noun Construct',
            'prefixes': [{'hePrefix': 'מִ־', 'name': 'Preposition', 'meaning': 'from'}]
        }
    },
    'המשתה': {
        'translation': 'the wedding feast',
        'shoresh': 'שׁ - ת - ה',
        'transliteration': 'ha-mish-teh',
        'grammar': {
            'pos': 'Noun',
            'prefixes': [{'hePrefix': 'הַ־', 'name': 'Definite Article', 'meaning': 'the'}],
            'notes': 'Literally a drinking feast / banquet, specifically a wedding celebration.'
        }
    },
    'אמרו': {
        'translation': 'they said',
        'shoresh': 'א - מ - ר',
        'transliteration': 'am-ru',
        'grammar': {'pos': 'Verb', 'binyan': "Pa'al", 'tense': 'Past', 'person': '3rd', 'number': 'Plural'}
    },
    'לו': {
        'translation': 'to him',
        'shoresh': '—',
        'transliteration': 'lo',
        'grammar': {
            'pos': 'Preposition + Pronoun',
            'prefixes': [{'hePrefix': 'לְ־', 'name': 'Preposition', 'meaning': 'to'}],
            'suffixes': [{'heSuffix': '־וֹ', 'name': 'Pronoun', 'meaning': 'him'}]
        }
    },
    'לא': {
        'translation': 'not',
        'shoresh': '—',
        'transliteration': 'lo',
        'grammar': {'pos': 'Negative Particle', 'meaning': 'not / did not'}
    },
    'קרינו': {
        'translation': 'we recited',
        'shoresh': 'ק - ר - א',
        'transliteration': 'ka-ri-nu',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Pa'al (Qal)",
            'tense': 'Past (Qatal)',
            'person': '1st',
            'number': 'Plural',
            'suffixes': [{'heSuffix': '־נוּ', 'name': 'Subject Suffix', 'meaning': 'we'}]
        }
    },
    'אמר': {
        'translation': 'He said',
        'shoresh': 'א - מ - ר',
        'transliteration': 'a-mar',
        'grammar': {'pos': 'Verb', 'binyan': "Pa'al", 'tense': 'Past', 'person': '3rd', 'gender': 'M', 'number': 'Singular'}
    },
    'להם': {
        'translation': 'to them',
        'shoresh': '—',
        'transliteration': 'la-hem',
        'grammar': {
            'pos': 'Preposition + Pronoun',
            'prefixes': [{'hePrefix': 'לְ־', 'name': 'Preposition', 'meaning': 'to'}],
            'suffixes': [{'heSuffix': '־הֶם', 'name': 'Pronoun', 'meaning': 'them (m.)'}]
        }
    },
    'אם': {
        'translation': 'If',
        'shoresh': '—',
        'transliteration': 'im',
        'grammar': {'pos': 'Conditional Particle', 'meaning': 'if'}
    },
    'עלה': {
        'translation': 'has risen',
        'shoresh': 'ע - ל - ה',
        'transliteration': 'a-lah',
        'grammar': {'pos': 'Verb', 'binyan': "Pa'al", 'tense': 'Past', 'person': '3rd', 'gender': 'M', 'number': 'Singular'}
    },
    'חייבין': {
        'translation': 'obligated',
        'shoresh': 'ח - י - ב',
        'transliteration': 'chay-ya-vin',
        'grammar': {
            'pos': 'Adjective / Participle',
            'binyan': "Pi'el / Pa'al",
            'gender': 'M',
            'number': 'Plural',
            'suffixes': [{'heSuffix': '־ִין', 'name': 'Plural Suffix', 'meaning': 'masc. plural'}]
        }
    },
    'אתם': {
        'translation': 'you (pl.)',
        'shoresh': '—',
        'transliteration': 'a-tem',
        'grammar': {'pos': 'Personal Pronoun', 'person': '2nd', 'gender': 'M', 'number': 'Plural'}
    },
    'לקרות': {
        'translation': 'to recite',
        'shoresh': 'ק - ר - א',
        'transliteration': 'lik-rot',
        'grammar': {
            'pos': 'Verb (Infinitive)',
            'binyan': "Pa'al (Qal)",
            'tense': 'Infinitive Construct',
            'prefixes': [{'hePrefix': 'לִ־', 'name': 'Infinitive Prefix', 'meaning': 'to'}]
        }
    },
    'ולא': {
        'translation': 'and not',
        'shoresh': '—',
        'transliteration': 've-lo',
        'grammar': {
            'pos': 'Conjunction + Negative',
            'prefixes': [{'hePrefix': 'וְ־', 'name': 'Conjunction', 'meaning': 'and'}]
        }
    },
    'זו': {
        'translation': 'this alone',
        'shoresh': '—',
        'transliteration': 'zo',
        'grammar': {'pos': 'Demonstrative Pronoun', 'gender': 'F', 'number': 'Singular'}
    },
    'בלבד': {
        'translation': 'only',
        'shoresh': 'ב - ד - ד',
        'transliteration': 'bil-vad',
        'grammar': {
            'pos': 'Adverb',
            'prefixes': [{'hePrefix': 'בִּ־', 'name': 'Preposition', 'meaning': 'in'}],
            'notes': 'Meaning alone / exclusively.'
        }
    },
    'אלא': {
        'translation': 'rather',
        'shoresh': '—',
        'transliteration': 'el-la',
        'grammar': {'pos': 'Adversative Conjunction', 'notes': 'Contraction of אִם + לֹא (if not / rather).'}
    },
    'כל': {
        'translation': 'all',
        'shoresh': 'כ - ל - ל',
        'transliteration': 'kol',
        'grammar': {'pos': 'Quantifier / Noun', 'meaning': 'every / all / whatever'}
    },
    'מה': {
        'translation': 'that',
        'shoresh': '—',
        'transliteration': 'mah',
        'grammar': {'pos': 'Interrogative / Relative Pronoun', 'meaning': 'whatever / what'}
    },
    'שאמרו': {
        'translation': 'that the Sages said',
        'shoresh': 'א - מ - ר',
        'transliteration': 'she-am-ru',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Pa'al",
            'tense': 'Past',
            'prefixes': [{'hePrefix': 'שֶׁ־', 'name': 'Relative Particle', 'meaning': 'that'}],
            'number': 'Plural'
        }
    },
    'מצותן': {
        'translation': 'their obligation is',
        'shoresh': 'צ - ו - ה',
        'transliteration': 'mitz-va-tan',
        'grammar': {
            'pos': 'Noun + Suffix',
            'suffixes': [{'heSuffix': '־ָן', 'name': 'Pronominal Suffix', 'meaning': 'their (f.pl.)'}],
            'notes': 'Refers to the performance window of these mitzvot.'
        }
    },
    'הקטר': {
        'translation': 'the burning of',
        'shoresh': 'ק - ט - ר',
        'transliteration': 'hek-ter',
        'grammar': {
            'pos': 'Noun (Construct)',
            'binyan': "Hif'il Action Noun",
            'notes': 'Placing sacrificial fats and limbs onto the altar fire.'
        }
    },
    'חלבים': {
        'translation': 'sacrificial fats',
        'shoresh': 'ח - ל - ב',
        'transliteration': 'cha-la-vim',
        'grammar': {'pos': 'Noun (Plural)', 'gender': 'M', 'number': 'Plural'}
    },
    'ואברים': {
        'translation': 'and limbs',
        'shoresh': 'א - ב - ר',
        'transliteration': 've-e-va-rim',
        'grammar': {
            'pos': 'Noun (Plural)',
            'prefixes': [{'hePrefix': 'וְ־', 'name': 'Conjunction', 'meaning': 'and'}],
            'gender': 'M',
            'number': 'Plural'
        }
    },
    'וכל': {
        'translation': 'and all',
        'shoresh': 'כ - ל - ל',
        'transliteration': 've-chol',
        'grammar': {
            'pos': 'Quantifier',
            'prefixes': [{'hePrefix': 'וְ־', 'name': 'Conjunction', 'meaning': 'and'}]
        }
    },
    'הנאכלים': {
        'translation': 'those sacrifices eaten',
        'shoresh': 'א - כ - ל',
        'transliteration': 'ha-ne-e-cha-lim',
        'grammar': {
            'pos': 'Verb / Participle',
            'binyan': "Nif'al",
            'tense': 'Present (Beinoni)',
            'prefixes': [{'hePrefix': 'הַ־', 'name': 'Relative Article', 'meaning': 'that which are'}],
            'gender': 'M',
            'number': 'Plural'
        }
    },
    'ליום': {
        'translation': 'for a day',
        'shoresh': 'י - ו - ם',
        'transliteration': 'le-yom',
        'grammar': {
            'pos': 'Preposition + Noun Construct',
            'prefixes': [{'hePrefix': 'לְ־', 'name': 'Preposition', 'meaning': 'for'}]
        }
    },
    'אחד': {
        'translation': 'one',
        'shoresh': 'א - ח - ד',
        'transliteration': 'e-chad',
        'grammar': {'pos': 'Cardinal Number', 'gender': 'M'}
    },
    'למה': {
        'translation': 'why',
        'shoresh': 'מ - ה',
        'transliteration': 'la-mah',
        'grammar': {
            'pos': 'Interrogative',
            'prefixes': [{'hePrefix': 'לָ־', 'name': 'Preposition', 'meaning': 'for what / why'}]
        }
    },
    'כדי': {
        'translation': 'in order',
        'shoresh': 'ד - י',
        'transliteration': 'ke-dei',
        'grammar': {
            'pos': 'Conjunction',
            'prefixes': [{'hePrefix': 'כְּ־', 'name': 'Preposition', 'meaning': 'as / according to'}],
            'notes': 'Expresses purpose: in order to.'
        }
    },
    'להרחיק': {
        'translation': 'to distance',
        'shoresh': 'ר - ח - ק',
        'transliteration': 'le-har-chik',
        'grammar': {
            'pos': 'Verb (Infinitive)',
            'binyan': "Hif'il",
            'tense': 'Infinitive Construct',
            'prefixes': [{'hePrefix': 'לְ־', 'name': 'Infinitive Prefix', 'meaning': 'to'}],
            'notes': 'Creating a protective fence around Torah law (syag).'
        }
    },
    'האדם': {
        'translation': 'a person',
        'shoresh': 'א - ד - ם',
        'transliteration': 'ha-a-dam',
        'grammar': {
            'pos': 'Noun',
            'prefixes': [{'hePrefix': 'הָ־', 'name': 'Definite Article', 'meaning': 'the / a'}]
        }
    },
    'מן': {
        'translation': 'from',
        'shoresh': '—',
        'transliteration': 'min',
        'grammar': {'pos': 'Preposition', 'meaning': 'from / away from'}
    },
    'העברה': {
        'translation': 'transgression',
        'shoresh': 'ע - ב - ר',
        'transliteration': 'ha-a-vei-rah',
        'grammar': {
            'pos': 'Noun',
            'prefixes': [{'hePrefix': 'הָ־', 'name': 'Definite Article', 'meaning': 'the'}],
            'gender': 'F',
            'number': 'Singular'
        }
    },

    # Berakhot 1:2 additions
    'בשחרית': {
        'translation': 'in the morning',
        'shoresh': 'שׁ - ח - ר',
        'transliteration': 'be-sha-cha-rit',
        'grammar': {
            'pos': 'Preposition + Noun',
            'prefixes': [{'hePrefix': 'בְּ־', 'name': 'Preposition', 'meaning': 'in / during'}]
        }
    },
    'משיכיר': {
        'translation': 'From when one can distinguish',
        'shoresh': 'נ - כ - ר',
        'transliteration': 'mi-she-yak-kir',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Hif'il",
            'tense': 'Future / Subjunctive',
            'prefixes': [
                {'hePrefix': 'מִ־', 'name': 'Preposition', 'meaning': 'from'},
                {'hePrefix': 'שֶׁ־', 'name': 'Relative Particle', 'meaning': 'when'}
            ]
        }
    },
    'בין': {
        'translation': 'between',
        'shoresh': 'ב - י - ן',
        'transliteration': 'bein',
        'grammar': {'pos': 'Preposition', 'meaning': 'between'}
    },
    'תכלת': {
        'translation': 'sky-blue (tekhelet)',
        'shoresh': 'ת - כ - ל',
        'transliteration': 'tche-let',
        'grammar': {'pos': 'Noun', 'notes': 'The ritual biblical blue dye used for tzitzit.'}
    },
    'ללבן': {
        'translation': 'and white',
        'shoresh': 'ל - ב - ן',
        'transliteration': 'le-la-van',
        'grammar': {
            'pos': 'Adjective',
            'prefixes': [{'hePrefix': 'לְ־', 'name': 'Preposition', 'meaning': 'to / and'}]
        }
    },
    'לכרתי': {
        'translation': 'and leek-green',
        'shoresh': 'כ - ר - ת',
        'transliteration': 'le-khar-ti',
        'grammar': {
            'pos': 'Noun / Adjective',
            'prefixes': [{'hePrefix': 'לְ־', 'name': 'Preposition', 'meaning': 'to / and'}],
            'notes': 'A greenish hue resembling the color of a leek.'
        }
    },
    'וגומרה': {
        'translation': 'and finishes it',
        'shoresh': 'ג - מ - ר',
        'transliteration': 've-gom-rah',
        'grammar': {
            'pos': 'Verb + Suffix',
            'binyan': "Pa'al (Qal)",
            'tense': 'Present (Beinoni)',
            'prefixes': [{'hePrefix': 'וְ־', 'name': 'Conjunction', 'meaning': 'and'}],
            'suffixes': [{'heSuffix': '־ָהּ', 'name': 'Object Suffix', 'meaning': 'it (f.)'}]
        }
    },
    'הנץ': {
        'translation': 'the sparkling of',
        'shoresh': 'נ - צ - ץ',
        'transliteration': 'he-netz',
        'grammar': {'pos': 'Noun (Construct)', 'notes': 'Hanetz HaChamah: the initial rays of sunrise.'}
    },
    'החמה': {
        'translation': 'the sun',
        'shoresh': 'ח - מ - ם',
        'transliteration': 'ha-cha-mah',
        'grammar': {
            'pos': 'Noun',
            'prefixes': [{'hePrefix': 'הַ־', 'name': 'Definite Article', 'meaning': 'the'}]
        }
    },
    'יהושע': {
        'translation': 'Yehoshua',
        'shoresh': '—',
        'transliteration': 'Ye-ho-shu-a',
        'grammar': {'pos': 'Proper Name', 'notes': 'Rabbi Yehoshua ben Chananya, leading Tanna.'}
    },
    'שלש': {
        'translation': 'three',
        'shoresh': 'שׁ - ל - שׁ',
        'transliteration': 'sha-losh',
        'grammar': {'pos': 'Numeral', 'gender': 'F'}
    },
    'שעות': {
        'translation': 'hours',
        'shoresh': 'שׁ - ע - ה',
        'transliteration': 'sha-ot',
        'grammar': {'pos': 'Noun (Plural)', 'gender': 'F', 'number': 'Plural'}
    },
    'שכן': {
        'translation': 'for such is',
        'shoresh': 'כ - ו - ן',
        'transliteration': 'she-ken',
        'grammar': {
            'pos': 'Conjunction',
            'prefixes': [{'hePrefix': 'שֶׁ־', 'name': 'Relative Particle', 'meaning': 'that / for'}]
        }
    },
    'דרך': {
        'translation': 'the custom of',
        'shoresh': 'ד - ר - ך',
        'transliteration': 'de-rech',
        'grammar': {'pos': 'Noun (Construct)', 'meaning': 'way / practice / custom'}
    },
    'בני': {
        'translation': 'the sons of',
        'shoresh': 'ב - נ - ה',
        'transliteration': 'be-nei',
        'grammar': {'pos': 'Noun (Construct Plural)', 'meaning': 'children / sons of'}
    },
    'מלכים': {
        'translation': 'kings',
        'shoresh': 'מ - ל - ך',
        'transliteration': 'me-la-chim',
        'grammar': {'pos': 'Noun (Plural)', 'gender': 'M', 'number': 'Plural'}
    },
    'לעמוד': {
        'translation': 'to arise',
        'shoresh': 'ע - מ - ד',
        'transliteration': 'la-a-mod',
        'grammar': {
            'pos': 'Verb (Infinitive)',
            'binyan': "Pa'al (Qal)",
            'prefixes': [{'hePrefix': 'לַ־', 'name': 'Infinitive Prefix', 'meaning': 'to'}]
        }
    },
    'בשלוש': {
        'translation': 'at three',
        'shoresh': 'שׁ - ל - שׁ',
        'transliteration': 'be-sha-losh',
        'grammar': {
            'pos': 'Numeral',
            'prefixes': [{'hePrefix': 'בְּ־', 'name': 'Preposition', 'meaning': 'at'}]
        }
    },
    'הקורא': {
        'translation': 'One who recites',
        'shoresh': 'ק - ר - א',
        'transliteration': 'ha-ko-rei',
        'grammar': {
            'pos': 'Verb / Participle',
            'binyan': "Pa'al",
            'tense': 'Present (Beinoni)',
            'prefixes': [{'hePrefix': 'הַ־', 'name': 'Relative Article', 'meaning': 'the one who'}]
        }
    },
    'מכאן': {
        'translation': 'from here',
        'shoresh': 'כ - א - ן',
        'transliteration': 'mi-kan',
        'grammar': {
            'pos': 'Adverb',
            'prefixes': [{'hePrefix': 'מִ־', 'name': 'Preposition', 'meaning': 'from'}]
        }
    },
    'ואילך': {
        'translation': 'and forward / onward',
        'shoresh': 'ה - ל - ך',
        'transliteration': 've-ei-lach',
        'grammar': {
            'pos': 'Adverb',
            'prefixes': [{'hePrefix': 'וְ־', 'name': 'Conjunction', 'meaning': 'and'}]
        }
    },
    'הפסיד': {
        'translation': 'does not lose out',
        'shoresh': 'פ - ס - ד',
        'transliteration': 'hif-sid',
        'grammar': {'pos': 'Verb', 'binyan': "Hif'il", 'tense': 'Past'}
    },
    'כאדם': {
        'translation': 'like a person',
        'shoresh': 'א - ד - ם',
        'transliteration': 'ke-a-dam',
        'grammar': {
            'pos': 'Preposition + Noun',
            'prefixes': [{'hePrefix': 'כְּ־', 'name': 'Preposition', 'meaning': 'as / like'}]
        }
    },
    'בתורה': {
        'translation': 'in the Torah',
        'shoresh': 'י - ר - ה',
        'transliteration': 'ba-To-rah',
        'grammar': {
            'pos': 'Noun',
            'prefixes': [{'hePrefix': 'בַּ־', 'name': 'Preposition + Article', 'meaning': 'in the'}]
        }
    },

    # Berakhot 1:3 additions
    'בית': {
        'translation': 'The School of',
        'shoresh': 'ב - י - ת',
        'transliteration': 'Beit',
        'grammar': {'pos': 'Noun (Construct)', 'meaning': 'House / Academy of'}
    },
    'שמאי': {
        'translation': 'Shammai',
        'shoresh': '—',
        'transliteration': 'Sham-mai',
        'grammar': {'pos': 'Proper Name', 'notes': 'The Academy of Shammai.'}
    },
    'בערב': {
        'translation': 'In the evening',
        'shoresh': 'ע - ר - ב',
        'transliteration': 'ba-e-rev',
        'grammar': {
            'pos': 'Preposition + Noun',
            'prefixes': [{'hePrefix': 'בָּ־', 'name': 'Preposition + Article', 'meaning': 'in the'}]
        }
    },
    'אדם': {
        'translation': 'person',
        'shoresh': 'א - ד - ם',
        'transliteration': 'a-dam',
        'grammar': {'pos': 'Noun', 'meaning': 'man / person / everyone'}
    },
    'יטו': {
        'translation': 'should recline',
        'shoresh': 'נ - ט - ה',
        'transliteration': 'yat-tu',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Hif'il",
            'tense': 'Future / Jussive',
            'number': 'Plural',
            'notes': 'Literally to incline or lean sideways on a couch.'
        }
    },
    'ויקראו': {
        'translation': 'and recite',
        'shoresh': 'ק - ר - א',
        'transliteration': 've-yik-re-u',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Pa'al",
            'tense': 'Future',
            'prefixes': [{'hePrefix': 'וְ־', 'name': 'Conjunction', 'meaning': 'and'}],
            'number': 'Plural'
        }
    },
    'ובבקר': {
        'translation': 'and in the morning',
        'shoresh': 'ב - ק - ר',
        'transliteration': 'u-va-bo-ker',
        'grammar': {
            'pos': 'Preposition + Noun',
            'prefixes': [
                {'hePrefix': 'וּ־', 'name': 'Conjunction', 'meaning': 'and'},
                {'hePrefix': 'בַ־', 'name': 'Preposition + Article', 'meaning': 'in the'}
            ]
        }
    },
    'יעמדו': {
        'translation': 'should stand',
        'shoresh': 'ע - מ - ד',
        'transliteration': 'ya-am-du',
        'grammar': {'pos': 'Verb', 'binyan': "Pa'al", 'tense': 'Future / Jussive', 'number': 'Plural'}
    },
    'שנאמר': {
        'translation': 'as it is stated',
        'shoresh': 'א - מ - ר',
        'transliteration': 'she-ne-e-mar',
        'grammar': {
            'pos': 'Verb Formula',
            'binyan': "Nif'al",
            'tense': 'Past',
            'prefixes': [{'hePrefix': 'שֶׁ־', 'name': 'Relative Particle', 'meaning': 'as / that'}],
            'notes': 'Standard rabbinic formula introducing a biblical prooftext.'
        }
    },
    'דברים': {
        'translation': 'Deuteronomy',
        'shoresh': 'ד - ב - ר',
        'transliteration': 'De-va-rim',
        'grammar': {'pos': 'Proper Noun', 'notes': 'The book of Deuteronomy.'}
    },
    'ו': {
        'translation': '6',
        'shoresh': '—',
        'transliteration': '6',
        'grammar': {'pos': 'Numeral', 'notes': 'Chapter 6 of Deuteronomy.'}
    },
    'ובשכבך': {
        'translation': 'and when you lie down',
        'shoresh': 'שׁ - כ - ב',
        'transliteration': 'u-ve-shoch-be-cha',
        'grammar': {
            'pos': 'Verb (Infinitive Construct) + Suffix',
            'prefixes': [
                {'hePrefix': 'וּ־', 'name': 'Conjunction', 'meaning': 'and'},
                {'hePrefix': 'בְ־', 'name': 'Preposition', 'meaning': 'in / when'}
            ],
            'suffixes': [{'heSuffix': '־ךָ', 'name': 'Pronominal Suffix', 'meaning': 'your (m.s.)'}],
            'notes': 'Quoting Deut. 6:7.'
        }
    },
    'ובקומך': {
        'translation': 'and when you rise up',
        'shoresh': 'ק - ו - ם',
        'transliteration': 'u-ve-ku-me-cha',
        'grammar': {
            'pos': 'Verb (Infinitive Construct) + Suffix',
            'prefixes': [
                {'hePrefix': 'וּ־', 'name': 'Conjunction', 'meaning': 'and'},
                {'hePrefix': 'בְ־', 'name': 'Preposition', 'meaning': 'in / when'}
            ],
            'suffixes': [{'heSuffix': '־ךָ', 'name': 'Pronominal Suffix', 'meaning': 'your (m.s.)'}],
            'notes': 'Quoting Deut. 6:7.'
        }
    },
    'הלל': {
        'translation': 'Hillel',
        'shoresh': '—',
        'transliteration': 'Hil-lel',
        'grammar': {'pos': 'Proper Name', 'notes': 'The Academy of Hillel (Beit Hillel).'}
    },
    'קורא': {
        'translation': 'recites',
        'shoresh': 'ק - ר - א',
        'transliteration': 'ko-rei',
        'grammar': {'pos': 'Verb', 'binyan': "Pa'al", 'tense': 'Present (Beinoni)', 'gender': 'M', 'number': 'Singular'}
    },
    'כדרכו': {
        'translation': 'in his customary manner',
        'shoresh': 'ד - ר - ך',
        'transliteration': 'ke-dar-ko',
        'grammar': {
            'pos': 'Preposition + Noun + Suffix',
            'prefixes': [{'hePrefix': 'כְּ־', 'name': 'Preposition', 'meaning': 'in accordance with'}],
            'suffixes': [{'heSuffix': '־וֹ', 'name': 'Pronominal Suffix', 'meaning': 'his'}]
        }
    },
    'שם': {
        'translation': 'there (ibid.)',
        'shoresh': '—',
        'transliteration': 'sham',
        'grammar': {'pos': 'Adverb', 'notes': 'Refers to the same biblical chapter previously cited.'}
    },
    'ובלכתך': {
        'translation': 'and when you walk',
        'shoresh': 'ה - ל - ך',
        'transliteration': 'u-ve-lech-te-cha',
        'grammar': {
            'pos': 'Verb (Infinitive Construct) + Suffix',
            'prefixes': [
                {'hePrefix': 'וּ־', 'name': 'Conjunction', 'meaning': 'and'},
                {'hePrefix': 'בְ־', 'name': 'Preposition', 'meaning': 'in / while'}
            ],
            'suffixes': [{'heSuffix': '־ךָ', 'name': 'Pronominal Suffix', 'meaning': 'your (m.s.)'}],
            'notes': 'Quoting Deut. 6:7.'
        }
    },
    'בדרך': {
        'translation': 'along the way',
        'shoresh': 'ד - ר - ך',
        'transliteration': 'ba-da-rech',
        'grammar': {
            'pos': 'Preposition + Noun',
            'prefixes': [{'hePrefix': 'בַּ־', 'name': 'Preposition + Article', 'meaning': 'on the'}]
        }
    },
    'נאמר': {
        'translation': 'was it stated',
        'shoresh': 'א - מ - ר',
        'transliteration': 'ne-e-mar',
        'grammar': {'pos': 'Verb', 'binyan': "Nif'al", 'tense': 'Past', 'gender': 'M'}
    },
    'שבני': {
        'translation': 'that people',
        'shoresh': 'ב - נ - ה',
        'transliteration': 'she-be-nei',
        'grammar': {
            'pos': 'Noun (Construct)',
            'prefixes': [{'hePrefix': 'שֶׁ־', 'name': 'Relative Particle', 'meaning': 'that'}]
        }
    },
    'שוכבים': {
        'translation': 'sleep / lie down',
        'shoresh': 'שׁ - כ - ב',
        'transliteration': 'shoch-vim',
        'grammar': {'pos': 'Verb', 'binyan': "Pa'al", 'tense': 'Present (Beinoni)', 'gender': 'M', 'number': 'Plural'}
    },
    'עומדים': {
        'translation': 'awake / standing up',
        'shoresh': 'ע - מ - ד',
        'transliteration': 'om-dim',
        'grammar': {'pos': 'Verb', 'binyan': "Pa'al", 'tense': 'Present (Beinoni)', 'gender': 'M', 'number': 'Plural'}
    },
    'טרפון': {
        'translation': 'Tarfon',
        'shoresh': '—',
        'transliteration': 'Tar-fon',
        'grammar': {'pos': 'Proper Name', 'notes': 'Rabbi Tarfon, renowned priest and scholar of Lod.'}
    },
    'אני': {
        'translation': 'I',
        'shoresh': '—',
        'transliteration': 'a-ni',
        'grammar': {'pos': 'Personal Pronoun', 'person': '1st', 'number': 'Singular'}
    },
    'הייתי': {
        'translation': 'was',
        'shoresh': 'ה - י - ה',
        'transliteration': 'ha-yi-ti',
        'grammar': {'pos': 'Verb', 'binyan': "Pa'al", 'tense': 'Past', 'person': '1st', 'number': 'Singular'}
    },
    'בא': {
        'translation': 'traveling / coming',
        'shoresh': 'ב - ו - א',
        'transliteration': 'ba',
        'grammar': {'pos': 'Verb / Participle', 'binyan': "Pa'al", 'tense': 'Present', 'gender': 'M', 'number': 'Singular'}
    },
    'והטיתי': {
        'translation': 'and I reclined',
        'shoresh': 'נ - ט - ה',
        'transliteration': 've-hit-tei-ti',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Hif'il",
            'tense': 'Past',
            'person': '1st',
            'prefixes': [{'hePrefix': 'וְ־', 'name': 'Conjunction', 'meaning': 'and'}]
        }
    },
    'כדברי': {
        'translation': 'in accordance with the words of',
        'shoresh': 'ד - ב - ר',
        'transliteration': 'ke-div-rei',
        'grammar': {
            'pos': 'Preposition + Noun Construct',
            'prefixes': [{'hePrefix': 'כְּ־', 'name': 'Preposition', 'meaning': 'according to'}]
        }
    },
    'וסכנתי': {
        'translation': 'and I endangered',
        'shoresh': 'ס - כ - ן',
        'transliteration': 've-sik-kan-ti',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Pi'el",
            'tense': 'Past',
            'person': '1st',
            'prefixes': [{'hePrefix': 'וְ־', 'name': 'Conjunction', 'meaning': 'and'}]
        }
    },
    'בעצמי': {
        'translation': 'myself',
        'shoresh': 'ע - צ - ם',
        'transliteration': 'be-atz-mi',
        'grammar': {
            'pos': 'Noun + Suffix',
            'prefixes': [{'hePrefix': 'בְּ־', 'name': 'Preposition', 'meaning': 'in / with'}],
            'suffixes': [{'heSuffix': '־ִי', 'name': 'Pronominal Suffix', 'meaning': 'my / myself'}]
        }
    },
    'מפני': {
        'translation': 'because of',
        'shoresh': 'פ - נ - ה',
        'transliteration': 'mip-pe-nei',
        'grammar': {
            'pos': 'Compound Preposition',
            'prefixes': [{'hePrefix': 'מִ־', 'name': 'Preposition', 'meaning': 'from the presence of'}]
        }
    },
    'הלסטים': {
        'translation': 'the bandits / highwaymen',
        'shoresh': 'ל - ס - ט',
        'transliteration': 'ha-lis-tim',
        'grammar': {
            'pos': 'Noun (Plural)',
            'prefixes': [{'hePrefix': 'הַ־', 'name': 'Definite Article', 'meaning': 'the'}],
            'notes': 'From Greek λῃστής (lēstēs): brigand or robber.'
        }
    },
    'כדאי': {
        'translation': 'deserving',
        'shoresh': 'ד - י',
        'transliteration': 'ke-dai',
        'grammar': {'pos': 'Adjective', 'meaning': 'worthy / deserving'}
    },
    'היית': {
        'translation': 'you were',
        'shoresh': 'ה - י - ה',
        'transliteration': 'ha-yi-ta',
        'grammar': {'pos': 'Verb', 'binyan': "Pa'al", 'tense': 'Past', 'person': '2nd', 'gender': 'M'}
    },
    'לחוב': {
        'translation': 'to be held liable',
        'shoresh': 'ח - ו - ב',
        'transliteration': 'la-chuv',
        'grammar': {
            'pos': 'Verb (Infinitive)',
            'binyan': "Pa'al",
            'prefixes': [{'hePrefix': 'לָ־', 'name': 'Infinitive Prefix', 'meaning': 'to'}]
        }
    },
    'בעצמך': {
        'translation': 'with your own life',
        'shoresh': 'ע - צ - ם',
        'transliteration': 'be-atz-me-cha',
        'grammar': {
            'pos': 'Noun + Suffix',
            'prefixes': [{'hePrefix': 'בְּ־', 'name': 'Preposition', 'meaning': 'in / with'}],
            'suffixes': [{'heSuffix': '־ךָ', 'name': 'Pronominal Suffix', 'meaning': 'your (m.s.)'}]
        }
    },
    'שעברת': {
        'translation': 'for you transgressed',
        'shoresh': 'ע - ב - ר',
        'transliteration': 'she-a-var-ta',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Pa'al",
            'tense': 'Past',
            'person': '2nd',
            'prefixes': [{'hePrefix': 'שֶׁ־', 'name': 'Relative Particle', 'meaning': 'that / because'}]
        }
    },
    'על': {
        'translation': 'against',
        'shoresh': 'ע - ל - ה',
        'transliteration': 'al',
        'grammar': {'pos': 'Preposition', 'meaning': 'upon / against'}
    },

    # Berakhot 1:4 additions
    'בשחר': {
        'translation': 'In the morning',
        'shoresh': 'שׁ - ח - ר',
        'transliteration': 'ba-sha-char',
        'grammar': {
            'pos': 'Preposition + Noun',
            'prefixes': [{'hePrefix': 'בַּ־', 'name': 'Preposition + Article', 'meaning': 'in the'}]
        }
    },
    'מברך': {
        'translation': 'one recites blessings',
        'shoresh': 'ב - ר - ך',
        'transliteration': 'me-va-rech',
        'grammar': {'pos': 'Verb', 'binyan': "Pi'el", 'tense': 'Present (Beinoni)', 'gender': 'M', 'number': 'Singular'}
    },
    'שתים': {
        'translation': 'two',
        'shoresh': 'שׁ - נ - ה',
        'transliteration': 'shta-yim',
        'grammar': {'pos': 'Cardinal Number', 'gender': 'F'}
    },
    'לפניה': {
        'translation': 'before it',
        'shoresh': 'פ - נ - ה',
        'transliteration': 'le-fa-ne-ha',
        'grammar': {
            'pos': 'Preposition + Suffix',
            'prefixes': [{'hePrefix': 'לְ־', 'name': 'Preposition', 'meaning': 'to / before'}],
            'suffixes': [{'heSuffix': '־הָ', 'name': 'Object Suffix', 'meaning': 'it (f.)'}]
        }
    },
    'ואחת': {
        'translation': 'and one',
        'shoresh': 'א - ח - ד',
        'transliteration': 've-a-chat',
        'grammar': {
            'pos': 'Cardinal Number',
            'prefixes': [{'hePrefix': 'וְ־', 'name': 'Conjunction', 'meaning': 'and'}],
            'gender': 'F'
        }
    },
    'לאחריה': {
        'translation': 'after it',
        'shoresh': 'א - ח - ר',
        'transliteration': 'le-a-cha-re-ha',
        'grammar': {
            'pos': 'Preposition + Suffix',
            'prefixes': [{'hePrefix': 'לְ־', 'name': 'Preposition', 'meaning': 'after'}],
            'suffixes': [{'heSuffix': '־הָ', 'name': 'Object Suffix', 'meaning': 'it (f.)'}]
        }
    },
    'ושתים': {
        'translation': 'and two',
        'shoresh': 'שׁ - נ - ה',
        'transliteration': 'u-shta-yim',
        'grammar': {
            'pos': 'Cardinal Number',
            'prefixes': [{'hePrefix': 'וּ־', 'name': 'Conjunction', 'meaning': 'and'}],
            'gender': 'F'
        }
    },
    'אחת': {
        'translation': 'one blessing',
        'shoresh': 'א - ח - ד',
        'transliteration': 'a-chat',
        'grammar': {'pos': 'Cardinal Number', 'gender': 'F'}
    },
    'ארכה': {
        'translation': 'a long one',
        'shoresh': 'א - ר - ך',
        'transliteration': 'a-ru-kah',
        'grammar': {'pos': 'Adjective', 'gender': 'F', 'number': 'Singular'}
    },
    'קצרה': {
        'translation': 'a short one',
        'shoresh': 'ק - צ - ר',
        'transliteration': 'ktza-rah',
        'grammar': {'pos': 'Adjective', 'gender': 'F', 'number': 'Singular'}
    },
    'מקום': {
        'translation': 'In a place where',
        'shoresh': 'ק - ו - ם',
        'transliteration': 'ma-kom',
        'grammar': {'pos': 'Noun (Construct)', 'meaning': 'place / circumstance'}
    },
    'להאריך': {
        'translation': 'to lengthen',
        'shoresh': 'א - ר - ך',
        'transliteration': 'le-ha-a-rich',
        'grammar': {
            'pos': 'Verb (Infinitive)',
            'binyan': "Hif'il",
            'prefixes': [{'hePrefix': 'לְ־', 'name': 'Infinitive Prefix', 'meaning': 'to'}]
        }
    },
    'אינו': {
        'translation': 'he is not',
        'shoresh': 'א - י - ן',
        'transliteration': 'ei-no',
        'grammar': {
            'pos': 'Negative Copula + Suffix',
            'suffixes': [{'heSuffix': '־וֹ', 'name': 'Pronoun', 'meaning': 'he'}]
        }
    },
    'רשאי': {
        'translation': 'permitted',
        'shoresh': 'ר - שׁ - ה',
        'transliteration': 'ra-shai',
        'grammar': {'pos': 'Adjective', 'meaning': 'authorized / allowed'}
    },
    'לקצר': {
        'translation': 'to shorten',
        'shoresh': 'ק - צ - ר',
        'transliteration': 'le-katz-tzer',
        'grammar': {
            'pos': 'Verb (Infinitive)',
            'binyan': "Pi'el",
            'prefixes': [{'hePrefix': 'לְ־', 'name': 'Infinitive Prefix', 'meaning': 'to'}]
        }
    },
    'לחתם': {
        'translation': 'to conclude with a blessing seal',
        'shoresh': 'ח - ת - ם',
        'transliteration': 'lach-tom',
        'grammar': {
            'pos': 'Verb (Infinitive)',
            'binyan': "Pa'al",
            'prefixes': [{'hePrefix': 'לַ־', 'name': 'Infinitive Prefix', 'meaning': 'to'}],
            'notes': 'Chatimah: concluding formula (e.g. Barukh Attah Hashem...)'
        }
    },
    'שלא': {
        'translation': 'not to',
        'shoresh': '—',
        'transliteration': 'she-lo',
        'grammar': {
            'pos': 'Conjunction + Negative',
            'prefixes': [{'hePrefix': 'שֶׁ־', 'name': 'Relative Particle', 'meaning': 'that'}]
        }
    },

    # Berakhot 1:5 additions
    'מזכירין': {
        'translation': 'We mention',
        'shoresh': 'ז - כ - ר',
        'transliteration': 'maz-ki-rin',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Hif'il",
            'tense': 'Present (Beinoni)',
            'gender': 'M',
            'number': 'Plural'
        }
    },
    'יציאת': {
        'translation': 'the Exodus of',
        'shoresh': 'י - צ - א',
        'transliteration': 'ye-tzi-at',
        'grammar': {'pos': 'Noun (Construct)', 'gender': 'F', 'number': 'Singular'}
    },
    'מצרים': {
        'translation': 'Egypt',
        'shoresh': 'מ - צ - ר',
        'transliteration': 'Mitz-ra-yim',
        'grammar': {'pos': 'Proper Noun', 'notes': 'The land of Egypt.'}
    },
    'בלילות': {
        'translation': 'at nights',
        'shoresh': 'ל - י - ל',
        'transliteration': 'ba-lei-lot',
        'grammar': {
            'pos': 'Noun (Plural)',
            'prefixes': [{'hePrefix': 'בַּ־', 'name': 'Preposition + Article', 'meaning': 'in the'}],
            'gender': 'M/F',
            'number': 'Plural'
        }
    },
    'אלעזר': {
        'translation': 'Elazar',
        'shoresh': '—',
        'transliteration': 'El-a-zar',
        'grammar': {'pos': 'Proper Name', 'notes': 'Rabbi Elazar ben Azarya, appointed head of the Yeshiva at age 18.'}
    },
    'בן': {
        'translation': 'son of',
        'shoresh': 'ב - נ - ה',
        'transliteration': 'ben',
        'grammar': {'pos': 'Noun (Construct)', 'meaning': 'son of'}
    },
    'עזריה': {
        'translation': 'Azarya',
        'shoresh': '—',
        'transliteration': 'A-zar-yah',
        'grammar': {'pos': 'Proper Name'}
    },
    'הרי': {
        'translation': 'Behold',
        'shoresh': '—',
        'transliteration': 'ha-rei',
        'grammar': {'pos': 'Presentative Particle', 'meaning': 'behold / here'}
    },
    'כשבעים': {
        'translation': 'like seventy',
        'shoresh': 'שׁ - ב - ע',
        'transliteration': 'kich-shiv-im',
        'grammar': {
            'pos': 'Numeral',
            'prefixes': [{'hePrefix': 'כִּ־', 'name': 'Preposition', 'meaning': 'as / like'}]
        }
    },
    'שנה': {
        'translation': 'years of age',
        'shoresh': 'שׁ - נ - ה',
        'transliteration': 'sha-nah',
        'grammar': {'pos': 'Noun', 'gender': 'F', 'number': 'Singular'}
    },
    'זכיתי': {
        'translation': 'did I merit',
        'shoresh': 'ז - כ - ה',
        'transliteration': 'za-chi-ti',
        'grammar': {'pos': 'Verb', 'binyan': "Pa'al", 'tense': 'Past', 'person': '1st'}
    },
    'שתאמר': {
        'translation': 'that it should be recited',
        'shoresh': 'א - מ - ר',
        'transliteration': 'she-te-a-mer',
        'grammar': {
            'pos': 'Verb',
            'binyan': "Nif'al",
            'tense': 'Future',
            'prefixes': [{'hePrefix': 'שֶׁ־', 'name': 'Relative Particle', 'meaning': 'that'}]
        }
    },
    'זומא': {
        'translation': 'Zoma',
        'shoresh': '—',
        'transliteration': 'Zo-ma',
        'grammar': {'pos': 'Proper Name', 'notes': 'Ben Zoma (Shimon ben Zoma), famed early sage and exegete.'}
    },
    'דרשה': {
        'translation': 'interpreted it',
        'shoresh': 'ד - ר - שׁ',
        'transliteration': 'de-ra-shah',
        'grammar': {
            'pos': 'Verb + Suffix',
            'binyan': "Pa'al",
            'tense': 'Past',
            'suffixes': [{'heSuffix': '־ָהּ', 'name': 'Object Suffix', 'meaning': 'it (f.)'}]
        }
    },
    'למען': {
        'translation': 'So that',
        'shoresh': '—',
        'transliteration': 'le-ma-an',
        'grammar': {'pos': 'Conjunction', 'meaning': 'in order that'}
    },
    'תזכר': {
        'translation': 'you may remember',
        'shoresh': 'ז - כ - ר',
        'transliteration': 'tiz-kor',
        'grammar': {'pos': 'Verb', 'binyan': "Pa'al", 'tense': 'Future', 'person': '2nd'}
    },
    'יום': {
        'translation': 'the day of',
        'shoresh': 'י - ו - ם',
        'transliteration': 'yom',
        'grammar': {'pos': 'Noun (Construct)'}
    },
    'צאתך': {
        'translation': 'your departure',
        'shoresh': 'י - צ - א',
        'transliteration': 'tzet-cha',
        'grammar': {
            'pos': 'Infinitive Construct + Suffix',
            'suffixes': [{'heSuffix': '־ךָ', 'name': 'Pronominal Suffix', 'meaning': 'your (m.s.)'}]
        }
    },
    'מארץ': {
        'translation': 'from the land of',
        'shoresh': 'א - ר - ץ',
        'transliteration': 'me-e-retz',
        'grammar': {
            'pos': 'Preposition + Noun Construct',
            'prefixes': [{'hePrefix': 'מֵ־', 'name': 'Preposition', 'meaning': 'from'}]
        }
    },
    'ימי': {
        'translation': 'the days of',
        'shoresh': 'י - ו - ם',
        'transliteration': 'ye-mei',
        'grammar': {'pos': 'Noun (Construct Plural)'}
    },
    'חייך': {
        'translation': 'your life',
        'shoresh': 'ח - י - י',
        'transliteration': 'cha-ye-cha',
        'grammar': {
            'pos': 'Noun (Plural) + Suffix',
            'suffixes': [{'heSuffix': '־ךָ', 'name': 'Pronominal Suffix', 'meaning': 'your (m.s.)'}]
        }
    },
    'הימים': {
        'translation': 'the days',
        'shoresh': 'י - ו - ם',
        'transliteration': 'ha-ya-mim',
        'grammar': {
            'pos': 'Noun (Plural)',
            'prefixes': [{'hePrefix': 'הַ־', 'name': 'Definite Article', 'meaning': 'the'}]
        }
    },
    'הלילות': {
        'translation': 'the nights',
        'shoresh': 'ל - י - ל',
        'transliteration': 'ha-lei-lot',
        'grammar': {
            'pos': 'Noun (Plural)',
            'prefixes': [{'hePrefix': 'הַ־', 'name': 'Definite Article', 'meaning': 'the'}]
        }
    },
    'להביא': {
        'translation': 'to include',
        'shoresh': 'ב - ו - א',
        'transliteration': 'le-ha-vi',
        'grammar': {
            'pos': 'Verb (Infinitive)',
            'binyan': "Hif'il",
            'prefixes': [{'hePrefix': 'לְ־', 'name': 'Infinitive Prefix', 'meaning': 'to'}]
        }
    },
    'הזה': {
        'translation': 'this present world',
        'shoresh': 'ז - ה',
        'transliteration': 'ha-zeh',
        'grammar': {
            'pos': 'Demonstrative Pronoun',
            'prefixes': [{'hePrefix': 'הַ־', 'name': 'Definite Article', 'meaning': 'the'}]
        }
    },
    'העולם': {
        'translation': 'this world',
        'shoresh': 'ע - ל - ם',
        'transliteration': 'ha-o-lam',
        'grammar': {
            'pos': 'Noun',
            'prefixes': [{'hePrefix': 'הָ־', 'name': 'Definite Article', 'meaning': 'the'}]
        }
    },
    'לימות': {
        'translation': 'for the era of',
        'shoresh': 'י - ו - ם',
        'transliteration': 'li-mot',
        'grammar': {
            'pos': 'Preposition + Noun Construct',
            'prefixes': [{'hePrefix': 'לִ־', 'name': 'Preposition', 'meaning': 'for'}]
        }
    },
    'המשיח': {
        'translation': 'the Messiah',
        'shoresh': 'מ - שׁ - ח',
        'transliteration': 'ha-Ma-shi-ach',
        'grammar': {
            'pos': 'Noun',
            'prefixes': [{'hePrefix': 'הַ־', 'name': 'Definite Article', 'meaning': 'the'}],
            'notes': 'The Messianic redemption era.'
        }
    },

    # Pirkei Avot 1:1 additions
    'משה': {
        'translation': 'Moses',
        'shoresh': '—',
        'transliteration': 'Mo-sheh',
        'grammar': {'pos': 'Proper Name', 'notes': 'Moses our teacher (Moshe Rabbeinu).'}
    },
    'קבל': {
        'translation': 'received',
        'shoresh': 'ק - ב - ל',
        'transliteration': 'kib-bel',
        'grammar': {'pos': 'Verb', 'binyan': "Pi'el", 'tense': 'Past', 'person': '3rd', 'gender': 'M'}
    },
    'תורה': {
        'translation': 'the Torah',
        'shoresh': 'י - ר - ה',
        'transliteration': 'To-rah',
        'grammar': {'pos': 'Noun', 'notes': 'Both the Written Torah and Oral Torah.'}
    },
    'מסיני': {
        'translation': 'from Mount Sinai',
        'shoresh': '—',
        'transliteration': 'mi-Si-nai',
        'grammar': {
            'pos': 'Proper Noun',
            'prefixes': [{'hePrefix': 'מִ־', 'name': 'Preposition', 'meaning': 'from'}]
        }
    },
    'ומסרה': {
        'translation': 'and transmitted it',
        'shoresh': 'מ - ס - ר',
        'transliteration': 'u-me-sa-rah',
        'grammar': {
            'pos': 'Verb + Suffix',
            'binyan': "Pa'al",
            'tense': 'Past',
            'prefixes': [{'hePrefix': 'וּ־', 'name': 'Conjunction', 'meaning': 'and'}],
            'suffixes': [{'heSuffix': '־ָהּ', 'name': 'Object Suffix', 'meaning': 'it (f.)'}]
        }
    },
    'ליהושע': {
        'translation': 'to Joshua',
        'shoresh': '—',
        'transliteration': 'li-Ho-shu-a',
        'grammar': {
            'pos': 'Proper Name',
            'prefixes': [{'hePrefix': 'לִ־', 'name': 'Preposition', 'meaning': 'to'}]
        }
    },
    'ויהושע': {
        'translation': 'and Joshua',
        'shoresh': '—',
        'transliteration': 'vi-Ho-shu-a',
        'grammar': {
            'pos': 'Proper Name',
            'prefixes': [{'hePrefix': 'וִ־', 'name': 'Conjunction', 'meaning': 'and'}]
        }
    },
    'לזקנים': {
        'translation': 'to the Elders',
        'shoresh': 'ז - ק - ן',
        'transliteration': 'liz-kei-nim',
        'grammar': {
            'pos': 'Noun (Plural)',
            'prefixes': [{'hePrefix': 'לִ־', 'name': 'Preposition', 'meaning': 'to the'}],
            'notes': 'The Elders who led the generation following Joshua (Judges 2:7).'
        }
    },
    'וזקנים': {
        'translation': 'and the Elders',
        'shoresh': 'ז - ק - ן',
        'transliteration': 'u-ze-kei-nim',
        'grammar': {
            'pos': 'Noun (Plural)',
            'prefixes': [{'hePrefix': 'וּ־', 'name': 'Conjunction', 'meaning': 'and'}]
        }
    },
    'לנביאים': {
        'translation': 'to the Prophets',
        'shoresh': 'נ - ב - א',
        'transliteration': 'lin-vi-im',
        'grammar': {
            'pos': 'Noun (Plural)',
            'prefixes': [{'hePrefix': 'לִ־', 'name': 'Preposition', 'meaning': 'to the'}]
        }
    },
    'ונביאים': {
        'translation': 'and the Prophets',
        'shoresh': 'נ - ב - א',
        'transliteration': 'un-vi-im',
        'grammar': {
            'pos': 'Noun (Plural)',
            'prefixes': [{'hePrefix': 'וּ־', 'name': 'Conjunction', 'meaning': 'and'}]
        }
    },
    'מסרוה': {
        'translation': 'transmitted it',
        'shoresh': 'מ - ס - ר',
        'transliteration': 'me-sa-ru-ha',
        'grammar': {
            'pos': 'Verb + Suffix',
            'binyan': "Pa'al",
            'tense': 'Past',
            'number': 'Plural',
            'suffixes': [{'heSuffix': '־הָ', 'name': 'Object Suffix', 'meaning': 'it'}]
        }
    },
    'לאנשי': {
        'translation': 'to the Men of',
        'shoresh': 'א - נ - שׁ',
        'transliteration': 'le-an-shei',
        'grammar': {
            'pos': 'Noun (Construct Plural)',
            'prefixes': [{'hePrefix': 'לְ־', 'name': 'Preposition', 'meaning': 'to'}]
        }
    },
    'כנסת': {
        'translation': 'the Assembly',
        'shoresh': 'כ - נ - ס',
        'transliteration': 'kne-set',
        'grammar': {'pos': 'Noun (Construct)'}
    },
    'הגדולה': {
        'translation': 'the Great',
        'shoresh': 'ג - ד - ל',
        'transliteration': 'ha-ge-do-lah',
        'grammar': {
            'pos': 'Adjective',
            'prefixes': [{'hePrefix': 'הַ־', 'name': 'Definite Article', 'meaning': 'the'}],
            'notes': 'Anshei Knesset HaGedolah (The Great Assembly of 120 prophets and sages, Ezra era).'
        }
    },
    'הם': {
        'translation': 'They',
        'shoresh': '—',
        'transliteration': 'hem',
        'grammar': {'pos': 'Personal Pronoun', 'person': '3rd', 'gender': 'M', 'number': 'Plural'}
    },
    'שלושה': {
        'translation': 'three',
        'shoresh': 'שׁ - ל - שׁ',
        'transliteration': 'shlo-shah',
        'grammar': {'pos': 'Numeral', 'gender': 'M'}
    },
    'דברים': {
        'translation': 'things / guiding principles',
        'shoresh': 'ד - ב - ר',
        'transliteration': 'de-va-rim',
        'grammar': {'pos': 'Noun (Plural)', 'gender': 'M', 'number': 'Plural'}
    },
    'הוו': {
        'translation': 'Be',
        'shoresh': 'ה - ו - ה',
        'transliteration': 'he-vu',
        'grammar': {'pos': 'Verb (Imperative)', 'binyan': "Pa'al", 'number': 'Plural'}
    },
    'מתונים': {
        'translation': 'deliberate / patient',
        'shoresh': 'מ - ת - ן',
        'transliteration': 'me-tu-nim',
        'grammar': {'pos': 'Adjective', 'gender': 'M', 'number': 'Plural'}
    },
    'בדין': {
        'translation': 'in judgment',
        'shoresh': 'ד - י - ן',
        'transliteration': 'ba-din',
        'grammar': {
            'pos': 'Preposition + Noun',
            'prefixes': [{'hePrefix': 'בַּ־', 'name': 'Preposition + Article', 'meaning': 'in the'}]
        }
    },
    'והעמידו': {
        'translation': 'and establish / raise up',
        'shoresh': 'ע - מ - ד',
        'transliteration': 've-ha-a-mi-du',
        'grammar': {
            'pos': 'Verb (Imperative)',
            'binyan': "Hif'il",
            'prefixes': [{'hePrefix': 'וְ־', 'name': 'Conjunction', 'meaning': 'and'}],
            'number': 'Plural'
        }
    },
    'תלמידים': {
        'translation': 'students / disciples',
        'shoresh': 'ל - מ - ד',
        'transliteration': 'tal-mi-dim',
        'grammar': {'pos': 'Noun (Plural)', 'gender': 'M', 'number': 'Plural'}
    },
    'הרבה': {
        'translation': 'many',
        'shoresh': 'ר - ב - ה',
        'transliteration': 'har-beh',
        'grammar': {'pos': 'Adverb / Quantifier', 'meaning': 'many / abundantly'}
    },
    'ועשו': {
        'translation': 'and make',
        'shoresh': 'ע - שׂ - ה',
        'transliteration': 'va-a-su',
        'grammar': {
            'pos': 'Verb (Imperative)',
            'binyan': "Pa'al",
            'prefixes': [{'hePrefix': 'וַ־', 'name': 'Conjunction', 'meaning': 'and'}],
            'number': 'Plural'
        }
    },
    'סיג': {
        'translation': 'a protective fence',
        'shoresh': 'ס - ו - ג',
        'transliteration': 'siyag',
        'grammar': {
            'pos': 'Noun',
            'notes': 'Rabbinic safeguards and preventative decrees to protect biblical commandments.'
        }
    },
    'לתורה': {
        'translation': 'around the Torah',
        'shoresh': 'י - ר - ה',
        'transliteration': 'la-To-rah',
        'grammar': {
            'pos': 'Preposition + Noun',
            'prefixes': [{'hePrefix': 'לַ־', 'name': 'Preposition + Article', 'meaning': 'for the'}]
        }
    }
}

# Heuristic morphological analyzer for any word not explicitly in LEXICON
COMMON_ROOTS = {
    'קרא': 'to call / recite / read',
    'כנס': 'to enter / gather',
    'אכל': 'to eat',
    'רום': 'to raise / terumah heave-offering',
    'שמר': 'to guard / watch',
    'ראש': 'head / first',
    'חכם': 'wise / sage',
    'אמר': 'to say',
    'חצה': 'to divide in half / midnight',
    'עלה': 'to rise / ascend',
    'עמד': 'to stand',
    'שחר': 'dawn',
    'עשה': 'to make / do',
    'בוא': 'to come / enter',
    'בנה': 'to build / son',
    'שתה': 'to drink / feast',
    'חיב': 'to obligate / be liable',
    'צוה': 'to command / mitzvah',
    'קטר': 'to burn sacrificial fat/incense',
    'חלב': 'fat / milk',
    'רחק': 'to distance / keep far',
    'עבר': 'to pass / transgress',
    'נכר': 'to recognize / distinguish',
    'גמר': 'to complete / finish',
    'מלך': 'king / reign',
    'פסד': 'to lose',
    'נטה': 'to incline / recline',
    'סכן': 'to endanger',
    'ברך': 'to bless',
    'ארך': 'to lengthen',
    'קצר': 'to shorten',
    'חתם': 'to seal / conclude',
    'זכר': 'to remember / mention',
    'קבל': 'to receive',
    'מסר': 'to hand over / transmit',
    'למד': 'to learn / teach',
    'שמע': 'to hear / listen',
    'שכב': 'to lie down',
    'קום': 'to arise',
    'הלך': 'to walk / go',
    'ירד': 'to descend',
    'נתן': 'to give',
    'לקח': 'to take',
    'ידע': 'to know',
    'ראה': 'to see',
    'ישב': 'to sit / dwell',
    'דבר': 'to speak / word',
    'כתב': 'to write',
    'פתח': 'to open',
    'סגר': 'to close',
    'טהר': 'to be pure',
    'טמא': 'to be impure',
    'קדש': 'to sanctify / holy'
}

def analyze_unknown_word(word_token):
    clean_w = clean_letters(word_token)
    if not clean_w:
        return None
    
    # Check if exact match in LEXICON
    if clean_w in LEXICON:
        entry = dict(LEXICON[clean_w])
        return entry
    
    # Try stripping prefixes: משכבלו"ה
    # List of common prefixes
    prefixes_found = []
    stem = clean_w
    
    # Prefixes order: ו -> ש -> מ/ב/כ/ל -> ה
    if stem.startswith('ו') and len(stem) > 3:
        prefixes_found.append({'hePrefix': 'וְ־', 'name': 'Conjunction', 'meaning': 'and'})
        stem = stem[1:]
    
    if stem.startswith('ש') and len(stem) > 3:
        prefixes_found.append({'hePrefix': 'שֶׁ־', 'name': 'Relative Particle', 'meaning': 'that / which'})
        stem = stem[1:]
        
    if stem.startswith('ה') and len(stem) > 3:
        prefixes_found.append({'hePrefix': 'הַ־', 'name': 'Definite Article', 'meaning': 'the'})
        stem = stem[1:]
    elif (stem.startswith('ב') or stem.startswith('ל') or stem.startswith('מ') or stem.startswith('כ')) and len(stem) > 3:
        p_letter = stem[0]
        p_meaning = {'ב': 'in / with', 'ל': 'to / for', 'מ': 'from', 'כ': 'as / like'}[p_letter]
        prefixes_found.append({'hePrefix': f'{p_letter}ְ־', 'name': 'Preposition', 'meaning': p_meaning})
        stem = stem[1:]
        if stem.startswith('ה') and len(stem) > 3:
            prefixes_found.append({'hePrefix': 'הַ־', 'name': 'Definite Article', 'meaning': 'the'})
            stem = stem[1:]

    # Check if stem is in LEXICON
    if stem in LEXICON:
        base_entry = LEXICON[stem]
        entry = {
            'translation': ('and ' if any(p['hePrefix'] == 'וְ־' for p in prefixes_found) else '') + base_entry['translation'],
            'shoresh': base_entry.get('shoresh', '—'),
            'transliteration': clean_w,
            'grammar': {
                'pos': base_entry.get('grammar', {}).get('pos', 'Noun / Verb'),
                'prefixes': prefixes_found + base_entry.get('grammar', {}).get('prefixes', []),
                'shoresh': base_entry.get('shoresh'),
                'binyan': base_entry.get('grammar', {}).get('binyan'),
                'tense': base_entry.get('grammar', {}).get('tense'),
                'notes': base_entry.get('grammar', {}).get('notes', f'Derived from base word {stem}.')
            }
        }
        return entry

    # Detect roots from 3-letter stem
    shoresh_detected = '—'
    meaning_detected = ''
    if len(stem) == 3 and stem in COMMON_ROOTS:
        shoresh_detected = f'{stem[0]} - {stem[1]} - {stem[2]}'
        meaning_detected = COMMON_ROOTS[stem]
    else:
        for r, m in COMMON_ROOTS.items():
            if r in stem:
                shoresh_detected = f'{r[0]} - {r[1]} - {r[2]}'
                meaning_detected = m
                break
                
    return {
        'translation': meaning_detected or f'[{clean_w}]',
        'shoresh': shoresh_detected,
        'transliteration': clean_w,
        'grammar': {
            'pos': 'Term',
            'prefixes': prefixes_found,
            'shoresh': shoresh_detected,
            'shoreshMeaning': meaning_detected,
            'notes': f'Mishnaic vocabulary term.'
        }
    }

print("Lexicon and analyzer defined with", len(LEXICON), "pre-curated words")

def fetch_and_build_chapter(tractate_slug, tractate_title, he_title, chapter_num):
    url = f'https://www.sefaria.org/api/texts/{tractate_slug}.{chapter_num}?context=0'
    req = urllib.request.Request(url, headers={'User-Agent': 'MishnaApp/1.0'})
    res = urllib.request.urlopen(req)
    data = json.loads(res.read().decode('utf-8'))
    
    he_mishnayot = data.get('he', [])
    en_mishnayot = data.get('text', [])
    
    mishnayot_result = []
    
    for m_idx, (he_text, en_text) in enumerate(zip(he_mishnayot, en_mishnayot)):
        m_num = m_idx + 1
        he_ref = f'משנה {to_hebrew_numeral(m_num)}'
        en_ref = f'Mishnah {m_num}'
        
        raw_tokens = he_text.strip().split()
        words_data = []
        
        for w_idx, token in enumerate(raw_tokens):
            word, punct = separate_punct(token)
            clean_w = clean_letters(word)
            if not clean_w:
                continue
                
            analysis = analyze_unknown_word(word) or {
                'translation': f'[{clean_w}]',
                'shoresh': '—',
                'transliteration': clean_w,
                'grammar': {'pos': 'Word'}
            }
            
            words_data.append({
                'id': f'w_{chapter_num}_{m_num}_{w_idx+1}',
                'raw': token,
                'cleanWord': word,
                'consonants': clean_w,
                'punctuation': punct,
                'translation': analysis.get('translation', ''),
                'shoresh': analysis.get('shoresh', '—'),
                'transliteration': analysis.get('transliteration', ''),
                'grammar': analysis.get('grammar', {'pos': 'Term'})
            })
            
        mishnayot_result.append({
            'number': m_num,
            'heRef': he_ref,
            'enRef': en_ref,
            'hebrewFull': he_text.strip(),
            'englishFull': en_text.strip() if en_text else '',
            'words': words_data
        })
        
    return {
        'tractate': {
            'title': tractate_title,
            'slug': tractate_slug,
            'shortTitle': tractate_title.replace('Mishnah ', ''),
            'heTitle': he_title,
            'heShortTitle': he_title.replace('משנה ', ''),
            'enDesc': '',
            'heDesc': '',
            'chaptersCount': 9 if 'Berakhot' in tractate_slug else 6,
            'mishnahCounts': [len(mishnayot_result)]
        },
        'chapter': chapter_num,
        'mishnayot': mishnayot_result
    }

def to_hebrew_numeral(n):
    numerals = ['', 'א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ז׳', 'ח׳', 'ט׳', 'י׳', 'י״א', 'י״ב', 'י״ג', 'י״ד', 'ט״ו', 'ט״ז', 'י״ז', 'י״ח', 'י״ט', 'כ׳']
    if n < len(numerals):
        return numerals[n]
    return str(n)

print("Fetching Berakhot 1...")
berakhot_1 = fetch_and_build_chapter('Mishnah_Berakhot', 'Mishnah Berakhot', 'משנה ברכות', 1)

print("Fetching Pirkei Avot 1...")
avot_1 = fetch_and_build_chapter('Pirkei_Avot', 'Pirkei Avot', 'פרקי אבות', 1)

preloaded_ts = f"""import {{ ChapterData }} from '../types';

export const PRELOADED_BERAKHOT_1: ChapterData = {json.dumps(berakhot_1, ensure_ascii=False, indent=2)};

export const PRELOADED_AVOT_1: ChapterData = {json.dumps(avot_1, ensure_ascii=False, indent=2)};

export const PRELOADED_CHAPTERS: Record<string, ChapterData> = {{
  'Mishnah_Berakhot_1': PRELOADED_BERAKHOT_1,
  'Pirkei_Avot_1': PRELOADED_AVOT_1
}};
"""

with open('src/data/preloadedChapters.ts', 'w', encoding='utf-8') as f:
    f.write(preloaded_ts)

lexicon_ts = f"""export interface LexiconEntry {{
  translation: string;
  shoresh: string;
  transliteration: string;
  grammar: {{
    pos: string;
    binyan?: string;
    tense?: string;
    gender?: 'M' | 'F' | 'Common';
    number?: 'Singular' | 'Plural' | 'Dual';
    person?: '1st' | '2nd' | '3rd';
    prefixes?: Array<{{ hePrefix: string; name: string; meaning: string }}>;
    suffixes?: Array<{{ heSuffix: string; name: string; meaning: string }}>;
    notes?: string;
  }};
}}

export const MISHNA_LEXICON: Record<string, LexiconEntry> = {json.dumps(LEXICON, ensure_ascii=False, indent=2)};

export const COMMON_MISHNA_ROOTS: Record<string, string> = {json.dumps(COMMON_ROOTS, ensure_ascii=False, indent=2)};
"""

with open('src/data/lexiconData.ts', 'w', encoding='utf-8') as f:
    f.write(lexicon_ts)

print("Saved src/data/preloadedChapters.ts and src/data/lexiconData.ts successfully.")
