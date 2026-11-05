# Win on trust, Bangla and Bangladesh correctness

Research date: 5 November 2026. This report turns reports 01–08 into a ranked list of product opportunities for a new Bangladesh-focused Islamic web platform. It starts from the opportunity matrix in [07-content-and-feature-gaps.md](07-content-and-feature-gaps.md), re-checks each row against the demand evidence in [03](03-bangladesh-keyword-research.md), the intent evidence in [04](04-user-search-intent-and-behavior.md), the user-voice evidence in [06](06-bangladesh-specific-user-needs.md) and the timing evidence in [08](08-seasonal-search-trends.md), and classifies each opportunity for launch. It is research for a product team. It does not design screens or specify an implementation.

**Evidence labels used here.** Demand signals keep the evidence type of the report they come from: **Ahrefs range** (a third-party modelled monthly bucket for Bangladesh such as ">10,000", or an Ahrefs site-page model estimate such as "37K"; never a Google count), **Trends relative** (a Google Trends ratio to the prayer-time anchor "নামাজের সময়"; not volume), **observed suggestion** (Google or YouTube autocomplete on 5 Nov 2026; existence only, no volume), **user review** (verbatim Google Play reviews from the Bangladesh storefront, and our keyword-match counts over them; indicative only) and **audit observation** (what the site audit or a results-page snapshot showed on 5 Nov 2026). Analyst reasoning is marked **[Inferred]**.

## Key findings

