// Quran reader: surah index, ayah list with word-by-word, translation choice, recitation with
// word highlighting, bookmarks, copy with reference, tafsir side sheet, saved view, resume position.

const S = {
  chs: [], c: 0, verses: [], loadId: 0, bism: null,
  tr: store.get('tr', 161), taf: store.get('taf', 165),
  showTr: store.get('showTr', true), wbw: store.get('wbw', false), arSize: store.get('arSize', 2.1),
  bm: store.get('bm', []), playing: -1, repeat: false, lastWord: null,
};
const mobile = matchMedia('(max-width: 960px)');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const col = () => $('#col');
const keyOf = (c, v) => `${c}:${v}`;
const isSaved = (k) => S.bm.some((b) => b.k === k);

window.addEventListener('DOMContentLoaded', async () => {
  initSettings(); initIndexToggle(); initPlayer(); initPanel();
  col().addEventListener('click', onAyahAction);
  try {
    S.chs = await chapters();
  } catch (e) {
    return showState('সূরার তালিকা আনা যায়নি। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।', () => location.reload());
  }
  renderIndex();
  const q = new URLSearchParams(location.search).get('q');
  if (q) { $('#filter').value = q; filterIndex(q); if (mobile.matches) openIndex(true); }
  window.addEventListener('hashchange', route);
  route();
});

