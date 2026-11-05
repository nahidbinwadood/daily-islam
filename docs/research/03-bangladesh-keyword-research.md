# Bangladeshis search Islam in Bangla, by item

Research date: 5 November 2026. Scope: Google search demand in Bangladesh (gl=bd / geo=BD) for Islamic topics in Bangla script, English and Banglish (Bangla typed in Latin letters). This report sits alongside [01-bangladesh-islamic-digital-market.md](01-bangladesh-islamic-digital-market.md), [02-top-islamic-websites-bangladesh.md](02-top-islamic-websites-bangladesh.md), [04-user-search-intent-and-behavior.md](04-user-search-intent-and-behavior.md), [05-competitor-feature-analysis.md](05-competitor-feature-analysis.md), [06-bangladesh-specific-user-needs.md](06-bangladesh-specific-user-needs.md), [07-content-and-feature-gaps.md](07-content-and-feature-gaps.md), [08-seasonal-search-trends.md](08-seasonal-search-trends.md) and [10-research-methodology-and-sources.md](10-research-methodology-and-sources.md). The row-level data is in [data/keyword-database.csv](data/keyword-database.csv) (934 rows).

## Key findings

- **Dua, prayer times, dream interpretation and hadith are the four biggest Islamic search families on Google in Bangladesh.** "দোয়া" (dua) averages 2.5x the prayer-time anchor over five years. "স্বপ্নে" (in a dream…) is 1.32x and still rising. "হাদিস" (hadith) is 1.13x and "নামাজের সময়" (prayer time) is the 1.0x anchor. These are Google Trends ratios, not volumes.
- **The highest measured volumes are single, named items with Easy difficulty.** Ayatul Kursi, Surah Mulk, Surah Rahman, Surah Kahf, Sayyidul Istighfar, Dua Qunut and the iftar and tarawih duas each show more than 10,000 searches a month in Ahrefs' Bangladesh estimate. Every one is rated "Easy". Head terms such as "হাদিস" and "কুরআন" are mostly homework and exam-result traffic.
- **Users type an object plus a format word, a ruling word or a year.** Typical shapes are a surah or dua name plus "বাংলা উচ্চারণ" (Bangla pronunciation), "অর্থসহ" (with meaning) or "pdf"; "… কি জায়েজ" (is … permissible?); "… করলে কি গুনাহ হবে" (is it a sin if …?); "… এর নিয়ম" (the rules of …); and "… কত টাকা ২০২৬" (how much in taka, 2026). Many queries name a trusted source inside the query itself: আল কাউসার, ইসলামিক ফাউন্ডেশন, শায়খ আহমাদুল্লাহ.
- **Bangla script dominates and is gaining share. Latin script still leads for surah names.** দোয়া is about 2x Latin "dua". "surah mulk" is about 7x "সূরা মুলক". Bangla নামাজ has nearly caught up with Latin "namaz". The popular spellings beat the scholarly ones by wide margins: দোয়া is about 24x দুয়া and about 300x দুআ; নামাজ is about 18x নামায; জিকির is about 26x যিকির.
- **Google search for Quran, hadith and dua terms fell 30–60% from 2023 to 2026.** The prayer-time anchor itself fell 34%. AI answers appeared on every sampled Google results page. The demand has not necessarily disappeared; some of it has likely moved to AI answers, apps and YouTube.
- **The weakest results pages relative to demand are topic-hadith pages, tools and shareables.** For topic hadith ("মা নিয়ে হাদিস", hadith about mothers), caption sites rank with no Arabic text and no grading. Zakat and faraid calculators are served by foreign or charity tools, "tasbih counter online" returns only English tools, and captions and names come from blogs that cite no sources.
- **Head terms are noisy.** Latin "dua" is polluted by Dua Lipa, "doa" by a university-admission portal, "আমল" by the amla fruit. Some suggestions carry India/West Bengal intent (Kolkata fitra amounts, the Kolkata newspaper Anandabazar in BD results). Any keyword plan has to filter these out first.

## Four kinds of evidence, and why they cannot be added together

Every number in this report comes from one of four evidence types. They measure different things, and the ranking lists below mix them, so it helps to know exactly what each one is.

| Evidence type | Source and settings | What it tells you | What it does not tell you |
|---|---|---|---|
| `measured_volume` | [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator/?country=bd&input=surah%20mulk), Google, country = Bangladesh. Volume buckets (<100, >100, >1,000, >10,000 a month) and a KD label (Easy/Medium/Hard) for about the first 10 rows per seed. 30 seeds run; "dua" and "dua for" returned nothing. | A third-party, modelled estimate of monthly BD Google searches | **Not Google figures.** Not Keyword Planner. Not exact. KD is Ahrefs' backlink-based difficulty, not results-page quality. |
| `trends_relative` | Google Trends, geo=BD, weekly. Every comparison set included the anchor **"নামাজের সময়" (prayer time) = 1.0x**. Two scales are used: the 52-week mean divided by the anchor's 52-week mean ("x anchor"), and the 5-year mean or peak divided by the anchor's 5-year median week ("x anchor-median") ([Trends BD, example set](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8,%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A7%80%E0%A6%B8,hadith,hadis)) | Relative interest, comparable across sets through the shared anchor | Not volume. Exact-phrase only. Small phrases round to 0 next to the anchor. |
| `observed_suggestion` | Google Autocomplete (`suggestqueries.google.com`, gl=bd, hl=bn or hl=en) and YouTube autocomplete, snapshot of **5 Nov 2026** ([example](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE)) | The query exists and is popular enough to be suggested in BD that day | **No volume.** Suggestions are personalised, IP-sensitive and from one day in the off-season. |
| `serp_observation` | Google results pages (gl=bd hl=bn, 6 + 34 queries), Bing cc=BD (16), DuckDuckGo kl=bd-en (4), plus page checks of top results | Who ranks, which SERP features appear, on-page quality signals | Not a rank audit. Bing is only a proxy for Google. The Google pages came from one signed-in browser. |

The 934 rows split into 594 observed suggestions, 157 Trends rows, 136 Ahrefs rows and 47 SERP observations. **All 136 Ahrefs rows are in Quran, Hadith and Dua/Zikir.** The researcher covering Namaz, Q&A, Ramadan/Hajj, Learning and Lifestyle could not get any free absolute volumes and left those columns as `n/a` rather than estimating them ([keyword notes, Q2](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m)). Rankings therefore compare Ahrefs buckets in categories A–C with Trends ratios in categories D–H.

