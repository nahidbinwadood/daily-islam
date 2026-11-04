# Daily Islam — Master Product Requirements Document (PRD)

- **Document type:** Master Product Requirements / Feature Inventory
- **Product:** Daily Islam
- **Initial platform:** Web application (responsive, mobile-first)
- **Primary audience:** Bangladesh-first Muslim users, with an extensible international audience
- **Status:** Working master specification — feature scope consolidated; some product decisions remain open
- **Version:** 1.0
- **Last updated:** 4 November 2026
- *Previous draft (Easy Deen, Modules A–F) archived at `docs/archive/product-requirements-v0-easy-deen.md`.*

---

## 1. Product Overview

### 1.1 Product vision

Daily Islam is a comprehensive, trustworthy, easy-to-use Islamic knowledge and daily-practice platform. It brings Quran, Hadith, worship guides, prayer utilities, duas, Islamic learning resources, personal worship tools, and practical Islamic references into one organized experience.

The product should help a user answer three questions:

1. **What should I know?** — reliable Islamic knowledge with clear references.
2. **How do I practise it?** — accessible, step-by-step guidance for worship and everyday life.
3. **How can I build consistency?** — optional private tools for reading, learning, memorization, and personal worship goals.

The experience should be welcoming to beginners while remaining useful to experienced readers and learners.

### 1.2 Product promise

> A reliable, practical Islamic companion that helps people learn, worship, and build good habits — without confusion, pressure, or unverified religious content.

### 1.3 Product principles

- **Authenticity before quantity:** do not publish religious content merely to fill a catalogue.
- **Source transparency:** show where Quran translations, Hadith, grading, Tafsir, duas, and fiqh guidance come from.
- **Respect legitimate differences:** distinguish scholarly disagreement and Madhhab-specific positions instead of presenting one view as universal.
- **Beginner-friendly:** explain terminology in plain Bangla and English where appropriate.
- **Bangladesh-first:** prioritize Bangla content, Bangladesh-relevant guidance, local conventions, and usability on common mobile devices and slower networks.
- **Privacy by default:** personal notes, bookmarks, trackers, and activity remain private unless the user explicitly chooses otherwise.
- **No guilt mechanics:** no shame-based streaks, public worship rankings, or manipulative reminders.
- **Accessible and usable:** responsive layouts, readable Arabic typography, keyboard support, clear navigation, and low-bandwidth behaviour.
- **No fabricated religious content:** AI must never invent Quranic text, Hadith, chains, scholarly quotations, or religious rulings.
- **Clear limitations:** distinguish verified information, scholarly opinions, educational material, and unresolved questions.

### 1.4 What the product is not

- Not a public social network or Islamic discussion community.
- Not a replacement for qualified scholars, teachers, or formal religious education.
- Not an authority that issues independent fatwas.
- Not a platform that treats AI-generated answers as religious evidence.
- Not a public competition or leaderboard for worship activity.

---

## 2. Target Users and Main Use Cases

### 2.1 Primary user groups

1. **Beginner learner:** needs simple explanations, Wudu and Salah guidance, Arabic reading foundations, and common duas.
2. **Daily practitioner:** needs Quran, prayer times, Qibla, daily adhkar, and quick references.
3. **Quran reader:** needs Arabic text, Bangla translations, Tafsir, audio, bookmarks, offline access, and reading plans.
4. **Hadith learner/researcher:** needs reliable collections, references, grading attribution, narrators, chains, commentary, and search.
5. **Memorization learner:** needs Hifz planning, revision, quizzes, and progress tracking.
6. **Family user:** needs practical guidance on worship, family life, children, and everyday situations.
7. **Returning user:** needs a personal library and continuity across devices without being pressured by streaks.

### 2.2 Core user journeys

- Open the app and quickly find today's prayer times, Quran continuation, and daily content.
- Learn Wudu from a clearly illustrated step-by-step guide.
- Learn and practise Salah with recitations, audio, and posture guidance.
- Read Quran in Arabic with one or more Bangla translations and Tafsir.
- Listen to a Qari and repeat a selected Ayat.
- Save an Ayat, Hadith, dua, or guide for later.
- Search for a Hadith and inspect its source and grading.
- Learn a topic through a structured course and track private progress.
- Create a personal Quran reading or memorization plan.
- Use prayer-time, Qibla, Zakat, and other utilities.
- Find a trustworthy answer or understand when a question needs a qualified scholar.

---

## 3. Scope and Product Structure

The following is the proposed master module inventory. The exact navigation and grouping can be refined during information architecture and design.

1. Quran
2. Hadith
3. Purification (Taharah): Wudu, Tayammum, Ghusl
4. Salah
5. Prayer Times & Ramadan
6. Dua & Azkar
7. Amal & Personal Ibadah Tracker
8. Islamic Guides
9. Islamic Learning
10. Islamic Calculators
11. Islamic Knowledge Library
12. Islamic Utilities
13. Islamic Q&A / Ask a Scholar
14. Islamic Search
15. Daily Engagement
16. Personal Islamic Library
17. Hajj & Umrah
18. Family & Personal Life Guides
19. Islamic AI Assistant
20. Account & Personalization
21. Platform-wide Services and Content Management

**Community scope: none.** Do not build public feeds, forums, public groups, social timelines, or community discussion features.

**Group Khatm: explicitly excluded.** A private individual Quran Khatm planner is in scope; group Khatm coordination is not.

---

# 4. Functional Requirements by Module

## 4.1 Quran

### Objective

Provide a complete Quran reading, listening, study, learning, memorization, and personal-progress experience with verified text and transparent source information.

### 4.1.1 Quran home and navigation

- Show all 114 Surahs with Arabic, Bangla, and English names.
- Show Surah number, Makki/Madani classification, and Ayat count.
- Browse by Surah, Juz, Hizb, Rub, Ruku, page, and Ayat.
- Continue from the last reading position.
- Display recent reading history and personal progress.
- Allow direct navigation to a Surah/Ayat/page.
- Provide clear distinction between Uthmani and IndoPak script options.

### 4.1.2 Arabic Quran reading

- Verified Arabic Quran text.
- Arabic-only reading mode.
- Uthmani and IndoPak script support.
- Adjustable Arabic font size and line spacing.
- Continuous-scroll and page-style reading modes where supported.
- Full-screen/distraction-free mode.
- Navigate previous/next Surah and Ayat.
- Ayat-level actions: bookmark, copy, share, open translation, open Tafsir, play audio, and open word study.
- Preserve the user's reading position.

### 4.1.3 Mushaf page view

- Authentic IndoPak Mushaf page layout.
- Authentic Uthmani Mushaf page layout.
- Page navigation and zoom.
- Bookmark a Mushaf page.
- Map page regions to Surah and Ayat references.
- Preserve correct script, page boundaries, line layout, and Ayat mapping.
- Do not implement this as merely changing a font in a generic text view.

