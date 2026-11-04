// Easy Deen prototype — shared behaviour. Plain JS, no build step.
const BN = '০১২৩৪৫৬৭৮৯';
const bn = (v) => String(v).replace(/\d/g, (d) => BN[d]);

window.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  initDropdowns();
  initTheme();
});

// Dropdowns: chevron rotates via aria-expanded (see styles.css).
function initDropdowns(root = document) {
  root.querySelectorAll('.dd').forEach((dd) => {
    if (dd.dataset.ready) return; dd.dataset.ready = '1';
    const btn = dd.querySelector(':scope > button');
    const list = dd.querySelector('ul');
    const close = () => { btn.setAttribute('aria-expanded', 'false'); list.hidden = true; };
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.dd > button[aria-expanded="true"]').forEach((b) => b !== btn && b.click());
      btn.setAttribute('aria-expanded', String(!open));
      list.hidden = open;
    });
    list.addEventListener('click', (e) => {
      const opt = e.target.closest('button'); if (!opt || opt.disabled) return;
      list.querySelectorAll('button').forEach((o) => o.removeAttribute('aria-current'));
      opt.setAttribute('aria-current', 'true');
      const label = btn.querySelector('.dd-label');
      if (label) label.textContent = opt.dataset.label || opt.textContent.trim();
      close();
      dd.dispatchEvent(new CustomEvent('pick', { detail: opt.dataset.value }));
    });
    document.addEventListener('click', close);
    dd.addEventListener('keydown', (e) => { if (e.key === 'Escape') { close(); btn.focus(); } });
  });
}

// Light / dark toggle. Remembered per browser only.
function initTheme() {
  try { const s = localStorage.getItem('ed-theme'); if (s) document.documentElement.dataset.theme = s; } catch (e) {}
  document.querySelectorAll('[data-theme-toggle]').forEach((t) => t.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme === 'dark' ||
      (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('ed-theme', document.documentElement.dataset.theme); } catch (e) {}
  }));
}

/* ---------- Prayer times, calculated on the device ----------
   Standard astronomical method (same formulas as PrayTimes.org / Adhan):
   Karachi angles Fajr 18°, Isha 18°; Hanafi Asr (shadow factor 2).
   ponytail: no ihtiyat minutes added; real app must match Islamic Foundation timetables. */
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
const NAMES = { fajr: 'ফজর', dhuhr: 'যোহর', asr: 'আসর', maghrib: 'মাগরিব', isha: 'ইশা' };
const ORDER = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
const fmt = (min) => { min = ((min % 1440) + 1440) % 1440; let h = Math.floor(min / 60), m = min % 60; const am = h < 12; h = h % 12 || 12; return bn(`${h}:${String(m).padStart(2, '0')}`); };
const nowMin = () => { const d = new Date(); return d.getHours() * 60 + d.getMinutes() + d.getSeconds() / 60; };

function dayState(t) {
  const n = nowMin();
  let nextKey = ORDER.find((k) => t[k] > n);
  const tomorrow = !nextKey;
  if (tomorrow) nextKey = 'fajr';
  const target = tomorrow ? t.fajr + 1440 : t[nextKey];
  const curIdx = tomorrow ? 4 : ORDER.indexOf(nextKey) - 1;          // -1 = before Fajr
  let sky = 'night';
  if (n >= t.fajr && n < t.sunrise + 20) sky = 'dawn';
  else if (n >= t.sunrise + 20 && n < t.asr) sky = 'day';
  else if (n >= t.asr && n < t.maghrib - 5) sky = 'golden';
  else if (n >= t.maghrib - 5 && n < t.isha + 10) sky = 'dusk';
  return { nextKey, target, tomorrow, curIdx, sky, left: target - n };
}

/* ---------- Dates ---------- */
function bnDate(dt = new Date()) {
  // Revised Bangla calendar (Bangladesh, 2019): year starts 14 April; Boishakh–Ashwin 31 days,
  // Kartik–Magh 30, Falgun 29 (30 in a Gregorian leap year), Choitro 30.
  const MONTHS = ['বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন', 'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'];
  const day0 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
  let startY = day0 >= new Date(day0.getFullYear(), 3, 14) ? day0.getFullYear() : day0.getFullYear() - 1;
  const start = new Date(startY, 3, 14);
  let n = Math.round((day0 - start) / 86400000);
  const leap = ((startY + 1) % 4 === 0 && (startY + 1) % 100 !== 0) || (startY + 1) % 400 === 0;
  const len = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, leap ? 30 : 29, 30];
  let mi = 0; while (n >= len[mi]) { n -= len[mi]; mi++; }
  return `${bn(n + 1)} ${MONTHS[mi]} ${bn(startY - 593)} বঙ্গাব্দ`;
}
function hijriDate(dt = new Date()) {
  try { return new Intl.DateTimeFormat('bn-BD-u-ca-islamic-umalqura', { day: 'numeric', month: 'long', year: 'numeric' }).format(dt).replace(/যুগ|AH/g, '').trim() + ' হিজরি'; }
  catch (e) { return ''; }
}
function enDate(dt = new Date()) {
  return new Intl.DateTimeFormat('bn-BD', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(dt);
}

/* ---------- Simulated audio: highlights each Arabic word in turn ---------- */
let playing = null;
function playBlock(block, onDone) {
  stopAudio();
  const words = [...block.querySelectorAll('.ar .w')];
  let i = 0;
  const tick = () => {
    words.forEach((w) => w.classList.remove('on'));
    if (i >= words.length) { playing = null; onDone && onDone(); return; }
    words[i++].classList.add('on');
    playing = setTimeout(tick, 650);
  };
  tick();
}
function stopAudio() { if (playing) clearTimeout(playing); playing = null; document.querySelectorAll('.ar .w.on').forEach((w) => w.classList.remove('on')); }
function wrapWords(root = document) {
  root.querySelectorAll('.tb .ar').forEach((ar) => {
    if (ar.dataset.wrapped) return;
    ar.innerHTML = ar.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(' ');
    ar.dataset.wrapped = '1';
  });
}
