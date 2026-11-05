<!-- section: guide -->
# How to read this report

## What this document is

This is the complete research report on what Bangladeshi Muslims look for in Islamic websites. It covers which sites they visit, what they type into Google, what they praise and complain about, which needs nobody serves well, and how all of this changes through the Islamic year. It was produced on **5 November 2026** to help a product team decide what a new Bangladesh-focused Islamic website should build first, and what it should not build.

It is a **research document, not a design**. It contains no screens, no code and no visual direction. Every recommendation in it is traced back to evidence, and where evidence was thin or missing, the report says so.

## Who it is for

The report is written for anyone who has to make product decisions: the product owner, designers, content editors, the SEO and marketing team, developers, and the scholars who will review religious content. You do not need SEO or data-analysis experience to read it. Every technical term is explained in the glossary that follows this section, and every chapter opens with a short box that explains it in plain words.

## How the document is organised

| Part | Chapters | What it gives you |
|---|---|---|
| **Executive summary** | Summary | The direct answers to the twelve strategic questions, the top topics and queries, and the final ranked list of opportunities. Read this first. |
| **The market** | 01, 02 | How many people are online, how they get there (mostly phones and Google), and which Islamic websites they actually use. |
| **The demand** | 03, 04 | What people type into Google, in Bangla script, English and Banglish, and what they are really trying to do when they search. |
| **The supply** | 05, 06 | What existing websites offer, feature by feature, and which Bangladesh-specific needs the evidence really supports. |
| **The gaps and the timing** | 07, 08 | Where user needs and existing websites do not meet, and how demand rises and falls around Ramadan, Shab-e-Barat, Eid, Hajj and every Friday. |
| **The decisions** | 09 | The prioritised list: what is essential at launch, what comes next, what to defer, and what the evidence does not support. |
| **The method** | 10 | How the research was done, which tools worked or were blocked, every conflict in the evidence, and the full list of sources. |

## Suggested reading paths

- **10 minutes:** the Executive summary only.
- **Product owner:** Executive summary, then 09 (decisions), then 07 (gaps), then the risks section at the end of 09.
- **Content, SEO and editorial team:** 03 (keywords), 04 (user intent), 08 (seasonal calendar), then the keyword database file.
- **Designers and developers:** 05 (competitor features), 06 (Bangladesh-specific needs), then the "Essential for launch" section of 09.
- **Scholars and religious reviewers:** 04 (trust drivers), 06 (the trust and madhhab sections), and the "Content and trust policy implications" section of 09.
- **Anyone checking a number:** 10 (method and sources). Every important number in the report links to its source.

## The four kinds of evidence, and why they must not be mixed up

The most important thing to understand before reading any number in this report is **what kind of number it is**. The research could not access any website's real analytics or Google's own search counts, because those are private or behind paid logins. So it used four kinds of public evidence, each of which means something different.

| Label used in the report | What it is | What it can tell you | What it can NOT tell you |
|---|---|---|---|
| **Ahrefs range** (called `measured_volume` in the data file) | Ahrefs, a commercial SEO tool, estimates monthly searches in Bangladesh and puts each keyword in a bucket: under 100, over 100, over 1,000 or over 10,000 a month. | Roughly how big a keyword is, in real searches per month. | An exact number. These are Ahrefs' own model estimates, not Google's figures. Available only for Quran, Hadith and Dua keywords. |
| **Google Trends ratio** (`trends_relative`) | Google Trends shows how popular one search term is compared with another, on a 0–100 scale. The research compared every term against one fixed term, **নামাজের সময়** ("prayer time"), so that all terms share one scale. | Which terms are more or less popular than each other, and how popularity changes over weeks and years. | How many searches there are. A ratio of 2.0x means "twice as popular as prayer time", not "2,000 searches". |
| **Autocomplete suggestion** (`observed_suggestion`) | The suggestions Google shows while you type, collected on 5 November 2026 with Bangladesh settings. | That real people type this phrase, and how they phrase it. | How often. A suggestion proves a query exists, nothing more. |
| **Results-page observation** (`serp_observation`) | What appeared on Google's results page for a query: which sites ranked, whether there was an AI answer or a YouTube block. | Who currently wins a query and how good the answers are. | Search volume. And these pages may be personalised (see chapter 10). |

