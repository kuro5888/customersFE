try {
  (() => {
    var r = __REACT__,
      {
        Children: _o,
        Component: To,
        Fragment: G,
        Profiler: bo,
        PureComponent: se,
        StrictMode: yo,
        Suspense: Oo,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Co,
        cloneElement: F,
        createContext: ue,
        createElement: h,
        createFactory: vo,
        createRef: de,
        forwardRef: Ao,
        isValidElement: me,
        lazy: xo,
        memo: ko,
        startTransition: No,
        unstable_act: wo,
        useCallback: x,
        useContext: pe,
        useDebugValue: Do,
        useDeferredValue: Lo,
        useEffect: H,
        useId: Po,
        useImperativeHandle: Ho,
        useInsertionEffect: Bo,
        useLayoutEffect: ge,
        useMemo: U,
        useReducer: Mo,
        useRef: W,
        useState: N,
        useSyncExternalStore: Go,
        useTransition: Fo,
        version: Uo,
      } = __REACT__;
    var jo = __STORYBOOK_COMPONENTS__,
      {
        A: zo,
        ActionBar: K,
        AddonPanel: Vo,
        Badge: q,
        Bar: Ko,
        Blockquote: qo,
        Button: Qo,
        ClipboardCode: Xo,
        Code: Zo,
        DL: Jo,
        Div: er,
        DocumentWrapper: tr,
        EmptyTabContent: he,
        ErrorFormatter: nr,
        FlexBar: or,
        Form: rr,
        H1: ar,
        H2: ir,
        H3: cr,
        H4: lr,
        H5: sr,
        H6: ur,
        HR: dr,
        IconButton: Ie,
        IconButtonSkeleton: mr,
        Icons: pr,
        Img: gr,
        LI: hr,
        Link: Ir,
        ListItem: Er,
        Loader: fr,
        Modal: Rr,
        OL: Sr,
        P: _r,
        Placeholder: Tr,
        Pre: br,
        ResetWrapper: yr,
        ScrollArea: Ee,
        Separator: Or,
        Spaced: fe,
        Span: Cr,
        StorybookIcon: vr,
        StorybookLogo: Ar,
        Symbols: xr,
        SyntaxHighlighter: kr,
        TT: Nr,
        TabBar: wr,
        TabButton: Dr,
        TabWrapper: Lr,
        Table: Pr,
        Tabs: Hr,
        TabsState: Br,
        TooltipLinkList: Re,
        TooltipMessage: Mr,
        TooltipNote: Gr,
        UL: Fr,
        WithTooltip: Se,
        WithTooltipPure: Ur,
        Zoom: Wr,
        codeCommon: $r,
        components: Yr,
        createCopyToClipboardFunction: jr,
        getStoryHref: zr,
        icons: Vr,
        interleaveSeparators: Kr,
        nameSpaceClassNames: qr,
        resetComponents: Qr,
        withReset: Xr,
      } = __STORYBOOK_COMPONENTS__;
    var na = __STORYBOOK_API__,
      {
        ActiveTabs: oa,
        Consumer: ra,
        ManagerContext: aa,
        Provider: ia,
        RequestResponseError: ca,
        addons: $,
        combineParameters: la,
        controlOrMetaKey: sa,
        controlOrMetaSymbol: ua,
        eventMatchesShortcut: da,
        eventToShortcut: ma,
        experimental_requestResponse: pa,
        isMacLike: ga,
        isShortcutTaken: ha,
        keyToSymbol: Ia,
        merge: Ea,
        mockChannel: fa,
        optionOrAltSymbol: Ra,
        shortcutMatchesShortcut: Sa,
        shortcutToHumanString: _a,
        types: Q,
        useAddonState: X,
        useArgTypes: Ta,
        useArgs: ba,
        useChannel: Z,
        useGlobalTypes: ya,
        useGlobals: Oa,
        useParameter: _e,
        useSharedState: Ca,
        useStoryPrepared: va,
        useStorybookApi: J,
        useStorybookState: Te,
      } = __STORYBOOK_API__;
    var wa = __STORYBOOK_THEMING__,
      {
        CacheProvider: Da,
        ClassNames: La,
        Global: be,
        ThemeProvider: Pa,
        background: Ha,
        color: Ba,
        convert: Y,
        create: Ma,
        createCache: Ga,
        createGlobal: Fa,
        createReset: Ua,
        css: Wa,
        darken: $a,
        ensure: Ya,
        ignoreSsrWarning: ja,
        isPropValid: za,
        jsx: Va,
        keyframes: Ka,
        lighten: qa,
        styled: l,
        themes: j,
        typography: Qa,
        useTheme: Xa,
        withTheme: Za,
      } = __STORYBOOK_THEMING__;
    var oi = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: ri,
        AccessibilityIcon: ye,
        AddIcon: ai,
        AdminIcon: ii,
        AlertAltIcon: ci,
        AlertIcon: li,
        AlignLeftIcon: si,
        AlignRightIcon: ui,
        AppleIcon: di,
        ArrowBottomLeftIcon: mi,
        ArrowBottomRightIcon: pi,
        ArrowDownIcon: gi,
        ArrowLeftIcon: hi,
        ArrowRightIcon: Ii,
        ArrowSolidDownIcon: Ei,
        ArrowSolidLeftIcon: fi,
        ArrowSolidRightIcon: Ri,
        ArrowSolidUpIcon: Si,
        ArrowTopLeftIcon: _i,
        ArrowTopRightIcon: Ti,
        ArrowUpIcon: bi,
        AzureDevOpsIcon: yi,
        BackIcon: Oi,
        BasketIcon: Ci,
        BatchAcceptIcon: vi,
        BatchDenyIcon: Ai,
        BeakerIcon: xi,
        BellIcon: ki,
        BitbucketIcon: Ni,
        BoldIcon: wi,
        BookIcon: Di,
        BookmarkHollowIcon: Li,
        BookmarkIcon: Pi,
        BottomBarIcon: Hi,
        BottomBarToggleIcon: Bi,
        BoxIcon: Mi,
        BranchIcon: Gi,
        BrowserIcon: Fi,
        ButtonIcon: Ui,
        CPUIcon: Wi,
        CalendarIcon: $i,
        CameraIcon: Yi,
        CategoryIcon: ji,
        CertificateIcon: zi,
        ChangedIcon: Vi,
        ChatIcon: Ki,
        CheckIcon: Oe,
        ChevronDownIcon: qi,
        ChevronLeftIcon: Qi,
        ChevronRightIcon: Xi,
        ChevronSmallDownIcon: Ce,
        ChevronSmallLeftIcon: Zi,
        ChevronSmallRightIcon: Ji,
        ChevronSmallUpIcon: ec,
        ChevronUpIcon: tc,
        ChromaticIcon: nc,
        ChromeIcon: oc,
        CircleHollowIcon: rc,
        CircleIcon: ac,
        ClearIcon: ic,
        CloseAltIcon: cc,
        CloseIcon: lc,
        CloudHollowIcon: sc,
        CloudIcon: uc,
        CogIcon: dc,
        CollapseIcon: mc,
        CommandIcon: pc,
        CommentAddIcon: gc,
        CommentIcon: hc,
        CommentsIcon: Ic,
        CommitIcon: Ec,
        CompassIcon: fc,
        ComponentDrivenIcon: Rc,
        ComponentIcon: Sc,
        ContrastIcon: _c,
        ControlsIcon: Tc,
        CopyIcon: bc,
        CreditIcon: yc,
        CrossIcon: Oc,
        DashboardIcon: Cc,
        DatabaseIcon: vc,
        DeleteIcon: Ac,
        DiamondIcon: xc,
        DirectionIcon: kc,
        DiscordIcon: Nc,
        DocChartIcon: wc,
        DocListIcon: Dc,
        DocumentIcon: Lc,
        DownloadIcon: Pc,
        DragIcon: Hc,
        EditIcon: Bc,
        EllipsisIcon: Mc,
        EmailIcon: Gc,
        ExpandAltIcon: Fc,
        ExpandIcon: Uc,
        EyeCloseIcon: Wc,
        EyeIcon: $c,
        FaceHappyIcon: Yc,
        FaceNeutralIcon: jc,
        FaceSadIcon: zc,
        FacebookIcon: Vc,
        FailedIcon: Kc,
        FastForwardIcon: qc,
        FigmaIcon: Qc,
        FilterIcon: Xc,
        FlagIcon: Zc,
        FolderIcon: Jc,
        FormIcon: el,
        GDriveIcon: tl,
        GithubIcon: nl,
        GitlabIcon: ol,
        GlobeIcon: rl,
        GoogleIcon: al,
        GraphBarIcon: il,
        GraphLineIcon: cl,
        GraphqlIcon: ll,
        GridAltIcon: sl,
        GridIcon: ul,
        GrowIcon: dl,
        HeartHollowIcon: ml,
        HeartIcon: pl,
        HomeIcon: gl,
        HourglassIcon: hl,
        InfoIcon: Il,
        ItalicIcon: El,
        JumpToIcon: fl,
        KeyIcon: Rl,
        LightningIcon: Sl,
        LightningOffIcon: _l,
        LinkBrokenIcon: Tl,
        LinkIcon: bl,
        LinkedinIcon: yl,
        LinuxIcon: Ol,
        ListOrderedIcon: Cl,
        ListUnorderedIcon: vl,
        LocationIcon: Al,
        LockIcon: xl,
        MarkdownIcon: kl,
        MarkupIcon: Nl,
        MediumIcon: wl,
        MemoryIcon: Dl,
        MenuIcon: Ll,
        MergeIcon: Pl,
        MirrorIcon: Hl,
        MobileIcon: Bl,
        MoonIcon: Ml,
        NutIcon: Gl,
        OutboxIcon: Fl,
        OutlineIcon: Ul,
        PaintBrushIcon: Wl,
        PaperClipIcon: $l,
        ParagraphIcon: Yl,
        PassedIcon: jl,
        PhoneIcon: zl,
        PhotoDragIcon: Vl,
        PhotoIcon: Kl,
        PinAltIcon: ql,
        PinIcon: Ql,
        PlayBackIcon: Xl,
        PlayIcon: Zl,
        PlayNextIcon: Jl,
        PlusIcon: es,
        PointerDefaultIcon: ts,
        PointerHandIcon: ns,
        PowerIcon: os,
        PrintIcon: rs,
        ProceedIcon: as,
        ProfileIcon: is,
        PullRequestIcon: cs,
        QuestionIcon: ls,
        RSSIcon: ss,
        RedirectIcon: us,
        ReduxIcon: ds,
        RefreshIcon: ms,
        ReplyIcon: ps,
        RepoIcon: gs,
        RequestChangeIcon: hs,
        RewindIcon: Is,
        RulerIcon: Es,
        SearchIcon: fs,
        ShareAltIcon: Rs,
        ShareIcon: Ss,
        ShieldIcon: _s,
        SideBySideIcon: Ts,
        SidebarAltIcon: bs,
        SidebarAltToggleIcon: ys,
        SidebarIcon: Os,
        SidebarToggleIcon: Cs,
        SpeakerIcon: vs,
        StackedIcon: As,
        StarHollowIcon: xs,
        StarIcon: ks,
        StatusFailIcon: Ns,
        StatusPassIcon: ws,
        StatusWarnIcon: Ds,
        StickerIcon: Ls,
        StopAltIcon: Ps,
        StopIcon: Hs,
        StorybookIcon: Bs,
        StructureIcon: Ms,
        SubtractIcon: Gs,
        SunIcon: Fs,
        SupportIcon: Us,
        SwitchAltIcon: Ws,
        SyncIcon: ve,
        TabletIcon: $s,
        ThumbsUpIcon: Ys,
        TimeIcon: js,
        TimerIcon: zs,
        TransferIcon: Vs,
        TrashIcon: Ks,
        TwitterIcon: qs,
        TypeIcon: Qs,
        UbuntuIcon: Xs,
        UndoIcon: Zs,
        UnfoldIcon: Js,
        UnlockIcon: eu,
        UnpinIcon: tu,
        UploadIcon: nu,
        UserAddIcon: ou,
        UserAltIcon: ru,
        UserIcon: au,
        UsersIcon: iu,
        VSCodeIcon: cu,
        VerifiedIcon: lu,
        VideoIcon: su,
        WandIcon: uu,
        WatchIcon: du,
        WindowsIcon: mu,
        WrenchIcon: pu,
        XIcon: gu,
        YoutubeIcon: hu,
        ZoomIcon: Iu,
        ZoomOutIcon: Eu,
        ZoomResetIcon: fu,
        iconList: Ru,
      } = __STORYBOOK_ICONS__;
    var yu = __STORYBOOK_CORE_EVENTS__,
      {
        ARGTYPES_INFO_REQUEST: Ou,
        ARGTYPES_INFO_RESPONSE: Cu,
        CHANNEL_CREATED: vu,
        CHANNEL_WS_DISCONNECT: Au,
        CONFIG_ERROR: xu,
        CREATE_NEW_STORYFILE_REQUEST: ku,
        CREATE_NEW_STORYFILE_RESPONSE: Nu,
        CURRENT_STORY_WAS_SET: wu,
        DOCS_PREPARED: Du,
        DOCS_RENDERED: Lu,
        FILE_COMPONENT_SEARCH_REQUEST: Pu,
        FILE_COMPONENT_SEARCH_RESPONSE: Hu,
        FORCE_REMOUNT: Bu,
        FORCE_RE_RENDER: Mu,
        GLOBALS_UPDATED: Gu,
        NAVIGATE_URL: Fu,
        PLAY_FUNCTION_THREW_EXCEPTION: Uu,
        PRELOAD_ENTRIES: Wu,
        PREVIEW_BUILDER_PROGRESS: $u,
        PREVIEW_KEYDOWN: Yu,
        REGISTER_SUBSCRIPTION: ju,
        REQUEST_WHATS_NEW_DATA: zu,
        RESET_STORY_ARGS: Vu,
        RESULT_WHATS_NEW_DATA: Ku,
        SAVE_STORY_REQUEST: qu,
        SAVE_STORY_RESPONSE: Qu,
        SELECT_STORY: Xu,
        SET_CONFIG: Zu,
        SET_CURRENT_STORY: Ju,
        SET_FILTER: ed,
        SET_GLOBALS: td,
        SET_INDEX: nd,
        SET_STORIES: od,
        SET_WHATS_NEW_CACHE: rd,
        SHARED_STATE_CHANGED: ad,
        SHARED_STATE_SET: id,
        STORIES_COLLAPSE_ALL: cd,
        STORIES_EXPAND_ALL: ld,
        STORY_ARGS_UPDATED: sd,
        STORY_CHANGED: Ae,
        STORY_ERRORED: ud,
        STORY_INDEX_INVALIDATED: dd,
        STORY_MISSING: md,
        STORY_PREPARED: pd,
        STORY_RENDERED: xe,
        STORY_RENDER_PHASE_CHANGED: gd,
        STORY_SPECIFIED: hd,
        STORY_THREW_EXCEPTION: Id,
        STORY_UNCHANGED: Ed,
        TELEMETRY_ERROR: fd,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: Rd,
        UNHANDLED_ERRORS_WHILE_PLAYING: Sd,
        UPDATE_GLOBALS: _d,
        UPDATE_QUERY_PARAMS: Td,
        UPDATE_STORY_ARGS: bd,
      } = __STORYBOOK_CORE_EVENTS__;
    var ke = 'storybook/highlight',
      Ne = `${ke}/add`,
      Dd = `${ke}/reset`;
    var Md = __REACT_DOM__,
      {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Gd,
        createPortal: Fd,
        createRoot: Ud,
        findDOMNode: we,
        flushSync: Wd,
        hydrate: $d,
        hydrateRoot: Yd,
        render: jd,
        unmountComponentAtNode: zd,
        unstable_batchedUpdates: Vd,
        unstable_renderSubtreeIntoContainer: Kd,
        version: qd,
      } = __REACT_DOM__;
    var k = 'storybook/a11y',
      De = `${k}/panel`,
      nt = 'a11y',
      ot = `${k}/result`,
      rt = `${k}/request`,
      at = `${k}/running`,
      it = `${k}/error`,
      ct = `${k}/manual`,
      M = { RESULT: ot, REQUEST: rt, RUNNING: at, ERROR: it, MANUAL: ct },
      lt = [
        Y(j.light).color.negative,
        Y(j.light).color.positive,
        Y(j.light).color.warning,
      ],
      $e = ue({
        results: { passes: [], incomplete: [], violations: [] },
        setResults: () => {},
        highlighted: [],
        toggleHighlight: () => {},
        clearHighlights: () => {},
        tab: 0,
        setTab: () => {},
      }),
      Le = { passes: [], incomplete: [], violations: [] },
      st = ({ active: e, ...n }) => {
        let [o, t] = X(k, Le),
          [a, u] = N(0),
          [s, i] = N([]),
          m = J(),
          p = m.getCurrentStoryData(),
          d = x((R, I) => {
            i((S) => (I ? [...S, ...R] : S.filter((b) => !R.includes(b))));
          }, []),
          g = (R) => {
            T(M.REQUEST, R, m.getParameters(R, 'a11y'));
          },
          c = x(() => i([]), []),
          f = x((R) => {
            c(), u(R);
          }, []),
          _ = x(() => {
            u(0), t(Le);
          }, []),
          T = Z({ [xe]: g, [Ae]: _ });
        return (
          H(() => {
            T(Ne, { elements: s, color: lt[a] });
          }, [s, a]),
          H(() => {
            e && p?.type === 'story' ? g(p.id) : c();
          }, [e, c, T, p]),
          e
            ? h($e.Provider, {
                value: {
                  results: o,
                  setResults: t,
                  highlighted: s,
                  toggleHighlight: d,
                  clearHighlights: c,
                  tab: a,
                  setTab: f,
                },
                ...n,
              })
            : null
        );
      },
      ae = () => pe($e),
      ut = l.input(({ disabled: e }) => ({
        cursor: e ? 'not-allowed' : 'pointer',
      }));
    function Pe(e, n) {
      let o = e.filter((t) => n.includes(t.target[0])).length;
      return o === 0 ? 1 : o === e.length ? 0 : 2;
    }
    var dt = ({ toggleId: e, elementsToHighlight: n = [] }) => {
        let { toggleHighlight: o, highlighted: t } = ae(),
          a = r.useRef(null),
          [u, s] = r.useState(Pe(n, t));
        r.useEffect(() => {
          let m = Pe(n, t);
          a.current && (a.current.indeterminate = m === 2), s(m);
        }, [n, t]);
        let i = r.useCallback(() => {
          o(
            n.map((m) => m.target[0]),
            u !== 0,
          );
        }, [n, u, o]);
        return r.createElement(ut, {
          ref: a,
          id: e,
          type: 'checkbox',
          'aria-label': 'Highlight result',
          disabled: !n.length,
          onChange: i,
          checked: u === 0,
        });
      },
      ie = dt,
      ne = function (e, n) {
        return (
          (ne =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (o, t) {
                o.__proto__ = t;
              }) ||
            function (o, t) {
              for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (o[a] = t[a]);
            }),
          ne(e, n)
        );
      };
    function mt(e, n) {
      if (typeof n != 'function' && n !== null)
        throw new TypeError(
          'Class extends value ' + String(n) + ' is not a constructor or null',
        );
      ne(e, n);
      function o() {
        this.constructor = e;
      }
      e.prototype =
        n === null ? Object.create(n) : ((o.prototype = n.prototype), new o());
    }
    var oe = function () {
      return (
        (oe =
          Object.assign ||
          function (e) {
            for (var n, o = 1, t = arguments.length; o < t; o++) {
              n = arguments[o];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }),
        oe.apply(this, arguments)
      );
    };
    function pt(e, n) {
      var o = {};
      for (var t in e)
        Object.prototype.hasOwnProperty.call(e, t) &&
          n.indexOf(t) < 0 &&
          (o[t] = e[t]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
          n.indexOf(t[a]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, t[a]) &&
            (o[t[a]] = e[t[a]]);
      return o;
    }
    var z =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u' || typeof window < 'u'
          ? window
          : typeof self < 'u'
            ? self
            : {};
    function gt(e) {
      var n = typeof e;
      return e != null && (n == 'object' || n == 'function');
    }
    var ce = gt,
      ht = typeof z == 'object' && z && z.Object === Object && z,
      It = ht,
      Et = It,
      ft = typeof self == 'object' && self && self.Object === Object && self,
      Rt = Et || ft || Function('return this')(),
      Ye = Rt,
      St = Ye,
      _t = function () {
        return St.Date.now();
      },
      Tt = _t,
      bt = /\s/;
    function yt(e) {
      for (var n = e.length; n-- && bt.test(e.charAt(n)); );
      return n;
    }
    var Ot = yt,
      Ct = Ot,
      vt = /^\s+/;
    function At(e) {
      return e && e.slice(0, Ct(e) + 1).replace(vt, '');
    }
    var xt = At,
      kt = Ye,
      Nt = kt.Symbol,
      je = Nt,
      He = je,
      ze = Object.prototype,
      wt = ze.hasOwnProperty,
      Dt = ze.toString,
      B = He ? He.toStringTag : void 0;
    function Lt(e) {
      var n = wt.call(e, B),
        o = e[B];
      try {
        e[B] = void 0;
        var t = !0;
      } catch {}
      var a = Dt.call(e);
      return t && (n ? (e[B] = o) : delete e[B]), a;
    }
    var Pt = Lt,
      Ht = Object.prototype,
      Bt = Ht.toString;
    function Mt(e) {
      return Bt.call(e);
    }
    var Gt = Mt,
      Be = je,
      Ft = Pt,
      Ut = Gt,
      Wt = '[object Null]',
      $t = '[object Undefined]',
      Me = Be ? Be.toStringTag : void 0;
    function Yt(e) {
      return e == null
        ? e === void 0
          ? $t
          : Wt
        : Me && Me in Object(e)
          ? Ft(e)
          : Ut(e);
    }
    var jt = Yt;
    function zt(e) {
      return e != null && typeof e == 'object';
    }
    var Vt = zt,
      Kt = jt,
      qt = Vt,
      Qt = '[object Symbol]';
    function Xt(e) {
      return typeof e == 'symbol' || (qt(e) && Kt(e) == Qt);
    }
    var Zt = Xt,
      Jt = xt,
      Ge = ce,
      en = Zt,
      Fe = NaN,
      tn = /^[-+]0x[0-9a-f]+$/i,
      nn = /^0b[01]+$/i,
      on = /^0o[0-7]+$/i,
      rn = parseInt;
    function an(e) {
      if (typeof e == 'number') return e;
      if (en(e)) return Fe;
      if (Ge(e)) {
        var n = typeof e.valueOf == 'function' ? e.valueOf() : e;
        e = Ge(n) ? n + '' : n;
      }
      if (typeof e != 'string') return e === 0 ? e : +e;
      e = Jt(e);
      var o = nn.test(e);
      return o || on.test(e) ? rn(e.slice(2), o ? 2 : 8) : tn.test(e) ? Fe : +e;
    }
    var cn = an,
      ln = ce,
      ee = Tt,
      Ue = cn,
      sn = 'Expected a function',
      un = Math.max,
      dn = Math.min;
    function mn(e, n, o) {
      var t,
        a,
        u,
        s,
        i,
        m,
        p = 0,
        d = !1,
        g = !1,
        c = !0;
      if (typeof e != 'function') throw new TypeError(sn);
      (n = Ue(n) || 0),
        ln(o) &&
          ((d = !!o.leading),
          (g = 'maxWait' in o),
          (u = g ? un(Ue(o.maxWait) || 0, n) : u),
          (c = 'trailing' in o ? !!o.trailing : c));
      function f(E) {
        var y = t,
          O = a;
        return (t = a = void 0), (p = E), (s = e.apply(O, y)), s;
      }
      function _(E) {
        return (p = E), (i = setTimeout(I, n)), d ? f(E) : s;
      }
      function T(E) {
        var y = E - m,
          O = E - p,
          P = n - y;
        return g ? dn(P, u - O) : P;
      }
      function R(E) {
        var y = E - m,
          O = E - p;
        return m === void 0 || y >= n || y < 0 || (g && O >= u);
      }
      function I() {
        var E = ee();
        if (R(E)) return S(E);
        i = setTimeout(I, T(E));
      }
      function S(E) {
        return (i = void 0), c && t ? f(E) : ((t = a = void 0), s);
      }
      function b() {
        i !== void 0 && clearTimeout(i), (p = 0), (t = m = a = i = void 0);
      }
      function L() {
        return i === void 0 ? s : S(ee());
      }
      function D() {
        var E = ee(),
          y = R(E);
        if (((t = arguments), (a = this), (m = E), y)) {
          if (i === void 0) return _(m);
          if (g) return clearTimeout(i), (i = setTimeout(I, n)), f(m);
        }
        return i === void 0 && (i = setTimeout(I, n)), s;
      }
      return (D.cancel = b), (D.flush = L), D;
    }
    var Ve = mn,
      pn = Ve,
      gn = ce,
      hn = 'Expected a function';
    function In(e, n, o) {
      var t = !0,
        a = !0;
      if (typeof e != 'function') throw new TypeError(hn);
      return (
        gn(o) &&
          ((t = 'leading' in o ? !!o.leading : t),
          (a = 'trailing' in o ? !!o.trailing : a)),
        pn(e, n, { leading: t, maxWait: n, trailing: a })
      );
    }
    var En = In,
      Ke = function (e, n, o, t) {
        switch (n) {
          case 'debounce':
            return Ve(e, o, t);
          case 'throttle':
            return En(e, o, t);
          default:
            return e;
        }
      },
      re = function (e) {
        return typeof e == 'function';
      },
      w = function () {
        return typeof window > 'u';
      },
      We = function (e) {
        return e instanceof Element || e instanceof HTMLDocument;
      },
      qe = function (e, n, o, t) {
        return function (a) {
          var u = a.width,
            s = a.height;
          n(function (i) {
            return (i.width === u && i.height === s) ||
              (i.width === u && !t) ||
              (i.height === s && !o)
              ? i
              : (e && re(e) && e(u, s), { width: u, height: s });
          });
        };
      };
    (function (e) {
      mt(n, e);
      function n(o) {
        var t = e.call(this, o) || this;
        (t.cancelHandler = function () {
          t.resizeHandler &&
            t.resizeHandler.cancel &&
            (t.resizeHandler.cancel(), (t.resizeHandler = null));
        }),
          (t.attachObserver = function () {
            var p = t.props,
              d = p.targetRef,
              g = p.observerOptions;
            if (!w()) {
              d && d.current && (t.targetRef.current = d.current);
              var c = t.getElement();
              c &&
                ((t.observableElement && t.observableElement === c) ||
                  ((t.observableElement = c), t.resizeObserver.observe(c, g)));
            }
          }),
          (t.getElement = function () {
            var p = t.props,
              d = p.querySelector,
              g = p.targetDomEl;
            if (w()) return null;
            if (d) return document.querySelector(d);
            if (g && We(g)) return g;
            if (t.targetRef && We(t.targetRef.current))
              return t.targetRef.current;
            var c = we(t);
            if (!c) return null;
            var f = t.getRenderType();
            switch (f) {
              case 'renderProp':
                return c;
              case 'childFunction':
                return c;
              case 'child':
                return c;
              case 'childArray':
                return c;
              default:
                return c.parentElement;
            }
          }),
          (t.createResizeHandler = function (p) {
            var d = t.props,
              g = d.handleWidth,
              c = g === void 0 ? !0 : g,
              f = d.handleHeight,
              _ = f === void 0 ? !0 : f,
              T = d.onResize;
            if (!(!c && !_)) {
              var R = qe(T, t.setState.bind(t), c, _);
              p.forEach(function (I) {
                var S = (I && I.contentRect) || {},
                  b = S.width,
                  L = S.height,
                  D = !t.skipOnMount && !w();
                D && R({ width: b, height: L }), (t.skipOnMount = !1);
              });
            }
          }),
          (t.getRenderType = function () {
            var p = t.props,
              d = p.render,
              g = p.children;
            return re(d)
              ? 'renderProp'
              : re(g)
                ? 'childFunction'
                : me(g)
                  ? 'child'
                  : Array.isArray(g)
                    ? 'childArray'
                    : 'parent';
          });
        var a = o.skipOnMount,
          u = o.refreshMode,
          s = o.refreshRate,
          i = s === void 0 ? 1e3 : s,
          m = o.refreshOptions;
        return (
          (t.state = { width: void 0, height: void 0 }),
          (t.skipOnMount = a),
          (t.targetRef = de()),
          (t.observableElement = null),
          w() ||
            ((t.resizeHandler = Ke(t.createResizeHandler, u, i, m)),
            (t.resizeObserver = new window.ResizeObserver(t.resizeHandler))),
          t
        );
      }
      return (
        (n.prototype.componentDidMount = function () {
          this.attachObserver();
        }),
        (n.prototype.componentDidUpdate = function () {
          this.attachObserver();
        }),
        (n.prototype.componentWillUnmount = function () {
          w() ||
            ((this.observableElement = null),
            this.resizeObserver.disconnect(),
            this.cancelHandler());
        }),
        (n.prototype.render = function () {
          var o = this.props,
            t = o.render,
            a = o.children,
            u = o.nodeType,
            s = u === void 0 ? 'div' : u,
            i = this.state,
            m = i.width,
            p = i.height,
            d = { width: m, height: p, targetRef: this.targetRef },
            g = this.getRenderType(),
            c;
          switch (g) {
            case 'renderProp':
              return t && t(d);
            case 'childFunction':
              return (c = a), c(d);
            case 'child':
              if (((c = a), c.type && typeof c.type == 'string')) {
                d.targetRef;
                var f = pt(d, ['targetRef']);
                return F(c, f);
              }
              return F(c, d);
            case 'childArray':
              return (
                (c = a),
                c.map(function (_) {
                  return !!_ && F(_, d);
                })
              );
            default:
              return h(s, null);
          }
        }),
        n
      );
    })(se);
    var fn = w() ? H : ge;
    function Qe(e) {
      e === void 0 && (e = {});
      var n = e.skipOnMount,
        o = n === void 0 ? !1 : n,
        t = e.refreshMode,
        a = e.refreshRate,
        u = a === void 0 ? 1e3 : a,
        s = e.refreshOptions,
        i = e.handleWidth,
        m = i === void 0 ? !0 : i,
        p = e.handleHeight,
        d = p === void 0 ? !0 : p,
        g = e.targetRef,
        c = e.observerOptions,
        f = e.onResize,
        _ = W(o),
        T = W(null),
        R = g ?? T,
        I = W(),
        S = N({ width: void 0, height: void 0 }),
        b = S[0],
        L = S[1];
      return (
        fn(
          function () {
            if (!w()) {
              var D = qe(f, L, m, d),
                E = function (O) {
                  (!m && !d) ||
                    O.forEach(function (P) {
                      var le = (P && P.contentRect) || {},
                        Ze = le.width,
                        Je = le.height,
                        et = !_.current && !w();
                      et && D({ width: Ze, height: Je }), (_.current = !1);
                    });
                };
              I.current = Ke(E, t, u, s);
              var y = new window.ResizeObserver(I.current);
              return (
                R.current && y.observe(R.current, c),
                function () {
                  y.disconnect();
                  var O = I.current;
                  O && O.cancel && O.cancel();
                }
              );
            }
          },
          [t, u, s, m, d, f, c, R.current],
        ),
        oe({ ref: R }, b)
      );
    }
    var Rn = l.div({
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 4,
        paddingRight: 4,
        paddingTop: 4,
        fontWeight: 400,
      }),
      Sn = l.div(({ elementWidth: e }) => ({
        flexDirection: e > 407 ? 'row' : 'inherit',
        marginBottom: e > 407 ? 6 : 12,
        display: e > 407 ? 'flex' : 'block',
      })),
      _n = l(q)({
        padding: '2px 8px',
        marginBottom: 3,
        minWidth: 65,
        maxWidth: 'fit-content',
        width: '100%',
        textAlign: 'center',
      }),
      Tn = l.div({ paddingLeft: 6, paddingRight: 23 }),
      bn = (e) => e.charAt(0).toUpperCase().concat(e.slice(1)),
      yn = ({ rule: e }) => {
        let { ref: n, width: o } = Qe({
            refreshMode: 'debounce',
            handleHeight: !1,
            handleWidth: !0,
          }),
          t = null;
        switch (e.impact) {
          case 'critical':
            t = 'critical';
            break;
          case 'serious':
            t = 'negative';
            break;
          case 'moderate':
            t = 'warning';
            break;
          case 'minor':
            t = 'neutral';
            break;
        }
        return r.createElement(
          Sn,
          { ref: n, elementWidth: o || 0 },
          r.createElement(_n, { status: t }, bn(e.impact)),
          r.createElement(Tn, null, e.message),
        );
      },
      On = ({ rules: e }) =>
        r.createElement(
          Rn,
          null,
          e.map((n, o) => r.createElement(yn, { rule: n, key: o })),
        ),
      Cn = l.li({ fontWeight: 600 }),
      vn = l.span(({ theme: e }) => ({
        borderBottom: `1px solid ${e.appBorderColor}`,
        width: '100%',
        display: 'flex',
        paddingBottom: 6,
        marginBottom: 6,
        justifyContent: 'space-between',
      })),
      An = l.span({
        fontWeight: 'normal',
        alignSelf: 'center',
        paddingRight: 15,
        input: { margin: 0, display: 'block' },
      }),
      xn = ({ element: e, type: n }) => {
        let { any: o, all: t, none: a } = e,
          u = [...o, ...t, ...a],
          s = `${n}-${e.target[0]}`;
        return r.createElement(
          Cn,
          null,
          r.createElement(
            vn,
            null,
            e.target[0],
            r.createElement(
              An,
              null,
              r.createElement(ie, { toggleId: s, elementsToHighlight: [e] }),
            ),
          ),
          r.createElement(On, { rules: u }),
        );
      },
      kn = ({ elements: e, type: n }) =>
        r.createElement(
          'ol',
          null,
          e.map((o, t) => r.createElement(xn, { element: o, key: t, type: n })),
        ),
      Nn = l.div({ padding: 12, marginBottom: 10 }),
      wn = l.p({ margin: '0 0 12px' }),
      Dn = l.a({
        marginTop: 12,
        textDecoration: 'underline',
        color: 'inherit',
        display: 'block',
      }),
      Ln = ({ item: e }) =>
        r.createElement(
          Nn,
          null,
          r.createElement(wn, null, e.description),
          r.createElement(
            Dn,
            { href: e.helpUrl, target: '_blank' },
            'More info...',
          ),
        ),
      Pn = l.div({ display: 'flex', flexWrap: 'wrap', margin: '12px 0' }),
      Hn = l.div(({ theme: e }) => ({
        margin: '0 6px',
        padding: 5,
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: e.appBorderRadius,
      })),
      Bn = ({ tags: e }) =>
        r.createElement(
          Pn,
          null,
          e.map((n) => r.createElement(Hn, { key: n }, n)),
        ),
      Mn = l.div(({ theme: e }) => ({
        display: 'flex',
        width: '100%',
        borderBottom: `1px solid ${e.appBorderColor}`,
        '&:hover': { background: e.background.hoverable },
      })),
      Gn = l(Ce)({
        marginRight: 10,
        transition: 'transform 0.1s ease-in-out',
        verticalAlign: 'inherit',
      }),
      Fn = l.div(({ theme: e }) => ({
        padding: e.layoutMargin,
        paddingLeft: e.layoutMargin - 3,
        lineHeight: '20px',
        background: 'none',
        color: 'inherit',
        textAlign: 'left',
        cursor: 'pointer',
        borderLeft: '3px solid transparent',
        width: '100%',
        '&:focus': {
          outline: '0 none',
          borderLeft: `3px solid ${e.color.secondary}`,
        },
      })),
      Un = l.span({
        fontWeight: 'normal',
        float: 'right',
        marginRight: 15,
        alignSelf: 'center',
        input: { margin: 0, display: 'block' },
      }),
      Wn = (e) => {
        let [n, o] = N(!1),
          { item: t, type: a } = e,
          u = `${a}-${t.id}`;
        return r.createElement(
          G,
          null,
          r.createElement(
            Mn,
            null,
            r.createElement(
              Fn,
              { onClick: () => o(!n), role: 'button' },
              r.createElement(Gn, {
                style: { transform: `rotate(${n ? 0 : -90}deg)` },
              }),
              t.help,
            ),
            r.createElement(
              Un,
              null,
              r.createElement(ie, {
                toggleId: u,
                elementsToHighlight: t.nodes,
              }),
            ),
          ),
          n
            ? r.createElement(
                G,
                null,
                r.createElement(Ln, { item: t, key: 'info' }),
                r.createElement(kn, {
                  elements: t.nodes,
                  type: a,
                  key: 'elements',
                }),
                r.createElement(Bn, { tags: t.tags, key: 'tags' }),
              )
            : null,
        );
      },
      te = ({ items: e, empty: n, type: o }) =>
        r.createElement(
          G,
          null,
          e && e.length
            ? e.map((t) =>
                r.createElement(Wn, { item: t, key: `${o}:${t.id}`, type: o }),
              )
            : r.createElement(he, { title: n }),
        ),
      $n = l.div({ width: '100%', position: 'relative', minHeight: '100%' }),
      Yn = l.label(({ theme: e }) => ({
        cursor: 'pointer',
        userSelect: 'none',
        color: e.color.dark,
      })),
      jn = l.div(({ elementWidth: e, theme: n }) => ({
        cursor: 'pointer',
        fontSize: 13,
        lineHeight: '20px',
        padding: e > 450 ? '10px 15px 10px 0' : '10px 0px 10px 15px',
        height: '40px',
        border: 'none',
        marginTop: e > 450 ? -40 : 0,
        float: e > 450 ? 'right' : 'left',
        display: 'flex',
        alignItems: 'center',
        width: e > 450 ? 'auto' : '100%',
        borderBottom: e > 450 ? 'none' : `1px solid ${n.appBorderColor}`,
        input: {
          marginLeft: 10,
          marginRight: 0,
          marginTop: -1,
          marginBottom: 0,
        },
      })),
      zn = l.button(
        ({ theme: e }) => ({
          textDecoration: 'none',
          padding: '10px 15px',
          cursor: 'pointer',
          fontWeight: e.typography.weight.bold,
          fontSize: e.typography.size.s2 - 1,
          lineHeight: 1,
          height: 40,
          border: 'none',
          borderTop: '3px solid transparent',
          borderBottom: '3px solid transparent',
          background: 'transparent',
          '&:focus': {
            outline: '0 none',
            borderBottom: `3px solid ${e.color.secondary}`,
          },
        }),
        ({ active: e, theme: n }) =>
          e
            ? { opacity: 1, borderBottom: `3px solid ${n.color.secondary}` }
            : {},
      ),
      Vn = l.div({}),
      Kn = l.div(({ theme: e }) => ({
        boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`,
        background: e.background.app,
        display: 'flex',
        justifyContent: 'space-between',
        whiteSpace: 'nowrap',
      }));
    function qn(e) {
      return e.reduce((n, o) => n.concat(o.nodes), []);
    }
    var Qn = ({ tabs: e }) => {
        let { ref: n, width: o } = Qe({
            refreshMode: 'debounce',
            handleHeight: !1,
            handleWidth: !0,
          }),
          { tab: t, setTab: a } = ae(),
          u = x(
            (i) => {
              a(parseInt(i.currentTarget.getAttribute('data-index') || '', 10));
            },
            [a],
          ),
          s = `${e[t].type}-global-checkbox`;
        return h(
          $n,
          { ref: n },
          h(
            Kn,
            null,
            h(
              Vn,
              null,
              e.map((i, m) =>
                h(
                  zn,
                  { key: m, 'data-index': m, active: t === m, onClick: u },
                  i.label,
                ),
              ),
            ),
          ),
          e[t].items.length > 0
            ? h(
                jn,
                { elementWidth: o || 0 },
                h(Yn, { htmlFor: s }, 'Highlight results'),
                h(ie, { toggleId: s, elementsToHighlight: qn(e[t].items) }),
              )
            : null,
          e[t].panel,
        );
      },
      Xn = l(ve)({ marginRight: 4 }),
      Zn = l(Xn)(({ theme: e }) => ({
        animation: `${e.animation.rotate360} 1s linear infinite;`,
      })),
      Jn = l.span(({ theme: e }) => ({ color: e.color.positiveText })),
      eo = l.span(({ theme: e }) => ({ color: e.color.negativeText })),
      to = l.span(({ theme: e }) => ({ color: e.color.warningText })),
      V = l.span({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }),
      no = () => {
        let { manual: e } = _e('a11y', { manual: !1 }),
          [n, o] = N(e ? 'manual' : 'initial'),
          [t, a] = r.useState(void 0),
          { setResults: u, results: s } = ae(),
          { storyId: i } = Te(),
          m = J();
        r.useEffect(() => {
          o(e ? 'manual' : 'initial');
        }, [e]);
        let p = (I) => {
            o('ran'),
              u(I),
              setTimeout(() => {
                n === 'ran' && o('ready');
              }, 900);
          },
          d = x(() => {
            o('running');
          }, []),
          g = x((I) => {
            o('error'), a(I);
          }, []),
          c = Z({ [M.RUNNING]: d, [M.RESULT]: p, [M.ERROR]: g }),
          f = x(() => {
            o('running'), c(M.MANUAL, i, m.getParameters(i, 'a11y'));
          }, [i]),
          _ = U(() => [{ title: 'Run test', onClick: f }], [f]),
          T = U(
            () => [
              {
                title:
                  n === 'ready'
                    ? 'Rerun tests'
                    : r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(Oe, null),
                        ' Tests completed',
                      ),
                onClick: f,
              },
            ],
            [n, f],
          ),
          R = U(() => {
            let { passes: I, incomplete: S, violations: b } = s;
            return [
              {
                label: r.createElement(eo, null, b.length, ' Violations'),
                panel: r.createElement(te, {
                  items: b,
                  type: 0,
                  empty: 'No accessibility violations found.',
                }),
                items: b,
                type: 0,
              },
              {
                label: r.createElement(Jn, null, I.length, ' Passes'),
                panel: r.createElement(te, {
                  items: I,
                  type: 1,
                  empty: 'No accessibility checks passed.',
                }),
                items: I,
                type: 1,
              },
              {
                label: r.createElement(to, null, S.length, ' Incomplete'),
                panel: r.createElement(te, {
                  items: S,
                  type: 2,
                  empty: 'No accessibility checks incomplete.',
                }),
                items: S,
                type: 2,
              },
            ];
          }, [s]);
        return r.createElement(
          r.Fragment,
          null,
          n === 'initial' && r.createElement(V, null, 'Initializing...'),
          n === 'manual' &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement(V, null, 'Manually run the accessibility scan.'),
              r.createElement(K, { key: 'actionbar', actionItems: _ }),
            ),
          n === 'running' &&
            r.createElement(
              V,
              null,
              r.createElement(Zn, { size: 12 }),
              ' Please wait while the accessibility scan is running ...',
            ),
          (n === 'ready' || n === 'ran') &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                Ee,
                { vertical: !0, horizontal: !0 },
                r.createElement(Qn, { key: 'tabs', tabs: R }),
              ),
              r.createElement(K, { key: 'actionbar', actionItems: T }),
            ),
          n === 'error' &&
            r.createElement(
              V,
              null,
              'The accessibility scan encountered an error.',
              r.createElement('br', null),
              typeof t == 'string' ? t : JSON.stringify(t),
            ),
        );
      },
      oo = (e) =>
        h(
          'svg',
          { ...e },
          h(
            'defs',
            null,
            h(
              'filter',
              { id: 'protanopia' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0',
              }),
            ),
            h(
              'filter',
              { id: 'protanomaly' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0',
              }),
            ),
            h(
              'filter',
              { id: 'deuteranopia' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0',
              }),
            ),
            h(
              'filter',
              { id: 'deuteranomaly' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0',
              }),
            ),
            h(
              'filter',
              { id: 'tritanopia' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0',
              }),
            ),
            h(
              'filter',
              { id: 'tritanomaly' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0',
              }),
            ),
            h(
              'filter',
              { id: 'achromatopsia' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0',
              }),
            ),
          ),
        ),
      ro = 'storybook-preview-iframe',
      ao = [
        { name: 'blurred vision', percentage: 22.9 },
        { name: 'deuteranomaly', percentage: 2.7 },
        { name: 'deuteranopia', percentage: 0.56 },
        { name: 'protanomaly', percentage: 0.66 },
        { name: 'protanopia', percentage: 0.59 },
        { name: 'tritanomaly', percentage: 0.01 },
        { name: 'tritanopia', percentage: 0.016 },
        { name: 'achromatopsia', percentage: 1e-4 },
        { name: 'grayscale' },
      ],
      Xe = (e) =>
        e
          ? e === 'blurred vision'
            ? 'blur(2px)'
            : e === 'grayscale'
              ? 'grayscale(100%)'
              : `url('#${e}')`
          : 'none',
      io = l.div(() => ({
        '&, & svg': { position: 'absolute', width: 0, height: 0 },
      })),
      co = l.span(
        {
          background:
            'linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)',
          borderRadius: '1rem',
          display: 'block',
          height: '1rem',
          width: '1rem',
        },
        ({ filter: e }) => ({ filter: Xe(e) }),
        ({ theme: e }) => ({
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        }),
      ),
      lo = l.span({ display: 'flex', flexDirection: 'column' }),
      so = l.span({ textTransform: 'capitalize' }),
      uo = l.span(({ theme: e }) => ({
        fontSize: 11,
        color: e.textMutedColor,
      })),
      mo = (e, n) => [
        ...(e !== null
          ? [
              {
                id: 'reset',
                title: 'Reset color filter',
                onClick: () => {
                  n(null);
                },
                right: void 0,
                active: !1,
              },
            ]
          : []),
        ...ao.map((o) => {
          let t =
            o.percentage !== void 0 ? `${o.percentage}% of users` : void 0;
          return {
            id: o.name,
            title: r.createElement(
              lo,
              null,
              r.createElement(so, null, o.name),
              t && r.createElement(uo, null, t),
            ),
            onClick: () => {
              n(o);
            },
            right: r.createElement(co, { filter: o.name }),
            active: e === o,
          };
        }),
      ],
      po = () => {
        let [e, n] = N(null);
        return r.createElement(
          r.Fragment,
          null,
          e &&
            r.createElement(be, {
              styles: { [`#${ro}`]: { filter: Xe(e.name) } },
            }),
          r.createElement(
            Se,
            {
              placement: 'top',
              tooltip: ({ onHide: o }) => {
                let t = mo(e, (a) => {
                  n(a), o();
                });
                return r.createElement(Re, { links: t });
              },
              closeOnOutsideClick: !0,
              onDoubleClick: () => n(null),
            },
            r.createElement(
              Ie,
              { key: 'filter', active: !!e, title: 'Vision simulator' },
              r.createElement(ye, null),
            ),
          ),
          r.createElement(io, null, r.createElement(oo, null)),
        );
      },
      go = () => {
        let [e] = X(k),
          n = e?.violations?.length || 0,
          o = e?.incomplete?.length || 0,
          t = n + o;
        return r.createElement(
          'div',
          null,
          r.createElement(
            fe,
            { col: 1 },
            r.createElement(
              'span',
              { style: { display: 'inline-block', verticalAlign: 'middle' } },
              'Accessibility',
            ),
            t === 0 ? '' : r.createElement(q, { status: 'neutral' }, t),
          ),
        );
      };
    $.register(k, (e) => {
      $.add(De, {
        title: '',
        type: Q.TOOL,
        match: ({ viewMode: n, tabId: o }) => n === 'story' && !o,
        render: () => r.createElement(po, null),
      }),
        $.add(De, {
          title: go,
          type: Q.PANEL,
          render: ({ active: n = !0 }) =>
            r.createElement(st, { active: n }, r.createElement(no, null)),
          paramKey: nt,
        });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e,
  );
}
