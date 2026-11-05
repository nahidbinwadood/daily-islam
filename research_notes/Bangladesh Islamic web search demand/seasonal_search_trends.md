# Seasonal calendar of Bangladesh Islamic search demand (Islamic and Gregorian year)

Research date: 2026-11-05. All URLs accessed 2026-11-05.

**How the data was gathered, and what each label means**
- **MEASURED.** Google Trends data was pulled live through the Trends widget API (`/trends/api/explore` and then `/widgetdata/multiline`, geo=BD, tz=UTC+6, `today 5-y` weekly, 31 Oct 2021 – 7 Nov 2026), via Python/curl on 2026-11-05. **Access worked.** The homepage returned HTTP 429, but every explore/multiline call succeeded. The numbers below are copied from those responses. Trends values are **relative indices (0–100 within each request), not search counts.** Each request held 5 terms. "নামাজের সময়" (prayer time) was the anchor in all of them, so any term can be compared across requests as a multiple of the anchor's 5-year **median** week. That multiple is written "×anchor-median" below.
- **OBSERVED.** Google Autocomplete (`suggestqueries.google.com`, `hl=bn&gl=bd`) is a snapshot taken 2026-11-05. It shows **what** people type, not how much.
- **INFERRED.** These are my own interpretations and are labelled as such.
- **Caveats on the data.** (1) Trends rounds to integers, so small terms (values under about 5) are imprecise. (2) Exact-phrase spelling matters a lot. "সূরা কাহাফ" is far more searched than "সূরা কাহফ", and the same applies to হজ/হজ্জ and ওমরাহ/ওমরা. (3) "ঈদ" is a broad term that includes holidays, films and entertainment, so it is not pure religious demand. (4) Weekly buckets run Sunday to Saturday.

Trends request IDs used in the citations: T1–T10 are the 5-year weekly pulls and TD is the 90-day daily pull. Their URLs are defined as reference links at the end of this file.

## 1. Google Trends BD: relative interest over 5 years and peak-to-baseline ratios

### Takeaway
Bangladesh Islamic search runs on one huge annual wave, **Ramadan week 1**, plus a series of sharp single-week spikes. The spikes are, in rough order: Eid-ul-Fitr ("ঈদ"), Shab-e-Barat, Shab-e-Meraj, Eid-e-Milad-un-Nabi, Laylatul Qadr, Eid-ul-Adha/Qurbani, Ashura and (in years it is held) Bishwa Ijtema. Most seasonal terms sit at **0 for most of the year**: they are non-zero in only 9–36% of weeks. A Ramadan term like "রমজান" runs about 40× its off-season level in Ramadan week 1. "নামাজের সময়" (prayer time) is the opposite: never zero, with a peak only about 2.7× its median. The weekly cycle matters too: in the 90-day daily data, **Friday** lifts "জুমার নামাজ" about 40–60× and "সূরা কাহাফ" about 25–45× over other weekdays.

### Cited Findings

**A. Cross-term magnitude table (MEASURED; 5-year weekly; every value expressed as a multiple of the anchor "নামাজের সময়" median week)**

Peak = the single highest week. Mean = the 5-year average. "% weeks >0" shows how seasonal a term is.

| Term | Peak week ×anchor-median | 5-yr mean ×anchor-median | % weeks >0 | Source |
|---|---|---|---|---|
| ঈদ (broad) | 16.7 | 0.74 | 94% | [T10] |
| দোয়া (dua) | 11.1 | 2.50 | 100% | [T9] |
| সেহরির সময় (sehri time) | 7.1 | 0.38 | 98% | [T1] |
| রোজা (fast) | 7.1 | 0.61 | 100% | [T7] |
| শবে বরাত | 6.3 | 0.15 | 26% | [T2] |
| রমজান | 6.1 | 0.35 | 98% | [T1] |
| সেহরি | 5.1 | 0.16 | 31% | [T1] |
| ramadan calendar (Latin) | 5.1 | 0.21 | 36% | [T2] |
| ইফতার | 4.9 | 0.24 | 29% | [T1] |
| শবে মেরাজ | 3.1 | 0.06 | 14% | [T2] |
| ঈদুল ফিতর | 3.0 | 0.06 | 14% | [T10] |
| নামাজের সময় (anchor) | ~2.7 | 1.0 | 100% | all |
| হাদিস | 2.1 | 1.06 | 100% | [T9] |
| তারাবির নামাজ | 1.6 | 0.04 | 11% | [T7] |
| ঈদে মিলাদুন্নবী | 1.6 | 0.05 | 20% | [T4] |
| শবে কদর | 1.5 | 0.03 | 9% | [T2] |
| ঈদুল আজহা | 1.5 | 0.05 | 17% | [T10] |
| hajj (Latin) | 1.4 | 0.25 | 100% | [T8] |
| কুরআন | 1.35 | 0.62 | 100% | [T6] |
| ফিতরা | 1.3 | 0.06 | 16% | [T5] |
| ইসলামিক নাম | 1.2 | 0.76 | 100% | [T9] |
| লাইলাতুল কদর | 1.2 | 0.03 | 6% | [T7] |
| যাকাত | 1.1 | 0.14 | 96% | [T7] |
| আশুরা | 1.05 | 0.02 | 12% | [T3] |
| আরাফার দিন | 0.8 | 0.01 | 3% | [T10] |
| বিশ্ব ইজতেমা | 0.8 | 0.02 | 19% | [T4] |
| কুরবানি | 0.8 | 0.04 | 35% | [T5] |
| ঈদের নামাজের নিয়ম | 0.8 | 0.02 | 8% | [T3] |
| হজ (Bangla) | 0.4 | 0.10 | 99% | [T3] |
| গরুর হাট (cattle market) | 0.4 | 0.02 | 36% | [T5] |
| মহররম | 0.35 | 0.01 | 11% | [T8] |
| umrah (Latin) | 0.2 | 0.10 | 100% | [T8] |
| সূরা কাহাফ (weekly) | 0.1 | 0.02 | 16% | [T9] |
| জুমার নামাজ (weekly) | 0.1 | 0.03 | 90% | [T4] |
| hajj registration / কুরবানির নিয়ম | 0.08 | ≤0.01 | 26% / 4% | [T8], [T3] |
| ওমরাহ / হজ প্যাকেজ / umrah package / হজ নিবন্ধন / সূরা কাহফ | 0.03–0.05 | ≈0 | — | [T5], [T6], [T4] |

