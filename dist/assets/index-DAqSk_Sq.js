(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function ic(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ia = { exports: {} },
  ki = {},
  Ma = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mr = Symbol.for("react.element"),
  lc = Symbol.for("react.portal"),
  sc = Symbol.for("react.fragment"),
  oc = Symbol.for("react.strict_mode"),
  ac = Symbol.for("react.profiler"),
  uc = Symbol.for("react.provider"),
  dc = Symbol.for("react.context"),
  cc = Symbol.for("react.forward_ref"),
  fc = Symbol.for("react.suspense"),
  pc = Symbol.for("react.memo"),
  hc = Symbol.for("react.lazy"),
  mo = Symbol.iterator;
function mc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mo && e[mo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Na = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  za = Object.assign,
  Oa = {};
function jn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Na);
}
jn.prototype.isReactComponent = {};
jn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
jn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Aa() {}
Aa.prototype = jn.prototype;
function ys(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Na);
}
var ws = (ys.prototype = new Aa());
ws.constructor = ys;
za(ws, jn.prototype);
ws.isPureReactComponent = !0;
var vo = Array.isArray,
  Da = Object.prototype.hasOwnProperty,
  xs = { current: null },
  Ra = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fa(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Da.call(t, r) && !Ra.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var o = Array(a), f = 0; f < a; f++) o[f] = arguments[f + 2];
    i.children = o;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: mr,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: xs.current,
  };
}
function vc(e, t) {
  return {
    $$typeof: mr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ss(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mr;
}
function gc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var go = /\/+/g;
function Hi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gc("" + e.key)
    : t.toString(36);
}
function $r(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case mr:
          case lc:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Hi(s, 0) : r),
      vo(i)
        ? ((n = ""),
          e != null && (n = e.replace(go, "$&/") + "/"),
          $r(i, t, n, "", function (f) {
            return f;
          }))
        : i != null &&
          (Ss(i) &&
            (i = vc(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(go, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), vo(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var o = r + Hi(l, a);
      s += $r(l, t, n, o, i);
    }
  else if (((o = mc(e)), typeof o == "function"))
    for (e = o.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (o = r + Hi(l, a++)), (s += $r(l, t, n, o, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function Sr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    $r(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function yc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ge = { current: null },
  Vr = { transition: null },
  wc = {
    ReactCurrentDispatcher: ge,
    ReactCurrentBatchConfig: Vr,
    ReactCurrentOwner: xs,
  };
function Ba() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: Sr,
  forEach: function (e, t, n) {
    Sr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Sr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Sr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ss(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = jn;
F.Fragment = sc;
F.Profiler = ac;
F.PureComponent = ys;
F.StrictMode = oc;
F.Suspense = fc;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wc;
F.act = Ba;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = za({}, e.props),
    i = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = xs.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (o in t)
      Da.call(t, o) &&
        !Ra.hasOwnProperty(o) &&
        (r[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    a = Array(o);
    for (var f = 0; f < o; f++) a[f] = arguments[f + 2];
    r.children = a;
  }
  return { $$typeof: mr, type: e.type, key: i, ref: l, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: dc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: uc, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Fa;
F.createFactory = function (e) {
  var t = Fa.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: cc, render: e };
};
F.isValidElement = Ss;
F.lazy = function (e) {
  return { $$typeof: hc, _payload: { _status: -1, _result: e }, _init: yc };
};
F.memo = function (e, t) {
  return { $$typeof: pc, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Vr.transition;
  Vr.transition = {};
  try {
    e();
  } finally {
    Vr.transition = t;
  }
};
F.unstable_act = Ba;
F.useCallback = function (e, t) {
  return ge.current.useCallback(e, t);
};
F.useContext = function (e) {
  return ge.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return ge.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return ge.current.useEffect(e, t);
};
F.useId = function () {
  return ge.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return ge.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return ge.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return ge.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return ge.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return ge.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return ge.current.useRef(e);
};
F.useState = function (e) {
  return ge.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return ge.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return ge.current.useTransition();
};
F.version = "18.3.1";
Ma.exports = F;
var G = Ma.exports;
const te = ic(G);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xc = G,
  Sc = Symbol.for("react.element"),
  Ec = Symbol.for("react.fragment"),
  Cc = Object.prototype.hasOwnProperty,
  Tc = xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function $a(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Cc.call(t, r) && !jc.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Sc,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: Tc.current,
  };
}
ki.Fragment = Ec;
ki.jsx = $a;
ki.jsxs = $a;
Ia.exports = ki;
var u = Ia.exports,
  Sl = {},
  Va = { exports: {} },
  _e = {},
  Ha = { exports: {} },
  Ua = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, _) {
    var D = E.length;
    E.push(_);
    e: for (; 0 < D; ) {
      var V = (D - 1) >>> 1,
        W = E[V];
      if (0 < i(W, _)) (E[V] = _), (E[D] = W), (D = V);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var _ = E[0],
      D = E.pop();
    if (D !== _) {
      E[0] = D;
      e: for (var V = 0, W = E.length, qe = W >>> 1; V < qe; ) {
        var dt = 2 * (V + 1) - 1,
          ct = E[dt],
          Je = dt + 1,
          xr = E[Je];
        if (0 > i(ct, D))
          Je < W && 0 > i(xr, ct)
            ? ((E[V] = xr), (E[Je] = D), (V = Je))
            : ((E[V] = ct), (E[dt] = D), (V = dt));
        else if (Je < W && 0 > i(xr, D)) (E[V] = xr), (E[Je] = D), (V = Je);
        else break e;
      }
    }
    return _;
  }
  function i(E, _) {
    var D = E.sortIndex - _.sortIndex;
    return D !== 0 ? D : E.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var o = [],
    f = [],
    p = 1,
    m = null,
    v = 3,
    g = !1,
    y = !1,
    x = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(E) {
    for (var _ = n(f); _ !== null; ) {
      if (_.callback === null) r(f);
      else if (_.startTime <= E)
        r(f), (_.sortIndex = _.expirationTime), t(o, _);
      else break;
      _ = n(f);
    }
  }
  function w(E) {
    if (((x = !1), h(E), !y))
      if (n(o) !== null) (y = !0), de(S);
      else {
        var _ = n(f);
        _ !== null && L(w, _.startTime - E);
      }
  }
  function S(E, _) {
    (y = !1), x && ((x = !1), d(T), (T = -1)), (g = !0);
    var D = v;
    try {
      for (
        h(_), m = n(o);
        m !== null && (!(m.expirationTime > _) || (E && !z()));

      ) {
        var V = m.callback;
        if (typeof V == "function") {
          (m.callback = null), (v = m.priorityLevel);
          var W = V(m.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof W == "function" ? (m.callback = W) : m === n(o) && r(o),
            h(_);
        } else r(o);
        m = n(o);
      }
      if (m !== null) var qe = !0;
      else {
        var dt = n(f);
        dt !== null && L(w, dt.startTime - _), (qe = !1);
      }
      return qe;
    } finally {
      (m = null), (v = D), (g = !1);
    }
  }
  var k = !1,
    M = null,
    T = -1,
    I = 5,
    C = -1;
  function z() {
    return !(e.unstable_now() - C < I);
  }
  function O() {
    if (M !== null) {
      var E = e.unstable_now();
      C = E;
      var _ = !0;
      try {
        _ = M(!0, E);
      } finally {
        _ ? N() : ((k = !1), (M = null));
      }
    } else k = !1;
  }
  var N;
  if (typeof c == "function")
    N = function () {
      c(O);
    };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(),
      U = R.port2;
    (R.port1.onmessage = O),
      (N = function () {
        U.postMessage(null);
      });
  } else
    N = function () {
      j(O, 0);
    };
  function de(E) {
    (M = E), k || ((k = !0), N());
  }
  function L(E, _) {
    T = j(function () {
      E(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), de(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(o);
    }),
    (e.unstable_next = function (E) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = v;
      }
      var D = v;
      v = _;
      try {
        return E();
      } finally {
        v = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, _) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var D = v;
      v = E;
      try {
        return _();
      } finally {
        v = D;
      }
    }),
    (e.unstable_scheduleCallback = function (E, _, D) {
      var V = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? V + D : V))
          : (D = V),
        E)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = D + W),
        (E = {
          id: p++,
          callback: _,
          priorityLevel: E,
          startTime: D,
          expirationTime: W,
          sortIndex: -1,
        }),
        D > V
          ? ((E.sortIndex = D),
            t(f, E),
            n(o) === null &&
              E === n(f) &&
              (x ? (d(T), (T = -1)) : (x = !0), L(w, D - V)))
          : ((E.sortIndex = W), t(o, E), y || g || ((y = !0), de(S))),
        E
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (E) {
      var _ = v;
      return function () {
        var D = v;
        v = _;
        try {
          return E.apply(this, arguments);
        } finally {
          v = D;
        }
      };
    });
})(Ua);
Ha.exports = Ua;
var kc = Ha.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lc = G,
  Pe = kc;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ga = new Set(),
  Kn = {};
function Xt(e, t) {
  yn(e, t), yn(e + "Capture", t);
}
function yn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Ga.add(t[e]);
}
var lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  El = Object.prototype.hasOwnProperty,
  Pc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  yo = {},
  wo = {};
function _c(e) {
  return El.call(wo, e)
    ? !0
    : El.call(yo, e)
      ? !1
      : Pc.test(e)
        ? (wo[e] = !0)
        : ((yo[e] = !0), !1);
}
function Ic(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Mc(e, t, n, r) {
  if (t === null || typeof t > "u" || Ic(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ye(e, t, n, r, i, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ue[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ue[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ue[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ue[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ue[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ue[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ue[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Es = /[\-:]([a-z])/g;
function Cs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Es, Cs);
    ue[t] = new ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Es, Cs);
    ue[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Es, Cs);
  ue[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ue[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ue[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ts(e, t, n, r) {
  var i = ue.hasOwnProperty(t) ? ue[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Mc(t, n, i, r) && (n = null),
    r || i === null
      ? _c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ut = Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Er = Symbol.for("react.element"),
  Jt = Symbol.for("react.portal"),
  Zt = Symbol.for("react.fragment"),
  js = Symbol.for("react.strict_mode"),
  Cl = Symbol.for("react.profiler"),
  Wa = Symbol.for("react.provider"),
  ba = Symbol.for("react.context"),
  ks = Symbol.for("react.forward_ref"),
  Tl = Symbol.for("react.suspense"),
  jl = Symbol.for("react.suspense_list"),
  Ls = Symbol.for("react.memo"),
  ht = Symbol.for("react.lazy"),
  Ya = Symbol.for("react.offscreen"),
  xo = Symbol.iterator;
function Pn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xo && e[xo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  Ui;
function Dn(e) {
  if (Ui === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ui = (t && t[1]) || "";
    }
  return (
    `
` +
    Ui +
    e
  );
}
var Gi = !1;
function Wi(e, t) {
  if (!e || Gi) return "";
  Gi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var i = f.stack.split(`
`),
          l = r.stack.split(`
`),
          s = i.length - 1,
          a = l.length - 1;
        1 <= s && 0 <= a && i[s] !== l[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== l[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== l[a])) {
                var o =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    o.includes("<anonymous>") &&
                    (o = o.replace("<anonymous>", e.displayName)),
                  o
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Gi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Dn(e) : "";
}
function Nc(e) {
  switch (e.tag) {
    case 5:
      return Dn(e.type);
    case 16:
      return Dn("Lazy");
    case 13:
      return Dn("Suspense");
    case 19:
      return Dn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wi(e.type, !1)), e;
    case 11:
      return (e = Wi(e.type.render, !1)), e;
    case 1:
      return (e = Wi(e.type, !0)), e;
    default:
      return "";
  }
}
function kl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zt:
      return "Fragment";
    case Jt:
      return "Portal";
    case Cl:
      return "Profiler";
    case js:
      return "StrictMode";
    case Tl:
      return "Suspense";
    case jl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ba:
        return (e.displayName || "Context") + ".Consumer";
      case Wa:
        return (e._context.displayName || "Context") + ".Provider";
      case ks:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ls:
        return (
          (t = e.displayName || null), t !== null ? t : kl(e.type) || "Memo"
        );
      case ht:
        (t = e._payload), (e = e._init);
        try {
          return kl(e(t));
        } catch {}
    }
  return null;
}
function zc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return kl(t);
    case 8:
      return t === js ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function It(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Qa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Oc(e) {
  var t = Qa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Cr(e) {
  e._valueTracker || (e._valueTracker = Oc(e));
}
function Xa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Qa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ll(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function So(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = It(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ka(e, t) {
  (t = t.checked), t != null && Ts(e, "checked", t, !1);
}
function Pl(e, t) {
  Ka(e, t);
  var n = It(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? _l(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _l(e, t.type, It(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Eo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function _l(e, t, n) {
  (t !== "number" || Zr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rn = Array.isArray;
function cn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + It(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Il(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Co(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: It(n) };
}
function qa(e, t) {
  var n = It(t.value),
    r = It(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function To(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ja(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ml(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ja(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Tr,
  Za = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Tr = Tr || document.createElement("div"),
          Tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Tr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $n = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ac = ["Webkit", "ms", "Moz", "O"];
Object.keys($n).forEach(function (e) {
  Ac.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($n[t] = $n[e]);
  });
});
function eu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($n.hasOwnProperty(e) && $n[e])
      ? ("" + t).trim()
      : t + "px";
}
function tu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = eu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Dc = J(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Nl(e, t) {
  if (t) {
    if (Dc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function zl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ol = null;
function Ps(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Al = null,
  fn = null,
  pn = null;
function jo(e) {
  if ((e = yr(e))) {
    if (typeof Al != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = Mi(t)), Al(e.stateNode, e.type, t));
  }
}
function nu(e) {
  fn ? (pn ? pn.push(e) : (pn = [e])) : (fn = e);
}
function ru() {
  if (fn) {
    var e = fn,
      t = pn;
    if (((pn = fn = null), jo(e), t)) for (e = 0; e < t.length; e++) jo(t[e]);
  }
}
function iu(e, t) {
  return e(t);
}
function lu() {}
var bi = !1;
function su(e, t, n) {
  if (bi) return e(t, n);
  bi = !0;
  try {
    return iu(e, t, n);
  } finally {
    (bi = !1), (fn !== null || pn !== null) && (lu(), ru());
  }
}
function Jn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Mi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var Dl = !1;
if (lt)
  try {
    var _n = {};
    Object.defineProperty(_n, "passive", {
      get: function () {
        Dl = !0;
      },
    }),
      window.addEventListener("test", _n, _n),
      window.removeEventListener("test", _n, _n);
  } catch {
    Dl = !1;
  }
function Rc(e, t, n, r, i, l, s, a, o) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (p) {
    this.onError(p);
  }
}
var Vn = !1,
  ei = null,
  ti = !1,
  Rl = null,
  Fc = {
    onError: function (e) {
      (Vn = !0), (ei = e);
    },
  };
function Bc(e, t, n, r, i, l, s, a, o) {
  (Vn = !1), (ei = null), Rc.apply(Fc, arguments);
}
function $c(e, t, n, r, i, l, s, a, o) {
  if ((Bc.apply(this, arguments), Vn)) {
    if (Vn) {
      var f = ei;
      (Vn = !1), (ei = null);
    } else throw Error(P(198));
    ti || ((ti = !0), (Rl = f));
  }
}
function Kt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ou(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ko(e) {
  if (Kt(e) !== e) throw Error(P(188));
}
function Vc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Kt(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return ko(i), e;
        if (l === r) return ko(i), t;
        l = l.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = l);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = l.child; a; ) {
          if (a === n) {
            (s = !0), (n = l), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = l), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function au(e) {
  return (e = Vc(e)), e !== null ? uu(e) : null;
}
function uu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var du = Pe.unstable_scheduleCallback,
  Lo = Pe.unstable_cancelCallback,
  Hc = Pe.unstable_shouldYield,
  Uc = Pe.unstable_requestPaint,
  ee = Pe.unstable_now,
  Gc = Pe.unstable_getCurrentPriorityLevel,
  _s = Pe.unstable_ImmediatePriority,
  cu = Pe.unstable_UserBlockingPriority,
  ni = Pe.unstable_NormalPriority,
  Wc = Pe.unstable_LowPriority,
  fu = Pe.unstable_IdlePriority,
  Li = null,
  Xe = null;
function bc(e) {
  if (Xe && typeof Xe.onCommitFiberRoot == "function")
    try {
      Xe.onCommitFiberRoot(Li, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var He = Math.clz32 ? Math.clz32 : Xc,
  Yc = Math.log,
  Qc = Math.LN2;
function Xc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Yc(e) / Qc) | 0)) | 0;
}
var jr = 64,
  kr = 4194304;
function Fn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ri(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Fn(a)) : ((l &= s), l !== 0 && (r = Fn(l)));
  } else (s = n & ~i), s !== 0 ? (r = Fn(s)) : l !== 0 && (r = Fn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - He(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Kc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - He(l),
      a = 1 << s,
      o = i[s];
    o === -1
      ? (!(a & n) || a & r) && (i[s] = Kc(a, t))
      : o <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Fl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function pu() {
  var e = jr;
  return (jr <<= 1), !(jr & 4194240) && (jr = 64), e;
}
function Yi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - He(t)),
    (e[t] = n);
}
function Jc(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - He(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function Is(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - He(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var H = 0;
function hu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var mu,
  Ms,
  vu,
  gu,
  yu,
  Bl = !1,
  Lr = [],
  Et = null,
  Ct = null,
  Tt = null,
  Zn = new Map(),
  er = new Map(),
  vt = [],
  Zc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Po(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      Tt = null;
      break;
    case "pointerover":
    case "pointerout":
      Zn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      er.delete(t.pointerId);
  }
}
function In(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = yr(t)), t !== null && Ms(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function ef(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Et = In(Et, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ct = In(Ct, e, t, n, r, i)), !0;
    case "mouseover":
      return (Tt = In(Tt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return Zn.set(l, In(Zn.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), er.set(l, In(er.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function wu(e) {
  var t = Ft(e.target);
  if (t !== null) {
    var n = Kt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ou(n)), t !== null)) {
          (e.blockedOn = t),
            yu(e.priority, function () {
              vu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Hr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ol = r), n.target.dispatchEvent(r), (Ol = null);
    } else return (t = yr(n)), t !== null && Ms(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _o(e, t, n) {
  Hr(e) && n.delete(t);
}
function tf() {
  (Bl = !1),
    Et !== null && Hr(Et) && (Et = null),
    Ct !== null && Hr(Ct) && (Ct = null),
    Tt !== null && Hr(Tt) && (Tt = null),
    Zn.forEach(_o),
    er.forEach(_o);
}
function Mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Bl ||
      ((Bl = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, tf)));
}
function tr(e) {
  function t(i) {
    return Mn(i, e);
  }
  if (0 < Lr.length) {
    Mn(Lr[0], e);
    for (var n = 1; n < Lr.length; n++) {
      var r = Lr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Et !== null && Mn(Et, e),
      Ct !== null && Mn(Ct, e),
      Tt !== null && Mn(Tt, e),
      Zn.forEach(t),
      er.forEach(t),
      n = 0;
    n < vt.length;
    n++
  )
    (r = vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < vt.length && ((n = vt[0]), n.blockedOn === null); )
    wu(n), n.blockedOn === null && vt.shift();
}
var hn = ut.ReactCurrentBatchConfig,
  ii = !0;
function nf(e, t, n, r) {
  var i = H,
    l = hn.transition;
  hn.transition = null;
  try {
    (H = 1), Ns(e, t, n, r);
  } finally {
    (H = i), (hn.transition = l);
  }
}
function rf(e, t, n, r) {
  var i = H,
    l = hn.transition;
  hn.transition = null;
  try {
    (H = 4), Ns(e, t, n, r);
  } finally {
    (H = i), (hn.transition = l);
  }
}
function Ns(e, t, n, r) {
  if (ii) {
    var i = $l(e, t, n, r);
    if (i === null) rl(e, t, r, li, n), Po(e, r);
    else if (ef(i, e, t, n, r)) r.stopPropagation();
    else if ((Po(e, r), t & 4 && -1 < Zc.indexOf(e))) {
      for (; i !== null; ) {
        var l = yr(i);
        if (
          (l !== null && mu(l),
          (l = $l(e, t, n, r)),
          l === null && rl(e, t, r, li, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else rl(e, t, r, null, n);
  }
}
var li = null;
function $l(e, t, n, r) {
  if (((li = null), (e = Ps(r)), (e = Ft(e)), e !== null))
    if (((t = Kt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ou(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (li = e), null;
}
function xu(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Gc()) {
        case _s:
          return 1;
        case cu:
          return 4;
        case ni:
        case Wc:
          return 16;
        case fu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wt = null,
  zs = null,
  Ur = null;
function Su() {
  if (Ur) return Ur;
  var e,
    t = zs,
    n = t.length,
    r,
    i = "value" in wt ? wt.value : wt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
  return (Ur = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Gr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Pr() {
  return !0;
}
function Io() {
  return !1;
}
function Ie(e) {
  function t(n, r, i, l, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Pr
        : Io),
      (this.isPropagationStopped = Io),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Pr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pr));
      },
      persist: function () {},
      isPersistent: Pr,
    }),
    t
  );
}
var kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Os = Ie(kn),
  gr = J({}, kn, { view: 0, detail: 0 }),
  lf = Ie(gr),
  Qi,
  Xi,
  Nn,
  Pi = J({}, gr, {
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
    getModifierState: As,
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
      return "movementX" in e
        ? e.movementX
        : (e !== Nn &&
            (Nn && e.type === "mousemove"
              ? ((Qi = e.screenX - Nn.screenX), (Xi = e.screenY - Nn.screenY))
              : (Xi = Qi = 0),
            (Nn = e)),
          Qi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Xi;
    },
  }),
  Mo = Ie(Pi),
  sf = J({}, Pi, { dataTransfer: 0 }),
  of = Ie(sf),
  af = J({}, gr, { relatedTarget: 0 }),
  Ki = Ie(af),
  uf = J({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  df = Ie(uf),
  cf = J({}, kn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ff = Ie(cf),
  pf = J({}, kn, { data: 0 }),
  No = Ie(pf),
  hf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  mf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  vf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vf[e]) ? !!t[e] : !1;
}
function As() {
  return gf;
}
var yf = J({}, gr, {
    key: function (e) {
      if (e.key) {
        var t = hf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Gr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? mf[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: As,
    charCode: function (e) {
      return e.type === "keypress" ? Gr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Gr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  wf = Ie(yf),
  xf = J({}, Pi, {
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
  }),
  zo = Ie(xf),
  Sf = J({}, gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: As,
  }),
  Ef = Ie(Sf),
  Cf = J({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tf = Ie(Cf),
  jf = J({}, Pi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  kf = Ie(jf),
  Lf = [9, 13, 27, 32],
  Ds = lt && "CompositionEvent" in window,
  Hn = null;
lt && "documentMode" in document && (Hn = document.documentMode);
var Pf = lt && "TextEvent" in window && !Hn,
  Eu = lt && (!Ds || (Hn && 8 < Hn && 11 >= Hn)),
  Oo = " ",
  Ao = !1;
function Cu(e, t) {
  switch (e) {
    case "keyup":
      return Lf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Tu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var en = !1;
function _f(e, t) {
  switch (e) {
    case "compositionend":
      return Tu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ao = !0), Oo);
    case "textInput":
      return (e = t.data), e === Oo && Ao ? null : e;
    default:
      return null;
  }
}
function If(e, t) {
  if (en)
    return e === "compositionend" || (!Ds && Cu(e, t))
      ? ((e = Su()), (Ur = zs = wt = null), (en = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Eu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Do(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mf[e.type] : t === "textarea";
}
function ju(e, t, n, r) {
  nu(r),
    (t = si(t, "onChange")),
    0 < t.length &&
      ((n = new Os("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Un = null,
  nr = null;
function Nf(e) {
  Du(e, 0);
}
function _i(e) {
  var t = rn(e);
  if (Xa(t)) return e;
}
function zf(e, t) {
  if (e === "change") return t;
}
var ku = !1;
if (lt) {
  var qi;
  if (lt) {
    var Ji = "oninput" in document;
    if (!Ji) {
      var Ro = document.createElement("div");
      Ro.setAttribute("oninput", "return;"),
        (Ji = typeof Ro.oninput == "function");
    }
    qi = Ji;
  } else qi = !1;
  ku = qi && (!document.documentMode || 9 < document.documentMode);
}
function Fo() {
  Un && (Un.detachEvent("onpropertychange", Lu), (nr = Un = null));
}
function Lu(e) {
  if (e.propertyName === "value" && _i(nr)) {
    var t = [];
    ju(t, nr, e, Ps(e)), su(Nf, t);
  }
}
function Of(e, t, n) {
  e === "focusin"
    ? (Fo(), (Un = t), (nr = n), Un.attachEvent("onpropertychange", Lu))
    : e === "focusout" && Fo();
}
function Af(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _i(nr);
}
function Df(e, t) {
  if (e === "click") return _i(t);
}
function Rf(e, t) {
  if (e === "input" || e === "change") return _i(t);
}
function Ff(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ge = typeof Object.is == "function" ? Object.is : Ff;
function rr(e, t) {
  if (Ge(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!El.call(t, i) || !Ge(e[i], t[i])) return !1;
  }
  return !0;
}
function Bo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $o(e, t) {
  var n = Bo(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Bo(n);
  }
}
function Pu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Pu(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function _u() {
  for (var e = window, t = Zr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zr(e.document);
  }
  return t;
}
function Rs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Bf(e) {
  var t = _u(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Pu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Rs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = $o(n, l));
        var s = $o(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var $f = lt && "documentMode" in document && 11 >= document.documentMode,
  tn = null,
  Vl = null,
  Gn = null,
  Hl = !1;
function Vo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hl ||
    tn == null ||
    tn !== Zr(r) ||
    ((r = tn),
    "selectionStart" in r && Rs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Gn && rr(Gn, r)) ||
      ((Gn = r),
      (r = si(Vl, "onSelect")),
      0 < r.length &&
        ((t = new Os("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = tn))));
}
function _r(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var nn = {
    animationend: _r("Animation", "AnimationEnd"),
    animationiteration: _r("Animation", "AnimationIteration"),
    animationstart: _r("Animation", "AnimationStart"),
    transitionend: _r("Transition", "TransitionEnd"),
  },
  Zi = {},
  Iu = {};
lt &&
  ((Iu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete nn.animationend.animation,
    delete nn.animationiteration.animation,
    delete nn.animationstart.animation),
  "TransitionEvent" in window || delete nn.transitionend.transition);
function Ii(e) {
  if (Zi[e]) return Zi[e];
  if (!nn[e]) return e;
  var t = nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Iu) return (Zi[e] = t[n]);
  return e;
}
var Mu = Ii("animationend"),
  Nu = Ii("animationiteration"),
  zu = Ii("animationstart"),
  Ou = Ii("transitionend"),
  Au = new Map(),
  Ho =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function zt(e, t) {
  Au.set(e, t), Xt(t, [e]);
}
for (var el = 0; el < Ho.length; el++) {
  var tl = Ho[el],
    Vf = tl.toLowerCase(),
    Hf = tl[0].toUpperCase() + tl.slice(1);
  zt(Vf, "on" + Hf);
}
zt(Mu, "onAnimationEnd");
zt(Nu, "onAnimationIteration");
zt(zu, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(Ou, "onTransitionEnd");
yn("onMouseEnter", ["mouseout", "mouseover"]);
yn("onMouseLeave", ["mouseout", "mouseover"]);
yn("onPointerEnter", ["pointerout", "pointerover"]);
yn("onPointerLeave", ["pointerout", "pointerover"]);
Xt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Xt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Xt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Xt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Bn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Uf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));
function Uo(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $c(r, t, void 0, e), (e.currentTarget = null);
}
function Du(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            o = a.instance,
            f = a.currentTarget;
          if (((a = a.listener), o !== l && i.isPropagationStopped())) break e;
          Uo(i, a, f), (l = o);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (o = a.instance),
            (f = a.currentTarget),
            (a = a.listener),
            o !== l && i.isPropagationStopped())
          )
            break e;
          Uo(i, a, f), (l = o);
        }
    }
  }
  if (ti) throw ((e = Rl), (ti = !1), (Rl = null), e);
}
function Y(e, t) {
  var n = t[Yl];
  n === void 0 && (n = t[Yl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ru(t, e, 2, !1), n.add(r));
}
function nl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ru(n, e, r, t);
}
var Ir = "_reactListening" + Math.random().toString(36).slice(2);
function ir(e) {
  if (!e[Ir]) {
    (e[Ir] = !0),
      Ga.forEach(function (n) {
        n !== "selectionchange" && (Uf.has(n) || nl(n, !1, e), nl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ir] || ((t[Ir] = !0), nl("selectionchange", !1, t));
  }
}
function Ru(e, t, n, r) {
  switch (xu(t)) {
    case 1:
      var i = nf;
      break;
    case 4:
      i = rf;
      break;
    default:
      i = Ns;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Dl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function rl(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var o = s.tag;
            if (
              (o === 3 || o === 4) &&
              ((o = s.stateNode.containerInfo),
              o === i || (o.nodeType === 8 && o.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Ft(a)), s === null)) return;
          if (((o = s.tag), o === 5 || o === 6)) {
            r = l = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  su(function () {
    var f = l,
      p = Ps(n),
      m = [];
    e: {
      var v = Au.get(e);
      if (v !== void 0) {
        var g = Os,
          y = e;
        switch (e) {
          case "keypress":
            if (Gr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = wf;
            break;
          case "focusin":
            (y = "focus"), (g = Ki);
            break;
          case "focusout":
            (y = "blur"), (g = Ki);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ki;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Mo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = of;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Ef;
            break;
          case Mu:
          case Nu:
          case zu:
            g = df;
            break;
          case Ou:
            g = Tf;
            break;
          case "scroll":
            g = lf;
            break;
          case "wheel":
            g = kf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = ff;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = zo;
        }
        var x = (t & 4) !== 0,
          j = !x && e === "scroll",
          d = x ? (v !== null ? v + "Capture" : null) : v;
        x = [];
        for (var c = f, h; c !== null; ) {
          h = c;
          var w = h.stateNode;
          if (
            (h.tag === 5 &&
              w !== null &&
              ((h = w),
              d !== null && ((w = Jn(c, d)), w != null && x.push(lr(c, w, h)))),
            j)
          )
            break;
          c = c.return;
        }
        0 < x.length &&
          ((v = new g(v, y, null, n, p)), m.push({ event: v, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          v &&
            n !== Ol &&
            (y = n.relatedTarget || n.fromElement) &&
            (Ft(y) || y[st]))
        )
          break e;
        if (
          (g || v) &&
          ((v =
            p.window === p
              ? p
              : (v = p.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = f),
              (y = y ? Ft(y) : null),
              y !== null &&
                ((j = Kt(y)), y !== j || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = f)),
          g !== y)
        ) {
          if (
            ((x = Mo),
            (w = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = zo),
              (w = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (j = g == null ? v : rn(g)),
            (h = y == null ? v : rn(y)),
            (v = new x(w, c + "leave", g, n, p)),
            (v.target = j),
            (v.relatedTarget = h),
            (w = null),
            Ft(p) === f &&
              ((x = new x(d, c + "enter", y, n, p)),
              (x.target = h),
              (x.relatedTarget = j),
              (w = x)),
            (j = w),
            g && y)
          )
            t: {
              for (x = g, d = y, c = 0, h = x; h; h = qt(h)) c++;
              for (h = 0, w = d; w; w = qt(w)) h++;
              for (; 0 < c - h; ) (x = qt(x)), c--;
              for (; 0 < h - c; ) (d = qt(d)), h--;
              for (; c--; ) {
                if (x === d || (d !== null && x === d.alternate)) break t;
                (x = qt(x)), (d = qt(d));
              }
              x = null;
            }
          else x = null;
          g !== null && Go(m, v, g, x, !1),
            y !== null && j !== null && Go(m, j, y, x, !0);
        }
      }
      e: {
        if (
          ((v = f ? rn(f) : window),
          (g = v.nodeName && v.nodeName.toLowerCase()),
          g === "select" || (g === "input" && v.type === "file"))
        )
          var S = zf;
        else if (Do(v))
          if (ku) S = Rf;
          else {
            S = Af;
            var k = Of;
          }
        else
          (g = v.nodeName) &&
            g.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (S = Df);
        if (S && (S = S(e, f))) {
          ju(m, S, n, p);
          break e;
        }
        k && k(e, v, f),
          e === "focusout" &&
            (k = v._wrapperState) &&
            k.controlled &&
            v.type === "number" &&
            _l(v, "number", v.value);
      }
      switch (((k = f ? rn(f) : window), e)) {
        case "focusin":
          (Do(k) || k.contentEditable === "true") &&
            ((tn = k), (Vl = f), (Gn = null));
          break;
        case "focusout":
          Gn = Vl = tn = null;
          break;
        case "mousedown":
          Hl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Hl = !1), Vo(m, n, p);
          break;
        case "selectionchange":
          if ($f) break;
        case "keydown":
        case "keyup":
          Vo(m, n, p);
      }
      var M;
      if (Ds)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        en
          ? Cu(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Eu &&
          n.locale !== "ko" &&
          (en || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && en && (M = Su())
            : ((wt = p),
              (zs = "value" in wt ? wt.value : wt.textContent),
              (en = !0))),
        (k = si(f, T)),
        0 < k.length &&
          ((T = new No(T, e, null, n, p)),
          m.push({ event: T, listeners: k }),
          M ? (T.data = M) : ((M = Tu(n)), M !== null && (T.data = M)))),
        (M = Pf ? _f(e, n) : If(e, n)) &&
          ((f = si(f, "onBeforeInput")),
          0 < f.length &&
            ((p = new No("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: f }),
            (p.data = M)));
    }
    Du(m, t);
  });
}
function lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function si(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Jn(e, n)),
      l != null && r.unshift(lr(e, l, i)),
      (l = Jn(e, t)),
      l != null && r.push(lr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Go(e, t, n, r, i) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      o = a.alternate,
      f = a.stateNode;
    if (o !== null && o === r) break;
    a.tag === 5 &&
      f !== null &&
      ((a = f),
      i
        ? ((o = Jn(n, l)), o != null && s.unshift(lr(n, o, a)))
        : i || ((o = Jn(n, l)), o != null && s.push(lr(n, o, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Gf = /\r\n?/g,
  Wf = /\u0000|\uFFFD/g;
function Wo(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Gf,
      `
`,
    )
    .replace(Wf, "");
}
function Mr(e, t, n) {
  if (((t = Wo(t)), Wo(e) !== t && n)) throw Error(P(425));
}
function oi() {}
var Ul = null,
  Gl = null;
function Wl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var bl = typeof setTimeout == "function" ? setTimeout : void 0,
  bf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  bo = typeof Promise == "function" ? Promise : void 0,
  Yf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof bo < "u"
        ? function (e) {
            return bo.resolve(null).then(e).catch(Qf);
          }
        : bl;
function Qf(e) {
  setTimeout(function () {
    throw e;
  });
}
function il(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), tr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  tr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Yo(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ln = Math.random().toString(36).slice(2),
  Ye = "__reactFiber$" + Ln,
  sr = "__reactProps$" + Ln,
  st = "__reactContainer$" + Ln,
  Yl = "__reactEvents$" + Ln,
  Xf = "__reactListeners$" + Ln,
  Kf = "__reactHandles$" + Ln;
function Ft(e) {
  var t = e[Ye];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[st] || n[Ye])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Yo(e); e !== null; ) {
          if ((n = e[Ye])) return n;
          e = Yo(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function yr(e) {
  return (
    (e = e[Ye] || e[st]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Mi(e) {
  return e[sr] || null;
}
var Ql = [],
  ln = -1;
function Ot(e) {
  return { current: e };
}
function Q(e) {
  0 > ln || ((e.current = Ql[ln]), (Ql[ln] = null), ln--);
}
function b(e, t) {
  ln++, (Ql[ln] = e.current), (e.current = t);
}
var Mt = {},
  he = Ot(Mt),
  Se = Ot(!1),
  Ut = Mt;
function wn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function ai() {
  Q(Se), Q(he);
}
function Qo(e, t, n) {
  if (he.current !== Mt) throw Error(P(168));
  b(he, t), b(Se, n);
}
function Fu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(P(108, zc(e) || "Unknown", i));
  return J({}, n, r);
}
function ui(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mt),
    (Ut = he.current),
    b(he, e),
    b(Se, Se.current),
    !0
  );
}
function Xo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = Fu(e, t, Ut)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Q(Se),
      Q(he),
      b(he, e))
    : Q(Se),
    b(Se, n);
}
var tt = null,
  Ni = !1,
  ll = !1;
function Bu(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
function qf(e) {
  (Ni = !0), Bu(e);
}
function At() {
  if (!ll && tt !== null) {
    ll = !0;
    var e = 0,
      t = H;
    try {
      var n = tt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (tt = null), (Ni = !1);
    } catch (i) {
      throw (tt !== null && (tt = tt.slice(e + 1)), du(_s, At), i);
    } finally {
      (H = t), (ll = !1);
    }
  }
  return null;
}
var sn = [],
  on = 0,
  di = null,
  ci = 0,
  Ne = [],
  ze = 0,
  Gt = null,
  nt = 1,
  rt = "";
function Dt(e, t) {
  (sn[on++] = ci), (sn[on++] = di), (di = e), (ci = t);
}
function $u(e, t, n) {
  (Ne[ze++] = nt), (Ne[ze++] = rt), (Ne[ze++] = Gt), (Gt = e);
  var r = nt;
  e = rt;
  var i = 32 - He(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - He(t) + i;
  if (30 < l) {
    var s = i - (i % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (nt = (1 << (32 - He(t) + i)) | (n << i) | r),
      (rt = l + e);
  } else (nt = (1 << l) | (n << i) | r), (rt = e);
}
function Fs(e) {
  e.return !== null && (Dt(e, 1), $u(e, 1, 0));
}
function Bs(e) {
  for (; e === di; )
    (di = sn[--on]), (sn[on] = null), (ci = sn[--on]), (sn[on] = null);
  for (; e === Gt; )
    (Gt = Ne[--ze]),
      (Ne[ze] = null),
      (rt = Ne[--ze]),
      (Ne[ze] = null),
      (nt = Ne[--ze]),
      (Ne[ze] = null);
}
var Le = null,
  ke = null,
  X = !1,
  Ve = null;
function Vu(e, t) {
  var n = Oe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ko(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Le = e), (ke = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Gt !== null ? { id: nt, overflow: rt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Oe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Le = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Xl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Kl(e) {
  if (X) {
    var t = ke;
    if (t) {
      var n = t;
      if (!Ko(e, t)) {
        if (Xl(e)) throw Error(P(418));
        t = jt(n.nextSibling);
        var r = Le;
        t && Ko(e, t)
          ? Vu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (Le = e));
      }
    } else {
      if (Xl(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (X = !1), (Le = e);
    }
  }
}
function qo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Le = e;
}
function Nr(e) {
  if (e !== Le) return !1;
  if (!X) return qo(e), (X = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Wl(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (Xl(e)) throw (Hu(), Error(P(418)));
    for (; t; ) Vu(e, t), (t = jt(t.nextSibling));
  }
  if ((qo(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Le ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Hu() {
  for (var e = ke; e; ) e = jt(e.nextSibling);
}
function xn() {
  (ke = Le = null), (X = !1);
}
function $s(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
var Jf = ut.ReactCurrentBatchConfig;
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[l] : (a[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function zr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Jo(e) {
  var t = e._init;
  return t(e._payload);
}
function Uu(e) {
  function t(d, c) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [c]), (d.flags |= 16)) : h.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function i(d, c) {
    return (d = _t(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, c, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((d.flags |= 2), c) : h)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, c, h, w) {
    return c === null || c.tag !== 6
      ? ((c = fl(h, d.mode, w)), (c.return = d), c)
      : ((c = i(c, h)), (c.return = d), c);
  }
  function o(d, c, h, w) {
    var S = h.type;
    return S === Zt
      ? p(d, c, h.props.children, w, h.key)
      : c !== null &&
          (c.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === ht &&
              Jo(S) === c.type))
        ? ((w = i(c, h.props)), (w.ref = zn(d, c, h)), (w.return = d), w)
        : ((w = qr(h.type, h.key, h.props, null, d.mode, w)),
          (w.ref = zn(d, c, h)),
          (w.return = d),
          w);
  }
  function f(d, c, h, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = pl(h, d.mode, w)), (c.return = d), c)
      : ((c = i(c, h.children || [])), (c.return = d), c);
  }
  function p(d, c, h, w, S) {
    return c === null || c.tag !== 7
      ? ((c = Ht(h, d.mode, w, S)), (c.return = d), c)
      : ((c = i(c, h)), (c.return = d), c);
  }
  function m(d, c, h) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = fl("" + c, d.mode, h)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Er:
          return (
            (h = qr(c.type, c.key, c.props, null, d.mode, h)),
            (h.ref = zn(d, null, c)),
            (h.return = d),
            h
          );
        case Jt:
          return (c = pl(c, d.mode, h)), (c.return = d), c;
        case ht:
          var w = c._init;
          return m(d, w(c._payload), h);
      }
      if (Rn(c) || Pn(c))
        return (c = Ht(c, d.mode, h, null)), (c.return = d), c;
      zr(d, c);
    }
    return null;
  }
  function v(d, c, h, w) {
    var S = c !== null ? c.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return S !== null ? null : a(d, c, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Er:
          return h.key === S ? o(d, c, h, w) : null;
        case Jt:
          return h.key === S ? f(d, c, h, w) : null;
        case ht:
          return (S = h._init), v(d, c, S(h._payload), w);
      }
      if (Rn(h) || Pn(h)) return S !== null ? null : p(d, c, h, w, null);
      zr(d, h);
    }
    return null;
  }
  function g(d, c, h, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (d = d.get(h) || null), a(c, d, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Er:
          return (d = d.get(w.key === null ? h : w.key) || null), o(c, d, w, S);
        case Jt:
          return (d = d.get(w.key === null ? h : w.key) || null), f(c, d, w, S);
        case ht:
          var k = w._init;
          return g(d, c, h, k(w._payload), S);
      }
      if (Rn(w) || Pn(w)) return (d = d.get(h) || null), p(c, d, w, S, null);
      zr(c, w);
    }
    return null;
  }
  function y(d, c, h, w) {
    for (
      var S = null, k = null, M = c, T = (c = 0), I = null;
      M !== null && T < h.length;
      T++
    ) {
      M.index > T ? ((I = M), (M = null)) : (I = M.sibling);
      var C = v(d, M, h[T], w);
      if (C === null) {
        M === null && (M = I);
        break;
      }
      e && M && C.alternate === null && t(d, M),
        (c = l(C, c, T)),
        k === null ? (S = C) : (k.sibling = C),
        (k = C),
        (M = I);
    }
    if (T === h.length) return n(d, M), X && Dt(d, T), S;
    if (M === null) {
      for (; T < h.length; T++)
        (M = m(d, h[T], w)),
          M !== null &&
            ((c = l(M, c, T)), k === null ? (S = M) : (k.sibling = M), (k = M));
      return X && Dt(d, T), S;
    }
    for (M = r(d, M); T < h.length; T++)
      (I = g(M, d, T, h[T], w)),
        I !== null &&
          (e && I.alternate !== null && M.delete(I.key === null ? T : I.key),
          (c = l(I, c, T)),
          k === null ? (S = I) : (k.sibling = I),
          (k = I));
    return (
      e &&
        M.forEach(function (z) {
          return t(d, z);
        }),
      X && Dt(d, T),
      S
    );
  }
  function x(d, c, h, w) {
    var S = Pn(h);
    if (typeof S != "function") throw Error(P(150));
    if (((h = S.call(h)), h == null)) throw Error(P(151));
    for (
      var k = (S = null), M = c, T = (c = 0), I = null, C = h.next();
      M !== null && !C.done;
      T++, C = h.next()
    ) {
      M.index > T ? ((I = M), (M = null)) : (I = M.sibling);
      var z = v(d, M, C.value, w);
      if (z === null) {
        M === null && (M = I);
        break;
      }
      e && M && z.alternate === null && t(d, M),
        (c = l(z, c, T)),
        k === null ? (S = z) : (k.sibling = z),
        (k = z),
        (M = I);
    }
    if (C.done) return n(d, M), X && Dt(d, T), S;
    if (M === null) {
      for (; !C.done; T++, C = h.next())
        (C = m(d, C.value, w)),
          C !== null &&
            ((c = l(C, c, T)), k === null ? (S = C) : (k.sibling = C), (k = C));
      return X && Dt(d, T), S;
    }
    for (M = r(d, M); !C.done; T++, C = h.next())
      (C = g(M, d, T, C.value, w)),
        C !== null &&
          (e && C.alternate !== null && M.delete(C.key === null ? T : C.key),
          (c = l(C, c, T)),
          k === null ? (S = C) : (k.sibling = C),
          (k = C));
    return (
      e &&
        M.forEach(function (O) {
          return t(d, O);
        }),
      X && Dt(d, T),
      S
    );
  }
  function j(d, c, h, w) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Zt &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Er:
          e: {
            for (var S = h.key, k = c; k !== null; ) {
              if (k.key === S) {
                if (((S = h.type), S === Zt)) {
                  if (k.tag === 7) {
                    n(d, k.sibling),
                      (c = i(k, h.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  k.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === ht &&
                    Jo(S) === k.type)
                ) {
                  n(d, k.sibling),
                    (c = i(k, h.props)),
                    (c.ref = zn(d, k, h)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, k);
                break;
              } else t(d, k);
              k = k.sibling;
            }
            h.type === Zt
              ? ((c = Ht(h.props.children, d.mode, w, h.key)),
                (c.return = d),
                (d = c))
              : ((w = qr(h.type, h.key, h.props, null, d.mode, w)),
                (w.ref = zn(d, c, h)),
                (w.return = d),
                (d = w));
          }
          return s(d);
        case Jt:
          e: {
            for (k = h.key; c !== null; ) {
              if (c.key === k)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  n(d, c.sibling),
                    (c = i(c, h.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = pl(h, d.mode, w)), (c.return = d), (d = c);
          }
          return s(d);
        case ht:
          return (k = h._init), j(d, c, k(h._payload), w);
      }
      if (Rn(h)) return y(d, c, h, w);
      if (Pn(h)) return x(d, c, h, w);
      zr(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = i(c, h)), (c.return = d), (d = c))
          : (n(d, c), (c = fl(h, d.mode, w)), (c.return = d), (d = c)),
        s(d))
      : n(d, c);
  }
  return j;
}
var Sn = Uu(!0),
  Gu = Uu(!1),
  fi = Ot(null),
  pi = null,
  an = null,
  Vs = null;
function Hs() {
  Vs = an = pi = null;
}
function Us(e) {
  var t = fi.current;
  Q(fi), (e._currentValue = t);
}
function ql(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function mn(e, t) {
  (pi = e),
    (Vs = an = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (xe = !0), (e.firstContext = null));
}
function De(e) {
  var t = e._currentValue;
  if (Vs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), an === null)) {
      if (pi === null) throw Error(P(308));
      (an = e), (pi.dependencies = { lanes: 0, firstContext: e });
    } else an = an.next = e;
  return t;
}
var Bt = null;
function Gs(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function Wu(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Gs(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    ot(e, r)
  );
}
function ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var mt = !1;
function Ws(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function it(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      ot(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Gs(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    ot(e, n)
  );
}
function Wr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Is(e, n);
  }
}
function Zo(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function hi(e, t, n, r) {
  var i = e.updateQueue;
  mt = !1;
  var l = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var o = a,
      f = o.next;
    (o.next = null), s === null ? (l = f) : (s.next = f), (s = o);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (a = p.lastBaseUpdate),
      a !== s &&
        (a === null ? (p.firstBaseUpdate = f) : (a.next = f),
        (p.lastBaseUpdate = o)));
  }
  if (l !== null) {
    var m = i.baseState;
    (s = 0), (p = f = o = null), (a = l);
    do {
      var v = a.lane,
        g = a.eventTime;
      if ((r & v) === v) {
        p !== null &&
          (p = p.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            x = a;
          switch (((v = t), (g = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                m = y.call(g, m, v);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (v = typeof y == "function" ? y.call(g, m, v) : y),
                v == null)
              )
                break e;
              m = J({}, m, v);
              break e;
            case 2:
              mt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [a]) : v.push(a));
      } else
        (g = {
          eventTime: g,
          lane: v,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          p === null ? ((f = p = g), (o = m)) : (p = p.next = g),
          (s |= v);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (v = a),
          (a = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (o = m),
      (i.baseState = o),
      (i.firstBaseUpdate = f),
      (i.lastBaseUpdate = p),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (bt |= s), (e.lanes = s), (e.memoizedState = m);
  }
}
function ea(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(P(191, i));
        i.call(r);
      }
    }
}
var wr = {},
  Ke = Ot(wr),
  or = Ot(wr),
  ar = Ot(wr);
function $t(e) {
  if (e === wr) throw Error(P(174));
  return e;
}
function bs(e, t) {
  switch ((b(ar, t), b(or, e), b(Ke, wr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ml(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ml(t, e));
  }
  Q(Ke), b(Ke, t);
}
function En() {
  Q(Ke), Q(or), Q(ar);
}
function Yu(e) {
  $t(ar.current);
  var t = $t(Ke.current),
    n = Ml(t, e.type);
  t !== n && (b(or, e), b(Ke, n));
}
function Ys(e) {
  or.current === e && (Q(Ke), Q(or));
}
var K = Ot(0);
function mi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var sl = [];
function Qs() {
  for (var e = 0; e < sl.length; e++)
    sl[e]._workInProgressVersionPrimary = null;
  sl.length = 0;
}
var br = ut.ReactCurrentDispatcher,
  ol = ut.ReactCurrentBatchConfig,
  Wt = 0,
  q = null,
  re = null,
  le = null,
  vi = !1,
  Wn = !1,
  ur = 0,
  Zf = 0;
function ce() {
  throw Error(P(321));
}
function Xs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ge(e[n], t[n])) return !1;
  return !0;
}
function Ks(e, t, n, r, i, l) {
  if (
    ((Wt = l),
    (q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (br.current = e === null || e.memoizedState === null ? rp : ip),
    (e = n(r, i)),
    Wn)
  ) {
    l = 0;
    do {
      if (((Wn = !1), (ur = 0), 25 <= l)) throw Error(P(301));
      (l += 1),
        (le = re = null),
        (t.updateQueue = null),
        (br.current = lp),
        (e = n(r, i));
    } while (Wn);
  }
  if (
    ((br.current = gi),
    (t = re !== null && re.next !== null),
    (Wt = 0),
    (le = re = q = null),
    (vi = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function qs() {
  var e = ur !== 0;
  return (ur = 0), e;
}
function be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (q.memoizedState = le = e) : (le = le.next = e), le;
}
function Re() {
  if (re === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = le === null ? q.memoizedState : le.next;
  if (t !== null) (le = t), (re = e);
  else {
    if (e === null) throw Error(P(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      le === null ? (q.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function dr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function al(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = re,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = l.next), (l.next = s);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var a = (s = null),
      o = null,
      f = l;
    do {
      var p = f.lane;
      if ((Wt & p) === p)
        o !== null &&
          (o = o.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var m = {
          lane: p,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        o === null ? ((a = o = m), (s = r)) : (o = o.next = m),
          (q.lanes |= p),
          (bt |= p);
      }
      f = f.next;
    } while (f !== null && f !== l);
    o === null ? (s = r) : (o.next = a),
      Ge(r, t.memoizedState) || (xe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = o),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (q.lanes |= l), (bt |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ul(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== i);
    Ge(l, t.memoizedState) || (xe = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Qu() {}
function Xu(e, t) {
  var n = q,
    r = Re(),
    i = t(),
    l = !Ge(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (xe = !0)),
    (r = r.queue),
    Js(Ju.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      cr(9, qu.bind(null, n, r, i, t), void 0, null),
      se === null)
    )
      throw Error(P(349));
    Wt & 30 || Ku(n, t, i);
  }
  return i;
}
function Ku(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Zu(t) && ed(e);
}
function Ju(e, t, n) {
  return n(function () {
    Zu(t) && ed(e);
  });
}
function Zu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ge(e, n);
  } catch {
    return !0;
  }
}
function ed(e) {
  var t = ot(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function ta(e) {
  var t = be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: dr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = np.bind(null, q, e)),
    [t.memoizedState, e]
  );
}
function cr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function td() {
  return Re().memoizedState;
}
function Yr(e, t, n, r) {
  var i = be();
  (q.flags |= e),
    (i.memoizedState = cr(1 | t, n, void 0, r === void 0 ? null : r));
}
function zi(e, t, n, r) {
  var i = Re();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (re !== null) {
    var s = re.memoizedState;
    if (((l = s.destroy), r !== null && Xs(r, s.deps))) {
      i.memoizedState = cr(t, n, l, r);
      return;
    }
  }
  (q.flags |= e), (i.memoizedState = cr(1 | t, n, l, r));
}
function na(e, t) {
  return Yr(8390656, 8, e, t);
}
function Js(e, t) {
  return zi(2048, 8, e, t);
}
function nd(e, t) {
  return zi(4, 2, e, t);
}
function rd(e, t) {
  return zi(4, 4, e, t);
}
function id(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ld(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), zi(4, 4, id.bind(null, t, e), n)
  );
}
function Zs() {}
function sd(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function od(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ad(e, t, n) {
  return Wt & 21
    ? (Ge(n, t) || ((n = pu()), (q.lanes |= n), (bt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (xe = !0)), (e.memoizedState = n));
}
function ep(e, t) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ol.transition;
  ol.transition = {};
  try {
    e(!1), t();
  } finally {
    (H = n), (ol.transition = r);
  }
}
function ud() {
  return Re().memoizedState;
}
function tp(e, t, n) {
  var r = Pt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dd(e))
  )
    cd(t, n);
  else if (((n = Wu(e, t, n, r)), n !== null)) {
    var i = ve();
    Ue(n, e, r, i), fd(n, t, r);
  }
}
function np(e, t, n) {
  var r = Pt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dd(e)) cd(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = l(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Ge(a, s))) {
          var o = t.interleaved;
          o === null
            ? ((i.next = i), Gs(t))
            : ((i.next = o.next), (o.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Wu(e, t, i, r)),
      n !== null && ((i = ve()), Ue(n, e, r, i), fd(n, t, r));
  }
}
function dd(e) {
  var t = e.alternate;
  return e === q || (t !== null && t === q);
}
function cd(e, t) {
  Wn = vi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Is(e, n);
  }
}
var gi = {
    readContext: De,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1,
  },
  rp = {
    readContext: De,
    useCallback: function (e, t) {
      return (be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: na,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Yr(4194308, 4, id.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Yr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = tp.bind(null, q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ta,
    useDebugValue: Zs,
    useDeferredValue: function (e) {
      return (be().memoizedState = e);
    },
    useTransition: function () {
      var e = ta(!1),
        t = e[0];
      return (e = ep.bind(null, e[1])), (be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = q,
        i = be();
      if (X) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), se === null)) throw Error(P(349));
        Wt & 30 || Ku(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        na(Ju.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        cr(9, qu.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = be(),
        t = se.identifierPrefix;
      if (X) {
        var n = rt,
          r = nt;
        (n = (r & ~(1 << (32 - He(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ur++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Zf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ip = {
    readContext: De,
    useCallback: sd,
    useContext: De,
    useEffect: Js,
    useImperativeHandle: ld,
    useInsertionEffect: nd,
    useLayoutEffect: rd,
    useMemo: od,
    useReducer: al,
    useRef: td,
    useState: function () {
      return al(dr);
    },
    useDebugValue: Zs,
    useDeferredValue: function (e) {
      var t = Re();
      return ad(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = al(dr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Qu,
    useSyncExternalStore: Xu,
    useId: ud,
    unstable_isNewReconciler: !1,
  },
  lp = {
    readContext: De,
    useCallback: sd,
    useContext: De,
    useEffect: Js,
    useImperativeHandle: ld,
    useInsertionEffect: nd,
    useLayoutEffect: rd,
    useMemo: od,
    useReducer: ul,
    useRef: td,
    useState: function () {
      return ul(dr);
    },
    useDebugValue: Zs,
    useDeferredValue: function (e) {
      var t = Re();
      return re === null ? (t.memoizedState = e) : ad(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = ul(dr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Qu,
    useSyncExternalStore: Xu,
    useId: ud,
    unstable_isNewReconciler: !1,
  };
function Be(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Jl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Oi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Kt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = Pt(e),
      l = it(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = kt(e, l, i)),
      t !== null && (Ue(t, e, i, r), Wr(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = Pt(e),
      l = it(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = kt(e, l, i)),
      t !== null && (Ue(t, e, i, r), Wr(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ve(),
      r = Pt(e),
      i = it(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = kt(e, i, r)),
      t !== null && (Ue(t, e, r, n), Wr(t, e, r));
  },
};
function ra(e, t, n, r, i, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !rr(n, r) || !rr(i, l)
        : !0
  );
}
function pd(e, t, n) {
  var r = !1,
    i = Mt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = De(l))
      : ((i = Ee(t) ? Ut : he.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? wn(e, i) : Mt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Oi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function ia(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Oi.enqueueReplaceState(t, t.state, null);
}
function Zl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ws(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = De(l))
    : ((l = Ee(t) ? Ut : he.current), (i.context = wn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Jl(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Oi.enqueueReplaceState(i, i.state, null),
      hi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Cn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Nc(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function dl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function es(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sp = typeof WeakMap == "function" ? WeakMap : Map;
function hd(e, t, n) {
  (n = it(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      wi || ((wi = !0), (ds = r)), es(e, t);
    }),
    n
  );
}
function md(e, t, n) {
  (n = it(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        es(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        es(e, t),
          typeof r != "function" &&
            (Lt === null ? (Lt = new Set([this])) : Lt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function la(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sp();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = xp.bind(null, e, t, n)), t.then(e, e));
}
function sa(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function oa(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = it(-1, 1)), (t.tag = 2), kt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var op = ut.ReactCurrentOwner,
  xe = !1;
function me(e, t, n, r) {
  t.child = e === null ? Gu(t, null, n, r) : Sn(t, e.child, n, r);
}
function aa(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    mn(t, i),
    (r = Ks(e, t, n, r, l, i)),
    (n = qs()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        at(e, t, i))
      : (X && n && Fs(t), (t.flags |= 1), me(e, t, r, i), t.child)
  );
}
function ua(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !oo(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), vd(e, t, l, r, i))
      : ((e = qr(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : rr), n(s, r) && e.ref === t.ref)
    )
      return at(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = _t(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vd(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (rr(l, r) && e.ref === t.ref)
      if (((xe = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (xe = !0);
      else return (t.lanes = e.lanes), at(e, t, i);
  }
  return ts(e, t, n, r, i);
}
function gd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(dn, Te),
        (Te |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(dn, Te),
          (Te |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        b(dn, Te),
        (Te |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(dn, Te),
      (Te |= r);
  return me(e, t, i, n), t.child;
}
function yd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ts(e, t, n, r, i) {
  var l = Ee(n) ? Ut : he.current;
  return (
    (l = wn(t, l)),
    mn(t, i),
    (n = Ks(e, t, n, r, l, i)),
    (r = qs()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        at(e, t, i))
      : (X && r && Fs(t), (t.flags |= 1), me(e, t, n, i), t.child)
  );
}
function da(e, t, n, r, i) {
  if (Ee(n)) {
    var l = !0;
    ui(t);
  } else l = !1;
  if ((mn(t, i), t.stateNode === null))
    Qr(e, t), pd(t, n, r), Zl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var o = s.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = De(f))
      : ((f = Ee(n) ? Ut : he.current), (f = wn(t, f)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || o !== f) && ia(t, s, r, f)),
      (mt = !1);
    var v = t.memoizedState;
    (s.state = v),
      hi(t, r, s, i),
      (o = t.memoizedState),
      a !== r || v !== o || Se.current || mt
        ? (typeof p == "function" && (Jl(t, n, p, r), (o = t.memoizedState)),
          (a = mt || ra(t, n, a, r, v, o, f))
            ? (m ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = o)),
          (s.props = r),
          (s.state = o),
          (s.context = f),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      bu(e, t),
      (a = t.memoizedProps),
      (f = t.type === t.elementType ? a : Be(t.type, a)),
      (s.props = f),
      (m = t.pendingProps),
      (v = s.context),
      (o = n.contextType),
      typeof o == "object" && o !== null
        ? (o = De(o))
        : ((o = Ee(n) ? Ut : he.current), (o = wn(t, o)));
    var g = n.getDerivedStateFromProps;
    (p =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== m || v !== o) && ia(t, s, r, o)),
      (mt = !1),
      (v = t.memoizedState),
      (s.state = v),
      hi(t, r, s, i);
    var y = t.memoizedState;
    a !== m || v !== y || Se.current || mt
      ? (typeof g == "function" && (Jl(t, n, g, r), (y = t.memoizedState)),
        (f = mt || ra(t, n, f, r, v, y, o) || !1)
          ? (p ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, o),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, o)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = o),
        (r = f))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ns(e, t, n, r, l, i);
}
function ns(e, t, n, r, i, l) {
  yd(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Xo(t, n, !1), at(e, t, l);
  (r = t.stateNode), (op.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Sn(t, e.child, null, l)), (t.child = Sn(t, null, a, l)))
      : me(e, t, a, l),
    (t.memoizedState = r.state),
    i && Xo(t, n, !0),
    t.child
  );
}
function wd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qo(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qo(e, t.context, !1),
    bs(e, t.containerInfo);
}
function ca(e, t, n, r, i) {
  return xn(), $s(i), (t.flags |= 256), me(e, t, n, r), t.child;
}
var rs = { dehydrated: null, treeContext: null, retryLane: 0 };
function is(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xd(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    b(K, i & 1),
    e === null)
  )
    return (
      Kl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = Ri(s, r, 0, null)),
              (e = Ht(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = is(n)),
              (t.memoizedState = rs),
              e)
            : eo(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return ap(e, t, s, r, a, i, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var o = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = o),
          (t.deletions = null))
        : ((r = _t(i, o)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (l = _t(a, l)) : ((l = Ht(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? is(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = rs),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = _t(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function eo(e, t) {
  return (
    (t = Ri({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Or(e, t, n, r) {
  return (
    r !== null && $s(r),
    Sn(t, e.child, null, n),
    (e = eo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ap(e, t, n, r, i, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = dl(Error(P(422)))), Or(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (i = t.mode),
          (r = Ri({ mode: "visible", children: r.children }, i, 0, null)),
          (l = Ht(l, i, s, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && Sn(t, e.child, null, s),
          (t.child.memoizedState = is(s)),
          (t.memoizedState = rs),
          l);
  if (!(t.mode & 1)) return Or(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(P(419))), (r = dl(l, r, void 0)), Or(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), xe || a)) {
    if (((r = se), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), ot(e, i), Ue(r, e, i, -1));
    }
    return so(), (r = dl(Error(P(421)))), Or(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Sp.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (ke = jt(i.nextSibling)),
      (Le = t),
      (X = !0),
      (Ve = null),
      e !== null &&
        ((Ne[ze++] = nt),
        (Ne[ze++] = rt),
        (Ne[ze++] = Gt),
        (nt = e.id),
        (rt = e.overflow),
        (Gt = t)),
      (t = eo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function fa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ql(e.return, t, n);
}
function cl(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function Sd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((me(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fa(e, n, t);
        else if (e.tag === 19) fa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && mi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          cl(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && mi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        cl(t, !0, n, null, l);
        break;
      case "together":
        cl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function at(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (bt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function up(e, t, n) {
  switch (t.tag) {
    case 3:
      wd(t), xn();
      break;
    case 5:
      Yu(t);
      break;
    case 1:
      Ee(t.type) && ui(t);
      break;
    case 4:
      bs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      b(fi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? xd(e, t, n)
            : (b(K, K.current & 1),
              (e = at(e, t, n)),
              e !== null ? e.sibling : null);
      b(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        b(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gd(e, t, n);
  }
  return at(e, t, n);
}
var Ed, ls, Cd, Td;
Ed = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ls = function () {};
Cd = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), $t(Ke.current);
    var l = null;
    switch (n) {
      case "input":
        (i = Ll(e, i)), (r = Ll(e, r)), (l = []);
        break;
      case "select":
        (i = J({}, i, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = Il(e, i)), (r = Il(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = oi);
    }
    Nl(n, r);
    var s;
    n = null;
    for (f in i)
      if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && i[f] != null)
        if (f === "style") {
          var a = i[f];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (Kn.hasOwnProperty(f)
              ? l || (l = [])
              : (l = l || []).push(f, null));
    for (f in r) {
      var o = r[f];
      if (
        ((a = i != null ? i[f] : void 0),
        r.hasOwnProperty(f) && o !== a && (o != null || a != null))
      )
        if (f === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (o && o.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in o)
              o.hasOwnProperty(s) &&
                a[s] !== o[s] &&
                (n || (n = {}), (n[s] = o[s]));
          } else n || (l || (l = []), l.push(f, n)), (n = o);
        else
          f === "dangerouslySetInnerHTML"
            ? ((o = o ? o.__html : void 0),
              (a = a ? a.__html : void 0),
              o != null && a !== o && (l = l || []).push(f, o))
            : f === "children"
              ? (typeof o != "string" && typeof o != "number") ||
                (l = l || []).push(f, "" + o)
              : f !== "suppressContentEditableWarning" &&
                f !== "suppressHydrationWarning" &&
                (Kn.hasOwnProperty(f)
                  ? (o != null && f === "onScroll" && Y("scroll", e),
                    l || a === o || (l = []))
                  : (l = l || []).push(f, o));
    }
    n && (l = l || []).push("style", n);
    var f = l;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Td = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function On(e, t) {
  if (!X)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function dp(e, t, n) {
  var r = t.pendingProps;
  switch ((Bs(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return fe(t), null;
    case 1:
      return Ee(t.type) && ai(), fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        En(),
        Q(Se),
        Q(he),
        Qs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Nr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ve !== null && (ps(Ve), (Ve = null)))),
        ls(e, t),
        fe(t),
        null
      );
    case 5:
      Ys(t);
      var i = $t(ar.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cd(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return fe(t), null;
        }
        if (((e = $t(Ke.current)), Nr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Ye] = t), (r[sr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Bn.length; i++) Y(Bn[i], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y("error", r), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              So(r, l), Y("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                Y("invalid", r);
              break;
            case "textarea":
              Co(r, l), Y("invalid", r);
          }
          Nl(n, l), (i = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Mr(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Mr(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Kn.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Y("scroll", r);
            }
          switch (n) {
            case "input":
              Cr(r), Eo(r, l, !0);
              break;
            case "textarea":
              Cr(r), To(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = oi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ja(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ye] = t),
            (e[sr] = r),
            Ed(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = zl(n, r)), n)) {
              case "dialog":
                Y("cancel", e), Y("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Bn.length; i++) Y(Bn[i], e);
                i = r;
                break;
              case "source":
                Y("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Y("error", e), Y("load", e), (i = r);
                break;
              case "details":
                Y("toggle", e), (i = r);
                break;
              case "input":
                So(e, r), (i = Ll(e, r)), Y("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = J({}, r, { value: void 0 })),
                  Y("invalid", e);
                break;
              case "textarea":
                Co(e, r), (i = Il(e, r)), Y("invalid", e);
                break;
              default:
                i = r;
            }
            Nl(n, i), (a = i);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var o = a[l];
                l === "style"
                  ? tu(e, o)
                  : l === "dangerouslySetInnerHTML"
                    ? ((o = o ? o.__html : void 0), o != null && Za(e, o))
                    : l === "children"
                      ? typeof o == "string"
                        ? (n !== "textarea" || o !== "") && qn(e, o)
                        : typeof o == "number" && qn(e, "" + o)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (Kn.hasOwnProperty(l)
                          ? o != null && l === "onScroll" && Y("scroll", e)
                          : o != null && Ts(e, l, o, s));
              }
            switch (n) {
              case "input":
                Cr(e), Eo(e, r, !1);
                break;
              case "textarea":
                Cr(e), To(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + It(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? cn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      cn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = oi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) Td(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = $t(ar.current)), $t(Ke.current), Nr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ye] = t),
            (l = r.nodeValue !== n) && ((e = Le), e !== null))
          )
            switch (e.tag) {
              case 3:
                Mr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Mr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ye] = t),
            (t.stateNode = r);
      }
      return fe(t), null;
    case 13:
      if (
        (Q(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && ke !== null && t.mode & 1 && !(t.flags & 128))
          Hu(), xn(), (t.flags |= 98560), (l = !1);
        else if (((l = Nr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(P(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(P(317));
            l[Ye] = t;
          } else
            xn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          fe(t), (l = !1);
        } else Ve !== null && (ps(Ve), (Ve = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? ie === 0 && (ie = 3) : so())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null);
    case 4:
      return (
        En(), ls(e, t), e === null && ir(t.stateNode.containerInfo), fe(t), null
      );
    case 10:
      return Us(t.type._context), fe(t), null;
    case 17:
      return Ee(t.type) && ai(), fe(t), null;
    case 19:
      if ((Q(K), (l = t.memoizedState), l === null)) return fe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) On(l, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = mi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    On(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return b(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            ee() > Tn &&
            ((t.flags |= 128), (r = !0), On(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = mi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              On(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !X)
            )
              return fe(t), null;
          } else
            2 * ee() - l.renderingStartTime > Tn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), On(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = ee()),
          (t.sibling = null),
          (n = K.current),
          b(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (fe(t), null);
    case 22:
    case 23:
      return (
        lo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Te & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function cp(e, t) {
  switch ((Bs(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && ai(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        En(),
        Q(Se),
        Q(he),
        Qs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ys(t), null;
    case 13:
      if ((Q(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(P(340));
        xn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Q(K), null;
    case 4:
      return En(), null;
    case 10:
      return Us(t.type._context), null;
    case 22:
    case 23:
      return lo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ar = !1,
  pe = !1,
  fp = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function ss(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var pa = !1;
function pp(e, t) {
  if (((Ul = ii), (e = _u()), Rs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            o = -1,
            f = 0,
            p = 0,
            m = e,
            v = null;
          t: for (;;) {
            for (
              var g;
              m !== n || (i !== 0 && m.nodeType !== 3) || (a = s + i),
                m !== l || (r !== 0 && m.nodeType !== 3) || (o = s + r),
                m.nodeType === 3 && (s += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (v = m), (m = g);
            for (;;) {
              if (m === e) break t;
              if (
                (v === n && ++f === i && (a = s),
                v === l && ++p === r && (o = s),
                (g = m.nextSibling) !== null)
              )
                break;
              (m = v), (v = m.parentNode);
            }
            m = g;
          }
          n = a === -1 || o === -1 ? null : { start: a, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Gl = { focusedElem: e, selectionRange: n }, ii = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    j = y.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Be(t.type, x),
                      j,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (w) {
          Z(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (y = pa), (pa = !1), y;
}
function bn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && ss(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ai(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function os(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function jd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), jd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ye], delete t[sr], delete t[Yl], delete t[Xf], delete t[Kf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function kd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ha(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function as(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = oi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (as(e, t, n), e = e.sibling; e !== null; ) as(e, t, n), (e = e.sibling);
}
function us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (us(e, t, n), e = e.sibling; e !== null; ) us(e, t, n), (e = e.sibling);
}
var oe = null,
  $e = !1;
function ft(e, t, n) {
  for (n = n.child; n !== null; ) Ld(e, t, n), (n = n.sibling);
}
function Ld(e, t, n) {
  if (Xe && typeof Xe.onCommitFiberUnmount == "function")
    try {
      Xe.onCommitFiberUnmount(Li, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || un(n, t);
    case 6:
      var r = oe,
        i = $e;
      (oe = null),
        ft(e, t, n),
        (oe = r),
        ($e = i),
        oe !== null &&
          ($e
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        ($e
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? il(e.parentNode, n)
              : e.nodeType === 1 && il(e, n),
            tr(e))
          : il(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (i = $e),
        (oe = n.stateNode.containerInfo),
        ($e = !0),
        ft(e, t, n),
        (oe = r),
        ($e = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            s = l.destroy;
          (l = l.tag),
            s !== void 0 && (l & 2 || l & 4) && ss(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      ft(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (un(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Z(n, t, a);
        }
      ft(e, t, n);
      break;
    case 21:
      ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), ft(e, t, n), (pe = r))
        : ft(e, t, n);
      break;
    default:
      ft(e, t, n);
  }
}
function ma(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new fp()),
      t.forEach(function (r) {
        var i = Ep.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Fe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (oe = a.stateNode), ($e = !1);
              break e;
            case 3:
              (oe = a.stateNode.containerInfo), ($e = !0);
              break e;
            case 4:
              (oe = a.stateNode.containerInfo), ($e = !0);
              break e;
          }
          a = a.return;
        }
        if (oe === null) throw Error(P(160));
        Ld(l, s, i), (oe = null), ($e = !1);
        var o = i.alternate;
        o !== null && (o.return = null), (i.return = null);
      } catch (f) {
        Z(i, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pd(t, e), (t = t.sibling);
}
function Pd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Fe(t, e), We(e), r & 4)) {
        try {
          bn(3, e, e.return), Ai(3, e);
        } catch (x) {
          Z(e, e.return, x);
        }
        try {
          bn(5, e, e.return);
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 1:
      Fe(t, e), We(e), r & 512 && n !== null && un(n, n.return);
      break;
    case 5:
      if (
        (Fe(t, e),
        We(e),
        r & 512 && n !== null && un(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          qn(i, "");
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          a = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && Ka(i, l),
              zl(a, s);
            var f = zl(a, l);
            for (s = 0; s < o.length; s += 2) {
              var p = o[s],
                m = o[s + 1];
              p === "style"
                ? tu(i, m)
                : p === "dangerouslySetInnerHTML"
                  ? Za(i, m)
                  : p === "children"
                    ? qn(i, m)
                    : Ts(i, p, m, f);
            }
            switch (a) {
              case "input":
                Pl(i, l);
                break;
              case "textarea":
                qa(i, l);
                break;
              case "select":
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var g = l.value;
                g != null
                  ? cn(i, !!l.multiple, g, !1)
                  : v !== !!l.multiple &&
                    (l.defaultValue != null
                      ? cn(i, !!l.multiple, l.defaultValue, !0)
                      : cn(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[sr] = l;
          } catch (x) {
            Z(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Fe(t, e), We(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Fe(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          tr(t.containerInfo);
        } catch (x) {
          Z(e, e.return, x);
        }
      break;
    case 4:
      Fe(t, e), We(e);
      break;
    case 13:
      Fe(t, e),
        We(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ro = ee())),
        r & 4 && ma(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (f = pe) || p), Fe(t, e), (pe = f)) : Fe(t, e),
        We(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !p && e.mode & 1)
        )
          for (A = e, p = e.child; p !== null; ) {
            for (m = A = p; A !== null; ) {
              switch (((v = A), (g = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  bn(4, v, v.return);
                  break;
                case 1:
                  un(v, v.return);
                  var y = v.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (x) {
                      Z(r, n, x);
                    }
                  }
                  break;
                case 5:
                  un(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ga(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = v), (A = g)) : ga(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (i = m.stateNode),
                  f
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = m.stateNode),
                      (o = m.memoizedProps.style),
                      (s =
                        o != null && o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (a.style.display = eu("display", s)));
              } catch (x) {
                Z(e, e.return, x);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = f ? "" : m.memoizedProps;
              } catch (x) {
                Z(e, e.return, x);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Fe(t, e), We(e), r & 4 && ma(e);
      break;
    case 21:
      break;
    default:
      Fe(t, e), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (qn(i, ""), (r.flags &= -33));
          var l = ha(e);
          us(e, l, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = ha(e);
          as(e, a, s);
          break;
        default:
          throw Error(P(161));
      }
    } catch (o) {
      Z(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hp(e, t, n) {
  (A = e), _d(e);
}
function _d(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      l = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ar;
      if (!s) {
        var a = i.alternate,
          o = (a !== null && a.memoizedState !== null) || pe;
        a = Ar;
        var f = pe;
        if (((Ar = s), (pe = o) && !f))
          for (A = i; A !== null; )
            (s = A),
              (o = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ya(i)
                : o !== null
                  ? ((o.return = s), (A = o))
                  : ya(i);
        for (; l !== null; ) (A = l), _d(l), (l = l.sibling);
        (A = i), (Ar = a), (pe = f);
      }
      va(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (A = l)) : va(e);
  }
}
function va(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Ai(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && ea(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ea(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var o = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o.autoFocus && n.focus();
                    break;
                  case "img":
                    o.src && (n.src = o.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var p = f.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && tr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        pe || (t.flags & 512 && os(t));
      } catch (v) {
        Z(t, t.return, v);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function ga(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function ya(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ai(4, t);
          } catch (o) {
            Z(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              Z(t, i, o);
            }
          }
          var l = t.return;
          try {
            os(t);
          } catch (o) {
            Z(t, l, o);
          }
          break;
        case 5:
          var s = t.return;
          try {
            os(t);
          } catch (o) {
            Z(t, s, o);
          }
      }
    } catch (o) {
      Z(t, t.return, o);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var mp = Math.ceil,
  yi = ut.ReactCurrentDispatcher,
  to = ut.ReactCurrentOwner,
  Ae = ut.ReactCurrentBatchConfig,
  $ = 0,
  se = null,
  ne = null,
  ae = 0,
  Te = 0,
  dn = Ot(0),
  ie = 0,
  fr = null,
  bt = 0,
  Di = 0,
  no = 0,
  Yn = null,
  we = null,
  ro = 0,
  Tn = 1 / 0,
  et = null,
  wi = !1,
  ds = null,
  Lt = null,
  Dr = !1,
  xt = null,
  xi = 0,
  Qn = 0,
  cs = null,
  Xr = -1,
  Kr = 0;
function ve() {
  return $ & 6 ? ee() : Xr !== -1 ? Xr : (Xr = ee());
}
function Pt(e) {
  return e.mode & 1
    ? $ & 2 && ae !== 0
      ? ae & -ae
      : Jf.transition !== null
        ? (Kr === 0 && (Kr = pu()), Kr)
        : ((e = H),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xu(e.type))),
          e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (cs = null), Error(P(185)));
  vr(e, n, r),
    (!($ & 2) || e !== se) &&
      (e === se && (!($ & 2) && (Di |= n), ie === 4 && gt(e, ae)),
      Ce(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((Tn = ee() + 500), Ni && At()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  qc(e, t);
  var r = ri(e, e === se ? ae : 0);
  if (r === 0)
    n !== null && Lo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Lo(n), t === 1))
      e.tag === 0 ? qf(wa.bind(null, e)) : Bu(wa.bind(null, e)),
        Yf(function () {
          !($ & 6) && At();
        }),
        (n = null);
    else {
      switch (hu(r)) {
        case 1:
          n = _s;
          break;
        case 4:
          n = cu;
          break;
        case 16:
          n = ni;
          break;
        case 536870912:
          n = fu;
          break;
        default:
          n = ni;
      }
      n = Rd(n, Id.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Id(e, t) {
  if (((Xr = -1), (Kr = 0), $ & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (vn() && e.callbackNode !== n) return null;
  var r = ri(e, e === se ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Si(e, r);
  else {
    t = r;
    var i = $;
    $ |= 2;
    var l = Nd();
    (se !== e || ae !== t) && ((et = null), (Tn = ee() + 500), Vt(e, t));
    do
      try {
        yp();
        break;
      } catch (a) {
        Md(e, a);
      }
    while (!0);
    Hs(),
      (yi.current = l),
      ($ = i),
      ne !== null ? (t = 0) : ((se = null), (ae = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Fl(e)), i !== 0 && ((r = i), (t = fs(e, i)))), t === 1)
    )
      throw ((n = fr), Vt(e, 0), gt(e, r), Ce(e, ee()), n);
    if (t === 6) gt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !vp(i) &&
          ((t = Si(e, r)),
          t === 2 && ((l = Fl(e)), l !== 0 && ((r = l), (t = fs(e, l)))),
          t === 1))
      )
        throw ((n = fr), Vt(e, 0), gt(e, r), Ce(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Rt(e, we, et);
          break;
        case 3:
          if (
            (gt(e, r), (r & 130023424) === r && ((t = ro + 500 - ee()), 10 < t))
          ) {
            if (ri(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ve(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = bl(Rt.bind(null, e, we, et), t);
            break;
          }
          Rt(e, we, et);
          break;
        case 4:
          if ((gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - He(r);
            (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
          }
          if (
            ((r = i),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * mp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = bl(Rt.bind(null, e, we, et), r);
            break;
          }
          Rt(e, we, et);
          break;
        case 5:
          Rt(e, we, et);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Ce(e, ee()), e.callbackNode === n ? Id.bind(null, e) : null;
}
function fs(e, t) {
  var n = Yn;
  return (
    e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256),
    (e = Si(e, t)),
    e !== 2 && ((t = we), (we = n), t !== null && ps(t)),
    e
  );
}
function ps(e) {
  we === null ? (we = e) : we.push.apply(we, e);
}
function vp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!Ge(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function gt(e, t) {
  for (
    t &= ~no,
      t &= ~Di,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - He(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function wa(e) {
  if ($ & 6) throw Error(P(327));
  vn();
  var t = ri(e, 0);
  if (!(t & 1)) return Ce(e, ee()), null;
  var n = Si(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fl(e);
    r !== 0 && ((t = r), (n = fs(e, r)));
  }
  if (n === 1) throw ((n = fr), Vt(e, 0), gt(e, t), Ce(e, ee()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rt(e, we, et),
    Ce(e, ee()),
    null
  );
}
function io(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && ((Tn = ee() + 500), Ni && At());
  }
}
function Yt(e) {
  xt !== null && xt.tag === 0 && !($ & 6) && vn();
  var t = $;
  $ |= 1;
  var n = Ae.transition,
    r = H;
  try {
    if (((Ae.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (Ae.transition = n), ($ = t), !($ & 6) && At();
  }
}
function lo() {
  (Te = dn.current), Q(dn);
}
function Vt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), bf(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((Bs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ai();
          break;
        case 3:
          En(), Q(Se), Q(he), Qs();
          break;
        case 5:
          Ys(r);
          break;
        case 4:
          En();
          break;
        case 13:
          Q(K);
          break;
        case 19:
          Q(K);
          break;
        case 10:
          Us(r.type._context);
          break;
        case 22:
        case 23:
          lo();
      }
      n = n.return;
    }
  if (
    ((se = e),
    (ne = e = _t(e.current, null)),
    (ae = Te = t),
    (ie = 0),
    (fr = null),
    (no = Di = bt = 0),
    (we = Yn = null),
    Bt !== null)
  ) {
    for (t = 0; t < Bt.length; t++)
      if (((n = Bt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Bt = null;
  }
  return e;
}
function Md(e, t) {
  do {
    var n = ne;
    try {
      if ((Hs(), (br.current = gi), vi)) {
        for (var r = q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        vi = !1;
      }
      if (
        ((Wt = 0),
        (le = re = q = null),
        (Wn = !1),
        (ur = 0),
        (to.current = null),
        n === null || n.return === null)
      ) {
        (ie = 1), (fr = t), (ne = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          a = n,
          o = t;
        if (
          ((t = ae),
          (a.flags |= 32768),
          o !== null && typeof o == "object" && typeof o.then == "function")
        ) {
          var f = o,
            p = a,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = p.alternate;
            v
              ? ((p.updateQueue = v.updateQueue),
                (p.memoizedState = v.memoizedState),
                (p.lanes = v.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var g = sa(s);
          if (g !== null) {
            (g.flags &= -257),
              oa(g, s, a, l, t),
              g.mode & 1 && la(l, f, t),
              (t = g),
              (o = f);
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              x.add(o), (t.updateQueue = x);
            } else y.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              la(l, f, t), so();
              break e;
            }
            o = Error(P(426));
          }
        } else if (X && a.mode & 1) {
          var j = sa(s);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              oa(j, s, a, l, t),
              $s(Cn(o, a));
            break e;
          }
        }
        (l = o = Cn(o, a)),
          ie !== 4 && (ie = 2),
          Yn === null ? (Yn = [l]) : Yn.push(l),
          (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var d = hd(l, o, t);
              Zo(l, d);
              break e;
            case 1:
              a = o;
              var c = l.type,
                h = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Lt === null || !Lt.has(h))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var w = md(l, a, t);
                Zo(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Od(n);
    } catch (S) {
      (t = S), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Nd() {
  var e = yi.current;
  return (yi.current = gi), e === null ? gi : e;
}
function so() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    se === null || (!(bt & 268435455) && !(Di & 268435455)) || gt(se, ae);
}
function Si(e, t) {
  var n = $;
  $ |= 2;
  var r = Nd();
  (se !== e || ae !== t) && ((et = null), Vt(e, t));
  do
    try {
      gp();
      break;
    } catch (i) {
      Md(e, i);
    }
  while (!0);
  if ((Hs(), ($ = n), (yi.current = r), ne !== null)) throw Error(P(261));
  return (se = null), (ae = 0), ie;
}
function gp() {
  for (; ne !== null; ) zd(ne);
}
function yp() {
  for (; ne !== null && !Hc(); ) zd(ne);
}
function zd(e) {
  var t = Dd(e.alternate, e, Te);
  (e.memoizedProps = e.pendingProps),
    t === null ? Od(e) : (ne = t),
    (to.current = null);
}
function Od(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cp(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (ne = null);
        return;
      }
    } else if (((n = dp(n, t, Te)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function Rt(e, t, n) {
  var r = H,
    i = Ae.transition;
  try {
    (Ae.transition = null), (H = 1), wp(e, t, n, r);
  } finally {
    (Ae.transition = i), (H = r);
  }
  return null;
}
function wp(e, t, n, r) {
  do vn();
  while (xt !== null);
  if ($ & 6) throw Error(P(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Jc(e, l),
    e === se && ((ne = se = null), (ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dr ||
      ((Dr = !0),
      Rd(ni, function () {
        return vn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Ae.transition), (Ae.transition = null);
    var s = H;
    H = 1;
    var a = $;
    ($ |= 4),
      (to.current = null),
      pp(e, n),
      Pd(n, e),
      Bf(Gl),
      (ii = !!Ul),
      (Gl = Ul = null),
      (e.current = n),
      hp(n),
      Uc(),
      ($ = a),
      (H = s),
      (Ae.transition = l);
  } else e.current = n;
  if (
    (Dr && ((Dr = !1), (xt = e), (xi = i)),
    (l = e.pendingLanes),
    l === 0 && (Lt = null),
    bc(n.stateNode),
    Ce(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (wi) throw ((wi = !1), (e = ds), (ds = null), e);
  return (
    xi & 1 && e.tag !== 0 && vn(),
    (l = e.pendingLanes),
    l & 1 ? (e === cs ? Qn++ : ((Qn = 0), (cs = e))) : (Qn = 0),
    At(),
    null
  );
}
function vn() {
  if (xt !== null) {
    var e = hu(xi),
      t = Ae.transition,
      n = H;
    try {
      if (((Ae.transition = null), (H = 16 > e ? 16 : e), xt === null))
        var r = !1;
      else {
        if (((e = xt), (xt = null), (xi = 0), $ & 6)) throw Error(P(331));
        var i = $;
        for ($ |= 4, A = e.current; A !== null; ) {
          var l = A,
            s = l.child;
          if (A.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var o = 0; o < a.length; o++) {
                var f = a[o];
                for (A = f; A !== null; ) {
                  var p = A;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bn(8, p, l);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (A = m);
                  else
                    for (; A !== null; ) {
                      p = A;
                      var v = p.sibling,
                        g = p.return;
                      if ((jd(p), p === f)) {
                        A = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = g), (A = v);
                        break;
                      }
                      A = g;
                    }
                }
              }
              var y = l.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var j = x.sibling;
                    (x.sibling = null), (x = j);
                  } while (x !== null);
                }
              }
              A = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (A = s);
          else
            e: for (; A !== null; ) {
              if (((l = A), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    bn(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                (d.return = l.return), (A = d);
                break e;
              }
              A = l.return;
            }
        }
        var c = e.current;
        for (A = c; A !== null; ) {
          s = A;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (A = h);
          else
            e: for (s = c; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ai(9, a);
                  }
                } catch (S) {
                  Z(a, a.return, S);
                }
              if (a === s) {
                A = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (A = w);
                break e;
              }
              A = a.return;
            }
        }
        if (
          (($ = i), At(), Xe && typeof Xe.onPostCommitFiberRoot == "function")
        )
          try {
            Xe.onPostCommitFiberRoot(Li, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (Ae.transition = t);
    }
  }
  return !1;
}
function xa(e, t, n) {
  (t = Cn(n, t)),
    (t = hd(e, t, 1)),
    (e = kt(e, t, 1)),
    (t = ve()),
    e !== null && (vr(e, 1, t), Ce(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) xa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lt === null || !Lt.has(r)))
        ) {
          (e = Cn(n, e)),
            (e = md(t, e, 1)),
            (t = kt(t, e, 1)),
            (e = ve()),
            t !== null && (vr(t, 1, e), Ce(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function xp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ae & n) === n &&
      (ie === 4 || (ie === 3 && (ae & 130023424) === ae && 500 > ee() - ro)
        ? Vt(e, 0)
        : (no |= n)),
    Ce(e, t);
}
function Ad(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = kr), (kr <<= 1), !(kr & 130023424) && (kr = 4194304))
      : (t = 1));
  var n = ve();
  (e = ot(e, t)), e !== null && (vr(e, t, n), Ce(e, n));
}
function Sp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ad(e, n);
}
function Ep(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), Ad(e, n);
}
var Dd;
Dd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (xe = !1), up(e, t, n);
      xe = !!(e.flags & 131072);
    }
  else (xe = !1), X && t.flags & 1048576 && $u(t, ci, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Qr(e, t), (e = t.pendingProps);
      var i = wn(t, he.current);
      mn(t, n), (i = Ks(null, t, r, e, i, n));
      var l = qs();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((l = !0), ui(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ws(t),
            (i.updater = Oi),
            (t.stateNode = i),
            (i._reactInternals = t),
            Zl(t, r, e, n),
            (t = ns(null, t, r, !0, l, n)))
          : ((t.tag = 0), X && l && Fs(t), me(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qr(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Tp(r)),
          (e = Be(r, e)),
          i)
        ) {
          case 0:
            t = ts(null, t, r, e, n);
            break e;
          case 1:
            t = da(null, t, r, e, n);
            break e;
          case 11:
            t = aa(null, t, r, e, n);
            break e;
          case 14:
            t = ua(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        ts(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        da(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((wd(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          bu(e, t),
          hi(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = Cn(Error(P(423)), t)), (t = ca(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Cn(Error(P(424)), t)), (t = ca(e, t, r, n, i));
            break e;
          } else
            for (
              ke = jt(t.stateNode.containerInfo.firstChild),
                Le = t,
                X = !0,
                Ve = null,
                n = Gu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((xn(), r === i)) {
            t = at(e, t, n);
            break e;
          }
          me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yu(t),
        e === null && Kl(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Wl(r, i) ? (s = null) : l !== null && Wl(r, l) && (t.flags |= 32),
        yd(e, t),
        me(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Kl(t), null;
    case 13:
      return xd(e, t, n);
    case 4:
      return (
        bs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Sn(t, null, r, n)) : me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        aa(e, t, r, i, n)
      );
    case 7:
      return me(e, t, t.pendingProps, n), t.child;
    case 8:
      return me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (s = i.value),
          b(fi, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (Ge(l.value, s)) {
            if (l.children === i.children && !Se.current) {
              t = at(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                s = l.child;
                for (var o = a.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (l.tag === 1) {
                      (o = it(-1, n & -n)), (o.tag = 2);
                      var f = l.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var p = f.pending;
                        p === null
                          ? (o.next = o)
                          : ((o.next = p.next), (p.next = o)),
                          (f.pending = o);
                      }
                    }
                    (l.lanes |= n),
                      (o = l.alternate),
                      o !== null && (o.lanes |= n),
                      ql(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  o = o.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(P(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  ql(s, n, t),
                  (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        me(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        mn(t, n),
        (i = De(i)),
        (r = r(i)),
        (t.flags |= 1),
        me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Be(r, t.pendingProps)),
        (i = Be(r.type, i)),
        ua(e, t, r, i, n)
      );
    case 15:
      return vd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        Qr(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), ui(t)) : (e = !1),
        mn(t, n),
        pd(t, r, i),
        Zl(t, r, i, n),
        ns(null, t, r, !0, e, n)
      );
    case 19:
      return Sd(e, t, n);
    case 22:
      return gd(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Rd(e, t) {
  return du(e, t);
}
function Cp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Oe(e, t, n, r) {
  return new Cp(e, t, n, r);
}
function oo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Tp(e) {
  if (typeof e == "function") return oo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ks)) return 11;
    if (e === Ls) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Oe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function qr(e, t, n, r, i, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) oo(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Zt:
        return Ht(n.children, i, l, t);
      case js:
        (s = 8), (i |= 8);
        break;
      case Cl:
        return (
          (e = Oe(12, n, t, i | 2)), (e.elementType = Cl), (e.lanes = l), e
        );
      case Tl:
        return (e = Oe(13, n, t, i)), (e.elementType = Tl), (e.lanes = l), e;
      case jl:
        return (e = Oe(19, n, t, i)), (e.elementType = jl), (e.lanes = l), e;
      case Ya:
        return Ri(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Wa:
              s = 10;
              break e;
            case ba:
              s = 9;
              break e;
            case ks:
              s = 11;
              break e;
            case Ls:
              s = 14;
              break e;
            case ht:
              (s = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Oe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Ht(e, t, n, r) {
  return (e = Oe(7, e, r, t)), (e.lanes = n), e;
}
function Ri(e, t, n, r) {
  return (
    (e = Oe(22, e, r, t)),
    (e.elementType = Ya),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fl(e, t, n) {
  return (e = Oe(6, e, null, t)), (e.lanes = n), e;
}
function pl(e, t, n) {
  return (
    (t = Oe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jp(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yi(0)),
    (this.expirationTimes = Yi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ao(e, t, n, r, i, l, s, a, o) {
  return (
    (e = new jp(e, t, n, a, o)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Oe(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ws(l),
    e
  );
}
function kp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Jt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fd(e) {
  if (!e) return Mt;
  e = e._reactInternals;
  e: {
    if (Kt(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return Fu(e, n, t);
  }
  return t;
}
function Bd(e, t, n, r, i, l, s, a, o) {
  return (
    (e = ao(n, r, !0, e, i, l, s, a, o)),
    (e.context = Fd(null)),
    (n = e.current),
    (r = ve()),
    (i = Pt(n)),
    (l = it(r, i)),
    (l.callback = t ?? null),
    kt(n, l, i),
    (e.current.lanes = i),
    vr(e, i, r),
    Ce(e, r),
    e
  );
}
function Fi(e, t, n, r) {
  var i = t.current,
    l = ve(),
    s = Pt(i);
  return (
    (n = Fd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = it(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = kt(i, t, s)),
    e !== null && (Ue(e, i, s, l), Wr(e, i, s)),
    s
  );
}
function Ei(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Sa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function uo(e, t) {
  Sa(e, t), (e = e.alternate) && Sa(e, t);
}
function Lp() {
  return null;
}
var $d =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function co(e) {
  this._internalRoot = e;
}
Bi.prototype.render = co.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Fi(e, t, null, null);
};
Bi.prototype.unmount = co.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yt(function () {
      Fi(null, e, null, null);
    }),
      (t[st] = null);
  }
};
function Bi(e) {
  this._internalRoot = e;
}
Bi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vt.length && t !== 0 && t < vt[n].priority; n++);
    vt.splice(n, 0, e), n === 0 && wu(e);
  }
};
function fo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $i(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ea() {}
function Pp(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var f = Ei(s);
        l.call(f);
      };
    }
    var s = Bd(t, r, e, 0, null, !1, !1, "", Ea);
    return (
      (e._reactRootContainer = s),
      (e[st] = s.current),
      ir(e.nodeType === 8 ? e.parentNode : e),
      Yt(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var f = Ei(o);
      a.call(f);
    };
  }
  var o = ao(e, 0, !1, null, null, !1, !1, "", Ea);
  return (
    (e._reactRootContainer = o),
    (e[st] = o.current),
    ir(e.nodeType === 8 ? e.parentNode : e),
    Yt(function () {
      Fi(t, o, n, r);
    }),
    o
  );
}
function Vi(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var o = Ei(s);
        a.call(o);
      };
    }
    Fi(t, s, e, i);
  } else s = Pp(n, t, e, i, r);
  return Ei(s);
}
mu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fn(t.pendingLanes);
        n !== 0 &&
          (Is(t, n | 1), Ce(t, ee()), !($ & 6) && ((Tn = ee() + 500), At()));
      }
      break;
    case 13:
      Yt(function () {
        var r = ot(e, 1);
        if (r !== null) {
          var i = ve();
          Ue(r, e, 1, i);
        }
      }),
        uo(e, 1);
  }
};
Ms = function (e) {
  if (e.tag === 13) {
    var t = ot(e, 134217728);
    if (t !== null) {
      var n = ve();
      Ue(t, e, 134217728, n);
    }
    uo(e, 134217728);
  }
};
vu = function (e) {
  if (e.tag === 13) {
    var t = Pt(e),
      n = ot(e, t);
    if (n !== null) {
      var r = ve();
      Ue(n, e, t, r);
    }
    uo(e, t);
  }
};
gu = function () {
  return H;
};
yu = function (e, t) {
  var n = H;
  try {
    return (H = e), t();
  } finally {
    H = n;
  }
};
Al = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Pl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Mi(r);
            if (!i) throw Error(P(90));
            Xa(r), Pl(r, i);
          }
        }
      }
      break;
    case "textarea":
      qa(e, n);
      break;
    case "select":
      (t = n.value), t != null && cn(e, !!n.multiple, t, !1);
  }
};
iu = io;
lu = Yt;
var _p = { usingClientEntryPoint: !1, Events: [yr, rn, Mi, nu, ru, io] },
  An = {
    findFiberByHostInstance: Ft,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ip = {
    bundleType: An.bundleType,
    version: An.version,
    rendererPackageName: An.rendererPackageName,
    rendererConfig: An.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = au(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: An.findFiberByHostInstance || Lp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rr.isDisabled && Rr.supportsFiber)
    try {
      (Li = Rr.inject(Ip)), (Xe = Rr);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _p;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fo(t)) throw Error(P(200));
  return kp(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!fo(e)) throw Error(P(299));
  var n = !1,
    r = "",
    i = $d;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ao(e, 1, !1, null, null, n, !1, r, i)),
    (e[st] = t.current),
    ir(e.nodeType === 8 ? e.parentNode : e),
    new co(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = au(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return Yt(e);
};
_e.hydrate = function (e, t, n) {
  if (!$i(t)) throw Error(P(200));
  return Vi(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!fo(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    s = $d;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Bd(t, null, e, 1, n ?? null, i, !1, l, s)),
    (e[st] = t.current),
    ir(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Bi(t);
};
_e.render = function (e, t, n) {
  if (!$i(t)) throw Error(P(200));
  return Vi(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!$i(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (Yt(function () {
        Vi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[st] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = io;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$i(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Vi(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function Vd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vd);
    } catch (e) {
      console.error(e);
    }
}
Vd(), (Va.exports = _e);
var Mp = Va.exports,
  Ca = Mp;
(Sl.createRoot = Ca.createRoot), (Sl.hydrateRoot = Ca.hydrateRoot);
const Ta = "/logos/lipafc_cup.svg";
function Np() {
  const [e, t] = G.useState(!1);
  function n() {
    !e && window.innerWidth <= 768
      ? (t(!0), document.body.classList.add("active-mobile-nav"))
      : i(),
      window.addEventListener("resize", r);
    function r() {
      window.innerWidth >= 768 && i();
    }
    function i() {
      t(!1),
        document.body.classList.remove("active-mobile-nav"),
        window.removeEventListener("resize", r);
    }
  }
  return u.jsx(u.Fragment, {
    children: u.jsxs("header", {
      children: [
        u.jsxs("nav", {
          className: `main-nav ${e ? "active-mobile-nav" : "inactive-mobile-nav"}`,
          "aria-label": "main navigation",
          children: [
            u.jsx("a", {
              href: "#main-content",
              id: "skip",
              className: "skip-link",
              tabIndex: 0,
              children: "Skip Content",
            }),
            u.jsx("a", {
              href: "#intro",
              "aria-label": "LIPAFC.com Home",
              className: "mobile-logo",
              tabIndex: 0,
              children: u.jsx("img", {
                src: Ta,
                alt: "LIPAFC Cup Icon",
                height: "41px",
                width: "38px",
              }),
            }),
            u.jsx("div", {
              className: `menu-toggle ${e && "animate"}`,
              "aria-label": "Mobile Navigation Toggle",
              tabIndex: 0,
              onClick: n,
            }),
            u.jsxs("ul", {
              className: e ? "active-nav" : "",
              children: [
                u.jsx("li", {
                  children: u.jsx("a", {
                    href: "#intro",
                    "aria-label": "LIPAFC.com Home",
                    tabIndex: 0,
                    children: u.jsx("img", {
                      src: Ta,
                      alt: "LIPAFC Cup Icon",
                      height: "68px",
                      width: "75px",
                    }),
                  }),
                }),
                u.jsx("li", {
                  children: u.jsx("a", {
                    href: "#latest-results",
                    tabIndex: 0,
                    children: "Latest Results",
                  }),
                }),
                u.jsx("li", {
                  children: u.jsx("a", {
                    href: "#about-lipafc",
                    tabIndex: 0,
                    children: "LIPAFC Info",
                  }),
                }),
                u.jsx("li", {
                  children: u.jsx("a", {
                    href: "#results",
                    tabIndex: 0,
                    children: "Results",
                  }),
                }),
                u.jsx("li", {
                  children: u.jsx("a", {
                    href: "#featured-matchups",
                    tabIndex: 0,
                    children: "Looking Back",
                  }),
                }),
              ],
            }),
          ],
        }),
        u.jsx("section", {
          className: "intro wrap",
          children: u.jsxs("div", {
            className: "container",
            children: [
              u.jsxs("h1", {
                children: [
                  u.jsx("span", { children: "The" }),
                  " Louisville-Indianapolis Proximity Association Football Contest",
                ],
              }),
              u.jsxs("p", {
                children: [
                  u.jsx("span", {
                    className: "hidden",
                    children: "'Lee-pah-eff-see' -",
                  }),
                  " THE SINGLE MOST IMPORTANT SPORTING AND CULTURAL EVENT IN HUMAN HISTORY",
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const zp = "/logos/indy_eleven_logo.svg",
  Op = "/logos/louisvillecity_2020_logo.webp";
function Ap() {
  return u.jsx(u.Fragment, {
    children: u.jsxs("section", {
      id: "latest-results",
      className: "latest-results",
      children: [
        u.jsxs("span", {
          children: [
            "Latest Results:",
            " ",
            u.jsxs("a", {
              href: "https://www.youtube.com/watch?v=cHm-cqtCBcw",
              target: "_blank",
              rel: "noopener noreferrer",
              children: ["April 6", u.jsx("sup", { children: "th" }), " 2023"],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "latest-results__result",
          children: [
            u.jsx("span", {
              className: "latest-results__score",
              children: "3",
            }),
            u.jsxs("div", {
              className: "latest-results__team",
              children: [
                u.jsx("img", {
                  src: zp,
                  alt: "Indianapolis 11 Logo",
                  className: "latest-results__logo",
                  width: "75px",
                  height: "104px",
                }),
                u.jsx("span", { children: "INDY" }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "latest-results__result",
          children: [
            u.jsx("span", {
              className: "latest-results__score",
              children: "5",
            }),
            u.jsxs("div", {
              className: "latest-results__team",
              children: [
                u.jsx("img", {
                  src: Op,
                  alt: "Louisville City Logo",
                  className: "latest-results__logo",
                  width: "75px",
                  height: "100px",
                }),
                u.jsx("span", { children: "LOU" }),
              ],
            }),
          ],
        }),
        u.jsxs("span", {
          title: "ticket link",
          children: [
            "Next Match: October 5",
            u.jsx("sup", { children: "th" }),
            " 2024",
          ],
        }),
      ],
    }),
  });
}
function Dp() {
  G.useEffect(() => {
    const n = new Date().getFullYear();
    t(n.toString());
  }, []);
  function e(n) {
    const r = n.target.value ?? new Date().getFullYear();
    t(r);
  }
  function t(n) {
    document.querySelectorAll("#match-results tbody tr").forEach((i) => {
      i.style.display = i.dataset.year === n ? "" : "none";
    });
  }
  return u.jsx(u.Fragment, {
    children: u.jsx("section", {
      id: "results",
      className: "results",
      children: u.jsxs("div", {
        className: "container",
        children: [
          u.jsx("h1", { children: "LIPAFC Match History" }),
          u.jsx("h2", { children: "Stat Breakdowns" }),
          u.jsxs("table", {
            className: "all-time all-time--regular",
            children: [
              u.jsx("caption", { children: "All Time Regular Season Records" }),
              u.jsx("thead", {
                children: u.jsxs("tr", {
                  children: [
                    u.jsx("td", {
                      title: "Indianapolis Overall",
                      children: "Indy Overall (W-L-D)",
                    }),
                    u.jsx("td", {
                      title: "Louisville Overall",
                      children: "Lou Overall (W-L-D)",
                    }),
                    u.jsx("td", {
                      title: "Indianapolis Home",
                      children: "Indy Home",
                    }),
                    u.jsx("td", { children: "Lou Home" }),
                    u.jsx("td", { children: "Indy Away" }),
                    u.jsx("td", { children: "Lou Away" }),
                  ],
                }),
              }),
              u.jsx("tbody", {
                children: u.jsxs("tr", {
                  children: [
                    u.jsx("td", {
                      "data-name": "Indy Overall",
                      children: "3-6-5",
                    }),
                    u.jsx("td", {
                      "data-name": "Lou Overall",
                      children: "6-3-5",
                    }),
                    u.jsx("td", {
                      "data-name": "Indy Home",
                      children: "2-3-1",
                    }),
                    u.jsx("td", { "data-name": "Lou Home", children: "3-1-4" }),
                    u.jsx("td", {
                      "data-name": "Indy Away",
                      children: "1-3-4",
                    }),
                    u.jsx("td", { "data-name": "Lou Away", children: "3-2-1" }),
                  ],
                }),
              }),
            ],
          }),
          u.jsxs("table", {
            className: "all-time all-time--playoffs",
            children: [
              u.jsx("caption", { children: "All Time USL-C Playoffs Records" }),
              u.jsx("thead", {
                children: u.jsxs("tr", {
                  children: [
                    u.jsx("td", { children: "Indy Overall (W-L-D)" }),
                    u.jsx("td", { children: "Lou Overall (W-L-D)" }),
                    u.jsx("td", { children: "Lou Extra Time" }),
                    u.jsx("td", { children: "Indy Extra Time" }),
                    u.jsx("td", { children: "Lou PKs" }),
                    u.jsx("td", { children: "Indy PKs" }),
                    u.jsx("td", { children: "Last Meeting" }),
                    u.jsx("td", { children: "Round" }),
                  ],
                }),
              }),
              u.jsx("tbody", {
                children: u.jsxs("tr", {
                  children: [
                    u.jsx("td", {
                      "data-name": "Indy Overall",
                      children: "0-0-1",
                    }),
                    u.jsx("td", {
                      "data-name": "Lou Overall",
                      children: "1-0-0",
                    }),
                    u.jsx("td", {
                      "data-name": "Lou X-Time",
                      children: "1-0-0",
                    }),
                    u.jsx("td", {
                      "data-name": "Indy X-Time",
                      children: "0-0-1",
                    }),
                    u.jsx("td", { "data-name": "Lou PKs", children: "0-0-0" }),
                    u.jsx("td", { "data-name": "Indy PKs", children: "0-0-0" }),
                    u.jsx("td", {
                      "data-name": "Last Match",
                      children: "2019",
                    }),
                    u.jsx("td", {
                      "data-name": "Round",
                      children: "Eastern Conference Final",
                    }),
                  ],
                }),
              }),
            ],
          }),
          u.jsxs("table", {
            className: "all-time all-time--open-cup",
            children: [
              u.jsx("caption", { children: "All Time US Open Cup Records" }),
              u.jsx("thead", {
                children: u.jsxs("tr", {
                  children: [
                    u.jsx("td", { children: "Indy Overall (W-L-D)" }),
                    u.jsx("td", { children: "Lou Overall (W-L-D)" }),
                    u.jsx("td", { children: "Indy Home" }),
                    u.jsx("td", { children: "Lou Home" }),
                    u.jsx("td", { children: "Indy Away" }),
                    u.jsx("td", { children: "Lou Away" }),
                  ],
                }),
              }),
              u.jsx("tbody", {
                children: u.jsxs("tr", {
                  children: [
                    u.jsx("td", {
                      "data-name": "Indy Overall",
                      children: "1-1-0",
                    }),
                    u.jsx("td", {
                      "data-name": "Lou Overall",
                      children: "1-1-0",
                    }),
                    u.jsx("td", {
                      "data-name": "Indy Home",
                      children: "1-0-0",
                    }),
                    u.jsx("td", { "data-name": "Lou Home", children: "1-0-0" }),
                    u.jsx("td", {
                      "data-name": "Indy Away",
                      children: "0-1-0",
                    }),
                    u.jsx("td", { "data-name": "Lou Away", children: "0-1-0" }),
                  ],
                }),
              }),
            ],
          }),
          u.jsx("hr", {}),
          u.jsx("h2", { children: "Match Info" }),
          u.jsxs("nav", {
            "aria-label": "Match history navigation",
            children: [
              u.jsx("label", {
                htmlFor: "year-select",
                className: "year-select-label",
                children: "Select Year",
              }),
              u.jsxs("select", {
                id: "year-select",
                className: "year-select",
                "aria-controls": "match-results",
                onChange: e,
                children: [
                  u.jsxs("optgroup", {
                    label: "Modern Era",
                    children: [
                      u.jsx("option", { value: "2024", children: "2024" }),
                      u.jsx("option", { value: "2023", children: "2023" }),
                      u.jsx("option", { value: "2022", children: "2022" }),
                      u.jsx("option", { value: "2021", children: "2021" }),
                      u.jsx("option", { value: "2020", children: "2020" }),
                      u.jsx("option", { value: "2019", children: "2019" }),
                      u.jsx("option", { value: "2018", children: "2018" }),
                      u.jsx("option", { value: "2017", children: "2017" }),
                      u.jsx("option", { value: "2016", children: "2016" }),
                      u.jsx("option", { value: "2015", children: "2015" }),
                    ],
                  }),
                  u.jsxs("optgroup", {
                    label: "Classical Era",
                    children: [
                      u.jsx("option", { value: "1945", children: "1945" }),
                      u.jsx("option", { value: "1942", children: "1942" }),
                      u.jsx("option", { value: "1937", children: "1937" }),
                      u.jsx("option", { value: "1936", children: "1936" }),
                      u.jsx("option", { value: "1932", children: "1932" }),
                      u.jsx("option", { value: "1926", children: "1926" }),
                      u.jsx("option", { value: "1925", children: "1925" }),
                      u.jsx("option", { value: "1921", children: "1921" }),
                      u.jsx("option", { value: "1918", children: "1918" }),
                      u.jsx("option", { value: "1878", children: "1878" }),
                      u.jsx("option", { value: "1865", children: "1865" }),
                      u.jsx("option", {
                        value: "ancient",
                        children: "Ancient History",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("table", {
            id: "match-results",
            className: "match-results",
            "aria-live": "polite",
            children: [
              u.jsx("caption", {
                className: "visuallyhidden",
                children: "LIPAFC Match Results",
              }),
              u.jsx("thead", {
                children: u.jsxs("tr", {
                  children: [
                    u.jsx("th", { children: "Date" }),
                    u.jsx("th", { children: "Score" }),
                    u.jsx("th", { children: "Winner" }),
                    u.jsx("th", { children: "Location" }),
                    u.jsx("th", { children: "Competition" }),
                  ],
                }),
              }),
              u.jsxs("tbody", {
                children: [
                  u.jsxs("tr", {
                    "data-year": "2024",
                    children: [
                      u.jsxs("td", {
                        children: [
                          "April 6",
                          u.jsx("sup", { children: "th" }),
                          ", 2024",
                        ],
                      }),
                      u.jsx("td", { children: "5-3" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Lynn Family Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2024",
                    children: [
                      u.jsxs("td", {
                        children: [
                          "October 5",
                          u.jsx("sup", { children: "th" }),
                          ", 2024",
                        ],
                      }),
                      u.jsx("td", { children: "TBD" }),
                      u.jsx("td", { children: "TBD" }),
                      u.jsx("td", { children: "Carroll Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2023",
                    children: [
                      u.jsx("td", {
                        children: u.jsx("a", {
                          href: "https://www.youtube.com/watch?v=NKv1cEhkfZM&t=10s",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "May 27, 2023",
                        }),
                      }),
                      u.jsx("td", { children: "0-1" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Carroll Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2023",
                    children: [
                      u.jsx("td", {
                        children: u.jsx("a", {
                          href: "https://www.youtube.com/watch?v=3nEnZNj6jrM",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "July 29, 2023",
                        }),
                      }),
                      u.jsx("td", { children: "2-0" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Lynn Family Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2022",
                    children: [
                      u.jsx("td", {
                        children: u.jsx("a", {
                          href: "https://www.youtube.com/watch?v=ev2CSovEGi4",
                          target: "_blank",
                          children: "August 31, 2022",
                        }),
                      }),
                      u.jsx("td", { children: "2-1" }),
                      u.jsx("td", { children: "Indianapolis" }),
                      u.jsx("td", { children: "Carroll Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2022",
                    children: [
                      u.jsx("td", {
                        children: u.jsx("a", {
                          href: "https://www.youtube.com/watch?v=5712LSGXim8",
                          target: "_blank",
                          children: "March 26, 2022",
                        }),
                      }),
                      u.jsx("td", { children: "1-1" }),
                      u.jsx("td", { children: "Draw" }),
                      u.jsx("td", { children: "Lynn Family Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2021",
                    children: [
                      u.jsx("td", { children: "October 16, 2021" }),
                      u.jsx("td", { children: "1-0" }),
                      u.jsx("td", { children: "Indianapolis" }),
                      u.jsx("td", { children: "Carroll Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2021",
                    children: [
                      u.jsx("td", { children: "September 18, 2021" }),
                      u.jsx("td", { children: "0-2" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Carroll Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2021",
                    children: [
                      u.jsx("td", { children: "June 26, 2021" }),
                      u.jsx("td", { children: "3-3" }),
                      u.jsx("td", { children: "Draw" }),
                      u.jsx("td", { children: "Lynn Family Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2021",
                    children: [
                      u.jsx("td", { children: "May 29, 2021" }),
                      u.jsx("td", { children: "1-2" }),
                      u.jsx("td", { children: "Indianapolis" }),
                      u.jsx("td", { children: "Lynn Family Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2020",
                    children: [
                      u.jsx("td", { children: "August 8, 2020" }),
                      u.jsx("td", { children: "1-1" }),
                      u.jsx("td", { children: "Draw" }),
                      u.jsx("td", { children: "Lynn Family Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season*" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2020",
                    children: [
                      u.jsx("td", { children: "August 26, 2020" }),
                      u.jsx("td", { children: "1-0" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Lynn Family Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season*" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2020",
                    children: [
                      u.jsx("td", { children: "September 5, 2020" }),
                      u.jsx("td", { children: "1-3" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Lucas Oil Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season*" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2020",
                    children: [
                      u.jsx("td", { children: "September 16, 2020" }),
                      u.jsx("td", { children: "2-0" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Lucas Oil Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season*" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2019",
                    children: [
                      u.jsx("td", {
                        children: u.jsx("a", {
                          href: "https://www.uslchampionship.com/indyeleven-louisvillecityfc-1037249",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "June 29, 2019",
                        }),
                      }),
                      u.jsx("td", { children: "1-1" }),
                      u.jsx("td", { children: "Draw" }),
                      u.jsx("td", { children: "Lucas Oil Stadium" }),
                      u.jsx("td", { children: "USL-C Regular Season" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2019",
                    children: [
                      u.jsx("td", {
                        children: u.jsx("a", {
                          href: "https://www.uslchampionship.com/louisvillecityfc-indyeleven-1037416",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "August 30, 2019",
                        }),
                      }),
                      u.jsx("td", { children: "1-1" }),
                      u.jsx("td", { children: "Draw" }),
                      u.jsx("td", { children: "Slugger Field" }),
                      u.jsx("td", { children: "USL-C Regular Season" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2019",
                    children: [
                      u.jsx("td", {
                        children: u.jsx("a", {
                          href: "https://www.uslchampionship.com/louisvillecityfc-indyeleven-1037416",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "November 9, 2019",
                        }),
                      }),
                      u.jsx("td", { children: "1-3" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Carroll Stadium, IUPUI" }),
                      u.jsx("td", { children: "USL Eastern Conference Final" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2018",
                    children: [
                      u.jsx("td", { children: "October 20, 2018" }),
                      u.jsx("td", { children: "4-1" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Slugger Field" }),
                      u.jsx("td", { children: "USL Playoffs" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2018",
                    children: [
                      u.jsx("td", { children: "October 13, 2018" }),
                      u.jsx("td", { children: "0 - 1 (PK)" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Slugger Field" }),
                      u.jsx("td", { children: "USL" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2018",
                    children: [
                      u.jsx("td", { children: "August 5, 2018" }),
                      u.jsx("td", { children: "2 - 2" }),
                      u.jsx("td", { children: "-DRAW-" }),
                      u.jsx("td", { children: "Slugger Field" }),
                      u.jsx("td", { children: "USL" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2018",
                    children: [
                      u.jsx("td", { children: "May 5, 2018" }),
                      u.jsx("td", { children: "1 (PK) - 0" }),
                      u.jsx("td", { children: "Indianapolis" }),
                      u.jsx("td", { children: "Lucas Oil Stadium" }),
                      u.jsx("td", { children: "USL" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2017",
                    children: [
                      u.jsx("td", { children: "March 18, 2017" }),
                      u.jsx("td", { children: "1 - 1" }),
                      u.jsx("td", { children: "-DRAW-" }),
                      u.jsx("td", { children: "Evansville, IN" }),
                      u.jsx("td", { children: "Friendly" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2016",
                    children: [
                      u.jsx("td", { children: "June 1, 2016" }),
                      u.jsx("td", { children: "2 - 1" }),
                      u.jsx("td", { children: "Indianapolis" }),
                      u.jsx("td", { children: "Carroll Stadium, IUPUI" }),
                      u.jsx("td", { children: "US Open Cup" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2016",
                    children: [
                      u.jsx("td", { children: "March 19, 2016" }),
                      u.jsx("td", { children: "1 - 0" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsxs("td", {
                        children: [
                          "Slugger Field ",
                          u.jsx("sup", {
                            title: "Closed to public",
                            children: "*",
                          }),
                        ],
                      }),
                      u.jsx("td", { children: "Friendly" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "2015",
                    children: [
                      u.jsx("td", { children: "May 27, 2015" }),
                      u.jsx("td", { children: "0 - 2" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Carroll Stadium, IUPUI" }),
                      u.jsx("td", {
                        children: u.jsx("a", {
                          href: "https://twitter.com/77_Dredd/status/1051987296222961664",
                          children: "US Open Cup",
                        }),
                      }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "1945",
                    children: [
                      u.jsx("td", { children: "October 27, 1945" }),
                      u.jsx("td", { children: "1 - 1" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Grünwalder Stadion" }),
                      u.jsx("td", { children: "One-off WWII Victory Match" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "1942",
                    children: [
                      u.jsx("td", { children: "January 2, 1942" }),
                      u.jsx("td", { children: "1 - 1" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Grünwalder Stadion" }),
                      u.jsxs("td", {
                        children: [
                          "Part of celebrations following the signing of the",
                          " ",
                          u.jsx("abbr", {
                            title: "United Nations",
                            children: "UN",
                          }),
                          " charter the day before.",
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "1937",
                    children: [
                      u.jsx("td", { children: "July 18, 1937" }),
                      u.jsx("td", { children: "N/A" }),
                      u.jsx("td", { children: "N/A" }),
                      u.jsx("td", { children: "Madison, Indiana" }),
                      u.jsx("td", { children: "Rock Throw Cookout" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "1936",
                    children: [
                      u.jsx("td", { children: "July 4, 1936" }),
                      u.jsx("td", { children: "0 - 4" }),
                      u.jsx("td", { children: "Indianapolis" }),
                      u.jsx("td", {
                        children: "Central State Hospital Grounds",
                      }),
                      u.jsx("td", {
                        children:
                          "The teams put on an exhibition match for researchers and patients for Independence Day",
                      }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "1932",
                    children: [
                      u.jsx("td", { children: "November 9th, 1932" }),
                      u.jsx("td", { children: "1 - 2" }),
                      u.jsx("td", { children: "Indianapolis" }),
                      u.jsx("td", { children: "Indiana State Fairgrounds" }),
                      u.jsx("td", {
                        children:
                          "The teams played a celebration game for the election of Franklin D. Roosevelt",
                      }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "1926",
                    children: [
                      u.jsx("td", { children: "August 4 & August 20 1926" }),
                      u.jsx("td", { children: "1 - 1" }),
                      u.jsx("td", { children: "Draw" }),
                      u.jsx("td", { children: "Flood zone" }),
                      u.jsx("td", { children: "N/A" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "1925",
                    children: [
                      u.jsx("td", { children: "May 27, 1925" }),
                      u.jsx("td", { children: "4 - 1" }),
                      u.jsx("td", { children: "Indianapolis" }),
                      u.jsx("td", { children: "Indiana Fairgrounds" }),
                      u.jsx("td", { children: "Coca-Cola Cocaine Classic" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "1921",
                    children: [
                      u.jsx("td", { children: "October 4, 1921" }),
                      u.jsx("td", { children: "19 - 7" }),
                      u.jsx("td", { children: "Indianapolis" }),
                      u.jsx("td", { children: "Newark, NJ" }),
                      u.jsx("td", {
                        children: "Pre-World Series exhibition match",
                      }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "1918",
                    children: [
                      u.jsx("td", { children: "May 27, 1918" }),
                      u.jsx("td", { children: "3 - 1" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Kentucky State Fairgrounds" }),
                      u.jsx("td", {
                        children: "Jib-Jab Footballery Challenge",
                      }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "1878",
                    children: [
                      u.jsx("td", { children: "May 27, 1878" }),
                      u.jsx("td", { children: "9 - 8" }),
                      u.jsx("td", { children: "Louisville" }),
                      u.jsx("td", { children: "Churchill Downs Infield" }),
                      u.jsx("td", {
                        children:
                          "Kentucky Derby Sporting Goodtimes Championship",
                      }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "1868",
                    children: [
                      u.jsx("td", {
                        children: "September 2, 1868 - 'The Bloody Affair'",
                      }),
                      u.jsx("td", { children: "0 - 0" }),
                      u.jsx("td", { children: "Draw" }),
                      u.jsx("td", {
                        children: "Indianapolis Motor Speedway Infield",
                      }),
                      u.jsx("td", { children: "N/A" }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "1865",
                    children: [
                      u.jsx("td", { children: "April 18, 1865" }),
                      u.jsx("td", { children: "4 - 4" }),
                      u.jsx("td", { children: "Draw" }),
                      u.jsx("td", {
                        children: "Louisville's Taylor Barracks drill field",
                      }),
                      u.jsx("td", {
                        children:
                          "A battle match to take the country's attention off the assassination of Abraham Lincoln, reigniting the rivalry after disruption by the Civil War",
                      }),
                    ],
                  }),
                  u.jsxs("tr", {
                    "data-year": "ancient",
                    children: [
                      u.jsx("td", { children: "1280 BC - 1900 AD" }),
                      u.jsx("td", { children: "???" }),
                      u.jsx("td", { children: "Lost to history" }),
                      u.jsx("td", {
                        children: "The old country, the new world",
                      }),
                      u.jsx("td", {
                        children:
                          "LIPAFC reportedly the model for the Olympics. Only the Watchers and Stan Lee's ghost know for sure.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Rp() {
  return u.jsx(u.Fragment, {
    children: u.jsx("footer", {
      children: u.jsxs("div", {
        className: "container",
        children: [
          u.jsxs("ul", {
            className: "team-links",
            children: [
              u.jsx("li", { className: "title", children: "The Teams" }),
              u.jsx("li", {
                children: u.jsx("a", {
                  href: "//louisvillecityfc.com/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Louisville City FC",
                }),
              }),
              u.jsx("li", {
                children: u.jsx("a", {
                  href: "//www.indyeleven.com/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Indianapolis Eleven",
                }),
              }),
            ],
          }),
          u.jsxs("ul", {
            className: "supporter-links",
            children: [
              u.jsx("li", { className: "title", children: "The SGs" }),
              u.jsx("li", {
                children: u.jsx("a", {
                  href: "//www.louisvillecoopers.com/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Louisville Coopers",
                }),
              }),
              u.jsx("li", {
                children: u.jsx("a", {
                  href: "//www.brickyardbattalion.com/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Brickyard Battalion",
                }),
              }),
              u.jsx("li", {
                children: u.jsx("a", {
                  href: "//scouseshouse.com/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Scouse's House",
                }),
              }),
              u.jsx("li", {
                children: u.jsx("a", {
                  href: "//slaughterhousenineteen.com/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Slaughterhouse 19",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Fp() {
  return u.jsx(u.Fragment, {
    children: u.jsx("section", {
      id: "about-lipafc",
      className: "wrap about-lipafc",
      children: u.jsxs("div", {
        className: "container",
        children: [
          u.jsx("h1", { children: "The Heck is this?" }),
          u.jsx("p", {
            children:
              "The LIPAFC (Louisville-INDIANAPOLIS PROXIMITY… oh don't make me type it again) is the soccer rivalry between Indianapolis Eleven and Louisville City FC. As aluded above, this clash of titans is the cause for humanity‘s ascension to control this planet. Much like Bill & Ted, this rivalry has spanned the ages and will some day bring peace to the world… once they learn to play guitar. While sporting celebs will tell you grand tales of Worldly Cups or Superb Owls, only the LIPAFC will tug your heartstrings like a puppy and tear you apart like finding out what happened to Bambi’s mom.",
          }),
          u.jsx("h2", {
            children: "PREPARE YOURSELF EARTHLINGS, FOR THE LIPAFC",
          }),
        ],
      }),
    }),
  });
}
const Bp = "/trophy-cutout.png";
function $p() {
  return u.jsx(u.Fragment, {
    children: u.jsx("section", {
      className: "trophy",
      children: u.jsxs("div", {
        className: "container",
        children: [
          u.jsx("img", {
            src: Bp,
            alt: "The LIPAFC Barrel Trophy",
            height: "1268",
            width: "460",
            className: "trophy-cutout",
          }),
          u.jsxs("div", {
            children: [
              u.jsx("h1", { children: "The Trophy, est. 2022" }),
              u.jsxs("p", {
                children: [
                  "Every distinguished competition requires a trophy of elegance, sophistication, and equal importance. That's why the Louisville Coopers and the Brickyard Battalion keep the ultimate trophy in the soccer landscape - the LIPAFC Barrel Trophy",
                  u.jsx("sup", { children: "™" }),
                  u.jsx("sup", { children: "®" }),
                ],
              }),
              u.jsx("div", {
                className: "trophy__rules",
                children: u.jsxs("ul", {
                  children: [
                    u.jsxs("li", {
                      children: [
                        "The Barrel is awarded to the season's series winner. This means that The Barrel ",
                        u.jsx("strong", { children: "does not" }),
                        " change hands mid-season.",
                        " ",
                      ],
                    }),
                    u.jsx("li", {
                      children:
                        "In the event that the season series is split, the current holders retain possession of The Barrel.",
                    }),
                    u.jsx("li", {
                      children:
                        "If the teams meet in the playoffs and the series is tied, the playoff game decides the winner of The Barrel.",
                    }),
                    u.jsx("li", {
                      children:
                        "Each season, the winner is marked with a blue or purple carabiner that hands from the top of The Barrel.",
                    }),
                    u.jsx("li", {
                      children:
                        "The modern-day Barrel was created in 2022. However, an older version was rumored to have been a barrel built from the very same wood as the fabled Trojan Horse.",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function ja(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function po(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : ja(t[n]) &&
          ja(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          po(e[n], t[n]);
    });
}
const Hd = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Nt() {
  const e = typeof document < "u" ? document : {};
  return po(e, Hd), e;
}
const Vp = {
  document: Hd,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Me() {
  const e = typeof window < "u" ? window : {};
  return po(e, Vp), e;
}
function Hp(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function Up(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function hs(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function Ci() {
  return Date.now();
}
function Gp(e) {
  const t = Me();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function Wp(e, t) {
  t === void 0 && (t = "x");
  const n = Me();
  let r, i, l;
  const s = Gp(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = s.transform || s.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (l = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((l =
          s.MozTransform ||
          s.OTransform ||
          s.MsTransform ||
          s.msTransform ||
          s.transform ||
          s
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = l.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = l.m41)
        : r.length === 16
          ? (i = parseFloat(r[12]))
          : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = l.m42)
        : r.length === 16
          ? (i = parseFloat(r[13]))
          : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Fr(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function bp(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function je() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !bp(r)) {
      const i = Object.keys(Object(r)).filter((l) => t.indexOf(l) < 0);
      for (let l = 0, s = i.length; l < s; l += 1) {
        const a = i[l],
          o = Object.getOwnPropertyDescriptor(r, a);
        o !== void 0 &&
          o.enumerable &&
          (Fr(e[a]) && Fr(r[a])
            ? r[a].__swiper__
              ? (e[a] = r[a])
              : je(e[a], r[a])
            : !Fr(e[a]) && Fr(r[a])
              ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : je(e[a], r[a]))
              : (e[a] = r[a]));
      }
    }
  }
  return e;
}
function Br(e, t, n) {
  e.style.setProperty(t, n);
}
function Ud(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = Me(),
    l = -t.translate;
  let s = null,
    a;
  const o = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const f = n > l ? "next" : "prev",
    p = (v, g) => (f === "next" && v >= g) || (f === "prev" && v <= g),
    m = () => {
      (a = new Date().getTime()), s === null && (s = a);
      const v = Math.max(Math.min((a - s) / o, 1), 0),
        g = 0.5 - Math.cos(v * Math.PI) / 2;
      let y = l + g * (n - l);
      if ((p(y, n) && (y = n), t.wrapperEl.scrollTo({ [r]: y }), p(y, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: y });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(m);
    };
  m();
}
function Qe(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function Ti(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function pr(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : Hp(t))), n;
}
function Yp(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function Qp(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function St(e, t) {
  return Me().getComputedStyle(e, null).getPropertyValue(t);
}
function hr(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Gd(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function ms(e, t, n) {
  const r = Me();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top"),
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"),
    )
  );
}
function B(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
let hl;
function Xp() {
  const e = Me(),
    t = Nt();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function Wd() {
  return hl || (hl = Xp()), hl;
}
let ml;
function Kp(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Wd(),
    r = Me(),
    i = r.navigator.platform,
    l = t || r.navigator.userAgent,
    s = { ios: !1, android: !1 },
    a = r.screen.width,
    o = r.screen.height,
    f = l.match(/(Android);?[\s\/]+([\d.]+)?/);
  let p = l.match(/(iPad).*OS\s([\d_]+)/);
  const m = l.match(/(iPod)(.*OS\s([\d_]+))?/),
    v = !p && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    g = i === "Win32";
  let y = i === "MacIntel";
  const x = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !p &&
      y &&
      n.touch &&
      x.indexOf(`${a}x${o}`) >= 0 &&
      ((p = l.match(/(Version)\/([\d.]+)/)),
      p || (p = [0, 1, "13_0_0"]),
      (y = !1)),
    f && !g && ((s.os = "android"), (s.android = !0)),
    (p || v || m) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
function bd(e) {
  return e === void 0 && (e = {}), ml || (ml = Kp(e)), ml;
}
let vl;
function qp() {
  const e = Me(),
    t = bd();
  let n = !1;
  function r() {
    const a = e.navigator.userAgent.toLowerCase();
    return (
      a.indexOf("safari") >= 0 &&
      a.indexOf("chrome") < 0 &&
      a.indexOf("android") < 0
    );
  }
  if (r()) {
    const a = String(e.navigator.userAgent);
    if (a.includes("Version/")) {
      const [o, f] = a
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((p) => Number(p));
      n = o < 16 || (o === 16 && f < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
    l = r(),
    s = l || (i && t.ios);
  return {
    isSafari: n || l,
    needPerspectiveFix: n,
    need3dFix: s,
    isWebView: i,
  };
}
function Jp() {
  return vl || (vl = qp()), vl;
}
function Zp(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = Me();
  let l = null,
    s = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    o = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((l = new ResizeObserver((m) => {
          s = i.requestAnimationFrame(() => {
            const { width: v, height: g } = t;
            let y = v,
              x = g;
            m.forEach((j) => {
              let { contentBoxSize: d, contentRect: c, target: h } = j;
              (h && h !== t.el) ||
                ((y = c ? c.width : (d[0] || d).inlineSize),
                (x = c ? c.height : (d[0] || d).blockSize));
            }),
              (y !== v || x !== g) && a();
          });
        })),
        l.observe(t.el));
    },
    f = () => {
      s && i.cancelAnimationFrame(s),
        l && l.unobserve && t.el && (l.unobserve(t.el), (l = null));
    },
    p = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      o();
      return;
    }
    i.addEventListener("resize", a), i.addEventListener("orientationchange", p);
  }),
    n("destroy", () => {
      f(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", p);
    });
}
function eh(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const l = [],
    s = Me(),
    a = function (p, m) {
      m === void 0 && (m = {});
      const v = s.MutationObserver || s.WebkitMutationObserver,
        g = new v((y) => {
          if (t.__preventObserver__) return;
          if (y.length === 1) {
            i("observerUpdate", y[0]);
            return;
          }
          const x = function () {
            i("observerUpdate", y[0]);
          };
          s.requestAnimationFrame
            ? s.requestAnimationFrame(x)
            : s.setTimeout(x, 0);
        });
      g.observe(p, {
        attributes: typeof m.attributes > "u" ? !0 : m.attributes,
        childList: typeof m.childList > "u" ? !0 : m.childList,
        characterData: typeof m.characterData > "u" ? !0 : m.characterData,
      }),
        l.push(g);
    },
    o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const p = Gd(t.hostEl);
          for (let m = 0; m < p.length; m += 1) a(p[m]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }),
          a(t.wrapperEl, { attributes: !1 });
      }
    },
    f = () => {
      l.forEach((p) => {
        p.disconnect();
      }),
        l.splice(0, l.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", o),
    r("destroy", f);
}
var th = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((l) => {
        r.eventsListeners[l] || (r.eventsListeners[l] = []),
          r.eventsListeners[l][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var l = arguments.length, s = new Array(l), a = 0; a < l; a++)
        s[a] = arguments[a];
      t.apply(r, s);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, l) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(l, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++)
      l[s] = arguments[s];
    return (
      typeof l[0] == "string" || Array.isArray(l[0])
        ? ((t = l[0]), (n = l.slice(1, l.length)), (r = e))
        : ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((f) => {
            f.apply(r, [o, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((f) => {
              f.apply(r, n);
            });
      }),
      e
    );
  },
};
function nh() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(St(r, "padding-left") || 0, 10) -
        parseInt(St(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(St(r, "padding-top") || 0, 10) -
        parseInt(St(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function rh() {
  const e = this;
  function t(C, z) {
    return parseFloat(C.getPropertyValue(e.getDirectionLabel(z)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: l, rtlTranslate: s, wrongRTL: a } = e,
    o = e.virtual && n.virtual.enabled,
    f = o ? e.virtual.slides.length : e.slides.length,
    p = Qe(i, `.${e.params.slideClass}, swiper-slide`),
    m = o ? e.virtual.slides.length : p.length;
  let v = [];
  const g = [],
    y = [];
  let x = n.slidesOffsetBefore;
  typeof x == "function" && (x = n.slidesOffsetBefore.call(e));
  let j = n.slidesOffsetAfter;
  typeof j == "function" && (j = n.slidesOffsetAfter.call(e));
  const d = e.snapGrid.length,
    c = e.slidesGrid.length;
  let h = n.spaceBetween,
    w = -x,
    S = 0,
    k = 0;
  if (typeof l > "u") return;
  typeof h == "string" && h.indexOf("%") >= 0
    ? (h = (parseFloat(h.replace("%", "")) / 100) * l)
    : typeof h == "string" && (h = parseFloat(h)),
    (e.virtualSize = -h),
    p.forEach((C) => {
      s ? (C.style.marginLeft = "") : (C.style.marginRight = ""),
        (C.style.marginBottom = ""),
        (C.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Br(r, "--swiper-centered-offset-before", ""),
      Br(r, "--swiper-centered-offset-after", ""));
  const M = n.grid && n.grid.rows > 1 && e.grid;
  M ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
  let T;
  const I =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (C) => typeof n.breakpoints[C].slidesPerView < "u",
    ).length > 0;
  for (let C = 0; C < m; C += 1) {
    T = 0;
    let z;
    if (
      (p[C] && (z = p[C]),
      M && e.grid.updateSlide(C, z, p),
      !(p[C] && St(z, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        I && (p[C].style[e.getDirectionLabel("width")] = "");
        const O = getComputedStyle(z),
          N = z.style.transform,
          R = z.style.webkitTransform;
        if (
          (N && (z.style.transform = "none"),
          R && (z.style.webkitTransform = "none"),
          n.roundLengths)
        )
          T = e.isHorizontal() ? ms(z, "width") : ms(z, "height");
        else {
          const U = t(O, "width"),
            de = t(O, "padding-left"),
            L = t(O, "padding-right"),
            E = t(O, "margin-left"),
            _ = t(O, "margin-right"),
            D = O.getPropertyValue("box-sizing");
          if (D && D === "border-box") T = U + E + _;
          else {
            const { clientWidth: V, offsetWidth: W } = z;
            T = U + de + L + E + _ + (W - V);
          }
        }
        N && (z.style.transform = N),
          R && (z.style.webkitTransform = R),
          n.roundLengths && (T = Math.floor(T));
      } else
        (T = (l - (n.slidesPerView - 1) * h) / n.slidesPerView),
          n.roundLengths && (T = Math.floor(T)),
          p[C] && (p[C].style[e.getDirectionLabel("width")] = `${T}px`);
      p[C] && (p[C].swiperSlideSize = T),
        y.push(T),
        n.centeredSlides
          ? ((w = w + T / 2 + S / 2 + h),
            S === 0 && C !== 0 && (w = w - l / 2 - h),
            C === 0 && (w = w - l / 2 - h),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            n.roundLengths && (w = Math.floor(w)),
            k % n.slidesPerGroup === 0 && v.push(w),
            g.push(w))
          : (n.roundLengths && (w = Math.floor(w)),
            (k - Math.min(e.params.slidesPerGroupSkip, k)) %
              e.params.slidesPerGroup ===
              0 && v.push(w),
            g.push(w),
            (w = w + T + h)),
        (e.virtualSize += T + h),
        (S = T),
        (k += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, l) + j),
    s &&
      a &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + h}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + h}px`),
    M && e.grid.updateWrapperSize(T, v),
    !n.centeredSlides)
  ) {
    const C = [];
    for (let z = 0; z < v.length; z += 1) {
      let O = v[z];
      n.roundLengths && (O = Math.floor(O)),
        v[z] <= e.virtualSize - l && C.push(O);
    }
    (v = C),
      Math.floor(e.virtualSize - l) - Math.floor(v[v.length - 1]) > 1 &&
        v.push(e.virtualSize - l);
  }
  if (o && n.loop) {
    const C = y[0] + h;
    if (n.slidesPerGroup > 1) {
      const z = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup,
        ),
        O = C * n.slidesPerGroup;
      for (let N = 0; N < z; N += 1) v.push(v[v.length - 1] + O);
    }
    for (let z = 0; z < e.virtual.slidesBefore + e.virtual.slidesAfter; z += 1)
      n.slidesPerGroup === 1 && v.push(v[v.length - 1] + C),
        g.push(g[g.length - 1] + C),
        (e.virtualSize += C);
  }
  if ((v.length === 0 && (v = [0]), h !== 0)) {
    const C =
      e.isHorizontal() && s ? "marginLeft" : e.getDirectionLabel("marginRight");
    p.filter((z, O) =>
      !n.cssMode || n.loop ? !0 : O !== p.length - 1,
    ).forEach((z) => {
      z.style[C] = `${h}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let C = 0;
    y.forEach((O) => {
      C += O + (h || 0);
    }),
      (C -= h);
    const z = C - l;
    v = v.map((O) => (O <= 0 ? -x : O > z ? z + j : O));
  }
  if (n.centerInsufficientSlides) {
    let C = 0;
    if (
      (y.forEach((z) => {
        C += z + (h || 0);
      }),
      (C -= h),
      C < l)
    ) {
      const z = (l - C) / 2;
      v.forEach((O, N) => {
        v[N] = O - z;
      }),
        g.forEach((O, N) => {
          g[N] = O + z;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: p,
      snapGrid: v,
      slidesGrid: g,
      slidesSizesGrid: y,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Br(r, "--swiper-centered-offset-before", `${-v[0]}px`),
      Br(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - y[y.length - 1] / 2}px`,
      );
    const C = -e.snapGrid[0],
      z = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((O) => O + C)),
      (e.slidesGrid = e.slidesGrid.map((O) => O + z));
  }
  if (
    (m !== f && e.emit("slidesLengthChange"),
    v.length !== d &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    g.length !== c && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !o && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const C = `${n.containerModifierClass}backface-hidden`,
      z = e.el.classList.contains(C);
    m <= n.maxBackfaceHiddenSlides
      ? z || e.el.classList.add(C)
      : z && e.el.classList.remove(C);
  }
}
function ih(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    l;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const s = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
        const a = t.activeIndex + l;
        if (a > t.slides.length && !r) break;
        n.push(s(a));
      }
  else n.push(s(t.activeIndex));
  for (l = 0; l < n.length; l += 1)
    if (typeof n[l] < "u") {
      const a = n[l].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function lh() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function sh(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: l } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let s = -e;
  i && (s = e),
    r.forEach((o) => {
      o.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0
    ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
    : typeof a == "string" && (a = parseFloat(a));
  for (let o = 0; o < r.length; o += 1) {
    const f = r[o];
    let p = f.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (p -= r[0].swiperSlideOffset);
    const m =
        (s + (n.centeredSlides ? t.minTranslate() : 0) - p) /
        (f.swiperSlideSize + a),
      v =
        (s - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - p) /
        (f.swiperSlideSize + a),
      g = -(s - p),
      y = g + t.slidesSizesGrid[o],
      x = g >= 0 && g <= t.size - t.slidesSizesGrid[o];
    ((g >= 0 && g < t.size - 1) ||
      (y > 1 && y <= t.size) ||
      (g <= 0 && y >= t.size)) &&
      (t.visibleSlides.push(f),
      t.visibleSlidesIndexes.push(o),
      r[o].classList.add(n.slideVisibleClass)),
      x && r[o].classList.add(n.slideFullyVisibleClass),
      (f.progress = i ? -m : m),
      (f.originalProgress = i ? -v : v);
  }
}
function oh(e) {
  const t = this;
  if (typeof e > "u") {
    const p = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * p) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: l, isEnd: s, progressLoop: a } = t;
  const o = l,
    f = s;
  if (r === 0) (i = 0), (l = !0), (s = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const p = Math.abs(e - t.minTranslate()) < 1,
      m = Math.abs(e - t.maxTranslate()) < 1;
    (l = p || i <= 0), (s = m || i >= 1), p && (i = 0), m && (i = 1);
  }
  if (n.loop) {
    const p = t.getSlideIndexByData(0),
      m = t.getSlideIndexByData(t.slides.length - 1),
      v = t.slidesGrid[p],
      g = t.slidesGrid[m],
      y = t.slidesGrid[t.slidesGrid.length - 1],
      x = Math.abs(e);
    x >= v ? (a = (x - v) / y) : (a = (x + y - g) / y), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: l, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !o && t.emit("reachBeginning toEdge"),
    s && !f && t.emit("reachEnd toEdge"),
    ((o && !l) || (f && !s)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const gl = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function ah() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    l = e.virtual && n.virtual.enabled,
    s = e.grid && n.grid && n.grid.rows > 1,
    a = (m) => Qe(r, `.${n.slideClass}${m}, swiper-slide${m}`)[0];
  let o, f, p;
  if (l)
    if (n.loop) {
      let m = i - e.virtual.slidesBefore;
      m < 0 && (m = e.virtual.slides.length + m),
        m >= e.virtual.slides.length && (m -= e.virtual.slides.length),
        (o = a(`[data-swiper-slide-index="${m}"]`));
    } else o = a(`[data-swiper-slide-index="${i}"]`);
  else
    s
      ? ((o = t.filter((m) => m.column === i)[0]),
        (p = t.filter((m) => m.column === i + 1)[0]),
        (f = t.filter((m) => m.column === i - 1)[0]))
      : (o = t[i]);
  o &&
    (s ||
      ((p = Qp(o, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !p && (p = t[0]),
      (f = Yp(o, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !f === 0 && (f = t[t.length - 1]))),
    t.forEach((m) => {
      gl(m, m === o, n.slideActiveClass),
        gl(m, m === p, n.slideNextClass),
        gl(m, m === f, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const Jr = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  yl = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  vs = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const s = i,
        a = [s - t];
      a.push(...Array.from({ length: t }).map((o, f) => s + r + f)),
        e.slides.forEach((o, f) => {
          a.includes(o.column) && yl(e, f);
        });
      return;
    }
    const l = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let s = i - t; s <= l + t; s += 1) {
        const a = ((s % n) + n) % n;
        (a < i || a > l) && yl(e, a);
      }
    else
      for (let s = Math.max(i - t, 0); s <= Math.min(l + t, n - 1); s += 1)
        s !== i && (s > l || s < i) && yl(e, s);
  };
function uh(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let l = 0; l < t.length; l += 1)
    typeof t[l + 1] < "u"
      ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
        ? (i = l)
        : r >= t[l] && r < t[l + 1] && (i = l + 1)
      : r >= t[l] && (i = l);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function dh(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: l, realIndex: s, snapIndex: a } = t;
  let o = e,
    f;
  const p = (g) => {
    let y = g - t.virtual.slidesBefore;
    return (
      y < 0 && (y = t.virtual.slides.length + y),
      y >= t.virtual.slides.length && (y -= t.virtual.slides.length),
      y
    );
  };
  if ((typeof o > "u" && (o = uh(t)), r.indexOf(n) >= 0)) f = r.indexOf(n);
  else {
    const g = Math.min(i.slidesPerGroupSkip, o);
    f = g + Math.floor((o - g) / i.slidesPerGroup);
  }
  if ((f >= r.length && (f = r.length - 1), o === l && !t.params.loop)) {
    f !== a && ((t.snapIndex = f), t.emit("snapIndexChange"));
    return;
  }
  if (o === l && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = p(o);
    return;
  }
  const m = t.grid && i.grid && i.grid.rows > 1;
  let v;
  if (t.virtual && i.virtual.enabled && i.loop) v = p(o);
  else if (m) {
    const g = t.slides.filter((x) => x.column === o)[0];
    let y = parseInt(g.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(y) && (y = Math.max(t.slides.indexOf(g), 0)),
      (v = Math.floor(y / i.grid.rows));
  } else if (t.slides[o]) {
    const g = t.slides[o].getAttribute("data-swiper-slide-index");
    g ? (v = parseInt(g, 10)) : (v = o);
  } else v = o;
  Object.assign(t, {
    previousSnapIndex: a,
    snapIndex: f,
    previousRealIndex: s,
    realIndex: v,
    previousIndex: l,
    activeIndex: o,
  }),
    t.initialized && vs(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (s !== v && t.emit("realIndexChange"), t.emit("slideChange"));
}
function ch(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a);
    });
  let l = !1,
    s;
  if (i) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === i) {
        (l = !0), (s = a);
        break;
      }
  }
  if (i && l)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (n.clickedIndex = s);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var fh = {
  updateSize: nh,
  updateSlides: rh,
  updateAutoHeight: ih,
  updateSlidesOffset: lh,
  updateSlidesProgress: sh,
  updateProgress: oh,
  updateSlidesClasses: ah,
  updateActiveIndex: dh,
  updateClickedSlide: ch,
};
function ph(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let s = Wp(l, e);
  return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
}
function hh(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: l, progress: s } = n;
  let a = 0,
    o = 0;
  const f = 0;
  n.isHorizontal() ? (a = r ? -e : e) : (o = e),
    i.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : o),
    i.cssMode
      ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -o)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (o -= n.cssOverflowAdjustment()),
        (l.style.transform = `translate3d(${a}px, ${o}px, ${f}px)`));
  let p;
  const m = n.maxTranslate() - n.minTranslate();
  m === 0 ? (p = 0) : (p = (e - n.minTranslate()) / m),
    p !== s && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function mh() {
  return -this.snapGrid[0];
}
function vh() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function gh(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const l = this,
    { params: s, wrapperEl: a } = l;
  if (l.animating && s.preventInteractionOnTransition) return !1;
  const o = l.minTranslate(),
    f = l.maxTranslate();
  let p;
  if (
    (r && e > o ? (p = o) : r && e < f ? (p = f) : (p = e),
    l.updateProgress(p),
    s.cssMode)
  ) {
    const m = l.isHorizontal();
    if (t === 0) a[m ? "scrollLeft" : "scrollTop"] = -p;
    else {
      if (!l.support.smoothScroll)
        return (
          Ud({ swiper: l, targetPosition: -p, side: m ? "left" : "top" }), !0
        );
      a.scrollTo({ [m ? "left" : "top"]: -p, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(p),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionEnd")))
      : (l.setTransition(t),
        l.setTranslate(p),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionStart")),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (v) {
              !l ||
                l.destroyed ||
                (v.target === this &&
                  (l.wrapperEl.removeEventListener(
                    "transitionend",
                    l.onTranslateToWrapperTransitionEnd,
                  ),
                  (l.onTranslateToWrapperTransitionEnd = null),
                  delete l.onTranslateToWrapperTransitionEnd,
                  (l.animating = !1),
                  n && l.emit("transitionEnd")));
            }),
          l.wrapperEl.addEventListener(
            "transitionend",
            l.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
var yh = {
  getTranslate: ph,
  setTranslate: hh,
  minTranslate: mh,
  maxTranslate: vh,
  translateTo: gh,
};
function wh(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Yd(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: l, previousIndex: s } = t;
  let a = r;
  if (
    (a || (l > s ? (a = "next") : l < s ? (a = "prev") : (a = "reset")),
    t.emit(`transition${i}`),
    n && l !== s)
  ) {
    if (a === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      a === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function xh(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Yd({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function Sh(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Yd({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var Eh = { setTransition: wh, transitionStart: xh, transitionEnd: Sh };
function Ch(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const l = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: f,
    previousIndex: p,
    activeIndex: m,
    rtlTranslate: v,
    wrapperEl: g,
    enabled: y,
  } = l;
  if (
    (!y && !r && !i) ||
    l.destroyed ||
    (l.animating && a.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = l.params.speed);
  const x = Math.min(l.params.slidesPerGroupSkip, s);
  let j = x + Math.floor((s - x) / l.params.slidesPerGroup);
  j >= o.length && (j = o.length - 1);
  const d = -o[j];
  if (a.normalizeSlideIndex)
    for (let h = 0; h < f.length; h += 1) {
      const w = -Math.floor(d * 100),
        S = Math.floor(f[h] * 100),
        k = Math.floor(f[h + 1] * 100);
      typeof f[h + 1] < "u"
        ? w >= S && w < k - (k - S) / 2
          ? (s = h)
          : w >= S && w < k && (s = h + 1)
        : w >= S && (s = h);
    }
  if (
    l.initialized &&
    s !== m &&
    ((!l.allowSlideNext &&
      (v
        ? d > l.translate && d > l.minTranslate()
        : d < l.translate && d < l.minTranslate())) ||
      (!l.allowSlidePrev &&
        d > l.translate &&
        d > l.maxTranslate() &&
        (m || 0) !== s))
  )
    return !1;
  s !== (p || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(d);
  let c;
  if (
    (s > m ? (c = "next") : s < m ? (c = "prev") : (c = "reset"),
    (v && -d === l.translate) || (!v && d === l.translate))
  )
    return (
      l.updateActiveIndex(s),
      a.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      a.effect !== "slide" && l.setTranslate(d),
      c !== "reset" && (l.transitionStart(n, c), l.transitionEnd(n, c)),
      !1
    );
  if (a.cssMode) {
    const h = l.isHorizontal(),
      w = v ? d : -d;
    if (t === 0) {
      const S = l.virtual && l.params.virtual.enabled;
      S &&
        ((l.wrapperEl.style.scrollSnapType = "none"),
        (l._immediateVirtual = !0)),
        S && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
          ? ((l._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              g[h ? "scrollLeft" : "scrollTop"] = w;
            }))
          : (g[h ? "scrollLeft" : "scrollTop"] = w),
        S &&
          requestAnimationFrame(() => {
            (l.wrapperEl.style.scrollSnapType = ""), (l._immediateVirtual = !1);
          });
    } else {
      if (!l.support.smoothScroll)
        return (
          Ud({ swiper: l, targetPosition: w, side: h ? "left" : "top" }), !0
        );
      g.scrollTo({ [h ? "left" : "top"]: w, behavior: "smooth" });
    }
    return !0;
  }
  return (
    l.setTransition(t),
    l.setTranslate(d),
    l.updateActiveIndex(s),
    l.updateSlidesClasses(),
    l.emit("beforeTransitionStart", t, r),
    l.transitionStart(n, c),
    t === 0
      ? l.transitionEnd(n, c)
      : l.animating ||
        ((l.animating = !0),
        l.onSlideToWrapperTransitionEnd ||
          (l.onSlideToWrapperTransitionEnd = function (w) {
            !l ||
              l.destroyed ||
              (w.target === this &&
                (l.wrapperEl.removeEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd,
                ),
                (l.onSlideToWrapperTransitionEnd = null),
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(n, c)));
          }),
        l.wrapperEl.addEventListener(
          "transitionend",
          l.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function Th(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const l = i.grid && i.params.grid && i.params.grid.rows > 1;
  let s = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) s = s + i.virtual.slidesBefore;
    else {
      let a;
      if (l) {
        const v = s * i.params.grid.rows;
        a = i.slides.filter(
          (g) => g.getAttribute("data-swiper-slide-index") * 1 === v,
        )[0].column;
      } else a = i.getSlideIndexByData(s);
      const o = l
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: f } = i.params;
      let p = i.params.slidesPerView;
      p === "auto"
        ? (p = i.slidesPerViewDynamic())
        : ((p = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          f && p % 2 === 0 && (p = p + 1));
      let m = o - a < p;
      if (
        (f && (m = m || a < Math.ceil(p / 2)),
        r && f && i.params.slidesPerView !== "auto" && !l && (m = !1),
        m)
      ) {
        const v = f
          ? a < i.activeIndex
            ? "prev"
            : "next"
          : a - i.activeIndex - 1 < i.params.slidesPerView
            ? "next"
            : "prev";
        i.loopFix({
          direction: v,
          slideTo: !0,
          activeSlideIndex: v === "next" ? a + 1 : a - o + 1,
          slideRealIndex: v === "next" ? i.realIndex : void 0,
        });
      }
      if (l) {
        const v = s * i.params.grid.rows;
        s = i.slides.filter(
          (g) => g.getAttribute("data-swiper-slide-index") * 1 === v,
        )[0].column;
      } else s = i.getSlideIndexByData(s);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(s, t, n, r);
    }),
    i
  );
}
function jh(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: l, animating: s } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let a = l.slidesPerGroup;
  l.slidesPerView === "auto" &&
    l.slidesPerGroup === 1 &&
    l.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const o = r.activeIndex < l.slidesPerGroupSkip ? 1 : a,
    f = r.virtual && l.virtual.enabled;
  if (l.loop) {
    if (s && !f && l.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && l.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + o, e, t, n);
        }),
        !0
      );
  }
  return l.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + o, e, t, n);
}
function kh(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: l,
      slidesGrid: s,
      rtlTranslate: a,
      enabled: o,
      animating: f,
    } = r;
  if (!o || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const p = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (f && !p && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const m = a ? r.translate : -r.translate;
  function v(d) {
    return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d);
  }
  const g = v(m),
    y = l.map((d) => v(d));
  let x = l[y.indexOf(g) - 1];
  if (typeof x > "u" && i.cssMode) {
    let d;
    l.forEach((c, h) => {
      g >= c && (d = h);
    }),
      typeof d < "u" && (x = l[d > 0 ? d - 1 : d]);
  }
  let j = 0;
  if (
    (typeof x < "u" &&
      ((j = s.indexOf(x)),
      j < 0 && (j = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((j = j - r.slidesPerViewDynamic("previous", !0) + 1),
        (j = Math.max(j, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const d =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(d, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(j, e, t, n);
      }),
      !0
    );
  return r.slideTo(j, e, t, n);
}
function Lh(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function Ph(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let l = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, l),
    a = s + Math.floor((l - s) / i.params.slidesPerGroup),
    o = i.rtlTranslate ? i.translate : -i.translate;
  if (o >= i.snapGrid[a]) {
    const f = i.snapGrid[a],
      p = i.snapGrid[a + 1];
    o - f > (p - f) * r && (l += i.params.slidesPerGroup);
  } else {
    const f = i.snapGrid[a - 1],
      p = i.snapGrid[a];
    o - f <= (p - f) * r && (l -= i.params.slidesPerGroup);
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, i.slidesGrid.length - 1)),
    i.slideTo(l, e, t, n)
  );
}
function _h() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    l;
  const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (l = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              Qe(n, `${s}[data-swiper-slide-index="${l}"]`)[0],
            )),
            hs(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              Qe(n, `${s}[data-swiper-slide-index="${l}"]`)[0],
            )),
            hs(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i);
  } else e.slideTo(i);
}
var Ih = {
  slideTo: Ch,
  slideToLoop: Th,
  slideNext: jh,
  slidePrev: kh,
  slideReset: Lh,
  slideToClosest: Ph,
  slideToClickedSlide: _h,
};
function Mh(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      Qe(r, `.${n.slideClass}, swiper-slide`).forEach((m, v) => {
        m.setAttribute("data-swiper-slide-index", v);
      });
    },
    l = t.grid && n.grid && n.grid.rows > 1,
    s = n.slidesPerGroup * (l ? n.grid.rows : 1),
    a = t.slides.length % s !== 0,
    o = l && t.slides.length % n.grid.rows !== 0,
    f = (p) => {
      for (let m = 0; m < p; m += 1) {
        const v = t.isElement
          ? pr("swiper-slide", [n.slideBlankClass])
          : pr("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(v);
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const p = s - (t.slides.length % s);
      f(p), t.recalcSlides(), t.updateSlides();
    } else
      Ti(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    i();
  } else if (o) {
    if (n.loopAddBlankSlides) {
      const p = n.grid.rows - (t.slides.length % n.grid.rows);
      f(p), t.recalcSlides(), t.updateSlides();
    } else
      Ti(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function Nh(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: l,
    byController: s,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const {
      slides: f,
      allowSlidePrev: p,
      allowSlideNext: m,
      slidesEl: v,
      params: g,
    } = o,
    { centeredSlides: y } = g;
  if (
    ((o.allowSlidePrev = !0),
    (o.allowSlideNext = !0),
    o.virtual && g.virtual.enabled)
  ) {
    n &&
      (!g.centeredSlides && o.snapIndex === 0
        ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
        : g.centeredSlides && o.snapIndex < g.slidesPerView
          ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
          : o.snapIndex === o.snapGrid.length - 1 &&
            o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
      (o.allowSlidePrev = p),
      (o.allowSlideNext = m),
      o.emit("loopFix");
    return;
  }
  let x = g.slidesPerView;
  x === "auto"
    ? (x = o.slidesPerViewDynamic())
    : ((x = Math.ceil(parseFloat(g.slidesPerView, 10))),
      y && x % 2 === 0 && (x = x + 1));
  const j = g.slidesPerGroupAuto ? x : g.slidesPerGroup;
  let d = j;
  d % j !== 0 && (d += j - (d % j)),
    (d += g.loopAdditionalSlides),
    (o.loopedSlides = d);
  const c = o.grid && g.grid && g.grid.rows > 1;
  f.length < x + d
    ? Ti(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : c &&
      g.grid.fill === "row" &&
      Ti(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      );
  const h = [],
    w = [];
  let S = o.activeIndex;
  typeof l > "u"
    ? (l = o.getSlideIndex(
        f.filter((N) => N.classList.contains(g.slideActiveClass))[0],
      ))
    : (S = l);
  const k = r === "next" || !r,
    M = r === "prev" || !r;
  let T = 0,
    I = 0;
  const C = c ? Math.ceil(f.length / g.grid.rows) : f.length,
    O = (c ? f[l].column : l) + (y && typeof i > "u" ? -x / 2 + 0.5 : 0);
  if (O < d) {
    T = Math.max(d - O, j);
    for (let N = 0; N < d - O; N += 1) {
      const R = N - Math.floor(N / C) * C;
      if (c) {
        const U = C - R - 1;
        for (let de = f.length - 1; de >= 0; de -= 1)
          f[de].column === U && h.push(de);
      } else h.push(C - R - 1);
    }
  } else if (O + x > C - d) {
    I = Math.max(O - (C - d * 2), j);
    for (let N = 0; N < I; N += 1) {
      const R = N - Math.floor(N / C) * C;
      c
        ? f.forEach((U, de) => {
            U.column === R && w.push(de);
          })
        : w.push(R);
    }
  }
  if (
    ((o.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      o.__preventObserver__ = !1;
    }),
    M &&
      h.forEach((N) => {
        (f[N].swiperLoopMoveDOM = !0),
          v.prepend(f[N]),
          (f[N].swiperLoopMoveDOM = !1);
      }),
    k &&
      w.forEach((N) => {
        (f[N].swiperLoopMoveDOM = !0),
          v.append(f[N]),
          (f[N].swiperLoopMoveDOM = !1);
      }),
    o.recalcSlides(),
    g.slidesPerView === "auto"
      ? o.updateSlides()
      : c &&
        ((h.length > 0 && M) || (w.length > 0 && k)) &&
        o.slides.forEach((N, R) => {
          o.grid.updateSlide(R, N, o.slides);
        }),
    g.watchSlidesProgress && o.updateSlidesOffset(),
    n)
  ) {
    if (h.length > 0 && M) {
      if (typeof t > "u") {
        const N = o.slidesGrid[S],
          U = o.slidesGrid[S + T] - N;
        a
          ? o.setTranslate(o.translate - U)
          : (o.slideTo(S + Math.ceil(T), 0, !1, !0),
            i &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - U),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - U)));
      } else if (i) {
        const N = c ? h.length / g.grid.rows : h.length;
        o.slideTo(o.activeIndex + N, 0, !1, !0),
          (o.touchEventsData.currentTranslate = o.translate);
      }
    } else if (w.length > 0 && k)
      if (typeof t > "u") {
        const N = o.slidesGrid[S],
          U = o.slidesGrid[S - I] - N;
        a
          ? o.setTranslate(o.translate - U)
          : (o.slideTo(S - I, 0, !1, !0),
            i &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - U),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - U)));
      } else {
        const N = c ? w.length / g.grid.rows : w.length;
        o.slideTo(o.activeIndex - N, 0, !1, !0);
      }
  }
  if (
    ((o.allowSlidePrev = p),
    (o.allowSlideNext = m),
    o.controller && o.controller.control && !s)
  ) {
    const N = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: l,
      byController: !0,
    };
    Array.isArray(o.controller.control)
      ? o.controller.control.forEach((R) => {
          !R.destroyed &&
            R.params.loop &&
            R.loopFix({
              ...N,
              slideTo: R.params.slidesPerView === g.slidesPerView ? n : !1,
            });
        })
      : o.controller.control instanceof o.constructor &&
        o.controller.control.params.loop &&
        o.controller.control.loopFix({
          ...N,
          slideTo:
            o.controller.control.params.slidesPerView === g.slidesPerView
              ? n
              : !1,
        });
  }
  o.emit("loopFix");
}
function zh() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const l =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[l] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var Oh = { loopCreate: Mh, loopFix: Nh, loopDestroy: zh };
function Ah(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function Dh() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Rh = { setGrabCursor: Ah, unsetGrabCursor: Dh };
function Fh(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Nt() || r === Me()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function ka(e, t, n) {
  const r = Me(),
    { params: i } = e,
    l = i.edgeSwipeDetection,
    s = i.edgeSwipeThreshold;
  return l && (n <= s || n >= r.innerWidth - s)
    ? l === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function Bh(e) {
  const t = this,
    n = Nt();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    ka(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: l, touches: s, enabled: a } = t;
  if (
    !a ||
    (!l.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && l.preventInteractionOnTransition)
  )
    return;
  !t.animating && l.cssMode && l.loop && t.loopFix();
  let o = r.target;
  if (
    (l.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(o)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const f = !!l.noSwipingClass && l.noSwipingClass !== "",
    p = r.composedPath ? r.composedPath() : r.path;
  f && r.target && r.target.shadowRoot && p && (o = p[0]);
  const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    v = !!(r.target && r.target.shadowRoot);
  if (l.noSwiping && (v ? Fh(m, o) : o.closest(m))) {
    t.allowClick = !0;
    return;
  }
  if (l.swipeHandler && !o.closest(l.swipeHandler)) return;
  (s.currentX = r.pageX), (s.currentY = r.pageY);
  const g = s.currentX,
    y = s.currentY;
  if (!ka(t, r, g)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (s.startX = g),
    (s.startY = y),
    (i.touchStartTime = Ci()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (i.allowThresholdMove = !1);
  let x = !0;
  o.matches(i.focusableElements) &&
    ((x = !1), o.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== o &&
      n.activeElement.blur();
  const j = x && t.allowTouchMove && l.touchStartPreventDefault;
  (l.touchStartForcePreventDefault || j) &&
    !o.isContentEditable &&
    r.preventDefault(),
    l.freeMode &&
      l.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function $h(e) {
  const t = Nt(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: l, rtlTranslate: s, enabled: a } = n;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let o = e;
  if (
    (o.originalEvent && (o = o.originalEvent),
    o.type === "pointermove" &&
      (r.touchId !== null || o.pointerId !== r.pointerId))
  )
    return;
  let f;
  if (o.type === "touchmove") {
    if (
      ((f = [...o.changedTouches].filter((k) => k.identifier === r.touchId)[0]),
      !f || f.identifier !== r.touchId)
    )
      return;
  } else f = o;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
    return;
  }
  const p = f.pageX,
    m = f.pageY;
  if (o.preventedByNestedSwiper) {
    (l.startX = p), (l.startY = m);
    return;
  }
  if (!n.allowTouchMove) {
    o.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(l, { startX: p, startY: m, currentX: p, currentY: m }),
        (r.touchStartTime = Ci()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (m < l.startY && n.translate <= n.maxTranslate()) ||
        (m > l.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (p < l.startX && n.translate <= n.maxTranslate()) ||
      (p > l.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    o.target === t.activeElement &&
    o.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", o),
    (l.previousX = l.currentX),
    (l.previousY = l.currentY),
    (l.currentX = p),
    (l.currentY = m);
  const v = l.currentX - l.startX,
    g = l.currentY - l.startY;
  if (n.params.threshold && Math.sqrt(v ** 2 + g ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let k;
    (n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (r.isScrolling = !1)
      : v * v + g * g >= 25 &&
        ((k = (Math.atan2(Math.abs(g), Math.abs(v)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? k > i.touchAngle
          : 90 - k > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", o),
    typeof r.startMoving > "u" &&
      (l.currentX !== l.startX || l.currentY !== l.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (o.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && o.cancelable && o.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && o.stopPropagation();
  let y = n.isHorizontal() ? v : g,
    x = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
  i.oneWayMovement &&
    ((y = Math.abs(y) * (s ? 1 : -1)), (x = Math.abs(x) * (s ? 1 : -1))),
    (l.diff = y),
    (y *= i.touchRatio),
    s && ((y = -y), (x = -x));
  const j = n.touchesDirection;
  (n.swipeDirection = y > 0 ? "prev" : "next"),
    (n.touchesDirection = x > 0 ? "prev" : "next");
  const d = n.params.loop && !i.cssMode,
    c =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (d && c && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const k = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(k);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o);
  }
  let h;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      j !== n.touchesDirection &&
      d &&
      c &&
      Math.abs(y) >= 1)
  ) {
    Object.assign(l, {
      startX: p,
      startY: m,
      currentX: p,
      currentY: m,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", o),
    (r.isMoved = !0),
    (r.currentTranslate = y + r.startTranslate);
  let w = !0,
    S = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (S = 0),
    y > 0
      ? (d &&
          c &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + y) ** S)))
      : y < 0 &&
        (d &&
          c &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - y) ** S))),
    w && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (r.currentTranslate = r.startTranslate),
          (l.diff = n.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function Vh(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((S) => S.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type,
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: s,
    touches: a,
    rtlTranslate: o,
    slidesGrid: f,
    enabled: p,
  } = t;
  if (!p || (!s.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && s.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  s.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const m = Ci(),
    v = m - n.touchStartTime;
  if (t.allowClick) {
    const S = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((S && S[0]) || r.target, S),
      t.emit("tap click", r),
      v < 300 &&
        m - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = Ci()),
    hs(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let g;
  if (
    (s.followFinger
      ? (g = o ? t.translate : -t.translate)
      : (g = -n.currentTranslate),
    s.cssMode)
  )
    return;
  if (s.freeMode && s.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: g });
    return;
  }
  const y = g >= -t.maxTranslate() && !t.params.loop;
  let x = 0,
    j = t.slidesSizesGrid[0];
  for (
    let S = 0;
    S < f.length;
    S += S < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
  ) {
    const k = S < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    typeof f[S + k] < "u"
      ? (y || (g >= f[S] && g < f[S + k])) && ((x = S), (j = f[S + k] - f[S]))
      : (y || g >= f[S]) && ((x = S), (j = f[f.length - 1] - f[f.length - 2]));
  }
  let d = null,
    c = null;
  s.rewind &&
    (t.isBeginning
      ? (c =
          s.virtual && s.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (d = 0));
  const h = (g - f[x]) / j,
    w = x < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
  if (v > s.longSwipesMs) {
    if (!s.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (h >= s.longSwipesRatio
        ? t.slideTo(s.rewind && t.isEnd ? d : x + w)
        : t.slideTo(x)),
      t.swipeDirection === "prev" &&
        (h > 1 - s.longSwipesRatio
          ? t.slideTo(x + w)
          : c !== null && h < 0 && Math.abs(h) > s.longSwipesRatio
            ? t.slideTo(c)
            : t.slideTo(x));
  } else {
    if (!s.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(x + w)
        : t.slideTo(x)
      : (t.swipeDirection === "next" && t.slideTo(d !== null ? d : x + w),
        t.swipeDirection === "prev" && t.slideTo(c !== null ? c : x));
  }
}
function La() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e,
    s = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = s && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !s
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
}
function Hh(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Uh() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const l = e.maxTranslate() - e.minTranslate();
  l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function Gh(e) {
  const t = this;
  Jr(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function Wh() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const Qd = (e, t) => {
  const n = Nt(),
    { params: r, el: i, wrapperEl: l, device: s } = e,
    a = !!r.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    f = t;
  n[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: a }),
    i[o]("touchstart", e.onTouchStart, { passive: !1 }),
    i[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[o]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("touchend", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[o]("click", e.onClick, !0),
    r.cssMode && l[o]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[f](
          s.ios || s.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          La,
          !0,
        )
      : e[f]("observerUpdate", La, !0),
    i[o]("load", e.onLoad, { capture: !0 });
};
function bh() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = Bh.bind(e)),
    (e.onTouchMove = $h.bind(e)),
    (e.onTouchEnd = Vh.bind(e)),
    (e.onDocumentTouchStart = Wh.bind(e)),
    t.cssMode && (e.onScroll = Uh.bind(e)),
    (e.onClick = Hh.bind(e)),
    (e.onLoad = Gh.bind(e)),
    Qd(e, "on");
}
function Yh() {
  Qd(this, "off");
}
var Qh = { attachEvents: bh, detachEvents: Yh };
const Pa = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Xh() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    l = r.breakpoints;
  if (!l || (l && Object.keys(l).length === 0)) return;
  const s = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
  if (!s || e.currentBreakpoint === s) return;
  const o = (s in l ? l[s] : void 0) || e.originalParams,
    f = Pa(e, r),
    p = Pa(e, o),
    m = e.params.grabCursor,
    v = o.grabCursor,
    g = r.enabled;
  f && !p
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !f &&
      p &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((o.grid.fill && o.grid.fill === "column") ||
        (!o.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    m && !v ? e.unsetGrabCursor() : !m && v && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((h) => {
      if (typeof o[h] > "u") return;
      const w = r[h] && r[h].enabled,
        S = o[h] && o[h].enabled;
      w && !S && e[h].disable(), !w && S && e[h].enable();
    });
  const y = o.direction && o.direction !== r.direction,
    x = r.loop && (o.slidesPerView !== r.slidesPerView || y),
    j = r.loop;
  y && n && e.changeDirection(), je(e.params, o);
  const d = e.params.enabled,
    c = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    g && !d ? e.disable() : !g && d && e.enable(),
    (e.currentBreakpoint = s),
    e.emit("_beforeBreakpoint", o),
    n &&
      (x
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !j && c
          ? (e.loopCreate(t), e.updateSlides())
          : j && !c && e.loopDestroy()),
    e.emit("breakpoint", o);
}
function Kh(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = Me(),
    l = t === "window" ? i.innerHeight : n.clientHeight,
    s = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1));
        return { value: l * o, point: a };
      }
      return { value: a, point: a };
    });
  s.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < s.length; a += 1) {
    const { point: o, value: f } = s[a];
    t === "window"
      ? i.matchMedia(`(min-width: ${f}px)`).matches && (r = o)
      : f <= n.clientWidth && (r = o);
  }
  return r || "max";
}
var qh = { setBreakpoint: Xh, getBreakpoint: Kh };
function Jh(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function Zh() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: l } = e,
    s = Jh(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: l.android },
        { ios: l.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    );
  t.push(...s), i.classList.add(...t), e.emitContainerClasses();
}
function em() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var tm = { addClasses: Zh, removeClasses: em };
function nm() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > l;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var rm = { checkOverflow: nm },
  gs = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function im(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      l = r[i];
    if (typeof l != "object" || l === null) {
      je(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in l))
    ) {
      je(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      je(t, r);
  };
}
const wl = {
    eventsEmitter: th,
    update: fh,
    translate: yh,
    transition: Eh,
    slide: Ih,
    loop: Oh,
    grabCursor: Rh,
    events: Qh,
    breakpoints: qh,
    checkOverflow: rm,
    classes: tm,
  },
  xl = {};
let ho = class Ze {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++)
      i[l] = arguments[l];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = je({}, n)),
      t && !n.el && (n.el = t);
    const s = Nt();
    if (
      n.el &&
      typeof n.el == "string" &&
      s.querySelectorAll(n.el).length > 1
    ) {
      const p = [];
      return (
        s.querySelectorAll(n.el).forEach((m) => {
          const v = je({}, n, { el: m });
          p.push(new Ze(v));
        }),
        p
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = Wd()),
      (a.device = bd({ userAgent: n.userAgent })),
      (a.browser = Jp()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const o = {};
    a.modules.forEach((p) => {
      p({
        params: n,
        swiper: a,
        extendParams: im(n, o),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const f = je({}, gs, o);
    return (
      (a.params = je({}, f, xl, n)),
      (a.originalParams = je({}, a.params)),
      (a.passedParams = je({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((p) => {
          a.on(p, a.params.on[p]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = Qe(n, `.${r.slideClass}, swiper-slide`),
      l = hr(i[0]);
    return hr(t) - l;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t,
      )[0],
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = Qe(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      s = (r.maxTranslate() - i) * t + i;
    r.translateTo(s, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0,
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0,
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: l,
        slidesGrid: s,
        slidesSizesGrid: a,
        size: o,
        activeIndex: f,
      } = r;
    let p = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let m = l[f] ? Math.ceil(l[f].swiperSlideSize) : 0,
        v;
      for (let g = f + 1; g < l.length; g += 1)
        l[g] &&
          !v &&
          ((m += Math.ceil(l[g].swiperSlideSize)), (p += 1), m > o && (v = !0));
      for (let g = f - 1; g >= 0; g -= 1)
        l[g] &&
          !v &&
          ((m += l[g].swiperSlideSize), (p += 1), m > o && (v = !0));
    } else if (t === "current")
      for (let m = f + 1; m < l.length; m += 1)
        (n ? s[m] + a[m] - s[f] < o : s[m] - s[f] < o) && (p += 1);
    else for (let m = f - 1; m >= 0; m -= 1) s[f] - s[m] < o && (p += 1);
    return p;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
        s.complete && Jr(t, s);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let l;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const s = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        l = t.slideTo(s.length - 1, 0, !1, !0);
      } else l = t.slideTo(t.activeIndex, 0, !1, !0);
      l || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((l) => {
          t === "vertical" ? (l.style.width = "") : (l.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let s =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : Qe(r, i())[0];
    return (
      !s &&
        n.params.createElements &&
        ((s = pr("div", n.params.wrapperClass)),
        r.append(s),
        Qe(r, `.${n.params.slideClass}`).forEach((a) => {
          s.append(a);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: s,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : s,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || St(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || St(r, "direction") === "rtl"),
        wrongRTL: St(s, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((l) => {
        l.complete
          ? Jr(n, l)
          : l.addEventListener("load", (s) => {
              Jr(n, s.target);
            });
      }),
      vs(n),
      (n.initialized = !0),
      vs(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: l, wrapperEl: s, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          l.removeAttribute("style"),
          s.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((o) => {
              o.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass,
              ),
                o.removeAttribute("style"),
                o.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((o) => {
          r.off(o);
        }),
        t !== !1 && ((r.el.swiper = null), Up(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    je(xl, t);
  }
  static get extendedDefaults() {
    return xl;
  }
  static get defaults() {
    return gs;
  }
  static installModule(t) {
    Ze.prototype.__modules__ || (Ze.prototype.__modules__ = []);
    const n = Ze.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Ze.installModule(n)), Ze)
      : (Ze.installModule(t), Ze);
  }
};
Object.keys(wl).forEach((e) => {
  Object.keys(wl[e]).forEach((t) => {
    ho.prototype[t] = wl[e][t];
  });
});
ho.use([Zp, eh]);
const Xd = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Qt(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function gn(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Qt(t[r]) && Qt(e[r]) && Object.keys(t[r]).length > 0
          ? t[r].__swiper__
            ? (e[r] = t[r])
            : gn(e[r], t[r])
          : (e[r] = t[r]);
    });
}
function Kd(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function qd(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Jd(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function Zd(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function lm(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function sm(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: l,
    prevEl: s,
    scrollbarEl: a,
    paginationEl: o,
  } = e;
  const f = i.filter(
      (I) => I !== "children" && I !== "direction" && I !== "wrapperClass",
    ),
    {
      params: p,
      pagination: m,
      navigation: v,
      scrollbar: g,
      virtual: y,
      thumbs: x,
    } = t;
  let j, d, c, h, w, S, k, M;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    p.thumbs &&
    !p.thumbs.swiper &&
    (j = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      p.controller &&
      !p.controller.control &&
      (d = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || o) &&
      (p.pagination || p.pagination === !1) &&
      m &&
      !m.el &&
      (c = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || a) &&
      (p.scrollbar || p.scrollbar === !1) &&
      g &&
      !g.el &&
      (h = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || s) &&
      (r.navigation.nextEl || l) &&
      (p.navigation || p.navigation === !1) &&
      v &&
      !v.prevEl &&
      !v.nextEl &&
      (w = !0);
  const T = (I) => {
    t[I] &&
      (t[I].destroy(),
      I === "navigation"
        ? (t.isElement && (t[I].prevEl.remove(), t[I].nextEl.remove()),
          (p[I].prevEl = void 0),
          (p[I].nextEl = void 0),
          (t[I].prevEl = void 0),
          (t[I].nextEl = void 0))
        : (t.isElement && t[I].el.remove(),
          (p[I].el = void 0),
          (t[I].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (p.loop && !r.loop ? (S = !0) : !p.loop && r.loop ? (k = !0) : (M = !0)),
    f.forEach((I) => {
      if (Qt(p[I]) && Qt(r[I]))
        Object.assign(p[I], r[I]),
          (I === "navigation" || I === "pagination" || I === "scrollbar") &&
            "enabled" in r[I] &&
            !r[I].enabled &&
            T(I);
      else {
        const C = r[I];
        (C === !0 || C === !1) &&
        (I === "navigation" || I === "pagination" || I === "scrollbar")
          ? C === !1 && T(I)
          : (p[I] = r[I]);
      }
    }),
    f.includes("controller") &&
      !d &&
      t.controller &&
      t.controller.control &&
      p.controller &&
      p.controller.control &&
      (t.controller.control = p.controller.control),
    i.includes("children") && n && y && p.virtual.enabled
      ? ((y.slides = n), y.update(!0))
      : i.includes("virtual") &&
        y &&
        p.virtual.enabled &&
        (n && (y.slides = n), y.update(!0)),
    i.includes("children") && n && p.loop && (M = !0),
    j && x.init() && x.update(!0),
    d && (t.controller.control = p.controller.control),
    c &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-pagination"),
        o.part.add("pagination"),
        t.el.appendChild(o)),
      o && (p.pagination.el = o),
      m.init(),
      m.render(),
      m.update()),
    h &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-scrollbar"),
        a.part.add("scrollbar"),
        t.el.appendChild(a)),
      a && (p.scrollbar.el = a),
      g.init(),
      g.updateSize(),
      g.setTranslate()),
    w &&
      (t.isElement &&
        ((!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-next"),
          (l.innerHTML = t.hostEl.constructor.nextButtonSvg),
          l.part.add("button-next"),
          t.el.appendChild(l)),
        (!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-prev"),
          (s.innerHTML = t.hostEl.constructor.prevButtonSvg),
          s.part.add("button-prev"),
          t.el.appendChild(s))),
      l && (p.navigation.nextEl = l),
      s && (p.navigation.prevEl = s),
      v.init(),
      v.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (S || M) && t.loopDestroy(),
    (k || M) && t.loopCreate(),
    t.update();
}
function om(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  gn(n, gs), (n._emitClasses = !0), (n.init = !1);
  const l = {},
    s = Xd.map((o) => o.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((o) => {
      typeof e[o] > "u" ||
        (s.indexOf(o) >= 0
          ? Qt(e[o])
            ? ((n[o] = {}), (i[o] = {}), gn(n[o], e[o]), gn(i[o], e[o]))
            : ((n[o] = e[o]), (i[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
            ? t
              ? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
              : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (l[o] = e[o]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
    }),
    { params: n, passedParams: i, rest: l, events: r }
  );
}
function am(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: l,
    scrollbarEl: s,
    swiper: a,
  } = e;
  Kd(t) &&
    r &&
    i &&
    ((a.params.navigation.nextEl = r),
    (a.originalParams.navigation.nextEl = r),
    (a.params.navigation.prevEl = i),
    (a.originalParams.navigation.prevEl = i)),
    qd(t) &&
      l &&
      ((a.params.pagination.el = l), (a.originalParams.pagination.el = l)),
    Jd(t) &&
      s &&
      ((a.params.scrollbar.el = s), (a.originalParams.scrollbar.el = s)),
    a.init(n);
}
function um(e, t, n, r, i) {
  const l = [];
  if (!t) return l;
  const s = (o) => {
    l.indexOf(o) < 0 && l.push(o);
  };
  if (n && r) {
    const o = r.map(i),
      f = n.map(i);
    o.join("") !== f.join("") && s("children"),
      r.length !== n.length && s("children");
  }
  return (
    Xd.filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (Qt(e[o]) && Qt(t[o])) {
            const f = Object.keys(e[o]),
              p = Object.keys(t[o]);
            f.length !== p.length
              ? s(o)
              : (f.forEach((m) => {
                  e[o][m] !== t[o][m] && s(o);
                }),
                p.forEach((m) => {
                  e[o][m] !== t[o][m] && s(o);
                }));
          } else e[o] !== t[o] && s(o);
      }),
    l
  );
}
const dm = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function ji() {
  return (
    (ji = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ji.apply(this, arguments)
  );
}
function ec(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function tc(e) {
  const t = [];
  return (
    te.Children.toArray(e).forEach((n) => {
      ec(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          tc(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function cm(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    te.Children.toArray(e).forEach((r) => {
      if (ec(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = tc(r.props.children);
        i.length > 0 ? i.forEach((l) => t.push(l)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function fm(e, t, n) {
  if (!n) return null;
  const r = (p) => {
      let m = p;
      return (
        p < 0 ? (m = t.length + p) : m >= t.length && (m = m - t.length), m
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: l, to: s } = n,
    a = e.params.loop ? -t.length : 0,
    o = e.params.loop ? t.length * 2 : t.length,
    f = [];
  for (let p = a; p < o; p += 1) p >= l && p <= s && f.push(t[r(p)]);
  return f.map((p, m) =>
    te.cloneElement(p, {
      swiper: e,
      style: i,
      key: p.props.virtualIndex || p.key || `slide-${m}`,
    }),
  );
}
function Xn(e, t) {
  return typeof window > "u" ? G.useEffect(e, t) : G.useLayoutEffect(e, t);
}
const _a = G.createContext(null),
  pm = G.createContext(null),
  nc = G.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: l,
        onSwiper: s,
        ...a
      } = e === void 0 ? {} : e,
      o = !1;
    const [f, p] = G.useState("swiper"),
      [m, v] = G.useState(null),
      [g, y] = G.useState(!1),
      x = G.useRef(!1),
      j = G.useRef(null),
      d = G.useRef(null),
      c = G.useRef(null),
      h = G.useRef(null),
      w = G.useRef(null),
      S = G.useRef(null),
      k = G.useRef(null),
      M = G.useRef(null),
      { params: T, passedParams: I, rest: C, events: z } = om(a),
      { slides: O, slots: N } = cm(l),
      R = () => {
        y(!g);
      };
    Object.assign(T.on, {
      _containerClasses(_, D) {
        p(D);
      },
    });
    const U = () => {
      Object.assign(T.on, z), (o = !0);
      const _ = { ...T };
      if (
        (delete _.wrapperClass,
        (d.current = new ho(_)),
        d.current.virtual && d.current.params.virtual.enabled)
      ) {
        d.current.virtual.slides = O;
        const D = {
          cache: !1,
          slides: O,
          renderExternal: v,
          renderExternalUpdate: !1,
        };
        gn(d.current.params.virtual, D),
          gn(d.current.originalParams.virtual, D);
      }
    };
    j.current || U(), d.current && d.current.on("_beforeBreakpoint", R);
    const de = () => {
        o ||
          !z ||
          !d.current ||
          Object.keys(z).forEach((_) => {
            d.current.on(_, z[_]);
          });
      },
      L = () => {
        !z ||
          !d.current ||
          Object.keys(z).forEach((_) => {
            d.current.off(_, z[_]);
          });
      };
    G.useEffect(() => () => {
      d.current && d.current.off("_beforeBreakpoint", R);
    }),
      G.useEffect(() => {
        !x.current &&
          d.current &&
          (d.current.emitSlidesClasses(), (x.current = !0));
      }),
      Xn(() => {
        if ((t && (t.current = j.current), !!j.current))
          return (
            d.current.destroyed && U(),
            am(
              {
                el: j.current,
                nextEl: w.current,
                prevEl: S.current,
                paginationEl: k.current,
                scrollbarEl: M.current,
                swiper: d.current,
              },
              T,
            ),
            s && !d.current.destroyed && s(d.current),
            () => {
              d.current && !d.current.destroyed && d.current.destroy(!0, !1);
            }
          );
      }, []),
      Xn(() => {
        de();
        const _ = um(I, c.current, O, h.current, (D) => D.key);
        return (
          (c.current = I),
          (h.current = O),
          _.length &&
            d.current &&
            !d.current.destroyed &&
            sm({
              swiper: d.current,
              slides: O,
              passedParams: I,
              changedParams: _,
              nextEl: w.current,
              prevEl: S.current,
              scrollbarEl: M.current,
              paginationEl: k.current,
            }),
          () => {
            L();
          }
        );
      }),
      Xn(() => {
        dm(d.current);
      }, [m]);
    function E() {
      return T.virtual
        ? fm(d.current, O, m)
        : O.map((_, D) =>
            te.cloneElement(_, { swiper: d.current, swiperSlideIndex: D }),
          );
    }
    return te.createElement(
      r,
      ji({ ref: j, className: Zd(`${f}${n ? ` ${n}` : ""}`) }, C),
      te.createElement(
        pm.Provider,
        { value: d.current },
        N["container-start"],
        te.createElement(
          i,
          { className: lm(T.wrapperClass) },
          N["wrapper-start"],
          E(),
          N["wrapper-end"],
        ),
        Kd(T) &&
          te.createElement(
            te.Fragment,
            null,
            te.createElement("div", {
              ref: S,
              className: "swiper-button-prev",
            }),
            te.createElement("div", {
              ref: w,
              className: "swiper-button-next",
            }),
          ),
        Jd(T) &&
          te.createElement("div", { ref: M, className: "swiper-scrollbar" }),
        qd(T) &&
          te.createElement("div", { ref: k, className: "swiper-pagination" }),
        N["container-end"],
      ),
    );
  });
nc.displayName = "Swiper";
const pt = G.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: l,
    zoom: s,
    lazy: a,
    virtualIndex: o,
    swiperSlideIndex: f,
    ...p
  } = e === void 0 ? {} : e;
  const m = G.useRef(null),
    [v, g] = G.useState("swiper-slide"),
    [y, x] = G.useState(!1);
  function j(w, S, k) {
    S === m.current && g(k);
  }
  Xn(() => {
    if (
      (typeof f < "u" && (m.current.swiperSlideIndex = f),
      t && (t.current = m.current),
      !(!m.current || !l))
    ) {
      if (l.destroyed) {
        v !== "swiper-slide" && g("swiper-slide");
        return;
      }
      return (
        l.on("_slideClass", j),
        () => {
          l && l.off("_slideClass", j);
        }
      );
    }
  }),
    Xn(() => {
      l && m.current && !l.destroyed && g(l.getSlideClasses(m.current));
    }, [l]);
  const d = {
      isActive: v.indexOf("swiper-slide-active") >= 0,
      isVisible: v.indexOf("swiper-slide-visible") >= 0,
      isPrev: v.indexOf("swiper-slide-prev") >= 0,
      isNext: v.indexOf("swiper-slide-next") >= 0,
    },
    c = () => (typeof r == "function" ? r(d) : r),
    h = () => {
      x(!0);
    };
  return te.createElement(
    n,
    ji(
      {
        ref: m,
        className: Zd(`${v}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": o,
        onLoad: h,
      },
      p,
    ),
    s &&
      te.createElement(
        _a.Provider,
        { value: d },
        te.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof s == "number" ? s : void 0,
          },
          c(),
          a &&
            !y &&
            te.createElement("div", { className: "swiper-lazy-preloader" }),
        ),
      ),
    !s &&
      te.createElement(
        _a.Provider,
        { value: d },
        c(),
        a &&
          !y &&
          te.createElement("div", { className: "swiper-lazy-preloader" }),
      ),
  );
});
pt.displayName = "SwiperSlide";
function rc(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let l = Qe(e.el, `.${r[i]}`)[0];
          l || ((l = pr("div", r[i])), (l.className = r[i]), e.el.append(l)),
            (n[i] = l),
            (t[i] = l);
        }
      }),
    n
  );
}
function hm(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null });
  function l(y) {
    let x;
    return y &&
      typeof y == "string" &&
      t.isElement &&
      ((x = t.el.querySelector(y)), x)
      ? x
      : (y &&
          (typeof y == "string" && (x = [...document.querySelectorAll(y)]),
          t.params.uniqueNavElements &&
          typeof y == "string" &&
          x &&
          x.length > 1 &&
          t.el.querySelectorAll(y).length === 1
            ? (x = t.el.querySelector(y))
            : x && x.length === 1 && (x = x[0])),
        y && !x ? y : x);
  }
  function s(y, x) {
    const j = t.params.navigation;
    (y = B(y)),
      y.forEach((d) => {
        d &&
          (d.classList[x ? "add" : "remove"](...j.disabledClass.split(" ")),
          d.tagName === "BUTTON" && (d.disabled = x),
          t.params.watchOverflow &&
            t.enabled &&
            d.classList[t.isLocked ? "add" : "remove"](j.lockClass));
      });
  }
  function a() {
    const { nextEl: y, prevEl: x } = t.navigation;
    if (t.params.loop) {
      s(x, !1), s(y, !1);
      return;
    }
    s(x, t.isBeginning && !t.params.rewind), s(y, t.isEnd && !t.params.rewind);
  }
  function o(y) {
    y.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"));
  }
  function f(y) {
    y.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext"));
  }
  function p() {
    const y = t.params.navigation;
    if (
      ((t.params.navigation = rc(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(y.nextEl || y.prevEl))
    )
      return;
    let x = l(y.nextEl),
      j = l(y.prevEl);
    Object.assign(t.navigation, { nextEl: x, prevEl: j }),
      (x = B(x)),
      (j = B(j));
    const d = (c, h) => {
      c && c.addEventListener("click", h === "next" ? f : o),
        !t.enabled && c && c.classList.add(...y.lockClass.split(" "));
    };
    x.forEach((c) => d(c, "next")), j.forEach((c) => d(c, "prev"));
  }
  function m() {
    let { nextEl: y, prevEl: x } = t.navigation;
    (y = B(y)), (x = B(x));
    const j = (d, c) => {
      d.removeEventListener("click", c === "next" ? f : o),
        d.classList.remove(...t.params.navigation.disabledClass.split(" "));
    };
    y.forEach((d) => j(d, "next")), x.forEach((d) => j(d, "prev"));
  }
  r("init", () => {
    t.params.navigation.enabled === !1 ? g() : (p(), a());
  }),
    r("toEdge fromEdge lock unlock", () => {
      a();
    }),
    r("destroy", () => {
      m();
    }),
    r("enable disable", () => {
      let { nextEl: y, prevEl: x } = t.navigation;
      if (((y = B(y)), (x = B(x)), t.enabled)) {
        a();
        return;
      }
      [...y, ...x]
        .filter((j) => !!j)
        .forEach((j) => j.classList.add(t.params.navigation.lockClass));
    }),
    r("click", (y, x) => {
      let { nextEl: j, prevEl: d } = t.navigation;
      (j = B(j)), (d = B(d));
      const c = x.target;
      if (t.params.navigation.hideOnClick && !d.includes(c) && !j.includes(c)) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === c || t.pagination.el.contains(c))
        )
          return;
        let h;
        j.length
          ? (h = j[0].classList.contains(t.params.navigation.hiddenClass))
          : d.length &&
            (h = d[0].classList.contains(t.params.navigation.hiddenClass)),
          i(h === !0 ? "navigationShow" : "navigationHide"),
          [...j, ...d]
            .filter((w) => !!w)
            .forEach((w) =>
              w.classList.toggle(t.params.navigation.hiddenClass),
            );
      }
    });
  const v = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        p(),
        a();
    },
    g = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        m();
    };
  Object.assign(t.navigation, {
    enable: v,
    disable: g,
    update: a,
    init: p,
    destroy: m,
  });
}
function yt(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function mm(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const l = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (d) => d,
      formatFractionTotal: (d) => d,
      bulletClass: `${l}-bullet`,
      bulletActiveClass: `${l}-bullet-active`,
      modifierClass: `${l}-`,
      currentClass: `${l}-current`,
      totalClass: `${l}-total`,
      hiddenClass: `${l}-hidden`,
      progressbarFillClass: `${l}-progressbar-fill`,
      progressbarOppositeClass: `${l}-progressbar-opposite`,
      clickableClass: `${l}-clickable`,
      lockClass: `${l}-lock`,
      horizontalClass: `${l}-horizontal`,
      verticalClass: `${l}-vertical`,
      paginationDisabledClass: `${l}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let s,
    a = 0;
  function o() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function f(d, c) {
    const { bulletActiveClass: h } = t.params.pagination;
    d &&
      ((d = d[`${c === "prev" ? "previous" : "next"}ElementSibling`]),
      d &&
        (d.classList.add(`${h}-${c}`),
        (d = d[`${c === "prev" ? "previous" : "next"}ElementSibling`]),
        d && d.classList.add(`${h}-${c}-${c}`)));
  }
  function p(d) {
    const c = d.target.closest(yt(t.params.pagination.bulletClass));
    if (!c) return;
    d.preventDefault();
    const h = hr(c) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === h) return;
      t.slideToLoop(h);
    } else t.slideTo(h);
  }
  function m() {
    const d = t.rtl,
      c = t.params.pagination;
    if (o()) return;
    let h = t.pagination.el;
    h = B(h);
    let w, S;
    const k =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      M = t.params.loop
        ? Math.ceil(k / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((S = t.previousRealIndex || 0),
          (w =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
          ? ((w = t.snapIndex), (S = t.previousSnapIndex))
          : ((S = t.previousIndex || 0), (w = t.activeIndex || 0)),
      c.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const T = t.pagination.bullets;
      let I, C, z;
      if (
        (c.dynamicBullets &&
          ((s = ms(T[0], t.isHorizontal() ? "width" : "height")),
          h.forEach((O) => {
            O.style[t.isHorizontal() ? "width" : "height"] =
              `${s * (c.dynamicMainBullets + 4)}px`;
          }),
          c.dynamicMainBullets > 1 &&
            S !== void 0 &&
            ((a += w - (S || 0)),
            a > c.dynamicMainBullets - 1
              ? (a = c.dynamicMainBullets - 1)
              : a < 0 && (a = 0)),
          (I = Math.max(w - a, 0)),
          (C = I + (Math.min(T.length, c.dynamicMainBullets) - 1)),
          (z = (C + I) / 2)),
        T.forEach((O) => {
          const N = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (R) => `${c.bulletActiveClass}${R}`,
            ),
          ]
            .map((R) =>
              typeof R == "string" && R.includes(" ") ? R.split(" ") : R,
            )
            .flat();
          O.classList.remove(...N);
        }),
        h.length > 1)
      )
        T.forEach((O) => {
          const N = hr(O);
          N === w
            ? O.classList.add(...c.bulletActiveClass.split(" "))
            : t.isElement && O.setAttribute("part", "bullet"),
            c.dynamicBullets &&
              (N >= I &&
                N <= C &&
                O.classList.add(...`${c.bulletActiveClass}-main`.split(" ")),
              N === I && f(O, "prev"),
              N === C && f(O, "next"));
        });
      else {
        const O = T[w];
        if (
          (O && O.classList.add(...c.bulletActiveClass.split(" ")),
          t.isElement &&
            T.forEach((N, R) => {
              N.setAttribute("part", R === w ? "bullet-active" : "bullet");
            }),
          c.dynamicBullets)
        ) {
          const N = T[I],
            R = T[C];
          for (let U = I; U <= C; U += 1)
            T[U] &&
              T[U].classList.add(...`${c.bulletActiveClass}-main`.split(" "));
          f(N, "prev"), f(R, "next");
        }
      }
      if (c.dynamicBullets) {
        const O = Math.min(T.length, c.dynamicMainBullets + 4),
          N = (s * O - s) / 2 - z * s,
          R = d ? "right" : "left";
        T.forEach((U) => {
          U.style[t.isHorizontal() ? R : "top"] = `${N}px`;
        });
      }
    }
    h.forEach((T, I) => {
      if (
        (c.type === "fraction" &&
          (T.querySelectorAll(yt(c.currentClass)).forEach((C) => {
            C.textContent = c.formatFractionCurrent(w + 1);
          }),
          T.querySelectorAll(yt(c.totalClass)).forEach((C) => {
            C.textContent = c.formatFractionTotal(M);
          })),
        c.type === "progressbar")
      ) {
        let C;
        c.progressbarOpposite
          ? (C = t.isHorizontal() ? "vertical" : "horizontal")
          : (C = t.isHorizontal() ? "horizontal" : "vertical");
        const z = (w + 1) / M;
        let O = 1,
          N = 1;
        C === "horizontal" ? (O = z) : (N = z),
          T.querySelectorAll(yt(c.progressbarFillClass)).forEach((R) => {
            (R.style.transform = `translate3d(0,0,0) scaleX(${O}) scaleY(${N})`),
              (R.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      c.type === "custom" && c.renderCustom
        ? ((T.innerHTML = c.renderCustom(t, w + 1, M)),
          I === 0 && i("paginationRender", T))
        : (I === 0 && i("paginationRender", T), i("paginationUpdate", T)),
        t.params.watchOverflow &&
          t.enabled &&
          T.classList[t.isLocked ? "add" : "remove"](c.lockClass);
    });
  }
  function v() {
    const d = t.params.pagination;
    if (o()) return;
    const c =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
          ? t.slides.length / Math.ceil(t.params.grid.rows)
          : t.slides.length;
    let h = t.pagination.el;
    h = B(h);
    let w = "";
    if (d.type === "bullets") {
      let S = t.params.loop
        ? Math.ceil(c / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && S > c && (S = c);
      for (let k = 0; k < S; k += 1)
        d.renderBullet
          ? (w += d.renderBullet.call(t, k, d.bulletClass))
          : (w += `<${d.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${d.bulletClass}"></${d.bulletElement}>`);
    }
    d.type === "fraction" &&
      (d.renderFraction
        ? (w = d.renderFraction.call(t, d.currentClass, d.totalClass))
        : (w = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`)),
      d.type === "progressbar" &&
        (d.renderProgressbar
          ? (w = d.renderProgressbar.call(t, d.progressbarFillClass))
          : (w = `<span class="${d.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      h.forEach((S) => {
        d.type !== "custom" && (S.innerHTML = w || ""),
          d.type === "bullets" &&
            t.pagination.bullets.push(...S.querySelectorAll(yt(d.bulletClass)));
      }),
      d.type !== "custom" && i("paginationRender", h[0]);
  }
  function g() {
    t.params.pagination = rc(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" },
    );
    const d = t.params.pagination;
    if (!d.el) return;
    let c;
    typeof d.el == "string" && t.isElement && (c = t.el.querySelector(d.el)),
      !c &&
        typeof d.el == "string" &&
        (c = [...document.querySelectorAll(d.el)]),
      c || (c = d.el),
      !(!c || c.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof d.el == "string" &&
          Array.isArray(c) &&
          c.length > 1 &&
          ((c = [...t.el.querySelectorAll(d.el)]),
          c.length > 1 &&
            (c = c.filter((h) => Gd(h, ".swiper")[0] === t.el)[0])),
        Array.isArray(c) && c.length === 1 && (c = c[0]),
        Object.assign(t.pagination, { el: c }),
        (c = B(c)),
        c.forEach((h) => {
          d.type === "bullets" &&
            d.clickable &&
            h.classList.add(...(d.clickableClass || "").split(" ")),
            h.classList.add(d.modifierClass + d.type),
            h.classList.add(
              t.isHorizontal() ? d.horizontalClass : d.verticalClass,
            ),
            d.type === "bullets" &&
              d.dynamicBullets &&
              (h.classList.add(`${d.modifierClass}${d.type}-dynamic`),
              (a = 0),
              d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)),
            d.type === "progressbar" &&
              d.progressbarOpposite &&
              h.classList.add(d.progressbarOppositeClass),
            d.clickable && h.addEventListener("click", p),
            t.enabled || h.classList.add(d.lockClass);
        }));
  }
  function y() {
    const d = t.params.pagination;
    if (o()) return;
    let c = t.pagination.el;
    c &&
      ((c = B(c)),
      c.forEach((h) => {
        h.classList.remove(d.hiddenClass),
          h.classList.remove(d.modifierClass + d.type),
          h.classList.remove(
            t.isHorizontal() ? d.horizontalClass : d.verticalClass,
          ),
          d.clickable &&
            (h.classList.remove(...(d.clickableClass || "").split(" ")),
            h.removeEventListener("click", p));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((h) =>
          h.classList.remove(...d.bulletActiveClass.split(" ")),
        );
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const d = t.params.pagination;
    let { el: c } = t.pagination;
    (c = B(c)),
      c.forEach((h) => {
        h.classList.remove(d.horizontalClass, d.verticalClass),
          h.classList.add(
            t.isHorizontal() ? d.horizontalClass : d.verticalClass,
          );
      });
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? j() : (g(), v(), m());
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && m();
    }),
    r("snapIndexChange", () => {
      m();
    }),
    r("snapGridLengthChange", () => {
      v(), m();
    }),
    r("destroy", () => {
      y();
    }),
    r("enable disable", () => {
      let { el: d } = t.pagination;
      d &&
        ((d = B(d)),
        d.forEach((c) =>
          c.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass,
          ),
        ));
    }),
    r("lock unlock", () => {
      m();
    }),
    r("click", (d, c) => {
      const h = c.target,
        w = B(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        w &&
        w.length > 0 &&
        !h.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && h === t.navigation.nextEl) ||
            (t.navigation.prevEl && h === t.navigation.prevEl))
        )
          return;
        const S = w[0].classList.contains(t.params.pagination.hiddenClass);
        i(S === !0 ? "paginationShow" : "paginationHide"),
          w.forEach((k) => k.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const x = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: d } = t.pagination;
      d &&
        ((d = B(d)),
        d.forEach((c) =>
          c.classList.remove(t.params.pagination.paginationDisabledClass),
        )),
        g(),
        v(),
        m();
    },
    j = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: d } = t.pagination;
      d &&
        ((d = B(d)),
        d.forEach((c) =>
          c.classList.add(t.params.pagination.paginationDisabledClass),
        )),
        y();
    };
  Object.assign(t.pagination, {
    enable: x,
    disable: j,
    render: v,
    update: m,
    init: g,
    destroy: y,
  });
}
function vm(e) {
  let { swiper: t, extendParams: n, on: r } = e;
  n({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
    },
  }),
    (t.a11y = { clicked: !1 });
  let i = null,
    l,
    s,
    a = new Date().getTime();
  function o(L) {
    const E = i;
    E.length !== 0 && ((E.innerHTML = ""), (E.innerHTML = L));
  }
  function f(L) {
    const E = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(L).replace(/x/g, E);
  }
  function p(L) {
    (L = B(L)),
      L.forEach((E) => {
        E.setAttribute("tabIndex", "0");
      });
  }
  function m(L) {
    (L = B(L)),
      L.forEach((E) => {
        E.setAttribute("tabIndex", "-1");
      });
  }
  function v(L, E) {
    (L = B(L)),
      L.forEach((_) => {
        _.setAttribute("role", E);
      });
  }
  function g(L, E) {
    (L = B(L)),
      L.forEach((_) => {
        _.setAttribute("aria-roledescription", E);
      });
  }
  function y(L, E) {
    (L = B(L)),
      L.forEach((_) => {
        _.setAttribute("aria-controls", E);
      });
  }
  function x(L, E) {
    (L = B(L)),
      L.forEach((_) => {
        _.setAttribute("aria-label", E);
      });
  }
  function j(L, E) {
    (L = B(L)),
      L.forEach((_) => {
        _.setAttribute("id", E);
      });
  }
  function d(L, E) {
    (L = B(L)),
      L.forEach((_) => {
        _.setAttribute("aria-live", E);
      });
  }
  function c(L) {
    (L = B(L)),
      L.forEach((E) => {
        E.setAttribute("aria-disabled", !0);
      });
  }
  function h(L) {
    (L = B(L)),
      L.forEach((E) => {
        E.setAttribute("aria-disabled", !1);
      });
  }
  function w(L) {
    if (L.keyCode !== 13 && L.keyCode !== 32) return;
    const E = t.params.a11y,
      _ = L.target;
    if (
      !(
        t.pagination &&
        t.pagination.el &&
        (_ === t.pagination.el || t.pagination.el.contains(L.target)) &&
        !L.target.matches(yt(t.params.pagination.bulletClass))
      )
    ) {
      if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
        const D = B(t.navigation.prevEl);
        B(t.navigation.nextEl).includes(_) &&
          ((t.isEnd && !t.params.loop) || t.slideNext(),
          t.isEnd ? o(E.lastSlideMessage) : o(E.nextSlideMessage)),
          D.includes(_) &&
            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
            t.isBeginning ? o(E.firstSlideMessage) : o(E.prevSlideMessage));
      }
      t.pagination &&
        _.matches(yt(t.params.pagination.bulletClass)) &&
        _.click();
    }
  }
  function S() {
    if (t.params.loop || t.params.rewind || !t.navigation) return;
    const { nextEl: L, prevEl: E } = t.navigation;
    E && (t.isBeginning ? (c(E), m(E)) : (h(E), p(E))),
      L && (t.isEnd ? (c(L), m(L)) : (h(L), p(L)));
  }
  function k() {
    return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
  }
  function M() {
    return k() && t.params.pagination.clickable;
  }
  function T() {
    const L = t.params.a11y;
    k() &&
      t.pagination.bullets.forEach((E) => {
        t.params.pagination.clickable &&
          (p(E),
          t.params.pagination.renderBullet ||
            (v(E, "button"),
            x(
              E,
              L.paginationBulletMessage.replace(/\{\{index\}\}/, hr(E) + 1),
            ))),
          E.matches(yt(t.params.pagination.bulletActiveClass))
            ? E.setAttribute("aria-current", "true")
            : E.removeAttribute("aria-current");
      });
  }
  const I = (L, E, _) => {
      p(L),
        L.tagName !== "BUTTON" &&
          (v(L, "button"), L.addEventListener("keydown", w)),
        x(L, _),
        y(L, E);
    },
    C = (L) => {
      s && s !== L.target && !s.contains(L.target) && (l = !0),
        (t.a11y.clicked = !0);
    },
    z = () => {
      (l = !1),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            t.destroyed || (t.a11y.clicked = !1);
          });
        });
    },
    O = (L) => {
      a = new Date().getTime();
    },
    N = (L) => {
      if (t.a11y.clicked || new Date().getTime() - a < 100) return;
      const E = L.target.closest(`.${t.params.slideClass}, swiper-slide`);
      if (!E || !t.slides.includes(E)) return;
      s = E;
      const _ = t.slides.indexOf(E) === t.activeIndex,
        D =
          t.params.watchSlidesProgress &&
          t.visibleSlides &&
          t.visibleSlides.includes(E);
      _ ||
        D ||
        (L.sourceCapabilities && L.sourceCapabilities.firesTouchEvents) ||
        (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
        requestAnimationFrame(() => {
          l || (t.slideTo(t.slides.indexOf(E), 0), (l = !1));
        }));
    },
    R = () => {
      const L = t.params.a11y;
      L.itemRoleDescriptionMessage && g(t.slides, L.itemRoleDescriptionMessage),
        L.slideRole && v(t.slides, L.slideRole);
      const E = t.slides.length;
      L.slideLabelMessage &&
        t.slides.forEach((_, D) => {
          const V = t.params.loop
              ? parseInt(_.getAttribute("data-swiper-slide-index"), 10)
              : D,
            W = L.slideLabelMessage
              .replace(/\{\{index\}\}/, V + 1)
              .replace(/\{\{slidesLength\}\}/, E);
          x(_, W);
        });
    },
    U = () => {
      const L = t.params.a11y;
      t.el.append(i);
      const E = t.el;
      L.containerRoleDescriptionMessage &&
        g(E, L.containerRoleDescriptionMessage),
        L.containerMessage && x(E, L.containerMessage);
      const _ = t.wrapperEl,
        D = L.id || _.getAttribute("id") || `swiper-wrapper-${f(16)}`,
        V = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
      j(_, D), d(_, V), R();
      let { nextEl: W, prevEl: qe } = t.navigation ? t.navigation : {};
      (W = B(W)),
        (qe = B(qe)),
        W && W.forEach((ct) => I(ct, D, L.nextSlideMessage)),
        qe && qe.forEach((ct) => I(ct, D, L.prevSlideMessage)),
        M() &&
          B(t.pagination.el).forEach((Je) => {
            Je.addEventListener("keydown", w);
          }),
        Nt().addEventListener("visibilitychange", O),
        t.el.addEventListener("focus", N, !0),
        t.el.addEventListener("focus", N, !0),
        t.el.addEventListener("pointerdown", C, !0),
        t.el.addEventListener("pointerup", z, !0);
    };
  function de() {
    i && i.remove();
    let { nextEl: L, prevEl: E } = t.navigation ? t.navigation : {};
    (L = B(L)),
      (E = B(E)),
      L && L.forEach((D) => D.removeEventListener("keydown", w)),
      E && E.forEach((D) => D.removeEventListener("keydown", w)),
      M() &&
        B(t.pagination.el).forEach((V) => {
          V.removeEventListener("keydown", w);
        }),
      Nt().removeEventListener("visibilitychange", O),
      t.el.removeEventListener("focus", N, !0),
      t.el.removeEventListener("pointerdown", C, !0),
      t.el.removeEventListener("pointerup", z, !0);
  }
  r("beforeInit", () => {
    (i = pr("span", t.params.a11y.notificationClass)),
      i.setAttribute("aria-live", "assertive"),
      i.setAttribute("aria-atomic", "true");
  }),
    r("afterInit", () => {
      t.params.a11y.enabled && U();
    }),
    r("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      t.params.a11y.enabled && R();
    }),
    r("fromEdge toEdge afterInit lock unlock", () => {
      t.params.a11y.enabled && S();
    }),
    r("paginationUpdate", () => {
      t.params.a11y.enabled && T();
    }),
    r("destroy", () => {
      t.params.a11y.enabled && de();
    });
}
function gm() {
  return u.jsx(u.Fragment, {
    children: u.jsx("section", {
      id: "featured-matchups",
      className: "featured-matchups",
      children: u.jsxs(nc, {
        modules: [hm, mm, vm],
        spaceBetween: 0,
        slidesPerView: 1,
        navigation: !0,
        pagination: { clickable: !0 },
        className: "swiper-container",
        children: [
          u.jsx(pt, {
            "data-year": "2018",
            children: u.jsxs("div", {
              className: "container",
              children: [
                u.jsx("h2", {
                  className: "swiper-title",
                  title: "2018",
                  "data-swiper-parallax": "-100",
                  children: "2018 Playoffs",
                }),
                u.jsxs("p", {
                  children: [
                    u.jsx("em", { children: "Someone" }),
                    ' hired a plane to fly over Slugger Field in the run up to the first meeting of the two teams in the playoffs. Most people read it as "Louisville loves Nickleback" but some read it as "Louisville loves the Nickelback XI". Take your pick, hilarious either way.',
                  ],
                }),
                u.jsxs("p", {
                  className: "credits",
                  "data-swiper-parallax-opacity": "0.5",
                  children: [
                    u.jsx("a", {
                      href: "https://twitter.com/Utterback13/status/1053787277346906112",
                      target: "_top",
                      children: "Scott Utterback/Twitter",
                    }),
                    " ",
                    "//",
                    " ",
                    u.jsx("a", {
                      href: "https://www.courier-journal.com/story/news/2018/10/20/louisville-city-fc-love-nickelback-banner-says-so/1715001002/",
                      children: "Courier-Journal",
                    }),
                  ],
                }),
              ],
            }),
          }),
          u.jsx(pt, {
            "data-year": "1926",
            children: u.jsxs("div", {
              className: "container",
              children: [
                u.jsx("h2", {
                  className: "swiper-title",
                  title: "1926",
                  "data-swiper-parallax": "-100",
                  children: "1926",
                }),
                u.jsx("p", {
                  children:
                    "The only ever #LIPAFC split squad game in history. Happened after original game in early 1926 was rained out in Louisville. Both games ended in 1-0 for each team resulting in the o lot known overall 1-1 draw where both teams got 3 points.",
                }),
                u.jsxs("p", {
                  className: "credits",
                  "data-swiper-parallax-opacity": "0.5",
                  children: [
                    u.jsx("a", {
                      href: "https://twitter.com/PattyIce3/status/1052668721947394050",
                      target: "_top",
                      children: "Patrick Blanton/Twitter",
                    }),
                    " ",
                    "// Image:",
                    " ",
                    u.jsx("a", {
                      href: "https://pixabay.com/users/Hans-2/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=123200",
                      children: "Hans Braxmeier",
                    }),
                  ],
                }),
              ],
            }),
          }),
          u.jsx(pt, {
            "data-year": "1937",
            children: u.jsxs("div", {
              className: "container",
              children: [
                u.jsx("h2", {
                  className: "swiper-title",
                  title: "1937",
                  children: "1937",
                }),
                u.jsx("p", {
                  children:
                    'As a gesture of good will, @The_BYB & @LouCoopers asked @DieInnenstadt to a #LIPAFC rock throw. When their shameful attempt was jeered, they responded by bragging on how many of them attended. Thus chased away to chants of "#FUFCC!", they were never welcomed back.',
                }),
                u.jsxs("p", {
                  className: "credits",
                  "data-swiper-parallax-opacity": "0.5",
                  children: [
                    u.jsx("a", {
                      href: "https://twitter.com/Co1BYB/status/1053669829129969664",
                      target: "_top",
                      children: "City of Firsts Brickyard Battalion/Twitter",
                    }),
                    " ",
                    "// Image:",
                    " ",
                    u.jsx("a", {
                      href: "https://commons.wikimedia.org/wiki/File:Harrijasotzailea_harri_zilindrikoarekin_lanean2.jpg",
                      children: "Wikipedia",
                    }),
                  ],
                }),
              ],
            }),
          }),
          u.jsx(pt, {
            "data-year": "1918",
            children: u.jsxs("div", {
              className: "container",
              children: [
                u.jsx("h2", {
                  className: "swiper-title",
                  title: "1918",
                  "data-swiper-parallax": "-100",
                  children: "1918",
                }),
                u.jsx("p", {
                  children:
                    "Digby “Diggy” McDougal’s infamous “headwound hat trick” made its appearance during this particularly brutal installment of the LIPAFC.",
                }),
                u.jsx("p", {
                  className: "credits",
                  "data-swiper-parallax-opacity": "0.5",
                  children: u.jsx("a", {
                    href: "https://twitter.com/LouHeretics/status/1051199503745933313",
                    target: "_top",
                    children: "Louisville Heretics/Twitter",
                  }),
                }),
              ],
            }),
          }),
          u.jsx(pt, {
            "data-year": "1868",
            children: u.jsxs("div", {
              className: "container",
              children: [
                u.jsx("h2", {
                  className: "swiper-title",
                  title: "1868",
                  "data-swiper-parallax": "-100",
                  children: "1868",
                }),
                u.jsx("h3", { children: "'THE BLOODY AFFAIR'" }),
                u.jsx("p", {
                  children:
                    'Forever known as "The Bloody Affair" the 0-0 draw produced 14 yellows, but oddly only one straight red when @IndyEleven legend "Mad" Marty Collins used his prosthetic leg to pummel the linesman after an offside call negated a late goal.',
                }),
                u.jsxs("p", {
                  className: "credits",
                  "data-swiper-parallax-opacity": "0.5",
                  children: [
                    u.jsx("a", {
                      href: "https://twitter.com/GrooveMachine/status/1051138937631244288",
                      target: "_top",
                      "aria-label":
                        "Content source: Groover Machine on Twitter",
                      children: "Groove Machine/Twitter",
                    }),
                    " ",
                    "// Image:",
                    " ",
                    u.jsx("a", {
                      href: "https://commons.wikimedia.org/wiki/File:Prosthetic_leg.jpg",
                      target: "_blank",
                      "aria-label": "Prosthetic Leg image from Wikipedia",
                      children: "Wikipedia",
                    }),
                  ],
                }),
              ],
            }),
          }),
          u.jsx(pt, {
            "data-year": "1860",
            children: u.jsxs("div", {
              className: "container",
              children: [
                u.jsx("h2", {
                  className: "swiper-title",
                  title: "1860",
                  "data-swiper-parallax": "-100",
                  children: "1860",
                }),
                u.jsx("p", {
                  children:
                    "Johnny “Albatross” O’Rourke bagged 4 goals in the 1860 iteration of #LIPAFC which is why a 4 goal performance is referred to as an Albatross. Johnny passed in the 1863 Battle of Dog Hill, so we must continue to remember his service and his striking. Here’s to you Johnny!",
                }),
                u.jsxs("p", {
                  className: "credits",
                  "data-swiper-parallax-opacity": "0.5",
                  children: [
                    u.jsx("a", {
                      href: "https://twitter.com/brad_estes/status/1053275895920816131",
                      target: "_top",
                      "aria-label": "Content source: Brad Estes on Twitter",
                      children: "Brad Estes/Twitter",
                    }),
                    " ",
                    "// Image:",
                    " ",
                    u.jsx("a", {
                      href: "https://pixabay.com/users/skeeze-272447/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3854793",
                      "aria-label":
                        "Albatross bird image from Skeeze on Pixabay",
                      children: "skeeze",
                    }),
                  ],
                }),
              ],
            }),
          }),
          u.jsx(pt, {
            "data-year": "30",
            children: u.jsxs("div", {
              className: "container",
              children: [
                u.jsx("h2", {
                  className: "swiper-title",
                  title: "30 AD",
                  "data-swiper-parallax": "-100",
                  children: "30 AD",
                }),
                u.jsx("p", {
                  children: `Everyone knows Pompeii was buried in AD 79 by Mount Vesuvius. But did you know, on the walls of one of those incredibly well preserved homes, an inscription was found reading "The gods do not deduct from man's allotted span the hours spent watching the #LIPAFC"`,
                }),
                u.jsxs("p", {
                  className: "credits",
                  "data-swiper-parallax-opacity": "0.5",
                  children: [
                    u.jsx("a", {
                      href: "https://twitter.com/MattDaltron/status/1053299297867964416",
                      target: "_blank",
                      "aria-label": "Content source: Matt Daltron on Twitter",
                      children: "Matt Daltron/Twitter",
                    }),
                    " ",
                    "// Image:",
                    " ",
                    u.jsx("a", {
                      href: "https://commons.wikimedia.org/wiki/Scavi_archeologici_di_Pompei#/media/File:Pompeji_Terme_Stabiane_Apodyterion.jpg",
                      "aria-label": "Pompei image from Wikipedia",
                      children: "Wikipedia",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
function ym() {
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx(Np, {}),
      u.jsxs("main", {
        children: [
          u.jsx(Ap, {}),
          u.jsx(Fp, {}),
          u.jsx($p, {}),
          u.jsx(Dp, {}),
          u.jsx(gm, {}),
        ],
      }),
      u.jsx(Rp, {}),
    ],
  });
}
Sl.createRoot(document.getElementById("root")).render(
  u.jsx(te.StrictMode, { children: u.jsx(ym, {}) }),
);