### 4.1.4 Quran translations

- Multiple verified Bangla translations.
- English translations.
- Choose a default translation.
- Compare multiple translations for one Ayat.
- Arabic + Bangla, Arabic + English, and translation-only reading modes.
- Display translator, publisher/source, edition/version, and licensing details.
- Search within available translations.
- Clearly distinguish translation from the original Arabic Quran.

### 4.1.5 Word-by-word study

- Word-level Bangla and English meanings.
- Transliteration/pronunciation support where reviewed.
- Root word and morphology where reliable data exists.
- Basic grammar information.
- Occurrence/repetition references.
- Word-level audio where available.
- Explain that a word-level gloss is a learning aid and may not capture the full contextual meaning.

### 4.1.6 Tafsir

- Multiple verified Tafsir sources.
- Tafsir by Ayat and Surah.
- Arabic and Bangla content where available; English where available.
- Compare two or more Tafsir sources.
- Search Tafsir text.
- Save Tafsir passages and personal notes.
- Link to relevant Ayat, Hadith, and related topics.
- Display author, translator, edition, source, and licensing information.
- Candidate sources may include Tafsir Ibn Kathir, Ma'ariful Quran, and Tafsir al-Jalalayn, subject to translation availability, rights, source verification, and scholarly review.

### 4.1.7 Quran audio

- Library of verified Qaris.
- Qari profile and recitation details.
- Play full Surah, selected Ayat, or an Ayat range.
- Play/pause, seek, speed control, repeat, queue, and background playback.
- Repeat one Ayat or a selected range for memorization.
- Sleep timer and playlists.
- Download audio only where licensing permits.
- Popular Surah collections may be provided as convenient playlists without making unsupported claims about specific virtues.

### 4.1.8 Tajweed

- Tajweed colour coding where the selected text edition supports it.
- Visible rule legend.
- Tap a highlighted segment to read its rule explanation.
- Lessons for Makharij and Sifat.
- Rules: Noon Sakinah/Tanween, Meem Sakinah, Madd, Qalqalah, Ghunnah, Idgham, Ikhfa, Iqlab, and Waqf/Ibtida.
- Practice examples and quizzes.
- Clearly identify the recitation/Tajweed standard used by the content.

### 4.1.9 Quran learning

- Beginner-to-advanced learning path.
- Arabic letters and letter recognition.
- Harakat and letter combinations.
- Basic Arabic reading.
- Reading short Ayat and Surahs.
- Tajweed foundations and advanced topics.
- Recitation improvement.
- Structured courses, lessons, exercises, quizzes, and revision.
- Course progress and completion status.

### 4.1.10 Guided recitation

- Request microphone permission only when needed.
- Record, pause, resume, replay, save, and delete a practice recording.
- Select a reference Qari.
- Practise a selected Ayat or range.
- Provide guided practice and comparison where technically reliable.
- Future advanced analysis may include Ayat recognition, word-level comparison, pronunciation, Makharij, Tajweed, omissions/additions, and fluency.
- Disclose uncertainty and confidence limitations.
- Do not present automated feedback as a qualified teacher's judgement.
- Advanced AI feedback requires validation by qualified Quran teachers before release.

### 4.1.11 Hifz and revision tracker

- Mark Ayat or Surahs as not started, learning, partially memorized, memorized, or needing revision.
- Create daily and weekly memorization plans.
- Schedule revision.
- Identify weak Ayat.
- Hide/reveal Ayat for self-testing.
- Missing-word and random-Ayat tests.
- Keep progress private by default.

### 4.1.12 Personal Quran library

- Bookmark Ayat, Surahs, pages, Tafsir passages, and words.
- Create private collections/folders.
- Add private notes.
- Search saved items.
- Sync across signed-in devices.
- Export personal notes/bookmarks where feasible.

### 4.1.13 Individual Khatm planner

- Set a personal target date.
- Set a daily target by page, Ayat, or Juz.
- Show progress and remaining work.
- Pause, resume, or adjust the plan.
- Adjust missed-day targets without guilt.
- Keep a personal completion history.
- **Group Khatm is not included.**

### 4.1.14 Quran search

- Search Arabic, Bangla, and English text.
- Search by Surah/Ayat number.
- Search by root word where data is available.
- Search topics and references.
- Search by page and Juz.
- Show matching Ayat, translation, reference, Tafsir, audio, and save actions.
- Handle Arabic diacritics and common spelling variations carefully.

### 4.1.15 Sharing and export

- Copy Ayat with exact reference.
- Share Ayat as an image/card.
- Include Surah name and Ayat number on every share format.
- Share translation with translator/source attribution.
- Export personal notes and bookmarks where possible.
- Never create share cards that omit the source reference.

### 4.1.16 Progress and notifications

- Reading by pages, Ayat, and Surahs.
- Daily, weekly, and monthly progress.
- Individual Khatm progress.
- Learning, Tajweed, and Hifz progress.
- Optional reminders for reading, revision, lessons, and recitation practice.
- User-controlled frequency and quiet hours.
- Avoid shame-based streak messaging.

### 4.1.17 Quran offline

Essential offline capability:

- Arabic Quran text.
- Selected Bangla translations.
- Bookmarks and notes.
- Reading position and progress.
- Basic navigation.

Optional downloads, subject to storage and licensing:

- Mushaf page images.
- Audio.
- Tafsir.
- Learning media.

Provide download size, storage usage, update status, and remove-download controls.

### 4.1.18 Quran content governance

- Verify Arabic text, Ayat order, numbering, and script.
- Verify Mushaf page and Ayat mapping.
- Verify translation and Tafsir source/edition.
- Verify Tajweed markings and explanations.
- Record audio source and Qari attribution.
- Maintain version history and correction workflow.
- Record rights/licensing for every content asset.
- Never AI-generate Quran Arabic or the authoritative recitation reference.

**Suggested delivery priority**

- P0: Quran navigation, Arabic reading, Bangla translation, audio, bookmarks/notes, search, essential offline, content verification.
- P1: Mushaf view, word study, Tafsir, repeat playback, Tajweed, learning, Hifz, individual Khatm, sharing, progress, notifications.
- P2: guided recitation.
- P3: advanced automated recitation analysis.

---

## 4.2 Hadith

### Objective

Provide a searchable, source-transparent Hadith library with Arabic, Bangla, and English text, attributed grading, narrator information, chains, commentary, and learning tools.

### 4.2.1 Hadith collections

Primary collections:

- Sahih al-Bukhari
- Sahih Muslim
- Sunan Abu Dawud
- Jami' at-Tirmidhi
- Sunan al-Nasa'i
- Sunan Ibn Majah
- Muwatta Malik
- Musnad Ahmad

