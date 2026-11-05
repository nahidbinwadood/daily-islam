"""Build the full research report PDF from docs/research/*.md.

Run from anywhere:  python docs/research/_pdf/build_pdf.py
Renders HTML with headless Chrome (needed for correct Bangla shaping), then
does a second pass to write real page numbers into the table of contents.
"""
import html
import re
import subprocess
import sys
from pathlib import Path

import markdown
from markdown.extensions.toc import slugify_unicode
from pypdf import PdfReader

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent  # docs/research
OUT_PDF = ROOT / "Bangladesh-Islamic-Web-Research-Report.pdf"
OUT_HTML = HERE / "report.html"
CHROME = next(p for p in [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
] if Path(p).exists())

CHAPTERS = [  # (key, file, part label)
    ("summary", "README.md", "Executive summary"),
    ("01", "01-bangladesh-islamic-digital-market.md", "Chapter 1"),
    ("02", "02-top-islamic-websites-bangladesh.md", "Chapter 2"),
    ("03", "03-bangladesh-keyword-research.md", "Chapter 3"),
    ("04", "04-user-search-intent-and-behavior.md", "Chapter 4"),
    ("05", "05-competitor-feature-analysis.md", "Chapter 5"),
    ("06", "06-bangladesh-specific-user-needs.md", "Chapter 6"),
    ("07", "07-content-and-feature-gaps.md", "Chapter 7"),
    ("08", "08-seasonal-search-trends.md", "Chapter 8"),
    ("09", "09-product-opportunities-and-priorities.md", "Chapter 9"),
    ("10", "10-research-methodology-and-sources.md", "Chapter 10"),
]
FILE_TO_KEY = {f: k for k, f, _ in CHAPTERS}


def explainers():
    parts = re.split(r"<!-- section: (\w+) -->", (HERE / "explainers.md").read_text("utf-8"))
    return {parts[i]: parts[i + 1].strip() for i in range(1, len(parts), 2)}


def to_html(md_text, key):
    """Markdown -> HTML with heading ids prefixed by chapter key, and cross-file links rewritten."""
    def slug(value, sep):
        return f"{key}-{slugify_unicode(value, sep)}"

    def relink(m):
        target = m.group(2)
        file, _, anchor = target.partition("#")
        if file in FILE_TO_KEY:
            k = FILE_TO_KEY[file]
            return f"{m.group(1)}(#{k}-{anchor})" if anchor else f"{m.group(1)}(#ch-{k})"
        if not file and anchor:  # same-file anchor
            return f"{m.group(1)}(#{key}-{anchor})"
        if file and not re.match(r"[a-z]+:", file):  # local file (csv, raw data): resolve next to PDF
            return f"{m.group(1)}({target})"
        return m.group(0)

    md_text = re.sub(r"(\[[^\]]*\])\(([^)\s]+)\)", relink, md_text)
    md = markdown.Markdown(extensions=["tables", "fenced_code", "sane_lists", "toc"],
                           extension_configs={"toc": {"slugify": slug, "toc_depth": "1-3"}})
    body = md.convert(md_text)
    return body, md.toc_tokens


def classify_tables(body):
    """Shrink wide tables so they fit A4 portrait."""
    def repl(m):
        tbl = m.group(0)
        head = re.search(r"<tr>(.*?)</tr>", tbl, re.S)
        cols = head.group(1).count("<th") if head else 0
        cls = "w-xl" if cols >= 12 else "w-l" if cols >= 8 else "w-m" if cols >= 5 else ""
        tbl = tbl.replace("<table>", f'<table class="{cls}">', 1)
        return f'<div class="wide">{tbl}</div>' if cls == "w-xl" else tbl
    return re.sub(r"<table>.*?</table>", repl, body, flags=re.S)


