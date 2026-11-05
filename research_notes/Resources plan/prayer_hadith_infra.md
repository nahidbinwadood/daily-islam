# Data sources and infrastructure: prayer times, hadith/dua, hosting

Research date: **2026-11-05**. All sources were accessed on 2026-11-05 unless noted.
Labels: **[V]** = verified on an official page, repo or live endpoint. **[S]** = secondary source (news, forum
snippet, blog). **[U]** = unverified or from general knowledge. Check these before relying on them.

---

## A. Prayer times, Hijri, Qibla, location

### A1. Aladhan API (api.aladhan.com)
- **What it is:** a REST API for prayer times, a Hijri calendar and Qibla direction. [V]
- **Cost:** no price is stated anywhere. In practice it is free with no key [U]. A paid "premium hosting" tier exists [S].
- **Rate limits:** about **12 req/s per IP**, plus a cumulative cap of **70 req per 7 s**. Exceeding the first returns HTTP 429; exceeding the cap makes requests time out [S]. Source: a search snippet of the official forum thread https://community.islamic.network/d/2-is-there-a-rate-limit-on-the-apis (the page would not render for me). A third-party wrapper says about 14 req/s [S].
- **Terms:** https://aladhan.com/credits-and-terms. Everything is provided "WITHOUT ANY WARRANTY", and the page warns that computed times may not be accurate by some standards. It says nothing about commercial use or attribution [V].
- **Methods:** listed at https://api.aladhan.com/v1/methods [V].
  - **KARACHI = id 1** (University of Islamic Sciences, Karachi), Fajr 18°, Isha 18°.
  - Others: MWL=3, ISNA=2, EGYPT=5, MAKKAH=4, GULF=8, MOONSIGHTING=15, JAKIM=17, KEMENAG=20, JORDAN=23, CUSTOM=99.
  - It also accepts a `tune` parameter and `methodSettings`.
  - Hanafi Asr uses `school=1` (0 = Shafi) [U]. The docs page I fetched did not show this, but it is long-standing Aladhan behaviour.
- **Risk:** medium. It is a single community-run service with no SLA. At millions of users, calling it from the client would breach the per-IP limits behind CGNAT (Bangladeshi mobile carriers share IPs) [U]. **Use it only as a cross-check, never in the serving path.**

### A2. adhan-js (batoulapps/adhan-js)
- **What it is:** an on-device prayer-time library based on Jean Meeus, *Astronomical Algorithms*. It includes a `Qibla(coordinates)` function [V].
- **URL:** https://github.com/batoulapps/adhan-js. Methods: https://github.com/batoulapps/adhan-js/blob/develop/METHODS.md
- **License:** **MIT** [V].
- **Methods:** Karachi (18°/18°, "generally applicable"), MWL, Egypt, Umm al-Qura, Dubai, Qatar, Kuwait, MoonsightingCommittee, Singapore, Turkey, Tehran, ISNA, Other/custom. `Madhab.Hanafi` gives the later Asr. It has high-latitude rules, which Bangladesh does not need [V].
- **Accuracy:** no measured error is published. It is a precise astronomical algorithm, so the remaining differences from official tables come from *ihtiyat* (precautionary minutes) and rounding, not from the maths [U].
- **Cost:** zero. Computing on the device means no API calls, and it works offline in a PWA.
- **Maintenance:** about 540 stars and 538 commits. The last release date was not visible [V].
- **Risk:** low. **This is the recommended engine:** Karachi method + Hanafi madhab + a per-prayer minute `adjustments` table calibrated against Islamic Foundation tables.

### A3. PrayTimes.org (zarrabi/praytime)
- **What it is:** the JS library by Hamid Zarrabi-Zadeh; Aladhan credits it as a source [V].
- **URL:** https://github.com/zarrabi/praytime, https://praytimes.org
- **License:** the new repo says **MIT** [V]. The older PrayTimes.js 2.x was LGPL [U].
- **Risk:** low, but it is small (9 commits in the new repo). adhan-js is better maintained.

