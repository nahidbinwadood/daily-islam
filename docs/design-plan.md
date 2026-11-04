# Daily Islam — Premium Product Design & Frontend Experience

- **Document type:** Design plan and frontend brief
- **Status:** Adopted by the founder, 4 November 2026
- **Requirements:** `docs/product-requirements.md` (Master PRD v1.0)
- *Previous design plan (Easy Deen, Paper and ink direction, five-tab structure) archived at `docs/archive/design-plan-v0-easy-deen.md`.*

---

You are acting as a **Senior Product Designer, Creative Director, UX Architect, and Expert Frontend Engineer**.

Your task is to design and build a distinctive, premium-quality web experience for **Daily Islam**, a comprehensive Islamic knowledge, learning, and daily-practice platform built primarily for Bengali-speaking Muslims in Bangladesh.

This is not a generic dashboard project. It is a serious digital product that should feel thoughtfully designed by an experienced human design team.

I want an exceptional visual identity, original layout decisions, meaningful interactions, excellent typography, and carefully considered user journeys.

---

# 1. FIRST: UNDERSTAND THE PRODUCT

Before writing any code, carefully read the complete project requirements document:

`docs/product-requirements.md`

Understand:

- The product vision and target users.
- All 21 product modules.
- Quran and Hadith requirements.
- Salah, Wudu, and other worship-related features.
- Islamic learning and educational content.
- Daily engagement and personal Islamic library.
- Privacy, authenticity, and scholarly review requirements.
- The product's Bangladesh-first positioning.

Do not treat this as a simple Quran-reading website.

Daily Islam is a comprehensive Islamic ecosystem. Its interface should make a large amount of information feel organized, accessible, peaceful, and easy to explore.

Do not omit major product areas simply because designing them requires more thought.

---

# 2. DESIGN DIRECTION — MAKE IT FEEL HUMAN-DESIGNED

The most important requirement:

**The website must NOT look AI-generated.**

Avoid the common visual patterns found in AI-generated websites:

- Generic SaaS dashboard layouts.
- Identical cards repeated throughout every section.
- Excessive rounded rectangles.
- Purple/blue AI-style gradients.
- Random glassmorphism.
- Excessive shadows and glowing borders.
- Every section having the same two-column layout.
- Unnecessary floating elements.
- Random decorative icons.
- Overused pill-shaped buttons.
- Oversized headings with generic marketing copy.
- Repetitive feature grids.
- Fake statistics and meaningless progress indicators.
- Decorative Islamic patterns placed everywhere without purpose.

Instead, design it as a carefully art-directed digital publication and Islamic lifestyle platform.

The experience should feel:

- Calm.
- Refined.
- Warm.
- Trustworthy.
- Premium.
- Modern.
- Spiritually welcoming.
- Editorial rather than corporate.
- Information-rich without feeling crowded.

Think of a combination of a premium digital reading platform, a carefully designed editorial publication, and a modern Islamic knowledge platform.

Do not blindly copy any existing website.

Create an original design language for Daily Islam.

---

# 3. TYPOGRAPHY — IMPORTANT: MATCH MUSLIM BANGLA

Reference website:

https://muslimbangla.com/

I particularly like the Bengali typography used by Muslim Bangla.

I want Daily Islam to use the **same Bengali font family and a very similar typographic appearance**.

This is a strong requirement, not a minor preference.

Before choosing fonts:

1. Open the Muslim Bangla website.
2. Inspect its actual rendered Bengali text.
3. Use browser developer tools or another available browser-inspection method to inspect the computed `font-family`.
4. Identify the actual Bengali font, including the relevant font weights.
5. If the website uses a custom or self-hosted font, investigate the font files and licensing.
6. Do not guess the font based on appearance alone.
7. If the exact font cannot be identified, report that limitation and show me the closest alternatives before making a final substitution.

Use the identified font for Bengali interface text throughout Daily Islam.

### Typography requirements

