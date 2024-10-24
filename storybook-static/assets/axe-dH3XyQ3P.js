import { g as HE, c as zE } from './_commonjsHelpers-Cpj98o6Y.js';
function UE(Tt, pr) {
  for (var y = 0; y < pr.length; y++) {
    const tt = pr[y];
    if (typeof tt != 'string' && !Array.isArray(tt)) {
      for (const k in tt)
        if (k !== 'default' && !(k in Tt)) {
          const v = Object.getOwnPropertyDescriptor(tt, k);
          v &&
            Object.defineProperty(
              Tt,
              k,
              v.get ? v : { enumerable: !0, get: () => tt[k] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(Tt, Symbol.toStringTag, { value: 'Module' }),
  );
}
var qi = { exports: {} };
/*! axe v4.7.0
 * Copyright (c) 2023 Deque Systems, Inc.
 *
 * Your use of this Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * This entire copyright notice must appear in every copy of this file you
 * distribute or in any file that contains substantial portions of this source
 * code.
 */ qi.exports;
(function (Tt) {
  (function pr(y) {
    var tt = y,
      k = y.document,
      v = v || {};
    (v.version = '4.7.0'),
      I(Tt) === 'object' &&
        Tt.exports &&
        typeof pr.toString == 'function' &&
        ((v.source =
          '(' +
          pr.toString() +
          ')(typeof window === "object" ? window : this);'),
        (Tt.exports = v)),
      typeof y.getComputedStyle == 'function' && (y.axe = v);
    function mr(A) {
      (this.name = 'SupportError'),
        (this.cause = A.cause),
        (this.message = '`'.concat(
          A.cause,
          '` - feature unsupported in your environment.',
        )),
        A.ruleId &&
          ((this.ruleId = A.ruleId),
          (this.message += ' Skipping '.concat(this.ruleId, ' rule.'))),
        (this.stack = new Error().stack);
    }
    (mr.prototype = Object.create(Error.prototype)),
      (mr.prototype.constructor = mr);
    var Ec = ['node'],
      Ac = ['variant'],
      Fc = ['matches'],
      Cc = ['chromium'],
      Tc = ['noImplicit'],
      kc = ['noPresentational'],
      Rc = ['node'],
      Sc = ['nodes'],
      Oc = ['node'],
      Ic = ['relatedNodes'],
      Pc = ['environmentData'],
      Mc = ['environmentData'],
      Nc = ['node'],
      qc = ['environmentData'],
      Bc = ['environmentData'],
      Lc = ['environmentData'];
    function Vc(A) {
      return zi(A) || ji(A) || jr(A) || Hi();
    }
    function jc(A, R, q) {
      return (
        (R = Ui(R)),
        R in A
          ? Object.defineProperty(A, R, {
              value: q,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (A[R] = q),
        A
      );
    }
    function Bi(A, R) {
      if (typeof R != 'function' && R !== null)
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      (A.prototype = Object.create(R && R.prototype, {
        constructor: { value: A, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(A, 'prototype', { writable: !1 }),
        R && Pa(A, R);
    }
    function Pa(A, R) {
      return (
        (Pa = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function ($, pe) {
              return ($.__proto__ = pe), $;
            }),
        Pa(A, R)
      );
    }
    function Li(A) {
      var R = zc();
      return function () {
        var $ = Vr(A),
          pe;
        if (R) {
          var ye = Vr(this).constructor;
          pe = Reflect.construct($, arguments, ye);
        } else pe = $.apply(this, arguments);
        return Hc(this, pe);
      };
    }
    function Hc(A, R) {
      if (R && (I(R) === 'object' || typeof R == 'function')) return R;
      if (R !== void 0)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return Vi(A);
    }
    function Vi(A) {
      if (A === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return A;
    }
    function zc() {
      if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == 'function') return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          ),
          !0
        );
      } catch {
        return !1;
      }
    }
    function Vr(A) {
      return (
        (Vr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (q) {
              return q.__proto__ || Object.getPrototypeOf(q);
            }),
        Vr(A)
      );
    }
    function Ve(A, R) {
      if (A == null) return {};
      var q = Uc(A, R),
        $,
        pe;
      if (Object.getOwnPropertySymbols) {
        var ye = Object.getOwnPropertySymbols(A);
        for (pe = 0; pe < ye.length; pe++)
          ($ = ye[pe]),
            !(R.indexOf($) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(A, $) &&
              (q[$] = A[$]);
      }
      return q;
    }
    function Uc(A, R) {
      if (A == null) return {};
      var q = {},
        $ = Object.keys(A),
        pe,
        ye;
      for (ye = 0; ye < $.length; ye++)
        (pe = $[ye]), !(R.indexOf(pe) >= 0) && (q[pe] = A[pe]);
      return q;
    }
    function re(A) {
      return Wc(A) || ji(A) || jr(A) || $c();
    }
    function $c() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function ji(A) {
      if (
        (typeof Symbol < 'u' && A[Symbol.iterator] != null) ||
        A['@@iterator'] != null
      )
        return Array.from(A);
    }
    function Wc(A) {
      if (Array.isArray(A)) return Ma(A);
    }
    function le() {
      return (
        (le = Object.assign
          ? Object.assign.bind()
          : function (A) {
              for (var R = 1; R < arguments.length; R++) {
                var q = arguments[R];
                for (var $ in q)
                  Object.prototype.hasOwnProperty.call(q, $) && (A[$] = q[$]);
              }
              return A;
            }),
        le.apply(this, arguments)
      );
    }
    function ve(A, R) {
      return zi(A) || Gc(A, R) || jr(A, R) || Hi();
    }
    function Hi() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function Gc(A, R) {
      var q =
        A == null
          ? null
          : (typeof Symbol < 'u' && A[Symbol.iterator]) || A['@@iterator'];
      if (q != null) {
        var $,
          pe,
          ye,
          rt,
          F = [],
          De = !0,
          at = !1;
        try {
          if (((ye = (q = q.call(A)).next), R === 0)) {
            if (Object(q) !== q) return;
            De = !1;
          } else
            for (
              ;
              !(De = ($ = ye.call(q)).done) &&
              (F.push($.value), F.length !== R);
              De = !0
            );
        } catch (nt) {
          (at = !0), (pe = nt);
        } finally {
          try {
            if (
              !De &&
              q.return != null &&
              ((rt = q.return()), Object(rt) !== rt)
            )
              return;
          } finally {
            if (at) throw pe;
          }
        }
        return F;
      }
    }
    function zi(A) {
      if (Array.isArray(A)) return A;
    }
    function Ut(A, R) {
      if (!(A instanceof R))
        throw new TypeError('Cannot call a class as a function');
    }
    function Yc(A, R) {
      for (var q = 0; q < R.length; q++) {
        var $ = R[q];
        ($.enumerable = $.enumerable || !1),
          ($.configurable = !0),
          'value' in $ && ($.writable = !0),
          Object.defineProperty(A, Ui($.key), $);
      }
    }
    function $t(A, R, q) {
      return (
        R && Yc(A.prototype, R),
        Object.defineProperty(A, 'prototype', { writable: !1 }),
        A
      );
    }
    function Ui(A) {
      var R = Kc(A, 'string');
      return I(R) === 'symbol' ? R : String(R);
    }
    function Kc(A, R) {
      if (I(A) !== 'object' || A === null) return A;
      var q = A[Symbol.toPrimitive];
      if (q !== void 0) {
        var $ = q.call(A, R);
        if (I($) !== 'object') return $;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return String(A);
    }
    function Ye(A, R) {
      var q = (typeof Symbol < 'u' && A[Symbol.iterator]) || A['@@iterator'];
      if (!q) {
        if (Array.isArray(A) || (q = jr(A)) || R) {
          q && (A = q);
          var $ = 0,
            pe = function () {};
          return {
            s: pe,
            n: function () {
              return $ >= A.length ? { done: !0 } : { done: !1, value: A[$++] };
            },
            e: function (at) {
              throw at;
            },
            f: pe,
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var ye = !0,
        rt = !1,
        F;
      return {
        s: function () {
          q = q.call(A);
        },
        n: function () {
          var at = q.next();
          return (ye = at.done), at;
        },
        e: function (at) {
          (rt = !0), (F = at);
        },
        f: function () {
          try {
            !ye && q.return != null && q.return();
          } finally {
            if (rt) throw F;
          }
        },
      };
    }
    function jr(A, R) {
      if (A) {
        if (typeof A == 'string') return Ma(A, R);
        var q = Object.prototype.toString.call(A).slice(8, -1);
        if (
          (q === 'Object' && A.constructor && (q = A.constructor.name),
          q === 'Map' || q === 'Set')
        )
          return Array.from(A);
        if (
          q === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q)
        )
          return Ma(A, R);
      }
    }
    function Ma(A, R) {
      (R == null || R > A.length) && (R = A.length);
      for (var q = 0, $ = new Array(R); q < R; q++) $[q] = A[q];
      return $;
    }
    function I(A) {
      '@babel/helpers - typeof';
      return (
        (I =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (R) {
                return typeof R;
              }
            : function (R) {
                return R &&
                  typeof Symbol == 'function' &&
                  R.constructor === Symbol &&
                  R !== Symbol.prototype
                  ? 'symbol'
                  : typeof R;
              }),
        I(A)
      );
    }
    (function () {
      var A = Object.create,
        R = Object.defineProperty,
        q = Object.getPrototypeOf,
        $ = Object.prototype.hasOwnProperty,
        pe = Object.getOwnPropertyNames,
        ye = Object.getOwnPropertyDescriptor,
        rt = function (t) {
          return R(t, '__esModule', { value: !0 });
        },
        F = function (t, r) {
          return function () {
            return r || t((r = { exports: {} }).exports, r), r.exports;
          };
        },
        De = function (t, r) {
          for (var a in r) R(t, a, { get: r[a], enumerable: !0 });
        },
        at = function (t, r, a) {
          if ((r && I(r) === 'object') || typeof r == 'function') {
            var n = Ye(pe(r)),
              i;
            try {
              var o = function () {
                var u = i.value;
                !$.call(t, u) &&
                  u !== 'default' &&
                  R(t, u, {
                    get: function () {
                      return r[u];
                    },
                    enumerable: !(a = ye(r, u)) || a.enumerable,
                  });
              };
              for (n.s(); !(i = n.n()).done; ) o();
            } catch (l) {
              n.e(l);
            } finally {
              n.f();
            }
          }
          return t;
        },
        nt = function (t) {
          return at(
            rt(
              R(
                t != null ? A(q(t)) : {},
                'default',
                t && t.__esModule && 'default' in t
                  ? {
                      get: function () {
                        return t.default;
                      },
                      enumerable: !0,
                    }
                  : { value: t, enumerable: !0 },
              ),
            ),
            t,
          );
        },
        $i = F(function (e) {
          Object.defineProperty(e, '__esModule', { value: !0 });
          function t(o) {
            return (
              (o >= 'a' && o <= 'z') ||
              (o >= 'A' && o <= 'Z') ||
              o === '-' ||
              o === '_'
            );
          }
          e.isIdentStart = t;
          function r(o) {
            return (
              (o >= 'a' && o <= 'z') ||
              (o >= 'A' && o <= 'Z') ||
              (o >= '0' && o <= '9') ||
              o === '-' ||
              o === '_'
            );
          }
          e.isIdent = r;
          function a(o) {
            return (
              (o >= 'a' && o <= 'f') ||
              (o >= 'A' && o <= 'F') ||
              (o >= '0' && o <= '9')
            );
          }
          e.isHex = a;
          function n(o) {
            for (var l = o.length, u = '', s = 0; s < l; ) {
              var c = o.charAt(s);
              if (e.identSpecialChars[c]) u += '\\' + c;
              else if (
                c === '_' ||
                c === '-' ||
                (c >= 'A' && c <= 'Z') ||
                (c >= 'a' && c <= 'z') ||
                (s !== 0 && c >= '0' && c <= '9')
              )
                u += c;
              else {
                var d = c.charCodeAt(0);
                if ((d & 63488) === 55296) {
                  var f = o.charCodeAt(s++);
                  if ((d & 64512) !== 55296 || (f & 64512) !== 56320)
                    throw Error('UCS-2(decode): illegal sequence');
                  d = ((d & 1023) << 10) + (f & 1023) + 65536;
                }
                u += '\\' + d.toString(16) + ' ';
              }
              s++;
            }
            return u;
          }
          e.escapeIdentifier = n;
          function i(o) {
            for (var l = o.length, u = '', s = 0, c; s < l; ) {
              var d = o.charAt(s);
              d === '"'
                ? (d = '\\"')
                : d === '\\'
                  ? (d = '\\\\')
                  : (c = e.strReplacementsRev[d]) !== void 0 && (d = c),
                (u += d),
                s++;
            }
            return '"' + u + '"';
          }
          (e.escapeStr = i),
            (e.identSpecialChars = {
              '!': !0,
              '"': !0,
              '#': !0,
              $: !0,
              '%': !0,
              '&': !0,
              "'": !0,
              '(': !0,
              ')': !0,
              '*': !0,
              '+': !0,
              ',': !0,
              '.': !0,
              '/': !0,
              ';': !0,
              '<': !0,
              '=': !0,
              '>': !0,
              '?': !0,
              '@': !0,
              '[': !0,
              '\\': !0,
              ']': !0,
              '^': !0,
              '`': !0,
              '{': !0,
              '|': !0,
              '}': !0,
              '~': !0,
            }),
            (e.strReplacementsRev = {
              '\n': '\\n',
              '\r': '\\r',
              '	': '\\t',
              '\f': '\\f',
              '\v': '\\v',
            }),
            (e.singleQuoteEscapeChars = {
              n: `
`,
              r: '\r',
              t: '	',
              f: '\f',
              '\\': '\\',
              "'": "'",
            }),
            (e.doubleQuotesEscapeChars = {
              n: `
`,
              r: '\r',
              t: '	',
              f: '\f',
              '\\': '\\',
              '"': '"',
            });
        }),
        Xc = F(function (e) {
          Object.defineProperty(e, '__esModule', { value: !0 });
          var t = $i();
          function r(a, n, i, o, l, u) {
            var s = a.length,
              c = '';
            function d(g, x) {
              var E = '';
              for (n++, c = a.charAt(n); n < s; ) {
                if (c === g) return n++, E;
                if (c === '\\') {
                  n++, (c = a.charAt(n));
                  var C = void 0;
                  if (c === g) E += g;
                  else if ((C = x[c]) !== void 0) E += C;
                  else if (t.isHex(c)) {
                    var P = c;
                    for (n++, c = a.charAt(n); t.isHex(c); )
                      (P += c), n++, (c = a.charAt(n));
                    c === ' ' && (n++, (c = a.charAt(n))),
                      (E += String.fromCharCode(parseInt(P, 16)));
                    continue;
                  } else E += c;
                } else E += c;
                n++, (c = a.charAt(n));
              }
              return E;
            }
            function f() {
              var g = '';
              for (c = a.charAt(n); n < s; ) {
                if (t.isIdent(c)) g += c;
                else if (c === '\\') {
                  if ((n++, n >= s))
                    throw Error('Expected symbol but end of file reached.');
                  if (((c = a.charAt(n)), t.identSpecialChars[c])) g += c;
                  else if (t.isHex(c)) {
                    var x = c;
                    for (n++, c = a.charAt(n); t.isHex(c); )
                      (x += c), n++, (c = a.charAt(n));
                    c === ' ' && (n++, (c = a.charAt(n))),
                      (g += String.fromCharCode(parseInt(x, 16)));
                    continue;
                  } else g += c;
                } else return g;
                n++, (c = a.charAt(n));
              }
              return g;
            }
            function p() {
              c = a.charAt(n);
              for (
                var g = !1;
                c === ' ' ||
                c === '	' ||
                c ===
                  `
` ||
                c === '\r' ||
                c === '\f';

              )
                (g = !0), n++, (c = a.charAt(n));
              return g;
            }
            function m() {
              var g = b();
              if (n < s)
                throw Error('Rule expected but "' + a.charAt(n) + '" found.');
              return g;
            }
            function b() {
              var g = D();
              if (!g) return null;
              var x = g;
              for (c = a.charAt(n); c === ','; ) {
                if (
                  (n++,
                  p(),
                  x.type !== 'selectors' &&
                    (x = { type: 'selectors', selectors: [g] }),
                  (g = D()),
                  !g)
                )
                  throw Error('Rule expected after ",".');
                x.selectors.push(g);
              }
              return x;
            }
            function D() {
              p();
              var g = { type: 'ruleSet' },
                x = h();
              if (!x) return null;
              for (
                var E = g;
                x &&
                ((x.type = 'rule'),
                (E.rule = x),
                (E = x),
                p(),
                (c = a.charAt(n)),
                !(n >= s || c === ',' || c === ')'));

              )
                if (l[c]) {
                  var C = c;
                  if ((n++, p(), (x = h()), !x))
                    throw Error('Rule expected after "' + C + '".');
                  x.nestingOperator = C;
                } else (x = h()), x && (x.nestingOperator = null);
              return g;
            }
            function h() {
              for (var g = null; n < s; )
                if (((c = a.charAt(n)), c === '*'))
                  n++, ((g = g || {}).tagName = '*');
                else if (t.isIdentStart(c) || c === '\\')
                  (g = g || {}).tagName = f();
                else if (c === '.')
                  n++,
                    (g = g || {}),
                    (g.classNames = g.classNames || []).push(f());
                else if (c === '#') n++, ((g = g || {}).id = f());
                else if (c === '[') {
                  n++, p();
                  var x = { name: f() };
                  if ((p(), c === ']')) n++;
                  else {
                    var E = '';
                    if ((o[c] && ((E = c), n++, (c = a.charAt(n))), n >= s))
                      throw Error('Expected "=" but end of file reached.');
                    if (c !== '=')
                      throw Error('Expected "=" but "' + c + '" found.');
                    (x.operator = E + '='), n++, p();
                    var C = '';
                    if (((x.valueType = 'string'), c === '"'))
                      C = d('"', t.doubleQuotesEscapeChars);
                    else if (c === "'") C = d("'", t.singleQuoteEscapeChars);
                    else if (u && c === '$')
                      n++, (C = f()), (x.valueType = 'substitute');
                    else {
                      for (; n < s && c !== ']'; )
                        (C += c), n++, (c = a.charAt(n));
                      C = C.trim();
                    }
                    if ((p(), n >= s))
                      throw Error('Expected "]" but end of file reached.');
                    if (c !== ']')
                      throw Error('Expected "]" but "' + c + '" found.');
                    n++, (x.value = C);
                  }
                  (g = g || {}), (g.attrs = g.attrs || []).push(x);
                } else if (c === ':') {
                  n++;
                  var P = f(),
                    B = { name: P };
                  if (c === '(') {
                    n++;
                    var V = '';
                    if ((p(), i[P] === 'selector'))
                      (B.valueType = 'selector'), (V = b());
                    else {
                      if (((B.valueType = i[P] || 'string'), c === '"'))
                        V = d('"', t.doubleQuotesEscapeChars);
                      else if (c === "'") V = d("'", t.singleQuoteEscapeChars);
                      else if (u && c === '$')
                        n++, (V = f()), (B.valueType = 'substitute');
                      else {
                        for (; n < s && c !== ')'; )
                          (V += c), n++, (c = a.charAt(n));
                        V = V.trim();
                      }
                      p();
                    }
                    if (n >= s)
                      throw Error('Expected ")" but end of file reached.');
                    if (c !== ')')
                      throw Error('Expected ")" but "' + c + '" found.');
                    n++, (B.value = V);
                  }
                  (g = g || {}), (g.pseudos = g.pseudos || []).push(B);
                } else break;
              return g;
            }
            return m();
          }
          e.parseCssSelector = r;
        }),
        Jc = F(function (e) {
          Object.defineProperty(e, '__esModule', { value: !0 });
          var t = $i();
          function r(a) {
            var n = '';
            switch (a.type) {
              case 'ruleSet':
                for (var i = a.rule, o = []; i; )
                  i.nestingOperator && o.push(i.nestingOperator),
                    o.push(r(i)),
                    (i = i.rule);
                n = o.join(' ');
                break;
              case 'selectors':
                n = a.selectors.map(r).join(', ');
                break;
              case 'rule':
                a.tagName &&
                  (a.tagName === '*'
                    ? (n = '*')
                    : (n = t.escapeIdentifier(a.tagName))),
                  a.id && (n += '#' + t.escapeIdentifier(a.id)),
                  a.classNames &&
                    (n += a.classNames
                      .map(function (l) {
                        return '.' + t.escapeIdentifier(l);
                      })
                      .join('')),
                  a.attrs &&
                    (n += a.attrs
                      .map(function (l) {
                        return 'operator' in l
                          ? l.valueType === 'substitute'
                            ? '[' +
                              t.escapeIdentifier(l.name) +
                              l.operator +
                              '$' +
                              l.value +
                              ']'
                            : '[' +
                              t.escapeIdentifier(l.name) +
                              l.operator +
                              t.escapeStr(l.value) +
                              ']'
                          : '[' + t.escapeIdentifier(l.name) + ']';
                      })
                      .join('')),
                  a.pseudos &&
                    (n += a.pseudos
                      .map(function (l) {
                        return l.valueType
                          ? l.valueType === 'selector'
                            ? ':' +
                              t.escapeIdentifier(l.name) +
                              '(' +
                              r(l.value) +
                              ')'
                            : l.valueType === 'substitute'
                              ? ':' +
                                t.escapeIdentifier(l.name) +
                                '($' +
                                l.value +
                                ')'
                              : l.valueType === 'numeric'
                                ? ':' +
                                  t.escapeIdentifier(l.name) +
                                  '(' +
                                  l.value +
                                  ')'
                                : ':' +
                                  t.escapeIdentifier(l.name) +
                                  '(' +
                                  t.escapeIdentifier(l.value) +
                                  ')'
                          : ':' + t.escapeIdentifier(l.name);
                      })
                      .join(''));
                break;
              default:
                throw Error('Unknown entity type: "' + a.type + '".');
            }
            return n;
          }
          e.renderEntity = r;
        }),
        Wi = F(function (e) {
          Object.defineProperty(e, '__esModule', { value: !0 });
          var t = Xc(),
            r = Jc(),
            a = (function () {
              function n() {
                (this.pseudos = {}),
                  (this.attrEqualityMods = {}),
                  (this.ruleNestingOperators = {}),
                  (this.substitutesEnabled = !1);
              }
              return (
                (n.prototype.registerSelectorPseudos = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    this.pseudos[s] = 'selector';
                  }
                  return this;
                }),
                (n.prototype.unregisterSelectorPseudos = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    delete this.pseudos[s];
                  }
                  return this;
                }),
                (n.prototype.registerNumericPseudos = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    this.pseudos[s] = 'numeric';
                  }
                  return this;
                }),
                (n.prototype.unregisterNumericPseudos = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    delete this.pseudos[s];
                  }
                  return this;
                }),
                (n.prototype.registerNestingOperators = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    this.ruleNestingOperators[s] = !0;
                  }
                  return this;
                }),
                (n.prototype.unregisterNestingOperators = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    delete this.ruleNestingOperators[s];
                  }
                  return this;
                }),
                (n.prototype.registerAttrEqualityMods = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    this.attrEqualityMods[s] = !0;
                  }
                  return this;
                }),
                (n.prototype.unregisterAttrEqualityMods = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    delete this.attrEqualityMods[s];
                  }
                  return this;
                }),
                (n.prototype.enableSubstitutes = function () {
                  return (this.substitutesEnabled = !0), this;
                }),
                (n.prototype.disableSubstitutes = function () {
                  return (this.substitutesEnabled = !1), this;
                }),
                (n.prototype.parse = function (i) {
                  return t.parseCssSelector(
                    i,
                    0,
                    this.pseudos,
                    this.attrEqualityMods,
                    this.ruleNestingOperators,
                    this.substitutesEnabled,
                  );
                }),
                (n.prototype.render = function (i) {
                  return r.renderEntity(i).trim();
                }),
                n
              );
            })();
          e.CssSelectorParser = a;
        }),
        Qc = F(function (e, t) {
          t.exports = function () {};
        }),
        kt = F(function (e, t) {
          var r = Qc()();
          t.exports = function (a) {
            return a !== r && a !== null;
          };
        }),
        Gi = F(function (e, t) {
          var r = kt(),
            a = Array.prototype.forEach,
            n = Object.create,
            i = function (l, u) {
              var s;
              for (s in l) u[s] = l[s];
            };
          t.exports = function (o) {
            var l = n(null);
            return (
              a.call(arguments, function (u) {
                r(u) && i(Object(u), l);
              }),
              l
            );
          };
        }),
        Zc = F(function (e, t) {
          t.exports = function () {
            var r = Math.sign;
            return typeof r != 'function' ? !1 : r(10) === 1 && r(-20) === -1;
          };
        }),
        ed = F(function (e, t) {
          t.exports = function (r) {
            return (r = Number(r)), isNaN(r) || r === 0 ? r : r > 0 ? 1 : -1;
          };
        }),
        td = F(function (e, t) {
          t.exports = Zc()() ? Math.sign : ed();
        }),
        rd = F(function (e, t) {
          var r = td(),
            a = Math.abs,
            n = Math.floor;
          t.exports = function (i) {
            return isNaN(i)
              ? 0
              : ((i = Number(i)), i === 0 || !isFinite(i) ? i : r(i) * n(a(i)));
          };
        }),
        Rt = F(function (e, t) {
          var r = rd(),
            a = Math.max;
          t.exports = function (n) {
            return a(0, r(n));
          };
        }),
        Yi = F(function (e, t) {
          var r = Rt();
          t.exports = function (a, n, i) {
            var o;
            return isNaN(a)
              ? ((o = n), o >= 0 ? (i && o ? o - 1 : o) : 1)
              : a === !1
                ? !1
                : r(a);
          };
        }),
        wt = F(function (e, t) {
          t.exports = function (r) {
            if (typeof r != 'function')
              throw new TypeError(r + ' is not a function');
            return r;
          };
        }),
        Wt = F(function (e, t) {
          var r = kt();
          t.exports = function (a) {
            if (!r(a)) throw new TypeError('Cannot use null or undefined');
            return a;
          };
        }),
        ad = F(function (e, t) {
          var r = wt(),
            a = Wt(),
            n = Function.prototype.bind,
            i = Function.prototype.call,
            o = Object.keys,
            l = Object.prototype.propertyIsEnumerable;
          t.exports = function (u, s) {
            return function (c, d) {
              var f,
                p = arguments[2],
                m = arguments[3];
              return (
                (c = Object(a(c))),
                r(d),
                (f = o(c)),
                m && f.sort(typeof m == 'function' ? n.call(m, c) : void 0),
                typeof u != 'function' && (u = f[u]),
                i.call(u, f, function (b, D) {
                  return l.call(c, b) ? i.call(d, p, c[b], b, c, D) : s;
                })
              );
            };
          };
        }),
        Hr = F(function (e, t) {
          t.exports = ad()('forEach');
        }),
        St = F(function () {}),
        nd = F(function (e, t) {
          t.exports = function () {
            var r = Object.assign,
              a;
            return typeof r != 'function'
              ? !1
              : ((a = { foo: 'raz' }),
                r(a, { bar: 'dwa' }, { trzy: 'trzy' }),
                a.foo + a.bar + a.trzy === 'razdwatrzy');
          };
        }),
        id = F(function (e, t) {
          t.exports = function () {
            try {
              return Object.keys('primitive'), !0;
            } catch {
              return !1;
            }
          };
        }),
        od = F(function (e, t) {
          var r = kt(),
            a = Object.keys;
          t.exports = function (n) {
            return a(r(n) ? Object(n) : n);
          };
        }),
        ld = F(function (e, t) {
          t.exports = id()() ? Object.keys : od();
        }),
        ud = F(function (e, t) {
          var r = ld(),
            a = Wt(),
            n = Math.max;
          t.exports = function (i, o) {
            var l,
              u,
              s = n(arguments.length, 2),
              c;
            for (
              i = Object(a(i)),
                c = function (f) {
                  try {
                    i[f] = o[f];
                  } catch (p) {
                    l || (l = p);
                  }
                },
                u = 1;
              u < s;
              ++u
            )
              (o = arguments[u]), r(o).forEach(c);
            if (l !== void 0) throw l;
            return i;
          };
        }),
        Ki = F(function (e, t) {
          t.exports = nd()() ? Object.assign : ud();
        }),
        sd = F(function (e, t) {
          var r = kt(),
            a = { function: !0, object: !0 };
          t.exports = function (n) {
            return (r(n) && a[I(n)]) || !1;
          };
        }),
        cd = F(function (e, t) {
          var r = Ki(),
            a = sd(),
            n = kt(),
            i = Error.captureStackTrace;
          t.exports = function (o) {
            var l = new Error(o),
              u = arguments[1],
              s = arguments[2];
            return (
              n(s) || (a(u) && ((s = u), (u = null))),
              n(s) && r(l, s),
              n(u) && (l.code = u),
              i && i(l, t.exports),
              l
            );
          };
        }),
        Xi = F(function (e, t) {
          var r = Wt(),
            a = Object.defineProperty,
            n = Object.getOwnPropertyDescriptor,
            i = Object.getOwnPropertyNames,
            o = Object.getOwnPropertySymbols;
          t.exports = function (l, u) {
            var s,
              c = Object(r(u));
            if (
              ((l = Object(r(l))),
              i(c).forEach(function (d) {
                try {
                  a(l, d, n(u, d));
                } catch (f) {
                  s = f;
                }
              }),
              typeof o == 'function' &&
                o(c).forEach(function (d) {
                  try {
                    a(l, d, n(u, d));
                  } catch (f) {
                    s = f;
                  }
                }),
              s !== void 0)
            )
              throw s;
            return l;
          };
        }),
        Ji = F(function (e, t) {
          var r = Rt(),
            a = function (s, c) {
              return c;
            },
            n,
            i,
            o,
            l;
          try {
            Object.defineProperty(a, 'length', {
              configurable: !0,
              writable: !1,
              enumerable: !1,
              value: 1,
            });
          } catch {}
          a.length === 1
            ? ((n = { configurable: !0, writable: !1, enumerable: !1 }),
              (i = Object.defineProperty),
              (t.exports = function (u, s) {
                return (
                  (s = r(s)),
                  u.length === s ? u : ((n.value = s), i(u, 'length', n))
                );
              }))
            : ((l = Xi()),
              (o = (function () {
                var u = [];
                return function (s) {
                  var c,
                    d = 0;
                  if (u[s]) return u[s];
                  for (c = []; s--; ) c.push('a' + (++d).toString(36));
                  return new Function(
                    'fn',
                    'return function (' +
                      c.join(', ') +
                      ') { return fn.apply(this, arguments); };',
                  );
                };
              })()),
              (t.exports = function (u, s) {
                var c;
                if (((s = r(s)), u.length === s)) return u;
                c = o(s)(u);
                try {
                  l(c, u);
                } catch {}
                return c;
              }));
        }),
        Qi = F(function (e, t) {
          var r = void 0;
          t.exports = function (a) {
            return a !== r && a !== null;
          };
        }),
        dd = F(function (e, t) {
          var r = Qi(),
            a = { object: !0, function: !0, undefined: !0 };
          t.exports = function (n) {
            return r(n) ? hasOwnProperty.call(a, I(n)) : !1;
          };
        }),
        fd = F(function (e, t) {
          var r = dd();
          t.exports = function (a) {
            if (!r(a)) return !1;
            try {
              return a.constructor ? a.constructor.prototype === a : !1;
            } catch {
              return !1;
            }
          };
        }),
        pd = F(function (e, t) {
          var r = fd();
          t.exports = function (a) {
            if (typeof a != 'function' || !hasOwnProperty.call(a, 'length'))
              return !1;
            try {
              if (
                typeof a.length != 'number' ||
                typeof a.call != 'function' ||
                typeof a.apply != 'function'
              )
                return !1;
            } catch {
              return !1;
            }
            return !r(a);
          };
        }),
        md = F(function (e, t) {
          var r = pd(),
            a = /^\s*class[\s{/}]/,
            n = Function.prototype.toString;
          t.exports = function (i) {
            return !(!r(i) || a.test(n.call(i)));
          };
        }),
        hd = F(function (e, t) {
          var r = 'razdwatrzy';
          t.exports = function () {
            return typeof r.contains != 'function'
              ? !1
              : r.contains('dwa') === !0 && r.contains('foo') === !1;
          };
        }),
        vd = F(function (e, t) {
          var r = String.prototype.indexOf;
          t.exports = function (a) {
            return r.call(this, a, arguments[1]) > -1;
          };
        }),
        gd = F(function (e, t) {
          t.exports = hd()() ? String.prototype.contains : vd();
        }),
        Ot = F(function (e, t) {
          var r = Qi(),
            a = md(),
            n = Ki(),
            i = Gi(),
            o = gd(),
            l = (t.exports = function (u, s) {
              var c, d, f, p, m;
              return (
                arguments.length < 2 || typeof u != 'string'
                  ? ((p = s), (s = u), (u = null))
                  : (p = arguments[2]),
                r(u)
                  ? ((c = o.call(u, 'c')),
                    (d = o.call(u, 'e')),
                    (f = o.call(u, 'w')))
                  : ((c = f = !0), (d = !1)),
                (m = { value: s, configurable: c, enumerable: d, writable: f }),
                p ? n(i(p), m) : m
              );
            });
          l.gs = function (u, s, c) {
            var d, f, p, m;
            return (
              typeof u != 'string'
                ? ((p = c), (c = s), (s = u), (u = null))
                : (p = arguments[3]),
              r(s)
                ? a(s)
                  ? r(c)
                    ? a(c) || ((p = c), (c = void 0))
                    : (c = void 0)
                  : ((p = s), (s = c = void 0))
                : (s = void 0),
              r(u)
                ? ((d = o.call(u, 'c')), (f = o.call(u, 'e')))
                : ((d = !0), (f = !1)),
              (m = { get: s, set: c, configurable: d, enumerable: f }),
              p ? n(i(p), m) : m
            );
          };
        }),
        bd = F(function (e, t) {
          var r = Ot(),
            a = wt(),
            n = Function.prototype.apply,
            i = Function.prototype.call,
            o = Object.create,
            l = Object.defineProperty,
            u = Object.defineProperties,
            s = Object.prototype.hasOwnProperty,
            c = { configurable: !0, enumerable: !1, writable: !0 },
            d,
            f,
            p,
            m,
            b,
            D,
            h;
          (d = function (x, E) {
            var C;
            return (
              a(E),
              s.call(this, '__ee__')
                ? (C = this.__ee__)
                : ((C = c.value = o(null)),
                  l(this, '__ee__', c),
                  (c.value = null)),
              C[x]
                ? I(C[x]) === 'object'
                  ? C[x].push(E)
                  : (C[x] = [C[x], E])
                : (C[x] = E),
              this
            );
          }),
            (f = function (x, E) {
              var C, P;
              return (
                a(E),
                (P = this),
                d.call(
                  this,
                  x,
                  (C = function () {
                    p.call(P, x, C), n.call(E, this, arguments);
                  }),
                ),
                (C.__eeOnceListener__ = E),
                this
              );
            }),
            (p = function (x, E) {
              var C, P, B, V;
              if ((a(E), !s.call(this, '__ee__'))) return this;
              if (((C = this.__ee__), !C[x])) return this;
              if (((P = C[x]), I(P) === 'object'))
                for (V = 0; (B = P[V]); ++V)
                  (B === E || B.__eeOnceListener__ === E) &&
                    (P.length === 2 ? (C[x] = P[V ? 0 : 1]) : P.splice(V, 1));
              else (P === E || P.__eeOnceListener__ === E) && delete C[x];
              return this;
            }),
            (m = function (x) {
              var E, C, P, B, V;
              if (s.call(this, '__ee__') && ((B = this.__ee__[x]), !!B))
                if (I(B) === 'object') {
                  for (
                    C = arguments.length, V = new Array(C - 1), E = 1;
                    E < C;
                    ++E
                  )
                    V[E - 1] = arguments[E];
                  for (B = B.slice(), E = 0; (P = B[E]); ++E)
                    n.call(P, this, V);
                } else
                  switch (arguments.length) {
                    case 1:
                      i.call(B, this);
                      break;
                    case 2:
                      i.call(B, this, arguments[1]);
                      break;
                    case 3:
                      i.call(B, this, arguments[1], arguments[2]);
                      break;
                    default:
                      for (
                        C = arguments.length, V = new Array(C - 1), E = 1;
                        E < C;
                        ++E
                      )
                        V[E - 1] = arguments[E];
                      n.call(B, this, V);
                  }
            }),
            (b = { on: d, once: f, off: p, emit: m }),
            (D = { on: r(d), once: r(f), off: r(p), emit: r(m) }),
            (h = u({}, D)),
            (t.exports = e =
              function (x) {
                return x == null ? o(h) : u(Object(x), D);
              }),
            (e.methods = b);
        }),
        yd = F(function (e, t) {
          t.exports = function () {
            var r = Array.from,
              a,
              n;
            return typeof r != 'function'
              ? !1
              : ((a = ['raz', 'dwa']),
                (n = r(a)),
                !!(n && n !== a && n[1] === 'dwa'));
          };
        }),
        Dd = F(function (e, t) {
          t.exports = function () {
            return (typeof globalThis > 'u' ? 'undefined' : I(globalThis)) !==
              'object' || !globalThis
              ? !1
              : globalThis.Array === Array;
          };
        }),
        wd = F(function (e, t) {
          var r = function () {
            if (
              (typeof self > 'u' ? 'undefined' : I(self)) === 'object' &&
              self
            )
              return self;
            if ((typeof y > 'u' ? 'undefined' : I(y)) === 'object' && y)
              return y;
            throw new Error('Unable to resolve global `this`');
          };
          t.exports = (function () {
            if (this) return this;
            try {
              Object.defineProperty(Object.prototype, '__global__', {
                get: function () {
                  return this;
                },
                configurable: !0,
              });
            } catch {
              return r();
            }
            try {
              return __global__ || r();
            } finally {
              delete Object.prototype.__global__;
            }
          })();
        }),
        zr = F(function (e, t) {
          t.exports = Dd()() ? globalThis : wd();
        }),
        _d = F(function (e, t) {
          var r = zr(),
            a = { object: !0, symbol: !0 };
          t.exports = function () {
            var n = r.Symbol,
              i;
            if (typeof n != 'function') return !1;
            i = n('test symbol');
            try {
              String(i);
            } catch {
              return !1;
            }
            return !(
              !a[I(n.iterator)] ||
              !a[I(n.toPrimitive)] ||
              !a[I(n.toStringTag)]
            );
          };
        }),
        xd = F(function (e, t) {
          t.exports = function (r) {
            return r
              ? I(r) === 'symbol'
                ? !0
                : !r.constructor || r.constructor.name !== 'Symbol'
                  ? !1
                  : r[r.constructor.toStringTag] === 'Symbol'
              : !1;
          };
        }),
        Zi = F(function (e, t) {
          var r = xd();
          t.exports = function (a) {
            if (!r(a)) throw new TypeError(a + ' is not a symbol');
            return a;
          };
        }),
        Ed = F(function (e, t) {
          var r = Ot(),
            a = Object.create,
            n = Object.defineProperty,
            i = Object.prototype,
            o = a(null);
          t.exports = function (l) {
            for (var u = 0, s, c; o[l + (u || '')]; ) ++u;
            return (
              (l += u || ''),
              (o[l] = !0),
              (s = '@@' + l),
              n(
                i,
                s,
                r.gs(null, function (d) {
                  c || ((c = !0), n(this, s, r(d)), (c = !1));
                }),
              ),
              s
            );
          };
        }),
        Ad = F(function (e, t) {
          var r = Ot(),
            a = zr().Symbol;
          t.exports = function (n) {
            return Object.defineProperties(n, {
              hasInstance: r('', (a && a.hasInstance) || n('hasInstance')),
              isConcatSpreadable: r(
                '',
                (a && a.isConcatSpreadable) || n('isConcatSpreadable'),
              ),
              iterator: r('', (a && a.iterator) || n('iterator')),
              match: r('', (a && a.match) || n('match')),
              replace: r('', (a && a.replace) || n('replace')),
              search: r('', (a && a.search) || n('search')),
              species: r('', (a && a.species) || n('species')),
              split: r('', (a && a.split) || n('split')),
              toPrimitive: r('', (a && a.toPrimitive) || n('toPrimitive')),
              toStringTag: r('', (a && a.toStringTag) || n('toStringTag')),
              unscopables: r('', (a && a.unscopables) || n('unscopables')),
            });
          };
        }),
        Fd = F(function (e, t) {
          var r = Ot(),
            a = Zi(),
            n = Object.create(null);
          t.exports = function (i) {
            return Object.defineProperties(i, {
              for: r(function (o) {
                return n[o] ? n[o] : (n[o] = i(String(o)));
              }),
              keyFor: r(function (o) {
                var l;
                a(o);
                for (l in n) if (n[l] === o) return l;
              }),
            });
          };
        }),
        Cd = F(function (e, t) {
          var r = Ot(),
            a = Zi(),
            n = zr().Symbol,
            i = Ed(),
            o = Ad(),
            l = Fd(),
            u = Object.create,
            s = Object.defineProperties,
            c = Object.defineProperty,
            d,
            f,
            p;
          if (typeof n == 'function')
            try {
              String(n()), (p = !0);
            } catch {}
          else n = null;
          (f = function (b) {
            if (this instanceof f)
              throw new TypeError('Symbol is not a constructor');
            return d(b);
          }),
            (t.exports = d =
              function m(b) {
                var D;
                if (this instanceof m)
                  throw new TypeError('Symbol is not a constructor');
                return p
                  ? n(b)
                  : ((D = u(f.prototype)),
                    (b = b === void 0 ? '' : String(b)),
                    s(D, { __description__: r('', b), __name__: r('', i(b)) }));
              }),
            o(d),
            l(d),
            s(f.prototype, {
              constructor: r(d),
              toString: r('', function () {
                return this.__name__;
              }),
            }),
            s(d.prototype, {
              toString: r(function () {
                return 'Symbol (' + a(this).__description__ + ')';
              }),
              valueOf: r(function () {
                return a(this);
              }),
            }),
            c(
              d.prototype,
              d.toPrimitive,
              r('', function () {
                var m = a(this);
                return I(m) === 'symbol' ? m : m.toString();
              }),
            ),
            c(d.prototype, d.toStringTag, r('c', 'Symbol')),
            c(f.prototype, d.toStringTag, r('c', d.prototype[d.toStringTag])),
            c(f.prototype, d.toPrimitive, r('c', d.prototype[d.toPrimitive]));
        }),
        Td = F(function (e, t) {
          t.exports = _d()() ? zr().Symbol : Cd();
        }),
        kd = F(function (e, t) {
          var r = Object.prototype.toString,
            a = r.call(
              (function () {
                return arguments;
              })(),
            );
          t.exports = function (n) {
            return r.call(n) === a;
          };
        }),
        Rd = F(function (e, t) {
          var r = Object.prototype.toString,
            a = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
          t.exports = function (n) {
            return typeof n == 'function' && a(r.call(n));
          };
        }),
        Sd = F(function (e, t) {
          var r = Object.prototype.toString,
            a = r.call('');
          t.exports = function (n) {
            return (
              typeof n == 'string' ||
              (n &&
                I(n) === 'object' &&
                (n instanceof String || r.call(n) === a)) ||
              !1
            );
          };
        }),
        Od = F(function (e, t) {
          var r = Td().iterator,
            a = kd(),
            n = Rd(),
            i = Rt(),
            o = wt(),
            l = Wt(),
            u = kt(),
            s = Sd(),
            c = Array.isArray,
            d = Function.prototype.call,
            f = { configurable: !0, enumerable: !0, writable: !0, value: null },
            p = Object.defineProperty;
          t.exports = function (m) {
            var b = arguments[1],
              D = arguments[2],
              h,
              g,
              x,
              E,
              C,
              P,
              B,
              V,
              ae,
              ee;
            if (
              ((m = Object(l(m))),
              u(b) && o(b),
              !this || this === Array || !n(this))
            ) {
              if (!b) {
                if (a(m))
                  return (
                    (C = m.length),
                    C !== 1
                      ? Array.apply(null, m)
                      : ((E = new Array(1)), (E[0] = m[0]), E)
                  );
                if (c(m)) {
                  for (E = new Array((C = m.length)), g = 0; g < C; ++g)
                    E[g] = m[g];
                  return E;
                }
              }
              E = [];
            } else h = this;
            if (!c(m)) {
              if ((ae = m[r]) !== void 0) {
                for (
                  B = o(ae).call(m), h && (E = new h()), V = B.next(), g = 0;
                  !V.done;

                )
                  (ee = b ? d.call(b, D, V.value, g) : V.value),
                    h ? ((f.value = ee), p(E, g, f)) : (E[g] = ee),
                    (V = B.next()),
                    ++g;
                C = g;
              } else if (s(m)) {
                for (C = m.length, h && (E = new h()), g = 0, x = 0; g < C; ++g)
                  (ee = m[g]),
                    g + 1 < C &&
                      ((P = ee.charCodeAt(0)),
                      P >= 55296 && P <= 56319 && (ee += m[++g])),
                    (ee = b ? d.call(b, D, ee, x) : ee),
                    h ? ((f.value = ee), p(E, x, f)) : (E[x] = ee),
                    ++x;
                C = x;
              }
            }
            if (C === void 0)
              for (C = i(m.length), h && (E = new h(C)), g = 0; g < C; ++g)
                (ee = b ? d.call(b, D, m[g], g) : m[g]),
                  h ? ((f.value = ee), p(E, g, f)) : (E[g] = ee);
            return h && ((f.value = null), (E.length = C)), E;
          };
        }),
        Na = F(function (e, t) {
          t.exports = yd()() ? Array.from : Od();
        }),
        Id = F(function (e, t) {
          var r = Na(),
            a = Array.isArray;
          t.exports = function (n) {
            return a(n) ? n : r(n);
          };
        }),
        Pd = F(function (e, t) {
          var r = Id(),
            a = kt(),
            n = wt(),
            i = Array.prototype.slice,
            o;
          (o = function (u) {
            return this.map(function (s, c) {
              return s ? s(u[c]) : u[c];
            }).concat(i.call(u, this.length));
          }),
            (t.exports = function (l) {
              return (
                (l = r(l)),
                l.forEach(function (u) {
                  a(u) && n(u);
                }),
                o.bind(l)
              );
            });
        }),
        Md = F(function (e, t) {
          var r = wt();
          t.exports = function (a) {
            var n;
            return typeof a == 'function'
              ? { set: a, get: a }
              : ((n = { get: r(a.get) }),
                a.set !== void 0
                  ? ((n.set = r(a.set)),
                    a.delete && (n.delete = r(a.delete)),
                    a.clear && (n.clear = r(a.clear)),
                    n)
                  : ((n.set = n.get), n));
          };
        }),
        Nd = F(function (e, t) {
          var r = cd(),
            a = Ji(),
            n = Ot(),
            i = bd().methods,
            o = Pd(),
            l = Md(),
            u = Function.prototype.apply,
            s = Function.prototype.call,
            c = Object.create,
            d = Object.defineProperties,
            f = i.on,
            p = i.emit;
          t.exports = function (m, b, D) {
            var h = c(null),
              g,
              x,
              E,
              C,
              P,
              B,
              V,
              ae,
              ee,
              G,
              U,
              X,
              ne,
              se,
              te;
            return (
              b !== !1 ? (x = b) : isNaN(m.length) ? (x = 1) : (x = m.length),
              D.normalizer &&
                ((G = l(D.normalizer)),
                (E = G.get),
                (C = G.set),
                (P = G.delete),
                (B = G.clear)),
              D.resolvers != null && (te = o(D.resolvers)),
              E
                ? (se = a(function (Y) {
                    var M,
                      de,
                      w = arguments;
                    if (
                      (te && (w = te(w)),
                      (M = E(w)),
                      M !== null && hasOwnProperty.call(h, M))
                    )
                      return U && g.emit('get', M, w, this), h[M];
                    if (
                      (w.length === 1
                        ? (de = s.call(m, this, w[0]))
                        : (de = u.call(m, this, w)),
                      M === null)
                    ) {
                      if (((M = E(w)), M !== null))
                        throw r('Circular invocation', 'CIRCULAR_INVOCATION');
                      M = C(w);
                    } else if (hasOwnProperty.call(h, M))
                      throw r('Circular invocation', 'CIRCULAR_INVOCATION');
                    return (h[M] = de), X && g.emit('set', M, null, de), de;
                  }, x))
                : b === 0
                  ? (se = function () {
                      var M;
                      if (hasOwnProperty.call(h, 'data'))
                        return (
                          U && g.emit('get', 'data', arguments, this), h.data
                        );
                      if (
                        (arguments.length
                          ? (M = u.call(m, this, arguments))
                          : (M = s.call(m, this)),
                        hasOwnProperty.call(h, 'data'))
                      )
                        throw r('Circular invocation', 'CIRCULAR_INVOCATION');
                      return (
                        (h.data = M), X && g.emit('set', 'data', null, M), M
                      );
                    })
                  : (se = function (M) {
                      var de,
                        w = arguments,
                        j;
                      if (
                        (te && (w = te(arguments)),
                        (j = String(w[0])),
                        hasOwnProperty.call(h, j))
                      )
                        return U && g.emit('get', j, w, this), h[j];
                      if (
                        (w.length === 1
                          ? (de = s.call(m, this, w[0]))
                          : (de = u.call(m, this, w)),
                        hasOwnProperty.call(h, j))
                      )
                        throw r('Circular invocation', 'CIRCULAR_INVOCATION');
                      return (h[j] = de), X && g.emit('set', j, null, de), de;
                    }),
              (g = {
                original: m,
                memoized: se,
                profileName: D.profileName,
                get: function (M) {
                  return te && (M = te(M)), E ? E(M) : String(M[0]);
                },
                has: function (M) {
                  return hasOwnProperty.call(h, M);
                },
                delete: function (M) {
                  var de;
                  hasOwnProperty.call(h, M) &&
                    (P && P(M),
                    (de = h[M]),
                    delete h[M],
                    ne && g.emit('delete', M, de));
                },
                clear: function () {
                  var M = h;
                  B && B(), (h = c(null)), g.emit('clear', M);
                },
                on: function (M, de) {
                  return (
                    M === 'get'
                      ? (U = !0)
                      : M === 'set'
                        ? (X = !0)
                        : M === 'delete' && (ne = !0),
                    f.call(this, M, de)
                  );
                },
                emit: p,
                updateEnv: function () {
                  m = g.original;
                },
              }),
              E
                ? (V = a(function (Y) {
                    var M,
                      de = arguments;
                    te && (de = te(de)), (M = E(de)), M !== null && g.delete(M);
                  }, x))
                : b === 0
                  ? (V = function () {
                      return g.delete('data');
                    })
                  : (V = function (M) {
                      return te && (M = te(arguments)[0]), g.delete(M);
                    }),
              (ae = a(function () {
                var Y,
                  M = arguments;
                return b === 0
                  ? h.data
                  : (te && (M = te(M)),
                    E ? (Y = E(M)) : (Y = String(M[0])),
                    h[Y]);
              })),
              (ee = a(function () {
                var Y,
                  M = arguments;
                return b === 0
                  ? g.has('data')
                  : (te && (M = te(M)),
                    E ? (Y = E(M)) : (Y = String(M[0])),
                    Y === null ? !1 : g.has(Y));
              })),
              d(se, {
                __memoized__: n(!0),
                delete: n(V),
                clear: n(g.clear),
                _get: n(ae),
                _has: n(ee),
              }),
              g
            );
          };
        }),
        qd = F(function (e, t) {
          var r = wt(),
            a = Hr(),
            n = St(),
            i = Nd(),
            o = Yi();
          t.exports = function l(u) {
            var s, c, d;
            if ((r(u), (s = Object(arguments[1])), s.async && s.promise))
              throw new Error(
                "Options 'async' and 'promise' cannot be used together",
              );
            return hasOwnProperty.call(u, '__memoized__') && !s.force
              ? u
              : ((c = o(s.length, u.length, s.async && n.async)),
                (d = i(u, c, s)),
                a(n, function (f, p) {
                  s[p] && f(s[p], d, s);
                }),
                l.__profiler__ && l.__profiler__(d),
                d.updateEnv(),
                d.memoized);
          };
        }),
        Bd = F(function (e, t) {
          t.exports = function (r) {
            var a,
              n,
              i = r.length;
            if (!i) return '';
            for (a = String(r[(n = 0)]); --i; ) a += '' + r[++n];
            return a;
          };
        }),
        Ld = F(function (e, t) {
          t.exports = function (r) {
            return r
              ? function (a) {
                  for (var n = String(a[0]), i = 0, o = r; --o; )
                    n += '' + a[++i];
                  return n;
                }
              : function () {
                  return '';
                };
          };
        }),
        Vd = F(function (e, t) {
          t.exports = function () {
            var r = Number.isNaN;
            return typeof r != 'function' ? !1 : !r({}) && r(NaN) && !r(34);
          };
        }),
        jd = F(function (e, t) {
          t.exports = function (r) {
            return r !== r;
          };
        }),
        Hd = F(function (e, t) {
          t.exports = Vd()() ? Number.isNaN : jd();
        }),
        qa = F(function (e, t) {
          var r = Hd(),
            a = Rt(),
            n = Wt(),
            i = Array.prototype.indexOf,
            o = Object.prototype.hasOwnProperty,
            l = Math.abs,
            u = Math.floor;
          t.exports = function (s) {
            var c, d, f, p;
            if (!r(s)) return i.apply(this, arguments);
            for (
              d = a(n(this).length),
                f = arguments[1],
                isNaN(f)
                  ? (f = 0)
                  : f >= 0
                    ? (f = u(f))
                    : (f = a(this.length) - u(l(f))),
                c = f;
              c < d;
              ++c
            )
              if (o.call(this, c) && ((p = this[c]), r(p))) return c;
            return -1;
          };
        }),
        zd = F(function (e, t) {
          var r = qa(),
            a = Object.create;
          t.exports = function () {
            var n = 0,
              i = [],
              o = a(null);
            return {
              get: function (u) {
                var s = 0,
                  c = i,
                  d,
                  f = u.length;
                if (f === 0) return c[f] || null;
                if ((c = c[f])) {
                  for (; s < f - 1; ) {
                    if (((d = r.call(c[0], u[s])), d === -1)) return null;
                    (c = c[1][d]), ++s;
                  }
                  return (
                    (d = r.call(c[0], u[s])), d === -1 ? null : c[1][d] || null
                  );
                }
                return null;
              },
              set: function (u) {
                var s = 0,
                  c = i,
                  d,
                  f = u.length;
                if (f === 0) c[f] = ++n;
                else {
                  for (c[f] || (c[f] = [[], []]), c = c[f]; s < f - 1; )
                    (d = r.call(c[0], u[s])),
                      d === -1 &&
                        ((d = c[0].push(u[s]) - 1), c[1].push([[], []])),
                      (c = c[1][d]),
                      ++s;
                  (d = r.call(c[0], u[s])),
                    d === -1 && (d = c[0].push(u[s]) - 1),
                    (c[1][d] = ++n);
                }
                return (o[n] = u), n;
              },
              delete: function (u) {
                var s = 0,
                  c = i,
                  d,
                  f = o[u],
                  p = f.length,
                  m = [];
                if (p === 0) delete c[p];
                else if ((c = c[p])) {
                  for (; s < p - 1; ) {
                    if (((d = r.call(c[0], f[s])), d === -1)) return;
                    m.push(c, d), (c = c[1][d]), ++s;
                  }
                  if (((d = r.call(c[0], f[s])), d === -1)) return;
                  for (
                    u = c[1][d], c[0].splice(d, 1), c[1].splice(d, 1);
                    !c[0].length && m.length;

                  )
                    (d = m.pop()),
                      (c = m.pop()),
                      c[0].splice(d, 1),
                      c[1].splice(d, 1);
                }
                delete o[u];
              },
              clear: function () {
                (i = []), (o = a(null));
              },
            };
          };
        }),
        Ud = F(function (e, t) {
          var r = qa();
          t.exports = function () {
            var a = 0,
              n = [],
              i = [];
            return {
              get: function (l) {
                var u = r.call(n, l[0]);
                return u === -1 ? null : i[u];
              },
              set: function (l) {
                return n.push(l[0]), i.push(++a), a;
              },
              delete: function (l) {
                var u = r.call(i, l);
                u !== -1 && (n.splice(u, 1), i.splice(u, 1));
              },
              clear: function () {
                (n = []), (i = []);
              },
            };
          };
        }),
        $d = F(function (e, t) {
          var r = qa(),
            a = Object.create;
          t.exports = function (n) {
            var i = 0,
              o = [[], []],
              l = a(null);
            return {
              get: function (s) {
                for (var c = 0, d = o, f; c < n - 1; ) {
                  if (((f = r.call(d[0], s[c])), f === -1)) return null;
                  (d = d[1][f]), ++c;
                }
                return (
                  (f = r.call(d[0], s[c])), f === -1 ? null : d[1][f] || null
                );
              },
              set: function (s) {
                for (var c = 0, d = o, f; c < n - 1; )
                  (f = r.call(d[0], s[c])),
                    f === -1 &&
                      ((f = d[0].push(s[c]) - 1), d[1].push([[], []])),
                    (d = d[1][f]),
                    ++c;
                return (
                  (f = r.call(d[0], s[c])),
                  f === -1 && (f = d[0].push(s[c]) - 1),
                  (d[1][f] = ++i),
                  (l[i] = s),
                  i
                );
              },
              delete: function (s) {
                for (var c = 0, d = o, f, p = [], m = l[s]; c < n - 1; ) {
                  if (((f = r.call(d[0], m[c])), f === -1)) return;
                  p.push(d, f), (d = d[1][f]), ++c;
                }
                if (((f = r.call(d[0], m[c])), f !== -1)) {
                  for (
                    s = d[1][f], d[0].splice(f, 1), d[1].splice(f, 1);
                    !d[0].length && p.length;

                  )
                    (f = p.pop()),
                      (d = p.pop()),
                      d[0].splice(f, 1),
                      d[1].splice(f, 1);
                  delete l[s];
                }
              },
              clear: function () {
                (o = [[], []]), (l = a(null));
              },
            };
          };
        }),
        eo = F(function (e, t) {
          var r = wt(),
            a = Hr(),
            n = Function.prototype.call;
          t.exports = function (i, o) {
            var l = {},
              u = arguments[2];
            return (
              r(o),
              a(i, function (s, c, d, f) {
                l[c] = n.call(o, u, s, c, d, f);
              }),
              l
            );
          };
        }),
        Ba = F(function (e, t) {
          var r = function (i) {
              if (typeof i != 'function')
                throw new TypeError(i + ' is not a function');
              return i;
            },
            a = function (i) {
              var o = k.createTextNode(''),
                l,
                u,
                s = 0;
              return (
                new i(function () {
                  var c;
                  if (l) u && (l = u.concat(l));
                  else {
                    if (!u) return;
                    l = u;
                  }
                  if (((u = l), (l = null), typeof u == 'function')) {
                    (c = u), (u = null), c();
                    return;
                  }
                  for (o.data = s = ++s % 2; u; )
                    (c = u.shift()), u.length || (u = null), c();
                }).observe(o, { characterData: !0 }),
                function (c) {
                  if ((r(c), l)) {
                    typeof l == 'function' ? (l = [l, c]) : l.push(c);
                    return;
                  }
                  (l = c), (o.data = s = ++s % 2);
                }
              );
            };
          t.exports = (function () {
            if (
              (typeof process > 'u' ? 'undefined' : I(process)) === 'object' &&
              process &&
              typeof process.nextTick == 'function'
            )
              return process.nextTick;
            if (typeof queueMicrotask == 'function')
              return function (n) {
                queueMicrotask(r(n));
              };
            if ((typeof k > 'u' ? 'undefined' : I(k)) === 'object' && k) {
              if (typeof MutationObserver == 'function')
                return a(MutationObserver);
              if (typeof WebKitMutationObserver == 'function')
                return a(WebKitMutationObserver);
            }
            return typeof setImmediate == 'function'
              ? function (n) {
                  setImmediate(r(n));
                }
              : typeof setTimeout == 'function' ||
                  (typeof setTimeout > 'u' ? 'undefined' : I(setTimeout)) ===
                    'object'
                ? function (n) {
                    setTimeout(r(n), 0);
                  }
                : null;
          })();
        }),
        Wd = F(function () {
          var e = Na(),
            t = eo(),
            r = Xi(),
            a = Ji(),
            n = Ba(),
            i = Array.prototype.slice,
            o = Function.prototype.apply,
            l = Object.create;
          St().async = function (u, s) {
            var c = l(null),
              d = l(null),
              f = s.memoized,
              p = s.original,
              m,
              b,
              D;
            s.memoized = a(function (h) {
              var g = arguments,
                x = g[g.length - 1];
              return (
                typeof x == 'function' && ((m = x), (g = i.call(g, 0, -1))),
                f.apply((b = this), (D = g))
              );
            }, f);
            try {
              r(s.memoized, f);
            } catch {}
            s.on('get', function (h) {
              var g, x, E;
              if (m) {
                if (c[h]) {
                  typeof c[h] == 'function' ? (c[h] = [c[h], m]) : c[h].push(m),
                    (m = null);
                  return;
                }
                (g = m),
                  (x = b),
                  (E = D),
                  (m = b = D = null),
                  n(function () {
                    var C;
                    hasOwnProperty.call(d, h)
                      ? ((C = d[h]),
                        s.emit('getasync', h, E, x),
                        o.call(g, C.context, C.args))
                      : ((m = g), (b = x), (D = E), f.apply(x, E));
                  });
              }
            }),
              (s.original = function () {
                var h, g, x, E;
                return m
                  ? ((h = e(arguments)),
                    (g = function C(P) {
                      var B,
                        V,
                        ae = C.id;
                      if (ae == null) {
                        n(o.bind(C, this, arguments));
                        return;
                      }
                      if ((delete C.id, (B = c[ae]), delete c[ae], !!B))
                        return (
                          (V = e(arguments)),
                          s.has(ae) &&
                            (P
                              ? s.delete(ae)
                              : ((d[ae] = { context: this, args: V }),
                                s.emit(
                                  'setasync',
                                  ae,
                                  typeof B == 'function' ? 1 : B.length,
                                ))),
                          typeof B == 'function'
                            ? (E = o.call(B, this, V))
                            : B.forEach(function (ee) {
                                E = o.call(ee, this, V);
                              }, this),
                          E
                        );
                    }),
                    (x = m),
                    (m = b = D = null),
                    h.push(g),
                    (E = o.call(p, this, h)),
                    (g.cb = x),
                    (m = g),
                    E)
                  : o.call(p, this, arguments);
              }),
              s.on('set', function (h) {
                if (!m) {
                  s.delete(h);
                  return;
                }
                c[h]
                  ? typeof c[h] == 'function'
                    ? (c[h] = [c[h], m.cb])
                    : c[h].push(m.cb)
                  : (c[h] = m.cb),
                  delete m.cb,
                  (m.id = h),
                  (m = null);
              }),
              s.on('delete', function (h) {
                var g;
                hasOwnProperty.call(c, h) ||
                  (d[h] &&
                    ((g = d[h]),
                    delete d[h],
                    s.emit('deleteasync', h, i.call(g.args, 1))));
              }),
              s.on('clear', function () {
                var h = d;
                (d = l(null)),
                  s.emit(
                    'clearasync',
                    t(h, function (g) {
                      return i.call(g.args, 1);
                    }),
                  );
              });
          };
        }),
        Gd = F(function (e, t) {
          var r = Array.prototype.forEach,
            a = Object.create;
          t.exports = function (n) {
            var i = a(null);
            return (
              r.call(arguments, function (o) {
                i[o] = !0;
              }),
              i
            );
          };
        }),
        to = F(function (e, t) {
          t.exports = function (r) {
            return typeof r == 'function';
          };
        }),
        Yd = F(function (e, t) {
          var r = to();
          t.exports = function (a) {
            try {
              return a && r(a.toString) ? a.toString() : String(a);
            } catch {
              throw new TypeError('Passed argument cannot be stringifed');
            }
          };
        }),
        Kd = F(function (e, t) {
          var r = Wt(),
            a = Yd();
          t.exports = function (n) {
            return a(r(n));
          };
        }),
        Xd = F(function (e, t) {
          var r = to();
          t.exports = function (a) {
            try {
              return a && r(a.toString) ? a.toString() : String(a);
            } catch {
              return '<Non-coercible to string value>';
            }
          };
        }),
        Jd = F(function (e, t) {
          var r = Xd(),
            a = /[\n\r\u2028\u2029]/g;
          t.exports = function (n) {
            var i = r(n);
            return (
              i.length > 100 && (i = i.slice(0, 99) + '…'),
              (i = i.replace(a, function (o) {
                return JSON.stringify(o).slice(1, -1);
              })),
              i
            );
          };
        }),
        ro = F(function (e, t) {
          (t.exports = r), (t.exports.default = r);
          function r(a) {
            return (
              !!a &&
              (I(a) === 'object' || typeof a == 'function') &&
              typeof a.then == 'function'
            );
          }
        }),
        Qd = F(function () {
          var e = eo(),
            t = Gd(),
            r = Kd(),
            a = Jd(),
            n = ro(),
            i = Ba(),
            o = Object.create,
            l = t('then', 'then:finally', 'done', 'done:finally');
          St().promise = function (u, s) {
            var c = o(null),
              d = o(null),
              f = o(null);
            if (u === !0) u = null;
            else if (((u = r(u)), !l[u]))
              throw new TypeError("'" + a(u) + "' is not valid promise mode");
            s.on('set', function (p, m, b) {
              var D = !1;
              if (!n(b)) {
                (d[p] = b), s.emit('setasync', p, 1);
                return;
              }
              (c[p] = 1), (f[p] = b);
              var h = function (P) {
                  var B = c[p];
                  if (D)
                    throw new Error(`Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`);
                  B && (delete c[p], (d[p] = P), s.emit('setasync', p, B));
                },
                g = function () {
                  (D = !0), c[p] && (delete c[p], delete f[p], s.delete(p));
                },
                x = u;
              if ((x || (x = 'then'), x === 'then')) {
                var E = function () {
                  i(g);
                };
                (b = b.then(function (C) {
                  i(h.bind(this, C));
                }, E)),
                  typeof b.finally == 'function' && b.finally(E);
              } else if (x === 'done') {
                if (typeof b.done != 'function')
                  throw new Error(
                    "Memoizee error: Retrieved promise does not implement 'done' in 'done' mode",
                  );
                b.done(h, g);
              } else if (x === 'done:finally') {
                if (typeof b.done != 'function')
                  throw new Error(
                    "Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode",
                  );
                if (typeof b.finally != 'function')
                  throw new Error(
                    "Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode",
                  );
                b.done(h), b.finally(g);
              }
            }),
              s.on('get', function (p, m, b) {
                var D;
                if (c[p]) {
                  ++c[p];
                  return;
                }
                D = f[p];
                var h = function () {
                  s.emit('getasync', p, m, b);
                };
                n(D)
                  ? typeof D.done == 'function'
                    ? D.done(h)
                    : D.then(function () {
                        i(h);
                      })
                  : h();
              }),
              s.on('delete', function (p) {
                if ((delete f[p], c[p])) {
                  delete c[p];
                  return;
                }
                if (hasOwnProperty.call(d, p)) {
                  var m = d[p];
                  delete d[p], s.emit('deleteasync', p, [m]);
                }
              }),
              s.on('clear', function () {
                var p = d;
                (d = o(null)),
                  (c = o(null)),
                  (f = o(null)),
                  s.emit(
                    'clearasync',
                    e(p, function (m) {
                      return [m];
                    }),
                  );
              });
          };
        }),
        Zd = F(function () {
          var e = wt(),
            t = Hr(),
            r = St(),
            a = Function.prototype.apply;
          r.dispose = function (n, i, o) {
            var l;
            if ((e(n), (o.async && r.async) || (o.promise && r.promise))) {
              i.on(
                'deleteasync',
                (l = function (s, c) {
                  a.call(n, null, c);
                }),
              ),
                i.on('clearasync', function (u) {
                  t(u, function (s, c) {
                    l(c, s);
                  });
                });
              return;
            }
            i.on(
              'delete',
              (l = function (s, c) {
                n(c);
              }),
            ),
              i.on('clear', function (u) {
                t(u, function (s, c) {
                  l(c, s);
                });
              });
          };
        }),
        e1 = F(function (e, t) {
          t.exports = 2147483647;
        }),
        t1 = F(function (e, t) {
          var r = Rt(),
            a = e1();
          t.exports = function (n) {
            if (((n = r(n)), n > a))
              throw new TypeError(n + ' exceeds maximum possible timeout');
            return n;
          };
        }),
        r1 = F(function () {
          var e = Na(),
            t = Hr(),
            r = Ba(),
            a = ro(),
            n = t1(),
            i = St(),
            o = Function.prototype,
            l = Math.max,
            u = Math.min,
            s = Object.create;
          i.maxAge = function (c, d, f) {
            var p, m, b, D;
            (c = n(c)),
              c &&
                ((p = s(null)),
                (m =
                  (f.async && i.async) || (f.promise && i.promise)
                    ? 'async'
                    : ''),
                d.on('set' + m, function (h) {
                  (p[h] = setTimeout(function () {
                    d.delete(h);
                  }, c)),
                    typeof p[h].unref == 'function' && p[h].unref(),
                    D &&
                      (D[h] && D[h] !== 'nextTick' && clearTimeout(D[h]),
                      (D[h] = setTimeout(function () {
                        delete D[h];
                      }, b)),
                      typeof D[h].unref == 'function' && D[h].unref());
                }),
                d.on('delete' + m, function (h) {
                  clearTimeout(p[h]),
                    delete p[h],
                    D &&
                      (D[h] !== 'nextTick' && clearTimeout(D[h]), delete D[h]);
                }),
                f.preFetch &&
                  (f.preFetch === !0 || isNaN(f.preFetch)
                    ? (b = 0.333)
                    : (b = l(u(Number(f.preFetch), 1), 0)),
                  b &&
                    ((D = {}),
                    (b = (1 - b) * c),
                    d.on('get' + m, function (h, g, x) {
                      D[h] ||
                        ((D[h] = 'nextTick'),
                        r(function () {
                          var E;
                          D[h] === 'nextTick' &&
                            (delete D[h],
                            d.delete(h),
                            f.async && ((g = e(g)), g.push(o)),
                            (E = d.memoized.apply(x, g)),
                            f.promise &&
                              a(E) &&
                              (typeof E.done == 'function'
                                ? E.done(o, o)
                                : E.then(o, o)));
                        }));
                    }))),
                d.on('clear' + m, function () {
                  t(p, function (h) {
                    clearTimeout(h);
                  }),
                    (p = {}),
                    D &&
                      (t(D, function (h) {
                        h !== 'nextTick' && clearTimeout(h);
                      }),
                      (D = {}));
                }));
          };
        }),
        a1 = F(function (e, t) {
          var r = Rt(),
            a = Object.create,
            n = Object.prototype.hasOwnProperty;
          t.exports = function (i) {
            var o = 0,
              l = 1,
              u = a(null),
              s = a(null),
              c = 0,
              d;
            return (
              (i = r(i)),
              {
                hit: function (p) {
                  var m = s[p],
                    b = ++c;
                  if (((u[b] = p), (s[p] = b), !m))
                    return ++o, o <= i ? void 0 : ((p = u[l]), d(p), p);
                  if ((delete u[m], l === m)) for (; !n.call(u, ++l); );
                },
                delete: (d = function (p) {
                  var m = s[p];
                  if (m && (delete u[m], delete s[p], --o, l === m)) {
                    if (!o) {
                      (c = 0), (l = 1);
                      return;
                    }
                    for (; !n.call(u, ++l); );
                  }
                }),
                clear: function () {
                  (o = 0), (l = 1), (u = a(null)), (s = a(null)), (c = 0);
                },
              }
            );
          };
        }),
        n1 = F(function () {
          var e = Rt(),
            t = a1(),
            r = St();
          r.max = function (a, n, i) {
            var o, l, u;
            (a = e(a)),
              a &&
                ((l = t(a)),
                (o =
                  (i.async && r.async) || (i.promise && r.promise)
                    ? 'async'
                    : ''),
                n.on(
                  'set' + o,
                  (u = function (c) {
                    (c = l.hit(c)), c !== void 0 && n.delete(c);
                  }),
                ),
                n.on('get' + o, u),
                n.on('delete' + o, l.delete),
                n.on('clear' + o, l.clear));
          };
        }),
        i1 = F(function () {
          var e = Ot(),
            t = St(),
            r = Object.create,
            a = Object.defineProperties;
          t.refCounter = function (n, i, o) {
            var l, u;
            (l = r(null)),
              (u =
                (o.async && t.async) || (o.promise && t.promise)
                  ? 'async'
                  : ''),
              i.on('set' + u, function (s, c) {
                l[s] = c || 1;
              }),
              i.on('get' + u, function (s) {
                ++l[s];
              }),
              i.on('delete' + u, function (s) {
                delete l[s];
              }),
              i.on('clear' + u, function () {
                l = {};
              }),
              a(i.memoized, {
                deleteRef: e(function () {
                  var s = i.get(arguments);
                  return s === null || !l[s]
                    ? null
                    : --l[s]
                      ? !1
                      : (i.delete(s), !0);
                }),
                getRefCount: e(function () {
                  var s = i.get(arguments);
                  return s === null || !l[s] ? 0 : l[s];
                }),
              });
          };
        }),
        ao = F(function (e, t) {
          var r = Gi(),
            a = Yi(),
            n = qd();
          t.exports = function (i) {
            var o = r(arguments[1]),
              l;
            return (
              o.normalizer ||
                ((l = o.length = a(o.length, i.length, o.async)),
                l !== 0 &&
                  (o.primitive
                    ? l === !1
                      ? (o.normalizer = Bd())
                      : l > 1 && (o.normalizer = Ld()(l))
                    : l === !1
                      ? (o.normalizer = zd()())
                      : l === 1
                        ? (o.normalizer = Ud()())
                        : (o.normalizer = $d()(l)))),
              o.async && Wd(),
              o.promise && Qd(),
              o.dispose && Zd(),
              o.maxAge && r1(),
              o.max && n1(),
              o.refCounter && i1(),
              n(i, o)
            );
          };
        }),
        no = F(function (e, t) {
          (function () {
            var r = {
              name: 'doT',
              version: '1.1.1',
              templateSettings: {
                evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
                interpolate: /\{\{=([\s\S]+?)\}\}/g,
                encode: /\{\{!([\s\S]+?)\}\}/g,
                use: /\{\{#([\s\S]+?)\}\}/g,
                useParams:
                  /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
                define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
                defineParams: /^\s*([\w$]+):([\s\S]+)/,
                conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
                iterate:
                  /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
                varname: 'it',
                strip: !0,
                append: !0,
                selfcontained: !1,
                doNotSkipEncoded: !1,
              },
              template: void 0,
              compile: void 0,
              log: !0,
            };
            (function () {
              if (
                (typeof globalThis > 'u' ? 'undefined' : I(globalThis)) !==
                'object'
              )
                try {
                  Object.defineProperty(Object.prototype, '__magic__', {
                    get: function () {
                      return this;
                    },
                    configurable: !0,
                  }),
                    (__magic__.globalThis = __magic__),
                    delete Object.prototype.__magic__;
                } catch {
                  y.globalThis = (function () {
                    if (typeof self < 'u') return self;
                    if (typeof y < 'u') return y;
                    if (typeof tt < 'u') return tt;
                    if (typeof this < 'u') return this;
                    throw new Error('Unable to locate global `this`');
                  })();
                }
            })(),
              (r.encodeHTMLSource = function (l) {
                var u = {
                    '&': '&#38;',
                    '<': '&#60;',
                    '>': '&#62;',
                    '"': '&#34;',
                    "'": '&#39;',
                    '/': '&#47;',
                  },
                  s = l ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
                return function (c) {
                  return c
                    ? c.toString().replace(s, function (d) {
                        return u[d] || d;
                      })
                    : '';
                };
              }),
              typeof t < 'u' && t.exports
                ? (t.exports = r)
                : (globalThis.doT = r);
            var a = {
                append: {
                  start: "'+(",
                  end: ")+'",
                  startencode: "'+encodeHTML(",
                },
                split: {
                  start: "';out+=(",
                  end: ");out+='",
                  startencode: "';out+=encodeHTML(",
                },
              },
              n = /$^/;
            function i(l, u, s) {
              return (typeof u == 'string' ? u : u.toString())
                .replace(l.define || n, function (c, d, f, p) {
                  return (
                    d.indexOf('def.') === 0 && (d = d.substring(4)),
                    d in s ||
                      (f === ':'
                        ? (l.defineParams &&
                            p.replace(l.defineParams, function (m, b, D) {
                              s[d] = { arg: b, text: D };
                            }),
                          d in s || (s[d] = p))
                        : new Function('def', "def['" + d + "']=" + p)(s)),
                    ''
                  );
                })
                .replace(l.use || n, function (c, d) {
                  l.useParams &&
                    (d = d.replace(l.useParams, function (p, m, b, D) {
                      if (s[b] && s[b].arg && D) {
                        var h = (b + ':' + D).replace(/'|\\/g, '_');
                        return (
                          (s.__exp = s.__exp || {}),
                          (s.__exp[h] = s[b].text.replace(
                            new RegExp(
                              '(^|[^\\w$])' + s[b].arg + '([^\\w$])',
                              'g',
                            ),
                            '$1' + D + '$2',
                          )),
                          m + "def.__exp['" + h + "']"
                        );
                      }
                    }));
                  var f = new Function('def', 'return ' + d)(s);
                  return f && i(l, f, s);
                });
            }
            function o(l) {
              return l.replace(/\\('|\\)/g, '$1').replace(/[\r\t\n]/g, ' ');
            }
            (r.template = function (l, u, s) {
              u = u || r.templateSettings;
              var c = u.append ? a.append : a.split,
                d,
                f = 0,
                p,
                m = u.use || u.define ? i(u, l, s || {}) : l;
              (m = (
                "var out='" +
                (u.strip
                  ? m
                      .replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, ' ')
                      .replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, '')
                  : m
                )
                  .replace(/'|\\/g, '\\$&')
                  .replace(u.interpolate || n, function (b, D) {
                    return c.start + o(D) + c.end;
                  })
                  .replace(u.encode || n, function (b, D) {
                    return (d = !0), c.startencode + o(D) + c.end;
                  })
                  .replace(u.conditional || n, function (b, D, h) {
                    return D
                      ? h
                        ? "';}else if(" + o(h) + "){out+='"
                        : "';}else{out+='"
                      : h
                        ? "';if(" + o(h) + "){out+='"
                        : "';}out+='";
                  })
                  .replace(u.iterate || n, function (b, D, h, g) {
                    return D
                      ? ((f += 1),
                        (p = g || 'i' + f),
                        (D = o(D)),
                        "';var arr" +
                          f +
                          '=' +
                          D +
                          ';if(arr' +
                          f +
                          '){var ' +
                          h +
                          ',' +
                          p +
                          '=-1,l' +
                          f +
                          '=arr' +
                          f +
                          '.length-1;while(' +
                          p +
                          '<l' +
                          f +
                          '){' +
                          h +
                          '=arr' +
                          f +
                          '[' +
                          p +
                          "+=1];out+='")
                      : "';} } out+='";
                  })
                  .replace(u.evaluate || n, function (b, D) {
                    return "';" + o(D) + "out+='";
                  }) +
                "';return out;"
              )
                .replace(/\n/g, '\\n')
                .replace(/\t/g, '\\t')
                .replace(/\r/g, '\\r')
                .replace(/(\s|;|\}|^|\{)out\+='';/g, '$1')
                .replace(/\+''/g, '')),
                d &&
                  (!u.selfcontained &&
                    globalThis &&
                    !globalThis._encodeHTML &&
                    (globalThis._encodeHTML = r.encodeHTMLSource(
                      u.doNotSkipEncoded,
                    )),
                  (m =
                    "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" +
                    r.encodeHTMLSource.toString() +
                    '(' +
                    (u.doNotSkipEncoded || '') +
                    '));' +
                    m));
              try {
                return new Function(u.varname, m);
              } catch (b) {
                throw (
                  (typeof console < 'u' &&
                    console.log('Could not create a template function: ' + m),
                  b)
                );
              }
            }),
              (r.compile = function (l, u) {
                return r.template(l, null, u);
              });
          })();
        }),
        o1 = F(function (e, t) {
          (function (r, a) {
            I(e) === 'object' && typeof t < 'u'
              ? (t.exports = a())
              : (r.ES6Promise = a());
          })(e, function () {
            function r(_) {
              var T = I(_);
              return _ !== null && (T === 'object' || T === 'function');
            }
            function a(_) {
              return typeof _ == 'function';
            }
            var n = void 0;
            Array.isArray
              ? (n = Array.isArray)
              : (n = function (T) {
                  return Object.prototype.toString.call(T) === '[object Array]';
                });
            var i = n,
              o = 0,
              l = void 0,
              u = void 0,
              s = function (T, S) {
                (P[o] = T),
                  (P[o + 1] = S),
                  (o += 2),
                  o === 2 && (u ? u(B) : ae());
              };
            function c(_) {
              u = _;
            }
            function d(_) {
              s = _;
            }
            var f = typeof y < 'u' ? y : void 0,
              p = f || {},
              m = p.MutationObserver || p.WebKitMutationObserver,
              b =
                typeof self > 'u' &&
                typeof process < 'u' &&
                {}.toString.call(process) === '[object process]',
              D =
                typeof Uint8ClampedArray < 'u' &&
                typeof importScripts < 'u' &&
                typeof MessageChannel < 'u';
            function h() {
              return function () {
                return process.nextTick(B);
              };
            }
            function g() {
              return typeof l < 'u'
                ? function () {
                    l(B);
                  }
                : C();
            }
            function x() {
              var _ = 0,
                T = new m(B),
                S = k.createTextNode('');
              return (
                T.observe(S, { characterData: !0 }),
                function () {
                  S.data = _ = ++_ % 2;
                }
              );
            }
            function E() {
              var _ = new MessageChannel();
              return (
                (_.port1.onmessage = B),
                function () {
                  return _.port2.postMessage(0);
                }
              );
            }
            function C() {
              var _ = setTimeout;
              return function () {
                return _(B, 1);
              };
            }
            var P = new Array(1e3);
            function B() {
              for (var _ = 0; _ < o; _ += 2) {
                var T = P[_],
                  S = P[_ + 1];
                T(S), (P[_] = void 0), (P[_ + 1] = void 0);
              }
              o = 0;
            }
            function V() {
              try {
                var _ = Function('return this')().require('vertx');
                return (l = _.runOnLoop || _.runOnContext), g();
              } catch {
                return C();
              }
            }
            var ae = void 0;
            b
              ? (ae = h())
              : m
                ? (ae = x())
                : D
                  ? (ae = E())
                  : f === void 0
                    ? (ae = V())
                    : (ae = C());
            function ee(_, T) {
              var S = this,
                L = new this.constructor(X);
              L[U] === void 0 && Oe(L);
              var K = S._state;
              if (K) {
                var ie = arguments[K - 1];
                s(function () {
                  return xe(K, L, ie, S._result);
                });
              } else we(S, L, _, T);
              return L;
            }
            function G(_) {
              var T = this;
              if (_ && I(_) === 'object' && _.constructor === T) return _;
              var S = new T(X);
              return W(S, _), S;
            }
            var U = Math.random().toString(36).substring(2);
            function X() {}
            var ne = void 0,
              se = 1,
              te = 2;
            function Y() {
              return new TypeError('You cannot resolve a promise with itself');
            }
            function M() {
              return new TypeError(
                'A promises callback cannot return that same promise.',
              );
            }
            function de(_, T, S, L) {
              try {
                _.call(T, S, L);
              } catch (K) {
                return K;
              }
            }
            function w(_, T, S) {
              s(function (L) {
                var K = !1,
                  ie = de(
                    S,
                    T,
                    function (Me) {
                      K || ((K = !0), T !== Me ? W(L, Me) : H(L, Me));
                    },
                    function (Me) {
                      K || ((K = !0), z(L, Me));
                    },
                    'Settle: ' + (L._label || ' unknown promise'),
                  );
                !K && ie && ((K = !0), z(L, ie));
              }, _);
            }
            function j(_, T) {
              T._state === se
                ? H(_, T._result)
                : T._state === te
                  ? z(_, T._result)
                  : we(
                      T,
                      void 0,
                      function (S) {
                        return W(_, S);
                      },
                      function (S) {
                        return z(_, S);
                      },
                    );
            }
            function O(_, T, S) {
              T.constructor === _.constructor &&
              S === ee &&
              T.constructor.resolve === G
                ? j(_, T)
                : S === void 0
                  ? H(_, T)
                  : a(S)
                    ? w(_, T, S)
                    : H(_, T);
            }
            function W(_, T) {
              if (_ === T) z(_, Y());
              else if (r(T)) {
                var S = void 0;
                try {
                  S = T.then;
                } catch (L) {
                  z(_, L);
                  return;
                }
                O(_, T, S);
              } else H(_, T);
            }
            function me(_) {
              _._onerror && _._onerror(_._result), ke(_);
            }
            function H(_, T) {
              _._state === ne &&
                ((_._result = T),
                (_._state = se),
                _._subscribers.length !== 0 && s(ke, _));
            }
            function z(_, T) {
              _._state === ne && ((_._state = te), (_._result = T), s(me, _));
            }
            function we(_, T, S, L) {
              var K = _._subscribers,
                ie = K.length;
              (_._onerror = null),
                (K[ie] = T),
                (K[ie + se] = S),
                (K[ie + te] = L),
                ie === 0 && _._state && s(ke, _);
            }
            function ke(_) {
              var T = _._subscribers,
                S = _._state;
              if (T.length !== 0) {
                for (
                  var L = void 0, K = void 0, ie = _._result, Me = 0;
                  Me < T.length;
                  Me += 3
                )
                  (L = T[Me]), (K = T[Me + S]), L ? xe(S, L, K, ie) : K(ie);
                _._subscribers.length = 0;
              }
            }
            function xe(_, T, S, L) {
              var K = a(S),
                ie = void 0,
                Me = void 0,
                fr = !0;
              if (K) {
                try {
                  ie = S(L);
                } catch (Ia) {
                  (fr = !1), (Me = Ia);
                }
                if (T === ie) {
                  z(T, M());
                  return;
                }
              } else ie = L;
              T._state !== ne ||
                (K && fr
                  ? W(T, ie)
                  : fr === !1
                    ? z(T, Me)
                    : _ === se
                      ? H(T, ie)
                      : _ === te && z(T, ie));
            }
            function Se(_, T) {
              try {
                T(
                  function (L) {
                    W(_, L);
                  },
                  function (L) {
                    z(_, L);
                  },
                );
              } catch (S) {
                z(_, S);
              }
            }
            var Be = 0;
            function Pe() {
              return Be++;
            }
            function Oe(_) {
              (_[U] = Be++),
                (_._state = void 0),
                (_._result = void 0),
                (_._subscribers = []);
            }
            function dr() {
              return new Error('Array Methods must be provided an Array');
            }
            var Le = (function () {
              function _(T, S) {
                (this._instanceConstructor = T),
                  (this.promise = new T(X)),
                  this.promise[U] || Oe(this.promise),
                  i(S)
                    ? ((this.length = S.length),
                      (this._remaining = S.length),
                      (this._result = new Array(this.length)),
                      this.length === 0
                        ? H(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(S),
                          this._remaining === 0 &&
                            H(this.promise, this._result)))
                    : z(this.promise, dr());
              }
              return (
                (_.prototype._enumerate = function (S) {
                  for (var L = 0; this._state === ne && L < S.length; L++)
                    this._eachEntry(S[L], L);
                }),
                (_.prototype._eachEntry = function (S, L) {
                  var K = this._instanceConstructor,
                    ie = K.resolve;
                  if (ie === G) {
                    var Me = void 0,
                      fr = void 0,
                      Ia = !1;
                    try {
                      Me = S.then;
                    } catch (Ni) {
                      (Ia = !0), (fr = Ni);
                    }
                    if (Me === ee && S._state !== ne)
                      this._settledAt(S._state, L, S._result);
                    else if (typeof Me != 'function')
                      this._remaining--, (this._result[L] = S);
                    else if (K === Ee) {
                      var Mi = new K(X);
                      Ia ? z(Mi, fr) : O(Mi, S, Me), this._willSettleAt(Mi, L);
                    } else
                      this._willSettleAt(
                        new K(function (Ni) {
                          return Ni(S);
                        }),
                        L,
                      );
                  } else this._willSettleAt(ie(S), L);
                }),
                (_.prototype._settledAt = function (S, L, K) {
                  var ie = this.promise;
                  ie._state === ne &&
                    (this._remaining--,
                    S === te ? z(ie, K) : (this._result[L] = K)),
                    this._remaining === 0 && H(ie, this._result);
                }),
                (_.prototype._willSettleAt = function (S, L) {
                  var K = this;
                  we(
                    S,
                    void 0,
                    function (ie) {
                      return K._settledAt(se, L, ie);
                    },
                    function (ie) {
                      return K._settledAt(te, L, ie);
                    },
                  );
                }),
                _
              );
            })();
            function be(_) {
              return new Le(this, _).promise;
            }
            function Ie(_) {
              var T = this;
              return i(_)
                ? new T(function (S, L) {
                    for (var K = _.length, ie = 0; ie < K; ie++)
                      T.resolve(_[ie]).then(S, L);
                  })
                : new T(function (S, L) {
                    return L(new TypeError('You must pass an array to race.'));
                  });
            }
            function Ce(_) {
              var T = this,
                S = new T(X);
              return z(S, _), S;
            }
            function Ue() {
              throw new TypeError(
                'You must pass a resolver function as the first argument to the promise constructor',
              );
            }
            function $e() {
              throw new TypeError(
                "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
              );
            }
            var Ee = (function () {
              function _(T) {
                (this[U] = Pe()),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  X !== T &&
                    (typeof T != 'function' && Ue(),
                    this instanceof _ ? Se(this, T) : $e());
              }
              return (
                (_.prototype.catch = function (S) {
                  return this.then(null, S);
                }),
                (_.prototype.finally = function (S) {
                  var L = this,
                    K = L.constructor;
                  return a(S)
                    ? L.then(
                        function (ie) {
                          return K.resolve(S()).then(function () {
                            return ie;
                          });
                        },
                        function (ie) {
                          return K.resolve(S()).then(function () {
                            throw ie;
                          });
                        },
                      )
                    : L.then(S, S);
                }),
                _
              );
            })();
            (Ee.prototype.then = ee),
              (Ee.all = be),
              (Ee.race = Ie),
              (Ee.resolve = G),
              (Ee.reject = Ce),
              (Ee._setScheduler = c),
              (Ee._setAsap = d),
              (Ee._asap = s);
            function he() {
              var _ = void 0;
              if (typeof tt < 'u') _ = tt;
              else if (typeof self < 'u') _ = self;
              else
                try {
                  _ = Function('return this')();
                } catch {
                  throw new Error(
                    'polyfill failed because global object is unavailable in this environment',
                  );
                }
              var T = _.Promise;
              if (T) {
                var S = null;
                try {
                  S = Object.prototype.toString.call(T.resolve());
                } catch {}
                if (S === '[object Promise]' && !T.cast) return;
              }
              _.Promise = Ee;
            }
            return (Ee.polyfill = he), (Ee.Promise = Ee), Ee;
          });
        }),
        l1 = F(function (e) {
          var t = 1e5,
            r = (function () {
              var w = Object.prototype.toString,
                j = Object.prototype.hasOwnProperty;
              return {
                Class: function (W) {
                  return w.call(W).replace(/^\[object *|\]$/g, '');
                },
                HasProperty: function (W, me) {
                  return me in W;
                },
                HasOwnProperty: function (W, me) {
                  return j.call(W, me);
                },
                IsCallable: function (W) {
                  return typeof W == 'function';
                },
                ToInt32: function (W) {
                  return W >> 0;
                },
                ToUint32: function (W) {
                  return W >>> 0;
                },
              };
            })(),
            a = Math.LN2,
            n = Math.abs,
            i = Math.floor,
            o = Math.log,
            l = Math.min,
            u = Math.pow,
            s = Math.round;
          function c(w, j, O) {
            return w < j ? j : w > O ? O : w;
          }
          var d =
              Object.getOwnPropertyNames ||
              function (w) {
                if (w !== Object(w))
                  throw new TypeError(
                    'Object.getOwnPropertyNames called on non-object',
                  );
                var j = [],
                  O;
                for (O in w) r.HasOwnProperty(w, O) && j.push(O);
                return j;
              },
            f;
          Object.defineProperty &&
          (function () {
            try {
              return Object.defineProperty({}, 'x', {}), !0;
            } catch {
              return !1;
            }
          })()
            ? (f = Object.defineProperty)
            : (f = function (j, O, W) {
                if (!j === Object(j))
                  throw new TypeError(
                    'Object.defineProperty called on non-object',
                  );
                return (
                  r.HasProperty(W, 'get') &&
                    Object.prototype.__defineGetter__ &&
                    Object.prototype.__defineGetter__.call(j, O, W.get),
                  r.HasProperty(W, 'set') &&
                    Object.prototype.__defineSetter__ &&
                    Object.prototype.__defineSetter__.call(j, O, W.set),
                  r.HasProperty(W, 'value') && (j[O] = W.value),
                  j
                );
              });
          function p(w) {
            if (d && f) {
              var j = d(w),
                O;
              for (O = 0; O < j.length; O += 1)
                f(w, j[O], {
                  value: w[j[O]],
                  writable: !1,
                  enumerable: !1,
                  configurable: !1,
                });
            }
          }
          function m(w) {
            if (!f) return;
            if (w.length > t)
              throw new RangeError('Array too large for polyfill');
            function j(W) {
              f(w, W, {
                get: function () {
                  return w._getter(W);
                },
                set: function (H) {
                  w._setter(W, H);
                },
                enumerable: !0,
                configurable: !1,
              });
            }
            var O;
            for (O = 0; O < w.length; O += 1) j(O);
          }
          function b(w, j) {
            var O = 32 - j;
            return (w << O) >> O;
          }
          function D(w, j) {
            var O = 32 - j;
            return (w << O) >>> O;
          }
          function h(w) {
            return [w & 255];
          }
          function g(w) {
            return b(w[0], 8);
          }
          function x(w) {
            return [w & 255];
          }
          function E(w) {
            return D(w[0], 8);
          }
          function C(w) {
            return (w = s(Number(w))), [w < 0 ? 0 : w > 255 ? 255 : w & 255];
          }
          function P(w) {
            return [(w >> 8) & 255, w & 255];
          }
          function B(w) {
            return b((w[0] << 8) | w[1], 16);
          }
          function V(w) {
            return [(w >> 8) & 255, w & 255];
          }
          function ae(w) {
            return D((w[0] << 8) | w[1], 16);
          }
          function ee(w) {
            return [(w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255];
          }
          function G(w) {
            return b((w[0] << 24) | (w[1] << 16) | (w[2] << 8) | w[3], 32);
          }
          function U(w) {
            return [(w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255];
          }
          function X(w) {
            return D((w[0] << 24) | (w[1] << 16) | (w[2] << 8) | w[3], 32);
          }
          function ne(w, j, O) {
            var W = (1 << (j - 1)) - 1,
              me,
              H,
              z,
              we,
              ke,
              xe,
              Se;
            function Be(Pe) {
              var Oe = i(Pe),
                dr = Pe - Oe;
              return dr < 0.5 ? Oe : dr > 0.5 || Oe % 2 ? Oe + 1 : Oe;
            }
            for (
              w !== w
                ? ((H = (1 << j) - 1), (z = u(2, O - 1)), (me = 0))
                : w === 1 / 0 || w === -1 / 0
                  ? ((H = (1 << j) - 1), (z = 0), (me = w < 0 ? 1 : 0))
                  : w === 0
                    ? ((H = 0), (z = 0), (me = 1 / w === -1 / 0 ? 1 : 0))
                    : ((me = w < 0),
                      (w = n(w)),
                      w >= u(2, 1 - W)
                        ? ((H = l(i(o(w) / a), 1023)),
                          (z = Be((w / u(2, H)) * u(2, O))),
                          z / u(2, O) >= 2 && ((H = H + 1), (z = 1)),
                          H > W
                            ? ((H = (1 << j) - 1), (z = 0))
                            : ((H = H + W), (z = z - u(2, O))))
                        : ((H = 0), (z = Be(w / u(2, 1 - W - O))))),
                ke = [],
                we = O;
              we;
              we -= 1
            )
              ke.push(z % 2 ? 1 : 0), (z = i(z / 2));
            for (we = j; we; we -= 1) ke.push(H % 2 ? 1 : 0), (H = i(H / 2));
            for (
              ke.push(me ? 1 : 0), ke.reverse(), xe = ke.join(''), Se = [];
              xe.length;

            )
              Se.push(parseInt(xe.substring(0, 8), 2)), (xe = xe.substring(8));
            return Se;
          }
          function se(w, j, O) {
            var W = [],
              me,
              H,
              z,
              we,
              ke,
              xe,
              Se,
              Be;
            for (me = w.length; me; me -= 1)
              for (z = w[me - 1], H = 8; H; H -= 1)
                W.push(z % 2 ? 1 : 0), (z = z >> 1);
            return (
              W.reverse(),
              (we = W.join('')),
              (ke = (1 << (j - 1)) - 1),
              (xe = parseInt(we.substring(0, 1), 2) ? -1 : 1),
              (Se = parseInt(we.substring(1, 1 + j), 2)),
              (Be = parseInt(we.substring(1 + j), 2)),
              Se === (1 << j) - 1
                ? Be === 0
                  ? xe * (1 / 0)
                  : NaN
                : Se > 0
                  ? xe * u(2, Se - ke) * (1 + Be / u(2, O))
                  : Be !== 0
                    ? xe * u(2, -(ke - 1)) * (Be / u(2, O))
                    : xe < 0
                      ? -0
                      : 0
            );
          }
          function te(w) {
            return se(w, 11, 52);
          }
          function Y(w) {
            return ne(w, 11, 52);
          }
          function M(w) {
            return se(w, 8, 23);
          }
          function de(w) {
            return ne(w, 8, 23);
          }
          (function () {
            function w(Pe) {
              if (((Pe = r.ToInt32(Pe)), Pe < 0))
                throw new RangeError(
                  'ArrayBuffer size is not a small enough positive integer',
                );
              (this.byteLength = Pe),
                (this._bytes = []),
                (this._bytes.length = Pe);
              var Oe;
              for (Oe = 0; Oe < this.byteLength; Oe += 1) this._bytes[Oe] = 0;
              p(this);
            }
            e.ArrayBuffer = e.ArrayBuffer || w;
            function j() {}
            function O(Pe, Oe, dr) {
              var Le;
              return (
                (Le = function (Ie, Ce, Ue) {
                  var $e, Ee, he, _;
                  if (!arguments.length || typeof arguments[0] == 'number') {
                    if (((this.length = r.ToInt32(arguments[0])), Ue < 0))
                      throw new RangeError(
                        'ArrayBufferView size is not a small enough positive integer',
                      );
                    (this.byteLength = this.length * this.BYTES_PER_ELEMENT),
                      (this.buffer = new w(this.byteLength)),
                      (this.byteOffset = 0);
                  } else if (
                    I(arguments[0]) === 'object' &&
                    arguments[0].constructor === Le
                  )
                    for (
                      $e = arguments[0],
                        this.length = $e.length,
                        this.byteLength = this.length * this.BYTES_PER_ELEMENT,
                        this.buffer = new w(this.byteLength),
                        this.byteOffset = 0,
                        he = 0;
                      he < this.length;
                      he += 1
                    )
                      this._setter(he, $e._getter(he));
                  else if (
                    I(arguments[0]) === 'object' &&
                    !(
                      arguments[0] instanceof w ||
                      r.Class(arguments[0]) === 'ArrayBuffer'
                    )
                  )
                    for (
                      Ee = arguments[0],
                        this.length = r.ToUint32(Ee.length),
                        this.byteLength = this.length * this.BYTES_PER_ELEMENT,
                        this.buffer = new w(this.byteLength),
                        this.byteOffset = 0,
                        he = 0;
                      he < this.length;
                      he += 1
                    )
                      (_ = Ee[he]), this._setter(he, Number(_));
                  else if (
                    I(arguments[0]) === 'object' &&
                    (arguments[0] instanceof w ||
                      r.Class(arguments[0]) === 'ArrayBuffer')
                  ) {
                    if (
                      ((this.buffer = Ie),
                      (this.byteOffset = r.ToUint32(Ce)),
                      this.byteOffset > this.buffer.byteLength)
                    )
                      throw new RangeError('byteOffset out of range');
                    if (this.byteOffset % this.BYTES_PER_ELEMENT)
                      throw new RangeError(
                        'ArrayBuffer length minus the byteOffset is not a multiple of the element size.',
                      );
                    if (arguments.length < 3) {
                      if (
                        ((this.byteLength =
                          this.buffer.byteLength - this.byteOffset),
                        this.byteLength % this.BYTES_PER_ELEMENT)
                      )
                        throw new RangeError(
                          'length of buffer minus byteOffset not a multiple of the element size',
                        );
                      this.length = this.byteLength / this.BYTES_PER_ELEMENT;
                    } else
                      (this.length = r.ToUint32(Ue)),
                        (this.byteLength =
                          this.length * this.BYTES_PER_ELEMENT);
                    if (
                      this.byteOffset + this.byteLength >
                      this.buffer.byteLength
                    )
                      throw new RangeError(
                        'byteOffset and length reference an area beyond the end of the buffer',
                      );
                  } else throw new TypeError('Unexpected argument type(s)');
                  (this.constructor = Le), p(this), m(this);
                }),
                (Le.prototype = new j()),
                (Le.prototype.BYTES_PER_ELEMENT = Pe),
                (Le.prototype._pack = Oe),
                (Le.prototype._unpack = dr),
                (Le.BYTES_PER_ELEMENT = Pe),
                (Le.prototype._getter = function (be) {
                  if (arguments.length < 1)
                    throw new SyntaxError('Not enough arguments');
                  if (((be = r.ToUint32(be)), !(be >= this.length))) {
                    for (
                      var Ie = [],
                        Ce = 0,
                        Ue = this.byteOffset + be * this.BYTES_PER_ELEMENT;
                      Ce < this.BYTES_PER_ELEMENT;
                      Ce += 1, Ue += 1
                    )
                      Ie.push(this.buffer._bytes[Ue]);
                    return this._unpack(Ie);
                  }
                }),
                (Le.prototype.get = Le.prototype._getter),
                (Le.prototype._setter = function (be, Ie) {
                  if (arguments.length < 2)
                    throw new SyntaxError('Not enough arguments');
                  if (((be = r.ToUint32(be)), be < this.length)) {
                    var Ce = this._pack(Ie),
                      Ue,
                      $e;
                    for (
                      Ue = 0,
                        $e = this.byteOffset + be * this.BYTES_PER_ELEMENT;
                      Ue < this.BYTES_PER_ELEMENT;
                      Ue += 1, $e += 1
                    )
                      this.buffer._bytes[$e] = Ce[Ue];
                  }
                }),
                (Le.prototype.set = function (be, Ie) {
                  if (arguments.length < 1)
                    throw new SyntaxError('Not enough arguments');
                  var Ce, Ue, $e, Ee, he, _, T, S, L, K;
                  if (
                    I(arguments[0]) === 'object' &&
                    arguments[0].constructor === this.constructor
                  ) {
                    if (
                      ((Ce = arguments[0]),
                      ($e = r.ToUint32(arguments[1])),
                      $e + Ce.length > this.length)
                    )
                      throw new RangeError(
                        'Offset plus length of array is out of range',
                      );
                    if (
                      ((S = this.byteOffset + $e * this.BYTES_PER_ELEMENT),
                      (L = Ce.length * this.BYTES_PER_ELEMENT),
                      Ce.buffer === this.buffer)
                    ) {
                      for (
                        K = [], he = 0, _ = Ce.byteOffset;
                        he < L;
                        he += 1, _ += 1
                      )
                        K[he] = Ce.buffer._bytes[_];
                      for (he = 0, T = S; he < L; he += 1, T += 1)
                        this.buffer._bytes[T] = K[he];
                    } else
                      for (
                        he = 0, _ = Ce.byteOffset, T = S;
                        he < L;
                        he += 1, _ += 1, T += 1
                      )
                        this.buffer._bytes[T] = Ce.buffer._bytes[_];
                  } else if (
                    I(arguments[0]) === 'object' &&
                    typeof arguments[0].length < 'u'
                  ) {
                    if (
                      ((Ue = arguments[0]),
                      (Ee = r.ToUint32(Ue.length)),
                      ($e = r.ToUint32(arguments[1])),
                      $e + Ee > this.length)
                    )
                      throw new RangeError(
                        'Offset plus length of array is out of range',
                      );
                    for (he = 0; he < Ee; he += 1)
                      (_ = Ue[he]), this._setter($e + he, Number(_));
                  } else throw new TypeError('Unexpected argument type(s)');
                }),
                (Le.prototype.subarray = function (be, Ie) {
                  (be = r.ToInt32(be)),
                    (Ie = r.ToInt32(Ie)),
                    arguments.length < 1 && (be = 0),
                    arguments.length < 2 && (Ie = this.length),
                    be < 0 && (be = this.length + be),
                    Ie < 0 && (Ie = this.length + Ie),
                    (be = c(be, 0, this.length)),
                    (Ie = c(Ie, 0, this.length));
                  var Ce = Ie - be;
                  return (
                    Ce < 0 && (Ce = 0),
                    new this.constructor(
                      this.buffer,
                      this.byteOffset + be * this.BYTES_PER_ELEMENT,
                      Ce,
                    )
                  );
                }),
                Le
              );
            }
            var W = O(1, h, g),
              me = O(1, x, E),
              H = O(1, C, E),
              z = O(2, P, B),
              we = O(2, V, ae),
              ke = O(4, ee, G),
              xe = O(4, U, X),
              Se = O(4, de, M),
              Be = O(8, Y, te);
            (e.Int8Array = e.Int8Array || W),
              (e.Uint8Array = e.Uint8Array || me),
              (e.Uint8ClampedArray = e.Uint8ClampedArray || H),
              (e.Int16Array = e.Int16Array || z),
              (e.Uint16Array = e.Uint16Array || we),
              (e.Int32Array = e.Int32Array || ke),
              (e.Uint32Array = e.Uint32Array || xe),
              (e.Float32Array = e.Float32Array || Se),
              (e.Float64Array = e.Float64Array || Be);
          })(),
            (function () {
              function w(H, z) {
                return r.IsCallable(H.get) ? H.get(z) : H[z];
              }
              var j = (function () {
                var H = new e.Uint16Array([4660]),
                  z = new e.Uint8Array(H.buffer);
                return w(z, 0) === 18;
              })();
              function O(H, z, we) {
                if (arguments.length === 0) H = new e.ArrayBuffer(0);
                else if (
                  !(H instanceof e.ArrayBuffer || r.Class(H) === 'ArrayBuffer')
                )
                  throw new TypeError('TypeError');
                if (
                  ((this.buffer = H || new e.ArrayBuffer(0)),
                  (this.byteOffset = r.ToUint32(z)),
                  this.byteOffset > this.buffer.byteLength)
                )
                  throw new RangeError('byteOffset out of range');
                if (
                  (arguments.length < 3
                    ? (this.byteLength =
                        this.buffer.byteLength - this.byteOffset)
                    : (this.byteLength = r.ToUint32(we)),
                  this.byteOffset + this.byteLength > this.buffer.byteLength)
                )
                  throw new RangeError(
                    'byteOffset and length reference an area beyond the end of the buffer',
                  );
                p(this);
              }
              function W(H) {
                return function (z, we) {
                  if (
                    ((z = r.ToUint32(z)),
                    z + H.BYTES_PER_ELEMENT > this.byteLength)
                  )
                    throw new RangeError('Array index out of range');
                  z += this.byteOffset;
                  var ke = new e.Uint8Array(
                      this.buffer,
                      z,
                      H.BYTES_PER_ELEMENT,
                    ),
                    xe = [],
                    Se;
                  for (Se = 0; Se < H.BYTES_PER_ELEMENT; Se += 1)
                    xe.push(w(ke, Se));
                  return (
                    !!we == !!j && xe.reverse(),
                    w(new H(new e.Uint8Array(xe).buffer), 0)
                  );
                };
              }
              (O.prototype.getUint8 = W(e.Uint8Array)),
                (O.prototype.getInt8 = W(e.Int8Array)),
                (O.prototype.getUint16 = W(e.Uint16Array)),
                (O.prototype.getInt16 = W(e.Int16Array)),
                (O.prototype.getUint32 = W(e.Uint32Array)),
                (O.prototype.getInt32 = W(e.Int32Array)),
                (O.prototype.getFloat32 = W(e.Float32Array)),
                (O.prototype.getFloat64 = W(e.Float64Array));
              function me(H) {
                return function (z, we, ke) {
                  if (
                    ((z = r.ToUint32(z)),
                    z + H.BYTES_PER_ELEMENT > this.byteLength)
                  )
                    throw new RangeError('Array index out of range');
                  var xe = new H([we]),
                    Se = new e.Uint8Array(xe.buffer),
                    Be = [],
                    Pe,
                    Oe;
                  for (Pe = 0; Pe < H.BYTES_PER_ELEMENT; Pe += 1)
                    Be.push(w(Se, Pe));
                  !!ke == !!j && Be.reverse(),
                    (Oe = new e.Uint8Array(
                      this.buffer,
                      z,
                      H.BYTES_PER_ELEMENT,
                    )),
                    Oe.set(Be);
                };
              }
              (O.prototype.setUint8 = me(e.Uint8Array)),
                (O.prototype.setInt8 = me(e.Int8Array)),
                (O.prototype.setUint16 = me(e.Uint16Array)),
                (O.prototype.setInt16 = me(e.Int16Array)),
                (O.prototype.setUint32 = me(e.Uint32Array)),
                (O.prototype.setInt32 = me(e.Int32Array)),
                (O.prototype.setFloat32 = me(e.Float32Array)),
                (O.prototype.setFloat64 = me(e.Float64Array)),
                (e.DataView = e.DataView || O);
            })();
        }),
        u1 = F(function (e) {
          (function (t) {
            if (t.WeakMap) return;
            var r = Object.prototype.hasOwnProperty,
              a =
                Object.defineProperty &&
                (function () {
                  try {
                    return Object.defineProperty({}, 'x', { value: 1 }).x === 1;
                  } catch {}
                })(),
              n = function (l, u, s) {
                a
                  ? Object.defineProperty(l, u, {
                      configurable: !0,
                      writable: !0,
                      value: s,
                    })
                  : (l[u] = s);
              };
            t.WeakMap = (function () {
              function o() {
                if (this === void 0)
                  throw new TypeError("Constructor WeakMap requires 'new'");
                if ((n(this, '_id', u('_WeakMap')), arguments.length > 0))
                  throw new TypeError('WeakMap iterable is not supported');
              }
              n(o.prototype, 'delete', function (c) {
                if ((l(this, 'delete'), !i(c))) return !1;
                var d = c[this._id];
                return d && d[0] === c ? (delete c[this._id], !0) : !1;
              }),
                n(o.prototype, 'get', function (c) {
                  if ((l(this, 'get'), !!i(c))) {
                    var d = c[this._id];
                    if (d && d[0] === c) return d[1];
                  }
                }),
                n(o.prototype, 'has', function (c) {
                  if ((l(this, 'has'), !i(c))) return !1;
                  var d = c[this._id];
                  return !!(d && d[0] === c);
                }),
                n(o.prototype, 'set', function (c, d) {
                  if ((l(this, 'set'), !i(c)))
                    throw new TypeError('Invalid value used as weak map key');
                  var f = c[this._id];
                  return f && f[0] === c
                    ? ((f[1] = d), this)
                    : (n(c, this._id, [c, d]), this);
                });
              function l(c, d) {
                if (!i(c) || !r.call(c, '_id'))
                  throw new TypeError(
                    d + ' method called on incompatible receiver ' + I(c),
                  );
              }
              function u(c) {
                return c + '_' + s() + '.' + s();
              }
              function s() {
                return Math.random().toString().substring(2);
              }
              return n(o, '_polyfill', !0), o;
            })();
            function i(o) {
              return Object(o) === o;
            }
          })(
            typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : typeof y < 'u'
                  ? y
                  : typeof tt < 'u'
                    ? tt
                    : e,
          );
        }),
        s1 = [
          {
            name: 'NA',
            value: 'inapplicable',
            priority: 0,
            group: 'inapplicable',
          },
          { name: 'PASS', value: 'passed', priority: 1, group: 'passes' },
          {
            name: 'CANTTELL',
            value: 'cantTell',
            priority: 2,
            group: 'incomplete',
          },
          { name: 'FAIL', value: 'failed', priority: 3, group: 'violations' },
        ],
        it = {
          helpUrlBase: 'https://dequeuniversity.com/rules/',
          gridSize: 200,
          results: [],
          resultGroups: [],
          resultGroupMap: {},
          impact: Object.freeze(['minor', 'moderate', 'serious', 'critical']),
          preload: Object.freeze({ assets: ['cssom', 'media'], timeout: 1e4 }),
          allOrigins: '<unsafe_all_origins>',
          sameOrigin: '<same_origin>',
        };
      s1.forEach(function (e) {
        var t = e.name,
          r = e.value,
          a = e.priority,
          n = e.group;
        (it[t] = r),
          (it[t + '_PRIO'] = a),
          (it[t + '_GROUP'] = n),
          (it.results[a] = r),
          (it.resultGroups[a] = n),
          (it.resultGroupMap[r] = n);
      }),
        Object.freeze(it.results),
        Object.freeze(it.resultGroups),
        Object.freeze(it.resultGroupMap),
        Object.freeze(it);
      var Z = it;
      function c1() {
        (typeof console > 'u' ? 'undefined' : I(console)) === 'object' &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments);
      }
      var It = c1,
        d1 = /[\t\r\n\f]/g,
        f1 = (function () {
          function e() {
            Ut(this, e), (this.parent = void 0);
          }
          return (
            $t(e, [
              {
                key: 'props',
                get: function () {
                  throw new Error(
                    'VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties',
                  );
                },
              },
              {
                key: 'attrNames',
                get: function () {
                  throw new Error(
                    'VirtualNode class must have an "attrNames" property',
                  );
                },
              },
              {
                key: 'attr',
                value: function () {
                  throw new Error(
                    'VirtualNode class must have an "attr" function',
                  );
                },
              },
              {
                key: 'hasAttr',
                value: function () {
                  throw new Error(
                    'VirtualNode class must have a "hasAttr" function',
                  );
                },
              },
              {
                key: 'hasClass',
                value: function (r) {
                  var a = this.attr('class');
                  if (!a) return !1;
                  var n = ' ' + r + ' ';
                  return (' ' + a + ' ').replace(d1, ' ').indexOf(n) >= 0;
                },
              },
            ]),
            e
          );
        })(),
        Q = f1,
        La = {};
      De(La, {
        DqElement: function () {
          return ot;
        },
        aggregate: function () {
          return Ur;
        },
        aggregateChecks: function () {
          return lo;
        },
        aggregateNodeResults: function () {
          return uo;
        },
        aggregateResult: function () {
          return so;
        },
        areStylesSet: function () {
          return D1;
        },
        assert: function () {
          return fe;
        },
        checkHelper: function () {
          return Wa;
        },
        clone: function () {
          return vt;
        },
        closest: function () {
          return Ke;
        },
        collectResultsFromFrames: function () {
          return Bo;
        },
        contains: function () {
          return Mt;
        },
        convertSelector: function () {
          return Xr;
        },
        cssParser: function () {
          return Do;
        },
        deepMerge: function () {
          return sn;
        },
        escapeSelector: function () {
          return Ae;
        },
        extendMetaData: function () {
          return cn;
        },
        filterHtmlAttrs: function () {
          return es;
        },
        finalizeRuleResult: function () {
          return hr;
        },
        findBy: function () {
          return wr;
        },
        getAllChecks: function () {
          return ta;
        },
        getAncestry: function () {
          return Kr;
        },
        getBaseLang: function () {
          return zt;
        },
        getCheckMessage: function () {
          return av;
        },
        getCheckOption: function () {
          return ya;
        },
        getEnvironmentData: function () {
          return At;
        },
        getFlattenedTree: function () {
          return Zn;
        },
        getFrameContexts: function () {
          return wv;
        },
        getFriendlyUriEnd: function () {
          return po;
        },
        getNodeAttributes: function () {
          return Wr;
        },
        getNodeFromTree: function () {
          return N;
        },
        getPreloadConfig: function () {
          return Ku;
        },
        getRootNode: function () {
          return _r;
        },
        getRule: function () {
          return Mu;
        },
        getScroll: function () {
          return yt;
        },
        getScrollState: function () {
          return Ev;
        },
        getSelector: function () {
          return $a;
        },
        getSelectorData: function () {
          return Yr;
        },
        getShadowSelector: function () {
          return ja;
        },
        getStandards: function () {
          return Av;
        },
        getStyleSheetFactory: function () {
          return Bu;
        },
        getXpath: function () {
          return yo;
        },
        injectStyle: function () {
          return Tv;
        },
        isHidden: function () {
          return kv;
        },
        isHtmlElement: function () {
          return ii;
        },
        isNodeInContext: function () {
          return oi;
        },
        isShadowRoot: function () {
          return aa;
        },
        isValidLang: function () {
          return xa;
        },
        isXHTML: function () {
          return Gr;
        },
        matchAncestry: function () {
          return li;
        },
        matches: function () {
          return Ka;
        },
        matchesExpression: function () {
          return Kt;
        },
        matchesSelector: function () {
          return Gt;
        },
        memoize: function () {
          return We;
        },
        mergeResults: function () {
          return ra;
        },
        nodeSorter: function () {
          return ui;
        },
        parseCrossOriginStylesheet: function () {
          return ci;
        },
        parseSameOriginStylesheet: function () {
          return ju;
        },
        parseStylesheet: function () {
          return si;
        },
        performanceTimer: function () {
          return Re;
        },
        pollyfillElementsFromPoint: function () {
          return Hu;
        },
        preload: function () {
          return Xu;
        },
        preloadCssom: function () {
          return Uu;
        },
        preloadMedia: function () {
          return Gu;
        },
        processMessage: function () {
          return ri;
        },
        publishMetaData: function () {
          return wa;
        },
        querySelectorAll: function () {
          return Ze;
        },
        querySelectorAllFilter: function () {
          return mt;
        },
        queue: function () {
          return st;
        },
        respondable: function () {
          return lt;
        },
        ruleShouldRun: function () {
          return Zu;
        },
        select: function () {
          return fi;
        },
        sendCommandToFrame: function () {
          return Po;
        },
        setScrollState: function () {
          return sg;
        },
        shadowSelect: function () {
          return cg;
        },
        shadowSelectAll: function () {
          return pi;
        },
        shouldPreload: function () {
          return Yu;
        },
        toArray: function () {
          return fo;
        },
        tokenList: function () {
          return He;
        },
        uniqueArray: function () {
          return Ir;
        },
        uuid: function () {
          return df;
        },
        validInputTypes: function () {
          return _a;
        },
        validLangs: function () {
          return is;
        },
      });
      function p1(e, t, r) {
        (t = t.slice()), r && t.push(r);
        var a = t
          .map(function (n) {
            return e.indexOf(n);
          })
          .sort();
        return e[a.pop()];
      }
      var Ur = p1,
        m1 = Z.CANTTELL_PRIO,
        h1 = Z.FAIL_PRIO,
        $r = [];
      ($r[Z.PASS_PRIO] = !0),
        ($r[Z.CANTTELL_PRIO] = null),
        ($r[Z.FAIL_PRIO] = !1);
      var io = ['any', 'all', 'none'];
      function oo(e, t) {
        return io.reduce(function (r, a) {
          return (
            (r[a] = (e[a] || []).map(function (n) {
              return t(n, a);
            })),
            r
          );
        }, {});
      }
      function v1(e) {
        var t = Object.assign({}, e);
        oo(t, function (n, i) {
          var o = typeof n.result > 'u' ? -1 : $r.indexOf(n.result);
          (n.priority = o !== -1 ? o : Z.CANTTELL_PRIO),
            i === 'none' &&
              (n.priority === Z.PASS_PRIO
                ? (n.priority = Z.FAIL_PRIO)
                : n.priority === Z.FAIL_PRIO && (n.priority = Z.PASS_PRIO));
        });
        var r = {
          all: t.all.reduce(function (n, i) {
            return Math.max(n, i.priority);
          }, 0),
          none: t.none.reduce(function (n, i) {
            return Math.max(n, i.priority);
          }, 0),
          any:
            t.any.reduce(function (n, i) {
              return Math.min(n, i.priority);
            }, 4) % 4,
        };
        t.priority = Math.max(r.all, r.none, r.any);
        var a = [];
        return (
          io.forEach(function (n) {
            (t[n] = t[n].filter(function (i) {
              return i.priority === t.priority && i.priority === r[n];
            })),
              t[n].forEach(function (i) {
                return a.push(i.impact);
              });
          }),
          [m1, h1].includes(t.priority)
            ? (t.impact = Ur(Z.impact, a))
            : (t.impact = null),
          oo(t, function (n) {
            delete n.result, delete n.priority;
          }),
          (t.result = Z.results[t.priority]),
          delete t.priority,
          t
        );
      }
      var lo = v1;
      function g1(e) {
        var t = v._audit.rules.find(function (r) {
          return r.id === e.id;
        });
        return (
          t &&
            t.impact &&
            e.nodes.forEach(function (r) {
              ['any', 'all', 'none'].forEach(function (a) {
                (r[a] || []).forEach(function (n) {
                  n.impact = t.impact;
                });
              });
            }),
          Object.assign(e, uo(e.nodes)),
          delete e.nodes,
          e
        );
      }
      var hr = g1;
      function b1(e) {
        var t = {};
        if (
          ((e = e.map(function (i) {
            if (i.any && i.all && i.none) return lo(i);
            if (Array.isArray(i.node)) return hr(i);
            throw new TypeError('Invalid Result type');
          })),
          e && e.length)
        ) {
          var r = e.map(function (i) {
            return i.result;
          });
          t.result = Ur(Z.results, r, t.result);
        } else t.result = 'inapplicable';
        Z.resultGroups.forEach(function (i) {
          return (t[i] = []);
        }),
          e.forEach(function (i) {
            var o = Z.resultGroupMap[i.result];
            t[o].push(i);
          });
        var a = Z.FAIL_GROUP;
        if ((t[a].length === 0 && (a = Z.CANTTELL_GROUP), t[a].length > 0)) {
          var n = t[a].map(function (i) {
            return i.impact;
          });
          t.impact = Ur(Z.impact, n) || null;
        } else t.impact = null;
        return t;
      }
      var uo = b1;
      function Va(e, t, r) {
        var a = Object.assign({}, t);
        (a.nodes = (a[r] || []).concat()),
          Z.resultGroups.forEach(function (n) {
            delete a[n];
          }),
          e[r].push(a);
      }
      function y1(e) {
        var t = {};
        return (
          Z.resultGroups.forEach(function (r) {
            return (t[r] = []);
          }),
          e.forEach(function (r) {
            r.error
              ? Va(t, r, Z.CANTTELL_GROUP)
              : r.result === Z.NA
                ? Va(t, r, Z.NA_GROUP)
                : Z.resultGroups.forEach(function (a) {
                    Array.isArray(r[a]) && r[a].length > 0 && Va(t, r, a);
                  });
          }),
          t
        );
      }
      var so = y1;
      function co(e, t, r) {
        var a = y.getComputedStyle(e, null);
        if (!a) return !1;
        for (var n = 0; n < t.length; ++n) {
          var i = t[n];
          if (a.getPropertyValue(i.property) === i.value) return !0;
        }
        return !e.parentNode || e.nodeName.toUpperCase() === r.toUpperCase()
          ? !1
          : co(e.parentNode, t, r);
      }
      var D1 = co;
      function w1(e, t) {
        if (!e) throw new Error(t);
      }
      var fe = w1;
      function _1(e) {
        return Array.prototype.slice.call(e);
      }
      var fo = _1;
      function x1(e) {
        for (
          var t = String(e),
            r = t.length,
            a = -1,
            n,
            i = '',
            o = t.charCodeAt(0);
          ++a < r;

        ) {
          if (((n = t.charCodeAt(a)), n == 0)) {
            i += '�';
            continue;
          }
          if (
            (n >= 1 && n <= 31) ||
            n == 127 ||
            (a == 0 && n >= 48 && n <= 57) ||
            (a == 1 && n >= 48 && n <= 57 && o == 45)
          ) {
            i += '\\' + n.toString(16) + ' ';
            continue;
          }
          if (a == 0 && r == 1 && n == 45) {
            i += '\\' + t.charAt(a);
            continue;
          }
          if (
            n >= 128 ||
            n == 45 ||
            n == 95 ||
            (n >= 48 && n <= 57) ||
            (n >= 65 && n <= 90) ||
            (n >= 97 && n <= 122)
          ) {
            i += t.charAt(a);
            continue;
          }
          i += '\\' + t.charAt(a);
        }
        return i;
      }
      var Ae = x1;
      function E1() {
        var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
        return (
          e.length !== 0 && (e.match(/[0-9]/g) || '').length >= e.length / 2
        );
      }
      function vr(e, t) {
        return [e.substring(0, t), e.substring(t)];
      }
      function gr(e) {
        return e.replace(/\s+$/, '');
      }
      function A1(e) {
        var t = e,
          r = '',
          a = '',
          n = '',
          i = '',
          o = '',
          l = '';
        if (e.includes('#')) {
          var u = vr(e, e.indexOf('#')),
            s = ve(u, 2);
          (e = s[0]), (l = s[1]);
        }
        if (e.includes('?')) {
          var c = vr(e, e.indexOf('?')),
            d = ve(c, 2);
          (e = d[0]), (o = d[1]);
        }
        if (e.includes('://')) {
          var f = e.split('://'),
            p = ve(f, 2);
          (r = p[0]), (e = p[1]);
          var m = vr(e, e.indexOf('/')),
            b = ve(m, 2);
          (a = b[0]), (e = b[1]);
        } else if (e.substr(0, 2) === '//') {
          e = e.substr(2);
          var D = vr(e, e.indexOf('/')),
            h = ve(D, 2);
          (a = h[0]), (e = h[1]);
        }
        if (
          (a.substr(0, 4) === 'www.' && (a = a.substr(4)), a && a.includes(':'))
        ) {
          var g = vr(a, a.indexOf(':')),
            x = ve(g, 2);
          (a = x[0]), (n = x[1]);
        }
        return (
          (i = e),
          {
            original: t,
            protocol: r,
            domain: a,
            port: n,
            path: i,
            query: o,
            hash: l,
          }
        );
      }
      function F1() {
        var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '',
          t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          !(
            e.length <= 1 ||
            e.substr(0, 5) === 'data:' ||
            e.substr(0, 11) === 'javascript:' ||
            e.includes('?')
          )
        ) {
          var r = t.currentDomain,
            a = t.maxLength,
            n = a === void 0 ? 25 : a,
            i = A1(e),
            o = i.path,
            l = i.domain,
            u = i.hash,
            s = o.substr(o.substr(0, o.length - 2).lastIndexOf('/') + 1);
          if (u)
            return s && (s + u).length <= n
              ? gr(s + u)
              : s.length < 2 && u.length > 2 && u.length <= n
                ? gr(u)
                : void 0;
          if (
            (l && l.length < n && o.length <= 1) ||
            (o === '/' + s && l && r && l !== r && (l + o).length <= n)
          )
            return gr(l + o);
          var c = s.lastIndexOf('.');
          if (
            (c === -1 || c > 1) &&
            (c !== -1 || s.length > 2) &&
            s.length <= n &&
            !s.match(/index(\.[a-zA-Z]{2-4})?/) &&
            !E1(s)
          )
            return gr(s);
        }
      }
      var po = F1;
      function C1(e) {
        return e.attributes instanceof y.NamedNodeMap
          ? e.attributes
          : e.cloneNode(!1).attributes;
      }
      var Wr = C1,
        T1 = (function () {
          var e;
          function t(r) {
            var a,
              n,
              i = [
                'matches',
                'matchesSelector',
                'mozMatchesSelector',
                'webkitMatchesSelector',
                'msMatchesSelector',
              ],
              o = i.length;
            for (a = 0; a < o; a++) if (((n = i[a]), r[n])) return n;
          }
          return function (r, a) {
            return (!e || !r[e]) && (e = t(r)), r[e] ? r[e](a) : !1;
          };
        })(),
        Gt = T1;
      function k1(e) {
        return e.createElement ? e.createElement('A').localName === 'A' : !1;
      }
      var Gr = k1;
      function R1(e, t) {
        var r =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!t) return '';
        var a = (t.getRootNode && t.getRootNode()) || k;
        if (a.nodeType !== 11) return e(t, r, a);
        for (var n = []; a.nodeType === 11; ) {
          if (!a.host) return '';
          n.unshift({ elm: t, doc: a }), (t = a.host), (a = t.getRootNode());
        }
        return (
          n.unshift({ elm: t, doc: a }),
          n.map(function (i) {
            var o = i.elm,
              l = i.doc;
            return e(o, r, l);
          })
        );
      }
      var ja = R1,
        Ha,
        S1 = [
          'class',
          'style',
          'id',
          'selected',
          'checked',
          'disabled',
          'tabindex',
          'aria-checked',
          'aria-selected',
          'aria-invalid',
          'aria-activedescendant',
          'aria-busy',
          'aria-disabled',
          'aria-expanded',
          'aria-grabbed',
          'aria-pressed',
          'aria-valuenow',
        ],
        O1 = 31,
        I1 = /([\\"])/g,
        P1 = /(\r\n|\r|\n)/g;
      function za(e) {
        return e.replace(I1, '\\$1').replace(P1, '\\a ');
      }
      function mo(e, t) {
        var r = t.name,
          a;
        if (r.indexOf('href') !== -1 || r.indexOf('src') !== -1) {
          var n = po(e.getAttribute(r));
          n
            ? (a = Ae(t.name) + '$="' + za(n) + '"')
            : (a = Ae(t.name) + '="' + za(e.getAttribute(r)) + '"');
        } else a = Ae(r) + '="' + za(t.value) + '"';
        return a;
      }
      function Ua(e, t) {
        return e.count < t.count ? -1 : e.count === t.count ? 0 : 1;
      }
      function ho(e) {
        return (
          !S1.includes(e.name) &&
          e.name.indexOf(':') === -1 &&
          (!e.value || e.value.length < O1)
        );
      }
      function Yr(e) {
        var t = { classes: {}, tags: {}, attributes: {} };
        e = Array.isArray(e) ? e : [e];
        for (
          var r = e.slice(),
            a = [],
            n = function () {
              var o = r.pop(),
                l = o.actualNode;
              if (l.querySelectorAll) {
                var u = l.nodeName;
                t.tags[u] ? t.tags[u]++ : (t.tags[u] = 1),
                  l.classList &&
                    Array.from(l.classList).forEach(function (s) {
                      var c = Ae(s);
                      t.classes[c] ? t.classes[c]++ : (t.classes[c] = 1);
                    }),
                  l.hasAttributes() &&
                    Array.from(Wr(l))
                      .filter(ho)
                      .forEach(function (s) {
                        var c = mo(l, s);
                        c &&
                          (t.attributes[c]
                            ? t.attributes[c]++
                            : (t.attributes[c] = 1));
                      });
              }
              for (
                o.children.length && (a.push(r), (r = o.children.slice()));
                !r.length && a.length;

              )
                r = a.pop();
            };
          r.length;

        )
          n();
        return t;
      }
      function M1(e, t) {
        var r = [],
          a = t.classes,
          n = t.tags;
        return (
          e.classList &&
            Array.from(e.classList).forEach(function (i) {
              var o = Ae(i);
              a[o] < n[e.nodeName] &&
                r.push({ name: o, count: a[o], species: 'class' });
            }),
          r.sort(Ua)
        );
      }
      function N1(e, t) {
        var r = (e.parentNode && Array.from(e.parentNode.children || '')) || [],
          a = r.find(function (i) {
            return i !== e && Gt(i, t);
          });
        if (a) {
          var n = 1 + r.indexOf(e);
          return ':nth-child(' + n + ')';
        } else return '';
      }
      function q1(e) {
        if (e.getAttribute('id')) {
          var t = (e.getRootNode && e.getRootNode()) || k,
            r = '#' + Ae(e.getAttribute('id') || '');
          if (!r.match(/player_uid_/) && t.querySelectorAll(r).length === 1)
            return r;
        }
      }
      function vo(e) {
        return (
          typeof Ha > 'u' && (Ha = Gr(k)),
          Ae(Ha ? e.localName : e.nodeName.toLowerCase())
        );
      }
      function B1(e, t) {
        var r = [],
          a = t.attributes,
          n = t.tags;
        return (
          e.hasAttributes() &&
            Array.from(Wr(e))
              .filter(ho)
              .forEach(function (i) {
                var o = mo(e, i);
                o &&
                  a[o] < n[e.nodeName] &&
                  r.push({ name: o, count: a[o], species: 'attribute' });
              }),
          r.sort(Ua)
        );
      }
      function L1(e, t) {
        var r = '',
          a,
          n = M1(e, t),
          i = B1(e, t);
        return (
          n.length && n[0].count === 1
            ? (a = [n[0]])
            : i.length && i[0].count === 1
              ? ((a = [i[0]]), (r = vo(e)))
              : ((a = n.concat(i)),
                a.sort(Ua),
                (a = a.slice(0, 3)),
                a.some(function (o) {
                  return o.species === 'class';
                })
                  ? a.sort(function (o, l) {
                      return o.species !== l.species && o.species === 'class'
                        ? -1
                        : o.species === l.species
                          ? 0
                          : 1;
                    })
                  : (r = vo(e))),
          (r += a.reduce(function (o, l) {
            switch (l.species) {
              case 'class':
                return o + '.' + l.name;
              case 'attribute':
                return o + '[' + l.name + ']';
            }
            return o;
          }, ''))
        );
      }
      function V1(e, t, r) {
        if (!v._selectorData)
          throw new Error('Expect axe._selectorData to be set up');
        var a = t.toRoot,
          n = a === void 0 ? !1 : a,
          i,
          o;
        do {
          var l = q1(e);
          l || ((l = L1(e, v._selectorData)), (l += N1(e, l))),
            i ? (i = l + ' > ' + i) : (i = l),
            o
              ? (o = o.filter(function (u) {
                  return Gt(u, i);
                }))
              : (o = Array.from(r.querySelectorAll(i))),
            (e = e.parentElement);
        } while ((o.length > 1 || n) && e && e.nodeType !== 11);
        return o.length === 1
          ? i
          : i.indexOf(' > ') !== -1
            ? ':root' + i.substring(i.indexOf(' > '))
            : ':root';
      }
      function $a(e, t) {
        return ja(V1, e, t);
      }
      function go(e) {
        var t = e.nodeName.toLowerCase(),
          r = e.parentElement;
        if (!r) return t;
        var a = '';
        if (t !== 'head' && t !== 'body' && r.children.length > 1) {
          var n = Array.prototype.indexOf.call(r.children, e) + 1;
          a = ':nth-child('.concat(n, ')');
        }
        return go(r) + ' > ' + t + a;
      }
      function Kr(e, t) {
        return ja(go, e, t);
      }
      function bo(e, t) {
        var r, a;
        if (!e) return [];
        if (!t && e.nodeType === 9) return (t = [{ str: 'html' }]), t;
        if (
          ((t = t || []),
          e.parentNode && e.parentNode !== e && (t = bo(e.parentNode, t)),
          e.previousSibling)
        ) {
          (a = 1), (r = e.previousSibling);
          do
            r.nodeType === 1 && r.nodeName === e.nodeName && a++,
              (r = r.previousSibling);
          while (r);
          a === 1 && (a = null);
        } else if (e.nextSibling) {
          r = e.nextSibling;
          do
            r.nodeType === 1 && r.nodeName === e.nodeName
              ? ((a = 1), (r = null))
              : ((a = null), (r = r.previousSibling));
          while (r);
        }
        if (e.nodeType === 1) {
          var n = {};
          n.str = e.nodeName.toLowerCase();
          var i = e.getAttribute && Ae(e.getAttribute('id'));
          i &&
            e.ownerDocument.querySelectorAll('#' + i).length === 1 &&
            (n.id = e.getAttribute('id')),
            a > 1 && (n.count = a),
            t.push(n);
        }
        return t;
      }
      function j1(e) {
        return e.reduce(function (t, r) {
          return r.id
            ? '/'.concat(r.str, "[@id='").concat(r.id, "']")
            : t +
                '/'.concat(r.str) +
                (r.count > 0 ? '['.concat(r.count, ']') : '');
        }, '');
      }
      function H1(e) {
        var t = bo(e);
        return j1(t);
      }
      var yo = H1,
        br = {},
        z1 = {
          set: function (t, r) {
            U1(t), (br[t] = r);
          },
          get: function (t, r) {
            if (($1(r), t in br)) return br[t];
            if (typeof r == 'function') {
              var a = r();
              return (
                fe(
                  a !== void 0,
                  'Cache creator function should not return undefined',
                ),
                this.set(t, a),
                br[t]
              );
            }
          },
          clear: function () {
            br = {};
          },
        };
      function U1(e) {
        fe(typeof e == 'string', 'key must be a string, ' + I(e) + ' given'),
          fe(e !== '', 'key must not be empty');
      }
      function $1(e) {
        fe(
          typeof e == 'function' || typeof e > 'u',
          'creator must be a function or undefined, ' + I(e) + ' given',
        );
      }
      var oe = z1;
      function W1(e, t) {
        var r = t || e;
        return oe.get('nodeMap') ? oe.get('nodeMap').get(r) : null;
      }
      var N = W1;
      function G1(e, t) {
        if (((t = t || 300), e.length > t)) {
          var r = e.indexOf('>');
          e = e.substring(0, r + 1);
        }
        return e;
      }
      function Y1(e) {
        if (!(e != null && e.outerHTML)) return '';
        var t = e.outerHTML;
        return (
          !t &&
            typeof y.XMLSerializer == 'function' &&
            (t = new y.XMLSerializer().serializeToString(e)),
          G1(t || '')
        );
      }
      function Yt(e) {
        var t,
          r,
          a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          n =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (
          ((this.spec = n),
          e instanceof Q
            ? ((this._virtualNode = e), (this._element = e.actualNode))
            : ((this._element = e), (this._virtualNode = N(e))),
          (this.fromFrame =
            ((t = this.spec.selector) === null || t === void 0
              ? void 0
              : t.length) > 1),
          a.absolutePaths && (this._options = { toRoot: !0 }),
          (this.nodeIndexes = []),
          Array.isArray(this.spec.nodeIndexes)
            ? (this.nodeIndexes = this.spec.nodeIndexes)
            : typeof ((r = this._virtualNode) === null || r === void 0
                ? void 0
                : r.nodeIndex) == 'number' &&
              (this.nodeIndexes = [this._virtualNode.nodeIndex]),
          (this.source = null),
          !v._audit.noHtml)
        ) {
          var i;
          this.source =
            (i = this.spec.source) !== null && i !== void 0
              ? i
              : Y1(this._element);
        }
      }
      (Yt.prototype = {
        get selector() {
          return this.spec.selector || [$a(this.element, this._options)];
        },
        get ancestry() {
          return this.spec.ancestry || [Kr(this.element)];
        },
        get xpath() {
          return this.spec.xpath || [yo(this.element)];
        },
        get element() {
          return this._element;
        },
        toJSON: function () {
          return {
            selector: this.selector,
            source: this.source,
            xpath: this.xpath,
            ancestry: this.ancestry,
            nodeIndexes: this.nodeIndexes,
          };
        },
      }),
        (Yt.fromFrame = function (t, r, a) {
          var n = Yt.mergeSpecs(t, a);
          return new Yt(a.element, r, n);
        }),
        (Yt.mergeSpecs = function (t, r) {
          return le({}, t, {
            selector: [].concat(re(r.selector), re(t.selector)),
            ancestry: [].concat(re(r.ancestry), re(t.ancestry)),
            xpath: [].concat(re(r.xpath), re(t.xpath)),
            nodeIndexes: [].concat(re(r.nodeIndexes), re(t.nodeIndexes)),
          });
        });
      var ot = Yt;
      function K1(e, t, r, a) {
        return {
          isAsync: !1,
          async: function () {
            return (
              (this.isAsync = !0),
              function (i) {
                i instanceof Error ? a(i) : ((e.result = i), r(e));
              }
            );
          },
          data: function (i) {
            e.data = i;
          },
          relatedNodes: function (i) {
            y.Node &&
              ((i = i instanceof y.Node ? [i] : fo(i)),
              i.every(function (o) {
                return o instanceof y.Node || o.actualNode;
              }) &&
                (e.relatedNodes = i.map(function (o) {
                  return new ot(o, t);
                })));
          },
        };
      }
      var Wa = K1;
      function Ga(e) {
        var t,
          r,
          a,
          n,
          i = e;
        if (
          ((t = y) !== null && t !== void 0 && t.Node && e instanceof y.Node) ||
          ((r = y) !== null &&
            r !== void 0 &&
            r.HTMLCollection &&
            e instanceof y.HTMLCollection)
        )
          return e;
        if (e !== null && I(e) === 'object')
          if (Array.isArray(e))
            for (i = [], a = 0, n = e.length; a < n; a++) i[a] = Ga(e[a]);
          else {
            i = {};
            for (a in e) i[a] = Ga(e[a]);
          }
        return i;
      }
      var vt = Ga,
        X1 = nt(Wi()),
        yr = new X1.CssSelectorParser();
      yr.registerSelectorPseudos('not'),
        yr.registerSelectorPseudos('is'),
        yr.registerNestingOperators('>'),
        yr.registerAttrEqualityMods('^', '$', '*', '~');
      var Do = yr;
      function J1(e, t) {
        return (
          e.props.nodeType === 1 &&
          (t.tag === '*' || e.props.nodeName === t.tag)
        );
      }
      function Q1(e, t) {
        return (
          !t.classes ||
          t.classes.every(function (r) {
            return e.hasClass(r.value);
          })
        );
      }
      function Z1(e, t) {
        return (
          !t.attributes ||
          t.attributes.every(function (r) {
            var a = e.attr(r.key);
            return a !== null && r.test(a);
          })
        );
      }
      function ef(e, t) {
        return !t.id || e.props.id === t.id;
      }
      function tf(e, t) {
        return !!(
          !t.pseudos ||
          t.pseudos.every(function (r) {
            if (r.name === 'not')
              return !r.expressions.some(function (a) {
                return Kt(e, a);
              });
            if (r.name === 'is')
              return r.expressions.some(function (a) {
                return Kt(e, a);
              });
            throw new Error(
              'the pseudo selector ' + r.name + ' has not yet been implemented',
            );
          })
        );
      }
      function wo(e, t) {
        return J1(e, t) && Q1(e, t) && Z1(e, t) && ef(e, t) && tf(e, t);
      }
      var Dr = (function () {
          var e = /(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,
            t = '\\';
          return function (r) {
            return r.replace(e, t);
          };
        })(),
        Ya = /\\/g;
      function rf(e) {
        if (e)
          return e.map(function (t) {
            var r = t.name.replace(Ya, ''),
              a = (t.value || '').replace(Ya, ''),
              n,
              i;
            switch (t.operator) {
              case '^=':
                i = new RegExp('^' + Dr(a));
                break;
              case '$=':
                i = new RegExp(Dr(a) + '$');
                break;
              case '~=':
                i = new RegExp('(^|\\s)' + Dr(a) + '(\\s|$)');
                break;
              case '|=':
                i = new RegExp('^' + Dr(a) + '(-|$)');
                break;
              case '=':
                n = function (l) {
                  return a === l;
                };
                break;
              case '*=':
                n = function (l) {
                  return l && l.includes(a);
                };
                break;
              case '!=':
                n = function (l) {
                  return a !== l;
                };
                break;
              default:
                n = function (l) {
                  return l !== null;
                };
            }
            return (
              a === '' &&
                /^[*$^]=$/.test(t.operator) &&
                (n = function () {
                  return !1;
                }),
              n ||
                (n = function (l) {
                  return l && i.test(l);
                }),
              {
                key: r,
                value: a,
                type: typeof t.value > 'u' ? 'attrExist' : 'attrValue',
                test: n,
              }
            );
          });
      }
      function af(e) {
        if (e)
          return e.map(function (t) {
            return (
              (t = t.replace(Ya, '')),
              { value: t, regexp: new RegExp('(^|\\s)' + Dr(t) + '(\\s|$)') }
            );
          });
      }
      function nf(e) {
        if (e)
          return e.map(function (t) {
            var r;
            return (
              ['is', 'not'].includes(t.name) &&
                ((r = t.value),
                (r = r.selectors ? r.selectors : [r]),
                (r = _o(r))),
              { name: t.name, expressions: r, value: t.value }
            );
          });
      }
      function _o(e) {
        return e.map(function (t) {
          for (var r = [], a = t.rule; a; )
            r.push({
              tag: a.tagName ? a.tagName.toLowerCase() : '*',
              combinator: a.nestingOperator ? a.nestingOperator : ' ',
              id: a.id,
              attributes: rf(a.attrs),
              classes: af(a.classNames),
              pseudos: nf(a.pseudos),
            }),
              (a = a.rule);
          return r;
        });
      }
      function Xr(e) {
        var t = Do.parse(e);
        return (t = t.selectors ? t.selectors : [t]), _o(t);
      }
      function xo(e, t, r, a) {
        if (!e) return !1;
        for (
          var n = Array.isArray(t), i = n ? t[r] : t, o = wo(e, i);
          !o && a && e.parent;

        )
          (e = e.parent), (o = wo(e, i));
        if (r > 0) {
          if ([' ', '>'].includes(i.combinator) === !1)
            throw new Error(
              'axe.utils.matchesExpression does not support the combinator: ' +
                i.combinator,
            );
          o = o && xo(e.parent, t, r - 1, i.combinator === ' ');
        }
        return o;
      }
      function Kt(e, t, r) {
        return xo(e, t, t.length - 1, r);
      }
      function of(e, t) {
        var r = Xr(t);
        return r.some(function (a) {
          return Kt(e, a);
        });
      }
      var Ka = of;
      function lf(e, t) {
        for (; e; ) {
          if (Ka(e, t)) return e;
          if (typeof e.parent > 'u')
            throw new TypeError('Cannot resolve parent for non-DOM nodes');
          e = e.parent;
        }
        return null;
      }
      var Ke = lf;
      function Jr() {}
      function Xa(e) {
        if (typeof e != 'function')
          throw new TypeError('Queue methods require functions as arguments');
      }
      function uf() {
        var e = [],
          t = 0,
          r = 0,
          a = Jr,
          n = !1,
          i,
          o = function (p) {
            (i = p),
              setTimeout(function () {
                i != null && It('Uncaught error (of queue)', i);
              }, 1);
          },
          l = o;
        function u(f) {
          return function (p) {
            (e[f] = p), (r -= 1), !r && a !== Jr && ((n = !0), a(e));
          };
        }
        function s(f) {
          return (a = Jr), l(f), e;
        }
        function c() {
          for (var f = e.length; t < f; t++) {
            var p = e[t];
            try {
              p.call(null, u(t), s);
            } catch (m) {
              s(m);
            }
          }
        }
        var d = {
          defer: function (p) {
            if (I(p) === 'object' && p.then && p.catch) {
              var m = p;
              p = function (D, h) {
                m.then(D).catch(h);
              };
            }
            if ((Xa(p), i === void 0)) {
              if (n) throw new Error('Queue already completed');
              return e.push(p), ++r, c(), d;
            }
          },
          then: function (p) {
            if ((Xa(p), a !== Jr)) throw new Error('queue `then` already set');
            return i || ((a = p), r || ((n = !0), a(e))), d;
          },
          catch: function (p) {
            if ((Xa(p), l !== o)) throw new Error('queue `catch` already set');
            return i ? (p(i), (i = null)) : (l = p), d;
          },
          abort: s,
        };
        return d;
      }
      var st = uf,
        Xt,
        Jt,
        Ja = y.crypto || y.msCrypto;
      !Jt &&
        Ja &&
        Ja.getRandomValues &&
        ((Qa = new Uint8Array(16)),
        (Jt = function () {
          return Ja.getRandomValues(Qa), Qa;
        }));
      var Qa;
      Jt ||
        ((Za = new Array(16)),
        (Jt = function () {
          for (var t = 0, r; t < 16; t++)
            t & 3 || (r = Math.random() * 4294967296),
              (Za[t] = (r >>> ((t & 3) << 3)) & 255);
          return Za;
        }));
      for (
        var Za,
          Eo = typeof y.Buffer == 'function' ? y.Buffer : Array,
          en = [],
          Ao = {},
          Qt = 0;
        Qt < 256;
        Qt++
      )
        (en[Qt] = (Qt + 256).toString(16).substr(1)), (Ao[en[Qt]] = Qt);
      function sf(e, t, r) {
        var a = (t && r) || 0,
          n = 0;
        for (
          t = t || [],
            e.toLowerCase().replace(/[0-9a-f]{2}/g, function (i) {
              n < 16 && (t[a + n++] = Ao[i]);
            });
          n < 16;

        )
          t[a + n++] = 0;
        return t;
      }
      function tn(e, t) {
        var r = t || 0,
          a = en;
        return (
          a[e[r++]] +
          a[e[r++]] +
          a[e[r++]] +
          a[e[r++]] +
          '-' +
          a[e[r++]] +
          a[e[r++]] +
          '-' +
          a[e[r++]] +
          a[e[r++]] +
          '-' +
          a[e[r++]] +
          a[e[r++]] +
          '-' +
          a[e[r++]] +
          a[e[r++]] +
          a[e[r++]] +
          a[e[r++]] +
          a[e[r++]] +
          a[e[r++]]
        );
      }
      var _t = Jt(),
        cf = [_t[0] | 1, _t[1], _t[2], _t[3], _t[4], _t[5]],
        Fo = ((_t[6] << 8) | _t[7]) & 16383,
        rn = 0,
        an = 0;
      function Co(e, t, r) {
        var a = (t && r) || 0,
          n = t || [];
        e = e || {};
        var i = e.clockseq != null ? e.clockseq : Fo,
          o = e.msecs != null ? e.msecs : new Date().getTime(),
          l = e.nsecs != null ? e.nsecs : an + 1,
          u = o - rn + (l - an) / 1e4;
        if (
          (u < 0 && e.clockseq == null && (i = (i + 1) & 16383),
          (u < 0 || o > rn) && e.nsecs == null && (l = 0),
          l >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (rn = o), (an = l), (Fo = i), (o += 122192928e5);
        var s = ((o & 268435455) * 1e4 + l) % 4294967296;
        (n[a++] = (s >>> 24) & 255),
          (n[a++] = (s >>> 16) & 255),
          (n[a++] = (s >>> 8) & 255),
          (n[a++] = s & 255);
        var c = ((o / 4294967296) * 1e4) & 268435455;
        (n[a++] = (c >>> 8) & 255),
          (n[a++] = c & 255),
          (n[a++] = ((c >>> 24) & 15) | 16),
          (n[a++] = (c >>> 16) & 255),
          (n[a++] = (i >>> 8) | 128),
          (n[a++] = i & 255);
        for (var d = e.node || cf, f = 0; f < 6; f++) n[a + f] = d[f];
        return t || tn(n);
      }
      function Pt(e, t, r) {
        var a = (t && r) || 0;
        typeof e == 'string' &&
          ((t = e == 'binary' ? new Eo(16) : null), (e = null)),
          (e = e || {});
        var n = e.random || (e.rng || Jt)();
        if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), t))
          for (var i = 0; i < 16; i++) t[a + i] = n[i];
        return t || tn(n);
      }
      (Xt = Pt),
        (Xt.v1 = Co),
        (Xt.v4 = Pt),
        (Xt.parse = sf),
        (Xt.unparse = tn),
        (Xt.BufferClass = Eo),
        (v._uuid = Co());
      var df = Pt,
        ff = Object.freeze([
          'EvalError',
          'RangeError',
          'ReferenceError',
          'SyntaxError',
          'TypeError',
          'URIError',
        ]);
      function pf(e) {
        var t = e.topic,
          r = e.channelId,
          a = e.message,
          n = e.messageId,
          i = e.keepalive,
          o = {
            channelId: r,
            topic: t,
            messageId: n,
            keepalive: !!i,
            source: To(),
          };
        return (
          a instanceof Error
            ? (o.error = { name: a.name, message: a.message, stack: a.stack })
            : (o.payload = a),
          JSON.stringify(o)
        );
      }
      function mf(e) {
        var t;
        try {
          t = JSON.parse(e);
        } catch {
          return;
        }
        if (hf(t)) {
          var r = t,
            a = r.topic,
            n = r.channelId,
            i = r.messageId,
            o = r.keepalive,
            l = I(t.error) === 'object' ? vf(t.error) : t.payload;
          return {
            topic: a,
            message: l,
            messageId: i,
            channelId: n,
            keepalive: !!o,
          };
        }
      }
      function hf(e) {
        return (
          e !== null &&
          I(e) === 'object' &&
          typeof e.channelId == 'string' &&
          e.source === To()
        );
      }
      function vf(e) {
        var t = e.message || 'Unknown error occurred',
          r = ff.includes(e.name) ? e.name : 'Error',
          a = y[r] || Error;
        return (
          e.stack &&
            (t +=
              `
` + e.stack.replace(e.message, '')),
          new a(t)
        );
      }
      function To() {
        var e = 'axeAPI',
          t = '';
        return (
          typeof v < 'u' &&
            v._audit &&
            v._audit.application &&
            (e = v._audit.application),
          typeof v < 'u' && (t = v.version),
          e + '.' + t
        );
      }
      function nn(e) {
        Ro(e),
          fe(
            y.parent === e,
            'Source of the response must be the parent window.',
          );
      }
      function ko(e) {
        Ro(e),
          fe(
            e.parent === y,
            'Respondable target must be a frame in the current window',
          );
      }
      function Ro(e) {
        fe(y !== e, 'Messages can not be sent to the same window.');
      }
      var Qr = {};
      function gf(e, t) {
        var r =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        fe(!Qr[e], 'A replyHandler already exists for this message channel.'),
          (Qr[e] = { replyHandler: t, sendToParent: r });
      }
      function bf(e) {
        return Qr[e];
      }
      function yf(e) {
        delete Qr[e];
      }
      var Zr = [];
      function on() {
        var e = ''.concat(Pt(), ':').concat(Pt());
        return Zr.includes(e) ? on() : (Zr.push(e), e);
      }
      function Df(e) {
        return Zr.includes(e) ? !1 : (Zr.push(e), !0);
      }
      function ln(e, t, r, a) {
        if (
          (typeof a == 'function' && gf(t.channelId, a, r),
          r ? nn(e) : ko(e),
          t.message instanceof Error && !r)
        )
          return v.log(t.message), !1;
        var n = pf(le({ messageId: on() }, t)),
          i = v._audit.allowedOrigins;
        return !i || !i.length
          ? !1
          : (i.forEach(function (o) {
              try {
                e.postMessage(n, o);
              } catch (l) {
                throw l instanceof e.DOMException
                  ? new Error(
                      'allowedOrigins value "'.concat(
                        o,
                        '" is not a valid origin',
                      ),
                    )
                  : l;
              }
            }),
            !0);
      }
      function wf(e, t, r) {
        if (!e.parent !== y) return v.log(t);
        try {
          ln(
            e,
            {
              topic: null,
              channelId: r,
              message: t,
              messageId: on(),
              keepalive: !0,
            },
            !0,
          );
        } catch (a) {
          return v.log(a);
        }
      }
      function So(e, t) {
        var r =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        return function (n, i, o) {
          var l = { channelId: t, message: n, keepalive: i };
          ln(e, l, r, o);
        };
      }
      function _f(e) {
        var t = v._audit.allowedOrigins;
        return (t && t.includes('*')) || t.includes(e);
      }
      function xf(e, t) {
        var r = e.origin,
          a = e.data,
          n = e.source;
        try {
          var i = mf(a) || {},
            o = i.channelId,
            l = i.message,
            u = i.messageId;
          if (!_f(r) || !Df(u)) return;
          if (l instanceof Error && n.parent !== y) return v.log(l), !1;
          try {
            if (i.topic) {
              var s = So(n, o);
              nn(n), t(i, s);
            } else Ef(n, i);
          } catch (c) {
            wf(n, c, o);
          }
        } catch (c) {
          return v.log(c), !1;
        }
      }
      function Ef(e, t) {
        var r = t.channelId,
          a = t.message,
          n = t.keepalive,
          i = bf(r) || {},
          o = i.replyHandler,
          l = i.sendToParent;
        if (o) {
          l ? nn(e) : ko(e);
          var u = So(e, r, l);
          !n && r && yf(r);
          try {
            o(a, n, u);
          } catch (s) {
            v.log(s), u(s, n);
          }
        }
      }
      var Af = {
        open: function (t) {
          if (typeof y.addEventListener == 'function') {
            var r = function (n) {
              xf(n, t);
            };
            return (
              y.addEventListener('message', r, !1),
              function () {
                y.removeEventListener('message', r, !1);
              }
            );
          }
        },
        post: function (t, r, a) {
          return typeof y.addEventListener != 'function' ? !1 : ln(t, r, !1, a);
        },
      };
      function Oo(e) {
        e.updateMessenger(Af);
      }
      var ea,
        Io,
        un = {};
      function lt(e, t, r, a, n) {
        var i = {
          topic: t,
          message: r,
          channelId: ''.concat(Pt(), ':').concat(Pt()),
          keepalive: a,
        };
        return Io(e, i, n);
      }
      function Ff(e, t) {
        var r = e.topic,
          a = e.message,
          n = e.keepalive,
          i = un[r];
        if (i)
          try {
            i(a, n, t);
          } catch (o) {
            v.log(o), t(o, n);
          }
      }
      (lt.updateMessenger = function (t) {
        var r = t.open,
          a = t.post;
        fe(typeof r == 'function', 'open callback must be a function'),
          fe(typeof a == 'function', 'post callback must be a function'),
          ea && ea();
        var n = r(Ff);
        n
          ? (fe(
              typeof n == 'function',
              'open callback must return a cleanup function',
            ),
            (ea = n))
          : (ea = null),
          (Io = a);
      }),
        (lt.subscribe = function (t, r) {
          fe(typeof r == 'function', 'Subscriber callback must be a function'),
            fe(!un[t], 'Topic '.concat(t, ' is already registered to.')),
            (un[t] = r);
        }),
        (lt.isInFrame = function () {
          var t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y;
          return !!t.frameElement;
        }),
        Oo(lt);
      function Po(e, t, r, a) {
        var n,
          i,
          o = e.contentWindow,
          l =
            (n =
              (i = t.options) === null || i === void 0
                ? void 0
                : i.pingWaitTime) !== null && n !== void 0
              ? n
              : 500;
        if (!o) {
          It('Frame does not have a content window', e), r(null);
          return;
        }
        if (l === 0) {
          Mo(e, t, r, a);
          return;
        }
        var u = setTimeout(function () {
          u = setTimeout(function () {
            t.debug ? a(No('No response from frame', e)) : r(null);
          }, 0);
        }, l);
        lt(o, 'axe.ping', null, void 0, function () {
          clearTimeout(u), Mo(e, t, r, a);
        });
      }
      function Mo(e, t, r, a) {
        var n,
          i,
          o =
            (n =
              (i = t.options) === null || i === void 0
                ? void 0
                : i.frameWaitTime) !== null && n !== void 0
              ? n
              : 6e4,
          l = e.contentWindow,
          u = setTimeout(function () {
            a(No('Axe in frame timed out', e));
          }, o);
        lt(l, 'axe.start', t, void 0, function (s) {
          clearTimeout(u), s instanceof Error ? a(s) : r(s);
        });
      }
      function No(e, t) {
        var r;
        return v._tree && (r = $a(t)), new Error(e + ': ' + (r || t));
      }
      function Cf(e) {
        var t = [];
        return t
          .concat(e.any || [])
          .concat(e.all || [])
          .concat(e.none || []);
      }
      var ta = Cf;
      function Tf(e, t, r) {
        if (Array.isArray(e))
          return e.find(function (a) {
            return I(a) === 'object' && a[t] === r;
          });
      }
      var wr = Tf;
      function kf(e, t, r) {
        e.forEach(function (a) {
          a.node = ot.fromFrame(a.node, t, r);
          var n = ta(a);
          n.forEach(function (i) {
            i.relatedNodes = i.relatedNodes.map(function (o) {
              return ot.fromFrame(o, t, r);
            });
          });
        });
      }
      function Rf(e, t) {
        for (var r = t[0].node, a = 0; a < e.length; a++) {
          var n = e[a].node,
            i = qo(n.nodeIndexes, r.nodeIndexes);
          if (i > 0 || (i === 0 && r.selector.length < n.selector.length)) {
            e.splice.apply(e, [a, 0].concat(re(t)));
            return;
          }
        }
        e.push.apply(e, re(t));
      }
      function Sf(e) {
        return !e || !e.results
          ? null
          : Array.isArray(e.results)
            ? e.results.length
              ? e.results
              : null
            : [e.results];
      }
      function Of(e, t) {
        var r = [];
        return (
          e.forEach(function (a) {
            var n = Sf(a);
            if (!(!n || !n.length)) {
              var i = If(a, t);
              n.forEach(function (o) {
                o.nodes && i && kf(o.nodes, t, i);
                var l = wr(r, 'id', o.id);
                l ? o.nodes.length && Rf(l.nodes, o.nodes) : r.push(o);
              });
            }
          }),
          r.forEach(function (a) {
            a.nodes &&
              a.nodes.sort(function (n, i) {
                return qo(n.node.nodeIndexes, i.node.nodeIndexes);
              });
          }),
          r
        );
      }
      function qo() {
        for (
          var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : [],
            t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : [],
            r = Math.max(
              e == null ? void 0 : e.length,
              t == null ? void 0 : t.length,
            ),
            a = 0;
          a < r;
          a++
        ) {
          var n = e == null ? void 0 : e[a],
            i = t == null ? void 0 : t[a];
          if (typeof n != 'number' || isNaN(n)) return a === 0 ? 1 : -1;
          if (typeof i != 'number' || isNaN(i)) return a === 0 ? -1 : 1;
          if (n !== i) return n - i;
        }
        return 0;
      }
      var ra = Of;
      function If(e, t) {
        return e.frameElement
          ? new ot(e.frameElement, t)
          : e.frameSpec
            ? e.frameSpec
            : null;
      }
      function Bo(e, t, r, a, n, i) {
        var o = st(),
          l = e.frames;
        l.forEach(function (u) {
          var s = u.node,
            c = Ve(u, Ec);
          o.defer(function (d, f) {
            var p = { options: t, command: r, parameter: a, context: c };
            function m(b) {
              return d(b ? { results: b, frameElement: s } : null);
            }
            Po(s, p, m, f);
          });
        }),
          o
            .then(function (u) {
              n(ra(u, t));
            })
            .catch(i);
      }
      function Mt(e, t) {
        if (
          !e.shadowId &&
          !t.shadowId &&
          e.actualNode &&
          typeof e.actualNode.contains == 'function'
        )
          return e.actualNode.contains(t.actualNode);
        do {
          if (e === t) return !0;
          if (t.nodeIndex < e.nodeIndex) return !1;
          t = t.parent;
        } while (t);
        return !1;
      }
      function Lo() {
        for (
          var e = {}, t = arguments.length, r = new Array(t), a = 0;
          a < t;
          a++
        )
          r[a] = arguments[a];
        return (
          r.forEach(function (n) {
            if (!(!n || I(n) !== 'object' || Array.isArray(n)))
              for (var i = 0, o = Object.keys(n); i < o.length; i++) {
                var l = o[i];
                !e.hasOwnProperty(l) ||
                I(n[l]) !== 'object' ||
                Array.isArray(e[l])
                  ? (e[l] = n[l])
                  : (e[l] = Lo(e[l], n[l]));
              }
          }),
          e
        );
      }
      var sn = Lo;
      function Pf(e, t) {
        Object.assign(e, t),
          Object.keys(t)
            .filter(function (r) {
              return typeof t[r] == 'function';
            })
            .forEach(function (r) {
              e[r] = null;
              try {
                e[r] = t[r](e);
              } catch {}
            });
      }
      var cn = Pf,
        Mf = [
          'article',
          'aside',
          'blockquote',
          'body',
          'div',
          'footer',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'header',
          'main',
          'nav',
          'p',
          'section',
          'span',
        ];
      function Nf(e) {
        if (e.shadowRoot) {
          var t = e.nodeName.toLowerCase();
          if (Mf.includes(t) || /^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))
            return !0;
        }
        return !1;
      }
      var aa = Nf,
        dn = {};
      De(dn, {
        createGrid: function () {
          return Nt;
        },
        findElmsInContext: function () {
          return Vo;
        },
        findNearbyElms: function () {
          return bn;
        },
        findUp: function () {
          return er;
        },
        findUpVirtual: function () {
          return Zt;
        },
        focusDisabled: function () {
          return wn;
        },
        getComposedParent: function () {
          return Ne;
        },
        getElementByReference: function () {
          return xn;
        },
        getElementCoordinates: function () {
          return mn;
        },
        getElementStack: function () {
          return Dl;
        },
        getModalDialog: function () {
          return dl;
        },
        getOverflowHiddenAncestors: function () {
          return fn;
        },
        getRootNode: function () {
          return je;
        },
        getScrollOffset: function () {
          return rl;
        },
        getTabbableElements: function () {
          return wl;
        },
        getTextElementStack: function () {
          return Hn;
        },
        getViewportSize: function () {
          return na;
        },
        getVisibleChildTextRects: function () {
          return jn;
        },
        hasContent: function () {
          return pa;
        },
        hasContentVirtual: function () {
          return Rr;
        },
        hasLangText: function () {
          return Un;
        },
        idrefs: function () {
          return ut;
        },
        insertedIntoFocusOrder: function () {
          return su;
        },
        isCurrentPageLink: function () {
          return _n;
        },
        isFocusable: function () {
          return Fe;
        },
        isHTML5: function () {
          return fu;
        },
        isHiddenForEveryone: function () {
          return xt;
        },
        isHiddenWithCSS: function () {
          return ph;
        },
        isInTabOrder: function () {
          return ft;
        },
        isInTextBlock: function () {
          return $n;
        },
        isInert: function () {
          return oa;
        },
        isModalOpen: function () {
          return Sr;
        },
        isMultiline: function () {
          return hu;
        },
        isNativelyFocusable: function () {
          return Rn;
        },
        isNode: function () {
          return wh;
        },
        isOffscreen: function () {
          return ia;
        },
        isOpaque: function () {
          return kh;
        },
        isSkipLink: function () {
          return Wn;
        },
        isVisible: function () {
          return Mh;
        },
        isVisibleOnScreen: function () {
          return Xe;
        },
        isVisibleToScreenReaders: function () {
          return _e;
        },
        isVisualContent: function () {
          return zn;
        },
        reduceToElementsBelowFloating: function () {
          return bu;
        },
        shadowElementsFromPoint: function () {
          return Bh;
        },
        urlPropsFromAttribute: function () {
          return Uh;
        },
        visuallyContains: function () {
          return yu;
        },
        visuallyOverlaps: function () {
          return Gn;
        },
        visuallySort: function () {
          return En;
        },
      });
      function qf(e) {
        var t = (e.getRootNode && e.getRootNode()) || k;
        return t === e && (t = k), t;
      }
      var _r = qf,
        je = _r;
      function Bf(e) {
        var t = e.context,
          r = e.value,
          a = e.attr,
          n = e.elm,
          i = n === void 0 ? '' : n,
          o,
          l = Ae(r);
        return (
          t.nodeType === 9 || t.nodeType === 11 ? (o = t) : (o = je(t)),
          Array.from(o.querySelectorAll(i + '[' + a + '=' + l + ']'))
        );
      }
      var Vo = Bf;
      function Lf(e, t) {
        var r;
        if (
          ((r = e.actualNode),
          !e.shadowId && typeof e.actualNode.closest == 'function')
        ) {
          var a = e.actualNode.closest(t);
          return a || null;
        }
        do
          (r = r.assignedSlot ? r.assignedSlot : r.parentNode),
            r && r.nodeType === 11 && (r = r.host);
        while (r && !Gt(r, t) && r !== k.documentElement);
        return !r || !Gt(r, t) ? null : r;
      }
      var Zt = Lf;
      function Vf(e, t) {
        return Zt(N(e), t);
      }
      var er = Vf,
        jf = nt(ao());
      v._memoizedFns = [];
      function Hf(e) {
        var t = (0, jf.default)(e);
        return v._memoizedFns.push(t), t;
      }
      var We = Hf;
      function jo(e, t) {
        return (
          (e.left | 0) < (t.right | 0) &&
          (e.right | 0) > (t.left | 0) &&
          (e.top | 0) < (t.bottom | 0) &&
          (e.bottom | 0) > (t.top | 0)
        );
      }
      var Ho = We(function (t) {
          var r = [];
          if (!t) return r;
          var a = t.getComputedStylePropertyValue('overflow');
          return a === 'hidden' && r.push(t), r.concat(Ho(t.parent));
        }),
        fn = Ho,
        zf =
          /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,
        Uf = /(\w+)\((\d+)/;
      function zo(e) {
        return ['style', 'script', 'noscript', 'template'].includes(
          e.props.nodeName,
        );
      }
      function Uo(e) {
        return e.props.nodeName === 'area'
          ? !1
          : e.getComputedStylePropertyValue('display') === 'none';
      }
      function $o(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.isAncestor;
        return (
          !r &&
          ['hidden', 'collapse'].includes(
            e.getComputedStylePropertyValue('visibility'),
          )
        );
      }
      function Wo(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.isAncestor;
        return (
          !!r &&
          e.getComputedStylePropertyValue('content-visibility') === 'hidden'
        );
      }
      function Go(e) {
        return e.attr('aria-hidden') === 'true';
      }
      function Yo(e) {
        return e.getComputedStylePropertyValue('opacity') === '0';
      }
      function Ko(e) {
        var t = yt(e.actualNode),
          r = parseInt(e.getComputedStylePropertyValue('height')),
          a = parseInt(e.getComputedStylePropertyValue('width'));
        return !!t && (r === 0 || a === 0);
      }
      function Xo(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.isAncestor;
        if (r) return !1;
        var a = e.boundingClientRect,
          n = fn(e);
        return n.length
          ? n.some(function (i) {
              var o = i.boundingClientRect;
              return o.width < 2 || o.height < 2 ? !0 : !jo(a, o);
            })
          : !1;
      }
      function Jo(e) {
        var t = e.getComputedStylePropertyValue('clip').match(zf),
          r = e.getComputedStylePropertyValue('clip-path').match(Uf);
        if (t && t.length === 5) {
          var a = e.getComputedStylePropertyValue('position');
          if (['fixed', 'absolute'].includes(a))
            return t[3] - t[1] <= 0 && t[2] - t[4] <= 0;
        }
        if (r) {
          var n = r[1],
            i = parseInt(r[2], 10);
          switch (n) {
            case 'inset':
              return i >= 50;
            case 'circle':
              return i === 0;
          }
        }
        return !1;
      }
      function pn(e, t) {
        var r = Ke(e, 'map');
        if (!r) return !0;
        var a = r.attr('name');
        if (!a) return !0;
        var n = _r(e.actualNode);
        if (!n || n.nodeType !== 9) return !0;
        var i = Ze(v._tree, 'img[usemap="#'.concat(Ae(a), '"]'));
        return !i || !i.length
          ? !0
          : i.some(function (o) {
              return !t(o);
            });
      }
      function Qo(e) {
        var t;
        if (
          ((t = e.parent) === null || t === void 0
            ? void 0
            : t.props.nodeName) !== 'details'
        )
          return !1;
        if (e.props.nodeName === 'summary') {
          var r = e.parent.children.find(function (a) {
            return a.props.nodeName === 'summary';
          });
          if (r === e) return !1;
        }
        return !e.parent.hasAttr('open');
      }
      var $f = [Uo, $o, Wo, Qo];
      function xt(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.skipAncestors,
          a = t.isAncestor,
          n = a === void 0 ? !1 : a;
        return (e = e instanceof Q ? e : N(e)), r ? Zo(e, n) : el(e, n);
      }
      var Zo = We(function (t, r) {
          return zo(t)
            ? !0
            : t.actualNode
              ? !!(
                  $f.some(function (a) {
                    return a(t, { isAncestor: r });
                  }) || !t.actualNode.isConnected
                )
              : !1;
        }),
        el = We(function (t, r) {
          return Zo(t, r) ? !0 : t.parent ? el(t.parent, !0) : !1;
        });
      function tl(e) {
        if (e.assignedSlot) return tl(e.assignedSlot);
        if (e.parentNode) {
          var t = e.parentNode;
          if (t.nodeType === 1) return t;
          if (t.host) return t.host;
        }
        return null;
      }
      var Ne = tl;
      function Wf(e) {
        if ((!e.nodeType && e.document && (e = e.document), e.nodeType === 9)) {
          var t = e.documentElement,
            r = e.body;
          return {
            left: (t && t.scrollLeft) || (r && r.scrollLeft) || 0,
            top: (t && t.scrollTop) || (r && r.scrollTop) || 0,
          };
        }
        return { left: e.scrollLeft, top: e.scrollTop };
      }
      var rl = Wf;
      function Gf(e) {
        var t = rl(k),
          r = t.left,
          a = t.top,
          n = e.getBoundingClientRect();
        return {
          top: n.top + a,
          right: n.right + r,
          bottom: n.bottom + a,
          left: n.left + r,
          width: n.right - n.left,
          height: n.bottom - n.top,
        };
      }
      var mn = Gf;
      function Yf(e) {
        var t = e.document,
          r = t.documentElement;
        if (e.innerWidth) return { width: e.innerWidth, height: e.innerHeight };
        if (r) return { width: r.clientWidth, height: r.clientHeight };
        var a = t.body;
        return { width: a.clientWidth, height: a.clientHeight };
      }
      var na = Yf;
      function Kf(e, t) {
        for (e = Ne(e); e && e.nodeName.toLowerCase() !== 'html'; ) {
          if (e.scrollTop && ((t += e.scrollTop), t >= 0)) return !1;
          e = Ne(e);
        }
        return !0;
      }
      function Xf(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.isAncestor;
        if (r) return !1;
        if (((e = e instanceof Q ? e.actualNode : e), !!e)) {
          var a,
            n = k.documentElement,
            i = y.getComputedStyle(e),
            o = y.getComputedStyle(k.body || n).getPropertyValue('direction'),
            l = mn(e);
          if (l.bottom < 0 && (Kf(e, l.bottom) || i.position === 'absolute'))
            return !0;
          if (l.left === 0 && l.right === 0) return !1;
          if (o === 'ltr') {
            if (l.right <= 0) return !0;
          } else if (((a = Math.max(n.scrollWidth, na(y).width)), l.left >= a))
            return !0;
          return !1;
        }
      }
      var ia = Xf,
        Jf = [Yo, Ko, Xo, Jo, ia];
      function Xe(e) {
        return (e = e instanceof Q ? e : N(e)), hn(e);
      }
      var hn = We(function (t, r) {
        return t.actualNode && t.props.nodeName === 'area'
          ? !pn(t, hn)
          : xt(t, { skipAncestors: !0, isAncestor: r }) ||
              (t.actualNode &&
                Jf.some(function (a) {
                  return a(t, { isAncestor: r });
                }))
            ? !1
            : t.parent
              ? hn(t.parent, !0)
              : !0;
      });
      function al(e, t) {
        var r = Math.min(e.top, t.top),
          a = Math.max(e.right, t.right),
          n = Math.max(e.bottom, t.bottom),
          i = Math.min(e.left, t.left);
        return new y.DOMRect(i, r, a - i, n - r);
      }
      function vn(e, t) {
        var r = e.x,
          a = e.y,
          n = t.top,
          i = t.right,
          o = t.bottom,
          l = t.left;
        return a >= n && r <= i && a <= o && r >= l;
      }
      var nl = 0,
        Qf = 0.1,
        il = 0.2,
        ol = 0.3,
        ll = 0;
      function Nt() {
        var e =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : k.body,
          t = arguments.length > 1 ? arguments[1] : void 0,
          r =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : null;
        if (oe.get('gridCreated') && !r) return Z.gridSize;
        if ((oe.set('gridCreated', !0), !r)) {
          var a,
            n = N(k.documentElement);
          if (
            (n || (n = new Kn(k.documentElement)),
            (ll = 0),
            (n._stackingOrder = [xr(nl, null)]),
            ((a = t) !== null && a !== void 0) || (t = new gn()),
            sl(t, n),
            yt(n.actualNode))
          ) {
            var i = new gn(n);
            n._subGrid = i;
          }
        }
        for (
          var o = k.createTreeWalker(e, y.NodeFilter.SHOW_ELEMENT, null, !1),
            l = r ? o.nextNode() : o.currentNode;
          l;

        ) {
          var u = N(l);
          u && u.parent
            ? (r = u.parent)
            : l.assignedSlot
              ? (r = N(l.assignedSlot))
              : l.parentElement
                ? (r = N(l.parentElement))
                : l.parentNode && N(l.parentNode) && (r = N(l.parentNode)),
            u || (u = new v.VirtualNode(l, r)),
            (u._stackingOrder = ep(u, r, ll++));
          var s = rp(u, r),
            c = s ? s._subGrid : t;
          if (yt(u.actualNode)) {
            var d = new gn(u);
            u._subGrid = d;
          }
          var f = u.boundingClientRect;
          f.width !== 0 && f.height !== 0 && Xe(l) && sl(c, u),
            aa(l) && Nt(l.shadowRoot, c, u),
            (l = o.nextNode());
        }
        return Z.gridSize;
      }
      function Zf(e, t) {
        var r = e.getComputedStylePropertyValue('position'),
          a = e.getComputedStylePropertyValue('z-index');
        if (
          r === 'fixed' ||
          r === 'sticky' ||
          (a !== 'auto' && r !== 'static') ||
          e.getComputedStylePropertyValue('opacity') !== '1'
        )
          return !0;
        var n =
          e.getComputedStylePropertyValue('-webkit-transform') ||
          e.getComputedStylePropertyValue('-ms-transform') ||
          e.getComputedStylePropertyValue('transform') ||
          'none';
        if (n !== 'none') return !0;
        var i = e.getComputedStylePropertyValue('mix-blend-mode');
        if (i && i !== 'normal') return !0;
        var o = e.getComputedStylePropertyValue('filter');
        if (o && o !== 'none') return !0;
        var l = e.getComputedStylePropertyValue('perspective');
        if (l && l !== 'none') return !0;
        var u = e.getComputedStylePropertyValue('clip-path');
        if (u && u !== 'none') return !0;
        var s =
          e.getComputedStylePropertyValue('-webkit-mask') ||
          e.getComputedStylePropertyValue('mask') ||
          'none';
        if (s !== 'none') return !0;
        var c =
          e.getComputedStylePropertyValue('-webkit-mask-image') ||
          e.getComputedStylePropertyValue('mask-image') ||
          'none';
        if (c !== 'none') return !0;
        var d =
          e.getComputedStylePropertyValue('-webkit-mask-border') ||
          e.getComputedStylePropertyValue('mask-border') ||
          'none';
        if (
          d !== 'none' ||
          e.getComputedStylePropertyValue('isolation') === 'isolate'
        )
          return !0;
        var f = e.getComputedStylePropertyValue('will-change');
        if (
          f === 'transform' ||
          f === 'opacity' ||
          e.getComputedStylePropertyValue('-webkit-overflow-scrolling') ===
            'touch'
        )
          return !0;
        var p = e.getComputedStylePropertyValue('contain');
        return !!(
          ['layout', 'paint', 'strict', 'content'].includes(p) ||
          (a !== 'auto' && ul(t))
        );
      }
      function ul(e) {
        if (!e) return !1;
        var t = e.getComputedStylePropertyValue('display');
        return ['flex', 'inline-flex', 'grid', 'inline-grid'].includes(t);
      }
      function ep(e, t, r) {
        var a = t._stackingOrder.slice();
        if (!Zf(e, t))
          return (
            e.getComputedStylePropertyValue('position') !== 'static'
              ? a.push(xr(ol, e))
              : e.getComputedStylePropertyValue('float') !== 'none' &&
                a.push(xr(il, e)),
            a
          );
        var n = a.findIndex(function (l) {
          var u = l.value;
          return [nl, il, ol].includes(u);
        });
        n !== -1 && a.splice(n, a.length - n);
        var i = tp(e, t);
        if (!['auto', '0'].includes(i)) return a.push(xr(parseInt(i), e)), a;
        for (var o = r.toString(); o.length < 10; ) o = '0' + o;
        return a.push(xr(parseFloat(''.concat(Qf).concat(o)), e)), a;
      }
      function xr(e, t) {
        return { value: e, vNode: t };
      }
      function tp(e, t) {
        var r = e.getComputedStylePropertyValue('position');
        return r === 'static' && !ul(t)
          ? 'auto'
          : e.getComputedStylePropertyValue('z-index');
      }
      function rp(e, t) {
        for (var r = null, a = [e]; t; ) {
          if (yt(t.actualNode)) {
            r = t;
            break;
          }
          if (t._scrollRegionParent) {
            r = t._scrollRegionParent;
            break;
          }
          a.push(t),
            (t = N(t.actualNode.parentElement || t.actualNode.parentNode));
        }
        return (
          a.forEach(function (n) {
            return (n._scrollRegionParent = r);
          }),
          r
        );
      }
      function sl(e, t) {
        t.clientRects.forEach(function (r) {
          var a;
          ((a = t._grid) !== null && a !== void 0) || (t._grid = e);
          var n = e.getGridPositionOfRect(r);
          e.loopGridPosition(n, function (i) {
            i.includes(t) || i.push(t);
          });
        });
      }
      var gn = (function () {
        function e() {
          var t =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : null;
          Ut(this, e), (this.container = t), (this.cells = []);
        }
        return (
          $t(e, [
            {
              key: 'toGridIndex',
              value: function (r) {
                return Math.floor(r / Z.gridSize);
              },
            },
            {
              key: 'getCellFromPoint',
              value: function (r) {
                var a,
                  n,
                  i = r.x,
                  o = r.y;
                fe(this.boundaries, 'Grid does not have cells added');
                var l = this.toGridIndex(o),
                  u = this.toGridIndex(i);
                fe(
                  vn({ y: l, x: u }, this.boundaries),
                  'Element midpoint exceeds the grid bounds',
                );
                var s =
                  (a = this.cells[l - this.cells._negativeIndex]) !== null &&
                  a !== void 0
                    ? a
                    : [];
                return (n = s[u - s._negativeIndex]) !== null && n !== void 0
                  ? n
                  : [];
              },
            },
            {
              key: 'loopGridPosition',
              value: function (r, a) {
                var n = r,
                  i = n.left,
                  o = n.right,
                  l = n.top,
                  u = n.bottom;
                this.boundaries && (r = al(this.boundaries, r)),
                  (this.boundaries = r),
                  cl(this.cells, l, u, function (s, c) {
                    cl(s, i, o, function (d, f) {
                      a(d, { row: c, col: f });
                    });
                  });
              },
            },
            {
              key: 'getGridPositionOfRect',
              value: function (r) {
                var a = r.top,
                  n = r.right,
                  i = r.bottom,
                  o = r.left,
                  l =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : 0;
                return (
                  (a = this.toGridIndex(a - l)),
                  (n = this.toGridIndex(n + l - 1)),
                  (i = this.toGridIndex(i + l - 1)),
                  (o = this.toGridIndex(o - l)),
                  new y.DOMRect(o, a, n - o, i - a)
                );
              },
            },
          ]),
          e
        );
      })();
      function cl(e, t, r, a) {
        var n;
        if (
          (((n = e._negativeIndex) !== null && n !== void 0) ||
            (e._negativeIndex = 0),
          t < e._negativeIndex)
        ) {
          for (var i = 0; i < e._negativeIndex - t; i++) e.splice(0, 0, []);
          e._negativeIndex = t;
        }
        for (
          var o = t - e._negativeIndex, l = r - e._negativeIndex, u = o;
          u <= l;
          u++
        ) {
          var s, c;
          ((c = e[(s = u)]) !== null && c !== void 0) || (e[s] = []),
            a(e[u], u + e._negativeIndex);
        }
      }
      function bn(e) {
        var t,
          r,
          a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (
          (Nt(),
          !(
            (t = e._grid) !== null &&
            t !== void 0 &&
            (r = t.cells) !== null &&
            r !== void 0 &&
            r.length
          ))
        )
          return [];
        var n = e.boundingClientRect,
          i = e._grid,
          o = yn(e),
          l = i.getGridPositionOfRect(n, a),
          u = [];
        return (
          i.loopGridPosition(l, function (s) {
            var c = Ye(s),
              d;
            try {
              for (c.s(); !(d = c.n()).done; ) {
                var f = d.value;
                f && f !== e && !u.includes(f) && o === yn(f) && u.push(f);
              }
            } catch (p) {
              c.e(p);
            } finally {
              c.f();
            }
          }),
          u
        );
      }
      var yn = We(function (e) {
        return e
          ? e.getComputedStylePropertyValue('position') === 'fixed'
            ? !0
            : yn(e.parent)
          : !1;
      });
      function Dn(e, t) {
        var r = Math.max(e.left, t.left),
          a = Math.min(e.right, t.right),
          n = Math.max(e.top, t.top),
          i = Math.min(e.bottom, t.bottom);
        return r >= a || n >= i ? null : new y.DOMRect(r, n, a - r, i - n);
      }
      var ap = We(function () {
          var t;
          if (!v._tree) return null;
          var r = mt(v._tree[0], 'dialog[open]', function (n) {
            var i = n.boundingClientRect,
              o = k.elementsFromPoint(i.left + 1, i.top + 1);
            return o.includes(n.actualNode) && Xe(n);
          });
          if (!r.length) return null;
          var a = r.find(function (n) {
            var i = n.boundingClientRect,
              o = k.elementsFromPoint(i.left - 10, i.top - 10);
            return o.includes(n.actualNode);
          });
          return (
            a ||
            ((t = r.find(function (n) {
              var i,
                o = (i = np(n)) !== null && i !== void 0 ? i : {},
                l = o.vNode,
                u = o.rect;
              if (!l) return !1;
              var s = k.elementsFromPoint(u.left + 1, u.top + 1);
              return !s.includes(l.actualNode);
            })) !== null && t !== void 0
              ? t
              : null)
          );
        }),
        dl = ap;
      function np(e) {
        Nt();
        var t = v._tree[0]._grid,
          r = new y.DOMRect(0, 0, y.innerWidth, y.innerHeight);
        if (t)
          for (var a = 0; a < t.cells.length; a++) {
            var n = t.cells[a];
            if (n)
              for (var i = 0; i < n.length; i++) {
                var o = n[i];
                if (o)
                  for (var l = 0; l < o.length; l++) {
                    var u = o[l],
                      s = u.boundingClientRect,
                      c = Dn(s, r);
                    if (
                      u.props.nodeName !== 'html' &&
                      u !== e &&
                      u.getComputedStylePropertyValue('pointer-events') !==
                        'none' &&
                      c
                    )
                      return { vNode: u, rect: c };
                  }
              }
          }
      }
      function oa(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.skipAncestors,
          a = t.isAncestor;
        return r ? fl(e, a) : pl(e, a);
      }
      var fl = We(function (t, r) {
          if (t.hasAttr('inert')) return !0;
          if (!r && t.actualNode) {
            var a = dl();
            if (a && !Mt(a, t)) return !0;
          }
          return !1;
        }),
        pl = We(function (t, r) {
          return fl(t, r) ? !0 : t.parent ? pl(t.parent, !0) : !1;
        }),
        ip = [
          'button',
          'command',
          'fieldset',
          'keygen',
          'optgroup',
          'option',
          'select',
          'textarea',
          'input',
        ];
      function op(e) {
        return ip.includes(e);
      }
      function lp(e) {
        var t = e instanceof Q ? e : N(e);
        if ((op(t.props.nodeName) && t.hasAttr('disabled')) || oa(t)) return !0;
        for (
          var r = t.parent, a = [], n = !1;
          r &&
          r.shadowId === t.shadowId &&
          !n &&
          (a.push(r), r.props.nodeName !== 'legend');

        ) {
          if (r._inDisabledFieldset !== void 0) {
            n = r._inDisabledFieldset;
            break;
          }
          r.props.nodeName === 'fieldset' && r.hasAttr('disabled') && (n = !0),
            (r = r.parent);
        }
        return (
          a.forEach(function (i) {
            return (i._inDisabledFieldset = n);
          }),
          n ? !0 : t.props.nodeName !== 'area' && t.actualNode ? xt(t) : !1
        );
      }
      var wn = lp,
        up = /^\/\#/,
        sp = /^#[!/]/;
      function _n(e) {
        var t,
          r = e.getAttribute('href');
        if (!r || r === '#') return !1;
        if (up.test(r)) return !0;
        var a = e.hash,
          n = e.protocol,
          i = e.hostname,
          o = e.port,
          l = e.pathname;
        if (sp.test(a)) return !1;
        if (r.charAt(0) === '#') return !0;
        if (
          typeof ((t = y.location) === null || t === void 0
            ? void 0
            : t.origin) != 'string' ||
          y.location.origin.indexOf('://') === -1
        )
          return null;
        var u = y.location.origin + y.location.pathname,
          s;
        return (
          i
            ? (s = ''
                .concat(n, '//')
                .concat(i)
                .concat(o ? ':'.concat(o) : ''))
            : (s = y.location.origin),
          l ? (s += (l[0] !== '/' ? '/' : '') + l) : (s += y.location.pathname),
          s === u
        );
      }
      function cp(e, t) {
        var r = e.getAttribute(t);
        if (!r || (t === 'href' && !_n(e))) return null;
        r.indexOf('#') !== -1 &&
          (r = decodeURIComponent(r.substr(r.indexOf('#') + 1)));
        var a = k.getElementById(r);
        return a || ((a = k.getElementsByName(r)), a.length ? a[0] : null);
      }
      var xn = cp;
      function En(e, t) {
        Nt();
        for (
          var r = Math.max(e._stackingOrder.length, t._stackingOrder.length),
            a = 0;
          a < r;
          a++
        ) {
          if (typeof t._stackingOrder[a] > 'u') return -1;
          if (
            typeof e._stackingOrder[a] > 'u' ||
            t._stackingOrder[a].value > e._stackingOrder[a].value
          )
            return 1;
          if (t._stackingOrder[a].value < e._stackingOrder[a].value) return -1;
        }
        var n = e.actualNode,
          i = t.actualNode;
        if (n.getRootNode && n.getRootNode() !== i.getRootNode()) {
          for (var o = []; n; )
            o.push({ root: n.getRootNode(), node: n }),
              (n = n.getRootNode().host);
          for (
            ;
            i &&
            !o.find(function (D) {
              return D.root === i.getRootNode();
            });

          )
            i = i.getRootNode().host;
          if (
            ((n = o.find(function (D) {
              return D.root === i.getRootNode();
            }).node),
            n === i)
          )
            return e.actualNode.getRootNode() !== n.getRootNode() ? -1 : 1;
        }
        var l = y.Node,
          u = l.DOCUMENT_POSITION_FOLLOWING,
          s = l.DOCUMENT_POSITION_CONTAINS,
          c = l.DOCUMENT_POSITION_CONTAINED_BY,
          d = n.compareDocumentPosition(i),
          f = d & u ? 1 : -1,
          p = d & s || d & c,
          m = ml(e),
          b = ml(t);
        return m === b || p ? f : b - m;
      }
      function ml(e) {
        return e.getComputedStylePropertyValue('display').indexOf('inline') !==
          -1
          ? 2
          : hl(e)
            ? 1
            : 0;
      }
      function hl(e) {
        if (!e) return !1;
        if (e._isFloated !== void 0) return e._isFloated;
        var t = e.getComputedStylePropertyValue('float');
        if (t !== 'none') return (e._isFloated = !0), !0;
        var r = hl(e.parent);
        return (e._isFloated = r), r;
      }
      var vl = {};
      De(vl, {
        getBoundingRect: function () {
          return al;
        },
        getIntersectionRect: function () {
          return Dn;
        },
        getOffset: function () {
          return gl;
        },
        getRectCenter: function () {
          return An;
        },
        hasVisualOverlap: function () {
          return bl;
        },
        isPointInRect: function () {
          return vn;
        },
        rectsOverlap: function () {
          return jo;
        },
        splitRects: function () {
          return yl;
        },
      });
      function gl(e, t) {
        var r = e.boundingClientRect,
          a = t.boundingClientRect,
          n = dp(r, a),
          i = fp(n, r, a);
        return pp(n, i);
      }
      function dp(e, t) {
        var r = [
            ['x', 'left', 'right', 'width'],
            ['y', 'top', 'bottom', 'height'],
          ],
          a = {};
        return (
          r.forEach(function (n) {
            var i = ve(n, 4),
              o = i[0],
              l = i[1],
              u = i[2],
              s = i[3];
            if (t[l] < e[l] && t[u] > e[u]) {
              a[o] = e[l] + e[s] / 2;
              return;
            }
            var c = t[l] + t[s] / 2,
              d = Math.abs(c - e[l]),
              f = Math.abs(c - e[u]);
            d >= f ? (a[o] = e[l]) : (a[o] = e[u]);
          }),
          a
        );
      }
      function fp(e, t, r) {
        var a = e.x,
          n = e.y;
        if (mp({ x: a, y: n }, r)) {
          var i = hp({ x: a, y: n }, t, r);
          if (i !== null) return i;
          r = t;
        }
        var o = r,
          l = o.top,
          u = o.right,
          s = o.bottom,
          c = o.left,
          d = a >= c && a <= u,
          f = n >= l && n <= s,
          p = Math.abs(c - a) < Math.abs(u - a) ? c : u,
          m = Math.abs(l - n) < Math.abs(s - n) ? l : s;
        return !d && f
          ? { x: p, y: n }
          : d && !f
            ? { x: a, y: m }
            : !d && !f
              ? { x: p, y: m }
              : Math.abs(a - p) < Math.abs(n - m)
                ? { x: p, y: n }
                : { x: a, y: m };
      }
      function pp(e, t) {
        var r = Math.abs(e.x - t.x),
          a = Math.abs(e.y - t.y);
        return !r || !a ? r || a : Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2));
      }
      function mp(e, t) {
        var r = e.x,
          a = e.y;
        return a >= t.top && r <= t.right && a <= t.bottom && r >= t.left;
      }
      function hp(e, t, r) {
        var a = e.x,
          n = e.y,
          i,
          o;
        if (
          (a === t.left && t.right < r.right
            ? (i = t.right)
            : a === t.right && t.left > r.left && (i = t.left),
          n === t.top && t.bottom < r.bottom
            ? (o = t.bottom)
            : n === t.bottom && t.top > r.top && (o = t.top),
          !i && !o)
        )
          return null;
        if (o) {
          if (!i) return { x: a, y: o };
        } else return { x: i, y: n };
        return Math.abs(a - i) < Math.abs(n - o)
          ? { x: i, y: n }
          : { x: a, y: o };
      }
      function An(e) {
        var t = e.left,
          r = e.top,
          a = e.width,
          n = e.height;
        return new y.DOMPoint(t + a / 2, r + n / 2);
      }
      function bl(e, t) {
        var r = e.boundingClientRect,
          a = t.boundingClientRect;
        return r.left >= a.right ||
          r.right <= a.left ||
          r.top >= a.bottom ||
          r.bottom <= a.top
          ? !1
          : En(e, t) > 0;
      }
      function yl(e, t) {
        var r = [e],
          a = Ye(t),
          n;
        try {
          var i = function () {
            var l = n.value;
            r = r.reduce(function (u, s) {
              return u.concat(vp(s, l));
            }, []);
          };
          for (a.s(); !(n = a.n()).done; ) i();
        } catch (o) {
          a.e(o);
        } finally {
          a.f();
        }
        return r;
      }
      function vp(e, t) {
        var r = e.top,
          a = e.left,
          n = e.bottom,
          i = e.right,
          o = r < t.bottom && n > t.top,
          l = a < t.right && i > t.left,
          u = [];
        return (
          la(t.top, r, n) &&
            l &&
            u.push({ top: r, left: a, bottom: t.top, right: i }),
          la(t.right, a, i) &&
            o &&
            u.push({ top: r, left: t.right, bottom: n, right: i }),
          la(t.bottom, r, n) &&
            l &&
            u.push({ top: t.bottom, right: i, bottom: n, left: a }),
          la(t.left, a, i) &&
            o &&
            u.push({ top: r, left: a, bottom: n, right: t.left }),
          u.length === 0 && u.push(e),
          u.map(gp)
        );
      }
      var la = function (t, r, a) {
        return t > r && t < a;
      };
      function gp(e) {
        return le({}, e, {
          x: e.left,
          y: e.top,
          height: e.bottom - e.top,
          width: e.right - e.left,
        });
      }
      function Fn(e, t) {
        var r =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
          a = An(t),
          n = e.getCellFromPoint(a) || [],
          i = Math.floor(a.x),
          o = Math.floor(a.y),
          l = n.filter(function (s) {
            return s.clientRects.some(function (c) {
              var d = c.left,
                f = c.top;
              return (
                i < Math.floor(d + c.width) &&
                i >= Math.floor(d) &&
                o < Math.floor(f + c.height) &&
                o >= Math.floor(f)
              );
            });
          }),
          u = e.container;
        return (
          u && (l = Fn(u._grid, u.boundingClientRect, !0).concat(l)),
          r ||
            (l = l
              .sort(En)
              .map(function (s) {
                return s.actualNode;
              })
              .concat(k.documentElement)
              .filter(function (s, c, d) {
                return d.indexOf(s) === c;
              })),
          l
        );
      }
      function bp(e) {
        Nt();
        var t = N(e),
          r = t._grid;
        return r ? Fn(r, t.boundingClientRect) : [];
      }
      var Dl = bp;
      function yp(e) {
        var t = Ze(e, '*'),
          r = t.filter(function (a) {
            var n = a.isFocusable,
              i = a.actualNode.getAttribute('tabindex');
            return (
              (i = i && !isNaN(parseInt(i, 10)) ? parseInt(i) : null),
              i ? n && i >= 0 : n
            );
          });
        return r;
      }
      var wl = yp,
        Er = {};
      De(Er, {
        accessibleText: function () {
          return qt;
        },
        accessibleTextVirtual: function () {
          return Ge;
        },
        autocomplete: function () {
          return jt;
        },
        formControlValue: function () {
          return Zl;
        },
        formControlValueMethods: function () {
          return Nn;
        },
        hasUnicode: function () {
          return Bn;
        },
        isHumanInterpretable: function () {
          return Vn;
        },
        isIconLigature: function () {
          return Ln;
        },
        isValidAutocomplete: function () {
          return nu;
        },
        label: function () {
          return Zm;
        },
        labelText: function () {
          return In;
        },
        labelVirtual: function () {
          return fa;
        },
        nativeElementType: function () {
          return th;
        },
        nativeTextAlternative: function () {
          return zl;
        },
        nativeTextMethods: function () {
          return Hl;
        },
        removeUnicode: function () {
          return kr;
        },
        sanitize: function () {
          return J;
        },
        subtreeText: function () {
          return Et;
        },
        titleText: function () {
          return sa;
        },
        unsupported: function () {
          return Ul;
        },
        visible: function () {
          return iu;
        },
        visibleTextNodes: function () {
          return rh;
        },
        visibleVirtual: function () {
          return dt;
        },
      });
      function Dp(e, t) {
        e = e.actualNode || e;
        try {
          var r = je(e),
            a = [],
            n = e.getAttribute(t);
          if (n) {
            n = He(n);
            for (var i = 0; i < n.length; i++) a.push(r.getElementById(n[i]));
          }
          return a;
        } catch {
          throw new TypeError('Cannot resolve id references for non-DOM nodes');
        }
      }
      var ut = Dp;
      function wp(e, t) {
        var r = N(e);
        return Ge(r, t);
      }
      var qt = wp;
      function _p(e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(e instanceof Q)) {
          if (e.nodeType !== 1) return '';
          e = N(e);
        }
        if (
          e.props.nodeType !== 1 ||
          t.inLabelledByContext ||
          t.inControlContext ||
          !e.attr('aria-labelledby')
        )
          return '';
        var r = ut(e, 'aria-labelledby').filter(function (a) {
          return a;
        });
        return r.reduce(function (a, n) {
          var i = qt(
            n,
            le({ inLabelledByContext: !0, startNode: t.startNode || e }, t),
          );
          return a ? ''.concat(a, ' ').concat(i) : i;
        }, '');
      }
      var Ar = _p;
      function xp(e) {
        if (!(e instanceof Q)) {
          if (e.nodeType !== 1) return '';
          e = N(e);
        }
        return e.attr('aria-label') || '';
      }
      var Fr = xp,
        Ep = {
          'aria-activedescendant': { type: 'idref', allowEmpty: !0 },
          'aria-atomic': { type: 'boolean', global: !0 },
          'aria-autocomplete': {
            type: 'nmtoken',
            values: ['inline', 'list', 'both', 'none'],
          },
          'aria-braillelabel': { type: 'string', global: !0 },
          'aria-brailleroledescription': { type: 'string', global: !0 },
          'aria-busy': { type: 'boolean', global: !0 },
          'aria-checked': {
            type: 'nmtoken',
            values: ['false', 'mixed', 'true', 'undefined'],
          },
          'aria-colcount': { type: 'int', minValue: -1 },
          'aria-colindex': { type: 'int', minValue: 1 },
          'aria-colspan': { type: 'int', minValue: 1 },
          'aria-controls': { type: 'idrefs', allowEmpty: !0, global: !0 },
          'aria-current': {
            type: 'nmtoken',
            allowEmpty: !0,
            values: [
              'page',
              'step',
              'location',
              'date',
              'time',
              'true',
              'false',
            ],
            global: !0,
          },
          'aria-describedby': { type: 'idrefs', allowEmpty: !0, global: !0 },
          'aria-description': { type: 'string', allowEmpty: !0, global: !0 },
          'aria-details': { type: 'idref', allowEmpty: !0, global: !0 },
          'aria-disabled': { type: 'boolean', global: !0 },
          'aria-dropeffect': {
            type: 'nmtokens',
            values: ['copy', 'execute', 'link', 'move', 'none', 'popup'],
            global: !0,
          },
          'aria-errormessage': { type: 'idref', allowEmpty: !0, global: !0 },
          'aria-expanded': {
            type: 'nmtoken',
            values: ['true', 'false', 'undefined'],
          },
          'aria-flowto': { type: 'idrefs', allowEmpty: !0, global: !0 },
          'aria-grabbed': {
            type: 'nmtoken',
            values: ['true', 'false', 'undefined'],
            global: !0,
          },
          'aria-haspopup': {
            type: 'nmtoken',
            allowEmpty: !0,
            values: [
              'true',
              'false',
              'menu',
              'listbox',
              'tree',
              'grid',
              'dialog',
            ],
            global: !0,
          },
          'aria-hidden': {
            type: 'nmtoken',
            values: ['true', 'false', 'undefined'],
            global: !0,
          },
          'aria-invalid': {
            type: 'nmtoken',
            values: ['grammar', 'false', 'spelling', 'true'],
            global: !0,
          },
          'aria-keyshortcuts': { type: 'string', allowEmpty: !0, global: !0 },
          'aria-label': { type: 'string', allowEmpty: !0, global: !0 },
          'aria-labelledby': { type: 'idrefs', allowEmpty: !0, global: !0 },
          'aria-level': { type: 'int', minValue: 1 },
          'aria-live': {
            type: 'nmtoken',
            values: ['assertive', 'off', 'polite'],
            global: !0,
          },
          'aria-modal': { type: 'boolean' },
          'aria-multiline': { type: 'boolean' },
          'aria-multiselectable': { type: 'boolean' },
          'aria-orientation': {
            type: 'nmtoken',
            values: ['horizontal', 'undefined', 'vertical'],
          },
          'aria-owns': { type: 'idrefs', allowEmpty: !0, global: !0 },
          'aria-placeholder': { type: 'string', allowEmpty: !0 },
          'aria-posinset': { type: 'int', minValue: 1 },
          'aria-pressed': {
            type: 'nmtoken',
            values: ['false', 'mixed', 'true', 'undefined'],
          },
          'aria-readonly': { type: 'boolean' },
          'aria-relevant': {
            type: 'nmtokens',
            values: ['additions', 'all', 'removals', 'text'],
            global: !0,
          },
          'aria-required': { type: 'boolean' },
          'aria-roledescription': {
            type: 'string',
            allowEmpty: !0,
            global: !0,
          },
          'aria-rowcount': { type: 'int', minValue: -1 },
          'aria-rowindex': { type: 'int', minValue: 1 },
          'aria-rowspan': { type: 'int', minValue: 0 },
          'aria-selected': {
            type: 'nmtoken',
            values: ['false', 'true', 'undefined'],
          },
          'aria-setsize': { type: 'int', minValue: -1 },
          'aria-sort': {
            type: 'nmtoken',
            values: ['ascending', 'descending', 'none', 'other'],
          },
          'aria-valuemax': { type: 'decimal' },
          'aria-valuemin': { type: 'decimal' },
          'aria-valuenow': { type: 'decimal' },
          'aria-valuetext': { type: 'string' },
        },
        _l = Ep,
        Ap = {
          alert: {
            type: 'widget',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          alertdialog: {
            type: 'widget',
            allowedAttrs: ['aria-expanded', 'aria-modal'],
            superclassRole: ['alert', 'dialog'],
            accessibleNameRequired: !0,
          },
          application: {
            type: 'landmark',
            allowedAttrs: ['aria-activedescendant', 'aria-expanded'],
            superclassRole: ['structure'],
            accessibleNameRequired: !0,
          },
          article: {
            type: 'structure',
            allowedAttrs: ['aria-posinset', 'aria-setsize', 'aria-expanded'],
            superclassRole: ['document'],
          },
          banner: {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          blockquote: { type: 'structure', superclassRole: ['section'] },
          button: {
            type: 'widget',
            allowedAttrs: ['aria-expanded', 'aria-pressed'],
            superclassRole: ['command'],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          caption: {
            type: 'structure',
            requiredContext: ['figure', 'table', 'grid', 'treegrid'],
            superclassRole: ['section'],
            prohibitedAttrs: ['aria-label', 'aria-labelledby'],
          },
          cell: {
            type: 'structure',
            requiredContext: ['row'],
            allowedAttrs: [
              'aria-colindex',
              'aria-colspan',
              'aria-rowindex',
              'aria-rowspan',
              'aria-expanded',
            ],
            superclassRole: ['section'],
            nameFromContent: !0,
          },
          checkbox: {
            type: 'widget',
            requiredAttrs: ['aria-checked'],
            allowedAttrs: ['aria-readonly', 'aria-required'],
            superclassRole: ['input'],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          code: {
            type: 'structure',
            superclassRole: ['section'],
            prohibitedAttrs: ['aria-label', 'aria-labelledby'],
          },
          columnheader: {
            type: 'structure',
            requiredContext: ['row'],
            allowedAttrs: [
              'aria-sort',
              'aria-colindex',
              'aria-colspan',
              'aria-expanded',
              'aria-readonly',
              'aria-required',
              'aria-rowindex',
              'aria-rowspan',
              'aria-selected',
            ],
            superclassRole: ['cell', 'gridcell', 'sectionhead'],
            accessibleNameRequired: !1,
            nameFromContent: !0,
          },
          combobox: {
            type: 'widget',
            requiredAttrs: ['aria-expanded', 'aria-controls'],
            allowedAttrs: [
              'aria-owns',
              'aria-autocomplete',
              'aria-readonly',
              'aria-required',
              'aria-activedescendant',
              'aria-orientation',
            ],
            superclassRole: ['select'],
            accessibleNameRequired: !0,
          },
          command: { type: 'abstract', superclassRole: ['widget'] },
          complementary: {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          composite: { type: 'abstract', superclassRole: ['widget'] },
          contentinfo: {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          comment: {
            type: 'structure',
            allowedAttrs: ['aria-level', 'aria-posinset', 'aria-setsize'],
            superclassRole: ['article'],
          },
          definition: {
            type: 'structure',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          deletion: {
            type: 'structure',
            superclassRole: ['section'],
            prohibitedAttrs: ['aria-label', 'aria-labelledby'],
          },
          dialog: {
            type: 'widget',
            allowedAttrs: ['aria-expanded', 'aria-modal'],
            superclassRole: ['window'],
            accessibleNameRequired: !0,
          },
          directory: {
            type: 'structure',
            deprecated: !0,
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['list'],
            nameFromContent: !0,
          },
          document: {
            type: 'structure',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['structure'],
          },
          emphasis: {
            type: 'structure',
            superclassRole: ['section'],
            prohibitedAttrs: ['aria-label', 'aria-labelledby'],
          },
          feed: {
            type: 'structure',
            requiredOwned: ['article'],
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['list'],
          },
          figure: {
            type: 'structure',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
            nameFromContent: !0,
          },
          form: {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          grid: {
            type: 'composite',
            requiredOwned: ['rowgroup', 'row'],
            allowedAttrs: [
              'aria-level',
              'aria-multiselectable',
              'aria-readonly',
              'aria-activedescendant',
              'aria-colcount',
              'aria-expanded',
              'aria-rowcount',
            ],
            superclassRole: ['composite', 'table'],
            accessibleNameRequired: !1,
          },
          gridcell: {
            type: 'widget',
            requiredContext: ['row'],
            allowedAttrs: [
              'aria-readonly',
              'aria-required',
              'aria-selected',
              'aria-colindex',
              'aria-colspan',
              'aria-expanded',
              'aria-rowindex',
              'aria-rowspan',
            ],
            superclassRole: ['cell', 'widget'],
            nameFromContent: !0,
          },
          group: {
            type: 'structure',
            allowedAttrs: ['aria-activedescendant', 'aria-expanded'],
            superclassRole: ['section'],
          },
          heading: {
            type: 'structure',
            requiredAttrs: ['aria-level'],
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['sectionhead'],
            accessibleNameRequired: !1,
            nameFromContent: !0,
          },
          img: {
            type: 'structure',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
            accessibleNameRequired: !0,
            childrenPresentational: !0,
          },
          input: { type: 'abstract', superclassRole: ['widget'] },
          insertion: {
            type: 'structure',
            superclassRole: ['section'],
            prohibitedAttrs: ['aria-label', 'aria-labelledby'],
          },
          landmark: { type: 'abstract', superclassRole: ['section'] },
          link: {
            type: 'widget',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['command'],
            accessibleNameRequired: !0,
            nameFromContent: !0,
          },
          list: {
            type: 'structure',
            requiredOwned: ['listitem'],
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          listbox: {
            type: 'widget',
            requiredOwned: ['group', 'option'],
            allowedAttrs: [
              'aria-multiselectable',
              'aria-readonly',
              'aria-required',
              'aria-activedescendant',
              'aria-expanded',
              'aria-orientation',
            ],
            superclassRole: ['select'],
            accessibleNameRequired: !0,
          },
          listitem: {
            type: 'structure',
            requiredContext: ['list'],
            allowedAttrs: [
              'aria-level',
              'aria-posinset',
              'aria-setsize',
              'aria-expanded',
            ],
            superclassRole: ['section'],
            nameFromContent: !0,
          },
          log: {
            type: 'widget',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          main: {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          marquee: {
            type: 'widget',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          math: {
            type: 'structure',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
            childrenPresentational: !0,
          },
          menu: {
            type: 'composite',
            requiredOwned: [
              'group',
              'menuitemradio',
              'menuitem',
              'menuitemcheckbox',
              'menu',
              'separator',
            ],
            allowedAttrs: [
              'aria-activedescendant',
              'aria-expanded',
              'aria-orientation',
            ],
            superclassRole: ['select'],
          },
          menubar: {
            type: 'composite',
            requiredOwned: [
              'group',
              'menuitemradio',
              'menuitem',
              'menuitemcheckbox',
              'menu',
              'separator',
            ],
            allowedAttrs: [
              'aria-activedescendant',
              'aria-expanded',
              'aria-orientation',
            ],
            superclassRole: ['menu'],
          },
          menuitem: {
            type: 'widget',
            requiredContext: ['menu', 'menubar', 'group'],
            allowedAttrs: ['aria-posinset', 'aria-setsize', 'aria-expanded'],
            superclassRole: ['command'],
            accessibleNameRequired: !0,
            nameFromContent: !0,
          },
          menuitemcheckbox: {
            type: 'widget',
            requiredContext: ['menu', 'menubar', 'group'],
            requiredAttrs: ['aria-checked'],
            allowedAttrs: ['aria-posinset', 'aria-readonly', 'aria-setsize'],
            superclassRole: ['checkbox', 'menuitem'],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          menuitemradio: {
            type: 'widget',
            requiredContext: ['menu', 'menubar', 'group'],
            requiredAttrs: ['aria-checked'],
            allowedAttrs: ['aria-posinset', 'aria-readonly', 'aria-setsize'],
            superclassRole: ['menuitemcheckbox', 'radio'],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          meter: {
            type: 'structure',
            requiredAttrs: ['aria-valuenow'],
            allowedAttrs: ['aria-valuemax', 'aria-valuemin', 'aria-valuetext'],
            superclassRole: ['range'],
            accessibleNameRequired: !0,
            childrenPresentational: !0,
          },
          mark: {
            type: 'structure',
            superclassRole: ['section'],
            prohibitedAttrs: ['aria-label', 'aria-labelledby'],
          },
          navigation: {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          none: {
            type: 'structure',
            superclassRole: ['structure'],
            prohibitedAttrs: ['aria-label', 'aria-labelledby'],
          },
          note: {
            type: 'structure',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          option: {
            type: 'widget',
            requiredContext: ['group', 'listbox'],
            allowedAttrs: [
              'aria-selected',
              'aria-checked',
              'aria-posinset',
              'aria-setsize',
            ],
            superclassRole: ['input'],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          paragraph: {
            type: 'structure',
            superclassRole: ['section'],
            prohibitedAttrs: ['aria-label', 'aria-labelledby'],
          },
          presentation: {
            type: 'structure',
            superclassRole: ['structure'],
            prohibitedAttrs: ['aria-label', 'aria-labelledby'],
          },
          progressbar: {
            type: 'widget',
            allowedAttrs: [
              'aria-expanded',
              'aria-valuemax',
              'aria-valuemin',
              'aria-valuenow',
              'aria-valuetext',
            ],
            superclassRole: ['range'],
            accessibleNameRequired: !0,
            childrenPresentational: !0,
          },
          radio: {
            type: 'widget',
            requiredAttrs: ['aria-checked'],
            allowedAttrs: ['aria-posinset', 'aria-setsize', 'aria-required'],
            superclassRole: ['input'],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          radiogroup: {
            type: 'composite',
            allowedAttrs: [
              'aria-readonly',
              'aria-required',
              'aria-activedescendant',
              'aria-expanded',
              'aria-orientation',
            ],
            superclassRole: ['select'],
            accessibleNameRequired: !1,
          },
          range: { type: 'abstract', superclassRole: ['widget'] },
          region: {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
            accessibleNameRequired: !1,
          },
          roletype: { type: 'abstract', superclassRole: [] },
          row: {
            type: 'structure',
            requiredContext: ['grid', 'rowgroup', 'table', 'treegrid'],
            requiredOwned: ['cell', 'columnheader', 'gridcell', 'rowheader'],
            allowedAttrs: [
              'aria-colindex',
              'aria-level',
              'aria-rowindex',
              'aria-selected',
              'aria-activedescendant',
              'aria-expanded',
              'aria-posinset',
              'aria-setsize',
            ],
            superclassRole: ['group', 'widget'],
            nameFromContent: !0,
          },
          rowgroup: {
            type: 'structure',
            requiredContext: ['grid', 'table', 'treegrid'],
            requiredOwned: ['row'],
            superclassRole: ['structure'],
            nameFromContent: !0,
          },
          rowheader: {
            type: 'structure',
            requiredContext: ['row'],
            allowedAttrs: [
              'aria-sort',
              'aria-colindex',
              'aria-colspan',
              'aria-expanded',
              'aria-readonly',
              'aria-required',
              'aria-rowindex',
              'aria-rowspan',
              'aria-selected',
            ],
            superclassRole: ['cell', 'gridcell', 'sectionhead'],
            accessibleNameRequired: !1,
            nameFromContent: !0,
          },
          scrollbar: {
            type: 'widget',
            requiredAttrs: ['aria-valuenow'],
            allowedAttrs: [
              'aria-controls',
              'aria-orientation',
              'aria-valuemax',
              'aria-valuemin',
              'aria-valuetext',
            ],
            superclassRole: ['range'],
            childrenPresentational: !0,
          },
          search: {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          searchbox: {
            type: 'widget',
            allowedAttrs: [
              'aria-activedescendant',
              'aria-autocomplete',
              'aria-multiline',
              'aria-placeholder',
              'aria-readonly',
              'aria-required',
            ],
            superclassRole: ['textbox'],
            accessibleNameRequired: !0,
          },
          section: {
            type: 'abstract',
            superclassRole: ['structure'],
            nameFromContent: !0,
          },
          sectionhead: {
            type: 'abstract',
            superclassRole: ['structure'],
            nameFromContent: !0,
          },
          select: { type: 'abstract', superclassRole: ['composite', 'group'] },
          separator: {
            type: 'structure',
            requiredAttrs: ['aria-valuenow'],
            allowedAttrs: [
              'aria-valuemax',
              'aria-valuemin',
              'aria-orientation',
              'aria-valuetext',
            ],
            superclassRole: ['structure', 'widget'],
            childrenPresentational: !0,
          },
          slider: {
            type: 'widget',
            requiredAttrs: ['aria-valuenow'],
            allowedAttrs: [
              'aria-valuemax',
              'aria-valuemin',
              'aria-orientation',
              'aria-readonly',
              'aria-valuetext',
            ],
            superclassRole: ['input', 'range'],
            accessibleNameRequired: !0,
            childrenPresentational: !0,
          },
          spinbutton: {
            type: 'widget',
            allowedAttrs: [
              'aria-valuemax',
              'aria-valuemin',
              'aria-readonly',
              'aria-required',
              'aria-activedescendant',
              'aria-valuetext',
              'aria-valuenow',
            ],
            superclassRole: ['composite', 'input', 'range'],
            accessibleNameRequired: !0,
          },
          status: {
            type: 'widget',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          strong: {
            type: 'structure',
            superclassRole: ['section'],
            prohibitedAttrs: ['aria-label', 'aria-labelledby'],
          },
          structure: { type: 'abstract', superclassRole: ['roletype'] },
          subscript: {
            type: 'structure',
            superclassRole: ['section'],
            prohibitedAttrs: ['aria-label', 'aria-labelledby'],
          },
          superscript: {
            type: 'structure',
            superclassRole: ['section'],
            prohibitedAttrs: ['aria-label', 'aria-labelledby'],
          },
          switch: {
            type: 'widget',
            requiredAttrs: ['aria-checked'],
            allowedAttrs: ['aria-readonly'],
            superclassRole: ['checkbox'],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          suggestion: {
            type: 'structure',
            requiredOwned: ['insertion', 'deletion'],
            superclassRole: ['section'],
            prohibitedAttrs: ['aria-label', 'aria-labelledby'],
          },
          tab: {
            type: 'widget',
            requiredContext: ['tablist'],
            allowedAttrs: [
              'aria-posinset',
              'aria-selected',
              'aria-setsize',
              'aria-expanded',
            ],
            superclassRole: ['sectionhead', 'widget'],
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          table: {
            type: 'structure',
            requiredOwned: ['rowgroup', 'row'],
            allowedAttrs: ['aria-colcount', 'aria-rowcount', 'aria-expanded'],
            superclassRole: ['section'],
            accessibleNameRequired: !1,
            nameFromContent: !0,
          },
          tablist: {
            type: 'composite',
            requiredOwned: ['tab'],
            allowedAttrs: [
              'aria-level',
              'aria-multiselectable',
              'aria-orientation',
              'aria-activedescendant',
              'aria-expanded',
            ],
            superclassRole: ['composite'],
          },
          tabpanel: {
            type: 'widget',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
            accessibleNameRequired: !1,
          },
          term: {
            type: 'structure',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
            nameFromContent: !0,
          },
          text: {
            type: 'structure',
            superclassRole: ['section'],
            nameFromContent: !0,
          },
          textbox: {
            type: 'widget',
            allowedAttrs: [
              'aria-activedescendant',
              'aria-autocomplete',
              'aria-multiline',
              'aria-placeholder',
              'aria-readonly',
              'aria-required',
            ],
            superclassRole: ['input'],
            accessibleNameRequired: !0,
          },
          time: { type: 'structure', superclassRole: ['section'] },
          timer: {
            type: 'widget',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['status'],
          },
          toolbar: {
            type: 'structure',
            allowedAttrs: [
              'aria-orientation',
              'aria-activedescendant',
              'aria-expanded',
            ],
            superclassRole: ['group'],
            accessibleNameRequired: !0,
          },
          tooltip: {
            type: 'structure',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
            nameFromContent: !0,
          },
          tree: {
            type: 'composite',
            requiredOwned: ['group', 'treeitem'],
            allowedAttrs: [
              'aria-multiselectable',
              'aria-required',
              'aria-activedescendant',
              'aria-expanded',
              'aria-orientation',
            ],
            superclassRole: ['select'],
            accessibleNameRequired: !1,
          },
          treegrid: {
            type: 'composite',
            requiredOwned: ['rowgroup', 'row'],
            allowedAttrs: [
              'aria-activedescendant',
              'aria-colcount',
              'aria-expanded',
              'aria-level',
              'aria-multiselectable',
              'aria-orientation',
              'aria-readonly',
              'aria-required',
              'aria-rowcount',
            ],
            superclassRole: ['grid', 'tree'],
            accessibleNameRequired: !1,
          },
          treeitem: {
            type: 'widget',
            requiredContext: ['group', 'tree'],
            allowedAttrs: [
              'aria-checked',
              'aria-expanded',
              'aria-level',
              'aria-posinset',
              'aria-selected',
              'aria-setsize',
            ],
            superclassRole: ['listitem', 'option'],
            accessibleNameRequired: !0,
            nameFromContent: !0,
          },
          widget: { type: 'abstract', superclassRole: ['roletype'] },
          window: { type: 'abstract', superclassRole: ['roletype'] },
        },
        xl = Ap,
        Fp = {
          'doc-abstract': {
            type: 'section',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          'doc-acknowledgments': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-afterword': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-appendix': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-backlink': {
            type: 'link',
            allowedAttrs: ['aria-expanded'],
            nameFromContent: !0,
            superclassRole: ['link'],
          },
          'doc-biblioentry': {
            type: 'listitem',
            allowedAttrs: [
              'aria-expanded',
              'aria-level',
              'aria-posinset',
              'aria-setsize',
            ],
            superclassRole: ['listitem'],
            deprecated: !0,
          },
          'doc-bibliography': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-biblioref': {
            type: 'link',
            allowedAttrs: ['aria-expanded'],
            nameFromContent: !0,
            superclassRole: ['link'],
          },
          'doc-chapter': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-colophon': {
            type: 'section',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          'doc-conclusion': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-cover': {
            type: 'img',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['img'],
          },
          'doc-credit': {
            type: 'section',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          'doc-credits': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-dedication': {
            type: 'section',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          'doc-endnote': {
            type: 'listitem',
            allowedAttrs: [
              'aria-expanded',
              'aria-level',
              'aria-posinset',
              'aria-setsize',
            ],
            superclassRole: ['listitem'],
            deprecated: !0,
          },
          'doc-endnotes': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-epigraph': {
            type: 'section',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          'doc-epilogue': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-errata': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-example': {
            type: 'section',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          'doc-footnote': {
            type: 'section',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          'doc-foreword': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-glossary': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-glossref': {
            type: 'link',
            allowedAttrs: ['aria-expanded'],
            nameFromContent: !0,
            superclassRole: ['link'],
          },
          'doc-index': {
            type: 'navigation',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['navigation'],
          },
          'doc-introduction': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-noteref': {
            type: 'link',
            allowedAttrs: ['aria-expanded'],
            nameFromContent: !0,
            superclassRole: ['link'],
          },
          'doc-notice': {
            type: 'note',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['note'],
          },
          'doc-pagebreak': {
            type: 'separator',
            allowedAttrs: ['aria-expanded', 'aria-orientation'],
            superclassRole: ['separator'],
            childrenPresentational: !0,
          },
          'doc-pagelist': {
            type: 'navigation',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['navigation'],
          },
          'doc-part': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-preface': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-prologue': {
            type: 'landmark',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['landmark'],
          },
          'doc-pullquote': { type: 'none', superclassRole: ['none'] },
          'doc-qna': {
            type: 'section',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['section'],
          },
          'doc-subtitle': {
            type: 'sectionhead',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['sectionhead'],
          },
          'doc-tip': {
            type: 'note',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['note'],
          },
          'doc-toc': {
            type: 'navigation',
            allowedAttrs: ['aria-expanded'],
            superclassRole: ['navigation'],
          },
        },
        Cp = Fp,
        Tp = {
          'graphics-document': {
            type: 'structure',
            superclassRole: ['document'],
            accessibleNameRequired: !0,
          },
          'graphics-object': {
            type: 'structure',
            superclassRole: ['group'],
            nameFromContent: !0,
          },
          'graphics-symbol': {
            type: 'structure',
            superclassRole: ['img'],
            accessibleNameRequired: !0,
            childrenPresentational: !0,
          },
        },
        kp = Tp,
        Rp = {
          a: {
            variant: {
              href: {
                matches: '[href]',
                contentTypes: ['interactive', 'phrasing', 'flow'],
                allowedRoles: [
                  'button',
                  'checkbox',
                  'menuitem',
                  'menuitemcheckbox',
                  'menuitemradio',
                  'option',
                  'radio',
                  'switch',
                  'tab',
                  'treeitem',
                  'doc-backlink',
                  'doc-biblioref',
                  'doc-glossref',
                  'doc-noteref',
                ],
                namingMethods: ['subtreeText'],
              },
              default: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
            },
          },
          abbr: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          address: { contentTypes: ['flow'], allowedRoles: !0 },
          area: {
            variant: {
              href: { matches: '[href]', allowedRoles: !1 },
              default: { allowedRoles: ['button', 'link'] },
            },
            contentTypes: ['phrasing', 'flow'],
            namingMethods: ['altText'],
          },
          article: {
            contentTypes: ['sectioning', 'flow'],
            allowedRoles: [
              'feed',
              'presentation',
              'none',
              'document',
              'application',
              'main',
              'region',
            ],
            shadowRoot: !0,
          },
          aside: {
            contentTypes: ['sectioning', 'flow'],
            allowedRoles: [
              'feed',
              'note',
              'presentation',
              'none',
              'region',
              'search',
              'doc-dedication',
              'doc-example',
              'doc-footnote',
              'doc-pullquote',
              'doc-tip',
            ],
          },
          audio: {
            variant: {
              controls: {
                matches: '[controls]',
                contentTypes: ['interactive', 'embedded', 'phrasing', 'flow'],
              },
              default: { contentTypes: ['embedded', 'phrasing', 'flow'] },
            },
            allowedRoles: ['application'],
            chromiumRole: 'Audio',
          },
          b: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          base: { allowedRoles: !1, noAriaAttrs: !0 },
          bdi: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          bdo: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          blockquote: {
            contentTypes: ['flow'],
            allowedRoles: !0,
            shadowRoot: !0,
          },
          body: { allowedRoles: !1, shadowRoot: !0 },
          br: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: ['presentation', 'none'],
            namingMethods: ['titleText', 'singleSpace'],
          },
          button: {
            contentTypes: ['interactive', 'phrasing', 'flow'],
            allowedRoles: [
              'checkbox',
              'combobox',
              'link',
              'menuitem',
              'menuitemcheckbox',
              'menuitemradio',
              'option',
              'radio',
              'switch',
              'tab',
            ],
            namingMethods: ['subtreeText'],
          },
          canvas: {
            allowedRoles: !0,
            contentTypes: ['embedded', 'phrasing', 'flow'],
            chromiumRole: 'Canvas',
          },
          caption: { allowedRoles: !1 },
          cite: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          code: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          col: { allowedRoles: !1, noAriaAttrs: !0 },
          colgroup: { allowedRoles: !1, noAriaAttrs: !0 },
          data: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          datalist: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: !1,
            noAriaAttrs: !0,
            implicitAttrs: { 'aria-multiselectable': 'false' },
          },
          dd: { allowedRoles: !1 },
          del: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          dfn: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          details: { contentTypes: ['interactive', 'flow'], allowedRoles: !1 },
          dialog: { contentTypes: ['flow'], allowedRoles: ['alertdialog'] },
          div: { contentTypes: ['flow'], allowedRoles: !0, shadowRoot: !0 },
          dl: {
            contentTypes: ['flow'],
            allowedRoles: ['group', 'list', 'presentation', 'none'],
            chromiumRole: 'DescriptionList',
          },
          dt: { allowedRoles: ['listitem'] },
          em: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          embed: {
            contentTypes: ['interactive', 'embedded', 'phrasing', 'flow'],
            allowedRoles: [
              'application',
              'document',
              'img',
              'presentation',
              'none',
            ],
            chromiumRole: 'EmbeddedObject',
          },
          fieldset: {
            contentTypes: ['flow'],
            allowedRoles: ['none', 'presentation', 'radiogroup'],
            namingMethods: ['fieldsetLegendText'],
          },
          figcaption: { allowedRoles: ['group', 'none', 'presentation'] },
          figure: {
            contentTypes: ['flow'],
            allowedRoles: !0,
            namingMethods: ['figureText', 'titleText'],
          },
          footer: {
            contentTypes: ['flow'],
            allowedRoles: ['group', 'none', 'presentation', 'doc-footnote'],
            shadowRoot: !0,
          },
          form: {
            contentTypes: ['flow'],
            allowedRoles: ['search', 'none', 'presentation'],
          },
          h1: {
            contentTypes: ['heading', 'flow'],
            allowedRoles: ['none', 'presentation', 'tab', 'doc-subtitle'],
            shadowRoot: !0,
            implicitAttrs: { 'aria-level': '1' },
          },
          h2: {
            contentTypes: ['heading', 'flow'],
            allowedRoles: ['none', 'presentation', 'tab', 'doc-subtitle'],
            shadowRoot: !0,
            implicitAttrs: { 'aria-level': '2' },
          },
          h3: {
            contentTypes: ['heading', 'flow'],
            allowedRoles: ['none', 'presentation', 'tab', 'doc-subtitle'],
            shadowRoot: !0,
            implicitAttrs: { 'aria-level': '3' },
          },
          h4: {
            contentTypes: ['heading', 'flow'],
            allowedRoles: ['none', 'presentation', 'tab', 'doc-subtitle'],
            shadowRoot: !0,
            implicitAttrs: { 'aria-level': '4' },
          },
          h5: {
            contentTypes: ['heading', 'flow'],
            allowedRoles: ['none', 'presentation', 'tab', 'doc-subtitle'],
            shadowRoot: !0,
            implicitAttrs: { 'aria-level': '5' },
          },
          h6: {
            contentTypes: ['heading', 'flow'],
            allowedRoles: ['none', 'presentation', 'tab', 'doc-subtitle'],
            shadowRoot: !0,
            implicitAttrs: { 'aria-level': '6' },
          },
          head: { allowedRoles: !1, noAriaAttrs: !0 },
          header: {
            contentTypes: ['flow'],
            allowedRoles: ['group', 'none', 'presentation', 'doc-footnote'],
            shadowRoot: !0,
          },
          hgroup: { contentTypes: ['heading', 'flow'], allowedRoles: !0 },
          hr: {
            contentTypes: ['flow'],
            allowedRoles: ['none', 'presentation', 'doc-pagebreak'],
            namingMethods: ['titleText', 'singleSpace'],
          },
          html: { allowedRoles: !1, noAriaAttrs: !0 },
          i: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          iframe: {
            contentTypes: ['interactive', 'embedded', 'phrasing', 'flow'],
            allowedRoles: [
              'application',
              'document',
              'img',
              'none',
              'presentation',
            ],
            chromiumRole: 'Iframe',
          },
          img: {
            variant: {
              nonEmptyAlt: {
                matches: [
                  { attributes: { alt: '/.+/' } },
                  { hasAccessibleName: !0 },
                ],
                allowedRoles: [
                  'button',
                  'checkbox',
                  'link',
                  'menuitem',
                  'menuitemcheckbox',
                  'menuitemradio',
                  'option',
                  'progressbar',
                  'radio',
                  'scrollbar',
                  'separator',
                  'slider',
                  'switch',
                  'tab',
                  'treeitem',
                  'doc-cover',
                ],
              },
              usemap: {
                matches: '[usemap]',
                contentTypes: ['interactive', 'embedded', 'flow'],
              },
              default: {
                allowedRoles: ['presentation', 'none'],
                contentTypes: ['embedded', 'flow'],
              },
            },
            namingMethods: ['altText'],
          },
          input: {
            variant: {
              button: {
                matches: { properties: { type: 'button' } },
                allowedRoles: [
                  'checkbox',
                  'combobox',
                  'link',
                  'menuitem',
                  'menuitemcheckbox',
                  'menuitemradio',
                  'option',
                  'radio',
                  'switch',
                  'tab',
                ],
              },
              buttonType: {
                matches: {
                  properties: { type: ['button', 'submit', 'reset'] },
                },
                namingMethods: ['valueText', 'titleText', 'buttonDefaultText'],
              },
              checkboxPressed: {
                matches: {
                  properties: { type: 'checkbox' },
                  attributes: { 'aria-pressed': '/.*/' },
                },
                allowedRoles: [
                  'button',
                  'menuitemcheckbox',
                  'option',
                  'switch',
                ],
                implicitAttrs: { 'aria-checked': 'false' },
              },
              checkbox: {
                matches: {
                  properties: { type: 'checkbox' },
                  attributes: { 'aria-pressed': null },
                },
                allowedRoles: ['menuitemcheckbox', 'option', 'switch'],
                implicitAttrs: { 'aria-checked': 'false' },
              },
              noRoles: {
                matches: {
                  properties: {
                    type: [
                      'color',
                      'date',
                      'datetime-local',
                      'file',
                      'month',
                      'number',
                      'password',
                      'range',
                      'reset',
                      'submit',
                      'time',
                      'week',
                    ],
                  },
                },
                allowedRoles: !1,
              },
              hidden: {
                matches: { properties: { type: 'hidden' } },
                contentTypes: ['flow'],
                allowedRoles: !1,
                noAriaAttrs: !0,
              },
              image: {
                matches: { properties: { type: 'image' } },
                allowedRoles: [
                  'link',
                  'menuitem',
                  'menuitemcheckbox',
                  'menuitemradio',
                  'radio',
                  'switch',
                ],
                namingMethods: [
                  'altText',
                  'valueText',
                  'labelText',
                  'titleText',
                  'buttonDefaultText',
                ],
              },
              radio: {
                matches: { properties: { type: 'radio' } },
                allowedRoles: ['menuitemradio'],
                implicitAttrs: { 'aria-checked': 'false' },
              },
              textWithList: {
                matches: {
                  properties: { type: 'text' },
                  attributes: { list: '/.*/' },
                },
                allowedRoles: !1,
              },
              default: {
                contentTypes: ['interactive', 'flow'],
                allowedRoles: ['combobox', 'searchbox', 'spinbutton'],
                implicitAttrs: { 'aria-valuenow': '' },
                namingMethods: ['labelText', 'placeholderText'],
              },
            },
          },
          ins: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          kbd: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          label: {
            contentTypes: ['interactive', 'phrasing', 'flow'],
            allowedRoles: !1,
            chromiumRole: 'Label',
          },
          legend: { allowedRoles: !1 },
          li: {
            allowedRoles: [
              'menuitem',
              'menuitemcheckbox',
              'menuitemradio',
              'option',
              'none',
              'presentation',
              'radio',
              'separator',
              'tab',
              'treeitem',
              'doc-biblioentry',
              'doc-endnote',
            ],
            implicitAttrs: { 'aria-setsize': '1', 'aria-posinset': '1' },
          },
          link: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          main: { contentTypes: ['flow'], allowedRoles: !1, shadowRoot: !0 },
          map: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          math: {
            contentTypes: ['embedded', 'phrasing', 'flow'],
            allowedRoles: !1,
          },
          mark: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          menu: {
            contentTypes: ['flow'],
            allowedRoles: [
              'directory',
              'group',
              'listbox',
              'menu',
              'menubar',
              'none',
              'presentation',
              'radiogroup',
              'tablist',
              'toolbar',
              'tree',
            ],
          },
          meta: {
            variant: {
              itemprop: {
                matches: '[itemprop]',
                contentTypes: ['phrasing', 'flow'],
              },
            },
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          meter: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: !1,
            chromiumRole: 'progressbar',
          },
          nav: {
            contentTypes: ['sectioning', 'flow'],
            allowedRoles: [
              'doc-index',
              'doc-pagelist',
              'doc-toc',
              'menu',
              'menubar',
              'none',
              'presentation',
              'tablist',
            ],
            shadowRoot: !0,
          },
          noscript: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          object: {
            variant: {
              usemap: {
                matches: '[usemap]',
                contentTypes: ['interactive', 'embedded', 'phrasing', 'flow'],
              },
              default: { contentTypes: ['embedded', 'phrasing', 'flow'] },
            },
            allowedRoles: ['application', 'document', 'img'],
            chromiumRole: 'PluginObject',
          },
          ol: {
            contentTypes: ['flow'],
            allowedRoles: [
              'directory',
              'group',
              'listbox',
              'menu',
              'menubar',
              'none',
              'presentation',
              'radiogroup',
              'tablist',
              'toolbar',
              'tree',
            ],
          },
          optgroup: { allowedRoles: !1 },
          option: {
            allowedRoles: !1,
            implicitAttrs: { 'aria-selected': 'false' },
          },
          output: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: !0,
            namingMethods: ['subtreeText'],
          },
          p: { contentTypes: ['flow'], allowedRoles: !0, shadowRoot: !0 },
          param: { allowedRoles: !1, noAriaAttrs: !0 },
          picture: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          pre: { contentTypes: ['flow'], allowedRoles: !0 },
          progress: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: !1,
            implicitAttrs: {
              'aria-valuemax': '100',
              'aria-valuemin': '0',
              'aria-valuenow': '0',
            },
          },
          q: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          rp: { allowedRoles: !0 },
          rt: { allowedRoles: !0 },
          ruby: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          s: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          samp: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          script: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          section: {
            contentTypes: ['sectioning', 'flow'],
            allowedRoles: [
              'alert',
              'alertdialog',
              'application',
              'banner',
              'complementary',
              'contentinfo',
              'dialog',
              'document',
              'feed',
              'group',
              'log',
              'main',
              'marquee',
              'navigation',
              'none',
              'note',
              'presentation',
              'search',
              'status',
              'tabpanel',
              'doc-abstract',
              'doc-acknowledgments',
              'doc-afterword',
              'doc-appendix',
              'doc-bibliography',
              'doc-chapter',
              'doc-colophon',
              'doc-conclusion',
              'doc-credit',
              'doc-credits',
              'doc-dedication',
              'doc-endnotes',
              'doc-epigraph',
              'doc-epilogue',
              'doc-errata',
              'doc-example',
              'doc-foreword',
              'doc-glossary',
              'doc-index',
              'doc-introduction',
              'doc-notice',
              'doc-pagelist',
              'doc-part',
              'doc-preface',
              'doc-prologue',
              'doc-pullquote',
              'doc-qna',
              'doc-toc',
            ],
            shadowRoot: !0,
          },
          select: {
            variant: {
              combobox: {
                matches: { attributes: { multiple: null, size: [null, '1'] } },
                allowedRoles: ['menu'],
              },
              default: { allowedRoles: !1 },
            },
            contentTypes: ['interactive', 'phrasing', 'flow'],
            implicitAttrs: { 'aria-valuenow': '' },
            namingMethods: ['labelText'],
          },
          slot: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          small: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          source: { allowedRoles: !1, noAriaAttrs: !0 },
          span: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: !0,
            shadowRoot: !0,
          },
          strong: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          style: { allowedRoles: !1, noAriaAttrs: !0 },
          svg: {
            contentTypes: ['embedded', 'phrasing', 'flow'],
            allowedRoles: !0,
            chromiumRole: 'SVGRoot',
            namingMethods: ['svgTitleText'],
          },
          sub: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          summary: { allowedRoles: !1, namingMethods: ['subtreeText'] },
          sup: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          table: {
            contentTypes: ['flow'],
            allowedRoles: !0,
            namingMethods: ['tableCaptionText', 'tableSummaryText'],
          },
          tbody: { allowedRoles: !0 },
          template: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          textarea: {
            contentTypes: ['interactive', 'phrasing', 'flow'],
            allowedRoles: !1,
            implicitAttrs: { 'aria-valuenow': '', 'aria-multiline': 'true' },
            namingMethods: ['labelText', 'placeholderText'],
          },
          tfoot: { allowedRoles: !0 },
          thead: { allowedRoles: !0 },
          time: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          title: { allowedRoles: !1, noAriaAttrs: !0 },
          td: { allowedRoles: !0 },
          th: { allowedRoles: !0 },
          tr: { allowedRoles: !0 },
          track: { allowedRoles: !1, noAriaAttrs: !0 },
          u: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          ul: {
            contentTypes: ['flow'],
            allowedRoles: [
              'directory',
              'group',
              'listbox',
              'menu',
              'menubar',
              'none',
              'presentation',
              'radiogroup',
              'tablist',
              'toolbar',
              'tree',
            ],
          },
          var: { contentTypes: ['phrasing', 'flow'], allowedRoles: !0 },
          video: {
            variant: {
              controls: {
                matches: '[controls]',
                contentTypes: ['interactive', 'embedded', 'phrasing', 'flow'],
              },
              default: { contentTypes: ['embedded', 'phrasing', 'flow'] },
            },
            allowedRoles: ['application'],
            chromiumRole: 'video',
          },
          wbr: {
            contentTypes: ['phrasing', 'flow'],
            allowedRoles: ['presentation', 'none'],
          },
        },
        Sp = Rp,
        Op = {
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
        },
        Ip = Op,
        El = {
          ariaAttrs: _l,
          ariaRoles: le({}, xl, Cp, kp),
          htmlElms: Sp,
          cssColors: Ip,
        },
        tr = le({}, El);
      function Pp(e) {
        Object.keys(tr).forEach(function (t) {
          e[t] && (tr[t] = sn(tr[t], e[t]));
        });
      }
      function Mp() {
        Object.keys(tr).forEach(function (e) {
          tr[e] = El[e];
        });
      }
      var ce = tr;
      function Np(e) {
        var t = ce.ariaRoles[e];
        return t ? !!t.unsupported : !1;
      }
      var Cn = Np;
      function qp(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.allowAbstract,
          a = t.flagUnsupported,
          n = a === void 0 ? !1 : a,
          i = ce.ariaRoles[e],
          o = Cn(e);
        return !i || (n && o) ? !1 : r ? !0 : i.type !== 'abstract';
      }
      var rr = qp;
      function Bp(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.fallback,
          a = t.abstracts,
          n = t.dpub;
        if (((e = e instanceof Q ? e : N(e)), e.props.nodeType !== 1))
          return null;
        var i = (e.attr('role') || '').trim().toLowerCase(),
          o = r ? He(i) : [i],
          l = o.find(function (u) {
            return !n && u.substr(0, 4) === 'doc-'
              ? !1
              : rr(u, { allowAbstract: a });
          });
        return l || null;
      }
      var ge = Bp;
      function Lp(e) {
        return Object.keys(ce.htmlElms).filter(function (t) {
          var r = ce.htmlElms[t];
          return r.contentTypes
            ? r.contentTypes.includes(e)
            : r.variant && r.variant.default && r.variant.default.contentTypes
              ? r.variant.default.contentTypes.includes(e)
              : !1;
        });
      }
      var Tn = Lp;
      function Vp() {
        return oe.get('globalAriaAttrs', function () {
          return Object.keys(ce.ariaAttrs).filter(function (e) {
            return ce.ariaAttrs[e].global;
          });
        });
      }
      var Bt = Vp;
      function jp(e) {
        for (var t = [], r = e.rows, a = 0, n = r.length; a < n; a++) {
          var i = r[a].cells;
          t[a] = t[a] || [];
          for (var o = 0, l = 0, u = i.length; l < u; l++)
            for (var s = 0; s < i[l].colSpan; s++) {
              for (
                var c = i[l].getAttribute('rowspan'),
                  d =
                    parseInt(c) === 0 || i[l].rowspan === 0
                      ? r.length
                      : i[l].rowSpan,
                  f = 0;
                f < d;
                f++
              ) {
                for (t[a + f] = t[a + f] || []; t[a + f][o]; ) o++;
                t[a + f][o] = i[l];
              }
              o++;
            }
        }
        return t;
      }
      var gt = We(jp);
      function Hp(e, t) {
        var r, a;
        for (t || (t = gt(er(e, 'table'))), r = 0; r < t.length; r++)
          if (t[r] && ((a = t[r].indexOf(e)), a !== -1)) return { x: a, y: r };
      }
      var ua = We(Hp);
      function zp(e) {
        var t = e instanceof Q ? e : N(e);
        e = t.actualNode;
        var r = t.attr('scope'),
          a = t.attr('role');
        if (!['td', 'th'].includes(t.props.nodeName))
          throw new TypeError('Expected TD or TH element');
        if (a === 'columnheader') return 'col';
        if (a === 'rowheader') return 'row';
        if (r === 'col' || r === 'row') return r;
        if (t.props.nodeName !== 'th') return !1;
        if (!t.actualNode) return 'auto';
        var n = gt(er(e, 'table')),
          i = ua(e, n),
          o = n[i.y].reduce(function (u, s) {
            return u && s.nodeName.toUpperCase() === 'TH';
          }, !0);
        if (o) return 'col';
        var l = n
          .map(function (u) {
            return u[i.x];
          })
          .reduce(function (u, s) {
            return u && s && s.nodeName.toUpperCase() === 'TH';
          }, !0);
        return l ? 'row' : 'auto';
      }
      var kn = zp;
      function Up(e) {
        return ['col', 'auto'].indexOf(kn(e)) !== -1;
      }
      var ar = Up;
      function $p(e) {
        return ['row', 'auto'].includes(kn(e));
      }
      var nr = $p;
      function Wp(e) {
        return e
          ? e
              .replace(
                /\r\n/g,
                `
`,
              )
              .replace(/\u00A0/g, ' ')
              .replace(/[\s]{2,}/g, ' ')
              .trim()
          : '';
      }
      var J = Wp;
      function Gp(e) {
        var t = e instanceof Q ? e : N(e);
        if (!t || wn(t)) return !1;
        switch (t.props.nodeName) {
          case 'a':
          case 'area':
            if (t.hasAttr('href')) return !0;
            break;
          case 'input':
            return t.props.type !== 'hidden';
          case 'textarea':
          case 'select':
          case 'summary':
          case 'button':
            return !0;
          case 'details':
            return !Ze(t, 'summary').length;
        }
        return !1;
      }
      var Rn = Gp;
      function Fe(e) {
        var t = e instanceof Q ? e : N(e);
        if (t.props.nodeType !== 1 || wn(t)) return !1;
        if (Rn(t)) return !0;
        var r = t.attr('tabindex');
        return !!(r && !isNaN(parseInt(r, 10)));
      }
      var Al =
        Tn('sectioning')
          .map(function (e) {
            return ''.concat(e, ':not([role])');
          })
          .join(', ') +
        ' , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]';
      function Fl(e) {
        var t = J(Ar(e)),
          r = J(Fr(e));
        return !!(t || r);
      }
      var Yp = {
          a: function (t) {
            return t.hasAttr('href') ? 'link' : null;
          },
          area: function (t) {
            return t.hasAttr('href') ? 'link' : null;
          },
          article: 'article',
          aside: 'complementary',
          body: 'document',
          button: 'button',
          datalist: 'listbox',
          dd: 'definition',
          dfn: 'term',
          details: 'group',
          dialog: 'dialog',
          dt: 'term',
          fieldset: 'group',
          figure: 'figure',
          footer: function (t) {
            var r = Ke(t, Al);
            return r ? null : 'contentinfo';
          },
          form: function (t) {
            return Fl(t) ? 'form' : null;
          },
          h1: 'heading',
          h2: 'heading',
          h3: 'heading',
          h4: 'heading',
          h5: 'heading',
          h6: 'heading',
          header: function (t) {
            var r = Ke(t, Al);
            return r ? null : 'banner';
          },
          hr: 'separator',
          img: function (t) {
            var r = t.hasAttr('alt') && !t.attr('alt'),
              a = Bt().find(function (n) {
                return t.hasAttr(n);
              });
            return r && !a && !Fe(t) ? 'presentation' : 'img';
          },
          input: function (t) {
            var r;
            if (t.hasAttr('list')) {
              var a = ut(t.actualNode, 'list').filter(function (n) {
                return !!n;
              })[0];
              r = a && a.nodeName.toLowerCase() === 'datalist';
            }
            switch (t.props.type) {
              case 'checkbox':
                return 'checkbox';
              case 'number':
                return 'spinbutton';
              case 'radio':
                return 'radio';
              case 'range':
                return 'slider';
              case 'search':
                return r ? 'combobox' : 'searchbox';
              case 'button':
              case 'image':
              case 'reset':
              case 'submit':
                return 'button';
              case 'text':
              case 'tel':
              case 'url':
              case 'email':
              case '':
                return r ? 'combobox' : 'textbox';
              default:
                return 'textbox';
            }
          },
          li: 'listitem',
          main: 'main',
          math: 'math',
          menu: 'list',
          nav: 'navigation',
          ol: 'list',
          optgroup: 'group',
          option: 'option',
          output: 'status',
          progress: 'progressbar',
          section: function (t) {
            return Fl(t) ? 'region' : null;
          },
          select: function (t) {
            return t.hasAttr('multiple') || parseInt(t.attr('size')) > 1
              ? 'listbox'
              : 'combobox';
          },
          summary: 'button',
          table: 'table',
          tbody: 'rowgroup',
          td: function (t) {
            var r = Ke(t, 'table'),
              a = ge(r);
            return ['grid', 'treegrid'].includes(a) ? 'gridcell' : 'cell';
          },
          textarea: 'textbox',
          tfoot: 'rowgroup',
          th: function (t) {
            if (ar(t)) return 'columnheader';
            if (nr(t)) return 'rowheader';
          },
          thead: 'rowgroup',
          tr: 'row',
          ul: 'list',
        },
        Sn = Yp;
      function Kp(e, t) {
        var r = I(t);
        if (Array.isArray(t) && typeof e < 'u') return t.includes(e);
        if (r === 'function') return !!t(e);
        if (e != null) {
          if (t instanceof RegExp) return t.test(e);
          if (/^\/.*\/$/.test(t)) {
            var a = t.substring(1, t.length - 1);
            return new RegExp(a).test(e);
          }
        }
        return t === e;
      }
      var Lt = Kp;
      function Xp(e, t) {
        return Lt(!!Ge(e), t);
      }
      var Cl = Xp;
      function Jp(e, t) {
        var r = I(t);
        if (r !== 'object' || Array.isArray(t) || t instanceof RegExp)
          throw new Error('Expect matcher to be an object');
        return Object.keys(t).every(function (a) {
          return Lt(e(a), t[a]);
        });
      }
      var On = Jp;
      function Qp(e, t) {
        return (
          e instanceof Q || (e = N(e)),
          On(function (r) {
            return e.attr(r);
          }, t)
        );
      }
      var Tl = Qp;
      function Zp(e, t) {
        return !!t(e);
      }
      var kl = Zp;
      function em(e, t) {
        return Lt(ge(e), t);
      }
      var Rl = em;
      function tm(e, t) {
        return Lt(ct(e), t);
      }
      var Sl = tm;
      function rm(e, t) {
        return e instanceof Q || (e = N(e)), Lt(e.props.nodeName, t);
      }
      var Ol = rm;
      function am(e, t) {
        return (
          e instanceof Q || (e = N(e)),
          On(function (r) {
            return e.props[r];
          }, t)
        );
      }
      var Il = am;
      function nm(e, t) {
        return Lt(ue(e), t);
      }
      var Pl = nm,
        Ml = {
          hasAccessibleName: Cl,
          attributes: Tl,
          condition: kl,
          explicitRole: Rl,
          implicitRole: Sl,
          nodeName: Ol,
          properties: Il,
          semanticRole: Pl,
        };
      function Nl(e, t) {
        return (
          e instanceof Q || (e = N(e)),
          Array.isArray(t)
            ? t.some(function (r) {
                return Nl(e, r);
              })
            : typeof t == 'string'
              ? Ka(e, t)
              : Object.keys(t).every(function (r) {
                  if (!Ml[r])
                    throw new Error('Unknown matcher type "'.concat(r, '"'));
                  var a = Ml[r],
                    n = t[r];
                  return a(e, n);
                })
        );
      }
      var ql = Nl;
      function im(e, t) {
        return ql(e, t);
      }
      var Je = im;
      (Je.hasAccessibleName = Cl),
        (Je.attributes = Tl),
        (Je.condition = kl),
        (Je.explicitRole = Rl),
        (Je.fromDefinition = ql),
        (Je.fromFunction = On),
        (Je.fromPrimative = Lt),
        (Je.implicitRole = Sl),
        (Je.nodeName = Ol),
        (Je.properties = Il),
        (Je.semanticRole = Pl);
      var Cr = Je;
      function om(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.noMatchAccessibleName,
          a = r === void 0 ? !1 : r,
          n = ce.htmlElms[e.props.nodeName];
        if (!n) return {};
        if (!n.variant) return n;
        var i = n.variant,
          o = Ve(n, Ac);
        for (var l in i)
          if (!(!i.hasOwnProperty(l) || l === 'default')) {
            for (
              var u = i[l],
                s = u.matches,
                c = Ve(u, Fc),
                d = Array.isArray(s) ? s : [s],
                f = 0;
              f < d.length && a;
              f++
            )
              if (d[f].hasOwnProperty('hasAccessibleName')) return n;
            if (Cr(e, s)) for (var p in c) c.hasOwnProperty(p) && (o[p] = c[p]);
          }
        for (var m in i.default)
          i.default.hasOwnProperty(m) &&
            typeof o[m] > 'u' &&
            (o[m] = i.default[m]);
        return o;
      }
      var Vt = om;
      function lm(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.chromium,
          a = e instanceof Q ? e : N(e);
        if (((e = a.actualNode), !a))
          throw new ReferenceError(
            'Cannot get implicit role of a node outside the current scope.',
          );
        var n = a.props.nodeName,
          i = Sn[n];
        if (!i && r) {
          var o = Vt(a),
            l = o.chromiumRole;
          return l || null;
        }
        return typeof i == 'function' ? i(a) : i || null;
      }
      var ct = lm,
        um = {
          td: ['tr'],
          th: ['tr'],
          tr: ['thead', 'tbody', 'tfoot', 'table'],
          thead: ['table'],
          tbody: ['table'],
          tfoot: ['table'],
          li: ['ol', 'ul'],
          dt: ['dl', 'div'],
          dd: ['dl', 'div'],
          div: ['dl'],
        };
      function Bl(e, t) {
        var r = um[e.props.nodeName];
        if (!r) return null;
        if (!e.parent) {
          if (!e.actualNode) return null;
          throw new ReferenceError(
            'Cannot determine role presentational inheritance of a required parent outside the current scope.',
          );
        }
        if (!r.includes(e.parent.props.nodeName)) return null;
        var a = ge(e.parent, t);
        return ['none', 'presentation'].includes(a) && !Vl(e.parent)
          ? a
          : a
            ? null
            : Bl(e.parent, t);
      }
      function Ll(e, t) {
        var r = t.chromium,
          a = Ve(t, Cc),
          n = ct(e, { chromium: r });
        if (!n) return null;
        var i = Bl(e, a);
        return i || n;
      }
      function Vl(e) {
        var t = Bt().some(function (r) {
          return e.hasAttr(r);
        });
        return t || Fe(e);
      }
      function sm(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.noImplicit,
          a = Ve(t, Tc),
          n = e instanceof Q ? e : N(e);
        if (n.props.nodeType !== 1) return null;
        var i = ge(n, a);
        return i
          ? ['presentation', 'none'].includes(i) && Vl(n)
            ? r
              ? null
              : Ll(n, a)
            : i
          : r
            ? null
            : Ll(n, a);
      }
      function cm(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.noPresentational,
          a = Ve(t, kc),
          n = sm(e, a);
        return r && ['presentation', 'none'].includes(n) ? null : n;
      }
      var ue = cm,
        dm = ['iframe'];
      function fm(e) {
        var t = e instanceof Q ? e : N(e);
        return t.props.nodeType !== 1 ||
          !e.hasAttr('title') ||
          (!Je(t, dm) && ['none', 'presentation'].includes(ue(t)))
          ? ''
          : t.attr('title');
      }
      var sa = fm;
      function pm(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.strict;
        if (((e = e instanceof Q ? e : N(e)), e.props.nodeType !== 1))
          return !1;
        var a = ue(e),
          n = ce.ariaRoles[a];
        return n && n.nameFromContent
          ? !0
          : r
            ? !1
            : !n || ['presentation', 'none'].includes(a);
      }
      var jl = pm;
      function mm(e) {
        var t = e.actualNode,
          r = e.children;
        if (!r) throw new Error('getOwnedVirtual requires a virtual node');
        if (e.hasAttr('aria-owns')) {
          var a = ut(t, 'aria-owns')
            .filter(function (n) {
              return !!n;
            })
            .map(function (n) {
              return v.utils.getNodeFromTree(n);
            });
          return [].concat(re(r), re(a));
        }
        return re(r);
      }
      var Tr = mm;
      function hm(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = Ge.alreadyProcessed;
        t.startNode = t.startNode || e;
        var a = t,
          n = a.strict,
          i = a.inControlContext,
          o = a.inLabelledByContext,
          l = Vt(e, { noMatchAccessibleName: !0 }),
          u = l.contentTypes;
        if (
          r(e, t) ||
          e.props.nodeType !== 1 ||
          (u != null && u.includes('embedded')) ||
          (!jl(e, { strict: n }) && !t.subtreeDescendant)
        )
          return '';
        if (!n) {
          var s = !i && !o;
          t = le({ subtreeDescendant: s }, t);
        }
        return Tr(e).reduce(function (c, d) {
          return gm(c, d, t);
        }, '');
      }
      var vm = Tn('phrasing').concat(['#text']);
      function gm(e, t, r) {
        var a = t.props.nodeName,
          n = Ge(t, r);
        return n
          ? (vm.includes(a) ||
              (n[0] !== ' ' && (n += ' '),
              e && e[e.length - 1] !== ' ' && (n = ' ' + n)),
            e + n)
          : e;
      }
      var Et = hm;
      function bm(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = Ge.alreadyProcessed;
        if (t.inControlContext || t.inLabelledByContext || r(e, t)) return '';
        t.startNode || (t.startNode = e);
        var a = le({ inControlContext: !0 }, t),
          n = ym(e),
          i = Ke(e, 'label'),
          o;
        return (
          i ? ((o = [].concat(re(n), [i.actualNode])), o.sort(ui)) : (o = n),
          o
            .map(function (l) {
              return qt(l, a);
            })
            .filter(function (l) {
              return l !== '';
            })
            .join(' ')
        );
      }
      function ym(e) {
        if (!e.attr('id')) return [];
        if (!e.actualNode)
          throw new TypeError(
            'Cannot resolve explicit label reference for non-DOM nodes',
          );
        return Vo({
          elm: 'label',
          attr: 'for',
          value: e.attr('id'),
          context: e.actualNode,
        });
      }
      var In = bm,
        Dm = { submit: 'Submit', image: 'Submit', reset: 'Reset', button: '' },
        wm = {
          valueText: function (t) {
            var r = t.actualNode;
            return r.value || '';
          },
          buttonDefaultText: function (t) {
            var r = t.actualNode;
            return Dm[r.type] || '';
          },
          tableCaptionText: ca.bind(null, 'caption'),
          figureText: ca.bind(null, 'figcaption'),
          svgTitleText: ca.bind(null, 'title'),
          fieldsetLegendText: ca.bind(null, 'legend'),
          altText: Pn.bind(null, 'alt'),
          tableSummaryText: Pn.bind(null, 'summary'),
          titleText: sa,
          subtreeText: Et,
          labelText: In,
          singleSpace: function () {
            return ' ';
          },
          placeholderText: Pn.bind(null, 'placeholder'),
        };
      function Pn(e, t) {
        return t.attr(e) || '';
      }
      function ca(e, t, r) {
        var a = t.actualNode;
        e = e.toLowerCase();
        var n = [e, a.nodeName.toLowerCase()].join(','),
          i = a.querySelector(n);
        return !i || i.nodeName.toLowerCase() !== e ? '' : qt(i, r);
      }
      var Hl = wm;
      function _m(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = e.actualNode;
        if (e.props.nodeType !== 1 || ['presentation', 'none'].includes(ue(e)))
          return '';
        var a = xm(e),
          n = a.reduce(function (i, o) {
            return i || o(e, t);
          }, '');
        return t.debug && v.log(n || '{empty-value}', r, t), n;
      }
      function xm(e) {
        var t = Vt(e, { noMatchAccessibleName: !0 }),
          r = t.namingMethods || [];
        return r.map(function (a) {
          return Hl[a];
        });
      }
      var zl = _m,
        Em = {
          accessibleNameFromFieldValue: ['combobox', 'listbox', 'progressbar'],
        },
        Ul = Em;
      function _e(e) {
        return (e = e instanceof Q ? e : N(e)), Mn(e);
      }
      var Mn = We(function (t, r) {
        return Go(t) || oa(t, { skipAncestors: !0, isAncestor: r })
          ? !1
          : t.actualNode && t.props.nodeName === 'area'
            ? !pn(t, Mn)
            : xt(t, { skipAncestors: !0, isAncestor: r })
              ? !1
              : t.parent
                ? Mn(t.parent, !0)
                : !0;
      });
      function $l(e, t, r) {
        var a = e instanceof Q ? e : N(e),
          n = t ? _e : Xe,
          i = !e.actualNode || (e.actualNode && n(e)),
          o = a.children
            .map(function (l) {
              var u = l.props,
                s = u.nodeType,
                c = u.nodeValue;
              if (s === 3) {
                if (c && i) return c;
              } else if (!r) return $l(l, t);
            })
            .join('');
        return J(o);
      }
      var dt = $l,
        Am = [
          'button',
          'checkbox',
          'color',
          'file',
          'hidden',
          'image',
          'password',
          'radio',
          'reset',
          'submit',
        ];
      function Fm(e) {
        e = e instanceof Q ? e : N(e);
        var t = e.props.nodeName;
        return (
          t === 'textarea' ||
          (t === 'input' && !Am.includes((e.attr('type') || '').toLowerCase()))
        );
      }
      var Wl = Fm;
      function Cm(e) {
        e = e instanceof Q ? e : N(e);
        var t = e.props.nodeName;
        return t === 'select';
      }
      var Gl = Cm;
      function Tm(e) {
        var t = ge(e);
        return t === 'textbox';
      }
      var Yl = Tm;
      function km(e) {
        var t = ge(e);
        return t === 'listbox';
      }
      var Kl = km;
      function Rm(e) {
        var t = ge(e);
        return t === 'combobox';
      }
      var Xl = Rm,
        Sm = ['progressbar', 'scrollbar', 'slider', 'spinbutton'];
      function Om(e) {
        var t = ge(e);
        return Sm.includes(t);
      }
      var Jl = Om,
        Im = [
          'textbox',
          'progressbar',
          'scrollbar',
          'slider',
          'spinbutton',
          'combobox',
          'listbox',
        ],
        Nn = {
          nativeTextboxValue: Mm,
          nativeSelectValue: Nm,
          ariaTextboxValue: qm,
          ariaListboxValue: Ql,
          ariaComboboxValue: Bm,
          ariaRangeValue: Lm,
        };
      function Pm(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = e.actualNode,
          a = Ul.accessibleNameFromFieldValue || [],
          n = ue(e);
        if (t.startNode === e || !Im.includes(n) || a.includes(n)) return '';
        var i = Object.keys(Nn).map(function (l) {
            return Nn[l];
          }),
          o = i.reduce(function (l, u) {
            return l || u(e, t);
          }, '');
        return t.debug && It(o || '{empty-value}', r, t), o;
      }
      function Mm(e) {
        var t = e instanceof Q ? e : N(e);
        return (Wl(t) && t.props.value) || '';
      }
      function Nm(e) {
        var t = e instanceof Q ? e : N(e);
        if (!Gl(t)) return '';
        var r = Ze(t, 'option'),
          a = r.filter(function (n) {
            return n.props.selected;
          });
        return (
          a.length || a.push(r[0]),
          a
            .map(function (n) {
              return dt(n);
            })
            .join(' ') || ''
        );
      }
      function qm(e) {
        var t = e instanceof Q ? e : N(e),
          r = t.actualNode;
        return Yl(t) ? (!r || (r && !xt(r)) ? dt(t, !0) : r.textContent) : '';
      }
      function Ql(e, t) {
        var r = e instanceof Q ? e : N(e);
        if (!Kl(r)) return '';
        var a = Tr(r).filter(function (n) {
          return ue(n) === 'option' && n.attr('aria-selected') === 'true';
        });
        return a.length === 0 ? '' : Ge(a[0], t);
      }
      function Bm(e, t) {
        var r = e instanceof Q ? e : N(e);
        if (!Xl(r)) return '';
        var a = Tr(r).filter(function (n) {
          return ue(n) === 'listbox';
        })[0];
        return a ? Ql(a, t) : '';
      }
      function Lm(e) {
        var t = e instanceof Q ? e : N(e);
        if (!Jl(t) || !t.hasAttr('aria-valuenow')) return '';
        var r = +t.attr('aria-valuenow');
        return isNaN(r) ? '0' : String(r);
      }
      var Zl = Pm;
      function eu() {
        return /[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g;
      }
      function tu() {
        return /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g;
      }
      function ru() {
        return /[\uDB80-\uDBBF][\uDC00-\uDFFF]/g;
      }
      var qn = function () {
        return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
      };
      function Vm(e, t) {
        var r = t.emoji,
          a = t.nonBmp,
          n = t.punctuations;
        return r
          ? qn().test(e)
          : a
            ? eu().test(e) || ru().test(e)
            : n
              ? tu().test(e)
              : !1;
      }
      var Bn = Vm;
      function jm(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : 0.15,
          r =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3,
          a = e.actualNode.nodeValue.trim();
        if (!J(a) || Bn(a, { emoji: !0, nonBmp: !0 })) return !1;
        var n = oe.get('canvasContext', function () {
            return k
              .createElement('canvas')
              .getContext('2d', { willReadFrequently: !0 });
          }),
          i = n.canvas;
        oe.get('fonts') || oe.set('fonts', {});
        var o = oe.get('fonts'),
          l = y.getComputedStyle(e.parent.actualNode),
          u = l.getPropertyValue('font-family');
        o[u] || (o[u] = { occurrences: 0, numLigatures: 0 });
        var s = o[u];
        if (s.occurrences >= r) {
          if (s.numLigatures / s.occurrences === 1) return !0;
          if (s.numLigatures === 0) return !1;
        }
        s.occurrences++;
        var c = 30,
          d = ''.concat(c, 'px ').concat(u);
        n.font = d;
        var f = a.charAt(0),
          p = n.measureText(f).width;
        if (p < 30) {
          var m = 30 / p;
          (p *= m), (c *= m), (d = ''.concat(c, 'px ').concat(u));
        }
        (i.width = p),
          (i.height = c),
          (n.font = d),
          (n.textAlign = 'left'),
          (n.textBaseline = 'top'),
          n.fillText(f, 0, 0);
        var b = new Uint32Array(n.getImageData(0, 0, p, c).data.buffer);
        if (
          !b.some(function (P) {
            return P;
          })
        )
          return s.numLigatures++, !0;
        n.clearRect(0, 0, p, c), n.fillText(a, 0, 0);
        var D = new Uint32Array(n.getImageData(0, 0, p, c).data.buffer),
          h = b.reduce(function (P, B, V) {
            return (B === 0 && D[V] === 0) || (B !== 0 && D[V] !== 0) ? P : ++P;
          }, 0),
          g = a.split('').reduce(function (P, B) {
            return P + n.measureText(B).width;
          }, 0),
          x = n.measureText(a).width,
          E = h / b.length,
          C = 1 - x / g;
        return E >= t && C >= t ? (s.numLigatures++, !0) : !1;
      }
      var Ln = jm;
      function au(e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (((t = $m(e, t)), zm(e, t) || Um(e, t))) return '';
        var r = [Ar, Fr, zl, Zl, Et, Hm, sa],
          a = r.reduce(function (n, i) {
            return t.startNode === e && (n = J(n)), n !== '' ? n : i(e, t);
          }, '');
        return t.debug && v.log(a || '{empty-value}', e.actualNode, t), a;
      }
      function Hm(e) {
        return e.props.nodeType !== 3 ? '' : e.props.nodeValue;
      }
      function zm(e, t) {
        return !e || e.props.nodeType !== 1 || t.includeHidden ? !1 : !_e(e);
      }
      function Um(e, t) {
        var r,
          a = t.ignoreIconLigature,
          n = t.pixelThreshold,
          i =
            (r = t.occurrenceThreshold) !== null && r !== void 0
              ? r
              : t.occuranceThreshold;
        return e.props.nodeType !== 3 || !a ? !1 : Ln(e, n, i);
      }
      function $m(e, t) {
        return (
          t.startNode || (t = le({ startNode: e }, t)),
          e.props.nodeType === 1 &&
            t.inLabelledByContext &&
            t.includeHidden === void 0 &&
            (t = le({ includeHidden: !_e(e) }, t)),
          t
        );
      }
      au.alreadyProcessed = function (t, r) {
        return (
          (r.processed = r.processed || []),
          r.processed.includes(t) ? !0 : (r.processed.push(t), !1)
        );
      };
      var Ge = au;
      function Wm(e, t) {
        var r = t.emoji,
          a = t.nonBmp,
          n = t.punctuations;
        return (
          r && (e = e.replace(qn(), '')),
          a && ((e = e.replace(eu(), '')), (e = e.replace(ru(), ''))),
          n && (e = e.replace(tu(), '')),
          e
        );
      }
      var kr = Wm;
      function Gm(e) {
        if (!e.length) return 0;
        var t = ['x', 'i'];
        if (t.includes(e)) return 0;
        var r = kr(e, { emoji: !0, nonBmp: !0, punctuations: !0 });
        return J(r) ? 1 : 0;
      }
      var Vn = Gm,
        jt = {
          stateTerms: ['on', 'off'],
          standaloneTerms: [
            'name',
            'honorific-prefix',
            'given-name',
            'additional-name',
            'family-name',
            'honorific-suffix',
            'nickname',
            'username',
            'new-password',
            'current-password',
            'organization-title',
            'organization',
            'street-address',
            'address-line1',
            'address-line2',
            'address-line3',
            'address-level4',
            'address-level3',
            'address-level2',
            'address-level1',
            'country',
            'country-name',
            'postal-code',
            'cc-name',
            'cc-given-name',
            'cc-additional-name',
            'cc-family-name',
            'cc-number',
            'cc-exp',
            'cc-exp-month',
            'cc-exp-year',
            'cc-csc',
            'cc-type',
            'transaction-currency',
            'transaction-amount',
            'language',
            'bday',
            'bday-day',
            'bday-month',
            'bday-year',
            'sex',
            'url',
            'photo',
            'one-time-code',
          ],
          qualifiers: ['home', 'work', 'mobile', 'fax', 'pager'],
          qualifiedTerms: [
            'tel',
            'tel-country-code',
            'tel-national',
            'tel-area-code',
            'tel-local',
            'tel-local-prefix',
            'tel-local-suffix',
            'tel-extension',
            'email',
            'impp',
          ],
          locations: ['billing', 'shipping'],
        };
      function Ym(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.looseTyped,
          a = r === void 0 ? !1 : r,
          n = t.stateTerms,
          i = n === void 0 ? [] : n,
          o = t.locations,
          l = o === void 0 ? [] : o,
          u = t.qualifiers,
          s = u === void 0 ? [] : u,
          c = t.standaloneTerms,
          d = c === void 0 ? [] : c,
          f = t.qualifiedTerms,
          p = f === void 0 ? [] : f;
        if (
          ((e = e.toLowerCase().trim()),
          (i = i.concat(jt.stateTerms)),
          i.includes(e) || e === '')
        )
          return !0;
        (s = s.concat(jt.qualifiers)),
          (l = l.concat(jt.locations)),
          (d = d.concat(jt.standaloneTerms)),
          (p = p.concat(jt.qualifiedTerms));
        var m = e.split(/\s+/g);
        if (
          (m[m.length - 1] === 'webauthn' && (m.pop(), m.length === 0)) ||
          (!a &&
            (m[0].length > 8 && m[0].substr(0, 8) === 'section-' && m.shift(),
            l.includes(m[0]) && m.shift(),
            s.includes(m[0]) && (m.shift(), (d = [])),
            m.length !== 1))
        )
          return !1;
        var b = m[m.length - 1];
        return d.includes(b) || p.includes(b);
      }
      var nu = Ym;
      function Km(e) {
        var t, r;
        return (e.attr('aria-labelledby') &&
          ((t = ut(e.actualNode, 'aria-labelledby')),
          (r = t
            .map(function (a) {
              var n = N(a);
              return n ? dt(n) : '';
            })
            .join(' ')
            .trim()),
          r)) ||
          ((r = e.attr('aria-label')), r && ((r = J(r)), r))
          ? r
          : null;
      }
      var da = Km;
      function Xm(e, t, r) {
        return (e = N(e)), dt(e, t, r);
      }
      var iu = Xm;
      function Jm(e) {
        var t, r, a;
        if (((r = da(e)), r)) return r;
        if (e.attr('id')) {
          if (!e.actualNode)
            throw new TypeError(
              'Cannot resolve explicit label reference for non-DOM nodes',
            );
          var n = Ae(e.attr('id'));
          if (
            ((a = je(e.actualNode)),
            (t = a.querySelector('label[for="' + n + '"]')),
            (r = t && iu(t, !0)),
            r)
          )
            return r;
        }
        return (t = Ke(e, 'label')), (r = t && dt(t, !0)), r || null;
      }
      var fa = Jm;
      function Qm(e) {
        return (e = N(e)), fa(e);
      }
      var Zm = Qm,
        eh = [
          {
            matches: [
              { nodeName: 'textarea' },
              {
                nodeName: 'input',
                properties: {
                  type: ['text', 'password', 'search', 'tel', 'email', 'url'],
                },
              },
            ],
            namingMethods: 'labelText',
          },
          {
            matches: {
              nodeName: 'input',
              properties: { type: ['button', 'submit', 'reset'] },
            },
            namingMethods: ['valueText', 'titleText', 'buttonDefaultText'],
          },
          {
            matches: { nodeName: 'input', properties: { type: 'image' } },
            namingMethods: [
              'altText',
              'valueText',
              'labelText',
              'titleText',
              'buttonDefaultText',
            ],
          },
          { matches: 'button', namingMethods: 'subtreeText' },
          { matches: 'fieldset', namingMethods: 'fieldsetLegendText' },
          { matches: 'OUTPUT', namingMethods: 'subtreeText' },
          {
            matches: [
              { nodeName: 'select' },
              {
                nodeName: 'input',
                properties: {
                  type: /^(?!text|password|search|tel|email|url|button|submit|reset)/,
                },
              },
            ],
            namingMethods: 'labelText',
          },
          { matches: 'summary', namingMethods: 'subtreeText' },
          { matches: 'figure', namingMethods: ['figureText', 'titleText'] },
          { matches: 'img', namingMethods: 'altText' },
          {
            matches: 'table',
            namingMethods: ['tableCaptionText', 'tableSummaryText'],
          },
          {
            matches: ['hr', 'br'],
            namingMethods: ['titleText', 'singleSpace'],
          },
        ],
        th = eh;
      function ou(e) {
        var t = Xe(e),
          r = [];
        return (
          e.children.forEach(function (a) {
            a.actualNode.nodeType === 3
              ? t && r.push(a)
              : (r = r.concat(ou(a)));
          }),
          r
        );
      }
      var rh = ou,
        ah = We(function (t) {
          var r = N(t),
            a = r.boundingClientRect,
            n = [],
            i = fn(r);
          return (
            t.childNodes.forEach(function (o) {
              if (!(o.nodeType !== 3 || J(o.nodeValue) === '')) {
                var l = nh(o);
                ih(l, a) || n.push.apply(n, re(oh(l, i)));
              }
            }),
            n.length ? n : [a]
          );
        }),
        jn = ah;
      function nh(e) {
        var t = k.createRange();
        return t.selectNodeContents(e), Array.from(t.getClientRects());
      }
      function ih(e, t) {
        return e.some(function (r) {
          var a = An(r);
          return !vn(a, t);
        });
      }
      function oh(e, t) {
        var r = [];
        return (
          e.forEach(function (a) {
            if (!(a.width < 1 || a.height < 1)) {
              var n = t.reduce(function (i, o) {
                return i && Dn(i, o.boundingClientRect);
              }, a);
              n && r.push(n);
            }
          }),
          r
        );
      }
      function lh(e) {
        Nt();
        var t = N(e),
          r = t._grid;
        if (!r) return [];
        var a = jn(e);
        return a.map(function (n) {
          return Fn(r, n);
        });
      }
      var Hn = lh,
        uh = [
          'checkbox',
          'img',
          'meter',
          'progressbar',
          'scrollbar',
          'radio',
          'slider',
          'spinbutton',
          'textbox',
        ];
      function sh(e) {
        var t = e instanceof Q ? e : N(e),
          r = v.commons.aria.getExplicitRole(t);
        if (r) return uh.indexOf(r) !== -1;
        switch (t.props.nodeName) {
          case 'img':
          case 'iframe':
          case 'object':
          case 'video':
          case 'audio':
          case 'canvas':
          case 'svg':
          case 'math':
          case 'button':
          case 'select':
          case 'textarea':
          case 'keygen':
          case 'progress':
          case 'meter':
            return !0;
          case 'input':
            return t.props.type !== 'hidden';
          default:
            return !1;
        }
      }
      var zn = sh,
        ch = [
          'head',
          'title',
          'template',
          'script',
          'style',
          'iframe',
          'object',
          'video',
          'audio',
          'noscript',
        ];
      function lu(e) {
        return ch.includes(e.props.nodeName)
          ? !1
          : e.children.some(function (t) {
              var r = t.props;
              return r.nodeType === 3 && r.nodeValue.trim();
            });
      }
      function uu(e, t, r) {
        return (
          lu(e) ||
          zn(e.actualNode) ||
          (!r && !!da(e)) ||
          (!t &&
            e.children.some(function (a) {
              return a.actualNode.nodeType === 1 && uu(a);
            }))
        );
      }
      var Rr = uu;
      function dh(e, t, r) {
        return (e = N(e)), Rr(e, t, r);
      }
      var pa = dh;
      function Un(e) {
        return typeof e.children > 'u' || lu(e)
          ? !0
          : e.props.nodeType === 1 && zn(e)
            ? !!v.commons.text.accessibleTextVirtual(e)
            : e.children.some(function (t) {
                return !t.attr('lang') && Un(t) && !xt(t);
              });
      }
      function fh(e) {
        var t = parseInt(e.getAttribute('tabindex'), 10);
        return t > -1 && Fe(e) && !Rn(e);
      }
      var su = fh;
      function cu(e, t) {
        var r = e instanceof Q ? e : N(e),
          a = e instanceof y.Node ? e : r == null ? void 0 : r.actualNode;
        return r
          ? (r._isHiddenWithCSS === void 0 && (r._isHiddenWithCSS = du(a, t)),
            r._isHiddenWithCSS)
          : du(a, t);
      }
      function du(e, t) {
        if (
          e.nodeType === 9 ||
          (e.nodeType === 11 && (e = e.host),
          ['STYLE', 'SCRIPT'].includes(e.nodeName.toUpperCase()))
        )
          return !1;
        var r = y.getComputedStyle(e, null);
        if (!r) throw new Error('Style does not exist for the given element.');
        var a = r.getPropertyValue('display');
        if (a === 'none') return !0;
        var n = ['hidden', 'collapse'],
          i = r.getPropertyValue('visibility');
        if ((n.includes(i) && !t) || (n.includes(i) && t && n.includes(t)))
          return !0;
        var o = Ne(e);
        return o && !n.includes(i) ? cu(o, i) : !1;
      }
      var ph = cu;
      function mh(e) {
        var t = e.doctype;
        return t === null
          ? !1
          : t.name === 'html' && !t.publicId && !t.systemId;
      }
      var fu = mh;
      function ft(e) {
        var t = e instanceof Q ? e : N(e);
        if (t.props.nodeType !== 1) return !1;
        var r = parseInt(t.attr('tabindex', 10));
        return r <= -1 ? !1 : Fe(t);
      }
      function hh(e) {
        var t;
        (e instanceof Q ||
          ((t = y) !== null &&
            t !== void 0 &&
            t.Node &&
            e instanceof y.Node)) &&
          (e = v.commons.aria.getRole(e));
        var r = ce.ariaRoles[e];
        return (r == null ? void 0 : r.type) || null;
      }
      var pt = hh;
      function pu(e, t) {
        t(e.actualNode) !== !1 &&
          e.children.forEach(function (r) {
            return pu(r, t);
          });
      }
      var vh = ['block', 'list-item', 'table', 'flex', 'grid', 'inline-block'];
      function mu(e) {
        var t = y.getComputedStyle(e).getPropertyValue('display');
        return vh.includes(t) || t.substr(0, 6) === 'table-';
      }
      function gh(e) {
        for (var t = Ne(e); t && !mu(t); ) t = Ne(t);
        return N(t);
      }
      function bh(e, t) {
        if (mu(e)) return !1;
        var r = gh(e),
          a = '',
          n = '',
          i = 0;
        return (
          pu(r, function (o) {
            if (i === 2) return !1;
            if ((o.nodeType === 3 && (a += o.nodeValue), o.nodeType === 1)) {
              var l = (o.nodeName || '').toUpperCase();
              if ((o === e && (i = 1), ['BR', 'HR'].includes(l)))
                i === 0 ? ((a = ''), (n = '')) : (i = 2);
              else {
                if (
                  o.style.display === 'none' ||
                  o.style.overflow === 'hidden' ||
                  !['', null, 'none'].includes(o.style.float) ||
                  !['', null, 'relative'].includes(o.style.position)
                )
                  return !1;
                if (pt(o) === 'widget') return (n += o.textContent), !1;
              }
            }
          }),
          (a = J(a)),
          t != null && t.noLengthCompare
            ? a.length !== 0
            : ((n = J(n)), a.length > n.length)
        );
      }
      var $n = bh;
      function yh(e) {
        e = e || {};
        var t = e.modalPercent || 0.75;
        if (oe.get('isModalOpen')) return oe.get('isModalOpen');
        var r = mt(v._tree[0], 'dialog, [role=dialog], [aria-modal=true]', Xe);
        if (r.length) return oe.set('isModalOpen', !0), !0;
        for (
          var a = na(y),
            n = a.width * t,
            i = a.height * t,
            o = (a.width - n) / 2,
            l = (a.height - i) / 2,
            u = [
              { x: o, y: l },
              { x: a.width - o, y: l },
              { x: a.width / 2, y: a.height / 2 },
              { x: o, y: a.height - l },
              { x: a.width - o, y: a.height - l },
            ],
            s = u.map(function (p) {
              return Array.from(k.elementsFromPoint(p.x, p.y));
            }),
            c = function (m) {
              var b = s[m].find(function (D) {
                var h = y.getComputedStyle(D);
                return (
                  parseInt(h.width, 10) >= n &&
                  parseInt(h.height, 10) >= i &&
                  h.getPropertyValue('pointer-events') !== 'none' &&
                  (h.position === 'absolute' || h.position === 'fixed')
                );
              });
              if (
                b &&
                s.every(function (D) {
                  return D.includes(b);
                })
              )
                return oe.set('isModalOpen', !0), { v: !0 };
            },
            d = 0;
          d < s.length;
          d++
        ) {
          var f = c(d);
          if (I(f) === 'object') return f.v;
        }
        oe.set('isModalOpen', void 0);
      }
      var Sr = yh;
      function hu(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2,
          r = e.ownerDocument.createRange();
        r.setStart(e, 0), r.setEnd(e, e.childNodes.length);
        var a = 0,
          n = 0,
          i = Ye(r.getClientRects()),
          o;
        try {
          for (i.s(); !(o = i.n()).done; ) {
            var l = o.value;
            if (!(l.height <= t))
              if (a > l.top + t) a = Math.max(a, l.bottom);
              else if (n === 0) (a = l.bottom), n++;
              else return !0;
          }
        } catch (u) {
          i.e(u);
        } finally {
          i.f();
        }
        return !1;
      }
      function Dh(e) {
        return e instanceof y.Node;
      }
      var wh = Dh,
        ma = {},
        _h = {
          set: function (t, r) {
            if (typeof t != 'string')
              throw new Error('Incomplete data: key must be a string');
            return r && (ma[t] = r), ma[t];
          },
          get: function (t) {
            return ma[t];
          },
          clear: function () {
            ma = {};
          },
        },
        qe = _h;
      function xh(e, t) {
        var r = ['IMG', 'CANVAS', 'OBJECT', 'IFRAME', 'VIDEO', 'SVG'],
          a = e.nodeName.toUpperCase();
        if (r.includes(a)) return qe.set('bgColor', 'imgNode'), !0;
        t = t || y.getComputedStyle(e);
        var n = t.getPropertyValue('background-image'),
          i = n !== 'none';
        if (i) {
          var o = /gradient/.test(n);
          qe.set('bgColor', o ? 'bgGradient' : 'bgImage');
        }
        return i;
      }
      var ha = xh,
        vu = /^#[0-9a-f]{3,8}$/i,
        gu = /^((?:rgb|hsl)a?)\s*\(([^\)]*)\)/i,
        Eh = (function () {
          function e(t, r, a) {
            var n =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : 1;
            Ut(this, e),
              (this.red = t),
              (this.green = r),
              (this.blue = a),
              (this.alpha = n);
          }
          return (
            $t(e, [
              {
                key: 'toHexString',
                value: function () {
                  var r = Math.round(this.red).toString(16),
                    a = Math.round(this.green).toString(16),
                    n = Math.round(this.blue).toString(16);
                  return (
                    '#' +
                    (this.red > 15.5 ? r : '0' + r) +
                    (this.green > 15.5 ? a : '0' + a) +
                    (this.blue > 15.5 ? n : '0' + n)
                  );
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  var r = this.red,
                    a = this.green,
                    n = this.blue,
                    i = this.alpha;
                  return { red: r, green: a, blue: n, alpha: i };
                },
              },
              {
                key: 'parseString',
                value: function (r) {
                  if (ce.cssColors[r] || r === 'transparent') {
                    var a = ce.cssColors[r] || [0, 0, 0],
                      n = ve(a, 3),
                      i = n[0],
                      o = n[1],
                      l = n[2];
                    return (
                      (this.red = i),
                      (this.green = o),
                      (this.blue = l),
                      (this.alpha = r === 'transparent' ? 0 : 1),
                      this
                    );
                  }
                  if (r.match(gu)) return this.parseColorFnString(r), this;
                  if (r.match(vu)) return this.parseHexString(r), this;
                  throw new Error('Unable to parse color "'.concat(r, '"'));
                },
              },
              {
                key: 'parseRgbString',
                value: function (r) {
                  if (r === 'transparent') {
                    (this.red = 0),
                      (this.green = 0),
                      (this.blue = 0),
                      (this.alpha = 0);
                    return;
                  }
                  this.parseColorFnString(r);
                },
              },
              {
                key: 'parseHexString',
                value: function (r) {
                  if (!(!r.match(vu) || [6, 8].includes(r.length))) {
                    if (((r = r.replace('#', '')), r.length < 6)) {
                      var a = r,
                        n = ve(a, 4),
                        i = n[0],
                        o = n[1],
                        l = n[2],
                        u = n[3];
                      (r = i + i + o + o + l + l), u && (r += u + u);
                    }
                    var s = r.match(/.{1,2}/g);
                    (this.red = parseInt(s[0], 16)),
                      (this.green = parseInt(s[1], 16)),
                      (this.blue = parseInt(s[2], 16)),
                      s[3]
                        ? (this.alpha = parseInt(s[3], 16) / 255)
                        : (this.alpha = 1);
                  }
                },
              },
              {
                key: 'parseColorFnString',
                value: function (r) {
                  var a = r.match(gu) || [],
                    n = ve(a, 3),
                    i = n[1],
                    o = n[2];
                  if (!(!i || !o)) {
                    var l = o
                        .split(/\s*[,\/\s]\s*/)
                        .map(function (s) {
                          return s.replace(',', '').trim();
                        })
                        .filter(function (s) {
                          return s !== '';
                        }),
                      u = l.map(function (s, c) {
                        return Ah(i, s, c);
                      });
                    i.substr(0, 3) === 'hsl' && (u = Fh(u)),
                      (this.red = u[0]),
                      (this.green = u[1]),
                      (this.blue = u[2]),
                      (this.alpha = typeof u[3] == 'number' ? u[3] : 1);
                  }
                },
              },
              {
                key: 'getRelativeLuminance',
                value: function () {
                  var r = this.red / 255,
                    a = this.green / 255,
                    n = this.blue / 255,
                    i =
                      r <= 0.03928
                        ? r / 12.92
                        : Math.pow((r + 0.055) / 1.055, 2.4),
                    o =
                      a <= 0.03928
                        ? a / 12.92
                        : Math.pow((a + 0.055) / 1.055, 2.4),
                    l =
                      n <= 0.03928
                        ? n / 12.92
                        : Math.pow((n + 0.055) / 1.055, 2.4);
                  return 0.2126 * i + 0.7152 * o + 0.0722 * l;
                },
              },
            ]),
            e
          );
        })(),
        Te = Eh;
      function Ah(e, t, r) {
        if (/%$/.test(t))
          return r === 3 ? parseFloat(t) / 100 : (parseFloat(t) * 255) / 100;
        if (e[r] === 'h') {
          if (/turn$/.test(t)) return parseFloat(t) * 360;
          if (/rad$/.test(t)) return parseFloat(t) * 57.3;
        }
        return parseFloat(t);
      }
      function Fh(e) {
        var t = ve(e, 4),
          r = t[0],
          a = t[1],
          n = t[2],
          i = t[3];
        (a /= 255), (n /= 255);
        var o = (1 - Math.abs(2 * n - 1)) * a,
          l = o * (1 - Math.abs(((r / 60) % 2) - 1)),
          u = n - o / 2,
          s;
        return (
          r < 60
            ? (s = [o, l, 0])
            : r < 120
              ? (s = [l, o, 0])
              : r < 180
                ? (s = [0, o, l])
                : r < 240
                  ? (s = [0, l, o])
                  : r < 300
                    ? (s = [l, 0, o])
                    : (s = [o, 0, l]),
          s
            .map(function (c) {
              return Math.round((c + u) * 255);
            })
            .concat(i)
        );
      }
      function Ch(e) {
        var t = new Te();
        if (
          (t.parseString(e.getPropertyValue('background-color')), t.alpha !== 0)
        ) {
          var r = e.getPropertyValue('opacity');
          t.alpha = t.alpha * r;
        }
        return t;
      }
      var Ht = Ch;
      function Th(e) {
        var t = y.getComputedStyle(e);
        return ha(e, t) || Ht(t).alpha === 1;
      }
      var kh = Th;
      function Wn(e) {
        if (!e.href) return !1;
        var t = oe.get('firstPageLink', Rh);
        return t
          ? e.compareDocumentPosition(t.actualNode) ===
              e.DOCUMENT_POSITION_FOLLOWING
          : !0;
      }
      function Rh() {
        var e;
        return (
          y.location.origin
            ? (e = Ze(v._tree, 'a[href]:not([href^="javascript:"])').find(
                function (t) {
                  return !_n(t.actualNode);
                },
              ))
            : (e = Ze(
                v._tree,
                'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])',
              )[0]),
          e || null
        );
      }
      var Sh =
          /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,
        Oh = /(\w+)\((\d+)/;
      function Ih(e) {
        var t = e.getPropertyValue('clip').match(Sh),
          r = e.getPropertyValue('clip-path').match(Oh);
        if (t && t.length === 5) {
          var a = e.getPropertyValue('position');
          if (['fixed', 'absolute'].includes(a))
            return t[3] - t[1] <= 0 && t[2] - t[4] <= 0;
        }
        if (r) {
          var n = r[1],
            i = parseInt(r[2], 10);
          switch (n) {
            case 'inset':
              return i >= 50;
            case 'circle':
              return i === 0;
          }
        }
        return !1;
      }
      function Ph(e, t, r) {
        var a = er(e, 'map');
        if (!a) return !1;
        var n = a.getAttribute('name');
        if (!n) return !1;
        var i = je(e);
        if (!i || i.nodeType !== 9) return !1;
        var o = Ze(v._tree, 'img[usemap="#'.concat(Ae(n), '"]'));
        return !o || !o.length
          ? !1
          : o.some(function (l) {
              var u = l.actualNode;
              return va(u, t, r);
            });
      }
      function va(e, t, r) {
        var a;
        if (!e)
          throw new TypeError(
            'Cannot determine if element is visible for non-DOM nodes',
          );
        var n = e instanceof Q ? e : N(e);
        e = n ? n.actualNode : e;
        var i = '_isVisible' + (t ? 'ScreenReader' : ''),
          o = (a = y.Node) !== null && a !== void 0 ? a : {},
          l = o.DOCUMENT_NODE,
          u = o.DOCUMENT_FRAGMENT_NODE,
          s = n ? n.props.nodeType : e.nodeType,
          c = n ? n.props.nodeName : e.nodeName.toLowerCase();
        if (n && typeof n[i] < 'u') return n[i];
        if (s === l) return !0;
        if (['style', 'script', 'noscript', 'template'].includes(c)) return !1;
        if ((e && s === u && (e = e.host), t)) {
          var d = n ? n.attr('aria-hidden') : e.getAttribute('aria-hidden');
          if (d === 'true') return !1;
        }
        if (!e) {
          var f = n.parent,
            p = !0;
          return f && (p = va(f, t, !0)), n && (n[i] = p), p;
        }
        var m = y.getComputedStyle(e, null);
        if (m === null) return !1;
        if (c === 'area') return Ph(e, t, r);
        if (m.getPropertyValue('display') === 'none') return !1;
        var b = parseInt(m.getPropertyValue('height')),
          D = parseInt(m.getPropertyValue('width')),
          h = yt(e),
          g = h && b === 0,
          x = h && D === 0,
          E =
            m.getPropertyValue('position') === 'absolute' &&
            (b < 2 || D < 2) &&
            m.getPropertyValue('overflow') === 'hidden';
        if (
          (!t &&
            (Ih(m) || m.getPropertyValue('opacity') === '0' || g || x || E)) ||
          (!r &&
            (m.getPropertyValue('visibility') === 'hidden' || (!t && ia(e))))
        )
          return !1;
        var C = e.assignedSlot ? e.assignedSlot : e.parentNode,
          P = !1;
        return C && (P = va(C, t, !0)), n && (n[i] = P), P;
      }
      var Mh = va;
      function Nh(e, t) {
        for (
          var r = ['fixed', 'sticky'], a = [], n = !1, i = 0;
          i < e.length;
          ++i
        ) {
          var o = e[i];
          o === t && (n = !0);
          var l = y.getComputedStyle(o);
          if (!n && r.indexOf(l.position) !== -1) {
            a = [];
            continue;
          }
          a.push(o);
        }
        return a;
      }
      var bu = Nh;
      function yu(e, t) {
        var r = Du(t);
        do {
          var a = Du(e);
          if (a === r || a === t) return qh(e, t);
          e = a;
        } while (e);
        return !1;
      }
      function Du(e) {
        for (var t = N(e), r = t.parent; r; ) {
          if (yt(r.actualNode)) return r.actualNode;
          r = r.parent;
        }
      }
      function qh(e, t) {
        var r = y.getComputedStyle(t),
          a = r.getPropertyValue('overflow');
        if (r.getPropertyValue('display') === 'inline') return !0;
        var n = Array.from(e.getClientRects()),
          i = t.getBoundingClientRect(),
          o = { left: i.left, top: i.top, width: i.width, height: i.height };
        return (
          (['scroll', 'auto'].includes(a) || t instanceof y.HTMLHtmlElement) &&
            ((o.width = t.scrollWidth), (o.height = t.scrollHeight)),
          n.length === 1 &&
            a === 'hidden' &&
            r.getPropertyValue('white-space') === 'nowrap' &&
            (n[0] = o),
          n.some(function (l) {
            return !(
              Math.ceil(l.left) < Math.floor(o.left) ||
              Math.ceil(l.top) < Math.floor(o.top) ||
              Math.floor(l.left + l.width) > Math.ceil(o.left + o.width) ||
              Math.floor(l.top + l.height) > Math.ceil(o.top + o.height)
            );
          })
        );
      }
      function wu(e, t) {
        var r =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : k,
          a =
            arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        if (a > 999) throw new Error('Infinite loop detected');
        return Array.from(r.elementsFromPoint(e, t) || [])
          .filter(function (n) {
            return je(n) === r;
          })
          .reduce(function (n, i) {
            if (aa(i)) {
              var o = wu(e, t, i.shadowRoot, a + 1);
              (n = n.concat(o)), n.length && yu(n[0], i) && n.push(i);
            } else n.push(i);
            return n;
          }, []);
      }
      var Bh = wu;
      function Lh(e, t) {
        if (e.hasAttribute(t)) {
          var r = e.nodeName.toUpperCase(),
            a = e;
          (!['A', 'AREA'].includes(r) || e.ownerSVGElement) &&
            ((a = k.createElement('a')), (a.href = e.getAttribute(t)));
          var n = ['https:', 'ftps:'].includes(a.protocol)
              ? a.protocol.replace(/s:$/, ':')
              : a.protocol,
            i = /^\//.test(a.pathname) ? a.pathname : '/'.concat(a.pathname),
            o = jh(i),
            l = o.pathname,
            u = o.filename;
          return {
            protocol: n,
            hostname: a.hostname,
            port: Vh(a.port),
            pathname: /\/$/.test(l) ? l : ''.concat(l, '/'),
            search: Hh(a.search),
            hash: zh(a.hash),
            filename: u,
          };
        }
      }
      function Vh(e) {
        var t = ['443', '80'];
        return t.includes(e) ? '' : e;
      }
      function jh(e) {
        var t = e.split('/').pop();
        return !t || t.indexOf('.') === -1
          ? { pathname: e, filename: '' }
          : { pathname: e.replace(t, ''), filename: /index./.test(t) ? '' : t };
      }
      function Hh(e) {
        var t = {};
        if (!e || !e.length) return t;
        var r = e.substring(1).split('&');
        if (!r || !r.length) return t;
        for (var a = 0; a < r.length; a++) {
          var n = r[a],
            i = n.split('='),
            o = ve(i, 2),
            l = o[0],
            u = o[1],
            s = u === void 0 ? '' : u;
          t[decodeURIComponent(l)] = decodeURIComponent(s);
        }
        return t;
      }
      function zh(e) {
        if (!e) return '';
        var t = /#!?\/?/g,
          r = e.match(t);
        if (!r) return '';
        var a = ve(r, 1),
          n = a[0];
        return n === '#' ? '' : e;
      }
      var Uh = Lh;
      function $h(e, t) {
        var r = t.getBoundingClientRect(),
          a = r.top,
          n = r.left,
          i = {
            top: a - t.scrollTop,
            bottom: a - t.scrollTop + t.scrollHeight,
            left: n - t.scrollLeft,
            right: n - t.scrollLeft + t.scrollWidth,
          };
        if (
          (e.left > i.right && e.left > r.right) ||
          (e.top > i.bottom && e.top > r.bottom) ||
          (e.right < i.left && e.right < r.left) ||
          (e.bottom < i.top && e.bottom < r.top)
        )
          return !1;
        var o = y.getComputedStyle(t);
        return e.left > r.right || e.top > r.bottom
          ? o.overflow === 'scroll' ||
              o.overflow === 'auto' ||
              t instanceof y.HTMLBodyElement ||
              t instanceof y.HTMLHtmlElement
          : !0;
      }
      var Gn = $h,
        Yn,
        _u = 0,
        Wh = (function (e) {
          Bi(r, e);
          var t = Li(r);
          function r(a, n, i) {
            var o;
            if (
              (Ut(this, r),
              (o = t.call(this)),
              (o.shadowId = i),
              (o.children = []),
              (o.actualNode = a),
              (o.parent = n),
              n || (_u = 0),
              (o.nodeIndex = _u++),
              (o._isHidden = null),
              (o._cache = {}),
              typeof Yn > 'u' && (Yn = Gr(a.ownerDocument)),
              (o._isXHTML = Yn),
              a.nodeName.toLowerCase() === 'input')
            ) {
              var l = a.getAttribute('type');
              (l = o._isXHTML ? l : (l || '').toLowerCase()),
                _a().includes(l) || (l = 'text'),
                (o._type = l);
            }
            return oe.get('nodeMap') && oe.get('nodeMap').set(a, Vi(o)), o;
          }
          return (
            $t(r, [
              {
                key: 'props',
                get: function () {
                  if (!this._cache.hasOwnProperty('props')) {
                    var n = this.actualNode,
                      i = n.nodeType,
                      o = n.nodeName,
                      l = n.id,
                      u = n.multiple,
                      s = n.nodeValue,
                      c = n.value,
                      d = n.selected;
                    this._cache.props = {
                      nodeType: i,
                      nodeName: this._isXHTML ? o : o.toLowerCase(),
                      id: l,
                      type: this._type,
                      multiple: u,
                      nodeValue: s,
                      value: c,
                      selected: d,
                    };
                  }
                  return this._cache.props;
                },
              },
              {
                key: 'attr',
                value: function (n) {
                  return typeof this.actualNode.getAttribute != 'function'
                    ? null
                    : this.actualNode.getAttribute(n);
                },
              },
              {
                key: 'hasAttr',
                value: function (n) {
                  return typeof this.actualNode.hasAttribute != 'function'
                    ? !1
                    : this.actualNode.hasAttribute(n);
                },
              },
              {
                key: 'attrNames',
                get: function () {
                  if (!this._cache.hasOwnProperty('attrNames')) {
                    var n;
                    this.actualNode.attributes instanceof y.NamedNodeMap
                      ? (n = this.actualNode.attributes)
                      : (n = this.actualNode.cloneNode(!1).attributes),
                      (this._cache.attrNames = Array.from(n).map(function (i) {
                        return i.name;
                      }));
                  }
                  return this._cache.attrNames;
                },
              },
              {
                key: 'getComputedStylePropertyValue',
                value: function (n) {
                  var i = 'computedStyle_' + n;
                  return (
                    this._cache.hasOwnProperty(i) ||
                      (this._cache.hasOwnProperty('computedStyle') ||
                        (this._cache.computedStyle = y.getComputedStyle(
                          this.actualNode,
                        )),
                      (this._cache[i] =
                        this._cache.computedStyle.getPropertyValue(n))),
                    this._cache[i]
                  );
                },
              },
              {
                key: 'isFocusable',
                get: function () {
                  return (
                    this._cache.hasOwnProperty('isFocusable') ||
                      (this._cache.isFocusable = Fe(this.actualNode)),
                    this._cache.isFocusable
                  );
                },
              },
              {
                key: 'tabbableElements',
                get: function () {
                  return (
                    this._cache.hasOwnProperty('tabbableElements') ||
                      (this._cache.tabbableElements = wl(this)),
                    this._cache.tabbableElements
                  );
                },
              },
              {
                key: 'clientRects',
                get: function () {
                  return (
                    this._cache.hasOwnProperty('clientRects') ||
                      (this._cache.clientRects = Array.from(
                        this.actualNode.getClientRects(),
                      ).filter(function (n) {
                        return n.width > 0;
                      })),
                    this._cache.clientRects
                  );
                },
              },
              {
                key: 'boundingClientRect',
                get: function () {
                  return (
                    this._cache.hasOwnProperty('boundingClientRect') ||
                      (this._cache.boundingClientRect =
                        this.actualNode.getBoundingClientRect()),
                    this._cache.boundingClientRect
                  );
                },
              },
            ]),
            r
          );
        })(Q),
        Kn = Wh;
      function Gh(e) {
        return (e || '')
          .trim()
          .replace(/\s{2,}/g, ' ')
          .split(' ');
      }
      var He = Gh,
        ir = ' [idsMap]';
      function xu(e, t, r) {
        var a = e[0]._selectorMap;
        if (a) {
          for (var n = e[0].shadowId, i = 0; i < t.length; i++)
            if (
              t[i].length > 1 &&
              t[i].some(function (u) {
                return Eu(u);
              })
            )
              return;
          var o = new Set();
          t.forEach(function (u) {
            var s,
              c = Yh(u, a, n);
            c == null ||
              (s = c.nodes) === null ||
              s === void 0 ||
              s.forEach(function (d) {
                (c.isComplexSelector && !Kt(d, u)) || o.add(d);
              });
          });
          var l = [];
          return (
            o.forEach(function (u) {
              return l.push(u);
            }),
            r && (l = l.filter(r)),
            l.sort(function (u, s) {
              return u.nodeIndex - s.nodeIndex;
            })
          );
        }
      }
      function Yh(e, t, r) {
        var a = e[e.length - 1],
          n = null,
          i = e.length > 1 || !!a.pseudos || !!a.classes;
        if (Eu(a)) n = t['*'];
        else {
          if (a.id) {
            var o;
            if (
              !t[ir] ||
              !((o = t[ir][a.id]) !== null && o !== void 0 && o.length)
            )
              return;
            n = t[ir][a.id].filter(function (b) {
              return b.shadowId === r;
            });
          }
          if (a.tag && a.tag !== '*') {
            var l;
            if (!((l = t[a.tag]) !== null && l !== void 0 && l.length)) return;
            var u = t[a.tag];
            n = n ? Xn(u, n) : u;
          }
          if (a.classes) {
            var s;
            if (!((s = t['[class]']) !== null && s !== void 0 && s.length))
              return;
            var c = t['[class]'];
            n = n ? Xn(c, n) : c;
          }
          if (a.attributes)
            for (var d = 0; d < a.attributes.length; d++) {
              var f,
                p = a.attributes[d];
              if (
                (p.type === 'attrValue' && (i = !0),
                !(
                  (f = t['['.concat(p.key, ']')]) !== null &&
                  f !== void 0 &&
                  f.length
                ))
              )
                return;
              var m = t['['.concat(p.key, ']')];
              n = n ? Xn(m, n) : m;
            }
        }
        return { nodes: n, isComplexSelector: i };
      }
      function Eu(e) {
        return e.tag === '*' && !e.attributes && !e.id && !e.classes;
      }
      function Xn(e, t) {
        return e.filter(function (r) {
          return t.includes(r);
        });
      }
      function ga(e, t, r) {
        (r[e] = r[e] || []), r[e].push(t);
      }
      function Au(e, t) {
        e.props.nodeType === 1 &&
          (ga(e.props.nodeName, e, t),
          ga('*', e, t),
          e.attrNames.forEach(function (r) {
            r === 'id' &&
              ((t[ir] = t[ir] || {}),
              He(e.attr(r)).forEach(function (a) {
                ga(a, e, t[ir]);
              })),
              ga('['.concat(r, ']'), e, t);
          }));
      }
      var Jn;
      function Kh(e) {
        var t = [];
        for (e = e.firstChild; e; ) t.push(e), (e = e.nextSibling);
        return t;
      }
      function Qn(e, t, r) {
        var a = new Kn(e, t, r);
        return Au(a, oe.get('selectorMap')), a;
      }
      function Fu(e, t, r) {
        var a, n, i;
        function o(l, u, s) {
          var c = Fu(u, t, s);
          return c && (l = l.concat(c)), l;
        }
        return (
          e.documentElement && (e = e.documentElement),
          (i = e.nodeName.toLowerCase()),
          aa(e)
            ? ((Jn = !0),
              (a = Qn(e, r, t)),
              (t = 'a' + Math.random().toString().substring(2)),
              (n = Array.from(e.shadowRoot.childNodes)),
              (a.children = n.reduce(function (l, u) {
                return o(l, u, a);
              }, [])),
              [a])
            : i === 'content' && typeof e.getDistributedNodes == 'function'
              ? ((n = Array.from(e.getDistributedNodes())),
                n.reduce(function (l, u) {
                  return o(l, u, r);
                }, []))
              : i === 'slot' && typeof e.assignedNodes == 'function'
                ? ((n = Array.from(e.assignedNodes())),
                  n.length || (n = Kh(e)),
                  y.getComputedStyle(e),
                  n.reduce(function (l, u) {
                    return o(l, u, r);
                  }, []))
                : e.nodeType === 1
                  ? ((a = Qn(e, r, t)),
                    (n = Array.from(e.childNodes)),
                    (a.children = n.reduce(function (l, u) {
                      return o(l, u, a);
                    }, [])),
                    [a])
                  : e.nodeType === 3
                    ? [Qn(e, r)]
                    : void 0
        );
      }
      function Xh() {
        var e =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : k.documentElement,
          t = arguments.length > 1 ? arguments[1] : void 0;
        Jn = !1;
        var r = {};
        oe.set('nodeMap', new WeakMap()), oe.set('selectorMap', r);
        var a = Fu(e, t, null);
        return (a[0]._selectorMap = r), (a[0]._hasShadowRoot = Jn), a;
      }
      var Zn = Xh;
      function Jh(e) {
        return e ? e.trim().split('-')[0].toLowerCase() : '';
      }
      var zt = Jh;
      function Qh(e) {
        var t = {};
        return (
          (t.none = e.none.concat(e.all)),
          (t.any = e.any),
          Object.keys(t)
            .map(function (r) {
              if (t[r].length) {
                var a = v._audit.data.failureSummaries[r];
                if (a && typeof a.failureMessage == 'function')
                  return a.failureMessage(
                    t[r].map(function (n) {
                      return n.message || '';
                    }),
                  );
              }
            })
            .filter(function (r) {
              return r !== void 0;
            }).join(`

`)
        );
      }
      var ei = Qh;
      function ti() {
        var e = v._audit.data.incompleteFallbackMessage;
        return (
          typeof e == 'function' && (e = e()), typeof e != 'string' ? '' : e
        );
      }
      function Zh(e, t) {
        ['any', 'all', 'none'].forEach(function (r) {
          Array.isArray(e[r]) &&
            e[r]
              .filter(function (a) {
                return Array.isArray(a.relatedNodes);
              })
              .forEach(function (a) {
                a.relatedNodes = a.relatedNodes.map(function (n) {
                  var i,
                    o = {
                      html:
                        (i = n == null ? void 0 : n.source) !== null &&
                        i !== void 0
                          ? i
                          : 'Undefined',
                    };
                  if (t.elementRef && !(n != null && n.fromFrame)) {
                    var l;
                    o.element =
                      (l = n == null ? void 0 : n.element) !== null &&
                      l !== void 0
                        ? l
                        : null;
                  }
                  if (t.selectors !== !1 || (n != null && n.fromFrame)) {
                    var u;
                    o.target =
                      (u = n == null ? void 0 : n.selector) !== null &&
                      u !== void 0
                        ? u
                        : [':root'];
                  }
                  if (t.ancestry) {
                    var s;
                    o.ancestry =
                      (s = n == null ? void 0 : n.ancestry) !== null &&
                      s !== void 0
                        ? s
                        : [':root'];
                  }
                  if (t.xpath) {
                    var c;
                    o.xpath =
                      (c = n == null ? void 0 : n.xpath) !== null &&
                      c !== void 0
                        ? c
                        : ['/'];
                  }
                  return o;
                });
              });
        });
      }
      var Cu = Z.resultGroups;
      function ev(e, t) {
        var r = v.utils.aggregateResult(e);
        return (
          Cu.forEach(function (a) {
            t.resultTypes &&
              !t.resultTypes.includes(a) &&
              (r[a] || []).forEach(function (n) {
                Array.isArray(n.nodes) &&
                  n.nodes.length > 0 &&
                  (n.nodes = [n.nodes[0]]);
              }),
              (r[a] = (r[a] || []).map(function (n) {
                return (
                  (n = Object.assign({}, n)),
                  Array.isArray(n.nodes) &&
                    n.nodes.length > 0 &&
                    (n.nodes = n.nodes.map(function (i) {
                      return (
                        I(i.node) === 'object' &&
                          ((i.html = i.node.source),
                          t.elementRef &&
                            !i.node.fromFrame &&
                            (i.element = i.node.element),
                          (t.selectors !== !1 || i.node.fromFrame) &&
                            (i.target = i.node.selector),
                          t.ancestry && (i.ancestry = i.node.ancestry),
                          t.xpath && (i.xpath = i.node.xpath)),
                        delete i.result,
                        delete i.node,
                        Zh(i, t),
                        i
                      );
                    })),
                  Cu.forEach(function (i) {
                    return delete n[i];
                  }),
                  delete n.pageLevel,
                  delete n.result,
                  n
                );
              }));
          }),
          r
        );
      }
      var Or = ev,
        tv = /\$\{\s?data\s?\}/g;
      function ba(e, t) {
        if (typeof t == 'string') return e.replace(tv, t);
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var a = new RegExp('\\${\\s?data\\.' + r + '\\s?}', 'g'),
              n = typeof t[r] > 'u' ? '' : String(t[r]);
            e = e.replace(a, n);
          }
        return e;
      }
      function Tu(e, t) {
        if (e) {
          if (Array.isArray(t)) {
            if (
              ((t.values = t.join(', ')),
              typeof e.singular == 'string' && typeof e.plural == 'string')
            ) {
              var r = t.length === 1 ? e.singular : e.plural;
              return ba(r, t);
            }
            return ba(e, t);
          }
          if (typeof e == 'string') return ba(e, t);
          if (typeof t == 'string') {
            var a = e[t];
            return ba(a, t);
          }
          var n = e.default || ti();
          return (
            t && t.messageKey && e[t.messageKey] && (n = e[t.messageKey]),
            Tu(n, t)
          );
        }
      }
      var ri = Tu;
      function rv(e, t, r) {
        var a = v._audit.data.checks[e];
        if (!a)
          throw new Error(
            'Cannot get message for unknown check: '.concat(e, '.'),
          );
        if (!a.messages[t])
          throw new Error(
            'Check "'.concat(e, '"" does not have a "').concat(t, '" message.'),
          );
        return ri(a.messages[t], r);
      }
      var av = rv;
      function nv(e, t, r) {
        var a = (((r.rules && r.rules[t]) || {}).checks || {})[e.id],
          n = (r.checks || {})[e.id],
          i = e.enabled,
          o = e.options;
        return (
          n &&
            (n.hasOwnProperty('enabled') && (i = n.enabled),
            n.hasOwnProperty('options') && (o = n.options)),
          a &&
            (a.hasOwnProperty('enabled') && (i = a.enabled),
            a.hasOwnProperty('options') && (o = a.options)),
          { enabled: i, options: o, absolutePaths: r.absolutePaths }
        );
      }
      var ya = nv;
      function At() {
        var e,
          t =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : null,
          r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y;
        return t && I(t) === 'object'
          ? t
          : I(r) !== 'object'
            ? {}
            : {
                testEngine: { name: 'axe-core', version: v.version },
                testRunner: { name: v._audit.brand },
                testEnvironment: iv(r),
                timestamp: new Date().toISOString(),
                url:
                  (e = r.location) === null || e === void 0 ? void 0 : e.href,
              };
      }
      function iv(e) {
        if (!e.navigator || I(e.navigator) !== 'object') return {};
        var t = e.navigator,
          r = e.innerHeight,
          a = e.innerWidth,
          n = ov(e) || {},
          i = n.angle,
          o = n.type;
        return {
          userAgent: t.userAgent,
          windowWidth: a,
          windowHeight: r,
          orientationAngle: i,
          orientationType: o,
        };
      }
      function ov(e) {
        var t = e.screen;
        return t.orientation || t.msOrientation || t.mozOrientation;
      }
      function ku(e, t) {
        var r = t.focusable,
          a = t.page;
        return {
          node: e,
          include: [],
          exclude: [],
          initiator: !1,
          focusable: r && lv(e),
          size: uv(e),
          page: a,
        };
      }
      function lv(e) {
        var t = e.getAttribute('tabindex');
        if (!t) return !0;
        var r = parseInt(t, 10);
        return isNaN(r) || r >= 0;
      }
      function uv(e) {
        var t = parseInt(e.getAttribute('width'), 10),
          r = parseInt(e.getAttribute('height'), 10);
        if (isNaN(t) || isNaN(r)) {
          var a = e.getBoundingClientRect();
          (t = isNaN(t) ? a.width : t), (r = isNaN(r) ? a.height : r);
        }
        return { width: t, height: r };
      }
      function sv(e) {
        if (Su(e)) {
          var t =
            ' must be used inside include or exclude. It should not be on the same object.';
          Ft(!bt(e, 'fromFrames'), 'fromFrames' + t),
            Ft(!bt(e, 'fromShadowDom'), 'fromShadowDom' + t);
        } else if (ai(e)) e = { include: e, exclude: [] };
        else return { include: [k], exclude: [] };
        var r = Ru(e.include);
        r.length === 0 && r.push(k);
        var a = Ru(e.exclude);
        return { include: r, exclude: a };
      }
      function cv(e) {
        return Su(e) || ai(e);
      }
      function Ru() {
        var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
          t = [];
        Iu(e) || (e = [e]);
        for (var r = 0; r < e.length; r++) {
          var a = dv(e[r]);
          a && t.push(a);
        }
        return t;
      }
      function dv(e) {
        return e instanceof y.Node
          ? e
          : typeof e == 'string'
            ? [e]
            : (Ou(e) ? (pv(e), (e = e.fromFrames)) : ni(e) && (e = [e]), fv(e));
      }
      function fv(e) {
        if (Array.isArray(e)) {
          var t = [],
            r = Ye(e),
            a;
          try {
            for (r.s(); !(a = r.n()).done; ) {
              var n = a.value;
              if (
                (ni(n) && (mv(n), (n = n.fromShadowDom)),
                typeof n != 'string' && !hv(n))
              )
                return;
              t.push(n);
            }
          } catch (i) {
            r.e(i);
          } finally {
            r.f();
          }
          return t;
        }
      }
      function Su(e) {
        return ['include', 'exclude'].some(function (t) {
          return bt(e, t) && ai(e[t]);
        });
      }
      function ai(e) {
        return (
          typeof e == 'string' || e instanceof y.Node || Ou(e) || ni(e) || Iu(e)
        );
      }
      function Ou(e) {
        return bt(e, 'fromFrames');
      }
      function ni(e) {
        return bt(e, 'fromShadowDom');
      }
      function pv(e) {
        Ft(Array.isArray(e.fromFrames), 'fromFrames property must be an array'),
          Ft(
            e.fromFrames.every(function (t) {
              return !bt(t, 'fromFrames');
            }),
            'Invalid context; fromFrames selector must be appended, rather than nested',
          ),
          Ft(
            !bt(e, 'fromShadowDom'),
            'fromFrames and fromShadowDom cannot be used on the same object',
          );
      }
      function mv(e) {
        Ft(
          Array.isArray(e.fromShadowDom),
          'fromShadowDom property must be an array',
        ),
          Ft(
            e.fromShadowDom.every(function (t) {
              return !bt(t, 'fromFrames');
            }),
            'shadow selector must be inside fromFrame instead',
          ),
          Ft(
            e.fromShadowDom.every(function (t) {
              return !bt(t, 'fromShadowDom');
            }),
            'fromShadowDom selector must be appended, rather than nested',
          );
      }
      function hv(e) {
        return (
          Array.isArray(e) &&
          e.every(function (t) {
            return typeof t == 'string';
          })
        );
      }
      function Iu(e) {
        return (
          e &&
          I(e) === 'object' &&
          typeof e.length == 'number' &&
          !(e instanceof y.Node)
        );
      }
      function Ft(e, t) {
        fe(
          e,
          'Invalid context; '.concat(
            t,
            `
See: https://github.com/dequelabs/axe-core/blob/master/doc/context.md`,
          ),
        );
      }
      function bt(e, t) {
        return !e || I(e) !== 'object'
          ? !1
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function Pu(e, t) {
        for (var r = [], a = 0, n = e[t].length; a < n; a++) {
          var i = e[t][a];
          if (i instanceof y.Node)
            i.documentElement instanceof y.Node
              ? r.push(e.flatTree[0])
              : r.push(N(i));
          else if (i && i.length)
            if (i.length > 1) vv(e, t, i);
            else {
              var o = pi(i[0]);
              r.push.apply(
                r,
                re(
                  o.map(function (l) {
                    return N(l);
                  }),
                ),
              );
            }
        }
        return r.filter(function (l) {
          return l;
        });
      }
      function vv(e, t, r) {
        e.frames = e.frames || [];
        var a = r.shift(),
          n = pi(a);
        n.forEach(function (i) {
          var o = e.frames.find(function (l) {
            return l.node === i;
          });
          o || ((o = ku(i, e)), e.frames.push(o)), o[t].push(r);
        });
      }
      function Da(e, t) {
        var r,
          a,
          n,
          i,
          o = this;
        (e = vt(e)),
          (this.frames = []),
          (this.page =
            typeof ((r = e) === null || r === void 0 ? void 0 : r.page) ==
            'boolean'
              ? e.page
              : void 0),
          (this.initiator =
            typeof ((a = e) === null || a === void 0 ? void 0 : a.initiator) ==
            'boolean'
              ? e.initiator
              : !0),
          (this.focusable =
            typeof ((n = e) === null || n === void 0 ? void 0 : n.focusable) ==
            'boolean'
              ? e.focusable
              : !0),
          (this.size =
            I((i = e) === null || i === void 0 ? void 0 : i.size) === 'object'
              ? e.size
              : {}),
          (e = sv(e)),
          (this.flatTree = t ?? Zn(Dv(e))),
          (this.exclude = e.exclude),
          (this.include = e.include),
          (this.include = Pu(this, 'include')),
          (this.exclude = Pu(this, 'exclude')),
          fi('frame, iframe', this).forEach(function (l) {
            oi(l, o) && gv(o, l.actualNode);
          }),
          typeof this.page > 'u' &&
            ((this.page = bv(this)),
            this.frames.forEach(function (l) {
              l.page = o.page;
            })),
          yv(this),
          Array.isArray(this.include) ||
            (this.include = Array.from(this.include)),
          this.include.sort(ui);
      }
      function gv(e, t) {
        !_e(t) || wr(e.frames, 'node', t) || e.frames.push(ku(t, e));
      }
      function bv(e) {
        var t = e.include;
        return t.length === 1 && t[0].actualNode === k.documentElement;
      }
      function yv(e) {
        if (e.include.length === 0 && e.frames.length === 0) {
          var t = lt.isInFrame() ? 'frame' : 'page';
          throw new Error('No elements found for include in ' + t + ' Context');
        }
      }
      function Dv(e) {
        for (
          var t = e.include,
            r = e.exclude,
            a = Array.from(t).concat(Array.from(r)),
            n = 0;
          n < a.length;
          n++
        ) {
          var i = a[n];
          if (i instanceof y.Element) return i.ownerDocument.documentElement;
          if (i instanceof y.Document) return i.documentElement;
        }
        return k.documentElement;
      }
      function wv(e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t.iframes === !1) return [];
        var r = new Da(e),
          a = r.frames;
        return a.map(function (n) {
          var i = n.node,
            o = Ve(n, Rc);
          o.initiator = !1;
          var l = Kr(i);
          return { frameSelector: l, frameContext: o };
        });
      }
      function _v(e) {
        var t = v._audit.rules.find(function (r) {
          return r.id === e;
        });
        if (!t) throw new Error('Cannot find rule by id: '.concat(e));
        return t;
      }
      var Mu = _v;
      function yt(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
          r = e.scrollWidth > e.clientWidth + t,
          a = e.scrollHeight > e.clientHeight + t;
        if (r || a) {
          var n = y.getComputedStyle(e),
            i = Nu(n, 'overflow-x'),
            o = Nu(n, 'overflow-y');
          if ((r && i) || (a && o))
            return { elm: e, top: e.scrollTop, left: e.scrollLeft };
        }
      }
      function Nu(e, t) {
        var r = e.getPropertyValue(t);
        return ['scroll', 'auto'].includes(r);
      }
      function qu(e) {
        return Array.from(e.children || e.childNodes || []).reduce(function (
          t,
          r,
        ) {
          var a = yt(r);
          return a && t.push(a), t.concat(qu(r));
        }, []);
      }
      function xv() {
        var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y,
          t = e.document.documentElement,
          r = [
            e.pageXOffset !== void 0
              ? { elm: e, top: e.pageYOffset, left: e.pageXOffset }
              : { elm: t, top: t.scrollTop, left: t.scrollLeft },
          ];
        return r.concat(qu(k.body));
      }
      var Ev = xv;
      function Av() {
        return vt(ce);
      }
      function Fv(e) {
        if (!e)
          throw new Error(
            'axe.utils.getStyleSheetFactory should be invoked with an argument',
          );
        return function (t) {
          var r = t.data,
            a = t.isCrossOrigin,
            n = a === void 0 ? !1 : a,
            i = t.shadowId,
            o = t.root,
            l = t.priority,
            u = t.isLink,
            s = u === void 0 ? !1 : u,
            c = e.createElement('style');
          if (s) {
            var d = e.createTextNode('@import "'.concat(r.href, '"'));
            c.appendChild(d);
          } else c.appendChild(e.createTextNode(r));
          return (
            e.head.appendChild(c),
            {
              sheet: c.sheet,
              isCrossOrigin: n,
              shadowId: i,
              root: o,
              priority: l,
            }
          );
        };
      }
      var Bu = Fv,
        Qe;
      function Cv(e) {
        if (Qe && Qe.parentNode)
          return (
            Qe.styleSheet === void 0
              ? Qe.appendChild(k.createTextNode(e))
              : (Qe.styleSheet.cssText += e),
            Qe
          );
        if (e) {
          var t = k.head || k.getElementsByTagName('head')[0];
          return (
            (Qe = k.createElement('style')),
            (Qe.type = 'text/css'),
            Qe.styleSheet === void 0
              ? Qe.appendChild(k.createTextNode(e))
              : (Qe.styleSheet.cssText = e),
            t.appendChild(Qe),
            Qe
          );
        }
      }
      var Tv = Cv;
      function Lu(e, t) {
        var r = N(e);
        if (e.nodeType === 9) return !1;
        if ((e.nodeType === 11 && (e = e.host), r && r._isHidden !== null))
          return r._isHidden;
        var a = y.getComputedStyle(e, null);
        if (
          !a ||
          !e.parentNode ||
          a.getPropertyValue('display') === 'none' ||
          (!t && a.getPropertyValue('visibility') === 'hidden') ||
          e.getAttribute('aria-hidden') === 'true'
        )
          return !0;
        var n = e.assignedSlot ? e.assignedSlot : e.parentNode,
          i = Lu(n, !0);
        return r && (r._isHidden = i), i;
      }
      var kv = Lu;
      function Rv(e) {
        var t,
          r,
          a =
            (t =
              (r = e.props) === null || r === void 0 ? void 0 : r.nodeName) !==
              null && t !== void 0
              ? t
              : e.nodeName.toLowerCase();
        return e.namespaceURI === 'http://www.w3.org/2000/svg'
          ? !1
          : !!ce.htmlElms[a];
      }
      var ii = Rv;
      function oi(e, t) {
        var r = t.include,
          a = r === void 0 ? [] : r,
          n = t.exclude,
          i = n === void 0 ? [] : n,
          o = a.filter(function (c) {
            return Mt(c, e);
          });
        if (o.length === 0) return !1;
        var l = i.filter(function (c) {
          return Mt(c, e);
        });
        if (l.length === 0) return !0;
        var u = Vu(o),
          s = Vu(l);
        return Mt(s, u);
      }
      function Vu(e) {
        var t,
          r = Ye(e),
          a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n = a.value;
            (!t || !Mt(n, t)) && (t = n);
          }
        } catch (i) {
          r.e(i);
        } finally {
          r.f();
        }
        return t;
      }
      function Sv(e, t) {
        return e.length !== t.length
          ? !1
          : e.every(function (r, a) {
              var n = t[a];
              return Array.isArray(r)
                ? r.length !== n.length
                  ? !1
                  : r.every(function (i, o) {
                      return n[o] === i;
                    })
                : r === n;
            });
      }
      var li = Sv;
      function Ov(e, t) {
        return (
          (e = e.actualNode || e),
          (t = t.actualNode || t),
          e === t ? 0 : e.compareDocumentPosition(t) & 4 ? -1 : 1
        );
      }
      var ui = Ov;
      function Iv(e, t, r, a) {
        var n =
            arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
          i = Array.from(e.cssRules);
        if (!i) return Promise.resolve();
        var o = i.filter(function (c) {
          return c.type === 3;
        });
        if (!o.length)
          return Promise.resolve({
            isCrossOrigin: n,
            priority: r,
            root: t.rootNode,
            shadowId: t.shadowId,
            sheet: e,
          });
        var l = o
            .filter(function (c) {
              return c.href;
            })
            .map(function (c) {
              return c.href;
            })
            .filter(function (c) {
              return !a.includes(c);
            }),
          u = l.map(function (c, d) {
            var f = [].concat(re(r), [d]),
              p = /^https?:\/\/|^\/\//i.test(c);
            return ci(c, t, f, a, p);
          }),
          s = i.filter(function (c) {
            return c.type !== 3;
          });
        return (
          s.length &&
            u.push(
              Promise.resolve(
                t.convertDataToStylesheet({
                  data: s
                    .map(function (c) {
                      return c.cssText;
                    })
                    .join(),
                  isCrossOrigin: n,
                  priority: r,
                  root: t.rootNode,
                  shadowId: t.shadowId,
                }),
              ),
            ),
          Promise.all(u)
        );
      }
      var ju = Iv;
      function Pv(e, t, r, a) {
        var n =
            arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
          i = Mv(e);
        return i ? ju(e, t, r, a, n) : ci(e.href, t, r, a, !0);
      }
      function Mv(e) {
        try {
          var t = e.cssRules;
          return !(!t && e.href);
        } catch {
          return !1;
        }
      }
      var si = Pv;
      function Nv(e, t, r, a, n) {
        return (
          a.push(e),
          new Promise(function (i, o) {
            var l = new y.XMLHttpRequest();
            l.open('GET', e),
              (l.timeout = Z.preload.timeout),
              l.addEventListener('error', o),
              l.addEventListener('timeout', o),
              l.addEventListener('loadend', function (u) {
                if (u.loaded && l.responseText) return i(l.responseText);
                o(l.responseText);
              }),
              l.send();
          }).then(function (i) {
            var o = t.convertDataToStylesheet({
              data: i,
              isCrossOrigin: n,
              priority: r,
              root: t.rootNode,
              shadowId: t.shadowId,
            });
            return si(o.sheet, t, r, a, o.isCrossOrigin);
          })
        );
      }
      var ci = Nv,
        qv = (function () {
          function e() {
            if (y.performance && y.performance) return y.performance.now();
          }
          var t = null,
            r = e();
          return {
            start: function () {
              this.mark('mark_axe_start');
            },
            end: function () {
              this.mark('mark_axe_end'),
                this.measure('axe', 'mark_axe_start', 'mark_axe_end'),
                this.logMeasures('axe');
            },
            auditStart: function () {
              this.mark('mark_audit_start');
            },
            auditEnd: function () {
              this.mark('mark_audit_end'),
                this.measure(
                  'audit_start_to_end',
                  'mark_audit_start',
                  'mark_audit_end',
                ),
                this.logMeasures();
            },
            mark: function (n) {
              y.performance &&
                y.performance.mark !== void 0 &&
                y.performance.mark(n);
            },
            measure: function (n, i, o) {
              y.performance &&
                y.performance.measure !== void 0 &&
                y.performance.measure(n, i, o);
            },
            logMeasures: function (n) {
              function i(c) {
                It('Measure ' + c.name + ' took ' + c.duration + 'ms');
              }
              if (y.performance && y.performance.getEntriesByType !== void 0)
                for (
                  var o = y.performance.getEntriesByName('mark_axe_start')[0],
                    l = y.performance
                      .getEntriesByType('measure')
                      .filter(function (c) {
                        return c.startTime >= o.startTime;
                      }),
                    u = 0;
                  u < l.length;
                  ++u
                ) {
                  var s = l[u];
                  if (s.name === n) {
                    i(s);
                    return;
                  }
                  i(s);
                }
            },
            timeElapsed: function () {
              return e() - r;
            },
            reset: function () {
              t || (t = e()), (r = e());
            },
          };
        })(),
        Re = qv;
      typeof Object.assign != 'function' &&
        (function () {
          Object.assign = function (e) {
            if (e == null)
              throw new TypeError('Cannot convert undefined or null to object');
            for (var t = Object(e), r = 1; r < arguments.length; r++) {
              var a = arguments[r];
              if (a != null)
                for (var n in a) a.hasOwnProperty(n) && (t[n] = a[n]);
            }
            return t;
          };
        })(),
        Array.prototype.find ||
          Object.defineProperty(Array.prototype, 'find', {
            value: function (t) {
              if (this === null)
                throw new TypeError(
                  'Array.prototype.find called on null or undefined',
                );
              if (typeof t != 'function')
                throw new TypeError('predicate must be a function');
              for (
                var r = Object(this),
                  a = r.length >>> 0,
                  n = arguments[1],
                  i,
                  o = 0;
                o < a;
                o++
              )
                if (((i = r[o]), t.call(n, i, o, r))) return i;
            },
          }),
        Array.prototype.findIndex ||
          Object.defineProperty(Array.prototype, 'findIndex', {
            value: function (t, r) {
              if (this === null)
                throw new TypeError(
                  'Array.prototype.find called on null or undefined',
                );
              if (typeof t != 'function')
                throw new TypeError('predicate must be a function');
              for (
                var a = Object(this), n = a.length >>> 0, i, o = 0;
                o < n;
                o++
              )
                if (((i = a[o]), t.call(r, i, o, a))) return o;
              return -1;
            },
          });
      function Hu() {
        if (k.elementsFromPoint) return k.elementsFromPoint;
        if (k.msElementsFromPoint) return k.msElementsFromPoint;
        var e = (function () {
            var n = k.createElement('x');
            return (
              (n.style.cssText = 'pointer-events:auto'),
              n.style.pointerEvents === 'auto'
            );
          })(),
          t = e ? 'pointer-events' : 'visibility',
          r = e ? 'none' : 'hidden',
          a = k.createElement('style');
        return (
          (a.innerHTML = e
            ? '* { pointer-events: all }'
            : '* { visibility: visible }'),
          function (n, i) {
            var o,
              l,
              u,
              s = [],
              c = [];
            for (
              k.head.appendChild(a);
              (o = k.elementFromPoint(n, i)) && s.indexOf(o) === -1;

            )
              s.push(o),
                c.push({
                  value: o.style.getPropertyValue(t),
                  priority: o.style.getPropertyPriority(t),
                }),
                o.style.setProperty(t, r, 'important');
            for (
              s.indexOf(k.documentElement) < s.length - 1 &&
                (s.splice(s.indexOf(k.documentElement), 1),
                s.push(k.documentElement)),
                l = c.length;
              (u = c[--l]);

            )
              s[l].style.setProperty(t, u.value ? u.value : '', u.priority);
            return k.head.removeChild(a), s;
          }
        );
      }
      typeof y.addEventListener == 'function' && (k.elementsFromPoint = Hu()),
        Array.prototype.includes ||
          Object.defineProperty(Array.prototype, 'includes', {
            value: function (t) {
              var r = Object(this),
                a = parseInt(r.length, 10) || 0;
              if (a === 0) return !1;
              var n = parseInt(arguments[1], 10) || 0,
                i;
              n >= 0 ? (i = n) : ((i = a + n), i < 0 && (i = 0));
              for (var o; i < a; ) {
                if (((o = r[i]), t === o || (t !== t && o !== o))) return !0;
                i++;
              }
              return !1;
            },
          }),
        Array.prototype.some ||
          Object.defineProperty(Array.prototype, 'some', {
            value: function (t) {
              if (this == null)
                throw new TypeError(
                  'Array.prototype.some called on null or undefined',
                );
              if (typeof t != 'function') throw new TypeError();
              for (
                var r = Object(this),
                  a = r.length >>> 0,
                  n = arguments.length >= 2 ? arguments[1] : void 0,
                  i = 0;
                i < a;
                i++
              )
                if (i in r && t.call(n, r[i], i, r)) return !0;
              return !1;
            },
          }),
        Array.from ||
          Object.defineProperty(Array, 'from', {
            value: (function () {
              var e = Object.prototype.toString,
                t = function (o) {
                  return (
                    typeof o == 'function' || e.call(o) === '[object Function]'
                  );
                },
                r = function (o) {
                  var l = Number(o);
                  return isNaN(l)
                    ? 0
                    : l === 0 || !isFinite(l)
                      ? l
                      : (l > 0 ? 1 : -1) * Math.floor(Math.abs(l));
                },
                a = Math.pow(2, 53) - 1,
                n = function (o) {
                  var l = r(o);
                  return Math.min(Math.max(l, 0), a);
                };
              return function (o) {
                var l = this,
                  u = Object(o);
                if (o == null)
                  throw new TypeError(
                    'Array.from requires an array-like object - not null or undefined',
                  );
                var s = arguments.length > 1 ? arguments[1] : void 0,
                  c;
                if (typeof s < 'u') {
                  if (!t(s))
                    throw new TypeError(
                      'Array.from: when provided, the second argument must be a function',
                    );
                  arguments.length > 2 && (c = arguments[2]);
                }
                for (
                  var d = n(u.length),
                    f = t(l) ? Object(new l(d)) : new Array(d),
                    p = 0,
                    m;
                  p < d;

                )
                  (m = u[p]),
                    s
                      ? (f[p] = typeof c > 'u' ? s(m, p) : s.call(c, m, p))
                      : (f[p] = m),
                    (p += 1);
                return (f.length = d), f;
              };
            })(),
          }),
        String.prototype.includes ||
          (String.prototype.includes = function (e, t) {
            return (
              typeof t != 'number' && (t = 0),
              t + e.length > this.length ? !1 : this.indexOf(e, t) !== -1
            );
          }),
        Array.prototype.flat ||
          Object.defineProperty(Array.prototype, 'flat', {
            configurable: !0,
            value: function e() {
              var t = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
              return t
                ? Array.prototype.reduce.call(
                    this,
                    function (r, a) {
                      return (
                        Array.isArray(a)
                          ? r.push.apply(r, e.call(a, t - 1))
                          : r.push(a),
                        r
                      );
                    },
                    [],
                  )
                : Array.prototype.slice.call(this);
            },
            writable: !0,
          }),
        y.Node &&
          !('isConnected' in y.Node.prototype) &&
          Object.defineProperty(y.Node.prototype, 'isConnected', {
            get: function () {
              return (
                !this.ownerDocument ||
                !(
                  this.ownerDocument.compareDocumentPosition(this) &
                  this.DOCUMENT_POSITION_DISCONNECTED
                )
              );
            },
          });
      function Bv(e, t) {
        return e.concat(t).filter(function (r, a, n) {
          return n.indexOf(r) === a;
        });
      }
      var Ir = Bv;
      function zu(e, t, r, a, n) {
        var i = n || {};
        return (
          (i.vNodes = e),
          (i.vNodesIndex = 0),
          (i.anyLevel = t),
          (i.thisLevel = r),
          (i.parentShadowId = a),
          i
        );
      }
      var di = [];
      function Lv(e, t, r) {
        for (
          var a = [],
            n = Array.isArray(e) ? e : [e],
            i = zu(n, t, null, e[0].shadowId, di.pop()),
            o = [];
          i.vNodesIndex < i.vNodes.length;

        ) {
          for (
            var l,
              u,
              s = i.vNodes[i.vNodesIndex++],
              c = null,
              d = null,
              f =
                (((l = i.anyLevel) === null || l === void 0
                  ? void 0
                  : l.length) || 0) +
                (((u = i.thisLevel) === null || u === void 0
                  ? void 0
                  : u.length) || 0),
              p = !1,
              m = 0;
            m < f;
            m++
          ) {
            var b,
              D,
              h,
              g =
                m <
                (((b = i.anyLevel) === null || b === void 0
                  ? void 0
                  : b.length) || 0)
                  ? i.anyLevel[m]
                  : i.thisLevel[
                      m -
                        (((D = i.anyLevel) === null || D === void 0
                          ? void 0
                          : D.length) || 0)
                    ];
            if ((!g[0].id || s.shadowId === i.parentShadowId) && Kt(s, g[0]))
              if (g.length === 1) !p && (!r || r(s)) && (o.push(s), (p = !0));
              else {
                var x = g.slice(1);
                if ([' ', '>'].includes(x[0].combinator) === !1)
                  throw new Error(
                    'axe.utils.querySelectorAll does not support the combinator: ' +
                      g[1].combinator,
                  );
                x[0].combinator === '>'
                  ? (c = c || []).push(x)
                  : (d = d || []).push(x);
              }
            (!g[0].id || s.shadowId === i.parentShadowId) &&
              (h = i.anyLevel) !== null &&
              h !== void 0 &&
              h.includes(g) &&
              (d = d || []).push(g);
          }
          for (
            s.children &&
            s.children.length &&
            (a.push(i), (i = zu(s.children, d, c, s.shadowId, di.pop())));
            i.vNodesIndex === i.vNodes.length && a.length;

          )
            di.push(i), (i = a.pop());
        }
        return o;
      }
      function Vv(e, t, r) {
        e = Array.isArray(e) ? e : [e];
        var a = Xr(t),
          n = xu(e, a, r);
        return n || Lv(e, a, r);
      }
      var mt = Vv;
      function jv(e) {
        var t = e.treeRoot,
          r = t === void 0 ? v._tree[0] : t,
          a = Hv(r);
        if (!a.length) return Promise.resolve();
        var n = k.implementation.createHTMLDocument(
            'Dynamic document for loading cssom',
          ),
          i = Bu(n);
        return zv(a, i).then(function (o) {
          return $u(o);
        });
      }
      var Uu = jv;
      function Hv(e) {
        var t = [],
          r = mt(e, '*', function (a) {
            return t.includes(a.shadowId) ? !1 : (t.push(a.shadowId), !0);
          }).map(function (a) {
            return { shadowId: a.shadowId, rootNode: _r(a.actualNode) };
          });
        return Ir(r, []);
      }
      function zv(e, t) {
        var r = [];
        return (
          e.forEach(function (a, n) {
            var i = a.rootNode,
              o = a.shadowId,
              l = Uv(i, o, t);
            if (!l) return Promise.all(r);
            var u = n + 1,
              s = {
                rootNode: i,
                shadowId: o,
                convertDataToStylesheet: t,
                rootIndex: u,
              },
              c = [],
              d = Promise.all(
                l.map(function (f, p) {
                  var m = [u, p];
                  return si(f, s, m, c);
                }),
              );
            r.push(d);
          }),
          Promise.all(r)
        );
      }
      function $u(e) {
        return e.reduce(function (t, r) {
          return Array.isArray(r) ? t.concat($u(r)) : t.concat(r);
        }, []);
      }
      function Uv(e, t, r) {
        var a;
        return e.nodeType === 11 && t ? (a = $v(e, r)) : (a = Wv(e)), Yv(a);
      }
      function $v(e, t) {
        return Array.from(e.children)
          .filter(Gv)
          .reduce(function (r, a) {
            var n = a.nodeName.toUpperCase(),
              i = n === 'STYLE' ? a.textContent : a,
              o = n === 'LINK',
              l = t({ data: i, isLink: o, root: e });
            return r.push(l.sheet), r;
          }, []);
      }
      function Wv(e) {
        return Array.from(e.styleSheets).filter(function (t) {
          return t.media ? Wu(t.media.mediaText) : !1;
        });
      }
      function Gv(e) {
        var t = e.nodeName.toUpperCase(),
          r = e.getAttribute('href'),
          a = e.getAttribute('rel'),
          n =
            t === 'LINK' &&
            r &&
            a &&
            e.rel.toUpperCase().includes('STYLESHEET'),
          i = t === 'STYLE';
        return i || (n && Wu(e.media));
      }
      function Wu(e) {
        return e ? !e.toUpperCase().includes('PRINT') : !0;
      }
      function Yv(e) {
        var t = [];
        return e.filter(function (r) {
          return r.href ? (t.includes(r.href) ? !1 : (t.push(r.href), !0)) : !0;
        });
      }
      function Kv(e) {
        var t = e.treeRoot,
          r = t === void 0 ? v._tree[0] : t,
          a = mt(r, 'video, audio', function (n) {
            var i = n.actualNode;
            if (i.hasAttribute('src')) return !!i.getAttribute('src');
            var o = Array.from(i.getElementsByTagName('source')).filter(
              function (l) {
                return !!l.getAttribute('src');
              },
            );
            return !(o.length <= 0);
          });
        return Promise.all(
          a.map(function (n) {
            var i = n.actualNode;
            return Xv(i);
          }),
        );
      }
      var Gu = Kv;
      function Xv(e) {
        return new Promise(function (t) {
          e.readyState > 0 && t(e);
          function r() {
            e.removeEventListener('loadedmetadata', r), t(e);
          }
          e.addEventListener('loadedmetadata', r);
        });
      }
      function Jv(e) {
        return I(e) === 'object' && Array.isArray(e.assets);
      }
      function Yu(e) {
        return !e || e.preload === void 0 || e.preload === null
          ? !0
          : typeof e.preload == 'boolean'
            ? e.preload
            : Jv(e.preload);
      }
      function Ku(e) {
        var t = Z.preload,
          r = t.assets,
          a = t.timeout,
          n = { assets: r, timeout: a };
        if (!e.preload || typeof e.preload == 'boolean') return n;
        var i = e.preload.assets.every(function (o) {
          return r.includes(o.toLowerCase());
        });
        if (!i)
          throw new Error(
            'Requested assets, not supported. Supported assets are: '.concat(
              r.join(', '),
              '.',
            ),
          );
        return (
          (n.assets = Ir(
            e.preload.assets.map(function (o) {
              return o.toLowerCase();
            }),
            [],
          )),
          e.preload.timeout &&
            typeof e.preload.timeout == 'number' &&
            !isNaN(e.preload.timeout) &&
            (n.timeout = e.preload.timeout),
          n
        );
      }
      function Qv(e) {
        var t = { cssom: Uu, media: Gu };
        return Yu(e)
          ? new Promise(function (r, a) {
              var n = Ku(e),
                i = n.assets,
                o = n.timeout,
                l = setTimeout(function () {
                  return a(new Error('Preload assets timed out.'));
                }, o);
              Promise.all(
                i.map(function (u) {
                  return t[u](e).then(function (s) {
                    return jc({}, u, s);
                  });
                }),
              )
                .then(function (u) {
                  var s = u.reduce(function (c, d) {
                    return le({}, c, d);
                  }, {});
                  clearTimeout(l), r(s);
                })
                .catch(function (u) {
                  clearTimeout(l), a(u);
                });
            })
          : Promise.resolve();
      }
      var Xu = Qv;
      function Zv(e, t) {
        function r(n) {
          return n.incomplete && n.incomplete.default
            ? n.incomplete.default
            : ti();
        }
        if (e && e.missingData)
          try {
            var a = t.incomplete[e.missingData[0].reason];
            if (!a) throw new Error();
            return a;
          } catch {
            return typeof e.missingData == 'string'
              ? t.incomplete[e.missingData]
              : r(t);
          }
        else return e && e.messageKey ? t.incomplete[e.messageKey] : r(t);
      }
      function Ju(e, t, r) {
        return function (a) {
          var n = e[a.id] || {},
            i = n.messages || {},
            o = Object.assign({}, n);
          delete o.messages,
            !r.reviewOnFail && a.result === void 0
              ? (I(i.incomplete) === 'object' &&
                  !Array.isArray(a.data) &&
                  (o.message = Zv(a.data, i)),
                o.message || (o.message = i.incomplete))
              : (o.message = a.result === t ? i.pass : i.fail),
            typeof o.message != 'function' &&
              (o.message = ri(o.message, a.data)),
            cn(a, o);
        };
      }
      function eg(e) {
        var t = v._audit.data.checks || {},
          r = v._audit.data.rules || {},
          a = wr(v._audit.rules, 'id', e.id) || {};
        e.tags = vt(a.tags || []);
        var n = Ju(t, !0, a),
          i = Ju(t, !1, a);
        e.nodes.forEach(function (o) {
          o.any.forEach(n), o.all.forEach(n), o.none.forEach(i);
        }),
          cn(e, vt(r[e.id] || {}));
      }
      var wa = eg;
      function tg(e, t) {
        return mt(e, t);
      }
      var Ze = tg;
      function Qu(e, t) {
        var r,
          a,
          n,
          i = v._audit && v._audit.tagExclude ? v._audit.tagExclude : [];
        return (
          t.hasOwnProperty('include') || t.hasOwnProperty('exclude')
            ? ((r = t.include || []),
              (r = Array.isArray(r) ? r : [r]),
              (a = t.exclude || []),
              (a = Array.isArray(a) ? a : [a]),
              (a = a.concat(
                i.filter(function (o) {
                  return r.indexOf(o) === -1;
                }),
              )))
            : ((r = Array.isArray(t) ? t : [t]),
              (a = i.filter(function (o) {
                return r.indexOf(o) === -1;
              }))),
          (n = r.some(function (o) {
            return e.tags.indexOf(o) !== -1;
          })),
          n || (r.length === 0 && e.enabled !== !1)
            ? a.every(function (o) {
                return e.tags.indexOf(o) === -1;
              })
            : !1
        );
      }
      function rg(e, t, r) {
        var a = r.runOnly || {},
          n = (r.rules || {})[e.id];
        return e.pageLevel && !t.page
          ? !1
          : a.type === 'rule'
            ? a.values.indexOf(e.id) !== -1
            : n && typeof n.enabled == 'boolean'
              ? n.enabled
              : a.type === 'tag' && a.values
                ? Qu(e, a.values)
                : Qu(e, []);
      }
      var Zu = rg;
      function es(e, t) {
        if (!t) return e;
        var r = e.cloneNode(!1),
          a = Wr(r);
        if (r.nodeType === 1) {
          var n = r.outerHTML;
          r = oe.get(n, function () {
            return ts(r, a, e, t);
          });
        } else r = ts(r, a, e, t);
        return (
          Array.from(e.childNodes).forEach(function (i) {
            r.appendChild(es(i, t));
          }),
          r
        );
      }
      function ts(e, t, r, a) {
        return (
          t &&
            ((e = k.createElement(e.nodeName)),
            Array.from(t).forEach(function (n) {
              ag(r, n.name, a) || e.setAttribute(n.name, n.value);
            })),
          e
        );
      }
      function ag(e, t, r) {
        return typeof r[t] > 'u' ? !1 : r[t] === !0 ? !0 : Gt(e, r[t]);
      }
      function fi(e, t) {
        var r = [],
          a;
        if (v._selectCache)
          for (var n = 0, i = v._selectCache.length; n < i; n++) {
            var o = v._selectCache[n];
            if (o.selector === e) return o.result;
          }
        for (var l = ng(t.include), u = ig(t), s = 0; s < l.length; s++) {
          a = l[s];
          var c = mt(a, e, u);
          r = og(r, c);
        }
        return (
          v._selectCache && v._selectCache.push({ selector: e, result: r }), r
        );
      }
      function ng(e) {
        return e.reduce(function (t, r) {
          return (!t.length || !Mt(t[t.length - 1], r)) && t.push(r), t;
        }, []);
      }
      function ig(e) {
        return !e.exclude || e.exclude.length === 0
          ? null
          : function (t) {
              return oi(t, e);
            };
      }
      function og(e, t) {
        if (e.length === 0) return t;
        if (e.length < t.length) {
          var r = e;
          (e = t), (t = r);
        }
        for (var a = 0, n = t.length; a < n; a++)
          e.includes(t[a]) || e.push(t[a]);
        return e;
      }
      function lg(e, t, r) {
        if (e === y) return e.scroll(r, t);
        (e.scrollTop = t), (e.scrollLeft = r);
      }
      function ug(e) {
        e.forEach(function (t) {
          var r = t.elm,
            a = t.top,
            n = t.left;
          return lg(r, a, n);
        });
      }
      var sg = ug;
      function cg(e) {
        var t = Array.isArray(e) ? re(e) : [e];
        return rs(t, k);
      }
      function rs(e, t) {
        var r = e.shift(),
          a = r ? t.querySelector(r) : null;
        return e.length === 0
          ? a
          : a != null && a.shadowRoot
            ? rs(e, a.shadowRoot)
            : null;
      }
      function pi(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k,
          r = Array.isArray(e) ? re(e) : [e];
        return e.length === 0 ? [] : as(r, t);
      }
      function as(e, t) {
        var r = Vc(e),
          a = r[0],
          n = r.slice(1),
          i = t.querySelectorAll(a);
        if (n.length === 0) return Array.from(i);
        var o = [],
          l = Ye(i),
          u;
        try {
          for (l.s(); !(u = l.n()).done; ) {
            var s = u.value;
            s != null &&
              s.shadowRoot &&
              o.push.apply(o, re(as(n, s.shadowRoot)));
          }
        } catch (c) {
          l.e(c);
        } finally {
          l.f();
        }
        return o;
      }
      function dg() {
        return [
          'hidden',
          'text',
          'search',
          'tel',
          'url',
          'email',
          'password',
          'date',
          'month',
          'week',
          'time',
          'datetime-local',
          'number',
          'range',
          'color',
          'checkbox',
          'radio',
          'file',
          'submit',
          'image',
          'reset',
          'button',
        ];
      }
      var _a = dg,
        ns = [
          ,
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
            ],
            [, 1, , , , , , 1, , 1, , , , , 1, , 1, , , , 1, 1, , 1, , , 1],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , 1, 1, , , 1, , , , , 1, 1, 1, , 1, , 1, , 1, , , , , , 1],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [1, , 1, , 1, , , , , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , , , , , , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
            ],
            [1, 1, 1, 1, 1, , , 1, , , 1, , , 1, 1, 1, , , , , 1, , , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [, 1, , 1, 1, 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1],
            [
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              ,
              ,
              ,
              1,
              1,
            ],
            [1, 1, 1, , , , , 1, , , , 1, 1, , 1, , , , , , 1, , , , , 1],
            [, 1, , , 1, , , 1, , , , , , 1],
            [, 1, , 1, , , , 1, , , , 1],
            [
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, 1, 1, 1, , , 1, , , 1, , 1, 1, , 1, , 1, , , , , 1, , 1],
            [, 1, , , , 1, , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , , 1, , , 1],
            [
              ,
              1,
              1,
              ,
              ,
              ,
              ,
              ,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
            ],
            [, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, , , , , 1, 1, , 1, , 1],
            [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, 1],
            [, 1, 1, 1, , , , 1, 1, 1, , 1, 1, , , 1, 1, , 1, 1, 1, 1, , 1, 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, 1, , 1, 1, 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , 1, 1],
            [, , , , 1, , , , , , , , , , , , , , , , , 1],
            [
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              ,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, , , , , , , 1, , , , , , , 1],
            [, 1, 1, , 1, 1, , 1, , , , , , , , , , , , , 1],
            ,
            [1, 1, 1, , , , , , , , , , , , , 1],
            [, , , , , , , , 1, , , 1, , , 1, 1, , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [, , , 1, , , , , , , , , , , , , , , 1],
            [, 1, , , 1, 1, , 1, , 1, 1, , , , 1, 1, , , 1, 1, , , , 1],
            [
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              ,
              ,
              ,
              1,
            ],
            ,
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
            ],
            [, 1, , , 1, , , 1, , 1, , , 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, , , 1, , , 1, , 1],
            [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , , , , 1],
            [, , , , , , , 1, , , , 1, , 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , 1, 1, , 1, , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, 1, 1, , 1],
            [
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , , , , , , , , , , , , 1],
            ,
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
            ],
            [, , 1, , , 1, , , 1, 1, , , 1, , 1, 1, , 1],
            [, 1, 1, , 1, , , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, 1],
            [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , 1, , 1, , 1, 1],
            ,
            [, 1, 1, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , 1, , , , 1],
            [1, 1, , , 1, 1, , 1, , , , , 1, , 1],
          ],
          [
            ,
            [, 1],
            [, , , 1, , , , 1, , , , 1, , , , 1, , , 1, , , 1],
            [, , , , , , , , , , , , , , , , , , 1, 1, , , , , , 1],
            ,
            [1, , , , , 1],
            [, 1, , , , 1, , , , 1],
            [, 1, , , , , , , , , , , 1, , , 1, , , , , , , , , 1, 1],
            [, , , , , , , , , , , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , , , , 1, , , , 1, , 1],
            [, 1],
            [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, , 1, 1, , 1, , , , , , , 1],
            [1, , , , , 1, , , 1, 1, , 1, , 1, , 1, 1, , , , , 1, , , 1],
            [, 1, 1, , , 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , 1, , 1, , 1, 1, 1],
            [1, 1, 1, 1, 1, , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1],
            [1, , , , , , , , , , , , , , , , , , , , 1],
            [, , , , , , , , , 1],
            ,
            [, 1, , , , , , 1, 1, 1, , 1, , , , 1, , , 1, 1, 1, , , 1],
            [1, , , , , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, , 1, , 1, , , 1, 1],
            [1, , 1, 1, , , , , 1, , , , , , 1, 1, , , 1, 1, 1, 1, , , 1, , 1],
            [1, , , , , , , , , , , , , , , , , 1],
            [, , , , , 1, , , 1, , , , , , 1],
            [, , , , , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , , , , , , , , 1],
            [, 1, , , , , , , , , , , , , , 1],
            [, 1, , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
            ],
            [, , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , , , , , , , 1],
            ,
            [, , , , , , , , , , , , , , , , , , 1],
            [1, , , , , , , , , 1, , , , 1],
            [, , , , , , , , , , , , , , , , , , 1],
            ,
            [1, 1, , , , 1, 1, , , , , , 1, , , , 1, , 1, , 1, 1, , 1],
            [1],
            [, , , , , , , , , , , 1, , , , , , , , , , , 1],
            [, 1, , , , , , , 1, 1, , , 1, , 1, , , , 1, , , , , , , 1],
            [, , , , , , , , , , , , , , , , 1, , , , , 1],
            [, , 1, , , , , 1, , 1],
            [1, , , , 1, , , , , 1, , , , 1, 1, , , , 1, 1, , , , , 1],
            [, , , , , 1],
            [, , , , , , , , , , , , , , , , , , , 1],
            [1, , , 1, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, 1, 1],
            [, , , , , 1, , , , , , , 1, , , , , , , 1],
            ,
            [
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
            ],
            [, , , , , , , , , , , , , , , , , , 1],
            [, 1, , , , 1],
            ,
            [1],
          ],
          [
            ,
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , 1, 1, 1, 1, , , , , , 1, , 1, , , , 1, , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , , , , , , , 1, , , , , , , , , 1, , , , 1],
            [, 1, 1, , 1, 1, , 1, , , , 1, 1, , 1, 1, , , 1, , 1, 1, , 1],
            [, 1, , 1, , 1, , , 1, , , 1, 1, , 1, 1, , , 1, 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [, , , , , , , , , 1, , 1, , 1, 1, , , , 1, , , 1],
            [, 1, , , 1, 1, , , , , , , , , 1, 1, 1, , , , , 1],
            [1, , , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, , , 1, , , 1, , 1, , 1],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , 1, , , , , , , , , 1],
            [, 1, , , , , , , , 1, , , , , 1, , , , 1, , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , 1, , 1, , , , , 1, 1, 1, 1, 1, , , 1, , , , 1],
            [, 1, , , , , , , , 1, , , , , , , , , , , , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [1, 1, , 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, , , , , , 1],
            [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, , , , 1, , 1, 1, , 1, 1],
            [, , , , , , , , , , , , , , , , , , , , , , , , 1],
            [, 1, 1, , 1, 1, 1, 1, , 1, , , 1, 1, 1, 1, , , 1, , , , , , , 1],
            [, 1, , , , , , , , 1, , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , , , , , , , , , , , 1, 1, , , , , , 1],
            [, 1, , , , , , , 1],
            [, , , , , , , , , , , , , , 1, , , , , 1, , , , , , 1],
            [1, 1, , , 1, , , 1, 1, 1, , , , 1],
            ,
            [, , , , , , , , , , , , , 1, , , , , , , , , , 1],
            [, , , , , , , , , 1, , , , , , , , , 1, , , , , , , 1],
            [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, , 1, , , 1, 1],
            [, , , , , , , , , 1],
            [, 1, , , , 1, , , , , , 1, , , 1, , , , , 1],
            [, 1, 1, , 1, 1, , , , , , , , , , , , , , , 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , 1, 1, , 1, 1, 1, 1, , , , 1, 1, , , , 1, , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
            ],
            [, , , , , , , , , , , , , , , 1, , , , 1],
            ,
            [
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              ,
              ,
              ,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
            ],
            [, , 1, , , , , , 1, , , , 1, , 1, , , , , 1],
            [1, , , , , , , , , 1, , , , , , 1, , , , 1, , 1, , , 1],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , 1, , 1, , , , , , 1, , , 1, , , , , , , , 1],
            [, 1, , 1, , , , , , , , , , , , 1],
            ,
            [1, 1, , , , , , , , , , , , , , , , , , , , , , 1, 1],
            [1],
          ],
          [
            ,
            [1, , , , , , , , , 1, , , , , 1, , 1, , 1],
            [, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1, 1, , , , 1, , , 1, , , , 1],
            [, 1, , , , , , , 1, , , , 1, , , , , , 1],
            [1, 1, 1, 1, 1, 1, , , , 1, , , , , , , , , 1, 1, 1, 1],
            [1],
            [, 1, 1, , , 1, 1, , , , , 1, , 1, , , , , , , , 1, , , , 1],
            [1, , 1, , , 1, , 1, , , , , 1, 1, 1, 1, , , , 1, , , , 1],
            [, , 1, , , , , , , 1, , , , , , , 1, , , , , , , 1],
            [1, , , , , , , , , , , , , , 1, , , , 1],
            [, , , 1, , 1, , , , , 1, , , , 1, 1, , , , 1],
            [
              1,
              ,
              ,
              ,
              ,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
            ],
            [, 1, 1, , , , , 1, , 1, , 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1],
            [, 1, , , , 1, , , , 1, , , 1, , 1, 1, , , 1, 1, , , , , , 1],
            [
              1,
              ,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              ,
              ,
              ,
              1,
            ],
            [1, , , , , , , , , , , , , , , , , , 1, , , 1, , 1],
            [, , , , , , , , , 1, , , , , , 1],
            [, , , , , , , , , , , , , , , , , , , , , 1, , 1],
            [, 1, , , , 1, , , 1, 1, , 1, , , 1, 1, , , 1, , , 1, , , 1, 1],
            [1, 1, , 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, , 1, 1],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, , , , , , , , , , , , , 1],
            [, , 1, , , , , , , , , , , , , , , , , , , , 1],
            [1, , , , , , , , , , , 1, , 1, , 1, , , , 1],
            [, , , 1, , , , , , , , , 1],
            [, 1, , , , , , , , , , , , , , 1, , , , , , , , , 1],
            [, , , , , , , , 1, 1, , , , , , , , , 1, , , , , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
            ],
            [, , , , , 1, , , , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, , 1],
            [, , , , , , , , , , , , , , , , , , , 1, 1],
            [, 1, , , , , , 1, , , , , , , , , , , , , 1],
            [, , 1, , , 1, , 1, 1, 1, , 1, 1, , 1, , , , 1, , 1, 1],
            ,
            [, , 1, , , 1, , , , , , 1, , , , 1],
            [, , , , , , , , , 1, , , , , , , , , , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
            ],
            [, , , , , 1, , , , , , , , , , , , , 1],
            [, 1, , , , , , , , , , , , 1, , 1, 1, , 1, , , 1],
            [, , , , , 1, , , , , , , , , , , , , , 1],
            [, 1, 1, 1, 1, , , , , 1, , , 1, , 1, , , , 1, 1, , , , 1, 1],
            [, 1, , , 1, , , 1, , 1, 1, , 1, , , , , , , 1],
            [, , 1, , 1, , , 1, , , , , , , , , , , 1, 1, , , , 1],
            [, 1, , , , , , , , , , , , , , , , , 1, , , , , , 1],
            [, , , , , , , , , , , , , , , , , , 1],
            [, 1, 1, , , , , , , , , , , , , , , , 1, , 1, 1],
            [, , , , , , , , , , , , 1],
            ,
            [
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
            ],
            [1, , , , 1, , , , , , , , , , 1],
            [1, , , , , , , , , 1],
            ,
            [, 1, , , , 1, , , , , , , , , , , , , , , , , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , 1, 1, 1, 1, , 1, , , , 1, 1, , , 1, 1, , 1],
            [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , , , , , , , , , , 1],
            [
              1,
              1,
              1,
              ,
              ,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              ,
              ,
              1,
            ],
            [, 1, , , , , , , 1, 1, , , 1, 1, 1, , 1, , , 1, 1, 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , 1, , , , 1, , , 1, , , , 1, , , , , , , 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , 1, , , , , , , , , 1, 1, , , , , , , , , 1],
            ,
            [
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
            ],
            [1, , , 1, , , , 1, 1, 1, , , , , 1, 1, , , , 1, , 1],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [1, 1, , , , , , , , 1, , 1, , , , , , , , 1, , 1],
            [, 1, , , , 1, , 1, 1, , , , 1, 1, , 1, , , , 1, 1, 1, , 1],
            ,
            [, 1, , , , , , 1, , , , , , , 1],
            [, , , , , , , , 1, , , , 1, , 1, , , , , , , , , , , , 1],
          ],
          [
            ,
            [
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , 1, , , , , , , , 1, , , , , , 1, , , 1],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [, 1, 1, , , , , 1, 1, 1, , , 1, , 1, 1, , , , 1, , 1, , , 1, 1],
            [, , , , , , , 1, , , , 1, 1, 1, 1, 1, , 1, , , , , , , , 1],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              ,
              ,
              ,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, , , , , , , , 1, , , , , 1, , 1],
            [, 1, 1, 1, , 1, , 1, , 1, , , , 1, , 1, , , 1, , , , , , 1, 1],
            [, 1, , , 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , , 1, , , 1],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , 1, , , , , 1, , 1, , 1, , , , , , 1, , 1, , , , 1, 1],
          ],
          [
            ,
            [, 1, , 1, , , , , , , , , , , , , , , 1, , , , 1],
            [, , , , , , , , , 1, , 1, 1, 1, , 1, , , 1, , 1, 1],
            [1, 1, , , , , , , 1, , , , , , , 1, , , , , , 1],
            [, 1, , , , , , , , , , 1, , , , , , , , , 1, 1],
            ,
            [, , , , , , , , , , , , , , , 1, , , , 1, , 1],
            [, , 1, 1, , 1, , 1, , , , , , , , 1, , , , , , 1],
            [, , , , , , , , , , , , , , , , , , , , 1, 1],
            [, 1, , , , , , , , , , , , , 1],
            [1, , 1, 1, , , , 1, , , , , , , , , 1, , , 1, , , 1, 1],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
            ],
            [, 1, , , 1, 1, , , , , , 1, , 1, , 1, , , 1, , 1, 1],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , , 1, , 1, , 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , 1, 1],
            [, , , , 1, , , 1, , , , , , , 1, , , , 1, 1],
            [, 1, , , , , , , , , , 1, , 1, , 1, , , , , 1, , , , , 1],
            ,
            [
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              ,
              ,
              ,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, 1, , 1, , , , , , 1, , , , , , 1, 1, , , , 1, 1, , , 1],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , , 1, , , , 1, , , , 1, 1],
            [, , , , 1],
            [, , , , , , , , , 1, , , 1],
            ,
            [, , 1, , 1, , , , , , , , , 1, , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
            ],
            [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1],
            [, 1, , 1, , , , , , 1, , , , , 1, 1, , , , , 1, 1],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              ,
              1,
              1,
              1,
            ],
            [, 1, , , , 1, , , , , , , 1],
            [, 1, , , 1, , , 1, , 1, , 1, 1, , 1, , , , , 1, , 1, , , , 1, 1],
            [, 1, , , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , , , , , , , , , , , , , , , , 1],
            [, 1, 1, 1, , , , 1, 1, , , , , , 1, 1, 1, , 1, 1, 1, 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [, 1, , , , 1, , , , , , , , 1, , , , , , , , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
            ],
            [1, 1, , , , , , , 1, 1, , , , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            ,
            [, 1, 1, , , , , 1, , 1, , , , 1, 1, 1, , , 1, , , , , 1],
            [, , , , , , , , , , , , , 1],
            [, , , , , 1, , , , , , , , 1, 1, , , , , 1, , 1, , , 1, 1],
            [, , , , , , , , , , , , , , 1],
          ],
          [
            ,
            [, 1],
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            [
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              1,
            ],
            [, 1, , 1, , 1, , , 1, , , , , 1, , , , , , 1, 1],
            [, 1, , 1, , , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1],
            [, 1, , , , , , , , , , , , , , , 1],
          ],
          [
            ,
            [
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , 1, , , , , , , , , 1, 1, , , , 1],
            [, , , , , , 1],
            [, , 1],
            [, 1, 1, , , 1, , 1, , 1, 1, , 1, 1, 1, , , , 1, 1, 1, , , , , 1],
            ,
            [, 1, , , , 1, , , , , , 1, , , 1, , , , 1, 1, , 1],
            [, , , , , , , 1, , , , , , , , , 1],
            [, 1, , , , 1, 1, , , , , , 1, 1, 1, , , , 1, , 1, 1],
            [, , , , , , , 1, , 1, , , , , , , , , , 1],
            [, 1, 1, , , , , , 1, 1, , , , 1, , , , , , , 1, , , 1],
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, 1, , , 1, , , 1, , , , , 1, , 1, , 1, , 1, , , , , 1],
            [1, 1, 1, 1, 1, 1, 1, 1, , , , , 1, 1, , 1, 1, , 1, , , 1, , 1],
            [, , , , , , , , , , , , , , 1, , , , , , 1],
            ,
            [, , , , , , , , , 1, , , , , , 1, , , , , 1],
            [, , 1, , , , , , , 1, , , 1, 1],
            [, , , 1, , , , , 1, , , , , 1, , , , , , 1, , , , 1],
            [
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
            ],
            ,
            [1, 1, , , , , , , , , , 1, , 1, , 1, , , 1],
            [, , , , 1, , , , , , , , , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , , 1, , , , , 1, , 1],
            [, , , , , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [, , 1, , , 1, , , , , , , , 1, , , , , , 1, , , , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , 1, 1, , 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [1, 1, , , , , , , 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, 1, 1, 1, , 1, , , , , , 1, , 1, , , , , 1, 1, , , , , 1],
            [
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, , 1],
            [, 1, 1, 1, 1, , , , , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1],
            [, 1, 1, 1, 1, 1, , 1, , , , , 1, , 1, , 1, , , 1, , , 1, 1, , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , , , , , 1, , , , , 1, 1, , , 1, , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , , , 1, , 1, 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1],
            [
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , 1, , , , , , , , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , 1, 1, , , , , , 1, 1, 1, 1, 1, , , , 1, 1, 1, , 1, 1, 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
            ],
            [
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
            ],
            [, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, , , , , , , , , 1],
          ],
          [
            ,
            [, , , , , , , , , , , , , 1, 1, , , , 1],
            [, 1, , , , , , , , 1, , , 1, , , , , , 1, , , 1, , , , 1],
            ,
            [, 1, , , , 1, , 1, , 1, 1, , 1, 1, , , , , , , , 1],
            [, , , , , , , , , , , , , , , , , , , 1],
            [, , , , , , , , , 1],
            [1, 1, 1, , , 1, , , , , , , , , 1, 1, , , , , , , , , , 1],
            [, 1, , , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , , , , , , , 1, , , 1],
            [, , , , , , , , , 1],
            [1, 1, , , , , , 1, 1, 1, , 1, 1, , , , 1, 1, , 1, , 1, 1, 1, , 1],
            [, 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , 1, , 1],
            [, 1, 1, 1, 1, , , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , 1],
            [, 1, , , 1, 1, , 1, , , , 1, , 1, 1, , 1, , 1, , , 1, , , 1, , 1],
            [, , , , , , , , , , , 1],
            [, , , , , , , , , 1, , , , , , , , , , , , , 1],
            ,
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , , , , 1, 1, , 1, , , , , 1, , , 1, , 1],
            [, 1, , , , 1, , , 1, , , , , , , , 1, , 1, , , 1],
            [, , , , , , , , , , , , , 1, 1, , , , 1, , , 1],
            [, , , , , 1, , , 1, , , , 1],
            [, 1],
            ,
            [, 1],
            [1, , , , , , , , , , , , , , 1, , , , , 1],
          ],
          [
            ,
            [
              ,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
            ],
            [, , 1, , , , , , , , , 1],
            ,
            ,
            [1, , , 1, 1, , , , , , , , 1, 1, , 1, 1, , 1],
            ,
            [, , , , , , , , , , , , , , , , , , 1, , 1],
            ,
            [1, , , 1, 1, , 1, 1, , , , , 1, , 1, , , , , 1, 1, , 1],
            ,
            [, 1, , , , , , , , 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1],
            [, , , , , , , , , , , , , , , , 1, , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , , , , , , , 1, , 1, , , 1],
            [1, , , , , , , , , , , , , , , , , , 1, , 1],
            ,
            ,
            [, 1, , , , , , , , , , , , , , 1, , , , 1, 1],
            [, , , , , , , , , 1, , , 1, , , , , , , , , , 1],
            [, , , , , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , 1, 1, , , , , , 1],
            ,
            [, 1],
          ],
          [
            ,
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1],
            [, 1, , , , , , , , 1],
            [, , , , 1, , , 1, , , 1, 1, , , , , , , , , , 1, , , , 1],
            [, 1, , 1, 1, , , 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, , 1],
            [, , , , , , , 1],
            [, 1, 1, , , , , 1, , 1, , , , , , 1, , , , , , 1, , 1, , 1],
            [, 1, , , , , , 1, , , , 1, , , , , , , , , , 1],
            [
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [, 1, , , , , , , , 1],
            [, 1, 1, , 1, , , , , , , , 1, , , , , , 1, , , 1, , 1, , 1],
            [
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1, , , , 1, 1, , , 1, 1],
            [, , 1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , , , 1, , 1, , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
            ],
            [, , , 1],
            ,
            [
              ,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , , , 1, , 1, , 1, , , , , , , 1, 1, , 1, 1],
            [, , , , , , 1, , 1, 1, , 1, , 1, , , , , , , , , , 1],
            [, 1, 1, , 1, , , , 1, , , , 1, 1, 1, , , , 1, , 1, 1, 1, , 1, 1],
            ,
            [, 1, 1, , , , , , , , , , , , , 1, , , 1, , , , , 1],
            [, 1, , , , , , , , , , , , , , , , , , , , , , 1],
            [, 1, 1, , , , , , , 1, , , , 1, , , , , 1, , , , , , , 1],
          ],
          [
            ,
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              ,
              ,
              1,
              1,
              1,
            ],
            [, , 1, 1, , 1, , 1, 1, , , , 1, 1, 1, 1, , , 1, , 1, 1, 1, 1, , 1],
            [, 1, , 1, , , , , , , , 1, , 1, , 1, , , , , , , , , , 1],
            [, , 1, , 1, , , 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1],
            [, 1],
            [, 1, 1, , 1, , 1, 1, , 1, , , 1, 1, 1, , , , 1, , , 1, , 1],
            [1, 1, , 1, 1, 1, , , , , , , , , , , , , 1, , 1, 1, 1],
            [, 1, 1, , , , , , , 1, , , 1, , 1, , 1, , 1, 1, , , 1, , , 1],
            [, , 1, , , , , , , , , , , , , , , , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
            ],
            [, , , 1, 1, , , 1, , 1, , 1, , 1, 1, 1, 1, , 1, , , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , , , , , , , , , , , , , , , , 1],
            [, 1, 1, , 1, 1, , 1, , 1, , , , 1, 1, , , 1, 1, , 1, 1, , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [, 1, 1, , 1, , , 1, , , 1, , 1, 1, 1, 1, 1, , 1, , 1, 1],
            [, , , , , 1, , , , 1, , , , , 1, 1, , , , 1],
            [, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, , , 1, , 1, , , 1],
            [, , 1, , , , , , , , , 1, , 1, , , , , 1, , 1],
            [, 1, 1, , , , , , , , 1, 1, 1, , , , , , , , 1, , , , , 1],
            [, , , , , , , , 1, , , , , 1, , , 1],
          ],
          [
            ,
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, , , , , , , , , 1, 1],
            [, , , , , , , , 1, , , , 1, , 1, , 1],
            [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1],
            [, 1, , 1, , 1, , , , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1],
            ,
            [, 1, , , , , , , , 1, , , 1, 1, , , 1, , 1, 1, , 1, , 1],
            [, 1, , , 1, , , , , , , , 1, , , , , , , 1],
            [
              1,
              1,
              ,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
            ],
            ,
            [, 1, , , , , , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, 1, , , , 1],
            [, 1, 1, , , 1, , 1, , 1, , , 1, 1, 1, 1, , , 1, , , 1, , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
            ],
            [, 1, , , 1, 1, , 1, 1, , , 1, 1, , 1, 1, , 1, , 1, , 1],
            [1, , 1, , , , , 1, , 1, , 1, 1, 1, 1, , , , , 1, 1, , , , 1, 1],
            [, 1, 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , , , , 1],
            ,
            [, 1, 1, , , 1, , , , 1, , 1, 1, 1, 1, 1, , , , 1, , , , 1, , 1],
            [, , , 1, 1, , , 1, , , , , 1, , 1, 1, 1, , 1, 1, , , , , , 1],
            [, 1, , , , , , , , , , , 1, , , , 1, , , , , , , 1, , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , , , , , , , , , , , , , , , , 1],
            [, 1, , , , , , 1, , , , , 1, , 1, , , 1, 1, , 1, 1, , 1],
            [, 1, , , , , , 1, , , , , 1, 1, , , , , , , , 1, , , , 1],
            [, , , , , , , , , , , , , , , , , , 1, , , 1, , , , , 1],
            [, , , , , , , 1, , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , 1, , 1, , , , , , , 1, , , , , , , , 1, , , 1],
            [, 1, , , , , , , 1],
            [, , , , , , , , , , 1],
            [, 1, , , , , , 1, 1, , , , , , 1],
            ,
            [, 1, 1, , , , , , 1, , , , , 1, 1, , , , 1],
            [1, , 1, , 1, , , , , 1, , , , , 1, , , , , , , , , 1, 1],
            [, 1, 1, , , , , , , , , 1, 1, 1, 1, , , , 1, , , , , 1, , , 1],
            ,
            [
              ,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
            ],
            [, , , , , 1, , , , , 1, , , 1, 1, , , 1, , 1, , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1],
            [, , , 1, , , , , 1, , , , , 1, , 1, , 1, 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , 1],
            [, 1, , , , , , 1, , , , , , , 1, 1, 1, , , 1],
            [, 1, , , , , , , , , , 1, 1, 1, , , , , 1, , , 1],
            [, , , , , 1, , 1, , , , , 1, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1],
            [1, 1, , , , , , , 1, , , , , 1, 1, , , , , , , , , , , 1],
            ,
            [, 1],
            [, , , , , , , , , , , , , , , , , , , , , , , , 1],
            [, , 1, , , , , 1, , , 1, , , , 1, , 1],
            [, 1, , , , , , , , , 1],
          ],
        ];
      function fg(e) {
        for (var t = ns; e.length < 3; ) e += '`';
        for (var r = 0; r <= e.length - 1; r++) {
          var a = e.charCodeAt(r) - 96;
          if (((t = t[a]), !t)) return !1;
        }
        return !0;
      }
      function is(e) {
        e = Array.isArray(e) ? e : ns;
        var t = [];
        return (
          e.forEach(function (r, a) {
            var n = String.fromCharCode(a + 96).replace('`', '');
            Array.isArray(r)
              ? (t = t.concat(
                  is(r).map(function (i) {
                    return n + i;
                  }),
                ))
              : t.push(n);
          }),
          t
        );
      }
      var xa = fg,
        pg = (function (e) {
          Bi(r, e);
          var t = Li(r);
          function r(a) {
            var n;
            return (
              Ut(this, r),
              (n = t.call(this)),
              (n._props = hg(a)),
              (n._attrs = vg(a)),
              n
            );
          }
          return (
            $t(r, [
              {
                key: 'props',
                get: function () {
                  return this._props;
                },
              },
              {
                key: 'attr',
                value: function (n) {
                  var i;
                  return (i = this._attrs[n]) !== null && i !== void 0
                    ? i
                    : null;
                },
              },
              {
                key: 'hasAttr',
                value: function (n) {
                  return this._attrs[n] !== void 0;
                },
              },
              {
                key: 'attrNames',
                get: function () {
                  return Object.keys(this._attrs);
                },
              },
            ]),
            r
          );
        })(Q),
        mi = {
          '#cdata-section': 2,
          '#text': 3,
          '#comment': 8,
          '#document': 9,
          '#document-fragment': 11,
        },
        os = {},
        mg = Object.keys(mi);
      mg.forEach(function (e) {
        os[mi[e]] = e;
      });
      function hg(e) {
        var t,
          r,
          a,
          n = (t = e.nodeName) !== null && t !== void 0 ? t : os[e.nodeType],
          i =
            (r =
              (a = e.nodeType) !== null && a !== void 0
                ? a
                : mi[e.nodeName]) !== null && r !== void 0
              ? r
              : 1;
        fe(
          typeof i == 'number',
          "nodeType has to be a number, got '".concat(i, "'"),
        ),
          fe(
            typeof n == 'string',
            "nodeName has to be a string, got '".concat(n, "'"),
          ),
          (n = n.toLowerCase());
        var o = null;
        n === 'input' &&
          ((o = (
            e.type ||
            (e.attributes && e.attributes.type) ||
            ''
          ).toLowerCase()),
          _a().includes(o) || (o = 'text'));
        var l = le({}, e, { nodeType: i, nodeName: n });
        return o && (l.type = o), delete l.attributes, Object.freeze(l);
      }
      function vg(e) {
        var t = e.attributes,
          r = t === void 0 ? {} : t,
          a = { htmlFor: 'for', className: 'class' };
        return Object.keys(r).reduce(function (n, i) {
          var o = r[i];
          if (
            (fe(
              I(o) !== 'object' || o === null,
              "expects attributes not to be an object, '".concat(i, "' was"),
            ),
            o !== void 0)
          ) {
            var l = a[i] || i;
            n[l] = o !== null ? String(o) : null;
          }
          return n;
        }, {});
      }
      var ls = pg,
        us = {};
      De(us, {
        CssSelectorParser: function () {
          return gg.CssSelectorParser;
        },
        doT: function () {
          return ss.default;
        },
        emojiRegexText: function () {
          return qn;
        },
        memoize: function () {
          return bg.default;
        },
      });
      var gg = nt(Wi()),
        ss = nt(no()),
        bg = nt(ao()),
        yg = nt(o1()),
        Dg = nt(l1());
      nt(u1()),
        (ss.default.templateSettings.strip = !1),
        'Promise' in y || yg.default.polyfill(),
        'Uint32Array' in y || (y.Uint32Array = Dg.Uint32Array),
        y.Uint32Array &&
          ('some' in y.Uint32Array.prototype ||
            Object.defineProperty(y.Uint32Array.prototype, 'some', {
              value: Array.prototype.some,
            }),
          'reduce' in y.Uint32Array.prototype ||
            Object.defineProperty(y.Uint32Array.prototype, 'reduce', {
              value: Array.prototype.reduce,
            }));
      function wg(e, t) {
        if (((e = e || function () {}), (t = t || v.log), !v._audit))
          throw new Error('No audit configured');
        var r = v.utils.queue(),
          a = [];
        Object.keys(v.plugins).forEach(function (i) {
          r.defer(function (o) {
            var l = function (s) {
              a.push(s), o();
            };
            try {
              v.plugins[i].cleanup(o, l);
            } catch (u) {
              l(u);
            }
          });
        });
        var n = v.utils.getFlattenedTree(k.body);
        v.utils.querySelectorAll(n, 'iframe, frame').forEach(function (i) {
          r.defer(function (o, l) {
            return v.utils.sendCommandToFrame(
              i.actualNode,
              { command: 'cleanup-plugin' },
              o,
              l,
            );
          });
        }),
          r
            .then(function (i) {
              a.length === 0 ? e(i) : t(a);
            })
            .catch(t);
      }
      var cs = wg,
        Pr = {},
        ds;
      function fs(e) {
        return Pr.hasOwnProperty(e);
      }
      function hi(e) {
        return typeof e == 'string' && Pr[e]
          ? Pr[e]
          : typeof e == 'function'
            ? e
            : ds;
      }
      function _g(e, t, r) {
        (Pr[e] = t), r && (ds = t);
      }
      function xg(e) {
        var t;
        if (((t = v._audit), !t)) throw new Error('No audit configured');
        if (e.axeVersion || e.ver) {
          var r = e.axeVersion || e.ver;
          if (!/^\d+\.\d+\.\d+(-canary)?/.test(r))
            throw new Error('Invalid configured version '.concat(r));
          var a = r.split('-'),
            n = ve(a, 2),
            i = n[0],
            o = n[1],
            l = i.split('.').map(Number),
            u = ve(l, 3),
            s = u[0],
            c = u[1],
            d = u[2],
            f = v.version.split('-'),
            p = ve(f, 2),
            m = p[0],
            b = p[1],
            D = m.split('.').map(Number),
            h = ve(D, 3),
            g = h[0],
            x = h[1],
            E = h[2];
          if (
            s !== g ||
            x < c ||
            (x === c && E < d) ||
            (s === g && c === x && d === E && o && o !== b)
          )
            throw new Error(
              'Configured version '
                .concat(r, ' is not compatible with current axe version ')
                .concat(v.version),
            );
        }
        if (
          (e.reporter &&
            (typeof e.reporter == 'function' || fs(e.reporter)) &&
            (t.reporter = e.reporter),
          e.checks)
        ) {
          if (!Array.isArray(e.checks))
            throw new TypeError('Checks property must be an array');
          e.checks.forEach(function (P) {
            if (!P.id)
              throw new TypeError(
                'Configured check '.concat(
                  JSON.stringify(P),
                  ' is invalid. Checks must be an object with at least an id property',
                ),
              );
            t.addCheck(P);
          });
        }
        var C = [];
        if (e.rules) {
          if (!Array.isArray(e.rules))
            throw new TypeError('Rules property must be an array');
          e.rules.forEach(function (P) {
            if (!P.id)
              throw new TypeError(
                'Configured rule '.concat(
                  JSON.stringify(P),
                  ' is invalid. Rules must be an object with at least an id property',
                ),
              );
            C.push(P.id), t.addRule(P);
          });
        }
        if (
          (e.disableOtherRules &&
            t.rules.forEach(function (P) {
              C.includes(P.id) === !1 && (P.enabled = !1);
            }),
          typeof e.branding < 'u'
            ? t.setBranding(e.branding)
            : t._constructHelpUrls(),
          e.tagExclude && (t.tagExclude = e.tagExclude),
          e.locale && t.applyLocale(e.locale),
          e.standards && Pp(e.standards),
          e.noHtml && (t.noHtml = !0),
          e.allowedOrigins)
        ) {
          if (!Array.isArray(e.allowedOrigins))
            throw new TypeError('Allowed origins property must be an array');
          if (e.allowedOrigins.includes('*'))
            throw new Error(
              '"*" is not allowed. Use "'.concat(Z.allOrigins, '" instead'),
            );
          t.setAllowedOrigins(e.allowedOrigins);
        }
      }
      var Eg = xg;
      function Ag(e) {
        lt.updateMessenger(e);
      }
      function Fg(e) {
        e = e || [];
        var t = e.length
            ? v._audit.rules.filter(function (a) {
                return !!e.filter(function (n) {
                  return a.tags.indexOf(n) !== -1;
                }).length;
              })
            : v._audit.rules,
          r = v._audit.data.rules || {};
        return t.map(function (a) {
          var n = r[a.id] || {};
          return {
            ruleId: a.id,
            description: n.description,
            help: n.help,
            helpUrl: n.helpUrl,
            tags: a.tags,
            actIds: a.actIds,
          };
        });
      }
      var Cg = Fg,
        ps = {};
      De(ps, {
        allowedAttr: function () {
          return ms;
        },
        arialabelText: function () {
          return Fr;
        },
        arialabelledbyText: function () {
          return Ar;
        },
        getAccessibleRefs: function () {
          return vi;
        },
        getElementUnallowedRoles: function () {
          return gs;
        },
        getExplicitRole: function () {
          return ge;
        },
        getImplicitRole: function () {
          return ct;
        },
        getOwnedVirtual: function () {
          return Tr;
        },
        getRole: function () {
          return ue;
        },
        getRoleType: function () {
          return pt;
        },
        getRolesByType: function () {
          return Lg;
        },
        getRolesWithNameFromContents: function () {
          return Hg;
        },
        implicitNodes: function () {
          return Ug;
        },
        implicitRole: function () {
          return ct;
        },
        isAccessibleRef: function () {
          return Ea;
        },
        isAriaRoleAllowedOnElement: function () {
          return vs;
        },
        isComboboxPopup: function () {
          return bi;
        },
        isUnsupportedRole: function () {
          return Cn;
        },
        isValidRole: function () {
          return rr;
        },
        label: function () {
          return ws;
        },
        labelVirtual: function () {
          return da;
        },
        lookupTable: function () {
          return ys;
        },
        namedFromContents: function () {
          return jl;
        },
        requiredAttr: function () {
          return _s;
        },
        requiredContext: function () {
          return yi;
        },
        requiredOwned: function () {
          return Di;
        },
        validateAttr: function () {
          return Mr;
        },
        validateAttrValue: function () {
          return xs;
        },
      });
      function Tg(e) {
        var t = ce.ariaRoles[e],
          r = re(Bt());
        return (
          t &&
            (t.allowedAttrs && r.push.apply(r, re(t.allowedAttrs)),
            t.requiredAttrs && r.push.apply(r, re(t.requiredAttrs))),
          r
        );
      }
      var ms = Tg,
        kg = /^idrefs?$/;
      function hs(e, t, r) {
        if (e.hasAttribute) {
          if (e.nodeName.toUpperCase() === 'LABEL' && e.hasAttribute('for')) {
            var a = e.getAttribute('for');
            (t[a] = t[a] || []), t[a].push(e);
          }
          for (var n = 0; n < r.length; ++n) {
            var i = r[n],
              o = J(e.getAttribute(i) || '');
            if (o)
              for (var l = He(o), u = 0; u < l.length; ++u)
                (t[l[u]] = t[l[u]] || []), t[l[u]].push(e);
          }
        }
        for (var s = 0; s < e.childNodes.length; s++)
          e.childNodes[s].nodeType === 1 && hs(e.childNodes[s], t, r);
      }
      function Rg(e) {
        e = e.actualNode || e;
        var t = je(e);
        t = t.documentElement || t;
        var r = oe.get('idRefsByRoot', function () {
            return new WeakMap();
          }),
          a = r.get(t);
        if (!a) {
          (a = {}), r.set(t, a);
          var n = Object.keys(ce.ariaAttrs).filter(function (i) {
            var o = ce.ariaAttrs[i].type;
            return kg.test(o);
          });
          hs(t, a, n);
        }
        return a[e.id] || [];
      }
      var vi = Rg;
      function Sg(e, t) {
        var r = e instanceof Q ? e : N(e),
          a = ct(r),
          n = Vt(r);
        return Array.isArray(n.allowedRoles)
          ? n.allowedRoles.includes(t)
          : t === a
            ? !1
            : !!n.allowedRoles;
      }
      var vs = Sg,
        Og = [
          'doc-backlink',
          'doc-biblioentry',
          'doc-biblioref',
          'doc-cover',
          'doc-endnote',
          'doc-glossref',
          'doc-noteref',
        ],
        Ig = { header: 'banner', footer: 'contentinfo' };
      function Pg(e) {
        var t = [];
        if (!e) return t;
        if (e.hasAttr('role')) {
          var r = He(e.attr('role').toLowerCase());
          t = t.concat(r);
        }
        return t.filter(function (a) {
          return rr(a);
        });
      }
      function Mg(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
          r = e instanceof Q ? e : N(e);
        if (!ii(r)) return [];
        var a = r.props.nodeName,
          n = ct(r) || Ig[a],
          i = Pg(r);
        return i.filter(function (o) {
          return !Ng(o, r, t, n);
        });
      }
      function Ng(e, t, r, a) {
        return r && e === a
          ? !0
          : Og.includes(e) && pt(e) !== a
            ? !1
            : vs(t, e);
      }
      var gs = Mg;
      function qg(e) {
        return Object.keys(ce.ariaRoles).filter(function (t) {
          return ce.ariaRoles[t].type === e;
        });
      }
      var or = qg;
      function Bg(e) {
        return or(e);
      }
      var Lg = Bg;
      function Vg() {
        return oe.get('ariaRolesNameFromContent', function () {
          return Object.keys(ce.ariaRoles).filter(function (e) {
            return ce.ariaRoles[e].nameFromContent;
          });
        });
      }
      var gi = Vg;
      function jg() {
        return gi();
      }
      var Hg = jg,
        bs = function (t) {
          return t === null;
        },
        ze = function (t) {
          return t !== null;
        },
        Dt = {};
      (Dt.attributes = {
        'aria-activedescendant': {
          type: 'idref',
          allowEmpty: !0,
          unsupported: !1,
        },
        'aria-atomic': {
          type: 'boolean',
          values: ['true', 'false'],
          unsupported: !1,
        },
        'aria-autocomplete': {
          type: 'nmtoken',
          values: ['inline', 'list', 'both', 'none'],
          unsupported: !1,
        },
        'aria-busy': {
          type: 'boolean',
          values: ['true', 'false'],
          unsupported: !1,
        },
        'aria-checked': {
          type: 'nmtoken',
          values: ['true', 'false', 'mixed', 'undefined'],
          unsupported: !1,
        },
        'aria-colcount': { type: 'int', unsupported: !1 },
        'aria-colindex': { type: 'int', unsupported: !1 },
        'aria-colspan': { type: 'int', unsupported: !1 },
        'aria-controls': { type: 'idrefs', allowEmpty: !0, unsupported: !1 },
        'aria-current': {
          type: 'nmtoken',
          allowEmpty: !0,
          values: ['page', 'step', 'location', 'date', 'time', 'true', 'false'],
          unsupported: !1,
        },
        'aria-describedby': { type: 'idrefs', allowEmpty: !0, unsupported: !1 },
        'aria-describedat': { unsupported: !0, unstandardized: !0 },
        'aria-details': { type: 'idref', allowEmpty: !0, unsupported: !1 },
        'aria-disabled': {
          type: 'boolean',
          values: ['true', 'false'],
          unsupported: !1,
        },
        'aria-dropeffect': {
          type: 'nmtokens',
          values: ['copy', 'move', 'reference', 'execute', 'popup', 'none'],
          unsupported: !1,
        },
        'aria-errormessage': { type: 'idref', allowEmpty: !0, unsupported: !1 },
        'aria-expanded': {
          type: 'nmtoken',
          values: ['true', 'false', 'undefined'],
          unsupported: !1,
        },
        'aria-flowto': { type: 'idrefs', allowEmpty: !0, unsupported: !1 },
        'aria-grabbed': {
          type: 'nmtoken',
          values: ['true', 'false', 'undefined'],
          unsupported: !1,
        },
        'aria-haspopup': {
          type: 'nmtoken',
          allowEmpty: !0,
          values: [
            'true',
            'false',
            'menu',
            'listbox',
            'tree',
            'grid',
            'dialog',
          ],
          unsupported: !1,
        },
        'aria-hidden': {
          type: 'boolean',
          values: ['true', 'false'],
          unsupported: !1,
        },
        'aria-invalid': {
          type: 'nmtoken',
          allowEmpty: !0,
          values: ['true', 'false', 'spelling', 'grammar'],
          unsupported: !1,
        },
        'aria-keyshortcuts': {
          type: 'string',
          allowEmpty: !0,
          unsupported: !1,
        },
        'aria-label': { type: 'string', allowEmpty: !0, unsupported: !1 },
        'aria-labelledby': { type: 'idrefs', allowEmpty: !0, unsupported: !1 },
        'aria-level': { type: 'int', unsupported: !1 },
        'aria-live': {
          type: 'nmtoken',
          values: ['off', 'polite', 'assertive'],
          unsupported: !1,
        },
        'aria-modal': {
          type: 'boolean',
          values: ['true', 'false'],
          unsupported: !1,
        },
        'aria-multiline': {
          type: 'boolean',
          values: ['true', 'false'],
          unsupported: !1,
        },
        'aria-multiselectable': {
          type: 'boolean',
          values: ['true', 'false'],
          unsupported: !1,
        },
        'aria-orientation': {
          type: 'nmtoken',
          values: ['horizontal', 'vertical'],
          unsupported: !1,
        },
        'aria-owns': { type: 'idrefs', allowEmpty: !0, unsupported: !1 },
        'aria-placeholder': { type: 'string', allowEmpty: !0, unsupported: !1 },
        'aria-posinset': { type: 'int', unsupported: !1 },
        'aria-pressed': {
          type: 'nmtoken',
          values: ['true', 'false', 'mixed', 'undefined'],
          unsupported: !1,
        },
        'aria-readonly': {
          type: 'boolean',
          values: ['true', 'false'],
          unsupported: !1,
        },
        'aria-relevant': {
          type: 'nmtokens',
          values: ['additions', 'removals', 'text', 'all'],
          unsupported: !1,
        },
        'aria-required': {
          type: 'boolean',
          values: ['true', 'false'],
          unsupported: !1,
        },
        'aria-roledescription': {
          type: 'string',
          allowEmpty: !0,
          unsupported: !1,
        },
        'aria-rowcount': { type: 'int', unsupported: !1 },
        'aria-rowindex': { type: 'int', unsupported: !1 },
        'aria-rowspan': { type: 'int', unsupported: !1 },
        'aria-selected': {
          type: 'nmtoken',
          values: ['true', 'false', 'undefined'],
          unsupported: !1,
        },
        'aria-setsize': { type: 'int', unsupported: !1 },
        'aria-sort': {
          type: 'nmtoken',
          values: ['ascending', 'descending', 'other', 'none'],
          unsupported: !1,
        },
        'aria-valuemax': { type: 'decimal', unsupported: !1 },
        'aria-valuemin': { type: 'decimal', unsupported: !1 },
        'aria-valuenow': { type: 'decimal', unsupported: !1 },
        'aria-valuetext': { type: 'string', unsupported: !1 },
      }),
        (Dt.globalAttributes = [
          'aria-atomic',
          'aria-busy',
          'aria-controls',
          'aria-current',
          'aria-describedby',
          'aria-details',
          'aria-disabled',
          'aria-dropeffect',
          'aria-flowto',
          'aria-grabbed',
          'aria-haspopup',
          'aria-hidden',
          'aria-invalid',
          'aria-keyshortcuts',
          'aria-label',
          'aria-labelledby',
          'aria-live',
          'aria-owns',
          'aria-relevant',
          'aria-roledescription',
        ]),
        (Dt.role = {
          alert: {
            type: 'widget',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          alertdialog: {
            type: 'widget',
            attributes: {
              allowed: ['aria-expanded', 'aria-modal', 'aria-errormessage'],
            },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['dialog', 'section'],
          },
          application: {
            type: 'landmark',
            attributes: {
              allowed: [
                'aria-expanded',
                'aria-errormessage',
                'aria-activedescendant',
              ],
            },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: [
              'article',
              'audio',
              'embed',
              'iframe',
              'object',
              'section',
              'svg',
              'video',
            ],
          },
          article: {
            type: 'structure',
            attributes: {
              allowed: [
                'aria-expanded',
                'aria-posinset',
                'aria-setsize',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['article'],
            unsupported: !1,
          },
          banner: {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['header'],
            unsupported: !1,
            allowedElements: ['section'],
          },
          button: {
            type: 'widget',
            attributes: {
              allowed: ['aria-expanded', 'aria-pressed', 'aria-errormessage'],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: null,
            implicit: [
              'button',
              'input[type="button"]',
              'input[type="image"]',
              'input[type="reset"]',
              'input[type="submit"]',
              'summary',
            ],
            unsupported: !1,
            allowedElements: [{ nodeName: 'a', attributes: { href: ze } }],
          },
          cell: {
            type: 'structure',
            attributes: {
              allowed: [
                'aria-colindex',
                'aria-colspan',
                'aria-rowindex',
                'aria-rowspan',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: ['row'],
            implicit: ['td', 'th'],
            unsupported: !1,
          },
          checkbox: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-checked',
                'aria-required',
                'aria-readonly',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: null,
            implicit: ['input[type="checkbox"]'],
            unsupported: !1,
            allowedElements: ['button'],
          },
          columnheader: {
            type: 'structure',
            attributes: {
              allowed: [
                'aria-colindex',
                'aria-colspan',
                'aria-expanded',
                'aria-rowindex',
                'aria-rowspan',
                'aria-required',
                'aria-readonly',
                'aria-selected',
                'aria-sort',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: ['row'],
            implicit: ['th'],
            unsupported: !1,
          },
          combobox: {
            type: 'composite',
            attributes: {
              allowed: [
                'aria-autocomplete',
                'aria-required',
                'aria-activedescendant',
                'aria-orientation',
                'aria-errormessage',
              ],
              required: ['aria-expanded'],
            },
            owned: { all: ['listbox', 'tree', 'grid', 'dialog', 'textbox'] },
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: [
              {
                nodeName: 'input',
                properties: { type: ['text', 'search', 'tel', 'url', 'email'] },
              },
            ],
          },
          command: { nameFrom: ['author'], type: 'abstract', unsupported: !1 },
          complementary: {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['aside'],
            unsupported: !1,
            allowedElements: ['section'],
          },
          composite: {
            nameFrom: ['author'],
            type: 'abstract',
            unsupported: !1,
          },
          contentinfo: {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['footer'],
            unsupported: !1,
            allowedElements: ['section'],
          },
          definition: {
            type: 'structure',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['dd', 'dfn'],
            unsupported: !1,
          },
          dialog: {
            type: 'widget',
            attributes: {
              allowed: ['aria-expanded', 'aria-modal', 'aria-errormessage'],
            },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['dialog'],
            unsupported: !1,
            allowedElements: ['section'],
          },
          directory: {
            type: 'structure',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: null,
            unsupported: !1,
            allowedElements: ['ol', 'ul'],
          },
          document: {
            type: 'structure',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['body'],
            unsupported: !1,
            allowedElements: [
              'article',
              'embed',
              'iframe',
              'object',
              'section',
              'svg',
            ],
          },
          'doc-abstract': {
            type: 'section',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-acknowledgments': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-afterword': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-appendix': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-backlink': {
            type: 'link',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: null,
            unsupported: !1,
            allowedElements: [{ nodeName: 'a', attributes: { href: ze } }],
          },
          'doc-biblioentry': {
            type: 'listitem',
            attributes: {
              allowed: [
                'aria-expanded',
                'aria-level',
                'aria-posinset',
                'aria-setsize',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author'],
            context: ['doc-bibliography'],
            unsupported: !1,
            allowedElements: ['li'],
          },
          'doc-bibliography': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: { one: ['doc-biblioentry'] },
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-biblioref': {
            type: 'link',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: null,
            unsupported: !1,
            allowedElements: [{ nodeName: 'a', attributes: { href: ze } }],
          },
          'doc-chapter': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-colophon': {
            type: 'section',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-conclusion': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-cover': {
            type: 'img',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
          },
          'doc-credit': {
            type: 'section',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-credits': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-dedication': {
            type: 'section',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-endnote': {
            type: 'listitem',
            attributes: {
              allowed: [
                'aria-expanded',
                'aria-level',
                'aria-posinset',
                'aria-setsize',
                'aria-errormessage',
              ],
            },
            owned: null,
            namefrom: ['author'],
            context: ['doc-endnotes'],
            unsupported: !1,
            allowedElements: ['li'],
          },
          'doc-endnotes': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: { one: ['doc-endnote'] },
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-epigraph': {
            type: 'section',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
          },
          'doc-epilogue': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-errata': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-example': {
            type: 'section',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['aside', 'section'],
          },
          'doc-footnote': {
            type: 'section',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['aside', 'footer', 'header'],
          },
          'doc-foreword': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-glossary': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: ['term', 'definition'],
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['dl'],
          },
          'doc-glossref': {
            type: 'link',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author', 'contents'],
            context: null,
            unsupported: !1,
            allowedElements: [{ nodeName: 'a', attributes: { href: ze } }],
          },
          'doc-index': {
            type: 'navigation',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['nav', 'section'],
          },
          'doc-introduction': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-noteref': {
            type: 'link',
            attributes: { allowed: ['aria-expanded'] },
            owned: null,
            namefrom: ['author', 'contents'],
            context: null,
            unsupported: !1,
            allowedElements: [{ nodeName: 'a', attributes: { href: ze } }],
          },
          'doc-notice': {
            type: 'note',
            attributes: { allowed: ['aria-expanded'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-pagebreak': {
            type: 'separator',
            attributes: { allowed: ['aria-expanded'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['hr'],
          },
          'doc-pagelist': {
            type: 'navigation',
            attributes: { allowed: ['aria-expanded'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['nav', 'section'],
          },
          'doc-part': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-preface': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-prologue': {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-pullquote': {
            type: 'none',
            attributes: { allowed: ['aria-expanded'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['aside', 'section'],
          },
          'doc-qna': {
            type: 'section',
            attributes: { allowed: ['aria-expanded'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          'doc-subtitle': {
            type: 'sectionhead',
            attributes: { allowed: ['aria-expanded'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: { nodeName: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
          },
          'doc-tip': {
            type: 'note',
            attributes: { allowed: ['aria-expanded'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['aside'],
          },
          'doc-toc': {
            type: 'navigation',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            namefrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['nav', 'section'],
          },
          feed: {
            type: 'structure',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: { one: ['article'] },
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['article', 'aside', 'section'],
          },
          figure: {
            type: 'structure',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: null,
            implicit: ['figure'],
            unsupported: !1,
          },
          form: {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['form'],
            unsupported: !1,
          },
          grid: {
            type: 'composite',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-expanded',
                'aria-colcount',
                'aria-level',
                'aria-multiselectable',
                'aria-readonly',
                'aria-rowcount',
                'aria-errormessage',
              ],
            },
            owned: { one: ['rowgroup', 'row'] },
            nameFrom: ['author'],
            context: null,
            implicit: ['table'],
            unsupported: !1,
          },
          gridcell: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-colindex',
                'aria-colspan',
                'aria-expanded',
                'aria-rowindex',
                'aria-rowspan',
                'aria-selected',
                'aria-readonly',
                'aria-required',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: ['row'],
            implicit: ['td', 'th'],
            unsupported: !1,
          },
          group: {
            type: 'structure',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-expanded',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['details', 'optgroup'],
            unsupported: !1,
            allowedElements: [
              'dl',
              'figcaption',
              'fieldset',
              'figure',
              'footer',
              'header',
              'ol',
              'ul',
            ],
          },
          heading: {
            type: 'structure',
            attributes: {
              required: ['aria-level'],
              allowed: ['aria-expanded', 'aria-errormessage'],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: null,
            implicit: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            unsupported: !1,
          },
          img: {
            type: 'structure',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['img'],
            unsupported: !1,
            allowedElements: ['embed', 'iframe', 'object', 'svg'],
          },
          input: { nameFrom: ['author'], type: 'abstract', unsupported: !1 },
          landmark: { nameFrom: ['author'], type: 'abstract', unsupported: !1 },
          link: {
            type: 'widget',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: null,
            implicit: ['a[href]', 'area[href]'],
            unsupported: !1,
            allowedElements: [
              'button',
              { nodeName: 'input', properties: { type: ['image', 'button'] } },
            ],
          },
          list: {
            type: 'structure',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: { all: ['listitem'] },
            nameFrom: ['author'],
            context: null,
            implicit: ['ol', 'ul', 'dl'],
            unsupported: !1,
          },
          listbox: {
            type: 'composite',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-multiselectable',
                'aria-readonly',
                'aria-required',
                'aria-expanded',
                'aria-orientation',
                'aria-errormessage',
              ],
            },
            owned: { all: ['option'] },
            nameFrom: ['author'],
            context: null,
            implicit: ['select'],
            unsupported: !1,
            allowedElements: ['ol', 'ul'],
          },
          listitem: {
            type: 'structure',
            attributes: {
              allowed: [
                'aria-level',
                'aria-posinset',
                'aria-setsize',
                'aria-expanded',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: ['list'],
            implicit: ['li', 'dt'],
            unsupported: !1,
          },
          log: {
            type: 'widget',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          main: {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['main'],
            unsupported: !1,
            allowedElements: ['article', 'section'],
          },
          marquee: {
            type: 'widget',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          math: {
            type: 'structure',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['math'],
            unsupported: !1,
          },
          menu: {
            type: 'composite',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-expanded',
                'aria-orientation',
                'aria-errormessage',
              ],
            },
            owned: { one: ['menuitem', 'menuitemradio', 'menuitemcheckbox'] },
            nameFrom: ['author'],
            context: null,
            implicit: ['menu[type="context"]'],
            unsupported: !1,
            allowedElements: ['ol', 'ul'],
          },
          menubar: {
            type: 'composite',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-expanded',
                'aria-orientation',
                'aria-errormessage',
              ],
            },
            owned: { one: ['menuitem', 'menuitemradio', 'menuitemcheckbox'] },
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['ol', 'ul'],
          },
          menuitem: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-posinset',
                'aria-setsize',
                'aria-expanded',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: ['menu', 'menubar'],
            implicit: ['menuitem[type="command"]'],
            unsupported: !1,
            allowedElements: [
              'button',
              'li',
              { nodeName: 'iput', properties: { type: ['image', 'button'] } },
              { nodeName: 'a', attributes: { href: ze } },
            ],
          },
          menuitemcheckbox: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-checked',
                'aria-posinset',
                'aria-setsize',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: ['menu', 'menubar'],
            implicit: ['menuitem[type="checkbox"]'],
            unsupported: !1,
            allowedElements: [
              { nodeName: ['button', 'li'] },
              {
                nodeName: 'input',
                properties: { type: ['checkbox', 'image', 'button'] },
              },
              { nodeName: 'a', attributes: { href: ze } },
            ],
          },
          menuitemradio: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-checked',
                'aria-selected',
                'aria-posinset',
                'aria-setsize',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: ['menu', 'menubar'],
            implicit: ['menuitem[type="radio"]'],
            unsupported: !1,
            allowedElements: [
              { nodeName: ['button', 'li'] },
              {
                nodeName: 'input',
                properties: { type: ['image', 'button', 'radio'] },
              },
              { nodeName: 'a', attributes: { href: ze } },
            ],
          },
          navigation: {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['nav'],
            unsupported: !1,
            allowedElements: ['section'],
          },
          none: {
            type: 'structure',
            attributes: null,
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: [
              {
                nodeName: [
                  'article',
                  'aside',
                  'dl',
                  'embed',
                  'figcaption',
                  'fieldset',
                  'figure',
                  'footer',
                  'form',
                  'h1',
                  'h2',
                  'h3',
                  'h4',
                  'h5',
                  'h6',
                  'header',
                  'hr',
                  'iframe',
                  'li',
                  'ol',
                  'section',
                  'ul',
                ],
              },
              { nodeName: 'img', attributes: { alt: ze } },
            ],
          },
          note: {
            type: 'structure',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['aside'],
          },
          option: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-selected',
                'aria-posinset',
                'aria-setsize',
                'aria-checked',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: ['listbox'],
            implicit: ['option'],
            unsupported: !1,
            allowedElements: [
              { nodeName: ['button', 'li'] },
              {
                nodeName: 'input',
                properties: { type: ['checkbox', 'button'] },
              },
              { nodeName: 'a', attributes: { href: ze } },
            ],
          },
          presentation: {
            type: 'structure',
            attributes: null,
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: [
              {
                nodeName: [
                  'article',
                  'aside',
                  'dl',
                  'embed',
                  'figcaption',
                  'fieldset',
                  'figure',
                  'footer',
                  'form',
                  'h1',
                  'h2',
                  'h3',
                  'h4',
                  'h5',
                  'h6',
                  'header',
                  'hr',
                  'iframe',
                  'li',
                  'ol',
                  'section',
                  'ul',
                ],
              },
              { nodeName: 'img', attributes: { alt: ze } },
            ],
          },
          progressbar: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-valuetext',
                'aria-valuenow',
                'aria-valuemax',
                'aria-valuemin',
                'aria-expanded',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['progress'],
            unsupported: !1,
          },
          radio: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-selected',
                'aria-posinset',
                'aria-setsize',
                'aria-required',
                'aria-errormessage',
                'aria-checked',
              ],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: null,
            implicit: ['input[type="radio"]'],
            unsupported: !1,
            allowedElements: [
              { nodeName: ['button', 'li'] },
              { nodeName: 'input', properties: { type: ['image', 'button'] } },
            ],
          },
          radiogroup: {
            type: 'composite',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-required',
                'aria-expanded',
                'aria-readonly',
                'aria-errormessage',
                'aria-orientation',
              ],
            },
            owned: { all: ['radio'] },
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: { nodeName: ['ol', 'ul', 'fieldset'] },
          },
          range: { nameFrom: ['author'], type: 'abstract', unsupported: !1 },
          region: {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: [
              'section[aria-label]',
              'section[aria-labelledby]',
              'section[title]',
            ],
            unsupported: !1,
            allowedElements: { nodeName: ['article', 'aside'] },
          },
          roletype: { type: 'abstract', unsupported: !1 },
          row: {
            type: 'structure',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-colindex',
                'aria-expanded',
                'aria-level',
                'aria-selected',
                'aria-rowindex',
                'aria-errormessage',
              ],
            },
            owned: { one: ['cell', 'columnheader', 'rowheader', 'gridcell'] },
            nameFrom: ['author', 'contents'],
            context: ['rowgroup', 'grid', 'treegrid', 'table'],
            implicit: ['tr'],
            unsupported: !1,
          },
          rowgroup: {
            type: 'structure',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-expanded',
                'aria-errormessage',
              ],
            },
            owned: { all: ['row'] },
            nameFrom: ['author', 'contents'],
            context: ['grid', 'table', 'treegrid'],
            implicit: ['tbody', 'thead', 'tfoot'],
            unsupported: !1,
          },
          rowheader: {
            type: 'structure',
            attributes: {
              allowed: [
                'aria-colindex',
                'aria-colspan',
                'aria-expanded',
                'aria-rowindex',
                'aria-rowspan',
                'aria-required',
                'aria-readonly',
                'aria-selected',
                'aria-sort',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: ['row'],
            implicit: ['th'],
            unsupported: !1,
          },
          scrollbar: {
            type: 'widget',
            attributes: {
              required: ['aria-controls', 'aria-valuenow'],
              allowed: [
                'aria-valuetext',
                'aria-orientation',
                'aria-errormessage',
                'aria-valuemax',
                'aria-valuemin',
              ],
            },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
          },
          search: {
            type: 'landmark',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: { nodeName: ['aside', 'form', 'section'] },
          },
          searchbox: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-autocomplete',
                'aria-multiline',
                'aria-readonly',
                'aria-required',
                'aria-placeholder',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['input[type="search"]'],
            unsupported: !1,
            allowedElements: {
              nodeName: 'input',
              properties: { type: 'text' },
            },
          },
          section: {
            nameFrom: ['author', 'contents'],
            type: 'abstract',
            unsupported: !1,
          },
          sectionhead: {
            nameFrom: ['author', 'contents'],
            type: 'abstract',
            unsupported: !1,
          },
          select: { nameFrom: ['author'], type: 'abstract', unsupported: !1 },
          separator: {
            type: 'structure',
            attributes: {
              allowed: [
                'aria-expanded',
                'aria-orientation',
                'aria-valuenow',
                'aria-valuemax',
                'aria-valuemin',
                'aria-valuetext',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['hr'],
            unsupported: !1,
            allowedElements: ['li'],
          },
          slider: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-valuetext',
                'aria-orientation',
                'aria-readonly',
                'aria-errormessage',
                'aria-valuemax',
                'aria-valuemin',
              ],
              required: ['aria-valuenow'],
            },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['input[type="range"]'],
            unsupported: !1,
          },
          spinbutton: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-valuetext',
                'aria-required',
                'aria-readonly',
                'aria-errormessage',
                'aria-valuemax',
                'aria-valuemin',
              ],
              required: ['aria-valuenow'],
            },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['input[type="number"]'],
            unsupported: !1,
            allowedElements: {
              nodeName: 'input',
              properties: { type: ['text', 'tel'] },
            },
          },
          status: {
            type: 'widget',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['output'],
            unsupported: !1,
            allowedElements: ['section'],
          },
          structure: { type: 'abstract', unsupported: !1 },
          switch: {
            type: 'widget',
            attributes: {
              allowed: ['aria-errormessage'],
              required: ['aria-checked'],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: null,
            unsupported: !1,
            allowedElements: [
              'button',
              {
                nodeName: 'input',
                properties: { type: ['checkbox', 'image', 'button'] },
              },
              { nodeName: 'a', attributes: { href: ze } },
            ],
          },
          tab: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-selected',
                'aria-expanded',
                'aria-setsize',
                'aria-posinset',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: ['tablist'],
            unsupported: !1,
            allowedElements: [
              {
                nodeName: ['button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li'],
              },
              { nodeName: 'input', properties: { type: 'button' } },
              { nodeName: 'a', attributes: { href: ze } },
            ],
          },
          table: {
            type: 'structure',
            attributes: {
              allowed: ['aria-colcount', 'aria-rowcount', 'aria-errormessage'],
            },
            owned: { one: ['rowgroup', 'row'] },
            nameFrom: ['author', 'contents'],
            context: null,
            implicit: ['table'],
            unsupported: !1,
          },
          tablist: {
            type: 'composite',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-expanded',
                'aria-level',
                'aria-multiselectable',
                'aria-orientation',
                'aria-errormessage',
              ],
            },
            owned: { all: ['tab'] },
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['ol', 'ul'],
          },
          tabpanel: {
            type: 'widget',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['section'],
          },
          term: {
            type: 'structure',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: null,
            implicit: ['dt'],
            unsupported: !1,
          },
          textbox: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-autocomplete',
                'aria-multiline',
                'aria-readonly',
                'aria-required',
                'aria-placeholder',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: [
              'input[type="text"]',
              'input[type="email"]',
              'input[type="password"]',
              'input[type="tel"]',
              'input[type="url"]',
              'input:not([type])',
              'textarea',
            ],
            unsupported: !1,
          },
          timer: {
            type: 'widget',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
          },
          toolbar: {
            type: 'structure',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-expanded',
                'aria-orientation',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author'],
            context: null,
            implicit: ['menu[type="toolbar"]'],
            unsupported: !1,
            allowedElements: ['ol', 'ul'],
          },
          tooltip: {
            type: 'structure',
            attributes: { allowed: ['aria-expanded', 'aria-errormessage'] },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: null,
            unsupported: !1,
          },
          tree: {
            type: 'composite',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-multiselectable',
                'aria-required',
                'aria-expanded',
                'aria-orientation',
                'aria-errormessage',
              ],
            },
            owned: { all: ['treeitem'] },
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
            allowedElements: ['ol', 'ul'],
          },
          treegrid: {
            type: 'composite',
            attributes: {
              allowed: [
                'aria-activedescendant',
                'aria-colcount',
                'aria-expanded',
                'aria-level',
                'aria-multiselectable',
                'aria-readonly',
                'aria-required',
                'aria-rowcount',
                'aria-orientation',
                'aria-errormessage',
              ],
            },
            owned: { one: ['rowgroup', 'row'] },
            nameFrom: ['author'],
            context: null,
            unsupported: !1,
          },
          treeitem: {
            type: 'widget',
            attributes: {
              allowed: [
                'aria-checked',
                'aria-selected',
                'aria-expanded',
                'aria-level',
                'aria-posinset',
                'aria-setsize',
                'aria-errormessage',
              ],
            },
            owned: null,
            nameFrom: ['author', 'contents'],
            context: ['group', 'tree'],
            unsupported: !1,
            allowedElements: [
              'li',
              { nodeName: 'a', attributes: { href: ze } },
            ],
          },
          widget: { type: 'abstract', unsupported: !1 },
          window: { nameFrom: ['author'], type: 'abstract', unsupported: !1 },
        }),
        (Dt.implicitHtmlRole = Sn),
        (Dt.elementsAllowedNoRole = [
          {
            nodeName: [
              'base',
              'body',
              'caption',
              'col',
              'colgroup',
              'datalist',
              'dd',
              'details',
              'dt',
              'head',
              'html',
              'keygen',
              'label',
              'legend',
              'main',
              'map',
              'math',
              'meta',
              'meter',
              'noscript',
              'optgroup',
              'param',
              'picture',
              'progress',
              'script',
              'source',
              'style',
              'template',
              'textarea',
              'title',
              'track',
            ],
          },
          { nodeName: 'area', attributes: { href: ze } },
          {
            nodeName: 'input',
            properties: {
              type: [
                'color',
                'data',
                'datatime',
                'file',
                'hidden',
                'month',
                'number',
                'password',
                'range',
                'reset',
                'submit',
                'time',
                'week',
              ],
            },
          },
          { nodeName: 'link', attributes: { href: ze } },
          { nodeName: 'menu', attributes: { type: 'context' } },
          {
            nodeName: 'menuitem',
            attributes: { type: ['command', 'checkbox', 'radio'] },
          },
          {
            nodeName: 'select',
            condition: function (t) {
              return (
                t instanceof v.AbstractVirtualNode ||
                  (t = v.utils.getNodeFromTree(t)),
                Number(t.attr('size')) > 1
              );
            },
            properties: { multiple: !0 },
          },
          {
            nodeName: [
              'clippath',
              'cursor',
              'defs',
              'desc',
              'feblend',
              'fecolormatrix',
              'fecomponenttransfer',
              'fecomposite',
              'feconvolvematrix',
              'fediffuselighting',
              'fedisplacementmap',
              'fedistantlight',
              'fedropshadow',
              'feflood',
              'fefunca',
              'fefuncb',
              'fefuncg',
              'fefuncr',
              'fegaussianblur',
              'feimage',
              'femerge',
              'femergenode',
              'femorphology',
              'feoffset',
              'fepointlight',
              'fespecularlighting',
              'fespotlight',
              'fetile',
              'feturbulence',
              'filter',
              'hatch',
              'hatchpath',
              'lineargradient',
              'marker',
              'mask',
              'meshgradient',
              'meshpatch',
              'meshrow',
              'metadata',
              'mpath',
              'pattern',
              'radialgradient',
              'solidcolor',
              'stop',
              'switch',
              'view',
            ],
          },
        ]),
        (Dt.elementsAllowedAnyRole = [
          { nodeName: 'a', attributes: { href: bs } },
          { nodeName: 'img', attributes: { alt: bs } },
          {
            nodeName: [
              'abbr',
              'address',
              'canvas',
              'div',
              'p',
              'pre',
              'blockquote',
              'ins',
              'del',
              'output',
              'span',
              'table',
              'tbody',
              'thead',
              'tfoot',
              'td',
              'em',
              'strong',
              'small',
              's',
              'cite',
              'q',
              'dfn',
              'abbr',
              'time',
              'code',
              'var',
              'samp',
              'kbd',
              'sub',
              'sup',
              'i',
              'b',
              'u',
              'mark',
              'ruby',
              'rt',
              'rp',
              'bdi',
              'bdo',
              'br',
              'wbr',
              'th',
              'tr',
            ],
          },
        ]),
        (Dt.evaluateRoleForElement = {
          A: function (t) {
            var r = t.node,
              a = t.out;
            return r.namespaceURI === 'http://www.w3.org/2000/svg'
              ? !0
              : r.href.length
                ? a
                : !0;
          },
          AREA: function (t) {
            var r = t.node;
            return !r.href;
          },
          BUTTON: function (t) {
            var r = t.node,
              a = t.role,
              n = t.out;
            return r.getAttribute('type') === 'menu' ? a === 'menuitem' : n;
          },
          IMG: function (t) {
            var r = t.node,
              a = t.role,
              n = t.out;
            switch (r.alt) {
              case null:
                return n;
              case '':
                return a === 'presentation' || a === 'none';
              default:
                return a !== 'presentation' && a !== 'none';
            }
          },
          INPUT: function (t) {
            var r = t.node,
              a = t.role,
              n = t.out;
            switch (r.type) {
              case 'button':
              case 'image':
                return n;
              case 'checkbox':
                return a === 'button' && r.hasAttribute('aria-pressed')
                  ? !0
                  : n;
              case 'radio':
                return a === 'menuitemradio';
              case 'text':
                return (
                  a === 'combobox' || a === 'searchbox' || a === 'spinbutton'
                );
              case 'tel':
                return a === 'combobox' || a === 'spinbutton';
              case 'url':
              case 'search':
              case 'email':
                return a === 'combobox';
              default:
                return !1;
            }
          },
          LI: function (t) {
            var r = t.node,
              a = t.out,
              n = v.utils.matchesSelector(r, 'ol li, ul li');
            return n ? a : !0;
          },
          MENU: function (t) {
            var r = t.node;
            return r.getAttribute('type') !== 'context';
          },
          OPTION: function (t) {
            var r = t.node,
              a = v.utils.matchesSelector(
                r,
                'select > option, datalist > option, optgroup > option',
              );
            return !a;
          },
          SELECT: function (t) {
            var r = t.node,
              a = t.role;
            return !r.multiple && r.size <= 1 && a === 'menu';
          },
          SVG: function (t) {
            var r = t.node,
              a = t.out;
            return r.parentNode &&
              r.parentNode.namespaceURI === 'http://www.w3.org/2000/svg'
              ? !0
              : a;
          },
        }),
        (Dt.rolesOfType = {
          widget: [
            'button',
            'checkbox',
            'dialog',
            'gridcell',
            'link',
            'log',
            'marquee',
            'menuitem',
            'menuitemcheckbox',
            'menuitemradio',
            'option',
            'progressbar',
            'radio',
            'scrollbar',
            'searchbox',
            'slider',
            'spinbutton',
            'status',
            'switch',
            'tab',
            'tabpanel',
            'textbox',
            'timer',
            'tooltip',
            'tree',
            'treeitem',
          ],
        });
      var ys = Dt;
      function zg(e) {
        var t = null,
          r = ys.role[e];
        return r && r.implicit && (t = vt(r.implicit)), t;
      }
      var Ug = zg;
      function $g(e) {
        return !!vi(e).length;
      }
      var Ea = $g;
      function bi(e) {
        var t,
          r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          a = r.popupRoles,
          n = ue(e);
        if (
          (((t = a) !== null && t !== void 0) ||
            (a = _l['aria-haspopup'].values),
          !a.includes(n))
        )
          return !1;
        var i = Wg(e);
        if (Ds(i)) return !0;
        var o = e.props.id;
        if (!o) return !1;
        if (!e.actualNode)
          throw new Error(
            'Unable to determine combobox popup without an actualNode',
          );
        var l = _r(e.actualNode),
          u = l.querySelectorAll(
            '[aria-owns~="'
              .concat(
                o,
                `"][role~="combobox"]:not(select),
     [aria-controls~="`,
              )
              .concat(o, '"][role~="combobox"]:not(select)'),
          );
        return Array.from(u).some(Ds);
      }
      var Ds = function (t) {
        return t && ue(t) === 'combobox';
      };
      function Wg(e) {
        for (; (e = e.parent); )
          if (ue(e, { noPresentational: !0 }) !== null) return e;
        return null;
      }
      function Gg(e) {
        return (e = N(e)), da(e);
      }
      var ws = Gg;
      function Yg(e) {
        var t = ce.ariaRoles[e];
        return !t || !Array.isArray(t.requiredAttrs) ? [] : re(t.requiredAttrs);
      }
      var _s = Yg;
      function Kg(e) {
        var t = ce.ariaRoles[e];
        return !t || !Array.isArray(t.requiredContext)
          ? null
          : re(t.requiredContext);
      }
      var yi = Kg;
      function Xg(e) {
        var t = ce.ariaRoles[e];
        return !t || !Array.isArray(t.requiredOwned)
          ? null
          : re(t.requiredOwned);
      }
      var Di = Xg;
      function Jg(e, t) {
        e = e instanceof Q ? e : N(e);
        var r,
          a,
          n = e.attr(t),
          i = ce.ariaAttrs[t];
        if (!i || (i.allowEmpty && (!n || n.trim() === ''))) return !0;
        switch (i.type) {
          case 'boolean':
            return ['true', 'false'].includes(n.toLowerCase());
          case 'nmtoken':
            return typeof n == 'string' && i.values.includes(n.toLowerCase());
          case 'nmtokens':
            return (
              (a = He(n)),
              a.reduce(function (u, s) {
                return u && i.values.includes(s);
              }, a.length !== 0)
            );
          case 'idref':
            try {
              var o = je(e.actualNode);
              return !!(n && o.getElementById(n));
            } catch {
              throw new TypeError(
                'Cannot resolve id references for partial DOM',
              );
            }
          case 'idrefs':
            return ut(e, t).some(function (u) {
              return !!u;
            });
          case 'string':
            return n.trim() !== '';
          case 'decimal':
            return (
              (r = n.match(/^[-+]?([0-9]*)\.?([0-9]*)$/)),
              !!(r && (r[1] || r[2]))
            );
          case 'int':
            var l = typeof i.minValue < 'u' ? i.minValue : -1 / 0;
            return /^[-+]?[0-9]+$/.test(n) && parseInt(n) >= l;
        }
      }
      var xs = Jg;
      function Qg(e) {
        var t = ce.ariaAttrs[e];
        return !!t;
      }
      var Mr = Qg;
      function Zg(e, t, r) {
        var a = He(r.attr('role')).filter(function (n) {
          return pt(n) === 'abstract';
        });
        return a.length > 0 ? (this.data(a), !0) : !1;
      }
      var eb = Zg;
      function tb(e, t, r) {
        var a = [],
          n = ue(r),
          i = r.attrNames,
          o = ms(n);
        Array.isArray(t[n]) && (o = Ir(t[n].concat(o)));
        var l = oe.get('aria-allowed-attr-table', function () {
          return new WeakMap();
        });
        function u() {
          if (r.parent && n === 'row') {
            var m = Ke(
                r,
                'table, [role="treegrid"], [role="table"], [role="grid"]',
              ),
              b = l.get(m);
            if (
              (m && !b && ((b = ue(m)), l.set(m, b)),
              ['table', 'grid'].includes(b) && n === 'row')
            )
              return !0;
          }
        }
        var s = Array.isArray(t.validTreeRowAttrs) ? t.validTreeRowAttrs : [],
          c = {};
        if (
          (s.forEach(function (m) {
            c[m] = u;
          }),
          o)
        )
          for (var d = 0; d < i.length; d++) {
            var f,
              p = i[d];
            ((Mr(p) && (f = c[p]) !== null && f !== void 0 && f.call(c)) ||
              (Mr(p) && !o.includes(p))) &&
              a.push(p + '="' + r.attr(p) + '"');
          }
        return a.length
          ? (this.data(a), !ii(r) && !n && !Fe(r) ? void 0 : !1)
          : !0;
      }
      function rb(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = t.allowImplicit,
          n = a === void 0 ? !0 : a,
          i = t.ignoredTags,
          o = i === void 0 ? [] : i,
          l = r.props.nodeName;
        if (
          o
            .map(function (s) {
              return s.toLowerCase();
            })
            .includes(l)
        )
          return !0;
        var u = gs(r, n);
        return u.length ? (this.data(u), _e(r) ? !1 : void 0) : !0;
      }
      var ab = rb;
      function nb(e, t, r) {
        return r.attr('aria-busy') === 'true';
      }
      function ib(e, t, r) {
        t = Array.isArray(t) ? t : [];
        var a = r.attr('aria-errormessage'),
          n = r.hasAttr('aria-errormessage'),
          i = r.attr('aria-invalid'),
          o = r.hasAttr('aria-invalid');
        if (!o || i === 'false') return !0;
        function l(u) {
          if (u.trim() === '')
            return ce.ariaAttrs['aria-errormessage'].allowEmpty;
          var s;
          try {
            s = u && ut(r, 'aria-errormessage')[0];
          } catch {
            this.data({ messageKey: 'idrefs', values: He(u) });
            return;
          }
          if (s)
            return _e(s)
              ? s.getAttribute('role') === 'alert' ||
                  s.getAttribute('aria-live') === 'assertive' ||
                  s.getAttribute('aria-live') === 'polite' ||
                  He(r.attr('aria-describedby')).indexOf(u) > -1
              : (this.data({ messageKey: 'hidden', values: He(u) }), !1);
        }
        return t.indexOf(a) === -1 && n
          ? (this.data(He(a)), l.call(this, a))
          : !0;
      }
      var ob = ib;
      function lb(e, t, r) {
        return r.attr('aria-hidden') !== 'true';
      }
      var ub = lb;
      function sb(e, t, r) {
        var a = r.attr('aria-level'),
          n = parseInt(a, 10);
        if (!(n > 6)) return !0;
      }
      var cb = sb;
      function db(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = (t == null ? void 0 : t.elementsAllowedAriaLabel) || [],
          n = r.props.nodeName,
          i = ue(r, { chromium: !0 }),
          o = fb(i, n, a),
          l = o.filter(function (c) {
            return r.attrNames.includes(c) ? J(r.attr(c)) !== '' : !1;
          });
        if (l.length === 0) return !1;
        var u = r.hasAttr('role') ? 'hasRole' : 'noRole';
        (u += l.length > 1 ? 'Plural' : 'Singular'),
          this.data({ role: i, nodeName: n, messageKey: u, prohibited: l });
        var s = Et(r, { subtreeDescendant: !0 });
        if (J(s) === '') return !0;
      }
      function fb(e, t, r) {
        var a = ce.ariaRoles[e];
        return a
          ? a.prohibitedAttrs || []
          : e || r.includes(t)
            ? []
            : ['aria-label', 'aria-labelledby'];
      }
      var Es = {};
      De(Es, {
        getAriaRolesByType: function () {
          return or;
        },
        getAriaRolesSupportingNameFromContent: function () {
          return gi;
        },
        getElementSpec: function () {
          return Vt;
        },
        getElementsByContentType: function () {
          return Tn;
        },
        getGlobalAriaAttrs: function () {
          return Bt;
        },
        implicitHtmlRoles: function () {
          return Sn;
        },
      });
      function pb(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = ge(r),
          n = r.attrNames,
          i = _s(a);
        if (
          (Array.isArray(t[a]) && (i = Ir(t[a], i)),
          !a || !n.length || !i.length || mb(r, a) || vb(r, a))
        )
          return !0;
        var o = Vt(r),
          l = i.filter(function (u) {
            return !r.attr(u) && !hb(o, u);
          });
        return l.length ? (this.data(l), !1) : !0;
      }
      function mb(e, t) {
        return t === 'separator' && !Fe(e);
      }
      function hb(e, t) {
        var r;
        return (
          ((r = e.implicitAttrs) === null || r === void 0 ? void 0 : r[t]) !==
          void 0
        );
      }
      function vb(e, t) {
        return t === 'combobox' && e.attr('aria-expanded') === 'false';
      }
      function gb(e, t, r) {
        var a = t && Array.isArray(t.reviewEmpty) ? t.reviewEmpty : [],
          n = ge(r, { dpub: !0 }),
          i = Di(n);
        if (i === null) return !0;
        var o = bb(r, i),
          l = o.filter(function (s) {
            var c = s.role;
            return !i.includes(c);
          });
        if (l.length)
          return (
            this.relatedNodes(
              l.map(function (s) {
                var c = s.ownedElement;
                return c;
              }),
            ),
            this.data({
              messageKey: 'unallowed',
              values: l
                .map(function (s) {
                  var c = s.ownedElement,
                    d = s.attr;
                  return wb(c, d);
                })
                .filter(function (s, c, d) {
                  return d.indexOf(s) === c;
                })
                .join(', '),
            }),
            !1
          );
        var u = yb(r, n, i, o);
        if (!u) return !0;
        if (
          (this.data(u),
          !(
            a.includes(n) &&
            !Rr(r, !1, !0) &&
            !o.length &&
            (!r.hasAttr('aria-owns') || !ut(e, 'aria-owns').length)
          ))
        )
          return !1;
      }
      function bb(e, t) {
        for (
          var r = [],
            a = Tr(e),
            n = function (u) {
              var s = a[u];
              if (s.props.nodeType !== 1) return 'continue';
              var c = ue(s, { noPresentational: !0 }),
                d = Db(s),
                f = !!d || Fe(s);
              !_e(s) ||
              (!c && !f) ||
              (['group', 'rowgroup'].includes(c) &&
                t.some(function (p) {
                  return p === c;
                }))
                ? a.push.apply(a, re(s.children))
                : (c || f) &&
                  r.push({ role: c, attr: d || 'tabindex', ownedElement: s });
            },
            i = 0;
          i < a.length;
          i++
        )
          var o = n(i);
        return r;
      }
      function yb(e, t, r, a) {
        for (
          var n = function (u) {
              var s = a[u].role;
              if (r.includes(s))
                return (
                  (r = r.filter(function (c) {
                    return c !== s;
                  })),
                  { v: null }
                );
            },
            i = 0;
          i < a.length;
          i++
        ) {
          var o = n(i);
          if (I(o) === 'object') return o.v;
        }
        return r.length ? r : null;
      }
      function Db(e) {
        return Bt().find(function (t) {
          return e.hasAttr(t);
        });
      }
      function wb(e, t) {
        var r = e.props,
          a = r.nodeName,
          n = r.nodeType;
        if (n === 3) return '#text';
        var i = ge(e, { dpub: !0 });
        return i ? '[role='.concat(i, ']') : t ? a + '['.concat(t, ']') : a;
      }
      function As(e, t, r, a) {
        var n = ge(e);
        if ((r || (r = yi(n)), !r)) return null;
        for (var i = r.includes('group'), o = a ? e : e.parent; o; ) {
          var l = ue(o, { noPresentational: !0 });
          if (!l) o = o.parent;
          else if (l === 'group' && i)
            t.includes(n) && r.push(n),
              (r = r.filter(function (u) {
                return u !== 'group';
              })),
              (o = o.parent);
          else return r.includes(l) ? null : r;
        }
        return r;
      }
      function _b(e) {
        for (var t = [], r = null; e; ) {
          if (e.getAttribute('id')) {
            var a = Ae(e.getAttribute('id')),
              n = je(e);
            (r = n.querySelector('[aria-owns~='.concat(a, ']'))),
              r && t.push(r);
          }
          e = e.parentElement;
        }
        return t.length ? t : null;
      }
      function xb(e, t, r) {
        var a = t && Array.isArray(t.ownGroupRoles) ? t.ownGroupRoles : [],
          n = As(r, a);
        if (!n) return !0;
        var i = _b(e);
        if (i) {
          for (var o = 0, l = i.length; o < l; o++)
            if (((n = As(N(i[o]), a, n, !0)), !n)) return !0;
        }
        return this.data(n), !1;
      }
      var Eb = xb;
      function Ab(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = ue(r),
          n = t.supportedRoles || [];
        if (n.includes(a)) return !0;
        if (!(a && a !== 'presentation' && a !== 'none')) return !1;
      }
      var Fb = Ab;
      function Cb(e, t, r) {
        var a = r.attrNames.filter(function (n) {
          var i = ce.ariaAttrs[n];
          if (!Mr(n)) return !1;
          var o = i.unsupported;
          return I(o) !== 'object' ? !!o : !Cr(e, o.exceptions);
        });
        return a.length ? (this.data(a), !0) : !1;
      }
      var Tb = Cb;
      function kb(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = [],
          n = /^aria-/;
        return (
          r.attrNames.forEach(function (i) {
            t.indexOf(i) === -1 && n.test(i) && !Mr(i) && a.push(i);
          }),
          a.length ? (this.data(a), !1) : !0
        );
      }
      var Rb = kb;
      function Sb(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = '',
          n = '',
          i = [],
          o = /^aria-/,
          l = ['aria-errormessage'],
          u = {
            'aria-controls': function () {
              return (
                r.attr('aria-expanded') !== 'false' &&
                r.attr('aria-selected') !== 'false'
              );
            },
            'aria-current': function (c) {
              c ||
                ((a = 'aria-current="'.concat(r.attr('aria-current'), '"')),
                (n = 'ariaCurrent'));
            },
            'aria-owns': function () {
              return r.attr('aria-expanded') !== 'false';
            },
            'aria-describedby': function (c) {
              c ||
                ((a = 'aria-describedby="'.concat(
                  r.attr('aria-describedby'),
                  '"',
                )),
                (n =
                  v._tree && v._tree[0]._hasShadowRoot
                    ? 'noIdShadow'
                    : 'noId'));
            },
            'aria-labelledby': function (c) {
              c ||
                ((a = 'aria-labelledby="'.concat(
                  r.attr('aria-labelledby'),
                  '"',
                )),
                (n =
                  v._tree && v._tree[0]._hasShadowRoot
                    ? 'noIdShadow'
                    : 'noId'));
            },
          };
        if (
          (r.attrNames.forEach(function (s) {
            if (!(l.includes(s) || t.includes(s) || !o.test(s))) {
              var c,
                d = r.attr(s);
              try {
                c = xs(r, s);
              } catch {
                (a = ''.concat(s, '="').concat(d, '"')), (n = 'idrefs');
                return;
              }
              (!u[s] || u[s](c)) &&
                !c &&
                (d === '' && !Ob(s)
                  ? ((a = s), (n = 'empty'))
                  : i.push(''.concat(s, '="').concat(d, '"')));
            }
          }),
          i.length)
        )
          return this.data(i), !1;
        if (a) {
          this.data({ messageKey: n, needsReview: a });
          return;
        }
        return !0;
      }
      function Ob(e) {
        var t;
        return (
          ((t = ce.ariaAttrs[e]) === null || t === void 0 ? void 0 : t.type) ===
          'string'
        );
      }
      function Ib(e, t, r) {
        var a = ue(r, { dpub: !0, fallback: !0 }),
          n = ce.ariaRoles[a];
        return n != null && n.deprecated ? (this.data(a), !0) : !1;
      }
      function Pb(e, t) {
        var r = ct(e);
        return (
          !r &&
          t.length === 2 &&
          t.includes('none') &&
          t.includes('presentation')
        );
      }
      function Mb(e, t, r) {
        var a = He(r.attr('role'));
        return a.length <= 1 ? !1 : Pb(r, a) ? void 0 : !0;
      }
      var Nb = Mb;
      function qb(e, t, r) {
        var a = Bt().filter(function (n) {
          return r.hasAttr(n);
        });
        return this.data(a), a.length > 0;
      }
      var Bb = qb;
      function Lb(e) {
        var t = e.getAttribute('role');
        if (t === null) return !1;
        var r = pt(t);
        return r === 'widget' || r === 'composite';
      }
      var Vb = Lb;
      function jb(e, t, r) {
        var a = He(r.attr('role')),
          n = a.every(function (i) {
            return !rr(i, { allowAbstract: !0 });
          });
        return n ? (this.data(a), !0) : !1;
      }
      var Hb = jb;
      function zb(e, t, r) {
        return Fe(r);
      }
      var Ub = zb;
      function $b(e, t, r) {
        var a = ue(r, { noImplicit: !0 });
        this.data(a);
        var n, i;
        try {
          (n = J(In(r)).toLowerCase()), (i = J(Ge(r)).toLowerCase());
        } catch {
          return;
        }
        if (!i && !n) return !1;
        if (!(!i && n) && i.includes(n)) return !1;
      }
      var Wb = $b;
      function Gb(e, t, r) {
        var a = ue(r, { dpub: !0, fallback: !0 }),
          n = Cn(a);
        return n && this.data(a), n;
      }
      var Yb = Gb,
        Kb = { ARTICLE: !0, ASIDE: !0, NAV: !0, SECTION: !0 },
        Xb = {
          application: !0,
          article: !0,
          banner: !1,
          complementary: !0,
          contentinfo: !0,
          form: !0,
          main: !0,
          navigation: !0,
          region: !0,
          search: !1,
        };
      function Jb(e) {
        var t = e.nodeName.toUpperCase();
        return Kb[t] || !1;
      }
      function Qb(e, t) {
        var r = ge(e);
        return (r && (Xb[r] || t.roles.includes(r))) || !1;
      }
      function Zb(e, t) {
        return Qb(e, t) || Jb(e);
      }
      var ey = Zb,
        Fs = {};
      De(Fs, {
        Color: function () {
          return Te;
        },
        centerPointOfRect: function () {
          return ry;
        },
        elementHasImage: function () {
          return ha;
        },
        elementIsDistinct: function () {
          return Ts;
        },
        filteredRectStack: function () {
          return oy;
        },
        flattenColors: function () {
          return ht;
        },
        flattenShadowColors: function () {
          return _i;
        },
        getBackgroundColor: function () {
          return qr;
        },
        getBackgroundStack: function () {
          return xi;
        },
        getContrast: function () {
          return lr;
        },
        getForegroundColor: function () {
          return Fa;
        },
        getOwnBackgroundColor: function () {
          return Ht;
        },
        getRectStack: function () {
          return ks;
        },
        getStackingContext: function () {
          return Ei;
        },
        getTextShadowColors: function () {
          return Aa;
        },
        hasValidContrastRatio: function () {
          return Fy;
        },
        incompleteData: function () {
          return qe;
        },
        stackingContextToColor: function () {
          return Nr;
        },
      });
      function ty(e) {
        if (!(e.left > y.innerWidth) && !(e.top > y.innerHeight)) {
          var t = Math.min(Math.ceil(e.left + e.width / 2), y.innerWidth - 1),
            r = Math.min(Math.ceil(e.top + e.height / 2), y.innerHeight - 1);
          return { x: t, y: r };
        }
      }
      var ry = ty;
      function Cs(e) {
        return e
          .getPropertyValue('font-family')
          .split(/[,;]/g)
          .map(function (t) {
            return t.trim().toLowerCase();
          });
      }
      function ay(e, t) {
        var r = y.getComputedStyle(e);
        if (r.getPropertyValue('background-image') !== 'none') return !0;
        var a = ['border-bottom', 'border-top', 'outline'].reduce(function (
          l,
          u,
        ) {
          var s = new Te();
          return (
            s.parseString(r.getPropertyValue(u + '-color')),
            l ||
              (r.getPropertyValue(u + '-style') !== 'none' &&
                parseFloat(r.getPropertyValue(u + '-width')) > 0 &&
                s.alpha !== 0)
          );
        }, !1);
        if (a) return !0;
        var n = y.getComputedStyle(t);
        if (Cs(r)[0] !== Cs(n)[0]) return !0;
        var i = [
            'text-decoration-line',
            'text-decoration-style',
            'font-weight',
            'font-style',
            'font-size',
          ].reduce(function (l, u) {
            return l || r.getPropertyValue(u) !== n.getPropertyValue(u);
          }, !1),
          o = r.getPropertyValue('text-decoration');
        return (
          o.split(' ').length < 3 &&
            (i = i || o !== n.getPropertyValue('text-decoration')),
          i
        );
      }
      var Ts = ay;
      function ny(e) {
        var t = Dl(e),
          r = Hn(e);
        return !r || r.length <= 1
          ? [t]
          : r.some(function (a) {
                return a === void 0;
              })
            ? null
            : (r.splice(0, 0, t), r);
      }
      var ks = ny;
      function iy(e) {
        var t = ks(e);
        if (t && t.length === 1) return t[0];
        if (t && t.length > 1) {
          var r = t.shift(),
            a;
          return (
            t.forEach(function (n, i) {
              if (i !== 0) {
                var o = t[i - 1],
                  l = t[i];
                a =
                  o.every(function (u, s) {
                    return u === l[s];
                  }) || r.includes(e);
              }
            }),
            a ? t[0] : (qe.set('bgColor', 'elmPartiallyObscuring'), null)
          );
        }
        return qe.set('bgColor', 'outsideViewport'), null;
      }
      var oy = iy;
      function ly(e, t, r) {
        return Math.min(Math.max(t, e), r);
      }
      var uy = {
        normal: function (t, r) {
          return r;
        },
        multiply: function (t, r) {
          return r * t;
        },
        screen: function (t, r) {
          return t + r - t * r;
        },
        overlay: function (t, r) {
          return this['hard-light'](r, t);
        },
        darken: function (t, r) {
          return Math.min(t, r);
        },
        lighten: function (t, r) {
          return Math.max(t, r);
        },
        'color-dodge': function (t, r) {
          return t === 0 ? 0 : r === 1 ? 1 : Math.min(1, t / (1 - r));
        },
        'color-burn': function (t, r) {
          return t === 1 ? 1 : r === 0 ? 0 : 1 - Math.min(1, (1 - t) / r);
        },
        'hard-light': function (t, r) {
          return r <= 0.5 ? this.multiply(t, 2 * r) : this.screen(t, 2 * r - 1);
        },
        'soft-light': function (t, r) {
          if (r <= 0.5) return t - (1 - 2 * r) * t * (1 - t);
          var a = t <= 0.25 ? ((16 * t - 12) * t + 4) * t : Math.sqrt(t);
          return t + (2 * r - 1) * (a - t);
        },
        difference: function (t, r) {
          return Math.abs(t - r);
        },
        exclusion: function (t, r) {
          return t + r - 2 * t * r;
        },
      };
      function wi(e, t, r, a, n) {
        return (
          t * (1 - a) * e +
          t * a * uy[n](r / 255, e / 255) * 255 +
          (1 - t) * a * r
        );
      }
      function sy(e, t) {
        var r =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : 'normal',
          a = wi(e.red, e.alpha, t.red, t.alpha, r),
          n = wi(e.green, e.alpha, t.green, t.alpha, r),
          i = wi(e.blue, e.alpha, t.blue, t.alpha, r),
          o = ly(e.alpha + t.alpha * (1 - e.alpha), 0, 1);
        if (o === 0) return new Te(a, n, i, o);
        var l = Math.round(a / o),
          u = Math.round(n / o),
          s = Math.round(i / o);
        return new Te(l, u, s, o);
      }
      var ht = sy;
      function _i(e, t) {
        var r = e.alpha,
          a = (1 - r) * t.red + r * e.red,
          n = (1 - r) * t.green + r * e.green,
          i = (1 - r) * t.blue + r * e.blue,
          o = e.alpha + t.alpha * (1 - e.alpha);
        return new Te(a, n, i, o);
      }
      function xi(e) {
        for (
          var t = Hn(e).map(function (n) {
              return (n = bu(n, e)), (n = cy(n)), n;
            }),
            r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (a[0] !== e) return qe.set('bgColor', 'bgOverlap'), null;
          if (r !== 0 && !dy(a, t[0]))
            return qe.set('bgColor', 'elmPartiallyObscuring'), null;
        }
        return t[0] || null;
      }
      function cy(e) {
        var t = e.indexOf(k.body),
          r = e,
          a = Ht(y.getComputedStyle(k.documentElement));
        if (t > 1 && a.alpha === 0 && !ha(k.documentElement)) {
          t > 1 && (r.splice(t, 1), r.push(k.body));
          var n = r.indexOf(k.documentElement);
          n > 0 && (r.splice(n, 1), r.push(k.documentElement));
        }
        return r;
      }
      function dy(e, t) {
        if (e === t) return !0;
        if (e === null || t === null || e.length !== t.length) return !1;
        for (var r = 0; r < e.length; ++r) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function fy(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.minRatio,
          a = t.maxRatio,
          n = y.getComputedStyle(e),
          i = n.getPropertyValue('text-shadow');
        if (i === 'none') return [];
        var o = n.getPropertyValue('font-size'),
          l = parseInt(o);
        fe(isNaN(l) === !1, 'Unable to determine font-size value '.concat(o));
        var u = [],
          s = py(i);
        return (
          s.forEach(function (c) {
            var d = c.colorStr,
              f = c.pixels;
            d = d || n.getPropertyValue('color');
            var p = ve(f, 3),
              m = p[0],
              b = p[1],
              D = p[2],
              h = D === void 0 ? 0 : D;
            if ((!r || h >= l * r) && (!a || h < l * a)) {
              var g = my({
                colorStr: d,
                offsetY: m,
                offsetX: b,
                blurRadius: h,
                fontSize: l,
              });
              u.push(g);
            }
          }),
          u
        );
      }
      function py(e) {
        var t = { pixels: [] },
          r = e.trim(),
          a = [t];
        if (!r) return [];
        for (; r; ) {
          var n =
              r.match(/^rgba?\([0-9,.\s]+\)/i) ||
              r.match(/^[a-z]+/i) ||
              r.match(/^#[0-9a-f]+/i),
            i = r.match(/^([0-9.-]+)px/i) || r.match(/^(0)/);
          if (n)
            fe(
              !t.colorStr,
              'Multiple colors identified in text-shadow: '.concat(e),
            ),
              (r = r.replace(n[0], '').trim()),
              (t.colorStr = n[0]);
          else if (i) {
            fe(
              t.pixels.length < 3,
              'Too many pixel units in text-shadow: '.concat(e),
            ),
              (r = r.replace(i[0], '').trim());
            var o = parseFloat((i[1][0] === '.' ? '0' : '') + i[1]);
            t.pixels.push(o);
          } else if (r[0] === ',')
            fe(
              t.pixels.length >= 2,
              'Missing pixel value in text-shadow: '.concat(e),
            ),
              (t = { pixels: [] }),
              a.push(t),
              (r = r.substr(1).trim());
          else throw new Error('Unable to process text-shadows: '.concat(e));
        }
        return a;
      }
      function my(e) {
        var t = e.colorStr,
          r = e.offsetX,
          a = e.offsetY,
          n = e.blurRadius,
          i = e.fontSize;
        if (r > n || a > n) return new Te(0, 0, 0, 0);
        var o = new Te();
        return o.parseString(t), (o.alpha *= hy(n, i)), o;
      }
      function hy(e, t) {
        if (e === 0) return 1;
        var r = e / t;
        return 0.185 / (r + 0.4);
      }
      var Aa = fy;
      function Ei(e, t) {
        var r,
          a = N(e);
        if (a._stackingContext) return a._stackingContext;
        var n = [],
          i = new Map();
        return (
          (t = (r = t) !== null && r !== void 0 ? r : xi(e)),
          t.forEach(function (o) {
            var l,
              u = N(o),
              s = by(u),
              c = u._stackingOrder.filter(function (p) {
                var m = p.vNode;
                return !!m;
              });
            c.forEach(function (p, m) {
              var b,
                D = p.vNode,
                h = (b = c[m - 1]) === null || b === void 0 ? void 0 : b.vNode,
                g = Ss(i, D, h);
              m === 0 && !i.get(D) && n.unshift(g), i.set(D, g);
            });
            var d =
                (l = c[c.length - 1]) === null || l === void 0
                  ? void 0
                  : l.vNode,
              f = Ss(i, u, d);
            c.length || n.unshift(f), (f.bgColor = s);
          }),
          (a._stackingContext = n),
          n
        );
      }
      function Nr(e) {
        var t;
        if (!((t = e.descendants) !== null && t !== void 0 && t.length)) {
          var r = e.bgColor;
          return (r.alpha *= e.opacity), { color: r, blendMode: e.blendMode };
        }
        var a = e.descendants.reduce(vy, Rs()),
          n = ht(a, e.bgColor, e.descendants[0].blendMode);
        return (n.alpha *= e.opacity), { color: n, blendMode: e.blendMode };
      }
      function vy(e, t) {
        var r;
        e instanceof Te ? (r = e) : (r = Nr(e).color);
        var a = Nr(t).color;
        return ht(a, r, t.blendMode);
      }
      function Rs(e, t) {
        var r;
        return {
          vNode: e,
          ancestor: t,
          opacity: parseFloat(
            (r =
              e == null
                ? void 0
                : e.getComputedStylePropertyValue('opacity')) !== null &&
              r !== void 0
              ? r
              : 1,
          ),
          bgColor: new Te(0, 0, 0, 0),
          blendMode: gy(
            e == null
              ? void 0
              : e.getComputedStylePropertyValue('mix-blend-mode'),
          ),
          descendants: [],
        };
      }
      function gy(e) {
        return e || void 0;
      }
      function Ss(e, t, r) {
        var a,
          n = e.get(r),
          i = (a = e.get(t)) !== null && a !== void 0 ? a : Rs(t, n);
        return (
          n &&
            r !== t &&
            !n.descendants.includes(i) &&
            n.descendants.unshift(i),
          i
        );
      }
      function by(e) {
        var t = new Te();
        return (
          t.parseString(e.getComputedStylePropertyValue('background-color')), t
        );
      }
      function qr(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
          r =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : 0.1,
          a = N(e),
          n = a._cache.getBackgroundColor;
        if (n)
          return (
            t.push.apply(t, re(n.bgElms)),
            qe.set('bgColor', n.incompleteData),
            n.bgColor
          );
        var i = yy(e, t, r);
        return (
          (a._cache.getBackgroundColor = {
            bgColor: i,
            bgElms: t,
            incompleteData: qe.get('bgColor'),
          }),
          i
        );
      }
      function yy(e, t, r) {
        var a,
          n = xi(e);
        if (!n) return null;
        var i = jn(e),
          o = Aa(e, { minRatio: r });
        o.length && (o = [{ color: o.reduce(_i) }]);
        for (var l = 0; l < n.length; l++) {
          var u = n[l],
            s = y.getComputedStyle(u);
          if (ha(u, s)) return t.push(u), null;
          var c = Ht(s);
          if (c.alpha !== 0) {
            if (s.getPropertyValue('display') !== 'inline' && !Os(u, i))
              return t.push(u), qe.set('bgColor', 'elmPartiallyObscured'), null;
            if ((t.push(u), c.alpha === 1)) break;
          }
        }
        var d = Ei(e, n);
        o = d.map(Nr).concat(o);
        var f = Dy(e, n.includes(k.body));
        if (((a = o).unshift.apply(a, re(f)), o.length === 0))
          return new Te(255, 255, 255, 1);
        var p = o.reduce(function (m, b) {
          return ht(b.color, m.color instanceof Te ? m.color : m, b.blendMode);
        });
        return ht(
          p.color instanceof Te ? p.color : p,
          new Te(255, 255, 255, 1),
        );
      }
      function Os(e, t) {
        t = Array.isArray(t) ? t : [t];
        var r = e.getBoundingClientRect(),
          a = r.right,
          n = r.bottom,
          i = y.getComputedStyle(e),
          o = i.getPropertyValue('overflow');
        return (
          (['scroll', 'auto'].includes(o) || e instanceof y.HTMLHtmlElement) &&
            ((a = r.left + e.scrollWidth), (n = r.top + e.scrollHeight)),
          t.every(function (l) {
            return (
              l.top >= r.top &&
              l.bottom <= n &&
              l.left >= r.left &&
              l.right <= a
            );
          })
        );
      }
      function Is(e) {
        return e || void 0;
      }
      function Dy(e, t) {
        var r = [];
        if (!t) {
          var a = k.documentElement,
            n = k.body,
            i = y.getComputedStyle(a),
            o = y.getComputedStyle(n),
            l = Ht(i),
            u = Ht(o),
            s = u.alpha !== 0 && Os(n, e.getBoundingClientRect());
          ((u.alpha !== 0 && l.alpha === 0) || (s && u.alpha !== 1)) &&
            r.unshift({
              color: u,
              blendMode: Is(o.getPropertyValue('mix-blend-mode')),
            }),
            l.alpha !== 0 &&
              (!s || (s && u.alpha !== 1)) &&
              r.unshift({
                color: l,
                blendMode: Is(i.getPropertyValue('mix-blend-mode')),
              });
        }
        return r;
      }
      function wy(e, t) {
        if (!t || !e) return null;
        t.alpha < 1 && (t = ht(t, e));
        var r = e.getRelativeLuminance(),
          a = t.getRelativeLuminance();
        return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
      }
      var lr = wy;
      function Fa(e, t, r) {
        for (
          var a,
            n =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : {},
            i = y.getComputedStyle(e),
            o = [
              function () {
                return xy(i, n);
              },
              function () {
                return _y(i);
              },
              function () {
                return Aa(e, { minRatio: 0 });
              },
            ],
            l = [],
            u = 0,
            s = o;
          u < s.length;
          u++
        ) {
          var c = s[u],
            d = c();
          if (d && ((l = l.concat(d)), d.alpha === 1)) break;
        }
        var f = l.reduce(function (D, h) {
          return ht(D, h);
        });
        if (
          (((a = r) !== null && a !== void 0) || (r = qr(e, [])), r === null)
        ) {
          var p = qe.get('bgColor');
          return qe.set('fgColor', p), null;
        }
        var m = Ei(e),
          b = Ps(m, e);
        return ht(Ey(f, b, m), new Te(255, 255, 255, 1));
      }
      function _y(e) {
        return new Te().parseString(
          e.getPropertyValue('-webkit-text-fill-color') ||
            e.getPropertyValue('color'),
        );
      }
      function xy(e, t) {
        var r = t.textStrokeEmMin,
          a = r === void 0 ? 0 : r,
          n = parseFloat(e.getPropertyValue('-webkit-text-stroke-width'));
        if (n === 0) return null;
        var i = e.getPropertyValue('font-size'),
          o = n / parseFloat(i);
        if (isNaN(o) || o < a) return null;
        var l = e.getPropertyValue('-webkit-text-stroke-color');
        return new Te().parseString(l);
      }
      function Ey(e, t, r) {
        for (; t; ) {
          var a;
          if (t.opacity === 1 && t.ancestor) {
            t = t.ancestor;
            continue;
          }
          e.alpha *= t.opacity;
          var n =
            ((a = t.ancestor) === null || a === void 0
              ? void 0
              : a.descendants) || r;
          t.opacity !== 1 && (n = n.slice(0, n.indexOf(t)));
          var i = n.map(Nr);
          if (!i.length) {
            t = t.ancestor;
            continue;
          }
          var o = i.reduce(
            function (l, u) {
              return ht(u.color, l.color instanceof Te ? l.color : l);
            },
            { color: new Te(0, 0, 0, 0), blendMode: 'normal' },
          );
          (e = ht(e, o)), (t = t.ancestor);
        }
        return e;
      }
      function Ps(e, t) {
        var r = Ye(e),
          a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n,
              i = a.value;
            if (
              ((n = i.vNode) === null || n === void 0
                ? void 0
                : n.actualNode) === t
            )
              return i;
            var o = Ps(i.descendants, t);
            if (o) return o;
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
      }
      function Ay(e, t, r, a) {
        var n = lr(e, t),
          i =
            (a && Math.ceil(r * 72) / 96 < 14) ||
            (!a && Math.ceil(r * 72) / 96 < 18),
          o = i ? 4.5 : 3;
        return { isValid: n > o, contrastRatio: n, expectedContrastRatio: o };
      }
      var Fy = Ay;
      function Cy(e, t, r) {
        var a = t.ignoreUnicode,
          n = t.ignoreLength,
          i = t.ignorePseudo,
          o = t.boldValue,
          l = t.boldTextPt,
          u = t.largeTextPt,
          s = t.contrastRatio,
          c = t.shadowOutlineEmMax,
          d = t.pseudoSizeThreshold;
        if (!Xe(e)) return this.data({ messageKey: 'hidden' }), !0;
        var f = dt(r, !1, !0);
        if (a && ky(f)) {
          this.data({ messageKey: 'nonBmp' });
          return;
        }
        var p = y.getComputedStyle(e),
          m = parseFloat(p.getPropertyValue('font-size')),
          b = p.getPropertyValue('font-weight'),
          D = parseFloat(b) >= o || b === 'bold',
          h = Math.ceil(m * 72) / 96,
          g = (D && h < l) || (!D && h < u),
          x = g ? s.normal : s.large,
          E = x.expected,
          C = x.minThreshold,
          P = x.maxThreshold,
          B = Ty(r, { ignorePseudo: i, pseudoSizeThreshold: d });
        if (B) {
          this.data({
            fontSize: ''
              .concat(((m * 72) / 96).toFixed(1), 'pt (')
              .concat(m, 'px)'),
            fontWeight: D ? 'bold' : 'normal',
            messageKey: 'pseudoContent',
            expectedContrastRatio: E + ':1',
          }),
            this.relatedNodes(B.actualNode);
          return;
        }
        var V = [],
          ae = qr(e, V, c),
          ee = Fa(e, !1, ae, t),
          G = Aa(e, { minRatio: 0.001, maxRatio: c }),
          U = null,
          X = null,
          ne = null;
        if (G.length === 0) U = lr(ae, ee);
        else if (ee && ae) {
          ne = [].concat(re(G), [ae]).reduce(_i);
          var se = lr(ae, ee),
            te = lr(ae, ne),
            Y = lr(ne, ee);
          (U = Math.max(se, te, Y)),
            U !== se && (X = te > Y ? 'shadowOnBgColor' : 'fgOnShadowColor');
        }
        var M = U > E;
        if (
          (typeof C == 'number' && (typeof U != 'number' || U < C)) ||
          (typeof P == 'number' && (typeof U != 'number' || U > P))
        )
          return this.data({ contrastRatio: U }), !0;
        var de = Math.floor(U * 100) / 100,
          w;
        ae === null ? (w = qe.get('bgColor')) : M || (w = X);
        var j = de === 1,
          O = f.length === 1;
        if (
          (j
            ? (w = qe.set('bgColor', 'equalRatio'))
            : !M && O && !n && (w = 'shortTextContent'),
          this.data({
            fgColor: ee ? ee.toHexString() : void 0,
            bgColor: ae ? ae.toHexString() : void 0,
            contrastRatio: de,
            fontSize: ''
              .concat(((m * 72) / 96).toFixed(1), 'pt (')
              .concat(m, 'px)'),
            fontWeight: D ? 'bold' : 'normal',
            messageKey: w,
            expectedContrastRatio: E + ':1',
            shadowColor: ne ? ne.toHexString() : void 0,
          }),
          ee === null || ae === null || j || (O && !n && !M))
        ) {
          (w = null), qe.clear(), this.relatedNodes(V);
          return;
        }
        return M || this.relatedNodes(V), M;
      }
      function Ty(e, t) {
        var r = t.pseudoSizeThreshold,
          a = r === void 0 ? 0.25 : r,
          n = t.ignorePseudo,
          i = n === void 0 ? !1 : n;
        if (!i) {
          var o = e.boundingClientRect,
            l = o.width * o.height * a;
          do {
            var u = Ms(e.actualNode, ':before'),
              s = Ms(e.actualNode, ':after');
            if (u + s > l) return e;
          } while ((e = e.parent));
        }
      }
      var Ms = We(function (t, r) {
        var a = y.getComputedStyle(t, r),
          n = function (u, s) {
            return a.getPropertyValue(u) === s;
          };
        if (
          n('content', 'none') ||
          n('display', 'none') ||
          n('visibility', 'hidden') ||
          n('position', 'absolute') === !1 ||
          (Ht(a).alpha === 0 && n('background-image', 'none'))
        )
          return 0;
        var i = Ns(a.getPropertyValue('width')),
          o = Ns(a.getPropertyValue('height'));
        return i.unit !== 'px' || o.unit !== 'px'
          ? i.value === 0 || o.value === 0
            ? 0
            : 1 / 0
          : i.value * o.value;
      });
      function ky(e) {
        var t = { nonBmp: !0 },
          r = Bn(e, t),
          a = J(kr(e, t)) === '';
        return r && a;
      }
      function Ns(e) {
        var t = /^([0-9.]+)([a-z]+)$/i,
          r = e.match(t) || [],
          a = ve(r, 3),
          n = a[1],
          i = n === void 0 ? '' : n,
          o = a[2],
          l = o === void 0 ? '' : o;
        return { value: parseFloat(i), unit: l.toLowerCase() };
      }
      function qs(e, t) {
        var r = e.getRelativeLuminance(),
          a = t.getRelativeLuminance();
        return (Math.max(r, a) + 0.05) / (Math.min(r, a) + 0.05);
      }
      var Ry = ['block', 'list-item', 'table', 'flex', 'grid', 'inline-block'];
      function Bs(e) {
        var t = y.getComputedStyle(e).getPropertyValue('display');
        return Ry.indexOf(t) !== -1 || t.substr(0, 6) === 'table-';
      }
      function Sy(e, t) {
        var r = t.requiredContrastRatio,
          a = t.allowSameColor;
        if (Bs(e)) return !1;
        for (var n = Ne(e); n && n.nodeType === 1 && !Bs(n); ) n = Ne(n);
        if (n) {
          this.relatedNodes([n]);
          var i = Fa(e),
            o = Fa(n),
            l = qr(e),
            u = qr(n),
            s = i && o ? qs(i, o) : void 0;
          if ((s && (s = Math.floor(s * 100) / 100), s && s >= r)) return !0;
          var c = l && u ? qs(l, u) : void 0;
          if ((c && (c = Math.floor(c * 100) / 100), c && c >= r)) return !0;
          if (!c) {
            var d,
              f =
                (d = qe.get('bgColor')) !== null && d !== void 0
                  ? d
                  : 'bgContrast';
            this.data({ messageKey: f }), qe.clear();
            return;
          }
          if (s)
            return a && s === 1 && c === 1
              ? !0
              : s === 1 && c > 1
                ? (this.data({
                    messageKey: 'bgContrast',
                    contrastRatio: c,
                    requiredContrastRatio: r,
                    nodeBackgroundColor: l ? l.toHexString() : void 0,
                    parentBackgroundColor: u ? u.toHexString() : void 0,
                  }),
                  !1)
                : (this.data({
                    messageKey: 'fgContrast',
                    contrastRatio: s,
                    requiredContrastRatio: r,
                    nodeColor: i ? i.toHexString() : void 0,
                    parentColor: o ? o.toHexString() : void 0,
                  }),
                  !1);
        }
      }
      var Oy = Sy,
        Iy = ['block', 'list-item', 'table', 'flex', 'grid', 'inline-block'];
      function Ls(e) {
        var t = y.getComputedStyle(e).getPropertyValue('display');
        return Iy.indexOf(t) !== -1 || t.substr(0, 6) === 'table-';
      }
      function Py(e) {
        if (Ls(e)) return !1;
        for (var t = Ne(e); t && t.nodeType === 1 && !Ls(t); ) t = Ne(t);
        if (t) return this.relatedNodes([t]), Ts(e, t);
      }
      var My = Py;
      function Ny(e, t, r) {
        if (r.props.nodeName !== 'input') return !0;
        var a = ['text', 'search', 'number', 'tel'],
          n = ['text', 'search', 'url'],
          i = {
            bday: ['text', 'search', 'date'],
            email: ['text', 'search', 'email'],
            username: ['text', 'search', 'email'],
            'street-address': ['text'],
            tel: ['text', 'search', 'tel'],
            'tel-country-code': ['text', 'search', 'tel'],
            'tel-national': ['text', 'search', 'tel'],
            'tel-area-code': ['text', 'search', 'tel'],
            'tel-local': ['text', 'search', 'tel'],
            'tel-local-prefix': ['text', 'search', 'tel'],
            'tel-local-suffix': ['text', 'search', 'tel'],
            'tel-extension': ['text', 'search', 'tel'],
            'cc-number': a,
            'cc-exp': ['text', 'search', 'month', 'tel'],
            'cc-exp-month': a,
            'cc-exp-year': a,
            'cc-csc': a,
            'transaction-amount': a,
            'bday-day': a,
            'bday-month': a,
            'bday-year': a,
            'new-password': ['text', 'search', 'password'],
            'current-password': ['text', 'search', 'password'],
            url: n,
            photo: n,
            impp: n,
          };
        I(t) === 'object' &&
          Object.keys(t).forEach(function (d) {
            i[d] || (i[d] = []), (i[d] = i[d].concat(t[d]));
          });
        var o = r.attr('autocomplete'),
          l = o.split(/\s+/g).map(function (d) {
            return d.toLowerCase();
          }),
          u = l[l.length - 1];
        if (jt.stateTerms.includes(u)) return !0;
        var s = i[u],
          c = r.hasAttr('type') ? J(r.attr('type')).toLowerCase() : 'text';
        return (
          (c = _a().includes(c) ? c : 'text'),
          typeof s > 'u' ? c === 'text' : s.includes(c)
        );
      }
      var qy = Ny;
      function By(e, t, r) {
        var a = r.attr('autocomplete') || '';
        return nu(a, t);
      }
      var Ly = By;
      function Vy(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0;
        if (!t.attribute || typeof t.attribute != 'string')
          throw new TypeError(
            'attr-non-space-content requires options.attribute to be a string',
          );
        if (!r.hasAttr(t.attribute))
          return this.data({ messageKey: 'noAttr' }), !1;
        var a = r.attr(t.attribute),
          n = !J(a);
        return n ? (this.data({ messageKey: 'emptyAttr' }), !1) : !0;
      }
      var jy = Vy;
      function Hy(e) {
        var t = e.some(function (r) {
          return r.result === !0;
        });
        return (
          t &&
            e.forEach(function (r) {
              r.result = !0;
            }),
          e
        );
      }
      var zy = Hy;
      function Uy(e, t, r) {
        if (!t || !t.selector || typeof t.selector != 'string')
          throw new TypeError(
            'has-descendant requires options.selector to be a string',
          );
        if (t.passForModal && Sr()) return !0;
        var a = mt(r, t.selector, function (n) {
          return _e(n);
        });
        return (
          this.relatedNodes(
            a.map(function (n) {
              return n.actualNode;
            }),
          ),
          a.length > 0
        );
      }
      var $y = Uy;
      function Wy(e, t, r) {
        try {
          return J(Et(r)) !== '';
        } catch {
          return;
        }
      }
      function Gy(e, t, r) {
        return Cr(r, t.matcher);
      }
      var Yy = Gy;
      function Ky(e) {
        return e.filter(function (t) {
          return t.data !== 'ignored';
        });
      }
      var Xy = Ky;
      function Jy(e, t, r) {
        if (!t || !t.selector || typeof t.selector != 'string')
          throw new TypeError(
            'page-no-duplicate requires options.selector to be a string',
          );
        var a = 'page-no-duplicate;' + t.selector;
        if (oe.get(a)) {
          this.data('ignored');
          return;
        }
        oe.set(a, !0);
        var n = mt(v._tree[0], t.selector, function (i) {
          return _e(i);
        });
        return (
          typeof t.nativeScopeFilter == 'string' &&
            (n = n.filter(function (i) {
              return (
                i.actualNode.hasAttribute('role') || !Zt(i, t.nativeScopeFilter)
              );
            })),
          this.relatedNodes(
            n
              .filter(function (i) {
                return i !== r;
              })
              .map(function (i) {
                return i.actualNode;
              }),
          ),
          n.length <= 1
        );
      }
      var Qy = Jy;
      function Zy(e) {
        var t = {};
        return e
          .filter(function (r) {
            if (!r.data) return !1;
            var a = r.data.toUpperCase();
            return t[a]
              ? (t[a].relatedNodes.push(r.relatedNodes[0]), !1)
              : ((t[a] = r), (r.relatedNodes = []), !0);
          })
          .map(function (r) {
            return (r.result = !!r.relatedNodes.length), r;
          });
      }
      var eD = Zy;
      function tD(e, t, r) {
        return (
          xt(r) || (this.data(r.attr('accesskey')), this.relatedNodes([e])), !0
        );
      }
      var rD = tD;
      function aD(e, t, r) {
        var a = r.tabbableElements;
        if (!a) return !1;
        var n = a.filter(function (i) {
          return i !== r;
        });
        return n.length > 0;
      }
      var nD = aD;
      function iD(e, t, r) {
        var a = ['button', 'fieldset', 'input', 'select', 'textarea'],
          n = r.tabbableElements;
        if (!n || !n.length) return !0;
        var i = n.filter(function (o) {
          return a.includes(o.props.nodeName);
        });
        return (
          this.relatedNodes(
            i.map(function (o) {
              return o.actualNode;
            }),
          ),
          i.length === 0 || Sr()
            ? !0
            : i.every(function (o) {
                  var l = o.getComputedStylePropertyValue('pointer-events'),
                    u = parseInt(o.getComputedStylePropertyValue('width')),
                    s = parseInt(o.getComputedStylePropertyValue('height'));
                  return (
                    o.actualNode.onfocus ||
                    ((u === 0 || s === 0) && l === 'none')
                  );
                })
              ? void 0
              : !1
        );
      }
      var oD = iD;
      function lD(e, t, r) {
        if (r.hasAttr('contenteditable') && a(r)) return !0;
        return ft(r);
        function a(n) {
          var i = n.attr('contenteditable');
          if (i === 'true' || i === '') return !0;
          if (i === 'false') return !1;
          var o = Ke(r.parent, '[contenteditable]');
          return o ? a(o) : !1;
        }
      }
      var uD = lD;
      function sD(e, t, r) {
        var a = r.tabbableElements.map(function (n) {
          var i = n.actualNode;
          return i;
        });
        if (!a || !a.length) return !0;
        if (Sr()) {
          this.relatedNodes(a);
          return;
        }
        return !0;
      }
      var cD = sD;
      function dD(e, t, r) {
        var a = r.attr('tabindex'),
          n = Fe(r) && a > -1;
        if (!n) return !1;
        try {
          return !Ge(r);
        } catch {
          return;
        }
      }
      var fD = dD;
      function pD(e, t, r) {
        var a = ['button', 'fieldset', 'input', 'select', 'textarea'],
          n = r.tabbableElements;
        if (!n || !n.length) return !0;
        var i = n.filter(function (o) {
          return !a.includes(o.props.nodeName);
        });
        return (
          this.relatedNodes(
            i.map(function (o) {
              return o.actualNode;
            }),
          ),
          i.length === 0 || Sr()
            ? !0
            : i.every(function (o) {
                  var l = o.getComputedStylePropertyValue('pointer-events'),
                    u = parseInt(o.getComputedStylePropertyValue('width')),
                    s = parseInt(o.getComputedStylePropertyValue('height'));
                  return (
                    o.actualNode.onfocus ||
                    ((u === 0 || s === 0) && l === 'none')
                  );
                })
              ? void 0
              : !1
        );
      }
      var mD = pD;
      function hD(e, t, r) {
        if (r.children)
          try {
            return !r.children.some(function (a) {
              return Vs(a);
            });
          } catch {
            return;
          }
      }
      function Vs(e) {
        if (ft(e)) return !0;
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error('Cannot determine children');
          return !1;
        }
        return e.children.some(function (t) {
          return Vs(t);
        });
      }
      function vD(e) {
        var t = or('landmark'),
          r = Ne(e),
          a = ue(e);
        for (this.data({ role: a }); r; ) {
          var n = r.getAttribute('role');
          if (
            (!n && r.nodeName.toUpperCase() !== 'FORM' && (n = ct(r)),
            n && t.includes(n) && !(n === 'main' && a === 'complementary'))
          )
            return !1;
          r = Ne(r);
        }
        return !0;
      }
      var gD = vD;
      function bD(e, t, r) {
        if (r.children)
          try {
            var a = js(r);
            if (!a.length) return !0;
            var n = a.filter(yD);
            return (
              n.length > 0
                ? (this.data({ messageKey: 'notHidden' }), this.relatedNodes(n))
                : this.relatedNodes(a),
              !1
            );
          } catch {
            return;
          }
      }
      function js(e) {
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error('Cannot determine children');
          return [];
        }
        var t = [];
        return (
          e.children.forEach(function (r) {
            pt(r) === 'widget' && Fe(r)
              ? t.push(r)
              : t.push.apply(t, re(js(r)));
          }),
          t
        );
      }
      function yD(e) {
        var t = parseInt(e.attr('tabindex'), 10);
        return !isNaN(t) && t < 0;
      }
      function DD(e, t, r) {
        var a = parseInt(r.attr('tabindex'), 10);
        return isNaN(a) ? !0 : a <= 0;
      }
      var wD = DD;
      function _D(e, t, r) {
        var a = r.attr('alt'),
          n = /^\s+$/;
        return typeof a == 'string' && n.test(a);
      }
      var xD = _D;
      function ED(e, t, r) {
        if (['none', 'presentation'].includes(ue(r))) return !1;
        var a = Ke(r, t.parentSelector);
        if (!a) return !1;
        var n = dt(a, !0).toLowerCase();
        return n === '' ? !1 : n === Ge(r).toLowerCase();
      }
      var AD = ED;
      function FD(e, t, r) {
        var a = this;
        if (!r.attr('id')) return !1;
        if (r.actualNode) {
          var n = je(r.actualNode),
            i = Ae(r.attr('id')),
            o = Array.from(n.querySelectorAll('label[for="'.concat(i, '"]')));
          if ((this.relatedNodes(o), !o.length)) return !1;
          try {
            return o.some(function (l) {
              if (Xe(l)) {
                var u = J(qt(l, { inControlContext: !0, startNode: r }));
                return a.data({ explicitLabel: u }), !!u;
              } else return !0;
            });
          } catch {
            return;
          }
        }
      }
      var CD = FD;
      function TD(e, t, r) {
        var a = fa(r),
          n = e.getAttribute('title');
        if (!a) return !1;
        if (!n && ((n = ''), e.getAttribute('aria-describedby'))) {
          var i = ut(e, 'aria-describedby');
          n = i
            .map(function (o) {
              return o ? qt(o) : '';
            })
            .join('');
        }
        return J(n) === J(a);
      }
      var kD = TD;
      function RD(e, t, r) {
        if (r.hasAttr('id')) {
          if (!r.actualNode) return;
          var a = je(e),
            n = Ae(e.getAttribute('id')),
            i = a.querySelector('label[for="'.concat(n, '"]'));
          if (i && !_e(i)) {
            var o;
            try {
              o = Ge(r).trim();
            } catch {
              return;
            }
            var l = o === '';
            return l;
          }
        }
        return !1;
      }
      var SD = RD;
      function OD(e, t, r) {
        try {
          var a = Ke(r, 'label');
          if (a) {
            var n = J(Ge(a, { inControlContext: !0, startNode: r }));
            return (
              a.actualNode && this.relatedNodes([a.actualNode]),
              this.data({ implicitLabel: n }),
              !!n
            );
          }
          return !1;
        } catch {
          return;
        }
      }
      var ID = OD;
      function Hs(e, t) {
        var r = zs(t),
          a = zs(e);
        return !r || !a ? !1 : r.includes(a);
      }
      function zs(e) {
        var t = kr(e, { emoji: !0, nonBmp: !0, punctuations: !0 });
        return J(t);
      }
      function PD(e, t, r) {
        var a,
          n = t == null ? void 0 : t.pixelThreshold,
          i =
            (a = t == null ? void 0 : t.occurrenceThreshold) !== null &&
            a !== void 0
              ? a
              : t == null
                ? void 0
                : t.occuranceThreshold,
          o = qt(e).toLowerCase();
        if (!(Vn(o) < 1)) {
          var l = J(
            Et(r, {
              subtreeDescendant: !0,
              ignoreIconLigature: !0,
              pixelThreshold: n,
              occurrenceThreshold: i,
            }),
          ).toLowerCase();
          return l ? (Vn(l) < 1 ? (Hs(l, o) ? !0 : void 0) : Hs(l, o)) : !0;
        }
      }
      var MD = PD;
      function ND(e) {
        var t = Ae(e.getAttribute('id')),
          r = e.parentNode,
          a = je(e);
        a = a.documentElement || a;
        var n = Array.from(a.querySelectorAll('label[for="'.concat(t, '"]')));
        for (
          n.length &&
          (n = n.filter(function (l) {
            return !xt(l);
          }));
          r;

        )
          r.nodeName.toUpperCase() === 'LABEL' &&
            n.indexOf(r) === -1 &&
            n.push(r),
            (r = r.parentNode);
        if ((this.relatedNodes(n), n.length > 1)) {
          var i = n.filter(function (l) {
            return _e(l);
          });
          if (i.length > 1) return;
          var o = ut(e, 'aria-labelledby');
          return o.includes(i[0]) ? !1 : void 0;
        }
        return !1;
      }
      var qD = ND;
      function BD(e, t, r) {
        var a = fa(r),
          n = sa(r),
          i = r.attr('aria-describedby');
        return !a && !!(n || i);
      }
      var LD = BD;
      function VD(e) {
        var t = [];
        return e.filter(function (r) {
          var a = function (o) {
              return (
                r.data.role === o.data.role &&
                r.data.accessibleText === o.data.accessibleText
              );
            },
            n = t.find(a);
          return n
            ? ((n.result = !1), n.relatedNodes.push(r.relatedNodes[0]), !1)
            : (t.push(r), (r.relatedNodes = []), !0);
        });
      }
      var jD = VD;
      function HD(e, t, r) {
        var a = ue(e),
          n = Ge(r);
        return (
          (n = n ? n.toLowerCase() : null),
          this.data({ role: a, accessibleText: n }),
          this.relatedNodes([e]),
          !0
        );
      }
      var zD = HD;
      function Ai(e) {
        return (e || '').trim() !== '';
      }
      function UD(e, t, r) {
        var a = typeof k < 'u' ? Gr(k) : !1;
        if (
          t.attributes.includes('xml:lang') &&
          t.attributes.includes('lang') &&
          Ai(r.attr('xml:lang')) &&
          !Ai(r.attr('lang')) &&
          !a
        )
          return this.data({ messageKey: 'noXHTML' }), !1;
        var n = t.attributes.some(function (i) {
          return Ai(r.attr(i));
        });
        return n ? !0 : (this.data({ messageKey: 'noLang' }), !1);
      }
      var $D = UD;
      function WD(e, t, r) {
        var a = [];
        return (
          t.attributes.forEach(function (n) {
            var i = r.attr(n);
            if (typeof i == 'string') {
              var o = zt(i),
                l = t.value ? !t.value.map(zt).includes(o) : !xa(o);
              ((o !== '' && l) || (i !== '' && !J(i))) &&
                a.push(n + '="' + r.attr(n) + '"');
            }
          }),
          !a.length || (r.props.nodeName !== 'html' && !Un(r))
            ? !1
            : (this.data(a), !0)
        );
      }
      var GD = WD;
      function YD(e, t, r) {
        var a = zt(r.attr('lang')),
          n = zt(r.attr('xml:lang'));
        return a === n;
      }
      var KD = YD;
      function XD(e) {
        var t = Ne(e),
          r = t.nodeName.toUpperCase(),
          a = ge(t);
        return (
          r === 'DIV' &&
            ['presentation', 'none', null].includes(a) &&
            ((t = Ne(t)), (r = t.nodeName.toUpperCase()), (a = ge(t))),
          r !== 'DL'
            ? !1
            : !!(!a || ['presentation', 'none', 'list'].includes(a))
        );
      }
      var JD = XD;
      function QD(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = [],
          n = [];
        if (r.children) {
          for (var i = Us(r.children); i.length; ) {
            var o,
              l = i.shift(),
              u = l.vChild,
              s = l.nested;
            if (t.divGroups && !s && ew(u)) {
              if (!u.children) return;
              var c = Us(u.children, !0);
              i.push.apply(i, re(c));
              continue;
            }
            var d = ZD(u, s, t);
            d &&
              (n.includes(d) || n.push(d),
              (u == null || (o = u.actualNode) === null || o === void 0
                ? void 0
                : o.nodeType) === 1 && a.push(u.actualNode));
          }
          return n.length === 0
            ? !1
            : (this.data({ values: n.join(', ') }), this.relatedNodes(a), !0);
        }
      }
      function ZD(e, t, r) {
        var a = r.validRoles,
          n = a === void 0 ? [] : a,
          i = r.validNodeNames,
          o = i === void 0 ? [] : i,
          l = e.props,
          u = l.nodeName,
          s = l.nodeType,
          c = l.nodeValue,
          d = t ? 'div > ' : '';
        if (s === 3 && c.trim() !== '') return d + '#text';
        if (s !== 1 || !_e(e)) return !1;
        var f = ge(e);
        return f
          ? n.includes(f)
            ? !1
            : d + '[role='.concat(f, ']')
          : o.includes(u)
            ? !1
            : d + u;
      }
      function ew(e) {
        return e.props.nodeName === 'div' && ge(e) === null;
      }
      function Us(e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return e.map(function (r) {
          return { vChild: r, nested: t };
        });
      }
      function tw(e, t, r) {
        var a = r.parent;
        if (a) {
          var n = a.props.nodeName,
            i = ge(a);
          return ['presentation', 'none', 'list'].includes(i)
            ? !0
            : i && rr(i)
              ? (this.data({ messageKey: 'roleNotValid' }), !1)
              : ['ul', 'ol', 'menu'].includes(n);
        }
      }
      function rw(e, t, r) {
        var a = ['definition', 'term', 'list'],
          n = { badNodes: [], hasNonEmptyTextNode: !1 },
          i = r.children.reduce(function (l, u) {
            var s = u.actualNode;
            return s.nodeName.toUpperCase() === 'DIV' && ue(s) === null
              ? l.concat(u.children)
              : l.concat(u);
          }, []),
          o = i.reduce(function (l, u) {
            var s = u.actualNode,
              c = s.nodeName.toUpperCase();
            if (s.nodeType === 1 && _e(s)) {
              var d = ge(s);
              ((c !== 'DT' && c !== 'DD') || d) &&
                (a.includes(d) || l.badNodes.push(s));
            } else
              s.nodeType === 3 &&
                s.nodeValue.trim() !== '' &&
                (l.hasNonEmptyTextNode = !0);
            return l;
          }, n);
        return (
          o.badNodes.length && this.relatedNodes(o.badNodes),
          !!o.badNodes.length || o.hasNonEmptyTextNode
        );
      }
      var aw = rw;
      function nw(e, t, r) {
        var a = !1,
          n = !1,
          i = !0,
          o = [],
          l = [],
          u = [];
        return (
          r.children.forEach(function (s) {
            var c = s.actualNode;
            if (c.nodeType === 3 && c.nodeValue.trim() !== '') {
              a = !0;
              return;
            }
            if (!(c.nodeType !== 1 || !_e(c))) {
              i = !1;
              var d = c.nodeName.toUpperCase() === 'LI',
                f = ue(s),
                p = f === 'listitem';
              !d && !p && o.push(c),
                d && !p && (l.push(c), u.includes(f) || u.push(f)),
                p && (n = !0);
            }
          }),
          a || o.length
            ? (this.relatedNodes(o), !0)
            : i || n
              ? !1
              : (this.relatedNodes(l),
                this.data({ messageKey: 'roleNotValid', roles: u.join(', ') }),
                !0)
        );
      }
      var iw = nw;
      function ow(e, t, r) {
        var a = r.children;
        if (!a || !a.length) return !1;
        for (var n = !1, i = !1, o, l = 0; l < a.length; l++) {
          if (
            ((o = a[l].props.nodeName.toUpperCase()),
            o === 'DT' && (n = !0),
            n && o === 'DD')
          )
            return !1;
          o === 'DD' && (i = !0);
        }
        return n || i;
      }
      var lw = ow;
      function uw(e, t, r) {
        var a = Ze(r, 'track'),
          n = a.some(function (i) {
            return (i.attr('kind') || '').toLowerCase() === 'captions';
          });
        return n ? !1 : void 0;
      }
      var sw = uw,
        $s = ' > ';
      function cw(e) {
        var t = {};
        return e.filter(function (r) {
          var a = r.node.ancestry[r.node.ancestry.length - 1] !== 'html';
          if (a) {
            var n = r.node.ancestry.flat(1 / 0).join($s);
            return (t[n] = r), !0;
          }
          var i = r.node.ancestry
            .slice(0, r.node.ancestry.length - 1)
            .flat(1 / 0)
            .join($s);
          return t[i] && (t[i].result = !0), !1;
        });
      }
      var dw = cw;
      function fw(e, t) {
        return t.isViolation ? !1 : void 0;
      }
      var pw = fw;
      function mw(e, t) {
        if (!e.duration) {
          console.warn('axe.utils.preloadMedia did not load metadata');
          return;
        }
        var r = t.allowedDuration,
          a = r === void 0 ? 3 : r,
          n = i(e);
        if (n <= a && !e.hasAttribute('loop')) return !0;
        if (!e.hasAttribute('controls')) return !1;
        return !0;
        function i(u) {
          if (!u.currentSrc) return 0;
          var s = o(u.currentSrc);
          return s
            ? s.length === 1
              ? Math.abs(u.duration - s[0])
              : Math.abs(s[1] - s[0])
            : Math.abs(u.duration - (u.currentTime || 0));
        }
        function o(u) {
          var s = u.match(/#t=(.*)/);
          if (s) {
            var c = ve(s, 2),
              d = c[1],
              f = d.split(',');
            return f.map(function (p) {
              return /:/.test(p) ? l(p) : parseFloat(p);
            });
          }
        }
        function l(u) {
          for (var s = u.split(':'), c = 0, d = 1; s.length > 0; )
            (c += d * parseInt(s.pop(), 10)), (d *= 60);
          return parseFloat(c);
        }
      }
      var hw = mw;
      function vw(e, t, r, a) {
        var n = a || {},
          i = n.cssom,
          o = i === void 0 ? void 0 : i,
          l = t || {},
          u = l.degreeThreshold,
          s = u === void 0 ? 0 : u;
        if (!o || !o.length) return;
        for (
          var c = !1,
            d = [],
            f = h(o),
            p = function () {
              var U = b[m],
                X = f[U],
                ne = X.root,
                se = X.rules,
                te = se.filter(g);
              if (!te.length) return 'continue';
              te.forEach(function (Y) {
                var M = Y.cssRules;
                Array.from(M).forEach(function (de) {
                  var w = x(de);
                  if (w && de.selectorText.toUpperCase() !== 'HTML') {
                    var j =
                      Array.from(ne.querySelectorAll(de.selectorText)) || [];
                    d = d.concat(j);
                  }
                  c = c || w;
                });
              });
            },
            m = 0,
            b = Object.keys(f);
          m < b.length;
          m++
        )
          var D = p();
        if (!c) return !0;
        return d.length && this.relatedNodes(d), !1;
        function h(G) {
          return G.reduce(function (U, X) {
            var ne = X.sheet,
              se = X.root,
              te = X.shadowId,
              Y = te || 'topDocument';
            if ((U[Y] || (U[Y] = { root: se, rules: [] }), !ne || !ne.cssRules))
              return U;
            var M = Array.from(ne.cssRules);
            return (U[Y].rules = U[Y].rules.concat(M)), U;
          }, {});
        }
        function g(G) {
          var U = G.type,
            X = G.cssText;
          return U !== 4
            ? !1
            : /orientation:\s*landscape/i.test(X) ||
                /orientation:\s*portrait/i.test(X);
        }
        function x(G) {
          var U = G.selectorText,
            X = G.style;
          if (!U || X.length <= 0) return !1;
          var ne = X.transform || X.webkitTransform || X.msTransform || !1;
          if (!ne && !X.rotate) return !1;
          var se = E(ne),
            te = C('rotate', X.rotate),
            Y = se + te;
          return !Y || ((Y = Math.abs(Y)), Math.abs(Y - 180) % 180 <= s)
            ? !1
            : Math.abs(Y - 90) % 90 <= s;
        }
        function E(G) {
          if (!G) return 0;
          var U = G.match(
            /(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/,
          );
          if (!U) return 0;
          var X = ve(U, 3),
            ne = X[1],
            se = X[2];
          return C(ne, se);
        }
        function C(G, U) {
          switch (G) {
            case 'rotate':
            case 'rotateZ':
              return P(U);
            case 'rotate3d':
              var X = U.split(',').map(function (Y) {
                  return Y.trim();
                }),
                ne = ve(X, 4),
                se = ne[2],
                te = ne[3];
              return parseInt(se) === 0 ? void 0 : P(te);
            case 'matrix':
            case 'matrix3d':
              return B(U);
            default:
              return 0;
          }
        }
        function P(G) {
          var U = G.match(/(deg|grad|rad|turn)/) || [],
            X = ve(U, 1),
            ne = X[0];
          if (!ne) return 0;
          var se = parseFloat(G.replace(ne, ''));
          switch (ne) {
            case 'rad':
              return V(se);
            case 'grad':
              return ae(se);
            case 'turn':
              return ee(se);
            case 'deg':
            default:
              return parseInt(se);
          }
        }
        function B(G) {
          var U = G.split(',');
          if (U.length <= 6) {
            var X = ve(U, 2),
              ne = X[0],
              se = X[1],
              te = Math.atan2(parseFloat(se), parseFloat(ne));
            return V(te);
          }
          var Y = parseFloat(U[8]),
            M = Math.asin(Y),
            de = Math.cos(M),
            w = Math.acos(parseFloat(U[0]) / de);
          return V(w);
        }
        function V(G) {
          return Math.round(G * (180 / Math.PI));
        }
        function ae(G) {
          return (
            (G = G % 400), G < 0 && (G += 400), Math.round((G / 400) * 360)
          );
        }
        function ee(G) {
          return Math.round(360 / (1 / G));
        }
      }
      var gw = vw;
      function bw(e, t, r) {
        var a = t || {},
          n = a.scaleMinimum,
          i = n === void 0 ? 2 : n,
          o = a.lowerBound,
          l = o === void 0 ? !1 : o,
          u = r.attr('content') || '';
        if (!u) return !0;
        var s = u.split(/[;,]/).reduce(function (d, f) {
          var p = f.trim();
          if (!p) return d;
          var m = p.split('='),
            b = ve(m, 2),
            D = b[0],
            h = b[1];
          if (!D || !h) return d;
          var g = D.toLowerCase().trim(),
            x = h.toLowerCase().trim();
          return (
            g === 'maximum-scale' && x === 'yes' && (x = 1),
            (g === 'maximum-scale' && parseFloat(x) < 0) || (d[g] = x),
            d
          );
        }, {});
        if (l && s['maximum-scale'] && parseFloat(s['maximum-scale']) < l)
          return !0;
        if (!l && s['user-scalable'] === 'no')
          return this.data('user-scalable=no'), !1;
        var c = parseFloat(s['user-scalable']);
        return !l && s['user-scalable'] && (c || c === 0) && c > -1 && c < 1
          ? (this.data('user-scalable'), !1)
          : s['maximum-scale'] && parseFloat(s['maximum-scale']) < i
            ? (this.data('maximum-scale'), !1)
            : !0;
      }
      var yw = bw,
        Dw = 0.05;
      function ww(e, t, r) {
        var a = (t == null ? void 0 : t.minOffset) || 24,
          n = [],
          i = a,
          o = Ye(bn(r, a)),
          l;
        try {
          for (o.s(); !(l = o.n()).done; ) {
            var u = l.value;
            if (!(pt(u) !== 'widget' || !Fe(u))) {
              var s = _w(gl(r, u));
              s + Dw >= a || ((i = Math.min(i, s)), n.push(u));
            }
          }
        } catch (c) {
          o.e(c);
        } finally {
          o.f();
        }
        if (n.length === 0)
          return this.data({ closestOffset: i, minOffset: a }), !0;
        if (
          (this.relatedNodes(
            n.map(function (c) {
              var d = c.actualNode;
              return d;
            }),
          ),
          !n.some(ft))
        ) {
          this.data({
            messageKey: 'nonTabbableNeighbor',
            closestOffset: i,
            minOffset: a,
          });
          return;
        }
        return (
          this.data({ closestOffset: i, minOffset: a }), ft(r) ? !1 : void 0
        );
      }
      function _w(e) {
        return Math.round(e * 10) / 10;
      }
      var Ws = 0.05;
      function xw(e, t, r) {
        var a = (t == null ? void 0 : t.minSize) || 24,
          n = r.boundingClientRect,
          i = Ci.bind(null, a),
          o = bn(r),
          l = Ew(r, o),
          u = Aw(r, o),
          s = u.fullyObscuringElms,
          c = u.partialObscuringElms;
        if (s.length && !l.length)
          return (
            this.relatedNodes(Ca(s)), this.data({ messageKey: 'obscured' }), !0
          );
        var d = ft(r) ? !1 : void 0;
        if (!i(n) && !l.length) return this.data(le({ minSize: a }, Fi(n))), d;
        var f = Tw(c),
          p = Fw(r, f);
        if (l.length && (s.length || !i(p || n))) {
          this.data({ minSize: a, messageKey: 'contentOverflow' }),
            this.relatedNodes(Ca(l));
          return;
        }
        if (f.length !== 0 && !i(p)) {
          var m = f.every(ft),
            b = 'partiallyObscured'.concat(m ? '' : 'NonTabbable');
          return (
            this.data(le({ messageKey: b, minSize: a }, Fi(p))),
            this.relatedNodes(Ca(f)),
            m ? d : void 0
          );
        }
        return (
          this.data(le({ minSize: a }, Fi(p || n))),
          this.relatedNodes(Ca(f)),
          !0
        );
      }
      function Ew(e, t) {
        return t.filter(function (r) {
          return !Gs(r, e) && Ys(e, r);
        });
      }
      function Aw(e, t) {
        var r = [],
          a = [],
          n = Ye(t),
          i;
        try {
          for (n.s(); !(i = n.n()).done; ) {
            var o = i.value;
            !Ys(e, o) &&
              bl(e, o) &&
              kw(o) !== 'none' &&
              (Gs(e, o) ? r.push(o) : a.push(o));
          }
        } catch (l) {
          n.e(l);
        } finally {
          n.f();
        }
        return { fullyObscuringElms: r, partialObscuringElms: a };
      }
      function Fw(e, t) {
        var r = e.boundingClientRect;
        if (t.length === 0) return null;
        var a = t.map(function (i) {
            var o = i.boundingClientRect;
            return o;
          }),
          n = yl(r, a);
        return Cw(n);
      }
      function Cw(e, t) {
        return e.reduce(function (r, a) {
          var n = Ci(t, r),
            i = Ci(t, a);
          if (n !== i) return n ? r : a;
          var o = r.width * r.height,
            l = a.width * a.height;
          return o > l ? r : a;
        });
      }
      function Tw(e) {
        return e.filter(function (t) {
          return pt(t) === 'widget' && Fe(t);
        });
      }
      function Gs(e, t) {
        var r = e.boundingClientRect,
          a = t.boundingClientRect;
        return (
          r.top >= a.top &&
          r.left >= a.left &&
          r.bottom <= a.bottom &&
          r.right <= a.right
        );
      }
      function kw(e) {
        return e.getComputedStylePropertyValue('pointer-events');
      }
      function Fi(e) {
        return {
          width: Math.round(e.width * 10) / 10,
          height: Math.round(e.height * 10) / 10,
        };
      }
      function Ys(e, t) {
        return e.actualNode.contains(t.actualNode) && !ft(t);
      }
      function Ci(e, t) {
        var r = t.width,
          a = t.height;
        return r + Ws >= e && a + Ws >= e;
      }
      function Ca(e) {
        return e.map(function (t) {
          var r = t.actualNode;
          return r;
        });
      }
      function Rw(e) {
        var t = Ow(e);
        return (
          e.forEach(function (r) {
            r.result = Sw(r, t);
          }),
          e
        );
      }
      function Sw(e, t) {
        var r,
          a,
          n,
          i,
          o = Ks(t, e.node.ancestry),
          l =
            (r = (a = t[o]) === null || a === void 0 ? void 0 : a.level) !==
              null && r !== void 0
              ? r
              : -1,
          u =
            (n = (i = t[o - 1]) === null || i === void 0 ? void 0 : i.level) !==
              null && n !== void 0
              ? n
              : -1;
        if (o === 0) return !0;
        if (l !== -1) return l - u <= 1;
      }
      function Ow(e) {
        (e = re(e)),
          e.sort(function (r, a) {
            var n = r.node,
              i = a.node;
            return n.ancestry.length - i.ancestry.length;
          });
        var t = e.reduce(Iw, []);
        return t.filter(function (r) {
          var a = r.level;
          return a !== -1;
        });
      }
      function Iw(e, t) {
        var r,
          a = (r = t.data) === null || r === void 0 ? void 0 : r.headingOrder,
          n = Xs(t.node.ancestry, 1);
        if (!a) return e;
        var i = a.map(function (l) {
            return Mw(l, n);
          }),
          o = Pw(e, n);
        return (
          o === -1
            ? e.push.apply(e, re(i))
            : e.splice.apply(e, [o, 0].concat(re(i))),
          e
        );
      }
      function Pw(e, t) {
        for (; t.length; ) {
          var r = Ks(e, t);
          if (r !== -1) return r;
          t = Xs(t, 1);
        }
        return -1;
      }
      function Ks(e, t) {
        return e.findIndex(function (r) {
          return li(r.ancestry, t);
        });
      }
      function Mw(e, t) {
        var r = t.concat(e.ancestry);
        return le({}, e, { ancestry: r });
      }
      function Xs(e, t) {
        return e.slice(0, e.length - t);
      }
      function Nw(e) {
        var t = ue(e),
          r = t && t.includes('heading'),
          a = e.attr('aria-level'),
          n = parseInt(a, 10),
          i = e.props.nodeName.match(/h(\d)/) || [],
          o = ve(i, 2),
          l = o[1];
        return r
          ? l && !a
            ? parseInt(l, 10)
            : isNaN(n) || n < 1
              ? l
                ? parseInt(l, 10)
                : 2
              : n || -1
          : -1;
      }
      function qw() {
        var e = oe.get('headingOrder');
        if (e) return !0;
        var t = 'h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame',
          r = mt(v._tree[0], t, _e);
        return (
          (e = r.map(function (a) {
            return { ancestry: [Kr(a.actualNode)], level: Nw(a) };
          })),
          this.data({ headingOrder: e }),
          oe.set('headingOrder', r),
          !0
        );
      }
      var Bw = qw;
      function Js(e, t) {
        if (!e || !t) return !1;
        var r = Object.getOwnPropertyNames(e),
          a = Object.getOwnPropertyNames(t);
        if (r.length !== a.length) return !1;
        var n = r.every(function (i) {
          var o = e[i],
            l = t[i];
          return I(o) !== I(l)
            ? !1
            : I(o) === 'object' || I(l) === 'object'
              ? Js(o, l)
              : o === l;
        });
        return n;
      }
      function Lw(e) {
        if (e.length < 2) return e;
        for (
          var t = e.filter(function (l) {
              var u = l.result;
              return u !== void 0;
            }),
            r = [],
            a = {},
            n = function (u) {
              var s,
                c = t[u],
                d = c.data,
                f = d.name,
                p = d.urlProps;
              if (a[f]) return 'continue';
              var m = t.filter(function (D, h) {
                  var g = D.data;
                  return g.name === f && h !== u;
                }),
                b = m.every(function (D) {
                  var h = D.data;
                  return Js(h.urlProps, p);
                });
              m.length && !b && (c.result = void 0),
                (c.relatedNodes = []),
                (s = c.relatedNodes).push.apply(
                  s,
                  re(
                    m.map(function (D) {
                      return D.relatedNodes[0];
                    }),
                  ),
                ),
                (a[f] = m),
                r.push(c);
            },
            i = 0;
          i < t.length;
          i++
        )
          var o = n(i);
        return r;
      }
      var Vw = Lw,
        Qs = {};
      De(Qs, {
        aria: function () {
          return ps;
        },
        color: function () {
          return Fs;
        },
        dom: function () {
          return dn;
        },
        forms: function () {
          return Zs;
        },
        matches: function () {
          return Cr;
        },
        math: function () {
          return vl;
        },
        standards: function () {
          return Es;
        },
        table: function () {
          return tc;
        },
        text: function () {
          return Er;
        },
        utils: function () {
          return La;
        },
      });
      var Zs = {};
      De(Zs, {
        isAriaCombobox: function () {
          return Xl;
        },
        isAriaListbox: function () {
          return Kl;
        },
        isAriaRange: function () {
          return Jl;
        },
        isAriaTextbox: function () {
          return Yl;
        },
        isDisabled: function () {
          return Br;
        },
        isNativeSelect: function () {
          return Gl;
        },
        isNativeTextbox: function () {
          return Wl;
        },
      });
      var jw = ['fieldset', 'button', 'select', 'input', 'textarea'];
      function ec(e) {
        var t = e._isDisabled;
        if (typeof t == 'boolean') return t;
        var r = e.props.nodeName,
          a = e.attr('aria-disabled');
        return (
          jw.includes(r) && e.hasAttr('disabled')
            ? (t = !0)
            : a
              ? (t = a.toLowerCase() === 'true')
              : e.parent
                ? (t = ec(e.parent))
                : (t = !1),
          (e._isDisabled = t),
          t
        );
      }
      var Br = ec,
        tc = {};
      De(tc, {
        getAllCells: function () {
          return Ti;
        },
        getCellPosition: function () {
          return ua;
        },
        getHeaders: function () {
          return Ta;
        },
        getScope: function () {
          return kn;
        },
        isColumnHeader: function () {
          return ar;
        },
        isDataCell: function () {
          return ac;
        },
        isDataTable: function () {
          return ka;
        },
        isHeader: function () {
          return Gw;
        },
        isRowHeader: function () {
          return nr;
        },
        toArray: function () {
          return gt;
        },
        toGrid: function () {
          return gt;
        },
        traverse: function () {
          return ki;
        },
      });
      function Hw(e) {
        var t,
          r,
          a,
          n,
          i = [];
        for (t = 0, a = e.rows.length; t < a; t++)
          for (r = 0, n = e.rows[t].cells.length; r < n; r++)
            i.push(e.rows[t].cells[r]);
        return i;
      }
      var Ti = Hw;
      function rc(e, t, r) {
        for (
          var a = e === 'row' ? '_rowHeaders' : '_colHeaders',
            n = e === 'row' ? nr : ar,
            i = r[t.y][t.x],
            o = i.colSpan - 1,
            l = i.getAttribute('rowspan'),
            u = parseInt(l) === 0 || i.rowspan === 0 ? r.length : i.rowSpan,
            s = u - 1,
            c = t.y + s,
            d = t.x + o,
            f = e === 'row' ? t.y : 0,
            p = e === 'row' ? 0 : t.x,
            m,
            b = [],
            D = c;
          D >= f && !m;
          D--
        )
          for (var h = d; h >= p; h--) {
            var g = r[D] ? r[D][h] : void 0;
            if (g) {
              var x = v.utils.getNodeFromTree(g);
              if (x[a]) {
                m = x[a];
                break;
              }
              b.push(g);
            }
          }
        return (
          (m = (m || []).concat(b.filter(n))),
          b.forEach(function (E) {
            var C = v.utils.getNodeFromTree(E);
            C[a] = m;
          }),
          m
        );
      }
      function zw(e, t) {
        if (e.getAttribute('headers')) {
          var r = ut(e, 'headers');
          if (
            r.filter(function (o) {
              return o;
            }).length
          )
            return r;
        }
        t || (t = gt(er(e, 'table')));
        var a = ua(e, t),
          n = rc('row', a, t),
          i = rc('col', a, t);
        return [].concat(n, i).reverse();
      }
      var Ta = zw;
      function Uw(e) {
        if (!e.children.length && !e.textContent.trim()) return !1;
        var t = e.getAttribute('role');
        return rr(t)
          ? ['cell', 'gridcell'].includes(t)
          : e.nodeName.toUpperCase() === 'TD';
      }
      var ac = Uw;
      function $w(e) {
        var t = (e.getAttribute('role') || '').toLowerCase();
        if ((t === 'presentation' || t === 'none') && !Fe(e)) return !1;
        if (
          e.getAttribute('contenteditable') === 'true' ||
          er(e, '[contenteditable="true"]') ||
          t === 'grid' ||
          t === 'treegrid' ||
          t === 'table' ||
          pt(t) === 'landmark'
        )
          return !0;
        if (e.getAttribute('datatable') === '0') return !1;
        if (e.getAttribute('summary') || e.tHead || e.tFoot || e.caption)
          return !0;
        for (var r = 0, a = e.children.length; r < a; r++)
          if (e.children[r].nodeName.toUpperCase() === 'COLGROUP') return !0;
        for (var n = 0, i = e.rows.length, o, l, u = !1, s = 0; s < i; s++) {
          o = e.rows[s];
          for (var c = 0, d = o.cells.length; c < d; c++) {
            if (
              ((l = o.cells[c]),
              l.nodeName.toUpperCase() === 'TH' ||
                (!u &&
                  (l.offsetWidth !== l.clientWidth ||
                    l.offsetHeight !== l.clientHeight) &&
                  (u = !0),
                l.getAttribute('scope') ||
                  l.getAttribute('headers') ||
                  l.getAttribute('abbr')) ||
                ['columnheader', 'rowheader'].includes(
                  (l.getAttribute('role') || '').toLowerCase(),
                ) ||
                (l.children.length === 1 &&
                  l.children[0].nodeName.toUpperCase() === 'ABBR'))
            )
              return !0;
            n++;
          }
        }
        if (e.getElementsByTagName('table').length || i < 2) return !1;
        var f = e.rows[Math.ceil(i / 2)];
        if (f.cells.length === 1 && f.cells[0].colSpan === 1) return !1;
        if (f.cells.length >= 5 || u) return !0;
        var p, m;
        for (s = 0; s < i; s++) {
          if (
            ((o = e.rows[s]),
            (p &&
              p !==
                y.getComputedStyle(o).getPropertyValue('background-color')) ||
              ((p = y.getComputedStyle(o).getPropertyValue('background-color')),
              m &&
                m !==
                  y.getComputedStyle(o).getPropertyValue('background-image')))
          )
            return !0;
          m = y.getComputedStyle(o).getPropertyValue('background-image');
        }
        return i >= 20
          ? !0
          : !(
              mn(e).width > na(y).width * 0.95 ||
              n < 10 ||
              e.querySelector('object, embed, iframe, applet')
            );
      }
      var ka = $w;
      function Ww(e) {
        if (ar(e) || nr(e)) return !0;
        if (e.getAttribute('id')) {
          var t = Ae(e.getAttribute('id'));
          return !!k.querySelector('[headers~="'.concat(t, '"]'));
        }
        return !1;
      }
      var Gw = Ww;
      function nc(e, t, r, a) {
        var n,
          i = r[t.y] ? r[t.y][t.x] : void 0;
        return i
          ? typeof a == 'function' && ((n = a(i, t, r)), n === !0)
            ? [i]
            : ((n = nc(e, { x: t.x + e.x, y: t.y + e.y }, r, a)),
              n.unshift(i),
              n)
          : [];
      }
      function Yw(e, t, r, a) {
        if (
          (Array.isArray(t) && ((a = r), (r = t), (t = { x: 0, y: 0 })),
          typeof e == 'string')
        )
          switch (e) {
            case 'left':
              e = { x: -1, y: 0 };
              break;
            case 'up':
              e = { x: 0, y: -1 };
              break;
            case 'right':
              e = { x: 1, y: 0 };
              break;
            case 'down':
              e = { x: 0, y: 1 };
              break;
          }
        return nc(e, { x: t.x + e.x, y: t.y + e.y }, r, a);
      }
      var ki = Yw;
      function Kw(e, t, r) {
        var a = Er.accessibleTextVirtual(r),
          n = Er.sanitize(
            Er.removeUnicode(a, { emoji: !0, nonBmp: !0, punctuations: !0 }),
          ).toLowerCase();
        if (n) {
          var i = { name: n, urlProps: dn.urlPropsFromAttribute(e, 'href') };
          return this.data(i), this.relatedNodes([e]), !0;
        }
      }
      var Xw = Kw;
      function Jw(e, t, r) {
        var a = Ze(r, 'a[href]');
        return a.some(function (n) {
          return /^#[^/!]/.test(n.attr('href'));
        });
      }
      var Qw = Jw,
        Zw = /[;,\s]/,
        e0 = /^[0-9.]+$/;
      function t0(e, t, r) {
        var a = t || {},
          n = a.minDelay,
          i = a.maxDelay,
          o = (r.attr('content') || '').trim(),
          l = o.split(Zw),
          u = ve(l, 1),
          s = u[0];
        if (!s.match(e0)) return !0;
        var c = parseFloat(s);
        return (
          this.data({ redirectDelay: c }),
          (typeof n == 'number' && c <= t.minDelay) ||
            (typeof i == 'number' && c > t.maxDelay)
        );
      }
      function r0(e) {
        switch (e) {
          case 'lighter':
            return 100;
          case 'normal':
            return 400;
          case 'bold':
            return 700;
          case 'bolder':
            return 900;
        }
        return (e = parseInt(e)), isNaN(e) ? 400 : e;
      }
      function a0(e) {
        for (
          var t = e, r = e.textContent.trim(), a = r;
          a === r && t !== void 0;

        ) {
          var n = -1;
          if (((e = t), e.children.length === 0)) return e;
          do n++, (a = e.children[n].textContent.trim());
          while (a === '' && n + 1 < e.children.length);
          t = e.children[n];
        }
        return e;
      }
      function Ri(e) {
        var t = y.getComputedStyle(a0(e));
        return {
          fontWeight: r0(t.getPropertyValue('font-weight')),
          fontSize: parseInt(t.getPropertyValue('font-size')),
          isItalic: t.getPropertyValue('font-style') === 'italic',
        };
      }
      function ic(e, t, r) {
        return r.reduce(function (a, n) {
          return (
            a ||
            ((!n.size || e.fontSize / n.size > t.fontSize) &&
              (!n.weight || e.fontWeight - n.weight > t.fontWeight) &&
              (!n.italic || (e.isItalic && !t.isItalic)))
          );
        }, !1);
      }
      function n0(e, t, r) {
        var a = Array.from(e.parentNode.children),
          n = a.indexOf(e);
        t = t || {};
        var i = t.margins || [],
          o = a.slice(n + 1).find(function (D) {
            return D.nodeName.toUpperCase() === 'P';
          }),
          l = a
            .slice(0, n)
            .reverse()
            .find(function (D) {
              return D.nodeName.toUpperCase() === 'P';
            }),
          u = Ri(e),
          s = o ? Ri(o) : null,
          c = l ? Ri(l) : null,
          d = t.passLength,
          f = t.failLength,
          p = e.textContent.trim().length,
          m = o == null ? void 0 : o.textContent.trim().length;
        if (p > m * d || !s || !ic(u, s, i)) return !0;
        var b = Zt(r, 'blockquote');
        if (
          !(b && b.nodeName.toUpperCase() === 'BLOCKQUOTE') &&
          !(c && !ic(u, c, i)) &&
          !(p > m * f)
        )
          return !1;
      }
      var i0 = n0;
      function o0(e) {
        var t = e.filter(function (r) {
          return r.data.isIframe;
        });
        return (
          e.forEach(function (r) {
            if (!(r.result || r.node.ancestry.length === 1)) {
              var a = r.node.ancestry.slice(0, -1),
                n = Ye(t),
                i;
              try {
                for (n.s(); !(i = n.n()).done; ) {
                  var o = i.value;
                  if (li(a, o.node.ancestry)) {
                    r.result = o.result;
                    break;
                  }
                }
              } catch (l) {
                n.e(l);
              } finally {
                n.f();
              }
            }
          }),
          t.forEach(function (r) {
            r.result || (r.result = !0);
          }),
          e
        );
      }
      var l0 = o0,
        u0 = or('landmark'),
        s0 = ['alert', 'log', 'status'];
      function c0(e, t, r) {
        this.data({ isIframe: ['iframe', 'frame'].includes(r.props.nodeName) });
        var a = oe.get('regionlessNodes', function () {
          return d0(t);
        });
        return !a.includes(r);
      }
      function d0(e) {
        var t = oc(v._tree[0], e)
          .map(function (r) {
            for (
              ;
              r.parent &&
              !r.parent._hasRegionDescendant &&
              r.parent.actualNode !== k.body;

            )
              r = r.parent;
            return r;
          })
          .filter(function (r, a, n) {
            return n.indexOf(r) === a;
          });
        return t;
      }
      function oc(e, t) {
        var r = e.actualNode;
        if (
          ue(e) === 'button' ||
          f0(e, t) ||
          ['iframe', 'frame'].includes(e.props.nodeName) ||
          (Wn(e.actualNode) && xn(e.actualNode, 'href')) ||
          !_e(r)
        ) {
          for (var a = e; a; ) (a._hasRegionDescendant = !0), (a = a.parent);
          return ['iframe', 'frame'].includes(e.props.nodeName) ? [e] : [];
        } else
          return r !== k.body && pa(r, !0)
            ? [e]
            : e.children
                .filter(function (n) {
                  var i = n.actualNode;
                  return i.nodeType === 1;
                })
                .map(function (n) {
                  return oc(n, t);
                })
                .reduce(function (n, i) {
                  return n.concat(i);
                }, []);
      }
      function f0(e, t) {
        var r = e.actualNode,
          a = ue(e),
          n = (r.getAttribute('aria-live') || '').toLowerCase().trim();
        return !!(
          ['assertive', 'polite'].includes(n) ||
          s0.includes(a) ||
          u0.includes(a) ||
          (t.regionMatcher && Cr(e, t.regionMatcher))
        );
      }
      function p0(e) {
        var t = xn(e, 'href');
        return t ? _e(t) || void 0 : !1;
      }
      var m0 = p0;
      function h0(e) {
        var t = {};
        return (
          e.forEach(function (r) {
            t[r.data] = t[r.data] !== void 0 ? ++t[r.data] : 0;
          }),
          e.forEach(function (r) {
            r.result = !!t[r.data];
          }),
          e
        );
      }
      var v0 = h0;
      function g0(e, t, r) {
        var a = J(r.attr('title')).toLowerCase();
        return this.data(a), !0;
      }
      var b0 = g0;
      function y0(e) {
        var t = [];
        return e.filter(function (r) {
          return t.indexOf(r.data) === -1 ? (t.push(r.data), !0) : !1;
        });
      }
      var D0 = y0;
      function w0(e) {
        var t = e.getAttribute('id').trim();
        if (!t) return !0;
        var r = je(e),
          a = Array.from(
            r.querySelectorAll('[id="'.concat(Ae(t), '"]')),
          ).filter(function (n) {
            return n !== e;
          });
        return a.length && this.relatedNodes(a), this.data(t), a.length === 0;
      }
      var _0 = w0;
      function x0(e, t, r) {
        return !!J(Fr(r));
      }
      var E0 = x0;
      function A0(e, t, r) {
        try {
          return !!J(Ar(r));
        } catch {
          return;
        }
      }
      var F0 = A0;
      function C0(e, t) {
        var r = t.cssProperties.filter(function (a) {
          if (e.style.getPropertyPriority(a) === 'important') return a;
        });
        return r.length > 0 ? (this.data(r), !1) : !0;
      }
      var T0 = C0;
      function k0() {
        var e = k.title;
        return !!J(e);
      }
      var R0 = k0;
      function S0() {}
      var O0 = S0;
      function I0(e, t, r) {
        var a = r.props.nodeName;
        return ['img', 'input', 'area'].includes(a) ? r.hasAttr('alt') : !1;
      }
      var P0 = I0;
      function M0(e, t) {
        var r = t.cssProperty,
          a = t.absoluteValues,
          n = t.minValue,
          i = t.maxValue,
          o = t.normalValue,
          l = o === void 0 ? 0 : o,
          u = t.noImportant,
          s = t.multiLineOnly;
        if (
          (!u && e.style.getPropertyPriority(r) !== 'important') ||
          (s && !hu(e))
        )
          return !0;
        var c = {};
        typeof n == 'number' && (c.minValue = n),
          typeof i == 'number' && (c.maxValue = i);
        var d = e.style.getPropertyValue(r);
        if (['inherit', 'unset', 'revert', 'revert-layer'].includes(d))
          return this.data(le({ value: d }, c)), !0;
        var f = N0(e, { absoluteValues: a, cssProperty: r, normalValue: l });
        if ((this.data(le({ value: f }, c)), typeof f == 'number'))
          return (
            (typeof n != 'number' || f >= n) && (typeof i != 'number' || f <= i)
          );
      }
      function N0(e, t) {
        var r = t.cssProperty,
          a = t.absoluteValues,
          n = t.normalValue,
          i = y.getComputedStyle(e),
          o = i.getPropertyValue(r);
        if (o === 'normal') return n;
        var l = parseFloat(o);
        if (a) return l;
        var u = parseFloat(i.getPropertyValue('font-size')),
          s = Math.round((l / u) * 100) / 100;
        return isNaN(s) ? o : s;
      }
      function q0(e) {
        return Xe(e);
      }
      var B0 = q0;
      function L0(e, t, r) {
        var a = r.props.nodeName,
          n = (r.attr('type') || '').toLowerCase(),
          i = r.attr('value');
        return (
          i && this.data({ messageKey: 'has-label' }),
          a === 'input' && ['submit', 'reset'].includes(n) ? i === null : !1
        );
      }
      var V0 = L0;
      function j0(e, t, r) {
        var a = ge(r);
        if (
          ['presentation', 'none'].includes(a) &&
          ['iframe', 'frame'].includes(r.props.nodeName) &&
          r.hasAttr('title')
        )
          return (
            this.data({ messageKey: 'iframe', nodeName: r.props.nodeName }), !1
          );
        var n = ue(r);
        if (['presentation', 'none'].includes(n))
          return this.data({ role: n }), !0;
        if (!['presentation', 'none'].includes(a)) return !1;
        var i = Bt().some(function (u) {
            return r.hasAttr(u);
          }),
          o = Fe(r),
          l;
        return (
          i && !o
            ? (l = 'globalAria')
            : !i && o
              ? (l = 'focusable')
              : (l = 'both'),
          this.data({ messageKey: l, role: n }),
          !1
        );
      }
      function H0(e, t, r) {
        if (r.children) {
          var a = r.children.find(function (i) {
            var o = i.props;
            return o.nodeName === 'title';
          });
          if (!a) return this.data({ messageKey: 'noTitle' }), !1;
          try {
            var n = Et(a, { includeHidden: !0 }).trim();
            if (n === '') return this.data({ messageKey: 'emptyTitle' }), !1;
          } catch {
            return;
          }
          return !0;
        }
      }
      var z0 = H0;
      function U0(e) {
        var t = gt(e),
          r = t[0];
        return t.length <= 1 || r.length <= 1 || e.rows.length <= 1
          ? !0
          : r.reduce(function (a, n, i) {
              return a || (n !== r[i + 1] && r[i + 1] !== void 0);
            }, !1);
      }
      var $0 = U0;
      function W0(e) {
        return fu(k) ? e.nodeName.toUpperCase() === 'TH' : !0;
      }
      var G0 = W0,
        Y0 = K0;
      function K0(e, t, r) {
        if (r.children !== void 0) {
          var a = r.attr('summary'),
            n = r.children.find(X0),
            i = n ? J(Et(n)) : !1;
          return !i || !a ? !1 : J(a).toLowerCase() === J(i).toLowerCase();
        }
      }
      function X0(e) {
        return e.props.nodeName === 'caption';
      }
      function J0(e, t) {
        var r = e.getAttribute('scope').toLowerCase();
        return t.values.indexOf(r) !== -1;
      }
      var Q0 = J0;
      function Z0(e) {
        var t = [],
          r = Ti(e),
          a = gt(e);
        return (
          r.forEach(function (n) {
            if (pa(n) && ac(n) && !ws(n)) {
              var i = Ta(n, a).some(function (o) {
                return o !== null && !!pa(o);
              });
              i || t.push(n);
            }
          }),
          t.length ? (this.relatedNodes(t), !1) : !0
        );
      }
      var e_ = Z0;
      function t_(e) {
        for (var t = [], r = [], a = [], n = 0; n < e.rows.length; n++)
          for (var i = e.rows[n], o = 0; o < i.cells.length; o++)
            t.push(i.cells[o]);
        var l = t.reduce(function (u, s) {
          return s.getAttribute('id') && u.push(s.getAttribute('id')), u;
        }, []);
        if (
          (t.forEach(function (u) {
            var s = !1,
              c = !1;
            if (!(!u.hasAttribute('headers') || !_e(u))) {
              var d = u.getAttribute('headers').trim();
              if (!d) return r.push(u);
              var f = He(d);
              f.length !== 0 &&
                (u.getAttribute('id') &&
                  (s = f.indexOf(u.getAttribute('id').trim()) !== -1),
                (c = f.some(function (p) {
                  return !l.includes(p);
                })),
                (s || c) && a.push(u));
            }
          }),
          a.length > 0)
        )
          return this.relatedNodes(a), !1;
        if (r.length) {
          this.relatedNodes(r);
          return;
        }
        return !0;
      }
      var r_ = t_;
      function a_(e) {
        var t = Ti(e),
          r = this,
          a = [];
        t.forEach(function (l) {
          var u = l.getAttribute('headers');
          u && (a = a.concat(u.split(/\s+/)));
          var s = l.getAttribute('aria-labelledby');
          s && (a = a.concat(s.split(/\s+/)));
        });
        var n = t.filter(function (l) {
            return J(l.textContent) === ''
              ? !1
              : l.nodeName.toUpperCase() === 'TH' ||
                  ['rowheader', 'columnheader'].indexOf(
                    l.getAttribute('role'),
                  ) !== -1;
          }),
          i = gt(e),
          o = !0;
        return (
          n.forEach(function (l) {
            if (!(l.getAttribute('id') && a.includes(l.getAttribute('id')))) {
              var u = ua(l, i),
                s = !1;
              ar(l) &&
                (s = ki('down', u, i).find(function (c) {
                  return !ar(c) && Ta(c, i).includes(l);
                })),
                !s &&
                  nr(l) &&
                  (s = ki('right', u, i).find(function (c) {
                    return !nr(c) && Ta(c, i).includes(l);
                  })),
                s || r.relatedNodes(l),
                (o = o && s);
            }
          }),
          o ? !0 : void 0
        );
      }
      var n_ = a_;
      function i_(e, t, r) {
        var a = ['SCRIPT', 'HEAD', 'TITLE', 'NOSCRIPT', 'STYLE', 'TEMPLATE'];
        if (!a.includes(e.nodeName.toUpperCase()) && Rr(r)) {
          var n = y.getComputedStyle(e);
          if (n.getPropertyValue('display') === 'none') return;
          if (n.getPropertyValue('visibility') === 'hidden') {
            var i = Ne(e),
              o = i && y.getComputedStyle(i);
            if (!o || o.getPropertyValue('visibility') !== 'hidden') return;
          }
        }
        return !0;
      }
      var o_ = i_;
      function l_(e, t) {
        var r = /^aria-/,
          a = t.attrNames;
        if (a.length) {
          for (var n = 0, i = a.length; n < i; n++) if (r.test(a[n])) return !0;
        }
        return !1;
      }
      var u_ = l_;
      function s_(e, t) {
        return ge(t, { dpub: !0, fallback: !0 }) !== null;
      }
      var c_ = s_;
      function d_(e, t) {
        var r = /^aria-/;
        return t.attrNames.some(function (a) {
          return r.test(a);
        });
      }
      var f_ = d_;
      function lc(e) {
        return e
          ? e.getAttribute('aria-hidden') === 'true'
            ? !1
            : lc(Ne(e))
          : !0;
      }
      function p_(e) {
        return lc(Ne(e));
      }
      var m_ = p_;
      function h_(e, t) {
        var r = ge(t, { dpub: !0 });
        return !!Di(r);
      }
      var v_ = h_;
      function g_(e, t) {
        var r = ge(t);
        return !!yi(r);
      }
      var b_ = g_;
      function y_(e, t) {
        var r = t.attr('autocomplete');
        if (!r || J(r) === '') return !1;
        var a = t.props.nodeName;
        if (['textarea', 'input', 'select'].includes(a) === !1) return !1;
        var n = ['submit', 'reset', 'button', 'hidden'];
        if (a === 'input' && n.includes(t.props.type)) return !1;
        var i = t.attr('aria-disabled') || 'false';
        if (t.hasAttr('disabled') || i.toLowerCase() === 'true') return !1;
        var o = t.attr('role'),
          l = t.attr('tabindex');
        if (l === '-1' && o) {
          var u = ce.ariaRoles[o];
          if (u === void 0 || u.type !== 'widget') return !1;
        }
        return !(l === '-1' && t.actualNode && !Xe(t) && !_e(t));
      }
      var D_ = y_;
      function w_(e, t, r) {
        return r.initiator;
      }
      var uc = w_;
      function __(e, t, r) {
        return uc(e, t, r) ? !!e.querySelector('a[href]') : !0;
      }
      var x_ = __;
      function E_(e, t) {
        var r = t.props,
          a = r.nodeName,
          n = r.type;
        if (a === 'option' || (a === 'select' && !e.options.length)) return !1;
        var i = ['hidden', 'range', 'color', 'checkbox', 'radio', 'image'];
        if ((a === 'input' && i.includes(n)) || Br(t) || oa(t)) return !1;
        var o = ['input', 'select', 'textarea'];
        if (o.includes(a)) {
          var l = y.getComputedStyle(e),
            u = parseInt(l.getPropertyValue('text-indent'), 10);
          if (u) {
            var s = e.getBoundingClientRect();
            if (
              ((s = {
                top: s.top,
                bottom: s.bottom,
                left: s.left + u,
                right: s.right + u,
              }),
              !Gn(s, e))
            )
              return !1;
          }
          return !0;
        }
        var c = Zt(t, 'label');
        if (a === 'label' || c) {
          var d = c || e,
            f = c ? N(c) : t;
          if (d.htmlFor) {
            var p = je(d),
              m = p.getElementById(d.htmlFor),
              b = m && N(m);
            if (b && Br(b)) return !1;
          }
          var D =
              'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea',
            h = Ze(f, D)[0];
          if (h && Br(h)) return !1;
        }
        for (var g = [], x = t; x; ) {
          if (x.props.id) {
            var E = vi(x)
              .filter(function (G) {
                return He(G.getAttribute('aria-labelledby') || '').includes(
                  x.props.id,
                );
              })
              .map(function (G) {
                return N(G);
              });
            g.push.apply(g, re(E));
          }
          x = x.parent;
        }
        if ((g.length > 0 && g.every(Br)) || !C_(t)) return !1;
        for (
          var C = k.createRange(), P = t.children, B = 0;
          B < P.length;
          B++
        ) {
          var V = P[B];
          V.actualNode.nodeType === 3 &&
            J(V.actualNode.nodeValue) !== '' &&
            C.selectNodeContents(V.actualNode);
        }
        for (var ae = C.getClientRects(), ee = 0; ee < ae.length; ee++)
          if (Gn(ae[ee], e)) return !0;
        return !1;
      }
      var A_ = E_,
        F_ = { emoji: !0, nonBmp: !1, punctuations: !0 };
      function C_(e) {
        var t = dt(e, !1, !0);
        return t === '' || kr(t, F_) === ''
          ? !1
          : e.children.some(function (r) {
              return r.props.nodeName === '#text' && !Ln(r);
            });
      }
      function T_(e) {
        if (ka(e)) {
          var t = gt(e);
          return (
            t.length >= 3 &&
            t[0].length >= 3 &&
            t[1].length >= 3 &&
            t[2].length >= 3
          );
        }
        return !1;
      }
      var k_ = T_;
      function R_(e) {
        return ka(e);
      }
      var S_ = R_;
      function O_(e) {
        var t = e.getAttribute('id').trim(),
          r = '*[id="'.concat(Ae(t), '"]'),
          a = Array.from(je(e).querySelectorAll(r));
        return !Ea(e) && a.some(Fe);
      }
      var I_ = O_;
      function P_(e) {
        return Ea(e);
      }
      var M_ = P_;
      function N_(e) {
        var t = e.getAttribute('id').trim(),
          r = '*[id="'.concat(Ae(t), '"]'),
          a = Array.from(je(e).querySelectorAll(r));
        return (
          !Ea(e) &&
          a.every(function (n) {
            return !Fe(n);
          })
        );
      }
      var q_ = N_;
      function B_(e, t, r) {
        var a, n;
        return (
          !r.initiator &&
          !r.focusable &&
          ((a = r.size) === null || a === void 0 ? void 0 : a.width) *
            ((n = r.size) === null || n === void 0 ? void 0 : n.height) >
            1
        );
      }
      var L_ = B_;
      function V_(e) {
        var t = e.getAttribute('title');
        return !!J(t);
      }
      var j_ = V_;
      function H_(e, t) {
        return ct(t, { chromium: !0 }) !== null;
      }
      var z_ = H_;
      function U_(e, t) {
        return ue(t) === 'heading';
      }
      function $_(e, t) {
        try {
          var r = t.props.nodeName;
          return r === 'svg' ? !0 : !!Ke(t, 'svg');
        } catch {
          return !1;
        }
      }
      var Si = $_;
      function W_(e, t) {
        return !Si(e, t);
      }
      var G_ = W_;
      function Y_(e, t) {
        var r = !!Ge(t);
        if (!r) return !1;
        var a = ue(e);
        return !(a && a !== 'link');
      }
      var K_ = Y_;
      function X_(e) {
        return su(e);
      }
      var J_ = X_;
      function Q_(e) {
        return Xe(e);
      }
      function Z_(e, t) {
        return Xe(t);
      }
      function ex(e, t) {
        var r = ue(e);
        if (!r) return !1;
        var a = or('widget'),
          n = a.includes(r);
        if (!n) return !1;
        var i = gi();
        return !(!i.includes(r) || (!J(Fr(t)) && !J(Ar(e))) || !J(dt(t)));
      }
      var tx = ex;
      function rx(e, t) {
        if (t.props.nodeName !== 'input' || t.hasAttr('type') === !1) return !0;
        var r = t.attr('type').toLowerCase();
        return (
          ['hidden', 'image', 'button', 'submit', 'reset'].includes(r) === !1
        );
      }
      var ax = rx;
      function nx(e, t) {
        var r = 'article, aside, main, nav, section';
        return e.hasAttribute('role') || !Zt(t, r);
      }
      var ix = nx;
      function ox(e, t) {
        var r = ['article', 'aside', 'main', 'nav', 'section'].join(',');
        function a(i) {
          return !Ke(i, r);
        }
        function n(i) {
          var o = i.actualNode,
            l = or('landmark'),
            u = ue(o);
          if (!u) return !1;
          var s = o.nodeName.toUpperCase();
          if (s === 'HEADER' || s === 'FOOTER') return a(i);
          if (s === 'SECTION' || s === 'FORM') {
            var c = Ge(i);
            return !!c;
          }
          return l.indexOf(u) >= 0 || u === 'region';
        }
        return n(t) && _e(e);
      }
      var lx = ox;
      function ux(e) {
        return !ka(e) && !Fe(e);
      }
      var sx = ux;
      function cx(e) {
        var t = J(e.innerText),
          r = e.getAttribute('role');
        return (r && r !== 'link') || !t || !Xe(e) ? !1 : $n(e);
      }
      var dx = cx;
      function fx(e, t) {
        var r = ue(t);
        return r ? !!ce.ariaRoles[r].childrenPresentational : !1;
      }
      var px = fx;
      function mx(e) {
        return !(
          !e.currentSrc ||
          e.hasAttribute('paused') ||
          e.hasAttribute('muted')
        );
      }
      var hx = mx;
      function vx(e, t) {
        return !(!t.hasAttr('role') || !t.attr('role').trim());
      }
      var gx = vx;
      function bx(e, t) {
        var r = ge(t);
        if (!r || ['none', 'presentation'].includes(r)) return !0;
        var a = xl[r] || {},
          n = a.accessibleNameRequired;
        return !!(n || Fe(t));
      }
      var sc = bx;
      function yx(e, t) {
        var r = Vt(t),
          a = r.namingMethods;
        return !(
          (a && a.length !== 0) ||
          (ge(t) === 'combobox' &&
            Ze(t, 'input:not([type="hidden"])').length) ||
          bi(t, { popupRoles: ['listbox'] })
        );
      }
      var Dx = yx;
      function wx(e, t) {
        var r = parseInt(t.attr('tabindex'), 10);
        return isNaN(r) || r >= 0;
      }
      var _x = wx;
      function xx(e, t) {
        return !t.attr('role');
      }
      var Ex = xx;
      function Ax(e, t) {
        return t.props.nodeName !== 'html';
      }
      var Fx = Ax,
        Cx = function (t, r) {
          return [sc, Tx].every(function (a) {
            return a(t, r);
          });
        };
      function Tx(e) {
        var t;
        if (
          !(
            e != null &&
            (t = e.ownerDocument) !== null &&
            t !== void 0 &&
            t.createRange
          )
        )
          return !0;
        var r = e.ownerDocument.createRange();
        return (
          r.setStart(e, 0),
          r.setEnd(e, e.childNodes.length),
          r.getClientRects().length === 0
        );
      }
      function kx(e) {
        var t = Array.from(e.parentNode.childNodes),
          r = e.textContent.trim(),
          a = /[.!?:;](?![.!?:;])/g;
        if (r.length === 0 || (r.match(a) || []).length >= 2) return !1;
        var n = t.slice(t.indexOf(e) + 1).filter(function (i) {
          return (
            i.nodeName.toUpperCase() === 'P' && i.textContent.trim() !== ''
          );
        });
        return n.length !== 0;
      }
      var Rx = kx;
      function Sx(e, t) {
        return ct(t, { chromiumRoles: !0 }) !== null;
      }
      var Ox = Sx;
      function Ix(e, t) {
        return yt(e, 13) !== void 0 && bi(t) === !1 && Px(t);
      }
      function Px(e) {
        return Ze(e, '*').some(function (t) {
          return Rr(t, !0, !0);
        });
      }
      function Mx(e) {
        return Wn(e) && ia(e);
      }
      var Nx = Mx;
      function qx(e, t) {
        var r = ue(t);
        return ['treegrid', 'grid', 'table'].includes(r);
      }
      function Bx(e, t) {
        return Lx.every(function (r) {
          return r(e, t);
        });
      }
      var Lx = [
        function (e, t) {
          return cc(t);
        },
        function (e, t) {
          return Vx(t);
        },
        function (e, t) {
          return !Si(e, t);
        },
        function (e, t) {
          return Fe(t);
        },
        function (e, t) {
          return ft(t) || !jx(t);
        },
        function (e) {
          return !$n(e, { noLengthCompare: !0 });
        },
      ];
      function cc(e) {
        return pt(e) === 'widget';
      }
      function Vx(e) {
        return e.props.nodeName !== 'area';
      }
      var jx = We(function e(t) {
        return t != null && t.parent
          ? cc(t.parent) && ft(t.parent)
            ? !0
            : e(t.parent)
          : !1;
      });
      function Hx(e) {
        return (
          e.ownerDocument.defaultView.self === e.ownerDocument.defaultView.top
        );
      }
      var zx = Hx;
      function Ux(e) {
        var t = zt(e.getAttribute('lang')),
          r = zt(e.getAttribute('xml:lang'));
        return xa(t) && xa(r);
      }
      var $x = Ux,
        Wx = {
          'abstractrole-evaluate': eb,
          'accesskeys-after': eD,
          'accesskeys-evaluate': rD,
          'alt-space-value-evaluate': xD,
          'aria-allowed-attr-evaluate': tb,
          'aria-allowed-attr-matches': u_,
          'aria-allowed-role-evaluate': ab,
          'aria-allowed-role-matches': c_,
          'aria-busy-evaluate': nb,
          'aria-errormessage-evaluate': ob,
          'aria-has-attr-matches': f_,
          'aria-hidden-body-evaluate': ub,
          'aria-hidden-focus-matches': m_,
          'aria-label-evaluate': E0,
          'aria-labelledby-evaluate': F0,
          'aria-level-evaluate': cb,
          'aria-prohibited-attr-evaluate': db,
          'aria-required-attr-evaluate': pb,
          'aria-required-children-evaluate': gb,
          'aria-required-children-matches': v_,
          'aria-required-parent-evaluate': Eb,
          'aria-required-parent-matches': b_,
          'aria-roledescription-evaluate': Fb,
          'aria-unsupported-attr-evaluate': Tb,
          'aria-valid-attr-evaluate': Rb,
          'aria-valid-attr-value-evaluate': Sb,
          'attr-non-space-content-evaluate': jy,
          'autocomplete-appropriate-evaluate': qy,
          'autocomplete-matches': D_,
          'autocomplete-valid-evaluate': Ly,
          'avoid-inline-spacing-evaluate': T0,
          'bypass-matches': x_,
          'caption-evaluate': sw,
          'caption-faked-evaluate': $0,
          'color-contrast-evaluate': Cy,
          'color-contrast-matches': A_,
          'css-orientation-lock-evaluate': gw,
          'data-table-large-matches': k_,
          'data-table-matches': S_,
          'deprecatedrole-evaluate': Ib,
          'dlitem-evaluate': JD,
          'doc-has-title-evaluate': R0,
          'duplicate-id-active-matches': I_,
          'duplicate-id-after': D0,
          'duplicate-id-aria-matches': M_,
          'duplicate-id-evaluate': _0,
          'duplicate-id-misc-matches': q_,
          'duplicate-img-label-evaluate': AD,
          'exists-evaluate': O0,
          'explicit-evaluate': CD,
          'fallbackrole-evaluate': Nb,
          'focusable-content-evaluate': nD,
          'focusable-disabled-evaluate': oD,
          'focusable-element-evaluate': uD,
          'focusable-modal-open-evaluate': cD,
          'focusable-no-name-evaluate': fD,
          'focusable-not-tabbable-evaluate': mD,
          'frame-focusable-content-evaluate': hD,
          'frame-focusable-content-matches': L_,
          'frame-tested-after': dw,
          'frame-tested-evaluate': pw,
          'frame-title-has-text-matches': j_,
          'has-alt-evaluate': P0,
          'has-descendant-after': zy,
          'has-descendant-evaluate': $y,
          'has-global-aria-attribute-evaluate': Bb,
          'has-implicit-chromium-role-matches': z_,
          'has-lang-evaluate': $D,
          'has-text-content-evaluate': Wy,
          'has-widget-role-evaluate': Vb,
          'heading-matches': U_,
          'heading-order-after': Rw,
          'heading-order-evaluate': Bw,
          'help-same-as-label-evaluate': kD,
          'hidden-content-evaluate': o_,
          'hidden-explicit-label-evaluate': SD,
          'html-namespace-matches': G_,
          'html5-scope-evaluate': G0,
          'identical-links-same-purpose-after': Vw,
          'identical-links-same-purpose-evaluate': Xw,
          'identical-links-same-purpose-matches': K_,
          'implicit-evaluate': ID,
          'inline-style-property-evaluate': M0,
          'inserted-into-focus-order-matches': J_,
          'internal-link-present-evaluate': Qw,
          'invalid-children-evaluate': QD,
          'invalidrole-evaluate': Hb,
          'is-element-focusable-evaluate': Ub,
          'is-initiator-matches': uc,
          'is-on-screen-evaluate': B0,
          'is-visible-matches': Q_,
          'is-visible-on-screen-matches': Z_,
          'label-content-name-mismatch-evaluate': MD,
          'label-content-name-mismatch-matches': tx,
          'label-matches': ax,
          'landmark-has-body-context-matches': ix,
          'landmark-is-top-level-evaluate': gD,
          'landmark-is-unique-after': jD,
          'landmark-is-unique-evaluate': zD,
          'landmark-unique-matches': lx,
          'layout-table-matches': sx,
          'link-in-text-block-evaluate': Oy,
          'link-in-text-block-matches': dx,
          'link-in-text-block-style-evaluate': My,
          'listitem-evaluate': tw,
          'matches-definition-evaluate': Yy,
          'meta-refresh-evaluate': t0,
          'meta-viewport-scale-evaluate': yw,
          'multiple-label-evaluate': qD,
          'nested-interactive-matches': px,
          'no-autoplay-audio-evaluate': hw,
          'no-autoplay-audio-matches': hx,
          'no-empty-role-matches': gx,
          'no-explicit-name-required-matches': sc,
          'no-focusable-content-evaluate': bD,
          'no-implicit-explicit-label-evaluate': Wb,
          'no-naming-method-matches': Dx,
          'no-negative-tabindex-matches': _x,
          'no-role-matches': Ex,
          'non-empty-if-present-evaluate': V0,
          'not-html-matches': Fx,
          'object-is-loaded-matches': Cx,
          'only-dlitems-evaluate': aw,
          'only-listitems-evaluate': iw,
          'p-as-heading-evaluate': i0,
          'p-as-heading-matches': Rx,
          'page-no-duplicate-after': Xy,
          'page-no-duplicate-evaluate': Qy,
          'presentation-role-conflict-matches': Ox,
          'presentational-role-evaluate': j0,
          'region-after': l0,
          'region-evaluate': c0,
          'same-caption-summary-evaluate': Y0,
          'scope-value-evaluate': Q0,
          'scrollable-region-focusable-matches': Ix,
          'skip-link-evaluate': m0,
          'skip-link-matches': Nx,
          'structured-dlitems-evaluate': lw,
          'svg-namespace-matches': Si,
          'svg-non-empty-title-evaluate': z0,
          'tabindex-evaluate': wD,
          'table-or-grid-role-matches': qx,
          'target-offset-evaluate': ww,
          'target-size-evaluate': xw,
          'td-has-header-evaluate': e_,
          'td-headers-attr-evaluate': r_,
          'th-has-data-cells-evaluate': n_,
          'title-only-evaluate': LD,
          'unique-frame-title-after': v0,
          'unique-frame-title-evaluate': b0,
          'unsupportedrole-evaluate': Yb,
          'valid-lang-evaluate': GD,
          'valid-scrollable-semantics-evaluate': ey,
          'widget-not-inline-matches': Bx,
          'window-is-top-matches': zx,
          'xml-lang-mismatch-evaluate': KD,
          'xml-lang-mismatch-matches': $x,
        },
        Ra = Wx;
      function Gx(e) {
        (this.id = e.id),
          (this.data = null),
          (this.relatedNodes = []),
          (this.result = null);
      }
      var Oi = Gx;
      function Ii(e) {
        if (typeof e == 'string') {
          if (Ra[e]) return Ra[e];
          if (/^\s*function[\s\w]*\(/.test(e))
            return new Function('return ' + e + ';')();
          throw new ReferenceError(
            'Function ID does not exist in the metadata-function-map: '.concat(
              e,
            ),
          );
        }
        return e;
      }
      function dc() {
        var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return (Array.isArray(e) || I(e) !== 'object') && (e = { value: e }), e;
      }
      function ur(e) {
        e && ((this.id = e.id), this.configure(e));
      }
      (ur.prototype.enabled = !0),
        (ur.prototype.run = function (t, r, a, n, i) {
          r = r || {};
          var o = r.hasOwnProperty('enabled') ? r.enabled : this.enabled,
            l = this.getOptions(r.options);
          if (o) {
            var u = new Oi(this),
              s = Wa(u, r, n, i),
              c;
            try {
              c = this.evaluate.call(s, t.actualNode, l, t, a);
            } catch (d) {
              t && t.actualNode && (d.errorNode = new ot(t).toJSON()), i(d);
              return;
            }
            s.isAsync || ((u.result = c), n(u));
          } else n(null);
        }),
        (ur.prototype.runSync = function (t, r, a) {
          r = r || {};
          var n = r,
            i = n.enabled,
            o = i === void 0 ? this.enabled : i;
          if (!o) return null;
          var l = this.getOptions(r.options),
            u = new Oi(this),
            s = Wa(u, r);
          s.async = function () {
            throw new Error(
              'Cannot run async check while in a synchronous run',
            );
          };
          var c;
          try {
            c = this.evaluate.call(s, t.actualNode, l, t, a);
          } catch (d) {
            throw (t && t.actualNode && (d.errorNode = new ot(t).toJSON()), d);
          }
          return (u.result = c), u;
        }),
        (ur.prototype.configure = function (t) {
          var r = this;
          (!t.evaluate || Ra[t.evaluate]) && (this._internalCheck = !0),
            t.hasOwnProperty('enabled') && (this.enabled = t.enabled),
            t.hasOwnProperty('options') &&
              (this._internalCheck
                ? (this.options = dc(t.options))
                : (this.options = t.options)),
            ['evaluate', 'after']
              .filter(function (a) {
                return t.hasOwnProperty(a);
              })
              .forEach(function (a) {
                return (r[a] = Ii(t[a]));
              });
        }),
        (ur.prototype.getOptions = function (t) {
          return this._internalCheck
            ? sn(this.options, dc(t || {}))
            : t || this.options;
        });
      var fc = ur;
      function Yx(e) {
        (this.id = e.id),
          (this.result = Z.NA),
          (this.pageLevel = e.pageLevel),
          (this.impact = null),
          (this.nodes = []);
      }
      var Sa = Yx;
      function et(e, t) {
        (this._audit = t),
          (this.id = e.id),
          (this.selector = e.selector || '*'),
          e.impact &&
            (fe(
              Z.impact.includes(e.impact),
              'Impact '.concat(e.impact, ' is not a valid impact'),
            ),
            (this.impact = e.impact)),
          (this.excludeHidden =
            typeof e.excludeHidden == 'boolean' ? e.excludeHidden : !0),
          (this.enabled = typeof e.enabled == 'boolean' ? e.enabled : !0),
          (this.pageLevel = typeof e.pageLevel == 'boolean' ? e.pageLevel : !1),
          (this.reviewOnFail =
            typeof e.reviewOnFail == 'boolean' ? e.reviewOnFail : !1),
          (this.any = e.any || []),
          (this.all = e.all || []),
          (this.none = e.none || []),
          (this.tags = e.tags || []),
          (this.preload = !!e.preload),
          (this.actIds = e.actIds),
          e.matches && (this.matches = Ii(e.matches));
      }
      (et.prototype.matches = function () {
        return !0;
      }),
        (et.prototype.gather = function (t) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            a = 'mark_gather_start_' + this.id,
            n = 'mark_gather_end_' + this.id,
            i = 'mark_isVisibleToScreenReaders_start_' + this.id,
            o = 'mark_isVisibleToScreenReaders_end_' + this.id;
          r.performanceTimer && Re.mark(a);
          var l = fi(this.selector, t);
          return (
            this.excludeHidden &&
              (r.performanceTimer && Re.mark(i),
              (l = l.filter(function (u) {
                return _e(u);
              })),
              r.performanceTimer &&
                (Re.mark(o),
                Re.measure(
                  'rule_' +
                    this.id +
                    '#gather_axe.utils.isVisibleToScreenReaders',
                  i,
                  o,
                ))),
            r.performanceTimer &&
              (Re.mark(n), Re.measure('rule_' + this.id + '#gather', a, n)),
            l
          );
        }),
        (et.prototype.runChecks = function (t, r, a, n, i, o) {
          var l = this,
            u = st();
          this[t].forEach(function (s) {
            var c = l._audit.checks[s.id || s],
              d = ya(c, l.id, a);
            u.defer(function (f, p) {
              c.run(r, d, n, f, p);
            });
          }),
            u
              .then(function (s) {
                (s = s.filter(function (c) {
                  return c;
                })),
                  i({ type: t, results: s });
              })
              .catch(o);
        }),
        (et.prototype.runChecksSync = function (t, r, a, n) {
          var i = this,
            o = [];
          return (
            this[t].forEach(function (l) {
              var u = i._audit.checks[l.id || l],
                s = ya(u, i.id, a);
              o.push(u.runSync(r, s, n));
            }),
            (o = o.filter(function (l) {
              return l;
            })),
            { type: t, results: o }
          );
        }),
        (et.prototype.run = function (t) {
          var r = this,
            a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0;
          a.performanceTimer && this._trackPerformance();
          var o = st(),
            l = new Sa(this),
            u;
          try {
            u = this.gatherAndMatchNodes(t, a);
          } catch (s) {
            i(new mr({ cause: s, ruleId: this.id }));
            return;
          }
          a.performanceTimer && this._logGatherPerformance(u),
            u.forEach(function (s) {
              o.defer(function (c, d) {
                var f = st();
                ['any', 'all', 'none'].forEach(function (p) {
                  f.defer(function (m, b) {
                    r.runChecks(p, s, a, t, m, b);
                  });
                }),
                  f
                    .then(function (p) {
                      var m = pc(p);
                      m &&
                        ((m.node = new ot(s, a)),
                        l.nodes.push(m),
                        r.reviewOnFail &&
                          (['any', 'all'].forEach(function (b) {
                            m[b].forEach(function (D) {
                              D.result === !1 && (D.result = void 0);
                            });
                          }),
                          m.none.forEach(function (b) {
                            b.result === !0 && (b.result = void 0);
                          }))),
                        c();
                    })
                    .catch(function (p) {
                      return d(p);
                    });
              });
            }),
            o.defer(function (s) {
              return setTimeout(s, 0);
            }),
            a.performanceTimer && this._logRulePerformance(),
            o
              .then(function () {
                return n(l);
              })
              .catch(function (s) {
                return i(s);
              });
        }),
        (et.prototype.runSync = function (t) {
          var r = this,
            a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
          a.performanceTimer && this._trackPerformance();
          var n = new Sa(this),
            i;
          try {
            i = this.gatherAndMatchNodes(t, a);
          } catch (o) {
            throw new mr({ cause: o, ruleId: this.id });
          }
          return (
            a.performanceTimer && this._logGatherPerformance(i),
            i.forEach(function (o) {
              var l = [];
              ['any', 'all', 'none'].forEach(function (s) {
                l.push(r.runChecksSync(s, o, a, t));
              });
              var u = pc(l);
              u &&
                ((u.node = o.actualNode ? new ot(o, a) : null),
                n.nodes.push(u),
                r.reviewOnFail &&
                  (['any', 'all'].forEach(function (s) {
                    u[s].forEach(function (c) {
                      c.result === !1 && (c.result = void 0);
                    });
                  }),
                  u.none.forEach(function (s) {
                    s.result === !0 && (s.result = void 0);
                  })));
            }),
            a.performanceTimer && this._logRulePerformance(),
            n
          );
        }),
        (et.prototype._trackPerformance = function () {
          (this._markStart = 'mark_rule_start_' + this.id),
            (this._markEnd = 'mark_rule_end_' + this.id),
            (this._markChecksStart = 'mark_runchecks_start_' + this.id),
            (this._markChecksEnd = 'mark_runchecks_end_' + this.id);
        }),
        (et.prototype._logGatherPerformance = function (t) {
          It('gather (', t.length, '):', Re.timeElapsed() + 'ms'),
            Re.mark(this._markChecksStart);
        }),
        (et.prototype._logRulePerformance = function () {
          Re.mark(this._markChecksEnd),
            Re.mark(this._markEnd),
            Re.measure(
              'runchecks_' + this.id,
              this._markChecksStart,
              this._markChecksEnd,
            ),
            Re.measure('rule_' + this.id, this._markStart, this._markEnd);
        });
      function pc(e) {
        if (e.length) {
          var t = !1,
            r = {};
          return (
            e.forEach(function (a) {
              var n = a.results.filter(function (i) {
                return i;
              });
              (r[a.type] = n), n.length && (t = !0);
            }),
            t ? r : null
          );
        }
      }
      et.prototype.gatherAndMatchNodes = function (t, r) {
        var a = this,
          n = 'mark_matches_start_' + this.id,
          i = 'mark_matches_end_' + this.id,
          o = this.gather(t, r);
        return (
          r.performanceTimer && Re.mark(n),
          (o = o.filter(function (l) {
            return a.matches(l.actualNode, l, t);
          })),
          r.performanceTimer &&
            (Re.mark(i), Re.measure('rule_' + this.id + '#matches', n, i)),
          o
        );
      };
      function Kx(e) {
        return ta(e)
          .map(function (t) {
            var r = e._audit.checks[t.id || t];
            return r && typeof r.after == 'function' ? r : null;
          })
          .filter(Boolean);
      }
      function Xx(e, t) {
        var r = [];
        return (
          e.forEach(function (a) {
            var n = ta(a);
            n.forEach(function (i) {
              i.id === t && ((i.node = a.node), r.push(i));
            });
          }),
          r
        );
      }
      function Jx(e) {
        return e.filter(function (t) {
          return t.filtered !== !0;
        });
      }
      function Qx(e) {
        var t = ['any', 'all', 'none'],
          r = e.nodes.filter(function (a) {
            var n = 0;
            return (
              t.forEach(function (i) {
                (a[i] = Jx(a[i])), (n += a[i].length);
              }),
              n > 0
            );
          });
        return (
          e.pageLevel &&
            r.length &&
            (r = [
              r.reduce(function (a, n) {
                if (a)
                  return (
                    t.forEach(function (i) {
                      a[i].push.apply(a[i], n[i]);
                    }),
                    a
                  );
              }),
            ]),
          r
        );
      }
      (et.prototype.after = function (t, r) {
        var a = this,
          n = Kx(this),
          i = this.id;
        return (
          n.forEach(function (o) {
            var l = Xx(t.nodes, o.id),
              u = ya(o, i, r),
              s = o.after(l, u);
            a.reviewOnFail &&
              s.forEach(function (c) {
                var d =
                    (a.any.includes(c.id) || a.all.includes(c.id)) &&
                    c.result === !1,
                  f = a.none.includes(c.id) && c.result === !0;
                (d || f) && (c.result = void 0);
              }),
              l.forEach(function (c) {
                delete c.node, s.indexOf(c) === -1 && (c.filtered = !0);
              });
          }),
          (t.nodes = Qx(t)),
          t
        );
      }),
        (et.prototype.configure = function (t) {
          t.hasOwnProperty('selector') && (this.selector = t.selector),
            t.hasOwnProperty('excludeHidden') &&
              (this.excludeHidden =
                typeof t.excludeHidden == 'boolean' ? t.excludeHidden : !0),
            t.hasOwnProperty('enabled') &&
              (this.enabled = typeof t.enabled == 'boolean' ? t.enabled : !0),
            t.hasOwnProperty('pageLevel') &&
              (this.pageLevel =
                typeof t.pageLevel == 'boolean' ? t.pageLevel : !1),
            t.hasOwnProperty('reviewOnFail') &&
              (this.reviewOnFail =
                typeof t.reviewOnFail == 'boolean' ? t.reviewOnFail : !1),
            t.hasOwnProperty('any') && (this.any = t.any),
            t.hasOwnProperty('all') && (this.all = t.all),
            t.hasOwnProperty('none') && (this.none = t.none),
            t.hasOwnProperty('tags') && (this.tags = t.tags),
            t.hasOwnProperty('actIds') && (this.actIds = t.actIds),
            t.hasOwnProperty('matches') && (this.matches = Ii(t.matches)),
            t.impact &&
              (fe(
                Z.impact.includes(t.impact),
                'Impact '.concat(t.impact, ' is not a valid impact'),
              ),
              (this.impact = t.impact));
        });
      var mc = et,
        sr = nt(no()),
        cr = /\{\{.+?\}\}/g;
      function hc() {
        if (y.origin && y.origin !== 'null') return y.origin;
        if (y.location && y.location.origin && y.location.origin !== 'null')
          return y.location.origin;
      }
      function Zx(e) {
        var t;
        if (
          (e ? ((t = vt(e)), (t.commons = e.commons)) : (t = {}),
          (t.reporter = t.reporter || null),
          (t.noHtml = t.noHtml || !1),
          !t.allowedOrigins)
        ) {
          var r = hc();
          t.allowedOrigins = r ? [r] : [];
        }
        return (
          (t.rules = t.rules || []),
          (t.checks = t.checks || []),
          (t.data = le({ checks: {}, rules: {} }, t.data)),
          t
        );
      }
      function vc(e, t, r) {
        var a, n;
        for (a = 0, n = e.length; a < n; a++) t[r](e[a]);
      }
      var eE = function (t, r) {
          var a = r.pass,
            n = r.fail;
          return (
            typeof a == 'string' && cr.test(a) && (a = sr.default.compile(a)),
            typeof n == 'string' && cr.test(n) && (n = sr.default.compile(n)),
            le({}, t, {
              messages: {
                pass: a || t.messages.pass,
                fail: n || t.messages.fail,
                incomplete:
                  I(t.messages.incomplete) === 'object'
                    ? le({}, t.messages.incomplete, r.incomplete)
                    : r.incomplete,
              },
            })
          );
        },
        tE = function (t, r) {
          var a = r.help,
            n = r.description;
          return (
            typeof a == 'string' && cr.test(a) && (a = sr.default.compile(a)),
            typeof n == 'string' && cr.test(n) && (n = sr.default.compile(n)),
            le({}, t, { help: a || t.help, description: n || t.description })
          );
        },
        rE = function (t, r) {
          var a = r.failureMessage;
          return (
            typeof a == 'string' && cr.test(a) && (a = sr.default.compile(a)),
            le({}, t, { failureMessage: a || t.failureMessage })
          );
        },
        aE = function (t, r) {
          return (
            typeof r == 'string' && cr.test(r) && (r = sr.default.compile(r)),
            r || t
          );
        },
        nE = (function () {
          function e(t) {
            Ut(this, e),
              (this.lang = 'en'),
              (this.defaultConfig = t),
              (this.standards = ce),
              this._init(),
              (this._defaultLocale = null);
          }
          return (
            $t(e, [
              {
                key: '_setDefaultLocale',
                value: function () {
                  if (!this._defaultLocale) {
                    for (
                      var r = {
                          checks: {},
                          rules: {},
                          failureSummaries: {},
                          incompleteFallbackMessage: '',
                          lang: this.lang,
                        },
                        a = Object.keys(this.data.checks),
                        n = 0;
                      n < a.length;
                      n++
                    ) {
                      var i = a[n],
                        o = this.data.checks[i],
                        l = o.messages,
                        u = l.pass,
                        s = l.fail,
                        c = l.incomplete;
                      r.checks[i] = { pass: u, fail: s, incomplete: c };
                    }
                    for (
                      var d = Object.keys(this.data.rules), f = 0;
                      f < d.length;
                      f++
                    ) {
                      var p = d[f],
                        m = this.data.rules[p],
                        b = m.description,
                        D = m.help;
                      r.rules[p] = { description: b, help: D };
                    }
                    for (
                      var h = Object.keys(this.data.failureSummaries), g = 0;
                      g < h.length;
                      g++
                    ) {
                      var x = h[g],
                        E = this.data.failureSummaries[x],
                        C = E.failureMessage;
                      r.failureSummaries[x] = { failureMessage: C };
                    }
                    (r.incompleteFallbackMessage =
                      this.data.incompleteFallbackMessage),
                      (this._defaultLocale = r);
                  }
                },
              },
              {
                key: '_resetLocale',
                value: function () {
                  var r = this._defaultLocale;
                  r && this.applyLocale(r);
                },
              },
              {
                key: '_applyCheckLocale',
                value: function (r) {
                  for (var a = Object.keys(r), n = 0; n < a.length; n++) {
                    var i = a[n];
                    if (!this.data.checks[i])
                      throw new Error(
                        'Locale provided for unknown check: "'.concat(i, '"'),
                      );
                    this.data.checks[i] = eE(this.data.checks[i], r[i]);
                  }
                },
              },
              {
                key: '_applyRuleLocale',
                value: function (r) {
                  for (var a = Object.keys(r), n = 0; n < a.length; n++) {
                    var i = a[n];
                    if (!this.data.rules[i])
                      throw new Error(
                        'Locale provided for unknown rule: "'.concat(i, '"'),
                      );
                    this.data.rules[i] = tE(this.data.rules[i], r[i]);
                  }
                },
              },
              {
                key: '_applyFailureSummaries',
                value: function (r) {
                  for (var a = Object.keys(r), n = 0; n < a.length; n++) {
                    var i = a[n];
                    if (!this.data.failureSummaries[i])
                      throw new Error(
                        'Locale provided for unknown failureMessage: "'.concat(
                          i,
                          '"',
                        ),
                      );
                    this.data.failureSummaries[i] = rE(
                      this.data.failureSummaries[i],
                      r[i],
                    );
                  }
                },
              },
              {
                key: 'applyLocale',
                value: function (r) {
                  this._setDefaultLocale(),
                    r.checks && this._applyCheckLocale(r.checks),
                    r.rules && this._applyRuleLocale(r.rules),
                    r.failureSummaries &&
                      this._applyFailureSummaries(
                        r.failureSummaries,
                        'failureSummaries',
                      ),
                    r.incompleteFallbackMessage &&
                      (this.data.incompleteFallbackMessage = aE(
                        this.data.incompleteFallbackMessage,
                        r.incompleteFallbackMessage,
                      )),
                    r.lang && (this.lang = r.lang);
                },
              },
              {
                key: 'setAllowedOrigins',
                value: function (r) {
                  var a = hc();
                  this.allowedOrigins = [];
                  var n = Ye(r),
                    i;
                  try {
                    for (n.s(); !(i = n.n()).done; ) {
                      var o = i.value;
                      if (o === Z.allOrigins) {
                        this.allowedOrigins = ['*'];
                        return;
                      } else
                        o !== Z.sameOrigin
                          ? this.allowedOrigins.push(o)
                          : a && this.allowedOrigins.push(a);
                    }
                  } catch (l) {
                    n.e(l);
                  } finally {
                    n.f();
                  }
                },
              },
              {
                key: '_init',
                value: function () {
                  var r = Zx(this.defaultConfig);
                  (this.lang = r.lang || 'en'),
                    (this.reporter = r.reporter),
                    (this.commands = {}),
                    (this.rules = []),
                    (this.checks = {}),
                    (this.brand = 'axe'),
                    (this.application = 'axeAPI'),
                    (this.tagExclude = ['experimental']),
                    (this.noHtml = r.noHtml),
                    (this.allowedOrigins = r.allowedOrigins),
                    vc(r.rules, this, 'addRule'),
                    vc(r.checks, this, 'addCheck'),
                    (this.data = {}),
                    (this.data.checks = (r.data && r.data.checks) || {}),
                    (this.data.rules = (r.data && r.data.rules) || {}),
                    (this.data.failureSummaries =
                      (r.data && r.data.failureSummaries) || {}),
                    (this.data.incompleteFallbackMessage =
                      (r.data && r.data.incompleteFallbackMessage) || ''),
                    this._constructHelpUrls();
                },
              },
              {
                key: 'registerCommand',
                value: function (r) {
                  this.commands[r.id] = r.callback;
                },
              },
              {
                key: 'addRule',
                value: function (r) {
                  r.metadata && (this.data.rules[r.id] = r.metadata);
                  var a = this.getRule(r.id);
                  a ? a.configure(r) : this.rules.push(new mc(r, this));
                },
              },
              {
                key: 'addCheck',
                value: function (r) {
                  var a = r.metadata;
                  I(a) === 'object' &&
                    ((this.data.checks[r.id] = a),
                    I(a.messages) === 'object' &&
                      Object.keys(a.messages)
                        .filter(function (n) {
                          return (
                            a.messages.hasOwnProperty(n) &&
                            typeof a.messages[n] == 'string'
                          );
                        })
                        .forEach(function (n) {
                          a.messages[n].indexOf('function') === 0 &&
                            (a.messages[n] = new Function(
                              'return ' + a.messages[n] + ';',
                            )());
                        })),
                    this.checks[r.id]
                      ? this.checks[r.id].configure(r)
                      : (this.checks[r.id] = new fc(r));
                },
              },
              {
                key: 'run',
                value: function (r, a, n, i) {
                  this.normalizeOptions(a), (v._selectCache = []);
                  var o = iE(this.rules, r, a),
                    l = o.now,
                    u = o.later,
                    s = st();
                  l.forEach(function (f) {
                    s.defer(gc(f, r, a));
                  });
                  var c = st();
                  u.length &&
                    c.defer(function (f) {
                      Xu(a)
                        .then(function (p) {
                          return f(p);
                        })
                        .catch(function (p) {
                          console.warn("Couldn't load preload assets: ", p),
                            f(void 0);
                        });
                    });
                  var d = st();
                  d.defer(s),
                    d.defer(c),
                    d
                      .then(function (f) {
                        var p = f.pop();
                        if (p && p.length) {
                          var m = p[0];
                          m && (r = le({}, r, m));
                        }
                        var b = f[0];
                        if (!u.length) {
                          (v._selectCache = void 0),
                            n(
                              b.filter(function (h) {
                                return !!h;
                              }),
                            );
                          return;
                        }
                        var D = st();
                        u.forEach(function (h) {
                          var g = gc(h, r, a);
                          D.defer(g);
                        }),
                          D.then(function (h) {
                            (v._selectCache = void 0),
                              n(
                                b.concat(h).filter(function (g) {
                                  return !!g;
                                }),
                              );
                          }).catch(i);
                      })
                      .catch(i);
                },
              },
              {
                key: 'after',
                value: function (r, a) {
                  var n = this.rules;
                  return r.map(function (i) {
                    var o = wr(n, 'id', i.id);
                    if (!o)
                      throw new Error(
                        'Result for unknown rule. You may be running mismatch axe-core versions',
                      );
                    return o.after(i, a);
                  });
                },
              },
              {
                key: 'getRule',
                value: function (r) {
                  return this.rules.find(function (a) {
                    return a.id === r;
                  });
                },
              },
              {
                key: 'normalizeOptions',
                value: function (r) {
                  var a = this,
                    n = [],
                    i = [];
                  if (
                    (a.rules.forEach(function (c) {
                      i.push(c.id),
                        c.tags.forEach(function (d) {
                          n.includes(d) || n.push(d);
                        });
                    }),
                    ['object', 'string'].includes(I(r.runOnly)))
                  ) {
                    if (
                      (typeof r.runOnly == 'string' &&
                        (r.runOnly = [r.runOnly]),
                      Array.isArray(r.runOnly))
                    ) {
                      var o = r.runOnly.find(function (c) {
                          return n.includes(c);
                        }),
                        l = r.runOnly.find(function (c) {
                          return i.includes(c);
                        });
                      if (o && l)
                        throw new Error(
                          'runOnly cannot be both rules and tags',
                        );
                      l
                        ? (r.runOnly = { type: 'rule', values: r.runOnly })
                        : (r.runOnly = { type: 'tag', values: r.runOnly });
                    }
                    var u = r.runOnly;
                    if (
                      (u.value &&
                        !u.values &&
                        ((u.values = u.value), delete u.value),
                      !Array.isArray(u.values) || u.values.length === 0)
                    )
                      throw new Error(
                        'runOnly.values must be a non-empty array',
                      );
                    if (['rule', 'rules'].includes(u.type))
                      (u.type = 'rule'),
                        u.values.forEach(function (c) {
                          if (!i.includes(c))
                            throw new Error(
                              'unknown rule `' + c + '` in options.runOnly',
                            );
                        });
                    else if (['tag', 'tags', void 0].includes(u.type)) {
                      u.type = 'tag';
                      var s = u.values.filter(function (c) {
                        return !n.includes(c) && !/wcag2[1-3]a{1,3}/.test(c);
                      });
                      s.length !== 0 &&
                        v.log('Could not find tags `' + s.join('`, `') + '`');
                    } else
                      throw new Error(
                        "Unknown runOnly type '".concat(u.type, "'"),
                      );
                  }
                  return (
                    I(r.rules) === 'object' &&
                      Object.keys(r.rules).forEach(function (c) {
                        if (!i.includes(c))
                          throw new Error(
                            'unknown rule `' + c + '` in options.rules',
                          );
                      }),
                    r
                  );
                },
              },
              {
                key: 'setBranding',
                value: function (r) {
                  var a = { brand: this.brand, application: this.application };
                  typeof r == 'string' && (this.application = r),
                    r &&
                      r.hasOwnProperty('brand') &&
                      r.brand &&
                      typeof r.brand == 'string' &&
                      (this.brand = r.brand),
                    r &&
                      r.hasOwnProperty('application') &&
                      r.application &&
                      typeof r.application == 'string' &&
                      (this.application = r.application),
                    this._constructHelpUrls(a);
                },
              },
              {
                key: '_constructHelpUrls',
                value: function () {
                  var r = this,
                    a =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : null,
                    n = (v.version.match(/^[1-9][0-9]*\.[0-9]+/) || ['x.y'])[0];
                  this.rules.forEach(function (i) {
                    r.data.rules[i.id] || (r.data.rules[i.id] = {});
                    var o = r.data.rules[i.id];
                    (typeof o.helpUrl != 'string' ||
                      (a && o.helpUrl === bc(a, i.id, n))) &&
                      (o.helpUrl = bc(r, i.id, n));
                  });
                },
              },
              {
                key: 'resetRulesAndChecks',
                value: function () {
                  this._init(), this._resetLocale();
                },
              },
            ]),
            e
          );
        })();
      function iE(e, t, r) {
        var a = { now: [], later: [] },
          n = e.reduce(function (i, o) {
            return Zu(o, t, r)
              ? o.preload
                ? (i.later.push(o), i)
                : (i.now.push(o), i)
              : i;
          }, a);
        return n;
      }
      function gc(e, t, r) {
        return (
          r.performanceTimer && Re.mark('mark_rule_start_' + e.id),
          function (a, n) {
            e.run(
              t,
              r,
              function (i) {
                a(i);
              },
              function (i) {
                if (r.debug) n(i);
                else {
                  var o = Object.assign(new Sa(e), {
                    result: Z.CANTTELL,
                    description: 'An error occured while running this rule',
                    message: i.message,
                    stack: i.stack,
                    error: i,
                    errorNode: i.errorNode,
                  });
                  a(o);
                }
              },
            );
          }
        );
      }
      function bc(e, t, r) {
        var a = e.brand,
          n = e.application,
          i = e.lang;
        return (
          Z.helpUrlBase +
          a +
          '/' +
          (r || v.version.substring(0, v.version.lastIndexOf('.'))) +
          '/' +
          t +
          '?application=' +
          encodeURIComponent(n) +
          (i && i !== 'en' ? '&lang=' + encodeURIComponent(i) : '')
        );
      }
      var yc = nE;
      function oE(e) {
        var t = y && 'Node' in y && 'NodeList' in y,
          r = !!k;
        if (!(t && r)) {
          if (!e || !e.ownerDocument)
            throw new Error(
              'Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.',
            );
          r || (oe.set('globalDocumentSet', !0), (k = e.ownerDocument)),
            t || (oe.set('globalWindowSet', !0), (y = k.defaultView));
        }
      }
      function Pi() {
        oe.get('globalDocumentSet') &&
          (oe.set('globalDocumentSet', !1), (k = null)),
          oe.get('globalWindowSet') &&
            (oe.set('globalWindowSet', !1), (y = null));
      }
      function lE() {
        Pi(),
          v._memoizedFns.forEach(function (e) {
            return e.clear();
          }),
          oe.clear(),
          (v._tree = void 0),
          (v._selectorData = void 0),
          (v._selectCache = void 0);
      }
      var Ct = lE;
      function uE(e, t, r, a) {
        try {
          (e = new Da(e)),
            (v._tree = e.flatTree),
            (v._selectorData = Yr(e.flatTree));
        } catch (o) {
          return Ct(), a(o);
        }
        var n = st(),
          i = v._audit;
        t.performanceTimer && Re.auditStart(),
          e.frames.length &&
            t.iframes !== !1 &&
            n.defer(function (o, l) {
              Bo(e, t, 'rules', null, o, l);
            }),
          n.defer(function (o, l) {
            i.run(e, t, o, l);
          }),
          n
            .then(function (o) {
              try {
                t.performanceTimer && Re.auditEnd();
                var l = ra(
                  o.map(function (u) {
                    return { results: u };
                  }),
                );
                e.initiator &&
                  ((l = i.after(l, t)), l.forEach(wa), (l = l.map(hr)));
                try {
                  r(l, Ct);
                } catch (u) {
                  Ct(), It(u);
                }
              } catch (u) {
                Ct(), a(u);
              }
            })
            .catch(function (o) {
              Ct(), a(o);
            });
      }
      var Dc = uE;
      function sE(e, t, r) {
        var a = r,
          n = function (u) {
            u instanceof Error || (u = new Error(u)), r(u);
          },
          i = (e && e.context) || {};
        i.hasOwnProperty('include') && !i.include.length && (i.include = [k]);
        var o = (e && e.options) || {};
        switch (e.command) {
          case 'rules':
            return Dc(
              i,
              o,
              function (l, u) {
                a(l), u();
              },
              n,
            );
          case 'cleanup-plugin':
            return cs(a, n);
          default:
            if (v._audit && v._audit.commands && v._audit.commands[e.command])
              return v._audit.commands[e.command](e, r);
        }
      }
      y.top !== y &&
        (lt.subscribe('axe.start', sE),
        lt.subscribe('axe.ping', function (e, t, r) {
          r({ axe: !0 });
        }));
      function cE(e) {
        v._audit = new yc(e);
      }
      var dE = cE;
      function Lr(e) {
        (this._run = e.run),
          (this._collect = e.collect),
          (this._registry = {}),
          e.commands.forEach(function (t) {
            v._audit.registerCommand(t);
          });
      }
      (Lr.prototype.run = function () {
        return this._run.apply(this, arguments);
      }),
        (Lr.prototype.collect = function () {
          return this._collect.apply(this, arguments);
        }),
        (Lr.prototype.cleanup = function (t) {
          var r = v.utils.queue(),
            a = this;
          Object.keys(this._registry).forEach(function (n) {
            r.defer(function (i) {
              a._registry[n].cleanup(i);
            });
          }),
            r.then(t);
        }),
        (Lr.prototype.add = function (t) {
          this._registry[t.id] = t;
        });
      function fE(e) {
        v.plugins[e.id] = new Lr(e);
      }
      var pE = fE;
      function mE() {
        var e = v._audit;
        if (!e) throw new Error('No audit configured');
        e.resetRulesAndChecks(), Mp();
      }
      var hE = mE;
      function vE(e, t) {
        var r =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        (r.reporter = r.reporter || v._audit.reporter || 'v1'),
          (v._selectorData = {}),
          t instanceof Q || (t = new ls(t));
        var a = Mu(e);
        if (!a) throw new Error('unknown rule `' + e + '`');
        a = Object.create(a, { excludeHidden: { value: !1 } });
        var n = {
            initiator: !0,
            include: [t],
            exclude: [],
            frames: [],
            page: !1,
            focusable: !0,
            size: {},
            flatTree: [],
          },
          i = a.runSync(n, r);
        wa(i), hr(i);
        var o = so([i]);
        return (
          o.violations.forEach(function (l) {
            return l.nodes.forEach(function (u) {
              u.failureSummary = ei(u);
            });
          }),
          le({}, At(), o, { toolOptions: r })
        );
      }
      function wc(e) {
        var t,
          r,
          a,
          n = ve(e, 3),
          i = n[0],
          o = n[1],
          l = n[2],
          u = new TypeError('axe.run arguments are invalid');
        if (!cv(i)) {
          if (l !== void 0) throw u;
          (l = o), (o = i), (i = k);
        }
        if (I(o) !== 'object') {
          if (l !== void 0) throw u;
          (l = o), (o = {});
        }
        if (typeof l != 'function' && l !== void 0) throw u;
        return (
          (o = vt(o)),
          (o.reporter =
            (t =
              (r = o.reporter) !== null && r !== void 0
                ? r
                : (a = v._audit) === null || a === void 0
                  ? void 0
                  : a.reporter) !== null && t !== void 0
              ? t
              : 'v1'),
          { context: i, options: o, callback: l }
        );
      }
      var Oa = function () {};
      function gE() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        oE(t[0]);
        var a = wc(t),
          n = a.context,
          i = a.options,
          o = a.callback,
          l = o === void 0 ? Oa : o,
          u = bE(l),
          s = u.thenable,
          c = u.resolve,
          d = u.reject;
        try {
          fe(v._audit, 'No audit configured'),
            fe(
              !v._running,
              'Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.',
            );
        } catch (m) {
          return DE(m, l);
        }
        (v._running = !0),
          i.performanceTimer && v.utils.performanceTimer.start();
        function f(m, b) {
          var D = function (g) {
            (v._running = !1), b();
            try {
              l(null, g);
            } catch (x) {
              v.log(x);
            }
            c(g);
          };
          i.performanceTimer && v.utils.performanceTimer.end();
          try {
            yE(m, i, D);
          } catch (h) {
            (v._running = !1), b(), l(h), d(h);
          }
        }
        function p(m) {
          i.performanceTimer && v.utils.performanceTimer.end(),
            (v._running = !1),
            Pi(),
            l(m),
            d(m);
        }
        return v._runRules(n, i, f, p), s;
      }
      function bE(e) {
        var t, r, a;
        return (
          typeof Promise == 'function' && e === Oa
            ? (t = new Promise(function (n, i) {
                (r = i), (a = n);
              }))
            : (a = r = Oa),
          { thenable: t, reject: r, resolve: a }
        );
      }
      function yE(e, t, r) {
        var a = hi(t.reporter),
          n = a(e, t, r);
        n !== void 0 && r(n);
      }
      function DE(e, t) {
        if ((Pi(), typeof t == 'function' && t !== Oa)) {
          t(e.message);
          return;
        }
        throw e;
      }
      function wE() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var a = wc(t),
          n = a.options,
          i = a.context;
        fe(v._audit, 'Axe is not configured. Audit is missing.'),
          fe(
            !v._running,
            'Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.',
          );
        var o = new Da(i, v._tree);
        return (
          (v._tree = o.flatTree),
          (v._selectorData = Yr(o.flatTree)),
          (v._running = !0),
          new Promise(function (l, u) {
            v._audit.run(o, n, l, u);
          })
            .then(function (l) {
              l = l.map(function (c) {
                var d = c.nodes,
                  f = Ve(c, Sc);
                return le({ nodes: d.map(_E) }, f);
              });
              var u = o.frames.map(function (c) {
                  var d = c.node;
                  return new ot(d, n).toJSON();
                }),
                s;
              return (
                o.initiator && (s = At()),
                (v._running = !1),
                Ct(),
                { results: l, frames: u, environmentData: s }
              );
            })
            .catch(function (l) {
              return (v._running = !1), Ct(), Promise.reject(l);
            })
        );
      }
      function _E(e) {
        var t = e.node,
          r = Ve(e, Oc);
        r.node = t.toJSON();
        for (var a = 0, n = ['any', 'all', 'none']; a < n.length; a++) {
          var i = n[a];
          r[i] = r[i].map(function (o) {
            var l = o.relatedNodes,
              u = Ve(o, Ic);
            return le({}, u, {
              relatedNodes: l.map(function (s) {
                return s.toJSON();
              }),
            });
          });
        }
        return r;
      }
      function xE(e) {
        var t,
          r,
          a,
          n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        n = vt(n);
        var i =
            e.find(function (u) {
              return u.environmentData;
            }) || {},
          o = i.environmentData;
        v._audit.normalizeOptions(n),
          (n.reporter =
            (t =
              (r = n.reporter) !== null && r !== void 0
                ? r
                : (a = v._audit) === null || a === void 0
                  ? void 0
                  : a.reporter) !== null && t !== void 0
              ? t
              : 'v1'),
          EE(e);
        var l = ra(e);
        return (
          (l = v._audit.after(l, n)),
          l.forEach(wa),
          (l = l.map(hr)),
          FE(l, le({ environmentData: o }, n))
        );
      }
      function EE(e) {
        var t = [],
          r = Ye(e),
          a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n = a.value,
              i = t.shift();
            if (n) {
              n.frameSpec = i ?? null;
              var o = AE(n);
              t.unshift.apply(t, re(o));
            }
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
      }
      function AE(e) {
        var t = e.frames,
          r = e.frameSpec;
        return r
          ? t.map(function (a) {
              return ot.mergeSpecs(a, r);
            })
          : t;
      }
      function FE(e, t) {
        return new Promise(function (r) {
          var a = hi(t.reporter);
          a(e, t, r);
        });
      }
      function CE(e) {
        if (v._tree)
          throw new Error(
            'Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.',
          );
        return (v._tree = Zn(e)), (v._selectorData = Yr(v._tree)), v._tree[0];
      }
      var TE = CE,
        kE = function (t, r, a) {
          console.warn(
            '"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.',
          ),
            typeof r == 'function' && ((a = r), (r = {}));
          var n = r,
            i = n.environmentData,
            o = Ve(n, Pc);
          a(le({}, At(i), { toolOptions: o }, Or(t, r)));
        },
        RE = kE,
        SE = function (t, r, a) {
          typeof r == 'function' && ((a = r), (r = {}));
          var n = r,
            i = n.environmentData,
            o = Ve(n, Mc);
          r.resultTypes = ['violations'];
          var l = Or(t, r),
            u = l.violations;
          a(le({}, At(i), { toolOptions: o, violations: u }));
        },
        OE = SE,
        IE = function (t, r, a) {
          if (
            (typeof r == 'function' && ((a = r), (r = {})),
            !t || !Array.isArray(t))
          )
            return a(t);
          var n = t.map(function (i) {
            for (
              var o = le({}, i),
                l = ['passes', 'violations', 'incomplete', 'inapplicable'],
                u = 0,
                s = l;
              u < s.length;
              u++
            ) {
              var c = s[u];
              o[c] &&
                Array.isArray(o[c]) &&
                (o[c] = o[c].map(function (d) {
                  var f,
                    p = d.node,
                    m = Ve(d, Nc);
                  return (
                    (p =
                      typeof ((f = p) === null || f === void 0
                        ? void 0
                        : f.toJSON) == 'function'
                        ? p.toJSON()
                        : p),
                    le({ node: p }, m)
                  );
                }));
            }
            return o;
          });
          a(n);
        },
        _c = IE,
        PE = function (t, r, a) {
          typeof r == 'function' && ((a = r), (r = {}));
          var n = r,
            i = n.environmentData,
            o = Ve(n, qc);
          _c(t, o, function (l) {
            var u = At(i);
            a({ raw: l, env: u });
          });
        },
        ME = PE,
        NE = function (t, r, a) {
          typeof r == 'function' && ((a = r), (r = {}));
          var n = r,
            i = n.environmentData,
            o = Ve(n, Bc),
            l = Or(t, r),
            u = function (c) {
              c.nodes.forEach(function (d) {
                d.failureSummary = ei(d);
              });
            };
          l.incomplete.forEach(u),
            l.violations.forEach(u),
            a(le({}, At(i), { toolOptions: o }, l));
        },
        qE = NE,
        BE = function (t, r, a) {
          typeof r == 'function' && ((a = r), (r = {}));
          var n = r,
            i = n.environmentData,
            o = Ve(n, Lc),
            l = Or(t, r);
          a(le({}, At(i), { toolOptions: o }, l));
        },
        LE = BE,
        VE = {
          base: {
            Audit: yc,
            CheckResult: Oi,
            Check: fc,
            Context: Da,
            RuleResult: Sa,
            Rule: mc,
            metadataFunctionMap: Ra,
          },
          public: { reporters: Pr },
          helpers: {
            failureSummary: ei,
            incompleteFallbackMessage: ti,
            processAggregate: Or,
          },
          utils: {
            setDefaultFrameMessenger: Oo,
            cacheNodeSelectors: Au,
            getNodesMatchingExpression: xu,
            convertSelector: Xr,
          },
          commons: {
            dom: {
              nativelyHidden: zo,
              displayHidden: Uo,
              visibilityHidden: $o,
              contentVisibiltyHidden: Wo,
              ariaHidden: Go,
              opacityHidden: Yo,
              scrollHidden: Ko,
              overflowHidden: Xo,
              clipHidden: Jo,
              areaHidden: pn,
              detailsHidden: Qo,
            },
          },
        },
        jE = VE;
      (v._thisWillBeDeletedDoNotUse = jE),
        (v.constants = Z),
        (v.log = It),
        (v.AbstractVirtualNode = Q),
        (v.SerialVirtualNode = ls),
        (v.VirtualNode = Kn),
        (v._cache = oe),
        (v.imports = us),
        (v.cleanup = cs),
        (v.configure = Eg),
        (v.frameMessenger = Ag),
        (v.getRules = Cg),
        (v._load = dE),
        (v.plugins = {}),
        (v.registerPlugin = pE),
        (v.hasReporter = fs),
        (v.getReporter = hi),
        (v.addReporter = _g),
        (v.reset = hE),
        (v._runRules = Dc),
        (v.runVirtualRule = vE),
        (v.run = gE),
        (v.setup = TE),
        (v.teardown = Ct),
        (v.runPartial = wE),
        (v.finishRun = xE),
        (v.commons = Qs),
        (v.utils = La),
        v.addReporter('na', RE),
        v.addReporter('no-passes', OE),
        v.addReporter('rawEnv', ME),
        v.addReporter('raw', _c),
        v.addReporter('v1', qE),
        v.addReporter('v2', LE, !0);
    })(),
      v._load({
        lang: 'en',
        data: {
          rules: {
            accesskeys: {
              description: 'Ensures every accesskey attribute value is unique',
              help: 'accesskey attribute value should be unique',
            },
            'area-alt': {
              description:
                'Ensures <area> elements of image maps have alternate text',
              help: 'Active <area> elements must have alternate text',
            },
            'aria-allowed-attr': {
              description:
                "Ensures ARIA attributes are allowed for an element's role",
              help: 'Elements must only use allowed ARIA attributes',
            },
            'aria-allowed-role': {
              description:
                'Ensures role attribute has an appropriate value for the element',
              help: 'ARIA role should be appropriate for the element',
            },
            'aria-command-name': {
              description:
                'Ensures every ARIA button, link and menuitem has an accessible name',
              help: 'ARIA commands must have an accessible name',
            },
            'aria-dialog-name': {
              description:
                'Ensures every ARIA dialog and alertdialog node has an accessible name',
              help: 'ARIA dialog and alertdialog nodes should have an accessible name',
            },
            'aria-hidden-body': {
              description:
                "Ensures aria-hidden='true' is not present on the document body.",
              help: "aria-hidden='true' must not be present on the document body",
            },
            'aria-hidden-focus': {
              description:
                'Ensures aria-hidden elements are not focusable nor contain focusable elements',
              help: 'ARIA hidden element must not be focusable or contain focusable elements',
            },
            'aria-input-field-name': {
              description:
                'Ensures every ARIA input field has an accessible name',
              help: 'ARIA input fields must have an accessible name',
            },
            'aria-meter-name': {
              description:
                'Ensures every ARIA meter node has an accessible name',
              help: 'ARIA meter nodes must have an accessible name',
            },
            'aria-progressbar-name': {
              description:
                'Ensures every ARIA progressbar node has an accessible name',
              help: 'ARIA progressbar nodes must have an accessible name',
            },
            'aria-required-attr': {
              description:
                'Ensures elements with ARIA roles have all required ARIA attributes',
              help: 'Required ARIA attributes must be provided',
            },
            'aria-required-children': {
              description:
                'Ensures elements with an ARIA role that require child roles contain them',
              help: 'Certain ARIA roles must contain particular children',
            },
            'aria-required-parent': {
              description:
                'Ensures elements with an ARIA role that require parent roles are contained by them',
              help: 'Certain ARIA roles must be contained by particular parents',
            },
            'aria-roledescription': {
              description:
                'Ensure aria-roledescription is only used on elements with an implicit or explicit role',
              help: 'aria-roledescription must be on elements with a semantic role',
            },
            'aria-roles': {
              description:
                'Ensures all elements with a role attribute use a valid value',
              help: 'ARIA roles used must conform to valid values',
            },
            'aria-text': {
              description:
                'Ensures "role=text" is used on elements with no focusable descendants',
              help: '"role=text" should have no focusable descendants',
            },
            'aria-toggle-field-name': {
              description:
                'Ensures every ARIA toggle field has an accessible name',
              help: 'ARIA toggle fields must have an accessible name',
            },
            'aria-tooltip-name': {
              description:
                'Ensures every ARIA tooltip node has an accessible name',
              help: 'ARIA tooltip nodes must have an accessible name',
            },
            'aria-treeitem-name': {
              description:
                'Ensures every ARIA treeitem node has an accessible name',
              help: 'ARIA treeitem nodes should have an accessible name',
            },
            'aria-valid-attr-value': {
              description: 'Ensures all ARIA attributes have valid values',
              help: 'ARIA attributes must conform to valid values',
            },
            'aria-valid-attr': {
              description:
                'Ensures attributes that begin with aria- are valid ARIA attributes',
              help: 'ARIA attributes must conform to valid names',
            },
            'audio-caption': {
              description: 'Ensures <audio> elements have captions',
              help: '<audio> elements must have a captions track',
            },
            'autocomplete-valid': {
              description:
                'Ensure the autocomplete attribute is correct and suitable for the form field',
              help: 'autocomplete attribute must be used correctly',
            },
            'avoid-inline-spacing': {
              description:
                'Ensure that text spacing set through style attributes can be adjusted with custom stylesheets',
              help: 'Inline text spacing must be adjustable with custom stylesheets',
            },
            blink: {
              description: 'Ensures <blink> elements are not used',
              help: '<blink> elements are deprecated and must not be used',
            },
            'button-name': {
              description: 'Ensures buttons have discernible text',
              help: 'Buttons must have discernible text',
            },
            bypass: {
              description:
                'Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content',
              help: 'Page must have means to bypass repeated blocks',
            },
            'color-contrast-enhanced': {
              description:
                'Ensures the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds',
              help: 'Elements must meet enhanced color contrast ratio thresholds',
            },
            'color-contrast': {
              description:
                'Ensures the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds',
              help: 'Elements must meet minimum color contrast ratio thresholds',
            },
            'css-orientation-lock': {
              description:
                'Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations',
              help: 'CSS Media queries must not lock display orientation',
            },
            'definition-list': {
              description: 'Ensures <dl> elements are structured correctly',
              help: '<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements',
            },
            dlitem: {
              description:
                'Ensures <dt> and <dd> elements are contained by a <dl>',
              help: '<dt> and <dd> elements must be contained by a <dl>',
            },
            'document-title': {
              description:
                'Ensures each HTML document contains a non-empty <title> element',
              help: 'Documents must have <title> element to aid in navigation',
            },
            'duplicate-id-active': {
              description:
                'Ensures every id attribute value of active elements is unique',
              help: 'IDs of active elements must be unique',
            },
            'duplicate-id-aria': {
              description:
                'Ensures every id attribute value used in ARIA and in labels is unique',
              help: 'IDs used in ARIA and labels must be unique',
            },
            'duplicate-id': {
              description: 'Ensures every id attribute value is unique',
              help: 'id attribute value must be unique',
            },
            'empty-heading': {
              description: 'Ensures headings have discernible text',
              help: 'Headings should not be empty',
            },
            'empty-table-header': {
              description: 'Ensures table headers have discernible text',
              help: 'Table header text should not be empty',
            },
            'focus-order-semantics': {
              description:
                'Ensures elements in the focus order have a role appropriate for interactive content',
              help: 'Elements in the focus order should have an appropriate role',
            },
            'form-field-multiple-labels': {
              description:
                'Ensures form field does not have multiple label elements',
              help: 'Form field must not have multiple label elements',
            },
            'frame-focusable-content': {
              description:
                'Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1',
              help: 'Frames with focusable content must not have tabindex=-1',
            },
            'frame-tested': {
              description:
                'Ensures <iframe> and <frame> elements contain the axe-core script',
              help: 'Frames should be tested with axe-core',
            },
            'frame-title-unique': {
              description:
                'Ensures <iframe> and <frame> elements contain a unique title attribute',
              help: 'Frames must have a unique title attribute',
            },
            'frame-title': {
              description:
                'Ensures <iframe> and <frame> elements have an accessible name',
              help: 'Frames must have an accessible name',
            },
            'heading-order': {
              description:
                'Ensures the order of headings is semantically correct',
              help: 'Heading levels should only increase by one',
            },
            'hidden-content': {
              description: 'Informs users about hidden content.',
              help: 'Hidden content on the page should be analyzed',
            },
            'html-has-lang': {
              description: 'Ensures every HTML document has a lang attribute',
              help: '<html> element must have a lang attribute',
            },
            'html-lang-valid': {
              description:
                'Ensures the lang attribute of the <html> element has a valid value',
              help: '<html> element must have a valid value for the lang attribute',
            },
            'html-xml-lang-mismatch': {
              description:
                'Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page',
              help: 'HTML elements with lang and xml:lang must have the same base language',
            },
            'identical-links-same-purpose': {
              description:
                'Ensure that links with the same accessible name serve a similar purpose',
              help: 'Links with the same name must have a similar purpose',
            },
            'image-alt': {
              description:
                'Ensures <img> elements have alternate text or a role of none or presentation',
              help: 'Images must have alternate text',
            },
            'image-redundant-alt': {
              description: 'Ensure image alternative is not repeated as text',
              help: 'Alternative text of images should not be repeated as text',
            },
            'input-button-name': {
              description: 'Ensures input buttons have discernible text',
              help: 'Input buttons must have discernible text',
            },
            'input-image-alt': {
              description:
                'Ensures <input type="image"> elements have alternate text',
              help: 'Image buttons must have alternate text',
            },
            'label-content-name-mismatch': {
              description:
                'Ensures that elements labelled through their content must have their visible text as part of their accessible name',
              help: 'Elements must have their visible text as part of their accessible name',
            },
            'label-title-only': {
              description:
                'Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes',
              help: 'Form elements should have a visible label',
            },
            label: {
              description: 'Ensures every form element has a label',
              help: 'Form elements must have labels',
            },
            'landmark-banner-is-top-level': {
              description: 'Ensures the banner landmark is at top level',
              help: 'Banner landmark should not be contained in another landmark',
            },
            'landmark-complementary-is-top-level': {
              description:
                'Ensures the complementary landmark or aside is at top level',
              help: 'Aside should not be contained in another landmark',
            },
            'landmark-contentinfo-is-top-level': {
              description: 'Ensures the contentinfo landmark is at top level',
              help: 'Contentinfo landmark should not be contained in another landmark',
            },
            'landmark-main-is-top-level': {
              description: 'Ensures the main landmark is at top level',
              help: 'Main landmark should not be contained in another landmark',
            },
            'landmark-no-duplicate-banner': {
              description:
                'Ensures the document has at most one banner landmark',
              help: 'Document should not have more than one banner landmark',
            },
            'landmark-no-duplicate-contentinfo': {
              description:
                'Ensures the document has at most one contentinfo landmark',
              help: 'Document should not have more than one contentinfo landmark',
            },
            'landmark-no-duplicate-main': {
              description: 'Ensures the document has at most one main landmark',
              help: 'Document should not have more than one main landmark',
            },
            'landmark-one-main': {
              description: 'Ensures the document has a main landmark',
              help: 'Document should have one main landmark',
            },
            'landmark-unique': {
              help: 'Ensures landmarks are unique',
              description:
                'Landmarks should have a unique role or role/label/title (i.e. accessible name) combination',
            },
            'link-in-text-block': {
              description:
                'Ensure links are distinguished from surrounding text in a way that does not rely on color',
              help: 'Links must be distinguishable without relying on color',
            },
            'link-name': {
              description: 'Ensures links have discernible text',
              help: 'Links must have discernible text',
            },
            list: {
              description: 'Ensures that lists are structured correctly',
              help: '<ul> and <ol> must only directly contain <li>, <script> or <template> elements',
            },
            listitem: {
              description: 'Ensures <li> elements are used semantically',
              help: '<li> elements must be contained in a <ul> or <ol>',
            },
            marquee: {
              description: 'Ensures <marquee> elements are not used',
              help: '<marquee> elements are deprecated and must not be used',
            },
            'meta-refresh-no-exceptions': {
              description:
                'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
              help: 'Delayed refresh must not be used',
            },
            'meta-refresh': {
              description:
                'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
              help: 'Delayed refresh under 20 hours must not be used',
            },
            'meta-viewport-large': {
              description:
                'Ensures <meta name="viewport"> can scale a significant amount',
              help: 'Users should be able to zoom and scale the text up to 500%',
            },
            'meta-viewport': {
              description:
                'Ensures <meta name="viewport"> does not disable text scaling and zooming',
              help: 'Zooming and scaling must not be disabled',
            },
            'nested-interactive': {
              description:
                'Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies',
              help: 'Interactive controls must not be nested',
            },
            'no-autoplay-audio': {
              description:
                'Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio',
              help: '<video> or <audio> elements must not play automatically',
            },
            'object-alt': {
              description: 'Ensures <object> elements have alternate text',
              help: '<object> elements must have alternate text',
            },
            'p-as-heading': {
              description:
                'Ensure bold, italic text and font-size is not used to style <p> elements as a heading',
              help: 'Styled <p> elements must not be used as headings',
            },
            'page-has-heading-one': {
              description:
                'Ensure that the page, or at least one of its frames contains a level-one heading',
              help: 'Page should contain a level-one heading',
            },
            'presentation-role-conflict': {
              description:
                'Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them',
              help: 'Ensure elements marked as presentational are consistently ignored',
            },
            region: {
              description: 'Ensures all page content is contained by landmarks',
              help: 'All page content should be contained by landmarks',
            },
            'role-img-alt': {
              description: "Ensures [role='img'] elements have alternate text",
              help: "[role='img'] elements must have an alternative text",
            },
            'scope-attr-valid': {
              description:
                'Ensures the scope attribute is used correctly on tables',
              help: 'scope attribute should be used correctly',
            },
            'scrollable-region-focusable': {
              description:
                'Ensure elements that have scrollable content are accessible by keyboard',
              help: 'Scrollable region must have keyboard access',
            },
            'select-name': {
              description: 'Ensures select element has an accessible name',
              help: 'Select element must have an accessible name',
            },
            'server-side-image-map': {
              description: 'Ensures that server-side image maps are not used',
              help: 'Server-side image maps must not be used',
            },
            'skip-link': {
              description: 'Ensure all skip links have a focusable target',
              help: 'The skip-link target should exist and be focusable',
            },
            'svg-img-alt': {
              description:
                'Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text',
              help: '<svg> elements with an img role must have an alternative text',
            },
            tabindex: {
              description:
                'Ensures tabindex attribute values are not greater than 0',
              help: 'Elements should not have tabindex greater than zero',
            },
            'table-duplicate-name': {
              description:
                'Ensure the <caption> element does not contain the same text as the summary attribute',
              help: 'tables should not have the same summary and caption',
            },
            'table-fake-caption': {
              description:
                'Ensure that tables with a caption use the <caption> element.',
              help: 'Data or header cells must not be used to give caption to a data table.',
            },
            'target-size': {
              description: 'Ensure touch target have sufficient size and space',
              help: 'All touch targets must be 24px large, or leave sufficient space',
            },
            'td-has-header': {
              description:
                'Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers',
              help: 'Non-empty <td> elements in larger <table> must have an associated table header',
            },
            'td-headers-attr': {
              description:
                'Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table',
              help: 'Table cells that use the headers attribute must only refer to cells in the same table',
            },
            'th-has-data-cells': {
              description:
                'Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe',
              help: 'Table headers in a data table must refer to data cells',
            },
            'valid-lang': {
              description: 'Ensures lang attributes have valid values',
              help: 'lang attribute must have a valid value',
            },
            'video-caption': {
              description: 'Ensures <video> elements have captions',
              help: '<video> elements must have captions',
            },
          },
          checks: {
            abstractrole: {
              impact: 'serious',
              messages: {
                pass: 'Abstract roles are not used',
                fail: {
                  singular:
                    'Abstract role cannot be directly used: ${data.values}',
                  plural:
                    'Abstract roles cannot be directly used: ${data.values}',
                },
              },
            },
            'aria-allowed-attr': {
              impact: 'critical',
              messages: {
                pass: 'ARIA attributes are used correctly for the defined role',
                fail: {
                  singular: 'ARIA attribute is not allowed: ${data.values}',
                  plural: 'ARIA attributes are not allowed: ${data.values}',
                },
                incomplete:
                  'Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}',
              },
            },
            'aria-allowed-role': {
              impact: 'minor',
              messages: {
                pass: 'ARIA role is allowed for given element',
                fail: {
                  singular:
                    'ARIA role ${data.values} is not allowed for given element',
                  plural:
                    'ARIA roles ${data.values} are not allowed for given element',
                },
                incomplete: {
                  singular:
                    'ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element',
                  plural:
                    'ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element',
                },
              },
            },
            'aria-busy': {
              impact: 'serious',
              messages: {
                pass: 'Element has an aria-busy attribute',
                fail: 'Element uses aria-busy="true" while showing a loader',
              },
            },
            'aria-errormessage': {
              impact: 'critical',
              messages: {
                pass: 'aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique',
                fail: {
                  singular:
                    'aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)',
                  plural:
                    'aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)',
                  hidden:
                    'aria-errormessage value `${data.values}` cannot reference a hidden element',
                },
                incomplete: {
                  singular:
                    'ensure aria-errormessage value `${data.values}` references an existing element',
                  plural:
                    'ensure aria-errormessage values `${data.values}` reference existing elements',
                  idrefs:
                    'unable to determine if aria-errormessage element exists on the page: ${data.values}',
                },
              },
            },
            'aria-hidden-body': {
              impact: 'critical',
              messages: {
                pass: 'No aria-hidden attribute is present on document body',
                fail: 'aria-hidden=true should not be present on the document body',
              },
            },
            'aria-level': {
              impact: 'serious',
              messages: {
                pass: 'aria-level values are valid',
                incomplete:
                  'aria-level values greater than 6 are not supported in all screenreader and browser combinations',
              },
            },
            'aria-prohibited-attr': {
              impact: 'serious',
              messages: {
                pass: 'ARIA attribute is allowed',
                fail: {
                  hasRolePlural:
                    '${data.prohibited} attributes cannot be used with role "${data.role}".',
                  hasRoleSingular:
                    '${data.prohibited} attribute cannot be used with role "${data.role}".',
                  noRolePlural:
                    '${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.',
                  noRoleSingular:
                    '${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute.',
                },
                incomplete: {
                  hasRoleSingular:
                    '${data.prohibited} attribute is not well supported with role "${data.role}".',
                  hasRolePlural:
                    '${data.prohibited} attributes are not well supported with role "${data.role}".',
                  noRoleSingular:
                    '${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.',
                  noRolePlural:
                    '${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute.',
                },
              },
            },
            'aria-required-attr': {
              impact: 'critical',
              messages: {
                pass: 'All required ARIA attributes are present',
                fail: {
                  singular:
                    'Required ARIA attribute not present: ${data.values}',
                  plural:
                    'Required ARIA attributes not present: ${data.values}',
                },
              },
            },
            'aria-required-children': {
              impact: 'critical',
              messages: {
                pass: 'Required ARIA children are present',
                fail: {
                  singular:
                    'Required ARIA child role not present: ${data.values}',
                  plural:
                    'Required ARIA children role not present: ${data.values}',
                  unallowed:
                    'Element has children which are not allowed: ${data.values}',
                },
                incomplete: {
                  singular:
                    'Expecting ARIA child role to be added: ${data.values}',
                  plural:
                    'Expecting ARIA children role to be added: ${data.values}',
                },
              },
            },
            'aria-required-parent': {
              impact: 'critical',
              messages: {
                pass: 'Required ARIA parent role present',
                fail: {
                  singular:
                    'Required ARIA parent role not present: ${data.values}',
                  plural:
                    'Required ARIA parents role not present: ${data.values}',
                },
              },
            },
            'aria-roledescription': {
              impact: 'serious',
              messages: {
                pass: 'aria-roledescription used on a supported semantic role',
                incomplete:
                  'Check that the aria-roledescription is announced by supported screen readers',
                fail: 'Give the element a role that supports aria-roledescription',
              },
            },
            'aria-unsupported-attr': {
              impact: 'critical',
              messages: {
                pass: 'ARIA attribute is supported',
                fail: 'ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}',
              },
            },
            'aria-valid-attr-value': {
              impact: 'critical',
              messages: {
                pass: 'ARIA attribute values are valid',
                fail: {
                  singular: 'Invalid ARIA attribute value: ${data.values}',
                  plural: 'Invalid ARIA attribute values: ${data.values}',
                },
                incomplete: {
                  noId: 'ARIA attribute element ID does not exist on the page: ${data.needsReview}',
                  noIdShadow:
                    'ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}',
                  ariaCurrent:
                    'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',
                  idrefs:
                    'Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}',
                  empty:
                    'ARIA attribute value is ignored while empty: ${data.needsReview}',
                },
              },
            },
            'aria-valid-attr': {
              impact: 'critical',
              messages: {
                pass: 'ARIA attribute name is valid',
                fail: {
                  singular: 'Invalid ARIA attribute name: ${data.values}',
                  plural: 'Invalid ARIA attribute names: ${data.values}',
                },
              },
            },
            deprecatedrole: {
              impact: 'minor',
              messages: {
                pass: 'ARIA role is not deprecated',
                fail: 'The role used is deprecated: ${data}',
              },
            },
            fallbackrole: {
              impact: 'serious',
              messages: {
                pass: 'Only one role value used',
                fail: 'Use only one role value, since fallback roles are not supported in older browsers',
                incomplete:
                  "Use only role 'presentation' or 'none' since they are synonymous.",
              },
            },
            'has-global-aria-attribute': {
              impact: 'minor',
              messages: {
                pass: {
                  singular: 'Element has global ARIA attribute: ${data.values}',
                  plural: 'Element has global ARIA attributes: ${data.values}',
                },
                fail: 'Element does not have global ARIA attribute',
              },
            },
            'has-widget-role': {
              impact: 'minor',
              messages: {
                pass: 'Element has a widget role.',
                fail: 'Element does not have a widget role.',
              },
            },
            invalidrole: {
              impact: 'critical',
              messages: {
                pass: 'ARIA role is valid',
                fail: {
                  singular:
                    'Role must be one of the valid ARIA roles: ${data.values}',
                  plural:
                    'Roles must be one of the valid ARIA roles: ${data.values}',
                },
              },
            },
            'is-element-focusable': {
              impact: 'minor',
              messages: {
                pass: 'Element is focusable.',
                fail: 'Element is not focusable.',
              },
            },
            'no-implicit-explicit-label': {
              impact: 'moderate',
              messages: {
                pass: 'There is no mismatch between a <label> and accessible name',
                incomplete:
                  "Check that the <label> does not need be part of the ARIA ${data} field's name",
              },
            },
            unsupportedrole: {
              impact: 'critical',
              messages: {
                pass: 'ARIA role is supported',
                fail: 'The role used is not widely supported in screen readers and assistive technologies: ${data}',
              },
            },
            'valid-scrollable-semantics': {
              impact: 'minor',
              messages: {
                pass: 'Element has valid semantics for an element in the focus order.',
                fail: 'Element has invalid semantics for an element in the focus order.',
              },
            },
            'color-contrast-enhanced': {
              impact: 'serious',
              messages: {
                pass: 'Element has sufficient color contrast of ${data.contrastRatio}',
                fail: {
                  default:
                    'Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}',
                  fgOnShadowColor:
                    'Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}',
                  shadowOnBgColor:
                    'Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}',
                },
                incomplete: {
                  default: 'Unable to determine contrast ratio',
                  bgImage:
                    "Element's background color could not be determined due to a background image",
                  bgGradient:
                    "Element's background color could not be determined due to a background gradient",
                  imgNode:
                    "Element's background color could not be determined because element contains an image node",
                  bgOverlap:
                    "Element's background color could not be determined because it is overlapped by another element",
                  fgAlpha:
                    "Element's foreground color could not be determined because of alpha transparency",
                  elmPartiallyObscured:
                    "Element's background color could not be determined because it's partially obscured by another element",
                  elmPartiallyObscuring:
                    "Element's background color could not be determined because it partially overlaps other elements",
                  outsideViewport:
                    "Element's background color could not be determined because it's outside the viewport",
                  equalRatio:
                    'Element has a 1:1 contrast ratio with the background',
                  shortTextContent:
                    'Element content is too short to determine if it is actual text content',
                  nonBmp: 'Element content contains only non-text characters',
                  pseudoContent:
                    "Element's background color could not be determined due to a pseudo element",
                },
              },
            },
            'color-contrast': {
              impact: 'serious',
              messages: {
                pass: {
                  default:
                    'Element has sufficient color contrast of ${data.contrastRatio}',
                  hidden: 'Element is hidden',
                },
                fail: {
                  default:
                    'Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}',
                  fgOnShadowColor:
                    'Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}',
                  shadowOnBgColor:
                    'Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}',
                },
                incomplete: {
                  default: 'Unable to determine contrast ratio',
                  bgImage:
                    "Element's background color could not be determined due to a background image",
                  bgGradient:
                    "Element's background color could not be determined due to a background gradient",
                  imgNode:
                    "Element's background color could not be determined because element contains an image node",
                  bgOverlap:
                    "Element's background color could not be determined because it is overlapped by another element",
                  fgAlpha:
                    "Element's foreground color could not be determined because of alpha transparency",
                  elmPartiallyObscured:
                    "Element's background color could not be determined because it's partially obscured by another element",
                  elmPartiallyObscuring:
                    "Element's background color could not be determined because it partially overlaps other elements",
                  outsideViewport:
                    "Element's background color could not be determined because it's outside the viewport",
                  equalRatio:
                    'Element has a 1:1 contrast ratio with the background',
                  shortTextContent:
                    'Element content is too short to determine if it is actual text content',
                  nonBmp: 'Element content contains only non-text characters',
                  pseudoContent:
                    "Element's background color could not be determined due to a pseudo element",
                },
              },
            },
            'link-in-text-block-style': {
              impact: 'serious',
              messages: {
                pass: 'Links can be distinguished from surrounding text by visual styling',
                fail: 'The link has no styling (such as underline) to distinguish it from the surrounding text',
              },
            },
            'link-in-text-block': {
              impact: 'serious',
              messages: {
                pass: 'Links can be distinguished from surrounding text in some way other than by color',
                fail: {
                  fgContrast:
                    'The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})',
                  bgContrast:
                    'The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})',
                },
                incomplete: {
                  default:
                    "Element's foreground contrast ratio could not be determined",
                  bgContrast:
                    "Element's background contrast ratio could not be determined",
                  bgImage:
                    "Element's contrast ratio could not be determined due to a background image",
                  bgGradient:
                    "Element's contrast ratio could not be determined due to a background gradient",
                  imgNode:
                    "Element's contrast ratio could not be determined because element contains an image node",
                  bgOverlap:
                    "Element's contrast ratio could not be determined because of element overlap",
                },
              },
            },
            'autocomplete-appropriate': {
              impact: 'serious',
              messages: {
                pass: 'the autocomplete value is on an appropriate element',
                fail: 'the autocomplete value is inappropriate for this type of input',
              },
            },
            'autocomplete-valid': {
              impact: 'serious',
              messages: {
                pass: 'the autocomplete attribute is correctly formatted',
                fail: 'the autocomplete attribute is incorrectly formatted',
              },
            },
            accesskeys: {
              impact: 'serious',
              messages: {
                pass: 'Accesskey attribute value is unique',
                fail: 'Document has multiple elements with the same accesskey',
              },
            },
            'focusable-content': {
              impact: 'serious',
              messages: {
                pass: 'Element contains focusable elements',
                fail: 'Element should have focusable content',
              },
            },
            'focusable-disabled': {
              impact: 'serious',
              messages: {
                pass: 'No focusable elements contained within element',
                incomplete:
                  'Check if the focusable elements immediately move the focus indicator',
                fail: 'Focusable content should be disabled or be removed from the DOM',
              },
            },
            'focusable-element': {
              impact: 'serious',
              messages: {
                pass: 'Element is focusable',
                fail: 'Element should be focusable',
              },
            },
            'focusable-modal-open': {
              impact: 'serious',
              messages: {
                pass: 'No focusable elements while a modal is open',
                incomplete:
                  'Check that focusable elements are not tabbable in the current state',
              },
            },
            'focusable-no-name': {
              impact: 'serious',
              messages: {
                pass: 'Element is not in tab order or has accessible text',
                fail: 'Element is in tab order and does not have accessible text',
                incomplete:
                  'Unable to determine if element has an accessible name',
              },
            },
            'focusable-not-tabbable': {
              impact: 'serious',
              messages: {
                pass: 'No focusable elements contained within element',
                incomplete:
                  'Check if the focusable elements immediately move the focus indicator',
                fail: "Focusable content should have tabindex='-1' or be removed from the DOM",
              },
            },
            'frame-focusable-content': {
              impact: 'serious',
              messages: {
                pass: 'Element does not have focusable descendants',
                fail: 'Element has focusable descendants',
                incomplete: 'Could not determine if element has descendants',
              },
            },
            'landmark-is-top-level': {
              impact: 'moderate',
              messages: {
                pass: 'The ${data.role} landmark is at the top level.',
                fail: 'The ${data.role} landmark is contained in another landmark.',
              },
            },
            'no-focusable-content': {
              impact: 'serious',
              messages: {
                pass: 'Element does not have focusable descendants',
                fail: {
                  default: 'Element has focusable descendants',
                  notHidden:
                    "Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with 'aria-hidden=true')",
                },
                incomplete: 'Could not determine if element has descendants',
              },
            },
            'page-has-heading-one': {
              impact: 'moderate',
              messages: {
                pass: 'Page has at least one level-one heading',
                fail: 'Page must have a level-one heading',
              },
            },
            'page-has-main': {
              impact: 'moderate',
              messages: {
                pass: 'Document has at least one main landmark',
                fail: 'Document does not have a main landmark',
              },
            },
            'page-no-duplicate-banner': {
              impact: 'moderate',
              messages: {
                pass: 'Document does not have more than one banner landmark',
                fail: 'Document has more than one banner landmark',
              },
            },
            'page-no-duplicate-contentinfo': {
              impact: 'moderate',
              messages: {
                pass: 'Document does not have more than one contentinfo landmark',
                fail: 'Document has more than one contentinfo landmark',
              },
            },
            'page-no-duplicate-main': {
              impact: 'moderate',
              messages: {
                pass: 'Document does not have more than one main landmark',
                fail: 'Document has more than one main landmark',
              },
            },
            tabindex: {
              impact: 'serious',
              messages: {
                pass: 'Element does not have a tabindex greater than 0',
                fail: 'Element has a tabindex greater than 0',
              },
            },
            'alt-space-value': {
              impact: 'critical',
              messages: {
                pass: 'Element has a valid alt attribute value',
                fail: 'Element has an alt attribute containing only a space character, which is not ignored by all screen readers',
              },
            },
            'duplicate-img-label': {
              impact: 'minor',
              messages: {
                pass: 'Element does not duplicate existing text in <img> alt text',
                fail: 'Element contains <img> element with alt text that duplicates existing text',
              },
            },
            'explicit-label': {
              impact: 'critical',
              messages: {
                pass: 'Form element has an explicit <label>',
                fail: 'Form element does not have an explicit <label>',
                incomplete:
                  'Unable to determine if form element has an explicit <label>',
              },
            },
            'help-same-as-label': {
              impact: 'minor',
              messages: {
                pass: 'Help text (title or aria-describedby) does not duplicate label text',
                fail: 'Help text (title or aria-describedby) text is the same as the label text',
              },
            },
            'hidden-explicit-label': {
              impact: 'critical',
              messages: {
                pass: 'Form element has a visible explicit <label>',
                fail: 'Form element has explicit <label> that is hidden',
                incomplete:
                  'Unable to determine if form element has explicit <label> that is hidden',
              },
            },
            'implicit-label': {
              impact: 'critical',
              messages: {
                pass: 'Form element has an implicit (wrapped) <label>',
                fail: 'Form element does not have an implicit (wrapped) <label>',
                incomplete:
                  'Unable to determine if form element has an implicit (wrapped} <label>',
              },
            },
            'label-content-name-mismatch': {
              impact: 'serious',
              messages: {
                pass: "Element contains visible text as part of it's accessible name",
                fail: 'Text inside the element is not included in the accessible name',
              },
            },
            'multiple-label': {
              impact: 'moderate',
              messages: {
                pass: 'Form field does not have multiple label elements',
                incomplete:
                  'Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information.',
              },
            },
            'title-only': {
              impact: 'serious',
              messages: {
                pass: 'Form element does not solely use title attribute for its label',
                fail: 'Only title used to generate label for form element',
              },
            },
            'landmark-is-unique': {
              impact: 'moderate',
              messages: {
                pass: 'Landmarks must have a unique role or role/label/title (i.e. accessible name) combination',
                fail: 'The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable',
              },
            },
            'has-lang': {
              impact: 'serious',
              messages: {
                pass: 'The <html> element has a lang attribute',
                fail: {
                  noXHTML:
                    'The xml:lang attribute is not valid on HTML pages, use the lang attribute.',
                  noLang: 'The <html> element does not have a lang attribute',
                },
              },
            },
            'valid-lang': {
              impact: 'serious',
              messages: {
                pass: 'Value of lang attribute is included in the list of valid languages',
                fail: 'Value of lang attribute not included in the list of valid languages',
              },
            },
            'xml-lang-mismatch': {
              impact: 'moderate',
              messages: {
                pass: 'Lang and xml:lang attributes have the same base language',
                fail: 'Lang and xml:lang attributes do not have the same base language',
              },
            },
            dlitem: {
              impact: 'serious',
              messages: {
                pass: 'Description list item has a <dl> parent element',
                fail: 'Description list item does not have a <dl> parent element',
              },
            },
            listitem: {
              impact: 'serious',
              messages: {
                pass: 'List item has a <ul>, <ol> or role="list" parent element',
                fail: {
                  default:
                    'List item does not have a <ul>, <ol> parent element',
                  roleNotValid:
                    'List item does not have a <ul>, <ol> parent element without a role, or a role="list"',
                },
              },
            },
            'only-dlitems': {
              impact: 'serious',
              messages: {
                pass: 'dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements',
                fail: 'dl element has direct children that are not allowed: ${data.values}',
              },
            },
            'only-listitems': {
              impact: 'serious',
              messages: {
                pass: 'List element only has direct children that are allowed inside <li> elements',
                fail: 'List element has direct children that are not allowed: ${data.values}',
              },
            },
            'structured-dlitems': {
              impact: 'serious',
              messages: {
                pass: 'When not empty, element has both <dt> and <dd> elements',
                fail: 'When not empty, element does not have at least one <dt> element followed by at least one <dd> element',
              },
            },
            caption: {
              impact: 'critical',
              messages: {
                pass: 'The multimedia element has a captions track',
                incomplete: 'Check that captions is available for the element',
              },
            },
            'frame-tested': {
              impact: 'critical',
              messages: {
                pass: 'The iframe was tested with axe-core',
                fail: 'The iframe could not be tested with axe-core',
                incomplete: 'The iframe still has to be tested with axe-core',
              },
            },
            'no-autoplay-audio': {
              impact: 'moderate',
              messages: {
                pass: '<video> or <audio> does not output audio for more than allowed duration or has controls mechanism',
                fail: '<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism',
                incomplete:
                  'Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism',
              },
            },
            'css-orientation-lock': {
              impact: 'serious',
              messages: {
                pass: 'Display is operable, and orientation lock does not exist',
                fail: 'CSS Orientation lock is applied, and makes display inoperable',
                incomplete: 'CSS Orientation lock cannot be determined',
              },
            },
            'meta-viewport-large': {
              impact: 'minor',
              messages: {
                pass: '<meta> tag does not prevent significant zooming on mobile devices',
                fail: '<meta> tag limits zooming on mobile devices',
              },
            },
            'meta-viewport': {
              impact: 'critical',
              messages: {
                pass: '<meta> tag does not disable zooming on mobile devices',
                fail: '${data} on <meta> tag disables zooming on mobile devices',
              },
            },
            'target-offset': {
              impact: 'serious',
              messages: {
                pass: 'Target has sufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px)',
                fail: 'Target has insufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px)',
                incomplete: {
                  default:
                    'Element with negative tabindex has insufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px). Is this a target?',
                  nonTabbableNeighbor:
                    'Target has insufficient offset from a neighbor with negative tabindex (${data.closestOffset}px should be at least ${data.minOffset}px). Is the neighbor a target?',
                },
              },
            },
            'target-size': {
              impact: 'serious',
              messages: {
                pass: {
                  default:
                    'Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)',
                  obscured:
                    'Control is ignored because it is fully obscured and thus not clickable',
                },
                fail: {
                  default:
                    'Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)',
                  partiallyObscured:
                    'Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)',
                },
                incomplete: {
                  default:
                    'Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?',
                  contentOverflow:
                    'Element size could not be accurately determined due to overflow content',
                  partiallyObscured:
                    'Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?',
                  partiallyObscuredNonTabbable:
                    'Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?',
                },
              },
            },
            'header-present': {
              impact: 'serious',
              messages: {
                pass: 'Page has a heading',
                fail: 'Page does not have a heading',
              },
            },
            'heading-order': {
              impact: 'moderate',
              messages: {
                pass: 'Heading order valid',
                fail: 'Heading order invalid',
                incomplete: 'Unable to determine previous heading',
              },
            },
            'identical-links-same-purpose': {
              impact: 'minor',
              messages: {
                pass: 'There are no other links with the same name, that go to a different URL',
                incomplete:
                  'Check that links have the same purpose, or are intentionally ambiguous.',
              },
            },
            'internal-link-present': {
              impact: 'serious',
              messages: {
                pass: 'Valid skip link found',
                fail: 'No valid skip link found',
              },
            },
            landmark: {
              impact: 'serious',
              messages: {
                pass: 'Page has a landmark region',
                fail: 'Page does not have a landmark region',
              },
            },
            'meta-refresh-no-exceptions': {
              impact: 'minor',
              messages: {
                pass: '<meta> tag does not immediately refresh the page',
                fail: '<meta> tag forces timed refresh of page',
              },
            },
            'meta-refresh': {
              impact: 'critical',
              messages: {
                pass: '<meta> tag does not immediately refresh the page',
                fail: '<meta> tag forces timed refresh of page (less than 20 hours)',
              },
            },
            'p-as-heading': {
              impact: 'serious',
              messages: {
                pass: '<p> elements are not styled as headings',
                fail: 'Heading elements should be used instead of styled <p> elements',
                incomplete:
                  'Unable to determine if <p> elements are styled as headings',
              },
            },
            region: {
              impact: 'moderate',
              messages: {
                pass: 'All page content is contained by landmarks',
                fail: 'Some page content is not contained by landmarks',
              },
            },
            'skip-link': {
              impact: 'moderate',
              messages: {
                pass: 'Skip link target exists',
                incomplete:
                  'Skip link target should become visible on activation',
                fail: 'No skip link target',
              },
            },
            'unique-frame-title': {
              impact: 'serious',
              messages: {
                pass: "Element's title attribute is unique",
                fail: "Element's title attribute is not unique",
              },
            },
            'duplicate-id-active': {
              impact: 'serious',
              messages: {
                pass: 'Document has no active elements that share the same id attribute',
                fail: 'Document has active elements with the same id attribute: ${data}',
              },
            },
            'duplicate-id-aria': {
              impact: 'critical',
              messages: {
                pass: 'Document has no elements referenced with ARIA or labels that share the same id attribute',
                fail: 'Document has multiple elements referenced with ARIA with the same id attribute: ${data}',
              },
            },
            'duplicate-id': {
              impact: 'minor',
              messages: {
                pass: 'Document has no static elements that share the same id attribute',
                fail: 'Document has multiple static elements with the same id attribute: ${data}',
              },
            },
            'aria-label': {
              impact: 'serious',
              messages: {
                pass: 'aria-label attribute exists and is not empty',
                fail: 'aria-label attribute does not exist or is empty',
              },
            },
            'aria-labelledby': {
              impact: 'serious',
              messages: {
                pass: 'aria-labelledby attribute exists and references elements that are visible to screen readers',
                fail: 'aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty',
                incomplete:
                  'ensure aria-labelledby references an existing element',
              },
            },
            'avoid-inline-spacing': {
              impact: 'serious',
              messages: {
                pass: "No inline styles with '!important' that affect text spacing has been specified",
                fail: {
                  singular:
                    "Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",
                  plural:
                    "Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers",
                },
              },
            },
            'button-has-visible-text': {
              impact: 'critical',
              messages: {
                pass: 'Element has inner text that is visible to screen readers',
                fail: 'Element does not have inner text that is visible to screen readers',
                incomplete: 'Unable to determine if element has children',
              },
            },
            'doc-has-title': {
              impact: 'serious',
              messages: {
                pass: 'Document has a non-empty <title> element',
                fail: 'Document does not have a non-empty <title> element',
              },
            },
            exists: {
              impact: 'minor',
              messages: {
                pass: 'Element does not exist',
                incomplete: 'Element exists',
              },
            },
            'has-alt': {
              impact: 'critical',
              messages: {
                pass: 'Element has an alt attribute',
                fail: 'Element does not have an alt attribute',
              },
            },
            'has-visible-text': {
              impact: 'minor',
              messages: {
                pass: 'Element has text that is visible to screen readers',
                fail: 'Element does not have text that is visible to screen readers',
                incomplete: 'Unable to determine if element has children',
              },
            },
            'important-letter-spacing': {
              impact: 'serious',
              messages: {
                pass: 'Letter-spacing in the style attribute is not set to !important, or meets the minimum',
                fail: 'letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)',
              },
            },
            'important-line-height': {
              impact: 'serious',
              messages: {
                pass: 'line-height in the style attribute is not set to !important, or meets the minimum',
                fail: 'line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)',
              },
            },
            'important-word-spacing': {
              impact: 'serious',
              messages: {
                pass: 'word-spacing in the style attribute is not set to !important, or meets the minimum',
                fail: 'word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)',
              },
            },
            'is-on-screen': {
              impact: 'serious',
              messages: {
                pass: 'Element is not visible',
                fail: 'Element is visible',
              },
            },
            'non-empty-alt': {
              impact: 'critical',
              messages: {
                pass: 'Element has a non-empty alt attribute',
                fail: {
                  noAttr: 'Element has no alt attribute',
                  emptyAttr: 'Element has an empty alt attribute',
                },
              },
            },
            'non-empty-if-present': {
              impact: 'critical',
              messages: {
                pass: {
                  default: 'Element does not have a value attribute',
                  'has-label': 'Element has a non-empty value attribute',
                },
                fail: 'Element has a value attribute and the value attribute is empty',
              },
            },
            'non-empty-placeholder': {
              impact: 'serious',
              messages: {
                pass: 'Element has a placeholder attribute',
                fail: {
                  noAttr: 'Element has no placeholder attribute',
                  emptyAttr: 'Element has an empty placeholder attribute',
                },
              },
            },
            'non-empty-title': {
              impact: 'serious',
              messages: {
                pass: 'Element has a title attribute',
                fail: {
                  noAttr: 'Element has no title attribute',
                  emptyAttr: 'Element has an empty title attribute',
                },
              },
            },
            'non-empty-value': {
              impact: 'critical',
              messages: {
                pass: 'Element has a non-empty value attribute',
                fail: {
                  noAttr: 'Element has no value attribute',
                  emptyAttr: 'Element has an empty value attribute',
                },
              },
            },
            'presentational-role': {
              impact: 'minor',
              messages: {
                pass: 'Element\'s default semantics were overriden with role="${data.role}"',
                fail: {
                  default: `Element's default semantics were not overridden with role="none" or role="presentation"`,
                  globalAria:
                    "Element's role is not presentational because it has a global ARIA attribute",
                  focusable:
                    "Element's role is not presentational because it is focusable",
                  both: "Element's role is not presentational because it has a global ARIA attribute and is focusable",
                  iframe:
                    'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers',
                },
              },
            },
            'role-none': {
              impact: 'minor',
              messages: {
                pass: `Element's default semantics were overriden with role="none"`,
                fail: `Element's default semantics were not overridden with role="none"`,
              },
            },
            'role-presentation': {
              impact: 'minor',
              messages: {
                pass: `Element's default semantics were overriden with role="presentation"`,
                fail: `Element's default semantics were not overridden with role="presentation"`,
              },
            },
            'svg-non-empty-title': {
              impact: 'serious',
              messages: {
                pass: 'Element has a child that is a title',
                fail: {
                  noTitle: 'Element has no child that is a title',
                  emptyTitle: 'Element child title is empty',
                },
                incomplete:
                  'Unable to determine element has a child that is a title',
              },
            },
            'caption-faked': {
              impact: 'serious',
              messages: {
                pass: 'The first row of a table is not used as a caption',
                fail: 'The first child of the table should be a caption instead of a table cell',
              },
            },
            'html5-scope': {
              impact: 'moderate',
              messages: {
                pass: 'Scope attribute is only used on table header elements (<th>)',
                fail: 'In HTML 5, scope attributes may only be used on table header elements (<th>)',
              },
            },
            'same-caption-summary': {
              impact: 'minor',
              messages: {
                pass: 'Content of summary attribute and <caption> are not duplicated',
                fail: 'Content of summary attribute and <caption> element are identical',
                incomplete:
                  'Unable to determine if <table> element has a caption',
              },
            },
            'scope-value': {
              impact: 'critical',
              messages: {
                pass: 'Scope attribute is used correctly',
                fail: "The value of the scope attribute may only be 'row' or 'col'",
              },
            },
            'td-has-header': {
              impact: 'critical',
              messages: {
                pass: 'All non-empty data cells have table headers',
                fail: 'Some non-empty data cells do not have table headers',
              },
            },
            'td-headers-attr': {
              impact: 'serious',
              messages: {
                pass: 'The headers attribute is exclusively used to refer to other cells in the table',
                incomplete: 'The headers attribute is empty',
                fail: 'The headers attribute is not exclusively used to refer to other cells in the table',
              },
            },
            'th-has-data-cells': {
              impact: 'serious',
              messages: {
                pass: 'All table header cells refer to data cells',
                fail: 'Not all table header cells refer to data cells',
                incomplete: 'Table data cells are missing or empty',
              },
            },
            'hidden-content': {
              impact: 'minor',
              messages: {
                pass: 'All content on the page has been analyzed.',
                fail: 'There were problems analyzing the content on this page.',
                incomplete:
                  'There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it.',
              },
            },
          },
          failureSummaries: {
            any: {
              failureMessage: function (R) {
                var q = 'Fix any of the following:',
                  $ = R;
                if ($)
                  for (var pe, ye = -1, rt = $.length - 1; ye < rt; )
                    (pe = $[(ye += 1)]),
                      (q +=
                        `
  ` +
                        pe.split(`
`).join(`
  `));
                return q;
              },
            },
            none: {
              failureMessage: function (R) {
                var q = 'Fix all of the following:',
                  $ = R;
                if ($)
                  for (var pe, ye = -1, rt = $.length - 1; ye < rt; )
                    (pe = $[(ye += 1)]),
                      (q +=
                        `
  ` +
                        pe.split(`
`).join(`
  `));
                return q;
              },
            },
          },
          incompleteFallbackMessage:
            "axe couldn't tell the reason. Time to break out the element inspector!",
        },
        rules: [
          {
            id: 'accesskeys',
            selector: '[accesskey]',
            excludeHidden: !1,
            tags: ['cat.keyboard', 'best-practice'],
            all: [],
            any: [],
            none: ['accesskeys'],
          },
          {
            id: 'area-alt',
            selector: 'map area[href]',
            excludeHidden: !1,
            tags: [
              'cat.text-alternatives',
              'wcag2a',
              'wcag244',
              'wcag412',
              'section508',
              'section508.22.a',
              'ACT',
              'TTv5',
              'TT6.a',
            ],
            actIds: ['c487ae'],
            all: [],
            any: [
              { options: { attribute: 'alt' }, id: 'non-empty-alt' },
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: [],
          },
          {
            id: 'aria-allowed-attr',
            matches: 'aria-allowed-attr-matches',
            tags: ['cat.aria', 'wcag2a', 'wcag412'],
            actIds: ['5c01ea'],
            all: [],
            any: [
              {
                options: {
                  validTreeRowAttrs: [
                    'aria-posinset',
                    'aria-setsize',
                    'aria-expanded',
                    'aria-level',
                  ],
                },
                id: 'aria-allowed-attr',
              },
            ],
            none: [
              'aria-unsupported-attr',
              {
                options: { elementsAllowedAriaLabel: ['applet', 'input'] },
                id: 'aria-prohibited-attr',
              },
            ],
          },
          {
            id: 'aria-allowed-role',
            excludeHidden: !1,
            selector: '[role]',
            matches: 'aria-allowed-role-matches',
            tags: ['cat.aria', 'best-practice'],
            all: [],
            any: [
              {
                options: { allowImplicit: !0, ignoredTags: [] },
                id: 'aria-allowed-role',
              },
            ],
            none: [],
          },
          {
            id: 'aria-command-name',
            selector: '[role="link"], [role="button"], [role="menuitem"]',
            matches: 'no-naming-method-matches',
            tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT', 'TTv5', 'TT6.a'],
            actIds: ['97a4e1'],
            all: [],
            any: [
              'has-visible-text',
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: [],
          },
          {
            id: 'aria-dialog-name',
            selector: '[role="dialog"], [role="alertdialog"]',
            matches: 'no-naming-method-matches',
            tags: ['cat.aria', 'best-practice'],
            all: [],
            any: [
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: [],
          },
          {
            id: 'aria-hidden-body',
            selector: 'body',
            excludeHidden: !1,
            matches: 'is-initiator-matches',
            tags: ['cat.aria', 'wcag2a', 'wcag412'],
            all: [],
            any: ['aria-hidden-body'],
            none: [],
          },
          {
            id: 'aria-hidden-focus',
            selector: '[aria-hidden="true"]',
            matches: 'aria-hidden-focus-matches',
            excludeHidden: !1,
            tags: ['cat.name-role-value', 'wcag2a', 'wcag412'],
            actIds: ['6cfa84'],
            all: [
              'focusable-modal-open',
              'focusable-disabled',
              'focusable-not-tabbable',
            ],
            any: [],
            none: [],
          },
          {
            id: 'aria-input-field-name',
            selector:
              '[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',
            matches: 'no-naming-method-matches',
            tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT', 'TTv5', 'TT5.c'],
            actIds: ['e086e5'],
            all: [],
            any: [
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: ['no-implicit-explicit-label'],
          },
          {
            id: 'aria-meter-name',
            selector: '[role="meter"]',
            matches: 'no-naming-method-matches',
            tags: ['cat.aria', 'wcag2a', 'wcag111'],
            all: [],
            any: [
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: [],
          },
          {
            id: 'aria-progressbar-name',
            selector: '[role="progressbar"]',
            matches: 'no-naming-method-matches',
            tags: ['cat.aria', 'wcag2a', 'wcag111'],
            all: [],
            any: [
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: [],
          },
          {
            id: 'aria-required-attr',
            selector: '[role]',
            tags: ['cat.aria', 'wcag2a', 'wcag412'],
            actIds: ['4e8ab6'],
            all: [],
            any: ['aria-required-attr'],
            none: [],
          },
          {
            id: 'aria-required-children',
            selector: '[role]',
            matches: 'aria-required-children-matches',
            tags: ['cat.aria', 'wcag2a', 'wcag131'],
            actIds: ['bc4a75', 'ff89c9'],
            all: [],
            any: [
              {
                options: {
                  reviewEmpty: [
                    'doc-bibliography',
                    'doc-endnotes',
                    'grid',
                    'list',
                    'listbox',
                    'menu',
                    'menubar',
                    'table',
                    'tablist',
                    'tree',
                    'treegrid',
                    'rowgroup',
                  ],
                },
                id: 'aria-required-children',
              },
              'aria-busy',
            ],
            none: [],
          },
          {
            id: 'aria-required-parent',
            selector: '[role]',
            matches: 'aria-required-parent-matches',
            tags: ['cat.aria', 'wcag2a', 'wcag131'],
            actIds: ['ff89c9'],
            all: [],
            any: [
              {
                options: { ownGroupRoles: ['listitem', 'treeitem'] },
                id: 'aria-required-parent',
              },
            ],
            none: [],
          },
          {
            id: 'aria-roledescription',
            selector: '[aria-roledescription]',
            tags: ['cat.aria', 'wcag2a', 'wcag412', 'deprecated'],
            enabled: !1,
            all: [],
            any: [
              {
                options: {
                  supportedRoles: [
                    'button',
                    'img',
                    'checkbox',
                    'radio',
                    'combobox',
                    'menuitemcheckbox',
                    'menuitemradio',
                  ],
                },
                id: 'aria-roledescription',
              },
            ],
            none: [],
          },
          {
            id: 'aria-roles',
            selector: '[role]',
            matches: 'no-empty-role-matches',
            tags: ['cat.aria', 'wcag2a', 'wcag412'],
            actIds: ['674b10'],
            all: [],
            any: [],
            none: [
              'invalidrole',
              'abstractrole',
              'unsupportedrole',
              'deprecatedrole',
            ],
          },
          {
            id: 'aria-text',
            selector: '[role=text]',
            tags: ['cat.aria', 'best-practice'],
            all: [],
            any: ['no-focusable-content'],
            none: [],
          },
          {
            id: 'aria-toggle-field-name',
            selector:
              '[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',
            matches: 'no-naming-method-matches',
            tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT', 'TTv5', 'TT5.c'],
            actIds: ['e086e5'],
            all: [],
            any: [
              'has-visible-text',
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: ['no-implicit-explicit-label'],
          },
          {
            id: 'aria-tooltip-name',
            selector: '[role="tooltip"]',
            matches: 'no-naming-method-matches',
            tags: ['cat.aria', 'wcag2a', 'wcag412'],
            all: [],
            any: [
              'has-visible-text',
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: [],
          },
          {
            id: 'aria-treeitem-name',
            selector: '[role="treeitem"]',
            matches: 'no-naming-method-matches',
            tags: ['cat.aria', 'best-practice'],
            all: [],
            any: [
              'has-visible-text',
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: [],
          },
          {
            id: 'aria-valid-attr-value',
            matches: 'aria-has-attr-matches',
            tags: ['cat.aria', 'wcag2a', 'wcag412'],
            actIds: ['6a7281'],
            all: [
              { options: [], id: 'aria-valid-attr-value' },
              'aria-errormessage',
              'aria-level',
            ],
            any: [],
            none: [],
          },
          {
            id: 'aria-valid-attr',
            matches: 'aria-has-attr-matches',
            tags: ['cat.aria', 'wcag2a', 'wcag412'],
            actIds: ['5f99a7'],
            all: [],
            any: [{ options: [], id: 'aria-valid-attr' }],
            none: [],
          },
          {
            id: 'audio-caption',
            selector: 'audio',
            enabled: !1,
            excludeHidden: !1,
            tags: [
              'cat.time-and-media',
              'wcag2a',
              'wcag121',
              'section508',
              'section508.22.a',
              'deprecated',
            ],
            actIds: ['2eb176', 'afb423'],
            all: [],
            any: [],
            none: ['caption'],
          },
          {
            id: 'autocomplete-valid',
            matches: 'autocomplete-matches',
            tags: ['cat.forms', 'wcag21aa', 'wcag135', 'ACT'],
            actIds: ['73f2c2'],
            all: [
              {
                options: {
                  stateTerms: [
                    'none',
                    'false',
                    'true',
                    'disabled',
                    'enabled',
                    'undefined',
                    'null',
                  ],
                },
                id: 'autocomplete-valid',
              },
            ],
            any: [],
            none: [],
          },
          {
            id: 'avoid-inline-spacing',
            selector: '[style]',
            matches: 'is-visible-on-screen-matches',
            tags: ['cat.structure', 'wcag21aa', 'wcag1412', 'ACT'],
            actIds: ['24afc2', '9e45ec', '78fd32'],
            all: [
              {
                options: { cssProperty: 'letter-spacing', minValue: 0.12 },
                id: 'important-letter-spacing',
              },
              {
                options: { cssProperty: 'word-spacing', minValue: 0.16 },
                id: 'important-word-spacing',
              },
              {
                options: {
                  multiLineOnly: !0,
                  cssProperty: 'line-height',
                  minValue: 1.5,
                  normalValue: 1,
                },
                id: 'important-line-height',
              },
            ],
            any: [],
            none: [],
          },
          {
            id: 'blink',
            selector: 'blink',
            excludeHidden: !1,
            tags: [
              'cat.time-and-media',
              'wcag2a',
              'wcag222',
              'section508',
              'section508.22.j',
              'TTv5',
              'TT2.b',
            ],
            all: [],
            any: [],
            none: ['is-on-screen'],
          },
          {
            id: 'button-name',
            selector: 'button',
            matches: 'no-explicit-name-required-matches',
            tags: [
              'cat.name-role-value',
              'wcag2a',
              'wcag412',
              'section508',
              'section508.22.a',
              'ACT',
              'TTv5',
              'TT6.a',
            ],
            actIds: ['97a4e1', 'm6b1q3'],
            all: [],
            any: [
              'button-has-visible-text',
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
              'presentational-role',
            ],
            none: [],
          },
          {
            id: 'bypass',
            selector: 'html',
            pageLevel: !0,
            matches: 'bypass-matches',
            reviewOnFail: !0,
            tags: [
              'cat.keyboard',
              'wcag2a',
              'wcag241',
              'section508',
              'section508.22.o',
              'TTv5',
              'TT9.a',
            ],
            actIds: ['cf77f2', '047fe0', 'b40fd1', '3e12e1', 'ye5d6e'],
            all: [],
            any: [
              'internal-link-present',
              {
                options: {
                  selector:
                    ':is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]',
                },
                id: 'header-present',
              },
              { options: { selector: 'main, [role=main]' }, id: 'landmark' },
            ],
            none: [],
          },
          {
            id: 'color-contrast-enhanced',
            matches: 'color-contrast-matches',
            excludeHidden: !1,
            enabled: !1,
            tags: ['cat.color', 'wcag2aaa', 'wcag146', 'ACT'],
            actIds: ['09o5cg'],
            all: [],
            any: [
              {
                options: {
                  ignoreUnicode: !0,
                  ignoreLength: !1,
                  ignorePseudo: !1,
                  boldValue: 700,
                  boldTextPt: 14,
                  largeTextPt: 18,
                  contrastRatio: {
                    normal: { expected: 7, minThreshold: 4.5 },
                    large: { expected: 4.5, minThreshold: 3 },
                  },
                  pseudoSizeThreshold: 0.25,
                  shadowOutlineEmMax: 0.1,
                  textStrokeEmMin: 0.03,
                },
                id: 'color-contrast-enhanced',
              },
            ],
            none: [],
          },
          {
            id: 'color-contrast',
            matches: 'color-contrast-matches',
            excludeHidden: !1,
            tags: ['cat.color', 'wcag2aa', 'wcag143', 'ACT', 'TTv5', 'TT13.c'],
            actIds: ['afw4f7', '09o5cg'],
            all: [],
            any: [
              {
                options: {
                  ignoreUnicode: !0,
                  ignoreLength: !1,
                  ignorePseudo: !1,
                  boldValue: 700,
                  boldTextPt: 14,
                  largeTextPt: 18,
                  contrastRatio: {
                    normal: { expected: 4.5 },
                    large: { expected: 3 },
                  },
                  pseudoSizeThreshold: 0.25,
                  shadowOutlineEmMax: 0.2,
                  textStrokeEmMin: 0.03,
                },
                id: 'color-contrast',
              },
            ],
            none: [],
          },
          {
            id: 'css-orientation-lock',
            selector: 'html',
            tags: ['cat.structure', 'wcag134', 'wcag21aa', 'experimental'],
            actIds: ['b33eff'],
            all: [
              { options: { degreeThreshold: 2 }, id: 'css-orientation-lock' },
            ],
            any: [],
            none: [],
            preload: !0,
          },
          {
            id: 'definition-list',
            selector: 'dl',
            matches: 'no-role-matches',
            tags: ['cat.structure', 'wcag2a', 'wcag131'],
            all: [],
            any: [],
            none: [
              'structured-dlitems',
              {
                options: {
                  validRoles: ['definition', 'term', 'listitem'],
                  validNodeNames: ['dt', 'dd'],
                  divGroups: !0,
                },
                id: 'only-dlitems',
              },
            ],
          },
          {
            id: 'dlitem',
            selector: 'dd, dt',
            matches: 'no-role-matches',
            tags: ['cat.structure', 'wcag2a', 'wcag131'],
            all: [],
            any: ['dlitem'],
            none: [],
          },
          {
            id: 'document-title',
            selector: 'html',
            matches: 'is-initiator-matches',
            tags: [
              'cat.text-alternatives',
              'wcag2a',
              'wcag242',
              'ACT',
              'TTv5',
              'TT12.a',
            ],
            actIds: ['2779a5'],
            all: [],
            any: ['doc-has-title'],
            none: [],
          },
          {
            id: 'duplicate-id-active',
            selector: '[id]',
            matches: 'duplicate-id-active-matches',
            excludeHidden: !1,
            tags: ['cat.parsing', 'wcag2a', 'wcag411'],
            actIds: ['3ea0c8'],
            all: [],
            any: ['duplicate-id-active'],
            none: [],
          },
          {
            id: 'duplicate-id-aria',
            selector: '[id]',
            matches: 'duplicate-id-aria-matches',
            excludeHidden: !1,
            tags: ['cat.parsing', 'wcag2a', 'wcag411'],
            actIds: ['3ea0c8'],
            all: [],
            any: ['duplicate-id-aria'],
            none: [],
          },
          {
            id: 'duplicate-id',
            selector: '[id]',
            matches: 'duplicate-id-misc-matches',
            excludeHidden: !1,
            tags: ['cat.parsing', 'wcag2a', 'wcag411'],
            actIds: ['3ea0c8'],
            all: [],
            any: ['duplicate-id'],
            none: [],
          },
          {
            id: 'empty-heading',
            selector: 'h1, h2, h3, h4, h5, h6, [role="heading"]',
            matches: 'heading-matches',
            tags: ['cat.name-role-value', 'best-practice'],
            actIds: ['ffd0e9'],
            impact: 'minor',
            all: [],
            any: [
              'has-visible-text',
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: [],
          },
          {
            id: 'empty-table-header',
            selector:
              'th:not([role]), [role="rowheader"], [role="columnheader"]',
            tags: ['cat.name-role-value', 'best-practice'],
            all: [],
            any: ['has-visible-text'],
            none: [],
          },
          {
            id: 'focus-order-semantics',
            selector: 'div, h1, h2, h3, h4, h5, h6, [role=heading], p, span',
            matches: 'inserted-into-focus-order-matches',
            tags: ['cat.keyboard', 'best-practice', 'experimental'],
            all: [],
            any: [
              { options: [], id: 'has-widget-role' },
              {
                options: { roles: ['tooltip'] },
                id: 'valid-scrollable-semantics',
              },
            ],
            none: [],
          },
          {
            id: 'form-field-multiple-labels',
            selector: 'input, select, textarea',
            matches: 'label-matches',
            tags: ['cat.forms', 'wcag2a', 'wcag332', 'TTv5', 'TT5.c'],
            all: [],
            any: [],
            none: ['multiple-label'],
          },
          {
            id: 'frame-focusable-content',
            selector: 'html',
            matches: 'frame-focusable-content-matches',
            tags: ['cat.keyboard', 'wcag2a', 'wcag211', 'TTv5', 'TT4.a'],
            actIds: ['akn7bn'],
            all: [],
            any: ['frame-focusable-content'],
            none: [],
          },
          {
            id: 'frame-tested',
            selector: 'html, frame, iframe',
            tags: ['cat.structure', 'review-item', 'best-practice'],
            all: [{ options: { isViolation: !1 }, id: 'frame-tested' }],
            any: [],
            none: [],
          },
          {
            id: 'frame-title-unique',
            selector: 'frame[title], iframe[title]',
            matches: 'frame-title-has-text-matches',
            tags: [
              'cat.text-alternatives',
              'wcag412',
              'wcag2a',
              'TTv5',
              'TT12.c',
            ],
            actIds: ['4b1c6c'],
            all: [],
            any: [],
            none: ['unique-frame-title'],
            reviewOnFail: !0,
          },
          {
            id: 'frame-title',
            selector: 'frame, iframe',
            matches: 'no-negative-tabindex-matches',
            tags: [
              'cat.text-alternatives',
              'wcag2a',
              'wcag412',
              'section508',
              'section508.22.i',
              'TTv5',
              'TT12.c',
            ],
            actIds: ['cae760'],
            all: [],
            any: [
              { options: { attribute: 'title' }, id: 'non-empty-title' },
              'aria-label',
              'aria-labelledby',
              'presentational-role',
            ],
            none: [],
          },
          {
            id: 'heading-order',
            selector: 'h1, h2, h3, h4, h5, h6, [role=heading]',
            matches: 'heading-matches',
            tags: ['cat.semantics', 'best-practice'],
            all: [],
            any: ['heading-order'],
            none: [],
          },
          {
            id: 'hidden-content',
            selector: '*',
            excludeHidden: !1,
            tags: [
              'cat.structure',
              'experimental',
              'review-item',
              'best-practice',
            ],
            all: [],
            any: ['hidden-content'],
            none: [],
          },
          {
            id: 'html-has-lang',
            selector: 'html',
            matches: 'is-initiator-matches',
            tags: [
              'cat.language',
              'wcag2a',
              'wcag311',
              'ACT',
              'TTv5',
              'TT11.a',
            ],
            actIds: ['b5c3f8'],
            all: [],
            any: [
              { options: { attributes: ['lang', 'xml:lang'] }, id: 'has-lang' },
            ],
            none: [],
          },
          {
            id: 'html-lang-valid',
            selector:
              'html[lang]:not([lang=""]), html[xml\\:lang]:not([xml\\:lang=""])',
            tags: [
              'cat.language',
              'wcag2a',
              'wcag311',
              'ACT',
              'TTv5',
              'TT11.a',
            ],
            actIds: ['bf051a'],
            all: [],
            any: [],
            none: [
              {
                options: { attributes: ['lang', 'xml:lang'] },
                id: 'valid-lang',
              },
            ],
          },
          {
            id: 'html-xml-lang-mismatch',
            selector: 'html[lang][xml\\:lang]',
            matches: 'xml-lang-mismatch-matches',
            tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
            actIds: ['5b7ae0'],
            all: ['xml-lang-mismatch'],
            any: [],
            none: [],
          },
          {
            id: 'identical-links-same-purpose',
            selector: 'a[href], area[href], [role="link"]',
            excludeHidden: !1,
            enabled: !1,
            matches: 'identical-links-same-purpose-matches',
            tags: ['cat.semantics', 'wcag2aaa', 'wcag249'],
            actIds: ['b20e66'],
            all: ['identical-links-same-purpose'],
            any: [],
            none: [],
          },
          {
            id: 'image-alt',
            selector: 'img',
            matches: 'no-explicit-name-required-matches',
            tags: [
              'cat.text-alternatives',
              'wcag2a',
              'wcag111',
              'section508',
              'section508.22.a',
              'ACT',
              'TTv5',
              'TT7.a',
              'TT7.b',
            ],
            actIds: ['23a2a8'],
            all: [],
            any: [
              'has-alt',
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
              'presentational-role',
            ],
            none: ['alt-space-value'],
          },
          {
            id: 'image-redundant-alt',
            selector: 'img',
            tags: ['cat.text-alternatives', 'best-practice'],
            all: [],
            any: [],
            none: [
              {
                options: {
                  parentSelector:
                    'button, [role=button], a[href], p, li, td, th',
                },
                id: 'duplicate-img-label',
              },
            ],
          },
          {
            id: 'input-button-name',
            selector:
              'input[type="button"], input[type="submit"], input[type="reset"]',
            matches: 'no-explicit-name-required-matches',
            tags: [
              'cat.name-role-value',
              'wcag2a',
              'wcag412',
              'section508',
              'section508.22.a',
              'ACT',
              'TTv5',
              'TT5.c',
            ],
            actIds: ['97a4e1'],
            all: [],
            any: [
              'non-empty-if-present',
              { options: { attribute: 'value' }, id: 'non-empty-value' },
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
              'presentational-role',
            ],
            none: [],
          },
          {
            id: 'input-image-alt',
            selector: 'input[type="image"]',
            matches: 'no-explicit-name-required-matches',
            tags: [
              'cat.text-alternatives',
              'wcag2a',
              'wcag111',
              'wcag412',
              'section508',
              'section508.22.a',
              'ACT',
              'TTv5',
              'TT7.a',
            ],
            actIds: ['59796f'],
            all: [],
            any: [
              { options: { attribute: 'alt' }, id: 'non-empty-alt' },
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: [],
          },
          {
            id: 'label-content-name-mismatch',
            matches: 'label-content-name-mismatch-matches',
            tags: ['cat.semantics', 'wcag21a', 'wcag253', 'experimental'],
            actIds: ['2ee8b8'],
            all: [],
            any: [
              {
                options: { pixelThreshold: 0.1, occurrenceThreshold: 3 },
                id: 'label-content-name-mismatch',
              },
            ],
            none: [],
          },
          {
            id: 'label-title-only',
            selector: 'input, select, textarea',
            matches: 'label-matches',
            tags: ['cat.forms', 'best-practice'],
            all: [],
            any: [],
            none: ['title-only'],
          },
          {
            id: 'label',
            selector: 'input, textarea',
            matches: 'label-matches',
            tags: [
              'cat.forms',
              'wcag2a',
              'wcag412',
              'section508',
              'section508.22.n',
              'ACT',
              'TTv5',
              'TT5.c',
            ],
            actIds: ['e086e5'],
            all: [],
            any: [
              'implicit-label',
              'explicit-label',
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
              {
                options: { attribute: 'placeholder' },
                id: 'non-empty-placeholder',
              },
              'presentational-role',
            ],
            none: ['help-same-as-label', 'hidden-explicit-label'],
          },
          {
            id: 'landmark-banner-is-top-level',
            selector: 'header:not([role]), [role=banner]',
            matches: 'landmark-has-body-context-matches',
            tags: ['cat.semantics', 'best-practice'],
            all: [],
            any: ['landmark-is-top-level'],
            none: [],
          },
          {
            id: 'landmark-complementary-is-top-level',
            selector: 'aside:not([role]), [role=complementary]',
            tags: ['cat.semantics', 'best-practice'],
            all: [],
            any: ['landmark-is-top-level'],
            none: [],
          },
          {
            id: 'landmark-contentinfo-is-top-level',
            selector: 'footer:not([role]), [role=contentinfo]',
            matches: 'landmark-has-body-context-matches',
            tags: ['cat.semantics', 'best-practice'],
            all: [],
            any: ['landmark-is-top-level'],
            none: [],
          },
          {
            id: 'landmark-main-is-top-level',
            selector: 'main:not([role]), [role=main]',
            tags: ['cat.semantics', 'best-practice'],
            all: [],
            any: ['landmark-is-top-level'],
            none: [],
          },
          {
            id: 'landmark-no-duplicate-banner',
            selector: 'header:not([role]), [role=banner]',
            tags: ['cat.semantics', 'best-practice'],
            all: [],
            any: [
              {
                options: {
                  selector: 'header:not([role]), [role=banner]',
                  nativeScopeFilter: 'article, aside, main, nav, section',
                },
                id: 'page-no-duplicate-banner',
              },
            ],
            none: [],
          },
          {
            id: 'landmark-no-duplicate-contentinfo',
            selector: 'footer:not([role]), [role=contentinfo]',
            tags: ['cat.semantics', 'best-practice'],
            all: [],
            any: [
              {
                options: {
                  selector: 'footer:not([role]), [role=contentinfo]',
                  nativeScopeFilter: 'article, aside, main, nav, section',
                },
                id: 'page-no-duplicate-contentinfo',
              },
            ],
            none: [],
          },
          {
            id: 'landmark-no-duplicate-main',
            selector: 'main:not([role]), [role=main]',
            tags: ['cat.semantics', 'best-practice'],
            all: [],
            any: [
              {
                options: { selector: "main:not([role]), [role='main']" },
                id: 'page-no-duplicate-main',
              },
            ],
            none: [],
          },
          {
            id: 'landmark-one-main',
            selector: 'html',
            tags: ['cat.semantics', 'best-practice'],
            all: [
              {
                options: {
                  selector: "main:not([role]), [role='main']",
                  passForModal: !0,
                },
                id: 'page-has-main',
              },
            ],
            any: [],
            none: [],
          },
          {
            id: 'landmark-unique',
            selector:
              '[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section',
            tags: ['cat.semantics', 'best-practice'],
            matches: 'landmark-unique-matches',
            all: [],
            any: ['landmark-is-unique'],
            none: [],
          },
          {
            id: 'link-in-text-block',
            selector: 'a[href], [role=link]',
            matches: 'link-in-text-block-matches',
            excludeHidden: !1,
            tags: ['cat.color', 'wcag2a', 'wcag141', 'TTv5', 'TT13.a'],
            all: [],
            any: [
              {
                options: { requiredContrastRatio: 3, allowSameColor: !0 },
                id: 'link-in-text-block',
              },
              'link-in-text-block-style',
            ],
            none: [],
          },
          {
            id: 'link-name',
            selector: 'a[href]',
            tags: [
              'cat.name-role-value',
              'wcag2a',
              'wcag412',
              'wcag244',
              'section508',
              'section508.22.a',
              'ACT',
              'TTv5',
              'TT6.a',
            ],
            actIds: ['c487ae'],
            all: [],
            any: [
              'has-visible-text',
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: ['focusable-no-name'],
          },
          {
            id: 'list',
            selector: 'ul, ol',
            matches: 'no-role-matches',
            tags: ['cat.structure', 'wcag2a', 'wcag131'],
            all: [],
            any: [],
            none: [
              {
                options: { validRoles: ['listitem'], validNodeNames: ['li'] },
                id: 'only-listitems',
              },
            ],
          },
          {
            id: 'listitem',
            selector: 'li',
            matches: 'no-role-matches',
            tags: ['cat.structure', 'wcag2a', 'wcag131'],
            all: [],
            any: ['listitem'],
            none: [],
          },
          {
            id: 'marquee',
            selector: 'marquee',
            excludeHidden: !1,
            tags: ['cat.parsing', 'wcag2a', 'wcag222', 'TTv5', 'TT2.b'],
            all: [],
            any: [],
            none: ['is-on-screen'],
          },
          {
            id: 'meta-refresh-no-exceptions',
            selector: 'meta[http-equiv="refresh"][content]',
            excludeHidden: !1,
            enabled: !1,
            tags: ['cat.time-and-media', 'wcag2aaa', 'wcag224', 'wcag325'],
            actIds: ['bisz58'],
            all: [],
            any: [
              {
                options: { minDelay: 72e3, maxDelay: !1 },
                id: 'meta-refresh-no-exceptions',
              },
            ],
            none: [],
          },
          {
            id: 'meta-refresh',
            selector: 'meta[http-equiv="refresh"][content]',
            excludeHidden: !1,
            tags: ['cat.time-and-media', 'wcag2a', 'wcag221', 'TTv5', 'TT2.c'],
            actIds: ['bc659a', 'bisz58'],
            all: [],
            any: [
              { options: { minDelay: 0, maxDelay: 72e3 }, id: 'meta-refresh' },
            ],
            none: [],
          },
          {
            id: 'meta-viewport-large',
            selector: 'meta[name="viewport"]',
            matches: 'is-initiator-matches',
            excludeHidden: !1,
            tags: ['cat.sensory-and-visual-cues', 'best-practice'],
            all: [],
            any: [
              {
                options: { scaleMinimum: 5, lowerBound: 2 },
                id: 'meta-viewport-large',
              },
            ],
            none: [],
          },
          {
            id: 'meta-viewport',
            selector: 'meta[name="viewport"]',
            matches: 'is-initiator-matches',
            excludeHidden: !1,
            tags: ['cat.sensory-and-visual-cues', 'wcag2aa', 'wcag144', 'ACT'],
            actIds: ['b4f0c3'],
            all: [],
            any: [{ options: { scaleMinimum: 2 }, id: 'meta-viewport' }],
            none: [],
          },
          {
            id: 'nested-interactive',
            matches: 'nested-interactive-matches',
            tags: ['cat.keyboard', 'wcag2a', 'wcag412', 'TTv5', 'TT4.a'],
            actIds: ['307n5z'],
            all: [],
            any: ['no-focusable-content'],
            none: [],
          },
          {
            id: 'no-autoplay-audio',
            excludeHidden: !1,
            selector: 'audio[autoplay], video[autoplay]',
            matches: 'no-autoplay-audio-matches',
            reviewOnFail: !0,
            tags: [
              'cat.time-and-media',
              'wcag2a',
              'wcag142',
              'ACT',
              'TTv5',
              'TT2.a',
            ],
            actIds: ['80f0bf'],
            preload: !0,
            all: [{ options: { allowedDuration: 3 }, id: 'no-autoplay-audio' }],
            any: [],
            none: [],
          },
          {
            id: 'object-alt',
            selector: 'object[data]',
            matches: 'object-is-loaded-matches',
            tags: [
              'cat.text-alternatives',
              'wcag2a',
              'wcag111',
              'section508',
              'section508.22.a',
            ],
            actIds: ['8fc3b6'],
            all: [],
            any: [
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
              'presentational-role',
            ],
            none: [],
          },
          {
            id: 'p-as-heading',
            selector: 'p',
            matches: 'p-as-heading-matches',
            tags: ['cat.semantics', 'wcag2a', 'wcag131', 'experimental'],
            all: [
              {
                options: {
                  margins: [
                    { weight: 150, italic: !0 },
                    { weight: 150, size: 1.15 },
                    { italic: !0, size: 1.15 },
                    { size: 1.4 },
                  ],
                  passLength: 1,
                  failLength: 0.5,
                },
                id: 'p-as-heading',
              },
            ],
            any: [],
            none: [],
          },
          {
            id: 'page-has-heading-one',
            selector: 'html',
            tags: ['cat.semantics', 'best-practice'],
            all: [
              {
                options: {
                  selector:
                    'h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]',
                  passForModal: !0,
                },
                id: 'page-has-heading-one',
              },
            ],
            any: [],
            none: [],
          },
          {
            id: 'presentation-role-conflict',
            selector: `img[alt=''], [role="none"], [role="presentation"]`,
            matches: 'has-implicit-chromium-role-matches',
            tags: ['cat.aria', 'best-practice', 'ACT'],
            actIds: ['46ca7f'],
            all: [],
            any: [],
            none: ['is-element-focusable', 'has-global-aria-attribute'],
          },
          {
            id: 'region',
            selector: 'body *',
            tags: ['cat.keyboard', 'best-practice'],
            all: [],
            any: [
              {
                options: {
                  regionMatcher:
                    'dialog, [role=dialog], [role=alertdialog], svg',
                },
                id: 'region',
              },
            ],
            none: [],
          },
          {
            id: 'role-img-alt',
            selector: "[role='img']:not(img, area, input, object)",
            matches: 'html-namespace-matches',
            tags: [
              'cat.text-alternatives',
              'wcag2a',
              'wcag111',
              'section508',
              'section508.22.a',
              'ACT',
              'TTv5',
              'TT7.a',
            ],
            actIds: ['23a2a8'],
            all: [],
            any: [
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: [],
          },
          {
            id: 'scope-attr-valid',
            selector: 'td[scope], th[scope]',
            tags: ['cat.tables', 'best-practice'],
            all: [
              'html5-scope',
              {
                options: { values: ['row', 'col', 'rowgroup', 'colgroup'] },
                id: 'scope-value',
              },
            ],
            any: [],
            none: [],
          },
          {
            id: 'scrollable-region-focusable',
            selector: '*:not(select,textarea)',
            matches: 'scrollable-region-focusable-matches',
            tags: ['cat.keyboard', 'wcag2a', 'wcag211'],
            actIds: ['0ssw9k'],
            all: [],
            any: ['focusable-content', 'focusable-element'],
            none: [],
          },
          {
            id: 'select-name',
            selector: 'select',
            tags: [
              'cat.forms',
              'wcag2a',
              'wcag412',
              'section508',
              'section508.22.n',
              'ACT',
              'TTv5',
              'TT5.c',
            ],
            actIds: ['e086e5'],
            all: [],
            any: [
              'implicit-label',
              'explicit-label',
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
              'presentational-role',
            ],
            none: ['help-same-as-label', 'hidden-explicit-label'],
          },
          {
            id: 'server-side-image-map',
            selector: 'img[ismap]',
            tags: [
              'cat.text-alternatives',
              'wcag2a',
              'wcag211',
              'section508',
              'section508.22.f',
            ],
            all: [],
            any: [],
            none: ['exists'],
          },
          {
            id: 'skip-link',
            selector: 'a[href^="#"], a[href^="/#"]',
            matches: 'skip-link-matches',
            tags: ['cat.keyboard', 'best-practice'],
            all: [],
            any: ['skip-link'],
            none: [],
          },
          {
            id: 'svg-img-alt',
            selector:
              '[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',
            matches: 'svg-namespace-matches',
            tags: [
              'cat.text-alternatives',
              'wcag2a',
              'wcag111',
              'section508',
              'section508.22.a',
              'ACT',
              'TTv5',
              'TT7.a',
            ],
            actIds: ['7d6734'],
            all: [],
            any: [
              'svg-non-empty-title',
              'aria-label',
              'aria-labelledby',
              { options: { attribute: 'title' }, id: 'non-empty-title' },
            ],
            none: [],
          },
          {
            id: 'tabindex',
            selector: '[tabindex]',
            tags: ['cat.keyboard', 'best-practice'],
            all: [],
            any: ['tabindex'],
            none: [],
          },
          {
            id: 'table-duplicate-name',
            selector: 'table',
            tags: ['cat.tables', 'best-practice'],
            all: [],
            any: [],
            none: ['same-caption-summary'],
          },
          {
            id: 'table-fake-caption',
            selector: 'table',
            matches: 'data-table-matches',
            tags: [
              'cat.tables',
              'experimental',
              'wcag2a',
              'wcag131',
              'section508',
              'section508.22.g',
            ],
            all: ['caption-faked'],
            any: [],
            none: [],
          },
          {
            id: 'target-size',
            selector: '*',
            enabled: !1,
            matches: 'widget-not-inline-matches',
            tags: ['wcag22aa', 'wcag258', 'cat.sensory-and-visual-cues'],
            all: [],
            any: [
              { options: { minSize: 24 }, id: 'target-size' },
              { options: { minOffset: 24 }, id: 'target-offset' },
            ],
            none: [],
          },
          {
            id: 'td-has-header',
            selector: 'table',
            matches: 'data-table-large-matches',
            tags: [
              'cat.tables',
              'experimental',
              'wcag2a',
              'wcag131',
              'section508',
              'section508.22.g',
              'TTv5',
              'TT14.b',
            ],
            all: ['td-has-header'],
            any: [],
            none: [],
          },
          {
            id: 'td-headers-attr',
            selector: 'table',
            matches: 'table-or-grid-role-matches',
            tags: [
              'cat.tables',
              'wcag2a',
              'wcag131',
              'section508',
              'section508.22.g',
            ],
            actIds: ['a25f45'],
            all: ['td-headers-attr'],
            any: [],
            none: [],
          },
          {
            id: 'th-has-data-cells',
            selector: 'table',
            matches: 'data-table-matches',
            tags: [
              'cat.tables',
              'wcag2a',
              'wcag131',
              'section508',
              'section508.22.g',
              'TTv5',
              '14.b',
            ],
            actIds: ['d0f69e'],
            all: ['th-has-data-cells'],
            any: [],
            none: [],
          },
          {
            id: 'valid-lang',
            selector: '[lang]:not(html), [xml\\:lang]:not(html)',
            tags: [
              'cat.language',
              'wcag2aa',
              'wcag312',
              'ACT',
              'TTv5',
              'TT11.b',
            ],
            actIds: ['de46e4'],
            all: [],
            any: [],
            none: [
              {
                options: { attributes: ['lang', 'xml:lang'] },
                id: 'valid-lang',
              },
            ],
          },
          {
            id: 'video-caption',
            selector: 'video',
            tags: [
              'cat.text-alternatives',
              'wcag2a',
              'wcag122',
              'section508',
              'section508.22.a',
              'TTv5',
              'TT17.a',
            ],
            actIds: ['eac66b'],
            all: [],
            any: [],
            none: ['caption'],
          },
        ],
        checks: [
          { id: 'abstractrole', evaluate: 'abstractrole-evaluate' },
          {
            id: 'aria-allowed-attr',
            evaluate: 'aria-allowed-attr-evaluate',
            options: {
              validTreeRowAttrs: [
                'aria-posinset',
                'aria-setsize',
                'aria-expanded',
                'aria-level',
              ],
            },
          },
          {
            id: 'aria-allowed-role',
            evaluate: 'aria-allowed-role-evaluate',
            options: { allowImplicit: !0, ignoredTags: [] },
          },
          { id: 'aria-busy', evaluate: 'aria-busy-evaluate' },
          { id: 'aria-errormessage', evaluate: 'aria-errormessage-evaluate' },
          { id: 'aria-hidden-body', evaluate: 'aria-hidden-body-evaluate' },
          { id: 'aria-level', evaluate: 'aria-level-evaluate' },
          {
            id: 'aria-prohibited-attr',
            evaluate: 'aria-prohibited-attr-evaluate',
            options: { elementsAllowedAriaLabel: ['applet', 'input'] },
          },
          { id: 'aria-required-attr', evaluate: 'aria-required-attr-evaluate' },
          {
            id: 'aria-required-children',
            evaluate: 'aria-required-children-evaluate',
            options: {
              reviewEmpty: [
                'doc-bibliography',
                'doc-endnotes',
                'grid',
                'list',
                'listbox',
                'menu',
                'menubar',
                'table',
                'tablist',
                'tree',
                'treegrid',
                'rowgroup',
              ],
            },
          },
          {
            id: 'aria-required-parent',
            evaluate: 'aria-required-parent-evaluate',
            options: { ownGroupRoles: ['listitem', 'treeitem'] },
          },
          {
            id: 'aria-roledescription',
            evaluate: 'aria-roledescription-evaluate',
            options: {
              supportedRoles: [
                'button',
                'img',
                'checkbox',
                'radio',
                'combobox',
                'menuitemcheckbox',
                'menuitemradio',
              ],
            },
          },
          {
            id: 'aria-unsupported-attr',
            evaluate: 'aria-unsupported-attr-evaluate',
          },
          {
            id: 'aria-valid-attr-value',
            evaluate: 'aria-valid-attr-value-evaluate',
            options: [],
          },
          {
            id: 'aria-valid-attr',
            evaluate: 'aria-valid-attr-evaluate',
            options: [],
          },
          { id: 'deprecatedrole', evaluate: 'deprecatedrole-evaluate' },
          { id: 'fallbackrole', evaluate: 'fallbackrole-evaluate' },
          {
            id: 'has-global-aria-attribute',
            evaluate: 'has-global-aria-attribute-evaluate',
          },
          {
            id: 'has-widget-role',
            evaluate: 'has-widget-role-evaluate',
            options: [],
          },
          { id: 'invalidrole', evaluate: 'invalidrole-evaluate' },
          {
            id: 'is-element-focusable',
            evaluate: 'is-element-focusable-evaluate',
          },
          {
            id: 'no-implicit-explicit-label',
            evaluate: 'no-implicit-explicit-label-evaluate',
          },
          { id: 'unsupportedrole', evaluate: 'unsupportedrole-evaluate' },
          {
            id: 'valid-scrollable-semantics',
            evaluate: 'valid-scrollable-semantics-evaluate',
            options: { roles: ['tooltip'] },
          },
          {
            id: 'color-contrast-enhanced',
            evaluate: 'color-contrast-evaluate',
            options: {
              ignoreUnicode: !0,
              ignoreLength: !1,
              ignorePseudo: !1,
              boldValue: 700,
              boldTextPt: 14,
              largeTextPt: 18,
              contrastRatio: {
                normal: { expected: 7, minThreshold: 4.5 },
                large: { expected: 4.5, minThreshold: 3 },
              },
              pseudoSizeThreshold: 0.25,
              shadowOutlineEmMax: 0.1,
              textStrokeEmMin: 0.03,
            },
          },
          {
            id: 'color-contrast',
            evaluate: 'color-contrast-evaluate',
            options: {
              ignoreUnicode: !0,
              ignoreLength: !1,
              ignorePseudo: !1,
              boldValue: 700,
              boldTextPt: 14,
              largeTextPt: 18,
              contrastRatio: {
                normal: { expected: 4.5 },
                large: { expected: 3 },
              },
              pseudoSizeThreshold: 0.25,
              shadowOutlineEmMax: 0.2,
              textStrokeEmMin: 0.03,
            },
          },
          {
            id: 'link-in-text-block-style',
            evaluate: 'link-in-text-block-style-evaluate',
          },
          {
            id: 'link-in-text-block',
            evaluate: 'link-in-text-block-evaluate',
            options: { requiredContrastRatio: 3, allowSameColor: !0 },
          },
          {
            id: 'autocomplete-appropriate',
            evaluate: 'autocomplete-appropriate-evaluate',
            deprecated: !0,
          },
          {
            id: 'autocomplete-valid',
            evaluate: 'autocomplete-valid-evaluate',
            options: {
              stateTerms: [
                'none',
                'false',
                'true',
                'disabled',
                'enabled',
                'undefined',
                'null',
              ],
            },
          },
          {
            id: 'accesskeys',
            evaluate: 'accesskeys-evaluate',
            after: 'accesskeys-after',
          },
          { id: 'focusable-content', evaluate: 'focusable-content-evaluate' },
          { id: 'focusable-disabled', evaluate: 'focusable-disabled-evaluate' },
          { id: 'focusable-element', evaluate: 'focusable-element-evaluate' },
          {
            id: 'focusable-modal-open',
            evaluate: 'focusable-modal-open-evaluate',
          },
          { id: 'focusable-no-name', evaluate: 'focusable-no-name-evaluate' },
          {
            id: 'focusable-not-tabbable',
            evaluate: 'focusable-not-tabbable-evaluate',
          },
          {
            id: 'frame-focusable-content',
            evaluate: 'frame-focusable-content-evaluate',
          },
          {
            id: 'landmark-is-top-level',
            evaluate: 'landmark-is-top-level-evaluate',
          },
          {
            id: 'no-focusable-content',
            evaluate: 'no-focusable-content-evaluate',
          },
          {
            id: 'page-has-heading-one',
            evaluate: 'has-descendant-evaluate',
            after: 'has-descendant-after',
            options: {
              selector:
                'h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]',
              passForModal: !0,
            },
          },
          {
            id: 'page-has-main',
            evaluate: 'has-descendant-evaluate',
            after: 'has-descendant-after',
            options: {
              selector: "main:not([role]), [role='main']",
              passForModal: !0,
            },
          },
          {
            id: 'page-no-duplicate-banner',
            evaluate: 'page-no-duplicate-evaluate',
            after: 'page-no-duplicate-after',
            options: {
              selector: 'header:not([role]), [role=banner]',
              nativeScopeFilter: 'article, aside, main, nav, section',
            },
          },
          {
            id: 'page-no-duplicate-contentinfo',
            evaluate: 'page-no-duplicate-evaluate',
            after: 'page-no-duplicate-after',
            options: {
              selector: 'footer:not([role]), [role=contentinfo]',
              nativeScopeFilter: 'article, aside, main, nav, section',
            },
          },
          {
            id: 'page-no-duplicate-main',
            evaluate: 'page-no-duplicate-evaluate',
            after: 'page-no-duplicate-after',
            options: { selector: "main:not([role]), [role='main']" },
          },
          { id: 'tabindex', evaluate: 'tabindex-evaluate' },
          { id: 'alt-space-value', evaluate: 'alt-space-value-evaluate' },
          {
            id: 'duplicate-img-label',
            evaluate: 'duplicate-img-label-evaluate',
            options: {
              parentSelector: 'button, [role=button], a[href], p, li, td, th',
            },
          },
          { id: 'explicit-label', evaluate: 'explicit-evaluate' },
          {
            id: 'help-same-as-label',
            evaluate: 'help-same-as-label-evaluate',
            enabled: !1,
          },
          {
            id: 'hidden-explicit-label',
            evaluate: 'hidden-explicit-label-evaluate',
          },
          { id: 'implicit-label', evaluate: 'implicit-evaluate' },
          {
            id: 'label-content-name-mismatch',
            evaluate: 'label-content-name-mismatch-evaluate',
            options: { pixelThreshold: 0.1, occurrenceThreshold: 3 },
          },
          { id: 'multiple-label', evaluate: 'multiple-label-evaluate' },
          { id: 'title-only', evaluate: 'title-only-evaluate' },
          {
            id: 'landmark-is-unique',
            evaluate: 'landmark-is-unique-evaluate',
            after: 'landmark-is-unique-after',
          },
          {
            id: 'has-lang',
            evaluate: 'has-lang-evaluate',
            options: { attributes: ['lang', 'xml:lang'] },
          },
          {
            id: 'valid-lang',
            evaluate: 'valid-lang-evaluate',
            options: { attributes: ['lang', 'xml:lang'] },
          },
          { id: 'xml-lang-mismatch', evaluate: 'xml-lang-mismatch-evaluate' },
          { id: 'dlitem', evaluate: 'dlitem-evaluate' },
          { id: 'listitem', evaluate: 'listitem-evaluate' },
          {
            id: 'only-dlitems',
            evaluate: 'invalid-children-evaluate',
            options: {
              validRoles: ['definition', 'term', 'listitem'],
              validNodeNames: ['dt', 'dd'],
              divGroups: !0,
            },
          },
          {
            id: 'only-listitems',
            evaluate: 'invalid-children-evaluate',
            options: { validRoles: ['listitem'], validNodeNames: ['li'] },
          },
          { id: 'structured-dlitems', evaluate: 'structured-dlitems-evaluate' },
          { id: 'caption', evaluate: 'caption-evaluate' },
          {
            id: 'frame-tested',
            evaluate: 'frame-tested-evaluate',
            after: 'frame-tested-after',
            options: { isViolation: !1 },
          },
          {
            id: 'no-autoplay-audio',
            evaluate: 'no-autoplay-audio-evaluate',
            options: { allowedDuration: 3 },
          },
          {
            id: 'css-orientation-lock',
            evaluate: 'css-orientation-lock-evaluate',
            options: { degreeThreshold: 2 },
          },
          {
            id: 'meta-viewport-large',
            evaluate: 'meta-viewport-scale-evaluate',
            options: { scaleMinimum: 5, lowerBound: 2 },
          },
          {
            id: 'meta-viewport',
            evaluate: 'meta-viewport-scale-evaluate',
            options: { scaleMinimum: 2 },
          },
          {
            id: 'target-offset',
            evaluate: 'target-offset-evaluate',
            options: { minOffset: 24 },
          },
          {
            id: 'target-size',
            evaluate: 'target-size-evaluate',
            options: { minSize: 24 },
          },
          {
            id: 'header-present',
            evaluate: 'has-descendant-evaluate',
            after: 'has-descendant-after',
            options: {
              selector:
                ':is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]',
            },
          },
          {
            id: 'heading-order',
            evaluate: 'heading-order-evaluate',
            after: 'heading-order-after',
          },
          {
            id: 'identical-links-same-purpose',
            evaluate: 'identical-links-same-purpose-evaluate',
            after: 'identical-links-same-purpose-after',
          },
          {
            id: 'internal-link-present',
            evaluate: 'internal-link-present-evaluate',
          },
          {
            id: 'landmark',
            evaluate: 'has-descendant-evaluate',
            options: { selector: 'main, [role=main]' },
          },
          {
            id: 'meta-refresh-no-exceptions',
            evaluate: 'meta-refresh-evaluate',
            options: { minDelay: 72e3, maxDelay: !1 },
          },
          {
            id: 'meta-refresh',
            evaluate: 'meta-refresh-evaluate',
            options: { minDelay: 0, maxDelay: 72e3 },
          },
          {
            id: 'p-as-heading',
            evaluate: 'p-as-heading-evaluate',
            options: {
              margins: [
                { weight: 150, italic: !0 },
                { weight: 150, size: 1.15 },
                { italic: !0, size: 1.15 },
                { size: 1.4 },
              ],
              passLength: 1,
              failLength: 0.5,
            },
          },
          {
            id: 'region',
            evaluate: 'region-evaluate',
            after: 'region-after',
            options: {
              regionMatcher: 'dialog, [role=dialog], [role=alertdialog], svg',
            },
          },
          { id: 'skip-link', evaluate: 'skip-link-evaluate' },
          {
            id: 'unique-frame-title',
            evaluate: 'unique-frame-title-evaluate',
            after: 'unique-frame-title-after',
          },
          {
            id: 'duplicate-id-active',
            evaluate: 'duplicate-id-evaluate',
            after: 'duplicate-id-after',
          },
          {
            id: 'duplicate-id-aria',
            evaluate: 'duplicate-id-evaluate',
            after: 'duplicate-id-after',
          },
          {
            id: 'duplicate-id',
            evaluate: 'duplicate-id-evaluate',
            after: 'duplicate-id-after',
          },
          { id: 'aria-label', evaluate: 'aria-label-evaluate' },
          { id: 'aria-labelledby', evaluate: 'aria-labelledby-evaluate' },
          {
            id: 'avoid-inline-spacing',
            evaluate: 'avoid-inline-spacing-evaluate',
            options: {
              cssProperties: ['line-height', 'letter-spacing', 'word-spacing'],
            },
          },
          {
            id: 'button-has-visible-text',
            evaluate: 'has-text-content-evaluate',
          },
          { id: 'doc-has-title', evaluate: 'doc-has-title-evaluate' },
          { id: 'exists', evaluate: 'exists-evaluate' },
          { id: 'has-alt', evaluate: 'has-alt-evaluate' },
          { id: 'has-visible-text', evaluate: 'has-text-content-evaluate' },
          {
            id: 'important-letter-spacing',
            evaluate: 'inline-style-property-evaluate',
            options: { cssProperty: 'letter-spacing', minValue: 0.12 },
          },
          {
            id: 'important-line-height',
            evaluate: 'inline-style-property-evaluate',
            options: {
              multiLineOnly: !0,
              cssProperty: 'line-height',
              minValue: 1.5,
              normalValue: 1,
            },
          },
          {
            id: 'important-word-spacing',
            evaluate: 'inline-style-property-evaluate',
            options: { cssProperty: 'word-spacing', minValue: 0.16 },
          },
          { id: 'is-on-screen', evaluate: 'is-on-screen-evaluate' },
          {
            id: 'non-empty-alt',
            evaluate: 'attr-non-space-content-evaluate',
            options: { attribute: 'alt' },
          },
          {
            id: 'non-empty-if-present',
            evaluate: 'non-empty-if-present-evaluate',
          },
          {
            id: 'non-empty-placeholder',
            evaluate: 'attr-non-space-content-evaluate',
            options: { attribute: 'placeholder' },
          },
          {
            id: 'non-empty-title',
            evaluate: 'attr-non-space-content-evaluate',
            options: { attribute: 'title' },
          },
          {
            id: 'non-empty-value',
            evaluate: 'attr-non-space-content-evaluate',
            options: { attribute: 'value' },
          },
          {
            id: 'presentational-role',
            evaluate: 'presentational-role-evaluate',
          },
          {
            id: 'role-none',
            evaluate: 'matches-definition-evaluate',
            deprecated: !0,
            options: { matcher: { attributes: { role: 'none' } } },
          },
          {
            id: 'role-presentation',
            evaluate: 'matches-definition-evaluate',
            deprecated: !0,
            options: { matcher: { attributes: { role: 'presentation' } } },
          },
          {
            id: 'svg-non-empty-title',
            evaluate: 'svg-non-empty-title-evaluate',
          },
          { id: 'caption-faked', evaluate: 'caption-faked-evaluate' },
          { id: 'html5-scope', evaluate: 'html5-scope-evaluate' },
          {
            id: 'same-caption-summary',
            evaluate: 'same-caption-summary-evaluate',
          },
          {
            id: 'scope-value',
            evaluate: 'scope-value-evaluate',
            options: { values: ['row', 'col', 'rowgroup', 'colgroup'] },
          },
          { id: 'td-has-header', evaluate: 'td-has-header-evaluate' },
          { id: 'td-headers-attr', evaluate: 'td-headers-attr-evaluate' },
          { id: 'th-has-data-cells', evaluate: 'th-has-data-cells-evaluate' },
          { id: 'hidden-content', evaluate: 'hidden-content-evaluate' },
        ],
      });
  })(typeof window == 'object' ? window : zE);
})(qi);
var xc = qi.exports;
const $E = HE(xc),
  GE = UE({ __proto__: null, default: $E }, [xc]);
export { GE as a };
