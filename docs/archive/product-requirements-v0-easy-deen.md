# Product requirements: Islamic learning app (web + mobile)

- Date: 4 November 2026. Status: draft for the founder's review.
- App name: **Easy Deen** (সহজ দ্বীন), chosen by the founder on 4 Nov 2026. Store, domain and trademark checks are still pending.
- Background research: `reports/Islamic apps Bangladesh market.md`
- Out of scope for this document: tech stack, backend, UI mockups, code.

---

## 1. Vision and priorities

The goal is one app that teaches a Muslim to **read the Quran correctly, understand it, and pray correctly**, starting from zero, in their own language. Web and mobile have the same content and sync progress between them.

| Priority | Module | In one line |
|---|---|---|
| 1 | **A. Quran** | Learn to recite, then read, listen, understand the translation and study the tafsir of each ayah |
| 2 | **B. Wudu** | Step-by-step wudu, with the duas before and after |
| 3 | **C. Salah** | Every step and posture of namaz, with everything you say in it |
| 4 | **D. After salah and types of prayer** | Adhkar and amal after each prayer; every type of prayer with its time and method |
| 5 | **E. Times** | Prayer times, makruh (forbidden) times, Ramadan sehri and iftar |
| ★ | **F. Daily engagement** (§14) | The reasons a *normal* user, including one who doesn't pray, opens the app many times a day: duas for each situation, amal by need, dreams, life events, Friday and seasonal modes, widgets |

### Principles
1. **Anyone can use it.** No term appears without an explanation. Every step has a picture, and every Arabic text has audio.
2. **Every Arabic text has four layers** (see §2).
3. **Everything shows its source.** Each ayah, hadith and dua carries its reference and, for hadith, its grade. Wudu and salah content is checked by named scholars.
4. **Respect the madhhabs.** Where Hanafi and Shafi practice differ, the guide shows the user's chosen madhhab and marks the difference.
5. **Works offline on cheap Android phones.** Content comes as downloadable packs.
6. **Private.** No ad or data-broker trackers. Prayer times are calculated on the device.

---

## 2. The Arabic text block (used everywhere)

Every Arabic text the user may recite (ayah, dua, words of salah, dhikr) is shown with the same component.

| Layer | Example (the tasbih said in sujood), Bangla user |
|---|---|
| 1. Arabic | سُبْحَانَ رَبِّيَ الْأَعْلَى |
| 2. Pronunciation in the user's script | সুবহানা রাব্বিয়াল আ'লা |
| 3. Meaning in the user's language | আমার সুমহান প্রতিপালকের পবিত্রতা ঘোষণা করছি |
| 4. Audio | Play, repeat ×N, slow speed, and each word lights up as it is spoken |

**Requirements**
- **TB-1 Show or hide layers.** The user can turn each layer on or off. Example: hide the pronunciation once they can read Arabic.
- **TB-2 Tap a word.** Tapping a single word plays that word and shows its meaning.
- **TB-3 Reference line.** Every block shows its source (Quran reference, hadith collection and number, grade). It also shows how many times to say it (×3, ×33).
- **TB-4 Pronunciation in each language's own script.** The pronunciation is written in Bangla, Devanagari (Hindi), Urdu or Latin script (Indonesian, English). It is never a single Latin spelling for everyone.
- **TB-5 Offline audio.** Audio works offline once the pack is downloaded.

---

## 3. Module A: Quran (priority 1)

### A1. Learn to recite (recitation course)
A course that takes a complete beginner from the Arabic letters to fluent recitation with tajweed.

| Level | Content |
|---|---|
| 1 | The Arabic letters: shapes, names and **makhraj** (where in the mouth each sound comes from) |
| 2 | Letter forms when joined: start, middle and end of a word |
| 3 | Harakat (vowel marks): fatha, kasra, damma |
| 4 | Tanween, sukoon, shaddah |
| 5 | Madd (lengthening) and its basic types |
| 6 | Reading whole words, then short ayahs |
| 7 | Tajweed rules: noon sakin and tanween (izhar, idgham, iqlab, ikhfa), meem sakin, qalqalah, ghunnah, the madd types, heavy and light letters, waqf (stopping) signs |
| 8 | Practice on surahs: al-Fatiha and the short surahs used in salah |