**B. Peak weeks by occasion (MEASURED; raw index values are within each request's own scale)**
- **Ramadan (রমজান / সেহরি / ইফতার / সেহরির সময়).** Every year the peak is the **week Ramadan starts**: 27 Mar–2 Apr 2022, 19–25 Mar 2023, 10–16 Mar 2024, 23 Feb–1 Mar 2025 and 15–21 Feb 2026. In 2026, "রমজান" scored 82 in its first week and 28/23/25/20 in the following four weeks, then dropped to 2 within a week after Eid. Its off-season level is about 2 (Sep–Nov 2026), so **peak to off-season is about 40×**. "সেহরির সময়" scored 66 in week 1 against 1–2 off-season; its 5-year maximum, 100, came in 19–25 Mar 2023. "ইফতার" decays more slowly than "সেহরি" (2026: 68→41→33→29→22, against 58→17→11→10→6). — [T1]
- **"রোজা".** The 5-year peak is 10–16 Mar 2024 (100). In the off-season it never drops to zero (median 3), because people search for the next Ramadan's date all year. — [T7]
- **"ramadan calendar" (Latin script).** It peaks in Ramadan week 1 (82 in Mar 2024, 61 in Feb 2026) and stays at about 16 through the rest of Ramadan 2026. — [T2]
- **Shab-e-Barat.** Its 5-year max (100) is 5–11 Mar 2023. Other years: 81 in 13–19 Mar 2022, 48 in 25 Feb–2 Mar 2024, 59 in 9–15 Feb 2025 and 77 in 1–7 Feb 2026. In that same request the anchor peaked at 43, so **a Shab-e-Barat week is about 2.3× the highest prayer-time week**. Pre-event build-up in 2026: 6 (11–17 Jan) → 7 → 24 (25–31 Jan) → 77 (event week) → 1 the week after. — [T2]
- **Shab-e-Barat also moves other terms.** **The anchor "নামাজের সময়" reaches its yearly maximum in Shab-e-Barat week**, not in Ramadan week, in 2022 (13–19 Mar), 2023 (5–11 Mar) and 2026 (1–7 Feb: 24 against 12–14 in the surrounding weeks). "সেহরির সময়" jumped to 16 in Shab-e-Barat week 2026 (against 1–2 before it), which fits people fasting on 15 Sha'ban. — [T1], [T2]
- **Shab-e-Meraj.** It peaks once a year in the week of the night: 36 (27 Feb–5 Mar 2022), 50 (12–18 Feb 2023), 36 (4–10 Feb 2024), 23 (26 Jan–1 Feb 2025), 23 (11–17 Jan 2026). That is roughly half of Shab-e-Barat's peak. — [T2]
- **Laylatul Qadr.** "শবে কদর" scored 22/20/24/13/17 in the week of the 27th night (2022–2026). It builds through the last ten nights (2026: 1 → 7 → 17 → 0). "লাইলাতুল কদর" follows the same weeks at about 60–70% of that level. — [T2], [T7]
- **Eid-ul-Fitr.** "ঈদ" scored 100 (16–22 Apr 2023), 88 (Apr 2024), 85 (15–21 Mar 2026), 84 (May 2022) and 53 (Mar–Apr 2025). The Eid-ul-Adha weeks for "ঈদ" are only about half that (52 in Jun–Jul 2023, 41 in Jul 2022). "ঈদের নামাজের নিয়ম" peaks in the Eid-ul-Fitr week (2026: 13) and again in the Eid-ul-Adha week (2026: 11), and is 0 otherwise. — [T10], [T3]
- **Fitra and Zakat.** "ফিতরা" climbs through Ramadan to its peak in the last ten days (2026: 1 → 17 → 27 → 42 → 44 → 3). "যাকাত" peaks earlier, in weeks 1–3 of Ramadan (2026: 15/14/14, falling to 8 in Eid week). — [T5], [T7]
- **Eid-ul-Adha, Qurbani and the cattle market.** "কুরবানি" builds for about 4 weeks before Eid (2026: 4 → 6 → 10 → 17 → **29** in Eid week, 24–30 May) and collapses to 3 the week after. "গরুর হাট" (cattle market) follows the same curve (1 → 2 → 5 → 9 → 13). "আরাফার দিন" is a single-week blip (5 in May 2026). — [T5], [T10]
- **Hajj.** "hajj" (Latin) peaks in the Hajj/Eid-ul-Adha week (52–53 in 2022–2023, 28–31 in 2024–2026). In 2023 it showed a secondary plateau in April–May (28–31 for 7–27 May 2023). In 2026 there was a smaller April bump (13–14 for 12–25 Apr) before the late-May peak (31). Bangla "হজ" peaks in the same weeks (12–15). Registration and package terms ("hajj registration", "হজ নিবন্ধন", "হজ প্যাকেজ", "umrah package") are **near zero in Trends** (max 1–3). — [T3], [T6], [T8]
- **Umrah.** "umrah" (Latin) never drops to zero (median 4) and has a mild winter/pre-Ramadan high (Jan–Mar: 6–8). — [T8]
- **Muharram/Ashura.** "আশুরা" peaked at 39 (7–13 Aug 2022), 27 (Jul 2023), 37 (14–20 Jul 2024), 22 (29 Jun–5 Jul 2025) and 16 (21–27 Jun 2026). The 2026 build-up was 1 → 7 → 16 → 1. "মহররম" peaks in the same weeks (10–13). — [T3], [T8]
- **Eid-e-Milad-un-Nabi.** It is consistently large: 30 (Oct 2022), 56 (Sep 2023), 54 (Sep 2024), 58 (31 Aug–6 Sep 2025) and 55 (23–29 Aug 2026). The 2026 build-up was 3 → 5 → 14 → **55** → 3. On the ×anchor-median scale (1.6) it matches Tarawih and beats Laylatul Qadr, Eid-ul-Adha and Ashura. — [T4]
- **Bishwa Ijtema.** It peaked at 30 (8–14 Jan 2023), 23 (28 Jan–3 Feb 2024) and 12 (26 Jan–1 Feb 2025). In **2026 it scored only 5 (28 Dec 2025–3 Jan 2026) and 0 from mid-January onward**, which matches the postponement of the 2026 Tongi Ijtema before the national election (see Q3). A small search niche: a peak of 0.8×anchor-median. — [T4]
- **Friday cycle (MEASURED, daily data 5 Aug–5 Nov 2026, average index by weekday).** Same scale for all terms:
  - "জুমার নামাজ": Fri 12.8 against 0.2–0.4 on other days.
  - "সূরা কাহাফ": Fri 13.2 against 0.3–0.6 (Thu 0.6 is the highest non-Friday day).
  - "সূরা কাহফ" (alternate spelling): Fri 0.3, so the কাহাফ spelling is used about 40× more.
  - "নামাজের সময়": Fri 84.4 against 70.2 (Sat) to 77.9 (Wed), i.e. **+8–20% on Fridays**.
  - "জুমার দিনের আমল": about 0–0.7. Too small to resolve as an exact phrase, but present in autocomplete (Q2).
  - — [TD]
- **The earlier session's (2026-11-04) pull agrees.** It found the Friday multiplier at about 29× for সূরা কাহাফ and about 40× for জুমার নামাজ, a +12% Friday lift for "দোয়া", and prayer-time searches peaking at 04:00–06:00 BD time. — [earlier notes, same Trends method](https://trends.google.com/trends/explore?geo=BD&date=today%203-m)
- **Older secondary source.** Financial Express (2018) reported that Ramadan-related Google searches in BD peak in the first week and then decline, and ranked BD 15th globally for Ramadan search interest. This is consistent with the curves above. — [Financial Express, 2018](https://thefinancialexpress.com.bd/sci-tech/ramadan-related-search-on-google-starts-rising-1526628182)

### Inferences
- **INFERRED.** Ramadan is the largest *cluster*: about 10+ terms each spike for 4 weeks. Single-week spikes like Shab-e-Barat are about as large as "রমজান" for one week. Previous notes called Shab-e-Barat "the single biggest religious spike". The data supports a narrower version of that: it is the biggest **one-night occasion**. Per term it is roughly level with Ramadan week-1 terms (6.3× against 6.1–7.1× anchor-median), and smaller than "ঈদ" or "দোয়া" in Ramadan week.
- **INFERRED.** Demand front-loads into **week 1 of Ramadan**, then decays. Sehri and iftar time content, niyat and dua, and the calendar must be live **before** the first fast. Fitra demand peaks in the **last 10 days**, Zakat in weeks 1–3, and Laylatul Qadr in the 27th-night week.
- **INFERRED.** Pre-event ramps are short. Searches start 2–3 weeks before Shab-e-Barat and Qurbani and about 1–2 weeks before Milad and Ashura, then collapse to roughly zero the week after. "After" content has almost no search demand. The exceptions are Eid ("ঈদ কবে গেছে", "কুরবানির ঈদ কবে গেছে" in autocomplete) and countdowns to the *next* occasion.
- **INFERRED.** Some prayer-time peaks fall *outside* Ramadan: Shab-e-Barat week, plus a smaller lift on Fridays. These suggest that occasions bring lapsed users back to utility searches, a cue for re-engagement push timing.
- **INFERRED.** The yearly peaks of "নামাজের সময়" and "দোয়া" fell from 2023 to 2026 (anchor peak 37 → 24; দোয়া 100 → 52). Possible causes: users moving to apps, AI Overviews in Google, or spelling and phrasing drift. Not verified.

### Gaps
- Trends gives relative indices only. Absolute volumes (Google Ads Keyword Planner, Ahrefs/Semrush keyword data) need logins and were not obtained.
- Hourly Ramadan patterns (sehri 02:00–04:00, pre-iftar) were not pulled. Hourly data is only available for the last 7 days, which have no Ramadan.
- Terms for registration with the Ministry of Religious Affairs and for package cost are too low in Trends to resolve. Their seasonality had to come from autocomplete and news (Q2, Q3).
- No Google Trends "related queries" were pulled in this session for rising terms per occasion. The earlier 2026-11-04 notes have some (for example "কদরের রাতের দোয়া" +250%, "শবে বরাতের নামাজের নিয়ম ও দোয়া" +200%, "আশুরার দিনের আমল" +110%, "জিলহজ মাসের প্রথম ১০ দিনের আমল" +60%), but they were not re-verified today.

## 2. What exact queries people type before, during and after each occasion (autocomplete snapshot)

### Takeaway
For almost every occasion, the dominant query shape is **"[occasion] [year] কবে / কত তারিখে (বাংলাদেশ)"** (when / what date, in Bangladesh), then **countdowns ("আর কতদিন বাকি")** (how many days left), then **how-to rituals**: niyat, rakat count, rules, dua, amol and fazilat. Ramadan adds **district-level sehri and iftar times**. Qurbani adds **animal rules** (cattle age, slaughter dua, price, hat). Hajj adds **the registration deadline and packages for the next year**. On 2026-11-05, autocomplete already shows **2027** dates for Ramadan, Shab-e-Barat, Eid, Hajj and Ijtema: people plan many months ahead.

### Cited Findings (OBSERVED: Google Autocomplete, `hl=bn&gl=bd`, snapshot 2026-11-05, not volume; endpoint e.g. [AC])
- **শবে বরাত:** ২০২৭, ২০২৬, ২০২৭ কত তারিখে, কবে, কবে 2027, ২০২৬/২০২৭ কত তারিখে **বাংলাদেশ**, কত তারিখ.
- **শবে বরাতের:** নামাজের নিয়ত, ফজিলত, ফজিলত সম্পর্কে হাদিস, **আর কতদিন বাকি আছে**, আমল, ইতিহাস, নামাজের নিয়ম, নামাজ কত রাকাত, দোয়া. — [AC]
- **শবে মেরাজ:** ২০২৬, ২০২৭, কবে, কত তারিখে ২০২৭/২০২৬ (বাংলাদেশ), ঘটনা ও ইতিহাস. — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B6%E0%A6%AC%E0%A7%87%20%E0%A6%AE%E0%A7%87%E0%A6%B0%E0%A6%BE%E0%A6%9C)
- **রমজান / রমজানের / রোজা:**
  - Dates: রমজান ২০২৭, রমজান ২০২৭ কত তারিখে, রমজান মাস ২০২৭, রমজান কবে.
  - Countdown: "রমজান মাসের আর কতদিন বাকি আছে", "রমজানের কত দিন বাকি".
  - Calendar and timetable: রমজানের ক্যালেন্ডার ২০২৬, রমজানের সময় সূচি 2027.
  - Song: the Eid song "রমজানের ঐ রোজার শেষে" (lyrics).
  - রোজা: রোজা কত তারিখে ২০২৭, রোজার নিয়ত, রোজার ঈদ কত তারিখে.
  - — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B0%E0%A6%AE%E0%A6%9C%E0%A6%BE%E0%A6%A8)