Additional important works, subject to content availability and rights:

- Riyad as-Salihin
- Bulugh al-Maram
- Mishkat al-Masabih
- Al-Adab al-Mufrad
- Shama'il Muhammadiyyah
- Nawawi's Forty Hadith
- Forty Hadith Qudsi
- Musannaf Abd al-Razzaq
- Musannaf Ibn Abi Shaybah
- Sunan al-Darimi
- Sahih Ibn Hibban
- Sahih Ibn Khuzaymah
- Al-Mustadrak

For every collection, show compiler/author, introduction, methodology, books, chapters, Hadith count, edition, available translations, and source information.

Do not imply that every narration in a collection has the same grading.

### 4.2.2 Hadith reading experience

- Arabic, Bangla, and English text where verified.
- Multiple translations where available.
- Collection, book, chapter, Hadith number, and alternate numbering.
- Narrator information.
- Grading with scholar/source attribution.
- Reading layout and font controls.
- Previous/next Hadith navigation.
- Bookmark, note, copy, and share actions.
- Display source and edition clearly.

### 4.2.3 Classification and grading

Support grading labels where properly sourced:

- Sahih
- Hasan
- Da'if
- Mawdu'
- Sahih li-Ghayrihi
- Hasan li-Ghayrihi

Keep transmission categories separate from authenticity grades:

- Mutawatir
- Ahad
- Mashhur
- Aziz
- Gharib

Where scholars differ:

- Show each grading separately.
- Name the scholar and source.
- Identify edition or research basis where available.
- Explain the disagreement neutrally.
- Do not silently select one grading as universally accepted.

### 4.2.4 Narrator / Rawi profiles

- Names and name variants.
- Biography and known dates.
- Sahabi, Tabi'i, or other classification where verified.
- Teachers and students.
- Scholarly narrator evaluations.
- Related Hadith.
- Rijal and Jarh wa Ta'dil references.
- Clear source attribution.

### 4.2.5 Sanad / chain

- Display the chain when reliable chain data is available.
- Link each narrator to a profile.
- Show alternate chains and supporting routes.
- Display scholarly remarks about continuity or discontinuity.
- Compare chains where data supports it.
- Never use AI to invent or reconstruct a missing chain.

### 4.2.6 Navigation and search

- Collection > Book > Chapter > Hadith navigation.
- Jump to a Hadith number.
- Chapter introduction and progress.
- Arabic, Bangla, and English search.
- Exact and partial phrase search.
- Search by collection, narrator, topic, grading, and source.
- Handle Arabic diacritics and common spelling variations.
- Show enough context to distinguish similar narrations.

### 4.2.7 Topics and commentary

Topic library may include Iman, Tawheed, Salah, fasting, Zakat, Hajj, Dua, Dhikr, Akhlaq, family, business, halal/haram, knowledge, charity, patience, forgiveness, death, and Akhirah.

Commentary / Sharh:

- Multiple verified Arabic, Bangla, and English sources.
- Explanation by Hadith or chapter.
- Scholar and source details.
- Context and fiqh implications where available.
- References to related narrations and scholarly discussions.
- Candidate works may include Fath al-Bari, Sharh Sahih Muslim by al-Nawawi, Tuhfat al-Ahwadhi, and Awn al-Ma'bud, subject to rights and review.

### 4.2.8 Cross-references

- Same or similar narration across collections.
- Alternate chains.
- Supporting narrations.
- Related Quran Ayat.
- Related Tafsir, Dua, and Fiqh topics.
- Clearly distinguish exact duplicates from narrations with similar meanings.

### 4.2.9 Learning and memorization

- Hadith sciences and terminology.
- Introduction to grading.
- Isnad and narrator studies.
- Structured courses and lessons.
- Quizzes and revision.
- Personal memorization list and progress.

### 4.2.10 Daily Hadith and audio

- Daily verified Hadith selection.
- Arabic, Bangla, grading, source, and explanation.
- Save and share.
- Arabic pronunciation and recitation audio where available.
- Bangla explanation/commentary audio where licensed.
- Scholar lessons and collection/chapter audio.
- Playback speed, background playback, and downloads where permitted.

### 4.2.11 Personal library, research, and claim checking

- Private bookmarks, collections, notes, narrators, topics, and commentary.
- Reading history and memorization status.
- Side-by-side Hadith, translation, grading, chain, and commentary comparison.
- Private research notes.
- Viral claim checker:
  - Paste a quote or message.
  - Search exact and variant wording.
  - Show possible source matches and grading.
  - Explain wording differences.
  - Return "unable to verify" when no reliable match is found.
  - **No reference found must never be presented as proof that a narration is fabricated.**

### 4.2.12 Progress, offline, and governance

- Read counts and collection progress.
- Daily/weekly/monthly activity.
- Memorization and course progress.
- Opt-in reminders.
- Offline selected collections and saved Hadith.
- Offline Arabic/Bangla text, basic navigation, bookmarks, notes, and progress.
- Versioned Arabic text, translations, numbering, narrator data, chain data, grading, commentary, topics, cross-references, source/edition/license, and review workflow.

**Suggested delivery priority**

- P0: collection metadata, verified Arabic text, Bangla translation, book/chapter navigation, references, grading attribution, basic search, bookmarks, content verification.
- P1: narrator profiles, advanced search, topics, commentary, related Hadith, daily Hadith, sharing, learning, memorization.
- P2: audio, chain visualization, advanced research, claim checker, full offline collections, advanced statistics.

---

## 4.3 Purification (Taharah): Wudu, Tayammum, and Ghusl

### Objective

Teach purification clearly and accurately, including practical steps, conditions, invalidators, special situations, and Madhhab differences.

**Scope status:** The umbrella structure is recommended, but the final rollout decision (all topics at launch or staged delivery) remains to be confirmed.

### 4.3.1 Purification home

- Explain the meaning and importance of Taharah.
- Entry points for Wudu, Tayammum, and Ghusl.
- Step-by-step guides.
- Conditions and requirements.
- Invalidators.
- Common mistakes.
- Related duas.
- FAQs and references.
- Save guide for later.

### 4.3.2 Wudu step-by-step

Cover the commonly taught sequence:

- Intention.
- Beginning with Bismillah where applicable in the selected guidance.
- Washing hands.
- Rinsing mouth.
- Cleaning/rinsing nose.
- Washing face.
- Washing arms including elbows.
- Wiping head.
- Wiping/washing ears according to the selected guidance.
- Washing feet including ankles.

For each step:

- Illustration or visual explanation.
- Simple instructions.
- Required area and boundaries.
- Repetition guidance.
- Fard/Sunnah/Mustahabb classification according to selected Madhhab.
- Common errors.
- Relevant references.
- Audio/video support where available.

Do not label one Madhhab's detailed sequence or classification as the only universal presentation.