- Bengali must look natural and beautifully rendered.
- English typography must complement the Bengali font.
- Arabic Quran text must use a dedicated, authentic Arabic Quran font.
- Do not use the Bengali font for Quranic Arabic.
- Use carefully selected font weights.
- Establish a consistent typography scale.
- Give Bengali text sufficient line height.
- Avoid clipping vowel marks, conjuncts, or punctuation.
- Test real Bengali sentences, not just short sample words.
- Ensure the typography works on Windows, Android, iOS, and modern browsers.

The typography should be one of the strongest parts of the design.

---

# 4. VISUAL IDENTITY

Create a unique visual identity for Daily Islam.

Do not make the product look like a copy of Muslim Bangla, a generic Islamic template, or a conventional admin dashboard.

Explore a sophisticated visual direction using:

- Deep forest green or similarly thoughtful natural tones.
- Warm off-white and subtle paper-inspired surfaces.
- Muted gold or brass accents used sparingly.
- Deep charcoal for readable text.
- Carefully balanced neutral backgrounds.

These are creative directions, not rigid colour restrictions. Develop a cohesive palette that feels appropriate for the product.

### Design language

- Strong visual hierarchy.
- Thoughtful spacing.
- Beautiful editorial typography.
- Subtle borders.
- Restrained shadows.
- Natural contrast.
- Meaningful visual grouping.
- Distinctive section layouts.
- Purposeful use of illustrations and photography.
- Beautiful Arabic presentation.

Avoid making every section green.

Use colour strategically to establish hierarchy and guide the user.

Create reusable design tokens for:

- Colours.
- Typography.
- Spacing.
- Radius.
- Shadows.
- Borders.
- Layout widths.
- Responsive breakpoints.

---

# 5. CREATE A DISTINCTIVE HOMEPAGE

The homepage is extremely important.

Do not create a conventional hero section followed by a row of feature cards.

Think carefully about how a person actually uses Daily Islam.

The homepage should provide a meaningful overview of the platform while helping users quickly reach their daily needs.

Explore original sections such as:

### A. Thoughtful navigation

Create an elegant navigation system that exposes the platform's major sections without overwhelming users.

Potential navigation areas:

- Quran
- Hadith
- Salah
- Dua & Azkar
- Learning
- Islamic Guides
- Tools

Include account and personal-library access where appropriate.

Navigation must be intuitive on desktop and mobile.

### B. A distinctive welcome experience

Create a visually memorable introductory area.

It should communicate the identity of Daily Islam without using generic marketing slogans.

Consider a combination of:

- Bengali typography.
- A carefully composed editorial headline.
- A subtle Islamic visual element.
- Relevant daily information.
- A meaningful primary action.

Do not fill the hero with unnecessary floating cards.

### C. Today's worship overview

Consider a carefully designed daily overview containing:

- Current Hijri date.
- Current prayer information.
- Next prayer countdown.
- Prayer-time access.
- Daily Quran continuation.
- Daily dua or adhkar.

The information should be organized naturally rather than packed into one dashboard card.

### D. Continue your journey

A personal section that can show:

- Continue Quran reading.
- Current learning lesson.
- Hifz revision.
- Saved content.
- Personal goals.

Only show relevant items when the user has the necessary activity or saved data.

### E. Quran discovery

Create an editorial-style Quran section featuring:

- Continue reading.
- Surah discovery.
- Selected Ayat.
- Quran translations.
- Tafsir access.
- Audio recitation.

Arabic text should receive appropriate visual space and respect.

### F. Hadith discovery

Feature:

- Daily Hadith.
- Collection discovery.
- Hadith search.
- Source and grading.
- Related learning content.

Never display a Hadith without appropriate references in a real implementation.

### G. Learn Islam

Design a beautiful learning discovery area for:

- Beginner learning paths.
- Quran reading.
- Tajweed.
- Salah learning.
- Hadith sciences.
- Islamic knowledge.

### H. Daily duas and adhkar

Create a visually distinct section that makes frequently used duas easy to discover and read.

### I. Useful tools

Provide access to:

- Prayer times.
- Qibla.
- Zakat calculator.
- Tasbih counter.
- Islamic calendar.