def build_html(page_map=None):
    ex = explainers()
    page_map = page_map or {}
    toc_rows, sections = [], []

    def toc_line(level, anchor, text, find=None):
        pg = page_map.get(anchor, "")
        f = html.escape(find or text, quote=True)
        toc_rows.append(f'<li class="l{level}" data-f="{f}"><a href="#{anchor}"><span class="t">{text}</span>'
                        f'<span class="dots"></span><span class="p">{pg}</span></a></li>')

    # Front matter written for this PDF: reading guide + glossary
    for key in ("guide", "glossary"):
        body, toks = to_html(ex[key], key)
        anchor = f"ch-{key}"
        title = toks[0]["name"] if toks else key
        toc_line(1, anchor, title, f"Before you start {title}")
        for t in (toks[0]["children"] if toks else []):
            if key == "guide":
                toc_line(2, t["id"], t["name"])
        body = re.sub(r"<h1[^>]*>.*?</h1>", "", body, count=1, flags=re.S)
        sections.append(f'<section class="chapter front" id="{anchor}">'
                        f'<div class="kicker">Before you start</div><h1 class="ch-title">{title}</h1>{classify_tables(body)}</section>')

    for key, fname, label in CHAPTERS:
        text = (ROOT / fname).read_text("utf-8")
        body, toks = to_html(text, key)
        h1 = toks[0]["name"] if toks else fname
        title = "Executive summary and strategic answers" if key == "summary" else h1
        anchor = f"ch-{key}"
        toc_line(1, anchor, f"{label}: {title}" if key != "summary" else title, f"{label} {title}")
        for t in (toks[0]["children"] if toks else []):
            if t["name"].lower().startswith(("key findings",)):
                continue
            toc_line(2, t["id"], t["name"])
        body = re.sub(r"<h1[^>]*>.*?</h1>", "", body, count=1, flags=re.S)
        box = markdown.markdown(ex.get(key, ""), extensions=["tables"])
        sections.append(
            f'<section class="chapter" id="{anchor}"><div class="kicker">{label}</div>'
            f'<h1 class="ch-title">{title}</h1>'
            f'<aside class="explainer"><div class="ex-head">About this chapter</div>{box}</aside>'
            f'{classify_tables(body)}</section>')

    css = (HERE / "style.css").read_text("utf-8")
    cover = f"""
<section class="cover">
  <div class="cover-top">Research report · Bangladesh · November 2026</div>
  <h1>What Bangladeshi Muslims want from Islamic websites</h1>
  <p class="sub">Websites they use, what they search for in Bangla, English and Banglish, what they value,
  what is missing, and what a new Bangladesh-focused Islamic web platform should prioritise.</p>
  <dl class="meta">
    <dt>Research date</dt><dd>5 November 2026</dd>
    <dt>Scope</dt><dd>Bangladesh only · web search, websites, Google Play reviews, seasonal demand</dd>
    <dt>Evidence base</dt><dd>934 search queries · 16 audited websites · 11,671 app reviews · 5 years of Google Trends</dd>
    <dt>Prepared for</dt><dd>Product team, Daily Islam project</dd>
  </dl>
  <p class="caveat"><b>Read this first.</b> Every traffic and search-volume number in this report is a third-party
  estimate, not first-party analytics. Google Trends figures are relative ratios, not counts. Autocomplete
  suggestions prove a query exists, not how often it is searched. See “How to read this report”.</p>
</section>"""
    toc = f'<section class="toc"><h1 class="ch-title">Contents</h1><ol>{"".join(toc_rows)}</ol></section>'
    return f"""<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<title>Bangladesh Islamic Web — Research Report (Nov 2026)</title><style>{css}</style></head>
<body>{cover}{toc}{"".join(sections)}</body></html>"""


def render():
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                    "--generate-pdf-document-outline", f"--print-to-pdf={OUT_PDF}",
                    OUT_HTML.as_uri()], check=True, capture_output=True, timeout=300)


def find_pages(html_doc):
    """Map each TOC anchor to the PDF page whose text contains its heading."""
    norm = lambda s: re.sub(r"[^a-z0-9]", "", s.lower())
    pages = [norm(p.extract_text() or "") for p in PdfReader(OUT_PDF).pages]
    # body starts at the first page carrying the front-matter kicker (skips cover + TOC pages)
    start = next(i for i, p in enumerate(pages) if "beforeyoustart" in p)
    result = {}
    for find, anchor in re.findall(r'data-f="([^"]*)"><a href="#([^"]+)"', html_doc):
        needle = norm(html.unescape(re.sub(r"<[^>]+>", "", html.unescape(find))))[:48]
        if not needle:
            continue
        for i in range(start, len(pages)):
            if needle in pages[i]:
                result[anchor] = i + 1
                start = i  # headings appear in order
                break
    return result


if __name__ == "__main__":
    OUT_HTML.write_text(build_html(), "utf-8")
    render()
    first = build_html(find_pages(OUT_HTML.read_text("utf-8")))
    OUT_HTML.write_text(first, "utf-8")
    render()  # TOC length is unchanged, so page numbers stay valid
    n = len(PdfReader(OUT_PDF).pages)
    print(f"{OUT_PDF} — {n} pages", file=sys.stderr)