### 4.3.3 Wudu rules and conditions

- Water purity and suitability.
- Removing substances that prevent water reaching the required area.
- Nail polish, waterproof makeup, glue, paint, and similar barriers.
- Fard, Sunnah, and recommended acts.
- Order and continuity where relevant.
- Water use and avoiding waste.
- What to do when water is unavailable or harmful.
- After-Wudu duas and adhkar.

### 4.3.4 Wudu invalidators

Explain relevant issues with Madhhab-specific notes:

- Urination and defecation.
- Passing wind.
- Sleep and loss of consciousness.
- Bleeding.
- Vomiting.
- Direct skin contact and other disputed matters.
- Other relevant cases.

Every item should show the applicable scholarly position and source. Do not flatten disagreements into one universal list.

### 4.3.5 Special purification situations

- Renewing Wudu.
- Wiping over socks/khuff.
- Wiping over bandages or dressings.
- Illness or inability to use water.
- Travel and water availability.
- Tayammum conditions and steps.

### 4.3.6 Tayammum

- When Tayammum is permitted.
- Conditions and prerequisites.
- Step-by-step method.
- What materials/surfaces are valid according to the selected guidance.
- What invalidates Tayammum.
- Differences between scholarly schools.
- References and common questions.

### 4.3.7 Ghusl

- Situations requiring Ghusl.
- Obligatory elements and Sunnah method.
- Step-by-step guide.
- Water reaching the whole body.
- Hair and other practical considerations.
- Menstruation/postpartum purification guidance where appropriate.
- Madhhab-specific differences and references.

### 4.3.8 Wudu duas and learning

- Relevant duas with Arabic, Bangla pronunciation, Bangla meaning, English meaning, source, authenticity status, and audio where verified.
- Beginner course and illustrated lessons.
- Short quizzes and revision.
- FAQ and private learning progress.

### 4.3.9 Men and women guidance

- Makeup and nail products.
- Hair treatments and jewellery.
- Practical questions related to menstruation and postpartum purification.
- Present only reviewed guidance and clearly identify differences.
- Avoid unsupported assumptions or intrusive personal data collection.

### 4.3.10 Content governance

- Every fiqh statement must identify its source and Madhhab/context.
- Scholar review required for practical rulings.
- Keep version history and correction records.
- Clearly distinguish educational summaries from fatwas.

**Open product decisions**

- Launch scope: Wudu only, Wudu + Tayammum, or full Wudu + Tayammum + Ghusl.
- Madhhab approach: both Hanafi and Shafi'i in full, Hanafi primary with Shafi'i reference, or staged expansion.
- These choices should be finalized before detailed content production.

---

## 4.4 Salah

### Objective

Help users learn, understand, and improve their Salah through practical instruction, recitation references, Madhhab-aware guidance, and optional private tools.

### 4.4.1 Salah home

- Introduction and importance of Salah.
- Learn Salah step by step.
- Five daily prayers.
- Types of Salah.
- Recitations and duas.
- Conditions and invalidators.
- Common mistakes.
- After-Salah adhkar.
- Madhhab selection.
- Optional personal tracker.

### 4.4.2 Step-by-step Salah guide

Cover:

- Prerequisites and preparation.
- Qiyam.
- Takbir.
- Qira'ah.
- Ruku.
- Qawmah.
- Sujud.
- Jalsah.
- Tashahhud.
- Salawat/Darud.
- Dua before Salam where applicable.
- Salam.

Each step should include:

- Plain-language instruction.
- Visual posture guidance.
- Arabic recitation where relevant.
- Bangla pronunciation and meaning.
- English translation.
- Audio pronunciation.
- Fard/Wajib/Sunnah classification according to the selected Madhhab.
- Common mistakes.
- References.

### 4.4.3 Pray Along / practice mode

- Step-by-step text.
- Audio for recitations.
- Visual posture guidance.
- Pause and repeat.
- Rak'ah count and sequence.
- Beginner and practice modes.
- Explain that this is a learning aid, not a replacement for congregational prayer or qualified instruction.

**Preferred direction to confirm:** combined text + audio + visual guidance.

### 4.4.4 Posture illustrations

- Standing and hand placement.
- Ruku.
- Qawmah.
- Sujud.
- Sitting and Tashahhud.
- Salam.
- Show relevant differences between scholarly schools.
- Avoid presenting disputed posture details as universally mandatory.

**Illustration decision to confirm:** separate men's and women's illustrations, universal illustrations with differences explained in text, or illustrations plus video.

### 4.4.5 Types of Salah

Provide sourced guides for:

- Five Fard daily prayers.
- Sunnah prayers.
- Witr.
- Tahajjud.
- Ishraq.
- Duha/Chasht.
- Awwabin.
- Tahiyyatul Masjid.
- Tahiyyatul Wudu.
- Salat al-Tawbah.
- Istikhara.
- Janazah.
- Jumu'ah.
- Eid.
- Tarawih.
- Kusuf/Khusuf.
- Istisqa.

Clearly identify legal status, timing, Rak'ah structure, and Madhhab differences. Do not imply all listed prayers have the same status.

### 4.4.6 Rak'ah structure explorer

- Explain Rak'ah structure for each prayer.
- Show where recitations and postures occur.
- Explain differences for Fard, Sunnah, Witr, and other prayers.
- Support selected Madhhab guidance.

### 4.4.7 Salah recitations and duas

- Takbir.
- Sana.
- Ta'awwudh and Tasmiyah.
- Surah al-Fatihah.
- Additional Surah/Ayat.
- Ruku dhikr.
- Qawmah dhikr.
- Sujud dhikr.
- Jalsah.
- Tashahhud.
- Darud.
- Dua before Salam.
- Salam.
- Qunut.
- Janazah recitations.

For each:

- Arabic text.
- Bangla pronunciation.
- Bangla and English meaning.
- Audio.
- Source and scholarly notes.
- Variants where reliably sourced.

### 4.4.8 After-Salah adhkar

- Verified post-prayer adhkar.
- Arabic, Bangla pronunciation, translation, and references.
- Audio where available.
- Optional counter.
- User-selected list and order.
- No unsupported virtue claims.

### 4.4.9 Rules, conditions, and invalidators

- Conditions of Salah.
- Fard/Wajib/Sunnah/Makruh categories.
- Madhhab-specific classification.
- Invalidators.
- Common mistakes.
- Clothing, Awrah, direction, timing, and purity requirements.
- Sources and scholarly review.

### 4.4.10 Madhhab-aware guidance

Initial candidate schools:

- Hanafi.
- Shafi'i.

Possible approaches:

- Full Hanafi and Shafi'i guidance and comparison.
- Hanafi primary with Shafi'i reference.
- Hanafi first, then expand to Shafi'i and other schools.

Do not finalize this choice without product-owner confirmation.