- **The launch case rests on correctness and trust, not on topic coverage.** Almost every topic is already served somewhere. What no Bangla site combines is spelling-tolerant search, proofread Bangla-script pronunciation (উচ্চারণ), a named source and grade on every item, prayer times that match the Islamic Foundation (IF) with both Asr times labelled, and a Hijri date that follows Bangladesh's moon sighting ([05](05-competitor-feature-analysis.md); [07](07-content-and-feature-gaps.md)).
- **Ten opportunities are essential for launch.** Seven come from the top of the 07 matrix. Three are moved up because cross-report evidence makes them preconditions or the main source of daily return: IF-matched prayer times (07 rank 10), named provenance (07 rank 16) and Friday content (not scored in 07).
- **Two high-scoring 07 opportunities move down to "strong next".** Myth-checking has the weakest search demand of the 07 top ten (জাল হাদিস, "fabricated hadith", is below 100 a month in Ahrefs), and dream interpretation has high demand (1.32x the prayer-time anchor) but contested scholarly weight. Both depend on scholar-review capacity that is not yet in place.
- **Daily return comes from utilities, and acquisition comes from named items and occasions.** Prayer times and dua are searched in every week of five years and peak around Fajr. Twelve single surah, ayah and dua keywords sit in Ahrefs' >10,000 bucket, all rated KD "Easy". Ramadan week 1 runs about 40x the off-season level ([03](03-bangladesh-keyword-research.md); [08](08-seasonal-search-trends.md)).
- **Timing is tight.** In 2027, Shab-e-Meraj, Bishwa Ijtema, Shab-e-Barat and the start of Ramadan fall between early January and mid-February. Report 08 infers that a product not live and indexed by **mid-December 2026** misses both the reactivation moment (Shab-e-Barat) and the acquisition moment (Ramadan week 1). That is about six weeks after this report's date.
- **Several commonly assumed features are not supported by the evidence:** accounts and login, a madhhab picker, women-specific tools such as period tracking, azan alarms on the web, offline web use, a tasbih counter as a destination, a daily-hadith push as a return driver, Bijoy/Unicode rendering fixes, and "ad-free" as a differentiator against dedicated Islamic sites ([06](06-bangladesh-specific-user-needs.md#assumed-needs-the-evidence-did-not-support)).
- **Google search is shrinking for the content a new site would publish.** Core Quran, hadith and dua terms fell 30–60% in Trends between 2023 and 2026, and an AI-generated answer sat on all 6 sampled Google results pages ([03](03-bangladesh-keyword-research.md#google-demand-fell-3060-from-2023-to-2026-except-a-few-bangla-terms)). **[Inferred]** Static text pages are the least defensible asset. Utilities, verification and audio-checked pronunciation are harder for an AI box to replace.

## How the ranking was built, and why it differs from 07

Report 07 scored 24 opportunities on Demand, Severity, Competitive gap, Long-term value and (6 − Complexity), each 1–5, for a priority score out of 25. Those scores are analyst judgements, and 07 notes that re-weighting would reorder the middle of the list. This report keeps 07's scores visible and changes the order only where another report argues for it.

Four cross-report tests were applied to every row. **[Inferred]** These classification rules are the analyst's:

1. **Is the need rated Strong in 06, or is demand measured?** Measured means an Ahrefs bucket of >1,000 or more, or a Trends ratio of 0.10x the anchor or more ([03](03-bangladesh-keyword-research.md)).
2. **Does it earn daily or weekly return, or is it a precondition for trust in other content?** This draws on 04's return reasons and 08's daily, weekly and annual cycles.
3. **Can it ship without an unresolved dependency?** Examples are a scholar panel, a licensing deal or an unverified IF method.
4. **Does it fit the 2027 seasonal window in 08?**

**Essential for launch** means passing tests 1 and 2 with complexity 3 or less in 07 and no blocking dependency, or being a precondition for an essential item. **Strong next** means real evidence, but blocked by scholar capacity, editorial policy, a strong incumbent or a later seasonal date. **Defer** means weak or web-unevidenced demand, or high complexity or licensing cost. **Not supported by evidence** means the research looked and found nothing, or found contrary evidence.

### Final ranking at a glance

| Rank | Opportunity | 07 rank (score /25) | Class | Movement and reason |
|---|---|---|---|---|
| 1 | Bangla-aware search and spelling layer | 1 (21) | Essential | Unchanged |
| 2 | Canonical surah, ayah and dua pages with proofread উচ্চারণ and audio | 2 (20) | Essential | Unchanged |
| 3 | Sourced, need-based dua pages | 7 (19) | Essential | **Up 4.** Largest year-round family in 03 and 08; daily Fajr window |
| 4 | IF-matched district prayer times, both Asr labelled | 10 (18) | Essential | **Up 6.** Only never-zero daily utility (08); 07's low gap score does not reduce its return role |
| 5 | Bangladesh Hijri date with a cited moon-sighting source | 5 (20) | Essential | Unchanged |
| 6 | Occasion engine (about 10 annual occasions, BD dates) | 3 (20) | Essential | Down 3 in rank, but time-critical for Q1 2027 |
| 7 | Topic-hadith hubs with grade and reference | 4 (20) | Essential | Down 3 in rank only |
| 8 | Text accuracy: report-an-error and a public corrections log | 9 (19) | Essential | **Up 1, reclassified.** Precondition for ranks 2, 3 and 7 |
| 9 | Named translator, grader and edition on every item | 16 (17) | Essential | **Up 7.** Lowest-cost trust item and a precondition |
| 10 | Friday weekly content | not scored | Essential | **New.** Friday lifts some terms 25–60x (08) |
| 11 | Myth-check section for viral claims | 6 (20) | Strong next | **Down 5.** Weak search demand; needs a scholar reviewer |
| 12 | Dream interpretation with sourced, careful framing | 8 (19) | Strong next | **Down 4.** Editorial risk; needs a policy first |
| 13 | Madhhab-labelled answer pages on the seven query templates | 11 (18) | Strong next | Down 2; complexity 5 (scholar panel) |
| 14 | Zakat calculator in BD units, plus the IF fitra amount | 19 (15) | Strong next, due early Feb 2027 | **Up 5.** Falls inside the 2027 Ramadan window; rising queries |
| 15 | Islamic names with verified meanings; sourced captions | 12 (18) | Strong next | Down 3; acquisition more than retention |
| 16 | Women's fiqh pages, reviewed and labelled by school | 13 (18) | Strong next | Down 3; depends on reviewer capacity |
| 17 | BD-context Islamic finance explainers | 14 (17) | Strong next | Down 3; observed demand only |
| 18 | Ruqyah safety pages | 17 (16) | Strong next (small) | Unchanged in substance |
| 19 | Installable offline web app (PWA) | 15 (17) | Defer | **Down 4.** Offline use is not evidenced for the web (06) |
| 20 | Audio-first destinations and sleep playlists | 18 (15) | Defer | Per-item audio moves into rank 2 |
| 21 | Faraid (inheritance) calculator | 20 (15) | Defer | Unchanged |
| 22 | Children's section | 21 (15) | Defer | Unchanged |
| 23 | Hifz and revision tool | 23 (14) | Defer | Unchanged |
| 24 | Licensed book library | 24 (13) | Defer | Print view of own pages moves into rank 2 |
| 25 | Tasbih counter as a destination | 22 (15) | Not supported as a destination | Only as a small attachment to zikir pages |

## Essential for launch

### 1. Bangla-aware search and spelling layer

| Field | Detail |
|---|---|
| What it is | Search and page labelling that treat every common spelling, synonym, Banglish transliteration and typo of a term as the same thing (নামাজ / নামায / সালাত / "namaj"), across all content types. Visible labels use the popular spelling; scholarly spellings work as aliases. Surah and ayah pages also carry Latin-script names. |
| User need | "I typed it the way I spell it and found nothing" (07). Users type popular spellings and Banglish, and they write in Banglish too ([06](06-bangladesh-specific-user-needs.md#language-bangla-first-pronunciation-essential-spellings-plural)). |
| Evidence | [05 § Search tests](05-competitor-feature-analysis.md#search-tests-the-everyday-word-fails-where-the-scholarly-word-works): quran.com's search API returns 0 for নামাজ but 286 for সালাত ([quran.com API](https://api.quran.com/api/v4/search?q=%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4&size=3&language=bn)); only hadithbd maps Banglish ([hadithbd namaj](https://www.hadithbd.com/search/?q=namaj)); alkawsar returns nothing for the typo "নামজ" ([alkawsar](https://www.alkawsar.com/bn/search/?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%9C)). [03 § Spelling variants](03-bangladesh-keyword-research.md#spelling-variants-label-with-the-popular-form-match-every-form): দোয়া is about 24x দুয়া and about 300x দুআ; নামাজ is about 18x নামায ([Trends namaz spellings](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C,%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%AF,namaz,%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4,salah)). [03 § Script split](03-bangladesh-keyword-research.md#script-split-latin-wins-surah-names-bangla-wins-duas): "surah mulk" is about 7x "সূরা মুলক" ([Ahrefs surah mulk](https://ahrefs.com/keyword-generator/?country=bd&input=surah%20mulk)). |
| Demand signal | Trends relative (spelling ratios of 6–300x within single comparison sets); audit observation (search tests). There is no measure of how often visitors use on-site search. |
| Competitive gap | Large. Only hadithbd handles Banglish, and only islamqa corrects typos, through Google's own search engine. No site does both. |
| Complexity | 3/5 in 07: a Bangla phonetic and synonym layer. |
| Long-term value | 5/5 in 07. It compounds, because every new page becomes reachable by more spellings. It is also the only opportunity that improves every other row (07). |
| Confidence | **High** that the gap exists (directly tested). **Medium** on its weight, because acquisition mostly comes through Google, and the labelling half (popular spellings, Latin aliases) matters for that more than on-site search does. |

### 2. Canonical surah, ayah and dua pages with proofread উচ্চারণ and audio

| Field | Detail |
|---|---|
| What it is | One page per high-demand surah, ayah range and dua, with Arabic, proofread Bangla-script pronunciation (উচ্চারণ), a named Bangla translation, per-verse or per-dua audio as a pronunciation check, the answers to the format questions users type ("কত পারায়", which para; ফজিলত, virtue, with its grading), a large default font and a print view. It is framed as a learning aid, not a substitute for learning Arabic. |
| User need | "I can't read Arabic; I need to say it correctly." The query names the object and the format: "সূরা ইয়াসিন বাংলা উচ্চারণ" (Surah Yasin, Bangla pronunciation) ([04 § Worked example](04-user-search-intent-and-behavior.md)). |
| Evidence | [03 § Demand concentrates](03-bangladesh-keyword-research.md#demand-concentrates-in-four-head-families-and-thousands-of-named-items): 12 keywords reach Ahrefs' >10,000 bucket, all KD "Easy", including আয়াতুল কুরসি বাংলা উচ্চারণ ([Ahrefs ayatul kursi](https://ahrefs.com/keyword-generator/?country=bd&input=ayatul%20kursi)). [06 § Language](06-bangladesh-specific-user-needs.md#language-bangla-first-pronunciation-essential-spellings-plural): "দুয়া ও জিকিরের আরবি উচ্চারন টা বাংলায় দেন" (give the dua and zikir pronunciation in Bangla), 231 helpful votes ([Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)). Audio is how users check themselves: "অডিও উচ্চারণ শুনে শুনে ভুল গুলো ঠিক করি" (I correct my mistakes by listening to the audio) ([Play: Greentech Al Quran](https://play.google.com/store/apps/details?id=com.greentech.quran&hl=bn&gl=BD)). |
| Demand signal | Ahrefs range (>10,000 for 12 items; about 60 more at >1,000, almost all Easy); Trends relative ("বাংলা উচ্চারণ" rose from 32.7 to 35.4 between 2023 and 2026 while most Islamic terms fell; the term has non-religious uses too); user review. |
| Competitive gap | Among the dedicated sites audited, only muslimbangla shows Bangla-script pronunciation per verse. quran.com offers Latin transliteration only ([muslimbangla sura 1](https://muslimbangla.com/quran/sura/1); [05](05-competitor-feature-analysis.md#table-stakes-versus-rare-differentiators)). On Google the page opens with an AI answer and a video carousel, then muslimbangla and a TV channel's site ([04](04-user-search-intent-and-behavior.md)). |
| Complexity | 3/5 in 07: proofreading cost for every verse and dua. Audio licensing is not counted in 07's estimate. |
| Long-term value | 5/5 in 07; core to the audience. |
| Confidence | **High.** Measured demand, a documented gap and repeated user requests agree. The liability is equally well evidenced: users report transliteration errors verse by verse ([Play: E-book Library](https://play.google.com/store/apps/details?id=com.ebooklibrary.noraniquran&hl=bn&gl=BD)), so this item depends on rank 8. |

### 3. Sourced, need-based dua pages

| Field | Detail |
|---|---|
| What it is | Dua pages organised by life situation ("I am in debt", "I can't sleep", a deceased parent, exams), with masnoon duas that carry a source and grade, উচ্চারণ, audio, how many times and when to recite. It includes the bundles users name: morning and evening adhkar, before sleep, after salah. |
| User need | A situation, often on someone else's behalf ("স্বামীর রিজিক বৃদ্ধির দোয়া", dua for my husband's rizq). Users want to know how many times, when, and the source ([04 § Dua and zikir](04-user-search-intent-and-behavior.md#dua-and-zikir-a-life-situation-often-on-someone-elses-behalf)). |
| Evidence | [03 § C. Dua and zikir](03-bangladesh-keyword-research.md#c-dua-and-zikir-life-situations-bundles-and-trusted-names): দোয়া averages 2.50x the anchor's median week over five years ([Trends T9](https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE,%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%95%20%E0%A6%A8%E0%A6%BE%E0%A6%AE,%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%AB)); Ahrefs lists 17,365 keyword ideas for দোয়া ([Ahrefs দোয়া](https://ahrefs.com/keyword-generator/?country=bd&input=%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE)). [05](05-competitor-feature-analysis.md#what-each-competitor-does-exceptionally-well-and-where-it-fails): muslimbangla's 40 dua categories carry no source references ([muslimbangla dua](https://muslimbangla.com/dua-category/1)). Users praise sourcing: "The best thing is all of them have authentic references" ([Play: Hisnul Muslim BN](https://play.google.com/store/apps/details?id=com.greentech.hisnulmuslimbn&hl=bn&gl=BD)). |
| Demand signal | Trends relative (2.50x anchor-median, the largest year-round Islamic term measured; never zero in five years per [08](08-seasonal-search-trends.md#year-round-demand-what-never-switches-off)); Ahrefs range (>10,000 for দোয়া কুনুত, সাইয়েদুল ইস্তেগফার, ইফতারের দোয়া and তারাবির নামাজের দোয়া; >1,000 for situational duas such as sleep, janaza, istikhara, evil eye, rizq and debt); observed suggestion (bundles, trusted scholar names typed into queries). |
| Competitive gap | Moderate. hadithbd carries a sourced Hisnul Muslim (267 duas) and ranks #1 for সাইয়েদুল ইস্তেগফার (Ahrefs site page) ([02](02-top-islamic-websites-bangladesh.md#hadithbdcom)). News portals and ad-heavy blogs win many situational dua queries without grading ([03](03-bangladesh-keyword-research.md)). |
| Complexity | 2/5 in 07: a Hisnul Muslim-type corpus already exists. |
| Long-term value | 4/5 in 07: daily-use content. |
| Confidence | **High.** Why it moves up from 07 rank 7: 07 scored the competitive gap at 3 because hadithbd is sourced, but 03 and 08 show this is the largest and steadiest demand family. Earlier research (Nov 4 2026) found dua searches peak at 05:00–06:00, so dua pages also carry daily return. One evidence conflict: "রিজিক বৃদ্ধির দোয়া" is >1,000 in Ahrefs but 0.001x as an exact phrase in Trends. 03 attributes this to Trends' exact-phrase limit, not a contradiction. |

### 4. IF-matched district prayer times, both Asr times labelled

| Field | Detail |
|---|---|
| What it is | A district timetable that matches the Islamic Foundation by default. It shows start, end and forbidden times, both Asr times labelled by method (first or second shadow) rather than by sect, the source of the times, and manual location choice without requiring GPS. Sehri and iftar times for Ramadan are part of this. It does not promise an azan alarm. |
| User need | "What time is Asr in my district, by Islamic Foundation timing?" Accuracy is judged to the minute ([04 § Namaz](04-user-search-intent-and-behavior.md#namaz-and-prayer-times-the-right-minute-for-my-district-my-madhhab)). |
| Evidence | [06 § Local time](06-bangladesh-specific-user-needs.md#local-time-is-a-religious-obligation-not-a-convenience): reviews with 188 and 196 helpful votes praise district schedules, and one asks "ইসলামিক ফাউন্ডেশন এর সময়,অনুযায়ী করে দিন" (please follow Islamic Foundation times) ([Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)). [05 § Asr](05-competitor-feature-analysis.md#asr-hijri-and-bangla-dates-disagree-across-sites-on-the-same-day): on 5 Nov 2026 ihadis showed Asr at 2:54 PM, while muslimbangla and salat.habibur showed 3:41–3:42 PM; only salat.habibur shows both ([salat.habibur](https://salat.habibur.com/bangla/); [ihadis](https://ihadis.com/countries/bangladesh/prayer-times-dhaka)). |
| Demand signal | Trends relative ("নামাজের সময়" is the 1.00x anchor, "namaz time" 1.06x, "নামাজের সময়সূচি" 0.23x; never zero in any week; +8–20% on Fridays) ([Trends BD 12-m](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m)); Ahrefs range (site-page model estimates of 37K a month for নামাজের সময়সূচি and 31K for ফজরের নামাজের সময়, from muslimbangla's keyword list; model outputs, not Google counts) ([Ahrefs muslimbangla.com](https://ahrefstop.com/websites/muslimbangla.com)); user review. |
| Competitive gap | Small in 07 (2/5), because strong incumbents exist: for নামাজের সময়সূচি, Ahrefs lists muslimbangla at position 4, while 02's Google-BD check (headless, non-BD IP) showed muslimbangla #1 and salat.habibur #2 ([02](02-top-islamic-websites-bangladesh.md#salathabiburcom)). The two position readings conflict; both put the incumbents near the top. The IF's own site publishes no usable timetable ([IF](https://islamicfoundation.gov.bd/)). |
| Complexity | 3/5 in 07. **Blocking dependency:** the IF's calculation method is unverified. A 2026 Ittefaq report describes adding or subtracting up to 9 minutes from Dhaka, while a Jugantor snippet quotes the IF calling that method "ভুল ও ভিত্তিহীন" (wrong and baseless) ([Ittefaq](https://www.ittefaq.com.bd/775700/); [Jugantor](https://www.jugantor.com/islam-life/1057413)). 06 says this must be verified against an IF document before launch. |
| Long-term value | 5/5 in 07: a daily habit. |
| Confidence | **High** for the need. **Medium** for the ability to win traffic against incumbents. **Low** for method correctness until the IF document is obtained. Why it moves up from 07 rank 10: 08 shows prayer times are searched in every week of five years and peak at 04:00–06:00 (earlier research). Report 01's conclusion recommends daily-use utilities over static pages as Google traffic declines. The timetable also carries the Hijri date (rank 5) and the Ramadan sehri and iftar times (rank 6). A low competitive-gap score does not remove its role as the return driver. Upazila-level times have only Weak evidence in 06 (two reviews), so the district is the evidenced default. |

### 5. Bangladesh Hijri date with a cited moon-sighting source

| Field | Detail |
|---|---|
| What it is | A Hijri date that follows Bangladesh's National Moon Sighting Committee, states that source, can be corrected by ±1 day within hours of an announcement, and rolls over at Maghrib. It sits beside the Bangla calendar date (বঙ্গাব্দ), which has Moderate evidence. |
| User need | "The Arabic date in my app is wrong." Users append "বাংলাদেশ" to date queries because Bangladesh's dates often differ from Saudi Arabia's ([08](08-seasonal-search-trends.md#before-during-and-after-the-same-three-phase-journey-every-time)). |
| Evidence | [06 § Hijri](06-bangladesh-specific-user-needs.md#local-time-is-a-religious-obligation-not-a-convenience): Bangladesh celebrated both Eids of 2026 a day after Saudi Arabia ([Daily Star](https://online-d11.thedailystar.net/news/bangladesh/news/eid-ul-fitr-saturday-shawwal-moon-not-sighted-4132701); [bdnews24](https://bdnews24.com/bangladesh/8618af4cfd38)). "আরবি তারিখ চাঁদ দেখার উপরে নির্ভর করে দেখায় না" (the Arabic date isn't based on moon sighting) ([Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD)). [05 § Hijri](05-competitor-feature-analysis.md#asr-hijri-and-bangla-dates-disagree-across-sites-on-the-same-day): BD sites showed 24 Jumada al-Awwal on 5 Nov 2026, islamqa showed the 25th ([islamqa](https://islamqa.info/bn/search?q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C)). |
| Demand signal | Observed suggestion ("… কত তারিখে বাংলাদেশ" on every occasion); user review (26 reviews mention the Hijri date or the moon, own count). Search volume for the date itself is not measured. |
| Competitive gap | Largest possible (5/5 in 07): **no site audited cites the Moon Sighting Committee**. ihadis and muslimbangla also disagreed on the Bangla calendar date (21 vs 20 Kartik). |
| Complexity | 2/5 in 07: a manual update on each announcement. |
| Long-term value | 4/5 in 07: a daily trust signal. |
| Confidence | **High** for the divergence (documented). **Medium** for demand size: 06 rates the need Strong because of the factual divergence, not because complaints are numerous. |

### 6. Occasion engine for about 10 annual occasions

| Field | Detail |
|---|---|
| What it is | One durable page per occasion (Shab-e-Meraj, Shab-e-Barat, Ramadan, Laylatul Qadr, Eid-ul-Fitr, Hajj, Eid-ul-Adha and Qurbani, Ashura, Eid-e-Milad-un-Nabi, Bishwa Ijtema). Each shows the Bangladesh date and countdown before the event, how-to content (niyat, rakat, dua, amal with grading) during it, and next year's BD date afterwards. Ramadan includes district sehri and iftar calendars and the IF fitra amount once announced. |
| User need | "When is it in Bangladesh, and what do I do?" ([04 § Ramadan and Hajj](04-user-search-intent-and-behavior.md#ramadan-and-hajj-dates-for-bangladesh-minutes-for-my-district)). |
| Evidence | [08 § Annual calendar](08-seasonal-search-trends.md#the-annual-calendar-one-wave-many-spikes): "রমজান" runs about 40x its off-season level in Ramadan week 1 ([Trends T1](https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%B0%E0%A6%AE%E0%A6%9C%E0%A6%BE%E0%A6%A8,%E0%A6%B8%E0%A7%87%E0%A6%B9%E0%A6%B0%E0%A6%BF,%E0%A6%87%E0%A6%AB%E0%A6%A4%E0%A6%BE%E0%A6%B0,%E0%A6%B8%E0%A7%87%E0%A6%B9%E0%A6%B0%E0%A6%BF%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC)); Shab-e-Barat peaks at 6.3x the anchor's median week ([Trends T2](https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%B6%E0%A6%AC%E0%A7%87%20%E0%A6%AC%E0%A6%B0%E0%A6%BE%E0%A6%A4,%E0%A6%B6%E0%A6%AC%E0%A7%87%20%E0%A6%95%E0%A6%A6%E0%A6%B0,%E0%A6%B6%E0%A6%AC%E0%A7%87%20%E0%A6%AE%E0%A7%87%E0%A6%B0%E0%A6%BE%E0%A6%9C,ramadan%20calendar)). On 5 Nov 2026 autocomplete already offered "শবে বরাত ২০২৭ কত তারিখে বাংলাদেশ" ([Autocomplete শবে বরাত](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B6%E0%A6%AC%E0%A7%87%20%E0%A6%AC%E0%A6%B0%E0%A6%BE%E0%A6%A4)). |
| Demand signal | Trends relative (সেহরির শেষ সময় 0.34x and ইফতারের সময় 0.33x as 52-week means, almost all in Ramadan; seasonal terms are zero in 65–91% of weeks); Ahrefs range (>10,000 for ইফতারের দোয়া and তারাবির নামাজের দোয়া; >1,000 for শবে বরাতের ফজিলত সম্পর্কে হাদিস); observed suggestion (2027 dates, countdowns). |
| Competitive gap | Partial (3/5 in 07). News portals publish dated articles, calendar sites post estimates, and ihadis has programmatic district Ramadan calendars. No single page moves from countdown to how-to to next year's BD date. |
| Complexity | 2/5 in 07: about 10 templated pages a year. |
| Long-term value | 5/5 in 07: an annual return cycle, roughly every one to two months (08). |
| Confidence | **High** for the shape of seasonal demand (five years of weekly data match every verified 2026 date). **Medium** on payoff: Ahrefs' modelled traffic for hadithbd and muslimbangla rises only about 1.2–1.9x in the Ramadan month, against 5–40x for individual keywords ([08 § Site traffic](08-seasonal-search-trends.md#site-traffic-rises-only-1219x-in-ramadan)). Occasions bring acquisition and reactivation; they are not the year-round base. Why it ranks sixth, not third: it is time-critical but feeds on ranks 2–5, because its how-to content is dua, surah and prayer-time content and its dates depend on the Hijri source. |

### 7. Topic-hadith hubs with grade and reference

| Field | Detail |
|---|---|
| What it is | Pages for "<topic> নিয়ে হাদিস" (hadith about mothers, rizq, patience, marriage, death) with Arabic, Bangla, a named grade and grader, book and number, and a share card that keeps the reference attached. They link into a hadith library rather than replacing it. |
| User need | "I need a hadith about my mother / rizq / patience to share." The largest measured hadith group wants a short hadith to post, quote or use in school ([04 § Hadith](04-user-search-intent-and-behavior.md#hadith-something-to-share-or-a-citation-to-check)). |
| Evidence | [03 § B. Hadith](03-bangladesh-keyword-research.md#b-hadith-short-shareable-hadith-and-topic-lists-not-collection-browsing): Ahrefs >1,000 for ছোট হাদিস (short hadith), হাদিসের বাণী and ১০০ টি ছোট হাদিস ([Ahrefs হাদিস](https://ahrefs.com/keyword-generator/?country=bd&input=%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8)). Caption sites rank first with 0 Arabic characters, no grading and about 28–44 ad-script references ([Bing মা নিয়ে হাদিস](https://www.bing.com/search?q=%E0%A6%AE%E0%A6%BE%20%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87%20%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8&cc=BD&setlang=bn)). |
| Demand signal | Ahrefs range (several >1,000 items); observed suggestion (a long tail of topics, each with ক্যাপশন, ছবি and আরবি variants, and Banglish forms); Trends relative ("হাদিস" 1.13x, but its top related query is the homework query "হাদিস কি"). |
| Competitive gap | 4/5 in 07. hadithbd and ihadis serve collection browsing, not topics. Library browsing is not the gap: "সহিহ বুখারী বাংলা" is well served ([07 § What is deliberately not a gap](07-content-and-feature-gaps.md#what-is-deliberately-not-a-gap)). |
| Complexity | 2/5 in 07: built on existing graded corpora (licensing aside). |
| Long-term value | 4/5 in 07: shareable pages spread the brand. |
| Confidence | **Medium-High.** The results-page quality gap comes from Bing, used as a proxy for Google. |

### 8. Text accuracy: report-an-error and a public corrections log

| Field | Detail |
|---|---|
| What it is | Proofread text, a visible report-an-error route on every verse, hadith and dua, a public response, and a dated corrections log ("সংশোধন"). |
| User need | "This verse or hadith text has a mistake" and "I reported it but nobody responded" ([04](04-user-search-intent-and-behavior.md#hadith-something-to-share-or-a-citation-to-check)). |
| Evidence | [06 § Language](06-bangladesh-specific-user-needs.md#language-bangla-first-pronunciation-essential-spellings-plural) and [04 § Worked example](04-user-search-intent-and-behavior.md): a 1★ review for "কুল্লা" instead of "কুল্লি" in Yasin ([Play: PG Apps BD](https://play.google.com/store/apps/details?id=com.pgappsbd.all_quran_orthosho&hl=bn&gl=BD)); "রিপোর্ট করেছি- কিন্তু কোন রেসপন্স নেই" (I reported it but got no response) ([Play: IRD Al Hadith](https://play.google.com/store/apps/details?id=com.ihadis.ihadis&hl=bn&gl=BD)). |
| Demand signal | User review (86 spelling or translation-error reviews, 37 rated 3★ or lower, own count, per [07](07-content-and-feature-gaps.md#opportunity-matrix-ranked)); audit observation (no public corrections log on the sites audited). |
| Competitive gap | 3/5 in 07: every major app has some errors. |
| Complexity | 3/5 in 07: proofreading plus a workflow. |
| Long-term value | 5/5 in 07: a trust moat. |
| Confidence | **High.** Reclassified as essential because ranks 2, 3 and 7 publish exactly the text users audit. 06's conclusion is that one visible error costs more trust than a missing feature. |

### 9. Named translator, grader and edition on every item

| Field | Detail |
|---|---|
| What it is | Every translation, tafsir, hadith grade and dua carries the name of its translator, grader or source edition. Where several translations are licensed, users can choose between them. |
| User need | "Whose translation or tafsir is this?" Users ask for named translations (the Islamic Foundation's) and named tafsirs (Jalalayn, Ma'ariful Quran) ([06 § Language](06-bangladesh-specific-user-needs.md#language-bangla-first-pronunciation-essential-spellings-plural)). |
| Evidence | [05 § Full feature matrix](05-competitor-feature-analysis.md#full-feature-matrix): quran.com names 4 Bangla translations and 4 Bangla tafsirs ([quran.com translations API](https://api.quran.com/api/v4/resources/translations)); muslimbangla's translator is not named; ihadis names no grader or translator ([ihadis Bukhari 1](https://ihadis.com/bukhari/1)). [10 conflict #19](10-research-methodology-and-sources.md#conflicting-evidence): one reviewer wants the IF translation, another criticises an IF rendering, which supports named, switchable translations. |
| Demand signal | User review; audit observation. |
| Competitive gap | 3/5 in 07: missing on the most-used BD sites, done well by quran.com. |
| Complexity | 2/5 in 07: metadata. Licensing is not counted. |
| Long-term value | 4/5 in 07: trust. |
| Confidence | **High.** Why it moves up from 07 rank 16: it is the cheapest trust item, it is a precondition for ranks 2, 3 and 7, and 05's conclusion lists "a name on every translation, grade and dua" among the cheapest wins. |

### 10. Friday weekly content

| Field | Detail |
|---|---|
| What it is | A weekly set for Friday: Surah Kahf (with "first 10 ayat"), Jumu'ah rakat and niyat, the khutbah text with উচ্চারণ, Friday amal, and shareable Friday greetings whose quotes carry references. It reuses the pages in ranks 2, 3 and 4. |
| User need | Friday routines and Friday posting ([04 § Quran](04-user-search-intent-and-behavior.md#quran-reading-a-specific-surah-without-reading-arabic); [08 § Weekly and daily cycles](08-seasonal-search-trends.md#the-weekly-and-daily-cycles)). |
| Evidence | [08](08-seasonal-search-trends.md#the-weekly-and-daily-cycles): on Fridays "জুমার নামাজ" runs about 40–60x and "সূরা কাহাফ" about 25–45x their other-weekday levels ([Trends TD daily](https://trends.google.com/trends/explore?date=today%203-m&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%9C%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%B0%20%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%AB,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%AB,%E0%A6%9C%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%B0%20%E0%A6%A6%E0%A6%BF%E0%A6%A8%E0%A7%87%E0%A6%B0%20%E0%A6%86%E0%A6%AE%E0%A6%B2)). The spelling সূরা কাহাফ is used about 40x more than সূরা কাহফ on Fridays ([03](03-bangladesh-keyword-research.md#spelling-variants-label-with-the-popular-form-match-every-form)). |
| Demand signal | Trends relative (Friday multipliers); Ahrefs range (surah kahf >10,000; surah kahf first 10 ayat >1,000); observed suggestion ("প্রথম ও দ্বিতীয় খুতবা pdf / বাংলা উচ্চারণ", first and second khutbah). |
| Competitive gap | Not assessed in 07 or the audit. prothomalo.com appeared in results for সূরা কাহফ প্রথম ১০ আয়াত ([01](01-bangladesh-islamic-digital-market.md#four-channels-share-islamic-attention-and-search-feeds-the-dedicated-sites)). Treat the gap as unknown. |
| Complexity | Not scored in 07. **[Inferred]** Low, because it reuses pages already in scope. |
| Long-term value | **[Inferred]** High: 08 calls Friday the most reliable recurring traffic moment outside Ramadan. |
| Confidence | **Medium.** Demand and its weekly rhythm are measured. The competitive gap is not. This is an addition to the 07 matrix, argued from 08. |

## Strong next

### 11. Myth-check section for viral claims

| Field | Detail |
|---|---|
| What it is | Short pages that state a popular claim, the verdict, its grading and source, and the named scholar who reviewed it. They are linked from the related dua, hadith and occasion pages. |
| User need | "Is this viral dua or claim real?" Examples: "৮০ বছরের গুনাহ মাফের দোয়া" (a dua that forgives 80 years of sins), "জুমার নামাজ ২২ রাকাত" (22 rakat of Jumu'ah), "ইমাম মাহদীর আগমন ২০২৮" (Imam Mahdi's coming in 2028) ([03 § New topics](03-bangladesh-keyword-research.md#new-topics-dreams-outrank-prayer-times)). |
| Evidence | [07](07-content-and-feature-gaps.md#opportunity-matrix-ranked) row 6 ([Trends গুনাহ related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%97%E0%A7%81%E0%A6%A8%E0%A6%BE%E0%A6%B9)). Against it: জাল হাদিস and every authenticity variant are below 100 searches a month ([Ahrefs জাল হাদিস](https://ahrefs.com/keyword-generator/?country=bd&input=%E0%A6%9C%E0%A6%BE%E0%A6%B2%20%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8)), and 06 rates authenticity "Not evidenced as a traffic driver". |
| Demand signal | Trends relative (related-query index 8 for the 80-years dua under গুনাহ); Ahrefs range (<100); observed suggestion. |
| Competitive gap | 5/5 in 07: nobody does it. |
| Complexity | 3/5 in 07: needs scholarly review. |
| Long-term value | 5/5 in 07: defines credibility. |
| Confidence | **Medium.** Why it moves down from 07 rank 6: of 07's top ten it has the weakest demand (D2), and it cannot ship without a named reviewer. Grading on Shab-e-Barat amal and virtue-hadith content belongs at launch (rank 6), because 08 notes that content carries the most authenticity disputes. The Jahangirnagar University study often cited for misinformation (69.3% of commenters tended to believe it) covered communal and political cases, not fake hadith ([UNB](https://unb.com.bd/category/Bangladesh/alarming-rise-in-religious-misinformation-on-social-media-in-bangladesh-new-study-reveals/136804); [06](06-bangladesh-specific-user-needs.md#trust-sources-scholars-and-the-madhhab-question)). |

### 12. Dream interpretation with sourced, careful framing

| Field | Detail |
|---|---|
| What it is | Pages for common dream objects (fish, snake, marriage, a baby, a dead person) that give sourced classical views, state clear limits on interpretation and link to relevant duas. |
| User need | "I saw a snake in my dream. What does it mean?", often searched right after waking ([04 § Lifestyle](04-user-search-intent-and-behavior.md#lifestyle-naming-a-child-posting-on-friday-making-sense-of-a-dream)). |
| Evidence | [03 § New topics](03-bangladesh-keyword-research.md#new-topics-dreams-outrank-prayer-times): স্বপ্নে is 1.32x the anchor and still rising ([Trends স্বপ্নে related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%AA%E0%A7%8D%E0%A6%A8%E0%A7%87)); results include Facebook, Quora and the Kolkata newspaper Anandabazar Patrika ([Google স্বপ্নে সাপ দেখলে কি হয়](https://www.google.com/search?hl=bn&gl=bd&q=স্বপ্নে+সাপ+দেখলে+কি+হয়)). |
| Demand signal | Trends relative (1.32x, larger than prayer times; earlier research, Nov 4 2026, recorded a 05:00–08:00 peak and a yearly mean that rose from 16 in 2021 to 40 in 2026 within its set). |
| Competitive gap | 4/5 in 07: no careful BD Islamic source. |
| Complexity | 3/5 in 07: sensitive editorial framing. |
| Long-term value | 3/5 in 07: engagement value with contested scholarly weight. |
| Confidence | **High** for demand. **Low** for what users accept as a careful answer: no review or user-voice evidence covers dream content. Why it moves down from 07 rank 8: this is where demand and trust policy pull hardest in opposite directions. It should follow an explicit editorial policy and scholar sign-off. It is the first candidate after launch if the product owner accepts that policy. |

### 13. Madhhab-labelled answer pages on the seven query templates

| Field | Detail |
|---|---|
| What it is | Answer pages built on the seven Bangla question templates in 03 (ruling, sin-check, validity, how-to, list or count, amount or date this year, authority-tagged). Each gives the ruling, evidence, school differences labelled, a named reviewer and a date. Private, anonymous asking would follow once answering capacity exists. |
| User need | "Is this jayez? Who says so, and by which school?" ([04 § Q&A](04-user-search-intent-and-behavior.md#qa-and-masala-a-private-doubt-answered-by-a-named-authority)). |
| Evidence | [03 § Seven question templates](03-bangladesh-keyword-research.md#seven-question-templates-organise-most-qa-demand); Hanafi and Ahl-e-Hadith answers appear side by side with no labels ([Google রাগের মাথায় তালাক](https://www.google.com/search?hl=bn&gl=bd&q=রাগের+মাথায়+তালাক+দিলে+কি+তালাক+হয়)); muslimbangla runs mufti-answered masail at scale ([muslimbangla masails](https://muslimbangla.com/masails)); a user asks another app to "add a question option like Muslim Bangla's" ([Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD)). |
| Demand signal | Trends relative (জায়েজ 0.30x, হারাম 0.31x, তালাক 0.23x; generic words that include non-religious uses) ([Trends জায়েজ](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%9C%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%9C)); observed suggestion (templates and authority tags); user review. |
| Competitive gap | 4/5 in 07: no labelling anywhere. muslimbangla (IDs above 170,000) and alkawsar are strong on answer volume and named authority. |
| Complexity | 5/5 in 07: needs a scholar panel. |
| Long-term value | 5/5 in 07: authority. |
| Confidence | **Medium.** Strong next because of complexity, not weak demand. |

### 14. Zakat calculator in BD units, plus the IF fitra amount

| Field | Detail |
|---|---|
| What it is | A Bangla zakat calculator in local units (ভরি, রত্তি, আনা) with the current nisab and gold price, savings certificates (সঞ্চয়পত্র) and DPS, plus the IF fitra amount as soon as it is announced. |
| User need | "How much zakat do I owe in taka this year?" ([04](04-user-search-intent-and-behavior.md#ramadan-and-hajj-dates-for-bangladesh-minutes-for-my-district)). |
| Evidence | [03 § E. Q&A](03-bangladesh-keyword-research.md#e-qa-masala-and-fatwa-seven-question-templates): rising queries "কত টাকা হলে যাকাত দিতে হবে ২০২৬" (Breakout) and "যাকাত ক্যালকুলেটর বাংলাদেশ" (+120%) ([Trends যাকাত related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%A4)); the results page is led by charities and foreign tools ([Google যাকাত ক্যালকুলেটর](https://www.google.com/search?hl=bn&gl=bd&q=যাকাত+ক্যালকুলেটর)). |
| Demand signal | Trends relative (যাকাত 0.16x, peaking in Ramadan weeks 1–3; ফিতরা 0.083x, peaking in the last ten days); observed suggestion. |
| Competitive gap | 3/5 in 07: muslimbangla's calculator is good, with BAJUS gold prices and a "consult a qualified mufti" disclaimer ([muslimbangla zakat](https://muslimbangla.com/zakat-calculator)). |
| Complexity | 3/5 in 07: yearly nisab and price updates plus review. |
| Long-term value | 3/5 in 07: annual. |
| Confidence | **Medium.** Why it moves up from 07 rank 19: 08's 2027 calendar puts zakat and fitra content inside the Q1 window, with content live by early February 2027. It stays "next" rather than "launch" because a capable incumbent exists and the tool needs a yearly update process. |

### 15. Islamic names with verified meanings; sourced captions

| Field | Detail |
|---|---|
| What it is | Name pages with meaning, origin and how the meaning was verified; a caption and quote library where every quoted hadith or ayah carries its reference. |
| User need | Naming a newborn; finding something to post ([04 § Lifestyle](04-user-search-intent-and-behavior.md#lifestyle-naming-a-child-posting-on-friday-making-sense-of-a-dream)). |
| Evidence | [03 § H. Lifestyle](03-bangladesh-keyword-research.md#h-lifestyle-names-captions-and-family-rights): no caption site cites its source; names come from HadithBD, Facebook and FirstCry, an Indian parenting site ([Google মেয়েদের ইসলামিক নাম অর্থসহ](https://www.google.com/search?hl=bn&gl=bd&q=মেয়েদের+ইসলামিক+নাম+অর্থসহ)). |
| Demand signal | Trends relative (ইসলামিক নাম 0.52x, searched in every week of five years, with a slowly declining peak; ইসলামিক ক্যাপশন 0.13x; ইসলামিক স্ট্যাটাস 0.078x and shrinking); Ahrefs range (a site-page model estimate of 19K a month for মেয়েদের ইসলামিক নাম, where hadithbd ranks #2) ([Ahrefs hadithbd.com](https://ahrefstop.com/websites/hadithbd.com)). |
| Competitive gap | 4/5 in 07. |
| Complexity | 2/5 in 07: list content. |
| Long-term value | 3/5 in 07: acquisition more than retention. |
| Confidence | **Medium.** Caption demand probably concentrates on Facebook and Pinterest, which were not measured ([03](03-bangladesh-keyword-research.md#h-lifestyle-names-captions-and-family-rights)). |

### 16. Women's fiqh pages, reviewed and labelled by school

| Field | Detail |
|---|---|
| What it is | Carefully reviewed pages on menstruation, ghusl, women's salah and related masail, with views labelled by school where they differ and no social prompts on the page. |
| User need | A private question users do not want to ask in a public feed ([04](04-user-search-intent-and-behavior.md#qa-and-masala-a-private-doubt-answered-by-a-named-authority)). |
| Evidence | [06 § Women users](06-bangladesh-specific-user-needs.md#device-bandwidth-age-and-gender): "মহিলাদের সিজদার ব্যাপারটা পরিষ্কার করা হয়নি" (the women's sajdah is not made clear) ([Play: Deen](https://play.google.com/store/apps/details?id=com.deenislamic&hl=bn&gl=BD)); results pages are dominated by Facebook posts and rival-school answers ([Google হায়েজ অবস্থায় কুরআন পড়ার বিধান](https://www.google.com/search?hl=bn&gl=bd&q=হায়েজ+অবস্থায়+কুরআন+পড়ার+বিধান)). Earlier research (Nov 4 2026) found IslamQA Bangla's two most-read answers, about 223,600 and 222,700 reads, concern sexual purity and masturbation ([IslamQA Bangla](https://islamqa.info/bn)). |
| Demand signal | Trends relative (হায়েজ 0.016x); observed suggestion; audit observation (read counts). Google underrepresents these queries; one seed returned no suggestions. |
| Competitive gap | 4/5 in 07. |
| Complexity | 4/5 in 07: reviewed answers plus anonymity. |
| Long-term value | 4/5 in 07: loyalty. |
| Confidence | **Medium-Low.** Content demand is observed. Women-specific *features* are not evidenced (see "Not supported" below), and women's voices are faint in the review corpus (about 61 keyword matches, many false positives). |

### 17. BD-context Islamic finance explainers

| Field | Detail |
|---|---|
| What it is | Explainers on Islami Bank products, DPS, FDR, sanchayapatra, mobile financial services, bank jobs and freelancing income, with conflicting views labelled. |
| User need | "Is my bank job, DPS, trading or freelancing income halal?" |
| Evidence | [07](07-content-and-feature-gaps.md#opportunity-matrix-ranked) row 14: a Hanafi fatwa separates interest-handling roles from support roles, while al-feqh.com calls all bank work haram ([IslamQA.org Darul Iftaa](https://islamqa.org/hanafi/daruliftaa/7814); [al-feqh.com](https://www.al-feqh.com/en/work-at-the-bank-of-england)); [Autocomplete ইসলামী ব্যাংকে টাকা রাখা](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=ইসলামী+ব্যাংকে+টাকা+রাখা). |
| Demand signal | Observed suggestion only; no Trends value. |
| Competitive gap | 4/5 in 07: no BD-context explainer. |
| Complexity | 4/5 in 07. |
| Long-term value | 4/5 in 07. |
| Confidence | **Low-Medium.** Size is unmeasured, and it needs the same scholar capacity as rank 13. |

### 18. Ruqyah safety pages

| Field | Detail |
|---|---|
| What it is | A few reviewed pages on self-recitation of masnoon duas, warning signs of fraud and mental-health caveats. They do not broker paid raqis. |
| User need | "Evil eye, jinn, ruqyah: where do I get help?" |
| Evidence | [03 § New topics](03-bangladesh-keyword-research.md#new-topics-dreams-outrank-prayer-times): the most video-heavy results page sampled, with 33 YouTube links ([Google রুকইয়াহ](https://www.google.com/search?hl=bn&gl=bd&q=রুকইয়াহ)); documented kabiraj fraud ([bdnews24](https://bangla.bdnews24.com/samagrabangladesh/d36f5f84c858)). |
| Demand signal | Trends relative (রুকইয়াহ 0.005x); Ahrefs range (বদ নজরের দোয়া, dua against the evil eye, >1,000, which rank 3 already covers). |
| Competitive gap | 3/5 in 07: brands exist. |
| Complexity | 2/5 in 07. |
| Long-term value | 3/5 in 07: protective. |
| Confidence | **Medium.** Low demand, high harm. A small, cheap set once a reviewer is available. |

## Defer

| Rank | Opportunity (07 rank, score) | Why defer | Evidence (report and source) | Demand signal | Confidence |
|---|---|---|---|---|---|
| 19 | Installable offline web app, PWA (15, 17) | **Moved down.** 06 rates offline use Moderate for apps and **Not evidenced for the web**: "a PWA would be an untested bet". The 175 offline/data reviews (61 at 3★ or lower) are mostly about app size. What *is* evidenced is cheap, light pages with audio on demand: data costs BDT 25–35 per GB ([Bonik Barta](https://en.bonikbarta.com/exclusive/Y1mr7cn0S586gKMz/)). Treat page weight as a launch quality constraint instead. | [06 § Device, bandwidth](06-bangladesh-specific-user-needs.md#device-bandwidth-age-and-gender); [05 § Offline](05-competitor-feature-analysis.md#offline-and-pwa-support-is-mostly-cosmetic) ([quran.com sw.js](https://quran.com/sw.js)) | User review; audit observation | Medium |
| 20 | Audio-first destinations, reciter choice, sleep playlists (18, 15) | YouTube owns listening: youtube.com appeared in 9 of 16 Bing-BD top tens, and 5 of 6 Google pages had a video block. Audio licensing and hosting are not costed. Per-item audio as a pronunciation check moves into rank 2. | [03 § A. Quran](03-bangladesh-keyword-research.md#a-quran-surah-name-plus-a-format-word) ([YouTube autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&hl=bn&gl=bd&q=%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%86%E0%A6%B0%20%E0%A6%B0%E0%A6%B9%E0%A6%AE%E0%A6%BE%E0%A6%A8)) | Observed suggestion; audit observation | Medium |
| 21 | Faraid (inheritance) calculator (20, 15) | Small demand (ফারায়েজ 0.004x), complex fiqh plus BD law (Muslim Family Laws Ordinance 1961), and wrong shares cause family harm. | [07](07-content-and-feature-gaps.md#opportunity-matrix-ranked) ([Google ফারায়েজ ক্যালকুলেটর](https://www.google.com/search?hl=bn&gl=bd&q=ফারায়েজ+ক্যালকুলেটর)) | Trends relative; observed suggestion | Medium |
| 22 | Children's section (21, 15) | "শিশুদের ইসলামিক শিক্ষা" returned no suggestions; parents search names, stories and cartoons instead; content production is costly. | [03 § G. Learning](03-bangladesh-keyword-research.md#g-learning-books-homework-and-children) ([Google শিশুদের ইসলামিক শিক্ষা](https://www.google.com/search?hl=bn&gl=bd&q=শিশুদের+ইসলামিক+শিক্ষা)) | Observed suggestion | Medium |
| 23 | Hifz and revision tool (23, 14) | Observed demand only; a niche. **Conflict:** hadithbd has a hifz tracker, but Bing shows only articles and videos for "কুরআন হিফজ করার সহজ উপায়", so the tool exists but is not discoverable. | [07 § Where the gaps cluster](07-content-and-feature-gaps.md#where-the-gaps-cluster-trust-local-fit-and-bangla-language) ([Bing কুরআন হিফজ](https://www.bing.com/search?q=%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%86%E0%A6%A8%20%E0%A6%B9%E0%A6%BF%E0%A6%AB%E0%A6%9C%20%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0%20%E0%A6%B8%E0%A6%B9%E0%A6%9C%20%E0%A6%89%E0%A6%AA%E0%A6%BE%E0%A6%AF%E0%A6%BC&cc=BD&setlang=bn)) | Observed suggestion; audit observation | Medium |
| 24 | Licensed book library (24, 13) | ইসলামিক বই pdf is 0.002x; distribution is copyright-grey and licensing dominates cost. A print view of the platform's own pages moves into rank 2, because users ask for "লিখিত" (written) and "pdf" forms. | [03 § G. Learning](03-bangladesh-keyword-research.md#g-learning-books-homework-and-children) ([Google ইসলামিক বই pdf](https://www.google.com/search?hl=bn&gl=bd&q=ইসলামিক+বই+pdf)) | Trends relative; observed suggestion | Medium |

Two smaller items also wait. **Upazila-level times** have Weak evidence (two reviews), so district times are the evidenced default ([06](06-bangladesh-specific-user-needs.md#local-time-is-a-religious-obligation-not-a-convenience)). **Exam and homework explainers** ("শিরক কাকে বলে কত প্রকার", what is shirk and how many kinds) are real demand from students and madrasa learners, but 03 and 04 treat them as a separate audience that should not shape the practice experience.

## Not supported by evidence

These features are often assumed for a Bangladeshi Islamic product. The research looked and did not find support, or found contrary evidence. They should not enter the roadmap as validated needs. The first ten come from [06 § Assumed needs the evidence did not support](06-bangladesh-specific-user-needs.md#assumed-needs-the-evidence-did-not-support); the last three come from 07's low scores and its "not a gap" section.

| Assumed feature | What the evidence shows | Source |
|---|---|---|
| Accounts and login | Only 51 of 11,671 reviews mention them, mostly lost subscriptions on global apps. None asks for login. Users complain when login or data collection gets in the way. | [06](06-bangladesh-specific-user-needs.md#assumed-needs-the-evidence-did-not-support) ([Play: Deen](https://play.google.com/store/apps/details?id=com.deenislamic&hl=bn&gl=BD)) |
| A madhhab picker | Some users reject being asked: "আমরা সবাই মুসলিম" (we are all Muslims). The evidence supports a Hanafi default with the alternative Asr labelled by method. | [06](06-bangladesh-specific-user-needs.md#trust-sources-scholars-and-the-madhhab-question) ([Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)) |
| Women-specific tools (period tracker, "not praying" mode) | Not requested anywhere in the corpus. Only an access gap is documented (40% of men vs 24% of women use mobile internet; GSMA 2024). Women's fiqh *content* demand is observed. | [06](06-bangladesh-specific-user-needs.md#device-bandwidth-age-and-gender) ([Dhaka Tribune](https://www.dhakatribune.com/amp/bangladesh/346828/bangladesh-tops-asia-in-mobile-internet-gender-gap)) |
| Azan alarms on the web | Alarm failure is the strongest app complaint (263 notification or alarm reviews, 75 at 3★ or lower). A website cannot ring reliably, so this is a reason *not* to promise alarms. | [04](04-user-search-intent-and-behavior.md#namaz-and-prayer-times-the-right-minute-for-my-district-my-madhhab) ([Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)) |
| Daily hadith or ayah push as a return driver | Not directly evidenced in Bangla reviews. "আজকের হাদিস" exists as a query, and notifications draw both requests and nagging complaints. | [04](04-user-search-intent-and-behavior.md#hadith-something-to-share-or-a-citation-to-check) ([Autocomplete আজকের হাদিস](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%86%E0%A6%9C%E0%A6%95%E0%A7%87%E0%A6%B0%20%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8)) |
| Authenticity checking as a traffic driver | জাল হাদিস is below 100 a month. Sourcing builds trust, not acquisition. | [03](03-bangladesh-keyword-research.md#b-hadith-short-shareable-hadith-and-topic-lists-not-collection-browsing) ([Ahrefs জাল হাদিস](https://ahrefs.com/keyword-generator/?country=bd&input=%E0%A6%9C%E0%A6%BE%E0%A6%B2%20%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8)) |
| Bijoy/Unicode font-rendering fixes | No review from 2017 to 2026 complains of broken conjuncts or Bijoy garbling. Font *size* is the real issue (76 font reviews, mostly size). Bijoy is a back-end data-cleaning task. | [06](06-bangladesh-specific-user-needs.md#device-bandwidth-age-and-gender) |
| Offline use of a website | Not evidenced for the web (see Defer, rank 19). | [06](06-bangladesh-specific-user-needs.md#device-bandwidth-age-and-gender) |
| "Ad-free" as a differentiator against dedicated Islamic sites | Every dedicated Islamic site audited was ad-free; ads appeared only on newspapers and SEO blogs. Ad-free avoids a penalty but earns no advantage against serious Bangla sites. | [05](05-competitor-feature-analysis.md#ads-absent-on-islamic-sites-heavy-on-the-pages-that-actually-rank) ([Jugantor](https://www.jugantor.com/islam-life)) |
| Desktop-first users | StatCounter's 56.04% desktop reading conflicts with BTRC's ~89% mobile subscriptions and Android's ~91% mobile OS share; 01 treats it as an artefact. | [01](01-bangladesh-islamic-digital-market.md#phones-carry-the-traffic-and-statcounters-desktop-reading-is-an-outlier) |
| A tasbih counter as a destination | Ahrefs puts "tasbih counter" at >100 (KD Hard) and "online" below 100; "তাসবিহ" mostly means the tasbih recited in salah, and counter queries are mostly device shopping; 47 reviews mention tasbih. Worth building only as a cheap attachment to zikir pages. | [03](03-bangladesh-keyword-research.md#c-dua-and-zikir-life-situations-bundles-and-trusted-names) ([Ahrefs tasbih counter](https://ahrefs.com/keyword-generator/?country=bd&input=tasbih%20counter)) |
| A better hadith library (browsing Bukhari and Muslim by number) | Well served by hadithbd and ihadis; Google demand is small (বুখারী শরীফ >100, মুসলিম শরীফ >100). The gap is graded topic pages that link into a library. | [07](07-content-and-feature-gaps.md#what-is-deliberately-not-a-gap) ([Bing সহিহ বুখারী বাংলা](https://www.bing.com/search?q=%E0%A6%B8%E0%A6%B9%E0%A6%BF%E0%A6%B9%20%E0%A6%AC%E0%A7%81%E0%A6%96%E0%A6%BE%E0%A6%B0%E0%A7%80%20%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE&cc=BD&setlang=bn)) |
| One "simple" colloquial translation | Weak: one high-vote review asks for colloquial over sadhu Bangla, while other reviews contest specific word choices in both directions. The evidence points to named, switchable translations. | [06](06-bangladesh-specific-user-needs.md#language-bangla-first-pronunciation-essential-spellings-plural) |

Shared family phones (two reviews) are also Weak and should not drive features.

**Launch quality constraints that are evidenced.** These are not opportunities, but the evidence makes them conditions of entry: no ads and no paywall around sacred text; light, text-first pages with audio only on request; a large default font with a size control (Moderate, 76 font reviews); location chosen without requiring GPS ("Please don't make location to GPS only", 146 helpful votes); and no nagging notification or donation prompts ([06](06-bangladesh-specific-user-needs.md#device-bandwidth-age-and-gender); [Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD)).

## Year-round vs seasonal plan

### What earns daily and weekly return

A small set of needs never switches off. Prayer times, dua, Quran, hadith, Islamic names and umrah were searched in every week of five years, with peaks only 1.8–2.8x their own median (dua 5.1x) ([08 § Year-round demand](08-seasonal-search-trends.md#year-round-demand-what-never-switches-off)). Site traffic confirms that the base is year-round: Ahrefs' modelled organic traffic for hadithbd and muslimbangla rises only about 1.2–1.9x in the Ramadan month ([Ahrefs muslimbangla.com](https://ahrefs.com/websites/muslimbangla.com)).

| Rhythm | What carries it | Evidence | Label |
|---|---|---|---|
| **Daily, Fajr window** | District prayer times, today's BD Hijri date, and one small dua or a few ayat with উচ্চারণ and audio; morning adhkar | Prayer-time searches peak at 04:00–06:00 and dua at 05:00–06:00 (earlier research, Nov 4 2026; one November week, not re-pulled). Users describe daily reading that builds to a khatam ("প্রতিদিন সকালে আমি কুরআন পড়ে… জীবনের প্রথম খতম", reading every morning, my first khatam) ([Play: Greentech Al Quran](https://play.google.com/store/apps/details?id=com.greentech.quran&hl=bn&gl=BD)). সকাল সন্ধ্যার দোয়া ও জিকির is >1,000 (Ahrefs range). | Measured (Trends), user review; the pairing is [Inferred] |
| **Daily, Asr to Maghrib** | Evening adhkar; prayer times | Second prayer-time peak at 15:00–17:00 (earlier research) | Measured; [Inferred] fit |
| **Daily, after waking** | Dream interpretation (strong next, rank 12) | 05:00–08:00 peak (earlier research) | Measured |
| **Weekly, Friday** | Surah Kahf, Jumu'ah rakat and niyat, khutbah text, sourced Friday greetings | Friday lifts of 25–60x; prayer time +8–20% | Measured |
| **Life events, year-round** | Names, aqiqah, janaza and death rites | ইসলামিক নাম 0.52x; আকিকা 0.076x peaking just before Eid-ul-Adha; জানাজার নামাজের নিয়ম ও দোয়া +130% rising ([03](03-bangladesh-keyword-research.md#top-50-islamic-search-topics-in-bangladesh)) | Measured |
| **Annual, every one to two months** | The occasion engine | Occasion months in 2026 were January, February, March, May, June and August/September ([08](08-seasonal-search-trends.md#serving-users-year-round-a-daily-weekly-and-annual-rhythm)) | Measured dates; [Inferred] cadence |

There is **no retention or daily-active-user data** for any Bangladeshi Islamic product ([04](04-user-search-intent-and-behavior.md#confidence-and-limitations)). Everything in this table about what brings users *back* rests on search timing and reviews, not on observed return visits. Notifications cut both ways: users ask for reminders and complain about nagging in roughly equal measure ([04](04-user-search-intent-and-behavior.md#key-findings)).

**Acquisition, reactivation and retention are different moments** ([08](08-seasonal-search-trends.md#serving-users-year-round-a-daily-weekly-and-annual-rhythm)). Ramadan week 1 brings the most new users, searching for sehri and iftar times; reviews show Ramadan is when many users first adopt an Islamic app ([Play: Quran Majeed](https://play.google.com/store/apps/details?id=com.pakdata.QuranMajeed&hl=bn&gl=BD)). Shab-e-Barat week, when prayer-time searches reached their yearly maximum in 2022, 2023 and 2026, brings lapsed users back. Friday and the daily prayer-time view keep them between occasions. **The quiet season is September to December**, when year-round content and life events must carry engagement and the Q1 cluster is prepared.

**A correction to carry forward.** Earlier research (Nov 4 2026) called Shab-e-Barat "the single biggest religious spike of the year". Report 08 corrects this: Shab-e-Barat is the biggest *one-night occasion*, level with Ramadan week-1 terms per term (6.3x vs 6.1–7.1x the anchor median) and below "ঈদ" (16.7x) and "দোয়া" (11.1x) at their peaks. Ramadan is the largest *cluster* ([08 § Correcting the earlier claim](08-seasonal-search-trends.md#correcting-the-earlier-claim-about-shab-e-barat)).

### 2027 seasonal readiness calendar (inferred)

This table is reproduced from [08 § Serving users year-round](08-seasonal-search-trends.md#serving-users-year-round-a-daily-weekly-and-annual-rhythm). **The "content live by" column is inferred** from measured ramp times (searches start only 1–3 weeks before most events, and Shab-e-Barat and Qurbani build over 2–4 weeks). **All 2027 Islamic dates except Bishwa Ijtema and the Hajj roadmap are estimates (±1 day, subject to moon sighting).** No official 2027 holiday list had been found by 5 Nov 2026.

| 2027 occasion | Expected date in BD | Status of date | Content live by (inferred) | Pages that carry the demand |
|---|---|---|---|---|
| Shab-e-Meraj | night of about 5–6 Jan | Analyst estimate (no source) | mid-Dec 2026 | Date, event history, authenticity of special prayers |
| Bishwa Ijtema | 8–10 and 15–17 Jan | **Official** ([Dhaka Times](https://www.dhakatimes24.com/2026/09/03/411967)) | mid-Dec 2026 | Dates, location, history |
| Shab-e-Barat | night of about 23 Jan | Estimate (calendar site) ([Bangla Date Today](https://www.bangladatetoday.com/blog/bangladesh-government-holidays-2027)) | early Jan 2027 | Date and countdown, amal and nafl with grading, virtue hadith with grading |
| Ramadan begins | about 8–10 Feb | Estimate; **sources conflict** (about 9–10 Feb counted back from Eid; about 8 Feb in Wego's projection, earlier research) | mid-Jan 2027 | District sehri and iftar calendars, niyat, duas, tarawih, Ramadan rules |
| Zakat and fitra | Ramadan weeks 1–4 | Follows Ramadan | early Feb 2027 | Zakat calculator (BD units, current nisab), IF fitra amount once announced |
| Laylatul Qadr | night of about 6 Mar | Estimate | late Feb 2027 | Qadr dua, nafl guidance with grading |
| Eid-ul-Fitr | about 10–11 Mar | Estimate | late Feb 2027 | Eid prayer method, takbir, "if I join late" |
| Hajj flights and Hajj | from 8 Apr; Hajj about 15 May | **Official roadmap** ([Bangla Tribune](https://www.banglatribune.com/others/950606/)) | Mar 2027 | Hajj guide, talbiyah with উচ্চারণ, Arafah dua |
| Eid-ul-Adha and Qurbani | about 16–17 May | Estimate | late Apr 2027 | Qurbani rules, animal age, shares, meat distribution, slaughter dua |
| Ashura | about 16 Jun | Estimate | early Jun 2027 | Ashura fasting dates and virtue |
| Eid-e-Milad-un-Nabi | about 15–16 Aug | Estimate | early Aug 2027 | Date; neutral handling of the permissibility debate |
| Hajj 2028 registration | likely Jul–Sep 2027 | Inferred from the 2026 pattern | Jun 2027 | Registration deadline tracker, package explainer |

**[Inferred] Readiness implication.** 08 concludes that a product not live and indexed by mid-December 2026 will miss Shab-e-Barat and Ramadan week 1. The 2027 Ramadan start is the date most in doubt, so 08 advises having Ramadan content ready a week before the earlier estimate. If launch slips past mid-December, the first full seasonal test becomes Eid-ul-Adha in May 2027 and, for the full Q1 cluster, early 2028.

## Content and trust policy implications

These are implications of the evidence, framed as research findings for the product owner. They are not design decisions.

**Named scholars and reviewers.** Users do not trust anonymous answers. They type a person, publication or school into the query (আল কাউসার, শায়খ আহমাদুল্লাহ, মিজানুর রহমান আজহারী, "দলিলসহ", with evidence), and they praise a fast human answer ("২ দিনের ভিতর সঠিক সমাধান পেয়েছি", a correct answer within 2 days) ([03 § Seven question templates](03-bangladesh-keyword-research.md#seven-question-templates-organise-most-qa-demand); [Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)). The implication is that any ruling, myth-check, dream or women's-fiqh content needs a named, accountable reviewer and a date. hadithbd's machine-generated Q&A is not scholar-reviewed ([05](05-competitor-feature-analysis.md#what-each-competitor-does-exceptionally-well-and-where-it-fails)). **[Inferred]** Unreviewed machine answers on rulings would contradict the trust signal users are looking for.

**References on every item.** Reviewers praise "সনদ তেমনই সহীহ" (sahih chains) and "authentic references", and they ask for "references should be more detailed" and links to original books ([06 § Trust](06-bangladesh-specific-user-needs.md#trust-sources-scholars-and-the-madhhab-question); [Play: IRD Dua](https://play.google.com/store/apps/details?id=com.ihadis.dua&hl=bn&gl=BD)). The top-ranking topic-hadith and caption pages carry no reference at all. A reference should survive sharing, because shareable pages (hadith, captions, Friday greetings) are where misattributed text spreads ([04 § Lifestyle](04-user-search-intent-and-behavior.md#lifestyle-naming-a-child-posting-on-friday-making-sense-of-a-dream)).

**Hadith grading with the grader named.** Graders disagree: a reviewer flagged hadith graded Daif by Darussalam but Sahih or Hasan by Albani ([Play: Greentech Hadith](https://play.google.com/store/apps/details?id=com.greentech.hadith&hl=bn&gl=BD)). ihadis shows "সহিহ হাদিস" without naming the grader. The implication is to name the grader, not just the grade. Shab-e-Barat virtue hadith are debated in Bangladeshi media and peak in one week each year, which makes grading most visible there ([08](08-seasonal-search-trends.md#correcting-the-earlier-claim-about-shab-e-barat)).

**Madhhab labelling without forcing a camp.** The signal runs three ways: Hanafi users are alarmed by non-Hanafi times ("তাহলে কি এটা শীয়াদের জন্যে", is it for Shias then?), Ahl-e-Hadith users want their own Asr, and some users reject being asked ([06](06-bangladesh-specific-user-needs.md#trust-sources-scholars-and-the-madhhab-question)). Explicit sectarian reviews are rare (8 of 11,671), but results pages put rival rulings side by side with no labels. The evidence supports a **Hanafi default** for times with the alternative Asr shown and labelled by method, and Q&A that labels differing views by school. It does not support a picker. Two further editorial calls follow from the data: whether to include the Bangladesh Sufi zikir layer (Atroshi, Charmonai and Taheri zikir appear in related queries, and some users object to Sufi content), and how to handle Milad permissibility questions neutrally ([04](04-user-search-intent-and-behavior.md#dua-and-zikir-a-life-situation-often-on-someone-elses-behalf); [08](08-seasonal-search-trends.md#before-during-and-after-the-same-three-phase-journey-every-time)).

**No ads and no paywall on core religious text.** Ads are the largest complaint theme (551 reviews, 349 at 3★ or lower), framed in moral terms ("নাজায়েজ বিভিন্ন বিজ্ঞাপন", impermissible ads), and 1–2★ shares track ad load (Wemu 41.1%, Muslim Pro 18.9%, Quran Majeed 17.3%, against 2.2% for Muslim Bangla and hadithbd's app). Paywalls draw 185 mentions, 116 at 3★ or lower ("ধর্ম বিক্রি করে খাওয়া বন্ধ করুন", stop making a living by selling religion) ([06 § Money and ads](06-bangladesh-specific-user-needs.md#money-and-ads-free-access-is-expected-and-ads-near-the-quran-offend); [Play: Tafhimul Quran](https://play.google.com/store/apps/details?id=com.alquran.tafhimul_quran&hl=bn&gl=BD)). Donation is accepted (Moderate), but donation that nags or gates content is resented ("My father already donated, yet the reminder never stops").

**Verse-level accuracy and a public corrections process.** Users audit text word by word (Mulk 17, Yasin's last ayah, Fatir 35:11, Sahih Muslim numbering) and treat one error as a reason to warn others away ([06](06-bangladesh-specific-user-needs.md#language-bangla-first-pronunciation-essential-spellings-plural)). Bangla-script pronunciation carries a specific liability. The Greentech translation platform itself warns that transliteration "can cause incorrect pronunciation and may hinder the proper learning of Tajweed" ([translate.gtaf.org](https://translate.gtaf.org/checks/xml-tags/al-quran-android/strings/fa)). **[Inferred]** That supports framing উচ্চারণ as a learning aid paired with audio, proofreading it, and correcting it in public.

**Bangladesh sources stated, not implied.** Users treat the IF as the reference for times, translations and the fitra amount, and the National Moon Sighting Committee as the reference for dates. No site audited cites either for its Hijri date, and the IF publishes no usable timetable online ([05](05-competitor-feature-analysis.md#asr-hijri-and-bangla-dates-disagree-across-sites-on-the-same-day)). Stating the source on the page is what lets users check a claim of "Islamic Foundation timing".

**Popular spelling as the label.** Use দোয়া, নামাজ, সূরা, হাদিস, জিকির and কাহাফ as visible labels, with the scholarly spellings as aliases, and give surah pages Latin-script names ([03](03-bangladesh-keyword-research.md#spelling-variants-label-with-the-popular-form-match-every-form)). This is a content-policy choice as much as a search one, because some scholars prefer the other forms.

## Risks and open questions for the product owner

1. **Madhhab stance.** The research supports a Hanafi default for prayer times with the second Asr labelled, but it does not settle the platform's stance on Q&A, Shab-e-Barat practices, Milad or Sufi zikir. The two school clusters already compete for the same queries ([01 § Landscape](01-bangladesh-islamic-digital-market.md#a-landscape-split-by-format-by-school-of-thought-and-by-the-states-absence)). *Decision needed:* a written editorial stance, and who signs it.
2. **Sourcing and licensing.** Translations, tafsir, উচ্চারণ, hadith grading and audio all need rights. hadithbd's content is "সর্বস্বত্ব সংরক্ষিত" (all rights reserved), most licences were not checked, and 07's complexity scores leave out licensing negotiations, "which could dominate the real cost" ([07](07-content-and-feature-gaps.md#confidence-and-limitations); [05](05-competitor-feature-analysis.md#full-feature-matrix)). *Open:* which named translations and graded corpora can be used, and on what terms.
3. **Scholar-review capacity.** Ranks 11–13 and 16–18 all depend on named reviewers, and the proofreading behind ranks 2 and 8 does too. muslimbangla answers at scale (masail IDs above 170,000) with named muftis. *Open:* how many reviewers, from which institutions, with what turnaround.
4. **The IF method is unverified.** The ±9-minute offset conflict is unresolved, and the IF's Fajr/Isha angles and Asr method were not obtained ([06](06-bangladesh-specific-user-needs.md#local-time-is-a-religious-obligation-not-a-convenience); [10 conflict #10](10-research-methodology-and-sources.md#conflicting-evidence)). A wrong minute costs trust disproportionately ("I missed my suhoor only because I followed the time on the app"). *Needed before launch:* the IF timetable documents.
5. **Competing with muslimbangla and hadithbd.** They draw an estimated ~905K and ~601K Bangladesh visits a month (Similarweb, September 2026; third-party estimates, ±2–3x across tools) and hold top positions on prayer-time and dua keywords ([02](02-top-islamic-websites-bangladesh.md#ranking-bangla-first-sites-by-estimated-bangladesh-visits)). muslimbangla is broad but unsourced; hadithbd is deep but has no prayer times. **[Inferred]** The opening is the combination of breadth and trust, plus Bangladesh correctness, rather than any single feature. The incumbents could close individual gaps quickly; muslimbangla could add dua sources, for example.
6. **Declining Google search and AI answers.** Core terms fell 30–60% between 2023 and 2026, and AI answers appeared on 6 of 6 sampled Google pages. **Evidence conflict:** Ahrefs models muslimbangla's organic traffic growing about twelvefold over the same period (March 2023 to March 2026), which may mean clicks are concentrating on a few winners, or simply that the models differ ([01 § Search interest is shrinking](01-bangladesh-islamic-digital-market.md#search-interest-is-shrinking-while-ai-answers-and-video-take-the-top-of-the-page)). The cause of the decline is not measured. *Implication:* an SEO-led plan carries structural risk, and interactive, verifiable and habitual value is the hedge.
7. **Launch timing.** Report 08 infers mid-December 2026 as the readiness date for the Q1 2027 cluster, and the 2027 Ramadan start differs by one to two days between sources. *Decision needed:* what minimum set can be live, proofread and indexed by then.
8. **Web vs app.** Apps are the habit layer (Greentech Al Quran 14.7M installs, kutblog 8.67M, Muslim Bangla 5.99M; global device-level counts), and nearly all user voice in this research comes from app reviews ([01](01-bangladesh-islamic-digital-market.md#four-channels-share-islamic-attention-and-search-feeds-the-dedicated-sites)). A website cannot ring an azan. *Open:* whether web-only users want what app reviewers want.
9. **Unmeasured channels.** Facebook, YouTube and TikTok, where captions, waz, women's questions and ruqyah demand probably concentrate, were not measured ([10 § Limitations](10-research-methodology-and-sources.md#limitations)). Demand for opportunities 15, 16 and 18 may be understated.
10. **Women users.** The mobile-internet gender gap is wide (40% vs 24%, or 26% in a later comparison), and women's voices are faint in the corpus. *Open:* validate women's needs directly before building for them, rather than assuming features ([06 § Conclusion](06-bangladesh-specific-user-needs.md#conclusion)).
11. **Noise in keyword planning.** Head terms are polluted (Latin "dua" by Dua Lipa, "doa" by a university admissions portal, "আমল" by the amla fruit), and some suggestions carry India or West Bengal intent ([03 § Noise filters](03-bangladesh-keyword-research.md#noise-filters-dua-lipa-a-university-portal-and-kolkata)). Any content plan built from the keyword database has to filter these rows first.

## Confidence and limitations

**High confidence** applies to the existence and shape of the needs (each is backed by queries, reviews or both), to the directly observed competitive gaps (search tests, Asr and Hijri divergence, missing provenance), and to the shape of the seasonal calendar. **Medium confidence** applies to the relative ordering of opportunities. It rests on 07's analyst scores, which weight five dimensions equally by choice, plus this report's re-ordering rules, which are also analyst judgement. Another reasonable weighting would reorder ranks 6–18, though the cluster of trust, Bangla-language and BD-correctness items at the top is consistent across 03, 04, 05, 06 and 07. **Low confidence** applies to any absolute size. No exact search volume exists anywhere in this research: Ahrefs figures are third-party modelled buckets or site-page estimates, Trends is relative and exact-phrase only, and autocomplete shows existence, not volume ([10 § Evidence taxonomy](10-research-methodology-and-sources.md#evidence-taxonomy)).

Several limits affect this report specifically. There is no retention, daily-active-user or first-party traffic data, so "daily return" claims rest on search timing and app reviews. User voice is almost entirely from Google Play app reviews (11,671 reviews of 22 apps, not a random sample, reviewer location unverified), so website-only users, iOS users and non-reviewers are absent. Complexity scores exclude licensing. Native apps, logged-in features and translation quality were not audited. The Friday opportunity (rank 10) has measured demand but no competitive-gap assessment. Hourly patterns come from earlier research (Nov 4 2026) covering one non-Ramadan week. All 2027 Islamic dates except Ijtema and the Hajj roadmap are estimates. Methods, tools, blocked sources and the full conflict log are in [10-research-methodology-and-sources.md](10-research-methodology-and-sources.md).
