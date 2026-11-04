// Daily Islam prototype: shared helpers. Plain JS, no build step.
// Religious text is NEVER typed in this repo: Quran Arabic, Bangla translations, tafsir and
// recitation all come from the Quran.com API (Quran Foundation) at runtime, with their source shown.

const BN = '০১২৩৪৫৬৭৮৯', AR = '٠١٢٣٤٥٦٧٨٩';
const bn = (v) => String(v).replace(/\d/g, (d) => BN[d]);
const arNum = (v) => String(v).replace(/\d/g, (d) => AR[d]);
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const icons = () => window.lucide && lucide.createIcons();

/* ---------- Storage (private, this browser only) ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem('di-' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('di-' + k, JSON.stringify(v)); } catch (e) {} },
};

/* ---------- Quran.com API ---------- */
const API = 'https://api.quran.com/api/v4';
const AUDIO_BASE = 'https://verses.quran.com/';
const RECITER = { id: 7, name: 'মিশারি রাশিদ আল-আফাসি' };
const TRANSLATIONS = [
  { id: 161, name: 'তাইসিরুল কুরআন', by: 'তাওহীদ পাবলিকেশন্স' },
  { id: 163, name: 'শাইখ মুজিবুর রহমান', by: 'দারুসসালাম' },
  { id: 162, name: 'রাওয়াইউল বায়ান', by: 'বায়ান ফাউন্ডেশন' },
];
const TAFSIRS = [
  { id: 165, name: 'তাফসীর আহসানুল বায়ান', by: 'বায়ান ফাউন্ডেশন' },
  { id: 166, name: 'তাফসীর আবু বকর জাকারিয়া', by: 'বাদশাহ ফাহাদ কুরআন মুদ্রণ কমপ্লেক্স' },
  { id: 164, name: 'তাফসীর ইবনে কাসীর', by: 'তাওহীদ পাবলিকেশন্স' },
  { id: 381, name: 'তাফসীর ফাতহুল মাজীদ', by: 'আব্দুর রহমান বিন হাসান আল-শাইখ' },
];
const trOf = (id) => TRANSLATIONS.find((t) => t.id === id) || TRANSLATIONS[0];

async function api(path) {
  const res = await fetch(API + path);
  if (!res.ok) throw new Error('API ' + res.status);
  return res.json();
}

let chaptersP;
function chapters() {
  chaptersP ||= api('/chapters?language=bn').then((d) => d.chapters).catch((e) => { chaptersP = null; throw e; });
  return chaptersP;
}
const placeBn = (p) => (p === 'makkah' ? 'মাক্কী' : 'মাদানী');

// Common Bangla names of the surahs (names, not Quranic text). Extra spellings after '|' are search aliases only.
const BN_NAMES = ('ফাতিহা,বাকারা,আলে ইমরান,নিসা,মায়িদা,আনআম,আরাফ,আনফাল,তাওবা,ইউনুস,হুদ,ইউসুফ,রাদ,ইবরাহিম,হিজর,নাহল,' +
  'বনি ইসরাইল|ইসরা,কাহফ,মারইয়াম,ত্বহা,আম্বিয়া,হজ,মুমিনুন,নূর,ফুরকান,শুআরা,নামল,কাসাস,আনকাবুত,রুম,লুকমান,সাজদা,আহযাব,' +
  'সাবা,ফাতির,ইয়াসিন,সাফফাত,সোয়াদ|সাদ,যুমার,মুমিন|গাফির,হা-মীম সাজদা|ফুসসিলাত,শুরা,যুখরুফ,দুখান,জাসিয়া,আহকাফ,মুহাম্মাদ,' +
  'ফাতহ,হুজুরাত,কাফ,যারিয়াত,তূর,নাজম,কামার,আর-রহমান|রহমান,ওয়াকিয়া,হাদিদ,মুজাদালা,হাশর,মুমতাহিনা,সাফ,জুমুআ|জুমা,মুনাফিকুন,' +
  'তাগাবুন,তালাক,তাহরিম,মুলক,কলম,হাক্কা,মাআরিজ,নূহ,জিন,মুযযাম্মিল,মুদ্দাসসির,কিয়ামা,দাহর|ইনসান,মুরসালাত,নাবা,নাযিয়াত,আবাসা,' +
  'তাকভির,ইনফিতার,মুতাফফিফিন,ইনশিকাক,বুরুজ,তারিক,আলা,গাশিয়া,ফজর,বালাদ,শামস,লাইল,দুহা,আলাম নাশরাহ|ইনশিরাহ,তীন,আলাক,কদর,' +
  'বাইয়িনা,যিলযাল,আদিয়াত,কারিয়া,তাকাসুর,আসর,হুমাযা,ফীল,কুরাইশ,মাউন,কাওসার,কাফিরুন,নাসর,লাহাব|মাসাদ,ইখলাস,ফালাক,নাস')
  .split(',').map((s) => s.split('|'));
