// Home page: the almanac cover, today's ayah, surah shortlist, Quranic duas, tasbih.

const AYAH_OF_DAY = ['2:152', '2:186', '13:28', '39:53', '94:6', '3:139', '2:286', '65:3', '29:69', '3:173', '17:82', '20:25'];
const DUAS = ['2:201', '3:8', '14:40', '14:41'];
const SHORTLIST = [1, 18, 36, 55, 56, 67, 112];

window.addEventListener('DOMContentLoaded', () => {
  initMenu(); initSearch(); initAlmanac(); initTasbih();
  initQuran(); initDuas();
});

function initMenu() {
  const cover = $('#topbar'), btn = $('#menuBtn');
  const shade = () => cover.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', shade, { passive: true }); shade();
  btn.addEventListener('click', () => {
    const open = cover.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন');
  });
  $$('#primary a').forEach((a) => a.addEventListener('click', () => { cover.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); }));
}

function initSearch() {
  const dlg = $('#searchDlg');
  $('#openSearch').addEventListener('click', () => { dlg.showModal(); $('#q').focus(); });
  $('[data-close]', dlg).addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
}

// Bangla possessive: ইশা → ইশার, আসর → আসরের
const poss = (w) => w + (w.endsWith('া') ? 'র' : 'ের');

/* ---------- Cover: dates, next prayer, timetable, day ruler ---------- */
function initAlmanac() {
  let city = store.get('city', 'dhaka'); if (!CITIES[city]) city = 'dhaka';
  const list = $('#cityList');
  Object.entries(CITIES).forEach(([k, [name]]) => {
    const li = el('li'), b = el('button', '', name);
    b.type = 'button'; b.dataset.value = k; b.setAttribute('role', 'option');
    if (k === city) b.setAttribute('aria-current', 'true');
    li.append(b); list.append(li);
  });
  $('#cityDd .dd-label').textContent = CITIES[city][0];
  $('#cityDd').addEventListener('pick', (e) => { city = e.detail; store.set('city', city); draw(true); });

  let lastDay = '', lastNext = '';
  function draw(force) {
    const now = new Date(), n = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
    const [, lat, lng] = CITIES[city];
    const t = prayerTimes(now, lat, lng);
    const dayKey = now.toDateString() + city;

    if (force || dayKey !== lastDay) {
      lastDay = dayKey;
      $('#dHijri').textContent = hijriDate(now) + ' (আনুমানিক)';
      $('#dBangla').textContent = bnDate(now);
      $('#dEn').textContent = enDate(now);
      drawRuler(t);
    }

    // current waqt and the next one
    let cur = null;
    if (n >= t.fajr && n < t.sunrise) cur = 'fajr';
    else if (n >= t.dhuhr && n < t.asr) cur = 'dhuhr';
    else if (n >= t.asr && n < t.maghrib) cur = 'asr';
    else if (n >= t.maghrib && n < t.isha) cur = 'maghrib';
    else if (n >= t.isha || n < t.fajr) cur = 'isha';
    let next = ORDER.find((k) => t[k] > n), at;
    if (next) at = t[next];
    else { next = 'fajr'; const tm = new Date(now); tm.setDate(tm.getDate() + 1); at = prayerTimes(tm, lat, lng).fajr + 1440; }

    const nextKey = next + Math.round(at) + city;
    if (force || nextKey !== lastNext) {
      lastNext = nextKey;
      const h = $('#nextH'); h.textContent = '';
      h.append(el('span', 'when', `পরের নামাজ, ${at >= 1440 ? 'আগামীকাল ' : ''}${partOfDay(at)} ${fmt(at)}-এ`), NAMES[next]);
      drawTable(t, cur);
    }

    const left = Math.max(0, Math.ceil(at - n)), hh = Math.floor(left / 60), mm = left % 60;
    const span = hh ? `${bn(hh)} ঘণ্টা ${bn(mm)} মিনিট` : `${bn(mm)} মিনিট`;
    const curTxt = cur ? `এখন ${poss(NAMES[cur])} ওয়াক্ত।` : 'এখন কোনো ফরজ নামাজের ওয়াক্ত নয়।';
    const line = $('#nextLeft'), want = `আর ${span}। ${curTxt}`;
    if (line.textContent !== want) { line.textContent = ''; const tm = el('time', '', span); line.append('আর ', tm, `। ${curTxt}`); }

    $('#needle').style.left = (n / 1440) * 100 + '%';
  }

  function drawTable(t, cur) {
    const n = new Date().getHours() * 60 + new Date().getMinutes();
    const ol = $('#timetable'); ol.textContent = '';
    ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'].forEach((k) => {
      const li = el('li', k === 'sunrise' ? 'aux' : '');
      if (k === cur) { li.classList.add('is-now'); li.setAttribute('aria-current', 'time'); }
      else if (t[k] < n) li.classList.add('is-past');
      li.append(el('span', 'n', NAMES[k]), el('span', 'lead'), el('time', '', fmt(t[k])));
      ol.append(li);
    });
  }

  function drawRuler(t) {
    const track = $('#track'), p = (m) => ((m / 1440) * 100).toFixed(2) + '%';
    track.style.setProperty('--p-fajr', p(t.fajr));
    track.style.setProperty('--p-sunrise', p(t.sunrise));
    track.style.setProperty('--p-sunrise-2', p(t.sunrise + 70));
    track.style.setProperty('--p-maghrib-1', p(t.maghrib - 70));
    track.style.setProperty('--p-maghrib', p(t.maghrib));
    track.style.setProperty('--p-isha', p(t.isha));
    $$('.tick', track).forEach((x) => x.remove());
    // labels alternate above and below so close times (Maghrib, Isha) never collide
    [['fajr', 'below'], ['sunrise', 'above aux'], ['dhuhr', 'below'], ['asr', 'above'], ['maghrib', 'below'], ['isha', 'above']].forEach(([k, cls]) => {
      const d = el('div', 'tick ' + cls); d.style.left = p(t[k]);
      d.append(el('span', '', NAMES[k])); track.prepend(d);
    });
  }

  draw(true);
  setInterval(draw, 1000);
}