function route() {
  if (new URLSearchParams(location.search).get('view') === 'saved' && !location.hash) return renderSaved();
  const m = location.hash.match(/^#(\d{1,3})(?::(\d{1,3}))?$/);
  let c, v;
  if (m) { c = +m[1]; v = m[2] ? +m[2] : 0; }
  else { const last = store.get('last'); c = last ? last.c : 1; v = last ? last.v : 0; }
  if (c < 1 || c > 114) c = 1;
  openIndex(false);
  loadChapter(c, v);
}

/* ---------- Index ---------- */
function renderIndex() {
  const nav = $('#idxList'); nav.textContent = '';
  S.chs.forEach((s) => {
    const a = el('a'); a.href = `quran.html#${s.id}`; a.dataset.id = s.id;
    const name = el('span', 's-name', bnName(s.id));
    name.append(el('small', '', `${s.name_simple}, ${s.translated_name.name}`));
    const ar = el('span', 's-ar', s.name_arabic); ar.lang = 'ar';
    a.append(el('span', 's-no', bn(s.id)), name, ar);
    a.addEventListener('click', () => openIndex(false));
    nav.append(a);
  });
  nav.append(Object.assign(el('p', 'idx-empty', 'এই নামে কোনো সূরা পাওয়া যায়নি। বানান বদলে বা সূরার নম্বর দিয়ে খুঁজুন।'), { hidden: true }));
  $('#filter').addEventListener('input', (e) => filterIndex(e.target.value));
  $('#filter').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { const first = $$('#idxList a').find((a) => !a.hidden); if (first) { location.hash = '#' + first.dataset.id; } }
  });
}
function filterIndex(q) {
  const n = norm(q.trim()); let shown = 0;
  $$('#idxList a').forEach((a) => {
    const s = S.chs[a.dataset.id - 1];
    const hay = [String(s.id), s.name_simple, s.name_complex, s.translated_name.name, s.name_arabic, ...BN_NAMES[s.id - 1]].map(norm);
    const ok = !n || (/^\d+$/.test(n) ? String(s.id) === n : hay.some((h) => h.includes(n)));
    a.hidden = !ok; if (ok) shown++;
  });
  $('#idxList .idx-empty').hidden = shown > 0;
}
function markIndex() {
  $$('#idxList a').forEach((a) => (+a.dataset.id === S.c ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
  const cur = $(`#idxList a[data-id="${S.c}"]`);
  if (cur && !mobile.matches) cur.scrollIntoView({ block: 'nearest' });
}

function initIndexToggle() {
  const btn = $('#idxBtn');
  btn.addEventListener('click', () => {
    if (mobile.matches) openIndex(!document.body.classList.contains('index-open'));
    else {
      const hide = !document.body.classList.contains('focus');
      document.body.classList.toggle('focus', hide);
      btn.setAttribute('aria-expanded', String(!hide));
      btn.setAttribute('aria-label', hide ? 'সূরার সূচি দেখান' : 'সূরার সূচি লুকান');
    }
  });
  $('#scrim').addEventListener('click', () => { openIndex(false); closePanel(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { openIndex(false); closePanel(); } });
  const sync = () => btn.setAttribute('aria-expanded', String(mobile.matches ? document.body.classList.contains('index-open') : !document.body.classList.contains('focus')));
  mobile.addEventListener('change', sync); sync();
}
function openIndex(open) {
  if (!mobile.matches) return;
  document.body.classList.toggle('index-open', open);
  $('#idxBtn').setAttribute('aria-expanded', String(open));
  $('#idxBtn').setAttribute('aria-label', open ? 'সূরার সূচি বন্ধ করুন' : 'সূরার সূচি খুলুন');
  if (open) setTimeout(() => $('#filter').focus(), 50);
}

/* ---------- Chapter ---------- */
function showState(msg, retry) {
  const c = col(); c.textContent = '';
  const p = el('div', 'state'); p.append(el('p', '', msg));
  if (retry) { const b = el('button', 'btn btn-quiet'); b.type = 'button'; b.innerHTML = '<i data-lucide="refresh-cw"></i>'; b.append('আবার চেষ্টা করুন'); b.addEventListener('click', retry); p.append(b); }
  c.append(p); icons();
}

const versesPath = (c, page) => `/verses/by_chapter/${c}?language=bn&words=true&word_fields=text_uthmani&translations=${S.tr}` +
  `&fields=text_uthmani&audio=${RECITER.id}&per_page=50&page=${page}`;

async function loadChapter(c, v, keepPlaying) {
  if (c === S.c && S.verses.length && !keepPlaying) { if (v) goToAyah(v); else window.scrollTo(0, 0); return; }
  const id = ++S.loadId;
  if (!keepPlaying) stopAudio();
  S.c = c; S.verses = [];
  const s = S.chs[c - 1];
  document.title = `সূরা ${bnName(c)} — কুরআন — Daily Islam`;
  const t = $('#rTitle'); t.textContent = '';
  const tar = el('span', 'ar', s.name_arabic); tar.lang = 'ar';
  t.append(tar, el('span', 'lat-name', `সূরা ${bnName(c)}`));
  markIndex();
  renderHead(s);
  try {
    if (s.bismillah_pre && !S.bism) S.bism = (await api('/verses/by_key/1:1?fields=text_uthmani')).verse.text_uthmani;
    const first = await api(versesPath(c, 1));
    if (id !== S.loadId) return;
    if (s.bismillah_pre) { const b = el('p', 'ar bismillah', S.bism); b.lang = 'ar'; b.setAttribute('aria-label', 'বিসমিল্লাহ'); col().append(b); }
    const ol = el('ol', 'ayahs'); ol.id = 'ayahs'; col().append(ol);
    addVerses(first.verses);
    const pages = first.pagination.total_pages;
    if (pages > 1) {
      const rest = await Promise.all(Array.from({ length: pages - 1 }, (_, i) => api(versesPath(c, i + 2))));
      if (id !== S.loadId) return;
      rest.forEach((r) => addVerses(r.verses));
    }
    renderPager(c);
    icons(); watchPosition();
    if (v) goToAyah(v, true); else if (!keepPlaying) window.scrollTo(0, 0);
  } catch (e) {
    if (id === S.loadId) showState('সূরাটি আনা যায়নি। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।', () => { S.c = 0; loadChapter(c, v); });
  }
}

function renderHead(s) {
  const c = col(); c.textContent = '';
  const h = el('header', 's-head');
  const ar = el('p', 'ar', s.name_arabic); ar.lang = 'ar'; ar.setAttribute('aria-hidden', 'true');
  const h1 = el('h1', '', `সূরা ${bnName(s.id)}`); h1.append(el('small', 'lat', s.name_complex));
  const meta = el('p', 's-meta');
  meta.append(el('span', '', `অর্থ: ${s.translated_name.name}`), el('span', '', placeBn(s.revelation_place)), el('span', '', `${bn(s.verses_count)} আয়াত`), el('span', '', `সূরা নম্বর ${bn(s.id)}`));
  const play = el('button', 'btn btn-solid'); play.type = 'button'; play.innerHTML = '<i data-lucide="play"></i>'; play.append('পুরো সূরা শুনুন');
  play.addEventListener('click', () => playIndex(0));
  const src = el('p', 's-source', `আরবি: উসমানি লিপি। অনুবাদ: ${trOf(S.tr).name} (${trOf(S.tr).by})। তিলাওয়াত: ${RECITER.name}। উৎস: Quran.com`);
  h.append(ar, h1, meta, play, src);
  c.append(h); c.classList.toggle('wbw', S.wbw); icons();
}

function addVerses(list) {
  const ol = $('#ayahs');
  list.forEach((verse) => {
    const i = S.verses.push(verse) - 1;
    ol.append(renderAyah(verse, i));
  });
}

function renderAyah(verse, i) {
  const k = verse.verse_key, v = verse.verse_number;
  const li = el('li', 'ayah'); li.id = `a${S.c}-${v}`; li.dataset.i = i;
  const tools = el('div', 'a-tools');
  tools.append(el('span', 'a-key', `${bn(S.c)}:${bn(v)}`));
  const mk = (act, icon, label, pressed) => {
    const b = el('button', 'icon-btn'); b.type = 'button'; b.dataset.act = act; b.setAttribute('aria-label', label);
    if (pressed != null) b.setAttribute('aria-pressed', String(pressed));
    b.innerHTML = `<i data-lucide="${icon}"></i>`; return b;
  };
  tools.append(
    mk('play', 'play', `আয়াত ${bn(v)} শুনুন`),
    mk('save', 'bookmark', `আয়াত ${bn(v)} সংরক্ষণ করুন`, isSaved(k)),
    mk('copy', 'copy', `আয়াত ${bn(v)} সূত্রসহ কপি করুন`),
    mk('tafsir', 'book-text', `আয়াত ${bn(v)}-এর তাফসির`),
  );
  const ar = el('p', 'ar'); ar.lang = 'ar';
  verse.words.forEach((w) => {
    if (w.char_type_name === 'end') { ar.append(el('span', 'end', `﴿${arNum(v)}﴾`)); return; }
    const s = el('span', 'w', w.text_uthmani); s.dataset.p = w.position;
    if (w.translation?.text) { const g = el('small', 'g', w.translation.text); g.lang = 'bn'; s.append(g); }
    ar.append(s, ' ');
  });
  const tr = el('p', 'tr', plainText(verse.translations?.[0]?.text));
  li.append(tools, ar, tr);
  return li;
}

function renderPager(c) {
  const p = el('nav', 'pager'); p.setAttribute('aria-label', 'অন্য সূরা');
  if (c > 1) { const a = el('a', 'prev'); a.href = `#${c - 1}`; const sm = el('small'); sm.innerHTML = '<i data-lucide="chevron-left"></i>'; sm.append('আগের সূরা'); a.append(sm, `সূরা ${bnName(c - 1)}`); p.append(a); }
  if (c < 114) { const a = el('a', 'next'); a.href = `#${c + 1}`; const sm = el('small', '', 'পরের সূরা'); sm.insertAdjacentHTML('beforeend', '<i data-lucide="chevron-right"></i>'); a.append(sm, `সূরা ${bnName(c + 1)}`); p.append(a); }
  col().append(p);
}

function goToAyah(v, flash) {
  const li = $(`#a${S.c}-${v}`); if (!li) return;
  li.scrollIntoView({ block: 'start', behavior: reduced.matches || flash ? 'auto' : 'smooth' });
}

// Resume position: the ayah crossing the upper part of the screen is "where you are".
let posObs;
function watchPosition() {
  posObs?.disconnect();
  posObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const v = S.verses[+e.target.dataset.i]?.verse_number;
      if (v) store.set('last', { c: S.c, v });
    });
  }, { rootMargin: '-15% 0px -75% 0px' });
  $$('.ayah').forEach((li) => posObs.observe(li));
}

