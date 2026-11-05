// Daily Islam home v2 (identity "A · সবুজ"). Helpers come from app.js.
// Religious text is never typed here: ayah, dua, translation, surah names and audio come from Quran.com at runtime.

const AYAH_OF_DAY = ['2:152', '2:186', '13:28', '39:53', '94:6', '3:139', '2:286', '65:3', '29:69', '3:173', '17:82', '20:25'];
const DUAS = ['2:201', '3:8', '14:40', '14:41'];
const POPULAR = [36, 67, 18, 55, 56, 112];
const dayNo = Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 864e5);
const TR = { id: 161, name: 'তাইসিরুল কুরআন' };
let city = store.get('city', 'dhaka');
if (!CITIES[city]) city = 'dhaka';

/* ---------- the hero photograph ----------
   Periods follow today's computed times: fajr (dawn), sunrise (morning), dhuhr (noon), asr (afternoon),
   maghrib (dusk), isha (night). Each period shows its own photograph. */
const WAQT = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];
const NOW_TEXT = { fajr: 'এখন ফজরের ওয়াক্ত', sunrise: 'এখন সকাল', dhuhr: 'এখন যোহরের ওয়াক্ত', asr: 'এখন আসরের ওয়াক্ত', maghrib: 'এখন মাগরিবের ওয়াক্ত', isha: 'এখন ইশার ওয়াক্ত' };
const SKY_NAME = { fajr: 'ভোরের', sunrise: 'সকালের', dhuhr: 'দুপুরের', asr: 'বিকেলের', maghrib: 'সন্ধ্যার', isha: 'রাতের' };
const periodAt = (t, T) => (t < T.fajr ? 'isha' : [...WAQT].reverse().find((k) => t >= T[k]));
// start and end (minutes from today's midnight) of the period that holds t
function windowOf(t, T) {
  const p = periodAt(t, T), i = WAQT.indexOf(p);
  if (p === 'isha') return t < T.fajr ? [T.isha - 1440, T.fajr] : [T.isha, T.fajr + 1440];
  return [T[p], T[WAQT[i + 1]]];
}
// one photograph per period; framing keeps the subject clear of the copy on the left
const PHOTO_POS = { fajr: '70% 60%', sunrise: '50% 60%', dhuhr: '50% 55%', asr: '50% 45%', maghrib: '50% 35%', isha: '50% 40%' };
function setPhoto(p) {
  const stage = $('#photos');
  if (stage.dataset.p === p) return;
  stage.dataset.p = p;
  const img = new Image();
  img.alt = '';
  img.style.setProperty('--pos', PHOTO_POS[p]);
  img.src = `photos/${p}.webp?v=2`;
  // fade in only a fully decoded photograph, so a large file never shows half-drawn
  img.decode().catch(() => {}).then(() => {
    if (stage.dataset.p !== p) return; // a newer pick already took over
    stage.append(img);
    requestAnimationFrame(() => requestAnimationFrame(() => img.classList.add('is-in')));
    // drop the older photographs once the new one has faded in
    setTimeout(() => [...stage.children].slice(0, -1).forEach((n) => n.remove()), 1500);
  });
}

let nextAt = null, livePeriod = null, preview =new URLSearchParams(location.search).get('period');
if (!WAQT.includes(preview)) preview = null;
const pad = (n) => bn(String(n).padStart(2, '0'));
function tick() {
  if (!nextAt) return;
  const s = Math.max(0, Math.round((nextAt - Date.now()) / 1000));
  $('#countdown').textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
  if (s === 0) drawNow();
}

