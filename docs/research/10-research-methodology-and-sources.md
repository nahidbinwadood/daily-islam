# How this research was built, and where it breaks

**Key findings**

- **Six workstreams ran in parallel on 2026-11-05.** They built on an app-market study completed the day before (from earlier research, Nov 4 2026). The six were:
  - top websites and market;
  - competitor feature audit;
  - user voice and Bangladesh requirements;
  - seasonal search trends;
  - Quran/hadith/dua keywords;
  - namaz/Q&A/Ramadan/learning/lifestyle keywords.
- **What worked:** Google Trends' widget API, Google Autocomplete (712 + 267 seed queries with no failures), Similarweb and Ahrefs free pages, a headless browser audit, and a direct Google Play scrape. The scrape yielded **11,671 reviews of 22 apps**.
- **What was blocked:** Semrush and Google Keyword Planner keyword data (login required), PageSpeed Insights (HTTP 429), Reddit (domain blocked to tools), Google search after 6 automated queries (CAPTCHA), DuckDuckGo after 2 queries, and several Trends sets (HTTP 429).
- **No exact search volumes exist anywhere in this research.** The only "measured_volume" rows are **Ahrefs modelled buckets** (<100, >100, >1,000, >10,000) for 136 keywords. Everything else is relative (Trends), existence-only (Autocomplete), observational (search results pages, the audit) or qualitative (reviews).
- **Some search results pages came from a signed-in Chrome session in Bangladesh.** Those 34 Google results pages may be personalised. Six others came from an automated Bangladesh-IP browser, and the audit's ranking checks came from a non-Bangladesh IP.
- **About 20 evidence conflicts are logged below.** The largest:
  - traffic tools disagreeing by 2–3× on the same site;
  - DataReportal's 82.8M users vs BTRC's 135.94M subscriptions;
  - StatCounter's desktop majority vs ~89% mobile subscriptions;
  - Trends decline vs Ahrefs growth;
  - sites disagreeing on Asr, Hijri and Bangla dates;
  - the IF district-time method.
- **The raw data is preserved in `docs/research/data/`:** `keyword-database.csv` (934 rows) and 16 raw files covering autocomplete, Trends, search results and Play reviews. It can be re-analysed without re-scraping.

---

## Research question, plan and phases

The question was: *what do Bangladeshi Muslims want from Islamic websites?* That breaks into which sites they use, what they search for, which features they value, and which problems remain unsolved. The aim is to plan a Bangladesh-focused Islamic web platform. The work ran in four phases.

**Phase 0, prior work (from earlier research, Nov 4 2026).** An app-market study covered Bangladeshi and global Islamic apps, user sentiment, market gaps, and web platforms and data. It is stored as `reports/Islamic apps Bangladesh market.md` with notes in `research_notes/Islamic apps Bangladesh market/`. Its limitation was that review evidence was "a small, mostly iOS sample". That prompted the Play scrape in Phase 1. Where Phase 1 notes disagree with Phase 0, Phase 1 wins. Phase 0 figures reused in the reports are labelled "from earlier research, Nov 4 2026".

**Phase 1, six parallel workstreams (2026-11-05).** Each produced a notes file in `research_notes/Bangladesh Islamic web search demand/`:

| Workstream | Notes file | Main methods | Main outputs |
|---|---|---|---|
| Top websites and market | `top_websites_and_market.md` | Similarweb and Ahrefs free pages; DataReportal, BTRC (via news), BBS, StatCounter | Ranking of 11 Bangla sites and 2 global benchmarks; market context |
| Competitor feature audit | `competitor_feature_audit.md` | curl, WebFetch, headless Chromium (390×844), API calls | 33-feature × 14-site matrix; search, Asr and Hijri tests |
| User voice and BD requirements | `user_voice_and_bd_requirements.md` | `google-play-scraper` v1.2.7 (BD storefront); news and academic sources | 11,671 reviews; theme counts; quotes |
| Seasonal search trends | `seasonal_search_trends.md` | Trends widget API (5-year weekly, 90-day daily); Autocomplete; national media for dates; Ahrefs site history | Seasonal calendar; 2026 actual and 2027 planning dates |
| Keywords: Quran, hadith, dua | `keywords_quran_hadith_dua.md` + `.csv` (352 rows) | Ahrefs keyword generator (30 seeds); Trends; Autocomplete (175 Bangla + 92 English seeds; 12 YouTube seeds); Google (6), Bing (16) and DDG (2) results pages | Volume buckets; spelling variants; results-page quality checks |
| Keywords: namaz, Q&A, Ramadan, learning, lifestyle | `keywords_namaz_qa_ramadan_learning_lifestyle.md` + `.csv` (582 rows) | Autocomplete (712 seeds, 2 rounds); Trends 12-month (some sets blocked); 34 Google results pages in a signed-in Chrome | Query templates; relative demand; results-page fragmentation |

**Phase 2, consolidation.** The two keyword CSVs were merged into `docs/research/data/keyword-database.csv`, and raw scratch outputs were copied into `docs/research/data/raw/`. Details are under "Raw data files" below.