/* ---------- Ayah actions ---------- */
function onAyahAction(e) {
  const b = e.target.closest('button[data-act]'); if (!b) return;
  const i = +b.closest('.ayah').dataset.i, verse = S.verses[i], k = verse.verse_key;
  const act = b.dataset.act;
  if (act === 'play') { if (S.playing === i && !$('#audio').paused) $('#audio').pause(); else playIndex(i); }
  if (act === 'save') {
    if (isSaved(k)) { S.bm = S.bm.filter((x) => x.k !== k); toast('সংরক্ষণ থেকে সরানো হয়েছে', 'bookmark-minus'); }
    else { S.bm.unshift({ k, s: plainText(verse.translations?.[0]?.text).slice(0, 110) }); toast('আয়াতটি সংরক্ষিত হয়েছে', 'bookmark-check'); }
    store.set('bm', S.bm); b.setAttribute('aria-pressed', String(isSaved(k)));
  }
  if (act === 'copy') copyAyah(verse);
  if (act === 'tafsir') openPanel(k);
}

async function copyAyah(verse) {
  const [c, v] = verse.verse_key.split(':');
  const text = `${verse.text_uthmani}\n\n${plainText(verse.translations?.[0]?.text)}\n\nসূরা ${bnName(+c)} ${bn(c)}:${bn(v)}। অনুবাদ: ${trOf(S.tr).name}।`;
  try { await navigator.clipboard.writeText(text); toast('সূত্রসহ কপি হয়েছে', 'clipboard-check'); }
  catch (e) { toast('কপি করা যায়নি। ব্রাউজার অনুমতি দেয়নি।', 'circle-alert'); }
}