const bnName = (id) => BN_NAMES[id - 1][0];
// loose Bangla/Latin matching: drop prefixes, vowel length, sibilant and ya variants, spaces
const norm = (s) => String(s).toLowerCase().replace(/[০-৯]/g, (d) => BN.indexOf(d))
  .replace(/^(সূরা|সুরা|surah?)\s*/, '').replace(/^(আল|al)[-\s]?/, '')
  .replace(/[ঈ]/g, 'ই').replace(/[ঊ]/g, 'উ').replace(/ী/g, 'ি').replace(/ূ/g, 'ু').replace(/[শষ]/g, 'স').replace(/ণ/g, 'ন')
  .replace(/য়/g, 'য').replace(/ড়/g, 'ড').replace(/ঢ়/g, 'ঢ').replace(/়/g, '').replace(/[্\s\-'‘’ʿʾ.]/g, '').replace(/[āáâ]/g, 'a').replace(/[īí]/g, 'i').replace(/[ūú]/g, 'u');

// API text can carry footnote <sup> tags and markup. Parse it inertly and keep only text, so nothing executes.
function plainText(html) {
  const doc = new DOMParser().parseFromString(`<div>${html || ''}</div>`, 'text/html');
  doc.querySelectorAll('sup').forEach((s) => s.remove());
  return doc.body.textContent.replace(/\s+/g, ' ').trim();
}
function paragraphs(html) {
  const doc = new DOMParser().parseFromString(`<div>${html || ''}</div>`, 'text/html');
  const ps = [...doc.querySelectorAll('p')].map((p) => p.textContent.trim()).filter(Boolean);
  return ps.length ? ps : [doc.body.textContent.trim()];
}
const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };

/* ---------- Dropdowns (chevron rotates via aria-expanded) ---------- */
function initDropdowns(root = document) {
  $$('.dd', root).forEach((dd) => {
    if (dd.dataset.ready) return; dd.dataset.ready = '1';
    const btn = $(':scope > button', dd), list = $(':scope > ul', dd);
    const close = () => { btn.setAttribute('aria-expanded', 'false'); list.hidden = true; };
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = btn.getAttribute('aria-expanded') === 'true';
      $$('.dd > button[aria-expanded="true"]').forEach((b) => b !== btn && !b.closest('.dd').contains(dd) && b.click());
      btn.setAttribute('aria-expanded', String(!open)); list.hidden = open;
    });
    list.addEventListener('click', (e) => {
      e.stopPropagation();
      const opt = e.target.closest('button[data-value]'); if (!opt || opt.disabled) return;
      $$('button[data-value]', list).forEach((o) => o.removeAttribute('aria-current'));
      opt.setAttribute('aria-current', 'true');
      const label = $('.dd-label', btn); if (label) label.textContent = opt.dataset.label || opt.textContent.trim();
      if (!dd.dataset.keepOpen) close();
      dd.dispatchEvent(new CustomEvent('pick', { detail: opt.dataset.value }));
    });
    if (!dd.dataset.keepOpen) document.addEventListener('click', close);
    else document.addEventListener('click', (e) => { if (!dd.contains(e.target)) close(); });
    dd.addEventListener('keydown', (e) => { if (e.key === 'Escape') { close(); btn.focus(); } });
  });
}

function toast(msg, icon = 'check') {
  $('.toast')?.remove();
  const t = el('div', 'toast'); t.setAttribute('role', 'status');
  t.innerHTML = `<i data-lucide="${icon}"></i>`; t.append(msg);
  document.body.append(t); icons();
  setTimeout(() => t.remove(), 2200);
}

/* ---------- Prayer times, calculated on the device ----------
   Standard astronomical method (PrayTimes.org / Adhan formulas): Karachi angles Fajr 18°, Isha 18°,
   Hanafi Asr (shadow factor 2). Checked in Node against Dhaka, 4 Nov 2026.
   ponytail: no ihtiyat minutes; the real app must match Islamic Foundation Bangladesh timetables (PRD §10). */
const CITIES = {
  dhaka: ['ঢাকা', 23.8103, 90.4125], chattogram: ['চট্টগ্রাম', 22.3569, 91.7832], sylhet: ['সিলেট', 24.8949, 91.8687],
  rajshahi: ['রাজশাহী', 24.3745, 88.6042], khulna: ['খুলনা', 22.8456, 89.5403], barishal: ['বরিশাল', 22.701, 90.3535],
  rangpur: ['রংপুর', 25.7439, 89.2752], mymensingh: ['ময়মনসিংহ', 24.7471, 90.4203],
};
const rad = (d) => (d * Math.PI) / 180, deg = (r) => (r * 180) / Math.PI;
const fixH = (h) => ((h % 24) + 24) % 24;

