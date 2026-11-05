# Bangladeshi users demand local time, sources and dignity

**Key findings**

- **These needs have Strong evidence**, meaning more than one evidence type points the same way:
  - Bangla-first content.
  - Arabic with **Bangla-script pronunciation (উচ্চারণ)**.
  - **District prayer and Sehri/Iftar times that match the Islamic Foundation (IF)**.
  - A **Hijri date that follows Bangladesh's moon sighting**.
  - Handling of **local spelling variants and Banglish**.
  - **Free access to sacred text**.
  - **Visible references**.
  - **No ads around sacred content**, which users frame as a religious wrong, not merely an annoyance.
- **In the largest corpus collected (11,671 Google Play reviews of 22 Islamic apps on the Bangladesh store), ads are the top complaint.** 551 reviews mention ads, 349 of them rated 3★ or lower. Paywalls come next (185 mentions, 116 at 3★ or lower).
- **Users report text errors verse by verse and treat them as trust failures.** Pronunciation is wanted, but users also catch every transliteration slip.
- **Moderate evidence** supports low-bandwidth design, offline use, large fonts and simple UI for older readers, a Bangla calendar date, madhhab-aware prayer times (which need careful handling), scholar Q&A, and daily trackers.
- **Weak or no evidence** was found for several assumed needs. These are summarised in [the section on assumed needs](#assumed-needs-the-evidence-did-not-support):
  - Women-specific feature requests (only a gender gap in access is documented).
  - Colloquial rather than archaic Bangla (one high-vote review).
  - Upazila-level times (two reviews).
  - Shared family phones (two reviews).
- **Not supported:** Bijoy/Unicode font rendering as a current problem; demand for accounts or login; authenticity-checking as a search-traffic driver; and a madhhab picker as something users welcome.
- **Caveat on the evidence base.** Almost all user voice comes from **app reviews, not website users**. Play cannot confirm a reviewer is in Bangladesh, so we lean on Bangla-script reviews. Reddit, Facebook groups and YouTube comments were not retrievable.

---

## Evidence base and how needs are rated

The main user-voice source is a direct scrape of Google Play's Bangladesh storefront (`country="bd"`, Bangla and English, newest and most-relevant sorts), run with the open-source `google-play-scraper` library on 2026-11-05. It yielded **11,671 reviews across 22 apps**. **3,611** of them contain Bangla script and **1,054** are rated 1–2★. The raw file is at `docs/research/data/raw/play-reviews/reviews.json` (see [report 10](10-research-methodology-and-sources.md)). Theme counts come from keyword matching and are **indicative only**. The sample is not random; it consists of the newest and most "relevant" reviews.

Each quote below is a verbatim Play review with its app, date and star rating. Play has no per-review permalinks, so each link goes to the app's Bangladesh-store listing. English glosses are translations. A few review dates are older (2019–2021), but are kept where they carry high helpful-vote counts. Secondary sources are news, industry and academic reports. Search-demand figures come from [keyword research](03-bangladesh-keyword-research.md).

**Rating scale.**

- **Strong:** at least two independent evidence types agree, for example measured search demand plus several high-vote reviews, or a documented factual divergence plus user complaints.
- **Moderate:** one evidence type with several data points, or secondary data not tied to Islamic-product use.
- **Weak:** one or two isolated quotes, or an indirect inference.
- **Not evidenced:** we searched and found nothing, or found contrary evidence.

| # | Candidate requirement | Rating | Strongest evidence |
|---|---|---|---|
| 1 | Bangla-first content and UI | **Strong** | Bangla-first sites lead traffic; 498 of 582 namaz/Q&A keyword rows are Bangla script; reviewers who "cannot read Arabic" |
| 2 | Simple, colloquial Bangla | **Weak** | One review (161 helpful votes) asking for colloquial instead of sadhu (formal literary) Bangla; contested word choices |
| 3 | Arabic + Bangla-script pronunciation | **Strong** | Ahrefs >10K/month for "আয়াতুল কুরসি বাংলা উচ্চারণ" (Ayatul Kursi Bangla pronunciation); Trends "বাংলা উচ্চারণ" rising; many reviews, one with 231 helpful votes |
| 4a | District prayer times matching IF | **Strong** | Reviews with 188 and 196 helpful votes; "follow IF times"; "3–5 minutes off"; head keywords are prayer-time queries |
| 4b | Upazila-level times | **Weak** | One request plus one missing-area complaint |
| 5 | Hijri date per Bangladesh moon sighting | **Strong** | Bangladesh one day behind Saudi Arabia for both Eids in 2026; sites differ by a day; reviews on "wrong Arabic date" |
| 6 | Sehri/Iftar by district | **Strong** | Trends: সেহরির শেষ সময় ("end of sehri time") 0.34× and ইফতারের সময় ("iftar time") 0.33× of the prayer-time anchor; 13-minute spread across divisions; a reviewer who missed suhoor |
| 7 | Local terminology and spelling variants | **Strong** | দোয়া is ~24× দুয়া (two spellings of "dua"); নামাজ is ~18× নামায; quran.com's search fails on নামাজ |
| 8a | Family context: shared phones | **Weak** | Two "parent's phone" reviews |
| 8b | Family context: life events (names, aqiqah) | **Moderate** | ইসলামিক নাম ("Islamic names") 0.52×; মেয়েদের ইসলামিক নাম ("Islamic names for girls") 19K/month |
| 9 | Low bandwidth / data cost | **Moderate** | Data costs BDT 25–35/GB, median mobile ~37 Mbps; 175 reviews on offline/data/size, mostly about app size |
| 10a | Free access to sacred text | **Strong** | 185 paywall mentions (116 at ≤3★); "ধর্ম বিক্রি করে খাওয়া বন্ধ করুন" ("stop selling religion") |
| 10b | Donation model accepted | **Moderate** | Reviews proposing donation instead of ads; a request to ease paying from Bangladesh; complaints about "forced donation" nags |
| 11 | Offline use | **Moderate** (apps) / **Not evidenced** (web) | Praise for "নেট ছাড়া" ("without internet"); complaints when offline mode fails |
| 12 | Simple UI and older users | **Moderate** | Font-size and "elderly reader" reviews; "too complicated now"; a GPS-only complaint with 146 helpful votes |
| 13 | Women users | **Weak** | Gender gap (40% vs 24% mobile internet use) is secondary data; only ~61 women-related reviews, many false positives; women's fiqh queries visible in search |
| 14 | Trusted references | **Strong** (for trust) / **Not evidenced** (as a traffic driver) | "সনদ তেমনই সহীহ" ("the chains of narration are just as sahih"); "authentic references"; grading complaints; but জাল হাদিস ("fake hadith") <100 searches/month |
| 15 | Madhhab sensitivity | **Moderate** | Hanafi users alarmed by mismatched times; Ahl-e-Hadith users asking for their own Asr; others rejecting the choice; only 8 explicit reviews |
| 16 | Ads as religious offence | **Strong** | 551 ad mentions; "নাজায়েজ" ("impermissible") and "অশালীন" ("indecent"); 1–2★ share is 41% for ad-heavy Wemu vs 2–5% for local ad-light apps |
| 17a | Font size | **Moderate** | Most of the 76 font-related reviews concern size |
| 17b | Font rendering (Bijoy/Unicode) | **Not evidenced** | No 2017–2026 review complaining of broken conjuncts or Bijoy garbling |
| 18 | Bangla calendar date (বঙ্গাব্দ, Bangla year) | **Moderate** | Four apps' reviewers asking for it or correcting it; sites differ by a day |

## Local time is a religious obligation, not a convenience

**District times that match the Islamic Foundation (Strong).** Bangladeshi users treat IF's published schedule as the standard, and they notice deviations of a few minutes.

- An Ibadah review with 188 helpful votes (2020-04-10, 5★) noted that "in Bangladesh there is fixed namaz schedule for each div[ision]".
- Another with 196 helpful votes (2020-10-31, 5★) praised "separate timings for all the districts".
- A 2★ review (2020-04-25) was blunt: "আপনারা দিয়েছেন বাংলাদেশের সময় অথচ ইসলামিক ফাউন্ডেশন এর সময় অনুযায়ী না… দয়া করে নামাযের সময় টা ইসলামিক ফাউন্ডেশন এর সময়,অনুযায়ী করে দিন" [You've given Bangladesh times but not per the Islamic Foundation… please follow Islamic Foundation times].
- A 2026-10-10 review said "প্রাই অ্যাপে ৩/৫ মিনিট কম বেশি দেওয়া হয়… ইফতারের জন্য তত সঠিক টাইম খুব জরুরী" [most apps are 3–5 minutes off… accurate time is very important for iftar].

([Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)). Search demand points the same way. The top Bangladesh keywords for muslimbangla.com are all prayer-time queries: **নামাজের সময়সূচি** ("prayer schedule", 37K/month) and **ফজরের নামাজের সময়** ("Fajr prayer time", 31K). Queries also carry district suffixes, such as **আজকের নামাজের সময়সূচী ঢাকা** ("today's prayer schedule Dhaka", 7.3K) ([Ahrefs muslimbangla.com](https://ahrefstop.com/websites/muslimbangla.com)).

There is a complication: **the IF website publishes no timetable we could find** ([IF](https://islamicfoundation.gov.bd/)). Newspapers republish IF's schedules daily ([Jagonews24](https://www.jagonews24.com/religion/news/1143651)). How districts are derived is itself disputed. 2026 Ramadan coverage described adding or subtracting up to 9 minutes from Dhaka ([Ittefaq](https://www.ittefaq.com.bd/775700/%E0%A6%9A%E0%A6%B2%E0%A6%A4%E0%A6%BF-%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%B0%E0%A6%AE%E0%A6%9C%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A6%BE%E0%A6%B9%E0%A7%8D%E2%80%8C%E0%A6%B0%E0%A6%BF-%E0%A6%93-%E0%A6%87%E0%A6%AB%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A6%AE%E0%A7%9F%E0%A6%B8%E0%A7%82%E0%A6%9A%E0%A6%BF-%E0%A6%86%E0%A6%9C)). But a Jugantor search snippet (the page itself returned 403, and its date is unclear) reported that IF called that method "ভুল ও ভিত্তিহীন" (wrong and baseless), because IF now publishes a separate schedule for every district ([Jugantor](https://www.jugantor.com/islam-life/1057413)). Earlier years cited +11/−10 minutes ([bdnews24 2023](https://bangla.bdnews24.com/bangladesh/5t2b1y0622)). **IF's actual calculation parameters were not obtained**: its Fajr/Isha angles and its Asr method. A low-authority source says its district schedules follow Hanafi practice ([teachers.gov.bd blog](https://www.teachers.gov.bd/blog/details/827434)). This must be verified against an IF document before launch.

**Upazila-level times (Weak).** Only two pieces of evidence surfaced. Muslims Day (2025-03-01) asked: "উপজেলাভিত্তিক সময়সূচী ইফতার ও সেহরীর জন্য দেখালে ভালো হতো" [it would be good to show upazila-level Sehri/Iftar schedules] ([Play: Muslims Day](https://play.google.com/store/apps/details?id=theoaktroop.appoframadan&hl=bn&gl=BD)). A Technobd reviewer (2026-08-16) could not find the Sylhet area আম্বরখানা (Amberkhana) in the location list ([Play: Technobd](https://play.google.com/store/apps/details?id=com.technobd.alquran&hl=bn&gl=BD)). Search queries such as "iftar time today mirpur" show sub-district intent exists, but not its size.

**Sehri and Iftar by district (Strong).** On Google Trends, **সেহরির শেষ সময় ("end of sehri time") runs at 0.34× and ইফতারের সময় ("iftar time") at 0.33×** of the year-round prayer-time anchor, concentrated in Ramadan ([Google Trends BD](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m)). On 25 February 2026, divisional iftar ranged from Sylhet 5:54 to Rajshahi 6:07, a **13-minute spread**. These figures come from a search summary of [Deshrupantor](https://www.deshrupantor.com/498057) and should be re-checked. The cost of getting it wrong is personal. One Amader Lab review with 75 helpful votes (2023-04-13, 3★) said: "I missed my suhoor only because I followed the time on the app… even though I turned 'GPS' the time was inaccurate" ([Play: Amader Lab](https://play.google.com/store/apps/details?id=com.creativeapps.salat_times&hl=bn&gl=BD)).

**Hijri date by Bangladesh moon sighting (Strong).** In 2026, Bangladesh celebrated **Eid-ul-Fitr on 21 March, one day after Saudi Arabia**, because the Shawwal moon was not sighted on 19 March. bdnews24 notes that Bangladesh "traditionally" celebrates a day later ([Daily Star](https://online-d11.thedailystar.net/news/bangladesh/news/eid-ul-fitr-saturday-shawwal-moon-not-sighted-4132701); [bdnews24](https://bdnews24.com/bangladesh/8618af4cfd38)). **Eid-ul-Azha was 28 May, against Saudi Arabia's 27 May**, after the National Moon Sighting Committee met at Baitul Mukarram ([bdnews24](https://bdnews24.com/bangladesh/a11a17f999fc); [Financial Express](https://today.thefinancialexpress.com.bd/print/eid-ul-azha-to-be-celebrated-on-may-28-1779125072)). On 5 November 2026, the Bangladesh-oriented sites showed 24 Jumada al-Awwal while islamqa showed the 25th (see [report 05](05-competitor-feature-analysis.md)). Users complain when apps get this wrong:

- "আরবি তারিখ চাঁদ দেখার উপরে নির্ভর করে দেখায় না অনেক সময় ভুল হচ্ছে" [the Arabic date isn't based on moon sighting; it's often wrong] (Islami Jindegi, 2022-12-25, 3★) ([Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD)).
- "ভালো না। আরবি তারিখ ভুল দেয়" [not good; gives the wrong Arabic date] (Muslim Bangla, 2026-05-16, 1★) ([Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)).

One reviewer added a finer point: "আরবী দিন শুরু হয় মাগরিবের পর থেকে" [the Arabic day starts at Maghrib]. That is a **Weak** but specific request for the date to roll over at sunset. Only 26 reviews in the corpus mention Hijri dates or the moon. The rating is Strong because the factual divergence is documented, not because complaints are numerous.

**Bangla calendar date, বঙ্গাব্দ (Moderate).** A Dawat-e-Islami review with 16 helpful votes (2025-01-26) said: "অ্যাপটির সাথে বাংলা মাস এড করে দিলে আমাদের জন্য উপকার হতো। নতুবা বাংলা মাসের জন্য আরেকটা অ্যাপ নামাতে হয়।" [Adding the Bangla month would help us; otherwise we have to download another app for it.] ([Play: Dawat-e-Islami](https://play.google.com/store/apps/details?id=com.dawateislami.namaz&hl=bn&gl=BD)). Reviews of Muslims Day, Deen and Muslim Bangla ask for the date or correct it ([Play: Muslims Day](https://play.google.com/store/apps/details?id=theoaktroop.appoframadan&hl=bn&gl=BD)). On the web, ihadis and muslimbangla disagreed by a day on 5 November (report 05).

## Language: Bangla first, pronunciation essential, spellings plural

**Bangla-first (Strong).** The traffic leaders are Bangla-first sites ([report 02](02-top-islamic-websites-bangladesh.md)). Of 582 namaz, Q&A, Ramadan and lifestyle keyword rows, **498 are in Bangla script**, 34 in Banglish, 26 in English and 24 mixed ([keyword research](03-bangladesh-keyword-research.md)). Among apps, local Bangla-first apps draw **only about 2–5% 1–2★ reviews**, against 17–41% for ad-heavy global apps (our count of the corpus). Ads are one confound in that comparison. The reason for Bangla-first is stated plainly in this kutblog review (2026-04-13, 5★): "আমি বাংলা পারি, আরবি পারিনা! এজন্য আমি বাংলাতেই পড়ি। যারা আরবি জানে না বা বৃদ্ধ,বয়স হয়ে গেছে আরবি শিখা তো সম্ভব না…" [I can read Bangla, not Arabic, so I read in Bangla. Those who don't know Arabic, or are old, can't learn Arabic…] ([Play: kutblog](https://play.google.com/store/apps/details?id=com.kutblog.arabicbanglaquran&hl=bn&gl=BD)).

**Arabic with Bangla-script pronunciation (Strong, with a liability attached).** Demand is measured:

- Ahrefs puts **"আয়াতুল কুরসি বাংলা উচ্চারণ" ("Ayatul Kursi Bangla pronunciation") above 10,000 searches a month** in Bangladesh ([Ahrefs ayatul kursi](https://ahrefs.com/keyword-generator/?country=bd&input=ayatul%20kursi)).
- Google Trends shows **"বাংলা উচ্চারণ" ("Bangla pronunciation") rising from 32.7 to 35.4** between 2023 and 2026, while most Islamic terms fell. The term also has non-religious uses ([Trends quran set A](https://trends.google.com/trends/explore?geo=BD&date=today%205-y&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%87%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%A8%20%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%AE%E0%A7%81%E0%A6%B2%E0%A6%95,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%86%E0%A6%B0%20%E0%A6%B0%E0%A6%B9%E0%A6%AE%E0%A6%BE%E0%A6%A8,%E0%A6%86%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%A4%E0%A7%81%E0%A6%B2%20%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%B8%E0%A6%BF)).

Users ask for it in reviews:

- "ভাই দুয়া ও জিকিরের আরবি উচ্চারন টা বাংলায় দেন" [Brother, please give the Arabic pronunciation of the duas and dhikr in Bangla] (Ibadah, 2026-07-18, 5★, **231 helpful votes**) ([Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)).
- "দোয়া গুলোর উচ্চারণ এবং অর্থ বাংলা দিলে আরো অনেক বেশি ভালো হতো" [it would be much better if the duas had Bangla pronunciation and meaning] (Muslim Pro, 2020-04-23) ([Play: Muslim Pro](https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro&hl=bn&gl=BD)).

The same users audit the output closely:

- "সুরা মুলক ১৭ নং আয়াতে ভুল আছে এরকম এপস থেকে সতর্ক থাকবেন" [there's a mistake in Surah Mulk ayah 17; beware of apps like this] (E-book Library, 2025-06-10, 1★) ([Play: E-book Library](https://play.google.com/store/apps/details?id=com.ebooklibrary.noraniquran&hl=bn&gl=BD)).
- A Technobd reviewer flagged words missing from the Bangla pronunciation of Surah Fatir 35:11 ([Play: Technobd](https://play.google.com/store/apps/details?id=com.technobd.alquran&hl=bn&gl=BD)).

Audio serves as the check. A Greentech Al Quran reviewer wrote: "অডিও উচ্চারণ শুনে শুনে ভুল গুলো ঠিক করি" [by listening to the audio I correct my mistakes] ([Play: Greentech Al Quran](https://play.google.com/store/apps/details?id=com.greentech.quran&hl=bn&gl=BD)). The Greentech translation platform itself carries a string warning that transliteration "can cause incorrect pronunciation and may hinder the proper learning of Tajweed" ([translate.gtaf.org](https://translate.gtaf.org/checks/xml-tags/al-quran-android/strings/fa)). On the web, only muslimbangla.com offers Bangla-script pronunciation per verse (report 05).

**Simple, colloquial Bangla (Weak).** The clearest request is a single kutblog review (2020-05-16, 5★, **161 helpful votes**): "if the Bengali pronunciation was in colloquial language instead of Sadhu (সাধু) language, it would be easier to understand." Other reviews show translation vocabulary is contested rather than uniformly "too hard":

- One reviewer asked for the Islamic Foundation translation.
- Another criticised IF's rendering 'মহাপরাক্রান্ত' (a formal epithet) for Al-'Aziz (the Mighty).
- A third asked Greentech to replace "নারী" with "মহিলা" (two Bangla words for "woman") on ideological grounds.

([Play: kutblog](https://play.google.com/store/apps/details?id=com.kutblog.arabicbanglaquran&hl=bn&gl=BD); [Play: Technobd](https://play.google.com/store/apps/details?id=com.technobd.alquran&hl=bn&gl=BD); [Play: Greentech Al Quran](https://play.google.com/store/apps/details?id=com.greentech.quran&hl=bn&gl=BD)). This points to **named, switchable translations** more than to one "simple" version. Requests for more tafsir also appear, naming Jalalain, Ma'ariful Quran, Baydawi and "সংক্ষিপ্ত তাফসীর" (a short tafsir).

**Local terminology and spelling variants (Strong).** Search shows a dominant everyday spelling for each core term:

- **দোয়া is ~24× দুয়া** (two spellings of "dua").
- **নামাজ is ~18× নামায** (two spellings of "namaz").
- **হাদিস is ~6.6× হাদীস** (two spellings of "hadith").
- **জিকির is ~26× যিকির** (two spellings of "zikir").

**Latin "surah mulk" is ~7× সূরা মুলক** (Bangla-script "Surah Mulk") ([keyword research](03-bangladesh-keyword-research.md); [Ahrefs surah mulk](https://ahrefs.com/keyword-generator/?country=bd&input=surah%20mulk)). Prayer-time queries also arrive in Banglish, for example "namajer somoy" and "fazar er namaj er time" ([Similarweb salat.habibur.com](https://www.similarweb.com/website/salat.habibur.com/)). The audit found that quran.com's API returns **0 results for নামাজ** and that only hadithbd handles Banglish (report 05). A Banglish complaint about prayer alarms, "fozor a onk somoy baje onk somoy baje na" [at Fajr it sometimes rings, sometimes doesn't] (Muslim Bangla, 2026-09-23), shows users *write* in Banglish too ([Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)).

## Money and ads: free access is expected, and ads near the Quran offend

**Ads as religious offence (Strong).** Ads are the single largest complaint theme: **551 reviews, 349 of them at 3★ or lower**. Wemu, Quran Majeed and Muslim Pro account for the most mentions. Users frame ads in moral terms:

- "এরকম একটা ইসলামী অ্যাপে নাজায়েজ বিভিন্ন বিজ্ঞাপন দেয়ার মানে কি? … অর্থ ডোনেশন পদ্ধতি রাখলেই তো হ…" [Why show impermissible ads in an Islamic app like this? … a donation system would do…] (Muslim Pro, 2020-11-20, 3★) ([Play: Muslim Pro](https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro&hl=bn&gl=BD)).
- "suppose, you're reading a surah and all of a sudden advertisement related to job or fridge… pops up, how could you feel as a Muslim?" (kutblog, 2024-07-28, 2★, 63 helpful votes) ([Play: kutblog](https://play.google.com/store/apps/details?id=com.kutblog.arabicbanglaquran&hl=bn&gl=BD)).
- An Ibadah reviewer (2026-09-16, 2★) objected to an "অশালীন ad" (indecent ad) showing a woman in improper dress ([Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)).

The share of 1–2★ reviews tracks ad load: **Wemu 41.1%, Muslim Pro 18.9% and Quran Majeed 17.3%, against 2.2% for Muslim Bangla and hadithbd's app**. Ad-free status is praised just as explicitly: "you won't find any ads because earning money by showing ads is kind of mixture of Halal and Haram… Instead of showing ads they take donation" (IRD Al Hadith, 2020-10-28, 5★, **212 helpful votes**) ([Play: IRD Al Hadith](https://play.google.com/store/apps/details?id=com.ihadis.ihadis&hl=bn&gl=BD)). On the web, dedicated Islamic sites are already ad-free. The offence happens on the newspapers and SEO blogs that win many dua clicks (report 05).

**Free access to sacred text (Strong).** Paywalls draw 185 mentions, 116 of them at 3★ or lower. A Tafhimul Quran review (2025-05-06, 1★) shows the depth of feeling: "দিন ধর্মের জন্য কাজ করে আপনি তো পেমেন্ট ছাড়া ভিতরে ঢুকতে দিচ্ছেন না?… আমাদের অনেকের তো টাকা নেই… ধর্ম বিক্রি করে খাওয়া বন্ধ করুন।" [You claim to work for the religion but won't let us in without paying? … Many of us have no money… Stop making a living by selling religion.] ([Play: Tafhimul Quran](https://play.google.com/store/apps/details?id=com.alquran.tafhimul_quran&hl=bn&gl=BD)). From earlier research (Nov 4 2026), Muslim Pro's own help centre carries an article titled "Is it acceptable to pay for a religious application" ([Muslim Pro](https://support.muslimpro.com/hc/en-us/articles/200669690-Is-it-acceptable-to-pay-for-a-religious-application)).

**Donation model (Moderate).** Users repeatedly propose donation as the alternative to ads. A Greentech reviewer (2026-10-08, 5★) asked: "বাংলাদেশ থেকে টাকা নেওয়ার ব্যবস্থা সহজ করুন অনেকেই আপনাদের কে হেল্প করতে চাই ডোনেশন করতে চায় কিন্তু অনেকেই পারে না কঠিন" [make it easier to accept money from Bangladesh; many want to donate but can't, it's hard] ([Play: Greentech Al Quran](https://play.google.com/store/apps/details?id=com.greentech.quran&hl=bn&gl=BD)). The review does not name a payment method; bKash or Nagad is our inference. But **donation that behaves like a paywall is resented**:

- "My father already donated, yet the reminder never stops" (Tafhimul Quran, 2025-11-01, 1★, 32 helpful votes).
- "you can't use this app without donations, I don't like this system" (Deen, 2024-09-21, 1★).

([Play: Tafhimul Quran](https://play.google.com/store/apps/details?id=com.alquran.tafhimul_quran&hl=bn&gl=BD); [Play: Deen](https://play.google.com/store/apps/details?id=com.deenislamic&hl=bn&gl=BD)).

## Trust: sources, scholars and the madhhab question

**Trusted references (Strong for trust, Not evidenced as a traffic driver).** Praise singles out sourcing:

- "ডিজাইন যেমন চমৎকার, সনদ তেমনই সহীহ।" [The design is as excellent as the chains of narration are sahih.] (IRD Dua & Ruqyah, 2021-11-27, 5★) ([Play: IRD Dua](https://play.google.com/store/apps/details?id=com.ihadis.dua&hl=bn&gl=BD)).
- "The best thing is all of them have authentic references" (Hisnul Muslim Bangla, 2024-08-02, 5★, 32 helpful votes) ([Play: Hisnul Muslim BN](https://play.google.com/store/apps/details?id=com.greentech.hisnulmuslimbn&hl=bn&gl=BD)).

Complaints single out errors:

- "সহীহ মুসলিমের একটা হাদিসের মধ্যে- একহাদীসের টেক্সটের অধীনে অন্য হাদিসের তরজমা দেওয়া… রিপোর্ট করেছি- কিন্তু কোন রেসপন্স নেই।" [In Sahih Muslim, one hadith's text has another hadith's translation under it… I reported it but got no response.] (IRD Al Hadith, 2026-06-09, 1★) ([Play: IRD Al Hadith](https://play.google.com/store/apps/details?id=com.ihadis.ihadis&hl=bn&gl=BD)).
- A Greentech Hadith reviewer (location unknown) flagged hadiths marked Daif by Darussalam but Sahih/Hasan by Albani ([Play: Greentech Hadith](https://play.google.com/store/apps/details?id=com.greentech.hadith&hl=bn&gl=BD)).

In search, users attach authority tags to fiqh queries: "… আল কাউসার" (Al-Kawsar, the Hanafi monthly), "দলিলসহ" ("with evidence"), and named scholars such as শায়খ আহমাদুল্লাহ (Shaykh Ahmadullah) ([Autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=নামাজ+ভঙ্গের+কারণ)). However, **"জাল হাদিস" ("fake hadith") and every authenticity variant draw fewer than 100 searches a month** ([Ahrefs জাল হাদিস](https://ahrefs.com/keyword-generator/?country=bd&input=%E0%A6%9C%E0%A6%BE%E0%A6%B2%20%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8)). Sourcing builds trust and retention, but it will not bring traffic by itself.

Facebook misinformation is a real background risk. A Jahangirnagar University study of 7,350 Facebook comments across five religious-misinformation cases found **69.3% of users tended to believe the misinformation** ([UNB](https://unb.com.bd/category/Bangladesh/alarming-rise-in-religious-misinformation-on-social-media-in-bangladesh-new-study-reveals/136804); [Data in Brief](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10405184/)). Those cases were communal and political incidents, not fake hadith.

**Scholar Q&A (Moderate).** One user wrote "ইসলামী প্রশ্নঃ করেছি এবং ২ দিনের ভিতর সঠিক সমাধান পেয়েছি।" [I asked an Islamic question and got a correct answer within 2 days.] (Muslim Bangla, 2026-10-23, 5★). Another asked a different app to "মুসলিম বাংলার মতো প্রশ্ন করার অপশন যোগ করুন" [add a question option like Muslim Bangla's] (Islami Jindegi, 2025-09-08). Named preachers also pull users in: a kutblog reviewer asked for the voices of Mizanur Rahman Azhari and Abu Toha Adnan ([Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD); [Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD); [Play: kutblog](https://play.google.com/store/apps/details?id=com.kutblog.arabicbanglaquran&hl=bn&gl=BD)).

**Madhhab sensitivity (Moderate).** The signal runs in three directions:

- **Hanafi users are alarmed by mismatched times.** "ভাই আমাদের হানাফি মাযহাবের সময়ের সাথে এই সময়সূচী মিলেনা কেনো???? তাহলে কি এটা শীয়াদের জন্যে ভাই" [Why doesn't this schedule match our Hanafi madhhab time? Is it for Shias then?] (Ibadah, 2022-07-03, 1★).
- **Ahl-e-Hadith users want their own Asr.** "ভালো শুধু হানাফিদের জন্য নয় আহলে হাদিসদের জন্য টাইম থাকা উচিত" [there should be times for Ahl-e-Hadith too, not only Hanafis] (Muslim Bangla, 2026-08-04, 5★).
- **Some users reject being asked to choose.** "পছন্দের মাযহাব সম্পর্কে প্রশ্ন করাটা ভালো লাগলো না। আমরা সবাই মুসলিম" [I didn't like being asked my preferred madhhab. We are all Muslims.] (Ibadah, 2026-04-17, 4★).

([Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD); [Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)). Explicit sectarian reviews are rare: **8 of 11,671**. Search shows school labels appended to queries, such as "বিতর নামাজের নিয়ম আহলে হাদিস" (how to pray witr, Ahl-e-Hadith) and "namaz time dhaka today hanafi". It also shows rival answers on the same results page with no labels ([keyword research](03-bangladesh-keyword-research.md)). The evidence supports a **Hanafi default with the alternative Asr shown and labelled by method** (first or second shadow) rather than by sect. It does not support forcing users to pick a camp.

## Device, bandwidth, age and gender

**Low bandwidth (Moderate).** The secondary data is solid: retail data at **BDT 25–35 per GB** ([Bonik Barta](https://en.bonikbarta.com/exclusive/Y1mr7cn0S586gKMz/)), median mobile download of **36.84 Mbps** ([DataReportal](https://datareportal.com/reports/digital-2026-bangladesh)) and a budget-Android handset base ([report 01](01-bangladesh-islamic-digital-market.md)). The user voice is mostly about **app size**, not page weight:

- "After downloading 70+ Surah with Bangla translation the storage goes upto 5.90gb" (Technobd, 2024-03-24).
- Users who got an app via SHAREit then paid mobile data for content downloads, "so it was expensive for them" (IRD Al Hadith, 2019-02-01, 59 helpful votes).

([Play: Technobd](https://play.google.com/store/apps/details?id=com.technobd.alquran&hl=bn&gl=BD); [Play: IRD Al Hadith](https://play.google.com/store/apps/details?id=com.ihadis.ihadis&hl=bn&gl=BD)). The offline/internet/data theme has 175 mentions, 61 of them at 3★ or lower. For a website, this argues for text-first pages and on-demand audio. There is no direct evidence that web users abandon heavy pages.

**Offline (Moderate for apps, Not evidenced for web).** Users praise working without a connection:

- "নেট ছাড়া অডিও কোরআন তেলাওয়াত শোনা যাচ্ছে এটা সবচাইতে ভালো আমার কাছে" [being able to hear Quran recitation without the net is the best part for me] (Muslim Pro, 2024-06-13) ([Play: Muslim Pro](https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro&hl=bn&gl=BD)).

And they complain when offline mode fails:

- "অফ লাইন লিখে রাখছেন অথচ অফলাইনে পড়া যাচ্ছে না" [you say offline, yet it can't be read offline] (Islami Jindegi, 2022-05-29, 1★) ([Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD)).

No evidence was found that *website* visitors expect offline use. A PWA would be an untested bet.

**Simple UI and older users (Moderate).** Several reviews ask for larger, easier text for older readers:

- "ফন্ট অনেক ছোট যাদের চোখে সমস্যা তাদের পড়তে অনেক কষ্ট হয়… ফন্ট বড় করে পড়া যায় এরকম একটি বাটন" [the font is very small; people with eye problems struggle; please add a button to enlarge it] (Muslims Day, 2025-12-15) ([Play: Muslims Day](https://play.google.com/store/apps/details?id=theoaktroop.appoframadan&hl=bn&gl=BD)).
- "বাংলা অনুবাদে ব‍্যবহৃত বর্নের ফন্ট এক ধাপ বড় হলে বয়স্ক পাঠকের জন্য অধিকতর সুবিধা হত" [a one-step-larger Bangla translation font would help elderly readers] (PG Apps BD, 2026-03-28) ([Play: PG Apps BD](https://play.google.com/store/apps/details?id=com.pgappsbd.all_quran_orthosho&hl=bn&gl=BD)).

Others resist added complexity:

- "new version… before you can turn off alarm but now its too complicated, old version was good" (Muslim Bangla, 2026-07-23, 1★).
- "Please don't make location to GPS only" (Islami Jindegi, 2023-09-13, 5★, **146 helpful votes**).

([Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD); [Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD)). No data was found on older users' *web* behaviour.

**Font size, not font rendering (Moderate / Not evidenced).** Of 76 font-related reviews, almost all concern **size or typeface**. Examples: "Arabic fonts… in my 10 inch tab they look very tiny" (kutblog, 150 helpful votes); praise for the Kalpurush typeface; a request for the Uthmani Madani Arabic font ([Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD); [Play: Bangla Hadith](https://play.google.com/store/apps/details?id=com.hadithbd.app&hl=bn&gl=BD)). **No review from 2017 to 2026 complained of broken Bangla conjuncts (যুক্তাক্ষর) or Bijoy-encoded garbling.** Secondary guides describe Bijoy as a legacy ASCII-mapped encoding that garbles without its font ([bangladatetoday](https://www.bangladatetoday.com/bijoy-vs-unicode-which-is-better.php); [unicodefyi](https://unicodefyi.com/guide/bengali-script-guide)). That makes it a back-end data-cleaning task, not a user need.

**Family context (Weak for shared phones; Moderate for family-event content).** Two reviews mention parents' phones: "Even I had installed this on my mom's phone" (IRD Al Hadith) and "আব্বুর ফোনে কুরআন, দোয়া, মাসাআলা… পাঠ করতাম" [I used to read Quran, duas and masa'il on my father's phone] (Islami Jindegi) ([Play: IRD Al Hadith](https://play.google.com/store/apps/details?id=com.ihadis.ihadis&hl=bn&gl=BD); [Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD)). Family *life events* are better measured. **ইসলামিক নাম ("Islamic names") runs at 0.52× the prayer-time anchor**, **মেয়েদের ইসলামিক নাম ("Islamic names for girls") at 19K/month** (Ahrefs), and **আকিকা ("aqiqah") at 0.076×**, peaking just before Eid-ul-Adha ([Ahrefs hadithbd.com](https://ahrefstop.com/websites/hadithbd.com); [Google Trends BD](https://trends.google.com/trends/explore?geo=BD&date=today%2012-m)).

**Women users (Weak).** The access gap is documented: **mobile internet adoption is 40% among men and 24% among women** (GSMA 2024; a later figure gives 26%) ([Dhaka Tribune](https://www.dhakatribune.com/amp/bangladesh/346828/bangladesh-tops-asia-in-mobile-internet-gender-gap); [GSMA](https://www.gsma.com/wp-content/uploads/2025/12/The-Mobile-Gender-Gap-Report-2025.pdf)). Women's voices in the corpus are faint: about 61 keyword matches, many of them false positives. Those found concern indecent ads, the women's prayer method and translation wording. One example: "মহিলাদের নামাজের পদ্ধতিতে একটি অংশের সঠিক পদ্ধতি বর্ণনা করা হয়নি… মহিলাদের সিজদার ব্যাপারটা পরিষ্কার করা হয়নি।" [part of the women's prayer method isn't described correctly; the women's sajdah isn't made clear] (Deen, 2026-03-12, 1★) ([Play: Deen](https://play.google.com/store/apps/details?id=com.deenislamic&hl=bn&gl=BD)). Search shows women's fiqh demand exists, for example মহিলাদের নামাজের নিয়ম ("women's prayer method") and হায়েজ অবস্থায় কুরআন পড়ার বিধান ("ruling on reading the Quran during menstruation"). Those results pages are dominated by Facebook posts and rival-school answers ([SERP মহিলাদের নামাজের নিয়ম](https://www.google.com/search?hl=bn&gl=bd&q=মহিলাদের+নামাজের+নিয়ম)). **No review asked for a menstruation tracker or a "not praying" mode.**

## Assumed needs the evidence did not support

Several requirements that are often assumed for a Bangladeshi Islamic product **were not supported** by this research. Planners should not treat them as validated:

- **Bijoy/Unicode font rendering** as a user-facing problem: no complaints from 2017 to 2026. Font *size* is the real issue.
- **Accounts and login**: only 51 of 11,671 reviews mention them, mostly about lost subscriptions on global apps. Users complain when login gets in the way; we found none asking for it. One Deen reviewer complained that donating "asked for too more information" ([Play: Deen](https://play.google.com/store/apps/details?id=com.deenislamic&hl=bn&gl=BD)).
- **Authenticity checking as a traffic driver**: জাল হাদিস ("fake hadith") draws <100 searches/month. Sourcing matters for trust, not acquisition.
- **A madhhab picker that users welcome**: some users explicitly reject being asked.
- **Women-specific features** such as period tracking or prayer pauses: not requested anywhere in the corpus. Women's fiqh *content* demand is observed in search.
- **Daily hadith/ayah push as a return driver**: not directly evidenced in Bangla reviews.
- **Tasbih as a daily driver**: weak. Only 47 reviews mention it, mostly asking for custom dhikr. "tasbih counter online" is <100/month in Ahrefs, though no Bangla tool ranks.
- **"Ad-free" as a differentiator against dedicated Islamic websites**: it is already table stakes there (report 05).
- **Desktop-first users**: StatCounter's 56% desktop reading conflicts with BTRC's ~89% mobile subscriptions (report 01).
- **Azan alarms on the web**: the strongest app complaint is alarm failure. Examples: "Android 13 the full Azan doesn't play, only a beep" (Muslim Bangla, 110 helpful votes); "আমার ফযর এর নামাজ কাযা হয়ে গেলো" [my Fajr became qaza] (Amader Lab, 2019) ([Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD); [Play: Amader Lab](https://play.google.com/store/apps/details?id=com.creativeapps.salat_times&hl=bn&gl=BD)). A website cannot reliably ring an azan, so this need does not transfer. It is a reason not to promise alarms.

## Conclusion

The needs with Strong evidence share one feature: each is a **correctness obligation**, not a convenience. The obligations are the IF-matched minute, the Bangladesh-sighted date, the verse-accurate pronunciation, the named source, and the absence of an indecent ad beside a surah. Users judge failures on these religiously ("ruins people's fasts", "selling religion", "is it for Shias?"), and one visible error costs more trust than a missing feature. The requirements that are often assumed but weakly evidenced are women-specific tooling, accounts, offline web use and colloquial Bangla. They should be validated with web users before they shape the roadmap. Unlike the app corpus here, that validation would need an interview or survey sample of Bangladeshi web users, women included.

## Confidence & limitations

- **App-review bias:** nearly all user voice comes from Play reviews of apps. Website-only users, iOS users and people who never review are absent. Reviewer location cannot be verified; Bangla-script reviews are our best proxy.
- **Theme counts are keyword matches** on a non-random sample (newest and most relevant). Treat them as directional.
- **Not accessible:** Reddit (blocked to tools), Facebook groups and YouTube comments (not publicly retrievable). No Techtunes, Somewhereinblog or Quora threads surfaced.
- **Unverified facts that matter:** IF's calculation method and district policy (the ±9-minute conflict); the 25 February 2026 divisional iftar times (from a search summary); the 24% vs 26% female adoption figure.
- **No data:** retention or daily-active-user figures for any Bangladeshi Islamic product; Arabic-literacy rates; device RAM distribution; older users' web behaviour. See [methodology](10-research-methodology-and-sources.md).