### 4.4.11 Special Salah guides

- Jumu'ah and Friday checklist.
- Jamaat and Imam/follower guide.
- Rows and joining congregation.
- Late joining / Masbuq.
- Imam mistakes and relevant responses.
- Travel and Qasr.
- Combining prayers where permitted.
- Illness and praying sitting/lying.
- Qada.
- Sajdah Sahw.
- Emergency situations.
- Women's Salah guidance, including relevant questions about menstruation/postpartum, congregation, Jumu'ah, and clothing/Awrah.

### 4.4.12 Learning and personal tracker

- Beginner courses, lessons, audio/video, quizzes, and revision.
- Optional private tracker for Fard, Sunnah, Witr, Tahajjud, Duha, Jumu'ah, Qada, and adhkar.
- Alternative simplified five-Fard tracker.
- Weekly/monthly history.
- User can disable tracking and reminders.
- No public rankings or shame-based messaging.

### 4.4.13 Content governance

- Scholar-reviewed prayer instructions.
- Source every recitation and fiqh position.
- Maintain Madhhab distinctions.
- Review audio pronunciation and translations.
- Version content and publish corrections.

**Open product decisions**

- Madhhab strategy.
- Pray Along format.
- Illustration approach.
- Tracker scope: optional complete tracker, five Fard only, or no tracker.

---

## 4.5 Prayer Times & Ramadan

### Objective

Provide accurate location-based prayer schedules and a complete Ramadan companion with transparent calculation settings and user-controlled reminders.

### Prayer time features

- Location selection and permission-based current location.
- Manual city/location selection.
- Fajr, Sunrise, Dhuhr, Asr, Maghrib, and Isha times.
- Asr calculation method selection where supported.
- Calculation method selection.
- High-latitude adjustment where relevant.
- Time-zone and daylight-saving handling.
- Hanafi/Shafi'i Asr setting.
- Local mosque timetable option, if a verified source is available.
- Daily and monthly timetable.
- Next prayer and time remaining.
- Hijri and Gregorian dates.
- Notifications and adhan settings.
- Manual minute adjustments.
- Explain calculation settings so users understand why sources may differ.

### Ramadan features

- Ramadan calendar.
- Sehri/Iftar times based on selected location and method.
- Fasting day counter and remaining days.
- Daily fasting checklist (optional).
- Ramadan duas and adhkar.
- Taraweeh information.
- Laylat al-Qadr learning and worship guide.
- Quran reading and personal Khatm plan.
- Zakat and Sadaqah links/calculators.
- Eid preparation and Eid Salah guide.
- Optional fasting tracker, including make-up fast notes.
- Notifications fully controlled by the user.

### Accuracy requirements

- Clearly show location, calculation method, Asr method, and last update.
- Avoid claiming exact local mosque timings without a verified timetable.
- Provide a way to report incorrect timings.
- Do not infer the user's exact location without permission.

---

## 4.6 Dua & Azkar

### Objective

Create a well-organized, source-verified library of duas and daily adhkar.

### Categories

- Morning and evening adhkar.
- After-Salah adhkar.
- Before sleep and after waking.
- Entering/leaving home.
- Entering/leaving mosque.
- Eating and drinking.
- Travel.
- Anxiety, hardship, illness, and protection.
- Forgiveness and repentance.
- Family, parents, children, and relationships.
- Quranic duas.
- Prophetic duas.
- Hajj and Umrah duas.
- Ramadan and fasting duas.
- General daily situations.

### Dua detail page

- Arabic text.
- Bangla pronunciation.
- Bangla meaning.
- English meaning.
- Hadith/Quran reference.
- Authenticity or source status where applicable.
- Context and when to read.
- Audio pronunciation.
- Repeat counter where appropriate.
- Save, bookmark, copy, and share.
- Related duas and topics.

### Daily adhkar experience

- Morning/evening checklist.
- Optional counters and repetitions.
- User-customizable list.
- Completion history, private by default.
- Offline saved duas.
- No guilt-based missed-day messaging.

### Governance

- Verify Arabic, translation, transliteration, source, and repetition.
- Distinguish Quranic dua from Hadith-based dua and general permissible supplication.
- Do not attribute unsourced wording or promised rewards.

---

## 4.7 Amal & Personal Ibadah Tracker

### Objective

Offer optional, private tools for users who want to organize personal worship and good habits.

### Potential tracking categories

- Quran reading.
- Quran memorization and revision.
- Salah.
- Sunnah prayers.
- Witr.
- Tahajjud.
- Duha.
- Fasting.
- Qada prayers/fasts.
- Morning/evening adhkar.
- Daily duas.
- Sadaqah and charitable goals.
- Islamic learning.
- Personal good deeds and habits.

### Features

- Daily, weekly, and monthly goals.
- Custom habits.
- Completion history.
- Notes and reflections.
- Flexible reminders.
- Pause, edit, archive, or delete goals.
- Private dashboard.
- Export personal data.
- Optional integration with Quran, Salah, and Dua modules.

### Product safeguards

- Tracking is optional.
- Private by default.
- No public leaderboard, public score, or competitive worship ranking.
- No guilt or shame language.
- Do not imply that a tracker measures a person's faith or spiritual worth.

---

## 4.8 Islamic Guides

### Objective

Provide practical, structured, source-backed guides for common Islamic practices and questions.

### Guide categories

- Aqidah fundamentals.
- Taharah and cleanliness.
- Salah.
- Fasting.
- Zakat.
- Hajj and Umrah.
- Janazah and burial.
- Halal and Haram basics.
- Manners and character.
- Family and social responsibilities.
- Islamic calendar and important occasions.
- Everyday Sunnah practices.

### Guide format

- Clear title and short summary.
- Who the guide is for.
- Step-by-step instructions.
- Required conditions and common mistakes.
- Relevant Quran and Hadith references.
- Madhhab/scholarly differences.
- Reviewed-by and last-reviewed information.
- Related guides and FAQs.
- Save and share.

---

## 4.9 Islamic Learning

### Objective

Offer structured learning journeys rather than an unorganized collection of articles.

### Learning tracks

- Islam for beginners.
- Aqidah fundamentals.
- Quran reading.
- Tajweed.
- Quran memorization.
- Salah learning.
- Hadith basics and Hadith sciences.
- Fiqh foundations.
- Seerah.
- Islamic history.
- Arabic foundations.
- Islamic manners and character.

### Learning features

- Courses, modules, lessons, and learning paths.
- Text, audio, video, diagrams, and downloadable materials where licensed.
- Lesson completion.
- Quizzes and practice exercises.
- Revision and saved lessons.
- Course progress.
- Prerequisites and recommended next lessons.
- Teacher/scholar credentials and content sources.
- Accessibility and transcript support for video/audio.

No public student ranking is required.

---