function drawNow() {
  const [cityBn, lat, lng] = CITIES[city];
  const d = new Date(), now = d.getHours() * 60 + d.getMinutes() + d.getSeconds() / 60;
  const T = prayerTimes(d, lat, lng);
  let next = ORDER.find((k) => T[k] > now);
  const at = next ? T[next] : T.fajr + 1440;
  next ||= 'fajr';
  nextAt = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() + at * 60000;
  const live = (livePeriod = periodAt(now, T));
  if (preview === live) preview = null; // the live sky is not a preview (also ends one once its waqt arrives)
  const shown = preview || live;
  const [w0, w1] = windowOf(now, T);

  // the sky: live, or a preview of another period at that period's middle
  $('#now').dataset.period = shown;
  setPhoto(shown);
  $('#nowIc').src = `icons/${live}.png`;
  $('#nowLine').textContent = `${cityBn}, ${NOW_TEXT[live]}`;
  $('#previewNote').hidden = !preview;
  if (preview) {
    $('#previewIc').src = `icons/${preview}.png`;
    $('#previewText').textContent = `আপনি ${SKY_NAME[preview]} ছবি দেখছেন`;
    $('#previewLive').textContent = `আসল সময়: ${cityBn}, ${NOW_TEXT[live]}`;
  }

  // next prayer card
  $('#nextIc').src = `icons/${next}.png`;
  $('#nextName').textContent = NAMES[next];
  $('#nextAt').textContent = `${partOfDay(at)} ${fmt(at)}-এ`;
  $('#waqtBar').style.setProperty('--p', Math.min(1, Math.max(0, (now - w0) / (w1 - w0))).toFixed(3));
  $('#waqtLine').textContent = `${NOW_TEXT[live].replace('এখন ', '')}: ${bn(Math.round(((now - w0) / (w1 - w0)) * 100))}% পেরিয়েছে`;
  $('#dHijri').textContent = hijriDate(d);
  $('#dBangla').textContent = `${new Intl.DateTimeFormat('bn-BD', { weekday: 'long' }).format(d)}, ${bnDate(d)}`;
  $('#todayDate').textContent = $('#dBangla').textContent;
  $('#topNextName').textContent = NAMES[next];
  $('#topNextAt').textContent = fmt(at);
  $('#liveNext span').textContent = `পরের নামাজ ${NAMES[next]}, ${fmt(at)}`;
  $('.dd-label', $('#cityDd')).textContent = cityBn;
  $$('#cityList button').forEach((b) => (b.dataset.value === city ? b.setAttribute('aria-current', 'true') : b.removeAttribute('aria-current')));
  tick();

  // the rail: each period with its icon; a tap previews that sky
  $('#rail').innerHTML = WAQT.map((k) =>
    `<li><button type="button" data-period="${k}" class="${k === next ? 'is-next' : k !== live && T[k] <= now ? 'is-past' : ''}" aria-pressed="${k === shown}">` +
    `${k === live ? '<em>এখন</em>' : ''}<img src="icons/${k}.png" alt="" width="52" height="52"><b>${NAMES[k]}</b>` +
    `<span><span class="sr">${partOfDay(T[k])} </span>${fmt(T[k])}</span>` +
    `<i>${k === preview ? 'ছবি দেখছেন' : k === next ? 'পরের নামাজ' : k === live ? 'চলছে' : T[k] <= now ? 'শেষ হয়েছে' : partOfDay(T[k])}</i></button></li>`).join('');
}

$('#rail').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-period]');
  if (!b) return;
  preview = b.dataset.period === livePeriod ? null : b.dataset.period; // tapping the live period returns to live
  drawNow();
  $(`#rail button[data-period="${b.dataset.period}"]`).focus();
});
$('#liveBtn').addEventListener('click', () => { preview = null; drawNow(); });

$('#cityList').innerHTML = Object.entries(CITIES).map(([k, [n]]) => `<li><button type="button" data-value="${k}">${n}</button></li>`).join('');
$('#cityDd').addEventListener('pick', (e) => { city = e.detail; store.set('city', city); drawNow(); });
drawNow();
setInterval(tick, 1000);
setInterval(drawNow, 60000);

/* ---------- continue reading (only with real state) ---------- */
const last = store.get('last');
if (last && last.c) {
  const c = $('#continue');
  c.href = `quran.html#${last.c}:${last.v || 1}`;
  c.innerHTML = `<i data-lucide="bookmark"></i>সূরা ${bnName(last.c)}, আয়াত ${bn(last.v || 1)} থেকে`;
}

