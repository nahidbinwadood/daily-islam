# Easy Deen: Design Plan

- Date: 4 November 2026. Status: draft for the founder's review.
- This is a plan for **how we will design** Easy Deen on app and web, and why. It contains no screens, final colours or code.
- Inputs: the 63 features in the Google Doc (62 after the hayez tracker was dropped on 4 Nov 2026), `docs/product-requirements.md`, `reports/Islamic apps Bangladesh market.md`, and `research_notes/Daily use triggers Bangladesh Muslims/`.

**How to read the reasons.** Each decision says *why it's there* and *how it makes sense*.
- **[Research]** means the reason comes from our research.
- **[Judgement]** means it's my product reasoning and has not been proven yet. These are the first things to test with real users.

---

## 1. Product overview

**What Easy Deen is.** One app and website that makes practising Islam easy to understand and easy to do every day, starting from zero, in the user's own language.

**The problem.** Three problems sit behind everything we design:
1. **People don't know how.** Many adults can't recite properly or aren't sure they do wudu and namaz correctly, and they feel shy asking.
2. **Daily needs are scattered.** A dua is on YouTube, an amal is on Facebook, prayer times are in another app. Much of it has no source.
3. **Existing apps don't feel made for them.** Global apps are heavy with ads, and local apps pack in many features without guiding a beginner.

**The main goal.** A normal user touches Easy Deen **5 or more times a day**, on app or web. That includes people who rarely pray or recite.

**Why this goal shapes the design.** No faith app we found has published data showing 5+ opens a day **[Research]**. So we can't copy anyone. We must build around reasons people already have to check something during the day, and then gently lead them towards learning and worship.

**The core idea of the whole design:**

> **Useful first, then trust, then practice.**
> A person arrives for a quick need, like a dua or a time. They get the answer fast and it has a source, so they trust the app. Then the app offers one small next step.

**Why this makes sense.** "Dua for…" searches are about 2.4× prayer-time searches in Bangladesh, and dream searches are about 1.3× **[Research]**. People arrive with daily needs, and worship features grow from there. If we opened with "Start your Quran course", we would lose the people who only came for a dua.

---

## 2. Design goals and how we'll measure them

| Goal | How we measure it | Why this measure |
|---|---|---|
| Daily habit | Median **daily touches** per active user, and the share with 5+ touches | A widget glance meets the need without opening the app, so counting opens alone undercounts **[Research]** |
| Speed | Find today's Maghrib in under 10 seconds; find an exam dua in under 30 seconds | Quick needs are why most people come. If these are slow, they leave **[Judgement]** |
| Understanding | A beginner finishes the wudu guide alone, with no help | This proves the "anyone can use it" promise **[Judgement]** |
| Trust | A user can explain what the "Weak" badge means in their own words | A badge nobody understands builds no trust **[Judgement]** |
| Access | All pass/fail rules in section 9 are met | Accessibility is a requirement, so it needs a yes-or-no check |

**A realistic note.** Muslim Pro's own figures suggest about 1 in 3 monthly users opens it on a given day **[Research]**. 5+ touches is a goal for our engaged users, not an average we should expect at launch.

---

## 3. Design principles

Every later decision follows from these.

### P1. One screen, one job
- **Why it's there:** beginners and elders get lost when a screen offers many choices. Competing apps show long grids of features **[Judgement]**.
- **How it makes sense:** if each screen has one clear main action, the user always knows what to do next. It also forces us to remove things, which keeps the app light on cheap phones.

### P2. Show it, say it, play it
- **Why it's there:** many users can't read Arabic, some read Bangla slowly, and people learn worship by watching and listening.
- **How it makes sense:** a picture, plain words and audio together mean no user is shut out because of one weak skill. Surah audio already has huge demand: one Ar-Rahman video has 467M views **[Research]**.

### P3. Never get lost
- **Why it's there:** when people feel lost in an app, they close it.
- **How it makes sense:** the same five places always stay visible, Back always works, and any feature is within three taps.

### P4. Fast answer first, depth second
- **Why it's there:** most visits are quick. Depth is there for those who want it.
- **How it makes sense:** the answer sits at the top and the details open below (tafsir, source, grade, scholarly differences). The quick visitor and the serious learner both get what they came for.