## 4.10 Islamic Calculators

### Objective

Provide transparent calculators for common Islamic financial and calendar-related calculations.

### Candidate calculators

- Zakat calculator.
- Zakat on cash, savings, gold, silver, business assets, and receivables where applicable.
- Nisab reference and selectable gold/silver basis.
- Zakat year / Hawl helper.
- Fitra/Fitrana information and calculator where reliable local rates are available.
- Fidya and Kaffarah information/calculation where scholarly and local guidance is reviewed.
- Inheritance calculator as a carefully scoped educational tool, not a substitute for legal advice or a qualified inheritance specialist.
- Islamic date/conversion utilities where appropriate.

### Calculator requirements

- Explain inputs and assumptions.
- Show formulas and calculation date.
- Show source for market prices and Nisab values.
- Allow manual price overrides.
- Explain cases that require scholarly advice.
- Do not give a false impression that all Zakat situations are covered by a simple calculator.
- Protect financial inputs; do not retain them unless the user explicitly saves a calculation.

---

## 4.11 Islamic Knowledge Library

### Objective

Create a searchable reference library for Islamic concepts, terminology, people, places, books, and historical topics.

### Content areas

- Islamic terminology and glossary.
- Seerah and Prophetic biography.
- Islamic history and timelines.
- Important personalities and scholars.
- Major classical books and authors.
- Places of Islamic significance.
- Islamic calendar and events.
- Introductory Aqidah, Fiqh, Tafsir, and Hadith concepts.
- Maps, timelines, and learning references where rights permit.

### Requirements

- Clear editorial authorship.
- Sources and references.
- Reviewed date and version.
- Beginner-friendly summaries.
- Related Quran/Hadith/learning links.
- Search and categories.
- Avoid unsourced historical claims and sensational content.

---

## 4.12 Islamic Utilities

### Candidate utilities

- Qibla direction using device sensors/location.
- Manual Qibla direction by selected location.
- Tasbih/dhikr counter.
- Hijri calendar.
- Gregorian-Hijri date conversion.
- Islamic event calendar.
- Mosque finder, only if reliable location and mosque data are available.
- Prayer-time widget.
- Quick dua and daily adhkar access.

### Requirements

- Explain sensor calibration and possible compass inaccuracies.
- Offer manual fallback for Qibla.
- Request device permissions only when needed.
- Do not promise precision beyond device and data capabilities.
- Support offline access for utilities that do not require live data.

---

## 4.13 Islamic Q&A / Ask a Scholar

### Objective

Help users find existing reviewed answers and, if a qualified review workflow can be established, submit questions to qualified scholars.

### Features

- Searchable reviewed Q&A library.
- Categories and tags.
- Question detail with answer, references, scholar/reviewer, date, and applicable Madhhab.
- Submit a private question form if a real scholar-response service is operational.
- Question status: received, under review, answered, or unable to answer.
- Privacy and consent controls.
- Anonymization option for published answers.
- Report correction or request clarification.

### Important limitations

- Do not claim a question has been answered by a scholar unless an actual qualified scholar reviewed it.
- Do not automatically publish private questions.
- Do not present AI-generated responses as fatwas.
- If no scholar-response operation exists, launch with a curated Q&A library only.

---

## 4.14 Islamic Search

### Objective

Provide one search experience across the platform.

### Searchable sources

- Quran Arabic, translation, topics, and Tafsir.
- Hadith collections, translations, narrators, topics, and commentary.
- Duas and adhkar.
- Islamic guides and learning lessons.
- Knowledge library and Q&A.
- Saved personal items, when the user chooses personal-library search.

### Search features

- Global search bar.
- Language-aware search for Arabic, Bangla, and English.
- Filters by content type, source, collection, topic, and language.
- Exact phrase and partial search.
- Arabic diacritic normalization.
- Typo tolerance where it does not distort religious wording.
- Clear source labels and reference links.
- Search history controls and clear-history option.
- Respect content access and licensing restrictions.

---

## 4.15 Daily Engagement

### Objective

Offer useful daily entry points without turning worship into a gamified competition.

### Features

- Daily Ayat with translation and reference.
- Daily Hadith with grading/source.
- Daily dua.
- Daily learning item.
- Daily adhkar shortcut.
- Prayer-time summary.
- Continue Quran reading.
- Personal goals and reminders.
- User controls for which items appear.
- Avoid repetitive notifications and manipulative engagement mechanics.

---

## 4.16 Personal Islamic Library

### Objective

Provide one private place for a user's saved Islamic resources.

### Saveable items

- Quran Ayat and Surahs.
- Tafsir passages.
- Hadith and commentary.
- Narrator profiles.
- Duas and adhkar.
- Guides and learning lessons.
- Knowledge articles.
- Personal notes and research references.

### Features

- Custom folders/collections.
- Tags.
- Search and filters.
- Private notes.
- Reading history.
- Recently viewed.
- Offline saved items.
- Export and delete controls.
- Sync across signed-in devices.
- Privacy-first defaults.

---

## 4.17 Hajj & Umrah

### Objective

Provide practical, step-by-step learning and preparation support for Hajj and Umrah.

### Features

- Hajj overview and types.
- Umrah overview.
- Preparation checklist.
- Ihram rules and steps.
- Miqat guidance.
- Tawaf guide.
- Sa'i guide.
- Halq/Qasr guidance.
- Hajj days and sequence.
- Mina, Arafat, Muzdalifah, and Jamarat learning guides.
- Relevant duas with sources.
- Common mistakes and restrictions.
- Women-specific practical guidance where reviewed.
- Travel checklist and personal notes.
- Offline guide access.
- Madhhab differences and qualified scholarly references.

Do not provide live logistical claims without current verified information.

---

## 4.18 Family & Personal Life Guides

### Objective

Provide respectful, useful, and source-backed guidance for everyday Muslim life.

### Potential categories

- Marriage and family responsibilities.
- Parenting and children's Islamic learning.
- Rights and responsibilities between family members.
- Parents and relatives.
- Neighbourhood and social manners.
- Work, trade, and business ethics.
- Food and halal considerations.
- Travel manners.
- Illness and visiting the sick.
- Death, Janazah, and bereavement.
- Personal character, honesty, patience, and kindness.

### Requirements

- Carefully reviewed content.
- Avoid one-size-fits-all answers for complex family matters.
- Identify scholarly differences.
- Refer users to qualified professionals or scholars where appropriate.
- Avoid collecting sensitive personal details unnecessarily.

---

## 4.19 Islamic AI Assistant

### Objective

Provide a carefully constrained discovery and learning assistant that helps users navigate verified content.

### Permitted use cases

- Explain a platform feature or Islamic term using approved sources.
- Find relevant Quran Ayat, Hadith, duas, guides, and lessons.
- Summarize approved educational content with citations.
- Help users compare sourced scholarly explanations.
- Help users create a personal learning plan.
- Help users locate a relevant reviewed Q&A entry.