/* ---------- Saved view ---------- */
async function renderSaved() {
  stopAudio(); S.c = 0; S.verses = []; markIndex();
  document.title = 'সংরক্ষিত আয়াত — Daily Islam';
  $('#rTitle').textContent = '';
  const c = col(); c.textContent = '';
  const w = el('div', 'saved-wrap');
  w.append(el('h1', '', 'সংরক্ষিত আয়াত'), el('p', '', 'শুধু এই ব্রাউজারে রাখা। অন্য কেউ দেখতে পায় না।'));
  if (!S.bm.length) {
    const st = el('div', 'state');
    st.append(el('p', '', 'এখনো কোনো আয়াত সংরক্ষণ করেননি। পড়ার সময় আয়াতের ওপরের বুকমার্ক চিহ্নে চাপুন।'));
    const a = el('a', 'btn btn-solid'); const last = store.get('last'); a.href = last ? `#${last.c}:${last.v}` : '#1';
    a.innerHTML = '<i data-lucide="book-open"></i>'; a.append(last ? 'যেখানে থেমেছিলেন সেখান থেকে পড়ুন' : 'সূরা ফাতিহা দিয়ে শুরু করুন');
    st.append(a); w.append(st);
  } else {
    const ul = el('ul', 'saved-list');
    S.bm.forEach(({ k, s }) => {
      const [cc, v] = k.split(':').map(Number);
      const li = el('li'), a = el('a'); a.href = `#${cc}:${v}`;
      const mid = el('span', 's-name', `সূরা ${bnName(cc)}, আয়াত ${bn(v)}`); mid.append(el('small', 'snip', s));
      a.append(el('span', 's-no', `${bn(cc)}:${bn(v)}`), mid);
      a.insertAdjacentHTML('beforeend', '<i data-lucide="bookmark"></i>');
      li.append(a); ul.append(li);
    });
    w.append(ul);
  }
  c.append(w); icons();
}