### P5. Every religious text shows where it came from
- **Why it's there:** the most trusted local apps have a known organisation behind them and show hadith grades **[Research]**. Fake wazifa and kabiraj scams caused real harm in Bangladesh in 2026 **[Research]**.
- **How it makes sense:** a visible source is both protection for the user and our main difference from Facebook content.

### P6. Respect every user's practice
- **Why it's there:** Bangladesh has Hanafi and Ahle Hadith communities, and Pakistan, India, Indonesia and the UAE differ again. Facebook rewards sharper sectarian talk **[Research]**.
- **How it makes sense:** we show the user's chosen madhhab and mark differences calmly, so nobody feels the app belongs to the other side.

### P7. Encourage, never shame
- **Why it's there:** many users don't pray regularly. Guilt makes them leave, and "You lost your streak!" messages feel wrong in worship. Public comparison also risks riya (showing off). We found no scholar's ruling on this, so it needs scholar input **[Judgement]**.
- **How it makes sense:** the app is a kind guide. Progress is private, missed days are forgiven, and no one's worship is compared with anyone else's.

### P8. Works for the phone people really have
- **Why it's there:** about 91–94% of mobile use in Bangladesh is Android, led by budget brands like TECNO, Infinix and Xiaomi **[Research]**.
- **How it makes sense:** we design for the low end first. If it works on a cheap phone offline, it works everywhere.

### P9. Calm space for worship
- **Why it's there:** users strongly dislike ads covering prayer times and ads during worship **[Research]**.
- **How it makes sense:** worship screens have no ads, no upsell and no distractions. This gives us a clear advantage over global apps.

---

## 4. Who we design for

We design for five people. If a design works for all five, it works for everyone.

| Person | Situation | What they force us to do | Why they're on this list |
|---|---|---|---|
| **The occasional visitor** | Rarely prays; comes for a dua, amal or a date | Search-first access, no sign-up wall | Probably our largest group. They're the path to 5+ touches **[Research]** |
| **The beginner** | Wants to learn recitation, wudu, namaz | Step-by-step guides, audio on every line | The founder's main mission |
| **The elder** | Large text, simple paths | Big text setting, words beside every icon | Older family members often learn last and need the most help **[Judgement]** |
| **The woman with private needs** | Purity questions | Privacy by default | Purity rulings are among the most-read Bangla Islamic pages **[Research]** |
| **The busy worker on a cheap phone** | Short moments, low data | Widgets, offline, small downloads | Reflects the real phone market **[Research]** |

**The first user we'd test with:** the occasional visitor, because they're the hardest to keep.

---

## 5. Structure: where everything lives

### D1. Five main places: Today, Quran, Namaz, Dua & Amal, More
- **Why it's there:** 62 features can't all be on the surface. Five is about the limit for a phone's bottom bar with readable words.
- **How it makes sense:** the five names match how people think (quran, namaz, dua), not how the app is built. A user doesn't need to learn the app before using it.

### D2. Quran and Namaz are top-level places
- **Why it's there:** these are the founder's top priorities. Users also expect them.
- **How it makes sense:** the main navigation states what the app stands for, even for a user who only came for a dua.

### D3. "Today" is the default home
- **Layout:** see section 10B. One main element (the next prayer and the day line), then search, the Today card and a few shortcuts.
- **Why it's there:** the daily goal needs a place that changes through the day.
- **How it makes sense:** a static menu gives no reason to return. A home that shows what matters now (next prayer, Friday Kahf, Ramadan iftar) does.
- **To decide:** whether learners should open straight to their lesson instead.

### D4. Prayer times live inside Namaz
- **Why it's there:** times and learning belong to the same subject, and times are the daily reason to open that place.
- **How it makes sense:** someone who checks Asr time every day keeps seeing "Learn wudu" and "Learn namaz" beside it. It leads them gently towards learning, with no pressure.

### D5. Dua and Amal together in one place
- **Why it's there:** users don't separate them. Both start from a need: "I have an exam".
- **How it makes sense:** one need-based place serves the biggest search demand, and the user doesn't have to know the difference first.

### D6. Global search on every screen
- **Why it's there:** the occasional visitor thinks in questions, not menus. Bangla script beats Banglish about 2:1 in search, but both are real **[Research]**.
- **How it makes sense:** search covers all 62 features and accepts Bangla, Banglish and phonetic spelling. It becomes the shortcut around the whole structure.

