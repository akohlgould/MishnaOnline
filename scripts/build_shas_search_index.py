#!/usr/bin/env python3
"""
Regenerates public/data/shas_search_index.json across all 63 tractates in Shas.
Includes full Hebrew snippet, English snippet, and unique roots (shorashim) for each Mishnah.
"""

import glob
import json
import os
import re

DATA_DIR = 'public/data/tractates'
OUTPUT_FILE = 'public/data/shas_search_index.json'

def clean_hebrew(text: str) -> str:
    return re.sub(r'<[^>]+>', '', text).strip()

def clean_english(text: str) -> str:
    return re.sub(r'<[^>]+>', '', text).strip()

def build_index():
    tractate_files = sorted(glob.glob(os.path.join(DATA_DIR, '*.json')))
    print(f"Found {len(tractate_files)} tractate files.")

    items = []
    total_roots_count = 0

    for path in tractate_files:
        with open(path, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
            except Exception as e:
                print(f"Error loading {path}: {e}")
                continue

        # Each tractate has stringified chapter numbers as keys: "1", "2", ...
        chapters = []
        for k in data.keys():
            if k.isdigit():
                chapters.append(int(k))
        chapters.sort()

        for ch in chapters:
            ch_data = data.get(str(ch), {})
            tractate_info = ch_data.get('tractate', {})
            slug = tractate_info.get('slug', os.path.basename(path).replace('.json', ''))
            short_title = tractate_info.get('shortTitle', slug.replace('Mishnah_', ''))
            he_title = tractate_info.get('heTitle', '')

            mishnayot = ch_data.get('mishnayot', [])
            for m in mishnayot:
                m_num = m.get('number', 1)
                he_full = m.get('hebrewFull', '')
                en_full = m.get('englishFull', '')
                words = m.get('words', [])

                # Extract unique roots
                roots = []
                seen_roots = set()
                for w in words:
                    r = w.get('shoresh') or (w.get('grammar') or {}).get('shoresh')
                    if r and r not in ('—', '-', 'None', 'null', ''):
                        clean_r = re.sub(r'[\s\-–—]', '', r)
                        if clean_r and clean_r not in seen_roots:
                            seen_roots.add(clean_r)
                            roots.append(clean_r)

                if roots:
                    total_roots_count += 1

                he_snippet = clean_hebrew(he_full)[:150]
                en_snippet = clean_english(en_full)[:150]

                items.append({
                    'slug': slug,
                    'title': short_title,
                    'heTitle': he_title,
                    'ch': ch,
                    'm': m_num,
                    'ref': f"{short_title} {ch}:{m_num}",
                    'heRef': f"{he_title} {ch}:{m_num}",
                    'he': he_snippet,
                    'en': en_snippet,
                    'roots': roots
                })

    print(f"Built search index with {len(items)} mishnayot.")
    print(f"Mishnayot with identified roots: {total_roots_count} / {len(items)} ({total_roots_count/len(items)*100:.1f}%)")

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(items, f, ensure_ascii=False, indent=None)

    size_mb = os.path.getsize(OUTPUT_FILE) / (1024 * 1024)
    print(f"Saved to {OUTPUT_FILE} ({size_mb:.2f} MB)")

if __name__ == '__main__':
    build_index()