function prayerTimes(date, lat, lng, tz = 6) {
  const y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate();
  const A = Math.floor((14 - m) / 12), Y = y + 4800 - A, M = m + 12 * A - 3;
  const jd = d + Math.floor((153 * M + 2) / 5) + 365 * Y + Math.floor(Y / 4) - Math.floor(Y / 100) + Math.floor(Y / 400) - 32045 - 0.5 - lng / 360;
  const D = jd - 2451545.0;
  const fixA = (a) => ((a % 360) + 360) % 360;
  const g = rad(fixA(357.529 + 0.98560028 * D)), q = fixA(280.459 + 0.98564736 * D);
  const L = rad(q + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)), e = rad(23.439 - 0.00000036 * D);
  const RA = deg(Math.atan2(Math.cos(e) * Math.sin(L), Math.cos(L))) / 15;
  const decl = Math.asin(Math.sin(e) * Math.sin(L));
  let eqt = q / 15 - fixH(RA);
  if (eqt > 12) eqt -= 24; if (eqt < -12) eqt += 24;
  const noon = 12 + tz - lng / 15 - eqt;
  const phi = rad(lat);
  const T = (angle) => deg(Math.acos((-Math.sin(rad(angle)) - Math.sin(decl) * Math.sin(phi)) / (Math.cos(decl) * Math.cos(phi)))) / 15;
  const asrAlt = Math.atan(1 / (2 + Math.tan(Math.abs(phi - decl))));
  const asr = noon + deg(Math.acos((Math.sin(asrAlt) - Math.sin(decl) * Math.sin(phi)) / (Math.cos(decl) * Math.cos(phi)))) / 15;
  const toMin = (h) => Math.round(h * 60);
  return {
    fajr: toMin(noon - T(18)), sunrise: toMin(noon - T(0.833)), dhuhr: toMin(noon) + 1,
    asr: toMin(asr), maghrib: toMin(noon + T(0.833)), isha: toMin(noon + T(18)),
  };
}
const NAMES = { fajr: 'ফজর', sunrise: 'সূর্যোদয়', dhuhr: 'যোহর', asr: 'আসর', maghrib: 'মাগরিব', isha: 'ইশা' };
const ORDER = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
const fmt = (min) => { min = ((Math.round(min) % 1440) + 1440) % 1440; const h = Math.floor(min / 60) % 12 || 12, m = min % 60; return bn(`${h}:${String(m).padStart(2, '0')}`); };
const partOfDay = (min) => { const h = (((min / 60) % 24) + 24) % 24; return h < 4 ? 'রাত' : h < 6 ? 'ভোর' : h < 12 ? 'সকাল' : h < 15 ? 'দুপুর' : h < 17.5 ? 'বিকেল' : h < 19 ? 'সন্ধ্যা' : 'রাত'; };

/* ---------- Dates ---------- */
function bnDate(dt = new Date()) {
  // Revised Bangla calendar (Bangladesh, 2019): year starts 14 April; Boishakh–Ashwin 31 days,
  // Kartik–Magh 30, Falgun 29 (30 in a Gregorian leap year), Choitro 30.
  const MONTHS = ['বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন', 'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'];
  const day0 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
  const startY = day0 >= new Date(day0.getFullYear(), 3, 14) ? day0.getFullYear() : day0.getFullYear() - 1;
  let n = Math.round((day0 - new Date(startY, 3, 14)) / 86400000);
  const ly = startY + 1, leap = (ly % 4 === 0 && ly % 100 !== 0) || ly % 400 === 0;
  const len = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, leap ? 30 : 29, 30];
  let mi = 0; while (n >= len[mi]) { n -= len[mi]; mi++; }
  return `${bn(n + 1)} ${MONTHS[mi]} ${bn(startY - 593)} বঙ্গাব্দ`;
}
// ponytail: Umm al-Qura arithmetic. Bangladesh follows its own moon-sighting committee and is often a day behind; labelled as approximate in the UI.
function hijriDate(dt = new Date()) {
  try { return new Intl.DateTimeFormat('bn-BD-u-ca-islamic-umalqura', { day: 'numeric', month: 'long', year: 'numeric' }).format(dt).replace(/যুগ|AH/g, '').trim() + ' হিজরি'; }
  catch (e) { return ''; }
}
const enDate = (dt = new Date()) => new Intl.DateTimeFormat('bn-BD', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(dt);

window.addEventListener('DOMContentLoaded', () => { icons(); initDropdowns(); });