/* ---------- Settings ---------- */
function initSettings() {
  const apply = () => {
    document.documentElement.style.setProperty('--ar-size', S.arSize + 'rem');
    document.body.classList.toggle('no-tr', !S.showTr);
    col().classList.toggle('wbw', S.wbw);
  };
  const r = $('#arSize'); r.value = S.arSize;
  r.addEventListener('input', () => { S.arSize = +r.value; store.set('arSize', S.arSize); apply(); });
  const showTr = $('#showTr'); showTr.checked = S.showTr;
  showTr.addEventListener('change', () => { S.showTr = showTr.checked; store.set('showTr', S.showTr); apply(); });
  const wbw = $('#wbw'); wbw.checked = S.wbw;
  wbw.addEventListener('change', () => { S.wbw = wbw.checked; store.set('wbw', S.wbw); apply(); });
  const g = $('#trGroup');
  TRANSLATIONS.forEach((t) => {
    const lab = el('label', 'radio'); const inp = document.createElement('input');
    inp.type = 'radio'; inp.name = 'tr'; inp.value = t.id; inp.checked = t.id === S.tr;
    const txt = el('span', '', t.name); txt.append(el('small', '', t.by));
    lab.append(inp, txt); g.append(lab);
    inp.addEventListener('change', () => {
      S.tr = t.id; store.set('tr', S.tr);
      if (!S.c) return;
      const cur = store.get('last'); const v = cur && cur.c === S.c ? cur.v : 0;
      const c = S.c; S.c = 0; loadChapter(c, v);
    });
  });
  apply();
}

/* ---------- Recitation ---------- */
function initPlayer() {
  const a = $('#audio');
  a.addEventListener('timeupdate', onTime);
  a.addEventListener('ended', () => {
    if (S.repeat) { a.currentTime = 0; a.play(); return; }
    if (S.playing + 1 < S.verses.length) playIndex(S.playing + 1); else { setPlayBtn(false); clearWord(); }
  });
  a.addEventListener('play', () => setPlayBtn(true));
  a.addEventListener('pause', () => setPlayBtn(false));
  a.addEventListener('error', () => { if (a.src) toast('তিলাওয়াত চালু করা যায়নি। ইন্টারনেট সংযোগ দেখুন।', 'wifi-off'); });
  $('#pPlay').addEventListener('click', () => (a.paused ? a.play() : a.pause()));
  $('#pPrev').addEventListener('click', () => S.playing > 0 && playIndex(S.playing - 1));
  $('#pNext').addEventListener('click', () => S.playing + 1 < S.verses.length && playIndex(S.playing + 1));
  $('#pRepeat').addEventListener('click', (e) => { S.repeat = !S.repeat; e.currentTarget.setAttribute('aria-pressed', String(S.repeat)); });
  $('#pClose').addEventListener('click', stopAudio);
}

function playIndex(i) {
  const verse = S.verses[i]; if (!verse?.audio?.url) return;
  const a = $('#audio');
  $$('.ayah.playing').forEach((x) => x.classList.remove('playing'));
  clearWord();
  S.playing = i;
  const li = $(`.ayah[data-i="${i}"]`); li?.classList.add('playing');
  a.src = AUDIO_BASE + verse.audio.url;
  a.play().catch(() => toast('তিলাওয়াত চালু করা যায়নি। ইন্টারনেট সংযোগ দেখুন।', 'wifi-off'));
  $('#player').hidden = false;
  $('#pNow').textContent = `সূরা ${bnName(S.c)}, আয়াত ${bn(verse.verse_number)}`;
  $('#pWho').textContent = RECITER.name;
  store.set('last', { c: S.c, v: verse.verse_number });
  if (li) {
    const r = li.getBoundingClientRect();
    if (r.top < 70 || r.bottom > innerHeight - 90) li.scrollIntoView({ block: 'center', behavior: reduced.matches ? 'auto' : 'smooth' });
  }
}