### D7. "More" holds the occasional tools
- **Why it's there:** guides, calculators, baby names and similar tools look like occasional lookups, though nobody has measured this **[Judgement]**.
- **How it makes sense:** they stay out of the daily path. Search, Today and seasonal prompts surface them when they matter, like zakat in Ramadan.

### D8. Sign-up is optional
- **Why it's there:** a sign-up wall stops the quick visitor before they get value.
- **How it makes sense:** the app works fully without an account. We offer an account only when it clearly helps, such as syncing progress between phone and web.

### Feature map

| Place | Features | Count |
|---|---|---|
| Today | Today Card, Ayat of the Day, Daily Learning Drops, Private Streak with Grace Days, Monthly Progress Summary, Share Cards | 6 |
| Quran | All 17 Quran features, grouped as Learn, Read, Listen, Understand | 17 |
| Namaz | 7 Prayer Times & Ramadan, 4 Wudu, 8 Namaz | 19 |
| Dua & Amal | All 8 Dua & Amal features | 8 |
| More | 5 Islamic Guides, 4 Calculators, Islamic Status & Caption Library | 10 |
| Outside the app | Home Screen Widgets, Smart Notifications | 2 |
| **Total** | | **62** |

---

## 6. Core patterns

We'll design a few strong patterns and reuse them, instead of designing 62 separate features.

**Why patterns first.** The same behaviour everywhere means users learn it once. It also makes design and building much faster, and new languages and countries become easier.

### C1. Arabic Text Block
- **What it is:** Arabic, pronunciation in the user's script, meaning, audio and a source line, always in the same order.
- **Why it's there:** it's the single most repeated thing in the app: every ayah, dua and word of namaz.
- **How it makes sense:** a user who learns it once can use the whole app, and people who can't read Arabic are never left out. Users can hide layers as they improve, so the app grows with them.

### C2. Step Player
- **What it is:** one step per screen, with a picture, short instruction, audio, and Next and Back.
- **Why it's there:** wudu, namaz, janaza, life-event guides and recitation lessons are all sequences.
- **How it makes sense:** one pattern teaches everything. A user who finishes wudu already knows how to use the namaz guide.

### C3. Need Search
- **What it is:** the user types or picks a need, and results appear with authenticity shown.
- **Why it's there:** it's how people actually look for duas and amal **[Research]**.
- **How it makes sense:** it serves the largest search demand directly, so the user gets to an answer without browsing categories.

### C4. Authenticity Badge
- **What it is:** Sahih, Hasan, Weak or Fabricated, with an icon, a word and a one-line reason.
- **Why it's there:** weak amal spreads widely, such as "Surah Waqi'ah for rizq", which rests on a very weak narration **[Research]**.
- **How it makes sense:** showing weak content with a label teaches users. Hiding it would leave them believing the Facebook version. Icon and word together mean it works without relying on colour.

### C5. Today Card
- **What it is:** a card on the home screen that changes by time, day and season.
- **Why it's there:** search peaks show when people need what: prayer times 04:00–06:00 and around 17:00, dreams 05:00–08:00, Kahf on Fridays **[Research]**.
- **How it makes sense:** the app shows the right thing at the right moment, so it feels useful without asking the user to navigate.

### C6. Counter
- **What it is:** one large tap area with a count, vibration and a target.
- **Why it's there:** tasbih, after-namaz adhkar and durood all need it.
- **How it makes sense:** a large area allows counting without looking at the screen, which fits real use.

### C7. Audio Player
- **What it is:** one player for the whole app, with play, repeat, speed and sleep timer.
- **Why it's there:** listening is the easiest way in for those who can't read Arabic, and commuters can use it.
- **How it makes sense:** one audio behaviour means no re-learning. Audio keeps playing while the user moves around the app.

### C8. Share Card
- **What it is:** a clean image of an ayah, dua or hadith with its source and the app name.
- **Why it's there:** Bangladeshis spend their time on Facebook (64M users) and TikTok (56M adults) **[Research]**.
- **How it makes sense:** we go where people already are. Each share spreads an authentic source and brings in new users at no cost.

### C9. Plain-word Glossary
- **What it is:** a tap on a term like wajib or makruh shows a one-line meaning.
- **Why it's there:** religious terms confuse beginners, but scholars need them for accuracy.
- **How it makes sense:** we keep the correct term and remove the confusion, and the user learns the word.

---

## 7. Design reasoning by feature area

