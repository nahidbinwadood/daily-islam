# User Voice and Bangladesh-Specific Requirements for Islamic Websites and Apps (accessed 2026-11-05)

**Method and evidence tags (read first)**
- **[GENUINE]** is genuine user feedback: a verbatim Google Play review, with app, review date, star rating and the Play listing link. Play reviews have no per-review permalinks, so the link points to the app's BD-storefront listing. Bangla quotes are verbatim, and the English in brackets is my translation.
- **[SECONDARY]** is a news, industry or academic report.
- **[OWN-DATA]** is my own count over the scraped review corpus described below.
- **Inference** items appear only in the Inferences subsections.
- **Corpus:** On 2026-11-05 I scraped Google Play directly with the open-source `google-play-scraper` Python library (v1.2.7), using `country="bd"`, `lang="bn"` and `lang="en"`, and both NEWEST and MOST_RELEVANT sorts. That gave up to about 650 unique reviews per app across 22 Islamic apps that rank for Bangla search terms on the BD store, **11,671 reviews in total**. 3,611 of them contain Bangla script, and 1,054 are 1–2★. The raw JSON is in the session scratchpad at `C:/Users/NAHID/AppData/Local/Temp/claude/d--My-Projects-daily-islam/fbf761ad-3f90-4fb8-b444-ebc9e48ea091/scratchpad/out/reviews.json`. That folder is temporary, so copy the file into the project if it is needed later.
- **Corpus caveats:**
  - Play does not guarantee that a review's author is in Bangladesh. English reviews of global apps (Muslim Pro, Wemu, Quran Majeed, Dawat-e-Islami) often come from India, Pakistan, the UK and elsewhere.
  - I therefore lean on reviews written in Bangla script or that mention Bangladesh, and I flag English-only reviews of global apps as "location unknown".
  - The sample is not random: it is the newest and "most relevant" reviews. Theme counts come from keyword matching and are indicative only.
- **Not accessible:**
  - Reddit is blocked to my tools; WebSearch and WebFetch both returned "domains not accessible".
  - Facebook groups and YouTube comments are not publicly retrievable.
  - No Techtunes, Somewhereinblog or Quora threads came up in searches.
  - Play reviews are therefore the main source of genuine user voice in this file.