### Mandatory safeguards

- Retrieval-grounded answers from approved content.
- Cite exact source, collection, book/chapter/number, Ayat, edition, or article.
- Clearly distinguish Quran text, Hadith text, translation, scholarly commentary, and AI-generated explanation.
- Never invent Quranic Arabic, Hadith wording, a chain, a narrator, a scholar quote, or a reference.
- Never issue a definitive fatwa.
- For personal or disputed rulings, explain that a qualified scholar is needed.
- If evidence is missing or confidence is low, say that it cannot verify the answer.
- Do not convert "no result found" into "this is fabricated/haram/invalid."
- Do not present one Madhhab's view as universal.
- Keep user prompts and personal information private according to the platform privacy policy.
- Provide a way to report an incorrect answer.
- Log source/version metadata for audit and correction.

AI must remain an assistant for discovery and explanation, not an authority.

---

## 4.20 Account & Personalization

### Account

- Guest browsing for public content where possible.
- Sign up and sign in.
- Email-based account flows; additional methods may be evaluated later.
- Password reset and secure session management.
- Account verification where needed.
- Sign out from current/all sessions.
- Account deletion and data export.

### Personalization

- Preferred language: Bangla and English initially.
- Arabic text display settings.
- Default Quran script.
- Preferred translation and Tafsir.
- Preferred Qari.
- Preferred Madhhab setting, with a clear explanation that it personalizes educational guidance and does not make the platform a religious authority.
- Prayer-time location and calculation settings.
- Notification preferences and quiet hours.
- Accessibility and reading preferences.
- Theme preferences.

### Privacy

- Private bookmarks, notes, trackers, and history.
- Clear consent for location, microphone, and notifications.
- Permission can be revoked.
- Data export and deletion.
- Minimal data collection.
- No sale of personal worship data.
- No public visibility of worship activity by default.

---

## 4.21 Platform-wide Services & Content Management

### Content management

The platform requires a structured content management workflow for:

- Quran text and mappings.
- Translations and Tafsir.
- Qari and audio metadata.
- Tajweed rules and learning courses.
- Hadith collections, numbering, translations, narrators, chains, grading, and Sharh.
- Wudu, Salah, and Fiqh content.
- Duas and adhkar.
- Guides, courses, quizzes, and knowledge articles.
- Prayer calculation settings and Ramadan content.
- Q&A and scholar-reviewed answers.
- AI-approved retrieval sources.

### Editorial workflow

1. Draft.
2. Source attached.
3. Editorial review.
4. Qualified scholarly review where required.
5. Rights/licensing review.
6. Approved.
7. Published.
8. Correction/revision.
9. Archived.

### Required metadata

- Content title and type.
- Language.
- Original source.
- Author/compiler/translator/scholar.
- Edition and version.
- Reference identifiers.
- Madhhab or scholarly context where applicable.
- License/permission status.
- Reviewer and review date.
- Publication and revision timestamps.
- Change history.

### Administration

- Role-based admin access.
- Separate editorial, scholarly reviewer, and administrator permissions.
- Audit log for content changes.
- Draft preview.
- Scheduled publishing where needed.
- Report/correction queue.
- Content version rollback.
- Source and licensing registry.
- Abuse/spam protection for any submitted question or feedback.

---

# 5. Cross-Platform Requirements

## 5.1 Language and localization

- Bangla and English interface support.
- Arabic text support throughout religious content.
- Correct right-to-left rendering for Arabic.
- Mixed Arabic/Bangla/English text must remain readable.
- Bangla pronunciation should be reviewed and consistent.
- Localize date, time, number, and calendar presentation.
- Bangladesh-specific defaults must be transparent and configurable.

## 5.2 Offline and low-bandwidth experience

- Prioritize text-first experiences.
- Cache essential Quran text and user-selected content.
- Provide explicit download management.
- Show which content is available offline.
- Sync private data when connection returns.
- Handle interrupted downloads safely.
- Avoid downloading large audio/video files automatically.
- Provide graceful loading and retry states.

## 5.3 Accessibility and usability

- Responsive mobile-first design.
- Readable Arabic font and adjustable text size.
- Keyboard navigation.
- Screen-reader labels.
- Sufficient contrast.
- Clear focus states.
- Captions/transcripts for learning media where possible.
- Avoid relying on colour alone to communicate Tajweed or status.
- Simple navigation and consistent terminology.

## 5.4 Notifications

- Notifications must be opt-in and configurable.
- Separate prayer, Quran, learning, revision, Ramadan, and daily content settings.
- Quiet hours and frequency controls.
- Easy unsubscribe/disable.
- Avoid guilt, shame, or fear-based copy.
- Browser/PWA notification limitations must be explained accurately.

## 5.5 PWA and device capabilities

- Installable web app where supported.
- Offline caching with clear storage controls.
- Qibla compass uses device sensors only when available and permission is granted.
- Provide manual fallback for unsupported devices.
- Microphone access only for guided recitation and only after user action.
- Background audio behaviour must be tested across supported browsers.

---

# 6. Content Accuracy, Trust, and Religious Governance

This is a core product requirement, not an optional quality improvement.

## 6.1 Source policy

Every religious content item must have a traceable source. Depending on content type, metadata should include:

- Quran Surah/Ayat reference.
- Hadith collection, book, chapter, number, and edition.
- Hadith grading scholar and source.
- Tafsir author, translator, edition, and page/section where possible.
- Dua source and authenticity information.
- Fiqh source, Madhhab, and scholarly context.
- Reviewer and last-reviewed date.

## 6.2 Scholarly review

- Quran text and mapping require specialist verification.
- Hadith text, numbering, grading, and chain data require reliable source verification.
- Fiqh guidance must be reviewed by qualified scholars familiar with the stated school/context.
- Translation and transliteration require language review.
- AI-generated explanations must be checked against approved source material and must not be treated as independent religious evidence.

## 6.3 Disagreement handling

- Present legitimate differences neutrally.
- Attribute each view.
- Do not hide differences that materially affect practice.
- Allow users to filter by a chosen school where content is available.
- Explain when a question is disputed or context-dependent.

## 6.4 Licensing and rights

- Verify permission to use Quran translations, Tafsir translations, Hadith translations, audio, images, videos, and books.
- Store license terms and attribution requirements.
- Do not assume public availability means unrestricted reuse.
- Provide takedown/correction handling.

## 6.5 Correction process

- Users can report an error.
- Reports enter a review queue.
- Critical errors can be unpublished quickly.
- Maintain a correction log and version history.
- Notify users when a saved item has a material correction, where appropriate.

---

# 7. Non-Functional Requirements

These are product-level targets; exact service-level objectives should be set during technical planning.