### Quran
- **Learn, Read, Listen, Understand as four parts.** These are the four things people do with the Quran, and it's the founder's order of priority. The user picks what they need, instead of seeing 17 features.
- **Learning as levels, from letters to tajweed.** Adults feel shy about starting from the alphabet. Small levels give private progress with no embarrassment. Matching the Noorani order means it feels familiar in Bangladesh **[Judgement]**.
- **Record and compare, before any AI feedback.** It's simple, private and reliable. Tarteel has no Bangla support, so AI feedback is a later opportunity, not a launch risk **[Research]**.
- **Mushaf page view and ayah view.** People who read regularly want the printed page. Beginners need the meaning under each ayah. Both are real needs, so the user switches between them.
- **IndoPak script by default in Bangladesh.** South Asians learned on this script, so it looks right to them. Indonesia and the UAE default to Uthmani **[Judgement, to confirm with users]**.
- **Tafsir one tap from any ayah.** Understanding is what keeps people reading, so it can't be hidden. Quran.com data also suggests that goal features are rarely used: 130K goals across 63M+ web users **[Research]**. So we lead with reading and understanding and keep goal-setting as an optional extra, as in Khatm Planner.

### Wudu
- **Step Player, with pictures.** People copy actions, so a picture teaches faster than text.
- **Shown by status (fard, sunnah).** Users need to know what makes wudu valid and what adds reward.
- **Common mistakes on each step.** This is the reason people feel unsure, so we answer it where the doubt happens.

### Namaz
- **Guide first, then Pray Along Mode.** Learning needs slow explanation. Practising needs a normal pace. Two modes serve the same content.
- **Pray Along builds the full prayer.** Beginners get confused about which rakat comes next. The app carries that memory for them.
- **Men's and women's posture pictures.** Postures differ in some schools, and women are often left out of such guides.
- **Madhhab Selection, set once.** Choosing once keeps every later screen simple, and users aren't asked to judge differences at each step.
- **After-namaz adhkar appears when prayer time starts.** It's a natural daily trigger built into the prayer routine **[Judgement]**.

### Prayer Times & Ramadan
- **Next prayer as the biggest item.** It answers the question people actually have: "How long until the next prayer?"
- **Matching Islamic Foundation Bangladesh district times.** Users compare with their local mosque and timetable, and wrong times destroy trust instantly **[Research]**.
- **Prohibited times highlighted.** A real user complaint: one missed Asr because of it **[Research]**.
- **A Reliable Azan Alarm with a phone-brand guide and a Test button.** "Azan didn't ring" is a top complaint, and battery killers on Xiaomi, Samsung and Tecno phones are the likely cause **[Research]**. If this fails, users leave.
- **The Hijri date follows Bangladesh's moon-sighting committee.** Bangladesh usually falls one day after Saudi Arabia, so a Saudi-based date looks wrong **[Research]**.

### Dua & Amal
- **Organised by need, not by book.** Users say "I have an exam", not "Hisnul Muslim chapter 12".
- **Dua for Others.** People often search on behalf of family, such as a husband's job or a son's exam **[Research]**.
- **Viral Claim Checker.** Forwarded wazifa is common. Checking it gives a reason to open the app and builds trust **[Judgement]**.
- **Ruqyah Scam Safety Guide.** Fake kabiraj cases caused real harm in 2026, so we give safe, sourced ruqyah with a clear warning **[Research]**.

### Islamic Guides
- **Dream Guide.** Dream search is at an all-time high and peaks right after waking **[Research]**. We start with authentic etiquette and avoid fortune-telling, so the feature meets demand without misleading people.
- **Friday Mode.** Kahf searches are about 29× other days **[Research]**. It's a built-in weekly reason to open.
- **Seasonal Guides.** Shab-e-Barat week is the year's largest spike, followed by Ramadan **[Research]**. Guides must be ready before each peak. Contested topics show both views, in line with P6.
- **Life Event Guides.** Birth, marriage and death create urgent needs **[Research]**. If we help at these moments, families remember the app.
- **Baby Names.** A real search theme. It's occasional, but people share it with family.

### Calculators
- **One simple form, one clear answer.** People use these rarely and don't remember the rules, so we ask only what's needed, in plain words.
- **Inheritance shows a "consult a mufti" note.** Inheritance is sensitive and has legal effects, so the calculator must not sound final.