**Each lesson has:**
- a short explanation in the user's language
- a makhraj diagram or animation
- teacher audio for every example
- a **listen → repeat → record → compare** exercise
- a quiz

**Rules for the course:**
- **A1-1** Progress is saved and synced. A level unlocks only after the previous level's quiz is passed (the user can skip by choice).
- **A1-2** Recording yourself: the MVP plays your recording next to the teacher's. **AI feedback on mistakes comes later.** Tarteel has no Bangla support, so Bangla AI feedback is an open gap in the market.
- **A1-3** The course uses the user's Mushaf script (IndoPak or Uthmani), so letter shapes match the Quran they will read.
- **A1-4** Every rule links to real examples in the Quran, with tajweed colours.

### A2. Read
- **A2-1** Two ways to read:
  - **Mushaf page mode**, IndoPak or Uthmani, matching the printed page.
  - **Ayah mode**: each ayah with its translation and pronunciation underneath.
- **A2-2** Tajweed colour-coding, which can be turned on or off.
- **A2-3** Last-read position, bookmarks, notes and a khatm (complete reading) planner. Example: finish in 30 days.
- **A2-4** Search by surah, ayah number, Arabic word, translated word, or the user's phonetic spelling.
- **A2-5** Night mode and text size control.

### A3. Listen
- **A3-1** Several reciters to choose from, at least 5 at launch. Each reciter's licence is listed in §10.
- **A3-2** Audio plays ayah by ayah and the current ayah is highlighted in sync.
- **A3-3** Repeat one ayah or a range N times, with a pause between repeats (for memorizing and practising).
- **A3-4** Speed control, a sleep timer, and playback that continues in the background and on the lock screen.
- **A3-5** Download a surah or the whole Quran per reciter, with storage shown.
- **A3-6** *(Later)* Translation audio after each ayah.

### A4. Understand
- **A4-1** Translation in the user's language. Several translations can be chosen, shown side by side.
- **A4-2** Word-by-word meaning: tap a word to see its meaning, root and a short grammar note.
- **A4-3** **Tafsir for any ayah:** a "Tafsir" button on every ayah. Several tafsirs per language can be chosen (Bangla candidates: Ahsanul Bayaan, Abu Bakr Zakaria, Ibn Kathir, Fathul Majid; licences are still to be confirmed).
- **A4-4** The tafsir view shows the ayah's text block (§2) at the top, then the tafsir. The user can move to the next or previous ayah.

### A5. Memorize *(later)*
- A hifz planner: new lesson, recent review and older review (sabaq, sabqi, manzil).
- Hide-the-ayah tests and streaks.

---

## 4. Module B: Wudu (priority 2)

