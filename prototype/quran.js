// Quran reader: navigator (surah, ayah, para), surah and para index, word-by-word, three translations, two scripts,
// 12 recitations with word highlighting, speed, repeat and continuous play, 11 tafsirs in Bangla, English and Arabic,
// bookmarks, share, resume position, and a first-visit guide. All Quranic text comes from Quran.com at runtime.

const S = {
  chs: [], juzs: [], c: 0, verses: [], loadId: 0, bism: null, cur: 0,
  tr: store.get('tr', 161), taf: store.get('taf', 165), rec: store.get('rec', 7), script: store.get('script', 'uthmani'),
  showTr: store.get('showTr', true), wbw: store.get('wbw', false), arSize: store.get('arSize', 2.1), trSize: store.get('trSize', 1.15),
  speed: store.get('speed', 1), auto: store.get('autoNext', false),
  bm: store.get('bm', []), playing: -1, repeat: false, lastWord: null,
};
if (!TAFSIRS.some((t) => t.id === S.taf)) S.taf = 165;
const mobile = matchMedia('(max-width: 960px)');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const col = () => $('#col');
const isSaved = (k) => S.bm.some((b) => b.k === k);
const toLatin = (s) => String(s).replace(/[০-৯]/g, (d) => BN.indexOf(d));
const KEY_RE = /^\s*(\d{1,3})\s*[:.\-\s]\s*(\d{1,3})\s*$/;

window.addEventListener('DOMContentLoaded', async () => {
  initSettings(); initIndex(); initNavi(); initPlayer(); initPanel(); initGuide();
  col().addEventListener('click', onAyahAction);
  try {
    S.chs = await chapters();
  } catch (e) {
    return showState('সূরার তালিকা আনা যায়নি। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।', () => location.reload());
  }
  renderIndex();
  $('#selSurah').innerHTML = S.chs.map((s) => `<option value="${s.id}">${bn(s.id)}. ${bnName(s.id)}</option>`).join('');
  loadJuzs();
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
const go = (c, v) => { const h = v ? `#${c}:${v}` : `#${c}`; if (location.hash === h) route(); else location.hash = h; };

/* ---------- index: surahs and paras ---------- */
function renderIndex() {
  const nav = $('#idxList'); nav.textContent = '';
  S.chs.forEach((s) => {
    const a = el('a'); a.href = `#${s.id}`; a.dataset.id = s.id;
    const no = el('span', 's-no'); no.append(el('span', '', bn(s.id)));
    const name = el('span', 's-name', bnName(s.id));
    name.append(el('small', '', `${s.translated_name.name}, ${bn(s.verses_count)} আয়াত`));
    const ar = el('span', 's-ar', s.name_arabic); ar.lang = 'ar';
    a.append(no, name, ar);
    nav.append(a);
  });
  nav.append(Object.assign(el('p', 'idx-empty', 'এই নামে কোনো সূরা পাওয়া যায়নি। বানান বদলে বা সূরার নম্বর দিয়ে খুঁজুন।'), { hidden: true }));
  nav.addEventListener('click', (e) => e.target.closest('a') && openIndex(false));
  $('#filter').addEventListener('input', (e) => filterIndex(e.target.value));
  $('#filter').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const m = toLatin(e.target.value).match(KEY_RE);
    if (m && +m[1] >= 1 && +m[1] <= 114) return go(+m[1], Math.min(+m[2], S.chs[m[1] - 1].verses_count));
    const first = $$('#idxList a').find((a) => !a.hidden); if (first) go(+first.dataset.id);
  });
}
function filterIndex(q) {
  const key = toLatin(q).match(KEY_RE);
  const n = key ? key[1] : norm(q.trim()); let shown = 0;
  showTab('S');
  $$('#idxList a').forEach((a) => {
    const s = S.chs[a.dataset.id - 1];
    const hay = [String(s.id), s.name_simple, s.name_complex, s.translated_name.name, s.name_arabic, ...BN_NAMES[s.id - 1]].map(norm);
    const ok = !n || (/^\d+$/.test(n) ? String(s.id) === n : hay.some((h) => h.includes(n)));
    a.hidden = !ok; if (ok) shown++;
  });
  $('#idxList .idx-empty').hidden = shown > 0;
}
async function loadJuzs() {
  try {
    const { juzs } = await api('/juzs');
    const seen = new Set();
    S.juzs = juzs.filter((j) => !seen.has(j.juz_number) && seen.add(j.juz_number)).sort((a, b) => a.juz_number - b.juz_number)
      .map((j) => { const [c, r] = Object.entries(j.verse_mapping)[0]; return { n: j.juz_number, c: +c, v: +r.split('-')[0], map: j.verse_mapping }; });
  } catch (e) { return; }
  $('#selJuz').innerHTML = S.juzs.map((j) => `<option value="${j.n}">পারা ${bn(j.n)}</option>`).join('');
  const nav = $('#juzList');
  S.juzs.forEach((j) => {
    const a = el('a'); a.href = `#${j.c}:${j.v}`; a.dataset.juz = j.n;
    const no = el('span', 's-no'); no.append(el('span', '', bn(j.n)));
    const name = el('span', 's-name', `পারা ${bn(j.n)}`);
    name.append(el('small', '', Object.keys(j.map).map((c) => bnName(+c)).join(', ')));
    a.append(no, name, el('span', 'juz-n', `${bn(j.c)}:${bn(j.v)}`));
    nav.append(a);
  });
  nav.addEventListener('click', (e) => e.target.closest('a') && openIndex(false));
  syncNavi();
}
const juzOf = (c, v) => S.juzs.find((j) => { const r = j.map[c]; if (!r) return false; const [a, b] = r.split('-').map(Number); return v >= a && v <= b; });