### Daily Engagement
- **Widgets.** Prayer times look like the only built-in reason to check several times a day, and a widget meets that need with no effort **[Judgement]**. In one case study, widget users had 25% higher retention, though that's correlation only **[Research]**.
- **Private Streak with Grace Days.** At Duolingo, allowing 2 missed days raised daily users with no rise in skipping **[Research]**. Duolingo also warns that streaks can't fix a weak product, so streaks are a support and not the core.
- **Smart Notifications, 1–2 a day.** Frequent generic pushes raised uninstalls in a study of 17,500 users **[Research]**. Each push carries real content, so it's useful even if the app is never opened.
- **No leaderboards.** At Duolingo they raised learning time by 17% **[Research]**, but comparing worship invites riya, so we accept lower engagement here on principle **[Judgement]**.

---

## 8. App and website

### W1. Same five places, same words, same order
- **Why it's there:** users move between devices, and the founder wants the same content on both.
- **How it makes sense:** what you learn on one works on the other, and it halves the design effort.

### W2. Layout adapts instead of being redesigned
- Phone: bottom bar, one column. Tablet: side rail. Desktop: left sidebar with a helper panel.
- **Why it's there:** one design system, three sizes.
- **How it makes sense:** bigger screens show more at once, like an ayah beside its tafsir, without changing how anything works.

### W3. The website's main job is being found
- **Why it's there:** Bangla Islamic websites have weak engagement, and no one dominates **[Research]**. ihadis shows that city-by-city pages work **[Research]**.
- **How it makes sense:** every dua, amal, surah and district prayer-time page is open to Google with no login. Search brings people in, and they then discover the app.

### W4. Each platform does what it's best at

| Only on the app | Only on the website |
|---|---|
| Widgets, azan alarms, qibla compass, offline downloads, recording recitation | Pages found through Google, long reading on large screens, easy sharing by link |

- **Why it's there:** pretending both can do everything leads to weak features.
- **How it makes sense:** the website points to the app for alarms and offline use, so each one strengthens the other.

---

## 9. Accessibility plan

Accessibility is built in from the first sketch, because adding it later costs more and usually fails. The baseline is WCAG 2.2 level AA.

| Rule | Why it's there | How it makes sense |
|---|---|---|
| Large text setting; layouts hold at 200% | Elders and weak eyesight | Layout is planned for growth, so nothing breaks |
| Tap targets at least 48×48px | Older users and cheap touchscreens | Fewer wrong taps, less frustration |
| Words beside every icon | Icons alone are unclear to many | Nobody has to guess |
| Contrast 4.5:1 for text, 3:1 for icons | Outdoor light in Bangladesh, cheap screens, weak eyes | Readable anywhere |
| Colour is never the only signal | Colour blindness, cheap screens | Badges use an icon and a word |
| Everyday Bangla, short sentences | Different reading levels | Reduces the need for help |
| Audio on every guide and Arabic text | Low literacy, blindness | Learning without reading |
| Screen reader labels; Arabic tagged correctly | Blind users deserve worship content too | TalkBack, VoiceOver and web readers read the right language |
| Full keyboard use and visible focus on web | People who can't use a mouse | Required for real web access |
| Reduced motion respected; nothing flashes | Motion sensitivity | Calm by default |
| Right-to-left layouts for Arabic and Urdu | Needed for those languages | Planned from the start, so it isn't a rebuild |
| Works offline; handles slow networks | Rural areas and data costs | Core features never depend on signal |

**Project rules:**
- Everything clickable shows a pointer cursor on web, and disabled items show "not-allowed", set by one global rule.
- Icons are real icon components, never text symbols, at least 16px inline, about 18px in navigation, about 20px in tiles.
- Dropdowns use a chevron icon that rotates 180° when open.

---

## 10. Visual direction

These are directions only. Final choices come after we test them.

| Direction | Why it's there | How it makes sense |
|---|---|---|
| Calm, clean, spacious | Worship needs peace, and competing apps feel busy | Space itself becomes a difference |
| One main colour, few others | Fewer colours, less confusion | Colour keeps meaning: action, warning, grade |
| Text is the main visual | The content is words of Quran and dua | We spend the design effort on beautiful, readable type |
| Arabic larger than all other text | The Quran should feel honoured | Size shows respect and helps reading |
| Neutral illustrations, no faces | Many Muslims avoid faces in religious images | Respectful and consistent; scholars approve the style |
| Dark mode from the start | Fajr, Tahajjud and night reading | Comfort at the hours people actually use the app |
| Light animation only | Cheap phones and calm feel | Fast and respectful |

