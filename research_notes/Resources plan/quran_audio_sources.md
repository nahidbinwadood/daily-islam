# Quran text, translation, tafsir, tajweed and audio sources: terms, limits, licensing

Research date: 2026-11-05 (all "accessed" dates below are 2026-11-05 unless stated).
Scope: a Bangla-language, web-first, Bangladesh-focused Islamic site aiming at millions of users.
Method: official docs and terms pages (WebFetch/WebSearch), plus live HTTP probes (curl from a Bangladesh IP, CF-RAY `DAC`) to confirm what the endpoints actually return.

Labels used:
- **Verified**: read on the official page, or seen in a live response today.
- **Probe**: seen in live HTTP headers or JSON today. This is fact about current behaviour, not a promise.
- **Unverified**: could not confirm from an official source. Treat it as an assumption.

Not legal advice. Copyright items marked "unverified" need written confirmation from the rights holder before launch.

---

## 0. Bottom line for Daily Islam

1. **Quran.com's free unauthenticated v4 API still works, but it is the "legacy" path.** The new path is the Quran Foundation (QF) Content API: OAuth2 client credentials, backend-only, with production access approved by hand. Build against QF from day one and use `api.quran.com/api/v4` only for prototyping.
2. **QF terms forbid the "download everything once and self-host forever" model.** QF content may be cached for at most 1 week, unless you use QF **Content Sync** and re-sync at least every 7 days. A prepackaged build-time bundle is not allowed. Serving QF content from your own backend inside your own app's UX is allowed. Exposing it as an API or dataset to others is not. Ads, donations and freemium are allowed without a commercial licence.
3. **No Bangla translation or tafsir that we want has an open licence.** QUL's "Licence" tab for every Bangla translation and tafsir says: *"We don't have copyright information for this resource."* All of them are modern works by living or recently deceased translators, or by publishers, so they are almost certainly still in copyright (Bangladesh: author's life + 60 years). Through QF's API we get use within our app under QF's terms. If we self-host them from QUL downloads, we take on the copyright risk ourselves.
4. **The cleanest self-hostable stack:**
   - Arabic text: Tanzil (CC BY 3.0, verbatim only, attribution plus a link) or the KFGQPC Hafs text.
   - Bangla translation: Dr Abu Bakr Zakaria via QuranEnc. It has an explicit republish permission with 7 conditions.
   - Tajweed: cpfair/quran-tajweed annotations (CC BY 4.0) over the Tanzil text.
   - Audio: KFGQPC's own recitations (official free-use statement, but the site is unreachable from BD, so this is only partly verified), or QF audio through the API.
5. **Recitation audio is the weakest legal link.** Every aggregator (QuranicAudio, Al Quran Cloud, EveryAyah, mp3quran) says, or implies, that copyright stays with the reciters or publishers. "Free to stream" is not "free to redistribute". For millions of users, do not mirror third-party MP3s onto our own CDN without a reciter- or publisher-level licence. Streaming from QF's CDN through API-returned URLs is the lowest-risk option.

---

## 1. Quran.com API v4 (legacy) and Quran Foundation Content API

### 1a. `api.quran.com/api/v4` (legacy, unauthenticated)

| Item | Finding | Status |
|---|---|---|
| URL | `https://api.quran.com/api/v4/...` | Probe |
| Auth | None. Requests succeed without a key. | Probe |
| Still up? | Yes, HTTP 200 today. The response header is `x-qf-origin: qf-nonfaceing-data-legacy-api-quran`, so QF labels it "legacy". Served behind Cloudflare with `Cache-Control: public, max-age=604800–691200`. CORS is `*`. | Probe |
| Deprecated? | QF's migration guide calls it "the older unauthenticated API" and says to move to the authenticated Content APIs. **No sunset date is published anywhere I could find.** The JS SDK (`@quranjs/api`) removed the `quran.v4` namespace in v2. | Verified (guide); sunset date: none found |
| Rate limits | None documented. No rate-limit headers were seen. | Unverified |
| Cost | Free (no key, no billing). | Probe |
| Terms | No separate legacy terms. Quran.com's website T&C (updated 2026-07-28) limits Content to "personal, non-commercial use", and bans scraping and automated queries without consent. QF Developer Terms cover API use. The legacy endpoint is effectively unlicensed for production use. | Verified |
| Risk | High for production: it could be switched off or throttled at any time without notice. | Assessment |

Sources: https://api-docs.quran.foundation/docs/quickstart/migration/ ; https://quran.com/terms-and-conditions ; live probes.