- **সেহরি:** সেহরির শেষ সময় (আজকের / ঢাকা / চট্টগ্রাম / সিলেট), সেহরি ও ইফতারের সময়সূচি ২০২৬, সেহরির সময় আজকের. — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B8%E0%A7%87%E0%A6%B9%E0%A6%B0%E0%A6%BF)
- **ইফতার:** ইফতারের সময় (আজকের, চট্টগ্রাম), ইফতারের দোয়া, ইফতারের সময়সূচি ২০২৬, ইফতার টাইম, ইফতারের নিয়ত, "ইফতার সার্টিফিকেট". — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%87%E0%A6%AB%E0%A6%A4%E0%A6%BE%E0%A6%B0)
- **Latin-script Ramadan:**
  - "ramadan calendar" → 2026, 2027, 2027 bangladesh, 2026 dhaka bangladesh, 2027 saudi arabia.
  - "ramadan 2027" → bangladesh, date, **countdown**, date in bangladesh, start date, calendar.
  - — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=ramadan%202027)
- **তারাবি:** তারাবির নামাজের দোয়া, মোনাজাত, কত রাকাত, নিয়ত, নিয়ম, "সুন্নত নাকি নফল". — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BE%E0%A6%AC%E0%A6%BF)
- **শবে কদর:** শবে কদরের দোয়া, ২০২৬/২০২৭, শবে কদর কি, নামাজের নিয়ম, "২০২৬ কত তারিখে বাংলাদেশ", ফজিলত, রাতের দোয়া. — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B6%E0%A6%AC%E0%A7%87%20%E0%A6%95%E0%A6%A6%E0%A6%B0)
- **ফিতরা / যাকাত:**
  - ফিতরা: "ফিতরা কত টাকা ২০২৬ **ইসলামিক ফাউন্ডেশন**", ফিতরার পরিমাণ ২০২৬.
  - যাকাত: যাকাতের হিসাব, যাকাত দেওয়ার নিয়ম, **যাকাত ক্যালকুলেটর**, যাকাত কাদের উপর ফরজ, যাকাতের খাত.
  - — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%AB%E0%A6%BF%E0%A6%A4%E0%A6%B0%E0%A6%BE)