**Phase 3, synthesis.** The notes were turned into the numbered reports (01–10) and a README. This file documents the method. The market overview, site ranking, feature analysis and user needs are in [01](01-bangladesh-islamic-digital-market.md), [02](02-top-islamic-websites-bangladesh.md), [05](05-competitor-feature-analysis.md) and [06](06-bangladesh-specific-user-needs.md). Search demand is in [keyword research](03-bangladesh-keyword-research.md), with [search intent](04-user-search-intent-and-behavior.md), [content and feature gaps](07-content-and-feature-gaps.md) and [seasonal trends](08-seasonal-search-trends.md) in their own reports.

## Tools used, and what each could and could not do

| Tool | Used for | Outcome | Consequence |
|---|---|---|---|
| **Similarweb free pages** | Visits, BD share, BD rank, top channel, keywords, competitors | **Partial.** Worked for 13 domains plus prothomalo.com. Top pages and the full channel split are paywalled. Traffic-source percentages are **desktop-only**. The "Total Visits" label is ambiguous (1 month vs 3 months). The BD Faith & Beliefs category page returned **404**. In the seasonal workstream, curl to similarweb.com/website/ihadis.com/ returned **HTTP 202 with an empty body** | Rank order is usable; absolute volumes are ±2–3× |
| **Ahrefs free pages** (ahrefstop.com, ahrefs.com/websites) | Organic traffic, BD organic share, keyword positions, monthly history | Worked for muslimbangla, hadithbd, ihadis and islamhouse | Organic only; modelled |
| **Ahrefs Free Keyword Generator** (country=bd) | Volume buckets and difficulty (KD) for about the first 10 ideas per seed | Worked for 28 of 30 seeds; "dua" and "dua for" returned no rows | The only volume data available; buckets, not counts |
| **Semrush** | Site overview | One muslimbangla.com page (September 2026, 2.05M) plus an older Polish-locale snapshot; keyword data **login-gated** | Conflicts with Similarweb |
| **Google Keyword Planner, Ubersuggest, keywordtool.io** | Exact volumes | **Login required or rendered client-side**; not obtained | No exact volumes anywhere |
| **Google Trends** (explore → widgetdata/multiline API) | Relative interest, geo=BD | **Worked.** 5-year weekly, 12-month weekly and 90-day daily pulls succeeded. The homepage returned 429. In the namaz workstream, sets g4 (Islamic vs English names), g6 (Hajj package / Umrah / registration), g13, g14 and g15 failed with **HTTP 429** | Relative only; small terms round to 0 |
| **Google Autocomplete** (suggestqueries, gl=bd) | Which queries exist | **Worked.** 712 seeds with 0 failures (namaz workstream); 175 Bangla + 92 English seeds (Quran/hadith/dua workstream); 12 YouTube seeds (ds=yt) | Existence, not volume; one IP, one day |
| **Google results pages** | Who ranks; AI answers; YouTube blocks; People Also Ask | Quran/hadith/dua workstream: **6 queries, then CAPTCHA**. Namaz workstream: **34 queries in the user's own Chrome in Bangladesh, signed in, so possibly personalised**. Feature audit: headless browser with `gl=bd&hl=bn` but a **non-BD client IP** | Small, non-rank-tracked sample |
| **Bing** (cc=BD) | Proxy for Google rankings; page-quality checks | 16 results pages parsed in one workstream; **returned nothing parseable** in the other | A proxy, not Google |
| **DuckDuckGo** (kl=bd-en) | Cross-engine check | **2 queries, then blocked (HTTP 403)** in both workstreams | Minimal |
| **PageSpeed Insights API** | Mobile performance scores | **HTTP 429**, daily quota exceeded for the unauthenticated key | No PSI/LCP scores; headless LCP used as a rough proxy only |
| **Headless Chromium** (Playwright, 390×844) | Feature audit; rendering Cloudflare-protected sites | Worked. The browser was shared with another agent; **one navigation was hijacked and discarded**, and other results were checked against `location.href` | Reliable for presence and absence of features |
| **curl / WebFetch** | Fetching pages | hadithbd (Cloudflare challenge) and sunnah.com returned 403 to WebFetch; the IF site has a broken TLS chain; Jugantor and Daily Sun pages returned 403 | Some facts rest on search snippets (flagged) |
| **google-play-scraper** v1.2.7 | Play reviews (country=bd; lang bn and en; NEWEST and MOST_RELEVANT sorts) | **Worked.** Up to ~650 unique reviews per app; 11,671 in total | The main user-voice source |
| **Reddit** | User discussion | **Blocked** ("domains not accessible" from WebSearch and WebFetch) | No Reddit evidence |
| **Facebook groups, YouTube comments** | User discussion | Not publicly retrievable | The biggest gap in the user voice |
| **WebSearch** | Locating sources | US-geolocated | Not used for Bangladesh rankings |

## Evidence taxonomy

Every keyword row and every claim in the reports belongs to one of these classes. The first four are the `evidence_type` values in `keyword-database.csv`.