### 1b. Quran Foundation Content API (the current path)

| Item | Finding | Status |
|---|---|---|
| Base URLs | Prelive: `https://apis-prelive.quran.foundation` (auth: `https://prelive-oauth2.quran.foundation`). Production: `https://apis.quran.foundation` (auth: `https://oauth2.quran.foundation`). Paths are `/content/api/v4/...`, with the same routes, parameters and response shapes as legacy v4. | Verified |
| Auth | OAuth2 **client credentials**: `POST /oauth2/token`, `grant_type=client_credentials`, `scope=content`, HTTP Basic. The token lasts 3600 s and has no refresh token, so re-request it. Every call sends the headers `x-auth-token` and `x-client-id`. **Backend only:** "Frontend or mobile app clients cannot use this Client Credentials flow". A no-header probe of production returned HTTP 400 "missing required headers". | Verified + Probe |
| Getting keys | Developer Console: https://dev-console.quran.foundation/projects. New apps start in **prelive**, whose dataset has **only Al-Fatihah and Al-Baqarah**. Production needs "approved production permissions", reviewed manually by QF developer relations. No approval timeline is given. QF plans narrower scopes later (e.g. `content.quran.read`), after which `scope=content` will return `invalid_scope` for new credentials. | Verified |
| Rate limits | **Not published.** The Terms say rate-limit values are "QF Confidential Information". Handle 429 with bounded exponential backoff and jitter. | Verified (that the numbers are not public) |
| Cost | No price list. The Terms cap liability at the greater of USD 100 or "fees paid", which implies fees are possible. Today it behaves as a free, approval-gated API. | Unverified (free) |
| Caching | **At most 1 week** for QF Content (API responses, text, translations, audio metadata), **unless** the resource comes through **Content Sync**. Content Sync is "the only permitted way" to keep an offline copy, and you must re-sync "at least every 7 days when connectivity permits". If QF is unreachable for more than 7 days, you may keep the old copy. **No prepackaged database or build-time bundle.** | Verified |
| Fonts / Mushaf images | You may cache or bundle them if you keep an active Developer Console account and **credit Quran Foundation** "in a reasonably accessible place". They may only be distributed as an integrated part of the app, not offered separately. | Verified |
| Redistribution | You may not sell, sublicense or redistribute QF Content or raw API data without a signed commercial licence. Serving it from your own backend inside your own app UX is **not** redistribution. Offering it as data (your own API, dataset, feed, download) **is** redistribution. Derived materials or embeddings that allow the content to be reconstructed carry the same restriction. | Verified |
| Monetisation | Allowed without a commercial licence: paid app, subscriptions, IAP, **ads**, donations, freemium, as long as content stays in the end-user experience. Building ad profiles from QF content or user data needs written consent. | Verified |
| Integrity | Quran text must not be modified "in any way". Snippets must not misrepresent context. No use alongside hate, extremism or inappropriate material. | Verified |
| Other obligations | TLS 1.2+. Report security incidents within 24 h. A public Privacy Policy and Terms of Use. QF may monitor API activity, suspend credentials immediately for breach, or terminate on 30 days' notice. Governed by New York law. On termination you must delete QF content. FAQ: "display attribution wherever Quranic content is surfaced". The Connected Apps attribution string is "Quran data provided by Quran.Foundation". | Verified |
| Removals | QF removed "The Clear Quran" and a Russian word-by-word translation "at the request of their respective copyright holders". This shows that rights holders do enforce. | Verified |
| Risk | Medium. The API is stable and well documented, but there is approval gating, unpublished limits, a weekly re-sync obligation, and a single vendor. | Assessment |

Sources: https://api-docs.quran.foundation/docs/quickstart ; https://api-docs.quran.foundation/legal/developer-terms/ (Last updated 2026-10-11) ; https://api-docs.quran.foundation/legal/mushaf-fonts-and-images/ (2026-10-11) ; https://api-docs.quran.foundation/docs/tutorials/content-sync/getting-started/ ; https://api-docs.quran.com/docs/tutorials/faq/ ; https://api-docs.quran.foundation/docs/updates