For **25 terms we have both measures.** Using the analyst's crosswalk (>10,000 ≈ ≥0.05x anchor; >1,000 ≈ 0.01–0.05x; ≤1,000 ≈ <0.01x), 17 of the 25 land in the same class, 6 are one class apart and 2 are two classes apart. The two outliers are ambiguous head terms: "quran bangla" (0.16x Trends, Ahrefs only >100) and "তাসবিহ" (0.06x, Ahrefs >100), which mostly means the tasbih recited in salah. The crosswalk is good enough to order a list. It is not good enough to convert one measure into the other. Two disagreements matter for planning. "রিজিক বৃদ্ধির দোয়া" (dua for more rizq) is >1,000 in Ahrefs but 0.001x as an exact phrase in Trends. "সকাল সন্ধ্যার দোয়া ও জিকির" (morning and evening adhkar) is >1,000 in Ahrefs while the shorter phrase rounds to 0 in Trends. Both reflect Trends' exact-phrase limit, not a contradiction ([Ahrefs সকাল সন্ধ্যার দোয়া](https://ahrefs.com/keyword-generator/?country=bd&input=%E0%A6%B8%E0%A6%95%E0%A6%BE%E0%A6%B2%20%E0%A6%B8%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0%20%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE); [Ahrefs রিজিক বৃদ্ধির দোয়া](https://ahrefs.com/keyword-generator/?country=bd&input=%E0%A6%B0%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%95%20%E0%A6%AC%E0%A7%83%E0%A6%A6%E0%A7%8D%E0%A6%A7%E0%A6%BF%E0%A6%B0%20%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE)).

Two earlier figures were re-measured on the same anchor scale and reproduced exactly: আয়াতুল কুরসি at 0.20x and দোয়া at about 2x Latin "dua" (18.67 vs 9.58) ([Trends দোয়া vs dua](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE,dua,doa,duya,dowa)). Earlier research (Nov 4 2026) put দোয়া at about 2.4x the anchor on a 52-week basis. The keyword researcher did not re-verify this, but the seasonal researcher measured a 5-year mean of **2.50x anchor-median** for দোয়া on 5 Nov ([Trends T9](https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE,%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%95%20%E0%A6%A8%E0%A6%BE%E0%A6%AE,%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%AB)). The two figures use different statistics, but they agree, so this report treats দোয়া's lead as confirmed.

## Demand concentrates in four head families and thousands of named items

On the shared Trends scale, the big Islamic search families in Bangladesh are **dua (2.5x anchor-median), dream interpretation (1.32x), hadith (1.13x), prayer times in Bangla (1.0x) and Banglish (1.06x)**, then Islamic names (0.52x), sehri and iftar times (0.34x and 0.33x, almost all of it in Ramadan) and the generic ruling words হারাম (0.31x), জায়েজ (0.30x) and হালাল (0.20x) ([Trends BD 12-m](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m)). These head terms carry caveats. "হাদিস" is dominated by definitional homework: its top related query is "হাদিস কি" (what is hadith) ([Trends হাদিস related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8)). The ruling words also include non-religious uses. Ahrefs' count of keyword ideas per seed gives a rough sense of breadth: **দোয়া 17,365; হাদিস 10,786; কুরআন 8,391; ayatul kursi 3,207; surah kahf 2,292**, against only 54 for জাল হাদিস (fabricated hadith) ([Ahrefs দোয়া](https://ahrefs.com/keyword-generator/?country=bd&input=%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE); [Ahrefs জাল হাদিস](https://ahrefs.com/keyword-generator/?country=bd&input=%E0%A6%9C%E0%A6%BE%E0%A6%B2%20%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8)).

Beneath the head terms, the measured volume sits in **specific items**. Twelve keywords reach Ahrefs' >10,000 bucket: surah mulk, surah mulk bangla, ayatul kursi, ayatul kursi bangla, আয়াতুল কুরসি, আয়াতুল কুরসি বাংলা উচ্চারণ, surah rahman, surah kahf, সাইয়েদুল ইস্তেগফার, দোয়া কুনুত, ইফতারের দোয়া and তারাবির নামাজের দোয়া. **All twelve are rated KD "Easy"** ([Ahrefs ayatul kursi](https://ahrefs.com/keyword-generator/?country=bd&input=ayatul%20kursi); [Ahrefs surah mulk](https://ahrefs.com/keyword-generator/?country=bd&input=surah%20mulk)). Sixty more keywords sit in the >1,000 bucket, almost all Easy. They include nearly every format variant of Surah Yasin and Surah Mulk, short-hadith lists, and situational duas for sleep, waking, janaza, graves, the sick, danger, istikhara, the evil eye, rizq and debt ([Ahrefs সূরা ইয়াসিন](https://ahrefs.com/keyword-generator/?country=bd&input=%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%87%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%A8); [Ahrefs ঘুমানোর দোয়া](https://ahrefs.com/keyword-generator/?country=bd&input=%E0%A6%98%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%8B%E0%A6%B0%20%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE)). The combination of high bucket and low difficulty is the clearest acquisition signal in the dataset. It means one well-built canonical page per surah, ayah or dua can compete. A head-term strategy cannot.

## Category by category: what people type and where results fail

### A. Quran: surah name plus a format word

| Dimension | Evidence |
|---|---|
| Highest demand | ayatul kursi / আয়াতুল কুরসি (>10,000; 0.29x and 0.20x), surah mulk (>10,000; 0.21x), surah rahman (>10,000; 0.12x), surah kahf (>10,000), ইয়াসিন সূরা (0.12x), surah yasin (>1,000, KD Medium) ([Trends quran set C](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,surah%20yasin,surah%20mulk,ayatul%20kursi,surah%20rahman)) |
| Long tail | Surah + বাংলা উচ্চারণ / অর্থসহ / আরবি / pdf / লিখিত (written, not video) / সম্পূর্ণ (complete) / ফজিলত (virtue) / তেলাওয়াত (recitation) / ছবি (image) / কত পারায় (which para) / শানে নুযুল; ayah ranges ("সূরা বাকারার শেষ দুই আয়াত", the last two ayat of al-Baqarah; "সূরা হাশরের শেষ তিন আয়াত"; "surah kahf first 10 ayat", >1,000); user-named bundles (তিন কুল, চার কুল, ছোট ১০ সূরা) ([Autocomplete সূরা ইয়াসিন](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%87%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%A8)) |
| Question patterns | "কোন সূরার আয়াত" (which surah is this ayah from), "কত পারায়", "কুরআন শরীফের বাংলা অর্থ কি" (+500% rising) ([Trends কুরআন related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%86%E0%A6%A8)) |
| Rising | সূরা ফুরকানের ৭৪ নাম্বার আয়াত (+150%; the "রাব্বানা হাবলানা" dua for spouse and children), সূরা ইনশিরাহ বাংলা উচ্চারণ (+120%), তিন কুল সূরা (+100%) ([Trends সূরা related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE)) |
| Seasonal | Most Quran terms peak in Ramadan or Shab-e-Barat weeks; ইয়াসিন সূরা's 5-year peak fell in Shab-e-Barat week 2023; Surah Kahf is Friday-driven (see [08](08-seasonal-search-trends.md)) |
| Underserved | Quran-verse pages with no real Arabic text (Bing #1 for সূরা হাশরের শেষ তিন আয়াত had 0 Arabic characters and about 38 ad-script references); translation PDFs served from file hosts; no hifz tool ranks ([Bing সূরা হাশরের শেষ তিন আয়াত](https://www.bing.com/search?q=%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%B9%E0%A6%BE%E0%A6%B6%E0%A6%B0%E0%A7%87%E0%A6%B0%20%E0%A6%B6%E0%A7%87%E0%A6%B7%20%E0%A6%A4%E0%A6%BF%E0%A6%A8%20%E0%A6%86%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%A4&cc=BD&setlang=bn); [Google কুরআন শরীফ বাংলা অনুবাদ pdf](https://www.google.com/search?q=%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%86%E0%A6%A8%20%E0%A6%B6%E0%A6%B0%E0%A7%80%E0%A6%AB%20%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%20%E0%A6%85%E0%A6%A8%E0%A7%81%E0%A6%AC%E0%A6%BE%E0%A6%A6%20pdf&gl=bd&hl=bn); [Bing কুরআন হিফজ](https://www.bing.com/search?q=%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%86%E0%A6%A8%20%E0%A6%B9%E0%A6%BF%E0%A6%AB%E0%A6%9C%20%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0%20%E0%A6%B8%E0%A6%B9%E0%A6%9C%20%E0%A6%89%E0%A6%AA%E0%A6%BE%E0%A6%AF%E0%A6%BC&cc=BD&setlang=bn)) |

The head term "কুরআন" behaves differently from surah queries. Its top related queries are institutions and exams: তালিমুল কুরআন 100, নূরানী তালিমুল কুরআন বোর্ড 73. Its rising queries are almost all **Quran-board results** ("হুফফাজুল কুরআন ফাউন্ডেশন রেজাল্ট 2026", Breakout) ([Trends কুরআন related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%86%E0%A6%A8)). Audio intent is YouTube-shaped: "সূরা ইয়াসিন তেলাওয়াত মধুর কন্ঠে" (Surah Yasin recited in a sweet voice), "quran tilawat for sleep", and named reciters ([YouTube autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&hl=bn&gl=bd&q=%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%86%E0%A6%B0%20%E0%A6%B0%E0%A6%B9%E0%A6%AE%E0%A6%BE%E0%A6%A8)).

### B. Hadith: short shareable hadith and topic lists, not collection browsing

| Dimension | Evidence |
|---|---|
| Highest demand | হাদিস (1.13x; Ahrefs >1,000, KD Medium); hadis 0.22x; hadith 0.21x; হাদীস 0.17x; Ahrefs >1,000 for হাদিসের বাণী (sayings of hadith), ছোট হাদিস (short hadith), শিক্ষামূলক ছোট হাদিস (educational short hadith), ১০০ টি ছোট হাদিস (100 short hadith), ছোট ছোট হাদিস পোস্ট (short hadith posts), ইসলামিক হাদিস, শবে বরাতের ফজিলত সম্পর্কে হাদিস (hadith on Shab-e-Barat's virtue) ([Ahrefs হাদিস](https://ahrefs.com/keyword-generator/?country=bd&input=%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8)) |
| Long tail | "<topic> নিয়ে হাদিস" (hadith about <topic>): মা (mother), বাবা মা, নামাজ, রোজা, বিয়ে, ধৈর্য (patience), রিজিক, দাড়ি (beard), পর্দা, বন্ধু (friend), মৃত্যু, জান্নাত; almost every topic also has a ক্যাপশন / ছবি / আরবি variant; Banglish forms (ma niye hadis, biye niye hadis) ([Autocomplete মা নিয়ে হাদিস](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%AE%E0%A6%BE%20%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87%20%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8)) |
| Question patterns | Number look-ups ("সহিহ বুখারী" completes to hadith numbers such as ৫৬২২, ৫৭৮৭; "bukhari sharif 29 number hadees"), which suggests people verifying a citation they saw elsewhere; definitional "কাকে বলে / কত প্রকার" ([Autocomplete সহিহ বুখারী](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B8%E0%A6%B9%E0%A6%BF%E0%A6%B9%20%E0%A6%AC%E0%A7%81%E0%A6%96%E0%A6%BE%E0%A6%B0%E0%A7%80)) |
| Rising | ভূমিকম্প নিয়ে হাদিস (hadith on earthquakes; Breakout), রজব মাসের ফজিলত সম্পর্কে আরবি হাদিস (+2,000%), তাবিজ নিয়ে হাদিস (hadith on amulets; +80%) ([Trends হাদিস related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8)) |
| Seasonal | "হাদিস" peaked in Shab-e-Barat week 2024 (index 77) |
| Underserved | Topic-hadith SERPs: caption sites rank #1 (caption.com.bd with 0 Arabic characters and about 28 ad-script references; bd24live with 1 reference and about 44 ad-script references). Library queries ("সহিহ বুখারী বাংলা", "hadith bangla") are well served by hadithbd and ihadis ([Bing মা নিয়ে হাদিস](https://www.bing.com/search?q=%E0%A6%AE%E0%A6%BE%20%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87%20%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8&cc=BD&setlang=bn); [Bing রিজিক নিয়ে হাদিস](https://www.bing.com/search?q=%E0%A6%B0%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%95%20%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87%20%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8&cc=BD&setlang=bn); [Bing সহিহ বুখারী বাংলা](https://www.bing.com/search?q=%E0%A6%B8%E0%A6%B9%E0%A6%BF%E0%A6%B9%20%E0%A6%AC%E0%A7%81%E0%A6%96%E0%A6%BE%E0%A6%B0%E0%A7%80%20%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE&cc=BD&setlang=bn)) |

Collection browsing and authenticity checking are **measurably small on Google**. বুখারী শরীফ (Bukhari) is >100 in Ahrefs and 0.03x in Trends. মুসলিম শরীফ (Muslim) is >100 and 0.005x. **জাল হাদিস (fabricated hadith) and every authenticity variant are below 100 searches a month** ([Ahrefs জাল হাদিস](https://ahrefs.com/keyword-generator/?country=bd&input=%E0%A6%9C%E0%A6%BE%E0%A6%B2%20%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8)). Authenticity matters for trust, as [04](04-user-search-intent-and-behavior.md) shows, but it does not drive traffic. The first completion for Latin "hadith" is **hadithbd**, a navigational incumbent ([Autocomplete hadith](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=bd&q=hadith)).

### C. Dua and zikir: life situations, bundles and trusted names

| Dimension | Evidence |
|---|---|
| Highest demand | দোয়া (2.5x anchor-median); দোয়া কুনুত, সাইয়েদুল ইস্তেগফার, ইফতারের দোয়া, তারাবির নামাজের দোয়া (all >10,000, Easy); dua for (0.12x); জিকির (>1,000; 0.08x, flat 2023–2026) |
| Long tail | Situations: sleep, waking, after salah, janaza, the grave, the sick, danger, istikhara, evil eye, rizq, debt, headache, anxiety. Proxy searching for family members: "স্বামীর রিজিক বৃদ্ধির দোয়া" (dua for my husband's rizq; >100). Bundles: "সকাল সন্ধ্যার দোয়া ও জিকির" (morning and evening; >1,000), "ঘুমানোর আগে কি কি দোয়া পড়তে হয়" (which duas before sleep) ([Autocomplete রিজিক বৃদ্ধির দোয়া](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B0%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%95%20%E0%A6%AC%E0%A7%83%E0%A6%A6%E0%A7%8D%E0%A6%A7%E0%A6%BF%E0%A6%B0%20%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE)) |
| Question patterns | "কতবার পড়তে হয়" (how many times), "কখন পড়তে হয়" (when), "সঠিক উচ্চারণ / সঠিক বানান" (correct pronunciation or spelling), "কোন সুরার আয়াত" (which surah). The last is a misconception for Sayyidul Istighfar, which is a hadith in Bukhari, yet the query reaches >100 ([Autocomplete সাইয়েদুল ইস্তেগফার](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B8%E0%A6%BE%E0%A6%87%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%A6%E0%A7%81%E0%A6%B2%20%E0%A6%87%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A7%87%E0%A6%97%E0%A6%AB%E0%A6%BE%E0%A6%B0)) |
| Trusted names typed into the query | শায়খ আহমাদুল্লাহ, আস সুন্নাহ ফাউন্ডেশন, আল কাউসার, মিজানুর রহমান আজহারী, আবু বকর যাকারিয়া (Hisnul Muslim translator) ([Autocomplete সকাল সন্ধ্যার দোয়া](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B8%E0%A6%95%E0%A6%BE%E0%A6%B2%20%E0%A6%B8%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0%20%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE)) |
| Rising (Latin dua) | "allahumma innaka afuwwun tuhibbul full dua" (Breakout), earthquake dua (+300%), sohobas korar dua (dua before intimacy; +250%), arafah day dua (+140%), bod nojor er dua (evil eye; +90%) ([Trends dua related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=dua)) |
| BD-specific | A Sufi-order zikir layer: আটরশি জিকির (Atroshi; related index 38), তাহেরি জিকির 25, চরমোনাই জিকির (Charmonai) 21 ([Trends জিকির related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%9C%E0%A6%BF%E0%A6%95%E0%A6%BF%E0%A6%B0)) |
| Underserved | News-portal dua pages without grading (jagonews24 #1 for ঋণ মুক্তির দোয়া, debt dua); ad-heavy blogs (namerorthobangla, about 69 ad-script references); **"tasbih counter online": only global English tools rank, no Bangla tool** ([Bing tasbih counter online](https://www.bing.com/search?q=tasbih%20counter%20online&cc=BD&setlang=bn); [Bing সকাল সন্ধ্যার দোয়া ও জিকির](https://www.bing.com/search?q=%E0%A6%B8%E0%A6%95%E0%A6%BE%E0%A6%B2%20%E0%A6%B8%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0%20%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE%20%E0%A6%93%20%E0%A6%9C%E0%A6%BF%E0%A6%95%E0%A6%BF%E0%A6%B0&cc=BD&setlang=bn)) |

"তাসবিহ" mostly means the tasbih recited in salah. Its top related queries are নামাজের তাসবিহ (100), সালাতুত তাসবিহ (55) and রুকুর তাসবিহ (the tasbih in ruku). Counter queries are mostly **shopping for a device** ("digital tasbih price in bangladesh", "zikr ring price in bangladesh") ([Trends তাসবিহ related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%A4%E0%A6%BE%E0%A6%B8%E0%A6%AC%E0%A6%BF%E0%A6%B9); [Autocomplete ডিজিটাল তাসবিহ](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%9F%E0%A6%BE%E0%A6%B2%20%E0%A6%A4%E0%A6%BE%E0%A6%B8%E0%A6%AC%E0%A6%BF%E0%A6%B9)). The best-quality dua page observed, a muslimbangla.com Q&A on anxiety with 0 ad-script references and 8 references, ranked #1 for a query that Ahrefs puts below 100 a month ([Bing দুশ্চিন্তা দূর করার দোয়া](https://www.bing.com/search?q=%E0%A6%A6%E0%A7%81%E0%A6%B6%E0%A7%8D%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%BE%20%E0%A6%A6%E0%A7%82%E0%A6%B0%20%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0%20%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE&cc=BD&setlang=bn)).

### D. Namaz: times by district, rules by situation, rulings by madhhab

| Dimension | Evidence |
|---|---|
| Highest demand | namaz time 1.06x; নামাজের সময় 1.00x; নামাজের নিয়ম (rules of salah) 0.26x; নামাজের সময়সূচি (prayer timetable) 0.23x; নামাজের নিয়ত (salah niyat) 0.19x; তাহাজ্জুদ 0.16x ([Trends BD 12-m](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m)) |
| Long tail | Times down to district, upazila and neighbourhood ("নামাজের সময়সূচি বিনোদপুর রাজশাহী", "আজকের নামাজের সময়সূচি নেত্রকোনা"); start **and** end of each waqt; forbidden times ("নামাজের নিষিদ্ধ সময় কয়টা থেকে কয়টা পর্যন্ত ২০২৬", forbidden times from when to when, 2026) ([Autocomplete নামাজের সময়সূচি সিলেট](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=নামাজের+সময়সূচি+সিলেট)) |
| Question patterns | Mistake handling ("নামাজের মধ্যে ভুল হলে কি করনীয়", what to do if I make a mistake in salah); rakat counts; "সুন্নত নামাজ না পড়লে কি গুনাহ হবে" (is it a sin to skip sunnah prayers); women's salah "দলিলসহ" (with evidence) ([Autocomplete মহিলাদের নামাজের নিয়ম](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=মহিলাদের+নামাজের+নিয়ম)) |
| Madhhab and incumbent tags | "namaz time dhaka today hanafi", "prayer time dhaka salafi", "আহলে হাদিস নামাজের সময়সূচী রাজশাহী 2026", "namaz time dhaka habibur", "prayer time dhaka islamic foundation pdf" ([Autocomplete namaz time dhaka](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=bd&q=namaz+time+dhaka); [Autocomplete prayer time dhaka](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=bd&q=prayer+time+dhaka)) |
| Rising | বাসর রাতের নামাজের নিয়ম (wedding-night prayer; Breakout), মহিলাদের শবে কদরের নামাজের নিয়ম (+600%), জানাজার নামাজের নিয়ম ও দোয়া (+130%) ([Trends নামাজের নিয়ম related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%AE)) |
| Underserved | "নামাজের নিয়ম" results are mostly SEO blogs; women's salah results mix muslimbangla with Facebook and a tech blog; video-heavy SERPs for "namaz er niyom" (16 YouTube links) ([Google মহিলাদের নামাজের নিয়ম](https://www.google.com/search?hl=bn&gl=bd&q=মহিলাদের+নামাজের+নিয়ম); [DDG নামাজের নিয়ম](https://html.duckduckgo.com/html/?kl=bd-en&q=নামাজের+নিয়ম)) |

### E. Q&A (masala and fatwa): seven question templates

| Dimension | Evidence |
|---|---|
| Highest demand | হারাম 0.31x, জায়েজ 0.30x, তালাক (divorce) 0.23x, হালাল 0.20x, যাকাত 0.16x, ফিতরা 0.083x (generic words; their true Q&A share is lower) |
| Top "জায়েজ" questions | স্ত্রীর দুধ খাওয়া কি জায়েজ (100), জন্মদিন পালন করা কি জায়েজ (birthdays; 69), হিল্লা বিয়ে (65), টিকটিকি মারা (killing lizards; 48), ঈদে মিলাদুন্নবী পালন করা (37), মানত (36), মিলাদ (32), ভোট দেওয়া (voting; 29, +80%), গায়েবানা জানাজা (funeral prayer in absentia; Breakout) ([Trends জায়েজ related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%9C%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%9C)) |
| Clusters | Food (octopus, snails, rabbit, crab, kangaroo); finance (bank interest, Islami Bank DPS, FDR, insurance, shares, Quotex/forex, crypto, freelancing, YouTube income); divorce in anger; women's masail; inheritance; fasting medical cases ([Autocomplete ইসলামী ব্যাংকে টাকা রাখা](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=ইসলামী+ব্যাংকে+টাকা+রাখা); [Autocomplete রোজা অবস্থায়](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=রোজা+অবস্থায়)) |
| Rising | কত টাকা হলে যাকাত দিতে হবে ২০২৬ (how much money makes zakat due, 2026; Breakout), নগদ কত টাকা থাকলে যাকাত দিতে হবে (+200%), যাকাত ক্যালকুলেটর বাংলাদেশ (+120%), খোলা তালাক কি (+50%) ([Trends যাকাত related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%A4); [Trends তালাক related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%A4%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%95)) |
| Underserved | Fragmented SERPs: muslimbangla appears in 12 of 34 sampled; Facebook posts dominate fiqh SERPs; Ahl-e-Hadith monthlies (at-Tahreek, al-Itisam) and Hanafi sources (Al-Kawsar, Ahle Haq Media) answer the same question with no madhhab labelling; calculators are foreign or charity tools ([Google যাকাত ক্যালকুলেটর](https://www.google.com/search?hl=bn&gl=bd&q=যাকাত+ক্যালকুলেটর); [Google ফারায়েজ ক্যালকুলেটর](https://www.google.com/search?hl=bn&gl=bd&q=ফারায়েজ+ক্যালকুলেটর)) |

Two autocomplete seeds came back empty, which is itself informative: "হস্তমৈথুন" (masturbation; likely filtered) and natural-language inheritance questions such as "মেয়েরা বাবার সম্পত্তি কত পাবে" (how much will daughters inherit) ([Autocomplete হায়েজ অবস্থায়](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=হায়েজ+অবস্থায়); [Autocomplete ফারায়েজ ক্যালকুলেটর](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=ফারায়েজ+ক্যালকুলেটর)). Google underrepresents these private questions, but they are not small. Earlier research (Nov 4 2026) found that IslamQA Bangla's two most-read answers concern sexual purity and masturbation, at about 223,600 and 222,700 reads ([IslamQA Bangla](https://islamqa.info/bn)).

### F. Ramadan and Hajj: utilities, dates and costs

| Dimension | Evidence |
|---|---|
| Highest demand | সেহরির শেষ সময় 0.34x, ইফতারের সময় 0.33x (52-week means that fall almost entirely in Ramadan); শবে বরাত 0.18x; রোজার নিয়ত 0.071x; ইফতারের দোয়া and তারাবির নামাজের দোয়া (>10,000); রমজানের ক্যালেন্ডার 0.042x |
| Long tail | Calendars by district with "ইসলামিক ফাউন্ডেশন" and "ডিজাইন" (design) modifiers; neighbourhood-level times ("sehri time today mirpur", "iftar time dhaka countdown") ([Autocomplete iftar time dhaka](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=bd&q=iftar+time+dhaka)) |
| Dates asked months ahead | On 5 Nov 2026 autocomplete already offers রমজানের ক্যালেন্ডার ২০২৭, শবে বরাত ২০২৭ কত তারিখে বাংলাদেশ, ঈদুল ফিতর ২০২৭ কত তারিখে বাংলাদেশ ([Autocomplete রমজানের ক্যালেন্ডার](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=রমজানের+ক্যালেন্ডার)) |
| Hajj and Umrah | Packages, registration deadlines and visas: "হজ্জ নিবন্ধন 2027 শেষ তারিখ" (Hajj registration 2027 last date), "hajj package 2027 bangladesh price for family", "ওমরাহ ভিসা ফি কত 2026"; a news headline surfaced as a suggestion ("নিবন্ধন শেষ হচ্ছে ২৪ সেপ্টেম্বর সময় আর বাড়বে না", registration ends 24 September, no extension) ([Autocomplete হজ নিবন্ধন](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=হজ+নিবন্ধন)) |
| Spelling | কোরবানির dominates suggestions over কুরবানির; "কুরবানির নিয়ম" is only 0.002x |
| Underserved | Hajj SERPs are TV-channel YouTube plus agencies; "হজ" related queries are homework ("হজ কি" 100, "বিদায় হজ রচনা") ([Trends হজ related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%B9%E0%A6%9C); [Google হজ প্যাকেজ ২০২৭](https://www.google.com/search?hl=bn&gl=bd&q=হজ+প্যাকেজ+২০২৭)) |

The Trends sets for Hajj and Umrah package terms failed three times with HTTP 429. Their demand rests on autocomplete and SERP evidence alone. The seasonal pull shows registration and package terms at near zero (peak 0.03–0.08x anchor-median); see [08](08-seasonal-search-trends.md).

### G. Learning: books, homework and children

| Dimension | Evidence |
|---|---|
| Highest demand | কালেমা 0.059x; আল্লাহর ৯৯ নাম (99 names of Allah) 0.030x; আরবি শিক্ষা (learning Arabic) 0.012x; ইসলামিক বই pdf 0.002x; নবীদের কাহিনী (prophets' stories), ইসলামিক কুইজ and ইসলামিক সাধারণ জ্ঞান (Islamic general knowledge) all about 0 |
| Long tail | Free PDFs and piracy ("ইসলামিক বই pdf download / free / telegram"); school and exam work ("ইসলাম শিক্ষা বই নবম শ্রেণি ২০২৬", Islamic studies textbook class 9; "শিরক কাকে বলে কত প্রকার ও কি কি") ([Autocomplete ইসলামিক বই pdf](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=ইসলামিক+বই+pdf); [Autocomplete ইসলাম শিক্ষা বই](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=ইসলাম+শিক্ষা+বই)) |
| Children | "শিশুদের ইসলামিক শিক্ষা" (Islamic education for children) returned **no suggestions**; parents type বাচ্চাদের ইসলামিক নাম / গল্প / কার্টুন instead |
| Contested history and eschatology | "দাজ্জাল এখন কোথায় আছে" (where is Dajjal now), "ইমাম মাহদীর আগমন ২০২৮" (Imam Mahdi's coming in 2028) ([Autocomplete ইমাম মাহদী](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=ইমাম+মাহদী)) |
| Underserved | Book SERPs are Pinterest, Internet Archive and Facebook PDF groups; prophets' stories are video-led (19 YouTube links); children's learning returns Facebook, Quora and Academia.edu ([Google ইসলামিক বই pdf](https://www.google.com/search?hl=bn&gl=bd&q=ইসলামিক+বই+pdf); [Google শিশুদের ইসলামিক শিক্ষা](https://www.google.com/search?hl=bn&gl=bd&q=শিশুদের+ইসলামিক+শিক্ষা)) |

### H. Lifestyle: names, captions and family rights

| Dimension | Evidence |
|---|---|
| Highest demand | ইসলামিক নাম 0.52x (the largest lifestyle term); ইসলামিক ক্যাপশন 0.13x; ইসলামিক স্ট্যাটাস 0.078x (declining); ইসলামিক পিক 0.061x; তওবা 0.059x; জুম্মা মোবারক 0.036x; ইসলামিক উক্তি (quotes) 0.035x |
| Long tail | Names by gender, by first letter ("স দিয়ে", starting with S), with meaning, year-tagged ("অর্থসহ ২০২৬"), from the Quran, for twins; single-name meaning look-ups ("আয়ান নামের ইসলামিক অর্থ কি") ([Trends ইসলামিক নাম related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%95%20%E0%A6%A8%E0%A6%BE%E0%A6%AE); [Autocomplete নামের ইসলামিক অর্থ](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=নামের+ইসলামিক+অর্থ)) |
| Captions | ইসলামিক ক্যাপশন বাংলা (100), সকাল নিয়ে (about the morning; 48), আরবি (31), রাত নিয়ে (about the night; 21), রমজান নিয়ে (+300% rising) ([Trends ইসলামিক ক্যাপশন related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%95%20%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AA%E0%A6%B6%E0%A6%A8)) |
| Rising | ছেলেদের ইসলামিক নাম অর্থসহ ২০২৬ (boys' names with meaning 2026; Breakout); ও দিয়ে (+60%) and খ দিয়ে (+50%) boys' names |
| Underserved | Captions: Pinterest, Medium, SEO caption blogs, **none citing a source for the quoted hadith or ayah**; names: HadithBD, Facebook story pages and FirstCry (an Indian parenting site) ([Google ইসলামিক ক্যাপশন](https://www.google.com/search?hl=bn&gl=bd&q=ইসলামিক+ক্যাপশন); [Google মেয়েদের ইসলামিক নাম অর্থসহ](https://www.google.com/search?hl=bn&gl=bd&q=মেয়েদের+ইসলামিক+নাম+অর্থসহ)) |

Earlier research (Nov 4 2026) recorded "ইসলামিক স্ট্যাটাস" collapsing from an index of 9 in 2023 to 2 in 2026. The 5 Nov figure of 0.078x confirms a small and shrinking term ([earlier Trends pull](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE)). The hypothesis that caption demand is "huge" holds only partly on Google. That demand probably lives on Facebook and Pinterest, which were not measured.

### New topics: dreams outrank prayer times

| Topic | Evidence |
|---|---|
| Dream interpretation | **স্বপ্নে = 1.32x anchor, larger than prayer times**, peak week Sep 27–Oct 3 2026. Top related: স্বপ্নে মাছ দেখলে কি হয় (seeing fish in a dream; 100), সাপ (snake; 78), বিয়ে (marriage; 70), বাচ্চা (a baby; 61). Rising: স্বপ্নের ব্যাখ্যা জানতে চাই (I want a dream interpretation; +200%). SERP includes Facebook, Quora and **Anandabazar Patrika (Kolkata)** ([Trends স্বপ্নে related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%AA%E0%A7%8D%E0%A6%A8%E0%A7%87); [Google স্বপ্নে সাপ দেখলে কি হয়](https://www.google.com/search?hl=bn&gl=bd&q=স্বপ্নে+সাপ+দেখলে+কি+হয়)) |
| Aqiqah | 0.076x, peak week May 24–30 2026 (just before Eid-ul-Adha); questions about timing, meat distribution and "আকিকা না দিলে কি হয়" (what if aqiqah is not given) ([Google আকিকার নিয়ম](https://www.google.com/search?hl=bn&gl=bd&q=আকিকার+নিয়ম)) |
| Ruqyah, evil eye, jinn | রুকইয়াহ 0.005x on Google, but the most video-heavy SERP sampled (33 YouTube links); queries are navigational to brands and centres ("ruqyah support bd", "ruqyah center uttara") ([Google রুকইয়াহ](https://www.google.com/search?hl=bn&gl=bd&q=রুকইয়াহ)) |
| Death rites and circumcision | কবর জিয়ারতের নিয়ম ও দোয়া, চল্লিশা করা কি জায়েজ, মৃত ব্যক্তির জন্য দোয়া স্ট্যাটাস; সুন্নতে খাতনা ছবি / কেক ডিজাইন / কার্ড (observed only; no Trends data) |
| Fact-check demand | "৮০ বছরের গুনাহ মাফের দোয়া" (dua that forgives 80 years of sins; Trends related index 8 under গুনাহ), "জুমার নামাজ ২২ রাকাত কি কি" (what are the 22 rakat of Jumu'ah), "জান্নাতের সুসংবাদ প্রাপ্ত ৪১ জন সাহাবীদের নাম" (names of 41 companions promised paradise), "ইমাম মাহদীর আগমন ২০২৮", "গর্ভাবস্থায় কোন মাসে কোন সূরা পড়তে হয়" (which surah to read in which month of pregnancy) ([Trends গুনাহ related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%97%E0%A7%81%E0%A6%A8%E0%A6%BE%E0%A6%B9); [Autocomplete গর্ভাবস্থায়](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=গর্ভাবস্থায়)) |

Earlier research (Nov 4 2026) also measured dream searches peaking **05:00–08:00 BD time**, right after waking. It recorded the "স্বপ্নে" yearly mean rising from 16 (2021) to 40 (2026) within its set, the only major Islamic term at an all-time high ([Trends BD](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE)).

## Seven question templates organise most Q&A demand

Q&A queries in Bangla follow a small number of fixed shapes. Each shape calls for a predictable answer format. Together they also show users checking whether something is allowed, whether it is a sin, and who says so.

| Template | Example queries (gloss) | Evidence |
|---|---|---|
| **Ruling:** "… কি জায়েজ / হারাম / হালাল নাকি হারাম / জায়েজ কিনা" | জন্মদিন পালন করা কি জায়েজ (is celebrating birthdays permissible); অক্টোপাস হালাল নাকি হারাম; তাবিজ দেওয়া কি জায়েজ (amulets); প্রেম করা কি হারাম (is romance haram) | [Trends জায়েজ related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%9C%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%9C); [Autocomplete দেওয়া কি জায়েজ](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=দেওয়া+কি+জায়েজ) |
| **Sin-check:** "… করলে / না পড়লে / না দিলে কি গুনাহ হবে" | সুন্নত নামাজ না পড়লে কি গুনাহ হবে (Trends related 8); তারাবির নামাজ না পড়লে কি গুনাহ হবে (7); কুরবানি না করলে কি গুনাহ হবে; পরীক্ষায় নকল করলে (cheating in exams) | [Autocomplete করলে কি গুনাহ হবে](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=করলে+কি+গুনাহ+হবে); [Trends গুনাহ related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%97%E0%A7%81%E0%A6%A8%E0%A6%BE%E0%A6%B9) |
| **Validity:** "… দিলে কি নামাজ হবে / তালাক হয়" | নেইল পলিশ দিলে কি নামাজ হয় (is salah valid with nail polish); চুল কালার করলে কি নামাজ হবে; রাগের মাথায় তালাক দিলে কি তালাক হয় (does divorce in anger count) | [Autocomplete নেইল পলিশ](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=নেইল+পলিশ) |
| **How-to:** "… এর নিয়ম / পড়ার নিয়ম / নিয়ম ও দোয়া / নিয়ম ও নিয়ত" | নামাজের নিয়ম (0.26x); তাহাজ্জুদ নামাজের নিয়ম (related 100); জানাজার নামাজের নিয়ম ও দোয়া (+130%); কোরবানির ভাগের নিয়ম (rules for shares in Qurbani) | [Trends নামাজের নিয়ম related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%AE) |
| **List or count:** "… কয়টি ও কি কি / কত রাকাত / কত প্রকার" | নামাজ ভঙ্গের কারণ ১৯টি (19 things that break salah); নামাজের ওয়াজিব ১৪ টি; অজু ভঙ্গের কারণ কয়টি ও কি কি; মাখরাজ ১৭ টি (often homework) | [Autocomplete নামাজ ভঙ্গের কারণ](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=নামাজ+ভঙ্গের+কারণ) |
| **Amount or date this year:** "… কত টাকা ২০২৬ / কবে ২০২৭ / কত তারিখে বাংলাদেশ" | ফিতরা কত টাকা ২০২৬ ইসলামিক ফাউন্ডেশন (0.033x); যাকাতের নিসাব কত টাকা ২০২৬; রোজার কাফফারা ২০২৬ কত টাকা; শবে বরাত ২০২৭ কত তারিখে বাংলাদেশ | [Autocomplete ফিতরা কত টাকা](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=ফিতরা+কত+টাকা); [Autocomplete রোজা অবস্থায়](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=রোজা+অবস্থায়) |
| **Authority-tagged:** "… আল কাউসার / শায়খ আহমাদুল্লাহ / মিজানুর রহমান আজহারী / আহলে হক মিডিয়া / দলিলসহ / সহীহ হাদিস / হানাফি / আহলে হাদিস" | মহিলাদের নামাজের নিয়ম আল কাউসার; ব্যাংকে চাকরি হালাল না হারাম আহমাদুল্লাহ; জুমার নামাজ কত রাকাত সহীহ হাদিস; বিতর নামাজের নিয়ম আহলে হাদিস; হানাফি ও মোহাম্মদী পার্থক্য | [Autocomplete মহিলাদের নামাজের নিয়ম](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=মহিলাদের+নামাজের+নিয়ম); [Autocomplete হানাফি](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=হানাফি) |

The authority tags matter most. Users do not trust anonymous answers. They go looking for a **person, a publication or a school**, and results pages give them conflicting rulings with no labels. Earlier research (Nov 4 2026) adds that a viewer asked Shaykh Ahmadullah on a live programme whether calling Milad a bid'ah makes someone a kafir ([Jugantor](https://www.jugantor.com/islam-life/1144295)). The sectarian flashpoints visible in the "জায়েজ" list (Milad, mazar, tabiz, pir) are live public debates, not just search curiosities.

## Spelling variants: label with the popular form, match every form

Bangla spelling is not standardised for Arabic-origin religious words, and the gaps are large. The ratios below are Trends 52-week means within the same comparison set unless noted.

| Concept | Dominant form | Variant(s) | Ratio | Source |
|---|---|---|---|---|
| Dua | **দোয়া** 18.67 | দুয়া 0.77; দুআ 0.06; দোআ 0.00 | দোয়া ≈ 24x দুয়া, ≈ 300x দুআ; দোআ autocompletes to soil science (দোআঁশ মাটি) | [Trends দোয়া spellings](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE,%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE,%E0%A6%A6%E0%A7%81%E0%A6%AF%E0%A6%BC%E0%A6%BE,%E0%A6%A6%E0%A7%8B%E0%A6%86,%E0%A6%A6%E0%A7%81%E0%A6%86); [Autocomplete দোআ](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%A6%E0%A7%8B%E0%A6%86) |
| Quran | **কুরআন** 12.77 ≈ **কোরআন** 11.13 | কোরআন শরীফ 1.81 vs কুরআন শরীফ 1.10 | Near parity (1.15x), but **reversed with শরীফ** (কোরআন শরীফ 1.6x); YouTube completions favour কোরআন | [Trends Quran spellings](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%86%E0%A6%A8,%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A6%86%E0%A6%A8,quran,%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%86%E0%A6%A8%20%E0%A6%B6%E0%A6%B0%E0%A7%80%E0%A6%AB,%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A6%86%E0%A6%A8%20%E0%A6%B6%E0%A6%B0%E0%A7%80%E0%A6%AB) |
| Namaz | **নামাজ** 16.37 | নামায 0.92; সালাত 1.06 | নামাজ ≈ 18x নামায, ≈ 15x সালাত | [Trends namaz spellings](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C,%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%AF,namaz,%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4,salah) |
| Surah | **সূরা** 35.33 | সুরা 19.75 | ≈ 1.8x | [Trends surah spellings](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE,%E0%A6%B8%E0%A7%81%E0%A6%B0%E0%A6%BE,surah,sura,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%87%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%A8) |
| Kahf | **সূরা কাহাফ** 1.33 | সূরা কাহফ 0.06 | ≈ 20x (52-week); ≈ 40x on Fridays in daily data (13.2 vs 0.3) | [Trends quran set B](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%AB%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%AB,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%AB,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%95%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE); [Trends TD daily](https://trends.google.com/trends/explore?date=today%203-m&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%9C%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%B0%20%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%AB,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%AB,%E0%A6%9C%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%B0%20%E0%A6%A6%E0%A6%BF%E0%A6%A8%E0%A7%87%E0%A6%B0%20%E0%A6%86%E0%A6%AE%E0%A6%B2) |
| Hadith | **হাদিস** 35.19 | হাদীস 5.33 | ≈ 6.6x | [Trends hadith spellings](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8,%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A7%80%E0%A6%B8,hadith,hadis) |
| Zikir | **জিকির** 2.63 | যিকির 0.10 | ≈ 26x | [Trends zikir set](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%9C%E0%A6%BF%E0%A6%95%E0%A6%BF%E0%A6%B0,%E0%A6%AF%E0%A6%BF%E0%A6%95%E0%A6%BF%E0%A6%B0,%E0%A6%A4%E0%A6%BE%E0%A6%B8%E0%A6%AC%E0%A6%BF%E0%A6%B9,%E0%A6%A6%E0%A6%B0%E0%A7%81%E0%A6%A6%20%E0%A6%B6%E0%A6%B0%E0%A7%80%E0%A6%AB) |
| Mulk | সূরা মূলক 25 ≈ সূরা মুলক 24 | | Parity (related-query index) | [Trends সূরা related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE) |
| Witr | বেতের 22 ≈ বিতর 20 | | Parity (related-query index under নামাজের নিয়ম) | [Trends নামাজের নিয়ম related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%AE) |
| Qurbani, wudu, timetable | কোরবানির over কুরবানির; অজু / ওযু both round to 0 as phrases; সময়সূচি / সময়সূচী both suggested | | Qualitative (autocomplete) | [Autocomplete অজুর নিয়ম](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=অজুর+নিয়ম) |
| Latin script | quran; surah 37.04 vs sura 20.00; namaz 17.96 vs salah 2.67; dua 9.58 vs doa 1.42, dowa 1.12, duya 0.44 (dowa and duya rising from 0 in 2021); hadis 6.79 ≈ hadith 6.58 | | | [Trends dua Latin](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE,dua,doa,duya,dowa) |

Banglish transliteration is chaotic: uccharon / ucharan / uccaron; anubad / onubad / torjoma; ortho / ortho soho; sorif / sharif; rijik / rizik / rizq; jikir / zikir / zikr / dhikr ([Autocomplete sura yasin bangla](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=bd&q=sura%20yasin%20bangla)). Typing দোয়া with the precomposed character or with the decomposed য + ় produces identical Trends series, so Google normalises Unicode. A site's own search has to do the same. The practical rule follows from the ratios: **use the popular spelling as the visible label** (দোয়া, নামাজ, সূরা, হাদিস, জিকির, কাহাফ) and treat the scholarly forms (দুআ, নামায, সালাত, হাদীস, যিকির) as search aliases. Search should tolerate spelling variants across Bangla script and transliteration variants across Banglish. [05](05-competitor-feature-analysis.md) shows that most incumbents fail at this.

## Script split: Latin wins surah names, Bangla wins duas

The two scripts do not split the same way across topics. For **surah names, Latin script leads**: "surah mulk" is about 7x "সূরা মুলক" on Trends, and Ahrefs puts surah mulk at >10,000 against >1,000 for সূরা মুলক ([Trends quran set A](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%87%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%A8%20%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%AE%E0%A7%81%E0%A6%B2%E0%A6%95,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%86%E0%A6%B0%20%E0%A6%B0%E0%A6%B9%E0%A6%AE%E0%A6%BE%E0%A6%A8,%E0%A6%86%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%A4%E0%A7%81%E0%A6%B2%20%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%B8%E0%A6%BF); [Ahrefs surah mulk](https://ahrefs.com/keyword-generator/?country=bd&input=surah%20mulk)). Ayatul Kursi is closer: ayatul kursi 0.29x against আয়াতুল কুরসি 0.20x, with both in the >10,000 bucket. For **duas, Bangla script leads**, with দোয়া about 2x Latin "dua". For the generic words the scripts are near parity and converging. Latin "surah" (37.04) is just ahead of সূরা (35.33), but it fell from 49.9 in 2023 to 36.4 in 2026 while সূরা held at 35–38. Latin "namaz" fell from 31.2 to 18.0 while নামাজ rose from 9.1 (2021) to 17.0 (2026) ([Trends namaz spellings](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C,%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%AF,namaz,%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A4,salah)). Latin "quran" (23.85) still about matches কুরআন and কোরআন combined (23.9), but it is the one falling. Banglish persists mainly for **times** ("namaz time dhaka", "iftar time today mirpur"), packages, baby names and captions. Of the 582 rows in the Namaz-to-Lifestyle scope, 498 are Bangla script, 34 Banglish, 26 English and 24 mixed. That split reflects the seeds chosen as much as demand.

The planning implication is that a Bangla-first site still needs **Latin-script slugs, titles and aliases for surah and ayah pages**, because that is where the largest measured volumes sit. Dua and Q&A pages can be Bangla-only in their visible text, provided search accepts Banglish input.

## Google demand fell 30–60% from 2023 to 2026, except a few Bangla terms

Comparing yearly Trends means in the same set, nearly every Quran, hadith and dua term declined between 2023 and 2026:

| Term | 2023 | 2026 | Change |
|---|---|---|---|
| নামাজের সময় (anchor) | 46.7 | 30.6 | −34% |
| আয়াতুল কুরসি | 14.3 | 6.1 | −57% |
| ayatul kursi | 20.3 | 8.7 | −57% |
| surah mulk | 11.9 | 6.4 | −46% |
| surah rahman | 7.3 | 3.7 | −49% |
| ইয়াসিন সূরা | 5.1 | 3.7 | −27% |
| সাইয়েদুল ইস্তেগফার | 4.7 | 1.7 | −64% |
| ঘুমানোর দোয়া | 1.9 | 0.9 | −53% |
| বুখারী শরীফ | 2.2 | 0.9 | −59% |
| quran bangla | 8.6 | 5.0 | −42% |
| **Flat or rising:** জিকির | 2.6 | 2.7 | +4% |
| hadis | 6.5 | 6.8 | +5% |
| বাংলা উচ্চারণ (generic "Bangla pronunciation") | 32.7 | 35.4 | +8% (21.0 in 2021) |
| নামাজ | 16.3 | 17.0 | +4% (9.1 in 2021) |

Source: ([Trends quran set C](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,surah%20yasin,surah%20mulk,ayatul%20kursi,surah%20rahman); [Trends hadith set](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8,%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A7%80%E0%A6%B8,hadith,hadis)). The 2026 mean covers January to early November and includes Ramadan, so the comparison is not biased against 2026. The seasonal pull also found the yearly peak of "নামাজের সময়" falling from 37 to 24 and the peak for "দোয়া" from 100 to 52 between 2023 and 2026 ([Trends T9](https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE,%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%95%20%E0%A6%A8%E0%A6%BE%E0%A6%AE,%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%AB)).

The cause is not measured. The most likely contributor is visible on the results page itself: **an AI-generated answer sat above the results on all 6 Google SERPs sampled**, and 5 of 6 showed a YouTube video block with view counts in the lakhs ([Google সূরা ইয়াসিন বাংলা উচ্চারণ](https://www.google.com/search?q=%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%87%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%A8%20%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%20%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A6%A3&gl=bd&hl=bn)). A simple "text of X" query is increasingly answered on the results page. Other plausible causes are migration to apps and YouTube, and phrasing drift toward Bangla script. **[Inferred]** The decline favours pages that offer something an AI summary cannot: synced audio, counters, routines, memorisation, verification and correction. Plain text pages are the least defensible.

## Noise filters: Dua Lipa, a university portal and Kolkata

Several head terms are unusable without a modifier or a filter:

| Noise source | Example | Evidence |
|---|---|---|
| Celebrity | "dua lipa" is the #3 related query for Latin "dua" (index 23) | [Trends dua related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=dua) |
| Government portal | "doa" completes to doa.teletalk.com.bd, a university-admission portal | [Autocomplete doa](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=bd&q=doa) |
| Everyday words | আমল → আমলকি (amla fruit); amol → AMOLED; সবর → সবরি কলা (a banana); মদ → মদিনা; জিন → জিনসেং (ginseng); sud → sudoku; হজ → হজম (digestion); দোআ → দোআঁশ মাটি (loam soil) | [Autocomplete আমল](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=আমল) |
| Films and names | "মায়ের মর্যাদা" (a mother's status) mixes hadith with a Bangla film of the same name; "আরাফার দিনের দোয়া" mixes with the personal name Arafat | [Autocomplete মায়ের মর্যাদা](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%B0%20%E0%A6%AE%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A6%E0%A6%BE) |
| India / West Bengal | "ফিতরা কত টাকা ২০২৬ কলকাতা" (fitra amount, Kolkata), "zakat calculator india", "ramadan time table 2027 mumbai/kolkata", "iftar dua in hindi/tamil"; Anandabazar (Kolkata) ranks for a BD dream query; FirstCry (India) ranks for girls' names | [Autocomplete ফিতরা কত টাকা](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=ফিতরা+কত+টাকা) |
| Pakistan, Gulf and others | "quran mp3 with urdu translation", "quran hifz karne ki dua", "tasbeeh counter price in pakistan", "tawbah dua in tamil / malayalam"; Turkish and Malay completions for "kaza namaz" and "যাকাত ফিতরা" | [Autocomplete tawbah dua](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=bd&q=tawbah%20dua) |
| Homework and institutions | হাদিস কি, হজ কি, যাকাত কি; Quran-board results; বিদায় হজ রচনা ৫ম শ্রেণি (an essay for class 5) | [Trends হজ related](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m&q=%E0%A6%B9%E0%A6%9C) |

These rows are flagged in [data/keyword-database.csv](data/keyword-database.csv) and are not counted as BD-specific evidence. Homework queries are different. They are real Bangladeshi demand from students and madrasa learners. They are a distinct audience segment, not daily practice.

## Top 50 Islamic search topics in Bangladesh

**How this list was ranked.** Topics are clusters of related queries, ordered by the strongest available signal for any query in the cluster. Signals are ordered as follows: Trends ratio against the prayer-time anchor first (52-week mean, or 5-year mean against the anchor median where marked), then the Ahrefs bucket, then observed evidence only. To merge the two measured types, the analyst crosswalk above treats >10,000 as roughly ≥0.05x and >1,000 as roughly 0.01–0.05x. **The ranking therefore mixes evidence types.** It is an ordinal guide, not a volume estimate. Seasonal topics are ranked by their 52-week mean, which understates how sharp their peaks are; [08](08-seasonal-search-trends.md) covers the peaks.

| Rank | Topic | Example queries (gloss) | Evidence basis | Strongest signal |
|---|---|---|---|---|
| 1 | Dua (general and situational) | দোয়া; dua for; দোয়া কুনুত | Trends + Ahrefs | 2.50x anchor-median (5-yr mean); 17,365 Ahrefs ideas |
| 2 | Dream interpretation | স্বপ্নে মাছ দেখলে কি হয় (seeing fish in a dream) | Trends | 1.32x, rising |
| 3 | Hadith (head term, short and shareable hadith) | হাদিস; ছোট হাদিস (short hadith) | Trends + Ahrefs | 1.13x; >1,000 |
| 4 | Prayer times (Bangla and Banglish, by district) | নামাজের সময়; namaz time; নামাজের সময়সূচি ঢাকা | Trends | 1.00x + 1.06x + 0.23x |
| 5 | Quran (general, translation, sharif) | কুরআন; quran; কোরআন শরীফ | Trends + Ahrefs | 0.62x anchor-median; >1,000 |
| 6 | Islamic baby names | ইসলামিক নাম মেয়েদের (girls' Islamic names) | Trends | 0.52x |
| 7 | Sehri and iftar times | সেহরির শেষ সময়; ইফতারের সময় | Trends | 0.34x / 0.33x (Ramadan only) |
| 8 | Halal/haram/permissibility rulings | … কি জায়েজ; … হালাল নাকি হারাম | Trends (generic words) | 0.30–0.31x |
| 9 | Ayatul Kursi | ayatul kursi; আয়াতুল কুরসি বাংলা উচ্চারণ | Ahrefs + Trends | >10,000; 0.29x |
| 10 | How to pray (rules of salah) | নামাজের নিয়ম; namaz porar niyom | Trends | 0.26x |
| 11 | Divorce (talaq) | তালাক; রাগের মাথায় তালাক (divorce in anger) | Trends | 0.23x |
| 12 | Surah Mulk | surah mulk; সূরা মুলক বাংলা উচ্চারণ | Ahrefs + Trends | >10,000; 0.21x |
| 13 | Salah niyat | নামাজের নিয়ত আরবি বাংলা | Trends | 0.19x |
| 14 | Shab-e-Barat | শবে বরাত ২০২৭ কত তারিখে বাংলাদেশ | Trends | 0.18x (peak 6.3x anchor-median) |
| 15 | Tahajjud | তাহাজ্জুদ নামাজের নিয়ম | Trends | 0.16x |
| 16 | Zakat | যাকাত; কত টাকা হলে যাকাত দিতে হবে ২০২৬ | Trends | 0.16x; rising Breakout |
| 17 | Islamic captions, status and pictures | ইসলামিক ক্যাপশন বাংলা | Trends | 0.13x + 0.078x + 0.061x |
| 18 | Surah Rahman | surah rahman; সূরা আর রহমান | Ahrefs + Trends | >10,000; 0.12x |
| 19 | Surah Yasin | ইয়াসিন সূরা; সূরা ইয়াসিন বাংলা উচ্চারণ | Trends + Ahrefs | 0.12x; many >1,000 variants |
| 20 | Surah Kahf (Friday) | surah kahf; সূরা কাহাফ | Ahrefs + Trends | >10,000; Friday 25–45x |
| 21 | Dua Qunut | দোয়া কুনুত বাংলা উচ্চারণ | Ahrefs + Trends | >10,000; 0.080x |
| 22 | Ramadan duas (iftar, tarawih, sehri) | ইফতারের দোয়া; তারাবির নামাজের দোয়া | Ahrefs | >10,000 |
| 23 | Istighfar and tawbah | সাইয়েদুল ইস্তেগফার; তওবা করার দোয়া | Ahrefs + Trends | >10,000; 0.05x / 0.059x |
| 24 | Fitra | ফিতরা কত টাকা ২০২৬ ইসলামিক ফাউন্ডেশন | Trends | 0.083x |
| 25 | Zikir (including Sufi-order zikir) | জিকির; আটরশি জিকির | Ahrefs + Trends | >1,000; 0.08x |
| 26 | Tafsir | তাফসীর ইবনে কাসীর | Trends + Ahrefs | 0.08x; >100 |
| 27 | Aqiqah | আকিকা দেওয়ার নিয়ম | Trends | 0.076x |
| 28 | Fasting rules and niyat | রোজার নিয়ত; রোজা ভঙ্গের কারণ | Trends | 0.071x; 0.015x |
| 29 | Salah tasbih and Salatut Tasbih | রুকুর তাসবিহ; সালাতুল তাসবিহ নামাজের নিয়ম | Ahrefs + Trends | >1,000; 0.06x |
| 30 | Kalima | কালেমা | Trends | 0.059x |
| 31 | Durood | দরুদ শরীফ | Trends | 0.045x |
| 32 | Qaza (missed) prayers | কাজা নামাজের নিয়ম; উমরি কাজা | Trends | 0.044x |
| 33 | Qurbani and Eid-ul-Adha | কোরবানির ঈদ ২০২৭; কোরবানির গরুর বয়স (minimum cattle age) | Trends | 0.043x |
| 34 | Ramadan calendar | রমজানের ক্যালেন্ডার ২০২৭; ramadan calendar 2027 bangladesh | Trends + observed | 0.042x |
| 35 | Laylatul Qadr | শবে কদর; শবে কদরের নামাজ কত রাকাত | Trends | 0.040x |
| 36 | Jumu'ah (salah, khutbah, greetings) | জুমার নামাজ কত রাকাত; জুম্মা মোবারক ক্যাপশন | Trends | 0.034x / 0.036x; Friday 40–60x |
| 37 | Names of Allah | আল্লাহর ৯৯ নাম বাংলা অর্থ সহ | Trends | 0.030x |
| 38 | Sleep and waking duas | ঘুমানোর দোয়া; ঘুম থেকে উঠার দোয়া | Ahrefs + Trends | >1,000; 0.03x |
| 39 | Morning and evening adhkar | সকাল সন্ধ্যার দোয়া ও জিকির | Ahrefs | >1,000 |
| 40 | Death rites and janaza | জানাজার নামাজের দোয়া; মৃত ব্যক্তির জন্য দোয়া | Ahrefs + Trends | >1,000; 0.019x, +130% |
| 41 | Dua for parents | রাব্বির হামহুমা কামা রাব্বায়ানি সাগিরা | Ahrefs + Trends | >1,000; 0.013x |
| 42 | Rizq and debt duas | রিজিক বৃদ্ধির দোয়া; ঋণ মুক্তির দোয়া | Ahrefs | >1,000 |
| 43 | Protection, evil eye, ruqyah | বদ নজরের দোয়া; রুকইয়াহ | Ahrefs + Trends | >1,000; ruqyah 0.005x |
| 44 | Women's fiqh (hayez, ghusl) | হায়েজ অবস্থায় কুরআন পড়ার বিধান | Trends | 0.016x |
| 45 | Short surahs and bundles | তিন কুল; চার কুল; ছোট সূরা | Trends rising + observed | তিন কুল সূরা +100% |
| 46 | Hadith collections (Bukhari, Muslim) | বুখারী শরীফ; সহিহ মুসলিম ১১৬২ | Ahrefs + Trends | >100; 0.03x / 0.005x |
| 47 | Hajj and Umrah (packages, registration) | হজ প্যাকেজ 2027 বাংলাদেশ মূল্য | Trends (Latin hajj) + observed | hajj 0.25x anchor-median mean; package terms ≈ 0 |
| 48 | Islamic finance rulings | ব্যাংকে চাকরি হালাল না হারাম; crypto হালাল নাকি হারাম | Observed + SERP | No Trends value |
| 49 | Inheritance (faraid) | ফারায়েজ ক্যালকুলেটর; faraiz calculator | Trends + observed | 0.004x |
| 50 | Hifz and Quran learning | কুরআন হিফজ করার সহজ উপায়; নূরানী কায়দা pdf | Observed + SERP | No Trends or Ahrefs value |

Topics 45–50 are ranked low because their measured signal is small or missing. That is not the same as unimportant. Several of them (finance, faraid, hifz) reappear near the top of the opportunity ranking in [07](07-content-and-feature-gaps.md), because results pages serve them poorly.

## Top 100 actual Bangla, English and Banglish queries

**How these 100 were chosen and ordered.** All 100 are real rows in [data/keyword-database.csv](data/keyword-database.csv), as typed. Positions 1–40 have a Trends ratio of at least 0.10x the anchor or an Ahrefs bucket above 10,000. Positions 41–89 have 0.03–0.10x or more than 1,000. Positions 90–92 have 0.01–0.03x. Within each band, rows with a Trends ratio come first, in descending order, followed by Ahrefs-only rows. Positions 93–100 are the strongest **observed-only** suggestions. They were added deliberately to represent Banglish and English utility queries (district times, Ramadan calendar, Hajj registration, calculators), which the measured sources cover poorly. Where a row's CSV label is `serp_observation` but it also carries a Trends ratio, the ratio was used to place it. **The ranking mixes evidence types and is not a volume ranking.** The final list has 74 Bangla-script, 16 English and 10 Banglish queries. By evidence type it has 48 Trends rows, 41 Ahrefs rows, 8 observed suggestions and 3 SERP rows.

| # | Query | Gloss | Language | Category | Evidence type | Demand signal |
|---|---|---|---|---|---|---|
| 1 | দোয়া | dua | Bangla | C. Dua & Zikir | trends_relative | Trends 5-yr mean 2.50x anchor-median (largest year-round term); 52-wk about 2.4x anchor (earlier research, Nov 4 2026); 24x the spelling দুয়া |
| 2 | স্বপ্নে | "in a dream..." (what it means) | Bangla | X. New topics | trends_relative | Trends 1.32x anchor; peak week Sep 27-Oct 3 2026; rising |
| 3 | হাদিস | hadith | Bangla | B. Hadith | measured_volume | Trends 1.13x anchor; Ahrefs >1,000 (KD Medium); top related query is হাদিস কি (homework) |
| 4 | namaz time | (as typed) | Banglish | D. Namaz | trends_relative | Trends 1.06x anchor |
| 5 | নামাজের সময় | prayer time | Bangla | D. Namaz | trends_relative | Trends 1.00x (the anchor); never zero |
| 6 | কুরআন | Quran | Bangla | A. Quran | measured_volume | Ahrefs >1,000 (KD Medium); Trends 5-yr mean 0.62x anchor-median |
| 7 | quran | (as typed) | English | A. Quran | trends_relative | Trends about 1.9x কুরআন in the same set (23.85 vs 12.77); 34.8 (2022) to 23.6 (2026) |
| 8 | dua | (as typed) | English | C. Dua & Zikir | trends_relative | Trends about 0.51x দোয়া in the same set; 1.2x anchor in earlier research (Nov 4 2026) |
| 9 | ইসলামিক নাম | Islamic (baby) names | Bangla | H. Lifestyle | trends_relative | Trends 0.52x anchor; mild winter peak |
| 10 | সেহরির শেষ সময় | sehri end time | Bangla | F. Ramadan/Hajj | trends_relative | Trends 0.34x anchor (52-wk mean, almost all of it in Ramadan) |
| 11 | ইফতারের সময় | iftar time | Bangla | F. Ramadan/Hajj | trends_relative | Trends 0.33x anchor (Ramadan only) |
| 12 | হারাম | haram | Bangla | E. Q&A | trends_relative | Trends 0.31x anchor (includes non-religious uses) |
| 13 | জায়েজ | permissible (jayez) | Bangla | E. Q&A | trends_relative | Trends 0.30x anchor; peak week Mar 15-21 2026 |
| 14 | ayatul kursi | (as typed) | English | A. Quran | measured_volume | Ahrefs >10,000 (Easy); Trends 0.29x anchor |
| 15 | নামাজের নিয়ম | rules of salah / how to pray | Bangla | D. Namaz | trends_relative | Trends 0.26x anchor |
| 16 | নামাজের সময়সূচি | prayer timetable | Bangla | D. Namaz | trends_relative | Trends 0.23x anchor |
| 17 | তালাক | divorce (talaq) | Bangla | E. Q&A | trends_relative | Trends 0.23x anchor |
| 18 | hadis | (as typed) | Banglish | B. Hadith | trends_relative | Trends 0.22x anchor; flat 2023-2026 |
| 19 | surah mulk | (as typed) | English | A. Quran | measured_volume | Ahrefs >10,000 (Easy); Trends 0.21x anchor (about 7x সূরা মুলক) |
| 20 | hadith | (as typed) | English | B. Hadith | trends_relative | Trends 0.21x anchor |
| 21 | আয়াতুল কুরসি | Ayatul Kursi | Bangla | A. Quran | measured_volume | Ahrefs >10,000 (Easy); Trends 0.20x anchor; -57% 2023-2026 |
| 22 | হালাল | halal | Bangla | E. Q&A | trends_relative | Trends 0.20x anchor (includes generic uses) |
| 23 | নামাজের নিয়ত আরবি বাংলা | salah niyat in Arabic and Bangla | Bangla | D. Namaz | trends_relative | Trends 0.19x anchor for the head term নামাজের নিয়ত |
| 24 | শবে বরাত ২০২৭ কত তারিখে বাংলাদেশ | Shab-e-Barat 2027 date in Bangladesh | Bangla | F. Ramadan/Hajj | trends_relative | Trends 0.18x anchor for শবে বরাত; autocomplete adds the 2027 date |
| 25 | হাদীস | hadith (long-i spelling) | Bangla | B. Hadith | trends_relative | Trends 0.17x anchor (হাদিস is about 6.6x) |
| 26 | quran bangla | (as typed) | English | A. Quran | measured_volume | Trends 0.16x anchor, but Ahrefs only >100 (sources disagree) |
| 27 | তাহাজ্জুদ | tahajjud | Bangla | D. Namaz | trends_relative | Trends 0.16x anchor |
| 28 | যাকাত | zakat | Bangla | E. Q&A | trends_relative | Trends 0.16x anchor; peaks in Ramadan weeks 1-3 |
| 29 | ইসলামিক ক্যাপশন | Islamic captions | Bangla | H. Lifestyle | serp_observation | Trends 0.13x anchor |
| 30 | surah rahman | (as typed) | English | A. Quran | measured_volume | Ahrefs >10,000 (Easy); Trends 0.12x anchor |
| 31 | ইয়াসিন সূরা | Surah Yasin (reversed word order) | Bangla | A. Quran | trends_relative | Trends 0.12x anchor; 5-yr peak in Shab-e-Barat week 2023 |
| 32 | dua for | (as typed) | English | C. Dua & Zikir | trends_relative | Trends 0.12x anchor |
| 33 | surah mulk bangla | (as typed) | Banglish | A. Quran | measured_volume | Ahrefs >10,000 (Easy) |
| 34 | ayatul kursi bangla | (as typed) | Banglish | A. Quran | measured_volume | Ahrefs >10,000 (Easy) |
| 35 | আয়াতুল কুরসি বাংলা উচ্চারণ | Ayatul Kursi Bangla pronunciation | Bangla | A. Quran | measured_volume | Ahrefs >10,000 (Easy) |
| 36 | surah kahf | (as typed) | English | A. Quran | measured_volume | Ahrefs >10,000 (Easy); Friday-driven |
| 37 | দোয়া কুনুত | Dua Qunut | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >10,000 (Easy); Trends 0.080x anchor |
| 38 | সাইয়েদুল ইস্তেগফার | Sayyidul Istighfar | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >10,000 (Easy); Trends 0.05x anchor |
| 39 | ইফতারের দোয়া | iftar dua | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >10,000 (Easy); Trends 0.058x anchor; Ramadan |
| 40 | তারাবির নামাজের দোয়া | tarawih dua | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >10,000 (Easy); Ramadan |
| 41 | ফিতরা | fitra | Bangla | E. Q&A | trends_relative | Trends 0.083x anchor; peaks in the last 10 days of Ramadan |
| 42 | জিকির | zikir | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000 (Easy); Trends 0.08x anchor, flat 2023-2026 |
| 43 | তাফসীর | tafsir | Bangla | A. Quran | trends_relative | Trends 0.08x anchor |
| 44 | ইসলামিক স্ট্যাটাস | Islamic status (posts) | Bangla | H. Lifestyle | trends_relative | Trends 0.078x anchor; declining |
| 45 | আকিকা | aqiqah | Bangla | X. New topics | trends_relative | Trends 0.076x anchor; peak just before Eid-ul-Adha |
| 46 | রোজার নিয়ত | fasting niyat | Bangla | F. Ramadan/Hajj | serp_observation | Trends 0.071x anchor |
| 47 | ইসলামিক পিক | Islamic pictures | Bangla | H. Lifestyle | trends_relative | Trends 0.061x anchor |
| 48 | surah yasin | (as typed) | English | A. Quran | measured_volume | Ahrefs >1,000 (KD Medium); Trends 0.06x anchor |
| 49 | তাসবিহ | tasbih | Bangla | C. Dua & Zikir | measured_volume | Trends 0.06x anchor but Ahrefs >100; mostly means salah tasbih |
| 50 | কালেমা | kalima | Bangla | G. Learning | trends_relative | Trends 0.059x anchor |
| 51 | তওবা | tawbah (repentance) | Bangla | H. Lifestyle | trends_relative | Trends 0.059x anchor |
| 52 | সূরা আর রহমান | Surah Ar-Rahman | Bangla | A. Quran | trends_relative | Trends 0.05x anchor |
| 53 | সূরা ফাতিহা | Surah Al-Fatiha | Bangla | A. Quran | trends_relative | Trends 0.05x anchor |
| 54 | দরুদ শরীফ | durood sharif | Bangla | C. Dua & Zikir | trends_relative | Trends 0.045x anchor |
| 55 | কাজা নামাজ | qaza (missed) prayer | Bangla | D. Namaz | trends_relative | Trends 0.044x anchor |
| 56 | কুরবানির ঈদ ২০২৭ কত তারিখে | Qurbani Eid 2027 date | Bangla | F. Ramadan/Hajj | trends_relative | Trends 0.043x anchor for কোরবানির ঈদ |
| 57 | রমজানের ক্যালেন্ডার | Ramadan calendar | Bangla | F. Ramadan/Hajj | trends_relative | Trends 0.042x anchor |
| 58 | সূরা কাহাফ | Surah Kahf | Bangla | A. Quran | trends_relative | Trends 0.04x anchor; Friday 25-45x other weekdays |
| 59 | সূরা ওয়াকিয়া | Surah Waqiah | Bangla | A. Quran | trends_relative | Trends 0.04x anchor; flat |
| 60 | শবে কদর | Shab-e-Qadr | Bangla | F. Ramadan/Hajj | trends_relative | Trends 0.040x anchor |
| 61 | জুম্মা মোবারক ক্যাপশন | Jumma Mubarak caption | Bangla | H. Lifestyle | trends_relative | Trends 0.036x anchor for জুম্মা মোবারক |
| 62 | ইসলামিক উক্তি | Islamic quotes | Bangla | H. Lifestyle | trends_relative | Trends 0.035x anchor |
| 63 | জুমার নামাজ | Jumu'ah prayer | Bangla | D. Namaz | trends_relative | Trends 0.034x anchor; Friday 40-60x other weekdays |
| 64 | ফিতরা কত টাকা ২০২৬ ইসলামিক ফাউন্ডেশন | fitra amount 2026, Islamic Foundation | Bangla | E. Q&A | trends_relative | Trends 0.033x anchor for ফিতরা কত টাকা |
| 65 | সূরা মুলক | Surah Mulk | Bangla | A. Quran | measured_volume | Ahrefs >1,000 (Easy); Trends 0.03x anchor |
| 66 | ঘুমানোর দোয়া | dua before sleeping | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000 (Easy); Trends 0.03x anchor |
| 67 | আল্লাহর ৯৯ নাম বাংলা অর্থ সহ | 99 names of Allah with Bangla meaning | Bangla | G. Learning | trends_relative | Trends 0.030x anchor for আল্লাহর ৯৯ নাম |
| 68 | স্বপ্নে সাপ দেখলে কি হয় | what seeing a snake in a dream means | Bangla | X. New topics | serp_observation | Trends 0.030x anchor |
| 69 | সূরা ইয়াসিন বাংলা উচ্চারণ | Surah Yasin Bangla pronunciation | Bangla | A. Quran | measured_volume | Ahrefs >1,000 (Easy) |
| 70 | surah yasin bangla | (as typed) | Banglish | A. Quran | measured_volume | Ahrefs >1,000 (Easy) |
| 71 | সূরা মুলক বাংলা উচ্চারণ | Surah Mulk Bangla pronunciation | Bangla | A. Quran | measured_volume | Ahrefs >1,000 (Easy) |
| 72 | surah kahf first 10 ayat | (as typed) | English | A. Quran | measured_volume | Ahrefs >1,000 (Easy) |
| 73 | surah rahman bangla | (as typed) | Banglish | A. Quran | measured_volume | Ahrefs >1,000 (Easy) |
| 74 | ayatul kursi bangla uccharon | (as typed) | Banglish | A. Quran | measured_volume | Ahrefs >1,000 (Easy) |
| 75 | সকাল সন্ধ্যার দোয়া ও জিকির | morning and evening dua and zikir | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000 (Easy) |
| 76 | দোয়া মাসুরা | Dua Masura | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000 (Easy) |
| 77 | দোয়া ইউনুস | Dua Yunus | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000 (Easy); Trends 0.02x anchor |
| 78 | রাব্বির হামহুমা কামা রাব্বায়ানি সাগিরা | dua for parents (17:24) | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000 (Easy); Trends 0.013x anchor |
| 79 | জানাজার নামাজের দোয়া | janaza prayer dua | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000 (Easy) |
| 80 | মৃত ব্যক্তির জন্য দোয়া | dua for the deceased | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000 |
| 81 | ঘুম থেকে উঠার দোয়া | dua on waking up | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000 (Easy); Latin form +70% (Trends rising) |
| 82 | বিপদ থেকে মুক্তির দোয়া | dua for relief from danger | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000 |
| 83 | রিজিক বৃদ্ধির দোয়া | dua for more rizq | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000 (Easy); Trends exact phrase 0.001x (sources disagree) |
| 84 | ইস্তেখারার দোয়া | istikhara dua | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000 |
| 85 | বদ নজরের দোয়া | dua against the evil eye | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000; Latin form +90% (Trends rising) |
| 86 | শবে বরাতের ফজিলত সম্পর্কে হাদিস | hadith on the virtue of Shab-e-Barat | Bangla | B. Hadith | measured_volume | Ahrefs >1,000 (Easy) |
| 87 | ছোট হাদিস | short hadith | Bangla | B. Hadith | measured_volume | Ahrefs >1,000 (Easy) |
| 88 | সালাতুল তাসবিহ নামাজের নিয়ম | how to pray Salatut Tasbih | Bangla | C. Dua & Zikir | measured_volume | Ahrefs >1,000 (Easy); +60% (Trends rising) |
| 89 | surah yasin pdf | (as typed) | English | A. Quran | measured_volume | Ahrefs >1,000 (KD Hard) |
| 90 | জানাজার নামাজের নিয়ম ও দোয়া | janaza prayer method and dua | Bangla | D. Namaz | trends_relative | Trends 0.019x anchor; +130% rising |
| 91 | হায়েজ | menstruation (hayez) | Bangla | E. Q&A | trends_relative | Trends 0.016x anchor |
| 92 | রোজা ভঙ্গের কারণ | what breaks the fast | Bangla | E. Q&A | trends_relative | Trends 0.015x anchor; Ramadan only |
| 93 | namaz time dhaka | (as typed) | Banglish | D. Namaz | observed_suggestion | Observed (autocomplete gl=bd; city-level prayer-time pattern) |
| 94 | নামাজের নিষিদ্ধ সময় কয়টা থেকে কয়টা পর্যন্ত ২০২৬ | forbidden prayer times, from when to when, 2026 | Bangla | D. Namaz | observed_suggestion | Observed (also in earlier research, Nov 4 2026) |
| 95 | iftar time today dhaka | (as typed) | English | F. Ramadan/Hajj | observed_suggestion | Observed; Ramadan-only utility |
| 96 | ramadan calendar 2027 bangladesh | (as typed) | English | F. Ramadan/Hajj | observed_suggestion | Observed; "ramadan calendar" (Latin) peaks at 5.1x anchor-median in Ramadan week 1 |
| 97 | hajj registration 2027 bangladesh last date | (as typed) | English | F. Ramadan/Hajj | observed_suggestion | Observed; Trends for registration terms rounds to about 0 |
| 98 | zakat calculator on gold in bangladesh | (as typed) | English | F. Ramadan/Hajj | observed_suggestion | Observed; related Trends query "যাকাত ক্যালকুলেটর বাংলাদেশ" +120% |
| 99 | faraiz calculator | (as typed) | Banglish | E. Q&A | observed_suggestion | Observed; ফারায়েজ is 0.004x anchor |
| 100 | namaz porar niyom step by step | (as typed) | Banglish | D. Namaz | observed_suggestion | Observed |

## Confidence and limitations

Confidence is **high** for the existence and shape of the queries, the spelling ratios (each measured within a single Trends set), the dominance of Bangla script for dua, and the 2023–2026 decline. The decline appears consistently across more than ten terms and on two independent pulls. Confidence is **medium** for the head-term rankings. Trends ratios are exact-phrase only, so they undercount terms with many spellings and word orders (ইয়াসিন সূরা vs সূরা ইয়াসিন). Generic words such as হারাম and জায়েজ include non-religious use. Confidence is **low** for any absolute size. There are no Google Keyword Planner, Semrush or exact Ahrefs volumes. Ahrefs' free buckets cover only Quran, hadith and dua, and its KD values cover only about ten rows per seed. Any monthly number other than an Ahrefs bucket would be fabricated.

The two kinds of measurement agree only loosely (17 of 25 overlapping terms land in the same class), so the cross-category ranking is an ordinal judgement. Autocomplete was captured on one day, 5 Nov 2026, from one BD IP. That is the off-season, so event-week phrasing ("আজকের", today's) is under-represented. The Google SERP samples are small and were partly personalised: 6 Quran SERPs before a CAPTCHA, and 34 Q&A SERPs from a signed-in browser. Bing served as the proxy for hadith and dua. No People-Also-Ask data was captured for Quran, hadith or dua. Trends sets for Hajj/Umrah packages and gendered name terms failed with HTTP 429. Facebook, YouTube and TikTok search, where captions, waz, gojol and ruqyah demand probably concentrate, were not measured. The merged CSV contains 14 near-duplicate keywords from the two collection streams; দোয়া, for example, appears once as a Trends row and once as a suggestion. One conflict is unresolved. Earlier research (Nov 4 2026) cited an Ittefaq summary of a Google Year in Search 2025 list for Bangladesh with no Islamic item ([Ittefaq](https://www.ittefaq.com.bd/768302/)). The 5 Nov search found no Bangladesh edition at all ([Geo TV, Pakistan 2025](https://www.geo.tv/latest/638089)). Neither finding changes the rankings above. Methods are detailed in [10-research-methodology-and-sources.md](10-research-methodology-and-sources.md).
