# Bangladesh Islamic Web — Research Report (Nov 2026)

This report asks what Bangladeshi Muslims want from Islamic websites: which sites they use, what they search for, which features they value, which problems remain unsolved, and what a new Bangladesh-focused Islamic web platform should prioritise. It covers Google search demand in Bangla script, English and Banglish (Bangla typed in Latin letters), traffic estimates for the leading sites, a feature audit of 14 Islamic sites, 11,671 Google Play reviews from the Bangladesh storefront, and five years of seasonal search data. It is research for a product team; it does not design screens or write code. **Research date: 5 November 2026.**

> **Headline caveat.** Every traffic and volume number here is a **third-party estimate** (Similarweb, Ahrefs, Semrush), never first-party analytics or a Google count. Google Trends figures are **relative** ratios to the anchor "নামাজের সময়" (prayer time), not volumes. Autocomplete suggestions show that a query **exists**, not how often it is searched. Evidence labels (measured / observed / inferred) are kept as in the underlying reports. See [10](10-research-methodology-and-sources.md).

## Executive summary

- **Two Bangla portals lead.** muslimbangla.com (~905K) and hadithbd.com (~601K) draw the most estimated Bangladesh visits a month (Similarweb, Sept 2026); every other Bangla Islamic site is at least 3x smaller. Rank order is reliable; tools disagree on volume by 2–3x ([02](02-top-islamic-websites-bangladesh.md)).
- **Search is the engine, and it is mobile.** Organic search brings 48–66% of desktop visits to most dedicated sites, and about 89% of internet subscriptions are mobile ([01](01-bangladesh-islamic-digital-market.md)).
- **Dua, dreams, hadith and prayer times are the biggest search families.** On Trends, দোয়া (dua) averages 2.50x the prayer-time anchor's median week; স্বপ্নে (dream meanings) is 1.32x and rising ([03](03-bangladesh-keyword-research.md)).
- **The largest measured volumes are single named items with low difficulty.** Twelve surah, ayah and dua keywords sit in Ahrefs' >10,000-a-month bucket for Bangladesh, all rated KD "Easy" ([03](03-bangladesh-keyword-research.md)).
- **Users search to act, then verify.** They want Arabic, Bangla-script pronunciation (উচ্চারণ), Bangla meaning and audio together. They trust named sources and grades, and they leave over ads, paywalls, wrong times and text errors ([04](04-user-search-intent-and-behavior.md)).
- **The strongest needs are correctness obligations:** Islamic Foundation (IF)-matched district times, a Hijri date that follows Bangladesh's moon sighting, verse-accurate pronunciation, visible references, and no ads beside sacred text ([06](06-bangladesh-specific-user-needs.md)).
- **No Bangla site combines breadth and trust, so the biggest gaps are trust and local fit, not missing topics.** muslimbangla is broad but its duas are unsourced; hadithbd is sourced but has no prayer times; quran.com's search returns 0 for নামাজ; no site cites the Moon Sighting Committee ([05](05-competitor-feature-analysis.md); [07](07-content-and-feature-gaps.md)).
- **Demand has a daily, weekly and annual rhythm.** Prayer times and dua never switch off; Friday lifts some terms 25–60x; Ramadan week 1 runs about 40x its off-season level. Q1 2027 packs four occasions into about six weeks ([08](08-seasonal-search-trends.md)).
- **Google search for core Islamic terms fell 30–60% from 2023 to 2026**, and AI answers appeared on all 6 sampled Google pages. The cause is not measured ([03](03-bangladesh-keyword-research.md)).
- **Ten opportunities are essential for launch**, led by Bangla-aware search, proofread উচ্চারণ pages, sourced duas, IF-matched times and a cited BD Hijri date ([09](09-product-opportunities-and-priorities.md)).

## Final strategic analysis

### 1. Which Islamic websites are most popular among Bangladeshi users?

