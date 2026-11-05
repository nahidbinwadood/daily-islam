# Competitor Feature Audit: Bangladesh-relevant Islamic websites (accessed 2026-11-05)

Method note (applies to all sections). Sites were visited on 2026-11-05 with curl (mobile UA), WebFetch, and a headless Chromium at a 390x844 viewport via Playwright. "N" means the feature was not found in the site navigation or on the pages examined. It does not prove absence everywhere on the site.
- The PageSpeed Insights API returned HTTP 429 ("Quota exceeded for quota metric 'Queries' ... 'Queries per day'") for the unauthenticated key, so no PSI scores or LCP values were obtained ([PSI API](https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://ihadis.com&strategy=mobile)).
- The LCP figures below come from the headless browser's own PerformanceObserver. They are unthrottled, measured from a non-BD network, and are only a rough proxy, not PSI scores.
- WebSearch is US-geolocated. To pick the "top prayer-time site" and "top Bangla Quran site", Google was loaded in the headless browser with `gl=bd&hl=bn`. The client IP was not in Bangladesh, so the rankings are indicative only.
- The headless browser was shared with another agent, and one navigation was hijacked by that agent's Google tab. That result was discarded, and every other result was checked against its returned `location.href`.

## Key Question 1: What does each site do well, and where does it fail? (feature matrix plus per-site evidence)

### Takeaway
hadithbd.com is the most complete Bangla Quran + Hadith + Dua site: 33 books, 94,570 hadith, three Bangla Quran translations, word-by-word, tajweed, hifz tracking, accounts, Banglish search and AI Q&A. It has no prayer times. muslimbangla.com is the only site combining Quran (with Bangla উচ্চারণ), hadith, dua, district prayer times, a zakat calculator and a large mufti-answered Q&A base, but its duas carry no source references. quran.com has the best Bangla Quran depth (4 Bangla translations, 4 Bangla tafsirs including Fathul Majid and Ibn Kathir, Bangla word-by-word) but no Bangla-script pronunciation. Its search misses the colloquial "নামাজ" at the API level. The Islamic Foundation's official site offers no usable prayer time, Hijri calendar or Quran reader.

### Cited Findings

#### Site codes and evidence URLs
- **QC** quran.com/bn: [home](https://quran.com/bn), [surah](https://quran.com/bn/1), [search UI](https://quran.com/bn/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C), [API translations](https://api.quran.com/api/v4/resources/translations), [API tafsirs](https://api.quran.com/api/v4/resources/tafsirs), [manifest](https://quran.com/manifest.json), [sw.js](https://quran.com/sw.js)
- **SN** sunnah.com: [home](https://sunnah.com), [Bukhari 1](https://sunnah.com/bukhari:1), [Muslim book 1](https://sunnah.com/muslim/1), [search](https://sunnah.com/search?q=%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4)
- **HBD** hadithbd.com (Cloudflare-challenged for curl/WebFetch; rendered in a headless browser): [home](https://www.hadithbd.com/), [hadith](https://www.hadithbd.com/hadith/muslim-ifa/4172), [ayah](https://www.hadithbd.com/quran/hud/18), [Al-Fatiha](https://www.hadithbd.com/quran/al-fatiha/), [dua](https://www.hadithbd.com/dua/), [search namaj](https://www.hadithbd.com/search/?q=namaj), [search misspelling](https://www.hadithbd.com/search/?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C), [AI Q&A](https://www.hadithbd.com/ai/qa/view.php?id=622)
- **IH** ihadis.com: [home](https://ihadis.com), [Bukhari](https://ihadis.com/bukhari), [Bukhari ch.1](https://ihadis.com/bukhari/1), [prayer times](https://ihadis.com/countries/bangladesh/prayer-times-dhaka), [search সালাত](https://ihadis.com/search?q=%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4), [manifest](https://ihadis.com/manifest.json)
- **MB** muslimbangla.com: [home](https://muslimbangla.com), [Quran 1](https://muslimbangla.com/quran/sura/1), [dua cat 1](https://muslimbangla.com/dua-category/1), [prayer times](https://muslimbangla.com/world/BD/prayer-times-Dhaka), [zakat](https://muslimbangla.com/zakat-calculator), [masail](https://muslimbangla.com/masails), [today](https://muslimbangla.com/today), [hadith books](https://muslimbangla.com/hadith-books), [manifest](https://muslimbangla.com/manifest.json)
- **IQA** islamqa.info/bn: [home](https://islamqa.info/bn), [answer 329](https://islamqa.info/bn/answers/329), [search](https://islamqa.info/bn/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C), [manifest](https://islamqa.info/manifest.json), [service-worker](https://islamqa.info/service-worker.js)
- **IHS** islamhouse.com/bn: [home](https://islamhouse.com/bn/), [search](https://islamhouse.com/bn/search/?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C)
- **ALK** alkawsar.com: [home](https://www.alkawsar.com/bn/), [Q&A](https://www.alkawsar.com/bn/qa/answers/), [search সালাত](https://www.alkawsar.com/bn/search/?q=%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4), [search নামজ](https://www.alkawsar.com/bn/search/?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C)
- **IFB** islamicfoundation.gov.bd: [home](https://islamicfoundation.gov.bd/), [external links](https://islamicfoundation.gov.bd/pages/external-links), [notices](https://islamicfoundation.gov.bd/pages/notices)
- **QGB** quran.gov.bd (Ministry of Religious Affairs): [home](https://quran.gov.bd/)
- **QS** quraanshareef.org, the top web result for "বাংলা কুরআন" and "quran bangla" on google gl=bd: [home](http://www.quraanshareef.org/), [Al-Fatihah](http://www.quraanshareef.org/Surah-Al-Fatihah)
- **SH** salat.habibur.com, ranked #2 for "নামাজের সময়সূচি" on google gl=bd after muslimbangla.com; the top dedicated, non-news prayer-time site: [home](https://salat.habibur.com/), [Bangla](https://salat.habibur.com/bangla/)
- **QM** quranmazid.com (IRD Foundation, same publisher as ihadis): [home](https://quranmazid.com), [surah 1](https://quranmazid.com/1)
- **JUG** Jugantor ইসলাম ও জীবন: [section](https://www.jugantor.com/islam-life). **PA** Prothom Alo ধর্ম: [section](https://www.prothomalo.com/religion). Kaler Kantho: [section](https://www.kalerkantho.com/online/Islamic-lifestylie), curl only.
- **ASF** assunnahfoundation.org: [home](https://assunnahfoundation.org/)

#### Feature matrix
Codes: A = Available (seen), P = Partial, N = Not found, ? = Unable to verify, — = not applicable to the site type.

| Feature | QC | SN | HBD | IH | MB | IQA | IHS | ALK | IFB | QGB | QS | SH | QM | JUG/PA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Full Quran | A | — | A | N (IRD splits Quran to QM) | A | N | N (links to QuranEnc) | N | P (Drive PDFs of some surahs) | A | A | — | A | N |
| Bangla translation | A (4) | — | A (3 + English) | — | A (translator not named) | — | — | — | P | A (as images) | A (unnamed) | — | P (default English; "Bengali" strings in HTML) | — |
| Arabic text | A | A | A | A | A | — | — | — | ? | A (images) | A | — | A | — |
| Bangla-script pronunciation (উচ্চারণ) | N (Latin transliteration only, via API) | — | ? | — | A | — | — | — | ? | P (transliteration images; script not verified) | N on Al-Fatihah | — | ? | — |
| Multiple translations | A | P (Bangla toggle on some books) | A | — | ? | — | — | — | — | N | N | — | ? | — |
| Tafsir (Bangla) | A: Ahsanul Bayan, Abu Bakr Zakaria, Ibn Kathir, Fathul Majid | — | A (tafsir + শানে নুযূল; author not captured) | — | A (per verse; author not named) | — | ? | P (আনওয়ারুল কুরআন section) | N | N | N | — | ? | — |
| Audio recitation | A | — | A (tilawat, Bangla-translation audio for 65 surahs) | — | A (per verse) | — | P (audio library) | N | N | A (legacy player) | A (1 audio element) | — | ? | — |
| Word-by-word Bangla | A (API returns Bangla per word) | — | A | — | P (menu item "শব্দে শব্দে কুরআন (অডিও সহ)") | — | — | — | — | N | N | — | ? | — |
| Quran bookmarks / progress | ? (login present) | — | A (tilawat "অগ্রগতি সহ"; hifz daily goal) | — | ? | — | — | — | — | N | N | — | P (/profile/bookmarks link) | — |
| Multiple hadith collections | — | A (English) | A (33 books) | A (Bukhari, Muslim, Abu Dawud, Nasai, Ibn Majah, Muwatta, Riyadus Salihin, Bulugh, Mishkat, Lulu wal Marjan, Silsila Sahiha, Dhaif series) | A (incl. Musnad Abu Hanifa, Maariful Hadith, Hadith Qudsi) | — | ? (via HadeethEnc) | N | N | — | — | — | — | — |
| Hadith grading | — | A (toggle) | A ("হাদিসের মানঃ সহিহ") | A ("সহিহ হাদিস", grader not named) | ? | — | — | — | — | — | — | — | — | — |
| Hadith commentary | — | ? | N on page examined ("পুনঃনিরীক্ষণঃ" field empty) | N (footnotes only) | ? | — | — | — | — | — | — | — | — | — |
| Daily hadith / ayah | ? (Daily Verse link) | ? | A (আজকের আয়াত/হাদিস, email signup) | ? | A (/today: ayah + tafsir) | — | — | — | — | — | — | — | — | — |
| Dua collection | P (popular "Duas" link) | A (Hisn al-Muslim, English) | A (Hisnul Muslim: 267 duas, 133 sections, Arabic audio) | P (subject "supplications-and-dhikr") | A (40 categories, no source refs) | — | ? | — | — | — | — | — | P (links out to duaruqyah.com) | — |
| Zikir collection | N | ? | A (সকাল-সন্ধ্যার যিকর, যিকর দরুদ ও তাওবা) | P | P (সকাল সন্ধার আমল, দুরুদ, ইস্তিগফার) | — | — | — | — | — | — | — | — | — |
| Prayer times | N | P ("Prayer Times" nav link) | N | A | A | N | N | N | N | — | — | A | N | P (daily article in JUG) |
| District-level BD prayer times | — | ? | — | P (12 "top cities"; full district list not verified) | P (claims all districts/upazilas; picker not seen) | — | — | — | N | — | — | A ("৬৪ জেলা" in SERP breadcrumb) | — | — |
| Qibla direction | N | ? | N | N (only in app promo) | N | — | — | — | N | — | — | A (bearing 278°) | — | — |
| Hijri date / calendar | N | N | ? | A (24 Jumada al-Awwal 1448) | A (24 Jumada al-Ula 1448) | A (25 Jumada al-Awwal 1448) | — | — | N | — | — | A (24 Jamadiul Awwal) | — | — |
| Ramadan timetable | N | N | N | A (link /ramadan/bangladesh/ramadan-calendar-dhaka) | P (sehri shown as end of tahajjud) | N | N | N | N | — | — | P (সেহরি শেষ row) | — | P (JUG রমজান subsection) |
| Zakat calculator | N | N | N | N | A (BAJUS gold price, BD units: ভরি/রত্তি/আনা) | N | N | N | N (zakat fund only) | — | — | — | — | — |
| Islamic articles | N | N | A (172 books, terms) | A (/blogs) | A | P | A (1,990 Bangla items) | A (monthly magazine) | P (journals) | N | N | N | P (blogs) | A |
| Q&A | N | N | P (AI-generated Q&A) | N | A (mufti-answered masail plus ask form) | A | A (fatwa type) | A (numbered Q&A, ask form) | N | N | N | N | N | P (PA "জিজ্ঞাসা", JUG masala) |
| Bangla search works | P (UI: ~200 results; API: 0 for "নামাজ") | N ("no results" for Bangla) | A (+ Banglish) | A (8,002 for সালাত) | ? | A (Google CSE) | ? (query param dropped) | A (exact match only) | ? | N | ? | — | ? | ? |
| Misspelling tolerance ("নামজ") | ? | N | N (1 irrelevant hit) | ? (72 hits, unclear basis) | ? | A (Google "showing results for নামাজ") | ? | N ("কোনো কিছু পাওয়া যা[য়নি]") | ? | — | ? | — | ? | ? |
| Accounts / login | A | ? | A (12,535 signups; saved searches) | P (profile/bookmarks link) | P (/user/ask-masail) | P (saved Q&A, local) | N | N | — | N | N | N | P | PA login |
| Offline / PWA | A (manifest + SW) | N | ? | P (manifest, no /sw.js) | P (manifest, wrong app name) | A (manifest + SW) | N | N | N | N | N | N | N | KK/JUG manifest |
| Mobile-friendly (no horizontal overflow at 375px) | A | ? | A (scrollWidth 375) | A | A | A | ? | ? | ? | N (text-as-image, 2012 build) | A | A | A | A |
| Dark mode / theme | A (theme setting strings) | ? | A ("পড়ার থিম") | A ("ডার্ক") | ? | ? | ? | N | — | N | N | N | ? | ? |
| Ads | none seen | none | 0 ad slots | none | none (donation/app promos) | none | none | none | none | none | none | none | none | JUG: 2 AdSense + 3 ad iframes; PA: 6 ad iframes |
| Source citation shown | P | A | A (book edition, e.g. "সহীহ মুসলিম (ইসলামিক ফাউন্ডেশন)") | P (Bukhari number only) | N for duas | A | ? | ? | — | N | N | A (calculated + rounded times, coordinates) | ? | N |
| Scholar / reviewer attribution | P (translator per API) | ? | P (review field empty) | N | A (named muftis on masail) | A (Sheikh al-Munajjid) | P (author filter) | A (author pages) | — | N | N | — | ? | P |
| Licensing | ? | ? | All rights reserved ("সর্বস্বত্ব সংরক্ষিত") | ? | ? | ? | N (free, no license terms seen) | ? | — | © 2012 MoRA | ? | ? | ? | © |

#### Per-site strengths and weaknesses (observed evidence)

- **quran.com (Bangla mode)**
  - The Bangla interface shows a Bangla translation by default under the "অনুবাদ" tab, with tabs for পাঠ, অনুবাদ, তাফসির and প্রতিফলন, plus a শুনুন (listen) button — [quran.com/bn/1](https://quran.com/bn/1)
  - The API lists 4 Bangla translations: Taisirul Quran (Tawheed Publication), Sheikh Mujibur Rahman (Darussalaam), Rawai Al-bayan (Bayaan Foundation) and Dr. Abu Bakr Muhammad Zakaria — [API](https://api.quran.com/api/v4/resources/translations)
  - The API lists 4 Bangla tafsirs: Fathul Majid, Ahsanul Bayaan, Abu Bakr Zakaria and Ibn Kathir — [API](https://api.quran.com/api/v4/resources/tafsirs)
  - Word-by-word Bangla glosses are returned (e.g., 1:2 "সকল প্রশংসা / আল্লাহ্‌রই জন্য / (যিনি) রব / সারা জগতের"), but the transliteration is Latin ("al-ḥamdu"), not Bangla script — [API verse 1:2](https://api.quran.com/api/v4/verses/by_key/1:2?words=true&language=bn)
  - Search weakness: the API returns 286 results for "সালাত" but **0** for the everyday spellings "নামাজ" and "নামজ" — [API search](https://api.quran.com/api/v4/search?q=%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4&size=3&language=bn)
  - The web UI returned 199 results for "নামাজ", but the snippets shown were English translation lines — [UI search](https://quran.com/bn/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C)
  - A PWA manifest and a Workbox-style sw.js are served — [manifest](https://quran.com/manifest.json), [sw.js](https://quran.com/sw.js)
  - No prayer times, Hijri date or zakat features were seen — [home](https://quran.com/bn)

- **sunnah.com**
  - The Bukhari page offers a Bangla side-language radio (`avbl_languages = ["urdu","bangla"]`) and a "Grade" toggle — [Bukhari 1](https://sunnah.com/bukhari:1)
  - Nawawi40 lists ["bangla","bosnian"] — [nawawi40:1](https://sunnah.com/nawawi40:1)
  - No Bangla language was listed on Muslim book 1 (empty), and Abu Dawud lists only ["urdu"], so Bangla coverage is partial — [muslim/1](https://sunnah.com/muslim/1), [abudawud:1](https://sunnah.com/abudawud:1)
  - A Bangla search for "সালাত" returned "Sorry, there were no results found" — [search](https://sunnah.com/search?q=%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4)
  - WebFetch was refused with HTTP 403 (bot protection), but curl and the headless browser worked — [Bukhari 1](https://sunnah.com/bukhari:1)

- **hadithbd.com**
  - Homepage counts: "৩৩ গ্রন্থে ৯৪৫৭০ হাদিস", "১৭২ টি ইসলামী গ্রন্থ", "১৩৩ পরিচ্ছেদে ২৬৭ দুআ", "১৫৭ টি ইসলামী ভিডিও", 3,086 children's names, Quran hifz ("মুখস্থের হিসাব ও দৈনিক লক্ষ্য"), tilawat "অগ্রগতি সহ", and "১২৫৩৫ জন সাইনআপ করেছেন" — [home](https://www.hadithbd.com/)
  - An ayah page shows three Bangla translations (আল-বায়ান, তাইসিরুল, মুজিবুর রহমান) plus English. View modes are "সাধারণ / শব্দে শব্দে / তাজউইদ", and শানে নুযূল is available — [Hud 18](https://www.hadithbd.com/quran/hud/18)
  - Al-Fatiha shows a long tafsir note, but the author was not captured in the extracted text — [Al-Fatiha](https://www.hadithbd.com/quran/al-fatiha/)
  - A hadith page shows the edition ("সহীহ মুসলিম (ইসলামিক ফাউন্ডেশন)"), Arabic with and without diacritics, "হাদিসের মানঃ সহিহ (Sahih)" and the narrator. The "পুনঃনিরীক্ষণঃ" (review) field was blank — [hadith 4172](https://www.hadithbd.com/hadith/muslim-ifa/4172)
  - Banglish search: "namaj" maps to "বাংলায় খোঁজা হয়েছে … নামায | নামাজ | সালাত" with 1,000+ results — [search](https://www.hadithbd.com/search/?q=namaj)
  - The misspelling "নামজ" returned 1 irrelevant result (it matched "নামজাদা"), so there is no Bangla fuzzy correction — [search](https://www.hadithbd.com/search/?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C)
  - "হাদিসবিডি AI-এর উত্তর" pages generate Q&A answers with hadith citations and gradings (e.g., "সহীহ বুখারী (তাওহীদ পাবলিকেশন), হাদিস ৭৫৫৬ (সহীহ)"). The answers are machine-generated, not scholar-reviewed — [AI Q&A 622](https://www.hadithbd.com/ai/qa/view.php?id=622)
  - Weaknesses: no prayer time, Qibla or zakat in the navigation; a Cloudflare JS challenge blocks non-browser clients (curl and WebFetch got 403 "Just a moment...") — [home](https://www.hadithbd.com/)
  - The site is run by an individual ("সম্পূর্ণ ব্যক্তিগত উদ্যোগে পরিচালিত", developer Rokon UL Haque), and its content is "সর্বস্বত্ব সংরক্ষিত" — [search page footer](https://www.hadithbd.com/search/?q=namaj)

- **ihadis.com (IRD Foundation)**
  - Bukhari: 97 chapters and 7,563 hadith. Each hadith shows Arabic, Bangla, narrator and "সহিহ হাদিস" with "সহীহ বুখারী : ১", but no grader, translator or publisher is named and there is no commentary beyond footnotes — [Bukhari](https://ihadis.com/bukhari), [Bukhari/1](https://ihadis.com/bukhari/1)
  - Search returned "সালাত" 8,002 results and "নামাজ" 1,396 results after full render. A first attempt with a 6-second wait showed "০০", so results load slowly on the client — [search](https://ihadis.com/search?q=%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4)
  - Prayer times use the Karachi method, include forbidden times, nafl times (tahajjud/ishraq/duha), sehri/iftar and a monthly table. Asr was 02:54 PM, i.e. the non-Hanafi time, while muslimbangla and salat.habibur show 3:41–3:42 PM for Hanafi Asr. A madhab customization is mentioned — [prayer times](https://ihadis.com/countries/bangladesh/prayer-times-dhaka)
  - The same page shows Bengali date "21 Kartik 1433" where muslimbangla shows "20 Kartik" for the same day — [IH](https://ihadis.com/countries/bangladesh/prayer-times-dhaka), [MB](https://muslimbangla.com/world/BD/prayer-times-Dhaka)
  - A PWA manifest exists, but /sw.js is 404 — [manifest](https://ihadis.com/manifest.json)

- **muslimbangla.com**
  - The Quran page shows Bangla উচ্চারণ per verse (e.g., "আল হামদুলিল্লা-হি রাব্বিল ‘আ-লামীন।"), a তাফসীর link per verse, per-verse অডিও, and a "শব্দে শব্দে কুরআন (অডিও সহ)" menu item. The translator is not named — [sura 1](https://muslimbangla.com/quran/sura/1)
  - Duas show Arabic, উচ্চারণ and অর্থ across 40 categories, but no source hadith or book is cited and there is no audio — [dua-category/1](https://muslimbangla.com/dua-category/1)
  - Masail (Q&A) entries carry IDs around 171,800–173,100 and name the answering mufti (e.g., "উত্তর দিয়েছেন: মুফতী শফিকুল ইসলাম হাটহাজারী"), with dates up to 3 Nov 2026 and read counts — [masails](https://muslimbangla.com/masails)
  - The zakat calculator uses BAJUS gold prices and BD units (ভরি, রত্তি, আনা), deducts 17%, and states "আমরা ১১-০৩-২৬ তারিখের BAJUS নির্ধারিত মূল্য ব্যবহার করেছি" (date format ambiguous). It adds the disclaimer "যোগ্য মুফতির পরামর্শ নিন" — [zakat](https://muslimbangla.com/zakat-calculator)
  - The /today page shows Hijri "২৪ জুমাদাল উলা, ১৪৪৮" and a daily ayah with translation and tafsir, plus copy and share — [today](https://muslimbangla.com/today)
  - The manifest is misnamed: "হজ্ব ও উমরা গাইড | মুসলিম বাংলা" — [manifest](https://muslimbangla.com/manifest.json)
  - It ranked #1 on google gl=bd for "নামাজের সময়সূচি" — [Google gl=bd](https://www.google.com/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0+%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC%E0%A6%B8%E0%A7%82%E0%A6%9A%E0%A6%BF&gl=bd&hl=bn)

- **islamqa.info/bn**
  - Answers cite Quran ayat and hadith numbers (Bukhari 5066, Tirmidhi 2777) and are attributed to Sheikh Muhammad Saalih al-Munajjid. Pages offer save, share, download and print, and show dates (e.g., 13 Rabi al-Awwal 1439 / 01 Dec 2017) and view counts (222,721) — [answer 329](https://islamqa.info/bn/answers/329)
  - The Bangla is mostly natural but has typos, e.g. "নিয়ন্ত্রয়ের" — [answer 329](https://islamqa.info/bn/answers/329)
  - Search is Google-powered: "নামজ" auto-corrected to "নামাজ site:islamqa.info/bn", about 268 results — [search](https://islamqa.info/bn/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C)
  - It is a PWA (manifest plus service-worker.js) — [manifest](https://islamqa.info/manifest.json)
  - The header Hijri date was "২৫ জুমাদাল আউওয়াল ১৪৪৮ AH", one day ahead of the BD sites — [search page](https://islamqa.info/bn/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C)
  - The scholarly orientation is a single source (Saudi Salafi); it has no Quran reader, prayer time or dua module — [home](https://islamqa.info/bn)

- **islamhouse.com/bn**
  - A multi-format library (books, articles, audio, video, fatwa, author and source filters) with "1,990" Bangla items. Quran and hadith are delegated to the separate QuranEnc and HadeethEnc sites — [home](https://islamhouse.com/bn/)
  - The search URL redirected to `/search/#/bn/?phrase=` with an empty phrase, so the query was dropped and search could not be verified — [search](https://islamhouse.com/bn/search/?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C)
  - Headless LCP on the search page was about 4.5 s, the slowest observed. No licence terms were seen — [home](https://islamhouse.com/bn/)

- **alkawsar.com (Markazud Dawah monthly)**
  - A magazine archive with issues from October 2009 to October 2026, an author directory (e.g., Mufti Taqi Usmani, Mawlana Muhammad Abdul Malek), a numbered Q&A archive (e.g., "৬৯৮১. প্রশ্ন") with year filters from 2007 to 2026, and an ask form at /bn/qa/ask/ — [home](https://www.alkawsar.com/bn/), [Q&A](https://www.alkawsar.com/bn/qa/answers/)
  - Server-side search works for "সালাত" but returns "কোনো কিছু পাওয়া যা[য়নি]" for "নামজ" — [search](https://www.alkawsar.com/bn/search/?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C)
  - Fast (headless LCP about 1.2 s), with no ads, no manifest and no dark mode — [Q&A](https://www.alkawsar.com/bn/qa/answers/)

- **islamicfoundation.gov.bd**
  - The homepage is a standard government portal: notices, transfers, tenders, a zakat fund policy and bank account numbers, and "ইসলামিক ফাউন্ডেশন জার্নাল/অগ্রপথিক". No নামাজের সময়সূচি, Hijri calendar, moon-sighting notice or Ramadan timetable was found on the homepage or the notices page — [home](https://islamicfoundation.gov.bd/), [notices](https://islamicfoundation.gov.bd/pages/notices)
  - "পবিত্র কুরআন শরীফ — সূরা ফাতিহা, সূরা বাকারা…" links point to Google Drive files, and "ডিজিটাল কুরআন" links to quran.gov.bd — [home](https://islamicfoundation.gov.bd/), [external links](https://islamicfoundation.gov.bd/pages/external-links)
  - The www. host did not resolve, and WebFetch failed with "unable to verify the first certificate" (a broken TLS chain) — [home](https://islamicfoundation.gov.bd/)

- **quran.gov.bd (Ministry of Religious Affairs)**
  - "Copyright © 2012, Ministry of Religious Affairs", developed by BASE Limited. Verse text is served as images, the media section links to Adobe Flash Player, and there is no search. It offers an audio player and e-book downloads — [quran.gov.bd](https://quran.gov.bd/)
  - It still ranks on google gl=bd for "বাংলা কুরআন" and "quran bangla" (shown as "Al Quran: Digital") — [Google gl=bd](https://www.google.com/search?q=%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE+%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%86%E0%A6%A8&gl=bd&hl=bn)

- **quraanshareef.org** (top web result for "বাংলা কুরআন")
  - Simple per-surah pages with Arabic, Bangla and English and one audio element. The translator is not named, no Bangla উচ্চারণ appeared on Al-Fatihah, there is no tafsir, search, manifest or ads, and internal links use http:// — [Al-Fatihah](http://www.quraanshareef.org/Surah-Al-Fatihah)

- **salat.habibur.com** (top dedicated prayer-time site)
  - Shows coordinates, a Qibla bearing ("Bearing: 278°"), times both calculated to the second and rounded, both "জোহর শেষ (শাফি) 2:54" and "আসর (হানাফি) 3:42", সেহরি শেষ, ইশরাক, আসর মাকরুহ, the night thirds, Hijri "২৪-জামাদিউল আউয়াল", a full-year table, a Worldwide page and an API — [Bangla](https://salat.habibur.com/bangla/), [home](https://salat.habibur.com/)
  - Google's breadcrumb shows "৬৪ জেলা" — [Google gl=bd](https://www.google.com/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0+%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC%E0%A6%B8%E0%A7%82%E0%A6%9A%E0%A6%BF&gl=bd&hl=bn)
  - Weaknesses: a dated table UI, no manifest, and a banner pointing to a newer site ("OUR LATEST SITE IS HERE >> namaz.habibur.com") — [home](https://salat.habibur.com/)

- **quranmazid.com (IRD)**
  - The surah page defaults to "SAHEEH INTERNATIONAL" (English) at a mobile viewport, even though "Bengali" strings exist in the HTML. Default Bangla could not be confirmed. /manifest.json is 404 — [surah 1](https://quranmazid.com/1)

- **Newspapers**
  - Jugantor ইসলাম ও জীবন has sub-sections (রমজান, মাসআলা-মাসায়েল, ইজতেমা…) and a dated "আজকের নামাজের সময়সূচি: ৫ নভেম্বর ২০২৬" article. Two AdSense units and three ad iframes rendered — [Jugantor](https://www.jugantor.com/islam-life)
  - Prothom Alo ধর্ম rendered six ad iframes, and its HTML was about 3.0 MB — [Prothom Alo](https://www.prothomalo.com/religion)
  - The Kaler Kantho section loads Google Publisher Tag (gpt.js) and a Feedify push-notification manifest (curl only) — [Kaler Kantho](https://www.kalerkantho.com/online/Islamic-lifestylie)

- **Defunct or irrelevant targets**
  - islamijibon.com redirects to "IslamiJibon.com is for sale | HugeDomains" — [islamijibon.com](https://islamijibon.com)
  - al-hadith.com is a parked "/lander" page — [al-hadith.com](https://al-hadith.com)
  - hadith.one timed out twice (25 s and 20 s) — [hadith.one](https://hadith.one)
  - quranbangla.com is also for sale — [quranbangla.com](https://quranbangla.com)
  - assunnahfoundation.org is a charity/NGO site (education, relief, zakat fund donations) with no Quran, hadith, dua or prayer-time content. Its /sw.js and /manifest.webmanifest return the SPA HTML (text/html), so it is not a real PWA — [ASF](https://assunnahfoundation.org/), [sw.js](https://assunnahfoundation.org/sw.js)

### Inferences
- The biggest Bangla UX gap is search. Only Google-backed search (islamqa) handled a misspelling, and only hadithbd handled Banglish. quran.com's core API misses the colloquial "নামাজ" because its Bangla translations use "সালাত".
- Attribution is weak on the most-used BD sites. ihadis and muslimbangla do not name translators or graders, and muslimbangla duas carry no references. This is a trust gap a new product can close cheaply.
- Prayer-time sites disagree on Asr: ihadis 2:54 PM vs muslimbangla and salat.habibur 3:41–3:42 PM, the Shafi'i/Hanafi split. Most BD users follow Hanafi practice, so a default non-Hanafi Asr risks being wrong for them. Showing both, as salat.habibur does, is the safest pattern.
- Hijri: all BD-oriented sites (ihadis, muslimbangla, salat.habibur) showed 24 Jumada al-Awwal 1448, while Saudi-run islamqa showed the 25th. This suggests the BD sites apply a local (likely −1 day) offset, but none cited the Islamic Foundation moon-sighting committee as their source.
- On the Bengali solar date: under the revised Bangladesh calendar (Kartik begins 17 Oct), 5 Nov is 20 Kartik, which matches muslimbangla. If so, ihadis's "21 Kartik" is off by one. I did not verify this against an official source.
- The government sources (IF and quran.gov.bd) are effectively absent as products: no prayer times, a Flash-era Quran and Google Drive PDFs. Any "official IF times" claim by third parties cannot be checked against the IF site itself.

### Gaps
- No PageSpeed Insights scores or LCP values: the API quota was exhausted (HTTP 429). The headless LCP values are not comparable to PSI mobile scores.
- Logged-in features (quran.com bookmarks/notes/progress, ihadis bookmarks, hadithbd hifz/progress) were not exercised, because creating accounts was out of scope.
- I could not confirm whether quran.com's dark mode, ihadis's "ডার্ক" and hadithbd's "পড়ার থিম" are true dark themes; this rests on UI strings in the HTML, not on toggling them.
- Not verified: the hadithbd tafsir author for Al-Fatiha, the muslimbangla translator and tafsir source, and quraanshareef's translator.
- The full IF district list and whether IF publishes prayer times anywhere online (e.g., PDF) remain unknown; nothing was found on the portal.
- sunnah.com Bangla coverage was checked only on Bukhari, Muslim, Tirmidhi, Abu Dawud, Nasai, Ibn Majah, Riyadus Salihin and Nawawi40 (first pages).
- The quranmazid Bangla translation, word-by-word and tafsir UI were not verified (client-rendered settings).

## Key Question 2: Which features are table stakes, and which are rare differentiators?

### Takeaway
Table stakes among the serious Bangla sites are Arabic + Bangla translation, a surah or book index, per-verse audio, hadith with a grading label, a basic dua list, mobile-responsive layout and no ads. Rare differentiators are named attribution and gradings, Bangla-script pronunciation, Banglish or misspelling-tolerant search, both Hanafi and Shafi'i Asr, Qibla, a BD-unit zakat calculator, accounts with progress or hifz tracking, and a real offline PWA.

### Cited Findings
- **Universal or near-universal among Quran/Hadith sites**
  - Arabic + Bangla translation: QC, HBD, MB, QS, QGB — [QC](https://quran.com/bn/1), [HBD](https://www.hadithbd.com/quran/hud/18), [MB](https://muslimbangla.com/quran/sura/1), [QS](http://www.quraanshareef.org/Surah-Al-Fatihah), [QGB](https://quran.gov.bd/)
  - Audio: QC, HBD, MB, QS, QGB — same URLs as above.
  - Hadith grading label: HBD "সহিহ (Sahih)", IH "সহিহ হাদিস", SN Grade toggle — [HBD](https://www.hadithbd.com/hadith/muslim-ifa/4172), [IH](https://ihadis.com/bukhari/1), [SN](https://sunnah.com/bukhari:1)
  - No ads on any dedicated Islamic site examined; ads appear only on newspapers — [Jugantor](https://www.jugantor.com/islam-life), [Prothom Alo](https://www.prothomalo.com/religion)
- **Rare (one or two sites)**
  - Bangla-script pronunciation (উচ্চারণ) was seen only on muslimbangla; quran.com offers Latin transliteration only — [MB](https://muslimbangla.com/quran/sura/1), [QC API](https://api.quran.com/api/v4/verses/by_key/1:2?words=true&language=bn)
  - Multiple named Bangla tafsirs (Fathul Majid, Ibn Kathir, Ahsanul Bayan, Zakaria) appear only on quran.com — [QC API](https://api.quran.com/api/v4/resources/tafsirs)
  - Banglish search: only hadithbd ("namaj" → নামায/নামাজ/সালাত) — [HBD](https://www.hadithbd.com/search/?q=namaj)
  - Misspelling correction: only islamqa, via Google CSE — [IQA](https://islamqa.info/bn/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C)
  - Qibla bearing: only salat.habibur — [SH](https://salat.habibur.com/)
  - Both Hanafi and Shafi'i Asr: only salat.habibur — [SH](https://salat.habibur.com/bangla/)
  - Zakat calculator with BAJUS prices and BD units: only muslimbangla — [MB](https://muslimbangla.com/zakat-calculator)
  - Hifz tracker and tilawat progress: only hadithbd — [HBD](https://www.hadithbd.com/)
  - AI-generated Q&A with citations: only hadithbd — [HBD](https://www.hadithbd.com/ai/qa/view.php?id=622)
  - Named-mufti Q&A at scale: muslimbangla (IDs above 170k) and alkawsar — [MB](https://muslimbangla.com/masails), [ALK](https://www.alkawsar.com/bn/qa/answers/)
  - A working PWA (manifest plus service worker): only quran.com and islamqa — [QC sw](https://quran.com/sw.js), [IQA sw](https://islamqa.info/service-worker.js)
  - Dua with source references: hadithbd uses Hisnul Muslim (a sourced corpus); muslimbangla duas show no reference — [HBD dua](https://www.hadithbd.com/dua/), [MB dua](https://muslimbangla.com/dua-category/1)
- **Absent everywhere examined**
  - No site combined Hijri date with a cited BD moon-sighting source. ihadis says only that dates "may differ based on moon sighting" — [IH](https://ihadis.com/countries/bangladesh/prayer-times-dhaka)
  - No site showed named hadith-commentary (sharh) in Bangla on the pages checked; the hadithbd review field was empty — [HBD](https://www.hadithbd.com/hadith/muslim-ifa/4172)

### Inferences
- "No ads + clean mobile layout" is now table stakes, so ad-free alone is not a differentiator against hadithbd, ihadis or muslimbangla. It only differentiates against newspapers.
- The most defensible differentiators are trust (named translator, grader and source on every item) and Bangla-aware search (synonyms নামাজ/নামায/সালাত, Banglish, typo tolerance), because each is missing on most of the leading sites.

### Gaps
- I did not test whether muslimbangla's dua/Quran search or the quran.com UI handles Banglish.
- I did not audit native apps. Several sites (muslimbangla, ihadis, islamqa, hadithbd) push app downloads, and some features may live only in the apps.

## Key Question 3: Does any site combine Quran + Hadith + Dua + Prayer time + Q&A well in Bangla?

### Takeaway
Only muslimbangla.com covers all five in Bangla. Its weak spots are unsourced duas, unnamed translators, a misnamed PWA manifest and an unverified district picker. hadithbd.com covers four of five (no prayer time) with stronger sourcing, but its Q&A is AI-generated. The IRD pair (ihadis + quranmazid + duaruqyah) splits the same scope across three domains.

### Cited Findings
- muslimbangla navigation: কুরআন, হাদীস, নামাজের সময়, নামাজ শিক্ষা, মাসায়েল, দু'আ, প্রবন্ধ, কিতাব, যাকাত ক্যালকুলেটর — [MB home](https://muslimbangla.com), [MB Quran](https://muslimbangla.com/quran)
- hadithbd navigation: Quran, translation, tafsir, tilawat, hifz, hadith (33 books), books, dua/zikir (Hisnul Muslim), video, 99 names, AI Q&A. No prayer-time entry was found — [HBD home](https://www.hadithbd.com/)
- ihadis covers hadith, prayer times, nafl times and a Ramadan calendar. Its Quran lives on quranmazid.com and its duas link out to duaruqyah.com — [IH home](https://ihadis.com), [QM home](https://quranmazid.com)
- quran.com covers only the Quran, plus a "Duas" link; it has no hadith, prayer time or Q&A — [QC](https://quran.com/bn)
- islamqa.info/bn covers only Q&A — [IQA](https://islamqa.info/bn)

### Inferences
- An integrated, well-sourced Bangla product (Quran with উচ্চারণ and named tafsir, graded hadith, sourced dua and zikir, Hanafi-aware district prayer times with Qibla and an IF-aligned Hijri date, plus scholar-attributed Q&A) does not exist as a single web property today. muslimbangla is closest on breadth and hadithbd on depth and sourcing.

### Gaps
- I did not compare the actual translation quality or readability of muslimbangla's, ihadis's and hadithbd's Bangla texts beyond the samples quoted. That needs native-speaker review.
- Traffic and usage share for these sites was not measured (no SimilarWeb or other data), so "most used" is not established here.