### J. Editorial discovery

Consider a thoughtful section for Islamic guides, knowledge articles, and important learning resources.

Do not force every module into the homepage.

The homepage should be curated, not a catalogue of all available features.

---

# 6. DESIGN EACH MODULE AS A REAL PRODUCT EXPERIENCE

Do not use one generic template for all modules.

Each module has a different purpose and deserves its own visual treatment.

Examples:

### Quran

The Quran experience should feel like a dedicated digital reading environment.

Focus on:

- Beautiful Arabic typography.
- Distraction-free reading.
- Surah navigation.
- Ayat navigation.
- Translation and Tafsir.
- Audio player.
- Bookmarks.
- Word-by-word study.
- Reading controls.

Avoid making the Quran reader look like a normal article page.

### Hadith

Treat it like a premium digital research library.

Focus on:

- Collection navigation.
- Book and chapter browsing.
- Readable Arabic and Bengali.
- Hadith references.
- Grading and scholar attribution.
- Narrator profiles.
- Commentary.
- Search and filters.

### Salah

Make it an interactive educational experience.

Focus on:

- Step-by-step guidance.
- Recitation.
- Visual posture instructions.
- Rak'ah structure.
- Madhhab-aware explanations.
- Learning and practice.

### Dua & Azkar

Focus on reading comfort and quick access.

Create distinct experiences for:

- Morning adhkar.
- Evening adhkar.
- After-Salah adhkar.
- Everyday duas.
- Special situations.

### Islamic Learning

Think of a structured learning platform.

Use:

- Learning paths.
- Course pages.
- Lesson layouts.
- Progress.
- Quizzes.
- Revision.

### Islamic Utilities

These should be functional and focused.

Avoid decorating tools so much that they become difficult to use.

---

# 7. CREATE ORIGINAL LAYOUTS AND SECTION COMPOSITIONS

I want you to think beyond standard website templates.

For example, explore:

- Editorial split layouts.
- Asymmetric content compositions.
- Full-width reading experiences.
- Distinctive section introductions.
- Magazine-inspired content discovery.
- Carefully designed timelines.
- Interactive learning journeys.
- Side-by-side Arabic and Bengali reading layouts.
- Dedicated immersive reading modes.
- Thoughtful navigation panels.
- Contextual sidebars.
- Beautiful content detail pages.

Not every page needs to be visually complex.

Some pages should be extremely minimal, particularly Quran reading, Hadith reading, and Dua reading.

Use visual variety with consistency.

The design system should feel like one product, while each section retains its own personality.

---

# 8. INTERACTION AND MICRO-INTERACTIONS

Design meaningful interactions rather than adding animations everywhere.

Examples:

- Smooth navigation transitions.
- Thoughtful hover states.
- Elegant dropdowns.
- Responsive navigation drawers.
- Audio player interactions.
- Quran Ayat selection.
- Bookmark feedback.
- Reading-mode controls.
- Search suggestions.
- Filter interactions.
- Expandable explanations.
- Progress updates.
- Subtle page transitions.

Animations should be restrained and purposeful.

Respect reduced-motion preferences.

Do not use excessive scroll-triggered animations.

---

# 9. RESPONSIVE DESIGN

Design mobile-first, but do not simply shrink the desktop layout.

The website must feel intentionally designed on:

- Small mobile screens.
- Large mobile screens.
- Tablets.
- Laptops.
- Large desktop displays.

Pay special attention to:

- Arabic reading on mobile.
- Bengali text wrapping.
- Navigation.
- Reading controls.
- Audio player placement.
- Touch targets.
- Long content.
- Tables and research information.

The mobile experience is particularly important because the primary audience will frequently access the platform from smartphones.

---

# 10. CONTENT AND AUTHENTICITY

This is an Islamic product, so visual design must respect religious content.

- Never generate fake Quranic text.
- Never invent Hadith.
- Never create fake references.
- Never invent scholarly quotations.
- Never display unverified religious claims as facts.
- Clearly distinguish translations, commentary, and original Arabic.
- Respect differences between Madhhabs.
- Do not use fake scholar profiles or fake testimonials.
- Do not create fake prayer times or fake statistics.