- **B-1 Step-by-step wudu.** Each step is a screen with:
  - an illustration or short animation
  - what to do and how many times
  - its status (fard or sunnah, per the user's madhhab)
  - common mistakes

  The steps, as an outline for scholars to confirm:
  1. Intention (niyyah)
  2. Bismillah
  3. Washing the hands ×3
  4. Rinsing the mouth ×3
  5. Rinsing the nose ×3
  6. Washing the face ×3
  7. Washing the arms to the elbows ×3, right arm first
  8. Wiping the head (masah)
  9. Wiping the ears
  10. Washing the feet to the ankles ×3, right foot first, including between the toes
- **B-2 Duas.** The dua before wudu and the duas after (the shahadah and *Allahumma-j'alni minat-tawwabin…*), each as a text block (§2) with audio.
- **B-3 Guided mode.** One step at a time, with a "Next" button and a short narrated instruction for each step. Example: "Now wash your face three times".
- **B-4 Related topics:**
  - what breaks wudu
  - masah on socks (khuffain)
  - wudu with a wound or bandage
  - women's notes (menstruation and wudu)
- **B-5** *(Phase 2)* Ghusl (fard ghusl and how to do it) and tayammum, each as its own step-by-step guide.

---

## 5. Module C: Salah (priority 3)

### C1. Before salah
Conditions for salah:
- purity
- clean clothes and place
- covering the awrah (men and women)
- facing the qibla (links to the compass)
- the correct time (links to Module E)
- niyyah, with a note that the intention is in the heart and the wording is optional

### C2. Each step of salah
Each step is one screen with:
- **Posture illustrations for men and for women**, front and side views. Hanafi practice has women's postures that differ from men's.
- **How to do it:** hands, feet, eyes, back, how long to stay.
- **What to say:** text block(s) (§2) with audio, and how many times.
- **Status:** fard, wajib or sunnah, by madhhab.
- **Common mistakes.**

The steps, as an outline for scholars to confirm:
1. Takbiratul ihram: raising the hands, how high by madhhab.
2. Qiyam (standing): where the hands are placed, by madhhab. Thana (opening dua), ta'awwudh, Bismillah.
3. Al-Fatiha, then *Ameen*: whether it is said aloud or silently, by madhhab.
4. Another surah, with a picker of short surahs that each have a full text block.
5. Ruku: back straight, hands on knees. *Subhana Rabbiyal 'Azim* ×3.
6. Standing up from ruku: *Sami'Allahu liman hamidah* / *Rabbana lakal hamd*.
7. Sujood: the 7 body parts that touch the ground, elbows, toes. *Subhana Rabbiyal A'la* ×3.
8. Sitting between the two sajdas: the dua for it.
9. The second sajda.
10. Tashahhud (at-Tahiyyat): how to sit and where the finger points, by madhhab.
11. Durood Ibrahim.
12. The closing dua before salam (dua ma'thura).
13. Salam to the right, then the left.

Also included:
- **Raf' al-yadayn** (raising the hands at other points): shown or hidden by madhhab, with a "why scholars differ" note.
- Witr with Dua al-Qunut: the Hanafi and Shafi methods.

### C3. Guided "pray along" mode
- **C3-1** The user picks a prayer, for example "Fajr – 2 rakat fard". The app builds the whole sequence: rakat 1 → 2, with sitting and salam in the right places.
- **C3-2** It plays as a guide: an illustration of the current posture, the recitation audio, and the text on screen.
- **C3-3** Two speeds: **learning** (pauses after each step and explains it) and **practice** (normal pace, which the user can follow while praying).
- **C3-4** A rakat map shows which rakats have a surah after al-Fatiha, which have al-Fatiha only, and where the first tashahhud comes.

### C4. Fixing mistakes and other rules
- Sajdah sahw (the prostrations for forgetting).
- What breaks salah, and what is makruh (disliked) in salah.
- Making up missed prayers (qada).
- Praying in congregation: following the imam, joining late (masbuq).
- Praying while travelling (qasr) and combining prayers, by madhhab.

---

## 6. Module D: After salah and the types of prayer (priority 4)

### D1. Adhkar and amal after each prayer
- **D1-1** Each of the five prayers has its own list of what to say after it. Common items:
  - *Astaghfirullah* ×3
  - *Allahumma antas-salam…*
  - Ayatul Kursi
  - Tasbih ×33, Tahmid ×33, Takbir ×34
  - The three Quls

  Extras after Fajr and Maghrib, for example the three Quls ×3 and the tahlil ×10.
- **D1-2** Every item is a text block (§2) with its source and grade, and a **counter you tap**, with vibration at the target number.
- **D1-3** A "Start after-prayer adhkar" button appears automatically once that prayer's time begins. It opens the list for the current prayer.
- **D1-4** Morning and evening adhkar, sleep duas and everyday duas from Hisnul Muslim, each as text blocks.
- **D1-5** A custom amal tracker that the user configures.

### D2. Types of prayer
The catalog lists every type of prayer. Each one shows:
- what kind it is (fard, wajib, sunnah mu'akkadah, other sunnah, nafl)
- **its time window, linked to that day's live times**
- the number of rakats
- how to pray it (opens pray-along mode)
- any special duas
- its source and grade

| Group | Prayers |
|---|---|
| The five daily prayers | Fajr, Dhuhr, Asr, Maghrib, Isha, with the fard, sunnah and witr rakats per prayer by madhhab |
| Weekly and yearly | Jumu'ah with the khutbah etiquette; Eid al-Fitr and Eid al-Adha with the extra takbirs |
| Night prayers | Tahajjud (shows when the last third of the night begins); Tarawih (8 or 20 rakats, with the madhhab note) |
| Daytime voluntary prayers | Ishraq, Duha (Chasht), Awwabin |
| Occasional | Tahiyyatul masjid, Tahiyyatul wudu, Istikhara with its dua, Salatul Hajat, Salatut Tawbah |
| Special | Janazah (funeral) with its full duas; Kusuf/Khusuf (eclipse); Istisqa (rain) |
| Disputed narrations | Salatut Tasbih and others, **shown with their hadith grade and the scholars' views** |

---

## 7. Module E: Prayer times and Ramadan (priority 5)

- **E-1** Prayer times calculated on the device, with defaults per region (§9) and every setting changeable. They also show:
  - **the makruh (forbidden) times**, which a user explicitly asked for
  - when Ishraq and Duha start
  - when the last third of the night starts
- **E-2** An azan that reliably rings:
  - several azan voices to choose from
  - a separate setting for each prayer (azan, beep or silent)
  - a reminder before each prayer
  - onboarding that guides the user through the battery-saver exemption for each phone brand (Xiaomi, Samsung, Tecno)
  - a "Test azan" button
- **E-3** Location: GPS, or picking a city from an offline list. Bangladesh lists all 64 districts. In Bangladesh, times match the **Islamic Foundation Bangladesh** district timetable, with a minute offset per prayer if needed.
- **E-4** Ramadan:
  - a sehri and iftar timetable for the whole month for the user's city
  - a countdown on the home screen and in widgets
  - sehri and iftar alarms
  - the duas for sehri intention and for iftar as text blocks
  - Tarawih, linked to D2
  - Laylatul Qadr nights
  - Indonesia shows **imsak** time.
- **E-5** Hijri calendar that follows each country's moon-sighting authority. The day offset is pushed from the server on announcement night. The calendar shows Islamic events and days of special fasting (Ayyam al-Bid, Monday and Thursday, Ashura, Arafah), with reminders.
- **E-6** Qibla compass, with help for calibrating the phone's compass.

---

## 8. Design so anyone can understand

- **UX-1 Beginner path on first launch.** Ask "What do you want to learn?" and suggest a path: Learn to read the Quran, Learn wudu and salah, or I already know – take me to the Quran.
- **UX-2 Home screen:**
  - the next prayer and a countdown
  - continue the lesson or Quran reading
  - after-prayer adhkar, when relevant
  - in Ramadan, sehri and iftar
- **UX-3 Plain language.** Every Arabic or fiqh term (wajib, makruh, rakat) is underlined. Tapping it gives a one-line explanation from a glossary.
- **UX-4 Pictures.** Every step has a picture, and the steps are numbered with progress dots.
- **UX-5 Audio first.** Every Arabic text has a play button. *(Phase 2)* Narration of the guide text in the user's language, for users who struggle to read.
- **UX-6 Accessibility:**
  - large text option
  - high contrast
  - screen-reader labels
  - tap targets of at least 48px
  - right-to-left layout for Arabic and Urdu
- **UX-7 Respectful visuals.** Postures are shown with neutral, modest figures without faces. Scholars sign off the visual style.

---

## 9. Countries and languages (from the approved plan)

- **Three things are kept separate:**
  - **Language**: what the user reads.
  - **Region**: which religious and civil rules apply.
  - **Content packs**: which licensed translations ship.
- **Adding a country = adding a region profile, a language pack and content packs. No code change.**
- **Region profile fields:**
  - prayer method and offsets
  - Asr school
  - high-latitude rule
  - Hijri authority and its day offset
  - Ramadan rules (imsak, official timetable)
  - Mushaf script
  - **madhhab default for the salah guide**
  - default language
  - currency
  - payment methods
  - city list
  - time zones
  - default content packs
- **Language pack contents:**
  - UI text
  - number style (০১২, ۰۱۲, ٠١٢ or 123)
  - date format
  - right-to-left flag
  - fonts
  - script used for pronunciation
  - fallback chain, for example `ur → en`
- The user can override every default.
- **Launch languages:** Bangla, English, Urdu, Indonesian, Arabic, Hindi. In the UAE, users can pick any language.
- **A country goes live only when:**
  - its UI text is 100% translated
  - its content licences are confirmed
  - its prayer times are checked against the official timetable
  - its madhhab content has been reviewed

Every value in the table below must be checked before that country goes live.

| | Bangladesh | Pakistan | India | Indonesia | UAE |
|---|---|---|---|---|---|
| Languages | bn | ur, en | hi, ur, bn, en | id | ar, en, plus any |
| Prayer method | Karachi 18/18 (to be checked against IFB) | Karachi | Karachi | Kemenag 20/18 + ihtiyat | Awqaf ~18.2/18.2 |
| Asr / salah madhhab default | Hanafi | Hanafi | Hanafi (Shafi in Kerala) | Shafi | Shafi Asr; the guide default is still to be decided (the official madhhab is Maliki; many expats are Hanafi) |
| Hijri authority | National Moon Sighting Committee | Ruet-e-Hilal | Varies by region | Kemenag sidang isbat | UAE moon-sighting committee |
| Mushaf script | IndoPak | IndoPak | IndoPak | Uthmani | Uthmani |
| Ramadan specifics | IFB district timetable | — | — | Imsak | — |
| Currency / payment | BDT, bKash/Nagad | PKR, JazzCash/Easypaisa | INR, UPI | IDR, QRIS/GoPay/OVO | AED, cards |
| Cities | 64 districts | cities | states + cities | provinces, 3 time zones | 7 emirates |

---

## 10. Content sources and scholar review

| Content | Candidate source | Status |
|---|---|---|
| Quran Arabic text | Tanzil (CC BY 3.0); IndoPak and Uthmani scripts | Can be bundled; credit Tanzil |
| Bangla translation | Abu Bakr Zakaria, from QuranEnc | Allowed with credit and no changes |
| Other Bangla translations (Muhiuddin Khan, Taisirul) | Publishers | Need written permission |
| Urdu, Hindi, Indonesian, Arabic, English translations | QuranEnc | Translator and licence to be confirmed per language |
| Tafsir (Bangla and others) | Publishers, QuranEnc, Quran.com (online only) | To be confirmed. The Quran.com API does not allow bundling for offline use |
| Recitation audio (reciters, word-by-word audio) | everyayah, Quran.com audio, reciters directly | Licence to be confirmed per reciter |
| Hadith | fawazahmed0 (public domain) plus graded editions | Translators' rights to be confirmed |
| Hisnul Muslim duas | Greentech/IRD versions, or our own translation | Licence to be confirmed |
| **Wudu and salah guides, recitation course, illustrations, dua audio** | **Written, drawn and recorded in-house** | Every text needs scholar sign-off |

- **SR-1** A named scholar review board. At least one Hanafi and one Shafi reviewer for launch.
- **SR-2** Every piece of content records its source, its reviewer and the date of review.
- **SR-3** A "Report an error" button on every text block, feeding a review queue.

---

## 11. Non-functional requirements
- The core works offline: times, wudu and salah guides, downloaded Quran and audio.
- The first install is small. Audio, tafsir and translations are downloaded as packs.
- Runs smoothly on 2 GB RAM Android phones.
- Fonts to test: Noto Sans Bengali, Noto Nastaliq Urdu, an IndoPak Mushaf font, KFGQPC Uthmani, Noto Sans Devanagari.
- Progress syncs between web and mobile: lesson level, last read, bookmarks, amal.
- Web pages for each city's prayer and Ramadan times can be found on Google, in every language.

---

## 12. Phases

| Phase | Target | Scope |
|---|---|---|
| **1a – Ramadan launch** (Ramadan expected around 8 Feb 2027) | Bangladesh, Bangla + English | E (times, azan, Ramadan), A2 Read, A3 Listen (3–5 reciters), A4 translation + 1 tafsir, D1 after-salah adhkar, **F1 widgets, F2 Today card, F3 situational dua finder, F7 Friday mode, F10 share cards, F13 popular-surah audio, F8 Shab-e-Barat + Ramadan guides** (Shab-e-Barat, mid-Sha'ban, comes about 2 weeks *before* Ramadan and is the year's biggest search spike, so launch before it) |
| **1b** | Bangladesh | B Wudu, C Salah with pray-along (Hanafi), D2 prayer types, A1 levels 1–6, **F5 amal by need with authenticity badges, F6 dreams, F8 remaining seasonal guides (Eid, Qurbani, Muharram, Dhul Hijjah), F9 life-event guides, F11 baby names** |
| **1c** | Bangladesh | **F9 inheritance calculator, F14 daily learning drops, F15 group khatm** |
| **2** | Pakistan, India | A1 tajweed levels 7–8, Shafi variant, ghusl and tayammum, narrated guides, Urdu and Hindi packs, more tafsirs |
| **3** | Indonesia, UAE | Indonesian and Arabic packs, Uthmani-first, A5 hifz, AI recitation feedback (Bangla first), Maliki variant if the UAE needs it |

---

## 13. Open questions
1. Islamic Foundation Bangladesh's exact calculation angles and Asr method. Get an official timetable and compare.
2. Licences for tafsirs, reciter audio, and the Urdu, Hindi and Indonesian translations.
3. Who sits on the scholar review board, and which madhhabs it covers.
4. Which madhhab the UAE salah guide uses by default.
5. Illustration style (figures without faces?), signed off by scholars.
6. Confirm "Easy Deen" is free in both app stores, as a domain, on social media, and in Bangladesh trademark records.
7. Tech stack and backend, deferred by the founder.
8. Daily engagement (§14): scholars must review the dream-interpretation wording and the Shab-e-Barat and Milad presentation before release.

---

## 14. Module F: Daily engagement (added 4 Nov 2026)

**Goal:** a normal Bangladeshi Muslim touches the app **5+ times a day**, including someone who rarely prays or recites.

**Insight from the research:** ordinary users don't come for worship first. They come for **answers and help in daily life**:
- a dua for *this* situation
- the meaning of last night's dream
- an amal for a job, debt or exam
- what to do at a birth, a wedding or a death
- what to post on Friday

Worship features become the next step once they trust the app.

**Evidence** (in `research_notes/Daily use triggers Bangladesh Muslims/`):
- `search_and_content_demand.md`: Google Trends BD, autocomplete and YouTube, pulled on 4 Nov 2026. Volumes are relative to "নামাজের সময়" (prayer time) = 1.0.
- `questions_fatwa_amal_demand.md`: questions, fatwa and amal.
- `engagement_mechanics.md`: which product mechanics drive daily use.

**One caveat:** the estimate that "90% don't pray" is unverified. A 2026 GTAF survey found 70.8% of Bangladeshi respondents said they prayed all five, but that sample leans towards practising users. Design for both groups.

### F0. The daily loop of a normal user

| Time (BD) | Why they come (evidence) | What the app gives |
|---|---|---|
| 04:00–08:00 | Prayer-time searches peak at 04:00–06:00, dua searches at 05:00–06:00, and **dream searches at 05:00–08:00, right after waking** | Today card (F2): Fajr, Hijri date, morning adhkar, ayah of the day, "Saw a dream?" (F6) |
| Day, when needed | **"Dua for …" is the largest Islamic search theme, ~2.4× prayer time**; job and exam amal are rising (+80% for job) | Dua finder (F3) and amal by need (F5), from search, the widget or a share |
| Each prayer time (×5) | Even people who don't pray check prayer times: office breaks, Jumu'ah, Maghrib in Ramadan | Widget glance or notification (F1), after-salah card (D1) |
| Evening, around 17:00 | Second peak for prayer-time searches | Evening adhkar, Maghrib card, "1 page" Quran prompt |
| Night | Surah Mulk is a sunnah before sleep; surah audio is huge on YouTube (one Ar-Rahman video has 467M views, Mulk 118M) | Sleep audio (F13), Mulk reminder |
| Friday | **Surah Kahf searches ~29× other days, Jumu'ah ~40×** | Friday mode (F7) |
| Life events and news | Birth, marriage, death, illness, exams, travel; news spikes (earthquake dua +2,100%) | Life-event guides (F9), timely duas pushed only for real events |
| Seasons | **Shab-e-Barat week is the largest spike of the year**, then Ramadan week 1, Laylatul Qadr, Eid | Seasonal guides (F8) |

**Metric: daily touches.**
- Daily touches = app opens + web visits + widget taps + actions taken from a notification. A widget glance meets the need without opening the app, so counting opens alone undercounts.
- Track the median daily touches per active user, and the share of users with 5+ touches.

### F1. Widgets and lock screen
- Widgets: next-prayer countdown, Hijri date with today's special day, sehri/iftar countdown in Ramadan, ayah or dua of the day, tasbih counter.
- Each widget has one tap target that opens the exact screen behind it.
- In one case study, widget users showed 25% higher retention. That is correlation, not proof of cause.

### F2. The "Today" card (home screen)
- What the card shows changes through the day:
  - Fajr → morning adhkar
  - after each prayer → after-salah adhkar
  - Friday → Kahf
  - Ramadan → sehri/iftar
  - special days → reminder
- One small action per day: 1 ayah with its meaning, 1 dua, or 1 page.

### F3. Situational dua finder (the biggest demand)
- Search a situation in Bangla or Banglish ("পরীক্ষার দোয়া", "ঘর থেকে বের হওয়ার দোয়া", "রোগীর দোয়া", "ভূমিকম্পের দোয়া"). Each result is a text block (§2) with its source and grade.
- Browse by life category: home, travel, food, health, sadness and anxiety, family, work and study, weather and disasters, sleep.
- **"For someone else" mode.** People often search on behalf of family, for example a dua for a husband's job or a son's exam. Offer a dua for a parent, spouse or child, with shareable wording.
- Users can save favourites and add a dua to a personal daily list with a reminder.

### F5. Amal by need, with authenticity badges
- Needs: rizq, job, debt, marriage, exams, illness, protection, children, anxiety, forgiveness. Each shows the amal, how to do it and how many times.
- **Every amal carries a badge:** Sahih / Hasan / Weak / Fabricated / No source, with a one-line reason. For example, "Surah Waqi'ah for rizq" comes from a very weak narration and gets labelled as such.
- **"Check a viral claim":** the user pastes a forwarded wazifa and gets the closest vetted entry with its grade.
- **Ruqyah safety:** sunnah ruqyah with text and audio, plus a scam warning. Bangladeshi news in 2026 covered fake kabiraj and "jinn removal" cases involving assault, theft and a death.

### F6. Dreams ("Saw a dream?")
- Dream searches are rising fast and peak at 05:00–08:00.
- Start with the authentic **sunnah etiquette**: good dreams and bad ones, what to do after a bad dream, and not telling others about bad dreams.
- Then a **guided symbol lookup** with a caution. The dream books attributed to Ibn Sirin are of disputed attribution, and an interpretation is never certain and never a ruling. Scholars review the wording.
- No personalised "fortune" readings.

### F7. Friday mode
- Surah Kahf (read and audio, with a progress bar).
- A Jumu'ah checklist: ghusl, going early, durood, the hour of dua.
- A durood counter and Friday share cards.

### F8. Seasonal guides (live before each peak)
- Shab-e-Barat
- Ramadan: niyyah, what breaks the fast, Tarawih, i'tikaf, the last 10 nights
- Laylatul Qadr
- Eid: the salah and its sunnahs
- Qurbani: rules, a share (hissa) calculator, the dua
- Muharram and Ashura
- Dhul Hijjah (the first 10 days), Hajj and Umrah
- **The yearly fitra and zakat amounts in BDT,** as announced by IFB, plus a zakat calculator.
- **Shab-e-Barat and Milad are contested in Bangladesh.** Show the agreed practices and the scholarly differences (§10 review), without taking sides.

### F9. Life-event guides (checklists to share with family)
- **Birth:** adhan in the baby's ear, tahnik, aqiqah, naming (F11).
- **Marriage:** nikah steps, mahr, duas.
- **Illness:** visiting the sick, duas, ruqyah (F5).
- **Death:**
  - what to do in the first hours
  - ghusl and kafan
  - janaza step by step (D2)
  - duas for the deceased
  - an **inheritance (মিরাস) calculator** (Hanafi, with a "consult a mufti" note)
- **Travel:** qasr, travel and vehicle duas.
- **New house, new job, exams.**

### F10. Share cards (built for Facebook, WhatsApp and TikTok)
- The daily ayah, dua or hadith as a **clean Bangla image card**, sized for stories and posts, with its source and a subtle app link.
- **An Islamic status and caption library** for Friday, Eid, Ramadan, condolence and congratulations. It is a real Bangladesh search theme. Only authentic quotes, with sources.
- Each share brings new users and gives current users another reason to come back.

### F11. Islamic baby names
- Search by meaning, letter or gender, with the Bangla and Arabic spelling. Names of Sahabah and prophets are marked.
- Users can save a shortlist and share it with family.

### F12. *(Removed 4 Nov 2026: the women's hayez/nifas tracker is out of the plan.)*

### F13. Audio for daily life
- Playlists of the most popular surahs: Ar-Rahman, Mulk, Yasin, Kahf, Waqi'ah, the three Quls. Each comes with translation audio.
- Sleep mode with a timer, and background play.
- *(Later)* Short clips from scholars, balanced across madhhabs.

### F14. Daily learning drops (under 2 minutes)
- 1 Quranic word a day.
- A 2-minute series on the stories of the prophets.
- 1 hadith with its meaning.
- The 5-minute recitation lesson (A1).

### F15. Gentle motivation and family
- A **private streak with grace days.** At Duolingo, allowing 2 missed days raised daily users by 0.38% with no rise in skipping.
- No public leaderboards, because of the risk of riya.
- A monthly private summary.
- **Group khatm:** a family or group of friends splits the 30 juz. It spreads the app by invitation.

### F16. Notification rules (so we don't drive uninstalls)
- The azan is opt-in for each prayer.
- At most **1–2 content pushes a day**, at a time the user picks. The push contains the content itself, not "Open the app!".
- If a user ignores pushes for 7 days, send fewer.
- Event pushes (earthquake, moon-sighting, a death in the news) only for real events, and at most one a day.
- Evidence: frequent generic pushes raised uninstalls in randomised research, and Duolingo's rule is to "protect the channel".

### F17. Guardrails
- Every religious text and answer shows its source. Weak or fabricated content is labelled, not hidden.
- No public comparison of anyone's worship.
- No ads inside worship screens.
- Private data (such as saved dreams) stays on the device or is stored anonymously.