**Fonts need early testing.** Bangla marks, Arabic harakat and Urdu Nastaliq all need more line height than Latin text. If we choose fonts late, every layout breaks.

### 10A. What makes an app feel clean: research

The founder likes how *clean* Muslim Bangla feels, but Easy Deen must not copy it or any other app. So we studied apps known for clean design to find **why** they feel clean, then built our own look from those reasons.

**What we looked at** (App Store screenshots, checked 4 Nov 2026):
- Islamic apps: Pillars, Sajda, Athan Utility, Pray Watch, Quran.com, Ayah, Quran Pro and Tarteel.
- Other faith apps: Hallow (Catholic) and Daily Prayer App.

Clean design shows mainly in screens, so this is visual observation **[Research]**. Which of these qualities Bangladeshi users notice is **[Judgement]** until we test.

| App | What makes it feel clean |
|---|---|
| **Pillars** | One very large "next prayer" with time left, then a short list. Dark navy with one light colour. The no-ads message is part of the brand |
| **Sajda** (claims 5M active users) | One soft colour across the whole app, very few elements per screen |
| **Athan Utility** | One big prayer name, a thin day curve, a plain list. Almost no decoration |
| **Pray Watch** | A single countdown ring as the only graphic. Everything else is plain text |
| **Quran.com** | The reading screen is almost only text on white. Controls hide while reading |
| **Ayah** | Paper-coloured background like a printed Mushaf. "Zero ads" is stated openly |
| **Quran Pro** | Soft light surfaces. The listen screen centres on one reciter and one play button |
| **Hallow** | Home is a short list of today's routines ("Daily Prayers", "Morning Routines"), with simple illustrations, not busy photos |
| **Daily Prayer App** | Built around morning and evening rhythm, with large readable type |

**Things that made apps feel *busy*, the opposite of clean:**
- Many coloured tiles at once.
- Gold and green ornament everywhere.
- Mosque or Kaaba photos behind text.
- Banners and ads on the home screen.
- Several different icon styles.

**What clean apps share,** turned into rules we can check:

| Clean rule | Why it's there | How it makes sense |
|---|---|---|
| **One main element per screen** | Every clean app had one thing that stands out, like the next prayer or the ayah | The eye knows where to go first, which helps beginners and elders |
| **One brand colour plus neutrals** | Clean apps used one main colour. Busy ones used many | Colour then carries meaning: action, warning, grade. It isn't decoration |
| **Generous space** | Space around content was the most common shared trait | It makes text easier to read and taps easier to hit |
| **Type does the work** | Clean apps show hierarchy with size and weight, not boxes and colours | Fewer boxes and lines means less visual noise |
| **No more than 3 text sizes on a screen** | Many sizes look messy | A stable order the user learns once |
| **Controls hide while reading** | Quran.com and Ayah do this | The words of the Quran get the whole screen |
| **No text over photos, no heavy ornament** | Photos and patterns make text harder to read | Readable on cheap screens and in sunlight |
| **One icon set, one stroke weight** | Mixed icon styles made apps look unfinished | The whole app feels like one product |
| **At most one main button per screen** | Several equal buttons make people hesitate | It follows P1 (one screen, one job) |
| **No banners or ads** | Clean apps state "no ads" openly | It protects the calm feel and supports P9 |

### 10B. Easy Deen's own look: clean and unique

Many Islamic apps look alike: green and gold, mosque silhouettes, geometric patterns, night-sky blues. To feel unique, Easy Deen needs ideas of its own, not just another colour.

**Decision (4 Nov 2026): the founder chose A, Paper and ink.** B and C stay below for the record only. User testing will tune the details of A, such as the paper tone, the accent colour and the type, but not reopen the direction.

**The three directions we considered:**

| Direction | What it looks like | Why it could work | Risk |
|---|---|---|---|
| **A. Paper and ink** | Warm paper-white background, dark ink text, one deep accent colour | Feels like a printed Quran or Noorani book, so it's familiar and calm. Best for long reading | Could feel plain if spacing and type aren't excellent |
| **B. Day colours** | A neutral app that takes a very soft tint from the current prayer time: dawn at Fajr, bright at Dhuhr, warm at Asr, amber at Maghrib, deep at Isha | The app changes with the user's day, which ties to our daily-use goal | Tints must stay subtle, or contrast suffers |
| **C. Bengal heritage** | Clean white with one thin line motif from Bangladeshi mosque architecture, such as the arches of the Sixty Dome Mosque | Unique to Bangladesh and builds local pride | May feel too local when we expand to Pakistan, Indonesia and the UAE |