| Evidence type | Rows in keyword DB | Source | What it means | What it does **not** mean |
|---|---|---|---|---|
| `measured_volume` | 136 | Ahrefs Free Keyword Generator, Google, country=BD | A **third-party modelled** monthly volume **bucket** (<100 / >100 / >1,000 / >10,000), with KD (Easy/Medium/Hard) for ~100 rows | Not exact volume; not Google data. "Measured" is the label used in the CSV; the figure is modelled |
| `trends_relative` | 157 | Google Trends, geo=BD, anchored to "নামাজের সময়" (prayer time) | Relative interest; a ratio to the anchor (52-week mean or 5-year median) | Not volume. Exact phrase only. Small terms round to 0 |
| `observed_suggestion` | 594 | Google and YouTube Autocomplete, gl=bd | The query exists and is common enough to be suggested in Bangladesh | No volume. Personalised and IP-sensitive |
| `serp_observation` | 47 | Google, Bing or DDG results pages | Who ranks; which results-page features appear; heuristic page checks | Not a rank audit. Bing is a proxy |
| **qualitative: genuine user text** | — | Verbatim Play reviews | A real user said this | Not representative; location unverified |
| **qualitative: secondary** | — | News, industry and academic reports | The cited outlet reported this | Not independently verified by us |
| **own data** | — | Our counts over the review corpus | Keyword-matched theme frequencies | Indicative only |
| **modelled traffic** | — | Similarweb, Ahrefs, Semrush site estimates | Third-party model output | Not analytics |
| **direct observation** | — | The feature audit | Seen on the page on 2026-11-05 | Absence is "not found", not proof of absence |
| **inference** | — | Researcher or writer reasoning | Labelled as inferred in every report | Not evidence |

Ahrefs **site pages** (ahrefstop.com) show exact-looking per-keyword volumes, for example 37K for নামাজের সময়সূচি (prayer schedule). These are also **model outputs**, and they are more granular than the keyword generator's buckets. The reports cite them as Ahrefs estimates, never as Google counts.

## Confidence levels

- **High:** a primary or official source, or two independent sources agreeing. Examples: the census Muslim share, Eid dates, features directly observed on a page, a verbatim review quote.
- **Medium:** a single reputable secondary source or a single modelled tool, used for direction or order. Examples: Similarweb rank order, Ahrefs buckets, Trends direction.
- **Low:** a single modelled figure with known conflicts, a search snippet, a low-authority source, or a tiny sample. Examples: absolute visits, salat.habibur.com's geography, the Deshrupantor iftar times.
- **Inference:** reasoning from evidence. It is always labelled and never presented as a finding.

## Conflicting evidence

| # | Conflict | Side A | Side B | Resolution used in the reports |
|---|---|---|---|---|
| 1 | Similarweb "Total Visits" period | Single month (Sept 2026) | Three-month total | Treated as one month; divide by 3 if wrong ([02](02-top-islamic-websites-bangladesh.md)) |
| 2 | muslimbangla.com volume | SW 958.2K total; ~508K implied organic | Ahrefs 255.5K organic; Semrush 2.05M total (+143% m/m); Semrush Nov 2025 ~142.9K | Rank used; volume flagged Medium |
| 3 | hadithbd.com organic | SW-implied ~467K | Ahrefs 183K | As above |
| 4 | ihadis.com | SW total 206.7K, 46.84% BD | Ahrefs organic 405K, 36% BD, Turkey spike | Medium-Low; Ahrefs likely inflated by a non-Bangla keyword spike |
| 5 | hadithbd bounce rate | 71.81% (SW, April 2026; earlier research) | 47.36% (SW, now) | Unresolved: methodology or real change |
| 6 | Top-site organic | Earlier research: "~255K each" for hadithbd and muslimbangla | Now 183K and 255.5K | Newer notes win |
| 7 | Internet reach | DataReportal 82.8M users (47%) | BTRC 135.94M subscriptions; BBS 59.2% individual use (earlier research) | People vs SIMs; 82.8M used for audience ([01](01-bangladesh-islamic-digital-market.md)) |
| 8 | Device mix | StatCounter desktop 56.04% | BTRC ~89% mobile subscriptions; Android ~91% | StatCounter treated as an artefact |
| 9 | Search trend | Trends: most terms −30 to −60% (2023→2026) | Ahrefs: muslimbangla organic ~12× growth (Mar 2023→Mar 2026) | Both reported; concentration or model difference |
| 10 | District time derivation | ±9 min from Dhaka (Ittefaq 2026); +11/−10 (2021–23) | IF calls the offset method "baseless" and publishes per-district schedules (Jugantor snippet; page 403) | Unresolved; verify against an IF document |
| 11 | Asr, Dhaka, 5 Nov 2026 | ihadis 2:54 PM | muslimbangla and salat.habibur 3:41–3:42 PM | Shafi'i vs Hanafi; both reported ([05](05-competitor-feature-analysis.md)) |
| 12 | Hijri, 5 Nov 2026 | BD sites: 24 Jumada al-Awwal | islamqa: 25 | Consistent with the BD one-day lag |
| 13 | Bangla date, 5 Nov 2026 | ihadis: 21 Kartik | muslimbangla: 20 Kartik | 20 likely correct under the revised calendar; not officially verified |
| 14 | Data price, 2023 | $0.23/GB | $0.70/GB | Unresolved (search snippets); 2024 BDT 25–35/GB used |
| 15 | Women's mobile internet adoption | 24% (GSMA 2024 via Dhaka Tribune) | 26% (later comparison) | Both reported |
| 16 | Mobile speed | 23.85–28.26 Mbps (Ookla 2024–25 news) | 41.72 (Nov 2025 snippet); 36.84 (DataReportal) | Range reported |
| 17 | Small-term demand | Trends: সকাল সন্ধ্যার দোয়া (morning/evening dua) ≈ 0× anchor | Ahrefs: সকাল সন্ধ্যার দোয়া ও জিকির (… and zikir) >1,000/month | A Trends resolution limit, not a contradiction |
| 18 | Tool access | Similarweb pages fetched (top-websites workstream); Bing parsed 16 results pages | Similarweb HTTP 202 empty (seasonal workstream); Bing nothing parseable (namaz workstream) | Different clients and times; noted |
| 19 | Translation preference | "ইসলামিক ফাউন্ডেশন এর অনুবাদ দিলে আরো ভালো হতো" ("the Islamic Foundation translation would be better", kutblog review) | IF's 'মহাপরাক্রান্ত' rendering criticised (Technobd review) | Supports offering named, switchable translations |
| 20 | Dead vs live | hadith.one timed out twice in the audit | hadith.one ranks on Bing-BD for "hadith bangla" | Status uncertain |
| 21 | Ahrefs month stamps | Ramadan 2025 was in March | Ahrefs high labelled April 2025 | Likely a month-stamping lag; month of peak treated as approximate |
| 22 | Census figure | 91.04% Muslim (preliminary) | 91.08% (final) | Final used; both cited |

