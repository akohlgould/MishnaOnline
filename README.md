# Mishnah.Online — mishnah.online

A high-end web application for learning the Mishnah with interactive interlinear translations, grammatical breakdown, and Hebrew roots (shorashim), inspired by Sefaria's aesthetic and typography. Available online at **[mishnah.online](https://mishnah.online)** (`mishna.online` redirects here).

---

## ✨ Features

- **Pristine Sefaria-Grade Typography**:
  - Vocalized Hebrew text rendered in classic Hebrew fonts (*Frank Ruhl Libre*, *David Libre*, *Assistant*).
  - Vowel points (nikkud) calibrated for optimal readability.
  - Three color themes: **Light (Parchment)**, **Sepia (Classic Sefer)**, and **Dark (Midnight Slate)**.
  - Dynamic font size scaling (20px – 46px).

- **Invisible Translations by Default**:
  - The text initially displays as clean, sacred Hebrew without visual clutter.
  - **Single Contextual Translation**: Tapping any word opens a detailed breakdown with **only one accurate contextual translation** for that word.
  - Optional **"Subtitles" Mode**: A toggle in the top bar to display subtle word-by-word translations underneath the Hebrew if desired.

- **Deep Grammatical Breakdown & Shoresh**:
  - **Shoresh (Root)**: Distinctive Hebrew root letters (e.g., `ק - ר - א`, `כ - נ - ס`, `א - כ - ל`) with root semantic definitions.
  - **Prefix Decomposition**: Isolates and explains Hebrew prefixes (`בְּ־`, `שֶׁ־`, `הַ־`, `מִ־`, `לְ־`, `וְ־`, `כְּ־`).
  - **Suffix Decomposition**: Isolates pronominal and inflectional endings (`־ִין`, `־ִים`, `־תָן`, `־ָיו`, `־וֹ`, `־נוּ`, `־ךָ`).
  - **Conjugation Details**: Identifies the Hebrew binyan (*Pa'al*, *Nif'al*, *Pi'el*, *Hif'il*, etc.), tense (*Present / Beinoni*, *Past / Qatal*, *Future / Yiqtol*, *Infinitive*), gender, and number.
  - **Linguistic Usage Notes**: Contextual halakhic and syntactic notes explaining why the word appears in this form.

- **Word-by-Word Study Navigation**:
  - Keyboard arrow keys (`←` Next Word, `→` Previous Word, `Esc` Close) allow stepping through the Mishna word-by-word like a tutor.
  - Built-in audio pronunciation with speech synthesis to pronounce any word or whole Mishnah.

- **Shas Mishnah Library (All 63 Tractates)**:
  - Complete index of the **Six Orders of the Mishnah (ששת סדרי משנה)**:
    1. **Zeraim** (זרעים) — 11 tractates
    2. **Moed** (מועד) — 12 tractates
    3. **Nashim** (נשים) — 7 tractates
    4. **Nezikin** (נזיקין) — 10 tractates
    5. **Kodashim** (קדשים) — 11 tractates
    6. **Tahorot** (טהרות) — 12 tractates
  - Search any tractate in Hebrew or English.
  - Direct chapter and mishnah picker.

- **Full Translation Drawer**:
  - Optional slide-out panel containing Sefaria's complete community translation with bolded literal phrases and bracketed commentary.

- **Live Sefaria Dictionary Integration**:
  - Quick link and expandable accordion to explore full historical entries from Marcus Jastrow's Dictionary and Sefaria's Lexicon.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or build and preview production bundle
npm run build
npm run preview
```

Open `http://localhost:5173` in your browser.

