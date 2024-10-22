import { a as cr, b as Ve } from './chunk-H6MOWX77-DTQOW814.js';
import {
  i as ha,
  c as ca,
  y as fa,
  a as Ae,
  D as Jr,
  N as pa,
  b as da,
  d as $r,
  L as Yr,
  $ as ii,
  Q as ma,
} from './index-BbnliQch.js';
import { g as fr, c as Ot } from './_commonjsHelpers-Cpj98o6Y.js';
import { d as ga } from './index-DrFu-skq.js';
import { R as Xt, r as Et } from './index-B-o1Wr-g.js';
var In = { exports: {} },
  xa = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Ca = xa,
  va = Ca;
function Pn() {}
function Tn() {}
Tn.resetWarningCache = Pn;
var Aa = function () {
  function e(s, u, h, c, g, x) {
    if (x !== va) {
      var E = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((E.name = 'Invariant Violation'), E);
    }
  }
  e.isRequired = e;
  function i() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: i,
    element: e,
    elementType: e,
    instanceOf: i,
    node: e,
    objectOf: i,
    oneOf: i,
    oneOfType: i,
    shape: i,
    exact: i,
    checkPropTypes: Tn,
    resetWarningCache: Pn,
  };
  return (r.PropTypes = r), r;
};
In.exports = Aa();
var ya = In.exports;
const Zr = fr(ya),
  Da = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'math',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rb',
    'rp',
    'rt',
    'rtc',
    'ruby',
    's',
    'samp',
    'script',
    'search',
    'section',
    'select',
    'slot',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'svg',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
  ];
var Ea = Da;
const ba = fr(Ea);
var Nn = {},
  Ln = {};
(function (e) {
  (function i(r) {
    var s, u, h, c, g, x;
    function E(A) {
      var o = {},
        B,
        N;
      for (B in A)
        A.hasOwnProperty(B) &&
          ((N = A[B]),
          typeof N == 'object' && N !== null ? (o[B] = E(N)) : (o[B] = N));
      return o;
    }
    function D(A, o) {
      var B, N, H, z;
      for (N = A.length, H = 0; N; )
        (B = N >>> 1),
          (z = H + B),
          o(A[z]) ? (N = B) : ((H = z + 1), (N -= B + 1));
      return H;
    }
    (s = {
      AssignmentExpression: 'AssignmentExpression',
      AssignmentPattern: 'AssignmentPattern',
      ArrayExpression: 'ArrayExpression',
      ArrayPattern: 'ArrayPattern',
      ArrowFunctionExpression: 'ArrowFunctionExpression',
      AwaitExpression: 'AwaitExpression',
      BlockStatement: 'BlockStatement',
      BinaryExpression: 'BinaryExpression',
      BreakStatement: 'BreakStatement',
      CallExpression: 'CallExpression',
      CatchClause: 'CatchClause',
      ChainExpression: 'ChainExpression',
      ClassBody: 'ClassBody',
      ClassDeclaration: 'ClassDeclaration',
      ClassExpression: 'ClassExpression',
      ComprehensionBlock: 'ComprehensionBlock',
      ComprehensionExpression: 'ComprehensionExpression',
      ConditionalExpression: 'ConditionalExpression',
      ContinueStatement: 'ContinueStatement',
      DebuggerStatement: 'DebuggerStatement',
      DirectiveStatement: 'DirectiveStatement',
      DoWhileStatement: 'DoWhileStatement',
      EmptyStatement: 'EmptyStatement',
      ExportAllDeclaration: 'ExportAllDeclaration',
      ExportDefaultDeclaration: 'ExportDefaultDeclaration',
      ExportNamedDeclaration: 'ExportNamedDeclaration',
      ExportSpecifier: 'ExportSpecifier',
      ExpressionStatement: 'ExpressionStatement',
      ForStatement: 'ForStatement',
      ForInStatement: 'ForInStatement',
      ForOfStatement: 'ForOfStatement',
      FunctionDeclaration: 'FunctionDeclaration',
      FunctionExpression: 'FunctionExpression',
      GeneratorExpression: 'GeneratorExpression',
      Identifier: 'Identifier',
      IfStatement: 'IfStatement',
      ImportExpression: 'ImportExpression',
      ImportDeclaration: 'ImportDeclaration',
      ImportDefaultSpecifier: 'ImportDefaultSpecifier',
      ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
      ImportSpecifier: 'ImportSpecifier',
      Literal: 'Literal',
      LabeledStatement: 'LabeledStatement',
      LogicalExpression: 'LogicalExpression',
      MemberExpression: 'MemberExpression',
      MetaProperty: 'MetaProperty',
      MethodDefinition: 'MethodDefinition',
      ModuleSpecifier: 'ModuleSpecifier',
      NewExpression: 'NewExpression',
      ObjectExpression: 'ObjectExpression',
      ObjectPattern: 'ObjectPattern',
      PrivateIdentifier: 'PrivateIdentifier',
      Program: 'Program',
      Property: 'Property',
      PropertyDefinition: 'PropertyDefinition',
      RestElement: 'RestElement',
      ReturnStatement: 'ReturnStatement',
      SequenceExpression: 'SequenceExpression',
      SpreadElement: 'SpreadElement',
      Super: 'Super',
      SwitchStatement: 'SwitchStatement',
      SwitchCase: 'SwitchCase',
      TaggedTemplateExpression: 'TaggedTemplateExpression',
      TemplateElement: 'TemplateElement',
      TemplateLiteral: 'TemplateLiteral',
      ThisExpression: 'ThisExpression',
      ThrowStatement: 'ThrowStatement',
      TryStatement: 'TryStatement',
      UnaryExpression: 'UnaryExpression',
      UpdateExpression: 'UpdateExpression',
      VariableDeclaration: 'VariableDeclaration',
      VariableDeclarator: 'VariableDeclarator',
      WhileStatement: 'WhileStatement',
      WithStatement: 'WithStatement',
      YieldExpression: 'YieldExpression',
    }),
      (h = {
        AssignmentExpression: ['left', 'right'],
        AssignmentPattern: ['left', 'right'],
        ArrayExpression: ['elements'],
        ArrayPattern: ['elements'],
        ArrowFunctionExpression: ['params', 'body'],
        AwaitExpression: ['argument'],
        BlockStatement: ['body'],
        BinaryExpression: ['left', 'right'],
        BreakStatement: ['label'],
        CallExpression: ['callee', 'arguments'],
        CatchClause: ['param', 'body'],
        ChainExpression: ['expression'],
        ClassBody: ['body'],
        ClassDeclaration: ['id', 'superClass', 'body'],
        ClassExpression: ['id', 'superClass', 'body'],
        ComprehensionBlock: ['left', 'right'],
        ComprehensionExpression: ['blocks', 'filter', 'body'],
        ConditionalExpression: ['test', 'consequent', 'alternate'],
        ContinueStatement: ['label'],
        DebuggerStatement: [],
        DirectiveStatement: [],
        DoWhileStatement: ['body', 'test'],
        EmptyStatement: [],
        ExportAllDeclaration: ['source'],
        ExportDefaultDeclaration: ['declaration'],
        ExportNamedDeclaration: ['declaration', 'specifiers', 'source'],
        ExportSpecifier: ['exported', 'local'],
        ExpressionStatement: ['expression'],
        ForStatement: ['init', 'test', 'update', 'body'],
        ForInStatement: ['left', 'right', 'body'],
        ForOfStatement: ['left', 'right', 'body'],
        FunctionDeclaration: ['id', 'params', 'body'],
        FunctionExpression: ['id', 'params', 'body'],
        GeneratorExpression: ['blocks', 'filter', 'body'],
        Identifier: [],
        IfStatement: ['test', 'consequent', 'alternate'],
        ImportExpression: ['source'],
        ImportDeclaration: ['specifiers', 'source'],
        ImportDefaultSpecifier: ['local'],
        ImportNamespaceSpecifier: ['local'],
        ImportSpecifier: ['imported', 'local'],
        Literal: [],
        LabeledStatement: ['label', 'body'],
        LogicalExpression: ['left', 'right'],
        MemberExpression: ['object', 'property'],
        MetaProperty: ['meta', 'property'],
        MethodDefinition: ['key', 'value'],
        ModuleSpecifier: [],
        NewExpression: ['callee', 'arguments'],
        ObjectExpression: ['properties'],
        ObjectPattern: ['properties'],
        PrivateIdentifier: [],
        Program: ['body'],
        Property: ['key', 'value'],
        PropertyDefinition: ['key', 'value'],
        RestElement: ['argument'],
        ReturnStatement: ['argument'],
        SequenceExpression: ['expressions'],
        SpreadElement: ['argument'],
        Super: [],
        SwitchStatement: ['discriminant', 'cases'],
        SwitchCase: ['test', 'consequent'],
        TaggedTemplateExpression: ['tag', 'quasi'],
        TemplateElement: [],
        TemplateLiteral: ['quasis', 'expressions'],
        ThisExpression: [],
        ThrowStatement: ['argument'],
        TryStatement: ['block', 'handler', 'finalizer'],
        UnaryExpression: ['argument'],
        UpdateExpression: ['argument'],
        VariableDeclaration: ['declarations'],
        VariableDeclarator: ['id', 'init'],
        WhileStatement: ['test', 'body'],
        WithStatement: ['object', 'body'],
        YieldExpression: ['argument'],
      }),
      (c = {}),
      (g = {}),
      (x = {}),
      (u = { Break: c, Skip: g, Remove: x });
    function w(A, o) {
      (this.parent = A), (this.key = o);
    }
    (w.prototype.replace = function (o) {
      this.parent[this.key] = o;
    }),
      (w.prototype.remove = function () {
        return Array.isArray(this.parent)
          ? (this.parent.splice(this.key, 1), !0)
          : (this.replace(null), !1);
      });
    function b(A, o, B, N) {
      (this.node = A), (this.path = o), (this.wrap = B), (this.ref = N);
    }
    function S() {}
    (S.prototype.path = function () {
      var o, B, N, H, z, te;
      function J(K, le) {
        if (Array.isArray(le))
          for (N = 0, H = le.length; N < H; ++N) K.push(le[N]);
        else K.push(le);
      }
      if (!this.__current.path) return null;
      for (z = [], o = 2, B = this.__leavelist.length; o < B; ++o)
        (te = this.__leavelist[o]), J(z, te.path);
      return J(z, this.__current.path), z;
    }),
      (S.prototype.type = function () {
        var A = this.current();
        return A.type || this.__current.wrap;
      }),
      (S.prototype.parents = function () {
        var o, B, N;
        for (N = [], o = 1, B = this.__leavelist.length; o < B; ++o)
          N.push(this.__leavelist[o].node);
        return N;
      }),
      (S.prototype.current = function () {
        return this.__current.node;
      }),
      (S.prototype.__execute = function (o, B) {
        var N, H;
        return (
          (H = void 0),
          (N = this.__current),
          (this.__current = B),
          (this.__state = null),
          o &&
            (H = o.call(
              this,
              B.node,
              this.__leavelist[this.__leavelist.length - 1].node,
            )),
          (this.__current = N),
          H
        );
      }),
      (S.prototype.notify = function (o) {
        this.__state = o;
      }),
      (S.prototype.skip = function () {
        this.notify(g);
      }),
      (S.prototype.break = function () {
        this.notify(c);
      }),
      (S.prototype.remove = function () {
        this.notify(x);
      }),
      (S.prototype.__initialize = function (A, o) {
        (this.visitor = o),
          (this.root = A),
          (this.__worklist = []),
          (this.__leavelist = []),
          (this.__current = null),
          (this.__state = null),
          (this.__fallback = null),
          o.fallback === 'iteration'
            ? (this.__fallback = Object.keys)
            : typeof o.fallback == 'function' && (this.__fallback = o.fallback),
          (this.__keys = h),
          o.keys &&
            (this.__keys = Object.assign(Object.create(this.__keys), o.keys));
      });
    function k(A) {
      return A == null ? !1 : typeof A == 'object' && typeof A.type == 'string';
    }
    function F(A, o) {
      return (
        (A === s.ObjectExpression || A === s.ObjectPattern) &&
        o === 'properties'
      );
    }
    function _(A, o) {
      for (var B = A.length - 1; B >= 0; --B) if (A[B].node === o) return !0;
      return !1;
    }
    (S.prototype.traverse = function (o, B) {
      var N, H, z, te, J, K, le, Ee, ye, ve, oe, _e;
      for (
        this.__initialize(o, B),
          _e = {},
          N = this.__worklist,
          H = this.__leavelist,
          N.push(new b(o, null, null, null)),
          H.push(new b(null, null, null, null));
        N.length;

      ) {
        if (((z = N.pop()), z === _e)) {
          if (
            ((z = H.pop()),
            (K = this.__execute(B.leave, z)),
            this.__state === c || K === c)
          )
            return;
          continue;
        }
        if (z.node) {
          if (((K = this.__execute(B.enter, z)), this.__state === c || K === c))
            return;
          if ((N.push(_e), H.push(z), this.__state === g || K === g)) continue;
          if (
            ((te = z.node), (J = te.type || z.wrap), (ve = this.__keys[J]), !ve)
          )
            if (this.__fallback) ve = this.__fallback(te);
            else throw new Error('Unknown node type ' + J + '.');
          for (Ee = ve.length; (Ee -= 1) >= 0; )
            if (((le = ve[Ee]), (oe = te[le]), !!oe)) {
              if (Array.isArray(oe)) {
                for (ye = oe.length; (ye -= 1) >= 0; )
                  if (oe[ye] && !_(H, oe[ye])) {
                    if (F(J, ve[Ee]))
                      z = new b(oe[ye], [le, ye], 'Property', null);
                    else if (k(oe[ye])) z = new b(oe[ye], [le, ye], null, null);
                    else continue;
                    N.push(z);
                  }
              } else if (k(oe)) {
                if (_(H, oe)) continue;
                N.push(new b(oe, le, null, null));
              }
            }
        }
      }
    }),
      (S.prototype.replace = function (o, B) {
        var N, H, z, te, J, K, le, Ee, ye, ve, oe, _e, Pe;
        function lt(W) {
          var Me, ht, je, ge;
          if (W.ref.remove()) {
            for (ht = W.ref.key, ge = W.ref.parent, Me = N.length; Me--; )
              if (((je = N[Me]), je.ref && je.ref.parent === ge)) {
                if (je.ref.key < ht) break;
                --je.ref.key;
              }
          }
        }
        for (
          this.__initialize(o, B),
            oe = {},
            N = this.__worklist,
            H = this.__leavelist,
            _e = { root: o },
            K = new b(o, null, null, new w(_e, 'root')),
            N.push(K),
            H.push(K);
          N.length;

        ) {
          if (((K = N.pop()), K === oe)) {
            if (
              ((K = H.pop()),
              (J = this.__execute(B.leave, K)),
              J !== void 0 && J !== c && J !== g && J !== x && K.ref.replace(J),
              (this.__state === x || J === x) && lt(K),
              this.__state === c || J === c)
            )
              return _e.root;
            continue;
          }
          if (
            ((J = this.__execute(B.enter, K)),
            J !== void 0 &&
              J !== c &&
              J !== g &&
              J !== x &&
              (K.ref.replace(J), (K.node = J)),
            (this.__state === x || J === x) && (lt(K), (K.node = null)),
            this.__state === c || J === c)
          )
            return _e.root;
          if (
            ((z = K.node),
            !!z && (N.push(oe), H.push(K), !(this.__state === g || J === g)))
          ) {
            if (((te = z.type || K.wrap), (ye = this.__keys[te]), !ye))
              if (this.__fallback) ye = this.__fallback(z);
              else throw new Error('Unknown node type ' + te + '.');
            for (le = ye.length; (le -= 1) >= 0; )
              if (((Pe = ye[le]), (ve = z[Pe]), !!ve))
                if (Array.isArray(ve)) {
                  for (Ee = ve.length; (Ee -= 1) >= 0; )
                    if (ve[Ee]) {
                      if (F(te, ye[le]))
                        K = new b(ve[Ee], [Pe, Ee], 'Property', new w(ve, Ee));
                      else if (k(ve[Ee]))
                        K = new b(ve[Ee], [Pe, Ee], null, new w(ve, Ee));
                      else continue;
                      N.push(K);
                    }
                } else k(ve) && N.push(new b(ve, Pe, null, new w(z, Pe)));
          }
        }
        return _e.root;
      });
    function M(A, o) {
      var B = new S();
      return B.traverse(A, o);
    }
    function V(A, o) {
      var B = new S();
      return B.replace(A, o);
    }
    function G(A, o) {
      var B;
      return (
        (B = D(o, function (H) {
          return H.range[0] > A.range[0];
        })),
        (A.extendedRange = [A.range[0], A.range[1]]),
        B !== o.length && (A.extendedRange[1] = o[B].range[0]),
        (B -= 1),
        B >= 0 && (A.extendedRange[0] = o[B].range[1]),
        A
      );
    }
    function P(A, o, B) {
      var N = [],
        H,
        z,
        te,
        J;
      if (!A.range) throw new Error('attachComments needs range information');
      if (!B.length) {
        if (o.length) {
          for (te = 0, z = o.length; te < z; te += 1)
            (H = E(o[te])), (H.extendedRange = [0, A.range[0]]), N.push(H);
          A.leadingComments = N;
        }
        return A;
      }
      for (te = 0, z = o.length; te < z; te += 1) N.push(G(E(o[te]), B));
      return (
        (J = 0),
        M(A, {
          enter: function (K) {
            for (
              var le;
              J < N.length &&
              ((le = N[J]), !(le.extendedRange[1] > K.range[0]));

            )
              le.extendedRange[1] === K.range[0]
                ? (K.leadingComments || (K.leadingComments = []),
                  K.leadingComments.push(le),
                  N.splice(J, 1))
                : (J += 1);
            if (J === N.length) return u.Break;
            if (N[J].extendedRange[0] > K.range[1]) return u.Skip;
          },
        }),
        (J = 0),
        M(A, {
          leave: function (K) {
            for (
              var le;
              J < N.length &&
              ((le = N[J]), !(K.range[1] < le.extendedRange[0]));

            )
              K.range[1] === le.extendedRange[0]
                ? (K.trailingComments || (K.trailingComments = []),
                  K.trailingComments.push(le),
                  N.splice(J, 1))
                : (J += 1);
            if (J === N.length) return u.Break;
            if (N[J].extendedRange[0] > K.range[1]) return u.Skip;
          },
        }),
        A
      );
    }
    return (
      (r.Syntax = s),
      (r.traverse = M),
      (r.replace = V),
      (r.attachComments = P),
      (r.VisitorKeys = h),
      (r.VisitorOption = u),
      (r.Controller = S),
      (r.cloneEnvironment = function () {
        return i({});
      }),
      r
    );
  })(e);
})(Ln);
var yi = {},
  On = { exports: {} };
(function () {
  function e(c) {
    if (c == null) return !1;
    switch (c.type) {
      case 'ArrayExpression':
      case 'AssignmentExpression':
      case 'BinaryExpression':
      case 'CallExpression':
      case 'ConditionalExpression':
      case 'FunctionExpression':
      case 'Identifier':
      case 'Literal':
      case 'LogicalExpression':
      case 'MemberExpression':
      case 'NewExpression':
      case 'ObjectExpression':
      case 'SequenceExpression':
      case 'ThisExpression':
      case 'UnaryExpression':
      case 'UpdateExpression':
        return !0;
    }
    return !1;
  }
  function i(c) {
    if (c == null) return !1;
    switch (c.type) {
      case 'DoWhileStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'WhileStatement':
        return !0;
    }
    return !1;
  }
  function r(c) {
    if (c == null) return !1;
    switch (c.type) {
      case 'BlockStatement':
      case 'BreakStatement':
      case 'ContinueStatement':
      case 'DebuggerStatement':
      case 'DoWhileStatement':
      case 'EmptyStatement':
      case 'ExpressionStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'IfStatement':
      case 'LabeledStatement':
      case 'ReturnStatement':
      case 'SwitchStatement':
      case 'ThrowStatement':
      case 'TryStatement':
      case 'VariableDeclaration':
      case 'WhileStatement':
      case 'WithStatement':
        return !0;
    }
    return !1;
  }
  function s(c) {
    return r(c) || (c != null && c.type === 'FunctionDeclaration');
  }
  function u(c) {
    switch (c.type) {
      case 'IfStatement':
        return c.alternate != null ? c.alternate : c.consequent;
      case 'LabeledStatement':
      case 'ForStatement':
      case 'ForInStatement':
      case 'WhileStatement':
      case 'WithStatement':
        return c.body;
    }
    return null;
  }
  function h(c) {
    var g;
    if (c.type !== 'IfStatement' || c.alternate == null) return !1;
    g = c.consequent;
    do {
      if (g.type === 'IfStatement' && g.alternate == null) return !0;
      g = u(g);
    } while (g);
    return !1;
  }
  On.exports = {
    isExpression: e,
    isStatement: r,
    isIterationStatement: i,
    isSourceElement: s,
    isProblematicIfStatement: h,
    trailingStatement: u,
  };
})();
var Sa = On.exports,
  Rn = { exports: {} };
(function () {
  var e, i, r, s, u, h;
  (i = {
    NonAsciiIdentifierStart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  }),
    (e = {
      NonAsciiIdentifierStart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart:
        /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
    });
  function c(_) {
    return 48 <= _ && _ <= 57;
  }
  function g(_) {
    return (
      (48 <= _ && _ <= 57) || (97 <= _ && _ <= 102) || (65 <= _ && _ <= 70)
    );
  }
  function x(_) {
    return _ >= 48 && _ <= 55;
  }
  r = [
    5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
    8239, 8287, 12288, 65279,
  ];
  function E(_) {
    return (
      _ === 32 ||
      _ === 9 ||
      _ === 11 ||
      _ === 12 ||
      _ === 160 ||
      (_ >= 5760 && r.indexOf(_) >= 0)
    );
  }
  function D(_) {
    return _ === 10 || _ === 13 || _ === 8232 || _ === 8233;
  }
  function w(_) {
    if (_ <= 65535) return String.fromCharCode(_);
    var M = String.fromCharCode(Math.floor((_ - 65536) / 1024) + 55296),
      V = String.fromCharCode(((_ - 65536) % 1024) + 56320);
    return M + V;
  }
  for (s = new Array(128), h = 0; h < 128; ++h)
    s[h] =
      (h >= 97 && h <= 122) || (h >= 65 && h <= 90) || h === 36 || h === 95;
  for (u = new Array(128), h = 0; h < 128; ++h)
    u[h] =
      (h >= 97 && h <= 122) ||
      (h >= 65 && h <= 90) ||
      (h >= 48 && h <= 57) ||
      h === 36 ||
      h === 95;
  function b(_) {
    return _ < 128 ? s[_] : i.NonAsciiIdentifierStart.test(w(_));
  }
  function S(_) {
    return _ < 128 ? u[_] : i.NonAsciiIdentifierPart.test(w(_));
  }
  function k(_) {
    return _ < 128 ? s[_] : e.NonAsciiIdentifierStart.test(w(_));
  }
  function F(_) {
    return _ < 128 ? u[_] : e.NonAsciiIdentifierPart.test(w(_));
  }
  Rn.exports = {
    isDecimalDigit: c,
    isHexDigit: g,
    isOctalDigit: x,
    isWhiteSpace: E,
    isLineTerminator: D,
    isIdentifierStartES5: b,
    isIdentifierPartES5: S,
    isIdentifierStartES6: k,
    isIdentifierPartES6: F,
  };
})();
var Vn = Rn.exports,
  Mn = { exports: {} };
(function () {
  var e = Vn;
  function i(b) {
    switch (b) {
      case 'implements':
      case 'interface':
      case 'package':
      case 'private':
      case 'protected':
      case 'public':
      case 'static':
      case 'let':
        return !0;
      default:
        return !1;
    }
  }
  function r(b, S) {
    return !S && b === 'yield' ? !1 : s(b, S);
  }
  function s(b, S) {
    if (S && i(b)) return !0;
    switch (b.length) {
      case 2:
        return b === 'if' || b === 'in' || b === 'do';
      case 3:
        return b === 'var' || b === 'for' || b === 'new' || b === 'try';
      case 4:
        return (
          b === 'this' ||
          b === 'else' ||
          b === 'case' ||
          b === 'void' ||
          b === 'with' ||
          b === 'enum'
        );
      case 5:
        return (
          b === 'while' ||
          b === 'break' ||
          b === 'catch' ||
          b === 'throw' ||
          b === 'const' ||
          b === 'yield' ||
          b === 'class' ||
          b === 'super'
        );
      case 6:
        return (
          b === 'return' ||
          b === 'typeof' ||
          b === 'delete' ||
          b === 'switch' ||
          b === 'export' ||
          b === 'import'
        );
      case 7:
        return b === 'default' || b === 'finally' || b === 'extends';
      case 8:
        return b === 'function' || b === 'continue' || b === 'debugger';
      case 10:
        return b === 'instanceof';
      default:
        return !1;
    }
  }
  function u(b, S) {
    return b === 'null' || b === 'true' || b === 'false' || r(b, S);
  }
  function h(b, S) {
    return b === 'null' || b === 'true' || b === 'false' || s(b, S);
  }
  function c(b) {
    return b === 'eval' || b === 'arguments';
  }
  function g(b) {
    var S, k, F;
    if (b.length === 0 || ((F = b.charCodeAt(0)), !e.isIdentifierStartES5(F)))
      return !1;
    for (S = 1, k = b.length; S < k; ++S)
      if (((F = b.charCodeAt(S)), !e.isIdentifierPartES5(F))) return !1;
    return !0;
  }
  function x(b, S) {
    return (b - 55296) * 1024 + (S - 56320) + 65536;
  }
  function E(b) {
    var S, k, F, _, M;
    if (b.length === 0) return !1;
    for (M = e.isIdentifierStartES6, S = 0, k = b.length; S < k; ++S) {
      if (((F = b.charCodeAt(S)), 55296 <= F && F <= 56319)) {
        if (
          (++S, S >= k || ((_ = b.charCodeAt(S)), !(56320 <= _ && _ <= 57343)))
        )
          return !1;
        F = x(F, _);
      }
      if (!M(F)) return !1;
      M = e.isIdentifierPartES6;
    }
    return !0;
  }
  function D(b, S) {
    return g(b) && !u(b, S);
  }
  function w(b, S) {
    return E(b) && !h(b, S);
  }
  Mn.exports = {
    isKeywordES5: r,
    isKeywordES6: s,
    isReservedWordES5: u,
    isReservedWordES6: h,
    isRestrictedWord: c,
    isIdentifierNameES5: g,
    isIdentifierNameES6: E,
    isIdentifierES5: D,
    isIdentifierES6: w,
  };
})();
var Fa = Mn.exports;
(function () {
  (yi.ast = Sa), (yi.code = Vn), (yi.keyword = Fa);
})();
var Ht = {},
  Hi = {},
  xi = {},
  Ci = {},
  en;
function _a() {
  if (en) return Ci;
  en = 1;
  var e =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(
      '',
    );
  return (
    (Ci.encode = function (i) {
      if (0 <= i && i < e.length) return e[i];
      throw new TypeError('Must be between 0 and 63: ' + i);
    }),
    (Ci.decode = function (i) {
      var r = 65,
        s = 90,
        u = 97,
        h = 122,
        c = 48,
        g = 57,
        x = 43,
        E = 47,
        D = 26,
        w = 52;
      return r <= i && i <= s
        ? i - r
        : u <= i && i <= h
          ? i - u + D
          : c <= i && i <= g
            ? i - c + w
            : i == x
              ? 62
              : i == E
                ? 63
                : -1;
    }),
    Ci
  );
}
var tn;
function jn() {
  if (tn) return xi;
  tn = 1;
  var e = _a(),
    i = 5,
    r = 1 << i,
    s = r - 1,
    u = r;
  function h(g) {
    return g < 0 ? (-g << 1) + 1 : (g << 1) + 0;
  }
  function c(g) {
    var x = (g & 1) === 1,
      E = g >> 1;
    return x ? -E : E;
  }
  return (
    (xi.encode = function (x) {
      var E = '',
        D,
        w = h(x);
      do (D = w & s), (w >>>= i), w > 0 && (D |= u), (E += e.encode(D));
      while (w > 0);
      return E;
    }),
    (xi.decode = function (x, E, D) {
      var w = x.length,
        b = 0,
        S = 0,
        k,
        F;
      do {
        if (E >= w)
          throw new Error('Expected more digits in base 64 VLQ value.');
        if (((F = e.decode(x.charCodeAt(E++))), F === -1))
          throw new Error('Invalid base64 digit: ' + x.charAt(E - 1));
        (k = !!(F & u)), (F &= s), (b = b + (F << S)), (S += i);
      } while (k);
      (D.value = c(b)), (D.rest = E);
    }),
    xi
  );
}
var Qi = {},
  rn;
function ri() {
  return (
    rn ||
      ((rn = 1),
      (function (e) {
        function i(P, A, o) {
          if (A in P) return P[A];
          if (arguments.length === 3) return o;
          throw new Error('"' + A + '" is a required argument.');
        }
        e.getArg = i;
        var r =
            /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
          s = /^data:.+\,.+$/;
        function u(P) {
          var A = P.match(r);
          return A
            ? { scheme: A[1], auth: A[2], host: A[3], port: A[4], path: A[5] }
            : null;
        }
        e.urlParse = u;
        function h(P) {
          var A = '';
          return (
            P.scheme && (A += P.scheme + ':'),
            (A += '//'),
            P.auth && (A += P.auth + '@'),
            P.host && (A += P.host),
            P.port && (A += ':' + P.port),
            P.path && (A += P.path),
            A
          );
        }
        e.urlGenerate = h;
        function c(P) {
          var A = P,
            o = u(P);
          if (o) {
            if (!o.path) return P;
            A = o.path;
          }
          for (
            var B = e.isAbsolute(A),
              N = A.split(/\/+/),
              H,
              z = 0,
              te = N.length - 1;
            te >= 0;
            te--
          )
            (H = N[te]),
              H === '.'
                ? N.splice(te, 1)
                : H === '..'
                  ? z++
                  : z > 0 &&
                    (H === ''
                      ? (N.splice(te + 1, z), (z = 0))
                      : (N.splice(te, 2), z--));
          return (
            (A = N.join('/')),
            A === '' && (A = B ? '/' : '.'),
            o ? ((o.path = A), h(o)) : A
          );
        }
        e.normalize = c;
        function g(P, A) {
          P === '' && (P = '.'), A === '' && (A = '.');
          var o = u(A),
            B = u(P);
          if ((B && (P = B.path || '/'), o && !o.scheme))
            return B && (o.scheme = B.scheme), h(o);
          if (o || A.match(s)) return A;
          if (B && !B.host && !B.path) return (B.host = A), h(B);
          var N = A.charAt(0) === '/' ? A : c(P.replace(/\/+$/, '') + '/' + A);
          return B ? ((B.path = N), h(B)) : N;
        }
        (e.join = g),
          (e.isAbsolute = function (P) {
            return P.charAt(0) === '/' || r.test(P);
          });
        function x(P, A) {
          P === '' && (P = '.'), (P = P.replace(/\/$/, ''));
          for (var o = 0; A.indexOf(P + '/') !== 0; ) {
            var B = P.lastIndexOf('/');
            if (B < 0 || ((P = P.slice(0, B)), P.match(/^([^\/]+:\/)?\/*$/)))
              return A;
            ++o;
          }
          return Array(o + 1).join('../') + A.substr(P.length + 1);
        }
        e.relative = x;
        var E = (function () {
          var P = Object.create(null);
          return !('__proto__' in P);
        })();
        function D(P) {
          return P;
        }
        function w(P) {
          return S(P) ? '$' + P : P;
        }
        e.toSetString = E ? D : w;
        function b(P) {
          return S(P) ? P.slice(1) : P;
        }
        e.fromSetString = E ? D : b;
        function S(P) {
          if (!P) return !1;
          var A = P.length;
          if (
            A < 9 ||
            P.charCodeAt(A - 1) !== 95 ||
            P.charCodeAt(A - 2) !== 95 ||
            P.charCodeAt(A - 3) !== 111 ||
            P.charCodeAt(A - 4) !== 116 ||
            P.charCodeAt(A - 5) !== 111 ||
            P.charCodeAt(A - 6) !== 114 ||
            P.charCodeAt(A - 7) !== 112 ||
            P.charCodeAt(A - 8) !== 95 ||
            P.charCodeAt(A - 9) !== 95
          )
            return !1;
          for (var o = A - 10; o >= 0; o--)
            if (P.charCodeAt(o) !== 36) return !1;
          return !0;
        }
        function k(P, A, o) {
          var B = _(P.source, A.source);
          return B !== 0 ||
            ((B = P.originalLine - A.originalLine), B !== 0) ||
            ((B = P.originalColumn - A.originalColumn), B !== 0 || o) ||
            ((B = P.generatedColumn - A.generatedColumn), B !== 0) ||
            ((B = P.generatedLine - A.generatedLine), B !== 0)
            ? B
            : _(P.name, A.name);
        }
        e.compareByOriginalPositions = k;
        function F(P, A, o) {
          var B = P.generatedLine - A.generatedLine;
          return B !== 0 ||
            ((B = P.generatedColumn - A.generatedColumn), B !== 0 || o) ||
            ((B = _(P.source, A.source)), B !== 0) ||
            ((B = P.originalLine - A.originalLine), B !== 0) ||
            ((B = P.originalColumn - A.originalColumn), B !== 0)
            ? B
            : _(P.name, A.name);
        }
        e.compareByGeneratedPositionsDeflated = F;
        function _(P, A) {
          return P === A
            ? 0
            : P === null
              ? 1
              : A === null
                ? -1
                : P > A
                  ? 1
                  : -1;
        }
        function M(P, A) {
          var o = P.generatedLine - A.generatedLine;
          return o !== 0 ||
            ((o = P.generatedColumn - A.generatedColumn), o !== 0) ||
            ((o = _(P.source, A.source)), o !== 0) ||
            ((o = P.originalLine - A.originalLine), o !== 0) ||
            ((o = P.originalColumn - A.originalColumn), o !== 0)
            ? o
            : _(P.name, A.name);
        }
        e.compareByGeneratedPositionsInflated = M;
        function V(P) {
          return JSON.parse(P.replace(/^\)]}'[^\n]*\n/, ''));
        }
        e.parseSourceMapInput = V;
        function G(P, A, o) {
          if (
            ((A = A || ''),
            P &&
              (P[P.length - 1] !== '/' && A[0] !== '/' && (P += '/'),
              (A = P + A)),
            o)
          ) {
            var B = u(o);
            if (!B) throw new Error('sourceMapURL could not be parsed');
            if (B.path) {
              var N = B.path.lastIndexOf('/');
              N >= 0 && (B.path = B.path.substring(0, N + 1));
            }
            A = g(h(B), A);
          }
          return c(A);
        }
        e.computeSourceURL = G;
      })(Qi)),
    Qi
  );
}
var Ki = {},
  nn;
function qn() {
  if (nn) return Ki;
  nn = 1;
  var e = ri(),
    i = Object.prototype.hasOwnProperty,
    r = typeof Map < 'u';
  function s() {
    (this._array = []), (this._set = r ? new Map() : Object.create(null));
  }
  return (
    (s.fromArray = function (h, c) {
      for (var g = new s(), x = 0, E = h.length; x < E; x++) g.add(h[x], c);
      return g;
    }),
    (s.prototype.size = function () {
      return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    }),
    (s.prototype.add = function (h, c) {
      var g = r ? h : e.toSetString(h),
        x = r ? this.has(h) : i.call(this._set, g),
        E = this._array.length;
      (!x || c) && this._array.push(h),
        x || (r ? this._set.set(h, E) : (this._set[g] = E));
    }),
    (s.prototype.has = function (h) {
      if (r) return this._set.has(h);
      var c = e.toSetString(h);
      return i.call(this._set, c);
    }),
    (s.prototype.indexOf = function (h) {
      if (r) {
        var c = this._set.get(h);
        if (c >= 0) return c;
      } else {
        var g = e.toSetString(h);
        if (i.call(this._set, g)) return this._set[g];
      }
      throw new Error('"' + h + '" is not in the set.');
    }),
    (s.prototype.at = function (h) {
      if (h >= 0 && h < this._array.length) return this._array[h];
      throw new Error('No element indexed by ' + h);
    }),
    (s.prototype.toArray = function () {
      return this._array.slice();
    }),
    (Ki.ArraySet = s),
    Ki
  );
}
var Xi = {},
  sn;
function wa() {
  if (sn) return Xi;
  sn = 1;
  var e = ri();
  function i(s, u) {
    var h = s.generatedLine,
      c = u.generatedLine,
      g = s.generatedColumn,
      x = u.generatedColumn;
    return (
      c > h ||
      (c == h && x >= g) ||
      e.compareByGeneratedPositionsInflated(s, u) <= 0
    );
  }
  function r() {
    (this._array = []),
      (this._sorted = !0),
      (this._last = { generatedLine: -1, generatedColumn: 0 });
  }
  return (
    (r.prototype.unsortedForEach = function (u, h) {
      this._array.forEach(u, h);
    }),
    (r.prototype.add = function (u) {
      i(this._last, u)
        ? ((this._last = u), this._array.push(u))
        : ((this._sorted = !1), this._array.push(u));
    }),
    (r.prototype.toArray = function () {
      return (
        this._sorted ||
          (this._array.sort(e.compareByGeneratedPositionsInflated),
          (this._sorted = !0)),
        this._array
      );
    }),
    (Xi.MappingList = r),
    Xi
  );
}
var an;
function Un() {
  if (an) return Hi;
  an = 1;
  var e = jn(),
    i = ri(),
    r = qn().ArraySet,
    s = wa().MappingList;
  function u(h) {
    h || (h = {}),
      (this._file = i.getArg(h, 'file', null)),
      (this._sourceRoot = i.getArg(h, 'sourceRoot', null)),
      (this._skipValidation = i.getArg(h, 'skipValidation', !1)),
      (this._sources = new r()),
      (this._names = new r()),
      (this._mappings = new s()),
      (this._sourcesContents = null);
  }
  return (
    (u.prototype._version = 3),
    (u.fromSourceMap = function (c) {
      var g = c.sourceRoot,
        x = new u({ file: c.file, sourceRoot: g });
      return (
        c.eachMapping(function (E) {
          var D = {
            generated: { line: E.generatedLine, column: E.generatedColumn },
          };
          E.source != null &&
            ((D.source = E.source),
            g != null && (D.source = i.relative(g, D.source)),
            (D.original = { line: E.originalLine, column: E.originalColumn }),
            E.name != null && (D.name = E.name)),
            x.addMapping(D);
        }),
        c.sources.forEach(function (E) {
          var D = E;
          g !== null && (D = i.relative(g, E)),
            x._sources.has(D) || x._sources.add(D);
          var w = c.sourceContentFor(E);
          w != null && x.setSourceContent(E, w);
        }),
        x
      );
    }),
    (u.prototype.addMapping = function (c) {
      var g = i.getArg(c, 'generated'),
        x = i.getArg(c, 'original', null),
        E = i.getArg(c, 'source', null),
        D = i.getArg(c, 'name', null);
      this._skipValidation || this._validateMapping(g, x, E, D),
        E != null &&
          ((E = String(E)), this._sources.has(E) || this._sources.add(E)),
        D != null &&
          ((D = String(D)), this._names.has(D) || this._names.add(D)),
        this._mappings.add({
          generatedLine: g.line,
          generatedColumn: g.column,
          originalLine: x != null && x.line,
          originalColumn: x != null && x.column,
          source: E,
          name: D,
        });
    }),
    (u.prototype.setSourceContent = function (c, g) {
      var x = c;
      this._sourceRoot != null && (x = i.relative(this._sourceRoot, x)),
        g != null
          ? (this._sourcesContents ||
              (this._sourcesContents = Object.create(null)),
            (this._sourcesContents[i.toSetString(x)] = g))
          : this._sourcesContents &&
            (delete this._sourcesContents[i.toSetString(x)],
            Object.keys(this._sourcesContents).length === 0 &&
              (this._sourcesContents = null));
    }),
    (u.prototype.applySourceMap = function (c, g, x) {
      var E = g;
      if (g == null) {
        if (c.file == null)
          throw new Error(
            `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`,
          );
        E = c.file;
      }
      var D = this._sourceRoot;
      D != null && (E = i.relative(D, E));
      var w = new r(),
        b = new r();
      this._mappings.unsortedForEach(function (S) {
        if (S.source === E && S.originalLine != null) {
          var k = c.originalPositionFor({
            line: S.originalLine,
            column: S.originalColumn,
          });
          k.source != null &&
            ((S.source = k.source),
            x != null && (S.source = i.join(x, S.source)),
            D != null && (S.source = i.relative(D, S.source)),
            (S.originalLine = k.line),
            (S.originalColumn = k.column),
            k.name != null && (S.name = k.name));
        }
        var F = S.source;
        F != null && !w.has(F) && w.add(F);
        var _ = S.name;
        _ != null && !b.has(_) && b.add(_);
      }, this),
        (this._sources = w),
        (this._names = b),
        c.sources.forEach(function (S) {
          var k = c.sourceContentFor(S);
          k != null &&
            (x != null && (S = i.join(x, S)),
            D != null && (S = i.relative(D, S)),
            this.setSourceContent(S, k));
        }, this);
    }),
    (u.prototype._validateMapping = function (c, g, x, E) {
      if (g && typeof g.line != 'number' && typeof g.column != 'number')
        throw new Error(
          'original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.',
        );
      if (
        !(
          c &&
          'line' in c &&
          'column' in c &&
          c.line > 0 &&
          c.column >= 0 &&
          !g &&
          !x &&
          !E
        )
      ) {
        if (
          c &&
          'line' in c &&
          'column' in c &&
          g &&
          'line' in g &&
          'column' in g &&
          c.line > 0 &&
          c.column >= 0 &&
          g.line > 0 &&
          g.column >= 0 &&
          x
        )
          return;
        throw new Error(
          'Invalid mapping: ' +
            JSON.stringify({ generated: c, source: x, original: g, name: E }),
        );
      }
    }),
    (u.prototype._serializeMappings = function () {
      for (
        var c = 0,
          g = 1,
          x = 0,
          E = 0,
          D = 0,
          w = 0,
          b = '',
          S,
          k,
          F,
          _,
          M = this._mappings.toArray(),
          V = 0,
          G = M.length;
        V < G;
        V++
      ) {
        if (((k = M[V]), (S = ''), k.generatedLine !== g))
          for (c = 0; k.generatedLine !== g; ) (S += ';'), g++;
        else if (V > 0) {
          if (!i.compareByGeneratedPositionsInflated(k, M[V - 1])) continue;
          S += ',';
        }
        (S += e.encode(k.generatedColumn - c)),
          (c = k.generatedColumn),
          k.source != null &&
            ((_ = this._sources.indexOf(k.source)),
            (S += e.encode(_ - w)),
            (w = _),
            (S += e.encode(k.originalLine - 1 - E)),
            (E = k.originalLine - 1),
            (S += e.encode(k.originalColumn - x)),
            (x = k.originalColumn),
            k.name != null &&
              ((F = this._names.indexOf(k.name)),
              (S += e.encode(F - D)),
              (D = F))),
          (b += S);
      }
      return b;
    }),
    (u.prototype._generateSourcesContent = function (c, g) {
      return c.map(function (x) {
        if (!this._sourcesContents) return null;
        g != null && (x = i.relative(g, x));
        var E = i.toSetString(x);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, E)
          ? this._sourcesContents[E]
          : null;
      }, this);
    }),
    (u.prototype.toJSON = function () {
      var c = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings(),
      };
      return (
        this._file != null && (c.file = this._file),
        this._sourceRoot != null && (c.sourceRoot = this._sourceRoot),
        this._sourcesContents &&
          (c.sourcesContent = this._generateSourcesContent(
            c.sources,
            c.sourceRoot,
          )),
        c
      );
    }),
    (u.prototype.toString = function () {
      return JSON.stringify(this.toJSON());
    }),
    (Hi.SourceMapGenerator = u),
    Hi
  );
}
var Qt = {},
  Ji = {},
  un;
function Ba() {
  return (
    un ||
      ((un = 1),
      (function (e) {
        (e.GREATEST_LOWER_BOUND = 1), (e.LEAST_UPPER_BOUND = 2);
        function i(r, s, u, h, c, g) {
          var x = Math.floor((s - r) / 2) + r,
            E = c(u, h[x], !0);
          return E === 0
            ? x
            : E > 0
              ? s - x > 1
                ? i(x, s, u, h, c, g)
                : g == e.LEAST_UPPER_BOUND
                  ? s < h.length
                    ? s
                    : -1
                  : x
              : x - r > 1
                ? i(r, x, u, h, c, g)
                : g == e.LEAST_UPPER_BOUND
                  ? x
                  : r < 0
                    ? -1
                    : r;
        }
        e.search = function (s, u, h, c) {
          if (u.length === 0) return -1;
          var g = i(-1, u.length, s, u, h, c || e.GREATEST_LOWER_BOUND);
          if (g < 0) return -1;
          for (; g - 1 >= 0 && h(u[g], u[g - 1], !0) === 0; ) --g;
          return g;
        };
      })(Ji)),
    Ji
  );
}
var $i = {},
  on;
function ka() {
  if (on) return $i;
  on = 1;
  function e(s, u, h) {
    var c = s[u];
    (s[u] = s[h]), (s[h] = c);
  }
  function i(s, u) {
    return Math.round(s + Math.random() * (u - s));
  }
  function r(s, u, h, c) {
    if (h < c) {
      var g = i(h, c),
        x = h - 1;
      e(s, g, c);
      for (var E = s[c], D = h; D < c; D++)
        u(s[D], E) <= 0 && ((x += 1), e(s, x, D));
      e(s, x + 1, D);
      var w = x + 1;
      r(s, u, h, w - 1), r(s, u, w + 1, c);
    }
  }
  return (
    ($i.quickSort = function (s, u) {
      r(s, u, 0, s.length - 1);
    }),
    $i
  );
}
var ln;
function Ia() {
  if (ln) return Qt;
  ln = 1;
  var e = ri(),
    i = Ba(),
    r = qn().ArraySet,
    s = jn(),
    u = ka().quickSort;
  function h(E, D) {
    var w = E;
    return (
      typeof E == 'string' && (w = e.parseSourceMapInput(E)),
      w.sections != null ? new x(w, D) : new c(w, D)
    );
  }
  (h.fromSourceMap = function (E, D) {
    return c.fromSourceMap(E, D);
  }),
    (h.prototype._version = 3),
    (h.prototype.__generatedMappings = null),
    Object.defineProperty(h.prototype, '_generatedMappings', {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return (
          this.__generatedMappings ||
            this._parseMappings(this._mappings, this.sourceRoot),
          this.__generatedMappings
        );
      },
    }),
    (h.prototype.__originalMappings = null),
    Object.defineProperty(h.prototype, '_originalMappings', {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return (
          this.__originalMappings ||
            this._parseMappings(this._mappings, this.sourceRoot),
          this.__originalMappings
        );
      },
    }),
    (h.prototype._charIsMappingSeparator = function (D, w) {
      var b = D.charAt(w);
      return b === ';' || b === ',';
    }),
    (h.prototype._parseMappings = function (D, w) {
      throw new Error('Subclasses must implement _parseMappings');
    }),
    (h.GENERATED_ORDER = 1),
    (h.ORIGINAL_ORDER = 2),
    (h.GREATEST_LOWER_BOUND = 1),
    (h.LEAST_UPPER_BOUND = 2),
    (h.prototype.eachMapping = function (D, w, b) {
      var S = w || null,
        k = b || h.GENERATED_ORDER,
        F;
      switch (k) {
        case h.GENERATED_ORDER:
          F = this._generatedMappings;
          break;
        case h.ORIGINAL_ORDER:
          F = this._originalMappings;
          break;
        default:
          throw new Error('Unknown order of iteration.');
      }
      var _ = this.sourceRoot;
      F.map(function (M) {
        var V = M.source === null ? null : this._sources.at(M.source);
        return (
          (V = e.computeSourceURL(_, V, this._sourceMapURL)),
          {
            source: V,
            generatedLine: M.generatedLine,
            generatedColumn: M.generatedColumn,
            originalLine: M.originalLine,
            originalColumn: M.originalColumn,
            name: M.name === null ? null : this._names.at(M.name),
          }
        );
      }, this).forEach(D, S);
    }),
    (h.prototype.allGeneratedPositionsFor = function (D) {
      var w = e.getArg(D, 'line'),
        b = {
          source: e.getArg(D, 'source'),
          originalLine: w,
          originalColumn: e.getArg(D, 'column', 0),
        };
      if (((b.source = this._findSourceIndex(b.source)), b.source < 0))
        return [];
      var S = [],
        k = this._findMapping(
          b,
          this._originalMappings,
          'originalLine',
          'originalColumn',
          e.compareByOriginalPositions,
          i.LEAST_UPPER_BOUND,
        );
      if (k >= 0) {
        var F = this._originalMappings[k];
        if (D.column === void 0)
          for (var _ = F.originalLine; F && F.originalLine === _; )
            S.push({
              line: e.getArg(F, 'generatedLine', null),
              column: e.getArg(F, 'generatedColumn', null),
              lastColumn: e.getArg(F, 'lastGeneratedColumn', null),
            }),
              (F = this._originalMappings[++k]);
        else
          for (
            var M = F.originalColumn;
            F && F.originalLine === w && F.originalColumn == M;

          )
            S.push({
              line: e.getArg(F, 'generatedLine', null),
              column: e.getArg(F, 'generatedColumn', null),
              lastColumn: e.getArg(F, 'lastGeneratedColumn', null),
            }),
              (F = this._originalMappings[++k]);
      }
      return S;
    }),
    (Qt.SourceMapConsumer = h);
  function c(E, D) {
    var w = E;
    typeof E == 'string' && (w = e.parseSourceMapInput(E));
    var b = e.getArg(w, 'version'),
      S = e.getArg(w, 'sources'),
      k = e.getArg(w, 'names', []),
      F = e.getArg(w, 'sourceRoot', null),
      _ = e.getArg(w, 'sourcesContent', null),
      M = e.getArg(w, 'mappings'),
      V = e.getArg(w, 'file', null);
    if (b != this._version) throw new Error('Unsupported version: ' + b);
    F && (F = e.normalize(F)),
      (S = S.map(String)
        .map(e.normalize)
        .map(function (G) {
          return F && e.isAbsolute(F) && e.isAbsolute(G) ? e.relative(F, G) : G;
        })),
      (this._names = r.fromArray(k.map(String), !0)),
      (this._sources = r.fromArray(S, !0)),
      (this._absoluteSources = this._sources.toArray().map(function (G) {
        return e.computeSourceURL(F, G, D);
      })),
      (this.sourceRoot = F),
      (this.sourcesContent = _),
      (this._mappings = M),
      (this._sourceMapURL = D),
      (this.file = V);
  }
  (c.prototype = Object.create(h.prototype)),
    (c.prototype.consumer = h),
    (c.prototype._findSourceIndex = function (E) {
      var D = E;
      if (
        (this.sourceRoot != null && (D = e.relative(this.sourceRoot, D)),
        this._sources.has(D))
      )
        return this._sources.indexOf(D);
      var w;
      for (w = 0; w < this._absoluteSources.length; ++w)
        if (this._absoluteSources[w] == E) return w;
      return -1;
    }),
    (c.fromSourceMap = function (D, w) {
      var b = Object.create(c.prototype),
        S = (b._names = r.fromArray(D._names.toArray(), !0)),
        k = (b._sources = r.fromArray(D._sources.toArray(), !0));
      (b.sourceRoot = D._sourceRoot),
        (b.sourcesContent = D._generateSourcesContent(
          b._sources.toArray(),
          b.sourceRoot,
        )),
        (b.file = D._file),
        (b._sourceMapURL = w),
        (b._absoluteSources = b._sources.toArray().map(function (o) {
          return e.computeSourceURL(b.sourceRoot, o, w);
        }));
      for (
        var F = D._mappings.toArray().slice(),
          _ = (b.__generatedMappings = []),
          M = (b.__originalMappings = []),
          V = 0,
          G = F.length;
        V < G;
        V++
      ) {
        var P = F[V],
          A = new g();
        (A.generatedLine = P.generatedLine),
          (A.generatedColumn = P.generatedColumn),
          P.source &&
            ((A.source = k.indexOf(P.source)),
            (A.originalLine = P.originalLine),
            (A.originalColumn = P.originalColumn),
            P.name && (A.name = S.indexOf(P.name)),
            M.push(A)),
          _.push(A);
      }
      return u(b.__originalMappings, e.compareByOriginalPositions), b;
    }),
    (c.prototype._version = 3),
    Object.defineProperty(c.prototype, 'sources', {
      get: function () {
        return this._absoluteSources.slice();
      },
    });
  function g() {
    (this.generatedLine = 0),
      (this.generatedColumn = 0),
      (this.source = null),
      (this.originalLine = null),
      (this.originalColumn = null),
      (this.name = null);
  }
  (c.prototype._parseMappings = function (D, w) {
    for (
      var b = 1,
        S = 0,
        k = 0,
        F = 0,
        _ = 0,
        M = 0,
        V = D.length,
        G = 0,
        P = {},
        A = {},
        o = [],
        B = [],
        N,
        H,
        z,
        te,
        J;
      G < V;

    )
      if (D.charAt(G) === ';') b++, G++, (S = 0);
      else if (D.charAt(G) === ',') G++;
      else {
        for (
          N = new g(), N.generatedLine = b, te = G;
          te < V && !this._charIsMappingSeparator(D, te);
          te++
        );
        if (((H = D.slice(G, te)), (z = P[H]), z)) G += H.length;
        else {
          for (z = []; G < te; )
            s.decode(D, G, A), (J = A.value), (G = A.rest), z.push(J);
          if (z.length === 2)
            throw new Error('Found a source, but no line and column');
          if (z.length === 3)
            throw new Error('Found a source and line, but no column');
          P[H] = z;
        }
        (N.generatedColumn = S + z[0]),
          (S = N.generatedColumn),
          z.length > 1 &&
            ((N.source = _ + z[1]),
            (_ += z[1]),
            (N.originalLine = k + z[2]),
            (k = N.originalLine),
            (N.originalLine += 1),
            (N.originalColumn = F + z[3]),
            (F = N.originalColumn),
            z.length > 4 && ((N.name = M + z[4]), (M += z[4]))),
          B.push(N),
          typeof N.originalLine == 'number' && o.push(N);
      }
    u(B, e.compareByGeneratedPositionsDeflated),
      (this.__generatedMappings = B),
      u(o, e.compareByOriginalPositions),
      (this.__originalMappings = o);
  }),
    (c.prototype._findMapping = function (D, w, b, S, k, F) {
      if (D[b] <= 0)
        throw new TypeError(
          'Line must be greater than or equal to 1, got ' + D[b],
        );
      if (D[S] < 0)
        throw new TypeError(
          'Column must be greater than or equal to 0, got ' + D[S],
        );
      return i.search(D, w, k, F);
    }),
    (c.prototype.computeColumnSpans = function () {
      for (var D = 0; D < this._generatedMappings.length; ++D) {
        var w = this._generatedMappings[D];
        if (D + 1 < this._generatedMappings.length) {
          var b = this._generatedMappings[D + 1];
          if (w.generatedLine === b.generatedLine) {
            w.lastGeneratedColumn = b.generatedColumn - 1;
            continue;
          }
        }
        w.lastGeneratedColumn = 1 / 0;
      }
    }),
    (c.prototype.originalPositionFor = function (D) {
      var w = {
          generatedLine: e.getArg(D, 'line'),
          generatedColumn: e.getArg(D, 'column'),
        },
        b = this._findMapping(
          w,
          this._generatedMappings,
          'generatedLine',
          'generatedColumn',
          e.compareByGeneratedPositionsDeflated,
          e.getArg(D, 'bias', h.GREATEST_LOWER_BOUND),
        );
      if (b >= 0) {
        var S = this._generatedMappings[b];
        if (S.generatedLine === w.generatedLine) {
          var k = e.getArg(S, 'source', null);
          k !== null &&
            ((k = this._sources.at(k)),
            (k = e.computeSourceURL(this.sourceRoot, k, this._sourceMapURL)));
          var F = e.getArg(S, 'name', null);
          return (
            F !== null && (F = this._names.at(F)),
            {
              source: k,
              line: e.getArg(S, 'originalLine', null),
              column: e.getArg(S, 'originalColumn', null),
              name: F,
            }
          );
        }
      }
      return { source: null, line: null, column: null, name: null };
    }),
    (c.prototype.hasContentsOfAllSources = function () {
      return this.sourcesContent
        ? this.sourcesContent.length >= this._sources.size() &&
            !this.sourcesContent.some(function (D) {
              return D == null;
            })
        : !1;
    }),
    (c.prototype.sourceContentFor = function (D, w) {
      if (!this.sourcesContent) return null;
      var b = this._findSourceIndex(D);
      if (b >= 0) return this.sourcesContent[b];
      var S = D;
      this.sourceRoot != null && (S = e.relative(this.sourceRoot, S));
      var k;
      if (this.sourceRoot != null && (k = e.urlParse(this.sourceRoot))) {
        var F = S.replace(/^file:\/\//, '');
        if (k.scheme == 'file' && this._sources.has(F))
          return this.sourcesContent[this._sources.indexOf(F)];
        if ((!k.path || k.path == '/') && this._sources.has('/' + S))
          return this.sourcesContent[this._sources.indexOf('/' + S)];
      }
      if (w) return null;
      throw new Error('"' + S + '" is not in the SourceMap.');
    }),
    (c.prototype.generatedPositionFor = function (D) {
      var w = e.getArg(D, 'source');
      if (((w = this._findSourceIndex(w)), w < 0))
        return { line: null, column: null, lastColumn: null };
      var b = {
          source: w,
          originalLine: e.getArg(D, 'line'),
          originalColumn: e.getArg(D, 'column'),
        },
        S = this._findMapping(
          b,
          this._originalMappings,
          'originalLine',
          'originalColumn',
          e.compareByOriginalPositions,
          e.getArg(D, 'bias', h.GREATEST_LOWER_BOUND),
        );
      if (S >= 0) {
        var k = this._originalMappings[S];
        if (k.source === b.source)
          return {
            line: e.getArg(k, 'generatedLine', null),
            column: e.getArg(k, 'generatedColumn', null),
            lastColumn: e.getArg(k, 'lastGeneratedColumn', null),
          };
      }
      return { line: null, column: null, lastColumn: null };
    }),
    (Qt.BasicSourceMapConsumer = c);
  function x(E, D) {
    var w = E;
    typeof E == 'string' && (w = e.parseSourceMapInput(E));
    var b = e.getArg(w, 'version'),
      S = e.getArg(w, 'sections');
    if (b != this._version) throw new Error('Unsupported version: ' + b);
    (this._sources = new r()), (this._names = new r());
    var k = { line: -1, column: 0 };
    this._sections = S.map(function (F) {
      if (F.url)
        throw new Error('Support for url field in sections not implemented.');
      var _ = e.getArg(F, 'offset'),
        M = e.getArg(_, 'line'),
        V = e.getArg(_, 'column');
      if (M < k.line || (M === k.line && V < k.column))
        throw new Error('Section offsets must be ordered and non-overlapping.');
      return (
        (k = _),
        {
          generatedOffset: { generatedLine: M + 1, generatedColumn: V + 1 },
          consumer: new h(e.getArg(F, 'map'), D),
        }
      );
    });
  }
  return (
    (x.prototype = Object.create(h.prototype)),
    (x.prototype.constructor = h),
    (x.prototype._version = 3),
    Object.defineProperty(x.prototype, 'sources', {
      get: function () {
        for (var E = [], D = 0; D < this._sections.length; D++)
          for (var w = 0; w < this._sections[D].consumer.sources.length; w++)
            E.push(this._sections[D].consumer.sources[w]);
        return E;
      },
    }),
    (x.prototype.originalPositionFor = function (D) {
      var w = {
          generatedLine: e.getArg(D, 'line'),
          generatedColumn: e.getArg(D, 'column'),
        },
        b = i.search(w, this._sections, function (k, F) {
          var _ = k.generatedLine - F.generatedOffset.generatedLine;
          return _ || k.generatedColumn - F.generatedOffset.generatedColumn;
        }),
        S = this._sections[b];
      return S
        ? S.consumer.originalPositionFor({
            line: w.generatedLine - (S.generatedOffset.generatedLine - 1),
            column:
              w.generatedColumn -
              (S.generatedOffset.generatedLine === w.generatedLine
                ? S.generatedOffset.generatedColumn - 1
                : 0),
            bias: D.bias,
          })
        : { source: null, line: null, column: null, name: null };
    }),
    (x.prototype.hasContentsOfAllSources = function () {
      return this._sections.every(function (D) {
        return D.consumer.hasContentsOfAllSources();
      });
    }),
    (x.prototype.sourceContentFor = function (D, w) {
      for (var b = 0; b < this._sections.length; b++) {
        var S = this._sections[b],
          k = S.consumer.sourceContentFor(D, !0);
        if (k) return k;
      }
      if (w) return null;
      throw new Error('"' + D + '" is not in the SourceMap.');
    }),
    (x.prototype.generatedPositionFor = function (D) {
      for (var w = 0; w < this._sections.length; w++) {
        var b = this._sections[w];
        if (b.consumer._findSourceIndex(e.getArg(D, 'source')) !== -1) {
          var S = b.consumer.generatedPositionFor(D);
          if (S) {
            var k = {
              line: S.line + (b.generatedOffset.generatedLine - 1),
              column:
                S.column +
                (b.generatedOffset.generatedLine === S.line
                  ? b.generatedOffset.generatedColumn - 1
                  : 0),
            };
            return k;
          }
        }
      }
      return { line: null, column: null };
    }),
    (x.prototype._parseMappings = function (D, w) {
      (this.__generatedMappings = []), (this.__originalMappings = []);
      for (var b = 0; b < this._sections.length; b++)
        for (
          var S = this._sections[b], k = S.consumer._generatedMappings, F = 0;
          F < k.length;
          F++
        ) {
          var _ = k[F],
            M = S.consumer._sources.at(_.source);
          (M = e.computeSourceURL(
            S.consumer.sourceRoot,
            M,
            this._sourceMapURL,
          )),
            this._sources.add(M),
            (M = this._sources.indexOf(M));
          var V = null;
          _.name &&
            ((V = S.consumer._names.at(_.name)),
            this._names.add(V),
            (V = this._names.indexOf(V)));
          var G = {
            source: M,
            generatedLine:
              _.generatedLine + (S.generatedOffset.generatedLine - 1),
            generatedColumn:
              _.generatedColumn +
              (S.generatedOffset.generatedLine === _.generatedLine
                ? S.generatedOffset.generatedColumn - 1
                : 0),
            originalLine: _.originalLine,
            originalColumn: _.originalColumn,
            name: V,
          };
          this.__generatedMappings.push(G),
            typeof G.originalLine == 'number' &&
              this.__originalMappings.push(G);
        }
      u(this.__generatedMappings, e.compareByGeneratedPositionsDeflated),
        u(this.__originalMappings, e.compareByOriginalPositions);
    }),
    (Qt.IndexedSourceMapConsumer = x),
    Qt
  );
}
var Yi = {},
  hn;
function Pa() {
  if (hn) return Yi;
  hn = 1;
  var e = Un().SourceMapGenerator,
    i = ri(),
    r = /(\r?\n)/,
    s = 10,
    u = '$$$isSourceNode$$$';
  function h(c, g, x, E, D) {
    (this.children = []),
      (this.sourceContents = {}),
      (this.line = c ?? null),
      (this.column = g ?? null),
      (this.source = x ?? null),
      (this.name = D ?? null),
      (this[u] = !0),
      E != null && this.add(E);
  }
  return (
    (h.fromStringWithSourceMap = function (g, x, E) {
      var D = new h(),
        w = g.split(r),
        b = 0,
        S = function () {
          var V = P(),
            G = P() || '';
          return V + G;
          function P() {
            return b < w.length ? w[b++] : void 0;
          }
        },
        k = 1,
        F = 0,
        _ = null;
      return (
        x.eachMapping(function (V) {
          if (_ !== null)
            if (k < V.generatedLine) M(_, S()), k++, (F = 0);
            else {
              var G = w[b] || '',
                P = G.substr(0, V.generatedColumn - F);
              (w[b] = G.substr(V.generatedColumn - F)),
                (F = V.generatedColumn),
                M(_, P),
                (_ = V);
              return;
            }
          for (; k < V.generatedLine; ) D.add(S()), k++;
          if (F < V.generatedColumn) {
            var G = w[b] || '';
            D.add(G.substr(0, V.generatedColumn)),
              (w[b] = G.substr(V.generatedColumn)),
              (F = V.generatedColumn);
          }
          _ = V;
        }, this),
        b < w.length && (_ && M(_, S()), D.add(w.splice(b).join(''))),
        x.sources.forEach(function (V) {
          var G = x.sourceContentFor(V);
          G != null &&
            (E != null && (V = i.join(E, V)), D.setSourceContent(V, G));
        }),
        D
      );
      function M(V, G) {
        if (V === null || V.source === void 0) D.add(G);
        else {
          var P = E ? i.join(E, V.source) : V.source;
          D.add(new h(V.originalLine, V.originalColumn, P, G, V.name));
        }
      }
    }),
    (h.prototype.add = function (g) {
      if (Array.isArray(g))
        g.forEach(function (x) {
          this.add(x);
        }, this);
      else if (g[u] || typeof g == 'string') g && this.children.push(g);
      else
        throw new TypeError(
          'Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' +
            g,
        );
      return this;
    }),
    (h.prototype.prepend = function (g) {
      if (Array.isArray(g))
        for (var x = g.length - 1; x >= 0; x--) this.prepend(g[x]);
      else if (g[u] || typeof g == 'string') this.children.unshift(g);
      else
        throw new TypeError(
          'Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' +
            g,
        );
      return this;
    }),
    (h.prototype.walk = function (g) {
      for (var x, E = 0, D = this.children.length; E < D; E++)
        (x = this.children[E]),
          x[u]
            ? x.walk(g)
            : x !== '' &&
              g(x, {
                source: this.source,
                line: this.line,
                column: this.column,
                name: this.name,
              });
    }),
    (h.prototype.join = function (g) {
      var x,
        E,
        D = this.children.length;
      if (D > 0) {
        for (x = [], E = 0; E < D - 1; E++) x.push(this.children[E]), x.push(g);
        x.push(this.children[E]), (this.children = x);
      }
      return this;
    }),
    (h.prototype.replaceRight = function (g, x) {
      var E = this.children[this.children.length - 1];
      return (
        E[u]
          ? E.replaceRight(g, x)
          : typeof E == 'string'
            ? (this.children[this.children.length - 1] = E.replace(g, x))
            : this.children.push(''.replace(g, x)),
        this
      );
    }),
    (h.prototype.setSourceContent = function (g, x) {
      this.sourceContents[i.toSetString(g)] = x;
    }),
    (h.prototype.walkSourceContents = function (g) {
      for (var x = 0, E = this.children.length; x < E; x++)
        this.children[x][u] && this.children[x].walkSourceContents(g);
      for (
        var D = Object.keys(this.sourceContents), x = 0, E = D.length;
        x < E;
        x++
      )
        g(i.fromSetString(D[x]), this.sourceContents[D[x]]);
    }),
    (h.prototype.toString = function () {
      var g = '';
      return (
        this.walk(function (x) {
          g += x;
        }),
        g
      );
    }),
    (h.prototype.toStringWithSourceMap = function (g) {
      var x = { code: '', line: 1, column: 0 },
        E = new e(g),
        D = !1,
        w = null,
        b = null,
        S = null,
        k = null;
      return (
        this.walk(function (F, _) {
          (x.code += F),
            _.source !== null && _.line !== null && _.column !== null
              ? ((w !== _.source ||
                  b !== _.line ||
                  S !== _.column ||
                  k !== _.name) &&
                  E.addMapping({
                    source: _.source,
                    original: { line: _.line, column: _.column },
                    generated: { line: x.line, column: x.column },
                    name: _.name,
                  }),
                (w = _.source),
                (b = _.line),
                (S = _.column),
                (k = _.name),
                (D = !0))
              : D &&
                (E.addMapping({
                  generated: { line: x.line, column: x.column },
                }),
                (w = null),
                (D = !1));
          for (var M = 0, V = F.length; M < V; M++)
            F.charCodeAt(M) === s
              ? (x.line++,
                (x.column = 0),
                M + 1 === V
                  ? ((w = null), (D = !1))
                  : D &&
                    E.addMapping({
                      source: _.source,
                      original: { line: _.line, column: _.column },
                      generated: { line: x.line, column: x.column },
                      name: _.name,
                    }))
              : x.column++;
        }),
        this.walkSourceContents(function (F, _) {
          E.setSourceContent(F, _);
        }),
        { code: x.code, map: E }
      );
    }),
    (Yi.SourceNode = h),
    Yi
  );
}
var cn;
function Ta() {
  return (
    cn ||
      ((cn = 1),
      (Ht.SourceMapGenerator = Un().SourceMapGenerator),
      (Ht.SourceMapConsumer = Ia().SourceMapConsumer),
      (Ht.SourceNode = Pa().SourceNode)),
    Ht
  );
}
const Na = 'escodegen',
  La = 'ECMAScript code generator',
  Oa = 'http://github.com/estools/escodegen',
  Ra = 'escodegen.js',
  Va = { esgenerate: './bin/esgenerate.js', escodegen: './bin/escodegen.js' },
  Ma = ['LICENSE.BSD', 'README.md', 'bin', 'escodegen.js', 'package.json'],
  ja = '2.1.0',
  qa = { node: '>=6.0' },
  Ua = [
    {
      name: 'Yusuke Suzuki',
      email: 'utatane.tea@gmail.com',
      web: 'http://github.com/Constellation',
    },
  ],
  Ga = { type: 'git', url: 'http://github.com/estools/escodegen.git' },
  Wa = { estraverse: '^5.2.0', esutils: '^2.0.2', esprima: '^4.0.1' },
  za = { 'source-map': '~0.6.1' },
  Ha = {
    acorn: '^8.0.4',
    bluebird: '^3.4.7',
    'bower-registry-client': '^1.0.0',
    chai: '^4.2.0',
    'chai-exclude': '^2.0.2',
    'commonjs-everywhere': '^0.9.7',
    gulp: '^4.0.2',
    'gulp-eslint': '^6.0.0',
    'gulp-mocha': '^7.0.2',
    minimist: '^1.2.5',
    optionator: '^0.9.1',
    semver: '^7.3.4',
  },
  Qa = 'BSD-2-Clause',
  Ka = {
    test: 'gulp travis',
    'unit-test': 'gulp test',
    lint: 'gulp lint',
    release: 'node tools/release.js',
    'build-min':
      './node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js',
    build:
      './node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js',
  },
  Xa = {
    name: Na,
    description: La,
    homepage: Oa,
    main: Ra,
    bin: Va,
    files: Ma,
    version: ja,
    engines: qa,
    maintainers: Ua,
    repository: Ga,
    dependencies: Wa,
    optionalDependencies: za,
    devDependencies: Ha,
    license: Qa,
    scripts: Ka,
  };
(function (e) {
  (function () {
    var i,
      r,
      s,
      u,
      h,
      c,
      g,
      x,
      E,
      D,
      w,
      b,
      S,
      k,
      F,
      _,
      M,
      V,
      G,
      P,
      A,
      o,
      B,
      N,
      H,
      z;
    (h = Ln), (c = yi), (i = h.Syntax);
    function te(a) {
      return Se.Expression.hasOwnProperty(a.type);
    }
    function J(a) {
      return Se.Statement.hasOwnProperty(a.type);
    }
    (r = {
      Sequence: 0,
      Yield: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      Coalesce: 3,
      LogicalOR: 4,
      LogicalAND: 5,
      BitwiseOR: 6,
      BitwiseXOR: 7,
      BitwiseAND: 8,
      Equality: 9,
      Relational: 10,
      BitwiseSHIFT: 11,
      Additive: 12,
      Multiplicative: 13,
      Exponentiation: 14,
      Await: 15,
      Unary: 15,
      Postfix: 16,
      OptionalChaining: 17,
      Call: 18,
      New: 19,
      TaggedTemplate: 20,
      Member: 21,
      Primary: 22,
    }),
      (s = {
        '??': r.Coalesce,
        '||': r.LogicalOR,
        '&&': r.LogicalAND,
        '|': r.BitwiseOR,
        '^': r.BitwiseXOR,
        '&': r.BitwiseAND,
        '==': r.Equality,
        '!=': r.Equality,
        '===': r.Equality,
        '!==': r.Equality,
        is: r.Equality,
        isnt: r.Equality,
        '<': r.Relational,
        '>': r.Relational,
        '<=': r.Relational,
        '>=': r.Relational,
        in: r.Relational,
        instanceof: r.Relational,
        '<<': r.BitwiseSHIFT,
        '>>': r.BitwiseSHIFT,
        '>>>': r.BitwiseSHIFT,
        '+': r.Additive,
        '-': r.Additive,
        '*': r.Multiplicative,
        '%': r.Multiplicative,
        '/': r.Multiplicative,
        '**': r.Exponentiation,
      });
    var K = 1,
      le = 2,
      Ee = 4,
      ye = 8,
      ve = 16,
      oe = 32,
      _e = 64,
      Pe = le | Ee,
      lt = K | le,
      W = K | le | Ee,
      Me = K,
      ht = Ee,
      je = K | Ee,
      ge = K,
      Ge = K | oe,
      Ft = 0,
      Ct = K | ve,
      ct = K | ye;
    function _t() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: !1,
        format: {
          indent: { style: '    ', base: 0, adjustMultilineComment: !1 },
          newline: `
`,
          space: ' ',
          json: !1,
          renumber: !1,
          hexadecimal: !1,
          quotes: 'single',
          escapeless: !1,
          compact: !1,
          parentheses: !0,
          semicolons: !0,
          safeConcatenation: !1,
          preserveBlankLines: !1,
        },
        moz: {
          comprehensionExpressionStartsWithAssignment: !1,
          starlessGenerator: !1,
        },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: !1,
        directive: !1,
        raw: !0,
        verbatim: null,
        sourceCode: null,
      };
    }
    function Ze(a, d) {
      var f = '';
      for (d |= 0; d > 0; d >>>= 1, a += a) d & 1 && (f += a);
      return f;
    }
    function oi(a) {
      return /[\r\n]/g.test(a);
    }
    function Be(a) {
      var d = a.length;
      return d && c.code.isLineTerminator(a.charCodeAt(d - 1));
    }
    function wt(a, d) {
      var f;
      for (f in d) d.hasOwnProperty(f) && (a[f] = d[f]);
      return a;
    }
    function vt(a, d) {
      var f, m;
      function v(L) {
        return (
          typeof L == 'object' && L instanceof Object && !(L instanceof RegExp)
        );
      }
      for (f in d)
        d.hasOwnProperty(f) &&
          ((m = d[f]),
          v(m) ? (v(a[f]) ? vt(a[f], m) : (a[f] = vt({}, m))) : (a[f] = m));
      return a;
    }
    function At(a) {
      var d, f, m, v, L;
      if (a !== a) throw new Error('Numeric literal whose value is NaN');
      if (a < 0 || (a === 0 && 1 / a < 0))
        throw new Error('Numeric literal whose value is negative');
      if (a === 1 / 0) return E ? 'null' : D ? '1e400' : '1e+400';
      if (((d = '' + a), !D || d.length < 3)) return d;
      for (
        f = d.indexOf('.'),
          !E &&
            d.charCodeAt(0) === 48 &&
            f === 1 &&
            ((f = 0), (d = d.slice(1))),
          m = d,
          d = d.replace('e+', 'e'),
          v = 0,
          (L = m.indexOf('e')) > 0 &&
            ((v = +m.slice(L + 1)), (m = m.slice(0, L))),
          f >= 0 &&
            ((v -= m.length - f - 1),
            (m = +(m.slice(0, f) + m.slice(f + 1)) + '')),
          L = 0;
        m.charCodeAt(m.length + L - 1) === 48;

      )
        --L;
      return (
        L !== 0 && ((v -= L), (m = m.slice(0, L))),
        v !== 0 && (m += 'e' + v),
        (m.length < d.length ||
          (w &&
            a > 1e12 &&
            Math.floor(a) === a &&
            (m = '0x' + a.toString(16)).length < d.length)) &&
          +m === a &&
          (d = m),
        d
      );
    }
    function Bt(a, d) {
      return (a & -2) === 8232
        ? (d ? 'u' : '\\u') + (a === 8232 ? '2028' : '2029')
        : a === 10 || a === 13
          ? (d ? '' : '\\') + (a === 10 ? 'n' : 'r')
          : String.fromCharCode(a);
    }
    function qt(a) {
      var d, f, m, v, L, O, R, Q;
      if (((f = a.toString()), a.source)) {
        if (((d = f.match(/\/([^/]*)$/)), !d)) return f;
        for (
          m = d[1], f = '', R = !1, Q = !1, v = 0, L = a.source.length;
          v < L;
          ++v
        )
          (O = a.source.charCodeAt(v)),
            Q
              ? ((f += Bt(O, Q)), (Q = !1))
              : (R
                  ? O === 93 && (R = !1)
                  : O === 47
                    ? (f += '\\')
                    : O === 91 && (R = !0),
                (f += Bt(O, Q)),
                (Q = O === 92));
        return '/' + f + '/' + m;
      }
      return f;
    }
    function kt(a, d) {
      var f;
      return a === 8
        ? '\\b'
        : a === 12
          ? '\\f'
          : a === 9
            ? '\\t'
            : ((f = a.toString(16).toUpperCase()),
              E || a > 255
                ? '\\u' + '0000'.slice(f.length) + f
                : a === 0 && !c.code.isDecimalDigit(d)
                  ? '\\0'
                  : a === 11
                    ? '\\x0B'
                    : '\\x' + '00'.slice(f.length) + f);
    }
    function Ut(a) {
      if (a === 92) return '\\\\';
      if (a === 10) return '\\n';
      if (a === 13) return '\\r';
      if (a === 8232) return '\\u2028';
      if (a === 8233) return '\\u2029';
      throw new Error('Incorrectly classified character');
    }
    function $e(a) {
      var d, f, m, v;
      for (v = b === 'double' ? '"' : "'", d = 0, f = a.length; d < f; ++d)
        if (((m = a.charCodeAt(d)), m === 39)) {
          v = '"';
          break;
        } else if (m === 34) {
          v = "'";
          break;
        } else m === 92 && ++d;
      return v + a + v;
    }
    function li(a) {
      var d = '',
        f,
        m,
        v,
        L = 0,
        O = 0,
        R,
        Q;
      for (f = 0, m = a.length; f < m; ++f) {
        if (((v = a.charCodeAt(f)), v === 39)) ++L;
        else if (v === 34) ++O;
        else if (v === 47 && E) d += '\\';
        else if (c.code.isLineTerminator(v) || v === 92) {
          d += Ut(v);
          continue;
        } else if (
          !c.code.isIdentifierPartES5(v) &&
          ((E && v < 32) || (!E && !S && (v < 32 || v > 126)))
        ) {
          d += kt(v, a.charCodeAt(f + 1));
          continue;
        }
        d += String.fromCharCode(v);
      }
      if (
        ((R = !(b === 'double' || (b === 'auto' && O < L))),
        (Q = R ? "'" : '"'),
        !(R ? L : O))
      )
        return Q + d + Q;
      for (a = d, d = Q, f = 0, m = a.length; f < m; ++f)
        (v = a.charCodeAt(f)),
          ((v === 39 && R) || (v === 34 && !R)) && (d += '\\'),
          (d += String.fromCharCode(v));
      return d + Q;
    }
    function Gt(a) {
      var d,
        f,
        m,
        v = '';
      for (d = 0, f = a.length; d < f; ++d)
        (m = a[d]), (v += Array.isArray(m) ? Gt(m) : m);
      return v;
    }
    function pe(a, d) {
      if (!o) return Array.isArray(a) ? Gt(a) : a;
      if (d == null) {
        if (a instanceof u) return a;
        d = {};
      }
      return d.loc == null
        ? new u(null, null, o, a, d.name || null)
        : new u(
            d.loc.start.line,
            d.loc.start.column,
            o === !0 ? d.loc.source || null : o,
            a,
            d.name || null,
          );
    }
    function se() {
      return F || ' ';
    }
    function Y(a, d) {
      var f, m, v, L;
      return (
        (f = pe(a).toString()),
        f.length === 0
          ? [d]
          : ((m = pe(d).toString()),
            m.length === 0
              ? [a]
              : ((v = f.charCodeAt(f.length - 1)),
                (L = m.charCodeAt(0)),
                ((v === 43 || v === 45) && v === L) ||
                (c.code.isIdentifierPartES5(v) &&
                  c.code.isIdentifierPartES5(L)) ||
                (v === 47 && L === 105)
                  ? [a, se(), d]
                  : c.code.isWhiteSpace(v) ||
                      c.code.isLineTerminator(v) ||
                      c.code.isWhiteSpace(L) ||
                      c.code.isLineTerminator(L)
                    ? [a, d]
                    : [a, F, d]))
      );
    }
    function de(a) {
      return [g, a];
    }
    function be(a) {
      var d;
      (d = g), (g += x), a(g), (g = d);
    }
    function It(a) {
      var d;
      for (
        d = a.length - 1;
        d >= 0 && !c.code.isLineTerminator(a.charCodeAt(d));
        --d
      );
      return a.length - 1 - d;
    }
    function $(a, d) {
      var f, m, v, L, O, R, Q, ue;
      for (
        f = a.split(/\r\n|[\r\n]/), R = Number.MAX_VALUE, m = 1, v = f.length;
        m < v;
        ++m
      ) {
        for (
          L = f[m], O = 0;
          O < L.length && c.code.isWhiteSpace(L.charCodeAt(O));

        )
          ++O;
        R > O && (R = O);
      }
      for (
        typeof d < 'u'
          ? ((Q = g), f[1][R] === '*' && (d += ' '), (g = d))
          : (R & 1 && --R, (Q = g)),
          m = 1,
          v = f.length;
        m < v;
        ++m
      )
        (ue = pe(de(f[m].slice(R)))), (f[m] = o ? ue.join('') : ue);
      return (
        (g = Q),
        f.join(`
`)
      );
    }
    function qe(a, d) {
      if (a.type === 'Line') {
        if (Be(a.value)) return '//' + a.value;
        var f = '//' + a.value;
        return (
          N ||
            (f += `
`),
          f
        );
      }
      return P.format.indent.adjustMultilineComment && /[\n\r]/.test(a.value)
        ? $('/*' + a.value + '*/', d)
        : '/*' + a.value + '*/';
    }
    function hi(a, d) {
      var f, m, v, L, O, R, Q, ue, Fe, et, rt, Wt, fi, We;
      if (a.leadingComments && a.leadingComments.length > 0) {
        if (((L = d), N)) {
          for (
            v = a.leadingComments[0],
              d = [],
              ue = v.extendedRange,
              Fe = v.range,
              rt = B.substring(ue[0], Fe[0]),
              We = (rt.match(/\n/g) || []).length,
              We > 0
                ? (d.push(
                    Ze(
                      `
`,
                      We,
                    ),
                  ),
                  d.push(de(qe(v))))
                : (d.push(rt), d.push(qe(v))),
              et = Fe,
              f = 1,
              m = a.leadingComments.length;
            f < m;
            f++
          )
            (v = a.leadingComments[f]),
              (Fe = v.range),
              (Wt = B.substring(et[1], Fe[0])),
              (We = (Wt.match(/\n/g) || []).length),
              d.push(
                Ze(
                  `
`,
                  We,
                ),
              ),
              d.push(de(qe(v))),
              (et = Fe);
          (fi = B.substring(Fe[1], ue[1])),
            (We = (fi.match(/\n/g) || []).length),
            d.push(
              Ze(
                `
`,
                We,
              ),
            );
        } else
          for (
            v = a.leadingComments[0],
              d = [],
              V &&
                a.type === i.Program &&
                a.body.length === 0 &&
                d.push(`
`),
              d.push(qe(v)),
              Be(pe(d).toString()) ||
                d.push(`
`),
              f = 1,
              m = a.leadingComments.length;
            f < m;
            ++f
          )
            (v = a.leadingComments[f]),
              (Q = [qe(v)]),
              Be(pe(Q).toString()) ||
                Q.push(`
`),
              d.push(de(Q));
        d.push(de(L));
      }
      if (a.trailingComments)
        if (N)
          (v = a.trailingComments[0]),
            (ue = v.extendedRange),
            (Fe = v.range),
            (rt = B.substring(ue[0], Fe[0])),
            (We = (rt.match(/\n/g) || []).length),
            We > 0
              ? (d.push(
                  Ze(
                    `
`,
                    We,
                  ),
                ),
                d.push(de(qe(v))))
              : (d.push(rt), d.push(qe(v)));
        else
          for (
            O = !Be(pe(d).toString()),
              R = Ze(' ', It(pe([g, d, x]).toString())),
              f = 0,
              m = a.trailingComments.length;
            f < m;
            ++f
          )
            (v = a.trailingComments[f]),
              O
                ? (f === 0 ? (d = [d, x]) : (d = [d, R]), d.push(qe(v, R)))
                : (d = [d, de(qe(v))]),
              f !== m - 1 &&
                !Be(pe(d).toString()) &&
                (d = [
                  d,
                  `
`,
                ]);
      return d;
    }
    function ft(a, d, f) {
      var m,
        v = 0;
      for (m = a; m < d; m++)
        B[m] ===
          `
` && v++;
      for (m = 1; m < v; m++) f.push(k);
    }
    function De(a, d, f) {
      return d < f ? ['(', a, ')'] : a;
    }
    function Pt(a) {
      var d, f, m;
      for (m = a.split(/\r\n|\n/), d = 1, f = m.length; d < f; d++)
        m[d] = k + g + m[d];
      return m;
    }
    function ci(a, d) {
      var f, m, v;
      return (
        (f = a[P.verbatim]),
        typeof f == 'string'
          ? (m = De(Pt(f), r.Sequence, d))
          : ((m = Pt(f.content)),
            (v = f.precedence != null ? f.precedence : r.Sequence),
            (m = De(m, v, d))),
        pe(m, a)
      );
    }
    function Se() {}
    (Se.prototype.maybeBlock = function (a, d) {
      var f,
        m,
        v = this;
      return (
        (m = !P.comment || !a.leadingComments),
        a.type === i.BlockStatement && m
          ? [F, this.generateStatement(a, d)]
          : a.type === i.EmptyStatement && m
            ? ';'
            : (be(function () {
                f = [k, de(v.generateStatement(a, d))];
              }),
              f)
      );
    }),
      (Se.prototype.maybeBlockSuffix = function (a, d) {
        var f = Be(pe(d).toString());
        return a.type === i.BlockStatement &&
          (!P.comment || !a.leadingComments) &&
          !f
          ? [d, F]
          : f
            ? [d, g]
            : [d, k, g];
      });
    function Te(a) {
      return pe(a.name, a);
    }
    function Ne(a, d) {
      return a.async ? 'async' + (d ? se() : F) : '';
    }
    function Le(a) {
      var d = a.generator && !P.moz.starlessGenerator;
      return d ? '*' + F : '';
    }
    function Ce(a) {
      var d = a.value,
        f = '';
      return (
        d.async && (f += Ne(d, !a.computed)),
        d.generator && (f += Le(d) ? '*' : ''),
        f
      );
    }
    (Se.prototype.generatePattern = function (a, d, f) {
      return a.type === i.Identifier ? Te(a) : this.generateExpression(a, d, f);
    }),
      (Se.prototype.generateFunctionParams = function (a) {
        var d, f, m, v;
        if (
          ((v = !1),
          a.type === i.ArrowFunctionExpression &&
            !a.rest &&
            (!a.defaults || a.defaults.length === 0) &&
            a.params.length === 1 &&
            a.params[0].type === i.Identifier)
        )
          m = [Ne(a, !0), Te(a.params[0])];
        else {
          for (
            m = a.type === i.ArrowFunctionExpression ? [Ne(a, !1)] : [],
              m.push('('),
              a.defaults && (v = !0),
              d = 0,
              f = a.params.length;
            d < f;
            ++d
          )
            v && a.defaults[d]
              ? m.push(
                  this.generateAssignment(
                    a.params[d],
                    a.defaults[d],
                    '=',
                    r.Assignment,
                    W,
                  ),
                )
              : m.push(this.generatePattern(a.params[d], r.Assignment, W)),
              d + 1 < f && m.push(',' + F);
          a.rest &&
            (a.params.length && m.push(',' + F),
            m.push('...'),
            m.push(Te(a.rest))),
            m.push(')');
        }
        return m;
      }),
      (Se.prototype.generateFunctionBody = function (a) {
        var d, f;
        return (
          (d = this.generateFunctionParams(a)),
          a.type === i.ArrowFunctionExpression && (d.push(F), d.push('=>')),
          a.expression
            ? (d.push(F),
              (f = this.generateExpression(a.body, r.Assignment, W)),
              f.toString().charAt(0) === '{' && (f = ['(', f, ')']),
              d.push(f))
            : d.push(this.maybeBlock(a.body, ct)),
          d
        );
      }),
      (Se.prototype.generateIterationForStatement = function (a, d, f) {
        var m = ['for' + (d.await ? se() + 'await' : '') + F + '('],
          v = this;
        return (
          be(function () {
            d.left.type === i.VariableDeclaration
              ? be(function () {
                  m.push(d.left.kind + se()),
                    m.push(v.generateStatement(d.left.declarations[0], Ft));
                })
              : m.push(v.generateExpression(d.left, r.Call, W)),
              (m = Y(m, a)),
              (m = [Y(m, v.generateExpression(d.right, r.Assignment, W)), ')']);
          }),
          m.push(this.maybeBlock(d.body, f)),
          m
        );
      }),
      (Se.prototype.generatePropertyKey = function (a, d) {
        var f = [];
        return (
          d && f.push('['),
          f.push(this.generateExpression(a, r.Assignment, W)),
          d && f.push(']'),
          f
        );
      }),
      (Se.prototype.generateAssignment = function (a, d, f, m, v) {
        return (
          r.Assignment < m && (v |= K),
          De(
            [
              this.generateExpression(a, r.Call, v),
              F + f + F,
              this.generateExpression(d, r.Assignment, v),
            ],
            r.Assignment,
            m,
          )
        );
      }),
      (Se.prototype.semicolon = function (a) {
        return !M && a & oe ? '' : ';';
      }),
      (Se.Statement = {
        BlockStatement: function (a, d) {
          var f,
            m,
            v = ['{', k],
            L = this;
          return (
            be(function () {
              a.body.length === 0 &&
                N &&
                ((f = a.range),
                f[1] - f[0] > 2 &&
                  ((m = B.substring(f[0] + 1, f[1] - 1)),
                  m[0] ===
                    `
` && (v = ['{']),
                  v.push(m)));
              var O, R, Q, ue;
              for (
                ue = ge, d & ye && (ue |= ve), O = 0, R = a.body.length;
                O < R;
                ++O
              )
                N &&
                  (O === 0 &&
                    (a.body[0].leadingComments &&
                      ((f = a.body[0].leadingComments[0].extendedRange),
                      (m = B.substring(f[0], f[1])),
                      m[0] ===
                        `
` && (v = ['{'])),
                    a.body[0].leadingComments ||
                      ft(a.range[0], a.body[0].range[0], v)),
                  O > 0 &&
                    !a.body[O - 1].trailingComments &&
                    !a.body[O].leadingComments &&
                    ft(a.body[O - 1].range[1], a.body[O].range[0], v)),
                  O === R - 1 && (ue |= oe),
                  a.body[O].leadingComments && N
                    ? (Q = L.generateStatement(a.body[O], ue))
                    : (Q = de(L.generateStatement(a.body[O], ue))),
                  v.push(Q),
                  Be(pe(Q).toString()) ||
                    (N && O < R - 1 && a.body[O + 1].leadingComments) ||
                    v.push(k),
                  N &&
                    O === R - 1 &&
                    (a.body[O].trailingComments ||
                      ft(a.body[O].range[1], a.range[1], v));
            }),
            v.push(de('}')),
            v
          );
        },
        BreakStatement: function (a, d) {
          return a.label
            ? 'break ' + a.label.name + this.semicolon(d)
            : 'break' + this.semicolon(d);
        },
        ContinueStatement: function (a, d) {
          return a.label
            ? 'continue ' + a.label.name + this.semicolon(d)
            : 'continue' + this.semicolon(d);
        },
        ClassBody: function (a, d) {
          var f = ['{', k],
            m = this;
          return (
            be(function (v) {
              var L, O;
              for (L = 0, O = a.body.length; L < O; ++L)
                f.push(v),
                  f.push(m.generateExpression(a.body[L], r.Sequence, W)),
                  L + 1 < O && f.push(k);
            }),
            Be(pe(f).toString()) || f.push(k),
            f.push(g),
            f.push('}'),
            f
          );
        },
        ClassDeclaration: function (a, d) {
          var f, m;
          return (
            (f = ['class']),
            a.id && (f = Y(f, this.generateExpression(a.id, r.Sequence, W))),
            a.superClass &&
              ((m = Y(
                'extends',
                this.generateExpression(a.superClass, r.Unary, W),
              )),
              (f = Y(f, m))),
            f.push(F),
            f.push(this.generateStatement(a.body, Ge)),
            f
          );
        },
        DirectiveStatement: function (a, d) {
          return P.raw && a.raw
            ? a.raw + this.semicolon(d)
            : $e(a.directive) + this.semicolon(d);
        },
        DoWhileStatement: function (a, d) {
          var f = Y('do', this.maybeBlock(a.body, ge));
          return (
            (f = this.maybeBlockSuffix(a.body, f)),
            Y(f, [
              'while' + F + '(',
              this.generateExpression(a.test, r.Sequence, W),
              ')' + this.semicolon(d),
            ])
          );
        },
        CatchClause: function (a, d) {
          var f,
            m = this;
          return (
            be(function () {
              var v;
              a.param
                ? ((f = [
                    'catch' + F + '(',
                    m.generateExpression(a.param, r.Sequence, W),
                    ')',
                  ]),
                  a.guard &&
                    ((v = m.generateExpression(a.guard, r.Sequence, W)),
                    f.splice(2, 0, ' if ', v)))
                : (f = ['catch']);
            }),
            f.push(this.maybeBlock(a.body, ge)),
            f
          );
        },
        DebuggerStatement: function (a, d) {
          return 'debugger' + this.semicolon(d);
        },
        EmptyStatement: function (a, d) {
          return ';';
        },
        ExportDefaultDeclaration: function (a, d) {
          var f = ['export'],
            m;
          return (
            (m = d & oe ? Ge : ge),
            (f = Y(f, 'default')),
            J(a.declaration)
              ? (f = Y(f, this.generateStatement(a.declaration, m)))
              : (f = Y(
                  f,
                  this.generateExpression(a.declaration, r.Assignment, W) +
                    this.semicolon(d),
                )),
            f
          );
        },
        ExportNamedDeclaration: function (a, d) {
          var f = ['export'],
            m,
            v = this;
          return (
            (m = d & oe ? Ge : ge),
            a.declaration
              ? Y(f, this.generateStatement(a.declaration, m))
              : (a.specifiers &&
                  (a.specifiers.length === 0
                    ? (f = Y(f, '{' + F + '}'))
                    : a.specifiers[0].type === i.ExportBatchSpecifier
                      ? (f = Y(
                          f,
                          this.generateExpression(
                            a.specifiers[0],
                            r.Sequence,
                            W,
                          ),
                        ))
                      : ((f = Y(f, '{')),
                        be(function (L) {
                          var O, R;
                          for (
                            f.push(k), O = 0, R = a.specifiers.length;
                            O < R;
                            ++O
                          )
                            f.push(L),
                              f.push(
                                v.generateExpression(
                                  a.specifiers[O],
                                  r.Sequence,
                                  W,
                                ),
                              ),
                              O + 1 < R && f.push(',' + k);
                        }),
                        Be(pe(f).toString()) || f.push(k),
                        f.push(g + '}')),
                  a.source
                    ? (f = Y(f, [
                        'from' + F,
                        this.generateExpression(a.source, r.Sequence, W),
                        this.semicolon(d),
                      ]))
                    : f.push(this.semicolon(d))),
                f)
          );
        },
        ExportAllDeclaration: function (a, d) {
          return [
            'export' + F,
            '*' + F,
            'from' + F,
            this.generateExpression(a.source, r.Sequence, W),
            this.semicolon(d),
          ];
        },
        ExpressionStatement: function (a, d) {
          var f, m;
          function v(R) {
            var Q;
            return R.slice(0, 5) !== 'class'
              ? !1
              : ((Q = R.charCodeAt(5)),
                Q === 123 ||
                  c.code.isWhiteSpace(Q) ||
                  c.code.isLineTerminator(Q));
          }
          function L(R) {
            var Q;
            return R.slice(0, 8) !== 'function'
              ? !1
              : ((Q = R.charCodeAt(8)),
                Q === 40 ||
                  c.code.isWhiteSpace(Q) ||
                  Q === 42 ||
                  c.code.isLineTerminator(Q));
          }
          function O(R) {
            var Q, ue, Fe;
            if (
              R.slice(0, 5) !== 'async' ||
              !c.code.isWhiteSpace(R.charCodeAt(5))
            )
              return !1;
            for (
              ue = 6, Fe = R.length;
              ue < Fe && c.code.isWhiteSpace(R.charCodeAt(ue));
              ++ue
            );
            return ue === Fe || R.slice(ue, ue + 8) !== 'function'
              ? !1
              : ((Q = R.charCodeAt(ue + 8)),
                Q === 40 ||
                  c.code.isWhiteSpace(Q) ||
                  Q === 42 ||
                  c.code.isLineTerminator(Q));
          }
          return (
            (f = [this.generateExpression(a.expression, r.Sequence, W)]),
            (m = pe(f).toString()),
            m.charCodeAt(0) === 123 ||
            v(m) ||
            L(m) ||
            O(m) ||
            (G &&
              d & ve &&
              a.expression.type === i.Literal &&
              typeof a.expression.value == 'string')
              ? (f = ['(', f, ')' + this.semicolon(d)])
              : f.push(this.semicolon(d)),
            f
          );
        },
        ImportDeclaration: function (a, d) {
          var f,
            m,
            v = this;
          return a.specifiers.length === 0
            ? [
                'import',
                F,
                this.generateExpression(a.source, r.Sequence, W),
                this.semicolon(d),
              ]
            : ((f = ['import']),
              (m = 0),
              a.specifiers[m].type === i.ImportDefaultSpecifier &&
                ((f = Y(f, [
                  this.generateExpression(a.specifiers[m], r.Sequence, W),
                ])),
                ++m),
              a.specifiers[m] &&
                (m !== 0 && f.push(','),
                a.specifiers[m].type === i.ImportNamespaceSpecifier
                  ? (f = Y(f, [
                      F,
                      this.generateExpression(a.specifiers[m], r.Sequence, W),
                    ]))
                  : (f.push(F + '{'),
                    a.specifiers.length - m === 1
                      ? (f.push(F),
                        f.push(
                          this.generateExpression(
                            a.specifiers[m],
                            r.Sequence,
                            W,
                          ),
                        ),
                        f.push(F + '}' + F))
                      : (be(function (L) {
                          var O, R;
                          for (
                            f.push(k), O = m, R = a.specifiers.length;
                            O < R;
                            ++O
                          )
                            f.push(L),
                              f.push(
                                v.generateExpression(
                                  a.specifiers[O],
                                  r.Sequence,
                                  W,
                                ),
                              ),
                              O + 1 < R && f.push(',' + k);
                        }),
                        Be(pe(f).toString()) || f.push(k),
                        f.push(g + '}' + F)))),
              (f = Y(f, [
                'from' + F,
                this.generateExpression(a.source, r.Sequence, W),
                this.semicolon(d),
              ])),
              f);
        },
        VariableDeclarator: function (a, d) {
          var f = d & K ? W : Pe;
          return a.init
            ? [
                this.generateExpression(a.id, r.Assignment, f),
                F,
                '=',
                F,
                this.generateExpression(a.init, r.Assignment, f),
              ]
            : this.generatePattern(a.id, r.Assignment, f);
        },
        VariableDeclaration: function (a, d) {
          var f,
            m,
            v,
            L,
            O,
            R = this;
          (f = [a.kind]), (O = d & K ? ge : Ft);
          function Q() {
            for (
              L = a.declarations[0],
                P.comment && L.leadingComments
                  ? (f.push(`
`),
                    f.push(de(R.generateStatement(L, O))))
                  : (f.push(se()), f.push(R.generateStatement(L, O))),
                m = 1,
                v = a.declarations.length;
              m < v;
              ++m
            )
              (L = a.declarations[m]),
                P.comment && L.leadingComments
                  ? (f.push(',' + k), f.push(de(R.generateStatement(L, O))))
                  : (f.push(',' + F), f.push(R.generateStatement(L, O)));
          }
          return (
            a.declarations.length > 1 ? be(Q) : Q(),
            f.push(this.semicolon(d)),
            f
          );
        },
        ThrowStatement: function (a, d) {
          return [
            Y('throw', this.generateExpression(a.argument, r.Sequence, W)),
            this.semicolon(d),
          ];
        },
        TryStatement: function (a, d) {
          var f, m, v, L;
          if (
            ((f = ['try', this.maybeBlock(a.block, ge)]),
            (f = this.maybeBlockSuffix(a.block, f)),
            a.handlers)
          )
            for (m = 0, v = a.handlers.length; m < v; ++m)
              (f = Y(f, this.generateStatement(a.handlers[m], ge))),
                (a.finalizer || m + 1 !== v) &&
                  (f = this.maybeBlockSuffix(a.handlers[m].body, f));
          else {
            for (L = a.guardedHandlers || [], m = 0, v = L.length; m < v; ++m)
              (f = Y(f, this.generateStatement(L[m], ge))),
                (a.finalizer || m + 1 !== v) &&
                  (f = this.maybeBlockSuffix(L[m].body, f));
            if (a.handler)
              if (Array.isArray(a.handler))
                for (m = 0, v = a.handler.length; m < v; ++m)
                  (f = Y(f, this.generateStatement(a.handler[m], ge))),
                    (a.finalizer || m + 1 !== v) &&
                      (f = this.maybeBlockSuffix(a.handler[m].body, f));
              else
                (f = Y(f, this.generateStatement(a.handler, ge))),
                  a.finalizer && (f = this.maybeBlockSuffix(a.handler.body, f));
          }
          return (
            a.finalizer &&
              (f = Y(f, ['finally', this.maybeBlock(a.finalizer, ge)])),
            f
          );
        },
        SwitchStatement: function (a, d) {
          var f,
            m,
            v,
            L,
            O,
            R = this;
          if (
            (be(function () {
              f = [
                'switch' + F + '(',
                R.generateExpression(a.discriminant, r.Sequence, W),
                ')' + F + '{' + k,
              ];
            }),
            a.cases)
          )
            for (O = ge, v = 0, L = a.cases.length; v < L; ++v)
              v === L - 1 && (O |= oe),
                (m = de(this.generateStatement(a.cases[v], O))),
                f.push(m),
                Be(pe(m).toString()) || f.push(k);
          return f.push(de('}')), f;
        },
        SwitchCase: function (a, d) {
          var f,
            m,
            v,
            L,
            O,
            R = this;
          return (
            be(function () {
              for (
                a.test
                  ? (f = [
                      Y('case', R.generateExpression(a.test, r.Sequence, W)),
                      ':',
                    ])
                  : (f = ['default:']),
                  v = 0,
                  L = a.consequent.length,
                  L &&
                    a.consequent[0].type === i.BlockStatement &&
                    ((m = R.maybeBlock(a.consequent[0], ge)),
                    f.push(m),
                    (v = 1)),
                  v !== L && !Be(pe(f).toString()) && f.push(k),
                  O = ge;
                v < L;
                ++v
              )
                v === L - 1 && d & oe && (O |= oe),
                  (m = de(R.generateStatement(a.consequent[v], O))),
                  f.push(m),
                  v + 1 !== L && !Be(pe(m).toString()) && f.push(k);
            }),
            f
          );
        },
        IfStatement: function (a, d) {
          var f,
            m,
            v,
            L = this;
          return (
            be(function () {
              f = [
                'if' + F + '(',
                L.generateExpression(a.test, r.Sequence, W),
                ')',
              ];
            }),
            (v = d & oe),
            (m = ge),
            v && (m |= oe),
            a.alternate
              ? (f.push(this.maybeBlock(a.consequent, ge)),
                (f = this.maybeBlockSuffix(a.consequent, f)),
                a.alternate.type === i.IfStatement
                  ? (f = Y(f, [
                      'else ',
                      this.generateStatement(a.alternate, m),
                    ]))
                  : (f = Y(f, Y('else', this.maybeBlock(a.alternate, m)))))
              : f.push(this.maybeBlock(a.consequent, m)),
            f
          );
        },
        ForStatement: function (a, d) {
          var f,
            m = this;
          return (
            be(function () {
              (f = ['for' + F + '(']),
                a.init
                  ? a.init.type === i.VariableDeclaration
                    ? f.push(m.generateStatement(a.init, Ft))
                    : (f.push(m.generateExpression(a.init, r.Sequence, Pe)),
                      f.push(';'))
                  : f.push(';'),
                a.test &&
                  (f.push(F),
                  f.push(m.generateExpression(a.test, r.Sequence, W))),
                f.push(';'),
                a.update &&
                  (f.push(F),
                  f.push(m.generateExpression(a.update, r.Sequence, W))),
                f.push(')');
            }),
            f.push(this.maybeBlock(a.body, d & oe ? Ge : ge)),
            f
          );
        },
        ForInStatement: function (a, d) {
          return this.generateIterationForStatement('in', a, d & oe ? Ge : ge);
        },
        ForOfStatement: function (a, d) {
          return this.generateIterationForStatement('of', a, d & oe ? Ge : ge);
        },
        LabeledStatement: function (a, d) {
          return [
            a.label.name + ':',
            this.maybeBlock(a.body, d & oe ? Ge : ge),
          ];
        },
        Program: function (a, d) {
          var f, m, v, L, O;
          for (
            L = a.body.length,
              f = [
                V && L > 0
                  ? `
`
                  : '',
              ],
              O = Ct,
              v = 0;
            v < L;
            ++v
          )
            !V && v === L - 1 && (O |= oe),
              N &&
                (v === 0 &&
                  (a.body[0].leadingComments ||
                    ft(a.range[0], a.body[v].range[0], f)),
                v > 0 &&
                  !a.body[v - 1].trailingComments &&
                  !a.body[v].leadingComments &&
                  ft(a.body[v - 1].range[1], a.body[v].range[0], f)),
              (m = de(this.generateStatement(a.body[v], O))),
              f.push(m),
              v + 1 < L &&
                !Be(pe(m).toString()) &&
                ((N && a.body[v + 1].leadingComments) || f.push(k)),
              N &&
                v === L - 1 &&
                (a.body[v].trailingComments ||
                  ft(a.body[v].range[1], a.range[1], f));
          return f;
        },
        FunctionDeclaration: function (a, d) {
          return [
            Ne(a, !0),
            'function',
            Le(a) || se(),
            a.id ? Te(a.id) : '',
            this.generateFunctionBody(a),
          ];
        },
        ReturnStatement: function (a, d) {
          return a.argument
            ? [
                Y('return', this.generateExpression(a.argument, r.Sequence, W)),
                this.semicolon(d),
              ]
            : ['return' + this.semicolon(d)];
        },
        WhileStatement: function (a, d) {
          var f,
            m = this;
          return (
            be(function () {
              f = [
                'while' + F + '(',
                m.generateExpression(a.test, r.Sequence, W),
                ')',
              ];
            }),
            f.push(this.maybeBlock(a.body, d & oe ? Ge : ge)),
            f
          );
        },
        WithStatement: function (a, d) {
          var f,
            m = this;
          return (
            be(function () {
              f = [
                'with' + F + '(',
                m.generateExpression(a.object, r.Sequence, W),
                ')',
              ];
            }),
            f.push(this.maybeBlock(a.body, d & oe ? Ge : ge)),
            f
          );
        },
      }),
      wt(Se.prototype, Se.Statement),
      (Se.Expression = {
        SequenceExpression: function (a, d, f) {
          var m, v, L;
          for (
            r.Sequence < d && (f |= K), m = [], v = 0, L = a.expressions.length;
            v < L;
            ++v
          )
            m.push(this.generateExpression(a.expressions[v], r.Assignment, f)),
              v + 1 < L && m.push(',' + F);
          return De(m, r.Sequence, d);
        },
        AssignmentExpression: function (a, d, f) {
          return this.generateAssignment(a.left, a.right, a.operator, d, f);
        },
        ArrowFunctionExpression: function (a, d, f) {
          return De(this.generateFunctionBody(a), r.ArrowFunction, d);
        },
        ConditionalExpression: function (a, d, f) {
          return (
            r.Conditional < d && (f |= K),
            De(
              [
                this.generateExpression(a.test, r.Coalesce, f),
                F + '?' + F,
                this.generateExpression(a.consequent, r.Assignment, f),
                F + ':' + F,
                this.generateExpression(a.alternate, r.Assignment, f),
              ],
              r.Conditional,
              d,
            )
          );
        },
        LogicalExpression: function (a, d, f) {
          return (
            a.operator === '??' && (f |= _e), this.BinaryExpression(a, d, f)
          );
        },
        BinaryExpression: function (a, d, f) {
          var m, v, L, O, R, Q;
          return (
            (O = s[a.operator]),
            (v = a.operator === '**' ? r.Postfix : O),
            (L = a.operator === '**' ? O : O + 1),
            O < d && (f |= K),
            (R = this.generateExpression(a.left, v, f)),
            (Q = R.toString()),
            Q.charCodeAt(Q.length - 1) === 47 &&
            c.code.isIdentifierPartES5(a.operator.charCodeAt(0))
              ? (m = [R, se(), a.operator])
              : (m = Y(R, a.operator)),
            (R = this.generateExpression(a.right, L, f)),
            (a.operator === '/' && R.toString().charAt(0) === '/') ||
            (a.operator.slice(-1) === '<' && R.toString().slice(0, 3) === '!--')
              ? (m.push(se()), m.push(R))
              : (m = Y(m, R)),
            a.operator === 'in' && !(f & K)
              ? ['(', m, ')']
              : (a.operator === '||' || a.operator === '&&') && f & _e
                ? ['(', m, ')']
                : De(m, O, d)
          );
        },
        CallExpression: function (a, d, f) {
          var m, v, L;
          for (
            m = [this.generateExpression(a.callee, r.Call, lt)],
              a.optional && m.push('?.'),
              m.push('('),
              v = 0,
              L = a.arguments.length;
            v < L;
            ++v
          )
            m.push(this.generateExpression(a.arguments[v], r.Assignment, W)),
              v + 1 < L && m.push(',' + F);
          return m.push(')'), f & le ? De(m, r.Call, d) : ['(', m, ')'];
        },
        ChainExpression: function (a, d, f) {
          r.OptionalChaining < d && (f |= le);
          var m = this.generateExpression(a.expression, r.OptionalChaining, f);
          return De(m, r.OptionalChaining, d);
        },
        NewExpression: function (a, d, f) {
          var m, v, L, O, R;
          if (
            ((v = a.arguments.length),
            (R = f & Ee && !_ && v === 0 ? je : Me),
            (m = Y('new', this.generateExpression(a.callee, r.New, R))),
            !(f & Ee) || _ || v > 0)
          ) {
            for (m.push('('), L = 0, O = v; L < O; ++L)
              m.push(this.generateExpression(a.arguments[L], r.Assignment, W)),
                L + 1 < O && m.push(',' + F);
            m.push(')');
          }
          return De(m, r.New, d);
        },
        MemberExpression: function (a, d, f) {
          var m, v;
          return (
            (m = [this.generateExpression(a.object, r.Call, f & le ? lt : Me)]),
            a.computed
              ? (a.optional && m.push('?.'),
                m.push('['),
                m.push(
                  this.generateExpression(
                    a.property,
                    r.Sequence,
                    f & le ? W : je,
                  ),
                ),
                m.push(']'))
              : (!a.optional &&
                  a.object.type === i.Literal &&
                  typeof a.object.value == 'number' &&
                  ((v = pe(m).toString()),
                  v.indexOf('.') < 0 &&
                    !/[eExX]/.test(v) &&
                    c.code.isDecimalDigit(v.charCodeAt(v.length - 1)) &&
                    !(v.length >= 2 && v.charCodeAt(0) === 48) &&
                    m.push(' ')),
                m.push(a.optional ? '?.' : '.'),
                m.push(Te(a.property))),
            De(m, r.Member, d)
          );
        },
        MetaProperty: function (a, d, f) {
          var m;
          return (
            (m = []),
            m.push(typeof a.meta == 'string' ? a.meta : Te(a.meta)),
            m.push('.'),
            m.push(typeof a.property == 'string' ? a.property : Te(a.property)),
            De(m, r.Member, d)
          );
        },
        UnaryExpression: function (a, d, f) {
          var m, v, L, O, R;
          return (
            (v = this.generateExpression(a.argument, r.Unary, W)),
            F === ''
              ? (m = Y(a.operator, v))
              : ((m = [a.operator]),
                a.operator.length > 2
                  ? (m = Y(m, v))
                  : ((O = pe(m).toString()),
                    (R = O.charCodeAt(O.length - 1)),
                    (L = v.toString().charCodeAt(0)),
                    (((R === 43 || R === 45) && R === L) ||
                      (c.code.isIdentifierPartES5(R) &&
                        c.code.isIdentifierPartES5(L))) &&
                      m.push(se()),
                    m.push(v))),
            De(m, r.Unary, d)
          );
        },
        YieldExpression: function (a, d, f) {
          var m;
          return (
            a.delegate ? (m = 'yield*') : (m = 'yield'),
            a.argument &&
              (m = Y(m, this.generateExpression(a.argument, r.Yield, W))),
            De(m, r.Yield, d)
          );
        },
        AwaitExpression: function (a, d, f) {
          var m = Y(
            a.all ? 'await*' : 'await',
            this.generateExpression(a.argument, r.Await, W),
          );
          return De(m, r.Await, d);
        },
        UpdateExpression: function (a, d, f) {
          return a.prefix
            ? De(
                [a.operator, this.generateExpression(a.argument, r.Unary, W)],
                r.Unary,
                d,
              )
            : De(
                [this.generateExpression(a.argument, r.Postfix, W), a.operator],
                r.Postfix,
                d,
              );
        },
        FunctionExpression: function (a, d, f) {
          var m = [Ne(a, !0), 'function'];
          return (
            a.id
              ? (m.push(Le(a) || se()), m.push(Te(a.id)))
              : m.push(Le(a) || F),
            m.push(this.generateFunctionBody(a)),
            m
          );
        },
        ArrayPattern: function (a, d, f) {
          return this.ArrayExpression(a, d, f, !0);
        },
        ArrayExpression: function (a, d, f, m) {
          var v,
            L,
            O = this;
          return a.elements.length
            ? ((L = m ? !1 : a.elements.length > 1),
              (v = ['[', L ? k : '']),
              be(function (R) {
                var Q, ue;
                for (Q = 0, ue = a.elements.length; Q < ue; ++Q)
                  a.elements[Q]
                    ? (v.push(L ? R : ''),
                      v.push(
                        O.generateExpression(a.elements[Q], r.Assignment, W),
                      ))
                    : (L && v.push(R), Q + 1 === ue && v.push(',')),
                    Q + 1 < ue && v.push(',' + (L ? k : F));
              }),
              L && !Be(pe(v).toString()) && v.push(k),
              v.push(L ? g : ''),
              v.push(']'),
              v)
            : '[]';
        },
        RestElement: function (a, d, f) {
          return '...' + this.generatePattern(a.argument);
        },
        ClassExpression: function (a, d, f) {
          var m, v;
          return (
            (m = ['class']),
            a.id && (m = Y(m, this.generateExpression(a.id, r.Sequence, W))),
            a.superClass &&
              ((v = Y(
                'extends',
                this.generateExpression(a.superClass, r.Unary, W),
              )),
              (m = Y(m, v))),
            m.push(F),
            m.push(this.generateStatement(a.body, Ge)),
            m
          );
        },
        MethodDefinition: function (a, d, f) {
          var m, v;
          return (
            a.static ? (m = ['static' + F]) : (m = []),
            a.kind === 'get' || a.kind === 'set'
              ? (v = [
                  Y(a.kind, this.generatePropertyKey(a.key, a.computed)),
                  this.generateFunctionBody(a.value),
                ])
              : (v = [
                  Ce(a),
                  this.generatePropertyKey(a.key, a.computed),
                  this.generateFunctionBody(a.value),
                ]),
            Y(m, v)
          );
        },
        Property: function (a, d, f) {
          return a.kind === 'get' || a.kind === 'set'
            ? [
                a.kind,
                se(),
                this.generatePropertyKey(a.key, a.computed),
                this.generateFunctionBody(a.value),
              ]
            : a.shorthand
              ? a.value.type === 'AssignmentPattern'
                ? this.AssignmentPattern(a.value, r.Sequence, W)
                : this.generatePropertyKey(a.key, a.computed)
              : a.method
                ? [
                    Ce(a),
                    this.generatePropertyKey(a.key, a.computed),
                    this.generateFunctionBody(a.value),
                  ]
                : [
                    this.generatePropertyKey(a.key, a.computed),
                    ':' + F,
                    this.generateExpression(a.value, r.Assignment, W),
                  ];
        },
        ObjectExpression: function (a, d, f) {
          var m,
            v,
            L,
            O = this;
          return a.properties.length
            ? ((m = a.properties.length > 1),
              be(function () {
                L = O.generateExpression(a.properties[0], r.Sequence, W);
              }),
              !m && !oi(pe(L).toString())
                ? ['{', F, L, F, '}']
                : (be(function (R) {
                    var Q, ue;
                    if (((v = ['{', k, R, L]), m))
                      for (
                        v.push(',' + k), Q = 1, ue = a.properties.length;
                        Q < ue;
                        ++Q
                      )
                        v.push(R),
                          v.push(
                            O.generateExpression(
                              a.properties[Q],
                              r.Sequence,
                              W,
                            ),
                          ),
                          Q + 1 < ue && v.push(',' + k);
                  }),
                  Be(pe(v).toString()) || v.push(k),
                  v.push(g),
                  v.push('}'),
                  v))
            : '{}';
        },
        AssignmentPattern: function (a, d, f) {
          return this.generateAssignment(a.left, a.right, '=', d, f);
        },
        ObjectPattern: function (a, d, f) {
          var m,
            v,
            L,
            O,
            R,
            Q = this;
          if (!a.properties.length) return '{}';
          if (((O = !1), a.properties.length === 1))
            (R = a.properties[0]),
              R.type === i.Property &&
                R.value.type !== i.Identifier &&
                (O = !0);
          else
            for (v = 0, L = a.properties.length; v < L; ++v)
              if (
                ((R = a.properties[v]), R.type === i.Property && !R.shorthand)
              ) {
                O = !0;
                break;
              }
          return (
            (m = ['{', O ? k : '']),
            be(function (ue) {
              var Fe, et;
              for (Fe = 0, et = a.properties.length; Fe < et; ++Fe)
                m.push(O ? ue : ''),
                  m.push(Q.generateExpression(a.properties[Fe], r.Sequence, W)),
                  Fe + 1 < et && m.push(',' + (O ? k : F));
            }),
            O && !Be(pe(m).toString()) && m.push(k),
            m.push(O ? g : ''),
            m.push('}'),
            m
          );
        },
        ThisExpression: function (a, d, f) {
          return 'this';
        },
        Super: function (a, d, f) {
          return 'super';
        },
        Identifier: function (a, d, f) {
          return Te(a);
        },
        ImportDefaultSpecifier: function (a, d, f) {
          return Te(a.id || a.local);
        },
        ImportNamespaceSpecifier: function (a, d, f) {
          var m = ['*'],
            v = a.id || a.local;
          return v && m.push(F + 'as' + se() + Te(v)), m;
        },
        ImportSpecifier: function (a, d, f) {
          var m = a.imported,
            v = [m.name],
            L = a.local;
          return (
            L && L.name !== m.name && v.push(se() + 'as' + se() + Te(L)), v
          );
        },
        ExportSpecifier: function (a, d, f) {
          var m = a.local,
            v = [m.name],
            L = a.exported;
          return (
            L && L.name !== m.name && v.push(se() + 'as' + se() + Te(L)), v
          );
        },
        Literal: function (a, d, f) {
          var m;
          if (a.hasOwnProperty('raw') && A && P.raw)
            try {
              if (
                ((m = A(a.raw).body[0].expression),
                m.type === i.Literal && m.value === a.value)
              )
                return a.raw;
            } catch {}
          return a.regex
            ? '/' + a.regex.pattern + '/' + a.regex.flags
            : typeof a.value == 'bigint'
              ? a.value.toString() + 'n'
              : a.bigint
                ? a.bigint + 'n'
                : a.value === null
                  ? 'null'
                  : typeof a.value == 'string'
                    ? li(a.value)
                    : typeof a.value == 'number'
                      ? At(a.value)
                      : typeof a.value == 'boolean'
                        ? a.value
                          ? 'true'
                          : 'false'
                        : qt(a.value);
        },
        GeneratorExpression: function (a, d, f) {
          return this.ComprehensionExpression(a, d, f);
        },
        ComprehensionExpression: function (a, d, f) {
          var m,
            v,
            L,
            O,
            R = this;
          return (
            (m = a.type === i.GeneratorExpression ? ['('] : ['[']),
            P.moz.comprehensionExpressionStartsWithAssignment &&
              ((O = this.generateExpression(a.body, r.Assignment, W)),
              m.push(O)),
            a.blocks &&
              be(function () {
                for (v = 0, L = a.blocks.length; v < L; ++v)
                  (O = R.generateExpression(a.blocks[v], r.Sequence, W)),
                    v > 0 || P.moz.comprehensionExpressionStartsWithAssignment
                      ? (m = Y(m, O))
                      : m.push(O);
              }),
            a.filter &&
              ((m = Y(m, 'if' + F)),
              (O = this.generateExpression(a.filter, r.Sequence, W)),
              (m = Y(m, ['(', O, ')']))),
            P.moz.comprehensionExpressionStartsWithAssignment ||
              ((O = this.generateExpression(a.body, r.Assignment, W)),
              (m = Y(m, O))),
            m.push(a.type === i.GeneratorExpression ? ')' : ']'),
            m
          );
        },
        ComprehensionBlock: function (a, d, f) {
          var m;
          return (
            a.left.type === i.VariableDeclaration
              ? (m = [
                  a.left.kind,
                  se(),
                  this.generateStatement(a.left.declarations[0], Ft),
                ])
              : (m = this.generateExpression(a.left, r.Call, W)),
            (m = Y(m, a.of ? 'of' : 'in')),
            (m = Y(m, this.generateExpression(a.right, r.Sequence, W))),
            ['for' + F + '(', m, ')']
          );
        },
        SpreadElement: function (a, d, f) {
          return ['...', this.generateExpression(a.argument, r.Assignment, W)];
        },
        TaggedTemplateExpression: function (a, d, f) {
          var m = lt;
          f & le || (m = Me);
          var v = [
            this.generateExpression(a.tag, r.Call, m),
            this.generateExpression(a.quasi, r.Primary, ht),
          ];
          return De(v, r.TaggedTemplate, d);
        },
        TemplateElement: function (a, d, f) {
          return a.value.raw;
        },
        TemplateLiteral: function (a, d, f) {
          var m, v, L;
          for (m = ['`'], v = 0, L = a.quasis.length; v < L; ++v)
            m.push(this.generateExpression(a.quasis[v], r.Primary, W)),
              v + 1 < L &&
                (m.push('${' + F),
                m.push(
                  this.generateExpression(a.expressions[v], r.Sequence, W),
                ),
                m.push(F + '}'));
          return m.push('`'), m;
        },
        ModuleSpecifier: function (a, d, f) {
          return this.Literal(a, d, f);
        },
        ImportExpression: function (a, d, f) {
          return De(
            [
              'import(',
              this.generateExpression(a.source, r.Assignment, W),
              ')',
            ],
            r.Call,
            d,
          );
        },
      }),
      wt(Se.prototype, Se.Expression),
      (Se.prototype.generateExpression = function (a, d, f) {
        var m, v;
        return (
          (v = a.type || i.Property),
          P.verbatim && a.hasOwnProperty(P.verbatim)
            ? ci(a, d)
            : ((m = this[v](a, d, f)), P.comment && (m = hi(a, m)), pe(m, a))
        );
      }),
      (Se.prototype.generateStatement = function (a, d) {
        var f, m;
        return (
          (f = this[a.type](a, d)),
          P.comment && (f = hi(a, f)),
          (m = pe(f).toString()),
          a.type === i.Program &&
            !V &&
            k === '' &&
            m.charAt(m.length - 1) ===
              `
` &&
            (f = o ? pe(f).replaceRight(/\s+$/, '') : m.replace(/\s+$/, '')),
          pe(f, a)
        );
      });
    function pt(a) {
      var d;
      if (((d = new Se()), J(a))) return d.generateStatement(a, ge);
      if (te(a)) return d.generateExpression(a, r.Sequence, W);
      throw new Error('Unknown node type: ' + a.type);
    }
    function ee(a, d) {
      var f = _t(),
        m,
        v;
      return (
        d != null
          ? (typeof d.indent == 'string' && (f.format.indent.style = d.indent),
            typeof d.base == 'number' && (f.format.indent.base = d.base),
            (d = vt(f, d)),
            (x = d.format.indent.style),
            typeof d.base == 'string'
              ? (g = d.base)
              : (g = Ze(x, d.format.indent.base)))
          : ((d = f),
            (x = d.format.indent.style),
            (g = Ze(x, d.format.indent.base))),
        (E = d.format.json),
        (D = d.format.renumber),
        (w = E ? !1 : d.format.hexadecimal),
        (b = E ? 'double' : d.format.quotes),
        (S = d.format.escapeless),
        (k = d.format.newline),
        (F = d.format.space),
        d.format.compact && (k = F = x = g = ''),
        (_ = d.format.parentheses),
        (M = d.format.semicolons),
        (V = d.format.safeConcatenation),
        (G = d.directive),
        (A = E ? null : d.parse),
        (o = d.sourceMap),
        (B = d.sourceCode),
        (N = d.format.preserveBlankLines && B !== null),
        (P = d),
        o &&
          (e.browser ? (u = Ot.sourceMap.SourceNode) : (u = Ta().SourceNode)),
        (m = pt(a)),
        o
          ? ((v = m.toStringWithSourceMap({
              file: d.file,
              sourceRoot: d.sourceMapRoot,
            })),
            d.sourceContent &&
              v.map.setSourceContent(d.sourceMap, d.sourceContent),
            d.sourceMapWithCode ? v : v.map.toString())
          : ((v = { code: m.toString(), map: null }),
            d.sourceMapWithCode ? v : v.code)
      );
    }
    (H = {
      indent: { style: '', base: 0 },
      renumber: !0,
      hexadecimal: !0,
      quotes: 'auto',
      escapeless: !0,
      compact: !0,
      parentheses: !1,
      semicolons: !1,
    }),
      (z = _t().format),
      (e.version = Xa.version),
      (e.generate = ee),
      (e.attachComments = h.attachComments),
      (e.Precedence = vt({}, r)),
      (e.browser = !1),
      (e.FORMAT_MINIFY = H),
      (e.FORMAT_DEFAULTS = z);
  })();
})(Nn);
var Zi = {
    3: 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
    5: 'class enum extends super const export import',
    6: 'enum',
    strict:
      'implements interface let package private protected public static yield',
    strictBind: 'eval arguments',
  },
  er =
    'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this',
  Ja = {
    5: er,
    '5module': er + ' export import',
    6: er + ' const class extends export import super',
  },
  $a = /^in(stanceof)?$/,
  pr =
    'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
  Gn =
    '‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿',
  Ya = new RegExp('[' + pr + ']'),
  Za = new RegExp('[' + pr + Gn + ']');
pr = Gn = null;
var Wn = [
    0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48,
    48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5,
    39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22,
    11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2,
    2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111,
    72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20,
    28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47,
    15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46,
    39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3,
    21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0,
    72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95,
    7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56,
    264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2,
    31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050,
    582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129,
    74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2,
    18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3,
    1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2,
    0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2,
    30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0,
    1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0,
    2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2,
    6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148,
    12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938,
  ],
  eu = [
    509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1,
    574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9,
    7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0,
    161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193,
    17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12,
    9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9,
    120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7,
    17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2,
    4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82,
    0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513,
    54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262,
    6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239,
  ];
function ir(e, i) {
  for (var r = 65536, s = 0; s < i.length; s += 2) {
    if (((r += i[s]), r > e)) return !1;
    if (((r += i[s + 1]), r >= e)) return !0;
  }
}
function mt(e, i) {
  return e < 65
    ? e === 36
    : e < 91
      ? !0
      : e < 97
        ? e === 95
        : e < 123
          ? !0
          : e <= 65535
            ? e >= 170 && Ya.test(String.fromCharCode(e))
            : i === !1
              ? !1
              : ir(e, Wn);
}
function Rt(e, i) {
  return e < 48
    ? e === 36
    : e < 58
      ? !0
      : e < 65
        ? !1
        : e < 91
          ? !0
          : e < 97
            ? e === 95
            : e < 123
              ? !0
              : e <= 65535
                ? e >= 170 && Za.test(String.fromCharCode(e))
                : i === !1
                  ? !1
                  : ir(e, Wn) || ir(e, eu);
}
var me = function (i, r) {
  r === void 0 && (r = {}),
    (this.label = i),
    (this.keyword = r.keyword),
    (this.beforeExpr = !!r.beforeExpr),
    (this.startsExpr = !!r.startsExpr),
    (this.isLoop = !!r.isLoop),
    (this.isAssign = !!r.isAssign),
    (this.prefix = !!r.prefix),
    (this.postfix = !!r.postfix),
    (this.binop = r.binop || null),
    (this.updateContext = null);
};
function He(e, i) {
  return new me(e, { beforeExpr: !0, binop: i });
}
var Qe = { beforeExpr: !0 },
  Ue = { startsExpr: !0 },
  dr = {};
function fe(e, i) {
  return i === void 0 && (i = {}), (i.keyword = e), (dr[e] = new me(e, i));
}
var C = {
    num: new me('num', Ue),
    regexp: new me('regexp', Ue),
    string: new me('string', Ue),
    name: new me('name', Ue),
    eof: new me('eof'),
    bracketL: new me('[', { beforeExpr: !0, startsExpr: !0 }),
    bracketR: new me(']'),
    braceL: new me('{', { beforeExpr: !0, startsExpr: !0 }),
    braceR: new me('}'),
    parenL: new me('(', { beforeExpr: !0, startsExpr: !0 }),
    parenR: new me(')'),
    comma: new me(',', Qe),
    semi: new me(';', Qe),
    colon: new me(':', Qe),
    dot: new me('.'),
    question: new me('?', Qe),
    questionDot: new me('?.'),
    arrow: new me('=>', Qe),
    template: new me('template'),
    invalidTemplate: new me('invalidTemplate'),
    ellipsis: new me('...', Qe),
    backQuote: new me('`', Ue),
    dollarBraceL: new me('${', { beforeExpr: !0, startsExpr: !0 }),
    eq: new me('=', { beforeExpr: !0, isAssign: !0 }),
    assign: new me('_=', { beforeExpr: !0, isAssign: !0 }),
    incDec: new me('++/--', { prefix: !0, postfix: !0, startsExpr: !0 }),
    prefix: new me('!/~', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    logicalOR: He('||', 1),
    logicalAND: He('&&', 2),
    bitwiseOR: He('|', 3),
    bitwiseXOR: He('^', 4),
    bitwiseAND: He('&', 5),
    equality: He('==/!=/===/!==', 6),
    relational: He('</>/<=/>=', 7),
    bitShift: He('<</>>/>>>', 8),
    plusMin: new me('+/-', {
      beforeExpr: !0,
      binop: 9,
      prefix: !0,
      startsExpr: !0,
    }),
    modulo: He('%', 10),
    star: He('*', 10),
    slash: He('/', 10),
    starstar: new me('**', { beforeExpr: !0 }),
    coalesce: He('??', 1),
    _break: fe('break'),
    _case: fe('case', Qe),
    _catch: fe('catch'),
    _continue: fe('continue'),
    _debugger: fe('debugger'),
    _default: fe('default', Qe),
    _do: fe('do', { isLoop: !0, beforeExpr: !0 }),
    _else: fe('else', Qe),
    _finally: fe('finally'),
    _for: fe('for', { isLoop: !0 }),
    _function: fe('function', Ue),
    _if: fe('if'),
    _return: fe('return', Qe),
    _switch: fe('switch'),
    _throw: fe('throw', Qe),
    _try: fe('try'),
    _var: fe('var'),
    _const: fe('const'),
    _while: fe('while', { isLoop: !0 }),
    _with: fe('with'),
    _new: fe('new', { beforeExpr: !0, startsExpr: !0 }),
    _this: fe('this', Ue),
    _super: fe('super', Ue),
    _class: fe('class', Ue),
    _extends: fe('extends', Qe),
    _export: fe('export'),
    _import: fe('import', Ue),
    _null: fe('null', Ue),
    _true: fe('true', Ue),
    _false: fe('false', Ue),
    _in: fe('in', { beforeExpr: !0, binop: 7 }),
    _instanceof: fe('instanceof', { beforeExpr: !0, binop: 7 }),
    _typeof: fe('typeof', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _void: fe('void', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _delete: fe('delete', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  },
  Xe = /\r\n?|\n|\u2028|\u2029/,
  Yt = new RegExp(Xe.source, 'g');
function ni(e, i) {
  return e === 10 || e === 13 || (!i && (e === 8232 || e === 8233));
}
var zn = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
  Ke = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
  Hn = Object.prototype,
  tu = Hn.hasOwnProperty,
  iu = Hn.toString;
function _i(e, i) {
  return tu.call(e, i);
}
var fn =
  Array.isArray ||
  function (e) {
    return iu.call(e) === '[object Array]';
  };
function Dt(e) {
  return new RegExp('^(?:' + e.replace(/ /g, '|') + ')$');
}
var Zt = function (i, r) {
  (this.line = i), (this.column = r);
};
Zt.prototype.offset = function (i) {
  return new Zt(this.line, this.column + i);
};
var wi = function (i, r, s) {
  (this.start = r),
    (this.end = s),
    i.sourceFile !== null && (this.source = i.sourceFile);
};
function Qn(e, i) {
  for (var r = 1, s = 0; ; ) {
    Yt.lastIndex = s;
    var u = Yt.exec(e);
    if (u && u.index < i) ++r, (s = u.index + u[0].length);
    else return new Zt(r, i - s);
  }
}
var rr = {
  ecmaVersion: 10,
  sourceType: 'script',
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: !1,
  allowImportExportEverywhere: !1,
  allowAwaitOutsideFunction: !1,
  allowHashBang: !1,
  locations: !1,
  onToken: null,
  onComment: null,
  ranges: !1,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: !1,
};
function ru(e) {
  var i = {};
  for (var r in rr) i[r] = e && _i(e, r) ? e[r] : rr[r];
  if (
    (i.ecmaVersion >= 2015 && (i.ecmaVersion -= 2009),
    i.allowReserved == null && (i.allowReserved = i.ecmaVersion < 5),
    fn(i.onToken))
  ) {
    var s = i.onToken;
    i.onToken = function (u) {
      return s.push(u);
    };
  }
  return fn(i.onComment) && (i.onComment = nu(i, i.onComment)), i;
}
function nu(e, i) {
  return function (r, s, u, h, c, g) {
    var x = { type: r ? 'Block' : 'Line', value: s, start: u, end: h };
    e.locations && (x.loc = new wi(this, c, g)),
      e.ranges && (x.range = [u, h]),
      i.push(x);
  };
}
var ei = 1,
  si = 2,
  mr = ei | si,
  Kn = 4,
  Xn = 8,
  Jn = 16,
  $n = 32,
  Yn = 64,
  Zn = 128;
function gr(e, i) {
  return si | (e ? Kn : 0) | (i ? Xn : 0);
}
var pn = 0,
  xr = 1,
  at = 2,
  es = 3,
  ts = 4,
  is = 5,
  ke = function (i, r, s) {
    (this.options = i = ru(i)),
      (this.sourceFile = i.sourceFile),
      (this.keywords = Dt(
        Ja[i.ecmaVersion >= 6 ? 6 : i.sourceType === 'module' ? '5module' : 5],
      ));
    var u = '';
    if (i.allowReserved !== !0) {
      for (var h = i.ecmaVersion; !(u = Zi[h]); h--);
      i.sourceType === 'module' && (u += ' await');
    }
    this.reservedWords = Dt(u);
    var c = (u ? u + ' ' : '') + Zi.strict;
    (this.reservedWordsStrict = Dt(c)),
      (this.reservedWordsStrictBind = Dt(c + ' ' + Zi.strictBind)),
      (this.input = String(r)),
      (this.containsEsc = !1),
      s
        ? ((this.pos = s),
          (this.lineStart =
            this.input.lastIndexOf(
              `
`,
              s - 1,
            ) + 1),
          (this.curLine = this.input.slice(0, this.lineStart).split(Xe).length))
        : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
      (this.type = C.eof),
      (this.value = null),
      (this.start = this.end = this.pos),
      (this.startLoc = this.endLoc = this.curPosition()),
      (this.lastTokEndLoc = this.lastTokStartLoc = null),
      (this.lastTokStart = this.lastTokEnd = this.pos),
      (this.context = this.initialContext()),
      (this.exprAllowed = !0),
      (this.inModule = i.sourceType === 'module'),
      (this.strict = this.inModule || this.strictDirective(this.pos)),
      (this.potentialArrowAt = -1),
      (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
      (this.labels = []),
      (this.undefinedExports = {}),
      this.pos === 0 &&
        i.allowHashBang &&
        this.input.slice(0, 2) === '#!' &&
        this.skipLineComment(2),
      (this.scopeStack = []),
      this.enterScope(ei),
      (this.regexpState = null);
  },
  bt = {
    inFunction: { configurable: !0 },
    inGenerator: { configurable: !0 },
    inAsync: { configurable: !0 },
    allowSuper: { configurable: !0 },
    allowDirectSuper: { configurable: !0 },
    treatFunctionsAsVar: { configurable: !0 },
  };
ke.prototype.parse = function () {
  var i = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(i);
};
bt.inFunction.get = function () {
  return (this.currentVarScope().flags & si) > 0;
};
bt.inGenerator.get = function () {
  return (this.currentVarScope().flags & Xn) > 0;
};
bt.inAsync.get = function () {
  return (this.currentVarScope().flags & Kn) > 0;
};
bt.allowSuper.get = function () {
  return (this.currentThisScope().flags & Yn) > 0;
};
bt.allowDirectSuper.get = function () {
  return (this.currentThisScope().flags & Zn) > 0;
};
bt.treatFunctionsAsVar.get = function () {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
ke.prototype.inNonArrowFunction = function () {
  return (this.currentThisScope().flags & si) > 0;
};
ke.extend = function () {
  for (var i = [], r = arguments.length; r--; ) i[r] = arguments[r];
  for (var s = this, u = 0; u < i.length; u++) s = i[u](s);
  return s;
};
ke.parse = function (i, r) {
  return new this(r, i).parse();
};
ke.parseExpressionAt = function (i, r, s) {
  var u = new this(s, i, r);
  return u.nextToken(), u.parseExpression();
};
ke.tokenizer = function (i, r) {
  return new this(r, i);
};
Object.defineProperties(ke.prototype, bt);
var Re = ke.prototype,
  su = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
Re.strictDirective = function (e) {
  for (;;) {
    (Ke.lastIndex = e), (e += Ke.exec(this.input)[0].length);
    var i = su.exec(this.input.slice(e));
    if (!i) return !1;
    if ((i[1] || i[2]) === 'use strict') {
      Ke.lastIndex = e + i[0].length;
      var r = Ke.exec(this.input),
        s = r.index + r[0].length,
        u = this.input.charAt(s);
      return (
        u === ';' ||
        u === '}' ||
        (Xe.test(r[0]) &&
          !(
            /[(`.[+\-/*%<>=,?^&]/.test(u) ||
            (u === '!' && this.input.charAt(s + 1) === '=')
          ))
      );
    }
    (e += i[0].length),
      (Ke.lastIndex = e),
      (e += Ke.exec(this.input)[0].length),
      this.input[e] === ';' && e++;
  }
};
Re.eat = function (e) {
  return this.type === e ? (this.next(), !0) : !1;
};
Re.isContextual = function (e) {
  return this.type === C.name && this.value === e && !this.containsEsc;
};
Re.eatContextual = function (e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
Re.expectContextual = function (e) {
  this.eatContextual(e) || this.unexpected();
};
Re.canInsertSemicolon = function () {
  return (
    this.type === C.eof ||
    this.type === C.braceR ||
    Xe.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
Re.insertSemicolon = function () {
  if (this.canInsertSemicolon())
    return (
      this.options.onInsertedSemicolon &&
        this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc),
      !0
    );
};
Re.semicolon = function () {
  !this.eat(C.semi) && !this.insertSemicolon() && this.unexpected();
};
Re.afterTrailingComma = function (e, i) {
  if (this.type === e)
    return (
      this.options.onTrailingComma &&
        this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc),
      i || this.next(),
      !0
    );
};
Re.expect = function (e) {
  this.eat(e) || this.unexpected();
};
Re.unexpected = function (e) {
  this.raise(e ?? this.start, 'Unexpected token');
};
function Bi() {
  this.shorthandAssign =
    this.trailingComma =
    this.parenthesizedAssign =
    this.parenthesizedBind =
    this.doubleProto =
      -1;
}
Re.checkPatternErrors = function (e, i) {
  if (e) {
    e.trailingComma > -1 &&
      this.raiseRecoverable(
        e.trailingComma,
        'Comma is not permitted after the rest element',
      );
    var r = i ? e.parenthesizedAssign : e.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, 'Parenthesized pattern');
  }
};
Re.checkExpressionErrors = function (e, i) {
  if (!e) return !1;
  var r = e.shorthandAssign,
    s = e.doubleProto;
  if (!i) return r >= 0 || s >= 0;
  r >= 0 &&
    this.raise(
      r,
      'Shorthand property assignments are valid only in destructuring patterns',
    ),
    s >= 0 && this.raiseRecoverable(s, 'Redefinition of __proto__ property');
};
Re.checkYieldAwaitInDefaultParams = function () {
  this.yieldPos &&
    (!this.awaitPos || this.yieldPos < this.awaitPos) &&
    this.raise(this.yieldPos, 'Yield expression cannot be a default value'),
    this.awaitPos &&
      this.raise(this.awaitPos, 'Await expression cannot be a default value');
};
Re.isSimpleAssignTarget = function (e) {
  return e.type === 'ParenthesizedExpression'
    ? this.isSimpleAssignTarget(e.expression)
    : e.type === 'Identifier' || e.type === 'MemberExpression';
};
var ne = ke.prototype;
ne.parseTopLevel = function (e) {
  var i = {};
  for (e.body || (e.body = []); this.type !== C.eof; ) {
    var r = this.parseStatement(null, !0, i);
    e.body.push(r);
  }
  if (this.inModule)
    for (
      var s = 0, u = Object.keys(this.undefinedExports);
      s < u.length;
      s += 1
    ) {
      var h = u[s];
      this.raiseRecoverable(
        this.undefinedExports[h].start,
        "Export '" + h + "' is not defined",
      );
    }
  return (
    this.adaptDirectivePrologue(e.body),
    this.next(),
    (e.sourceType = this.options.sourceType),
    this.finishNode(e, 'Program')
  );
};
var Cr = { kind: 'loop' },
  au = { kind: 'switch' };
ne.isLet = function (e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual('let')) return !1;
  Ke.lastIndex = this.pos;
  var i = Ke.exec(this.input),
    r = this.pos + i[0].length,
    s = this.input.charCodeAt(r);
  if (s === 91) return !0;
  if (e) return !1;
  if (s === 123) return !0;
  if (mt(s, !0)) {
    for (var u = r + 1; Rt(this.input.charCodeAt(u), !0); ) ++u;
    var h = this.input.slice(r, u);
    if (!$a.test(h)) return !0;
  }
  return !1;
};
ne.isAsyncFunction = function () {
  if (this.options.ecmaVersion < 8 || !this.isContextual('async')) return !1;
  Ke.lastIndex = this.pos;
  var e = Ke.exec(this.input),
    i = this.pos + e[0].length;
  return (
    !Xe.test(this.input.slice(this.pos, i)) &&
    this.input.slice(i, i + 8) === 'function' &&
    (i + 8 === this.input.length || !Rt(this.input.charAt(i + 8)))
  );
};
ne.parseStatement = function (e, i, r) {
  var s = this.type,
    u = this.startNode(),
    h;
  switch ((this.isLet(e) && ((s = C._var), (h = 'let')), s)) {
    case C._break:
    case C._continue:
      return this.parseBreakContinueStatement(u, s.keyword);
    case C._debugger:
      return this.parseDebuggerStatement(u);
    case C._do:
      return this.parseDoStatement(u);
    case C._for:
      return this.parseForStatement(u);
    case C._function:
      return (
        e &&
          (this.strict || (e !== 'if' && e !== 'label')) &&
          this.options.ecmaVersion >= 6 &&
          this.unexpected(),
        this.parseFunctionStatement(u, !1, !e)
      );
    case C._class:
      return e && this.unexpected(), this.parseClass(u, !0);
    case C._if:
      return this.parseIfStatement(u);
    case C._return:
      return this.parseReturnStatement(u);
    case C._switch:
      return this.parseSwitchStatement(u);
    case C._throw:
      return this.parseThrowStatement(u);
    case C._try:
      return this.parseTryStatement(u);
    case C._const:
    case C._var:
      return (
        (h = h || this.value),
        e && h !== 'var' && this.unexpected(),
        this.parseVarStatement(u, h)
      );
    case C._while:
      return this.parseWhileStatement(u);
    case C._with:
      return this.parseWithStatement(u);
    case C.braceL:
      return this.parseBlock(!0, u);
    case C.semi:
      return this.parseEmptyStatement(u);
    case C._export:
    case C._import:
      if (this.options.ecmaVersion > 10 && s === C._import) {
        Ke.lastIndex = this.pos;
        var c = Ke.exec(this.input),
          g = this.pos + c[0].length,
          x = this.input.charCodeAt(g);
        if (x === 40 || x === 46)
          return this.parseExpressionStatement(u, this.parseExpression());
      }
      return (
        this.options.allowImportExportEverywhere ||
          (i ||
            this.raise(
              this.start,
              "'import' and 'export' may only appear at the top level",
            ),
          this.inModule ||
            this.raise(
              this.start,
              "'import' and 'export' may appear only with 'sourceType: module'",
            )),
        s === C._import ? this.parseImport(u) : this.parseExport(u, r)
      );
    default:
      if (this.isAsyncFunction())
        return (
          e && this.unexpected(),
          this.next(),
          this.parseFunctionStatement(u, !0, !e)
        );
      var E = this.value,
        D = this.parseExpression();
      return s === C.name && D.type === 'Identifier' && this.eat(C.colon)
        ? this.parseLabeledStatement(u, E, D, e)
        : this.parseExpressionStatement(u, D);
  }
};
ne.parseBreakContinueStatement = function (e, i) {
  var r = i === 'break';
  this.next(),
    this.eat(C.semi) || this.insertSemicolon()
      ? (e.label = null)
      : this.type !== C.name
        ? this.unexpected()
        : ((e.label = this.parseIdent()), this.semicolon());
  for (var s = 0; s < this.labels.length; ++s) {
    var u = this.labels[s];
    if (
      (e.label == null || u.name === e.label.name) &&
      ((u.kind != null && (r || u.kind === 'loop')) || (e.label && r))
    )
      break;
  }
  return (
    s === this.labels.length && this.raise(e.start, 'Unsyntactic ' + i),
    this.finishNode(e, r ? 'BreakStatement' : 'ContinueStatement')
  );
};
ne.parseDebuggerStatement = function (e) {
  return this.next(), this.semicolon(), this.finishNode(e, 'DebuggerStatement');
};
ne.parseDoStatement = function (e) {
  return (
    this.next(),
    this.labels.push(Cr),
    (e.body = this.parseStatement('do')),
    this.labels.pop(),
    this.expect(C._while),
    (e.test = this.parseParenExpression()),
    this.options.ecmaVersion >= 6 ? this.eat(C.semi) : this.semicolon(),
    this.finishNode(e, 'DoWhileStatement')
  );
};
ne.parseForStatement = function (e) {
  this.next();
  var i =
    this.options.ecmaVersion >= 9 &&
    (this.inAsync ||
      (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
    this.eatContextual('await')
      ? this.lastTokStart
      : -1;
  if (
    (this.labels.push(Cr),
    this.enterScope(0),
    this.expect(C.parenL),
    this.type === C.semi)
  )
    return i > -1 && this.unexpected(i), this.parseFor(e, null);
  var r = this.isLet();
  if (this.type === C._var || this.type === C._const || r) {
    var s = this.startNode(),
      u = r ? 'let' : this.value;
    return (
      this.next(),
      this.parseVar(s, !0, u),
      this.finishNode(s, 'VariableDeclaration'),
      (this.type === C._in ||
        (this.options.ecmaVersion >= 6 && this.isContextual('of'))) &&
      s.declarations.length === 1
        ? (this.options.ecmaVersion >= 9 &&
            (this.type === C._in
              ? i > -1 && this.unexpected(i)
              : (e.await = i > -1)),
          this.parseForIn(e, s))
        : (i > -1 && this.unexpected(i), this.parseFor(e, s))
    );
  }
  var h = new Bi(),
    c = this.parseExpression(!0, h);
  return this.type === C._in ||
    (this.options.ecmaVersion >= 6 && this.isContextual('of'))
    ? (this.options.ecmaVersion >= 9 &&
        (this.type === C._in
          ? i > -1 && this.unexpected(i)
          : (e.await = i > -1)),
      this.toAssignable(c, !1, h),
      this.checkLVal(c),
      this.parseForIn(e, c))
    : (this.checkExpressionErrors(h, !0),
      i > -1 && this.unexpected(i),
      this.parseFor(e, c));
};
ne.parseFunctionStatement = function (e, i, r) {
  return this.next(), this.parseFunction(e, Jt | (r ? 0 : nr), !1, i);
};
ne.parseIfStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    (e.consequent = this.parseStatement('if')),
    (e.alternate = this.eat(C._else) ? this.parseStatement('if') : null),
    this.finishNode(e, 'IfStatement')
  );
};
ne.parseReturnStatement = function (e) {
  return (
    !this.inFunction &&
      !this.options.allowReturnOutsideFunction &&
      this.raise(this.start, "'return' outside of function"),
    this.next(),
    this.eat(C.semi) || this.insertSemicolon()
      ? (e.argument = null)
      : ((e.argument = this.parseExpression()), this.semicolon()),
    this.finishNode(e, 'ReturnStatement')
  );
};
ne.parseSwitchStatement = function (e) {
  this.next(),
    (e.discriminant = this.parseParenExpression()),
    (e.cases = []),
    this.expect(C.braceL),
    this.labels.push(au),
    this.enterScope(0);
  for (var i, r = !1; this.type !== C.braceR; )
    if (this.type === C._case || this.type === C._default) {
      var s = this.type === C._case;
      i && this.finishNode(i, 'SwitchCase'),
        e.cases.push((i = this.startNode())),
        (i.consequent = []),
        this.next(),
        s
          ? (i.test = this.parseExpression())
          : (r &&
              this.raiseRecoverable(
                this.lastTokStart,
                'Multiple default clauses',
              ),
            (r = !0),
            (i.test = null)),
        this.expect(C.colon);
    } else i || this.unexpected(), i.consequent.push(this.parseStatement(null));
  return (
    this.exitScope(),
    i && this.finishNode(i, 'SwitchCase'),
    this.next(),
    this.labels.pop(),
    this.finishNode(e, 'SwitchStatement')
  );
};
ne.parseThrowStatement = function (e) {
  return (
    this.next(),
    Xe.test(this.input.slice(this.lastTokEnd, this.start)) &&
      this.raise(this.lastTokEnd, 'Illegal newline after throw'),
    (e.argument = this.parseExpression()),
    this.semicolon(),
    this.finishNode(e, 'ThrowStatement')
  );
};
var uu = [];
ne.parseTryStatement = function (e) {
  if (
    (this.next(),
    (e.block = this.parseBlock()),
    (e.handler = null),
    this.type === C._catch)
  ) {
    var i = this.startNode();
    if ((this.next(), this.eat(C.parenL))) {
      i.param = this.parseBindingAtom();
      var r = i.param.type === 'Identifier';
      this.enterScope(r ? $n : 0),
        this.checkLVal(i.param, r ? ts : at),
        this.expect(C.parenR);
    } else
      this.options.ecmaVersion < 10 && this.unexpected(),
        (i.param = null),
        this.enterScope(0);
    (i.body = this.parseBlock(!1)),
      this.exitScope(),
      (e.handler = this.finishNode(i, 'CatchClause'));
  }
  return (
    (e.finalizer = this.eat(C._finally) ? this.parseBlock() : null),
    !e.handler &&
      !e.finalizer &&
      this.raise(e.start, 'Missing catch or finally clause'),
    this.finishNode(e, 'TryStatement')
  );
};
ne.parseVarStatement = function (e, i) {
  return (
    this.next(),
    this.parseVar(e, !1, i),
    this.semicolon(),
    this.finishNode(e, 'VariableDeclaration')
  );
};
ne.parseWhileStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    this.labels.push(Cr),
    (e.body = this.parseStatement('while')),
    this.labels.pop(),
    this.finishNode(e, 'WhileStatement')
  );
};
ne.parseWithStatement = function (e) {
  return (
    this.strict && this.raise(this.start, "'with' in strict mode"),
    this.next(),
    (e.object = this.parseParenExpression()),
    (e.body = this.parseStatement('with')),
    this.finishNode(e, 'WithStatement')
  );
};
ne.parseEmptyStatement = function (e) {
  return this.next(), this.finishNode(e, 'EmptyStatement');
};
ne.parseLabeledStatement = function (e, i, r, s) {
  for (var u = 0, h = this.labels; u < h.length; u += 1) {
    var c = h[u];
    c.name === i &&
      this.raise(r.start, "Label '" + i + "' is already declared");
  }
  for (
    var g = this.type.isLoop
        ? 'loop'
        : this.type === C._switch
          ? 'switch'
          : null,
      x = this.labels.length - 1;
    x >= 0;
    x--
  ) {
    var E = this.labels[x];
    if (E.statementStart === e.start)
      (E.statementStart = this.start), (E.kind = g);
    else break;
  }
  return (
    this.labels.push({ name: i, kind: g, statementStart: this.start }),
    (e.body = this.parseStatement(
      s ? (s.indexOf('label') === -1 ? s + 'label' : s) : 'label',
    )),
    this.labels.pop(),
    (e.label = r),
    this.finishNode(e, 'LabeledStatement')
  );
};
ne.parseExpressionStatement = function (e, i) {
  return (
    (e.expression = i),
    this.semicolon(),
    this.finishNode(e, 'ExpressionStatement')
  );
};
ne.parseBlock = function (e, i, r) {
  for (
    e === void 0 && (e = !0),
      i === void 0 && (i = this.startNode()),
      i.body = [],
      this.expect(C.braceL),
      e && this.enterScope(0);
    this.type !== C.braceR;

  ) {
    var s = this.parseStatement(null);
    i.body.push(s);
  }
  return (
    r && (this.strict = !1),
    this.next(),
    e && this.exitScope(),
    this.finishNode(i, 'BlockStatement')
  );
};
ne.parseFor = function (e, i) {
  return (
    (e.init = i),
    this.expect(C.semi),
    (e.test = this.type === C.semi ? null : this.parseExpression()),
    this.expect(C.semi),
    (e.update = this.type === C.parenR ? null : this.parseExpression()),
    this.expect(C.parenR),
    (e.body = this.parseStatement('for')),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, 'ForStatement')
  );
};
ne.parseForIn = function (e, i) {
  var r = this.type === C._in;
  return (
    this.next(),
    i.type === 'VariableDeclaration' &&
    i.declarations[0].init != null &&
    (!r ||
      this.options.ecmaVersion < 8 ||
      this.strict ||
      i.kind !== 'var' ||
      i.declarations[0].id.type !== 'Identifier')
      ? this.raise(
          i.start,
          (r ? 'for-in' : 'for-of') +
            ' loop variable declaration may not have an initializer',
        )
      : i.type === 'AssignmentPattern' &&
        this.raise(i.start, 'Invalid left-hand side in for-loop'),
    (e.left = i),
    (e.right = r ? this.parseExpression() : this.parseMaybeAssign()),
    this.expect(C.parenR),
    (e.body = this.parseStatement('for')),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, r ? 'ForInStatement' : 'ForOfStatement')
  );
};
ne.parseVar = function (e, i, r) {
  for (e.declarations = [], e.kind = r; ; ) {
    var s = this.startNode();
    if (
      (this.parseVarId(s, r),
      this.eat(C.eq)
        ? (s.init = this.parseMaybeAssign(i))
        : r === 'const' &&
            !(
              this.type === C._in ||
              (this.options.ecmaVersion >= 6 && this.isContextual('of'))
            )
          ? this.unexpected()
          : s.id.type !== 'Identifier' &&
              !(i && (this.type === C._in || this.isContextual('of')))
            ? this.raise(
                this.lastTokEnd,
                'Complex binding patterns require an initialization value',
              )
            : (s.init = null),
      e.declarations.push(this.finishNode(s, 'VariableDeclarator')),
      !this.eat(C.comma))
    )
      break;
  }
  return e;
};
ne.parseVarId = function (e, i) {
  (e.id = this.parseBindingAtom()),
    this.checkLVal(e.id, i === 'var' ? xr : at, !1);
};
var Jt = 1,
  nr = 2,
  rs = 4;
ne.parseFunction = function (e, i, r, s) {
  this.initFunction(e),
    (this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !s)) &&
      (this.type === C.star && i & nr && this.unexpected(),
      (e.generator = this.eat(C.star))),
    this.options.ecmaVersion >= 8 && (e.async = !!s),
    i & Jt &&
      ((e.id = i & rs && this.type !== C.name ? null : this.parseIdent()),
      e.id &&
        !(i & nr) &&
        this.checkLVal(
          e.id,
          this.strict || e.generator || e.async
            ? this.treatFunctionsAsVar
              ? xr
              : at
            : es,
        ));
  var u = this.yieldPos,
    h = this.awaitPos,
    c = this.awaitIdentPos;
  return (
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(gr(e.async, e.generator)),
    i & Jt || (e.id = this.type === C.name ? this.parseIdent() : null),
    this.parseFunctionParams(e),
    this.parseFunctionBody(e, r, !1),
    (this.yieldPos = u),
    (this.awaitPos = h),
    (this.awaitIdentPos = c),
    this.finishNode(e, i & Jt ? 'FunctionDeclaration' : 'FunctionExpression')
  );
};
ne.parseFunctionParams = function (e) {
  this.expect(C.parenL),
    (e.params = this.parseBindingList(
      C.parenR,
      !1,
      this.options.ecmaVersion >= 8,
    )),
    this.checkYieldAwaitInDefaultParams();
};
ne.parseClass = function (e, i) {
  this.next();
  var r = this.strict;
  (this.strict = !0), this.parseClassId(e, i), this.parseClassSuper(e);
  var s = this.startNode(),
    u = !1;
  for (s.body = [], this.expect(C.braceL); this.type !== C.braceR; ) {
    var h = this.parseClassElement(e.superClass !== null);
    h &&
      (s.body.push(h),
      h.type === 'MethodDefinition' &&
        h.kind === 'constructor' &&
        (u && this.raise(h.start, 'Duplicate constructor in the same class'),
        (u = !0)));
  }
  return (
    (this.strict = r),
    this.next(),
    (e.body = this.finishNode(s, 'ClassBody')),
    this.finishNode(e, i ? 'ClassDeclaration' : 'ClassExpression')
  );
};
ne.parseClassElement = function (e) {
  var i = this;
  if (this.eat(C.semi)) return null;
  var r = this.startNode(),
    s = function (x, E) {
      E === void 0 && (E = !1);
      var D = i.start,
        w = i.startLoc;
      return i.eatContextual(x)
        ? i.type !== C.parenL && (!E || !i.canInsertSemicolon())
          ? !0
          : (r.key && i.unexpected(),
            (r.computed = !1),
            (r.key = i.startNodeAt(D, w)),
            (r.key.name = x),
            i.finishNode(r.key, 'Identifier'),
            !1)
        : !1;
    };
  (r.kind = 'method'), (r.static = s('static'));
  var u = this.eat(C.star),
    h = !1;
  u ||
    (this.options.ecmaVersion >= 8 && s('async', !0)
      ? ((h = !0), (u = this.options.ecmaVersion >= 9 && this.eat(C.star)))
      : s('get')
        ? (r.kind = 'get')
        : s('set') && (r.kind = 'set')),
    r.key || this.parsePropertyName(r);
  var c = r.key,
    g = !1;
  return (
    !r.computed &&
    !r.static &&
    ((c.type === 'Identifier' && c.name === 'constructor') ||
      (c.type === 'Literal' && c.value === 'constructor'))
      ? (r.kind !== 'method' &&
          this.raise(c.start, "Constructor can't have get/set modifier"),
        u && this.raise(c.start, "Constructor can't be a generator"),
        h && this.raise(c.start, "Constructor can't be an async method"),
        (r.kind = 'constructor'),
        (g = e))
      : r.static &&
        c.type === 'Identifier' &&
        c.name === 'prototype' &&
        this.raise(
          c.start,
          'Classes may not have a static property named prototype',
        ),
    this.parseClassMethod(r, u, h, g),
    r.kind === 'get' &&
      r.value.params.length !== 0 &&
      this.raiseRecoverable(r.value.start, 'getter should have no params'),
    r.kind === 'set' &&
      r.value.params.length !== 1 &&
      this.raiseRecoverable(
        r.value.start,
        'setter should have exactly one param',
      ),
    r.kind === 'set' &&
      r.value.params[0].type === 'RestElement' &&
      this.raiseRecoverable(
        r.value.params[0].start,
        'Setter cannot use rest params',
      ),
    r
  );
};
ne.parseClassMethod = function (e, i, r, s) {
  return (
    (e.value = this.parseMethod(i, r, s)),
    this.finishNode(e, 'MethodDefinition')
  );
};
ne.parseClassId = function (e, i) {
  this.type === C.name
    ? ((e.id = this.parseIdent()), i && this.checkLVal(e.id, at, !1))
    : (i === !0 && this.unexpected(), (e.id = null));
};
ne.parseClassSuper = function (e) {
  e.superClass = this.eat(C._extends) ? this.parseExprSubscripts() : null;
};
ne.parseExport = function (e, i) {
  if ((this.next(), this.eat(C.star)))
    return (
      this.options.ecmaVersion >= 11 &&
        (this.eatContextual('as')
          ? ((e.exported = this.parseIdent(!0)),
            this.checkExport(i, e.exported.name, this.lastTokStart))
          : (e.exported = null)),
      this.expectContextual('from'),
      this.type !== C.string && this.unexpected(),
      (e.source = this.parseExprAtom()),
      this.semicolon(),
      this.finishNode(e, 'ExportAllDeclaration')
    );
  if (this.eat(C._default)) {
    this.checkExport(i, 'default', this.lastTokStart);
    var r;
    if (this.type === C._function || (r = this.isAsyncFunction())) {
      var s = this.startNode();
      this.next(),
        r && this.next(),
        (e.declaration = this.parseFunction(s, Jt | rs, !1, r));
    } else if (this.type === C._class) {
      var u = this.startNode();
      e.declaration = this.parseClass(u, 'nullableID');
    } else (e.declaration = this.parseMaybeAssign()), this.semicolon();
    return this.finishNode(e, 'ExportDefaultDeclaration');
  }
  if (this.shouldParseExportStatement())
    (e.declaration = this.parseStatement(null)),
      e.declaration.type === 'VariableDeclaration'
        ? this.checkVariableExport(i, e.declaration.declarations)
        : this.checkExport(i, e.declaration.id.name, e.declaration.id.start),
      (e.specifiers = []),
      (e.source = null);
  else {
    if (
      ((e.declaration = null),
      (e.specifiers = this.parseExportSpecifiers(i)),
      this.eatContextual('from'))
    )
      this.type !== C.string && this.unexpected(),
        (e.source = this.parseExprAtom());
    else {
      for (var h = 0, c = e.specifiers; h < c.length; h += 1) {
        var g = c[h];
        this.checkUnreserved(g.local), this.checkLocalExport(g.local);
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, 'ExportNamedDeclaration');
};
ne.checkExport = function (e, i, r) {
  e &&
    (_i(e, i) && this.raiseRecoverable(r, "Duplicate export '" + i + "'"),
    (e[i] = !0));
};
ne.checkPatternExport = function (e, i) {
  var r = i.type;
  if (r === 'Identifier') this.checkExport(e, i.name, i.start);
  else if (r === 'ObjectPattern')
    for (var s = 0, u = i.properties; s < u.length; s += 1) {
      var h = u[s];
      this.checkPatternExport(e, h);
    }
  else if (r === 'ArrayPattern')
    for (var c = 0, g = i.elements; c < g.length; c += 1) {
      var x = g[c];
      x && this.checkPatternExport(e, x);
    }
  else
    r === 'Property'
      ? this.checkPatternExport(e, i.value)
      : r === 'AssignmentPattern'
        ? this.checkPatternExport(e, i.left)
        : r === 'RestElement'
          ? this.checkPatternExport(e, i.argument)
          : r === 'ParenthesizedExpression' &&
            this.checkPatternExport(e, i.expression);
};
ne.checkVariableExport = function (e, i) {
  if (e)
    for (var r = 0, s = i; r < s.length; r += 1) {
      var u = s[r];
      this.checkPatternExport(e, u.id);
    }
};
ne.shouldParseExportStatement = function () {
  return (
    this.type.keyword === 'var' ||
    this.type.keyword === 'const' ||
    this.type.keyword === 'class' ||
    this.type.keyword === 'function' ||
    this.isLet() ||
    this.isAsyncFunction()
  );
};
ne.parseExportSpecifiers = function (e) {
  var i = [],
    r = !0;
  for (this.expect(C.braceL); !this.eat(C.braceR); ) {
    if (r) r = !1;
    else if ((this.expect(C.comma), this.afterTrailingComma(C.braceR))) break;
    var s = this.startNode();
    (s.local = this.parseIdent(!0)),
      (s.exported = this.eatContextual('as') ? this.parseIdent(!0) : s.local),
      this.checkExport(e, s.exported.name, s.exported.start),
      i.push(this.finishNode(s, 'ExportSpecifier'));
  }
  return i;
};
ne.parseImport = function (e) {
  return (
    this.next(),
    this.type === C.string
      ? ((e.specifiers = uu), (e.source = this.parseExprAtom()))
      : ((e.specifiers = this.parseImportSpecifiers()),
        this.expectContextual('from'),
        (e.source =
          this.type === C.string ? this.parseExprAtom() : this.unexpected())),
    this.semicolon(),
    this.finishNode(e, 'ImportDeclaration')
  );
};
ne.parseImportSpecifiers = function () {
  var e = [],
    i = !0;
  if (this.type === C.name) {
    var r = this.startNode();
    if (
      ((r.local = this.parseIdent()),
      this.checkLVal(r.local, at),
      e.push(this.finishNode(r, 'ImportDefaultSpecifier')),
      !this.eat(C.comma))
    )
      return e;
  }
  if (this.type === C.star) {
    var s = this.startNode();
    return (
      this.next(),
      this.expectContextual('as'),
      (s.local = this.parseIdent()),
      this.checkLVal(s.local, at),
      e.push(this.finishNode(s, 'ImportNamespaceSpecifier')),
      e
    );
  }
  for (this.expect(C.braceL); !this.eat(C.braceR); ) {
    if (i) i = !1;
    else if ((this.expect(C.comma), this.afterTrailingComma(C.braceR))) break;
    var u = this.startNode();
    (u.imported = this.parseIdent(!0)),
      this.eatContextual('as')
        ? (u.local = this.parseIdent())
        : (this.checkUnreserved(u.imported), (u.local = u.imported)),
      this.checkLVal(u.local, at),
      e.push(this.finishNode(u, 'ImportSpecifier'));
  }
  return e;
};
ne.adaptDirectivePrologue = function (e) {
  for (var i = 0; i < e.length && this.isDirectiveCandidate(e[i]); ++i)
    e[i].directive = e[i].expression.raw.slice(1, -1);
};
ne.isDirectiveCandidate = function (e) {
  return (
    e.type === 'ExpressionStatement' &&
    e.expression.type === 'Literal' &&
    typeof e.expression.value == 'string' &&
    (this.input[e.start] === '"' || this.input[e.start] === "'")
  );
};
var ut = ke.prototype;
ut.toAssignable = function (e, i, r) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case 'Identifier':
        this.inAsync &&
          e.name === 'await' &&
          this.raise(
            e.start,
            "Cannot use 'await' as identifier inside an async function",
          );
        break;
      case 'ObjectPattern':
      case 'ArrayPattern':
      case 'RestElement':
        break;
      case 'ObjectExpression':
        (e.type = 'ObjectPattern'), r && this.checkPatternErrors(r, !0);
        for (var s = 0, u = e.properties; s < u.length; s += 1) {
          var h = u[s];
          this.toAssignable(h, i),
            h.type === 'RestElement' &&
              (h.argument.type === 'ArrayPattern' ||
                h.argument.type === 'ObjectPattern') &&
              this.raise(h.argument.start, 'Unexpected token');
        }
        break;
      case 'Property':
        e.kind !== 'init' &&
          this.raise(
            e.key.start,
            "Object pattern can't contain getter or setter",
          ),
          this.toAssignable(e.value, i);
        break;
      case 'ArrayExpression':
        (e.type = 'ArrayPattern'),
          r && this.checkPatternErrors(r, !0),
          this.toAssignableList(e.elements, i);
        break;
      case 'SpreadElement':
        (e.type = 'RestElement'),
          this.toAssignable(e.argument, i),
          e.argument.type === 'AssignmentPattern' &&
            this.raise(
              e.argument.start,
              'Rest elements cannot have a default value',
            );
        break;
      case 'AssignmentExpression':
        e.operator !== '=' &&
          this.raise(
            e.left.end,
            "Only '=' operator can be used for specifying default value.",
          ),
          (e.type = 'AssignmentPattern'),
          delete e.operator,
          this.toAssignable(e.left, i);
      case 'AssignmentPattern':
        break;
      case 'ParenthesizedExpression':
        this.toAssignable(e.expression, i, r);
        break;
      case 'ChainExpression':
        this.raiseRecoverable(
          e.start,
          'Optional chaining cannot appear in left-hand side',
        );
        break;
      case 'MemberExpression':
        if (!i) break;
      default:
        this.raise(e.start, 'Assigning to rvalue');
    }
  else r && this.checkPatternErrors(r, !0);
  return e;
};
ut.toAssignableList = function (e, i) {
  for (var r = e.length, s = 0; s < r; s++) {
    var u = e[s];
    u && this.toAssignable(u, i);
  }
  if (r) {
    var h = e[r - 1];
    this.options.ecmaVersion === 6 &&
      i &&
      h &&
      h.type === 'RestElement' &&
      h.argument.type !== 'Identifier' &&
      this.unexpected(h.argument.start);
  }
  return e;
};
ut.parseSpread = function (e) {
  var i = this.startNode();
  return (
    this.next(),
    (i.argument = this.parseMaybeAssign(!1, e)),
    this.finishNode(i, 'SpreadElement')
  );
};
ut.parseRestBinding = function () {
  var e = this.startNode();
  return (
    this.next(),
    this.options.ecmaVersion === 6 && this.type !== C.name && this.unexpected(),
    (e.argument = this.parseBindingAtom()),
    this.finishNode(e, 'RestElement')
  );
};
ut.parseBindingAtom = function () {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case C.bracketL:
        var e = this.startNode();
        return (
          this.next(),
          (e.elements = this.parseBindingList(C.bracketR, !0, !0)),
          this.finishNode(e, 'ArrayPattern')
        );
      case C.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
ut.parseBindingList = function (e, i, r) {
  for (var s = [], u = !0; !this.eat(e); )
    if ((u ? (u = !1) : this.expect(C.comma), i && this.type === C.comma))
      s.push(null);
    else {
      if (r && this.afterTrailingComma(e)) break;
      if (this.type === C.ellipsis) {
        var h = this.parseRestBinding();
        this.parseBindingListItem(h),
          s.push(h),
          this.type === C.comma &&
            this.raise(
              this.start,
              'Comma is not permitted after the rest element',
            ),
          this.expect(e);
        break;
      } else {
        var c = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(c), s.push(c);
      }
    }
  return s;
};
ut.parseBindingListItem = function (e) {
  return e;
};
ut.parseMaybeDefault = function (e, i, r) {
  if (
    ((r = r || this.parseBindingAtom()),
    this.options.ecmaVersion < 6 || !this.eat(C.eq))
  )
    return r;
  var s = this.startNodeAt(e, i);
  return (
    (s.left = r),
    (s.right = this.parseMaybeAssign()),
    this.finishNode(s, 'AssignmentPattern')
  );
};
ut.checkLVal = function (e, i, r) {
  switch ((i === void 0 && (i = pn), e.type)) {
    case 'Identifier':
      i === at &&
        e.name === 'let' &&
        this.raiseRecoverable(
          e.start,
          'let is disallowed as a lexically bound name',
        ),
        this.strict &&
          this.reservedWordsStrictBind.test(e.name) &&
          this.raiseRecoverable(
            e.start,
            (i ? 'Binding ' : 'Assigning to ') + e.name + ' in strict mode',
          ),
        r &&
          (_i(r, e.name) &&
            this.raiseRecoverable(e.start, 'Argument name clash'),
          (r[e.name] = !0)),
        i !== pn && i !== is && this.declareName(e.name, i, e.start);
      break;
    case 'ChainExpression':
      this.raiseRecoverable(
        e.start,
        'Optional chaining cannot appear in left-hand side',
      );
      break;
    case 'MemberExpression':
      i && this.raiseRecoverable(e.start, 'Binding member expression');
      break;
    case 'ObjectPattern':
      for (var s = 0, u = e.properties; s < u.length; s += 1) {
        var h = u[s];
        this.checkLVal(h, i, r);
      }
      break;
    case 'Property':
      this.checkLVal(e.value, i, r);
      break;
    case 'ArrayPattern':
      for (var c = 0, g = e.elements; c < g.length; c += 1) {
        var x = g[c];
        x && this.checkLVal(x, i, r);
      }
      break;
    case 'AssignmentPattern':
      this.checkLVal(e.left, i, r);
      break;
    case 'RestElement':
      this.checkLVal(e.argument, i, r);
      break;
    case 'ParenthesizedExpression':
      this.checkLVal(e.expression, i, r);
      break;
    default:
      this.raise(e.start, (i ? 'Binding' : 'Assigning to') + ' rvalue');
  }
};
var ae = ke.prototype;
ae.checkPropClash = function (e, i, r) {
  if (
    !(this.options.ecmaVersion >= 9 && e.type === 'SpreadElement') &&
    !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))
  ) {
    var s = e.key,
      u;
    switch (s.type) {
      case 'Identifier':
        u = s.name;
        break;
      case 'Literal':
        u = String(s.value);
        break;
      default:
        return;
    }
    var h = e.kind;
    if (this.options.ecmaVersion >= 6) {
      u === '__proto__' &&
        h === 'init' &&
        (i.proto &&
          (r
            ? r.doubleProto < 0 && (r.doubleProto = s.start)
            : this.raiseRecoverable(
                s.start,
                'Redefinition of __proto__ property',
              )),
        (i.proto = !0));
      return;
    }
    u = '$' + u;
    var c = i[u];
    if (c) {
      var g;
      h === 'init'
        ? (g = (this.strict && c.init) || c.get || c.set)
        : (g = c.init || c[h]),
        g && this.raiseRecoverable(s.start, 'Redefinition of property');
    } else c = i[u] = { init: !1, get: !1, set: !1 };
    c[h] = !0;
  }
};
ae.parseExpression = function (e, i) {
  var r = this.start,
    s = this.startLoc,
    u = this.parseMaybeAssign(e, i);
  if (this.type === C.comma) {
    var h = this.startNodeAt(r, s);
    for (h.expressions = [u]; this.eat(C.comma); )
      h.expressions.push(this.parseMaybeAssign(e, i));
    return this.finishNode(h, 'SequenceExpression');
  }
  return u;
};
ae.parseMaybeAssign = function (e, i, r) {
  if (this.isContextual('yield')) {
    if (this.inGenerator) return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var s = !1,
    u = -1,
    h = -1;
  i
    ? ((u = i.parenthesizedAssign),
      (h = i.trailingComma),
      (i.parenthesizedAssign = i.trailingComma = -1))
    : ((i = new Bi()), (s = !0));
  var c = this.start,
    g = this.startLoc;
  (this.type === C.parenL || this.type === C.name) &&
    (this.potentialArrowAt = this.start);
  var x = this.parseMaybeConditional(e, i);
  if ((r && (x = r.call(this, x, c, g)), this.type.isAssign)) {
    var E = this.startNodeAt(c, g);
    return (
      (E.operator = this.value),
      (E.left = this.type === C.eq ? this.toAssignable(x, !1, i) : x),
      s || (i.parenthesizedAssign = i.trailingComma = i.doubleProto = -1),
      i.shorthandAssign >= E.left.start && (i.shorthandAssign = -1),
      this.checkLVal(x),
      this.next(),
      (E.right = this.parseMaybeAssign(e)),
      this.finishNode(E, 'AssignmentExpression')
    );
  } else s && this.checkExpressionErrors(i, !0);
  return (
    u > -1 && (i.parenthesizedAssign = u), h > -1 && (i.trailingComma = h), x
  );
};
ae.parseMaybeConditional = function (e, i) {
  var r = this.start,
    s = this.startLoc,
    u = this.parseExprOps(e, i);
  if (this.checkExpressionErrors(i)) return u;
  if (this.eat(C.question)) {
    var h = this.startNodeAt(r, s);
    return (
      (h.test = u),
      (h.consequent = this.parseMaybeAssign()),
      this.expect(C.colon),
      (h.alternate = this.parseMaybeAssign(e)),
      this.finishNode(h, 'ConditionalExpression')
    );
  }
  return u;
};
ae.parseExprOps = function (e, i) {
  var r = this.start,
    s = this.startLoc,
    u = this.parseMaybeUnary(i, !1);
  return this.checkExpressionErrors(i) ||
    (u.start === r && u.type === 'ArrowFunctionExpression')
    ? u
    : this.parseExprOp(u, r, s, -1, e);
};
ae.parseExprOp = function (e, i, r, s, u) {
  var h = this.type.binop;
  if (h != null && (!u || this.type !== C._in) && h > s) {
    var c = this.type === C.logicalOR || this.type === C.logicalAND,
      g = this.type === C.coalesce;
    g && (h = C.logicalAND.binop);
    var x = this.value;
    this.next();
    var E = this.start,
      D = this.startLoc,
      w = this.parseExprOp(this.parseMaybeUnary(null, !1), E, D, h, u),
      b = this.buildBinary(i, r, e, w, x, c || g);
    return (
      ((c && this.type === C.coalesce) ||
        (g && (this.type === C.logicalOR || this.type === C.logicalAND))) &&
        this.raiseRecoverable(
          this.start,
          'Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses',
        ),
      this.parseExprOp(b, i, r, s, u)
    );
  }
  return e;
};
ae.buildBinary = function (e, i, r, s, u, h) {
  var c = this.startNodeAt(e, i);
  return (
    (c.left = r),
    (c.operator = u),
    (c.right = s),
    this.finishNode(c, h ? 'LogicalExpression' : 'BinaryExpression')
  );
};
ae.parseMaybeUnary = function (e, i) {
  var r = this.start,
    s = this.startLoc,
    u;
  if (
    this.isContextual('await') &&
    (this.inAsync ||
      (!this.inFunction && this.options.allowAwaitOutsideFunction))
  )
    (u = this.parseAwait()), (i = !0);
  else if (this.type.prefix) {
    var h = this.startNode(),
      c = this.type === C.incDec;
    (h.operator = this.value),
      (h.prefix = !0),
      this.next(),
      (h.argument = this.parseMaybeUnary(null, !0)),
      this.checkExpressionErrors(e, !0),
      c
        ? this.checkLVal(h.argument)
        : this.strict &&
            h.operator === 'delete' &&
            h.argument.type === 'Identifier'
          ? this.raiseRecoverable(
              h.start,
              'Deleting local variable in strict mode',
            )
          : (i = !0),
      (u = this.finishNode(h, c ? 'UpdateExpression' : 'UnaryExpression'));
  } else {
    if (((u = this.parseExprSubscripts(e)), this.checkExpressionErrors(e)))
      return u;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var g = this.startNodeAt(r, s);
      (g.operator = this.value),
        (g.prefix = !1),
        (g.argument = u),
        this.checkLVal(u),
        this.next(),
        (u = this.finishNode(g, 'UpdateExpression'));
    }
  }
  return !i && this.eat(C.starstar)
    ? this.buildBinary(r, s, u, this.parseMaybeUnary(null, !1), '**', !1)
    : u;
};
ae.parseExprSubscripts = function (e) {
  var i = this.start,
    r = this.startLoc,
    s = this.parseExprAtom(e);
  if (
    s.type === 'ArrowFunctionExpression' &&
    this.input.slice(this.lastTokStart, this.lastTokEnd) !== ')'
  )
    return s;
  var u = this.parseSubscripts(s, i, r);
  return (
    e &&
      u.type === 'MemberExpression' &&
      (e.parenthesizedAssign >= u.start && (e.parenthesizedAssign = -1),
      e.parenthesizedBind >= u.start && (e.parenthesizedBind = -1)),
    u
  );
};
ae.parseSubscripts = function (e, i, r, s) {
  for (
    var u =
        this.options.ecmaVersion >= 8 &&
        e.type === 'Identifier' &&
        e.name === 'async' &&
        this.lastTokEnd === e.end &&
        !this.canInsertSemicolon() &&
        e.end - e.start === 5 &&
        this.potentialArrowAt === e.start,
      h = !1;
    ;

  ) {
    var c = this.parseSubscript(e, i, r, s, u, h);
    if (
      (c.optional && (h = !0), c === e || c.type === 'ArrowFunctionExpression')
    ) {
      if (h) {
        var g = this.startNodeAt(i, r);
        (g.expression = c), (c = this.finishNode(g, 'ChainExpression'));
      }
      return c;
    }
    e = c;
  }
};
ae.parseSubscript = function (e, i, r, s, u, h) {
  var c = this.options.ecmaVersion >= 11,
    g = c && this.eat(C.questionDot);
  s &&
    g &&
    this.raise(
      this.lastTokStart,
      'Optional chaining cannot appear in the callee of new expressions',
    );
  var x = this.eat(C.bracketL);
  if (
    x ||
    (g && this.type !== C.parenL && this.type !== C.backQuote) ||
    this.eat(C.dot)
  ) {
    var E = this.startNodeAt(i, r);
    (E.object = e),
      (E.property = x
        ? this.parseExpression()
        : this.parseIdent(this.options.allowReserved !== 'never')),
      (E.computed = !!x),
      x && this.expect(C.bracketR),
      c && (E.optional = g),
      (e = this.finishNode(E, 'MemberExpression'));
  } else if (!s && this.eat(C.parenL)) {
    var D = new Bi(),
      w = this.yieldPos,
      b = this.awaitPos,
      S = this.awaitIdentPos;
    (this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0);
    var k = this.parseExprList(C.parenR, this.options.ecmaVersion >= 8, !1, D);
    if (u && !g && !this.canInsertSemicolon() && this.eat(C.arrow))
      return (
        this.checkPatternErrors(D, !1),
        this.checkYieldAwaitInDefaultParams(),
        this.awaitIdentPos > 0 &&
          this.raise(
            this.awaitIdentPos,
            "Cannot use 'await' as identifier inside an async function",
          ),
        (this.yieldPos = w),
        (this.awaitPos = b),
        (this.awaitIdentPos = S),
        this.parseArrowExpression(this.startNodeAt(i, r), k, !0)
      );
    this.checkExpressionErrors(D, !0),
      (this.yieldPos = w || this.yieldPos),
      (this.awaitPos = b || this.awaitPos),
      (this.awaitIdentPos = S || this.awaitIdentPos);
    var F = this.startNodeAt(i, r);
    (F.callee = e),
      (F.arguments = k),
      c && (F.optional = g),
      (e = this.finishNode(F, 'CallExpression'));
  } else if (this.type === C.backQuote) {
    (g || h) &&
      this.raise(
        this.start,
        'Optional chaining cannot appear in the tag of tagged template expressions',
      );
    var _ = this.startNodeAt(i, r);
    (_.tag = e),
      (_.quasi = this.parseTemplate({ isTagged: !0 })),
      (e = this.finishNode(_, 'TaggedTemplateExpression'));
  }
  return e;
};
ae.parseExprAtom = function (e) {
  this.type === C.slash && this.readRegexp();
  var i,
    r = this.potentialArrowAt === this.start;
  switch (this.type) {
    case C._super:
      return (
        this.allowSuper ||
          this.raise(this.start, "'super' keyword outside a method"),
        (i = this.startNode()),
        this.next(),
        this.type === C.parenL &&
          !this.allowDirectSuper &&
          this.raise(i.start, 'super() call outside constructor of a subclass'),
        this.type !== C.dot &&
          this.type !== C.bracketL &&
          this.type !== C.parenL &&
          this.unexpected(),
        this.finishNode(i, 'Super')
      );
    case C._this:
      return (
        (i = this.startNode()),
        this.next(),
        this.finishNode(i, 'ThisExpression')
      );
    case C.name:
      var s = this.start,
        u = this.startLoc,
        h = this.containsEsc,
        c = this.parseIdent(!1);
      if (
        this.options.ecmaVersion >= 8 &&
        !h &&
        c.name === 'async' &&
        !this.canInsertSemicolon() &&
        this.eat(C._function)
      )
        return this.parseFunction(this.startNodeAt(s, u), 0, !1, !0);
      if (r && !this.canInsertSemicolon()) {
        if (this.eat(C.arrow))
          return this.parseArrowExpression(this.startNodeAt(s, u), [c], !1);
        if (
          this.options.ecmaVersion >= 8 &&
          c.name === 'async' &&
          this.type === C.name &&
          !h
        )
          return (
            (c = this.parseIdent(!1)),
            (this.canInsertSemicolon() || !this.eat(C.arrow)) &&
              this.unexpected(),
            this.parseArrowExpression(this.startNodeAt(s, u), [c], !0)
          );
      }
      return c;
    case C.regexp:
      var g = this.value;
      return (
        (i = this.parseLiteral(g.value)),
        (i.regex = { pattern: g.pattern, flags: g.flags }),
        i
      );
    case C.num:
    case C.string:
      return this.parseLiteral(this.value);
    case C._null:
    case C._true:
    case C._false:
      return (
        (i = this.startNode()),
        (i.value = this.type === C._null ? null : this.type === C._true),
        (i.raw = this.type.keyword),
        this.next(),
        this.finishNode(i, 'Literal')
      );
    case C.parenL:
      var x = this.start,
        E = this.parseParenAndDistinguishExpression(r);
      return (
        e &&
          (e.parenthesizedAssign < 0 &&
            !this.isSimpleAssignTarget(E) &&
            (e.parenthesizedAssign = x),
          e.parenthesizedBind < 0 && (e.parenthesizedBind = x)),
        E
      );
    case C.bracketL:
      return (
        (i = this.startNode()),
        this.next(),
        (i.elements = this.parseExprList(C.bracketR, !0, !0, e)),
        this.finishNode(i, 'ArrayExpression')
      );
    case C.braceL:
      return this.parseObj(!1, e);
    case C._function:
      return (i = this.startNode()), this.next(), this.parseFunction(i, 0);
    case C._class:
      return this.parseClass(this.startNode(), !1);
    case C._new:
      return this.parseNew();
    case C.backQuote:
      return this.parseTemplate();
    case C._import:
      return this.options.ecmaVersion >= 11
        ? this.parseExprImport()
        : this.unexpected();
    default:
      this.unexpected();
  }
};
ae.parseExprImport = function () {
  var e = this.startNode();
  this.containsEsc &&
    this.raiseRecoverable(this.start, 'Escape sequence in keyword import');
  var i = this.parseIdent(!0);
  switch (this.type) {
    case C.parenL:
      return this.parseDynamicImport(e);
    case C.dot:
      return (e.meta = i), this.parseImportMeta(e);
    default:
      this.unexpected();
  }
};
ae.parseDynamicImport = function (e) {
  if (
    (this.next(), (e.source = this.parseMaybeAssign()), !this.eat(C.parenR))
  ) {
    var i = this.start;
    this.eat(C.comma) && this.eat(C.parenR)
      ? this.raiseRecoverable(i, 'Trailing comma is not allowed in import()')
      : this.unexpected(i);
  }
  return this.finishNode(e, 'ImportExpression');
};
ae.parseImportMeta = function (e) {
  this.next();
  var i = this.containsEsc;
  return (
    (e.property = this.parseIdent(!0)),
    e.property.name !== 'meta' &&
      this.raiseRecoverable(
        e.property.start,
        "The only valid meta property for import is 'import.meta'",
      ),
    i &&
      this.raiseRecoverable(
        e.start,
        "'import.meta' must not contain escaped characters",
      ),
    this.options.sourceType !== 'module' &&
      this.raiseRecoverable(
        e.start,
        "Cannot use 'import.meta' outside a module",
      ),
    this.finishNode(e, 'MetaProperty')
  );
};
ae.parseLiteral = function (e) {
  var i = this.startNode();
  return (
    (i.value = e),
    (i.raw = this.input.slice(this.start, this.end)),
    i.raw.charCodeAt(i.raw.length - 1) === 110 &&
      (i.bigint = i.raw.slice(0, -1).replace(/_/g, '')),
    this.next(),
    this.finishNode(i, 'Literal')
  );
};
ae.parseParenExpression = function () {
  this.expect(C.parenL);
  var e = this.parseExpression();
  return this.expect(C.parenR), e;
};
ae.parseParenAndDistinguishExpression = function (e) {
  var i = this.start,
    r = this.startLoc,
    s,
    u = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var h = this.start,
      c = this.startLoc,
      g = [],
      x = !0,
      E = !1,
      D = new Bi(),
      w = this.yieldPos,
      b = this.awaitPos,
      S;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== C.parenR; )
      if (
        (x ? (x = !1) : this.expect(C.comma),
        u && this.afterTrailingComma(C.parenR, !0))
      ) {
        E = !0;
        break;
      } else if (this.type === C.ellipsis) {
        (S = this.start),
          g.push(this.parseParenItem(this.parseRestBinding())),
          this.type === C.comma &&
            this.raise(
              this.start,
              'Comma is not permitted after the rest element',
            );
        break;
      } else g.push(this.parseMaybeAssign(!1, D, this.parseParenItem));
    var k = this.start,
      F = this.startLoc;
    if (
      (this.expect(C.parenR),
      e && !this.canInsertSemicolon() && this.eat(C.arrow))
    )
      return (
        this.checkPatternErrors(D, !1),
        this.checkYieldAwaitInDefaultParams(),
        (this.yieldPos = w),
        (this.awaitPos = b),
        this.parseParenArrowList(i, r, g)
      );
    (!g.length || E) && this.unexpected(this.lastTokStart),
      S && this.unexpected(S),
      this.checkExpressionErrors(D, !0),
      (this.yieldPos = w || this.yieldPos),
      (this.awaitPos = b || this.awaitPos),
      g.length > 1
        ? ((s = this.startNodeAt(h, c)),
          (s.expressions = g),
          this.finishNodeAt(s, 'SequenceExpression', k, F))
        : (s = g[0]);
  } else s = this.parseParenExpression();
  if (this.options.preserveParens) {
    var _ = this.startNodeAt(i, r);
    return (_.expression = s), this.finishNode(_, 'ParenthesizedExpression');
  } else return s;
};
ae.parseParenItem = function (e) {
  return e;
};
ae.parseParenArrowList = function (e, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, i), r);
};
var ou = [];
ae.parseNew = function () {
  this.containsEsc &&
    this.raiseRecoverable(this.start, 'Escape sequence in keyword new');
  var e = this.startNode(),
    i = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(C.dot)) {
    e.meta = i;
    var r = this.containsEsc;
    return (
      (e.property = this.parseIdent(!0)),
      e.property.name !== 'target' &&
        this.raiseRecoverable(
          e.property.start,
          "The only valid meta property for new is 'new.target'",
        ),
      r &&
        this.raiseRecoverable(
          e.start,
          "'new.target' must not contain escaped characters",
        ),
      this.inNonArrowFunction() ||
        this.raiseRecoverable(
          e.start,
          "'new.target' can only be used in functions",
        ),
      this.finishNode(e, 'MetaProperty')
    );
  }
  var s = this.start,
    u = this.startLoc,
    h = this.type === C._import;
  return (
    (e.callee = this.parseSubscripts(this.parseExprAtom(), s, u, !0)),
    h &&
      e.callee.type === 'ImportExpression' &&
      this.raise(s, 'Cannot use new with import()'),
    this.eat(C.parenL)
      ? (e.arguments = this.parseExprList(
          C.parenR,
          this.options.ecmaVersion >= 8,
          !1,
        ))
      : (e.arguments = ou),
    this.finishNode(e, 'NewExpression')
  );
};
ae.parseTemplateElement = function (e) {
  var i = e.isTagged,
    r = this.startNode();
  return (
    this.type === C.invalidTemplate
      ? (i ||
          this.raiseRecoverable(
            this.start,
            'Bad escape sequence in untagged template literal',
          ),
        (r.value = { raw: this.value, cooked: null }))
      : (r.value = {
          raw: this.input.slice(this.start, this.end).replace(
            /\r\n?/g,
            `
`,
          ),
          cooked: this.value,
        }),
    this.next(),
    (r.tail = this.type === C.backQuote),
    this.finishNode(r, 'TemplateElement')
  );
};
ae.parseTemplate = function (e) {
  e === void 0 && (e = {});
  var i = e.isTagged;
  i === void 0 && (i = !1);
  var r = this.startNode();
  this.next(), (r.expressions = []);
  var s = this.parseTemplateElement({ isTagged: i });
  for (r.quasis = [s]; !s.tail; )
    this.type === C.eof &&
      this.raise(this.pos, 'Unterminated template literal'),
      this.expect(C.dollarBraceL),
      r.expressions.push(this.parseExpression()),
      this.expect(C.braceR),
      r.quasis.push((s = this.parseTemplateElement({ isTagged: i })));
  return this.next(), this.finishNode(r, 'TemplateLiteral');
};
ae.isAsyncProp = function (e) {
  return (
    !e.computed &&
    e.key.type === 'Identifier' &&
    e.key.name === 'async' &&
    (this.type === C.name ||
      this.type === C.num ||
      this.type === C.string ||
      this.type === C.bracketL ||
      this.type.keyword ||
      (this.options.ecmaVersion >= 9 && this.type === C.star)) &&
    !Xe.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
ae.parseObj = function (e, i) {
  var r = this.startNode(),
    s = !0,
    u = {};
  for (r.properties = [], this.next(); !this.eat(C.braceR); ) {
    if (s) s = !1;
    else if (
      (this.expect(C.comma),
      this.options.ecmaVersion >= 5 && this.afterTrailingComma(C.braceR))
    )
      break;
    var h = this.parseProperty(e, i);
    e || this.checkPropClash(h, u, i), r.properties.push(h);
  }
  return this.finishNode(r, e ? 'ObjectPattern' : 'ObjectExpression');
};
ae.parseProperty = function (e, i) {
  var r = this.startNode(),
    s,
    u,
    h,
    c;
  if (this.options.ecmaVersion >= 9 && this.eat(C.ellipsis))
    return e
      ? ((r.argument = this.parseIdent(!1)),
        this.type === C.comma &&
          this.raise(
            this.start,
            'Comma is not permitted after the rest element',
          ),
        this.finishNode(r, 'RestElement'))
      : (this.type === C.parenL &&
          i &&
          (i.parenthesizedAssign < 0 && (i.parenthesizedAssign = this.start),
          i.parenthesizedBind < 0 && (i.parenthesizedBind = this.start)),
        (r.argument = this.parseMaybeAssign(!1, i)),
        this.type === C.comma &&
          i &&
          i.trailingComma < 0 &&
          (i.trailingComma = this.start),
        this.finishNode(r, 'SpreadElement'));
  this.options.ecmaVersion >= 6 &&
    ((r.method = !1),
    (r.shorthand = !1),
    (e || i) && ((h = this.start), (c = this.startLoc)),
    e || (s = this.eat(C.star)));
  var g = this.containsEsc;
  return (
    this.parsePropertyName(r),
    !e && !g && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(r)
      ? ((u = !0),
        (s = this.options.ecmaVersion >= 9 && this.eat(C.star)),
        this.parsePropertyName(r, i))
      : (u = !1),
    this.parsePropertyValue(r, e, s, u, h, c, i, g),
    this.finishNode(r, 'Property')
  );
};
ae.parsePropertyValue = function (e, i, r, s, u, h, c, g) {
  if (
    ((r || s) && this.type === C.colon && this.unexpected(), this.eat(C.colon))
  )
    (e.value = i
      ? this.parseMaybeDefault(this.start, this.startLoc)
      : this.parseMaybeAssign(!1, c)),
      (e.kind = 'init');
  else if (this.options.ecmaVersion >= 6 && this.type === C.parenL)
    i && this.unexpected(),
      (e.kind = 'init'),
      (e.method = !0),
      (e.value = this.parseMethod(r, s));
  else if (
    !i &&
    !g &&
    this.options.ecmaVersion >= 5 &&
    !e.computed &&
    e.key.type === 'Identifier' &&
    (e.key.name === 'get' || e.key.name === 'set') &&
    this.type !== C.comma &&
    this.type !== C.braceR &&
    this.type !== C.eq
  ) {
    (r || s) && this.unexpected(),
      (e.kind = e.key.name),
      this.parsePropertyName(e),
      (e.value = this.parseMethod(!1));
    var x = e.kind === 'get' ? 0 : 1;
    if (e.value.params.length !== x) {
      var E = e.value.start;
      e.kind === 'get'
        ? this.raiseRecoverable(E, 'getter should have no params')
        : this.raiseRecoverable(E, 'setter should have exactly one param');
    } else
      e.kind === 'set' &&
        e.value.params[0].type === 'RestElement' &&
        this.raiseRecoverable(
          e.value.params[0].start,
          'Setter cannot use rest params',
        );
  } else
    this.options.ecmaVersion >= 6 && !e.computed && e.key.type === 'Identifier'
      ? ((r || s) && this.unexpected(),
        this.checkUnreserved(e.key),
        e.key.name === 'await' &&
          !this.awaitIdentPos &&
          (this.awaitIdentPos = u),
        (e.kind = 'init'),
        i
          ? (e.value = this.parseMaybeDefault(u, h, e.key))
          : this.type === C.eq && c
            ? (c.shorthandAssign < 0 && (c.shorthandAssign = this.start),
              (e.value = this.parseMaybeDefault(u, h, e.key)))
            : (e.value = e.key),
        (e.shorthand = !0))
      : this.unexpected();
};
ae.parsePropertyName = function (e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(C.bracketL))
      return (
        (e.computed = !0),
        (e.key = this.parseMaybeAssign()),
        this.expect(C.bracketR),
        e.key
      );
    e.computed = !1;
  }
  return (e.key =
    this.type === C.num || this.type === C.string
      ? this.parseExprAtom()
      : this.parseIdent(this.options.allowReserved !== 'never'));
};
ae.initFunction = function (e) {
  (e.id = null),
    this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1),
    this.options.ecmaVersion >= 8 && (e.async = !1);
};
ae.parseMethod = function (e, i, r) {
  var s = this.startNode(),
    u = this.yieldPos,
    h = this.awaitPos,
    c = this.awaitIdentPos;
  return (
    this.initFunction(s),
    this.options.ecmaVersion >= 6 && (s.generator = e),
    this.options.ecmaVersion >= 8 && (s.async = !!i),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(gr(i, s.generator) | Yn | (r ? Zn : 0)),
    this.expect(C.parenL),
    (s.params = this.parseBindingList(
      C.parenR,
      !1,
      this.options.ecmaVersion >= 8,
    )),
    this.checkYieldAwaitInDefaultParams(),
    this.parseFunctionBody(s, !1, !0),
    (this.yieldPos = u),
    (this.awaitPos = h),
    (this.awaitIdentPos = c),
    this.finishNode(s, 'FunctionExpression')
  );
};
ae.parseArrowExpression = function (e, i, r) {
  var s = this.yieldPos,
    u = this.awaitPos,
    h = this.awaitIdentPos;
  return (
    this.enterScope(gr(r, !1) | Jn),
    this.initFunction(e),
    this.options.ecmaVersion >= 8 && (e.async = !!r),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    (e.params = this.toAssignableList(i, !0)),
    this.parseFunctionBody(e, !0, !1),
    (this.yieldPos = s),
    (this.awaitPos = u),
    (this.awaitIdentPos = h),
    this.finishNode(e, 'ArrowFunctionExpression')
  );
};
ae.parseFunctionBody = function (e, i, r) {
  var s = i && this.type !== C.braceL,
    u = this.strict,
    h = !1;
  if (s)
    (e.body = this.parseMaybeAssign()),
      (e.expression = !0),
      this.checkParams(e, !1);
  else {
    var c = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!u || c) &&
      ((h = this.strictDirective(this.end)),
      h &&
        c &&
        this.raiseRecoverable(
          e.start,
          "Illegal 'use strict' directive in function with non-simple parameter list",
        ));
    var g = this.labels;
    (this.labels = []),
      h && (this.strict = !0),
      this.checkParams(
        e,
        !u && !h && !i && !r && this.isSimpleParamList(e.params),
      ),
      this.strict && e.id && this.checkLVal(e.id, is),
      (e.body = this.parseBlock(!1, void 0, h && !u)),
      (e.expression = !1),
      this.adaptDirectivePrologue(e.body.body),
      (this.labels = g);
  }
  this.exitScope();
};
ae.isSimpleParamList = function (e) {
  for (var i = 0, r = e; i < r.length; i += 1) {
    var s = r[i];
    if (s.type !== 'Identifier') return !1;
  }
  return !0;
};
ae.checkParams = function (e, i) {
  for (var r = {}, s = 0, u = e.params; s < u.length; s += 1) {
    var h = u[s];
    this.checkLVal(h, xr, i ? null : r);
  }
};
ae.parseExprList = function (e, i, r, s) {
  for (var u = [], h = !0; !this.eat(e); ) {
    if (h) h = !1;
    else if ((this.expect(C.comma), i && this.afterTrailingComma(e))) break;
    var c = void 0;
    r && this.type === C.comma
      ? (c = null)
      : this.type === C.ellipsis
        ? ((c = this.parseSpread(s)),
          s &&
            this.type === C.comma &&
            s.trailingComma < 0 &&
            (s.trailingComma = this.start))
        : (c = this.parseMaybeAssign(!1, s)),
      u.push(c);
  }
  return u;
};
ae.checkUnreserved = function (e) {
  var i = e.start,
    r = e.end,
    s = e.name;
  if (
    (this.inGenerator &&
      s === 'yield' &&
      this.raiseRecoverable(
        i,
        "Cannot use 'yield' as identifier inside a generator",
      ),
    this.inAsync &&
      s === 'await' &&
      this.raiseRecoverable(
        i,
        "Cannot use 'await' as identifier inside an async function",
      ),
    this.keywords.test(s) && this.raise(i, "Unexpected keyword '" + s + "'"),
    !(
      this.options.ecmaVersion < 6 &&
      this.input.slice(i, r).indexOf('\\') !== -1
    ))
  ) {
    var u = this.strict ? this.reservedWordsStrict : this.reservedWords;
    u.test(s) &&
      (!this.inAsync &&
        s === 'await' &&
        this.raiseRecoverable(
          i,
          "Cannot use keyword 'await' outside an async function",
        ),
      this.raiseRecoverable(i, "The keyword '" + s + "' is reserved"));
  }
};
ae.parseIdent = function (e, i) {
  var r = this.startNode();
  return (
    this.type === C.name
      ? (r.name = this.value)
      : this.type.keyword
        ? ((r.name = this.type.keyword),
          (r.name === 'class' || r.name === 'function') &&
            (this.lastTokEnd !== this.lastTokStart + 1 ||
              this.input.charCodeAt(this.lastTokStart) !== 46) &&
            this.context.pop())
        : this.unexpected(),
    this.next(!!e),
    this.finishNode(r, 'Identifier'),
    e ||
      (this.checkUnreserved(r),
      r.name === 'await' &&
        !this.awaitIdentPos &&
        (this.awaitIdentPos = r.start)),
    r
  );
};
ae.parseYield = function (e) {
  this.yieldPos || (this.yieldPos = this.start);
  var i = this.startNode();
  return (
    this.next(),
    this.type === C.semi ||
    this.canInsertSemicolon() ||
    (this.type !== C.star && !this.type.startsExpr)
      ? ((i.delegate = !1), (i.argument = null))
      : ((i.delegate = this.eat(C.star)),
        (i.argument = this.parseMaybeAssign(e))),
    this.finishNode(i, 'YieldExpression')
  );
};
ae.parseAwait = function () {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return (
    this.next(),
    (e.argument = this.parseMaybeUnary(null, !1)),
    this.finishNode(e, 'AwaitExpression')
  );
};
var Ei = ke.prototype;
Ei.raise = function (e, i) {
  var r = Qn(this.input, e);
  i += ' (' + r.line + ':' + r.column + ')';
  var s = new SyntaxError(i);
  throw ((s.pos = e), (s.loc = r), (s.raisedAt = this.pos), s);
};
Ei.raiseRecoverable = Ei.raise;
Ei.curPosition = function () {
  if (this.options.locations)
    return new Zt(this.curLine, this.pos - this.lineStart);
};
var xt = ke.prototype,
  lu = function (i) {
    (this.flags = i),
      (this.var = []),
      (this.lexical = []),
      (this.functions = []);
  };
xt.enterScope = function (e) {
  this.scopeStack.push(new lu(e));
};
xt.exitScope = function () {
  this.scopeStack.pop();
};
xt.treatFunctionsAsVarInScope = function (e) {
  return e.flags & si || (!this.inModule && e.flags & ei);
};
xt.declareName = function (e, i, r) {
  var s = !1;
  if (i === at) {
    var u = this.currentScope();
    (s =
      u.lexical.indexOf(e) > -1 ||
      u.functions.indexOf(e) > -1 ||
      u.var.indexOf(e) > -1),
      u.lexical.push(e),
      this.inModule && u.flags & ei && delete this.undefinedExports[e];
  } else if (i === ts) {
    var h = this.currentScope();
    h.lexical.push(e);
  } else if (i === es) {
    var c = this.currentScope();
    this.treatFunctionsAsVar
      ? (s = c.lexical.indexOf(e) > -1)
      : (s = c.lexical.indexOf(e) > -1 || c.var.indexOf(e) > -1),
      c.functions.push(e);
  } else
    for (var g = this.scopeStack.length - 1; g >= 0; --g) {
      var x = this.scopeStack[g];
      if (
        (x.lexical.indexOf(e) > -1 && !(x.flags & $n && x.lexical[0] === e)) ||
        (!this.treatFunctionsAsVarInScope(x) && x.functions.indexOf(e) > -1)
      ) {
        s = !0;
        break;
      }
      if (
        (x.var.push(e),
        this.inModule && x.flags & ei && delete this.undefinedExports[e],
        x.flags & mr)
      )
        break;
    }
  s &&
    this.raiseRecoverable(
      r,
      "Identifier '" + e + "' has already been declared",
    );
};
xt.checkLocalExport = function (e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 &&
    this.scopeStack[0].var.indexOf(e.name) === -1 &&
    (this.undefinedExports[e.name] = e);
};
xt.currentScope = function () {
  return this.scopeStack[this.scopeStack.length - 1];
};
xt.currentVarScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var i = this.scopeStack[e];
    if (i.flags & mr) return i;
  }
};
xt.currentThisScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var i = this.scopeStack[e];
    if (i.flags & mr && !(i.flags & Jn)) return i;
  }
};
var vr = function (i, r, s) {
    (this.type = ''),
      (this.start = r),
      (this.end = 0),
      i.options.locations && (this.loc = new wi(i, s)),
      i.options.directSourceFile &&
        (this.sourceFile = i.options.directSourceFile),
      i.options.ranges && (this.range = [r, 0]);
  },
  ki = ke.prototype;
ki.startNode = function () {
  return new vr(this, this.start, this.startLoc);
};
ki.startNodeAt = function (e, i) {
  return new vr(this, e, i);
};
function ns(e, i, r, s) {
  return (
    (e.type = i),
    (e.end = r),
    this.options.locations && (e.loc.end = s),
    this.options.ranges && (e.range[1] = r),
    e
  );
}
ki.finishNode = function (e, i) {
  return ns.call(this, e, i, this.lastTokEnd, this.lastTokEndLoc);
};
ki.finishNodeAt = function (e, i, r, s) {
  return ns.call(this, e, i, r, s);
};
var Ye = function (i, r, s, u, h) {
    (this.token = i),
      (this.isExpr = !!r),
      (this.preserveSpace = !!s),
      (this.override = u),
      (this.generator = !!h);
  },
  we = {
    b_stat: new Ye('{', !1),
    b_expr: new Ye('{', !0),
    b_tmpl: new Ye('${', !1),
    p_stat: new Ye('(', !1),
    p_expr: new Ye('(', !0),
    q_tmpl: new Ye('`', !0, !0, function (e) {
      return e.tryReadTemplateToken();
    }),
    f_stat: new Ye('function', !1),
    f_expr: new Ye('function', !0),
    f_expr_gen: new Ye('function', !0, !1, null, !0),
    f_gen: new Ye('function', !1, !1, null, !0),
  },
  Ii = ke.prototype;
Ii.initialContext = function () {
  return [we.b_stat];
};
Ii.braceIsBlock = function (e) {
  var i = this.curContext();
  return i === we.f_expr || i === we.f_stat
    ? !0
    : e === C.colon && (i === we.b_stat || i === we.b_expr)
      ? !i.isExpr
      : e === C._return || (e === C.name && this.exprAllowed)
        ? Xe.test(this.input.slice(this.lastTokEnd, this.start))
        : e === C._else ||
            e === C.semi ||
            e === C.eof ||
            e === C.parenR ||
            e === C.arrow
          ? !0
          : e === C.braceL
            ? i === we.b_stat
            : e === C._var || e === C._const || e === C.name
              ? !1
              : !this.exprAllowed;
};
Ii.inGeneratorContext = function () {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var i = this.context[e];
    if (i.token === 'function') return i.generator;
  }
  return !1;
};
Ii.updateContext = function (e) {
  var i,
    r = this.type;
  r.keyword && e === C.dot
    ? (this.exprAllowed = !1)
    : (i = r.updateContext)
      ? i.call(this, e)
      : (this.exprAllowed = r.beforeExpr);
};
C.parenR.updateContext = C.braceR.updateContext = function () {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === we.b_stat &&
    this.curContext().token === 'function' &&
    (e = this.context.pop()),
    (this.exprAllowed = !e.isExpr);
};
C.braceL.updateContext = function (e) {
  this.context.push(this.braceIsBlock(e) ? we.b_stat : we.b_expr),
    (this.exprAllowed = !0);
};
C.dollarBraceL.updateContext = function () {
  this.context.push(we.b_tmpl), (this.exprAllowed = !0);
};
C.parenL.updateContext = function (e) {
  var i = e === C._if || e === C._for || e === C._with || e === C._while;
  this.context.push(i ? we.p_stat : we.p_expr), (this.exprAllowed = !0);
};
C.incDec.updateContext = function () {};
C._function.updateContext = C._class.updateContext = function (e) {
  e.beforeExpr &&
  e !== C.semi &&
  e !== C._else &&
  !(
    e === C._return && Xe.test(this.input.slice(this.lastTokEnd, this.start))
  ) &&
  !((e === C.colon || e === C.braceL) && this.curContext() === we.b_stat)
    ? this.context.push(we.f_expr)
    : this.context.push(we.f_stat),
    (this.exprAllowed = !1);
};
C.backQuote.updateContext = function () {
  this.curContext() === we.q_tmpl
    ? this.context.pop()
    : this.context.push(we.q_tmpl),
    (this.exprAllowed = !1);
};
C.star.updateContext = function (e) {
  if (e === C._function) {
    var i = this.context.length - 1;
    this.context[i] === we.f_expr
      ? (this.context[i] = we.f_expr_gen)
      : (this.context[i] = we.f_gen);
  }
  this.exprAllowed = !0;
};
C.name.updateContext = function (e) {
  var i = !1;
  this.options.ecmaVersion >= 6 &&
    e !== C.dot &&
    ((this.value === 'of' && !this.exprAllowed) ||
      (this.value === 'yield' && this.inGeneratorContext())) &&
    (i = !0),
    (this.exprAllowed = i);
};
var ss =
    'ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS',
  as = ss + ' Extended_Pictographic',
  hu = as,
  cu = { 9: ss, 10: as, 11: hu },
  dn =
    'Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu',
  us =
    'Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb',
  os =
    us +
    ' Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd',
  fu =
    os +
    ' Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho',
  pu = { 9: us, 10: os, 11: fu },
  ls = {};
function Ar(e) {
  var i = (ls[e] = {
    binary: Dt(cu[e] + ' ' + dn),
    nonBinary: { General_Category: Dt(dn), Script: Dt(pu[e]) },
  });
  (i.nonBinary.Script_Extensions = i.nonBinary.Script),
    (i.nonBinary.gc = i.nonBinary.General_Category),
    (i.nonBinary.sc = i.nonBinary.Script),
    (i.nonBinary.scx = i.nonBinary.Script_Extensions);
}
Ar(9);
Ar(10);
Ar(11);
var Z = ke.prototype,
  ot = function (i) {
    (this.parser = i),
      (this.validFlags =
        'gim' +
        (i.options.ecmaVersion >= 6 ? 'uy' : '') +
        (i.options.ecmaVersion >= 9 ? 's' : '')),
      (this.unicodeProperties =
        ls[i.options.ecmaVersion >= 11 ? 11 : i.options.ecmaVersion]),
      (this.source = ''),
      (this.flags = ''),
      (this.start = 0),
      (this.switchU = !1),
      (this.switchN = !1),
      (this.pos = 0),
      (this.lastIntValue = 0),
      (this.lastStringValue = ''),
      (this.lastAssertionIsQuantifiable = !1),
      (this.numCapturingParens = 0),
      (this.maxBackReference = 0),
      (this.groupNames = []),
      (this.backReferenceNames = []);
  };
ot.prototype.reset = function (i, r, s) {
  var u = s.indexOf('u') !== -1;
  (this.start = i | 0),
    (this.source = r + ''),
    (this.flags = s),
    (this.switchU = u && this.parser.options.ecmaVersion >= 6),
    (this.switchN = u && this.parser.options.ecmaVersion >= 9);
};
ot.prototype.raise = function (i) {
  this.parser.raiseRecoverable(
    this.start,
    'Invalid regular expression: /' + this.source + '/: ' + i,
  );
};
ot.prototype.at = function (i, r) {
  r === void 0 && (r = !1);
  var s = this.source,
    u = s.length;
  if (i >= u) return -1;
  var h = s.charCodeAt(i);
  if (!(r || this.switchU) || h <= 55295 || h >= 57344 || i + 1 >= u) return h;
  var c = s.charCodeAt(i + 1);
  return c >= 56320 && c <= 57343 ? (h << 10) + c - 56613888 : h;
};
ot.prototype.nextIndex = function (i, r) {
  r === void 0 && (r = !1);
  var s = this.source,
    u = s.length;
  if (i >= u) return u;
  var h = s.charCodeAt(i),
    c;
  return !(r || this.switchU) ||
    h <= 55295 ||
    h >= 57344 ||
    i + 1 >= u ||
    (c = s.charCodeAt(i + 1)) < 56320 ||
    c > 57343
    ? i + 1
    : i + 2;
};
ot.prototype.current = function (i) {
  return i === void 0 && (i = !1), this.at(this.pos, i);
};
ot.prototype.lookahead = function (i) {
  return i === void 0 && (i = !1), this.at(this.nextIndex(this.pos, i), i);
};
ot.prototype.advance = function (i) {
  i === void 0 && (i = !1), (this.pos = this.nextIndex(this.pos, i));
};
ot.prototype.eat = function (i, r) {
  return (
    r === void 0 && (r = !1), this.current(r) === i ? (this.advance(r), !0) : !1
  );
};
function bi(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536),
      String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
Z.validateRegExpFlags = function (e) {
  for (var i = e.validFlags, r = e.flags, s = 0; s < r.length; s++) {
    var u = r.charAt(s);
    i.indexOf(u) === -1 &&
      this.raise(e.start, 'Invalid regular expression flag'),
      r.indexOf(u, s + 1) > -1 &&
        this.raise(e.start, 'Duplicate regular expression flag');
  }
};
Z.validateRegExpPattern = function (e) {
  this.regexp_pattern(e),
    !e.switchN &&
      this.options.ecmaVersion >= 9 &&
      e.groupNames.length > 0 &&
      ((e.switchN = !0), this.regexp_pattern(e));
};
Z.regexp_pattern = function (e) {
  (e.pos = 0),
    (e.lastIntValue = 0),
    (e.lastStringValue = ''),
    (e.lastAssertionIsQuantifiable = !1),
    (e.numCapturingParens = 0),
    (e.maxBackReference = 0),
    (e.groupNames.length = 0),
    (e.backReferenceNames.length = 0),
    this.regexp_disjunction(e),
    e.pos !== e.source.length &&
      (e.eat(41) && e.raise("Unmatched ')'"),
      (e.eat(93) || e.eat(125)) && e.raise('Lone quantifier brackets')),
    e.maxBackReference > e.numCapturingParens && e.raise('Invalid escape');
  for (var i = 0, r = e.backReferenceNames; i < r.length; i += 1) {
    var s = r[i];
    e.groupNames.indexOf(s) === -1 &&
      e.raise('Invalid named capture referenced');
  }
};
Z.regexp_disjunction = function (e) {
  for (this.regexp_alternative(e); e.eat(124); ) this.regexp_alternative(e);
  this.regexp_eatQuantifier(e, !0) && e.raise('Nothing to repeat'),
    e.eat(123) && e.raise('Lone quantifier brackets');
};
Z.regexp_alternative = function (e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
};
Z.regexp_eatTerm = function (e) {
  return this.regexp_eatAssertion(e)
    ? (e.lastAssertionIsQuantifiable &&
        this.regexp_eatQuantifier(e) &&
        e.switchU &&
        e.raise('Invalid quantifier'),
      !0)
    : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e))
      ? (this.regexp_eatQuantifier(e), !0)
      : !1;
};
Z.regexp_eatAssertion = function (e) {
  var i = e.pos;
  if (((e.lastAssertionIsQuantifiable = !1), e.eat(94) || e.eat(36))) return !0;
  if (e.eat(92)) {
    if (e.eat(66) || e.eat(98)) return !0;
    e.pos = i;
  }
  if (e.eat(40) && e.eat(63)) {
    var r = !1;
    if (
      (this.options.ecmaVersion >= 9 && (r = e.eat(60)), e.eat(61) || e.eat(33))
    )
      return (
        this.regexp_disjunction(e),
        e.eat(41) || e.raise('Unterminated group'),
        (e.lastAssertionIsQuantifiable = !r),
        !0
      );
  }
  return (e.pos = i), !1;
};
Z.regexp_eatQuantifier = function (e, i) {
  return (
    i === void 0 && (i = !1),
    this.regexp_eatQuantifierPrefix(e, i) ? (e.eat(63), !0) : !1
  );
};
Z.regexp_eatQuantifierPrefix = function (e, i) {
  return (
    e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, i)
  );
};
Z.regexp_eatBracedQuantifier = function (e, i) {
  var r = e.pos;
  if (e.eat(123)) {
    var s = 0,
      u = -1;
    if (
      this.regexp_eatDecimalDigits(e) &&
      ((s = e.lastIntValue),
      e.eat(44) && this.regexp_eatDecimalDigits(e) && (u = e.lastIntValue),
      e.eat(125))
    )
      return (
        u !== -1 &&
          u < s &&
          !i &&
          e.raise('numbers out of order in {} quantifier'),
        !0
      );
    e.switchU && !i && e.raise('Incomplete quantifier'), (e.pos = r);
  }
  return !1;
};
Z.regexp_eatAtom = function (e) {
  return (
    this.regexp_eatPatternCharacters(e) ||
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e)
  );
};
Z.regexp_eatReverseSolidusAtomEscape = function (e) {
  var i = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatAtomEscape(e)) return !0;
    e.pos = i;
  }
  return !1;
};
Z.regexp_eatUncapturingGroup = function (e) {
  var i = e.pos;
  if (e.eat(40)) {
    if (e.eat(63) && e.eat(58)) {
      if ((this.regexp_disjunction(e), e.eat(41))) return !0;
      e.raise('Unterminated group');
    }
    e.pos = i;
  }
  return !1;
};
Z.regexp_eatCapturingGroup = function (e) {
  if (e.eat(40)) {
    if (
      (this.options.ecmaVersion >= 9
        ? this.regexp_groupSpecifier(e)
        : e.current() === 63 && e.raise('Invalid group'),
      this.regexp_disjunction(e),
      e.eat(41))
    )
      return (e.numCapturingParens += 1), !0;
    e.raise('Unterminated group');
  }
  return !1;
};
Z.regexp_eatExtendedAtom = function (e) {
  return (
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e) ||
    this.regexp_eatInvalidBracedQuantifier(e) ||
    this.regexp_eatExtendedPatternCharacter(e)
  );
};
Z.regexp_eatInvalidBracedQuantifier = function (e) {
  return (
    this.regexp_eatBracedQuantifier(e, !0) && e.raise('Nothing to repeat'), !1
  );
};
Z.regexp_eatSyntaxCharacter = function (e) {
  var i = e.current();
  return hs(i) ? ((e.lastIntValue = i), e.advance(), !0) : !1;
};
function hs(e) {
  return (
    e === 36 ||
    (e >= 40 && e <= 43) ||
    e === 46 ||
    e === 63 ||
    (e >= 91 && e <= 94) ||
    (e >= 123 && e <= 125)
  );
}
Z.regexp_eatPatternCharacters = function (e) {
  for (var i = e.pos, r = 0; (r = e.current()) !== -1 && !hs(r); ) e.advance();
  return e.pos !== i;
};
Z.regexp_eatExtendedPatternCharacter = function (e) {
  var i = e.current();
  return i !== -1 &&
    i !== 36 &&
    !(i >= 40 && i <= 43) &&
    i !== 46 &&
    i !== 63 &&
    i !== 91 &&
    i !== 94 &&
    i !== 124
    ? (e.advance(), !0)
    : !1;
};
Z.regexp_groupSpecifier = function (e) {
  if (e.eat(63)) {
    if (this.regexp_eatGroupName(e)) {
      e.groupNames.indexOf(e.lastStringValue) !== -1 &&
        e.raise('Duplicate capture group name'),
        e.groupNames.push(e.lastStringValue);
      return;
    }
    e.raise('Invalid group');
  }
};
Z.regexp_eatGroupName = function (e) {
  if (((e.lastStringValue = ''), e.eat(60))) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
    e.raise('Invalid capture group name');
  }
  return !1;
};
Z.regexp_eatRegExpIdentifierName = function (e) {
  if (((e.lastStringValue = ''), this.regexp_eatRegExpIdentifierStart(e))) {
    for (
      e.lastStringValue += bi(e.lastIntValue);
      this.regexp_eatRegExpIdentifierPart(e);

    )
      e.lastStringValue += bi(e.lastIntValue);
    return !0;
  }
  return !1;
};
Z.regexp_eatRegExpIdentifierStart = function (e) {
  var i = e.pos,
    r = this.options.ecmaVersion >= 11,
    s = e.current(r);
  return (
    e.advance(r),
    s === 92 &&
      this.regexp_eatRegExpUnicodeEscapeSequence(e, r) &&
      (s = e.lastIntValue),
    du(s) ? ((e.lastIntValue = s), !0) : ((e.pos = i), !1)
  );
};
function du(e) {
  return mt(e, !0) || e === 36 || e === 95;
}
Z.regexp_eatRegExpIdentifierPart = function (e) {
  var i = e.pos,
    r = this.options.ecmaVersion >= 11,
    s = e.current(r);
  return (
    e.advance(r),
    s === 92 &&
      this.regexp_eatRegExpUnicodeEscapeSequence(e, r) &&
      (s = e.lastIntValue),
    mu(s) ? ((e.lastIntValue = s), !0) : ((e.pos = i), !1)
  );
};
function mu(e) {
  return Rt(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
Z.regexp_eatAtomEscape = function (e) {
  return this.regexp_eatBackReference(e) ||
    this.regexp_eatCharacterClassEscape(e) ||
    this.regexp_eatCharacterEscape(e) ||
    (e.switchN && this.regexp_eatKGroupName(e))
    ? !0
    : (e.switchU &&
        (e.current() === 99 && e.raise('Invalid unicode escape'),
        e.raise('Invalid escape')),
      !1);
};
Z.regexp_eatBackReference = function (e) {
  var i = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var r = e.lastIntValue;
    if (e.switchU)
      return r > e.maxBackReference && (e.maxBackReference = r), !0;
    if (r <= e.numCapturingParens) return !0;
    e.pos = i;
  }
  return !1;
};
Z.regexp_eatKGroupName = function (e) {
  if (e.eat(107)) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise('Invalid named reference');
  }
  return !1;
};
Z.regexp_eatCharacterEscape = function (e) {
  return (
    this.regexp_eatControlEscape(e) ||
    this.regexp_eatCControlLetter(e) ||
    this.regexp_eatZero(e) ||
    this.regexp_eatHexEscapeSequence(e) ||
    this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) ||
    (!e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e)) ||
    this.regexp_eatIdentityEscape(e)
  );
};
Z.regexp_eatCControlLetter = function (e) {
  var i = e.pos;
  if (e.eat(99)) {
    if (this.regexp_eatControlLetter(e)) return !0;
    e.pos = i;
  }
  return !1;
};
Z.regexp_eatZero = function (e) {
  return e.current() === 48 && !Pi(e.lookahead())
    ? ((e.lastIntValue = 0), e.advance(), !0)
    : !1;
};
Z.regexp_eatControlEscape = function (e) {
  var i = e.current();
  return i === 116
    ? ((e.lastIntValue = 9), e.advance(), !0)
    : i === 110
      ? ((e.lastIntValue = 10), e.advance(), !0)
      : i === 118
        ? ((e.lastIntValue = 11), e.advance(), !0)
        : i === 102
          ? ((e.lastIntValue = 12), e.advance(), !0)
          : i === 114
            ? ((e.lastIntValue = 13), e.advance(), !0)
            : !1;
};
Z.regexp_eatControlLetter = function (e) {
  var i = e.current();
  return cs(i) ? ((e.lastIntValue = i % 32), e.advance(), !0) : !1;
};
function cs(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
Z.regexp_eatRegExpUnicodeEscapeSequence = function (e, i) {
  i === void 0 && (i = !1);
  var r = e.pos,
    s = i || e.switchU;
  if (e.eat(117)) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var u = e.lastIntValue;
      if (s && u >= 55296 && u <= 56319) {
        var h = e.pos;
        if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
          var c = e.lastIntValue;
          if (c >= 56320 && c <= 57343)
            return (
              (e.lastIntValue = (u - 55296) * 1024 + (c - 56320) + 65536), !0
            );
        }
        (e.pos = h), (e.lastIntValue = u);
      }
      return !0;
    }
    if (
      s &&
      e.eat(123) &&
      this.regexp_eatHexDigits(e) &&
      e.eat(125) &&
      gu(e.lastIntValue)
    )
      return !0;
    s && e.raise('Invalid unicode escape'), (e.pos = r);
  }
  return !1;
};
function gu(e) {
  return e >= 0 && e <= 1114111;
}
Z.regexp_eatIdentityEscape = function (e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e)
      ? !0
      : e.eat(47)
        ? ((e.lastIntValue = 47), !0)
        : !1;
  var i = e.current();
  return i !== 99 && (!e.switchN || i !== 107)
    ? ((e.lastIntValue = i), e.advance(), !0)
    : !1;
};
Z.regexp_eatDecimalEscape = function (e) {
  e.lastIntValue = 0;
  var i = e.current();
  if (i >= 49 && i <= 57) {
    do (e.lastIntValue = 10 * e.lastIntValue + (i - 48)), e.advance();
    while ((i = e.current()) >= 48 && i <= 57);
    return !0;
  }
  return !1;
};
Z.regexp_eatCharacterClassEscape = function (e) {
  var i = e.current();
  if (xu(i)) return (e.lastIntValue = -1), e.advance(), !0;
  if (e.switchU && this.options.ecmaVersion >= 9 && (i === 80 || i === 112)) {
    if (
      ((e.lastIntValue = -1),
      e.advance(),
      e.eat(123) &&
        this.regexp_eatUnicodePropertyValueExpression(e) &&
        e.eat(125))
    )
      return !0;
    e.raise('Invalid property name');
  }
  return !1;
};
function xu(e) {
  return (
    e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87
  );
}
Z.regexp_eatUnicodePropertyValueExpression = function (e) {
  var i = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
    var r = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var s = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, r, s), !0;
    }
  }
  if (((e.pos = i), this.regexp_eatLoneUnicodePropertyNameOrValue(e))) {
    var u = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, u), !0;
  }
  return !1;
};
Z.regexp_validateUnicodePropertyNameAndValue = function (e, i, r) {
  _i(e.unicodeProperties.nonBinary, i) || e.raise('Invalid property name'),
    e.unicodeProperties.nonBinary[i].test(r) ||
      e.raise('Invalid property value');
};
Z.regexp_validateUnicodePropertyNameOrValue = function (e, i) {
  e.unicodeProperties.binary.test(i) || e.raise('Invalid property name');
};
Z.regexp_eatUnicodePropertyName = function (e) {
  var i = 0;
  for (e.lastStringValue = ''; fs((i = e.current())); )
    (e.lastStringValue += bi(i)), e.advance();
  return e.lastStringValue !== '';
};
function fs(e) {
  return cs(e) || e === 95;
}
Z.regexp_eatUnicodePropertyValue = function (e) {
  var i = 0;
  for (e.lastStringValue = ''; Cu((i = e.current())); )
    (e.lastStringValue += bi(i)), e.advance();
  return e.lastStringValue !== '';
};
function Cu(e) {
  return fs(e) || Pi(e);
}
Z.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
Z.regexp_eatCharacterClass = function (e) {
  if (e.eat(91)) {
    if ((e.eat(94), this.regexp_classRanges(e), e.eat(93))) return !0;
    e.raise('Unterminated character class');
  }
  return !1;
};
Z.regexp_classRanges = function (e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var i = e.lastIntValue;
    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
      var r = e.lastIntValue;
      e.switchU && (i === -1 || r === -1) && e.raise('Invalid character class'),
        i !== -1 &&
          r !== -1 &&
          i > r &&
          e.raise('Range out of order in character class');
    }
  }
};
Z.regexp_eatClassAtom = function (e) {
  var i = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatClassEscape(e)) return !0;
    if (e.switchU) {
      var r = e.current();
      (r === 99 || ms(r)) && e.raise('Invalid class escape'),
        e.raise('Invalid escape');
    }
    e.pos = i;
  }
  var s = e.current();
  return s !== 93 ? ((e.lastIntValue = s), e.advance(), !0) : !1;
};
Z.regexp_eatClassEscape = function (e) {
  var i = e.pos;
  if (e.eat(98)) return (e.lastIntValue = 8), !0;
  if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0;
  if (!e.switchU && e.eat(99)) {
    if (this.regexp_eatClassControlLetter(e)) return !0;
    e.pos = i;
  }
  return (
    this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e)
  );
};
Z.regexp_eatClassControlLetter = function (e) {
  var i = e.current();
  return Pi(i) || i === 95 ? ((e.lastIntValue = i % 32), e.advance(), !0) : !1;
};
Z.regexp_eatHexEscapeSequence = function (e) {
  var i = e.pos;
  if (e.eat(120)) {
    if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
    e.switchU && e.raise('Invalid escape'), (e.pos = i);
  }
  return !1;
};
Z.regexp_eatDecimalDigits = function (e) {
  var i = e.pos,
    r = 0;
  for (e.lastIntValue = 0; Pi((r = e.current())); )
    (e.lastIntValue = 10 * e.lastIntValue + (r - 48)), e.advance();
  return e.pos !== i;
};
function Pi(e) {
  return e >= 48 && e <= 57;
}
Z.regexp_eatHexDigits = function (e) {
  var i = e.pos,
    r = 0;
  for (e.lastIntValue = 0; ps((r = e.current())); )
    (e.lastIntValue = 16 * e.lastIntValue + ds(r)), e.advance();
  return e.pos !== i;
};
function ps(e) {
  return (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
}
function ds(e) {
  return e >= 65 && e <= 70
    ? 10 + (e - 65)
    : e >= 97 && e <= 102
      ? 10 + (e - 97)
      : e - 48;
}
Z.regexp_eatLegacyOctalEscapeSequence = function (e) {
  if (this.regexp_eatOctalDigit(e)) {
    var i = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var r = e.lastIntValue;
      i <= 3 && this.regexp_eatOctalDigit(e)
        ? (e.lastIntValue = i * 64 + r * 8 + e.lastIntValue)
        : (e.lastIntValue = i * 8 + r);
    } else e.lastIntValue = i;
    return !0;
  }
  return !1;
};
Z.regexp_eatOctalDigit = function (e) {
  var i = e.current();
  return ms(i)
    ? ((e.lastIntValue = i - 48), e.advance(), !0)
    : ((e.lastIntValue = 0), !1);
};
function ms(e) {
  return e >= 48 && e <= 55;
}
Z.regexp_eatFixedHexDigits = function (e, i) {
  var r = e.pos;
  e.lastIntValue = 0;
  for (var s = 0; s < i; ++s) {
    var u = e.current();
    if (!ps(u)) return (e.pos = r), !1;
    (e.lastIntValue = 16 * e.lastIntValue + ds(u)), e.advance();
  }
  return !0;
};
var yr = function (i) {
    (this.type = i.type),
      (this.value = i.value),
      (this.start = i.start),
      (this.end = i.end),
      i.options.locations && (this.loc = new wi(i, i.startLoc, i.endLoc)),
      i.options.ranges && (this.range = [i.start, i.end]);
  },
  ce = ke.prototype;
ce.next = function (e) {
  !e &&
    this.type.keyword &&
    this.containsEsc &&
    this.raiseRecoverable(
      this.start,
      'Escape sequence in keyword ' + this.type.keyword,
    ),
    this.options.onToken && this.options.onToken(new yr(this)),
    (this.lastTokEnd = this.end),
    (this.lastTokStart = this.start),
    (this.lastTokEndLoc = this.endLoc),
    (this.lastTokStartLoc = this.startLoc),
    this.nextToken();
};
ce.getToken = function () {
  return this.next(), new yr(this);
};
typeof Symbol < 'u' &&
  (ce[Symbol.iterator] = function () {
    var e = this;
    return {
      next: function () {
        var i = e.getToken();
        return { done: i.type === C.eof, value: i };
      },
    };
  });
ce.curContext = function () {
  return this.context[this.context.length - 1];
};
ce.nextToken = function () {
  var e = this.curContext();
  if (
    ((!e || !e.preserveSpace) && this.skipSpace(),
    (this.start = this.pos),
    this.options.locations && (this.startLoc = this.curPosition()),
    this.pos >= this.input.length)
  )
    return this.finishToken(C.eof);
  if (e.override) return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
ce.readToken = function (e) {
  return mt(e, this.options.ecmaVersion >= 6) || e === 92
    ? this.readWord()
    : this.getTokenFromCode(e);
};
ce.fullCharCodeAtPos = function () {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 57344) return e;
  var i = this.input.charCodeAt(this.pos + 1);
  return (e << 10) + i - 56613888;
};
ce.skipBlockComment = function () {
  var e = this.options.onComment && this.curPosition(),
    i = this.pos,
    r = this.input.indexOf('*/', (this.pos += 2));
  if (
    (r === -1 && this.raise(this.pos - 2, 'Unterminated comment'),
    (this.pos = r + 2),
    this.options.locations)
  ) {
    Yt.lastIndex = i;
    for (var s; (s = Yt.exec(this.input)) && s.index < this.pos; )
      ++this.curLine, (this.lineStart = s.index + s[0].length);
  }
  this.options.onComment &&
    this.options.onComment(
      !0,
      this.input.slice(i + 2, r),
      i,
      this.pos,
      e,
      this.curPosition(),
    );
};
ce.skipLineComment = function (e) {
  for (
    var i = this.pos,
      r = this.options.onComment && this.curPosition(),
      s = this.input.charCodeAt((this.pos += e));
    this.pos < this.input.length && !ni(s);

  )
    s = this.input.charCodeAt(++this.pos);
  this.options.onComment &&
    this.options.onComment(
      !1,
      this.input.slice(i + e, this.pos),
      i,
      this.pos,
      r,
      this.curPosition(),
    );
};
ce.skipSpace = function () {
  e: for (; this.pos < this.input.length; ) {
    var e = this.input.charCodeAt(this.pos);
    switch (e) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos,
          this.options.locations &&
            (++this.curLine, (this.lineStart = this.pos));
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if ((e > 8 && e < 14) || (e >= 5760 && zn.test(String.fromCharCode(e))))
          ++this.pos;
        else break e;
    }
  }
};
ce.finishToken = function (e, i) {
  (this.end = this.pos),
    this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  (this.type = e), (this.value = i), this.updateContext(r);
};
ce.readToken_dot = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57) return this.readNumber(!0);
  var i = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && i === 46
    ? ((this.pos += 3), this.finishToken(C.ellipsis))
    : (++this.pos, this.finishToken(C.dot));
};
ce.readToken_slash = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed
    ? (++this.pos, this.readRegexp())
    : e === 61
      ? this.finishOp(C.assign, 2)
      : this.finishOp(C.slash, 1);
};
ce.readToken_mult_modulo_exp = function (e) {
  var i = this.input.charCodeAt(this.pos + 1),
    r = 1,
    s = e === 42 ? C.star : C.modulo;
  return (
    this.options.ecmaVersion >= 7 &&
      e === 42 &&
      i === 42 &&
      (++r, (s = C.starstar), (i = this.input.charCodeAt(this.pos + 2))),
    i === 61 ? this.finishOp(C.assign, r + 1) : this.finishOp(s, r)
  );
};
ce.readToken_pipe_amp = function (e) {
  var i = this.input.charCodeAt(this.pos + 1);
  if (i === e) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61) return this.finishOp(C.assign, 3);
    }
    return this.finishOp(e === 124 ? C.logicalOR : C.logicalAND, 2);
  }
  return i === 61
    ? this.finishOp(C.assign, 2)
    : this.finishOp(e === 124 ? C.bitwiseOR : C.bitwiseAND, 1);
};
ce.readToken_caret = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(C.assign, 2) : this.finishOp(C.bitwiseXOR, 1);
};
ce.readToken_plus_min = function (e) {
  var i = this.input.charCodeAt(this.pos + 1);
  return i === e
    ? i === 45 &&
      !this.inModule &&
      this.input.charCodeAt(this.pos + 2) === 62 &&
      (this.lastTokEnd === 0 ||
        Xe.test(this.input.slice(this.lastTokEnd, this.pos)))
      ? (this.skipLineComment(3), this.skipSpace(), this.nextToken())
      : this.finishOp(C.incDec, 2)
    : i === 61
      ? this.finishOp(C.assign, 2)
      : this.finishOp(C.plusMin, 1);
};
ce.readToken_lt_gt = function (e) {
  var i = this.input.charCodeAt(this.pos + 1),
    r = 1;
  return i === e
    ? ((r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2),
      this.input.charCodeAt(this.pos + r) === 61
        ? this.finishOp(C.assign, r + 1)
        : this.finishOp(C.bitShift, r))
    : i === 33 &&
        e === 60 &&
        !this.inModule &&
        this.input.charCodeAt(this.pos + 2) === 45 &&
        this.input.charCodeAt(this.pos + 3) === 45
      ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
      : (i === 61 && (r = 2), this.finishOp(C.relational, r));
};
ce.readToken_eq_excl = function (e) {
  var i = this.input.charCodeAt(this.pos + 1);
  return i === 61
    ? this.finishOp(
        C.equality,
        this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2,
      )
    : e === 61 && i === 62 && this.options.ecmaVersion >= 6
      ? ((this.pos += 2), this.finishToken(C.arrow))
      : this.finishOp(e === 61 ? C.eq : C.prefix, 1);
};
ce.readToken_question = function () {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var i = this.input.charCodeAt(this.pos + 1);
    if (i === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57) return this.finishOp(C.questionDot, 2);
    }
    if (i === 63) {
      if (e >= 12) {
        var s = this.input.charCodeAt(this.pos + 2);
        if (s === 61) return this.finishOp(C.assign, 3);
      }
      return this.finishOp(C.coalesce, 2);
    }
  }
  return this.finishOp(C.question, 1);
};
ce.getTokenFromCode = function (e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(C.parenL);
    case 41:
      return ++this.pos, this.finishToken(C.parenR);
    case 59:
      return ++this.pos, this.finishToken(C.semi);
    case 44:
      return ++this.pos, this.finishToken(C.comma);
    case 91:
      return ++this.pos, this.finishToken(C.bracketL);
    case 93:
      return ++this.pos, this.finishToken(C.bracketR);
    case 123:
      return ++this.pos, this.finishToken(C.braceL);
    case 125:
      return ++this.pos, this.finishToken(C.braceR);
    case 58:
      return ++this.pos, this.finishToken(C.colon);
    case 96:
      if (this.options.ecmaVersion < 6) break;
      return ++this.pos, this.finishToken(C.backQuote);
    case 48:
      var i = this.input.charCodeAt(this.pos + 1);
      if (i === 120 || i === 88) return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (i === 111 || i === 79) return this.readRadixNumber(8);
        if (i === 98 || i === 66) return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(C.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + Dr(e) + "'");
};
ce.finishOp = function (e, i) {
  var r = this.input.slice(this.pos, this.pos + i);
  return (this.pos += i), this.finishToken(e, r);
};
ce.readRegexp = function () {
  for (var e, i, r = this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(r, 'Unterminated regular expression');
    var s = this.input.charAt(this.pos);
    if ((Xe.test(s) && this.raise(r, 'Unterminated regular expression'), e))
      e = !1;
    else {
      if (s === '[') i = !0;
      else if (s === ']' && i) i = !1;
      else if (s === '/' && !i) break;
      e = s === '\\';
    }
    ++this.pos;
  }
  var u = this.input.slice(r, this.pos);
  ++this.pos;
  var h = this.pos,
    c = this.readWord1();
  this.containsEsc && this.unexpected(h);
  var g = this.regexpState || (this.regexpState = new ot(this));
  g.reset(r, u, c), this.validateRegExpFlags(g), this.validateRegExpPattern(g);
  var x = null;
  try {
    x = new RegExp(u, c);
  } catch {}
  return this.finishToken(C.regexp, { pattern: u, flags: c, value: x });
};
ce.readInt = function (e, i, r) {
  for (
    var s = this.options.ecmaVersion >= 12 && i === void 0,
      u = r && this.input.charCodeAt(this.pos) === 48,
      h = this.pos,
      c = 0,
      g = 0,
      x = 0,
      E = i ?? 1 / 0;
    x < E;
    ++x, ++this.pos
  ) {
    var D = this.input.charCodeAt(this.pos),
      w = void 0;
    if (s && D === 95) {
      u &&
        this.raiseRecoverable(
          this.pos,
          'Numeric separator is not allowed in legacy octal numeric literals',
        ),
        g === 95 &&
          this.raiseRecoverable(
            this.pos,
            'Numeric separator must be exactly one underscore',
          ),
        x === 0 &&
          this.raiseRecoverable(
            this.pos,
            'Numeric separator is not allowed at the first of digits',
          ),
        (g = D);
      continue;
    }
    if (
      (D >= 97
        ? (w = D - 97 + 10)
        : D >= 65
          ? (w = D - 65 + 10)
          : D >= 48 && D <= 57
            ? (w = D - 48)
            : (w = 1 / 0),
      w >= e)
    )
      break;
    (g = D), (c = c * e + w);
  }
  return (
    s &&
      g === 95 &&
      this.raiseRecoverable(
        this.pos - 1,
        'Numeric separator is not allowed at the last of digits',
      ),
    this.pos === h || (i != null && this.pos - h !== i) ? null : c
  );
};
function vu(e, i) {
  return i ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ''));
}
function gs(e) {
  return typeof BigInt != 'function' ? null : BigInt(e.replace(/_/g, ''));
}
ce.readRadixNumber = function (e) {
  var i = this.pos;
  this.pos += 2;
  var r = this.readInt(e);
  return (
    r == null && this.raise(this.start + 2, 'Expected number in radix ' + e),
    this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110
      ? ((r = gs(this.input.slice(i, this.pos))), ++this.pos)
      : mt(this.fullCharCodeAtPos()) &&
        this.raise(this.pos, 'Identifier directly after number'),
    this.finishToken(C.num, r)
  );
};
ce.readNumber = function (e) {
  var i = this.pos;
  !e &&
    this.readInt(10, void 0, !0) === null &&
    this.raise(i, 'Invalid number');
  var r = this.pos - i >= 2 && this.input.charCodeAt(i) === 48;
  r && this.strict && this.raise(i, 'Invalid number');
  var s = this.input.charCodeAt(this.pos);
  if (!r && !e && this.options.ecmaVersion >= 11 && s === 110) {
    var u = gs(this.input.slice(i, this.pos));
    return (
      ++this.pos,
      mt(this.fullCharCodeAtPos()) &&
        this.raise(this.pos, 'Identifier directly after number'),
      this.finishToken(C.num, u)
    );
  }
  r && /[89]/.test(this.input.slice(i, this.pos)) && (r = !1),
    s === 46 &&
      !r &&
      (++this.pos, this.readInt(10), (s = this.input.charCodeAt(this.pos))),
    (s === 69 || s === 101) &&
      !r &&
      ((s = this.input.charCodeAt(++this.pos)),
      (s === 43 || s === 45) && ++this.pos,
      this.readInt(10) === null && this.raise(i, 'Invalid number')),
    mt(this.fullCharCodeAtPos()) &&
      this.raise(this.pos, 'Identifier directly after number');
  var h = vu(this.input.slice(i, this.pos), r);
  return this.finishToken(C.num, h);
};
ce.readCodePoint = function () {
  var e = this.input.charCodeAt(this.pos),
    i;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    (i = this.readHexChar(this.input.indexOf('}', this.pos) - this.pos)),
      ++this.pos,
      i > 1114111 && this.invalidStringToken(r, 'Code point out of bounds');
  } else i = this.readHexChar(4);
  return i;
};
function Dr(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536),
      String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
ce.readString = function (e) {
  for (var i = '', r = ++this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(this.start, 'Unterminated string constant');
    var s = this.input.charCodeAt(this.pos);
    if (s === e) break;
    s === 92
      ? ((i += this.input.slice(r, this.pos)),
        (i += this.readEscapedChar(!1)),
        (r = this.pos))
      : (ni(s, this.options.ecmaVersion >= 10) &&
          this.raise(this.start, 'Unterminated string constant'),
        ++this.pos);
  }
  return (i += this.input.slice(r, this.pos++)), this.finishToken(C.string, i);
};
var xs = {};
ce.tryReadTemplateToken = function () {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === xs) this.readInvalidTemplateToken();
    else throw e;
  }
  this.inTemplateElement = !1;
};
ce.invalidStringToken = function (e, i) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw xs;
  this.raise(e, i);
};
ce.readTmplToken = function () {
  for (var e = '', i = this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(this.start, 'Unterminated template');
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || (r === 36 && this.input.charCodeAt(this.pos + 1) === 123))
      return this.pos === this.start &&
        (this.type === C.template || this.type === C.invalidTemplate)
        ? r === 36
          ? ((this.pos += 2), this.finishToken(C.dollarBraceL))
          : (++this.pos, this.finishToken(C.backQuote))
        : ((e += this.input.slice(i, this.pos)),
          this.finishToken(C.template, e));
    if (r === 92)
      (e += this.input.slice(i, this.pos)),
        (e += this.readEscapedChar(!0)),
        (i = this.pos);
    else if (ni(r)) {
      switch (((e += this.input.slice(i, this.pos)), ++this.pos, r)) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, (this.lineStart = this.pos)),
        (i = this.pos);
    } else ++this.pos;
  }
};
ce.readInvalidTemplateToken = function () {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case '\\':
        ++this.pos;
        break;
      case '$':
        if (this.input[this.pos + 1] !== '{') break;
      case '`':
        return this.finishToken(
          C.invalidTemplate,
          this.input.slice(this.start, this.pos),
        );
    }
  this.raise(this.start, 'Unterminated template');
};
ce.readEscapedChar = function (e) {
  var i = this.input.charCodeAt(++this.pos);
  switch ((++this.pos, i)) {
    case 110:
      return `
`;
    case 114:
      return '\r';
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return Dr(this.readCodePoint());
    case 116:
      return '	';
    case 98:
      return '\b';
    case 118:
      return '\v';
    case 102:
      return '\f';
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return (
        this.options.locations && ((this.lineStart = this.pos), ++this.curLine),
        ''
      );
    case 56:
    case 57:
      if (e) {
        var r = this.pos - 1;
        return (
          this.invalidStringToken(
            r,
            'Invalid escape sequence in template string',
          ),
          null
        );
      }
    default:
      if (i >= 48 && i <= 55) {
        var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
          u = parseInt(s, 8);
        return (
          u > 255 && ((s = s.slice(0, -1)), (u = parseInt(s, 8))),
          (this.pos += s.length - 1),
          (i = this.input.charCodeAt(this.pos)),
          (s !== '0' || i === 56 || i === 57) &&
            (this.strict || e) &&
            this.invalidStringToken(
              this.pos - 1 - s.length,
              e
                ? 'Octal literal in template string'
                : 'Octal literal in strict mode',
            ),
          String.fromCharCode(u)
        );
      }
      return ni(i) ? '' : String.fromCharCode(i);
  }
};
ce.readHexChar = function (e) {
  var i = this.pos,
    r = this.readInt(16, e);
  return (
    r === null && this.invalidStringToken(i, 'Bad character escape sequence'), r
  );
};
ce.readWord1 = function () {
  this.containsEsc = !1;
  for (
    var e = '', i = !0, r = this.pos, s = this.options.ecmaVersion >= 6;
    this.pos < this.input.length;

  ) {
    var u = this.fullCharCodeAtPos();
    if (Rt(u, s)) this.pos += u <= 65535 ? 1 : 2;
    else if (u === 92) {
      (this.containsEsc = !0), (e += this.input.slice(r, this.pos));
      var h = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 &&
        this.invalidStringToken(
          this.pos,
          'Expecting Unicode escape sequence \\uXXXX',
        ),
        ++this.pos;
      var c = this.readCodePoint();
      (i ? mt : Rt)(c, s) ||
        this.invalidStringToken(h, 'Invalid Unicode escape'),
        (e += Dr(c)),
        (r = this.pos);
    } else break;
    i = !1;
  }
  return e + this.input.slice(r, this.pos);
};
ce.readWord = function () {
  var e = this.readWord1(),
    i = C.name;
  return this.keywords.test(e) && (i = dr[e]), this.finishToken(i, e);
};
var Au = '7.4.1';
ke.acorn = {
  Parser: ke,
  version: Au,
  defaultOptions: rr,
  Position: Zt,
  SourceLocation: wi,
  getLineInfo: Qn,
  Node: vr,
  TokenType: me,
  tokTypes: C,
  keywordTypes: dr,
  TokContext: Ye,
  tokContexts: we,
  isIdentifierChar: Rt,
  isIdentifierStart: mt,
  Token: yr,
  isNewLine: ni,
  lineBreak: Xe,
  lineBreakG: Yt,
  nonASCIIwhitespace: zn,
};
var Cs = { exports: {} },
  yu = {
    quot: '"',
    amp: '&',
    apos: "'",
    lt: '<',
    gt: '>',
    nbsp: ' ',
    iexcl: '¡',
    cent: '¢',
    pound: '£',
    curren: '¤',
    yen: '¥',
    brvbar: '¦',
    sect: '§',
    uml: '¨',
    copy: '©',
    ordf: 'ª',
    laquo: '«',
    not: '¬',
    shy: '­',
    reg: '®',
    macr: '¯',
    deg: '°',
    plusmn: '±',
    sup2: '²',
    sup3: '³',
    acute: '´',
    micro: 'µ',
    para: '¶',
    middot: '·',
    cedil: '¸',
    sup1: '¹',
    ordm: 'º',
    raquo: '»',
    frac14: '¼',
    frac12: '½',
    frac34: '¾',
    iquest: '¿',
    Agrave: 'À',
    Aacute: 'Á',
    Acirc: 'Â',
    Atilde: 'Ã',
    Auml: 'Ä',
    Aring: 'Å',
    AElig: 'Æ',
    Ccedil: 'Ç',
    Egrave: 'È',
    Eacute: 'É',
    Ecirc: 'Ê',
    Euml: 'Ë',
    Igrave: 'Ì',
    Iacute: 'Í',
    Icirc: 'Î',
    Iuml: 'Ï',
    ETH: 'Ð',
    Ntilde: 'Ñ',
    Ograve: 'Ò',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Otilde: 'Õ',
    Ouml: 'Ö',
    times: '×',
    Oslash: 'Ø',
    Ugrave: 'Ù',
    Uacute: 'Ú',
    Ucirc: 'Û',
    Uuml: 'Ü',
    Yacute: 'Ý',
    THORN: 'Þ',
    szlig: 'ß',
    agrave: 'à',
    aacute: 'á',
    acirc: 'â',
    atilde: 'ã',
    auml: 'ä',
    aring: 'å',
    aelig: 'æ',
    ccedil: 'ç',
    egrave: 'è',
    eacute: 'é',
    ecirc: 'ê',
    euml: 'ë',
    igrave: 'ì',
    iacute: 'í',
    icirc: 'î',
    iuml: 'ï',
    eth: 'ð',
    ntilde: 'ñ',
    ograve: 'ò',
    oacute: 'ó',
    ocirc: 'ô',
    otilde: 'õ',
    ouml: 'ö',
    divide: '÷',
    oslash: 'ø',
    ugrave: 'ù',
    uacute: 'ú',
    ucirc: 'û',
    uuml: 'ü',
    yacute: 'ý',
    thorn: 'þ',
    yuml: 'ÿ',
    OElig: 'Œ',
    oelig: 'œ',
    Scaron: 'Š',
    scaron: 'š',
    Yuml: 'Ÿ',
    fnof: 'ƒ',
    circ: 'ˆ',
    tilde: '˜',
    Alpha: 'Α',
    Beta: 'Β',
    Gamma: 'Γ',
    Delta: 'Δ',
    Epsilon: 'Ε',
    Zeta: 'Ζ',
    Eta: 'Η',
    Theta: 'Θ',
    Iota: 'Ι',
    Kappa: 'Κ',
    Lambda: 'Λ',
    Mu: 'Μ',
    Nu: 'Ν',
    Xi: 'Ξ',
    Omicron: 'Ο',
    Pi: 'Π',
    Rho: 'Ρ',
    Sigma: 'Σ',
    Tau: 'Τ',
    Upsilon: 'Υ',
    Phi: 'Φ',
    Chi: 'Χ',
    Psi: 'Ψ',
    Omega: 'Ω',
    alpha: 'α',
    beta: 'β',
    gamma: 'γ',
    delta: 'δ',
    epsilon: 'ε',
    zeta: 'ζ',
    eta: 'η',
    theta: 'θ',
    iota: 'ι',
    kappa: 'κ',
    lambda: 'λ',
    mu: 'μ',
    nu: 'ν',
    xi: 'ξ',
    omicron: 'ο',
    pi: 'π',
    rho: 'ρ',
    sigmaf: 'ς',
    sigma: 'σ',
    tau: 'τ',
    upsilon: 'υ',
    phi: 'φ',
    chi: 'χ',
    psi: 'ψ',
    omega: 'ω',
    thetasym: 'ϑ',
    upsih: 'ϒ',
    piv: 'ϖ',
    ensp: ' ',
    emsp: ' ',
    thinsp: ' ',
    zwnj: '‌',
    zwj: '‍',
    lrm: '‎',
    rlm: '‏',
    ndash: '–',
    mdash: '—',
    lsquo: '‘',
    rsquo: '’',
    sbquo: '‚',
    ldquo: '“',
    rdquo: '”',
    bdquo: '„',
    dagger: '†',
    Dagger: '‡',
    bull: '•',
    hellip: '…',
    permil: '‰',
    prime: '′',
    Prime: '″',
    lsaquo: '‹',
    rsaquo: '›',
    oline: '‾',
    frasl: '⁄',
    euro: '€',
    image: 'ℑ',
    weierp: '℘',
    real: 'ℜ',
    trade: '™',
    alefsym: 'ℵ',
    larr: '←',
    uarr: '↑',
    rarr: '→',
    darr: '↓',
    harr: '↔',
    crarr: '↵',
    lArr: '⇐',
    uArr: '⇑',
    rArr: '⇒',
    dArr: '⇓',
    hArr: '⇔',
    forall: '∀',
    part: '∂',
    exist: '∃',
    empty: '∅',
    nabla: '∇',
    isin: '∈',
    notin: '∉',
    ni: '∋',
    prod: '∏',
    sum: '∑',
    minus: '−',
    lowast: '∗',
    radic: '√',
    prop: '∝',
    infin: '∞',
    ang: '∠',
    and: '∧',
    or: '∨',
    cap: '∩',
    cup: '∪',
    int: '∫',
    there4: '∴',
    sim: '∼',
    cong: '≅',
    asymp: '≈',
    ne: '≠',
    equiv: '≡',
    le: '≤',
    ge: '≥',
    sub: '⊂',
    sup: '⊃',
    nsub: '⊄',
    sube: '⊆',
    supe: '⊇',
    oplus: '⊕',
    otimes: '⊗',
    perp: '⊥',
    sdot: '⋅',
    lceil: '⌈',
    rceil: '⌉',
    lfloor: '⌊',
    rfloor: '⌋',
    lang: '〈',
    rang: '〉',
    loz: '◊',
    spades: '♠',
    clubs: '♣',
    hearts: '♥',
    diams: '♦',
  },
  vi = { exports: {} },
  mn;
function gn() {
  return (
    mn ||
      ((mn = 1),
      (function (e, i) {
        (function (r, s) {
          s(i);
        })(Ot, function (r) {
          var s = [
              509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0,
              166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54,
              14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9,
              6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158,
              11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4,
              193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16,
              16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1,
              3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3,
              9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5,
              4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10,
              1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39,
              4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1,
              4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418,
              49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3,
              6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13,
              983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239,
            ],
            u = [
              0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28,
              4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157,
              19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2,
              14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5,
              3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11,
              21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4,
              28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50,
              14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47,
              20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3,
              0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1,
              64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6,
              2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21,
              1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38,
              6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0,
              95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20,
              0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22,
              0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125,
              0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026,
              582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6,
              18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9,
              1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15,
              3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3,
              0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27,
              2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30,
              2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61,
              147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2,
              1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0,
              2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0,
              3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3,
              2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7,
              221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191,
            ],
            h =
              '‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･',
            c =
              'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
            g = {
              3: 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
              5: 'class enum extends super const export import',
              6: 'enum',
              strict:
                'implements interface let package private protected public static yield',
              strictBind: 'eval arguments',
            },
            x =
              'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this',
            E = {
              5: x,
              '5module': x + ' export import',
              6: x + ' const class extends export import super',
            },
            D = /^in(stanceof)?$/,
            w = new RegExp('[' + c + ']'),
            b = new RegExp('[' + c + h + ']');
          function S(t, n) {
            for (var l = 65536, p = 0; p < n.length; p += 2) {
              if (((l += n[p]), l > t)) return !1;
              if (((l += n[p + 1]), l >= t)) return !0;
            }
            return !1;
          }
          function k(t, n) {
            return t < 65
              ? t === 36
              : t < 91
                ? !0
                : t < 97
                  ? t === 95
                  : t < 123
                    ? !0
                    : t <= 65535
                      ? t >= 170 && w.test(String.fromCharCode(t))
                      : n === !1
                        ? !1
                        : S(t, u);
          }
          function F(t, n) {
            return t < 48
              ? t === 36
              : t < 58
                ? !0
                : t < 65
                  ? !1
                  : t < 91
                    ? !0
                    : t < 97
                      ? t === 95
                      : t < 123
                        ? !0
                        : t <= 65535
                          ? t >= 170 && b.test(String.fromCharCode(t))
                          : n === !1
                            ? !1
                            : S(t, u) || S(t, s);
          }
          var _ = function (n, l) {
            l === void 0 && (l = {}),
              (this.label = n),
              (this.keyword = l.keyword),
              (this.beforeExpr = !!l.beforeExpr),
              (this.startsExpr = !!l.startsExpr),
              (this.isLoop = !!l.isLoop),
              (this.isAssign = !!l.isAssign),
              (this.prefix = !!l.prefix),
              (this.postfix = !!l.postfix),
              (this.binop = l.binop || null),
              (this.updateContext = null);
          };
          function M(t, n) {
            return new _(t, { beforeExpr: !0, binop: n });
          }
          var V = { beforeExpr: !0 },
            G = { startsExpr: !0 },
            P = {};
          function A(t, n) {
            return (
              n === void 0 && (n = {}), (n.keyword = t), (P[t] = new _(t, n))
            );
          }
          var o = {
              num: new _('num', G),
              regexp: new _('regexp', G),
              string: new _('string', G),
              name: new _('name', G),
              privateId: new _('privateId', G),
              eof: new _('eof'),
              bracketL: new _('[', { beforeExpr: !0, startsExpr: !0 }),
              bracketR: new _(']'),
              braceL: new _('{', { beforeExpr: !0, startsExpr: !0 }),
              braceR: new _('}'),
              parenL: new _('(', { beforeExpr: !0, startsExpr: !0 }),
              parenR: new _(')'),
              comma: new _(',', V),
              semi: new _(';', V),
              colon: new _(':', V),
              dot: new _('.'),
              question: new _('?', V),
              questionDot: new _('?.'),
              arrow: new _('=>', V),
              template: new _('template'),
              invalidTemplate: new _('invalidTemplate'),
              ellipsis: new _('...', V),
              backQuote: new _('`', G),
              dollarBraceL: new _('${', { beforeExpr: !0, startsExpr: !0 }),
              eq: new _('=', { beforeExpr: !0, isAssign: !0 }),
              assign: new _('_=', { beforeExpr: !0, isAssign: !0 }),
              incDec: new _('++/--', {
                prefix: !0,
                postfix: !0,
                startsExpr: !0,
              }),
              prefix: new _('!/~', {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0,
              }),
              logicalOR: M('||', 1),
              logicalAND: M('&&', 2),
              bitwiseOR: M('|', 3),
              bitwiseXOR: M('^', 4),
              bitwiseAND: M('&', 5),
              equality: M('==/!=/===/!==', 6),
              relational: M('</>/<=/>=', 7),
              bitShift: M('<</>>/>>>', 8),
              plusMin: new _('+/-', {
                beforeExpr: !0,
                binop: 9,
                prefix: !0,
                startsExpr: !0,
              }),
              modulo: M('%', 10),
              star: M('*', 10),
              slash: M('/', 10),
              starstar: new _('**', { beforeExpr: !0 }),
              coalesce: M('??', 1),
              _break: A('break'),
              _case: A('case', V),
              _catch: A('catch'),
              _continue: A('continue'),
              _debugger: A('debugger'),
              _default: A('default', V),
              _do: A('do', { isLoop: !0, beforeExpr: !0 }),
              _else: A('else', V),
              _finally: A('finally'),
              _for: A('for', { isLoop: !0 }),
              _function: A('function', G),
              _if: A('if'),
              _return: A('return', V),
              _switch: A('switch'),
              _throw: A('throw', V),
              _try: A('try'),
              _var: A('var'),
              _const: A('const'),
              _while: A('while', { isLoop: !0 }),
              _with: A('with'),
              _new: A('new', { beforeExpr: !0, startsExpr: !0 }),
              _this: A('this', G),
              _super: A('super', G),
              _class: A('class', G),
              _extends: A('extends', V),
              _export: A('export'),
              _import: A('import', G),
              _null: A('null', G),
              _true: A('true', G),
              _false: A('false', G),
              _in: A('in', { beforeExpr: !0, binop: 7 }),
              _instanceof: A('instanceof', { beforeExpr: !0, binop: 7 }),
              _typeof: A('typeof', {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0,
              }),
              _void: A('void', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
              _delete: A('delete', {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0,
              }),
            },
            B = /\r\n?|\n|\u2028|\u2029/,
            N = new RegExp(B.source, 'g');
          function H(t) {
            return t === 10 || t === 13 || t === 8232 || t === 8233;
          }
          function z(t, n, l) {
            l === void 0 && (l = t.length);
            for (var p = n; p < l; p++) {
              var y = t.charCodeAt(p);
              if (H(y))
                return p < l - 1 && y === 13 && t.charCodeAt(p + 1) === 10
                  ? p + 2
                  : p + 1;
            }
            return -1;
          }
          var te = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
            J = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
            K = Object.prototype,
            le = K.hasOwnProperty,
            Ee = K.toString,
            ye =
              Object.hasOwn ||
              function (t, n) {
                return le.call(t, n);
              },
            ve =
              Array.isArray ||
              function (t) {
                return Ee.call(t) === '[object Array]';
              },
            oe = Object.create(null);
          function _e(t) {
            return (
              oe[t] ||
              (oe[t] = new RegExp('^(?:' + t.replace(/ /g, '|') + ')$'))
            );
          }
          function Pe(t) {
            return t <= 65535
              ? String.fromCharCode(t)
              : ((t -= 65536),
                String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
          }
          var lt =
              /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/,
            W = function (n, l) {
              (this.line = n), (this.column = l);
            };
          W.prototype.offset = function (n) {
            return new W(this.line, this.column + n);
          };
          var Me = function (n, l, p) {
            (this.start = l),
              (this.end = p),
              n.sourceFile !== null && (this.source = n.sourceFile);
          };
          function ht(t, n) {
            for (var l = 1, p = 0; ; ) {
              var y = z(t, p, n);
              if (y < 0) return new W(l, n - p);
              ++l, (p = y);
            }
          }
          var je = {
              ecmaVersion: null,
              sourceType: 'script',
              onInsertedSemicolon: null,
              onTrailingComma: null,
              allowReserved: null,
              allowReturnOutsideFunction: !1,
              allowImportExportEverywhere: !1,
              allowAwaitOutsideFunction: null,
              allowSuperOutsideMethod: null,
              allowHashBang: !1,
              checkPrivateFields: !0,
              locations: !1,
              onToken: null,
              onComment: null,
              ranges: !1,
              program: null,
              sourceFile: null,
              directSourceFile: null,
              preserveParens: !1,
            },
            ge = !1;
          function Ge(t) {
            var n = {};
            for (var l in je) n[l] = t && ye(t, l) ? t[l] : je[l];
            if (
              (n.ecmaVersion === 'latest'
                ? (n.ecmaVersion = 1e8)
                : n.ecmaVersion == null
                  ? (!ge &&
                      typeof console == 'object' &&
                      console.warn &&
                      ((ge = !0),
                      console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)),
                    (n.ecmaVersion = 11))
                  : n.ecmaVersion >= 2015 && (n.ecmaVersion -= 2009),
              n.allowReserved == null && (n.allowReserved = n.ecmaVersion < 5),
              (!t || t.allowHashBang == null) &&
                (n.allowHashBang = n.ecmaVersion >= 14),
              ve(n.onToken))
            ) {
              var p = n.onToken;
              n.onToken = function (y) {
                return p.push(y);
              };
            }
            return ve(n.onComment) && (n.onComment = Ft(n, n.onComment)), n;
          }
          function Ft(t, n) {
            return function (l, p, y, I, T, j) {
              var U = {
                type: l ? 'Block' : 'Line',
                value: p,
                start: y,
                end: I,
              };
              t.locations && (U.loc = new Me(this, T, j)),
                t.ranges && (U.range = [y, I]),
                n.push(U);
            };
          }
          var Ct = 1,
            ct = 2,
            _t = 4,
            Ze = 8,
            oi = 16,
            Be = 32,
            wt = 64,
            vt = 128,
            At = 256,
            Bt = Ct | ct | At;
          function qt(t, n) {
            return ct | (t ? _t : 0) | (n ? Ze : 0);
          }
          var kt = 0,
            Ut = 1,
            $e = 2,
            li = 3,
            Gt = 4,
            pe = 5,
            se = function (n, l, p) {
              (this.options = n = Ge(n)),
                (this.sourceFile = n.sourceFile),
                (this.keywords = _e(
                  E[
                    n.ecmaVersion >= 6
                      ? 6
                      : n.sourceType === 'module'
                        ? '5module'
                        : 5
                  ],
                ));
              var y = '';
              n.allowReserved !== !0 &&
                ((y = g[n.ecmaVersion >= 6 ? 6 : n.ecmaVersion === 5 ? 5 : 3]),
                n.sourceType === 'module' && (y += ' await')),
                (this.reservedWords = _e(y));
              var I = (y ? y + ' ' : '') + g.strict;
              (this.reservedWordsStrict = _e(I)),
                (this.reservedWordsStrictBind = _e(I + ' ' + g.strictBind)),
                (this.input = String(l)),
                (this.containsEsc = !1),
                p
                  ? ((this.pos = p),
                    (this.lineStart =
                      this.input.lastIndexOf(
                        `
`,
                        p - 1,
                      ) + 1),
                    (this.curLine = this.input
                      .slice(0, this.lineStart)
                      .split(B).length))
                  : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
                (this.type = o.eof),
                (this.value = null),
                (this.start = this.end = this.pos),
                (this.startLoc = this.endLoc = this.curPosition()),
                (this.lastTokEndLoc = this.lastTokStartLoc = null),
                (this.lastTokStart = this.lastTokEnd = this.pos),
                (this.context = this.initialContext()),
                (this.exprAllowed = !0),
                (this.inModule = n.sourceType === 'module'),
                (this.strict = this.inModule || this.strictDirective(this.pos)),
                (this.potentialArrowAt = -1),
                (this.potentialArrowInForAwait = !1),
                (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
                (this.labels = []),
                (this.undefinedExports = Object.create(null)),
                this.pos === 0 &&
                  n.allowHashBang &&
                  this.input.slice(0, 2) === '#!' &&
                  this.skipLineComment(2),
                (this.scopeStack = []),
                this.enterScope(Ct),
                (this.regexpState = null),
                (this.privateNameStack = []);
            },
            Y = {
              inFunction: { configurable: !0 },
              inGenerator: { configurable: !0 },
              inAsync: { configurable: !0 },
              canAwait: { configurable: !0 },
              allowSuper: { configurable: !0 },
              allowDirectSuper: { configurable: !0 },
              treatFunctionsAsVar: { configurable: !0 },
              allowNewDotTarget: { configurable: !0 },
              inClassStaticBlock: { configurable: !0 },
            };
          (se.prototype.parse = function () {
            var n = this.options.program || this.startNode();
            return this.nextToken(), this.parseTopLevel(n);
          }),
            (Y.inFunction.get = function () {
              return (this.currentVarScope().flags & ct) > 0;
            }),
            (Y.inGenerator.get = function () {
              return (
                (this.currentVarScope().flags & Ze) > 0 &&
                !this.currentVarScope().inClassFieldInit
              );
            }),
            (Y.inAsync.get = function () {
              return (
                (this.currentVarScope().flags & _t) > 0 &&
                !this.currentVarScope().inClassFieldInit
              );
            }),
            (Y.canAwait.get = function () {
              for (var t = this.scopeStack.length - 1; t >= 0; t--) {
                var n = this.scopeStack[t];
                if (n.inClassFieldInit || n.flags & At) return !1;
                if (n.flags & ct) return (n.flags & _t) > 0;
              }
              return (
                (this.inModule && this.options.ecmaVersion >= 13) ||
                this.options.allowAwaitOutsideFunction
              );
            }),
            (Y.allowSuper.get = function () {
              var t = this.currentThisScope(),
                n = t.flags,
                l = t.inClassFieldInit;
              return (n & wt) > 0 || l || this.options.allowSuperOutsideMethod;
            }),
            (Y.allowDirectSuper.get = function () {
              return (this.currentThisScope().flags & vt) > 0;
            }),
            (Y.treatFunctionsAsVar.get = function () {
              return this.treatFunctionsAsVarInScope(this.currentScope());
            }),
            (Y.allowNewDotTarget.get = function () {
              var t = this.currentThisScope(),
                n = t.flags,
                l = t.inClassFieldInit;
              return (n & (ct | At)) > 0 || l;
            }),
            (Y.inClassStaticBlock.get = function () {
              return (this.currentVarScope().flags & At) > 0;
            }),
            (se.extend = function () {
              for (var n = [], l = arguments.length; l--; ) n[l] = arguments[l];
              for (var p = this, y = 0; y < n.length; y++) p = n[y](p);
              return p;
            }),
            (se.parse = function (n, l) {
              return new this(l, n).parse();
            }),
            (se.parseExpressionAt = function (n, l, p) {
              var y = new this(p, n, l);
              return y.nextToken(), y.parseExpression();
            }),
            (se.tokenizer = function (n, l) {
              return new this(l, n);
            }),
            Object.defineProperties(se.prototype, Y);
          var de = se.prototype,
            be = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
          (de.strictDirective = function (t) {
            if (this.options.ecmaVersion < 5) return !1;
            for (;;) {
              (J.lastIndex = t), (t += J.exec(this.input)[0].length);
              var n = be.exec(this.input.slice(t));
              if (!n) return !1;
              if ((n[1] || n[2]) === 'use strict') {
                J.lastIndex = t + n[0].length;
                var l = J.exec(this.input),
                  p = l.index + l[0].length,
                  y = this.input.charAt(p);
                return (
                  y === ';' ||
                  y === '}' ||
                  (B.test(l[0]) &&
                    !(
                      /[(`.[+\-/*%<>=,?^&]/.test(y) ||
                      (y === '!' && this.input.charAt(p + 1) === '=')
                    ))
                );
              }
              (t += n[0].length),
                (J.lastIndex = t),
                (t += J.exec(this.input)[0].length),
                this.input[t] === ';' && t++;
            }
          }),
            (de.eat = function (t) {
              return this.type === t ? (this.next(), !0) : !1;
            }),
            (de.isContextual = function (t) {
              return (
                this.type === o.name && this.value === t && !this.containsEsc
              );
            }),
            (de.eatContextual = function (t) {
              return this.isContextual(t) ? (this.next(), !0) : !1;
            }),
            (de.expectContextual = function (t) {
              this.eatContextual(t) || this.unexpected();
            }),
            (de.canInsertSemicolon = function () {
              return (
                this.type === o.eof ||
                this.type === o.braceR ||
                B.test(this.input.slice(this.lastTokEnd, this.start))
              );
            }),
            (de.insertSemicolon = function () {
              if (this.canInsertSemicolon())
                return (
                  this.options.onInsertedSemicolon &&
                    this.options.onInsertedSemicolon(
                      this.lastTokEnd,
                      this.lastTokEndLoc,
                    ),
                  !0
                );
            }),
            (de.semicolon = function () {
              !this.eat(o.semi) && !this.insertSemicolon() && this.unexpected();
            }),
            (de.afterTrailingComma = function (t, n) {
              if (this.type === t)
                return (
                  this.options.onTrailingComma &&
                    this.options.onTrailingComma(
                      this.lastTokStart,
                      this.lastTokStartLoc,
                    ),
                  n || this.next(),
                  !0
                );
            }),
            (de.expect = function (t) {
              this.eat(t) || this.unexpected();
            }),
            (de.unexpected = function (t) {
              this.raise(t ?? this.start, 'Unexpected token');
            });
          var It = function () {
            this.shorthandAssign =
              this.trailingComma =
              this.parenthesizedAssign =
              this.parenthesizedBind =
              this.doubleProto =
                -1;
          };
          (de.checkPatternErrors = function (t, n) {
            if (t) {
              t.trailingComma > -1 &&
                this.raiseRecoverable(
                  t.trailingComma,
                  'Comma is not permitted after the rest element',
                );
              var l = n ? t.parenthesizedAssign : t.parenthesizedBind;
              l > -1 &&
                this.raiseRecoverable(
                  l,
                  n ? 'Assigning to rvalue' : 'Parenthesized pattern',
                );
            }
          }),
            (de.checkExpressionErrors = function (t, n) {
              if (!t) return !1;
              var l = t.shorthandAssign,
                p = t.doubleProto;
              if (!n) return l >= 0 || p >= 0;
              l >= 0 &&
                this.raise(
                  l,
                  'Shorthand property assignments are valid only in destructuring patterns',
                ),
                p >= 0 &&
                  this.raiseRecoverable(
                    p,
                    'Redefinition of __proto__ property',
                  );
            }),
            (de.checkYieldAwaitInDefaultParams = function () {
              this.yieldPos &&
                (!this.awaitPos || this.yieldPos < this.awaitPos) &&
                this.raise(
                  this.yieldPos,
                  'Yield expression cannot be a default value',
                ),
                this.awaitPos &&
                  this.raise(
                    this.awaitPos,
                    'Await expression cannot be a default value',
                  );
            }),
            (de.isSimpleAssignTarget = function (t) {
              return t.type === 'ParenthesizedExpression'
                ? this.isSimpleAssignTarget(t.expression)
                : t.type === 'Identifier' || t.type === 'MemberExpression';
            });
          var $ = se.prototype;
          $.parseTopLevel = function (t) {
            var n = Object.create(null);
            for (t.body || (t.body = []); this.type !== o.eof; ) {
              var l = this.parseStatement(null, !0, n);
              t.body.push(l);
            }
            if (this.inModule)
              for (
                var p = 0, y = Object.keys(this.undefinedExports);
                p < y.length;
                p += 1
              ) {
                var I = y[p];
                this.raiseRecoverable(
                  this.undefinedExports[I].start,
                  "Export '" + I + "' is not defined",
                );
              }
            return (
              this.adaptDirectivePrologue(t.body),
              this.next(),
              (t.sourceType = this.options.sourceType),
              this.finishNode(t, 'Program')
            );
          };
          var qe = { kind: 'loop' },
            hi = { kind: 'switch' };
          ($.isLet = function (t) {
            if (this.options.ecmaVersion < 6 || !this.isContextual('let'))
              return !1;
            J.lastIndex = this.pos;
            var n = J.exec(this.input),
              l = this.pos + n[0].length,
              p = this.input.charCodeAt(l);
            if (p === 91 || p === 92) return !0;
            if (t) return !1;
            if (p === 123 || (p > 55295 && p < 56320)) return !0;
            if (k(p, !0)) {
              for (var y = l + 1; F((p = this.input.charCodeAt(y)), !0); ) ++y;
              if (p === 92 || (p > 55295 && p < 56320)) return !0;
              var I = this.input.slice(l, y);
              if (!D.test(I)) return !0;
            }
            return !1;
          }),
            ($.isAsyncFunction = function () {
              if (this.options.ecmaVersion < 8 || !this.isContextual('async'))
                return !1;
              J.lastIndex = this.pos;
              var t = J.exec(this.input),
                n = this.pos + t[0].length,
                l;
              return (
                !B.test(this.input.slice(this.pos, n)) &&
                this.input.slice(n, n + 8) === 'function' &&
                (n + 8 === this.input.length ||
                  !(
                    F((l = this.input.charCodeAt(n + 8))) ||
                    (l > 55295 && l < 56320)
                  ))
              );
            }),
            ($.parseStatement = function (t, n, l) {
              var p = this.type,
                y = this.startNode(),
                I;
              switch ((this.isLet(t) && ((p = o._var), (I = 'let')), p)) {
                case o._break:
                case o._continue:
                  return this.parseBreakContinueStatement(y, p.keyword);
                case o._debugger:
                  return this.parseDebuggerStatement(y);
                case o._do:
                  return this.parseDoStatement(y);
                case o._for:
                  return this.parseForStatement(y);
                case o._function:
                  return (
                    t &&
                      (this.strict || (t !== 'if' && t !== 'label')) &&
                      this.options.ecmaVersion >= 6 &&
                      this.unexpected(),
                    this.parseFunctionStatement(y, !1, !t)
                  );
                case o._class:
                  return t && this.unexpected(), this.parseClass(y, !0);
                case o._if:
                  return this.parseIfStatement(y);
                case o._return:
                  return this.parseReturnStatement(y);
                case o._switch:
                  return this.parseSwitchStatement(y);
                case o._throw:
                  return this.parseThrowStatement(y);
                case o._try:
                  return this.parseTryStatement(y);
                case o._const:
                case o._var:
                  return (
                    (I = I || this.value),
                    t && I !== 'var' && this.unexpected(),
                    this.parseVarStatement(y, I)
                  );
                case o._while:
                  return this.parseWhileStatement(y);
                case o._with:
                  return this.parseWithStatement(y);
                case o.braceL:
                  return this.parseBlock(!0, y);
                case o.semi:
                  return this.parseEmptyStatement(y);
                case o._export:
                case o._import:
                  if (this.options.ecmaVersion > 10 && p === o._import) {
                    J.lastIndex = this.pos;
                    var T = J.exec(this.input),
                      j = this.pos + T[0].length,
                      U = this.input.charCodeAt(j);
                    if (U === 40 || U === 46)
                      return this.parseExpressionStatement(
                        y,
                        this.parseExpression(),
                      );
                  }
                  return (
                    this.options.allowImportExportEverywhere ||
                      (n ||
                        this.raise(
                          this.start,
                          "'import' and 'export' may only appear at the top level",
                        ),
                      this.inModule ||
                        this.raise(
                          this.start,
                          "'import' and 'export' may appear only with 'sourceType: module'",
                        )),
                    p === o._import
                      ? this.parseImport(y)
                      : this.parseExport(y, l)
                  );
                default:
                  if (this.isAsyncFunction())
                    return (
                      t && this.unexpected(),
                      this.next(),
                      this.parseFunctionStatement(y, !0, !t)
                    );
                  var re = this.value,
                    ie = this.parseExpression();
                  return p === o.name &&
                    ie.type === 'Identifier' &&
                    this.eat(o.colon)
                    ? this.parseLabeledStatement(y, re, ie, t)
                    : this.parseExpressionStatement(y, ie);
              }
            }),
            ($.parseBreakContinueStatement = function (t, n) {
              var l = n === 'break';
              this.next(),
                this.eat(o.semi) || this.insertSemicolon()
                  ? (t.label = null)
                  : this.type !== o.name
                    ? this.unexpected()
                    : ((t.label = this.parseIdent()), this.semicolon());
              for (var p = 0; p < this.labels.length; ++p) {
                var y = this.labels[p];
                if (
                  (t.label == null || y.name === t.label.name) &&
                  ((y.kind != null && (l || y.kind === 'loop')) ||
                    (t.label && l))
                )
                  break;
              }
              return (
                p === this.labels.length &&
                  this.raise(t.start, 'Unsyntactic ' + n),
                this.finishNode(t, l ? 'BreakStatement' : 'ContinueStatement')
              );
            }),
            ($.parseDebuggerStatement = function (t) {
              return (
                this.next(),
                this.semicolon(),
                this.finishNode(t, 'DebuggerStatement')
              );
            }),
            ($.parseDoStatement = function (t) {
              return (
                this.next(),
                this.labels.push(qe),
                (t.body = this.parseStatement('do')),
                this.labels.pop(),
                this.expect(o._while),
                (t.test = this.parseParenExpression()),
                this.options.ecmaVersion >= 6
                  ? this.eat(o.semi)
                  : this.semicolon(),
                this.finishNode(t, 'DoWhileStatement')
              );
            }),
            ($.parseForStatement = function (t) {
              this.next();
              var n =
                this.options.ecmaVersion >= 9 &&
                this.canAwait &&
                this.eatContextual('await')
                  ? this.lastTokStart
                  : -1;
              if (
                (this.labels.push(qe),
                this.enterScope(0),
                this.expect(o.parenL),
                this.type === o.semi)
              )
                return n > -1 && this.unexpected(n), this.parseFor(t, null);
              var l = this.isLet();
              if (this.type === o._var || this.type === o._const || l) {
                var p = this.startNode(),
                  y = l ? 'let' : this.value;
                return (
                  this.next(),
                  this.parseVar(p, !0, y),
                  this.finishNode(p, 'VariableDeclaration'),
                  (this.type === o._in ||
                    (this.options.ecmaVersion >= 6 &&
                      this.isContextual('of'))) &&
                  p.declarations.length === 1
                    ? (this.options.ecmaVersion >= 9 &&
                        (this.type === o._in
                          ? n > -1 && this.unexpected(n)
                          : (t.await = n > -1)),
                      this.parseForIn(t, p))
                    : (n > -1 && this.unexpected(n), this.parseFor(t, p))
                );
              }
              var I = this.isContextual('let'),
                T = !1,
                j = this.containsEsc,
                U = new It(),
                re = this.start,
                ie =
                  n > -1
                    ? this.parseExprSubscripts(U, 'await')
                    : this.parseExpression(!0, U);
              return this.type === o._in ||
                (T = this.options.ecmaVersion >= 6 && this.isContextual('of'))
                ? (n > -1
                    ? (this.type === o._in && this.unexpected(n),
                      (t.await = !0))
                    : T &&
                      this.options.ecmaVersion >= 8 &&
                      (ie.start === re &&
                      !j &&
                      ie.type === 'Identifier' &&
                      ie.name === 'async'
                        ? this.unexpected()
                        : this.options.ecmaVersion >= 9 && (t.await = !1)),
                  I &&
                    T &&
                    this.raise(
                      ie.start,
                      "The left-hand side of a for-of loop may not start with 'let'.",
                    ),
                  this.toAssignable(ie, !1, U),
                  this.checkLValPattern(ie),
                  this.parseForIn(t, ie))
                : (this.checkExpressionErrors(U, !0),
                  n > -1 && this.unexpected(n),
                  this.parseFor(t, ie));
            }),
            ($.parseFunctionStatement = function (t, n, l) {
              return (
                this.next(), this.parseFunction(t, De | (l ? 0 : Pt), !1, n)
              );
            }),
            ($.parseIfStatement = function (t) {
              return (
                this.next(),
                (t.test = this.parseParenExpression()),
                (t.consequent = this.parseStatement('if')),
                (t.alternate = this.eat(o._else)
                  ? this.parseStatement('if')
                  : null),
                this.finishNode(t, 'IfStatement')
              );
            }),
            ($.parseReturnStatement = function (t) {
              return (
                !this.inFunction &&
                  !this.options.allowReturnOutsideFunction &&
                  this.raise(this.start, "'return' outside of function"),
                this.next(),
                this.eat(o.semi) || this.insertSemicolon()
                  ? (t.argument = null)
                  : ((t.argument = this.parseExpression()), this.semicolon()),
                this.finishNode(t, 'ReturnStatement')
              );
            }),
            ($.parseSwitchStatement = function (t) {
              this.next(),
                (t.discriminant = this.parseParenExpression()),
                (t.cases = []),
                this.expect(o.braceL),
                this.labels.push(hi),
                this.enterScope(0);
              for (var n, l = !1; this.type !== o.braceR; )
                if (this.type === o._case || this.type === o._default) {
                  var p = this.type === o._case;
                  n && this.finishNode(n, 'SwitchCase'),
                    t.cases.push((n = this.startNode())),
                    (n.consequent = []),
                    this.next(),
                    p
                      ? (n.test = this.parseExpression())
                      : (l &&
                          this.raiseRecoverable(
                            this.lastTokStart,
                            'Multiple default clauses',
                          ),
                        (l = !0),
                        (n.test = null)),
                    this.expect(o.colon);
                } else
                  n || this.unexpected(),
                    n.consequent.push(this.parseStatement(null));
              return (
                this.exitScope(),
                n && this.finishNode(n, 'SwitchCase'),
                this.next(),
                this.labels.pop(),
                this.finishNode(t, 'SwitchStatement')
              );
            }),
            ($.parseThrowStatement = function (t) {
              return (
                this.next(),
                B.test(this.input.slice(this.lastTokEnd, this.start)) &&
                  this.raise(this.lastTokEnd, 'Illegal newline after throw'),
                (t.argument = this.parseExpression()),
                this.semicolon(),
                this.finishNode(t, 'ThrowStatement')
              );
            });
          var ft = [];
          ($.parseCatchClauseParam = function () {
            var t = this.parseBindingAtom(),
              n = t.type === 'Identifier';
            return (
              this.enterScope(n ? Be : 0),
              this.checkLValPattern(t, n ? Gt : $e),
              this.expect(o.parenR),
              t
            );
          }),
            ($.parseTryStatement = function (t) {
              if (
                (this.next(),
                (t.block = this.parseBlock()),
                (t.handler = null),
                this.type === o._catch)
              ) {
                var n = this.startNode();
                this.next(),
                  this.eat(o.parenL)
                    ? (n.param = this.parseCatchClauseParam())
                    : (this.options.ecmaVersion < 10 && this.unexpected(),
                      (n.param = null),
                      this.enterScope(0)),
                  (n.body = this.parseBlock(!1)),
                  this.exitScope(),
                  (t.handler = this.finishNode(n, 'CatchClause'));
              }
              return (
                (t.finalizer = this.eat(o._finally) ? this.parseBlock() : null),
                !t.handler &&
                  !t.finalizer &&
                  this.raise(t.start, 'Missing catch or finally clause'),
                this.finishNode(t, 'TryStatement')
              );
            }),
            ($.parseVarStatement = function (t, n, l) {
              return (
                this.next(),
                this.parseVar(t, !1, n, l),
                this.semicolon(),
                this.finishNode(t, 'VariableDeclaration')
              );
            }),
            ($.parseWhileStatement = function (t) {
              return (
                this.next(),
                (t.test = this.parseParenExpression()),
                this.labels.push(qe),
                (t.body = this.parseStatement('while')),
                this.labels.pop(),
                this.finishNode(t, 'WhileStatement')
              );
            }),
            ($.parseWithStatement = function (t) {
              return (
                this.strict && this.raise(this.start, "'with' in strict mode"),
                this.next(),
                (t.object = this.parseParenExpression()),
                (t.body = this.parseStatement('with')),
                this.finishNode(t, 'WithStatement')
              );
            }),
            ($.parseEmptyStatement = function (t) {
              return this.next(), this.finishNode(t, 'EmptyStatement');
            }),
            ($.parseLabeledStatement = function (t, n, l, p) {
              for (var y = 0, I = this.labels; y < I.length; y += 1) {
                var T = I[y];
                T.name === n &&
                  this.raise(l.start, "Label '" + n + "' is already declared");
              }
              for (
                var j = this.type.isLoop
                    ? 'loop'
                    : this.type === o._switch
                      ? 'switch'
                      : null,
                  U = this.labels.length - 1;
                U >= 0;
                U--
              ) {
                var re = this.labels[U];
                if (re.statementStart === t.start)
                  (re.statementStart = this.start), (re.kind = j);
                else break;
              }
              return (
                this.labels.push({
                  name: n,
                  kind: j,
                  statementStart: this.start,
                }),
                (t.body = this.parseStatement(
                  p ? (p.indexOf('label') === -1 ? p + 'label' : p) : 'label',
                )),
                this.labels.pop(),
                (t.label = l),
                this.finishNode(t, 'LabeledStatement')
              );
            }),
            ($.parseExpressionStatement = function (t, n) {
              return (
                (t.expression = n),
                this.semicolon(),
                this.finishNode(t, 'ExpressionStatement')
              );
            }),
            ($.parseBlock = function (t, n, l) {
              for (
                t === void 0 && (t = !0),
                  n === void 0 && (n = this.startNode()),
                  n.body = [],
                  this.expect(o.braceL),
                  t && this.enterScope(0);
                this.type !== o.braceR;

              ) {
                var p = this.parseStatement(null);
                n.body.push(p);
              }
              return (
                l && (this.strict = !1),
                this.next(),
                t && this.exitScope(),
                this.finishNode(n, 'BlockStatement')
              );
            }),
            ($.parseFor = function (t, n) {
              return (
                (t.init = n),
                this.expect(o.semi),
                (t.test = this.type === o.semi ? null : this.parseExpression()),
                this.expect(o.semi),
                (t.update =
                  this.type === o.parenR ? null : this.parseExpression()),
                this.expect(o.parenR),
                (t.body = this.parseStatement('for')),
                this.exitScope(),
                this.labels.pop(),
                this.finishNode(t, 'ForStatement')
              );
            }),
            ($.parseForIn = function (t, n) {
              var l = this.type === o._in;
              return (
                this.next(),
                n.type === 'VariableDeclaration' &&
                  n.declarations[0].init != null &&
                  (!l ||
                    this.options.ecmaVersion < 8 ||
                    this.strict ||
                    n.kind !== 'var' ||
                    n.declarations[0].id.type !== 'Identifier') &&
                  this.raise(
                    n.start,
                    (l ? 'for-in' : 'for-of') +
                      ' loop variable declaration may not have an initializer',
                  ),
                (t.left = n),
                (t.right = l
                  ? this.parseExpression()
                  : this.parseMaybeAssign()),
                this.expect(o.parenR),
                (t.body = this.parseStatement('for')),
                this.exitScope(),
                this.labels.pop(),
                this.finishNode(t, l ? 'ForInStatement' : 'ForOfStatement')
              );
            }),
            ($.parseVar = function (t, n, l, p) {
              for (t.declarations = [], t.kind = l; ; ) {
                var y = this.startNode();
                if (
                  (this.parseVarId(y, l),
                  this.eat(o.eq)
                    ? (y.init = this.parseMaybeAssign(n))
                    : !p &&
                        l === 'const' &&
                        !(
                          this.type === o._in ||
                          (this.options.ecmaVersion >= 6 &&
                            this.isContextual('of'))
                        )
                      ? this.unexpected()
                      : !p &&
                          y.id.type !== 'Identifier' &&
                          !(
                            n &&
                            (this.type === o._in || this.isContextual('of'))
                          )
                        ? this.raise(
                            this.lastTokEnd,
                            'Complex binding patterns require an initialization value',
                          )
                        : (y.init = null),
                  t.declarations.push(this.finishNode(y, 'VariableDeclarator')),
                  !this.eat(o.comma))
                )
                  break;
              }
              return t;
            }),
            ($.parseVarId = function (t, n) {
              (t.id = this.parseBindingAtom()),
                this.checkLValPattern(t.id, n === 'var' ? Ut : $e, !1);
            });
          var De = 1,
            Pt = 2,
            ci = 4;
          ($.parseFunction = function (t, n, l, p, y) {
            this.initFunction(t),
              (this.options.ecmaVersion >= 9 ||
                (this.options.ecmaVersion >= 6 && !p)) &&
                (this.type === o.star && n & Pt && this.unexpected(),
                (t.generator = this.eat(o.star))),
              this.options.ecmaVersion >= 8 && (t.async = !!p),
              n & De &&
                ((t.id =
                  n & ci && this.type !== o.name ? null : this.parseIdent()),
                t.id &&
                  !(n & Pt) &&
                  this.checkLValSimple(
                    t.id,
                    this.strict || t.generator || t.async
                      ? this.treatFunctionsAsVar
                        ? Ut
                        : $e
                      : li,
                  ));
            var I = this.yieldPos,
              T = this.awaitPos,
              j = this.awaitIdentPos;
            return (
              (this.yieldPos = 0),
              (this.awaitPos = 0),
              (this.awaitIdentPos = 0),
              this.enterScope(qt(t.async, t.generator)),
              n & De ||
                (t.id = this.type === o.name ? this.parseIdent() : null),
              this.parseFunctionParams(t),
              this.parseFunctionBody(t, l, !1, y),
              (this.yieldPos = I),
              (this.awaitPos = T),
              (this.awaitIdentPos = j),
              this.finishNode(
                t,
                n & De ? 'FunctionDeclaration' : 'FunctionExpression',
              )
            );
          }),
            ($.parseFunctionParams = function (t) {
              this.expect(o.parenL),
                (t.params = this.parseBindingList(
                  o.parenR,
                  !1,
                  this.options.ecmaVersion >= 8,
                )),
                this.checkYieldAwaitInDefaultParams();
            }),
            ($.parseClass = function (t, n) {
              this.next();
              var l = this.strict;
              (this.strict = !0),
                this.parseClassId(t, n),
                this.parseClassSuper(t);
              var p = this.enterClassBody(),
                y = this.startNode(),
                I = !1;
              for (
                y.body = [], this.expect(o.braceL);
                this.type !== o.braceR;

              ) {
                var T = this.parseClassElement(t.superClass !== null);
                T &&
                  (y.body.push(T),
                  T.type === 'MethodDefinition' && T.kind === 'constructor'
                    ? (I &&
                        this.raiseRecoverable(
                          T.start,
                          'Duplicate constructor in the same class',
                        ),
                      (I = !0))
                    : T.key &&
                      T.key.type === 'PrivateIdentifier' &&
                      Se(p, T) &&
                      this.raiseRecoverable(
                        T.key.start,
                        "Identifier '#" +
                          T.key.name +
                          "' has already been declared",
                      ));
              }
              return (
                (this.strict = l),
                this.next(),
                (t.body = this.finishNode(y, 'ClassBody')),
                this.exitClassBody(),
                this.finishNode(t, n ? 'ClassDeclaration' : 'ClassExpression')
              );
            }),
            ($.parseClassElement = function (t) {
              if (this.eat(o.semi)) return null;
              var n = this.options.ecmaVersion,
                l = this.startNode(),
                p = '',
                y = !1,
                I = !1,
                T = 'method',
                j = !1;
              if (this.eatContextual('static')) {
                if (n >= 13 && this.eat(o.braceL))
                  return this.parseClassStaticBlock(l), l;
                this.isClassElementNameStart() || this.type === o.star
                  ? (j = !0)
                  : (p = 'static');
              }
              if (
                ((l.static = j),
                !p &&
                  n >= 8 &&
                  this.eatContextual('async') &&
                  ((this.isClassElementNameStart() || this.type === o.star) &&
                  !this.canInsertSemicolon()
                    ? (I = !0)
                    : (p = 'async')),
                !p && (n >= 9 || !I) && this.eat(o.star) && (y = !0),
                !p && !I && !y)
              ) {
                var U = this.value;
                (this.eatContextual('get') || this.eatContextual('set')) &&
                  (this.isClassElementNameStart() ? (T = U) : (p = U));
              }
              if (
                (p
                  ? ((l.computed = !1),
                    (l.key = this.startNodeAt(
                      this.lastTokStart,
                      this.lastTokStartLoc,
                    )),
                    (l.key.name = p),
                    this.finishNode(l.key, 'Identifier'))
                  : this.parseClassElementName(l),
                n < 13 || this.type === o.parenL || T !== 'method' || y || I)
              ) {
                var re = !l.static && Te(l, 'constructor'),
                  ie = re && t;
                re &&
                  T !== 'method' &&
                  this.raise(
                    l.key.start,
                    "Constructor can't have get/set modifier",
                  ),
                  (l.kind = re ? 'constructor' : T),
                  this.parseClassMethod(l, y, I, ie);
              } else this.parseClassField(l);
              return l;
            }),
            ($.isClassElementNameStart = function () {
              return (
                this.type === o.name ||
                this.type === o.privateId ||
                this.type === o.num ||
                this.type === o.string ||
                this.type === o.bracketL ||
                this.type.keyword
              );
            }),
            ($.parseClassElementName = function (t) {
              this.type === o.privateId
                ? (this.value === 'constructor' &&
                    this.raise(
                      this.start,
                      "Classes can't have an element named '#constructor'",
                    ),
                  (t.computed = !1),
                  (t.key = this.parsePrivateIdent()))
                : this.parsePropertyName(t);
            }),
            ($.parseClassMethod = function (t, n, l, p) {
              var y = t.key;
              t.kind === 'constructor'
                ? (n && this.raise(y.start, "Constructor can't be a generator"),
                  l &&
                    this.raise(y.start, "Constructor can't be an async method"))
                : t.static &&
                  Te(t, 'prototype') &&
                  this.raise(
                    y.start,
                    'Classes may not have a static property named prototype',
                  );
              var I = (t.value = this.parseMethod(n, l, p));
              return (
                t.kind === 'get' &&
                  I.params.length !== 0 &&
                  this.raiseRecoverable(
                    I.start,
                    'getter should have no params',
                  ),
                t.kind === 'set' &&
                  I.params.length !== 1 &&
                  this.raiseRecoverable(
                    I.start,
                    'setter should have exactly one param',
                  ),
                t.kind === 'set' &&
                  I.params[0].type === 'RestElement' &&
                  this.raiseRecoverable(
                    I.params[0].start,
                    'Setter cannot use rest params',
                  ),
                this.finishNode(t, 'MethodDefinition')
              );
            }),
            ($.parseClassField = function (t) {
              if (
                (Te(t, 'constructor')
                  ? this.raise(
                      t.key.start,
                      "Classes can't have a field named 'constructor'",
                    )
                  : t.static &&
                    Te(t, 'prototype') &&
                    this.raise(
                      t.key.start,
                      "Classes can't have a static field named 'prototype'",
                    ),
                this.eat(o.eq))
              ) {
                var n = this.currentThisScope(),
                  l = n.inClassFieldInit;
                (n.inClassFieldInit = !0),
                  (t.value = this.parseMaybeAssign()),
                  (n.inClassFieldInit = l);
              } else t.value = null;
              return this.semicolon(), this.finishNode(t, 'PropertyDefinition');
            }),
            ($.parseClassStaticBlock = function (t) {
              t.body = [];
              var n = this.labels;
              for (
                this.labels = [], this.enterScope(At | wt);
                this.type !== o.braceR;

              ) {
                var l = this.parseStatement(null);
                t.body.push(l);
              }
              return (
                this.next(),
                this.exitScope(),
                (this.labels = n),
                this.finishNode(t, 'StaticBlock')
              );
            }),
            ($.parseClassId = function (t, n) {
              this.type === o.name
                ? ((t.id = this.parseIdent()),
                  n && this.checkLValSimple(t.id, $e, !1))
                : (n === !0 && this.unexpected(), (t.id = null));
            }),
            ($.parseClassSuper = function (t) {
              t.superClass = this.eat(o._extends)
                ? this.parseExprSubscripts(null, !1)
                : null;
            }),
            ($.enterClassBody = function () {
              var t = { declared: Object.create(null), used: [] };
              return this.privateNameStack.push(t), t.declared;
            }),
            ($.exitClassBody = function () {
              var t = this.privateNameStack.pop(),
                n = t.declared,
                l = t.used;
              if (this.options.checkPrivateFields)
                for (
                  var p = this.privateNameStack.length,
                    y = p === 0 ? null : this.privateNameStack[p - 1],
                    I = 0;
                  I < l.length;
                  ++I
                ) {
                  var T = l[I];
                  ye(n, T.name) ||
                    (y
                      ? y.used.push(T)
                      : this.raiseRecoverable(
                          T.start,
                          "Private field '#" +
                            T.name +
                            "' must be declared in an enclosing class",
                        ));
                }
            });
          function Se(t, n) {
            var l = n.key.name,
              p = t[l],
              y = 'true';
            return (
              n.type === 'MethodDefinition' &&
                (n.kind === 'get' || n.kind === 'set') &&
                (y = (n.static ? 's' : 'i') + n.kind),
              (p === 'iget' && y === 'iset') ||
              (p === 'iset' && y === 'iget') ||
              (p === 'sget' && y === 'sset') ||
              (p === 'sset' && y === 'sget')
                ? ((t[l] = 'true'), !1)
                : p
                  ? !0
                  : ((t[l] = y), !1)
            );
          }
          function Te(t, n) {
            var l = t.computed,
              p = t.key;
            return (
              !l &&
              ((p.type === 'Identifier' && p.name === n) ||
                (p.type === 'Literal' && p.value === n))
            );
          }
          ($.parseExportAllDeclaration = function (t, n) {
            return (
              this.options.ecmaVersion >= 11 &&
                (this.eatContextual('as')
                  ? ((t.exported = this.parseModuleExportName()),
                    this.checkExport(n, t.exported, this.lastTokStart))
                  : (t.exported = null)),
              this.expectContextual('from'),
              this.type !== o.string && this.unexpected(),
              (t.source = this.parseExprAtom()),
              this.semicolon(),
              this.finishNode(t, 'ExportAllDeclaration')
            );
          }),
            ($.parseExport = function (t, n) {
              if ((this.next(), this.eat(o.star)))
                return this.parseExportAllDeclaration(t, n);
              if (this.eat(o._default))
                return (
                  this.checkExport(n, 'default', this.lastTokStart),
                  (t.declaration = this.parseExportDefaultDeclaration()),
                  this.finishNode(t, 'ExportDefaultDeclaration')
                );
              if (this.shouldParseExportStatement())
                (t.declaration = this.parseExportDeclaration(t)),
                  t.declaration.type === 'VariableDeclaration'
                    ? this.checkVariableExport(n, t.declaration.declarations)
                    : this.checkExport(
                        n,
                        t.declaration.id,
                        t.declaration.id.start,
                      ),
                  (t.specifiers = []),
                  (t.source = null);
              else {
                if (
                  ((t.declaration = null),
                  (t.specifiers = this.parseExportSpecifiers(n)),
                  this.eatContextual('from'))
                )
                  this.type !== o.string && this.unexpected(),
                    (t.source = this.parseExprAtom());
                else {
                  for (var l = 0, p = t.specifiers; l < p.length; l += 1) {
                    var y = p[l];
                    this.checkUnreserved(y.local),
                      this.checkLocalExport(y.local),
                      y.local.type === 'Literal' &&
                        this.raise(
                          y.local.start,
                          'A string literal cannot be used as an exported binding without `from`.',
                        );
                  }
                  t.source = null;
                }
                this.semicolon();
              }
              return this.finishNode(t, 'ExportNamedDeclaration');
            }),
            ($.parseExportDeclaration = function (t) {
              return this.parseStatement(null);
            }),
            ($.parseExportDefaultDeclaration = function () {
              var t;
              if (this.type === o._function || (t = this.isAsyncFunction())) {
                var n = this.startNode();
                return (
                  this.next(),
                  t && this.next(),
                  this.parseFunction(n, De | ci, !1, t)
                );
              } else if (this.type === o._class) {
                var l = this.startNode();
                return this.parseClass(l, 'nullableID');
              } else {
                var p = this.parseMaybeAssign();
                return this.semicolon(), p;
              }
            }),
            ($.checkExport = function (t, n, l) {
              t &&
                (typeof n != 'string' &&
                  (n = n.type === 'Identifier' ? n.name : n.value),
                ye(t, n) &&
                  this.raiseRecoverable(l, "Duplicate export '" + n + "'"),
                (t[n] = !0));
            }),
            ($.checkPatternExport = function (t, n) {
              var l = n.type;
              if (l === 'Identifier') this.checkExport(t, n, n.start);
              else if (l === 'ObjectPattern')
                for (var p = 0, y = n.properties; p < y.length; p += 1) {
                  var I = y[p];
                  this.checkPatternExport(t, I);
                }
              else if (l === 'ArrayPattern')
                for (var T = 0, j = n.elements; T < j.length; T += 1) {
                  var U = j[T];
                  U && this.checkPatternExport(t, U);
                }
              else
                l === 'Property'
                  ? this.checkPatternExport(t, n.value)
                  : l === 'AssignmentPattern'
                    ? this.checkPatternExport(t, n.left)
                    : l === 'RestElement' &&
                      this.checkPatternExport(t, n.argument);
            }),
            ($.checkVariableExport = function (t, n) {
              if (t)
                for (var l = 0, p = n; l < p.length; l += 1) {
                  var y = p[l];
                  this.checkPatternExport(t, y.id);
                }
            }),
            ($.shouldParseExportStatement = function () {
              return (
                this.type.keyword === 'var' ||
                this.type.keyword === 'const' ||
                this.type.keyword === 'class' ||
                this.type.keyword === 'function' ||
                this.isLet() ||
                this.isAsyncFunction()
              );
            }),
            ($.parseExportSpecifier = function (t) {
              var n = this.startNode();
              return (
                (n.local = this.parseModuleExportName()),
                (n.exported = this.eatContextual('as')
                  ? this.parseModuleExportName()
                  : n.local),
                this.checkExport(t, n.exported, n.exported.start),
                this.finishNode(n, 'ExportSpecifier')
              );
            }),
            ($.parseExportSpecifiers = function (t) {
              var n = [],
                l = !0;
              for (this.expect(o.braceL); !this.eat(o.braceR); ) {
                if (l) l = !1;
                else if (
                  (this.expect(o.comma), this.afterTrailingComma(o.braceR))
                )
                  break;
                n.push(this.parseExportSpecifier(t));
              }
              return n;
            }),
            ($.parseImport = function (t) {
              return (
                this.next(),
                this.type === o.string
                  ? ((t.specifiers = ft), (t.source = this.parseExprAtom()))
                  : ((t.specifiers = this.parseImportSpecifiers()),
                    this.expectContextual('from'),
                    (t.source =
                      this.type === o.string
                        ? this.parseExprAtom()
                        : this.unexpected())),
                this.semicolon(),
                this.finishNode(t, 'ImportDeclaration')
              );
            }),
            ($.parseImportSpecifier = function () {
              var t = this.startNode();
              return (
                (t.imported = this.parseModuleExportName()),
                this.eatContextual('as')
                  ? (t.local = this.parseIdent())
                  : (this.checkUnreserved(t.imported), (t.local = t.imported)),
                this.checkLValSimple(t.local, $e),
                this.finishNode(t, 'ImportSpecifier')
              );
            }),
            ($.parseImportDefaultSpecifier = function () {
              var t = this.startNode();
              return (
                (t.local = this.parseIdent()),
                this.checkLValSimple(t.local, $e),
                this.finishNode(t, 'ImportDefaultSpecifier')
              );
            }),
            ($.parseImportNamespaceSpecifier = function () {
              var t = this.startNode();
              return (
                this.next(),
                this.expectContextual('as'),
                (t.local = this.parseIdent()),
                this.checkLValSimple(t.local, $e),
                this.finishNode(t, 'ImportNamespaceSpecifier')
              );
            }),
            ($.parseImportSpecifiers = function () {
              var t = [],
                n = !0;
              if (
                this.type === o.name &&
                (t.push(this.parseImportDefaultSpecifier()), !this.eat(o.comma))
              )
                return t;
              if (this.type === o.star)
                return t.push(this.parseImportNamespaceSpecifier()), t;
              for (this.expect(o.braceL); !this.eat(o.braceR); ) {
                if (n) n = !1;
                else if (
                  (this.expect(o.comma), this.afterTrailingComma(o.braceR))
                )
                  break;
                t.push(this.parseImportSpecifier());
              }
              return t;
            }),
            ($.parseModuleExportName = function () {
              if (this.options.ecmaVersion >= 13 && this.type === o.string) {
                var t = this.parseLiteral(this.value);
                return (
                  lt.test(t.value) &&
                    this.raise(
                      t.start,
                      'An export name cannot include a lone surrogate.',
                    ),
                  t
                );
              }
              return this.parseIdent(!0);
            }),
            ($.adaptDirectivePrologue = function (t) {
              for (
                var n = 0;
                n < t.length && this.isDirectiveCandidate(t[n]);
                ++n
              )
                t[n].directive = t[n].expression.raw.slice(1, -1);
            }),
            ($.isDirectiveCandidate = function (t) {
              return (
                this.options.ecmaVersion >= 5 &&
                t.type === 'ExpressionStatement' &&
                t.expression.type === 'Literal' &&
                typeof t.expression.value == 'string' &&
                (this.input[t.start] === '"' || this.input[t.start] === "'")
              );
            });
          var Ne = se.prototype;
          (Ne.toAssignable = function (t, n, l) {
            if (this.options.ecmaVersion >= 6 && t)
              switch (t.type) {
                case 'Identifier':
                  this.inAsync &&
                    t.name === 'await' &&
                    this.raise(
                      t.start,
                      "Cannot use 'await' as identifier inside an async function",
                    );
                  break;
                case 'ObjectPattern':
                case 'ArrayPattern':
                case 'AssignmentPattern':
                case 'RestElement':
                  break;
                case 'ObjectExpression':
                  (t.type = 'ObjectPattern'),
                    l && this.checkPatternErrors(l, !0);
                  for (var p = 0, y = t.properties; p < y.length; p += 1) {
                    var I = y[p];
                    this.toAssignable(I, n),
                      I.type === 'RestElement' &&
                        (I.argument.type === 'ArrayPattern' ||
                          I.argument.type === 'ObjectPattern') &&
                        this.raise(I.argument.start, 'Unexpected token');
                  }
                  break;
                case 'Property':
                  t.kind !== 'init' &&
                    this.raise(
                      t.key.start,
                      "Object pattern can't contain getter or setter",
                    ),
                    this.toAssignable(t.value, n);
                  break;
                case 'ArrayExpression':
                  (t.type = 'ArrayPattern'),
                    l && this.checkPatternErrors(l, !0),
                    this.toAssignableList(t.elements, n);
                  break;
                case 'SpreadElement':
                  (t.type = 'RestElement'),
                    this.toAssignable(t.argument, n),
                    t.argument.type === 'AssignmentPattern' &&
                      this.raise(
                        t.argument.start,
                        'Rest elements cannot have a default value',
                      );
                  break;
                case 'AssignmentExpression':
                  t.operator !== '=' &&
                    this.raise(
                      t.left.end,
                      "Only '=' operator can be used for specifying default value.",
                    ),
                    (t.type = 'AssignmentPattern'),
                    delete t.operator,
                    this.toAssignable(t.left, n);
                  break;
                case 'ParenthesizedExpression':
                  this.toAssignable(t.expression, n, l);
                  break;
                case 'ChainExpression':
                  this.raiseRecoverable(
                    t.start,
                    'Optional chaining cannot appear in left-hand side',
                  );
                  break;
                case 'MemberExpression':
                  if (!n) break;
                default:
                  this.raise(t.start, 'Assigning to rvalue');
              }
            else l && this.checkPatternErrors(l, !0);
            return t;
          }),
            (Ne.toAssignableList = function (t, n) {
              for (var l = t.length, p = 0; p < l; p++) {
                var y = t[p];
                y && this.toAssignable(y, n);
              }
              if (l) {
                var I = t[l - 1];
                this.options.ecmaVersion === 6 &&
                  n &&
                  I &&
                  I.type === 'RestElement' &&
                  I.argument.type !== 'Identifier' &&
                  this.unexpected(I.argument.start);
              }
              return t;
            }),
            (Ne.parseSpread = function (t) {
              var n = this.startNode();
              return (
                this.next(),
                (n.argument = this.parseMaybeAssign(!1, t)),
                this.finishNode(n, 'SpreadElement')
              );
            }),
            (Ne.parseRestBinding = function () {
              var t = this.startNode();
              return (
                this.next(),
                this.options.ecmaVersion === 6 &&
                  this.type !== o.name &&
                  this.unexpected(),
                (t.argument = this.parseBindingAtom()),
                this.finishNode(t, 'RestElement')
              );
            }),
            (Ne.parseBindingAtom = function () {
              if (this.options.ecmaVersion >= 6)
                switch (this.type) {
                  case o.bracketL:
                    var t = this.startNode();
                    return (
                      this.next(),
                      (t.elements = this.parseBindingList(o.bracketR, !0, !0)),
                      this.finishNode(t, 'ArrayPattern')
                    );
                  case o.braceL:
                    return this.parseObj(!0);
                }
              return this.parseIdent();
            }),
            (Ne.parseBindingList = function (t, n, l, p) {
              for (var y = [], I = !0; !this.eat(t); )
                if (
                  (I ? (I = !1) : this.expect(o.comma),
                  n && this.type === o.comma)
                )
                  y.push(null);
                else {
                  if (l && this.afterTrailingComma(t)) break;
                  if (this.type === o.ellipsis) {
                    var T = this.parseRestBinding();
                    this.parseBindingListItem(T),
                      y.push(T),
                      this.type === o.comma &&
                        this.raiseRecoverable(
                          this.start,
                          'Comma is not permitted after the rest element',
                        ),
                      this.expect(t);
                    break;
                  } else y.push(this.parseAssignableListItem(p));
                }
              return y;
            }),
            (Ne.parseAssignableListItem = function (t) {
              var n = this.parseMaybeDefault(this.start, this.startLoc);
              return this.parseBindingListItem(n), n;
            }),
            (Ne.parseBindingListItem = function (t) {
              return t;
            }),
            (Ne.parseMaybeDefault = function (t, n, l) {
              if (
                ((l = l || this.parseBindingAtom()),
                this.options.ecmaVersion < 6 || !this.eat(o.eq))
              )
                return l;
              var p = this.startNodeAt(t, n);
              return (
                (p.left = l),
                (p.right = this.parseMaybeAssign()),
                this.finishNode(p, 'AssignmentPattern')
              );
            }),
            (Ne.checkLValSimple = function (t, n, l) {
              n === void 0 && (n = kt);
              var p = n !== kt;
              switch (t.type) {
                case 'Identifier':
                  this.strict &&
                    this.reservedWordsStrictBind.test(t.name) &&
                    this.raiseRecoverable(
                      t.start,
                      (p ? 'Binding ' : 'Assigning to ') +
                        t.name +
                        ' in strict mode',
                    ),
                    p &&
                      (n === $e &&
                        t.name === 'let' &&
                        this.raiseRecoverable(
                          t.start,
                          'let is disallowed as a lexically bound name',
                        ),
                      l &&
                        (ye(l, t.name) &&
                          this.raiseRecoverable(t.start, 'Argument name clash'),
                        (l[t.name] = !0)),
                      n !== pe && this.declareName(t.name, n, t.start));
                  break;
                case 'ChainExpression':
                  this.raiseRecoverable(
                    t.start,
                    'Optional chaining cannot appear in left-hand side',
                  );
                  break;
                case 'MemberExpression':
                  p &&
                    this.raiseRecoverable(t.start, 'Binding member expression');
                  break;
                case 'ParenthesizedExpression':
                  return (
                    p &&
                      this.raiseRecoverable(
                        t.start,
                        'Binding parenthesized expression',
                      ),
                    this.checkLValSimple(t.expression, n, l)
                  );
                default:
                  this.raise(
                    t.start,
                    (p ? 'Binding' : 'Assigning to') + ' rvalue',
                  );
              }
            }),
            (Ne.checkLValPattern = function (t, n, l) {
              switch ((n === void 0 && (n = kt), t.type)) {
                case 'ObjectPattern':
                  for (var p = 0, y = t.properties; p < y.length; p += 1) {
                    var I = y[p];
                    this.checkLValInnerPattern(I, n, l);
                  }
                  break;
                case 'ArrayPattern':
                  for (var T = 0, j = t.elements; T < j.length; T += 1) {
                    var U = j[T];
                    U && this.checkLValInnerPattern(U, n, l);
                  }
                  break;
                default:
                  this.checkLValSimple(t, n, l);
              }
            }),
            (Ne.checkLValInnerPattern = function (t, n, l) {
              switch ((n === void 0 && (n = kt), t.type)) {
                case 'Property':
                  this.checkLValInnerPattern(t.value, n, l);
                  break;
                case 'AssignmentPattern':
                  this.checkLValPattern(t.left, n, l);
                  break;
                case 'RestElement':
                  this.checkLValPattern(t.argument, n, l);
                  break;
                default:
                  this.checkLValPattern(t, n, l);
              }
            });
          var Le = function (n, l, p, y, I) {
              (this.token = n),
                (this.isExpr = !!l),
                (this.preserveSpace = !!p),
                (this.override = y),
                (this.generator = !!I);
            },
            Ce = {
              b_stat: new Le('{', !1),
              b_expr: new Le('{', !0),
              b_tmpl: new Le('${', !1),
              p_stat: new Le('(', !1),
              p_expr: new Le('(', !0),
              q_tmpl: new Le('`', !0, !0, function (t) {
                return t.tryReadTemplateToken();
              }),
              f_stat: new Le('function', !1),
              f_expr: new Le('function', !0),
              f_expr_gen: new Le('function', !0, !1, null, !0),
              f_gen: new Le('function', !1, !1, null, !0),
            },
            pt = se.prototype;
          (pt.initialContext = function () {
            return [Ce.b_stat];
          }),
            (pt.curContext = function () {
              return this.context[this.context.length - 1];
            }),
            (pt.braceIsBlock = function (t) {
              var n = this.curContext();
              return n === Ce.f_expr || n === Ce.f_stat
                ? !0
                : t === o.colon && (n === Ce.b_stat || n === Ce.b_expr)
                  ? !n.isExpr
                  : t === o._return || (t === o.name && this.exprAllowed)
                    ? B.test(this.input.slice(this.lastTokEnd, this.start))
                    : t === o._else ||
                        t === o.semi ||
                        t === o.eof ||
                        t === o.parenR ||
                        t === o.arrow
                      ? !0
                      : t === o.braceL
                        ? n === Ce.b_stat
                        : t === o._var || t === o._const || t === o.name
                          ? !1
                          : !this.exprAllowed;
            }),
            (pt.inGeneratorContext = function () {
              for (var t = this.context.length - 1; t >= 1; t--) {
                var n = this.context[t];
                if (n.token === 'function') return n.generator;
              }
              return !1;
            }),
            (pt.updateContext = function (t) {
              var n,
                l = this.type;
              l.keyword && t === o.dot
                ? (this.exprAllowed = !1)
                : (n = l.updateContext)
                  ? n.call(this, t)
                  : (this.exprAllowed = l.beforeExpr);
            }),
            (pt.overrideContext = function (t) {
              this.curContext() !== t &&
                (this.context[this.context.length - 1] = t);
            }),
            (o.parenR.updateContext = o.braceR.updateContext =
              function () {
                if (this.context.length === 1) {
                  this.exprAllowed = !0;
                  return;
                }
                var t = this.context.pop();
                t === Ce.b_stat &&
                  this.curContext().token === 'function' &&
                  (t = this.context.pop()),
                  (this.exprAllowed = !t.isExpr);
              }),
            (o.braceL.updateContext = function (t) {
              this.context.push(this.braceIsBlock(t) ? Ce.b_stat : Ce.b_expr),
                (this.exprAllowed = !0);
            }),
            (o.dollarBraceL.updateContext = function () {
              this.context.push(Ce.b_tmpl), (this.exprAllowed = !0);
            }),
            (o.parenL.updateContext = function (t) {
              var n =
                t === o._if || t === o._for || t === o._with || t === o._while;
              this.context.push(n ? Ce.p_stat : Ce.p_expr),
                (this.exprAllowed = !0);
            }),
            (o.incDec.updateContext = function () {}),
            (o._function.updateContext = o._class.updateContext =
              function (t) {
                t.beforeExpr &&
                t !== o._else &&
                !(t === o.semi && this.curContext() !== Ce.p_stat) &&
                !(
                  t === o._return &&
                  B.test(this.input.slice(this.lastTokEnd, this.start))
                ) &&
                !(
                  (t === o.colon || t === o.braceL) &&
                  this.curContext() === Ce.b_stat
                )
                  ? this.context.push(Ce.f_expr)
                  : this.context.push(Ce.f_stat),
                  (this.exprAllowed = !1);
              }),
            (o.colon.updateContext = function () {
              this.curContext().token === 'function' && this.context.pop(),
                (this.exprAllowed = !0);
            }),
            (o.backQuote.updateContext = function () {
              this.curContext() === Ce.q_tmpl
                ? this.context.pop()
                : this.context.push(Ce.q_tmpl),
                (this.exprAllowed = !1);
            }),
            (o.star.updateContext = function (t) {
              if (t === o._function) {
                var n = this.context.length - 1;
                this.context[n] === Ce.f_expr
                  ? (this.context[n] = Ce.f_expr_gen)
                  : (this.context[n] = Ce.f_gen);
              }
              this.exprAllowed = !0;
            }),
            (o.name.updateContext = function (t) {
              var n = !1;
              this.options.ecmaVersion >= 6 &&
                t !== o.dot &&
                ((this.value === 'of' && !this.exprAllowed) ||
                  (this.value === 'yield' && this.inGeneratorContext())) &&
                (n = !0),
                (this.exprAllowed = n);
            });
          var ee = se.prototype;
          (ee.checkPropClash = function (t, n, l) {
            if (
              !(this.options.ecmaVersion >= 9 && t.type === 'SpreadElement') &&
              !(
                this.options.ecmaVersion >= 6 &&
                (t.computed || t.method || t.shorthand)
              )
            ) {
              var p = t.key,
                y;
              switch (p.type) {
                case 'Identifier':
                  y = p.name;
                  break;
                case 'Literal':
                  y = String(p.value);
                  break;
                default:
                  return;
              }
              var I = t.kind;
              if (this.options.ecmaVersion >= 6) {
                y === '__proto__' &&
                  I === 'init' &&
                  (n.proto &&
                    (l
                      ? l.doubleProto < 0 && (l.doubleProto = p.start)
                      : this.raiseRecoverable(
                          p.start,
                          'Redefinition of __proto__ property',
                        )),
                  (n.proto = !0));
                return;
              }
              y = '$' + y;
              var T = n[y];
              if (T) {
                var j;
                I === 'init'
                  ? (j = (this.strict && T.init) || T.get || T.set)
                  : (j = T.init || T[I]),
                  j &&
                    this.raiseRecoverable(p.start, 'Redefinition of property');
              } else T = n[y] = { init: !1, get: !1, set: !1 };
              T[I] = !0;
            }
          }),
            (ee.parseExpression = function (t, n) {
              var l = this.start,
                p = this.startLoc,
                y = this.parseMaybeAssign(t, n);
              if (this.type === o.comma) {
                var I = this.startNodeAt(l, p);
                for (I.expressions = [y]; this.eat(o.comma); )
                  I.expressions.push(this.parseMaybeAssign(t, n));
                return this.finishNode(I, 'SequenceExpression');
              }
              return y;
            }),
            (ee.parseMaybeAssign = function (t, n, l) {
              if (this.isContextual('yield')) {
                if (this.inGenerator) return this.parseYield(t);
                this.exprAllowed = !1;
              }
              var p = !1,
                y = -1,
                I = -1,
                T = -1;
              n
                ? ((y = n.parenthesizedAssign),
                  (I = n.trailingComma),
                  (T = n.doubleProto),
                  (n.parenthesizedAssign = n.trailingComma = -1))
                : ((n = new It()), (p = !0));
              var j = this.start,
                U = this.startLoc;
              (this.type === o.parenL || this.type === o.name) &&
                ((this.potentialArrowAt = this.start),
                (this.potentialArrowInForAwait = t === 'await'));
              var re = this.parseMaybeConditional(t, n);
              if ((l && (re = l.call(this, re, j, U)), this.type.isAssign)) {
                var ie = this.startNodeAt(j, U);
                return (
                  (ie.operator = this.value),
                  this.type === o.eq && (re = this.toAssignable(re, !1, n)),
                  p ||
                    (n.parenthesizedAssign =
                      n.trailingComma =
                      n.doubleProto =
                        -1),
                  n.shorthandAssign >= re.start && (n.shorthandAssign = -1),
                  this.type === o.eq
                    ? this.checkLValPattern(re)
                    : this.checkLValSimple(re),
                  (ie.left = re),
                  this.next(),
                  (ie.right = this.parseMaybeAssign(t)),
                  T > -1 && (n.doubleProto = T),
                  this.finishNode(ie, 'AssignmentExpression')
                );
              } else p && this.checkExpressionErrors(n, !0);
              return (
                y > -1 && (n.parenthesizedAssign = y),
                I > -1 && (n.trailingComma = I),
                re
              );
            }),
            (ee.parseMaybeConditional = function (t, n) {
              var l = this.start,
                p = this.startLoc,
                y = this.parseExprOps(t, n);
              if (this.checkExpressionErrors(n)) return y;
              if (this.eat(o.question)) {
                var I = this.startNodeAt(l, p);
                return (
                  (I.test = y),
                  (I.consequent = this.parseMaybeAssign()),
                  this.expect(o.colon),
                  (I.alternate = this.parseMaybeAssign(t)),
                  this.finishNode(I, 'ConditionalExpression')
                );
              }
              return y;
            }),
            (ee.parseExprOps = function (t, n) {
              var l = this.start,
                p = this.startLoc,
                y = this.parseMaybeUnary(n, !1, !1, t);
              return this.checkExpressionErrors(n) ||
                (y.start === l && y.type === 'ArrowFunctionExpression')
                ? y
                : this.parseExprOp(y, l, p, -1, t);
            }),
            (ee.parseExprOp = function (t, n, l, p, y) {
              var I = this.type.binop;
              if (I != null && (!y || this.type !== o._in) && I > p) {
                var T = this.type === o.logicalOR || this.type === o.logicalAND,
                  j = this.type === o.coalesce;
                j && (I = o.logicalAND.binop);
                var U = this.value;
                this.next();
                var re = this.start,
                  ie = this.startLoc,
                  Ie = this.parseExprOp(
                    this.parseMaybeUnary(null, !1, !1, y),
                    re,
                    ie,
                    I,
                    y,
                  ),
                  yt = this.buildBinary(n, l, t, Ie, U, T || j);
                return (
                  ((T && this.type === o.coalesce) ||
                    (j &&
                      (this.type === o.logicalOR ||
                        this.type === o.logicalAND))) &&
                    this.raiseRecoverable(
                      this.start,
                      'Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses',
                    ),
                  this.parseExprOp(yt, n, l, p, y)
                );
              }
              return t;
            }),
            (ee.buildBinary = function (t, n, l, p, y, I) {
              p.type === 'PrivateIdentifier' &&
                this.raise(
                  p.start,
                  'Private identifier can only be left side of binary expression',
                );
              var T = this.startNodeAt(t, n);
              return (
                (T.left = l),
                (T.operator = y),
                (T.right = p),
                this.finishNode(T, I ? 'LogicalExpression' : 'BinaryExpression')
              );
            }),
            (ee.parseMaybeUnary = function (t, n, l, p) {
              var y = this.start,
                I = this.startLoc,
                T;
              if (this.isContextual('await') && this.canAwait)
                (T = this.parseAwait(p)), (n = !0);
              else if (this.type.prefix) {
                var j = this.startNode(),
                  U = this.type === o.incDec;
                (j.operator = this.value),
                  (j.prefix = !0),
                  this.next(),
                  (j.argument = this.parseMaybeUnary(null, !0, U, p)),
                  this.checkExpressionErrors(t, !0),
                  U
                    ? this.checkLValSimple(j.argument)
                    : this.strict && j.operator === 'delete' && a(j.argument)
                      ? this.raiseRecoverable(
                          j.start,
                          'Deleting local variable in strict mode',
                        )
                      : j.operator === 'delete' && d(j.argument)
                        ? this.raiseRecoverable(
                            j.start,
                            'Private fields can not be deleted',
                          )
                        : (n = !0),
                  (T = this.finishNode(
                    j,
                    U ? 'UpdateExpression' : 'UnaryExpression',
                  ));
              } else if (!n && this.type === o.privateId)
                (p || this.privateNameStack.length === 0) &&
                  this.options.checkPrivateFields &&
                  this.unexpected(),
                  (T = this.parsePrivateIdent()),
                  this.type !== o._in && this.unexpected();
              else {
                if (
                  ((T = this.parseExprSubscripts(t, p)),
                  this.checkExpressionErrors(t))
                )
                  return T;
                for (; this.type.postfix && !this.canInsertSemicolon(); ) {
                  var re = this.startNodeAt(y, I);
                  (re.operator = this.value),
                    (re.prefix = !1),
                    (re.argument = T),
                    this.checkLValSimple(T),
                    this.next(),
                    (T = this.finishNode(re, 'UpdateExpression'));
                }
              }
              if (!l && this.eat(o.starstar))
                if (n) this.unexpected(this.lastTokStart);
                else
                  return this.buildBinary(
                    y,
                    I,
                    T,
                    this.parseMaybeUnary(null, !1, !1, p),
                    '**',
                    !1,
                  );
              else return T;
            });
          function a(t) {
            return (
              t.type === 'Identifier' ||
              (t.type === 'ParenthesizedExpression' && a(t.expression))
            );
          }
          function d(t) {
            return (
              (t.type === 'MemberExpression' &&
                t.property.type === 'PrivateIdentifier') ||
              (t.type === 'ChainExpression' && d(t.expression)) ||
              (t.type === 'ParenthesizedExpression' && d(t.expression))
            );
          }
          (ee.parseExprSubscripts = function (t, n) {
            var l = this.start,
              p = this.startLoc,
              y = this.parseExprAtom(t, n);
            if (
              y.type === 'ArrowFunctionExpression' &&
              this.input.slice(this.lastTokStart, this.lastTokEnd) !== ')'
            )
              return y;
            var I = this.parseSubscripts(y, l, p, !1, n);
            return (
              t &&
                I.type === 'MemberExpression' &&
                (t.parenthesizedAssign >= I.start &&
                  (t.parenthesizedAssign = -1),
                t.parenthesizedBind >= I.start && (t.parenthesizedBind = -1),
                t.trailingComma >= I.start && (t.trailingComma = -1)),
              I
            );
          }),
            (ee.parseSubscripts = function (t, n, l, p, y) {
              for (
                var I =
                    this.options.ecmaVersion >= 8 &&
                    t.type === 'Identifier' &&
                    t.name === 'async' &&
                    this.lastTokEnd === t.end &&
                    !this.canInsertSemicolon() &&
                    t.end - t.start === 5 &&
                    this.potentialArrowAt === t.start,
                  T = !1;
                ;

              ) {
                var j = this.parseSubscript(t, n, l, p, I, T, y);
                if (
                  (j.optional && (T = !0),
                  j === t || j.type === 'ArrowFunctionExpression')
                ) {
                  if (T) {
                    var U = this.startNodeAt(n, l);
                    (U.expression = j),
                      (j = this.finishNode(U, 'ChainExpression'));
                  }
                  return j;
                }
                t = j;
              }
            }),
            (ee.shouldParseAsyncArrow = function () {
              return !this.canInsertSemicolon() && this.eat(o.arrow);
            }),
            (ee.parseSubscriptAsyncArrow = function (t, n, l, p) {
              return this.parseArrowExpression(
                this.startNodeAt(t, n),
                l,
                !0,
                p,
              );
            }),
            (ee.parseSubscript = function (t, n, l, p, y, I, T) {
              var j = this.options.ecmaVersion >= 11,
                U = j && this.eat(o.questionDot);
              p &&
                U &&
                this.raise(
                  this.lastTokStart,
                  'Optional chaining cannot appear in the callee of new expressions',
                );
              var re = this.eat(o.bracketL);
              if (
                re ||
                (U && this.type !== o.parenL && this.type !== o.backQuote) ||
                this.eat(o.dot)
              ) {
                var ie = this.startNodeAt(n, l);
                (ie.object = t),
                  re
                    ? ((ie.property = this.parseExpression()),
                      this.expect(o.bracketR))
                    : this.type === o.privateId && t.type !== 'Super'
                      ? (ie.property = this.parsePrivateIdent())
                      : (ie.property = this.parseIdent(
                          this.options.allowReserved !== 'never',
                        )),
                  (ie.computed = !!re),
                  j && (ie.optional = U),
                  (t = this.finishNode(ie, 'MemberExpression'));
              } else if (!p && this.eat(o.parenL)) {
                var Ie = new It(),
                  yt = this.yieldPos,
                  zt = this.awaitPos,
                  Tt = this.awaitIdentPos;
                (this.yieldPos = 0),
                  (this.awaitPos = 0),
                  (this.awaitIdentPos = 0);
                var gi = this.parseExprList(
                  o.parenR,
                  this.options.ecmaVersion >= 8,
                  !1,
                  Ie,
                );
                if (y && !U && this.shouldParseAsyncArrow())
                  return (
                    this.checkPatternErrors(Ie, !1),
                    this.checkYieldAwaitInDefaultParams(),
                    this.awaitIdentPos > 0 &&
                      this.raise(
                        this.awaitIdentPos,
                        "Cannot use 'await' as identifier inside an async function",
                      ),
                    (this.yieldPos = yt),
                    (this.awaitPos = zt),
                    (this.awaitIdentPos = Tt),
                    this.parseSubscriptAsyncArrow(n, l, gi, T)
                  );
                this.checkExpressionErrors(Ie, !0),
                  (this.yieldPos = yt || this.yieldPos),
                  (this.awaitPos = zt || this.awaitPos),
                  (this.awaitIdentPos = Tt || this.awaitIdentPos);
                var Nt = this.startNodeAt(n, l);
                (Nt.callee = t),
                  (Nt.arguments = gi),
                  j && (Nt.optional = U),
                  (t = this.finishNode(Nt, 'CallExpression'));
              } else if (this.type === o.backQuote) {
                (U || I) &&
                  this.raise(
                    this.start,
                    'Optional chaining cannot appear in the tag of tagged template expressions',
                  );
                var Lt = this.startNodeAt(n, l);
                (Lt.tag = t),
                  (Lt.quasi = this.parseTemplate({ isTagged: !0 })),
                  (t = this.finishNode(Lt, 'TaggedTemplateExpression'));
              }
              return t;
            }),
            (ee.parseExprAtom = function (t, n, l) {
              this.type === o.slash && this.readRegexp();
              var p,
                y = this.potentialArrowAt === this.start;
              switch (this.type) {
                case o._super:
                  return (
                    this.allowSuper ||
                      this.raise(
                        this.start,
                        "'super' keyword outside a method",
                      ),
                    (p = this.startNode()),
                    this.next(),
                    this.type === o.parenL &&
                      !this.allowDirectSuper &&
                      this.raise(
                        p.start,
                        'super() call outside constructor of a subclass',
                      ),
                    this.type !== o.dot &&
                      this.type !== o.bracketL &&
                      this.type !== o.parenL &&
                      this.unexpected(),
                    this.finishNode(p, 'Super')
                  );
                case o._this:
                  return (
                    (p = this.startNode()),
                    this.next(),
                    this.finishNode(p, 'ThisExpression')
                  );
                case o.name:
                  var I = this.start,
                    T = this.startLoc,
                    j = this.containsEsc,
                    U = this.parseIdent(!1);
                  if (
                    this.options.ecmaVersion >= 8 &&
                    !j &&
                    U.name === 'async' &&
                    !this.canInsertSemicolon() &&
                    this.eat(o._function)
                  )
                    return (
                      this.overrideContext(Ce.f_expr),
                      this.parseFunction(this.startNodeAt(I, T), 0, !1, !0, n)
                    );
                  if (y && !this.canInsertSemicolon()) {
                    if (this.eat(o.arrow))
                      return this.parseArrowExpression(
                        this.startNodeAt(I, T),
                        [U],
                        !1,
                        n,
                      );
                    if (
                      this.options.ecmaVersion >= 8 &&
                      U.name === 'async' &&
                      this.type === o.name &&
                      !j &&
                      (!this.potentialArrowInForAwait ||
                        this.value !== 'of' ||
                        this.containsEsc)
                    )
                      return (
                        (U = this.parseIdent(!1)),
                        (this.canInsertSemicolon() || !this.eat(o.arrow)) &&
                          this.unexpected(),
                        this.parseArrowExpression(
                          this.startNodeAt(I, T),
                          [U],
                          !0,
                          n,
                        )
                      );
                  }
                  return U;
                case o.regexp:
                  var re = this.value;
                  return (
                    (p = this.parseLiteral(re.value)),
                    (p.regex = { pattern: re.pattern, flags: re.flags }),
                    p
                  );
                case o.num:
                case o.string:
                  return this.parseLiteral(this.value);
                case o._null:
                case o._true:
                case o._false:
                  return (
                    (p = this.startNode()),
                    (p.value =
                      this.type === o._null ? null : this.type === o._true),
                    (p.raw = this.type.keyword),
                    this.next(),
                    this.finishNode(p, 'Literal')
                  );
                case o.parenL:
                  var ie = this.start,
                    Ie = this.parseParenAndDistinguishExpression(y, n);
                  return (
                    t &&
                      (t.parenthesizedAssign < 0 &&
                        !this.isSimpleAssignTarget(Ie) &&
                        (t.parenthesizedAssign = ie),
                      t.parenthesizedBind < 0 && (t.parenthesizedBind = ie)),
                    Ie
                  );
                case o.bracketL:
                  return (
                    (p = this.startNode()),
                    this.next(),
                    (p.elements = this.parseExprList(o.bracketR, !0, !0, t)),
                    this.finishNode(p, 'ArrayExpression')
                  );
                case o.braceL:
                  return this.overrideContext(Ce.b_expr), this.parseObj(!1, t);
                case o._function:
                  return (
                    (p = this.startNode()),
                    this.next(),
                    this.parseFunction(p, 0)
                  );
                case o._class:
                  return this.parseClass(this.startNode(), !1);
                case o._new:
                  return this.parseNew();
                case o.backQuote:
                  return this.parseTemplate();
                case o._import:
                  return this.options.ecmaVersion >= 11
                    ? this.parseExprImport(l)
                    : this.unexpected();
                default:
                  return this.parseExprAtomDefault();
              }
            }),
            (ee.parseExprAtomDefault = function () {
              this.unexpected();
            }),
            (ee.parseExprImport = function (t) {
              var n = this.startNode();
              if (
                (this.containsEsc &&
                  this.raiseRecoverable(
                    this.start,
                    'Escape sequence in keyword import',
                  ),
                this.next(),
                this.type === o.parenL && !t)
              )
                return this.parseDynamicImport(n);
              if (this.type === o.dot) {
                var l = this.startNodeAt(n.start, n.loc && n.loc.start);
                return (
                  (l.name = 'import'),
                  (n.meta = this.finishNode(l, 'Identifier')),
                  this.parseImportMeta(n)
                );
              } else this.unexpected();
            }),
            (ee.parseDynamicImport = function (t) {
              if (
                (this.next(),
                (t.source = this.parseMaybeAssign()),
                !this.eat(o.parenR))
              ) {
                var n = this.start;
                this.eat(o.comma) && this.eat(o.parenR)
                  ? this.raiseRecoverable(
                      n,
                      'Trailing comma is not allowed in import()',
                    )
                  : this.unexpected(n);
              }
              return this.finishNode(t, 'ImportExpression');
            }),
            (ee.parseImportMeta = function (t) {
              this.next();
              var n = this.containsEsc;
              return (
                (t.property = this.parseIdent(!0)),
                t.property.name !== 'meta' &&
                  this.raiseRecoverable(
                    t.property.start,
                    "The only valid meta property for import is 'import.meta'",
                  ),
                n &&
                  this.raiseRecoverable(
                    t.start,
                    "'import.meta' must not contain escaped characters",
                  ),
                this.options.sourceType !== 'module' &&
                  !this.options.allowImportExportEverywhere &&
                  this.raiseRecoverable(
                    t.start,
                    "Cannot use 'import.meta' outside a module",
                  ),
                this.finishNode(t, 'MetaProperty')
              );
            }),
            (ee.parseLiteral = function (t) {
              var n = this.startNode();
              return (
                (n.value = t),
                (n.raw = this.input.slice(this.start, this.end)),
                n.raw.charCodeAt(n.raw.length - 1) === 110 &&
                  (n.bigint = n.raw.slice(0, -1).replace(/_/g, '')),
                this.next(),
                this.finishNode(n, 'Literal')
              );
            }),
            (ee.parseParenExpression = function () {
              this.expect(o.parenL);
              var t = this.parseExpression();
              return this.expect(o.parenR), t;
            }),
            (ee.shouldParseArrow = function (t) {
              return !this.canInsertSemicolon();
            }),
            (ee.parseParenAndDistinguishExpression = function (t, n) {
              var l = this.start,
                p = this.startLoc,
                y,
                I = this.options.ecmaVersion >= 8;
              if (this.options.ecmaVersion >= 6) {
                this.next();
                var T = this.start,
                  j = this.startLoc,
                  U = [],
                  re = !0,
                  ie = !1,
                  Ie = new It(),
                  yt = this.yieldPos,
                  zt = this.awaitPos,
                  Tt;
                for (
                  this.yieldPos = 0, this.awaitPos = 0;
                  this.type !== o.parenR;

                )
                  if (
                    (re ? (re = !1) : this.expect(o.comma),
                    I && this.afterTrailingComma(o.parenR, !0))
                  ) {
                    ie = !0;
                    break;
                  } else if (this.type === o.ellipsis) {
                    (Tt = this.start),
                      U.push(this.parseParenItem(this.parseRestBinding())),
                      this.type === o.comma &&
                        this.raiseRecoverable(
                          this.start,
                          'Comma is not permitted after the rest element',
                        );
                    break;
                  } else
                    U.push(this.parseMaybeAssign(!1, Ie, this.parseParenItem));
                var gi = this.lastTokEnd,
                  Nt = this.lastTokEndLoc;
                if (
                  (this.expect(o.parenR),
                  t && this.shouldParseArrow(U) && this.eat(o.arrow))
                )
                  return (
                    this.checkPatternErrors(Ie, !1),
                    this.checkYieldAwaitInDefaultParams(),
                    (this.yieldPos = yt),
                    (this.awaitPos = zt),
                    this.parseParenArrowList(l, p, U, n)
                  );
                (!U.length || ie) && this.unexpected(this.lastTokStart),
                  Tt && this.unexpected(Tt),
                  this.checkExpressionErrors(Ie, !0),
                  (this.yieldPos = yt || this.yieldPos),
                  (this.awaitPos = zt || this.awaitPos),
                  U.length > 1
                    ? ((y = this.startNodeAt(T, j)),
                      (y.expressions = U),
                      this.finishNodeAt(y, 'SequenceExpression', gi, Nt))
                    : (y = U[0]);
              } else y = this.parseParenExpression();
              if (this.options.preserveParens) {
                var Lt = this.startNodeAt(l, p);
                return (
                  (Lt.expression = y),
                  this.finishNode(Lt, 'ParenthesizedExpression')
                );
              } else return y;
            }),
            (ee.parseParenItem = function (t) {
              return t;
            }),
            (ee.parseParenArrowList = function (t, n, l, p) {
              return this.parseArrowExpression(
                this.startNodeAt(t, n),
                l,
                !1,
                p,
              );
            });
          var f = [];
          (ee.parseNew = function () {
            this.containsEsc &&
              this.raiseRecoverable(
                this.start,
                'Escape sequence in keyword new',
              );
            var t = this.startNode();
            if (
              (this.next(),
              this.options.ecmaVersion >= 6 && this.type === o.dot)
            ) {
              var n = this.startNodeAt(t.start, t.loc && t.loc.start);
              (n.name = 'new'),
                (t.meta = this.finishNode(n, 'Identifier')),
                this.next();
              var l = this.containsEsc;
              return (
                (t.property = this.parseIdent(!0)),
                t.property.name !== 'target' &&
                  this.raiseRecoverable(
                    t.property.start,
                    "The only valid meta property for new is 'new.target'",
                  ),
                l &&
                  this.raiseRecoverable(
                    t.start,
                    "'new.target' must not contain escaped characters",
                  ),
                this.allowNewDotTarget ||
                  this.raiseRecoverable(
                    t.start,
                    "'new.target' can only be used in functions and class static block",
                  ),
                this.finishNode(t, 'MetaProperty')
              );
            }
            var p = this.start,
              y = this.startLoc;
            return (
              (t.callee = this.parseSubscripts(
                this.parseExprAtom(null, !1, !0),
                p,
                y,
                !0,
                !1,
              )),
              this.eat(o.parenL)
                ? (t.arguments = this.parseExprList(
                    o.parenR,
                    this.options.ecmaVersion >= 8,
                    !1,
                  ))
                : (t.arguments = f),
              this.finishNode(t, 'NewExpression')
            );
          }),
            (ee.parseTemplateElement = function (t) {
              var n = t.isTagged,
                l = this.startNode();
              return (
                this.type === o.invalidTemplate
                  ? (n ||
                      this.raiseRecoverable(
                        this.start,
                        'Bad escape sequence in untagged template literal',
                      ),
                    (l.value = {
                      raw: this.value.replace(
                        /\r\n?/g,
                        `
`,
                      ),
                      cooked: null,
                    }))
                  : (l.value = {
                      raw: this.input.slice(this.start, this.end).replace(
                        /\r\n?/g,
                        `
`,
                      ),
                      cooked: this.value,
                    }),
                this.next(),
                (l.tail = this.type === o.backQuote),
                this.finishNode(l, 'TemplateElement')
              );
            }),
            (ee.parseTemplate = function (t) {
              t === void 0 && (t = {});
              var n = t.isTagged;
              n === void 0 && (n = !1);
              var l = this.startNode();
              this.next(), (l.expressions = []);
              var p = this.parseTemplateElement({ isTagged: n });
              for (l.quasis = [p]; !p.tail; )
                this.type === o.eof &&
                  this.raise(this.pos, 'Unterminated template literal'),
                  this.expect(o.dollarBraceL),
                  l.expressions.push(this.parseExpression()),
                  this.expect(o.braceR),
                  l.quasis.push(
                    (p = this.parseTemplateElement({ isTagged: n })),
                  );
              return this.next(), this.finishNode(l, 'TemplateLiteral');
            }),
            (ee.isAsyncProp = function (t) {
              return (
                !t.computed &&
                t.key.type === 'Identifier' &&
                t.key.name === 'async' &&
                (this.type === o.name ||
                  this.type === o.num ||
                  this.type === o.string ||
                  this.type === o.bracketL ||
                  this.type.keyword ||
                  (this.options.ecmaVersion >= 9 && this.type === o.star)) &&
                !B.test(this.input.slice(this.lastTokEnd, this.start))
              );
            }),
            (ee.parseObj = function (t, n) {
              var l = this.startNode(),
                p = !0,
                y = {};
              for (l.properties = [], this.next(); !this.eat(o.braceR); ) {
                if (p) p = !1;
                else if (
                  (this.expect(o.comma),
                  this.options.ecmaVersion >= 5 &&
                    this.afterTrailingComma(o.braceR))
                )
                  break;
                var I = this.parseProperty(t, n);
                t || this.checkPropClash(I, y, n), l.properties.push(I);
              }
              return this.finishNode(
                l,
                t ? 'ObjectPattern' : 'ObjectExpression',
              );
            }),
            (ee.parseProperty = function (t, n) {
              var l = this.startNode(),
                p,
                y,
                I,
                T;
              if (this.options.ecmaVersion >= 9 && this.eat(o.ellipsis))
                return t
                  ? ((l.argument = this.parseIdent(!1)),
                    this.type === o.comma &&
                      this.raiseRecoverable(
                        this.start,
                        'Comma is not permitted after the rest element',
                      ),
                    this.finishNode(l, 'RestElement'))
                  : ((l.argument = this.parseMaybeAssign(!1, n)),
                    this.type === o.comma &&
                      n &&
                      n.trailingComma < 0 &&
                      (n.trailingComma = this.start),
                    this.finishNode(l, 'SpreadElement'));
              this.options.ecmaVersion >= 6 &&
                ((l.method = !1),
                (l.shorthand = !1),
                (t || n) && ((I = this.start), (T = this.startLoc)),
                t || (p = this.eat(o.star)));
              var j = this.containsEsc;
              return (
                this.parsePropertyName(l),
                !t &&
                !j &&
                this.options.ecmaVersion >= 8 &&
                !p &&
                this.isAsyncProp(l)
                  ? ((y = !0),
                    (p = this.options.ecmaVersion >= 9 && this.eat(o.star)),
                    this.parsePropertyName(l))
                  : (y = !1),
                this.parsePropertyValue(l, t, p, y, I, T, n, j),
                this.finishNode(l, 'Property')
              );
            }),
            (ee.parseGetterSetter = function (t) {
              (t.kind = t.key.name),
                this.parsePropertyName(t),
                (t.value = this.parseMethod(!1));
              var n = t.kind === 'get' ? 0 : 1;
              if (t.value.params.length !== n) {
                var l = t.value.start;
                t.kind === 'get'
                  ? this.raiseRecoverable(l, 'getter should have no params')
                  : this.raiseRecoverable(
                      l,
                      'setter should have exactly one param',
                    );
              } else
                t.kind === 'set' &&
                  t.value.params[0].type === 'RestElement' &&
                  this.raiseRecoverable(
                    t.value.params[0].start,
                    'Setter cannot use rest params',
                  );
            }),
            (ee.parsePropertyValue = function (t, n, l, p, y, I, T, j) {
              (l || p) && this.type === o.colon && this.unexpected(),
                this.eat(o.colon)
                  ? ((t.value = n
                      ? this.parseMaybeDefault(this.start, this.startLoc)
                      : this.parseMaybeAssign(!1, T)),
                    (t.kind = 'init'))
                  : this.options.ecmaVersion >= 6 && this.type === o.parenL
                    ? (n && this.unexpected(),
                      (t.kind = 'init'),
                      (t.method = !0),
                      (t.value = this.parseMethod(l, p)))
                    : !n &&
                        !j &&
                        this.options.ecmaVersion >= 5 &&
                        !t.computed &&
                        t.key.type === 'Identifier' &&
                        (t.key.name === 'get' || t.key.name === 'set') &&
                        this.type !== o.comma &&
                        this.type !== o.braceR &&
                        this.type !== o.eq
                      ? ((l || p) && this.unexpected(),
                        this.parseGetterSetter(t))
                      : this.options.ecmaVersion >= 6 &&
                          !t.computed &&
                          t.key.type === 'Identifier'
                        ? ((l || p) && this.unexpected(),
                          this.checkUnreserved(t.key),
                          t.key.name === 'await' &&
                            !this.awaitIdentPos &&
                            (this.awaitIdentPos = y),
                          (t.kind = 'init'),
                          n
                            ? (t.value = this.parseMaybeDefault(
                                y,
                                I,
                                this.copyNode(t.key),
                              ))
                            : this.type === o.eq && T
                              ? (T.shorthandAssign < 0 &&
                                  (T.shorthandAssign = this.start),
                                (t.value = this.parseMaybeDefault(
                                  y,
                                  I,
                                  this.copyNode(t.key),
                                )))
                              : (t.value = this.copyNode(t.key)),
                          (t.shorthand = !0))
                        : this.unexpected();
            }),
            (ee.parsePropertyName = function (t) {
              if (this.options.ecmaVersion >= 6) {
                if (this.eat(o.bracketL))
                  return (
                    (t.computed = !0),
                    (t.key = this.parseMaybeAssign()),
                    this.expect(o.bracketR),
                    t.key
                  );
                t.computed = !1;
              }
              return (t.key =
                this.type === o.num || this.type === o.string
                  ? this.parseExprAtom()
                  : this.parseIdent(this.options.allowReserved !== 'never'));
            }),
            (ee.initFunction = function (t) {
              (t.id = null),
                this.options.ecmaVersion >= 6 &&
                  (t.generator = t.expression = !1),
                this.options.ecmaVersion >= 8 && (t.async = !1);
            }),
            (ee.parseMethod = function (t, n, l) {
              var p = this.startNode(),
                y = this.yieldPos,
                I = this.awaitPos,
                T = this.awaitIdentPos;
              return (
                this.initFunction(p),
                this.options.ecmaVersion >= 6 && (p.generator = t),
                this.options.ecmaVersion >= 8 && (p.async = !!n),
                (this.yieldPos = 0),
                (this.awaitPos = 0),
                (this.awaitIdentPos = 0),
                this.enterScope(qt(n, p.generator) | wt | (l ? vt : 0)),
                this.expect(o.parenL),
                (p.params = this.parseBindingList(
                  o.parenR,
                  !1,
                  this.options.ecmaVersion >= 8,
                )),
                this.checkYieldAwaitInDefaultParams(),
                this.parseFunctionBody(p, !1, !0, !1),
                (this.yieldPos = y),
                (this.awaitPos = I),
                (this.awaitIdentPos = T),
                this.finishNode(p, 'FunctionExpression')
              );
            }),
            (ee.parseArrowExpression = function (t, n, l, p) {
              var y = this.yieldPos,
                I = this.awaitPos,
                T = this.awaitIdentPos;
              return (
                this.enterScope(qt(l, !1) | oi),
                this.initFunction(t),
                this.options.ecmaVersion >= 8 && (t.async = !!l),
                (this.yieldPos = 0),
                (this.awaitPos = 0),
                (this.awaitIdentPos = 0),
                (t.params = this.toAssignableList(n, !0)),
                this.parseFunctionBody(t, !0, !1, p),
                (this.yieldPos = y),
                (this.awaitPos = I),
                (this.awaitIdentPos = T),
                this.finishNode(t, 'ArrowFunctionExpression')
              );
            }),
            (ee.parseFunctionBody = function (t, n, l, p) {
              var y = n && this.type !== o.braceL,
                I = this.strict,
                T = !1;
              if (y)
                (t.body = this.parseMaybeAssign(p)),
                  (t.expression = !0),
                  this.checkParams(t, !1);
              else {
                var j =
                  this.options.ecmaVersion >= 7 &&
                  !this.isSimpleParamList(t.params);
                (!I || j) &&
                  ((T = this.strictDirective(this.end)),
                  T &&
                    j &&
                    this.raiseRecoverable(
                      t.start,
                      "Illegal 'use strict' directive in function with non-simple parameter list",
                    ));
                var U = this.labels;
                (this.labels = []),
                  T && (this.strict = !0),
                  this.checkParams(
                    t,
                    !I && !T && !n && !l && this.isSimpleParamList(t.params),
                  ),
                  this.strict && t.id && this.checkLValSimple(t.id, pe),
                  (t.body = this.parseBlock(!1, void 0, T && !I)),
                  (t.expression = !1),
                  this.adaptDirectivePrologue(t.body.body),
                  (this.labels = U);
              }
              this.exitScope();
            }),
            (ee.isSimpleParamList = function (t) {
              for (var n = 0, l = t; n < l.length; n += 1) {
                var p = l[n];
                if (p.type !== 'Identifier') return !1;
              }
              return !0;
            }),
            (ee.checkParams = function (t, n) {
              for (
                var l = Object.create(null), p = 0, y = t.params;
                p < y.length;
                p += 1
              ) {
                var I = y[p];
                this.checkLValInnerPattern(I, Ut, n ? null : l);
              }
            }),
            (ee.parseExprList = function (t, n, l, p) {
              for (var y = [], I = !0; !this.eat(t); ) {
                if (I) I = !1;
                else if (
                  (this.expect(o.comma), n && this.afterTrailingComma(t))
                )
                  break;
                var T = void 0;
                l && this.type === o.comma
                  ? (T = null)
                  : this.type === o.ellipsis
                    ? ((T = this.parseSpread(p)),
                      p &&
                        this.type === o.comma &&
                        p.trailingComma < 0 &&
                        (p.trailingComma = this.start))
                    : (T = this.parseMaybeAssign(!1, p)),
                  y.push(T);
              }
              return y;
            }),
            (ee.checkUnreserved = function (t) {
              var n = t.start,
                l = t.end,
                p = t.name;
              if (
                (this.inGenerator &&
                  p === 'yield' &&
                  this.raiseRecoverable(
                    n,
                    "Cannot use 'yield' as identifier inside a generator",
                  ),
                this.inAsync &&
                  p === 'await' &&
                  this.raiseRecoverable(
                    n,
                    "Cannot use 'await' as identifier inside an async function",
                  ),
                this.currentThisScope().inClassFieldInit &&
                  p === 'arguments' &&
                  this.raiseRecoverable(
                    n,
                    "Cannot use 'arguments' in class field initializer",
                  ),
                this.inClassStaticBlock &&
                  (p === 'arguments' || p === 'await') &&
                  this.raise(
                    n,
                    'Cannot use ' + p + ' in class static initialization block',
                  ),
                this.keywords.test(p) &&
                  this.raise(n, "Unexpected keyword '" + p + "'"),
                !(
                  this.options.ecmaVersion < 6 &&
                  this.input.slice(n, l).indexOf('\\') !== -1
                ))
              ) {
                var y = this.strict
                  ? this.reservedWordsStrict
                  : this.reservedWords;
                y.test(p) &&
                  (!this.inAsync &&
                    p === 'await' &&
                    this.raiseRecoverable(
                      n,
                      "Cannot use keyword 'await' outside an async function",
                    ),
                  this.raiseRecoverable(
                    n,
                    "The keyword '" + p + "' is reserved",
                  ));
              }
            }),
            (ee.parseIdent = function (t) {
              var n = this.parseIdentNode();
              return (
                this.next(!!t),
                this.finishNode(n, 'Identifier'),
                t ||
                  (this.checkUnreserved(n),
                  n.name === 'await' &&
                    !this.awaitIdentPos &&
                    (this.awaitIdentPos = n.start)),
                n
              );
            }),
            (ee.parseIdentNode = function () {
              var t = this.startNode();
              return (
                this.type === o.name
                  ? (t.name = this.value)
                  : this.type.keyword
                    ? ((t.name = this.type.keyword),
                      (t.name === 'class' || t.name === 'function') &&
                        (this.lastTokEnd !== this.lastTokStart + 1 ||
                          this.input.charCodeAt(this.lastTokStart) !== 46) &&
                        this.context.pop(),
                      (this.type = o.name))
                    : this.unexpected(),
                t
              );
            }),
            (ee.parsePrivateIdent = function () {
              var t = this.startNode();
              return (
                this.type === o.privateId
                  ? (t.name = this.value)
                  : this.unexpected(),
                this.next(),
                this.finishNode(t, 'PrivateIdentifier'),
                this.options.checkPrivateFields &&
                  (this.privateNameStack.length === 0
                    ? this.raise(
                        t.start,
                        "Private field '#" +
                          t.name +
                          "' must be declared in an enclosing class",
                      )
                    : this.privateNameStack[
                        this.privateNameStack.length - 1
                      ].used.push(t)),
                t
              );
            }),
            (ee.parseYield = function (t) {
              this.yieldPos || (this.yieldPos = this.start);
              var n = this.startNode();
              return (
                this.next(),
                this.type === o.semi ||
                this.canInsertSemicolon() ||
                (this.type !== o.star && !this.type.startsExpr)
                  ? ((n.delegate = !1), (n.argument = null))
                  : ((n.delegate = this.eat(o.star)),
                    (n.argument = this.parseMaybeAssign(t))),
                this.finishNode(n, 'YieldExpression')
              );
            }),
            (ee.parseAwait = function (t) {
              this.awaitPos || (this.awaitPos = this.start);
              var n = this.startNode();
              return (
                this.next(),
                (n.argument = this.parseMaybeUnary(null, !0, !1, t)),
                this.finishNode(n, 'AwaitExpression')
              );
            });
          var m = se.prototype;
          (m.raise = function (t, n) {
            var l = ht(this.input, t);
            n += ' (' + l.line + ':' + l.column + ')';
            var p = new SyntaxError(n);
            throw ((p.pos = t), (p.loc = l), (p.raisedAt = this.pos), p);
          }),
            (m.raiseRecoverable = m.raise),
            (m.curPosition = function () {
              if (this.options.locations)
                return new W(this.curLine, this.pos - this.lineStart);
            });
          var v = se.prototype,
            L = function (n) {
              (this.flags = n),
                (this.var = []),
                (this.lexical = []),
                (this.functions = []),
                (this.inClassFieldInit = !1);
            };
          (v.enterScope = function (t) {
            this.scopeStack.push(new L(t));
          }),
            (v.exitScope = function () {
              this.scopeStack.pop();
            }),
            (v.treatFunctionsAsVarInScope = function (t) {
              return t.flags & ct || (!this.inModule && t.flags & Ct);
            }),
            (v.declareName = function (t, n, l) {
              var p = !1;
              if (n === $e) {
                var y = this.currentScope();
                (p =
                  y.lexical.indexOf(t) > -1 ||
                  y.functions.indexOf(t) > -1 ||
                  y.var.indexOf(t) > -1),
                  y.lexical.push(t),
                  this.inModule &&
                    y.flags & Ct &&
                    delete this.undefinedExports[t];
              } else if (n === Gt) {
                var I = this.currentScope();
                I.lexical.push(t);
              } else if (n === li) {
                var T = this.currentScope();
                this.treatFunctionsAsVar
                  ? (p = T.lexical.indexOf(t) > -1)
                  : (p = T.lexical.indexOf(t) > -1 || T.var.indexOf(t) > -1),
                  T.functions.push(t);
              } else
                for (var j = this.scopeStack.length - 1; j >= 0; --j) {
                  var U = this.scopeStack[j];
                  if (
                    (U.lexical.indexOf(t) > -1 &&
                      !(U.flags & Be && U.lexical[0] === t)) ||
                    (!this.treatFunctionsAsVarInScope(U) &&
                      U.functions.indexOf(t) > -1)
                  ) {
                    p = !0;
                    break;
                  }
                  if (
                    (U.var.push(t),
                    this.inModule &&
                      U.flags & Ct &&
                      delete this.undefinedExports[t],
                    U.flags & Bt)
                  )
                    break;
                }
              p &&
                this.raiseRecoverable(
                  l,
                  "Identifier '" + t + "' has already been declared",
                );
            }),
            (v.checkLocalExport = function (t) {
              this.scopeStack[0].lexical.indexOf(t.name) === -1 &&
                this.scopeStack[0].var.indexOf(t.name) === -1 &&
                (this.undefinedExports[t.name] = t);
            }),
            (v.currentScope = function () {
              return this.scopeStack[this.scopeStack.length - 1];
            }),
            (v.currentVarScope = function () {
              for (var t = this.scopeStack.length - 1; ; t--) {
                var n = this.scopeStack[t];
                if (n.flags & Bt) return n;
              }
            }),
            (v.currentThisScope = function () {
              for (var t = this.scopeStack.length - 1; ; t--) {
                var n = this.scopeStack[t];
                if (n.flags & Bt && !(n.flags & oi)) return n;
              }
            });
          var O = function (n, l, p) {
              (this.type = ''),
                (this.start = l),
                (this.end = 0),
                n.options.locations && (this.loc = new Me(n, p)),
                n.options.directSourceFile &&
                  (this.sourceFile = n.options.directSourceFile),
                n.options.ranges && (this.range = [l, 0]);
            },
            R = se.prototype;
          (R.startNode = function () {
            return new O(this, this.start, this.startLoc);
          }),
            (R.startNodeAt = function (t, n) {
              return new O(this, t, n);
            });
          function Q(t, n, l, p) {
            return (
              (t.type = n),
              (t.end = l),
              this.options.locations && (t.loc.end = p),
              this.options.ranges && (t.range[1] = l),
              t
            );
          }
          (R.finishNode = function (t, n) {
            return Q.call(this, t, n, this.lastTokEnd, this.lastTokEndLoc);
          }),
            (R.finishNodeAt = function (t, n, l, p) {
              return Q.call(this, t, n, l, p);
            }),
            (R.copyNode = function (t) {
              var n = new O(this, t.start, this.startLoc);
              for (var l in t) n[l] = t[l];
              return n;
            });
          var ue =
              'ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS',
            Fe = ue + ' Extended_Pictographic',
            et = Fe,
            rt = et + ' EBase EComp EMod EPres ExtPict',
            Wt = rt,
            fi = Wt,
            We = { 9: ue, 10: Fe, 11: et, 12: rt, 13: Wt, 14: fi },
            zs =
              'Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji',
            Hs = { 9: '', 10: '', 11: '', 12: '', 13: '', 14: zs },
            Pr =
              'Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu',
            Tr =
              'Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb',
            Nr =
              Tr +
              ' Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd',
            Lr =
              Nr +
              ' Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho',
            Or =
              Lr +
              ' Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi',
            Rr =
              Or +
              ' Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith',
            Qs =
              Rr +
              ' Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz',
            Ks = { 9: Tr, 10: Nr, 11: Lr, 12: Or, 13: Rr, 14: Qs },
            Vr = {};
          function Xs(t) {
            var n = (Vr[t] = {
              binary: _e(We[t] + ' ' + Pr),
              binaryOfStrings: _e(Hs[t]),
              nonBinary: { General_Category: _e(Pr), Script: _e(Ks[t]) },
            });
            (n.nonBinary.Script_Extensions = n.nonBinary.Script),
              (n.nonBinary.gc = n.nonBinary.General_Category),
              (n.nonBinary.sc = n.nonBinary.Script),
              (n.nonBinary.scx = n.nonBinary.Script_Extensions);
          }
          for (
            var zi = 0, Mr = [9, 10, 11, 12, 13, 14];
            zi < Mr.length;
            zi += 1
          ) {
            var Js = Mr[zi];
            Xs(Js);
          }
          var X = se.prototype,
            pi = function (n, l) {
              (this.parent = n), (this.base = l || this);
            };
          (pi.prototype.separatedFrom = function (n) {
            for (var l = this; l; l = l.parent)
              for (var p = n; p; p = p.parent)
                if (l.base === p.base && l !== p) return !0;
            return !1;
          }),
            (pi.prototype.sibling = function () {
              return new pi(this.parent, this.base);
            });
          var tt = function (n) {
            (this.parser = n),
              (this.validFlags =
                'gim' +
                (n.options.ecmaVersion >= 6 ? 'uy' : '') +
                (n.options.ecmaVersion >= 9 ? 's' : '') +
                (n.options.ecmaVersion >= 13 ? 'd' : '') +
                (n.options.ecmaVersion >= 15 ? 'v' : '')),
              (this.unicodeProperties =
                Vr[n.options.ecmaVersion >= 14 ? 14 : n.options.ecmaVersion]),
              (this.source = ''),
              (this.flags = ''),
              (this.start = 0),
              (this.switchU = !1),
              (this.switchV = !1),
              (this.switchN = !1),
              (this.pos = 0),
              (this.lastIntValue = 0),
              (this.lastStringValue = ''),
              (this.lastAssertionIsQuantifiable = !1),
              (this.numCapturingParens = 0),
              (this.maxBackReference = 0),
              (this.groupNames = Object.create(null)),
              (this.backReferenceNames = []),
              (this.branchID = null);
          };
          (tt.prototype.reset = function (n, l, p) {
            var y = p.indexOf('v') !== -1,
              I = p.indexOf('u') !== -1;
            (this.start = n | 0),
              (this.source = l + ''),
              (this.flags = p),
              y && this.parser.options.ecmaVersion >= 15
                ? ((this.switchU = !0),
                  (this.switchV = !0),
                  (this.switchN = !0))
                : ((this.switchU = I && this.parser.options.ecmaVersion >= 6),
                  (this.switchV = !1),
                  (this.switchN = I && this.parser.options.ecmaVersion >= 9));
          }),
            (tt.prototype.raise = function (n) {
              this.parser.raiseRecoverable(
                this.start,
                'Invalid regular expression: /' + this.source + '/: ' + n,
              );
            }),
            (tt.prototype.at = function (n, l) {
              l === void 0 && (l = !1);
              var p = this.source,
                y = p.length;
              if (n >= y) return -1;
              var I = p.charCodeAt(n);
              if (
                !(l || this.switchU) ||
                I <= 55295 ||
                I >= 57344 ||
                n + 1 >= y
              )
                return I;
              var T = p.charCodeAt(n + 1);
              return T >= 56320 && T <= 57343 ? (I << 10) + T - 56613888 : I;
            }),
            (tt.prototype.nextIndex = function (n, l) {
              l === void 0 && (l = !1);
              var p = this.source,
                y = p.length;
              if (n >= y) return y;
              var I = p.charCodeAt(n),
                T;
              return !(l || this.switchU) ||
                I <= 55295 ||
                I >= 57344 ||
                n + 1 >= y ||
                (T = p.charCodeAt(n + 1)) < 56320 ||
                T > 57343
                ? n + 1
                : n + 2;
            }),
            (tt.prototype.current = function (n) {
              return n === void 0 && (n = !1), this.at(this.pos, n);
            }),
            (tt.prototype.lookahead = function (n) {
              return (
                n === void 0 && (n = !1),
                this.at(this.nextIndex(this.pos, n), n)
              );
            }),
            (tt.prototype.advance = function (n) {
              n === void 0 && (n = !1),
                (this.pos = this.nextIndex(this.pos, n));
            }),
            (tt.prototype.eat = function (n, l) {
              return (
                l === void 0 && (l = !1),
                this.current(l) === n ? (this.advance(l), !0) : !1
              );
            }),
            (tt.prototype.eatChars = function (n, l) {
              l === void 0 && (l = !1);
              for (var p = this.pos, y = 0, I = n; y < I.length; y += 1) {
                var T = I[y],
                  j = this.at(p, l);
                if (j === -1 || j !== T) return !1;
                p = this.nextIndex(p, l);
              }
              return (this.pos = p), !0;
            }),
            (X.validateRegExpFlags = function (t) {
              for (
                var n = t.validFlags, l = t.flags, p = !1, y = !1, I = 0;
                I < l.length;
                I++
              ) {
                var T = l.charAt(I);
                n.indexOf(T) === -1 &&
                  this.raise(t.start, 'Invalid regular expression flag'),
                  l.indexOf(T, I + 1) > -1 &&
                    this.raise(t.start, 'Duplicate regular expression flag'),
                  T === 'u' && (p = !0),
                  T === 'v' && (y = !0);
              }
              this.options.ecmaVersion >= 15 &&
                p &&
                y &&
                this.raise(t.start, 'Invalid regular expression flag');
            });
          function $s(t) {
            for (var n in t) return !0;
            return !1;
          }
          (X.validateRegExpPattern = function (t) {
            this.regexp_pattern(t),
              !t.switchN &&
                this.options.ecmaVersion >= 9 &&
                $s(t.groupNames) &&
                ((t.switchN = !0), this.regexp_pattern(t));
          }),
            (X.regexp_pattern = function (t) {
              (t.pos = 0),
                (t.lastIntValue = 0),
                (t.lastStringValue = ''),
                (t.lastAssertionIsQuantifiable = !1),
                (t.numCapturingParens = 0),
                (t.maxBackReference = 0),
                (t.groupNames = Object.create(null)),
                (t.backReferenceNames.length = 0),
                (t.branchID = null),
                this.regexp_disjunction(t),
                t.pos !== t.source.length &&
                  (t.eat(41) && t.raise("Unmatched ')'"),
                  (t.eat(93) || t.eat(125)) &&
                    t.raise('Lone quantifier brackets')),
                t.maxBackReference > t.numCapturingParens &&
                  t.raise('Invalid escape');
              for (var n = 0, l = t.backReferenceNames; n < l.length; n += 1) {
                var p = l[n];
                t.groupNames[p] || t.raise('Invalid named capture referenced');
              }
            }),
            (X.regexp_disjunction = function (t) {
              var n = this.options.ecmaVersion >= 16;
              for (
                n && (t.branchID = new pi(t.branchID, null)),
                  this.regexp_alternative(t);
                t.eat(124);

              )
                n && (t.branchID = t.branchID.sibling()),
                  this.regexp_alternative(t);
              n && (t.branchID = t.branchID.parent),
                this.regexp_eatQuantifier(t, !0) &&
                  t.raise('Nothing to repeat'),
                t.eat(123) && t.raise('Lone quantifier brackets');
            }),
            (X.regexp_alternative = function (t) {
              for (; t.pos < t.source.length && this.regexp_eatTerm(t); );
            }),
            (X.regexp_eatTerm = function (t) {
              return this.regexp_eatAssertion(t)
                ? (t.lastAssertionIsQuantifiable &&
                    this.regexp_eatQuantifier(t) &&
                    t.switchU &&
                    t.raise('Invalid quantifier'),
                  !0)
                : (
                      t.switchU
                        ? this.regexp_eatAtom(t)
                        : this.regexp_eatExtendedAtom(t)
                    )
                  ? (this.regexp_eatQuantifier(t), !0)
                  : !1;
            }),
            (X.regexp_eatAssertion = function (t) {
              var n = t.pos;
              if (
                ((t.lastAssertionIsQuantifiable = !1), t.eat(94) || t.eat(36))
              )
                return !0;
              if (t.eat(92)) {
                if (t.eat(66) || t.eat(98)) return !0;
                t.pos = n;
              }
              if (t.eat(40) && t.eat(63)) {
                var l = !1;
                if (
                  (this.options.ecmaVersion >= 9 && (l = t.eat(60)),
                  t.eat(61) || t.eat(33))
                )
                  return (
                    this.regexp_disjunction(t),
                    t.eat(41) || t.raise('Unterminated group'),
                    (t.lastAssertionIsQuantifiable = !l),
                    !0
                  );
              }
              return (t.pos = n), !1;
            }),
            (X.regexp_eatQuantifier = function (t, n) {
              return (
                n === void 0 && (n = !1),
                this.regexp_eatQuantifierPrefix(t, n) ? (t.eat(63), !0) : !1
              );
            }),
            (X.regexp_eatQuantifierPrefix = function (t, n) {
              return (
                t.eat(42) ||
                t.eat(43) ||
                t.eat(63) ||
                this.regexp_eatBracedQuantifier(t, n)
              );
            }),
            (X.regexp_eatBracedQuantifier = function (t, n) {
              var l = t.pos;
              if (t.eat(123)) {
                var p = 0,
                  y = -1;
                if (
                  this.regexp_eatDecimalDigits(t) &&
                  ((p = t.lastIntValue),
                  t.eat(44) &&
                    this.regexp_eatDecimalDigits(t) &&
                    (y = t.lastIntValue),
                  t.eat(125))
                )
                  return (
                    y !== -1 &&
                      y < p &&
                      !n &&
                      t.raise('numbers out of order in {} quantifier'),
                    !0
                  );
                t.switchU && !n && t.raise('Incomplete quantifier'),
                  (t.pos = l);
              }
              return !1;
            }),
            (X.regexp_eatAtom = function (t) {
              return (
                this.regexp_eatPatternCharacters(t) ||
                t.eat(46) ||
                this.regexp_eatReverseSolidusAtomEscape(t) ||
                this.regexp_eatCharacterClass(t) ||
                this.regexp_eatUncapturingGroup(t) ||
                this.regexp_eatCapturingGroup(t)
              );
            }),
            (X.regexp_eatReverseSolidusAtomEscape = function (t) {
              var n = t.pos;
              if (t.eat(92)) {
                if (this.regexp_eatAtomEscape(t)) return !0;
                t.pos = n;
              }
              return !1;
            }),
            (X.regexp_eatUncapturingGroup = function (t) {
              var n = t.pos;
              if (t.eat(40)) {
                if (t.eat(63) && t.eat(58)) {
                  if ((this.regexp_disjunction(t), t.eat(41))) return !0;
                  t.raise('Unterminated group');
                }
                t.pos = n;
              }
              return !1;
            }),
            (X.regexp_eatCapturingGroup = function (t) {
              if (t.eat(40)) {
                if (
                  (this.options.ecmaVersion >= 9
                    ? this.regexp_groupSpecifier(t)
                    : t.current() === 63 && t.raise('Invalid group'),
                  this.regexp_disjunction(t),
                  t.eat(41))
                )
                  return (t.numCapturingParens += 1), !0;
                t.raise('Unterminated group');
              }
              return !1;
            }),
            (X.regexp_eatExtendedAtom = function (t) {
              return (
                t.eat(46) ||
                this.regexp_eatReverseSolidusAtomEscape(t) ||
                this.regexp_eatCharacterClass(t) ||
                this.regexp_eatUncapturingGroup(t) ||
                this.regexp_eatCapturingGroup(t) ||
                this.regexp_eatInvalidBracedQuantifier(t) ||
                this.regexp_eatExtendedPatternCharacter(t)
              );
            }),
            (X.regexp_eatInvalidBracedQuantifier = function (t) {
              return (
                this.regexp_eatBracedQuantifier(t, !0) &&
                  t.raise('Nothing to repeat'),
                !1
              );
            }),
            (X.regexp_eatSyntaxCharacter = function (t) {
              var n = t.current();
              return jr(n) ? ((t.lastIntValue = n), t.advance(), !0) : !1;
            });
          function jr(t) {
            return (
              t === 36 ||
              (t >= 40 && t <= 43) ||
              t === 46 ||
              t === 63 ||
              (t >= 91 && t <= 94) ||
              (t >= 123 && t <= 125)
            );
          }
          (X.regexp_eatPatternCharacters = function (t) {
            for (var n = t.pos, l = 0; (l = t.current()) !== -1 && !jr(l); )
              t.advance();
            return t.pos !== n;
          }),
            (X.regexp_eatExtendedPatternCharacter = function (t) {
              var n = t.current();
              return n !== -1 &&
                n !== 36 &&
                !(n >= 40 && n <= 43) &&
                n !== 46 &&
                n !== 63 &&
                n !== 91 &&
                n !== 94 &&
                n !== 124
                ? (t.advance(), !0)
                : !1;
            }),
            (X.regexp_groupSpecifier = function (t) {
              if (t.eat(63)) {
                this.regexp_eatGroupName(t) || t.raise('Invalid group');
                var n = this.options.ecmaVersion >= 16,
                  l = t.groupNames[t.lastStringValue];
                if (l)
                  if (n)
                    for (var p = 0, y = l; p < y.length; p += 1) {
                      var I = y[p];
                      I.separatedFrom(t.branchID) ||
                        t.raise('Duplicate capture group name');
                    }
                  else t.raise('Duplicate capture group name');
                n
                  ? (l || (t.groupNames[t.lastStringValue] = [])).push(
                      t.branchID,
                    )
                  : (t.groupNames[t.lastStringValue] = !0);
              }
            }),
            (X.regexp_eatGroupName = function (t) {
              if (((t.lastStringValue = ''), t.eat(60))) {
                if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62))
                  return !0;
                t.raise('Invalid capture group name');
              }
              return !1;
            }),
            (X.regexp_eatRegExpIdentifierName = function (t) {
              if (
                ((t.lastStringValue = ''),
                this.regexp_eatRegExpIdentifierStart(t))
              ) {
                for (
                  t.lastStringValue += Pe(t.lastIntValue);
                  this.regexp_eatRegExpIdentifierPart(t);

                )
                  t.lastStringValue += Pe(t.lastIntValue);
                return !0;
              }
              return !1;
            }),
            (X.regexp_eatRegExpIdentifierStart = function (t) {
              var n = t.pos,
                l = this.options.ecmaVersion >= 11,
                p = t.current(l);
              return (
                t.advance(l),
                p === 92 &&
                  this.regexp_eatRegExpUnicodeEscapeSequence(t, l) &&
                  (p = t.lastIntValue),
                Ys(p) ? ((t.lastIntValue = p), !0) : ((t.pos = n), !1)
              );
            });
          function Ys(t) {
            return k(t, !0) || t === 36 || t === 95;
          }
          X.regexp_eatRegExpIdentifierPart = function (t) {
            var n = t.pos,
              l = this.options.ecmaVersion >= 11,
              p = t.current(l);
            return (
              t.advance(l),
              p === 92 &&
                this.regexp_eatRegExpUnicodeEscapeSequence(t, l) &&
                (p = t.lastIntValue),
              Zs(p) ? ((t.lastIntValue = p), !0) : ((t.pos = n), !1)
            );
          };
          function Zs(t) {
            return F(t, !0) || t === 36 || t === 95 || t === 8204 || t === 8205;
          }
          (X.regexp_eatAtomEscape = function (t) {
            return this.regexp_eatBackReference(t) ||
              this.regexp_eatCharacterClassEscape(t) ||
              this.regexp_eatCharacterEscape(t) ||
              (t.switchN && this.regexp_eatKGroupName(t))
              ? !0
              : (t.switchU &&
                  (t.current() === 99 && t.raise('Invalid unicode escape'),
                  t.raise('Invalid escape')),
                !1);
          }),
            (X.regexp_eatBackReference = function (t) {
              var n = t.pos;
              if (this.regexp_eatDecimalEscape(t)) {
                var l = t.lastIntValue;
                if (t.switchU)
                  return l > t.maxBackReference && (t.maxBackReference = l), !0;
                if (l <= t.numCapturingParens) return !0;
                t.pos = n;
              }
              return !1;
            }),
            (X.regexp_eatKGroupName = function (t) {
              if (t.eat(107)) {
                if (this.regexp_eatGroupName(t))
                  return t.backReferenceNames.push(t.lastStringValue), !0;
                t.raise('Invalid named reference');
              }
              return !1;
            }),
            (X.regexp_eatCharacterEscape = function (t) {
              return (
                this.regexp_eatControlEscape(t) ||
                this.regexp_eatCControlLetter(t) ||
                this.regexp_eatZero(t) ||
                this.regexp_eatHexEscapeSequence(t) ||
                this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) ||
                (!t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t)) ||
                this.regexp_eatIdentityEscape(t)
              );
            }),
            (X.regexp_eatCControlLetter = function (t) {
              var n = t.pos;
              if (t.eat(99)) {
                if (this.regexp_eatControlLetter(t)) return !0;
                t.pos = n;
              }
              return !1;
            }),
            (X.regexp_eatZero = function (t) {
              return t.current() === 48 && !di(t.lookahead())
                ? ((t.lastIntValue = 0), t.advance(), !0)
                : !1;
            }),
            (X.regexp_eatControlEscape = function (t) {
              var n = t.current();
              return n === 116
                ? ((t.lastIntValue = 9), t.advance(), !0)
                : n === 110
                  ? ((t.lastIntValue = 10), t.advance(), !0)
                  : n === 118
                    ? ((t.lastIntValue = 11), t.advance(), !0)
                    : n === 102
                      ? ((t.lastIntValue = 12), t.advance(), !0)
                      : n === 114
                        ? ((t.lastIntValue = 13), t.advance(), !0)
                        : !1;
            }),
            (X.regexp_eatControlLetter = function (t) {
              var n = t.current();
              return qr(n) ? ((t.lastIntValue = n % 32), t.advance(), !0) : !1;
            });
          function qr(t) {
            return (t >= 65 && t <= 90) || (t >= 97 && t <= 122);
          }
          X.regexp_eatRegExpUnicodeEscapeSequence = function (t, n) {
            n === void 0 && (n = !1);
            var l = t.pos,
              p = n || t.switchU;
            if (t.eat(117)) {
              if (this.regexp_eatFixedHexDigits(t, 4)) {
                var y = t.lastIntValue;
                if (p && y >= 55296 && y <= 56319) {
                  var I = t.pos;
                  if (
                    t.eat(92) &&
                    t.eat(117) &&
                    this.regexp_eatFixedHexDigits(t, 4)
                  ) {
                    var T = t.lastIntValue;
                    if (T >= 56320 && T <= 57343)
                      return (
                        (t.lastIntValue =
                          (y - 55296) * 1024 + (T - 56320) + 65536),
                        !0
                      );
                  }
                  (t.pos = I), (t.lastIntValue = y);
                }
                return !0;
              }
              if (
                p &&
                t.eat(123) &&
                this.regexp_eatHexDigits(t) &&
                t.eat(125) &&
                ea(t.lastIntValue)
              )
                return !0;
              p && t.raise('Invalid unicode escape'), (t.pos = l);
            }
            return !1;
          };
          function ea(t) {
            return t >= 0 && t <= 1114111;
          }
          (X.regexp_eatIdentityEscape = function (t) {
            if (t.switchU)
              return this.regexp_eatSyntaxCharacter(t)
                ? !0
                : t.eat(47)
                  ? ((t.lastIntValue = 47), !0)
                  : !1;
            var n = t.current();
            return n !== 99 && (!t.switchN || n !== 107)
              ? ((t.lastIntValue = n), t.advance(), !0)
              : !1;
          }),
            (X.regexp_eatDecimalEscape = function (t) {
              t.lastIntValue = 0;
              var n = t.current();
              if (n >= 49 && n <= 57) {
                do
                  (t.lastIntValue = 10 * t.lastIntValue + (n - 48)),
                    t.advance();
                while ((n = t.current()) >= 48 && n <= 57);
                return !0;
              }
              return !1;
            });
          var Ur = 0,
            nt = 1,
            ze = 2;
          X.regexp_eatCharacterClassEscape = function (t) {
            var n = t.current();
            if (ta(n)) return (t.lastIntValue = -1), t.advance(), nt;
            var l = !1;
            if (
              t.switchU &&
              this.options.ecmaVersion >= 9 &&
              ((l = n === 80) || n === 112)
            ) {
              (t.lastIntValue = -1), t.advance();
              var p;
              if (
                t.eat(123) &&
                (p = this.regexp_eatUnicodePropertyValueExpression(t)) &&
                t.eat(125)
              )
                return l && p === ze && t.raise('Invalid property name'), p;
              t.raise('Invalid property name');
            }
            return Ur;
          };
          function ta(t) {
            return (
              t === 100 ||
              t === 68 ||
              t === 115 ||
              t === 83 ||
              t === 119 ||
              t === 87
            );
          }
          (X.regexp_eatUnicodePropertyValueExpression = function (t) {
            var n = t.pos;
            if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
              var l = t.lastStringValue;
              if (this.regexp_eatUnicodePropertyValue(t)) {
                var p = t.lastStringValue;
                return (
                  this.regexp_validateUnicodePropertyNameAndValue(t, l, p), nt
                );
              }
            }
            if (
              ((t.pos = n), this.regexp_eatLoneUnicodePropertyNameOrValue(t))
            ) {
              var y = t.lastStringValue;
              return this.regexp_validateUnicodePropertyNameOrValue(t, y);
            }
            return Ur;
          }),
            (X.regexp_validateUnicodePropertyNameAndValue = function (t, n, l) {
              ye(t.unicodeProperties.nonBinary, n) ||
                t.raise('Invalid property name'),
                t.unicodeProperties.nonBinary[n].test(l) ||
                  t.raise('Invalid property value');
            }),
            (X.regexp_validateUnicodePropertyNameOrValue = function (t, n) {
              if (t.unicodeProperties.binary.test(n)) return nt;
              if (t.switchV && t.unicodeProperties.binaryOfStrings.test(n))
                return ze;
              t.raise('Invalid property name');
            }),
            (X.regexp_eatUnicodePropertyName = function (t) {
              var n = 0;
              for (t.lastStringValue = ''; Gr((n = t.current())); )
                (t.lastStringValue += Pe(n)), t.advance();
              return t.lastStringValue !== '';
            });
          function Gr(t) {
            return qr(t) || t === 95;
          }
          X.regexp_eatUnicodePropertyValue = function (t) {
            var n = 0;
            for (t.lastStringValue = ''; ia((n = t.current())); )
              (t.lastStringValue += Pe(n)), t.advance();
            return t.lastStringValue !== '';
          };
          function ia(t) {
            return Gr(t) || di(t);
          }
          (X.regexp_eatLoneUnicodePropertyNameOrValue = function (t) {
            return this.regexp_eatUnicodePropertyValue(t);
          }),
            (X.regexp_eatCharacterClass = function (t) {
              if (t.eat(91)) {
                var n = t.eat(94),
                  l = this.regexp_classContents(t);
                return (
                  t.eat(93) || t.raise('Unterminated character class'),
                  n &&
                    l === ze &&
                    t.raise('Negated character class may contain strings'),
                  !0
                );
              }
              return !1;
            }),
            (X.regexp_classContents = function (t) {
              return t.current() === 93
                ? nt
                : t.switchV
                  ? this.regexp_classSetExpression(t)
                  : (this.regexp_nonEmptyClassRanges(t), nt);
            }),
            (X.regexp_nonEmptyClassRanges = function (t) {
              for (; this.regexp_eatClassAtom(t); ) {
                var n = t.lastIntValue;
                if (t.eat(45) && this.regexp_eatClassAtom(t)) {
                  var l = t.lastIntValue;
                  t.switchU &&
                    (n === -1 || l === -1) &&
                    t.raise('Invalid character class'),
                    n !== -1 &&
                      l !== -1 &&
                      n > l &&
                      t.raise('Range out of order in character class');
                }
              }
            }),
            (X.regexp_eatClassAtom = function (t) {
              var n = t.pos;
              if (t.eat(92)) {
                if (this.regexp_eatClassEscape(t)) return !0;
                if (t.switchU) {
                  var l = t.current();
                  (l === 99 || Hr(l)) && t.raise('Invalid class escape'),
                    t.raise('Invalid escape');
                }
                t.pos = n;
              }
              var p = t.current();
              return p !== 93 ? ((t.lastIntValue = p), t.advance(), !0) : !1;
            }),
            (X.regexp_eatClassEscape = function (t) {
              var n = t.pos;
              if (t.eat(98)) return (t.lastIntValue = 8), !0;
              if (t.switchU && t.eat(45)) return (t.lastIntValue = 45), !0;
              if (!t.switchU && t.eat(99)) {
                if (this.regexp_eatClassControlLetter(t)) return !0;
                t.pos = n;
              }
              return (
                this.regexp_eatCharacterClassEscape(t) ||
                this.regexp_eatCharacterEscape(t)
              );
            }),
            (X.regexp_classSetExpression = function (t) {
              var n = nt,
                l;
              if (!this.regexp_eatClassSetRange(t))
                if ((l = this.regexp_eatClassSetOperand(t))) {
                  l === ze && (n = ze);
                  for (var p = t.pos; t.eatChars([38, 38]); ) {
                    if (
                      t.current() !== 38 &&
                      (l = this.regexp_eatClassSetOperand(t))
                    ) {
                      l !== ze && (n = nt);
                      continue;
                    }
                    t.raise('Invalid character in character class');
                  }
                  if (p !== t.pos) return n;
                  for (; t.eatChars([45, 45]); )
                    this.regexp_eatClassSetOperand(t) ||
                      t.raise('Invalid character in character class');
                  if (p !== t.pos) return n;
                } else t.raise('Invalid character in character class');
              for (;;)
                if (!this.regexp_eatClassSetRange(t)) {
                  if (((l = this.regexp_eatClassSetOperand(t)), !l)) return n;
                  l === ze && (n = ze);
                }
            }),
            (X.regexp_eatClassSetRange = function (t) {
              var n = t.pos;
              if (this.regexp_eatClassSetCharacter(t)) {
                var l = t.lastIntValue;
                if (t.eat(45) && this.regexp_eatClassSetCharacter(t)) {
                  var p = t.lastIntValue;
                  return (
                    l !== -1 &&
                      p !== -1 &&
                      l > p &&
                      t.raise('Range out of order in character class'),
                    !0
                  );
                }
                t.pos = n;
              }
              return !1;
            }),
            (X.regexp_eatClassSetOperand = function (t) {
              return this.regexp_eatClassSetCharacter(t)
                ? nt
                : this.regexp_eatClassStringDisjunction(t) ||
                    this.regexp_eatNestedClass(t);
            }),
            (X.regexp_eatNestedClass = function (t) {
              var n = t.pos;
              if (t.eat(91)) {
                var l = t.eat(94),
                  p = this.regexp_classContents(t);
                if (t.eat(93))
                  return (
                    l &&
                      p === ze &&
                      t.raise('Negated character class may contain strings'),
                    p
                  );
                t.pos = n;
              }
              if (t.eat(92)) {
                var y = this.regexp_eatCharacterClassEscape(t);
                if (y) return y;
                t.pos = n;
              }
              return null;
            }),
            (X.regexp_eatClassStringDisjunction = function (t) {
              var n = t.pos;
              if (t.eatChars([92, 113])) {
                if (t.eat(123)) {
                  var l = this.regexp_classStringDisjunctionContents(t);
                  if (t.eat(125)) return l;
                } else t.raise('Invalid escape');
                t.pos = n;
              }
              return null;
            }),
            (X.regexp_classStringDisjunctionContents = function (t) {
              for (var n = this.regexp_classString(t); t.eat(124); )
                this.regexp_classString(t) === ze && (n = ze);
              return n;
            }),
            (X.regexp_classString = function (t) {
              for (var n = 0; this.regexp_eatClassSetCharacter(t); ) n++;
              return n === 1 ? nt : ze;
            }),
            (X.regexp_eatClassSetCharacter = function (t) {
              var n = t.pos;
              if (t.eat(92))
                return this.regexp_eatCharacterEscape(t) ||
                  this.regexp_eatClassSetReservedPunctuator(t)
                  ? !0
                  : t.eat(98)
                    ? ((t.lastIntValue = 8), !0)
                    : ((t.pos = n), !1);
              var l = t.current();
              return l < 0 || (l === t.lookahead() && ra(l)) || na(l)
                ? !1
                : (t.advance(), (t.lastIntValue = l), !0);
            });
          function ra(t) {
            return (
              t === 33 ||
              (t >= 35 && t <= 38) ||
              (t >= 42 && t <= 44) ||
              t === 46 ||
              (t >= 58 && t <= 64) ||
              t === 94 ||
              t === 96 ||
              t === 126
            );
          }
          function na(t) {
            return (
              t === 40 ||
              t === 41 ||
              t === 45 ||
              t === 47 ||
              (t >= 91 && t <= 93) ||
              (t >= 123 && t <= 125)
            );
          }
          X.regexp_eatClassSetReservedPunctuator = function (t) {
            var n = t.current();
            return sa(n) ? ((t.lastIntValue = n), t.advance(), !0) : !1;
          };
          function sa(t) {
            return (
              t === 33 ||
              t === 35 ||
              t === 37 ||
              t === 38 ||
              t === 44 ||
              t === 45 ||
              (t >= 58 && t <= 62) ||
              t === 64 ||
              t === 96 ||
              t === 126
            );
          }
          (X.regexp_eatClassControlLetter = function (t) {
            var n = t.current();
            return di(n) || n === 95
              ? ((t.lastIntValue = n % 32), t.advance(), !0)
              : !1;
          }),
            (X.regexp_eatHexEscapeSequence = function (t) {
              var n = t.pos;
              if (t.eat(120)) {
                if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
                t.switchU && t.raise('Invalid escape'), (t.pos = n);
              }
              return !1;
            }),
            (X.regexp_eatDecimalDigits = function (t) {
              var n = t.pos,
                l = 0;
              for (t.lastIntValue = 0; di((l = t.current())); )
                (t.lastIntValue = 10 * t.lastIntValue + (l - 48)), t.advance();
              return t.pos !== n;
            });
          function di(t) {
            return t >= 48 && t <= 57;
          }
          X.regexp_eatHexDigits = function (t) {
            var n = t.pos,
              l = 0;
            for (t.lastIntValue = 0; Wr((l = t.current())); )
              (t.lastIntValue = 16 * t.lastIntValue + zr(l)), t.advance();
            return t.pos !== n;
          };
          function Wr(t) {
            return (
              (t >= 48 && t <= 57) ||
              (t >= 65 && t <= 70) ||
              (t >= 97 && t <= 102)
            );
          }
          function zr(t) {
            return t >= 65 && t <= 70
              ? 10 + (t - 65)
              : t >= 97 && t <= 102
                ? 10 + (t - 97)
                : t - 48;
          }
          (X.regexp_eatLegacyOctalEscapeSequence = function (t) {
            if (this.regexp_eatOctalDigit(t)) {
              var n = t.lastIntValue;
              if (this.regexp_eatOctalDigit(t)) {
                var l = t.lastIntValue;
                n <= 3 && this.regexp_eatOctalDigit(t)
                  ? (t.lastIntValue = n * 64 + l * 8 + t.lastIntValue)
                  : (t.lastIntValue = n * 8 + l);
              } else t.lastIntValue = n;
              return !0;
            }
            return !1;
          }),
            (X.regexp_eatOctalDigit = function (t) {
              var n = t.current();
              return Hr(n)
                ? ((t.lastIntValue = n - 48), t.advance(), !0)
                : ((t.lastIntValue = 0), !1);
            });
          function Hr(t) {
            return t >= 48 && t <= 55;
          }
          X.regexp_eatFixedHexDigits = function (t, n) {
            var l = t.pos;
            t.lastIntValue = 0;
            for (var p = 0; p < n; ++p) {
              var y = t.current();
              if (!Wr(y)) return (t.pos = l), !1;
              (t.lastIntValue = 16 * t.lastIntValue + zr(y)), t.advance();
            }
            return !0;
          };
          var mi = function (n) {
              (this.type = n.type),
                (this.value = n.value),
                (this.start = n.start),
                (this.end = n.end),
                n.options.locations &&
                  (this.loc = new Me(n, n.startLoc, n.endLoc)),
                n.options.ranges && (this.range = [n.start, n.end]);
            },
            he = se.prototype;
          (he.next = function (t) {
            !t &&
              this.type.keyword &&
              this.containsEsc &&
              this.raiseRecoverable(
                this.start,
                'Escape sequence in keyword ' + this.type.keyword,
              ),
              this.options.onToken && this.options.onToken(new mi(this)),
              (this.lastTokEnd = this.end),
              (this.lastTokStart = this.start),
              (this.lastTokEndLoc = this.endLoc),
              (this.lastTokStartLoc = this.startLoc),
              this.nextToken();
          }),
            (he.getToken = function () {
              return this.next(), new mi(this);
            }),
            typeof Symbol < 'u' &&
              (he[Symbol.iterator] = function () {
                var t = this;
                return {
                  next: function () {
                    var n = t.getToken();
                    return { done: n.type === o.eof, value: n };
                  },
                };
              }),
            (he.nextToken = function () {
              var t = this.curContext();
              if (
                ((!t || !t.preserveSpace) && this.skipSpace(),
                (this.start = this.pos),
                this.options.locations && (this.startLoc = this.curPosition()),
                this.pos >= this.input.length)
              )
                return this.finishToken(o.eof);
              if (t.override) return t.override(this);
              this.readToken(this.fullCharCodeAtPos());
            }),
            (he.readToken = function (t) {
              return k(t, this.options.ecmaVersion >= 6) || t === 92
                ? this.readWord()
                : this.getTokenFromCode(t);
            }),
            (he.fullCharCodeAtPos = function () {
              var t = this.input.charCodeAt(this.pos);
              if (t <= 55295 || t >= 56320) return t;
              var n = this.input.charCodeAt(this.pos + 1);
              return n <= 56319 || n >= 57344 ? t : (t << 10) + n - 56613888;
            }),
            (he.skipBlockComment = function () {
              var t = this.options.onComment && this.curPosition(),
                n = this.pos,
                l = this.input.indexOf('*/', (this.pos += 2));
              if (
                (l === -1 && this.raise(this.pos - 2, 'Unterminated comment'),
                (this.pos = l + 2),
                this.options.locations)
              )
                for (
                  var p = void 0, y = n;
                  (p = z(this.input, y, this.pos)) > -1;

                )
                  ++this.curLine, (y = this.lineStart = p);
              this.options.onComment &&
                this.options.onComment(
                  !0,
                  this.input.slice(n + 2, l),
                  n,
                  this.pos,
                  t,
                  this.curPosition(),
                );
            }),
            (he.skipLineComment = function (t) {
              for (
                var n = this.pos,
                  l = this.options.onComment && this.curPosition(),
                  p = this.input.charCodeAt((this.pos += t));
                this.pos < this.input.length && !H(p);

              )
                p = this.input.charCodeAt(++this.pos);
              this.options.onComment &&
                this.options.onComment(
                  !1,
                  this.input.slice(n + t, this.pos),
                  n,
                  this.pos,
                  l,
                  this.curPosition(),
                );
            }),
            (he.skipSpace = function () {
              e: for (; this.pos < this.input.length; ) {
                var t = this.input.charCodeAt(this.pos);
                switch (t) {
                  case 32:
                  case 160:
                    ++this.pos;
                    break;
                  case 13:
                    this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
                  case 10:
                  case 8232:
                  case 8233:
                    ++this.pos,
                      this.options.locations &&
                        (++this.curLine, (this.lineStart = this.pos));
                    break;
                  case 47:
                    switch (this.input.charCodeAt(this.pos + 1)) {
                      case 42:
                        this.skipBlockComment();
                        break;
                      case 47:
                        this.skipLineComment(2);
                        break;
                      default:
                        break e;
                    }
                    break;
                  default:
                    if (
                      (t > 8 && t < 14) ||
                      (t >= 5760 && te.test(String.fromCharCode(t)))
                    )
                      ++this.pos;
                    else break e;
                }
              }
            }),
            (he.finishToken = function (t, n) {
              (this.end = this.pos),
                this.options.locations && (this.endLoc = this.curPosition());
              var l = this.type;
              (this.type = t), (this.value = n), this.updateContext(l);
            }),
            (he.readToken_dot = function () {
              var t = this.input.charCodeAt(this.pos + 1);
              if (t >= 48 && t <= 57) return this.readNumber(!0);
              var n = this.input.charCodeAt(this.pos + 2);
              return this.options.ecmaVersion >= 6 && t === 46 && n === 46
                ? ((this.pos += 3), this.finishToken(o.ellipsis))
                : (++this.pos, this.finishToken(o.dot));
            }),
            (he.readToken_slash = function () {
              var t = this.input.charCodeAt(this.pos + 1);
              return this.exprAllowed
                ? (++this.pos, this.readRegexp())
                : t === 61
                  ? this.finishOp(o.assign, 2)
                  : this.finishOp(o.slash, 1);
            }),
            (he.readToken_mult_modulo_exp = function (t) {
              var n = this.input.charCodeAt(this.pos + 1),
                l = 1,
                p = t === 42 ? o.star : o.modulo;
              return (
                this.options.ecmaVersion >= 7 &&
                  t === 42 &&
                  n === 42 &&
                  (++l,
                  (p = o.starstar),
                  (n = this.input.charCodeAt(this.pos + 2))),
                n === 61 ? this.finishOp(o.assign, l + 1) : this.finishOp(p, l)
              );
            }),
            (he.readToken_pipe_amp = function (t) {
              var n = this.input.charCodeAt(this.pos + 1);
              if (n === t) {
                if (this.options.ecmaVersion >= 12) {
                  var l = this.input.charCodeAt(this.pos + 2);
                  if (l === 61) return this.finishOp(o.assign, 3);
                }
                return this.finishOp(t === 124 ? o.logicalOR : o.logicalAND, 2);
              }
              return n === 61
                ? this.finishOp(o.assign, 2)
                : this.finishOp(t === 124 ? o.bitwiseOR : o.bitwiseAND, 1);
            }),
            (he.readToken_caret = function () {
              var t = this.input.charCodeAt(this.pos + 1);
              return t === 61
                ? this.finishOp(o.assign, 2)
                : this.finishOp(o.bitwiseXOR, 1);
            }),
            (he.readToken_plus_min = function (t) {
              var n = this.input.charCodeAt(this.pos + 1);
              return n === t
                ? n === 45 &&
                  !this.inModule &&
                  this.input.charCodeAt(this.pos + 2) === 62 &&
                  (this.lastTokEnd === 0 ||
                    B.test(this.input.slice(this.lastTokEnd, this.pos)))
                  ? (this.skipLineComment(3),
                    this.skipSpace(),
                    this.nextToken())
                  : this.finishOp(o.incDec, 2)
                : n === 61
                  ? this.finishOp(o.assign, 2)
                  : this.finishOp(o.plusMin, 1);
            }),
            (he.readToken_lt_gt = function (t) {
              var n = this.input.charCodeAt(this.pos + 1),
                l = 1;
              return n === t
                ? ((l =
                    t === 62 && this.input.charCodeAt(this.pos + 2) === 62
                      ? 3
                      : 2),
                  this.input.charCodeAt(this.pos + l) === 61
                    ? this.finishOp(o.assign, l + 1)
                    : this.finishOp(o.bitShift, l))
                : n === 33 &&
                    t === 60 &&
                    !this.inModule &&
                    this.input.charCodeAt(this.pos + 2) === 45 &&
                    this.input.charCodeAt(this.pos + 3) === 45
                  ? (this.skipLineComment(4),
                    this.skipSpace(),
                    this.nextToken())
                  : (n === 61 && (l = 2), this.finishOp(o.relational, l));
            }),
            (he.readToken_eq_excl = function (t) {
              var n = this.input.charCodeAt(this.pos + 1);
              return n === 61
                ? this.finishOp(
                    o.equality,
                    this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2,
                  )
                : t === 61 && n === 62 && this.options.ecmaVersion >= 6
                  ? ((this.pos += 2), this.finishToken(o.arrow))
                  : this.finishOp(t === 61 ? o.eq : o.prefix, 1);
            }),
            (he.readToken_question = function () {
              var t = this.options.ecmaVersion;
              if (t >= 11) {
                var n = this.input.charCodeAt(this.pos + 1);
                if (n === 46) {
                  var l = this.input.charCodeAt(this.pos + 2);
                  if (l < 48 || l > 57) return this.finishOp(o.questionDot, 2);
                }
                if (n === 63) {
                  if (t >= 12) {
                    var p = this.input.charCodeAt(this.pos + 2);
                    if (p === 61) return this.finishOp(o.assign, 3);
                  }
                  return this.finishOp(o.coalesce, 2);
                }
              }
              return this.finishOp(o.question, 1);
            }),
            (he.readToken_numberSign = function () {
              var t = this.options.ecmaVersion,
                n = 35;
              if (
                t >= 13 &&
                (++this.pos,
                (n = this.fullCharCodeAtPos()),
                k(n, !0) || n === 92)
              )
                return this.finishToken(o.privateId, this.readWord1());
              this.raise(this.pos, "Unexpected character '" + Pe(n) + "'");
            }),
            (he.getTokenFromCode = function (t) {
              switch (t) {
                case 46:
                  return this.readToken_dot();
                case 40:
                  return ++this.pos, this.finishToken(o.parenL);
                case 41:
                  return ++this.pos, this.finishToken(o.parenR);
                case 59:
                  return ++this.pos, this.finishToken(o.semi);
                case 44:
                  return ++this.pos, this.finishToken(o.comma);
                case 91:
                  return ++this.pos, this.finishToken(o.bracketL);
                case 93:
                  return ++this.pos, this.finishToken(o.bracketR);
                case 123:
                  return ++this.pos, this.finishToken(o.braceL);
                case 125:
                  return ++this.pos, this.finishToken(o.braceR);
                case 58:
                  return ++this.pos, this.finishToken(o.colon);
                case 96:
                  if (this.options.ecmaVersion < 6) break;
                  return ++this.pos, this.finishToken(o.backQuote);
                case 48:
                  var n = this.input.charCodeAt(this.pos + 1);
                  if (n === 120 || n === 88) return this.readRadixNumber(16);
                  if (this.options.ecmaVersion >= 6) {
                    if (n === 111 || n === 79) return this.readRadixNumber(8);
                    if (n === 98 || n === 66) return this.readRadixNumber(2);
                  }
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                  return this.readNumber(!1);
                case 34:
                case 39:
                  return this.readString(t);
                case 47:
                  return this.readToken_slash();
                case 37:
                case 42:
                  return this.readToken_mult_modulo_exp(t);
                case 124:
                case 38:
                  return this.readToken_pipe_amp(t);
                case 94:
                  return this.readToken_caret();
                case 43:
                case 45:
                  return this.readToken_plus_min(t);
                case 60:
                case 62:
                  return this.readToken_lt_gt(t);
                case 61:
                case 33:
                  return this.readToken_eq_excl(t);
                case 63:
                  return this.readToken_question();
                case 126:
                  return this.finishOp(o.prefix, 1);
                case 35:
                  return this.readToken_numberSign();
              }
              this.raise(this.pos, "Unexpected character '" + Pe(t) + "'");
            }),
            (he.finishOp = function (t, n) {
              var l = this.input.slice(this.pos, this.pos + n);
              return (this.pos += n), this.finishToken(t, l);
            }),
            (he.readRegexp = function () {
              for (var t, n, l = this.pos; ; ) {
                this.pos >= this.input.length &&
                  this.raise(l, 'Unterminated regular expression');
                var p = this.input.charAt(this.pos);
                if (
                  (B.test(p) &&
                    this.raise(l, 'Unterminated regular expression'),
                  t)
                )
                  t = !1;
                else {
                  if (p === '[') n = !0;
                  else if (p === ']' && n) n = !1;
                  else if (p === '/' && !n) break;
                  t = p === '\\';
                }
                ++this.pos;
              }
              var y = this.input.slice(l, this.pos);
              ++this.pos;
              var I = this.pos,
                T = this.readWord1();
              this.containsEsc && this.unexpected(I);
              var j = this.regexpState || (this.regexpState = new tt(this));
              j.reset(l, y, T),
                this.validateRegExpFlags(j),
                this.validateRegExpPattern(j);
              var U = null;
              try {
                U = new RegExp(y, T);
              } catch {}
              return this.finishToken(o.regexp, {
                pattern: y,
                flags: T,
                value: U,
              });
            }),
            (he.readInt = function (t, n, l) {
              for (
                var p = this.options.ecmaVersion >= 12 && n === void 0,
                  y = l && this.input.charCodeAt(this.pos) === 48,
                  I = this.pos,
                  T = 0,
                  j = 0,
                  U = 0,
                  re = n ?? 1 / 0;
                U < re;
                ++U, ++this.pos
              ) {
                var ie = this.input.charCodeAt(this.pos),
                  Ie = void 0;
                if (p && ie === 95) {
                  y &&
                    this.raiseRecoverable(
                      this.pos,
                      'Numeric separator is not allowed in legacy octal numeric literals',
                    ),
                    j === 95 &&
                      this.raiseRecoverable(
                        this.pos,
                        'Numeric separator must be exactly one underscore',
                      ),
                    U === 0 &&
                      this.raiseRecoverable(
                        this.pos,
                        'Numeric separator is not allowed at the first of digits',
                      ),
                    (j = ie);
                  continue;
                }
                if (
                  (ie >= 97
                    ? (Ie = ie - 97 + 10)
                    : ie >= 65
                      ? (Ie = ie - 65 + 10)
                      : ie >= 48 && ie <= 57
                        ? (Ie = ie - 48)
                        : (Ie = 1 / 0),
                  Ie >= t)
                )
                  break;
                (j = ie), (T = T * t + Ie);
              }
              return (
                p &&
                  j === 95 &&
                  this.raiseRecoverable(
                    this.pos - 1,
                    'Numeric separator is not allowed at the last of digits',
                  ),
                this.pos === I || (n != null && this.pos - I !== n) ? null : T
              );
            });
          function aa(t, n) {
            return n ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ''));
          }
          function Qr(t) {
            return typeof BigInt != 'function'
              ? null
              : BigInt(t.replace(/_/g, ''));
          }
          (he.readRadixNumber = function (t) {
            var n = this.pos;
            this.pos += 2;
            var l = this.readInt(t);
            return (
              l == null &&
                this.raise(this.start + 2, 'Expected number in radix ' + t),
              this.options.ecmaVersion >= 11 &&
              this.input.charCodeAt(this.pos) === 110
                ? ((l = Qr(this.input.slice(n, this.pos))), ++this.pos)
                : k(this.fullCharCodeAtPos()) &&
                  this.raise(this.pos, 'Identifier directly after number'),
              this.finishToken(o.num, l)
            );
          }),
            (he.readNumber = function (t) {
              var n = this.pos;
              !t &&
                this.readInt(10, void 0, !0) === null &&
                this.raise(n, 'Invalid number');
              var l = this.pos - n >= 2 && this.input.charCodeAt(n) === 48;
              l && this.strict && this.raise(n, 'Invalid number');
              var p = this.input.charCodeAt(this.pos);
              if (!l && !t && this.options.ecmaVersion >= 11 && p === 110) {
                var y = Qr(this.input.slice(n, this.pos));
                return (
                  ++this.pos,
                  k(this.fullCharCodeAtPos()) &&
                    this.raise(this.pos, 'Identifier directly after number'),
                  this.finishToken(o.num, y)
                );
              }
              l && /[89]/.test(this.input.slice(n, this.pos)) && (l = !1),
                p === 46 &&
                  !l &&
                  (++this.pos,
                  this.readInt(10),
                  (p = this.input.charCodeAt(this.pos))),
                (p === 69 || p === 101) &&
                  !l &&
                  ((p = this.input.charCodeAt(++this.pos)),
                  (p === 43 || p === 45) && ++this.pos,
                  this.readInt(10) === null && this.raise(n, 'Invalid number')),
                k(this.fullCharCodeAtPos()) &&
                  this.raise(this.pos, 'Identifier directly after number');
              var I = aa(this.input.slice(n, this.pos), l);
              return this.finishToken(o.num, I);
            }),
            (he.readCodePoint = function () {
              var t = this.input.charCodeAt(this.pos),
                n;
              if (t === 123) {
                this.options.ecmaVersion < 6 && this.unexpected();
                var l = ++this.pos;
                (n = this.readHexChar(
                  this.input.indexOf('}', this.pos) - this.pos,
                )),
                  ++this.pos,
                  n > 1114111 &&
                    this.invalidStringToken(l, 'Code point out of bounds');
              } else n = this.readHexChar(4);
              return n;
            }),
            (he.readString = function (t) {
              for (var n = '', l = ++this.pos; ; ) {
                this.pos >= this.input.length &&
                  this.raise(this.start, 'Unterminated string constant');
                var p = this.input.charCodeAt(this.pos);
                if (p === t) break;
                p === 92
                  ? ((n += this.input.slice(l, this.pos)),
                    (n += this.readEscapedChar(!1)),
                    (l = this.pos))
                  : p === 8232 || p === 8233
                    ? (this.options.ecmaVersion < 10 &&
                        this.raise(this.start, 'Unterminated string constant'),
                      ++this.pos,
                      this.options.locations &&
                        (this.curLine++, (this.lineStart = this.pos)))
                    : (H(p) &&
                        this.raise(this.start, 'Unterminated string constant'),
                      ++this.pos);
              }
              return (
                (n += this.input.slice(l, this.pos++)),
                this.finishToken(o.string, n)
              );
            });
          var Kr = {};
          (he.tryReadTemplateToken = function () {
            this.inTemplateElement = !0;
            try {
              this.readTmplToken();
            } catch (t) {
              if (t === Kr) this.readInvalidTemplateToken();
              else throw t;
            }
            this.inTemplateElement = !1;
          }),
            (he.invalidStringToken = function (t, n) {
              if (this.inTemplateElement && this.options.ecmaVersion >= 9)
                throw Kr;
              this.raise(t, n);
            }),
            (he.readTmplToken = function () {
              for (var t = '', n = this.pos; ; ) {
                this.pos >= this.input.length &&
                  this.raise(this.start, 'Unterminated template');
                var l = this.input.charCodeAt(this.pos);
                if (
                  l === 96 ||
                  (l === 36 && this.input.charCodeAt(this.pos + 1) === 123)
                )
                  return this.pos === this.start &&
                    (this.type === o.template ||
                      this.type === o.invalidTemplate)
                    ? l === 36
                      ? ((this.pos += 2), this.finishToken(o.dollarBraceL))
                      : (++this.pos, this.finishToken(o.backQuote))
                    : ((t += this.input.slice(n, this.pos)),
                      this.finishToken(o.template, t));
                if (l === 92)
                  (t += this.input.slice(n, this.pos)),
                    (t += this.readEscapedChar(!0)),
                    (n = this.pos);
                else if (H(l)) {
                  switch (
                    ((t += this.input.slice(n, this.pos)), ++this.pos, l)
                  ) {
                    case 13:
                      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
                    case 10:
                      t += `
`;
                      break;
                    default:
                      t += String.fromCharCode(l);
                      break;
                  }
                  this.options.locations &&
                    (++this.curLine, (this.lineStart = this.pos)),
                    (n = this.pos);
                } else ++this.pos;
              }
            }),
            (he.readInvalidTemplateToken = function () {
              for (; this.pos < this.input.length; this.pos++)
                switch (this.input[this.pos]) {
                  case '\\':
                    ++this.pos;
                    break;
                  case '$':
                    if (this.input[this.pos + 1] !== '{') break;
                  case '`':
                    return this.finishToken(
                      o.invalidTemplate,
                      this.input.slice(this.start, this.pos),
                    );
                  case '\r':
                    this.input[this.pos + 1] ===
                      `
` && ++this.pos;
                  case `
`:
                  case '\u2028':
                  case '\u2029':
                    ++this.curLine, (this.lineStart = this.pos + 1);
                    break;
                }
              this.raise(this.start, 'Unterminated template');
            }),
            (he.readEscapedChar = function (t) {
              var n = this.input.charCodeAt(++this.pos);
              switch ((++this.pos, n)) {
                case 110:
                  return `
`;
                case 114:
                  return '\r';
                case 120:
                  return String.fromCharCode(this.readHexChar(2));
                case 117:
                  return Pe(this.readCodePoint());
                case 116:
                  return '	';
                case 98:
                  return '\b';
                case 118:
                  return '\v';
                case 102:
                  return '\f';
                case 13:
                  this.input.charCodeAt(this.pos) === 10 && ++this.pos;
                case 10:
                  return (
                    this.options.locations &&
                      ((this.lineStart = this.pos), ++this.curLine),
                    ''
                  );
                case 56:
                case 57:
                  if (
                    (this.strict &&
                      this.invalidStringToken(
                        this.pos - 1,
                        'Invalid escape sequence',
                      ),
                    t)
                  ) {
                    var l = this.pos - 1;
                    this.invalidStringToken(
                      l,
                      'Invalid escape sequence in template string',
                    );
                  }
                default:
                  if (n >= 48 && n <= 55) {
                    var p = this.input
                        .substr(this.pos - 1, 3)
                        .match(/^[0-7]+/)[0],
                      y = parseInt(p, 8);
                    return (
                      y > 255 && ((p = p.slice(0, -1)), (y = parseInt(p, 8))),
                      (this.pos += p.length - 1),
                      (n = this.input.charCodeAt(this.pos)),
                      (p !== '0' || n === 56 || n === 57) &&
                        (this.strict || t) &&
                        this.invalidStringToken(
                          this.pos - 1 - p.length,
                          t
                            ? 'Octal literal in template string'
                            : 'Octal literal in strict mode',
                        ),
                      String.fromCharCode(y)
                    );
                  }
                  return H(n)
                    ? (this.options.locations &&
                        ((this.lineStart = this.pos), ++this.curLine),
                      '')
                    : String.fromCharCode(n);
              }
            }),
            (he.readHexChar = function (t) {
              var n = this.pos,
                l = this.readInt(16, t);
              return (
                l === null &&
                  this.invalidStringToken(n, 'Bad character escape sequence'),
                l
              );
            }),
            (he.readWord1 = function () {
              this.containsEsc = !1;
              for (
                var t = '',
                  n = !0,
                  l = this.pos,
                  p = this.options.ecmaVersion >= 6;
                this.pos < this.input.length;

              ) {
                var y = this.fullCharCodeAtPos();
                if (F(y, p)) this.pos += y <= 65535 ? 1 : 2;
                else if (y === 92) {
                  (this.containsEsc = !0), (t += this.input.slice(l, this.pos));
                  var I = this.pos;
                  this.input.charCodeAt(++this.pos) !== 117 &&
                    this.invalidStringToken(
                      this.pos,
                      'Expecting Unicode escape sequence \\uXXXX',
                    ),
                    ++this.pos;
                  var T = this.readCodePoint();
                  (n ? k : F)(T, p) ||
                    this.invalidStringToken(I, 'Invalid Unicode escape'),
                    (t += Pe(T)),
                    (l = this.pos);
                } else break;
                n = !1;
              }
              return t + this.input.slice(l, this.pos);
            }),
            (he.readWord = function () {
              var t = this.readWord1(),
                n = o.name;
              return (
                this.keywords.test(t) && (n = P[t]), this.finishToken(n, t)
              );
            });
          var Xr = '8.12.1';
          se.acorn = {
            Parser: se,
            version: Xr,
            defaultOptions: je,
            Position: W,
            SourceLocation: Me,
            getLineInfo: ht,
            Node: O,
            TokenType: _,
            tokTypes: o,
            keywordTypes: P,
            TokContext: Le,
            tokContexts: Ce,
            isIdentifierChar: F,
            isIdentifierStart: k,
            Token: mi,
            isNewLine: H,
            lineBreak: B,
            lineBreakG: N,
            nonASCIIwhitespace: te,
          };
          function ua(t, n) {
            return se.parse(t, n);
          }
          function oa(t, n, l) {
            return se.parseExpressionAt(t, n, l);
          }
          function la(t, n) {
            return se.tokenizer(t, n);
          }
          (r.Node = O),
            (r.Parser = se),
            (r.Position = W),
            (r.SourceLocation = Me),
            (r.TokContext = Le),
            (r.Token = mi),
            (r.TokenType = _),
            (r.defaultOptions = je),
            (r.getLineInfo = ht),
            (r.isIdentifierChar = F),
            (r.isIdentifierStart = k),
            (r.isNewLine = H),
            (r.keywordTypes = P),
            (r.lineBreak = B),
            (r.lineBreakG = N),
            (r.nonASCIIwhitespace = te),
            (r.parse = ua),
            (r.parseExpressionAt = oa),
            (r.tokContexts = Ce),
            (r.tokTypes = o),
            (r.tokenizer = la),
            (r.version = Xr);
        });
      })(vi, vi.exports)),
    vi.exports
  );
}
(function (e) {
  const i = yu,
    r = /^[\da-fA-F]+$/,
    s = /^\d+$/,
    u = new WeakMap();
  function h(x) {
    x = x.Parser.acorn || x;
    let E = u.get(x);
    if (!E) {
      const D = x.tokTypes,
        w = x.TokContext,
        b = x.TokenType,
        S = new w('<tag', !1),
        k = new w('</tag', !1),
        F = new w('<tag>...</tag>', !0, !0),
        _ = { tc_oTag: S, tc_cTag: k, tc_expr: F },
        M = {
          jsxName: new b('jsxName'),
          jsxText: new b('jsxText', { beforeExpr: !0 }),
          jsxTagStart: new b('jsxTagStart', { startsExpr: !0 }),
          jsxTagEnd: new b('jsxTagEnd'),
        };
      (M.jsxTagStart.updateContext = function () {
        this.context.push(F), this.context.push(S), (this.exprAllowed = !1);
      }),
        (M.jsxTagEnd.updateContext = function (V) {
          let G = this.context.pop();
          (G === S && V === D.slash) || G === k
            ? (this.context.pop(), (this.exprAllowed = this.curContext() === F))
            : (this.exprAllowed = !0);
        }),
        (E = { tokContexts: _, tokTypes: M }),
        u.set(x, E);
    }
    return E;
  }
  function c(x) {
    if (!x) return x;
    if (x.type === 'JSXIdentifier') return x.name;
    if (x.type === 'JSXNamespacedName')
      return x.namespace.name + ':' + x.name.name;
    if (x.type === 'JSXMemberExpression')
      return c(x.object) + '.' + c(x.property);
  }
  (e.exports = function (x) {
    return (
      (x = x || {}),
      function (E) {
        return g(
          {
            allowNamespaces: x.allowNamespaces !== !1,
            allowNamespacedObjects: !!x.allowNamespacedObjects,
          },
          E,
        );
      }
    );
  }),
    Object.defineProperty(e.exports, 'tokTypes', {
      get: function () {
        return h(gn()).tokTypes;
      },
      configurable: !0,
      enumerable: !0,
    });
  function g(x, E) {
    const D = E.acorn || gn(),
      w = h(D),
      b = D.tokTypes,
      S = w.tokTypes,
      k = D.tokContexts,
      F = w.tokContexts.tc_oTag,
      _ = w.tokContexts.tc_cTag,
      M = w.tokContexts.tc_expr,
      V = D.isNewLine,
      G = D.isIdentifierStart,
      P = D.isIdentifierChar;
    return class extends E {
      static get acornJsx() {
        return w;
      }
      jsx_readToken() {
        let A = '',
          o = this.pos;
        for (;;) {
          this.pos >= this.input.length &&
            this.raise(this.start, 'Unterminated JSX contents');
          let B = this.input.charCodeAt(this.pos);
          switch (B) {
            case 60:
            case 123:
              return this.pos === this.start
                ? B === 60 && this.exprAllowed
                  ? (++this.pos, this.finishToken(S.jsxTagStart))
                  : this.getTokenFromCode(B)
                : ((A += this.input.slice(o, this.pos)),
                  this.finishToken(S.jsxText, A));
            case 38:
              (A += this.input.slice(o, this.pos)),
                (A += this.jsx_readEntity()),
                (o = this.pos);
              break;
            case 62:
            case 125:
              this.raise(
                this.pos,
                'Unexpected token `' +
                  this.input[this.pos] +
                  '`. Did you mean `' +
                  (B === 62 ? '&gt;' : '&rbrace;') +
                  '` or `{"' +
                  this.input[this.pos] +
                  '"}`?',
              );
            default:
              V(B)
                ? ((A += this.input.slice(o, this.pos)),
                  (A += this.jsx_readNewLine(!0)),
                  (o = this.pos))
                : ++this.pos;
          }
        }
      }
      jsx_readNewLine(A) {
        let o = this.input.charCodeAt(this.pos),
          B;
        return (
          ++this.pos,
          o === 13 && this.input.charCodeAt(this.pos) === 10
            ? (++this.pos,
              (B = A
                ? `
`
                : `\r
`))
            : (B = String.fromCharCode(o)),
          this.options.locations &&
            (++this.curLine, (this.lineStart = this.pos)),
          B
        );
      }
      jsx_readString(A) {
        let o = '',
          B = ++this.pos;
        for (;;) {
          this.pos >= this.input.length &&
            this.raise(this.start, 'Unterminated string constant');
          let N = this.input.charCodeAt(this.pos);
          if (N === A) break;
          N === 38
            ? ((o += this.input.slice(B, this.pos)),
              (o += this.jsx_readEntity()),
              (B = this.pos))
            : V(N)
              ? ((o += this.input.slice(B, this.pos)),
                (o += this.jsx_readNewLine(!1)),
                (B = this.pos))
              : ++this.pos;
        }
        return (
          (o += this.input.slice(B, this.pos++)), this.finishToken(b.string, o)
        );
      }
      jsx_readEntity() {
        let A = '',
          o = 0,
          B,
          N = this.input[this.pos];
        N !== '&' &&
          this.raise(this.pos, 'Entity must start with an ampersand');
        let H = ++this.pos;
        for (; this.pos < this.input.length && o++ < 10; ) {
          if (((N = this.input[this.pos++]), N === ';')) {
            A[0] === '#'
              ? A[1] === 'x'
                ? ((A = A.substr(2)),
                  r.test(A) && (B = String.fromCharCode(parseInt(A, 16))))
                : ((A = A.substr(1)),
                  s.test(A) && (B = String.fromCharCode(parseInt(A, 10))))
              : (B = i[A]);
            break;
          }
          A += N;
        }
        return B || ((this.pos = H), '&');
      }
      jsx_readWord() {
        let A,
          o = this.pos;
        do A = this.input.charCodeAt(++this.pos);
        while (P(A) || A === 45);
        return this.finishToken(S.jsxName, this.input.slice(o, this.pos));
      }
      jsx_parseIdentifier() {
        let A = this.startNode();
        return (
          this.type === S.jsxName
            ? (A.name = this.value)
            : this.type.keyword
              ? (A.name = this.type.keyword)
              : this.unexpected(),
          this.next(),
          this.finishNode(A, 'JSXIdentifier')
        );
      }
      jsx_parseNamespacedName() {
        let A = this.start,
          o = this.startLoc,
          B = this.jsx_parseIdentifier();
        if (!x.allowNamespaces || !this.eat(b.colon)) return B;
        var N = this.startNodeAt(A, o);
        return (
          (N.namespace = B),
          (N.name = this.jsx_parseIdentifier()),
          this.finishNode(N, 'JSXNamespacedName')
        );
      }
      jsx_parseElementName() {
        if (this.type === S.jsxTagEnd) return '';
        let A = this.start,
          o = this.startLoc,
          B = this.jsx_parseNamespacedName();
        for (
          this.type === b.dot &&
          B.type === 'JSXNamespacedName' &&
          !x.allowNamespacedObjects &&
          this.unexpected();
          this.eat(b.dot);

        ) {
          let N = this.startNodeAt(A, o);
          (N.object = B),
            (N.property = this.jsx_parseIdentifier()),
            (B = this.finishNode(N, 'JSXMemberExpression'));
        }
        return B;
      }
      jsx_parseAttributeValue() {
        switch (this.type) {
          case b.braceL:
            let A = this.jsx_parseExpressionContainer();
            return (
              A.expression.type === 'JSXEmptyExpression' &&
                this.raise(
                  A.start,
                  'JSX attributes must only be assigned a non-empty expression',
                ),
              A
            );
          case S.jsxTagStart:
          case b.string:
            return this.parseExprAtom();
          default:
            this.raise(
              this.start,
              'JSX value should be either an expression or a quoted JSX text',
            );
        }
      }
      jsx_parseEmptyExpression() {
        let A = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(
          A,
          'JSXEmptyExpression',
          this.start,
          this.startLoc,
        );
      }
      jsx_parseExpressionContainer() {
        let A = this.startNode();
        return (
          this.next(),
          (A.expression =
            this.type === b.braceR
              ? this.jsx_parseEmptyExpression()
              : this.parseExpression()),
          this.expect(b.braceR),
          this.finishNode(A, 'JSXExpressionContainer')
        );
      }
      jsx_parseAttribute() {
        let A = this.startNode();
        return this.eat(b.braceL)
          ? (this.expect(b.ellipsis),
            (A.argument = this.parseMaybeAssign()),
            this.expect(b.braceR),
            this.finishNode(A, 'JSXSpreadAttribute'))
          : ((A.name = this.jsx_parseNamespacedName()),
            (A.value = this.eat(b.eq) ? this.jsx_parseAttributeValue() : null),
            this.finishNode(A, 'JSXAttribute'));
      }
      jsx_parseOpeningElementAt(A, o) {
        let B = this.startNodeAt(A, o);
        B.attributes = [];
        let N = this.jsx_parseElementName();
        for (
          N && (B.name = N);
          this.type !== b.slash && this.type !== S.jsxTagEnd;

        )
          B.attributes.push(this.jsx_parseAttribute());
        return (
          (B.selfClosing = this.eat(b.slash)),
          this.expect(S.jsxTagEnd),
          this.finishNode(B, N ? 'JSXOpeningElement' : 'JSXOpeningFragment')
        );
      }
      jsx_parseClosingElementAt(A, o) {
        let B = this.startNodeAt(A, o),
          N = this.jsx_parseElementName();
        return (
          N && (B.name = N),
          this.expect(S.jsxTagEnd),
          this.finishNode(B, N ? 'JSXClosingElement' : 'JSXClosingFragment')
        );
      }
      jsx_parseElementAt(A, o) {
        let B = this.startNodeAt(A, o),
          N = [],
          H = this.jsx_parseOpeningElementAt(A, o),
          z = null;
        if (!H.selfClosing) {
          e: for (;;)
            switch (this.type) {
              case S.jsxTagStart:
                if (
                  ((A = this.start),
                  (o = this.startLoc),
                  this.next(),
                  this.eat(b.slash))
                ) {
                  z = this.jsx_parseClosingElementAt(A, o);
                  break e;
                }
                N.push(this.jsx_parseElementAt(A, o));
                break;
              case S.jsxText:
                N.push(this.parseExprAtom());
                break;
              case b.braceL:
                N.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
          c(z.name) !== c(H.name) &&
            this.raise(
              z.start,
              'Expected corresponding JSX closing tag for <' + c(H.name) + '>',
            );
        }
        let te = H.name ? 'Element' : 'Fragment';
        return (
          (B['opening' + te] = H),
          (B['closing' + te] = z),
          (B.children = N),
          this.type === b.relational &&
            this.value === '<' &&
            this.raise(
              this.start,
              'Adjacent JSX elements must be wrapped in an enclosing tag',
            ),
          this.finishNode(B, 'JSX' + te)
        );
      }
      jsx_parseText() {
        let A = this.parseLiteral(this.value);
        return (A.type = 'JSXText'), A;
      }
      jsx_parseElement() {
        let A = this.start,
          o = this.startLoc;
        return this.next(), this.jsx_parseElementAt(A, o);
      }
      parseExprAtom(A) {
        return this.type === S.jsxText
          ? this.jsx_parseText()
          : this.type === S.jsxTagStart
            ? this.jsx_parseElement()
            : super.parseExprAtom(A);
      }
      readToken(A) {
        let o = this.curContext();
        if (o === M) return this.jsx_readToken();
        if (o === F || o === _) {
          if (G(A)) return this.jsx_readWord();
          if (A == 62) return ++this.pos, this.finishToken(S.jsxTagEnd);
          if ((A === 34 || A === 39) && o == F) return this.jsx_readString(A);
        }
        return A === 60 &&
          this.exprAllowed &&
          this.input.charCodeAt(this.pos + 1) !== 33
          ? (++this.pos, this.finishToken(S.jsxTagStart))
          : super.readToken(A);
      }
      updateContext(A) {
        if (this.type == b.braceL) {
          var o = this.curContext();
          o == F
            ? this.context.push(k.b_expr)
            : o == M
              ? this.context.push(k.b_tmpl)
              : super.updateContext(A),
            (this.exprAllowed = !0);
        } else if (this.type === b.slash && A === S.jsxTagStart)
          (this.context.length -= 2),
            this.context.push(_),
            (this.exprAllowed = !1);
        else return super.updateContext(A);
      }
    };
  }
})(Cs);
var Du = Cs.exports;
const Eu = fr(Du);
function vs(e, i, r, s, u) {
  r || (r = q),
    (function h(c, g, x) {
      var E = x || c.type,
        D = i[E];
      r[E](c, g, h), D && D(c, g);
    })(e, s, u);
}
function bu(e, i, r, s, u) {
  var h = [];
  r || (r = q),
    (function c(g, x, E) {
      var D = E || g.type,
        w = i[D],
        b = g !== h[h.length - 1];
      b && h.push(g), r[D](g, x, c), w && w(g, x || h, h), b && h.pop();
    })(e, s, u);
}
function Er(e, i, r) {
  r(e, i);
}
function St(e, i, r) {}
var q = {};
q.Program = q.BlockStatement = function (e, i, r) {
  for (var s = 0, u = e.body; s < u.length; s += 1) {
    var h = u[s];
    r(h, i, 'Statement');
  }
};
q.Statement = Er;
q.EmptyStatement = St;
q.ExpressionStatement =
  q.ParenthesizedExpression =
  q.ChainExpression =
    function (e, i, r) {
      return r(e.expression, i, 'Expression');
    };
q.IfStatement = function (e, i, r) {
  r(e.test, i, 'Expression'),
    r(e.consequent, i, 'Statement'),
    e.alternate && r(e.alternate, i, 'Statement');
};
q.LabeledStatement = function (e, i, r) {
  return r(e.body, i, 'Statement');
};
q.BreakStatement = q.ContinueStatement = St;
q.WithStatement = function (e, i, r) {
  r(e.object, i, 'Expression'), r(e.body, i, 'Statement');
};
q.SwitchStatement = function (e, i, r) {
  r(e.discriminant, i, 'Expression');
  for (var s = 0, u = e.cases; s < u.length; s += 1) {
    var h = u[s];
    h.test && r(h.test, i, 'Expression');
    for (var c = 0, g = h.consequent; c < g.length; c += 1) {
      var x = g[c];
      r(x, i, 'Statement');
    }
  }
};
q.SwitchCase = function (e, i, r) {
  e.test && r(e.test, i, 'Expression');
  for (var s = 0, u = e.consequent; s < u.length; s += 1) {
    var h = u[s];
    r(h, i, 'Statement');
  }
};
q.ReturnStatement =
  q.YieldExpression =
  q.AwaitExpression =
    function (e, i, r) {
      e.argument && r(e.argument, i, 'Expression');
    };
q.ThrowStatement = q.SpreadElement = function (e, i, r) {
  return r(e.argument, i, 'Expression');
};
q.TryStatement = function (e, i, r) {
  r(e.block, i, 'Statement'),
    e.handler && r(e.handler, i),
    e.finalizer && r(e.finalizer, i, 'Statement');
};
q.CatchClause = function (e, i, r) {
  e.param && r(e.param, i, 'Pattern'), r(e.body, i, 'Statement');
};
q.WhileStatement = q.DoWhileStatement = function (e, i, r) {
  r(e.test, i, 'Expression'), r(e.body, i, 'Statement');
};
q.ForStatement = function (e, i, r) {
  e.init && r(e.init, i, 'ForInit'),
    e.test && r(e.test, i, 'Expression'),
    e.update && r(e.update, i, 'Expression'),
    r(e.body, i, 'Statement');
};
q.ForInStatement = q.ForOfStatement = function (e, i, r) {
  r(e.left, i, 'ForInit'),
    r(e.right, i, 'Expression'),
    r(e.body, i, 'Statement');
};
q.ForInit = function (e, i, r) {
  e.type === 'VariableDeclaration' ? r(e, i) : r(e, i, 'Expression');
};
q.DebuggerStatement = St;
q.FunctionDeclaration = function (e, i, r) {
  return r(e, i, 'Function');
};
q.VariableDeclaration = function (e, i, r) {
  for (var s = 0, u = e.declarations; s < u.length; s += 1) {
    var h = u[s];
    r(h, i);
  }
};
q.VariableDeclarator = function (e, i, r) {
  r(e.id, i, 'Pattern'), e.init && r(e.init, i, 'Expression');
};
q.Function = function (e, i, r) {
  e.id && r(e.id, i, 'Pattern');
  for (var s = 0, u = e.params; s < u.length; s += 1) {
    var h = u[s];
    r(h, i, 'Pattern');
  }
  r(e.body, i, e.expression ? 'Expression' : 'Statement');
};
q.Pattern = function (e, i, r) {
  e.type === 'Identifier'
    ? r(e, i, 'VariablePattern')
    : e.type === 'MemberExpression'
      ? r(e, i, 'MemberPattern')
      : r(e, i);
};
q.VariablePattern = St;
q.MemberPattern = Er;
q.RestElement = function (e, i, r) {
  return r(e.argument, i, 'Pattern');
};
q.ArrayPattern = function (e, i, r) {
  for (var s = 0, u = e.elements; s < u.length; s += 1) {
    var h = u[s];
    h && r(h, i, 'Pattern');
  }
};
q.ObjectPattern = function (e, i, r) {
  for (var s = 0, u = e.properties; s < u.length; s += 1) {
    var h = u[s];
    h.type === 'Property'
      ? (h.computed && r(h.key, i, 'Expression'), r(h.value, i, 'Pattern'))
      : h.type === 'RestElement' && r(h.argument, i, 'Pattern');
  }
};
q.Expression = Er;
q.ThisExpression = q.Super = q.MetaProperty = St;
q.ArrayExpression = function (e, i, r) {
  for (var s = 0, u = e.elements; s < u.length; s += 1) {
    var h = u[s];
    h && r(h, i, 'Expression');
  }
};
q.ObjectExpression = function (e, i, r) {
  for (var s = 0, u = e.properties; s < u.length; s += 1) {
    var h = u[s];
    r(h, i);
  }
};
q.FunctionExpression = q.ArrowFunctionExpression = q.FunctionDeclaration;
q.SequenceExpression = function (e, i, r) {
  for (var s = 0, u = e.expressions; s < u.length; s += 1) {
    var h = u[s];
    r(h, i, 'Expression');
  }
};
q.TemplateLiteral = function (e, i, r) {
  for (var s = 0, u = e.quasis; s < u.length; s += 1) {
    var h = u[s];
    r(h, i);
  }
  for (var c = 0, g = e.expressions; c < g.length; c += 1) {
    var x = g[c];
    r(x, i, 'Expression');
  }
};
q.TemplateElement = St;
q.UnaryExpression = q.UpdateExpression = function (e, i, r) {
  r(e.argument, i, 'Expression');
};
q.BinaryExpression = q.LogicalExpression = function (e, i, r) {
  r(e.left, i, 'Expression'), r(e.right, i, 'Expression');
};
q.AssignmentExpression = q.AssignmentPattern = function (e, i, r) {
  r(e.left, i, 'Pattern'), r(e.right, i, 'Expression');
};
q.ConditionalExpression = function (e, i, r) {
  r(e.test, i, 'Expression'),
    r(e.consequent, i, 'Expression'),
    r(e.alternate, i, 'Expression');
};
q.NewExpression = q.CallExpression = function (e, i, r) {
  if ((r(e.callee, i, 'Expression'), e.arguments))
    for (var s = 0, u = e.arguments; s < u.length; s += 1) {
      var h = u[s];
      r(h, i, 'Expression');
    }
};
q.MemberExpression = function (e, i, r) {
  r(e.object, i, 'Expression'), e.computed && r(e.property, i, 'Expression');
};
q.ExportNamedDeclaration = q.ExportDefaultDeclaration = function (e, i, r) {
  e.declaration &&
    r(
      e.declaration,
      i,
      e.type === 'ExportNamedDeclaration' || e.declaration.id
        ? 'Statement'
        : 'Expression',
    ),
    e.source && r(e.source, i, 'Expression');
};
q.ExportAllDeclaration = function (e, i, r) {
  e.exported && r(e.exported, i), r(e.source, i, 'Expression');
};
q.ImportDeclaration = function (e, i, r) {
  for (var s = 0, u = e.specifiers; s < u.length; s += 1) {
    var h = u[s];
    r(h, i);
  }
  r(e.source, i, 'Expression');
};
q.ImportExpression = function (e, i, r) {
  r(e.source, i, 'Expression');
};
q.ImportSpecifier =
  q.ImportDefaultSpecifier =
  q.ImportNamespaceSpecifier =
  q.Identifier =
  q.Literal =
    St;
q.TaggedTemplateExpression = function (e, i, r) {
  r(e.tag, i, 'Expression'), r(e.quasi, i, 'Expression');
};
q.ClassDeclaration = q.ClassExpression = function (e, i, r) {
  return r(e, i, 'Class');
};
q.Class = function (e, i, r) {
  e.id && r(e.id, i, 'Pattern'),
    e.superClass && r(e.superClass, i, 'Expression'),
    r(e.body, i);
};
q.ClassBody = function (e, i, r) {
  for (var s = 0, u = e.body; s < u.length; s += 1) {
    var h = u[s];
    r(h, i);
  }
};
q.MethodDefinition = q.Property = function (e, i, r) {
  e.computed && r(e.key, i, 'Expression'), r(e.value, i, 'Expression');
};
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function xn(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function Su(e) {
  var i, r;
  return xn(e) === !1
    ? !1
    : ((i = e.constructor),
      i === void 0
        ? !0
        : ((r = i.prototype),
          !(xn(r) === !1 || r.hasOwnProperty('isPrototypeOf') === !1)));
}
var As = {},
  Si =
    (Ot && Ot.__assign) ||
    function () {
      return (
        (Si =
          Object.assign ||
          function (e) {
            for (var i, r = 1, s = arguments.length; r < s; r++) {
              i = arguments[r];
              for (var u in i)
                Object.prototype.hasOwnProperty.call(i, u) && (e[u] = i[u]);
            }
            return e;
          }),
        Si.apply(this, arguments)
      );
    },
  Fu =
    (Ot && Ot.__spreadArrays) ||
    function () {
      for (var e = 0, i = 0, r = arguments.length; i < r; i++)
        e += arguments[i].length;
      for (var s = Array(e), u = 0, i = 0; i < r; i++)
        for (var h = arguments[i], c = 0, g = h.length; c < g; c++, u++)
          s[u] = h[c];
      return s;
    };
Object.defineProperty(As, '__esModule', { value: !0 });
var Kt = [];
function _u(e) {
  var i = typeof e;
  return e !== null && (i === 'object' || i === 'function');
}
function wu(e) {
  return Object.prototype.toString.call(e) === '[object RegExp]';
}
function Bu(e) {
  return Object.getOwnPropertySymbols(e).filter(function (i) {
    return Object.prototype.propertyIsEnumerable.call(e, i);
  });
}
function Di(e, i, r) {
  r === void 0 && (r = '');
  var s = { indent: '	', singleQuotes: !0 },
    u = Si(Si({}, s), i),
    h;
  u.inlineCharacterLimit === void 0
    ? (h = {
        newLine: `
`,
        newLineOrSpace: `
`,
        pad: r,
        indent: r + u.indent,
      })
    : (h = {
        newLine: '@@__PRETTY_PRINT_NEW_LINE__@@',
        newLineOrSpace: '@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@',
        pad: '@@__PRETTY_PRINT_PAD__@@',
        indent: '@@__PRETTY_PRINT_INDENT__@@',
      });
  var c = function (E) {
    if (u.inlineCharacterLimit === void 0) return E;
    var D = E.replace(new RegExp(h.newLine, 'g'), '')
      .replace(new RegExp(h.newLineOrSpace, 'g'), ' ')
      .replace(new RegExp(h.pad + '|' + h.indent, 'g'), '');
    return D.length <= u.inlineCharacterLimit
      ? D
      : E.replace(
          new RegExp(h.newLine + '|' + h.newLineOrSpace, 'g'),
          `
`,
        )
          .replace(new RegExp(h.pad, 'g'), r)
          .replace(new RegExp(h.indent, 'g'), r + u.indent);
  };
  if (Kt.indexOf(e) !== -1) return '"[Circular]"';
  if (
    e == null ||
    typeof e == 'number' ||
    typeof e == 'boolean' ||
    typeof e == 'function' ||
    typeof e == 'symbol' ||
    wu(e)
  )
    return String(e);
  if (e instanceof Date) return "new Date('" + e.toISOString() + "')";
  if (Array.isArray(e)) {
    if (e.length === 0) return '[]';
    Kt.push(e);
    var g =
      '[' +
      h.newLine +
      e
        .map(function (E, D) {
          var w = e.length - 1 === D ? h.newLine : ',' + h.newLineOrSpace,
            b = Di(E, u, r + u.indent);
          return u.transform && (b = u.transform(e, D, b)), h.indent + b + w;
        })
        .join('') +
      h.pad +
      ']';
    return Kt.pop(), c(g);
  }
  if (_u(e)) {
    var x = Fu(Object.keys(e), Bu(e));
    if (
      (u.filter &&
        (x = x.filter(function (D) {
          return u.filter && u.filter(e, D);
        })),
      x.length === 0)
    )
      return '{}';
    Kt.push(e);
    var g =
      '{' +
      h.newLine +
      x
        .map(function (D, w) {
          var b = x.length - 1 === w ? h.newLine : ',' + h.newLineOrSpace,
            S = typeof D == 'symbol',
            k = !S && /^[a-z$_][a-z$_0-9]*$/i.test(D.toString()),
            F = S || k ? D : Di(D, u),
            _ = Di(e[D], u, r + u.indent);
          return (
            u.transform && (_ = u.transform(e, D, _)),
            h.indent + String(F) + ': ' + _ + b
          );
        })
        .join('') +
      h.pad +
      '}';
    return Kt.pop(), c(g);
  }
  return (
    (e = String(e).replace(/[\r\n]/g, function (E) {
      return E ===
        `
`
        ? '\\n'
        : '\\r';
    })),
    u.singleQuotes
      ? ((e = e.replace(/\\?'/g, "\\'")), "'" + e + "'")
      : ((e = e.replace(/"/g, '\\"')), '"' + e + '"')
  );
}
var ku = (As.prettyPrint = Di),
  ys = { exports: {} },
  xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var br = Symbol.for('react.element'),
  Sr = Symbol.for('react.portal'),
  Ti = Symbol.for('react.fragment'),
  Ni = Symbol.for('react.strict_mode'),
  Li = Symbol.for('react.profiler'),
  Oi = Symbol.for('react.provider'),
  Ri = Symbol.for('react.context'),
  Iu = Symbol.for('react.server_context'),
  Vi = Symbol.for('react.forward_ref'),
  Mi = Symbol.for('react.suspense'),
  ji = Symbol.for('react.suspense_list'),
  qi = Symbol.for('react.memo'),
  Ui = Symbol.for('react.lazy'),
  Pu = Symbol.for('react.offscreen'),
  Ds;
Ds = Symbol.for('react.module.reference');
function Je(e) {
  if (typeof e == 'object' && e !== null) {
    var i = e.$$typeof;
    switch (i) {
      case br:
        switch (((e = e.type), e)) {
          case Ti:
          case Li:
          case Ni:
          case Mi:
          case ji:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Iu:
              case Ri:
              case Vi:
              case Ui:
              case qi:
              case Oi:
                return e;
              default:
                return i;
            }
        }
      case Sr:
        return i;
    }
  }
}
xe.ContextConsumer = Ri;
xe.ContextProvider = Oi;
xe.Element = br;
xe.ForwardRef = Vi;
xe.Fragment = Ti;
xe.Lazy = Ui;
xe.Memo = qi;
xe.Portal = Sr;
xe.Profiler = Li;
xe.StrictMode = Ni;
xe.Suspense = Mi;
xe.SuspenseList = ji;
xe.isAsyncMode = function () {
  return !1;
};
xe.isConcurrentMode = function () {
  return !1;
};
xe.isContextConsumer = function (e) {
  return Je(e) === Ri;
};
xe.isContextProvider = function (e) {
  return Je(e) === Oi;
};
xe.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === br;
};
xe.isForwardRef = function (e) {
  return Je(e) === Vi;
};
xe.isFragment = function (e) {
  return Je(e) === Ti;
};
xe.isLazy = function (e) {
  return Je(e) === Ui;
};
xe.isMemo = function (e) {
  return Je(e) === qi;
};
xe.isPortal = function (e) {
  return Je(e) === Sr;
};
xe.isProfiler = function (e) {
  return Je(e) === Li;
};
xe.isStrictMode = function (e) {
  return Je(e) === Ni;
};
xe.isSuspense = function (e) {
  return Je(e) === Mi;
};
xe.isSuspenseList = function (e) {
  return Je(e) === ji;
};
xe.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ti ||
    e === Li ||
    e === Ni ||
    e === Mi ||
    e === ji ||
    e === Pu ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Ui ||
        e.$$typeof === qi ||
        e.$$typeof === Oi ||
        e.$$typeof === Ri ||
        e.$$typeof === Vi ||
        e.$$typeof === Ds ||
        e.getModuleId !== void 0))
  );
};
xe.typeOf = Je;
ys.exports = xe;
var it = ys.exports,
  st = function (e, i) {
    return e === 0 ? '' : new Array(e * i).fill(' ').join('');
  };
function ti(e) {
  '@babel/helpers - typeof';
  return (
    (ti =
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
    ti(e)
  );
}
function Cn(e) {
  return Tu(e) || Nu(e) || Lu(e) || Ou();
}
function Tu(e) {
  if (Array.isArray(e)) return sr(e);
}
function Nu(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function Lu(e, i) {
  if (e) {
    if (typeof e == 'string') return sr(e, i);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return sr(e, i);
  }
}
function sr(e, i) {
  (i == null || i > e.length) && (i = e.length);
  for (var r = 0, s = new Array(i); r < i; r++) s[r] = e[r];
  return s;
}
function Ou() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ar(e, i) {
  return e === null ||
    ti(e) !== 'object' ||
    e instanceof Date ||
    e instanceof RegExp ||
    Et.isValidElement(e)
    ? e
    : (i.add(e),
      Array.isArray(e)
        ? e.map(function (r) {
            return ar(r, i);
          })
        : Object.keys(e)
            .sort()
            .reduce(function (r, s) {
              return (
                s === '_owner' ||
                  (s === 'current' || i.has(e[s])
                    ? (r[s] = '[Circular]')
                    : (r[s] = ar(e[s], i))),
                r
              );
            }, {}));
}
function Ru(e) {
  return ar(e, new WeakSet());
}
var Es = function (i) {
    return { type: 'string', value: i };
  },
  Vu = function (i) {
    return { type: 'number', value: i };
  },
  Mu = function (i, r, s, u) {
    return {
      type: 'ReactElement',
      displayName: i,
      props: r,
      defaultProps: s,
      childrens: u,
    };
  },
  ju = function (i, r) {
    return { type: 'ReactFragment', key: i, childrens: r };
  },
  qu = !!Et.Fragment,
  bs = function (i) {
    return !i.name || i.name === '_default' ? 'No Display Name' : i.name;
  },
  Uu = function e(i) {
    switch (!0) {
      case !!i.displayName:
        return i.displayName;
      case i.$$typeof === it.Memo:
        return e(i.type);
      case i.$$typeof === it.ForwardRef:
        return e(i.render);
      default:
        return bs(i);
    }
  },
  Gu = function (i) {
    switch (!0) {
      case typeof i.type == 'string':
        return i.type;
      case typeof i.type == 'function':
        return i.type.displayName ? i.type.displayName : bs(i.type);
      case it.isForwardRef(i):
      case it.isMemo(i):
        return Uu(i.type);
      case it.isContextConsumer(i):
        return ''.concat(i.type._context.displayName || 'Context', '.Consumer');
      case it.isContextProvider(i):
        return ''.concat(i.type._context.displayName || 'Context', '.Provider');
      case it.isLazy(i):
        return 'Lazy';
      case it.isProfiler(i):
        return 'Profiler';
      case it.isStrictMode(i):
        return 'StrictMode';
      case it.isSuspense(i):
        return 'Suspense';
      default:
        return 'UnknownElementType';
    }
  },
  vn = function (i, r) {
    return r !== 'children';
  },
  Wu = function (i) {
    return i !== !0 && i !== !1 && i !== null && i !== '';
  },
  An = function (i, r) {
    var s = {};
    return (
      Object.keys(i)
        .filter(function (u) {
          return r(i[u], u);
        })
        .forEach(function (u) {
          return (s[u] = i[u]);
        }),
      s
    );
  },
  Fr = function e(i, r) {
    var s = r.displayName,
      u = s === void 0 ? Gu : s;
    if (typeof i == 'string') return Es(i);
    if (typeof i == 'number') return Vu(i);
    if (!Xt.isValidElement(i))
      throw new Error(
        'react-element-to-jsx-string: Expected a React.Element, got `'.concat(
          ti(i),
          '`',
        ),
      );
    var h = u(i),
      c = An(i.props, vn);
    i.ref !== null && (c.ref = i.ref);
    var g = i.key;
    typeof g == 'string' && g.search(/^\./) && (c.key = g);
    var x = An(i.type.defaultProps || {}, vn),
      E = Xt.Children.toArray(i.props.children)
        .filter(Wu)
        .map(function (D) {
          return e(D, r);
        });
    return qu && i.type === Et.Fragment ? ju(g, E) : Mu(h, c, x, E);
  };
function zu() {}
var Hu = function (i) {
    return i
      .toString()
      .split(
        `
`,
      )
      .map(function (r) {
        return r.trim();
      })
      .join('');
  },
  yn = Hu,
  Ss = function (e, i) {
    var r = i.functionValue,
      s = r === void 0 ? yn : r,
      u = i.showFunctions;
    return s(!u && s === yn ? zu : e);
  },
  Qu = function (e, i, r, s) {
    var u = Ru(e),
      h = ku(u, {
        transform: function (g, x, E) {
          var D = g[x];
          return D && Et.isValidElement(D)
            ? Gi(Fr(D, s), !0, r, s)
            : typeof D == 'function'
              ? Ss(D, s)
              : E;
        },
      });
    return i
      ? h
          .replace(/\s+/g, ' ')
          .replace(/{ /g, '{')
          .replace(/ }/g, '}')
          .replace(/\[ /g, '[')
          .replace(/ ]/g, ']')
      : h.replace(/\t/g, st(1, s.tabStop)).replace(
          /\n([^$])/g,
          `
`.concat(st(r + 1, s.tabStop), '$1'),
        );
  },
  Ku = function (i) {
    return i.replace(/"/g, '&quot;');
  },
  Xu = function (i, r, s, u) {
    if (typeof i == 'number') return '{'.concat(String(i), '}');
    if (typeof i == 'string') return '"'.concat(Ku(i), '"');
    if (ti(i) === 'symbol') {
      var h = i
        .valueOf()
        .toString()
        .replace(/Symbol\((.*)\)/, '$1');
      return h ? "{Symbol('".concat(h, "')}") : '{Symbol()}';
    }
    return typeof i == 'function'
      ? '{'.concat(Ss(i, u), '}')
      : Et.isValidElement(i)
        ? '{'.concat(Gi(Fr(i, u), !0, s, u), '}')
        : i instanceof Date
          ? isNaN(i.valueOf())
            ? '{new Date(NaN)}'
            : '{new Date("'.concat(i.toISOString(), '")}')
          : Su(i) || Array.isArray(i)
            ? '{'.concat(Qu(i, r, s, u), '}')
            : '{'.concat(String(i), '}');
  },
  Ju = function (e, i, r, s, u, h, c, g) {
    if (!i && !s)
      throw new Error(
        'The prop "'.concat(
          e,
          '" has no value and no default: could not be formatted',
        ),
      );
    var x = i ? r : u,
      E = g.useBooleanShorthandSyntax,
      D = g.tabStop,
      w = Xu(x, h, c, g),
      b = ' ',
      S = `
`.concat(st(c + 1, D)),
      k = w.includes(`
`);
    return (
      E && w === '{false}' && !s
        ? ((b = ''), (S = ''))
        : E && w === '{true}'
          ? ((b += ''.concat(e)), (S += ''.concat(e)))
          : ((b += ''.concat(e, '=').concat(w)),
            (S += ''.concat(e, '=').concat(w))),
      {
        attributeFormattedInline: b,
        attributeFormattedMultiline: S,
        isMultilineAttribute: k,
      }
    );
  },
  $u = function (e, i) {
    var r = e.slice(0, e.length > 0 ? e.length - 1 : 0),
      s = e[e.length - 1];
    return (
      s &&
      (i.type === 'string' || i.type === 'number') &&
      (s.type === 'string' || s.type === 'number')
        ? r.push(Es(String(s.value) + String(i.value)))
        : (s && r.push(s), r.push(i)),
      r
    );
  },
  Yu = function (i) {
    return ['key', 'ref'].includes(i);
  },
  Zu = function (e) {
    return function (i) {
      var r = i.includes('key'),
        s = i.includes('ref'),
        u = i.filter(function (c) {
          return !Yu(c);
        }),
        h = Cn(e ? u.sort() : u);
      return s && h.unshift('ref'), r && h.unshift('key'), h;
    };
  };
function eo(e, i) {
  return Array.isArray(i)
    ? function (r) {
        return i.indexOf(r) === -1;
      }
    : function (r) {
        return i(e[r], r);
      };
}
var to = function (i, r, s, u, h) {
    var c = h.tabStop;
    return i.type === 'string'
      ? r
          .split(
            `
`,
          )
          .map(function (g, x) {
            return x === 0 ? g : ''.concat(st(u, c)).concat(g);
          }).join(`
`)
      : r;
  },
  io = function (i, r, s) {
    return function (u) {
      return to(u, Gi(u, i, r, s), i, r, s);
    };
  },
  ro = function (i, r) {
    return function (s) {
      var u = Object.keys(i).includes(s);
      return !u || (u && i[s] !== r[s]);
    };
  },
  Fs = function (i, r, s, u, h) {
    return h ? st(s, u).length + r.length > h : i.length > 1;
  },
  no = function (i, r, s, u, h, c, g) {
    return (Fs(i, r, h, c, g) || s) && !u;
  },
  _s = function (e, i, r, s) {
    var u = e.type,
      h = e.displayName,
      c = h === void 0 ? '' : h,
      g = e.childrens,
      x = e.props,
      E = x === void 0 ? {} : x,
      D = e.defaultProps,
      w = D === void 0 ? {} : D;
    if (u !== 'ReactElement')
      throw new Error(
        'The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(
          u,
        ),
      );
    var b = s.filterProps,
      S = s.maxInlineAttributesLineLength,
      k = s.showDefaultProps,
      F = s.sortProps,
      _ = s.tabStop,
      M = '<'.concat(c),
      V = M,
      G = M,
      P = !1,
      A = [],
      o = eo(E, b);
    Object.keys(E)
      .filter(o)
      .filter(ro(w, E))
      .forEach(function (H) {
        return A.push(H);
      }),
      Object.keys(w)
        .filter(o)
        .filter(function () {
          return k;
        })
        .filter(function (H) {
          return !A.includes(H);
        })
        .forEach(function (H) {
          return A.push(H);
        });
    var B = Zu(F)(A);
    if (
      (B.forEach(function (H) {
        var z = Ju(
            H,
            Object.keys(E).includes(H),
            E[H],
            Object.keys(w).includes(H),
            w[H],
            i,
            r,
            s,
          ),
          te = z.attributeFormattedInline,
          J = z.attributeFormattedMultiline,
          K = z.isMultilineAttribute;
        K && (P = !0), (V += te), (G += J);
      }),
      (G += `
`.concat(st(r, _))),
      no(B, V, P, i, r, _, S) ? (M = G) : (M = V),
      g && g.length > 0)
    ) {
      var N = r + 1;
      (M += '>'),
        i ||
          ((M += `
`),
          (M += st(N, _))),
        (M += g
          .reduce($u, [])
          .map(io(i, N, s))
          .join(
            i
              ? ''
              : `
`.concat(st(N, _)),
          )),
        i ||
          ((M += `
`),
          (M += st(N - 1, _))),
        (M += '</'.concat(c, '>'));
    } else Fs(B, V, r, _, S) || (M += ' '), (M += '/>');
    return M;
  },
  so = '',
  Dn = 'React.Fragment',
  ao = function (i, r, s) {
    var u = {};
    return (
      r && (u = { key: r }),
      {
        type: 'ReactElement',
        displayName: i,
        props: u,
        defaultProps: {},
        childrens: s,
      }
    );
  },
  uo = function (i) {
    var r = i.key;
    return !!r;
  },
  oo = function (i) {
    var r = i.childrens;
    return r.length === 0;
  },
  lo = function (e, i, r, s) {
    var u = e.type,
      h = e.key,
      c = e.childrens;
    if (u !== 'ReactFragment')
      throw new Error(
        'The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(
          u,
        ),
      );
    var g = s.useFragmentShortSyntax,
      x;
    return (
      g ? (oo(e) || uo(e) ? (x = Dn) : (x = so)) : (x = Dn),
      _s(ao(x, h, c), i, r, s)
    );
  },
  ho = ['<', '>', '{', '}'],
  co = function (i) {
    return ho.some(function (r) {
      return i.includes(r);
    });
  },
  fo = function (i) {
    return co(i) ? '{`'.concat(i, '`}') : i;
  },
  po = function (i) {
    var r = i;
    return (
      r.endsWith(' ') && (r = r.replace(/^(.*?)(\s+)$/, "$1{'$2'}")),
      r.startsWith(' ') && (r = r.replace(/^(\s+)(.*)$/, "{'$1'}$2")),
      r
    );
  },
  Gi = function (e, i, r, s) {
    if (e.type === 'number') return String(e.value);
    if (e.type === 'string')
      return e.value ? ''.concat(po(fo(String(e.value)))) : '';
    if (e.type === 'ReactElement') return _s(e, i, r, s);
    if (e.type === 'ReactFragment') return lo(e, i, r, s);
    throw new TypeError('Unknow format type "'.concat(e.type, '"'));
  },
  mo = function (e, i) {
    return Gi(e, !1, 0, i);
  },
  $t = function (i) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = r.filterProps,
      u = s === void 0 ? [] : s,
      h = r.showDefaultProps,
      c = h === void 0 ? !0 : h,
      g = r.showFunctions,
      x = g === void 0 ? !1 : g,
      E = r.functionValue,
      D = r.tabStop,
      w = D === void 0 ? 2 : D,
      b = r.useBooleanShorthandSyntax,
      S = b === void 0 ? !0 : b,
      k = r.useFragmentShortSyntax,
      F = k === void 0 ? !0 : k,
      _ = r.sortProps,
      M = _ === void 0 ? !0 : _,
      V = r.maxInlineAttributesLineLength,
      G = r.displayName;
    if (!i)
      throw new Error('react-element-to-jsx-string: Expected a ReactElement');
    var P = {
      filterProps: u,
      showDefaultProps: c,
      showFunctions: x,
      functionValue: E,
      tabStop: w,
      useBooleanShorthandSyntax: S,
      useFragmentShortSyntax: F,
      sortProps: M,
      maxInlineAttributesLineLength: V,
      displayName: G,
    };
    return mo(Fr(i, P), P);
  };
const { logger: Ai } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  {
    defaultDecorateStory: go,
    addons: xo,
    useEffect: Co,
  } = __STORYBOOK_MODULE_PREVIEW_API__;
var vo = Ve({
    '../../node_modules/lodash/_freeGlobal.js'(e, i) {
      var r =
        typeof global == 'object' &&
        global &&
        global.Object === Object &&
        global;
      i.exports = r;
    },
  }),
  Ao = Ve({
    '../../node_modules/lodash/_root.js'(e, i) {
      var r = vo(),
        s = typeof self == 'object' && self && self.Object === Object && self,
        u = r || s || Function('return this')();
      i.exports = u;
    },
  }),
  ws = Ve({
    '../../node_modules/lodash/_Symbol.js'(e, i) {
      var r = Ao(),
        s = r.Symbol;
      i.exports = s;
    },
  }),
  yo = Ve({
    '../../node_modules/lodash/_getRawTag.js'(e, i) {
      var r = ws(),
        s = Object.prototype,
        u = s.hasOwnProperty,
        h = s.toString,
        c = r ? r.toStringTag : void 0;
      function g(x) {
        var E = u.call(x, c),
          D = x[c];
        try {
          x[c] = void 0;
          var w = !0;
        } catch {}
        var b = h.call(x);
        return w && (E ? (x[c] = D) : delete x[c]), b;
      }
      i.exports = g;
    },
  }),
  Do = Ve({
    '../../node_modules/lodash/_objectToString.js'(e, i) {
      var r = Object.prototype,
        s = r.toString;
      function u(h) {
        return s.call(h);
      }
      i.exports = u;
    },
  }),
  _r = Ve({
    '../../node_modules/lodash/_baseGetTag.js'(e, i) {
      var r = ws(),
        s = yo(),
        u = Do(),
        h = '[object Null]',
        c = '[object Undefined]',
        g = r ? r.toStringTag : void 0;
      function x(E) {
        return E == null
          ? E === void 0
            ? c
            : h
          : g && g in Object(E)
            ? s(E)
            : u(E);
      }
      i.exports = x;
    },
  }),
  Eo = Ve({
    '../../node_modules/lodash/isObject.js'(e, i) {
      function r(s) {
        var u = typeof s;
        return s != null && (u == 'object' || u == 'function');
      }
      i.exports = r;
    },
  }),
  bo = Ve({
    '../../node_modules/lodash/isFunction.js'(e, i) {
      var r = _r(),
        s = Eo(),
        u = '[object AsyncFunction]',
        h = '[object Function]',
        c = '[object GeneratorFunction]',
        g = '[object Proxy]';
      function x(E) {
        if (!s(E)) return !1;
        var D = r(E);
        return D == h || D == c || D == u || D == g;
      }
      i.exports = x;
    },
  }),
  So = Ve({
    '../../node_modules/lodash/_overArg.js'(e, i) {
      function r(s, u) {
        return function (h) {
          return s(u(h));
        };
      }
      i.exports = r;
    },
  }),
  Fo = Ve({
    '../../node_modules/lodash/_getPrototype.js'(e, i) {
      var r = So(),
        s = r(Object.getPrototypeOf, Object);
      i.exports = s;
    },
  }),
  Bs = Ve({
    '../../node_modules/lodash/isObjectLike.js'(e, i) {
      function r(s) {
        return s != null && typeof s == 'object';
      }
      i.exports = r;
    },
  }),
  _o = Ve({
    '../../node_modules/lodash/isPlainObject.js'(e, i) {
      var r = _r(),
        s = Fo(),
        u = Bs(),
        h = '[object Object]',
        c = Function.prototype,
        g = Object.prototype,
        x = c.toString,
        E = g.hasOwnProperty,
        D = x.call(Object);
      function w(b) {
        if (!u(b) || r(b) != h) return !1;
        var S = s(b);
        if (S === null) return !0;
        var k = E.call(S, 'constructor') && S.constructor;
        return typeof k == 'function' && k instanceof k && x.call(k) == D;
      }
      i.exports = w;
    },
  }),
  wo = Ve({
    '../../node_modules/lodash/isArray.js'(e, i) {
      var r = Array.isArray;
      i.exports = r;
    },
  }),
  Bo = Ve({
    '../../node_modules/lodash/isString.js'(e, i) {
      var r = _r(),
        s = wo(),
        u = Bs(),
        h = '[object String]';
      function c(g) {
        return typeof g == 'string' || (!s(g) && u(g) && r(g) == h);
      }
      i.exports = c;
    },
  }),
  ur = 'custom',
  ai = 'object',
  wr = 'array',
  ko = 'class',
  Vt = 'func',
  jt = 'element';
function Br(e) {
  return ba.includes(e.toLowerCase());
}
var ks = { format: { indent: { style: '  ' }, semicolons: !1 } },
  Io = { ...ks, format: { newline: '' } },
  Po = { ...ks };
function dt(e, i = !1) {
  return Nn.generate(e, i ? Io : Po);
}
function or(e, i = !1) {
  return i ? To(e) : dt(e);
}
function To(e) {
  let i = dt(e, !0);
  return i.endsWith(' }') || (i = `${i.slice(0, -1)} }`), i;
}
function En(e, i = !1) {
  return i ? Lo(e) : No(e);
}
function No(e) {
  let i = dt(e);
  return i.endsWith('  }]') && (i = ga(i)), i;
}
function Lo(e) {
  let i = dt(e, !0);
  return i.startsWith('[    ') && (i = i.replace('[    ', '[')), i;
}
var Is = (e) => e.$$typeof === Symbol.for('react.memo'),
  Oo = (e) => e.$$typeof === Symbol.for('react.forward_ref'),
  kr = { ...q, JSXElement: () => {} },
  Ro = ke.extend(Eu());
function ui(e) {
  return e != null ? e.name : null;
}
function bn(e) {
  return e.filter(
    (i) => i.type === 'ObjectExpression' || i.type === 'ArrayExpression',
  );
}
function Ps(e) {
  let i = [];
  return (
    bu(
      e,
      {
        ObjectExpression(r, s) {
          i.push(bn(s).length);
        },
        ArrayExpression(r, s) {
          i.push(bn(s).length);
        },
      },
      kr,
    ),
    Math.max(...i)
  );
}
function Vo(e) {
  return { inferredType: { type: 'Identifier', identifier: ui(e) }, ast: e };
}
function Mo(e) {
  return { inferredType: { type: 'Literal' }, ast: e };
}
function jo(e) {
  let i;
  vs(
    e.body,
    {
      JSXElement(u) {
        i = u;
      },
    },
    kr,
  );
  let r = {
      type: i != null ? 'Element' : 'Function',
      params: e.params,
      hasParams: e.params.length !== 0,
    },
    s = ui(e.id);
  return s != null && (r.identifier = s), { inferredType: r, ast: e };
}
function qo(e) {
  let i;
  return (
    vs(
      e.body,
      {
        JSXElement(r) {
          i = r;
        },
      },
      kr,
    ),
    {
      inferredType: {
        type: i != null ? 'Element' : 'Class',
        identifier: ui(e.id),
      },
      ast: e,
    }
  );
}
function Uo(e) {
  let i = { type: 'Element' },
    r = ui(e.openingElement.name);
  return r != null && (i.identifier = r), { inferredType: i, ast: e };
}
function Go(e) {
  let i = e.callee.type === 'MemberExpression' ? e.callee.property : e.callee;
  return ui(i) === 'shape' ? Ts(e.arguments[0]) : null;
}
function Ts(e) {
  return { inferredType: { type: 'Object', depth: Ps(e) }, ast: e };
}
function Wo(e) {
  return { inferredType: { type: 'Array', depth: Ps(e) }, ast: e };
}
function zo(e) {
  switch (e.type) {
    case 'Identifier':
      return Vo(e);
    case 'Literal':
      return Mo(e);
    case 'FunctionExpression':
    case 'ArrowFunctionExpression':
      return jo(e);
    case 'ClassExpression':
      return qo(e);
    case 'JSXElement':
      return Uo(e);
    case 'CallExpression':
      return Go(e);
    case 'ObjectExpression':
      return Ts(e);
    case 'ArrayExpression':
      return Wo(e);
    default:
      return null;
  }
}
function Ho(e) {
  let i = Ro.parse(`(${e})`, { ecmaVersion: 2020 }),
    r = { inferredType: { type: 'Unknown' }, ast: i };
  if (i.body[0] != null) {
    let s = i.body[0];
    switch (s.type) {
      case 'ExpressionStatement': {
        let u = zo(s.expression);
        u != null && (r = u);
        break;
      }
    }
  }
  return r;
}
function gt(e) {
  try {
    return { ...Ho(e) };
  } catch {}
  return { inferredType: { type: 'Unknown' } };
}
function Ns({ inferredType: e, ast: i }) {
  let { depth: r } = e;
  if (r <= 2) {
    let s = En(i, !0);
    if (!ii(s)) return Ae(s);
  }
  return Ae(wr, En(i));
}
function Ls({ inferredType: e, ast: i }) {
  let { depth: r } = e;
  if (r === 1) {
    let s = or(i, !0);
    if (!ii(s)) return Ae(s);
  }
  return Ae(ai, or(i));
}
function Ir(e, i) {
  return i ? `${e}( ... )` : `${e}()`;
}
function Wi(e) {
  return `<${e} />`;
}
function Os(e) {
  let { type: i, identifier: r } = e;
  switch (i) {
    case 'Function':
      return Ir(r, e.hasParams);
    case 'Element':
      return Wi(r);
    default:
      return r;
  }
}
function Qo({ inferredType: e, ast: i }) {
  let { identifier: r } = e;
  if (r != null) return Ae(Os(e), dt(i));
  let s = dt(i, !0);
  return ii(s) ? Ae(Vt, dt(i)) : Ae(s);
}
function Ko(e, i) {
  let { inferredType: r } = i,
    { identifier: s } = r;
  if (s != null && !Br(s)) {
    let u = Os(r);
    return Ae(u, e);
  }
  return ii(e) ? Ae(jt, e) : Ae(e);
}
function Rs(e) {
  try {
    let i = gt(e);
    switch (i.inferredType.type) {
      case 'Object':
        return Ls(i);
      case 'Function':
        return Qo(i);
      case 'Element':
        return Ko(e, i);
      case 'Array':
        return Ns(i);
      default:
        return null;
    }
  } catch (i) {
    console.error(i);
  }
  return null;
}
var Sn = cr(bo()),
  Xo = cr(_o()),
  Jo = cr(Bo());
function Vs(e) {
  return e.$$typeof != null;
}
function Ms(e, i) {
  let { name: r } = e;
  return r !== '' && r !== 'anonymous' && r !== i ? r : null;
}
var $o = (e) => Ae(JSON.stringify(e));
function Yo(e) {
  let { type: i } = e,
    { displayName: r } = i,
    s = $t(e, {});
  if (r != null) {
    let u = Wi(r);
    return Ae(u, s);
  }
  if ((0, Jo.default)(i) && Br(i)) {
    let u = $t(e, { tabStop: 0 }).replace(/\r?\n|\r/g, '');
    if (!ii(u)) return Ae(u);
  }
  return Ae(jt, s);
}
var Zo = (e) => {
    if (Vs(e) && e.type != null) return Yo(e);
    if ((0, Xo.default)(e)) {
      let i = gt(JSON.stringify(e));
      return Ls(i);
    }
    if (Array.isArray(e)) {
      let i = gt(JSON.stringify(e));
      return Ns(i);
    }
    return Ae(ai);
  },
  el = (e, i) => {
    let r = !1,
      s;
    if ((0, Sn.default)(e.render)) r = !0;
    else if (e.prototype != null && (0, Sn.default)(e.prototype.render)) r = !0;
    else {
      let h;
      try {
        s = gt(e.toString());
        let { hasParams: c, params: g } = s.inferredType;
        c
          ? g.length === 1 && g[0].type === 'ObjectPattern' && (h = e({}))
          : (h = e()),
          h != null && Vs(h) && (r = !0);
      } catch {}
    }
    let u = Ms(e, i.name);
    if (u != null) {
      if (r) return Ae(Wi(u));
      s != null && (s = gt(e.toString()));
      let { hasParams: h } = s.inferredType;
      return Ae(Ir(u, h));
    }
    return Ae(r ? jt : Vt);
  },
  tl = (e) => Ae(e.toString()),
  js = { string: $o, object: Zo, function: el, default: tl };
function il(e = {}) {
  return { ...js, ...e };
}
function rl(e, i, r = js) {
  try {
    switch (typeof e) {
      case 'string':
        return r.string(e, i);
      case 'object':
        return r.object(e, i);
      case 'function':
        return r.function(e, i);
      default:
        return r.default(e, i);
    }
  } catch (s) {
    console.error(s);
  }
  return null;
}
function nl(e, i) {
  let r = e != null,
    s = i != null;
  if (!r && !s) return '';
  let u = [];
  if (r) {
    let h = e.map((c) => {
      let g = c.getPrettyName(),
        x = c.getTypeName();
      return x != null ? `${g}: ${x}` : g;
    });
    u.push(`(${h.join(', ')})`);
  } else u.push('()');
  return s && u.push(`=> ${i.getTypeName()}`), u.join(' ');
}
function sl(e, i) {
  let r = e != null,
    s = i != null;
  if (!r && !s) return '';
  let u = [];
  return (
    r ? u.push('( ... )') : u.push('()'),
    s && u.push(`=> ${i.getTypeName()}`),
    u.join(' ')
  );
}
function al(e) {
  return e.replace(
    /,/g,
    `,\r
`,
  );
}
var ul = 150;
function Oe({ name: e, short: i, compact: r, full: s, inferredType: u }) {
  return { name: e, short: i, compact: r, full: s ?? i, inferredType: u };
}
function qs(e) {
  return e.replace(/PropTypes./g, '').replace(/.isRequired/g, '');
}
function Fn(e) {
  return e.split(/\r?\n/);
}
function Fi(e, i = !1) {
  return qs(or(e, i));
}
function _n(e, i = !1) {
  return qs(dt(e, i));
}
function ol(e) {
  switch (e) {
    case 'Object':
      return ai;
    case 'Array':
      return wr;
    case 'Class':
      return ko;
    case 'Function':
      return Vt;
    case 'Element':
      return jt;
    default:
      return ur;
  }
}
function Us(e, i) {
  let { inferredType: r, ast: s } = gt(e),
    { type: u } = r,
    h,
    c,
    g;
  switch (u) {
    case 'Identifier':
    case 'Literal':
      (h = e), (c = e);
      break;
    case 'Object': {
      let { depth: x } = r;
      (h = ai), (c = x === 1 ? Fi(s, !0) : null), (g = Fi(s));
      break;
    }
    case 'Element': {
      let { identifier: x } = r;
      (h = x != null && !Br(x) ? x : jt),
        (c = Fn(e).length === 1 ? e : null),
        (g = e);
      break;
    }
    case 'Array': {
      let { depth: x } = r;
      (h = wr), (c = x <= 2 ? _n(s, !0) : null), (g = _n(s));
      break;
    }
    default:
      (h = ol(u)), (c = Fn(e).length === 1 ? e : null), (g = e);
      break;
  }
  return Oe({ name: i, short: h, compact: c, full: g, inferredType: u });
}
function ll({ raw: e }) {
  return e != null
    ? Us(e, 'custom')
    : Oe({ name: 'custom', short: ur, compact: ur });
}
function hl(e) {
  let { jsDocTags: i } = e;
  return i != null && (i.params != null || i.returns != null)
    ? Oe({
        name: 'func',
        short: sl(i.params, i.returns),
        compact: null,
        full: nl(i.params, i.returns),
      })
    : Oe({ name: 'func', short: Vt, compact: Vt });
}
function cl(e, i) {
  let r = Object.keys(e.value)
      .map((c) => `${c}: ${Mt(e.value[c], i).full}`)
      .join(', '),
    { inferredType: s, ast: u } = gt(`{ ${r} }`),
    { depth: h } = s;
  return Oe({
    name: 'shape',
    short: ai,
    compact: h === 1 && u ? Fi(u, !0) : null,
    full: u ? Fi(u) : null,
  });
}
function tr(e) {
  return `objectOf(${e})`;
}
function fl(e, i) {
  let { short: r, compact: s, full: u } = Mt(e.value, i);
  return Oe({
    name: 'objectOf',
    short: tr(r),
    compact: s != null ? tr(s) : null,
    full: u && tr(u),
  });
}
function pl(e, i) {
  if (Array.isArray(e.value)) {
    let r = e.value.reduce(
      (s, u) => {
        let { short: h, compact: c, full: g } = Mt(u, i);
        return s.short.push(h), s.compact.push(c), s.full.push(g), s;
      },
      { short: [], compact: [], full: [] },
    );
    return Oe({
      name: 'union',
      short: r.short.join(' | '),
      compact: r.compact.every((s) => s != null) ? r.compact.join(' | ') : null,
      full: r.full.join(' | '),
    });
  }
  return Oe({ name: 'union', short: e.value, compact: null });
}
function dl({ value: e, computed: i }) {
  return i
    ? Us(e, 'enumvalue')
    : Oe({ name: 'enumvalue', short: e, compact: e });
}
function ml(e) {
  if (Array.isArray(e.value)) {
    let i = e.value.reduce(
      (r, s) => {
        let { short: u, compact: h, full: c } = dl(s);
        return r.short.push(u), r.compact.push(h), r.full.push(c), r;
      },
      { short: [], compact: [], full: [] },
    );
    return Oe({
      name: 'enum',
      short: i.short.join(' | '),
      compact: i.compact.every((r) => r != null) ? i.compact.join(' | ') : null,
      full: i.full.join(' | '),
    });
  }
  return Oe({ name: 'enum', short: e.value, compact: e.value });
}
function lr(e) {
  return `${e}[]`;
}
function wn(e) {
  return `[${e}]`;
}
function Bn(e, i, r) {
  return Oe({
    name: 'arrayOf',
    short: lr(e),
    compact: i != null ? wn(i) : null,
    full: r && wn(r),
  });
}
function gl(e, i) {
  let {
    name: r,
    short: s,
    compact: u,
    full: h,
    inferredType: c,
  } = Mt(e.value, i);
  if (r === 'custom') {
    if (c === 'Object') return Bn(s, u, h);
  } else if (r === 'shape') return Bn(s, u, h);
  return Oe({ name: 'arrayOf', short: lr(s), compact: lr(s) });
}
function Mt(e, i) {
  try {
    switch (e.name) {
      case 'custom':
        return ll(e);
      case 'func':
        return hl(i);
      case 'shape':
        return cl(e, i);
      case 'instanceOf':
        return Oe({ name: 'instanceOf', short: e.value, compact: e.value });
      case 'objectOf':
        return fl(e, i);
      case 'union':
        return pl(e, i);
      case 'enum':
        return ml(e);
      case 'arrayOf':
        return gl(e, i);
      default:
        return Oe({ name: e.name, short: e.name, compact: e.name });
    }
  } catch (r) {
    console.error(r);
  }
  return Oe({ name: 'unknown', short: 'unknown', compact: 'unknown' });
}
function xl(e) {
  let { type: i } = e.docgenInfo;
  if (i == null) return null;
  try {
    switch (i.name) {
      case 'custom':
      case 'shape':
      case 'instanceOf':
      case 'objectOf':
      case 'union':
      case 'enum':
      case 'arrayOf': {
        let { short: r, compact: s, full: u } = Mt(i, e);
        return s != null && !ma(s) ? Ae(s) : u ? Ae(r, u) : Ae(r);
      }
      case 'func': {
        let { short: r, full: s } = Mt(i, e),
          u = r,
          h;
        return s && s.length < ul ? (u = s) : s && (h = al(s)), Ae(u, h);
      }
      default:
        return null;
    }
  } catch (r) {
    console.error(r);
  }
  return null;
}
var Cl = (e, { name: i, type: r }) => {
    let s =
        (r == null ? void 0 : r.summary) === 'element' ||
        (r == null ? void 0 : r.summary) === 'elementType',
      u = Ms(e, i);
    if (u != null) {
      if (s) return Ae(Wi(u));
      let { hasParams: h } = gt(e.toString()).inferredType;
      return Ae(Ir(u, h));
    }
    return Ae(s ? jt : Vt);
  },
  vl = il({ function: Cl });
function Al(e, i) {
  let { propTypes: r } = i;
  return r != null
    ? Object.keys(r)
        .map((s) => e.find((u) => u.name === s))
        .filter(Boolean)
    : e;
}
function yl(e, i) {
  let { propDef: r } = e,
    s = xl(e);
  s != null && (r.type = s);
  let { defaultValue: u } = e.docgenInfo;
  if (u != null && u.value != null) {
    let h = Rs(u.value);
    h != null && (r.defaultValue = h);
  } else if (i != null) {
    let h = rl(i, r, vl);
    h != null && (r.defaultValue = h);
  }
  return r;
}
function Dl(e, i) {
  let r = i.defaultProps != null ? i.defaultProps : {},
    s = e.map((u) => yl(u, r[u.propDef.name]));
  return Al(s, i);
}
function El(e, i) {
  let { propDef: r } = e,
    { defaultValue: s } = e.docgenInfo;
  if (s != null && s.value != null) {
    let u = Rs(s.value);
    u != null && (r.defaultValue = u);
  }
  return r;
}
function bl(e) {
  return e.map((i) => El(i));
}
var kn = new Map();
Object.keys(Zr).forEach((e) => {
  let i = Zr[e];
  kn.set(i, e), kn.set(i.isRequired, e);
});
function Sl(e, i) {
  let r = e;
  !pa(e) && !e.propTypes && Is(e) && (r = e.type);
  let s = da(r, i);
  if (s.length === 0) return [];
  switch (s[0].typeSystem) {
    case $r.JAVASCRIPT:
      return Dl(s, e);
    case $r.TYPESCRIPT:
      return bl(s);
    default:
      return s.map((u) => u.propDef);
  }
}
var Fl = (e) => ({ rows: Sl(e, 'props') }),
  _l = (e) => {
    if (e) {
      let { rows: i } = Fl(e);
      if (i)
        return i.reduce((r, s) => {
          let {
            name: u,
            description: h,
            type: c,
            sbType: g,
            defaultValue: x,
            jsDocTags: E,
            required: D,
          } = s;
          return (
            (r[u] = {
              name: u,
              description: h,
              type: { required: D, ...g },
              table: {
                type: c ?? void 0,
                jsDocTags: E,
                defaultValue: x ?? void 0,
              },
            }),
            r
          );
        }, {});
    }
    return null;
  },
  wl = (e) => e.charAt(0).toUpperCase() + e.slice(1),
  Bl = (e) =>
    (e.$$typeof || e)
      .toString()
      .replace(/^Symbol\((.*)\)$/, '$1')
      .split('.')
      .map((i) => i.split('_').map(wl).join(''))
      .join('.');
function hr(e) {
  if (Et.isValidElement(e)) {
    let i = Object.keys(e.props).reduce(
      (r, s) => ((r[s] = hr(e.props[s])), r),
      {},
    );
    return { ...e, props: i, _owner: null };
  }
  return Array.isArray(e) ? e.map(hr) : e;
}
var kl = (e, i) => {
    if (typeof e > 'u')
      return Ai.warn('Too many skip or undefined component'), null;
    let r = e,
      s = r.type;
    for (let c = 0; c < (i == null ? void 0 : i.skip); c += 1) {
      if (typeof r > 'u') return Ai.warn('Cannot skip undefined element'), null;
      if (Xt.Children.count(r) > 1)
        return Ai.warn('Trying to skip an array of elements'), null;
      typeof r.props.children > 'u'
        ? (Ai.warn('Not enough children to skip elements.'),
          typeof r.type == 'function' &&
            r.type.name === '' &&
            (r = Xt.createElement(s, { ...r.props })))
        : typeof r.props.children == 'function'
          ? (r = r.props.children())
          : (r = r.props.children);
    }
    let u;
    typeof (i == null ? void 0 : i.displayName) == 'string'
      ? (u = { showFunctions: !0, displayName: () => i.displayName })
      : (u = {
          displayName: (c) => {
            var g;
            return c.type.displayName
              ? c.type.displayName
              : Yr(c.type, 'displayName')
                ? Yr(c.type, 'displayName')
                : (g = c.type.render) != null && g.displayName
                  ? c.type.render.displayName
                  : typeof c.type == 'symbol' ||
                      (c.type.$$typeof && typeof c.type.$$typeof == 'symbol')
                    ? Bl(c.type)
                    : c.type.name && c.type.name !== '_default'
                      ? c.type.name
                      : typeof c.type == 'function'
                        ? 'No Display Name'
                        : Oo(c.type)
                          ? c.type.render.name
                          : Is(c.type)
                            ? c.type.type.name
                            : c.type;
          },
        });
    let h = { ...u, filterProps: (c, g) => c !== void 0, ...i };
    return Xt.Children.map(e, (c) => {
      let g = typeof c == 'number' ? c.toString() : c,
        x = (typeof $t == 'function' ? $t : $t.default)(hr(g), h);
      if (x.indexOf('&quot;') > -1) {
        let E = x.match(/\S+=\\"([^"]*)\\"/g);
        E &&
          E.forEach((D) => {
            x = x.replace(D, D.replace(/&quot;/g, "'"));
          });
      }
      return x;
    })
      .join(
        `
`,
      )
      .replace(/function\s+noRefCheck\(\)\s*\{\}/g, '() => {}');
  },
  Il = { skip: 0, showFunctions: !1, enableBeautify: !0, showDefaultProps: !1 },
  Pl = (e) => {
    var s;
    let i =
        (s = e == null ? void 0 : e.parameters.docs) == null
          ? void 0
          : s.source,
      r = e == null ? void 0 : e.parameters.__isArgsStory;
    return (i == null ? void 0 : i.type) === Jr.DYNAMIC
      ? !1
      : !r ||
          (i == null ? void 0 : i.code) ||
          (i == null ? void 0 : i.type) === Jr.CODE;
  },
  Tl = (e) => {
    var i, r;
    return (
      ((i = e.type) == null ? void 0 : i.displayName) === 'MDXCreateElement' &&
      !!((r = e.props) != null && r.mdxType)
    );
  },
  Gs = (e) => {
    if (!Tl(e)) return e;
    let { mdxType: i, originalType: r, children: s, ...u } = e.props,
      h = [];
    return (
      s && (h = (Array.isArray(s) ? s : [s]).map(Gs)),
      Et.createElement(r, u, ...h)
    );
  },
  Ws = (e, i) => {
    var D, w;
    let r = xo.getChannel(),
      s = Pl(i),
      u = '';
    Co(() => {
      if (!s) {
        let { id: b, unmappedArgs: S } = i;
        r.emit(fa, { id: b, source: u, args: S });
      }
    });
    let h = e();
    if (s) return h;
    let c = { ...Il, ...((i == null ? void 0 : i.parameters.jsx) || {}) },
      g =
        (w =
          (D = i == null ? void 0 : i.parameters.docs) == null
            ? void 0
            : D.source) != null && w.excludeDecorators
          ? i.originalStoryFn(i.args, i)
          : h,
      x = Gs(g),
      E = kl(x, c);
    return E && (u = E), h;
  },
  Ml = (e, i) => {
    let r = i.findIndex((u) => u.originalFn === Ws),
      s = r === -1 ? i : [...i.splice(r, 1), ...i];
    return go(e, s);
  },
  jl = {
    docs: {
      story: { inline: !0 },
      extractArgTypes: _l,
      extractComponentDescription: ha,
    },
  },
  ql = [Ws],
  Ul = [ca];
export {
  Ml as applyDecorators,
  Ul as argTypesEnhancers,
  ql as decorators,
  jl as parameters,
};