**Content Sync resource groups** (verified): `quran_core` (Uthmani, IndoPak, IndoPak Nastaleeq word-level, Uthmani Tajweed, Imla'i text plus surah/juz/hizb metadata), `mushafs` (page mappings and positioned words, but **not** font files or images), `translations` (with footnotes), `word_by_word_translations`, `word_by_word_transliterations`, `tafsirs`, `recitations`, `chapter_recitations`, `articles`. Recitation rows contain **audio URLs, not the audio files**. A third-party PyPI SDK changelog says `quran_core` snapshots were "pending content/licensing approval" (unverified).

### 1c. What v4 / QF provides (feature checklist; probed on legacy v4 today, and QF says shapes are identical)

| Need | Available? | Evidence |
|---|---|---|
| Uthmani text | Yes: `text_uthmani` (verse and word level) | Probe |
| IndoPak text | Yes: `/quran/verses/indopak` and the word field `text_indopak` (e.g. `اَلۡحَمۡدُ لِلّٰهِ رَبِّ الۡعٰلَمِيۡنَۙ`) | Probe |
| Tajweed-annotated text | Yes: `/quran/verses/uthmani_tajweed` returns `text_uthmani_tajweed` with inline `<tajweed class=ham_wasl>…</tajweed>`, `madda_normal`, `madda_permissible`, etc. | Probe |
| Word-by-word Bangla | Yes: `language=bn` with `words=true` gives `translation.text` per word (e.g. "সকল প্রশংসা", "আল্লাহ্‌রই জন্য"), plus English transliteration and per-word audio `wbw/001_002_001.mp3` | Probe |
| Bangla translations | **161** Taisirul Quran (Tawheed Publication), **162** Rawai Al-bayan (Bayaan Foundation), **163** Sheikh Mujibur Rahman (Darussalaam Publication), and **213** Dr. Abu Bakr Muhammad Zakaria. All return text. | Probe |
| Bangla tafsirs | **164** Tafseer ibn Kathir (author field "Tawheed Publication"), **165** Tafsir Ahsanul Bayaan (Bayaan Foundation), **166** Tafsir Abu Bakr Zakaria (author field "King Fahd Quran Printing Complex"), and **381** Tafsir Fathul Majid. All respond. 381 groups several ayahs per entry, so 1:2's text is empty and the content sits on the group head. | Probe |
| Word timings for audio | Yes: `/chapter_recitations/{id}/{chapter}?segments=true` returns per-verse `timestamp_from/to` and per-word `segments` `[word, start_ms, end_ms]` (e.g. Alafasy recitation 7). Chapter audio is hosted at `download.quranicaudio.com/qdc/...`. 12 ayah-by-ayah recitations are listed in `/resources/recitations`. | Probe |
| Mushaf page/line layout | Yes: words carry `page_number`, `line_number`, `code_v1`, `code_v2` (QPC V1/V2 glyph codes). A `mushaf` parameter selects the layout. QF `mushafs` Content Sync provides layout data, but not fonts. | Probe + Verified |
| QPC V1/V2 fonts | Served by QF/quran.com CDN as per-page fonts. Caching and bundling are allowed under the fonts clause (credit QF, keep an active console account). The underlying font copyright belongs to KFGQPC (see §3). | Verified (QF clause) |

### 1d. quran.com open-source repos (github.com/quran)

- **quran.com-images**: scripts that render page images from the old KFGQPC Madani fonts and build a glyph-bounds DB. README: code is "copyleft GPL". The fonts in `res/fonts` "belong to the King Fahd Quran Complex". Verified. https://github.com/quran/quran.com-images
- **quran.com-frontend-next**: an MIT badge, yet the README says "copying the code/project is unacceptable" (contradictory). No font licensing notes. Verified. https://github.com/quran/quran.com-frontend-next
- These repos licence **code**, not Quran or translation **data**.

### 1e. Quranic Universal Library (QUL), qul.tarteel.ai (Tarteel)

| Item | Finding | Status |
|---|---|---|
| Provides | 131 recitations (58 with segment timing), 28 mushaf layouts (KFGQPC V1 1405H, V2 1421H, V4 1441H tajweed, KFGQPC Nastaleeq 15-line, IndoPak 13/15/16-line Taj Company and Qudratullah, Digital Khatt…), 220 translations (22 word-by-word), 115 tafsirs, 30 Quran scripts (Uthmani, IndoPak, IndoPak Nastaleeq, QPC Hafs Tajweed, V4 tajweed glyphs, Imla'i), 26 fonts (QPC V1/V2/V4 Tajweed, QPC Hafs, KFGQPC Nastaleeq, IndoPak Nastaleeq, Me Quran, Digital Khatt, surah-name fonts), plus morphology, topics, mutashabihat, etc. Formats: JSON / SQLite. | Verified |
| Bangla items | Translations: Taisirul Quran (#184), Rawai Al-bayan (#185), Sheikh Mujibur Rahman (#186), Dr. Abu Bakr Zakaria (#200), Fathul Majid (#229), Zakaria Abulsalam (#164), Rowwad (no files), **Bengali wbw** (#94). Tafsirs: Ibn Kathir (#31), Ahsanul Bayaan (#32), Abu Bakr Zakaria (#33), Fathul Majid (#39), Bengali Abridged Explanation / Mukhtasar (#267). | Verified |
| Auth | Download buttons open a **sign-in modal**, so a free account is required to download. You get email when a downloaded resource updates. | Probe |
| Licence | **No blanket licence.** FAQ: "Yes, you can use QUL data in commercial projects" but "check each resource's licensing terms… Some data may have restrictions or require attribution". **Every resource I checked** (all Bangla translations and tafsirs, Alafasy/Minshawi/Ghamdi recitations, KFGQPC V1/V2/Nastaleeq/IndoPak layouts, QPC Hafs/V1/V2/V4/Nastaleeq/IndoPak fonts, QPC Hafs Tajweed / Uthmani / IndoPak scripts) has a Licence tab that reads: **"We don't have copyright information for this resource."** The GitHub repo (TarteelAI/quranic-universal-library) is MIT for **code** only. Tarteel's own audio datasets and AI models are excluded. | Verified |
| Rate limits / cost | Free download. No API limits apply (file downloads). | Probe |
| Risk | Excellent technical data (layouts, segments, glyph codes). Legally it gives **zero cover**: QUL passes copyright due diligence to you. Fine for KFGQPC-derived layouts and Tanzil-derived text (whose own licences are known). Risky for Bangla translations, tafsirs and audio. | Assessment |

Sources: https://qul.tarteel.ai/ ; https://qul.tarteel.ai/faq ; https://qul.tarteel.ai/resources/translation/184/licence (and the same `/licence` path for each resource listed) ; https://github.com/TarteelAI/quranic-universal-library

---

## 2. Quran audio

| Source | What | Auth / limits | Terms on reuse | Status / risk |
|---|---|---|---|---|
| **QF / quran.com audio CDN**: `verses.quran.com/{path}` and `audio.qurancdn.com/{path}` (ayah files e.g. `Alafasy/mp3/001002.mp3`, word files `wbw/001_002_001.mp3`), chapter files at `download.quranicaudio.com/qdc/...` | Ayah-by-ayah (12 reciters in v4), chapter audio with word segments, word-by-word audio | No auth on the files. BunnyCDN (SG edge for BD), `Access-Control-Allow-Origin: *`, `Cache-Control: max-age=25600000` (~296 days). No throttling seen. | **Hotlinking is not explicitly addressed** in QF terms (unverified). Audio URLs reached through the API are "QF Content", so the 1-week cache rule applies to stored metadata. The FAQ says recitation rows are "audio URLs, not the underlying recording files", so QF does not grant rights to the recordings themselves. Quran.com website T&C: content is personal, non-commercial use only. | Probe (technical), Verified (terms). Lowest-risk legal path: stream URLs obtained through the authorised QF API and do not mirror the MP3s. |
| **QuranicAudio.com** (same family; `download.quranicaudio.com`) | Full-surah MP3 library | None | About page: "may be downloaded and used for personal use free of charge"; "you may not use these files for commercial purposes"; files "come from many different sources" (ripped CDs, HidayahOnline, mp3quran, tvquran, users…). | Verified. Do not redistribute. |
| **EveryAyah.com** (`everyayah.com/data/{Reciter}_{bitrate}/{sss}{aaa}.mp3`) | Ayah-split MP3s for many reciters, plus timing files | None. BunnyCDN pull zone `1134976` (QF's is `1134975`), same file size and `Cache-Control` as QF's CDN, and "Contact Us" points to `quran.zendesk.com`. **Inference: now operated by, or on the same infrastructure as, Quran.com/QF** (unverified). | **No site-wide licence or terms page.** The only terms text found is `data/timings_files/000_disclaimer.txt`: "(C) VerseByVerseQuran.com You must link back to our site… to use these timings. Full License at http://versebyversequran.com/site/license" (applies to the timing files). | Verified (disclaimer). Audio licence: unverified. Medium/high risk for redistribution. |
| **mp3quran.net API v3** (`https://www.mp3quran.net/api/v3/{languages,reciters,suwar,riwayat,moshaf,radios,tafasir,tadabor,ayat_timing,…}`), audio at `cdn.mp3quran.net`, radios at `backup.qurango.net` | Hundreds of reciters and riwayat (surah-level MP3s), radios, live TV, ayah timings for some reads. **Bengali UI language supported** (`language=bn` returns Bangla reciter and moshaf names). | No key. Cloudflare. **No documented rate limits, cost or terms.** The docs page has only a Privacy Policy link. | **No usage licence published** (unverified). | Probe (API works), terms unverified. Useful for a "radio / full-surah listening" feature via streaming. Do not mirror. |
| **Al Quran Cloud API** (`api.alquran.cloud/v1/...`) + **Islamic Network CDN** (`cdn.islamic.network/quran/audio/{bitrate}/{edition}/{ayahNumber}.mp3`) | Text editions (`quran-uthmani`, `quran-simple`, `quran-tajweed`, `quran-wordbyword`…), translations (Bangla: `bn.bengali` Muhiuddin Khan, `bn.hoque` Zohurul Hoque), 190 audio editions (Arabic plus a few translation audios; **no Bangla audio**) | **Free, no key.** "Soft rate limit… per second… per IP". Live headers show **`X-RateLimit-Limit-Second: 12`** on the API. The CDN "has no per-client throttle, but please cache aggressively at your own edge". API `Cache-Control: max-age=86400`. CDN `max-age=6048000`. | T&C (last updated **14 June 2026**): Quran text may be reproduced and displayed "freely, for any non-commercial purpose", and commercial reproduction "requires no permission… [but] acknowledgement". Translations: "attribute the translator by name". **Recitations "are licensed to us by the reciters or their estates for free, non-commercial redistribution… You may stream, embed and download them for personal and educational use. You may bundle them into a commercial product, but… copyrights lie with the reciters and they may ask you to remove the content."** Original terms: "All audio files… own and retain their respective copyrights." Volunteer-run, no warranty. | Verified + Probe. Good fallback. 12 req/s per IP is fine server-side with caching, but not for direct browser traffic at our scale. |
| **KFGQPC (King Fahd Complex) official recitations** (qurancomplex.gov.sa) | Official Saudi recordings (e.g. Hudhaifi, Ayyub) and audio translations of meanings | n/a | Per search snippets of the official pages: recitations "licensed for general use in computer apps, broadcasting, websites, and government and private sectors, both inside and outside Saudi Arabia"; the Complex is "not responsible for any technical or programming mistakes". | **Partly verified**: the official site **refused connections from our BD IP** (ECONNREFUSED on qurancomplex.gov.sa and fonts.qurancomplex.gov.sa), so only search-snippet text was seen. The clearest licence found for any recitation. |

### Recitation copyright: summary

- Recitations are sound recordings, and the reciter, studio or publisher owns the copyright. The Quran text being public does not make a recording public. Every aggregator says copyright stays with the reciters (Al Quran Cloud explicitly; QuranicAudio says no commercial use). Verified across sources.
- **No popular reciter catalogue (Alafasy, Sudais, Minshawi, Abdul Basit, Husary…) has a published open redistribution licence** that I could find. Unverified, either way.
- Practical policy: (a) stream from the source CDN through an authorised API (QF), (b) do not copy MP3s to our own storage or CDN, (c) if offline or self-hosting is needed, use KFGQPC official recitations (after confirming the terms page from a non-BD IP) or obtain written permission.

---

## 3. Quran text and font licensing

| Source | Licence | Key conditions | Status |
|---|---|---|---|
| **Tanzil Quran text** (https://tanzil.net/download/; types Simple, Simple Plain/Minimal/Clean, Uthmani, Uthmani Minimal; **no tajweed download**) | "Tanzil Quran Text Copyright (C) 2007-2021 Tanzil Project. License: **Creative Commons Attribution 3.0**" | "copy and distribute **verbatim** copies… but CHANGING IT IS NOT ALLOWED". Any website or app may use it "provided that its source (Tanzil Project) is clearly indicated, and a link is made to tanzil.net". Include the copyright notice in verbatim copies and substantial derived files. You must tick "I agree with Terms of Use" to download. | Verified. https://tanzil.net/docs/text_license |
| **Tanzil translations** (https://tanzil.net/trans/), with Bangla: `bn.bengali` (Muhiuddin Khan), `bn.hoque` (Zohurul Hoque) | Not open | "The translations provided at this page are for **non-commercial purposes only**". Other use needs permission from the translator or publisher. Using more than 3 translations needs a link back. | Verified |
| **KFGQPC Uthmanic Hafs font** (and the QPC family) | Proprietary freeware | The font's embedded licence: "This Font is the property of King Fahd Glorious Quran Printing Complex, and may not be reproduced, modified without the express written approval of King Fahd Glorious Quran Printing Complex." The official "Usage Rights" clause (quoted in Wikimedia T301871): "available for copying, distribution and usage **free of charge** in the personal, commercial and all individual fields". Wikimedia declined it as not open-source (2023-05-17). | Verified (embedded licence text via scancode-licensedb; Usage Rights quote via Wikimedia). The official site was unreachable from BD. **Use it unmodified (no subsetting or conversion, to be safe) and self-host it. Do not sell the font.** Whether WOFF2 conversion or subsetting counts as "modification" is unverified, so ask KFGQPC or use QF's CDN-served fonts under the QF fonts clause. |
| **QPC V1/V2/V4 per-page fonts** (quran.com / QUL) | KFGQPC-owned (quran.com-images README) | Via QF: bundling and caching are allowed with a QF credit and an active console account. Via a QUL download: no licence info ("We don't have copyright information"). | Verified |
| **IndoPak fonts** | Mixed and unclear | (a) **KFGQPC Nastaleeq** (KFGQPC's IndoPak-style mushaf font): same KFGQPC freeware terms (assumed, unverified). (b) quran.com's **"IndoPak Nastaleeq"** font: a custom derivative of the old **Al Qalam** font by Ayman Siddiqui and R. Siddiqua, described as "for Sadaqa-e-Jaria purposes only", with **no formal licence** (search-snippet level, unverified). (c) **Al Qalam Quran (Majeed)**: designed by Pakistan Data Management Services. No clear licence found online (unverified). (d) **Digital Khatt IndoPak**: an alternative; its licence was not checked here (unverified; Digital Khatt is generally described as open, so confirm). | Mostly unverified. **Preferred for a BD audience: KFGQPC Nastaleeq, or Digital Khatt IndoPak after confirming its licence.** |

---

## 4. Bangla translation and tafsir copyright

General law: Bangladesh **Copyright Act 2023** (it repealed the 2000 Act). The standard term is the **author's life + 60 years**; per a Chambers 2026 guide and the Daily Star, works published posthumously or anonymously run from publication. This is secondary-source level, so check https://bdlaws.minlaw.gov.bd for the statutory text. Every translation below is a 20th–21st-century work, so **all should be presumed in copyright.**

| Work | Rights holder (as listed) | Translator alive / died | Reuse permission found | Status |
|---|---|---|---|---|
| **Taisirul Quran** (QF 161, QUL 184) | Tawheed Publications, Dhaka | Committee work, 2000s | None public. QUL: "We don't have copyright information". QF serves it under QF terms. | Copyright presumed; licence unverified |
| **Rawai al-Bayan** (QF 162, QUL 185) | Bayaan Foundation | Modern | None public | Same |
| **Sheikh Mujibur Rahman** (QF 163, QUL 186) | Darussalam Publications | Modern (translator of Tafsir Ibn Kathir Bangla) | None public | Same |
| **Dr. Abu Bakr Muhammad Zakaria** (QF 213, QUL 200; **QuranEnc `bengali_zakaria`**) | Translator / KFGQPC (originally printed by the King Fahd Complex) | Alive | **Yes, via QuranEnc**: "Contents of the translations can be downloaded and re-published, with the following terms and conditions: 1. No modification, addition, or deletion… 2. Clearly referring to the publisher and the source (QuranEnc.com). 3. Mentioning the version number… 4. Keeping the transcript information… 5. Notifying the source… of any note… 6. Updating the translation according to the latest version… 7. Inappropriate advertisements must not be included…". Per-ayah API: `https://quranenc.com/api/v1/translation/aya/bengali_zakaria/{sura}/{aya}` (works, includes footnotes). Note: the `/translations/list` endpoint did not list a Bengali item today (probe), so confirm the key and version with QuranEnc. | **Verified permission. Best self-hostable Bangla translation.** |
| **Islamic Foundation Bangladesh** translation (Al-Quranul Karim) | Islamic Foundation Bangladesh (a government body under the Ministry of Religious Affairs) | Committee | None found online | Copyright presumed; contact IFB for written permission (unverified) |
| **Muhiuddin Khan** (Tanzil `bn.bengali`; Al Quran Cloud `bn.bengali`) | Translator's estate / publisher (Madina Publications) | Died 2016 (unverified) | Tanzil: **non-commercial only**, other use needs permission. Al Quran Cloud: "attribute the translator by name". | Verified (Tanzil terms). Not safe for a monetised site without permission. |
| **Zohurul Hoque** (`bn.hoque`) | Translator / estate | | Tanzil non-commercial | Same |
| **Tafsir Ibn Kathir Bangla** (QF 164, QUL 31) | Tawheed Publications (QF author field) | Translation of a classical work; the **translation** is in copyright | None public | Copyright presumed |
| **Tafsir Ahsanul Bayan** (QF 165, QUL 32) | Bayaan Foundation (QF); the Urdu original is by Salahuddin Yusuf | Modern | None public | Copyright presumed |
| **Tafsir Abu Bakr Zakaria** (QF 166, QUL 33) | "King Fahd Quran Printing Complex" (QF author field) | Alive | Possibly covered by KFGQPC's free-use policy (unverified); not on QuranEnc as a tafsir | Unverified |
| **Tafsir Fathul Majid** (QF 381, QUL 39) | Not stated | Bangla translation of a classical Arabic work | None | Copyright presumed |
| **Bengali Mukhtasar (Abridged Explanation)** (QUL tafsir 267) | Tafsir Center for Quranic Studies (the Mukhtasar series is usually distributed via QuranEnc under the same 7 conditions) | | Likely QuranEnc terms (unverified for Bengali) | Unverified, worth checking: it would be a licensable short Bangla tafsir |
| **Bengali word-by-word** (QF `language=bn` words; QUL #94) | Not stated | | QUL: no info | Unverified. Use via QF API only. |

**What QF/QUL state for reuse:** QF Developer Terms do **not** address translation or tafsir copyright or name licensors, so in effect QF sublicenses display within your app under its terms, and it has removed works when copyright holders asked. QUL says check each resource and gives no info for any Bangla item. Neither grants a right to self-host or redistribute these Bangla texts outside their own API terms.

---

## 5. Tajweed data

| Source | What | Terms | Status |
|---|---|---|---|
| **QF / quran.com `text_uthmani_tajweed`** | Inline HTML `<tajweed class=…>` markup on Uthmani text. Available in v4 and in QF Content Sync `quran_core`. Also the QPC V4 tajweed glyph fonts. | QF Developer Terms (1-week cache unless Content Sync, no redistribution as data, no modification) | Verified + Probe |
| **QUL "QPC Hafs Tajweed" (#87), "QPC Hafs Script - With Tajweed" (#58), "V4 Glyphs (With Tajweed)" (#47), QPC V4 Tajweed font (#240)** | Downloadable tajweed text and fonts | "We don't have copyright information" | Verified |
| **Tanzil** | **No tajweed download.** Only plain and Uthmani text types. | — | Verified |
| **cpfair/quran-tajweed** (GitHub) | Rule annotations (`rule`, `start`, `end` codepoint offsets) over Tanzil Uthmani text, Hafs only. Covers ghunnah, idgham (4 types + shafawi), ikhfa (+ shafawi), iqlab, madd (2/246/muttasil/munfasil/lazim), qalqalah, hamzat al-wasl, lam shamsiyyah, silent letters. | **Data: CC BY 4.0**. The text stays under Tanzil terms. "This project is not actively maintained". You must use its pinned 2017 copy of `quran-uthmani.txt`. | Verified. **The only openly licensed tajweed dataset found.** Fork: tarekeldeeb/quran-tajweed-embedded (CC BY 4.0 claimed, unverified). |
| **Al Quran Cloud `quran-tajweed` edition** | Bracket markup (e.g. `[h:4[ٱ]لْعَ[n[ـٰ]…`) plus a parser library (islamic-network/alquran tools). Rules: silent, hamza wasl, lam shamsiyyah, madd ×4, qalqalah, ikhfa (+shafawi), idgham ×5, iqlab, ghunnah. | Al Quran Cloud T&C (text free for non-commercial use, commercial use with acknowledgement). The data's source and licence are not stated on the Tajweed Guide (origin is likely GlobalQuran; unverified). Rate limit 12 req/s/IP. | Verified (terms), Probe (format) |

---

## 6. Key facts table

| Source | Provides (relevant) | Auth | Rate limit | Cost | Cache / redistribute | Risk | Source URL (accessed 2026-11-05) |
|---|---|---|---|---|---|---|---|
| api.quran.com/api/v4 (legacy) | Everything below, no auth | None | Not published | Free | Website T&C: personal and non-commercial; no scraping | High (legacy, no SLA, no sunset date) | api-docs.quran.foundation/docs/quickstart/migration/ ; quran.com/terms-and-conditions |
| QF Content API | Uthmani, IndoPak, tajweed text; Bangla trans 161/162/163/213; tafsir 164/165/166/381; Bangla WBW; ayah and word audio URLs; word segments; mushaf layout plus QPC V1/V2 codes | OAuth2 client credentials, backend only, manual production approval | Confidential (handle 429) | No price list (free today; unverified) | Cache ≤1 week, or Content Sync re-synced ≤7 days. No bundling or redistribution as data. Ads OK. Fonts and images bundleable with a QF credit. | Medium | api-docs.quran.foundation/legal/developer-terms/ |
| QUL (qul.tarteel.ai) | Layouts, fonts, scripts, segments, all Bangla trans/tafsir as JSON/SQLite | Free account to download | n/a | Free | No licence info on any Bangla, KFGQPC or audio item | High for Bangla text and audio, low for KFGQPC/Tanzil-derived data | qul.tarteel.ai/faq ; /resources/*/licence |
| QF audio CDN (verses.quran.com, audio.qurancdn.com) | Ayah MP3, WBW MP3 | None on files | None observed | Free | Hotlinking not addressed; recordings not licensed by QF | Medium | live probe ; QF FAQ |
| EveryAyah | Ayah MP3s, timings | None | None observed | Free | No site licence; timings need a link back to VerseByVerseQuran | Medium/High | everyayah.com/data/timings_files/000_disclaimer.txt |
| QuranicAudio | Surah MP3s | None | n/a | Free | Personal use only, no commercial use | High for reuse | quranicaudio.com/about |
| mp3quran.net v3 | Surah MP3s, radios, timings, Bangla UI | None | Not published | Free | No terms published | Medium/High | mp3quran.net/eng/api |
| Al Quran Cloud + Islamic Network CDN | Text, `quran-tajweed`, `bn.bengali`, `bn.hoque`, ayah audio | None | **12 req/s/IP** (headers); CDN unthrottled | Free | Text free for non-commercial, commercial with acknowledgement. Audio "free, non-commercial redistribution"; reciters can demand removal. | Medium (volunteer-run) | alquran.cloud/terms-and-conditions (updated 2026-06-14) |
| Tanzil text | Simple / Uthmani text | Tick-box | n/a (download) | Free | CC BY 3.0, verbatim, credit plus link | Low | tanzil.net/docs/text_license |
| Tanzil translations | bn.bengali, bn.hoque | — | — | Free | Non-commercial only | High for a monetised site | tanzil.net/trans/ |
| KFGQPC fonts | Uthmanic Hafs, QPC, Nastaleeq | — | — | Free | Free to copy, distribute and use (personal and commercial); no reproduction or modification without approval | Low/Medium (modification ambiguity) | scancode-licensedb kfgqpc-uthmanic-script-hafs ; phabricator T301871 |
| KFGQPC recitations | Official recordings | — | — | Free | "general use in computer apps… websites" | Low (site unreachable from BD, re-verify) | qurancomplex.gov.sa/en/?p=3979 (search snippet) |
| QuranEnc | Bangla Zakaria translation (+ footnotes), API, SQLite | None | Not published | Free | Republish allowed under 7 conditions (no modification, credit plus version, keep updated, no inappropriate ads) | Low | quranenc.com/en/browse/bengali_zakaria |
| cpfair/quran-tajweed | Tajweed rule annotations | — | — | Free | CC BY 4.0 (data) + Tanzil terms (text) | Low legally, medium on maintenance | github.com/cpfair/quran-tajweed |

---

## 7. Open questions / to-do before launch

1. Apply on the QF Developer Console now. Production approval is manual with no stated timeline, and it gates the full dataset. Ask developers@quran.com: (a) the rate limits for our expected traffic, (b) whether QF is and stays free at millions of users, (c) whether streaming `verses.quran.com` audio straight from the browser is allowed, (d) the sunset date for `api.quran.com/api/v4`, (e) whether Bangla translations 161/162/163 and tafsirs 164/165/381 are licensed for our use through the API.
2. Email Tawheed Publications, Bayaan Foundation, Darussalam and Islamic Foundation Bangladesh for written permission if we want any of their texts outside QF's API (SEO-indexable static pages, offline PWA beyond 7 days).
3. Re-verify the KFGQPC recitation and font usage pages from a non-BD network (the site refused connections from BD today).
4. Confirm the QuranEnc Bengali Zakaria key, version and Mukhtasar Bengali licence directly with QuranEnc.
5. SEO angle: the QF terms allow server-rendered display inside our own site UX, but a 1-week cache cap means static pages must be rebuilt or revalidated at least weekly (ISR with `revalidate` ≤ 7 days), unless the content comes from Content Sync.