**What A means in practice:**

| Element | Rule | Why |
|---|---|---|
| Background | Warm paper-white, never pure white | Easier on the eyes for long reading, and feels like a printed Mushaf |
| Text | Dark ink, never pure black | Softer contrast that still passes the 4.5:1 rule |
| Accent | One deep colour, used only for actions and the current prayer | Keeps the page calm; the accent always means "tap here" or "now". The exact colour is decided in testing, and doesn't have to be green |
| Surfaces | Cards are a slightly different paper tone, with thin lines and no heavy shadows | Separates content without visual noise |
| Arabic | The largest text on any screen, in ink, with generous line height | The Quran stays the focus |
| Dark mode | "Night paper": a dark warm tone with soft light ink, not pure black | Comfortable at Fajr and Tahajjud, and keeps the same calm feel |
| Grades and warnings | Their own fixed colours, each with an icon and a word | Meaning never depends on colour alone |

**The main risk:** paper and ink can feel plain if spacing and type are weak. **How we handle it:** we spend the design effort on typography (Bangla, Arabic and Latin faces tested together early) and on spacing, since in this direction those carry the identity.

**Four signature elements** that make Easy Deen recognisable without copying anyone:

1. **The day line.** Today's five prayers on one horizontal line, with a "now" marker and time left.
   - **Why:** many apps use an arc or ring. A straight line is simpler and fits a narrow widget. It also reads naturally left to right, mirrored for Arabic and Urdu.
   - **How it makes sense:** one glance answers "where am I in today's prayers?". It works as the home main element, the widget, and the website header.
2. **The source line.** Every ayah, dua and hadith ends with the same small line: source, grade and number of times to say it.
   - **Why:** trust is our main difference, so we make it visible.
   - **How it makes sense:** users learn to look for it, and a missing source becomes easy to notice.
3. **Step dots.** Every guide shows progress as a row of dots, one per step.
   - **Why:** wudu, namaz and lessons all use the Step Player.
   - **How it makes sense:** the user always knows how far they are and how much is left, which lowers anxiety for beginners.
4. **A Bangla-first wordmark.** The name appears as সহজ দ্বীন in Bangladesh and as Easy Deen elsewhere, in a custom lettering style.
   - **Why:** most apps here use Latin-script logos.
   - **How it makes sense:** a Bangla logo feels made for the user, and a matching Latin version serves other countries.

**Home screen (Today), in order:**
1. The day line, with the next prayer and time left, as the main element.
2. Search.
3. The Today card, which changes through the day.
4. Four to six shortcuts with words.

**Why:** it follows the clean rules, with one main element and a clear order. It answers the most common question first, and keeps quick needs one tap away.

**Originality rule:** our layouts, icons, illustrations, colours and logo are our own. We don't copy any app's screens. **Why:** copying risks store complaints, and users would see Easy Deen as a copy instead of a better choice.

---

## 11. Languages and countries

### L1. Language and region are separate settings
- **Why it's there:** a Bangladeshi in Dubai needs Bangla text with UAE prayer rules. The founder chose to let UAE users pick any language.
- **How it makes sense:** one setting can't describe this person. Two settings cover every case.

### L2. Designs must survive every language
- **Why it's there:** text length and direction change a lot between Bangla, Urdu, Hindi, Indonesian, Arabic and English.
- **How it makes sense:** we test core patterns in the longest language and in right-to-left early, so we don't redesign later.

### L3. Pronunciation uses each language's script
- **Why it's there:** a Bangla reader can't use English-letter pronunciation easily.
- **How it makes sense:** it opens Arabic to people who only read their own script.

### L4. Local rules are data, not design
- **Why it's there:** the founder wants to add countries without rebuilding.
- **How it makes sense:** screens show "Asr time" or "Imsak" from region data, so a new country needs no new screens.

---

## 12. Trust and content design

- **Named scholars, shown clearly.** Trust in Bangladesh follows known names and organisations **[Research]**.
- **Source and date on religious content.** Users and reviewers can check everything.
- **A "Report an error" button.** Mistakes will happen, and an easy report shows we're careful.
- **No ads on worship screens, and no data sale.** Muslim Pro's 2020 location-data story still hurts trust **[Research]**.
- **Wording rules:** calm, kind and simple. Never "You must", and never fear-based language. **Why:** the app's job is to help people return to practice, not to judge them.