/* ---------- Quran: ayah of the day, resume, shortlist ---------- */
let homeAudio, homeBtn;
function playToggle(btn, url) {
  if (homeBtn === btn && homeAudio && !homeAudio.paused) { homeAudio.pause(); setPlayIcon(btn, false); return; }
  if (homeAudio) { homeAudio.pause(); if (homeBtn) setPlayIcon(homeBtn, false); }
  homeAudio = new Audio(AUDIO_BASE + url); homeBtn = btn;
  homeAudio.addEventListener('ended', () => setPlayIcon(btn, false));
  homeAudio.play().then(() => setPlayIcon(btn, true)).catch(() => toast('তিলাওয়াত চালু করা যায়নি। ইন্টারনেট সংযোগ দেখুন।', 'wifi-off'));
}
function setPlayIcon(btn, on) {
  btn.setAttribute('aria-pressed', String(on));
  const i = $('svg, i', btn); const n = document.createElement('i'); n.setAttribute('data-lucide', on ? 'pause' : 'play'); i.replaceWith(n);
  const label = $('.lbl', btn); if (label) label.textContent = on ? 'থামান' : 'শুনুন';
  icons();
}

async function initQuran() {
  const fig = $('#ayahDay');
  const start = new Date(2026, 0, 1), day = Math.floor((new Date() - start) / 86400000);
  const key = AYAH_OF_DAY[((day % AYAH_OF_DAY.length) + AYAH_OF_DAY.length) % AYAH_OF_DAY.length];
  try {
    const [{ verse }, chs] = await Promise.all([
      api(`/verses/by_key/${key}?language=bn&translations=161&fields=text_uthmani&audio=${RECITER.id}`),
      chapters(),
    ]);
    const [c, v] = key.split(':').map(Number), ch = chs[c - 1];
    fig.textContent = '';
    const ar = el('p', 'ar', `${verse.text_uthmani} ﴿${arNum(v)}﴾`); ar.lang = 'ar';
    const cap = el('figcaption');
    cap.append(el('p', 'tr', plainText(verse.translations[0].text)));
    const cite = el('p', 'cite');
    const b = el('b', '', `সূরা ${bnName(c)} (${ch.translated_name.name}), আয়াত ${bn(v)}`);
    cite.append(b, el('span', '', `অনুবাদ: ${trOf(161).name}`));
    cap.append(cite);
    const act = el('div', 'ayah-actions');
    const play = el('button', 'btn btn-solid'); play.type = 'button'; play.setAttribute('aria-pressed', 'false');
    play.innerHTML = '<i data-lucide="play"></i><span class="lbl">শুনুন</span>';
    play.addEventListener('click', () => playToggle(play, verse.audio.url));
    const open = el('a', 'btn btn-quiet'); open.href = `quran.html#${key}`; open.innerHTML = '<i data-lucide="book-open"></i>';
    open.append('সূরার ভেতরে পড়ুন');
    act.append(play, open);
    fig.append(ar, cap, act);

    const last = store.get('last');
    if (last && chs[last.c - 1]) {
      $('#resume').hidden = false; $('#resume').href = `quran.html#${last.c}:${last.v}`;
      $('#resumeName').textContent = `সূরা ${bnName(last.c)}, আয়াত ${bn(last.v)}`;
    }
    const ul = $('#shortlist'); ul.textContent = '';
    SHORTLIST.forEach((id) => {
      const s = chs[id - 1], li = el('li'), a = el('a'); a.href = `quran.html#${id}`;
      const name = el('span', 's-name', `সূরা ${bnName(id)}`); name.append(el('small', '', `${s.translated_name.name}, ${bn(s.verses_count)} আয়াত`));
      const sar = el('span', 's-ar', s.name_arabic); sar.lang = 'ar';
      a.append(el('span', 's-no', bn(id)), name, sar); li.append(a); ul.append(li);
    });
  } catch (e) {
    fig.textContent = ''; fig.append(el('p', 'err', 'আয়াত আনা যায়নি। ইন্টারনেট সংযোগ দেখে পাতাটি আবার খুলুন।'));
    $('#shortlist').textContent = '';
  }
  icons();
}

