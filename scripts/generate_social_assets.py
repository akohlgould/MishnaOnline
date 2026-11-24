import os
import subprocess
from PIL import Image

def generate_assets():
    os.makedirs('public', exist_ok=True)
    temp_dir = '/tmp/mishnah_assets'
    os.makedirs(temp_dir, exist_ok=True)

    # 1. HTML for OG Image (1200x630)
    og_html_path = os.path.join(temp_dir, 'og_card.html')
    og_output_path = 'public/og-image.png'

    og_html = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    width: 1200px;
    height: 630px;
    background-color: #FAF7F2;
    background-image: 
      radial-gradient(at 0% 0%, rgba(217, 119, 6, 0.05) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(27, 36, 66, 0.05) 0px, transparent 50%);
    font-family: 'Inter', -apple-system, sans-serif;
    color: #1C1917;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 64px 80px;
    overflow: hidden;
    position: relative;
    border: 1px solid #E7E0D3;
  }

  /* Decorative inner frame */
  .inner-frame {
    position: absolute;
    inset: 20px;
    border: 1px solid rgba(27, 36, 66, 0.08);
    border-radius: 20px;
    pointer-events: none;
  }
  
  .corner-accent {
    position: absolute;
    width: 24px;
    height: 24px;
    border: 2px solid #B45309;
    pointer-events: none;
  }
  .top-left { top: 24px; left: 24px; border-right: none; border-bottom: none; border-radius: 4px 0 0 0; }
  .top-right { top: 24px; right: 24px; border-left: none; border-bottom: none; border-radius: 0 4px 0 0; }
  .bottom-left { bottom: 24px; left: 24px; border-right: none; border-top: none; border-radius: 0 0 0 4px; }
  .bottom-right { bottom: 24px; right: 24px; border-left: none; border-top: none; border-radius: 0 0 4px 0; }

  /* Top Bar */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }

  .brand-group {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .emblem-container {
    width: 68px;
    height: 68px;
    background: #1B2442;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 14px rgba(27, 36, 66, 0.2);
  }

  .brand-text {
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 38px;
    font-weight: 800;
    color: #1B2442;
    letter-spacing: -0.5px;
    display: flex;
    align-items: baseline;
    gap: 2px;
  }

  .brand-domain {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #B45309;
  }

  .badge-hebrew {
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 22px;
    font-weight: 700;
    color: #78716C;
    direction: rtl;
    background: rgba(27, 36, 66, 0.04);
    padding: 8px 18px;
    border-radius: 100px;
    border: 1px solid rgba(27, 36, 66, 0.08);
  }

  /* Center Content */
  .center-content {
    margin-top: 20px;
    margin-bottom: 24px;
    z-index: 2;
  }

  .title-hebrew {
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 32px;
    font-weight: 700;
    color: #B45309;
    direction: rtl;
    margin-bottom: 12px;
  }

  .tagline {
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 46px;
    font-weight: 800;
    line-height: 1.15;
    color: #1C1917;
    max-width: 980px;
    letter-spacing: -0.5px;
  }

  .subtitle {
    margin-top: 14px;
    font-size: 21px;
    line-height: 1.4;
    color: #57534E;
    max-width: 860px;
    font-weight: 400;
  }

  /* Feature Pills */
  .features-row {
    display: flex;
    align-items: center;
    gap: 14px;
    z-index: 2;
  }

  .feature-pill {
    background: #FFFFFF;
    border: 1px solid #E7E0D3;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
    border-radius: 12px;
    padding: 10px 18px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-weight: 600;
    color: #292524;
  }

  .pill-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #B45309;
  }

  /* Footer bar */
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 18px;
    border-top: 1px solid #E7E0D3;
    z-index: 2;
  }

  .footer-url {
    font-size: 16px;
    font-weight: 600;
    color: #1B2442;
    letter-spacing: 0.5px;
  }

  .footer-meta {
    font-size: 15px;
    font-weight: 500;
    color: #78716C;
  }
