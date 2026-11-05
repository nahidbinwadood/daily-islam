// Daily Islam: wudu and salah, step by step, with an animated figure. Helpers from app.js, recitations from learn-data.js.
// Arabic, English meaning and audio come verbatim from RECITE (Hisnul Muslim, Abu Dawud) or live from Quran.com.
// DRAFT, awaiting scholar review: the step rules (Hanafi, as commonly taught in Bangladesh), Bangla pronunciation and Bangla meaning.

/* ---------- Bangla pronunciation and meaning (draft) ---------- */
const BNSAY = {
  bismillah: ['বিসমিল্লাহ', 'আল্লাহর নামে।'],
  wuduEnd: ['আশহাদু আল লা ইলাহা ইল্লাল্লাহু ওয়াহদাহু লা শারীকা লাহু, ওয়া আশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাসূলুহু', 'আমি সাক্ষ্য দিচ্ছি, আল্লাহ ছাড়া কোনো উপাস্য নেই, তিনি একক, তাঁর কোনো শরিক নেই। আর আমি সাক্ষ্য দিচ্ছি, মুহাম্মাদ তাঁর বান্দা ও রাসূল।'],
  wuduEnd2: ['আল্লাহুম্মাজ আলনী মিনাত তাওয়াবীনা ওয়াজ আলনী মিনাল মুতাতাহহিরীন', 'হে আল্লাহ, আমাকে তাওবাকারীদের দলে রাখুন, আর পবিত্রতা অর্জনকারীদের দলে রাখুন।'],
  takbir: ['আল্লাহু আকবার', 'আল্লাহ সবচেয়ে বড়।'],
  sana: ['সুবহানাকাল্লাহুম্মা ওয়া বিহামদিকা, ওয়া তাবারাকাসমুকা, ওয়া তাআলা জাদ্দুকা, ওয়া লা ইলাহা গাইরুক', 'হে আল্লাহ, আপনি পবিত্র, সব প্রশংসা আপনার। আপনার নাম বরকতময়, আপনার মর্যাদা অনেক উঁচু, আপনি ছাড়া কোনো উপাস্য নেই।'],
  taawwudh: ['আউযু বিল্লাহি মিনাশ শাইতানির রাজীম', 'বিতাড়িত শয়তান থেকে আমি আল্লাহর আশ্রয় চাই।'],
  ruku: ['সুবহানা রব্বিয়াল আযীম', 'আমার মহান রব পবিত্র।'],
  qawmah: ['সামিআল্লাহু লিমান হামিদাহ', 'যে আল্লাহর প্রশংসা করে, আল্লাহ তার কথা শোনেন।'],
  qawmah2: ['রব্বানা ওয়া লাকাল হামদ', 'হে আমাদের রব, সব প্রশংসা আপনারই।'],
  sujud: ['সুবহানা রব্বিয়াল আ‘লা', 'আমার সবার ওপরে থাকা রব পবিত্র।'],
  jalsah: ['রব্বিগফিরলী, রব্বিগফিরলী', 'হে আমার রব, আমাকে ক্ষমা করুন। হে আমার রব, আমাকে ক্ষমা করুন।'],
  tashahhud: ['আত্তাহিয়্যাতু লিল্লাহি ওয়াস সালাওয়াতু ওয়াত তাইয়্যিবাতু, আসসালামু আলাইকা আইয়্যুহান নাবিয়্যু ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু, আসসালামু আলাইনা ওয়া আলা ইবাদিল্লাহিস সালিহীন। আশহাদু আল লা ইলাহা ইল্লাল্লাহু ওয়া আশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাসূলুহু',
    'সব সম্মান, সব ইবাদত আর সব ভালো কথা আল্লাহর জন্য। হে নবী, আপনার ওপর শান্তি, আল্লাহর রহমত ও বরকত। শান্তি আমাদের ওপর আর আল্লাহর নেক বান্দাদের ওপর। আমি সাক্ষ্য দিচ্ছি, আল্লাহ ছাড়া কোনো উপাস্য নেই, আর সাক্ষ্য দিচ্ছি, মুহাম্মাদ তাঁর বান্দা ও রাসূল।'],
  durood: ['আল্লাহুম্মা সাল্লি আলা মুহাম্মাদিও ওয়া আলা আলি মুহাম্মাদ, কামা সাল্লাইতা আলা ইবরাহীমা ওয়া আলা আলি ইবরাহীম, ইন্নাকা হামীদুম মাজীদ। আল্লাহুম্মা বারিক আলা মুহাম্মাদিও ওয়া আলা আলি মুহাম্মাদ, কামা বারাকতা আলা ইবরাহীমা ওয়া আলা আলি ইবরাহীম, ইন্নাকা হামীদুম মাজীদ',
    'হে আল্লাহ, মুহাম্মাদ ও তাঁর পরিবারের ওপর রহমত পাঠান, যেমন ইবরাহীম ও তাঁর পরিবারের ওপর পাঠিয়েছেন; আপনি প্রশংসিত, মহিমান্বিত। হে আল্লাহ, মুহাম্মাদ ও তাঁর পরিবারের ওপর বরকত দিন, যেমন ইবরাহীম ও তাঁর পরিবারকে দিয়েছেন; আপনি প্রশংসিত, মহিমান্বিত।'],
  duaMasura: ['আল্লাহুম্মা ইন্নী যালামতু নাফসী যুলমান কাসীরা, ওয়া লা ইয়াগফিরুয যুনূবা ইল্লা আনতা, ফাগফিরলী মাগফিরাতাম মিন ইনদিকা ওয়ারহামনী, ইন্নাকা আনতাল গাফূরুর রাহীম',
    'হে আল্লাহ, আমি নিজের ওপর অনেক জুলুম করেছি, আর আপনি ছাড়া কেউ গুনাহ মাফ করতে পারে না। তাই নিজের পক্ষ থেকে আমাকে ক্ষমা করুন, আমার ওপর দয়া করুন। আপনিই ক্ষমাশীল, পরম দয়ালু।'],
  salam: [null, 'আপনাদের ওপর শান্তি ও আল্লাহর রহমত বর্ষিত হোক।'], // pronunciation comes from the Bangla Abu Dawud text
  afterIstighfar: ['আস্তাগফিরুল্লাহ (৩ বার)। আল্লাহুম্মা আনতাস সালাম, ওয়া মিনকাস সালাম, তাবারাকতা ইয়া যাল জালালি ওয়াল ইকরাম', 'আমি আল্লাহর কাছে ক্ষমা চাই (৩ বার)। হে আল্লাহ, আপনিই শান্তি, শান্তি আপনার কাছ থেকেই আসে; আপনি বরকতময়, হে মহিমা ও সম্মানের মালিক।'],
  afterTasbih: ['সুবহানাল্লাহ, আলহামদুলিল্লাহ, আল্লাহু আকবার (৩৩ বার করে), তারপর: লা ইলাহা ইল্লাল্লাহু ওয়াহদাহু লা শারীকা লাহু, লাহুল মুলকু ওয়া লাহুল হামদু ওয়া হুয়া আলা কুল্লি শাইয়িন কাদীর', 'আল্লাহ পবিত্র, সব প্রশংসা আল্লাহর, আল্লাহ সবচেয়ে বড় (৩৩ বার করে)। আল্লাহ ছাড়া কোনো উপাস্য নেই, তিনি একক, তাঁর কোনো শরিক নেই; রাজত্ব ও প্রশংসা তাঁরই, তিনি সব কিছুর ওপর ক্ষমতাবান।'],
};
const SAY_NAME = { bismillah: 'বিসমিল্লাহ', wuduEnd: 'অজুর পরের দোয়া', wuduEnd2: 'এর সাথে', takbir: 'তাকবির', sana: 'সানা', taawwudh: 'আউযুবিল্লাহ', ruku: 'রুকুর তাসবিহ', qawmah: 'ওঠার সময়', qawmah2: 'দাঁড়িয়ে',
  sujud: 'সিজদার তাসবিহ', jalsah: 'দুই সিজদার মাঝে (ইচ্ছা হলে)', tashahhud: 'তাশাহহুদ (আত্তাহিয়্যাতু)', durood: 'দরুদ শরিফ', duaMasura: 'দোয়া মাসুরা', salam: 'সালাম', afterIstighfar: 'সালামের পর', afterTasbih: 'তাসবিহ' };