async function initDuas() {
  const ul = $('#duaList');
  try {
    const [vs, chs] = await Promise.all([
      Promise.all(DUAS.map((k) => api(`/verses/by_key/${k}?language=bn&translations=161&fields=text_uthmani&audio=${RECITER.id}`))),
      chapters(),
    ]);
    ul.textContent = '';
    vs.forEach(({ verse }) => {
      const [c, v] = verse.verse_key.split(':').map(Number);
      const li = el('li');
      const ar = el('p', 'ar', `${verse.text_uthmani} ﴿${arNum(v)}﴾`); ar.lang = 'ar';
      const meta = el('p', 'row-meta');
      const play = el('button', 'icon-btn'); play.type = 'button'; play.setAttribute('aria-pressed', 'false');
      play.setAttribute('aria-label', `শুনুন: সূরা ${bnName(c)}, আয়াত ${bn(v)}`);
      play.innerHTML = '<i data-lucide="play"></i>';
      play.addEventListener('click', () => playToggle(play, verse.audio.url));
      const ref = el('a', 'link', `সূরা ${bnName(c)} ${bn(c)}:${bn(v)}`); ref.href = `quran.html#${c}:${v}`;
      meta.append(play, ref);
      li.append(ar, el('p', 'tr', plainText(verse.translations[0].text)), meta);
      ul.append(li);
    });
  } catch (e) {
    ul.textContent = ''; ul.append(el('li', 'err', 'দোয়া আনা যায়নি। ইন্টারনেট সংযোগ দেখে পাতাটি আবার খুলুন।'));
  }
  icons();
}

/* ---------- Tasbih ---------- */
function initTasbih() {
  const TARGET = 33;
  let { count, rounds } = store.get('tasbih', { count: 0, rounds: 0 });
  const show = () => {
    $('#count').textContent = bn(count);
    $('#rounds').textContent = rounds ? `পূর্ণ চক্র: ${bn(rounds)}` : '';
    $('#bead').setAttribute('aria-label', `তাসবিহ, ${bn(count)} বার, ${bn(TARGET)}-এর মধ্যে`);
    store.set('tasbih', { count, rounds });
  };
  $('#bead').addEventListener('click', () => {
    count++;
    if (count >= TARGET) { count = 0; rounds++; navigator.vibrate?.(60); }
    show();
  });
  $('#beadReset').addEventListener('click', () => { count = 0; rounds = 0; show(); });
  show();
}