function showTab(which) {
  const s = which === 'S';
  $('#tabS').setAttribute('aria-selected', String(s)); $('#tabJ').setAttribute('aria-selected', String(!s));
  $('#tabS').tabIndex = s ? 0 : -1; $('#tabJ').tabIndex = s ? -1 : 0;
  $('#idxList').hidden = !s; $('#juzList').hidden = s;
}
function initIndex() {
  $('#tabS').addEventListener('click', () => showTab('S'));
  $('#tabJ').addEventListener('click', () => showTab('J'));
  $('.tabs').addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const to = $('#tabS').getAttribute('aria-selected') === 'true' ? 'J' : 'S';
    showTab(to); $(to === 'S' ? '#tabS' : '#tabJ').focus();
  });
  const btn = $('#idxBtn');
  btn.addEventListener('click', () => {
    if (mobile.matches) openIndex(!document.body.classList.contains('index-open'));
    else { document.body.classList.toggle('focus'); sync(); }
  });
  $('#scrim').addEventListener('click', () => { openIndex(false); closePanel(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { openIndex(false); closePanel(); } });
  const sync = () => {
    const open = mobile.matches ? document.body.classList.contains('index-open') : !document.body.classList.contains('focus');
    btn.setAttribute('aria-expanded', String(open));
    $('#idxBtnLbl').textContent = open ? 'সূরা ও পারার সূচি লুকান' : 'সূরা ও পারার সূচি দেখান';
  };
  mobile.addEventListener('change', sync); sync();
  initIndex.sync = sync;
}
function openIndex(open) {
  if (!mobile.matches) return;
  document.body.classList.toggle('index-open', open);
  initIndex.sync?.();
  if (open) setTimeout(() => $('#filter').focus(), 50);
}
function markIndex() {
  $$('#idxList a').forEach((a) => (+a.dataset.id === S.c ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
  const cur = $(`#idxList a[data-id="${S.c}"]`);
  if (cur && !mobile.matches && !$('#idxList').hidden) cur.scrollIntoView({ block: 'nearest' });
}

/* ---------- navigator ---------- */
function initNavi() {
  $('#selSurah').addEventListener('change', (e) => go(+e.target.value));
  $('#selAyah').addEventListener('change', (e) => go(S.c, +e.target.value));
  $('#selJuz').addEventListener('change', (e) => { const j = S.juzs.find((x) => x.n === +e.target.value); if (j) go(j.c, j.v); });
  $('#playAll').addEventListener('click', () => {
    const a = $('#audio');
    if (S.playing >= 0) { a.paused ? a.play() : a.pause(); } else playIndex(Math.max(0, S.verses.findIndex((x) => x.verse_number === S.cur)));
  });
  fillRecSelects();
}
function fillRecSelects() {
  $$('[data-rec]').forEach((s) => {
    s.innerHTML = RECITERS.map((r) => `<option value="${r.id}" title="${r.style}">${recLabel(r)}</option>`).join('');
    s.value = S.rec;
    if (!s.dataset.ready) { s.dataset.ready = '1'; s.addEventListener('change', (e) => setReciter(+e.target.value)); }
  });
}
// the navigator follows the reading position: surah, ayah, para, prev and next
function syncNavi() {
  if (!S.c) return;
  $('#selSurah').value = S.c;
  if (S.cur) $('#selAyah').value = S.cur;
  const j = juzOf(S.c, S.cur || 1); if (j) $('#selJuz').value = j.n;
  $$('#juzList a').forEach((a) => (j && +a.dataset.juz === j.n ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
  const pv = $('#prevS'), nx = $('#nextS');
  pv.href = S.c > 1 ? `#${S.c - 1}` : '#'; pv.setAttribute('aria-disabled', String(S.c <= 1));
  nx.href = S.c < 114 ? `#${S.c + 1}` : '#'; nx.setAttribute('aria-disabled', String(S.c >= 114));
  pv.setAttribute('aria-label', S.c > 1 ? `আগের সূরা: ${bnName(S.c - 1)}` : 'আগের সূরা নেই');
  nx.setAttribute('aria-label', S.c < 114 ? `পরের সূরা: ${bnName(S.c + 1)}` : 'পরের সূরা নেই');
}

/* ---------- guide ---------- */
function initGuide() {
  const g = $('#guide');
  const hide = () => { g.hidden = true; store.set('guideSeen', true); };
  if (!store.get('guideSeen')) g.hidden = false;
  $('#guideOk').addEventListener('click', hide);
  $('#guideClose').addEventListener('click', hide);
  $('#helpBtn').addEventListener('click', () => { g.hidden = false; window.scrollTo({ top: 0, behavior: reduced.matches ? 'auto' : 'smooth' }); $('#guideH').tabIndex = -1; $('#guideH').focus({ preventScroll: true }); });
}

/* ---------- chapter ---------- */
function showState(msg, retry) {
  const c = col(); c.textContent = '';
  const p = el('div', 'state'); p.append(el('p', '', msg));
  if (retry) { const b = el('button', 'btn btn--quiet'); b.type = 'button'; b.innerHTML = '<i data-lucide="refresh-cw"></i>'; b.append('আবার চেষ্টা করুন'); b.addEventListener('click', retry); p.append(b); }
  c.append(p); icons();
}

const versesPath = (c, page) => `/verses/by_chapter/${c}?language=bn&words=true&word_fields=text_uthmani,text_indopak&translations=${S.tr}` +
  `&fields=text_uthmani&audio=${S.rec}&per_page=50&page=${page}`;

async function loadChapter(c, v, keepPlaying) {
  if (c === S.c && S.verses.length && !keepPlaying) { if (v) goToAyah(v, true); else window.scrollTo(0, 0); return; }
  const id = ++S.loadId;
  if (!keepPlaying) stopAudio();
  closePanel();
  S.c = c; S.verses = []; S.cur = v || 1;
  const s = S.chs[c - 1];
  document.title = `সূরা ${bnName(c)} — কুরআন — Daily Islam`;
  $('#selAyah').innerHTML = Array.from({ length: s.verses_count }, (_, i) => `<option value="${i + 1}">${bn(i + 1)}</option>`).join('');
  markIndex(); syncNavi();
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
  c.classList.toggle('wbw', S.wbw);
  const h = el('header', 's-head');
  const top = el('div', 's-head__top');
  const h1 = el('h1', '', `সূরা ${bnName(s.id)}`); h1.append(el('small', '', s.name_complex));
  const ar = el('p', 'ar', s.name_arabic); ar.lang = 'ar'; ar.setAttribute('aria-hidden', 'true');
  top.append(h1, ar);
  const meta = el('p', 's-meta');
  meta.append(el('span', '', `অর্থ: ${s.translated_name.name}`), el('span', '', placeBn(s.revelation_place)), el('span', '', `${bn(s.verses_count)} আয়াত`), el('span', '', `সূরা নম্বর ${bn(s.id)}`));
  const acts = el('div', 's-acts');
  const play = el('button', 'btn btn--gold btn--sm'); play.type = 'button'; play.innerHTML = '<i data-lucide="play"></i>'; play.append('পুরো সূরা শুনুন');
  play.addEventListener('click', () => playIndex(0));
  const pick = el('label', 'pick'); pick.innerHTML = '<span class="pick__lbl">ক্বারি</span><select data-rec aria-label="ক্বারি বাছাই করুন"></select><i data-lucide="chevron-down"></i>';
  const info = el('button', 'btn btn--sm btn--onband'); info.type = 'button'; info.setAttribute('aria-expanded', 'false');
  info.innerHTML = '<i data-lucide="info"></i>'; info.append('সূরার পরিচিতি');
  info.addEventListener('click', () => toggleInfo(s.id, info));
  acts.append(play, pick, info);
  const src = el('p', 's-source', `আরবি: ${S.script === 'indopak' ? 'ইন্দো-পাক' : 'উসমানি'} লিপি। অনুবাদ: ${trOf(S.tr).name} (${trOf(S.tr).by})। উৎস: Quran.com`);
  h.append(top, meta, acts, src);
  c.append(h); fillRecSelects(); icons();
}
// the surah introduction exists only in English on Quran.com (Tafhim al-Qur'an), so it is labelled as such and opens on request
async function toggleInfo(id, btn) {
  let box = $('.s-intro');
  if (box) { box.remove(); btn.setAttribute('aria-expanded', 'false'); return; }
  box = el('div', 's-intro');
  box.lang = 'en'; box.append(el('p', 'loading', 'আনা হচ্ছে…'));
  btn.closest('.s-acts').after(box); btn.setAttribute('aria-expanded', 'true');
  try {
    const { chapter_info: i } = await api(`/chapters/${id}/info?language=bn`);
    box.textContent = '';
    const by = el('p', 's-intro__by', `ইংরেজিতে, ${i.source}`); by.lang = 'bn';
    box.append(by);
    paragraphs(i.text).slice(0, 6).forEach((t) => box.append(el('p', '', t)));
  } catch (e) { box.textContent = 'পরিচিতি আনা যায়নি।'; }
}

function addVerses(list) {
  const ol = $('#ayahs');
  list.forEach((verse) => { const i = S.verses.push(verse) - 1; ol.append(renderAyah(verse, i)); });
}
function renderAyah(verse, i) {
  const k = verse.verse_key, v = verse.verse_number;
  const li = el('li', 'ayah'); li.id = `a${S.c}-${v}`; li.dataset.i = i;
  li.append(Object.assign(el('span', 'a-num', bn(v)), { title: `আয়াত ${bn(v)}` }));
  li.append(arabicOf(verse));
  li.append(el('p', 'tr', plainText(verse.translations?.[0]?.text)));
  const tools = el('div', 'a-tools');
  const mk = (act, icon, text, label, cls, pressed) => {
    const b = el('button', 'a-btn' + (cls ? ' ' + cls : '')); b.type = 'button'; b.dataset.act = act; b.setAttribute('aria-label', label);
    if (pressed != null) b.setAttribute('aria-pressed', String(pressed));
    b.innerHTML = `<i data-lucide="${icon}"></i>`; b.append(el('span', '', text)); return b;
  };
  tools.append(
    mk('play', 'play', 'শুনুন', `আয়াত ${bn(v)} শুনুন`),
    mk('tafsir', 'book-text', 'তাফসির', `আয়াত ${bn(v)}-এর তাফসির পড়ুন`, 'a-btn--taf'),
    mk('save', 'bookmark', 'সংরক্ষণ', `আয়াত ${bn(v)} সংরক্ষণ করুন`, '', isSaved(k)),
    mk('share', 'share-2', 'শেয়ার', `আয়াত ${bn(v)} সূত্রসহ শেয়ার বা কপি করুন`),
    el('span', 'a-key', `${bn(S.c)}:${bn(v)}`),
  );
  li.append(tools);
  return li;
}
function arabicOf(verse) {
  const ar = el('p', 'ar'); ar.lang = 'ar';
  verse.words.forEach((w) => {
    if (w.char_type_name === 'end') { ar.append(el('span', 'end', `﴿${arNum(verse.verse_number)}﴾`)); return; }
    const s = el('span', 'w', (S.script === 'indopak' && w.text_indopak) || w.text_uthmani); s.dataset.p = w.position;
    if (w.translation?.text) { const g = el('small', 'g', w.translation.text); g.lang = 'bn'; s.append(g); }
    ar.append(s, ' ');
  });
  return ar;
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
  if (flash) { li.classList.remove('flash'); void li.offsetWidth; li.classList.add('flash'); }
  S.cur = v; syncNavi();
}

// resume position: the ayah crossing the upper part of the screen is "where you are"
let posObs;
function watchPosition() {
  posObs?.disconnect();
  posObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const v = S.verses[+e.target.dataset.i]?.verse_number;
      if (v) { S.cur = v; store.set('last', { c: S.c, v }); syncNavi(); }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  $$('.ayah').forEach((li) => posObs.observe(li));
}

/* ---------- ayah actions ---------- */
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
  if (act === 'share') shareAyah(verse);
  if (act === 'tafsir') openPanel(k);
}
async function shareAyah(verse) {
  const [c, v] = verse.verse_key.split(':');
  const url = `${location.origin}${location.pathname}#${c}:${v}`;
  const text = `${verse.text_uthmani}\n\n${plainText(verse.translations?.[0]?.text)}\n\nসূরা ${bnName(+c)} ${bn(c)}:${bn(v)}। অনুবাদ: ${trOf(S.tr).name}।`;
  if (navigator.share && mobile.matches) { try { await navigator.share({ title: `সূরা ${bnName(+c)}, আয়াত ${bn(v)}`, text, url }); return; } catch (e) { if (e.name === 'AbortError') return; } }
  try { await navigator.clipboard.writeText(`${text}\n${url}`); toast('সূত্র ও লিংকসহ কপি হয়েছে', 'clipboard-check'); }
  catch (e) { toast('কপি করা যায়নি। ব্রাউজার অনুমতি দেয়নি।', 'circle-alert'); }
}

/* ---------- saved view ---------- */
function renderSaved() {
  stopAudio(); closePanel(); S.c = 0; S.verses = []; markIndex();
  document.title = 'সংরক্ষিত আয়াত — Daily Islam';
  const c = col(); c.textContent = '';
  const w = el('div', 'saved-wrap');
  w.append(el('h1', '', 'সংরক্ষিত আয়াত'), el('p', '', 'শুধু এই ব্রাউজারে রাখা। অন্য কেউ দেখতে পায় না।'));
  if (!S.bm.length) {
    const st = el('div', 'state');
    st.append(el('p', '', 'এখনো কোনো আয়াত সংরক্ষণ করেননি। পড়ার সময় আয়াতের নিচের "সংরক্ষণ" বোতামে চাপুন।'));
    const a = el('a', 'btn btn--solid'); const last = store.get('last'); a.href = last ? `quran.html#${last.c}:${last.v}` : 'quran.html#1';
    a.innerHTML = '<i data-lucide="book-open"></i>'; a.append(last ? 'যেখানে থেমেছিলেন সেখান থেকে পড়ুন' : 'সূরা ফাতিহা দিয়ে শুরু করুন');
    st.append(a); w.append(st);
  } else {
    const ul = el('ul', 'saved-list');
    S.bm.forEach(({ k, s }) => {
      const [cc, v] = k.split(':').map(Number);
      const li = el('li'), a = el('a'); a.href = `quran.html#${cc}:${v}`;
      const mid = el('span', 's-name', `সূরা ${bnName(cc)}, আয়াত ${bn(v)}`); mid.append(el('small', 'snip', s));
      a.append(el('span', 'k', `${bn(cc)}:${bn(v)}`), mid);
      a.insertAdjacentHTML('beforeend', '<i data-lucide="bookmark"></i>');
      li.append(a); ul.append(li);
    });
    w.append(ul);
  }
  c.append(w); icons();
}

/* ---------- settings ---------- */
function initSettings() {
  const root = document.documentElement;
  const apply = () => {
    root.style.setProperty('--ar-size', S.arSize + 'rem');
    root.style.setProperty('--tr-size', S.trSize + 'rem');
    root.classList.toggle('script-indopak', S.script === 'indopak');
    document.body.classList.toggle('no-tr', !S.showTr);
    col().classList.toggle('wbw', S.wbw);
  };
  const r = $('#arSize'); r.value = S.arSize;
  r.addEventListener('input', () => { S.arSize = +r.value; store.set('arSize', S.arSize); apply(); });
  const t = $('#trSize'); t.value = S.trSize;
  t.addEventListener('input', () => { S.trSize = +t.value; store.set('trSize', S.trSize); apply(); });
  const showTr = $('#showTr'); showTr.checked = S.showTr;
  showTr.addEventListener('change', () => { S.showTr = showTr.checked; store.set('showTr', S.showTr); apply(); });
  const wbw = $('#wbw'); wbw.checked = S.wbw;
  wbw.addEventListener('change', () => { S.wbw = wbw.checked; store.set('wbw', S.wbw); apply(); });
  $$('#scriptGroup input').forEach((inp) => {
    inp.checked = inp.value === S.script;
    inp.addEventListener('change', () => {
      S.script = inp.value; store.set('script', S.script); apply();
      // same data, other script: redraw the Arabic only
      $$('.ayah').forEach((li) => { const v = S.verses[+li.dataset.i]; $('.ar', li).replaceWith(arabicOf(v)); });
      const src = $('.s-source'); if (src) src.textContent = src.textContent.replace(/(উসমানি|ইন্দো-পাক)/, S.script === 'indopak' ? 'ইন্দো-পাক' : 'উসমানি');
    });
  });
  const g = $('#trGroup');
  TRANSLATIONS.forEach((tr) => {
    const lab = el('label', 'radio'); const inp = document.createElement('input');
    inp.type = 'radio'; inp.name = 'tr'; inp.value = tr.id; inp.checked = tr.id === S.tr;
    const txt = el('span', '', tr.name); txt.append(el('small', '', tr.by));
    lab.append(inp, txt); g.append(lab);
    inp.addEventListener('change', () => {
      S.tr = tr.id; store.set('tr', S.tr);
      if (!S.c) return;
      const c = S.c, v = S.cur; S.c = 0; loadChapter(c, v);
    });
  });
  apply();
}

/* ---------- recitation ---------- */
function initPlayer() {
  const a = $('#audio');
  a.addEventListener('timeupdate', onTime);
  a.addEventListener('ended', async () => {
    if (S.repeat) { a.currentTime = 0; a.play(); return; }
    if (S.playing + 1 < S.verses.length) return playIndex(S.playing + 1);
    if (S.auto && S.c < 114) { await loadChapter(S.c + 1, 0, true); return playIndex(0); }
    setPlayBtn(false); clearWord();
  });
  a.addEventListener('play', () => { a.playbackRate = S.speed; setPlayBtn(true); });
  a.addEventListener('pause', () => setPlayBtn(false));
  a.addEventListener('error', () => { if (a.getAttribute('src')) toast('তিলাওয়াত চালু করা যায়নি। ইন্টারনেট সংযোগ দেখুন।', 'wifi-off'); });
  $('#pPlay').addEventListener('click', () => (a.paused ? a.play() : a.pause()));
  $('#pPrev').addEventListener('click', () => S.playing > 0 && playIndex(S.playing - 1));
  $('#pNext').addEventListener('click', () => S.playing + 1 < S.verses.length && playIndex(S.playing + 1));
  $('#pRepeat').addEventListener('click', (e) => { S.repeat = !S.repeat; e.currentTarget.setAttribute('aria-pressed', String(S.repeat)); toast(S.repeat ? 'এই আয়াত বারবার বাজবে' : 'বারবার বাজানো বন্ধ', 'repeat-1'); });
  const auto = $('#pAuto'); auto.setAttribute('aria-pressed', String(S.auto));
  auto.addEventListener('click', () => { S.auto = !S.auto; store.set('autoNext', S.auto); auto.setAttribute('aria-pressed', String(S.auto)); toast(S.auto ? 'সূরা শেষে পরের সূরা চালু হবে' : 'সূরা শেষে থামবে', 'list-video'); });
  const sp = $('#pSpeed'); sp.value = String(S.speed);
  sp.addEventListener('change', () => { S.speed = +sp.value; store.set('speed', S.speed); a.playbackRate = S.speed; });
  $('#pClose').addEventListener('click', stopAudio);
  const seek = $('#pSeek');
  seek.addEventListener('click', (e) => { if (!a.duration) return; const r = seek.getBoundingClientRect(); a.currentTime = ((e.clientX - r.left) / r.width) * a.duration; });
  seek.addEventListener('keydown', (e) => { if (!a.duration) return; if (e.key === 'ArrowRight') a.currentTime += 5; if (e.key === 'ArrowLeft') a.currentTime -= 5; });
  // space plays and pauses while the player is open, unless typing or on a control
  document.addEventListener('keydown', (e) => {
    if (e.key !== ' ' || $('#player').hidden || e.target.closest('input, select, textarea, button, a, [role="slider"]')) return;
    e.preventDefault(); a.paused ? a.play() : a.pause();
  });
}
async function setReciter(id) {
  S.rec = id; store.set('rec', id);
  $$('[data-rec]').forEach((s) => (s.value = id));
  toast(`ক্বারি: ${recOf(id).name}`, 'headphones');
  if (!S.c || !S.verses.length) return;
  const c = S.c;
  try {
    const { audio_files } = await api(`/recitations/${id}/by_chapter/${c}?per_page=300&fields=segments`);
    if (c !== S.c) return;
    const byKey = Object.fromEntries(audio_files.map((f) => [f.verse_key, f]));
    S.verses.forEach((v) => { const f = byKey[v.verse_key]; if (f) v.audio = { url: f.url, segments: f.segments }; });
    if (S.playing >= 0) playIndex(S.playing);
  } catch (e) { toast('এই ক্বারির তিলাওয়াত আনা যায়নি।', 'wifi-off'); }
}
function playIndex(i) {
  const verse = S.verses[i]; if (!verse?.audio?.url) return;
  const a = $('#audio');
  $$('.ayah.playing').forEach((x) => x.classList.remove('playing'));
  clearWord();
  S.playing = i;
  const li = $(`.ayah[data-i="${i}"]`); li?.classList.add('playing');
  a.src = audioUrl(verse.audio.url);
  a.playbackRate = S.speed;
  a.play().catch(() => {});
  $('#player').hidden = false;
  $('#pNow').textContent = `সূরা ${bnName(S.c)}, আয়াত ${bn(verse.verse_number)} / ${bn(S.verses.length)}`;
  const r = recOf(S.rec); $('#pWho').textContent = `${r.name}, ${r.style}`;
  S.cur = verse.verse_number; store.set('last', { c: S.c, v: verse.verse_number }); syncNavi();
  if (li) {
    const rc = li.getBoundingClientRect(), topEdge = $('.navi').getBoundingClientRect().bottom;
    if (rc.top < topEdge || rc.bottom > innerHeight - 120) li.scrollIntoView({ block: 'center', behavior: reduced.matches ? 'auto' : 'smooth' });
  }
}
// Quran.com segments: [wordIndex, wordPosition, startMs, endMs] (older data: [position, start, end]); values can be strings
function onTime() {
  const a = $('#audio'), verse = S.verses[S.playing]; if (!verse) return;
  if (a.duration) { const p = (a.currentTime / a.duration) * 100; $('#pBar').style.width = p + '%'; $('#pSeek').setAttribute('aria-valuenow', String(Math.round(p))); }
  const ms = a.currentTime * 1000;
  const seg = (verse.audio.segments || []).find((s) => { const [st, en] = s.length >= 4 ? [+s[2], +s[3]] : [+s[1], +s[2]]; return ms >= st && ms < en; });
  const pos = seg ? (seg.length >= 4 ? seg[1] : seg[0]) : null;
  const w = pos != null ? $(`.ayah[data-i="${S.playing}"] .w[data-p="${pos}"]`) : null;
  if (w === S.lastWord) return;
  clearWord(); if (w) { w.classList.add('on'); S.lastWord = w; }
}
function clearWord() { S.lastWord?.classList.remove('on'); S.lastWord = null; }
function setPlayBtn(on) {
  const b = $('#pPlay'); b.setAttribute('aria-label', on ? 'থামান' : 'চালু করুন');
  b.innerHTML = `<i data-lucide="${on ? 'pause' : 'play'}"></i>`;
  $$('.ayah [data-act="play"]').forEach((x) => { x.innerHTML = '<i data-lucide="play"></i><span>শুনুন</span>'; });
  const cur = $(`.ayah[data-i="${S.playing}"] [data-act="play"]`);
  if (cur && on) cur.innerHTML = '<i data-lucide="pause"></i><span>থামান</span>';
  const all = $('#playAll'); all.innerHTML = `<i data-lucide="${on ? 'pause' : 'play'}"></i><span class="hide-sm">${on ? 'থামান' : S.playing >= 0 ? 'আবার চালু করুন' : 'পুরো সূরা শুনুন'}</span>`;
  icons();
}
function stopAudio() {
  const a = $('#audio'); a.pause(); a.removeAttribute('src'); a.load();
  S.playing = -1; clearWord();
  $$('.ayah.playing').forEach((x) => x.classList.remove('playing'));
  $('#player').hidden = true;
  setPlayBtn(false);
}

/* ---------- tafsir ---------- */
let panelKey = null;
const tafCache = new Map();
function initPanel() {
  const box = $('#tafGroups');
  Object.entries(TAF_LANG).forEach(([lang, label]) => {
    const g = el('div', 'taf-group'); g.append(el('h3', '', label));
    const chips = el('div', 'taf-chips');
    TAFSIRS.filter((t) => t.lang === lang).forEach((t) => {
      const lab = el('label'); lab.title = t.by;
      const inp = document.createElement('input'); inp.type = 'radio'; inp.name = 'taf'; inp.value = t.id; inp.checked = t.id === S.taf;
      const span = el('span', '', t.name); span.lang = lang;
      inp.addEventListener('change', () => { S.taf = t.id; store.set('taf', S.taf); if (panelKey) loadTafsir(panelKey); });
      lab.append(inp, span); chips.append(lab);
    });
    g.append(chips); box.append(g);
  });
  $('#panelClose').addEventListener('click', closePanel);
  $('#panelPrev').addEventListener('click', () => stepPanel(-1));
  $('#panelNext').addEventListener('click', () => stepPanel(1));
}
function openPanel(k) {
  panelKey = k; $('#panel').hidden = false; document.body.classList.add('panel-open');
  renderPanelAyah(k); loadTafsir(k); $('#panelClose').focus();
}
function stepPanel(d) {
  const [c, v] = panelKey.split(':').map(Number), nv = v + d;
  if (nv < 1 || nv > S.verses.length) return;
  panelKey = `${c}:${nv}`; renderPanelAyah(panelKey); loadTafsir(panelKey); goToAyah(nv);
}
function renderPanelAyah(k) {
  const [c, v] = k.split(':').map(Number);
  $('#panelKey').textContent = `সূরা ${bnName(c)}, আয়াত ${bn(v)}`;
  $('#panelPrev').disabled = v <= 1; $('#panelNext').disabled = v >= S.verses.length;
  const verse = S.verses.find((x) => x.verse_key === k), box = $('#panelAyah'); box.textContent = '';
  if (verse) { box.append(arabicOf(verse), el('p', '', plainText(verse.translations?.[0]?.text))); $$('.g', box).forEach((g) => g.remove()); }
  $('#panelScroll').scrollTop = 0;
}
function closePanel() {
  if ($('#panel').hidden) return;
  $('#panel').hidden = true; document.body.classList.remove('panel-open');
  const [c, v] = (panelKey || '').split(':'); panelKey = null;
  $(`#a${c}-${v} [data-act="tafsir"]`)?.focus({ preventScroll: true });
}
// tafsir HTML is parsed inertly; headings and paragraphs are kept as text, nothing else
function tafBlocks(html) {
  const doc = new DOMParser().parseFromString(`<div>${html || ''}</div>`, 'text/html');
  const out = [];
  doc.body.firstChild.childNodes.forEach((n) => {
    const t = n.textContent.trim(); if (!t) return;
    const h = n.nodeType === 1 && /^H\d$/.test(n.tagName);
    (h ? [t] : t.split(/\n{1,}/)).forEach((x) => x.trim() && out.push([h ? 'h3' : 'p', x.trim()]));
  });
  return out;
}
async function loadTafsir(k) {
  const t = TAFSIRS.find((x) => x.id === S.taf) || TAFSIRS[0];
  const body = $('#panelBody'); body.textContent = ''; body.lang = t.lang; body.dir = t.lang === 'ar' ? 'rtl' : 'ltr';
  body.append(el('p', 'loading', 'তাফসির আনা হচ্ছে…'));
  try {
    const ck = `${t.id}|${k}`;
    const tafsir = tafCache.get(ck) || (await api(`/tafsirs/${t.id}/by_ayah/${k}`)).tafsir;
    tafCache.set(ck, tafsir);
    if (panelKey !== k) return;
    body.textContent = '';
    const by = el('p', 'taf-by', `${t.name}, ${t.by}`); by.lang = 'bn'; by.dir = 'ltr'; body.append(by);
    const keys = Object.keys(tafsir.verses || {});
    if (keys.length > 1) { const tag = el('p', 'tag', `এই ব্যাখ্যাটি আয়াত ${bn(keys[0].split(':')[1])} থেকে ${bn(keys[keys.length - 1].split(':')[1])} একসাথে`); tag.lang = 'bn'; tag.dir = 'ltr'; body.append(tag); }
    const blocks = tafBlocks(tafsir.text);
    if (!blocks.length) { const p = el('p', '', 'এই আয়াতের জন্য এই গ্রন্থে আলাদা ব্যাখ্যা নেই। সাধারণত আগের আয়াতের সাথে একসাথে ব্যাখ্যা করা হয়েছে। আগের আয়াত বা অন্য তাফসির বেছে দেখুন।'); p.lang = 'bn'; p.dir = 'ltr'; body.append(p); }
    blocks.forEach(([tag, x]) => body.append(el(tag, '', x)));
  } catch (e) {
    body.textContent = ''; body.dir = 'ltr'; body.append(el('p', 'err', 'তাফসির আনা যায়নি। ইন্টারনেট সংযোগ দেখে আবার খুলুন।'));
  }
}