## Limitations

The research has no first-party analytics, no exact search volumes, and no direct web-user research such as interviews, surveys or usability tests. All user voice is from **app** reviews, which over-represent Android users who review. Location is unverified, so we lean on Bangla-script reviews. Facebook and YouTube, where much Bangladeshi Islamic discussion likely happens, were out of reach. Google results pages are a few dozen snapshots from one day and one or two IPs, and some came from a signed-in session. Autocomplete and Trends come from a single day (2026-11-05, off-season for most occasions). Logged-in features, native apps and translation quality were not audited. Several facts rest on search snippets and are flagged where used. Many sites were not fetched for traffic; [report 02](02-top-islamic-websites-bangladesh.md) lists them.

## Raw data files

All files live under `D:/My Projects/daily-islam/docs/research/data/`. They were copied from the session scratchpad, which is temporary. Sizes are as of 2026-11-05.

| Path | Size | Contents |
|---|---|---|
| `keyword-database.csv` | 483 KB | **934 rows**, the concatenation of the Quran/hadith/dua CSV (352 rows) and the namaz/Q&A/Ramadan/learning/lifestyle CSV (582 rows). It holds 920 distinct keyword strings; 14 keywords appear in more than one row, usually under different evidence types or categories. Columns: `keyword, language, intent, search_volume, keyword_difficulty, competition, trend, seasonality, user_need, content_opportunity, data_source, evidence_type, category, subcategory`. Evidence types: observed_suggestion 594, trends_relative 157, measured_volume 136, serp_observation 47. Languages: Bangla 759, English 83, Banglish 66, Mixed 26. Categories A–H plus X (new topics). `search_volume` is filled only for the 136 Ahrefs-bucket rows (e.g. ">1,000 (Ahrefs BD est.)"); 832 rows have KD "n/a" |
| `raw/play-reviews/reviews.json` | 4.8 MB | A dict keyed by 22 Play package names (e.g. `com.tos.namajtime`); each entry has `meta` (installs, rating, ads/IAP flags) and `reviews`. **11,671 reviews** in total |
| `raw/seasonal-trends/out5y.json` | 91 KB | 6 Trends request sets, 5-year weekly (`t`, `v` series); each set includes the anchor "নামাজের সময়" (prayer time) |
| `raw/seasonal-trends/out5y_b.json` | 61 KB | 4 more 5-year weekly sets (রোজা/fasting, hajj/umrah, দোয়া/dua, ঈদ/Eid groups) |
| `raw/seasonal-trends/out90d.json` | 4 KB | 1 set, 90-day daily (Friday terms: জুমার নামাজ / Jumu'ah prayer, সূরা কাহফ / সূরা কাহাফ / Surah Kahf) |
| `raw/seasonal-trends/groups.json`, `g2.json`, `g3.json` | <1 KB | The term groupings used for the requests |
| `raw/keywords-quran-hadith-dua/ac_raw.json` | 139 KB | Autocomplete results for 267 seeds, keyed `bn|<seed>` / `en|<seed>` |
| `raw/keywords-quran-hadith-dua/qhd_trends_out.json` | 29 KB | 24 Trends sets with `terms, timeframe, mean_all, mean_last52, by_year, peak` |
| `raw/keywords-quran-hadith-dua/yt_ac.txt` | 6 KB | YouTube autocomplete, 12 seeds, one line per seed (`yt|<seed> => s1 | s2 …`) |
| `raw/keywords-namaz-qa-etc/round1.json`, `round2.json` | 192 KB, 234 KB | Autocomplete for 329 + 383 = **712 seeds**, keyed `<category>|<seed>` |
| `raw/keywords-namaz-qa-etc/trends_out.json` | 17 KB | 16 Trends 12-month sets with `terms, means, peaks, related` |
| `raw/keywords-namaz-qa-etc/trends_out2.json`, `trends_out3.json` | 7 KB, 8 KB | Retry sets. g4, g6, g13, g14 and g15 record `HTTP Error 429` |
| `raw/keywords-namaz-qa-etc/serp_out.json` | 16 KB | DuckDuckGo/Bing fetch attempts for 30 queries (DDG results for 6, Bing for 4). **The 34 Google results pages from the signed-in Chrome session are recorded only in the notes and CSV, not as raw HTML** |

## Source register

All sources were accessed **2026-11-05** unless marked "2026-11-04 (earlier research)". "Primary" means the originator of the data or direct observation of the site; "secondary" means a report about someone else's data.

### Traffic, search and market tools

| Source | URL | Accessed | Supports | Type | Reliability |
|---|---|---|---|---|---|
| Similarweb website pages (muslimbangla, hadithbd, salat.habibur, alqurans, alkawsar, ihadis, at-tahreek, quraanshareef, islamijindegi, islamhouse, quranmazid, quran.com, islamqa.info, prothomalo) | https://www.similarweb.com/website/muslimbangla.com/ (pattern: /website/&lt;domain&gt;/) | 2026-11-05 | Visits, BD share, rank, top channel, keywords, affinity | Secondary (modelled) | Medium for rank; Low-Medium for volume |
| Similarweb top websites, community & society | https://www.similarweb.com/top-websites/bangladesh/community-and-society/ | 2026-11-05 | Nothing (appears global) | Secondary | Not usable |
| Similarweb ihadis competitors | https://www.similarweb.com/website/ihadis.com/competitors | 2026-11-05 | Competitor overlap | Secondary | Medium |
| Ahrefs site pages (muslimbangla, hadithbd, ihadis) | https://ahrefstop.com/websites/muslimbangla.com | 2026-11-05 | Organic visits, BD organic, keyword positions | Secondary (modelled) | Medium for share; Low-Medium for volume |
| Ahrefs site history (hadithbd, muslimbangla, ihadis, islamhouse) | https://ahrefs.com/websites/hadithbd.com | 2026-11-05 | Monthly organic history; Ramadan lift | Secondary (modelled) | Low-Medium |
| Ahrefs Free Keyword Generator, BD (28 seeds with results) | https://ahrefs.com/keyword-generator/?country=bd&input=surah%20mulk | 2026-11-05 | Volume buckets, KD | Secondary (modelled) | Medium for buckets |
| Semrush muslimbangla overview | https://www.semrush.com/website/muslimbangla.com/overview/ | 2026-11-05 | Sept 2026 visits (conflict) | Secondary | Low |
| Semrush (PL locale) muslimbangla | https://pl.semrush.com/website/muslimbangla.com/overview | 2026-11-05 | Nov 2025 snapshot | Secondary | Low |
| Google Trends, BD (5-year, 12-month, 90-day sets) | https://trends.google.com/trends/explore?geo=BD&date=today%205-y | 2026-11-05 | Relative demand, direction, seasonality | Primary (Google sample) | High for direction; relative only |
| Google Autocomplete, gl=bd | https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=নামাজ+ভঙ্গের+কারণ | 2026-11-05 | Query existence and phrasing | Primary | High for existence; no volume |
| Google results pages, gl=bd hl=bn | https://www.google.com/search?hl=bn&gl=bd&q=রুকইয়াহ | 2026-11-05 | Ranking domains, AI answers, YouTube, PAA | Primary observation | Medium (personalised; small sample) |
| Bing, cc=BD | https://www.bing.com/search?q=hadith%20bangla&cc=BD&setlang=bn | 2026-11-05 | Ranking domains; page-quality heuristics | Primary observation | Medium (proxy) |
| DuckDuckGo, kl=bd-en | https://html.duckduckgo.com/html/?kl=bd-en&q=নামাজের+নিয়ম | 2026-11-05 | Two results pages | Primary observation | Low |
| PageSpeed Insights API | https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://ihadis.com&strategy=mobile | 2026-11-05 | Nothing (HTTP 429) | — | — |
| StatCounter platform share BD | https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/bangladesh | 2026-11-05 | Desktop/mobile split (anomalous) | Primary (tracker network) | Low-Medium |
| StatCounter mobile OS BD | https://gs.statcounter.com/os-market-share/mobile/bangladesh | 2026-11-05 | Android ~91% | Primary (tracker network) | Medium |
| DataReportal Digital 2026 Bangladesh | https://datareportal.com/reports/digital-2026-bangladesh | 2026-11-05 | Population, users, social, connections, speed | Secondary aggregator (Kepios/GSMA/Ookla/UN) | High |

### Market, telecoms and demographics

| Source | URL | Accessed | Supports | Type | Reliability |
|---|---|---|---|---|---|
| Financial Express, BTRC H1 2026 | https://thefinancialexpress.com.bd/trade/internet-subscriber-growth-outpaces-mobile-connections-in-h1 | 2026-11-05 | 135.94M subscriptions; operators | Secondary (regulator data) | Medium-High |
| The Peninsula, BD adds 6M | https://www.thepeninsulaqatar.com/article/01/09/2026/bangladesh-adds-over-6-mln-internet-users-in-h1 | 2026-11-05 | H1 growth | Secondary | Medium-High |
| Financial Express, February low | https://thefinancialexpress.com.bd/trade/internet-subscriptions-hit-3-yr-low-cell-phone-users-edge-up-in-feb | 2026-11-05 | 128.27M low | Secondary | Medium-High |
| TBS News, census religion | https://www.tbsnews.net/bangladesh/hindu-population-bangladesh-decreases-further-466170 | 2026-11-05 | 91.04% Muslim | Secondary (census) | High |
| Daily Star, BBS/BMET | https://www.thedailystar.net/business/news/bbs-bmet-data-shows-stark-contrast-3481341 | 2026-11-05 | Census figures | Secondary (census) | High |
| Wikipedia, 2022 Bangladeshi census | https://en.wikipedia.org/wiki/2022_Bangladeshi_census | 2026-11-05 | 91.08% final; adjusted total | Tertiary | Medium-High |
| UNB, BBS phone/internet survey | https://unb.com.bd/category/Bangladesh/mobile-phone-ownership-rises-bbs/195830 | 2026-11-04 (earlier research) | 59.2% individual internet use | Secondary (BBS) | Medium-High |
| Bonik Barta, data price | https://en.bonikbarta.com/exclusive/Y1mr7cn0S586gKMz/ | 2026-11-05 | BDT 25–35/GB | Secondary | Medium |
| Dhaka Tribune, "cheap but slow" | https://www.dhakatribune.com/business/297107/bangladesh-has-cheap-but-slow-mobile-data | 2026-11-05 | Cable.co.uk price ranking | Secondary (snippet) | Medium |
| Daily Star, worldwide mobile data pricing tag | https://tds-images.thedailystar.net/tags/worldwide-mobile-data-pricing-2022 | 2026-11-05 | 2023 price conflict | Secondary (snippet) | Low |
| Daily Star, Ookla March 2024 | https://www.thedailystar.net/tech-startup/news/bangladesh-drops-global-mobile-internet-speed-ranking-3597346 | 2026-11-05 | 24.59 Mbps | Secondary (Ookla) | Medium |
| New Age, Ookla November 2024 | https://www.newagebd.net/post/telecom/254439/bangladesh-inches-up-in-mobile-internet-ranking-ookla | 2026-11-05 | 28.26 Mbps | Secondary | Medium |
| Daily Star, Ookla January 2025 | https://www.thedailystar.net/business/economy/news/bangladesh-slumps-global-mobile-internet-rankings-3553121 | 2026-11-05 | 23.85 Mbps | Secondary | Medium |
| TBS infographic, Ookla November 2025 | https://www.tbsnews.net/infograph/numbers/fastest-mobile-internets-world-1337251 | 2026-11-05 | 41.72 Mbps | Secondary (snippet) | Low-Medium |
| Dhaka Tribune, gender gap | https://www.dhakatribune.com/amp/bangladesh/346828/bangladesh-tops-asia-in-mobile-internet-gender-gap | 2026-11-05 | 40% vs 24% | Secondary (GSMA) | Medium |
| GSMA Mobile Gender Gap Report 2025 | https://www.gsma.com/wp-content/uploads/2025/12/The-Mobile-Gender-Gap-Report-2025.pdf | 2026-11-05 | Gender gap (26% comparison) | Primary | High (contents not fully read) |
| Daily Sun, smartphone shares | https://www.daily-sun.com/other/838292/value-for-money-redefines-bangladesh-s-smartphone-market | 2026-11-04 (earlier research; 403 on refetch) | TECNO/Infinix/Xiaomi shares | Secondary (IDC) | Medium |
| iConnect007 / Counterpoint | https://iconnect007.com/article/141343/bangladesh-mobile-phone-market-grew-17-in-the-first-quarter-of-2024/141340 | 2026-11-04 (earlier research) | Sub-$100 phones 33% | Secondary | Medium |

### Religious calendar, prayer times and institutions

| Source | URL | Accessed | Supports | Type | Reliability |
|---|---|---|---|---|---|
| Daily Star, Eid-ul-Fitr 2026 | https://online-d11.thedailystar.net/news/bangladesh/news/eid-ul-fitr-saturday-shawwal-moon-not-sighted-4132701 | 2026-11-05 | BD Eid one day after Saudi | Secondary (committee) | High |
| bdnews24, 19 Mar 2026 | https://bdnews24.com/bangladesh/8618af4cfd38 | 2026-11-05 | "Traditionally" a day later | Secondary | High |
| bdnews24, 18 May 2026 | https://bdnews24.com/bangladesh/a11a17f999fc | 2026-11-05 | Eid-ul-Azha 28 May | Secondary | High |
| Financial Express, Eid-ul-Azha | https://today.thefinancialexpress.com.bd/print/eid-ul-azha-to-be-celebrated-on-may-28-1779125072 | 2026-11-05 | Same | Secondary | High |
| Ittefaq English, Eid-ul-Azha | https://en.ittefaq.com.bd/16594/bangladesh-to-celebrate-eid-ul-azha-on-may-28 | 2026-11-05 | Same | Secondary | High |
| National media on 2026 dates and the 2027 schedule (Ittefaq, BSS, Dhaka Tribune, Daily Star Bangla, Desh Rupantor, Dhaka Times, Khoborsangjog, Bangla Tribune, Jugantor, bangladatetoday) | e.g. https://www.dhakatribune.com/bangladesh/412853/holy-ashura-on-june-26; https://www.dhakatimes24.com/2026/09/03/411967; https://www.banglatribune.com/others/950606/ | 2026-11-05 | Shab-e-Meraj, Ashura, Mawlid, Ijtema 2027, Hajj roadmap | Secondary | Medium-High (2027 Islamic dates are estimates) |
| Ittefaq, 2026 Ramadan schedule (±9 min) | https://www.ittefaq.com.bd/775700/ | 2026-11-05 | District offset method | Secondary | Medium |
| Jugantor, IF calls offset "baseless" | https://www.jugantor.com/islam-life/1057413 | 2026-11-05 (snippet; page 403) | Conflict #10 | Secondary (snippet) | Low |
| bdnews24 2023 sehri/iftar | https://bangla.bdnews24.com/bangladesh/5t2b1y0622 | 2026-11-05 | +11/−10 min (older years) | Secondary | Medium |
| Deshrupantor / ITV BD, divisional iftar | https://www.deshrupantor.com/498057 | 2026-11-05 (search summary) | 13-minute spread | Secondary (summary) | Low |
| Jagonews24, prayer schedule | https://www.jagonews24.com/religion/news/1143651 | 2026-11-05 | Newspapers cite IF times | Secondary | Medium |
| teachers.gov.bd blog | https://www.teachers.gov.bd/blog/details/827434 | 2026-11-05 | IF schedules follow Hanafi practice | Low-authority secondary | Low |
| Prothom Alo English, IF sehri/iftar | https://en.prothomalo.com/bangladesh/government/islamic-foundation-releases-sehri-iftar-timings | 2026-11-04 (earlier research) | IF publishes district Ramadan schedules | Secondary | Medium |
| Financial Express, IF digitised Quran (2011) | https://today.thefinancialexpress.com.bd/print/move-to-digitise-the-holy-quran | 2026-11-05 | IF ulama committee | Secondary | Medium |
| Financial Express 2018, Ramadan search | https://thefinancialexpress.com.bd/sci-tech/ramadan-related-search-on-google-starts-rising-1526628182 | 2026-11-05 | Historic Ramadan search rise | Secondary | Medium |

### Competitor sites (direct observation)

| Source | URL | Accessed | Supports | Type | Reliability |
|---|---|---|---|---|---|
| quran.com/bn + Quran Foundation API | https://quran.com/bn/1; https://api.quran.com/api/v4/resources/translations | 2026-11-05 | Translations, tafsirs, search test, PWA | Primary | High |
| sunnah.com | https://sunnah.com/bukhari:1 | 2026-11-05 | Bangla coverage; search test | Primary | High |
| hadithbd.com | https://www.hadithbd.com/ | 2026-11-05 | Corpus counts; Banglish and typo search; AI Q&A | Primary | High |
| ihadis.com | https://ihadis.com/countries/bangladesh/prayer-times-dhaka | 2026-11-05 | Asr, Hijri, Bangla date; search | Primary | High |
| muslimbangla.com | https://muslimbangla.com/masails | 2026-11-05 | Breadth; muftis; zakat; dua sourcing | Primary | High |
| islamqa.info/bn | https://islamqa.info/bn/answers/329 | 2026-11-05 | Citations; typo search; PWA; Hijri +1 | Primary | High |
| islamhouse.com/bn | https://islamhouse.com/bn/ | 2026-11-05 | Library; search dropped | Primary | High |
| alkawsar.com | https://www.alkawsar.com/bn/qa/answers/ | 2026-11-05 | Q&A archive; exact-match search | Primary | High |
| islamicfoundation.gov.bd | https://islamicfoundation.gov.bd/ | 2026-11-05 | No timetable or calendar found | Primary | High (for absence on pages checked) |
| quran.gov.bd | https://quran.gov.bd/ | 2026-11-05 | Text-as-image, 2012 build | Primary | High |
| quraanshareef.org | http://www.quraanshareef.org/Surah-Al-Fatihah | 2026-11-05 | Bare reader | Primary | High |
| salat.habibur.com | https://salat.habibur.com/bangla/ | 2026-11-05 | Both Asr times; Qibla | Primary | High |
| quranmazid.com | https://quranmazid.com/1 | 2026-11-05 | English default | Primary | High |
| Jugantor / Prothom Alo / Kaler Kantho Islam sections | https://www.jugantor.com/islam-life; https://www.prothomalo.com/religion; https://www.kalerkantho.com/online/Islamic-lifestylie | 2026-11-05 | Ads; daily prayer article | Primary | High |
| assunnahfoundation.org | https://assunnahfoundation.org/ | 2026-11-05 | Charity site; fake PWA | Primary | High |
| Defunct domains (islamijibon.com, quranbangla.com, al-hadith.com, hadith.one) | https://islamijibon.com | 2026-11-05 | For sale / parked / timeout | Primary | High |
| IRD Foundation | https://irdfoundation.com/ | 2026-11-04 (earlier research) | "Madhab and Manhaj of the Salaf-e-Salehin" | Primary | Medium |
| goodnews.com.bd, Priyo Muslim | https://goodnews.com.bd/priyo-muslim-islamic-app/ | 2026-11-04 (earlier research) | New web entrant with 64 districts | Secondary | Low-Medium |

### User voice, trust and language

| Source | URL | Accessed | Supports | Type | Reliability |
|---|---|---|---|---|---|
| Google Play BD listings and reviews, 22 apps (via google-play-scraper) | https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD (pattern: id=&lt;package&gt;&hl=bn&gl=BD) | 2026-11-05 | 11,671 reviews; installs; ratings; ad flags | Primary (user text) | High for "users say X"; Low for representativeness |
| UNB, religious misinformation study | https://unb.com.bd/category/Bangladesh/alarming-rise-in-religious-misinformation-on-social-media-in-bangladesh-new-study-reveals/136804 | 2026-11-05 | 69.3% believe misinformation | Secondary | Medium |
| Data in Brief dataset (PMC) | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10405184/ | 2026-11-05 | Same study's data | Primary (academic) | High (for its scope) |
| Dhaka Tribune, Rumor Scanner 2024 | https://www.dhakatribune.com/bangladesh/370280/rumor-scanner-record-2-919-false-claims-detected | 2026-11-05 | 2,919 false claims | Secondary | Medium |
| Edinburgh Research Archive thesis | https://era.ed.ac.uk/handle/1842/5690 | 2026-11-04 (earlier research; re-cited) | Ahl-i-Hadith vs Hanafi friction | Primary (academic) | Medium |
| GTAF translation string | https://translate.gtaf.org/checks/xml-tags/al-quran-android/strings/fa | 2026-11-05 | Transliteration caveat | Primary (app text) | Low as a scholarly position |
| bangladatetoday, Bijoy vs Unicode | https://www.bangladatetoday.com/bijoy-vs-unicode-which-is-better.php | 2026-11-05 | Bijoy background | Secondary (vendor/guide) | Low |
| Bijoy conversion errors guide | https://bijoy.converteraz.com/en/blog/common-bijoy-conversion-errors | 2026-11-05 | Same | Secondary | Low |
| unicodefyi Bengali script guide | https://unicodefyi.com/guide/bengali-script-guide | 2026-11-05 | Unicode fonts | Secondary | Low |
| Muslim Pro help centre | https://support.muslimpro.com/hc/en-us/articles/200669690-Is-it-acceptable-to-pay-for-a-religious-application | 2026-11-04 (earlier research) | Paying for religion is a live objection | Primary | Medium |

## Conclusion

The research rests on many weak signals that point the same way, rather than on a few strong ones. Rank order, keyword themes, search-results gaps and user complaints agree with each other; absolute traffic and search volumes do not, and should not be quoted as facts. The most valuable next steps are the measurements this round could not reach:

- Keyword Planner or Semrush exact volumes, using a logged-in account.
- The IF timetable PDFs and calculation parameters.
- A non-personalised, rank-tracked Google sample from Bangladesh.
- Direct research with Bangladeshi web users, including women.
- First-party analytics once a site is live.

## Confidence & limitations

- **High** confidence in what this file documents: which tools ran, what was blocked, and what the data files contain. File sizes, row counts and evidence-type counts were re-checked against the files on 2026-11-05.
- The source register is compiled from the six Phase 1 notes files and the Phase 0 report. It groups repeated sources, such as the 22 Play listings and the Similarweb domains, under a URL pattern. Individual URLs appear inline in reports 01–06.
- The keyword CSV merge removed rows that were exact duplicates on keyword plus category, ignoring case. No such duplicates existed, so all 934 input rows were kept. 14 keyword strings appear in more than one category, for example দোয়া under Dua and under New topics. Those rows were kept on purpose because each carries a different category and user need. Near-duplicates, such as the same keyword with different spacing, were not merged.