/* ---------- live facts on the feature cards ---------- */
if (last && last.c) {
  $('#featQuran').href = `quran.html#${last.c}:${last.v || 1}`;
  $('#liveQuran span').textContent = `সূরা ${bnName(last.c)}, আয়াত ${bn(last.v || 1)} থেকে`;
}
{
  const [c, v] = DUAS[dayNo % DUAS.length].split(':');
  $('#liveDua span').textContent = `আজ: সূরা ${bnName(+c)}, আয়াত ${bn(v)}`;
}

/* ---------- today's ayah (also shown on the hero phone) and dua ---------- */
let ayah = null, audio = null;
const setMarked = (node, text, v) => { node.textContent = text + ' '; node.append(el('span', 'marker', `﴿${arNum(v)}﴾`)); };

async function loadAyah() {
  const key = AYAH_OF_DAY[dayNo % AYAH_OF_DAY.length], [c, v] = key.split(':').map(Number);
  try {
    const { verse } = await api(`/verses/by_key/${key}?language=bn&translations=${TR.id}&fields=text_uthmani&audio=${RECITER.id}`);
    ayah = { key, c, v, tr: plainText(verse.translations[0].text), ar: verse.text_uthmani, audio: verse.audio?.url };
    const ref = `সূরা ${bnName(c)}, আয়াত ${bn(v)}।`;
    setMarked($('#ayahAr'), ayah.ar, v);
    $('#ayahTr').textContent = ayah.tr;
    $('#ayahRef').textContent = ref;
    $('#ayahOpen').href = `quran.html#${c}:${v}`;
    $('#readerTitle').textContent = `আজকের আয়াত: সূরা ${bnName(c)}`;
    $$('#ayahSave, #ayahShare').forEach((b) => { b.disabled = false; });
    $('#ayahPlay').disabled = !ayah.audio;
    syncSaved();
  } catch (e) {
    $('#ayahTr').textContent = 'আজকের আয়াত আনা যায়নি। ইন্টারনেট সংযোগ দেখে পাতাটি আবার খুলুন।';
  }
}
async function loadDua() {
  const key = DUAS[dayNo % DUAS.length], [c, v] = key.split(':');
  try {
    const { verse } = await api(`/verses/by_key/${key}?language=bn&translations=${TR.id}&fields=text_uthmani`);
    setMarked($('#duaAr'), verse.text_uthmani, v);
    $('#duaTr').textContent = plainText(verse.translations[0].text);
    $('#duaRef').textContent = `সূরা ${bnName(+c)}, আয়াত ${bn(v)}।`;
  } catch (e) {
    $('#duaTr').textContent = 'দোয়াটি আনা যায়নি। ইন্টারনেট সংযোগ দেখে পাতাটি আবার খুলুন।';
  }
}
async function loadSurahs() {
  try {
    const list = await chapters();
    $('#surahs').innerHTML = POPULAR.map((id) => {
      const ch = list.find((x) => x.id === id);
      return `<li><a href="quran.html#${id}:1"><span class="surahs__n">${bn(id)}</span>` +
        `<span><b>${bnName(id)}</b><small>${placeBn(ch.revelation_place)}, ${bn(ch.verses_count)} আয়াত</small></span>` +
        `<span class="surahs__ar" lang="ar" dir="rtl">${ch.name_arabic}</span></a></li>`;
    }).join('');
  } catch (e) {
    $('#surahs').innerHTML = '<li class="surahs__loading">তালিকা আনা যায়নি। পুরো সূচি থেকে সূরা বেছে নিন।</li>';
  }
}

function setPlay(on) {
  const b = $('#ayahPlay');
  b.setAttribute('aria-label', on ? 'তিলাওয়াত থামান' : 'তিলাওয়াত শুনুন');
  b.innerHTML = `<i data-lucide="${on ? 'pause' : 'play'}"></i>`;
  icons();
}
$('#ayahPlay').addEventListener('click', () => {
  if (!ayah?.audio) return;
  if (!audio) {
    audio = new Audio(AUDIO_BASE + ayah.audio);
    audio.addEventListener('play', () => setPlay(true));
    ['pause', 'ended'].forEach((ev) => audio.addEventListener(ev, () => setPlay(false)));
  }
  if (audio.paused) audio.play().catch(() => toast('তিলাওয়াত চালানো যায়নি', 'circle-alert'));
  else audio.pause();
});