- **ঈদের নামাজ / ঈদ কবে:**
  - ঈদের নামাজ: নিয়ম, নিয়ত, কয় রাকাত, কয় তাকবীর, "ফরজ না ওয়াজিব", "মাসবুক হলে করণীয়" (what to do if you join late), "পড়িয়ে টাকা নেওয়া কি জায়েজ".
  - ঈদ কবে: ২০২৭, ২০২৬, কবে হবে, **কবে হয়েছে** (looking back), কবে হতে পারে.
  - — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%88%E0%A6%A6%E0%A7%87%E0%A6%B0%20%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C)
- **কুরবানি / কুরবানির:** These are dominated by date queries: কুরবানির ঈদ ২০২৬/২০২৭, কবে, কত তারিখে, **কত দিন বাকি**, **কবে গেছে**, "২০২৬ কত তারিখে হয়েছে". — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%AC%E0%A6%BE%E0%A6%A8%E0%A6%BF)
- **কুরবানির গরু:** ছবি, **বয়স কত হতে হবে** (minimum age), হাট, জবাই, **দাম** (price), "জবাই করার দোয়া". — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%AC%E0%A6%BE%E0%A6%A8%E0%A6%BF%E0%A6%B0%20%E0%A6%97%E0%A6%B0%E0%A7%81)
- **Meat distribution (from an earlier notes snapshot, not re-pulled today):** "আকিকার মাংস বন্টনের নিয়ম" appears for aqiqah. No separate Qurbani meat-distribution suggestion appeared in today's top 10 for "কুরবানির".
- **হজ / হজ্জ / হজ নিবন্ধন:**
  - হজ্জ: **"হজ্জ নিবন্ধন 2027 শেষ তারিখ"**, "হজ্জ প্যাকেজ ২০২৭", "হজ্জ রেজিস্ট্রেশন ২০২৭", হজ্জের ফরজ/ওয়াজিব কয়টি, হজ্জের দোয়া.
  - হজ নিবন্ধন: ২০২৭, চেক, **শেষ তারিখ**, "যাচাই ২০২৬", **"নিবন্ধন শেষ হচ্ছে ২৪ সেপ্টেম্বর সময় আর বাড়বে না"** (a news headline surfacing in suggestions), "নিবন্ধন সনদ ডাউনলোড".
  - Note: "হজ" alone collides with হজম (digestion) and হজরত.
  - — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B9%E0%A6%9C%E0%A7%8D%E0%A6%9C)
- **Latin-script Hajj:** "hajj 2027" → registration bangladesh, dates, packages, registration last date, "packages from bangladesh". — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=hajj%202027)
- **ওমরাহ:** করার নিয়ম, প্যাকেজ, "প্যাকেজ 2026 বাংলাদেশ মূল্য", "ভিসা ফি কত 2026", "হজ করতে কত টাকা লাগে", খরচ. Cost is the main question. — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%93%E0%A6%AE%E0%A6%B0%E0%A6%BE%E0%A6%B9)
- **জিলহজ / আরাফা:**
  - জিলহজ: জিলহজ্জ মাসের আমল, "জিলহজ্জ মাসের ১০ তারিখ ইংরেজি কত তারিখ ২০২৬", জিলহজ্জ মাসের ক্যালেন্ডার ২০২৬, "জিলহজের আমল ডায়েরি বই".
  - আরাফা: "আরাফার দিনের দোয়া" (mixed in with the personal name Arafat).
  - — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%9C%E0%A6%BF%E0%A6%B2%E0%A6%B9%E0%A6%9C)
- **আশুরা / মহররম:**
  - আশুরা: আশুরা কি, কবে ২০২৬, আশুরার দিনের ঘটনা, **আশুরার রোজার ফজিলত**, "আশুরার রোজা কবে ২০২৬", ইতিহাস.
  - মহররম: "মহররমের ১০ তারিখ কবে ২০২৬", মাসের ফজিলত, ঘটনা, and the poem "মহররম কবিতা (ফররুখ আহমদ)", which is school-curriculum demand.
  - — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%86%E0%A6%B6%E0%A7%81%E0%A6%B0%E0%A6%BE)
- **ঈদে মিলাদুন্নবী:** "২০২৬ কত তারিখ (ছুটি)", কি, **"পালন করা কি জায়েজ"** (is observing it permissible, a sectarian-sensitive question), "সম্পর্কে বক্তব্য", "গুরুত্ব ও তাৎপর্য রচনা" (school essays and speeches). — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%88%E0%A6%A6%E0%A7%87%20%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%81%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%AC%E0%A7%80)
- **জুমার / জুমার দিনের:**
  - জুমার: নামাজ কত রাকাত, নিয়ত, **"প্রথম ও দ্বিতীয় খুতবা" (pdf / বাংলা উচ্চারণ / আরবি)**, খুতবা, ফজিলত, আমল, বয়ান.
  - জুমার দিনের: ফজিলত, আমল, **স্ট্যাটাস**, **ক্যাপশন**, দোয়া, দরুদ শরীফ. These are shareable Friday greetings.
  - — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%9C%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%B0)
