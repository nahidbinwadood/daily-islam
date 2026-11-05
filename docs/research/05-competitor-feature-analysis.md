# No Bangla site yet combines breadth and trust

**Key findings**

- **No single Bangla website does it all.** Only **muslimbangla.com** covers Quran, hadith, dua, prayer times and Q&A, but its duas cite **no sources** and its translators are unnamed. **hadithbd.com** is the most complete *sourced* library (33 books, 94,570 hadith, Hisnul Muslim, three named Bangla Quran translations), but it has **no prayer times**. **quran.com** has the deepest Bangla Quran (4 named translations, 4 named tafsirs), but **no Bangla-script pronunciation**.
- **Table stakes are now:** Arabic + Bangla translation, per-verse audio, a hadith grade label, a dua list, a mobile layout that does not overflow, and **no ads**. Every dedicated Islamic site we examined was ad-free, so "ad-free" only differentiates against newspapers and SEO blogs.
- **Bangla search is the biggest UX gap.**
  - quran.com's API returns **286 results for সালাত (salat) but 0 for নামাজ (namaz)**, the everyday word.
  - sunnah.com returns nothing for Bangla queries.
  - Only **hadithbd** maps Banglish ("namaj" → নামায/নামাজ/সালাত).
  - Only **islamqa** (via Google's search engine) corrected the misspelling "নামজ".
- **Prayer-time sites disagree on Asr by 47–48 minutes.** On 5 Nov 2026 ihadis showed **2:54 PM** (Shafi'i/standard); muslimbangla and salat.habibur showed **3:41–3:42 PM** (Hanafi). Only salat.habibur shows both.
- **Dates disagree too.** The Bangladesh-oriented sites showed **24 Jumada al-Awwal 1448**, while Saudi-run islamqa showed **the 25th**. **No site cited Bangladesh's National Moon Sighting Committee.** ihadis and muslimbangla also disagree on the Bangla calendar date (21 vs 20 Kartik).
- **Only quran.com and islamqa are real PWAs** (manifest + service worker). ihadis and muslimbangla ship manifests without working offline support, and the government Quran site still serves verse text as images.
- **The rarest, most defensible differentiators are trust and Bangla-aware search:** named translators, graders and sources; synonym, Banglish and typo tolerance; both Asr times with Qibla; BD-unit zakat; and progress tracking.

---

## How the audit was run

On 2026-11-05 the research team visited 14 Islamic sites, three newspaper Islam sections and four defunct domains with three tools: curl (mobile user-agent), WebFetch, and a headless Chromium browser at a 390×844 viewport. **"Not available" means the feature was not found in the site navigation or on the pages examined. It does not prove the feature is absent everywhere on the site.** Logged-in features were not exercised. The PageSpeed Insights API returned **HTTP 429 (quota exceeded)**, so there are no PSI scores ([PSI API](https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://ihadis.com&strategy=mobile)). The load-time figures below come from the headless browser's own measurement of LCP (Largest Contentful Paint), taken unthrottled from a non-Bangladesh network. They are a rough proxy, not PSI scores. Site selection, traffic and the full method are in [report 02](02-top-islamic-websites-bangladesh.md) and [report 10](10-research-methodology-and-sources.md).

## Full feature matrix

**Legend:** **A** = Available (seen); **P** = Partial; **N** = Not available (not found on pages examined); **?** = Unable to verify; **—** = not applicable to the site type.

**Site codes:** QC quran.com/bn · SN sunnah.com · HBD hadithbd.com · IH ihadis.com · MB muslimbangla.com · IQA islamqa.info/bn · IHS islamhouse.com/bn · ALK alkawsar.com · IFB islamicfoundation.gov.bd · QGB quran.gov.bd · QS quraanshareef.org · SH salat.habibur.com · QM quranmazid.com · JUG/PA Jugantor ইসলাম ও জীবন / Prothom Alo ধর্ম.

| Feature | QC | SN | HBD | IH | MB | IQA | IHS | ALK | IFB | QGB | QS | SH | QM | JUG/PA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Full Quran | A | — | A | N (IRD splits Quran to QM) | A | N | N (links to QuranEnc) | N | P (Drive PDFs of some surahs) | A | A | — | A | N |
| Bangla translation | A (4) | — | A (3 + English) | — | A (translator not named) | — | — | — | P | A (as images) | A (unnamed) | — | P (English default) | — |
| Arabic text | A | A | A | A | A | — | — | — | ? | A (images) | A | — | A | — |
| Bangla-script pronunciation (উচ্চারণ) | N (Latin only) | — | ? | — | A | — | — | — | ? | P (images; script not verified) | N on Al-Fatihah | — | ? | — |
| Multiple translations | A | P | A | — | ? | — | — | — | — | N | N | — | ? | — |
| Tafsir (Bangla) | A (Ahsanul Bayan, Zakaria, Ibn Kathir, Fathul Majid) | — | A (+শানে নুযূল; author not captured) | — | A (author not named) | — | ? | P (আনওয়ারুল কুরআন) | N | N | N | — | ? | — |
| Audio recitation | A | — | A (+Bangla-translation audio, 65 surahs) | — | A (per verse) | — | P | N | N | A (legacy player) | A (1 element) | — | ? | — |
| Word-by-word Bangla | A | — | A | — | P (menu item) | — | — | — | — | N | N | — | ? | — |
| Bookmarks / progress | ? (login present) | — | A (tilawat progress; hifz daily goal) | — | ? | — | — | — | — | N | N | — | P | — |
| Multiple hadith collections | — | A (English) | A (33 books) | A (Bukhari … Silsila series) | A (incl. Musnad Abu Hanifa, Maariful Hadith) | — | ? | N | N | — | — | — | — | — |
| Hadith grading | — | A (toggle) | A ("হাদিসের মানঃ সহিহ") | A ("সহিহ হাদিস", grader not named) | ? | — | — | — | — | — | — | — | — | — |
| Hadith commentary | — | ? | N (review field empty) | N (footnotes only) | ? | — | — | — | — | — | — | — | — | — |
| Daily hadith / ayah | ? | ? | A (+email signup) | ? | A (/today) | — | — | — | — | — | — | — | — | — |
| Dua collection | P | A (Hisn al-Muslim, English) | A (Hisnul Muslim: 267 duas) | P | A (40 categories, **no source refs**) | — | ? | — | — | — | — | — | P (links out) | — |
| Zikir collection | N | ? | A | P | P | — | — | — | — | — | — | — | — | — |
| Prayer times | N | P (nav link) | N | A | A | N | N | N | N | — | — | A | N | P (daily article in JUG) |
| District-level BD prayer times | — | ? | — | P (12 "top cities") | P (claims all districts/upazilas; picker not seen) | — | — | — | N | — | — | A ("৬৪ জেলা", 64 districts) | — | — |
| Qibla direction | N | ? | N | N (app promo only) | N | — | — | — | N | — | — | A (278°) | — | — |
| Hijri date / calendar | N | N | ? | A (24 Jumada al-Awwal) | A (24 Jumada al-Ula) | A (**25** Jumada al-Awwal) | — | — | N | — | — | A (24) | — | — |
| Ramadan timetable | N | N | N | A | P | N | N | N | N | — | — | P | — | P (JUG) |
| Zakat calculator | N | N | N | N | A (BAJUS gold price; ভরি/রত্তি/আনা) | N | N | N | N (zakat fund only) | — | — | — | — | — |
| Islamic articles | N | N | A (172 books) | A | A | P | A (1,990 Bangla items) | A | P | N | N | N | P | A |
| Q&A | N | N | P (AI-generated) | N | A (mufti-answered + ask form) | A | A | A (numbered + ask form) | N | N | N | N | N | P |
| Bangla search works | P (UI ~200; API 0 for নামাজ) | N | A (+Banglish) | A | ? | A (Google CSE) | ? (query dropped) | A (exact match only) | ? | N | ? | — | ? | ? |
| Misspelling tolerance ("নামজ") | ? | N | N | ? (72 hits, unclear basis) | ? | A | ? | N | ? | — | ? | — | ? | ? |
| Accounts / login | A | ? | A (12,535 signups) | P | P | P (local save) | N | N | — | N | N | N | P | PA login |
| Offline / PWA | A (manifest + SW) | N | ? | P (manifest, no SW) | P (manifest, wrong name) | A (manifest + SW) | N | N | N | N | N | N | N | KK/JUG manifest |
| Mobile-friendly (no overflow at 375px) | A | ? | A | A | A | A | ? | ? | ? | N (text-as-image) | A | A | A | A |
| Dark mode / theme | A (strings) | ? | A ("পড়ার থিম", reading theme) | A ("ডার্ক") | ? | ? | ? | N | — | N | N | N | ? | ? |
| Ads | none | none | none | none | none (donation/app promos) | none | none | none | none | none | none | none | none | **JUG: 2 AdSense + 3 ad iframes; PA: 6 ad iframes** |
| Source citation shown | P | A | A (edition named) | P (number only) | **N for duas** | A | ? | ? | — | N | N | A (method, coordinates) | ? | N |
| Scholar / reviewer attribution | P (translator) | ? | P (review field empty) | N | A (named muftis) | A (al-Munajjid) | P | A (author pages) | — | N | N | — | ? | P |
| Licensing | ? | ? | All rights reserved | ? | ? | ? | N (no terms seen) | ? | — | © 2012 MoRA | ? | ? | ? | © |

Evidence URLs for each site code: [QC](https://quran.com/bn/1), [SN](https://sunnah.com/bukhari:1), [HBD](https://www.hadithbd.com/), [IH](https://ihadis.com/countries/bangladesh/prayer-times-dhaka), [MB](https://muslimbangla.com), [IQA](https://islamqa.info/bn/answers/329), [IHS](https://islamhouse.com/bn/), [ALK](https://www.alkawsar.com/bn/), [IFB](https://islamicfoundation.gov.bd/), [QGB](https://quran.gov.bd/), [QS](http://www.quraanshareef.org/Surah-Al-Fatihah), [SH](https://salat.habibur.com/bangla/), [QM](https://quranmazid.com/1), [JUG](https://www.jugantor.com/islam-life), [PA](https://www.prothomalo.com/religion).

## Table stakes versus rare differentiators

**Universal or near-universal** among the serious Quran and hadith sites:

- Arabic + Bangla translation and audio: QC, HBD, MB, QS and QGB all have both ([QC](https://quran.com/bn/1); [HBD](https://www.hadithbd.com/quran/hud/18); [MB](https://muslimbangla.com/quran/sura/1)).
- A hadith grade label: "সহিহ (Sahih)" on HBD, "সহিহ হাদিস" on IH, and a Grade toggle on SN ([HBD](https://www.hadithbd.com/hadith/muslim-ifa/4172); [IH](https://ihadis.com/bukhari/1); [SN](https://sunnah.com/bukhari:1)).
- A responsive layout.
- **No ads.** Ads appeared only on newspapers.

A new site that offers less than this will look broken next to the incumbents. A new site that offers exactly this will look like the incumbents.

**Rare features found on only one or two sites** are where the openings are:

| Differentiator | Who has it | Evidence |
|---|---|---|
| Bangla-script উচ্চারণ (pronunciation) per verse | MB only (QC offers Latin transliteration) | [MB](https://muslimbangla.com/quran/sura/1); [QC API](https://api.quran.com/api/v4/verses/by_key/1:2?words=true&language=bn) |
| Multiple **named** Bangla tafsirs | QC only | [QC API tafsirs](https://api.quran.com/api/v4/resources/tafsirs) |
| Banglish search | HBD only | [HBD search namaj](https://www.hadithbd.com/search/?q=namaj) |
| Misspelling correction | IQA only (Google CSE) | [IQA search](https://islamqa.info/bn/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C) |
| Qibla bearing; both Hanafi and Shafi'i Asr | SH only | [SH](https://salat.habibur.com/bangla/) |
| Zakat calculator with BAJUS prices and BD units | MB only | [MB zakat](https://muslimbangla.com/zakat-calculator) |
| Hifz tracker and tilawat progress | HBD only | [HBD](https://www.hadithbd.com/) |
| AI-generated Q&A with citations | HBD only (machine-generated, not scholar-reviewed) | [HBD AI Q&A](https://www.hadithbd.com/ai/qa/view.php?id=622) |
| Named-mufti Q&A at scale | MB (IDs above 170K), ALK | [MB masails](https://muslimbangla.com/masails); [ALK](https://www.alkawsar.com/bn/qa/answers/) |
| Working PWA | QC, IQA | [QC sw.js](https://quran.com/sw.js); [IQA service worker](https://islamqa.info/service-worker.js) |
| Sourced duas | HBD (Hisnul Muslim corpus) | [HBD dua](https://www.hadithbd.com/dua/) |

**Two things were absent from every site examined.** No site paired its Hijri date with a cited Bangladesh moon-sighting source; ihadis says only that dates "may differ based on moon sighting". No site showed named hadith commentary (sharh) in Bangla ([IH](https://ihadis.com/countries/bangladesh/prayer-times-dhaka); [HBD hadith](https://www.hadithbd.com/hadith/muslim-ifa/4172)).

The search-results evidence in [keyword research](03-bangladesh-keyword-research.md) adds further gaps, in places where no incumbent ranks with a good tool:

- **"tasbih counter online"**: Bing-BD returns only global English tools, no Bangla one ([Bing](https://www.bing.com/search?q=tasbih%20counter%20online&cc=BD&setlang=bn)).
- **যাকাত ক্যালকুলেটর** (zakat calculator): Google-BD shows mostly charities and foreign tools ([SERP](https://www.google.com/search?hl=bn&gl=bd&q=যাকাত+ক্যালকুলেটর)).
- **ফারায়েজ ক্যালকুলেটর** (faraid/inheritance calculator): thin tools and a Czech download site ([SERP](https://www.google.com/search?hl=bn&gl=bd&q=ফারায়েজ+ক্যালকুলেটর)).
- **কুরআন হিফজ করার সহজ উপায়** ("easy way to memorise the Quran"): articles and videos only, no tool ([Bing](https://www.bing.com/search?q=%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%86%E0%A6%A8%20%E0%A6%B9%E0%A6%BF%E0%A6%AB%E0%A6%9C%20%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0%20%E0%A6%B8%E0%A6%B9%E0%A6%9C%20%E0%A6%89%E0%A6%AA%E0%A6%BE%E0%A6%AF%E0%A6%BC&cc=BD&setlang=bn)).

## What each competitor does exceptionally well, and where it fails

**quran.com** has the best Bangla Quran depth on the web. It offers four named Bangla translations: Taisirul Quran (Tawheed Publication), Sheikh Mujibur Rahman (Darussalaam), Rawai Al-bayan (Bayaan Foundation) and Dr. Abu Bakr Muhammad Zakaria. It adds four named Bangla tafsirs, Bangla word-by-word glosses and a working PWA ([API translations](https://api.quran.com/api/v4/resources/translations); [manifest](https://quran.com/manifest.json)). It fails Bangladeshi users in two specific ways. Its transliteration is **Latin ("al-ḥamdu"), not Bangla script**. And its core search API matches the translators' word সালাত (salat) but **returns 0 for নামাজ (namaz)**, the word people actually type. The UI found 199 results for নামাজ, but the snippets shown were English lines ([API search](https://api.quran.com/api/v4/search?q=%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4&size=3&language=bn); [UI search](https://quran.com/bn/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C)).

**hadithbd.com** excels at sourced depth. Each hadith names its edition (e.g. "সহীহ মুসলিম (ইসলামিক ফাউন্ডেশন)", Sahih Muslim, Islamic Foundation edition), shows Arabic with and without diacritics, gives a grade and the narrator, and has the only Banglish-aware search ([hadith 4172](https://www.hadithbd.com/hadith/muslim-ifa/4172)). Its failures:

- It has **no prayer times, Qibla or zakat**.
- The hadith review field ("পুনঃনিরীক্ষণঃ") is empty.
- The misspelling "নামজ" matched "নামজাদা" (a word meaning "renowned") instead of correcting to নামাজ.
- Its AI answers are machine-generated, not scholar-reviewed.
- One developer runs it, its content is "সর্বস্বত্ব সংরক্ষিত" (all rights reserved), and a Cloudflare challenge blocks non-browser clients ([search misspelling](https://www.hadithbd.com/search/?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C)).

**muslimbangla.com** wins on breadth and human service. It has Quran with Bangla উচ্চারণ (pronunciation), hadith, 40 dua categories, district prayer times, a BD-unit zakat calculator and masail answered by named muftis ([sura 1](https://muslimbangla.com/quran/sura/1); [masails](https://muslimbangla.com/masails)). Its zakat calculator is unusually local: it applies BAJUS gold prices with a 17% deduction and states a price date, but in an ambiguous format ("১১-০৩-২৬"). It adds the disclaimer "যোগ্য মুফতির পরামর্শ নিন" (consult a qualified mufti) ([zakat](https://muslimbangla.com/zakat-calculator)). It fails on provenance: **duas show Arabic, উচ্চারণ and meaning but no source hadith or book**, and the Quran translator and tafsir author are unnamed. Its PWA manifest is misnamed "হজ্ব ও উমরা গাইড" (Hajj & Umrah guide) ([dua](https://muslimbangla.com/dua-category/1); [manifest](https://muslimbangla.com/manifest.json)).

**ihadis.com (IRD)** has the broadest hadith set, including the Silsila Sahiha and Dhaif series. It also has the richest prayer-time page: forbidden times, nafl times (tahajjud, ishraq, duha), sehri/iftar and a monthly table. Its failures:

- The default **Asr is the non-Hanafi time**.
- The grader and translator are not named.
- Search results take more than 6 seconds to render on the client.
- Quran and dua are scattered across quranmazid.com and duaruqyah.com.
- The manifest has no service worker.

([Bukhari](https://ihadis.com/bukhari); [prayer times](https://ihadis.com/countries/bangladesh/prayer-times-dhaka); [manifest](https://ihadis.com/manifest.json)).

**islamqa.info/bn** is the most carefully cited Q&A source. It gives Quran ayat and hadith numbers (e.g. Bukhari 5066, Tirmidhi 2777), names one scholar, shows dates and view counts (222,721 on one answer), and has the only search that fixes typos. That search is Google-powered: "নামজ" became "নামাজ site:islamqa.info/bn", with ~268 results ([answer 329](https://islamqa.info/bn/answers/329); [search](https://islamqa.info/bn/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C)). It fails as a Bangladeshi daily tool. It offers a single Saudi Salafi perspective, a Hijri date one day ahead of Bangladesh, Bangla with typos ("নিয়ন্ত্রয়ের"), and no Quran, prayer or dua modules.

**alkawsar.com** is fast (headless LCP ~1.2 s) and authoritative. It has named authors and a Q&A archive from 2007 to 2026 ([Q&A](https://www.alkawsar.com/bn/qa/answers/)). But its search is exact-match only: "নামজ" returns "কোনো কিছু পাওয়া যা[য়নি]" (nothing found) ([search](https://www.alkawsar.com/bn/search/?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C)).

**salat.habibur.com** is the most transparent prayer-time tool. It shows coordinates, Qibla, calculated and rounded times, both Asr times and the night thirds, and it has an API. Its UI is dated, it has no manifest, and it points users to a newer domain ([salat.habibur.com](https://salat.habibur.com/)).

**sunnah.com** offers grading toggles but only partial Bangla: Bukhari and Nawawi40 have it, Muslim book 1 does not. A Bangla search for সালাত returned "Sorry, there were no results found" ([search](https://sunnah.com/search?q=%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4)).

**islamhouse.com/bn** has 1,990 free Bangla items. Its search dropped the query, and it was the slowest site measured (LCP ~4.5 s) ([home](https://islamhouse.com/bn/)).

**quraanshareef.org**, the top web result for "বাংলা কুরআন" (Bangla Quran), is a bare reader. Its translator is unnamed and it has no উচ্চারণ, tafsir or search.

**The government sites fail almost completely.** quran.gov.bd (© 2012, Ministry of Religious Affairs) serves verses as images, has no search, and links to Adobe Flash. The Islamic Foundation portal has no prayer timetable, Hijri calendar or moon-sighting notice; its Quran links go to Google Drive, and its TLS certificate chain is broken ([quran.gov.bd](https://quran.gov.bd/); [IF](https://islamicfoundation.gov.bd/)).

## Search tests: the everyday word fails where the scholarly word works

Bangla has competing spellings and synonyms for core terms: নামাজ / নামায / সালাত (all meaning "prayer"), with নামাজ dominant in search at about 18× নামায (see [keyword research](03-bangladesh-keyword-research.md)). People also type in romanised "Banglish". The team ran the same queries across sites.

| Site | সালাত (salat) | নামাজ (namaz) | "নামজ" (misspelling) | Banglish "namaj" |
|---|---|---|---|---|
| quran.com | API: 286 results | **API: 0**; UI: 199 (English snippets) | API: 0 | not tested |
| sunnah.com | **"no results"** | not reported | not reported | not tested |
| hadithbd.com | not tested separately | not tested separately (included in the "namaj" mapping) | **1 irrelevant hit** ("নামজাদা") | **1,000+ results**, mapped to নামায / নামাজ / সালাত |
| ihadis.com | 8,002 (after full render; a 6-second wait showed "০০", zero) | 1,396 | 72 hits, unclear basis | not tested |
| alkawsar.com | works | not reported | **"nothing found"** | not tested |
| islamqa.info/bn | not reported | works | **auto-corrected to নামাজ** (~268 results, via Google CSE) | not tested |
| islamhouse.com/bn | — | query dropped by redirect | — | — |

Sources: [QC API](https://api.quran.com/api/v4/search?q=%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4&size=3&language=bn), [SN](https://sunnah.com/search?q=%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4), [HBD namaj](https://www.hadithbd.com/search/?q=namaj), [HBD নামজ](https://www.hadithbd.com/search/?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C), [IH](https://ihadis.com/search?q=%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4), [ALK](https://www.alkawsar.com/bn/search/?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C), [IQA](https://islamqa.info/bn/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C), [IHS](https://islamhouse.com/bn/search/?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C).

The pattern is consistent. **Sites that index scholarly translations match the translators' vocabulary (সালাত), not the users' (নামাজ).** Without a synonym layer, Banglish transliteration and typo tolerance, a Bangla Islamic search box fails on the most common query. Muslimbangla's site search and Banglish handling on quran.com were not tested.

## Asr, Hijri and Bangla dates disagree across sites on the same day

**Asr.** For Dhaka on 5 November 2026:

- ihadis.com (Karachi method) showed **Asr at 02:54 PM**, the Shafi'i/standard first-shadow time, while mentioning that the madhhab can be customised.
- muslimbangla.com and salat.habibur.com showed **3:41–3:42 PM**, the Hanafi second-shadow time.
- salat.habibur.com labels both: "জোহর শেষ (শাফি) 2:54" (end of Zuhr, Shafi'i) and "আসর (হানাফি) 3:42" (Asr, Hanafi).

([IH](https://ihadis.com/countries/bangladesh/prayer-times-dhaka); [MB](https://muslimbangla.com/world/BD/prayer-times-Dhaka); [SH](https://salat.habibur.com/bangla/)). Most Bangladeshi users follow Hanafi practice. A default non-Hanafi Asr therefore risks looking *wrong* to them, and Play reviewers explicitly complain about this (see [report 06](06-bangladesh-specific-user-needs.md)). The safest observed pattern is salat.habibur's: show both, labelled.

**Hijri.** ihadis (24 Jumada al-Awwal 1448), muslimbangla ("২৪ জুমাদাল উলা, ১৪৪৮") and salat.habibur ("২৪-জামাদিউল আউয়াল") agreed. islamqa's header showed "২৫ জুমাদাল আউওয়াল ১৪৪৮ AH", one day ahead ([MB today](https://muslimbangla.com/today); [IQA](https://islamqa.info/bn/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C)). This fits Bangladesh's usual one-day lag behind Saudi Arabia, documented for both Eids in 2026 (report 06). The Bangladesh sites are evidently applying a local offset, but **none cites the National Moon Sighting Committee or the Islamic Foundation as its source**.

**Bangla calendar.** ihadis showed "21 Kartik 1433" and muslimbangla "20 Kartik" for the same day ([IH](https://ihadis.com/countries/bangladesh/prayer-times-dhaka); [MB](https://muslimbangla.com/world/BD/prayer-times-Dhaka)). Under the revised Bangladesh calendar, where Kartik begins on 17 October, 5 November is 20 Kartik, which would make ihadis off by one. We did not verify this against an official source.

## Offline and PWA support is mostly cosmetic

Only **quran.com** (manifest + Workbox-style sw.js) and **islamqa.info** (manifest + service-worker.js) serve a real installable, offline-capable web app ([QC sw.js](https://quran.com/sw.js); [IQA service worker](https://islamqa.info/service-worker.js)). The rest fall short:

- **ihadis** ships a manifest but /sw.js returns 404.
- **muslimbangla** ships a manifest named for its Hajj guide.
- **quranmazid**'s manifest is 404.
- **assunnahfoundation.org** returns its single-page-app HTML for /sw.js and /manifest.webmanifest, so it only *looks* like a PWA.
- The Kaler Kantho and Jugantor manifests exist for push notifications (Feedify), not offline reading.

([IH manifest](https://ihadis.com/manifest.json); [ASF sw.js](https://assunnahfoundation.org/sw.js); [Kaler Kantho](https://www.kalerkantho.com/online/Islamic-lifestylie)). Offline reading is praised in app reviews (report 06), so a working offline web app would be a real, if unproven, differentiator on the Bangla web.

## Ads: absent on Islamic sites, heavy on the pages that actually rank

**No dedicated Islamic site we examined showed ads.** Newspapers did:

- Jugantor's Islam section rendered **2 AdSense units and 3 ad iframes**.
- Prothom Alo's religion section rendered **6 ad iframes** in about **3.0 MB of HTML**.
- Kaler Kantho loads Google Publisher Tag.

([Jugantor](https://www.jugantor.com/islam-life); [Prothom Alo](https://www.prothomalo.com/religion)). The ad problem in search is the **SEO blogs and caption sites that rank for dua and topic-hadith queries**. The keyword team counted ad-script references in page HTML. These are counts of ad-script mentions, **not counts of ad units**:

| Page | Ad-script references | Other signals |
|---|---|---|
| namerorthobangla.com (সকাল সন্ধ্যার দোয়া ও জিকির, morning and evening duas and zikir) | **69** | |
| bd24live.com (মা নিয়ে হাদিস, hadith about mothers) | 44 | 0 Arabic characters; 1 reference |
| islambangla.com (সূরা হাশরের শেষ তিন আয়াত, last three ayat of Surah Hashr) | 38 | **0 Arabic characters on a Quran-verse page** |

By contrast, muslimbangla.com's Q&A page for দুশ্চিন্তা দূর করার দোয়া (dua for relief from worry) had **0 ad scripts and 8 references** ([Bing সকাল সন্ধ্যার দোয়া ও জিকির](https://www.bing.com/search?q=%E0%A6%B8%E0%A6%95%E0%A6%BE%E0%A6%B2%20%E0%A6%B8%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0%20%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE%20%E0%A6%93%20%E0%A6%9C%E0%A6%BF%E0%A6%95%E0%A6%BF%E0%A6%B0&cc=BD&setlang=bn); [Bing সূরা হাশরের শেষ তিন আয়াত](https://www.bing.com/search?q=%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%B9%E0%A6%BE%E0%A6%B6%E0%A6%B0%E0%A7%87%E0%A6%B0%20%E0%A6%B6%E0%A7%87%E0%A6%B7%20%E0%A6%A4%E0%A6%BF%E0%A6%A8%20%E0%A6%86%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%A4&cc=BD&setlang=bn); [Bing দুশ্চিন্তা দূর করার দোয়া](https://www.bing.com/search?q=%E0%A6%A6%E0%A7%81%E0%A6%B6%E0%A7%8D%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%BE%20%E0%A6%A6%E0%A7%82%E0%A6%B0%20%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0%20%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE&cc=BD&setlang=bn)).

A further nuance: the **Muslim Bangla Android app is flagged "ads: yes"** on Google Play, even though its website shows none ([Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)). Against dedicated sites, then, ad-free is table stakes. Against the blogs and newspapers that win many dua and hadith clicks, it is a real quality gap.

## Conclusion

The audit changes the question from "what features are missing?" to "what is missing *with provenance*?". Most features exist somewhere on the Bangla web: pronunciation on muslimbangla, named tafsir on quran.com, graded hadith on hadithbd, both Asr times on salat.habibur. They are scattered across domains, each with a different trust gap. The cheapest wins for a new platform are unglamorous:

- a search layer that treats নামাজ, নামায, সালাত and "namaj" as one word and forgives typos;
- a name on every translation, grade and dua;
- a labelled Hanafi default with the alternative Asr visible;
- a Hijri date that states its moon-sighting source.

The incumbents have each solved one of these. None has solved all of them. [Content and feature gaps](07-content-and-feature-gaps.md) turns these gaps into opportunities.

## Confidence & limitations

- **High:** feature presence and absence on the pages examined; search test results; Asr, Hijri and Bangla-date readings for 5 Nov 2026 (directly observed).
- **Medium:** "not available" entries, which mean not found in navigation or on the pages examined; muslimbangla's district picker and dark-mode states (inferred from UI strings).
- **Not measured:** PageSpeed scores (API 429); logged-in features; native-app features; translation quality (needs native-speaker review). Ad-script counts are heuristics, not ad-unit counts.
- The Google results pages used to pick the "top" prayer-time and Bangla Quran sites were loaded with `gl=bd&hl=bn` from a **non-Bangladesh IP**, so those rankings are indicative only. One headless navigation was hijacked by another agent's tab and discarded. See [methodology](10-research-methodology-and-sources.md).
