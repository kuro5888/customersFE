var d = Object.create,
  g = Object.defineProperty,
  j = Object.getOwnPropertyDescriptor,
  A = Object.getOwnPropertyNames,
  h = Object.getPrototypeOf,
  m = Object.prototype.hasOwnProperty,
  x = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports),
  P = (e, r, i, u) => {
    if ((r && typeof r == 'object') || typeof r == 'function')
      for (let a of A(r))
        !m.call(e, a) &&
          a !== i &&
          g(e, a, {
            get: () => r[a],
            enumerable: !(u = j(r, a)) || u.enumerable,
          });
    return e;
  },
  S = (e, r, i) => (
    (i = e != null ? d(h(e)) : {}),
    P(
      !e || !e.__esModule ? g(i, 'default', { value: e, enumerable: !0 }) : i,
      e,
    )
  ),
  U = x((e) => {
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.isEqual = (function () {
        var r = Object.prototype.toString,
          i = Object.getPrototypeOf,
          u = Object.getOwnPropertySymbols
            ? function (a) {
                return Object.keys(a).concat(Object.getOwnPropertySymbols(a));
              }
            : Object.keys;
        return function (a, c) {
          return (function f(t, n, o) {
            var y,
              s,
              l,
              p = r.call(t),
              w = r.call(n);
            if (t === n) return !0;
            if (t == null || n == null) return !1;
            if (o.indexOf(t) > -1 && o.indexOf(n) > -1) return !0;
            if (
              (o.push(t, n),
              p != w ||
                ((y = u(t)),
                (s = u(n)),
                y.length != s.length ||
                  y.some(function (O) {
                    return !f(t[O], n[O], o);
                  })))
            )
              return !1;
            switch (p.slice(8, -1)) {
              case 'Symbol':
                return t.valueOf() == n.valueOf();
              case 'Date':
              case 'Number':
                return +t == +n || (+t != +t && +n != +n);
              case 'RegExp':
              case 'Function':
              case 'String':
              case 'Boolean':
                return '' + t == '' + n;
              case 'Set':
              case 'Map':
                (y = t.entries()), (s = n.entries());
                do if (!f((l = y.next()).value, s.next().value, o)) return !1;
                while (!l.done);
                return !0;
              case 'ArrayBuffer':
                (t = new Uint8Array(t)), (n = new Uint8Array(n));
              case 'DataView':
                (t = new Uint8Array(t.buffer)), (n = new Uint8Array(n.buffer));
              case 'Float32Array':
              case 'Float64Array':
              case 'Int8Array':
              case 'Int16Array':
              case 'Int32Array':
              case 'Uint8Array':
              case 'Uint16Array':
              case 'Uint32Array':
              case 'Uint8ClampedArray':
              case 'Arguments':
              case 'Array':
                if (t.length != n.length) return !1;
                for (l = 0; l < t.length; l++)
                  if (
                    (l in t || l in n) &&
                    (l in t != l in n || !f(t[l], n[l], o))
                  )
                    return !1;
                return !0;
              case 'Object':
                return f(i(t), i(n), o);
              default:
                return !1;
            }
          })(a, c, []);
        };
      })());
  }),
  b = S(U()),
  v = (e) => e.map((r) => typeof r < 'u').filter(Boolean).length,
  q = (e, r) => {
    let { exists: i, eq: u, neq: a, truthy: c } = e;
    if (v([i, u, a, c]) > 1)
      throw new Error(
        `Invalid conditional test ${JSON.stringify({ exists: i, eq: u, neq: a })}`,
      );
    if (typeof u < 'u') return (0, b.isEqual)(r, u);
    if (typeof a < 'u') return !(0, b.isEqual)(r, a);
    if (typeof i < 'u') {
      let f = typeof r < 'u';
      return i ? f : !f;
    }
    return typeof c > 'u' || c ? !!r : !r;
  },
  E = (e, r, i) => {
    if (!e.if) return !0;
    let { arg: u, global: a } = e.if;
    if (v([u, a]) !== 1)
      throw new Error(
        `Invalid conditional value ${JSON.stringify({ arg: u, global: a })}`,
      );
    let c = u ? r[u] : i[a];
    return q(e.if, c);
  },
  I = (e) =>
    e
      .toLowerCase()
      .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')
      .replace(/-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
export { I as O, E as P };