- **সূরা কাহাফ:** বাংলা উচ্চারণ, ফজিলত, **প্রথম ১০ আয়াত** (আরবি), "বাংলা উচ্চারণ সহ অনুবাদ", সম্পূর্ণ, pdf. — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%AB)
- **বিশ্ব ইজতেমা / ইজতেমা:** "২০২৬/২০২৭ কত তারিখে", ইতিহাস, কোথায় হয়, "কত সালে শুরু হয়", ইজতেমার মাঠ, "ইজতেমার তারিখ ২০২৭". — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%20%E0%A6%87%E0%A6%9C%E0%A6%A4%E0%A7%87%E0%A6%AE%E0%A6%BE)
- **নামাজের সময়:** সময়সূচী/সময়সূচি (both spellings), ২০২৬, by city (ঢাকা, চট্টগ্রাম, সিলেট), "সিলেট pdf". — [autocomplete](https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC)

### Inferences
- **INFERRED.** The query journey is consistent:
  - **Before:** "কবে / কত তারিখে / কত দিন বাকি" (when, what date, how many days left), usually with "বাংলাদেশ" appended because BD dates differ from Saudi.
  - **During:** rules, niyat, rakat, dua, amol and fazilat. For Ramadan, also today's sehri and iftar time by city.
  - **After:** "কবে গেছে / কবে হয়েছে" (when was it) lookups, and the next year's date.
  - A product can serve all three phases with one occasion page: a countdown, then a how-to guide, then the next-year date.
- **INFERRED.** "বাংলাদেশ" appended to date queries is direct evidence that users know BD dates often fall a day after Saudi's, and that they want the BD-specific (Moon Sighting Committee) answer.
- **INFERRED.** Some school and civic demand piggybacks on occasions: মহররম কবিতা, Milad রচনা/বক্তব্য, the Eid song lyrics, and holiday ("ছুটি") queries. Some Milad queries are sectarian ("জায়েজ?"). Content should handle these neutrally.
- **INFERRED.** Friday shareables (স্ট্যাটাস, ক্যাপশন) and the khutbah PDF/transliteration are weekly needs that a retention-focused product can serve every Friday.