For design previews, use clearly identified placeholder content where real verified content is unavailable.

Do not sacrifice religious authenticity for visual appearance.

---

# 11. TECHNICAL EXPECTATIONS

First inspect the existing repository and identify the actual stack, installed dependencies, and project structure.

Do not replace existing working configurations unnecessarily.

Follow the technologies and conventions already established in the project.

General expectations:

- TypeScript.
- React / Next.js.
- Tailwind CSS.
- shadcn/ui where appropriate.
- Reusable components.
- Clear component boundaries.
- Consistent design tokens.
- Semantic HTML.
- Accessible interactions.
- Responsive layouts.
- Clean and maintainable code.

Do not install unnecessary dependencies.

Do not create huge monolithic components.

Do not use `any` without a genuine reason.

Keep visual components reusable without forcing every page into an identical template.

Separate design preview data from actual religious content.

---

# 12. IMPLEMENTATION WORKFLOW

Do not immediately generate the entire website in one pass.

Work in deliberate stages.

### Stage 1 — Product and repository audit

- Read the complete requirements document.
- Inspect the repository.
- Identify the current application structure.
- Inspect Muslim Bangla's visual and typographic reference.
- Identify its Bengali font if possible.
- Review the existing stack and conventions.

### Stage 2 — Design direction

Before implementation, establish:

- Design concept.
- Visual identity.
- Colour palette.
- Typography system.
- Spacing system.
- Navigation architecture.
- Homepage information architecture.
- Shared component principles.

Create a concise design specification.

If you have multiple genuinely different visual directions, present them briefly and recommend one.

Do not spend time producing generic design moodboards.

### Stage 3 — Build the design foundation

Implement:

- Typography.
- Global styles.
- Design tokens.
- Navigation.
- Header.
- Footer.
- Responsive layout primitives.
- Shared interaction components.

### Stage 4 — Build the homepage

Implement the homepage with real layout variety and carefully composed sections.

Do not stop after creating a static hero section.

### Stage 5 — Build representative module experiences

Prioritize:

1. Quran.
2. Hadith.
3. Salah.
4. Dua & Azkar.
5. Islamic Learning.
6. Prayer Times.

These pages should demonstrate that the platform has a consistent design system but different interaction and layout patterns.

### Stage 6 — Quality review

Review the finished work as a senior designer.

Check:

- Does it look like a real, professionally designed product?
- Is the design too generic?
- Are sections unnecessarily repetitive?
- Is the Bengali font correct?
- Is Arabic typography readable?
- Is the homepage overwhelming?
- Does mobile feel intentionally designed?
- Are spacing and typography consistent?
- Are there fake or unsupported religious claims?
- Are interactions functional?

Fix the issues instead of merely reporting them.

---

# 13. HOW I WILL EVALUATE YOUR WORK

I will judge the result primarily on:

1. Visual originality.
2. Professional design quality.
3. Bengali typography.
4. User experience.
5. Information architecture.
6. Mobile responsiveness.
7. Quran and Arabic reading experience.
8. Consistency without repetitive layouts.
9. Attention to detail.
10. Quality of implementation.

A website that technically contains all the features but looks like a generic AI-generated template is not acceptable.

A beautiful homepage with no meaningful product structure is also not acceptable.

I want both excellent design and a thoughtful product experience.

---

# FINAL INSTRUCTION

Think like a real creative director and product designer.

Do not rush.

Do not blindly follow familiar AI-generated website patterns.

Do not copy Muslim Bangla's complete design. Use it specifically as a Bengali typography reference and as context for understanding the local audience.

Create a distinctive identity for Daily Islam.

Make the product feel trustworthy, warm, refined, editorial, and genuinely useful.

**The final result should look like a carefully designed Islamic digital product created by an experienced product design team — not a website generated from a prompt.**

Begin with Stage 1. Do not start implementation until you have completed the repository and product audit.