/* ---------- small vector maths ---------- */
const NS = 'http://www.w3.org/2000/svg';
const sv = (tag, attrs, parent) => { const n = document.createElementNS(NS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); parent?.append(n); return n; };
const lerp = (a, b, k) => a + (b - a) * k;
const lerpP = (a, b, k) => [lerp(a[0], b[0], k), lerp(a[1], b[1], k)];
const ease = (k) => (k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2);
// angles count from straight down, positive towards the qibla (+x): 0 down, 90 forward, 180 up
const dir = (a) => [Math.sin((a * Math.PI) / 180), Math.cos((a * Math.PI) / 180)];
const add = (p, v, s = 1) => [p[0] + v[0] * s, p[1] + v[1] * s];
const d = (...pts) => 'M' + pts.map((p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('L');
// two-bone inverse kinematics: where the joint (knee, elbow) sits between a root and an end; `pick` chooses one of the two answers
function ik(root, end, l1, l2, pick) {
  let dx = end[0] - root[0], dy = end[1] - root[1], dist = Math.hypot(dx, dy) || 0.01;
  const len = Math.min(l1 + l2 - 0.5, Math.max(Math.abs(l1 - l2) + 0.5, dist));
  dx *= len / dist; dy *= len / dist;
  const a = (l1 * l1 - l2 * l2 + len * len) / (2 * len), h = Math.sqrt(Math.max(0, l1 * l1 - a * a));
  const ux = dx / len, uy = dy / len, bx = root[0] + ux * a, by = root[1] + uy * a;
  return [pick([bx - uy * h, by + ux * h], [bx + uy * h, by - ux * h]), [root[0] + dx, root[1] + dy]];
}
const PICK = { fwd: (a, b) => (a[0] >= b[0] ? a : b), back: (a, b) => (a[0] <= b[0] ? a : b), down: (a, b) => (a[1] >= b[1] ? a : b), up: (a, b) => (a[1] <= b[1] ? a : b) };

/* ---------- the stage ---------- */
const C = { kurta: '#F3F4EF', kurtaFar: '#D8DDD3', pants: '#E6E2D6', skin: '#B98158', skinFar: '#9A6845', hair: '#2A2320', line: '#24453A', mat: '#0B4D3D', water: '#5AB4E6' };
const scene = $('#scene');
const defs = sv('defs', {}, scene);
defs.innerHTML = '<radialGradient id="wet"><stop offset="0" stop-color="#7FCBF2" stop-opacity=".75"/><stop offset="1" stop-color="#5AB4E6" stop-opacity=".25"/></radialGradient>';
// a limb: a dark outline under a coloured stroke, so the white kurta reads on the pale stage
function limb(g, w, color) {
  const o = sv('path', { fill: 'none', stroke: C.line, 'stroke-width': w + 5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
  const f = sv('path', { fill: 'none', stroke: color, 'stroke-width': w, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
  return (path) => { o.setAttribute('d', path); f.setAttribute('d', path); };
}

/* --- side view, for salah: the figure faces the qibla on the right --- */
const side = sv('g', {}, scene);
side.innerHTML = `<rect x="0" y="336" width="400" height="64" fill="#D9E6DD"/>
  <g transform="translate(330 22)"><image href="icons/kaaba.png" x="0" y="0" width="44" height="44"/></g>
  <text x="322" y="88" font-size="15" fill="${C.line}" font-family="Kalpurush, serif" text-anchor="end">কিবলার দিকে</text>
  <path d="M328 83h36m-8-6 8 6-8 6" fill="none" stroke="${C.line}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
// the figure is drawn at 1.18x, scaled from a point on the floor so the feet stay on the mat
const fig = sv('g', { transform: 'translate(-34 -60) scale(1.18)' }, side);
fig.innerHTML = `<rect x="104" y="328" width="236" height="9" rx="3" fill="${C.mat}"/><rect x="104" y="328" width="236" height="2.5" rx="1.2" fill="#E0B040"/>
  <path d="M312 328v-6a12 12 0 0 1 24 0v6" fill="none" stroke="#E0B040" stroke-width="2"/>`;
const sFar = sv('g', { opacity: 0.9 }, fig), sBody = sv('g', {}, fig), sNear = sv('g', {}, fig);
const S = {
  legF: limb(sFar, 20, C.pants), footF: limb(sFar, 9, C.skinFar), armF: limb(sFar, 13, C.kurtaFar), handF: sv('circle', { r: 7, fill: C.skinFar }, sFar),
  torso: limb(sBody, 44, C.kurta), shin: limb(sNear, 18, C.pants), foot: limb(sNear, 9, C.skin), thigh: limb(sNear, 30, C.kurta),
  arm: limb(sNear, 14, C.kurta), hand: sv('circle', { r: 7.5, fill: C.skin, stroke: C.line, 'stroke-width': 2 }, sNear),
};
const sHead = sv('g', {}, fig);
S.hair = sv('circle', { r: 20, fill: C.hair }, sHead);
S.face = sv('circle', { r: 17.5, fill: C.skin }, sHead);
S.ear = sv('ellipse', { rx: 3.5, ry: 5.5, fill: C.skinFar }, sHead);
S.turn = sv('path', { fill: 'none', stroke: '#B8860B', 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, fig);
S.turnTxt = sv('text', { 'font-size': 15, 'font-weight': 700, fill: '#7A5A12', 'text-anchor': 'middle', 'font-family': 'Kalpurush, serif' }, fig);

// postures. hip, hand and ankle are points; the knee and elbow are solved, so limbs never stretch
const P = {
  stand: { hip: [151, 197], torso: 180, hand: [157, 222], elbow: 'back', ankle: [152, 322], foot: 90 },
  takbir: { hip: [151, 197], torso: 180, hand: [166, 100], elbow: 'down', ankle: [152, 322], foot: 90 },
  qiyam: { hip: [151, 197], torso: 180, hand: [176, 180], elbow: 'back', ankle: [152, 322], foot: 90 },
  ruku: { hip: [140, 199], torso: 92, hand: [158, 262], elbow: 'back', ankle: [152, 322], foot: 90 },
  kneel: { hip: [176, 262], torso: 150, hand: [222, 296], elbow: 'back', ankle: [150, 318], foot: 57 },
  sujud: { hip: [205, 260], torso: 62, hand: [286, 326], elbow: 'up', ankle: [150, 318], foot: 57 },
  sit: { hip: [158, 296], torso: 178, hand: [210, 292], elbow: 'down', ankle: [150, 320], foot: 57 },
  rise: { hip: [178, 236], torso: 140, hand: [214, 284], elbow: 'back', ankle: [150, 320], foot: 70 },
};
P.salamR = { ...P.sit, turn: 1 };
P.salamL = { ...P.sit, turn: -1 };
P.dua = { ...P.sit, hand: [196, 236], elbow: 'down' };
const lerpPose = (a, b, k) => ({
  hip: lerpP(a.hip, b.hip, k), torso: lerp(a.torso, b.torso, k), hand: lerpP(a.hand, b.hand, k), ankle: lerpP(a.ankle, b.ankle, k),
  foot: lerp(a.foot, b.foot, k), turn: lerp(a.turn || 0, b.turn || 0, k), elbow: k < 0.5 ? a.elbow : b.elbow,
});
function drawSide(p) {
  const shoulder = add(p.hip, dir(p.torso), 72), head = add(p.hip, dir(p.torso), 98);
  const [knee, ankle] = ik(p.hip, p.ankle, 64, 62, PICK.fwd);
  const toe = add(ankle, dir(p.foot), 24), heel = add(ankle, dir(p.foot + 180), 5);
  const [elbow, hand] = ik(shoulder, p.hand, 50, 47, PICK[p.elbow]);
  const far = [-5, -2], o = (q) => add(q, far);
  S.legF(d(o(p.hip), o(knee), o(ankle))); S.footF(d(o(heel), o(toe)));
  S.armF(d(o(shoulder), o(elbow), o(hand))); S.handF.setAttribute('cx', hand[0] - 5); S.handF.setAttribute('cy', hand[1] - 2);
  S.torso(d(add(p.hip, dir(p.torso), 6), shoulder));
  S.shin(d(knee, ankle)); S.foot(d(heel, toe)); S.thigh(d(p.hip, lerpP(p.hip, knee, 0.82)));
  S.arm(d(shoulder, elbow, hand)); S.hand.setAttribute('cx', hand[0]); S.hand.setAttribute('cy', hand[1]);
  // the face side is lighter than the hair; on salam the head turns, so the face narrows and the ear swings
  const fwd = dir(p.torso - 90), t = p.turn || 0, back = add(head, fwd, -2.5), face = add(head, fwd, 2.5 * (1 - Math.abs(t)));
  S.hair.setAttribute('cx', back[0]); S.hair.setAttribute('cy', back[1]);
  S.face.setAttribute('cx', face[0]); S.face.setAttribute('cy', face[1]);
  const ear = add(head, fwd, -3 - t * 7);
  S.ear.setAttribute('cx', ear[0]); S.ear.setAttribute('cy', ear[1] + 2);
  // salam: a curved arrow over the head shows which way the face turns
  const on = Math.abs(t) > 0.3, [hx, hy] = head, s2 = t > 0 ? 1 : -1;
  S.turn.setAttribute('d', on ? `M${hx - 22 * s2} ${hy - 30}Q${hx} ${hy - 46} ${hx + 22 * s2} ${hy - 30}m${-9 * s2} -3l${9 * s2} 3-4 8` : '');
  S.turnTxt.textContent = on ? (t > 0 ? 'ডানে' : 'বামে') : '';
  S.turnTxt.setAttribute('x', hx); S.turnTxt.setAttribute('y', hy - 50);
}

/* --- front view, for wudu --- */
const front = sv('g', {}, scene);
front.innerHTML = `<rect x="0" y="352" width="400" height="48" fill="#C9DCE4"/>
  <ellipse cx="200" cy="384" rx="132" ry="26" fill="#9FC3D3"/><ellipse cx="200" cy="380" rx="112" ry="16" fill="#7FB3CB"/>
  <rect x="188" y="136" width="24" height="42" rx="8" fill="${C.skin}"/>
  <path d="M154 170Q200 160 246 170Q270 176 272 204L296 400H104L128 204Q130 176 154 170Z" fill="${C.kurta}" stroke="${C.line}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M186 168l14 30 14-30" fill="none" stroke="${C.line}" stroke-width="2.5" stroke-linejoin="round"/>
  <ellipse cx="166" cy="112" rx="7" ry="11" fill="${C.skinFar}"/><ellipse cx="234" cy="112" rx="7" ry="11" fill="${C.skinFar}"/>
  <ellipse cx="200" cy="106" rx="34" ry="42" fill="${C.skin}"/>
  <path d="M166 98C164 56 236 56 234 98C226 78 174 78 166 98Z" fill="${C.hair}"/>`;
const fZones = sv('g', {}, front), fArms = sv('g', {}, front), fTop = sv('g', {}, front);
const zone = (tag, attrs) => sv(tag, { ...attrs, class: 'zone', fill: 'url(#wet)', stroke: '#0A6650', 'stroke-width': 2.5, 'stroke-dasharray': '6 4', opacity: 0 }, fZones);
const Z = {
  face: zone('ellipse', { cx: 200, cy: 108, rx: 37, ry: 44 }), mouth: zone('ellipse', { cx: 200, cy: 132, rx: 12, ry: 7 }), nose: zone('ellipse', { cx: 200, cy: 114, rx: 8, ry: 10 }),
  head: zone('path', { d: 'M166 96C162 52 238 52 234 96C224 80 176 80 166 96Z' }), ears: zone('path', { d: 'M159 112a7 11 0 1 0 14 0a7 11 0 1 0-14 0M227 112a7 11 0 1 0 14 0a7 11 0 1 0-14 0' }),
  heart: zone('circle', { cx: 226, cy: 236, r: 20 }), arm: zone('path', { fill: 'none' }), hands: zone('path', {}),
};
Z.arm.setAttribute('stroke-width', 26); Z.arm.setAttribute('stroke', 'rgba(90,180,230,.55)'); Z.arm.setAttribute('stroke-dasharray', ''); Z.arm.setAttribute('stroke-linecap', 'round');
const RS = [146, 192], LS = [254, 192], UA = 80, FA = 76;
const F = {
  rUp: limb(fArms, 21, C.skin), rSleeve: limb(fArms, 25, C.kurta), rFore: limb(fArms, 19, C.skin),
  lUp: limb(fArms, 21, C.skin), lSleeve: limb(fArms, 25, C.kurta), lFore: limb(fArms, 19, C.skin),
  rHand: sv('circle', { r: 12, fill: C.skin, stroke: C.line, 'stroke-width': 2.5 }, fTop), lHand: sv('circle', { r: 12, fill: C.skin, stroke: C.line, 'stroke-width': 2.5 }, fTop),
};
const RH0 = [126, 336], LH0 = [274, 336];
// the figure's right hand is on the viewer's left
function drawFront(s) {
  // seen from the front an arm foreshortens when it reaches forward, so the elbow is not solved exactly:
  // it drops and swings outward by however much the arm is shorter than its full reach
  const arm = (sh, target, up, sleeve, fore, h) => {
    const out = sh[0] < 200 ? -1 : 1, dist = Math.hypot(target[0] - sh[0], target[1] - sh[1]), reach = UA + FA;
    const hand = dist > reach ? add(sh, [(target[0] - sh[0]) / dist, (target[1] - sh[1]) / dist], reach) : target;
    const slack = Math.max(0, reach - Math.min(dist, reach)), el = add(lerpP(sh, hand, 0.5), [out * 0.32 * slack, 0.46 * slack]);
    up(d(sh, el)); sleeve(d(sh, lerpP(sh, el, 0.5))); fore(d(el, hand));
    h.setAttribute('cx', hand[0]); h.setAttribute('cy', hand[1]);
    return { el, hand };
  };
  // one hand can rub along the other arm, from the fingers past the elbow
  let r, l;
  if (s.rub === 'r') { r = arm(RS, s.rh, F.rUp, F.rSleeve, F.rFore, F.rHand); l = arm(LS, add(lerpP(r.hand, r.el, s.k), [0, -12]), F.lUp, F.lSleeve, F.lFore, F.lHand); }
  else if (s.rub === 'l') { l = arm(LS, s.lh, F.lUp, F.lSleeve, F.lFore, F.lHand); r = arm(RS, add(lerpP(l.hand, l.el, s.k), [0, -12]), F.rUp, F.rSleeve, F.rFore, F.rHand); }
  else { r = arm(RS, s.rh || RH0, F.rUp, F.rSleeve, F.rFore, F.rHand); l = arm(LS, s.lh || LH0, F.lUp, F.lSleeve, F.lFore, F.lHand); }
  for (const k in Z) Z[k].setAttribute('opacity', 0);
  const z = Z[s.zone];
  if (z) {
    z.setAttribute('opacity', 0.35 + 0.65 * (s.wet ?? 1));
    if (s.zone === 'arm') { const a = s.rub === 'r' ? r : l; z.setAttribute('d', d(a.hand, add(a.el, [a.el[0] - a.hand[0], a.el[1] - a.hand[1]], 0.12))); }
    if (s.zone === 'hands') z.setAttribute('d', `M${r.hand[0] - 20} ${r.hand[1]}a20 20 0 1 0 40 0a20 20 0 1 0-40 0M${l.hand[0] - 20} ${l.hand[1]}a20 20 0 1 0 40 0a20 20 0 1 0-40 0`);
  }
  return { r: r.hand, l: l.hand };
}

/* --- close-up of the foot, for the last washing step --- */
const foot = sv('g', {}, scene);
foot.innerHTML = `<rect x="0" y="322" width="400" height="78" fill="#C9DCE4"/><ellipse cx="250" cy="330" rx="150" ry="16" fill="#9FC3D3"/>
  <path d="M128-10H206L214 232C246 250 300 266 338 280C362 289 362 314 340 320L172 322C144 322 134 300 140 272Z" fill="${C.skin}" stroke="${C.line}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M122-10H212L210 96H126Z" fill="${C.pants}" stroke="${C.line}" stroke-width="3"/><path d="M124 80H212" stroke="${C.line}" stroke-width="2"/>
  <path d="M318 286v32M328 290v28M338 294v24" stroke="${C.skinFar}" stroke-width="2" stroke-linecap="round"/>
  <circle cx="204" cy="262" r="9" fill="${C.skinFar}"/>`;
const fz = sv('path', { d: 'M138 224L216 218C246 250 300 266 338 280C362 289 362 314 340 320L172 322C144 322 134 300 140 272Z', class: 'zone', fill: 'url(#wet)', stroke: '#0A6650', 'stroke-width': 2.5, 'stroke-dasharray': '6 4' }, foot);
const fArm = limb(foot, 22, C.skin), fHand = sv('ellipse', { rx: 18, ry: 13, fill: C.skin, stroke: C.line, 'stroke-width': 2.5 }, foot);
const ankleRing = sv('circle', { cx: 204, cy: 262, r: 18, fill: 'none', stroke: '#E0B040', 'stroke-width': 3, 'stroke-dasharray': '5 4' }, foot);
function drawFoot(s) {
  foot.setAttribute('transform', s.left ? 'translate(400 0) scale(-1 1)' : '');
  fz.setAttribute('opacity', 0.35 + 0.65 * (s.wet ?? 1));
  fArm(d([420, 40], [330, 120], s.hand)); fHand.setAttribute('cx', s.hand[0]); fHand.setAttribute('cy', s.hand[1]);
  ankleRing.setAttribute('opacity', s.ankle ? 1 : 0);
  return { r: s.hand, l: s.hand };
}

/* --- water drops: a small pool of circles that fall from wherever the water is --- */
const dropsG = sv('g', {}, scene), drops = [];
for (let i = 0; i < 26; i++) drops.push({ n: sv('ellipse', { rx: 2.6, ry: 3.6, fill: C.water, opacity: 0 }, dropsG), life: 0 });
let dropClock = 0;
function stepDrops(dt, from, flip) {
  dropClock += dt;
  if (from && dropClock > 70) {
    dropClock = 0;
    const p = drops.find((q) => q.life <= 0);
    if (p) { const [x, y] = from[Math.floor(Math.random() * from.length)]; Object.assign(p, { x: (flip ? 400 - x : x) + (Math.random() * 16 - 8), y: y + 6, vy: 0.04, life: 900 }); }
  }
  for (const p of drops) {
    if (p.life <= 0) { p.n.setAttribute('opacity', 0); continue; }
    p.life -= dt; p.vy += 0.0012 * dt; p.y += p.vy * dt;
    p.n.setAttribute('cx', p.x); p.n.setAttribute('cy', p.y); p.n.setAttribute('opacity', Math.max(0, Math.min(1, p.life / 300)) * 0.9);
  }
}

/* ---------- timelines ---------- */
// salah: a list of [posture, ms to move there, ms to hold, extras]; the first move starts from wherever the figure was
function seq(parts) {
  let t0 = 0;
  const segs = parts.map(([pose, move, hold, x = {}]) => { const s = { pose: P[pose], move, hold, x, t0 }; t0 += move + hold; return s; });
  return { scene: 'side', len: t0, end: segs.at(-1).pose, frame(t, from) {
    let i = segs.findIndex((s) => t < s.t0 + s.move + s.hold);
    if (i < 0) i = segs.length - 1;
    const s = segs[i], prev = i ? segs[i - 1].pose : from || segs.at(-1).pose;
    const k = s.move ? Math.min(1, (t - s.t0) / s.move) : 1;
    return { pose: lerpPose(prev, s.pose, ease(k)), ...s.x };
  } };
}
// wudu: n repetitions of `per` ms; fn(p, i) gives the hands and extras for progress p (0..1) through repetition i
function reps(n, per, fn, x = {}, sc = 'front') {
  return { scene: sc, len: n * per, frame(t) {
    const i = Math.min(n - 1, Math.floor(t / per)), p = Math.min(1, (t - i * per) / per);
    return { ...x, wet: (i + p) / n, count: n > 1 ? [i + 1, n] : null, ...fn(p, i) };
  } };
}
// keyframes [[p, [x, y]], ...], eased between neighbours
function kf(keys, p) {
  const i = keys.findIndex((k) => k[0] > p);
  if (i === 0) return keys[0][1];
  if (i < 0) return keys.at(-1)[1];
  const [p0, a] = keys[i - 1], [p1, b] = keys[i];
  return lerpP(a, b, ease((p - p0) / (p1 - p0)));
}
const mirror = (keys) => keys.map(([p, [x, y]]) => [p, [400 - x, y]]);
const still = (ms, x) => ({ scene: 'front', len: ms, frame: () => ({ rh: RH0, lh: LH0, ...x }) });

/* ---------- the guides ---------- */
const FACE_R = [[0, [182, 318]], [0.22, [184, 70]], [0.5, [166, 112]], [0.75, [190, 152]], [0.9, [186, 250]], [1, [182, 318]]];
const WUDU = [
  { title: 'নিয়ত করুন', kind: 'sunnah', how: ['মনে মনে ঠিক করুন: আমি আল্লাহকে খুশি করার জন্য অজু করছি।', 'নিয়ত মনের কাজ, মুখে বলা জরুরি নয়।', 'পরিষ্কার পানি নিন, পানির অপচয় করবেন না।'],
    note: 'শাফেয়ি ও অন্য কয়েকটি মাযহাবে নিয়ত অজুর ফরজ। হানাফি মাযহাবে সুন্নত।', mistakes: ['ঘড়ি, আংটি বা নেইলপলিশ রেখে দেওয়া, যাতে পানি চামড়ায় পৌঁছায় না।'],
    anim: still(3200, { zone: 'heart', cap: 'নিয়ত মনে মনে, আল্লাহর জন্য' }) },
  { title: 'বিসমিল্লাহ বলুন', kind: 'sunnah', how: ['অজু শুরু করার আগে বলুন “বিসমিল্লাহ”।'], say: ['bismillah'], mistakes: ['বাথরুমের ভেতরে থাকলে মুখে না বলে মনে মনে বলুন।'],
    anim: still(3000, { say: 'bismillah', cap: '“বিসমিল্লাহ”' }) },
  { title: 'দুই হাত কবজি পর্যন্ত ধোয়া', kind: 'sunnah', times: '৩ বার', area: 'আঙুলের মাথা থেকে কবজি পর্যন্ত',
    how: ['আগে ডান হাত, তারপর বাম হাতে পানি ঢালুন।', 'দুই হাত ঘষে ধুয়ে নিন, আঙুলের ফাঁকে আঙুল ঢুকিয়ে খিলাল করুন।', 'আংটি থাকলে নেড়ে নিন, যেন নিচে পানি যায়।'],
    mistakes: ['আঙুলের ফাঁক শুকনো থেকে যাওয়া।'],
    anim: reps(3, 2000, (p) => { const w = Math.sin(p * Math.PI * 6) * 13; return { rh: [190 + w, 300 + Math.cos(p * Math.PI * 6) * 6], lh: [210 - w, 304], drip: 'hands' }; }, { zone: 'hands', cap: 'দুই হাত ঘষে কবজি পর্যন্ত' }) },
  { title: 'কুলি করা', kind: 'sunnah', times: '৩ বার', area: 'পুরো মুখের ভেতর',
    how: ['ডান হাতে পানি নিয়ে মুখে দিন।', 'মুখের ভেতর ভালো করে পানি ঘুরিয়ে ফেলে দিন।', 'রোজা না থাকলে গড়গড়া করুন। মিসওয়াক করা সুন্নত।'],
    mistakes: ['রোজার সময় গড়গড়া করা, এতে গলায় পানি চলে যেতে পারে।'],
    anim: reps(3, 2300, (p) => ({ rh: kf([[0, [196, 332]], [0.28, [198, 326]], [0.52, [198, 146]], [0.8, [198, 146]], [1, [196, 332]]], p), drip: p < 0.3 || p > 0.8 ? 'r' : null }), { zone: 'mouth', cap: 'ডান হাতে পানি নিয়ে কুলি' }) },
  { title: 'নাকে পানি দেওয়া', kind: 'sunnah', times: '৩ বার', area: 'নাকের নরম অংশ পর্যন্ত',
    how: ['ডান হাতে পানি নিয়ে নাকে দিন, আলতো করে টেনে নিন।', 'বাম হাত দিয়ে নাক ঝেড়ে পরিষ্কার করুন।'],
    mistakes: ['রোজার সময় জোরে টেনে পানি ভেতরে নেওয়া।'],
    anim: reps(3, 2400, (p) => ({ rh: kf([[0, [196, 332]], [0.25, [198, 326]], [0.45, [196, 128]], [0.6, [196, 128]], [0.75, [150, 250]], [1, [126, 336]]], p),
      lh: kf([[0, LH0], [0.55, LH0], [0.7, [206, 126]], [0.85, [206, 130]], [1, LH0]], p), drip: p < 0.28 ? 'r' : p > 0.7 && p < 0.86 ? 'l' : null }), { zone: 'nose', cap: 'ডান হাতে পানি, বাম হাতে ঝাড়ুন' }) },
  { title: 'মুখমণ্ডল ধোয়া', kind: 'fard', times: '৩ বার', area: 'কপালের চুলের গোড়া থেকে থুতনির নিচ, এক কানের লতি থেকে আরেক কানের লতি',
    how: ['দুই হাতে পানি নিয়ে পুরো মুখে দিন।', 'কপাল থেকে থুতনি আর এক কান থেকে আরেক কান পর্যন্ত, কোথাও যেন শুকনো না থাকে।', 'ঘন দাড়ি থাকলে আঙুল দিয়ে খিলাল করুন (সুন্নত)।'],
    mistakes: ['ভ্রু, চোখের কোণ, কানের পাশ আর থুতনির নিচ শুকনো থেকে যাওয়া।'],
    anim: reps(3, 2600, (p) => ({ rh: kf(FACE_R, p), lh: kf(mirror(FACE_R), p), drip: p > 0.65 && p < 0.9 ? 'both' : null }), { zone: 'face', cap: 'কপাল থেকে থুতনি, এক কান থেকে আরেক কান' }) },
  { title: 'দুই হাত কনুইসহ ধোয়া', kind: 'fard', times: 'প্রতি হাত ৩ বার', area: 'আঙুলের মাথা থেকে কনুইসহ',
    how: ['আগে ডান হাত, তারপর বাম হাত।', 'আঙুলের মাথা থেকে শুরু করে কনুইয়ের একটু ওপর পর্যন্ত ঘষে ধুয়ে নিন।', 'কনুই ধোয়া ফরজের অংশ, এটি বাদ দেবেন না।'],
    mistakes: ['কনুই বা কনুইয়ের পেছন শুকনো থেকে যাওয়া।', 'হাতা পুরো না গুটিয়ে শুধু কবজি পর্যন্ত ধোয়া।'],
    anim: reps(6, 2300, (p, i) => {
      const k = p < 0.72 ? ease(p / 0.72) * 1.12 : 1.12 * (1 - ease((p - 0.72) / 0.28));
      return i < 3 ? { rub: 'r', rh: [258, 262], k, cap: 'ডান হাত, কনুইসহ', drip: 'r', count: [i + 1, 3], wet: (i + p) / 3 }
        : { rub: 'l', lh: [142, 262], k, cap: 'এবার বাম হাত, কনুইসহ', drip: 'l', count: [i - 2, 3], wet: (i - 3 + p) / 3 };
    }, { zone: 'arm' }) },
  { title: 'মাথা মাসাহ করা', kind: 'fard', times: '১ বার', area: 'মাথার কমপক্ষে চার ভাগের এক ভাগ (পুরো মাথা সুন্নত)',
    how: ['দুই হাত নতুন পানিতে ভিজিয়ে ঝেড়ে নিন।', 'কপালের চুলের গোড়া থেকে হাত পেছনের দিকে টেনে নিন, তারপর আবার সামনে আনুন।', 'মাসাহ মানে ভেজা হাত বুলিয়ে দেওয়া, পানি ঢালা নয়।'],
    note: 'মাথার চার ভাগের এক ভাগ মাসাহ ফরজ (হানাফি)। অন্য মাযহাবে পরিমাণ নিয়ে ভিন্নমত আছে।',
    anim: reps(1, 3400, (p) => ({ rh: kf([[0, RH0], [0.2, [180, 80]], [0.55, [186, 58]], [0.8, [180, 80]], [1, [180, 80]]], p), lh: kf([[0, LH0], [0.2, [220, 80]], [0.55, [214, 58]], [0.8, [220, 80]], [1, [220, 80]]], p) }),
      { zone: 'head', cap: 'ভেজা হাত কপাল থেকে মাথার পেছনে', wet: 1 }) },
  { title: 'কান মাসাহ করা', kind: 'sunnah', times: '১ বার', area: 'কানের ভেতর ও পেছন',
    how: ['মাথা মাসাহর সেই ভেজা হাতেই কান মাসাহ করুন।', 'শাহাদাত আঙুল দিয়ে কানের ভেতরের ভাঁজ, বুড়ো আঙুল দিয়ে কানের পেছন।'],
    note: 'হাতের পিঠ দিয়ে ঘাড় মাসাহ করা নিয়ে আলেমদের মতভেদ আছে। হানাফি মাযহাবে অনেকে এটিকে মুস্তাহাব বলেন।',
    anim: reps(1, 3200, (p) => { const w = Math.sin(p * Math.PI * 4) * 3; return { rh: kf([[0, RH0], [0.25, [166, 114]], [1, [166, 114]]], p).map((v, j) => v + (p > 0.25 && j ? w : 0)), lh: kf([[0, LH0], [0.25, [234, 114]], [1, [234, 114]]], p).map((v, j) => v + (p > 0.25 && j ? w : 0)) }; },
      { zone: 'ears', cap: 'কানের ভেতর আর পেছন', wet: 1 }) },
  { title: 'দুই পা টাখনুসহ ধোয়া', kind: 'fard', times: 'প্রতি পা ৩ বার', area: 'আঙুলের মাথা থেকে টাখনুসহ (গোড়ালির দুই পাশের উঁচু হাড়)',
    how: ['আগে ডান পা, তারপর বাম পা।', 'বাম হাত দিয়ে ঘষে ধুয়ে নিন, টাখনু আর গোড়ালি যেন ভেজে।', 'বাম হাতের কনিষ্ঠা আঙুল দিয়ে পায়ের আঙুলের ফাঁকে খিলাল করুন।'],
    mistakes: ['গোড়ালি, টাখনু আর পায়ের আঙুলের ফাঁক শুকনো থেকে যাওয়া।'],
    anim: reps(6, 2600, (p, i) => { const w = p < 0.3 ? Math.sin(p * Math.PI * 10) * 8 : 0;
      return { left: i >= 3, hand: kf([[0, [336, 292]], [0.3, [326 + w, 298]], [0.55, [262, 266]], [0.75, [206, 250]], [0.9, [156, 296]], [1, [336, 292]]], p), ankle: p > 0.6 && p < 0.85,
        cap: i < 3 ? 'আগে ডান পা, টাখনুসহ' : 'এবার বাম পা, টাখনুসহ', count: [(i % 3) + 1, 3], wet: ((i % 3) + p) / 3, drip: 'r' }; }, {}, 'foot') },
  { title: 'অজুর পরের দোয়া', kind: 'mustahab', how: ['অজু শেষ হলে এই দোয়া পড়ুন।', 'এরপর চাইলে দুই রাকাত তাহিয়্যাতুল অজু নামাজ পড়তে পারেন।'], say: ['wuduEnd', 'wuduEnd2'],
    anim: still(4200, { say: 'wuduEnd', cap: 'অজু শেষ, এবার দোয়া' }) },
];

// one rak'ah of standing recitation; the long holds give time to read along
const NAMAZ = [
  { id: 'niyyah', title: 'প্রস্তুতি ও নিয়ত', kind: 'fard', kindNote: 'শর্ত', how: ['অজু করে পবিত্র জায়গায়, সতর ঢেকে কিবলার দিকে মুখ করে দাঁড়ান।', 'দুই পায়ের মাঝে চার আঙুলের মতো ফাঁক রাখুন, চোখ সিজদার জায়গায়।', 'মনে মনে ঠিক করুন কোন নামাজ পড়ছেন, যেমন “ফজরের দুই রাকাত ফরজ”।'],
    note: 'নিয়ত মনের কাজ। আরবিতে বা মুখে বলা জরুরি নয়।', anim: seq([['stand', 900, 2400, { cap: 'কিবলার দিকে সোজা হয়ে দাঁড়ান' }]]) },
  { id: 'takbir', title: 'তাকবিরে তাহরিমা', kind: 'fard', how: ['দুই হাত কান পর্যন্ত তুলুন, হাতের তালু কিবলার দিকে।', '“আল্লাহু আকবার” বলুন। এখন থেকে নামাজ শুরু।'], say: ['takbir'],
    women: 'নারীরা হাত কাঁধ পর্যন্ত তোলেন (হানাফি)।', mistakes: ['হাত তোলার আগেই তাকবির শেষ করে ফেলা।', 'কান ছুঁয়ে দেওয়া জরুরি মনে করা।'],
    anim: seq([['stand', 700, 500], ['takbir', 900, 1600, { say: 'takbir', cap: 'দুই হাত কান পর্যন্ত তুলে “আল্লাহু আকবার”' }]]) },
  { id: 'qiyam', title: 'হাত বাঁধা ও সানা', kind: 'sunnah', how: ['ডান হাত বাম হাতের ওপর রেখে নাভির নিচে বাঁধুন।', 'নিচু স্বরে সানা পড়ুন।'], say: ['sana'],
    women: 'নারীরা বুকের ওপর হাত বাঁধেন (হানাফি)।', mistakes: ['হাত বাঁধার পর বারবার নাড়াচাড়া করা।'],
    anim: seq([['qiyam', 1000, 4200, { say: 'sana', cap: 'হাত বেঁধে সানা' }]]) },
  { id: 'taawwudh', title: 'আউযুবিল্লাহ ও বিসমিল্লাহ', kind: 'sunnah', how: ['আউযুবিল্লাহ পড়ুন, তারপর বিসমিল্লাহির রাহমানির রাহীম।'], say: ['taawwudh'], quran: { key: '1:1', label: 'বিসমিল্লাহ' },
    anim: seq([['qiyam', 600, 3200, { say: 'taawwudh', cap: 'আউযুবিল্লাহ, বিসমিল্লাহ' }]]) },
  { id: 'fatiha', title: 'সূরা ফাতিহা', kind: 'wajib', how: ['পুরো সূরা ফাতিহা পড়ুন। শেষে নিচু স্বরে “আমিন” বলুন।', 'ইমামের পেছনে থাকলে হানাফি মাযহাবে চুপ থাকুন।'], quran: { ch: 1, label: 'সূরা ফাতিহা' },
    note: 'জামাতে ইমামের পেছনে সূরা ফাতিহা পড়া নিয়ে মাযহাবগুলোর মধ্যে ভিন্নমত আছে।', mistakes: ['খুব তাড়াহুড়া করে পড়া, যাতে শব্দ ঠিক থাকে না।'],
    anim: seq([['qiyam', 500, 6000, { cap: 'সূরা ফাতিহা পড়ুন' }]]) },
  { id: 'surah', title: 'আরেকটি সূরা মেলানো', kind: 'wajib', how: ['ফাতিহার পর কুরআনের যেকোনো সূরা বা অন্তত তিনটি ছোট আয়াত পড়ুন।', 'এখানে উদাহরণ সূরা ইখলাস।'], quran: { ch: 112, label: 'সূরা ইখলাস' },
    note: 'ফরজ নামাজের প্রথম দুই রাকাতে সূরা মেলানো ওয়াজিব। সুন্নত ও নফলে সব রাকাতে।', anim: seq([['qiyam', 500, 4200, { cap: 'একটি সূরা মেলান' }]]) },
  { id: 'ruku', title: 'রুকু', kind: 'fard', how: ['“আল্লাহু আকবার” বলে ঝুঁকে পড়ুন।', 'পিঠ আর মাথা সমান রাখুন, আঙুল ছড়িয়ে দুই হাঁটু ধরুন।', 'কমপক্ষে তিনবার তাসবিহ পড়ুন।'], say: ['ruku'],
    women: 'নারীরা কম ঝোঁকেন, আঙুল মিলিয়ে হাঁটুতে হাত রাখেন (হানাফি)।', mistakes: ['মাথা পিঠের চেয়ে নিচু বা উঁচু রাখা।', 'স্থির না হয়ে তাড়াতাড়ি উঠে যাওয়া।'],
    anim: seq([['qiyam', 700, 300], ['ruku', 1100, 300, { say: 'takbir', cap: '“আল্লাহু আকবার” বলে রুকুতে' }], ['ruku', 0, 1300, { say: 'ruku', count: [1, 3] }], ['ruku', 0, 1300, { say: 'ruku', count: [2, 3] }], ['ruku', 0, 1300, { say: 'ruku', count: [3, 3] }]]) },
  { id: 'qawmah', title: 'রুকু থেকে সোজা হয়ে দাঁড়ানো', kind: 'wajib', how: ['“সামিআল্লাহু লিমান হামিদাহ” বলতে বলতে সোজা হয়ে দাঁড়ান।', 'দাঁড়িয়ে বলুন “রব্বানা ওয়া লাকাল হামদ”।', 'পুরো সোজা হয়ে এক মুহূর্ত স্থির থাকুন।'], say: ['qawmah', 'qawmah2'],
    mistakes: ['পুরো সোজা না হয়েই সিজদায় চলে যাওয়া।'],
    anim: seq([['ruku', 500, 200], ['stand', 1200, 900, { say: 'qawmah', cap: 'উঠতে উঠতে “সামিআল্লাহু লিমান হামিদাহ”' }], ['stand', 0, 1600, { say: 'qawmah2', cap: 'দাঁড়িয়ে “রব্বানা ওয়া লাকাল হামদ”' }]]) },
  { id: 'sujud', title: 'সিজদা', kind: 'fard', how: ['“আল্লাহু আকবার” বলে প্রথমে হাঁটু, তারপর হাত, তারপর নাক ও কপাল মাটিতে রাখুন।', 'হাত দুটি কানের বরাবর, আঙুল মিলিয়ে কিবলার দিকে।', 'কনুই মাটি থেকে ওপরে, পেট উরু থেকে আলাদা। কমপক্ষে তিনবার তাসবিহ।'], say: ['sujud'],
    women: 'নারীরা শরীর গুটিয়ে, পেট উরুর সাথে মিলিয়ে, কনুই মাটিতে রেখে সিজদা করেন (হানাফি)।', mistakes: ['নাক বা পায়ের আঙুল মাটি থেকে উঠে যাওয়া।', 'কনুই মাটিতে বিছিয়ে দেওয়া (পুরুষদের জন্য)।'],
    anim: seq([['stand', 600, 200], ['kneel', 1000, 0, { say: 'takbir', cap: 'আগে হাঁটু, তারপর হাত' }], ['sujud', 900, 300, { say: 'takbir', cap: 'তারপর নাক ও কপাল' }], ['sujud', 0, 1300, { say: 'sujud', count: [1, 3] }], ['sujud', 0, 1300, { say: 'sujud', count: [2, 3] }], ['sujud', 0, 1300, { say: 'sujud', count: [3, 3] }]]) },
  { id: 'jalsah', title: 'দুই সিজদার মাঝে বসা', kind: 'wajib', how: ['“আল্লাহু আকবার” বলে উঠে বসুন।', 'বাম পা বিছিয়ে তার ওপর বসুন, ডান পা খাড়া রাখুন, আঙুল কিবলার দিকে।', 'স্থির হয়ে বসুন। চাইলে দোয়াটি পড়ুন।'], say: ['jalsah'],
    women: 'নারীরা দুই পা ডান দিকে বের করে বসেন (হানাফি)।', mistakes: ['পুরো না বসে আধা ওঠা অবস্থায় আবার সিজদায় যাওয়া।'],
    anim: seq([['sujud', 400, 200], ['sit', 1200, 2600, { say: 'jalsah', cap: 'উঠে স্থির হয়ে বসুন' }]]) },
  { id: 'sujud2', title: 'দ্বিতীয় সিজদা', kind: 'fard', how: ['“আল্লাহু আকবার” বলে আবার আগের মতো সিজদা করুন।', 'কমপক্ষে তিনবার তাসবিহ পড়ুন।'], say: ['sujud'],
    anim: seq([['sit', 500, 200], ['sujud', 1100, 300, { say: 'takbir', cap: 'আবার সিজদায়' }], ['sujud', 0, 1300, { say: 'sujud', count: [1, 3] }], ['sujud', 0, 1300, { say: 'sujud', count: [2, 3] }], ['sujud', 0, 1300, { say: 'sujud', count: [3, 3] }]]) },
  { id: 'rise', title: 'দ্বিতীয় রাকাতের জন্য দাঁড়ানো', kind: 'fard', how: ['“আল্লাহু আকবার” বলে সোজা দাঁড়িয়ে যান।', 'দ্বিতীয় রাকাতে সানা পড়বেন না; বিসমিল্লাহ, ফাতিহা আর একটি সূরা পড়ুন।', 'তারপর আগের মতো রুকু, কওমা আর দুই সিজদা।'],
    anim: seq([['sujud', 400, 200], ['rise', 900, 0, { say: 'takbir' }], ['stand', 900, 600, { cap: 'দাঁড়িয়ে আবার ফাতিহা থেকে' }], ['qiyam', 700, 1400, { cap: 'দ্বিতীয় রাকাত' }]]) },
  { id: 'tashahhud', title: 'বৈঠক ও তাশাহহুদ', kind: 'wajib', kindNote: 'শেষ বৈঠক ফরজ', how: ['দ্বিতীয় রাকাতের দ্বিতীয় সিজদার পর আগের মতো বসুন।', 'হাত দুটি উরুর ওপর, আঙুল হাঁটুর দিকে।', 'তাশাহহুদ পড়ুন। “আশহাদু আল লা ইলাহা” বলার সময় ডান হাতের শাহাদাত আঙুল তুলুন।'], say: ['tashahhud'],
    note: 'তিন বা চার রাকাতের নামাজে দুই রাকাত পর শুধু তাশাহহুদ পড়ে উঠে দাঁড়ান।', anim: seq([['sit', 1000, 5200, { say: 'tashahhud', cap: 'বসে তাশাহহুদ' }]]) },
  { id: 'durood', title: 'দরুদ শরিফ', kind: 'sunnah', how: ['শেষ বৈঠকে তাশাহহুদের পর দরুদ শরিফ পড়ুন।'], say: ['durood'], anim: seq([['sit', 400, 5200, { say: 'durood', cap: 'দরুদ শরিফ' }]]) },
  { id: 'dua', title: 'দোয়া মাসুরা', kind: 'sunnah', how: ['দরুদের পর সালামের আগে এই দোয়া পড়ুন।'], say: ['duaMasura'], anim: seq([['sit', 400, 4600, { say: 'duaMasura', cap: 'সালামের আগে দোয়া' }]]) },
  { id: 'salam', title: 'সালাম ফেরানো', kind: 'wajib', how: ['প্রথমে ডান দিকে মুখ ফিরিয়ে বলুন “আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ”।', 'তারপর বাম দিকে একইভাবে। নামাজ শেষ।'], say: ['salam'],
    mistakes: ['মুখ পুরো না ফিরিয়ে শুধু চোখ ঘোরানো।'],
    anim: seq([['sit', 500, 400], ['salamR', 900, 1300, { say: 'salam', cap: 'আগে ডান দিকে' }], ['sit', 500, 0], ['salamL', 800, 1300, { say: 'salam', cap: 'তারপর বাম দিকে' }], ['sit', 600, 700, { cap: 'নামাজ শেষ' }]]) },
  { id: 'after', title: 'নামাজের পরে', kind: 'mustahab', how: ['সালামের পর তিনবার ইস্তিগফার ও এই দোয়া।', 'তারপর তাসবিহ: সুবহানাল্লাহ, আলহামদুলিল্লাহ, আল্লাহু আকবার ৩৩ বার করে।'], say: ['afterIstighfar', 'afterTasbih'],
    anim: seq([['dua', 900, 3800, { say: 'afterIstighfar', cap: 'নামাজের পরের যিকির' }]]) },
];
// the full two rak'ah, for practice: the second rak'ah repeats the standing to the second sujud without sana
const PRAY_ALL = ['niyyah', 'takbir', 'qiyam', 'taawwudh', 'fatiha', 'surah', 'ruku', 'qawmah', 'sujud', 'jalsah', 'sujud2', 'rise', 'taawwudh', 'fatiha', 'surah', 'ruku', 'qawmah', 'sujud', 'jalsah', 'sujud2', 'tashahhud', 'durood', 'dua', 'salam'];
const GUIDES = { wudu: { steps: WUDU, all: WUDU.map((_, i) => i), allLbl: 'পুরো অজু একটানা দেখুন' },
  namaz: { steps: NAMAZ, all: PRAY_ALL.map((id) => NAMAZ.findIndex((s) => s.id === id)), allLbl: 'পুরো ২ রাকাত নামাজ একটানা' } };
const KIND = { fard: 'ফরজ', wajib: 'ওয়াজিব', sunnah: 'সুন্নত', mustahab: 'মুস্তাহাব' };

/* ---------- Quran passages, live from Quran.com ---------- */
const qCache = new Map();
function quranOf(q) {
  const k = q.key || q.ch;
  if (!qCache.has(k)) {
    const path = q.key ? `/verses/by_key/${q.key}?language=bn&translations=${TRANSLATIONS[0].id}&fields=text_uthmani&audio=${RECITER.id}`
      : `/verses/by_chapter/${q.ch}?language=bn&translations=${TRANSLATIONS[0].id}&fields=text_uthmani&per_page=50`;
    const audio = q.key ? null : api(`/chapter_recitations/${RECITER.id}/${q.ch}`).then((r) => r.audio_file.audio_url).catch(() => null);
    qCache.set(k, Promise.all([api(path), audio]).then(([r, a]) => {
      const vs = r.verses || [r.verse];
      return { vs, audio: a || (vs[0].audio ? audioUrl(vs[0].audio.url) : null) };
    }).catch((e) => { qCache.delete(k); throw e; }));
  }
  return qCache.get(k);
}

/* ---------- the page ---------- */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const audio = $('#audio');
let guide = location.hash === '#namaz' ? 'namaz' : 'wudu', idx = 0, allAt = -1, playing = !reduce, t = 0, from = null, lastPose = P.stand, queue = [], queueDone = true;
const G = () => GUIDES[guide], cur = () => G().steps[idx];

function sayCard(k) {
  const r = RECITE[k], [say, mean] = BNSAY[k], pron = say || r.bnSaid;
  return `<div class="say"><div class="say__top"><p class="say__lbl">${SAY_NAME[k]}${r.repeat > 1 ? ` <small>· ${bn(r.repeat)} বার</small>` : ''}</p>` +
    (r.audio ? `<button class="say__play" type="button" data-audio="${r.audio}" aria-pressed="false"><i data-lucide="play"></i>শুনুন</button>` : '') + '</div>' +
    `<p class="say__ar" lang="ar" dir="rtl">${r.ar}</p><p class="say__bn"><b>উচ্চারণ</b>${pron}</p><p class="say__bn"><b>অর্থ</b>${mean}</p>` +
    (r.en ? `<p class="say__en" lang="en">${r.en}</p>` : '') +
    `<p class="say__src">সূত্র: ${r.src}। ${say ? '<em>বাংলা উচ্চারণ ও অর্থ খসড়া</em>' : '<em>বাংলা অর্থ খসড়া</em>'}</p></div>`;
}
function quranCard(q) {
  const box = el('div', 'say');
  box.innerHTML = `<div class="say__top"><p class="say__lbl">${q.label}</p></div><p class="say__bn">লোড হচ্ছে…</p>`;
  quranOf(q).then(({ vs, audio: a }) => {
    box.innerHTML = `<div class="say__top"><p class="say__lbl">${q.label}</p>${a ? `<button class="say__play" type="button" data-audio="${a}" aria-pressed="false"><i data-lucide="play"></i>শুনুন</button>` : ''}</div>` +
      `<p class="say__ar" lang="ar" dir="rtl">${vs.map((v) => `${v.text_uthmani} <span class="n">${arNum(v.verse_number)}</span>`).join(' ')}</p>` +
      `<p class="say__bn"><b>অর্থ</b>${vs.map((v) => plainText(v.translations[0].text)).join(' ')}</p>` +
      `<p class="say__src">সূত্র: কুরআন ডট কম, অনুবাদ ${TRANSLATIONS[0].name}, তিলাওয়াত ${RECITER.name}। <a class="link" href="quran.html#${vs[0].verse_key.split(':')[0]}">শব্দে শব্দে অর্থসহ পড়ুন</a></p>`;
    icons();
  }).catch(() => { box.querySelector('.say__bn').textContent = 'ইন্টারনেট সংযোগ নেই, তাই কুরআনের লেখা আনা যায়নি।'; });
  return box;
}
// the step's recitations as one queue, for "listen along"
async function stepAudio(s) {
  const list = (s.say || []).map((k) => RECITE[k].audio).filter(Boolean);
  if (s.quran) { try { const { audio: a } = await quranOf(s.quran); if (a) list.unshift(a); } catch (e) {} }
  return list;
}

function renderStep() {
  const s = cur(), steps = G().steps, n = steps.length;
  $('#stepNo').textContent = allAt >= 0 && guide === 'namaz' ? `একটানা নামাজ · ${bn(allAt + 1)}/${bn(G().all.length)}` : `ধাপ ${bn(idx + 1)} / ${bn(n)}`;
  $('#stepTitle').textContent = s.title;
  $('#stepTags').innerHTML = `<span class="tag tag--${s.kind}">${KIND[s.kind]}${s.kindNote ? ` · ${s.kindNote}` : ''}</span>` +
    (s.times ? `<span class="tag"><i data-lucide="repeat"></i>${s.times}</span>` : '') + (s.area ? `<span class="tag"><i data-lucide="scan"></i>${s.area}</span>` : '');
  $('#stepHow').innerHTML = s.how.map((h) => `<li>${h}</li>`).join('');
  $('#stepNote').innerHTML = [s.note && `<p class="step__note"><i data-lucide="info"></i><span>${s.note}</span></p>`,
    s.women && `<p class="step__note"><i data-lucide="users"></i><span><b>নারীদের জন্য:</b> ${s.women} এ বিষয়ে আলেমদের মধ্যে মতভেদ আছে।</span></p>`].filter(Boolean).join('');
  const rec = $('#recite');
  rec.innerHTML = (s.say || []).map(sayCard).join('');
  if (s.quran) rec.prepend(quranCard(s.quran));
  $('#stepMist').hidden = !s.mistakes;
  $('#mistList').innerHTML = (s.mistakes || []).map((m) => `<li>${m}</li>`).join('');
  $$('#steps button').forEach((b, i) => { b.classList.toggle('is-done', i < idx); i === idx ? b.setAttribute('aria-current', 'step') : b.removeAttribute('aria-current'); });
  // scroll only the chip row sideways, never the page
  const chip = $('#steps button[aria-current]'), row = $('#steps');
  if (chip) row.scrollTo({ left: chip.parentElement.offsetLeft - row.offsetLeft - 16, behavior: reduce ? 'auto' : 'smooth' });
  $('#prevBtn').disabled = allAt < 0 && idx === 0;
  $('#nextBtn span').textContent = allAt < 0 && idx === n - 1 ? 'শেষ, আবার শুরু' : 'পরের ধাপ';
  const rk = guide === 'namaz' && allAt >= 0 ? (G().all.indexOf(NAMAZ.findIndex((x) => x.id === 'rise')) <= allAt ? 2 : 1) : 0;
  $('#rakah').hidden = !rk; $('#rakah').textContent = `রাকাত ${bn(rk)} / ২`;
  icons();
}

function go(i, keepAll) {
  if (!keepAll) allAt = -1;
  from = lastPose; idx = i; t = 0; stopAudio();
  renderStep();
  syncAll();
  if (allAt >= 0 && $('#soundChk').checked) stepAudio(cur()).then((l) => { queue = l; queueDone = !l.length; playNext(); });
  else queueDone = true;
}
function syncAll() {
  $('#allBtn').setAttribute('aria-pressed', String(allAt >= 0));
  $('#allLbl').textContent = allAt >= 0 ? 'একটানা দেখা বন্ধ করুন' : G().allLbl;
  $('#playBtn').innerHTML = playing ? '<i data-lucide="pause"></i><span>থামান</span>' : '<i data-lucide="play"></i><span>চালান</span>';
  icons();
}

/* audio: one element for every play button and for the listen-along queue */
function stopAudio() { audio.pause(); queue = []; $$('.say__play[aria-pressed="true"]').forEach((b) => { b.setAttribute('aria-pressed', 'false'); b.innerHTML = '<i data-lucide="play"></i>শুনুন'; }); icons(); }
function playNext() { const u = queue.shift(); if (!u) { queueDone = true; return; } audio.src = u; audio.play().catch(() => { queueDone = true; }); }
audio.addEventListener('ended', () => { if (allAt >= 0) playNext(); stopBtnState(); });
const stopBtnState = () => $$('.say__play[aria-pressed="true"]').forEach((b) => { b.setAttribute('aria-pressed', 'false'); b.innerHTML = '<i data-lucide="play"></i>শুনুন'; icons(); });
$('#recite').addEventListener('click', (e) => {
  const b = e.target.closest('.say__play');
  if (!b) return;
  const on = b.getAttribute('aria-pressed') === 'true';
  stopAudio();
  if (on) return;
  audio.src = b.dataset.audio;
  audio.play().then(() => { b.setAttribute('aria-pressed', 'true'); b.innerHTML = '<i data-lucide="pause"></i>থামান'; icons(); }).catch(() => toast('তিলাওয়াত চালানো যায়নি', 'wifi-off'));
});

/* ---------- the frame loop ---------- */
const sayEl = $('#say'), countEl = $('#count'), capEl = $('#cap');
let shown = {}, last = performance.now();
function frame(now) {
  const dt = Math.min(64, now - last); last = now;
  const a = cur().anim;
  if (playing) t += dt;
  let tt;
  if (allAt >= 0) {
    tt = Math.min(t, a.len - 1);
    if (t >= a.len + 500 && queueDone) {
      if (allAt < G().all.length - 1) { allAt++; go(G().all[allAt], true); }
      else { allAt = -1; syncAll(); renderStep(); }
    }
  } else tt = reduce && !playing ? (a.still ?? a.len * 0.7) : t % a.len;
  const cycleFrom = t < a.len ? from : a.end || from;
  const s = a.frame(tt, cycleFrom);
  side.style.display = a.scene === 'side' ? '' : 'none';
  front.style.display = a.scene === 'front' ? '' : 'none';
  foot.style.display = a.scene === 'foot' ? '' : 'none';
  let hands = null;
  if (a.scene === 'side') { drawSide(s.pose); lastPose = s.pose; }
  else { hands = a.scene === 'front' ? drawFront(s) : drawFoot(s); lastPose = P.stand; }
  const src = !hands || !s.drip || reduce ? null : s.drip === 'r' ? [hands.r] : s.drip === 'l' ? [hands.l] : [hands.r, hands.l];
  stepDrops(playing ? dt : 0, src, a.scene === 'foot' && s.left);
  // overlays change only when their text does
  const say = s.say ? RECITE[s.say].ar.split(/[،.]/)[0] : '';
  if (say !== shown.say) { shown.say = say; sayEl.hidden = !say; sayEl.textContent = say; }
  const cnt = s.count ? `${s.count[0]}/${s.count[1]}` : '';
  if (cnt !== shown.cnt) {
    shown.cnt = cnt; countEl.hidden = !cnt;
    if (cnt) countEl.innerHTML = `${bn(s.count[0])} বার <i>${Array.from({ length: s.count[1] }, (_, j) => `<span class="${j < s.count[0] ? 'on' : ''}"></span>`).join('')}</i>`;
  }
  const cap = s.cap || '';
  if (cap && cap !== shown.cap) { shown.cap = cap; capEl.textContent = cap; }
  requestAnimationFrame(frame);
}

function setGuide(g) {
  guide = g; history.replaceState(null, '', '#' + g); allAt = -1;
  $$('.switch [role="tab"]').forEach((b) => { const on = b.dataset.guide === g; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; });
  $('#steps').innerHTML = G().steps.map((s, i) => `<li><button type="button" data-i="${i}"><span>${bn(i + 1)}</span>${s.title}</button></li>`).join('');
  $('#moreIn').innerHTML = g === 'wudu' ? MORE_WUDU : MORE_NAMAZ;
  from = null; lastPose = P.stand; shown = {};
  go(0);
}

$('.switch').addEventListener('click', (e) => { const b = e.target.closest('[data-guide]'); if (b && b.dataset.guide !== guide) setGuide(b.dataset.guide); });
$('.switch').addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
  const g = guide === 'wudu' ? 'namaz' : 'wudu'; setGuide(g); $(`#tab-${g}`).focus();
});
$('#steps').addEventListener('click', (e) => { const b = e.target.closest('[data-i]'); if (b) go(+b.dataset.i); });
$('#prevBtn').addEventListener('click', () => (allAt > 0 ? go(G().all[--allAt], true) : go(Math.max(0, idx - 1))));
$('#nextBtn').addEventListener('click', () => {
  if (allAt >= 0 && allAt < G().all.length - 1) return go(G().all[++allAt], true);
  go(idx + 1 < G().steps.length ? idx + 1 : 0);
});
$('#playBtn').addEventListener('click', () => { playing = !playing; if (!playing) audio.pause(); else if (allAt >= 0 && audio.src && !queueDone) audio.play().catch(() => {}); syncAll(); });
$('#allBtn').addEventListener('click', () => {
  if (allAt >= 0) { allAt = -1; stopAudio(); syncAll(); renderStep(); return; }
  allAt = 0; playing = true; go(G().all[0], true);
});
document.addEventListener('keydown', (e) => {
  if (e.target.closest('input, textarea, [role="tab"]')) return;
  if (e.key === 'ArrowRight') $('#nextBtn').click();
  if (e.key === 'ArrowLeft' && !$('#prevBtn').disabled) $('#prevBtn').click();
});
$('#menuBtn').addEventListener('click', () => {
  const open = $('#top').classList.toggle('is-open');
  $('#menuBtn').setAttribute('aria-expanded', String(open));
  $('#menuBtn').innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}"></i>`;
  icons();
});
addEventListener('hashchange', () => { const g = location.hash === '#namaz' ? 'namaz' : 'wudu'; if (g !== guide) setGuide(g); });

/* ---------- the blocks under each guide (draft, Hanafi) ---------- */
const rkRow = (name, ic, parts) => `<div class="rk__row"><p class="rk__name"><img src="icons/${ic}.png" alt="" width="30" height="30">${name}</p><div class="rk__parts">` +
  parts.map(([n, cls, lbl]) => `<div class="rk__part"><span class="rk__beads" aria-hidden="true">${`<span class="${cls}"></span>`.repeat(n)}</span><small>${bn(n)} ${lbl}</small></div>`).join('') + '</div></div>';
const MORE_NAMAZ = `<h2 class="h2" id="moreH">পাঁচ ওয়াক্তে কত রাকাত</h2><p class="lead">হানাফি মাযহাব অনুযায়ী, প্রতিটি ঘর এক রাকাত। ক্রম বাম থেকে ডানে।</p>
  <div class="more__grid"><div><div class="rk">
  ${rkRow('ফজর', 'fajr', [[2, 'b-sunnah', 'সুন্নত'], [2, 'b-fard', 'ফরজ']])}
  ${rkRow('যোহর', 'dhuhr', [[4, 'b-sunnah', 'সুন্নত'], [4, 'b-fard', 'ফরজ'], [2, 'b-sunnah', 'সুন্নত']])}
  ${rkRow('আসর', 'asr', [[4, 'b-sunnah2', 'সুন্নত (গায়রে মুয়াক্কাদা)'], [4, 'b-fard', 'ফরজ']])}
  ${rkRow('মাগরিব', 'maghrib', [[3, 'b-fard', 'ফরজ'], [2, 'b-sunnah', 'সুন্নত']])}
  ${rkRow('ইশা', 'isha', [[4, 'b-sunnah2', 'সুন্নত (গায়রে মুয়াক্কাদা)'], [4, 'b-fard', 'ফরজ'], [2, 'b-sunnah', 'সুন্নত'], [3, 'b-witr', 'বিতর (ওয়াজিব)']])}
  </div><p class="rk__key"><span><i class="b-fard"></i>ফরজ</span><span><i class="b-sunnah"></i>সুন্নতে মুয়াক্কাদা</span><span><i class="b-sunnah2"></i>সুন্নতে গায়রে মুয়াক্কাদা</span><span><i class="b-witr"></i>বিতর</span></p></div>
  <div class="kfacts">
    <div class="kfact"><h3><i data-lucide="list-checks"></i>নামাজের ১৩ ফরজ</h3><ul><li><b>বাইরের ৭টি:</b> শরীর, কাপড় ও জায়গা পবিত্র থাকা; সতর ঢাকা; কিবলামুখী হওয়া; ওয়াক্ত হওয়া; নিয়ত।</li><li><b>ভেতরের ৬টি:</b> তাকবিরে তাহরিমা, দাঁড়ানো, কিরাত, রুকু, সিজদা, শেষ বৈঠক।</li></ul></div>
    <div class="kfact"><h3><i data-lucide="circle-x"></i>যেসব কারণে নামাজ ভেঙে যায়</h3><ul><li>কথা বলা, খাওয়া বা পান করা</li><li>শব্দ করে হাসা</li><li>কিবলা থেকে বুক ঘুরে যাওয়া</li><li>অজু ভেঙে যাওয়া বা কোনো ফরজ বাদ পড়া</li></ul><p>খসড়া তালিকা, হানাফি মাযহাব অনুযায়ী। আলেমের যাচাই ও সূত্র যোগ হবে।</p></div>
  </div></div>`;
const MORE_WUDU = `<h2 class="h2" id="moreH">অজুর মূল কথা</h2><p class="lead">ফরজগুলো বাদ গেলে অজু হয় না। বাকিগুলো সুন্নত, ঠিকমতো করলে অজু পূর্ণ হয়।</p>
  <div class="more__grid"><div class="kfacts">
    <div class="kfact"><h3><i data-lucide="list-checks"></i>অজুর ৪ ফরজ</h3><ul><li>পুরো মুখমণ্ডল একবার ধোয়া</li><li>দুই হাত কনুইসহ একবার ধোয়া</li><li>মাথার চার ভাগের এক ভাগ মাসাহ করা</li><li>দুই পা টাখনুসহ একবার ধোয়া</li></ul><p>সূরা মায়িদা, আয়াত ৬-এ এই চারটির কথা আছে। তিনবার করে ধোয়া সুন্নত।</p></div>
  </div><div class="kfacts">
    <div class="kfact"><h3><i data-lucide="circle-x"></i>যেসব কারণে অজু ভেঙে যায়</h3><ul><li>প্রস্রাব, পায়খানা বা বায়ু বের হওয়া</li><li>শরীর থেকে রক্ত বা পুঁজ বের হয়ে গড়িয়ে পড়া</li><li>মুখ ভরে বমি হওয়া</li><li>শুয়ে বা হেলান দিয়ে ঘুমানো, অজ্ঞান হওয়া</li><li>নামাজের মধ্যে শব্দ করে হাসা</li></ul><p>খসড়া তালিকা, হানাফি মাযহাব অনুযায়ী। রক্ত, বমি ও স্পর্শের বিষয়ে অন্য মাযহাবে ভিন্নমত আছে।</p></div>
  </div></div>`;

setGuide(guide);
requestAnimationFrame(frame);