**Religious content is the slowest part of design.** Wudu, namaz and recitation need writing, scholar review, illustration and audio. So content work starts at the same time as design, not after it.

---

## 13. How we'll design it: the process

Each stage ends with a decision from the founder. We don't move on until it's approved.

| Stage | What we do | Output | Why this order |
|---|---|---|---|
| 0. Align | Founder approves this plan, name checks, scholars chosen | Signed-off plan | Avoids designing the wrong thing |
| 1. Learn | Talk to 8–10 real users in Bangladesh, and collect Bangla Play Store reviews | Top user needs, confirmed or corrected | Most **[Judgement]** items need real proof first |
| 2. Structure | Finalise five places, feature map, key user journeys | Sitemap and journeys | Structure mistakes are the most expensive to fix later |
| 3. Sketch | Rough black-and-white layouts for key flows | Low-detail wireframes | Cheap to change, and it keeps talk on function, not colour |
| 4. Test | Clickable prototype with 5–8 users | List of fixes | Finds problems before any visual work |
| 5. Foundations | Colours, type, spacing, icons, in all languages | Design system basics | Decided after structure is proven |
| 6. Patterns | Design the nine core patterns properly | Component library | Most screens are built from these |
| 7. Screens | Phase 1a screens first, then 1b and 1c | Final designs | Priority follows launch order |
| 8. Validate | Accessibility checks and a second user test | Release-ready designs | Proves the pass/fail rules |
| 9. Hand over | Specs for developers, then review builds | Handover pack | Keeps the built product true to the design |

**Timing (estimates).** Shab-e-Barat falls around late January 2027 and Ramadan starts around 8 February 2027, so there are about 11–12 weeks. That's tight for design and building together. We'd keep launch scope to Phase 1a, and we may need to drop features to hit the date. Missing it means waiting for the next big peak.

---

## 14. Testing plan

- **Who:** an elder, a woman, a beginner, a slow reader, an occasional visitor, and someone on a low-end Android phone. Include rural users, not just Dhaka.
- **How many:** 5–8 per round.
- **Tasks:**
  1. Find today's Maghrib.
  2. Find a dua for an exam.
  3. Follow the wudu guide alone.
  4. Explain what a Weak badge means.
  5. Make the text bigger and play an ayah.
  6. Check a forwarded wazifa.
- **Why real people:** our research is mostly search data and store pages, and we have **no** direct interviews yet. We also couldn't collect Bangla Play Store reviews. Real users are the biggest gap in this plan.

**The first things to test** (the riskiest **[Judgement]** items):
1. Does Today as home feel useful, or do learners prefer going straight to Quran?
2. Do people understand authenticity badges, and do they accept "Weak" on a popular amal?
3. Is IndoPak the right default?
4. Do widgets actually get added on cheap phones?

---

## 15. Risks

| Risk | Why it matters | How we handle it |
|---|---|---|
| 5+ daily touches may be too ambitious | No published faith app shows it | Track touches and adjust the goal after launch data |
| Too many features for launch | 62 features can overload both the team and the user | Launch Phase 1a only; patterns keep it manageable |
| Scholar review slows content | Content blocks wudu and namaz | Choose scholars now; start with the highest-priority content |
| Labelling a popular amal "Weak" may upset users | Some will disagree, and it could spread on Facebook | Calm wording, a named source, and scholar sign-off |
| Contested topics (Shab-e-Barat, Milad) | Sectarian anger | Show views respectfully, and let scholars review |
| Dream guide may drift into fortune-telling | Religious and trust risk | Etiquette first, caution text, scholar review |
| "Easy Deen" could be read as making religion lighter | Some may object to the name | Tie it to the hadith that the deen is easy (Bukhari), and ask scholars to confirm the wording |
| "Deen" is crowded in stores | Harder to stand out | Clear store text, and a strong Bangla name |

---

## 16. Decisions needed from the founder

1. Approve or change the five places (section 5).
2. Should the app open on Today for everyone, or go to the lesson for active learners?
3. Is the Phase 1a scope right, given the Ramadan date?
4. Who will run the user interviews in stage 1?
5. Which scholars will review content and the illustration style?
6. Confirm "Easy Deen" in both app stores, domain, social handles and trademark records.