**Tier 1:** muslimbangla.com (~905K implied BD visits a month; BD rank #460) and hadithbd.com (~601K; #478). **Tier 2** (~100–360K): salat.habibur.com (~364K, low confidence, desktop-only geography), alqurans.com (~213K), alkawsar.com (~174K) and ihadis.com (~97K in Similarweb, which conflicts with Ahrefs). quran.com could be the most-used site in Bangladesh, but only an upper bound exists (below ~1.14M BD visits). Newspapers are far larger overall (prothomalo.com ~20.0M BD visits, #10 in Bangladesh), but their religion-section traffic is unmeasured. YouTube appears in 9 of 16 sampled Bing-BD results pages. Apps are the habit layer. Sources: [02](02-top-islamic-websites-bangladesh.md), [01](01-bangladesh-islamic-digital-market.md).

### 2. What are the top 50 Islamic search topics in Bangladesh?

The full ranked list is in [03 § Top 50 topics](03-bangladesh-keyword-research.md#top-50-islamic-search-topics-in-bangladesh). It mixes evidence types (Trends ratio first, then Ahrefs bucket, then observed-only), so it is an **ordinal guide, not a volume ranking**. Seasonal topics are ranked by 52-week means, which understate their peaks. Topics 45–50 (short-surah bundles, hadith collections, Hajj packages, finance, faraid, hifz) rank low on measured signal but reappear in the gap analysis. The top 15:

| # | Topic | Strongest signal |
|---|---|---|
| 1 | Dua (general and situational) | Trends 2.50x anchor-median (5-yr mean) |
| 2 | Dream interpretation | Trends 1.32x, rising |
| 3 | Hadith (head term, short shareable hadith) | Trends 1.13x; Ahrefs >1,000 |
| 4 | Prayer times (Bangla and Banglish, by district) | Trends 1.00x + 1.06x + 0.23x |
| 5 | Quran (general, translation, sharif) | Trends 0.62x anchor-median; Ahrefs >1,000 |
| 6 | Islamic baby names | Trends 0.52x |
| 7 | Sehri and iftar times | Trends 0.34x / 0.33x (Ramadan only) |
| 8 | Halal/haram/permissibility rulings | Trends 0.30–0.31x (generic words) |
| 9 | Ayatul Kursi | Ahrefs >10,000; Trends 0.29x |
| 10 | How to pray (rules of salah) | Trends 0.26x |
| 11 | Divorce (talaq) | Trends 0.23x |
| 12 | Surah Mulk | Ahrefs >10,000; Trends 0.21x |
| 13 | Salah niyat | Trends 0.19x |
| 14 | Shab-e-Barat | Trends 0.18x (peak 6.3x anchor-median) |
| 15 | Tahajjud | Trends 0.16x |

### 3. What are the top 100 actual Bangla, English and Banglish search queries?

All 100 are real rows from the keyword database, as typed: [03 § Top 100 queries](03-bangladesh-keyword-research.md#top-100-actual-bangla-english-and-banglish-queries). The list has 74 Bangla-script, 16 English and 10 Banglish queries. By evidence it has 48 Trends rows, 41 Ahrefs rows, 8 observed suggestions and 3 results-page rows. Positions 93–100 were added deliberately to represent Banglish and English utility queries. **It is not a volume ranking.** The top 20:

| # | Query | Gloss | Language | Signal |
|---|---|---|---|---|
| 1 | দোয়া | dua | Bangla | Trends 2.50x anchor-median |
| 2 | স্বপ্নে | "in a dream…" | Bangla | Trends 1.32x |
| 3 | হাদিস | hadith | Bangla | Trends 1.13x; Ahrefs >1,000 |
| 4 | namaz time | — | Banglish | Trends 1.06x |
| 5 | নামাজের সময় | prayer time | Bangla | Trends 1.00x (anchor) |
| 6 | কুরআন | Quran | Bangla | Ahrefs >1,000; Trends 0.62x anchor-median |
| 7 | quran | — | English | Trends ~1.9x কুরআন in the same set |
| 8 | dua | — | English | Trends ~0.51x দোয়া |
| 9 | ইসলামিক নাম | Islamic names | Bangla | Trends 0.52x |
| 10 | সেহরির শেষ সময় | sehri end time | Bangla | Trends 0.34x (Ramadan) |
| 11 | ইফতারের সময় | iftar time | Bangla | Trends 0.33x (Ramadan) |
| 12 | হারাম | haram | Bangla | Trends 0.31x (incl. non-religious use) |
| 13 | জায়েজ | permissible | Bangla | Trends 0.30x |
| 14 | ayatul kursi | — | English | Ahrefs >10,000 (Easy); Trends 0.29x |
| 15 | নামাজের নিয়ম | rules of salah | Bangla | Trends 0.26x |
| 16 | নামাজের সময়সূচি | prayer timetable | Bangla | Trends 0.23x |
| 17 | তালাক | divorce | Bangla | Trends 0.23x |
| 18 | hadis | — | Banglish | Trends 0.22x |
| 19 | surah mulk | — | English | Ahrefs >10,000 (Easy); Trends 0.21x |
| 20 | hadith | — | English | Trends 0.21x |

### 4. What do Bangladeshi users primarily visit Islamic websites to accomplish?

They visit to act. The main tasks are reciting a specific surah or dua correctly without reading Arabic; finding today's prayer, sehri or iftar time for their district; checking whether something is allowed, a sin or valid; finding a hadith or caption to post; learning when an occasion falls *in Bangladesh* and what to do; naming a child; and making sense of a dream. Queries name the object plus a format ("… বাংলা উচ্চারণ", Bangla pronunciation; "অর্থসহ", with meaning; "pdf"), a ruling word ("কি জায়েজ", is it permissible?) or a year ("কত টাকা ২০২৬", how much in taka, 2026). The head term "কুরআন" also brings students looking up Quran-board results: a separate audience. Sources: [04](04-user-search-intent-and-behavior.md), [03](03-bangladesh-keyword-research.md).

### 5. Which Islamic content categories have the strongest demand?

Year-round: **dua** (2.50x anchor-median, never zero in five years), **dream interpretation** (1.32x), **hadith** (1.13x, much of it homework), **prayer times** (1.00x Bangla + 1.06x Banglish), **Quran** (0.62x anchor-median, with single surahs such as Mulk, Kahf, Rahman and Yasin in Ahrefs' top buckets) and **Islamic names** (0.52x). Seasonal: **Ramadan utilities** (sehri and iftar 0.34x and 0.33x as 52-week means, all in Ramadan) and **Shab-e-Barat** (peak 6.3x). Q&A ruling words (হারাম, জায়েজ, তালাক) sit at 0.23–0.31x but include non-religious use. Sources: [03](03-bangladesh-keyword-research.md), [08](08-seasonal-search-trends.md).

### 6. Which features do users repeatedly need?

Arabic, proofread Bangla উচ্চারণ and Bangla meaning side by side, with audio to check pronunciation by ear; IF-matched district prayer times that meet Hanafi expectations; a Hijri date that follows Bangladesh's moon sighting; visible references, named grades and named translators; need-based duas with "how many times" and "when"; BD dates and countdowns for occasions; large, adjustable fonts; spelling-tolerant search; shareable text that keeps its reference; print or PDF versions; and a way to ask a named scholar. Sources: [04](04-user-search-intent-and-behavior.md), [06](06-bangladesh-specific-user-needs.md); most of this evidence comes from app reviews.

### 7. What are users dissatisfied with in existing websites?

Most of this evidence comes from **app** reviews, not website users.

- **Ads** are the top complaint: 551 reviews, 349 at 3★ or lower. Users frame them as religiously impermissible.
- **Paywalls** draw 185 mentions, 116 at 3★ or lower.
- **Alarms and notifications** draw 263 reviews. Only 25 complain of wrong prayer times, but those turn on minutes.
- **Text errors** draw 86 reviews, 37 at 3★ or lower, reported verse by verse.
- **Other complaints:** missing Bangla pronunciation, small fonts, wrong Hijri dates, nagging donation prompts, and being made to pick a madhhab.

On the web specifically, the audit and results pages show further failures. Search fails on the everyday word নামাজ. Unlabelled Hanafi and Ahl-e-Hadith rulings sit side by side. Unsourced duas sit on the largest portal. Ad-heavy caption sites with no Arabic win topic-hadith queries. Sources: [06](06-bangladesh-specific-user-needs.md), [04](04-user-search-intent-and-behavior.md), [05](05-competitor-feature-analysis.md).

### 8. Which important needs are not adequately served?

Ranked in [07](07-content-and-feature-gaps.md#opportunity-matrix-ranked): Bangla-aware search (synonyms, Banglish, typos); Bangla-script pronunciation on the web (only muslimbangla has it); occasion pages with BD dates; graded topic-hadith pages; a Hijri date citing the BD Moon Sighting Committee (absent everywhere); myth-checks of viral claims (nobody does them); sourced need-based duas; careful dream interpretation; public corrections; both Asr times labelled (only salat.habibur); madhhab-labelled Q&A; private women's fiqh; BD-context finance; and BD-unit zakat and BD-law faraid tools that rank.

### 9. What should a new Bangladesh-focused Islamic website prioritize?

Correctness and trust before breadth. The research supports launching with ten items:

1. Bangla-aware search and labelling.
2. Canonical surah, ayah and dua pages with proofread উচ্চারণ and audio.
3. Sourced, need-based duas.
4. IF-matched district prayer times with both Asr times labelled.
5. A cited BD Hijri date.
6. An occasion engine ready for Q1 2027.
7. Graded topic-hadith hubs.
8. A public corrections process.
9. Named provenance on every item.
10. Friday content.

The launch also has to meet the evidenced quality constraints: no ads or paywall on sacred text, light text-first pages, large fonts, no GPS requirement, and no nagging. Source: [09](09-product-opportunities-and-priorities.md).

### 10. What would make users return every day?

**[Inferred from search timing and reviews; there is no retention data.]**

- **Daily:** prayer times (searched every week for five years; peaking 04:00–06:00 in earlier research) with today's BD Hijri date.
- **Daily:** a small dua or Quran portion with audio, matching the dua peak at 05:00–06:00 and reviewers' khatam habits; morning and evening adhkar (Ahrefs >1,000).
- **Weekly:** Friday content (Surah Kahf about 25–45x on Fridays).
- **Every one to two months:** an occasion.

Notifications cut both ways. A daily-hadith push is not evidenced as a return driver. Sources: [08](08-seasonal-search-trends.md#serving-users-year-round-a-daily-weekly-and-annual-rhythm), [04](04-user-search-intent-and-behavior.md).

### 11. What could make the website more useful than existing alternatives?

The opening is combining what incumbents each do separately: muslimbangla's breadth, hadithbd's sourcing, quran.com's named translations, muslimbangla's উচ্চারণ and salat.habibur's both-Asr transparency ([05](05-competitor-feature-analysis.md#conclusion)). The site would add what nobody does: spelling-tolerant search, a cited moon-sighting date, graded topic hadith, and a public corrections log. Because Google is answering more text queries directly, the durable advantage is value an AI box cannot easily replace **[Inferred]**: verified and corrected text, audio-checked pronunciation, local utilities and routines ([01](01-bangladesh-islamic-digital-market.md#search-interest-is-shrinking-while-ai-answers-and-video-take-the-top-of-the-page)).

### 12. Which features should be considered essential, and which should be deferred?

- **Essential:** the ten launch items in Q9.
- **Strong next:** myth-checks, dream interpretation, madhhab-labelled Q&A, a zakat calculator due by early February 2027, names and captions, women's fiqh content, finance explainers and ruqyah safety.
- **Defer:** an offline web app, audio-first destinations, a faraid calculator, a children's section, a hifz tool and a licensed book library.
- **Not supported by evidence:** accounts and login, a madhhab picker, women-specific tools, web azan alarms, a daily-hadith push, a tasbih counter as a destination, Bijoy rendering fixes, desktop-first design, and "ad-free" as a differentiator.

Source: [09](09-product-opportunities-and-priorities.md).

## Prioritized product opportunities

Short form of [09](09-product-opportunities-and-priorities.md). Its "07 rank" column shows where each item started in [07](07-content-and-feature-gaps.md) and why it moved.

| Rank | Opportunity | Class |
|---|---|---|
| 1 | Bangla-aware search and spelling layer | Essential |
| 2 | Canonical surah, ayah and dua pages: Arabic, proofread উচ্চারণ, named translation, audio | Essential |
| 3 | Sourced, need-based dua pages | Essential |
| 4 | IF-matched district prayer times, both Asr labelled | Essential |
| 5 | BD Hijri date with a cited moon-sighting source | Essential |
| 6 | Occasion engine (about 10 occasions, BD dates; ready for Q1 2027) | Essential |
| 7 | Topic-hadith hubs with grade and reference | Essential |
| 8 | Report-an-error and public corrections log | Essential |
| 9 | Named translator, grader and edition on every item | Essential |
| 10 | Friday weekly content | Essential |
| 11 | Myth-check section | Strong next |
| 12 | Dream interpretation, sourced and carefully framed | Strong next |
| 13 | Madhhab-labelled answer pages | Strong next |
| 14 | Zakat calculator (BD units) and IF fitra amount, by early Feb 2027 | Strong next |
| 15 | Names with verified meanings; sourced captions | Strong next |
| 16 | Women's fiqh pages | Strong next |
| 17 | BD-context finance explainers | Strong next |
| 18 | Ruqyah safety pages | Strong next |
| 19–24 | Offline PWA; audio-first destinations; faraid; children's section; hifz; licensed books | Defer |
| 25 | Tasbih counter as a destination | Not supported (attachment only) |

## Report index

| File | What it covers |
|---|---|
| [01-bangladesh-islamic-digital-market.md](01-bangladesh-islamic-digital-market.md) | Audience size, mobile access, data cost, gender gap, the four channels, school-of-thought landscape, the search decline |
| [02-top-islamic-websites-bangladesh.md](02-top-islamic-websites-bangladesh.md) | Site ranking by estimated BD visits, tool conflicts, per-site profiles, dead domains |
| [03-bangladesh-keyword-research.md](03-bangladesh-keyword-research.md) | Demand by category, spelling and script splits, seven Q&A templates, top 50 topics, top 100 queries |
| [04-user-search-intent-and-behavior.md](04-user-search-intent-and-behavior.md) | Why users search each topic: problem, format, trust, leave and return reasons; a worked example |
| [05-competitor-feature-analysis.md](05-competitor-feature-analysis.md) | Feature matrix across 14 sites, search tests, Asr and Hijri divergence, PWA and ads |
| [06-bangladesh-specific-user-needs.md](06-bangladesh-specific-user-needs.md) | BD requirements rated Strong to Not evidenced, from 11,671 Play reviews and secondary data |
| [07-content-and-feature-gaps.md](07-content-and-feature-gaps.md) | 24-row opportunity matrix with scores and rationale |
| [08-seasonal-search-trends.md](08-seasonal-search-trends.md) | Annual, weekly and daily cycles; 2026 verified and 2027 planning dates |
| [09-product-opportunities-and-priorities.md](09-product-opportunities-and-priorities.md) | Final ranked opportunities, launch classification, seasonal plan, trust implications, risks |
| [10-research-methodology-and-sources.md](10-research-methodology-and-sources.md) | Tools, what was blocked, evidence taxonomy, 22 logged conflicts, source register |

## Data

**[data/keyword-database.csv](data/keyword-database.csv)** has 934 rows, 920 distinct keyword strings, and these columns: `keyword, language, intent, search_volume, keyword_difficulty, competition, trend, seasonality, user_need, content_opportunity, data_source, evidence_type, category, subcategory`. Languages are Bangla 759, English 83, Banglish 66 and Mixed 26. Categories are A–H plus X (new topics). The merge deduplicated rows on keyword + category; no exact duplicates existed, so all 934 rows were kept. **14 keywords intentionally appear in two categories** (দোয়া, for example, under Dua and under New topics), because each row carries a different user need.

`evidence_type` has four values:

| Value | Rows | Meaning |
|---|---|---|
| `measured_volume` | 136 | An Ahrefs **modelled** monthly bucket for BD (<100 / >100 / >1,000 / >10,000), with KD for about 100 rows. Not a Google figure, despite the label. All 136 are in Quran, Hadith and Dua/Zikir. |
| `trends_relative` | 157 | A Google Trends ratio to the prayer-time anchor. Relative, exact-phrase only. |
| `observed_suggestion` | 594 | A Google or YouTube autocomplete suggestion (gl=bd, 5 Nov 2026). The query exists; no volume. |
| `serp_observation` | 47 | Who ranked and what the results page showed. Not a rank audit; Bing is a proxy. |

**[data/raw/](data/raw/)** holds four subfolders:

- `play-reviews/`: `reviews.json`, 11,671 reviews of 22 apps, keyed by package name, with app metadata. **Handle as personal data.** It has no reviewer-name field, but it holds verbatim public review text, review IDs and developer replies, and some replies address reviewers by name. Do not republish it wholesale. **Not committed to git** (the repo is public): the file is gitignored and kept only on the researcher's machine.
- `seasonal-trends/`: 5-year weekly and 90-day daily Trends pulls with their term groupings.
- `keywords-quran-hadith-dua/`: autocomplete for 267 seeds, Trends sets, and YouTube autocomplete.
- `keywords-namaz-qa-etc/`: autocomplete for 712 seeds, Trends 12-month sets (including logged HTTP 429 failures), and DuckDuckGo/Bing attempts.

Raw research notes live in [../../research_notes/Bangladesh Islamic web search demand/](../../research_notes/Bangladesh%20Islamic%20web%20search%20demand/).

## Key limitations

- No exact search volumes, no first-party analytics, and no retention data for any BD Islamic product.
- User voice is almost all Google Play **app** reviews: not a random sample, reviewer location unverified, and website-only users absent.
- Facebook, YouTube comments and Reddit were unreachable, as were Keyword Planner and Semrush keyword data.
- Google results pages are a few dozen one-day snapshots; 34 came from a signed-in session and may be personalised.
- The IF's prayer-time method is unverified, and the ±9-minute offset question is unresolved.
- All 2027 Islamic dates except Ijtema and the Hajj roadmap are estimates.
- Opportunity scores are analyst judgements.

Full detail and the conflict log: [10-research-methodology-and-sources.md](10-research-methodology-and-sources.md).