</style>
</head>
<body>
  <div class="inner-frame"></div>
  <div class="corner-accent top-left"></div>
  <div class="corner-accent top-right"></div>
  <div class="corner-accent bottom-left"></div>
  <div class="corner-accent bottom-right"></div>

  <!-- Header -->
  <div class="header">
    <div class="brand-group">
      <div class="emblem-container">
        <!-- Exact Emblem in Ivory on Navy -->
        <svg viewBox="30 57 140 102" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#FAF7F2" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 -3)">
            <path d="M54 140 V68 L100 116 L146 68 V140"/>
            <path d="M42 152 C68 144 88 146 100 154 C112 146 132 144 158 152"/>
          </g>
        </svg>
      </div>
      <div class="brand-text">
        Mishnah<span class="brand-domain">.online</span>
      </div>
    </div>
    <div class="badge-hebrew">
      ששת סדרי משנה
    </div>
  </div>

  <!-- Center Tagline -->
  <div class="center-content">
    <div class="title-hebrew">
      לימוד משנה מדויק מילה במילה
    </div>
    <h1 class="tagline">
      Word-by-word Mishnah study with translation and roots
    </h1>
    <p class="subtitle">
      Explore every word with contextual translations, grammatical parsing, roots (shoreshem), and instant interlinear breakdown across the entire Shas.
    </p>
  </div>

  <!-- Feature Pills -->
  <div class="features-row">
    <div class="feature-pill">
      <div class="pill-dot"></div>
      Word-by-Word Definitions
    </div>
    <div class="feature-pill">
      <div class="pill-dot"></div>
      Hebrew Roots (Shoreshem)
    </div>
    <div class="feature-pill">
      <div class="pill-dot"></div>
      Grammatical Parsing
    </div>
    <div class="feature-pill">
      <div class="pill-dot"></div>
      All 63 Tractates & 524 Chapters
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    <div class="footer-url">
      https://mishnah.online
    </div>
    <div class="footer-meta">
      Free & Open Digital Study Tool · Powered by Sefaria Corpus
    </div>
  </div>
</body>
</html>
"""

    with open(og_html_path, 'w', encoding='utf-8') as f:
        f.write(og_html)

    print("Rendering 1200x630 OG image with Chrome headless...")
    cmd = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "--headless",
        f"--screenshot={og_output_path}",
        "--window-size=1200,630",
        "--hide-scrollbars",
        f"file://{og_html_path}"
    ]
    subprocess.run(cmd, check=True)
    print("Rendered:", og_output_path)

    # 2. HTML for High-Res App Icon (512x512)
    icon_html_path = os.path.join(temp_dir, 'icon.html')
    icon_512_path = os.path.join(temp_dir, 'icon_512.png')

    icon_html = """<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 512px;
    height: 512px;
    background: #1B2442;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
</style>
</head>
<body>
  <svg viewBox="30 57 140 102" width="380" height="380" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#FAF7F2" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 -3)">
      <path d="M54 140 V68 L100 116 L146 68 V140"/>
      <path d="M42 152 C68 144 88 146 100 154 C112 146 132 144 158 152"/>
    </g>
  </svg>
</body>
</html>
"""
    with open(icon_html_path, 'w', encoding='utf-8') as f:
        f.write(icon_html)

    print("Rendering 512x512 icon with Chrome headless...")
    cmd = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "--headless",
        f"--screenshot={icon_512_path}",
        "--window-size=512,512",
        "--hide-scrollbars",
        f"file://{icon_html_path}"
    ]
    subprocess.run(cmd, check=True)

    # Generate icons from icon_512.png using Pillow
    base_img = Image.open(icon_512_path).convert("RGBA")

    # 512x512 manifest icon
    base_img.save("public/manifest-icon-512.png", "PNG")
    print("Saved public/manifest-icon-512.png")

    # 192x192 manifest icon
    icon_192 = base_img.resize((192, 192), Image.Resampling.LANCZOS)
    icon_192.save("public/manifest-icon-192.png", "PNG")
    print("Saved public/manifest-icon-192.png")

    # 180x180 apple-touch-icon
    apple_icon = base_img.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save("public/apple-touch-icon.png", "PNG")
    print("Saved public/apple-touch-icon.png")

    # 32x32 favicon
    fav_32 = base_img.resize((32, 32), Image.Resampling.LANCZOS)
    fav_32.save("public/favicon-32x32.png", "PNG")
    print("Saved public/favicon-32x32.png")

    # 16x16 favicon
    fav_16 = base_img.resize((16, 16), Image.Resampling.LANCZOS)
    fav_16.save("public/favicon-16x16.png", "PNG")
    print("Saved public/favicon-16x16.png")

    # Multi-resolution favicon.ico
    fav_48 = base_img.resize((48, 48), Image.Resampling.LANCZOS)
    base_img.save("public/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print("Saved public/favicon.ico")

    # Also make sure public/favicon.svg exists
    svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="30 57 140 102">
  <g fill="none" stroke="#1B2442" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 -3)">
    <path d="M54 140 V68 L100 116 L146 68 V140"/>
    <path d="M42 152 C68 144 88 146 100 154 C112 146 132 144 158 152"/>
  </g>
</svg>
"""
    with open("public/favicon.svg", "w", encoding="utf-8") as f:
        f.write(svg_content)
    print("Saved public/favicon.svg")

if __name__ == '__main__':
    generate_assets()