// bookmarks share the reader's store ('bm': [{ k, s }]), so a saved ayah shows up in the Quran reader
const saved = () => store.get('bm', []).some((b) => b.k === ayah?.key);
function syncSaved() { $('#ayahSave').setAttribute('aria-pressed', String(saved())); }
$('#ayahSave').addEventListener('click', () => {
  if (!ayah) return;
  let bm = store.get('bm', []);
  if (saved()) { bm = bm.filter((b) => b.k !== ayah.key); toast('সংরক্ষণ থেকে সরানো হয়েছে', 'bookmark-minus'); }
  else { bm.unshift({ k: ayah.key, s: ayah.tr.slice(0, 110) }); toast('আয়াতটি সংরক্ষিত হয়েছে', 'bookmark-check'); }
  store.set('bm', bm);
  syncSaved();
});
$('#ayahShare').addEventListener('click', async () => {
  if (!ayah) return;
  const text = `${ayah.ar}\n\n${ayah.tr}\n\nসূরা ${bnName(ayah.c)} ${bn(ayah.c)}:${bn(ayah.v)}। অনুবাদ: ${TR.name}।`;
  try {
    if (navigator.share) await navigator.share({ text });
    else { await navigator.clipboard.writeText(text); toast('আয়াতটি সূত্রসহ কপি হয়েছে', 'copy-check'); }
  } catch (e) { /* the share sheet was closed */ }
});

/* ---------- tabs (click and arrow keys) ---------- */
const tabs = $$('[role="tab"]');
function selectTab(tab) {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    $('#' + t.getAttribute('aria-controls')).hidden = !on;
  });
  $('#readerTitle').textContent = tab.id === 'tab-ayah' && ayah ? `আজকের আয়াত: সূরা ${bnName(ayah.c)}` : { 'tab-ayah': 'আজকের আয়াত', 'tab-dua': 'আজকের দোয়া', 'tab-hadith': 'আজকের হাদিস' }[tab.id];
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => selectTab(t));
  t.addEventListener('keydown', (e) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    const n = tabs[(i + d + tabs.length) % tabs.length];
    selectTab(n); n.focus();
  });
});

loadAyah();
loadDua();
loadSurahs();

/* ---------- header menu, search dialog ---------- */
$('#menuBtn').addEventListener('click', () => {
  const open = $('#top').classList.toggle('is-open');
  $('#menuBtn').setAttribute('aria-expanded', String(open));
  $('#menuBtn').innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}"></i>`;
  icons();
});
$$('#topNav a').forEach((a) => a.addEventListener('click', () => { if ($('#top').classList.contains('is-open')) $('#menuBtn').click(); }));
const dlg = $('#searchDlg');
$$('[data-open-search]').forEach((b) => b.addEventListener('click', () => { dlg.showModal(); $('input', dlg).focus(); }));
$('[data-close]', dlg).addEventListener('click', () => dlg.close());
dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

/* ---------- tasbih: count by tap, a short buzz at every 33 (same store as before: 'tasbih') ---------- */
const TARGET = 33;
let { count, rounds } = store.get('tasbih', { count: 0, rounds: 0 });
const tDlg = $('#tasbihDlg');
function drawBead() {
  $('#liveTasbih span').textContent = count || rounds ? `${bn(count)} বার, ${bn(rounds)}টি চক্র` : 'ছুঁয়ে গুনুন';
  $('#count').textContent = bn(count);
  $('#rounds').textContent = rounds ? `${bn(rounds)}টি চক্র পূর্ণ` : '';
}
$('#bead').addEventListener('click', () => {
  count += 1;
  if (count >= TARGET) { count = 0; rounds += 1; if (navigator.vibrate) navigator.vibrate(80); }
  store.set('tasbih', { count, rounds });
  drawBead();
});
drawBead();
$('#beadReset').addEventListener('click', () => { count = 0; rounds = 0; store.set('tasbih', { count, rounds }); drawBead(); });
$$('[data-open-tasbih]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); drawBead(); tDlg.showModal(); $('#bead').focus(); }));
$('[data-close]', tDlg).addEventListener('click', () => tDlg.close());
tDlg.addEventListener('click', (e) => { if (e.target === tDlg) tDlg.close(); });