### Apps in the corpus (Play metadata via scraper, global figures)
| App (package) | Installs | Rating (ratings) | Ads / IAP flag | 1–2★ share of sample |
|---|---|---|---|---|
| Muslim Bangla (com.tos.namajtime) | 5.99M | 4.89 (147K) | ads yes / IAP yes | 2.2% |
| Bangla Quran উচ্চারণসহ, kutblog (com.kutblog.arabicbanglaquran) | 8.67M | 4.70 (58K) | yes / yes | 4.9% |
| Al Quran Tafsir & by Word, Greentech (com.greentech.quran) | 14.7M | 4.83 (404K) | no / no | 3.8% |
| Al Hadith, IRD (com.ihadis.ihadis) | 3.04M | 4.71 (104K) | no / no | 4.4% |
| Bangla Hadith v10 (com.hadithbd.app) | 94K | 4.86 (2.6K) | no / no | 2.2% |
| Muslims Day, Kahf (theoaktroop.appoframadan) | 5.69M | 4.75 (126K) | yes / yes | 3.7% |
| Muslim Pro (com.bitsmedia.android.muslimpro) | 148.6M | 4.29 (1.92M) | yes / yes | 18.9% |
| Wemu/WeMuslim (com.fyxtech.muslim) | 130.2M | 4.33 (754K) | yes / yes | 41.1% |
| Deen, Maverick (com.deenislamic) | 605K | 4.36 (2.7K) | no / yes | 15.0% |
| নামাজের সময়সূচি, Amader Lab (com.creativeapps.salat_times) | 1.43M | 4.59 (24K) | yes / yes | 9.3% |
| Tafhimul Quran (com.alquran.tafhimul_quran) | 1.17M | 4.54 (13.6K) | no / no | 11.1% |
| আল-কুরআন বাংলা অর্থসহ, PG Apps BD (com.pgappsbd.all_quran_orthosho) | 2.86M | 4.68 (8.9K) | yes / no | 11.5% |
| Islami Jindegi (com.islami_jindegi) | 1.38M | 4.68 (13.6K) | no / no | 5.1% |
| আল কুরআন বাংলা উচ্চারণ, E-book Library (com.ebooklibrary.noraniquran) | 532K | 4.50 (659) | yes / no | 19.0% |
| Ibadah, CrossAppers (com.crossappers.prayerapp) | 4.07M | 4.59 (44K) | yes / no | 7.2% |
| Quran Majeed (com.pakdata.QuranMajeed) | 41.6M | 4.62 (1.12M) | yes / yes | 17.3% |
| Hisnul Muslim Bangla, Greentech (com.greentech.hisnulmuslimbn) | 2.98M | 4.80 (129K) | no / no | 2.5% |
| Al-Quran, Technobd (com.technobd.alquran) | 2.28M | 4.72 (86K) | no / no | 7.8% |
| Others: Dawat-e-Islami Prayer Times, Greentech Hadith Collection, IRD Dua & Ruqyah, Ramadan Calendar (fazutech) | — | 4.5–4.8 | — | 3.8–9.9% |
Source: Google Play listings on the BD storefront, for example [Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD), [IRD Al Hadith](https://play.google.com/store/apps/details?id=com.ihadis.ihadis&hl=bn&gl=BD), [Greentech Al Quran](https://play.google.com/store/apps/details?id=com.greentech.quran&hl=bn&gl=BD), [Muslim Pro](https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro&hl=bn&gl=BD) and [Wemu](https://play.google.com/store/apps/details?id=com.fyxtech.muslim&hl=bn&gl=BD). These were retrieved by the scraper rather than WebFetch. The 1–2★ share is [OWN-DATA].

---

## Q1. What do BD users praise and complain about in Play reviews of popular Islamic apps?

### Takeaway
Local Bangla-first apps get very few 1–2★ reviews (about 2–5%), while ad-heavy global apps get far more: Wemu 41%, Muslim Pro 19%, Quran Majeed 17% [OWN-DATA]. The most common complaints are, in order:
1. Ads, especially indecent ads in a religious context.
2. Paywalls or "forced donation" on religious content.
3. Azan or alarm failures.
4. Bugs after updates.
5. Text errors in the Quran, Bangla transliteration or hadith numbering, which users report verse by verse and treat as a serious trust issue.

The most common praise is for being ad-free, working offline, and offering Bangla pronunciation and meaning together.

### Cited Findings
**Theme counts across the 11,671 reviews (keyword match, [OWN-DATA]).** Each line gives the number of matching reviews, with the number rated ≤3★ in brackets.

| Theme | Matches (≤3★) | Apps with the most matches |
|---|---|---|
| Ads | 551 (349) | Wemu 156, Quran Majeed 79, Muslim Pro 69 |
| Bugs/crash/slow | 318 (124) | |
| Notification/alarm/reminder | 263 (75) | |
| Paywall/premium/money | 185 (116) | Quran Majeed 46, Muslim Pro 39, Tafhimul Quran 31, Deen 22 |
| Offline/internet/data | 175 (61) | |
| Pronunciation/transliteration | 127 (22) | |
| Spelling or translation mistakes | 86 (37) | |
| Font/text size | 76 (13) | |
| Widget | 65 | |
| Size/storage | 53 | |
| Login/account | 51 (29) | mostly lost subscriptions on global apps |
| Wrong prayer time | 25 | |
| Hijri date or moon | 26 | |
| Battery | 8 | |
| Madhhab/sect words | 8 | |

**Ads: the biggest leave-reason, and framed as a religious or moral problem**
- [GENUINE] Muslim Pro, 2020-11-20, 3★, Bangla: "এরকম একটা ইসলামী অ্যাপে নাজায়েজ বিভিন্ন বিজ্ঞাপন দেয়ার মানে কি? আর এটার প্রো ভার্সন অর্থ দিয়ে কিনতে হবে কেন? অর্থ ডোনেশন পদ্ধতি রাখলেই তো হ…" [Why show impermissible ads in an Islamic app like this? And why must the pro version be bought with money? A donation system would do…] — [Play: Muslim Pro](https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro&hl=bn&gl=BD)
- [GENUINE] Bangla Quran উচ্চারণসহ (kutblog), 2024-07-28, 2★, 63 helpful votes: "…it allows third party ads… suppose, you're reading a surah and all of a sudden advertisement related to job or fridge… pops up, how could you feel as a Muslim? wouldn't it break up your attention?" — [Play: kutblog](https://play.google.com/store/apps/details?id=com.kutblog.arabicbanglaquran&hl=bn&gl=BD)
- [GENUINE] আল-কুরআন বাংলা অর্থসহ (PG Apps BD), 2023-12-20, 1★: "এই এপবা কোরআন কেউ ডাউনলোড করবেননা এড আসে খুব আবার ভুলো দেওয়া আচে ইয়াছিন সুরার সেস আয়াতে কুল্লি হবে সেকানে দিচে কুল্লা" [Nobody download this Quran app: lots of ads, and there are mistakes too. In the last ayah of Surah Yasin it should be 'kulli' but they wrote 'kulla'.] — [Play: PG Apps BD](https://play.google.com/store/apps/details?id=com.pgappsbd.all_quran_orthosho&hl=bn&gl=BD)
- [GENUINE] Ibadah (CrossAppers), 2026-09-16, 2★, Bangla: complains of "অশালীন ad" (an indecent ad): a cooking-game ad showing a woman in improper dress. — [Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)
- [GENUINE] Ibadah, 2026-07-14, 4★, 33 helpful votes: "why are there ads in a prayer app?… Instead of showing ads, you could add a donation option…" — [Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)
- [GENUINE] Muslim Bangla, 2020-07-21, 1★, 110 helpful votes: "There were many ads. Thats why I purchased the paid version. Unfortunately even after paying the license fees I am receiving google ads." — [Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)
- [GENUINE, location unknown, global benchmark] Wemu, 2026-08-08, 1★: "Even after looking at them for two minutes, there isn't a button to skip them, and some of the ads are +18 (which is crazy for a prayer time app)." Another Wemu review, 2026-07-17, 1★: "If I open to see the time of prayers an app would pop up…" — [Play: Wemu](https://play.google.com/store/apps/details?id=com.fyxtech.muslim&hl=bn&gl=BD)
- [GENUINE, praise] IRD Al Hadith, 2020-10-28, 5★, 212 helpful votes: "you won't find any ads because earning money by showing ads is kind of mixture of Halal and Haram… Instead of showing ads they take donation." — [Play: IRD Al Hadith](https://play.google.com/store/apps/details?id=com.ihadis.ihadis&hl=bn&gl=BD)
- [GENUINE, praise] Muslim Bangla, 2026-10-23, 5★: "…কোন এডভারটেইস নাই, ক্লিন এবং অনেক ফিচার সমৃদ্ধ এপ।" [No advertisements, a clean and feature-rich app.] — [Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)

**Paywalls and "forced donation": a strong leave-reason**
- [GENUINE] Tafhimul Quran, 2025-05-06, 1★: "দিন ধর্মের জন্য কাজ করে আপনি তো পেমেন্ট ছাড়া ভিতরে ঢুকতে দিচ্ছেন না? এটা কি ঠিক হচ্ছে। আমাদের অনেকের তো টাকা নেই। তো আমরা কি আপনার এই কোরানটা পড়তে পারব না? ধর্ম বিক্রি করে খাওয়া বন্ধ করুন।" [You claim to work for the religion but won't let us in without paying? Is that right? Many of us have no money. So can't we read this Quran of yours? Stop making a living by selling religion.] — [Play: Tafhimul Quran](https://play.google.com/store/apps/details?id=com.alquran.tafhimul_quran&hl=bn&gl=BD)
- [GENUINE] Tafhimul Quran, 2025-11-01, 1★, 32 helpful votes: "Earlier this app was excellent — ad-free and smooth. Now it keeps asking for payment every time I open it… My father already donated, yet the reminder never stops." Another review, 2024-10-25, 3★: monthly membership donation is "not easily possible for a student." — [Play: Tafhimul Quran](https://play.google.com/store/apps/details?id=com.alquran.tafhimul_quran&hl=bn&gl=BD)
- [GENUINE] Deen, 2025-03-17, 1★: "I brought 6 month membership just to use namaz tracker. Exactly after 1 month my namaz tracker isn't working and they're asking for donations." Another review, 2024-09-21, 1★: "you can't use this app without donations, I don't like this system." — [Play: Deen](https://play.google.com/store/apps/details?id=com.deenislamic&hl=bn&gl=BD)
- [GENUINE, willingness to give] Greentech Al Quran, 2026-10-08, 5★: "বাংলাদেশ থেকে টাকা নেওয়ার ব্যবস্থা সহজ করুন অনেকেই আপনাদের কে হেল্প করতে চাই ডোনেশন করতে চায় কিন্তু অনেকেই পারে না কঠিন" [Make it easier to accept money from Bangladesh; many want to help and donate but can't, it's hard.] — [Play: Greentech Al Quran](https://play.google.com/store/apps/details?id=com.greentech.quran&hl=bn&gl=BD)

**Errors in sacred text: reported verse by verse, and they hurt trust**
- [GENUINE] আল কুরআন বাংলা উচ্চারণ (E-book Library), 2025-03-12, 1★, 49 helpful votes: "কুরআন শিখুন, মুক্তবর্ণ পরিচয় পর্ব ১ প্রথম পেজে ভুল আছে… না জানি ভিতরে আরো কত ভুল আছে। আগে সংশোধন করেন।" [The first page of the 'Learn Quran' alphabet lesson has a mistake… who knows how many more mistakes are inside. Fix it first.] Another review, 2025-06-10, 1★: "সুরা মুলক ১৭ নং আয়াতে ভুল আছে এরকম এপস থেকে সতর্ক থাকবেন" [Mistake in Surah Mulk ayah 17; beware of apps like this.] — [Play: E-book Library](https://play.google.com/store/apps/details?id=com.ebooklibrary.noraniquran&hl=bn&gl=BD)
- [GENUINE] Technobd Al-Quran, 2026-07-10, 1★: "I found a word [Jannun] missing in Surah Ar-Rahman ayah 39… Please mind that Al-Quran is Allah's word. So we should be extra carefull about smallest of mistake possible." — [Play: Technobd](https://play.google.com/store/apps/details?id=com.technobd.alquran&hl=bn&gl=BD)
- [GENUINE] Tafhimul Quran, 2025-06-13, 4★: "deserve 5 stars but due to typing mistakes… near about 300 readers are given to study Tafhimul Quran using this app by me… when I find the typing mistakes then worried." — [Play: Tafhimul Quran](https://play.google.com/store/apps/details?id=com.alquran.tafhimul_quran&hl=bn&gl=BD)
- [GENUINE] IRD Al Hadith, 2026-06-09, 1★: "খুব বাজে অবস্থা। সহীহ মুসলিমের একটা হাদিসের মধ্যে- একহাদীসের টেক্সটের অধীনে অন্য হাদিসের তরজমা দেওয়া। তারপর সহীহ মুসলিমে ৬৮ নং হাদিসের পর ১০০ নং হাদিস থেকে শুরু হয়েছে। রিপোর্ট করেছি- কিন্তু কোন রেসপন্স নেই।" [Very bad state. In Sahih Muslim, one hadith's Arabic text has another hadith's translation under it. And after hadith 68 it jumps to 100. I reported it, but got no response.] — [Play: IRD Al Hadith](https://play.google.com/store/apps/details?id=com.ihadis.ihadis&hl=bn&gl=BD)

**Reliability, permissions and bloat after updates**
- [GENUINE] Muslim Bangla, 2026-11-01, 4★: "এপসে আগে কোন পারমিশন লাগত না, এখন ফোনকল মেনেজ সহ সব কিছুতে পারমিশন চায়, না দিলে আজানের এলার্ম বাজে না। এটা কেন?" [The app used to need no permissions; now it asks for everything including phone-call management, and without it the azan alarm won't ring. Why?] — [Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)
- [GENUINE] Tafhimul Quran, 2023-12-11, 2★, 114 helpful votes: "asks for access over gallery, media, files… Without giving permission, it doesn't work." Another review, 2025-01-31, 1★, 72 helpful votes: "I think this app is an tracker app… it insist to give all the permissions." — [Play: Tafhimul Quran](https://play.google.com/store/apps/details?id=com.alquran.tafhimul_quran&hl=bn&gl=BD)
- [GENUINE] Muslims Day (Kahf), 2026-06-22, 3★: "updates started, One worse than the previous… it's too heavy now. I'm looking for another smaller app to replace this one." — [Play: Muslims Day](https://play.google.com/store/apps/details?id=theoaktroop.appoframadan&hl=bn&gl=BD)
- [GENUINE] Technobd Al-Quran, 2023-11-11, 2★, 111 helpful votes: "after last update, it has became so slow… Also wrong writing of some ayah as wrong madd." — [Play: Technobd](https://play.google.com/store/apps/details?id=com.technobd.alquran&hl=bn&gl=BD)
- [GENUINE] Deen, 2024-12-10, 1★: "Reading quran in deen is very difficult… If I scroll fast… the app get off." Another review, 2025-04-04, 1★: "Bismillahir Rahmanir Rahim is ignored between suras." — [Play: Deen](https://play.google.com/store/apps/details?id=com.deenislamic&hl=bn&gl=BD)

**Login walls**
- [OWN-DATA] Only 51 of 11,671 reviews mention login or account. Most of these are about lost subscriptions after changing phones on global apps (Quran Majeed has 13). A Deen review, 2025-08-06, 1★, says donating "asked for too more information." There is no sign that BD users ask for accounts; they complain when accounts get in the way. — [Play: Deen](https://play.google.com/store/apps/details?id=com.deenislamic&hl=bn&gl=BD)

### Inferences
- In this market, ads around sacred content carry a religious objection ("নাজায়েজ", impermissible; "নুড/অশালীন", nude or indecent), not just a UX complaint. A no-ads promise is a trust signal and not only a nicety.
- Paywalling Quran reading draws accusations of "selling religion". Users accept voluntary donation, and some actively ask for an easier local way to pay, such as bKash or Nagad (that specific mechanism is my inference; the review only says payment from BD is hard).
- Every Quran or hadith text error is a public, rating-lowering event. A visible report-an-error flow, a response to each report, and a changelog of corrections ("সংশোধন") would answer a specific user behaviour seen here.
- Asking for many permissions and adding weight with each update are leave-reasons. A lightweight website sidesteps both.

### Gaps
- Reviewer country cannot be verified on Play. English reviews of global apps are not necessarily from Bangladesh.
- Play review text from iOS users and from web-only users (people who never install an app) is absent.
- Crash rates by device are not available from reviews. Only 8 reviews mention battery.

---

## Q2. Bangla pronunciation, translation, tafsir and font: content needs in users' own words

### Takeaway
Users strongly value Arabic text with Bangla উচ্চারণ (pronunciation) and Bangla meaning side by side, especially people who cannot read Arabic and older readers. They also notice and report transliteration errors precisely, by surah and ayah. Requests are for:
- simpler, colloquial Bangla rather than archaic sadhu bhasha;
- audio, so pronunciation can be checked by ear;
- more Bangla tafsirs (Jalalain, Ma'ariful Quran, Baydawi, short tafsir);
- larger fonts.

Complaints about Bangla font rendering (Bijoy versus Unicode) are essentially absent from 2026-era reviews. Font *size* is the real issue.

### Cited Findings
- [GENUINE] Bangla Quran উচ্চারণসহ (kutblog), 2026-04-13, 5★: "আমি নিয়মিত অল্প অল্প করে পড়ি আমি বাংলা পারি, আরবি পারিনা! এজন্য আমি বাংলাতেই পড়ি। যারা আরবি জানে না বা বৃদ্ধ,বয়স হয়ে গেছে আরবি শিখা তো সম্ভব না… এই বাংলাতে যেন অর্থসহ পড়ে।" [I read regularly, a little at a time. I can read Bangla, not Arabic, so I read in Bangla. Those who don't know Arabic, or are old, can't learn Arabic… let them read it in Bangla with meaning.] — [Play: kutblog](https://play.google.com/store/apps/details?id=com.kutblog.arabicbanglaquran&hl=bn&gl=BD)
- [GENUINE] Same app, 2026-03-11, 5★: no ads, works "নেট ছাড়া" (without internet), and "আরবি না পারার কারণে বাংলাতে কোরআন পড়তেছি… 29 পারা পড়া শেষ" [because I can't read Arabic I'm reading the Quran in Bangla… finished 29 paras]. — [Play: kutblog](https://play.google.com/store/apps/details?id=com.kutblog.arabicbanglaquran&hl=bn&gl=BD)
- [GENUINE] Same app, 2020-05-16, 5★, 161 helpful votes: "the Bengali pronunciation does not match with the Bengali translation and if the Bengali pronunciation was in colloquial language instead of Sadhu (সাধু) language, it would be easier to understand." — [Play: kutblog](https://play.google.com/store/apps/details?id=com.kutblog.arabicbanglaquran&hl=bn&gl=BD)
- [GENUINE, transliteration accuracy] Same app, 2020-05-15, 5★: "ওয়া + জের = উই pronounciation hobe. In surah Nas, pronounciation should be 'আল্লাযি ইউওয়াস্ উইসু' not 'বিসু'. in many places, this mistake prevails." It was later updated to say the developers were fixing it. A 2026-08-19, 1★ review flags "an anomaly in Bangla transliteration in Al-Jathiyah verse 28" and says reading uses "250+ MB of RAM". — [Play: kutblog](https://play.google.com/store/apps/details?id=com.kutblog.arabicbanglaquran&hl=bn&gl=BD)
- [GENUINE] Technobd Al-Quran, 2026-06-27, 5★: "৩৫ নং সূরা, আল ফাতির এর ১১ নং আয়াতের বাংলা উচ্চারণে কয়েকটি শব্দ বাদ পড়েছে।" [Some words are missing in the Bangla pronunciation of Surah Fatir 35:11.] Another review, 2026-10-14, 1★: the Bangla pronunciation of 35:8 omits "ওয়া ইয়াহদী মাইয়্যাশাউ". — [Play: Technobd](https://play.google.com/store/apps/details?id=com.technobd.alquran&hl=bn&gl=BD)
- [GENUINE, demand for Bangla uccharon of duas] Muslim Pro, 2020-04-23, 3★: "দোয়া গুলোর উচ্চারণ এবং অর্থ বাংলা দিলে আরো অনেক বেশি ভালো হতো" [It would be much better if the duas had Bangla pronunciation and meaning]. — [Play: Muslim Pro](https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro&hl=bn&gl=BD). Ibadah, 2026-07-18, 5★, 231 helpful votes: "ভাই দুয়া ও জিকিরের আরবি উচ্চারন টা বাংলায় দেন" [Brother, please give the Arabic pronunciation of the duas and dhikr in Bangla]. — [Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD). Muslim Bangla, 2026-11-01, 4★: "আবার arbir বাংলা উচ্চারণ add korun… doa, Quran porte kosto hoy" [please add the Arabic's Bangla pronunciation again… reading duas and Quran is hard]. — [Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)
- [GENUINE, audio as a pronunciation check] Deen, 2026-04-02, 3★: "অন্য কোনো দোয়ার অডিও দিলে উচ্চারণ করতে সুবিধা হয়… প্রতিটা দোয়ার অডিও দেওয়া তাহলে উচ্চারণ সহি পড়তে অনেক সুবিধা হয়" [audio for every dua would make correct pronunciation much easier]. — [Play: Deen](https://play.google.com/store/apps/details?id=com.deenislamic&hl=bn&gl=BD). Greentech Al Quran, 2026-08-28, 5★: "আমি আরবী অক্ষর, উচ্চারণ, অনেক কিছুই ভুলে গিয়েছিলাম। এই অ্যাপের মাধ্যমে অডিও উচ্চারণ শুনে শুনে ভুল গুলো ঠিক করি।" [I had forgotten Arabic letters and pronunciation; by listening to the audio I corrected my mistakes.] — [Play: Greentech Al Quran](https://play.google.com/store/apps/details?id=com.greentech.quran&hl=bn&gl=BD)
- [GENUINE, tafsir demand] Greentech Al Quran, 2026-01-08, 5★: "আরো ভালো হতো যদি বাংলা ভাষার আরো যত তাফসীর আছে সেগুলো যোগ করা হতো। তাফসীরে বায়যাবী, মারেফুল কোরআন" [better if more Bangla tafsirs were added: Tafsir al-Baydawi, Ma'ariful Quran]. Another review, 2025-07-06: "তাফসিরে জালালাইন বাংলা থাকলে আরো ভালো হতো" [Bangla Tafsir al-Jalalayn would be better]. — [Play: Greentech Al Quran](https://play.google.com/store/apps/details?id=com.greentech.quran&hl=bn&gl=BD). Technobd, 2022-04-17: "সংক্ষিপ্ত তাফসীর থাকলে আরো ভালো হতো আমাদের বুঝার জন্য" [a short tafsir would help us understand]. — [Play: Technobd](https://play.google.com/store/apps/details?id=com.technobd.alquran&hl=bn&gl=BD). Ibadah, 2020-07-29: asks for "ফজিলত, শানে নুযুল ও তাফসির" (virtues, reasons of revelation and tafsir). — [Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)
- [GENUINE, translation choice] kutblog, 2026-09-08: "ইসলামিক ফাউন্ডেশন এর অনুবাদ দিলে আরো ভালো হতো" [It would be better with the Islamic Foundation translation]. — [Play: kutblog](https://play.google.com/store/apps/details?id=com.kutblog.arabicbanglaquran&hl=bn&gl=BD). By contrast, a Technobd review, 2026-07-11, criticizes the IF translation's word choice: 'মহাপরাক্রান্ত' for Al-'Aziz. — [Play: Technobd](https://play.google.com/store/apps/details?id=com.technobd.alquran&hl=bn&gl=BD). A Greentech Quran review, 2024-07-09, asks the developers to replace "নারী" with "মহিলা" (two Bangla words for "woman") throughout the translation and tafsir on ideological grounds. — [Play: Greentech Al Quran](https://play.google.com/store/apps/details?id=com.greentech.quran&hl=bn&gl=BD)
- [GENUINE, font size and elderly] Muslims Day, 2025-12-15, 5★: "ফন্ট অনেক ছোট যাদের চোখে সমস্যা তাদের পড়তে অনেক কষ্ট হয়… ফন্ট বড় করে পড়া যায় এরকম একটি বাটন" [The font is very small; people with eye problems struggle. Please add a button to enlarge it.] — [Play: Muslims Day](https://play.google.com/store/apps/details?id=theoaktroop.appoframadan&hl=bn&gl=BD). PG Apps BD, 2026-03-28, 5★: "বাংলা অনুবাদে ব‍্যবহৃত বর্নের ফন্ট এক ধাপ বড় হলে বয়স্ক পাঠকের জন্য অধিকতর সুবিধা হত" [one step larger Bangla translation font would help elderly readers]. — [Play: PG Apps BD](https://play.google.com/store/apps/details?id=com.pgappsbd.all_quran_orthosho&hl=bn&gl=BD). kutblog, 2022-05-27, 5★, 150 helpful votes: "Arabic fonts are not so big… in my 10 inch tab they look very tiny." — [Play: kutblog](https://play.google.com/store/apps/details?id=com.kutblog.arabicbanglaquran&hl=bn&gl=BD)
- [GENUINE, typeface preference] Islami Jindegi, 2026-06-10, 5★: "কালপুরুষ ফন্টের ব্যবহার পাঠক বান্ধব। কিন্তু বর্তমান আপডেটে সূচিপত্রে সিস্টেম ফন্টের ব্যবহার… অশোভনীয়… ফন্ট সাইজ পরিবর্তন করতে গেলে অত্যধিক বড় হয়।" [Using the Kalpurush font is reader-friendly, but the system font in the new index looks unbecoming… changing the font size makes it far too big.] — [Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD). Bangla Hadith v10, 2026-04-29: asks for the "ওসমানী মাদানী" (Uthmani Madani) Arabic font. — [Play: Bangla Hadith](https://play.google.com/store/apps/details?id=com.hadithbd.app&hl=bn&gl=BD)
- [OWN-DATA] Of 76 font-related reviews, almost all are about size or typeface. I found no 2017–2026 review complaining of broken Bangla conjuncts (যুক্তাক্ষর) or Bijoy gibberish.
- [SECONDARY] Bijoy is an ASCII-mapped legacy encoding that needs a specific font such as SutonnyMJ, and without it the text shows as garbled Latin. Unicode Bangla conjunct problems are font or shaping-engine issues. Recommended Unicode fonts include Kalpurush, SolaimanLipi and Noto Sans Bengali. These are non-authoritative vendor and guide sites. — [bangladatetoday Bijoy vs Unicode](https://www.bangladatetoday.com/bijoy-vs-unicode-which-is-better.php); [Bijoy conversion errors guide](https://bijoy.converteraz.com/en/blog/common-bijoy-conversion-errors); [unicodefyi Bengali script guide](https://unicodefyi.com/guide/bengali-script-guide)
- [SECONDARY] A string in the GTAF/Greentech Quran app translation platform warns that reading the Quran via transliteration "can cause incorrect pronunciation and may hinder the proper learning of Tajweed." This is an app message, not a scholarly ruling. — [translate.gtaf.org string](https://translate.gtaf.org/checks/xml-tags/al-quran-android/strings/fa)
- [SECONDARY] In 2011 the Islamic Foundation digitised the Quran with a committee of ulama so it could be read online "with correct Arabic pronunciation" and in Bangla and English. — [Financial Express](https://today.thefinancialexpress.com.bd/print/move-to-digitise-the-holy-quran)

### Inferences
- Bangla উচ্চারণ is a must-have for this audience, but it is also a liability. Each transliteration needs proofreading against the Arabic, and the UI should frame উচ্চারণ as a learning aid with audio, given the tajweed caveat that even a GTAF string acknowledges.
- Offer multiple named Bangla translations: Islamic Foundation, plus others users name. Word choices are contested, so translation provenance should be shown.
- Default to a large Bangla font (Kalpurush, SolaimanLipi or Noto Sans Bengali, served as a webfont) with an obvious size control. Treat Bijoy/Unicode as a solved, back-end data-hygiene issue rather than a user-facing need. That last point rests on the near-absence of rendering complaints.

### Gaps
- No academic study was found that measures Bangla transliteration accuracy, and no Bangladeshi scholarly statement specifically on Bangla-script uccharon of the Quran was found in English or Bangla searches.
- No quantitative data was found on how many Bangladeshi users can read Arabic script.

---

## Q3. Trust drivers, and madhhab or sectarian sensitivity

### Takeaway
Users treat these as markers of authenticity:
- **References and grading:** "সনদ সহীহ" (sahih chain), "authentic references", detailed references, and links to the original books.
- **Responsiveness:** a real scholar who answers questions (Muslim Bangla's Q&A gets praise and is copied as a feature request).
- **Institutions:** the Islamic Foundation as the benchmark for prayer times.

Madhhab sensitivity shows up in two opposite ways:
- Hanafi users are alarmed when times do not match "our Hanafi madhhab" (one asked whether the app is "for Shias").
- Ahl-e-Hadith users ask for their own Asr time.
- Some users dislike being asked to pick a madhhab at all ("We are all Muslims").

Explicit sectarian fights in reviews are rare: 8 of 11,671 reviews [OWN-DATA].

### Cited Findings
- [GENUINE] IRD Dua & Ruqyah, 2021-11-27, 5★: "ডিজাইন যেমন চমৎকার, সনদ তেমনই সহীহ।" [The design is as excellent as the chains of narration are sahih.] — [Play: IRD Dua](https://play.google.com/store/apps/details?id=com.ihadis.dua&hl=bn&gl=BD)
- [GENUINE] Hisnul Muslim Bangla (Greentech), 2024-08-02, 5★, 32 helpful votes: "The best thing is all of them have authentic references." — [Play: Hisnul Muslim BN](https://play.google.com/store/apps/details?id=com.greentech.hisnulmuslimbn&hl=bn&gl=BD)
- [GENUINE] Bangla Hadith v10, 2026-03-20, 5★, 21 helpful votes: "Offline reading is a big plus… However, the search function could be improved, and references should be more detailed." — [Play: Bangla Hadith](https://play.google.com/store/apps/details?id=com.hadithbd.app&hl=bn&gl=BD)
- [GENUINE] IRD Al Hadith, 2020-10-02, 5★: "Provide link to original pdf books directly from each hadith… for more effective authentic verification." Another review, 2026-05-20, 4★: "I can't understand the updated reference version… (বুখারী, মুসলিম, মিশকাত হা/১৮২২). I can't find the exact hadith." Two further reviews, 2022-09-14 and 2023-09-15, both 1★: "হাদিসের অনুবাদ এবং তাখরিজে ভুল রয়েছে" [errors in translation and takhrij] and "কিছু তাহকীক ভুল পাওয়া গেছে" [some tahqiq (grading) errors found]. — [Play: IRD Al Hadith](https://play.google.com/store/apps/details?id=com.ihadis.ihadis&hl=bn&gl=BD)
- [GENUINE, grading conflict, location unknown] Greentech Hadith Collection, 2026-06-02, 5★: "for some hadiths mentioned Daif from Darussalam whereas same hadiths declared Sahih/Hasan by Sheikh Albani… Kindly rectify." — [Play: Greentech Hadith](https://play.google.com/store/apps/details?id=com.greentech.hadith&hl=bn&gl=BD)
- [GENUINE, scholar Q&A] Muslim Bangla, 2026-10-23, 5★: "ইসলামী প্রশ্নঃ করেছি এবং ২ দিনের ভিতর সঠিক সমাধান পেয়েছি।" [I asked an Islamic question and got a correct answer within 2 days.] — [Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD). Islami Jindegi, 2025-09-08, 5★: "মুসলিম বাংলার মতো প্রশ্ন করার অপশন যোগ করুন" [Add a question option like Muslim Bangla's]. Another Islami Jindegi review, 2020-11-26: "মুফতি দেলওয়ার হোসাইন সাহেবের বই গুলো যদি যোগ করতেন" [please add Mufti Delwar Hossain's books]. This shows that named scholars are a pull factor. — [Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD)
- [GENUINE, named preachers as a pull] kutblog, 2024-03-28, 4★: "মিজানুর রহমান আজহারির কন্ঠ এবং আবু তৃহা আদনান ভাইয়ের কন্ঠ এ্যাড করেন প্লিজ" [please add the voices of Mizanur Rahman Azhari and Abu Toha Adnan]. — [Play: kutblog](https://play.google.com/store/apps/details?id=com.kutblog.arabicbanglaquran&hl=bn&gl=BD). Muslims Day, 2025-03-26: thanks the developers for adding a "মাহফিল" (waz mahfil) feature. — [Play: Muslims Day](https://play.google.com/store/apps/details?id=theoaktroop.appoframadan&hl=bn&gl=BD)
- [GENUINE, Hanafi expectation] Ibadah, 2022-07-03, 1★: "ভাই আমাদের হানাফি মাযহাবের সময়ের সাথে এই সময়সূচী মিলেনা কেনো???? তাহলে কি এটা শীয়াদের জন্যে ভাই" [Brother, why doesn't this schedule match our Hanafi madhhab time? Is it for Shias then?] Another review, 2025-06-21: "এই সময়সূচি কি হানাফি মাজহাব অনুযায়ী" [Is this schedule per the Hanafi madhhab?] — [Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)
- [GENUINE, Ahl-e-Hadith request] Muslim Bangla, 2026-08-04, 5★: "ভালো শুধু হানাফিদের জন্য নয় আহলে হাদিসদের জন্য টাইম থাকা উচিত" [Good, but there should be times for Ahl-e-Hadith too, not only Hanafis]. — [Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD). Deen, 2026-04-02, 3★: "এটা কি শুধু হানাফী মাযহাবের জন্য? নামাজের সময়সূচী তে শুধু হানাফী মাযহাবের আসে অন্য মাযহাবের কেনো এ্যাড করেন নাই?" [Is this only for the Hanafi madhhab? The prayer schedule only has Hanafi; why not other madhhabs?] — [Play: Deen](https://play.google.com/store/apps/details?id=com.deenislamic&hl=bn&gl=BD)
- [GENUINE, aversion to labels] Ibadah, 2026-04-17, 4★: "পছন্দের মাযহাব সম্পর্কে প্রশ্ন করাটা ভালো লাগলো না। আমরা সবাই মুসলিম 🥲" [I didn't like being asked my preferred madhhab. We are all Muslims.] Another review, 2026-03-08, 1★: "What does the Hanafi Madhhab mean…? Why do we have to select these? On what basis is there such a division in Islam?" — [Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)
- [GENUINE, Sufi content objection] Islami Jindegi, 2022-07-10, 1★: "এখানে গাউসুল আজম মাইজভাণ্ডারীর বয়ান আছে।" [This contains sermons of Gausul Azam Maizbhandari.] The objection is implied by the 1★ rating. — [Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD)
- [GENUINE, women's fiqh precision] Deen, 2026-03-12, 1★: "মহিলাদের নামাজের পদ্ধতিতে একটি অংশের সঠিক পদ্ধতি বর্ণনা করা হয়নি। মহিলাদের সিজদার ব্যাপারটা পরিষ্কার করা হয়নি।" [Part of the women's prayer method is not described correctly; the women's sajdah is not made clear.] Women's prayer posture is a known Hanafi versus Ahl-e-Hadith difference; that link is my inference. — [Play: Deen](https://play.google.com/store/apps/details?id=com.deenislamic&hl=bn&gl=BD)
- [SECONDARY] Bangladeshi news outlets publish daily prayer times citing Islamic Foundation as the source. One source states that IF's permanent district schedules follow the Hanafi madhhab, but this comes from a low-authority aggregator and is not verified against an IF document. — [Jagonews24 prayer schedule](https://www.jagonews24.com/religion/news/1143651); [teachers.gov.bd blog](https://www.teachers.gov.bd/blog/details/827434)
- [SECONDARY] Religious misinformation on Facebook: a Jahangirnagar University study of 7,350 Facebook comments across five religious-misinformation cases found 94.1% of reactions were negative, and 69.3% of users tended to believe the misinformation while 25.9% recognised and rejected it. These cases were communal or political incidents, not fake hadith. — [UNB, 2024-06-04](https://unb.com.bd/category/Bangladesh/alarming-rise-in-religious-misinformation-on-social-media-in-bangladesh-new-study-reveals/136804); [Data in Brief dataset](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10405184/)
- [SECONDARY] Rumor Scanner logged 2,919 false claims in Bangladesh in 2024, 2,330 of them on Facebook. No fake-hadith breakdown was found. — [Dhaka Tribune](https://www.dhakatribune.com/bangladesh/370280/rumor-scanner-record-2-919-false-claims-detected)
- [SECONDARY] Background from earlier notes, re-cited and not re-fetched: in Rajshahi, Ahl-i-Hadith reformers contest local Hanafi practice. — [Edinburgh thesis](https://era.ed.ac.uk/handle/1842/5690)

### Inferences
- The safest content stance is a Hanafi default for prayer times, matching IF and the majority expectation. Add an optional Asr setting labelled neutrally by method (for example "আসর: দ্বিতীয় ছায়া / প্রথম ছায়া", i.e. second or first shadow) rather than by sect, so that "we are all Muslims" users are not asked to pick a camp.
- For fiqh-difference topics such as women's salah, show sources for each view.
- On hadith, show the grader by name (Albani, Darussalam, IRD tahqiq and so on), give the full source book and number, link to the original, and include a report-error flow with visible responses.
- Named living scholars and preachers drive interest but carry polarisation risk. Curate them as attributed, opt-in collections rather than featuring them by default.

### Gaps
- No reviews, news or academic work found on users accusing a specific BD site or app of Salafi or Deobandi bias in its content (as opposed to prayer-time settings).
- No data found on which Bangla Quran translation is most preferred.
- Facebook and YouTube comment evidence on trust (for example "রেফারেন্স দিন", "please give a reference") could not be retrieved.

---

## Q4. Bangladesh-specific requirements: evidence of actual relevance

### Takeaway
The evidence of real relevance is strong for:
- IF-matched, district-level (and some users ask upazila-level) prayer and Sehri/Iftar times;
- a BD moon-sighting Hijri calendar, since Bangladesh was one day behind Saudi Arabia for both Eids in 2026 and users complain about wrong or stale Arabic dates;
- a Bangla calendar date (বঙ্গাব্দ);
- offline use and small size;
- large fonts for elderly users.

The evidence is moderate for data cost, low-end devices and the gender gap; the secondary data is real but not tied to Islamic-app reviews. There is little to no evidence of Bijoy/Unicode rendering being a current user problem.

### Cited Findings
**District, IF-matched and upazila prayer and Sehri/Iftar times**
- [GENUINE] Ibadah, 2020-04-10, 5★, 188 helpful votes: "i didn't find any namaz schedule changing system with division and district… in Bangladesh there is fixed namaz schedule for each div[ision]." — [Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)
- [GENUINE] Ibadah, 2020-10-31, 5★, 196 helpful votes: "the finest app for Muslims in Bangladesh. It has separate timings for all the districts." — [Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)
- [GENUINE] Ibadah, 2020-04-25, 2★: "আপনারা দিয়েছেন বাংলাদেশের সময় অথচ ইসলামিক ফাউন্ডেশন এর সময় অনুযায়ী না। ভুল টাইম দিয়ে মানুষের রোজা নামাজ নষ্ট করার যত চেষ্টা। দয়া করে নামাযের সময় টা ইসলামিক ফাউন্ডেশন এর সময়,অনুযায়ী করে দিন" [You've given Bangladesh times, but not per the Islamic Foundation. Wrong times ruin people's fasts and prayers. Please follow Islamic Foundation times.] — [Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)
- [GENUINE] Ibadah, 2026-10-10, 5★: "একমাত্র এই অ্যাপটিতেই সঠিক সময় দেয়া হয়েছে। আর প্রাই অ্যাপে ৩/৫ মিনিট কম বেশি দেওয়া হয়… ইফতারের জন্য তত সঠিক টাইম খুব জরুরী।" [Only this app gives the correct time; most apps are 3–5 minutes off… accurate time is very important for iftar.] Another review, 2021-10-16: times seem "দু এক মিনিট এদিক সেদিক" (a minute or two off) per district. — [Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD)
- [GENUINE] Muslims Day, 2025-03-01, 5★: "উপজেলাভিত্তিক সময়সূচী ইফতার ও সেহরীর জন্য দেখালে ভালো হতো" [It would be good to show upazila-level Sehri/Iftar schedules]. — [Play: Muslims Day](https://play.google.com/store/apps/details?id=theoaktroop.appoframadan&hl=bn&gl=BD). Technobd, 2026-08-16: the Sylhet area "আম্বরখানা" (Amberkhana) cannot be found in the prayer-time location list. — [Play: Technobd](https://play.google.com/store/apps/details?id=com.technobd.alquran&hl=bn&gl=BD)
- [GENUINE] নামাজের সময়সূচি (Amader Lab, BD), 2023-04-13, 3★, 75 helpful votes: "the time is not accurate. I missed my suhoor only because I followed the time on the app… even though I turned 'GPS' the time was inaccurate." — [Play: Amader Lab](https://play.google.com/store/apps/details?id=com.creativeapps.salat_times&hl=bn&gl=BD)
- [SECONDARY] 2026 Ramadan reporting says other districts derive times by adding or subtracting up to 9 minutes from Dhaka. Sehri ends at the district's eastern-edge time and iftar follows its western-edge time. — [Ittefaq](https://www.ittefaq.com.bd/775700/%E0%A6%9A%E0%A6%B2%E0%A6%A4%E0%A6%BF-%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%B0%E0%A6%AE%E0%A6%9C%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A6%BE%E0%A6%B9%E0%A7%8D%E2%80%8C%E0%A6%B0%E0%A6%BF-%E0%A6%93-%E0%A6%87%E0%A6%AB%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A6%AE%E0%A7%9F%E0%A6%B8%E0%A7%82%E0%A6%9A%E0%A6%BF-%E0%A6%86%E0%A6%9C)
  - **Conflict:** Jugantor reported that IF called the "±9 minutes from Dhaka" method "ভুল ও ভিত্তিহীন" (wrong and baseless), because IF now publishes a separate schedule for every district. I saw this only in a search snippet (the page returned 403), and its date is unclear. — [Jugantor](https://www.jugantor.com/islam-life/1057413)
  - Earlier years' reports (2021–2023) cited +11/−10 minutes. — [bdnews24 2023](https://bangla.bdnews24.com/bangladesh/5t2b1y0622); [Ittefaq](https://www.ittefaq.com.bd/230964/%E0%A6%B8%E0%A7%87%E0%A6%B9%E0%A6%B0%E0%A6%BF-%E0%A6%93-%E0%A6%87%E0%A6%AB%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A6%AE%E0%A7%9F%E0%A6%B8%E0%A7%82%E0%A6%9A%E0%A6%BF-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B6)
- [SECONDARY] On 25 Feb 2026, divisional iftar times were Dhaka 6:01, Sylhet 5:54 and Rajshahi 6:07, a 13-minute spread across the country. — reported in the Bangla search results summarising [Deshrupantor](https://www.deshrupantor.com/498057) and [ITV BD](https://www.itvbd.com/others/259257/%E0%A7%AD-%E0%A6%B0%E0%A6%AE%E0%A6%9C%E0%A6%BE%E0%A6%A8-%E0%A6%95%E0%A7%8B%E0%A6%A8-%E0%A6%AC%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%97%E0%A7%87-%E0%A6%95%E0%A6%96%E0%A6%A8-%E0%A6%87%E0%A6%AB%E0%A6%A4%E0%A6%BE%E0%A6%B0-%E0%A6%86%E0%A6%9C). The exact figures came from search summaries, so verify them.

**Moon sighting and Hijri date**
- [SECONDARY] Eid-ul-Fitr 2026: Saudi Arabia on Friday 20 March; Bangladesh on Saturday 21 March, because the Shawwal moon was not sighted in BD on 19 March. bdnews24 notes that BD "traditionally" celebrates a day after Saudi Arabia. — [Daily Star](https://online-d11.thedailystar.net/news/bangladesh/news/eid-ul-fitr-saturday-shawwal-moon-not-sighted-4132701); [bdnews24, 19 Mar 2026](https://bdnews24.com/bangladesh/8618af4cfd38)
- [SECONDARY] Eid-ul-Azha 2026: Saudi Arabia on 27 May; Bangladesh on 28 May. The National Moon Sighting Committee met at Baitul Mukarram on 18 May 2026, and the Zilhajj moon was seen over Cox's Bazar. — [bdnews24, 18 May 2026](https://bdnews24.com/bangladesh/a11a17f999fc); [Financial Express](https://today.thefinancialexpress.com.bd/print/eid-ul-azha-to-be-celebrated-on-may-28-1779125072); [Ittefaq English](https://en.ittefaq.com.bd/16594/bangladesh-to-celebrate-eid-ul-azha-on-may-28)
- [GENUINE] Islami Jindegi, 2022-12-25, 3★: "আরবি তারিখ চাঁদ দেখার উপরে নির্ভর করে দেখায় না অনেক সময় ভুল হচ্ছে" [The Arabic date isn't based on moon sighting; it's often wrong]. Another review, 2026-05-28: "আরবি তারিখ আপডেট হয়না" [the Arabic date doesn't update]. — [Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD). Muslim Bangla, 2026-05-16, 1★: "ভালো না। আরবি তারিখ ভুল দেয়" [Not good. Gives the wrong Arabic date]. Another review, 2026-11-01: "আরবী তারিখ মাগরিবের পর কেন চেনজ হয়না… মাগরিবের পর থেকে আরবী দিন শুরু হয়" [Why doesn't the Arabic date change after Maghrib? The Arabic day starts at Maghrib]. — [Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)

**Bangla calendar date (বঙ্গাব্দ)**
- [GENUINE] Dawat-e-Islami Prayer Times, 2025-01-26, 5★, 16 helpful votes: "অ্যাপটির সাথে বাংলা মাস এড করে দিলে আমাদের জন্য উপকার হতো। নতুবা বাংলা মাসের জন্য আরেকটা অ্যাপ নামাতে হয়।" [Adding the Bangla month would help us; otherwise we have to download another app for it.] — [Play: Dawat-e-Islami](https://play.google.com/store/apps/details?id=com.dawateislami.namaz&hl=bn&gl=BD). Muslims Day, 2025-07-19: "বাংলা তারিখ সঠিক নয়" [the Bangla date is wrong]. Deen, 2025-09-12: add the Bangla date to the widget. Muslim Bangla, 2026-10-23: add English and Bangla dates. — Play listings: [Muslims Day](https://play.google.com/store/apps/details?id=theoaktroop.appoframadan&hl=bn&gl=BD), [Deen](https://play.google.com/store/apps/details?id=com.deenislamic&hl=bn&gl=BD), [Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)

**Azan and alarm reliability (Android/OEM)**
- [GENUINE] Muslim Bangla, 2023-03-30, 4★, 110 helpful votes: "worked perfectly on Android 12, but in Android 13 the full Azan doesn't play, only a beep… I've uninstalled." Another review, 2026-03-10, 1★: "নামাজের এলার্ম, সময় মত হয় না কেন?" [Why doesn't the prayer alarm go off on time?] Another, 2026-09-23, 1★ (Banglish): "fozor a onk somoy baje onk somoy baje na" [at Fajr it sometimes rings, sometimes doesn't]. — [Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)
- [GENUINE] Amader Lab নামাজের সময়সূচি, 2019-09-03, 1★: "পরের দিন থেকে এক ওয়াক্ত এর ও নামাযের এলার্ম আর এলোই না😮 আমার ফযর এর নামাজ কাযা হয়ে গেলো,এটার দায় কি নিবে??" [From the next day not a single prayer alarm came; my Fajr became qaza. Who will take responsibility for this?] — [Play: Amader Lab](https://play.google.com/store/apps/details?id=com.creativeapps.salat_times&hl=bn&gl=BD)
- [GENUINE] Deen, 2025-08-30: "Samsung Galaxy M12 ফোনটিতে নামাজের সময়সূচির উইজেট সেট করা যাচ্ছে না" [can't set the prayer-time widget on a Samsung Galaxy M12, a budget phone]. — [Play: Deen](https://play.google.com/store/apps/details?id=com.deenislamic&hl=bn&gl=BD)

**Offline, data cost and size**
- [GENUINE] Ibadah, 2023-10-08, 4★, 40 helpful votes: "এই আপ কি অফলাইনেও সঠিক সময় দেখায়?" [Does this app show correct times offline too?] — [Play: Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD). Muslim Pro, 2024-06-13, 5★: "নেট ছাড়া অডিও কোরআন তেলাওয়াত শোনা যাচ্ছে এটা সবচাইতে ভালো আমার কাছে" [Being able to hear Quran recitation without the net is the best part for me]. — [Play: Muslim Pro](https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro&hl=bn&gl=BD)
- [GENUINE] IRD Al Hadith, 2019-02-01, 5★, 59 helpful votes: some users got the app via SHAREit and then had to download the "harf nokta" content on mobile data, "so it was expensive for them". Another review, 2020-01-03: "this app size is huge." — [Play: IRD Al Hadith](https://play.google.com/store/apps/details?id=com.ihadis.ihadis&hl=bn&gl=BD)
- [GENUINE] Technobd, 2024-03-24, 3★: "After downloading 70+ Surah with Bangla translation the storage goes upto 5.90gb… Online audio features should be available." — [Play: Technobd](https://play.google.com/store/apps/details?id=com.technobd.alquran&hl=bn&gl=BD). Islami Jindegi, 2022-05-29, 1★: "অফ লাইন লিখে রাখছেন অথচ অফলাইনে পড়া যাচ্ছে না" [You say offline, yet it can't be read offline]. — [Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD)
- [SECONDARY] Mobile data price (Bonik Barta, 6 Sep 2024): retail is about BDT 25–35 per GB (headline figure). Operators' cost per GB is BDT 2.25–5.25 (average about 4); Grameenphone's is BDT 2.26 and Robi's 5.28. Customers feel "deprived and overcharged". — [Bonik Barta English](https://en.bonikbarta.com/exclusive/Y1mr7cn0S586gKMz/)
- [SECONDARY] Cable.co.uk 2022 put BD at about Tk 33 ($0.32) per GB, 12th cheapest globally. A 2023 figure is cited as $0.23 in one source and $0.70 in another; this conflict is unresolved, and the figures come from search snippets. — [Dhaka Tribune "cheap but slow"](https://www.dhakatribune.com/business/297107/bangladesh-has-cheap-but-slow-mobile-data); [Daily Star tag page](https://tds-images.thedailystar.net/tags/worldwide-mobile-data-pricing-2022)
- [SECONDARY] Ookla Speedtest Global Index for BD mobile:
  - March 2024: 112th of 148, median 24.59 Mbps download and 11.53 Mbps upload. — [Daily Star](https://www.thedailystar.net/tech-startup/news/bangladesh-drops-global-mobile-internet-speed-ranking-3597346)
  - November 2024: 88th of 111, 28.26 Mbps (New Age reports it as an "average"). — [New Age, 3 Jan 2025](https://www.newagebd.net/post/telecom/254439/bangladesh-inches-up-in-mobile-internet-ranking-ookla)
  - January 2025: 108th, 23.85 Mbps. — [Daily Star](https://www.thedailystar.net/business/economy/news/bangladesh-slumps-global-mobile-internet-rankings-3553121)
  - November 2025: 86th of 103, 41.72 Mbps, against a global median of 103.01. This is from a search snippet. — [TBS infographic](https://www.tbsnews.net/infograph/numbers/fastest-mobile-internets-world-1337251)
  - No 2026 Ookla figure was found. DataReportal cites a median of 36.84 Mbps (Ookla, Aug 2025). — [DataReportal 2026](https://datareportal.com/reports/digital-2026-bangladesh)

**Low-end devices**
- [SECONDARY, from earlier notes; the Daily Sun page returned 403 on re-fetch] In IDC Q3 2025 shipments, TECNO had 20.4%, Infinix 18.2% and Xiaomi 14.9%. In Q1 2024 (Counterpoint), the sub-$100 segment was 33% of the market. — [Daily Sun](https://www.daily-sun.com/other/838292/value-for-money-redefines-bangladesh-s-smartphone-market); [iConnect007/Counterpoint](https://iconnect007.com/article/141343/bangladesh-mobile-phone-market-grew-17-in-the-first-quarter-of-2024/141340)
- [SECONDARY] Android is about 91% of BD mobile OS share (StatCounter, Aug 2026). — [StatCounter](https://gs.statcounter.com/os-market-share/mobile/bangladesh)

**Women and gender gap**
- [SECONDARY] GSMA 2024 data cited by Dhaka Tribune: mobile internet adoption is 40% among men and 24% among women, the largest gap in Asia at the time. A later comparison cites 26% for women; these figures are not reconciled. — [Dhaka Tribune](https://www.dhakatribune.com/amp/bangladesh/346828/bangladesh-tops-asia-in-mobile-internet-gender-gap); [GSMA Mobile Gender Gap 2025](https://www.gsma.com/wp-content/uploads/2025/12/The-Mobile-Gender-Gap-Report-2025.pdf)
- [OWN-DATA] Women-specific reviews are rare: about 61 keyword matches, many of them false positives. The women-related reviews found concern indecent ads, women's salah method and translation wording. I found no review asking for menstruation fiqh or a "not praying" tracker mode.

**Elderly users and low digital literacy**
- [GENUINE] See the font-size reviews in Q2: "বয়স্ক পাঠকের জন্য" (for elderly readers), "যাদের চোখে সমস্যা" (those with eye problems), and the kutblog 2026-04-13 review about old people who cannot learn Arabic.
- [GENUINE] IRD Al Hadith, 2020-01-03: "Even I had installed this on my mom's phone." — [Play: IRD Al Hadith](https://play.google.com/store/apps/details?id=com.ihadis.ihadis&hl=bn&gl=BD). Islami Jindegi, 2026-03-10: "এর আগেও আব্বুর ফোনে কুরআন, দোয়া, মাসাআলা… পাঠ করতাম" [Before this I used to read Quran, duas and masa'il on my father's phone]. This shows shared and family phones. — [Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD)
- [GENUINE] Muslim Bangla, 2026-07-23, 1★: "new version… before you can turn off alarm but now its too complicated, old version was good." Islami Jindegi, 2023-09-13, 5★, 146 helpful votes: "Give an option to set location manually like before. Please don't make location to GPS only." — [Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD); [Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD)

### Inferences
- Ship an "IF-exact" district timetable (64 districts) as the default, with an optional upazila list and a manual location picker that needs no GPS. Show the source ("ইসলামিক ফাউন্ডেশন অনুযায়ী", per Islamic Foundation), because a 2–5 minute discrepancy is enough for users to call an app wrong.
- The Hijri date must follow the BD National Moon Sighting Committee, roll over at Maghrib, and be correctable quickly (±1 day). Show the Bangla calendar date next to the Gregorian and Hijri dates.
- A website can avoid the alarm and permission problems entirely. It cannot ring the azan reliably, though, so it should not promise alarms. PWA push is likely unreliable on budget Android phones; this is an inference and was not tested.
- Mobile data costs about BDT 25–35 per GB at retail and median speeds are roughly 25–40 Mbps. Pages should therefore be text-first and avoid heavy images, with audio streamed on demand rather than as bundled downloads.

### Gaps
- I could not fetch the IF website or its PDF timetables to confirm the calculation method (Fajr/Isha angles, Hanafi Asr) or the current district-versus-offset policy.
- No 2026 Ookla or Opensignal figure was retrieved, the GSMA SOMIC 2025 affordability report contents were not obtained, and BTRC 2026 figures were not obtained.
- No device RAM distribution for BD was found.
- No data was found on elderly or low-literacy users' web behaviour. The evidence is limited to font-size and "parent's phone" reviews.

---

## Q5. What makes users return daily?

### Takeaway
In the users' own words, the daily anchors are:
- prayer times and their alarms (and the alarm failing is the strongest leave-reason);
- a regular Quran-reading habit, often after Fajr or in small daily portions, leading to a completed khatam;
- learning one dua at a time with audio;
- an amal or salah tracker, which is one of the most up-voted feature requests;
- a home-screen widget showing time remaining to the next prayer;
- Ramadan, which is the onboarding moment.

Notifications are double-edged: users complain about nagging and stuck notifications as often as they ask for reminders.

### Cited Findings
- [GENUINE] Greentech Al Quran, 2026-08-28, 5★: "এই অ্যাপ থেকেই প্রতিদিন সকালে আমি কুরআন পড়ে গত ৪-৫মাসের মধ্যেই খতম দিয়ে ফেলি। আলহামদুলিল্লাহ আজ আমার জীবনের প্রথম খতম দেয়া।" [Reading the Quran every morning in this app, I finished a khatam within 4–5 months. Alhamdulillah, today I completed the first khatam of my life.] — [Play: Greentech Al Quran](https://play.google.com/store/apps/details?id=com.greentech.quran&hl=bn&gl=BD)
- [GENUINE] Quran Majeed, 2023-04-04, 5★, Bangla: "রমজান মাসের ওসিলায় কোরআন এর অ্যাপস ডাউনলোড করার পর প্রতিদিন ফজর নামাজ পড়ে এসে কোরআন ত…" (my excerpt was cut off here) [After downloading the Quran app because of Ramadan, every day after praying Fajr I come back and (read) the Quran…] — [Play: Quran Majeed](https://play.google.com/store/apps/details?id=com.pakdata.QuranMajeed&hl=bn&gl=BD)
- [GENUINE] Hisnul Muslim BN, 2023-03-29, 5★: "During this Ramadan of 2023 I am using this app for learning Dua… The added audio really helps… after every Fard Salah I try to learn one dua." — [Play: Hisnul Muslim BN](https://play.google.com/store/apps/details?id=com.greentech.hisnulmuslimbn&hl=bn&gl=BD)
- [GENUINE] Muslims Day, 2025-02-24, 5★, 181 helpful votes: requests a prayer tracker. Another review, 2020-12-16, 5★, 130 helpful votes (repeated 2026-07-29): wants a "Tracker to keep track of our Qaza prayers, daily Quran recitation and Fasting… Daily+Monthly+Yearly… 'in time', 'late', 'not done'." — [Play: Muslims Day](https://play.google.com/store/apps/details?id=theoaktroop.appoframadan&hl=bn&gl=BD)
- [GENUINE] Muslim Bangla, 2026-10-23, 5★: "এটাতে আমল এর হিসাব রাখা যায় যা একজন প্রাকটিসিং মুসলিমের জন্য নিজেকে উৎসাহিত করার জন্য ভালো একটা ব্যাপার।" [You can keep account of your amal, which is good motivation for a practising Muslim.] Another review, 2026-10-23: "নামাজের রিমাইনিং টাইম আর কতক্ষণ আছে. screen widgets এড করলে খুব ভালো হতো।" [A screen widget showing how much time remains for the prayer would be great.] — [Play: Muslim Bangla](https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=bn&gl=BD)
- [GENUINE, location unknown] Wemu, 2026-08-26, 5★, 60 helpful votes: "adding a Quran reading streak would make it even better… reminders aren't always enough motivation." — [Play: Wemu](https://play.google.com/store/apps/details?id=com.fyxtech.muslim&hl=bn&gl=BD)
- [GENUINE] Islami Jindegi, 2021-03-12, 542 helpful votes, the most up-voted review in that app's sample: "I recite Quran everyday using this app but… I cannot recite the 'কোলকাতা ছাপা' section." This is the Kolkata-print style Mushaf that is familiar in the subcontinent. — [Play: Islami Jindegi](https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=bn&gl=BD)
- [GENUINE, notification fatigue] Muslims Day, 2026-06-12, 4★: the notification "প্রতি কদমে ১ বছরের সওয়াব!" [1 year of reward for every step!] kept arriving "even if I turned off the notification from settings." kutblog, 2026-08-19, 1★: "Everytime I open the app, it ask for turning on the notification… so annoying." Greentech Al Quran, 2026-07-26, 3★: "not to give notifications everytime I open the app." — Play listings: [Muslims Day](https://play.google.com/store/apps/details?id=theoaktroop.appoframadan&hl=bn&gl=BD), [kutblog](https://play.google.com/store/apps/details?id=com.kutblog.arabicbanglaquran&hl=bn&gl=BD), [Greentech](https://play.google.com/store/apps/details?id=com.greentech.quran&hl=bn&gl=BD)
- [GENUINE, Ramadan] Ibadah, 2021-04-15, 5★, 39 helpful votes: "রমজান মাসের জন্য খুবই উপকারী" [very useful for Ramadan]. Muslims Day, 2026-03-31: "যদি আগের মতো ইফতার সেহরির সময় সাইরেন থাকতো ভালো হত" [it would be good to have the iftar/sehri siren like before]. — Play listings: [Ibadah](https://play.google.com/store/apps/details?id=com.crossappers.prayerapp&hl=bn&gl=BD), [Muslims Day](https://play.google.com/store/apps/details?id=theoaktroop.appoframadan&hl=bn&gl=BD)
- [GENUINE, mosque context] IRD Al Hadith, 2026-10-28, 5★: "মসজিদ এ নামায পড়ার সময় মোবাইল রিংটোন একটা বড়ো সমস্যা… অটোমেটিক্যালি… সাইলেন্ট করার ফিচার" [Phone ringtones during prayer in the mosque are a big problem; please add automatic silencing]. — [Play: IRD Al Hadith](https://play.google.com/store/apps/details?id=com.ihadis.ihadis&hl=bn&gl=BD)
- [OWN-DATA] Daily-habit words (প্রতিদিন, নিয়মিত, daily and similar) appear in 340 reviews, 312 of them rated 4–5★. Notification or alarm words appear in 263 reviews, and 75 of those are ≤3★. In other words, reminders appear in both praise and complaints, and alarm failures cluster in 1★ reviews.

### Inferences
- For a website, the realistic daily loop is:
  - the next-prayer and Sehri/Iftar card for the user's district, which loads instantly;
  - "today's portion", meaning a few ayat or one dua with Bangla meaning, উচ্চারণ and audio, with khatam or progress tracking that works without login, in local storage;
  - a Ramadan mode.
- Notifications should be opt-in, rare and fully switchable. Nagging is an explicit complaint.
- Since Ramadan is when people adopt these apps ("রমজান মাসের ওসিলায়", "on the occasion of Ramadan"), launch or marketing timing around Ramadan 1448 (expected around Feb 2027 in BD; see the earlier notes) matters. This is an inference.

### Gaps
- There is no retention or DAU data for any BD Islamic app or website.
- Daily hadith or ayah push as a return driver is not directly evidenced in BD Bangla reviews; only general "daily reminders" praise appears (Greentech Hadith, 2021, English).
- Tasbih counters are mentioned in only 47 reviews, mostly as requests for custom dhikr. This is weak evidence of tasbih as a daily driver.
- Web-specific behaviour (Google search for "আজকের নামাজের সময়সূচি", i.e. "today's prayer schedule") is outside this corpus; see the sibling search-demand notes.