// Quran.com segments: [wordIndex, wordPosition, startMs, endMs] (older data: [position, start, end]).
function onTime() {
  const a = $('#audio'), verse = S.verses[S.playing]; if (!verse) return;
  if (a.duration) $('#pBar').style.width = (a.currentTime / a.duration) * 100 + '%';
  const ms = a.currentTime * 1000;
  const seg = (verse.audio.segments || []).find((s) => { const [st, en] = s.length >= 4 ? [s[2], s[3]] : [s[1], s[2]]; return ms >= st && ms < en; });
  const pos = seg ? (seg.length >= 4 ? seg[1] : seg[0]) : null;
  const w = pos != null ? $(`.ayah[data-i="${S.playing}"] .w[data-p="${pos}"]`) : null;
  if (w === S.lastWord) return;
  clearWord(); if (w) { w.classList.add('on'); S.lastWord = w; }
}
function clearWord() { S.lastWord?.classList.remove('on'); S.lastWord = null; }
function setPlayBtn(on) {
  const b = $('#pPlay'); b.setAttribute('aria-label', on ? 'থামান' : 'চালু করুন');
  b.innerHTML = `<i data-lucide="${on ? 'pause' : 'play'}"></i>`;
  $$('.ayah [data-act="play"]').forEach((x) => { x.innerHTML = '<i data-lucide="play"></i>'; });
  const cur = $(`.ayah[data-i="${S.playing}"] [data-act="play"]`);
  if (cur && on) cur.innerHTML = '<i data-lucide="pause"></i>';
  icons();
}
function stopAudio() {
  const a = $('#audio'); a.pause(); a.removeAttribute('src'); a.load();
  S.playing = -1; clearWord();
  $$('.ayah.playing').forEach((x) => x.classList.remove('playing'));
  $('#player').hidden = true;
}

/* ---------- Tafsir ---------- */
let panelKey = null;
function initPanel() {
  const list = $('#tafList');
  TAFSIRS.forEach((t) => {
    const li = el('li'), b = el('button'); b.type = 'button'; b.dataset.value = t.id; b.dataset.label = t.name; b.setAttribute('role', 'option');
    b.append(el('span', '', t.name), el('small', '', t.by));
    if (t.id === S.taf) b.setAttribute('aria-current', 'true');
    li.append(b); list.append(li);
  });
  $('#tafDd .dd-label').textContent = TAFSIRS.find((t) => t.id === S.taf)?.name || TAFSIRS[0].name;
  $('#tafDd').addEventListener('pick', (e) => { S.taf = +e.detail; store.set('taf', S.taf); if (panelKey) loadTafsir(panelKey); });
  $('#panelClose').addEventListener('click', closePanel);
}
function openPanel(k) {
  panelKey = k; $('#panel').hidden = false; document.body.classList.add('panel-open');
  loadTafsir(k); $('#panelClose').focus();
}
function closePanel() {
  if ($('#panel').hidden) return;
  $('#panel').hidden = true; document.body.classList.remove('panel-open');
  const [c, v] = (panelKey || '').split(':'); panelKey = null;
  $(`#a${c}-${v} [data-act="tafsir"]`)?.focus();
}
async function loadTafsir(k) {
  const [c, v] = k.split(':').map(Number);
  $('#panelKey').textContent = `সূরা ${bnName(c)}, আয়াত ${bn(v)}`;
  const body = $('#panelBody'); body.textContent = ''; body.append(el('p', 'loading', 'তাফসির আনা হচ্ছে…'));
  try {
    const { tafsir } = await api(`/tafsirs/${S.taf}/by_ayah/${k}`);
    if (panelKey !== k) return;
    body.textContent = '';
    const keys = Object.keys(tafsir.verses || {});
    if (keys.length > 1) body.append(el('p', 'tag', `এই ব্যাখ্যাটি আয়াত ${bn(keys[0].split(':')[1])} থেকে ${bn(keys[keys.length - 1].split(':')[1])} একসাথে`));
    const ps = paragraphs(tafsir.text).filter(Boolean);
    if (!ps.length || !ps[0]) body.append(el('p', '', 'এই আয়াতের জন্য এই গ্রন্থে আলাদা ব্যাখ্যা নেই। অন্য তাফসির বেছে দেখুন।'));
    ps.forEach((t) => body.append(el('p', '', t)));
  } catch (e) {
    body.textContent = ''; body.append(el('p', 'err', 'তাফসির আনা যায়নি। ইন্টারনেট সংযোগ দেখে আবার খুলুন।'));
  }
}