Two further kinds of evidence appear in the user and competitor chapters:

- **User feedback**: real Google Play reviews, quoted word for word, with the app, date and star rating. Bangla quotes are kept in Bangla script with an English translation.
- **Audit observation**: something the research team saw directly on a website on 5 November 2026, with the page address recorded.

Throughout the report, statements are also tagged as **Measured** (from one of the data sources above), **Observed** (seen directly in reviews, search results or on websites) or **Inferred** (the analyst's reasoning from the evidence). Inferred statements are judgements, and the report always labels them so.

## How to read a Google Trends ratio: a worked example

Suppose the report says **দোয়া (dua) = 2.50x**. This means: in a typical week over the last five years, Bangladeshi Google interest in the word দোয়া was about two and a half times the interest in নামাজের সময় (prayer time) in its typical week.

It does **not** mean 2.5 million searches, or 2,500 searches. Google Trends never reveals counts. The ratio is only useful for comparing one term with another, or one week with another. When the report says Ramadan week 1 is "about 40x the off-season level" for রমজান, it means interest that week was about forty times higher than in an ordinary week outside Ramadan, again with no absolute count.

## How to read a traffic estimate

Traffic numbers for websites (for example, "muslimbangla.com: ~905K Bangladesh visits a month") come from Similarweb and Ahrefs, two commercial tools that **model** traffic from panels and clickstream data. They are not the websites' own figures. The two tools often disagree by two to three times for the same site. The report therefore treats the **order** of sites (who is bigger than whom) as reliable, and the **exact numbers** as rough.

"Bangladesh visits" are calculated as: total visits worldwide × the share that comes from Bangladesh. For global sites such as quran.com, Bangladesh is not in the tool's top-five-countries list, so only an upper limit can be calculated.

## Confidence levels

Each major finding carries a confidence level:

- **High**: several independent sources agree, or the evidence was observed directly.
- **Medium**: one good source, or several sources that broadly agree with some conflict.
- **Low**: a single weak source, an estimate built on assumptions, or sources that conflict.

## What this report does not cover

- **Facebook, YouTube, TikTok and WhatsApp behaviour.** These platforms could not be measured with the tools available. Much Islamic content in Bangladesh (waz, captions, short videos) lives there, so demand for some topics is probably higher than Google data shows.
- **Exact search volumes** for most topics, because Google Keyword Planner and Semrush require paid logins.
- **Real retention data** (how often users come back). Return behaviour is inferred from reviews and search patterns.
- **Interviews or surveys with users.** All user voice comes from public reviews.

<!-- section: glossary -->
# Glossary

This glossary explains every technical, data, SEO and religious term used in the report. Terms are grouped by type.

## Data and research terms

| Term | Meaning |
|---|---|
| **Ahrefs** | A commercial SEO tool. Its free pages give estimated search traffic for websites and estimated search-volume ranges for keywords in a chosen country. |
| **Anchor term** | The fixed reference term used to put all Google Trends results on one scale. In this report it is **নামাজের সময়** (prayer time), set to 1.0x. |
| **Anchor median** | The anchor term's popularity in a typical (median) week. Ratios like "2.50x anchor-median" compare a term with that typical week. |
| **Autocomplete** | The suggestions Google shows as you type. Used here to discover the real phrasing of searches. |
| **BD** | Short for Bangladesh. |
| **BD share** | The percentage of a website's visits that come from Bangladesh. |
| **Bounce rate** | The share of visitors who leave after viewing one page. |
| **BTRC** | Bangladesh Telecommunication Regulatory Commission, the telecoms regulator. It publishes internet subscription counts. These count SIM cards and accounts, not people, so they are higher than the number of actual users. |
| **BBS** | Bangladesh Bureau of Statistics, which ran the 2022 census. |
| **DataReportal / Kepios** | A widely used annual digital-statistics report. It estimates unique internet users (people), which is why its figure (82.8M) is lower than BTRC's subscription count (135.94M). |
| **Evidence type** | A column in the keyword database that says what kind of evidence backs each keyword: Ahrefs range, Trends ratio, autocomplete suggestion or results-page observation. |
| **Implied BD visits** | A calculated figure: total visits × Bangladesh share. It inherits all the uncertainty of the underlying estimate. |
| **Organic search** | Visitors who arrive by clicking an unpaid Google (or other search engine) result. |
| **Similarweb** | A commercial tool that estimates website traffic, traffic sources and country share. Its free pages show limited data. |
| **StatCounter** | A tool that measures the share of desktop versus mobile browsing. Its Bangladesh figure (56% desktop) conflicts with all other evidence and is treated as unreliable. |
| **Trends ratio** | A term's Google Trends popularity divided by the anchor term's. Relative only; never a count. |
| **Upper bound** | The highest a number could possibly be, used when the exact number is unknown. |

## SEO and web terms

| Term | Meaning |
|---|---|
| **AI answer (AI Overview)** | The AI-written summary Google now shows at the top of many results pages. It answers the question before the user clicks any website, which can reduce clicks. |
| **Head term** | A short, very popular search, such as "দোয়া" (dua). |
| **Long-tail query** | A longer, more specific search, such as "ঘুমানোর আগে কি কি দোয়া পড়তে হয়" (which duas to read before sleeping). Each is small, but together they make up most of the demand. |
| **KD (keyword difficulty)** | Ahrefs' estimate of how hard it is to reach Google's first page for a keyword. "Easy" means the current top results are weak and a new site could compete. |
| **Navigational / informational / transactional intent** | Whether the searcher wants a specific site, wants information, or wants to do something (calculate, download, register). |
| **PageSpeed** | Google's tool for measuring how fast a page loads on mobile. It was blocked (rate-limited) during this research. |
| **PWA (progressive web app)** | A website that can be installed on a phone like an app and work offline. It needs a "manifest" file and a "service worker" script. Only two of the audited sites are real PWAs. |
| **SERP** | Search engine results page: the page Google shows after you search. |
| **SERP feature** | Anything on a results page other than plain links: AI answers, video blocks, "People also ask" boxes. |

## Language and script terms

| Term | Meaning |
|---|---|
| **Bangla script** | Bangla written in its own alphabet, for example নামাজ. |
| **Banglish (Romanised Bangla)** | Bangla typed in English letters, for example "namaz er niyom" or "namajer somoy". Common on phones. |
| **উচ্চারণ (uccharon)** | Pronunciation. In Islamic content it means Arabic text written out in Bangla letters so people who cannot read Arabic script can recite it. This is one of the most-requested features. |
| **Transliteration** | Writing one script's sounds in another script. Latin transliteration (as on quran.com) is different from Bangla-script উচ্চারণ, which is what Bangladeshi users ask for. |
| **Spelling variants** | The same word spelled differently, for example দোয়া / দুয়া / দুআ (dua), কুরআন / কোরআন (Quran), নামাজ / নামায (namaz). Users search mostly with one popular form, but a good site must recognise all of them. |
| **Unicode / Bijoy** | Unicode is the modern standard for Bangla text on computers. Bijoy is an older, non-standard encoding. The research found no current complaints about Bijoy-related display problems. |

## Islamic and Bangladesh-specific terms

| Term | Meaning |
|---|---|
| **Ahl-e-Hadith / Salafi** | A school of thought that follows hadith directly rather than one of the four classical madhhabs. A minority in Bangladesh, with its own websites and publications (for example at-tahreek.com). |
| **Amal / Fazilat** | Recommended deeds for an occasion / the virtues or rewards of an act. Very common in occasion-related searches. |
| **Asr (Hanafi vs Shafi'i)** | The afternoon prayer. Its start time differs by school: the Hanafi time (used by most Bangladeshis) is later, the Shafi'i/standard time earlier. On 5 November 2026 the two differed by about 47 minutes on Bangladeshi sites. |
| **Deobandi / Hanafi** | The majority religious orientation in Bangladesh. The Hanafi madhhab is the legal school; Deobandi is the scholarly tradition behind many Bangladeshi madrasas and websites such as alkawsar.com. |
| **Dua / Zikir (dhikr)** | Supplication / remembrance of Allah through repeated phrases. |
| **Fatwa / Masala (masala)** | A religious ruling / a practical religious question and its answer. |
| **Fitra (Sadaqatul Fitr)** | The charity paid before Eid-ul-Fitr. Its amount is announced each year in Bangladesh, which drives searches like "ফিতরা কত টাকা ২০২৬". |
| **Hadith grading** | The authenticity rating of a hadith (sahih = authentic, hasan = good, da'if = weak, mawdu' = fabricated). Users increasingly look for it. |
| **Hifz** | Memorising the Quran. |
| **Hijri date** | The Islamic lunar calendar date. In Bangladesh it follows the National Moon Sighting Committee, which often puts Bangladesh one day behind Saudi Arabia. |
| **IF (Islamic Foundation Bangladesh)** | The government religious body. It publishes the official prayer and Sehri/Iftar timetables for each district, which users treat as the reference. |
| **Ijtema (Bishwa Ijtema)** | The large annual Muslim gathering at Tongi near Dhaka. |
| **Khatam** | Completing a full reading of the Quran. |
| **Madhhab** | A school of Islamic law (Hanafi, Shafi'i, Maliki, Hanbali). It affects prayer times and many rulings. |
| **National Moon Sighting Committee** | The Bangladesh body that officially decides the start of each Hijri month, and so the dates of Ramadan, Eid and other occasions. |
| **Niyat** | The intention for a prayer or fast, often searched with the exact words to say. |
| **Qibla** | The direction of the Kaaba in Mecca, faced during prayer. |
| **Qurbani / Kurbani** | The animal sacrifice of Eid-ul-Adha. |
| **Ruqyah** | Recitation of Quran and duas for spiritual healing (against evil eye, jinn and similar). |
| **Sehri / Iftar** | The pre-dawn meal before a fast / the meal that breaks the fast at sunset. Their exact times by district are among the most searched items in Ramadan. |
| **Shab-e-Barat** | The 15th night of Sha'ban. Widely observed in Bangladesh; it produces one of the biggest single-night search spikes of the year. |
| **Shab-e-Meraj** | The night commemorating the Prophet's night journey (27 Rajab). |
| **Shab-e-Qadr (Laylatul Qadr)** | The Night of Power in the last ten nights of Ramadan, commonly observed on the 27th night. |
| **Tafsir** | Commentary and explanation of the Quran (for example Ibn Kathir, Ahsanul Bayan, Fathul Majid). |
| **Tasbih** | Counting zikir, traditionally on prayer beads. In searches, "তাসবিহ" mostly refers to phrases said in prayer, not to a digital counter. |
| **Upazila** | A sub-district. Some users want prayer times at upazila level, not just district level. |
| **Waz / Gojol (gazal)** | Islamic sermons / Islamic songs. Popular on YouTube and Facebook. |
| **Zakat / Faraid (mirath)** | The obligatory annual alms / the Islamic rules for dividing inheritance. Both need calculators and are poorly served today. |

<!-- section: summary -->
**In plain words.** This is the whole report on a few pages. It answers the twelve strategic questions directly: which Islamic websites Bangladeshis use, what they search for, what they want and dislike, what is missing, and what a new site should do first.

**The single most important takeaway.** Bangladeshi users are not short of Islamic content; they are short of **content they can trust and use in their own language and local context**. The winning website will be the one that gets the basics exactly right: correct Bangla pronunciation, cited sources, prayer times and dates that match Bangladesh's official bodies, and search that understands how people really type.

**How to use this section.** Read it first. Every answer links to the chapter that holds its evidence, so you can check any claim. The ranked list of opportunities at the end is the short version of chapter 09.

**Watch out for.** The "top 50" and "top 100" lists combine different kinds of evidence (Trends ratios, Ahrefs ranges, autocomplete). They are a reliable guide to order, not a table of exact search volumes.

<!-- section: 01 -->
**In plain words.** This chapter describes the playing field: how many Bangladeshis are Muslim and online, what devices they use, how much data costs, and through which channels (websites, newspapers, YouTube and Facebook, apps) they find Islamic content.

**Key takeaway.** About 91% of Bangladesh is Muslim, but only about half the country is online, and access is overwhelmingly through mobile phones. Google search is the main road into dedicated Islamic websites. At the same time, Google interest in core Islamic terms fell 30–60% between 2023 and 2026, while Google's own AI answers and YouTube videos now sit at the top of the results page.

**Why it matters for the product.** It means the site must be built for phones and for search first. It also warns that relying on Google alone is getting riskier, because fewer people may click through to websites.

**Terms you will meet.** BTRC, DataReportal, StatCounter, organic search, AI answer, Hanafi/Deobandi, Ahl-e-Hadith (see Glossary).

**Watch out for.** Two "internet user" numbers appear (82.8M people vs 135.94M subscriptions). They measure different things and are both correct. StatCounter's desktop-majority figure is treated as unreliable.

<!-- section: 02 -->
**In plain words.** This chapter ranks the Islamic websites that Bangladeshis actually visit, using traffic estimates from Similarweb and Ahrefs, and gives a profile of each major site: what it offers, who it serves, its strengths and its weaknesses.

**Key takeaway.** Two Bangla websites lead clearly: **muslimbangla.com** (~905K estimated Bangladesh visits a month) and **hadithbd.com** (~601K). Every other Bangla Islamic site is at least three times smaller. Global sites such as quran.com may be large in Bangladesh too, but the tools only allow an upper estimate. Newspapers are far bigger overall, but their religion sections cannot be measured.

**Why it matters for the product.** These are the sites a new platform competes with for the same Google searches. Their profiles show what users already get, and where they are already let down.

**How to use this chapter.** Use the ranking table for the competitive picture and the site profiles when deciding how to position against a specific competitor.

**Watch out for.** All numbers are model estimates that can be off by two to three times. Trust the order more than the numbers. Several well-known domains (for example islamijibon.com) are no longer active.

<!-- section: 03 -->
**In plain words.** This is the keyword chapter: what Bangladeshis actually type into Google about Islam, in Bangla script, English and Banglish. It covers all eight topic areas (Quran, Hadith, Dua, Namaz, Q&A, Ramadan and Hajj, Learning, Lifestyle) plus topics that were not on the original list, and it contains the **Top 50 topics** and **Top 100 queries** lists.

**Key takeaway.** Demand is concentrated in a few big families (dua, dreams, hadith, prayer times, Quran) and spread across thousands of specific items, such as a named surah or a dua for a specific situation, each with a "format word" attached: বাংলা উচ্চারণ (pronunciation), অর্থসহ (with meaning), pdf, audio. Many of the highest-volume items are rated "Easy" to rank for. People also tag their searches with trusted names (a scholar, Islamic Foundation, "দলিলসহ" = with evidence), which shows they distrust anonymous answers.

**Why it matters for the product.** This chapter tells the content team which pages to create, in what wording, and with which spellings. It is the basis for the site's information structure and its SEO plan.

**How to use this chapter.** Start with the Top 50 topics for priorities, then use the full keyword database (data/keyword-database.csv, 934 rows) to plan individual pages. Use the spelling-variant table to make sure search recognises every spelling.

**Watch out for.** Measured volumes (Ahrefs ranges) exist only for Quran, Hadith and Dua. Other categories rely on Trends ratios and autocomplete. Never add the different evidence types together.

<!-- section: 04 -->
**In plain words.** Keywords show what people type; this chapter explains **why** they type it. For each topic area it answers seven questions: what problem brings the user, what they look for, what format they prefer, what makes them trust a site, what makes them leave, what brings them back, and what would help them more.

**Key takeaway.** Users search to **do** something (recite a surah, pray at the right minute, answer a private doubt, name a child) and then **verify** it. They want Arabic, Bangla pronunciation, meaning and audio together on one page. They trust named scholars, references and hadith grades, and they leave over ads, paywalls, wrong times and text errors.

**Why it matters for the product.** It turns the keyword list into user needs that designers and editors can act on. The worked example of "সূরা ইয়াসিন বাংলা উচ্চারণ" (Surah Yasin Bangla pronunciation) shows a complete user journey from search to frustration to what would have helped.

**How to read the tags.** Every statement is tagged **[Measured]**, **[Observed user feedback]** or **[Inferred]**. In this chapter, "Observed user feedback" also includes queries people actually typed (autocomplete and results pages), not only reviews.

<!-- section: 05 -->
**In plain words.** The research team visited 16 Bangladesh-relevant Islamic websites and checked 33 features on each (Quran, translations, pronunciation, tafsir, audio, hadith grading, duas, prayer times, Qibla, calendar, zakat calculator, search, bookmarks, offline support and more). This chapter shows the result as a feature matrix.

**Key takeaway.** No Bangla site combines breadth and trust. muslimbangla.com covers the most topics but does not cite sources for its duas. hadithbd.com is the most complete sourced library but has no prayer times. quran.com has the deepest Bangla Quran but its search finds nothing for the everyday word নামাজ. Sites disagree on the Asr time (by about 47 minutes), on the Hijri date and on the Bangla calendar date on the same day, and none cites Bangladesh's Moon Sighting Committee.

**Why it matters for the product.** It separates **table stakes** (features every serious site already has, so a new site must have them too) from **differentiators** (rare features that could make a new site stand out).

**How to read the matrix.** A = Available, P = Partial, N = Not available (not found in the pages examined), ? = Unable to verify (for example behind a login).

**Watch out for.** Page-speed scores could not be collected because Google's PageSpeed service was rate-limited. Features behind logins were not tested.

<!-- section: 06 -->
**In plain words.** Many ideas about what Bangladeshi users "need" are assumptions. This chapter tests each assumed need against real evidence (mainly 11,671 Google Play reviews of 22 Islamic apps on the Bangladesh store, plus search data and statistics) and rates it Strong, Moderate, Weak or Not evidenced.

**Key takeaway.** The strongest needs are about **correctness and local fit**: Bangla-first content, Bangla-script pronunciation, prayer and Sehri/Iftar times that match the Islamic Foundation for each district, a Hijri date that follows Bangladesh's moon sighting, recognising local spellings and Banglish, free access, visible references, and no ads near sacred text. Users describe ads (especially indecent ones) as a religious offence, not just an annoyance, and treat a single text error as a reason to distrust a whole app.

**Why it matters for the product.** It tells the team which requirements are proven and which are guesses. Just as importantly, it lists assumed needs that the evidence **did not** support, such as font-rendering problems, demand for logins, or a madhhab picker that users welcome.

**How to use this chapter.** Use the summary table as a checklist of non-negotiable requirements, and the "not supported" section to avoid building things nobody asked for.

**Watch out for.** The reviews are of apps, not websites, and Google Play does not confirm a reviewer's country. Bangla-script reviews were used as the best signal of Bangladeshi users.

<!-- section: 07 -->
**In plain words.** This chapter puts the previous chapters together. For each user problem it shows what exists today, what is missing, what the opportunity is, and the evidence, then scores every opportunity on five criteria.

**Key takeaway.** The biggest gaps are not missing topics, they are **trust, local fit and Bangla-language handling**. The top-scoring opportunities are Bangla-aware search, Bangla-script pronunciation pages, an occasion engine (pages for every Islamic occasion with Bangladesh dates), graded topic hadith, a Bangladesh moon-sighting Hijri date, and fact-checks of viral claims.

**How the score works.** Each opportunity gets 1 to 5 points for Demand, Severity of the problem, Competitive gap and Long-term value, plus points for being simpler to build (6 minus Complexity). The total is out of 25. These scores are the analyst's judgement based on the cited evidence, not a formula from data.

**Why it matters for the product.** It is the bridge between research and decisions. Chapter 09 re-checks and re-orders this list into the final priorities.

<!-- section: 08 -->
**In plain words.** Islamic search in Bangladesh follows a calendar. This chapter uses five years of Google Trends data for Bangladesh to show how demand rises before, during and after each occasion: Ramadan, Shab-e-Barat, Shab-e-Qadr, both Eids, Hajj, Ashura, Shab-e-Meraj, Milad-un-Nabi, Bishwa Ijtema, and every Friday.

**Key takeaway.** The first week of Ramadan is the biggest wave of the year (রমজান searches reach about 40 times their off-season level). Shab-e-Barat is the biggest single night, about level with Ramadan week 1 per term, and pushes prayer-time searches to their yearly high. Every Friday, searches for জুমার নামাজ (Jumu'ah prayer) and সূরা কাহাফ (Surah Kahf) jump many times over. Meanwhile prayer times, duas, hadith, Quran and baby names never switch off.

**Why it matters for the product.** A site that only catches Ramadan traffic will be empty eleven months a year. The chapter shows how to combine a **daily habit** (prayer times, duas), a **weekly habit** (Friday) and an **annual calendar** (occasions). It also gives the 2026 verified dates and 2027 estimated dates, and points out that pages must be live and indexed by about **mid-December 2026** to catch the early-2027 season.

**Watch out for.** All magnitudes are relative Trends ratios, not counts. 2027 dates are estimates until Bangladesh's Moon Sighting Committee announces them.

<!-- section: 09 -->
**In plain words.** This is the decision chapter. It takes every opportunity from the research, re-checks it against all the evidence, and sorts it into four groups: **Essential for launch**, **Strong next**, **Defer**, and **Not supported by evidence**.

**Key takeaway.** Ten items are essential for launch: Bangla-aware search and spelling; surah, ayah and dua pages with proofread Bangla pronunciation and audio; sourced duas organised by life situation; district prayer times that match the Islamic Foundation (with both Asr times labelled); a Hijri date that cites Bangladesh's moon sighting; pages for about ten annual occasions with Bangladesh dates; hadith by topic with grades; a report-an-error button and public corrections log; named translator, grader and edition on every item; and Friday content.

**Why it matters for the product.** It is the practical output of the whole study. It also explains every place where it changed the order from chapter 07, and why.

**How to use this chapter.** Use it as the starting backlog for planning. Read the "Not supported by evidence" section before adding any feature that is not on the list, and read "Risks and open questions" before committing, because several of them (madhhab stance, sourcing and licensing, scholar review capacity) are decisions only the product owner can make.

**Watch out for.** No real retention data exists, so the daily-return plan is reasoned from reviews and search patterns, not measured.

<!-- section: 10 -->
**In plain words.** This chapter explains exactly how the research was done, so anyone can judge how far to trust it or repeat it. It lists every tool used, what each could and could not do, which sources were blocked, every conflict found in the evidence, the main limitations, the raw data files, and a register of about 80 sources.

**Key takeaway.** There are **no exact search volumes anywhere in this research**. The closest are Ahrefs ranges for 136 keywords. Everything else is relative (Google Trends), proof of existence (autocomplete), observation (results pages and the website audit) or user voice (reviews). Some Google results pages came from a signed-in browser in Bangladesh and may be personalised.

**Why it matters for the product.** Before making a big bet on a number in this report, check its source and confidence here. The conflict list shows where the evidence disagrees and how each conflict was handled.

**How to use this chapter.** Use the source register to find any original source. Use the raw data files (in the data/raw folder next to this PDF) to re-run or extend the analysis.