## 7.1 Performance

- Fast initial loading on common mobile devices.
- Text-first pages should remain usable on slower connections.
- Avoid loading all media and all content at once.
- Use pagination, lazy loading, and caching where appropriate.
- Audio playback should recover gracefully from network interruptions.

## 7.2 Reliability

- No silent corruption of bookmarks, notes, or progress.
- Safe retry for downloads and sync.
- Clear offline/online state.
- Backups and recovery for account data.
- Content changes must be versioned.

## 7.3 Security

- Secure authentication and session handling.
- Server-side authorization for every private resource.
- Validate and sanitize all user inputs.
- Protect against common web vulnerabilities.
- Rate-limit sensitive endpoints and abuse-prone forms.
- Encrypt traffic in transit.
- Secure secrets and administrative credentials.
- Least-privilege admin roles.
- Audit administrative and content changes.
- Do not expose private notes, trackers, or user data through public APIs.
- Security testing before production release.

## 7.4 Privacy

- Collect only data needed for a feature.
- Ask permission at the point of use.
- Provide data export and account deletion.
- Make personal worship tracking private by default.
- Do not sell personal data or worship activity.
- Define retention and deletion policies.
- Publish a clear privacy policy.

## 7.5 Maintainability and scalability

- Modular product domains.
- Consistent content schemas and identifiers.
- Clear separation between religious content and user-generated private data.
- Versioned APIs and content.
- Automated tests for critical workflows.
- Observability for errors and performance.
- Scalable media delivery and search as usage grows.
- Document editorial and technical operations.

---

# 8. Suggested Release Strategy

The release priorities below are a planning proposal, not a final commitment. The product owner should approve scope after estimating content availability, review capacity, and implementation effort.

## Phase 0 — Trust and foundation

- Content source registry and licensing workflow.
- Editorial and scholarly review process.
- Account/privacy foundation.
- Arabic/Bangla/English rendering.
- Search foundation.
- Admin content management foundation.
- Quran and Hadith identifiers/versioning.

## Phase 1 — Essential daily experience

- Quran Arabic reading.
- Verified Bangla Quran translation.
- Quran audio.
- Quran bookmarks and personal notes.
- Quran search and essential offline text.
- Core Hadith collections with Arabic and Bangla translation.
- Hadith references and grading attribution.
- Basic Hadith search and bookmarks.
- Wudu guide.
- Salah guide and core recitations.
- Prayer times and Qibla utility.
- Core duas and daily adhkar.

## Phase 2 — Learning and deeper reference

- Tafsir and word-by-word Quran study.
- Mushaf page view.
- Tajweed learning.
- Hifz and individual Khatm planner.
- Hadith narrator profiles and commentary.
- Hadith topic library and learning.
- Tayammum and Ghusl guides.
- Expanded Salah guides and Madhhab comparison.
- Ramadan companion.
- Islamic learning courses.
- Personal library.

## Phase 3 — Advanced and expanded experience

- Guided Quran recitation.
- Advanced recitation feedback after validation.
- Hadith chain visualization and advanced research.
- Hadith claim checker.
- Expanded offline collections.
- Hajj & Umrah.
- Advanced calculators.
- Reviewed scholar Q&A service if operationally supported.
- Constrained Islamic AI assistant.

---

# 9. Acceptance Criteria — Platform-wide

A feature is not ready for release until:

1. Its purpose and intended user are documented.
2. Content source and rights are recorded.
3. Religious claims have the required review.
4. Arabic, Bangla, and English presentation is checked where applicable.
5. Mobile and desktop layouts are usable.
6. Loading, empty, error, and offline states are handled.
7. Permissions are requested only when needed.
8. Private user data is protected by server-side authorization.
9. User can control reminders and personal tracking.
10. Search results show reliable references.
11. User can report content errors.
12. Critical flows have automated or documented manual tests.
13. Accessibility and keyboard basics are checked.
14. Analytics, if used, do not expose private worship details unnecessarily.

---

# 10. Key Product Decisions Still Open

The following decisions have not been confirmed and must remain visible rather than silently assumed.

| Area | Decision required | Current status |
|---|---|---|
| Purification scope | Wudu only, Wudu + Tayammum, or Wudu + Tayammum + Ghusl | Open |
| Fiqh approach | Hanafi + Shafi'i full support, Hanafi primary with Shafi'i reference, or staged rollout | Open |
| Salah Pray Along | Text + audio + visuals, audio-guided, or video-based | Open |
| Salah illustrations | Separate men/women, universal + textual differences, or illustrations + video | Open |
| Salah tracker | Optional full tracker, five Fard only, or none | Open |
| Prayer times | Calculation methods and Bangladesh default source | Requires product decision and validation |
| Scholar Q&A | Curated library only or operational scholar-submission service | Open |
| Islamic AI | Whether to launch after approved retrieval and review infrastructure exists | Recommended later phase |
| Offline scope | Exact download bundles and storage limits | Open |
| Additional languages | Whether to add beyond Bangla and English | Later decision |

---

# 11. Explicitly Excluded or Restricted Scope

- Public community, forum, social feed, and public groups: **excluded**.
- Group Quran Khatm: **excluded**.
- Public worship leaderboards or competitive spiritual scores: **excluded**.
- AI-generated Quran text, Hadith text, chains, scholar quotations, or fabricated references: **prohibited**.
- AI as an independent fatwa authority: **prohibited**.
- Unverified religious content published for volume: **prohibited**.
- Public visibility of private notes, bookmarks, trackers, and worship history: **off by default**.

---

# 12. Success Measures

Measure product usefulness and reliability, not a user's faith or spiritual worth.

Potential product metrics:

- Successful Quran reading sessions.
- Returning users who continue from a saved position.
- Use of verified translations and Tafsir.
- Successful Hadith searches with source/reference views.
- Completion and usefulness of learning lessons.
- Successful offline access.
- Prayer-time and Qibla utility reliability.
- Content correction rate and time to resolve critical reports.
- Search success and failed-search rate.
- User-reported clarity and trust.
- Performance and crash/error rates.

Do not use worship completion, prayer counts, or religious activity as public performance rankings.

---

# 13. Final Product Definition

Daily Islam is a Bangladesh-first, multilingual Islamic knowledge and daily-practice web platform. Its core value is the combination of:

- Quran reading, listening, study, learning, and memorization.
- A transparent, searchable Hadith library.
- Practical Taharah and Salah education.
- Prayer times, Ramadan, Qibla, duas, and adhkar.
- Structured Islamic learning and reference material.
- Optional private worship and learning tools.
- A personal Islamic library.
- Carefully governed content, scholarly review, licensing, privacy, and accessibility.

The platform should grow in depth only when content accuracy, rights, and review capacity can support that growth. Trust is the product's most important feature.