### A4. Islamic Foundation Bangladesh (IFB) timetables
- **API:** none. The site https://islamicfoundation.gov.bd/ has no prayer, sehri/iftar or fitra section and no API. Its files and notice sections hold administrative documents [V]. Timetables reach the public through press releases, newspapers and printed calendars [S].
- **District schedules:** for Ramadan 2026, IFB **for the first time prepared separate sehri/iftar schedules for all 64 districts** [S].
  - IFB said people should follow their own district's schedule.
  - It called the claims of "add/subtract up to 9 minutes from Dhaka" "completely wrong and baseless" (bdnews24, 25 Jan 2026: https://bdnews24.com/bangladesh/30fbe58fadea).
  - The format of the schedules (PDF or image) was not stated [S].
- **Older practice:** a single Dhaka table plus district +/- minute offset lists. These still circulate on third-party sites, e.g. https://bdpublicnews.com/?p=1847 [S, unreliable].
- **Method:** "close to the Karachi standard" according to aggregators [S]. In practice it is Karachi 18°/18° + Hanafi Asr + *ihtiyat* minutes [U].
- **Public dataset:** I found no official machine-readable dataset.
  - Closest: **wasilah-mcp** (MIT code, https://github.com/mumullickm/wasilah-mcp). It claims "IFB's published sehri and iftar offsets from Dhaka" for 64 districts under `data/ifb-district-offsets`. The source document and year are not stated [S]. These offsets may be the pre-2026 style that IFB now disowns.
  - ihadis.com shows Dhaka times attributed to IFB, but that is a web page, not data [S].
- **Recommendation:**
  - Compute times with adhan-js at each district HQ coordinate.
  - Each Ramadan, transcribe IFB's 64-district sehri/iftar table into JSON (a manual task of about 1 day) and use it as an override or calibration.
  - Show a "Calculated, may differ 1–2 min from IFB" note outside Ramadan.

### A5. Hijri date
- **Browser Intl:** `Intl.supportedValuesOf('calendar')` includes `islamic-umalqura`, `islamic-civil` and `islamic-tbla` [V].
  - `islamic-umalqura` covers 1300–1600 AH and falls back to civil outside that range.
  - **Avoid plain `islamic`.** It is an undocumented astronomical simulation that is canonicalized with a warning.
  - Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
- **Bangladesh** follows the **National Moon Sighting Committee**.
  - The committee meets at IFB, Baitul Mukarram. It is chaired by the Religious Affairs Secretary and uses reports from district administrations, IFB offices, BMD and SPARRSO. IFB calls it the sole official authority [S].
  - Examples: Muharram 1448 began 17 Jun 2026; Safar 1448 began 16 Jul 2026 (BSS: https://www.bssnews.net/news/national/396665, https://www.bssnews.net/others/405993).
  - There is **no API**. Announcements come via BSS and newspapers.
- **How to apply the offset:**
  1. Compute `islamic-umalqura`.
  2. Apply a server-published `hijriOffsetDays`. Bangladesh is usually **-1 day** versus Umm al-Qura [U], but it varies by month.
  3. Publish the offset in a tiny JSON (e.g. `/config/hijri.json` with `{ "1448-06": {"start":"2026-11-xx"} }`), served from the edge with a short TTL.
  4. An admin updates it within an hour of each committee announcement, about 12 times a year, around the 29th of each month.
  5. Let users override the offset by ±1 or ±2 days.
  6. Prefer storing **month start dates** rather than a constant offset, because that is exact and supports history.

### A6. Qibla
- **Calculation:** a great-circle initial bearing from the user's coordinates to the Kaaba (21.4225°N, 39.8262°E). It is pure maths with no API, and adhan-js includes it [V]. From Bangladesh the bearing is about 277–279° (just north of west) [U].
- **Compass:** uses `DeviceOrientationEvent` [V] (https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent).
  - It needs HTTPS.
  - **iOS:** `DeviceOrientationEvent.requestPermission()` must be called from a user tap. The heading comes from the non-standard `webkitCompassHeading`, with `webkitCompassAccuracy` (about ±10°).
  - **Chrome Android:** a true heading needs the separate `deviceorientationabsolute` event. Plain `alpha` is relative to an arbitrary start.
  - Values can be `null`, so use feature detection.
- **Risk:** magnetometer accuracy is ±10–20° near metal or phone cases [U]. Always show the static bearing in degrees plus a "calibrate (figure-8)" hint. A map line (Qibla on a map) is a reliable fallback.

### A7. Geolocation to district
- **Browser Geolocation API:** HTTPS plus a permission prompt [U, standard].
- **Fallbacks:** Cloudflare Workers expose a coarse IP location in `request.cf` (city/latitude/longitude) at no extra cost [U]. A manual district picker should be the default for first-time users.
- **Offline reverse geocoding:** for prayer times, the **nearest district HQ centroid** (64 points, about 3 KB JSON) is accurate enough, since the time difference across a district is under 1 min [U]. Point-in-polygon is optional.
- **Datasets:**

| Dataset | Content | License | Notes |
|---|---|---|---|
| OCHA HDX `cod-ab-bgd` "Bangladesh - Subnational Administrative Boundaries" | ADM0–ADM3 (division/district/upazila), some records list ADM4 (union). Source agency: BBS; published by OCHA | rights "Public" in the BTAA mirror; exact license not confirmed (HDX page returned 403) [S]. HDX CODs are commonly CC BY-IGO [U] | v03, coverage May–Jun 2025; "requires improvements"; 5 district spellings changed in 2018. https://data.humdata.org/dataset/cod-ab-bgd, mirror https://geo.btaa.org/catalog/401d3fae-4262-48c9-891f-461fd776d49b |
| geoBoundaries BGD ADM1–3 | polygons | CC BY 4.0 in general; check the per-boundary license (gbAuthoritative/UN SALB can be non-commercial) [S] | https://www.geoboundaries.org |
| nuhil/bangladesh-geocode | division/district/upazila/union with Bangla names; lat/long only for district DC offices | **MIT** [V] | https://github.com/nuhil/bangladesh-geocode, about 700 stars |
| mdtanjilhasan/bd-geocode-with-lat-long | division/district/upazila with coordinates | MIT [S] | last push 2020 |
| JHM69/bangladesh-geojson | 3 levels, Bangla/English names, lat/long, postcodes | not checked [U] | https://github.com/JHM69/bangladesh-geojson |

The Bangladesh administrative structure has **8 divisions, 64 districts and about 495 upazilas** (the upazila count changes as new ones are created) [U].

---

## B. Hadith, dua, names, zakat/fitra

### B1. fawazahmed0/hadith-api (jsDelivr)
- **URL:** https://github.com/fawazahmed0/hadith-api
  - Base: `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/{endpoint}`
  - Endpoints: `/editions`, `/editions/{ed}`, `/editions/{ed}/{n}`, `/editions/{ed}/sections/{s}`, `/info`
  - Each comes in `.json` and `.min.json` forms [V].
- **License:** repo **Unlicense** (public domain) [V]. The HF mirror `fawazahmed0/hadith-data` is CC0 [S]. **However, the licence covers the compilation and code. The Bangla translations are third-party works.** The `source`, `comments` and `author` fields are empty or "Unknown" for every Bengali edition [V]. The text looks like widely circulated BD translations (Tawheed/IFB-style) [U]. **There is a copyright risk if republished commercially at scale.**
- **Bengali editions** (from editions.json) [V]:
  - ben-bukhari, ben-muslim, ben-abudawud, ben-tirmidhi, ben-nasai, ben-ibnmajah, ben-malik, ben-nawawi.
  - No Bengali for qudsi or dehlawi.
  - Note: `ben-bukhari` is mislabeled `direction: rtl`.
  - Some Bengali texts begin with an Arabic chapter heading or a stray "।" (data quality issue).
- **Grading:** per-hadith `grades: [{name, grade}]`, e.g. Al-Albani, Zubair Ali Zai, Ahmad Shakir [V]. It is present on ben-tirmidhi and ben-abudawud (sampled). The grade labels are in English ("Sahih", "Shadh"), so they need a Bangla label map.
- **Size:** the full `ben-bukhari.min.json` is **14.7 MB** [V, downloaded]. Use per-hadith or per-section files on the client.
- **Limits:** the repo says "No rate limits" [V].
  - jsDelivr limits: 20 MB max file from GitHub, 150 MB max package, "no bandwidth limits" [V] (https://github.com/jsdelivr/jsdelivr).
  - Caching: branch refs 12 h; version aliases 7 d; static versions and commits "effectively forever". The headers seen were `max-age=604800, s-maxage=43200` [V].
  - The maintainer **advises building a fallback** (`.json` ↔ `.min.json`) [V].
- **Recommendation:** do **not** hot-link at scale.
  - Vendor a pinned snapshot.
  - Clean and normalize it (rtl flag, stray chars, grade translations).
  - Serve it from your own R2/Workers static assets.
  - Seek translation permission or swap in a translation you can license.
- **Risk:** medium (copyright and provenance), low (technical).

### B2. sunnah.com API
- **Access:** you need an API key, requested by opening a GitHub issue at https://github.com/sunnah-com/api/issues [S]. Docs: https://sunnah.stoplight.io/docs/api/ (not fetched). sunnah.com/developers returned 403.
- **Terms:**
  - No public terms were found [V: README has none].
  - Requesters cite the site's "about" page on mass reproduction [S].
  - Maintainers reportedly ask about rate needs and commercial use, and offer offline dumps [S].
  - Self-proposed limits in requests are about 2 req/s and 1,000 req/day [S].
  - Many requests sit unanswered (e.g. #3791, opened 5 Sep 2026, no reply) [V].
  - The English translations are modern copyrighted works [S].
- **Bangla:** not confirmed. I believe sunnah.com carries no Bangla translations [U].
- **Risk:** high for a BD product. Approval is slow or uncertain, the content is copyrighted, and it is likely English-only.

### B3. hadithbd.com, IRD ihadis.com
- **API:** none found.
- **Fetching:** hadithbd.com returned 403 to automated fetch. No terms or licence page was found [U].
- **Copyright:** these sites host BD-publisher translations (Tawheed Publications, IFB, Bangladesh Islamic Centre etc.) that are copyrighted by their publishers or translators [U].
- **Rule: do not scrape. Partner and license instead.** IRD (ihadis.com) is a BD organisation and a potential content partner [U].

### B4. Hisnul Muslim API (hisnmuslim.com/api)
- **Live check:** `https://www.hisnmuslim.com/api/husn.json` lists **only Arabic and English** [V, live, 2026-11-05].
  - Per-language index: `/api/ar/husn_ar.json` and `/api/en/husn_en.json`, holding chapter titles plus links to `/api/{lang}/{id}.json` and audio MP3s.
  - Bengali paths (`bn`, `ben`, `bd`) return 404.
  - The `/api/` root returns 403.
  - URLs inside the JSON are plain **http://**, which causes mixed-content issues.
  - No terms or licence were found [U].
- **Bangla Hisnul Muslim:** the IslamHouse PDF translated by **Dr. Abu Bakr Muhammad Zakariya** (2013) is on archive.org [S]. Its reuse licence is not stated, so ask IslamHouse or the translator for permission. Commercial print editions exist.
- **Risk:** medium. Build your own dua JSON: take the Arabic text (classical, public domain), the hadith references, and a Bangla translation you have licensed or commissioned.

### B5. Islamic names
- **Hugging Face `wpacademy/muslim-names-dataset`:** 14,585 names (English/Arabic/meaning/gender), **CC0** [S]. It was scraped from muslimnames.com, so the provenance is questionable.
- **Bangla-script dataset:** none with an open licence was found [S].
- **Plan:** curate your own list of about 1–2k names with Bangla spelling and meaning, and have it reviewed.

### B6. Gold/silver price for zakat (BAJUS)
- **API:** none. `bajus.org/api` returns 404 [V].
- **Price page:** **https://www.bajus.org/gold-price** is an HTML page with per-gram prices [V, live 2026-11-05].
  - Gold: 22K 19,690, 21K 18,805, 18K 16,150 and traditional 13,190 BDT/gram.
  - Silver: 22K 300 BDT/gram.
  - 1 bhori = 11.664 g.
- **Update frequency:** ad hoc, with about 106 revisions in 2026 so far, sometimes twice in 24 h (UNB) [S].
- **Plan:** a daily scheduled Worker scrapes the page, with admin review. Check BAJUS's terms or ask permission first. Show "as of date", and offer a manual entry field for the user's own local price.
- **Nisab:** 7.5 tola (87.48 g) gold or 52.5 tola (612.36 g) silver [U, standard figures]. Most BD scholars and IFB use the silver nisab for zakat [U].

### B7. Fitra rate (Islamic Foundation, National Fitra Fixation Committee)
- **1447 AH (2026):** **minimum Tk 110, maximum Tk 2,805** per person. Set 25 Feb 2026 at Baitul Mukarram, unchanged from 2025. In 2024 it was Tk 115 to Tk 2,970 [S, multiple outlets, e.g. https://today.thefinancialexpress.com.bd/print/minimum-fitra-set-at-tk-110-maximum-at-tk-2805-1772041948].
  - The rates are based on the market prices of wheat/flour, barley, dates, raisins and cheese (panir), collected from all divisions.
  - The full five-item breakdown is in the press release [S].
- **Next update:** about mid-Ramadan 1448 (around Feb 2027). Enter it manually.

---

## C. Infrastructure

### C1. Cloudflare
- **Workers** [V] (https://developers.cloudflare.com/workers/platform/pricing/):
  - Free: 100k req/day and 10 ms CPU per invocation.
  - Paid: $5/mo, with 10M req/mo included, then $0.30/M; 30M CPU-ms included, then $0.02/M.
  - KV, Free: 100k reads/day, 1k writes/day.
  - KV, Paid: 10M reads, then $0.50/M; 1M writes, then $5/M.
  - D1, Free: 5M rows read/day, 5 GB.
  - D1, Paid: 25B rows read/mo included, 5 GB, then $0.75/GB-mo.
- **Static assets (Workers):** **requests to static assets are free and unlimited** [V].
  - 20,000 files per version on Free, 100,000 on Paid (Wrangler ≥4.34), 25 MiB max per file [V] (https://developers.cloudflare.com/workers/platform/limits/).
  - Requests that hit the Worker script, or match `run_worker_first`, are billed. On Free, they return 429 once the limit is exceeded [V].
- **Pages:** 500 builds/mo on Free; 20,000 files (100k on paid with `PAGES_WRANGLER_MAJOR_VERSION=4`); 25 MiB per file. No bandwidth limit is mentioned [V]. Docs steer large-scale and new work to Workers Static Assets [V].
- **R2** [V] (https://developers.cloudflare.com/r2/pricing/):
  - Standard: $0.015/GB-mo; Class A $4.50/M; Class B $0.36/M.
  - Free tier: 10 GB-mo, 1M Class A, 10M Class B.
  - Infrequent Access: $0.01/GB-mo, $0.01/GB retrieval, 30-day minimum, no free tier.
  - **Egress to the internet is free.**
  - The `r2.dev` URL is rate-limited and not meant for production; use a custom domain [U].
- **CDN cache** [V] (https://developers.cloudflare.com/cache/concepts/default-cache-behavior/):
  - MP3 is cached by default.
  - **HTML and JSON are NOT cached by default** (needs a Cache Rule).
  - Max cacheable file size: 512 MB on Free/Pro/Business.
  - Free-plan CDN bandwidth is unmetered [U].
- **Terms caveat** [V] (https://www.cloudflare.com/service-specific-terms-application-services/):
  - Non-Enterprise users must use paid services (the "Developer Platform", Images, Stream) to serve video and large files.
  - Cloudflare may limit accounts that serve "a disproportionate percentage of pictures, **audio files**, or other large files" without them.
  - R2 is part of the Developer Platform, so **serving Quran audio from R2 on a custom domain is the compliant route** [U: R2 is not named explicitly]. Do not serve MP3s through the plain CDN from a non-Cloudflare origin.

### C2. Vercel (comparison) [V]
- **Hobby:** $0, **non-commercial only**, where commercial use includes ads and paid staff. 100 GB Fast Data Transfer, 1M function invocations, 10 GB origin transfer. Usage is capped, with no paid overage (https://vercel.com/docs/limits/fair-use-guidelines).
- **Pro:** $20/mo. Data transfer overage is **$0.15–$0.35/GB** depending on region; CDN requests $2.00–$3.20/M (https://vercel.com/docs/pricing/regional-pricing).
- **"Flat Rate CDN"** (GA 8 Sep 2026, Pro): tiers of $20/mo (10M req, 50 TB), $100 (50M req, 50 TB) and $300 (150M req, 50 TB). Spike protection is subject to fair use (https://vercel.com/changelog/flat-rate-cdn-is-now-ga-for-pro-teams).
- **Verdict:** usable for the web app, but request caps make it costly for per-ayah audio or JSON fan-out.

### C3. Netlify (comparison) [V]
- **Plans:** credit-based. Free has 300 credits with a hard cap (about **15 GB of bandwidth** if spent on nothing else). Personal is $9 (1,000 credits); Pro is $20 (3,000 credits).
- **Rates:** 20 credits per GB of bandwidth (about **$0.13/GB** at the Pro pack rate) and 2 credits per 10k requests (https://www.netlify.com/pricing/, https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/).
- **Verdict:** the worst fit for mass traffic.

### C4. Database for static religious content
- **Recommendation:** the content is read-only. Quran, hadith and duas are fixed texts, so **pre-build static JSON shards** (per surah, per hadith section, per dua chapter) and serve them as Workers static assets or from R2. That gives zero DB cost, works offline in a service worker, and scales without limit.
- **Use a database only for user data** (bookmarks, progress, push subscriptions):
  - **Cloudflare D1** (above).
  - **Supabase** [V] (https://supabase.com/pricing): Free has 500 MB, 5 GB egress and 50k auth MAU, is **paused after 1 week inactive**, and allows 2 projects. Pro is from $25/mo with 8 GB disk, 250 GB egress (then $0.09/GB) and 100k MAU (then $0.00325/MAU).
  - **Neon** [V] (https://neon.com/pricing): Free has 100 CU-h, 1 GB per project and 5 GB egress; compute is suspended once caps are hit. Launch is pay-as-you-go: $0.106/CU-h, $0.35/GB-mo, 500 GB egress (then $0.10/GB).
- **Full-text search in Bangla:**
  - **Postgres FTS:** no Bengali Snowball stemmer ships with PostgreSQL [U]; the docs do not list one [V]. Use the `simple` config, which only lowercases and drops stop words, plus `pg_trgm` for fuzzy matching. There is no stemming, so the many Bangla inflections (e.g. -এর, -কে, -রা) will not match.
  - **Meilisearch** [V] (https://www.meilisearch.com/pricing): self-hosted is **MIT** with "no usage limits"; the Enterprise edition is under a different licence [U]. Cloud starts at about $20–30/mo (e.g. 100k docs and 50k searches for $30). The free option is a 14-day trial only. The Charabia tokenizer has **no Bengali-specific pipeline** [S], so it falls back to Unicode segmentation, which works on whitespace-separated Bangla but has no stemming.
  - **Typesense** [V]: server **GPL-3.0**, clients Apache. Cloud pricing is RAM/vCPU based through a calculator; the smallest price was not visible [U] (https://cloud.typesense.org/pricing).
  - **Zero-server option:** a client-side static index (Pagefind / MiniSearch / FlexSearch, MIT) built from the shards [U]. A good fit for Quran and hadith with Bangla n-gram tokenization.
  - **Suggested plan:** a client-side index for v1. Add self-hosted Meilisearch on a $5–10 VPS later, if search needs typo tolerance across 40k+ hadith.

### C5. Web push
- **iOS/iPadOS 16.4+** [V] (https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/):
  - Push works **only for a Home Screen web app**: a manifest with `display: standalone` or `fullscreen`.
  - Permission must be requested from a direct user gesture.
  - It uses the standard Push API, Notifications API and Service Worker.
  - **No Apple Developer account is needed.** Allow `*.push.apple.com`.
- **Android Chrome and desktop:** push works without install [U, standard].
- **FCM:** listed as "No-cost" on both the Spark and Blaze plans [V] (https://firebase.google.com/pricing). FCM is not needed for web, though: standard VAPID Web Push can be sent directly from a Worker [U].
- **Prayer reminders:**
  - Web cannot schedule local notifications. Notification Triggers was abandoned [U].
  - So the server must push at each prayer time per district: 64 districts × 5–6 prayers, with fan-out to every subscriber.
  - At 1M subscribers that is about 5–6M encrypted pushes a day.
  - Batch with Cloudflare Queues + Cron Triggers. CPU per push is about 1–3 ms of encryption, which is within the Paid plan's 30M CPU-ms [U, estimate].
  - In-app alerts while the tab is open need no push at all.

### C6. Quran audio bandwidth math
- **Bitrate maths:** 64 kbps = 8 KB/s = **28.8 MB/hour**; 128 kbps = **57.6 MB/hour**.
- **Recording length:** a full murattal recitation is about 20–30 hours depending on the reciter [U].
- **Size of one full recitation:**
  - 64 kbps: about **0.6–0.9 GB**.
  - 128 kbps: about **1.2–1.7 GB**.
  - Cross-check: the tilawah CLI says a full per-ayah set at ≥128 kbps is "typically 2.5–2.8 GB" [S] (https://zff.dev/ReflectsLight/tilawah). One 6,236-file translation set = 1,144 MiB [S].
- **Storage for 10 reciter sets** (about 10–25 GB) on R2: **under $0.40/mo**.

Scenario: 1M monthly users × 2 h of listening/month = **2M listening-hours**. Per-ayah files average about 15 s, so that is about 480M file requests [U, estimate].

| | 64 kbps (57.6 TB/mo) | 128 kbps (115 TB/mo) |
|---|---|---|
| **R2 (custom domain)** egress | **$0** | **$0** |
| R2 Class B if every request hits R2 (480M − 10M free) × $0.36/M | about $170 | about $170 |
| R2 with CDN cache hits (Cache Rule on the custom domain) | about $5–20 (ops only on misses) | same |
| **AWS S3 direct egress** ($0.09 first 10 TB, $0.085 next 40 TB, $0.07 next 100 TB, 100 GB free) [S] + GETs $0.0004/1k [V] | about **$4,940 + $190 ≈ $5.1k/mo** | about **$9,070 + $190 ≈ $9.3k/mo** |
| Vercel Pro on-demand $0.15–0.35/GB | about $8.8k–20.6k (or a flat tier, but the 480M requests break the request caps) | about $17.7k–41k |
| Netlify about $0.13/GB | about $7.7k | about $15.3k |

S3 tiers come from third-party 2026 summaries; the AWS page only confirms 100 GB free and $0.09/GB as an example.

**Conclusion:**
- Serve audio from **R2 with a custom domain and a cache rule**.
- Default to **64 kbps** (Opus or AAC at 48 kbps is another option).
- Prefetch only the next 2–3 ayahs.
- Also consider existing reciter CDNs (everyayah.com, quran.com audio, mp3quran.net), checking their hot-link terms first [U].

---

## Key facts table

| Item | Provides | Cost | Limits | License | Risk |
|---|---|---|---|---|---|
| Aladhan API | prayer/Hijri/Qibla REST | free, no key [U] | about 12 req/s and 70/7 s per IP [S] | no warranty; no stated licence | Medium: CGNAT plus no SLA; use only as a cross-check |
| adhan-js | on-device times plus Qibla | $0 | none (client) | MIT [V] | Low: **primary engine** |
| PrayTimes (zarrabi) | on-device times | $0 | none | MIT (new repo) [V] | Low |
| IFB timetables | official BD times | $0 | no API; press only; 64-district tables since Ramadan 2026 [S] | govt; none stated | Med: manual transcription each Ramadan |
| Intl islamic-umalqura | Hijri date | $0 | 1300–1600 AH | built into the browser | Low: plus a manual BD month-start JSON |
| Moon Sighting Committee | official BD Hijri | $0 | no API; BSS/news | — | Ops: about 12 updates a year |
| DeviceOrientation | compass | $0 | iOS needs permission on a tap; Android needs `deviceorientationabsolute` [V] | web standard | Med: accuracy ±10–20° |
| HDX cod-ab-bgd | ADM0–3 polygons (BBS) | $0 | v03, 2025 | "Public" / likely CC BY-IGO [S/U] | Low |
| nuhil/bangladesh-geocode | 4 levels, Bangla names, district coordinates | $0 | — | MIT [V] | Low |
| fawazahmed0 hadith-api | 8 Bangla hadith books plus grades | $0 | jsDelivr: 20 MB/file, 150 MB/pkg, no bandwidth cap [V] | Unlicense, but translations of unknown provenance | **Med-High: copyright**; self-host a snapshot |
| sunnah.com API | hadith (EN) | free on approval | key by GitHub issue; slow [S] | copyrighted translations | High; no Bangla [U] |
| hadithbd / ihadis | Bangla hadith | — | no API | publisher copyright [U] | High: partner, don't scrape |
| hisnmuslim.com API | Hisnul Muslim (AR/EN only) | $0 | http-only URLs; no Bangla [V] | none stated | Med: build your own Bangla dua set |
| BAJUS gold-price page | daily gold/silver BDT/gram | $0 | HTML only, ad hoc updates [V] | unknown | Med: scrape with permission plus manual check |
| IFB fitra | Tk 110–2,805 (1447) [S] | $0 | yearly announcement | — | Low: manual |
| Cloudflare Workers + static assets | hosting | Free / $5 Paid | static asset requests free and unlimited; 20k/100k files; 25 MiB/file [V] | — | Low: **recommended** |
| Cloudflare R2 | object storage | $0.015/GB-mo; A $4.50/M; B $0.36/M | **$0 egress** [V] | — | Low: audio host |
| Vercel | hosting | Hobby non-commercial; Pro $20 | $0.15–0.35/GB overage [V] | — | Cost at scale |
| Netlify | hosting | Free 300 credits (about 15 GB) | about $0.13/GB [V] | — | Cost at scale |
| Supabase / Neon | Postgres for user data | $0 → $25 / pay-as-you-go | free tiers pause or suspend [V] | — | Not needed for static content |
| Meilisearch / Typesense | search | self-host free; cloud from about $20–30 | no Bengali stemmer [S] | MIT / GPL-3 [V] | Use a client-side index first |
| Web Push (iOS 16.4+) | notifications | $0 (VAPID); FCM free [V] | iOS only after home-screen install [V] | standard | Med: server fan-out needed |
| Quran audio | per-ayah MP3 | about 0.6–0.9 GB per reciter at 64 kbps [U] | 1M users × 2 h at 64 kbps = 57.6 TB/mo → R2 about $0–170 vs S3 about $5.1k | reciter licences vary | Choose a reciter with redistributable audio |

## Open items to verify
1. The exact HDX COD-AB licence. The page returned 403; check it in a browser.
2. The Aladhan rate limit thread text. The forum would not render.
3. Whether sunnah.com has any Bangla content, and how to request a key now.
4. The provenance and permission of the Bangla translations in fawazahmed0 (likely Tawheed Publications / IFB).
5. The 2026 IFB 64-district Ramadan table format, and whether IFB publishes a year-round district prayer calendar (Islamic Foundation calendar / "Chirosthayi Namajer Shomoysuchi").
6. BAJUS website terms for automated reading.
7. The licences of reciter audio (e.g. everyayah sources), before mirroring to R2.
8. Typesense Cloud minimum price.
