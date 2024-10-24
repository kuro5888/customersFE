const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './react-18-BKlIH9-0.js',
      './index-B-o1Wr-g.js',
      './_commonjsHelpers-Cpj98o6Y.js',
      './index-lcPQr1BL.js',
    ]),
) => i.map((i) => d[i]);
import { _ as er } from './iframe-CRgWr_sK.js';
import { _ as tr } from './chunk-H6MOWX77-DTQOW814.js';
import { r as j, R as ie } from './index-B-o1Wr-g.js';
import { g as rr } from './_commonjsHelpers-Cpj98o6Y.js';
import { r as nr } from './index-lcPQr1BL.js';
import '../sb-preview/runtime.js';
var Me = { exports: {} };
const sr = '2.0.0',
  wt = 256,
  ir = Number.MAX_SAFE_INTEGER || 9007199254740991,
  ar = 16,
  or = wt - 6,
  lr = [
    'major',
    'premajor',
    'minor',
    'preminor',
    'patch',
    'prepatch',
    'prerelease',
  ];
var ge = {
    MAX_LENGTH: wt,
    MAX_SAFE_COMPONENT_LENGTH: ar,
    MAX_SAFE_BUILD_LENGTH: or,
    MAX_SAFE_INTEGER: ir,
    RELEASE_TYPES: lr,
    SEMVER_SPEC_VERSION: sr,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2,
  },
  Oe = {};
const ur =
  typeof process == 'object' &&
  Oe &&
  Oe.NODE_DEBUG &&
  /\bsemver\b/i.test(Oe.NODE_DEBUG)
    ? (...e) => console.error('SEMVER', ...e)
    : () => {};
