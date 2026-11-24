import os
import json
import re
import html
import time

def escape_xml(s: str) -> str:
    return (s.replace("&", "&amp;")
             .replace("<", "&lt;")
             .replace(">", "&gt;")
             .replace('"', "&quot;")
             .replace("'", "&apos;"))

def strip_tags(text: str) -> str:
    if not text:
        return ""
    clean = re.sub(r'<[^>]+>', ' ', text)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return clean

def to_slug(title: str) -> str:
    s = title.lower().replace(" ", "-").replace("/", "-")
    return re.sub(r'[^a-z0-9-]', '', s)

def hebrew_numeral(n: int) -> str:
    units = ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"]
    tens = ["", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ"]
    if n == 15:
        return "טו"
    if n == 16:
        return "טז"
    t = (n // 10) % 10
    u = n % 10
    h = n // 100
    res = ("ק" * h) + tens[t] + units[u]
    return res or str(n)

def build_prerender():
    start_time = time.time()
    catalog_path = 'src/data/mishnahCatalog.json'
    dist_index_path = 'dist/index.html'

    if not os.path.exists(dist_index_path):
        print("dist/index.html does not exist. Run vite build first.")
        return

    with open(dist_index_path, 'r', encoding='utf-8') as f:
        base_html = f.read()

    with open(catalog_path, 'r', encoding='utf-8') as f:
        seders = json.load(f)

    sitemap_urls = [
        ("https://mishnah.online/", "1.0", "weekly")
    ]

    total_pages = 0

    for seder in seders:
        seder_name = seder['name']
        seder_he = seder.get('heName', '')

        for tractate in seder['tractates']:
            t_slug = to_slug(tractate['shortTitle'])
            t_short = tractate['shortTitle']
            t_title = tractate['title']
            t_he = tractate['heTitle']
            t_he_short = tractate.get('heShortTitle', t_he)
            t_desc = tractate.get('enDesc', '')
            t_json_path = f"public/data/tractates/{tractate['slug'].lower()}.json"

            if not os.path.exists(t_json_path):
                print(f"Warning: {t_json_path} missing")
                continue

            with open(t_json_path, 'r', encoding='utf-8') as f:
                tractate_data = json.load(f)

            # Tractate URL
            tractate_url = f"https://mishnah.online/{t_slug}"
            sitemap_urls.append((tractate_url, "0.9", "monthly"))

            # Build Tractate HTML
            t_out_dir = f"dist/{t_slug}"
            os.makedirs(t_out_dir, exist_ok=True)
            
            t_title_text = f"Mishnah {t_short} ({t_he_short}) – Word-by-word Study with Roots & Translation | Mishnah.Online"
            t_desc_text = f"Study Mishnah {t_short} ({t_he_short}) in Seder {seder_name}. {t_desc} Word-by-word Hebrew translations, roots, and grammatical breakdown across {tractate['chaptersCount']} chapters."

            # Tractate JSON-LD
            t_schema = {
                "@context": "https://schema.org",
                "@type": ["Book", "LearningResource"],
                "name": f"Mishnah {t_short}",
                "alternateName": [t_title, t_he, f"משנה {t_he_short}"],
                "inLanguage": ["he", "en"],
                "description": t_desc or f"Mishnah {t_short} with word-by-word translations and grammatical roots.",
                "isPartOf": {
                    "@type": "BookSeries",
                    "name": f"Seder {seder_name}",
                    "alternateName": f"סדר {seder_he}"
                },
                "url": tractate_url
            }

            # Tractate static shell
            ch_links = "".join([
                f'<a href="/{t_slug}/{ch}" style="display:inline-block;padding:8px 16px;margin:4px;border:1px solid #d6d3d1;border-radius:8px;text-decoration:none;color:#1c1917;background:#fff;font-weight:600;">Chapter {ch} (פרק {hebrew_numeral(ch)})</a>'
                for ch in range(1, tractate['chaptersCount'] + 1)
            ])
            t_shell = f"""
            <div style="max-width:800px;margin:0 auto;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,serif;">
              <nav style="font-size:14px;color:#78716c;margin-bottom:20px;">
                <a href="/" style="color:#b45309;text-decoration:none;">Home</a> &rsaquo; 
                <span>Seder {seder_name}</span> &rsaquo; 
                <span>Mishnah {t_short}</span>
              </nav>
              <h1 style="font-size:32px;color:#1b2442;margin-bottom:8px;">
                <span lang="he" dir="rtl">{t_he}</span> &middot; Mishnah {t_short}
              </h1>
              <p style="font-size:16px;color:#57534e;line-height:1.6;margin-bottom:24px;">{html.escape(t_desc)}</p>
              <h2 style="font-size:20px;color:#292524;margin-bottom:12px;">Chapters (פרקים)</h2>
              <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:40px;">
                {ch_links}
              </div>
              <p style="font-size:14px;color:#a8a29e;">Loading interactive word inspector and commentary...</p>
            </div>
            """

            t_page = inject_metadata(
                base_html,
                title=t_title_text,
                description=t_desc_text,
                canonical=tractate_url,
                og_url=tractate_url,
                schema_json=t_schema,
                content_html=t_shell
            )
            with open(f"{t_out_dir}/index.html", 'w', encoding='utf-8') as f:
                f.write(t_page)
            total_pages += 1

            # Process Chapters and Mishnayot
            for ch_str, ch_data in tractate_data.items():
                try:
                    ch_num = int(ch_str)
                except ValueError:
                    continue

                ch_he_num = hebrew_numeral(ch_num)
                ch_url = f"https://mishnah.online/{t_slug}/{ch_num}"
                sitemap_urls.append((ch_url, "0.8", "monthly"))

                ch_out_dir = f"dist/{t_slug}/{ch_num}"
                os.makedirs(ch_out_dir, exist_ok=True)

                mishnayot = ch_data.get('mishnayot', [])
                first_he = mishnayot[0].get('hebrewFull', '')[:100] if mishnayot else ''
                first_clean = strip_tags(first_he)

                ch_title_text = f"Mishnah {t_short} Chapter {ch_num} ({t_he_short} פרק {ch_he_num}) – Word-by-word Study | Mishnah.Online"
                ch_desc_text = f"Study Mishnah {t_short} Chapter {ch_num} ({len(mishnayot)} Mishnayot) in Hebrew and English with roots and grammatical parsing. {first_clean}..."

                ch_schema = {
                    "@context": "https://schema.org",
                    "@type": "Chapter",
                    "name": f"Mishnah {t_short} Chapter {ch_num}",
                    "alternateName": f"{t_he} פרק {ch_he_num}",
                    "position": ch_num,
                    "inLanguage": ["he", "en"],
                    "url": ch_url,
                    "isPartOf": {
                        "@type": "Book",
                        "name": f"Mishnah {t_short}",
                        "url": tractate_url
                    }
                }

                # Pre-rendered HTML content for chapter
                m_elements = []
                for m in mishnayot:
                    m_num = m['number']
                    m_he = m.get('hebrewFull', '')
                    m_en = strip_tags(m.get('englishFull', ''))
                    m_full_en = f"{t_short} {ch_num}:{m_num}"
                    m_full_he = f"{t_he_short} {ch_he_num}:{hebrew_numeral(m_num)}"
                    m_url = f"https://mishnah.online/{t_slug}/{ch_num}/{m_num}"

                    m_elements.append(f"""
                    <article id="mishnah-{m_num}" style="margin-bottom:32px;padding-bottom:24px;border-bottom:1px solid #e7e5e4;">
                      <header style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px;">
                        <h2 style="font-size:18px;margin:0;color:#1b2442;">
                          <a href="/{t_slug}/{ch_num}/{m_num}" style="color:#1b2442;text-decoration:none;">
                            <span lang="he" dir="rtl">{m_full_he}</span> &middot; {m_full_en}
                          </a>
                        </h2>
                      </header>
                      <div lang="he" dir="rtl" style="font-family:'Frank Ruhl Libre','David Libre',serif;font-size:24px;line-height:2.0;color:#1c1917;margin-bottom:12px;">
                        {html.escape(m_he)}
                      </div>
                      <div lang="en" style="font-size:15px;line-height:1.6;color:#44403c;">
                        {html.escape(m_en)}
                      </div>
                    </article>
                    """)

                ch_shell = f"""
                <div style="max-width:800px;margin:0 auto;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,serif;">
                  <nav style="font-size:14px;color:#78716c;margin-bottom:20px;">
                    <a href="/" style="color:#b45309;text-decoration:none;">Home</a> &rsaquo; 
                    <a href="/{t_slug}" style="color:#b45309;text-decoration:none;">Mishnah {t_short}</a> &rsaquo; 
                    <span>Chapter {ch_num}</span>
                  </nav>
                  <h1 style="font-size:32px;color:#1b2442;margin-bottom:24px;text-align:center;">
                    <span lang="he" dir="rtl">{t_he} &middot; פרק {ch_he_num}</span>
                    <span style="display:block;font-size:16px;color:#78716c;margin-top:6px;font-weight:normal;">Mishnah {t_short} &middot; Chapter {ch_num}</span>
                  </h1>
                  {"".join(m_elements)}
                </div>
                """

                ch_page = inject_metadata(
                    base_html,
                    title=ch_title_text,
                    description=ch_desc_text,
                    canonical=ch_url,
                    og_url=ch_url,
                    schema_json=ch_schema,
                    content_html=ch_shell
                )
                with open(f"{ch_out_dir}/index.html", 'w', encoding='utf-8') as f:
                    f.write(ch_page)
                total_pages += 1

                # Generate individual Mishnah pages
                for m in mishnayot:
                    m_num = m['number']
                    m_he = m.get('hebrewFull', '')
                    m_en = strip_tags(m.get('englishFull', ''))
                    m_full_en = f"{t_short} {ch_num}:{m_num}"
                    m_full_he = f"{t_he_short} {ch_he_num}:{hebrew_numeral(m_num)}"
                    m_url = f"https://mishnah.online/{t_slug}/{ch_num}/{m_num}"

                    sitemap_urls.append((m_url, "0.7", "monthly"))

                    m_out_dir = f"dist/{t_slug}/{ch_num}/{m_num}"
                    os.makedirs(m_out_dir, exist_ok=True)

                    m_title_text = f"Mishnah {m_full_en} ({m_full_he}) – Word-by-word Study | Mishnah.Online"
                    snip = strip_tags(m_he)[:110]
                    m_desc_text = f"Study Mishnah {m_full_en} in Hebrew and English with roots and word-by-word translations: {snip}..."

                    m_schema = {
                        "@context": "https://schema.org",
                        "@type": ["Article", "LearningResource"],
                        "headline": f"Mishnah {m_full_en} ({m_full_he})",
                        "inLanguage": ["he", "en"],
                        "articleBody": m_en or m_he,
                        "url": m_url,
                        "isPartOf": {
                            "@type": "Chapter",
                            "name": f"Mishnah {t_short} Chapter {ch_num}",
                            "url": ch_url
                        }
                    }

                    words_preview = []
                    for w in m.get('words', [])[:35]:
                        cw = w.get('cleanWord', '')
                        tr = w.get('translation', '')
                        sh = w.get('shoresh', '')
                        sh_badge = f'<span style="color:#b45309;font-size:11px;">[{sh}]</span>' if sh and sh != '—' else ''
                        words_preview.append(f'<span style="display:inline-block;padding:4px 8px;margin:3px;background:#f5f5f4;border-radius:6px;font-size:13px;"><b lang="he" dir="rtl">{cw}</b> &rarr; {tr} {sh_badge}</span>')

                    m_shell = f"""
                    <div style="max-width:800px;margin:0 auto;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,serif;">
                      <nav style="font-size:14px;color:#78716c;margin-bottom:20px;">
                        <a href="/" style="color:#b45309;text-decoration:none;">Home</a> &rsaquo; 
                        <a href="/{t_slug}" style="color:#b45309;text-decoration:none;">Mishnah {t_short}</a> &rsaquo; 
                        <a href="/{t_slug}/{ch_num}" style="color:#b45309;text-decoration:none;">Chapter {ch_num}</a> &rsaquo; 
                        <span>Mishnah {m_num}</span>
                      </nav>
                      <article id="mishnah-{m_num}" style="margin-bottom:32px;">
                        <header style="margin-bottom:16px;">
                          <h1 style="font-size:28px;color:#1b2442;margin:0;">
                            <span lang="he" dir="rtl">{m_full_he}</span> &middot; {m_full_en}
                          </h1>
                        </header>
                        <div lang="he" dir="rtl" style="font-family:'Frank Ruhl Libre','David Libre',serif;font-size:26px;line-height:2.2;color:#1c1917;margin-bottom:16px;padding:20px;background:#fff;border-radius:12px;border:1px solid #e7e5e4;">
                          {html.escape(m_he)}
                        </div>
                        <div lang="en" style="font-size:16px;line-height:1.7;color:#292524;margin-bottom:24px;padding:20px;background:#fff;border-radius:12px;border:1px solid #e7e5e4;">
                          {html.escape(m_en)}
                        </div>
                        <h3 style="font-size:15px;color:#57534e;margin-bottom:10px;">Word-by-word Breakdown (מילים ושרשים)</h3>
                        <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:30px;">
                          {"".join(words_preview)}
                        </div>
                      </article>
                    </div>
                    """

                    m_page = inject_metadata(
                        base_html,
                        title=m_title_text,
                        description=m_desc_text,
                        canonical=m_url,
                        og_url=m_url,
                        schema_json=m_schema,
                        content_html=m_shell
                    )
                    with open(f"{m_out_dir}/index.html", 'w', encoding='utf-8') as f:
                        f.write(m_page)
                    total_pages += 1

    print(f"Generated {total_pages} pre-rendered HTML pages!")

    # Write Sitemap
    print(f"Generating sitemap with {len(sitemap_urls)} URLs...")
    xml_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ]
    today = time.strftime('%Y-%m-%d')
    for url, prio, freq in sitemap_urls:
        xml_lines.append(f'  <url>')
        xml_lines.append(f'    <loc>{escape_xml(url)}</loc>')
        xml_lines.append(f'    <lastmod>{today}</lastmod>')
        xml_lines.append(f'    <changefreq>{freq}</changefreq>')
        xml_lines.append(f'    <priority>{prio}</priority>')
        xml_lines.append(f'  </url>')
    xml_lines.append('</urlset>')

    sitemap_content = "\n".join(xml_lines)
    with open('public/sitemap.xml', 'w', encoding='utf-8') as f:
        f.write(sitemap_content)
    with open('dist/sitemap.xml', 'w', encoding='utf-8') as f:
        f.write(sitemap_content)
    print("Sitemap written to public/sitemap.xml and dist/sitemap.xml")

    # Ensure robots.txt in dist
    if os.path.exists('public/robots.txt'):
        with open('public/robots.txt', 'r', encoding='utf-8') as f:
            rob = f.read()
        with open('dist/robots.txt', 'w', encoding='utf-8') as f:
            f.write(rob)

    elapsed = time.time() - start_time
    print(f"Prerender and sitemap completed in {elapsed:.2f} seconds.")

def inject_metadata(html_str: str, title: str, description: str, canonical: str, og_url: str, schema_json: dict, content_html: str) -> str:
    # Title
    html_str = re.sub(r'<title>.*?</title>', f'<title>{html.escape(title)}</title>', html_str, count=1)
    
    # Meta description
    html_str = re.sub(r'<meta name="description" content=".*?"\s*/>', f'<meta name="description" content="{html.escape(description)}" />', html_str, count=1)
    
    # Canonical
    html_str = re.sub(r'<link rel="canonical" href=".*?"\s*/>', f'<link rel="canonical" href="{canonical}" />', html_str, count=1)

    # Open Graph Title, Description, URL
    html_str = re.sub(r'<meta property="og:title" content=".*?"\s*/>', f'<meta property="og:title" content="{html.escape(title)}" />', html_str, count=1)
    html_str = re.sub(r'<meta property="og:description" content=".*?"\s*/>', f'<meta property="og:description" content="{html.escape(description)}" />', html_str, count=1)
    html_str = re.sub(r'<meta property="og:url" content=".*?"\s*/>', f'<meta property="og:url" content="{og_url}" />', html_str, count=1)

    # Twitter Title, Description, URL
    html_str = re.sub(r'<meta name="twitter:title" content=".*?"\s*/>', f'<meta name="twitter:title" content="{html.escape(title)}" />', html_str, count=1)
    html_str = re.sub(r'<meta name="twitter:description" content=".*?"\s*/>', f'<meta name="twitter:description" content="{html.escape(description)}" />', html_str, count=1)
    html_str = re.sub(r'<meta name="twitter:url" content=".*?"\s*/>', f'<meta name="twitter:url" content="{og_url}" />', html_str, count=1)

    # JSON-LD Schema
    schema_str = json.dumps(schema_json, ensure_ascii=False, indent=2)
    schema_tag = f'<script type="application/ld+json">\n{schema_str}\n    </script>'
    html_str = re.sub(r'<script type="application/ld\+json">.*?</script>', schema_tag, html_str, count=1, flags=re.DOTALL)

    # Inject static body shell into <div id="root">
    html_str = html_str.replace('<div id="root"></div>', f'<div id="root">{content_html}</div>', 1)

    return html_str

if __name__ == '__main__':
    build_prerender()