### Gaps
- Autocomplete is a single-day snapshot (5 Nov 2026, which is off-season for most occasions). Suggestions during the event weeks would differ, with more "আজকের" (today's) and ritual queries. They could not be observed retroactively.
- No suggestions came up for Qurbani meat distribution (কুরবানির মাংস বন্টন) or for whether Qurbani is obligatory (কুরবানি কার উপর ওয়াজিব) in the top 10 for the seeds used. Longer seeds were not tested.

## 3. Dates for 2026 (actual) and 2027 (planning) in Bangladesh

### Takeaway
All 2026 Bangladesh dates below come from Moon Sighting Committee or Islamic Foundation announcements, or from the government holiday list, as reported by national media. BD was 1 day after Saudi Arabia for both Eids in 2026. **No official 2027 holiday list had been found as of 2026-11-05.** The 2027 dates below are estimates (±1 day, subject to moon sighting), except two that are officially announced: **Ijtema (8–10 and 15–17 Jan 2027)** and the **Hajj 2027 roadmap (Hajj ~15 May 2027)**.

### Cited Findings
**2026, actual. Holiday date = the day after the night for Shab-e-Barat and Shab-e-Qadr. This convention is inferred from the 2025 list, where Shab-e-Qadr was on 28 Mar for a Ramadan that began on 2 Mar.**
- **Bishwa Ijtema 2026:** not held at Tongi before the election. On 30 Dec 2025 the Home Ministry asked that no gathering be held at the Turag ground before the 13th national election. The religious affairs adviser said it would be held after the election. — [Bangla Tribune](https://www.banglatribune.com/others/928374/%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%9A%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%86%E0%A6%97%E0%A7%87-%E0%A6%B9%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%A8%E0%A6%BE-%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC-%E0%A6%87%E0%A6%9C%E0%A6%A4%E0%A7%87%E0%A6%AE%E0%A6%BE); [Ittefaq](https://www.ittefaq.com.bd/768260/)
  - Trends shows near-zero "বিশ্ব ইজတেমা" interest for all of 2026 (only one week >0 after early January). — [T4]
  - Whether and when a 2026 Ijtema was eventually held: not confirmed.
- **Shab-e-Meraj:** night of Friday 16 Jan 2026. The Rajab moon was sighted on 21 Dec 2025. — [Ittefaq](https://www.ittefaq.com.bd/767047/); [Desh Rupantor](https://www.deshrupantor.com/648594)
- **Shab-e-Barat:** holiday 4 Feb 2026, so the night is 3 Feb. — [Daily Star Bangla, 2026 holiday list (10 Nov 2025)](https://bangla.thedailystar.net/news/bangladesh/news-712741)
- **Ramadan start:** Thursday 19 Feb 2026 (first fast). The crescent was sighted on 18 Feb. — [Ittefaq English](https://en.ittefaq.com.bd/15383/holy-month-of-ramadan-begins-thursday)
  - Caveat: this comes from a search-result summary and the page was not opened. The Trends week-1 peak, 15–21 Feb, is consistent with it.
- **Shab-e-Qadr:** holiday 17 Mar 2026, so the night is 16 Mar. **Jumatul Bida:** 20 Mar 2026. — [Daily Star Bangla](https://bangla.thedailystar.net/news/bangladesh/news-712741)
- **Eid-ul-Fitr:** Saturday 21 Mar 2026. The Shawwal moon was not sighted on 19 Mar. Saudi Arabia's Eid was Friday 20 Mar. — [Daily Star](https://online-d11.thedailystar.net/news/bangladesh/news/eid-ul-fitr-saturday-shawwal-moon-not-sighted-4132701); [bdnews24](https://bdnews24.com/bangladesh/8618af4cfd38)
- **Eid-ul-Adha:** 28 May 2026. The Zilhajj moon was sighted over Cox's Bazar on 18 May. Saudi Arabia's Eid was 27 May. Holiday ran 25–31 May. — [Ittefaq English](https://en.ittefaq.com.bd/16594/bangladesh-to-celebrate-eid-ul-azha-on-may-28); [BSS](https://www.bssnews.net/news-flash/388240)
- **Hijri New Year / Ashura:** the Muharram 1448 moon was sighted on 16 Jun 2026, so 1 Muharram was 17 Jun and **Ashura was Friday 26 Jun 2026**. — [Dhaka Tribune](https://www.dhakatribune.com/bangladesh/412853/holy-ashura-on-june-26); [BSS](https://www.bssnews.net/news/national/396665)
- **Eid-e-Milad-un-Nabi:** 26 Aug 2026. The Rabiul Awal moon was not sighted on 13 Aug, so the month began 15 Aug. — [Dhaka Tribune](https://www.dhakatribune.com/bangladesh/417407/eid-e-miladunnabi-on-aug-26); [Ittefaq English](https://en.ittefaq.com.bd/17720/holy-eid-e-miladunnabi-on-aug-26)
- **Cross-check against Trends.** Every 2026 date above falls inside the Trends peak week for that term: Meraj 11–17 Jan, Barat 1–7 Feb, Ramadan 15–21 Feb, Qadr and Eid 15–21 Mar, Qurbani 24–30 May, Ashura 21–27 Jun, Milad 23–29 Aug. — [T1]–[T5]

**2027, planning data**
- **Bishwa Ijtema 2027 (announced):** phase 1 on 8–10 Jan 2027 (Zubayer faction) and phase 2 on 15–17 Jan 2027 (Saad faction), at Tongi. The Home Minister announced it on 3 Sep 2026. — [Dhaka Times](https://www.dhakatimes24.com/2026/09/03/411967); [Khoborsangjog](https://www.khoborsangjog.com/121812)
- **Hajj 2027 roadmap, Ministry of Religious Affairs (published 7 Jun 2026):**
  - Registration to be completed by 26 Sep 2026.
  - Bilateral Hajj agreement: 8 Nov 2026.
  - Hajj visa issuance from 28 Jan 2027.
  - **Hajj flights from 8 Apr 2027.**
  - **Expected Hajj (9 Zilhajj): 15 May 2027.**
  - Nusuk Masar payments: 15 Jul–24 Dec 2026.
  - — [Bangla Tribune](https://www.banglatribune.com/others/950606/)
  - A later ministry notice reportedly set registration from 27 Jul to **24 Sep 2026, with no extension**, and the government's economy package at 5,05,648 Tk. This comes from search snippets of [Jugantor](https://www.jugantor.com/national/1154128); the article was not opened, so these figures are unverified. The 24 Sep "no extension" headline also appears in autocomplete (Q2).
- **2027 estimates from a calendar site (bangladatetoday.com, dated 7 Sep 2026; it explicitly says the official list is not out yet).** The site says the Cabinet Division usually publishes the list in October–November. — [Bangla Date Today](https://www.bangladatetoday.com/blog/bangladesh-government-holidays-2027)
  - Shab-e-Barat: 24 Jan 2027 (night of 23 Jan)
  - Shab-e-Qadr: 7 Mar 2027 (night of 6 Mar)
  - Jumatul Wida: 5 Mar 2027
  - Eid-ul-Fitr: 10 Mar 2027 (holiday 10–12 Mar)
  - Eid-ul-Adha: 17 May 2027
  - Ashura: 16 Jun 2027
  - Eid-e-Milad-un-Nabi: 15 Aug 2027
  - Another estimate puts Eid-ul-Fitr at 10 or 11 Mar 2027, depending on whether the moon is seen on 9 Mar. — [search summary of bangladatetoday Eid page](https://www.bangladatetoday.com/blog/eid-ul-fitr-2027-date-bangladesh)
- **2026 vs 2027 holiday lists.** No 2027 list from the Public Administration Ministry was found. The 2026 list was published on 10 Nov 2025, so the 2027 list may be imminent. — [Daily Star Bangla](https://bangla.thedailystar.net/news/bangladesh/news-712741)

### Inferences
- **INFERRED: 2027 planning calendar (BD).** Dates are ±1 day, so content should go live about 3 weeks before each one:
  - Bishwa Ijtema: 8–10 and 15–17 Jan (official)
  - Shab-e-Meraj: about the night of 5–6 Jan 2027. This is my calculation: 27 Rajab 1448, with Rajab starting about 11–12 Dec 2026. No source was found.
  - Shab-e-Barat: about the night of 23 Jan
  - Ramadan start: about 9–10 Feb (counted back from an Eid on 10–11 Mar)
  - Laylatul Qadr: about the night of 6 Mar
  - Eid-ul-Fitr: about 10–11 Mar
  - Hajj flights: from 8 Apr (official)
  - Arafah: about 15 May (official, Saudi date)
  - Eid-ul-Adha: about 16–17 May
  - Ashura: about 16 Jun
  - Milad: about 15–16 Aug
  - Hajj 2028 registration window: likely Jul–Sep 2027, following the 2026 pattern
- **INFERRED.** In 2027, Shab-e-Meraj, Ijtema, Shab-e-Barat and Ramadan all fall within about 6 weeks (early January to mid-February). Combined with Ramadan in February–March, **Q1 2027 is where the year's seasonal demand will be concentrated.** A product launched later than about December 2026 misses that peak.

### Gaps
- No official 2027 holiday list (Public Administration Ministry) and no Islamic Foundation 2027 Hijri calendar were found. All 2027 Islamic dates except Ijtema and the Hajj roadmap are estimates.
- The 2026 Ramadan start date is from a search-result summary, not an opened article (it is consistent with the Trends data).
- I did not open the Islamic Foundation site or the hajj.gov.bd portal directly. The roadmap came via Bangla Tribune.
- The government's Hajj 2027 package price (5,05,648 Tk) and the 24 Sep deadline were not verified against a primary source.

## 4. Does BD Islamic website traffic visibly spike in Ramadan?

### Takeaway
**Yes, but modestly, and only in modelled estimates.** Ahrefs' free pages give monthly *estimated organic search traffic*. For the BD-focused sites hadithbd.com and muslimbangla.com, they show a recurring Ramadan or post-Ramadan monthly high of about **1.2–1.9× the previous month**, followed by a drop. That is far smaller than the 5–40× swings for individual Ramadan keywords, because these sites carry a lot of year-round demand. Similarweb blocked automated access (HTTP 202, empty body). Semrush and Ahrefs give only recent single-month figures.

### Cited Findings
- **hadithbd.com: Ahrefs estimated monthly organic visits (MEASURED by a third-party model; month label = Ahrefs data point; BD = 91.7% of traffic in Oct 2026).** — [Ahrefs hadithbd.com](https://ahrefs.com/websites/hadithbd.com)
  - 2023: Mar 113.8K → **Apr 164.9K** → May 146.7K → Jun 102.9K. Ramadan was 23 Mar–21 Apr 2023.
  - 2024: Mar 187.2K → **Apr 342.5K** → May 279.2K. Ramadan was 12 Mar–10 Apr 2024.
  - 2025: Mar 399.8K → **Apr 695.9K** → May 168.6K. Ramadan was 2–31 Mar 2025.
  - 2026: Feb 397.1K → **Mar 489.7K** → Apr 384.4K. Ramadan was 19 Feb–20 Mar 2026.
  - Oct 2026: 183K, down 58.4K month on month.
- **muslimbangla.com: Ahrefs estimated monthly organic visits.** — [Ahrefs muslimbangla.com](https://ahrefs.com/websites/muslimbangla.com)
  - 2023: Mar 29.3K → **Apr 48.6K** → May 36.5K.
  - 2024: Mar 55.8K → **Apr 76.0K** → May 42.9K.
  - 2025: Mar 135.8K → **Apr 167.1K** → May 107.7K.
  - 2026: Feb 224.5K → **Mar 357.0K** → Apr 230.6K → then rising again through Jun–Sep (307–329K) → Oct 255.5K.
  - The site has grown strongly year on year, so its seasonal swing is overlaid on that growth.
- **ihadis.com: Ahrefs.** The series is dominated by an algorithmic or ranking jump rather than seasonality: 5–6K/month in 2025, 29.6K in Dec 2025, 49.8K in Jan 2026, **716K in Mar 2026, 992K in Apr 2026**, 282K in May 2026, 405K in Oct 2026. Only 36% of its search traffic is from BD (28.5% from Turkey). — [Ahrefs ihadis.com](https://ahrefs.com/websites/ihadis.com)
- **islamhouse.com: not BD-relevant.** BD was about 6.9% of its search traffic in Oct 2026. Its monthly pattern also shows April highs in 2023 (105.8K) and 2025 (86.6K). — [Ahrefs islamhouse.com](https://ahrefs.com/websites/islamhouse.com)
- **Semrush, muslimbangla.com:** 2.05M total visits in Sep 2026, +143% vs August, average session 8:22, BD country rank 2,847. This is a single-month figure with an unexplained jump; it does not cover Ramadan. — [Semrush](https://www.semrush.com/website/muslimbangla.com/overview/)
  - Earlier Semrush snapshot: about 142.9K visits in Nov 2025, about 41% from organic search and about 41% direct. — [Semrush (PL)](https://pl.semrush.com/website/muslimbangla.com/overview)
  - The two Semrush figures are inconsistent with each other and with Ahrefs (different methods and scopes).
- **Similarweb:** the `similarweb.com/website/ihadis.com/` page returned HTTP 202 with no content to curl. Its competitor pages list muslimbangla.com as a top competitor of ihadis.com and hadithbd.com, but no visit trend is visible. — [Similarweb ihadis competitors](https://www.similarweb.com/website/ihadis.com/competitors)

### Inferences
- **INFERRED.** The site-level Ramadan lift (about 1.2–1.9×) is far smaller than the keyword-level lift (about 5–40×). Hadith and general Islamic sites keep a large year-round base, and the Ramadan wave mostly flows to time/calendar utilities, dua and niyat pages.
- **INFERRED.** Ahrefs' highs often land in the month labelled *after* Ramadan (April 2025, when Ramadan was entirely in March). This is probably a lag in Ahrefs' month-stamping and keyword-volume model, not a real post-Ramadan surge. Treat the month of the high as approximate.
- **INFERRED.** The May 2025 crash for hadithbd (696K → 169K) is too steep to be seasonal alone. A Google algorithm update or a ranking loss probably coincided with it.

### Gaps
- No actual (first-party or Similarweb) monthly visit history for any BD Islamic site was available. All site-level figures are third-party SEO model estimates.
- No BD app-store seasonality (Sensor Tower, data.ai) data was found for Islamic apps.

## 5. Year-round vs seasonal demand (evidence for retention beyond Ramadan)

### Takeaway
A small set of needs is **always on**: prayer times, dua, hadith, Quran, Islamic names, and umrah/hajj as general interest. These never hit zero, and their peak weeks are only about 1.2–2.8× their median, against 5–40× for Ramadan terms. **Dua alone averages 2.5× the prayer-time anchor across 5 years.** Layered on top is a **weekly Friday cycle** and a dense set of special nights. A daily utility (prayer times plus a dua) supported by a calendar engine for occasions matches the measured demand better than a Ramadan-only product.

### Cited Findings (MEASURED, 5-year weekly; [T9], [T6], [T8], [T1])
- **Year-round core.** Peak ÷ median within the term's own series; non-zero in 100% of weeks:
  - **"নামাজের সময়"**: 2.6–2.8
  - **"কুরআন"**: 2.3 (median 21.5, max 50)
  - **"হাদিস"**: 2.1 (median 9, max 19)
  - **"ইসলামিক নাম"**: 1.8 (median 6, max 11)
  - **"umrah"**: 2.0
  - **"দোয়া"**: 5.1. Its mean is 2.5× the anchor median, the largest year-round Islamic term measured.
  - — [T9], [T6], [T8]
- **Seasonal terms are mostly zero off-season.** Share of weeks with a value of 0: সেহরি 69%, ইফতার 71%, শবে বরাত 74%, শবে কদর 91%, আশুরা 88%, ঈদে মিলাদুন্নবী 80%, ফিতরা 84%, কুরবানি 65%. — [T1]–[T5]
- **Year-round terms still rise in Ramadan, but mildly.** "কুরআন" peaks in Ramadan weeks (45–50) and, unexpectedly, also in **late December** (Dec 22–28 2024 = 49; Dec 21–27 2025 = 50). "হাদিস" peaks in Shab-e-Barat and Ramadan weeks (18–19 against a median of 9). — [T6], [T9]
- **"ইসলামিক নাম" has a slowly declining peak** (11 in 2022 → 5 in 2026 on the same scale). — [T9]
- **Weekly cycle: Friday.** It multiplies Jumu'ah and Kahf searches by roughly 25–60× and lifts prayer-time searches by 8–20%. — [TD]
- **Daily cycle (from the earlier 2026-11-04 notes, same method).** Prayer-time searches peak at 04:00–06:00 with a second peak at 15:00–17:00 (BD time). Dua peaks at 05:00–06:00. Not re-pulled today. — [Trends](https://trends.google.com/trends/explore?geo=BD&date=now%207-d)
- **Countdown and date demand.** "কত দিন বাকি" and "২০২৭ কবে" queries for Ramadan, Shab-e-Barat, Eid and Qurbani appear in autocomplete in November, three months or more before any of these occasions. — Q2 autocomplete ([AC])
- **"রোজা" never reaches zero off-season** (median 3). — [T7]

### Inferences
- **INFERRED: retention design.**
  - **Daily habit:** prayer times by district plus dua, matching the Fajr and Asr–Maghrib peaks.
  - **Weekly:** Friday (Kahf, Jumu'ah niyat/rakat/khutbah, Friday status/caption shareables).
  - **Annual:** an occasion engine with BD-specific dates, countdowns and how-to guides for about 10 occasions, each with a 1–3 week pre-event window.
  - Together these give a reason to visit roughly every day, a stronger reason every Friday, and a big event roughly every 1–2 months. The 2026 occasion months were Jan (Meraj, Ijtema), Feb (Barat, Ramadan), Mar (Qadr, Eid), May (Hajj, Qurbani), Jun (Ashura), Aug/Sep (Milad).
- **INFERRED: quiet season.** The only stretch without a major occasion is about **September to December** (after Milad, before Ijtema and Meraj). That is when year-round content (Quran, hadith, names, dua, the earlier notes' life-event searches) must carry engagement. It is also the window to launch before the Q1 2027 cluster.
- **INFERRED: acquisition vs retention.** Ramadan week 1 is the acquisition moment, with the most new users searching sehri and iftar times. Shab-e-Barat week, when prayer-time searches hit their yearly high, is a second acquisition or reactivation moment just before Ramadan.
- **INFERRED: the December rise in "কুরআন".** It may reflect school winter holidays or Quran competitions and Hifz results. Unverified.

### Gaps
- No direct measure of user retention or return visits (only search interest).
- Islamic name demand is split across many spellings and English forms ("islamic name", "ছেলেদের ইসলামিক নাম"). The single-phrase index understates it.
- No Google "Year in Search Bangladesh" edition was found for 2020–2025. Search results only surfaced India and Pakistan editions. — [search result example: Pakistan 2025](https://www.geo.tv/latest/638089)

[T1]: https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%B0%E0%A6%AE%E0%A6%9C%E0%A6%BE%E0%A6%A8,%E0%A6%B8%E0%A7%87%E0%A6%B9%E0%A6%B0%E0%A6%BF,%E0%A6%87%E0%A6%AB%E0%A6%A4%E0%A6%BE%E0%A6%B0,%E0%A6%B8%E0%A7%87%E0%A6%B9%E0%A6%B0%E0%A6%BF%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC
[T2]: https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%B6%E0%A6%AC%E0%A7%87%20%E0%A6%AC%E0%A6%B0%E0%A6%BE%E0%A6%A4,%E0%A6%B6%E0%A6%AC%E0%A7%87%20%E0%A6%95%E0%A6%A6%E0%A6%B0,%E0%A6%B6%E0%A6%AC%E0%A7%87%20%E0%A6%AE%E0%A7%87%E0%A6%B0%E0%A6%BE%E0%A6%9C,ramadan%20calendar
[T3]: https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%AC%E0%A6%BE%E0%A6%A8%E0%A6%BF%E0%A6%B0%20%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%AE,%E0%A6%88%E0%A6%A6%E0%A7%87%E0%A6%B0%20%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%AE,%E0%A6%B9%E0%A6%9C,%E0%A6%86%E0%A6%B6%E0%A7%81%E0%A6%B0%E0%A6%BE
[T4]: https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%9C%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%B0%20%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%AB,%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%20%E0%A6%87%E0%A6%9C%E0%A6%A4%E0%A7%87%E0%A6%AE%E0%A6%BE,%E0%A6%88%E0%A6%A6%E0%A7%87%20%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%81%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%AC%E0%A7%80
[T5]: https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%93%E0%A6%AE%E0%A6%B0%E0%A6%BE%E0%A6%B9,%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%AC%E0%A6%BE%E0%A6%A8%E0%A6%BF,%E0%A6%AB%E0%A6%BF%E0%A6%A4%E0%A6%B0%E0%A6%BE,%E0%A6%97%E0%A6%B0%E0%A7%81%E0%A6%B0%20%E0%A6%B9%E0%A6%BE%E0%A6%9F
[T6]: https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%B9%E0%A6%9C%20%E0%A6%A8%E0%A6%BF%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A6%A8,%E0%A6%B9%E0%A6%9C%20%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%87%E0%A6%9C,umrah%20package,%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%86%E0%A6%A8
[T7]: https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%B0%E0%A7%8B%E0%A6%9C%E0%A6%BE,%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BE%E0%A6%AC%E0%A6%BF%E0%A6%B0%20%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C,%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%A4,%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%B2%E0%A6%BE%E0%A6%A4%E0%A7%81%E0%A6%B2%20%E0%A6%95%E0%A6%A6%E0%A6%B0
[T8]: https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,hajj,umrah,hajj%20registration,%E0%A6%AE%E0%A6%B9%E0%A6%B0%E0%A6%B0%E0%A6%AE
[T9]: https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%A6%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE,%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%95%20%E0%A6%A8%E0%A6%BE%E0%A6%AE,%E0%A6%B9%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%B8,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%AB
[T10]: https://trends.google.com/trends/explore?date=today%205-y&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%88%E0%A6%A6,%E0%A6%88%E0%A6%A6%E0%A7%81%E0%A6%B2%20%E0%A6%86%E0%A6%9C%E0%A6%B9%E0%A6%BE,%E0%A6%88%E0%A6%A6%E0%A7%81%E0%A6%B2%20%E0%A6%AB%E0%A6%BF%E0%A6%A4%E0%A6%B0,%E0%A6%86%E0%A6%B0%E0%A6%BE%E0%A6%AB%E0%A6%BE%E0%A6%B0%20%E0%A6%A6%E0%A6%BF%E0%A6%A8
[TD]: https://trends.google.com/trends/explore?date=today%203-m&geo=BD&q=%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A6%AF%E0%A6%BC,%E0%A6%9C%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%B0%20%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%AB,%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE%20%E0%A6%95%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%AB,%E0%A6%9C%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%B0%20%E0%A6%A6%E0%A6%BF%E0%A6%A8%E0%A7%87%E0%A6%B0%20%E0%A6%86%E0%A6%AE%E0%A6%B2
[AC]: https://suggestqueries.google.com/complete/search?client=firefox&hl=bn&gl=bd&q=%E0%A6%B6%E0%A6%AC%E0%A7%87%20%E0%A6%AC%E0%A6%B0%E0%A6%BE%E0%A6%A4