var Re = ur;
(function (e, t) {
  const {
      MAX_SAFE_COMPONENT_LENGTH: r,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: s,
    } = ge,
    i = Re;
  t = e.exports = {};
  const l = (t.re = []),
    u = (t.safeRe = []),
    a = (t.src = []),
    o = (t.t = {});
  let h = 0;
  const p = '[a-zA-Z0-9-]',
    L = [
      ['\\s', 1],
      ['\\d', s],
      [p, n],
    ],
    m = (V) => {
      for (const [b, Y] of L)
        V = V.split(`${b}*`)
          .join(`${b}{0,${Y}}`)
          .split(`${b}+`)
          .join(`${b}{1,${Y}}`);
      return V;
    },
    d = (V, b, Y) => {
      const w = m(b),
        W = h++;
      i(V, W, b),
        (o[V] = W),
        (a[W] = b),
        (l[W] = new RegExp(b, Y ? 'g' : void 0)),
        (u[W] = new RegExp(w, Y ? 'g' : void 0));
    };
  d('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
    d('NUMERICIDENTIFIERLOOSE', '\\d+'),
    d('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${p}*`),
    d(
      'MAINVERSION',
      `(${a[o.NUMERICIDENTIFIER]})\\.(${a[o.NUMERICIDENTIFIER]})\\.(${a[o.NUMERICIDENTIFIER]})`,
    ),
    d(
      'MAINVERSIONLOOSE',
      `(${a[o.NUMERICIDENTIFIERLOOSE]})\\.(${a[o.NUMERICIDENTIFIERLOOSE]})\\.(${a[o.NUMERICIDENTIFIERLOOSE]})`,
    ),
    d(
      'PRERELEASEIDENTIFIER',
      `(?:${a[o.NUMERICIDENTIFIER]}|${a[o.NONNUMERICIDENTIFIER]})`,
    ),
    d(
      'PRERELEASEIDENTIFIERLOOSE',
      `(?:${a[o.NUMERICIDENTIFIERLOOSE]}|${a[o.NONNUMERICIDENTIFIER]})`,
    ),
    d(
      'PRERELEASE',
      `(?:-(${a[o.PRERELEASEIDENTIFIER]}(?:\\.${a[o.PRERELEASEIDENTIFIER]})*))`,
    ),
    d(
      'PRERELEASELOOSE',
      `(?:-?(${a[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${a[o.PRERELEASEIDENTIFIERLOOSE]})*))`,
    ),
    d('BUILDIDENTIFIER', `${p}+`),
    d(
      'BUILD',
      `(?:\\+(${a[o.BUILDIDENTIFIER]}(?:\\.${a[o.BUILDIDENTIFIER]})*))`,
    ),
    d('FULLPLAIN', `v?${a[o.MAINVERSION]}${a[o.PRERELEASE]}?${a[o.BUILD]}?`),
    d('FULL', `^${a[o.FULLPLAIN]}$`),
    d(
      'LOOSEPLAIN',
      `[v=\\s]*${a[o.MAINVERSIONLOOSE]}${a[o.PRERELEASELOOSE]}?${a[o.BUILD]}?`,
    ),
    d('LOOSE', `^${a[o.LOOSEPLAIN]}$`),
    d('GTLT', '((?:<|>)?=?)'),
    d('XRANGEIDENTIFIERLOOSE', `${a[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
    d('XRANGEIDENTIFIER', `${a[o.NUMERICIDENTIFIER]}|x|X|\\*`),
    d(
      'XRANGEPLAIN',
      `[v=\\s]*(${a[o.XRANGEIDENTIFIER]})(?:\\.(${a[o.XRANGEIDENTIFIER]})(?:\\.(${a[o.XRANGEIDENTIFIER]})(?:${a[o.PRERELEASE]})?${a[o.BUILD]}?)?)?`,
    ),
    d(
      'XRANGEPLAINLOOSE',
      `[v=\\s]*(${a[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[o.XRANGEIDENTIFIERLOOSE]})(?:${a[o.PRERELEASELOOSE]})?${a[o.BUILD]}?)?)?`,
    ),
    d('XRANGE', `^${a[o.GTLT]}\\s*${a[o.XRANGEPLAIN]}$`),
    d('XRANGELOOSE', `^${a[o.GTLT]}\\s*${a[o.XRANGEPLAINLOOSE]}$`),
    d(
      'COERCEPLAIN',
      `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`,
    ),
    d('COERCE', `${a[o.COERCEPLAIN]}(?:$|[^\\d])`),
    d(
      'COERCEFULL',
      a[o.COERCEPLAIN] +
        `(?:${a[o.PRERELEASE]})?(?:${a[o.BUILD]})?(?:$|[^\\d])`,
    ),
    d('COERCERTL', a[o.COERCE], !0),
    d('COERCERTLFULL', a[o.COERCEFULL], !0),
    d('LONETILDE', '(?:~>?)'),
    d('TILDETRIM', `(\\s*)${a[o.LONETILDE]}\\s+`, !0),
    (t.tildeTrimReplace = '$1~'),
    d('TILDE', `^${a[o.LONETILDE]}${a[o.XRANGEPLAIN]}$`),
    d('TILDELOOSE', `^${a[o.LONETILDE]}${a[o.XRANGEPLAINLOOSE]}$`),
    d('LONECARET', '(?:\\^)'),
    d('CARETTRIM', `(\\s*)${a[o.LONECARET]}\\s+`, !0),
    (t.caretTrimReplace = '$1^'),
    d('CARET', `^${a[o.LONECARET]}${a[o.XRANGEPLAIN]}$`),
    d('CARETLOOSE', `^${a[o.LONECARET]}${a[o.XRANGEPLAINLOOSE]}$`),
    d('COMPARATORLOOSE', `^${a[o.GTLT]}\\s*(${a[o.LOOSEPLAIN]})$|^$`),
    d('COMPARATOR', `^${a[o.GTLT]}\\s*(${a[o.FULLPLAIN]})$|^$`),
    d(
      'COMPARATORTRIM',
      `(\\s*)${a[o.GTLT]}\\s*(${a[o.LOOSEPLAIN]}|${a[o.XRANGEPLAIN]})`,
      !0,
    ),
    (t.comparatorTrimReplace = '$1$2$3'),
    d(
      'HYPHENRANGE',
      `^\\s*(${a[o.XRANGEPLAIN]})\\s+-\\s+(${a[o.XRANGEPLAIN]})\\s*$`,
    ),
    d(
      'HYPHENRANGELOOSE',
      `^\\s*(${a[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${a[o.XRANGEPLAINLOOSE]})\\s*$`,
    ),
    d('STAR', '(<|>)?=?\\s*\\*'),
    d('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$'),
    d('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
})(Me, Me.exports);
var le = Me.exports;
const cr = Object.freeze({ loose: !0 }),
  hr = Object.freeze({}),
  fr = (e) => (e ? (typeof e != 'object' ? cr : e) : hr);
var Ve = fr;
const et = /^[0-9]+$/,
  Ct = (e, t) => {
    const r = et.test(e),
      n = et.test(t);
    return (
      r && n && ((e = +e), (t = +t)),
      e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
    );
  },
  pr = (e, t) => Ct(t, e);
var _t = { compareIdentifiers: Ct, rcompareIdentifiers: pr };
const he = Re,
  { MAX_LENGTH: tt, MAX_SAFE_INTEGER: fe } = ge,
  { safeRe: rt, t: nt } = le,
  Er = Ve,
  { compareIdentifiers: K } = _t;
let mr = class G {
  constructor(t, r) {
    if (((r = Er(r)), t instanceof G)) {
      if (
        t.loose === !!r.loose &&
        t.includePrerelease === !!r.includePrerelease
      )
        return t;
      t = t.version;
    } else if (typeof t != 'string')
      throw new TypeError(
        `Invalid version. Must be a string. Got type "${typeof t}".`,
      );
    if (t.length > tt)
      throw new TypeError(`version is longer than ${tt} characters`);
    he('SemVer', t, r),
      (this.options = r),
      (this.loose = !!r.loose),
      (this.includePrerelease = !!r.includePrerelease);
    const n = t.trim().match(r.loose ? rt[nt.LOOSE] : rt[nt.FULL]);
    if (!n) throw new TypeError(`Invalid Version: ${t}`);
    if (
      ((this.raw = t),
      (this.major = +n[1]),
      (this.minor = +n[2]),
      (this.patch = +n[3]),
      this.major > fe || this.major < 0)
    )
      throw new TypeError('Invalid major version');
    if (this.minor > fe || this.minor < 0)
      throw new TypeError('Invalid minor version');
    if (this.patch > fe || this.patch < 0)
      throw new TypeError('Invalid patch version');
    n[4]
      ? (this.prerelease = n[4].split('.').map((s) => {
          if (/^[0-9]+$/.test(s)) {
            const i = +s;
            if (i >= 0 && i < fe) return i;
          }
          return s;
        }))
      : (this.prerelease = []),
      (this.build = n[5] ? n[5].split('.') : []),
      this.format();
  }
  format() {
    return (
      (this.version = `${this.major}.${this.minor}.${this.patch}`),
      this.prerelease.length &&
        (this.version += `-${this.prerelease.join('.')}`),
      this.version
    );
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (
      (he('SemVer.compare', this.version, this.options, t), !(t instanceof G))
    ) {
      if (typeof t == 'string' && t === this.version) return 0;
      t = new G(t, this.options);
    }
    return t.version === this.version
      ? 0
      : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return (
      t instanceof G || (t = new G(t, this.options)),
      K(this.major, t.major) || K(this.minor, t.minor) || K(this.patch, t.patch)
    );
  }
  comparePre(t) {
    if (
      (t instanceof G || (t = new G(t, this.options)),
      this.prerelease.length && !t.prerelease.length)
    )
      return -1;
    if (!this.prerelease.length && t.prerelease.length) return 1;
    if (!this.prerelease.length && !t.prerelease.length) return 0;
    let r = 0;
    do {
      const n = this.prerelease[r],
        s = t.prerelease[r];
      if ((he('prerelease compare', r, n, s), n === void 0 && s === void 0))
        return 0;
      if (s === void 0) return 1;
      if (n === void 0) return -1;
      if (n === s) continue;
      return K(n, s);
    } while (++r);
  }
  compareBuild(t) {
    t instanceof G || (t = new G(t, this.options));
    let r = 0;
    do {
      const n = this.build[r],
        s = t.build[r];
      if ((he('prerelease compare', r, n, s), n === void 0 && s === void 0))
        return 0;
      if (s === void 0) return 1;
      if (n === void 0) return -1;
      if (n === s) continue;
      return K(n, s);
    } while (++r);
  }
  inc(t, r, n) {
    switch (t) {
      case 'premajor':
        (this.prerelease.length = 0),
          (this.patch = 0),
          (this.minor = 0),
          this.major++,
          this.inc('pre', r, n);
        break;
      case 'preminor':
        (this.prerelease.length = 0),
          (this.patch = 0),
          this.minor++,
          this.inc('pre', r, n);
        break;
      case 'prepatch':
        (this.prerelease.length = 0),
          this.inc('patch', r, n),
          this.inc('pre', r, n);
        break;
      case 'prerelease':
        this.prerelease.length === 0 && this.inc('patch', r, n),
          this.inc('pre', r, n);
        break;
      case 'major':
        (this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0) &&
          this.major++,
          (this.minor = 0),
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case 'minor':
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case 'patch':
        this.prerelease.length === 0 && this.patch++, (this.prerelease = []);
        break;
      case 'pre': {
        const s = Number(n) ? 1 : 0;
        if (!r && n === !1)
          throw new Error('invalid increment argument: identifier is empty');
        if (this.prerelease.length === 0) this.prerelease = [s];
        else {
          let i = this.prerelease.length;
          for (; --i >= 0; )
            typeof this.prerelease[i] == 'number' &&
              (this.prerelease[i]++, (i = -2));
          if (i === -1) {
            if (r === this.prerelease.join('.') && n === !1)
              throw new Error(
                'invalid increment argument: identifier already exists',
              );
            this.prerelease.push(s);
          }
        }
        if (r) {
          let i = [r, s];
          n === !1 && (i = [r]),
            K(this.prerelease[0], r) === 0
              ? isNaN(this.prerelease[1]) && (this.prerelease = i)
              : (this.prerelease = i);
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return (
      (this.raw = this.format()),
      this.build.length && (this.raw += `+${this.build.join('.')}`),
      this
    );
  }
};
var C = mr;
const st = C,
  dr = (e, t, r = !1) => {
    if (e instanceof st) return e;
    try {
      return new st(e, t);
    } catch (n) {
      if (!r) return null;
      throw n;
    }
  };
var J = dr;
const vr = J,
  $r = (e, t) => {
    const r = vr(e, t);
    return r ? r.version : null;
  };
var gr = $r;
const Rr = J,
  yr = (e, t) => {
    const r = Rr(e.trim().replace(/^[=v]+/, ''), t);
    return r ? r.version : null;
  };
var Ir = yr;
const it = C,
  Lr = (e, t, r, n, s) => {
    typeof r == 'string' && ((s = n), (n = r), (r = void 0));
    try {
      return new it(e instanceof it ? e.version : e, r).inc(t, n, s).version;
    } catch {
      return null;
    }
  };
var Nr = Lr;
const at = J,
  Sr = (e, t) => {
    const r = at(e, null, !0),
      n = at(t, null, !0),
      s = r.compare(n);
    if (s === 0) return null;
    const i = s > 0,
      l = i ? r : n,
      u = i ? n : r,
      a = !!l.prerelease.length;
    if (!!u.prerelease.length && !a)
      return !u.patch && !u.minor
        ? 'major'
        : l.patch
          ? 'patch'
          : l.minor
            ? 'minor'
            : 'major';
    const h = a ? 'pre' : '';
    return r.major !== n.major
      ? h + 'major'
      : r.minor !== n.minor
        ? h + 'minor'
        : r.patch !== n.patch
          ? h + 'patch'
          : 'prerelease';
  };
var Tr = Sr;
const Or = C,
  Ar = (e, t) => new Or(e, t).major;
var wr = Ar;
const Cr = C,
  _r = (e, t) => new Cr(e, t).minor;
var Dr = _r;
const Pr = C,
  br = (e, t) => new Pr(e, t).patch;
var xr = br;
const Ur = J,
  Fr = (e, t) => {
    const r = Ur(e, t);
    return r && r.prerelease.length ? r.prerelease : null;
  };
var Gr = Fr;
const ot = C,
  jr = (e, t, r) => new ot(e, r).compare(new ot(t, r));
var U = jr;
const Mr = U,
  Xr = (e, t, r) => Mr(t, e, r);
var Vr = Xr;
const Yr = U,
  Wr = (e, t) => Yr(e, t, !0);
var Hr = Wr;
const lt = C,
  kr = (e, t, r) => {
    const n = new lt(e, r),
      s = new lt(t, r);
    return n.compare(s) || n.compareBuild(s);
  };
var Ye = kr;
const qr = Ye,
  Br = (e, t) => e.sort((r, n) => qr(r, n, t));
var Kr = Br;
const zr = Ye,
  Zr = (e, t) => e.sort((r, n) => zr(n, r, t));
var Jr = Zr;
const Qr = U,
  en = (e, t, r) => Qr(e, t, r) > 0;
var ye = en;
const tn = U,
  rn = (e, t, r) => tn(e, t, r) < 0;
var We = rn;
const nn = U,
  sn = (e, t, r) => nn(e, t, r) === 0;
var Dt = sn;
const an = U,
  on = (e, t, r) => an(e, t, r) !== 0;
var Pt = on;
const ln = U,
  un = (e, t, r) => ln(e, t, r) >= 0;
var He = un;
const cn = U,
  hn = (e, t, r) => cn(e, t, r) <= 0;
var ke = hn;
const fn = Dt,
  pn = Pt,
  En = ye,
  mn = He,
  dn = We,
  vn = ke,
  $n = (e, t, r, n) => {
    switch (t) {
      case '===':
        return (
          typeof e == 'object' && (e = e.version),
          typeof r == 'object' && (r = r.version),
          e === r
        );
      case '!==':
        return (
          typeof e == 'object' && (e = e.version),
          typeof r == 'object' && (r = r.version),
          e !== r
        );
      case '':
      case '=':
      case '==':
        return fn(e, r, n);
      case '!=':
        return pn(e, r, n);
      case '>':
        return En(e, r, n);
      case '>=':
        return mn(e, r, n);
      case '<':
        return dn(e, r, n);
      case '<=':
        return vn(e, r, n);
      default:
        throw new TypeError(`Invalid operator: ${t}`);
    }
  };
var bt = $n;
const gn = C,
  Rn = J,
  { safeRe: pe, t: Ee } = le,
  yn = (e, t) => {
    if (e instanceof gn) return e;
    if ((typeof e == 'number' && (e = String(e)), typeof e != 'string'))
      return null;
    t = t || {};
    let r = null;
    if (!t.rtl)
      r = e.match(t.includePrerelease ? pe[Ee.COERCEFULL] : pe[Ee.COERCE]);
    else {
      const a = t.includePrerelease ? pe[Ee.COERCERTLFULL] : pe[Ee.COERCERTL];
      let o;
      for (; (o = a.exec(e)) && (!r || r.index + r[0].length !== e.length); )
        (!r || o.index + o[0].length !== r.index + r[0].length) && (r = o),
          (a.lastIndex = o.index + o[1].length + o[2].length);
      a.lastIndex = -1;
    }
    if (r === null) return null;
    const n = r[2],
      s = r[3] || '0',
      i = r[4] || '0',
      l = t.includePrerelease && r[5] ? `-${r[5]}` : '',
      u = t.includePrerelease && r[6] ? `+${r[6]}` : '';
    return Rn(`${n}.${s}.${i}${l}${u}`, t);
  };
var In = yn,
  Ae,
  ut;
function Ln() {
  return (
    ut ||
      ((ut = 1),
      (Ae = function (e) {
        e.prototype[Symbol.iterator] = function* () {
          for (let t = this.head; t; t = t.next) yield t.value;
        };
      })),
    Ae
  );
}
var Nn = I;
I.Node = q;
I.create = I;
function I(e) {
  var t = this;
  if (
    (t instanceof I || (t = new I()),
    (t.tail = null),
    (t.head = null),
    (t.length = 0),
    e && typeof e.forEach == 'function')
  )
    e.forEach(function (s) {
      t.push(s);
    });
  else if (arguments.length > 0)
    for (var r = 0, n = arguments.length; r < n; r++) t.push(arguments[r]);
  return t;
}
I.prototype.removeNode = function (e) {
  if (e.list !== this)
    throw new Error('removing node which does not belong to this list');
  var t = e.next,
    r = e.prev;
  return (
    t && (t.prev = r),
    r && (r.next = t),
    e === this.head && (this.head = t),
    e === this.tail && (this.tail = r),
    e.list.length--,
    (e.next = null),
    (e.prev = null),
    (e.list = null),
    t
  );
};
I.prototype.unshiftNode = function (e) {
  if (e !== this.head) {
    e.list && e.list.removeNode(e);
    var t = this.head;
    (e.list = this),
      (e.next = t),
      t && (t.prev = e),
      (this.head = e),
      this.tail || (this.tail = e),
      this.length++;
  }
};
I.prototype.pushNode = function (e) {
  if (e !== this.tail) {
    e.list && e.list.removeNode(e);
    var t = this.tail;
    (e.list = this),
      (e.prev = t),
      t && (t.next = e),
      (this.tail = e),
      this.head || (this.head = e),
      this.length++;
  }
};
I.prototype.push = function () {
  for (var e = 0, t = arguments.length; e < t; e++) Tn(this, arguments[e]);
  return this.length;
};
I.prototype.unshift = function () {
  for (var e = 0, t = arguments.length; e < t; e++) On(this, arguments[e]);
  return this.length;
};
I.prototype.pop = function () {
  if (this.tail) {
    var e = this.tail.value;
    return (
      (this.tail = this.tail.prev),
      this.tail ? (this.tail.next = null) : (this.head = null),
      this.length--,
      e
    );
  }
};
I.prototype.shift = function () {
  if (this.head) {
    var e = this.head.value;
    return (
      (this.head = this.head.next),
      this.head ? (this.head.prev = null) : (this.tail = null),
      this.length--,
      e
    );
  }
};
I.prototype.forEach = function (e, t) {
  t = t || this;
  for (var r = this.head, n = 0; r !== null; n++)
    e.call(t, r.value, n, this), (r = r.next);
};
I.prototype.forEachReverse = function (e, t) {
  t = t || this;
  for (var r = this.tail, n = this.length - 1; r !== null; n--)
    e.call(t, r.value, n, this), (r = r.prev);
};
I.prototype.get = function (e) {
  for (var t = 0, r = this.head; r !== null && t < e; t++) r = r.next;
  if (t === e && r !== null) return r.value;
};
I.prototype.getReverse = function (e) {
  for (var t = 0, r = this.tail; r !== null && t < e; t++) r = r.prev;
  if (t === e && r !== null) return r.value;
};
I.prototype.map = function (e, t) {
  t = t || this;
  for (var r = new I(), n = this.head; n !== null; )
    r.push(e.call(t, n.value, this)), (n = n.next);
  return r;
};
I.prototype.mapReverse = function (e, t) {
  t = t || this;
  for (var r = new I(), n = this.tail; n !== null; )
    r.push(e.call(t, n.value, this)), (n = n.prev);
  return r;
};
I.prototype.reduce = function (e, t) {
  var r,
    n = this.head;
  if (arguments.length > 1) r = t;
  else if (this.head) (n = this.head.next), (r = this.head.value);
  else throw new TypeError('Reduce of empty list with no initial value');
  for (var s = 0; n !== null; s++) (r = e(r, n.value, s)), (n = n.next);
  return r;
};
I.prototype.reduceReverse = function (e, t) {
  var r,
    n = this.tail;
  if (arguments.length > 1) r = t;
  else if (this.tail) (n = this.tail.prev), (r = this.tail.value);
  else throw new TypeError('Reduce of empty list with no initial value');
  for (var s = this.length - 1; n !== null; s--)
    (r = e(r, n.value, s)), (n = n.prev);
  return r;
};
I.prototype.toArray = function () {
  for (var e = new Array(this.length), t = 0, r = this.head; r !== null; t++)
    (e[t] = r.value), (r = r.next);
  return e;
};
I.prototype.toArrayReverse = function () {
  for (var e = new Array(this.length), t = 0, r = this.tail; r !== null; t++)
    (e[t] = r.value), (r = r.prev);
  return e;
};
I.prototype.slice = function (e, t) {
  (t = t || this.length),
    t < 0 && (t += this.length),
    (e = e || 0),
    e < 0 && (e += this.length);
  var r = new I();
  if (t < e || t < 0) return r;
  e < 0 && (e = 0), t > this.length && (t = this.length);
  for (var n = 0, s = this.head; s !== null && n < e; n++) s = s.next;
  for (; s !== null && n < t; n++, s = s.next) r.push(s.value);
  return r;
};
I.prototype.sliceReverse = function (e, t) {
  (t = t || this.length),
    t < 0 && (t += this.length),
    (e = e || 0),
    e < 0 && (e += this.length);
  var r = new I();
  if (t < e || t < 0) return r;
  e < 0 && (e = 0), t > this.length && (t = this.length);
  for (var n = this.length, s = this.tail; s !== null && n > t; n--) s = s.prev;
  for (; s !== null && n > e; n--, s = s.prev) r.push(s.value);
  return r;
};
I.prototype.splice = function (e, t, ...r) {
  e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
  for (var n = 0, s = this.head; s !== null && n < e; n++) s = s.next;
  for (var i = [], n = 0; s && n < t; n++)
    i.push(s.value), (s = this.removeNode(s));
  s === null && (s = this.tail),
    s !== this.head && s !== this.tail && (s = s.prev);
  for (var n = 0; n < r.length; n++) s = Sn(this, s, r[n]);
  return i;
};
I.prototype.reverse = function () {
  for (var e = this.head, t = this.tail, r = e; r !== null; r = r.prev) {
    var n = r.prev;
    (r.prev = r.next), (r.next = n);
  }
  return (this.head = t), (this.tail = e), this;
};
function Sn(e, t, r) {
  var n = t === e.head ? new q(r, null, t, e) : new q(r, t, t.next, e);
  return (
    n.next === null && (e.tail = n),
    n.prev === null && (e.head = n),
    e.length++,
    n
  );
}
function Tn(e, t) {
  (e.tail = new q(t, e.tail, null, e)), e.head || (e.head = e.tail), e.length++;
}
function On(e, t) {
  (e.head = new q(t, null, e.head, e)), e.tail || (e.tail = e.head), e.length++;
}
function q(e, t, r, n) {
  if (!(this instanceof q)) return new q(e, t, r, n);
  (this.list = n),
    (this.value = e),
    t ? ((t.next = this), (this.prev = t)) : (this.prev = null),
    r ? ((r.prev = this), (this.next = r)) : (this.next = null);
}
try {
  Ln()(I);
} catch {}
const An = Nn,
  H = Symbol('max'),
  X = Symbol('length'),
  z = Symbol('lengthCalculator'),
  ae = Symbol('allowStale'),
  k = Symbol('maxAge'),
  M = Symbol('dispose'),
  ct = Symbol('noDisposeOnSet'),
  A = Symbol('lruList'),
  x = Symbol('cache'),
  xt = Symbol('updateAgeOnGet'),
  we = () => 1;
class wn {
  constructor(t) {
    if (
      (typeof t == 'number' && (t = { max: t }),
      t || (t = {}),
      t.max && (typeof t.max != 'number' || t.max < 0))
    )
      throw new TypeError('max must be a non-negative number');
    this[H] = t.max || 1 / 0;
    const r = t.length || we;
    if (
      ((this[z] = typeof r != 'function' ? we : r),
      (this[ae] = t.stale || !1),
      t.maxAge && typeof t.maxAge != 'number')
    )
      throw new TypeError('maxAge must be a number');
    (this[k] = t.maxAge || 0),
      (this[M] = t.dispose),
      (this[ct] = t.noDisposeOnSet || !1),
      (this[xt] = t.updateAgeOnGet || !1),
      this.reset();
  }
  set max(t) {
    if (typeof t != 'number' || t < 0)
      throw new TypeError('max must be a non-negative number');
    (this[H] = t || 1 / 0), re(this);
  }
  get max() {
    return this[H];
  }
  set allowStale(t) {
    this[ae] = !!t;
  }
  get allowStale() {
    return this[ae];
  }
  set maxAge(t) {
    if (typeof t != 'number')
      throw new TypeError('maxAge must be a non-negative number');
    (this[k] = t), re(this);
  }
  get maxAge() {
    return this[k];
  }
  set lengthCalculator(t) {
    typeof t != 'function' && (t = we),
      t !== this[z] &&
        ((this[z] = t),
        (this[X] = 0),
        this[A].forEach((r) => {
          (r.length = this[z](r.value, r.key)), (this[X] += r.length);
        })),
      re(this);
  }
  get lengthCalculator() {
    return this[z];
  }
  get length() {
    return this[X];
  }
  get itemCount() {
    return this[A].length;
  }
  rforEach(t, r) {
    r = r || this;
    for (let n = this[A].tail; n !== null; ) {
      const s = n.prev;
      ht(this, t, n, r), (n = s);
    }
  }
  forEach(t, r) {
    r = r || this;
    for (let n = this[A].head; n !== null; ) {
      const s = n.next;
      ht(this, t, n, r), (n = s);
    }
  }
  keys() {
    return this[A].toArray().map((t) => t.key);
  }
  values() {
    return this[A].toArray().map((t) => t.value);
  }
  reset() {
    this[M] &&
      this[A] &&
      this[A].length &&
      this[A].forEach((t) => this[M](t.key, t.value)),
      (this[x] = new Map()),
      (this[A] = new An()),
      (this[X] = 0);
  }
  dump() {
    return this[A].map((t) =>
      de(this, t) ? !1 : { k: t.key, v: t.value, e: t.now + (t.maxAge || 0) },
    )
      .toArray()
      .filter((t) => t);
  }
  dumpLru() {
    return this[A];
  }
  set(t, r, n) {
    if (((n = n || this[k]), n && typeof n != 'number'))
      throw new TypeError('maxAge must be a number');
    const s = n ? Date.now() : 0,
      i = this[z](r, t);
    if (this[x].has(t)) {
      if (i > this[H]) return Z(this, this[x].get(t)), !1;
      const a = this[x].get(t).value;
      return (
        this[M] && (this[ct] || this[M](t, a.value)),
        (a.now = s),
        (a.maxAge = n),
        (a.value = r),
        (this[X] += i - a.length),
        (a.length = i),
        this.get(t),
        re(this),
        !0
      );
    }
    const l = new Cn(t, r, i, s, n);
    return l.length > this[H]
      ? (this[M] && this[M](t, r), !1)
      : ((this[X] += l.length),
        this[A].unshift(l),
        this[x].set(t, this[A].head),
        re(this),
        !0);
  }
  has(t) {
    if (!this[x].has(t)) return !1;
    const r = this[x].get(t).value;
    return !de(this, r);
  }
  get(t) {
    return Ce(this, t, !0);
  }
  peek(t) {
    return Ce(this, t, !1);
  }
  pop() {
    const t = this[A].tail;
    return t ? (Z(this, t), t.value) : null;
  }
  del(t) {
    Z(this, this[x].get(t));
  }
  load(t) {
    this.reset();
    const r = Date.now();
    for (let n = t.length - 1; n >= 0; n--) {
      const s = t[n],
        i = s.e || 0;
      if (i === 0) this.set(s.k, s.v);
      else {
        const l = i - r;
        l > 0 && this.set(s.k, s.v, l);
      }
    }
  }
  prune() {
    this[x].forEach((t, r) => Ce(this, r, !1));
  }
}
const Ce = (e, t, r) => {
    const n = e[x].get(t);
    if (n) {
      const s = n.value;
      if (de(e, s)) {
        if ((Z(e, n), !e[ae])) return;
      } else r && (e[xt] && (n.value.now = Date.now()), e[A].unshiftNode(n));
      return s.value;
    }
  },
  de = (e, t) => {
    if (!t || (!t.maxAge && !e[k])) return !1;
    const r = Date.now() - t.now;
    return t.maxAge ? r > t.maxAge : e[k] && r > e[k];
  },
  re = (e) => {
    if (e[X] > e[H])
      for (let t = e[A].tail; e[X] > e[H] && t !== null; ) {
        const r = t.prev;
        Z(e, t), (t = r);
      }
  },
  Z = (e, t) => {
    if (t) {
      const r = t.value;
      e[M] && e[M](r.key, r.value),
        (e[X] -= r.length),
        e[x].delete(r.key),
        e[A].removeNode(t);
    }
  };
class Cn {
  constructor(t, r, n, s, i) {
    (this.key = t),
      (this.value = r),
      (this.length = n),
      (this.now = s),
      (this.maxAge = i || 0);
  }
}
const ht = (e, t, r, n) => {
  let s = r.value;
  de(e, s) && (Z(e, r), e[ae] || (s = void 0)),
    s && t.call(n, s.value, s.key, e);
};
var _n = wn,
  _e,
  ft;
function F() {
  if (ft) return _e;
  ft = 1;
  class e {
    constructor(c, g) {
      if (((g = n(g)), c instanceof e))
        return c.loose === !!g.loose &&
          c.includePrerelease === !!g.includePrerelease
          ? c
          : new e(c.raw, g);
      if (c instanceof s)
        return (this.raw = c.value), (this.set = [[c]]), this.format(), this;
      if (
        ((this.options = g),
        (this.loose = !!g.loose),
        (this.includePrerelease = !!g.includePrerelease),
        (this.raw = c.trim().split(/\s+/).join(' ')),
        (this.set = this.raw
          .split('||')
          .map((v) => this.parseRange(v.trim()))
          .filter((v) => v.length)),
        !this.set.length)
      )
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const v = this.set[0];
        if (
          ((this.set = this.set.filter(($) => !d($[0]))), this.set.length === 0)
        )
          this.set = [v];
        else if (this.set.length > 1) {
          for (const $ of this.set)
            if ($.length === 1 && V($[0])) {
              this.set = [$];
              break;
            }
        }
      }
      this.format();
    }
    format() {
      return (
        (this.range = this.set
          .map((c) => c.join(' ').trim())
          .join('||')
          .trim()),
        this.range
      );
    }
    toString() {
      return this.range;
    }
    parseRange(c) {
      const v =
          ((this.options.includePrerelease && L) | (this.options.loose && m)) +
          ':' +
          c,
        $ = r.get(v);
      if ($) return $;
      const E = this.options.loose,
        R = E ? u[a.HYPHENRANGELOOSE] : u[a.HYPHENRANGE];
      (c = c.replace(R, Jt(this.options.includePrerelease))),
        i('hyphen replace', c),
        (c = c.replace(u[a.COMPARATORTRIM], o)),
        i('comparator trim', c),
        (c = c.replace(u[a.TILDETRIM], h)),
        i('tilde trim', c),
        (c = c.replace(u[a.CARETTRIM], p)),
        i('caret trim', c);
      let N = c
        .split(' ')
        .map((T) => Y(T, this.options))
        .join(' ')
        .split(/\s+/)
        .map((T) => Zt(T, this.options));
      E &&
        (N = N.filter(
          (T) => (
            i('loose invalid filter', T, this.options),
            !!T.match(u[a.COMPARATORLOOSE])
          ),
        )),
        i('range list', N);
      const y = new Map(),
        S = N.map((T) => new s(T, this.options));
      for (const T of S) {
        if (d(T)) return [T];
        y.set(T.value, T);
      }
      y.size > 1 && y.has('') && y.delete('');
      const D = [...y.values()];
      return r.set(v, D), D;
    }
    intersects(c, g) {
      if (!(c instanceof e)) throw new TypeError('a Range is required');
      return this.set.some(
        (v) =>
          b(v, g) &&
          c.set.some(
            ($) =>
              b($, g) && v.every((E) => $.every((R) => E.intersects(R, g))),
          ),
      );
    }
    test(c) {
      if (!c) return !1;
      if (typeof c == 'string')
        try {
          c = new l(c, this.options);
        } catch {
          return !1;
        }
      for (let g = 0; g < this.set.length; g++)
        if (Qt(this.set[g], c, this.options)) return !0;
      return !1;
    }
  }
  _e = e;
  const t = _n,
    r = new t({ max: 1e3 }),
    n = Ve,
    s = Ie(),
    i = Re,
    l = C,
    {
      safeRe: u,
      t: a,
      comparatorTrimReplace: o,
      tildeTrimReplace: h,
      caretTrimReplace: p,
    } = le,
    { FLAG_INCLUDE_PRERELEASE: L, FLAG_LOOSE: m } = ge,
    d = (f) => f.value === '<0.0.0-0',
    V = (f) => f.value === '',
    b = (f, c) => {
      let g = !0;
      const v = f.slice();
      let $ = v.pop();
      for (; g && v.length; )
        (g = v.every((E) => $.intersects(E, c))), ($ = v.pop());
      return g;
    },
    Y = (f, c) => (
      i('comp', f, c),
      (f = kt(f, c)),
      i('caret', f),
      (f = W(f, c)),
      i('tildes', f),
      (f = Bt(f, c)),
      i('xrange', f),
      (f = zt(f, c)),
      i('stars', f),
      f
    ),
    w = (f) => !f || f.toLowerCase() === 'x' || f === '*',
    W = (f, c) =>
      f
        .trim()
        .split(/\s+/)
        .map((g) => Ht(g, c))
        .join(' '),
    Ht = (f, c) => {
      const g = c.loose ? u[a.TILDELOOSE] : u[a.TILDE];
      return f.replace(g, (v, $, E, R, N) => {
        i('tilde', f, v, $, E, R, N);
        let y;
        return (
          w($)
            ? (y = '')
            : w(E)
              ? (y = `>=${$}.0.0 <${+$ + 1}.0.0-0`)
              : w(R)
                ? (y = `>=${$}.${E}.0 <${$}.${+E + 1}.0-0`)
                : N
                  ? (i('replaceTilde pr', N),
                    (y = `>=${$}.${E}.${R}-${N} <${$}.${+E + 1}.0-0`))
                  : (y = `>=${$}.${E}.${R} <${$}.${+E + 1}.0-0`),
          i('tilde return', y),
          y
        );
      });
    },
    kt = (f, c) =>
      f
        .trim()
        .split(/\s+/)
        .map((g) => qt(g, c))
        .join(' '),
    qt = (f, c) => {
      i('caret', f, c);
      const g = c.loose ? u[a.CARETLOOSE] : u[a.CARET],
        v = c.includePrerelease ? '-0' : '';
      return f.replace(g, ($, E, R, N, y) => {
        i('caret', f, $, E, R, N, y);
        let S;
        return (
          w(E)
            ? (S = '')
            : w(R)
              ? (S = `>=${E}.0.0${v} <${+E + 1}.0.0-0`)
              : w(N)
                ? E === '0'
                  ? (S = `>=${E}.${R}.0${v} <${E}.${+R + 1}.0-0`)
                  : (S = `>=${E}.${R}.0${v} <${+E + 1}.0.0-0`)
                : y
                  ? (i('replaceCaret pr', y),
                    E === '0'
                      ? R === '0'
                        ? (S = `>=${E}.${R}.${N}-${y} <${E}.${R}.${+N + 1}-0`)
                        : (S = `>=${E}.${R}.${N}-${y} <${E}.${+R + 1}.0-0`)
                      : (S = `>=${E}.${R}.${N}-${y} <${+E + 1}.0.0-0`))
                  : (i('no pr'),
                    E === '0'
                      ? R === '0'
                        ? (S = `>=${E}.${R}.${N}${v} <${E}.${R}.${+N + 1}-0`)
                        : (S = `>=${E}.${R}.${N}${v} <${E}.${+R + 1}.0-0`)
                      : (S = `>=${E}.${R}.${N} <${+E + 1}.0.0-0`)),
          i('caret return', S),
          S
        );
      });
    },
    Bt = (f, c) => (
      i('replaceXRanges', f, c),
      f
        .split(/\s+/)
        .map((g) => Kt(g, c))
        .join(' ')
    ),
    Kt = (f, c) => {
      f = f.trim();
      const g = c.loose ? u[a.XRANGELOOSE] : u[a.XRANGE];
      return f.replace(g, (v, $, E, R, N, y) => {
        i('xRange', f, v, $, E, R, N, y);
        const S = w(E),
          D = S || w(R),
          T = D || w(N),
          te = T;
        return (
          $ === '=' && te && ($ = ''),
          (y = c.includePrerelease ? '-0' : ''),
          S
            ? $ === '>' || $ === '<'
              ? (v = '<0.0.0-0')
              : (v = '*')
            : $ && te
              ? (D && (R = 0),
                (N = 0),
                $ === '>'
                  ? (($ = '>='),
                    D
                      ? ((E = +E + 1), (R = 0), (N = 0))
                      : ((R = +R + 1), (N = 0)))
                  : $ === '<=' && (($ = '<'), D ? (E = +E + 1) : (R = +R + 1)),
                $ === '<' && (y = '-0'),
                (v = `${$ + E}.${R}.${N}${y}`))
              : D
                ? (v = `>=${E}.0.0${y} <${+E + 1}.0.0-0`)
                : T && (v = `>=${E}.${R}.0${y} <${E}.${+R + 1}.0-0`),
          i('xRange return', v),
          v
        );
      });
    },
    zt = (f, c) => (i('replaceStars', f, c), f.trim().replace(u[a.STAR], '')),
    Zt = (f, c) => (
      i('replaceGTE0', f, c),
      f.trim().replace(u[c.includePrerelease ? a.GTE0PRE : a.GTE0], '')
    ),
    Jt = (f) => (c, g, v, $, E, R, N, y, S, D, T, te, Hi) => (
      w(v)
        ? (g = '')
        : w($)
          ? (g = `>=${v}.0.0${f ? '-0' : ''}`)
          : w(E)
            ? (g = `>=${v}.${$}.0${f ? '-0' : ''}`)
            : R
              ? (g = `>=${g}`)
              : (g = `>=${g}${f ? '-0' : ''}`),
      w(S)
        ? (y = '')
        : w(D)
          ? (y = `<${+S + 1}.0.0-0`)
          : w(T)
            ? (y = `<${S}.${+D + 1}.0-0`)
            : te
              ? (y = `<=${S}.${D}.${T}-${te}`)
              : f
                ? (y = `<${S}.${D}.${+T + 1}-0`)
                : (y = `<=${y}`),
      `${g} ${y}`.trim()
    ),
    Qt = (f, c, g) => {
      for (let v = 0; v < f.length; v++) if (!f[v].test(c)) return !1;
      if (c.prerelease.length && !g.includePrerelease) {
        for (let v = 0; v < f.length; v++)
          if (
            (i(f[v].semver),
            f[v].semver !== s.ANY && f[v].semver.prerelease.length > 0)
          ) {
            const $ = f[v].semver;
            if (
              $.major === c.major &&
              $.minor === c.minor &&
              $.patch === c.patch
            )
              return !0;
          }
        return !1;
      }
      return !0;
    };
  return _e;
}
var De, pt;
function Ie() {
  if (pt) return De;
  pt = 1;
  const e = Symbol('SemVer ANY');
  class t {
    static get ANY() {
      return e;
    }
    constructor(h, p) {
      if (((p = r(p)), h instanceof t)) {
        if (h.loose === !!p.loose) return h;
        h = h.value;
      }
      (h = h.trim().split(/\s+/).join(' ')),
        l('comparator', h, p),
        (this.options = p),
        (this.loose = !!p.loose),
        this.parse(h),
        this.semver === e
          ? (this.value = '')
          : (this.value = this.operator + this.semver.version),
        l('comp', this);
    }
    parse(h) {
      const p = this.options.loose ? n[s.COMPARATORLOOSE] : n[s.COMPARATOR],
        L = h.match(p);
      if (!L) throw new TypeError(`Invalid comparator: ${h}`);
      (this.operator = L[1] !== void 0 ? L[1] : ''),
        this.operator === '=' && (this.operator = ''),
        L[2]
          ? (this.semver = new u(L[2], this.options.loose))
          : (this.semver = e);
    }
    toString() {
      return this.value;
    }
    test(h) {
      if (
        (l('Comparator.test', h, this.options.loose),
        this.semver === e || h === e)
      )
        return !0;
      if (typeof h == 'string')
        try {
          h = new u(h, this.options);
        } catch {
          return !1;
        }
      return i(h, this.operator, this.semver, this.options);
    }
    intersects(h, p) {
      if (!(h instanceof t)) throw new TypeError('a Comparator is required');
      return this.operator === ''
        ? this.value === ''
          ? !0
          : new a(h.value, p).test(this.value)
        : h.operator === ''
          ? h.value === ''
            ? !0
            : new a(this.value, p).test(h.semver)
          : ((p = r(p)),
            (p.includePrerelease &&
              (this.value === '<0.0.0-0' || h.value === '<0.0.0-0')) ||
            (!p.includePrerelease &&
              (this.value.startsWith('<0.0.0') || h.value.startsWith('<0.0.0')))
              ? !1
              : !!(
                  (this.operator.startsWith('>') &&
                    h.operator.startsWith('>')) ||
                  (this.operator.startsWith('<') &&
                    h.operator.startsWith('<')) ||
                  (this.semver.version === h.semver.version &&
                    this.operator.includes('=') &&
                    h.operator.includes('=')) ||
                  (i(this.semver, '<', h.semver, p) &&
                    this.operator.startsWith('>') &&
                    h.operator.startsWith('<')) ||
                  (i(this.semver, '>', h.semver, p) &&
                    this.operator.startsWith('<') &&
                    h.operator.startsWith('>'))
                ));
    }
  }
  De = t;
  const r = Ve,
    { safeRe: n, t: s } = le,
    i = bt,
    l = Re,
    u = C,
    a = F();
  return De;
}
const Dn = F(),
  Pn = (e, t, r) => {
    try {
      t = new Dn(t, r);
    } catch {
      return !1;
    }
    return t.test(e);
  };
var Le = Pn;
const bn = F(),
  xn = (e, t) =>
    new bn(e, t).set.map((r) =>
      r
        .map((n) => n.value)
        .join(' ')
        .trim()
        .split(' '),
    );
var Un = xn;
const Fn = C,
  Gn = F(),
  jn = (e, t, r) => {
    let n = null,
      s = null,
      i = null;
    try {
      i = new Gn(t, r);
    } catch {
      return null;
    }
    return (
      e.forEach((l) => {
        i.test(l) &&
          (!n || s.compare(l) === -1) &&
          ((n = l), (s = new Fn(n, r)));
      }),
      n
    );
  };
var Mn = jn;
const Xn = C,
  Vn = F(),
  Yn = (e, t, r) => {
    let n = null,
      s = null,
      i = null;
    try {
      i = new Vn(t, r);
    } catch {
      return null;
    }
    return (
      e.forEach((l) => {
        i.test(l) &&
          (!n || s.compare(l) === 1) &&
          ((n = l), (s = new Xn(n, r)));
      }),
      n
    );
  };
var Wn = Yn;
const Pe = C,
  Hn = F(),
  Et = ye,
  kn = (e, t) => {
    e = new Hn(e, t);
    let r = new Pe('0.0.0');
    if (e.test(r) || ((r = new Pe('0.0.0-0')), e.test(r))) return r;
    r = null;
    for (let n = 0; n < e.set.length; ++n) {
      const s = e.set[n];
      let i = null;
      s.forEach((l) => {
        const u = new Pe(l.semver.version);
        switch (l.operator) {
          case '>':
            u.prerelease.length === 0 ? u.patch++ : u.prerelease.push(0),
              (u.raw = u.format());
          case '':
          case '>=':
            (!i || Et(u, i)) && (i = u);
            break;
          case '<':
          case '<=':
            break;
          default:
            throw new Error(`Unexpected operation: ${l.operator}`);
        }
      }),
        i && (!r || Et(r, i)) && (r = i);
    }
    return r && e.test(r) ? r : null;
  };
var qn = kn;
const Bn = F(),
  Kn = (e, t) => {
    try {
      return new Bn(e, t).range || '*';
    } catch {
      return null;
    }
  };
var zn = Kn;
const Zn = C,
  Ut = Ie(),
  { ANY: Jn } = Ut,
  Qn = F(),
  es = Le,
  mt = ye,
  dt = We,
  ts = ke,
  rs = He,
  ns = (e, t, r, n) => {
    (e = new Zn(e, n)), (t = new Qn(t, n));
    let s, i, l, u, a;
    switch (r) {
      case '>':
        (s = mt), (i = ts), (l = dt), (u = '>'), (a = '>=');
        break;
      case '<':
        (s = dt), (i = rs), (l = mt), (u = '<'), (a = '<=');
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (es(e, t, n)) return !1;
    for (let o = 0; o < t.set.length; ++o) {
      const h = t.set[o];
      let p = null,
        L = null;
      if (
        (h.forEach((m) => {
          m.semver === Jn && (m = new Ut('>=0.0.0')),
            (p = p || m),
            (L = L || m),
            s(m.semver, p.semver, n)
              ? (p = m)
              : l(m.semver, L.semver, n) && (L = m);
        }),
        p.operator === u ||
          p.operator === a ||
          ((!L.operator || L.operator === u) && i(e, L.semver)))
      )
        return !1;
      if (L.operator === a && l(e, L.semver)) return !1;
    }
    return !0;
  };
var qe = ns;
const ss = qe,
  is = (e, t, r) => ss(e, t, '>', r);
var as = is;
const os = qe,
  ls = (e, t, r) => os(e, t, '<', r);
var us = ls;
const vt = F(),
  cs = (e, t, r) => (
    (e = new vt(e, r)), (t = new vt(t, r)), e.intersects(t, r)
  );
var hs = cs;
const fs = Le,
  ps = U;
var Es = (e, t, r) => {
  const n = [];
  let s = null,
    i = null;
  const l = e.sort((h, p) => ps(h, p, r));
  for (const h of l)
    fs(h, t, r)
      ? ((i = h), s || (s = h))
      : (i && n.push([s, i]), (i = null), (s = null));
  s && n.push([s, null]);
  const u = [];
  for (const [h, p] of n)
    h === p
      ? u.push(h)
      : !p && h === l[0]
        ? u.push('*')
        : p
          ? h === l[0]
            ? u.push(`<=${p}`)
            : u.push(`${h} - ${p}`)
          : u.push(`>=${h}`);
  const a = u.join(' || '),
    o = typeof t.raw == 'string' ? t.raw : String(t);
  return a.length < o.length ? a : t;
};
const $t = F(),
  Be = Ie(),
  { ANY: be } = Be,
  ne = Le,
  Ke = U,
  ms = (e, t, r = {}) => {
    if (e === t) return !0;
    (e = new $t(e, r)), (t = new $t(t, r));
    let n = !1;
    e: for (const s of e.set) {
      for (const i of t.set) {
        const l = vs(s, i, r);
        if (((n = n || l !== null), l)) continue e;
      }
      if (n) return !1;
    }
    return !0;
  },
  ds = [new Be('>=0.0.0-0')],
  gt = [new Be('>=0.0.0')],
  vs = (e, t, r) => {
    if (e === t) return !0;
    if (e.length === 1 && e[0].semver === be) {
      if (t.length === 1 && t[0].semver === be) return !0;
      r.includePrerelease ? (e = ds) : (e = gt);
    }
    if (t.length === 1 && t[0].semver === be) {
      if (r.includePrerelease) return !0;
      t = gt;
    }
    const n = new Set();
    let s, i;
    for (const m of e)
      m.operator === '>' || m.operator === '>='
        ? (s = Rt(s, m, r))
        : m.operator === '<' || m.operator === '<='
          ? (i = yt(i, m, r))
          : n.add(m.semver);
    if (n.size > 1) return null;
    let l;
    if (s && i) {
      if (((l = Ke(s.semver, i.semver, r)), l > 0)) return null;
      if (l === 0 && (s.operator !== '>=' || i.operator !== '<=')) return null;
    }
    for (const m of n) {
      if ((s && !ne(m, String(s), r)) || (i && !ne(m, String(i), r)))
        return null;
      for (const d of t) if (!ne(m, String(d), r)) return !1;
      return !0;
    }
    let u,
      a,
      o,
      h,
      p =
        i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1,
      L =
        s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1;
    p &&
      p.prerelease.length === 1 &&
      i.operator === '<' &&
      p.prerelease[0] === 0 &&
      (p = !1);
    for (const m of t) {
      if (
        ((h = h || m.operator === '>' || m.operator === '>='),
        (o = o || m.operator === '<' || m.operator === '<='),
        s)
      ) {
        if (
          (L &&
            m.semver.prerelease &&
            m.semver.prerelease.length &&
            m.semver.major === L.major &&
            m.semver.minor === L.minor &&
            m.semver.patch === L.patch &&
            (L = !1),
          m.operator === '>' || m.operator === '>=')
        ) {
          if (((u = Rt(s, m, r)), u === m && u !== s)) return !1;
        } else if (s.operator === '>=' && !ne(s.semver, String(m), r))
          return !1;
      }
      if (i) {
        if (
          (p &&
            m.semver.prerelease &&
            m.semver.prerelease.length &&
            m.semver.major === p.major &&
            m.semver.minor === p.minor &&
            m.semver.patch === p.patch &&
            (p = !1),
          m.operator === '<' || m.operator === '<=')
        ) {
          if (((a = yt(i, m, r)), a === m && a !== i)) return !1;
        } else if (i.operator === '<=' && !ne(i.semver, String(m), r))
          return !1;
      }
      if (!m.operator && (i || s) && l !== 0) return !1;
    }
    return !((s && o && !i && l !== 0) || (i && h && !s && l !== 0) || L || p);
  },
  Rt = (e, t, r) => {
    if (!e) return t;
    const n = Ke(e.semver, t.semver, r);
    return n > 0
      ? e
      : n < 0 || (t.operator === '>' && e.operator === '>=')
        ? t
        : e;
  },
  yt = (e, t, r) => {
    if (!e) return t;
    const n = Ke(e.semver, t.semver, r);
    return n < 0
      ? e
      : n > 0 || (t.operator === '<' && e.operator === '<=')
        ? t
        : e;
  };
var $s = ms;
const xe = le,
  It = ge,
  gs = C,
  Lt = _t,
  Rs = J,
  ys = gr,
  Is = Ir,
  Ls = Nr,
  Ns = Tr,
  Ss = wr,
  Ts = Dr,
  Os = xr,
  As = Gr,
  ws = U,
  Cs = Vr,
  _s = Hr,
  Ds = Ye,
  Ps = Kr,
  bs = Jr,
  xs = ye,
  Us = We,
  Fs = Dt,
  Gs = Pt,
  js = He,
  Ms = ke,
  Xs = bt,
  Vs = In,
  Ys = Ie(),
  Ws = F(),
  Hs = Le,
  ks = Un,
  qs = Mn,
  Bs = Wn,
  Ks = qn,
  zs = zn,
  Zs = qe,
  Js = as,
  Qs = us,
  ei = hs,
  ti = Es,
  ri = $s;
var ni = {
  parse: Rs,
  valid: ys,
  clean: Is,
  inc: Ls,
  diff: Ns,
  major: Ss,
  minor: Ts,
  patch: Os,
  prerelease: As,
  compare: ws,
  rcompare: Cs,
  compareLoose: _s,
  compareBuild: Ds,
  sort: Ps,
  rsort: bs,
  gt: xs,
  lt: Us,
  eq: Fs,
  neq: Gs,
  gte: js,
  lte: Ms,
  cmp: Xs,
  coerce: Vs,
  Comparator: Ys,
  Range: Ws,
  satisfies: Hs,
  toComparators: ks,
  maxSatisfying: qs,
  minSatisfying: Bs,
  minVersion: Ks,
  validRange: zs,
  outside: Zs,
  gtr: Js,
  ltr: Qs,
  intersects: ei,
  simplifyRange: ti,
  subset: ri,
  SemVer: gs,
  re: xe.re,
  src: xe.src,
  tokens: xe.t,
  SEMVER_SPEC_VERSION: It.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: It.RELEASE_TYPES,
  compareIdentifiers: Lt.compareIdentifiers,
  rcompareIdentifiers: Lt.rcompareIdentifiers,
};
const Nt = rr(ni);
var O = {};
/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Q = j,
  ze = nr;
function Ft(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function St(e) {
  if (Ft(e) !== e)
    throw Error('Unable to find node on an unmounted component.');
}
function si(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ft(e)), t === null))
      throw Error('Unable to find node on an unmounted component.');
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var s = r.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((n = s.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === r) return St(s), e;
        if (i === n) return St(s), t;
        i = i.sibling;
      }
      throw Error('Unable to find node on an unmounted component.');
    }
    if (r.return !== n.return) (r = s), (n = i);
    else {
      for (var l = !1, u = s.child; u; ) {
        if (u === r) {
          (l = !0), (r = s), (n = i);
          break;
        }
        if (u === n) {
          (l = !0), (n = s), (r = i);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === r) {
            (l = !0), (r = i), (n = s);
            break;
          }
          if (u === n) {
            (l = !0), (n = i), (r = s);
            break;
          }
          u = u.sibling;
        }
        if (!l)
          throw Error(
            'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.',
          );
      }
    }
    if (r.alternate !== n)
      throw Error(
        "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.",
      );
  }
  if (r.tag !== 3)
    throw Error('Unable to find node on an unmounted component.');
  return r.stateNode.current === r ? e : t;
}
var _ = Object.assign;
function Ue(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function me() {
  return !0;
}
function Tt() {
  return !1;
}
function P(e) {
  function t(r, n, s, i, l) {
    (this._reactName = r),
      (this._targetInst = s),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((r = e[u]), (this[u] = r ? r(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? me
        : Tt),
      (this.isPropagationStopped = Tt),
      this
    );
  }
  return (
    _(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
          (this.isDefaultPrevented = me));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
          (this.isPropagationStopped = me));
      },
      persist: function () {},
      isPersistent: me,
    }),
    t
  );
}
var ee = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ii = P(ee),
  ue = _({}, ee, { view: 0, detail: 0 });
P(ue);
var Fe,
  Ge,
  se,
  Ne = _({}, ue, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ze,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== se &&
            (se && e.type === 'mousemove'
              ? ((Fe = e.screenX - se.screenX), (Ge = e.screenY - se.screenY))
              : (Ge = Fe = 0),
            (se = e)),
          Fe);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ge;
    },
  });
P(Ne);
var ai = _({}, Ne, { dataTransfer: 0 });
P(ai);
var oi = _({}, ue, { relatedTarget: 0 });
P(oi);
var li = _({}, ee, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
P(li);
var ui = _({}, ee, {
  clipboardData: function (e) {
    return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
  },
});
P(ui);
var ci = _({}, ee, { data: 0 });
P(ci);
var hi = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  fi = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  pi = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Ei(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pi[e]) ? !!t[e] : !1;
}
function Ze() {
  return Ei;
}
var mi = _({}, ue, {
  key: function (e) {
    if (e.key) {
      var t = hi[e.key] || e.key;
      if (t !== 'Unidentified') return t;
    }
    return e.type === 'keypress'
      ? ((e = Ue(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
      : e.type === 'keydown' || e.type === 'keyup'
        ? fi[e.keyCode] || 'Unidentified'
        : '';
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: Ze,
  charCode: function (e) {
    return e.type === 'keypress' ? Ue(e) : 0;
  },
  keyCode: function (e) {
    return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
  },
  which: function (e) {
    return e.type === 'keypress'
      ? Ue(e)
      : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
  },
});
P(mi);
var di = _({}, Ne, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0,
});
P(di);
var vi = _({}, ue, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: Ze,
});
P(vi);
var $i = _({}, ee, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
P($i);
var gi = _({}, Ne, {
  deltaX: function (e) {
    return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function (e) {
    return 'deltaY' in e
      ? e.deltaY
      : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0;
  },
  deltaZ: 0,
  deltaMode: 0,
});
P(gi);
function Ri(e, t, r, n, s, i, l, u, a) {
  var o = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, o);
  } catch (h) {
    this.onError(h);
  }
}
var oe = !1,
  ve = null,
  $e = !1,
  Xe = null,
  yi = {
    onError: function (e) {
      (oe = !0), (ve = e);
    },
  };
function Ii(e, t, r, n, s, i, l, u, a) {
  (oe = !1), (ve = null), Ri.apply(yi, arguments);
}
function Li(e, t, r, n, s, i, l, u, a) {
  if ((Ii.apply(this, arguments), oe)) {
    if (oe) {
      var o = ve;
      (oe = !1), (ve = null);
    } else
      throw Error(
        'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.',
      );
    $e || (($e = !0), (Xe = o));
  }
}
var Je = Array.isArray,
  ce = ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,
  Ni = ce[0],
  Si = ce[1],
  Ti = ce[2],
  Oi = ce[3],
  Ai = ce[4],
  wi = Q.unstable_act;
function Ci() {}
function _i(e, t) {
  if (!e) return [];
  if (((e = si(e)), !e)) return [];
  for (var r = e, n = []; ; ) {
    if (r.tag === 5 || r.tag === 6 || r.tag === 1 || r.tag === 0) {
      var s = r.stateNode;
      t(s) && n.push(s);
    }
    if (r.child) (r.child.return = r), (r = r.child);
    else {
      if (r === e) return n;
      for (; !r.sibling; ) {
        if (!r.return || r.return === e) return n;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }
}
function B(e, t) {
  if (e && !e._reactInternals) {
    var r = String(e);
    throw (
      ((e = Je(e)
        ? 'an array'
        : e && e.nodeType === 1 && e.tagName
          ? 'a DOM node'
          : r === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : r),
      Error(
        t +
          '(...): the first argument must be a React class instance. Instead received: ' +
          (e + '.'),
      ))
    );
  }
}
function Se(e) {
  return !(!e || e.nodeType !== 1 || !e.tagName);
}
function Qe(e) {
  return Se(e)
    ? !1
    : e != null &&
        typeof e.render == 'function' &&
        typeof e.setState == 'function';
}
function Gt(e, t) {
  return Qe(e) ? e._reactInternals.type === t : !1;
}
function Te(e, t) {
  return B(e, 'findAllInRenderedTree'), e ? _i(e._reactInternals, t) : [];
}
function jt(e, t) {
  return (
    B(e, 'scryRenderedDOMComponentsWithClass'),
    Te(e, function (r) {
      if (Se(r)) {
        var n = r.className;
        typeof n != 'string' && (n = r.getAttribute('class') || '');
        var s = n.split(/\s+/);
        if (!Je(t)) {
          if (t === void 0)
            throw Error(
              'TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.',
            );
          t = t.split(/\s+/);
        }
        return t.every(function (i) {
          return s.indexOf(i) !== -1;
        });
      }
      return !1;
    })
  );
}
function Mt(e, t) {
  return (
    B(e, 'scryRenderedDOMComponentsWithTag'),
    Te(e, function (r) {
      return Se(r) && r.tagName.toUpperCase() === t.toUpperCase();
    })
  );
}
function Xt(e, t) {
  return (
    B(e, 'scryRenderedComponentsWithType'),
    Te(e, function (r) {
      return Gt(r, t);
    })
  );
}
function Ot(e, t, r) {
  var n = e.type || 'unknown-event';
  (e.currentTarget = Si(r)), Li(n, t, void 0, e), (e.currentTarget = null);
}
function Vt(e, t, r) {
  for (var n = []; e; ) {
    n.push(e);
    do e = e.return;
    while (e && e.tag !== 5);
    e = e || null;
  }
  for (e = n.length; 0 < e--; ) t(n[e], 'captured', r);
  for (e = 0; e < n.length; e++) t(n[e], 'bubbled', r);
}
function Yt(e, t) {
  var r = e.stateNode;
  if (!r) return null;
  var n = Ti(r);
  if (!n) return null;
  r = n[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != 'function')
    throw Error(
      'Expected `' +
        t +
        '` listener to be a function, instead got a value of `' +
        typeof r +
        '` type.',
    );
  return r;
}
function Di(e, t, r) {
  e &&
    r &&
    r._reactName &&
    (t = Yt(e, r._reactName)) &&
    (r._dispatchListeners == null && (r._dispatchListeners = []),
    r._dispatchInstances == null && (r._dispatchInstances = []),
    r._dispatchListeners.push(t),
    r._dispatchInstances.push(e));
}
function Pi(e, t, r) {
  var n = r._reactName;
  t === 'captured' && (n += 'Capture'),
    (t = Yt(e, n)) &&
      (r._dispatchListeners == null && (r._dispatchListeners = []),
      r._dispatchInstances == null && (r._dispatchInstances = []),
      r._dispatchListeners.push(t),
      r._dispatchInstances.push(e));
}
var Wt = {},
  bi = new Set(['mouseEnter', 'mouseLeave', 'pointerEnter', 'pointerLeave']);
function xi(e) {
  return function (t, r) {
    if (Q.isValidElement(t))
      throw Error(
        'TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.',
      );
    if (Qe(t))
      throw Error(
        'TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.',
      );
    var n = 'on' + e[0].toUpperCase() + e.slice(1),
      s = new Ci();
    (s.target = t), (s.type = e.toLowerCase());
    var i = Ni(t),
      l = new ii(n, s.type, i, s, t);
    l.persist(),
      _(l, r),
      bi.has(e)
        ? l && l._reactName && Di(l._targetInst, null, l)
        : l && l._reactName && Vt(l._targetInst, Pi, l),
      ze.unstable_batchedUpdates(function () {
        if ((Oi(t), l)) {
          var u = l._dispatchListeners,
            a = l._dispatchInstances;
          if (Je(u))
            for (var o = 0; o < u.length && !l.isPropagationStopped(); o++)
              Ot(l, u[o], a[o]);
          else u && Ot(l, u, a);
          (l._dispatchListeners = null),
            (l._dispatchInstances = null),
            l.isPersistent() || l.constructor.release(l);
        }
        if ($e) throw ((u = Xe), ($e = !1), (Xe = null), u);
      }),
      Ai();
  };
}
'blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate'
  .split(' ')
  .forEach(function (e) {
    Wt[e] = xi(e);
  });
O.Simulate = Wt;
O.act = wi;
O.findAllInRenderedTree = Te;
O.findRenderedComponentWithType = function (e, t) {
  if ((B(e, 'findRenderedComponentWithType'), (e = Xt(e, t)), e.length !== 1))
    throw Error(
      'Did not find exactly one match (found: ' +
        e.length +
        ') for componentType:' +
        t,
    );
  return e[0];
};
O.findRenderedDOMComponentWithClass = function (e, t) {
  if (
    (B(e, 'findRenderedDOMComponentWithClass'), (e = jt(e, t)), e.length !== 1)
  )
    throw Error(
      'Did not find exactly one match (found: ' + e.length + ') for class:' + t,
    );
  return e[0];
};
O.findRenderedDOMComponentWithTag = function (e, t) {
  if ((B(e, 'findRenderedDOMComponentWithTag'), (e = Mt(e, t)), e.length !== 1))
    throw Error(
      'Did not find exactly one match (found: ' + e.length + ') for tag:' + t,
    );
  return e[0];
};
O.isCompositeComponent = Qe;
O.isCompositeComponentWithType = Gt;
O.isDOMComponent = Se;
O.isDOMComponentElement = function (e) {
  return !!(e && Q.isValidElement(e) && e.tagName);
};
O.isElement = function (e) {
  return Q.isValidElement(e);
};
O.isElementOfType = function (e, t) {
  return Q.isValidElement(e) && e.type === t;
};
O.mockComponent = function (e, t) {
  return (
    (t = t || e.mockTagName || 'div'),
    e.prototype.render.mockImplementation(function () {
      return Q.createElement(t, null, this.props.children);
    }),
    this
  );
};
O.nativeTouchData = function (e, t) {
  return { touches: [{ pageX: e, pageY: t }] };
};
O.renderIntoDocument = function (e) {
  var t = document.createElement('div');
  return ze.render(e, t);
};
O.scryRenderedComponentsWithType = Xt;
O.scryRenderedDOMComponentsWithClass = jt;
O.scryRenderedDOMComponentsWithTag = Mt;
O.traverseTwoPhase = Vt;
const { global: Ui } = __STORYBOOK_MODULE_GLOBAL__;
var Fi = {};
tr(Fi, {
  decorators: () => Wi,
  mount: () => Vi,
  parameters: () => Yi,
  render: () => Gi,
  renderToCanvas: () => Xi,
});
var Gi = (e, t) => {
  let { id: r, component: n } = t;
  if (!n)
    throw new Error(
      `Unable to render story ${r} as the component annotation is missing from the default export`,
    );
  return ie.createElement(n, { ...e });
};
function ji() {
  return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
var { FRAMEWORK_OPTIONS: je } = Ui,
  Mi = class extends j.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidMount() {
      let { hasError: e } = this.state,
        { showMain: t } = this.props;
      e || t();
    }
    componentDidCatch(e) {
      let { showException: t } = this.props;
      t(e);
    }
    render() {
      let { hasError: e } = this.state,
        { children: t } = this.props;
      return e ? null : t;
    }
  },
  At = je != null && je.strictMode ? j.StrictMode : j.Fragment;
async function Xi(
  {
    storyContext: e,
    unboundStoryFn: t,
    showMain: r,
    showException: n,
    forceRemount: s,
  },
  i,
) {
  var p, L;
  let { renderElement: l, unmountElement: u } = await er(
      () => import('./react-18-BKlIH9-0.js'),
      __vite__mapDeps([0, 1, 2, 3]),
      import.meta.url,
    ),
    a = t,
    o = ji()
      ? ie.createElement(a, { ...e })
      : ie.createElement(
          Mi,
          { showMain: r, showException: n },
          ie.createElement(a, { ...e }),
        ),
    h = At ? ie.createElement(At, null, o) : o;
  return (
    s && u(i),
    await l(
      h,
      i,
      (L =
        (p = e == null ? void 0 : e.parameters) == null ? void 0 : p.react) ==
        null
        ? void 0
        : L.rootOptions,
    ),
    () => u(i)
  );
}
var Vi = (e) => async (t) => (
    t != null && (e.originalStoryFn = () => t),
    await e.renderToCanvas(),
    e.canvas
  ),
  Yi = { renderer: 'react' },
  Wi = [
    (e, t) => {
      var s, i;
      if (
        !((i = (s = t.parameters) == null ? void 0 : s.react) != null && i.rsc)
      )
        return j.createElement(e, null);
      let r = Nt.major(j.version),
        n = Nt.minor(j.version);
      if (r < 18 || (r === 18 && n < 3))
        throw new Error('React Server Components require React >= 18.3');
      return j.createElement(j.Suspense, null, j.createElement(e, null));
    },
  ];
export {
  Wi as decorators,
  Vi as mount,
  Yi as parameters,
  Gi as render,
  Xi as renderToCanvas,
};
