var fg = Object.defineProperty;
var pg = (e, t, r) =>
  t in e
    ? fg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var he = (e, t, r) => pg(e, typeof t != 'symbol' ? t + '' : t, r);
const { once: hg } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  {
    FORCE_REMOUNT: ts,
    STORY_RENDER_PHASE_CHANGED: mg,
    SET_CURRENT_STORY: bg,
  } = __STORYBOOK_MODULE_CORE_EVENTS__,
  { addons: gg } = __STORYBOOK_MODULE_PREVIEW_API__,
  { global: $e } = __STORYBOOK_MODULE_GLOBAL__;
var yg = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
        ? new Proxy(e, {
            get: (t, r) => (typeof require < 'u' ? require : t)[r],
          })
        : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  }),
  vg = {
    reset: [0, 0],
    bold: [1, 22, '\x1B[22m\x1B[1m'],
    dim: [2, 22, '\x1B[22m\x1B[2m'],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    blackBright: [90, 39],
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39],
    bgBlackBright: [100, 49],
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49],
  },
  _g = Object.entries(vg);
function Ei(e) {
  return String(e);
}
Ei.open = '';
Ei.close = '';
function Eg(e = !1) {
  let t = typeof process < 'u' ? process : void 0,
    r = (t == null ? void 0 : t.env) || {},
    n = (t == null ? void 0 : t.argv) || [];
  return (
    (!('NO_COLOR' in r || n.includes('--no-color')) &&
      ('FORCE_COLOR' in r ||
        n.includes('--color') ||
        (t == null ? void 0 : t.platform) === 'win32' ||
        (e && r.TERM !== 'dumb') ||
        'CI' in r)) ||
    (typeof window < 'u' && !!window.chrome)
  );
}
function wg(e = !1) {
  let t = Eg(e),
    r = (i, l, u, c) => {
      let s = '',
        d = 0;
      do
        (s += i.substring(d, c) + u), (d = c + l.length), (c = i.indexOf(l, d));
      while (~c);
      return s + i.substring(d);
    },
    n = (i, l, u = i) => {
      let c = (s) => {
        let d = String(s),
          p = d.indexOf(l, i.length);
        return ~p ? i + r(d, l, u, p) + l : i + d + l;
      };
      return (c.open = i), (c.close = l), c;
    },
    a = { isColorSupported: t },
    o = (i) => `\x1B[${i}m`;
  for (let [i, l] of _g) a[i] = t ? n(o(l[0]), o(l[1]), l[2]) : Ei;
  return a;
}
var ht = wg(!1);
function Cg(e, t) {
  let r = Object.keys(e),
    n = t === null ? r : r.sort(t);
  if (Object.getOwnPropertySymbols)
    for (let a of Object.getOwnPropertySymbols(e))
      Object.getOwnPropertyDescriptor(e, a).enumerable && n.push(a);
  return n;
}
function ia(e, t, r, n, a, o, i = ': ') {
  let l = '',
    u = 0,
    c = e.next();
  if (!c.done) {
    l += t.spacingOuter;
    let s = r + t.indent;
    for (; !c.done; ) {
      if (((l += s), u++ === t.maxWidth)) {
        l += '…';
        break;
      }
      let d = o(c.value[0], t, s, n, a),
        p = o(c.value[1], t, s, n, a);
      (l += d + i + p),
        (c = e.next()),
        c.done ? t.min || (l += ',') : (l += `,${t.spacingInner}`);
    }
    l += t.spacingOuter + r;
  }
  return l;
}
function wi(e, t, r, n, a, o) {
  let i = '',
    l = 0,
    u = e.next();
  if (!u.done) {
    i += t.spacingOuter;
    let c = r + t.indent;
    for (; !u.done; ) {
      if (((i += c), l++ === t.maxWidth)) {
        i += '…';
        break;
      }
      (i += o(u.value, t, c, n, a)),
        (u = e.next()),
        u.done ? t.min || (i += ',') : (i += `,${t.spacingInner}`);
    }
    i += t.spacingOuter + r;
  }
  return i;
}
function Dn(e, t, r, n, a, o) {
  let i = '';
  e = e instanceof ArrayBuffer ? new DataView(e) : e;
  let l = (c) => c instanceof DataView,
    u = l(e) ? e.byteLength : e.length;
  if (u > 0) {
    i += t.spacingOuter;
    let c = r + t.indent;
    for (let s = 0; s < u; s++) {
      if (((i += c), s === t.maxWidth)) {
        i += '…';
        break;
      }
      (l(e) || s in e) && (i += o(l(e) ? e.getInt8(s) : e[s], t, c, n, a)),
        s < u - 1 ? (i += `,${t.spacingInner}`) : t.min || (i += ',');
    }
    i += t.spacingOuter + r;
  }
  return i;
}
function Ci(e, t, r, n, a, o) {
  let i = '',
    l = Cg(e, t.compareKeys);
  if (l.length > 0) {
    i += t.spacingOuter;
    let u = r + t.indent;
    for (let c = 0; c < l.length; c++) {
      let s = l[c],
        d = o(s, t, u, n, a),
        p = o(e[s], t, u, n, a);
      (i += `${u + d}: ${p}`),
        c < l.length - 1 ? (i += `,${t.spacingInner}`) : t.min || (i += ',');
    }
    i += t.spacingOuter + r;
  }
  return i;
}
var Rg =
    typeof Symbol == 'function' && Symbol.for
      ? Symbol.for('jest.asymmetricMatcher')
      : 1267621,
  Ba = ' ',
  Tg = (e, t, r, n, a, o) => {
    let i = e.toString();
    if (i === 'ArrayContaining' || i === 'ArrayNotContaining')
      return ++n > t.maxDepth
        ? `[${i}]`
        : `${i + Ba}[${Dn(e.sample, t, r, n, a, o)}]`;
    if (i === 'ObjectContaining' || i === 'ObjectNotContaining')
      return ++n > t.maxDepth
        ? `[${i}]`
        : `${i + Ba}{${Ci(e.sample, t, r, n, a, o)}}`;
    if (
      i === 'StringMatching' ||
      i === 'StringNotMatching' ||
      i === 'StringContaining' ||
      i === 'StringNotContaining'
    )
      return i + Ba + o(e.sample, t, r, n, a);
    if (typeof e.toAsymmetricMatcher != 'function')
      throw new TypeError(
        `Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`,
      );
    return e.toAsymmetricMatcher();
  },
  Sg = (e) => e && e.$$typeof === Rg,
  Pg = { serialize: Tg, test: Sg },
  Og = ' ',
  Wc = new Set(['DOMStringMap', 'NamedNodeMap']),
  Ag = /^(?:HTML\w*Collection|NodeList)$/;
function qg(e) {
  return Wc.has(e) || Ag.test(e);
}
var xg = (e) =>
  e && e.constructor && !!e.constructor.name && qg(e.constructor.name);
function Mg(e) {
  return e.constructor.name === 'NamedNodeMap';
}
var $g = (e, t, r, n, a, o) => {
    let i = e.constructor.name;
    return ++n > t.maxDepth
      ? `[${i}]`
      : (t.min ? '' : i + Og) +
          (Wc.has(i)
            ? `{${Ci(Mg(e) ? [...e].reduce((l, u) => ((l[u.name] = u.value), l), {}) : { ...e }, t, r, n, a, o)}}`
            : `[${Dn([...e], t, r, n, a, o)}]`);
  },
  Ng = { serialize: $g, test: xg };
function Kc(e) {
  return e.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}
function Ri(e, t, r, n, a, o, i) {
  let l = n + r.indent,
    u = r.colors;
  return e
    .map((c) => {
      let s = t[c],
        d = i(s, r, l, a, o);
      return (
        typeof s != 'string' &&
          (d.includes(`
`) && (d = r.spacingOuter + l + d + r.spacingOuter + n),
          (d = `{${d}}`)),
        `${r.spacingInner + n + u.prop.open + c + u.prop.close}=${u.value.open}${d}${u.value.close}`
      );
    })
    .join('');
}
function Ti(e, t, r, n, a, o) {
  return e
    .map(
      (i) =>
        t.spacingOuter +
        r +
        (typeof i == 'string' ? Yc(i, t) : o(i, t, r, n, a)),
    )
    .join('');
}
function Yc(e, t) {
  let r = t.colors.content;
  return r.open + Kc(e) + r.close;
}
function jg(e, t) {
  let r = t.colors.comment;
  return `${r.open}<!--${Kc(e)}-->${r.close}`;
}
function Si(e, t, r, n, a) {
  let o = n.colors.tag;
  return `${o.open}<${e}${t && o.close + t + n.spacingOuter + a + o.open}${r ? `>${o.close}${r}${n.spacingOuter}${a}${o.open}</${e}` : `${t && !n.min ? '' : ' '}/`}>${o.close}`;
}
function Pi(e, t) {
  let r = t.colors.tag;
  return `${r.open}<${e}${r.close} …${r.open} />${r.close}`;
}
var Ig = 1,
  Jc = 3,
  Xc = 8,
  Qc = 11,
  Lg = /^(?:(?:HTML|SVG)\w*)?Element$/;
function Bg(e) {
  try {
    return typeof e.hasAttribute == 'function' && e.hasAttribute('is');
  } catch {
    return !1;
  }
}
function kg(e) {
  let t = e.constructor.name,
    { nodeType: r, tagName: n } = e,
    a = (typeof n == 'string' && n.includes('-')) || Bg(e);
  return (
    (r === Ig && (Lg.test(t) || a)) ||
    (r === Jc && t === 'Text') ||
    (r === Xc && t === 'Comment') ||
    (r === Qc && t === 'DocumentFragment')
  );
}
var Dg = (e) => {
  var t;
  return (
    ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.name) &&
    kg(e)
  );
};
function Fg(e) {
  return e.nodeType === Jc;
}
function Ug(e) {
  return e.nodeType === Xc;
}
function ka(e) {
  return e.nodeType === Qc;
}
var Hg = (e, t, r, n, a, o) => {
    if (Fg(e)) return Yc(e.data, t);
    if (Ug(e)) return jg(e.data, t);
    let i = ka(e) ? 'DocumentFragment' : e.tagName.toLowerCase();
    return ++n > t.maxDepth
      ? Pi(i, t)
      : Si(
          i,
          Ri(
            ka(e) ? [] : Array.from(e.attributes, (l) => l.name).sort(),
            ka(e)
              ? {}
              : [...e.attributes].reduce(
                  (l, u) => ((l[u.name] = u.value), l),
                  {},
                ),
            t,
            r + t.indent,
            n,
            a,
            o,
          ),
          Ti(
            Array.prototype.slice.call(e.childNodes || e.children),
            t,
            r + t.indent,
            n,
            a,
            o,
          ),
          t,
          r,
        );
  },
  zg = { serialize: Hg, test: Dg },
  Vg = '@@__IMMUTABLE_ITERABLE__@@',
  Gg = '@@__IMMUTABLE_LIST__@@',
  Wg = '@@__IMMUTABLE_KEYED__@@',
  Kg = '@@__IMMUTABLE_MAP__@@',
  rs = '@@__IMMUTABLE_ORDERED__@@',
  Yg = '@@__IMMUTABLE_RECORD__@@',
  Jg = '@@__IMMUTABLE_SEQ__@@',
  Xg = '@@__IMMUTABLE_SET__@@',
  Qg = '@@__IMMUTABLE_STACK__@@',
  hr = (e) => `Immutable.${e}`,
  la = (e) => `[${e}]`,
  Gr = ' ',
  ns = '…';
function Zg(e, t, r, n, a, o, i) {
  return ++n > t.maxDepth
    ? la(hr(i))
    : `${hr(i) + Gr}{${ia(e.entries(), t, r, n, a, o)}}`;
}
function ey(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        let r = e._keys[t++];
        return { done: !1, value: [r, e.get(r)] };
      }
      return { done: !0, value: void 0 };
    },
  };
}
function ty(e, t, r, n, a, o) {
  let i = hr(e._name || 'Record');
  return ++n > t.maxDepth ? la(i) : `${i + Gr}{${ia(ey(e), t, r, n, a, o)}}`;
}
function ry(e, t, r, n, a, o) {
  let i = hr('Seq');
  return ++n > t.maxDepth
    ? la(i)
    : e[Wg]
      ? `${i + Gr}{${e._iter || e._object ? ia(e.entries(), t, r, n, a, o) : ns}}`
      : `${i + Gr}[${e._iter || e._array || e._collection || e._iterable ? wi(e.values(), t, r, n, a, o) : ns}]`;
}
function Da(e, t, r, n, a, o, i) {
  return ++n > t.maxDepth
    ? la(hr(i))
    : `${hr(i) + Gr}[${wi(e.values(), t, r, n, a, o)}]`;
}
var ny = (e, t, r, n, a, o) =>
    e[Kg]
      ? Zg(e, t, r, n, a, o, e[rs] ? 'OrderedMap' : 'Map')
      : e[Gg]
        ? Da(e, t, r, n, a, o, 'List')
        : e[Xg]
          ? Da(e, t, r, n, a, o, e[rs] ? 'OrderedSet' : 'Set')
          : e[Qg]
            ? Da(e, t, r, n, a, o, 'Stack')
            : e[Jg]
              ? ry(e, t, r, n, a, o)
              : ty(e, t, r, n, a, o),
  ay = (e) => e && (e[Vg] === !0 || e[Yg] === !0),
  oy = { serialize: ny, test: ay },
  Zc = { exports: {} },
  re = {},
  as;
function iy() {
  return (
    as ||
      ((as = 1),
      (function () {
        var e = Symbol.for('react.element'),
          t = Symbol.for('react.portal'),
          r = Symbol.for('react.fragment'),
          n = Symbol.for('react.strict_mode'),
          a = Symbol.for('react.profiler'),
          o = Symbol.for('react.provider'),
          i = Symbol.for('react.context'),
          l = Symbol.for('react.server_context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          s = Symbol.for('react.suspense_list'),
          d = Symbol.for('react.memo'),
          p = Symbol.for('react.lazy'),
          f = Symbol.for('react.offscreen'),
          h = !1,
          m = !1,
          y = !1,
          b = !1,
          g = !1,
          R;
        R = Symbol.for('react.module.reference');
        function C(M) {
          return !!(
            typeof M == 'string' ||
            typeof M == 'function' ||
            M === r ||
            M === a ||
            g ||
            M === n ||
            M === c ||
            M === s ||
            b ||
            M === f ||
            h ||
            m ||
            y ||
            (typeof M == 'object' &&
              M !== null &&
              (M.$$typeof === p ||
                M.$$typeof === d ||
                M.$$typeof === o ||
                M.$$typeof === i ||
                M.$$typeof === u ||
                M.$$typeof === R ||
                M.getModuleId !== void 0))
          );
        }
        function _(M) {
          if (typeof M == 'object' && M !== null) {
            var ie = M.$$typeof;
            switch (ie) {
              case e:
                var le = M.type;
                switch (le) {
                  case r:
                  case a:
                  case n:
                  case c:
                  case s:
                    return le;
                  default:
                    var ye = le && le.$$typeof;
                    switch (ye) {
                      case l:
                      case i:
                      case u:
                      case p:
                      case d:
                      case o:
                        return ye;
                      default:
                        return ie;
                    }
                }
              case t:
                return ie;
            }
          }
        }
        var w = i,
          E = o,
          v = e,
          O = u,
          $ = r,
          N = p,
          L = d,
          j = t,
          I = a,
          H = n,
          V = c,
          J = s,
          W = !1,
          _e = !1;
        function Le(M) {
          return (
            W ||
              ((W = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.',
              )),
            !1
          );
        }
        function Be(M) {
          return (
            _e ||
              ((_e = !0),
              console.warn(
                'The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.',
              )),
            !1
          );
        }
        function F(M) {
          return _(M) === i;
        }
        function B(M) {
          return _(M) === o;
        }
        function D(M) {
          return typeof M == 'object' && M !== null && M.$$typeof === e;
        }
        function G(M) {
          return _(M) === u;
        }
        function Z(M) {
          return _(M) === r;
        }
        function ue(M) {
          return _(M) === p;
        }
        function Ee(M) {
          return _(M) === d;
        }
        function st(M) {
          return _(M) === t;
        }
        function q(M) {
          return _(M) === a;
        }
        function z(M) {
          return _(M) === n;
        }
        function k(M) {
          return _(M) === c;
        }
        function X(M) {
          return _(M) === s;
        }
        (re.ContextConsumer = w),
          (re.ContextProvider = E),
          (re.Element = v),
          (re.ForwardRef = O),
          (re.Fragment = $),
          (re.Lazy = N),
          (re.Memo = L),
          (re.Portal = j),
          (re.Profiler = I),
          (re.StrictMode = H),
          (re.Suspense = V),
          (re.SuspenseList = J),
          (re.isAsyncMode = Le),
          (re.isConcurrentMode = Be),
          (re.isContextConsumer = F),
          (re.isContextProvider = B),
          (re.isElement = D),
          (re.isForwardRef = G),
          (re.isFragment = Z),
          (re.isLazy = ue),
          (re.isMemo = Ee),
          (re.isPortal = st),
          (re.isProfiler = q),
          (re.isStrictMode = z),
          (re.isSuspense = k),
          (re.isSuspenseList = X),
          (re.isValidElementType = C),
          (re.typeOf = _);
      })()),
    re
  );
}
Zc.exports = iy();
var Ft = Zc.exports;
function ed(e, t = []) {
  if (Array.isArray(e)) for (let r of e) ed(r, t);
  else e != null && e !== !1 && e !== '' && t.push(e);
  return t;
}
function os(e) {
  let t = e.type;
  if (typeof t == 'string') return t;
  if (typeof t == 'function') return t.displayName || t.name || 'Unknown';
  if (Ft.isFragment(e)) return 'React.Fragment';
  if (Ft.isSuspense(e)) return 'React.Suspense';
  if (typeof t == 'object' && t !== null) {
    if (Ft.isContextProvider(e)) return 'Context.Provider';
    if (Ft.isContextConsumer(e)) return 'Context.Consumer';
    if (Ft.isForwardRef(e)) {
      if (t.displayName) return t.displayName;
      let r = t.render.displayName || t.render.name || '';
      return r === '' ? 'ForwardRef' : `ForwardRef(${r})`;
    }
    if (Ft.isMemo(e)) {
      let r = t.displayName || t.type.displayName || t.type.name || '';
      return r === '' ? 'Memo' : `Memo(${r})`;
    }
  }
  return 'UNDEFINED';
}
function ly(e) {
  let { props: t } = e;
  return Object.keys(t)
    .filter((r) => r !== 'children' && t[r] !== void 0)
    .sort();
}
var sy = (e, t, r, n, a, o) =>
    ++n > t.maxDepth
      ? Pi(os(e), t)
      : Si(
          os(e),
          Ri(ly(e), e.props, t, r + t.indent, n, a, o),
          Ti(ed(e.props.children), t, r + t.indent, n, a, o),
          t,
          r,
        ),
  uy = (e) => e != null && Ft.isElement(e),
  cy = { serialize: sy, test: uy },
  dy =
    typeof Symbol == 'function' && Symbol.for
      ? Symbol.for('react.test.json')
      : 245830487;
function fy(e) {
  let { props: t } = e;
  return t
    ? Object.keys(t)
        .filter((r) => t[r] !== void 0)
        .sort()
    : [];
}
var py = (e, t, r, n, a, o) =>
    ++n > t.maxDepth
      ? Pi(e.type, t)
      : Si(
          e.type,
          e.props ? Ri(fy(e), e.props, t, r + t.indent, n, a, o) : '',
          e.children ? Ti(e.children, t, r + t.indent, n, a, o) : '',
          t,
          r,
        ),
  hy = (e) => e && e.$$typeof === dy,
  my = { serialize: py, test: hy },
  td = Object.prototype.toString,
  by = Date.prototype.toISOString,
  gy = Error.prototype.toString,
  is = RegExp.prototype.toString;
function Fa(e) {
  return (typeof e.constructor == 'function' && e.constructor.name) || 'Object';
}
function yy(e) {
  return typeof window < 'u' && e === window;
}
var vy = /^Symbol\((.*)\)(.*)$/,
  _y = /\n/g,
  rd = class extends Error {
    constructor(t, r) {
      super(t), (this.stack = r), (this.name = this.constructor.name);
    }
  };
function Ey(e) {
  return (
    e === '[object Array]' ||
    e === '[object ArrayBuffer]' ||
    e === '[object DataView]' ||
    e === '[object Float32Array]' ||
    e === '[object Float64Array]' ||
    e === '[object Int8Array]' ||
    e === '[object Int16Array]' ||
    e === '[object Int32Array]' ||
    e === '[object Uint8Array]' ||
    e === '[object Uint8ClampedArray]' ||
    e === '[object Uint16Array]' ||
    e === '[object Uint32Array]'
  );
}
function wy(e) {
  return Object.is(e, -0) ? '-0' : String(e);
}
function Cy(e) {
  return `${e}n`;
}
function ls(e, t) {
  return t ? `[Function ${e.name || 'anonymous'}]` : '[Function]';
}
function ss(e) {
  return String(e).replace(vy, 'Symbol($1)');
}
function us(e) {
  return `[${gy.call(e)}]`;
}
function nd(e, t, r, n) {
  if (e === !0 || e === !1) return `${e}`;
  if (e === void 0) return 'undefined';
  if (e === null) return 'null';
  let a = typeof e;
  if (a === 'number') return wy(e);
  if (a === 'bigint') return Cy(e);
  if (a === 'string')
    return n ? `"${e.replaceAll(/"|\\/g, '\\$&')}"` : `"${e}"`;
  if (a === 'function') return ls(e, t);
  if (a === 'symbol') return ss(e);
  let o = td.call(e);
  return o === '[object WeakMap]'
    ? 'WeakMap {}'
    : o === '[object WeakSet]'
      ? 'WeakSet {}'
      : o === '[object Function]' || o === '[object GeneratorFunction]'
        ? ls(e, t)
        : o === '[object Symbol]'
          ? ss(e)
          : o === '[object Date]'
            ? Number.isNaN(+e)
              ? 'Date { NaN }'
              : by.call(e)
            : o === '[object Error]'
              ? us(e)
              : o === '[object RegExp]'
                ? r
                  ? is.call(e).replaceAll(/[$()*+.?[\\\]^{|}]/g, '\\$&')
                  : is.call(e)
                : e instanceof Error
                  ? us(e)
                  : null;
}
function ad(e, t, r, n, a, o) {
  if (a.includes(e)) return '[Circular]';
  (a = [...a]), a.push(e);
  let i = ++n > t.maxDepth,
    l = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == 'function' && !o)
    return At(e.toJSON(), t, r, n, a, !0);
  let u = td.call(e);
  return u === '[object Arguments]'
    ? i
      ? '[Arguments]'
      : `${l ? '' : 'Arguments '}[${Dn(e, t, r, n, a, At)}]`
    : Ey(u)
      ? i
        ? `[${e.constructor.name}]`
        : `${l || (!t.printBasicPrototype && e.constructor.name === 'Array') ? '' : `${e.constructor.name} `}[${Dn(e, t, r, n, a, At)}]`
      : u === '[object Map]'
        ? i
          ? '[Map]'
          : `Map {${ia(e.entries(), t, r, n, a, At, ' => ')}}`
        : u === '[object Set]'
          ? i
            ? '[Set]'
            : `Set {${wi(e.values(), t, r, n, a, At)}}`
          : i || yy(e)
            ? `[${Fa(e)}]`
            : `${l || (!t.printBasicPrototype && Fa(e) === 'Object') ? '' : `${Fa(e)} `}{${Ci(e, t, r, n, a, At)}}`;
}
function Ry(e) {
  return e.serialize != null;
}
function od(e, t, r, n, a, o) {
  let i;
  try {
    i = Ry(e)
      ? e.serialize(t, r, n, a, o, At)
      : e.print(
          t,
          (l) => At(l, r, n, a, o),
          (l) => {
            let u = n + r.indent;
            return (
              u +
              l.replaceAll(
                _y,
                `
${u}`,
              )
            );
          },
          { edgeSpacing: r.spacingOuter, min: r.min, spacing: r.spacingInner },
          r.colors,
        );
  } catch (l) {
    throw new rd(l.message, l.stack);
  }
  if (typeof i != 'string')
    throw new TypeError(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`,
    );
  return i;
}
function id(e, t) {
  for (let r of e)
    try {
      if (r.test(t)) return r;
    } catch (n) {
      throw new rd(n.message, n.stack);
    }
  return null;
}
function At(e, t, r, n, a, o) {
  let i = id(t.plugins, e);
  if (i !== null) return od(i, e, t, r, n, a);
  let l = nd(e, t.printFunctionName, t.escapeRegex, t.escapeString);
  return l !== null ? l : ad(e, t, r, n, a, o);
}
var Oi = {
    comment: 'gray',
    content: 'reset',
    prop: 'yellow',
    tag: 'cyan',
    value: 'green',
  },
  ld = Object.keys(Oi),
  We = {
    callToJSON: !0,
    compareKeys: void 0,
    escapeRegex: !1,
    escapeString: !0,
    highlight: !1,
    indent: 2,
    maxDepth: Number.POSITIVE_INFINITY,
    maxWidth: Number.POSITIVE_INFINITY,
    min: !1,
    plugins: [],
    printBasicPrototype: !0,
    printFunctionName: !0,
    theme: Oi,
  };
function Ty(e) {
  for (let t of Object.keys(e))
    if (!Object.prototype.hasOwnProperty.call(We, t))
      throw new Error(`pretty-format: Unknown option "${t}".`);
  if (e.min && e.indent !== void 0 && e.indent !== 0)
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.',
    );
}
function Sy() {
  return ld.reduce((e, t) => {
    let r = Oi[t],
      n = r && ht[r];
    if (n && typeof n.close == 'string' && typeof n.open == 'string') e[t] = n;
    else
      throw new Error(
        `pretty-format: Option "theme" has a key "${t}" whose value "${r}" is undefined in ansi-styles.`,
      );
    return e;
  }, Object.create(null));
}
function Py() {
  return ld.reduce(
    (e, t) => ((e[t] = { close: '', open: '' }), e),
    Object.create(null),
  );
}
function sd(e) {
  return (e == null ? void 0 : e.printFunctionName) ?? We.printFunctionName;
}
function ud(e) {
  return (e == null ? void 0 : e.escapeRegex) ?? We.escapeRegex;
}
function cd(e) {
  return (e == null ? void 0 : e.escapeString) ?? We.escapeString;
}
function cs(e) {
  return {
    callToJSON: (e == null ? void 0 : e.callToJSON) ?? We.callToJSON,
    colors: e != null && e.highlight ? Sy() : Py(),
    compareKeys:
      typeof (e == null ? void 0 : e.compareKeys) == 'function' ||
      (e == null ? void 0 : e.compareKeys) === null
        ? e.compareKeys
        : We.compareKeys,
    escapeRegex: ud(e),
    escapeString: cd(e),
    indent:
      e != null && e.min
        ? ''
        : Oy((e == null ? void 0 : e.indent) ?? We.indent),
    maxDepth: (e == null ? void 0 : e.maxDepth) ?? We.maxDepth,
    maxWidth: (e == null ? void 0 : e.maxWidth) ?? We.maxWidth,
    min: (e == null ? void 0 : e.min) ?? We.min,
    plugins: (e == null ? void 0 : e.plugins) ?? We.plugins,
    printBasicPrototype: (e == null ? void 0 : e.printBasicPrototype) ?? !0,
    printFunctionName: sd(e),
    spacingInner:
      e != null && e.min
        ? ' '
        : `
`,
    spacingOuter:
      e != null && e.min
        ? ''
        : `
`,
  };
}
function Oy(e) {
  return Array.from({ length: e + 1 }).join(' ');
}
function rt(e, t) {
  if (t && (Ty(t), t.plugins)) {
    let n = id(t.plugins, e);
    if (n !== null) return od(n, e, cs(t), '', 0, []);
  }
  let r = nd(e, sd(t), ud(t), cd(t));
  return r !== null ? r : ad(e, cs(t), '', 0, []);
}
var dd = {
    AsymmetricMatcher: Pg,
    DOMCollection: Ng,
    DOMElement: zg,
    Immutable: oy,
    ReactElement: cy,
    ReactTestComponent: my,
  },
  ds = {
    bold: ['1', '22'],
    dim: ['2', '22'],
    italic: ['3', '23'],
    underline: ['4', '24'],
    inverse: ['7', '27'],
    hidden: ['8', '28'],
    strike: ['9', '29'],
    black: ['30', '39'],
    red: ['31', '39'],
    green: ['32', '39'],
    yellow: ['33', '39'],
    blue: ['34', '39'],
    magenta: ['35', '39'],
    cyan: ['36', '39'],
    white: ['37', '39'],
    brightblack: ['30;1', '39'],
    brightred: ['31;1', '39'],
    brightgreen: ['32;1', '39'],
    brightyellow: ['33;1', '39'],
    brightblue: ['34;1', '39'],
    brightmagenta: ['35;1', '39'],
    brightcyan: ['36;1', '39'],
    brightwhite: ['37;1', '39'],
    grey: ['90', '39'],
  },
  Ay = {
    special: 'cyan',
    number: 'yellow',
    bigint: 'yellow',
    boolean: 'yellow',
    undefined: 'grey',
    null: 'bold',
    string: 'green',
    symbol: 'green',
    date: 'magenta',
    regexp: 'red',
  },
  mr = '…';
function qy(e, t) {
  let r = ds[Ay[t]] || ds[t] || '';
  return r ? `\x1B[${r[0]}m${String(e)}\x1B[${r[1]}m` : String(e);
}
function xy(
  {
    showHidden: e = !1,
    depth: t = 2,
    colors: r = !1,
    customInspect: n = !0,
    showProxy: a = !1,
    maxArrayLength: o = 1 / 0,
    breakLength: i = 1 / 0,
    seen: l = [],
    truncate: u = 1 / 0,
    stylize: c = String,
  } = {},
  s,
) {
  let d = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!r,
    customInspect: !!n,
    showProxy: !!a,
    maxArrayLength: Number(o),
    breakLength: Number(i),
    truncate: Number(u),
    seen: l,
    inspect: s,
    stylize: c,
  };
  return d.colors && (d.stylize = qy), d;
}
function My(e) {
  return e >= '\uD800' && e <= '\uDBFF';
}
function Lt(e, t, r = mr) {
  e = String(e);
  let n = r.length,
    a = e.length;
  if (n > t && a > n) return r;
  if (a > t && a > n) {
    let o = t - n;
    return o > 0 && My(e[o - 1]) && (o = o - 1), `${e.slice(0, o)}${r}`;
  }
  return e;
}
function Qe(e, t, r, n = ', ') {
  r = r || t.inspect;
  let a = e.length;
  if (a === 0) return '';
  let o = t.truncate,
    i = '',
    l = '',
    u = '';
  for (let c = 0; c < a; c += 1) {
    let s = c + 1 === e.length,
      d = c + 2 === e.length;
    u = `${mr}(${e.length - c})`;
    let p = e[c];
    t.truncate = o - i.length - (s ? 0 : n.length);
    let f = l || r(p, t) + (s ? '' : n),
      h = i.length + f.length,
      m = h + u.length;
    if (
      (s && h > o && i.length + u.length <= o) ||
      (!s && !d && m > o) ||
      ((l = s ? '' : r(e[c + 1], t) + (d ? '' : n)),
      !s && d && m > o && h + l.length > o)
    )
      break;
    if (((i += f), !s && !d && h + l.length >= o)) {
      u = `${mr}(${e.length - c - 1})`;
      break;
    }
    u = '';
  }
  return `${i}${u}`;
}
function $y(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)
    ? e
    : JSON.stringify(e)
        .replace(/'/g, "\\'")
        .replace(/\\"/g, '"')
        .replace(/(^"|"$)/g, "'");
}
function Wr([e, t], r) {
  return (
    (r.truncate -= 2),
    typeof e == 'string'
      ? (e = $y(e))
      : typeof e != 'number' && (e = `[${r.inspect(e, r)}]`),
    (r.truncate -= e.length),
    (t = r.inspect(t, r)),
    `${e}: ${t}`
  );
}
function Ny(e, t) {
  let r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length) return '[]';
  t.truncate -= 4;
  let n = Qe(e, t);
  t.truncate -= n.length;
  let a = '';
  return (
    r.length &&
      (a = Qe(
        r.map((o) => [o, e[o]]),
        t,
        Wr,
      )),
    `[ ${n}${a ? `, ${a}` : ''} ]`
  );
}
var jy = (e) =>
  typeof Buffer == 'function' && e instanceof Buffer
    ? 'Buffer'
    : e[Symbol.toStringTag]
      ? e[Symbol.toStringTag]
      : e.constructor.name;
function ct(e, t) {
  let r = jy(e);
  t.truncate -= r.length + 4;
  let n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length) return `${r}[]`;
  let a = '';
  for (let i = 0; i < e.length; i++) {
    let l = `${t.stylize(Lt(e[i], t.truncate), 'number')}${i === e.length - 1 ? '' : ', '}`;
    if (((t.truncate -= l.length), e[i] !== e.length && t.truncate <= 3)) {
      a += `${mr}(${e.length - e[i] + 1})`;
      break;
    }
    a += l;
  }
  let o = '';
  return (
    n.length &&
      (o = Qe(
        n.map((i) => [i, e[i]]),
        t,
        Wr,
      )),
    `${r}[ ${a}${o ? `, ${o}` : ''} ]`
  );
}
function Iy(e, t) {
  let r = e.toJSON();
  if (r === null) return 'Invalid Date';
  let n = r.split('T'),
    a = n[0];
  return t.stylize(`${a}T${Lt(n[1], t.truncate - a.length - 1)}`, 'date');
}
function fs(e, t) {
  let r = e[Symbol.toStringTag] || 'Function',
    n = e.name;
  return n
    ? t.stylize(`[${r} ${Lt(n, t.truncate - 11)}]`, 'special')
    : t.stylize(`[${r}]`, 'special');
}
function Ly([e, t], r) {
  return (
    (r.truncate -= 4),
    (e = r.inspect(e, r)),
    (r.truncate -= e.length),
    (t = r.inspect(t, r)),
    `${e} => ${t}`
  );
}
function By(e) {
  let t = [];
  return (
    e.forEach((r, n) => {
      t.push([n, r]);
    }),
    t
  );
}
function ky(e, t) {
  return e.size - 1 <= 0
    ? 'Map{}'
    : ((t.truncate -= 7), `Map{ ${Qe(By(e), t, Ly)} }`);
}
var Dy = Number.isNaN || ((e) => e !== e);
function ps(e, t) {
  return Dy(e)
    ? t.stylize('NaN', 'number')
    : e === 1 / 0
      ? t.stylize('Infinity', 'number')
      : e === -1 / 0
        ? t.stylize('-Infinity', 'number')
        : e === 0
          ? t.stylize(1 / e === 1 / 0 ? '+0' : '-0', 'number')
          : t.stylize(Lt(String(e), t.truncate), 'number');
}
function hs(e, t) {
  let r = Lt(e.toString(), t.truncate - 1);
  return r !== mr && (r += 'n'), t.stylize(r, 'bigint');
}
function Fy(e, t) {
  let r = e.toString().split('/')[2],
    n = t.truncate - (2 + r.length),
    a = e.source;
  return t.stylize(`/${Lt(a, n)}/${r}`, 'regexp');
}
function Uy(e) {
  let t = [];
  return (
    e.forEach((r) => {
      t.push(r);
    }),
    t
  );
}
function Hy(e, t) {
  return e.size === 0 ? 'Set{}' : ((t.truncate -= 7), `Set{ ${Qe(Uy(e), t)} }`);
}
var ms = new RegExp(
    "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
    'g',
  ),
  zy = {
    '\b': '\\b',
    '	': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    "'": "\\'",
    '\\': '\\\\',
  },
  Vy = 16,
  Gy = 4;
function Wy(e) {
  return zy[e] || `\\u${`0000${e.charCodeAt(0).toString(Vy)}`.slice(-Gy)}`;
}
function bs(e, t) {
  return (
    ms.test(e) && (e = e.replace(ms, Wy)),
    t.stylize(`'${Lt(e, t.truncate - 2)}'`, 'string')
  );
}
function gs(e) {
  return 'description' in Symbol.prototype
    ? e.description
      ? `Symbol(${e.description})`
      : 'Symbol()'
    : e.toString();
}
var fd = () => 'Promise{…}';
try {
  let {
    getPromiseDetails: e,
    kPending: t,
    kRejected: r,
  } = process.binding('util');
  Array.isArray(e(Promise.resolve())) &&
    (fd = (n, a) => {
      let [o, i] = e(n);
      return o === t
        ? 'Promise{<pending>}'
        : `Promise${o === r ? '!' : ''}{${a.inspect(i, a)}}`;
    });
} catch {}
var Ky = fd;
function xn(e, t) {
  let r = Object.getOwnPropertyNames(e),
    n = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (r.length === 0 && n.length === 0) return '{}';
  if (((t.truncate -= 4), (t.seen = t.seen || []), t.seen.indexOf(e) >= 0))
    return '[Circular]';
  t.seen.push(e);
  let a = Qe(
      r.map((l) => [l, e[l]]),
      t,
      Wr,
    ),
    o = Qe(
      n.map((l) => [l, e[l]]),
      t,
      Wr,
    );
  t.seen.pop();
  let i = '';
  return a && o && (i = ', '), `{ ${a}${i}${o} }`;
}
var Ua = typeof Symbol < 'u' && Symbol.toStringTag ? Symbol.toStringTag : !1;
function Yy(e, t) {
  let r = '';
  return (
    Ua && Ua in e && (r = e[Ua]),
    (r = r || e.constructor.name),
    (!r || r === '_class') && (r = '<Anonymous Class>'),
    (t.truncate -= r.length),
    `${r}${xn(e, t)}`
  );
}
function Jy(e, t) {
  return e.length === 0
    ? 'Arguments[]'
    : ((t.truncate -= 13), `Arguments[ ${Qe(e, t)} ]`);
}
var Xy = [
  'stack',
  'line',
  'column',
  'name',
  'message',
  'fileName',
  'lineNumber',
  'columnNumber',
  'number',
  'description',
];
function Qy(e, t) {
  let r = Object.getOwnPropertyNames(e).filter((i) => Xy.indexOf(i) === -1),
    n = e.name;
  t.truncate -= n.length;
  let a = '';
  typeof e.message == 'string'
    ? (a = Lt(e.message, t.truncate))
    : r.unshift('message'),
    (a = a ? `: ${a}` : ''),
    (t.truncate -= a.length + 5);
  let o = Qe(
    r.map((i) => [i, e[i]]),
    t,
    Wr,
  );
  return `${n}${a}${o ? ` { ${o} }` : ''}`;
}
function Zy([e, t], r) {
  return (
    (r.truncate -= 3),
    t
      ? `${r.stylize(String(e), 'yellow')}=${r.stylize(`"${t}"`, 'string')}`
      : `${r.stylize(String(e), 'yellow')}`
  );
}
function mo(e, t) {
  return Qe(
    e,
    t,
    pd,
    `
`,
  );
}
function pd(e, t) {
  let r = e.getAttributeNames(),
    n = e.tagName.toLowerCase(),
    a = t.stylize(`<${n}`, 'special'),
    o = t.stylize('>', 'special'),
    i = t.stylize(`</${n}>`, 'special');
  t.truncate -= n.length * 2 + 5;
  let l = '';
  r.length > 0 &&
    ((l += ' '),
    (l += Qe(
      r.map((s) => [s, e.getAttribute(s)]),
      t,
      Zy,
      ' ',
    ))),
    (t.truncate -= l.length);
  let u = t.truncate,
    c = mo(e.children, t);
  return (
    c && c.length > u && (c = `${mr}(${e.children.length})`),
    `${a}${l}${o}${c}${i}`
  );
}
var ev = typeof Symbol == 'function' && typeof Symbol.for == 'function',
  Ha = ev ? Symbol.for('chai/inspect') : '@@chai/inspect',
  rr = !1;
try {
  let e = yg('util');
  rr = e.inspect ? e.inspect.custom : !1;
} catch {
  rr = !1;
}
var ys = new WeakMap(),
  vs = {},
  _s = {
    undefined: (e, t) => t.stylize('undefined', 'undefined'),
    null: (e, t) => t.stylize('null', 'null'),
    boolean: (e, t) => t.stylize(String(e), 'boolean'),
    Boolean: (e, t) => t.stylize(String(e), 'boolean'),
    number: ps,
    Number: ps,
    bigint: hs,
    BigInt: hs,
    string: bs,
    String: bs,
    function: fs,
    Function: fs,
    symbol: gs,
    Symbol: gs,
    Array: Ny,
    Date: Iy,
    Map: ky,
    Set: Hy,
    RegExp: Fy,
    Promise: Ky,
    WeakSet: (e, t) => t.stylize('WeakSet{…}', 'special'),
    WeakMap: (e, t) => t.stylize('WeakMap{…}', 'special'),
    Arguments: Jy,
    Int8Array: ct,
    Uint8Array: ct,
    Uint8ClampedArray: ct,
    Int16Array: ct,
    Uint16Array: ct,
    Int32Array: ct,
    Uint32Array: ct,
    Float32Array: ct,
    Float64Array: ct,
    Generator: () => '',
    DataView: () => '',
    ArrayBuffer: () => '',
    Error: Qy,
    HTMLCollection: mo,
    NodeList: mo,
  },
  tv = (e, t, r) =>
    Ha in e && typeof e[Ha] == 'function'
      ? e[Ha](t)
      : rr && rr in e && typeof e[rr] == 'function'
        ? e[rr](t.depth, t)
        : 'inspect' in e && typeof e.inspect == 'function'
          ? e.inspect(t.depth, t)
          : 'constructor' in e && ys.has(e.constructor)
            ? ys.get(e.constructor)(e, t)
            : vs[r]
              ? vs[r](e, t)
              : '',
  rv = Object.prototype.toString;
function bo(e, t = {}) {
  let r = xy(t, bo),
    { customInspect: n } = r,
    a = e === null ? 'null' : typeof e;
  if ((a === 'object' && (a = rv.call(e).slice(8, -1)), a in _s))
    return _s[a](e, r);
  if (n && e) {
    let i = tv(e, r, a);
    if (i) return typeof i == 'string' ? i : bo(i, r);
  }
  let o = e ? Object.getPrototypeOf(e) : !1;
  return o === Object.prototype || o === null
    ? xn(e, r)
    : e && typeof HTMLElement == 'function' && e instanceof HTMLElement
      ? pd(e, r)
      : 'constructor' in e
        ? e.constructor !== Object
          ? Yy(e, r)
          : xn(e, r)
        : e === Object(e)
          ? xn(e, r)
          : r.stylize(String(e), a);
}
var {
    AsymmetricMatcher: nv,
    DOMCollection: av,
    DOMElement: ov,
    Immutable: iv,
    ReactElement: lv,
    ReactTestComponent: sv,
  } = dd,
  Es = [sv, lv, ov, av, iv, nv];
function Kr(e, t = 10, { maxLength: r, ...n } = {}) {
  let a = r ?? 1e4,
    o;
  try {
    o = rt(e, { maxDepth: t, escapeString: !1, plugins: Es, ...n });
  } catch {
    o = rt(e, {
      callToJSON: !1,
      maxDepth: t,
      escapeString: !1,
      plugins: Es,
      ...n,
    });
  }
  return o.length >= a && t > 1 ? Kr(e, Math.floor(t / 2)) : o;
}
var uv = /%[sdjifoOc%]/g;
function cv(...e) {
  if (typeof e[0] != 'string') {
    let o = [];
    for (let i = 0; i < e.length; i++)
      o.push($r(e[i], { depth: 0, colors: !1 }));
    return o.join(' ');
  }
  let t = e.length,
    r = 1,
    n = e[0],
    a = String(n).replace(uv, (o) => {
      if (o === '%%') return '%';
      if (r >= t) return o;
      switch (o) {
        case '%s': {
          let i = e[r++];
          return typeof i == 'bigint'
            ? `${i.toString()}n`
            : typeof i == 'number' && i === 0 && 1 / i < 0
              ? '-0'
              : typeof i == 'object' && i !== null
                ? $r(i, { depth: 0, colors: !1 })
                : String(i);
        }
        case '%d': {
          let i = e[r++];
          return typeof i == 'bigint'
            ? `${i.toString()}n`
            : Number(i).toString();
        }
        case '%i': {
          let i = e[r++];
          return typeof i == 'bigint'
            ? `${i.toString()}n`
            : Number.parseInt(String(i)).toString();
        }
        case '%f':
          return Number.parseFloat(String(e[r++])).toString();
        case '%o':
          return $r(e[r++], { showHidden: !0, showProxy: !0 });
        case '%O':
          return $r(e[r++]);
        case '%c':
          return r++, '';
        case '%j':
          try {
            return JSON.stringify(e[r++]);
          } catch (i) {
            let l = i.message;
            if (
              l.includes('circular structure') ||
              l.includes('cyclic structures') ||
              l.includes('cyclic object')
            )
              return '[Circular]';
            throw i;
          }
        default:
          return o;
      }
    });
  for (let o = e[r]; r < t; o = e[++r])
    o === null || typeof o != 'object' ? (a += ` ${o}`) : (a += ` ${$r(o)}`);
  return a;
}
function $r(e, t = {}) {
  return t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY), bo(e, t);
}
function dv(e) {
  return (
    e === Object.prototype || e === Function.prototype || e === RegExp.prototype
  );
}
function go(e) {
  return Object.prototype.toString.apply(e).slice(8, -1);
}
function fv(e, t) {
  let r = typeof t == 'function' ? t : (n) => t.add(n);
  Object.getOwnPropertyNames(e).forEach(r),
    Object.getOwnPropertySymbols(e).forEach(r);
}
function hd(e) {
  let t = new Set();
  return dv(e) ? [] : (fv(e, t), Array.from(t));
}
var md = { forceWritable: !1 };
function ws(e, t = md) {
  return yo(e, new WeakMap(), t);
}
function yo(e, t, r = md) {
  let n, a;
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    for (a = Array((n = e.length)), t.set(e, a); n--; ) a[n] = yo(e[n], t, r);
    return a;
  }
  if (Object.prototype.toString.call(e) === '[object Object]') {
    (a = Object.create(Object.getPrototypeOf(e))), t.set(e, a);
    let o = hd(e);
    for (let i of o) {
      let l = Object.getOwnPropertyDescriptor(e, i);
      if (!l) continue;
      let u = yo(e[i], t, r);
      r.forceWritable
        ? Object.defineProperty(a, i, {
            enumerable: l.enumerable,
            configurable: !0,
            writable: !0,
            value: u,
          })
        : 'get' in l
          ? Object.defineProperty(a, i, {
              ...l,
              get() {
                return u;
              },
            })
          : Object.defineProperty(a, i, { ...l, value: u });
    }
    return a;
  }
  return e;
}
function Cs(e) {
  if (e === void 0) return 'undefined';
  if (e === null) return 'null';
  if (Array.isArray(e)) return 'array';
  if (typeof e == 'boolean') return 'boolean';
  if (typeof e == 'function') return 'function';
  if (typeof e == 'number') return 'number';
  if (typeof e == 'string') return 'string';
  if (typeof e == 'bigint') return 'bigint';
  if (typeof e == 'object') {
    if (e != null) {
      if (e.constructor === RegExp) return 'regexp';
      if (e.constructor === Map) return 'map';
      if (e.constructor === Set) return 'set';
      if (e.constructor === Date) return 'date';
    }
    return 'object';
  } else if (typeof e == 'symbol') return 'symbol';
  throw new Error(`value of unknown type: ${e}`);
}
var Pe = -1,
  Ce = 1,
  be = 0,
  fe = class {
    constructor(t, r) {
      he(this, 0);
      he(this, 1);
      (this[0] = t), (this[1] = r);
    }
  },
  pv = function (e, t) {
    if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
    let r = 0,
      n = Math.min(e.length, t.length),
      a = n,
      o = 0;
    for (; r < a; )
      e.substring(o, a) === t.substring(o, a) ? ((r = a), (o = r)) : (n = a),
        (a = Math.floor((n - r) / 2 + r));
    return a;
  },
  bd = function (e, t) {
    if (!e || !t || e.charAt(e.length - 1) !== t.charAt(t.length - 1)) return 0;
    let r = 0,
      n = Math.min(e.length, t.length),
      a = n,
      o = 0;
    for (; r < a; )
      e.substring(e.length - a, e.length - o) ===
      t.substring(t.length - a, t.length - o)
        ? ((r = a), (o = r))
        : (n = a),
        (a = Math.floor((n - r) / 2 + r));
    return a;
  },
  Rs = function (e, t) {
    let r = e.length,
      n = t.length;
    if (r === 0 || n === 0) return 0;
    r > n ? (e = e.substring(r - n)) : r < n && (t = t.substring(0, r));
    let a = Math.min(r, n);
    if (e === t) return a;
    let o = 0,
      i = 1;
    for (;;) {
      let l = e.substring(a - i),
        u = t.indexOf(l);
      if (u === -1) return o;
      (i += u),
        (u === 0 || e.substring(a - i) === t.substring(0, i)) && ((o = i), i++);
    }
  },
  hv = function (e) {
    let t = !1,
      r = [],
      n = 0,
      a = null,
      o = 0,
      i = 0,
      l = 0,
      u = 0,
      c = 0;
    for (; o < e.length; )
      e[o][0] === be
        ? ((r[n++] = o), (i = u), (l = c), (u = 0), (c = 0), (a = e[o][1]))
        : (e[o][0] === Ce ? (u += e[o][1].length) : (c += e[o][1].length),
          a &&
            a.length <= Math.max(i, l) &&
            a.length <= Math.max(u, c) &&
            (e.splice(r[n - 1], 0, new fe(Pe, a)),
            (e[r[n - 1] + 1][0] = Ce),
            n--,
            n--,
            (o = n > 0 ? r[n - 1] : -1),
            (i = 0),
            (l = 0),
            (u = 0),
            (c = 0),
            (a = null),
            (t = !0))),
        o++;
    for (t && gd(e), gv(e), o = 1; o < e.length; ) {
      if (e[o - 1][0] === Pe && e[o][0] === Ce) {
        let s = e[o - 1][1],
          d = e[o][1],
          p = Rs(s, d),
          f = Rs(d, s);
        p >= f
          ? (p >= s.length / 2 || p >= d.length / 2) &&
            (e.splice(o, 0, new fe(be, d.substring(0, p))),
            (e[o - 1][1] = s.substring(0, s.length - p)),
            (e[o + 1][1] = d.substring(p)),
            o++)
          : (f >= s.length / 2 || f >= d.length / 2) &&
            (e.splice(o, 0, new fe(be, s.substring(0, f))),
            (e[o - 1][0] = Ce),
            (e[o - 1][1] = d.substring(0, d.length - f)),
            (e[o + 1][0] = Pe),
            (e[o + 1][1] = s.substring(f)),
            o++),
          o++;
      }
      o++;
    }
  },
  Ts = /[^a-z0-9]/i,
  Ss = /\s/,
  Ps = /[\r\n]/,
  mv = /\n\r?\n$/,
  bv = /^\r?\n\r?\n/;
function gv(e) {
  function t(n, a) {
    if (!n || !a) return 6;
    let o = n.charAt(n.length - 1),
      i = a.charAt(0),
      l = o.match(Ts),
      u = i.match(Ts),
      c = l && o.match(Ss),
      s = u && i.match(Ss),
      d = c && o.match(Ps),
      p = s && i.match(Ps),
      f = d && n.match(mv),
      h = p && a.match(bv);
    return f || h
      ? 5
      : d || p
        ? 4
        : l && !c && s
          ? 3
          : c || s
            ? 2
            : l || u
              ? 1
              : 0;
  }
  let r = 1;
  for (; r < e.length - 1; ) {
    if (e[r - 1][0] === be && e[r + 1][0] === be) {
      let n = e[r - 1][1],
        a = e[r][1],
        o = e[r + 1][1],
        i = bd(n, a);
      if (i) {
        let d = a.substring(a.length - i);
        (n = n.substring(0, n.length - i)),
          (a = d + a.substring(0, a.length - i)),
          (o = d + o);
      }
      let l = n,
        u = a,
        c = o,
        s = t(n, a) + t(a, o);
      for (; a.charAt(0) === o.charAt(0); ) {
        (n += a.charAt(0)),
          (a = a.substring(1) + o.charAt(0)),
          (o = o.substring(1));
        let d = t(n, a) + t(a, o);
        d >= s && ((s = d), (l = n), (u = a), (c = o));
      }
      e[r - 1][1] !== l &&
        (l ? (e[r - 1][1] = l) : (e.splice(r - 1, 1), r--),
        (e[r][1] = u),
        c ? (e[r + 1][1] = c) : (e.splice(r + 1, 1), r--));
    }
    r++;
  }
}
function gd(e) {
  e.push(new fe(be, ''));
  let t = 0,
    r = 0,
    n = 0,
    a = '',
    o = '',
    i;
  for (; t < e.length; )
    switch (e[t][0]) {
      case Ce:
        n++, (o += e[t][1]), t++;
        break;
      case Pe:
        r++, (a += e[t][1]), t++;
        break;
      case be:
        r + n > 1
          ? (r !== 0 &&
              n !== 0 &&
              ((i = pv(o, a)),
              i !== 0 &&
                (t - r - n > 0 && e[t - r - n - 1][0] === be
                  ? (e[t - r - n - 1][1] += o.substring(0, i))
                  : (e.splice(0, 0, new fe(be, o.substring(0, i))), t++),
                (o = o.substring(i)),
                (a = a.substring(i))),
              (i = bd(o, a)),
              i !== 0 &&
                ((e[t][1] = o.substring(o.length - i) + e[t][1]),
                (o = o.substring(0, o.length - i)),
                (a = a.substring(0, a.length - i)))),
            (t -= r + n),
            e.splice(t, r + n),
            a.length && (e.splice(t, 0, new fe(Pe, a)), t++),
            o.length && (e.splice(t, 0, new fe(Ce, o)), t++),
            t++)
          : t !== 0 && e[t - 1][0] === be
            ? ((e[t - 1][1] += e[t][1]), e.splice(t, 1))
            : t++,
          (n = 0),
          (r = 0),
          (a = ''),
          (o = '');
        break;
    }
  e[e.length - 1][1] === '' && e.pop();
  let l = !1;
  for (t = 1; t < e.length - 1; )
    e[t - 1][0] === be &&
      e[t + 1][0] === be &&
      (e[t][1].substring(e[t][1].length - e[t - 1][1].length) === e[t - 1][1]
        ? ((e[t][1] =
            e[t - 1][1] +
            e[t][1].substring(0, e[t][1].length - e[t - 1][1].length)),
          (e[t + 1][1] = e[t - 1][1] + e[t + 1][1]),
          e.splice(t - 1, 1),
          (l = !0))
        : e[t][1].substring(0, e[t + 1][1].length) === e[t + 1][1] &&
          ((e[t - 1][1] += e[t + 1][1]),
          (e[t][1] = e[t][1].substring(e[t + 1][1].length) + e[t + 1][1]),
          e.splice(t + 1, 1),
          (l = !0))),
      t++;
  l && gd(e);
}
var yd = 'Compared values have no visual difference.',
  yv =
    'Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.',
  vd = {};
Object.defineProperty(vd, '__esModule', { value: !0 });
var _d = (vd.default = wv),
  Dr = 'diff-sequences',
  Te = 0,
  Yr = (e, t, r, n, a) => {
    let o = 0;
    for (; e < t && r < n && a(e, r); ) (e += 1), (r += 1), (o += 1);
    return o;
  },
  Jr = (e, t, r, n, a) => {
    let o = 0;
    for (; e <= t && r <= n && a(t, n); ) (t -= 1), (n -= 1), (o += 1);
    return o;
  },
  za = (e, t, r, n, a, o, i) => {
    let l = 0,
      u = -e,
      c = o[l],
      s = c;
    o[l] += Yr(c + 1, t, n + c - u + 1, r, a);
    let d = e < i ? e : i;
    for (l += 1, u += 2; l <= d; l += 1, u += 2) {
      if (l !== e && s < o[l]) c = o[l];
      else if (((c = s + 1), t <= c)) return l - 1;
      (s = o[l]), (o[l] = c + Yr(c + 1, t, n + c - u + 1, r, a));
    }
    return i;
  },
  Os = (e, t, r, n, a, o, i) => {
    let l = 0,
      u = e,
      c = o[l],
      s = c;
    o[l] -= Jr(t, c - 1, r, n + c - u - 1, a);
    let d = e < i ? e : i;
    for (l += 1, u -= 2; l <= d; l += 1, u -= 2) {
      if (l !== e && o[l] < s) c = o[l];
      else if (((c = s - 1), c < t)) return l - 1;
      (s = o[l]), (o[l] = c - Jr(t, c - 1, r, n + c - u - 1, a));
    }
    return i;
  },
  vv = (e, t, r, n, a, o, i, l, u, c, s) => {
    let d = n - t,
      p = r - t,
      f = a - n - p,
      h = -f - (e - 1),
      m = -f + (e - 1),
      y = Te,
      b = e < l ? e : l;
    for (let g = 0, R = -e; g <= b; g += 1, R += 2) {
      let C = g === 0 || (g !== e && y < i[g]),
        _ = C ? i[g] : y,
        w = C ? _ : _ + 1,
        E = d + w - R,
        v = Yr(w + 1, r, E + 1, a, o),
        O = w + v;
      if (((y = i[g]), (i[g] = O), h <= R && R <= m)) {
        let $ = (e - 1 - (R + f)) / 2;
        if ($ <= c && u[$] - 1 <= O) {
          let N = d + _ - (C ? R + 1 : R - 1),
            L = Jr(t, _, n, N, o),
            j = _ - L,
            I = N - L,
            H = j + 1,
            V = I + 1;
          (s.nChangePreceding = e - 1),
            e - 1 === H + V - t - n
              ? ((s.aEndPreceding = t), (s.bEndPreceding = n))
              : ((s.aEndPreceding = H), (s.bEndPreceding = V)),
            (s.nCommonPreceding = L),
            L !== 0 && ((s.aCommonPreceding = H), (s.bCommonPreceding = V)),
            (s.nCommonFollowing = v),
            v !== 0 &&
              ((s.aCommonFollowing = w + 1), (s.bCommonFollowing = E + 1));
          let J = O + 1,
            W = E + v + 1;
          return (
            (s.nChangeFollowing = e - 1),
            e - 1 === r + a - J - W
              ? ((s.aStartFollowing = r), (s.bStartFollowing = a))
              : ((s.aStartFollowing = J), (s.bStartFollowing = W)),
            !0
          );
        }
      }
    }
    return !1;
  },
  _v = (e, t, r, n, a, o, i, l, u, c, s) => {
    let d = a - r,
      p = r - t,
      f = a - n - p,
      h = f - e,
      m = f + e,
      y = Te,
      b = e < c ? e : c;
    for (let g = 0, R = e; g <= b; g += 1, R -= 2) {
      let C = g === 0 || (g !== e && u[g] < y),
        _ = C ? u[g] : y,
        w = C ? _ : _ - 1,
        E = d + w - R,
        v = Jr(t, w - 1, n, E - 1, o),
        O = w - v;
      if (((y = u[g]), (u[g] = O), h <= R && R <= m)) {
        let $ = (e + (R - f)) / 2;
        if ($ <= l && O - 1 <= i[$]) {
          let N = E - v;
          if (
            ((s.nChangePreceding = e),
            e === O + N - t - n
              ? ((s.aEndPreceding = t), (s.bEndPreceding = n))
              : ((s.aEndPreceding = O), (s.bEndPreceding = N)),
            (s.nCommonPreceding = v),
            v !== 0 && ((s.aCommonPreceding = O), (s.bCommonPreceding = N)),
            (s.nChangeFollowing = e - 1),
            e === 1)
          )
            (s.nCommonFollowing = 0),
              (s.aStartFollowing = r),
              (s.bStartFollowing = a);
          else {
            let L = d + _ - (C ? R - 1 : R + 1),
              j = Yr(_, r, L, a, o);
            (s.nCommonFollowing = j),
              j !== 0 && ((s.aCommonFollowing = _), (s.bCommonFollowing = L));
            let I = _ + j,
              H = L + j;
            e - 1 === r + a - I - H
              ? ((s.aStartFollowing = r), (s.bStartFollowing = a))
              : ((s.aStartFollowing = I), (s.bStartFollowing = H));
          }
          return !0;
        }
      }
    }
    return !1;
  },
  Ev = (e, t, r, n, a, o, i, l, u) => {
    let c = n - t,
      s = a - r,
      d = r - t,
      p = a - n,
      f = p - d,
      h = d,
      m = d;
    if (((i[0] = t - 1), (l[0] = r), f % 2 === 0)) {
      let y = (e || f) / 2,
        b = (d + p) / 2;
      for (let g = 1; g <= b; g += 1)
        if (((h = za(g, r, a, c, o, i, h)), g < y)) m = Os(g, t, n, s, o, l, m);
        else if (_v(g, t, r, n, a, o, i, h, l, m, u)) return;
    } else {
      let y = ((e || f) + 1) / 2,
        b = (d + p + 1) / 2,
        g = 1;
      for (h = za(g, r, a, c, o, i, h), g += 1; g <= b; g += 1)
        if (((m = Os(g - 1, t, n, s, o, l, m)), g < y))
          h = za(g, r, a, c, o, i, h);
        else if (vv(g, t, r, n, a, o, i, h, l, m, u)) return;
    }
    throw new Error(
      `${Dr}: no overlap aStart=${t} aEnd=${r} bStart=${n} bEnd=${a}`,
    );
  },
  vo = (e, t, r, n, a, o, i, l, u, c) => {
    if (a - n < r - t) {
      if (((o = !o), o && i.length === 1)) {
        let { foundSubsequence: $, isCommon: N } = i[0];
        i[1] = {
          foundSubsequence: (L, j, I) => {
            $(L, I, j);
          },
          isCommon: (L, j) => N(j, L),
        };
      }
      let v = t,
        O = r;
      (t = n), (r = a), (n = v), (a = O);
    }
    let { foundSubsequence: s, isCommon: d } = i[o ? 1 : 0];
    Ev(e, t, r, n, a, d, l, u, c);
    let {
      nChangePreceding: p,
      aEndPreceding: f,
      bEndPreceding: h,
      nCommonPreceding: m,
      aCommonPreceding: y,
      bCommonPreceding: b,
      nCommonFollowing: g,
      aCommonFollowing: R,
      bCommonFollowing: C,
      nChangeFollowing: _,
      aStartFollowing: w,
      bStartFollowing: E,
    } = c;
    t < f && n < h && vo(p, t, f, n, h, o, i, l, u, c),
      m !== 0 && s(m, y, b),
      g !== 0 && s(g, R, C),
      w < r && E < a && vo(_, w, r, E, a, o, i, l, u, c);
  },
  As = (e, t) => {
    if (typeof t != 'number')
      throw new TypeError(`${Dr}: ${e} typeof ${typeof t} is not a number`);
    if (!Number.isSafeInteger(t))
      throw new RangeError(`${Dr}: ${e} value ${t} is not a safe integer`);
    if (t < 0)
      throw new RangeError(`${Dr}: ${e} value ${t} is a negative integer`);
  },
  qs = (e, t) => {
    let r = typeof t;
    if (r !== 'function')
      throw new TypeError(`${Dr}: ${e} typeof ${r} is not a function`);
  };
function wv(e, t, r, n) {
  As('aLength', e),
    As('bLength', t),
    qs('isCommon', r),
    qs('foundSubsequence', n);
  let a = Yr(0, e, 0, t, r);
  if ((a !== 0 && n(a, 0, 0), e !== a || t !== a)) {
    let o = a,
      i = a,
      l = Jr(o, e - 1, i, t - 1, r),
      u = e - l,
      c = t - l,
      s = a + l;
    e !== s &&
      t !== s &&
      vo(
        0,
        o,
        u,
        i,
        c,
        !1,
        [{ foundSubsequence: n, isCommon: r }],
        [Te],
        [Te],
        {
          aCommonFollowing: Te,
          aCommonPreceding: Te,
          aEndPreceding: Te,
          aStartFollowing: Te,
          bCommonFollowing: Te,
          bCommonPreceding: Te,
          bEndPreceding: Te,
          bStartFollowing: Te,
          nChangeFollowing: Te,
          nChangePreceding: Te,
          nCommonFollowing: Te,
          nCommonPreceding: Te,
        },
      ),
      l !== 0 && n(l, u, c);
  }
}
function Cv(e, t) {
  return e.replace(/\s+$/, (r) => t(r));
}
function Ai(e, t, r, n, a, o) {
  return e.length !== 0
    ? r(`${n} ${Cv(e, a)}`)
    : n !== ' '
      ? r(n)
      : t && o.length !== 0
        ? r(`${n} ${o}`)
        : '';
}
function Ed(
  e,
  t,
  {
    aColor: r,
    aIndicator: n,
    changeLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: o,
  },
) {
  return Ai(e, t, r, n, a, o);
}
function wd(
  e,
  t,
  {
    bColor: r,
    bIndicator: n,
    changeLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: o,
  },
) {
  return Ai(e, t, r, n, a, o);
}
function Cd(
  e,
  t,
  {
    commonColor: r,
    commonIndicator: n,
    commonLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: o,
  },
) {
  return Ai(e, t, r, n, a, o);
}
function xs(e, t, r, n, { patchColor: a }) {
  return a(`@@ -${e + 1},${t - e} +${r + 1},${n - r} @@`);
}
function Rv(e, t) {
  let r = e.length,
    n = t.contextLines,
    a = n + n,
    o = r,
    i = !1,
    l = 0,
    u = 0;
  for (; u !== r; ) {
    let C = u;
    for (; u !== r && e[u][0] === be; ) u += 1;
    if (C !== u)
      if (C === 0) u > n && ((o -= u - n), (i = !0));
      else if (u === r) {
        let _ = u - C;
        _ > n && ((o -= _ - n), (i = !0));
      } else {
        let _ = u - C;
        _ > a && ((o -= _ - a), (l += 1));
      }
    for (; u !== r && e[u][0] !== be; ) u += 1;
  }
  let c = l !== 0 || i;
  l !== 0 ? (o += l + 1) : i && (o += 1);
  let s = o - 1,
    d = [],
    p = 0;
  c && d.push('');
  let f = 0,
    h = 0,
    m = 0,
    y = 0,
    b = (C) => {
      let _ = d.length;
      d.push(Cd(C, _ === 0 || _ === s, t)), (m += 1), (y += 1);
    },
    g = (C) => {
      let _ = d.length;
      d.push(Ed(C, _ === 0 || _ === s, t)), (m += 1);
    },
    R = (C) => {
      let _ = d.length;
      d.push(wd(C, _ === 0 || _ === s, t)), (y += 1);
    };
  for (u = 0; u !== r; ) {
    let C = u;
    for (; u !== r && e[u][0] === be; ) u += 1;
    if (C !== u)
      if (C === 0) {
        u > n && ((C = u - n), (f = C), (h = C), (m = f), (y = h));
        for (let _ = C; _ !== u; _ += 1) b(e[_][1]);
      } else if (u === r) {
        let _ = u - C > n ? C + n : u;
        for (let w = C; w !== _; w += 1) b(e[w][1]);
      } else {
        let _ = u - C;
        if (_ > a) {
          let w = C + n;
          for (let v = C; v !== w; v += 1) b(e[v][1]);
          (d[p] = xs(f, m, h, y, t)), (p = d.length), d.push('');
          let E = _ - a;
          (f = m + E), (h = y + E), (m = f), (y = h);
          for (let v = u - n; v !== u; v += 1) b(e[v][1]);
        } else for (let w = C; w !== u; w += 1) b(e[w][1]);
      }
    for (; u !== r && e[u][0] === Pe; ) g(e[u][1]), (u += 1);
    for (; u !== r && e[u][0] === Ce; ) R(e[u][1]), (u += 1);
  }
  return (
    c && (d[p] = xs(f, m, h, y, t)),
    d.join(`
`)
  );
}
function Tv(e, t) {
  return e.map((r, n, a) => {
    let o = r[1],
      i = n === 0 || n === a.length - 1;
    switch (r[0]) {
      case Pe:
        return Ed(o, i, t);
      case Ce:
        return wd(o, i, t);
      default:
        return Cd(o, i, t);
    }
  }).join(`
`);
}
var Va = (e) => e,
  Rd = 5,
  Sv = 0;
function Pv() {
  return {
    aAnnotation: 'Expected',
    aColor: ht.green,
    aIndicator: '-',
    bAnnotation: 'Received',
    bColor: ht.red,
    bIndicator: '+',
    changeColor: ht.inverse,
    changeLineTrailingSpaceColor: Va,
    commonColor: ht.dim,
    commonIndicator: ' ',
    commonLineTrailingSpaceColor: Va,
    compareKeys: void 0,
    contextLines: Rd,
    emptyFirstOrLastLinePlaceholder: '',
    expand: !0,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: ht.yellow,
    truncateThreshold: Sv,
    truncateAnnotation: '... Diff result is truncated',
    truncateAnnotationColor: Va,
  };
}
function Ov(e) {
  return e && typeof e == 'function' ? e : void 0;
}
function Av(e) {
  return typeof e == 'number' && Number.isSafeInteger(e) && e >= 0 ? e : Rd;
}
function Jt(e = {}) {
  return {
    ...Pv(),
    ...e,
    compareKeys: Ov(e.compareKeys),
    contextLines: Av(e.contextLines),
  };
}
function nr(e) {
  return e.length === 1 && e[0].length === 0;
}
function qv(e) {
  let t = 0,
    r = 0;
  return (
    e.forEach((n) => {
      switch (n[0]) {
        case Pe:
          t += 1;
          break;
        case Ce:
          r += 1;
          break;
      }
    }),
    { a: t, b: r }
  );
}
function xv(
  {
    aAnnotation: e,
    aColor: t,
    aIndicator: r,
    bAnnotation: n,
    bColor: a,
    bIndicator: o,
    includeChangeCounts: i,
    omitAnnotationLines: l,
  },
  u,
) {
  if (l) return '';
  let c = '',
    s = '';
  if (i) {
    let f = String(u.a),
      h = String(u.b),
      m = n.length - e.length,
      y = ' '.repeat(Math.max(0, m)),
      b = ' '.repeat(Math.max(0, -m)),
      g = h.length - f.length,
      R = ' '.repeat(Math.max(0, g)),
      C = ' '.repeat(Math.max(0, -g));
    (c = `${y}  ${r} ${R}${f}`), (s = `${b}  ${o} ${C}${h}`);
  }
  let d = `${r} ${e}${c}`,
    p = `${o} ${n}${s}`;
  return `${t(d)}
${a(p)}

`;
}
function qi(e, t, r) {
  return (
    xv(r, qv(e)) +
    (r.expand ? Tv(e, r) : Rv(e, r)) +
    (t
      ? r.truncateAnnotationColor(`
${r.truncateAnnotation}`)
      : '')
  );
}
function sa(e, t, r) {
  let n = Jt(r),
    [a, o] = Td(nr(e) ? [] : e, nr(t) ? [] : t, n);
  return qi(a, o, n);
}
function Mv(e, t, r, n, a) {
  if (
    (nr(e) && nr(r) && ((e = []), (r = [])),
    nr(t) && nr(n) && ((t = []), (n = [])),
    e.length !== r.length || t.length !== n.length)
  )
    return sa(e, t, a);
  let [o, i] = Td(r, n, a),
    l = 0,
    u = 0;
  return (
    o.forEach((c) => {
      switch (c[0]) {
        case Pe:
          (c[1] = e[l]), (l += 1);
          break;
        case Ce:
          (c[1] = t[u]), (u += 1);
          break;
        default:
          (c[1] = t[u]), (l += 1), (u += 1);
      }
    }),
    qi(o, i, Jt(a))
  );
}
function Td(e, t, r) {
  let n = (r == null ? void 0 : r.truncateThreshold) ?? !1,
    a = Math.max(
      Math.floor((r == null ? void 0 : r.truncateThreshold) ?? 0),
      0,
    ),
    o = n ? Math.min(e.length, a) : e.length,
    i = n ? Math.min(t.length, a) : t.length,
    l = o !== e.length || i !== t.length,
    u = (p, f) => e[p] === t[f],
    c = [],
    s = 0,
    d = 0;
  for (
    _d(o, i, u, (p, f, h) => {
      for (; s !== f; s += 1) c.push(new fe(Pe, e[s]));
      for (; d !== h; d += 1) c.push(new fe(Ce, t[d]));
      for (; p !== 0; p -= 1, s += 1, d += 1) c.push(new fe(be, t[d]));
    });
    s !== o;
    s += 1
  )
    c.push(new fe(Pe, e[s]));
  for (; d !== i; d += 1) c.push(new fe(Ce, t[d]));
  return [c, l];
}
function Ms(e) {
  return e.includes(`\r
`)
    ? `\r
`
    : `
`;
}
function $v(e, t, r) {
  let n = (r == null ? void 0 : r.truncateThreshold) ?? !1,
    a = Math.max(
      Math.floor((r == null ? void 0 : r.truncateThreshold) ?? 0),
      0,
    ),
    o = e.length,
    i = t.length;
  if (n) {
    let p = e.includes(`
`),
      f = t.includes(`
`),
      h = Ms(e),
      m = Ms(t),
      y = p
        ? `${e.split(h, a).join(h)}
`
        : e,
      b = f
        ? `${t.split(m, a).join(m)}
`
        : t;
    (o = y.length), (i = b.length);
  }
  let l = o !== e.length || i !== t.length,
    u = (p, f) => e[p] === t[f],
    c = 0,
    s = 0,
    d = [];
  return (
    _d(o, i, u, (p, f, h) => {
      c !== f && d.push(new fe(Pe, e.slice(c, f))),
        s !== h && d.push(new fe(Ce, t.slice(s, h))),
        (c = f + p),
        (s = h + p),
        d.push(new fe(be, t.slice(h, s)));
    }),
    c !== o && d.push(new fe(Pe, e.slice(c))),
    s !== i && d.push(new fe(Ce, t.slice(s))),
    [d, l]
  );
}
function Nv(e, t, r) {
  return t.reduce(
    (n, a) =>
      n + (a[0] === be ? a[1] : a[0] === e && a[1].length !== 0 ? r(a[1]) : ''),
    '',
  );
}
var $s = class {
    constructor(t, r) {
      he(this, 'op');
      he(this, 'line');
      he(this, 'lines');
      he(this, 'changeColor');
      (this.op = t),
        (this.line = []),
        (this.lines = []),
        (this.changeColor = r);
    }
    pushSubstring(t) {
      this.pushDiff(new fe(this.op, t));
    }
    pushLine() {
      this.lines.push(
        this.line.length !== 1
          ? new fe(this.op, Nv(this.op, this.line, this.changeColor))
          : this.line[0][0] === this.op
            ? this.line[0]
            : new fe(this.op, this.line[0][1]),
      ),
        (this.line.length = 0);
    }
    isLineEmpty() {
      return this.line.length === 0;
    }
    pushDiff(t) {
      this.line.push(t);
    }
    align(t) {
      let r = t[1];
      if (
        r.includes(`
`)
      ) {
        let n = r.split(`
`),
          a = n.length - 1;
        n.forEach((o, i) => {
          i < a
            ? (this.pushSubstring(o), this.pushLine())
            : o.length !== 0 && this.pushSubstring(o);
        });
      } else this.pushDiff(t);
    }
    moveLinesTo(t) {
      this.isLineEmpty() || this.pushLine(),
        t.push(...this.lines),
        (this.lines.length = 0);
    }
  },
  jv = class {
    constructor(t, r) {
      he(this, 'deleteBuffer');
      he(this, 'insertBuffer');
      he(this, 'lines');
      (this.deleteBuffer = t), (this.insertBuffer = r), (this.lines = []);
    }
    pushDiffCommonLine(t) {
      this.lines.push(t);
    }
    pushDiffChangeLines(t) {
      let r = t[1].length === 0;
      (!r || this.deleteBuffer.isLineEmpty()) && this.deleteBuffer.pushDiff(t),
        (!r || this.insertBuffer.isLineEmpty()) &&
          this.insertBuffer.pushDiff(t);
    }
    flushChangeLines() {
      this.deleteBuffer.moveLinesTo(this.lines),
        this.insertBuffer.moveLinesTo(this.lines);
    }
    align(t) {
      let r = t[0],
        n = t[1];
      if (
        n.includes(`
`)
      ) {
        let a = n.split(`
`),
          o = a.length - 1;
        a.forEach((i, l) => {
          if (l === 0) {
            let u = new fe(r, i);
            this.deleteBuffer.isLineEmpty() && this.insertBuffer.isLineEmpty()
              ? (this.flushChangeLines(), this.pushDiffCommonLine(u))
              : (this.pushDiffChangeLines(u), this.flushChangeLines());
          } else
            l < o
              ? this.pushDiffCommonLine(new fe(r, i))
              : i.length !== 0 && this.pushDiffChangeLines(new fe(r, i));
        });
      } else this.pushDiffChangeLines(t);
    }
    getLines() {
      return this.flushChangeLines(), this.lines;
    }
  };
function Iv(e, t) {
  let r = new $s(Pe, t),
    n = new $s(Ce, t),
    a = new jv(r, n);
  return (
    e.forEach((o) => {
      switch (o[0]) {
        case Pe:
          r.align(o);
          break;
        case Ce:
          n.align(o);
          break;
        default:
          a.align(o);
      }
    }),
    a.getLines()
  );
}
function Lv(e, t) {
  if (t) {
    let r = e.length - 1;
    return e.some(
      (n, a) =>
        n[0] === be &&
        (a !== r ||
          n[1] !==
            `
`),
    );
  }
  return e.some((r) => r[0] === be);
}
function Bv(e, t, r) {
  if (e !== t && e.length !== 0 && t.length !== 0) {
    let n =
        e.includes(`
`) ||
        t.includes(`
`),
      [a, o] = Sd(
        n
          ? `${e}
`
          : e,
        n
          ? `${t}
`
          : t,
        !0,
        r,
      );
    if (Lv(a, n)) {
      let i = Jt(r),
        l = Iv(a, i.changeColor);
      return qi(l, o, i);
    }
  }
  return sa(
    e.split(`
`),
    t.split(`
`),
    r,
  );
}
function Sd(e, t, r, n) {
  let [a, o] = $v(e, t, n);
  return hv(a), [a, o];
}
function _o(e, t) {
  let { commonColor: r } = Jt(t);
  return r(e);
}
var {
    AsymmetricMatcher: kv,
    DOMCollection: Dv,
    DOMElement: Fv,
    Immutable: Uv,
    ReactElement: Hv,
    ReactTestComponent: zv,
  } = dd,
  Pd = [zv, Hv, Fv, Dv, Uv, kv],
  Eo = { plugins: Pd },
  Od = { callToJSON: !1, maxDepth: 10, plugins: Pd };
function Vv(e, t, r) {
  if (Object.is(e, t)) return '';
  let n = Cs(e),
    a = n,
    o = !1;
  if (n === 'object' && typeof e.asymmetricMatch == 'function') {
    if (
      e.$$typeof !== Symbol.for('jest.asymmetricMatcher') ||
      typeof e.getExpectedType != 'function'
    )
      return;
    (a = e.getExpectedType()), (o = a === 'string');
  }
  if (a !== Cs(t)) {
    let {
        aAnnotation: i,
        aColor: l,
        aIndicator: u,
        bAnnotation: c,
        bColor: s,
        bIndicator: d,
      } = Jt(r),
      p = wo(Od, r),
      f = rt(e, p),
      h = rt(t, p),
      m = `${l(`${u} ${i}:`)} 
${f}`,
      y = `${s(`${d} ${c}:`)} 
${h}`;
    return `${m}

${y}`;
  }
  if (!o)
    switch (n) {
      case 'string':
        return sa(
          e.split(`
`),
          t.split(`
`),
          r,
        );
      case 'boolean':
      case 'number':
        return Gv(e, t, r);
      case 'map':
        return Ga(Ns(e), Ns(t), r);
      case 'set':
        return Ga(js(e), js(t), r);
      default:
        return Ga(e, t, r);
    }
}
function Gv(e, t, r) {
  let n = rt(e, Eo),
    a = rt(t, Eo);
  return n === a
    ? ''
    : sa(
        n.split(`
`),
        a.split(`
`),
        r,
      );
}
function Ns(e) {
  return new Map(Array.from(e.entries()).sort());
}
function js(e) {
  return new Set(Array.from(e.values()).sort());
}
function Ga(e, t, r) {
  let n,
    a = !1;
  try {
    let i = wo(Eo, r);
    n = Is(e, t, i, r);
  } catch {
    a = !0;
  }
  let o = _o(yd, r);
  if (n === void 0 || n === o) {
    let i = wo(Od, r);
    (n = Is(e, t, i, r)),
      n !== o &&
        !a &&
        (n = `${_o(yv, r)}

${n}`);
  }
  return n;
}
function wo(e, t) {
  let { compareKeys: r } = Jt(t);
  return { ...e, compareKeys: r };
}
function Is(e, t, r, n) {
  let a = { ...r, indent: 0 },
    o = rt(e, a),
    i = rt(t, a);
  if (o === i) return _o(yd, n);
  {
    let l = rt(e, r),
      u = rt(t, r);
    return Mv(
      l.split(`
`),
      u.split(`
`),
      o.split(`
`),
      i.split(`
`),
      n,
    );
  }
}
var Ls = 2e4;
function Bs(e) {
  return go(e) === 'Object' && typeof e.asymmetricMatch == 'function';
}
function ks(e, t) {
  let r = go(e),
    n = go(t);
  return r === n && (r === 'Object' || r === 'Array');
}
function Wv(e, t, r) {
  let { aAnnotation: n, bAnnotation: a } = Jt(r);
  if (
    typeof e == 'string' &&
    typeof t == 'string' &&
    e.length > 0 &&
    t.length > 0 &&
    e.length <= Ls &&
    t.length <= Ls &&
    e !== t
  ) {
    if (
      e.includes(`
`) ||
      t.includes(`
`)
    )
      return Bv(t, e, r);
    let [c] = Sd(t, e),
      s = c.some((h) => h[0] === be),
      d = Kv(n, a),
      p = d(n) + Xv(Ds(c, Pe, s)),
      f = d(a) + Jv(Ds(c, Ce, s));
    return `${p}
${f}`;
  }
  let o = ws(e, { forceWritable: !0 }),
    i = ws(t, { forceWritable: !0 }),
    { replacedExpected: l, replacedActual: u } = Ad(o, i);
  return Vv(l, u, r);
}
function Ad(e, t, r = new WeakSet(), n = new WeakSet()) {
  return ks(e, t)
    ? r.has(e) || n.has(t)
      ? { replacedActual: e, replacedExpected: t }
      : (r.add(e),
        n.add(t),
        hd(t).forEach((a) => {
          let o = t[a],
            i = e[a];
          if (Bs(o)) o.asymmetricMatch(i) && (e[a] = o);
          else if (Bs(i)) i.asymmetricMatch(o) && (t[a] = i);
          else if (ks(i, o)) {
            let l = Ad(i, o, r, n);
            (e[a] = l.replacedActual), (t[a] = l.replacedExpected);
          }
        }),
        { replacedActual: e, replacedExpected: t })
    : { replacedActual: e, replacedExpected: t };
}
function Kv(...e) {
  let t = e.reduce((r, n) => (n.length > r ? n.length : r), 0);
  return (r) => `${r}: ${' '.repeat(t - r.length)}`;
}
var Yv = '·';
function qd(e) {
  return e.replace(/\s+$/gm, (t) => Yv.repeat(t.length));
}
function Jv(e) {
  return ht.red(qd(Kr(e)));
}
function Xv(e) {
  return ht.green(qd(Kr(e)));
}
function Ds(e, t, r) {
  return e.reduce(
    (n, a) =>
      n +
      (a[0] === be ? a[1] : a[0] === t ? (r ? ht.inverse(a[1]) : a[1]) : ''),
    '',
  );
}
var Qv = '@@__IMMUTABLE_RECORD__@@',
  Zv = '@@__IMMUTABLE_ITERABLE__@@';
function e_(e) {
  return e && (e[Zv] || e[Qv]);
}
var t_ = Object.getPrototypeOf({});
function Fs(e) {
  return e instanceof Error
    ? `<unserializable>: ${e.message}`
    : typeof e == 'string'
      ? `<unserializable>: ${e}`
      : '<unserializable>';
}
function ar(e, t = new WeakMap()) {
  if (!e || typeof e == 'string') return e;
  if (typeof e == 'function') return `Function<${e.name || 'anonymous'}>`;
  if (typeof e == 'symbol') return e.toString();
  if (typeof e != 'object') return e;
  if (e_(e)) return ar(e.toJSON(), t);
  if (
    e instanceof Promise ||
    (e.constructor && e.constructor.prototype === 'AsyncFunction')
  )
    return 'Promise';
  if (typeof Element < 'u' && e instanceof Element) return e.tagName;
  if (typeof e.asymmetricMatch == 'function')
    return `${e.toString()} ${cv(e.sample)}`;
  if (typeof e.toJSON == 'function') return ar(e.toJSON(), t);
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    let r = new Array(e.length);
    return (
      t.set(e, r),
      e.forEach((n, a) => {
        try {
          r[a] = ar(n, t);
        } catch (o) {
          r[a] = Fs(o);
        }
      }),
      r
    );
  } else {
    let r = Object.create(null);
    t.set(e, r);
    let n = e;
    for (; n && n !== t_; )
      Object.getOwnPropertyNames(n).forEach((a) => {
        if (!(a in r))
          try {
            r[a] = ar(e[a], t);
          } catch (o) {
            delete r[a], (r[a] = Fs(o));
          }
      }),
        (n = Object.getPrototypeOf(n));
    return r;
  }
}
function r_(e) {
  return e.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, '');
}
function xd(e, t, r = new WeakSet()) {
  if (!e || typeof e != 'object') return { message: String(e) };
  let n = e;
  n.stack && (n.stackStr = String(n.stack)),
    n.name && (n.nameStr = String(n.name)),
    (n.showDiff ||
      (n.showDiff === void 0 &&
        n.expected !== void 0 &&
        n.actual !== void 0)) &&
      (n.diff = Wv(n.actual, n.expected, { ...t, ...n.diffOptions })),
    typeof n.expected != 'string' && (n.expected = Kr(n.expected, 10)),
    typeof n.actual != 'string' && (n.actual = Kr(n.actual, 10));
  try {
    typeof n.message == 'string' && (n.message = r_(n.message));
  } catch {}
  try {
    !r.has(n) &&
      typeof n.cause == 'object' &&
      (r.add(n), (n.cause = xd(n.cause, t, r)));
  } catch {}
  try {
    return ar(n);
  } catch (a) {
    return ar(
      new Error(`Failed to fully serialize error: ${a == null ? void 0 : a.message}
Inner error message: ${n == null ? void 0 : n.message}`),
    );
  }
}
var n_ = ((e) => (
    (e.DONE = 'done'),
    (e.ERROR = 'error'),
    (e.ACTIVE = 'active'),
    (e.WAITING = 'waiting'),
    e
  ))(n_ || {}),
  dt = {
    CALL: 'storybook/instrumenter/call',
    SYNC: 'storybook/instrumenter/sync',
    START: 'storybook/instrumenter/start',
    BACK: 'storybook/instrumenter/back',
    GOTO: 'storybook/instrumenter/goto',
    NEXT: 'storybook/instrumenter/next',
    END: 'storybook/instrumenter/end',
  },
  Us = { start: !1, back: !1, goto: !1, next: !1, end: !1 },
  a_ = new Error(
    'This function ran after the play function completed. Did you forget to `await` it?',
  ),
  Hs = (e) => Object.prototype.toString.call(e) === '[object Object]',
  o_ = (e) => Object.prototype.toString.call(e) === '[object Module]',
  i_ = (e) => {
    if (!Hs(e) && !o_(e)) return !1;
    if (e.constructor === void 0) return !0;
    let t = e.constructor.prototype;
    return !!Hs(t);
  },
  l_ = (e) => {
    try {
      return new e.constructor();
    } catch {
      return {};
    }
  },
  Wa = () => ({
    renderPhase: void 0,
    isDebugging: !1,
    isPlaying: !1,
    isLocked: !1,
    cursor: 0,
    calls: [],
    shadowCalls: [],
    callRefsByResult: new Map(),
    chainedCallIds: new Set(),
    ancestors: [],
    playUntil: void 0,
    resolvers: {},
    syncTimeout: void 0,
  }),
  zs = (e, t = !1) => {
    let r = (t ? e.shadowCalls : e.calls).filter((a) => a.retain);
    if (!r.length) return;
    let n = new Map(
      Array.from(e.callRefsByResult.entries()).filter(([, a]) => a.retain),
    );
    return { cursor: r.length, calls: r, callRefsByResult: n };
  },
  s_ = class {
    constructor() {
      var i;
      (this.initialized = !1),
        (this.channel = gg.getChannel()),
        (this.state =
          ((i = $e.window) == null
            ? void 0
            : i.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__) ||
          {});
      let e = ({ storyId: l, isPlaying: u = !0, isDebugging: c = !1 }) => {
        let s = this.getState(l);
        this.setState(l, {
          ...Wa(),
          ...zs(s, c),
          shadowCalls: c ? s.shadowCalls : [],
          chainedCallIds: c ? s.chainedCallIds : new Set(),
          playUntil: c ? s.playUntil : void 0,
          isPlaying: u,
          isDebugging: c,
        }),
          this.sync(l);
      };
      this.channel.on(ts, e),
        this.channel.on(mg, ({ storyId: l, newPhase: u }) => {
          let { isDebugging: c } = this.getState(l);
          this.setState(l, { renderPhase: u }),
            u === 'preparing' && c && e({ storyId: l }),
            u === 'playing' && e({ storyId: l, isDebugging: c }),
            u === 'played' &&
              this.setState(l, {
                isLocked: !1,
                isPlaying: !1,
                isDebugging: !1,
              }),
            u === 'errored' &&
              this.setState(l, { isLocked: !1, isPlaying: !1 });
        }),
        this.channel.on(bg, () => {
          this.initialized ? this.cleanup() : (this.initialized = !0);
        });
      let t = ({ storyId: l, playUntil: u }) => {
          this.getState(l).isDebugging ||
            this.setState(l, ({ calls: s }) => ({
              calls: [],
              shadowCalls: s.map((d) => ({ ...d, status: 'waiting' })),
              isDebugging: !0,
            }));
          let c = this.getLog(l);
          this.setState(l, ({ shadowCalls: s }) => {
            var p;
            if (u || !c.length) return { playUntil: u };
            let d = s.findIndex((f) => f.id === c[0].callId);
            return {
              playUntil:
                (p = s
                  .slice(0, d)
                  .filter((f) => f.interceptable && !f.ancestors.length)
                  .slice(-1)[0]) == null
                  ? void 0
                  : p.id,
            };
          }),
            this.channel.emit(ts, { storyId: l, isDebugging: !0 });
        },
        r = ({ storyId: l }) => {
          var s;
          let u = this.getLog(l).filter((d) => !d.ancestors.length),
            c = u.reduceRight(
              (d, p, f) => (d >= 0 || p.status === 'waiting' ? d : f),
              -1,
            );
          t({
            storyId: l,
            playUntil: (s = u[c - 1]) == null ? void 0 : s.callId,
          });
        },
        n = ({ storyId: l, callId: u }) => {
          var h;
          let { calls: c, shadowCalls: s, resolvers: d } = this.getState(l),
            p = c.find(({ id: m }) => m === u),
            f = s.find(({ id: m }) => m === u);
          if (!p && f && Object.values(d).length > 0) {
            let m =
              (h = this.getLog(l).find((y) => y.status === 'waiting')) == null
                ? void 0
                : h.callId;
            f.id !== m && this.setState(l, { playUntil: f.id }),
              Object.values(d).forEach((y) => y());
          } else t({ storyId: l, playUntil: u });
        },
        a = ({ storyId: l }) => {
          var c;
          let { resolvers: u } = this.getState(l);
          if (Object.values(u).length > 0) Object.values(u).forEach((s) => s());
          else {
            let s =
              (c = this.getLog(l).find((d) => d.status === 'waiting')) == null
                ? void 0
                : c.callId;
            s ? t({ storyId: l, playUntil: s }) : o({ storyId: l });
          }
        },
        o = ({ storyId: l }) => {
          this.setState(l, { playUntil: void 0, isDebugging: !1 }),
            Object.values(this.getState(l).resolvers).forEach((u) => u());
        };
      this.channel.on(dt.START, t),
        this.channel.on(dt.BACK, r),
        this.channel.on(dt.GOTO, n),
        this.channel.on(dt.NEXT, a),
        this.channel.on(dt.END, o);
    }
    getState(e) {
      return this.state[e] || Wa();
    }
    setState(e, t) {
      var a;
      let r = this.getState(e),
        n = typeof t == 'function' ? t(r) : t;
      (this.state = { ...this.state, [e]: { ...r, ...n } }),
        (a = $e.window) != null &&
          a.parent &&
          ($e.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ =
            this.state);
    }
    cleanup() {
      var t;
      this.state = Object.entries(this.state).reduce((r, [n, a]) => {
        let o = zs(a);
        return o && (r[n] = Object.assign(Wa(), o)), r;
      }, {});
      let e = { controlStates: Us, logItems: [] };
      this.channel.emit(dt.SYNC, e),
        (t = $e.window) != null &&
          t.parent &&
          ($e.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ =
            this.state);
    }
    getLog(e) {
      let { calls: t, shadowCalls: r } = this.getState(e),
        n = [...r];
      t.forEach((o, i) => {
        n[i] = o;
      });
      let a = new Set();
      return n.reduceRight(
        (o, i) => (
          i.args.forEach((l) => {
            l != null && l.__callId__ && a.add(l.__callId__);
          }),
          i.path.forEach((l) => {
            l.__callId__ && a.add(l.__callId__);
          }),
          (i.interceptable || i.exception) &&
            !a.has(i.id) &&
            (o.unshift({
              callId: i.id,
              status: i.status,
              ancestors: i.ancestors,
            }),
            a.add(i.id)),
          o
        ),
        [],
      );
    }
    instrument(e, t, r = 0) {
      if (!i_(e)) return e;
      let { mutate: n = !1, path: a = [] } = t,
        o = t.getKeys ? t.getKeys(e, r) : Object.keys(e);
      return (
        (r += 1),
        o.reduce(
          (i, l) => {
            let u = u_(e, l);
            if (typeof (u == null ? void 0 : u.get) == 'function') {
              let s = () => {
                var d, p;
                return (p =
                  (d = u == null ? void 0 : u.get) == null
                    ? void 0
                    : d.bind(e)) == null
                  ? void 0
                  : p();
              };
              return (
                Object.defineProperty(i, l, {
                  get: () =>
                    this.instrument(s(), { ...t, path: a.concat(l) }, r),
                }),
                i
              );
            }
            let c = e[l];
            return typeof c != 'function'
              ? ((i[l] = this.instrument(c, { ...t, path: a.concat(l) }, r)), i)
              : '__originalFn__' in c && typeof c.__originalFn__ == 'function'
                ? ((i[l] = c), i)
                : ((i[l] = (...s) => this.track(l, c, e, s, t)),
                  (i[l].__originalFn__ = c),
                  Object.defineProperty(i[l], 'name', {
                    value: l,
                    writable: !1,
                  }),
                  Object.keys(c).length > 0 &&
                    Object.assign(
                      i[l],
                      this.instrument({ ...c }, { ...t, path: a.concat(l) }, r),
                    ),
                  i);
          },
          n ? e : l_(e),
        )
      );
    }
    track(e, t, r, n, a) {
      var m, y, b, g;
      let o =
          ((m = n == null ? void 0 : n[0]) == null ? void 0 : m.__storyId__) ||
          ((g =
            (b =
              (y = $e.__STORYBOOK_PREVIEW__) == null
                ? void 0
                : y.selectionStore) == null
              ? void 0
              : b.selection) == null
            ? void 0
            : g.storyId),
        { cursor: i, ancestors: l } = this.getState(o);
      this.setState(o, { cursor: i + 1 });
      let u = `${l.slice(-1)[0] || o} [${i}] ${e}`,
        { path: c = [], intercept: s = !1, retain: d = !1 } = a,
        p = typeof s == 'function' ? s(e, c) : s,
        f = {
          id: u,
          cursor: i,
          storyId: o,
          ancestors: l,
          path: c,
          method: e,
          args: n,
          interceptable: p,
          retain: d,
        },
        h = (p && !l.length ? this.intercept : this.invoke).call(
          this,
          t,
          r,
          f,
          a,
        );
      return this.instrument(h, {
        ...a,
        mutate: !0,
        path: [{ __callId__: f.id }],
      });
    }
    intercept(e, t, r, n) {
      let {
          chainedCallIds: a,
          isDebugging: o,
          playUntil: i,
        } = this.getState(r.storyId),
        l = a.has(r.id);
      return !o || l || i
        ? (i === r.id && this.setState(r.storyId, { playUntil: void 0 }),
          this.invoke(e, t, r, n))
        : new Promise((u) => {
            this.setState(r.storyId, ({ resolvers: c }) => ({
              isLocked: !1,
              resolvers: { ...c, [r.id]: u },
            }));
          }).then(
            () => (
              this.setState(r.storyId, (u) => {
                let { [r.id]: c, ...s } = u.resolvers;
                return { isLocked: !0, resolvers: s };
              }),
              this.invoke(e, t, r, n)
            ),
          );
    }
    invoke(e, t, r, n) {
      let { callRefsByResult: a, renderPhase: o } = this.getState(r.storyId),
        i = 25,
        l = (s, d, p) => {
          var f, h, m;
          if (p.includes(s)) return '[Circular]';
          if (((p = [...p, s]), d > i)) return '...';
          if (a.has(s)) return a.get(s);
          if (s instanceof Array) return s.map((y) => l(y, ++d, p));
          if (s instanceof Date)
            return { __date__: { value: s.toISOString() } };
          if (s instanceof Error) {
            let { name: y, message: b, stack: g } = s;
            return { __error__: { name: y, message: b, stack: g } };
          }
          if (s instanceof RegExp) {
            let { flags: y, source: b } = s;
            return { __regexp__: { flags: y, source: b } };
          }
          if (s instanceof ((f = $e.window) == null ? void 0 : f.HTMLElement)) {
            let {
                prefix: y,
                localName: b,
                id: g,
                classList: R,
                innerText: C,
              } = s,
              _ = Array.from(R);
            return {
              __element__: {
                prefix: y,
                localName: b,
                id: g,
                classNames: _,
                innerText: C,
              },
            };
          }
          return typeof s == 'function'
            ? {
                __function__: {
                  name: 'getMockName' in s ? s.getMockName() : s.name,
                },
              }
            : typeof s == 'symbol'
              ? { __symbol__: { description: s.description } }
              : typeof s == 'object' &&
                  (h = s == null ? void 0 : s.constructor) != null &&
                  h.name &&
                  ((m = s == null ? void 0 : s.constructor) == null
                    ? void 0
                    : m.name) !== 'Object'
                ? { __class__: { name: s.constructor.name } }
                : Object.prototype.toString.call(s) === '[object Object]'
                  ? Object.fromEntries(
                      Object.entries(s).map(([y, b]) => [y, l(b, ++d, p)]),
                    )
                  : s;
        },
        u = { ...r, args: r.args.map((s) => l(s, 0, [])) };
      r.path.forEach((s) => {
        s != null &&
          s.__callId__ &&
          this.setState(r.storyId, ({ chainedCallIds: d }) => ({
            chainedCallIds: new Set(Array.from(d).concat(s.__callId__)),
          }));
      });
      let c = (s) => {
        if (s instanceof Error) {
          let { name: d, message: p, stack: f, callId: h = r.id } = s,
            {
              showDiff: m = void 0,
              diff: y = void 0,
              actual: b = void 0,
              expected: g = void 0,
            } = s.name === 'AssertionError' ? xd(s) : s,
            R = {
              name: d,
              message: p,
              stack: f,
              callId: h,
              showDiff: m,
              diff: y,
              actual: b,
              expected: g,
            };
          if (
            (this.update({ ...u, status: 'error', exception: R }),
            this.setState(r.storyId, (C) => ({
              callRefsByResult: new Map([
                ...Array.from(C.callRefsByResult.entries()),
                [s, { __callId__: r.id, retain: r.retain }],
              ]),
            })),
            r.ancestors.length)
          )
            throw (
              (Object.prototype.hasOwnProperty.call(s, 'callId') ||
                Object.defineProperty(s, 'callId', { value: r.id }),
              s)
            );
        }
        throw s;
      };
      try {
        if (o === 'played' && !r.retain) throw a_;
        let s = (
            n.getArgs ? n.getArgs(r, this.getState(r.storyId)) : r.args
          ).map((p) =>
            typeof p != 'function' || Object.keys(p).length
              ? p
              : (...f) => {
                  let { cursor: h, ancestors: m } = this.getState(r.storyId);
                  this.setState(r.storyId, {
                    cursor: 0,
                    ancestors: [...m, r.id],
                  });
                  let y = () =>
                      this.setState(r.storyId, { cursor: h, ancestors: m }),
                    b = !1;
                  try {
                    let g = p(...f);
                    return g instanceof Promise ? ((b = !0), g.finally(y)) : g;
                  } finally {
                    b || y();
                  }
                },
          ),
          d = e.apply(t, s);
        return (
          d &&
            ['object', 'function', 'symbol'].includes(typeof d) &&
            this.setState(r.storyId, (p) => ({
              callRefsByResult: new Map([
                ...Array.from(p.callRefsByResult.entries()),
                [d, { __callId__: r.id, retain: r.retain }],
              ]),
            })),
          this.update({
            ...u,
            status: d instanceof Promise ? 'active' : 'done',
          }),
          d instanceof Promise
            ? d.then((p) => (this.update({ ...u, status: 'done' }), p), c)
            : d
        );
      } catch (s) {
        return c(s);
      }
    }
    update(e) {
      this.channel.emit(dt.CALL, e),
        this.setState(e.storyId, ({ calls: t }) => {
          let r = t
            .concat(e)
            .reduce((n, a) => Object.assign(n, { [a.id]: a }), {});
          return {
            calls: Object.values(r).sort((n, a) =>
              n.id.localeCompare(a.id, void 0, { numeric: !0 }),
            ),
          };
        }),
        this.sync(e.storyId);
    }
    sync(e) {
      let t = () => {
        var c;
        let { isLocked: r, isPlaying: n } = this.getState(e),
          a = this.getLog(e),
          o =
            (c = a
              .filter(({ ancestors: s }) => !s.length)
              .find((s) => s.status === 'waiting')) == null
              ? void 0
              : c.callId,
          i = a.some((s) => s.status === 'active');
        if (r || i || a.length === 0) {
          let s = { controlStates: Us, logItems: a };
          this.channel.emit(dt.SYNC, s);
          return;
        }
        let l = a.some((s) => s.status === 'done' || s.status === 'error'),
          u = {
            controlStates: { start: l, back: l, goto: !0, next: n, end: n },
            logItems: a,
            pausedAt: o,
          };
        this.channel.emit(dt.SYNC, u);
      };
      this.setState(
        e,
        ({ syncTimeout: r }) => (
          clearTimeout(r), { syncTimeout: setTimeout(t, 0) }
        ),
      );
    }
  };
function xi(e, t = {}) {
  var r, n, a, o, i, l, u, c;
  try {
    let s = !1,
      d = !1;
    return (
      (a =
        (n = (r = $e.window) == null ? void 0 : r.location) == null
          ? void 0
          : n.search) != null && a.includes('instrument=true')
        ? (s = !0)
        : (l =
            (i = (o = $e.window) == null ? void 0 : o.location) == null
              ? void 0
              : i.search) != null &&
          l.includes('instrument=false') &&
          (d = !0),
      (((u = $e.window) == null ? void 0 : u.parent) === $e.window && !s) || d
        ? e
        : ($e.window &&
            !$e.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ &&
            ($e.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ =
              new s_()),
          ((c = $e.window) == null
            ? void 0
            : c.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__
          ).instrument(e, t))
    );
  } catch (s) {
    return hg.warn(s), e;
  }
}
function u_(e, t) {
  let r = e;
  for (; r != null; ) {
    let n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Object.getPrototypeOf(r);
  }
}
var Co = {};
const { global: Md } = __STORYBOOK_MODULE_GLOBAL__,
  { once: c_ } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var d_ = Object.create,
  Mi = Object.defineProperty,
  f_ = Object.getOwnPropertyDescriptor,
  $d = Object.getOwnPropertyNames,
  p_ = Object.getPrototypeOf,
  h_ = Object.prototype.hasOwnProperty,
  m_ = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
        ? new Proxy(e, {
            get: (t, r) => (typeof require < 'u' ? require : t)[r],
          })
        : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  }),
  T = (e, t) =>
    function () {
      return t || (0, e[$d(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  $i = (e, t) => {
    for (var r in t) Mi(e, r, { get: t[r], enumerable: !0 });
  },
  b_ = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let a of $d(t))
        !h_.call(e, a) &&
          a !== r &&
          Mi(e, a, {
            get: () => t[a],
            enumerable: !(n = f_(t, a)) || n.enumerable,
          });
    return e;
  },
  Fe = (e, t, r) => (
    (r = e != null ? d_(p_(e)) : {}),
    b_(
      t || !e || !e.__esModule
        ? Mi(r, 'default', { value: e, enumerable: !0 })
        : r,
      e,
    )
  ),
  g_ = T({
    '../../node_modules/min-indent/index.js'(e, t) {
      t.exports = (r) => {
        let n = r.match(/^[ \t]*(?=\S)/gm);
        return n ? n.reduce((a, o) => Math.min(a, o.length), 1 / 0) : 0;
      };
    },
  }),
  y_ = T({
    '../../node_modules/strip-indent/index.js'(e, t) {
      var r = g_();
      t.exports = (n) => {
        let a = r(n);
        if (a === 0) return n;
        let o = new RegExp(`^[ \\t]{${a}}`, 'gm');
        return n.replace(o, '');
      };
    },
  }),
  v_ = T({
    '../../node_modules/indent-string/index.js'(e, t) {
      t.exports = (r, n = 1, a) => {
        if (
          ((a = { indent: ' ', includeEmptyLines: !1, ...a }),
          typeof r != 'string')
        )
          throw new TypeError(
            `Expected \`input\` to be a \`string\`, got \`${typeof r}\``,
          );
        if (typeof n != 'number')
          throw new TypeError(
            `Expected \`count\` to be a \`number\`, got \`${typeof n}\``,
          );
        if (typeof a.indent != 'string')
          throw new TypeError(
            `Expected \`options.indent\` to be a \`string\`, got \`${typeof a.indent}\``,
          );
        if (n === 0) return r;
        let o = a.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return r.replace(o, a.indent.repeat(n));
      };
    },
  }),
  Nd = T({
    '../../node_modules/redent/index.js'(e, t) {
      var r = y_(),
        n = v_();
      t.exports = (a, o = 0, i) => n(r(a), o, i);
    },
  }),
  __ = T({
    '../../node_modules/aria-query/lib/util/iteratorProxy.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      function t() {
        var n = this,
          a = 0,
          o = {
            '@@iterator': function () {
              return o;
            },
            next: function () {
              if (a < n.length) {
                var i = n[a];
                return (a = a + 1), { done: !1, value: i };
              } else return { done: !0 };
            },
          };
        return o;
      }
      var r = t;
      e.default = r;
    },
  }),
  hn = T({
    '../../node_modules/aria-query/lib/util/iterationDecorator.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = a);
      var t = r(__());
      function r(o) {
        return o && o.__esModule ? o : { default: o };
      }
      function n(o) {
        '@babel/helpers - typeof';
        return (
          (n =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (i) {
                  return typeof i;
                }
              : function (i) {
                  return i &&
                    typeof Symbol == 'function' &&
                    i.constructor === Symbol &&
                    i !== Symbol.prototype
                    ? 'symbol'
                    : typeof i;
                }),
          n(o)
        );
      }
      function a(o, i) {
        return (
          typeof Symbol == 'function' &&
            n(Symbol.iterator) === 'symbol' &&
            Object.defineProperty(o, Symbol.iterator, {
              value: t.default.bind(i),
            }),
          o
        );
      }
    },
  }),
  E_ = T({
    '../../node_modules/aria-query/lib/ariaPropsMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = r(hn());
      function r(f) {
        return f && f.__esModule ? f : { default: f };
      }
      function n(f, h) {
        return i(f) || o(f, h) || u(f, h) || a();
      }
      function a() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function o(f, h) {
        var m =
          f == null
            ? null
            : (typeof Symbol < 'u' && f[Symbol.iterator]) || f['@@iterator'];
        if (m != null) {
          var y = [],
            b = !0,
            g = !1,
            R,
            C;
          try {
            for (
              m = m.call(f);
              !(b = (R = m.next()).done) &&
              (y.push(R.value), !(h && y.length === h));
              b = !0
            );
          } catch (_) {
            (g = !0), (C = _);
          } finally {
            try {
              !b && m.return != null && m.return();
            } finally {
              if (g) throw C;
            }
          }
          return y;
        }
      }
      function i(f) {
        if (Array.isArray(f)) return f;
      }
      function l(f, h) {
        var m = (typeof Symbol < 'u' && f[Symbol.iterator]) || f['@@iterator'];
        if (!m) {
          if (Array.isArray(f) || (m = u(f)) || h) {
            m && (f = m);
            var y = 0,
              b = function () {};
            return {
              s: b,
              n: function () {
                return y >= f.length
                  ? { done: !0 }
                  : { done: !1, value: f[y++] };
              },
              e: function (_) {
                throw _;
              },
              f: b,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var g = !0,
          R = !1,
          C;
        return {
          s: function () {
            m = m.call(f);
          },
          n: function () {
            var _ = m.next();
            return (g = _.done), _;
          },
          e: function (_) {
            (R = !0), (C = _);
          },
          f: function () {
            try {
              !g && m.return != null && m.return();
            } finally {
              if (R) throw C;
            }
          },
        };
      }
      function u(f, h) {
        if (f) {
          if (typeof f == 'string') return c(f, h);
          var m = Object.prototype.toString.call(f).slice(8, -1);
          if (
            (m === 'Object' && f.constructor && (m = f.constructor.name),
            m === 'Map' || m === 'Set')
          )
            return Array.from(f);
          if (
            m === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)
          )
            return c(f, h);
        }
      }
      function c(f, h) {
        (h == null || h > f.length) && (h = f.length);
        for (var m = 0, y = new Array(h); m < h; m++) y[m] = f[m];
        return y;
      }
      var s = [
          ['aria-activedescendant', { type: 'id' }],
          ['aria-atomic', { type: 'boolean' }],
          [
            'aria-autocomplete',
            { type: 'token', values: ['inline', 'list', 'both', 'none'] },
          ],
          ['aria-braillelabel', { type: 'string' }],
          ['aria-brailleroledescription', { type: 'string' }],
          ['aria-busy', { type: 'boolean' }],
          ['aria-checked', { type: 'tristate' }],
          ['aria-colcount', { type: 'integer' }],
          ['aria-colindex', { type: 'integer' }],
          ['aria-colspan', { type: 'integer' }],
          ['aria-controls', { type: 'idlist' }],
          [
            'aria-current',
            {
              type: 'token',
              values: ['page', 'step', 'location', 'date', 'time', !0, !1],
            },
          ],
          ['aria-describedby', { type: 'idlist' }],
          ['aria-description', { type: 'string' }],
          ['aria-details', { type: 'id' }],
          ['aria-disabled', { type: 'boolean' }],
          [
            'aria-dropeffect',
            {
              type: 'tokenlist',
              values: ['copy', 'execute', 'link', 'move', 'none', 'popup'],
            },
          ],
          ['aria-errormessage', { type: 'id' }],
          ['aria-expanded', { type: 'boolean', allowundefined: !0 }],
          ['aria-flowto', { type: 'idlist' }],
          ['aria-grabbed', { type: 'boolean', allowundefined: !0 }],
          [
            'aria-haspopup',
            {
              type: 'token',
              values: [!1, !0, 'menu', 'listbox', 'tree', 'grid', 'dialog'],
            },
          ],
          ['aria-hidden', { type: 'boolean', allowundefined: !0 }],
          [
            'aria-invalid',
            { type: 'token', values: ['grammar', !1, 'spelling', !0] },
          ],
          ['aria-keyshortcuts', { type: 'string' }],
          ['aria-label', { type: 'string' }],
          ['aria-labelledby', { type: 'idlist' }],
          ['aria-level', { type: 'integer' }],
          [
            'aria-live',
            { type: 'token', values: ['assertive', 'off', 'polite'] },
          ],
          ['aria-modal', { type: 'boolean' }],
          ['aria-multiline', { type: 'boolean' }],
          ['aria-multiselectable', { type: 'boolean' }],
          [
            'aria-orientation',
            { type: 'token', values: ['vertical', 'undefined', 'horizontal'] },
          ],
          ['aria-owns', { type: 'idlist' }],
          ['aria-placeholder', { type: 'string' }],
          ['aria-posinset', { type: 'integer' }],
          ['aria-pressed', { type: 'tristate' }],
          ['aria-readonly', { type: 'boolean' }],
          [
            'aria-relevant',
            {
              type: 'tokenlist',
              values: ['additions', 'all', 'removals', 'text'],
            },
          ],
          ['aria-required', { type: 'boolean' }],
          ['aria-roledescription', { type: 'string' }],
          ['aria-rowcount', { type: 'integer' }],
          ['aria-rowindex', { type: 'integer' }],
          ['aria-rowspan', { type: 'integer' }],
          ['aria-selected', { type: 'boolean', allowundefined: !0 }],
          ['aria-setsize', { type: 'integer' }],
          [
            'aria-sort',
            {
              type: 'token',
              values: ['ascending', 'descending', 'none', 'other'],
            },
          ],
          ['aria-valuemax', { type: 'number' }],
          ['aria-valuemin', { type: 'number' }],
          ['aria-valuenow', { type: 'number' }],
          ['aria-valuetext', { type: 'string' }],
        ],
        d = {
          entries: function () {
            return s;
          },
          forEach: function (f) {
            var h =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : null,
              m = l(s),
              y;
            try {
              for (m.s(); !(y = m.n()).done; ) {
                var b = n(y.value, 2),
                  g = b[0],
                  R = b[1];
                f.call(h, R, g, s);
              }
            } catch (C) {
              m.e(C);
            } finally {
              m.f();
            }
          },
          get: function (f) {
            var h = s.find(function (m) {
              return m[0] === f;
            });
            return h && h[1];
          },
          has: function (f) {
            return !!d.get(f);
          },
          keys: function () {
            return s.map(function (f) {
              var h = n(f, 1),
                m = h[0];
              return m;
            });
          },
          values: function () {
            return s.map(function (f) {
              var h = n(f, 2),
                m = h[1];
              return m;
            });
          },
        },
        p = (0, t.default)(d, d.entries());
      e.default = p;
    },
  }),
  w_ = T({
    '../../node_modules/aria-query/lib/domMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = r(hn());
      function r(f) {
        return f && f.__esModule ? f : { default: f };
      }
      function n(f, h) {
        return i(f) || o(f, h) || u(f, h) || a();
      }
      function a() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function o(f, h) {
        var m =
          f == null
            ? null
            : (typeof Symbol < 'u' && f[Symbol.iterator]) || f['@@iterator'];
        if (m != null) {
          var y = [],
            b = !0,
            g = !1,
            R,
            C;
          try {
            for (
              m = m.call(f);
              !(b = (R = m.next()).done) &&
              (y.push(R.value), !(h && y.length === h));
              b = !0
            );
          } catch (_) {
            (g = !0), (C = _);
          } finally {
            try {
              !b && m.return != null && m.return();
            } finally {
              if (g) throw C;
            }
          }
          return y;
        }
      }
      function i(f) {
        if (Array.isArray(f)) return f;
      }
      function l(f, h) {
        var m = (typeof Symbol < 'u' && f[Symbol.iterator]) || f['@@iterator'];
        if (!m) {
          if (Array.isArray(f) || (m = u(f)) || h) {
            m && (f = m);
            var y = 0,
              b = function () {};
            return {
              s: b,
              n: function () {
                return y >= f.length
                  ? { done: !0 }
                  : { done: !1, value: f[y++] };
              },
              e: function (_) {
                throw _;
              },
              f: b,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var g = !0,
          R = !1,
          C;
        return {
          s: function () {
            m = m.call(f);
          },
          n: function () {
            var _ = m.next();
            return (g = _.done), _;
          },
          e: function (_) {
            (R = !0), (C = _);
          },
          f: function () {
            try {
              !g && m.return != null && m.return();
            } finally {
              if (R) throw C;
            }
          },
        };
      }
      function u(f, h) {
        if (f) {
          if (typeof f == 'string') return c(f, h);
          var m = Object.prototype.toString.call(f).slice(8, -1);
          if (
            (m === 'Object' && f.constructor && (m = f.constructor.name),
            m === 'Map' || m === 'Set')
          )
            return Array.from(f);
          if (
            m === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)
          )
            return c(f, h);
        }
      }
      function c(f, h) {
        (h == null || h > f.length) && (h = f.length);
        for (var m = 0, y = new Array(h); m < h; m++) y[m] = f[m];
        return y;
      }
      var s = [
          ['a', { reserved: !1 }],
          ['abbr', { reserved: !1 }],
          ['acronym', { reserved: !1 }],
          ['address', { reserved: !1 }],
          ['applet', { reserved: !1 }],
          ['area', { reserved: !1 }],
          ['article', { reserved: !1 }],
          ['aside', { reserved: !1 }],
          ['audio', { reserved: !1 }],
          ['b', { reserved: !1 }],
          ['base', { reserved: !0 }],
          ['bdi', { reserved: !1 }],
          ['bdo', { reserved: !1 }],
          ['big', { reserved: !1 }],
          ['blink', { reserved: !1 }],
          ['blockquote', { reserved: !1 }],
          ['body', { reserved: !1 }],
          ['br', { reserved: !1 }],
          ['button', { reserved: !1 }],
          ['canvas', { reserved: !1 }],
          ['caption', { reserved: !1 }],
          ['center', { reserved: !1 }],
          ['cite', { reserved: !1 }],
          ['code', { reserved: !1 }],
          ['col', { reserved: !0 }],
          ['colgroup', { reserved: !0 }],
          ['content', { reserved: !1 }],
          ['data', { reserved: !1 }],
          ['datalist', { reserved: !1 }],
          ['dd', { reserved: !1 }],
          ['del', { reserved: !1 }],
          ['details', { reserved: !1 }],
          ['dfn', { reserved: !1 }],
          ['dialog', { reserved: !1 }],
          ['dir', { reserved: !1 }],
          ['div', { reserved: !1 }],
          ['dl', { reserved: !1 }],
          ['dt', { reserved: !1 }],
          ['em', { reserved: !1 }],
          ['embed', { reserved: !1 }],
          ['fieldset', { reserved: !1 }],
          ['figcaption', { reserved: !1 }],
          ['figure', { reserved: !1 }],
          ['font', { reserved: !1 }],
          ['footer', { reserved: !1 }],
          ['form', { reserved: !1 }],
          ['frame', { reserved: !1 }],
          ['frameset', { reserved: !1 }],
          ['h1', { reserved: !1 }],
          ['h2', { reserved: !1 }],
          ['h3', { reserved: !1 }],
          ['h4', { reserved: !1 }],
          ['h5', { reserved: !1 }],
          ['h6', { reserved: !1 }],
          ['head', { reserved: !0 }],
          ['header', { reserved: !1 }],
          ['hgroup', { reserved: !1 }],
          ['hr', { reserved: !1 }],
          ['html', { reserved: !0 }],
          ['i', { reserved: !1 }],
          ['iframe', { reserved: !1 }],
          ['img', { reserved: !1 }],
          ['input', { reserved: !1 }],
          ['ins', { reserved: !1 }],
          ['kbd', { reserved: !1 }],
          ['keygen', { reserved: !1 }],
          ['label', { reserved: !1 }],
          ['legend', { reserved: !1 }],
          ['li', { reserved: !1 }],
          ['link', { reserved: !0 }],
          ['main', { reserved: !1 }],
          ['map', { reserved: !1 }],
          ['mark', { reserved: !1 }],
          ['marquee', { reserved: !1 }],
          ['menu', { reserved: !1 }],
          ['menuitem', { reserved: !1 }],
          ['meta', { reserved: !0 }],
          ['meter', { reserved: !1 }],
          ['nav', { reserved: !1 }],
          ['noembed', { reserved: !0 }],
          ['noscript', { reserved: !0 }],
          ['object', { reserved: !1 }],
          ['ol', { reserved: !1 }],
          ['optgroup', { reserved: !1 }],
          ['option', { reserved: !1 }],
          ['output', { reserved: !1 }],
          ['p', { reserved: !1 }],
          ['param', { reserved: !0 }],
          ['picture', { reserved: !0 }],
          ['pre', { reserved: !1 }],
          ['progress', { reserved: !1 }],
          ['q', { reserved: !1 }],
          ['rp', { reserved: !1 }],
          ['rt', { reserved: !1 }],
          ['rtc', { reserved: !1 }],
          ['ruby', { reserved: !1 }],
          ['s', { reserved: !1 }],
          ['samp', { reserved: !1 }],
          ['script', { reserved: !0 }],
          ['section', { reserved: !1 }],
          ['select', { reserved: !1 }],
          ['small', { reserved: !1 }],
          ['source', { reserved: !0 }],
          ['spacer', { reserved: !1 }],
          ['span', { reserved: !1 }],
          ['strike', { reserved: !1 }],
          ['strong', { reserved: !1 }],
          ['style', { reserved: !0 }],
          ['sub', { reserved: !1 }],
          ['summary', { reserved: !1 }],
          ['sup', { reserved: !1 }],
          ['table', { reserved: !1 }],
          ['tbody', { reserved: !1 }],
          ['td', { reserved: !1 }],
          ['textarea', { reserved: !1 }],
          ['tfoot', { reserved: !1 }],
          ['th', { reserved: !1 }],
          ['thead', { reserved: !1 }],
          ['time', { reserved: !1 }],
          ['title', { reserved: !0 }],
          ['tr', { reserved: !1 }],
          ['track', { reserved: !0 }],
          ['tt', { reserved: !1 }],
          ['u', { reserved: !1 }],
          ['ul', { reserved: !1 }],
          ['var', { reserved: !1 }],
          ['video', { reserved: !1 }],
          ['wbr', { reserved: !1 }],
          ['xmp', { reserved: !1 }],
        ],
        d = {
          entries: function () {
            return s;
          },
          forEach: function (f) {
            var h =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : null,
              m = l(s),
              y;
            try {
              for (m.s(); !(y = m.n()).done; ) {
                var b = n(y.value, 2),
                  g = b[0],
                  R = b[1];
                f.call(h, R, g, s);
              }
            } catch (C) {
              m.e(C);
            } finally {
              m.f();
            }
          },
          get: function (f) {
            var h = s.find(function (m) {
              return m[0] === f;
            });
            return h && h[1];
          },
          has: function (f) {
            return !!d.get(f);
          },
          keys: function () {
            return s.map(function (f) {
              var h = n(f, 1),
                m = h[0];
              return m;
            });
          },
          values: function () {
            return s.map(function (f) {
              var h = n(f, 2),
                m = h[1];
              return m;
            });
          },
        },
        p = (0, t.default)(d, d.entries());
      e.default = p;
    },
  }),
  C_ = T({
    '../../node_modules/aria-query/lib/etc/roles/abstract/commandRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget']],
        },
        r = t;
      e.default = r;
    },
  }),
  R_ = T({
    '../../node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-activedescendant': null, 'aria-disabled': null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget']],
        },
        r = t;
      e.default = r;
    },
  }),
  T_ = T({
    '../../node_modules/aria-query/lib/etc/roles/abstract/inputRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-disabled': null },
          relatedConcepts: [{ concept: { name: 'input' }, module: 'XForms' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget']],
        },
        r = t;
      e.default = r;
    },
  }),
  S_ = T({
    '../../node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  P_ = T({
    '../../node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-valuemax': null,
            'aria-valuemin': null,
            'aria-valuenow': null,
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  O_ = T({
    '../../node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {
            'aria-atomic': null,
            'aria-busy': null,
            'aria-controls': null,
            'aria-current': null,
            'aria-describedby': null,
            'aria-details': null,
            'aria-dropeffect': null,
            'aria-flowto': null,
            'aria-grabbed': null,
            'aria-hidden': null,
            'aria-keyshortcuts': null,
            'aria-label': null,
            'aria-labelledby': null,
            'aria-live': null,
            'aria-owns': null,
            'aria-relevant': null,
            'aria-roledescription': null,
          },
          relatedConcepts: [
            { concept: { name: 'role' }, module: 'XHTML' },
            { concept: { name: 'type' }, module: 'Dublin Core' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [],
        },
        r = t;
      e.default = r;
    },
  }),
  A_ = T({
    '../../node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'frontmatter' }, module: 'DTB' },
            { concept: { name: 'level' }, module: 'DTB' },
            { concept: { name: 'level' }, module: 'SMIL' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  q_ = T({
    '../../node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  x_ = T({
    '../../node_modules/aria-query/lib/etc/roles/abstract/selectRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-orientation': null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite'],
            ['roletype', 'structure', 'section', 'group'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  M_ = T({
    '../../node_modules/aria-query/lib/etc/roles/abstract/structureRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype']],
        },
        r = t;
      e.default = r;
    },
  }),
  $_ = T({
    '../../node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype']],
        },
        r = t;
      e.default = r;
    },
  }),
  N_ = T({
    '../../node_modules/aria-query/lib/etc/roles/abstract/windowRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-modal': null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype']],
        },
        r = t;
      e.default = r;
    },
  }),
  j_ = T({
    '../../node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = f(C_()),
        r = f(R_()),
        n = f(T_()),
        a = f(S_()),
        o = f(P_()),
        i = f(O_()),
        l = f(A_()),
        u = f(q_()),
        c = f(x_()),
        s = f(M_()),
        d = f($_()),
        p = f(N_());
      function f(y) {
        return y && y.__esModule ? y : { default: y };
      }
      var h = [
          ['command', t.default],
          ['composite', r.default],
          ['input', n.default],
          ['landmark', a.default],
          ['range', o.default],
          ['roletype', i.default],
          ['section', l.default],
          ['sectionhead', u.default],
          ['select', c.default],
          ['structure', s.default],
          ['widget', d.default],
          ['window', p.default],
        ],
        m = h;
      e.default = m;
    },
  }),
  I_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/alertRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-atomic': 'true', 'aria-live': 'assertive' },
          relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  L_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'alert'],
            ['roletype', 'window', 'dialog'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  B_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/applicationRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-activedescendant': null,
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'Device Independence Delivery Unit' } },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  k_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/articleRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-posinset': null, 'aria-setsize': null },
          relatedConcepts: [{ concept: { name: 'article' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'document']],
        },
        r = t;
      e.default = r;
    },
  }),
  D_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/bannerRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                constraints: ['scoped to the body element'],
                name: 'header',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  F_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'blockquote' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  U_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/buttonRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-pressed': null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'type', value: 'button' }],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ name: 'type', value: 'image' }],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ name: 'type', value: 'reset' }],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ name: 'type', value: 'submit' }],
                name: 'input',
              },
              module: 'HTML',
            },
            { concept: { name: 'button' }, module: 'HTML' },
            { concept: { name: 'trigger' }, module: 'XForms' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command']],
        },
        r = t;
      e.default = r;
    },
  }),
  H_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/captionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [{ concept: { name: 'caption' }, module: 'HTML' }],
          requireContextRole: ['figure', 'grid', 'table'],
          requiredContextRole: ['figure', 'grid', 'table'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  z_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/cellRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-colindex': null,
            'aria-colspan': null,
            'aria-rowindex': null,
            'aria-rowspan': null,
          },
          relatedConcepts: [
            {
              concept: {
                constraints: ['ancestor table element has table role'],
                name: 'td',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: ['row'],
          requiredContextRole: ['row'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  V_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-checked': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'type', value: 'checkbox' }],
                name: 'input',
              },
              module: 'HTML',
            },
            { concept: { name: 'option' }, module: 'ARIA' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  G_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/codeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [{ concept: { name: 'code' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  W_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-sort': null },
          relatedConcepts: [
            { concept: { name: 'th' }, module: 'HTML' },
            {
              concept: {
                attributes: [{ name: 'scope', value: 'col' }],
                name: 'th',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ name: 'scope', value: 'colgroup' }],
                name: 'th',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: ['row'],
          requiredContextRole: ['row'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'cell'],
            ['roletype', 'structure', 'section', 'cell', 'gridcell'],
            ['roletype', 'widget', 'gridcell'],
            ['roletype', 'structure', 'sectionhead'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  K_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-activedescendant': null,
            'aria-autocomplete': null,
            'aria-errormessage': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
            'aria-expanded': 'false',
            'aria-haspopup': 'listbox',
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'email' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'search' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'tel' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'text' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'url' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'url' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'multiple' },
                  { constraints: ['undefined'], name: 'size' },
                ],
                constraints: [
                  'the multiple attribute is not set and the size attribute does not have a value greater than 1',
                ],
                name: 'select',
              },
              module: 'HTML',
            },
            { concept: { name: 'select' }, module: 'XForms' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-controls': null, 'aria-expanded': 'false' },
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  Y_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'aside' }, module: 'HTML' },
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'aria-label' }],
                constraints: [
                  'scoped to a sectioning content element',
                  'scoped to a sectioning root element other than body',
                ],
                name: 'aside',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
                constraints: [
                  'scoped to a sectioning content element',
                  'scoped to a sectioning root element other than body',
                ],
                name: 'aside',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  J_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                constraints: ['scoped to the body element'],
                name: 'footer',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  X_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/definitionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'dd' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Q_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/deletionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [{ concept: { name: 'del' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Z_ = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/dialogRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'dialog' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'window']],
        },
        r = t;
      e.default = r;
    },
  }),
  e0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/directoryRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ module: 'DAISY Guide' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'list']],
        },
        r = t;
      e.default = r;
    },
  }),
  t0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/documentRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'Device Independence Delivery Unit' } },
            { concept: { name: 'html' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  r0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [{ concept: { name: 'em' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  n0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/feedRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['article']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'list']],
        },
        r = t;
      e.default = r;
    },
  }),
  a0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/figureRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'figure' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  o0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/formRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'aria-label' }],
                name: 'form',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
                name: 'form',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'name' }],
                name: 'form',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  i0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/genericRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [
            { concept: { name: 'a' }, module: 'HTML' },
            { concept: { name: 'area' }, module: 'HTML' },
            { concept: { name: 'aside' }, module: 'HTML' },
            { concept: { name: 'b' }, module: 'HTML' },
            { concept: { name: 'bdo' }, module: 'HTML' },
            { concept: { name: 'body' }, module: 'HTML' },
            { concept: { name: 'data' }, module: 'HTML' },
            { concept: { name: 'div' }, module: 'HTML' },
            {
              concept: {
                constraints: [
                  'scoped to the main element',
                  'scoped to a sectioning content element',
                  'scoped to a sectioning root element other than body',
                ],
                name: 'footer',
              },
              module: 'HTML',
            },
            {
              concept: {
                constraints: [
                  'scoped to the main element',
                  'scoped to a sectioning content element',
                  'scoped to a sectioning root element other than body',
                ],
                name: 'header',
              },
              module: 'HTML',
            },
            { concept: { name: 'hgroup' }, module: 'HTML' },
            { concept: { name: 'i' }, module: 'HTML' },
            { concept: { name: 'pre' }, module: 'HTML' },
            { concept: { name: 'q' }, module: 'HTML' },
            { concept: { name: 'samp' }, module: 'HTML' },
            { concept: { name: 'section' }, module: 'HTML' },
            { concept: { name: 'small' }, module: 'HTML' },
            { concept: { name: 'span' }, module: 'HTML' },
            { concept: { name: 'u' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  l0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/gridRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-multiselectable': null, 'aria-readonly': null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['row'], ['row', 'rowgroup']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite'],
            ['roletype', 'structure', 'section', 'table'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  s0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
            'aria-selected': null,
          },
          relatedConcepts: [
            {
              concept: {
                constraints: [
                  'ancestor table element has grid role',
                  'ancestor table element has treegrid role',
                ],
                name: 'td',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: ['row'],
          requiredContextRole: ['row'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'cell'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  u0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/groupRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-activedescendant': null, 'aria-disabled': null },
          relatedConcepts: [
            { concept: { name: 'details' }, module: 'HTML' },
            { concept: { name: 'fieldset' }, module: 'HTML' },
            { concept: { name: 'optgroup' }, module: 'HTML' },
            { concept: { name: 'address' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  c0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/headingRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-level': '2' },
          relatedConcepts: [
            { concept: { name: 'h1' }, module: 'HTML' },
            { concept: { name: 'h2' }, module: 'HTML' },
            { concept: { name: 'h3' }, module: 'HTML' },
            { concept: { name: 'h4' }, module: 'HTML' },
            { concept: { name: 'h5' }, module: 'HTML' },
            { concept: { name: 'h6' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-level': '2' },
          superClass: [['roletype', 'structure', 'sectionhead']],
        },
        r = t;
      e.default = r;
    },
  }),
  d0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/imgRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'alt' }],
                name: 'img',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ constraints: ['undefined'], name: 'alt' }],
                name: 'img',
              },
              module: 'HTML',
            },
            { concept: { name: 'imggroup' }, module: 'DTB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  f0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/insertionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [{ concept: { name: 'ins' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  p0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/linkRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-expanded': null,
            'aria-haspopup': null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'href' }],
                name: 'a',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'href' }],
                name: 'area',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command']],
        },
        r = t;
      e.default = r;
    },
  }),
  h0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/listRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'menu' }, module: 'HTML' },
            { concept: { name: 'ol' }, module: 'HTML' },
            { concept: { name: 'ul' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['listitem']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  m0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/listboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-invalid': null,
            'aria-multiselectable': null,
            'aria-readonly': null,
            'aria-required': null,
            'aria-orientation': 'vertical',
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: ['>1'], name: 'size' }],
                constraints: ['the size attribute value is greater than 1'],
                name: 'select',
              },
              module: 'HTML',
            },
            {
              concept: { attributes: [{ name: 'multiple' }], name: 'select' },
              module: 'HTML',
            },
            { concept: { name: 'datalist' }, module: 'HTML' },
            { concept: { name: 'list' }, module: 'ARIA' },
            { concept: { name: 'select' }, module: 'XForms' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['option', 'group'], ['option']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select'],
            ['roletype', 'structure', 'section', 'group', 'select'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  b0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/listitemRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-level': null,
            'aria-posinset': null,
            'aria-setsize': null,
          },
          relatedConcepts: [
            {
              concept: {
                constraints: [
                  'direct descendant of ol',
                  'direct descendant of ul',
                  'direct descendant of menu',
                ],
                name: 'li',
              },
              module: 'HTML',
            },
            { concept: { name: 'item' }, module: 'XForms' },
          ],
          requireContextRole: ['directory', 'list'],
          requiredContextRole: ['directory', 'list'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  g0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/logRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-live': 'polite' },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  y0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/mainRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'main' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  v0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/markRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: [],
          props: {
            'aria-braillelabel': null,
            'aria-brailleroledescription': null,
            'aria-description': null,
          },
          relatedConcepts: [{ concept: { name: 'mark' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  _0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  E0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/mathRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'math' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  w0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/menuRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-orientation': 'vertical' },
          relatedConcepts: [
            { concept: { name: 'MENU' }, module: 'JAPI' },
            { concept: { name: 'list' }, module: 'ARIA' },
            { concept: { name: 'select' }, module: 'XForms' },
            { concept: { name: 'sidebar' }, module: 'DTB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [
            ['menuitem', 'group'],
            ['menuitemradio', 'group'],
            ['menuitemcheckbox', 'group'],
            ['menuitem'],
            ['menuitemcheckbox'],
            ['menuitemradio'],
          ],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select'],
            ['roletype', 'structure', 'section', 'group', 'select'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  C0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/menubarRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-orientation': 'horizontal' },
          relatedConcepts: [{ concept: { name: 'toolbar' }, module: 'ARIA' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [
            ['menuitem', 'group'],
            ['menuitemradio', 'group'],
            ['menuitemcheckbox', 'group'],
            ['menuitem'],
            ['menuitemcheckbox'],
            ['menuitemradio'],
          ],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select', 'menu'],
            ['roletype', 'structure', 'section', 'group', 'select', 'menu'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  R0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-posinset': null,
            'aria-setsize': null,
          },
          relatedConcepts: [
            { concept: { name: 'MENU_ITEM' }, module: 'JAPI' },
            { concept: { name: 'listitem' }, module: 'ARIA' },
            { concept: { name: 'option' }, module: 'ARIA' },
          ],
          requireContextRole: ['group', 'menu', 'menubar'],
          requiredContextRole: ['group', 'menu', 'menubar'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command']],
        },
        r = t;
      e.default = r;
    },
  }),
  T0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
          requireContextRole: ['group', 'menu', 'menubar'],
          requiredContextRole: ['group', 'menu', 'menubar'],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [
            ['roletype', 'widget', 'input', 'checkbox'],
            ['roletype', 'widget', 'command', 'menuitem'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  S0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
          requireContextRole: ['group', 'menu', 'menubar'],
          requiredContextRole: ['group', 'menu', 'menubar'],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [
            ['roletype', 'widget', 'input', 'checkbox', 'menuitemcheckbox'],
            ['roletype', 'widget', 'command', 'menuitem', 'menuitemcheckbox'],
            ['roletype', 'widget', 'input', 'radio'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  P0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/meterRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-valuetext': null,
            'aria-valuemax': '100',
            'aria-valuemin': '0',
          },
          relatedConcepts: [{ concept: { name: 'meter' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-valuenow': null },
          superClass: [['roletype', 'structure', 'range']],
        },
        r = t;
      e.default = r;
    },
  }),
  O0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/navigationRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'nav' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  A0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/noneRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [],
        },
        r = t;
      e.default = r;
    },
  }),
  q0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/noteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  x0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/optionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-checked': null,
            'aria-posinset': null,
            'aria-setsize': null,
            'aria-selected': 'false',
          },
          relatedConcepts: [
            { concept: { name: 'item' }, module: 'XForms' },
            { concept: { name: 'listitem' }, module: 'ARIA' },
            { concept: { name: 'option' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-selected': 'false' },
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  M0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [{ concept: { name: 'p' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  $0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/presentationRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'alt', value: '' }],
                name: 'img',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  N0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-valuetext': null },
          relatedConcepts: [
            { concept: { name: 'progress' }, module: 'HTML' },
            { concept: { name: 'status' }, module: 'ARIA' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'range'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  j0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/radioRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-checked': null,
            'aria-posinset': null,
            'aria-setsize': null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'type', value: 'radio' }],
                name: 'input',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  I0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
          },
          relatedConcepts: [{ concept: { name: 'list' }, module: 'ARIA' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['radio']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select'],
            ['roletype', 'structure', 'section', 'group', 'select'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  L0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/regionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'aria-label' }],
                name: 'section',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
                name: 'section',
              },
              module: 'HTML',
            },
            {
              concept: {
                name: 'Device Independence Glossart perceivable unit',
              },
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  B0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/rowRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-colindex': null,
            'aria-expanded': null,
            'aria-level': null,
            'aria-posinset': null,
            'aria-rowindex': null,
            'aria-selected': null,
            'aria-setsize': null,
          },
          relatedConcepts: [{ concept: { name: 'tr' }, module: 'HTML' }],
          requireContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
          requiredContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
          requiredOwnedElements: [
            ['cell'],
            ['columnheader'],
            ['gridcell'],
            ['rowheader'],
          ],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'group'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  k0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'tbody' }, module: 'HTML' },
            { concept: { name: 'tfoot' }, module: 'HTML' },
            { concept: { name: 'thead' }, module: 'HTML' },
          ],
          requireContextRole: ['grid', 'table', 'treegrid'],
          requiredContextRole: ['grid', 'table', 'treegrid'],
          requiredOwnedElements: [['row']],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  D0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-sort': null },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'scope', value: 'row' }],
                name: 'th',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ name: 'scope', value: 'rowgroup' }],
                name: 'th',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: ['row', 'rowgroup'],
          requiredContextRole: ['row', 'rowgroup'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'cell'],
            ['roletype', 'structure', 'section', 'cell', 'gridcell'],
            ['roletype', 'widget', 'gridcell'],
            ['roletype', 'structure', 'sectionhead'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  F0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-valuetext': null,
            'aria-orientation': 'vertical',
            'aria-valuemax': '100',
            'aria-valuemin': '0',
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-controls': null, 'aria-valuenow': null },
          superClass: [
            ['roletype', 'structure', 'range'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  U0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/searchRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  H0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'search' },
                ],
                constraints: ['the list attribute is not set'],
                name: 'input',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'input', 'textbox']],
        },
        r = t;
      e.default = r;
    },
  }),
  z0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/separatorRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-orientation': 'horizontal',
            'aria-valuemax': '100',
            'aria-valuemin': '0',
            'aria-valuenow': null,
            'aria-valuetext': null,
          },
          relatedConcepts: [{ concept: { name: 'hr' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  V0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/sliderRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-haspopup': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-valuetext': null,
            'aria-orientation': 'horizontal',
            'aria-valuemax': '100',
            'aria-valuemin': '0',
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'type', value: 'range' }],
                name: 'input',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-valuenow': null },
          superClass: [
            ['roletype', 'widget', 'input'],
            ['roletype', 'structure', 'range'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  G0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
            'aria-valuetext': null,
            'aria-valuenow': '0',
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'type', value: 'number' }],
                name: 'input',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite'],
            ['roletype', 'widget', 'input'],
            ['roletype', 'structure', 'range'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  W0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/statusRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-atomic': 'true', 'aria-live': 'polite' },
          relatedConcepts: [{ concept: { name: 'output' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  K0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/strongRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [{ concept: { name: 'strong' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Y0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [{ concept: { name: 'sub' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  J0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [{ concept: { name: 'sup' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  X0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/switchRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'button' }, module: 'ARIA' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [['roletype', 'widget', 'input', 'checkbox']],
        },
        r = t;
      e.default = r;
    },
  }),
  Q0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/tabRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-posinset': null,
            'aria-setsize': null,
            'aria-selected': 'false',
          },
          relatedConcepts: [],
          requireContextRole: ['tablist'],
          requiredContextRole: ['tablist'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'sectionhead'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Z0 = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/tableRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-colcount': null, 'aria-rowcount': null },
          relatedConcepts: [{ concept: { name: 'table' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['row'], ['row', 'rowgroup']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  eE = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/tablistRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-level': null,
            'aria-multiselectable': null,
            'aria-orientation': 'horizontal',
          },
          relatedConcepts: [{ module: 'DAISY', concept: { name: 'guide' } }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['tab']],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'composite']],
        },
        r = t;
      e.default = r;
    },
  }),
  tE = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  rE = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/termRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'dfn' }, module: 'HTML' },
            { concept: { name: 'dt' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  nE = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/textboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-activedescendant': null,
            'aria-autocomplete': null,
            'aria-errormessage': null,
            'aria-haspopup': null,
            'aria-invalid': null,
            'aria-multiline': null,
            'aria-placeholder': null,
            'aria-readonly': null,
            'aria-required': null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'type' },
                  { constraints: ['undefined'], name: 'list' },
                ],
                constraints: ['the list attribute is not set'],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'email' },
                ],
                constraints: ['the list attribute is not set'],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'tel' },
                ],
                constraints: ['the list attribute is not set'],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'text' },
                ],
                constraints: ['the list attribute is not set'],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'url' },
                ],
                constraints: ['the list attribute is not set'],
                name: 'input',
              },
              module: 'HTML',
            },
            { concept: { name: 'input' }, module: 'XForms' },
            { concept: { name: 'textarea' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  aE = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/timeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'time' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  oE = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/timerRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'status']],
        },
        r = t;
      e.default = r;
    },
  }),
  iE = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-orientation': 'horizontal' },
          relatedConcepts: [{ concept: { name: 'menubar' }, module: 'ARIA' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'group']],
        },
        r = t;
      e.default = r;
    },
  }),
  lE = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  sE = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/treeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-invalid': null,
            'aria-multiselectable': null,
            'aria-required': null,
            'aria-orientation': 'vertical',
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['treeitem', 'group'], ['treeitem']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select'],
            ['roletype', 'structure', 'section', 'group', 'select'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  uE = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/treegridRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['row'], ['row', 'rowgroup']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'grid'],
            ['roletype', 'structure', 'section', 'table', 'grid'],
            ['roletype', 'widget', 'composite', 'select', 'tree'],
            ['roletype', 'structure', 'section', 'group', 'select', 'tree'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  cE = T({
    '../../node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-expanded': null, 'aria-haspopup': null },
          relatedConcepts: [],
          requireContextRole: ['group', 'tree'],
          requiredContextRole: ['group', 'tree'],
          requiredOwnedElements: [],
          requiredProps: { 'aria-selected': null },
          superClass: [
            ['roletype', 'structure', 'section', 'listitem'],
            ['roletype', 'widget', 'input', 'option'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  dE = T({
    '../../node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = U(I_()),
        r = U(L_()),
        n = U(B_()),
        a = U(k_()),
        o = U(D_()),
        i = U(F_()),
        l = U(U_()),
        u = U(H_()),
        c = U(z_()),
        s = U(V_()),
        d = U(G_()),
        p = U(W_()),
        f = U(K_()),
        h = U(Y_()),
        m = U(J_()),
        y = U(X_()),
        b = U(Q_()),
        g = U(Z_()),
        R = U(e0()),
        C = U(t0()),
        _ = U(r0()),
        w = U(n0()),
        E = U(a0()),
        v = U(o0()),
        O = U(i0()),
        $ = U(l0()),
        N = U(s0()),
        L = U(u0()),
        j = U(c0()),
        I = U(d0()),
        H = U(f0()),
        V = U(p0()),
        J = U(h0()),
        W = U(m0()),
        _e = U(b0()),
        Le = U(g0()),
        Be = U(y0()),
        F = U(v0()),
        B = U(_0()),
        D = U(E0()),
        G = U(w0()),
        Z = U(C0()),
        ue = U(R0()),
        Ee = U(T0()),
        st = U(S0()),
        q = U(P0()),
        z = U(O0()),
        k = U(A0()),
        X = U(q0()),
        M = U(x0()),
        ie = U(M0()),
        le = U($0()),
        ye = U(N0()),
        ut = U(j0()),
        jb = U(I0()),
        Ib = U(L0()),
        Lb = U(B0()),
        Bb = U(k0()),
        kb = U(D0()),
        Db = U(F0()),
        Fb = U(U0()),
        Ub = U(H0()),
        Hb = U(z0()),
        zb = U(V0()),
        Vb = U(G0()),
        Gb = U(W0()),
        Wb = U(K0()),
        Kb = U(Y0()),
        Yb = U(J0()),
        Jb = U(X0()),
        Xb = U(Q0()),
        Qb = U(Z0()),
        Zb = U(eE()),
        eg = U(tE()),
        tg = U(rE()),
        rg = U(nE()),
        ng = U(aE()),
        ag = U(oE()),
        og = U(iE()),
        ig = U(lE()),
        lg = U(sE()),
        sg = U(uE()),
        ug = U(cE());
      function U(Cn) {
        return Cn && Cn.__esModule ? Cn : { default: Cn };
      }
      var cg = [
          ['alert', t.default],
          ['alertdialog', r.default],
          ['application', n.default],
          ['article', a.default],
          ['banner', o.default],
          ['blockquote', i.default],
          ['button', l.default],
          ['caption', u.default],
          ['cell', c.default],
          ['checkbox', s.default],
          ['code', d.default],
          ['columnheader', p.default],
          ['combobox', f.default],
          ['complementary', h.default],
          ['contentinfo', m.default],
          ['definition', y.default],
          ['deletion', b.default],
          ['dialog', g.default],
          ['directory', R.default],
          ['document', C.default],
          ['emphasis', _.default],
          ['feed', w.default],
          ['figure', E.default],
          ['form', v.default],
          ['generic', O.default],
          ['grid', $.default],
          ['gridcell', N.default],
          ['group', L.default],
          ['heading', j.default],
          ['img', I.default],
          ['insertion', H.default],
          ['link', V.default],
          ['list', J.default],
          ['listbox', W.default],
          ['listitem', _e.default],
          ['log', Le.default],
          ['main', Be.default],
          ['mark', F.default],
          ['marquee', B.default],
          ['math', D.default],
          ['menu', G.default],
          ['menubar', Z.default],
          ['menuitem', ue.default],
          ['menuitemcheckbox', Ee.default],
          ['menuitemradio', st.default],
          ['meter', q.default],
          ['navigation', z.default],
          ['none', k.default],
          ['note', X.default],
          ['option', M.default],
          ['paragraph', ie.default],
          ['presentation', le.default],
          ['progressbar', ye.default],
          ['radio', ut.default],
          ['radiogroup', jb.default],
          ['region', Ib.default],
          ['row', Lb.default],
          ['rowgroup', Bb.default],
          ['rowheader', kb.default],
          ['scrollbar', Db.default],
          ['search', Fb.default],
          ['searchbox', Ub.default],
          ['separator', Hb.default],
          ['slider', zb.default],
          ['spinbutton', Vb.default],
          ['status', Gb.default],
          ['strong', Wb.default],
          ['subscript', Kb.default],
          ['superscript', Yb.default],
          ['switch', Jb.default],
          ['tab', Xb.default],
          ['table', Qb.default],
          ['tablist', Zb.default],
          ['tabpanel', eg.default],
          ['term', tg.default],
          ['textbox', rg.default],
          ['time', ng.default],
          ['timer', ag.default],
          ['toolbar', og.default],
          ['tooltip', ig.default],
          ['tree', lg.default],
          ['treegrid', sg.default],
          ['treeitem', ug.default],
        ],
        dg = cg;
      e.default = dg;
    },
  }),
  fE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'abstract [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  pE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'acknowledgments [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  hE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'afterword [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  mE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'appendix [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  bE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-errormessage': null, 'aria-invalid': null },
          relatedConcepts: [
            { concept: { name: 'referrer [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command', 'link']],
        },
        r = t;
      e.default = r;
    },
  }),
  gE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            {
              concept: { name: 'EPUB biblioentry [EPUB-SSV]' },
              module: 'EPUB',
            },
          ],
          requireContextRole: ['doc-bibliography'],
          requiredContextRole: ['doc-bibliography'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'listitem']],
        },
        r = t;
      e.default = r;
    },
  }),
  yE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'bibliography [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['doc-biblioentry']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  vE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-errormessage': null, 'aria-invalid': null },
          relatedConcepts: [
            { concept: { name: 'biblioref [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command', 'link']],
        },
        r = t;
      e.default = r;
    },
  }),
  _E = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'chapter [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  EE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'colophon [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  wE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'conclusion [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  CE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'cover [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'img']],
        },
        r = t;
      e.default = r;
    },
  }),
  RE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'credit [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  TE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'credits [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  SE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'dedication [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  PE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'rearnote [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: ['doc-endnotes'],
          requiredContextRole: ['doc-endnotes'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'listitem']],
        },
        r = t;
      e.default = r;
    },
  }),
  OE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'rearnotes [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['doc-endnote']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  AE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'epigraph [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  qE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'epilogue [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  xE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'errata [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  ME = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  $E = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'footnote [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  NE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'foreword [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  jE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'glossary [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['definition'], ['term']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  IE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-errormessage': null, 'aria-invalid': null },
          relatedConcepts: [
            { concept: { name: 'glossref [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command', 'link']],
        },
        r = t;
      e.default = r;
    },
  }),
  LE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'index [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'landmark', 'navigation'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  BE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'introduction [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  kE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-errormessage': null, 'aria-invalid': null },
          relatedConcepts: [
            { concept: { name: 'noteref [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command', 'link']],
        },
        r = t;
      e.default = r;
    },
  }),
  DE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'notice [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'note']],
        },
        r = t;
      e.default = r;
    },
  }),
  FE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'pagebreak [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'separator']],
        },
        r = t;
      e.default = r;
    },
  }),
  UE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'page-list [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'landmark', 'navigation'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  HE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'part [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  zE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'preface [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  VE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'prologue [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  GE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'pullquote [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['none']],
        },
        r = t;
      e.default = r;
    },
  }),
  WE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'qna [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  KE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'subtitle [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'sectionhead']],
        },
        r = t;
      e.default = r;
    },
  }),
  YE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'help [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'note']],
        },
        r = t;
      e.default = r;
    },
  }),
  JE = T({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'toc [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'landmark', 'navigation'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  XE = T({
    '../../node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = D(fE()),
        r = D(pE()),
        n = D(hE()),
        a = D(mE()),
        o = D(bE()),
        i = D(gE()),
        l = D(yE()),
        u = D(vE()),
        c = D(_E()),
        s = D(EE()),
        d = D(wE()),
        p = D(CE()),
        f = D(RE()),
        h = D(TE()),
        m = D(SE()),
        y = D(PE()),
        b = D(OE()),
        g = D(AE()),
        R = D(qE()),
        C = D(xE()),
        _ = D(ME()),
        w = D($E()),
        E = D(NE()),
        v = D(jE()),
        O = D(IE()),
        $ = D(LE()),
        N = D(BE()),
        L = D(kE()),
        j = D(DE()),
        I = D(FE()),
        H = D(UE()),
        V = D(HE()),
        J = D(zE()),
        W = D(VE()),
        _e = D(GE()),
        Le = D(WE()),
        Be = D(KE()),
        F = D(YE()),
        B = D(JE());
      function D(ue) {
        return ue && ue.__esModule ? ue : { default: ue };
      }
      var G = [
          ['doc-abstract', t.default],
          ['doc-acknowledgments', r.default],
          ['doc-afterword', n.default],
          ['doc-appendix', a.default],
          ['doc-backlink', o.default],
          ['doc-biblioentry', i.default],
          ['doc-bibliography', l.default],
          ['doc-biblioref', u.default],
          ['doc-chapter', c.default],
          ['doc-colophon', s.default],
          ['doc-conclusion', d.default],
          ['doc-cover', p.default],
          ['doc-credit', f.default],
          ['doc-credits', h.default],
          ['doc-dedication', m.default],
          ['doc-endnote', y.default],
          ['doc-endnotes', b.default],
          ['doc-epigraph', g.default],
          ['doc-epilogue', R.default],
          ['doc-errata', C.default],
          ['doc-example', _.default],
          ['doc-footnote', w.default],
          ['doc-foreword', E.default],
          ['doc-glossary', v.default],
          ['doc-glossref', O.default],
          ['doc-index', $.default],
          ['doc-introduction', N.default],
          ['doc-noteref', L.default],
          ['doc-notice', j.default],
          ['doc-pagebreak', I.default],
          ['doc-pagelist', H.default],
          ['doc-part', V.default],
          ['doc-preface', J.default],
          ['doc-prologue', W.default],
          ['doc-pullquote', _e.default],
          ['doc-qna', Le.default],
          ['doc-subtitle', Be.default],
          ['doc-tip', F.default],
          ['doc-toc', B.default],
        ],
        Z = G;
      e.default = Z;
    },
  }),
  QE = T({
    '../../node_modules/aria-query/lib/etc/roles/graphics/graphicsDocumentRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { module: 'GRAPHICS', concept: { name: 'graphics-object' } },
            { module: 'ARIA', concept: { name: 'img' } },
            { module: 'ARIA', concept: { name: 'article' } },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'document']],
        },
        r = t;
      e.default = r;
    },
  }),
  ZE = T({
    '../../node_modules/aria-query/lib/etc/roles/graphics/graphicsObjectRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { module: 'GRAPHICS', concept: { name: 'graphics-document' } },
            { module: 'ARIA', concept: { name: 'group' } },
            { module: 'ARIA', concept: { name: 'img' } },
            { module: 'GRAPHICS', concept: { name: 'graphics-symbol' } },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'group']],
        },
        r = t;
      e.default = r;
    },
  }),
  ew = T({
    '../../node_modules/aria-query/lib/etc/roles/graphics/graphicsSymbolRole.js'(
      e,
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'img']],
        },
        r = t;
      e.default = r;
    },
  }),
  tw = T({
    '../../node_modules/aria-query/lib/etc/roles/ariaGraphicsRoles.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = a(QE()),
        r = a(ZE()),
        n = a(ew());
      function a(l) {
        return l && l.__esModule ? l : { default: l };
      }
      var o = [
          ['graphics-document', t.default],
          ['graphics-object', r.default],
          ['graphics-symbol', n.default],
        ],
        i = o;
      e.default = i;
    },
  }),
  Ni = T({
    '../../node_modules/aria-query/lib/rolesMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = i(j_()),
        r = i(dE()),
        n = i(XE()),
        a = i(tw()),
        o = i(hn());
      function i(g) {
        return g && g.__esModule ? g : { default: g };
      }
      function l(g, R, C) {
        return (
          R in g
            ? Object.defineProperty(g, R, {
                value: C,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (g[R] = C),
          g
        );
      }
      function u(g, R) {
        var C = (typeof Symbol < 'u' && g[Symbol.iterator]) || g['@@iterator'];
        if (!C) {
          if (Array.isArray(g) || (C = d(g)) || R) {
            C && (g = C);
            var _ = 0,
              w = function () {};
            return {
              s: w,
              n: function () {
                return _ >= g.length
                  ? { done: !0 }
                  : { done: !1, value: g[_++] };
              },
              e: function ($) {
                throw $;
              },
              f: w,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var E = !0,
          v = !1,
          O;
        return {
          s: function () {
            C = C.call(g);
          },
          n: function () {
            var $ = C.next();
            return (E = $.done), $;
          },
          e: function ($) {
            (v = !0), (O = $);
          },
          f: function () {
            try {
              !E && C.return != null && C.return();
            } finally {
              if (v) throw O;
            }
          },
        };
      }
      function c(g, R) {
        return h(g) || f(g, R) || d(g, R) || s();
      }
      function s() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function d(g, R) {
        if (g) {
          if (typeof g == 'string') return p(g, R);
          var C = Object.prototype.toString.call(g).slice(8, -1);
          if (
            (C === 'Object' && g.constructor && (C = g.constructor.name),
            C === 'Map' || C === 'Set')
          )
            return Array.from(g);
          if (
            C === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)
          )
            return p(g, R);
        }
      }
      function p(g, R) {
        (R == null || R > g.length) && (R = g.length);
        for (var C = 0, _ = new Array(R); C < R; C++) _[C] = g[C];
        return _;
      }
      function f(g, R) {
        var C =
          g == null
            ? null
            : (typeof Symbol < 'u' && g[Symbol.iterator]) || g['@@iterator'];
        if (C != null) {
          var _ = [],
            w = !0,
            E = !1,
            v,
            O;
          try {
            for (
              C = C.call(g);
              !(w = (v = C.next()).done) &&
              (_.push(v.value), !(R && _.length === R));
              w = !0
            );
          } catch ($) {
            (E = !0), (O = $);
          } finally {
            try {
              !w && C.return != null && C.return();
            } finally {
              if (E) throw O;
            }
          }
          return _;
        }
      }
      function h(g) {
        if (Array.isArray(g)) return g;
      }
      var m = [].concat(t.default, r.default, n.default, a.default);
      m.forEach(function (g) {
        var R = c(g, 2),
          C = R[1],
          _ = u(C.superClass),
          w;
        try {
          for (_.s(); !(w = _.n()).done; ) {
            var E = w.value,
              v = u(E),
              O;
            try {
              var $ = function () {
                var N = O.value,
                  L = m.find(function (J) {
                    var W = c(J, 1),
                      _e = W[0];
                    return _e === N;
                  });
                if (L)
                  for (
                    var j = L[1], I = 0, H = Object.keys(j.props);
                    I < H.length;
                    I++
                  ) {
                    var V = H[I];
                    Object.prototype.hasOwnProperty.call(C.props, V) ||
                      Object.assign(C.props, l({}, V, j.props[V]));
                  }
              };
              for (v.s(); !(O = v.n()).done; ) $();
            } catch (N) {
              v.e(N);
            } finally {
              v.f();
            }
          }
        } catch (N) {
          _.e(N);
        } finally {
          _.f();
        }
      });
      var y = {
          entries: function () {
            return m;
          },
          forEach: function (g) {
            var R =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : null,
              C = u(m),
              _;
            try {
              for (C.s(); !(_ = C.n()).done; ) {
                var w = c(_.value, 2),
                  E = w[0],
                  v = w[1];
                g.call(R, v, E, m);
              }
            } catch (O) {
              C.e(O);
            } finally {
              C.f();
            }
          },
          get: function (g) {
            var R = m.find(function (C) {
              return C[0] === g;
            });
            return R && R[1];
          },
          has: function (g) {
            return !!y.get(g);
          },
          keys: function () {
            return m.map(function (g) {
              var R = c(g, 1),
                C = R[0];
              return C;
            });
          },
          values: function () {
            return m.map(function (g) {
              var R = c(g, 2),
                C = R[1];
              return C;
            });
          },
        },
        b = (0, o.default)(y, y.entries());
      e.default = b;
    },
  }),
  rw = T({
    '../../node_modules/dequal/lite/index.js'(e) {
      var t = Object.prototype.hasOwnProperty;
      function r(n, a) {
        var o, i;
        if (n === a) return !0;
        if (n && a && (o = n.constructor) === a.constructor) {
          if (o === Date) return n.getTime() === a.getTime();
          if (o === RegExp) return n.toString() === a.toString();
          if (o === Array) {
            if ((i = n.length) === a.length) for (; i-- && r(n[i], a[i]); );
            return i === -1;
          }
          if (!o || typeof n == 'object') {
            i = 0;
            for (o in n)
              if (
                (t.call(n, o) && ++i && !t.call(a, o)) ||
                !(o in a) ||
                !r(n[o], a[o])
              )
                return !1;
            return Object.keys(a).length === i;
          }
        }
        return n !== n && a !== a;
      }
      e.dequal = r;
    },
  }),
  nw = T({
    '../../node_modules/aria-query/lib/elementRoleMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = rw(),
        r = a(hn()),
        n = a(Ni());
      function a(w) {
        return w && w.__esModule ? w : { default: w };
      }
      function o(w, E) {
        return u(w) || l(w, E) || s(w, E) || i();
      }
      function i() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function l(w, E) {
        var v =
          w == null
            ? null
            : (typeof Symbol < 'u' && w[Symbol.iterator]) || w['@@iterator'];
        if (v != null) {
          var O = [],
            $ = !0,
            N = !1,
            L,
            j;
          try {
            for (
              v = v.call(w);
              !($ = (L = v.next()).done) &&
              (O.push(L.value), !(E && O.length === E));
              $ = !0
            );
          } catch (I) {
            (N = !0), (j = I);
          } finally {
            try {
              !$ && v.return != null && v.return();
            } finally {
              if (N) throw j;
            }
          }
          return O;
        }
      }
      function u(w) {
        if (Array.isArray(w)) return w;
      }
      function c(w, E) {
        var v = (typeof Symbol < 'u' && w[Symbol.iterator]) || w['@@iterator'];
        if (!v) {
          if (Array.isArray(w) || (v = s(w)) || E) {
            v && (w = v);
            var O = 0,
              $ = function () {};
            return {
              s: $,
              n: function () {
                return O >= w.length
                  ? { done: !0 }
                  : { done: !1, value: w[O++] };
              },
              e: function (I) {
                throw I;
              },
              f: $,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var N = !0,
          L = !1,
          j;
        return {
          s: function () {
            v = v.call(w);
          },
          n: function () {
            var I = v.next();
            return (N = I.done), I;
          },
          e: function (I) {
            (L = !0), (j = I);
          },
          f: function () {
            try {
              !N && v.return != null && v.return();
            } finally {
              if (L) throw j;
            }
          },
        };
      }
      function s(w, E) {
        if (w) {
          if (typeof w == 'string') return d(w, E);
          var v = Object.prototype.toString.call(w).slice(8, -1);
          if (
            (v === 'Object' && w.constructor && (v = w.constructor.name),
            v === 'Map' || v === 'Set')
          )
            return Array.from(w);
          if (
            v === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)
          )
            return d(w, E);
        }
      }
      function d(w, E) {
        (E == null || E > w.length) && (E = w.length);
        for (var v = 0, O = new Array(E); v < E; v++) O[v] = w[v];
        return O;
      }
      var p = [],
        f = n.default.keys();
      for (R = 0; R < f.length; R++)
        if (((h = f[R]), (m = n.default.get(h)), m))
          for (
            y = [].concat(m.baseConcepts, m.relatedConcepts), g = 0;
            g < y.length;
            g++
          )
            (b = y[g]),
              b.module === 'HTML' &&
                (function () {
                  var w = b.concept;
                  if (w) {
                    var E = p.find(function (N) {
                        return (0, t.dequal)(N, w);
                      }),
                      v;
                    E ? (v = E[1]) : (v = []);
                    for (var O = !0, $ = 0; $ < v.length; $++)
                      if (v[$] === h) {
                        O = !1;
                        break;
                      }
                    O && v.push(h), p.push([w, v]);
                  }
                })();
      var h,
        m,
        y,
        b,
        g,
        R,
        C = {
          entries: function () {
            return p;
          },
          forEach: function (w) {
            var E =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : null,
              v = c(p),
              O;
            try {
              for (v.s(); !(O = v.n()).done; ) {
                var $ = o(O.value, 2),
                  N = $[0],
                  L = $[1];
                w.call(E, L, N, p);
              }
            } catch (j) {
              v.e(j);
            } finally {
              v.f();
            }
          },
          get: function (w) {
            var E = p.find(function (v) {
              return (
                w.name === v[0].name &&
                (0, t.dequal)(w.attributes, v[0].attributes)
              );
            });
            return E && E[1];
          },
          has: function (w) {
            return !!C.get(w);
          },
          keys: function () {
            return p.map(function (w) {
              var E = o(w, 1),
                v = E[0];
              return v;
            });
          },
          values: function () {
            return p.map(function (w) {
              var E = o(w, 2),
                v = E[1];
              return v;
            });
          },
        },
        _ = (0, r.default)(C, C.entries());
      e.default = _;
    },
  }),
  aw = T({
    '../../node_modules/aria-query/lib/roleElementMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = n(hn()),
        r = n(Ni());
      function n(E) {
        return E && E.__esModule ? E : { default: E };
      }
      function a(E, v) {
        return l(E) || i(E, v) || c(E, v) || o();
      }
      function o() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function i(E, v) {
        var O =
          E == null
            ? null
            : (typeof Symbol < 'u' && E[Symbol.iterator]) || E['@@iterator'];
        if (O != null) {
          var $ = [],
            N = !0,
            L = !1,
            j,
            I;
          try {
            for (
              O = O.call(E);
              !(N = (j = O.next()).done) &&
              ($.push(j.value), !(v && $.length === v));
              N = !0
            );
          } catch (H) {
            (L = !0), (I = H);
          } finally {
            try {
              !N && O.return != null && O.return();
            } finally {
              if (L) throw I;
            }
          }
          return $;
        }
      }
      function l(E) {
        if (Array.isArray(E)) return E;
      }
      function u(E, v) {
        var O = (typeof Symbol < 'u' && E[Symbol.iterator]) || E['@@iterator'];
        if (!O) {
          if (Array.isArray(E) || (O = c(E)) || v) {
            O && (E = O);
            var $ = 0,
              N = function () {};
            return {
              s: N,
              n: function () {
                return $ >= E.length
                  ? { done: !0 }
                  : { done: !1, value: E[$++] };
              },
              e: function (H) {
                throw H;
              },
              f: N,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var L = !0,
          j = !1,
          I;
        return {
          s: function () {
            O = O.call(E);
          },
          n: function () {
            var H = O.next();
            return (L = H.done), H;
          },
          e: function (H) {
            (j = !0), (I = H);
          },
          f: function () {
            try {
              !L && O.return != null && O.return();
            } finally {
              if (j) throw I;
            }
          },
        };
      }
      function c(E, v) {
        if (E) {
          if (typeof E == 'string') return s(E, v);
          var O = Object.prototype.toString.call(E).slice(8, -1);
          if (
            (O === 'Object' && E.constructor && (O = E.constructor.name),
            O === 'Map' || O === 'Set')
          )
            return Array.from(E);
          if (
            O === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)
          )
            return s(E, v);
        }
      }
      function s(E, v) {
        (v == null || v > E.length) && (v = E.length);
        for (var O = 0, $ = new Array(v); O < v; O++) $[O] = E[O];
        return $;
      }
      var d = [],
        p = r.default.keys();
      for (C = 0; C < p.length; C++)
        if (((f = p[C]), (h = r.default.get(f)), (m = []), h)) {
          for (
            y = [].concat(h.baseConcepts, h.relatedConcepts), R = 0;
            R < y.length;
            R++
          )
            (b = y[R]),
              b.module === 'HTML' && ((g = b.concept), g != null && m.push(g));
          m.length > 0 && d.push([f, m]);
        }
      var f,
        h,
        m,
        y,
        b,
        g,
        R,
        C,
        _ = {
          entries: function () {
            return d;
          },
          forEach: function (E) {
            var v =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : null,
              O = u(d),
              $;
            try {
              for (O.s(); !($ = O.n()).done; ) {
                var N = a($.value, 2),
                  L = N[0],
                  j = N[1];
                E.call(v, j, L, d);
              }
            } catch (I) {
              O.e(I);
            } finally {
              O.f();
            }
          },
          get: function (E) {
            var v = d.find(function (O) {
              return O[0] === E;
            });
            return v && v[1];
          },
          has: function (E) {
            return !!_.get(E);
          },
          keys: function () {
            return d.map(function (E) {
              var v = a(E, 1),
                O = v[0];
              return O;
            });
          },
          values: function () {
            return d.map(function (E) {
              var v = a(E, 2),
                O = v[1];
              return O;
            });
          },
        },
        w = (0, t.default)(_, _.entries());
      e.default = w;
    },
  }),
  ji = T({
    '../../node_modules/aria-query/lib/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.roles = e.roleElements = e.elementRoles = e.dom = e.aria = void 0);
      var t = i(E_()),
        r = i(w_()),
        n = i(Ni()),
        a = i(nw()),
        o = i(aw());
      function i(p) {
        return p && p.__esModule ? p : { default: p };
      }
      var l = t.default;
      e.aria = l;
      var u = r.default;
      e.dom = u;
      var c = n.default;
      e.roles = c;
      var s = a.default;
      e.elementRoles = s;
      var d = o.default;
      e.roleElements = d;
    },
  }),
  ow = T({
    '../../node_modules/color-name/index.js'(e, t) {
      t.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      };
    },
  }),
  jd = T({
    '../../node_modules/color-convert/conversions.js'(e, t) {
      var r = ow(),
        n = {};
      for (let i of Object.keys(r)) n[r[i]] = i;
      var a = {
        rgb: { channels: 3, labels: 'rgb' },
        hsl: { channels: 3, labels: 'hsl' },
        hsv: { channels: 3, labels: 'hsv' },
        hwb: { channels: 3, labels: 'hwb' },
        cmyk: { channels: 4, labels: 'cmyk' },
        xyz: { channels: 3, labels: 'xyz' },
        lab: { channels: 3, labels: 'lab' },
        lch: { channels: 3, labels: 'lch' },
        hex: { channels: 1, labels: ['hex'] },
        keyword: { channels: 1, labels: ['keyword'] },
        ansi16: { channels: 1, labels: ['ansi16'] },
        ansi256: { channels: 1, labels: ['ansi256'] },
        hcg: { channels: 3, labels: ['h', 'c', 'g'] },
        apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
        gray: { channels: 1, labels: ['gray'] },
      };
      t.exports = a;
      for (let i of Object.keys(a)) {
        if (!('channels' in a[i]))
          throw new Error('missing channels property: ' + i);
        if (!('labels' in a[i]))
          throw new Error('missing channel labels property: ' + i);
        if (a[i].labels.length !== a[i].channels)
          throw new Error('channel and label counts mismatch: ' + i);
        let { channels: l, labels: u } = a[i];
        delete a[i].channels,
          delete a[i].labels,
          Object.defineProperty(a[i], 'channels', { value: l }),
          Object.defineProperty(a[i], 'labels', { value: u });
      }
      (a.rgb.hsl = function (i) {
        let l = i[0] / 255,
          u = i[1] / 255,
          c = i[2] / 255,
          s = Math.min(l, u, c),
          d = Math.max(l, u, c),
          p = d - s,
          f,
          h;
        d === s
          ? (f = 0)
          : l === d
            ? (f = (u - c) / p)
            : u === d
              ? (f = 2 + (c - l) / p)
              : c === d && (f = 4 + (l - u) / p),
          (f = Math.min(f * 60, 360)),
          f < 0 && (f += 360);
        let m = (s + d) / 2;
        return (
          d === s
            ? (h = 0)
            : m <= 0.5
              ? (h = p / (d + s))
              : (h = p / (2 - d - s)),
          [f, h * 100, m * 100]
        );
      }),
        (a.rgb.hsv = function (i) {
          let l,
            u,
            c,
            s,
            d,
            p = i[0] / 255,
            f = i[1] / 255,
            h = i[2] / 255,
            m = Math.max(p, f, h),
            y = m - Math.min(p, f, h),
            b = function (g) {
              return (m - g) / 6 / y + 1 / 2;
            };
          return (
            y === 0
              ? ((s = 0), (d = 0))
              : ((d = y / m),
                (l = b(p)),
                (u = b(f)),
                (c = b(h)),
                p === m
                  ? (s = c - u)
                  : f === m
                    ? (s = 1 / 3 + l - c)
                    : h === m && (s = 2 / 3 + u - l),
                s < 0 ? (s += 1) : s > 1 && (s -= 1)),
            [s * 360, d * 100, m * 100]
          );
        }),
        (a.rgb.hwb = function (i) {
          let l = i[0],
            u = i[1],
            c = i[2],
            s = a.rgb.hsl(i)[0],
            d = (1 / 255) * Math.min(l, Math.min(u, c));
          return (
            (c = 1 - (1 / 255) * Math.max(l, Math.max(u, c))),
            [s, d * 100, c * 100]
          );
        }),
        (a.rgb.cmyk = function (i) {
          let l = i[0] / 255,
            u = i[1] / 255,
            c = i[2] / 255,
            s = Math.min(1 - l, 1 - u, 1 - c),
            d = (1 - l - s) / (1 - s) || 0,
            p = (1 - u - s) / (1 - s) || 0,
            f = (1 - c - s) / (1 - s) || 0;
          return [d * 100, p * 100, f * 100, s * 100];
        });
      function o(i, l) {
        return (i[0] - l[0]) ** 2 + (i[1] - l[1]) ** 2 + (i[2] - l[2]) ** 2;
      }
      (a.rgb.keyword = function (i) {
        let l = n[i];
        if (l) return l;
        let u = 1 / 0,
          c;
        for (let s of Object.keys(r)) {
          let d = r[s],
            p = o(i, d);
          p < u && ((u = p), (c = s));
        }
        return c;
      }),
        (a.keyword.rgb = function (i) {
          return r[i];
        }),
        (a.rgb.xyz = function (i) {
          let l = i[0] / 255,
            u = i[1] / 255,
            c = i[2] / 255;
          (l = l > 0.04045 ? ((l + 0.055) / 1.055) ** 2.4 : l / 12.92),
            (u = u > 0.04045 ? ((u + 0.055) / 1.055) ** 2.4 : u / 12.92),
            (c = c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92);
          let s = l * 0.4124 + u * 0.3576 + c * 0.1805,
            d = l * 0.2126 + u * 0.7152 + c * 0.0722,
            p = l * 0.0193 + u * 0.1192 + c * 0.9505;
          return [s * 100, d * 100, p * 100];
        }),
        (a.rgb.lab = function (i) {
          let l = a.rgb.xyz(i),
            u = l[0],
            c = l[1],
            s = l[2];
          (u /= 95.047),
            (c /= 100),
            (s /= 108.883),
            (u = u > 0.008856 ? u ** (1 / 3) : 7.787 * u + 16 / 116),
            (c = c > 0.008856 ? c ** (1 / 3) : 7.787 * c + 16 / 116),
            (s = s > 0.008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116);
          let d = 116 * c - 16,
            p = 500 * (u - c),
            f = 200 * (c - s);
          return [d, p, f];
        }),
        (a.hsl.rgb = function (i) {
          let l = i[0] / 360,
            u = i[1] / 100,
            c = i[2] / 100,
            s,
            d,
            p;
          if (u === 0) return (p = c * 255), [p, p, p];
          c < 0.5 ? (s = c * (1 + u)) : (s = c + u - c * u);
          let f = 2 * c - s,
            h = [0, 0, 0];
          for (let m = 0; m < 3; m++)
            (d = l + (1 / 3) * -(m - 1)),
              d < 0 && d++,
              d > 1 && d--,
              6 * d < 1
                ? (p = f + (s - f) * 6 * d)
                : 2 * d < 1
                  ? (p = s)
                  : 3 * d < 2
                    ? (p = f + (s - f) * (2 / 3 - d) * 6)
                    : (p = f),
              (h[m] = p * 255);
          return h;
        }),
        (a.hsl.hsv = function (i) {
          let l = i[0],
            u = i[1] / 100,
            c = i[2] / 100,
            s = u,
            d = Math.max(c, 0.01);
          (c *= 2), (u *= c <= 1 ? c : 2 - c), (s *= d <= 1 ? d : 2 - d);
          let p = (c + u) / 2,
            f = c === 0 ? (2 * s) / (d + s) : (2 * u) / (c + u);
          return [l, f * 100, p * 100];
        }),
        (a.hsv.rgb = function (i) {
          let l = i[0] / 60,
            u = i[1] / 100,
            c = i[2] / 100,
            s = Math.floor(l) % 6,
            d = l - Math.floor(l),
            p = 255 * c * (1 - u),
            f = 255 * c * (1 - u * d),
            h = 255 * c * (1 - u * (1 - d));
          switch (((c *= 255), s)) {
            case 0:
              return [c, h, p];
            case 1:
              return [f, c, p];
            case 2:
              return [p, c, h];
            case 3:
              return [p, f, c];
            case 4:
              return [h, p, c];
            case 5:
              return [c, p, f];
          }
        }),
        (a.hsv.hsl = function (i) {
          let l = i[0],
            u = i[1] / 100,
            c = i[2] / 100,
            s = Math.max(c, 0.01),
            d,
            p;
          p = (2 - u) * c;
          let f = (2 - u) * s;
          return (
            (d = u * s),
            (d /= f <= 1 ? f : 2 - f),
            (d = d || 0),
            (p /= 2),
            [l, d * 100, p * 100]
          );
        }),
        (a.hwb.rgb = function (i) {
          let l = i[0] / 360,
            u = i[1] / 100,
            c = i[2] / 100,
            s = u + c,
            d;
          s > 1 && ((u /= s), (c /= s));
          let p = Math.floor(6 * l),
            f = 1 - c;
          (d = 6 * l - p), p & 1 && (d = 1 - d);
          let h = u + d * (f - u),
            m,
            y,
            b;
          switch (p) {
            default:
            case 6:
            case 0:
              (m = f), (y = h), (b = u);
              break;
            case 1:
              (m = h), (y = f), (b = u);
              break;
            case 2:
              (m = u), (y = f), (b = h);
              break;
            case 3:
              (m = u), (y = h), (b = f);
              break;
            case 4:
              (m = h), (y = u), (b = f);
              break;
            case 5:
              (m = f), (y = u), (b = h);
              break;
          }
          return [m * 255, y * 255, b * 255];
        }),
        (a.cmyk.rgb = function (i) {
          let l = i[0] / 100,
            u = i[1] / 100,
            c = i[2] / 100,
            s = i[3] / 100,
            d = 1 - Math.min(1, l * (1 - s) + s),
            p = 1 - Math.min(1, u * (1 - s) + s),
            f = 1 - Math.min(1, c * (1 - s) + s);
          return [d * 255, p * 255, f * 255];
        }),
        (a.xyz.rgb = function (i) {
          let l = i[0] / 100,
            u = i[1] / 100,
            c = i[2] / 100,
            s,
            d,
            p;
          return (
            (s = l * 3.2406 + u * -1.5372 + c * -0.4986),
            (d = l * -0.9689 + u * 1.8758 + c * 0.0415),
            (p = l * 0.0557 + u * -0.204 + c * 1.057),
            (s = s > 0.0031308 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92),
            (d = d > 0.0031308 ? 1.055 * d ** (1 / 2.4) - 0.055 : d * 12.92),
            (p = p > 0.0031308 ? 1.055 * p ** (1 / 2.4) - 0.055 : p * 12.92),
            (s = Math.min(Math.max(0, s), 1)),
            (d = Math.min(Math.max(0, d), 1)),
            (p = Math.min(Math.max(0, p), 1)),
            [s * 255, d * 255, p * 255]
          );
        }),
        (a.xyz.lab = function (i) {
          let l = i[0],
            u = i[1],
            c = i[2];
          (l /= 95.047),
            (u /= 100),
            (c /= 108.883),
            (l = l > 0.008856 ? l ** (1 / 3) : 7.787 * l + 16 / 116),
            (u = u > 0.008856 ? u ** (1 / 3) : 7.787 * u + 16 / 116),
            (c = c > 0.008856 ? c ** (1 / 3) : 7.787 * c + 16 / 116);
          let s = 116 * u - 16,
            d = 500 * (l - u),
            p = 200 * (u - c);
          return [s, d, p];
        }),
        (a.lab.xyz = function (i) {
          let l = i[0],
            u = i[1],
            c = i[2],
            s,
            d,
            p;
          (d = (l + 16) / 116), (s = u / 500 + d), (p = d - c / 200);
          let f = d ** 3,
            h = s ** 3,
            m = p ** 3;
          return (
            (d = f > 0.008856 ? f : (d - 16 / 116) / 7.787),
            (s = h > 0.008856 ? h : (s - 16 / 116) / 7.787),
            (p = m > 0.008856 ? m : (p - 16 / 116) / 7.787),
            (s *= 95.047),
            (d *= 100),
            (p *= 108.883),
            [s, d, p]
          );
        }),
        (a.lab.lch = function (i) {
          let l = i[0],
            u = i[1],
            c = i[2],
            s;
          (s = (Math.atan2(c, u) * 360) / 2 / Math.PI), s < 0 && (s += 360);
          let d = Math.sqrt(u * u + c * c);
          return [l, d, s];
        }),
        (a.lch.lab = function (i) {
          let l = i[0],
            u = i[1],
            c = (i[2] / 360) * 2 * Math.PI,
            s = u * Math.cos(c),
            d = u * Math.sin(c);
          return [l, s, d];
        }),
        (a.rgb.ansi16 = function (i, l = null) {
          let [u, c, s] = i,
            d = l === null ? a.rgb.hsv(i)[2] : l;
          if (((d = Math.round(d / 50)), d === 0)) return 30;
          let p =
            30 +
            ((Math.round(s / 255) << 2) |
              (Math.round(c / 255) << 1) |
              Math.round(u / 255));
          return d === 2 && (p += 60), p;
        }),
        (a.hsv.ansi16 = function (i) {
          return a.rgb.ansi16(a.hsv.rgb(i), i[2]);
        }),
        (a.rgb.ansi256 = function (i) {
          let l = i[0],
            u = i[1],
            c = i[2];
          return l === u && u === c
            ? l < 8
              ? 16
              : l > 248
                ? 231
                : Math.round(((l - 8) / 247) * 24) + 232
            : 16 +
                36 * Math.round((l / 255) * 5) +
                6 * Math.round((u / 255) * 5) +
                Math.round((c / 255) * 5);
        }),
        (a.ansi16.rgb = function (i) {
          let l = i % 10;
          if (l === 0 || l === 7)
            return i > 50 && (l += 3.5), (l = (l / 10.5) * 255), [l, l, l];
          let u = (~~(i > 50) + 1) * 0.5,
            c = (l & 1) * u * 255,
            s = ((l >> 1) & 1) * u * 255,
            d = ((l >> 2) & 1) * u * 255;
          return [c, s, d];
        }),
        (a.ansi256.rgb = function (i) {
          if (i >= 232) {
            let d = (i - 232) * 10 + 8;
            return [d, d, d];
          }
          i -= 16;
          let l,
            u = (Math.floor(i / 36) / 5) * 255,
            c = (Math.floor((l = i % 36) / 6) / 5) * 255,
            s = ((l % 6) / 5) * 255;
          return [u, c, s];
        }),
        (a.rgb.hex = function (i) {
          let l = (
            ((Math.round(i[0]) & 255) << 16) +
            ((Math.round(i[1]) & 255) << 8) +
            (Math.round(i[2]) & 255)
          )
            .toString(16)
            .toUpperCase();
          return '000000'.substring(l.length) + l;
        }),
        (a.hex.rgb = function (i) {
          let l = i.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!l) return [0, 0, 0];
          let u = l[0];
          l[0].length === 3 &&
            (u = u
              .split('')
              .map((f) => f + f)
              .join(''));
          let c = parseInt(u, 16),
            s = (c >> 16) & 255,
            d = (c >> 8) & 255,
            p = c & 255;
          return [s, d, p];
        }),
        (a.rgb.hcg = function (i) {
          let l = i[0] / 255,
            u = i[1] / 255,
            c = i[2] / 255,
            s = Math.max(Math.max(l, u), c),
            d = Math.min(Math.min(l, u), c),
            p = s - d,
            f,
            h;
          return (
            p < 1 ? (f = d / (1 - p)) : (f = 0),
            p <= 0
              ? (h = 0)
              : s === l
                ? (h = ((u - c) / p) % 6)
                : s === u
                  ? (h = 2 + (c - l) / p)
                  : (h = 4 + (l - u) / p),
            (h /= 6),
            (h %= 1),
            [h * 360, p * 100, f * 100]
          );
        }),
        (a.hsl.hcg = function (i) {
          let l = i[1] / 100,
            u = i[2] / 100,
            c = u < 0.5 ? 2 * l * u : 2 * l * (1 - u),
            s = 0;
          return (
            c < 1 && (s = (u - 0.5 * c) / (1 - c)), [i[0], c * 100, s * 100]
          );
        }),
        (a.hsv.hcg = function (i) {
          let l = i[1] / 100,
            u = i[2] / 100,
            c = l * u,
            s = 0;
          return c < 1 && (s = (u - c) / (1 - c)), [i[0], c * 100, s * 100];
        }),
        (a.hcg.rgb = function (i) {
          let l = i[0] / 360,
            u = i[1] / 100,
            c = i[2] / 100;
          if (u === 0) return [c * 255, c * 255, c * 255];
          let s = [0, 0, 0],
            d = (l % 1) * 6,
            p = d % 1,
            f = 1 - p,
            h = 0;
          switch (Math.floor(d)) {
            case 0:
              (s[0] = 1), (s[1] = p), (s[2] = 0);
              break;
            case 1:
              (s[0] = f), (s[1] = 1), (s[2] = 0);
              break;
            case 2:
              (s[0] = 0), (s[1] = 1), (s[2] = p);
              break;
            case 3:
              (s[0] = 0), (s[1] = f), (s[2] = 1);
              break;
            case 4:
              (s[0] = p), (s[1] = 0), (s[2] = 1);
              break;
            default:
              (s[0] = 1), (s[1] = 0), (s[2] = f);
          }
          return (
            (h = (1 - u) * c),
            [(u * s[0] + h) * 255, (u * s[1] + h) * 255, (u * s[2] + h) * 255]
          );
        }),
        (a.hcg.hsv = function (i) {
          let l = i[1] / 100,
            u = i[2] / 100,
            c = l + u * (1 - l),
            s = 0;
          return c > 0 && (s = l / c), [i[0], s * 100, c * 100];
        }),
        (a.hcg.hsl = function (i) {
          let l = i[1] / 100,
            u = (i[2] / 100) * (1 - l) + 0.5 * l,
            c = 0;
          return (
            u > 0 && u < 0.5
              ? (c = l / (2 * u))
              : u >= 0.5 && u < 1 && (c = l / (2 * (1 - u))),
            [i[0], c * 100, u * 100]
          );
        }),
        (a.hcg.hwb = function (i) {
          let l = i[1] / 100,
            u = i[2] / 100,
            c = l + u * (1 - l);
          return [i[0], (c - l) * 100, (1 - c) * 100];
        }),
        (a.hwb.hcg = function (i) {
          let l = i[1] / 100,
            u = 1 - i[2] / 100,
            c = u - l,
            s = 0;
          return c < 1 && (s = (u - c) / (1 - c)), [i[0], c * 100, s * 100];
        }),
        (a.apple.rgb = function (i) {
          return [
            (i[0] / 65535) * 255,
            (i[1] / 65535) * 255,
            (i[2] / 65535) * 255,
          ];
        }),
        (a.rgb.apple = function (i) {
          return [
            (i[0] / 255) * 65535,
            (i[1] / 255) * 65535,
            (i[2] / 255) * 65535,
          ];
        }),
        (a.gray.rgb = function (i) {
          return [(i[0] / 100) * 255, (i[0] / 100) * 255, (i[0] / 100) * 255];
        }),
        (a.gray.hsl = function (i) {
          return [0, 0, i[0]];
        }),
        (a.gray.hsv = a.gray.hsl),
        (a.gray.hwb = function (i) {
          return [0, 100, i[0]];
        }),
        (a.gray.cmyk = function (i) {
          return [0, 0, 0, i[0]];
        }),
        (a.gray.lab = function (i) {
          return [i[0], 0, 0];
        }),
        (a.gray.hex = function (i) {
          let l = Math.round((i[0] / 100) * 255) & 255,
            u = ((l << 16) + (l << 8) + l).toString(16).toUpperCase();
          return '000000'.substring(u.length) + u;
        }),
        (a.rgb.gray = function (i) {
          return [((i[0] + i[1] + i[2]) / 3 / 255) * 100];
        });
    },
  }),
  iw = T({
    '../../node_modules/color-convert/route.js'(e, t) {
      var r = jd();
      function n() {
        let l = {},
          u = Object.keys(r);
        for (let c = u.length, s = 0; s < c; s++)
          l[u[s]] = { distance: -1, parent: null };
        return l;
      }
      function a(l) {
        let u = n(),
          c = [l];
        for (u[l].distance = 0; c.length; ) {
          let s = c.pop(),
            d = Object.keys(r[s]);
          for (let p = d.length, f = 0; f < p; f++) {
            let h = d[f],
              m = u[h];
            m.distance === -1 &&
              ((m.distance = u[s].distance + 1), (m.parent = s), c.unshift(h));
          }
        }
        return u;
      }
      function o(l, u) {
        return function (c) {
          return u(l(c));
        };
      }
      function i(l, u) {
        let c = [u[l].parent, l],
          s = r[u[l].parent][l],
          d = u[l].parent;
        for (; u[d].parent; )
          c.unshift(u[d].parent),
            (s = o(r[u[d].parent][d], s)),
            (d = u[d].parent);
        return (s.conversion = c), s;
      }
      t.exports = function (l) {
        let u = a(l),
          c = {},
          s = Object.keys(u);
        for (let d = s.length, p = 0; p < d; p++) {
          let f = s[p];
          u[f].parent !== null && (c[f] = i(f, u));
        }
        return c;
      };
    },
  }),
  lw = T({
    '../../node_modules/color-convert/index.js'(e, t) {
      var r = jd(),
        n = iw(),
        a = {},
        o = Object.keys(r);
      function i(u) {
        let c = function (...s) {
          let d = s[0];
          return d == null ? d : (d.length > 1 && (s = d), u(s));
        };
        return 'conversion' in u && (c.conversion = u.conversion), c;
      }
      function l(u) {
        let c = function (...s) {
          let d = s[0];
          if (d == null) return d;
          d.length > 1 && (s = d);
          let p = u(s);
          if (typeof p == 'object')
            for (let f = p.length, h = 0; h < f; h++) p[h] = Math.round(p[h]);
          return p;
        };
        return 'conversion' in u && (c.conversion = u.conversion), c;
      }
      o.forEach((u) => {
        (a[u] = {}),
          Object.defineProperty(a[u], 'channels', { value: r[u].channels }),
          Object.defineProperty(a[u], 'labels', { value: r[u].labels });
        let c = n(u);
        Object.keys(c).forEach((s) => {
          let d = c[s];
          (a[u][s] = l(d)), (a[u][s].raw = i(d));
        });
      }),
        (t.exports = a);
    },
  }),
  sw = T({
    '../../node_modules/ansi-styles/index.js'(e, t) {
      var r =
          (d, p) =>
          (...f) =>
            `\x1B[${d(...f) + p}m`,
        n =
          (d, p) =>
          (...f) => {
            let h = d(...f);
            return `\x1B[${38 + p};5;${h}m`;
          },
        a =
          (d, p) =>
          (...f) => {
            let h = d(...f);
            return `\x1B[${38 + p};2;${h[0]};${h[1]};${h[2]}m`;
          },
        o = (d) => d,
        i = (d, p, f) => [d, p, f],
        l = (d, p, f) => {
          Object.defineProperty(d, p, {
            get: () => {
              let h = f();
              return (
                Object.defineProperty(d, p, {
                  value: h,
                  enumerable: !0,
                  configurable: !0,
                }),
                h
              );
            },
            enumerable: !0,
            configurable: !0,
          });
        },
        u,
        c = (d, p, f, h) => {
          u === void 0 && (u = lw());
          let m = h ? 10 : 0,
            y = {};
          for (let [b, g] of Object.entries(u)) {
            let R = b === 'ansi16' ? 'ansi' : b;
            b === p
              ? (y[R] = d(f, m))
              : typeof g == 'object' && (y[R] = d(g[p], m));
          }
          return y;
        };
      function s() {
        let d = new Map(),
          p = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29],
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              blackBright: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39],
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49],
            },
          };
        (p.color.gray = p.color.blackBright),
          (p.bgColor.bgGray = p.bgColor.bgBlackBright),
          (p.color.grey = p.color.blackBright),
          (p.bgColor.bgGrey = p.bgColor.bgBlackBright);
        for (let [f, h] of Object.entries(p)) {
          for (let [m, y] of Object.entries(h))
            (p[m] = { open: `\x1B[${y[0]}m`, close: `\x1B[${y[1]}m` }),
              (h[m] = p[m]),
              d.set(y[0], y[1]);
          Object.defineProperty(p, f, { value: h, enumerable: !1 });
        }
        return (
          Object.defineProperty(p, 'codes', { value: d, enumerable: !1 }),
          (p.color.close = '\x1B[39m'),
          (p.bgColor.close = '\x1B[49m'),
          l(p.color, 'ansi', () => c(r, 'ansi16', o, !1)),
          l(p.color, 'ansi256', () => c(n, 'ansi256', o, !1)),
          l(p.color, 'ansi16m', () => c(a, 'rgb', i, !1)),
          l(p.bgColor, 'ansi', () => c(r, 'ansi16', o, !0)),
          l(p.bgColor, 'ansi256', () => c(n, 'ansi256', o, !0)),
          l(p.bgColor, 'ansi16m', () => c(a, 'rgb', i, !0)),
          p
        );
      }
      Object.defineProperty(t, 'exports', { enumerable: !0, get: s });
    },
  }),
  uw = T({
    '../../node_modules/supports-color/browser.js'(e, t) {
      t.exports = { stdout: !1, stderr: !1 };
    },
  }),
  cw = T({
    '../../node_modules/@testing-library/jest-dom/node_modules/chalk/source/util.js'(
      e,
      t,
    ) {
      var r = (a, o, i) => {
          let l = a.indexOf(o);
          if (l === -1) return a;
          let u = o.length,
            c = 0,
            s = '';
          do
            (s += a.substr(c, l - c) + o + i),
              (c = l + u),
              (l = a.indexOf(o, c));
          while (l !== -1);
          return (s += a.substr(c)), s;
        },
        n = (a, o, i, l) => {
          let u = 0,
            c = '';
          do {
            let s = a[l - 1] === '\r';
            (c +=
              a.substr(u, (s ? l - 1 : l) - u) +
              o +
              (s
                ? `\r
`
                : `
`) +
              i),
              (u = l + 1),
              (l = a.indexOf(
                `
`,
                u,
              ));
          } while (l !== -1);
          return (c += a.substr(u)), c;
        };
      t.exports = { stringReplaceAll: r, stringEncaseCRLFWithFirstIndex: n };
    },
  }),
  dw = T({
    '../../node_modules/@testing-library/jest-dom/node_modules/chalk/source/templates.js'(
      e,
      t,
    ) {
      var r =
          /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
        n = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
        a = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
        o = /\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.)|([^\\])/gi,
        i = new Map([
          [
            'n',
            `
`,
          ],
          ['r', '\r'],
          ['t', '	'],
          ['b', '\b'],
          ['f', '\f'],
          ['v', '\v'],
          ['0', '\0'],
          ['\\', '\\'],
          ['e', '\x1B'],
          ['a', '\x07'],
        ]);
      function l(d) {
        let p = d[0] === 'u',
          f = d[1] === '{';
        return (p && !f && d.length === 5) || (d[0] === 'x' && d.length === 3)
          ? String.fromCharCode(parseInt(d.slice(1), 16))
          : p && f
            ? String.fromCodePoint(parseInt(d.slice(2, -1), 16))
            : i.get(d) || d;
      }
      function u(d, p) {
        let f = [],
          h = p.trim().split(/\s*,\s*/g),
          m;
        for (let y of h) {
          let b = Number(y);
          if (!Number.isNaN(b)) f.push(b);
          else if ((m = y.match(a)))
            f.push(m[2].replace(o, (g, R, C) => (R ? l(R) : C)));
          else
            throw new Error(
              `Invalid Chalk template style argument: ${y} (in style '${d}')`,
            );
        }
        return f;
      }
      function c(d) {
        n.lastIndex = 0;
        let p = [],
          f;
        for (; (f = n.exec(d)) !== null; ) {
          let h = f[1];
          if (f[2]) {
            let m = u(h, f[2]);
            p.push([h].concat(m));
          } else p.push([h]);
        }
        return p;
      }
      function s(d, p) {
        let f = {};
        for (let m of p)
          for (let y of m.styles) f[y[0]] = m.inverse ? null : y.slice(1);
        let h = d;
        for (let [m, y] of Object.entries(f))
          if (Array.isArray(y)) {
            if (!(m in h)) throw new Error(`Unknown Chalk style: ${m}`);
            h = y.length > 0 ? h[m](...y) : h[m];
          }
        return h;
      }
      t.exports = (d, p) => {
        let f = [],
          h = [],
          m = [];
        if (
          (p.replace(r, (y, b, g, R, C, _) => {
            if (b) m.push(l(b));
            else if (R) {
              let w = m.join('');
              (m = []),
                h.push(f.length === 0 ? w : s(d, f)(w)),
                f.push({ inverse: g, styles: c(R) });
            } else if (C) {
              if (f.length === 0)
                throw new Error('Found extraneous } in Chalk template literal');
              h.push(s(d, f)(m.join(''))), (m = []), f.pop();
            } else m.push(_);
          }),
          h.push(m.join('')),
          f.length > 0)
        ) {
          let y = `Chalk template literal is missing ${f.length} closing bracket${f.length === 1 ? '' : 's'} (\`}\`)`;
          throw new Error(y);
        }
        return h.join('');
      };
    },
  }),
  Id = T({
    '../../node_modules/@testing-library/jest-dom/node_modules/chalk/source/index.js'(
      e,
      t,
    ) {
      var r = sw(),
        { stdout: n, stderr: a } = uw(),
        { stringReplaceAll: o, stringEncaseCRLFWithFirstIndex: i } = cw(),
        l = ['ansi', 'ansi', 'ansi256', 'ansi16m'],
        u = Object.create(null),
        c = (_, w = {}) => {
          if (w.level > 3 || w.level < 0)
            throw new Error(
              'The `level` option should be an integer from 0 to 3',
            );
          let E = n ? n.level : 0;
          _.level = w.level === void 0 ? E : w.level;
        },
        s = class {
          constructor(_) {
            return d(_);
          }
        },
        d = (_) => {
          let w = {};
          return (
            c(w, _),
            (w.template = (...E) => R(w.template, ...E)),
            Object.setPrototypeOf(w, p.prototype),
            Object.setPrototypeOf(w.template, w),
            (w.template.constructor = () => {
              throw new Error(
                '`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.',
              );
            }),
            (w.template.Instance = s),
            w.template
          );
        };
      function p(_) {
        return d(_);
      }
      for (let [_, w] of Object.entries(r))
        u[_] = {
          get() {
            let E = y(this, m(w.open, w.close, this._styler), this._isEmpty);
            return Object.defineProperty(this, _, { value: E }), E;
          },
        };
      u.visible = {
        get() {
          let _ = y(this, this._styler, !0);
          return Object.defineProperty(this, 'visible', { value: _ }), _;
        },
      };
      var f = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];
      for (let _ of f)
        u[_] = {
          get() {
            let { level: w } = this;
            return function (...E) {
              let v = m(r.color[l[w]][_](...E), r.color.close, this._styler);
              return y(this, v, this._isEmpty);
            };
          },
        };
      for (let _ of f) {
        let w = 'bg' + _[0].toUpperCase() + _.slice(1);
        u[w] = {
          get() {
            let { level: E } = this;
            return function (...v) {
              let O = m(
                r.bgColor[l[E]][_](...v),
                r.bgColor.close,
                this._styler,
              );
              return y(this, O, this._isEmpty);
            };
          },
        };
      }
      var h = Object.defineProperties(() => {}, {
          ...u,
          level: {
            enumerable: !0,
            get() {
              return this._generator.level;
            },
            set(_) {
              this._generator.level = _;
            },
          },
        }),
        m = (_, w, E) => {
          let v, O;
          return (
            E === void 0
              ? ((v = _), (O = w))
              : ((v = E.openAll + _), (O = w + E.closeAll)),
            { open: _, close: w, openAll: v, closeAll: O, parent: E }
          );
        },
        y = (_, w, E) => {
          let v = (...O) => b(v, O.length === 1 ? '' + O[0] : O.join(' '));
          return (
            (v.__proto__ = h),
            (v._generator = _),
            (v._styler = w),
            (v._isEmpty = E),
            v
          );
        },
        b = (_, w) => {
          if (_.level <= 0 || !w) return _._isEmpty ? '' : w;
          let E = _._styler;
          if (E === void 0) return w;
          let { openAll: v, closeAll: O } = E;
          if (w.indexOf('\x1B') !== -1)
            for (; E !== void 0; ) (w = o(w, E.close, E.open)), (E = E.parent);
          let $ = w.indexOf(`
`);
          return $ !== -1 && (w = i(w, O, v, $)), v + w + O;
        },
        g,
        R = (_, ...w) => {
          let [E] = w;
          if (!Array.isArray(E)) return w.join(' ');
          let v = w.slice(1),
            O = [E.raw[0]];
          for (let $ = 1; $ < E.length; $++)
            O.push(
              String(v[$ - 1]).replace(/[{}\\]/g, '\\$&'),
              String(E.raw[$]),
            );
          return g === void 0 && (g = dw()), g(_, O.join(''));
        };
      Object.defineProperties(p.prototype, u);
      var C = p();
      (C.supportsColor = n),
        (C.stderr = p({ level: a ? a.level : 0 })),
        (C.stderr.supportsColor = a),
        (C.Level = {
          None: 0,
          Basic: 1,
          Ansi256: 2,
          TrueColor: 3,
          0: 'None',
          1: 'Basic',
          2: 'Ansi256',
          3: 'TrueColor',
        }),
        (t.exports = C);
    },
  }),
  fw = T({
    '../../node_modules/lodash/_listCacheClear.js'(e, t) {
      function r() {
        (this.__data__ = []), (this.size = 0);
      }
      t.exports = r;
    },
  }),
  Ld = T({
    '../../node_modules/lodash/eq.js'(e, t) {
      function r(n, a) {
        return n === a || (n !== n && a !== a);
      }
      t.exports = r;
    },
  }),
  ua = T({
    '../../node_modules/lodash/_assocIndexOf.js'(e, t) {
      var r = Ld();
      function n(a, o) {
        for (var i = a.length; i--; ) if (r(a[i][0], o)) return i;
        return -1;
      }
      t.exports = n;
    },
  }),
  pw = T({
    '../../node_modules/lodash/_listCacheDelete.js'(e, t) {
      var r = ua(),
        n = Array.prototype,
        a = n.splice;
      function o(i) {
        var l = this.__data__,
          u = r(l, i);
        if (u < 0) return !1;
        var c = l.length - 1;
        return u == c ? l.pop() : a.call(l, u, 1), --this.size, !0;
      }
      t.exports = o;
    },
  }),
  hw = T({
    '../../node_modules/lodash/_listCacheGet.js'(e, t) {
      var r = ua();
      function n(a) {
        var o = this.__data__,
          i = r(o, a);
        return i < 0 ? void 0 : o[i][1];
      }
      t.exports = n;
    },
  }),
  mw = T({
    '../../node_modules/lodash/_listCacheHas.js'(e, t) {
      var r = ua();
      function n(a) {
        return r(this.__data__, a) > -1;
      }
      t.exports = n;
    },
  }),
  bw = T({
    '../../node_modules/lodash/_listCacheSet.js'(e, t) {
      var r = ua();
      function n(a, o) {
        var i = this.__data__,
          l = r(i, a);
        return l < 0 ? (++this.size, i.push([a, o])) : (i[l][1] = o), this;
      }
      t.exports = n;
    },
  }),
  ca = T({
    '../../node_modules/lodash/_ListCache.js'(e, t) {
      var r = fw(),
        n = pw(),
        a = hw(),
        o = mw(),
        i = bw();
      function l(u) {
        var c = -1,
          s = u == null ? 0 : u.length;
        for (this.clear(); ++c < s; ) {
          var d = u[c];
          this.set(d[0], d[1]);
        }
      }
      (l.prototype.clear = r),
        (l.prototype.delete = n),
        (l.prototype.get = a),
        (l.prototype.has = o),
        (l.prototype.set = i),
        (t.exports = l);
    },
  }),
  gw = T({
    '../../node_modules/lodash/_stackClear.js'(e, t) {
      var r = ca();
      function n() {
        (this.__data__ = new r()), (this.size = 0);
      }
      t.exports = n;
    },
  }),
  yw = T({
    '../../node_modules/lodash/_stackDelete.js'(e, t) {
      function r(n) {
        var a = this.__data__,
          o = a.delete(n);
        return (this.size = a.size), o;
      }
      t.exports = r;
    },
  }),
  vw = T({
    '../../node_modules/lodash/_stackGet.js'(e, t) {
      function r(n) {
        return this.__data__.get(n);
      }
      t.exports = r;
    },
  }),
  _w = T({
    '../../node_modules/lodash/_stackHas.js'(e, t) {
      function r(n) {
        return this.__data__.has(n);
      }
      t.exports = r;
    },
  }),
  Bd = T({
    '../../node_modules/lodash/_freeGlobal.js'(e, t) {
      var r =
        typeof global == 'object' &&
        global &&
        global.Object === Object &&
        global;
      t.exports = r;
    },
  }),
  _t = T({
    '../../node_modules/lodash/_root.js'(e, t) {
      var r = Bd(),
        n = typeof self == 'object' && self && self.Object === Object && self,
        a = r || n || Function('return this')();
      t.exports = a;
    },
  }),
  Ii = T({
    '../../node_modules/lodash/_Symbol.js'(e, t) {
      var r = _t(),
        n = r.Symbol;
      t.exports = n;
    },
  }),
  Ew = T({
    '../../node_modules/lodash/_getRawTag.js'(e, t) {
      var r = Ii(),
        n = Object.prototype,
        a = n.hasOwnProperty,
        o = n.toString,
        i = r ? r.toStringTag : void 0;
      function l(u) {
        var c = a.call(u, i),
          s = u[i];
        try {
          u[i] = void 0;
          var d = !0;
        } catch {}
        var p = o.call(u);
        return d && (c ? (u[i] = s) : delete u[i]), p;
      }
      t.exports = l;
    },
  }),
  ww = T({
    '../../node_modules/lodash/_objectToString.js'(e, t) {
      var r = Object.prototype,
        n = r.toString;
      function a(o) {
        return n.call(o);
      }
      t.exports = a;
    },
  }),
  da = T({
    '../../node_modules/lodash/_baseGetTag.js'(e, t) {
      var r = Ii(),
        n = Ew(),
        a = ww(),
        o = '[object Null]',
        i = '[object Undefined]',
        l = r ? r.toStringTag : void 0;
      function u(c) {
        return c == null
          ? c === void 0
            ? i
            : o
          : l && l in Object(c)
            ? n(c)
            : a(c);
      }
      t.exports = u;
    },
  }),
  kd = T({
    '../../node_modules/lodash/isObject.js'(e, t) {
      function r(n) {
        var a = typeof n;
        return n != null && (a == 'object' || a == 'function');
      }
      t.exports = r;
    },
  }),
  Dd = T({
    '../../node_modules/lodash/isFunction.js'(e, t) {
      var r = da(),
        n = kd(),
        a = '[object AsyncFunction]',
        o = '[object Function]',
        i = '[object GeneratorFunction]',
        l = '[object Proxy]';
      function u(c) {
        if (!n(c)) return !1;
        var s = r(c);
        return s == o || s == i || s == a || s == l;
      }
      t.exports = u;
    },
  }),
  Cw = T({
    '../../node_modules/lodash/_coreJsData.js'(e, t) {
      var r = _t(),
        n = r['__core-js_shared__'];
      t.exports = n;
    },
  }),
  Rw = T({
    '../../node_modules/lodash/_isMasked.js'(e, t) {
      var r = Cw(),
        n = (function () {
          var o = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
          return o ? 'Symbol(src)_1.' + o : '';
        })();
      function a(o) {
        return !!n && n in o;
      }
      t.exports = a;
    },
  }),
  Fd = T({
    '../../node_modules/lodash/_toSource.js'(e, t) {
      var r = Function.prototype,
        n = r.toString;
      function a(o) {
        if (o != null) {
          try {
            return n.call(o);
          } catch {}
          try {
            return o + '';
          } catch {}
        }
        return '';
      }
      t.exports = a;
    },
  }),
  Tw = T({
    '../../node_modules/lodash/_baseIsNative.js'(e, t) {
      var r = Dd(),
        n = Rw(),
        a = kd(),
        o = Fd(),
        i = /[\\^$.*+?()[\]{}|]/g,
        l = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        c = Object.prototype,
        s = u.toString,
        d = c.hasOwnProperty,
        p = RegExp(
          '^' +
            s
              .call(d)
              .replace(i, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?',
              ) +
            '$',
        );
      function f(h) {
        if (!a(h) || n(h)) return !1;
        var m = r(h) ? p : l;
        return m.test(o(h));
      }
      t.exports = f;
    },
  }),
  Sw = T({
    '../../node_modules/lodash/_getValue.js'(e, t) {
      function r(n, a) {
        return n == null ? void 0 : n[a];
      }
      t.exports = r;
    },
  }),
  Ar = T({
    '../../node_modules/lodash/_getNative.js'(e, t) {
      var r = Tw(),
        n = Sw();
      function a(o, i) {
        var l = n(o, i);
        return r(l) ? l : void 0;
      }
      t.exports = a;
    },
  }),
  Li = T({
    '../../node_modules/lodash/_Map.js'(e, t) {
      var r = Ar(),
        n = _t(),
        a = r(n, 'Map');
      t.exports = a;
    },
  }),
  fa = T({
    '../../node_modules/lodash/_nativeCreate.js'(e, t) {
      var r = Ar(),
        n = r(Object, 'create');
      t.exports = n;
    },
  }),
  Pw = T({
    '../../node_modules/lodash/_hashClear.js'(e, t) {
      var r = fa();
      function n() {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      }
      t.exports = n;
    },
  }),
  Ow = T({
    '../../node_modules/lodash/_hashDelete.js'(e, t) {
      function r(n) {
        var a = this.has(n) && delete this.__data__[n];
        return (this.size -= a ? 1 : 0), a;
      }
      t.exports = r;
    },
  }),
  Aw = T({
    '../../node_modules/lodash/_hashGet.js'(e, t) {
      var r = fa(),
        n = '__lodash_hash_undefined__',
        a = Object.prototype,
        o = a.hasOwnProperty;
      function i(l) {
        var u = this.__data__;
        if (r) {
          var c = u[l];
          return c === n ? void 0 : c;
        }
        return o.call(u, l) ? u[l] : void 0;
      }
      t.exports = i;
    },
  }),
  qw = T({
    '../../node_modules/lodash/_hashHas.js'(e, t) {
      var r = fa(),
        n = Object.prototype,
        a = n.hasOwnProperty;
      function o(i) {
        var l = this.__data__;
        return r ? l[i] !== void 0 : a.call(l, i);
      }
      t.exports = o;
    },
  }),
  xw = T({
    '../../node_modules/lodash/_hashSet.js'(e, t) {
      var r = fa(),
        n = '__lodash_hash_undefined__';
      function a(o, i) {
        var l = this.__data__;
        return (
          (this.size += this.has(o) ? 0 : 1),
          (l[o] = r && i === void 0 ? n : i),
          this
        );
      }
      t.exports = a;
    },
  }),
  Mw = T({
    '../../node_modules/lodash/_Hash.js'(e, t) {
      var r = Pw(),
        n = Ow(),
        a = Aw(),
        o = qw(),
        i = xw();
      function l(u) {
        var c = -1,
          s = u == null ? 0 : u.length;
        for (this.clear(); ++c < s; ) {
          var d = u[c];
          this.set(d[0], d[1]);
        }
      }
      (l.prototype.clear = r),
        (l.prototype.delete = n),
        (l.prototype.get = a),
        (l.prototype.has = o),
        (l.prototype.set = i),
        (t.exports = l);
    },
  }),
  $w = T({
    '../../node_modules/lodash/_mapCacheClear.js'(e, t) {
      var r = Mw(),
        n = ca(),
        a = Li();
      function o() {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (a || n)(),
            string: new r(),
          });
      }
      t.exports = o;
    },
  }),
  Nw = T({
    '../../node_modules/lodash/_isKeyable.js'(e, t) {
      function r(n) {
        var a = typeof n;
        return a == 'string' || a == 'number' || a == 'symbol' || a == 'boolean'
          ? n !== '__proto__'
          : n === null;
      }
      t.exports = r;
    },
  }),
  pa = T({
    '../../node_modules/lodash/_getMapData.js'(e, t) {
      var r = Nw();
      function n(a, o) {
        var i = a.__data__;
        return r(o) ? i[typeof o == 'string' ? 'string' : 'hash'] : i.map;
      }
      t.exports = n;
    },
  }),
  jw = T({
    '../../node_modules/lodash/_mapCacheDelete.js'(e, t) {
      var r = pa();
      function n(a) {
        var o = r(this, a).delete(a);
        return (this.size -= o ? 1 : 0), o;
      }
      t.exports = n;
    },
  }),
  Iw = T({
    '../../node_modules/lodash/_mapCacheGet.js'(e, t) {
      var r = pa();
      function n(a) {
        return r(this, a).get(a);
      }
      t.exports = n;
    },
  }),
  Lw = T({
    '../../node_modules/lodash/_mapCacheHas.js'(e, t) {
      var r = pa();
      function n(a) {
        return r(this, a).has(a);
      }
      t.exports = n;
    },
  }),
  Bw = T({
    '../../node_modules/lodash/_mapCacheSet.js'(e, t) {
      var r = pa();
      function n(a, o) {
        var i = r(this, a),
          l = i.size;
        return i.set(a, o), (this.size += i.size == l ? 0 : 1), this;
      }
      t.exports = n;
    },
  }),
  Ud = T({
    '../../node_modules/lodash/_MapCache.js'(e, t) {
      var r = $w(),
        n = jw(),
        a = Iw(),
        o = Lw(),
        i = Bw();
      function l(u) {
        var c = -1,
          s = u == null ? 0 : u.length;
        for (this.clear(); ++c < s; ) {
          var d = u[c];
          this.set(d[0], d[1]);
        }
      }
      (l.prototype.clear = r),
        (l.prototype.delete = n),
        (l.prototype.get = a),
        (l.prototype.has = o),
        (l.prototype.set = i),
        (t.exports = l);
    },
  }),
  kw = T({
    '../../node_modules/lodash/_stackSet.js'(e, t) {
      var r = ca(),
        n = Li(),
        a = Ud(),
        o = 200;
      function i(l, u) {
        var c = this.__data__;
        if (c instanceof r) {
          var s = c.__data__;
          if (!n || s.length < o - 1)
            return s.push([l, u]), (this.size = ++c.size), this;
          c = this.__data__ = new a(s);
        }
        return c.set(l, u), (this.size = c.size), this;
      }
      t.exports = i;
    },
  }),
  Dw = T({
    '../../node_modules/lodash/_Stack.js'(e, t) {
      var r = ca(),
        n = gw(),
        a = yw(),
        o = vw(),
        i = _w(),
        l = kw();
      function u(c) {
        var s = (this.__data__ = new r(c));
        this.size = s.size;
      }
      (u.prototype.clear = n),
        (u.prototype.delete = a),
        (u.prototype.get = o),
        (u.prototype.has = i),
        (u.prototype.set = l),
        (t.exports = u);
    },
  }),
  Fw = T({
    '../../node_modules/lodash/_setCacheAdd.js'(e, t) {
      var r = '__lodash_hash_undefined__';
      function n(a) {
        return this.__data__.set(a, r), this;
      }
      t.exports = n;
    },
  }),
  Uw = T({
    '../../node_modules/lodash/_setCacheHas.js'(e, t) {
      function r(n) {
        return this.__data__.has(n);
      }
      t.exports = r;
    },
  }),
  Hw = T({
    '../../node_modules/lodash/_SetCache.js'(e, t) {
      var r = Ud(),
        n = Fw(),
        a = Uw();
      function o(i) {
        var l = -1,
          u = i == null ? 0 : i.length;
        for (this.__data__ = new r(); ++l < u; ) this.add(i[l]);
      }
      (o.prototype.add = o.prototype.push = n),
        (o.prototype.has = a),
        (t.exports = o);
    },
  }),
  zw = T({
    '../../node_modules/lodash/_arraySome.js'(e, t) {
      function r(n, a) {
        for (var o = -1, i = n == null ? 0 : n.length; ++o < i; )
          if (a(n[o], o, n)) return !0;
        return !1;
      }
      t.exports = r;
    },
  }),
  Vw = T({
    '../../node_modules/lodash/_cacheHas.js'(e, t) {
      function r(n, a) {
        return n.has(a);
      }
      t.exports = r;
    },
  }),
  Hd = T({
    '../../node_modules/lodash/_equalArrays.js'(e, t) {
      var r = Hw(),
        n = zw(),
        a = Vw(),
        o = 1,
        i = 2;
      function l(u, c, s, d, p, f) {
        var h = s & o,
          m = u.length,
          y = c.length;
        if (m != y && !(h && y > m)) return !1;
        var b = f.get(u),
          g = f.get(c);
        if (b && g) return b == c && g == u;
        var R = -1,
          C = !0,
          _ = s & i ? new r() : void 0;
        for (f.set(u, c), f.set(c, u); ++R < m; ) {
          var w = u[R],
            E = c[R];
          if (d) var v = h ? d(E, w, R, c, u, f) : d(w, E, R, u, c, f);
          if (v !== void 0) {
            if (v) continue;
            C = !1;
            break;
          }
          if (_) {
            if (
              !n(c, function (O, $) {
                if (!a(_, $) && (w === O || p(w, O, s, d, f))) return _.push($);
              })
            ) {
              C = !1;
              break;
            }
          } else if (!(w === E || p(w, E, s, d, f))) {
            C = !1;
            break;
          }
        }
        return f.delete(u), f.delete(c), C;
      }
      t.exports = l;
    },
  }),
  Gw = T({
    '../../node_modules/lodash/_Uint8Array.js'(e, t) {
      var r = _t(),
        n = r.Uint8Array;
      t.exports = n;
    },
  }),
  Ww = T({
    '../../node_modules/lodash/_mapToArray.js'(e, t) {
      function r(n) {
        var a = -1,
          o = Array(n.size);
        return (
          n.forEach(function (i, l) {
            o[++a] = [l, i];
          }),
          o
        );
      }
      t.exports = r;
    },
  }),
  Kw = T({
    '../../node_modules/lodash/_setToArray.js'(e, t) {
      function r(n) {
        var a = -1,
          o = Array(n.size);
        return (
          n.forEach(function (i) {
            o[++a] = i;
          }),
          o
        );
      }
      t.exports = r;
    },
  }),
  Yw = T({
    '../../node_modules/lodash/_equalByTag.js'(e, t) {
      var r = Ii(),
        n = Gw(),
        a = Ld(),
        o = Hd(),
        i = Ww(),
        l = Kw(),
        u = 1,
        c = 2,
        s = '[object Boolean]',
        d = '[object Date]',
        p = '[object Error]',
        f = '[object Map]',
        h = '[object Number]',
        m = '[object RegExp]',
        y = '[object Set]',
        b = '[object String]',
        g = '[object Symbol]',
        R = '[object ArrayBuffer]',
        C = '[object DataView]',
        _ = r ? r.prototype : void 0,
        w = _ ? _.valueOf : void 0;
      function E(v, O, $, N, L, j, I) {
        switch ($) {
          case C:
            if (v.byteLength != O.byteLength || v.byteOffset != O.byteOffset)
              return !1;
            (v = v.buffer), (O = O.buffer);
          case R:
            return !(v.byteLength != O.byteLength || !j(new n(v), new n(O)));
          case s:
          case d:
          case h:
            return a(+v, +O);
          case p:
            return v.name == O.name && v.message == O.message;
          case m:
          case b:
            return v == O + '';
          case f:
            var H = i;
          case y:
            var V = N & u;
            if ((H || (H = l), v.size != O.size && !V)) return !1;
            var J = I.get(v);
            if (J) return J == O;
            (N |= c), I.set(v, O);
            var W = o(H(v), H(O), N, L, j, I);
            return I.delete(v), W;
          case g:
            if (w) return w.call(v) == w.call(O);
        }
        return !1;
      }
      t.exports = E;
    },
  }),
  Jw = T({
    '../../node_modules/lodash/_arrayPush.js'(e, t) {
      function r(n, a) {
        for (var o = -1, i = a.length, l = n.length; ++o < i; ) n[l + o] = a[o];
        return n;
      }
      t.exports = r;
    },
  }),
  Bi = T({
    '../../node_modules/lodash/isArray.js'(e, t) {
      var r = Array.isArray;
      t.exports = r;
    },
  }),
  Xw = T({
    '../../node_modules/lodash/_baseGetAllKeys.js'(e, t) {
      var r = Jw(),
        n = Bi();
      function a(o, i, l) {
        var u = i(o);
        return n(o) ? u : r(u, l(o));
      }
      t.exports = a;
    },
  }),
  Qw = T({
    '../../node_modules/lodash/_arrayFilter.js'(e, t) {
      function r(n, a) {
        for (
          var o = -1, i = n == null ? 0 : n.length, l = 0, u = [];
          ++o < i;

        ) {
          var c = n[o];
          a(c, o, n) && (u[l++] = c);
        }
        return u;
      }
      t.exports = r;
    },
  }),
  Zw = T({
    '../../node_modules/lodash/stubArray.js'(e, t) {
      function r() {
        return [];
      }
      t.exports = r;
    },
  }),
  e1 = T({
    '../../node_modules/lodash/_getSymbols.js'(e, t) {
      var r = Qw(),
        n = Zw(),
        a = Object.prototype,
        o = a.propertyIsEnumerable,
        i = Object.getOwnPropertySymbols,
        l = i
          ? function (u) {
              return u == null
                ? []
                : ((u = Object(u)),
                  r(i(u), function (c) {
                    return o.call(u, c);
                  }));
            }
          : n;
      t.exports = l;
    },
  }),
  t1 = T({
    '../../node_modules/lodash/_baseTimes.js'(e, t) {
      function r(n, a) {
        for (var o = -1, i = Array(n); ++o < n; ) i[o] = a(o);
        return i;
      }
      t.exports = r;
    },
  }),
  ha = T({
    '../../node_modules/lodash/isObjectLike.js'(e, t) {
      function r(n) {
        return n != null && typeof n == 'object';
      }
      t.exports = r;
    },
  }),
  r1 = T({
    '../../node_modules/lodash/_baseIsArguments.js'(e, t) {
      var r = da(),
        n = ha(),
        a = '[object Arguments]';
      function o(i) {
        return n(i) && r(i) == a;
      }
      t.exports = o;
    },
  }),
  n1 = T({
    '../../node_modules/lodash/isArguments.js'(e, t) {
      var r = r1(),
        n = ha(),
        a = Object.prototype,
        o = a.hasOwnProperty,
        i = a.propertyIsEnumerable,
        l = r(
          (function () {
            return arguments;
          })(),
        )
          ? r
          : function (u) {
              return n(u) && o.call(u, 'callee') && !i.call(u, 'callee');
            };
      t.exports = l;
    },
  }),
  a1 = T({
    '../../node_modules/lodash/stubFalse.js'(e, t) {
      function r() {
        return !1;
      }
      t.exports = r;
    },
  }),
  zd = T({
    '../../node_modules/lodash/isBuffer.js'(e, t) {
      var r = _t(),
        n = a1(),
        a = typeof e == 'object' && e && !e.nodeType && e,
        o = a && typeof t == 'object' && t && !t.nodeType && t,
        i = o && o.exports === a,
        l = i ? r.Buffer : void 0,
        u = l ? l.isBuffer : void 0,
        c = u || n;
      t.exports = c;
    },
  }),
  o1 = T({
    '../../node_modules/lodash/_isIndex.js'(e, t) {
      var r = 9007199254740991,
        n = /^(?:0|[1-9]\d*)$/;
      function a(o, i) {
        var l = typeof o;
        return (
          (i = i ?? r),
          !!i &&
            (l == 'number' || (l != 'symbol' && n.test(o))) &&
            o > -1 &&
            o % 1 == 0 &&
            o < i
        );
      }
      t.exports = a;
    },
  }),
  Vd = T({
    '../../node_modules/lodash/isLength.js'(e, t) {
      var r = 9007199254740991;
      function n(a) {
        return typeof a == 'number' && a > -1 && a % 1 == 0 && a <= r;
      }
      t.exports = n;
    },
  }),
  i1 = T({
    '../../node_modules/lodash/_baseIsTypedArray.js'(e, t) {
      var r = da(),
        n = Vd(),
        a = ha(),
        o = '[object Arguments]',
        i = '[object Array]',
        l = '[object Boolean]',
        u = '[object Date]',
        c = '[object Error]',
        s = '[object Function]',
        d = '[object Map]',
        p = '[object Number]',
        f = '[object Object]',
        h = '[object RegExp]',
        m = '[object Set]',
        y = '[object String]',
        b = '[object WeakMap]',
        g = '[object ArrayBuffer]',
        R = '[object DataView]',
        C = '[object Float32Array]',
        _ = '[object Float64Array]',
        w = '[object Int8Array]',
        E = '[object Int16Array]',
        v = '[object Int32Array]',
        O = '[object Uint8Array]',
        $ = '[object Uint8ClampedArray]',
        N = '[object Uint16Array]',
        L = '[object Uint32Array]',
        j = {};
      (j[C] = j[_] = j[w] = j[E] = j[v] = j[O] = j[$] = j[N] = j[L] = !0),
        (j[o] =
          j[i] =
          j[g] =
          j[l] =
          j[R] =
          j[u] =
          j[c] =
          j[s] =
          j[d] =
          j[p] =
          j[f] =
          j[h] =
          j[m] =
          j[y] =
          j[b] =
            !1);
      function I(H) {
        return a(H) && n(H.length) && !!j[r(H)];
      }
      t.exports = I;
    },
  }),
  l1 = T({
    '../../node_modules/lodash/_baseUnary.js'(e, t) {
      function r(n) {
        return function (a) {
          return n(a);
        };
      }
      t.exports = r;
    },
  }),
  s1 = T({
    '../../node_modules/lodash/_nodeUtil.js'(e, t) {
      var r = Bd(),
        n = typeof e == 'object' && e && !e.nodeType && e,
        a = n && typeof t == 'object' && t && !t.nodeType && t,
        o = a && a.exports === n,
        i = o && r.process,
        l = (function () {
          try {
            var u = a && a.require && a.require('util').types;
            return u || (i && i.binding && i.binding('util'));
          } catch {}
        })();
      t.exports = l;
    },
  }),
  Gd = T({
    '../../node_modules/lodash/isTypedArray.js'(e, t) {
      var r = i1(),
        n = l1(),
        a = s1(),
        o = a && a.isTypedArray,
        i = o ? n(o) : r;
      t.exports = i;
    },
  }),
  u1 = T({
    '../../node_modules/lodash/_arrayLikeKeys.js'(e, t) {
      var r = t1(),
        n = n1(),
        a = Bi(),
        o = zd(),
        i = o1(),
        l = Gd(),
        u = Object.prototype,
        c = u.hasOwnProperty;
      function s(d, p) {
        var f = a(d),
          h = !f && n(d),
          m = !f && !h && o(d),
          y = !f && !h && !m && l(d),
          b = f || h || m || y,
          g = b ? r(d.length, String) : [],
          R = g.length;
        for (var C in d)
          (p || c.call(d, C)) &&
            !(
              b &&
              (C == 'length' ||
                (m && (C == 'offset' || C == 'parent')) ||
                (y &&
                  (C == 'buffer' || C == 'byteLength' || C == 'byteOffset')) ||
                i(C, R))
            ) &&
            g.push(C);
        return g;
      }
      t.exports = s;
    },
  }),
  c1 = T({
    '../../node_modules/lodash/_isPrototype.js'(e, t) {
      var r = Object.prototype;
      function n(a) {
        var o = a && a.constructor,
          i = (typeof o == 'function' && o.prototype) || r;
        return a === i;
      }
      t.exports = n;
    },
  }),
  d1 = T({
    '../../node_modules/lodash/_overArg.js'(e, t) {
      function r(n, a) {
        return function (o) {
          return n(a(o));
        };
      }
      t.exports = r;
    },
  }),
  f1 = T({
    '../../node_modules/lodash/_nativeKeys.js'(e, t) {
      var r = d1(),
        n = r(Object.keys, Object);
      t.exports = n;
    },
  }),
  p1 = T({
    '../../node_modules/lodash/_baseKeys.js'(e, t) {
      var r = c1(),
        n = f1(),
        a = Object.prototype,
        o = a.hasOwnProperty;
      function i(l) {
        if (!r(l)) return n(l);
        var u = [];
        for (var c in Object(l))
          o.call(l, c) && c != 'constructor' && u.push(c);
        return u;
      }
      t.exports = i;
    },
  }),
  h1 = T({
    '../../node_modules/lodash/isArrayLike.js'(e, t) {
      var r = Dd(),
        n = Vd();
      function a(o) {
        return o != null && n(o.length) && !r(o);
      }
      t.exports = a;
    },
  }),
  m1 = T({
    '../../node_modules/lodash/keys.js'(e, t) {
      var r = u1(),
        n = p1(),
        a = h1();
      function o(i) {
        return a(i) ? r(i) : n(i);
      }
      t.exports = o;
    },
  }),
  b1 = T({
    '../../node_modules/lodash/_getAllKeys.js'(e, t) {
      var r = Xw(),
        n = e1(),
        a = m1();
      function o(i) {
        return r(i, a, n);
      }
      t.exports = o;
    },
  }),
  g1 = T({
    '../../node_modules/lodash/_equalObjects.js'(e, t) {
      var r = b1(),
        n = 1,
        a = Object.prototype,
        o = a.hasOwnProperty;
      function i(l, u, c, s, d, p) {
        var f = c & n,
          h = r(l),
          m = h.length,
          y = r(u),
          b = y.length;
        if (m != b && !f) return !1;
        for (var g = m; g--; ) {
          var R = h[g];
          if (!(f ? R in u : o.call(u, R))) return !1;
        }
        var C = p.get(l),
          _ = p.get(u);
        if (C && _) return C == u && _ == l;
        var w = !0;
        p.set(l, u), p.set(u, l);
        for (var E = f; ++g < m; ) {
          R = h[g];
          var v = l[R],
            O = u[R];
          if (s) var $ = f ? s(O, v, R, u, l, p) : s(v, O, R, l, u, p);
          if (!($ === void 0 ? v === O || d(v, O, c, s, p) : $)) {
            w = !1;
            break;
          }
          E || (E = R == 'constructor');
        }
        if (w && !E) {
          var N = l.constructor,
            L = u.constructor;
          N != L &&
            'constructor' in l &&
            'constructor' in u &&
            !(
              typeof N == 'function' &&
              N instanceof N &&
              typeof L == 'function' &&
              L instanceof L
            ) &&
            (w = !1);
        }
        return p.delete(l), p.delete(u), w;
      }
      t.exports = i;
    },
  }),
  y1 = T({
    '../../node_modules/lodash/_DataView.js'(e, t) {
      var r = Ar(),
        n = _t(),
        a = r(n, 'DataView');
      t.exports = a;
    },
  }),
  v1 = T({
    '../../node_modules/lodash/_Promise.js'(e, t) {
      var r = Ar(),
        n = _t(),
        a = r(n, 'Promise');
      t.exports = a;
    },
  }),
  _1 = T({
    '../../node_modules/lodash/_Set.js'(e, t) {
      var r = Ar(),
        n = _t(),
        a = r(n, 'Set');
      t.exports = a;
    },
  }),
  E1 = T({
    '../../node_modules/lodash/_WeakMap.js'(e, t) {
      var r = Ar(),
        n = _t(),
        a = r(n, 'WeakMap');
      t.exports = a;
    },
  }),
  w1 = T({
    '../../node_modules/lodash/_getTag.js'(e, t) {
      var r = y1(),
        n = Li(),
        a = v1(),
        o = _1(),
        i = E1(),
        l = da(),
        u = Fd(),
        c = '[object Map]',
        s = '[object Object]',
        d = '[object Promise]',
        p = '[object Set]',
        f = '[object WeakMap]',
        h = '[object DataView]',
        m = u(r),
        y = u(n),
        b = u(a),
        g = u(o),
        R = u(i),
        C = l;
      ((r && C(new r(new ArrayBuffer(1))) != h) ||
        (n && C(new n()) != c) ||
        (a && C(a.resolve()) != d) ||
        (o && C(new o()) != p) ||
        (i && C(new i()) != f)) &&
        (C = function (_) {
          var w = l(_),
            E = w == s ? _.constructor : void 0,
            v = E ? u(E) : '';
          if (v)
            switch (v) {
              case m:
                return h;
              case y:
                return c;
              case b:
                return d;
              case g:
                return p;
              case R:
                return f;
            }
          return w;
        }),
        (t.exports = C);
    },
  }),
  C1 = T({
    '../../node_modules/lodash/_baseIsEqualDeep.js'(e, t) {
      var r = Dw(),
        n = Hd(),
        a = Yw(),
        o = g1(),
        i = w1(),
        l = Bi(),
        u = zd(),
        c = Gd(),
        s = 1,
        d = '[object Arguments]',
        p = '[object Array]',
        f = '[object Object]',
        h = Object.prototype,
        m = h.hasOwnProperty;
      function y(b, g, R, C, _, w) {
        var E = l(b),
          v = l(g),
          O = E ? p : i(b),
          $ = v ? p : i(g);
        (O = O == d ? f : O), ($ = $ == d ? f : $);
        var N = O == f,
          L = $ == f,
          j = O == $;
        if (j && u(b)) {
          if (!u(g)) return !1;
          (E = !0), (N = !1);
        }
        if (j && !N)
          return (
            w || (w = new r()),
            E || c(b) ? n(b, g, R, C, _, w) : a(b, g, O, R, C, _, w)
          );
        if (!(R & s)) {
          var I = N && m.call(b, '__wrapped__'),
            H = L && m.call(g, '__wrapped__');
          if (I || H) {
            var V = I ? b.value() : b,
              J = H ? g.value() : g;
            return w || (w = new r()), _(V, J, R, C, w);
          }
        }
        return j ? (w || (w = new r()), o(b, g, R, C, _, w)) : !1;
      }
      t.exports = y;
    },
  }),
  R1 = T({
    '../../node_modules/lodash/_baseIsEqual.js'(e, t) {
      var r = C1(),
        n = ha();
      function a(o, i, l, u, c) {
        return o === i
          ? !0
          : o == null || i == null || (!n(o) && !n(i))
            ? o !== o && i !== i
            : r(o, i, l, u, a, c);
      }
      t.exports = a;
    },
  }),
  Wd = T({
    '../../node_modules/lodash/isEqualWith.js'(e, t) {
      var r = R1();
      function n(a, o, i) {
        i = typeof i == 'function' ? i : void 0;
        var l = i ? i(a, o) : void 0;
        return l === void 0 ? r(a, o, void 0, i) : !!l;
      }
      t.exports = n;
    },
  }),
  Kd = T({
    '../../node_modules/css.escape/css.escape.js'(e, t) {
      (function (r, n) {
        typeof e == 'object'
          ? (t.exports = n(r))
          : typeof define == 'function' && define.amd
            ? define([], n.bind(r, r))
            : n(r);
      })(typeof global < 'u' ? global : e, function (r) {
        if (r.CSS && r.CSS.escape) return r.CSS.escape;
        var n = function (a) {
          if (arguments.length == 0)
            throw new TypeError('`CSS.escape` requires an argument.');
          for (
            var o = String(a),
              i = o.length,
              l = -1,
              u,
              c = '',
              s = o.charCodeAt(0);
            ++l < i;

          ) {
            if (((u = o.charCodeAt(l)), u == 0)) {
              c += '�';
              continue;
            }
            if (
              (u >= 1 && u <= 31) ||
              u == 127 ||
              (l == 0 && u >= 48 && u <= 57) ||
              (l == 1 && u >= 48 && u <= 57 && s == 45)
            ) {
              c += '\\' + u.toString(16) + ' ';
              continue;
            }
            if (l == 0 && i == 1 && u == 45) {
              c += '\\' + o.charAt(l);
              continue;
            }
            if (
              u >= 128 ||
              u == 45 ||
              u == 95 ||
              (u >= 48 && u <= 57) ||
              (u >= 65 && u <= 90) ||
              (u >= 97 && u <= 122)
            ) {
              c += o.charAt(l);
              continue;
            }
            c += '\\' + o.charAt(l);
          }
          return c;
        };
        return r.CSS || (r.CSS = {}), (r.CSS.escape = n), n;
      });
    },
  }),
  Yd = T({
    '../../node_modules/pretty-format/node_modules/ansi-styles/index.js'(e, t) {
      var r =
          (o = 0) =>
          (i) =>
            `\x1B[${38 + o};5;${i}m`,
        n =
          (o = 0) =>
          (i, l, u) =>
            `\x1B[${38 + o};2;${i};${l};${u}m`;
      function a() {
        let o = new Map(),
          i = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              overline: [53, 55],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29],
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              blackBright: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39],
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49],
            },
          };
        (i.color.gray = i.color.blackBright),
          (i.bgColor.bgGray = i.bgColor.bgBlackBright),
          (i.color.grey = i.color.blackBright),
          (i.bgColor.bgGrey = i.bgColor.bgBlackBright);
        for (let [l, u] of Object.entries(i)) {
          for (let [c, s] of Object.entries(u))
            (i[c] = { open: `\x1B[${s[0]}m`, close: `\x1B[${s[1]}m` }),
              (u[c] = i[c]),
              o.set(s[0], s[1]);
          Object.defineProperty(i, l, { value: u, enumerable: !1 });
        }
        return (
          Object.defineProperty(i, 'codes', { value: o, enumerable: !1 }),
          (i.color.close = '\x1B[39m'),
          (i.bgColor.close = '\x1B[49m'),
          (i.color.ansi256 = r()),
          (i.color.ansi16m = n()),
          (i.bgColor.ansi256 = r(10)),
          (i.bgColor.ansi16m = n(10)),
          Object.defineProperties(i, {
            rgbToAnsi256: {
              value: (l, u, c) =>
                l === u && u === c
                  ? l < 8
                    ? 16
                    : l > 248
                      ? 231
                      : Math.round(((l - 8) / 247) * 24) + 232
                  : 16 +
                    36 * Math.round((l / 255) * 5) +
                    6 * Math.round((u / 255) * 5) +
                    Math.round((c / 255) * 5),
              enumerable: !1,
            },
            hexToRgb: {
              value: (l) => {
                let u = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(
                  l.toString(16),
                );
                if (!u) return [0, 0, 0];
                let { colorString: c } = u.groups;
                c.length === 3 &&
                  (c = c
                    .split('')
                    .map((d) => d + d)
                    .join(''));
                let s = Number.parseInt(c, 16);
                return [(s >> 16) & 255, (s >> 8) & 255, s & 255];
              },
              enumerable: !1,
            },
            hexToAnsi256: {
              value: (l) => i.rgbToAnsi256(...i.hexToRgb(l)),
              enumerable: !1,
            },
          }),
          i
        );
      }
      Object.defineProperty(t, 'exports', { enumerable: !0, get: a });
    },
  }),
  ma = T({
    '../../node_modules/pretty-format/build/collections.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printIteratorEntries = r),
        (e.printIteratorValues = n),
        (e.printListItems = a),
        (e.printObjectProperties = o);
      var t = (i, l) => {
        let u = Object.keys(i).sort(l);
        return (
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(i).forEach((c) => {
              Object.getOwnPropertyDescriptor(i, c).enumerable && u.push(c);
            }),
          u
        );
      };
      function r(i, l, u, c, s, d, p = ': ') {
        let f = '',
          h = i.next();
        if (!h.done) {
          f += l.spacingOuter;
          let m = u + l.indent;
          for (; !h.done; ) {
            let y = d(h.value[0], l, m, c, s),
              b = d(h.value[1], l, m, c, s);
            (f += m + y + p + b),
              (h = i.next()),
              h.done ? l.min || (f += ',') : (f += ',' + l.spacingInner);
          }
          f += l.spacingOuter + u;
        }
        return f;
      }
      function n(i, l, u, c, s, d) {
        let p = '',
          f = i.next();
        if (!f.done) {
          p += l.spacingOuter;
          let h = u + l.indent;
          for (; !f.done; )
            (p += h + d(f.value, l, h, c, s)),
              (f = i.next()),
              f.done ? l.min || (p += ',') : (p += ',' + l.spacingInner);
          p += l.spacingOuter + u;
        }
        return p;
      }
      function a(i, l, u, c, s, d) {
        let p = '';
        if (i.length) {
          p += l.spacingOuter;
          let f = u + l.indent;
          for (let h = 0; h < i.length; h++)
            (p += f),
              h in i && (p += d(i[h], l, f, c, s)),
              h < i.length - 1
                ? (p += ',' + l.spacingInner)
                : l.min || (p += ',');
          p += l.spacingOuter + u;
        }
        return p;
      }
      function o(i, l, u, c, s, d) {
        let p = '',
          f = t(i, l.compareKeys);
        if (f.length) {
          p += l.spacingOuter;
          let h = u + l.indent;
          for (let m = 0; m < f.length; m++) {
            let y = f[m],
              b = d(y, l, h, c, s),
              g = d(i[y], l, h, c, s);
            (p += h + b + ': ' + g),
              m < f.length - 1
                ? (p += ',' + l.spacingInner)
                : l.min || (p += ',');
          }
          p += l.spacingOuter + u;
        }
        return p;
      }
    },
  }),
  T1 = T({
    '../../node_modules/pretty-format/build/plugins/AsymmetricMatcher.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = ma(),
        r = (function () {
          return typeof globalThis < 'u'
            ? globalThis
            : typeof r < 'u'
              ? r
              : typeof self < 'u'
                ? self
                : typeof window < 'u'
                  ? window
                  : Function('return this')();
        })(),
        n = r['jest-symbol-do-not-touch'] || r.Symbol,
        a =
          typeof n == 'function' && n.for
            ? n.for('jest.asymmetricMatcher')
            : 1267621,
        o = ' ',
        i = (s, d, p, f, h, m) => {
          let y = s.toString();
          return y === 'ArrayContaining' || y === 'ArrayNotContaining'
            ? ++f > d.maxDepth
              ? '[' + y + ']'
              : y +
                o +
                '[' +
                (0, t.printListItems)(s.sample, d, p, f, h, m) +
                ']'
            : y === 'ObjectContaining' || y === 'ObjectNotContaining'
              ? ++f > d.maxDepth
                ? '[' + y + ']'
                : y +
                  o +
                  '{' +
                  (0, t.printObjectProperties)(s.sample, d, p, f, h, m) +
                  '}'
              : y === 'StringMatching' ||
                  y === 'StringNotMatching' ||
                  y === 'StringContaining' ||
                  y === 'StringNotContaining'
                ? y + o + m(s.sample, d, p, f, h)
                : s.toAsymmetricMatcher();
        };
      e.serialize = i;
      var l = (s) => s && s.$$typeof === a;
      e.test = l;
      var u = { serialize: i, test: l },
        c = u;
      e.default = c;
    },
  }),
  S1 = T({
    '../../node_modules/pretty-format/node_modules/ansi-regex/index.js'(e, t) {
      t.exports = ({ onlyFirst: r = !1 } = {}) => {
        let n = [
          '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
          '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
        ].join('|');
        return new RegExp(n, r ? void 0 : 'g');
      };
    },
  }),
  P1 = T({
    '../../node_modules/pretty-format/build/plugins/ConvertAnsi.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = n(S1()),
        r = n(Yd());
      function n(c) {
        return c && c.__esModule ? c : { default: c };
      }
      var a = (c) =>
          c.replace((0, t.default)(), (s) => {
            switch (s) {
              case r.default.red.close:
              case r.default.green.close:
              case r.default.cyan.close:
              case r.default.gray.close:
              case r.default.white.close:
              case r.default.yellow.close:
              case r.default.bgRed.close:
              case r.default.bgGreen.close:
              case r.default.bgYellow.close:
              case r.default.inverse.close:
              case r.default.dim.close:
              case r.default.bold.close:
              case r.default.reset.open:
              case r.default.reset.close:
                return '</>';
              case r.default.red.open:
                return '<red>';
              case r.default.green.open:
                return '<green>';
              case r.default.cyan.open:
                return '<cyan>';
              case r.default.gray.open:
                return '<gray>';
              case r.default.white.open:
                return '<white>';
              case r.default.yellow.open:
                return '<yellow>';
              case r.default.bgRed.open:
                return '<bgRed>';
              case r.default.bgGreen.open:
                return '<bgGreen>';
              case r.default.bgYellow.open:
                return '<bgYellow>';
              case r.default.inverse.open:
                return '<inverse>';
              case r.default.dim.open:
                return '<dim>';
              case r.default.bold.open:
                return '<bold>';
              default:
                return '';
            }
          }),
        o = (c) => typeof c == 'string' && !!c.match((0, t.default)());
      e.test = o;
      var i = (c, s, d, p, f, h) => h(a(c), s, d, p, f);
      e.serialize = i;
      var l = { serialize: i, test: o },
        u = l;
      e.default = u;
    },
  }),
  O1 = T({
    '../../node_modules/pretty-format/build/plugins/DOMCollection.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = ma(),
        r = ' ',
        n = ['DOMStringMap', 'NamedNodeMap'],
        a = /^(HTML\w*Collection|NodeList)$/,
        o = (d) => n.indexOf(d) !== -1 || a.test(d),
        i = (d) =>
          d && d.constructor && !!d.constructor.name && o(d.constructor.name);
      e.test = i;
      var l = (d) => d.constructor.name === 'NamedNodeMap',
        u = (d, p, f, h, m, y) => {
          let b = d.constructor.name;
          return ++h > p.maxDepth
            ? '[' + b + ']'
            : (p.min ? '' : b + r) +
                (n.indexOf(b) !== -1
                  ? '{' +
                    (0, t.printObjectProperties)(
                      l(d)
                        ? Array.from(d).reduce(
                            (g, R) => ((g[R.name] = R.value), g),
                            {},
                          )
                        : { ...d },
                      p,
                      f,
                      h,
                      m,
                      y,
                    ) +
                    '}'
                  : '[' +
                    (0, t.printListItems)(Array.from(d), p, f, h, m, y) +
                    ']');
        };
      e.serialize = u;
      var c = { serialize: u, test: i },
        s = c;
      e.default = s;
    },
  }),
  A1 = T({
    '../../node_modules/pretty-format/build/plugins/lib/escapeHTML.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = t);
      function t(r) {
        return r.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
    },
  }),
  ki = T({
    '../../node_modules/pretty-format/build/plugins/lib/markup.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printText =
          e.printProps =
          e.printElementAsLeaf =
          e.printElement =
          e.printComment =
          e.printChildren =
            void 0);
      var t = r(A1());
      function r(c) {
        return c && c.__esModule ? c : { default: c };
      }
      var n = (c, s, d, p, f, h, m) => {
        let y = p + d.indent,
          b = d.colors;
        return c
          .map((g) => {
            let R = s[g],
              C = m(R, d, y, f, h);
            return (
              typeof R != 'string' &&
                (C.indexOf(`
`) !== -1 && (C = d.spacingOuter + y + C + d.spacingOuter + p),
                (C = '{' + C + '}')),
              d.spacingInner +
                p +
                b.prop.open +
                g +
                b.prop.close +
                '=' +
                b.value.open +
                C +
                b.value.close
            );
          })
          .join('');
      };
      e.printProps = n;
      var a = (c, s, d, p, f, h) =>
        c
          .map(
            (m) =>
              s.spacingOuter +
              d +
              (typeof m == 'string' ? o(m, s) : h(m, s, d, p, f)),
          )
          .join('');
      e.printChildren = a;
      var o = (c, s) => {
        let d = s.colors.content;
        return d.open + (0, t.default)(c) + d.close;
      };
      e.printText = o;
      var i = (c, s) => {
        let d = s.colors.comment;
        return d.open + '<!--' + (0, t.default)(c) + '-->' + d.close;
      };
      e.printComment = i;
      var l = (c, s, d, p, f) => {
        let h = p.colors.tag;
        return (
          h.open +
          '<' +
          c +
          (s && h.close + s + p.spacingOuter + f + h.open) +
          (d
            ? '>' + h.close + d + p.spacingOuter + f + h.open + '</' + c
            : (s && !p.min ? '' : ' ') + '/') +
          '>' +
          h.close
        );
      };
      e.printElement = l;
      var u = (c, s) => {
        let d = s.colors.tag;
        return d.open + '<' + c + d.close + ' …' + d.open + ' />' + d.close;
      };
      e.printElementAsLeaf = u;
    },
  }),
  q1 = T({
    '../../node_modules/pretty-format/build/plugins/DOMElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = ki(),
        r = 1,
        n = 3,
        a = 8,
        o = 11,
        i = /^((HTML|SVG)\w*)?Element$/,
        l = (y) => {
          try {
            return typeof y.hasAttribute == 'function' && y.hasAttribute('is');
          } catch {
            return !1;
          }
        },
        u = (y) => {
          let b = y.constructor.name,
            { nodeType: g, tagName: R } = y,
            C = (typeof R == 'string' && R.includes('-')) || l(y);
          return (
            (g === r && (i.test(b) || C)) ||
            (g === n && b === 'Text') ||
            (g === a && b === 'Comment') ||
            (g === o && b === 'DocumentFragment')
          );
        },
        c = (y) => {
          var b;
          return (
            (y == null || (b = y.constructor) === null || b === void 0
              ? void 0
              : b.name) && u(y)
          );
        };
      e.test = c;
      function s(y) {
        return y.nodeType === n;
      }
      function d(y) {
        return y.nodeType === a;
      }
      function p(y) {
        return y.nodeType === o;
      }
      var f = (y, b, g, R, C, _) => {
        if (s(y)) return (0, t.printText)(y.data, b);
        if (d(y)) return (0, t.printComment)(y.data, b);
        let w = p(y) ? 'DocumentFragment' : y.tagName.toLowerCase();
        return ++R > b.maxDepth
          ? (0, t.printElementAsLeaf)(w, b)
          : (0, t.printElement)(
              w,
              (0, t.printProps)(
                p(y)
                  ? []
                  : Array.from(y.attributes)
                      .map((E) => E.name)
                      .sort(),
                p(y)
                  ? {}
                  : Array.from(y.attributes).reduce(
                      (E, v) => ((E[v.name] = v.value), E),
                      {},
                    ),
                b,
                g + b.indent,
                R,
                C,
                _,
              ),
              (0, t.printChildren)(
                Array.prototype.slice.call(y.childNodes || y.children),
                b,
                g + b.indent,
                R,
                C,
                _,
              ),
              b,
              g,
            );
      };
      e.serialize = f;
      var h = { serialize: f, test: c },
        m = h;
      e.default = m;
    },
  }),
  x1 = T({
    '../../node_modules/pretty-format/build/plugins/Immutable.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = ma(),
        r = '@@__IMMUTABLE_ITERABLE__@@',
        n = '@@__IMMUTABLE_LIST__@@',
        a = '@@__IMMUTABLE_KEYED__@@',
        o = '@@__IMMUTABLE_MAP__@@',
        i = '@@__IMMUTABLE_ORDERED__@@',
        l = '@@__IMMUTABLE_RECORD__@@',
        u = '@@__IMMUTABLE_SEQ__@@',
        c = '@@__IMMUTABLE_SET__@@',
        s = '@@__IMMUTABLE_STACK__@@',
        d = (v) => 'Immutable.' + v,
        p = (v) => '[' + v + ']',
        f = ' ',
        h = '…',
        m = (v, O, $, N, L, j, I) =>
          ++N > O.maxDepth
            ? p(d(I))
            : d(I) +
              f +
              '{' +
              (0, t.printIteratorEntries)(v.entries(), O, $, N, L, j) +
              '}';
      function y(v) {
        let O = 0;
        return {
          next() {
            if (O < v._keys.length) {
              let $ = v._keys[O++];
              return { done: !1, value: [$, v.get($)] };
            }
            return { done: !0, value: void 0 };
          },
        };
      }
      var b = (v, O, $, N, L, j) => {
          let I = d(v._name || 'Record');
          return ++N > O.maxDepth
            ? p(I)
            : I +
                f +
                '{' +
                (0, t.printIteratorEntries)(y(v), O, $, N, L, j) +
                '}';
        },
        g = (v, O, $, N, L, j) => {
          let I = d('Seq');
          return ++N > O.maxDepth
            ? p(I)
            : v[a]
              ? I +
                f +
                '{' +
                (v._iter || v._object
                  ? (0, t.printIteratorEntries)(v.entries(), O, $, N, L, j)
                  : h) +
                '}'
              : I +
                f +
                '[' +
                (v._iter || v._array || v._collection || v._iterable
                  ? (0, t.printIteratorValues)(v.values(), O, $, N, L, j)
                  : h) +
                ']';
        },
        R = (v, O, $, N, L, j, I) =>
          ++N > O.maxDepth
            ? p(d(I))
            : d(I) +
              f +
              '[' +
              (0, t.printIteratorValues)(v.values(), O, $, N, L, j) +
              ']',
        C = (v, O, $, N, L, j) =>
          v[o]
            ? m(v, O, $, N, L, j, v[i] ? 'OrderedMap' : 'Map')
            : v[n]
              ? R(v, O, $, N, L, j, 'List')
              : v[c]
                ? R(v, O, $, N, L, j, v[i] ? 'OrderedSet' : 'Set')
                : v[s]
                  ? R(v, O, $, N, L, j, 'Stack')
                  : v[u]
                    ? g(v, O, $, N, L, j)
                    : b(v, O, $, N, L, j);
      e.serialize = C;
      var _ = (v) => v && (v[r] === !0 || v[l] === !0);
      e.test = _;
      var w = { serialize: C, test: _ },
        E = w;
      e.default = E;
    },
  }),
  M1 = T({
    '../../node_modules/pretty-format/node_modules/react-is/cjs/react-is.development.js'(
      e,
    ) {
      (function () {
        var t = 60103,
          r = 60106,
          n = 60107,
          a = 60108,
          o = 60114,
          i = 60109,
          l = 60110,
          u = 60112,
          c = 60113,
          s = 60120,
          d = 60115,
          p = 60116,
          f = 60121,
          h = 60122,
          m = 60117,
          y = 60129,
          b = 60131;
        if (typeof Symbol == 'function' && Symbol.for) {
          var g = Symbol.for;
          (t = g('react.element')),
            (r = g('react.portal')),
            (n = g('react.fragment')),
            (a = g('react.strict_mode')),
            (o = g('react.profiler')),
            (i = g('react.provider')),
            (l = g('react.context')),
            (u = g('react.forward_ref')),
            (c = g('react.suspense')),
            (s = g('react.suspense_list')),
            (d = g('react.memo')),
            (p = g('react.lazy')),
            (f = g('react.block')),
            (h = g('react.server.block')),
            (m = g('react.fundamental')),
            g('react.scope'),
            g('react.opaque.id'),
            (y = g('react.debug_trace_mode')),
            g('react.offscreen'),
            (b = g('react.legacy_hidden'));
        }
        var R = !1;
        function C(k) {
          return !!(
            typeof k == 'string' ||
            typeof k == 'function' ||
            k === n ||
            k === o ||
            k === y ||
            k === a ||
            k === c ||
            k === s ||
            k === b ||
            R ||
            (typeof k == 'object' &&
              k !== null &&
              (k.$$typeof === p ||
                k.$$typeof === d ||
                k.$$typeof === i ||
                k.$$typeof === l ||
                k.$$typeof === u ||
                k.$$typeof === m ||
                k.$$typeof === f ||
                k[0] === h))
          );
        }
        function _(k) {
          if (typeof k == 'object' && k !== null) {
            var X = k.$$typeof;
            switch (X) {
              case t:
                var M = k.type;
                switch (M) {
                  case n:
                  case o:
                  case a:
                  case c:
                  case s:
                    return M;
                  default:
                    var ie = M && M.$$typeof;
                    switch (ie) {
                      case l:
                      case u:
                      case p:
                      case d:
                      case i:
                        return ie;
                      default:
                        return X;
                    }
                }
              case r:
                return X;
            }
          }
        }
        var w = l,
          E = i,
          v = t,
          O = u,
          $ = n,
          N = p,
          L = d,
          j = r,
          I = o,
          H = a,
          V = c,
          J = !1,
          W = !1;
        function _e(k) {
          return (
            J ||
              ((J = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.',
              )),
            !1
          );
        }
        function Le(k) {
          return (
            W ||
              ((W = !0),
              console.warn(
                'The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.',
              )),
            !1
          );
        }
        function Be(k) {
          return _(k) === l;
        }
        function F(k) {
          return _(k) === i;
        }
        function B(k) {
          return typeof k == 'object' && k !== null && k.$$typeof === t;
        }
        function D(k) {
          return _(k) === u;
        }
        function G(k) {
          return _(k) === n;
        }
        function Z(k) {
          return _(k) === p;
        }
        function ue(k) {
          return _(k) === d;
        }
        function Ee(k) {
          return _(k) === r;
        }
        function st(k) {
          return _(k) === o;
        }
        function q(k) {
          return _(k) === a;
        }
        function z(k) {
          return _(k) === c;
        }
        (e.ContextConsumer = w),
          (e.ContextProvider = E),
          (e.Element = v),
          (e.ForwardRef = O),
          (e.Fragment = $),
          (e.Lazy = N),
          (e.Memo = L),
          (e.Portal = j),
          (e.Profiler = I),
          (e.StrictMode = H),
          (e.Suspense = V),
          (e.isAsyncMode = _e),
          (e.isConcurrentMode = Le),
          (e.isContextConsumer = Be),
          (e.isContextProvider = F),
          (e.isElement = B),
          (e.isForwardRef = D),
          (e.isFragment = G),
          (e.isLazy = Z),
          (e.isMemo = ue),
          (e.isPortal = Ee),
          (e.isProfiler = st),
          (e.isStrictMode = q),
          (e.isSuspense = z),
          (e.isValidElementType = C),
          (e.typeOf = _);
      })();
    },
  }),
  $1 = T({
    '../../node_modules/pretty-format/node_modules/react-is/index.js'(e, t) {
      t.exports = M1();
    },
  }),
  N1 = T({
    '../../node_modules/pretty-format/build/plugins/ReactElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = a($1()),
        r = ki();
      function n(p) {
        if (typeof WeakMap != 'function') return null;
        var f = new WeakMap(),
          h = new WeakMap();
        return (n = function (m) {
          return m ? h : f;
        })(p);
      }
      function a(p, f) {
        if (p && p.__esModule) return p;
        if (p === null || (typeof p != 'object' && typeof p != 'function'))
          return { default: p };
        var h = n(f);
        if (h && h.has(p)) return h.get(p);
        var m = {},
          y = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var b in p)
          if (b !== 'default' && Object.prototype.hasOwnProperty.call(p, b)) {
            var g = y ? Object.getOwnPropertyDescriptor(p, b) : null;
            g && (g.get || g.set)
              ? Object.defineProperty(m, b, g)
              : (m[b] = p[b]);
          }
        return (m.default = p), h && h.set(p, m), m;
      }
      var o = (p, f = []) => (
          Array.isArray(p)
            ? p.forEach((h) => {
                o(h, f);
              })
            : p != null && p !== !1 && f.push(p),
          f
        ),
        i = (p) => {
          let f = p.type;
          if (typeof f == 'string') return f;
          if (typeof f == 'function')
            return f.displayName || f.name || 'Unknown';
          if (t.isFragment(p)) return 'React.Fragment';
          if (t.isSuspense(p)) return 'React.Suspense';
          if (typeof f == 'object' && f !== null) {
            if (t.isContextProvider(p)) return 'Context.Provider';
            if (t.isContextConsumer(p)) return 'Context.Consumer';
            if (t.isForwardRef(p)) {
              if (f.displayName) return f.displayName;
              let h = f.render.displayName || f.render.name || '';
              return h !== '' ? 'ForwardRef(' + h + ')' : 'ForwardRef';
            }
            if (t.isMemo(p)) {
              let h = f.displayName || f.type.displayName || f.type.name || '';
              return h !== '' ? 'Memo(' + h + ')' : 'Memo';
            }
          }
          return 'UNDEFINED';
        },
        l = (p) => {
          let { props: f } = p;
          return Object.keys(f)
            .filter((h) => h !== 'children' && f[h] !== void 0)
            .sort();
        },
        u = (p, f, h, m, y, b) =>
          ++m > f.maxDepth
            ? (0, r.printElementAsLeaf)(i(p), f)
            : (0, r.printElement)(
                i(p),
                (0, r.printProps)(l(p), p.props, f, h + f.indent, m, y, b),
                (0, r.printChildren)(
                  o(p.props.children),
                  f,
                  h + f.indent,
                  m,
                  y,
                  b,
                ),
                f,
                h,
              );
      e.serialize = u;
      var c = (p) => p != null && t.isElement(p);
      e.test = c;
      var s = { serialize: u, test: c },
        d = s;
      e.default = d;
    },
  }),
  j1 = T({
    '../../node_modules/pretty-format/build/plugins/ReactTestComponent.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = ki(),
        r = (function () {
          return typeof globalThis < 'u'
            ? globalThis
            : typeof r < 'u'
              ? r
              : typeof self < 'u'
                ? self
                : typeof window < 'u'
                  ? window
                  : Function('return this')();
        })(),
        n = r['jest-symbol-do-not-touch'] || r.Symbol,
        a =
          typeof n == 'function' && n.for
            ? n.for('react.test.json')
            : 245830487,
        o = (s) => {
          let { props: d } = s;
          return d
            ? Object.keys(d)
                .filter((p) => d[p] !== void 0)
                .sort()
            : [];
        },
        i = (s, d, p, f, h, m) =>
          ++f > d.maxDepth
            ? (0, t.printElementAsLeaf)(s.type, d)
            : (0, t.printElement)(
                s.type,
                s.props
                  ? (0, t.printProps)(o(s), s.props, d, p + d.indent, f, h, m)
                  : '',
                s.children
                  ? (0, t.printChildren)(s.children, d, p + d.indent, f, h, m)
                  : '',
                d,
                p,
              );
      e.serialize = i;
      var l = (s) => s && s.$$typeof === a;
      e.test = l;
      var u = { serialize: i, test: l },
        c = u;
      e.default = c;
    },
  }),
  I1 = T({
    '../../node_modules/pretty-format/build/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = e.DEFAULT_OPTIONS = void 0),
        (e.format = ue),
        (e.plugins = void 0);
      var t = s(Yd()),
        r = ma(),
        n = s(T1()),
        a = s(P1()),
        o = s(O1()),
        i = s(q1()),
        l = s(x1()),
        u = s(N1()),
        c = s(j1());
      function s(q) {
        return q && q.__esModule ? q : { default: q };
      }
      var d = Object.prototype.toString,
        p = Date.prototype.toISOString,
        f = Error.prototype.toString,
        h = RegExp.prototype.toString,
        m = (q) =>
          (typeof q.constructor == 'function' && q.constructor.name) ||
          'Object',
        y = (q) => typeof window < 'u' && q === window,
        b = /^Symbol\((.*)\)(.*)$/,
        g = /\n/gi,
        R = class extends Error {
          constructor(q, z) {
            super(q), (this.stack = z), (this.name = this.constructor.name);
          }
        };
      function C(q) {
        return (
          q === '[object Array]' ||
          q === '[object ArrayBuffer]' ||
          q === '[object DataView]' ||
          q === '[object Float32Array]' ||
          q === '[object Float64Array]' ||
          q === '[object Int8Array]' ||
          q === '[object Int16Array]' ||
          q === '[object Int32Array]' ||
          q === '[object Uint8Array]' ||
          q === '[object Uint8ClampedArray]' ||
          q === '[object Uint16Array]' ||
          q === '[object Uint32Array]'
        );
      }
      function _(q) {
        return Object.is(q, -0) ? '-0' : String(q);
      }
      function w(q) {
        return `${q}n`;
      }
      function E(q, z) {
        return z ? '[Function ' + (q.name || 'anonymous') + ']' : '[Function]';
      }
      function v(q) {
        return String(q).replace(b, 'Symbol($1)');
      }
      function O(q) {
        return '[' + f.call(q) + ']';
      }
      function $(q, z, k, X) {
        if (q === !0 || q === !1) return '' + q;
        if (q === void 0) return 'undefined';
        if (q === null) return 'null';
        let M = typeof q;
        if (M === 'number') return _(q);
        if (M === 'bigint') return w(q);
        if (M === 'string')
          return X ? '"' + q.replace(/"|\\/g, '\\$&') + '"' : '"' + q + '"';
        if (M === 'function') return E(q, z);
        if (M === 'symbol') return v(q);
        let ie = d.call(q);
        return ie === '[object WeakMap]'
          ? 'WeakMap {}'
          : ie === '[object WeakSet]'
            ? 'WeakSet {}'
            : ie === '[object Function]' || ie === '[object GeneratorFunction]'
              ? E(q, z)
              : ie === '[object Symbol]'
                ? v(q)
                : ie === '[object Date]'
                  ? isNaN(+q)
                    ? 'Date { NaN }'
                    : p.call(q)
                  : ie === '[object Error]'
                    ? O(q)
                    : ie === '[object RegExp]'
                      ? k
                        ? h.call(q).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
                        : h.call(q)
                      : q instanceof Error
                        ? O(q)
                        : null;
      }
      function N(q, z, k, X, M, ie) {
        if (M.indexOf(q) !== -1) return '[Circular]';
        (M = M.slice()), M.push(q);
        let le = ++X > z.maxDepth,
          ye = z.min;
        if (
          z.callToJSON &&
          !le &&
          q.toJSON &&
          typeof q.toJSON == 'function' &&
          !ie
        )
          return H(q.toJSON(), z, k, X, M, !0);
        let ut = d.call(q);
        return ut === '[object Arguments]'
          ? le
            ? '[Arguments]'
            : (ye ? '' : 'Arguments ') +
              '[' +
              (0, r.printListItems)(q, z, k, X, M, H) +
              ']'
          : C(ut)
            ? le
              ? '[' + q.constructor.name + ']'
              : (ye ||
                (!z.printBasicPrototype && q.constructor.name === 'Array')
                  ? ''
                  : q.constructor.name + ' ') +
                '[' +
                (0, r.printListItems)(q, z, k, X, M, H) +
                ']'
            : ut === '[object Map]'
              ? le
                ? '[Map]'
                : 'Map {' +
                  (0, r.printIteratorEntries)(
                    q.entries(),
                    z,
                    k,
                    X,
                    M,
                    H,
                    ' => ',
                  ) +
                  '}'
              : ut === '[object Set]'
                ? le
                  ? '[Set]'
                  : 'Set {' +
                    (0, r.printIteratorValues)(q.values(), z, k, X, M, H) +
                    '}'
                : le || y(q)
                  ? '[' + m(q) + ']'
                  : (ye || (!z.printBasicPrototype && m(q) === 'Object')
                      ? ''
                      : m(q) + ' ') +
                    '{' +
                    (0, r.printObjectProperties)(q, z, k, X, M, H) +
                    '}';
      }
      function L(q) {
        return q.serialize != null;
      }
      function j(q, z, k, X, M, ie) {
        let le;
        try {
          le = L(q)
            ? q.serialize(z, k, X, M, ie, H)
            : q.print(
                z,
                (ye) => H(ye, k, X, M, ie),
                (ye) => {
                  let ut = X + k.indent;
                  return (
                    ut +
                    ye.replace(
                      g,
                      `
` + ut,
                    )
                  );
                },
                {
                  edgeSpacing: k.spacingOuter,
                  min: k.min,
                  spacing: k.spacingInner,
                },
                k.colors,
              );
        } catch (ye) {
          throw new R(ye.message, ye.stack);
        }
        if (typeof le != 'string')
          throw new Error(
            `pretty-format: Plugin must return type "string" but instead returned "${typeof le}".`,
          );
        return le;
      }
      function I(q, z) {
        for (let k = 0; k < q.length; k++)
          try {
            if (q[k].test(z)) return q[k];
          } catch (X) {
            throw new R(X.message, X.stack);
          }
        return null;
      }
      function H(q, z, k, X, M, ie) {
        let le = I(z.plugins, q);
        if (le !== null) return j(le, q, z, k, X, M);
        let ye = $(q, z.printFunctionName, z.escapeRegex, z.escapeString);
        return ye !== null ? ye : N(q, z, k, X, M, ie);
      }
      var V = {
          comment: 'gray',
          content: 'reset',
          prop: 'yellow',
          tag: 'cyan',
          value: 'green',
        },
        J = Object.keys(V),
        W = {
          callToJSON: !0,
          compareKeys: void 0,
          escapeRegex: !1,
          escapeString: !0,
          highlight: !1,
          indent: 2,
          maxDepth: 1 / 0,
          min: !1,
          plugins: [],
          printBasicPrototype: !0,
          printFunctionName: !0,
          theme: V,
        };
      e.DEFAULT_OPTIONS = W;
      function _e(q) {
        if (
          (Object.keys(q).forEach((z) => {
            if (!W.hasOwnProperty(z))
              throw new Error(`pretty-format: Unknown option "${z}".`);
          }),
          q.min && q.indent !== void 0 && q.indent !== 0)
        )
          throw new Error(
            'pretty-format: Options "min" and "indent" cannot be used together.',
          );
        if (q.theme !== void 0) {
          if (q.theme === null)
            throw new Error('pretty-format: Option "theme" must not be null.');
          if (typeof q.theme != 'object')
            throw new Error(
              `pretty-format: Option "theme" must be of type "object" but instead received "${typeof q.theme}".`,
            );
        }
      }
      var Le = (q) =>
          J.reduce((z, k) => {
            let X = q.theme && q.theme[k] !== void 0 ? q.theme[k] : V[k],
              M = X && t.default[X];
            if (M && typeof M.close == 'string' && typeof M.open == 'string')
              z[k] = M;
            else
              throw new Error(
                `pretty-format: Option "theme" has a key "${k}" whose value "${X}" is undefined in ansi-styles.`,
              );
            return z;
          }, Object.create(null)),
        Be = () =>
          J.reduce(
            (q, z) => ((q[z] = { close: '', open: '' }), q),
            Object.create(null),
          ),
        F = (q) =>
          q && q.printFunctionName !== void 0
            ? q.printFunctionName
            : W.printFunctionName,
        B = (q) =>
          q && q.escapeRegex !== void 0 ? q.escapeRegex : W.escapeRegex,
        D = (q) =>
          q && q.escapeString !== void 0 ? q.escapeString : W.escapeString,
        G = (q) => {
          var z;
          return {
            callToJSON:
              q && q.callToJSON !== void 0 ? q.callToJSON : W.callToJSON,
            colors: q && q.highlight ? Le(q) : Be(),
            compareKeys:
              q && typeof q.compareKeys == 'function'
                ? q.compareKeys
                : W.compareKeys,
            escapeRegex: B(q),
            escapeString: D(q),
            indent:
              q && q.min
                ? ''
                : Z(q && q.indent !== void 0 ? q.indent : W.indent),
            maxDepth: q && q.maxDepth !== void 0 ? q.maxDepth : W.maxDepth,
            min: q && q.min !== void 0 ? q.min : W.min,
            plugins: q && q.plugins !== void 0 ? q.plugins : W.plugins,
            printBasicPrototype:
              (z = q == null ? void 0 : q.printBasicPrototype) !== null &&
              z !== void 0
                ? z
                : !0,
            printFunctionName: F(q),
            spacingInner:
              q && q.min
                ? ' '
                : `
`,
            spacingOuter:
              q && q.min
                ? ''
                : `
`,
          };
        };
      function Z(q) {
        return new Array(q + 1).join(' ');
      }
      function ue(q, z) {
        if (z && (_e(z), z.plugins)) {
          let X = I(z.plugins, q);
          if (X !== null) return j(X, q, G(z), '', 0, []);
        }
        let k = $(q, F(z), B(z), D(z));
        return k !== null ? k : N(q, G(z), '', 0, []);
      }
      var Ee = {
        AsymmetricMatcher: n.default,
        ConvertAnsi: a.default,
        DOMCollection: o.default,
        DOMElement: i.default,
        Immutable: l.default,
        ReactElement: u.default,
        ReactTestComponent: c.default,
      };
      e.plugins = Ee;
      var st = ue;
      e.default = st;
    },
  }),
  L1 = T({
    '../../node_modules/lz-string/libs/lz-string.js'(e, t) {
      var r = (function () {
        var n = String.fromCharCode,
          a =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          o =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
          i = {};
        function l(c, s) {
          if (!i[c]) {
            i[c] = {};
            for (var d = 0; d < c.length; d++) i[c][c.charAt(d)] = d;
          }
          return i[c][s];
        }
        var u = {
          compressToBase64: function (c) {
            if (c == null) return '';
            var s = u._compress(c, 6, function (d) {
              return a.charAt(d);
            });
            switch (s.length % 4) {
              default:
              case 0:
                return s;
              case 1:
                return s + '===';
              case 2:
                return s + '==';
              case 3:
                return s + '=';
            }
          },
          decompressFromBase64: function (c) {
            return c == null
              ? ''
              : c == ''
                ? null
                : u._decompress(c.length, 32, function (s) {
                    return l(a, c.charAt(s));
                  });
          },
          compressToUTF16: function (c) {
            return c == null
              ? ''
              : u._compress(c, 15, function (s) {
                  return n(s + 32);
                }) + ' ';
          },
          decompressFromUTF16: function (c) {
            return c == null
              ? ''
              : c == ''
                ? null
                : u._decompress(c.length, 16384, function (s) {
                    return c.charCodeAt(s) - 32;
                  });
          },
          compressToUint8Array: function (c) {
            for (
              var s = u.compress(c),
                d = new Uint8Array(s.length * 2),
                p = 0,
                f = s.length;
              p < f;
              p++
            ) {
              var h = s.charCodeAt(p);
              (d[p * 2] = h >>> 8), (d[p * 2 + 1] = h % 256);
            }
            return d;
          },
          decompressFromUint8Array: function (c) {
            if (c == null) return u.decompress(c);
            for (
              var s = new Array(c.length / 2), d = 0, p = s.length;
              d < p;
              d++
            )
              s[d] = c[d * 2] * 256 + c[d * 2 + 1];
            var f = [];
            return (
              s.forEach(function (h) {
                f.push(n(h));
              }),
              u.decompress(f.join(''))
            );
          },
          compressToEncodedURIComponent: function (c) {
            return c == null
              ? ''
              : u._compress(c, 6, function (s) {
                  return o.charAt(s);
                });
          },
          decompressFromEncodedURIComponent: function (c) {
            return c == null
              ? ''
              : c == ''
                ? null
                : ((c = c.replace(/ /g, '+')),
                  u._decompress(c.length, 32, function (s) {
                    return l(o, c.charAt(s));
                  }));
          },
          compress: function (c) {
            return u._compress(c, 16, function (s) {
              return n(s);
            });
          },
          _compress: function (c, s, d) {
            if (c == null) return '';
            var p,
              f,
              h = {},
              m = {},
              y = '',
              b = '',
              g = '',
              R = 2,
              C = 3,
              _ = 2,
              w = [],
              E = 0,
              v = 0,
              O;
            for (O = 0; O < c.length; O += 1)
              if (
                ((y = c.charAt(O)),
                Object.prototype.hasOwnProperty.call(h, y) ||
                  ((h[y] = C++), (m[y] = !0)),
                (b = g + y),
                Object.prototype.hasOwnProperty.call(h, b))
              )
                g = b;
              else {
                if (Object.prototype.hasOwnProperty.call(m, g)) {
                  if (g.charCodeAt(0) < 256) {
                    for (p = 0; p < _; p++)
                      (E = E << 1),
                        v == s - 1 ? ((v = 0), w.push(d(E)), (E = 0)) : v++;
                    for (f = g.charCodeAt(0), p = 0; p < 8; p++)
                      (E = (E << 1) | (f & 1)),
                        v == s - 1 ? ((v = 0), w.push(d(E)), (E = 0)) : v++,
                        (f = f >> 1);
                  } else {
                    for (f = 1, p = 0; p < _; p++)
                      (E = (E << 1) | f),
                        v == s - 1 ? ((v = 0), w.push(d(E)), (E = 0)) : v++,
                        (f = 0);
                    for (f = g.charCodeAt(0), p = 0; p < 16; p++)
                      (E = (E << 1) | (f & 1)),
                        v == s - 1 ? ((v = 0), w.push(d(E)), (E = 0)) : v++,
                        (f = f >> 1);
                  }
                  R--, R == 0 && ((R = Math.pow(2, _)), _++), delete m[g];
                } else
                  for (f = h[g], p = 0; p < _; p++)
                    (E = (E << 1) | (f & 1)),
                      v == s - 1 ? ((v = 0), w.push(d(E)), (E = 0)) : v++,
                      (f = f >> 1);
                R--,
                  R == 0 && ((R = Math.pow(2, _)), _++),
                  (h[b] = C++),
                  (g = String(y));
              }
            if (g !== '') {
              if (Object.prototype.hasOwnProperty.call(m, g)) {
                if (g.charCodeAt(0) < 256) {
                  for (p = 0; p < _; p++)
                    (E = E << 1),
                      v == s - 1 ? ((v = 0), w.push(d(E)), (E = 0)) : v++;
                  for (f = g.charCodeAt(0), p = 0; p < 8; p++)
                    (E = (E << 1) | (f & 1)),
                      v == s - 1 ? ((v = 0), w.push(d(E)), (E = 0)) : v++,
                      (f = f >> 1);
                } else {
                  for (f = 1, p = 0; p < _; p++)
                    (E = (E << 1) | f),
                      v == s - 1 ? ((v = 0), w.push(d(E)), (E = 0)) : v++,
                      (f = 0);
                  for (f = g.charCodeAt(0), p = 0; p < 16; p++)
                    (E = (E << 1) | (f & 1)),
                      v == s - 1 ? ((v = 0), w.push(d(E)), (E = 0)) : v++,
                      (f = f >> 1);
                }
                R--, R == 0 && ((R = Math.pow(2, _)), _++), delete m[g];
              } else
                for (f = h[g], p = 0; p < _; p++)
                  (E = (E << 1) | (f & 1)),
                    v == s - 1 ? ((v = 0), w.push(d(E)), (E = 0)) : v++,
                    (f = f >> 1);
              R--, R == 0 && ((R = Math.pow(2, _)), _++);
            }
            for (f = 2, p = 0; p < _; p++)
              (E = (E << 1) | (f & 1)),
                v == s - 1 ? ((v = 0), w.push(d(E)), (E = 0)) : v++,
                (f = f >> 1);
            for (;;)
              if (((E = E << 1), v == s - 1)) {
                w.push(d(E));
                break;
              } else v++;
            return w.join('');
          },
          decompress: function (c) {
            return c == null
              ? ''
              : c == ''
                ? null
                : u._decompress(c.length, 32768, function (s) {
                    return c.charCodeAt(s);
                  });
          },
          _decompress: function (c, s, d) {
            var p = [],
              f = 4,
              h = 4,
              m = 3,
              y = '',
              b = [],
              g,
              R,
              C,
              _,
              w,
              E,
              v,
              O = { val: d(0), position: s, index: 1 };
            for (g = 0; g < 3; g += 1) p[g] = g;
            for (C = 0, w = Math.pow(2, 2), E = 1; E != w; )
              (_ = O.val & O.position),
                (O.position >>= 1),
                O.position == 0 && ((O.position = s), (O.val = d(O.index++))),
                (C |= (_ > 0 ? 1 : 0) * E),
                (E <<= 1);
            switch (C) {
              case 0:
                for (C = 0, w = Math.pow(2, 8), E = 1; E != w; )
                  (_ = O.val & O.position),
                    (O.position >>= 1),
                    O.position == 0 &&
                      ((O.position = s), (O.val = d(O.index++))),
                    (C |= (_ > 0 ? 1 : 0) * E),
                    (E <<= 1);
                v = n(C);
                break;
              case 1:
                for (C = 0, w = Math.pow(2, 16), E = 1; E != w; )
                  (_ = O.val & O.position),
                    (O.position >>= 1),
                    O.position == 0 &&
                      ((O.position = s), (O.val = d(O.index++))),
                    (C |= (_ > 0 ? 1 : 0) * E),
                    (E <<= 1);
                v = n(C);
                break;
              case 2:
                return '';
            }
            for (p[3] = v, R = v, b.push(v); ; ) {
              if (O.index > c) return '';
              for (C = 0, w = Math.pow(2, m), E = 1; E != w; )
                (_ = O.val & O.position),
                  (O.position >>= 1),
                  O.position == 0 && ((O.position = s), (O.val = d(O.index++))),
                  (C |= (_ > 0 ? 1 : 0) * E),
                  (E <<= 1);
              switch ((v = C)) {
                case 0:
                  for (C = 0, w = Math.pow(2, 8), E = 1; E != w; )
                    (_ = O.val & O.position),
                      (O.position >>= 1),
                      O.position == 0 &&
                        ((O.position = s), (O.val = d(O.index++))),
                      (C |= (_ > 0 ? 1 : 0) * E),
                      (E <<= 1);
                  (p[h++] = n(C)), (v = h - 1), f--;
                  break;
                case 1:
                  for (C = 0, w = Math.pow(2, 16), E = 1; E != w; )
                    (_ = O.val & O.position),
                      (O.position >>= 1),
                      O.position == 0 &&
                        ((O.position = s), (O.val = d(O.index++))),
                      (C |= (_ > 0 ? 1 : 0) * E),
                      (E <<= 1);
                  (p[h++] = n(C)), (v = h - 1), f--;
                  break;
                case 2:
                  return b.join('');
              }
              if ((f == 0 && ((f = Math.pow(2, m)), m++), p[v])) y = p[v];
              else if (v === h) y = R + R.charAt(0);
              else return null;
              b.push(y),
                (p[h++] = R + y.charAt(0)),
                f--,
                (R = y),
                f == 0 && ((f = Math.pow(2, m)), m++);
            }
          },
        };
        return u;
      })();
      typeof define == 'function' && define.amd
        ? define(function () {
            return r;
          })
        : typeof t < 'u' && t != null
          ? (t.exports = r)
          : typeof angular < 'u' &&
            angular != null &&
            angular.module('LZString', []).factory('LZString', function () {
              return r;
            });
    },
  }),
  Jd = Object.defineProperty,
  B1 = Object.getOwnPropertyNames,
  x = (e, t) => Jd(e, 'name', { value: t, configurable: !0 }),
  k1 = (e, t) =>
    function () {
      return t || (0, e[B1(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Di = (e, t) => {
    for (var r in t) Jd(e, r, { get: t[r], enumerable: !0 });
  },
  D1 = k1({ '(disabled):util'() {} }),
  nt = {};
Di(nt, {
  addChainableMethod: () => Qi,
  addLengthGuard: () => gn,
  addMethod: () => Yi,
  addProperty: () => Ki,
  checkError: () => ke,
  compareByInspect: () => zn,
  eql: () => Cf,
  expectTypes: () => nf,
  flag: () => K,
  getActual: () => ga,
  getMessage: () => Hi,
  getName: () => va,
  getOperator: () => rl,
  getOwnEnumerableProperties: () => tl,
  getOwnEnumerablePropertySymbols: () => el,
  getPathInfo: () => Wi,
  hasProperty: () => ya,
  inspect: () => ee,
  isNaN: () => Vn,
  isProxyEnabled: () => bn,
  isRegExp: () => Gn,
  objDisplay: () => Ht,
  overwriteChainableMethod: () => Zi,
  overwriteMethod: () => Xi,
  overwriteProperty: () => Ji,
  proxify: () => qr,
  test: () => Fi,
  transferFlags: () => Ze,
  type: () => se,
});
var ke = {};
Di(ke, {
  compatibleConstructor: () => Zd,
  compatibleInstance: () => Qd,
  compatibleMessage: () => ef,
  getConstructorName: () => tf,
  getMessage: () => rf,
});
function ba(e) {
  return (
    e instanceof Error || Object.prototype.toString.call(e) === '[object Error]'
  );
}
x(ba, 'isErrorInstance');
function Xd(e) {
  return Object.prototype.toString.call(e) === '[object RegExp]';
}
x(Xd, 'isRegExp');
function Qd(e, t) {
  return ba(t) && e === t;
}
x(Qd, 'compatibleInstance');
function Zd(e, t) {
  return ba(t)
    ? e.constructor === t.constructor || e instanceof t.constructor
    : (typeof t == 'object' || typeof t == 'function') && t.prototype
      ? e.constructor === t || e instanceof t
      : !1;
}
x(Zd, 'compatibleConstructor');
function ef(e, t) {
  let r = typeof e == 'string' ? e : e.message;
  return Xd(t) ? t.test(r) : typeof t == 'string' ? r.indexOf(t) !== -1 : !1;
}
x(ef, 'compatibleMessage');
function tf(e) {
  let t = e;
  return (
    ba(e)
      ? (t = e.constructor.name)
      : typeof e == 'function' &&
        ((t = e.name), t === '' && (t = new e().name || t)),
    t
  );
}
x(tf, 'getConstructorName');
function rf(e) {
  let t = '';
  return e && e.message ? (t = e.message) : typeof e == 'string' && (t = e), t;
}
x(rf, 'getMessage');
function K(e, t, r) {
  var n = e.__flags || (e.__flags = Object.create(null));
  if (arguments.length === 3) n[t] = r;
  else return n[t];
}
x(K, 'flag');
function Fi(e, t) {
  var r = K(e, 'negate'),
    n = t[0];
  return r ? !n : n;
}
x(Fi, 'test');
function se(e) {
  if (typeof e > 'u') return 'undefined';
  if (e === null) return 'null';
  let t = e[Symbol.toStringTag];
  return typeof t == 'string'
    ? t
    : Object.prototype.toString.call(e).slice(8, -1);
}
x(se, 'type');
var F1 = 'captureStackTrace' in Error,
  Rn,
  ae =
    ((Rn = class extends Error {
      constructor(t = 'Unspecified AssertionError', r, n) {
        super(t);
        he(this, 'message');
        (this.message = t), F1 && Error.captureStackTrace(this, n || Rn);
        for (let a in r) a in this || (this[a] = r[a]);
      }
      get name() {
        return 'AssertionError';
      }
      get ok() {
        return !1;
      }
      toJSON(t) {
        return {
          ...this,
          name: this.name,
          message: this.message,
          ok: !1,
          stack: t !== !1 ? this.stack : void 0,
        };
      }
    }),
    x(Rn, 'AssertionError'),
    Rn);
function nf(e, t) {
  var r = K(e, 'message'),
    n = K(e, 'ssfi');
  (r = r ? r + ': ' : ''),
    (e = K(e, 'object')),
    (t = t.map(function (i) {
      return i.toLowerCase();
    })),
    t.sort();
  var a = t
      .map(function (i, l) {
        var u = ~['a', 'e', 'i', 'o', 'u'].indexOf(i.charAt(0)) ? 'an' : 'a',
          c = t.length > 1 && l === t.length - 1 ? 'or ' : '';
        return c + u + ' ' + i;
      })
      .join(', '),
    o = se(e).toLowerCase();
  if (
    !t.some(function (i) {
      return o === i;
    })
  )
    throw new ae(
      r + 'object tested must be ' + a + ', but ' + o + ' given',
      void 0,
      n,
    );
}
x(nf, 'expectTypes');
function ga(e, t) {
  return t.length > 4 ? t[4] : e._obj;
}
x(ga, 'getActual');
var Vs = {
    bold: ['1', '22'],
    dim: ['2', '22'],
    italic: ['3', '23'],
    underline: ['4', '24'],
    inverse: ['7', '27'],
    hidden: ['8', '28'],
    strike: ['9', '29'],
    black: ['30', '39'],
    red: ['31', '39'],
    green: ['32', '39'],
    yellow: ['33', '39'],
    blue: ['34', '39'],
    magenta: ['35', '39'],
    cyan: ['36', '39'],
    white: ['37', '39'],
    brightblack: ['30;1', '39'],
    brightred: ['31;1', '39'],
    brightgreen: ['32;1', '39'],
    brightyellow: ['33;1', '39'],
    brightblue: ['34;1', '39'],
    brightmagenta: ['35;1', '39'],
    brightcyan: ['36;1', '39'],
    brightwhite: ['37;1', '39'],
    grey: ['90', '39'],
  },
  U1 = {
    special: 'cyan',
    number: 'yellow',
    bigint: 'yellow',
    boolean: 'yellow',
    undefined: 'grey',
    null: 'bold',
    string: 'green',
    symbol: 'green',
    date: 'magenta',
    regexp: 'red',
  },
  br = '…';
function af(e, t) {
  let r = Vs[U1[t]] || Vs[t] || '';
  return r ? `\x1B[${r[0]}m${String(e)}\x1B[${r[1]}m` : String(e);
}
x(af, 'colorise');
function of(
  {
    showHidden: e = !1,
    depth: t = 2,
    colors: r = !1,
    customInspect: n = !0,
    showProxy: a = !1,
    maxArrayLength: o = 1 / 0,
    breakLength: i = 1 / 0,
    seen: l = [],
    truncate: u = 1 / 0,
    stylize: c = String,
  } = {},
  s,
) {
  let d = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!r,
    customInspect: !!n,
    showProxy: !!a,
    maxArrayLength: Number(o),
    breakLength: Number(i),
    truncate: Number(u),
    seen: l,
    inspect: s,
    stylize: c,
  };
  return d.colors && (d.stylize = af), d;
}
x(of, 'normaliseOptions');
function Et(e, t, r = br) {
  e = String(e);
  let n = r.length,
    a = e.length;
  return n > t && a > n ? r : a > t && a > n ? `${e.slice(0, t - n)}${r}` : e;
}
x(Et, 'truncate');
function Ve(e, t, r, n = ', ') {
  r = r || t.inspect;
  let a = e.length;
  if (a === 0) return '';
  let o = t.truncate,
    i = '',
    l = '',
    u = '';
  for (let c = 0; c < a; c += 1) {
    let s = c + 1 === e.length,
      d = c + 2 === e.length;
    u = `${br}(${e.length - c})`;
    let p = e[c];
    t.truncate = o - i.length - (s ? 0 : n.length);
    let f = l || r(p, t) + (s ? '' : n),
      h = i.length + f.length,
      m = h + u.length;
    if (
      (s && h > o && i.length + u.length <= o) ||
      (!s && !d && m > o) ||
      ((l = s ? '' : r(e[c + 1], t) + (d ? '' : n)),
      !s && d && m > o && h + l.length > o)
    )
      break;
    if (((i += f), !s && !d && h + l.length >= o)) {
      u = `${br}(${e.length - c - 1})`;
      break;
    }
    u = '';
  }
  return `${i}${u}`;
}
x(Ve, 'inspectList');
function lf(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)
    ? e
    : JSON.stringify(e)
        .replace(/'/g, "\\'")
        .replace(/\\"/g, '"')
        .replace(/(^"|"$)/g, "'");
}
x(lf, 'quoteComplexKey');
function gr([e, t], r) {
  return (
    (r.truncate -= 2),
    typeof e == 'string'
      ? (e = lf(e))
      : typeof e != 'number' && (e = `[${r.inspect(e, r)}]`),
    (r.truncate -= e.length),
    (t = r.inspect(t, r)),
    `${e}: ${t}`
  );
}
x(gr, 'inspectProperty');
function sf(e, t) {
  let r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length) return '[]';
  t.truncate -= 4;
  let n = Ve(e, t);
  t.truncate -= n.length;
  let a = '';
  return (
    r.length &&
      (a = Ve(
        r.map((o) => [o, e[o]]),
        t,
        gr,
      )),
    `[ ${n}${a ? `, ${a}` : ''} ]`
  );
}
x(sf, 'inspectArray');
var H1 = x(
  (e) =>
    typeof Buffer == 'function' && e instanceof Buffer
      ? 'Buffer'
      : e[Symbol.toStringTag]
        ? e[Symbol.toStringTag]
        : e.constructor.name,
  'getArrayName',
);
function tt(e, t) {
  let r = H1(e);
  t.truncate -= r.length + 4;
  let n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length) return `${r}[]`;
  let a = '';
  for (let i = 0; i < e.length; i++) {
    let l = `${t.stylize(Et(e[i], t.truncate), 'number')}${i === e.length - 1 ? '' : ', '}`;
    if (((t.truncate -= l.length), e[i] !== e.length && t.truncate <= 3)) {
      a += `${br}(${e.length - e[i] + 1})`;
      break;
    }
    a += l;
  }
  let o = '';
  return (
    n.length &&
      (o = Ve(
        n.map((i) => [i, e[i]]),
        t,
        gr,
      )),
    `${r}[ ${a}${o ? `, ${o}` : ''} ]`
  );
}
x(tt, 'inspectTypedArray');
function uf(e, t) {
  let r = e.toJSON();
  if (r === null) return 'Invalid Date';
  let n = r.split('T'),
    a = n[0];
  return t.stylize(`${a}T${Et(n[1], t.truncate - a.length - 1)}`, 'date');
}
x(uf, 'inspectDate');
function Ro(e, t) {
  let r = e[Symbol.toStringTag] || 'Function',
    n = e.name;
  return n
    ? t.stylize(`[${r} ${Et(n, t.truncate - 11)}]`, 'special')
    : t.stylize(`[${r}]`, 'special');
}
x(Ro, 'inspectFunction');
function cf([e, t], r) {
  return (
    (r.truncate -= 4),
    (e = r.inspect(e, r)),
    (r.truncate -= e.length),
    (t = r.inspect(t, r)),
    `${e} => ${t}`
  );
}
x(cf, 'inspectMapEntry');
function df(e) {
  let t = [];
  return (
    e.forEach((r, n) => {
      t.push([n, r]);
    }),
    t
  );
}
x(df, 'mapToEntries');
function ff(e, t) {
  return e.size - 1 <= 0
    ? 'Map{}'
    : ((t.truncate -= 7), `Map{ ${Ve(df(e), t, cf)} }`);
}
x(ff, 'inspectMap');
var z1 = Number.isNaN || ((e) => e !== e);
function To(e, t) {
  return z1(e)
    ? t.stylize('NaN', 'number')
    : e === 1 / 0
      ? t.stylize('Infinity', 'number')
      : e === -1 / 0
        ? t.stylize('-Infinity', 'number')
        : e === 0
          ? t.stylize(1 / e === 1 / 0 ? '+0' : '-0', 'number')
          : t.stylize(Et(String(e), t.truncate), 'number');
}
x(To, 'inspectNumber');
function So(e, t) {
  let r = Et(e.toString(), t.truncate - 1);
  return r !== br && (r += 'n'), t.stylize(r, 'bigint');
}
x(So, 'inspectBigInt');
function pf(e, t) {
  let r = e.toString().split('/')[2],
    n = t.truncate - (2 + r.length),
    a = e.source;
  return t.stylize(`/${Et(a, n)}/${r}`, 'regexp');
}
x(pf, 'inspectRegExp');
function hf(e) {
  let t = [];
  return (
    e.forEach((r) => {
      t.push(r);
    }),
    t
  );
}
x(hf, 'arrayFromSet');
function mf(e, t) {
  return e.size === 0 ? 'Set{}' : ((t.truncate -= 7), `Set{ ${Ve(hf(e), t)} }`);
}
x(mf, 'inspectSet');
var Gs = new RegExp(
    "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
    'g',
  ),
  V1 = {
    '\b': '\\b',
    '	': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    "'": "\\'",
    '\\': '\\\\',
  },
  G1 = 16,
  W1 = 4;
function bf(e) {
  return V1[e] || `\\u${`0000${e.charCodeAt(0).toString(G1)}`.slice(-W1)}`;
}
x(bf, 'escape');
function Po(e, t) {
  return (
    Gs.test(e) && (e = e.replace(Gs, bf)),
    t.stylize(`'${Et(e, t.truncate - 2)}'`, 'string')
  );
}
x(Po, 'inspectString');
function Oo(e) {
  return 'description' in Symbol.prototype
    ? e.description
      ? `Symbol(${e.description})`
      : 'Symbol()'
    : e.toString();
}
x(Oo, 'inspectSymbol');
var gf = x(() => 'Promise{…}', 'getPromiseValue');
try {
  let {
    getPromiseDetails: e,
    kPending: t,
    kRejected: r,
  } = process.binding('util');
  Array.isArray(e(Promise.resolve())) &&
    (gf = x((n, a) => {
      let [o, i] = e(n);
      return o === t
        ? 'Promise{<pending>}'
        : `Promise${o === r ? '!' : ''}{${a.inspect(i, a)}}`;
    }, 'getPromiseValue'));
} catch {}
var K1 = gf;
function Fr(e, t) {
  let r = Object.getOwnPropertyNames(e),
    n = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (r.length === 0 && n.length === 0) return '{}';
  if (((t.truncate -= 4), (t.seen = t.seen || []), t.seen.indexOf(e) >= 0))
    return '[Circular]';
  t.seen.push(e);
  let a = Ve(
      r.map((l) => [l, e[l]]),
      t,
      gr,
    ),
    o = Ve(
      n.map((l) => [l, e[l]]),
      t,
      gr,
    );
  t.seen.pop();
  let i = '';
  return a && o && (i = ', '), `{ ${a}${i}${o} }`;
}
x(Fr, 'inspectObject');
var Ka = typeof Symbol < 'u' && Symbol.toStringTag ? Symbol.toStringTag : !1;
function yf(e, t) {
  let r = '';
  return (
    Ka && Ka in e && (r = e[Ka]),
    (r = r || e.constructor.name),
    (!r || r === '_class') && (r = '<Anonymous Class>'),
    (t.truncate -= r.length),
    `${r}${Fr(e, t)}`
  );
}
x(yf, 'inspectClass');
function vf(e, t) {
  return e.length === 0
    ? 'Arguments[]'
    : ((t.truncate -= 13), `Arguments[ ${Ve(e, t)} ]`);
}
x(vf, 'inspectArguments');
var Y1 = [
  'stack',
  'line',
  'column',
  'name',
  'message',
  'fileName',
  'lineNumber',
  'columnNumber',
  'number',
  'description',
];
function _f(e, t) {
  let r = Object.getOwnPropertyNames(e).filter((i) => Y1.indexOf(i) === -1),
    n = e.name;
  t.truncate -= n.length;
  let a = '';
  typeof e.message == 'string'
    ? (a = Et(e.message, t.truncate))
    : r.unshift('message'),
    (a = a ? `: ${a}` : ''),
    (t.truncate -= a.length + 5);
  let o = Ve(
    r.map((i) => [i, e[i]]),
    t,
    gr,
  );
  return `${n}${a}${o ? ` { ${o} }` : ''}`;
}
x(_f, 'inspectObject');
function Ef([e, t], r) {
  return (
    (r.truncate -= 3),
    t
      ? `${r.stylize(String(e), 'yellow')}=${r.stylize(`"${t}"`, 'string')}`
      : `${r.stylize(String(e), 'yellow')}`
  );
}
x(Ef, 'inspectAttribute');
function Fn(e, t) {
  return Ve(
    e,
    t,
    Ui,
    `
`,
  );
}
x(Fn, 'inspectHTMLCollection');
function Ui(e, t) {
  let r = e.getAttributeNames(),
    n = e.tagName.toLowerCase(),
    a = t.stylize(`<${n}`, 'special'),
    o = t.stylize('>', 'special'),
    i = t.stylize(`</${n}>`, 'special');
  t.truncate -= n.length * 2 + 5;
  let l = '';
  r.length > 0 &&
    ((l += ' '),
    (l += Ve(
      r.map((s) => [s, e.getAttribute(s)]),
      t,
      Ef,
      ' ',
    ))),
    (t.truncate -= l.length);
  let u = t.truncate,
    c = Fn(e.children, t);
  return (
    c && c.length > u && (c = `${br}(${e.children.length})`),
    `${a}${l}${o}${c}${i}`
  );
}
x(Ui, 'inspectHTML');
var J1 = typeof Symbol == 'function' && typeof Symbol.for == 'function',
  Ya = J1 ? Symbol.for('chai/inspect') : '@@chai/inspect',
  or = !1;
try {
  let e = D1();
  or = e.inspect ? e.inspect.custom : !1;
} catch {
  or = !1;
}
var Ws = new WeakMap(),
  Ks = {},
  Ys = {
    undefined: (e, t) => t.stylize('undefined', 'undefined'),
    null: (e, t) => t.stylize('null', 'null'),
    boolean: (e, t) => t.stylize(String(e), 'boolean'),
    Boolean: (e, t) => t.stylize(String(e), 'boolean'),
    number: To,
    Number: To,
    bigint: So,
    BigInt: So,
    string: Po,
    String: Po,
    function: Ro,
    Function: Ro,
    symbol: Oo,
    Symbol: Oo,
    Array: sf,
    Date: uf,
    Map: ff,
    Set: mf,
    RegExp: pf,
    Promise: K1,
    WeakSet: (e, t) => t.stylize('WeakSet{…}', 'special'),
    WeakMap: (e, t) => t.stylize('WeakMap{…}', 'special'),
    Arguments: vf,
    Int8Array: tt,
    Uint8Array: tt,
    Uint8ClampedArray: tt,
    Int16Array: tt,
    Uint16Array: tt,
    Int32Array: tt,
    Uint32Array: tt,
    Float32Array: tt,
    Float64Array: tt,
    Generator: () => '',
    DataView: () => '',
    ArrayBuffer: () => '',
    Error: _f,
    HTMLCollection: Fn,
    NodeList: Fn,
  },
  X1 = x(
    (e, t, r) =>
      Ya in e && typeof e[Ya] == 'function'
        ? e[Ya](t)
        : or && or in e && typeof e[or] == 'function'
          ? e[or](t.depth, t)
          : 'inspect' in e && typeof e.inspect == 'function'
            ? e.inspect(t.depth, t)
            : 'constructor' in e && Ws.has(e.constructor)
              ? Ws.get(e.constructor)(e, t)
              : Ks[r]
                ? Ks[r](e, t)
                : '',
    'inspectCustom',
  ),
  Q1 = Object.prototype.toString;
function Un(e, t = {}) {
  let r = of(t, Un),
    { customInspect: n } = r,
    a = e === null ? 'null' : typeof e;
  if ((a === 'object' && (a = Q1.call(e).slice(8, -1)), a in Ys))
    return Ys[a](e, r);
  if (n && e) {
    let i = X1(e, r, a);
    if (i) return typeof i == 'string' ? i : Un(i, r);
  }
  let o = e ? Object.getPrototypeOf(e) : !1;
  return o === Object.prototype || o === null
    ? Fr(e, r)
    : e && typeof HTMLElement == 'function' && e instanceof HTMLElement
      ? Ui(e, r)
      : 'constructor' in e
        ? e.constructor !== Object
          ? yf(e, r)
          : Fr(e, r)
        : e === Object(e)
          ? Fr(e, r)
          : r.stylize(String(e), a);
}
x(Un, 'inspect');
var je = {
  includeStack: !1,
  showDiff: !0,
  truncateThreshold: 40,
  useProxy: !0,
  proxyExcludedKeys: ['then', 'catch', 'inspect', 'toJSON'],
  deepEqual: null,
};
function ee(e, t, r, n) {
  var a = {
    colors: n,
    depth: typeof r > 'u' ? 2 : r,
    showHidden: t,
    truncate: je.truncateThreshold ? je.truncateThreshold : 1 / 0,
  };
  return Un(e, a);
}
x(ee, 'inspect');
function Ht(e) {
  var t = ee(e),
    r = Object.prototype.toString.call(e);
  if (je.truncateThreshold && t.length >= je.truncateThreshold) {
    if (r === '[object Function]')
      return !e.name || e.name === ''
        ? '[Function]'
        : '[Function: ' + e.name + ']';
    if (r === '[object Array]') return '[ Array(' + e.length + ') ]';
    if (r === '[object Object]') {
      var n = Object.keys(e),
        a = n.length > 2 ? n.splice(0, 2).join(', ') + ', ...' : n.join(', ');
      return '{ Object (' + a + ') }';
    } else return t;
  } else return t;
}
x(Ht, 'objDisplay');
function Hi(e, t) {
  var r = K(e, 'negate'),
    n = K(e, 'object'),
    a = t[3],
    o = ga(e, t),
    i = r ? t[2] : t[1],
    l = K(e, 'message');
  return (
    typeof i == 'function' && (i = i()),
    (i = i || ''),
    (i = i
      .replace(/#\{this\}/g, function () {
        return Ht(n);
      })
      .replace(/#\{act\}/g, function () {
        return Ht(o);
      })
      .replace(/#\{exp\}/g, function () {
        return Ht(a);
      })),
    l ? l + ': ' + i : i
  );
}
x(Hi, 'getMessage');
function Ze(e, t, r) {
  var n = e.__flags || (e.__flags = Object.create(null));
  t.__flags || (t.__flags = Object.create(null)),
    (r = arguments.length === 3 ? r : !0);
  for (var a in n)
    (r ||
      (a !== 'object' && a !== 'ssfi' && a !== 'lockSsfi' && a != 'message')) &&
      (t.__flags[a] = n[a]);
}
x(Ze, 'transferFlags');
function Ao(e) {
  if (typeof e > 'u') return 'undefined';
  if (e === null) return 'null';
  let t = e[Symbol.toStringTag];
  return typeof t == 'string'
    ? t
    : Object.prototype.toString.call(e).slice(8, -1);
}
x(Ao, 'type');
function zi() {
  this._key = 'chai/deep-eql__' + Math.random() + Date.now();
}
x(zi, 'FakeMap');
zi.prototype = {
  get: x(function (e) {
    return e[this._key];
  }, 'get'),
  set: x(function (e, t) {
    Object.isExtensible(e) &&
      Object.defineProperty(e, this._key, { value: t, configurable: !0 });
  }, 'set'),
};
var wf = typeof WeakMap == 'function' ? WeakMap : zi;
function qo(e, t, r) {
  if (!r || Gt(e) || Gt(t)) return null;
  var n = r.get(e);
  if (n) {
    var a = n.get(t);
    if (typeof a == 'boolean') return a;
  }
  return null;
}
x(qo, 'memoizeCompare');
function Ir(e, t, r, n) {
  if (!(!r || Gt(e) || Gt(t))) {
    var a = r.get(e);
    a ? a.set(t, n) : ((a = new wf()), a.set(t, n), r.set(e, a));
  }
}
x(Ir, 'memoizeSet');
var Cf = mn;
function mn(e, t, r) {
  if (r && r.comparator) return xo(e, t, r);
  var n = Vi(e, t);
  return n !== null ? n : xo(e, t, r);
}
x(mn, 'deepEqual');
function Vi(e, t) {
  return e === t
    ? e !== 0 || 1 / e === 1 / t
    : e !== e && t !== t
      ? !0
      : Gt(e) || Gt(t)
        ? !1
        : null;
}
x(Vi, 'simpleEqual');
function xo(e, t, r) {
  (r = r || {}), (r.memoize = r.memoize === !1 ? !1 : r.memoize || new wf());
  var n = r && r.comparator,
    a = qo(e, t, r.memoize);
  if (a !== null) return a;
  var o = qo(t, e, r.memoize);
  if (o !== null) return o;
  if (n) {
    var i = n(e, t);
    if (i === !1 || i === !0) return Ir(e, t, r.memoize, i), i;
    var l = Vi(e, t);
    if (l !== null) return l;
  }
  var u = Ao(e);
  if (u !== Ao(t)) return Ir(e, t, r.memoize, !1), !1;
  Ir(e, t, r.memoize, !0);
  var c = Rf(e, t, u, r);
  return Ir(e, t, r.memoize, c), c;
}
x(xo, 'extensiveDeepEqual');
function Rf(e, t, r, n) {
  switch (r) {
    case 'String':
    case 'Number':
    case 'Boolean':
    case 'Date':
      return mn(e.valueOf(), t.valueOf());
    case 'Promise':
    case 'Symbol':
    case 'function':
    case 'WeakMap':
    case 'WeakSet':
      return e === t;
    case 'Error':
      return Gi(e, t, ['name', 'message', 'code'], n);
    case 'Arguments':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'Array':
      return Mt(e, t, n);
    case 'RegExp':
      return Tf(e, t);
    case 'Generator':
      return Sf(e, t, n);
    case 'DataView':
      return Mt(new Uint8Array(e.buffer), new Uint8Array(t.buffer), n);
    case 'ArrayBuffer':
      return Mt(new Uint8Array(e), new Uint8Array(t), n);
    case 'Set':
      return Mo(e, t, n);
    case 'Map':
      return Mo(e, t, n);
    case 'Temporal.PlainDate':
    case 'Temporal.PlainTime':
    case 'Temporal.PlainDateTime':
    case 'Temporal.Instant':
    case 'Temporal.ZonedDateTime':
    case 'Temporal.PlainYearMonth':
    case 'Temporal.PlainMonthDay':
      return e.equals(t);
    case 'Temporal.Duration':
      return e.total('nanoseconds') === t.total('nanoseconds');
    case 'Temporal.TimeZone':
    case 'Temporal.Calendar':
      return e.toString() === t.toString();
    default:
      return Of(e, t, n);
  }
}
x(Rf, 'extensiveDeepEqualByType');
function Tf(e, t) {
  return e.toString() === t.toString();
}
x(Tf, 'regexpEqual');
function Mo(e, t, r) {
  if (e.size !== t.size) return !1;
  if (e.size === 0) return !0;
  var n = [],
    a = [];
  return (
    e.forEach(
      x(function (o, i) {
        n.push([o, i]);
      }, 'gatherEntries'),
    ),
    t.forEach(
      x(function (o, i) {
        a.push([o, i]);
      }, 'gatherEntries'),
    ),
    Mt(n.sort(), a.sort(), r)
  );
}
x(Mo, 'entriesEqual');
function Mt(e, t, r) {
  var n = e.length;
  if (n !== t.length) return !1;
  if (n === 0) return !0;
  for (var a = -1; ++a < n; ) if (mn(e[a], t[a], r) === !1) return !1;
  return !0;
}
x(Mt, 'iterableEqual');
function Sf(e, t, r) {
  return Mt(Hn(e), Hn(t), r);
}
x(Sf, 'generatorEqual');
function Pf(e) {
  return (
    typeof Symbol < 'u' &&
    typeof e == 'object' &&
    typeof Symbol.iterator < 'u' &&
    typeof e[Symbol.iterator] == 'function'
  );
}
x(Pf, 'hasIteratorFunction');
function $o(e) {
  if (Pf(e))
    try {
      return Hn(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
x($o, 'getIteratorEntries');
function Hn(e) {
  for (var t = e.next(), r = [t.value]; t.done === !1; )
    (t = e.next()), r.push(t.value);
  return r;
}
x(Hn, 'getGeneratorEntries');
function No(e) {
  var t = [];
  for (var r in e) t.push(r);
  return t;
}
x(No, 'getEnumerableKeys');
function jo(e) {
  for (
    var t = [], r = Object.getOwnPropertySymbols(e), n = 0;
    n < r.length;
    n += 1
  ) {
    var a = r[n];
    Object.getOwnPropertyDescriptor(e, a).enumerable && t.push(a);
  }
  return t;
}
x(jo, 'getEnumerableSymbols');
function Gi(e, t, r, n) {
  var a = r.length;
  if (a === 0) return !0;
  for (var o = 0; o < a; o += 1) if (mn(e[r[o]], t[r[o]], n) === !1) return !1;
  return !0;
}
x(Gi, 'keysEqual');
function Of(e, t, r) {
  var n = No(e),
    a = No(t),
    o = jo(e),
    i = jo(t);
  if (((n = n.concat(o)), (a = a.concat(i)), n.length && n.length === a.length))
    return Mt(Io(n).sort(), Io(a).sort()) === !1 ? !1 : Gi(e, t, n, r);
  var l = $o(e),
    u = $o(t);
  return l.length && l.length === u.length
    ? (l.sort(), u.sort(), Mt(l, u, r))
    : n.length === 0 && l.length === 0 && a.length === 0 && u.length === 0;
}
x(Of, 'objectEqual');
function Gt(e) {
  return e === null || typeof e != 'object';
}
x(Gt, 'isPrimitive');
function Io(e) {
  return e.map(
    x(function (t) {
      return typeof t == 'symbol' ? t.toString() : t;
    }, 'mapSymbol'),
  );
}
x(Io, 'mapSymbols');
function ya(e, t) {
  return typeof e > 'u' || e === null ? !1 : t in Object(e);
}
x(ya, 'hasProperty');
function Af(e) {
  return e
    .replace(/([^\\])\[/g, '$1.[')
    .match(/(\\\.|[^.]+?)+/g)
    .map((t) => {
      if (t === 'constructor' || t === '__proto__' || t === 'prototype')
        return {};
      let r = /^\[(\d+)\]$/.exec(t),
        n = null;
      return (
        r
          ? (n = { i: parseFloat(r[1]) })
          : (n = { p: t.replace(/\\([.[\]])/g, '$1') }),
        n
      );
    });
}
x(Af, 'parsePath');
function Lo(e, t, r) {
  let n = e,
    a = null;
  r = typeof r > 'u' ? t.length : r;
  for (let o = 0; o < r; o++) {
    let i = t[o];
    n &&
      (typeof i.p > 'u' ? (n = n[i.i]) : (n = n[i.p]), o === r - 1 && (a = n));
  }
  return a;
}
x(Lo, 'internalGetPathValue');
function Wi(e, t) {
  let r = Af(t),
    n = r[r.length - 1],
    a = {
      parent: r.length > 1 ? Lo(e, r, r.length - 1) : e,
      name: n.p || n.i,
      value: Lo(e, r),
    };
  return (a.exists = ya(a.parent, a.name)), a;
}
x(Wi, 'getPathInfo');
function P(e, t, r, n) {
  return (
    K(this, 'ssfi', r || P),
    K(this, 'lockSsfi', n),
    K(this, 'object', e),
    K(this, 'message', t),
    K(this, 'eql', je.deepEqual || Cf),
    qr(this)
  );
}
x(P, 'Assertion');
Object.defineProperty(P, 'includeStack', {
  get: function () {
    return (
      console.warn(
        'Assertion.includeStack is deprecated, use chai.config.includeStack instead.',
      ),
      je.includeStack
    );
  },
  set: function (e) {
    console.warn(
      'Assertion.includeStack is deprecated, use chai.config.includeStack instead.',
    ),
      (je.includeStack = e);
  },
});
Object.defineProperty(P, 'showDiff', {
  get: function () {
    return (
      console.warn(
        'Assertion.showDiff is deprecated, use chai.config.showDiff instead.',
      ),
      je.showDiff
    );
  },
  set: function (e) {
    console.warn(
      'Assertion.showDiff is deprecated, use chai.config.showDiff instead.',
    ),
      (je.showDiff = e);
  },
});
P.addProperty = function (e, t) {
  Ki(this.prototype, e, t);
};
P.addMethod = function (e, t) {
  Yi(this.prototype, e, t);
};
P.addChainableMethod = function (e, t, r) {
  Qi(this.prototype, e, t, r);
};
P.overwriteProperty = function (e, t) {
  Ji(this.prototype, e, t);
};
P.overwriteMethod = function (e, t) {
  Xi(this.prototype, e, t);
};
P.overwriteChainableMethod = function (e, t, r) {
  Zi(this.prototype, e, t, r);
};
P.prototype.assert = function (e, t, r, n, a, o) {
  var i = Fi(this, arguments);
  if (
    (o !== !1 && (o = !0),
    n === void 0 && a === void 0 && (o = !1),
    je.showDiff !== !0 && (o = !1),
    !i)
  ) {
    t = Hi(this, arguments);
    var l = ga(this, arguments),
      u = { actual: l, expected: n, showDiff: o },
      c = rl(this, arguments);
    throw (
      (c && (u.operator = c),
      new ae(t, u, je.includeStack ? this.assert : K(this, 'ssfi')))
    );
  }
};
Object.defineProperty(P.prototype, '_obj', {
  get: function () {
    return K(this, 'object');
  },
  set: function (e) {
    K(this, 'object', e);
  },
});
function bn() {
  return je.useProxy && typeof Proxy < 'u' && typeof Reflect < 'u';
}
x(bn, 'isProxyEnabled');
function Ki(e, t, r) {
  (r = r === void 0 ? function () {} : r),
    Object.defineProperty(e, t, {
      get: x(function n() {
        !bn() && !K(this, 'lockSsfi') && K(this, 'ssfi', n);
        var a = r.call(this);
        if (a !== void 0) return a;
        var o = new P();
        return Ze(this, o), o;
      }, 'propertyGetter'),
      configurable: !0,
    });
}
x(Ki, 'addProperty');
var Z1 = Object.getOwnPropertyDescriptor(function () {}, 'length');
function gn(e, t, r) {
  return (
    Z1.configurable &&
      Object.defineProperty(e, 'length', {
        get: function () {
          throw Error(
            r
              ? 'Invalid Chai property: ' +
                  t +
                  '.length. Due to a compatibility issue, "length" cannot directly follow "' +
                  t +
                  '". Use "' +
                  t +
                  '.lengthOf" instead.'
              : 'Invalid Chai property: ' +
                  t +
                  '.length. See docs for proper usage of "' +
                  t +
                  '".',
          );
        },
      }),
    e
  );
}
x(gn, 'addLengthGuard');
function qf(e) {
  var t = Object.getOwnPropertyNames(e);
  function r(a) {
    t.indexOf(a) === -1 && t.push(a);
  }
  x(r, 'addProperty');
  for (var n = Object.getPrototypeOf(e); n !== null; )
    Object.getOwnPropertyNames(n).forEach(r), (n = Object.getPrototypeOf(n));
  return t;
}
x(qf, 'getProperties');
var Js = ['__flags', '__methods', '_obj', 'assert'];
function qr(e, t) {
  return bn()
    ? new Proxy(e, {
        get: x(function r(n, a) {
          if (
            typeof a == 'string' &&
            je.proxyExcludedKeys.indexOf(a) === -1 &&
            !Reflect.has(n, a)
          ) {
            if (t)
              throw Error(
                'Invalid Chai property: ' +
                  t +
                  '.' +
                  a +
                  '. See docs for proper usage of "' +
                  t +
                  '".',
              );
            var o = null,
              i = 4;
            throw (
              (qf(n).forEach(function (l) {
                if (
                  !Object.prototype.hasOwnProperty(l) &&
                  Js.indexOf(l) === -1
                ) {
                  var u = xf(a, l, i);
                  u < i && ((o = l), (i = u));
                }
              }),
              Error(
                o !== null
                  ? 'Invalid Chai property: ' +
                      a +
                      '. Did you mean "' +
                      o +
                      '"?'
                  : 'Invalid Chai property: ' + a,
              ))
            );
          }
          return (
            Js.indexOf(a) === -1 && !K(n, 'lockSsfi') && K(n, 'ssfi', r),
            Reflect.get(n, a)
          );
        }, 'proxyGetter'),
      })
    : e;
}
x(qr, 'proxify');
function xf(e, t, r) {
  if (Math.abs(e.length - t.length) >= r) return r;
  for (var n = [], a = 0; a <= e.length; a++)
    (n[a] = Array(t.length + 1).fill(0)), (n[a][0] = a);
  for (var o = 0; o < t.length; o++) n[0][o] = o;
  for (var a = 1; a <= e.length; a++)
    for (var i = e.charCodeAt(a - 1), o = 1; o <= t.length; o++) {
      if (Math.abs(a - o) >= r) {
        n[a][o] = r;
        continue;
      }
      n[a][o] = Math.min(
        n[a - 1][o] + 1,
        n[a][o - 1] + 1,
        n[a - 1][o - 1] + (i === t.charCodeAt(o - 1) ? 0 : 1),
      );
    }
  return n[e.length][t.length];
}
x(xf, 'stringDistanceCapped');
function Yi(e, t, r) {
  var n = x(function () {
    K(this, 'lockSsfi') || K(this, 'ssfi', n);
    var a = r.apply(this, arguments);
    if (a !== void 0) return a;
    var o = new P();
    return Ze(this, o), o;
  }, 'methodWrapper');
  gn(n, t, !1), (e[t] = qr(n, t));
}
x(Yi, 'addMethod');
function Ji(e, t, r) {
  var n = Object.getOwnPropertyDescriptor(e, t),
    a = x(function () {}, '_super');
  n && typeof n.get == 'function' && (a = n.get),
    Object.defineProperty(e, t, {
      get: x(function o() {
        !bn() && !K(this, 'lockSsfi') && K(this, 'ssfi', o);
        var i = K(this, 'lockSsfi');
        K(this, 'lockSsfi', !0);
        var l = r(a).call(this);
        if ((K(this, 'lockSsfi', i), l !== void 0)) return l;
        var u = new P();
        return Ze(this, u), u;
      }, 'overwritingPropertyGetter'),
      configurable: !0,
    });
}
x(Ji, 'overwriteProperty');
function Xi(e, t, r) {
  var n = e[t],
    a = x(function () {
      throw new Error(t + ' is not a function');
    }, '_super');
  n && typeof n == 'function' && (a = n);
  var o = x(function () {
    K(this, 'lockSsfi') || K(this, 'ssfi', o);
    var i = K(this, 'lockSsfi');
    K(this, 'lockSsfi', !0);
    var l = r(a).apply(this, arguments);
    if ((K(this, 'lockSsfi', i), l !== void 0)) return l;
    var u = new P();
    return Ze(this, u), u;
  }, 'overwritingMethodWrapper');
  gn(o, t, !1), (e[t] = qr(o, t));
}
x(Xi, 'overwriteMethod');
var eC = typeof Object.setPrototypeOf == 'function',
  Xs = x(function () {}, 'testFn'),
  tC = Object.getOwnPropertyNames(Xs).filter(function (e) {
    var t = Object.getOwnPropertyDescriptor(Xs, e);
    return typeof t != 'object' ? !0 : !t.configurable;
  }),
  rC = Function.prototype.call,
  nC = Function.prototype.apply;
function Qi(e, t, r, n) {
  typeof n != 'function' && (n = x(function () {}, 'chainingBehavior'));
  var a = { method: r, chainingBehavior: n };
  e.__methods || (e.__methods = {}),
    (e.__methods[t] = a),
    Object.defineProperty(e, t, {
      get: x(function () {
        a.chainingBehavior.call(this);
        var o = x(function () {
          K(this, 'lockSsfi') || K(this, 'ssfi', o);
          var u = a.method.apply(this, arguments);
          if (u !== void 0) return u;
          var c = new P();
          return Ze(this, c), c;
        }, 'chainableMethodWrapper');
        if ((gn(o, t, !0), eC)) {
          var i = Object.create(this);
          (i.call = rC), (i.apply = nC), Object.setPrototypeOf(o, i);
        } else {
          var l = Object.getOwnPropertyNames(e);
          l.forEach(function (u) {
            if (tC.indexOf(u) === -1) {
              var c = Object.getOwnPropertyDescriptor(e, u);
              Object.defineProperty(o, u, c);
            }
          });
        }
        return Ze(this, o), qr(o);
      }, 'chainableMethodGetter'),
      configurable: !0,
    });
}
x(Qi, 'addChainableMethod');
function Zi(e, t, r, n) {
  var a = e.__methods[t],
    o = a.chainingBehavior;
  a.chainingBehavior = x(function () {
    var l = n(o).call(this);
    if (l !== void 0) return l;
    var u = new P();
    return Ze(this, u), u;
  }, 'overwritingChainableMethodGetter');
  var i = a.method;
  a.method = x(function () {
    var l = r(i).apply(this, arguments);
    if (l !== void 0) return l;
    var u = new P();
    return Ze(this, u), u;
  }, 'overwritingChainableMethodWrapper');
}
x(Zi, 'overwriteChainableMethod');
function zn(e, t) {
  return ee(e) < ee(t) ? -1 : 1;
}
x(zn, 'compareByInspect');
function el(e) {
  return typeof Object.getOwnPropertySymbols != 'function'
    ? []
    : Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
}
x(el, 'getOwnEnumerablePropertySymbols');
function tl(e) {
  return Object.keys(e).concat(el(e));
}
x(tl, 'getOwnEnumerableProperties');
function Mf(e) {
  return e !== e;
}
x(Mf, '_isNaN');
var Vn = Number.isNaN || Mf;
function $f(e) {
  var t = se(e),
    r = ['Array', 'Object', 'Function'];
  return r.indexOf(t) !== -1;
}
x($f, 'isObjectType');
function rl(e, t) {
  var r = K(e, 'operator'),
    n = K(e, 'negate'),
    a = t[3],
    o = n ? t[2] : t[1];
  if (r) return r;
  if (
    (typeof o == 'function' && (o = o()),
    (o = o || ''),
    !!o && !/\shave\s/.test(o))
  ) {
    var i = $f(a);
    return /\snot\s/.test(o)
      ? i
        ? 'notDeepStrictEqual'
        : 'notStrictEqual'
      : i
        ? 'deepStrictEqual'
        : 'strictEqual';
  }
}
x(rl, 'getOperator');
function va(e) {
  return e.name;
}
x(va, 'getName');
function Gn(e) {
  return Object.prototype.toString.call(e) === '[object RegExp]';
}
x(Gn, 'isRegExp');
var { flag: A } = nt;
[
  'to',
  'be',
  'been',
  'is',
  'and',
  'has',
  'have',
  'with',
  'that',
  'which',
  'at',
  'of',
  'same',
  'but',
  'does',
  'still',
  'also',
].forEach(function (e) {
  P.addProperty(e);
});
P.addProperty('not', function () {
  A(this, 'negate', !0);
});
P.addProperty('deep', function () {
  A(this, 'deep', !0);
});
P.addProperty('nested', function () {
  A(this, 'nested', !0);
});
P.addProperty('own', function () {
  A(this, 'own', !0);
});
P.addProperty('ordered', function () {
  A(this, 'ordered', !0);
});
P.addProperty('any', function () {
  A(this, 'any', !0), A(this, 'all', !1);
});
P.addProperty('all', function () {
  A(this, 'all', !0), A(this, 'any', !1);
});
var Qs = {
  function: [
    'function',
    'asyncfunction',
    'generatorfunction',
    'asyncgeneratorfunction',
  ],
  asyncfunction: ['asyncfunction', 'asyncgeneratorfunction'],
  generatorfunction: ['generatorfunction', 'asyncgeneratorfunction'],
  asyncgeneratorfunction: ['asyncgeneratorfunction'],
};
function nl(e, t) {
  t && A(this, 'message', t), (e = e.toLowerCase());
  var r = A(this, 'object'),
    n = ~['a', 'e', 'i', 'o', 'u'].indexOf(e.charAt(0)) ? 'an ' : 'a ';
  let a = se(r).toLowerCase();
  Qs.function.includes(e)
    ? this.assert(
        Qs[e].includes(a),
        'expected #{this} to be ' + n + e,
        'expected #{this} not to be ' + n + e,
      )
    : this.assert(
        e === a,
        'expected #{this} to be ' + n + e,
        'expected #{this} not to be ' + n + e,
      );
}
x(nl, 'an');
P.addChainableMethod('an', nl);
P.addChainableMethod('a', nl);
function Nf(e, t) {
  return (Vn(e) && Vn(t)) || e === t;
}
x(Nf, 'SameValueZero');
function yn() {
  A(this, 'contains', !0);
}
x(yn, 'includeChainingBehavior');
function vn(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object'),
    n = se(r).toLowerCase(),
    a = A(this, 'message'),
    o = A(this, 'negate'),
    i = A(this, 'ssfi'),
    l = A(this, 'deep'),
    u = l ? 'deep ' : '',
    c = l ? A(this, 'eql') : Nf;
  a = a ? a + ': ' : '';
  var s = !1;
  switch (n) {
    case 'string':
      s = r.indexOf(e) !== -1;
      break;
    case 'weakset':
      if (l)
        throw new ae(a + 'unable to use .deep.include with WeakSet', void 0, i);
      s = r.has(e);
      break;
    case 'map':
      r.forEach(function (h) {
        s = s || c(h, e);
      });
      break;
    case 'set':
      l
        ? r.forEach(function (h) {
            s = s || c(h, e);
          })
        : (s = r.has(e));
      break;
    case 'array':
      l
        ? (s = r.some(function (h) {
            return c(h, e);
          }))
        : (s = r.indexOf(e) !== -1);
      break;
    default:
      if (e !== Object(e))
        throw new ae(
          a +
            'the given combination of arguments (' +
            n +
            ' and ' +
            se(e).toLowerCase() +
            ') is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a ' +
            se(e).toLowerCase(),
          void 0,
          i,
        );
      var d = Object.keys(e),
        p = null,
        f = 0;
      if (
        (d.forEach(function (h) {
          var m = new P(r);
          if ((Ze(this, m, !0), A(m, 'lockSsfi', !0), !o || d.length === 1)) {
            m.property(h, e[h]);
            return;
          }
          try {
            m.property(h, e[h]);
          } catch (y) {
            if (!ke.compatibleConstructor(y, ae)) throw y;
            p === null && (p = y), f++;
          }
        }, this),
        o && d.length > 1 && f === d.length)
      )
        throw p;
      return;
  }
  this.assert(
    s,
    'expected #{this} to ' + u + 'include ' + ee(e),
    'expected #{this} to not ' + u + 'include ' + ee(e),
  );
}
x(vn, 'include');
P.addChainableMethod('include', vn, yn);
P.addChainableMethod('contain', vn, yn);
P.addChainableMethod('contains', vn, yn);
P.addChainableMethod('includes', vn, yn);
P.addProperty('ok', function () {
  this.assert(
    A(this, 'object'),
    'expected #{this} to be truthy',
    'expected #{this} to be falsy',
  );
});
P.addProperty('true', function () {
  this.assert(
    A(this, 'object') === !0,
    'expected #{this} to be true',
    'expected #{this} to be false',
    !A(this, 'negate'),
  );
});
P.addProperty('callable', function () {
  let e = A(this, 'object'),
    t = A(this, 'ssfi'),
    r = A(this, 'message'),
    n = r ? `${r}: ` : '',
    a = A(this, 'negate'),
    o = a
      ? `${n}expected ${ee(e)} not to be a callable function`
      : `${n}expected ${ee(e)} to be a callable function`,
    i = [
      'Function',
      'AsyncFunction',
      'GeneratorFunction',
      'AsyncGeneratorFunction',
    ].includes(se(e));
  if ((i && a) || (!i && !a)) throw new ae(o, void 0, t);
});
P.addProperty('false', function () {
  this.assert(
    A(this, 'object') === !1,
    'expected #{this} to be false',
    'expected #{this} to be true',
    !!A(this, 'negate'),
  );
});
P.addProperty('null', function () {
  this.assert(
    A(this, 'object') === null,
    'expected #{this} to be null',
    'expected #{this} not to be null',
  );
});
P.addProperty('undefined', function () {
  this.assert(
    A(this, 'object') === void 0,
    'expected #{this} to be undefined',
    'expected #{this} not to be undefined',
  );
});
P.addProperty('NaN', function () {
  this.assert(
    Vn(A(this, 'object')),
    'expected #{this} to be NaN',
    'expected #{this} not to be NaN',
  );
});
function al() {
  var e = A(this, 'object');
  this.assert(
    e != null,
    'expected #{this} to exist',
    'expected #{this} to not exist',
  );
}
x(al, 'assertExist');
P.addProperty('exist', al);
P.addProperty('exists', al);
P.addProperty('empty', function () {
  var e = A(this, 'object'),
    t = A(this, 'ssfi'),
    r = A(this, 'message'),
    n;
  switch (((r = r ? r + ': ' : ''), se(e).toLowerCase())) {
    case 'array':
    case 'string':
      n = e.length;
      break;
    case 'map':
    case 'set':
      n = e.size;
      break;
    case 'weakmap':
    case 'weakset':
      throw new ae(r + '.empty was passed a weak collection', void 0, t);
    case 'function':
      var a = r + '.empty was passed a function ' + va(e);
      throw new ae(a.trim(), void 0, t);
    default:
      if (e !== Object(e))
        throw new ae(
          r + '.empty was passed non-string primitive ' + ee(e),
          void 0,
          t,
        );
      n = Object.keys(e).length;
  }
  this.assert(
    n === 0,
    'expected #{this} to be empty',
    'expected #{this} not to be empty',
  );
});
function ol() {
  var e = A(this, 'object'),
    t = se(e);
  this.assert(
    t === 'Arguments',
    'expected #{this} to be arguments but got ' + t,
    'expected #{this} to not be arguments',
  );
}
x(ol, 'checkArguments');
P.addProperty('arguments', ol);
P.addProperty('Arguments', ol);
function _a(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object');
  if (A(this, 'deep')) {
    var n = A(this, 'lockSsfi');
    A(this, 'lockSsfi', !0), this.eql(e), A(this, 'lockSsfi', n);
  } else
    this.assert(
      e === r,
      'expected #{this} to equal #{exp}',
      'expected #{this} to not equal #{exp}',
      e,
      this._obj,
      !0,
    );
}
x(_a, 'assertEqual');
P.addMethod('equal', _a);
P.addMethod('equals', _a);
P.addMethod('eq', _a);
function il(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'eql');
  this.assert(
    r(e, A(this, 'object')),
    'expected #{this} to deeply equal #{exp}',
    'expected #{this} to not deeply equal #{exp}',
    e,
    this._obj,
    !0,
  );
}
x(il, 'assertEql');
P.addMethod('eql', il);
P.addMethod('eqls', il);
function Ea(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object'),
    n = A(this, 'doLength'),
    a = A(this, 'message'),
    o = a ? a + ': ' : '',
    i = A(this, 'ssfi'),
    l = se(r).toLowerCase(),
    u = se(e).toLowerCase(),
    c,
    s = !0;
  if (
    (n &&
      l !== 'map' &&
      l !== 'set' &&
      new P(r, a, i, !0).to.have.property('length'),
    !n && l === 'date' && u !== 'date')
  )
    c = o + 'the argument to above must be a date';
  else if (u !== 'number' && (n || l === 'number'))
    c = o + 'the argument to above must be a number';
  else if (!n && l !== 'date' && l !== 'number') {
    var d = l === 'string' ? "'" + r + "'" : r;
    c = o + 'expected ' + d + ' to be a number or a date';
  } else s = !1;
  if (s) throw new ae(c, void 0, i);
  if (n) {
    var p = 'length',
      f;
    l === 'map' || l === 'set' ? ((p = 'size'), (f = r.size)) : (f = r.length),
      this.assert(
        f > e,
        'expected #{this} to have a ' + p + ' above #{exp} but got #{act}',
        'expected #{this} to not have a ' + p + ' above #{exp}',
        e,
        f,
      );
  } else
    this.assert(
      r > e,
      'expected #{this} to be above #{exp}',
      'expected #{this} to be at most #{exp}',
      e,
    );
}
x(Ea, 'assertAbove');
P.addMethod('above', Ea);
P.addMethod('gt', Ea);
P.addMethod('greaterThan', Ea);
function wa(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object'),
    n = A(this, 'doLength'),
    a = A(this, 'message'),
    o = a ? a + ': ' : '',
    i = A(this, 'ssfi'),
    l = se(r).toLowerCase(),
    u = se(e).toLowerCase(),
    c,
    s = !0;
  if (
    (n &&
      l !== 'map' &&
      l !== 'set' &&
      new P(r, a, i, !0).to.have.property('length'),
    !n && l === 'date' && u !== 'date')
  )
    c = o + 'the argument to least must be a date';
  else if (u !== 'number' && (n || l === 'number'))
    c = o + 'the argument to least must be a number';
  else if (!n && l !== 'date' && l !== 'number') {
    var d = l === 'string' ? "'" + r + "'" : r;
    c = o + 'expected ' + d + ' to be a number or a date';
  } else s = !1;
  if (s) throw new ae(c, void 0, i);
  if (n) {
    var p = 'length',
      f;
    l === 'map' || l === 'set' ? ((p = 'size'), (f = r.size)) : (f = r.length),
      this.assert(
        f >= e,
        'expected #{this} to have a ' + p + ' at least #{exp} but got #{act}',
        'expected #{this} to have a ' + p + ' below #{exp}',
        e,
        f,
      );
  } else
    this.assert(
      r >= e,
      'expected #{this} to be at least #{exp}',
      'expected #{this} to be below #{exp}',
      e,
    );
}
x(wa, 'assertLeast');
P.addMethod('least', wa);
P.addMethod('gte', wa);
P.addMethod('greaterThanOrEqual', wa);
function Ca(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object'),
    n = A(this, 'doLength'),
    a = A(this, 'message'),
    o = a ? a + ': ' : '',
    i = A(this, 'ssfi'),
    l = se(r).toLowerCase(),
    u = se(e).toLowerCase(),
    c,
    s = !0;
  if (
    (n &&
      l !== 'map' &&
      l !== 'set' &&
      new P(r, a, i, !0).to.have.property('length'),
    !n && l === 'date' && u !== 'date')
  )
    c = o + 'the argument to below must be a date';
  else if (u !== 'number' && (n || l === 'number'))
    c = o + 'the argument to below must be a number';
  else if (!n && l !== 'date' && l !== 'number') {
    var d = l === 'string' ? "'" + r + "'" : r;
    c = o + 'expected ' + d + ' to be a number or a date';
  } else s = !1;
  if (s) throw new ae(c, void 0, i);
  if (n) {
    var p = 'length',
      f;
    l === 'map' || l === 'set' ? ((p = 'size'), (f = r.size)) : (f = r.length),
      this.assert(
        f < e,
        'expected #{this} to have a ' + p + ' below #{exp} but got #{act}',
        'expected #{this} to not have a ' + p + ' below #{exp}',
        e,
        f,
      );
  } else
    this.assert(
      r < e,
      'expected #{this} to be below #{exp}',
      'expected #{this} to be at least #{exp}',
      e,
    );
}
x(Ca, 'assertBelow');
P.addMethod('below', Ca);
P.addMethod('lt', Ca);
P.addMethod('lessThan', Ca);
function Ra(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object'),
    n = A(this, 'doLength'),
    a = A(this, 'message'),
    o = a ? a + ': ' : '',
    i = A(this, 'ssfi'),
    l = se(r).toLowerCase(),
    u = se(e).toLowerCase(),
    c,
    s = !0;
  if (
    (n &&
      l !== 'map' &&
      l !== 'set' &&
      new P(r, a, i, !0).to.have.property('length'),
    !n && l === 'date' && u !== 'date')
  )
    c = o + 'the argument to most must be a date';
  else if (u !== 'number' && (n || l === 'number'))
    c = o + 'the argument to most must be a number';
  else if (!n && l !== 'date' && l !== 'number') {
    var d = l === 'string' ? "'" + r + "'" : r;
    c = o + 'expected ' + d + ' to be a number or a date';
  } else s = !1;
  if (s) throw new ae(c, void 0, i);
  if (n) {
    var p = 'length',
      f;
    l === 'map' || l === 'set' ? ((p = 'size'), (f = r.size)) : (f = r.length),
      this.assert(
        f <= e,
        'expected #{this} to have a ' + p + ' at most #{exp} but got #{act}',
        'expected #{this} to have a ' + p + ' above #{exp}',
        e,
        f,
      );
  } else
    this.assert(
      r <= e,
      'expected #{this} to be at most #{exp}',
      'expected #{this} to be above #{exp}',
      e,
    );
}
x(Ra, 'assertMost');
P.addMethod('most', Ra);
P.addMethod('lte', Ra);
P.addMethod('lessThanOrEqual', Ra);
P.addMethod('within', function (e, t, r) {
  r && A(this, 'message', r);
  var n = A(this, 'object'),
    a = A(this, 'doLength'),
    o = A(this, 'message'),
    i = o ? o + ': ' : '',
    l = A(this, 'ssfi'),
    u = se(n).toLowerCase(),
    c = se(e).toLowerCase(),
    s = se(t).toLowerCase(),
    d,
    p = !0,
    f =
      c === 'date' && s === 'date'
        ? e.toISOString() + '..' + t.toISOString()
        : e + '..' + t;
  if (
    (a &&
      u !== 'map' &&
      u !== 'set' &&
      new P(n, o, l, !0).to.have.property('length'),
    !a && u === 'date' && (c !== 'date' || s !== 'date'))
  )
    d = i + 'the arguments to within must be dates';
  else if ((c !== 'number' || s !== 'number') && (a || u === 'number'))
    d = i + 'the arguments to within must be numbers';
  else if (!a && u !== 'date' && u !== 'number') {
    var h = u === 'string' ? "'" + n + "'" : n;
    d = i + 'expected ' + h + ' to be a number or a date';
  } else p = !1;
  if (p) throw new ae(d, void 0, l);
  if (a) {
    var m = 'length',
      y;
    u === 'map' || u === 'set' ? ((m = 'size'), (y = n.size)) : (y = n.length),
      this.assert(
        y >= e && y <= t,
        'expected #{this} to have a ' + m + ' within ' + f,
        'expected #{this} to not have a ' + m + ' within ' + f,
      );
  } else
    this.assert(
      n >= e && n <= t,
      'expected #{this} to be within ' + f,
      'expected #{this} to not be within ' + f,
    );
});
function ll(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object'),
    n = A(this, 'ssfi'),
    a = A(this, 'message');
  try {
    var o = r instanceof e;
  } catch (l) {
    throw l instanceof TypeError
      ? ((a = a ? a + ': ' : ''),
        new ae(
          a +
            'The instanceof assertion needs a constructor but ' +
            se(e) +
            ' was given.',
          void 0,
          n,
        ))
      : l;
  }
  var i = va(e);
  i == null && (i = 'an unnamed constructor'),
    this.assert(
      o,
      'expected #{this} to be an instance of ' + i,
      'expected #{this} to not be an instance of ' + i,
    );
}
x(ll, 'assertInstanceOf');
P.addMethod('instanceof', ll);
P.addMethod('instanceOf', ll);
function sl(e, t, r) {
  r && A(this, 'message', r);
  var n = A(this, 'nested'),
    a = A(this, 'own'),
    o = A(this, 'message'),
    i = A(this, 'object'),
    l = A(this, 'ssfi'),
    u = typeof e;
  if (((o = o ? o + ': ' : ''), n)) {
    if (u !== 'string')
      throw new ae(
        o +
          'the argument to property must be a string when using nested syntax',
        void 0,
        l,
      );
  } else if (u !== 'string' && u !== 'number' && u !== 'symbol')
    throw new ae(
      o + 'the argument to property must be a string, number, or symbol',
      void 0,
      l,
    );
  if (n && a)
    throw new ae(
      o + 'The "nested" and "own" flags cannot be combined.',
      void 0,
      l,
    );
  if (i == null)
    throw new ae(o + 'Target cannot be null or undefined.', void 0, l);
  var c = A(this, 'deep'),
    s = A(this, 'negate'),
    d = n ? Wi(i, e) : null,
    p = n ? d.value : i[e],
    f = c ? A(this, 'eql') : (y, b) => y === b,
    h = '';
  c && (h += 'deep '),
    a && (h += 'own '),
    n && (h += 'nested '),
    (h += 'property ');
  var m;
  a
    ? (m = Object.prototype.hasOwnProperty.call(i, e))
    : n
      ? (m = d.exists)
      : (m = ya(i, e)),
    (!s || arguments.length === 1) &&
      this.assert(
        m,
        'expected #{this} to have ' + h + ee(e),
        'expected #{this} to not have ' + h + ee(e),
      ),
    arguments.length > 1 &&
      this.assert(
        m && f(t, p),
        'expected #{this} to have ' + h + ee(e) + ' of #{exp}, but got #{act}',
        'expected #{this} to not have ' + h + ee(e) + ' of #{act}',
        t,
        p,
      ),
    A(this, 'object', p);
}
x(sl, 'assertProperty');
P.addMethod('property', sl);
function ul(e, t, r) {
  A(this, 'own', !0), sl.apply(this, arguments);
}
x(ul, 'assertOwnProperty');
P.addMethod('ownProperty', ul);
P.addMethod('haveOwnProperty', ul);
function cl(e, t, r) {
  typeof t == 'string' && ((r = t), (t = null)), r && A(this, 'message', r);
  var n = A(this, 'object'),
    a = Object.getOwnPropertyDescriptor(Object(n), e),
    o = A(this, 'eql');
  a && t
    ? this.assert(
        o(t, a),
        'expected the own property descriptor for ' +
          ee(e) +
          ' on #{this} to match ' +
          ee(t) +
          ', got ' +
          ee(a),
        'expected the own property descriptor for ' +
          ee(e) +
          ' on #{this} to not match ' +
          ee(t),
        t,
        a,
        !0,
      )
    : this.assert(
        a,
        'expected #{this} to have an own property descriptor for ' + ee(e),
        'expected #{this} to not have an own property descriptor for ' + ee(e),
      ),
    A(this, 'object', a);
}
x(cl, 'assertOwnPropertyDescriptor');
P.addMethod('ownPropertyDescriptor', cl);
P.addMethod('haveOwnPropertyDescriptor', cl);
function dl() {
  A(this, 'doLength', !0);
}
x(dl, 'assertLengthChain');
function fl(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object'),
    n = se(r).toLowerCase(),
    a = A(this, 'message'),
    o = A(this, 'ssfi'),
    i = 'length',
    l;
  switch (n) {
    case 'map':
    case 'set':
      (i = 'size'), (l = r.size);
      break;
    default:
      new P(r, a, o, !0).to.have.property('length'), (l = r.length);
  }
  this.assert(
    l == e,
    'expected #{this} to have a ' + i + ' of #{exp} but got #{act}',
    'expected #{this} to not have a ' + i + ' of #{act}',
    e,
    l,
  );
}
x(fl, 'assertLength');
P.addChainableMethod('length', fl, dl);
P.addChainableMethod('lengthOf', fl, dl);
function pl(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object');
  this.assert(
    e.exec(r),
    'expected #{this} to match ' + e,
    'expected #{this} not to match ' + e,
  );
}
x(pl, 'assertMatch');
P.addMethod('match', pl);
P.addMethod('matches', pl);
P.addMethod('string', function (e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object'),
    n = A(this, 'message'),
    a = A(this, 'ssfi');
  new P(r, n, a, !0).is.a('string'),
    this.assert(
      ~r.indexOf(e),
      'expected #{this} to contain ' + ee(e),
      'expected #{this} to not contain ' + ee(e),
    );
});
function hl(e) {
  var t = A(this, 'object'),
    r = se(t),
    n = se(e),
    a = A(this, 'ssfi'),
    o = A(this, 'deep'),
    i,
    l = '',
    u,
    c = !0,
    s = A(this, 'message');
  s = s ? s + ': ' : '';
  var d =
    s +
    'when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments';
  if (r === 'Map' || r === 'Set')
    (l = o ? 'deeply ' : ''),
      (u = []),
      t.forEach(function (g, R) {
        u.push(R);
      }),
      n !== 'Array' && (e = Array.prototype.slice.call(arguments));
  else {
    switch (((u = tl(t)), n)) {
      case 'Array':
        if (arguments.length > 1) throw new ae(d, void 0, a);
        break;
      case 'Object':
        if (arguments.length > 1) throw new ae(d, void 0, a);
        e = Object.keys(e);
        break;
      default:
        e = Array.prototype.slice.call(arguments);
    }
    e = e.map(function (g) {
      return typeof g == 'symbol' ? g : String(g);
    });
  }
  if (!e.length) throw new ae(s + 'keys required', void 0, a);
  var p = e.length,
    f = A(this, 'any'),
    h = A(this, 'all'),
    m = e,
    y = o ? A(this, 'eql') : (g, R) => g === R;
  if (
    (!f && !h && (h = !0),
    f &&
      (c = m.some(function (g) {
        return u.some(function (R) {
          return y(g, R);
        });
      })),
    h &&
      ((c = m.every(function (g) {
        return u.some(function (R) {
          return y(g, R);
        });
      })),
      A(this, 'contains') || (c = c && e.length == u.length)),
    p > 1)
  ) {
    e = e.map(function (g) {
      return ee(g);
    });
    var b = e.pop();
    h && (i = e.join(', ') + ', and ' + b),
      f && (i = e.join(', ') + ', or ' + b);
  } else i = ee(e[0]);
  (i = (p > 1 ? 'keys ' : 'key ') + i),
    (i = (A(this, 'contains') ? 'contain ' : 'have ') + i),
    this.assert(
      c,
      'expected #{this} to ' + l + i,
      'expected #{this} to not ' + l + i,
      m.slice(0).sort(zn),
      u.sort(zn),
      !0,
    );
}
x(hl, 'assertKeys');
P.addMethod('keys', hl);
P.addMethod('key', hl);
function Ta(e, t, r) {
  r && A(this, 'message', r);
  var n = A(this, 'object'),
    a = A(this, 'ssfi'),
    o = A(this, 'message'),
    i = A(this, 'negate') || !1;
  new P(n, o, a, !0).is.a('function'),
    (Gn(e) || typeof e == 'string') && ((t = e), (e = null));
  let l,
    u = !1;
  try {
    n();
  } catch (g) {
    (u = !0), (l = g);
  }
  var c = e === void 0 && t === void 0,
    s = !!(e && t),
    d = !1,
    p = !1;
  if (c || (!c && !i)) {
    var f = 'an error';
    e instanceof Error ? (f = '#{exp}') : e && (f = ke.getConstructorName(e));
    let g = l;
    if (l instanceof Error) g = l.toString();
    else if (typeof l == 'string') g = l;
    else if (l && (typeof l == 'object' || typeof l == 'function'))
      try {
        g = ke.getConstructorName(l);
      } catch {}
    this.assert(
      u,
      'expected #{this} to throw ' + f,
      'expected #{this} to not throw an error but #{act} was thrown',
      e && e.toString(),
      g,
    );
  }
  if (e && l) {
    if (e instanceof Error) {
      var h = ke.compatibleInstance(l, e);
      h === i &&
        (s && i
          ? (d = !0)
          : this.assert(
              i,
              'expected #{this} to throw #{exp} but #{act} was thrown',
              'expected #{this} to not throw #{exp}' +
                (l && !i ? ' but #{act} was thrown' : ''),
              e.toString(),
              l.toString(),
            ));
    }
    var m = ke.compatibleConstructor(l, e);
    m === i &&
      (s && i
        ? (d = !0)
        : this.assert(
            i,
            'expected #{this} to throw #{exp} but #{act} was thrown',
            'expected #{this} to not throw #{exp}' +
              (l ? ' but #{act} was thrown' : ''),
            e instanceof Error ? e.toString() : e && ke.getConstructorName(e),
            l instanceof Error ? l.toString() : l && ke.getConstructorName(l),
          ));
  }
  if (l && t !== void 0 && t !== null) {
    var y = 'including';
    Gn(t) && (y = 'matching');
    var b = ke.compatibleMessage(l, t);
    b === i &&
      (s && i
        ? (p = !0)
        : this.assert(
            i,
            'expected #{this} to throw error ' + y + ' #{exp} but got #{act}',
            'expected #{this} to throw error not ' + y + ' #{exp}',
            t,
            ke.getMessage(l),
          ));
  }
  d &&
    p &&
    this.assert(
      i,
      'expected #{this} to throw #{exp} but #{act} was thrown',
      'expected #{this} to not throw #{exp}' +
        (l ? ' but #{act} was thrown' : ''),
      e instanceof Error ? e.toString() : e && ke.getConstructorName(e),
      l instanceof Error ? l.toString() : l && ke.getConstructorName(l),
    ),
    A(this, 'object', l);
}
x(Ta, 'assertThrows');
P.addMethod('throw', Ta);
P.addMethod('throws', Ta);
P.addMethod('Throw', Ta);
function ml(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object'),
    n = A(this, 'itself'),
    a = typeof r == 'function' && !n ? r.prototype[e] : r[e];
  this.assert(
    typeof a == 'function',
    'expected #{this} to respond to ' + ee(e),
    'expected #{this} to not respond to ' + ee(e),
  );
}
x(ml, 'respondTo');
P.addMethod('respondTo', ml);
P.addMethod('respondsTo', ml);
P.addProperty('itself', function () {
  A(this, 'itself', !0);
});
function bl(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object'),
    n = e(r);
  this.assert(
    n,
    'expected #{this} to satisfy ' + Ht(e),
    'expected #{this} to not satisfy' + Ht(e),
    !A(this, 'negate'),
    n,
  );
}
x(bl, 'satisfy');
P.addMethod('satisfy', bl);
P.addMethod('satisfies', bl);
function gl(e, t, r) {
  r && A(this, 'message', r);
  var n = A(this, 'object'),
    a = A(this, 'message'),
    o = A(this, 'ssfi');
  if (
    (new P(n, a, o, !0).is.a('number'),
    typeof e != 'number' || typeof t != 'number')
  ) {
    a = a ? a + ': ' : '';
    var i = t === void 0 ? ', and a delta is required' : '';
    throw new ae(
      a + 'the arguments to closeTo or approximately must be numbers' + i,
      void 0,
      o,
    );
  }
  this.assert(
    Math.abs(n - e) <= t,
    'expected #{this} to be close to ' + e + ' +/- ' + t,
    'expected #{this} not to be close to ' + e + ' +/- ' + t,
  );
}
x(gl, 'closeTo');
P.addMethod('closeTo', gl);
P.addMethod('approximately', gl);
function jf(e, t, r, n, a) {
  let o = Array.from(t),
    i = Array.from(e);
  if (!n) {
    if (i.length !== o.length) return !1;
    o = o.slice();
  }
  return i.every(function (l, u) {
    if (a) return r ? r(l, o[u]) : l === o[u];
    if (!r) {
      var c = o.indexOf(l);
      return c === -1 ? !1 : (n || o.splice(c, 1), !0);
    }
    return o.some(function (s, d) {
      return r(l, s) ? (n || o.splice(d, 1), !0) : !1;
    });
  });
}
x(jf, 'isSubsetOf');
P.addMethod('members', function (e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object'),
    n = A(this, 'message'),
    a = A(this, 'ssfi');
  new P(r, n, a, !0).to.be.iterable, new P(e, n, a, !0).to.be.iterable;
  var o = A(this, 'contains'),
    i = A(this, 'ordered'),
    l,
    u,
    c;
  o
    ? ((l = i ? 'an ordered superset' : 'a superset'),
      (u = 'expected #{this} to be ' + l + ' of #{exp}'),
      (c = 'expected #{this} to not be ' + l + ' of #{exp}'))
    : ((l = i ? 'ordered members' : 'members'),
      (u = 'expected #{this} to have the same ' + l + ' as #{exp}'),
      (c = 'expected #{this} to not have the same ' + l + ' as #{exp}'));
  var s = A(this, 'deep') ? A(this, 'eql') : void 0;
  this.assert(jf(e, r, s, o, i), u, c, e, r, !0);
});
P.addProperty('iterable', function (e) {
  e && A(this, 'message', e);
  var t = A(this, 'object');
  this.assert(
    t != null && t[Symbol.iterator],
    'expected #{this} to be an iterable',
    'expected #{this} to not be an iterable',
    t,
  );
});
function If(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'object'),
    n = A(this, 'message'),
    a = A(this, 'ssfi'),
    o = A(this, 'contains'),
    i = A(this, 'deep'),
    l = A(this, 'eql');
  new P(e, n, a, !0).to.be.an('array'),
    o
      ? this.assert(
          e.some(function (u) {
            return r.indexOf(u) > -1;
          }),
          'expected #{this} to contain one of #{exp}',
          'expected #{this} to not contain one of #{exp}',
          e,
          r,
        )
      : i
        ? this.assert(
            e.some(function (u) {
              return l(r, u);
            }),
            'expected #{this} to deeply equal one of #{exp}',
            'expected #{this} to deeply equal one of #{exp}',
            e,
            r,
          )
        : this.assert(
            e.indexOf(r) > -1,
            'expected #{this} to be one of #{exp}',
            'expected #{this} to not be one of #{exp}',
            e,
            r,
          );
}
x(If, 'oneOf');
P.addMethod('oneOf', If);
function yl(e, t, r) {
  r && A(this, 'message', r);
  var n = A(this, 'object'),
    a = A(this, 'message'),
    o = A(this, 'ssfi');
  new P(n, a, o, !0).is.a('function');
  var i;
  t
    ? (new P(e, a, o, !0).to.have.property(t), (i = e[t]))
    : (new P(e, a, o, !0).is.a('function'), (i = e())),
    n();
  var l = t == null ? e() : e[t],
    u = t == null ? i : '.' + t;
  A(this, 'deltaMsgObj', u),
    A(this, 'initialDeltaValue', i),
    A(this, 'finalDeltaValue', l),
    A(this, 'deltaBehavior', 'change'),
    A(this, 'realDelta', l !== i),
    this.assert(
      i !== l,
      'expected ' + u + ' to change',
      'expected ' + u + ' to not change',
    );
}
x(yl, 'assertChanges');
P.addMethod('change', yl);
P.addMethod('changes', yl);
function vl(e, t, r) {
  r && A(this, 'message', r);
  var n = A(this, 'object'),
    a = A(this, 'message'),
    o = A(this, 'ssfi');
  new P(n, a, o, !0).is.a('function');
  var i;
  t
    ? (new P(e, a, o, !0).to.have.property(t), (i = e[t]))
    : (new P(e, a, o, !0).is.a('function'), (i = e())),
    new P(i, a, o, !0).is.a('number'),
    n();
  var l = t == null ? e() : e[t],
    u = t == null ? i : '.' + t;
  A(this, 'deltaMsgObj', u),
    A(this, 'initialDeltaValue', i),
    A(this, 'finalDeltaValue', l),
    A(this, 'deltaBehavior', 'increase'),
    A(this, 'realDelta', l - i),
    this.assert(
      l - i > 0,
      'expected ' + u + ' to increase',
      'expected ' + u + ' to not increase',
    );
}
x(vl, 'assertIncreases');
P.addMethod('increase', vl);
P.addMethod('increases', vl);
function _l(e, t, r) {
  r && A(this, 'message', r);
  var n = A(this, 'object'),
    a = A(this, 'message'),
    o = A(this, 'ssfi');
  new P(n, a, o, !0).is.a('function');
  var i;
  t
    ? (new P(e, a, o, !0).to.have.property(t), (i = e[t]))
    : (new P(e, a, o, !0).is.a('function'), (i = e())),
    new P(i, a, o, !0).is.a('number'),
    n();
  var l = t == null ? e() : e[t],
    u = t == null ? i : '.' + t;
  A(this, 'deltaMsgObj', u),
    A(this, 'initialDeltaValue', i),
    A(this, 'finalDeltaValue', l),
    A(this, 'deltaBehavior', 'decrease'),
    A(this, 'realDelta', i - l),
    this.assert(
      l - i < 0,
      'expected ' + u + ' to decrease',
      'expected ' + u + ' to not decrease',
    );
}
x(_l, 'assertDecreases');
P.addMethod('decrease', _l);
P.addMethod('decreases', _l);
function Lf(e, t) {
  t && A(this, 'message', t);
  var r = A(this, 'deltaMsgObj'),
    n = A(this, 'initialDeltaValue'),
    a = A(this, 'finalDeltaValue'),
    o = A(this, 'deltaBehavior'),
    i = A(this, 'realDelta'),
    l;
  o === 'change'
    ? (l = Math.abs(a - n) === Math.abs(e))
    : (l = i === Math.abs(e)),
    this.assert(
      l,
      'expected ' + r + ' to ' + o + ' by ' + e,
      'expected ' + r + ' to not ' + o + ' by ' + e,
    );
}
x(Lf, 'assertDelta');
P.addMethod('by', Lf);
P.addProperty('extensible', function () {
  var e = A(this, 'object'),
    t = e === Object(e) && Object.isExtensible(e);
  this.assert(
    t,
    'expected #{this} to be extensible',
    'expected #{this} to not be extensible',
  );
});
P.addProperty('sealed', function () {
  var e = A(this, 'object'),
    t = e === Object(e) ? Object.isSealed(e) : !0;
  this.assert(
    t,
    'expected #{this} to be sealed',
    'expected #{this} to not be sealed',
  );
});
P.addProperty('frozen', function () {
  var e = A(this, 'object'),
    t = e === Object(e) ? Object.isFrozen(e) : !0;
  this.assert(
    t,
    'expected #{this} to be frozen',
    'expected #{this} to not be frozen',
  );
});
P.addProperty('finite', function (e) {
  var t = A(this, 'object');
  this.assert(
    typeof t == 'number' && isFinite(t),
    'expected #{this} to be a finite number',
    'expected #{this} to not be a finite number',
  );
});
function zt(e, t) {
  return new P(e, t);
}
x(zt, 'expect');
zt.fail = function (e, t, r, n) {
  throw (
    (arguments.length < 2 && ((r = e), (e = void 0)),
    (r = r || 'expect.fail()'),
    new ae(r, { actual: e, expected: t, operator: n }, zt.fail))
  );
};
var Bf = {};
Di(Bf, { Should: () => oC, should: () => aC });
function El() {
  function e() {
    return this instanceof String ||
      this instanceof Number ||
      this instanceof Boolean ||
      (typeof Symbol == 'function' && this instanceof Symbol) ||
      (typeof BigInt == 'function' && this instanceof BigInt)
      ? new P(this.valueOf(), null, e)
      : new P(this, null, e);
  }
  x(e, 'shouldGetter');
  function t(n) {
    Object.defineProperty(this, 'should', {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0,
    });
  }
  x(t, 'shouldSetter'),
    Object.defineProperty(Object.prototype, 'should', {
      set: t,
      get: e,
      configurable: !0,
    });
  var r = {};
  return (
    (r.fail = function (n, a, o, i) {
      throw (
        (arguments.length < 2 && ((o = n), (n = void 0)),
        (o = o || 'should.fail()'),
        new ae(o, { actual: n, expected: a, operator: i }, r.fail))
      );
    }),
    (r.equal = function (n, a, o) {
      new P(n, o).to.equal(a);
    }),
    (r.Throw = function (n, a, o, i) {
      new P(n, i).to.Throw(a, o);
    }),
    (r.exist = function (n, a) {
      new P(n, a).to.exist;
    }),
    (r.not = {}),
    (r.not.equal = function (n, a, o) {
      new P(n, o).to.not.equal(a);
    }),
    (r.not.Throw = function (n, a, o, i) {
      new P(n, i).to.not.Throw(a, o);
    }),
    (r.not.exist = function (n, a) {
      new P(n, a).to.not.exist;
    }),
    (r.throw = r.Throw),
    (r.not.throw = r.not.Throw),
    r
  );
}
x(El, 'loadShould');
var aC = El,
  oC = El;
function S(e, t) {
  var r = new P(null, null, S, !0);
  r.assert(e, t, '[ negation message unavailable ]');
}
x(S, 'assert');
S.fail = function (e, t, r, n) {
  throw (
    (arguments.length < 2 && ((r = e), (e = void 0)),
    (r = r || 'assert.fail()'),
    new ae(r, { actual: e, expected: t, operator: n }, S.fail))
  );
};
S.isOk = function (e, t) {
  new P(e, t, S.isOk, !0).is.ok;
};
S.isNotOk = function (e, t) {
  new P(e, t, S.isNotOk, !0).is.not.ok;
};
S.equal = function (e, t, r) {
  var n = new P(e, r, S.equal, !0);
  n.assert(
    t == K(n, 'object'),
    'expected #{this} to equal #{exp}',
    'expected #{this} to not equal #{act}',
    t,
    e,
    !0,
  );
};
S.notEqual = function (e, t, r) {
  var n = new P(e, r, S.notEqual, !0);
  n.assert(
    t != K(n, 'object'),
    'expected #{this} to not equal #{exp}',
    'expected #{this} to equal #{act}',
    t,
    e,
    !0,
  );
};
S.strictEqual = function (e, t, r) {
  new P(e, r, S.strictEqual, !0).to.equal(t);
};
S.notStrictEqual = function (e, t, r) {
  new P(e, r, S.notStrictEqual, !0).to.not.equal(t);
};
S.deepEqual = S.deepStrictEqual = function (e, t, r) {
  new P(e, r, S.deepEqual, !0).to.eql(t);
};
S.notDeepEqual = function (e, t, r) {
  new P(e, r, S.notDeepEqual, !0).to.not.eql(t);
};
S.isAbove = function (e, t, r) {
  new P(e, r, S.isAbove, !0).to.be.above(t);
};
S.isAtLeast = function (e, t, r) {
  new P(e, r, S.isAtLeast, !0).to.be.least(t);
};
S.isBelow = function (e, t, r) {
  new P(e, r, S.isBelow, !0).to.be.below(t);
};
S.isAtMost = function (e, t, r) {
  new P(e, r, S.isAtMost, !0).to.be.most(t);
};
S.isTrue = function (e, t) {
  new P(e, t, S.isTrue, !0).is.true;
};
S.isNotTrue = function (e, t) {
  new P(e, t, S.isNotTrue, !0).to.not.equal(!0);
};
S.isFalse = function (e, t) {
  new P(e, t, S.isFalse, !0).is.false;
};
S.isNotFalse = function (e, t) {
  new P(e, t, S.isNotFalse, !0).to.not.equal(!1);
};
S.isNull = function (e, t) {
  new P(e, t, S.isNull, !0).to.equal(null);
};
S.isNotNull = function (e, t) {
  new P(e, t, S.isNotNull, !0).to.not.equal(null);
};
S.isNaN = function (e, t) {
  new P(e, t, S.isNaN, !0).to.be.NaN;
};
S.isNotNaN = function (e, t) {
  new P(e, t, S.isNotNaN, !0).not.to.be.NaN;
};
S.exists = function (e, t) {
  new P(e, t, S.exists, !0).to.exist;
};
S.notExists = function (e, t) {
  new P(e, t, S.notExists, !0).to.not.exist;
};
S.isUndefined = function (e, t) {
  new P(e, t, S.isUndefined, !0).to.equal(void 0);
};
S.isDefined = function (e, t) {
  new P(e, t, S.isDefined, !0).to.not.equal(void 0);
};
S.isCallable = function (e, t) {
  new P(e, t, S.isCallable, !0).is.callable;
};
S.isNotCallable = function (e, t) {
  new P(e, t, S.isNotCallable, !0).is.not.callable;
};
S.isObject = function (e, t) {
  new P(e, t, S.isObject, !0).to.be.a('object');
};
S.isNotObject = function (e, t) {
  new P(e, t, S.isNotObject, !0).to.not.be.a('object');
};
S.isArray = function (e, t) {
  new P(e, t, S.isArray, !0).to.be.an('array');
};
S.isNotArray = function (e, t) {
  new P(e, t, S.isNotArray, !0).to.not.be.an('array');
};
S.isString = function (e, t) {
  new P(e, t, S.isString, !0).to.be.a('string');
};
S.isNotString = function (e, t) {
  new P(e, t, S.isNotString, !0).to.not.be.a('string');
};
S.isNumber = function (e, t) {
  new P(e, t, S.isNumber, !0).to.be.a('number');
};
S.isNotNumber = function (e, t) {
  new P(e, t, S.isNotNumber, !0).to.not.be.a('number');
};
S.isFinite = function (e, t) {
  new P(e, t, S.isFinite, !0).to.be.finite;
};
S.isBoolean = function (e, t) {
  new P(e, t, S.isBoolean, !0).to.be.a('boolean');
};
S.isNotBoolean = function (e, t) {
  new P(e, t, S.isNotBoolean, !0).to.not.be.a('boolean');
};
S.typeOf = function (e, t, r) {
  new P(e, r, S.typeOf, !0).to.be.a(t);
};
S.notTypeOf = function (e, t, r) {
  new P(e, r, S.notTypeOf, !0).to.not.be.a(t);
};
S.instanceOf = function (e, t, r) {
  new P(e, r, S.instanceOf, !0).to.be.instanceOf(t);
};
S.notInstanceOf = function (e, t, r) {
  new P(e, r, S.notInstanceOf, !0).to.not.be.instanceOf(t);
};
S.include = function (e, t, r) {
  new P(e, r, S.include, !0).include(t);
};
S.notInclude = function (e, t, r) {
  new P(e, r, S.notInclude, !0).not.include(t);
};
S.deepInclude = function (e, t, r) {
  new P(e, r, S.deepInclude, !0).deep.include(t);
};
S.notDeepInclude = function (e, t, r) {
  new P(e, r, S.notDeepInclude, !0).not.deep.include(t);
};
S.nestedInclude = function (e, t, r) {
  new P(e, r, S.nestedInclude, !0).nested.include(t);
};
S.notNestedInclude = function (e, t, r) {
  new P(e, r, S.notNestedInclude, !0).not.nested.include(t);
};
S.deepNestedInclude = function (e, t, r) {
  new P(e, r, S.deepNestedInclude, !0).deep.nested.include(t);
};
S.notDeepNestedInclude = function (e, t, r) {
  new P(e, r, S.notDeepNestedInclude, !0).not.deep.nested.include(t);
};
S.ownInclude = function (e, t, r) {
  new P(e, r, S.ownInclude, !0).own.include(t);
};
S.notOwnInclude = function (e, t, r) {
  new P(e, r, S.notOwnInclude, !0).not.own.include(t);
};
S.deepOwnInclude = function (e, t, r) {
  new P(e, r, S.deepOwnInclude, !0).deep.own.include(t);
};
S.notDeepOwnInclude = function (e, t, r) {
  new P(e, r, S.notDeepOwnInclude, !0).not.deep.own.include(t);
};
S.match = function (e, t, r) {
  new P(e, r, S.match, !0).to.match(t);
};
S.notMatch = function (e, t, r) {
  new P(e, r, S.notMatch, !0).to.not.match(t);
};
S.property = function (e, t, r) {
  new P(e, r, S.property, !0).to.have.property(t);
};
S.notProperty = function (e, t, r) {
  new P(e, r, S.notProperty, !0).to.not.have.property(t);
};
S.propertyVal = function (e, t, r, n) {
  new P(e, n, S.propertyVal, !0).to.have.property(t, r);
};
S.notPropertyVal = function (e, t, r, n) {
  new P(e, n, S.notPropertyVal, !0).to.not.have.property(t, r);
};
S.deepPropertyVal = function (e, t, r, n) {
  new P(e, n, S.deepPropertyVal, !0).to.have.deep.property(t, r);
};
S.notDeepPropertyVal = function (e, t, r, n) {
  new P(e, n, S.notDeepPropertyVal, !0).to.not.have.deep.property(t, r);
};
S.ownProperty = function (e, t, r) {
  new P(e, r, S.ownProperty, !0).to.have.own.property(t);
};
S.notOwnProperty = function (e, t, r) {
  new P(e, r, S.notOwnProperty, !0).to.not.have.own.property(t);
};
S.ownPropertyVal = function (e, t, r, n) {
  new P(e, n, S.ownPropertyVal, !0).to.have.own.property(t, r);
};
S.notOwnPropertyVal = function (e, t, r, n) {
  new P(e, n, S.notOwnPropertyVal, !0).to.not.have.own.property(t, r);
};
S.deepOwnPropertyVal = function (e, t, r, n) {
  new P(e, n, S.deepOwnPropertyVal, !0).to.have.deep.own.property(t, r);
};
S.notDeepOwnPropertyVal = function (e, t, r, n) {
  new P(e, n, S.notDeepOwnPropertyVal, !0).to.not.have.deep.own.property(t, r);
};
S.nestedProperty = function (e, t, r) {
  new P(e, r, S.nestedProperty, !0).to.have.nested.property(t);
};
S.notNestedProperty = function (e, t, r) {
  new P(e, r, S.notNestedProperty, !0).to.not.have.nested.property(t);
};
S.nestedPropertyVal = function (e, t, r, n) {
  new P(e, n, S.nestedPropertyVal, !0).to.have.nested.property(t, r);
};
S.notNestedPropertyVal = function (e, t, r, n) {
  new P(e, n, S.notNestedPropertyVal, !0).to.not.have.nested.property(t, r);
};
S.deepNestedPropertyVal = function (e, t, r, n) {
  new P(e, n, S.deepNestedPropertyVal, !0).to.have.deep.nested.property(t, r);
};
S.notDeepNestedPropertyVal = function (e, t, r, n) {
  new P(e, n, S.notDeepNestedPropertyVal, !0).to.not.have.deep.nested.property(
    t,
    r,
  );
};
S.lengthOf = function (e, t, r) {
  new P(e, r, S.lengthOf, !0).to.have.lengthOf(t);
};
S.hasAnyKeys = function (e, t, r) {
  new P(e, r, S.hasAnyKeys, !0).to.have.any.keys(t);
};
S.hasAllKeys = function (e, t, r) {
  new P(e, r, S.hasAllKeys, !0).to.have.all.keys(t);
};
S.containsAllKeys = function (e, t, r) {
  new P(e, r, S.containsAllKeys, !0).to.contain.all.keys(t);
};
S.doesNotHaveAnyKeys = function (e, t, r) {
  new P(e, r, S.doesNotHaveAnyKeys, !0).to.not.have.any.keys(t);
};
S.doesNotHaveAllKeys = function (e, t, r) {
  new P(e, r, S.doesNotHaveAllKeys, !0).to.not.have.all.keys(t);
};
S.hasAnyDeepKeys = function (e, t, r) {
  new P(e, r, S.hasAnyDeepKeys, !0).to.have.any.deep.keys(t);
};
S.hasAllDeepKeys = function (e, t, r) {
  new P(e, r, S.hasAllDeepKeys, !0).to.have.all.deep.keys(t);
};
S.containsAllDeepKeys = function (e, t, r) {
  new P(e, r, S.containsAllDeepKeys, !0).to.contain.all.deep.keys(t);
};
S.doesNotHaveAnyDeepKeys = function (e, t, r) {
  new P(e, r, S.doesNotHaveAnyDeepKeys, !0).to.not.have.any.deep.keys(t);
};
S.doesNotHaveAllDeepKeys = function (e, t, r) {
  new P(e, r, S.doesNotHaveAllDeepKeys, !0).to.not.have.all.deep.keys(t);
};
S.throws = function (e, t, r, n) {
  (typeof t == 'string' || t instanceof RegExp) && ((r = t), (t = null));
  var a = new P(e, n, S.throws, !0).to.throw(t, r);
  return K(a, 'object');
};
S.doesNotThrow = function (e, t, r, n) {
  (typeof t == 'string' || t instanceof RegExp) && ((r = t), (t = null)),
    new P(e, n, S.doesNotThrow, !0).to.not.throw(t, r);
};
S.operator = function (e, t, r, n) {
  var a;
  switch (t) {
    case '==':
      a = e == r;
      break;
    case '===':
      a = e === r;
      break;
    case '>':
      a = e > r;
      break;
    case '>=':
      a = e >= r;
      break;
    case '<':
      a = e < r;
      break;
    case '<=':
      a = e <= r;
      break;
    case '!=':
      a = e != r;
      break;
    case '!==':
      a = e !== r;
      break;
    default:
      throw (
        ((n = n && n + ': '),
        new ae(n + 'Invalid operator "' + t + '"', void 0, S.operator))
      );
  }
  var o = new P(a, n, S.operator, !0);
  o.assert(
    K(o, 'object') === !0,
    'expected ' + ee(e) + ' to be ' + t + ' ' + ee(r),
    'expected ' + ee(e) + ' to not be ' + t + ' ' + ee(r),
  );
};
S.closeTo = function (e, t, r, n) {
  new P(e, n, S.closeTo, !0).to.be.closeTo(t, r);
};
S.approximately = function (e, t, r, n) {
  new P(e, n, S.approximately, !0).to.be.approximately(t, r);
};
S.sameMembers = function (e, t, r) {
  new P(e, r, S.sameMembers, !0).to.have.same.members(t);
};
S.notSameMembers = function (e, t, r) {
  new P(e, r, S.notSameMembers, !0).to.not.have.same.members(t);
};
S.sameDeepMembers = function (e, t, r) {
  new P(e, r, S.sameDeepMembers, !0).to.have.same.deep.members(t);
};
S.notSameDeepMembers = function (e, t, r) {
  new P(e, r, S.notSameDeepMembers, !0).to.not.have.same.deep.members(t);
};
S.sameOrderedMembers = function (e, t, r) {
  new P(e, r, S.sameOrderedMembers, !0).to.have.same.ordered.members(t);
};
S.notSameOrderedMembers = function (e, t, r) {
  new P(e, r, S.notSameOrderedMembers, !0).to.not.have.same.ordered.members(t);
};
S.sameDeepOrderedMembers = function (e, t, r) {
  new P(e, r, S.sameDeepOrderedMembers, !0).to.have.same.deep.ordered.members(
    t,
  );
};
S.notSameDeepOrderedMembers = function (e, t, r) {
  new P(
    e,
    r,
    S.notSameDeepOrderedMembers,
    !0,
  ).to.not.have.same.deep.ordered.members(t);
};
S.includeMembers = function (e, t, r) {
  new P(e, r, S.includeMembers, !0).to.include.members(t);
};
S.notIncludeMembers = function (e, t, r) {
  new P(e, r, S.notIncludeMembers, !0).to.not.include.members(t);
};
S.includeDeepMembers = function (e, t, r) {
  new P(e, r, S.includeDeepMembers, !0).to.include.deep.members(t);
};
S.notIncludeDeepMembers = function (e, t, r) {
  new P(e, r, S.notIncludeDeepMembers, !0).to.not.include.deep.members(t);
};
S.includeOrderedMembers = function (e, t, r) {
  new P(e, r, S.includeOrderedMembers, !0).to.include.ordered.members(t);
};
S.notIncludeOrderedMembers = function (e, t, r) {
  new P(e, r, S.notIncludeOrderedMembers, !0).to.not.include.ordered.members(t);
};
S.includeDeepOrderedMembers = function (e, t, r) {
  new P(e, r, S.includeDeepOrderedMembers, !0).to.include.deep.ordered.members(
    t,
  );
};
S.notIncludeDeepOrderedMembers = function (e, t, r) {
  new P(
    e,
    r,
    S.notIncludeDeepOrderedMembers,
    !0,
  ).to.not.include.deep.ordered.members(t);
};
S.oneOf = function (e, t, r) {
  new P(e, r, S.oneOf, !0).to.be.oneOf(t);
};
S.isIterable = function (e, t) {
  if (e == null || !e[Symbol.iterator])
    throw (
      ((t = t
        ? `${t} expected ${ee(e)} to be an iterable`
        : `expected ${ee(e)} to be an iterable`),
      new ae(t, void 0, S.isIterable))
    );
};
S.changes = function (e, t, r, n) {
  arguments.length === 3 && typeof t == 'function' && ((n = r), (r = null)),
    new P(e, n, S.changes, !0).to.change(t, r);
};
S.changesBy = function (e, t, r, n, a) {
  if (arguments.length === 4 && typeof t == 'function') {
    var o = n;
    (n = r), (a = o);
  } else arguments.length === 3 && ((n = r), (r = null));
  new P(e, a, S.changesBy, !0).to.change(t, r).by(n);
};
S.doesNotChange = function (e, t, r, n) {
  return (
    arguments.length === 3 && typeof t == 'function' && ((n = r), (r = null)),
    new P(e, n, S.doesNotChange, !0).to.not.change(t, r)
  );
};
S.changesButNotBy = function (e, t, r, n, a) {
  if (arguments.length === 4 && typeof t == 'function') {
    var o = n;
    (n = r), (a = o);
  } else arguments.length === 3 && ((n = r), (r = null));
  new P(e, a, S.changesButNotBy, !0).to.change(t, r).but.not.by(n);
};
S.increases = function (e, t, r, n) {
  return (
    arguments.length === 3 && typeof t == 'function' && ((n = r), (r = null)),
    new P(e, n, S.increases, !0).to.increase(t, r)
  );
};
S.increasesBy = function (e, t, r, n, a) {
  if (arguments.length === 4 && typeof t == 'function') {
    var o = n;
    (n = r), (a = o);
  } else arguments.length === 3 && ((n = r), (r = null));
  new P(e, a, S.increasesBy, !0).to.increase(t, r).by(n);
};
S.doesNotIncrease = function (e, t, r, n) {
  return (
    arguments.length === 3 && typeof t == 'function' && ((n = r), (r = null)),
    new P(e, n, S.doesNotIncrease, !0).to.not.increase(t, r)
  );
};
S.increasesButNotBy = function (e, t, r, n, a) {
  if (arguments.length === 4 && typeof t == 'function') {
    var o = n;
    (n = r), (a = o);
  } else arguments.length === 3 && ((n = r), (r = null));
  new P(e, a, S.increasesButNotBy, !0).to.increase(t, r).but.not.by(n);
};
S.decreases = function (e, t, r, n) {
  return (
    arguments.length === 3 && typeof t == 'function' && ((n = r), (r = null)),
    new P(e, n, S.decreases, !0).to.decrease(t, r)
  );
};
S.decreasesBy = function (e, t, r, n, a) {
  if (arguments.length === 4 && typeof t == 'function') {
    var o = n;
    (n = r), (a = o);
  } else arguments.length === 3 && ((n = r), (r = null));
  new P(e, a, S.decreasesBy, !0).to.decrease(t, r).by(n);
};
S.doesNotDecrease = function (e, t, r, n) {
  return (
    arguments.length === 3 && typeof t == 'function' && ((n = r), (r = null)),
    new P(e, n, S.doesNotDecrease, !0).to.not.decrease(t, r)
  );
};
S.doesNotDecreaseBy = function (e, t, r, n, a) {
  if (arguments.length === 4 && typeof t == 'function') {
    var o = n;
    (n = r), (a = o);
  } else arguments.length === 3 && ((n = r), (r = null));
  return new P(e, a, S.doesNotDecreaseBy, !0).to.not.decrease(t, r).by(n);
};
S.decreasesButNotBy = function (e, t, r, n, a) {
  if (arguments.length === 4 && typeof t == 'function') {
    var o = n;
    (n = r), (a = o);
  } else arguments.length === 3 && ((n = r), (r = null));
  new P(e, a, S.decreasesButNotBy, !0).to.decrease(t, r).but.not.by(n);
};
S.ifError = function (e) {
  if (e) throw e;
};
S.isExtensible = function (e, t) {
  new P(e, t, S.isExtensible, !0).to.be.extensible;
};
S.isNotExtensible = function (e, t) {
  new P(e, t, S.isNotExtensible, !0).to.not.be.extensible;
};
S.isSealed = function (e, t) {
  new P(e, t, S.isSealed, !0).to.be.sealed;
};
S.isNotSealed = function (e, t) {
  new P(e, t, S.isNotSealed, !0).to.not.be.sealed;
};
S.isFrozen = function (e, t) {
  new P(e, t, S.isFrozen, !0).to.be.frozen;
};
S.isNotFrozen = function (e, t) {
  new P(e, t, S.isNotFrozen, !0).to.not.be.frozen;
};
S.isEmpty = function (e, t) {
  new P(e, t, S.isEmpty, !0).to.be.empty;
};
S.isNotEmpty = function (e, t) {
  new P(e, t, S.isNotEmpty, !0).to.not.be.empty;
};
x(function e(t, r) {
  return (S[r] = S[t]), e;
}, 'alias')('isOk', 'ok')('isNotOk', 'notOk')('throws', 'throw')(
  'throws',
  'Throw',
)('isExtensible', 'extensible')('isNotExtensible', 'notExtensible')(
  'isSealed',
  'sealed',
)('isNotSealed', 'notSealed')('isFrozen', 'frozen')('isNotFrozen', 'notFrozen')(
  'isEmpty',
  'empty',
)('isNotEmpty', 'notEmpty')('isCallable', 'isFunction')(
  'isNotCallable',
  'isNotFunction',
);
var Zs = [];
function Ur(e) {
  let t = {
    AssertionError: ae,
    util: nt,
    config: je,
    expect: zt,
    assert: S,
    Assertion: P,
    ...Bf,
  };
  return ~Zs.indexOf(e) || (e(t, nt), Zs.push(e)), t;
}
x(Ur, 'use');
var kf = {};
$i(kf, {
  toBeChecked: () => Pp,
  toBeDisabled: () => vp,
  toBeEmpty: () => ap,
  toBeEmptyDOMElement: () => op,
  toBeEnabled: () => _p,
  toBeInTheDOM: () => Do,
  toBeInTheDocument: () => np,
  toBeInvalid: () => Cp,
  toBePartiallyChecked: () => Ap,
  toBeRequired: () => Ep,
  toBeValid: () => Rp,
  toBeVisible: () => hp,
  toContainElement: () => Fo,
  toContainHTML: () => ip,
  toHaveAccessibleDescription: () => Uo,
  toHaveAccessibleErrorMessage: () => sp,
  toHaveAccessibleName: () => zo,
  toHaveAttribute: () => up,
  toHaveClass: () => cp,
  toHaveDescription: () => qp,
  toHaveDisplayValue: () => Sp,
  toHaveErrorMessage: () => xp,
  toHaveFocus: () => dp,
  toHaveFormValues: () => fp,
  toHaveRole: () => Ho,
  toHaveStyle: () => Vo,
  toHaveTextContent: () => lp,
  toHaveValue: () => Tp,
});
var eu = Fe(Nd(), 1);
function Df(e) {
  Object.defineProperty(e, '__esModule', { value: !0, configurable: !0 });
}
function wl(e, t, r, n) {
  Object.defineProperty(e, t, {
    get: r,
    set: n,
    enumerable: !0,
    configurable: !0,
  });
}
var Ff = {};
Df(Ff);
wl(Ff, 'default', () => Uf);
var Uf = class extends Error {
    constructor(e, t, r, n, a) {
      super(e + ':' + r + ':' + n + ': ' + t),
        (this.reason = t),
        (this.filename = e),
        (this.line = r),
        (this.column = n),
        (this.source = a);
    }
  },
  Hf = {};
Df(Hf);
wl(Hf, 'default', () => zf);
var zf = class {
    constructor(e, t, r) {
      (this.start = e), (this.end = t), (this.source = r);
    }
  },
  iC = {};
wl(iC, 'CssTypes', () => ve);
var ve;
(function (e) {
  (e.stylesheet = 'stylesheet'),
    (e.rule = 'rule'),
    (e.declaration = 'declaration'),
    (e.comment = 'comment'),
    (e.container = 'container'),
    (e.charset = 'charset'),
    (e.document = 'document'),
    (e.customMedia = 'custom-media'),
    (e.fontFace = 'font-face'),
    (e.host = 'host'),
    (e.import = 'import'),
    (e.keyframes = 'keyframes'),
    (e.keyframe = 'keyframe'),
    (e.layer = 'layer'),
    (e.media = 'media'),
    (e.namespace = 'namespace'),
    (e.page = 'page'),
    (e.startingStyle = 'starting-style'),
    (e.supports = 'supports');
})(ve || (ve = {}));
var Ja = /\/\*[^]*?(?:\*\/|$)/g,
  lC = (e, t) => {
    t = t || {};
    let r = 1,
      n = 1;
    function a(F) {
      let B = F.match(/\n/g);
      B && (r += B.length);
      let D = F.lastIndexOf(`
`);
      n = ~D ? F.length - D : n + F.length;
    }
    function o() {
      let F = { line: r, column: n };
      return function (B) {
        return (
          (B.position = new zf(
            F,
            { line: r, column: n },
            (t == null ? void 0 : t.source) || '',
          )),
          f(),
          B
        );
      };
    }
    let i = [];
    function l(F) {
      let B = new Uf((t == null ? void 0 : t.source) || '', F, r, n, e);
      if (t != null && t.silent) i.push(B);
      else throw B;
    }
    function u() {
      let F = d();
      return {
        type: ve.stylesheet,
        stylesheet: {
          source: t == null ? void 0 : t.source,
          rules: F,
          parsingErrors: i,
        },
      };
    }
    function c() {
      return p(/^{\s*/);
    }
    function s() {
      return p(/^}/);
    }
    function d() {
      let F,
        B = [];
      for (f(), h(B); e.length && e.charAt(0) !== '}' && (F = Le() || Be()); )
        F && (B.push(F), h(B));
      return B;
    }
    function p(F) {
      let B = F.exec(e);
      if (!B) return;
      let D = B[0];
      return a(D), (e = e.slice(D.length)), B;
    }
    function f() {
      p(/^\s*/);
    }
    function h(F) {
      let B;
      for (F = F || []; (B = m()); ) B && F.push(B);
      return F;
    }
    function m() {
      let F = o();
      if (e.charAt(0) !== '/' || e.charAt(1) !== '*') return;
      let B = p(/^\/\*[^]*?\*\//);
      return B
        ? F({ type: ve.comment, comment: B[0].slice(2, -2) })
        : l('End of comment missing');
    }
    function y(F, B, D) {
      let G = B + 1,
        Z = !1,
        ue = F.indexOf(')', G);
      for (; !Z && ue !== -1; ) {
        let Ee = F.indexOf('(', G);
        Ee !== -1 && Ee < ue
          ? ((G = y(F, Ee + 1) + 1), (ue = F.indexOf(')', G)))
          : (Z = !0);
      }
      return Z && ue !== -1 ? ue : -1;
    }
    function b() {
      let F = p(/^([^{]+)/);
      if (!F) return;
      let B = Ue(F[0]).replace(Ja, '');
      if (B.indexOf(',') === -1) return [B];
      let D = 0,
        G = B.indexOf('(', D);
      for (; G !== -1; ) {
        let Z = y(B, G);
        if (Z === -1) break;
        (D = Z + 1),
          (B =
            B.substring(0, G) +
            B.substring(G, Z).replace(/,/g, '‌') +
            B.substring(Z)),
          (G = B.indexOf('(', D));
      }
      return (
        (B = B.replace(/("|')(?:\\\1|.)*?\1/g, (Z) => Z.replace(/,/g, '‌'))),
        B.split(',').map((Z) => Ue(Z.replace(/\u200C/g, ',')))
      );
    }
    function g() {
      let F = o(),
        B = p(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
      if (!B) return;
      let D = Ue(B[0]);
      if (!p(/^:\s*/)) return l("property missing ':'");
      let G = p(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/),
        Z = F({
          type: ve.declaration,
          property: D.replace(Ja, ''),
          value: G ? Ue(G[0]).replace(Ja, '') : '',
        });
      return p(/^[;\s]*/), Z;
    }
    function R() {
      let F = [];
      if (!c()) return l("missing '{'");
      h(F);
      let B;
      for (; (B = g()); ) B && (F.push(B), h(F));
      return s() ? F : l("missing '}'");
    }
    function C() {
      let F,
        B = [],
        D = o();
      for (; (F = p(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)); )
        B.push(F[1]), p(/^,\s*/);
      if (B.length)
        return D({ type: ve.keyframe, values: B, declarations: R() || [] });
    }
    function _() {
      let F = o(),
        B = p(/^@([-\w]+)?keyframes\s*/);
      if (!B) return;
      let D = B[1],
        G = p(/^([-\w]+)\s*/);
      if (!G) return l('@keyframes missing name');
      let Z = G[1];
      if (!c()) return l("@keyframes missing '{'");
      let ue,
        Ee = h();
      for (; (ue = C()); ) Ee.push(ue), (Ee = Ee.concat(h()));
      return s()
        ? F({ type: ve.keyframes, name: Z, vendor: D, keyframes: Ee })
        : l("@keyframes missing '}'");
    }
    function w() {
      let F = o(),
        B = p(/^@supports *([^{]+)/);
      if (!B) return;
      let D = Ue(B[1]);
      if (!c()) return l("@supports missing '{'");
      let G = h().concat(d());
      return s()
        ? F({ type: ve.supports, supports: D, rules: G })
        : l("@supports missing '}'");
    }
    function E() {
      let F = o();
      if (!p(/^@host\s*/)) return;
      if (!c()) return l("@host missing '{'");
      let B = h().concat(d());
      return s() ? F({ type: ve.host, rules: B }) : l("@host missing '}'");
    }
    function v() {
      let F = o(),
        B = p(/^@container *([^{]+)/);
      if (!B) return;
      let D = Ue(B[1]);
      if (!c()) return l("@container missing '{'");
      let G = h().concat(d());
      return s()
        ? F({ type: ve.container, container: D, rules: G })
        : l("@container missing '}'");
    }
    function O() {
      let F = o(),
        B = p(/^@layer *([^{;@]+)/);
      if (!B) return;
      let D = Ue(B[1]);
      if (!c()) return p(/^[;\s]*/), F({ type: ve.layer, layer: D });
      let G = h().concat(d());
      return s()
        ? F({ type: ve.layer, layer: D, rules: G })
        : l("@layer missing '}'");
    }
    function $() {
      let F = o(),
        B = p(/^@media *([^{]+)/);
      if (!B) return;
      let D = Ue(B[1]);
      if (!c()) return l("@media missing '{'");
      let G = h().concat(d());
      return s()
        ? F({ type: ve.media, media: D, rules: G })
        : l("@media missing '}'");
    }
    function N() {
      let F = o(),
        B = p(/^@custom-media\s+(--\S+)\s*([^{;\s][^{;]*);/);
      if (B)
        return F({ type: ve.customMedia, name: Ue(B[1]), media: Ue(B[2]) });
    }
    function L() {
      let F = o();
      if (!p(/^@page */)) return;
      let B = b() || [];
      if (!c()) return l("@page missing '{'");
      let D = h(),
        G;
      for (; (G = g()); ) D.push(G), (D = D.concat(h()));
      return s()
        ? F({ type: ve.page, selectors: B, declarations: D })
        : l("@page missing '}'");
    }
    function j() {
      let F = o(),
        B = p(/^@([-\w]+)?document *([^{]+)/);
      if (!B) return;
      let D = Ue(B[1]),
        G = Ue(B[2]);
      if (!c()) return l("@document missing '{'");
      let Z = h().concat(d());
      return s()
        ? F({ type: ve.document, document: G, vendor: D, rules: Z })
        : l("@document missing '}'");
    }
    function I() {
      let F = o();
      if (!p(/^@font-face\s*/)) return;
      if (!c()) return l("@font-face missing '{'");
      let B = h(),
        D;
      for (; (D = g()); ) B.push(D), (B = B.concat(h()));
      return s()
        ? F({ type: ve.fontFace, declarations: B })
        : l("@font-face missing '}'");
    }
    function H() {
      let F = o();
      if (!p(/^@starting-style\s*/)) return;
      if (!c()) return l("@starting-style missing '{'");
      let B = h().concat(d());
      return s()
        ? F({ type: ve.startingStyle, rules: B })
        : l("@starting-style missing '}'");
    }
    let V = _e('import'),
      J = _e('charset'),
      W = _e('namespace');
    function _e(F) {
      let B = new RegExp(
        '^@' +
          F +
          `\\s*((?::?[^;'"]|"(?:\\\\"|[^"])*?"|'(?:\\\\'|[^'])*?')+)(?:;|$)`,
      );
      return function () {
        let D = o(),
          G = p(B);
        if (!G) return;
        let Z = { type: F };
        return (Z[F] = G[1].trim()), D(Z);
      };
    }
    function Le() {
      if (e[0] === '@')
        return (
          _() ||
          $() ||
          N() ||
          w() ||
          V() ||
          J() ||
          W() ||
          j() ||
          L() ||
          E() ||
          I() ||
          v() ||
          H() ||
          O()
        );
    }
    function Be() {
      let F = o(),
        B = b();
      return B
        ? (h(), F({ type: ve.rule, selectors: B, declarations: R() || [] }))
        : l('selector missing');
    }
    return Bo(u());
  };
function Ue(e) {
  return e ? e.trim() : '';
}
function Bo(e, t) {
  let r = e && typeof e.type == 'string',
    n = r ? e : t;
  for (let a in e) {
    let o = e[a];
    Array.isArray(o)
      ? o.forEach((i) => {
          Bo(i, n);
        })
      : o && typeof o == 'object' && Bo(o, n);
  }
  return (
    r &&
      Object.defineProperty(e, 'parent', {
        configurable: !0,
        writable: !0,
        enumerable: !1,
        value: t || null,
      }),
    e
  );
}
var sC = lC,
  uC = sC,
  cC = Object.prototype.toString;
function dC(e) {
  return typeof e == 'function' || cC.call(e) === '[object Function]';
}
function fC(e) {
  var t = Number(e);
  return isNaN(t)
    ? 0
    : t === 0 || !isFinite(t)
      ? t
      : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var pC = Math.pow(2, 53) - 1;
function hC(e) {
  var t = fC(e);
  return Math.min(Math.max(t, 0), pC);
}
function Ye(e, t) {
  var r = Array,
    n = Object(e);
  if (e == null)
    throw new TypeError(
      'Array.from requires an array-like object - not null or undefined',
    );
  for (
    var a = hC(n.length), o = dC(r) ? Object(new r(a)) : new Array(a), i = 0, l;
    i < a;

  )
    (l = n[i]), (o[i] = l), (i += 1);
  return (o.length = a), o;
}
function Xr(e) {
  '@babel/helpers - typeof';
  return (
    (Xr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Xr(e)
  );
}
function mC(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function bC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, Vf(n.key), n);
  }
}
function gC(e, t, r) {
  return (
    t && bC(e.prototype, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function yC(e, t, r) {
  return (
    (t = Vf(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Vf(e) {
  var t = vC(e, 'string');
  return Xr(t) === 'symbol' ? t : String(t);
}
function vC(e, t) {
  if (Xr(e) !== 'object' || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || 'default');
    if (Xr(n) !== 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var _C = (function () {
    function e() {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      mC(this, e), yC(this, 'items', void 0), (this.items = t);
    }
    return (
      gC(e, [
        {
          key: 'add',
          value: function (t) {
            return this.has(t) === !1 && this.items.push(t), this;
          },
        },
        {
          key: 'clear',
          value: function () {
            this.items = [];
          },
        },
        {
          key: 'delete',
          value: function (t) {
            var r = this.items.length;
            return (
              (this.items = this.items.filter(function (n) {
                return n !== t;
              })),
              r !== this.items.length
            );
          },
        },
        {
          key: 'forEach',
          value: function (t) {
            var r = this;
            this.items.forEach(function (n) {
              t(n, n, r);
            });
          },
        },
        {
          key: 'has',
          value: function (t) {
            return this.items.indexOf(t) !== -1;
          },
        },
        {
          key: 'size',
          get: function () {
            return this.items.length;
          },
        },
      ]),
      e
    );
  })(),
  EC = typeof Set > 'u' ? Set : _C;
function qe(e) {
  var t;
  return (t = e.localName) !== null && t !== void 0
    ? t
    : e.tagName.toLowerCase();
}
var wC = {
    article: 'article',
    aside: 'complementary',
    button: 'button',
    datalist: 'listbox',
    dd: 'definition',
    details: 'group',
    dialog: 'dialog',
    dt: 'term',
    fieldset: 'group',
    figure: 'figure',
    form: 'form',
    footer: 'contentinfo',
    h1: 'heading',
    h2: 'heading',
    h3: 'heading',
    h4: 'heading',
    h5: 'heading',
    h6: 'heading',
    header: 'banner',
    hr: 'separator',
    html: 'document',
    legend: 'legend',
    li: 'listitem',
    math: 'math',
    main: 'main',
    menu: 'list',
    nav: 'navigation',
    ol: 'list',
    optgroup: 'group',
    option: 'option',
    output: 'status',
    progress: 'progressbar',
    section: 'region',
    summary: 'button',
    table: 'table',
    tbody: 'rowgroup',
    textarea: 'textbox',
    tfoot: 'rowgroup',
    td: 'cell',
    th: 'columnheader',
    thead: 'rowgroup',
    tr: 'row',
    ul: 'list',
  },
  CC = {
    caption: new Set(['aria-label', 'aria-labelledby']),
    code: new Set(['aria-label', 'aria-labelledby']),
    deletion: new Set(['aria-label', 'aria-labelledby']),
    emphasis: new Set(['aria-label', 'aria-labelledby']),
    generic: new Set(['aria-label', 'aria-labelledby', 'aria-roledescription']),
    insertion: new Set(['aria-label', 'aria-labelledby']),
    none: new Set(['aria-label', 'aria-labelledby']),
    paragraph: new Set(['aria-label', 'aria-labelledby']),
    presentation: new Set(['aria-label', 'aria-labelledby']),
    strong: new Set(['aria-label', 'aria-labelledby']),
    subscript: new Set(['aria-label', 'aria-labelledby']),
    superscript: new Set(['aria-label', 'aria-labelledby']),
  };
function RC(e, t) {
  return [
    'aria-atomic',
    'aria-busy',
    'aria-controls',
    'aria-current',
    'aria-description',
    'aria-describedby',
    'aria-details',
    'aria-dropeffect',
    'aria-flowto',
    'aria-grabbed',
    'aria-hidden',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-live',
    'aria-owns',
    'aria-relevant',
    'aria-roledescription',
  ].some(function (r) {
    var n;
    return (
      e.hasAttribute(r) && !((n = CC[t]) !== null && n !== void 0 && n.has(r))
    );
  });
}
function Gf(e, t) {
  return RC(e, t);
}
function TC(e) {
  var t = PC(e);
  if (t === null || ko.indexOf(t) !== -1) {
    var r = SC(e);
    if (ko.indexOf(t || '') === -1 || Gf(e, r || '')) return r;
  }
  return t;
}
function SC(e) {
  var t = wC[qe(e)];
  if (t !== void 0) return t;
  switch (qe(e)) {
    case 'a':
    case 'area':
    case 'link':
      if (e.hasAttribute('href')) return 'link';
      break;
    case 'img':
      return e.getAttribute('alt') === '' && !Gf(e, 'img')
        ? 'presentation'
        : 'img';
    case 'input': {
      var r = e,
        n = r.type;
      switch (n) {
        case 'button':
        case 'image':
        case 'reset':
        case 'submit':
          return 'button';
        case 'checkbox':
        case 'radio':
          return n;
        case 'range':
          return 'slider';
        case 'email':
        case 'tel':
        case 'text':
        case 'url':
          return e.hasAttribute('list') ? 'combobox' : 'textbox';
        case 'search':
          return e.hasAttribute('list') ? 'combobox' : 'searchbox';
        case 'number':
          return 'spinbutton';
        default:
          return null;
      }
    }
    case 'select':
      return e.hasAttribute('multiple') || e.size > 1 ? 'listbox' : 'combobox';
  }
  return null;
}
function PC(e) {
  var t = e.getAttribute('role');
  if (t !== null) {
    var r = t.trim().split(' ')[0];
    if (r.length > 0) return r;
  }
  return null;
}
var ko = ['presentation', 'none'];
function ce(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function Wf(e) {
  return ce(e) && qe(e) === 'caption';
}
function Mn(e) {
  return ce(e) && qe(e) === 'input';
}
function OC(e) {
  return ce(e) && qe(e) === 'optgroup';
}
function AC(e) {
  return ce(e) && qe(e) === 'select';
}
function qC(e) {
  return ce(e) && qe(e) === 'table';
}
function xC(e) {
  return ce(e) && qe(e) === 'textarea';
}
function MC(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument,
    r = t.defaultView;
  if (r === null) throw new TypeError('no window available');
  return r;
}
function $C(e) {
  return ce(e) && qe(e) === 'fieldset';
}
function NC(e) {
  return ce(e) && qe(e) === 'legend';
}
function jC(e) {
  return ce(e) && qe(e) === 'slot';
}
function IC(e) {
  return ce(e) && e.ownerSVGElement !== void 0;
}
function LC(e) {
  return ce(e) && qe(e) === 'svg';
}
function BC(e) {
  return IC(e) && qe(e) === 'title';
}
function Wn(e, t) {
  if (ce(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(' '),
      n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r
      .map(function (a) {
        return n.getElementById(a);
      })
      .filter(function (a) {
        return a !== null;
      });
  }
  return [];
}
function mt(e, t) {
  return ce(e) ? t.indexOf(TC(e)) !== -1 : !1;
}
function kC(e) {
  return e.trim().replace(/\s\s+/g, ' ');
}
function DC(e, t) {
  if (!ce(e)) return !1;
  if (e.hasAttribute('hidden') || e.getAttribute('aria-hidden') === 'true')
    return !0;
  var r = t(e);
  return (
    r.getPropertyValue('display') === 'none' ||
    r.getPropertyValue('visibility') === 'hidden'
  );
}
function FC(e) {
  return mt(e, ['button', 'combobox', 'listbox', 'textbox']) || Kf(e, 'range');
}
function Kf(e, t) {
  if (!ce(e)) return !1;
  switch (t) {
    case 'range':
      return mt(e, [
        'meter',
        'progressbar',
        'scrollbar',
        'slider',
        'spinbutton',
      ]);
    default:
      throw new TypeError(
        "No knowledge about abstract role '".concat(
          t,
          "'. This is likely a bug :(",
        ),
      );
  }
}
function tu(e, t) {
  var r = Ye(e.querySelectorAll(t));
  return (
    Wn(e, 'aria-owns').forEach(function (n) {
      r.push.apply(r, Ye(n.querySelectorAll(t)));
    }),
    r
  );
}
function UC(e) {
  return AC(e)
    ? e.selectedOptions || tu(e, '[selected]')
    : tu(e, '[aria-selected="true"]');
}
function HC(e) {
  return mt(e, ko);
}
function zC(e) {
  return Wf(e);
}
function VC(e) {
  return mt(e, [
    'button',
    'cell',
    'checkbox',
    'columnheader',
    'gridcell',
    'heading',
    'label',
    'legend',
    'link',
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
    'option',
    'radio',
    'row',
    'rowheader',
    'switch',
    'tab',
    'tooltip',
    'treeitem',
  ]);
}
function GC(e) {
  return !1;
}
function WC(e) {
  return Mn(e) || xC(e) ? e.value : e.textContent || '';
}
function ru(e) {
  var t = e.getPropertyValue('content');
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : '';
}
function Yf(e) {
  var t = qe(e);
  return (
    t === 'button' ||
    (t === 'input' && e.getAttribute('type') !== 'hidden') ||
    t === 'meter' ||
    t === 'output' ||
    t === 'progress' ||
    t === 'select' ||
    t === 'textarea'
  );
}
function Jf(e) {
  if (Yf(e)) return e;
  var t = null;
  return (
    e.childNodes.forEach(function (r) {
      if (t === null && ce(r)) {
        var n = Jf(r);
        n !== null && (t = n);
      }
    }),
    t
  );
}
function KC(e) {
  if (e.control !== void 0) return e.control;
  var t = e.getAttribute('for');
  return t !== null ? e.ownerDocument.getElementById(t) : Jf(e);
}
function YC(e) {
  var t = e.labels;
  if (t === null) return t;
  if (t !== void 0) return Ye(t);
  if (!Yf(e)) return null;
  var r = e.ownerDocument;
  return Ye(r.querySelectorAll('label')).filter(function (n) {
    return KC(n) === e;
  });
}
function JC(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? Ye(e.childNodes) : t;
}
function Xf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = new EC(),
    n = MC(e),
    a = t.compute,
    o = a === void 0 ? 'name' : a,
    i = t.computedStyleSupportsPseudoElements,
    l = i === void 0 ? t.getComputedStyle !== void 0 : i,
    u = t.getComputedStyle,
    c = u === void 0 ? n.getComputedStyle.bind(n) : u,
    s = t.hidden,
    d = s === void 0 ? !1 : s;
  function p(b, g) {
    var R = '';
    if (ce(b) && l) {
      var C = c(b, '::before'),
        _ = ru(C);
      R = ''.concat(_, ' ').concat(R);
    }
    var w = jC(b) ? JC(b) : Ye(b.childNodes).concat(Wn(b, 'aria-owns'));
    if (
      (w.forEach(function (O) {
        var $ = y(O, {
            isEmbeddedInLabel: g.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0,
          }),
          N = ce(O) ? c(O).getPropertyValue('display') : 'inline',
          L = N !== 'inline' ? ' ' : '';
        R += ''.concat(L).concat($).concat(L);
      }),
      ce(b) && l)
    ) {
      var E = c(b, '::after'),
        v = ru(E);
      R = ''.concat(R, ' ').concat(v);
    }
    return R.trim();
  }
  function f(b, g) {
    var R = b.getAttributeNode(g);
    return R !== null && !r.has(R) && R.value.trim() !== ''
      ? (r.add(R), R.value)
      : null;
  }
  function h(b) {
    return ce(b) ? f(b, 'title') : null;
  }
  function m(b) {
    if (!ce(b)) return null;
    if ($C(b)) {
      r.add(b);
      for (var g = Ye(b.childNodes), R = 0; R < g.length; R += 1) {
        var C = g[R];
        if (NC(C))
          return y(C, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1,
          });
      }
    } else if (qC(b)) {
      r.add(b);
      for (var _ = Ye(b.childNodes), w = 0; w < _.length; w += 1) {
        var E = _[w];
        if (Wf(E))
          return y(E, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1,
          });
      }
    } else if (LC(b)) {
      r.add(b);
      for (var v = Ye(b.childNodes), O = 0; O < v.length; O += 1) {
        var $ = v[O];
        if (BC($)) return $.textContent;
      }
      return null;
    } else if (qe(b) === 'img' || qe(b) === 'area') {
      var N = f(b, 'alt');
      if (N !== null) return N;
    } else if (OC(b)) {
      var L = f(b, 'label');
      if (L !== null) return L;
    }
    if (
      Mn(b) &&
      (b.type === 'button' || b.type === 'submit' || b.type === 'reset')
    ) {
      var j = f(b, 'value');
      if (j !== null) return j;
      if (b.type === 'submit') return 'Submit';
      if (b.type === 'reset') return 'Reset';
    }
    var I = YC(b);
    if (I !== null && I.length !== 0)
      return (
        r.add(b),
        Ye(I)
          .map(function (W) {
            return y(W, {
              isEmbeddedInLabel: !0,
              isReferenced: !1,
              recursion: !0,
            });
          })
          .filter(function (W) {
            return W.length > 0;
          })
          .join(' ')
      );
    if (Mn(b) && b.type === 'image') {
      var H = f(b, 'alt');
      if (H !== null) return H;
      var V = f(b, 'title');
      return V !== null ? V : 'Submit Query';
    }
    if (mt(b, ['button'])) {
      var J = p(b, { isEmbeddedInLabel: !1, isReferenced: !1 });
      if (J !== '') return J;
    }
    return null;
  }
  function y(b, g) {
    if (r.has(b)) return '';
    if (!d && DC(b, c) && !g.isReferenced) return r.add(b), '';
    var R = ce(b) ? b.getAttributeNode('aria-labelledby') : null,
      C = R !== null && !r.has(R) ? Wn(b, 'aria-labelledby') : [];
    if (o === 'name' && !g.isReferenced && C.length > 0)
      return (
        r.add(R),
        C.map(function (N) {
          return y(N, {
            isEmbeddedInLabel: g.isEmbeddedInLabel,
            isReferenced: !0,
            recursion: !1,
          });
        }).join(' ')
      );
    var _ = g.recursion && FC(b) && o === 'name';
    if (!_) {
      var w = ((ce(b) && b.getAttribute('aria-label')) || '').trim();
      if (w !== '' && o === 'name') return r.add(b), w;
      if (!HC(b)) {
        var E = m(b);
        if (E !== null) return r.add(b), E;
      }
    }
    if (mt(b, ['menu'])) return r.add(b), '';
    if (_ || g.isEmbeddedInLabel || g.isReferenced) {
      if (mt(b, ['combobox', 'listbox'])) {
        r.add(b);
        var v = UC(b);
        return v.length === 0
          ? Mn(b)
            ? b.value
            : ''
          : Ye(v)
              .map(function (N) {
                return y(N, {
                  isEmbeddedInLabel: g.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0,
                });
              })
              .join(' ');
      }
      if (Kf(b, 'range'))
        return (
          r.add(b),
          b.hasAttribute('aria-valuetext')
            ? b.getAttribute('aria-valuetext')
            : b.hasAttribute('aria-valuenow')
              ? b.getAttribute('aria-valuenow')
              : b.getAttribute('value') || ''
        );
      if (mt(b, ['textbox'])) return r.add(b), WC(b);
    }
    if (VC(b) || (ce(b) && g.isReferenced) || zC(b) || GC()) {
      var O = p(b, {
        isEmbeddedInLabel: g.isEmbeddedInLabel,
        isReferenced: !1,
      });
      if (O !== '') return r.add(b), O;
    }
    if (b.nodeType === b.TEXT_NODE) return r.add(b), b.textContent || '';
    if (g.recursion)
      return (
        r.add(b),
        p(b, { isEmbeddedInLabel: g.isEmbeddedInLabel, isReferenced: !1 })
      );
    var $ = h(b);
    return $ !== null ? (r.add(b), $) : (r.add(b), '');
  }
  return kC(
    y(e, {
      isEmbeddedInLabel: !1,
      isReferenced: o === 'description',
      recursion: !1,
    }),
  );
}
function Qr(e) {
  '@babel/helpers - typeof';
  return (
    (Qr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Qr(e)
  );
}
function nu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function au(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nu(Object(r), !0).forEach(function (n) {
          XC(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : nu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function XC(e, t, r) {
  return (
    (t = QC(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function QC(e) {
  var t = ZC(e, 'string');
  return Qr(t) === 'symbol' ? t : String(t);
}
function ZC(e, t) {
  if (Qr(e) !== 'object' || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || 'default');
    if (Qr(n) !== 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function eR(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = Wn(e, 'aria-describedby')
      .map(function (o) {
        return Xf(o, au(au({}, t), {}, { compute: 'description' }));
      })
      .join(' ');
  if (r === '') {
    var n = e.getAttribute('aria-description');
    r = n === null ? '' : n;
  }
  if (r === '') {
    var a = e.getAttribute('title');
    r = a === null ? '' : a;
  }
  return r;
}
function tR(e) {
  return mt(e, [
    'caption',
    'code',
    'deletion',
    'emphasis',
    'generic',
    'insertion',
    'none',
    'paragraph',
    'presentation',
    'strong',
    'subscript',
    'superscript',
  ]);
}
function rR(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return tR(e) ? '' : Xf(e, t);
}
var Cl = Fe(ji(), 1),
  nR = Fe(Id(), 1),
  Qf = Fe(Wd(), 1),
  aR = Fe(Kd(), 1),
  Zf = class extends Error {
    constructor(e, t, r, n) {
      super(), Error.captureStackTrace && Error.captureStackTrace(this, r);
      let a = '';
      try {
        a = n.utils.printWithType('Received', t, n.utils.printReceived);
      } catch {}
      this.message = [
        n.utils.matcherHint(
          `${n.isNot ? '.not' : ''}.${r.name}`,
          'received',
          '',
        ),
        '',
        `${n.utils.RECEIVED_COLOR('received')} value must ${e}.`,
        a,
      ].join(`
`);
    }
  },
  ou = class extends Zf {
    constructor(...e) {
      super('be an HTMLElement or an SVGElement', ...e);
    }
  },
  iu = class extends Zf {
    constructor(...e) {
      super('be a Node', ...e);
    }
  };
function ep(e, t, ...r) {
  if (!e || !e.ownerDocument || !e.ownerDocument.defaultView)
    throw new t(e, ...r);
}
function oR(e, ...t) {
  ep(e, iu, ...t);
  let r = e.ownerDocument.defaultView;
  if (!(e instanceof r.Node)) throw new iu(e, ...t);
}
function oe(e, ...t) {
  ep(e, ou, ...t);
  let r = e.ownerDocument.defaultView;
  if (!(e instanceof r.HTMLElement) && !(e instanceof r.SVGElement))
    throw new ou(e, ...t);
}
var iR = class extends Error {
  constructor(e, t, r) {
    super(),
      Error.captureStackTrace && Error.captureStackTrace(this, t),
      (this.message = [
        e.message,
        '',
        r.utils.RECEIVED_COLOR('Failing css:'),
        r.utils.RECEIVED_COLOR(`${e.css}`),
      ].join(`
`));
  }
};
function lR(e, ...t) {
  let r = uC(`selector { ${e} }`, { silent: !0 }).stylesheet;
  if (r.parsingErrors && r.parsingErrors.length > 0) {
    let { reason: n, line: a } = r.parsingErrors[0];
    throw new iR(
      {
        css: e,
        message: `Syntax error parsing expected css: ${n} on line: ${a}`,
      },
      ...t,
    );
  }
  return r.rules[0].declarations
    .filter((n) => n.type === 'declaration')
    .reduce((n, { property: a, value: o }) => Object.assign(n, { [a]: o }), {});
}
function lu(e, t) {
  return typeof t == 'string' ? t : e.utils.stringify(t);
}
function Oe(e, t, r, n, a, o) {
  return [
    `${t}
`,
    `${r}:
${e.utils.EXPECTED_COLOR((0, eu.default)(lu(e, n), 2))}`,
    `${a}:
${e.utils.RECEIVED_COLOR((0, eu.default)(lu(e, o), 2))}`,
  ].join(`
`);
}
function sR(e, t) {
  return t instanceof RegExp ? t.test(e) : e.includes(String(t));
}
function Sa(e, t) {
  console.warn(
    `Warning: ${e} has been deprecated and will be removed in future updates.`,
    t,
  );
}
function Pa(e) {
  return e.replace(/\s+/g, ' ').trim();
}
function $t(e) {
  return e.tagName && e.tagName.toLowerCase();
}
function uR({ multiple: e, options: t }) {
  let r = [...t].filter((n) => n.selected);
  if (e) return [...r].map((n) => n.value);
  if (r.length !== 0) return r[0].value;
}
function cR(e) {
  switch (e.type) {
    case 'number':
      return e.value === '' ? null : Number(e.value);
    case 'checkbox':
      return e.checked;
    default:
      return e.value;
  }
}
var dR = ['meter', 'progressbar', 'slider', 'spinbutton'];
function fR(e) {
  if (dR.includes(e.getAttribute('role')))
    return Number(e.getAttribute('aria-valuenow'));
}
function tp(e) {
  if (e)
    switch (e.tagName.toLowerCase()) {
      case 'input':
        return cR(e);
      case 'select':
        return uR(e);
      default:
        return e.value ?? fR(e);
    }
}
function pR(
  e,
  { wordConnector: t = ', ', lastWordConnector: r = ' and ' } = {},
) {
  return [e.slice(0, -1).join(t), e[e.length - 1]].join(e.length > 1 ? r : '');
}
function rp(e, t) {
  if (Array.isArray(e) && Array.isArray(t))
    return [...new Set(e)].every((r) => new Set(t).has(r));
}
function Do(e, t) {
  return (
    Sa(
      'toBeInTheDOM',
      'Please use toBeInTheDocument for searching the entire document and toContainElement for searching a specific container.',
    ),
    e && oe(e, Do, this),
    t && oe(t, Do, this),
    {
      pass: t ? t.contains(e) : !!e,
      message: () =>
        [
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toBeInTheDOM`,
            'element',
            '',
          ),
          '',
          'Received:',
          `  ${this.utils.printReceived(e && e.cloneNode(!1))}`,
        ].join(`
`),
    }
  );
}
function np(e) {
  (e !== null || !this.isNot) && oe(e, np, this);
  let t = e === null ? !1 : e.ownerDocument === e.getRootNode({ composed: !0 }),
    r = () =>
      `expected document not to contain element, found ${this.utils.stringify(e.cloneNode(!0))} instead`,
    n = () => 'element could not be found in the document';
  return {
    pass: t,
    message: () =>
      [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeInTheDocument`,
          'element',
          '',
        ),
        '',
        this.utils.RECEIVED_COLOR(this.isNot ? r() : n()),
      ].join(`
`),
  };
}
function ap(e) {
  return (
    Sa(
      'toBeEmpty',
      'Please use instead toBeEmptyDOMElement for finding empty nodes in the DOM.',
    ),
    oe(e, ap, this),
    {
      pass: e.innerHTML === '',
      message: () =>
        [
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toBeEmpty`,
            'element',
            '',
          ),
          '',
          'Received:',
          `  ${this.utils.printReceived(e.innerHTML)}`,
        ].join(`
`),
    }
  );
}
function op(e) {
  return (
    oe(e, op, this),
    {
      pass: hR(e),
      message: () =>
        [
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toBeEmptyDOMElement`,
            'element',
            '',
          ),
          '',
          'Received:',
          `  ${this.utils.printReceived(e.innerHTML)}`,
        ].join(`
`),
    }
  );
}
function hR(e) {
  return [...e.childNodes].filter((t) => t.nodeType !== 8).length === 0;
}
function Fo(e, t) {
  return (
    oe(e, Fo, this),
    t !== null && oe(t, Fo, this),
    {
      pass: e.contains(t),
      message: () =>
        [
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toContainElement`,
            'element',
            'element',
          ),
          '',
          this.utils
            .RECEIVED_COLOR(`${this.utils.stringify(e.cloneNode(!1))} ${this.isNot ? 'contains:' : 'does not contain:'} ${this.utils.stringify(t && t.cloneNode(!1))}
        `),
        ].join(`
`),
    }
  );
}
function mR(e, t) {
  let r = e.ownerDocument.createElement('div');
  return (r.innerHTML = t), r.innerHTML;
}
function ip(e, t) {
  if ((oe(e, ip, this), typeof t != 'string'))
    throw new Error(`.toContainHTML() expects a string value, got ${t}`);
  return {
    pass: e.outerHTML.includes(mR(e, t)),
    message: () =>
      [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toContainHTML`,
          'element',
          '',
        ),
        'Expected:',
        `  ${this.utils.EXPECTED_COLOR(t)}`,
        'Received:',
        `  ${this.utils.printReceived(e.cloneNode(!0))}`,
      ].join(`
`),
  };
}
function lp(e, t, r = { normalizeWhitespace: !0 }) {
  oR(e, lp, this);
  let n = r.normalizeWhitespace
      ? Pa(e.textContent)
      : e.textContent.replace(/\u00a0/g, ' '),
    a = n !== '' && t === '';
  return {
    pass: !a && sR(n, t),
    message: () => {
      let o = this.isNot ? 'not to' : 'to';
      return Oe(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveTextContent`,
          'element',
          '',
        ),
        a
          ? 'Checking with empty string will always match, use .toBeEmptyDOMElement() instead'
          : `Expected element ${o} have text content`,
        t,
        'Received',
        n,
      );
    },
  };
}
function Uo(e, t) {
  oe(e, Uo, this);
  let r = eR(e),
    n = arguments.length === 1,
    a = !1;
  return (
    n
      ? (a = r !== '')
      : (a = t instanceof RegExp ? t.test(r) : this.equals(r, t)),
    {
      pass: a,
      message: () => {
        let o = this.isNot ? 'not to' : 'to';
        return Oe(
          this,
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.${Uo.name}`,
            'element',
            '',
          ),
          `Expected element ${o} have accessible description`,
          t,
          'Received',
          r,
        );
      },
    }
  );
}
var Nr = 'aria-invalid',
  bR = ['false'];
function sp(e, t) {
  var l;
  oe(e, sp, this);
  let r = this.isNot ? 'not to' : 'to',
    n = this.isNot
      ? '.not.toHaveAccessibleErrorMessage'
      : '.toHaveAccessibleErrorMessage',
    a = e.getAttribute('aria-errormessage');
  if (a && /\s+/.test(a))
    return {
      pass: !1,
      message: () =>
        Oe(
          this,
          this.utils.matcherHint(n, 'element'),
          "Expected element's `aria-errormessage` attribute to be empty or a single, valid ID",
          '',
          'Received',
          `aria-errormessage="${a}"`,
        ),
    };
  let o = e.getAttribute(Nr);
  if (!e.hasAttribute(Nr) || bR.includes(o))
    return {
      pass: !1,
      message: () =>
        Oe(
          this,
          this.utils.matcherHint(n, 'element'),
          'Expected element to be marked as invalid with attribute',
          `${Nr}="${String(!0)}"`,
          'Received',
          e.hasAttribute('aria-invalid')
            ? `${Nr}="${e.getAttribute(Nr)}`
            : null,
        ),
    };
  let i = Pa(
    ((l = e.ownerDocument.getElementById(a)) == null
      ? void 0
      : l.textContent) ?? '',
  );
  return {
    pass:
      t === void 0 ? !!i : t instanceof RegExp ? t.test(i) : this.equals(i, t),
    message: () =>
      Oe(
        this,
        this.utils.matcherHint(n, 'element'),
        `Expected element ${r} have accessible error message`,
        t ?? '',
        'Received',
        i,
      ),
  };
}
var gR = _R(Cl.elementRoles);
function Ho(e, t) {
  oe(e, Ho, this);
  let r = yR(e);
  return {
    pass: r.some((n) => n === t),
    message: () => {
      let n = this.isNot ? 'not to' : 'to';
      return Oe(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.${Ho.name}`,
          'element',
          '',
        ),
        `Expected element ${n} have role`,
        t,
        'Received',
        r.join(', '),
      );
    },
  };
}
function yR(e) {
  return e.hasAttribute('role')
    ? e.getAttribute('role').split(' ').filter(Boolean)
    : vR(e);
}
function vR(e) {
  for (let { match: t, roles: r } of gR) if (t(e)) return [...r];
  return [];
}
function _R(e) {
  function t({ name: i, attributes: l }) {
    return `${i}${l.map(({ name: u, value: c, constraints: s = [] }) => (s.indexOf('undefined') !== -1 ? `:not([${u}])` : c ? `[${u}="${c}"]` : `[${u}]`)).join('')}`;
  }
  function r({ attributes: i = [] }) {
    return i.length;
  }
  function n({ specificity: i }, { specificity: l }) {
    return l - i;
  }
  function a(i) {
    let { attributes: l = [] } = i,
      u = l.findIndex(
        (s) => s.value && s.name === 'type' && s.value === 'text',
      );
    u >= 0 && (l = [...l.slice(0, u), ...l.slice(u + 1)]);
    let c = t({ ...i, attributes: l });
    return (s) => (u >= 0 && s.type !== 'text' ? !1 : s.matches(c));
  }
  let o = [];
  for (let [i, l] of e.entries())
    o = [...o, { match: a(i), roles: Array.from(l), specificity: r(i) }];
  return o.sort(n);
}
function zo(e, t) {
  oe(e, zo, this);
  let r = rR(e),
    n = arguments.length === 1,
    a = !1;
  return (
    n
      ? (a = r !== '')
      : (a = t instanceof RegExp ? t.test(r) : this.equals(r, t)),
    {
      pass: a,
      message: () => {
        let o = this.isNot ? 'not to' : 'to';
        return Oe(
          this,
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.${zo.name}`,
            'element',
            '',
          ),
          `Expected element ${o} have accessible name`,
          t,
          'Received',
          r,
        );
      },
    }
  );
}
function su(e, t, r) {
  return r === void 0 ? t : `${t}=${e(r)}`;
}
function ER(e, t, r) {
  return r === void 0
    ? `element.hasAttribute(${e(t)})`
    : `element.getAttribute(${e(t)}) === ${e(r)}`;
}
function up(e, t, r) {
  oe(e, up, this);
  let n = r !== void 0,
    a = e.hasAttribute(t),
    o = e.getAttribute(t);
  return {
    pass: n ? a && this.equals(o, r) : a,
    message: () => {
      let i = this.isNot ? 'not to' : 'to',
        l = a ? su(this.utils.stringify, t, o) : null,
        u = this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveAttribute`,
          'element',
          this.utils.printExpected(t),
          {
            secondArgument: n ? this.utils.printExpected(r) : void 0,
            comment: ER(this.utils.stringify, t, r),
          },
        );
      return Oe(
        this,
        u,
        `Expected the element ${i} have attribute`,
        su(this.utils.stringify, t, r),
        'Received',
        l,
      );
    },
  };
}
function wR(e) {
  let t = e.pop(),
    r,
    n;
  return (
    typeof t == 'object' && !(t instanceof RegExp)
      ? ((r = e), (n = t))
      : ((r = e.concat(t)), (n = { exact: !1 })),
    { expectedClassNames: r, options: n }
  );
}
function uu(e) {
  return e ? e.split(/\s+/).filter((t) => t.length > 0) : [];
}
function cu(e, t) {
  return e.every((r) =>
    typeof r == 'string' ? t.includes(r) : t.some((n) => r.test(n)),
  );
}
function cp(e, ...t) {
  oe(e, cp, this);
  let { expectedClassNames: r, options: n } = wR(t),
    a = uu(e.getAttribute('class')),
    o = r.reduce(
      (l, u) => l.concat(typeof u == 'string' || !u ? uu(u) : u),
      [],
    ),
    i = o.some((l) => l instanceof RegExp);
  if (n.exact && i)
    throw new Error(
      'Exact option does not support RegExp expected class names',
    );
  return n.exact
    ? {
        pass: cu(o, a) && o.length === a.length,
        message: () => {
          let l = this.isNot ? 'not to' : 'to';
          return Oe(
            this,
            this.utils.matcherHint(
              `${this.isNot ? '.not' : ''}.toHaveClass`,
              'element',
              this.utils.printExpected(o.join(' ')),
            ),
            `Expected the element ${l} have EXACTLY defined classes`,
            o.join(' '),
            'Received',
            a.join(' '),
          );
        },
      }
    : o.length > 0
      ? {
          pass: cu(o, a),
          message: () => {
            let l = this.isNot ? 'not to' : 'to';
            return Oe(
              this,
              this.utils.matcherHint(
                `${this.isNot ? '.not' : ''}.toHaveClass`,
                'element',
                this.utils.printExpected(o.join(' ')),
              ),
              `Expected the element ${l} have class`,
              o.join(' '),
              'Received',
              a.join(' '),
            );
          },
        }
      : {
          pass: this.isNot ? a.length > 0 : !1,
          message: () =>
            this.isNot
              ? Oe(
                  this,
                  this.utils.matcherHint('.not.toHaveClass', 'element', ''),
                  'Expected the element to have classes',
                  '(none)',
                  'Received',
                  a.join(' '),
                )
              : [
                  this.utils.matcherHint('.toHaveClass', 'element'),
                  'At least one expected class must be provided.',
                ].join(`
`),
        };
}
function CR(e, t) {
  let r = {},
    n = e.createElement('div');
  return (
    Object.keys(t).forEach((a) => {
      (n.style[a] = t[a]), (r[a] = n.style[a]);
    }),
    r
  );
}
function RR(e, t) {
  return (
    !!Object.keys(e).length &&
    Object.entries(e).every(([r, n]) => {
      let a = r.startsWith('--'),
        o = [r];
      return (
        a || o.push(r.toLowerCase()),
        o.some((i) => t[i] === n || t.getPropertyValue(i) === n)
      );
    })
  );
}
function du(e) {
  return Object.keys(e)
    .sort()
    .map((t) => `${t}: ${e[t]};`).join(`
`);
}
function TR(e, t, r) {
  let n = Array.from(r)
    .filter((a) => t[a] !== void 0)
    .reduce((a, o) => Object.assign(a, { [o]: r.getPropertyValue(o) }), {});
  return e(du(t), du(n)).replace(
    `${nR.default.red('+ Received')}
`,
    '',
  );
}
function Vo(e, t) {
  oe(e, Vo, this);
  let r = typeof t == 'object' ? t : lR(t, Vo, this),
    { getComputedStyle: n } = e.ownerDocument.defaultView,
    a = CR(e.ownerDocument, r),
    o = n(e);
  return {
    pass: RR(a, o),
    message: () => {
      let i = `${this.isNot ? '.not' : ''}.toHaveStyle`;
      return [
        this.utils.matcherHint(i, 'element', ''),
        TR(this.utils.diff, a, o),
      ].join(`

`);
    },
  };
}
function dp(e) {
  return (
    oe(e, dp, this),
    {
      pass: e.ownerDocument.activeElement === e,
      message: () =>
        [
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toHaveFocus`,
            'element',
            '',
          ),
          '',
          ...(this.isNot
            ? [
                'Received element is focused:',
                `  ${this.utils.printReceived(e)}`,
              ]
            : [
                'Expected element with focus:',
                `  ${this.utils.printExpected(e)}`,
                'Received element with focus:',
                `  ${this.utils.printReceived(e.ownerDocument.activeElement)}`,
              ]),
        ].join(`
`),
    }
  );
}
function SR(e) {
  let t = [...new Set(e.map((r) => r.type))];
  if (t.length !== 1)
    throw new Error(
      'Multiple form elements with the same name must be of the same type',
    );
  switch (t[0]) {
    case 'radio': {
      let r = e.find((n) => n.checked);
      return r ? r.value : void 0;
    }
    case 'checkbox':
      return e.filter((r) => r.checked).map((r) => r.value);
    default:
      return e.map((r) => r.value);
  }
}
function PR(e, t) {
  let r = [...e.querySelectorAll(`[name="${(0, aR.default)(t)}"]`)];
  if (r.length !== 0)
    switch (r.length) {
      case 1:
        return tp(r[0]);
      default:
        return SR(r);
    }
}
function OR(e) {
  return /\[\]$/.test(e) ? e.slice(0, -2) : e;
}
function AR(e) {
  return Array.from(e.elements)
    .map((t) => t.name)
    .reduce((t, r) => ({ ...t, [OR(r)]: PR(e, r) }), {});
}
function fp(e, t) {
  if ((oe(e, fp, this), !e.elements))
    throw new Error('toHaveFormValues must be called on a form or a fieldset');
  let r = AR(e);
  return {
    pass: Object.entries(t).every(([n, a]) => (0, Qf.default)(r[n], a, rp)),
    message: () => {
      let n = this.isNot ? 'not to' : 'to',
        a = `${this.isNot ? '.not' : ''}.toHaveFormValues`,
        o = Object.keys(r)
          .filter((i) => t.hasOwnProperty(i))
          .reduce((i, l) => ({ ...i, [l]: r[l] }), {});
      return [
        this.utils.matcherHint(a, 'element', ''),
        `Expected the element ${n} have form values`,
        this.utils.diff(t, o),
      ].join(`

`);
    },
  };
}
function qR(e) {
  let { getComputedStyle: t } = e.ownerDocument.defaultView,
    { display: r, visibility: n, opacity: a } = t(e);
  return (
    r !== 'none' && n !== 'hidden' && n !== 'collapse' && a !== '0' && a !== 0
  );
}
function xR(e, t) {
  let r;
  return (
    t
      ? (r =
          e.nodeName === 'DETAILS' && t.nodeName !== 'SUMMARY'
            ? e.hasAttribute('open')
            : !0)
      : (r = e.nodeName === 'DETAILS' ? e.hasAttribute('open') : !0),
    !e.hasAttribute('hidden') && r
  );
}
function pp(e, t) {
  return qR(e) && xR(e, t) && (!e.parentElement || pp(e.parentElement, e));
}
function hp(e) {
  oe(e, hp, this);
  let t = e.ownerDocument === e.getRootNode({ composed: !0 }),
    r = t && pp(e);
  return {
    pass: r,
    message: () => {
      let n = r ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeVisible`,
          'element',
          '',
        ),
        '',
        `Received element ${n} visible${t ? '' : ' (element is not in the document)'}:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
var MR = [
  'fieldset',
  'input',
  'select',
  'optgroup',
  'option',
  'button',
  'textarea',
];
function $R(e, t) {
  return (
    $t(e) === 'legend' &&
    $t(t) === 'fieldset' &&
    e.isSameNode(Array.from(t.children).find((r) => $t(r) === 'legend'))
  );
}
function NR(e, t) {
  return bp(t) && !$R(e, t);
}
function jR(e) {
  return e.includes('-');
}
function mp(e) {
  let t = $t(e);
  return MR.includes(t) || jR(t);
}
function bp(e) {
  return mp(e) && e.hasAttribute('disabled');
}
function gp(e) {
  let t = e.parentElement;
  return !!t && (NR(e, t) || gp(t));
}
function yp(e) {
  return mp(e) && (bp(e) || gp(e));
}
function vp(e) {
  oe(e, vp, this);
  let t = yp(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeDisabled`,
          'element',
          '',
        ),
        '',
        `Received element ${r} disabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function _p(e) {
  oe(e, _p, this);
  let t = !yp(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeEnabled`,
          'element',
          '',
        ),
        '',
        `Received element ${r} enabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
var IR = ['select', 'textarea'],
  LR = ['input', 'select', 'textarea'],
  BR = ['color', 'hidden', 'range', 'submit', 'image', 'reset'],
  kR = [
    'checkbox',
    'combobox',
    'gridcell',
    'listbox',
    'radiogroup',
    'spinbutton',
    'textbox',
    'tree',
  ];
function DR(e) {
  return IR.includes($t(e)) && e.hasAttribute('required');
}
function FR(e) {
  return (
    $t(e) === 'input' &&
    e.hasAttribute('required') &&
    ((e.hasAttribute('type') && !BR.includes(e.getAttribute('type'))) ||
      !e.hasAttribute('type'))
  );
}
function UR(e) {
  return (
    e.hasAttribute('aria-required') &&
    e.getAttribute('aria-required') === 'true' &&
    (LR.includes($t(e)) ||
      (e.hasAttribute('role') && kR.includes(e.getAttribute('role'))))
  );
}
function Ep(e) {
  oe(e, Ep, this);
  let t = DR(e) || FR(e) || UR(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeRequired`,
          'element',
          '',
        ),
        '',
        `Received element ${r} required:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
var HR = ['form', 'input', 'select', 'textarea'];
function zR(e) {
  return (
    e.hasAttribute('aria-invalid') && e.getAttribute('aria-invalid') !== 'false'
  );
}
function VR(e) {
  return HR.includes($t(e));
}
function wp(e) {
  let t = zR(e);
  return VR(e) ? t || !e.checkValidity() : t;
}
function Cp(e) {
  oe(e, Cp, this);
  let t = wp(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeInvalid`,
          'element',
          '',
        ),
        '',
        `Received element ${r} currently invalid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function Rp(e) {
  oe(e, Rp, this);
  let t = !wp(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeValid`,
          'element',
          '',
        ),
        '',
        `Received element ${r} currently valid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function Tp(e, t) {
  if (
    (oe(e, Tp, this),
    e.tagName.toLowerCase() === 'input' &&
      ['checkbox', 'radio'].includes(e.type))
  )
    throw new Error(
      'input with type=checkbox or type=radio cannot be used with .toHaveValue(). Use .toBeChecked() for type=checkbox or .toHaveFormValues() instead',
    );
  let r = tp(e),
    n = t !== void 0,
    a = t,
    o = r;
  return (
    t == r &&
      t !== r &&
      ((a = `${t} (${typeof t})`), (o = `${r} (${typeof r})`)),
    {
      pass: n ? (0, Qf.default)(r, t, rp) : !!r,
      message: () => {
        let i = this.isNot ? 'not to' : 'to',
          l = this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toHaveValue`,
            'element',
            t,
          );
        return Oe(
          this,
          l,
          `Expected the element ${i} have value`,
          n ? a : '(any)',
          'Received',
          o,
        );
      },
    }
  );
}
function Sp(e, t) {
  oe(e, Sp, this);
  let r = e.tagName.toLowerCase();
  if (!['select', 'input', 'textarea'].includes(r))
    throw new Error(
      '.toHaveDisplayValue() currently supports only input, textarea or select elements, try with another matcher instead.',
    );
  if (r === 'input' && ['radio', 'checkbox'].includes(e.type))
    throw new Error(
      `.toHaveDisplayValue() currently does not support input[type="${e.type}"], try with another matcher instead.`,
    );
  let n = GR(r, e),
    a = WR(t),
    o = a.filter((u) =>
      n.some((c) =>
        u instanceof RegExp ? u.test(c) : this.equals(c, String(u)),
      ),
    ).length,
    i = o === n.length,
    l = o === a.length;
  return {
    pass: i && l,
    message: () =>
      Oe(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveDisplayValue`,
          'element',
          '',
        ),
        `Expected element ${this.isNot ? 'not ' : ''}to have display value`,
        t,
        'Received',
        n,
      ),
  };
}
function GR(e, t) {
  return e === 'select'
    ? Array.from(t)
        .filter((r) => r.selected)
        .map((r) => r.textContent)
    : [t.value];
}
function WR(e) {
  return e instanceof Array ? e : [e];
}
function Pp(e) {
  oe(e, Pp, this);
  let t = () =>
      e.tagName.toLowerCase() === 'input' &&
      ['checkbox', 'radio'].includes(e.type),
    r = () =>
      Op(e.getAttribute('role')) &&
      ['true', 'false'].includes(e.getAttribute('aria-checked'));
  if (!t() && !r())
    return {
      pass: !1,
      message: () =>
        `only inputs with type="checkbox" or type="radio" or elements with ${KR()} and a valid aria-checked attribute can be used with .toBeChecked(). Use .toHaveValue() instead`,
    };
  let n = () => (t() ? e.checked : e.getAttribute('aria-checked') === 'true');
  return {
    pass: n(),
    message: () => {
      let a = n() ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeChecked`,
          'element',
          '',
        ),
        '',
        `Received element ${a} checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function KR() {
  return pR(
    YR().map((e) => `role="${e}"`),
    { lastWordConnector: ' or ' },
  );
}
function YR() {
  return Cl.roles.keys().filter(Op);
}
function Op(e) {
  var t;
  return (
    ((t = Cl.roles.get(e)) == null ? void 0 : t.props['aria-checked']) !==
    void 0
  );
}
function Ap(e) {
  oe(e, Ap, this);
  let t = () => e.tagName.toLowerCase() === 'input' && e.type === 'checkbox',
    r = () => e.getAttribute('role') === 'checkbox';
  if (!t() && !r())
    return {
      pass: !1,
      message: () =>
        'only inputs with type="checkbox" or elements with role="checkbox" and a valid aria-checked attribute can be used with .toBePartiallyChecked(). Use .toHaveValue() instead',
    };
  let n = () => {
    let a = e.getAttribute('aria-checked') === 'mixed';
    return (t() && e.indeterminate) || a;
  };
  return {
    pass: n(),
    message: () => {
      let a = n() ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBePartiallyChecked`,
          'element',
          '',
        ),
        '',
        `Received element ${a} partially checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function qp(e, t) {
  Sa('toHaveDescription', 'Please use toHaveAccessibleDescription.'),
    oe(e, qp, this);
  let r = t !== void 0,
    n = (e.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean),
    a = '';
  if (n.length > 0) {
    let o = e.ownerDocument,
      i = n.map((l) => o.getElementById(l)).filter(Boolean);
    a = Pa(i.map((l) => l.textContent).join(' '));
  }
  return {
    pass: r ? (t instanceof RegExp ? t.test(a) : this.equals(a, t)) : !!a,
    message: () => {
      let o = this.isNot ? 'not to' : 'to';
      return Oe(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveDescription`,
          'element',
          '',
        ),
        `Expected the element ${o} have description`,
        this.utils.printExpected(t),
        'Received',
        this.utils.printReceived(a),
      );
    },
  };
}
function xp(e, t) {
  if (
    (Sa('toHaveErrorMessage', 'Please use toHaveAccessibleErrorMessage.'),
    oe(e, xp, this),
    !e.hasAttribute('aria-invalid') ||
      e.getAttribute('aria-invalid') === 'false')
  ) {
    let o = this.isNot ? '.not' : '';
    return {
      pass: !1,
      message: () =>
        Oe(
          this,
          this.utils.matcherHint(`${o}.toHaveErrorMessage`, 'element', ''),
          'Expected the element to have invalid state indicated by',
          'aria-invalid="true"',
          'Received',
          e.hasAttribute('aria-invalid')
            ? `aria-invalid="${e.getAttribute('aria-invalid')}"`
            : this.utils.printReceived(''),
        ),
    };
  }
  let r = t !== void 0,
    n = (e.getAttribute('aria-errormessage') || '')
      .split(/\s+/)
      .filter(Boolean),
    a = '';
  if (n.length > 0) {
    let o = e.ownerDocument,
      i = n.map((l) => o.getElementById(l)).filter(Boolean);
    a = Pa(i.map((l) => l.textContent).join(' '));
  }
  return {
    pass: r ? (t instanceof RegExp ? t.test(a) : this.equals(a, t)) : !!a,
    message: () => {
      let o = this.isNot ? 'not to' : 'to';
      return Oe(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveErrorMessage`,
          'element',
          '',
        ),
        `Expected the element ${o} have error message`,
        this.utils.printExpected(t),
        'Received',
        this.utils.printReceived(a),
      );
    },
  };
}
Fe(Nd(), 1);
Fe(ji(), 1);
Fe(Id(), 1);
Fe(Wd(), 1);
Fe(Kd(), 1);
function ft(e, t, r) {
  let n = typeof e;
  if (!r.includes(n))
    throw new TypeError(
      `${t} value must be ${r.join(' or ')}, received "${n}"`,
    );
}
function $n(e) {
  return e != null && typeof e == 'object' && !Array.isArray(e);
}
function JR(e) {
  return (
    e === Object.prototype || e === Function.prototype || e === RegExp.prototype
  );
}
function Go(e) {
  return Object.prototype.toString.apply(e).slice(8, -1);
}
function XR(e, t) {
  let r = typeof t == 'function' ? t : (n) => t.add(n);
  Object.getOwnPropertyNames(e).forEach(r),
    Object.getOwnPropertySymbols(e).forEach(r);
}
function Mp(e) {
  let t = new Set();
  return JR(e) ? [] : (XR(e, t), Array.from(t));
}
var $p = { forceWritable: !1 };
function fu(e, t = $p) {
  return Wo(e, new WeakMap(), t);
}
function Wo(e, t, r = $p) {
  let n, a;
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    for (a = Array((n = e.length)), t.set(e, a); n--; ) a[n] = Wo(e[n], t, r);
    return a;
  }
  if (Object.prototype.toString.call(e) === '[object Object]') {
    (a = Object.create(Object.getPrototypeOf(e))), t.set(e, a);
    let o = Mp(e);
    for (let i of o) {
      let l = Object.getOwnPropertyDescriptor(e, i);
      if (!l) continue;
      let u = Wo(e[i], t, r);
      r.forceWritable
        ? Object.defineProperty(a, i, {
            enumerable: l.enumerable,
            configurable: !0,
            writable: !0,
            value: u,
          })
        : 'get' in l
          ? Object.defineProperty(a, i, {
              ...l,
              get() {
                return u;
              },
            })
          : Object.defineProperty(a, i, { ...l, value: u });
    }
    return a;
  }
  return e;
}
var pu = {
    bold: ['1', '22'],
    dim: ['2', '22'],
    italic: ['3', '23'],
    underline: ['4', '24'],
    inverse: ['7', '27'],
    hidden: ['8', '28'],
    strike: ['9', '29'],
    black: ['30', '39'],
    red: ['31', '39'],
    green: ['32', '39'],
    yellow: ['33', '39'],
    blue: ['34', '39'],
    magenta: ['35', '39'],
    cyan: ['36', '39'],
    white: ['37', '39'],
    brightblack: ['30;1', '39'],
    brightred: ['31;1', '39'],
    brightgreen: ['32;1', '39'],
    brightyellow: ['33;1', '39'],
    brightblue: ['34;1', '39'],
    brightmagenta: ['35;1', '39'],
    brightcyan: ['36;1', '39'],
    brightwhite: ['37;1', '39'],
    grey: ['90', '39'],
  },
  QR = {
    special: 'cyan',
    number: 'yellow',
    bigint: 'yellow',
    boolean: 'yellow',
    undefined: 'grey',
    null: 'bold',
    string: 'green',
    symbol: 'green',
    date: 'magenta',
    regexp: 'red',
  },
  yr = '…';
function ZR(e, t) {
  let r = pu[QR[t]] || pu[t] || '';
  return r ? `\x1B[${r[0]}m${String(e)}\x1B[${r[1]}m` : String(e);
}
function eT(
  {
    showHidden: e = !1,
    depth: t = 2,
    colors: r = !1,
    customInspect: n = !0,
    showProxy: a = !1,
    maxArrayLength: o = 1 / 0,
    breakLength: i = 1 / 0,
    seen: l = [],
    truncate: u = 1 / 0,
    stylize: c = String,
  } = {},
  s,
) {
  let d = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!r,
    customInspect: !!n,
    showProxy: !!a,
    maxArrayLength: Number(o),
    breakLength: Number(i),
    truncate: Number(u),
    seen: l,
    inspect: s,
    stylize: c,
  };
  return d.colors && (d.stylize = ZR), d;
}
function tT(e) {
  return e >= '\uD800' && e <= '\uDBFF';
}
function Bt(e, t, r = yr) {
  e = String(e);
  let n = r.length,
    a = e.length;
  if (n > t && a > n) return r;
  if (a > t && a > n) {
    let o = t - n;
    return o > 0 && tT(e[o - 1]) && (o = o - 1), `${e.slice(0, o)}${r}`;
  }
  return e;
}
function et(e, t, r, n = ', ') {
  r = r || t.inspect;
  let a = e.length;
  if (a === 0) return '';
  let o = t.truncate,
    i = '',
    l = '',
    u = '';
  for (let c = 0; c < a; c += 1) {
    let s = c + 1 === e.length,
      d = c + 2 === e.length;
    u = `${yr}(${e.length - c})`;
    let p = e[c];
    t.truncate = o - i.length - (s ? 0 : n.length);
    let f = l || r(p, t) + (s ? '' : n),
      h = i.length + f.length,
      m = h + u.length;
    if (
      (s && h > o && i.length + u.length <= o) ||
      (!s && !d && m > o) ||
      ((l = s ? '' : r(e[c + 1], t) + (d ? '' : n)),
      !s && d && m > o && h + l.length > o)
    )
      break;
    if (((i += f), !s && !d && h + l.length >= o)) {
      u = `${yr}(${e.length - c - 1})`;
      break;
    }
    u = '';
  }
  return `${i}${u}`;
}
function rT(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)
    ? e
    : JSON.stringify(e)
        .replace(/'/g, "\\'")
        .replace(/\\"/g, '"')
        .replace(/(^"|"$)/g, "'");
}
function Zr([e, t], r) {
  return (
    (r.truncate -= 2),
    typeof e == 'string'
      ? (e = rT(e))
      : typeof e != 'number' && (e = `[${r.inspect(e, r)}]`),
    (r.truncate -= e.length),
    (t = r.inspect(t, r)),
    `${e}: ${t}`
  );
}
function nT(e, t) {
  let r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length) return '[]';
  t.truncate -= 4;
  let n = et(e, t);
  t.truncate -= n.length;
  let a = '';
  return (
    r.length &&
      (a = et(
        r.map((o) => [o, e[o]]),
        t,
        Zr,
      )),
    `[ ${n}${a ? `, ${a}` : ''} ]`
  );
}
var aT = (e) =>
  typeof Buffer == 'function' && e instanceof Buffer
    ? 'Buffer'
    : e[Symbol.toStringTag]
      ? e[Symbol.toStringTag]
      : e.constructor.name;
function pt(e, t) {
  let r = aT(e);
  t.truncate -= r.length + 4;
  let n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length) return `${r}[]`;
  let a = '';
  for (let i = 0; i < e.length; i++) {
    let l = `${t.stylize(Bt(e[i], t.truncate), 'number')}${i === e.length - 1 ? '' : ', '}`;
    if (((t.truncate -= l.length), e[i] !== e.length && t.truncate <= 3)) {
      a += `${yr}(${e.length - e[i] + 1})`;
      break;
    }
    a += l;
  }
  let o = '';
  return (
    n.length &&
      (o = et(
        n.map((i) => [i, e[i]]),
        t,
        Zr,
      )),
    `${r}[ ${a}${o ? `, ${o}` : ''} ]`
  );
}
function oT(e, t) {
  let r = e.toJSON();
  if (r === null) return 'Invalid Date';
  let n = r.split('T'),
    a = n[0];
  return t.stylize(`${a}T${Bt(n[1], t.truncate - a.length - 1)}`, 'date');
}
function hu(e, t) {
  let r = e[Symbol.toStringTag] || 'Function',
    n = e.name;
  return n
    ? t.stylize(`[${r} ${Bt(n, t.truncate - 11)}]`, 'special')
    : t.stylize(`[${r}]`, 'special');
}
function iT([e, t], r) {
  return (
    (r.truncate -= 4),
    (e = r.inspect(e, r)),
    (r.truncate -= e.length),
    (t = r.inspect(t, r)),
    `${e} => ${t}`
  );
}
function lT(e) {
  let t = [];
  return (
    e.forEach((r, n) => {
      t.push([n, r]);
    }),
    t
  );
}
function sT(e, t) {
  return e.size - 1 <= 0
    ? 'Map{}'
    : ((t.truncate -= 7), `Map{ ${et(lT(e), t, iT)} }`);
}
var uT = Number.isNaN || ((e) => e !== e);
function mu(e, t) {
  return uT(e)
    ? t.stylize('NaN', 'number')
    : e === 1 / 0
      ? t.stylize('Infinity', 'number')
      : e === -1 / 0
        ? t.stylize('-Infinity', 'number')
        : e === 0
          ? t.stylize(1 / e === 1 / 0 ? '+0' : '-0', 'number')
          : t.stylize(Bt(String(e), t.truncate), 'number');
}
function bu(e, t) {
  let r = Bt(e.toString(), t.truncate - 1);
  return r !== yr && (r += 'n'), t.stylize(r, 'bigint');
}
function cT(e, t) {
  let r = e.toString().split('/')[2],
    n = t.truncate - (2 + r.length),
    a = e.source;
  return t.stylize(`/${Bt(a, n)}/${r}`, 'regexp');
}
function dT(e) {
  let t = [];
  return (
    e.forEach((r) => {
      t.push(r);
    }),
    t
  );
}
function fT(e, t) {
  return e.size === 0 ? 'Set{}' : ((t.truncate -= 7), `Set{ ${et(dT(e), t)} }`);
}
var gu = new RegExp(
    "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
    'g',
  ),
  pT = {
    '\b': '\\b',
    '	': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    "'": "\\'",
    '\\': '\\\\',
  },
  hT = 16,
  mT = 4;
function bT(e) {
  return pT[e] || `\\u${`0000${e.charCodeAt(0).toString(hT)}`.slice(-mT)}`;
}
function yu(e, t) {
  return (
    gu.test(e) && (e = e.replace(gu, bT)),
    t.stylize(`'${Bt(e, t.truncate - 2)}'`, 'string')
  );
}
function vu(e) {
  return 'description' in Symbol.prototype
    ? e.description
      ? `Symbol(${e.description})`
      : 'Symbol()'
    : e.toString();
}
var Np = () => 'Promise{…}';
try {
  let {
    getPromiseDetails: e,
    kPending: t,
    kRejected: r,
  } = process.binding('util');
  Array.isArray(e(Promise.resolve())) &&
    (Np = (n, a) => {
      let [o, i] = e(n);
      return o === t
        ? 'Promise{<pending>}'
        : `Promise${o === r ? '!' : ''}{${a.inspect(i, a)}}`;
    });
} catch {}
var gT = Np;
function Nn(e, t) {
  let r = Object.getOwnPropertyNames(e),
    n = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (r.length === 0 && n.length === 0) return '{}';
  if (((t.truncate -= 4), (t.seen = t.seen || []), t.seen.indexOf(e) >= 0))
    return '[Circular]';
  t.seen.push(e);
  let a = et(
      r.map((l) => [l, e[l]]),
      t,
      Zr,
    ),
    o = et(
      n.map((l) => [l, e[l]]),
      t,
      Zr,
    );
  t.seen.pop();
  let i = '';
  return a && o && (i = ', '), `{ ${a}${i}${o} }`;
}
var Xa = typeof Symbol < 'u' && Symbol.toStringTag ? Symbol.toStringTag : !1;
function yT(e, t) {
  let r = '';
  return (
    Xa && Xa in e && (r = e[Xa]),
    (r = r || e.constructor.name),
    (!r || r === '_class') && (r = '<Anonymous Class>'),
    (t.truncate -= r.length),
    `${r}${Nn(e, t)}`
  );
}
function vT(e, t) {
  return e.length === 0
    ? 'Arguments[]'
    : ((t.truncate -= 13), `Arguments[ ${et(e, t)} ]`);
}
var _T = [
  'stack',
  'line',
  'column',
  'name',
  'message',
  'fileName',
  'lineNumber',
  'columnNumber',
  'number',
  'description',
];
function ET(e, t) {
  let r = Object.getOwnPropertyNames(e).filter((i) => _T.indexOf(i) === -1),
    n = e.name;
  t.truncate -= n.length;
  let a = '';
  typeof e.message == 'string'
    ? (a = Bt(e.message, t.truncate))
    : r.unshift('message'),
    (a = a ? `: ${a}` : ''),
    (t.truncate -= a.length + 5);
  let o = et(
    r.map((i) => [i, e[i]]),
    t,
    Zr,
  );
  return `${n}${a}${o ? ` { ${o} }` : ''}`;
}
function wT([e, t], r) {
  return (
    (r.truncate -= 3),
    t
      ? `${r.stylize(String(e), 'yellow')}=${r.stylize(`"${t}"`, 'string')}`
      : `${r.stylize(String(e), 'yellow')}`
  );
}
function Ko(e, t) {
  return et(
    e,
    t,
    jp,
    `
`,
  );
}
function jp(e, t) {
  let r = e.getAttributeNames(),
    n = e.tagName.toLowerCase(),
    a = t.stylize(`<${n}`, 'special'),
    o = t.stylize('>', 'special'),
    i = t.stylize(`</${n}>`, 'special');
  t.truncate -= n.length * 2 + 5;
  let l = '';
  r.length > 0 &&
    ((l += ' '),
    (l += et(
      r.map((s) => [s, e.getAttribute(s)]),
      t,
      wT,
      ' ',
    ))),
    (t.truncate -= l.length);
  let u = t.truncate,
    c = Ko(e.children, t);
  return (
    c && c.length > u && (c = `${yr}(${e.children.length})`),
    `${a}${l}${o}${c}${i}`
  );
}
var CT = typeof Symbol == 'function' && typeof Symbol.for == 'function',
  Qa = CT ? Symbol.for('chai/inspect') : '@@chai/inspect',
  ir = !1;
try {
  let e = m_('util');
  ir = e.inspect ? e.inspect.custom : !1;
} catch {
  ir = !1;
}
var _u = new WeakMap(),
  Eu = {},
  wu = {
    undefined: (e, t) => t.stylize('undefined', 'undefined'),
    null: (e, t) => t.stylize('null', 'null'),
    boolean: (e, t) => t.stylize(String(e), 'boolean'),
    Boolean: (e, t) => t.stylize(String(e), 'boolean'),
    number: mu,
    Number: mu,
    bigint: bu,
    BigInt: bu,
    string: yu,
    String: yu,
    function: hu,
    Function: hu,
    symbol: vu,
    Symbol: vu,
    Array: nT,
    Date: oT,
    Map: sT,
    Set: fT,
    RegExp: cT,
    Promise: gT,
    WeakSet: (e, t) => t.stylize('WeakSet{…}', 'special'),
    WeakMap: (e, t) => t.stylize('WeakMap{…}', 'special'),
    Arguments: vT,
    Int8Array: pt,
    Uint8Array: pt,
    Uint8ClampedArray: pt,
    Int16Array: pt,
    Uint16Array: pt,
    Int32Array: pt,
    Uint32Array: pt,
    Float32Array: pt,
    Float64Array: pt,
    Generator: () => '',
    DataView: () => '',
    ArrayBuffer: () => '',
    Error: ET,
    HTMLCollection: Ko,
    NodeList: Ko,
  },
  RT = (e, t, r) =>
    Qa in e && typeof e[Qa] == 'function'
      ? e[Qa](t)
      : ir && ir in e && typeof e[ir] == 'function'
        ? e[ir](t.depth, t)
        : 'inspect' in e && typeof e.inspect == 'function'
          ? e.inspect(t.depth, t)
          : 'constructor' in e && _u.has(e.constructor)
            ? _u.get(e.constructor)(e, t)
            : Eu[r]
              ? Eu[r](e, t)
              : '',
  TT = Object.prototype.toString;
function Yo(e, t = {}) {
  let r = eT(t, Yo),
    { customInspect: n } = r,
    a = e === null ? 'null' : typeof e;
  if ((a === 'object' && (a = TT.call(e).slice(8, -1)), a in wu))
    return wu[a](e, r);
  if (n && e) {
    let i = RT(e, r, a);
    if (i) return typeof i == 'string' ? i : Yo(i, r);
  }
  let o = e ? Object.getPrototypeOf(e) : !1;
  return o === Object.prototype || o === null
    ? Nn(e, r)
    : e && typeof HTMLElement == 'function' && e instanceof HTMLElement
      ? jp(e, r)
      : 'constructor' in e
        ? e.constructor !== Object
          ? yT(e, r)
          : Nn(e, r)
        : e === Object(e)
          ? Nn(e, r)
          : r.stylize(String(e), a);
}
var ST = {
    reset: [0, 0],
    bold: [1, 22, '\x1B[22m\x1B[1m'],
    dim: [2, 22, '\x1B[22m\x1B[2m'],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    blackBright: [90, 39],
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39],
    bgBlackBright: [100, 49],
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49],
  },
  PT = Object.entries(ST);
function Rl(e) {
  return String(e);
}
Rl.open = '';
Rl.close = '';
function OT(e = !1) {
  let t = typeof process < 'u' ? process : void 0,
    r = (t == null ? void 0 : t.env) || {},
    n = (t == null ? void 0 : t.argv) || [];
  return (
    (!('NO_COLOR' in r || n.includes('--no-color')) &&
      ('FORCE_COLOR' in r ||
        n.includes('--color') ||
        (t == null ? void 0 : t.platform) === 'win32' ||
        (e && r.TERM !== 'dumb') ||
        'CI' in r)) ||
    (typeof window < 'u' && !!window.chrome)
  );
}
function AT(e = !1) {
  let t = OT(e),
    r = (i, l, u, c) => {
      let s = '',
        d = 0;
      do
        (s += i.substring(d, c) + u), (d = c + l.length), (c = i.indexOf(l, d));
      while (~c);
      return s + i.substring(d);
    },
    n = (i, l, u = i) => {
      let c = (s) => {
        let d = String(s),
          p = d.indexOf(l, i.length);
        return ~p ? i + r(d, l, u, p) + l : i + d + l;
      };
      return (c.open = i), (c.close = l), c;
    },
    a = { isColorSupported: t },
    o = (i) => `\x1B[${i}m`;
  for (let [i, l] of PT) a[i] = t ? n(o(l[0]), o(l[1]), l[2]) : Rl;
  return a;
}
var me = AT(!1);
function qT(e, t) {
  let r = Object.keys(e),
    n = t === null ? r : r.sort(t);
  if (Object.getOwnPropertySymbols)
    for (let a of Object.getOwnPropertySymbols(e))
      Object.getOwnPropertyDescriptor(e, a).enumerable && n.push(a);
  return n;
}
function Oa(e, t, r, n, a, o, i = ': ') {
  let l = '',
    u = 0,
    c = e.next();
  if (!c.done) {
    l += t.spacingOuter;
    let s = r + t.indent;
    for (; !c.done; ) {
      if (((l += s), u++ === t.maxWidth)) {
        l += '…';
        break;
      }
      let d = o(c.value[0], t, s, n, a),
        p = o(c.value[1], t, s, n, a);
      (l += d + i + p),
        (c = e.next()),
        c.done ? t.min || (l += ',') : (l += `,${t.spacingInner}`);
    }
    l += t.spacingOuter + r;
  }
  return l;
}
function Tl(e, t, r, n, a, o) {
  let i = '',
    l = 0,
    u = e.next();
  if (!u.done) {
    i += t.spacingOuter;
    let c = r + t.indent;
    for (; !u.done; ) {
      if (((i += c), l++ === t.maxWidth)) {
        i += '…';
        break;
      }
      (i += o(u.value, t, c, n, a)),
        (u = e.next()),
        u.done ? t.min || (i += ',') : (i += `,${t.spacingInner}`);
    }
    i += t.spacingOuter + r;
  }
  return i;
}
function Kn(e, t, r, n, a, o) {
  let i = '';
  e = e instanceof ArrayBuffer ? new DataView(e) : e;
  let l = (c) => c instanceof DataView,
    u = l(e) ? e.byteLength : e.length;
  if (u > 0) {
    i += t.spacingOuter;
    let c = r + t.indent;
    for (let s = 0; s < u; s++) {
      if (((i += c), s === t.maxWidth)) {
        i += '…';
        break;
      }
      (l(e) || s in e) && (i += o(l(e) ? e.getInt8(s) : e[s], t, c, n, a)),
        s < u - 1 ? (i += `,${t.spacingInner}`) : t.min || (i += ',');
    }
    i += t.spacingOuter + r;
  }
  return i;
}
function Sl(e, t, r, n, a, o) {
  let i = '',
    l = qT(e, t.compareKeys);
  if (l.length > 0) {
    i += t.spacingOuter;
    let u = r + t.indent;
    for (let c = 0; c < l.length; c++) {
      let s = l[c],
        d = o(s, t, u, n, a),
        p = o(e[s], t, u, n, a);
      (i += `${u + d}: ${p}`),
        c < l.length - 1 ? (i += `,${t.spacingInner}`) : t.min || (i += ',');
    }
    i += t.spacingOuter + r;
  }
  return i;
}
var xT =
    typeof Symbol == 'function' && Symbol.for
      ? Symbol.for('jest.asymmetricMatcher')
      : 1267621,
  Za = ' ',
  MT = (e, t, r, n, a, o) => {
    let i = e.toString();
    if (i === 'ArrayContaining' || i === 'ArrayNotContaining')
      return ++n > t.maxDepth
        ? `[${i}]`
        : `${i + Za}[${Kn(e.sample, t, r, n, a, o)}]`;
    if (i === 'ObjectContaining' || i === 'ObjectNotContaining')
      return ++n > t.maxDepth
        ? `[${i}]`
        : `${i + Za}{${Sl(e.sample, t, r, n, a, o)}}`;
    if (
      i === 'StringMatching' ||
      i === 'StringNotMatching' ||
      i === 'StringContaining' ||
      i === 'StringNotContaining'
    )
      return i + Za + o(e.sample, t, r, n, a);
    if (typeof e.toAsymmetricMatcher != 'function')
      throw new TypeError(
        `Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`,
      );
    return e.toAsymmetricMatcher();
  },
  $T = (e) => e && e.$$typeof === xT,
  NT = { serialize: MT, test: $T },
  jT = ' ',
  Ip = new Set(['DOMStringMap', 'NamedNodeMap']),
  IT = /^(?:HTML\w*Collection|NodeList)$/;
function LT(e) {
  return Ip.has(e) || IT.test(e);
}
var BT = (e) =>
  e && e.constructor && !!e.constructor.name && LT(e.constructor.name);
function kT(e) {
  return e.constructor.name === 'NamedNodeMap';
}
var DT = (e, t, r, n, a, o) => {
    let i = e.constructor.name;
    return ++n > t.maxDepth
      ? `[${i}]`
      : (t.min ? '' : i + jT) +
          (Ip.has(i)
            ? `{${Sl(kT(e) ? [...e].reduce((l, u) => ((l[u.name] = u.value), l), {}) : { ...e }, t, r, n, a, o)}}`
            : `[${Kn([...e], t, r, n, a, o)}]`);
  },
  FT = { serialize: DT, test: BT };
function Lp(e) {
  return e.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}
function Pl(e, t, r, n, a, o, i) {
  let l = n + r.indent,
    u = r.colors;
  return e
    .map((c) => {
      let s = t[c],
        d = i(s, r, l, a, o);
      return (
        typeof s != 'string' &&
          (d.includes(`
`) && (d = r.spacingOuter + l + d + r.spacingOuter + n),
          (d = `{${d}}`)),
        `${r.spacingInner + n + u.prop.open + c + u.prop.close}=${u.value.open}${d}${u.value.close}`
      );
    })
    .join('');
}
function Ol(e, t, r, n, a, o) {
  return e
    .map(
      (i) =>
        t.spacingOuter +
        r +
        (typeof i == 'string' ? Bp(i, t) : o(i, t, r, n, a)),
    )
    .join('');
}
function Bp(e, t) {
  let r = t.colors.content;
  return r.open + Lp(e) + r.close;
}
function UT(e, t) {
  let r = t.colors.comment;
  return `${r.open}<!--${Lp(e)}-->${r.close}`;
}
function Al(e, t, r, n, a) {
  let o = n.colors.tag;
  return `${o.open}<${e}${t && o.close + t + n.spacingOuter + a + o.open}${r ? `>${o.close}${r}${n.spacingOuter}${a}${o.open}</${e}` : `${t && !n.min ? '' : ' '}/`}>${o.close}`;
}
function ql(e, t) {
  let r = t.colors.tag;
  return `${r.open}<${e}${r.close} …${r.open} />${r.close}`;
}
var HT = 1,
  kp = 3,
  Dp = 8,
  Fp = 11,
  zT = /^(?:(?:HTML|SVG)\w*)?Element$/;
function VT(e) {
  try {
    return typeof e.hasAttribute == 'function' && e.hasAttribute('is');
  } catch {
    return !1;
  }
}
function GT(e) {
  let t = e.constructor.name,
    { nodeType: r, tagName: n } = e,
    a = (typeof n == 'string' && n.includes('-')) || VT(e);
  return (
    (r === HT && (zT.test(t) || a)) ||
    (r === kp && t === 'Text') ||
    (r === Dp && t === 'Comment') ||
    (r === Fp && t === 'DocumentFragment')
  );
}
var WT = (e) => {
  var t;
  return (
    ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.name) &&
    GT(e)
  );
};
function KT(e) {
  return e.nodeType === kp;
}
function YT(e) {
  return e.nodeType === Dp;
}
function eo(e) {
  return e.nodeType === Fp;
}
var JT = (e, t, r, n, a, o) => {
    if (KT(e)) return Bp(e.data, t);
    if (YT(e)) return UT(e.data, t);
    let i = eo(e) ? 'DocumentFragment' : e.tagName.toLowerCase();
    return ++n > t.maxDepth
      ? ql(i, t)
      : Al(
          i,
          Pl(
            eo(e) ? [] : Array.from(e.attributes, (l) => l.name).sort(),
            eo(e)
              ? {}
              : [...e.attributes].reduce(
                  (l, u) => ((l[u.name] = u.value), l),
                  {},
                ),
            t,
            r + t.indent,
            n,
            a,
            o,
          ),
          Ol(
            Array.prototype.slice.call(e.childNodes || e.children),
            t,
            r + t.indent,
            n,
            a,
            o,
          ),
          t,
          r,
        );
  },
  XT = { serialize: JT, test: WT },
  QT = '@@__IMMUTABLE_ITERABLE__@@',
  ZT = '@@__IMMUTABLE_LIST__@@',
  eS = '@@__IMMUTABLE_KEYED__@@',
  tS = '@@__IMMUTABLE_MAP__@@',
  Cu = '@@__IMMUTABLE_ORDERED__@@',
  rS = '@@__IMMUTABLE_RECORD__@@',
  nS = '@@__IMMUTABLE_SEQ__@@',
  aS = '@@__IMMUTABLE_SET__@@',
  oS = '@@__IMMUTABLE_STACK__@@',
  vr = (e) => `Immutable.${e}`,
  Aa = (e) => `[${e}]`,
  en = ' ',
  Ru = '…';
function iS(e, t, r, n, a, o, i) {
  return ++n > t.maxDepth
    ? Aa(vr(i))
    : `${vr(i) + en}{${Oa(e.entries(), t, r, n, a, o)}}`;
}
function lS(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        let r = e._keys[t++];
        return { done: !1, value: [r, e.get(r)] };
      }
      return { done: !0, value: void 0 };
    },
  };
}
function sS(e, t, r, n, a, o) {
  let i = vr(e._name || 'Record');
  return ++n > t.maxDepth ? Aa(i) : `${i + en}{${Oa(lS(e), t, r, n, a, o)}}`;
}
function uS(e, t, r, n, a, o) {
  let i = vr('Seq');
  return ++n > t.maxDepth
    ? Aa(i)
    : e[eS]
      ? `${i + en}{${e._iter || e._object ? Oa(e.entries(), t, r, n, a, o) : Ru}}`
      : `${i + en}[${e._iter || e._array || e._collection || e._iterable ? Tl(e.values(), t, r, n, a, o) : Ru}]`;
}
function to(e, t, r, n, a, o, i) {
  return ++n > t.maxDepth
    ? Aa(vr(i))
    : `${vr(i) + en}[${Tl(e.values(), t, r, n, a, o)}]`;
}
var cS = (e, t, r, n, a, o) =>
    e[tS]
      ? iS(e, t, r, n, a, o, e[Cu] ? 'OrderedMap' : 'Map')
      : e[ZT]
        ? to(e, t, r, n, a, o, 'List')
        : e[aS]
          ? to(e, t, r, n, a, o, e[Cu] ? 'OrderedSet' : 'Set')
          : e[oS]
            ? to(e, t, r, n, a, o, 'Stack')
            : e[nS]
              ? uS(e, t, r, n, a, o)
              : sS(e, t, r, n, a, o),
  dS = (e) => e && (e[QT] === !0 || e[rS] === !0),
  fS = { serialize: cS, test: dS },
  Up = { exports: {} },
  ne = {},
  Tu;
function pS() {
  return (
    Tu ||
      ((Tu = 1),
      (function () {
        var e = Symbol.for('react.element'),
          t = Symbol.for('react.portal'),
          r = Symbol.for('react.fragment'),
          n = Symbol.for('react.strict_mode'),
          a = Symbol.for('react.profiler'),
          o = Symbol.for('react.provider'),
          i = Symbol.for('react.context'),
          l = Symbol.for('react.server_context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          s = Symbol.for('react.suspense_list'),
          d = Symbol.for('react.memo'),
          p = Symbol.for('react.lazy'),
          f = Symbol.for('react.offscreen'),
          h = !1,
          m = !1,
          y = !1,
          b = !1,
          g = !1,
          R;
        R = Symbol.for('react.module.reference');
        function C(M) {
          return !!(
            typeof M == 'string' ||
            typeof M == 'function' ||
            M === r ||
            M === a ||
            g ||
            M === n ||
            M === c ||
            M === s ||
            b ||
            M === f ||
            h ||
            m ||
            y ||
            (typeof M == 'object' &&
              M !== null &&
              (M.$$typeof === p ||
                M.$$typeof === d ||
                M.$$typeof === o ||
                M.$$typeof === i ||
                M.$$typeof === u ||
                M.$$typeof === R ||
                M.getModuleId !== void 0))
          );
        }
        function _(M) {
          if (typeof M == 'object' && M !== null) {
            var ie = M.$$typeof;
            switch (ie) {
              case e:
                var le = M.type;
                switch (le) {
                  case r:
                  case a:
                  case n:
                  case c:
                  case s:
                    return le;
                  default:
                    var ye = le && le.$$typeof;
                    switch (ye) {
                      case l:
                      case i:
                      case u:
                      case p:
                      case d:
                      case o:
                        return ye;
                      default:
                        return ie;
                    }
                }
              case t:
                return ie;
            }
          }
        }
        var w = i,
          E = o,
          v = e,
          O = u,
          $ = r,
          N = p,
          L = d,
          j = t,
          I = a,
          H = n,
          V = c,
          J = s,
          W = !1,
          _e = !1;
        function Le(M) {
          return (
            W ||
              ((W = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.',
              )),
            !1
          );
        }
        function Be(M) {
          return (
            _e ||
              ((_e = !0),
              console.warn(
                'The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.',
              )),
            !1
          );
        }
        function F(M) {
          return _(M) === i;
        }
        function B(M) {
          return _(M) === o;
        }
        function D(M) {
          return typeof M == 'object' && M !== null && M.$$typeof === e;
        }
        function G(M) {
          return _(M) === u;
        }
        function Z(M) {
          return _(M) === r;
        }
        function ue(M) {
          return _(M) === p;
        }
        function Ee(M) {
          return _(M) === d;
        }
        function st(M) {
          return _(M) === t;
        }
        function q(M) {
          return _(M) === a;
        }
        function z(M) {
          return _(M) === n;
        }
        function k(M) {
          return _(M) === c;
        }
        function X(M) {
          return _(M) === s;
        }
        (ne.ContextConsumer = w),
          (ne.ContextProvider = E),
          (ne.Element = v),
          (ne.ForwardRef = O),
          (ne.Fragment = $),
          (ne.Lazy = N),
          (ne.Memo = L),
          (ne.Portal = j),
          (ne.Profiler = I),
          (ne.StrictMode = H),
          (ne.Suspense = V),
          (ne.SuspenseList = J),
          (ne.isAsyncMode = Le),
          (ne.isConcurrentMode = Be),
          (ne.isContextConsumer = F),
          (ne.isContextProvider = B),
          (ne.isElement = D),
          (ne.isForwardRef = G),
          (ne.isFragment = Z),
          (ne.isLazy = ue),
          (ne.isMemo = Ee),
          (ne.isPortal = st),
          (ne.isProfiler = q),
          (ne.isStrictMode = z),
          (ne.isSuspense = k),
          (ne.isSuspenseList = X),
          (ne.isValidElementType = C),
          (ne.typeOf = _);
      })()),
    ne
  );
}
Up.exports = pS();
var Ut = Up.exports;
function Hp(e, t = []) {
  if (Array.isArray(e)) for (let r of e) Hp(r, t);
  else e != null && e !== !1 && e !== '' && t.push(e);
  return t;
}
function Su(e) {
  let t = e.type;
  if (typeof t == 'string') return t;
  if (typeof t == 'function') return t.displayName || t.name || 'Unknown';
  if (Ut.isFragment(e)) return 'React.Fragment';
  if (Ut.isSuspense(e)) return 'React.Suspense';
  if (typeof t == 'object' && t !== null) {
    if (Ut.isContextProvider(e)) return 'Context.Provider';
    if (Ut.isContextConsumer(e)) return 'Context.Consumer';
    if (Ut.isForwardRef(e)) {
      if (t.displayName) return t.displayName;
      let r = t.render.displayName || t.render.name || '';
      return r === '' ? 'ForwardRef' : `ForwardRef(${r})`;
    }
    if (Ut.isMemo(e)) {
      let r = t.displayName || t.type.displayName || t.type.name || '';
      return r === '' ? 'Memo' : `Memo(${r})`;
    }
  }
  return 'UNDEFINED';
}
function hS(e) {
  let { props: t } = e;
  return Object.keys(t)
    .filter((r) => r !== 'children' && t[r] !== void 0)
    .sort();
}
var mS = (e, t, r, n, a, o) =>
    ++n > t.maxDepth
      ? ql(Su(e), t)
      : Al(
          Su(e),
          Pl(hS(e), e.props, t, r + t.indent, n, a, o),
          Ol(Hp(e.props.children), t, r + t.indent, n, a, o),
          t,
          r,
        ),
  bS = (e) => e != null && Ut.isElement(e),
  gS = { serialize: mS, test: bS },
  yS =
    typeof Symbol == 'function' && Symbol.for
      ? Symbol.for('react.test.json')
      : 245830487;
function vS(e) {
  let { props: t } = e;
  return t
    ? Object.keys(t)
        .filter((r) => t[r] !== void 0)
        .sort()
    : [];
}
var _S = (e, t, r, n, a, o) =>
    ++n > t.maxDepth
      ? ql(e.type, t)
      : Al(
          e.type,
          e.props ? Pl(vS(e), e.props, t, r + t.indent, n, a, o) : '',
          e.children ? Ol(e.children, t, r + t.indent, n, a, o) : '',
          t,
          r,
        ),
  ES = (e) => e && e.$$typeof === yS,
  wS = { serialize: _S, test: ES },
  zp = Object.prototype.toString,
  CS = Date.prototype.toISOString,
  RS = Error.prototype.toString,
  Pu = RegExp.prototype.toString;
function ro(e) {
  return (typeof e.constructor == 'function' && e.constructor.name) || 'Object';
}
function TS(e) {
  return typeof window < 'u' && e === window;
}
var SS = /^Symbol\((.*)\)(.*)$/,
  PS = /\n/g,
  Vp = class extends Error {
    constructor(e, t) {
      super(e), (this.stack = t), (this.name = this.constructor.name);
    }
  };
function OS(e) {
  return (
    e === '[object Array]' ||
    e === '[object ArrayBuffer]' ||
    e === '[object DataView]' ||
    e === '[object Float32Array]' ||
    e === '[object Float64Array]' ||
    e === '[object Int8Array]' ||
    e === '[object Int16Array]' ||
    e === '[object Int32Array]' ||
    e === '[object Uint8Array]' ||
    e === '[object Uint8ClampedArray]' ||
    e === '[object Uint16Array]' ||
    e === '[object Uint32Array]'
  );
}
function AS(e) {
  return Object.is(e, -0) ? '-0' : String(e);
}
function qS(e) {
  return `${e}n`;
}
function Ou(e, t) {
  return t ? `[Function ${e.name || 'anonymous'}]` : '[Function]';
}
function Au(e) {
  return String(e).replace(SS, 'Symbol($1)');
}
function qu(e) {
  return `[${RS.call(e)}]`;
}
function Gp(e, t, r, n) {
  if (e === !0 || e === !1) return `${e}`;
  if (e === void 0) return 'undefined';
  if (e === null) return 'null';
  let a = typeof e;
  if (a === 'number') return AS(e);
  if (a === 'bigint') return qS(e);
  if (a === 'string')
    return n ? `"${e.replaceAll(/"|\\/g, '\\$&')}"` : `"${e}"`;
  if (a === 'function') return Ou(e, t);
  if (a === 'symbol') return Au(e);
  let o = zp.call(e);
  return o === '[object WeakMap]'
    ? 'WeakMap {}'
    : o === '[object WeakSet]'
      ? 'WeakSet {}'
      : o === '[object Function]' || o === '[object GeneratorFunction]'
        ? Ou(e, t)
        : o === '[object Symbol]'
          ? Au(e)
          : o === '[object Date]'
            ? Number.isNaN(+e)
              ? 'Date { NaN }'
              : CS.call(e)
            : o === '[object Error]'
              ? qu(e)
              : o === '[object RegExp]'
                ? r
                  ? Pu.call(e).replaceAll(/[$()*+.?[\\\]^{|}]/g, '\\$&')
                  : Pu.call(e)
                : e instanceof Error
                  ? qu(e)
                  : null;
}
function Wp(e, t, r, n, a, o) {
  if (a.includes(e)) return '[Circular]';
  (a = [...a]), a.push(e);
  let i = ++n > t.maxDepth,
    l = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == 'function' && !o)
    return qt(e.toJSON(), t, r, n, a, !0);
  let u = zp.call(e);
  return u === '[object Arguments]'
    ? i
      ? '[Arguments]'
      : `${l ? '' : 'Arguments '}[${Kn(e, t, r, n, a, qt)}]`
    : OS(u)
      ? i
        ? `[${e.constructor.name}]`
        : `${l || (!t.printBasicPrototype && e.constructor.name === 'Array') ? '' : `${e.constructor.name} `}[${Kn(e, t, r, n, a, qt)}]`
      : u === '[object Map]'
        ? i
          ? '[Map]'
          : `Map {${Oa(e.entries(), t, r, n, a, qt, ' => ')}}`
        : u === '[object Set]'
          ? i
            ? '[Set]'
            : `Set {${Tl(e.values(), t, r, n, a, qt)}}`
          : i || TS(e)
            ? `[${ro(e)}]`
            : `${l || (!t.printBasicPrototype && ro(e) === 'Object') ? '' : `${ro(e)} `}{${Sl(e, t, r, n, a, qt)}}`;
}
function xS(e) {
  return e.serialize != null;
}
function Kp(e, t, r, n, a, o) {
  let i;
  try {
    i = xS(e)
      ? e.serialize(t, r, n, a, o, qt)
      : e.print(
          t,
          (l) => qt(l, r, n, a, o),
          (l) => {
            let u = n + r.indent;
            return (
              u +
              l.replaceAll(
                PS,
                `
${u}`,
              )
            );
          },
          { edgeSpacing: r.spacingOuter, min: r.min, spacing: r.spacingInner },
          r.colors,
        );
  } catch (l) {
    throw new Vp(l.message, l.stack);
  }
  if (typeof i != 'string')
    throw new TypeError(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`,
    );
  return i;
}
function Yp(e, t) {
  for (let r of e)
    try {
      if (r.test(t)) return r;
    } catch (n) {
      throw new Vp(n.message, n.stack);
    }
  return null;
}
function qt(e, t, r, n, a, o) {
  let i = Yp(t.plugins, e);
  if (i !== null) return Kp(i, e, t, r, n, a);
  let l = Gp(e, t.printFunctionName, t.escapeRegex, t.escapeString);
  return l !== null ? l : Wp(e, t, r, n, a, o);
}
var xl = {
    comment: 'gray',
    content: 'reset',
    prop: 'yellow',
    tag: 'cyan',
    value: 'green',
  },
  Jp = Object.keys(xl),
  Ke = {
    callToJSON: !0,
    compareKeys: void 0,
    escapeRegex: !1,
    escapeString: !0,
    highlight: !1,
    indent: 2,
    maxDepth: Number.POSITIVE_INFINITY,
    maxWidth: Number.POSITIVE_INFINITY,
    min: !1,
    plugins: [],
    printBasicPrototype: !0,
    printFunctionName: !0,
    theme: xl,
  };
function MS(e) {
  for (let t of Object.keys(e))
    if (!Object.prototype.hasOwnProperty.call(Ke, t))
      throw new Error(`pretty-format: Unknown option "${t}".`);
  if (e.min && e.indent !== void 0 && e.indent !== 0)
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.',
    );
}
function $S() {
  return Jp.reduce((e, t) => {
    let r = xl[t],
      n = r && me[r];
    if (n && typeof n.close == 'string' && typeof n.open == 'string') e[t] = n;
    else
      throw new Error(
        `pretty-format: Option "theme" has a key "${t}" whose value "${r}" is undefined in ansi-styles.`,
      );
    return e;
  }, Object.create(null));
}
function NS() {
  return Jp.reduce(
    (e, t) => ((e[t] = { close: '', open: '' }), e),
    Object.create(null),
  );
}
function Xp(e) {
  return (e == null ? void 0 : e.printFunctionName) ?? Ke.printFunctionName;
}
function Qp(e) {
  return (e == null ? void 0 : e.escapeRegex) ?? Ke.escapeRegex;
}
function Zp(e) {
  return (e == null ? void 0 : e.escapeString) ?? Ke.escapeString;
}
function xu(e) {
  return {
    callToJSON: (e == null ? void 0 : e.callToJSON) ?? Ke.callToJSON,
    colors: e != null && e.highlight ? $S() : NS(),
    compareKeys:
      typeof (e == null ? void 0 : e.compareKeys) == 'function' ||
      (e == null ? void 0 : e.compareKeys) === null
        ? e.compareKeys
        : Ke.compareKeys,
    escapeRegex: Qp(e),
    escapeString: Zp(e),
    indent:
      e != null && e.min
        ? ''
        : jS((e == null ? void 0 : e.indent) ?? Ke.indent),
    maxDepth: (e == null ? void 0 : e.maxDepth) ?? Ke.maxDepth,
    maxWidth: (e == null ? void 0 : e.maxWidth) ?? Ke.maxWidth,
    min: (e == null ? void 0 : e.min) ?? Ke.min,
    plugins: (e == null ? void 0 : e.plugins) ?? Ke.plugins,
    printBasicPrototype: (e == null ? void 0 : e.printBasicPrototype) ?? !0,
    printFunctionName: Xp(e),
    spacingInner:
      e != null && e.min
        ? ' '
        : `
`,
    spacingOuter:
      e != null && e.min
        ? ''
        : `
`,
  };
}
function jS(e) {
  return Array.from({ length: e + 1 }).join(' ');
}
function at(e, t) {
  if (t && (MS(t), t.plugins)) {
    let n = Yp(t.plugins, e);
    if (n !== null) return Kp(n, e, xu(t), '', 0, []);
  }
  let r = Gp(e, Xp(t), Qp(t), Zp(t));
  return r !== null ? r : Wp(e, xu(t), '', 0, []);
}
var eh = {
    AsymmetricMatcher: NT,
    DOMCollection: FT,
    DOMElement: XT,
    Immutable: fS,
    ReactElement: gS,
    ReactTestComponent: wS,
  },
  {
    AsymmetricMatcher: IS,
    DOMCollection: LS,
    DOMElement: BS,
    Immutable: kS,
    ReactElement: DS,
    ReactTestComponent: FS,
  } = eh,
  Mu = [FS, DS, BS, LS, kS, IS];
function Ge(e, t = 10, { maxLength: r, ...n } = {}) {
  let a = r ?? 1e4,
    o;
  try {
    o = at(e, { maxDepth: t, escapeString: !1, plugins: Mu, ...n });
  } catch {
    o = at(e, {
      callToJSON: !1,
      maxDepth: t,
      escapeString: !1,
      plugins: Mu,
      ...n,
    });
  }
  return o.length >= a && t > 1 ? Ge(e, Math.floor(t / 2)) : o;
}
var US = /%[sdjifoOc%]/g;
function HS(...e) {
  if (typeof e[0] != 'string') {
    let o = [];
    for (let i = 0; i < e.length; i++)
      o.push(jr(e[i], { depth: 0, colors: !1 }));
    return o.join(' ');
  }
  let t = e.length,
    r = 1,
    n = e[0],
    a = String(n).replace(US, (o) => {
      if (o === '%%') return '%';
      if (r >= t) return o;
      switch (o) {
        case '%s': {
          let i = e[r++];
          return typeof i == 'bigint'
            ? `${i.toString()}n`
            : typeof i == 'number' && i === 0 && 1 / i < 0
              ? '-0'
              : typeof i == 'object' && i !== null
                ? jr(i, { depth: 0, colors: !1 })
                : String(i);
        }
        case '%d': {
          let i = e[r++];
          return typeof i == 'bigint'
            ? `${i.toString()}n`
            : Number(i).toString();
        }
        case '%i': {
          let i = e[r++];
          return typeof i == 'bigint'
            ? `${i.toString()}n`
            : Number.parseInt(String(i)).toString();
        }
        case '%f':
          return Number.parseFloat(String(e[r++])).toString();
        case '%o':
          return jr(e[r++], { showHidden: !0, showProxy: !0 });
        case '%O':
          return jr(e[r++]);
        case '%c':
          return r++, '';
        case '%j':
          try {
            return JSON.stringify(e[r++]);
          } catch (i) {
            let l = i.message;
            if (
              l.includes('circular structure') ||
              l.includes('cyclic structures') ||
              l.includes('cyclic object')
            )
              return '[Circular]';
            throw i;
          }
        default:
          return o;
      }
    });
  for (let o = e[r]; r < t; o = e[++r])
    o === null || typeof o != 'object' ? (a += ` ${o}`) : (a += ` ${jr(o)}`);
  return a;
}
function jr(e, t = {}) {
  return t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY), Yo(e, t);
}
var th;
th = /\r?\n|[\r\u2028\u2029]/y;
RegExp(th.source);
var rh = {
  keyword: [
    'break',
    'case',
    'catch',
    'continue',
    'debugger',
    'default',
    'do',
    'else',
    'finally',
    'for',
    'function',
    'if',
    'return',
    'switch',
    'throw',
    'try',
    'var',
    'const',
    'while',
    'with',
    'new',
    'this',
    'super',
    'class',
    'extends',
    'export',
    'import',
    'null',
    'true',
    'false',
    'in',
    'instanceof',
    'typeof',
    'void',
    'delete',
  ],
  strict: [
    'implements',
    'interface',
    'let',
    'package',
    'private',
    'protected',
    'public',
    'static',
    'yield',
  ],
};
new Set(rh.keyword);
new Set(rh.strict);
function $u(e) {
  if (e === void 0) return 'undefined';
  if (e === null) return 'null';
  if (Array.isArray(e)) return 'array';
  if (typeof e == 'boolean') return 'boolean';
  if (typeof e == 'function') return 'function';
  if (typeof e == 'number') return 'number';
  if (typeof e == 'string') return 'string';
  if (typeof e == 'bigint') return 'bigint';
  if (typeof e == 'object') {
    if (e != null) {
      if (e.constructor === RegExp) return 'regexp';
      if (e.constructor === Map) return 'map';
      if (e.constructor === Set) return 'set';
      if (e.constructor === Date) return 'date';
    }
    return 'object';
  } else if (typeof e == 'symbol') return 'symbol';
  throw new Error(`value of unknown type: ${e}`);
}
var Ae = -1,
  Re = 1,
  ge = 0,
  pe = class {
    constructor(e, t) {
      he(this, 0);
      he(this, 1);
      (this[0] = e), (this[1] = t);
    }
  },
  zS = function (e, t) {
    if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
    let r = 0,
      n = Math.min(e.length, t.length),
      a = n,
      o = 0;
    for (; r < a; )
      e.substring(o, a) === t.substring(o, a) ? ((r = a), (o = r)) : (n = a),
        (a = Math.floor((n - r) / 2 + r));
    return a;
  },
  nh = function (e, t) {
    if (!e || !t || e.charAt(e.length - 1) !== t.charAt(t.length - 1)) return 0;
    let r = 0,
      n = Math.min(e.length, t.length),
      a = n,
      o = 0;
    for (; r < a; )
      e.substring(e.length - a, e.length - o) ===
      t.substring(t.length - a, t.length - o)
        ? ((r = a), (o = r))
        : (n = a),
        (a = Math.floor((n - r) / 2 + r));
    return a;
  },
  Nu = function (e, t) {
    let r = e.length,
      n = t.length;
    if (r === 0 || n === 0) return 0;
    r > n ? (e = e.substring(r - n)) : r < n && (t = t.substring(0, r));
    let a = Math.min(r, n);
    if (e === t) return a;
    let o = 0,
      i = 1;
    for (;;) {
      let l = e.substring(a - i),
        u = t.indexOf(l);
      if (u === -1) return o;
      (i += u),
        (u === 0 || e.substring(a - i) === t.substring(0, i)) && ((o = i), i++);
    }
  },
  VS = function (e) {
    let t = !1,
      r = [],
      n = 0,
      a = null,
      o = 0,
      i = 0,
      l = 0,
      u = 0,
      c = 0;
    for (; o < e.length; )
      e[o][0] === ge
        ? ((r[n++] = o), (i = u), (l = c), (u = 0), (c = 0), (a = e[o][1]))
        : (e[o][0] === Re ? (u += e[o][1].length) : (c += e[o][1].length),
          a &&
            a.length <= Math.max(i, l) &&
            a.length <= Math.max(u, c) &&
            (e.splice(r[n - 1], 0, new pe(Ae, a)),
            (e[r[n - 1] + 1][0] = Re),
            n--,
            n--,
            (o = n > 0 ? r[n - 1] : -1),
            (i = 0),
            (l = 0),
            (u = 0),
            (c = 0),
            (a = null),
            (t = !0))),
        o++;
    for (t && ah(e), KS(e), o = 1; o < e.length; ) {
      if (e[o - 1][0] === Ae && e[o][0] === Re) {
        let s = e[o - 1][1],
          d = e[o][1],
          p = Nu(s, d),
          f = Nu(d, s);
        p >= f
          ? (p >= s.length / 2 || p >= d.length / 2) &&
            (e.splice(o, 0, new pe(ge, d.substring(0, p))),
            (e[o - 1][1] = s.substring(0, s.length - p)),
            (e[o + 1][1] = d.substring(p)),
            o++)
          : (f >= s.length / 2 || f >= d.length / 2) &&
            (e.splice(o, 0, new pe(ge, s.substring(0, f))),
            (e[o - 1][0] = Re),
            (e[o - 1][1] = d.substring(0, d.length - f)),
            (e[o + 1][0] = Ae),
            (e[o + 1][1] = s.substring(f)),
            o++),
          o++;
      }
      o++;
    }
  },
  ju = /[^a-z0-9]/i,
  Iu = /\s/,
  Lu = /[\r\n]/,
  GS = /\n\r?\n$/,
  WS = /^\r?\n\r?\n/;
function KS(e) {
  function t(n, a) {
    if (!n || !a) return 6;
    let o = n.charAt(n.length - 1),
      i = a.charAt(0),
      l = o.match(ju),
      u = i.match(ju),
      c = l && o.match(Iu),
      s = u && i.match(Iu),
      d = c && o.match(Lu),
      p = s && i.match(Lu),
      f = d && n.match(GS),
      h = p && a.match(WS);
    return f || h
      ? 5
      : d || p
        ? 4
        : l && !c && s
          ? 3
          : c || s
            ? 2
            : l || u
              ? 1
              : 0;
  }
  let r = 1;
  for (; r < e.length - 1; ) {
    if (e[r - 1][0] === ge && e[r + 1][0] === ge) {
      let n = e[r - 1][1],
        a = e[r][1],
        o = e[r + 1][1],
        i = nh(n, a);
      if (i) {
        let d = a.substring(a.length - i);
        (n = n.substring(0, n.length - i)),
          (a = d + a.substring(0, a.length - i)),
          (o = d + o);
      }
      let l = n,
        u = a,
        c = o,
        s = t(n, a) + t(a, o);
      for (; a.charAt(0) === o.charAt(0); ) {
        (n += a.charAt(0)),
          (a = a.substring(1) + o.charAt(0)),
          (o = o.substring(1));
        let d = t(n, a) + t(a, o);
        d >= s && ((s = d), (l = n), (u = a), (c = o));
      }
      e[r - 1][1] !== l &&
        (l ? (e[r - 1][1] = l) : (e.splice(r - 1, 1), r--),
        (e[r][1] = u),
        c ? (e[r + 1][1] = c) : (e.splice(r + 1, 1), r--));
    }
    r++;
  }
}
function ah(e) {
  e.push(new pe(ge, ''));
  let t = 0,
    r = 0,
    n = 0,
    a = '',
    o = '',
    i;
  for (; t < e.length; )
    switch (e[t][0]) {
      case Re:
        n++, (o += e[t][1]), t++;
        break;
      case Ae:
        r++, (a += e[t][1]), t++;
        break;
      case ge:
        r + n > 1
          ? (r !== 0 &&
              n !== 0 &&
              ((i = zS(o, a)),
              i !== 0 &&
                (t - r - n > 0 && e[t - r - n - 1][0] === ge
                  ? (e[t - r - n - 1][1] += o.substring(0, i))
                  : (e.splice(0, 0, new pe(ge, o.substring(0, i))), t++),
                (o = o.substring(i)),
                (a = a.substring(i))),
              (i = nh(o, a)),
              i !== 0 &&
                ((e[t][1] = o.substring(o.length - i) + e[t][1]),
                (o = o.substring(0, o.length - i)),
                (a = a.substring(0, a.length - i)))),
            (t -= r + n),
            e.splice(t, r + n),
            a.length && (e.splice(t, 0, new pe(Ae, a)), t++),
            o.length && (e.splice(t, 0, new pe(Re, o)), t++),
            t++)
          : t !== 0 && e[t - 1][0] === ge
            ? ((e[t - 1][1] += e[t][1]), e.splice(t, 1))
            : t++,
          (n = 0),
          (r = 0),
          (a = ''),
          (o = '');
        break;
    }
  e[e.length - 1][1] === '' && e.pop();
  let l = !1;
  for (t = 1; t < e.length - 1; )
    e[t - 1][0] === ge &&
      e[t + 1][0] === ge &&
      (e[t][1].substring(e[t][1].length - e[t - 1][1].length) === e[t - 1][1]
        ? ((e[t][1] =
            e[t - 1][1] +
            e[t][1].substring(0, e[t][1].length - e[t - 1][1].length)),
          (e[t + 1][1] = e[t - 1][1] + e[t + 1][1]),
          e.splice(t - 1, 1),
          (l = !0))
        : e[t][1].substring(0, e[t + 1][1].length) === e[t + 1][1] &&
          ((e[t - 1][1] += e[t + 1][1]),
          (e[t][1] = e[t][1].substring(e[t + 1][1].length) + e[t + 1][1]),
          e.splice(t + 1, 1),
          (l = !0))),
      t++;
  l && ah(e);
}
var oh = 'Compared values have no visual difference.',
  YS =
    'Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.',
  ih = {};
Object.defineProperty(ih, '__esModule', { value: !0 });
var lh = (ih.default = ZS),
  Hr = 'diff-sequences',
  Se = 0,
  tn = (e, t, r, n, a) => {
    let o = 0;
    for (; e < t && r < n && a(e, r); ) (e += 1), (r += 1), (o += 1);
    return o;
  },
  rn = (e, t, r, n, a) => {
    let o = 0;
    for (; e <= t && r <= n && a(t, n); ) (t -= 1), (n -= 1), (o += 1);
    return o;
  },
  no = (e, t, r, n, a, o, i) => {
    let l = 0,
      u = -e,
      c = o[l],
      s = c;
    o[l] += tn(c + 1, t, n + c - u + 1, r, a);
    let d = e < i ? e : i;
    for (l += 1, u += 2; l <= d; l += 1, u += 2) {
      if (l !== e && s < o[l]) c = o[l];
      else if (((c = s + 1), t <= c)) return l - 1;
      (s = o[l]), (o[l] = c + tn(c + 1, t, n + c - u + 1, r, a));
    }
    return i;
  },
  Bu = (e, t, r, n, a, o, i) => {
    let l = 0,
      u = e,
      c = o[l],
      s = c;
    o[l] -= rn(t, c - 1, r, n + c - u - 1, a);
    let d = e < i ? e : i;
    for (l += 1, u -= 2; l <= d; l += 1, u -= 2) {
      if (l !== e && o[l] < s) c = o[l];
      else if (((c = s - 1), c < t)) return l - 1;
      (s = o[l]), (o[l] = c - rn(t, c - 1, r, n + c - u - 1, a));
    }
    return i;
  },
  JS = (e, t, r, n, a, o, i, l, u, c, s) => {
    let d = n - t,
      p = r - t,
      f = a - n - p,
      h = -f - (e - 1),
      m = -f + (e - 1),
      y = Se,
      b = e < l ? e : l;
    for (let g = 0, R = -e; g <= b; g += 1, R += 2) {
      let C = g === 0 || (g !== e && y < i[g]),
        _ = C ? i[g] : y,
        w = C ? _ : _ + 1,
        E = d + w - R,
        v = tn(w + 1, r, E + 1, a, o),
        O = w + v;
      if (((y = i[g]), (i[g] = O), h <= R && R <= m)) {
        let $ = (e - 1 - (R + f)) / 2;
        if ($ <= c && u[$] - 1 <= O) {
          let N = d + _ - (C ? R + 1 : R - 1),
            L = rn(t, _, n, N, o),
            j = _ - L,
            I = N - L,
            H = j + 1,
            V = I + 1;
          (s.nChangePreceding = e - 1),
            e - 1 === H + V - t - n
              ? ((s.aEndPreceding = t), (s.bEndPreceding = n))
              : ((s.aEndPreceding = H), (s.bEndPreceding = V)),
            (s.nCommonPreceding = L),
            L !== 0 && ((s.aCommonPreceding = H), (s.bCommonPreceding = V)),
            (s.nCommonFollowing = v),
            v !== 0 &&
              ((s.aCommonFollowing = w + 1), (s.bCommonFollowing = E + 1));
          let J = O + 1,
            W = E + v + 1;
          return (
            (s.nChangeFollowing = e - 1),
            e - 1 === r + a - J - W
              ? ((s.aStartFollowing = r), (s.bStartFollowing = a))
              : ((s.aStartFollowing = J), (s.bStartFollowing = W)),
            !0
          );
        }
      }
    }
    return !1;
  },
  XS = (e, t, r, n, a, o, i, l, u, c, s) => {
    let d = a - r,
      p = r - t,
      f = a - n - p,
      h = f - e,
      m = f + e,
      y = Se,
      b = e < c ? e : c;
    for (let g = 0, R = e; g <= b; g += 1, R -= 2) {
      let C = g === 0 || (g !== e && u[g] < y),
        _ = C ? u[g] : y,
        w = C ? _ : _ - 1,
        E = d + w - R,
        v = rn(t, w - 1, n, E - 1, o),
        O = w - v;
      if (((y = u[g]), (u[g] = O), h <= R && R <= m)) {
        let $ = (e + (R - f)) / 2;
        if ($ <= l && O - 1 <= i[$]) {
          let N = E - v;
          if (
            ((s.nChangePreceding = e),
            e === O + N - t - n
              ? ((s.aEndPreceding = t), (s.bEndPreceding = n))
              : ((s.aEndPreceding = O), (s.bEndPreceding = N)),
            (s.nCommonPreceding = v),
            v !== 0 && ((s.aCommonPreceding = O), (s.bCommonPreceding = N)),
            (s.nChangeFollowing = e - 1),
            e === 1)
          )
            (s.nCommonFollowing = 0),
              (s.aStartFollowing = r),
              (s.bStartFollowing = a);
          else {
            let L = d + _ - (C ? R - 1 : R + 1),
              j = tn(_, r, L, a, o);
            (s.nCommonFollowing = j),
              j !== 0 && ((s.aCommonFollowing = _), (s.bCommonFollowing = L));
            let I = _ + j,
              H = L + j;
            e - 1 === r + a - I - H
              ? ((s.aStartFollowing = r), (s.bStartFollowing = a))
              : ((s.aStartFollowing = I), (s.bStartFollowing = H));
          }
          return !0;
        }
      }
    }
    return !1;
  },
  QS = (e, t, r, n, a, o, i, l, u) => {
    let c = n - t,
      s = a - r,
      d = r - t,
      p = a - n,
      f = p - d,
      h = d,
      m = d;
    if (((i[0] = t - 1), (l[0] = r), f % 2 === 0)) {
      let y = (e || f) / 2,
        b = (d + p) / 2;
      for (let g = 1; g <= b; g += 1)
        if (((h = no(g, r, a, c, o, i, h)), g < y)) m = Bu(g, t, n, s, o, l, m);
        else if (XS(g, t, r, n, a, o, i, h, l, m, u)) return;
    } else {
      let y = ((e || f) + 1) / 2,
        b = (d + p + 1) / 2,
        g = 1;
      for (h = no(g, r, a, c, o, i, h), g += 1; g <= b; g += 1)
        if (((m = Bu(g - 1, t, n, s, o, l, m)), g < y))
          h = no(g, r, a, c, o, i, h);
        else if (JS(g, t, r, n, a, o, i, h, l, m, u)) return;
    }
    throw new Error(
      `${Hr}: no overlap aStart=${t} aEnd=${r} bStart=${n} bEnd=${a}`,
    );
  },
  Jo = (e, t, r, n, a, o, i, l, u, c) => {
    if (a - n < r - t) {
      if (((o = !o), o && i.length === 1)) {
        let { foundSubsequence: $, isCommon: N } = i[0];
        i[1] = {
          foundSubsequence: (L, j, I) => {
            $(L, I, j);
          },
          isCommon: (L, j) => N(j, L),
        };
      }
      let v = t,
        O = r;
      (t = n), (r = a), (n = v), (a = O);
    }
    let { foundSubsequence: s, isCommon: d } = i[o ? 1 : 0];
    QS(e, t, r, n, a, d, l, u, c);
    let {
      nChangePreceding: p,
      aEndPreceding: f,
      bEndPreceding: h,
      nCommonPreceding: m,
      aCommonPreceding: y,
      bCommonPreceding: b,
      nCommonFollowing: g,
      aCommonFollowing: R,
      bCommonFollowing: C,
      nChangeFollowing: _,
      aStartFollowing: w,
      bStartFollowing: E,
    } = c;
    t < f && n < h && Jo(p, t, f, n, h, o, i, l, u, c),
      m !== 0 && s(m, y, b),
      g !== 0 && s(g, R, C),
      w < r && E < a && Jo(_, w, r, E, a, o, i, l, u, c);
  },
  ku = (e, t) => {
    if (typeof t != 'number')
      throw new TypeError(`${Hr}: ${e} typeof ${typeof t} is not a number`);
    if (!Number.isSafeInteger(t))
      throw new RangeError(`${Hr}: ${e} value ${t} is not a safe integer`);
    if (t < 0)
      throw new RangeError(`${Hr}: ${e} value ${t} is a negative integer`);
  },
  Du = (e, t) => {
    let r = typeof t;
    if (r !== 'function')
      throw new TypeError(`${Hr}: ${e} typeof ${r} is not a function`);
  };
function ZS(e, t, r, n) {
  ku('aLength', e),
    ku('bLength', t),
    Du('isCommon', r),
    Du('foundSubsequence', n);
  let a = tn(0, e, 0, t, r);
  if ((a !== 0 && n(a, 0, 0), e !== a || t !== a)) {
    let o = a,
      i = a,
      l = rn(o, e - 1, i, t - 1, r),
      u = e - l,
      c = t - l,
      s = a + l;
    e !== s &&
      t !== s &&
      Jo(
        0,
        o,
        u,
        i,
        c,
        !1,
        [{ foundSubsequence: n, isCommon: r }],
        [Se],
        [Se],
        {
          aCommonFollowing: Se,
          aCommonPreceding: Se,
          aEndPreceding: Se,
          aStartFollowing: Se,
          bCommonFollowing: Se,
          bCommonPreceding: Se,
          bEndPreceding: Se,
          bStartFollowing: Se,
          nChangeFollowing: Se,
          nChangePreceding: Se,
          nCommonFollowing: Se,
          nCommonPreceding: Se,
        },
      ),
      l !== 0 && n(l, u, c);
  }
}
function eP(e, t) {
  return e.replace(/\s+$/, (r) => t(r));
}
function Ml(e, t, r, n, a, o) {
  return e.length !== 0
    ? r(`${n} ${eP(e, a)}`)
    : n !== ' '
      ? r(n)
      : t && o.length !== 0
        ? r(`${n} ${o}`)
        : '';
}
function sh(
  e,
  t,
  {
    aColor: r,
    aIndicator: n,
    changeLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: o,
  },
) {
  return Ml(e, t, r, n, a, o);
}
function uh(
  e,
  t,
  {
    bColor: r,
    bIndicator: n,
    changeLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: o,
  },
) {
  return Ml(e, t, r, n, a, o);
}
function ch(
  e,
  t,
  {
    commonColor: r,
    commonIndicator: n,
    commonLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: o,
  },
) {
  return Ml(e, t, r, n, a, o);
}
function Fu(e, t, r, n, { patchColor: a }) {
  return a(`@@ -${e + 1},${t - e} +${r + 1},${n - r} @@`);
}
function tP(e, t) {
  let r = e.length,
    n = t.contextLines,
    a = n + n,
    o = r,
    i = !1,
    l = 0,
    u = 0;
  for (; u !== r; ) {
    let C = u;
    for (; u !== r && e[u][0] === ge; ) u += 1;
    if (C !== u)
      if (C === 0) u > n && ((o -= u - n), (i = !0));
      else if (u === r) {
        let _ = u - C;
        _ > n && ((o -= _ - n), (i = !0));
      } else {
        let _ = u - C;
        _ > a && ((o -= _ - a), (l += 1));
      }
    for (; u !== r && e[u][0] !== ge; ) u += 1;
  }
  let c = l !== 0 || i;
  l !== 0 ? (o += l + 1) : i && (o += 1);
  let s = o - 1,
    d = [],
    p = 0;
  c && d.push('');
  let f = 0,
    h = 0,
    m = 0,
    y = 0,
    b = (C) => {
      let _ = d.length;
      d.push(ch(C, _ === 0 || _ === s, t)), (m += 1), (y += 1);
    },
    g = (C) => {
      let _ = d.length;
      d.push(sh(C, _ === 0 || _ === s, t)), (m += 1);
    },
    R = (C) => {
      let _ = d.length;
      d.push(uh(C, _ === 0 || _ === s, t)), (y += 1);
    };
  for (u = 0; u !== r; ) {
    let C = u;
    for (; u !== r && e[u][0] === ge; ) u += 1;
    if (C !== u)
      if (C === 0) {
        u > n && ((C = u - n), (f = C), (h = C), (m = f), (y = h));
        for (let _ = C; _ !== u; _ += 1) b(e[_][1]);
      } else if (u === r) {
        let _ = u - C > n ? C + n : u;
        for (let w = C; w !== _; w += 1) b(e[w][1]);
      } else {
        let _ = u - C;
        if (_ > a) {
          let w = C + n;
          for (let v = C; v !== w; v += 1) b(e[v][1]);
          (d[p] = Fu(f, m, h, y, t)), (p = d.length), d.push('');
          let E = _ - a;
          (f = m + E), (h = y + E), (m = f), (y = h);
          for (let v = u - n; v !== u; v += 1) b(e[v][1]);
        } else for (let w = C; w !== u; w += 1) b(e[w][1]);
      }
    for (; u !== r && e[u][0] === Ae; ) g(e[u][1]), (u += 1);
    for (; u !== r && e[u][0] === Re; ) R(e[u][1]), (u += 1);
  }
  return (
    c && (d[p] = Fu(f, m, h, y, t)),
    d.join(`
`)
  );
}
function rP(e, t) {
  return e.map((r, n, a) => {
    let o = r[1],
      i = n === 0 || n === a.length - 1;
    switch (r[0]) {
      case Ae:
        return sh(o, i, t);
      case Re:
        return uh(o, i, t);
      default:
        return ch(o, i, t);
    }
  }).join(`
`);
}
var ao = (e) => e,
  dh = 5,
  nP = 0;
function aP() {
  return {
    aAnnotation: 'Expected',
    aColor: me.green,
    aIndicator: '-',
    bAnnotation: 'Received',
    bColor: me.red,
    bIndicator: '+',
    changeColor: me.inverse,
    changeLineTrailingSpaceColor: ao,
    commonColor: me.dim,
    commonIndicator: ' ',
    commonLineTrailingSpaceColor: ao,
    compareKeys: void 0,
    contextLines: dh,
    emptyFirstOrLastLinePlaceholder: '',
    expand: !0,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: me.yellow,
    truncateThreshold: nP,
    truncateAnnotation: '... Diff result is truncated',
    truncateAnnotationColor: ao,
  };
}
function oP(e) {
  return e && typeof e == 'function' ? e : void 0;
}
function iP(e) {
  return typeof e == 'number' && Number.isSafeInteger(e) && e >= 0 ? e : dh;
}
function Xt(e = {}) {
  return {
    ...aP(),
    ...e,
    compareKeys: oP(e.compareKeys),
    contextLines: iP(e.contextLines),
  };
}
function lr(e) {
  return e.length === 1 && e[0].length === 0;
}
function lP(e) {
  let t = 0,
    r = 0;
  return (
    e.forEach((n) => {
      switch (n[0]) {
        case Ae:
          t += 1;
          break;
        case Re:
          r += 1;
          break;
      }
    }),
    { a: t, b: r }
  );
}
function sP(
  {
    aAnnotation: e,
    aColor: t,
    aIndicator: r,
    bAnnotation: n,
    bColor: a,
    bIndicator: o,
    includeChangeCounts: i,
    omitAnnotationLines: l,
  },
  u,
) {
  if (l) return '';
  let c = '',
    s = '';
  if (i) {
    let f = String(u.a),
      h = String(u.b),
      m = n.length - e.length,
      y = ' '.repeat(Math.max(0, m)),
      b = ' '.repeat(Math.max(0, -m)),
      g = h.length - f.length,
      R = ' '.repeat(Math.max(0, g)),
      C = ' '.repeat(Math.max(0, -g));
    (c = `${y}  ${r} ${R}${f}`), (s = `${b}  ${o} ${C}${h}`);
  }
  let d = `${r} ${e}${c}`,
    p = `${o} ${n}${s}`;
  return `${t(d)}
${a(p)}

`;
}
function $l(e, t, r) {
  return (
    sP(r, lP(e)) +
    (r.expand ? rP(e, r) : tP(e, r)) +
    (t
      ? r.truncateAnnotationColor(`
${r.truncateAnnotation}`)
      : '')
  );
}
function qa(e, t, r) {
  let n = Xt(r),
    [a, o] = fh(lr(e) ? [] : e, lr(t) ? [] : t, n);
  return $l(a, o, n);
}
function uP(e, t, r, n, a) {
  if (
    (lr(e) && lr(r) && ((e = []), (r = [])),
    lr(t) && lr(n) && ((t = []), (n = [])),
    e.length !== r.length || t.length !== n.length)
  )
    return qa(e, t, a);
  let [o, i] = fh(r, n, a),
    l = 0,
    u = 0;
  return (
    o.forEach((c) => {
      switch (c[0]) {
        case Ae:
          (c[1] = e[l]), (l += 1);
          break;
        case Re:
          (c[1] = t[u]), (u += 1);
          break;
        default:
          (c[1] = t[u]), (l += 1), (u += 1);
      }
    }),
    $l(o, i, Xt(a))
  );
}
function fh(e, t, r) {
  let n = (r == null ? void 0 : r.truncateThreshold) ?? !1,
    a = Math.max(
      Math.floor((r == null ? void 0 : r.truncateThreshold) ?? 0),
      0,
    ),
    o = n ? Math.min(e.length, a) : e.length,
    i = n ? Math.min(t.length, a) : t.length,
    l = o !== e.length || i !== t.length,
    u = (p, f) => e[p] === t[f],
    c = [],
    s = 0,
    d = 0;
  for (
    lh(o, i, u, (p, f, h) => {
      for (; s !== f; s += 1) c.push(new pe(Ae, e[s]));
      for (; d !== h; d += 1) c.push(new pe(Re, t[d]));
      for (; p !== 0; p -= 1, s += 1, d += 1) c.push(new pe(ge, t[d]));
    });
    s !== o;
    s += 1
  )
    c.push(new pe(Ae, e[s]));
  for (; d !== i; d += 1) c.push(new pe(Re, t[d]));
  return [c, l];
}
function Uu(e) {
  return e.includes(`\r
`)
    ? `\r
`
    : `
`;
}
function cP(e, t, r) {
  let n = (r == null ? void 0 : r.truncateThreshold) ?? !1,
    a = Math.max(
      Math.floor((r == null ? void 0 : r.truncateThreshold) ?? 0),
      0,
    ),
    o = e.length,
    i = t.length;
  if (n) {
    let p = e.includes(`
`),
      f = t.includes(`
`),
      h = Uu(e),
      m = Uu(t),
      y = p
        ? `${e.split(h, a).join(h)}
`
        : e,
      b = f
        ? `${t.split(m, a).join(m)}
`
        : t;
    (o = y.length), (i = b.length);
  }
  let l = o !== e.length || i !== t.length,
    u = (p, f) => e[p] === t[f],
    c = 0,
    s = 0,
    d = [];
  return (
    lh(o, i, u, (p, f, h) => {
      c !== f && d.push(new pe(Ae, e.slice(c, f))),
        s !== h && d.push(new pe(Re, t.slice(s, h))),
        (c = f + p),
        (s = h + p),
        d.push(new pe(ge, t.slice(h, s)));
    }),
    c !== o && d.push(new pe(Ae, e.slice(c))),
    s !== i && d.push(new pe(Re, t.slice(s))),
    [d, l]
  );
}
function dP(e, t, r) {
  return t.reduce(
    (n, a) =>
      n + (a[0] === ge ? a[1] : a[0] === e && a[1].length !== 0 ? r(a[1]) : ''),
    '',
  );
}
var Hu = class {
    constructor(e, t) {
      he(this, 'op');
      he(this, 'line');
      he(this, 'lines');
      he(this, 'changeColor');
      (this.op = e),
        (this.line = []),
        (this.lines = []),
        (this.changeColor = t);
    }
    pushSubstring(e) {
      this.pushDiff(new pe(this.op, e));
    }
    pushLine() {
      this.lines.push(
        this.line.length !== 1
          ? new pe(this.op, dP(this.op, this.line, this.changeColor))
          : this.line[0][0] === this.op
            ? this.line[0]
            : new pe(this.op, this.line[0][1]),
      ),
        (this.line.length = 0);
    }
    isLineEmpty() {
      return this.line.length === 0;
    }
    pushDiff(e) {
      this.line.push(e);
    }
    align(e) {
      let t = e[1];
      if (
        t.includes(`
`)
      ) {
        let r = t.split(`
`),
          n = r.length - 1;
        r.forEach((a, o) => {
          o < n
            ? (this.pushSubstring(a), this.pushLine())
            : a.length !== 0 && this.pushSubstring(a);
        });
      } else this.pushDiff(e);
    }
    moveLinesTo(e) {
      this.isLineEmpty() || this.pushLine(),
        e.push(...this.lines),
        (this.lines.length = 0);
    }
  },
  fP = class {
    constructor(e, t) {
      he(this, 'deleteBuffer');
      he(this, 'insertBuffer');
      he(this, 'lines');
      (this.deleteBuffer = e), (this.insertBuffer = t), (this.lines = []);
    }
    pushDiffCommonLine(e) {
      this.lines.push(e);
    }
    pushDiffChangeLines(e) {
      let t = e[1].length === 0;
      (!t || this.deleteBuffer.isLineEmpty()) && this.deleteBuffer.pushDiff(e),
        (!t || this.insertBuffer.isLineEmpty()) &&
          this.insertBuffer.pushDiff(e);
    }
    flushChangeLines() {
      this.deleteBuffer.moveLinesTo(this.lines),
        this.insertBuffer.moveLinesTo(this.lines);
    }
    align(e) {
      let t = e[0],
        r = e[1];
      if (
        r.includes(`
`)
      ) {
        let n = r.split(`
`),
          a = n.length - 1;
        n.forEach((o, i) => {
          if (i === 0) {
            let l = new pe(t, o);
            this.deleteBuffer.isLineEmpty() && this.insertBuffer.isLineEmpty()
              ? (this.flushChangeLines(), this.pushDiffCommonLine(l))
              : (this.pushDiffChangeLines(l), this.flushChangeLines());
          } else
            i < a
              ? this.pushDiffCommonLine(new pe(t, o))
              : o.length !== 0 && this.pushDiffChangeLines(new pe(t, o));
        });
      } else this.pushDiffChangeLines(e);
    }
    getLines() {
      return this.flushChangeLines(), this.lines;
    }
  };
function pP(e, t) {
  let r = new Hu(Ae, t),
    n = new Hu(Re, t),
    a = new fP(r, n);
  return (
    e.forEach((o) => {
      switch (o[0]) {
        case Ae:
          r.align(o);
          break;
        case Re:
          n.align(o);
          break;
        default:
          a.align(o);
      }
    }),
    a.getLines()
  );
}
function hP(e, t) {
  if (t) {
    let r = e.length - 1;
    return e.some(
      (n, a) =>
        n[0] === ge &&
        (a !== r ||
          n[1] !==
            `
`),
    );
  }
  return e.some((r) => r[0] === ge);
}
function mP(e, t, r) {
  if (e !== t && e.length !== 0 && t.length !== 0) {
    let n =
        e.includes(`
`) ||
        t.includes(`
`),
      [a, o] = ph(
        n
          ? `${e}
`
          : e,
        n
          ? `${t}
`
          : t,
        !0,
        r,
      );
    if (hP(a, n)) {
      let i = Xt(r),
        l = pP(a, i.changeColor);
      return $l(l, o, i);
    }
  }
  return qa(
    e.split(`
`),
    t.split(`
`),
    r,
  );
}
function ph(e, t, r, n) {
  let [a, o] = cP(e, t, n);
  return VS(a), [a, o];
}
function Xo(e, t) {
  let { commonColor: r } = Xt(t);
  return r(e);
}
var {
    AsymmetricMatcher: bP,
    DOMCollection: gP,
    DOMElement: yP,
    Immutable: vP,
    ReactElement: _P,
    ReactTestComponent: EP,
  } = eh,
  hh = [EP, _P, yP, gP, vP, bP],
  Qo = { plugins: hh },
  mh = { callToJSON: !1, maxDepth: 10, plugins: hh };
function _r(e, t, r) {
  if (Object.is(e, t)) return '';
  let n = $u(e),
    a = n,
    o = !1;
  if (n === 'object' && typeof e.asymmetricMatch == 'function') {
    if (
      e.$$typeof !== Symbol.for('jest.asymmetricMatcher') ||
      typeof e.getExpectedType != 'function'
    )
      return;
    (a = e.getExpectedType()), (o = a === 'string');
  }
  if (a !== $u(t)) {
    let {
        aAnnotation: i,
        aColor: l,
        aIndicator: u,
        bAnnotation: c,
        bColor: s,
        bIndicator: d,
      } = Xt(r),
      p = Zo(mh, r),
      f = at(e, p),
      h = at(t, p),
      m = `${l(`${u} ${i}:`)} 
${f}`,
      y = `${s(`${d} ${c}:`)} 
${h}`;
    return `${m}

${y}`;
  }
  if (!o)
    switch (n) {
      case 'string':
        return qa(
          e.split(`
`),
          t.split(`
`),
          r,
        );
      case 'boolean':
      case 'number':
        return wP(e, t, r);
      case 'map':
        return oo(zu(e), zu(t), r);
      case 'set':
        return oo(Vu(e), Vu(t), r);
      default:
        return oo(e, t, r);
    }
}
function wP(e, t, r) {
  let n = at(e, Qo),
    a = at(t, Qo);
  return n === a
    ? ''
    : qa(
        n.split(`
`),
        a.split(`
`),
        r,
      );
}
function zu(e) {
  return new Map(Array.from(e.entries()).sort());
}
function Vu(e) {
  return new Set(Array.from(e.values()).sort());
}
function oo(e, t, r) {
  let n,
    a = !1;
  try {
    let i = Zo(Qo, r);
    n = Gu(e, t, i, r);
  } catch {
    a = !0;
  }
  let o = Xo(oh, r);
  if (n === void 0 || n === o) {
    let i = Zo(mh, r);
    (n = Gu(e, t, i, r)),
      n !== o &&
        !a &&
        (n = `${Xo(YS, r)}

${n}`);
  }
  return n;
}
function Zo(e, t) {
  let { compareKeys: r } = Xt(t);
  return { ...e, compareKeys: r };
}
function Gu(e, t, r, n) {
  let a = { ...r, indent: 0 },
    o = at(e, a),
    i = at(t, a);
  if (o === i) return Xo(oh, n);
  {
    let l = at(e, r),
      u = at(t, r);
    return uP(
      l.split(`
`),
      u.split(`
`),
      o.split(`
`),
      i.split(`
`),
      n,
    );
  }
}
var Wu = 2e4;
function Ku(e) {
  return Go(e) === 'Object' && typeof e.asymmetricMatch == 'function';
}
function Yu(e, t) {
  let r = Go(e),
    n = Go(t);
  return r === n && (r === 'Object' || r === 'Array');
}
function bh(e, t, r) {
  let { aAnnotation: n, bAnnotation: a } = Xt(r);
  if (
    typeof e == 'string' &&
    typeof t == 'string' &&
    e.length > 0 &&
    t.length > 0 &&
    e.length <= Wu &&
    t.length <= Wu &&
    e !== t
  ) {
    if (
      e.includes(`
`) ||
      t.includes(`
`)
    )
      return mP(t, e, r);
    let [c] = ph(t, e),
      s = c.some((h) => h[0] === ge),
      d = CP(n, a),
      p = d(n) + SP(Ju(c, Ae, s)),
      f = d(a) + TP(Ju(c, Re, s));
    return `${p}
${f}`;
  }
  let o = fu(e, { forceWritable: !0 }),
    i = fu(t, { forceWritable: !0 }),
    { replacedExpected: l, replacedActual: u } = gh(o, i);
  return _r(l, u, r);
}
function gh(e, t, r = new WeakSet(), n = new WeakSet()) {
  return Yu(e, t)
    ? r.has(e) || n.has(t)
      ? { replacedActual: e, replacedExpected: t }
      : (r.add(e),
        n.add(t),
        Mp(t).forEach((a) => {
          let o = t[a],
            i = e[a];
          if (Ku(o)) o.asymmetricMatch(i) && (e[a] = o);
          else if (Ku(i)) i.asymmetricMatch(o) && (t[a] = i);
          else if (Yu(i, o)) {
            let l = gh(i, o, r, n);
            (e[a] = l.replacedActual), (t[a] = l.replacedExpected);
          }
        }),
        { replacedActual: e, replacedExpected: t })
    : { replacedActual: e, replacedExpected: t };
}
function CP(...e) {
  let t = e.reduce((r, n) => (n.length > r ? n.length : r), 0);
  return (r) => `${r}: ${' '.repeat(t - r.length)}`;
}
var RP = '·';
function yh(e) {
  return e.replace(/\s+$/gm, (t) => RP.repeat(t.length));
}
function TP(e) {
  return me.red(yh(Ge(e)));
}
function SP(e) {
  return me.green(yh(Ge(e)));
}
function Ju(e, t, r) {
  return e.reduce(
    (n, a) =>
      n +
      (a[0] === ge ? a[1] : a[0] === t ? (r ? me.inverse(a[1]) : a[1]) : ''),
    '',
  );
}
function jn(e, t) {
  if (!e) throw new Error(t);
}
function sr(e, t) {
  return typeof t === e;
}
function PP(e) {
  return e instanceof Promise;
}
function ei(e, t, r) {
  Object.defineProperty(e, t, r);
}
function dr(e, t, r) {
  Object.defineProperty(e, t, { value: r });
}
var zr = Symbol.for('tinyspy:spy'),
  OP = new Set(),
  AP = (e) => {
    (e.called = !1),
      (e.callCount = 0),
      (e.calls = []),
      (e.results = []),
      (e.resolves = []),
      (e.next = []);
  },
  qP = (e) => (ei(e, zr, { value: { reset: () => AP(e[zr]) } }), e[zr]),
  Yn = (e) => e[zr] || qP(e);
function xP(e) {
  jn(
    sr('function', e) || sr('undefined', e),
    'cannot spy on a non-function value',
  );
  let t = function (...n) {
    let a = Yn(t);
    (a.called = !0), a.callCount++, a.calls.push(n);
    let o = a.next.shift();
    if (o) {
      a.results.push(o);
      let [s, d] = o;
      if (s === 'ok') return d;
      throw d;
    }
    let i,
      l = 'ok',
      u = a.results.length;
    if (a.impl)
      try {
        new.target
          ? (i = Reflect.construct(a.impl, n, new.target))
          : (i = a.impl.apply(this, n)),
          (l = 'ok');
      } catch (s) {
        throw ((i = s), (l = 'error'), a.results.push([l, s]), s);
      }
    let c = [l, i];
    return (
      PP(i) &&
        i.then(
          (s) => (a.resolves[u] = ['ok', s]),
          (s) => (a.resolves[u] = ['error', s]),
        ),
      a.results.push(c),
      i
    );
  };
  dr(t, '_isMockFunction', !0),
    dr(t, 'length', e ? e.length : 0),
    dr(t, 'name', (e && e.name) || 'spy');
  let r = Yn(t);
  return r.reset(), (r.impl = e), t;
}
var Xu = (e, t) => Object.getOwnPropertyDescriptor(e, t),
  Qu = (e, t) => {
    t != null &&
      typeof t == 'function' &&
      t.prototype != null &&
      Object.setPrototypeOf(e.prototype, t.prototype);
  };
function MP(e, t, r) {
  jn(!sr('undefined', e), 'spyOn could not find an object to spy upon'),
    jn(
      sr('object', e) || sr('function', e),
      'cannot spyOn on a primitive value',
    );
  let [n, a] = (() => {
      if (!sr('object', t)) return [t, 'value'];
      if ('getter' in t && 'setter' in t)
        throw new Error('cannot spy on both getter and setter');
      if ('getter' in t) return [t.getter, 'get'];
      if ('setter' in t) return [t.setter, 'set'];
      throw new Error('specify getter or setter to spy on');
    })(),
    o = Xu(e, n),
    i = Object.getPrototypeOf(e),
    l = i && Xu(i, n),
    u = o || l;
  jn(u || n in e, `${String(n)} does not exist`);
  let c = !1;
  a === 'value' &&
    u &&
    !u.value &&
    u.get &&
    ((a = 'get'), (c = !0), (r = u.get()));
  let s;
  u ? (s = u[a]) : a !== 'value' ? (s = () => e[n]) : (s = e[n]), r || (r = s);
  let d = xP(r);
  a === 'value' && Qu(d, s);
  let p = (m) => {
      let { value: y, ...b } = u || { configurable: !0, writable: !0 };
      a !== 'value' && delete b.writable, (b[a] = m), ei(e, n, b);
    },
    f = () => (u ? ei(e, n, u) : p(s)),
    h = d[zr];
  return (
    dr(h, 'restore', f),
    dr(h, 'getOriginal', () => (c ? s() : s)),
    dr(h, 'willCall', (m) => ((h.impl = m), d)),
    p(c ? () => (Qu(d, r), d) : d),
    OP.add(d),
    d
  );
}
var xa = new Set();
function vh(e) {
  return typeof e == 'function' && '_isMockFunction' in e && e._isMockFunction;
}
var $P = 0;
function NP(e) {
  let t = e,
    r,
    n = [],
    a = [],
    o = [],
    i = Yn(e),
    l = {
      get calls() {
        return i.calls;
      },
      get contexts() {
        return a;
      },
      get instances() {
        return n;
      },
      get invocationCallOrder() {
        return o;
      },
      get results() {
        return i.results.map(([f, h]) => ({
          type: f === 'error' ? 'throw' : 'return',
          value: h,
        }));
      },
      get settledResults() {
        return i.resolves.map(([f, h]) => ({
          type: f === 'error' ? 'rejected' : 'fulfilled',
          value: h,
        }));
      },
      get lastCall() {
        return i.calls[i.calls.length - 1];
      },
    },
    u = [],
    c = !1;
  function s(...f) {
    return (
      n.push(this),
      a.push(this),
      o.push(++$P),
      (c ? r : u.shift() || r || i.getOriginal() || (() => {})).apply(this, f)
    );
  }
  let d = t.name;
  (t.getMockName = () => d || 'vi.fn()'),
    (t.mockName = (f) => ((d = f), t)),
    (t.mockClear = () => (i.reset(), (n = []), (a = []), (o = []), t)),
    (t.mockReset = () => (t.mockClear(), (r = () => {}), (u = []), t)),
    (t.mockRestore = () => (t.mockReset(), i.restore(), (r = void 0), t)),
    (t.getMockImplementation = () => r),
    (t.mockImplementation = (f) => ((r = f), i.willCall(s), t)),
    (t.mockImplementationOnce = (f) => (u.push(f), t));
  function p(f, h) {
    let m = r;
    (r = f), i.willCall(s), (c = !0);
    let y = () => {
        (r = m), (c = !1);
      },
      b = h();
    return b instanceof Promise ? b.then(() => (y(), t)) : (y(), t);
  }
  return (
    (t.withImplementation = p),
    (t.mockReturnThis = () =>
      t.mockImplementation(function () {
        return this;
      })),
    (t.mockReturnValue = (f) => t.mockImplementation(() => f)),
    (t.mockReturnValueOnce = (f) => t.mockImplementationOnce(() => f)),
    (t.mockResolvedValue = (f) =>
      t.mockImplementation(() => Promise.resolve(f))),
    (t.mockResolvedValueOnce = (f) =>
      t.mockImplementationOnce(() => Promise.resolve(f))),
    (t.mockRejectedValue = (f) =>
      t.mockImplementation(() => Promise.reject(f))),
    (t.mockRejectedValueOnce = (f) =>
      t.mockImplementationOnce(() => Promise.reject(f))),
    Object.defineProperty(t, 'mock', { get: () => l }),
    i.willCall(s),
    xa.add(t),
    t
  );
}
function Zu(e) {
  let t = NP(MP({ spy: e || function () {} }, 'spy'));
  return e && t.mockImplementation(e), t;
}
var jP = '@@__IMMUTABLE_RECORD__@@',
  IP = '@@__IMMUTABLE_ITERABLE__@@';
function LP(e) {
  return e && (e[IP] || e[jP]);
}
var BP = Object.getPrototypeOf({});
function ec(e) {
  return e instanceof Error
    ? `<unserializable>: ${e.message}`
    : typeof e == 'string'
      ? `<unserializable>: ${e}`
      : '<unserializable>';
}
function ur(e, t = new WeakMap()) {
  if (!e || typeof e == 'string') return e;
  if (typeof e == 'function') return `Function<${e.name || 'anonymous'}>`;
  if (typeof e == 'symbol') return e.toString();
  if (typeof e != 'object') return e;
  if (LP(e)) return ur(e.toJSON(), t);
  if (
    e instanceof Promise ||
    (e.constructor && e.constructor.prototype === 'AsyncFunction')
  )
    return 'Promise';
  if (typeof Element < 'u' && e instanceof Element) return e.tagName;
  if (typeof e.asymmetricMatch == 'function')
    return `${e.toString()} ${HS(e.sample)}`;
  if (typeof e.toJSON == 'function') return ur(e.toJSON(), t);
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    let r = new Array(e.length);
    return (
      t.set(e, r),
      e.forEach((n, a) => {
        try {
          r[a] = ur(n, t);
        } catch (o) {
          r[a] = ec(o);
        }
      }),
      r
    );
  } else {
    let r = Object.create(null);
    t.set(e, r);
    let n = e;
    for (; n && n !== BP; )
      Object.getOwnPropertyNames(n).forEach((a) => {
        if (!(a in r))
          try {
            r[a] = ur(e[a], t);
          } catch (o) {
            delete r[a], (r[a] = ec(o));
          }
      }),
        (n = Object.getPrototypeOf(n));
    return r;
  }
}
function kP(e) {
  return e.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, '');
}
function _h(e, t, r = new WeakSet()) {
  if (!e || typeof e != 'object') return { message: String(e) };
  let n = e;
  n.stack && (n.stackStr = String(n.stack)),
    n.name && (n.nameStr = String(n.name)),
    (n.showDiff ||
      (n.showDiff === void 0 &&
        n.expected !== void 0 &&
        n.actual !== void 0)) &&
      (n.diff = bh(n.actual, n.expected, { ...t, ...n.diffOptions })),
    typeof n.expected != 'string' && (n.expected = Ge(n.expected, 10)),
    typeof n.actual != 'string' && (n.actual = Ge(n.actual, 10));
  try {
    typeof n.message == 'string' && (n.message = kP(n.message));
  } catch {}
  try {
    !r.has(n) &&
      typeof n.cause == 'object' &&
      (r.add(n), (n.cause = _h(n.cause, t, r)));
  } catch {}
  try {
    return ur(n);
  } catch (a) {
    return ur(
      new Error(`Failed to fully serialize error: ${a == null ? void 0 : a.message}
Inner error message: ${n == null ? void 0 : n.message}`),
    );
  }
}
var nn = Symbol.for('matchers-object'),
  an = Symbol.for('$$jest-matchers-object-storybook'),
  Nl = Symbol.for('expect-global'),
  ti = Symbol.for('asymmetric-matchers-object');
if (!Object.prototype.hasOwnProperty.call(globalThis, nn)) {
  let e = new WeakMap();
  Object.defineProperty(globalThis, nn, { get: () => e });
}
if (!Object.prototype.hasOwnProperty.call(globalThis, an)) {
  let e = Object.create(null),
    t = [];
  Object.defineProperty(globalThis, an, {
    configurable: !0,
    get: () => ({
      state: globalThis[nn].get(globalThis[Nl]),
      matchers: e,
      customEqualityTesters: t,
    }),
  });
}
if (!Object.prototype.hasOwnProperty.call(globalThis, ti)) {
  let e = Object.create(null);
  Object.defineProperty(globalThis, ti, { get: () => e });
}
function Jn(e) {
  return globalThis[nn].get(e);
}
function io(e, t) {
  let r = globalThis[nn],
    n = r.get(t) || {};
  Object.assign(n, e), r.set(t, n);
}
var Xn = me.green,
  jl = me.red,
  DP = me.inverse,
  FP = me.bold,
  Ot = me.dim;
function UP(e, t = 'received', r = 'expected', n = {}) {
  let {
      comment: a = '',
      isDirectExpectCall: o = !1,
      isNot: i = !1,
      promise: l = '',
      secondArgument: u = '',
      expectedColor: c = Xn,
      receivedColor: s = jl,
      secondArgumentColor: d = Xn,
    } = n,
    p = '',
    f = 'expect';
  return (
    !o && t !== '' && ((p += Ot(`${f}(`) + s(t)), (f = ')')),
    l !== '' && ((p += Ot(`${f}.`) + l), (f = '')),
    i && ((p += `${Ot(`${f}.`)}not`), (f = '')),
    e.includes('.') ? (f += e) : ((p += Ot(`${f}.`) + e), (f = '')),
    r === ''
      ? (f += '()')
      : ((p += Ot(`${f}(`) + c(r)), u && (p += Ot(', ') + d(u)), (f = ')')),
    a !== '' && (f += ` // ${a}`),
    f !== '' && (p += Ot(f)),
    p
  );
}
var HP = '·';
function Eh(e) {
  return e.replace(/\s+$/gm, (t) => HP.repeat(t.length));
}
function zP(e) {
  return jl(Eh(Ge(e)));
}
function VP(e) {
  return Xn(Eh(Ge(e)));
}
function wh() {
  return {
    EXPECTED_COLOR: Xn,
    RECEIVED_COLOR: jl,
    INVERTED_COLOR: DP,
    BOLD_WEIGHT: FP,
    DIM_COLOR: Ot,
    diff: _r,
    matcherHint: UP,
    printReceived: zP,
    printExpected: VP,
    printDiffOrStringify: bh,
  };
}
function Il() {
  return globalThis[an].customEqualityTesters;
}
function te(e, t, r, n) {
  return (r = r || []), Ch(e, t, [], [], r, n ? Rh : WP);
}
function tc(e) {
  return (
    !!e &&
    typeof e == 'object' &&
    'asymmetricMatch' in e &&
    Xe('Function', e.asymmetricMatch)
  );
}
function GP(e, t) {
  let r = tc(e),
    n = tc(t);
  if (!(r && n)) {
    if (r) return e.asymmetricMatch(t);
    if (n) return t.asymmetricMatch(e);
  }
}
function Ch(e, t, r, n, a, o) {
  let i = !0,
    l = GP(e, t);
  if (l !== void 0) return l;
  let u = { equals: te };
  for (let h = 0; h < a.length; h++) {
    let m = a[h].call(u, e, t, a);
    if (m !== void 0) return m;
  }
  if (e instanceof Error && t instanceof Error) return e.message === t.message;
  if (typeof URL == 'function' && e instanceof URL && t instanceof URL)
    return e.href === t.href;
  if (Object.is(e, t)) return !0;
  if (e === null || t === null) return e === t;
  let c = Object.prototype.toString.call(e);
  if (c !== Object.prototype.toString.call(t)) return !1;
  switch (c) {
    case '[object Boolean]':
    case '[object String]':
    case '[object Number]':
      return typeof e != typeof t
        ? !1
        : typeof e != 'object' && typeof t != 'object'
          ? Object.is(e, t)
          : Object.is(e.valueOf(), t.valueOf());
    case '[object Date]': {
      let h = +e,
        m = +t;
      return h === m || (Number.isNaN(h) && Number.isNaN(m));
    }
    case '[object RegExp]':
      return e.source === t.source && e.flags === t.flags;
  }
  if (typeof e != 'object' || typeof t != 'object') return !1;
  if (nc(e) && nc(t)) return e.isEqualNode(t);
  let s = r.length;
  for (; s--; ) {
    if (r[s] === e) return n[s] === t;
    if (n[s] === t) return !1;
  }
  if ((r.push(e), n.push(t), c === '[object Array]' && e.length !== t.length))
    return !1;
  let d = rc(e, o),
    p,
    f = d.length;
  if (rc(t, o).length !== f) return !1;
  for (; f--; )
    if (((p = d[f]), (i = o(t, p) && Ch(e[p], t[p], r, n, a, o)), !i))
      return !1;
  return r.pop(), n.pop(), i;
}
function rc(e, t) {
  let r = [];
  for (let n in e) t(e, n) && r.push(n);
  return r.concat(
    Object.getOwnPropertySymbols(e).filter(
      (n) => Object.getOwnPropertyDescriptor(e, n).enumerable,
    ),
  );
}
function WP(e, t) {
  return Rh(e, t) && e[t] !== void 0;
}
function Rh(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Xe(e, t) {
  return Object.prototype.toString.apply(t) === `[object ${e}]`;
}
function nc(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    'nodeType' in e &&
    typeof e.nodeType == 'number' &&
    'nodeName' in e &&
    typeof e.nodeName == 'string' &&
    'isEqualNode' in e &&
    typeof e.isEqualNode == 'function'
  );
}
var Th = '@@__IMMUTABLE_KEYED__@@',
  Sh = '@@__IMMUTABLE_SET__@@',
  KP = '@@__IMMUTABLE_LIST__@@',
  Ma = '@@__IMMUTABLE_ORDERED__@@',
  YP = '@@__IMMUTABLE_RECORD__@@';
function JP(e) {
  return !!(e && e[Th] && !e[Ma]);
}
function XP(e) {
  return !!(e && e[Sh] && !e[Ma]);
}
function $a(e) {
  return e != null && typeof e == 'object' && !Array.isArray(e);
}
function QP(e) {
  return !!(e && $a(e) && e[KP]);
}
function ZP(e) {
  return !!(e && $a(e) && e[Th] && e[Ma]);
}
function eO(e) {
  return !!(e && $a(e) && e[Sh] && e[Ma]);
}
function tO(e) {
  return !!(e && $a(e) && e[YP]);
}
var Ph = Symbol.iterator;
function ac(e) {
  return !!(e != null && e[Ph]);
}
function De(e, t, r = [], n = [], a = []) {
  if (
    typeof e != 'object' ||
    typeof t != 'object' ||
    Array.isArray(e) ||
    Array.isArray(t) ||
    !ac(e) ||
    !ac(t)
  )
    return;
  if (e.constructor !== t.constructor) return !1;
  let o = n.length;
  for (; o--; ) if (n[o] === e) return a[o] === t;
  n.push(e), a.push(t);
  let i = [...r.filter((c) => c !== De), l];
  function l(c, s) {
    return De(c, s, [...r], [...n], [...a]);
  }
  if (e.size !== void 0) {
    if (e.size !== t.size) return !1;
    if (Xe('Set', e) || XP(e)) {
      let c = !0;
      for (let s of e)
        if (!t.has(s)) {
          let d = !1;
          for (let p of t) te(s, p, i) === !0 && (d = !0);
          if (d === !1) {
            c = !1;
            break;
          }
        }
      return n.pop(), a.pop(), c;
    } else if (Xe('Map', e) || JP(e)) {
      let c = !0;
      for (let s of e)
        if (!t.has(s[0]) || !te(s[1], t.get(s[0]), i)) {
          let d = !1;
          for (let p of t) {
            let f = te(s[0], p[0], i),
              h = !1;
            f === !0 && (h = te(s[1], p[1], i)), h === !0 && (d = !0);
          }
          if (d === !1) {
            c = !1;
            break;
          }
        }
      return n.pop(), a.pop(), c;
    }
  }
  let u = t[Ph]();
  for (let c of e) {
    let s = u.next();
    if (s.done || !te(c, s.value, i)) return !1;
  }
  if (!u.next().done) return !1;
  if (!QP(e) && !ZP(e) && !eO(e) && !tO(e)) {
    let c = Object.entries(e),
      s = Object.entries(t);
    if (!te(c, s)) return !1;
  }
  return n.pop(), a.pop(), !0;
}
function Ll(e, t) {
  return !e || typeof e != 'object' || e === Object.prototype
    ? !1
    : Object.prototype.hasOwnProperty.call(e, t) ||
        Ll(Object.getPrototypeOf(e), t);
}
function rO(e) {
  return (
    $n(e) && !(e instanceof Error) && !Array.isArray(e) && !(e instanceof Date)
  );
}
function _n(e, t, r = []) {
  let n = r.filter((o) => o !== _n),
    a =
      (o = new WeakMap()) =>
      (i, l) => {
        if (rO(l))
          return Object.keys(l).every((u) => {
            if (l[u] != null && typeof l[u] == 'object') {
              if (o.has(l[u])) return te(i[u], l[u], n);
              o.set(l[u], !0);
            }
            let c = i != null && Ll(i, u) && te(i[u], l[u], [...n, a(o)]);
            return o.delete(l[u]), c;
          });
      };
  return a()(e, t);
}
function oc(e, t) {
  if (!(e == null || t == null || e.constructor === t.constructor)) return !1;
}
function ic(e, t) {
  let r = e,
    n = t;
  if (!(e instanceof DataView && t instanceof DataView)) {
    if (!(e instanceof ArrayBuffer) || !(t instanceof ArrayBuffer)) return;
    try {
      (r = new DataView(e)), (n = new DataView(t));
    } catch {
      return;
    }
  }
  if (r.byteLength !== n.byteLength) return !1;
  for (let a = 0; a < r.byteLength; a++)
    if (r.getUint8(a) !== n.getUint8(a)) return !1;
  return !0;
}
function ri(e, t, r = []) {
  if (!Array.isArray(e) || !Array.isArray(t)) return;
  let n = Object.keys(e),
    a = Object.keys(t),
    o = r.filter((i) => i !== ri);
  return te(e, t, o, !0) && te(n, a);
}
function nO(e, t = '#{this}', r = '#{exp}') {
  let n = `expected ${t} to be ${r} // Object.is equality`;
  return ['toStrictEqual', 'toEqual'].includes(e)
    ? `${n}

If it should pass with deep equality, replace "toBe" with "${e}"

Expected: ${t}
Received: serializes to the same string
`
    : n;
}
function aO(e, t) {
  return `${t} ${e}${t === 1 ? '' : 's'}`;
}
function lo(e) {
  return [
    ...Object.keys(e),
    ...Object.getOwnPropertySymbols(e).filter((t) => {
      var r;
      return (r = Object.getOwnPropertyDescriptor(e, t)) == null
        ? void 0
        : r.enumerable;
    }),
  ];
}
function oO(e, t, r = []) {
  let n = 0,
    a =
      (o = new WeakMap()) =>
      (i, l) => {
        if (Array.isArray(i)) {
          if (Array.isArray(l) && l.length === i.length)
            return l.map((u, c) => a(o)(i[c], u));
        } else {
          if (i instanceof Date) return i;
          if ($n(i) && $n(l)) {
            if (te(i, l, [...r, De, _n])) return l;
            let u = {};
            o.set(i, u);
            for (let c of lo(i))
              Ll(l, c)
                ? (u[c] = o.has(i[c]) ? o.get(i[c]) : a(o)(i[c], l[c]))
                : o.has(i[c]) ||
                  ((n += 1),
                  $n(i[c]) && (n += lo(i[c]).length),
                  a(o)(i[c], l[c]));
            if (lo(u).length > 0) return u;
          }
        }
        return i;
      };
  return { subset: a()(e, t), stripped: n };
}
var kt = class {
    constructor(e, t = !1) {
      he(this, '$$typeof', Symbol.for('jest.asymmetricMatcher'));
      (this.sample = e), (this.inverse = t);
    }
    getMatcherContext(e) {
      return {
        ...Jn(e || globalThis[Nl]),
        equals: te,
        isNot: this.inverse,
        customTesters: Il(),
        utils: {
          ...wh(),
          diff: _r,
          stringify: Ge,
          iterableEquality: De,
          subsetEquality: _n,
        },
      };
    }
    [Symbol.for('chai/inspect')](e) {
      let t = Ge(this, e.depth, { min: !0 });
      return t.length <= e.truncate ? t : `${this.toString()}{…}`;
    }
  },
  lc = class extends kt {
    constructor(e, t = !1) {
      if (!Xe('String', e)) throw new Error('Expected is not a string');
      super(e, t);
    }
    asymmetricMatch(e) {
      let t = Xe('String', e) && e.includes(this.sample);
      return this.inverse ? !t : t;
    }
    toString() {
      return `String${this.inverse ? 'Not' : ''}Containing`;
    }
    getExpectedType() {
      return 'string';
    }
  },
  iO = class extends kt {
    asymmetricMatch(e) {
      return e != null;
    }
    toString() {
      return 'Anything';
    }
    toAsymmetricMatcher() {
      return 'Anything';
    }
  },
  sc = class extends kt {
    constructor(e, t = !1) {
      super(e, t);
    }
    getPrototype(e) {
      return Object.getPrototypeOf
        ? Object.getPrototypeOf(e)
        : e.constructor.prototype === e
          ? null
          : e.constructor.prototype;
    }
    hasProperty(e, t) {
      return e
        ? Object.prototype.hasOwnProperty.call(e, t)
          ? !0
          : this.hasProperty(this.getPrototype(e), t)
        : !1;
    }
    asymmetricMatch(e) {
      if (typeof this.sample != 'object')
        throw new TypeError(
          `You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`,
        );
      let t = !0,
        r = this.getMatcherContext();
      for (let n in this.sample)
        if (
          !this.hasProperty(e, n) ||
          !te(this.sample[n], e[n], r.customTesters)
        ) {
          t = !1;
          break;
        }
      return this.inverse ? !t : t;
    }
    toString() {
      return `Object${this.inverse ? 'Not' : ''}Containing`;
    }
    getExpectedType() {
      return 'object';
    }
  },
  uc = class extends kt {
    constructor(e, t = !1) {
      super(e, t);
    }
    asymmetricMatch(e) {
      if (!Array.isArray(this.sample))
        throw new TypeError(
          `You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`,
        );
      let t = this.getMatcherContext(),
        r =
          this.sample.length === 0 ||
          (Array.isArray(e) &&
            this.sample.every((n) => e.some((a) => te(n, a, t.customTesters))));
      return this.inverse ? !r : r;
    }
    toString() {
      return `Array${this.inverse ? 'Not' : ''}Containing`;
    }
    getExpectedType() {
      return 'array';
    }
  },
  lO = class extends kt {
    constructor(e) {
      if (typeof e > 'u')
        throw new TypeError(
          'any() expects to be passed a constructor function. Please pass one or use anything() to match any object.',
        );
      super(e);
    }
    fnNameFor(e) {
      if (e.name) return e.name;
      let t = Function.prototype.toString
        .call(e)
        .match(/^(?:async)?\s*function\s*(?:\*\s*)?([\w$]+)\s*\(/);
      return t ? t[1] : '<anonymous>';
    }
    asymmetricMatch(e) {
      return this.sample === String
        ? typeof e == 'string' || e instanceof String
        : this.sample === Number
          ? typeof e == 'number' || e instanceof Number
          : this.sample === Function
            ? typeof e == 'function' || e instanceof Function
            : this.sample === Boolean
              ? typeof e == 'boolean' || e instanceof Boolean
              : this.sample === BigInt
                ? typeof e == 'bigint' || e instanceof BigInt
                : this.sample === Symbol
                  ? typeof e == 'symbol' || e instanceof Symbol
                  : this.sample === Object
                    ? typeof e == 'object'
                    : e instanceof this.sample;
    }
    toString() {
      return 'Any';
    }
    getExpectedType() {
      return this.sample === String
        ? 'string'
        : this.sample === Number
          ? 'number'
          : this.sample === Function
            ? 'function'
            : this.sample === Object
              ? 'object'
              : this.sample === Boolean
                ? 'boolean'
                : this.fnNameFor(this.sample);
    }
    toAsymmetricMatcher() {
      return `Any<${this.fnNameFor(this.sample)}>`;
    }
  },
  cc = class extends kt {
    constructor(e, t = !1) {
      if (!Xe('String', e) && !Xe('RegExp', e))
        throw new Error('Expected is not a String or a RegExp');
      super(new RegExp(e), t);
    }
    asymmetricMatch(e) {
      let t = Xe('String', e) && this.sample.test(e);
      return this.inverse ? !t : t;
    }
    toString() {
      return `String${this.inverse ? 'Not' : ''}Matching`;
    }
    getExpectedType() {
      return 'string';
    }
  },
  dc = class extends kt {
    constructor(t, r = 2, n = !1) {
      if (!Xe('Number', t)) throw new Error('Expected is not a Number');
      if (!Xe('Number', r)) throw new Error('Precision is not a Number');
      super(t);
      he(this, 'precision');
      (this.inverse = n), (this.precision = r);
    }
    asymmetricMatch(t) {
      if (!Xe('Number', t)) return !1;
      let r = !1;
      return (
        (t === Number.POSITIVE_INFINITY &&
          this.sample === Number.POSITIVE_INFINITY) ||
        (t === Number.NEGATIVE_INFINITY &&
          this.sample === Number.NEGATIVE_INFINITY)
          ? (r = !0)
          : (r = Math.abs(this.sample - t) < 10 ** -this.precision / 2),
        this.inverse ? !r : r
      );
    }
    toString() {
      return `Number${this.inverse ? 'Not' : ''}CloseTo`;
    }
    getExpectedType() {
      return 'number';
    }
    toAsymmetricMatcher() {
      return [
        this.toString(),
        this.sample,
        `(${aO('digit', this.precision)})`,
      ].join(' ');
    }
  },
  sO = (e, t) => {
    t.addMethod(e.expect, 'anything', () => new iO()),
      t.addMethod(e.expect, 'any', (r) => new lO(r)),
      t.addMethod(e.expect, 'stringContaining', (r) => new lc(r)),
      t.addMethod(e.expect, 'objectContaining', (r) => new sc(r)),
      t.addMethod(e.expect, 'arrayContaining', (r) => new uc(r)),
      t.addMethod(e.expect, 'stringMatching', (r) => new cc(r)),
      t.addMethod(e.expect, 'closeTo', (r, n) => new dc(r, n)),
      (e.expect.not = {
        stringContaining: (r) => new lc(r, !0),
        objectContaining: (r) => new sc(r, !0),
        arrayContaining: (r) => new uc(r, !0),
        stringMatching: (r) => new cc(r, !0),
        closeTo: (r, n) => new dc(r, n, !0),
      });
  };
function fc(e, t) {
  return (
    e &&
      t instanceof Promise &&
      ((t = t.finally(() => {
        let r = e.promises.indexOf(t);
        r !== -1 && e.promises.splice(r, 1);
      })),
      e.promises || (e.promises = []),
      e.promises.push(t)),
    t
  );
}
function Oh(e, t) {
  return function (...r) {
    var n;
    if (!e.flag(this, 'soft')) return t.apply(this, r);
    let a = e.flag(this, 'vitest-test');
    if (!a) throw new Error('expect.soft() can only be used inside a test');
    try {
      return t.apply(this, r);
    } catch (o) {
      a.result || (a.result = { state: 'fail' }),
        (a.result.state = 'fail'),
        (n = a.result).errors || (n.errors = []),
        a.result.errors.push(_h(o));
    }
  };
}
var uO = (e, t) => {
  let { AssertionError: r } = e,
    n = Il();
  function a(s, d) {
    let p = (f) => {
      let h = Oh(t, d);
      t.addMethod(e.Assertion.prototype, f, h),
        t.addMethod(globalThis[an].matchers, f, h);
    };
    Array.isArray(s) ? s.forEach((f) => p(f)) : p(s);
  }
  ['throw', 'throws', 'Throw'].forEach((s) => {
    t.overwriteMethod(
      e.Assertion.prototype,
      s,
      (d) =>
        function (...p) {
          let f = t.flag(this, 'promise'),
            h = t.flag(this, 'object'),
            m = t.flag(this, 'negate');
          if (f === 'rejects')
            t.flag(this, 'object', () => {
              throw h;
            });
          else if (f === 'resolves' && typeof h != 'function') {
            if (m) return;
            {
              let y =
                  t.flag(this, 'message') ||
                  "expected promise to throw an error, but it didn't",
                b = { showDiff: !1 };
              throw new r(y, b, t.flag(this, 'ssfi'));
            }
          }
          d.apply(this, p);
        },
    );
  }),
    a('withTest', function (s) {
      return t.flag(this, 'vitest-test', s), this;
    }),
    a('toEqual', function (s) {
      let d = t.flag(this, 'object'),
        p = te(d, s, [...n, De]);
      return this.assert(
        p,
        'expected #{this} to deeply equal #{exp}',
        'expected #{this} to not deeply equal #{exp}',
        s,
        d,
      );
    }),
    a('toStrictEqual', function (s) {
      let d = t.flag(this, 'object'),
        p = te(d, s, [...n, De, oc, ri, ic], !0);
      return this.assert(
        p,
        'expected #{this} to strictly equal #{exp}',
        'expected #{this} to not strictly equal #{exp}',
        s,
        d,
      );
    }),
    a('toBe', function (s) {
      let d = this._obj,
        p = Object.is(d, s),
        f = '';
      return (
        p ||
          (te(d, s, [...n, De, oc, ri, ic], !0)
            ? (f = 'toStrictEqual')
            : te(d, s, [...n, De]) && (f = 'toEqual')),
        this.assert(
          p,
          nO(f),
          'expected #{this} not to be #{exp} // Object.is equality',
          s,
          d,
        )
      );
    }),
    a('toMatchObject', function (s) {
      let d = this._obj,
        p = te(d, s, [...n, De, _n]),
        f = t.flag(this, 'negate'),
        { subset: h, stripped: m } = oO(d, s);
      if ((p && f) || (!p && !f)) {
        let y = t.getMessage(this, [
            p,
            'expected #{this} to match object #{exp}',
            'expected #{this} to not match object #{exp}',
            s,
            h,
            !1,
          ]),
          b =
            m === 0
              ? y
              : `${y}
(${m} matching ${m === 1 ? 'property' : 'properties'} omitted from actual)`;
        throw new r(b, { showDiff: !0, expected: s, actual: h });
      }
    }),
    a('toMatch', function (s) {
      let d = this._obj;
      if (typeof d != 'string')
        throw new TypeError(
          `.toMatch() expects to receive a string, but got ${typeof d}`,
        );
      return this.assert(
        typeof s == 'string' ? d.includes(s) : d.match(s),
        'expected #{this} to match #{exp}',
        'expected #{this} not to match #{exp}',
        s,
        d,
      );
    }),
    a('toContain', function (s) {
      let d = this._obj;
      if (typeof Node < 'u' && d instanceof Node) {
        if (!(s instanceof Node))
          throw new TypeError(
            `toContain() expected a DOM node as the argument, but got ${typeof s}`,
          );
        return this.assert(
          d.contains(s),
          'expected #{this} to contain element #{exp}',
          'expected #{this} not to contain element #{exp}',
          s,
          d,
        );
      }
      if (typeof DOMTokenList < 'u' && d instanceof DOMTokenList) {
        ft(s, 'class name', ['string']);
        let p = t.flag(this, 'negate')
          ? d.value.replace(s, '').trim()
          : `${d.value} ${s}`;
        return this.assert(
          d.contains(s),
          `expected "${d.value}" to contain "${s}"`,
          `expected "${d.value}" not to contain "${s}"`,
          p,
          d.value,
        );
      }
      return typeof d == 'string' && typeof s == 'string'
        ? this.assert(
            d.includes(s),
            'expected #{this} to contain #{exp}',
            'expected #{this} not to contain #{exp}',
            s,
            d,
          )
        : (d != null &&
            typeof d != 'string' &&
            t.flag(this, 'object', Array.from(d)),
          this.contain(s));
    }),
    a('toContainEqual', function (s) {
      let d = t.flag(this, 'object'),
        p = Array.from(d).findIndex((f) => te(f, s, n));
      this.assert(
        p !== -1,
        'expected #{this} to deep equally contain #{exp}',
        'expected #{this} to not deep equally contain #{exp}',
        s,
      );
    }),
    a('toBeTruthy', function () {
      let s = t.flag(this, 'object');
      this.assert(
        !!s,
        'expected #{this} to be truthy',
        'expected #{this} to not be truthy',
        s,
        !1,
      );
    }),
    a('toBeFalsy', function () {
      let s = t.flag(this, 'object');
      this.assert(
        !s,
        'expected #{this} to be falsy',
        'expected #{this} to not be falsy',
        s,
        !1,
      );
    }),
    a('toBeGreaterThan', function (s) {
      let d = this._obj;
      return (
        ft(d, 'actual', ['number', 'bigint']),
        ft(s, 'expected', ['number', 'bigint']),
        this.assert(
          d > s,
          `expected ${d} to be greater than ${s}`,
          `expected ${d} to be not greater than ${s}`,
          d,
          s,
          !1,
        )
      );
    }),
    a('toBeGreaterThanOrEqual', function (s) {
      let d = this._obj;
      return (
        ft(d, 'actual', ['number', 'bigint']),
        ft(s, 'expected', ['number', 'bigint']),
        this.assert(
          d >= s,
          `expected ${d} to be greater than or equal to ${s}`,
          `expected ${d} to be not greater than or equal to ${s}`,
          d,
          s,
          !1,
        )
      );
    }),
    a('toBeLessThan', function (s) {
      let d = this._obj;
      return (
        ft(d, 'actual', ['number', 'bigint']),
        ft(s, 'expected', ['number', 'bigint']),
        this.assert(
          d < s,
          `expected ${d} to be less than ${s}`,
          `expected ${d} to be not less than ${s}`,
          d,
          s,
          !1,
        )
      );
    }),
    a('toBeLessThanOrEqual', function (s) {
      let d = this._obj;
      return (
        ft(d, 'actual', ['number', 'bigint']),
        ft(s, 'expected', ['number', 'bigint']),
        this.assert(
          d <= s,
          `expected ${d} to be less than or equal to ${s}`,
          `expected ${d} to be not less than or equal to ${s}`,
          d,
          s,
          !1,
        )
      );
    }),
    a('toBeNaN', function () {
      return this.be.NaN;
    }),
    a('toBeUndefined', function () {
      return this.be.undefined;
    }),
    a('toBeNull', function () {
      return this.be.null;
    }),
    a('toBeDefined', function () {
      let s = t.flag(this, 'negate');
      return (
        t.flag(this, 'negate', !1),
        s ? this.be.undefined : this.not.be.undefined
      );
    }),
    a('toBeTypeOf', function (s) {
      let d = typeof this._obj,
        p = s === d;
      return this.assert(
        p,
        'expected #{this} to be type of #{exp}',
        'expected #{this} not to be type of #{exp}',
        s,
        d,
      );
    }),
    a('toBeInstanceOf', function (s) {
      return this.instanceOf(s);
    }),
    a('toHaveLength', function (s) {
      return this.have.length(s);
    }),
    a('toHaveProperty', function (...s) {
      Array.isArray(s[0]) &&
        (s[0] = s[0]
          .map((R) => String(R).replace(/([.[\]])/g, '\\$1'))
          .join('.'));
      let d = this._obj,
        [p, f] = s,
        h = () =>
          Object.prototype.hasOwnProperty.call(d, p)
            ? { value: d[p], exists: !0 }
            : t.getPathInfo(d, p),
        { value: m, exists: y } = h(),
        b = y && (s.length === 1 || te(f, m, n)),
        g = s.length === 1 ? '' : ` with value ${t.objDisplay(f)}`;
      return this.assert(
        b,
        `expected #{this} to have property "${p}"${g}`,
        `expected #{this} to not have property "${p}"${g}`,
        f,
        y ? m : void 0,
      );
    }),
    a('toBeCloseTo', function (s, d = 2) {
      let p = this._obj,
        f = !1,
        h = 0,
        m = 0;
      return (
        (s === Number.POSITIVE_INFINITY && p === Number.POSITIVE_INFINITY) ||
        (s === Number.NEGATIVE_INFINITY && p === Number.NEGATIVE_INFINITY)
          ? (f = !0)
          : ((h = 10 ** -d / 2), (m = Math.abs(p - s)), (f = m < h)),
        this.assert(
          f,
          `expected #{this} to be close to #{exp}, received difference is ${m}, but expected ${h}`,
          `expected #{this} to not be close to #{exp}, received difference is ${m}, but expected ${h}`,
          s,
          p,
          !1,
        )
      );
    });
  let o = (s) => {
      if (!vh(s._obj))
        throw new TypeError(
          `${t.inspect(s._obj)} is not a spy or a call to a spy!`,
        );
    },
    i = (s) => (o(s), s._obj),
    l = (s) => {
      let d = s % 10,
        p = s % 100;
      return d === 1 && p !== 11
        ? `${s}st`
        : d === 2 && p !== 12
          ? `${s}nd`
          : d === 3 && p !== 13
            ? `${s}rd`
            : `${s}th`;
    },
    u = (s, d, p) => (
      s.mock.calls &&
        (d += me.gray(`

Received: 

${s.mock.calls.map((f, h) => {
  let m = me.bold(`  ${l(h + 1)} ${s.getMockName()} call:

`);
  return (
    p
      ? (m += _r(p, f, { omitAnnotationLines: !0 }))
      : (m += Ge(f)
          .split(
            `
`,
          )
          .map((y) => `    ${y}`).join(`
`)),
    (m += `
`),
    m
  );
}).join(`
`)}`)),
      (d += me.gray(`

Number of calls: ${me.bold(s.mock.calls.length)}
`)),
      d
    ),
    c = (s, d, p, f) => (
      (p += me.gray(`

Received: 

${d.map((h, m) => {
  let y = me.bold(`  ${l(m + 1)} ${s.getMockName()} call return:

`);
  return (
    f
      ? (y += _r(f, h.value, { omitAnnotationLines: !0 }))
      : (y += Ge(h)
          .split(
            `
`,
          )
          .map((b) => `    ${b}`).join(`
`)),
    (y += `
`),
    y
  );
}).join(`
`)}`)),
      (p += me.gray(`

Number of calls: ${me.bold(s.mock.calls.length)}
`)),
      p
    );
  a(['toHaveBeenCalledTimes', 'toBeCalledTimes'], function (s) {
    let d = i(this),
      p = d.getMockName(),
      f = d.mock.calls.length;
    return this.assert(
      f === s,
      `expected "${p}" to be called #{exp} times, but got ${f} times`,
      `expected "${p}" to not be called #{exp} times`,
      s,
      f,
      !1,
    );
  }),
    a('toHaveBeenCalledOnce', function () {
      let s = i(this),
        d = s.getMockName(),
        p = s.mock.calls.length;
      return this.assert(
        p === 1,
        `expected "${d}" to be called once, but got ${p} times`,
        `expected "${d}" to not be called once`,
        1,
        p,
        !1,
      );
    }),
    a(['toHaveBeenCalled', 'toBeCalled'], function () {
      let s = i(this),
        d = s.getMockName(),
        p = s.mock.calls.length,
        f = p > 0,
        h = t.flag(this, 'negate'),
        m = t.getMessage(this, [
          f,
          `expected "${d}" to be called at least once`,
          `expected "${d}" to not be called at all, but actually been called ${p} times`,
          !0,
          f,
        ]);
      if ((f && h && (m = u(s, m)), (f && h) || (!f && !h))) throw new r(m);
    }),
    a(['toHaveBeenCalledWith', 'toBeCalledWith'], function (...s) {
      let d = i(this),
        p = d.getMockName(),
        f = d.mock.calls.some((y) => te(y, s, [...n, De])),
        h = t.flag(this, 'negate'),
        m = t.getMessage(this, [
          f,
          `expected "${p}" to be called with arguments: #{exp}`,
          `expected "${p}" to not be called with arguments: #{exp}`,
          s,
        ]);
      if ((f && h) || (!f && !h)) throw new r(u(d, m, s));
    }),
    a(['toHaveBeenNthCalledWith', 'nthCalledWith'], function (s, ...d) {
      let p = i(this),
        f = p.getMockName(),
        h = p.mock.calls[s - 1],
        m = p.mock.calls.length,
        y = s <= m;
      this.assert(
        te(h, d, [...n, De]),
        `expected ${l(s)} "${f}" call to have been called with #{exp}${y ? '' : `, but called only ${m} times`}`,
        `expected ${l(s)} "${f}" call to not have been called with #{exp}`,
        d,
        h,
        y,
      );
    }),
    a(['toHaveBeenLastCalledWith', 'lastCalledWith'], function (...s) {
      let d = i(this),
        p = d.getMockName(),
        f = d.mock.calls[d.mock.calls.length - 1];
      this.assert(
        te(f, s, [...n, De]),
        `expected last "${p}" call to have been called with #{exp}`,
        `expected last "${p}" call to not have been called with #{exp}`,
        s,
        f,
      );
    }),
    a(['toThrow', 'toThrowError'], function (s) {
      if (typeof s == 'string' || typeof s > 'u' || s instanceof RegExp)
        return this.throws(s);
      let d = this._obj,
        p = t.flag(this, 'promise'),
        f = t.flag(this, 'negate'),
        h = null;
      if (p === 'rejects') h = d;
      else if (p === 'resolves' && typeof d != 'function') {
        if (f) return;
        {
          let m =
              t.flag(this, 'message') ||
              "expected promise to throw an error, but it didn't",
            y = { showDiff: !1 };
          throw new r(m, y, t.flag(this, 'ssfi'));
        }
      } else {
        let m = !1;
        try {
          d();
        } catch (y) {
          (m = !0), (h = y);
        }
        if (!m && !f) {
          let y =
              t.flag(this, 'message') ||
              "expected function to throw an error, but it didn't",
            b = { showDiff: !1 };
          throw new r(y, b, t.flag(this, 'ssfi'));
        }
      }
      if (typeof s == 'function') {
        let m = s.name || s.prototype.constructor.name;
        return this.assert(
          h && h instanceof s,
          `expected error to be instance of ${m}`,
          `expected error not to be instance of ${m}`,
          s,
          h,
        );
      }
      if (s instanceof Error)
        return this.assert(
          h && s.message === h.message,
          `expected error to have message: ${s.message}`,
          `expected error not to have message: ${s.message}`,
          s.message,
          h && h.message,
        );
      if (
        typeof s == 'object' &&
        'asymmetricMatch' in s &&
        typeof s.asymmetricMatch == 'function'
      ) {
        let m = s;
        return this.assert(
          h && m.asymmetricMatch(h),
          'expected error to match asymmetric matcher',
          'expected error not to match asymmetric matcher',
          m,
          h,
        );
      }
      throw new Error(
        `"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof s}"`,
      );
    }),
    [
      {
        name: 'toHaveResolved',
        condition: (s) =>
          s.mock.settledResults.length > 0 &&
          s.mock.settledResults.some(({ type: d }) => d === 'fulfilled'),
        action: 'resolved',
      },
      {
        name: ['toHaveReturned', 'toReturn'],
        condition: (s) =>
          s.mock.calls.length > 0 &&
          s.mock.results.some(({ type: d }) => d !== 'throw'),
        action: 'called',
      },
    ].forEach(({ name: s, condition: d, action: p }) => {
      a(s, function () {
        let f = i(this),
          h = f.getMockName(),
          m = d(f);
        this.assert(
          m,
          `expected "${h}" to be successfully ${p} at least once`,
          `expected "${h}" to not be successfully ${p}`,
          m,
          !m,
          !1,
        );
      });
    }),
    [
      {
        name: 'toHaveResolvedTimes',
        condition: (s, d) =>
          s.mock.settledResults.reduce(
            (p, { type: f }) => (f === 'fulfilled' ? ++p : p),
            0,
          ) === d,
        action: 'resolved',
      },
      {
        name: ['toHaveReturnedTimes', 'toReturnTimes'],
        condition: (s, d) =>
          s.mock.results.reduce(
            (p, { type: f }) => (f === 'throw' ? p : ++p),
            0,
          ) === d,
        action: 'called',
      },
    ].forEach(({ name: s, condition: d, action: p }) => {
      a(s, function (f) {
        let h = i(this),
          m = h.getMockName(),
          y = d(h, f);
        this.assert(
          y,
          `expected "${m}" to be successfully ${p} ${f} times`,
          `expected "${m}" to not be successfully ${p} ${f} times`,
          `expected resolved times: ${f}`,
          `received resolved times: ${y}`,
          !1,
        );
      });
    }),
    [
      {
        name: 'toHaveResolvedWith',
        condition: (s, d) =>
          s.mock.settledResults.some(
            ({ type: p, value: f }) => p === 'fulfilled' && te(d, f),
          ),
        action: 'resolve',
      },
      {
        name: ['toHaveReturnedWith', 'toReturnWith'],
        condition: (s, d) =>
          s.mock.results.some(
            ({ type: p, value: f }) => p === 'return' && te(d, f),
          ),
        action: 'return',
      },
    ].forEach(({ name: s, condition: d, action: p }) => {
      a(s, function (f) {
        let h = i(this),
          m = d(h, f),
          y = t.flag(this, 'negate');
        if ((m && y) || (!m && !y)) {
          let b = h.getMockName(),
            g = t.getMessage(this, [
              m,
              `expected "${b}" to ${p} with: #{exp} at least once`,
              `expected "${b}" to not ${p} with: #{exp}`,
              f,
            ]),
            R = p === 'return' ? h.mock.results : h.mock.settledResults;
          throw new r(c(h, R, g, f));
        }
      });
    }),
    [
      {
        name: 'toHaveLastResolvedWith',
        condition: (s, d) => {
          let p = s.mock.settledResults[s.mock.settledResults.length - 1];
          return p && p.type === 'fulfilled' && te(p.value, d);
        },
        action: 'resolve',
      },
      {
        name: ['toHaveLastReturnedWith', 'lastReturnedWith'],
        condition: (s, d) => {
          let p = s.mock.results[s.mock.results.length - 1];
          return p && p.type === 'return' && te(p.value, d);
        },
        action: 'return',
      },
    ].forEach(({ name: s, condition: d, action: p }) => {
      a(s, function (f) {
        let h = i(this),
          m = p === 'return' ? h.mock.results : h.mock.settledResults,
          y = m[m.length - 1],
          b = h.getMockName();
        this.assert(
          d(h, f),
          `expected last "${b}" call to ${p} #{exp}`,
          `expected last "${b}" call to not ${p} #{exp}`,
          f,
          y == null ? void 0 : y.value,
        );
      });
    }),
    [
      {
        name: 'toHaveNthResolvedWith',
        condition: (s, d, p) => {
          let f = s.mock.settledResults[d - 1];
          return f && f.type === 'fulfilled' && te(f.value, p);
        },
        action: 'resolve',
      },
      {
        name: ['toHaveNthReturnedWith', 'nthReturnedWith'],
        condition: (s, d, p) => {
          let f = s.mock.results[d - 1];
          return f && f.type === 'return' && te(f.value, p);
        },
        action: 'return',
      },
    ].forEach(({ name: s, condition: d, action: p }) => {
      a(s, function (f, h) {
        let m = i(this),
          y = m.getMockName(),
          b = (p === 'return' ? m.mock.results : m.mock.settledResults)[f - 1],
          g = `${l(f)} call`;
        this.assert(
          d(m, f, h),
          `expected ${g} "${y}" call to ${p} #{exp}`,
          `expected ${g} "${y}" call to not ${p} #{exp}`,
          h,
          b == null ? void 0 : b.value,
        );
      });
    }),
    a('toSatisfy', function (s, d) {
      return this.be.satisfy(s, d);
    }),
    a('withContext', function (s) {
      for (let d in s) t.flag(this, d, s[d]);
      return this;
    }),
    t.addProperty(e.Assertion.prototype, 'resolves', function () {
      let s = new Error('resolves');
      t.flag(this, 'promise', 'resolves'), t.flag(this, 'error', s);
      let d = t.flag(this, 'vitest-test'),
        p = t.flag(this, 'object');
      if (t.flag(this, 'poll'))
        throw new SyntaxError(
          'expect.poll() is not supported in combination with .resolves',
        );
      if (typeof (p == null ? void 0 : p.then) != 'function')
        throw new TypeError(
          `You must provide a Promise to expect() when using .resolves, not '${typeof p}'.`,
        );
      let f = new Proxy(this, {
        get: (h, m, y) => {
          let b = Reflect.get(h, m, y);
          return typeof b != 'function'
            ? b instanceof e.Assertion
              ? f
              : b
            : async (...g) => {
                let R = p.then(
                  (C) => (t.flag(this, 'object', C), b.call(this, ...g)),
                  (C) => {
                    let _ = new r(
                      `promise rejected "${t.inspect(C)}" instead of resolving`,
                      { showDiff: !1 },
                    );
                    throw (
                      ((_.cause = C),
                      (_.stack = s.stack.replace(s.message, _.message)),
                      _)
                    );
                  },
                );
                return fc(d, R);
              };
        },
      });
      return f;
    }),
    t.addProperty(e.Assertion.prototype, 'rejects', function () {
      let s = new Error('rejects');
      t.flag(this, 'promise', 'rejects'), t.flag(this, 'error', s);
      let d = t.flag(this, 'vitest-test'),
        p = t.flag(this, 'object'),
        f = typeof p == 'function' ? p() : p;
      if (t.flag(this, 'poll'))
        throw new SyntaxError(
          'expect.poll() is not supported in combination with .rejects',
        );
      if (typeof (f == null ? void 0 : f.then) != 'function')
        throw new TypeError(
          `You must provide a Promise to expect() when using .rejects, not '${typeof f}'.`,
        );
      let h = new Proxy(this, {
        get: (m, y, b) => {
          let g = Reflect.get(m, y, b);
          return typeof g != 'function'
            ? g instanceof e.Assertion
              ? h
              : g
            : async (...R) => {
                let C = f.then(
                  (_) => {
                    let w = new r(
                      `promise resolved "${t.inspect(_)}" instead of rejecting`,
                      {
                        showDiff: !0,
                        expected: new Error('rejected promise'),
                        actual: _,
                      },
                    );
                    throw (
                      ((w.stack = s.stack.replace(s.message, w.message)), w)
                    );
                  },
                  (_) => (t.flag(this, 'object', _), g.call(this, ...R)),
                );
                return fc(d, C);
              };
        },
      });
      return h;
    });
};
function cO(e, t) {
  let r = e._obj,
    n = nt.flag(e, 'negate'),
    a = nt.flag(e, 'promise') || '',
    o = {
      ...wh(),
      diff: _r,
      stringify: Ge,
      iterableEquality: De,
      subsetEquality: _n,
    };
  return {
    state: {
      ...Jn(t),
      customTesters: Il(),
      isNot: n,
      utils: o,
      promise: a,
      equals: te,
      suppressedErrors: [],
      soft: nt.flag(e, 'soft'),
      poll: nt.flag(e, 'poll'),
    },
    isNot: n,
    obj: r,
  };
}
var pc = class extends Error {
  constructor(e, t, r) {
    super(e), (this.actual = t), (this.expected = r);
  }
};
function dO(e, t, r) {
  return (n, a) => {
    Object.entries(r).forEach(([o, i]) => {
      function l(...d) {
        let { state: p, isNot: f, obj: h } = cO(this, t),
          m = i.call(p, h, ...d);
        if (m && typeof m == 'object' && m instanceof Promise)
          return m.then(({ pass: C, message: _, actual: w, expected: E }) => {
            if ((C && f) || (!C && !f)) throw new pc(_(), w, E);
          });
        let { pass: y, message: b, actual: g, expected: R } = m;
        if ((y && f) || (!y && !f)) throw new pc(b(), g, R);
      }
      let u = Oh(a, l);
      a.addMethod(globalThis[an].matchers, o, u),
        a.addMethod(e.Assertion.prototype, o, u);
      class c extends kt {
        constructor(p = !1, ...f) {
          super(f, p);
        }
        asymmetricMatch(p) {
          let { pass: f } = i.call(
            this.getMatcherContext(t),
            p,
            ...this.sample,
          );
          return this.inverse ? !f : f;
        }
        toString() {
          return `${this.inverse ? 'not.' : ''}${o}`;
        }
        getExpectedType() {
          return 'any';
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(', ')}>`;
        }
      }
      let s = (...d) => new c(!1, ...d);
      Object.defineProperty(t, o, {
        configurable: !0,
        enumerable: !0,
        value: s,
        writable: !0,
      }),
        Object.defineProperty(t.not, o, {
          configurable: !0,
          enumerable: !0,
          value: (...d) => new c(!0, ...d),
          writable: !0,
        }),
        Object.defineProperty(globalThis[ti], o, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0,
        });
    });
  };
}
var fO = (e, t) => {
  t.addMethod(e.expect, 'extend', (r, n) => {
    Ur(dO(e, r, n));
  });
};
function pO() {
  Ur(fO), Ur(uO), Ur(sO);
  let e = (n, a) => {
    let { assertionCalls: o } = Jn(e);
    return io({ assertionCalls: o + 1, soft: !1 }, e), zt(n, a);
  };
  Object.assign(e, zt),
    (e.getState = () => Jn(e)),
    (e.setState = (n) => io(n, e)),
    (e.extend = (n) => zt.extend(e, n)),
    (e.soft = (...n) => {
      let a = e(...n);
      return e.setState({ soft: !0 }), a;
    }),
    (e.unreachable = (n) => {
      S.fail(`expected${n ? ` "${n}" ` : ' '}not to be reached`);
    });
  function t(n) {
    let a = () =>
      new Error(
        `expected number of assertions to be ${n}, but got ${e.getState().assertionCalls}`,
      );
    'captureStackTrace' in Error &&
      typeof Error.captureStackTrace == 'function' &&
      Error.captureStackTrace(a(), t),
      e.setState({
        expectedAssertionsNumber: n,
        expectedAssertionsNumberErrorGen: a,
      });
  }
  function r() {
    let n = new Error('expected any number of assertion, but got none');
    'captureStackTrace' in Error &&
      typeof Error.captureStackTrace == 'function' &&
      Error.captureStackTrace(n, r),
      e.setState({ isExpectingAssertions: !0, isExpectingAssertionsError: n });
  }
  return (
    io(
      {
        assertionCalls: 0,
        isExpectingAssertions: !1,
        isExpectingAssertionsError: null,
        expectedAssertionsNumber: null,
        expectedAssertionsNumberErrorGen: null,
      },
      e,
    ),
    nt.addMethod(e, 'assertions', t),
    nt.addMethod(e, 'hasAssertions', r),
    e.extend(kf),
    e
  );
}
var Ah = pO();
Object.defineProperty(globalThis, Nl, {
  value: Ah,
  writable: !0,
  configurable: !0,
});
var ni = new Set();
function hO(e) {
  return ni.add(e), () => void ni.delete(e);
}
function mO(e) {
  let t = e ? Zu(e) : Zu();
  return bO(t);
}
function bO(e) {
  let t = hc(e),
    r = t.mockImplementation.bind(null);
  return (t.mockImplementation = (n) => hc(r(n))), t;
}
function hc(e) {
  let t = Yn(e),
    r = t.impl;
  return (
    t.willCall(function (...n) {
      return ni.forEach((a) => a(e, n)), r == null ? void 0 : r.apply(this, n);
    }),
    e
  );
}
function gO() {
  xa.forEach((e) => e.mockClear());
}
function yO() {
  xa.forEach((e) => e.mockReset());
}
function vO() {
  xa.forEach((e) => e.mockRestore());
}
var qh = {};
$i(qh, {
  buildQueries: () => Ct,
  configure: () => MA,
  createEvent: () => Ln,
  findAllByAltText: () => Nm,
  findAllByDisplayValue: () => Om,
  findAllByLabelText: () => lm,
  findAllByPlaceholderText: () => bm,
  findAllByRole: () => Wm,
  findAllByTestId: () => Zm,
  findAllByText: () => wm,
  findAllByTitle: () => Dm,
  findByAltText: () => jm,
  findByDisplayValue: () => Am,
  findByLabelText: () => sm,
  findByPlaceholderText: () => gm,
  findByRole: () => Km,
  findByTestId: () => eb,
  findByText: () => Cm,
  findByTitle: () => Fm,
  fireEvent: () => cn,
  getAllByAltText: () => Mm,
  getAllByDisplayValue: () => Sm,
  getAllByLabelText: () => um,
  getAllByPlaceholderText: () => hm,
  getAllByRole: () => Vm,
  getAllByTestId: () => Xm,
  getAllByText: () => _m,
  getAllByTitle: () => Bm,
  getByAltText: () => $m,
  getByDisplayValue: () => Pm,
  getByLabelText: () => cm,
  getByPlaceholderText: () => mm,
  getByRole: () => Gm,
  getByTestId: () => Qm,
  getByText: () => Em,
  getByTitle: () => km,
  getConfig: () => Q,
  getDefaultNormalizer: () => Hl,
  getElementError: () => ja,
  getMultipleElementsFoundError: () => Ia,
  getNodeText: () => En,
  getQueriesForElement: () => pi,
  getRoles: () => em,
  getSuggestedQuery: () => Zn,
  isInaccessible: () => Na,
  logDOM: () => ai,
  logRoles: () => LA,
  makeFindQuery: () => wr,
  makeGetAllQuery: () => Gl,
  makeSingleQuery: () => Er,
  prettyDOM: () => sn,
  prettyFormat: () => Bl,
  queries: () => ea,
  queryAllByAltText: () => qm,
  queryAllByAttribute: () => Zt,
  queryAllByDisplayValue: () => Rm,
  queryAllByLabelText: () => dm,
  queryAllByPlaceholderText: () => fm,
  queryAllByRole: () => Hm,
  queryAllByTestId: () => Ym,
  queryAllByText: () => ym,
  queryAllByTitle: () => Im,
  queryByAltText: () => xm,
  queryByAttribute: () => rm,
  queryByDisplayValue: () => Tm,
  queryByLabelText: () => om,
  queryByPlaceholderText: () => pm,
  queryByRole: () => zm,
  queryByTestId: () => Jm,
  queryByText: () => vm,
  queryByTitle: () => Lm,
  queryHelpers: () => XA,
  screen: () => Tq,
  waitFor: () => Vl,
  waitForElementToBeRemoved: () => yq,
  within: () => pi,
  wrapAllByQueryWithSuggestion: () => Ie,
  wrapSingleQueryWithSuggestion: () => Nt,
});
var Bl = Fe(I1()),
  _O = Object.prototype.toString;
function EO(e) {
  return typeof e == 'function' || _O.call(e) === '[object Function]';
}
function wO(e) {
  var t = Number(e);
  return isNaN(t)
    ? 0
    : t === 0 || !isFinite(t)
      ? t
      : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var CO = Math.pow(2, 53) - 1;
function RO(e) {
  var t = wO(e);
  return Math.min(Math.max(t, 0), CO);
}
function Je(e, t) {
  var r = Array,
    n = Object(e);
  if (e == null)
    throw new TypeError(
      'Array.from requires an array-like object - not null or undefined',
    );
  for (
    var a = RO(n.length), o = EO(r) ? Object(new r(a)) : new Array(a), i = 0, l;
    i < a;

  )
    (l = n[i]), (o[i] = l), (i += 1);
  return (o.length = a), o;
}
function on(e) {
  '@babel/helpers - typeof';
  return (
    (on =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    on(e)
  );
}
function TO(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function SO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, xh(n.key), n);
  }
}
function PO(e, t, r) {
  return (
    t && SO(e.prototype, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function OO(e, t, r) {
  return (
    (t = xh(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function xh(e) {
  var t = AO(e, 'string');
  return on(t) === 'symbol' ? t : String(t);
}
function AO(e, t) {
  if (on(e) !== 'object' || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || 'default');
    if (on(n) !== 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var qO = (function () {
    function e() {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      TO(this, e), OO(this, 'items', void 0), (this.items = t);
    }
    return (
      PO(e, [
        {
          key: 'add',
          value: function (t) {
            return this.has(t) === !1 && this.items.push(t), this;
          },
        },
        {
          key: 'clear',
          value: function () {
            this.items = [];
          },
        },
        {
          key: 'delete',
          value: function (t) {
            var r = this.items.length;
            return (
              (this.items = this.items.filter(function (n) {
                return n !== t;
              })),
              r !== this.items.length
            );
          },
        },
        {
          key: 'forEach',
          value: function (t) {
            var r = this;
            this.items.forEach(function (n) {
              t(n, n, r);
            });
          },
        },
        {
          key: 'has',
          value: function (t) {
            return this.items.indexOf(t) !== -1;
          },
        },
        {
          key: 'size',
          get: function () {
            return this.items.length;
          },
        },
      ]),
      e
    );
  })(),
  xO = typeof Set > 'u' ? Set : qO;
function xe(e) {
  var t;
  return (t = e.localName) !== null && t !== void 0
    ? t
    : e.tagName.toLowerCase();
}
var MO = {
    article: 'article',
    aside: 'complementary',
    button: 'button',
    datalist: 'listbox',
    dd: 'definition',
    details: 'group',
    dialog: 'dialog',
    dt: 'term',
    fieldset: 'group',
    figure: 'figure',
    form: 'form',
    footer: 'contentinfo',
    h1: 'heading',
    h2: 'heading',
    h3: 'heading',
    h4: 'heading',
    h5: 'heading',
    h6: 'heading',
    header: 'banner',
    hr: 'separator',
    html: 'document',
    legend: 'legend',
    li: 'listitem',
    math: 'math',
    main: 'main',
    menu: 'list',
    nav: 'navigation',
    ol: 'list',
    optgroup: 'group',
    option: 'option',
    output: 'status',
    progress: 'progressbar',
    section: 'region',
    summary: 'button',
    table: 'table',
    tbody: 'rowgroup',
    textarea: 'textbox',
    tfoot: 'rowgroup',
    td: 'cell',
    th: 'columnheader',
    thead: 'rowgroup',
    tr: 'row',
    ul: 'list',
  },
  $O = {
    caption: new Set(['aria-label', 'aria-labelledby']),
    code: new Set(['aria-label', 'aria-labelledby']),
    deletion: new Set(['aria-label', 'aria-labelledby']),
    emphasis: new Set(['aria-label', 'aria-labelledby']),
    generic: new Set(['aria-label', 'aria-labelledby', 'aria-roledescription']),
    insertion: new Set(['aria-label', 'aria-labelledby']),
    paragraph: new Set(['aria-label', 'aria-labelledby']),
    presentation: new Set(['aria-label', 'aria-labelledby']),
    strong: new Set(['aria-label', 'aria-labelledby']),
    subscript: new Set(['aria-label', 'aria-labelledby']),
    superscript: new Set(['aria-label', 'aria-labelledby']),
  };
function NO(e, t) {
  return [
    'aria-atomic',
    'aria-busy',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-dropeffect',
    'aria-flowto',
    'aria-grabbed',
    'aria-hidden',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-live',
    'aria-owns',
    'aria-relevant',
    'aria-roledescription',
  ].some(function (r) {
    var n;
    return (
      e.hasAttribute(r) && !((n = $O[t]) !== null && n !== void 0 && n.has(r))
    );
  });
}
function Mh(e, t) {
  return NO(e, t);
}
function jO(e) {
  var t = LO(e);
  if (t === null || t === 'presentation') {
    var r = IO(e);
    if (t !== 'presentation' || Mh(e, r || '')) return r;
  }
  return t;
}
function IO(e) {
  var t = MO[xe(e)];
  if (t !== void 0) return t;
  switch (xe(e)) {
    case 'a':
    case 'area':
    case 'link':
      if (e.hasAttribute('href')) return 'link';
      break;
    case 'img':
      return e.getAttribute('alt') === '' && !Mh(e, 'img')
        ? 'presentation'
        : 'img';
    case 'input': {
      var r = e,
        n = r.type;
      switch (n) {
        case 'button':
        case 'image':
        case 'reset':
        case 'submit':
          return 'button';
        case 'checkbox':
        case 'radio':
          return n;
        case 'range':
          return 'slider';
        case 'email':
        case 'tel':
        case 'text':
        case 'url':
          return e.hasAttribute('list') ? 'combobox' : 'textbox';
        case 'search':
          return e.hasAttribute('list') ? 'combobox' : 'searchbox';
        case 'number':
          return 'spinbutton';
        default:
          return null;
      }
    }
    case 'select':
      return e.hasAttribute('multiple') || e.size > 1 ? 'listbox' : 'combobox';
  }
  return null;
}
function LO(e) {
  var t = e.getAttribute('role');
  if (t !== null) {
    var r = t.trim().split(' ')[0];
    if (r.length > 0) return r;
  }
  return null;
}
function de(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function $h(e) {
  return de(e) && xe(e) === 'caption';
}
function In(e) {
  return de(e) && xe(e) === 'input';
}
function BO(e) {
  return de(e) && xe(e) === 'optgroup';
}
function kO(e) {
  return de(e) && xe(e) === 'select';
}
function DO(e) {
  return de(e) && xe(e) === 'table';
}
function FO(e) {
  return de(e) && xe(e) === 'textarea';
}
function UO(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument,
    r = t.defaultView;
  if (r === null) throw new TypeError('no window available');
  return r;
}
function HO(e) {
  return de(e) && xe(e) === 'fieldset';
}
function zO(e) {
  return de(e) && xe(e) === 'legend';
}
function VO(e) {
  return de(e) && xe(e) === 'slot';
}
function GO(e) {
  return de(e) && e.ownerSVGElement !== void 0;
}
function WO(e) {
  return de(e) && xe(e) === 'svg';
}
function KO(e) {
  return GO(e) && xe(e) === 'title';
}
function Qn(e, t) {
  if (de(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(' '),
      n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r
      .map(function (a) {
        return n.getElementById(a);
      })
      .filter(function (a) {
        return a !== null;
      });
  }
  return [];
}
function bt(e, t) {
  return de(e) ? t.indexOf(jO(e)) !== -1 : !1;
}
function YO(e) {
  return e.trim().replace(/\s\s+/g, ' ');
}
function JO(e, t) {
  if (!de(e)) return !1;
  if (e.hasAttribute('hidden') || e.getAttribute('aria-hidden') === 'true')
    return !0;
  var r = t(e);
  return (
    r.getPropertyValue('display') === 'none' ||
    r.getPropertyValue('visibility') === 'hidden'
  );
}
function XO(e) {
  return bt(e, ['button', 'combobox', 'listbox', 'textbox']) || Nh(e, 'range');
}
function Nh(e, t) {
  if (!de(e)) return !1;
  switch (t) {
    case 'range':
      return bt(e, [
        'meter',
        'progressbar',
        'scrollbar',
        'slider',
        'spinbutton',
      ]);
    default:
      throw new TypeError(
        "No knowledge about abstract role '".concat(
          t,
          "'. This is likely a bug :(",
        ),
      );
  }
}
function mc(e, t) {
  var r = Je(e.querySelectorAll(t));
  return (
    Qn(e, 'aria-owns').forEach(function (n) {
      r.push.apply(r, Je(n.querySelectorAll(t)));
    }),
    r
  );
}
function QO(e) {
  return kO(e)
    ? e.selectedOptions || mc(e, '[selected]')
    : mc(e, '[aria-selected="true"]');
}
function ZO(e) {
  return bt(e, ['none', 'presentation']);
}
function eA(e) {
  return $h(e);
}
function tA(e) {
  return bt(e, [
    'button',
    'cell',
    'checkbox',
    'columnheader',
    'gridcell',
    'heading',
    'label',
    'legend',
    'link',
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
    'option',
    'radio',
    'row',
    'rowheader',
    'switch',
    'tab',
    'tooltip',
    'treeitem',
  ]);
}
function rA(e) {
  return !1;
}
function nA(e) {
  return In(e) || FO(e) ? e.value : e.textContent || '';
}
function bc(e) {
  var t = e.getPropertyValue('content');
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : '';
}
function jh(e) {
  var t = xe(e);
  return (
    t === 'button' ||
    (t === 'input' && e.getAttribute('type') !== 'hidden') ||
    t === 'meter' ||
    t === 'output' ||
    t === 'progress' ||
    t === 'select' ||
    t === 'textarea'
  );
}
function Ih(e) {
  if (jh(e)) return e;
  var t = null;
  return (
    e.childNodes.forEach(function (r) {
      if (t === null && de(r)) {
        var n = Ih(r);
        n !== null && (t = n);
      }
    }),
    t
  );
}
function aA(e) {
  if (e.control !== void 0) return e.control;
  var t = e.getAttribute('for');
  return t !== null ? e.ownerDocument.getElementById(t) : Ih(e);
}
function oA(e) {
  var t = e.labels;
  if (t === null) return t;
  if (t !== void 0) return Je(t);
  if (!jh(e)) return null;
  var r = e.ownerDocument;
  return Je(r.querySelectorAll('label')).filter(function (n) {
    return aA(n) === e;
  });
}
function iA(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? Je(e.childNodes) : t;
}
function Lh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = new xO(),
    n = UO(e),
    a = t.compute,
    o = a === void 0 ? 'name' : a,
    i = t.computedStyleSupportsPseudoElements,
    l = i === void 0 ? t.getComputedStyle !== void 0 : i,
    u = t.getComputedStyle,
    c = u === void 0 ? n.getComputedStyle.bind(n) : u,
    s = t.hidden,
    d = s === void 0 ? !1 : s;
  function p(b, g) {
    var R = '';
    if (de(b) && l) {
      var C = c(b, '::before'),
        _ = bc(C);
      R = ''.concat(_, ' ').concat(R);
    }
    var w = VO(b) ? iA(b) : Je(b.childNodes).concat(Qn(b, 'aria-owns'));
    if (
      (w.forEach(function (O) {
        var $ = y(O, {
            isEmbeddedInLabel: g.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0,
          }),
          N = de(O) ? c(O).getPropertyValue('display') : 'inline',
          L = N !== 'inline' ? ' ' : '';
        R += ''.concat(L).concat($).concat(L);
      }),
      de(b) && l)
    ) {
      var E = c(b, '::after'),
        v = bc(E);
      R = ''.concat(R, ' ').concat(v);
    }
    return R.trim();
  }
  function f(b, g) {
    var R = b.getAttributeNode(g);
    return R !== null && !r.has(R) && R.value.trim() !== ''
      ? (r.add(R), R.value)
      : null;
  }
  function h(b) {
    return de(b) ? f(b, 'title') : null;
  }
  function m(b) {
    if (!de(b)) return null;
    if (HO(b)) {
      r.add(b);
      for (var g = Je(b.childNodes), R = 0; R < g.length; R += 1) {
        var C = g[R];
        if (zO(C))
          return y(C, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1,
          });
      }
    } else if (DO(b)) {
      r.add(b);
      for (var _ = Je(b.childNodes), w = 0; w < _.length; w += 1) {
        var E = _[w];
        if ($h(E))
          return y(E, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1,
          });
      }
    } else if (WO(b)) {
      r.add(b);
      for (var v = Je(b.childNodes), O = 0; O < v.length; O += 1) {
        var $ = v[O];
        if (KO($)) return $.textContent;
      }
      return null;
    } else if (xe(b) === 'img' || xe(b) === 'area') {
      var N = f(b, 'alt');
      if (N !== null) return N;
    } else if (BO(b)) {
      var L = f(b, 'label');
      if (L !== null) return L;
    }
    if (
      In(b) &&
      (b.type === 'button' || b.type === 'submit' || b.type === 'reset')
    ) {
      var j = f(b, 'value');
      if (j !== null) return j;
      if (b.type === 'submit') return 'Submit';
      if (b.type === 'reset') return 'Reset';
    }
    var I = oA(b);
    if (I !== null && I.length !== 0)
      return (
        r.add(b),
        Je(I)
          .map(function (W) {
            return y(W, {
              isEmbeddedInLabel: !0,
              isReferenced: !1,
              recursion: !0,
            });
          })
          .filter(function (W) {
            return W.length > 0;
          })
          .join(' ')
      );
    if (In(b) && b.type === 'image') {
      var H = f(b, 'alt');
      if (H !== null) return H;
      var V = f(b, 'title');
      return V !== null ? V : 'Submit Query';
    }
    if (bt(b, ['button'])) {
      var J = p(b, { isEmbeddedInLabel: !1, isReferenced: !1 });
      if (J !== '') return J;
    }
    return null;
  }
  function y(b, g) {
    if (r.has(b)) return '';
    if (!d && JO(b, c) && !g.isReferenced) return r.add(b), '';
    var R = de(b) ? b.getAttributeNode('aria-labelledby') : null,
      C = R !== null && !r.has(R) ? Qn(b, 'aria-labelledby') : [];
    if (o === 'name' && !g.isReferenced && C.length > 0)
      return (
        r.add(R),
        C.map(function (N) {
          return y(N, {
            isEmbeddedInLabel: g.isEmbeddedInLabel,
            isReferenced: !0,
            recursion: !1,
          });
        }).join(' ')
      );
    var _ = g.recursion && XO(b) && o === 'name';
    if (!_) {
      var w = ((de(b) && b.getAttribute('aria-label')) || '').trim();
      if (w !== '' && o === 'name') return r.add(b), w;
      if (!ZO(b)) {
        var E = m(b);
        if (E !== null) return r.add(b), E;
      }
    }
    if (bt(b, ['menu'])) return r.add(b), '';
    if (_ || g.isEmbeddedInLabel || g.isReferenced) {
      if (bt(b, ['combobox', 'listbox'])) {
        r.add(b);
        var v = QO(b);
        return v.length === 0
          ? In(b)
            ? b.value
            : ''
          : Je(v)
              .map(function (N) {
                return y(N, {
                  isEmbeddedInLabel: g.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0,
                });
              })
              .join(' ');
      }
      if (Nh(b, 'range'))
        return (
          r.add(b),
          b.hasAttribute('aria-valuetext')
            ? b.getAttribute('aria-valuetext')
            : b.hasAttribute('aria-valuenow')
              ? b.getAttribute('aria-valuenow')
              : b.getAttribute('value') || ''
        );
      if (bt(b, ['textbox'])) return r.add(b), nA(b);
    }
    if (tA(b) || (de(b) && g.isReferenced) || eA(b) || rA()) {
      var O = p(b, {
        isEmbeddedInLabel: g.isEmbeddedInLabel,
        isReferenced: !1,
      });
      if (O !== '') return r.add(b), O;
    }
    if (b.nodeType === b.TEXT_NODE) return r.add(b), b.textContent || '';
    if (g.recursion)
      return (
        r.add(b),
        p(b, { isEmbeddedInLabel: g.isEmbeddedInLabel, isReferenced: !1 })
      );
    var $ = h(b);
    return $ !== null ? (r.add(b), $) : (r.add(b), '');
  }
  return YO(
    y(e, {
      isEmbeddedInLabel: !1,
      isReferenced: o === 'description',
      recursion: !1,
    }),
  );
}
function ln(e) {
  '@babel/helpers - typeof';
  return (
    (ln =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    ln(e)
  );
}
function gc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function yc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gc(Object(r), !0).forEach(function (n) {
          lA(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function lA(e, t, r) {
  return (
    (t = sA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function sA(e) {
  var t = uA(e, 'string');
  return ln(t) === 'symbol' ? t : String(t);
}
function uA(e, t) {
  if (ln(e) !== 'object' || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || 'default');
    if (ln(n) !== 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Bh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = Qn(e, 'aria-describedby')
      .map(function (a) {
        return Lh(a, yc(yc({}, t), {}, { compute: 'description' }));
      })
      .join(' ');
  if (r === '') {
    var n = e.getAttribute('title');
    r = n === null ? '' : n;
  }
  return r;
}
function cA(e) {
  return bt(e, [
    'caption',
    'code',
    'deletion',
    'emphasis',
    'generic',
    'insertion',
    'paragraph',
    'presentation',
    'strong',
    'subscript',
    'superscript',
  ]);
}
function kl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return cA(e) ? '' : Lh(e, t);
}
var He = Fe(ji()),
  dA = Fe(L1());
function kh(e) {
  return e.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
var fA = (e, t, r, n, a, o, i) => {
    let l = n + r.indent,
      u = r.colors;
    return e
      .map((c) => {
        let s = t[c],
          d = i(s, r, l, a, o);
        return (
          typeof s != 'string' &&
            (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + l + d + r.spacingOuter + n),
            (d = '{' + d + '}')),
          r.spacingInner +
            n +
            u.prop.open +
            c +
            u.prop.close +
            '=' +
            u.value.open +
            d +
            u.value.close
        );
      })
      .join('');
  },
  pA = 3,
  hA = (e, t, r, n, a, o) =>
    e
      .map((i) => {
        let l = typeof i == 'string' ? Dh(i, t) : o(i, t, r, n, a);
        return l === '' &&
          typeof i == 'object' &&
          i !== null &&
          i.nodeType !== pA
          ? ''
          : t.spacingOuter + r + l;
      })
      .join(''),
  Dh = (e, t) => {
    let r = t.colors.content;
    return r.open + kh(e) + r.close;
  },
  mA = (e, t) => {
    let r = t.colors.comment;
    return r.open + '<!--' + kh(e) + '-->' + r.close;
  },
  bA = (e, t, r, n, a) => {
    let o = n.colors.tag;
    return (
      o.open +
      '<' +
      e +
      (t && o.close + t + n.spacingOuter + a + o.open) +
      (r
        ? '>' + o.close + r + n.spacingOuter + a + o.open + '</' + e
        : (t && !n.min ? '' : ' ') + '/') +
      '>' +
      o.close
    );
  },
  gA = (e, t) => {
    let r = t.colors.tag;
    return r.open + '<' + e + r.close + ' …' + r.open + ' />' + r.close;
  },
  yA = 1,
  Fh = 3,
  Uh = 8,
  Hh = 11,
  vA = /^((HTML|SVG)\w*)?Element$/,
  zh = (e) => {
    let { tagName: t } = e;
    return !!(
      (typeof t == 'string' && t.includes('-')) ||
      (typeof e.hasAttribute == 'function' && e.hasAttribute('is'))
    );
  },
  _A = (e) => {
    let t = e.constructor.name,
      { nodeType: r } = e;
    return (
      (r === yA && (vA.test(t) || zh(e))) ||
      (r === Fh && t === 'Text') ||
      (r === Uh && t === 'Comment') ||
      (r === Hh && t === 'DocumentFragment')
    );
  };
function EA(e) {
  return e.nodeType === Fh;
}
function wA(e) {
  return e.nodeType === Uh;
}
function so(e) {
  return e.nodeType === Hh;
}
function CA(e) {
  return {
    test: (t) => {
      var r;
      return (
        ((t == null || (r = t.constructor) == null ? void 0 : r.name) ||
          zh(t)) &&
        _A(t)
      );
    },
    serialize: (t, r, n, a, o, i) => {
      if (EA(t)) return Dh(t.data, r);
      if (wA(t)) return mA(t.data, r);
      let l = so(t) ? 'DocumentFragment' : t.tagName.toLowerCase();
      return ++a > r.maxDepth
        ? gA(l, r)
        : bA(
            l,
            fA(
              so(t)
                ? []
                : Array.from(t.attributes)
                    .map((u) => u.name)
                    .sort(),
              so(t)
                ? {}
                : Array.from(t.attributes).reduce(
                    (u, c) => ((u[c.name] = c.value), u),
                    {},
                  ),
              r,
              n + r.indent,
              a,
              o,
              i,
            ),
            hA(
              Array.prototype.slice.call(t.childNodes || t.children).filter(e),
              r,
              n + r.indent,
              a,
              o,
              i,
            ),
            r,
            n,
          );
    },
  };
}
var Vh = null,
  Dl = null,
  Fl = null;
try {
  let e = module && module.require;
  (Dl = e.call(module, 'fs').readFileSync),
    (Fl = e.call(module, '@babel/code-frame').codeFrameColumns),
    (Vh = e.call(module, 'chalk'));
} catch {}
function RA(e) {
  let t = e.indexOf('(') + 1,
    r = e.indexOf(')'),
    n = e.slice(t, r),
    a = n.split(':'),
    [o, i, l] = [a[0], parseInt(a[1], 10), parseInt(a[2], 10)],
    u = '';
  try {
    u = Dl(o, 'utf-8');
  } catch {
    return '';
  }
  let c = Fl(
    u,
    { start: { line: i, column: l } },
    { highlightCode: !0, linesBelow: 0 },
  );
  return (
    Vh.dim(n) +
    `
` +
    c +
    `
`
  );
}
function TA() {
  if (!Dl || !Fl) return '';
  let e = new Error().stack
    .split(
      `
`,
    )
    .slice(1)
    .find((t) => !t.includes('node_modules/'));
  return RA(e);
}
var Gh = 3;
function uo() {
  return typeof jest < 'u' && jest !== null
    ? setTimeout._isMockFunction === !0 ||
        Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
    : !1;
}
function Ul() {
  if (typeof window > 'u') throw new Error('Could not find default container');
  return window.document;
}
function Wh(e) {
  if (e.defaultView) return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window) return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null
    ? new Error(
        'It looks like the window object is not available for the provided node.',
      )
    : e.then instanceof Function
      ? new Error(
          'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?',
        )
      : Array.isArray(e)
        ? new Error(
            'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?',
          )
        : typeof e.debug == 'function' &&
            typeof e.logTestingPlaygroundURL == 'function'
          ? new Error(
              'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?',
            )
          : new Error(
              'The given node is not an Element, the node type is: ' +
                typeof e +
                '.',
            );
}
function wt(e) {
  if (
    !e ||
    typeof e.querySelector != 'function' ||
    typeof e.querySelectorAll != 'function'
  )
    throw new TypeError(
      'Expected container to be an Element, a Document or a DocumentFragment but got ' +
        t(e) +
        '.',
    );
  function t(r) {
    return typeof r == 'object'
      ? r === null
        ? 'null'
        : r.constructor.name
      : typeof r;
  }
}
var SA = () => {
    if (typeof process > 'u') return !1;
    let e;
    try {
      var t;
      let r = (t = Co) == null ? void 0 : t.COLORS;
      r && (e = JSON.parse(r));
    } catch {}
    return typeof e == 'boolean'
      ? e
      : process.versions !== void 0 && process.versions.node !== void 0;
  },
  { DOMCollection: PA } = Bl.plugins,
  OA = 1,
  AA = 8;
function qA(e) {
  return (
    e.nodeType !== AA && (e.nodeType !== OA || !e.matches(Q().defaultIgnore))
  );
}
function sn(e, t, r) {
  if (
    (r === void 0 && (r = {}),
    e || (e = Ul().body),
    typeof t != 'number' &&
      (t =
        (typeof process < 'u' && typeof Co < 'u' && Co.DEBUG_PRINT_LIMIT) ||
        7e3),
    t === 0)
  )
    return '';
  e.documentElement && (e = e.documentElement);
  let n = typeof e;
  if (
    (n === 'object' ? (n = e.constructor.name) : (e = {}), !('outerHTML' in e))
  )
    throw new TypeError('Expected an element or document but got ' + n);
  let { filterNode: a = qA, ...o } = r,
    i = Bl.format(e, {
      plugins: [CA(a), PA],
      printFunctionName: !1,
      highlight: SA(),
      ...o,
    });
  return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + '...' : i;
}
var ai = function () {
    let e = TA();
    console.log(
      e
        ? sn(...arguments) +
            `

` +
            e
        : sn(...arguments),
    );
  },
  Vt = {
    testIdAttribute: 'data-testid',
    asyncUtilTimeout: 1e3,
    asyncWrapper: (e) => e(),
    unstable_advanceTimersWrapper: (e) => e(),
    eventWrapper: (e) => e(),
    defaultHidden: !1,
    defaultIgnore: 'script, style',
    showOriginalStackTrace: !1,
    throwSuggestions: !1,
    getElementError(e, t) {
      let r = sn(t),
        n = new Error(
          [
            e,
            'Ignored nodes: comments, ' +
              Vt.defaultIgnore +
              `
` +
              r,
          ].filter(Boolean).join(`

`),
        );
      return (n.name = 'TestingLibraryElementError'), n;
    },
    _disableExpensiveErrorDiagnostics: !1,
    computedStyleSupportsPseudoElements: !1,
  };
function xA(e) {
  try {
    return (Vt._disableExpensiveErrorDiagnostics = !0), e();
  } finally {
    Vt._disableExpensiveErrorDiagnostics = !1;
  }
}
function MA(e) {
  typeof e == 'function' && (e = e(Vt)), (Vt = { ...Vt, ...e });
}
function Q() {
  return Vt;
}
var $A = [
  'button',
  'meter',
  'output',
  'progress',
  'select',
  'textarea',
  'input',
];
function Kh(e) {
  return $A.includes(e.nodeName.toLowerCase())
    ? ''
    : e.nodeType === Gh
      ? e.textContent
      : Array.from(e.childNodes)
          .map((t) => Kh(t))
          .join('');
}
function oi(e) {
  let t;
  return (
    e.tagName.toLowerCase() === 'label'
      ? (t = Kh(e))
      : (t = e.value || e.textContent),
    t
  );
}
function Yh(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!NA(e)) return [];
  let r = e.ownerDocument.querySelectorAll('label');
  return Array.from(r).filter((n) => n.control === e);
}
function NA(e) {
  return (
    /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) ||
    (e.tagName === 'INPUT' && e.getAttribute('type') !== 'hidden')
  );
}
function Jh(e, t, r) {
  let { selector: n = '*' } = r === void 0 ? {} : r,
    a = t.getAttribute('aria-labelledby'),
    o = a ? a.split(' ') : [];
  return o.length
    ? o.map((i) => {
        let l = e.querySelector('[id="' + i + '"]');
        return l
          ? { content: oi(l), formControl: null }
          : { content: '', formControl: null };
      })
    : Array.from(Yh(t)).map((i) => {
        let l = oi(i),
          u = Array.from(
            i.querySelectorAll(
              'button, input, meter, output, progress, select, textarea',
            ),
          ).filter((c) => c.matches(n))[0];
        return { content: l, formControl: u };
      });
}
function Xh(e) {
  if (e == null)
    throw new Error(
      'It looks like ' +
        e +
        ' was passed instead of a matcher. Did you do something like getByText(' +
        e +
        ')?',
    );
}
function xr(e, t, r, n) {
  if (typeof e != 'string') return !1;
  Xh(r);
  let a = n(e);
  return typeof r == 'string' || typeof r == 'number'
    ? a.toLowerCase().includes(r.toString().toLowerCase())
    : typeof r == 'function'
      ? r(a, t)
      : Qh(r, a);
}
function yt(e, t, r, n) {
  if (typeof e != 'string') return !1;
  Xh(r);
  let a = n(e);
  return r instanceof Function
    ? r(a, t)
    : r instanceof RegExp
      ? Qh(r, a)
      : a === String(r);
}
function Hl(e) {
  let { trim: t = !0, collapseWhitespace: r = !0 } = e === void 0 ? {} : e;
  return (n) => {
    let a = n;
    return (a = t ? a.trim() : a), (a = r ? a.replace(/\s+/g, ' ') : a), a;
  };
}
function Qt(e) {
  let { trim: t, collapseWhitespace: r, normalizer: n } = e;
  if (!n) return Hl({ trim: t, collapseWhitespace: r });
  if (typeof t < 'u' || typeof r < 'u')
    throw new Error(
      'trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer',
    );
  return n;
}
function Qh(e, t) {
  let r = e.test(t);
  return (
    e.global &&
      e.lastIndex !== 0 &&
      (console.warn(
        'To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp.',
      ),
      (e.lastIndex = 0)),
    r
  );
}
function En(e) {
  return e.matches('input[type=submit], input[type=button], input[type=reset]')
    ? e.value
    : Array.from(e.childNodes)
        .filter((t) => t.nodeType === Gh && !!t.textContent)
        .map((t) => t.textContent)
        .join('');
}
var jA = IA(He.elementRoles);
function Zh(e) {
  return (
    e.hidden === !0 ||
    e.getAttribute('aria-hidden') === 'true' ||
    e.ownerDocument.defaultView.getComputedStyle(e).display === 'none'
  );
}
function Na(e, t) {
  t === void 0 && (t = {});
  let { isSubtreeInaccessible: r = Zh } = t;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === 'hidden')
    return !0;
  let n = e;
  for (; n; ) {
    if (r(n)) return !0;
    n = n.parentElement;
  }
  return !1;
}
function zl(e) {
  for (let { match: t, roles: r } of jA) if (t(e)) return [...r];
  return [];
}
function IA(e) {
  function t(i) {
    let { name: l, attributes: u } = i;
    return (
      '' +
      l +
      u
        .map((c) => {
          let { name: s, value: d, constraints: p = [] } = c,
            f = p.indexOf('undefined') !== -1,
            h = p.indexOf('set') !== -1;
          return typeof d < 'u'
            ? '[' + s + '="' + d + '"]'
            : f
              ? ':not([' + s + '])'
              : h
                ? '[' + s + ']:not([' + s + '=""])'
                : '[' + s + ']';
        })
        .join('')
    );
  }
  function r(i) {
    let { attributes: l = [] } = i;
    return l.length;
  }
  function n(i, l) {
    let { specificity: u } = i,
      { specificity: c } = l;
    return c - u;
  }
  function a(i) {
    let { attributes: l = [] } = i,
      u = l.findIndex(
        (s) => s.value && s.name === 'type' && s.value === 'text',
      );
    u >= 0 && (l = [...l.slice(0, u), ...l.slice(u + 1)]);
    let c = t({ ...i, attributes: l });
    return (s) => (u >= 0 && s.type !== 'text' ? !1 : s.matches(c));
  }
  let o = [];
  for (let [i, l] of e.entries())
    o = [...o, { match: a(i), roles: Array.from(l), specificity: r(i) }];
  return o.sort(n);
}
function em(e, t) {
  let { hidden: r = !1 } = t === void 0 ? {} : t;
  function n(a) {
    return [a, ...Array.from(a.children).reduce((o, i) => [...o, ...n(i)], [])];
  }
  return n(e)
    .filter((a) => (r === !1 ? Na(a) === !1 : !0))
    .reduce((a, o) => {
      let i = [];
      return (
        o.hasAttribute('role')
          ? (i = o.getAttribute('role').split(' ').slice(0, 1))
          : (i = zl(o)),
        i.reduce(
          (l, u) =>
            Array.isArray(l[u])
              ? { ...l, [u]: [...l[u], o] }
              : { ...l, [u]: [o] },
          a,
        )
      );
    }, {});
}
function tm(e, t) {
  let { hidden: r, includeDescription: n } = t,
    a = em(e, { hidden: r });
  return Object.entries(a)
    .filter((o) => {
      let [i] = o;
      return i !== 'generic';
    })
    .map((o) => {
      let [i, l] = o,
        u = '-'.repeat(50),
        c = l.map((s) => {
          let d =
              'Name "' +
              kl(s, {
                computedStyleSupportsPseudoElements:
                  Q().computedStyleSupportsPseudoElements,
              }) +
              `":
`,
            p = sn(s.cloneNode(!1));
          if (n) {
            let f =
              'Description "' +
              Bh(s, {
                computedStyleSupportsPseudoElements:
                  Q().computedStyleSupportsPseudoElements,
              }) +
              `":
`;
            return '' + d + f + p;
          }
          return '' + d + p;
        }).join(`

`);
      return (
        i +
        `:

` +
        c +
        `

` +
        u
      );
    }).join(`
`);
}
var LA = function (e, t) {
  let { hidden: r = !1 } = t === void 0 ? {} : t;
  return console.log(tm(e, { hidden: r }));
};
function BA(e) {
  return e.tagName === 'OPTION' ? e.selected : wn(e, 'aria-selected');
}
function kA(e) {
  return e.getAttribute('aria-busy') === 'true';
}
function DA(e) {
  if (!('indeterminate' in e && e.indeterminate))
    return 'checked' in e ? e.checked : wn(e, 'aria-checked');
}
function FA(e) {
  return wn(e, 'aria-pressed');
}
function UA(e) {
  var t, r;
  return (t =
    (r = wn(e, 'aria-current')) != null ? r : e.getAttribute('aria-current')) !=
    null
    ? t
    : !1;
}
function HA(e) {
  return wn(e, 'aria-expanded');
}
function wn(e, t) {
  let r = e.getAttribute(t);
  if (r === 'true') return !0;
  if (r === 'false') return !1;
}
function zA(e) {
  let t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 };
  return (
    (e.getAttribute('aria-level') && Number(e.getAttribute('aria-level'))) ||
    t[e.tagName]
  );
}
function VA(e) {
  let t = e.getAttribute('aria-valuenow');
  return t === null ? void 0 : +t;
}
function GA(e) {
  let t = e.getAttribute('aria-valuemax');
  return t === null ? void 0 : +t;
}
function WA(e) {
  let t = e.getAttribute('aria-valuemin');
  return t === null ? void 0 : +t;
}
function KA(e) {
  let t = e.getAttribute('aria-valuetext');
  return t === null ? void 0 : t;
}
var vc = Hl();
function YA(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}
function _c(e) {
  return new RegExp(YA(e.toLowerCase()), 'i');
}
function Rt(e, t, r, n) {
  let { variant: a, name: o } = n,
    i = '',
    l = {},
    u = [['Role', 'TestId'].includes(e) ? r : _c(r)];
  o && (l.name = _c(o)),
    e === 'Role' &&
      Na(t) &&
      ((l.hidden = !0),
      (i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `)),
    Object.keys(l).length > 0 && u.push(l);
  let c = a + 'By' + e;
  return {
    queryName: e,
    queryMethod: c,
    queryArgs: u,
    variant: a,
    warning: i,
    toString() {
      i && console.warn(i);
      let [s, d] = u;
      return (
        (s = typeof s == 'string' ? "'" + s + "'" : s),
        (d = d
          ? ', { ' +
            Object.entries(d)
              .map((p) => {
                let [f, h] = p;
                return f + ': ' + h;
              })
              .join(', ') +
            ' }'
          : ''),
        c + '(' + s + d + ')'
      );
    },
  };
}
function Tt(e, t, r) {
  return r && (!t || t.toLowerCase() === e.toLowerCase());
}
function Zn(e, t, r) {
  var n, a;
  if ((t === void 0 && (t = 'get'), e.matches(Q().defaultIgnore))) return;
  let o =
    (n = e.getAttribute('role')) != null
      ? n
      : (a = zl(e)) == null
        ? void 0
        : a[0];
  if (o !== 'generic' && Tt('Role', r, o))
    return Rt('Role', e, o, {
      variant: t,
      name: kl(e, {
        computedStyleSupportsPseudoElements:
          Q().computedStyleSupportsPseudoElements,
      }),
    });
  let i = Jh(document, e)
    .map((p) => p.content)
    .join(' ');
  if (Tt('LabelText', r, i)) return Rt('LabelText', e, i, { variant: t });
  let l = e.getAttribute('placeholder');
  if (Tt('PlaceholderText', r, l))
    return Rt('PlaceholderText', e, l, { variant: t });
  let u = vc(En(e));
  if (Tt('Text', r, u)) return Rt('Text', e, u, { variant: t });
  if (Tt('DisplayValue', r, e.value))
    return Rt('DisplayValue', e, vc(e.value), { variant: t });
  let c = e.getAttribute('alt');
  if (Tt('AltText', r, c)) return Rt('AltText', e, c, { variant: t });
  let s = e.getAttribute('title');
  if (Tt('Title', r, s)) return Rt('Title', e, s, { variant: t });
  let d = e.getAttribute(Q().testIdAttribute);
  if (Tt('TestId', r, d)) return Rt('TestId', e, d, { variant: t });
}
function Tn(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function JA(e, t) {
  let {
    container: r = Ul(),
    timeout: n = Q().asyncUtilTimeout,
    showOriginalStackTrace: a = Q().showOriginalStackTrace,
    stackTraceError: o,
    interval: i = 50,
    onTimeout: l = (c) => (
      Object.defineProperty(c, 'message', {
        value: Q().getElementError(c.message, r).message,
      }),
      c
    ),
    mutationObserverOptions: u = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0,
    },
  } = t;
  if (typeof e != 'function')
    throw new TypeError('Received `callback` arg must be a function');
  return new Promise(async (c, s) => {
    let d,
      p,
      f,
      h = !1,
      m = 'idle',
      y = setTimeout(_, n),
      b = uo();
    if (b) {
      let { unstable_advanceTimersWrapper: w } = Q();
      for (C(); !h; ) {
        if (!uo()) {
          let E = new Error(
            "Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830",
          );
          a || Tn(E, o), s(E);
          return;
        }
        if (
          (await w(async () => {
            jest.advanceTimersByTime(i);
          }),
          h)
        )
          break;
        C();
      }
    } else {
      try {
        wt(r);
      } catch (E) {
        s(E);
        return;
      }
      p = setInterval(R, i);
      let { MutationObserver: w } = Wh(r);
      (f = new w(R)), f.observe(r, u), C();
    }
    function g(w, E) {
      (h = !0),
        clearTimeout(y),
        b || (clearInterval(p), f.disconnect()),
        w ? s(w) : c(E);
    }
    function R() {
      if (uo()) {
        let w = new Error(
          "Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830",
        );
        return a || Tn(w, o), s(w);
      } else return C();
    }
    function C() {
      if (m !== 'pending')
        try {
          let w = xA(e);
          typeof (w == null ? void 0 : w.then) == 'function'
            ? ((m = 'pending'),
              w.then(
                (E) => {
                  (m = 'resolved'), g(null, E);
                },
                (E) => {
                  (m = 'rejected'), (d = E);
                },
              ))
            : g(null, w);
        } catch (w) {
          d = w;
        }
    }
    function _() {
      let w;
      d
        ? ((w = d), !a && w.name === 'TestingLibraryElementError' && Tn(w, o))
        : ((w = new Error('Timed out in waitFor.')), a || Tn(w, o)),
        g(l(w), null);
    }
  });
}
function Vl(e, t) {
  let r = new Error('STACK_TRACE_MESSAGE');
  return Q().asyncWrapper(() => JA(e, { stackTraceError: r, ...t }));
}
function ja(e, t) {
  return Q().getElementError(e, t);
}
function Ia(e, t) {
  return ja(
    e +
      '\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).',
    t,
  );
}
function Zt(e, t, r, n) {
  let {
      exact: a = !0,
      collapseWhitespace: o,
      trim: i,
      normalizer: l,
    } = n === void 0 ? {} : n,
    u = a ? yt : xr,
    c = Qt({ collapseWhitespace: o, trim: i, normalizer: l });
  return Array.from(t.querySelectorAll('[' + e + ']')).filter((s) =>
    u(s.getAttribute(e), s, r, c),
  );
}
function rm(e, t, r, n) {
  let a = Zt(e, t, r, n);
  if (a.length > 1)
    throw Ia('Found multiple elements by [' + e + '=' + r + ']', t);
  return a[0] || null;
}
function Er(e, t) {
  return function (r) {
    for (
      var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      a[o - 1] = arguments[o];
    let i = e(r, ...a);
    if (i.length > 1) {
      let l = i.map((u) => ja(null, u).message).join(`

`);
      throw Ia(
        t(r, ...a) +
          `

Here are the matching elements:

` +
          l,
        r,
      );
    }
    return i[0] || null;
  };
}
function nm(e, t) {
  return Q().getElementError(
    `A better query is available, try this:
` +
      e.toString() +
      `
`,
    t,
  );
}
function Gl(e, t) {
  return function (r) {
    for (
      var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      a[o - 1] = arguments[o];
    let i = e(r, ...a);
    if (!i.length) throw Q().getElementError(t(r, ...a), r);
    return i;
  };
}
function wr(e) {
  return (t, r, n, a) => Vl(() => e(t, r, n), { container: t, ...a });
}
var Nt = (e, t, r) =>
    function (n) {
      for (
        var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), i = 1;
        i < a;
        i++
      )
        o[i - 1] = arguments[i];
      let l = e(n, ...o),
        [{ suggest: u = Q().throwSuggestions } = {}] = o.slice(-1);
      if (l && u) {
        let c = Zn(l, r);
        if (c && !t.endsWith(c.queryName)) throw nm(c.toString(), n);
      }
      return l;
    },
  Ie = (e, t, r) =>
    function (n) {
      for (
        var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), i = 1;
        i < a;
        i++
      )
        o[i - 1] = arguments[i];
      let l = e(n, ...o),
        [{ suggest: u = Q().throwSuggestions } = {}] = o.slice(-1);
      if (l.length && u) {
        let c = [
          ...new Set(
            l.map((s) => {
              var d;
              return (d = Zn(s, r)) == null ? void 0 : d.toString();
            }),
          ),
        ];
        if (c.length === 1 && !t.endsWith(Zn(l[0], r).queryName))
          throw nm(c[0], n);
      }
      return l;
    };
function Ct(e, t, r) {
  let n = Nt(Er(e, t), e.name, 'query'),
    a = Gl(e, r),
    o = Er(a, t),
    i = Nt(o, e.name, 'get'),
    l = Ie(a, e.name.replace('query', 'get'), 'getAll'),
    u = wr(Ie(a, e.name, 'findAll')),
    c = wr(Nt(o, e.name, 'find'));
  return [n, l, i, u, c];
}
var XA = Object.freeze({
  __proto__: null,
  getElementError: ja,
  wrapAllByQueryWithSuggestion: Ie,
  wrapSingleQueryWithSuggestion: Nt,
  getMultipleElementsFoundError: Ia,
  queryAllByAttribute: Zt,
  queryByAttribute: rm,
  makeSingleQuery: Er,
  makeGetAllQuery: Gl,
  makeFindQuery: wr,
  buildQueries: Ct,
});
function QA(e) {
  return Array.from(e.querySelectorAll('label,input'))
    .map((t) => ({ node: t, textToMatch: oi(t) }))
    .filter((t) => {
      let { textToMatch: r } = t;
      return r !== null;
    });
}
var ZA = function (e, t, r) {
    let {
        exact: n = !0,
        trim: a,
        collapseWhitespace: o,
        normalizer: i,
      } = r === void 0 ? {} : r,
      l = n ? yt : xr,
      u = Qt({ collapseWhitespace: o, trim: a, normalizer: i });
    return QA(e)
      .filter((c) => {
        let { node: s, textToMatch: d } = c;
        return l(d, s, t, u);
      })
      .map((c) => {
        let { node: s } = c;
        return s;
      });
  },
  un = function (e, t, r) {
    let {
      selector: n = '*',
      exact: a = !0,
      collapseWhitespace: o,
      trim: i,
      normalizer: l,
    } = r === void 0 ? {} : r;
    wt(e);
    let u = a ? yt : xr,
      c = Qt({ collapseWhitespace: o, trim: i, normalizer: l }),
      s = Array.from(e.querySelectorAll('*'))
        .filter((d) => Yh(d).length || d.hasAttribute('aria-labelledby'))
        .reduce((d, p) => {
          let f = Jh(e, p, { selector: n });
          f.filter((m) => !!m.formControl).forEach((m) => {
            u(m.content, m.formControl, t, c) &&
              m.formControl &&
              d.push(m.formControl);
          });
          let h = f.filter((m) => !!m.content).map((m) => m.content);
          return (
            u(h.join(' '), p, t, c) && d.push(p),
            h.length > 1 &&
              h.forEach((m, y) => {
                u(m, p, t, c) && d.push(p);
                let b = [...h];
                b.splice(y, 1),
                  b.length > 1 && u(b.join(' '), p, t, c) && d.push(p);
              }),
            d
          );
        }, [])
        .concat(Zt('aria-label', e, t, { exact: a, normalizer: c }));
    return Array.from(new Set(s)).filter((d) => d.matches(n));
  },
  Wt = function (e, t) {
    for (
      var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2;
      a < r;
      a++
    )
      n[a - 2] = arguments[a];
    let o = un(e, t, ...n);
    if (!o.length) {
      let i = ZA(e, t, ...n);
      if (i.length) {
        let l = i.map((u) => eq(e, u)).filter((u) => !!u);
        throw l.length
          ? Q().getElementError(
              l.map(
                (u) =>
                  'Found a label with the text of: ' +
                  t +
                  ', however the element associated with this label (<' +
                  u +
                  ' />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <' +
                  u +
                  ' />, you can use aria-label or aria-labelledby instead.',
              ).join(`

`),
              e,
            )
          : Q().getElementError(
              'Found a label with the text of: ' +
                t +
                `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`,
              e,
            );
      } else
        throw Q().getElementError(
          'Unable to find a label with the text of: ' + t,
          e,
        );
    }
    return o;
  };
function eq(e, t) {
  let r = t.getAttribute('for');
  if (!r) return null;
  let n = e.querySelector('[id="' + r + '"]');
  return n ? n.tagName.toLowerCase() : null;
}
var am = (e, t) => 'Found multiple elements with the text of: ' + t,
  om = Nt(Er(un, am), un.name, 'query'),
  im = Er(Wt, am),
  lm = wr(Ie(Wt, Wt.name, 'findAll')),
  sm = wr(Nt(im, Wt.name, 'find')),
  um = Ie(Wt, Wt.name, 'getAll'),
  cm = Nt(im, Wt.name, 'get'),
  dm = Ie(un, un.name, 'queryAll'),
  ii = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return wt(t[0]), Zt('placeholder', ...t);
  },
  tq = (e, t) => 'Found multiple elements with the placeholder text of: ' + t,
  rq = (e, t) => 'Unable to find an element with the placeholder text of: ' + t,
  fm = Ie(ii, ii.name, 'queryAll'),
  [pm, hm, mm, bm, gm] = Ct(ii, tq, rq),
  li = function (e, t, r) {
    let {
      selector: n = '*',
      exact: a = !0,
      collapseWhitespace: o,
      trim: i,
      ignore: l = Q().defaultIgnore,
      normalizer: u,
    } = r === void 0 ? {} : r;
    wt(e);
    let c = a ? yt : xr,
      s = Qt({ collapseWhitespace: o, trim: i, normalizer: u }),
      d = [];
    return (
      typeof e.matches == 'function' && e.matches(n) && (d = [e]),
      [...d, ...Array.from(e.querySelectorAll(n))]
        .filter((p) => !l || !p.matches(l))
        .filter((p) => c(En(p), p, t, s))
    );
  },
  nq = (e, t) => 'Found multiple elements with the text: ' + t,
  aq = function (e, t, r) {
    r === void 0 && (r = {});
    let { collapseWhitespace: n, trim: a, normalizer: o, selector: i } = r,
      l = Qt({ collapseWhitespace: n, trim: a, normalizer: o })(t.toString()),
      u = l !== t.toString(),
      c = (i ?? '*') !== '*';
    return (
      'Unable to find an element with the text: ' +
      (u ? l + " (normalized from '" + t + "')" : t) +
      (c ? ", which matches selector '" + i + "'" : '') +
      '. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.'
    );
  },
  ym = Ie(li, li.name, 'queryAll'),
  [vm, _m, Em, wm, Cm] = Ct(li, nq, aq),
  si = function (e, t, r) {
    let {
      exact: n = !0,
      collapseWhitespace: a,
      trim: o,
      normalizer: i,
    } = r === void 0 ? {} : r;
    wt(e);
    let l = n ? yt : xr,
      u = Qt({ collapseWhitespace: a, trim: o, normalizer: i });
    return Array.from(e.querySelectorAll('input,textarea,select')).filter(
      (c) =>
        c.tagName === 'SELECT'
          ? Array.from(c.options)
              .filter((s) => s.selected)
              .some((s) => l(En(s), s, t, u))
          : l(c.value, c, t, u),
    );
  },
  oq = (e, t) => 'Found multiple elements with the display value: ' + t + '.',
  iq = (e, t) => 'Unable to find an element with the display value: ' + t + '.',
  Rm = Ie(si, si.name, 'queryAll'),
  [Tm, Sm, Pm, Om, Am] = Ct(si, oq, iq),
  lq = /^(img|input|area|.+-.+)$/i,
  ui = function (e, t, r) {
    return (
      r === void 0 && (r = {}),
      wt(e),
      Zt('alt', e, t, r).filter((n) => lq.test(n.tagName))
    );
  },
  sq = (e, t) => 'Found multiple elements with the alt text: ' + t,
  uq = (e, t) => 'Unable to find an element with the alt text: ' + t,
  qm = Ie(ui, ui.name, 'queryAll'),
  [xm, Mm, $m, Nm, jm] = Ct(ui, sq, uq),
  cq = (e) => {
    var t;
    return (
      e.tagName.toLowerCase() === 'title' &&
      ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) ===
        'svg'
    );
  },
  ci = function (e, t, r) {
    let {
      exact: n = !0,
      collapseWhitespace: a,
      trim: o,
      normalizer: i,
    } = r === void 0 ? {} : r;
    wt(e);
    let l = n ? yt : xr,
      u = Qt({ collapseWhitespace: a, trim: o, normalizer: i });
    return Array.from(e.querySelectorAll('[title], svg > title')).filter(
      (c) =>
        l(c.getAttribute('title'), c, t, u) || (cq(c) && l(En(c), c, t, u)),
    );
  },
  dq = (e, t) => 'Found multiple elements with the title: ' + t + '.',
  fq = (e, t) => 'Unable to find an element with the title: ' + t + '.',
  Im = Ie(ci, ci.name, 'queryAll'),
  [Lm, Bm, km, Dm, Fm] = Ct(ci, dq, fq),
  di = function (e, t, r) {
    let {
      hidden: n = Q().defaultHidden,
      name: a,
      description: o,
      queryFallbacks: i = !1,
      selected: l,
      busy: u,
      checked: c,
      pressed: s,
      current: d,
      level: p,
      expanded: f,
      value: { now: h, min: m, max: y, text: b } = {},
    } = r === void 0 ? {} : r;
    if ((wt(e), l !== void 0)) {
      var g;
      if (
        ((g = He.roles.get(t)) == null ? void 0 : g.props['aria-selected']) ===
        void 0
      )
        throw new Error(
          '"aria-selected" is not supported on role "' + t + '".',
        );
    }
    if (u !== void 0) {
      var R;
      if (
        ((R = He.roles.get(t)) == null ? void 0 : R.props['aria-busy']) ===
        void 0
      )
        throw new Error('"aria-busy" is not supported on role "' + t + '".');
    }
    if (c !== void 0) {
      var C;
      if (
        ((C = He.roles.get(t)) == null ? void 0 : C.props['aria-checked']) ===
        void 0
      )
        throw new Error('"aria-checked" is not supported on role "' + t + '".');
    }
    if (s !== void 0) {
      var _;
      if (
        ((_ = He.roles.get(t)) == null ? void 0 : _.props['aria-pressed']) ===
        void 0
      )
        throw new Error('"aria-pressed" is not supported on role "' + t + '".');
    }
    if (d !== void 0) {
      var w;
      if (
        ((w = He.roles.get(t)) == null ? void 0 : w.props['aria-current']) ===
        void 0
      )
        throw new Error('"aria-current" is not supported on role "' + t + '".');
    }
    if (p !== void 0 && t !== 'heading')
      throw new Error('Role "' + t + '" cannot have "level" property.');
    if (h !== void 0) {
      var E;
      if (
        ((E = He.roles.get(t)) == null ? void 0 : E.props['aria-valuenow']) ===
        void 0
      )
        throw new Error(
          '"aria-valuenow" is not supported on role "' + t + '".',
        );
    }
    if (y !== void 0) {
      var v;
      if (
        ((v = He.roles.get(t)) == null ? void 0 : v.props['aria-valuemax']) ===
        void 0
      )
        throw new Error(
          '"aria-valuemax" is not supported on role "' + t + '".',
        );
    }
    if (m !== void 0) {
      var O;
      if (
        ((O = He.roles.get(t)) == null ? void 0 : O.props['aria-valuemin']) ===
        void 0
      )
        throw new Error(
          '"aria-valuemin" is not supported on role "' + t + '".',
        );
    }
    if (b !== void 0) {
      var $;
      if (
        (($ = He.roles.get(t)) == null ? void 0 : $.props['aria-valuetext']) ===
        void 0
      )
        throw new Error(
          '"aria-valuetext" is not supported on role "' + t + '".',
        );
    }
    if (f !== void 0) {
      var N;
      if (
        ((N = He.roles.get(t)) == null ? void 0 : N.props['aria-expanded']) ===
        void 0
      )
        throw new Error(
          '"aria-expanded" is not supported on role "' + t + '".',
        );
    }
    let L = new WeakMap();
    function j(I) {
      return L.has(I) || L.set(I, Zh(I)), L.get(I);
    }
    return Array.from(e.querySelectorAll(pq(t)))
      .filter((I) => {
        if (I.hasAttribute('role')) {
          let H = I.getAttribute('role');
          if (i)
            return H.split(' ')
              .filter(Boolean)
              .some((J) => J === t);
          let [V] = H.split(' ');
          return V === t;
        }
        return zl(I).some((H) => H === t);
      })
      .filter((I) => {
        if (l !== void 0) return l === BA(I);
        if (u !== void 0) return u === kA(I);
        if (c !== void 0) return c === DA(I);
        if (s !== void 0) return s === FA(I);
        if (d !== void 0) return d === UA(I);
        if (f !== void 0) return f === HA(I);
        if (p !== void 0) return p === zA(I);
        if (h !== void 0 || y !== void 0 || m !== void 0 || b !== void 0) {
          let V = !0;
          if (
            (h !== void 0 && V && (V = h === VA(I)),
            y !== void 0 && V && (V = y === GA(I)),
            m !== void 0 && V && (V = m === WA(I)),
            b !== void 0)
          ) {
            var H;
            V && (V = yt((H = KA(I)) != null ? H : null, I, b, (J) => J));
          }
          return V;
        }
        return !0;
      })
      .filter((I) =>
        a === void 0
          ? !0
          : yt(
              kl(I, {
                computedStyleSupportsPseudoElements:
                  Q().computedStyleSupportsPseudoElements,
              }),
              I,
              a,
              (H) => H,
            ),
      )
      .filter((I) =>
        o === void 0
          ? !0
          : yt(
              Bh(I, {
                computedStyleSupportsPseudoElements:
                  Q().computedStyleSupportsPseudoElements,
              }),
              I,
              o,
              (H) => H,
            ),
      )
      .filter((I) =>
        n === !1 ? Na(I, { isSubtreeInaccessible: j }) === !1 : !0,
      );
  };
function pq(e) {
  var t;
  let r = '*[role~="' + e + '"]',
    n = (t = He.roleElements.get(e)) != null ? t : new Set(),
    a = new Set(
      Array.from(n).map((o) => {
        let { name: i } = o;
        return i;
      }),
    );
  return [r].concat(Array.from(a)).join(',');
}
var Um = (e) => {
    let t = '';
    return (
      e === void 0
        ? (t = '')
        : typeof e == 'string'
          ? (t = ' and name "' + e + '"')
          : (t = ' and name `' + e + '`'),
      t
    );
  },
  hq = function (e, t, r) {
    let { name: n } = r === void 0 ? {} : r;
    return 'Found multiple elements with the role "' + t + '"' + Um(n);
  },
  mq = function (e, t, r) {
    let {
      hidden: n = Q().defaultHidden,
      name: a,
      description: o,
    } = r === void 0 ? {} : r;
    if (Q()._disableExpensiveErrorDiagnostics)
      return 'Unable to find role="' + t + '"' + Um(a);
    let i = '';
    Array.from(e.children).forEach((s) => {
      i += tm(s, { hidden: n, includeDescription: o !== void 0 });
    });
    let l;
    i.length === 0
      ? n === !1
        ? (l =
            'There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole')
        : (l = 'There are no available roles.')
      : (l = (
          `
Here are the ` +
          (n === !1 ? 'accessible' : 'available') +
          ` roles:

  ` +
          i
            .replace(
              /\n/g,
              `
  `,
            )
            .replace(
              /\n\s\s\n/g,
              `

`,
            ) +
          `
`
        ).trim());
    let u = '';
    a === void 0
      ? (u = '')
      : typeof a == 'string'
        ? (u = ' and name "' + a + '"')
        : (u = ' and name `' + a + '`');
    let c = '';
    return (
      o === void 0
        ? (c = '')
        : typeof o == 'string'
          ? (c = ' and description "' + o + '"')
          : (c = ' and description `' + o + '`'),
      (
        `
Unable to find an ` +
        (n === !1 ? 'accessible ' : '') +
        'element with the role "' +
        t +
        '"' +
        u +
        c +
        `

` +
        l
      ).trim()
    );
  },
  Hm = Ie(di, di.name, 'queryAll'),
  [zm, Vm, Gm, Wm, Km] = Ct(di, hq, mq),
  Wl = () => Q().testIdAttribute,
  fi = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return wt(t[0]), Zt(Wl(), ...t);
  },
  bq = (e, t) => 'Found multiple elements by: [' + Wl() + '="' + t + '"]',
  gq = (e, t) => 'Unable to find an element by: [' + Wl() + '="' + t + '"]',
  Ym = Ie(fi, fi.name, 'queryAll'),
  [Jm, Xm, Qm, Zm, eb] = Ct(fi, bq, gq),
  ea = Object.freeze({
    __proto__: null,
    queryAllByLabelText: dm,
    queryByLabelText: om,
    getAllByLabelText: um,
    getByLabelText: cm,
    findAllByLabelText: lm,
    findByLabelText: sm,
    queryByPlaceholderText: pm,
    queryAllByPlaceholderText: fm,
    getByPlaceholderText: mm,
    getAllByPlaceholderText: hm,
    findAllByPlaceholderText: bm,
    findByPlaceholderText: gm,
    queryByText: vm,
    queryAllByText: ym,
    getByText: Em,
    getAllByText: _m,
    findAllByText: wm,
    findByText: Cm,
    queryByDisplayValue: Tm,
    queryAllByDisplayValue: Rm,
    getByDisplayValue: Pm,
    getAllByDisplayValue: Sm,
    findAllByDisplayValue: Om,
    findByDisplayValue: Am,
    queryByAltText: xm,
    queryAllByAltText: qm,
    getByAltText: $m,
    getAllByAltText: Mm,
    findAllByAltText: Nm,
    findByAltText: jm,
    queryByTitle: Lm,
    queryAllByTitle: Im,
    getByTitle: km,
    getAllByTitle: Bm,
    findAllByTitle: Dm,
    findByTitle: Fm,
    queryByRole: zm,
    queryAllByRole: Hm,
    getAllByRole: Vm,
    getByRole: Gm,
    findAllByRole: Wm,
    findByRole: Km,
    queryByTestId: Jm,
    queryAllByTestId: Ym,
    getByTestId: Qm,
    getAllByTestId: Xm,
    findAllByTestId: Zm,
    findByTestId: eb,
  });
function pi(e, t, r) {
  return (
    t === void 0 && (t = ea),
    r === void 0 && (r = {}),
    Object.keys(t).reduce((n, a) => {
      let o = t[a];
      return (n[a] = o.bind(null, e)), n;
    }, r)
  );
}
var tb = (e) => !e || (Array.isArray(e) && !e.length);
function Ec(e) {
  if (tb(e))
    throw new Error(
      'The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.',
    );
}
async function yq(e, t) {
  let r = new Error('Timed out in waitForElementToBeRemoved.');
  if (typeof e != 'function') {
    Ec(e);
    let n = (Array.isArray(e) ? e : [e]).map((a) => {
      let o = a.parentElement;
      if (o === null) return () => null;
      for (; o.parentElement; ) o = o.parentElement;
      return () => (o.contains(a) ? a : null);
    });
    e = () => n.map((a) => a()).filter(Boolean);
  }
  return (
    Ec(e()),
    Vl(() => {
      let n;
      try {
        n = e();
      } catch (a) {
        if (a.name === 'TestingLibraryElementError') return;
        throw a;
      }
      if (!tb(n)) throw r;
    }, t)
  );
}
var wc = {
    copy: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    cut: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    paste: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionEnd: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionStart: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionUpdate: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    keyDown: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    keyPress: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    keyUp: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    focus: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    blur: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    focusIn: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    focusOut: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    change: {
      EventType: 'Event',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    input: {
      EventType: 'InputEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    invalid: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !0 },
    },
    submit: {
      EventType: 'Event',
      defaultInit: { bubbles: !0, cancelable: !0 },
    },
    reset: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
    click: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 },
    },
    contextMenu: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dblClick: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    drag: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragEnd: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragEnter: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragExit: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragLeave: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragOver: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragStart: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    drop: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseDown: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseEnter: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    mouseLeave: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    mouseMove: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseOut: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseOver: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseUp: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    select: {
      EventType: 'Event',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    touchCancel: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    touchEnd: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    touchMove: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    touchStart: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    resize: {
      EventType: 'UIEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    scroll: {
      EventType: 'UIEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    wheel: {
      EventType: 'WheelEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    abort: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    canPlay: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    canPlayThrough: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    durationChange: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    emptied: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    encrypted: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    ended: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    loadedData: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    loadedMetadata: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    loadStart: {
      EventType: 'ProgressEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    pause: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    play: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    playing: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    progress: {
      EventType: 'ProgressEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    rateChange: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    seeked: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    seeking: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    stalled: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    suspend: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    timeUpdate: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    volumeChange: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    waiting: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    load: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    error: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    animationStart: {
      EventType: 'AnimationEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    animationEnd: {
      EventType: 'AnimationEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    animationIteration: {
      EventType: 'AnimationEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionCancel: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionEnd: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !0 },
    },
    transitionRun: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionStart: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    pointerOver: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerEnter: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    pointerDown: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerMove: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerUp: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerCancel: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    pointerOut: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerLeave: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    gotPointerCapture: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    lostPointerCapture: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    popState: {
      EventType: 'PopStateEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    offline: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    online: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    pageHide: {
      EventType: 'PageTransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !0 },
    },
    pageShow: {
      EventType: 'PageTransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !0 },
    },
  },
  Cc = { doubleClick: 'dblClick' };
function cn(e, t) {
  return Q().eventWrapper(() => {
    if (!t)
      throw new Error(
        'Unable to fire an event - please provide an event object.',
      );
    if (!e)
      throw new Error(
        'Unable to fire a "' +
          t.type +
          '" event - please provide a DOM element.',
      );
    return e.dispatchEvent(t);
  });
}
function Ln(e, t, r, n) {
  let { EventType: a = 'Event', defaultInit: o = {} } = n === void 0 ? {} : n;
  if (!t)
    throw new Error(
      'Unable to fire a "' + e + '" event - please provide a DOM element.',
    );
  let i = { ...o, ...r },
    { target: { value: l, files: u, ...c } = {} } = i;
  l !== void 0 && vq(t, l),
    u !== void 0 &&
      Object.defineProperty(t, 'files', {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: u,
      }),
    Object.assign(t, c);
  let s = Wh(t),
    d = s[a] || s.Event,
    p;
  if (typeof d == 'function') p = new d(e, i);
  else {
    p = s.document.createEvent(a);
    let { bubbles: f, cancelable: h, detail: m, ...y } = i;
    p.initEvent(e, f, h, m),
      Object.keys(y).forEach((b) => {
        p[b] = y[b];
      });
  }
  return (
    ['dataTransfer', 'clipboardData'].forEach((f) => {
      let h = i[f];
      typeof h == 'object' &&
        (typeof s.DataTransfer == 'function'
          ? Object.defineProperty(p, f, {
              value: Object.getOwnPropertyNames(h).reduce(
                (m, y) => (Object.defineProperty(m, y, { value: h[y] }), m),
                new s.DataTransfer(),
              ),
            })
          : Object.defineProperty(p, f, { value: h }));
    }),
    p
  );
}
Object.keys(wc).forEach((e) => {
  let { EventType: t, defaultInit: r } = wc[e],
    n = e.toLowerCase();
  (Ln[e] = (a, o) => Ln(n, a, o, { EventType: t, defaultInit: r })),
    (cn[e] = (a, o) => cn(a, Ln[e](a, o)));
});
function vq(e, t) {
  let { set: r } = Object.getOwnPropertyDescriptor(e, 'value') || {},
    n = Object.getPrototypeOf(e),
    { set: a } = Object.getOwnPropertyDescriptor(n, 'value') || {};
  if (a && r !== a) a.call(e, t);
  else if (r) r.call(e, t);
  else throw new Error('The given element does not have a value setter');
}
Object.keys(Cc).forEach((e) => {
  let t = Cc[e];
  cn[e] = function () {
    return cn[t](...arguments);
  };
});
function _q(e) {
  return e.replace(
    /[ \t]*[\n][ \t]*/g,
    `
`,
  );
}
function Eq(e) {
  return dA.default.compressToEncodedURIComponent(_q(e));
}
function wq(e) {
  return 'https://testing-playground.com/#markup=' + Eq(e);
}
var Cq = (e, t, r) =>
    Array.isArray(e) ? e.forEach((n) => ai(n, t, r)) : ai(e, t, r),
  Rq = function (e) {
    if ((e === void 0 && (e = Ul().body), !e || !('innerHTML' in e))) {
      console.log("The element you're providing isn't a valid DOM element.");
      return;
    }
    if (!e.innerHTML) {
      console.log("The provided element doesn't have any children.");
      return;
    }
    let t = wq(e.innerHTML);
    return (
      console.log(
        `Open this URL in your browser

` + t,
      ),
      t
    );
  },
  Rc = { debug: Cq, logTestingPlaygroundURL: Rq },
  Tq =
    typeof document < 'u' && document.body
      ? pi(document.body, ea, Rc)
      : Object.keys(ea).reduce(
          (e, t) => (
            (e[t] = () => {
              throw new TypeError(
                'For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error',
              );
            }),
            e
          ),
          Rc,
        );
function Y(e, t, r) {
  return (e.namespaceURI &&
    e.namespaceURI !== 'http://www.w3.org/1999/xhtml') ||
    ((t = Array.isArray(t) ? t : [t]), !t.includes(e.tagName.toLowerCase()))
    ? !1
    : r
      ? Object.entries(r).every(([n, a]) => e[n] === a)
      : !0;
}
var hi;
(function (e) {
  (e.button = 'button'),
    (e.color = 'color'),
    (e.file = 'file'),
    (e.image = 'image'),
    (e.reset = 'reset'),
    (e.submit = 'submit'),
    (e.checkbox = 'checkbox'),
    (e.radio = 'radio');
})(hi || (hi = {}));
function rb(e) {
  return Y(e, 'button') || (Y(e, 'input') && e.type in hi);
}
function ot(e) {
  var t;
  if (Sq(e) && e.defaultView) return e.defaultView;
  if (!((t = e.ownerDocument) === null || t === void 0) && t.defaultView)
    return e.ownerDocument.defaultView;
  throw new Error(`Could not determine window of node. Node was ${Pq(e)}`);
}
function Sq(e) {
  return e.nodeType === 9;
}
function Pq(e) {
  return typeof e == 'function'
    ? `function ${e.name}`
    : e === null
      ? 'null'
      : String(e);
}
function nb(e, t) {
  return new Promise((r, n) => {
    let a = new t();
    (a.onerror = n),
      (a.onabort = n),
      (a.onload = () => {
        r(String(a.result));
      }),
      a.readAsText(e);
  });
}
function Kl(e, t) {
  let r = {
    ...t,
    length: t.length,
    item: (n) => r[n],
    [Symbol.iterator]: function* () {
      for (let n = 0; n < r.length; n++) yield r[n];
    },
  };
  return (
    (r.constructor = e.FileList),
    e.FileList && Object.setPrototypeOf(r, e.FileList.prototype),
    Object.freeze(r),
    r
  );
}
function xt(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var ab = class {
    getAsFile() {
      return this.file;
    }
    getAsString(e) {
      typeof this.data == 'string' && e(this.data);
    }
    webkitGetAsEntry() {
      throw new Error('not implemented');
    }
    constructor(e, t) {
      xt(this, 'kind', void 0),
        xt(this, 'type', void 0),
        xt(this, 'file', null),
        xt(this, 'data', void 0),
        typeof e == 'string'
          ? ((this.kind = 'string'), (this.type = String(t)), (this.data = e))
          : ((this.kind = 'file'), (this.type = e.type), (this.file = e));
    }
  },
  Oq = class extends Array {
    add(...e) {
      let t = new ab(e[0], e[1]);
      return this.push(t), t;
    }
    clear() {
      this.splice(0, this.length);
    }
    remove(e) {
      this.splice(e, 1);
    }
  };
function Sn(e, t) {
  let [r, n] = e.split('/'),
    a = !n || n === '*';
  return (o) =>
    t ? o.type === (a ? r : e) : a ? o.type.startsWith(`${r}/`) : o.type === r;
}
function Aq(e) {
  return new (class {
    getData(t) {
      var r;
      let n =
          (r = this.items.find(Sn(t, !0))) !== null && r !== void 0
            ? r
            : this.items.find(Sn(t, !1)),
        a = '';
      return (
        n == null ||
          n.getAsString((o) => {
            a = o;
          }),
        a
      );
    }
    setData(t, r) {
      let n = this.items.findIndex(Sn(t, !0)),
        a = new ab(r, t);
      n >= 0 ? this.items.splice(n, 1, a) : this.items.push(a);
    }
    clearData(t) {
      if (t) {
        let r = this.items.findIndex(Sn(t, !0));
        r >= 0 && this.items.remove(r);
      } else this.items.clear();
    }
    get types() {
      let t = [];
      return (
        this.files.length && t.push('Files'),
        this.items.forEach((r) => t.push(r.type)),
        Object.freeze(t),
        t
      );
    }
    setDragImage() {}
    constructor() {
      xt(this, 'dropEffect', 'none'),
        xt(this, 'effectAllowed', 'uninitialized'),
        xt(this, 'items', new Oq()),
        xt(this, 'files', Kl(e, []));
    }
  })();
}
function Yl(e, t = []) {
  let r = typeof e.DataTransfer > 'u' ? Aq(e) : new e.DataTransfer();
  return Object.defineProperty(r, 'files', { get: () => Kl(e, t) }), r;
}
function qq(e, t) {
  if (t.kind === 'file') return t.getAsFile();
  let r = '';
  return (
    t.getAsString((n) => {
      r = n;
    }),
    new e.Blob([r], { type: t.type })
  );
}
function ob(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ib(e, ...t) {
  let r = Object.fromEntries(
    t.map((n) => [
      typeof n == 'string' ? 'text/plain' : n.type,
      Promise.resolve(n),
    ]),
  );
  return typeof e.ClipboardItem < 'u'
    ? new e.ClipboardItem(r)
    : new (class {
        get types() {
          return Array.from(Object.keys(this.data));
        }
        async getType(n) {
          let a = await this.data[n];
          if (!a)
            throw new Error(
              `${n} is not one of the available MIME types on this item.`,
            );
          return a instanceof e.Blob ? a : new e.Blob([a], { type: n });
        }
        constructor(n) {
          ob(this, 'data', void 0), (this.data = n);
        }
      })(r);
}
var Cr = Symbol('Manage ClipboardSub');
function Tc(e, t) {
  return Object.assign(
    new (class extends e.EventTarget {
      async read() {
        return Array.from(this.items);
      }
      async readText() {
        let r = '';
        for (let n of this.items) {
          let a = n.types.includes('text/plain')
            ? 'text/plain'
            : n.types.find((o) => o.startsWith('text/'));
          a && (r += await n.getType(a).then((o) => nb(o, e.FileReader)));
        }
        return r;
      }
      async write(r) {
        this.items = r;
      }
      async writeText(r) {
        this.items = [ib(e, r)];
      }
      constructor(...r) {
        super(...r), ob(this, 'items', []);
      }
    })(),
    { [Cr]: t },
  );
}
function Jl(e) {
  return !!(e != null && e[Cr]);
}
function xq(e) {
  if (Jl(e.navigator.clipboard)) return e.navigator.clipboard[Cr];
  let t = Object.getOwnPropertyDescriptor(e.navigator, 'clipboard'),
    r,
    n = {
      resetClipboardStub: () => {
        r = Tc(e, n);
      },
      detachClipboardStub: () => {
        t
          ? Object.defineProperty(e.navigator, 'clipboard', t)
          : Object.defineProperty(e.navigator, 'clipboard', {
              value: void 0,
              configurable: !0,
            });
      },
    };
  return (
    (r = Tc(e, n)),
    Object.defineProperty(e.navigator, 'clipboard', {
      get: () => r,
      configurable: !0,
    }),
    r[Cr]
  );
}
function Mq(e) {
  Jl(e.navigator.clipboard) && e.navigator.clipboard[Cr].resetClipboardStub();
}
function $q(e) {
  Jl(e.navigator.clipboard) && e.navigator.clipboard[Cr].detachClipboardStub();
}
async function Nq(e) {
  let t = e.defaultView,
    r = t == null ? void 0 : t.navigator.clipboard,
    n = r && (await r.read());
  if (!n) throw new Error('The Clipboard API is unavailable.');
  let a = Yl(t);
  for (let o of n)
    for (let i of o.types)
      a.setData(i, await o.getType(i).then((l) => nb(l, t.FileReader)));
  return a;
}
async function lb(e, t) {
  let r = ot(e),
    n = r.navigator.clipboard,
    a = [];
  for (let o = 0; o < t.items.length; o++) {
    let i = t.items[o],
      l = qq(r, i);
    a.push(ib(r, l));
  }
  if (
    !(
      n &&
      (await n.write(a).then(
        () => !0,
        () => !1,
      ))
    )
  )
    throw new Error('The Clipboard API is unavailable.');
}
var ta = globalThis;
typeof ta.afterEach == 'function' && ta.afterEach(() => Mq(globalThis.window));
typeof ta.afterAll == 'function' && ta.afterAll(() => $q(globalThis.window));
function Kt(e) {
  return (
    e.hasAttribute('contenteditable') &&
    (e.getAttribute('contenteditable') == 'true' ||
      e.getAttribute('contenteditable') == '')
  );
}
function dn(e) {
  let t = jq(e);
  return (
    t &&
    (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'))
  );
}
function jq(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function Rr(e) {
  return (sb(e) && !e.readOnly) || Kt(e);
}
var mi;
(function (e) {
  (e.text = 'text'),
    (e.date = 'date'),
    (e['datetime-local'] = 'datetime-local'),
    (e.email = 'email'),
    (e.month = 'month'),
    (e.number = 'number'),
    (e.password = 'password'),
    (e.search = 'search'),
    (e.tel = 'tel'),
    (e.time = 'time'),
    (e.url = 'url'),
    (e.week = 'week');
})(mi || (mi = {}));
function sb(e) {
  return Y(e, 'textarea') || (Y(e, 'input') && e.type in mi);
}
var bi;
(function (e) {
  (e.email = 'email'),
    (e.password = 'password'),
    (e.search = 'search'),
    (e.telephone = 'telephone'),
    (e.text = 'text'),
    (e.url = 'url');
})(bi || (bi = {}));
function Iq(e) {
  var t;
  let r = (t = e.getAttribute('maxlength')) !== null && t !== void 0 ? t : '';
  return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function Lq(e) {
  return Y(e, 'textarea') || (Y(e, 'input') && e.type in bi);
}
var ub = [
  'input:not([type=hidden]):not([disabled])',
  'button:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[contenteditable=""]',
  '[contenteditable="true"]',
  'a[href]',
  '[tabindex]:not([disabled])',
].join(', ');
function Xl(e) {
  return e.matches(ub);
}
var ra;
(function (e) {
  (e['{'] = '}'), (e['['] = ']');
})(ra || (ra = {}));
function cb(e, t) {
  let r = 0,
    n = e[r] in ra ? e[r] : '';
  r += n.length;
  let a = new RegExp(`^\\${n}{2}`).test(e) ? '' : n;
  return { type: a, ...(a === '' ? Bq(e, r, t) : kq(e, r, a, t)) };
}
function Bq(e, t, r) {
  let n = e[t];
  return (
    db(n, e, t, r),
    (t += n.length),
    {
      consumedLength: t,
      descriptor: n,
      releasePrevious: !1,
      releaseSelf: !0,
      repeat: 1,
    }
  );
}
function kq(e, t, r, n) {
  var a, o;
  let i = e[t] === '/' ? '/' : '';
  t += i.length;
  let l = r === '{' && e[t] === '\\';
  t += Number(l);
  let u = l
    ? e[t]
    : (a = e.slice(t).match(r === '{' ? /^\w+|^[^}>/]/ : /^\w+/)) === null ||
        a === void 0
      ? void 0
      : a[0];
  db(u, e, t, n), (t += u.length);
  var c;
  let s =
    (c =
      (o = e.slice(t).match(/^>\d+/)) === null || o === void 0
        ? void 0
        : o[0]) !== null && c !== void 0
      ? c
      : '';
  t += s.length;
  let d = e[t] === '/' || (!s && e[t] === '>') ? e[t] : '';
  t += d.length;
  let p = ra[r],
    f = e[t] === p ? p : '';
  if (!f)
    throw new Error(
      fb(
        [!s && 'repeat modifier', !d && 'release modifier', `"${p}"`]
          .filter(Boolean)
          .join(' or '),
        e[t],
        e,
        n,
      ),
    );
  return (
    (t += f.length),
    {
      consumedLength: t,
      descriptor: u,
      releasePrevious: !!i,
      repeat: s ? Math.max(Number(s.substr(1)), 1) : 1,
      releaseSelf: Dq(d, s),
    }
  );
}
function db(e, t, r, n) {
  if (!e) throw new Error(fb('key descriptor', t[r], t, n));
}
function Dq(e, t) {
  if (e) return e === '/';
  if (t) return !1;
}
function fb(e, t, r, n) {
  return `Expected ${e} but found "${t ?? ''}" in "${r}"
    See ${n === 'pointer' ? 'https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen' : 'https://testing-library.com/docs/user-event/keyboard'}
    for more information about how userEvent parses your input.`;
}
function Fq(e) {
  return new e.constructor(e.type, e);
}
var Ne;
(function (e) {
  (e[(e.Trigger = 2)] = 'Trigger'), (e[(e.Call = 1)] = 'Call');
})(Ne || (Ne = {}));
function Lr(e, t) {
  e.levelRefs[t] = {};
}
function Pn(e, t) {
  return e.levelRefs[t];
}
var fr;
(function (e) {
  (e[(e.EachTrigger = 4)] = 'EachTrigger'),
    (e[(e.EachApiCall = 2)] = 'EachApiCall'),
    (e[(e.EachTarget = 1)] = 'EachTarget'),
    (e[(e.Never = 0)] = 'Never');
})(fr || (fr = {}));
function vt(e) {
  for (let r = e; r; r = r.parentElement)
    if (Y(r, ['button', 'input', 'select', 'textarea', 'optgroup', 'option'])) {
      if (r.hasAttribute('disabled')) return !0;
    } else if (Y(r, 'fieldset')) {
      var t;
      if (
        r.hasAttribute('disabled') &&
        !(
          !(
            (t = r.querySelector(':scope > legend')) === null || t === void 0
          ) && t.contains(e)
        )
      )
        return !0;
    } else if (
      r.tagName.includes('-') &&
      r.constructor.formAssociated &&
      r.hasAttribute('disabled')
    )
      return !0;
  return !1;
}
function La(e) {
  let t = e.activeElement;
  return t != null && t.shadowRoot
    ? La(t.shadowRoot)
    : vt(t)
      ? e.ownerDocument
        ? e.ownerDocument.body
        : e.body
      : t;
}
function co(e) {
  var t;
  return (t = La(e)) !== null && t !== void 0 ? t : e.body;
}
function Uq(e, t) {
  let r = e;
  do {
    if (t(r)) return r;
    r = r.parentElement;
  } while (r && r !== e.ownerDocument.body);
}
function it(e) {
  return pb(e) && sb(e);
}
function Hq(e) {
  return pb(e) && rb(e);
}
function pb(e) {
  return e.nodeType === 1;
}
function zq(e) {
  let t = e.ownerDocument.getSelection();
  if (t != null && t.focusNode && it(e)) {
    let n = dn(t.focusNode);
    if (n) {
      if (!t.isCollapsed) {
        var r;
        let a =
          ((r = n.firstChild) === null || r === void 0
            ? void 0
            : r.nodeType) === 3
            ? n.firstChild
            : n;
        t.setBaseAndExtent(a, 0, a, 0);
      }
    } else t.setBaseAndExtent(e, 0, e, 0);
  }
}
function Tr(e, t) {
  return Q().eventWrapper(e);
}
function jt(e) {
  let t = Uq(e, Xl),
    r = La(e.ownerDocument);
  (t ?? e.ownerDocument.body) !== r &&
    (Tr(t ? () => t.focus() : () => (r == null ? void 0 : r.blur())),
    zq(t ?? e.ownerDocument.body));
}
function Vq(e) {
  !Xl(e) || La(e.ownerDocument) !== e || Tr(() => e.blur());
}
var It = {};
It.click = (e, t, r) => {
  let n = t.closest('button,input,label,select,textarea'),
    a = n && Y(n, 'label') && n.control;
  if (a)
    return () => {
      Xl(a) && jt(a), r.dispatchEvent(a, Fq(e));
    };
  if (Y(t, 'input', { type: 'file' }))
    return () => {
      Vq(t), t.dispatchEvent(new (ot(t).Event)('fileDialog')), jt(t);
    };
};
var Sr = Symbol('Displayed value in UI'),
  gt = Symbol('Displayed selection in UI'),
  na = Symbol('Initial value to compare on blur');
function Gq(e) {
  return typeof e == 'object' && Sr in e;
}
function Wq(e) {
  return !!e && typeof e == 'object' && gt in e;
}
function Kq(e, t) {
  e[na] === void 0 && (e[na] = e.value),
    (e[Sr] = t),
    (e.value = Object.assign(new String(t), { [Sr]: !0 }));
}
function lt(e) {
  return e[Sr] === void 0 ? e.value : String(e[Sr]);
}
function Ql(e) {
  e[Sr] = void 0;
}
function hb(e) {
  e[na] = void 0;
}
function Yq(e) {
  return e[na];
}
function Jq(e, t) {
  e[gt] = t;
}
function Mr(e, { focusOffset: t, anchorOffset: r = t }, n = 'replace') {
  let a = lt(e).length,
    o = (d) => Math.max(0, Math.min(a, d)),
    i = n === 'replace' || e[gt] === void 0 ? o(r) : e[gt].anchorOffset,
    l = o(t),
    u = Math.min(i, l),
    c = Math.max(i, l);
  if (
    ((e[gt] = { anchorOffset: i, focusOffset: l }),
    e.selectionStart === u && e.selectionEnd === c)
  )
    return;
  let s = Object.assign(new Number(u), { [gt]: !0 });
  try {
    e.setSelectionRange(s, c);
  } catch {}
}
function fn(e) {
  var t, r, n;
  let a =
    (n = e[gt]) !== null && n !== void 0
      ? n
      : {
          anchorOffset: (t = e.selectionStart) !== null && t !== void 0 ? t : 0,
          focusOffset: (r = e.selectionEnd) !== null && r !== void 0 ? r : 0,
        };
  return {
    ...a,
    startOffset: Math.min(a.anchorOffset, a.focusOffset),
    endOffset: Math.max(a.anchorOffset, a.focusOffset),
  };
}
function Xq(e) {
  return !!e[gt];
}
function Bn(e) {
  e[gt] = void 0;
}
var aa = globalThis.parseInt;
function Qq(e) {
  let t = e.replace(/\D/g, '');
  if (t.length < 2) return e;
  let r = aa(t[0], 10),
    n = aa(t[1], 10);
  if (r >= 3 || (r === 2 && n >= 4)) {
    let a;
    return r >= 3 ? (a = 1) : (a = 2), Sc(t, a);
  }
  return e.length === 2 ? e : Sc(t, 2);
}
function Sc(e, t) {
  let r = e.slice(0, t),
    n = Math.min(aa(r, 10), 23),
    a = e.slice(t),
    o = aa(a, 10),
    i = Math.min(o, 59);
  return `${n.toString().padStart(2, '0')}:${i.toString().padStart(2, '0')}`;
}
function mb(e, t) {
  let r = e.cloneNode();
  return (r.value = t), r.value === t;
}
function bb(e, t, r, n) {
  if (kn(e) && t + r >= 0 && t + r <= e.nodeValue.length)
    return { node: e, offset: t + r };
  let a = Pc(e, t, r);
  if (a) {
    if (kn(a))
      return {
        node: a,
        offset:
          r > 0
            ? Math.min(1, a.nodeValue.length)
            : Math.max(a.nodeValue.length - 1, 0),
      };
    if (Y(a, 'br')) {
      let o = Pc(a, void 0, r);
      return o
        ? kn(o)
          ? { node: o, offset: r > 0 ? 0 : o.nodeValue.length }
          : r < 0 && Y(o, 'br')
            ? { node: a.parentNode, offset: On(a) }
            : { node: o.parentNode, offset: On(o) + (r > 0 ? 0 : 1) }
        : r < 0 && n === 'deleteContentBackward'
          ? { node: a.parentNode, offset: On(a) }
          : void 0;
    } else return { node: a.parentNode, offset: On(a) + (r > 0 ? 1 : 0) };
  }
}
function Pc(e, t, r) {
  let n = Number(t) + (r < 0 ? -1 : 0);
  return (
    t !== void 0 &&
      Zl(e) &&
      n >= 0 &&
      n < e.children.length &&
      (e = e.children[n]),
    ex(e, r === 1 ? 'next' : 'previous', Zq)
  );
}
function Zq(e) {
  if (kn(e)) return !0;
  if (Zl(e)) {
    if (Y(e, ['input', 'textarea'])) return e.type !== 'hidden';
    if (Y(e, 'br')) return !0;
  }
  return !1;
}
function On(e) {
  let t = 0;
  for (; e.previousSibling; ) t++, (e = e.previousSibling);
  return t;
}
function Zl(e) {
  return e.nodeType === 1;
}
function kn(e) {
  return e.nodeType === 3;
}
function ex(e, t, r) {
  for (;;) {
    var n;
    let a = e[`${t}Sibling`];
    if (a) {
      if (((e = tx(a, t === 'next' ? 'first' : 'last')), r(e))) return e;
    } else if (
      e.parentNode &&
      (!Zl(e.parentNode) ||
        (!Kt(e.parentNode) &&
          e.parentNode !==
            ((n = e.ownerDocument) === null || n === void 0 ? void 0 : n.body)))
    )
      e = e.parentNode;
    else break;
  }
}
function tx(e, t) {
  for (; e.hasChildNodes(); ) e = e[`${t}Child`];
  return e;
}
var pn = Symbol('Track programmatic changes for React workaround');
function rx(e) {
  return (
    Object.getOwnPropertyNames(e).some((t) => t.startsWith('__react')) &&
    ot(e).REACT_VERSION === 17
  );
}
function nx(e) {
  rx(e) && (e[pn] = { previousValue: String(e.value), tracked: [] });
}
function ax(e, t) {
  var r, n;
  (n = e[pn]) === null ||
    n === void 0 ||
    (r = n.tracked) === null ||
    r === void 0 ||
    r.push(t),
    e[pn] || (Ql(e), Mr(e, { focusOffset: t.length }));
}
function ox(e, t) {
  var r;
  let n = e[pn];
  if (
    ((e[pn] = void 0),
    !(!(n == null || (r = n.tracked) === null || r === void 0) && r.length))
  )
    return;
  let a =
    n.tracked.length === 2 &&
    n.tracked[0] === n.previousValue &&
    n.tracked[1] === e.value;
  a || Ql(e), Xq(e) && Mr(e, { focusOffset: a ? t : e.value.length });
}
function gb(e) {
  let t = ix(e);
  if (t && it(t)) return { type: 'input', selection: fn(t) };
  let r = t == null ? void 0 : t.ownerDocument.getSelection();
  return {
    type:
      dn(e) && r != null && r.anchorNode && dn(r.anchorNode)
        ? 'contenteditable'
        : 'default',
    selection: r,
  };
}
function ix(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function lx(e) {
  let t = gb(e);
  if (t.type === 'input') return t.selection;
  if (t.type === 'contenteditable') {
    var r;
    return (r = t.selection) === null || r === void 0
      ? void 0
      : r.getRangeAt(0);
  }
}
function Yt({
  focusNode: e,
  focusOffset: t,
  anchorNode: r = e,
  anchorOffset: n = t,
}) {
  var a, o;
  if (gb(e).type === 'input') return Mr(e, { anchorOffset: n, focusOffset: t });
  (o = r.ownerDocument) === null ||
    o === void 0 ||
    (a = o.getSelection()) === null ||
    a === void 0 ||
    a.setBaseAndExtent(r, n, e, t);
}
function yb(e) {
  return Y(e, 'input') && ['date', 'time'].includes(e.type);
}
function Pr(e, t, r, n = 'insertText') {
  let a = lx(t);
  a &&
    ((!yb(t) &&
      !e.dispatchUIEvent(t, 'beforeinput', { inputType: n, data: r })) ||
      ('startContainer' in a ? sx(e, t, a, r, n) : ux(e, t, a, r, n)));
}
function sx(e, t, r, n, a) {
  let o = !1;
  if (!r.collapsed) (o = !0), r.deleteContents();
  else if (['deleteContentBackward', 'deleteContentForward'].includes(a)) {
    let i = bb(
      r.startContainer,
      r.startOffset,
      a === 'deleteContentBackward' ? -1 : 1,
      a,
    );
    if (i) {
      o = !0;
      let l = r.cloneRange();
      l.comparePoint(i.node, i.offset) < 0
        ? l.setStart(i.node, i.offset)
        : l.setEnd(i.node, i.offset),
        l.deleteContents();
    }
  }
  if (n)
    if (r.endContainer.nodeType === 3) {
      let i = r.endOffset;
      r.endContainer.insertData(i, n),
        r.setStart(r.endContainer, i + n.length),
        r.setEnd(r.endContainer, i + n.length);
    } else {
      let i = t.ownerDocument.createTextNode(n);
      r.insertNode(i), r.setStart(i, n.length), r.setEnd(i, n.length);
    }
  (o || n) && e.dispatchUIEvent(t, 'input', { inputType: a });
}
function ux(e, t, r, n, a) {
  let o = n;
  if (Lq(t)) {
    let c = Iq(t);
    if (c !== void 0 && n.length > 0) {
      let s = c - t.value.length;
      if (s > 0) o = n.substring(0, s);
      else return;
    }
  }
  let { newValue: i, newOffset: l, oldValue: u } = cx(o, t, r, a);
  (i === u && l === r.startOffset && l === r.endOffset) ||
    (Y(t, 'input', { type: 'number' }) && !dx(i)) ||
    (Kq(t, i),
    Yt({ focusNode: t, anchorOffset: l, focusOffset: l }),
    yb(t)
      ? mb(t, i) && (Oc(e, t, l, {}), e.dispatchUIEvent(t, 'change'), hb(t))
      : Oc(e, t, l, { data: n, inputType: a }));
}
function cx(e, t, { startOffset: r, endOffset: n }, a) {
  let o = lt(t),
    i = Math.max(0, r === n && a === 'deleteContentBackward' ? r - 1 : r),
    l = o.substring(0, i),
    u = Math.min(o.length, r === n && a === 'deleteContentForward' ? r + 1 : n),
    c = o.substring(u, o.length),
    s = `${l}${e}${c}`,
    d = i + e.length;
  if (Y(t, 'input', { type: 'time' })) {
    let p = Qq(s);
    p !== '' && mb(t, p) && ((s = p), (d = p.length));
  }
  return { oldValue: o, newValue: s, newOffset: d };
}
function Oc(e, t, r, n) {
  e.dispatchUIEvent(t, 'input', n), ox(t, r);
}
function dx(e) {
  var t, r;
  let n = e.split('e', 2);
  return !(
    /[^\d.\-e]/.test(e) ||
    Number((t = e.match(/-/g)) === null || t === void 0 ? void 0 : t.length) >
      2 ||
    Number((r = e.match(/\./g)) === null || r === void 0 ? void 0 : r.length) >
      1 ||
    (n[1] && !/^-?\d*$/.test(n[1]))
  );
}
It.cut = (e, t, r) => () => {
  Rr(t) && Pr(r, t, '', 'deleteByCut');
};
function fx(e) {
  return e ? (Kt(e) ? e.textContent : lt(e)) : null;
}
function px(e) {
  let t = ot(e);
  for (let r = e; r != null && r.ownerDocument; r = r.parentElement) {
    let { display: n, visibility: a } = t.getComputedStyle(r);
    if (n === 'none' || a === 'hidden') return !1;
  }
  return !0;
}
function hx(e, t) {
  let r = e.ownerDocument,
    n = r.querySelectorAll(ub),
    a = Array.from(n).filter(
      (u) => u === e || !(Number(u.getAttribute('tabindex')) < 0 || vt(u)),
    );
  Number(e.getAttribute('tabindex')) >= 0 &&
    a.sort((u, c) => {
      let s = Number(u.getAttribute('tabindex')),
        d = Number(c.getAttribute('tabindex'));
      return s === d ? 0 : s === 0 ? 1 : d === 0 ? -1 : s - d;
    });
  let o = {},
    i = [r.body],
    l = Y(e, 'input', { type: 'radio' }) ? e.name : void 0;
  a.forEach((u) => {
    let c = u;
    if (Y(c, 'input', { type: 'radio' }) && c.name) {
      if (c === e) {
        i.push(c);
        return;
      } else if (c.name === l) return;
      if (c.checked) {
        (i = i.filter((s) => !Y(s, 'input', { type: 'radio', name: c.name }))),
          i.push(c),
          (o[c.name] = c);
        return;
      }
      if (typeof o[c.name] < 'u') return;
    }
    i.push(c);
  });
  for (let u = i.findIndex((c) => c === e); ; )
    if (
      ((u += t ? -1 : 1),
      u === i.length ? (u = 0) : u === -1 && (u = i.length - 1),
      i[u] === e || i[u] === r.body || px(i[u]))
    )
      return i[u];
}
function Ac(e, t) {
  if (it(e)) {
    let r = fn(e);
    Yt({
      focusNode: e,
      focusOffset:
        r.startOffset === r.endOffset
          ? r.focusOffset + t
          : t < 0
            ? r.startOffset
            : r.endOffset,
    });
  } else {
    let r = e.ownerDocument.getSelection();
    if (!(r != null && r.focusNode)) return;
    if (r.isCollapsed) {
      let n = bb(r.focusNode, r.focusOffset, t);
      n && Yt({ focusNode: n.node, focusOffset: n.offset });
    } else r[t < 0 ? 'collapseToStart' : 'collapseToEnd']();
  }
}
function vb(e) {
  if (it(e))
    return Yt({ focusNode: e, anchorOffset: 0, focusOffset: lt(e).length });
  var t;
  let r = (t = dn(e)) !== null && t !== void 0 ? t : e.ownerDocument.body;
  Yt({ focusNode: r, anchorOffset: 0, focusOffset: r.childNodes.length });
}
function mx(e) {
  if (it(e)) return fn(e).startOffset === 0 && fn(e).endOffset === lt(e).length;
  var t;
  let r = (t = dn(e)) !== null && t !== void 0 ? t : e.ownerDocument.body,
    n = e.ownerDocument.getSelection();
  return (
    (n == null ? void 0 : n.anchorNode) === r &&
    n.focusNode === r &&
    n.anchorOffset === 0 &&
    n.focusOffset === r.childNodes.length
  );
}
function Br(e, t, r) {
  var n;
  if (it(e)) return Yt({ focusNode: e, anchorOffset: t, focusOffset: r });
  if (
    Kt(e) &&
    ((n = e.firstChild) === null || n === void 0 ? void 0 : n.nodeType) === 3
  )
    return Yt({ focusNode: e.firstChild, anchorOffset: t, focusOffset: r });
  throw new Error(
    'Not implemented. The result of this interaction is unreliable.',
  );
}
function An(e, t, r) {
  let n = ot(t),
    a = Array.from(
      t.ownerDocument.querySelectorAll(
        t.name
          ? `input[type="radio"][name="${n.CSS.escape(t.name)}"]`
          : 'input[type="radio"][name=""], input[type="radio"]:not([name])',
      ),
    );
  for (let o = a.findIndex((i) => i === t) + r; ; o += r) {
    if ((a[o] || (o = r > 0 ? 0 : a.length - 1), a[o] === t)) return;
    vt(a[o]) || (jt(a[o]), e.dispatchUIEvent(a[o], 'click'));
  }
}
It.keydown = (e, t, r) => {
  var n, a;
  return (a =
    (n = qc[e.key]) === null || n === void 0 ? void 0 : n.call(qc, e, t, r)) !==
    null && a !== void 0
    ? a
    : bx(e, t, r);
};
var qc = {
    ArrowDown: (e, t, r) => {
      if (Y(t, 'input', { type: 'radio' })) return () => An(r, t, -1);
    },
    ArrowLeft: (e, t, r) =>
      Y(t, 'input', { type: 'radio' }) ? () => An(r, t, -1) : () => Ac(t, -1),
    ArrowRight: (e, t, r) =>
      Y(t, 'input', { type: 'radio' }) ? () => An(r, t, 1) : () => Ac(t, 1),
    ArrowUp: (e, t, r) => {
      if (Y(t, 'input', { type: 'radio' })) return () => An(r, t, 1);
    },
    Backspace: (e, t, r) => {
      if (Rr(t))
        return () => {
          Pr(r, t, '', 'deleteContentBackward');
        };
    },
    Delete: (e, t, r) => {
      if (Rr(t))
        return () => {
          Pr(r, t, '', 'deleteContentForward');
        };
    },
    End: (e, t) => {
      if (Y(t, ['input', 'textarea']) || Kt(t))
        return () => {
          var r, n;
          let a =
            (n = (r = fx(t)) === null || r === void 0 ? void 0 : r.length) !==
              null && n !== void 0
              ? n
              : 0;
          Br(t, a, a);
        };
    },
    Home: (e, t) => {
      if (Y(t, ['input', 'textarea']) || Kt(t))
        return () => {
          Br(t, 0, 0);
        };
    },
    PageDown: (e, t) => {
      if (Y(t, ['input']))
        return () => {
          let r = lt(t).length;
          Br(t, r, r);
        };
    },
    PageUp: (e, t) => {
      if (Y(t, ['input']))
        return () => {
          Br(t, 0, 0);
        };
    },
    Tab: (e, t, r) => () => {
      let n = hx(t, r.system.keyboard.modifiers.Shift);
      jt(n), it(n) && Mr(n, { anchorOffset: 0, focusOffset: n.value.length });
    },
  },
  bx = (e, t, r) => {
    if (e.code === 'KeyA' && r.system.keyboard.modifiers.Control)
      return () => vb(t);
  };
It.keypress = (e, t, r) => {
  if (e.key === 'Enter') {
    if (
      Y(t, 'button') ||
      (Y(t, 'input') && gx.includes(t.type)) ||
      (Y(t, 'a') && t.href)
    )
      return () => {
        r.dispatchUIEvent(t, 'click');
      };
    if (Y(t, 'input')) {
      let n = t.form,
        a =
          n == null
            ? void 0
            : n.querySelector(
                'input[type="submit"], button:not([type]), button[type="submit"]',
              );
      return a
        ? () => r.dispatchUIEvent(a, 'click')
        : n && yx.includes(t.type) && n.querySelectorAll('input').length === 1
          ? () => r.dispatchUIEvent(n, 'submit')
          : void 0;
    }
  }
  if (Rr(t)) {
    let n =
        e.key === 'Enter'
          ? Kt(t) && !r.system.keyboard.modifiers.Shift
            ? 'insertParagraph'
            : 'insertLineBreak'
          : 'insertText',
      a =
        e.key === 'Enter'
          ? `
`
          : e.key;
    return () => Pr(r, t, a, n);
  }
};
var gx = ['button', 'color', 'file', 'image', 'reset', 'submit'],
  yx = ['email', 'month', 'password', 'search', 'tel', 'text', 'url', 'week'];
It.keyup = (e, t, r) => {
  var n;
  return (n = xc[e.key]) === null || n === void 0
    ? void 0
    : n.call(xc, e, t, r);
};
var xc = {
  ' ': (e, t, r) => {
    if (rb(t)) return () => r.dispatchUIEvent(t, 'click');
  },
};
It.paste = (e, t, r) => {
  if (Rr(t))
    return () => {
      var n;
      let a =
        (n = e.clipboardData) === null || n === void 0
          ? void 0
          : n.getData('text');
      a && Pr(r, t, a, 'insertFromPaste');
    };
};
var _b = {
  auxclick: {
    EventType: 'PointerEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  beforeinput: {
    EventType: 'InputEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  click: {
    EventType: 'PointerEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  contextmenu: {
    EventType: 'PointerEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  copy: {
    EventType: 'ClipboardEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  change: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !1 } },
  cut: {
    EventType: 'ClipboardEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  dblclick: {
    EventType: 'MouseEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  keydown: {
    EventType: 'KeyboardEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  keypress: {
    EventType: 'KeyboardEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  keyup: {
    EventType: 'KeyboardEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  paste: {
    EventType: 'ClipboardEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  input: {
    EventType: 'InputEvent',
    defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
  },
  mousedown: {
    EventType: 'MouseEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  mouseenter: {
    EventType: 'MouseEvent',
    defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
  },
  mouseleave: {
    EventType: 'MouseEvent',
    defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
  },
  mousemove: {
    EventType: 'MouseEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  mouseout: {
    EventType: 'MouseEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  mouseover: {
    EventType: 'MouseEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  mouseup: {
    EventType: 'MouseEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  pointerover: {
    EventType: 'PointerEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  pointerenter: {
    EventType: 'PointerEvent',
    defaultInit: { bubbles: !1, cancelable: !1 },
  },
  pointerdown: {
    EventType: 'PointerEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  pointermove: {
    EventType: 'PointerEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  pointerup: {
    EventType: 'PointerEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  pointercancel: {
    EventType: 'PointerEvent',
    defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
  },
  pointerout: {
    EventType: 'PointerEvent',
    defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
  },
  pointerleave: {
    EventType: 'PointerEvent',
    defaultInit: { bubbles: !1, cancelable: !1 },
  },
  submit: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
};
function Eb(e) {
  return _b[e].EventType;
}
var vx = ['MouseEvent', 'PointerEvent'];
function _x(e) {
  return vx.includes(Eb(e));
}
function Ex(e) {
  return Eb(e) === 'KeyboardEvent';
}
var wx = {
  ClipboardEvent: [Rx],
  Event: [],
  InputEvent: [qn, Tx],
  MouseEvent: [qn, fo, Mc],
  PointerEvent: [qn, fo, Mc, Px],
  KeyboardEvent: [qn, fo, Sx],
};
function wb(e, t, r) {
  let n = ot(t),
    { EventType: a, defaultInit: o } = _b[e],
    i = new (Cx(n)[a])(e, o);
  return wx[a].forEach((l) => l(i, r ?? {})), i;
}
function Cx(e) {
  var t;
  let r = (t = e.Event) !== null && t !== void 0 ? t : class {};
  var n;
  let a =
    (n = e.AnimationEvent) !== null && n !== void 0 ? n : class extends r {};
  var o;
  let i =
    (o = e.ClipboardEvent) !== null && o !== void 0 ? o : class extends r {};
  var l;
  let u =
    (l = e.PopStateEvent) !== null && l !== void 0 ? l : class extends r {};
  var c;
  let s =
    (c = e.ProgressEvent) !== null && c !== void 0 ? c : class extends r {};
  var d;
  let p =
    (d = e.TransitionEvent) !== null && d !== void 0 ? d : class extends r {};
  var f;
  let h = (f = e.UIEvent) !== null && f !== void 0 ? f : class extends r {};
  var m;
  let y =
    (m = e.CompositionEvent) !== null && m !== void 0 ? m : class extends h {};
  var b;
  let g = (b = e.FocusEvent) !== null && b !== void 0 ? b : class extends h {};
  var R;
  let C = (R = e.InputEvent) !== null && R !== void 0 ? R : class extends h {};
  var _;
  let w =
    (_ = e.KeyboardEvent) !== null && _ !== void 0 ? _ : class extends h {};
  var E;
  let v = (E = e.MouseEvent) !== null && E !== void 0 ? E : class extends h {};
  var O;
  let $ = (O = e.DragEvent) !== null && O !== void 0 ? O : class extends v {};
  var N;
  let L =
    (N = e.PointerEvent) !== null && N !== void 0 ? N : class extends v {};
  var j;
  let I = (j = e.TouchEvent) !== null && j !== void 0 ? j : class extends h {};
  return {
    Event: r,
    AnimationEvent: a,
    ClipboardEvent: i,
    PopStateEvent: u,
    ProgressEvent: s,
    TransitionEvent: p,
    UIEvent: h,
    CompositionEvent: y,
    FocusEvent: g,
    InputEvent: C,
    KeyboardEvent: w,
    MouseEvent: v,
    DragEvent: $,
    PointerEvent: L,
    TouchEvent: I,
  };
}
function er(e, t) {
  for (let [r, n] of Object.entries(t))
    Object.defineProperty(e, r, { get: () => n ?? null });
}
function we(e) {
  return Number(e ?? 0);
}
function Rx(e, { clipboardData: t }) {
  er(e, { clipboardData: t });
}
function Tx(e, { data: t, inputType: r, isComposing: n }) {
  er(e, { data: t, isComposing: !!n, inputType: String(r) });
}
function qn(e, { view: t, detail: r }) {
  er(e, { view: t, detail: we(r ?? 0) });
}
function fo(
  e,
  {
    altKey: t,
    ctrlKey: r,
    metaKey: n,
    shiftKey: a,
    modifierAltGraph: o,
    modifierCapsLock: i,
    modifierFn: l,
    modifierFnLock: u,
    modifierNumLock: c,
    modifierScrollLock: s,
    modifierSymbol: d,
    modifierSymbolLock: p,
  },
) {
  er(e, {
    altKey: !!t,
    ctrlKey: !!r,
    metaKey: !!n,
    shiftKey: !!a,
    getModifierState(f) {
      return !!{
        Alt: t,
        AltGraph: o,
        CapsLock: i,
        Control: r,
        Fn: l,
        FnLock: u,
        Meta: n,
        NumLock: c,
        ScrollLock: s,
        Shift: a,
        Symbol: d,
        SymbolLock: p,
      }[f];
    },
  });
}
function Sx(
  e,
  { key: t, code: r, location: n, repeat: a, isComposing: o, charCode: i },
) {
  er(e, {
    key: String(t),
    code: String(r),
    location: we(n),
    repeat: !!a,
    isComposing: !!o,
    charCode: i,
  });
}
function Mc(
  e,
  {
    x: t,
    y: r,
    screenX: n,
    screenY: a,
    clientX: o = t,
    clientY: i = r,
    button: l,
    buttons: u,
    relatedTarget: c,
  },
) {
  er(e, {
    screenX: we(n),
    screenY: we(a),
    clientX: we(o),
    x: we(o),
    clientY: we(i),
    y: we(i),
    button: we(l),
    buttons: we(u),
    relatedTarget: c,
  });
}
function Px(
  e,
  {
    pointerId: t,
    width: r,
    height: n,
    pressure: a,
    tangentialPressure: o,
    tiltX: i,
    tiltY: l,
    twist: u,
    pointerType: c,
    isPrimary: s,
  },
) {
  er(e, {
    pointerId: we(t),
    width: we(r),
    height: we(n),
    pressure: we(a),
    tangentialPressure: we(o),
    tiltX: we(i),
    tiltY: we(l),
    twist: we(u),
    pointerType: String(c),
    isPrimary: !!s,
  });
}
function Ox(e, t, r, n = !1) {
  (_x(t) || Ex(t)) && (r = { ...r, ...this.system.getUIEventModifiers() });
  let a = wb(t, e, r);
  return Cb.call(this, e, a, n);
}
function Cb(e, t, r = !1) {
  var n;
  let a = t.type,
    o = r
      ? () => {}
      : (n = It[a]) === null || n === void 0
        ? void 0
        : n.call(It, t, e, this);
  if (o) {
    t.preventDefault();
    let i = !1;
    return (
      Object.defineProperty(t, 'defaultPrevented', { get: () => i }),
      Object.defineProperty(t, 'preventDefault', {
        value: () => {
          i = t.cancelable;
        },
      }),
      Tr(() => e.dispatchEvent(t)),
      i || o(),
      !i
    );
  }
  return Tr(() => e.dispatchEvent(t));
}
function Ax(e, t, r) {
  let n = wb(t, e, r);
  Tr(() => e.dispatchEvent(n));
}
var po = Symbol('Interceptor for programmatical calls');
function cr(e, t, r) {
  let n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    a = Object.getOwnPropertyDescriptor(e, t),
    o = n != null && n.set ? 'set' : 'value';
  if (typeof (n == null ? void 0 : n[o]) != 'function' || n[o][po])
    throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
  function i(...l) {
    let { applyNative: u = !1, realArgs: c, then: s } = r.call(this, ...l),
      d = ((!u && a) || n)[o];
    o === 'set' ? d.call(this, c) : d.call(this, ...c), s == null || s();
  }
  (i[po] = po), Object.defineProperty(e, t, { ...(a ?? n), [o]: i });
}
function qx(e) {
  cr(e, 'value', function (t) {
    let r = Gq(t);
    return (
      r && nx(this),
      {
        applyNative: !!r,
        realArgs: xx(this, t),
        then: r ? void 0 : () => ax(this, String(t)),
      }
    );
  });
}
function xx(e, t) {
  return Y(e, 'input', { type: 'number' }) &&
    String(t) !== '' &&
    !Number.isNaN(Number(t))
    ? String(Number(t))
    : String(t);
}
function Mx(e) {
  cr(e, 'setSelectionRange', function (t, ...r) {
    let n = Wq(t);
    return {
      applyNative: !!n,
      realArgs: [Number(t), ...r],
      then: () => (n ? void 0 : Bn(e)),
    };
  }),
    cr(e, 'selectionStart', function (t) {
      return { realArgs: t, then: () => Bn(e) };
    }),
    cr(e, 'selectionEnd', function (t) {
      return { realArgs: t, then: () => Bn(e) };
    }),
    cr(e, 'select', function () {
      return {
        realArgs: [],
        then: () => Jq(e, { anchorOffset: 0, focusOffset: lt(e).length }),
      };
    });
}
function $x(e) {
  cr(e, 'setRangeText', function (...t) {
    return {
      realArgs: t,
      then: () => {
        Ql(e), Bn(e);
      },
    };
  });
}
var pr = Symbol('Node prepared with document state workarounds');
function Rb(e) {
  e[pr] ||
    (e.addEventListener(
      'focus',
      (t) => {
        let r = t.target;
        $c(r);
      },
      { capture: !0, passive: !0 },
    ),
    e.activeElement && $c(e.activeElement),
    e.addEventListener(
      'blur',
      (t) => {
        let r = t.target,
          n = Yq(r);
        n !== void 0 && (r.value !== n && Ax(r, 'change'), hb(r));
      },
      { capture: !0, passive: !0 },
    ),
    (e[pr] = pr));
}
function $c(e) {
  e[pr] || (Y(e, ['input', 'textarea']) && (qx(e), Mx(e), $x(e)), (e[pr] = pr));
}
function Nx(e) {
  return jx(e) ? e : e.ownerDocument;
}
function jx(e) {
  return e.nodeType === 9;
}
function Or(e) {
  let t = e.delay;
  if (typeof t == 'number')
    return Promise.all([
      new Promise((r) => globalThis.setTimeout(() => r(), t)),
      e.advanceTimers(t),
    ]);
}
function tr(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var ze;
(function (e) {
  (e[(e.STANDARD = 0)] = 'STANDARD'),
    (e[(e.LEFT = 1)] = 'LEFT'),
    (e[(e.RIGHT = 2)] = 'RIGHT'),
    (e[(e.NUMPAD = 3)] = 'NUMPAD');
})(ze || (ze = {}));
var Ix = ['Alt', 'AltGraph', 'Control', 'Fn', 'Meta', 'Shift', 'Symbol'];
function Nc(e) {
  return Ix.includes(e);
}
var Lx = ['CapsLock', 'FnLock', 'NumLock', 'ScrollLock', 'SymbolLock'];
function jc(e) {
  return Lx.includes(e);
}
var Bx = class {
    isKeyPressed(e) {
      return !!this.pressed[String(e.code)];
    }
    getPressedKeys() {
      return Object.values(this.pressed).map((e) => e.keyDef);
    }
    async keydown(e, t) {
      var r, n, a;
      let o = String(t.key),
        i = String(t.code),
        l = co(e.config.document);
      this.setKeydownTarget(l);
      var u;
      ((u = (r = this.pressed)[(n = i)]) !== null && u !== void 0) ||
        (r[n] = { keyDef: t, unpreventedDefault: !1 }),
        Nc(o) && (this.modifiers[o] = !0);
      let c = e.dispatchUIEvent(l, 'keydown', { key: o, code: i });
      jc(o) &&
        !this.modifiers[o] &&
        ((this.modifiers[o] = !0), (this.modifierLockStart[o] = !0)),
        (a = this.pressed[i]).unpreventedDefault || (a.unpreventedDefault = c),
        c &&
          this.hasKeyPress(o) &&
          e.dispatchUIEvent(co(e.config.document), 'keypress', {
            key: o,
            code: i,
            charCode: t.key === 'Enter' ? 13 : String(t.key).charCodeAt(0),
          });
    }
    async keyup(e, t) {
      let r = String(t.key),
        n = String(t.code),
        a = this.pressed[n].unpreventedDefault;
      delete this.pressed[n],
        Nc(r) &&
          !Object.values(this.pressed).find((o) => o.keyDef.key === r) &&
          (this.modifiers[r] = !1),
        e.dispatchUIEvent(
          co(e.config.document),
          'keyup',
          { key: r, code: n },
          !a,
        ),
        jc(r) &&
          this.modifiers[r] &&
          (this.modifierLockStart[r]
            ? (this.modifierLockStart[r] = !1)
            : (this.modifiers[r] = !1));
    }
    setKeydownTarget(e) {
      e !== this.lastKeydownTarget && (this.carryChar = ''),
        (this.lastKeydownTarget = e);
    }
    hasKeyPress(e) {
      return (
        (e.length === 1 || e === 'Enter') &&
        !this.modifiers.Control &&
        !this.modifiers.Alt
      );
    }
    constructor(e) {
      tr(this, 'system', void 0),
        tr(this, 'modifiers', {
          Alt: !1,
          AltGraph: !1,
          CapsLock: !1,
          Control: !1,
          Fn: !1,
          FnLock: !1,
          Meta: !1,
          NumLock: !1,
          ScrollLock: !1,
          Shift: !1,
          Symbol: !1,
          SymbolLock: !1,
        }),
        tr(this, 'pressed', {}),
        tr(this, 'carryChar', ''),
        tr(this, 'lastKeydownTarget', void 0),
        tr(this, 'modifierLockStart', {}),
        (this.system = e);
    }
  },
  kx = [
    ...'0123456789'.split('').map((e) => ({ code: `Digit${e}`, key: e })),
    ...')!@#$%^&*('
      .split('')
      .map((e, t) => ({ code: `Digit${t}`, key: e, shiftKey: !0 })),
    ...'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .map((e) => ({ code: `Key${e.toUpperCase()}`, key: e })),
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      .split('')
      .map((e) => ({ code: `Key${e}`, key: e, shiftKey: !0 })),
    { code: 'Space', key: ' ' },
    { code: 'AltLeft', key: 'Alt', location: ze.LEFT },
    { code: 'AltRight', key: 'Alt', location: ze.RIGHT },
    { code: 'ShiftLeft', key: 'Shift', location: ze.LEFT },
    { code: 'ShiftRight', key: 'Shift', location: ze.RIGHT },
    { code: 'ControlLeft', key: 'Control', location: ze.LEFT },
    { code: 'ControlRight', key: 'Control', location: ze.RIGHT },
    { code: 'MetaLeft', key: 'Meta', location: ze.LEFT },
    { code: 'MetaRight', key: 'Meta', location: ze.RIGHT },
    { code: 'OSLeft', key: 'OS', location: ze.LEFT },
    { code: 'OSRight', key: 'OS', location: ze.RIGHT },
    { code: 'Tab', key: 'Tab' },
    { code: 'CapsLock', key: 'CapsLock' },
    { code: 'Backspace', key: 'Backspace' },
    { code: 'Enter', key: 'Enter' },
    { code: 'Escape', key: 'Escape' },
    { code: 'ArrowUp', key: 'ArrowUp' },
    { code: 'ArrowDown', key: 'ArrowDown' },
    { code: 'ArrowLeft', key: 'ArrowLeft' },
    { code: 'ArrowRight', key: 'ArrowRight' },
    { code: 'Home', key: 'Home' },
    { code: 'End', key: 'End' },
    { code: 'Delete', key: 'Delete' },
    { code: 'PageUp', key: 'PageUp' },
    { code: 'PageDown', key: 'PageDown' },
    { code: 'Fn', key: 'Fn' },
    { code: 'Symbol', key: 'Symbol' },
    { code: 'AltRight', key: 'AltGraph' },
  ],
  Dx = [
    { name: 'MouseLeft', pointerType: 'mouse', button: 'primary' },
    { name: 'MouseRight', pointerType: 'mouse', button: 'secondary' },
    { name: 'MouseMiddle', pointerType: 'mouse', button: 'auxiliary' },
    { name: 'TouchA', pointerType: 'touch' },
    { name: 'TouchB', pointerType: 'touch' },
    { name: 'TouchC', pointerType: 'touch' },
  ];
function Fx(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Tb = class {
    getButtons() {
      let e = 0;
      for (let t of Object.keys(this.pressed)) e |= 2 ** Number(t);
      return e;
    }
    down(e) {
      let t = gi(e.button);
      if (t in this.pressed) {
        this.pressed[t].push(e);
        return;
      }
      return (this.pressed[t] = [e]), t;
    }
    up(e) {
      let t = gi(e.button);
      if (
        t in this.pressed &&
        ((this.pressed[t] = this.pressed[t].filter((r) => r.name !== e.name)),
        this.pressed[t].length === 0)
      )
        return delete this.pressed[t], t;
    }
    constructor() {
      Fx(this, 'pressed', {});
    }
  },
  Ic = {
    primary: 0,
    secondary: 1,
    auxiliary: 2,
    back: 3,
    X1: 3,
    forward: 4,
    X2: 4,
  };
function gi(e = 0) {
  return e in Ic ? Ic[e] : Number(e);
}
var Lc = { 1: 2, 2: 1 };
function Bc(e) {
  return (e = gi(e)), e in Lc ? Lc[e] : e;
}
function Ux(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Hx = class {
  get countPressed() {
    return this.pressedKeys.size;
  }
  isPressed(e) {
    return this.pressedKeys.has(e.name);
  }
  addPressed(e) {
    return this.pressedKeys.add(e.name);
  }
  removePressed(e) {
    return this.pressedKeys.delete(e.name);
  }
  constructor() {
    Ux(this, 'pressedKeys', new Set());
  }
};
function Vr(e, t) {
  let r = [];
  for (let o = e; o; o = o.parentElement) r.push(o);
  let n = [];
  for (let o = t; o; o = o.parentElement) n.push(o);
  let a = 0;
  for (
    ;
    !(
      a >= r.length ||
      a >= n.length ||
      r[r.length - 1 - a] !== n[n.length - 1 - a]
    );
    a++
  );
  return [
    r.slice(0, r.length - a),
    n.slice(0, n.length - a),
    n.slice(n.length - a),
  ];
}
function yi({ target: e, node: t, offset: r }) {
  return it(e)
    ? { node: e, offset: r ?? lt(e).length }
    : t
      ? {
          node: t,
          offset:
            r ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length),
        }
      : Sb(e, r);
}
function Sb(e, t, r = !0) {
  let n = t === void 0 ? e.childNodes.length - 1 : 0,
    a = t === void 0 ? -1 : 1;
  for (
    ;
    t === void 0
      ? n >= (r ? Math.max(e.childNodes.length - 1, 0) : 0)
      : n <= e.childNodes.length;

  ) {
    if (t && n === e.childNodes.length)
      throw new Error('The given offset is out of bounds.');
    let o = e.childNodes.item(n),
      i = String(o.textContent);
    if (i.length)
      if (t !== void 0 && i.length < t) t -= i.length;
      else {
        if (o.nodeType === 1) return Sb(o, t, !1);
        if (o.nodeType === 3)
          return { node: o, offset: t ?? o.nodeValue.length };
      }
    n += a;
  }
  return { node: e, offset: e.childNodes.length };
}
function zx({ document: e, target: t, clickCount: r, node: n, offset: a }) {
  if (Hq(t)) return;
  let o = it(t),
    i = String(o ? lt(t) : t.textContent),
    [l, u] = n ? [a, a] : Vx(i, a, r);
  if (o)
    return (
      Mr(t, { anchorOffset: l ?? i.length, focusOffset: u ?? i.length }),
      { node: t, start: l ?? 0, end: u ?? i.length }
    );
  {
    let { node: c, offset: s } = yi({ target: t, node: n, offset: l }),
      { node: d, offset: p } = yi({ target: t, node: n, offset: u }),
      f = t.ownerDocument.createRange();
    try {
      f.setStart(c, s), f.setEnd(d, p);
    } catch {
      throw new Error('The given offset is out of bounds.');
    }
    let h = e.getSelection();
    return (
      h == null || h.removeAllRanges(),
      h == null || h.addRange(f.cloneRange()),
      f
    );
  }
}
function Vx(e, t, r) {
  if (r % 3 === 1 || e.length === 0) return [t, t];
  let n = t ?? e.length;
  return r % 3 === 2
    ? [
        n - e.substr(0, t).match(/(\w+|\s+|\W)?$/)[0].length,
        t === void 0 ? t : t + e.substr(t).match(/^(\w+|\s+|\W)?/)[0].length,
      ]
    : [
        n - e.substr(0, t).match(/[^\r\n]*$/)[0].length,
        t === void 0 ? t : t + e.substr(t).match(/^[^\r\n]*/)[0].length,
      ];
}
function Gx(e, { document: t, target: r, node: n, offset: a }) {
  let o = yi({ target: r, node: n, offset: a });
  if ('node' in e) {
    if (o.node === e.node) {
      let i = o.offset < e.start ? e.end : e.start,
        l = o.offset > e.end || o.offset < e.start ? o.offset : e.end;
      Mr(e.node, { anchorOffset: i, focusOffset: l });
    }
  } else {
    let i = e.cloneRange(),
      l = i.comparePoint(o.node, o.offset);
    l < 0 ? i.setStart(o.node, o.offset) : l > 0 && i.setEnd(o.node, o.offset);
    let u = t.getSelection();
    u == null || u.removeAllRanges(), u == null || u.addRange(i.cloneRange());
  }
}
function Pb(e, t) {
  var r, n, a, o, i, l, u, c;
  return (
    e.target !== t.target ||
    ((r = e.coords) === null || r === void 0 ? void 0 : r.x) !==
      ((n = t.coords) === null || n === void 0 ? void 0 : n.y) ||
    ((a = e.coords) === null || a === void 0 ? void 0 : a.y) !==
      ((o = t.coords) === null || o === void 0 ? void 0 : o.y) ||
    ((i = e.caret) === null || i === void 0 ? void 0 : i.node) !==
      ((l = t.caret) === null || l === void 0 ? void 0 : l.node) ||
    ((u = e.caret) === null || u === void 0 ? void 0 : u.offset) !==
      ((c = t.caret) === null || c === void 0 ? void 0 : c.offset)
  );
}
function Dt(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Wx = class {
  move(e, t) {
    let r = this.position,
      n = this.getTarget(e);
    if (((this.position = t), !Pb(r, t))) return;
    let a = this.getTarget(e),
      o = this.getEventInit('mousemove'),
      [i, l] = Vr(n, a);
    return {
      leave: () => {
        n !== a &&
          (e.dispatchUIEvent(n, 'mouseout', o),
          i.forEach((u) => e.dispatchUIEvent(u, 'mouseleave', o)));
      },
      enter: () => {
        n !== a &&
          (e.dispatchUIEvent(a, 'mouseover', o),
          l.forEach((u) => e.dispatchUIEvent(u, 'mouseenter', o)));
      },
      move: () => {
        e.dispatchUIEvent(a, 'mousemove', o), this.modifySelecting(e);
      },
    };
  }
  down(e, t, r) {
    let n = this.buttons.down(t);
    if (n === void 0) return;
    let a = this.getTarget(e);
    this.buttonDownTarget[n] = a;
    let o = vt(a),
      i = this.getEventInit('mousedown', t.button);
    (o || e.dispatchUIEvent(a, 'mousedown', i)) &&
      (this.startSelecting(e, i.detail), jt(a)),
      !o &&
        Bc(t.button) === 2 &&
        e.dispatchUIEvent(
          a,
          'contextmenu',
          this.getEventInit('contextmenu', t.button, r),
        );
  }
  up(e, t, r) {
    let n = this.buttons.up(t);
    if (n === void 0) return;
    let a = this.getTarget(e);
    if (!vt(a)) {
      e.dispatchUIEvent(a, 'mouseup', this.getEventInit('mouseup', t.button)),
        this.endSelecting();
      let o = Vr(this.buttonDownTarget[n], a)[2][0];
      if (o) {
        let i = this.getEventInit('click', t.button, r);
        i.detail &&
          (e.dispatchUIEvent(o, i.button === 0 ? 'click' : 'auxclick', i),
          i.button === 0 &&
            i.detail === 2 &&
            e.dispatchUIEvent(o, 'dblclick', {
              ...this.getEventInit('dblclick', t.button),
              detail: i.detail,
            }));
      }
    }
  }
  resetClickCount() {
    this.clickCount.reset();
  }
  getEventInit(e, t, r) {
    let n = { ...this.position.coords };
    return (
      r &&
        ((n.pointerId = r.pointerId),
        (n.pointerType = r.pointerType),
        (n.isPrimary = r.isPrimary)),
      (n.button = Bc(t)),
      (n.buttons = this.buttons.getButtons()),
      e === 'mousedown'
        ? (n.detail = this.clickCount.getOnDown(n.button))
        : e === 'mouseup'
          ? (n.detail = this.clickCount.getOnUp(n.button))
          : (e === 'click' || e === 'auxclick') &&
            (n.detail = this.clickCount.incOnClick(n.button)),
      n
    );
  }
  getTarget(e) {
    var t;
    return (t = this.position.target) !== null && t !== void 0
      ? t
      : e.config.document.body;
  }
  startSelecting(e, t) {
    var r, n;
    this.selecting = zx({
      document: e.config.document,
      target: this.getTarget(e),
      node:
        (r = this.position.caret) === null || r === void 0 ? void 0 : r.node,
      offset:
        (n = this.position.caret) === null || n === void 0 ? void 0 : n.offset,
      clickCount: t,
    });
  }
  modifySelecting(e) {
    var t, r;
    this.selecting &&
      Gx(this.selecting, {
        document: e.config.document,
        target: this.getTarget(e),
        node:
          (t = this.position.caret) === null || t === void 0 ? void 0 : t.node,
        offset:
          (r = this.position.caret) === null || r === void 0
            ? void 0
            : r.offset,
      });
  }
  endSelecting() {
    this.selecting = void 0;
  }
  constructor() {
    Dt(this, 'position', {}),
      Dt(this, 'buttons', new Tb()),
      Dt(this, 'selecting', void 0),
      Dt(this, 'buttonDownTarget', {}),
      Dt(
        this,
        'clickCount',
        new (class {
          incOnClick(e) {
            let t = this.down[e] === void 0 ? void 0 : Number(this.down[e]) + 1;
            return (
              (this.count =
                this.count[e] === void 0
                  ? {}
                  : { [e]: Number(this.count[e]) + 1 }),
              t
            );
          }
          getOnDown(e) {
            var t;
            this.down = {
              [e]: (t = this.count[e]) !== null && t !== void 0 ? t : 0,
            };
            var r;
            return (
              (this.count = {
                [e]: (r = this.count[e]) !== null && r !== void 0 ? r : 0,
              }),
              Number(this.count[e]) + 1
            );
          }
          getOnUp(e) {
            return this.down[e] === void 0 ? void 0 : Number(this.down[e]) + 1;
          }
          reset() {
            this.count = {};
          }
          constructor() {
            Dt(this, 'down', {}), Dt(this, 'count', {});
          }
        })(),
      );
  }
};
function oa(e, t) {
  var r;
  return (
    ((r = Ob(e, t)) === null || r === void 0 ? void 0 : r.pointerEvents) !==
    'none'
  );
}
function Kx(e) {
  let t = ot(e);
  for (let r = e, n = []; r != null && r.ownerDocument; r = r.parentElement) {
    n.push(r);
    let a = t.getComputedStyle(r).pointerEvents;
    if (a && !['inherit', 'unset'].includes(a))
      return { pointerEvents: a, tree: n };
  }
}
var kc = Symbol('Last check for pointer-events');
function Ob(e, t) {
  let r = t[kc];
  if (
    !(
      e.config.pointerEventsCheck !== fr.Never &&
      (!r ||
        (Dc(e.config.pointerEventsCheck, fr.EachApiCall) &&
          r[Ne.Call] !== Pn(e, Ne.Call)) ||
        (Dc(e.config.pointerEventsCheck, fr.EachTrigger) &&
          r[Ne.Trigger] !== Pn(e, Ne.Trigger)))
    )
  )
    return r == null ? void 0 : r.result;
  let n = Kx(t);
  return (
    (t[kc] = {
      [Ne.Call]: Pn(e, Ne.Call),
      [Ne.Trigger]: Pn(e, Ne.Trigger),
      result: n,
    }),
    n
  );
}
function kr(e, t) {
  let r = Ob(e, t);
  if ((r == null ? void 0 : r.pointerEvents) === 'none')
    throw new Error(
      [
        `Unable to perform pointer interaction as the element ${r.tree.length > 1 ? 'inherits' : 'has'} \`pointer-events: none\`:`,
        '',
        Yx(r.tree),
      ].join(`
`),
    );
}
function Yx(e) {
  return e
    .reverse()
    .map((t, r) =>
      [
        ''.padEnd(r),
        t.tagName,
        t.id && `#${t.id}`,
        t.hasAttribute('data-testid') &&
          `(testId=${t.getAttribute('data-testid')})`,
        Jx(t),
        e.length > 1 &&
          r === 0 &&
          '  <-- This element declared `pointer-events: none`',
        e.length > 1 &&
          r === e.length - 1 &&
          '  <-- Asserted pointer events here',
      ]
        .filter(Boolean)
        .join(''),
    ).join(`
`);
}
function Jx(e) {
  var t;
  let r;
  if (e.hasAttribute('aria-label')) r = e.getAttribute('aria-label');
  else if (e.hasAttribute('aria-labelledby')) {
    var n, a;
    r =
      (a = e.ownerDocument.getElementById(
        e.getAttribute('aria-labelledby'),
      )) === null ||
      a === void 0 ||
      (n = a.textContent) === null ||
      n === void 0
        ? void 0
        : n.trim();
  } else if (
    Y(e, [
      'button',
      'input',
      'meter',
      'output',
      'progress',
      'select',
      'textarea',
    ]) &&
    !((t = e.labels) === null || t === void 0) &&
    t.length
  )
    r = Array.from(e.labels)
      .map((i) => {
        var l;
        return (l = i.textContent) === null || l === void 0 ? void 0 : l.trim();
      })
      .join('|');
  else if (Y(e, 'button')) {
    var o;
    r = (o = e.textContent) === null || o === void 0 ? void 0 : o.trim();
  }
  return (
    (r = r == null ? void 0 : r.replace(/\n/g, '  ')),
    Number(r == null ? void 0 : r.length) > 30 &&
      (r = `${r == null ? void 0 : r.substring(0, 29)}…`),
    r ? `(label=${r})` : ''
  );
}
function Dc(e, t) {
  return (e & t) > 0;
}
function St(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Fc = class {
  init(e, t) {
    this.position = t;
    let r = this.getTarget(e),
      [, n] = Vr(null, r),
      a = this.getEventInit();
    return (
      kr(e, r),
      e.dispatchUIEvent(r, 'pointerover', a),
      n.forEach((o) => e.dispatchUIEvent(o, 'pointerenter', a)),
      this
    );
  }
  move(e, t) {
    let r = this.position,
      n = this.getTarget(e);
    if (((this.position = t), !Pb(r, t))) return;
    let a = this.getTarget(e),
      o = this.getEventInit(),
      [i, l] = Vr(n, a);
    return {
      leave: () => {
        oa(e, n) &&
          n !== a &&
          (e.dispatchUIEvent(n, 'pointerout', o),
          i.forEach((u) => e.dispatchUIEvent(u, 'pointerleave', o)));
      },
      enter: () => {
        kr(e, a),
          n !== a &&
            (e.dispatchUIEvent(a, 'pointerover', o),
            l.forEach((u) => e.dispatchUIEvent(u, 'pointerenter', o)));
      },
      move: () => {
        e.dispatchUIEvent(a, 'pointermove', o);
      },
    };
  }
  down(e, t) {
    if (this.isDown) return;
    let r = this.getTarget(e);
    kr(e, r),
      (this.isDown = !0),
      (this.isPrevented = !e.dispatchUIEvent(
        r,
        'pointerdown',
        this.getEventInit(),
      ));
  }
  up(e, t) {
    if (!this.isDown) return;
    let r = this.getTarget(e);
    kr(e, r),
      (this.isDown = !1),
      e.dispatchUIEvent(r, 'pointerup', this.getEventInit());
  }
  release(e) {
    let t = this.getTarget(e),
      [r] = Vr(t, null),
      n = this.getEventInit();
    oa(e, t) &&
      (e.dispatchUIEvent(t, 'pointerout', n),
      r.forEach((a) => e.dispatchUIEvent(a, 'pointerleave', n))),
      (this.isCancelled = !0);
  }
  getTarget(e) {
    var t;
    return (t = this.position.target) !== null && t !== void 0
      ? t
      : e.config.document.body;
  }
  getEventInit() {
    return {
      ...this.position.coords,
      pointerId: this.pointerId,
      pointerType: this.pointerType,
      isPrimary: this.isPrimary,
    };
  }
  constructor({ pointerId: e, pointerType: t, isPrimary: r }) {
    St(this, 'pointerId', void 0),
      St(this, 'pointerType', void 0),
      St(this, 'isPrimary', void 0),
      St(this, 'isMultitouch', !1),
      St(this, 'isCancelled', !1),
      St(this, 'isDown', !1),
      St(this, 'isPrevented', !1),
      St(this, 'position', {}),
      (this.pointerId = e),
      (this.pointerType = t),
      (this.isPrimary = r),
      (this.isMultitouch = !r);
  }
};
function Pt(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Xx = class {
  isKeyPressed(e) {
    return this.devices.get(e.pointerType).isPressed(e);
  }
  async press(e, t, r) {
    let n = this.getPointerName(t),
      a =
        t.pointerType === 'touch'
          ? this.pointers.new(n, t).init(e, r)
          : this.pointers.get(n);
    (a.position = r),
      a.pointerType !== 'touch' && (this.mouse.position = r),
      this.devices.get(t.pointerType).addPressed(t),
      this.buttons.down(t),
      a.down(e, t),
      a.pointerType !== 'touch' && !a.isPrevented && this.mouse.down(e, t, a);
  }
  async move(e, t, r) {
    let n = this.pointers.get(t),
      a = n.move(e, r),
      o =
        n.pointerType === 'touch' || (n.isPrevented && n.isDown)
          ? void 0
          : this.mouse.move(e, r);
    a == null || a.leave(),
      o == null || o.leave(),
      a == null || a.enter(),
      o == null || o.enter(),
      a == null || a.move(),
      o == null || o.move();
  }
  async release(e, t, r) {
    let n = this.devices.get(t.pointerType);
    n.removePressed(t), this.buttons.up(t);
    let a = this.pointers.get(this.getPointerName(t));
    if (
      ((a.position = r),
      a.pointerType !== 'touch' && (this.mouse.position = r),
      n.countPressed === 0 && a.up(e, t),
      a.pointerType === 'touch' && a.release(e),
      !a.isPrevented)
    ) {
      if (a.pointerType === 'touch' && !a.isMultitouch) {
        let o = this.mouse.move(e, a.position);
        o == null || o.leave(),
          o == null || o.enter(),
          o == null || o.move(),
          this.mouse.down(e, t, a);
      }
      if (!a.isMultitouch) {
        let o = this.mouse.move(e, a.position);
        o == null || o.leave(),
          o == null || o.enter(),
          o == null || o.move(),
          this.mouse.up(e, t, a);
      }
    }
  }
  getPointerName(e) {
    return e.pointerType === 'touch' ? e.name : e.pointerType;
  }
  getPreviousPosition(e) {
    return this.pointers.has(e) ? this.pointers.get(e).position : void 0;
  }
  resetClickCount() {
    this.mouse.resetClickCount();
  }
  getMouseTarget(e) {
    var t;
    return (t = this.mouse.position.target) !== null && t !== void 0
      ? t
      : e.config.document.body;
  }
  setMousePosition(e) {
    (this.mouse.position = e), (this.pointers.get('mouse').position = e);
  }
  constructor(e) {
    Pt(this, 'system', void 0),
      Pt(this, 'mouse', void 0),
      Pt(this, 'buttons', void 0),
      Pt(
        this,
        'devices',
        new (class {
          get(t) {
            var r, n, a;
            return (
              ((a = (r = this.registry)[(n = t)]) !== null && a !== void 0) ||
                (r[n] = new Hx()),
              this.registry[t]
            );
          }
          constructor() {
            Pt(this, 'registry', {});
          }
        })(),
      ),
      Pt(
        this,
        'pointers',
        new (class {
          new(t, r) {
            let n =
              r.pointerType !== 'touch' ||
              !Object.values(this.registry).some(
                (a) => a.pointerType === 'touch' && !a.isCancelled,
              );
            return (
              n ||
                Object.values(this.registry).forEach((a) => {
                  a.pointerType === r.pointerType &&
                    !a.isCancelled &&
                    (a.isMultitouch = !0);
                }),
              (this.registry[t] = new Fc({
                pointerId: this.nextId++,
                pointerType: r.pointerType,
                isPrimary: n,
              })),
              this.registry[t]
            );
          }
          get(t) {
            if (!this.has(t))
              throw new Error(
                `Trying to access pointer "${t}" which does not exist.`,
              );
            return this.registry[t];
          }
          has(t) {
            return t in this.registry;
          }
          constructor() {
            Pt(this, 'registry', {
              mouse: new Fc({
                pointerId: 1,
                pointerType: 'mouse',
                isPrimary: !0,
              }),
            }),
              Pt(this, 'nextId', 2);
          }
        })(),
      ),
      (this.system = e),
      (this.buttons = new Tb()),
      (this.mouse = new Wx());
  }
};
function Uc(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Ab = class {
  getUIEventModifiers() {
    return {
      altKey: this.keyboard.modifiers.Alt,
      ctrlKey: this.keyboard.modifiers.Control,
      metaKey: this.keyboard.modifiers.Meta,
      shiftKey: this.keyboard.modifiers.Shift,
      modifierAltGraph: this.keyboard.modifiers.AltGraph,
      modifierCapsLock: this.keyboard.modifiers.CapsLock,
      modifierFn: this.keyboard.modifiers.Fn,
      modifierFnLock: this.keyboard.modifiers.FnLock,
      modifierNumLock: this.keyboard.modifiers.NumLock,
      modifierScrollLock: this.keyboard.modifiers.ScrollLock,
      modifierSymbol: this.keyboard.modifiers.Symbol,
      modifierSymbolLock: this.keyboard.modifiers.SymbolLock,
    };
  }
  constructor() {
    Uc(this, 'keyboard', new Bx(this)), Uc(this, 'pointer', new Xx(this));
  }
};
async function Qx(e) {
  let t = [];
  return (
    this.config.skipHover || t.push({ target: e }),
    t.push({ keys: '[MouseLeft]', target: e }),
    this.pointer(t)
  );
}
async function Zx(e) {
  return this.pointer([{ target: e }, '[MouseLeft][MouseLeft]']);
}
async function eM(e) {
  return this.pointer([{ target: e }, '[MouseLeft][MouseLeft][MouseLeft]']);
}
async function tM(e) {
  return this.pointer({ target: e });
}
async function rM(e) {
  return (
    kr(this, this.system.pointer.getMouseTarget(this)),
    this.pointer({ target: e.ownerDocument.body })
  );
}
async function nM({ shift: e } = {}) {
  return this.keyboard(
    e === !0
      ? '{Shift>}{Tab}{/Shift}'
      : e === !1
        ? '[/ShiftLeft][/ShiftRight]{Tab}'
        : '{Tab}',
  );
}
function aM(e, t) {
  let r = [];
  do {
    let {
      type: a,
      descriptor: o,
      consumedLength: i,
      releasePrevious: l,
      releaseSelf: u = !0,
      repeat: c,
    } = cb(t, 'keyboard');
    var n;
    let s =
      (n = e.find((d) => {
        if (a === '[') {
          var p;
          return (
            ((p = d.code) === null || p === void 0
              ? void 0
              : p.toLowerCase()) === o.toLowerCase()
          );
        } else if (a === '{') {
          var f;
          return (
            ((f = d.key) === null || f === void 0
              ? void 0
              : f.toLowerCase()) === o.toLowerCase()
          );
        }
        return d.key === o;
      })) !== null && n !== void 0
        ? n
        : { key: 'Unknown', code: 'Unknown', [a === '[' ? 'code' : 'key']: o };
    r.push({ keyDef: s, releasePrevious: l, releaseSelf: u, repeat: c }),
      (t = t.slice(i));
  } while (t);
  return r;
}
async function oM(e) {
  let t = aM(this.config.keyboardMap, e);
  for (let r = 0; r < t.length; r++)
    await Or(this.config), await iM(this, t[r]);
}
async function iM(
  e,
  { keyDef: t, releasePrevious: r, releaseSelf: n, repeat: a },
) {
  let { system: o } = e;
  if ((o.keyboard.isKeyPressed(t) && (await o.keyboard.keyup(e, t)), !r)) {
    for (let i = 1; i <= a; i++)
      await o.keyboard.keydown(e, t), i < a && (await Or(e.config));
    n && (await o.keyboard.keyup(e, t));
  }
}
async function lM(e) {
  for (let t of e.system.keyboard.getPressedKeys())
    await e.system.keyboard.keyup(e, t);
}
function qb(e) {
  let t = it(e)
      ? { 'text/plain': sM(e) }
      : { 'text/plain': String(e.ownerDocument.getSelection()) },
    r = Yl(ot(e));
  for (let n in t) t[n] && r.setData(n, t[n]);
  return r;
}
function sM(e) {
  let t = fn(e);
  return lt(e).substring(t.startOffset, t.endOffset);
}
async function uM() {
  let e = this.config.document;
  var t;
  let r = (t = e.activeElement) !== null && t !== void 0 ? t : e.body,
    n = qb(r);
  if (n.items.length !== 0)
    return (
      this.dispatchUIEvent(r, 'copy', { clipboardData: n }) &&
        this.config.writeToClipboard &&
        (await lb(e, n)),
      n
    );
}
async function cM() {
  let e = this.config.document;
  var t;
  let r = (t = e.activeElement) !== null && t !== void 0 ? t : e.body,
    n = qb(r);
  if (n.items.length !== 0)
    return (
      this.dispatchUIEvent(r, 'cut', { clipboardData: n }) &&
        this.config.writeToClipboard &&
        (await lb(r.ownerDocument, n)),
      n
    );
}
async function dM(e) {
  let t = this.config.document;
  var r;
  let n = (r = t.activeElement) !== null && r !== void 0 ? r : t.body;
  var a;
  let o =
    (a = typeof e == 'string' ? fM(t, e) : e) !== null && a !== void 0
      ? a
      : await Nq(t).catch(() => {
          throw new Error(
            '`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.',
          );
        });
  this.dispatchUIEvent(n, 'paste', { clipboardData: o });
}
function fM(e, t) {
  let r = Yl(ot(e));
  return r.setData('text', t), r;
}
function Hc(e, t) {
  let r = [];
  do {
    let {
        descriptor: n,
        consumedLength: a,
        releasePrevious: o,
        releaseSelf: i = !0,
      } = cb(t, 'pointer'),
      l = e.find((u) => u.name === n);
    l && r.push({ keyDef: l, releasePrevious: o, releaseSelf: i }),
      (t = t.slice(a));
  } while (t);
  return r;
}
async function pM(e) {
  let { pointerMap: t } = this.config,
    r = [];
  (Array.isArray(e) ? e : [e]).forEach((n) => {
    typeof n == 'string'
      ? r.push(...Hc(t, n))
      : 'keys' in n
        ? r.push(...Hc(t, n.keys).map((a) => ({ ...n, ...a })))
        : r.push(n);
  });
  for (let n = 0; n < r.length; n++)
    await Or(this.config), await hM(this, r[n]);
  this.system.pointer.resetClickCount();
}
async function hM(e, t) {
  var r, n;
  let a =
      'pointerName' in t && t.pointerName
        ? t.pointerName
        : 'keyDef' in t
          ? e.system.pointer.getPointerName(t.keyDef)
          : 'mouse',
    o = e.system.pointer.getPreviousPosition(a);
  var i, l, u, c;
  let s = {
    target: (i = t.target) !== null && i !== void 0 ? i : mM(e, o),
    coords:
      (l = t.coords) !== null && l !== void 0
        ? l
        : o == null
          ? void 0
          : o.coords,
    caret: {
      node:
        (u = t.node) !== null && u !== void 0
          ? u
          : zc(t) || o == null || (r = o.caret) === null || r === void 0
            ? void 0
            : r.node,
      offset:
        (c = t.offset) !== null && c !== void 0
          ? c
          : zc(t) || o == null || (n = o.caret) === null || n === void 0
            ? void 0
            : n.offset,
    },
  };
  'keyDef' in t
    ? (e.system.pointer.isKeyPressed(t.keyDef) &&
        (Lr(e, Ne.Trigger), await e.system.pointer.release(e, t.keyDef, s)),
      t.releasePrevious ||
        (Lr(e, Ne.Trigger),
        await e.system.pointer.press(e, t.keyDef, s),
        t.releaseSelf &&
          (Lr(e, Ne.Trigger), await e.system.pointer.release(e, t.keyDef, s))))
    : (Lr(e, Ne.Trigger), await e.system.pointer.move(e, a, s));
}
function zc(e) {
  var t, r;
  return !!((r = (t = e.target) !== null && t !== void 0 ? t : e.node) !==
    null && r !== void 0
    ? r
    : e.offset !== void 0);
}
function mM(e, t) {
  if (!t)
    throw new Error(
      'This pointer has no previous position. Provide a target property!',
    );
  var r;
  return (r = t.target) !== null && r !== void 0 ? r : e.config.document.body;
}
async function bM(e) {
  if (!Rr(e) || vt(e))
    throw new Error('clear()` is only supported on editable elements.');
  if ((jt(e), e.ownerDocument.activeElement !== e))
    throw new Error('The element to be cleared could not be focused.');
  if ((vb(e), !mx(e)))
    throw new Error('The element content to be cleared could not be selected.');
  Pr(this, e, '', 'deleteContentBackward');
}
async function gM(e, t) {
  return xb.call(this, !0, e, t);
}
async function yM(e, t) {
  return xb.call(this, !1, e, t);
}
async function xb(e, t, r) {
  if (!e && !t.multiple)
    throw Q().getElementError(
      'Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.',
      t,
    );
  let n = Array.isArray(r) ? r : [r],
    a = Array.from(t.querySelectorAll('option, [role="option"]')),
    o = n
      .map((l) => {
        if (typeof l != 'string' && a.includes(l)) return l;
        {
          let u = a.find((c) => c.value === l || c.innerHTML === l);
          if (u) return u;
          throw Q().getElementError(
            `Value "${String(l)}" not found in options`,
            t,
          );
        }
      })
      .filter((l) => !vt(l));
  if (vt(t) || !o.length) return;
  let i = (l) => {
    (l.selected = e),
      this.dispatchUIEvent(t, 'input', {
        bubbles: !0,
        cancelable: !1,
        composed: !0,
      }),
      this.dispatchUIEvent(t, 'change');
  };
  if (Y(t, 'select'))
    if (t.multiple)
      for (let l of o) {
        let u = this.config.pointerEventsCheck === 0 ? !0 : oa(this, l);
        u &&
          (this.dispatchUIEvent(l, 'pointerover'),
          this.dispatchUIEvent(t, 'pointerenter'),
          this.dispatchUIEvent(l, 'mouseover'),
          this.dispatchUIEvent(t, 'mouseenter'),
          this.dispatchUIEvent(l, 'pointermove'),
          this.dispatchUIEvent(l, 'mousemove'),
          this.dispatchUIEvent(l, 'pointerdown'),
          this.dispatchUIEvent(l, 'mousedown')),
          jt(t),
          u &&
            (this.dispatchUIEvent(l, 'pointerup'),
            this.dispatchUIEvent(l, 'mouseup')),
          i(l),
          u && this.dispatchUIEvent(l, 'click'),
          await Or(this.config);
      }
    else if (o.length === 1) {
      let l = this.config.pointerEventsCheck === 0 ? !0 : oa(this, t);
      l ? await this.click(t) : jt(t),
        i(o[0]),
        l &&
          (this.dispatchUIEvent(t, 'pointerover'),
          this.dispatchUIEvent(t, 'pointerenter'),
          this.dispatchUIEvent(t, 'mouseover'),
          this.dispatchUIEvent(t, 'mouseenter'),
          this.dispatchUIEvent(t, 'pointerup'),
          this.dispatchUIEvent(t, 'mouseup'),
          this.dispatchUIEvent(t, 'click')),
        await Or(this.config);
    } else
      throw Q().getElementError(
        'Cannot select multiple options on a non-multiple select',
        t,
      );
  else if (t.getAttribute('role') === 'listbox')
    for (let l of o) await this.click(l), await this.unhover(l);
  else
    throw Q().getElementError(
      'Cannot select options on elements that are neither select nor listbox elements',
      t,
    );
}
async function vM(
  e,
  t,
  {
    skipClick: r = this.config.skipClick,
    skipAutoClose: n = this.config.skipAutoClose,
    initialSelectionStart: a,
    initialSelectionEnd: o,
  } = {},
) {
  e.disabled ||
    (r || (await this.click(e)),
    a !== void 0 && Br(e, a, o ?? a),
    await this.keyboard(t),
    n || (await lM(this)));
}
var Vc = Symbol('files and value properties are mocked');
function ho(e, t, r) {
  r ? Object.defineProperty(e, t, r) : delete e[t];
}
function _M(e, t) {
  var r;
  (r = e[Vc]) === null || r === void 0 || r.restore();
  let n = Object.getOwnPropertyDescriptor(e, 'type'),
    a = Object.getOwnPropertyDescriptor(e, 'value'),
    o = Object.getOwnPropertyDescriptor(e, 'files');
  function i() {
    ho(e, 'type', n), ho(e, 'value', a), ho(e, 'files', o);
  }
  (e[Vc] = { restore: i }),
    Object.defineProperties(e, {
      files: { configurable: !0, get: () => t },
      value: {
        configurable: !0,
        get: () => (t.length ? `C:\\fakepath\\${t[0].name}` : ''),
        set(l) {
          if (l === '') i();
          else {
            var u;
            a == null || (u = a.set) === null || u === void 0 || u.call(e, l);
          }
        },
      },
      type: {
        configurable: !0,
        get: () => 'file',
        set(l) {
          l !== 'file' && (i(), (e.type = l));
        },
      },
    });
}
async function EM(e, t) {
  let r = Y(e, 'label') ? e.control : e;
  if (!r || !Y(r, 'input', { type: 'file' }))
    throw new TypeError(
      `The ${r === e ? 'given' : 'associated'} ${r == null ? void 0 : r.tagName} element does not accept file uploads`,
    );
  if (vt(e)) return;
  let n = (Array.isArray(t) ? t : [t])
      .filter((o) => !this.config.applyAccept || wM(o, r.accept))
      .slice(0, r.multiple ? void 0 : 1),
    a = () => {
      var o;
      (n.length ===
        ((o = r.files) === null || o === void 0 ? void 0 : o.length) &&
        n.every((i, l) => {
          var u;
          return (
            i === ((u = r.files) === null || u === void 0 ? void 0 : u.item(l))
          );
        })) ||
        (_M(r, Kl(ot(e), n)),
        this.dispatchUIEvent(r, 'input'),
        this.dispatchUIEvent(r, 'change'));
    };
  r.addEventListener('fileDialog', a),
    await this.click(e),
    r.removeEventListener('fileDialog', a);
}
function wM(e, t) {
  if (!t) return !0;
  let r = ['audio/*', 'image/*', 'video/*'];
  return t
    .split(',')
    .some((n) =>
      n.startsWith('.')
        ? e.name.endsWith(n)
        : r.includes(n)
          ? e.type.startsWith(n.substr(0, n.length - 1))
          : e.type === n,
    );
}
var Gc = {
  click: Qx,
  dblClick: Zx,
  tripleClick: eM,
  hover: tM,
  unhover: rM,
  tab: nM,
  keyboard: oM,
  copy: uM,
  cut: cM,
  paste: dM,
  pointer: pM,
  clear: bM,
  deselectOptions: yM,
  selectOptions: gM,
  type: vM,
  upload: EM,
};
function CM(e) {
  return Q().asyncWrapper(e);
}
var Mb = {
    applyAccept: !0,
    autoModify: !0,
    delay: 0,
    document: globalThis.document,
    keyboardMap: kx,
    pointerMap: Dx,
    pointerEventsCheck: fr.EachApiCall,
    skipAutoClose: !1,
    skipClick: !1,
    skipHover: !1,
    writeToClipboard: !1,
    advanceTimers: () => Promise.resolve(),
  },
  RM = { ...Mb, writeToClipboard: !0 };
function $b(e = {}, t = RM, r) {
  let n = OM(e, r, t);
  return { ...t, ...e, document: n };
}
function TM(e = {}) {
  let t = $b(e);
  Rb(t.document);
  var r;
  let n =
    (r = t.document.defaultView) !== null && r !== void 0
      ? r
      : globalThis.window;
  return xq(n), es(t).api;
}
function Me({ keyboardState: e, pointerState: t, ...r } = {}, n) {
  let a = $b(r, Mb, n);
  Rb(a.document);
  var o;
  let i = (o = t ?? e) !== null && o !== void 0 ? o : new Ab();
  return { api: es(a, i).api, system: i };
}
function SM(e) {
  return es({ ...this.config, ...e }, this.system).api;
}
function PM(e, t) {
  function r(...n) {
    return (
      Lr(e, Ne.Call),
      CM(() => t.apply(e, n).then(async (a) => (await Or(e.config), a)))
    );
  }
  return Object.defineProperty(r, 'name', { get: () => t.name }), r;
}
function es(e, t = new Ab()) {
  let r = {};
  return (
    Object.assign(r, {
      config: e,
      dispatchEvent: Cb.bind(r),
      dispatchUIEvent: Ox.bind(r),
      system: t,
      levelRefs: {},
      ...Gc,
    }),
    {
      instance: r,
      api: {
        ...Object.fromEntries(
          Object.entries(Gc).map(([n, a]) => [n, PM(r, a)]),
        ),
        setup: SM.bind(r),
      },
    }
  );
}
function OM(e, t, r) {
  var n, a;
  return (a = (n = e.document) !== null && n !== void 0 ? n : t && Nx(t)) !==
    null && a !== void 0
    ? a
    : r.document;
}
var Nb = {};
$i(Nb, {
  clear: () => AM,
  click: () => qM,
  copy: () => xM,
  cut: () => MM,
  dblClick: () => $M,
  deselectOptions: () => NM,
  hover: () => jM,
  keyboard: () => IM,
  paste: () => BM,
  pointer: () => LM,
  selectOptions: () => kM,
  tab: () => zM,
  tripleClick: () => DM,
  type: () => FM,
  unhover: () => UM,
  upload: () => HM,
});
function AM(e) {
  return Me().api.clear(e);
}
function qM(e, t = {}) {
  return Me(t, e).api.click(e);
}
function xM(e = {}) {
  return Me(e).api.copy();
}
function MM(e = {}) {
  return Me(e).api.cut();
}
function $M(e, t = {}) {
  return Me(t).api.dblClick(e);
}
function NM(e, t, r = {}) {
  return Me(r).api.deselectOptions(e, t);
}
function jM(e, t = {}) {
  return Me(t).api.hover(e);
}
async function IM(e, t = {}) {
  let { api: r, system: n } = Me(t);
  return r.keyboard(e).then(() => n);
}
async function LM(e, t = {}) {
  let { api: r, system: n } = Me(t);
  return r.pointer(e).then(() => n);
}
function BM(e, t) {
  return Me(t).api.paste(e);
}
function kM(e, t, r = {}) {
  return Me(r).api.selectOptions(e, t);
}
function DM(e, t = {}) {
  return Me(t).api.tripleClick(e);
}
function FM(e, t, r = {}) {
  return Me(r, e).api.type(e, t, r);
}
function UM(e, t = {}) {
  let { api: r, system: n } = Me(t);
  return n.pointer.setMousePosition({ target: e }), r.unhover(e);
}
function HM(e, t, r = {}) {
  return Me(r).api.upload(e, t);
}
function zM(e = {}) {
  return Me().api.tab(e);
}
var VM = { ...Nb, setup: TM };
function GM(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = Array.from(typeof e == 'string' ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '');
  var a = n.reduce(function (l, u) {
    var c = u.match(/\n([\t ]+|(?!\s).)/g);
    return c
      ? l.concat(
          c.map(function (s) {
            var d, p;
            return (p =
              (d = s.match(/[\t ]/g)) === null || d === void 0
                ? void 0
                : d.length) !== null && p !== void 0
              ? p
              : 0;
          }),
        )
      : l;
  }, []);
  if (a.length) {
    var o = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, a) +
        '}',
      'g',
    );
    n = n.map(function (l) {
      return l.replace(
        o,
        `
`,
      );
    });
  }
  n[0] = n[0].replace(/^\r?\n/, '');
  var i = n[0];
  return (
    t.forEach(function (l, u) {
      var c = i.match(/(?:^|\n)( *)$/),
        s = c ? c[1] : '',
        d = l;
      typeof l == 'string' &&
        l.includes(`
`) &&
        (d = String(l)
          .split(
            `
`,
          )
          .map(function (p, f) {
            return f === 0 ? p : '' + s + p;
          }).join(`
`)),
        (i += d + n[u + 1]);
    }),
    i
  );
}
var WM = GM,
  vi = xi(
    { ...qh },
    {
      intercept: (e, t) =>
        t[0] === 'fireEvent' || e.startsWith('find') || e.startsWith('waitFor'),
    },
  );
vi.screen = new Proxy(vi.screen, {
  get(e, t, r) {
    return (
      c_.warn(WM`
          You are using Testing Library's \`screen\` object. Use \`within(canvasElement)\` instead.
          More info: https://storybook.js.org/docs/react/essentials/interactions
        `),
      Reflect.get(e, t, r)
    );
  },
});
var {
    buildQueries: n$,
    configure: a$,
    createEvent: o$,
    fireEvent: i$,
    findAllByAltText: l$,
    findAllByDisplayValue: s$,
    findAllByLabelText: u$,
    findAllByPlaceholderText: c$,
    findAllByRole: d$,
    findAllByTestId: f$,
    findAllByText: p$,
    findAllByTitle: h$,
    findByAltText: m$,
    findByDisplayValue: b$,
    findByLabelText: g$,
    findByPlaceholderText: y$,
    findByRole: v$,
    findByTestId: _$,
    findByText: E$,
    findByTitle: w$,
    getAllByAltText: C$,
    getAllByDisplayValue: R$,
    getAllByLabelText: T$,
    getAllByPlaceholderText: S$,
    getAllByRole: P$,
    getAllByTestId: O$,
    getAllByText: A$,
    getAllByTitle: q$,
    getByAltText: x$,
    getByDisplayValue: M$,
    getByLabelText: $$,
    getByPlaceholderText: N$,
    getByRole: j$,
    getByTestId: I$,
    getByText: L$,
    getByTitle: B$,
    getConfig: k$,
    getDefaultNormalizer: D$,
    getElementError: F$,
    getNodeText: U$,
    getQueriesForElement: H$,
    getRoles: z$,
    getSuggestedQuery: V$,
    isInaccessible: G$,
    logDOM: W$,
    logRoles: K$,
    prettyDOM: Y$,
    queries: J$,
    queryAllByAltText: X$,
    queryAllByAttribute: Q$,
    queryAllByDisplayValue: Z$,
    queryAllByLabelText: eN,
    queryAllByPlaceholderText: tN,
    queryAllByRole: rN,
    queryAllByTestId: nN,
    queryAllByText: aN,
    queryAllByTitle: oN,
    queryByAltText: iN,
    queryByAttribute: lN,
    queryByDisplayValue: sN,
    queryByLabelText: uN,
    queryByPlaceholderText: cN,
    queryByRole: dN,
    queryByTestId: fN,
    queryByText: pN,
    queryByTitle: hN,
    queryHelpers: mN,
    screen: bN,
    waitFor: gN,
    waitForElementToBeRemoved: yN,
    within: KM,
    prettyFormat: vN,
  } = vi,
  { userEvent: _N } = xi({ userEvent: VM }, { intercept: !0 }),
  { expect: EN } = xi(
    { expect: Ah },
    {
      getKeys: (e, t) => {
        let r = ['assert', '__methods', '__flags', '_obj'];
        if (e.constructor === P) {
          let n = Object.keys(Object.getPrototypeOf(e)).filter(
            (a) => !r.includes(a),
          );
          return t > 2 ? n : [...n, 'not'];
        }
        return Object.keys(e);
      },
      intercept: (e) => e !== 'expect',
    },
  ),
  YM = ({ parameters: e }) => {
    var t, r, n;
    ((t = e == null ? void 0 : e.test) == null ? void 0 : t.mockReset) === !0
      ? yO()
      : ((r = e == null ? void 0 : e.test) == null ? void 0 : r.clearMocks) ===
          !0
        ? gO()
        : ((n = e == null ? void 0 : e.test) == null
            ? void 0
            : n.restoreMocks) !== !1 && vO();
  },
  _i = (e, t = 0, r) => {
    var n;
    if (t > 5 || e == null) return e;
    if (vh(e)) return r && e.mockName(r), e;
    if (
      typeof e == 'function' &&
      'isAction' in e &&
      e.isAction &&
      !('implicit' in e && e.implicit)
    ) {
      let a = mO(e);
      return r && a.mockName(r), a;
    }
    if (Array.isArray(e)) return t++, e.map((a) => _i(a, t));
    if (typeof e == 'object' && e.constructor === Object) {
      t++;
      for (let [a, o] of Object.entries(e))
        (n = Object.getOwnPropertyDescriptor(e, a)) != null &&
          n.writable &&
          (e[a] = _i(o, t, a));
      return e;
    }
    return e;
  },
  JM = ({ initialArgs: e }) => {
    _i(e);
  },
  XM = (e) => {
    globalThis.HTMLElement &&
      e.canvasElement instanceof globalThis.HTMLElement &&
      (e.canvas = KM(e.canvasElement));
  };
Md.__STORYBOOK_TEST_LOADERS__ = [YM, JM, XM];
Md.__STORYBOOK_TEST_ON_MOCK_CALL__ = hO;
export { EN as e, mO as f, xi as i, _N as u, KM as w };
