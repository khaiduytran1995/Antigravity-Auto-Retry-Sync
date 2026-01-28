var Ad = Object.defineProperty;
var Md = Object.getPrototypeOf;
var Fd = Reflect.get;
var Xn = (i) => {
  throw TypeError(i);
};
var qd = (i, s, t) => s in i ? Ad(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var X = (i, s, t) => qd(i, typeof s != "symbol" ? s + "" : s, t), Jn = (i, s, t) => s.has(i) || Xn("Cannot " + t), en = (i, s) => Object(s) !== s ? Xn('Cannot use the "in" operator on this value') : i.has(s), e = (i, s, t) => (Jn(i, s, "read from private field"), t ? t.call(i) : s.get(i)), y = (i, s, t) => s.has(i) ? Xn("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(i) : s.set(i, t), P = (i, s, t, r) => (Jn(i, s, "write to private field"), r ? r.call(i, t) : s.set(i, t), t), T = (i, s, t) => (Jn(i, s, "access private method"), t);
var Eo = (i, s, t, r) => ({
  set _(o) {
    P(i, s, o, t);
  },
  get _() {
    return e(i, s, r);
  }
}), So = (i, s, t) => Fd(Md(i), t, s);
import jd from "crypto";
import { v as Ud, D as so, U as fe, w as no, E as ve, x as Ld, y as $d, z as io, A as Ae, G as Hd, H as Ye, J as Te, K as mt, L as le, M as lc, N as Tn, O as je, Q as hc, R as zd, S as Kd, V as Wd, X as pc, Y as Gd, Z as Vd, _ as fc, $ as Xd, a0 as Jd, a1 as Yd, a2 as Qd, a3 as Po, a4 as Zd, a5 as el, a6 as tl, a7 as rl, a8 as sl, a9 as nl, aa as il, ab as ol, ac as un, ad as Io, ae as al, af as cl, ag as ul, ah as dl, ai as _o, aj as ko, ak as ll, al as hl, am as at, an as tn, ao as Ke, ap as vr, aq as To, ar as St, as as Dn, at as pl, au as fl, av as gl, aw as ml, ax as wl, ay as Nn, az as vl, aA as Yn, aB as yl, aC as Cl, aD as vt, aE as bl, aF as xl, aG as ht, aH as El, aI as Sl, aJ as Pl, aK as Il, aL as _l, aM as kl, aN as Tl, aO as Do, aP as Dl, aQ as zn, aR as Nl, aS as Kn, aT as Wn, aU as No, aV as Rl, aW as Ol } from "./main-CHQQFXN8.js";
var Qn = {}, yr = {}, yt = {}, Zn, Ro;
function Bl() {
  return Ro || (Ro = 1, Zn = function(i) {
    return { all: i = i || /* @__PURE__ */ new Map(), on: function(s, t) {
      var r = i.get(s);
      r ? r.push(t) : i.set(s, [t]);
    }, off: function(s, t) {
      var r = i.get(s);
      r && (t ? r.splice(r.indexOf(t) >>> 0, 1) : i.set(s, []));
    }, emit: function(s, t) {
      var r = i.get(s);
      r && r.slice().map(function(o) {
        o(t);
      }), (r = i.get("*")) && r.slice().map(function(o) {
        o(s, t);
      });
    } };
  }), Zn;
}
var Oo;
function Xs() {
  var r, o;
  if (Oo) return yt;
  Oo = 1;
  var i = yt && yt.__importDefault || function(h) {
    return h && h.__esModule ? h : { default: h };
  };
  Object.defineProperty(yt, "__esModule", { value: !0 }), yt.EventEmitter = void 0;
  const s = i(Bl());
  let t = (o = class {
    constructor() {
      y(this, r, (0, s.default)());
    }
    on(a, c) {
      return e(this, r).on(a, c), this;
    }
    /**
     * Like `on` but the listener will only be fired once and then it will be removed.
     * @param event The event you'd like to listen to
     * @param handler The handler function to run when the event occurs
     * @return `this` to enable chaining method calls.
     */
    once(a, c) {
      const m = (f) => {
        c(f), this.off(a, m);
      };
      return this.on(a, m);
    }
    off(a, c) {
      return e(this, r).off(a, c), this;
    }
    /**
     * Emits an event and call any associated listeners.
     *
     * @param event The event to emit.
     * @param eventData Any data to emit with the event.
     * @return `true` if there are any listeners, `false` otherwise.
     */
    emit(a, c) {
      e(this, r).emit(a, c);
    }
    /**
     * Removes all listeners. If given an event argument, it will remove only
     * listeners for that event.
     * @param event - the event to remove listeners for.
     * @returns `this` to enable you to chain method calls.
     */
    removeAllListeners(a) {
      return a ? e(this, r).all.delete(a) : e(this, r).all.clear(), this;
    }
  }, r = new WeakMap(), o);
  return yt.EventEmitter = t, yt;
}
var Cr = {}, Bo;
function qe() {
  if (Bo) return Cr;
  Bo = 1, Object.defineProperty(Cr, "__esModule", { value: !0 }), Cr.LogType = void 0;
  var i;
  return (function(s) {
    s.bidi = "bidi", s.cdp = "cdp", s.debug = "debug", s.debugError = "debug:error", s.debugInfo = "debug:info", s.debugWarn = "debug:warn";
  })(i || (Cr.LogType = i = {})), Cr;
}
var br = {}, Ao;
function Al() {
  var r, o, h, a, c, m, gc;
  if (Ao) return br;
  Ao = 1;
  var i;
  Object.defineProperty(br, "__esModule", { value: !0 }), br.ProcessingQueue = void 0;
  const s = qe();
  let t = (r = class {
    constructor(g, d) {
      y(this, m);
      y(this, o);
      y(this, h);
      y(this, a, []);
      // Flag to keep only 1 active processor.
      y(this, c, !1);
      P(this, h, g), P(this, o, d);
    }
    add(g, d) {
      e(this, a).push([g, d]), T(this, m, gc).call(this);
    }
  }, o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c = new WeakMap(), m = new WeakSet(), gc = async function() {
    var g;
    if (!e(this, c)) {
      for (P(this, c, !0); e(this, a).length > 0; ) {
        const d = e(this, a).shift();
        if (!d)
          continue;
        const [C, b] = d;
        (g = e(this, o)) == null || g.call(this, i.LOGGER_PREFIX, "Processing event:", b), await C.then((w) => {
          var v;
          if (w.kind === "error") {
            (v = e(this, o)) == null || v.call(this, s.LogType.debugError, "Event threw before sending:", w.error.message, w.error.stack);
            return;
          }
          return e(this, h).call(this, w.value);
        }).catch((w) => {
          var v;
          (v = e(this, o)) == null || v.call(this, s.LogType.debugError, "Event was not processed:", w == null ? void 0 : w.message);
        });
      }
      P(this, c, !1);
    }
  }, X(r, "LOGGER_PREFIX", `${s.LogType.debug}:queue`), r);
  return br.ProcessingQueue = t, i = t, br;
}
var xr = {}, $e = {}, ei = {}, Mo;
function Ml() {
  return Mo || (Mo = 1, Object.defineProperty(ei, "__esModule", { value: !0 })), ei;
}
var De = {}, Fo;
function mc() {
  if (Fo) return De;
  Fo = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.EVENT_NAMES = De.Speculation = De.Bluetooth = De.Network = De.Input = De.BrowsingContext = De.Log = De.Script = De.BiDiModule = void 0;
  var i;
  (function(m) {
    m.Bluetooth = "bluetooth", m.Browser = "browser", m.BrowsingContext = "browsingContext", m.Cdp = "goog:cdp", m.Input = "input", m.Log = "log", m.Network = "network", m.Script = "script", m.Session = "session", m.Speculation = "speculation";
  })(i || (De.BiDiModule = i = {}));
  var s;
  (function(m) {
    (function(f) {
      f.Message = "script.message", f.RealmCreated = "script.realmCreated", f.RealmDestroyed = "script.realmDestroyed";
    })(m.EventNames || (m.EventNames = {}));
  })(s || (De.Script = s = {}));
  var t;
  (function(m) {
    (function(f) {
      f.LogEntryAdded = "log.entryAdded";
    })(m.EventNames || (m.EventNames = {}));
  })(t || (De.Log = t = {}));
  var r;
  (function(m) {
    (function(f) {
      f.ContextCreated = "browsingContext.contextCreated", f.ContextDestroyed = "browsingContext.contextDestroyed", f.DomContentLoaded = "browsingContext.domContentLoaded", f.DownloadEnd = "browsingContext.downloadEnd", f.DownloadWillBegin = "browsingContext.downloadWillBegin", f.FragmentNavigated = "browsingContext.fragmentNavigated", f.HistoryUpdated = "browsingContext.historyUpdated", f.Load = "browsingContext.load", f.NavigationAborted = "browsingContext.navigationAborted", f.NavigationCommitted = "browsingContext.navigationCommitted", f.NavigationFailed = "browsingContext.navigationFailed", f.NavigationStarted = "browsingContext.navigationStarted", f.UserPromptClosed = "browsingContext.userPromptClosed", f.UserPromptOpened = "browsingContext.userPromptOpened";
    })(m.EventNames || (m.EventNames = {}));
  })(r || (De.BrowsingContext = r = {}));
  var o;
  (function(m) {
    (function(f) {
      f.FileDialogOpened = "input.fileDialogOpened";
    })(m.EventNames || (m.EventNames = {}));
  })(o || (De.Input = o = {}));
  var h;
  (function(m) {
    (function(f) {
      f.AuthRequired = "network.authRequired", f.BeforeRequestSent = "network.beforeRequestSent", f.FetchError = "network.fetchError", f.ResponseCompleted = "network.responseCompleted", f.ResponseStarted = "network.responseStarted";
    })(m.EventNames || (m.EventNames = {}));
  })(h || (De.Network = h = {}));
  var a;
  (function(m) {
    (function(f) {
      f.RequestDevicePromptUpdated = "bluetooth.requestDevicePromptUpdated", f.GattConnectionAttempted = "bluetooth.gattConnectionAttempted", f.CharacteristicEventGenerated = "bluetooth.characteristicEventGenerated", f.DescriptorEventGenerated = "bluetooth.descriptorEventGenerated";
    })(m.EventNames || (m.EventNames = {}));
  })(a || (De.Bluetooth = a = {}));
  var c;
  return (function(m) {
    (function(f) {
      f.PrefetchStatusUpdated = "speculation.prefetchStatusUpdated";
    })(m.EventNames || (m.EventNames = {}));
  })(c || (De.Speculation = c = {})), De.EVENT_NAMES = /* @__PURE__ */ new Set([
    // keep-sorted start
    ...Object.values(i),
    ...Object.values(a.EventNames),
    ...Object.values(r.EventNames),
    ...Object.values(o.EventNames),
    ...Object.values(t.EventNames),
    ...Object.values(h.EventNames),
    ...Object.values(s.EventNames),
    ...Object.values(c.EventNames)
    // keep-sorted end
  ]), De;
}
var ti = {}, qo;
function Fl() {
  return qo || (qo = 1, Object.defineProperty(ti, "__esModule", { value: !0 })), ti;
}
var oe = {}, jo;
function Js() {
  if (jo) return oe;
  jo = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.UnavailableNetworkDataException = oe.NoSuchNetworkDataException = oe.NoSuchNetworkCollectorException = oe.NoSuchWebExtensionException = oe.InvalidWebExtensionException = oe.UnderspecifiedStoragePartitionException = oe.UnableToSetFileInputException = oe.UnableToSetCookieException = oe.NoSuchStoragePartitionException = oe.UnsupportedOperationException = oe.UnableToCloseBrowserException = oe.UnableToCaptureScreenException = oe.UnknownErrorException = oe.UnknownCommandException = oe.SessionNotCreatedException = oe.NoSuchUserContextException = oe.NoSuchScriptException = oe.NoSuchRequestException = oe.NoSuchNodeException = oe.NoSuchInterceptException = oe.NoSuchHistoryEntryException = oe.NoSuchHandleException = oe.NoSuchFrameException = oe.NoSuchElementException = oe.NoSuchAlertException = oe.MoveTargetOutOfBoundsException = oe.InvalidSessionIdException = oe.InvalidSelectorException = oe.InvalidArgumentException = oe.Exception = void 0;
  class i extends Error {
    constructor(q, Z, B) {
      super();
      X(this, "error");
      X(this, "message");
      X(this, "stacktrace");
      this.error = q, this.message = Z, this.stacktrace = B;
    }
    toErrorResponse(q) {
      return {
        type: "error",
        id: q,
        error: this.error,
        message: this.message,
        stacktrace: this.stacktrace
      };
    }
  }
  oe.Exception = i;
  class s extends i {
    constructor(F, q) {
      super("invalid argument", F, q);
    }
  }
  oe.InvalidArgumentException = s;
  class t extends i {
    constructor(F, q) {
      super("invalid selector", F, q);
    }
  }
  oe.InvalidSelectorException = t;
  class r extends i {
    constructor(F, q) {
      super("invalid session id", F, q);
    }
  }
  oe.InvalidSessionIdException = r;
  class o extends i {
    constructor(F, q) {
      super("move target out of bounds", F, q);
    }
  }
  oe.MoveTargetOutOfBoundsException = o;
  class h extends i {
    constructor(F, q) {
      super("no such alert", F, q);
    }
  }
  oe.NoSuchAlertException = h;
  class a extends i {
    constructor(F, q) {
      super("no such element", F, q);
    }
  }
  oe.NoSuchElementException = a;
  class c extends i {
    constructor(F, q) {
      super("no such frame", F, q);
    }
  }
  oe.NoSuchFrameException = c;
  class m extends i {
    constructor(F, q) {
      super("no such handle", F, q);
    }
  }
  oe.NoSuchHandleException = m;
  class f extends i {
    constructor(F, q) {
      super("no such history entry", F, q);
    }
  }
  oe.NoSuchHistoryEntryException = f;
  class x extends i {
    constructor(F, q) {
      super("no such intercept", F, q);
    }
  }
  oe.NoSuchInterceptException = x;
  class g extends i {
    constructor(F, q) {
      super("no such node", F, q);
    }
  }
  oe.NoSuchNodeException = g;
  class d extends i {
    constructor(F, q) {
      super("no such request", F, q);
    }
  }
  oe.NoSuchRequestException = d;
  class C extends i {
    constructor(F, q) {
      super("no such script", F, q);
    }
  }
  oe.NoSuchScriptException = C;
  class b extends i {
    constructor(F, q) {
      super("no such user context", F, q);
    }
  }
  oe.NoSuchUserContextException = b;
  class w extends i {
    constructor(F, q) {
      super("session not created", F, q);
    }
  }
  oe.SessionNotCreatedException = w;
  class v extends i {
    constructor(F, q) {
      super("unknown command", F, q);
    }
  }
  oe.UnknownCommandException = v;
  class p extends i {
    constructor(F, q = new Error().stack) {
      super("unknown error", F, q);
    }
  }
  oe.UnknownErrorException = p;
  class I extends i {
    constructor(F, q) {
      super("unable to capture screen", F, q);
    }
  }
  oe.UnableToCaptureScreenException = I;
  class n extends i {
    constructor(F, q) {
      super("unable to close browser", F, q);
    }
  }
  oe.UnableToCloseBrowserException = n;
  class u extends i {
    constructor(F, q) {
      super("unsupported operation", F, q);
    }
  }
  oe.UnsupportedOperationException = u;
  class D extends i {
    constructor(F, q) {
      super("no such storage partition", F, q);
    }
  }
  oe.NoSuchStoragePartitionException = D;
  class E extends i {
    constructor(F, q) {
      super("unable to set cookie", F, q);
    }
  }
  oe.UnableToSetCookieException = E;
  class l extends i {
    constructor(F, q) {
      super("unable to set file input", F, q);
    }
  }
  oe.UnableToSetFileInputException = l;
  class S extends i {
    constructor(F, q) {
      super("underspecified storage partition", F, q);
    }
  }
  oe.UnderspecifiedStoragePartitionException = S;
  class N extends i {
    constructor(F, q) {
      super("invalid web extension", F, q);
    }
  }
  oe.InvalidWebExtensionException = N;
  class k extends i {
    constructor(F, q) {
      super("no such web extension", F, q);
    }
  }
  oe.NoSuchWebExtensionException = k;
  class A extends i {
    constructor(F, q) {
      super("no such network collector", F, q);
    }
  }
  oe.NoSuchNetworkCollectorException = A;
  class z extends i {
    constructor(F, q) {
      super("no such network data", F, q);
    }
  }
  oe.NoSuchNetworkDataException = z;
  class K extends i {
    constructor(F, q) {
      super("unavailable network data", F, q);
    }
  }
  return oe.UnavailableNetworkDataException = K, oe;
}
var ri = {}, Uo;
function ql() {
  return Uo || (Uo = 1, Object.defineProperty(ri, "__esModule", { value: !0 })), ri;
}
var si = {}, Lo;
function jl() {
  return Lo || (Lo = 1, Object.defineProperty(si, "__esModule", { value: !0 })), si;
}
var ni = {}, $o;
function Ul() {
  return $o || ($o = 1, Object.defineProperty(ni, "__esModule", { value: !0 })), ni;
}
var Ho;
function Se() {
  return Ho || (Ho = 1, (function(i) {
    var s = $e && $e.__createBinding || (Object.create ? (function(h, a, c, m) {
      m === void 0 && (m = c);
      var f = Object.getOwnPropertyDescriptor(a, c);
      (!f || ("get" in f ? !a.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
        return a[c];
      } }), Object.defineProperty(h, m, f);
    }) : (function(h, a, c, m) {
      m === void 0 && (m = c), h[m] = a[c];
    })), t = $e && $e.__setModuleDefault || (Object.create ? (function(h, a) {
      Object.defineProperty(h, "default", { enumerable: !0, value: a });
    }) : function(h, a) {
      h.default = a;
    }), r = $e && $e.__importStar || /* @__PURE__ */ (function() {
      var h = function(a) {
        return h = Object.getOwnPropertyNames || function(c) {
          var m = [];
          for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && (m[m.length] = f);
          return m;
        }, h(a);
      };
      return function(a) {
        if (a && a.__esModule) return a;
        var c = {};
        if (a != null) for (var m = h(a), f = 0; f < m.length; f++) m[f] !== "default" && s(c, a, m[f]);
        return t(c, a), c;
      };
    })(), o = $e && $e.__exportStar || function(h, a) {
      for (var c in h) c !== "default" && !Object.prototype.hasOwnProperty.call(a, c) && s(a, h, c);
    };
    Object.defineProperty(i, "__esModule", { value: !0 }), i.ChromiumBidi = i.Cdp = void 0, i.Cdp = r(Ml()), i.ChromiumBidi = r(mc()), o(Fl(), i), o(Js(), i), o(ql(), i), o(jl(), i), o(Ul(), i);
  })($e)), $e;
}
var Er = {}, zo;
function Ll() {
  if (zo) return Er;
  zo = 1, Object.defineProperty(Er, "__esModule", { value: !0 }), Er.BidiNoOpParser = void 0;
  let i = class {
    // Bluetooth module
    // keep-sorted start block=yes
    parseDisableSimulationParameters(t) {
      return t;
    }
    parseHandleRequestDevicePromptParams(t) {
      return t;
    }
    parseSimulateAdapterParameters(t) {
      return t;
    }
    parseSimulateAdvertisementParameters(t) {
      return t;
    }
    parseSimulateCharacteristicParameters(t) {
      return t;
    }
    parseSimulateCharacteristicResponseParameters(t) {
      return t;
    }
    parseSimulateDescriptorParameters(t) {
      return t;
    }
    parseSimulateDescriptorResponseParameters(t) {
      return t;
    }
    parseSimulateGattConnectionResponseParameters(t) {
      return t;
    }
    parseSimulateGattDisconnectionParameters(t) {
      return t;
    }
    parseSimulatePreconnectedPeripheralParameters(t) {
      return t;
    }
    parseSimulateServiceParameters(t) {
      return t;
    }
    // keep-sorted end
    // Browser module
    // keep-sorted start block=yes
    parseCreateUserContextParameters(t) {
      return t;
    }
    parseRemoveUserContextParameters(t) {
      return t;
    }
    parseSetClientWindowStateParameters(t) {
      return t;
    }
    parseSetDownloadBehaviorParameters(t) {
      return t;
    }
    // keep-sorted end
    // Browsing Context module
    // keep-sorted start block=yes
    parseActivateParams(t) {
      return t;
    }
    parseCaptureScreenshotParams(t) {
      return t;
    }
    parseCloseParams(t) {
      return t;
    }
    parseCreateParams(t) {
      return t;
    }
    parseGetTreeParams(t) {
      return t;
    }
    parseHandleUserPromptParams(t) {
      return t;
    }
    parseLocateNodesParams(t) {
      return t;
    }
    parseNavigateParams(t) {
      return t;
    }
    parsePrintParams(t) {
      return t;
    }
    parseReloadParams(t) {
      return t;
    }
    parseSetViewportParams(t) {
      return t;
    }
    parseTraverseHistoryParams(t) {
      return t;
    }
    // keep-sorted end
    // CDP module
    // keep-sorted start block=yes
    parseGetSessionParams(t) {
      return t;
    }
    parseResolveRealmParams(t) {
      return t;
    }
    parseSendCommandParams(t) {
      return t;
    }
    // keep-sorted end
    // Emulation module
    // keep-sorted start block=yes
    parseSetForcedColorsModeThemeOverrideParams(t) {
      return t;
    }
    parseSetGeolocationOverrideParams(t) {
      return t;
    }
    parseSetLocaleOverrideParams(t) {
      return t;
    }
    parseSetNetworkConditionsParams(t) {
      return t;
    }
    parseSetScreenOrientationOverrideParams(t) {
      return t;
    }
    parseSetScreenSettingsOverrideParams(t) {
      return t;
    }
    parseSetScriptingEnabledParams(t) {
      return t;
    }
    parseSetTimezoneOverrideParams(t) {
      return t;
    }
    parseSetUserAgentOverrideParams(t) {
      return t;
    }
    // keep-sorted end
    // Script module
    // keep-sorted start block=yes
    parseAddPreloadScriptParams(t) {
      return t;
    }
    parseCallFunctionParams(t) {
      return t;
    }
    parseDisownParams(t) {
      return t;
    }
    parseEvaluateParams(t) {
      return t;
    }
    parseGetRealmsParams(t) {
      return t;
    }
    parseRemovePreloadScriptParams(t) {
      return t;
    }
    // keep-sorted end
    // Input module
    // keep-sorted start block=yes
    parsePerformActionsParams(t) {
      return t;
    }
    parseReleaseActionsParams(t) {
      return t;
    }
    parseSetFilesParams(t) {
      return t;
    }
    // keep-sorted end
    // Network module
    // keep-sorted start block=yes
    parseAddDataCollectorParams(t) {
      return t;
    }
    parseAddInterceptParams(t) {
      return t;
    }
    parseContinueRequestParams(t) {
      return t;
    }
    parseContinueResponseParams(t) {
      return t;
    }
    parseContinueWithAuthParams(t) {
      return t;
    }
    parseDisownDataParams(t) {
      return t;
    }
    parseFailRequestParams(t) {
      return t;
    }
    parseGetDataParams(t) {
      return t;
    }
    parseProvideResponseParams(t) {
      return t;
    }
    parseRemoveDataCollectorParams(t) {
      return t;
    }
    parseRemoveInterceptParams(t) {
      return t;
    }
    parseSetCacheBehaviorParams(t) {
      return t;
    }
    parseSetExtraHeadersParams(t) {
      return t;
    }
    // keep-sorted end
    // Permissions module
    // keep-sorted start block=yes
    parseSetPermissionsParams(t) {
      return t;
    }
    // keep-sorted end
    // Session module
    // keep-sorted start block=yes
    parseSubscribeParams(t) {
      return t;
    }
    parseUnsubscribeParams(t) {
      return t;
    }
    // keep-sorted end
    // Storage module
    // keep-sorted start block=yes
    parseDeleteCookiesParams(t) {
      return t;
    }
    parseGetCookiesParams(t) {
      return t;
    }
    parseSetCookieParams(t) {
      return t;
    }
    // keep-sorted end
    // WebExtenstion module
    // keep-sorted start block=yes
    parseInstallParams(t) {
      return t;
    }
    parseUninstallParams(t) {
      return t;
    }
  };
  return Er.BidiNoOpParser = i, Er;
}
var $t = {}, Ko;
function $l() {
  var r, o, h, a, c, wc, vc, ui, g;
  if (Ko) return $t;
  Ko = 1, Object.defineProperty($t, "__esModule", { value: !0 }), $t.BrowserProcessor = void 0, $t.getProxyStr = t;
  const i = Se();
  let s = (g = class {
    constructor(C, b, w, v) {
      y(this, c);
      y(this, r);
      y(this, o);
      y(this, h);
      y(this, a);
      P(this, r, C), P(this, o, b), P(this, h, w), P(this, a, v);
    }
    close() {
      return setTimeout(() => e(this, r).sendCommand("Browser.close"), 0), {};
    }
    async createUserContext(C) {
      const b = C, w = e(this, h).getGlobalConfig();
      if (b.acceptInsecureCerts !== void 0 && b.acceptInsecureCerts === !1 && w.acceptInsecureCerts === !0)
        throw new i.UnknownErrorException(`Cannot set user context's "acceptInsecureCerts" to false, when a capability "acceptInsecureCerts" is set to true`);
      const v = {};
      if (b.proxy) {
        const I = t(b.proxy);
        I && (v.proxyServer = I), b.proxy.noProxy && (v.proxyBypassList = b.proxy.noProxy.join(","));
      } else {
        C["goog:proxyServer"] !== void 0 && (v.proxyServer = C["goog:proxyServer"]);
        const I = C["goog:proxyBypassList"] ?? void 0;
        I && (v.proxyBypassList = I.join(","));
      }
      const p = await e(this, r).sendCommand("Target.createBrowserContext", v);
      return await T(this, c, ui).call(this, w.downloadBehavior ?? null, p.browserContextId), e(this, h).updateUserContextConfig(p.browserContextId, {
        acceptInsecureCerts: C.acceptInsecureCerts,
        userPromptHandler: C.unhandledPromptBehavior
      }), {
        userContext: p.browserContextId
      };
    }
    async removeUserContext(C) {
      const b = C.userContext;
      if (b === "default")
        throw new i.InvalidArgumentException("`default` user context cannot be removed");
      try {
        await e(this, r).sendCommand("Target.disposeBrowserContext", {
          browserContextId: b
        });
      } catch (w) {
        throw w.message.startsWith("Failed to find context with id") ? new i.NoSuchUserContextException(w.message) : w;
      }
      return {};
    }
    async getUserContexts() {
      return {
        userContexts: await e(this, a).getUserContexts()
      };
    }
    async getClientWindows() {
      const C = e(this, o).getTopLevelContexts().map((p) => p.cdpTarget.id), b = await Promise.all(C.map(async (p) => await T(this, c, wc).call(this, p))), w = /* @__PURE__ */ new Set(), v = new Array();
      for (const p of b)
        w.has(p.clientWindow) || (w.add(p.clientWindow), v.push(p));
      return { clientWindows: v };
    }
    async setDownloadBehavior(C) {
      let b;
      return C.userContexts === void 0 ? b = (await e(this, a).getUserContexts()).map((w) => w.userContext) : b = Array.from(await e(this, a).verifyUserContextIdList(C.userContexts)), C.userContexts === void 0 ? e(this, h).updateGlobalConfig({
        downloadBehavior: C.downloadBehavior
      }) : C.userContexts.map((w) => e(this, h).updateUserContextConfig(w, {
        downloadBehavior: C.downloadBehavior
      })), await Promise.all(b.map(async (w) => {
        const v = e(this, h).getActiveConfig(void 0, w).downloadBehavior ?? null;
        await T(this, c, ui).call(this, v, w);
      })), {};
    }
  }, r = new WeakMap(), o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c = new WeakSet(), wc = async function(C) {
    const b = await e(this, r).sendCommand("Browser.getWindowForTarget", { targetId: C });
    return {
      // `active` is not supported in CDP yet.
      active: !1,
      clientWindow: `${b.windowId}`,
      state: b.bounds.windowState ?? "normal",
      height: b.bounds.height ?? 0,
      width: b.bounds.width ?? 0,
      x: b.bounds.left ?? 0,
      y: b.bounds.top ?? 0
    };
  }, vc = function(C) {
    if (C === null)
      return {
        behavior: "default"
      };
    if ((C == null ? void 0 : C.type) === "denied")
      return {
        behavior: "deny"
      };
    if ((C == null ? void 0 : C.type) === "allowed")
      return {
        behavior: "allow",
        downloadPath: C.destinationFolder
      };
    throw new i.UnknownErrorException("Unexpected download behavior");
  }, ui = async function(C, b) {
    await e(this, r).sendCommand("Browser.setDownloadBehavior", {
      ...T(this, c, vc).call(this, C),
      browserContextId: b === "default" ? void 0 : b,
      // Required for enabling download events.
      eventsEnabled: !0
    });
  }, g);
  $t.BrowserProcessor = s;
  function t(d) {
    if (!(d.proxyType === "direct" || d.proxyType === "system")) {
      if (d.proxyType === "pac")
        throw new i.UnsupportedOperationException("PAC proxy configuration is not supported per user context");
      if (d.proxyType === "autodetect")
        throw new i.UnsupportedOperationException("Autodetect proxy is not supported per user context");
      if (d.proxyType === "manual") {
        const C = [];
        if (d.httpProxy !== void 0 && C.push(`http=${d.httpProxy}`), d.sslProxy !== void 0 && C.push(`https=${d.sslProxy}`), d.socksProxy !== void 0 || d.socksVersion !== void 0) {
          if (d.socksProxy === void 0)
            throw new i.InvalidArgumentException("'socksVersion' cannot be set without 'socksProxy'");
          if (d.socksVersion === void 0 || typeof d.socksVersion != "number" || !Number.isInteger(d.socksVersion) || d.socksVersion < 0 || d.socksVersion > 255)
            throw new i.InvalidArgumentException("'socksVersion' must be between 0 and 255");
          C.push(`socks=socks${d.socksVersion}://${d.socksProxy}`);
        }
        return C.length === 0 ? void 0 : C.join(";");
      }
      throw new i.UnknownErrorException("Unknown proxy type");
    }
  }
  return $t;
}
var Sr = {}, Wo;
function Hl() {
  var t, r, o, h, a;
  if (Wo) return Sr;
  Wo = 1, Object.defineProperty(Sr, "__esModule", { value: !0 }), Sr.CdpProcessor = void 0;
  const i = Se();
  let s = (a = class {
    constructor(m, f, x, g) {
      y(this, t);
      y(this, r);
      y(this, o);
      y(this, h);
      P(this, t, m), P(this, r, f), P(this, o, x), P(this, h, g);
    }
    getSession(m) {
      const f = m.context, x = e(this, t).getContext(f).cdpTarget.cdpSessionId;
      return x === void 0 ? {} : { session: x };
    }
    resolveRealm(m) {
      const f = m.realm, x = e(this, r).getRealm({ realmId: f });
      if (x === void 0)
        throw new i.UnknownErrorException(`Could not find realm ${m.realm}`);
      return { executionContextId: x.executionContextId };
    }
    async sendCommand(m) {
      return {
        result: await (m.session ? e(this, o).getCdpClient(m.session) : e(this, h)).sendCommand(m.method, m.params),
        session: m.session
      };
    }
  }, t = new WeakMap(), r = new WeakMap(), o = new WeakMap(), h = new WeakMap(), a);
  return Sr.CdpProcessor = s, Sr;
}
var Pr = {}, Go;
function zl() {
  var t, r, o, h, a, c, yc, Cc, x;
  if (Go) return Pr;
  Go = 1, Object.defineProperty(Pr, "__esModule", { value: !0 }), Pr.BrowsingContextProcessor = void 0;
  const i = Se();
  let s = (x = class {
    constructor(d, C, b, w, v) {
      y(this, c);
      y(this, t);
      y(this, r);
      y(this, o);
      y(this, h);
      y(this, a);
      P(this, o, w), P(this, a, b), P(this, t, d), P(this, r, C), P(this, h, v), e(this, h).addSubscribeHook(i.ChromiumBidi.BrowsingContext.EventNames.ContextCreated, T(this, c, Cc).bind(this));
    }
    getTree(d) {
      return {
        contexts: (d.root === void 0 ? e(this, r).getTopLevelContexts() : [e(this, r).getContext(d.root)]).map((b) => b.serializeToBidiValue(d.maxDepth ?? Number.MAX_VALUE))
      };
    }
    async create(d) {
      let C, b = "default";
      if (d.referenceContext !== void 0) {
        if (C = e(this, r).getContext(d.referenceContext), !C.isTopLevelContext())
          throw new i.InvalidArgumentException("referenceContext should be a top-level context");
        b = C.userContext;
      }
      d.userContext !== void 0 && (b = d.userContext);
      const w = e(this, r).getAllContexts().filter((n) => n.userContext === b);
      let v = !1;
      switch (d.type) {
        case "tab":
          v = !1;
          break;
        case "window":
          v = !0;
          break;
      }
      w.length || (v = !0);
      let p;
      try {
        p = await e(this, t).sendCommand("Target.createTarget", {
          url: "about:blank",
          newWindow: v,
          browserContextId: b === "default" ? void 0 : b,
          background: d.background === !0
        });
      } catch (n) {
        throw (
          // See https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/devtools/protocol/target_handler.cc;l=90;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
          n.message.startsWith("Failed to find browser context with id") || // See https://source.chromium.org/chromium/chromium/src/+/main:headless/lib/browser/protocol/target_handler.cc;l=49;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
          n.message === "browserContextId" ? new i.NoSuchUserContextException(`The context ${b} was not found`) : n
        );
      }
      const I = await e(this, r).waitForContext(p.targetId);
      return await I.lifecycleLoaded(), { context: I.id };
    }
    navigate(d) {
      return e(this, r).getContext(d.context).navigate(
        d.url,
        d.wait ?? "none"
        /* BrowsingContext.ReadinessState.None */
      );
    }
    reload(d) {
      return e(this, r).getContext(d.context).reload(
        d.ignoreCache ?? !1,
        d.wait ?? "none"
        /* BrowsingContext.ReadinessState.None */
      );
    }
    async activate(d) {
      const C = e(this, r).getContext(d.context);
      if (!C.isTopLevelContext())
        throw new i.InvalidArgumentException("Activation is only supported on the top-level context");
      return await C.activate(), {};
    }
    async captureScreenshot(d) {
      return await e(this, r).getContext(d.context).captureScreenshot(d);
    }
    async print(d) {
      return await e(this, r).getContext(d.context).print(d);
    }
    async setViewport(d) {
      var v, p;
      if ((((v = d.viewport) == null ? void 0 : v.height) ?? 0) > 1e7 || (((p = d.viewport) == null ? void 0 : p.width) ?? 0) > 1e7)
        throw new i.UnsupportedOperationException("Viewport dimension over 10000000 are not supported");
      const b = {};
      d.devicePixelRatio !== void 0 && (b.devicePixelRatio = d.devicePixelRatio), d.viewport !== void 0 && (b.viewport = d.viewport);
      const w = await T(this, c, yc).call(this, d.context, d.userContexts);
      for (const I of d.userContexts ?? [])
        e(this, o).updateUserContextConfig(I, b);
      return d.context !== void 0 && e(this, o).updateBrowsingContextConfig(d.context, b), await Promise.all(w.map(async (I) => {
        const n = e(this, o).getActiveConfig(I.id, I.userContext);
        await I.setViewport(n.viewport ?? null, n.devicePixelRatio ?? null, n.screenOrientation ?? null);
      })), {};
    }
    async traverseHistory(d) {
      const C = e(this, r).getContext(d.context);
      if (!C)
        throw new i.InvalidArgumentException(`No browsing context with id ${d.context}`);
      if (!C.isTopLevelContext())
        throw new i.InvalidArgumentException("Traversing history is only supported on the top-level context");
      return await C.traverseHistory(d.delta), {};
    }
    async handleUserPrompt(d) {
      var b;
      const C = e(this, r).getContext(d.context);
      try {
        await C.handleUserPrompt(d.accept, d.userText);
      } catch (w) {
        throw (b = w.message) != null && b.includes("No dialog is showing") ? new i.NoSuchAlertException("No dialog is showing") : w;
      }
      return {};
    }
    async close(d) {
      const C = e(this, r).getContext(d.context);
      if (!C.isTopLevelContext())
        throw new i.InvalidArgumentException(`Non top-level browsing context ${C.id} cannot be closed.`);
      const b = C.cdpTarget.parentCdpClient;
      try {
        const w = new Promise((v) => {
          const p = (I) => {
            I.targetId === d.context && (b.off("Target.detachedFromTarget", p), v());
          };
          b.on("Target.detachedFromTarget", p);
        });
        try {
          d.promptUnload ? await C.close() : await b.sendCommand("Target.closeTarget", {
            targetId: d.context
          });
        } catch (v) {
          if (!b.isCloseError(v))
            throw v;
        }
        await w;
      } catch (w) {
        if (!(w.code === -32e3 && w.message === "Not attached to an active page"))
          throw w;
      }
      return {};
    }
    async locateNodes(d) {
      return await e(this, r).getContext(d.context).locateNodes(d);
    }
  }, t = new WeakMap(), r = new WeakMap(), o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c = new WeakSet(), yc = async function(d, C) {
    if (d === void 0 && C === void 0)
      throw new i.InvalidArgumentException("Either userContexts or context must be provided");
    if (d !== void 0 && C !== void 0)
      throw new i.InvalidArgumentException("userContexts and context are mutually exclusive");
    if (d !== void 0) {
      const w = e(this, r).getContext(d);
      if (!w.isTopLevelContext())
        throw new i.InvalidArgumentException("Emulating viewport is only supported on the top-level context");
      return [w];
    }
    await e(this, a).verifyUserContextIdList(C);
    const b = [];
    for (const w of C) {
      const v = e(this, r).getTopLevelContexts().filter((p) => p.userContext === w);
      b.push(...v);
    }
    return [...new Set(b).values()];
  }, Cc = function(d) {
    return [
      e(this, r).getContext(d),
      ...e(this, r).getContext(d).allChildren
    ].forEach((w) => {
      e(this, h).registerEvent({
        type: "event",
        method: i.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
        params: w.serializeToBidiValue()
      }, w.id);
    }), Promise.resolve();
  }, x);
  return Pr.BrowsingContextProcessor = s, Pr;
}
var ct = {}, Vo;
function Kl() {
  var h, a, c, m, tt, x;
  if (Vo) return ct;
  Vo = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.EmulationProcessor = void 0, ct.isValidLocale = t, ct.isValidTimezone = r, ct.isTimeZoneOffsetString = o;
  const i = Js();
  let s = (x = class {
    constructor(d, C, b) {
      y(this, m);
      y(this, h);
      y(this, a);
      y(this, c);
      P(this, h, C), P(this, a, d), P(this, c, b);
    }
    async setGeolocationOverride(d) {
      var w, v;
      if ("coordinates" in d && "error" in d)
        throw new i.InvalidArgumentException("Coordinates and error cannot be set at the same time");
      let C = null;
      if ("coordinates" in d) {
        if ((((w = d.coordinates) == null ? void 0 : w.altitude) ?? null) === null && (((v = d.coordinates) == null ? void 0 : v.altitudeAccuracy) ?? null) !== null)
          throw new i.InvalidArgumentException("Geolocation altitudeAccuracy can be set only with altitude");
        C = d.coordinates;
      } else if ("error" in d) {
        if (d.error.type !== "positionUnavailable")
          throw new i.InvalidArgumentException(`Unknown geolocation error ${d.error.type}`);
        C = d.error;
      } else
        throw new i.InvalidArgumentException("Coordinates or error should be set");
      const b = await T(this, m, tt).call(this, d.contexts, d.userContexts);
      for (const p of d.contexts ?? [])
        e(this, c).updateBrowsingContextConfig(p, {
          geolocation: C
        });
      for (const p of d.userContexts ?? [])
        e(this, c).updateUserContextConfig(p, {
          geolocation: C
        });
      return await Promise.all(b.map(async (p) => {
        const I = e(this, c).getActiveConfig(p.id, p.userContext);
        await p.setGeolocationOverride(I.geolocation ?? null);
      })), {};
    }
    async setLocaleOverride(d) {
      const C = d.locale ?? null;
      if (C !== null && !t(C))
        throw new i.InvalidArgumentException(`Invalid locale "${C}"`);
      const b = await T(this, m, tt).call(this, d.contexts, d.userContexts);
      for (const w of d.contexts ?? [])
        e(this, c).updateBrowsingContextConfig(w, {
          locale: C
        });
      for (const w of d.userContexts ?? [])
        e(this, c).updateUserContextConfig(w, {
          locale: C
        });
      return await Promise.all(b.map(async (w) => {
        const v = e(this, c).getActiveConfig(w.id, w.userContext);
        await Promise.all([
          w.setLocaleOverride(v.locale ?? null),
          // Set `AcceptLanguage` to locale.
          w.setUserAgentAndAcceptLanguage(v.userAgent, v.locale)
        ]);
      })), {};
    }
    async setScriptingEnabled(d) {
      const C = d.enabled, b = await T(this, m, tt).call(this, d.contexts, d.userContexts);
      for (const w of d.contexts ?? [])
        e(this, c).updateBrowsingContextConfig(w, {
          scriptingEnabled: C
        });
      for (const w of d.userContexts ?? [])
        e(this, c).updateUserContextConfig(w, {
          scriptingEnabled: C
        });
      return await Promise.all(b.map(async (w) => {
        const v = e(this, c).getActiveConfig(w.id, w.userContext);
        await w.setScriptingEnabled(v.scriptingEnabled ?? null);
      })), {};
    }
    async setScreenOrientationOverride(d) {
      const C = await T(this, m, tt).call(this, d.contexts, d.userContexts);
      for (const b of d.contexts ?? [])
        e(this, c).updateBrowsingContextConfig(b, {
          screenOrientation: d.screenOrientation
        });
      for (const b of d.userContexts ?? [])
        e(this, c).updateUserContextConfig(b, {
          screenOrientation: d.screenOrientation
        });
      return await Promise.all(C.map(async (b) => {
        const w = e(this, c).getActiveConfig(b.id, b.userContext);
        await b.setViewport(w.viewport ?? null, w.devicePixelRatio ?? null, w.screenOrientation ?? null);
      })), {};
    }
    async setScreenSettingsOverride(d) {
      const C = await T(this, m, tt).call(this, d.contexts, d.userContexts);
      for (const b of d.contexts ?? [])
        e(this, c).updateBrowsingContextConfig(b, {
          screenArea: d.screenArea
        });
      for (const b of d.userContexts ?? [])
        e(this, c).updateUserContextConfig(b, {
          screenArea: d.screenArea
        });
      return await Promise.all(C.map(async (b) => {
        const w = e(this, c).getActiveConfig(b.id, b.userContext);
        await b.setViewport(w.viewport ?? null, w.devicePixelRatio ?? null, w.screenOrientation ?? null);
      })), {};
    }
    async setTimezoneOverride(d) {
      let C = d.timezone ?? null;
      if (C !== null && !r(C))
        throw new i.InvalidArgumentException(`Invalid timezone "${C}"`);
      C !== null && o(C) && (C = `GMT${C}`);
      const b = await T(this, m, tt).call(this, d.contexts, d.userContexts);
      for (const w of d.contexts ?? [])
        e(this, c).updateBrowsingContextConfig(w, {
          timezone: C
        });
      for (const w of d.userContexts ?? [])
        e(this, c).updateUserContextConfig(w, {
          timezone: C
        });
      return await Promise.all(b.map(async (w) => {
        const v = e(this, c).getActiveConfig(w.id, w.userContext);
        await w.setTimezoneOverride(v.timezone ?? null);
      })), {};
    }
    async setUserAgentOverrideParams(d) {
      if (d.userAgent === "")
        throw new i.UnsupportedOperationException("empty user agent string is not supported");
      const C = await T(this, m, tt).call(this, d.contexts, d.userContexts, !0);
      for (const b of d.contexts ?? [])
        e(this, c).updateBrowsingContextConfig(b, {
          userAgent: d.userAgent
        });
      for (const b of d.userContexts ?? [])
        e(this, c).updateUserContextConfig(b, {
          userAgent: d.userAgent
        });
      return d.contexts === void 0 && d.userContexts === void 0 && e(this, c).updateGlobalConfig({
        userAgent: d.userAgent
      }), await Promise.all(C.map(async (b) => {
        const w = e(this, c).getActiveConfig(b.id, b.userContext);
        await b.setUserAgentAndAcceptLanguage(w.userAgent, w.locale);
      })), {};
    }
    async setNetworkConditions(d) {
      const C = await T(this, m, tt).call(this, d.contexts, d.userContexts, !0);
      for (const b of d.contexts ?? [])
        e(this, c).updateBrowsingContextConfig(b, {
          emulatedNetworkConditions: d.networkConditions
        });
      for (const b of d.userContexts ?? [])
        e(this, c).updateUserContextConfig(b, {
          emulatedNetworkConditions: d.networkConditions
        });
      if (d.contexts === void 0 && d.userContexts === void 0 && e(this, c).updateGlobalConfig({
        emulatedNetworkConditions: d.networkConditions
      }), d.networkConditions !== null && d.networkConditions.type !== "offline")
        throw new i.UnsupportedOperationException(`Unsupported network conditions ${d.networkConditions.type}`);
      return await Promise.all(C.map(async (b) => {
        const w = e(this, c).getActiveConfig(b.id, b.userContext);
        await b.setEmulatedNetworkConditions(w.emulatedNetworkConditions ?? null);
      })), {};
    }
  }, h = new WeakMap(), a = new WeakMap(), c = new WeakMap(), m = new WeakSet(), tt = async function(d, C, b = !1) {
    if (d === void 0 && C === void 0) {
      if (b)
        return e(this, a).getTopLevelContexts();
      throw new i.InvalidArgumentException("Either user contexts or browsing contexts must be provided");
    }
    if (d !== void 0 && C !== void 0)
      throw new i.InvalidArgumentException("User contexts and browsing contexts are mutually exclusive");
    const w = [];
    if (d === void 0) {
      if (C.length === 0)
        throw new i.InvalidArgumentException("user context should be provided");
      await e(this, h).verifyUserContextIdList(C);
      for (const v of C) {
        const p = e(this, a).getTopLevelContexts().filter((I) => I.userContext === v);
        w.push(...p);
      }
    } else {
      if (d.length === 0)
        throw new i.InvalidArgumentException("browsing context should be provided");
      for (const v of d) {
        const p = e(this, a).getContext(v);
        if (!p.isTopLevelContext())
          throw new i.InvalidArgumentException("The command is only supported on the top-level context");
        w.push(p);
      }
    }
    return [...new Set(w).values()];
  }, x);
  ct.EmulationProcessor = s;
  function t(g) {
    try {
      return new Intl.Locale(g), !0;
    } catch (d) {
      if (d instanceof RangeError)
        return !1;
      throw d;
    }
  }
  function r(g) {
    try {
      return Intl.DateTimeFormat(void 0, { timeZone: g }), !0;
    } catch (d) {
      if (d instanceof RangeError)
        return !1;
      throw d;
    }
  }
  function o(g) {
    return /^[+-](?:2[0-3]|[01]\d)(?::[0-5]\d)?$/.test(g);
  }
  return ct;
}
var Ir = {}, rn = {}, Xo;
function Lt() {
  if (Xo) return rn;
  Xo = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.assert = i;
  function i(s, t) {
    if (!s)
      throw new Error(t ?? "Internal assertion failed.");
  }
  return rn;
}
var _r = {}, kr = {}, Jo;
function Wl() {
  if (Jo) return kr;
  Jo = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.isSingleComplexGrapheme = i, kr.isSingleGrapheme = s;
  function i(t) {
    return s(t) && t.length > 1;
  }
  function s(t) {
    return [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(t)].length === 1;
  }
  return kr;
}
var He = {}, Yo;
function bc() {
  var o, h, ps, c, m, f, x, g, d, C;
  if (Yo) return He;
  Yo = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.WheelSource = He.PointerSource = He.KeySource = He.NoneSource = void 0;
  class i {
    constructor() {
      X(this, "type", "none");
    }
  }
  He.NoneSource = i;
  class s {
    constructor() {
      y(this, h);
      X(this, "type", "key");
      X(this, "pressed", /* @__PURE__ */ new Set());
      // This is a bitfield that matches the modifiers parameter of
      // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchKeyEvent
      y(this, o, 0);
    }
    get modifiers() {
      return e(this, o);
    }
    get alt() {
      return (e(this, o) & 1) === 1;
    }
    set alt(w) {
      T(this, h, ps).call(this, w, 1);
    }
    get ctrl() {
      return (e(this, o) & 2) === 2;
    }
    set ctrl(w) {
      T(this, h, ps).call(this, w, 2);
    }
    get meta() {
      return (e(this, o) & 4) === 4;
    }
    set meta(w) {
      T(this, h, ps).call(this, w, 4);
    }
    get shift() {
      return (e(this, o) & 8) === 8;
    }
    set shift(w) {
      T(this, h, ps).call(this, w, 8);
    }
  }
  o = new WeakMap(), h = new WeakSet(), ps = function(w, v) {
    w ? P(this, o, e(this, o) | v) : P(this, o, e(this, o) & ~v);
  }, He.KeySource = s;
  class t {
    constructor(w, v) {
      X(this, "type", "pointer");
      X(this, "subtype");
      X(this, "pointerId");
      X(this, "pressed", /* @__PURE__ */ new Set());
      X(this, "x", 0);
      X(this, "y", 0);
      X(this, "radiusX");
      X(this, "radiusY");
      X(this, "force");
      y(this, C, /* @__PURE__ */ new Map());
      this.pointerId = w, this.subtype = v;
    }
    // This is a bitfield that matches the buttons parameter of
    // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent
    get buttons() {
      let w = 0;
      for (const v of this.pressed)
        switch (v) {
          case 0:
            w |= 1;
            break;
          case 1:
            w |= 4;
            break;
          case 2:
            w |= 2;
            break;
          case 3:
            w |= 8;
            break;
          case 4:
            w |= 16;
            break;
        }
      return w;
    }
    setClickCount(w, v) {
      let p = e(this, C).get(w);
      return (!p || p.compare(v)) && (p = v), ++p.count, e(this, C).set(w, p), p.count;
    }
    getClickCount(w) {
      var v;
      return ((v = e(this, C).get(w)) == null ? void 0 : v.count) ?? 0;
    }
    /**
     * Resets click count. Resets consequent click counter. Prevents grouping clicks in
     * different `performActions` calls, so that they are not grouped as double, triple etc
     * clicks. Required for https://github.com/GoogleChromeLabs/chromium-bidi/issues/3043.
     */
    resetClickCount() {
      P(this, C, /* @__PURE__ */ new Map());
    }
  }
  C = new WeakMap(), // --- Platform-specific code starts here ---
  // Input.dispatchMouseEvent doesn't know the concept of double click, so we
  // need to create the logic, similar to how it's done for OSes:
  // https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:ui/events/event.cc;l=479
  X(t, "ClickContext", (c = class {
    constructor(v, p, I) {
      X(this, "count", 0);
      y(this, x);
      y(this, g);
      y(this, d);
      P(this, x, v), P(this, g, p), P(this, d, I);
    }
    compare(v) {
      return (
        // The click needs to be within a certain amount of ms.
        e(v, d) - e(this, d) > e(c, m) || // The click needs to be within a certain square radius.
        Math.abs(e(v, x) - e(this, x)) > e(c, f) || Math.abs(e(v, g) - e(this, g)) > e(c, f)
      );
    }
  }, m = new WeakMap(), f = new WeakMap(), x = new WeakMap(), g = new WeakMap(), d = new WeakMap(), y(c, m, 500), y(c, f, 2), c)), He.PointerSource = t;
  class r {
    constructor() {
      X(this, "type", "wheel");
    }
  }
  return He.WheelSource = r, He;
}
var Ht = {}, Qo;
function Gl() {
  if (Qo) return Ht;
  Qo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 }), Ht.getNormalizedKey = i, Ht.getKeyCode = s, Ht.getKeyLocation = t;
  function i(r) {
    switch (r) {
      case "":
        return "Unidentified";
      case "":
        return "Cancel";
      case "":
        return "Help";
      case "":
        return "Backspace";
      case "":
        return "Tab";
      case "":
        return "Clear";
      // Specification declares the '\uE006' to be `Return`, but it is not supported by
      // Chrome, so fall back to `Enter`, which aligns with WPT.
      case "":
      case "":
        return "Enter";
      case "":
        return "Shift";
      case "":
        return "Control";
      case "":
        return "Alt";
      case "":
        return "Pause";
      case "":
        return "Escape";
      case "":
        return " ";
      case "":
        return "PageUp";
      case "":
        return "PageDown";
      case "":
        return "End";
      case "":
        return "Home";
      case "":
        return "ArrowLeft";
      case "":
        return "ArrowUp";
      case "":
        return "ArrowRight";
      case "":
        return "ArrowDown";
      case "":
        return "Insert";
      case "":
        return "Delete";
      case "":
        return ";";
      case "":
        return "=";
      case "":
        return "0";
      case "":
        return "1";
      case "":
        return "2";
      case "":
        return "3";
      case "":
        return "4";
      case "":
        return "5";
      case "":
        return "6";
      case "":
        return "7";
      case "":
        return "8";
      case "":
        return "9";
      case "":
        return "*";
      case "":
        return "+";
      case "":
        return ",";
      case "":
        return "-";
      case "":
        return ".";
      case "":
        return "/";
      case "":
        return "F1";
      case "":
        return "F2";
      case "":
        return "F3";
      case "":
        return "F4";
      case "":
        return "F5";
      case "":
        return "F6";
      case "":
        return "F7";
      case "":
        return "F8";
      case "":
        return "F9";
      case "":
        return "F10";
      case "":
        return "F11";
      case "":
        return "F12";
      case "":
        return "Meta";
      case "":
        return "ZenkakuHankaku";
      case "":
        return "Shift";
      case "":
        return "Control";
      case "":
        return "Alt";
      case "":
        return "Meta";
      case "":
        return "PageUp";
      case "":
        return "PageDown";
      case "":
        return "End";
      case "":
        return "Home";
      case "":
        return "ArrowLeft";
      case "":
        return "ArrowUp";
      case "":
        return "ArrowRight";
      case "":
        return "ArrowDown";
      case "":
        return "Insert";
      case "":
        return "Delete";
      default:
        return r;
    }
  }
  function s(r) {
    switch (r) {
      case "`":
      case "~":
        return "Backquote";
      case "\\":
      case "|":
        return "Backslash";
      case "":
        return "Backspace";
      case "[":
      case "{":
        return "BracketLeft";
      case "]":
      case "}":
        return "BracketRight";
      case ",":
      case "<":
        return "Comma";
      case "0":
      case ")":
        return "Digit0";
      case "1":
      case "!":
        return "Digit1";
      case "2":
      case "@":
        return "Digit2";
      case "3":
      case "#":
        return "Digit3";
      case "4":
      case "$":
        return "Digit4";
      case "5":
      case "%":
        return "Digit5";
      case "6":
      case "^":
        return "Digit6";
      case "7":
      case "&":
        return "Digit7";
      case "8":
      case "*":
        return "Digit8";
      case "9":
      case "(":
        return "Digit9";
      case "=":
      case "+":
        return "Equal";
      // The spec declares the '<' to be `IntlBackslash` as well, but it is already covered
      // in the `Comma` above.
      case ">":
        return "IntlBackslash";
      case "a":
      case "A":
        return "KeyA";
      case "b":
      case "B":
        return "KeyB";
      case "c":
      case "C":
        return "KeyC";
      case "d":
      case "D":
        return "KeyD";
      case "e":
      case "E":
        return "KeyE";
      case "f":
      case "F":
        return "KeyF";
      case "g":
      case "G":
        return "KeyG";
      case "h":
      case "H":
        return "KeyH";
      case "i":
      case "I":
        return "KeyI";
      case "j":
      case "J":
        return "KeyJ";
      case "k":
      case "K":
        return "KeyK";
      case "l":
      case "L":
        return "KeyL";
      case "m":
      case "M":
        return "KeyM";
      case "n":
      case "N":
        return "KeyN";
      case "o":
      case "O":
        return "KeyO";
      case "p":
      case "P":
        return "KeyP";
      case "q":
      case "Q":
        return "KeyQ";
      case "r":
      case "R":
        return "KeyR";
      case "s":
      case "S":
        return "KeyS";
      case "t":
      case "T":
        return "KeyT";
      case "u":
      case "U":
        return "KeyU";
      case "v":
      case "V":
        return "KeyV";
      case "w":
      case "W":
        return "KeyW";
      case "x":
      case "X":
        return "KeyX";
      case "y":
      case "Y":
        return "KeyY";
      case "z":
      case "Z":
        return "KeyZ";
      case "-":
      case "_":
        return "Minus";
      case ".":
        return "Period";
      case "'":
      case '"':
        return "Quote";
      case ";":
      case ":":
        return "Semicolon";
      case "/":
      case "?":
        return "Slash";
      case "":
        return "AltLeft";
      case "":
        return "AltRight";
      case "":
        return "ControlLeft";
      case "":
        return "ControlRight";
      case "":
        return "Enter";
      case "":
        return "Pause";
      case "":
        return "MetaLeft";
      case "":
        return "MetaRight";
      case "":
        return "ShiftLeft";
      case "":
        return "ShiftRight";
      case " ":
      case "":
        return "Space";
      case "":
        return "Tab";
      case "":
        return "Delete";
      case "":
        return "End";
      case "":
        return "Help";
      case "":
        return "Home";
      case "":
        return "Insert";
      case "":
        return "PageDown";
      case "":
        return "PageUp";
      case "":
        return "ArrowDown";
      case "":
        return "ArrowLeft";
      case "":
        return "ArrowRight";
      case "":
        return "ArrowUp";
      case "":
        return "Escape";
      case "":
        return "F1";
      case "":
        return "F2";
      case "":
        return "F3";
      case "":
        return "F4";
      case "":
        return "F5";
      case "":
        return "F6";
      case "":
        return "F7";
      case "":
        return "F8";
      case "":
        return "F9";
      case "":
        return "F10";
      case "":
        return "F11";
      case "":
        return "F12";
      case "":
        return "NumpadEqual";
      case "":
      case "":
        return "Numpad0";
      case "":
      case "":
        return "Numpad1";
      case "":
      case "":
        return "Numpad2";
      case "":
      case "":
        return "Numpad3";
      case "":
      case "":
        return "Numpad4";
      case "":
        return "Numpad5";
      case "":
      case "":
        return "Numpad6";
      case "":
      case "":
        return "Numpad7";
      case "":
      case "":
        return "Numpad8";
      case "":
      case "":
        return "Numpad9";
      case "":
        return "NumpadAdd";
      case "":
        return "NumpadComma";
      case "":
      case "":
        return "NumpadDecimal";
      case "":
        return "NumpadDivide";
      case "":
        return "NumpadEnter";
      case "":
        return "NumpadMultiply";
      case "":
        return "NumpadSubtract";
      default:
        return;
    }
  }
  function t(r) {
    switch (r) {
      case "":
      case "":
      case "":
      case "":
      case "":
        return 1;
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
        return 3;
      case "":
      case "":
      case "":
      case "":
        return 2;
      default:
        return 0;
    }
  }
  return Ht;
}
var Tr = {}, Zo;
function Vl() {
  return Zo || (Zo = 1, Object.defineProperty(Tr, "__esModule", { value: !0 }), Tr.KeyToKeyCode = void 0, Tr.KeyToKeyCode = {
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    Abort: 3,
    Help: 6,
    Backspace: 8,
    Tab: 9,
    Numpad5: 12,
    NumpadEnter: 13,
    Enter: 13,
    "\\r": 13,
    "\\n": 13,
    ShiftLeft: 16,
    ShiftRight: 16,
    ControlLeft: 17,
    ControlRight: 17,
    AltLeft: 18,
    AltRight: 18,
    Pause: 19,
    CapsLock: 20,
    Escape: 27,
    Convert: 28,
    NonConvert: 29,
    Space: 32,
    Numpad9: 33,
    PageUp: 33,
    Numpad3: 34,
    PageDown: 34,
    End: 35,
    Numpad1: 35,
    Home: 36,
    Numpad7: 36,
    ArrowLeft: 37,
    Numpad4: 37,
    Numpad8: 38,
    ArrowUp: 38,
    ArrowRight: 39,
    Numpad6: 39,
    Numpad2: 40,
    ArrowDown: 40,
    Select: 41,
    Open: 43,
    PrintScreen: 44,
    Insert: 45,
    Numpad0: 45,
    Delete: 46,
    NumpadDecimal: 46,
    Digit0: 48,
    Digit1: 49,
    Digit2: 50,
    Digit3: 51,
    Digit4: 52,
    Digit5: 53,
    Digit6: 54,
    Digit7: 55,
    Digit8: 56,
    Digit9: 57,
    KeyA: 65,
    KeyB: 66,
    KeyC: 67,
    KeyD: 68,
    KeyE: 69,
    KeyF: 70,
    KeyG: 71,
    KeyH: 72,
    KeyI: 73,
    KeyJ: 74,
    KeyK: 75,
    KeyL: 76,
    KeyM: 77,
    KeyN: 78,
    KeyO: 79,
    KeyP: 80,
    KeyQ: 81,
    KeyR: 82,
    KeyS: 83,
    KeyT: 84,
    KeyU: 85,
    KeyV: 86,
    KeyW: 87,
    KeyX: 88,
    KeyY: 89,
    KeyZ: 90,
    MetaLeft: 91,
    MetaRight: 92,
    ContextMenu: 93,
    NumpadMultiply: 106,
    NumpadAdd: 107,
    NumpadSubtract: 109,
    NumpadDivide: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    F13: 124,
    F14: 125,
    F15: 126,
    F16: 127,
    F17: 128,
    F18: 129,
    F19: 130,
    F20: 131,
    F21: 132,
    F22: 133,
    F23: 134,
    F24: 135,
    NumLock: 144,
    ScrollLock: 145,
    AudioVolumeMute: 173,
    AudioVolumeDown: 174,
    AudioVolumeUp: 175,
    MediaTrackNext: 176,
    MediaTrackPrevious: 177,
    MediaStop: 178,
    MediaPlayPause: 179,
    Semicolon: 186,
    Equal: 187,
    NumpadEqual: 187,
    Comma: 188,
    Minus: 189,
    Period: 190,
    Slash: 191,
    Backquote: 192,
    BracketLeft: 219,
    Backslash: 220,
    BracketRight: 221,
    Quote: 222,
    AltGraph: 225,
    Props: 247,
    Cancel: 3,
    Clear: 12,
    Shift: 16,
    Control: 17,
    Alt: 18,
    Accept: 30,
    ModeChange: 31,
    " ": 32,
    Print: 42,
    Execute: 43,
    "\\u0000": 46,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    Meta: 91,
    "*": 106,
    "+": 107,
    "-": 109,
    "/": 111,
    ";": 186,
    "=": 187,
    ",": 188,
    ".": 190,
    "`": 192,
    "[": 219,
    "\\\\": 220,
    "]": 221,
    "'": 222,
    Attn: 246,
    CrSel: 247,
    ExSel: 248,
    EraseEof: 249,
    Play: 250,
    ZoomOut: 251,
    ")": 48,
    "!": 49,
    "@": 50,
    "#": 51,
    $: 52,
    "%": 53,
    "^": 54,
    "&": 55,
    "(": 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    ":": 186,
    "<": 188,
    _: 189,
    ">": 190,
    "?": 191,
    "~": 192,
    "{": 219,
    "|": 220,
    "}": 221,
    '"': 222,
    Camera: 44,
    EndCall: 95,
    VolumeDown: 182,
    VolumeUp: 183
  }), Tr;
}
var ea;
function Xl() {
  var w, v, p, I, n, u, D, E, Oe, xc, Ec, Sc, Pc, Ic, di, _c, kc, Tc;
  if (ea) return _r;
  ea = 1, Object.defineProperty(_r, "__esModule", { value: !0 }), _r.ActionDispatcher = void 0;
  const i = Se(), s = Lt(), t = Wl(), r = bc(), o = Gl(), h = Vl(), a = ((Z) => {
    const B = Z.getClientRects()[0], H = Math.max(0, Math.min(B.x, B.x + B.width)), U = Math.min(window.innerWidth, Math.max(B.x, B.x + B.width)), Y = Math.max(0, Math.min(B.y, B.y + B.height)), _ = Math.min(window.innerHeight, Math.max(B.y, B.y + B.height));
    return [H + (U - H >> 1), Y + (_ - Y >> 1)];
  }).toString(), c = (() => navigator.platform.toLowerCase().includes("mac")).toString();
  async function m(Z, B) {
    var $, V, Q, ie;
    const U = await (await Z.getOrCreateHiddenSandbox()).callFunction(a, !1, { type: "undefined" }, [B]);
    if (U.type === "exception")
      throw new i.NoSuchElementException(`Origin element ${B.sharedId} was not found`);
    (0, s.assert)(U.result.type === "array"), (0, s.assert)(((V = ($ = U.result.value) == null ? void 0 : $[0]) == null ? void 0 : V.type) === "number"), (0, s.assert)(((ie = (Q = U.result.value) == null ? void 0 : Q[1]) == null ? void 0 : ie.type) === "number");
    const { result: { value: [{ value: Y }, { value: _ }] } } = U;
    return { x: Y, y: _ };
  }
  let f = (w = class {
    constructor(B, H, U, Y) {
      y(this, E);
      y(this, v);
      y(this, p, 0);
      y(this, I, 0);
      y(this, n);
      y(this, u);
      y(this, D);
      P(this, v, H), P(this, n, B), P(this, u, U), P(this, D, Y);
    }
    async dispatchActions(B) {
      await e(this, n).queue.run(async () => {
        for (const H of B)
          await this.dispatchTickActions(H);
      });
    }
    async dispatchTickActions(B) {
      P(this, p, performance.now()), P(this, I, 0);
      for (const { action: U } of B)
        "duration" in U && U.duration !== void 0 && P(this, I, Math.max(e(this, I), U.duration));
      const H = [
        new Promise((U) => setTimeout(U, e(this, I)))
      ];
      for (const U of B)
        H.push(T(this, E, xc).call(this, U));
      await Promise.all(H);
    }
  }, v = new WeakMap(), p = new WeakMap(), I = new WeakMap(), n = new WeakMap(), u = new WeakMap(), D = new WeakMap(), E = new WeakSet(), Oe = function() {
    return e(this, v).getContext(e(this, u));
  }, xc = async function({ id: B, action: H }) {
    const U = e(this, n).get(B), Y = e(this, n).getGlobalKeyState();
    switch (H.type) {
      case "keyDown": {
        await T(this, E, kc).call(this, U, H), e(this, n).cancelList.push({
          id: B,
          action: {
            ...H,
            type: "keyUp"
          }
        });
        break;
      }
      case "keyUp": {
        await T(this, E, Tc).call(this, U, H);
        break;
      }
      case "pause":
        break;
      case "pointerDown": {
        await T(this, E, Ec).call(this, U, Y, H), e(this, n).cancelList.push({
          id: B,
          action: {
            ...H,
            type: "pointerUp"
          }
        });
        break;
      }
      case "pointerMove": {
        await T(this, E, Pc).call(this, U, Y, H);
        break;
      }
      case "pointerUp": {
        await T(this, E, Sc).call(this, U, Y, H);
        break;
      }
      case "scroll": {
        await T(this, E, _c).call(this, U, Y, H);
        break;
      }
    }
  }, Ec = async function(B, H, U) {
    const { button: Y } = U;
    if (B.pressed.has(Y))
      return;
    B.pressed.add(Y);
    const { x: _, y: $, subtype: V } = B, { width: Q, height: ie, pressure: se, twist: me, tangentialPressure: Ce } = U, { tiltX: j, tiltY: L } = C(U), { modifiers: ae } = H, { radiusX: we, radiusY: be } = b(Q ?? 1, ie ?? 1);
    switch (V) {
      case "mouse":
      case "pen":
        await e(this, E, Oe).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
          type: "mousePressed",
          x: _,
          y: $,
          modifiers: ae,
          button: d(Y),
          buttons: B.buttons,
          clickCount: B.setClickCount(Y, new r.PointerSource.ClickContext(_, $, performance.now())),
          pointerType: V,
          tangentialPressure: Ce,
          tiltX: j,
          tiltY: L,
          twist: me,
          force: se
        });
        break;
      case "touch":
        await e(this, E, Oe).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
          type: "touchStart",
          touchPoints: [
            {
              x: _,
              y: $,
              radiusX: we,
              radiusY: be,
              tangentialPressure: Ce,
              tiltX: j,
              tiltY: L,
              twist: me,
              force: se,
              id: B.pointerId
            }
          ],
          modifiers: ae
        });
        break;
    }
    B.radiusX = we, B.radiusY = be, B.force = se;
  }, Sc = function(B, H, U) {
    const { button: Y } = U;
    if (!B.pressed.has(Y))
      return;
    B.pressed.delete(Y);
    const { x: _, y: $, force: V, radiusX: Q, radiusY: ie, subtype: se } = B, { modifiers: me } = H;
    switch (se) {
      case "mouse":
      case "pen":
        return e(this, E, Oe).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
          type: "mouseReleased",
          x: _,
          y: $,
          modifiers: me,
          button: d(Y),
          buttons: B.buttons,
          clickCount: B.getClickCount(Y),
          pointerType: se
        });
      case "touch":
        return e(this, E, Oe).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
          type: "touchEnd",
          touchPoints: [
            {
              x: _,
              y: $,
              id: B.pointerId,
              force: V,
              radiusX: Q,
              radiusY: ie
            }
          ],
          modifiers: me
        });
    }
  }, Pc = async function(B, H, U) {
    const { x: Y, y: _, subtype: $ } = B, { width: V, height: Q, pressure: ie, twist: se, tangentialPressure: me, x: Ce, y: j, origin: L = "viewport", duration: ae = e(this, I) } = U, { tiltX: we, tiltY: be } = C(U), { radiusX: ue, radiusY: O } = b(V ?? 1, Q ?? 1), { targetX: G, targetY: te } = await T(this, E, di).call(this, L, Ce, j, Y, _);
    if (G < 0 || te < 0)
      throw new i.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${G}, y: ${te})`);
    let he;
    do {
      const ce = ae > 0 ? (performance.now() - e(this, p)) / ae : 1;
      he = ce >= 1;
      let de, re;
      if (he ? (de = G, re = te) : (de = Math.round(ce * (G - Y) + Y), re = Math.round(ce * (te - _) + _)), B.x !== de || B.y !== re) {
        const { modifiers: M } = H;
        switch ($) {
          case "mouse":
            await e(this, E, Oe).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
              type: "mouseMoved",
              x: de,
              y: re,
              modifiers: M,
              clickCount: 0,
              button: d(B.pressed.values().next().value ?? 5),
              buttons: B.buttons,
              pointerType: $,
              tangentialPressure: me,
              tiltX: we,
              tiltY: be,
              twist: se,
              force: ie
            });
            break;
          case "pen":
            B.pressed.size !== 0 && await e(this, E, Oe).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
              type: "mouseMoved",
              x: de,
              y: re,
              modifiers: M,
              clickCount: 0,
              button: d(B.pressed.values().next().value ?? 5),
              buttons: B.buttons,
              pointerType: $,
              tangentialPressure: me,
              tiltX: we,
              tiltY: be,
              twist: se,
              force: ie ?? 0.5
            });
            break;
          case "touch":
            B.pressed.size !== 0 && await e(this, E, Oe).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
              type: "touchMove",
              touchPoints: [
                {
                  x: de,
                  y: re,
                  radiusX: ue,
                  radiusY: O,
                  tangentialPressure: me,
                  tiltX: we,
                  tiltY: be,
                  twist: se,
                  force: ie,
                  id: B.pointerId
                }
              ],
              modifiers: M
            });
            break;
        }
        B.x = de, B.y = re, B.radiusX = ue, B.radiusY = O, B.force = ie;
      }
    } while (!he);
  }, Ic = async function() {
    if (e(this, E, Oe).id === e(this, E, Oe).cdpTarget.id)
      return { x: 0, y: 0 };
    const { backendNodeId: B } = await e(this, E, Oe).cdpTarget.cdpClient.sendCommand("DOM.getFrameOwner", { frameId: e(this, E, Oe).id }), { model: H } = await e(this, E, Oe).cdpTarget.cdpClient.sendCommand("DOM.getBoxModel", {
      backendNodeId: B
    });
    return { x: H.content[0], y: H.content[1] };
  }, di = async function(B, H, U, Y, _) {
    let $, V;
    const Q = await T(this, E, Ic).call(this);
    switch (B) {
      case "viewport":
        $ = H + Q.x, V = U + Q.y;
        break;
      case "pointer":
        $ = Y + H + Q.x, V = _ + U + Q.y;
        break;
      default: {
        const { x: ie, y: se } = await m(e(this, E, Oe), B.element);
        $ = ie + H + Q.x, V = se + U + Q.y;
        break;
      }
    }
    return { targetX: $, targetY: V };
  }, _c = async function(B, H, U) {
    const { deltaX: Y, deltaY: _, x: $, y: V, origin: Q = "viewport", duration: ie = e(this, I) } = U;
    if (Q === "pointer")
      throw new i.InvalidArgumentException('"pointer" origin is invalid for scrolling.');
    const { targetX: se, targetY: me } = await T(this, E, di).call(this, Q, $, V, 0, 0);
    if (se < 0 || me < 0)
      throw new i.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${se}, y: ${me})`);
    let Ce = 0, j = 0, L;
    do {
      const ae = ie > 0 ? (performance.now() - e(this, p)) / ie : 1;
      L = ae >= 1;
      let we, be;
      if (L ? (we = Y - Ce, be = _ - j) : (we = Math.round(ae * Y - Ce), be = Math.round(ae * _ - j)), we !== 0 || be !== 0) {
        const { modifiers: ue } = H;
        await e(this, E, Oe).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
          type: "mouseWheel",
          deltaX: we,
          deltaY: be,
          x: se,
          y: me,
          modifiers: ue
        }), Ce += we, j += be;
      }
    } while (!L);
  }, kc = async function(B, H) {
    const U = H.value;
    if (!(0, t.isSingleGrapheme)(U))
      throw new i.InvalidArgumentException(`Invalid key value: ${U}`);
    const Y = (0, t.isSingleComplexGrapheme)(U), _ = (0, o.getNormalizedKey)(U), $ = B.pressed.has(_), V = (0, o.getKeyCode)(U), Q = (0, o.getKeyLocation)(U);
    switch (_) {
      case "Alt":
        B.alt = !0;
        break;
      case "Shift":
        B.shift = !0;
        break;
      case "Control":
        B.ctrl = !0;
        break;
      case "Meta":
        B.meta = !0;
        break;
    }
    B.pressed.add(_);
    const { modifiers: ie } = B, se = x(_, B, Y), me = g(V ?? "", B) ?? se;
    let Ce;
    if (e(this, D) && B.meta)
      switch (V) {
        case "KeyA":
          Ce = "SelectAll";
          break;
        case "KeyC":
          Ce = "Copy";
          break;
        case "KeyV":
          Ce = B.shift ? "PasteAndMatchStyle" : "Paste";
          break;
        case "KeyX":
          Ce = "Cut";
          break;
        case "KeyZ":
          Ce = B.shift ? "Redo" : "Undo";
          break;
      }
    const j = [
      e(this, E, Oe).cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
        type: me ? "keyDown" : "rawKeyDown",
        windowsVirtualKeyCode: h.KeyToKeyCode[_],
        key: _,
        code: V,
        text: me,
        unmodifiedText: se,
        autoRepeat: $,
        isSystemKey: B.alt || void 0,
        location: Q < 3 ? Q : void 0,
        isKeypad: Q === 3,
        modifiers: ie,
        commands: Ce ? [Ce] : void 0
      })
    ];
    _ === "Escape" && !B.alt && (e(this, D) && !B.ctrl && !B.meta || !e(this, D)) && j.push(e(this, E, Oe).cdpTarget.cdpClient.sendCommand("Input.cancelDragging")), await Promise.all(j);
  }, Tc = function(B, H) {
    const U = H.value;
    if (!(0, t.isSingleGrapheme)(U))
      throw new i.InvalidArgumentException(`Invalid key value: ${U}`);
    const Y = (0, t.isSingleComplexGrapheme)(U), _ = (0, o.getNormalizedKey)(U);
    if (!B.pressed.has(_))
      return;
    const $ = (0, o.getKeyCode)(U), V = (0, o.getKeyLocation)(U);
    switch (_) {
      case "Alt":
        B.alt = !1;
        break;
      case "Shift":
        B.shift = !1;
        break;
      case "Control":
        B.ctrl = !1;
        break;
      case "Meta":
        B.meta = !1;
        break;
    }
    B.pressed.delete(_);
    const { modifiers: Q } = B, ie = x(_, B, Y), se = g($ ?? "", B) ?? ie;
    return e(this, E, Oe).cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
      type: "keyUp",
      windowsVirtualKeyCode: h.KeyToKeyCode[_],
      key: _,
      code: $,
      text: se,
      unmodifiedText: ie,
      location: V < 3 ? V : void 0,
      isSystemKey: B.alt || void 0,
      isKeypad: V === 3,
      modifiers: Q
    });
  }, X(w, "isMacOS", async (B) => {
    const U = await (await B.getOrCreateHiddenSandbox()).callFunction(c, !1);
    return (0, s.assert)(U.type !== "exception"), (0, s.assert)(U.result.type === "boolean"), U.result.value;
  }), w);
  _r.ActionDispatcher = f;
  const x = (Z, B, H) => H ? Z : Z === "Enter" ? "\r" : [...Z].length === 1 ? B.shift ? Z.toLocaleUpperCase("en-US") : Z : void 0, g = (Z, B) => {
    if (B.ctrl) {
      switch (Z) {
        case "Digit2":
          if (B.shift)
            return "\0";
          break;
        case "KeyA":
          return "";
        case "KeyB":
          return "";
        case "KeyC":
          return "";
        case "KeyD":
          return "";
        case "KeyE":
          return "";
        case "KeyF":
          return "";
        case "KeyG":
          return "\x07";
        case "KeyH":
          return "\b";
        case "KeyI":
          return "	";
        case "KeyJ":
          return `
`;
        case "KeyK":
          return "\v";
        case "KeyL":
          return "\f";
        case "KeyM":
          return "\r";
        case "KeyN":
          return "";
        case "KeyO":
          return "";
        case "KeyP":
          return "";
        case "KeyQ":
          return "";
        case "KeyR":
          return "";
        case "KeyS":
          return "";
        case "KeyT":
          return "";
        case "KeyU":
          return "";
        case "KeyV":
          return "";
        case "KeyW":
          return "";
        case "KeyX":
          return "";
        case "KeyY":
          return "";
        case "KeyZ":
          return "";
        case "BracketLeft":
          return "\x1B";
        case "Backslash":
          return "";
        case "BracketRight":
          return "";
        case "Digit6":
          if (B.shift)
            return "";
          break;
        case "Minus":
          return "";
      }
      return "";
    }
    if (B.alt)
      return "";
  };
  function d(Z) {
    switch (Z) {
      case 0:
        return "left";
      case 1:
        return "middle";
      case 2:
        return "right";
      case 3:
        return "back";
      case 4:
        return "forward";
      default:
        return "none";
    }
  }
  function C(Z) {
    const B = Z.altitudeAngle ?? Math.PI / 2, H = Z.azimuthAngle ?? 0;
    let U = 0, Y = 0;
    if (B === 0 && ((H === 0 || H === 2 * Math.PI) && (U = Math.PI / 2), H === Math.PI / 2 && (Y = Math.PI / 2), H === Math.PI && (U = -Math.PI / 2), H === 3 * Math.PI / 2 && (Y = -Math.PI / 2), H > 0 && H < Math.PI / 2 && (U = Math.PI / 2, Y = Math.PI / 2), H > Math.PI / 2 && H < Math.PI && (U = -Math.PI / 2, Y = Math.PI / 2), H > Math.PI && H < 3 * Math.PI / 2 && (U = -Math.PI / 2, Y = -Math.PI / 2), H > 3 * Math.PI / 2 && H < 2 * Math.PI && (U = Math.PI / 2, Y = -Math.PI / 2)), B !== 0) {
      const $ = Math.tan(B);
      U = Math.atan(Math.cos(H) / $), Y = Math.atan(Math.sin(H) / $);
    }
    const _ = 180 / Math.PI;
    return {
      tiltX: Math.round(U * _),
      tiltY: Math.round(Y * _)
    };
  }
  function b(Z, B) {
    return {
      radiusX: Z ? Z / 2 : 0.5,
      radiusY: B ? B / 2 : 0.5
    };
  }
  return _r;
}
var Dr = {}, Nr = {}, Rr = {}, ta;
function Jl() {
  var s, t, r, li, h;
  if (ta) return Rr;
  ta = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.Mutex = void 0;
  let i = (h = class {
    constructor() {
      y(this, r);
      y(this, s, !1);
      y(this, t, []);
    }
    // This is FIFO.
    acquire() {
      const c = { resolved: !1 };
      return e(this, s) ? new Promise((m) => {
        e(this, t).push(() => m(T(this, r, li).bind(this, c)));
      }) : (P(this, s, !0), Promise.resolve(T(this, r, li).bind(this, c)));
    }
    async run(c) {
      const m = await this.acquire();
      try {
        return await c();
      } finally {
        m();
      }
    }
  }, s = new WeakMap(), t = new WeakMap(), r = new WeakSet(), li = function(c) {
    if (c.resolved)
      throw new Error("Cannot release more than once.");
    c.resolved = !0;
    const m = e(this, t).shift();
    if (!m) {
      P(this, s, !1);
      return;
    }
    m();
  }, h);
  return Rr.Mutex = i, Rr;
}
var ra;
function Yl() {
  var o, h, a;
  if (ra) return Nr;
  ra = 1, Object.defineProperty(Nr, "__esModule", { value: !0 }), Nr.InputState = void 0;
  const i = Se(), s = Jl(), t = bc();
  let r = (a = class {
    constructor() {
      X(this, "cancelList", []);
      y(this, o, /* @__PURE__ */ new Map());
      y(this, h, new s.Mutex());
    }
    getOrCreate(m, f, x) {
      let g = e(this, o).get(m);
      if (!g) {
        switch (f) {
          case "none":
            g = new t.NoneSource();
            break;
          case "key":
            g = new t.KeySource();
            break;
          case "pointer": {
            let d = x === "mouse" ? 0 : 2;
            const C = /* @__PURE__ */ new Set();
            for (const [, b] of e(this, o))
              b.type === "pointer" && C.add(b.pointerId);
            for (; C.has(d); )
              ++d;
            g = new t.PointerSource(d, x);
            break;
          }
          case "wheel":
            g = new t.WheelSource();
            break;
          default:
            throw new i.InvalidArgumentException(`Expected "none", "key", "pointer", or "wheel". Found unknown source type ${f}.`);
        }
        return e(this, o).set(m, g), g;
      }
      if (g.type !== f)
        throw new i.InvalidArgumentException(`Input source type of ${m} is ${g.type}, but received ${f}.`);
      return g;
    }
    get(m) {
      const f = e(this, o).get(m);
      if (!f)
        throw new i.UnknownErrorException("Internal error.");
      return f;
    }
    getGlobalKeyState() {
      const m = new t.KeySource();
      for (const [, f] of e(this, o))
        if (f.type === "key") {
          for (const x of f.pressed)
            m.pressed.add(x);
          m.alt || (m.alt = f.alt), m.ctrl || (m.ctrl = f.ctrl), m.meta || (m.meta = f.meta), m.shift || (m.shift = f.shift);
        }
      return m;
    }
    get queue() {
      return e(this, h);
    }
  }, o = new WeakMap(), h = new WeakMap(), a);
  return Nr.InputState = r, Nr;
}
var sa;
function Ql() {
  if (sa) return Dr;
  sa = 1, Object.defineProperty(Dr, "__esModule", { value: !0 }), Dr.InputStateManager = void 0;
  const i = Lt(), s = Yl();
  let t = class extends WeakMap {
    get(o) {
      return (0, i.assert)(o.isTopLevelContext()), this.has(o) || this.set(o, new s.InputState()), super.get(o);
    }
  };
  return Dr.InputStateManager = t, Dr;
}
var na;
function Zl() {
  var h, a, c, Dc, f;
  if (na) return Ir;
  na = 1, Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.InputProcessor = void 0;
  const i = Se(), s = Lt(), t = Xl(), r = Ql();
  let o = (f = class {
    constructor(g) {
      y(this, c);
      y(this, h);
      y(this, a, new r.InputStateManager());
      P(this, h, g);
    }
    async performActions(g) {
      const d = e(this, h).getContext(g.context), C = e(this, a).get(d.top), b = T(this, c, Dc).call(this, g, C);
      return await new t.ActionDispatcher(C, e(this, h), g.context, await t.ActionDispatcher.isMacOS(d).catch(() => !1)).dispatchActions(b), {};
    }
    async releaseActions(g) {
      const d = e(this, h).getContext(g.context), C = d.top, b = e(this, a).get(C);
      return await new t.ActionDispatcher(b, e(this, h), g.context, await t.ActionDispatcher.isMacOS(d).catch(() => !1)).dispatchTickActions(b.cancelList.reverse()), e(this, a).delete(C), {};
    }
    async setFiles(g) {
      const C = await e(this, h).getContext(g.context).getOrCreateHiddenSandbox();
      let b;
      try {
        b = await C.callFunction(String(function(I) {
          if (!(this instanceof HTMLInputElement))
            return this instanceof Element ? 1 : 0;
          if (this.type !== "file")
            return 2;
          if (this.disabled)
            return 3;
          if (I > 1 && !this.multiple)
            return 4;
        }), !1, g.element, [{ type: "number", value: g.files.length }]);
      } catch {
        throw new i.NoSuchNodeException(`Could not find element ${g.element.sharedId}`);
      }
      if ((0, s.assert)(b.type === "success"), b.result.type === "number")
        switch (b.result.value) {
          case 0:
            throw new i.NoSuchElementException(`Could not find element ${g.element.sharedId}`);
          case 1:
            throw new i.UnableToSetFileInputException(`Element ${g.element.sharedId} is not a input`);
          case 2:
            throw new i.UnableToSetFileInputException(`Input element ${g.element.sharedId} is not a file type`);
          case 3:
            throw new i.UnableToSetFileInputException(`Input element ${g.element.sharedId} is disabled`);
          case 4:
            throw new i.UnableToSetFileInputException("Cannot set multiple files on a non-multiple input element");
        }
      if (g.files.length === 0)
        return await C.callFunction(String(function() {
          var I;
          if (((I = this.files) == null ? void 0 : I.length) === 0) {
            this.dispatchEvent(new Event("cancel", {
              bubbles: !0
            }));
            return;
          }
          this.files = new DataTransfer().files, this.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })), this.dispatchEvent(new Event("change", { bubbles: !0 }));
        }), !1, g.element), {};
      const w = [];
      for (let p = 0; p < g.files.length; ++p) {
        const I = await C.callFunction(
          String(function(E) {
            var l;
            return (l = this.files) == null ? void 0 : l.item(E);
          }),
          !1,
          g.element,
          [{ type: "number", value: 0 }],
          "root"
          /* Script.ResultOwnership.Root */
        );
        if ((0, s.assert)(I.type === "success"), I.result.type !== "object")
          break;
        const { handle: n } = I.result;
        (0, s.assert)(n !== void 0);
        const { path: u } = await C.cdpClient.sendCommand("DOM.getFileInfo", {
          objectId: n
        });
        w.push(u), C.disown(n).catch(void 0);
      }
      w.sort();
      const v = [...g.files].sort();
      if (w.length !== g.files.length || v.some((p, I) => w[I] !== p)) {
        const { objectId: p } = await C.deserializeForCdp(g.element);
        (0, s.assert)(p !== void 0), await C.cdpClient.sendCommand("DOM.setFileInputFiles", {
          files: g.files,
          objectId: p
        });
      } else
        await C.callFunction(String(function() {
          this.dispatchEvent(new Event("cancel", {
            bubbles: !0
          }));
        }), !1, g.element);
      return {};
    }
  }, h = new WeakMap(), a = new WeakMap(), c = new WeakSet(), Dc = function(g, d) {
    var b;
    const C = [];
    for (const w of g.actions) {
      switch (w.type) {
        case "pointer": {
          w.parameters ?? (w.parameters = {
            pointerType: "mouse"
            /* Input.PointerType.Mouse */
          }), (b = w.parameters).pointerType ?? (b.pointerType = "mouse");
          const p = d.getOrCreate(w.id, "pointer", w.parameters.pointerType);
          if (p.subtype !== w.parameters.pointerType)
            throw new i.InvalidArgumentException(`Expected input source ${w.id} to be ${p.subtype}; got ${w.parameters.pointerType}.`);
          p.resetClickCount();
          break;
        }
        default:
          d.getOrCreate(w.id, w.type);
      }
      const v = w.actions.map((p) => ({
        id: w.id,
        action: p
      }));
      for (let p = 0; p < v.length; p++)
        C.length === p && C.push([]), C[p].push(v[p]);
    }
    return C;
  }, f);
  return Ir.InputProcessor = o, Ir;
}
var zt = {}, Ne = {}, sn = {}, ia;
function eh() {
  if (ia) return sn;
  ia = 1, Object.defineProperty(sn, "__esModule", { value: !0 }), sn.base64ToString = i;
  function i(s) {
    return "atob" in globalThis ? globalThis.atob(s) : Buffer.from(s, "base64").toString("ascii");
  }
  return sn;
}
var oa;
function Gn() {
  if (oa) return Ne;
  oa = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.computeHeadersSize = t, Ne.stringToBase64 = r, Ne.bidiNetworkHeadersFromCdpNetworkHeaders = h, Ne.bidiNetworkHeadersFromCdpNetworkHeadersEntries = a, Ne.cdpNetworkHeadersFromBidiNetworkHeaders = c, Ne.bidiNetworkHeadersFromCdpFetchHeaders = m, Ne.cdpFetchHeadersFromBidiNetworkHeaders = f, Ne.networkHeaderFromCookieHeaders = x, Ne.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction = g, Ne.cdpToBiDiCookie = d, Ne.deserializeByteValue = C, Ne.bidiToCdpCookie = b, Ne.sameSiteBiDiToCdp = v, Ne.isSpecialScheme = p, Ne.matchUrlPattern = n, Ne.bidiBodySizeFromCdpPostDataEntries = u, Ne.getTiming = D;
  const i = Js(), s = eh();
  function t(E) {
    const l = E.reduce((S, N) => `${S}${N.name}: ${N.value.value}\r
`, "");
    return new TextEncoder().encode(l).length;
  }
  function r(E) {
    return o(new TextEncoder().encode(E));
  }
  function o(E) {
    const S = [];
    for (let k = 0; k < E.length; k += 65534) {
      const A = E.subarray(k, k + 65534);
      S.push(String.fromCodePoint.apply(null, A));
    }
    const N = S.join("");
    return btoa(N);
  }
  function h(E) {
    return E ? Object.entries(E).map(([l, S]) => ({
      name: l,
      value: {
        type: "string",
        value: S
      }
    })) : [];
  }
  function a(E) {
    return E ? E.map(({ name: l, value: S }) => ({
      name: l,
      value: {
        type: "string",
        value: S
      }
    })) : [];
  }
  function c(E) {
    if (E !== void 0)
      return E.reduce((l, S) => (l[S.name] = S.value.value, l), {});
  }
  function m(E) {
    return E ? E.map(({ name: l, value: S }) => ({
      name: l,
      value: {
        type: "string",
        value: S
      }
    })) : [];
  }
  function f(E) {
    if (E !== void 0)
      return E.map(({ name: l, value: S }) => ({
        name: l,
        value: S.value
      }));
  }
  function x(E) {
    return E === void 0 ? void 0 : {
      name: "Cookie",
      value: {
        type: "string",
        value: E.reduce((S, N, k) => {
          k > 0 && (S += ";");
          const A = N.value.type === "base64" ? btoa(N.value.value) : N.value.value;
          return S += `${N.name}=${A}`, S;
        }, "")
      }
    };
  }
  function g(E) {
    switch (E) {
      case "default":
        return "Default";
      case "cancel":
        return "CancelAuth";
      case "provideCredentials":
        return "ProvideCredentials";
    }
  }
  function d(E) {
    const l = {
      name: E.name,
      value: { type: "string", value: E.value },
      domain: E.domain,
      path: E.path,
      size: E.size,
      httpOnly: E.httpOnly,
      secure: E.secure,
      sameSite: E.sameSite === void 0 ? "none" : w(E.sameSite),
      ...E.expires >= 0 ? { expiry: Math.round(E.expires) } : void 0
    };
    return l["goog:session"] = E.session, l["goog:priority"] = E.priority, l["goog:sameParty"] = E.sameParty, l["goog:sourceScheme"] = E.sourceScheme, l["goog:sourcePort"] = E.sourcePort, E.partitionKey !== void 0 && (l["goog:partitionKey"] = E.partitionKey), E.partitionKeyOpaque !== void 0 && (l["goog:partitionKeyOpaque"] = E.partitionKeyOpaque), l;
  }
  function C(E) {
    return E.type === "base64" ? (0, s.base64ToString)(E.value) : E.value;
  }
  function b(E, l) {
    const S = C(E.cookie.value), N = {
      name: E.cookie.name,
      value: S,
      domain: E.cookie.domain,
      path: E.cookie.path ?? "/",
      secure: E.cookie.secure ?? !1,
      httpOnly: E.cookie.httpOnly ?? !1,
      ...l.sourceOrigin !== void 0 && {
        partitionKey: {
          hasCrossSiteAncestor: !1,
          // CDP's `partitionKey.topLevelSite` is the BiDi's `partition.sourceOrigin`.
          topLevelSite: l.sourceOrigin
        }
      },
      ...E.cookie.expiry !== void 0 && {
        expires: E.cookie.expiry
      },
      ...E.cookie.sameSite !== void 0 && {
        sameSite: v(E.cookie.sameSite)
      }
    };
    return E.cookie["goog:url"] !== void 0 && (N.url = E.cookie["goog:url"]), E.cookie["goog:priority"] !== void 0 && (N.priority = E.cookie["goog:priority"]), E.cookie["goog:sameParty"] !== void 0 && (N.sameParty = E.cookie["goog:sameParty"]), E.cookie["goog:sourceScheme"] !== void 0 && (N.sourceScheme = E.cookie["goog:sourceScheme"]), E.cookie["goog:sourcePort"] !== void 0 && (N.sourcePort = E.cookie["goog:sourcePort"]), N;
  }
  function w(E) {
    switch (E) {
      case "Strict":
        return "strict";
      case "None":
        return "none";
      case "Lax":
        return "lax";
      default:
        return "lax";
    }
  }
  function v(E) {
    switch (E) {
      case "none":
        return "None";
      case "strict":
        return "Strict";
      // Defaults to `Lax`:
      // https://web.dev/articles/samesite-cookies-explained#samesitelax_by_default
      case "default":
      case "lax":
        return "Lax";
    }
    throw new i.InvalidArgumentException(`Unknown 'sameSite' value ${E}`);
  }
  function p(E) {
    return ["ftp", "file", "http", "https", "ws", "wss"].includes(E.replace(/:$/, ""));
  }
  function I(E) {
    return E.protocol.replace(/:$/, "");
  }
  function n(E, l) {
    const S = new URL(l);
    return !(E.protocol !== void 0 && E.protocol !== I(S) || E.hostname !== void 0 && E.hostname !== S.hostname || E.port !== void 0 && E.port !== S.port || E.pathname !== void 0 && E.pathname !== S.pathname || E.search !== void 0 && E.search !== S.search);
  }
  function u(E) {
    let l = 0;
    for (const S of E)
      l += atob(S.bytes ?? "").length;
    return l;
  }
  function D(E, l = 0) {
    return !E || E <= 0 || E + l <= 0 ? 0 : E + l;
  }
  return Ne;
}
var aa;
function Rc() {
  var m, f, x, g, d, fs, hi, gs, Nc, p;
  if (aa) return zt;
  aa = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.NetworkProcessor = void 0, zt.parseBiDiHeaders = c;
  const i = Se(), s = Gn();
  let t = (p = class {
    constructor(n, u, D, E) {
      y(this, d);
      y(this, m);
      y(this, f);
      y(this, x);
      y(this, g);
      P(this, x, D), P(this, m, n), P(this, f, u), P(this, g, E);
    }
    async addIntercept(n) {
      e(this, m).verifyTopLevelContextsList(n.contexts);
      const u = n.urlPatterns ?? [], D = p.parseUrlPatterns(u), E = e(this, f).addIntercept({
        urlPatterns: D,
        phases: n.phases,
        contexts: n.contexts
      });
      return await T(this, d, fs).call(this), {
        intercept: E
      };
    }
    async continueRequest(n) {
      if (n.url !== void 0 && p.parseUrlString(n.url), n.method !== void 0 && !p.isMethodValid(n.method))
        throw new i.InvalidArgumentException(`Method '${n.method}' is invalid.`);
      n.headers && p.validateHeaders(n.headers);
      const u = T(this, d, gs).call(this, n.request, [
        "beforeRequestSent"
      ]);
      try {
        await u.continueRequest(n);
      } catch (D) {
        throw p.wrapInterceptionError(D);
      }
      return {};
    }
    async continueResponse(n) {
      n.headers && p.validateHeaders(n.headers);
      const u = T(this, d, gs).call(this, n.request, [
        "authRequired",
        "responseStarted"
      ]);
      try {
        await u.continueResponse(n);
      } catch (D) {
        throw p.wrapInterceptionError(D);
      }
      return {};
    }
    async continueWithAuth(n) {
      const u = n.request;
      return await T(this, d, gs).call(this, u, [
        "authRequired"
      ]).continueWithAuth(n), {};
    }
    async failRequest({ request: n }) {
      const u = T(this, d, hi).call(this, n);
      if (u.interceptPhase === "authRequired")
        throw new i.InvalidArgumentException(`Request '${n}' in 'authRequired' phase cannot be failed`);
      if (!u.interceptPhase)
        throw new i.NoSuchRequestException(`No blocked request found for network id '${n}'`);
      return await u.failRequest("Failed"), {};
    }
    async provideResponse(n) {
      n.headers && p.validateHeaders(n.headers);
      const u = T(this, d, gs).call(this, n.request, [
        "beforeRequestSent",
        "responseStarted",
        "authRequired"
      ]);
      try {
        await u.provideResponse(n);
      } catch (D) {
        throw p.wrapInterceptionError(D);
      }
      return {};
    }
    async removeIntercept(n) {
      return e(this, f).removeIntercept(n.intercept), await T(this, d, fs).call(this), {};
    }
    async setCacheBehavior(n) {
      const u = e(this, m).verifyTopLevelContextsList(n.contexts);
      if (u.size === 0)
        return e(this, f).defaultCacheBehavior = n.cacheBehavior, await Promise.all(e(this, m).getAllContexts().map((E) => E.cdpTarget.toggleSetCacheDisabled())), {};
      const D = n.cacheBehavior === "bypass";
      return await Promise.all([...u.values()].map((E) => E.cdpTarget.toggleSetCacheDisabled(D))), {};
    }
    /**
     * Validate https://fetch.spec.whatwg.org/#header-value
     */
    static validateHeaders(n) {
      for (const u of n) {
        let D;
        if (u.value.type === "string" ? D = u.value.value : D = atob(u.value.value), D !== D.trim() || D.includes(`
`) || D.includes("\0"))
          throw new i.InvalidArgumentException(`Header value '${D}' is not acceptable value`);
      }
    }
    static isMethodValid(n) {
      return /^[!#$%&'*+\-.^_`|~a-zA-Z\d]+$/.test(n);
    }
    /**
     * Attempts to parse the given url.
     * Throws an InvalidArgumentException if the url is invalid.
     */
    static parseUrlString(n) {
      try {
        return new URL(n);
      } catch (u) {
        throw new i.InvalidArgumentException(`Invalid URL '${n}': ${u}`);
      }
    }
    static parseUrlPatterns(n) {
      return n.map((u) => {
        let D = "", E = !0, l = !0, S = !0, N = !0, k = !0;
        switch (u.type) {
          case "string": {
            D = r(u.pattern);
            break;
          }
          case "pattern": {
            if (u.protocol === void 0)
              E = !1, D += "http";
            else {
              if (u.protocol === "")
                throw new i.InvalidArgumentException("URL pattern must specify a protocol");
              if (u.protocol = r(u.protocol), !u.protocol.match(/^[a-zA-Z+-.]+$/))
                throw new i.InvalidArgumentException("Forbidden characters");
              D += u.protocol;
            }
            const z = D.toLocaleLowerCase();
            if (D += ":", (0, s.isSpecialScheme)(z) && (D += "//"), u.hostname === void 0)
              z !== "file" && (D += "placeholder"), l = !1;
            else {
              if (u.hostname === "")
                throw new i.InvalidArgumentException("URL pattern must specify a hostname");
              if (u.protocol === "file")
                throw new i.InvalidArgumentException("URL pattern protocol cannot be 'file'");
              u.hostname = r(u.hostname);
              let K = !1;
              for (const R of u.hostname) {
                if (R === "/" || R === "?" || R === "#")
                  throw new i.InvalidArgumentException("'/', '?', '#' are forbidden in hostname");
                if (!K && R === ":")
                  throw new i.InvalidArgumentException("':' is only allowed inside brackets in hostname");
                R === "[" && (K = !0), R === "]" && (K = !1);
              }
              D += u.hostname;
            }
            if (u.port === void 0)
              S = !1;
            else {
              if (u.port === "")
                throw new i.InvalidArgumentException("URL pattern must specify a port");
              if (u.port = r(u.port), D += ":", !u.port.match(/^\d+$/))
                throw new i.InvalidArgumentException("Forbidden characters");
              D += u.port;
            }
            if (u.pathname === void 0)
              N = !1;
            else {
              if (u.pathname = r(u.pathname), u.pathname[0] !== "/" && (D += "/"), u.pathname.includes("#") || u.pathname.includes("?"))
                throw new i.InvalidArgumentException("Forbidden characters");
              D += u.pathname;
            }
            if (u.search === void 0)
              k = !1;
            else {
              if (u.search = r(u.search), u.search[0] !== "?" && (D += "?"), u.search.includes("#"))
                throw new i.InvalidArgumentException("Forbidden characters");
              D += u.search;
            }
            break;
          }
        }
        const A = (z) => {
          const K = {
            "ftp:": 21,
            "file:": null,
            "http:": 80,
            "https:": 443,
            "ws:": 80,
            "wss:": 443
          };
          if ((0, s.isSpecialScheme)(z.protocol) && K[z.protocol] !== null && (!z.port || String(K[z.protocol]) === z.port))
            return "";
          if (z.port)
            return z.port;
        };
        try {
          const z = new URL(D);
          return {
            protocol: E ? z.protocol.replace(/:$/, "") : void 0,
            hostname: l ? z.hostname : void 0,
            port: S ? A(z) : void 0,
            pathname: N && z.pathname ? z.pathname : void 0,
            search: k ? z.search : void 0
          };
        } catch (z) {
          throw new i.InvalidArgumentException(`${z.message} '${D}'`);
        }
      });
    }
    static wrapInterceptionError(n) {
      return n != null && n.message.includes("Invalid header") || n != null && n.message.includes("Unsafe header") ? new i.InvalidArgumentException(n.message) : n;
    }
    async addDataCollector(n) {
      if (n.userContexts !== void 0 && n.contexts !== void 0)
        throw new i.InvalidArgumentException("'contexts' and 'userContexts' are mutually exclusive");
      if (n.userContexts !== void 0 && await e(this, x).verifyUserContextIdList(n.userContexts), n.contexts !== void 0) {
        for (const D of n.contexts)
          if (!e(this, m).getContext(D).isTopLevelContext())
            throw new i.InvalidArgumentException("Data collectors are available only on top-level browsing contexts");
      }
      const u = e(this, f).addDataCollector(n);
      return await T(this, d, fs).call(this), { collector: u };
    }
    async getData(n) {
      return await e(this, f).getCollectedData(n);
    }
    async removeDataCollector(n) {
      return e(this, f).removeDataCollector(n), await T(this, d, fs).call(this), {};
    }
    disownData(n) {
      return e(this, f).disownData(n), {};
    }
    async setExtraHeaders(n) {
      const u = await T(this, d, Nc).call(this, n.contexts, n.userContexts), D = c(n.headers);
      return n.userContexts === void 0 && n.contexts === void 0 && e(this, g).updateGlobalConfig({
        extraHeaders: D
      }), n.userContexts !== void 0 && n.userContexts.forEach((E) => {
        e(this, g).updateUserContextConfig(E, {
          extraHeaders: D
        });
      }), n.contexts !== void 0 && n.contexts.forEach((E) => {
        e(this, g).updateBrowsingContextConfig(E, { extraHeaders: D });
      }), await Promise.all(u.map(async (E) => {
        const l = e(this, g).getActiveConfig(E.id, E.userContext).extraHeaders ?? {};
        await E.setExtraHeaders(l);
      })), {};
    }
  }, m = new WeakMap(), f = new WeakMap(), x = new WeakMap(), g = new WeakMap(), d = new WeakSet(), fs = async function() {
    await Promise.all(e(this, m).getAllContexts().map((n) => n.cdpTarget.toggleNetwork()));
  }, hi = function(n) {
    const u = e(this, f).getRequestById(n);
    if (!u)
      throw new i.NoSuchRequestException(`Network request with ID '${n}' doesn't exist`);
    return u;
  }, gs = function(n, u) {
    const D = T(this, d, hi).call(this, n);
    if (!D.interceptPhase)
      throw new i.NoSuchRequestException(`No blocked request found for network id '${n}'`);
    if (D.interceptPhase && !u.includes(D.interceptPhase))
      throw new i.InvalidArgumentException(`Blocked request for network id '${n}' is in '${D.interceptPhase}' phase`);
    return D;
  }, Nc = async function(n, u) {
    if (n === void 0 && u === void 0)
      return e(this, m).getTopLevelContexts();
    if (n !== void 0 && u !== void 0)
      throw new i.InvalidArgumentException("User contexts and browsing contexts are mutually exclusive");
    const D = [];
    if (u !== void 0) {
      if (u.length === 0)
        throw new i.InvalidArgumentException("user context should be provided");
      await e(this, x).verifyUserContextIdList(u);
      for (const E of u) {
        const l = e(this, m).getTopLevelContexts().filter((S) => S.userContext === E);
        D.push(...l);
      }
    }
    if (n !== void 0) {
      if (n.length === 0)
        throw new i.InvalidArgumentException("browsing context should be provided");
      for (const E of n) {
        const l = e(this, m).getContext(E);
        if (!l.isTopLevelContext())
          throw new i.InvalidArgumentException("The command is only supported on the top-level context");
        D.push(l);
      }
    }
    return [...new Set(D).values()];
  }, p);
  zt.NetworkProcessor = t;
  function r(I) {
    const n = /* @__PURE__ */ new Set(["(", ")", "*", "{", "}"]);
    let u = "", D = !1;
    for (const E of I) {
      if (!D) {
        if (n.has(E))
          throw new i.InvalidArgumentException("Forbidden characters");
        if (E === "\\") {
          D = !0;
          continue;
        }
      }
      u += E, D = !1;
    }
    return u;
  }
  const o = /* @__PURE__ */ new Set([
    " ",
    "	",
    `
`,
    '"',
    "(",
    ")",
    ",",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "{",
    "}"
  ]), h = /* @__PURE__ */ new Set(["\0", `
`, "\r"]);
  function a(I, n) {
    for (const u of I)
      if (n.has(u))
        return !0;
    return !1;
  }
  function c(I) {
    const n = {};
    for (const u of I)
      if (u.value.type === "string") {
        const D = u.name, E = u.value.value;
        if (D.length === 0)
          throw new i.InvalidArgumentException("Empty header name is not allowed");
        if (a(D, o))
          throw new i.InvalidArgumentException(`Header name '${D}' contains forbidden symbols`);
        if (a(E, h))
          throw new i.InvalidArgumentException(`Header value '${E}' contains forbidden symbols`);
        if (E.trim() !== E)
          throw new i.InvalidArgumentException("Header value should not contain trailing or ending whitespaces");
        n[u.name] = u.value.value;
      } else
        throw new i.UnsupportedOperationException("Only string headers values are supported");
    return n;
  }
  return zt;
}
var Or = {}, ca;
function th() {
  var t, r;
  if (ca) return Or;
  ca = 1, Object.defineProperty(Or, "__esModule", { value: !0 }), Or.PermissionsProcessor = void 0;
  const i = Se();
  let s = (r = class {
    constructor(h) {
      y(this, t);
      P(this, t, h);
    }
    async setPermissions(h) {
      try {
        const a = h["goog:userContext"] || h.userContext;
        await e(this, t).sendCommand("Browser.setPermission", {
          origin: h.origin,
          embeddedOrigin: h.embeddedOrigin,
          browserContextId: a && a !== "default" ? a : void 0,
          permission: {
            name: h.descriptor.name
          },
          setting: h.state
        });
      } catch (a) {
        if (a.message === "Permission can't be granted to opaque origins.")
          return {};
        throw new i.InvalidArgumentException(a.message);
      }
      return {};
    }
  }, t = new WeakMap(), r);
  return Or.PermissionsProcessor = s, Or;
}
var Br = {}, Ar = {}, nn = {}, ua;
function wt() {
  if (ua) return nn;
  ua = 1, Object.defineProperty(nn, "__esModule", { value: !0 }), nn.uuidv4 = s;
  function i(t) {
    return t.reduce((r, o) => r + o.toString(16).padStart(2, "0"), "");
  }
  function s() {
    if ("crypto" in globalThis && "randomUUID" in globalThis.crypto)
      return globalThis.crypto.randomUUID();
    const t = new Uint8Array(16);
    return "crypto" in globalThis && "getRandomValues" in globalThis.crypto ? globalThis.crypto.getRandomValues(t) : jd.webcrypto.getRandomValues(t), t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, [
      i(t.subarray(0, 4)),
      i(t.subarray(4, 6)),
      i(t.subarray(6, 8)),
      i(t.subarray(8, 10)),
      i(t.subarray(10, 16))
    ].join("-");
  }
  return nn;
}
var Mr = {}, da;
function Mc() {
  var o, h, a, c, m, pi, Oc, Bc, d, fi, Ac;
  if (da) return Mr;
  da = 1, Object.defineProperty(Mr, "__esModule", { value: !0 }), Mr.ChannelProxy = void 0;
  const i = Se(), s = qe(), t = wt();
  let r = (m = class {
    constructor(v, p) {
      y(this, d);
      y(this, o);
      y(this, h, (0, t.uuidv4)());
      y(this, a);
      P(this, o, v), P(this, a, p);
    }
    /**
     * Creates a channel proxy in the given realm, initialises listener and
     * returns a handle to `sendMessage` delegate.
     */
    async init(v, p) {
      var u, D;
      const I = await T(u = m, c, Oc).call(u, v), n = await T(D = m, c, Bc).call(D, v, I);
      return T(this, d, fi).call(this, v, I, p), n;
    }
    /** Gets a ChannelProxy from window and returns its handle. */
    async startListenerFromWindow(v, p) {
      var I;
      try {
        const n = await T(this, d, Ac).call(this, v);
        T(this, d, fi).call(this, v, n, p);
      } catch (n) {
        (I = e(this, a)) == null || I.call(this, s.LogType.debugError, n);
      }
    }
    /**
     * String to be evaluated to create a ProxyChannel and put it to window.
     * Returns the delegate `sendMessage`. Used to provide an argument for preload
     * script. Does the following:
     * 1. Creates a ChannelProxy.
     * 2. Puts the ChannelProxy to window['${this.#id}'] or resolves the promise
     *    by calling delegate stored in window['${this.#id}'].
     *    This is needed because `#getHandleFromWindow` can be called before or
     *    after this method.
     * 3. Returns the delegate `sendMessage` of the created ChannelProxy.
     */
    getEvalInWindowStr() {
      var I;
      const v = String((n, u) => {
        const D = window;
        return D[n] === void 0 ? D[n] = u : (D[n](u), delete D[n]), u.sendMessage;
      }), p = T(I = m, c, pi).call(I);
      return `(${v})('${e(this, h)}',${p})`;
    }
  }, o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c = new WeakSet(), pi = function() {
    return `(${String(() => {
      const p = [];
      let I = null;
      return {
        /**
         * Gets a promise, which is resolved as soon as a message occurs
         * in the queue.
         */
        async getMessage() {
          return await (p.length > 0 ? Promise.resolve() : new Promise((u) => {
            I = u;
          })), p.shift();
        },
        /**
         * Adds a message to the queue.
         * Resolves the pending promise if needed.
         */
        sendMessage(n) {
          p.push(n), I !== null && (I(), I = null);
        }
      };
    })})()`;
  }, Oc = async function(v) {
    const p = await v.cdpClient.sendCommand("Runtime.evaluate", {
      expression: T(this, c, pi).call(this),
      contextId: v.executionContextId,
      serializationOptions: {
        serialization: "idOnly"
      }
    });
    if (p.exceptionDetails || p.result.objectId === void 0)
      throw new Error("Cannot create channel");
    return p.result.objectId;
  }, Bc = async function(v, p) {
    return (await v.cdpClient.sendCommand("Runtime.callFunctionOn", {
      functionDeclaration: String((n) => n.sendMessage),
      arguments: [{ objectId: p }],
      executionContextId: v.executionContextId,
      serializationOptions: {
        serialization: "idOnly"
      }
    })).result.objectId;
  }, d = new WeakSet(), fi = async function(v, p, I) {
    var n, u;
    for (; ; )
      try {
        const D = await v.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String(async (E) => await E.getMessage()),
          arguments: [
            {
              objectId: p
            }
          ],
          awaitPromise: !0,
          executionContextId: v.executionContextId,
          serializationOptions: {
            serialization: "deep",
            maxDepth: ((n = e(this, o).serializationOptions) == null ? void 0 : n.maxObjectDepth) ?? void 0
          }
        });
        if (D.exceptionDetails)
          throw new Error("Runtime.callFunctionOn in ChannelProxy", {
            cause: D.exceptionDetails
          });
        for (const E of v.associatedBrowsingContexts)
          I.registerEvent({
            type: "event",
            method: i.ChromiumBidi.Script.EventNames.Message,
            params: {
              channel: e(this, o).channel,
              data: v.cdpToBidiValue(
                D,
                e(this, o).ownership ?? "none"
                /* Script.ResultOwnership.None */
              ),
              source: v.source
            }
          }, E.id);
      } catch (D) {
        (u = e(this, a)) == null || u.call(this, s.LogType.debugError, D);
        break;
      }
  }, Ac = async function(v) {
    const p = await v.cdpClient.sendCommand("Runtime.callFunctionOn", {
      functionDeclaration: String((I) => {
        const n = window;
        if (n[I] === void 0)
          return new Promise((D) => n[I] = D);
        const u = n[I];
        return delete n[I], u;
      }),
      arguments: [{ value: e(this, h) }],
      executionContextId: v.executionContextId,
      awaitPromise: !0,
      serializationOptions: {
        serialization: "idOnly"
      }
    });
    if (p.exceptionDetails !== void 0 || p.result.objectId === void 0)
      throw new Error(`ChannelHandle not found in window["${e(this, h)}"]`);
    return p.result.objectId;
  }, y(m, c), m);
  return Mr.ChannelProxy = r, Mr;
}
var la;
function rh() {
  var r, o, h, a, c, m, f, x, g, Fc, C;
  if (la) return Ar;
  la = 1, Object.defineProperty(Ar, "__esModule", { value: !0 }), Ar.PreloadScript = void 0;
  const i = wt(), s = Mc();
  let t = (C = class {
    constructor(w, v) {
      y(this, g);
      /** BiDi ID, an automatically generated UUID. */
      y(this, r, (0, i.uuidv4)());
      /** CDP preload scripts. */
      y(this, o, []);
      /** The script itself, in a format expected by the spec i.e. a function. */
      y(this, h);
      /** Targets, in which the preload script is initialized. */
      y(this, a, /* @__PURE__ */ new Set());
      /** Channels to be added as arguments to functionDeclaration. */
      y(this, c);
      /** The script sandbox / world name. */
      y(this, m);
      /** The browsing contexts to execute the preload scripts in, if any. */
      y(this, f);
      /** The browsing contexts to execute the preload scripts in, if any. */
      y(this, x);
      var p;
      P(this, c, ((p = w.arguments) == null ? void 0 : p.map((I) => new s.ChannelProxy(I.value, v))) ?? []), P(this, h, w.functionDeclaration), P(this, m, w.sandbox), P(this, f, w.contexts), P(this, x, w.userContexts);
    }
    get id() {
      return e(this, r);
    }
    get targetIds() {
      return e(this, a);
    }
    /** Channels of the preload script. */
    get channels() {
      return e(this, c);
    }
    /** Contexts of the preload script, if any */
    get contexts() {
      return e(this, f);
    }
    /** UserContexts of the preload script, if any */
    get userContexts() {
      return e(this, x);
    }
    /**
     * Adds the script to the given CDP targets by calling the
     * `Page.addScriptToEvaluateOnNewDocument` command.
     */
    async initInTargets(w, v) {
      await Promise.all(Array.from(w).map((p) => this.initInTarget(p, v)));
    }
    /**
     * Adds the script to the given CDP target by calling the
     * `Page.addScriptToEvaluateOnNewDocument` command.
     */
    async initInTarget(w, v) {
      const p = await w.cdpClient.sendCommand("Page.addScriptToEvaluateOnNewDocument", {
        source: T(this, g, Fc).call(this),
        worldName: e(this, m),
        runImmediately: v
      });
      e(this, o).push({
        target: w,
        preloadScriptId: p.identifier
      }), e(this, a).add(w.id);
    }
    /**
     * Removes this script from all CDP targets.
     */
    async remove() {
      await Promise.all([
        e(this, o).map(async (w) => {
          const v = w.target, p = w.preloadScriptId;
          return await v.cdpClient.sendCommand("Page.removeScriptToEvaluateOnNewDocument", {
            identifier: p
          });
        })
      ]);
    }
    /** Removes the provided cdp target from the list of cdp preload scripts. */
    dispose(w) {
      P(this, o, e(this, o).filter((v) => {
        var p;
        return ((p = v.target) == null ? void 0 : p.id) !== w;
      })), e(this, a).delete(w);
    }
  }, r = new WeakMap(), o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c = new WeakMap(), m = new WeakMap(), f = new WeakMap(), x = new WeakMap(), g = new WeakSet(), /**
   * String to be evaluated. Wraps user-provided function so that the following
   * steps are run:
   * 1. Create channels.
   * 2. Store the created channels in window.
   * 3. Call the user-provided function with channels as arguments.
   */
  Fc = function() {
    const w = `[${this.channels.map((v) => v.getEvalInWindowStr()).join(", ")}]`;
    return `(()=>{(${e(this, h)})(...${w})})()`;
  }, C);
  return Ar.PreloadScript = t, Ar;
}
var ha;
function sh() {
  var r, o, h, a, c, m, f, qc, dn, d;
  if (ha) return Br;
  ha = 1, Object.defineProperty(Br, "__esModule", { value: !0 }), Br.ScriptProcessor = void 0;
  const i = Se(), s = rh();
  let t = (d = class {
    constructor(b, w, v, p, I, n) {
      y(this, f);
      y(this, r);
      y(this, o);
      y(this, h);
      y(this, a);
      y(this, c);
      y(this, m);
      P(this, o, w), P(this, h, v), P(this, a, p), P(this, c, I), P(this, m, n), P(this, r, b), e(this, r).addSubscribeHook(i.ChromiumBidi.Script.EventNames.RealmCreated, T(this, f, qc).bind(this));
    }
    async addPreloadScript(b) {
      var u, D;
      if ((u = b.userContexts) != null && u.length && ((D = b.contexts) != null && D.length))
        throw new i.InvalidArgumentException("Both userContexts and contexts cannot be specified.");
      const w = await e(this, c).verifyUserContextIdList(b.userContexts ?? []), v = e(this, o).verifyTopLevelContextsList(b.contexts), p = new s.PreloadScript(b, e(this, m));
      e(this, a).add(p);
      let I = [];
      w.size ? I = e(this, o).getTopLevelContexts().filter((E) => w.has(E.userContext)) : v.size ? I = [...v.values()] : I = e(this, o).getTopLevelContexts();
      const n = new Set(I.map((E) => E.cdpTarget));
      return await p.initInTargets(n, !1), {
        script: p.id
      };
    }
    async removePreloadScript(b) {
      const { script: w } = b;
      return await e(this, a).getPreloadScript(w).remove(), e(this, a).remove(w), {};
    }
    async callFunction(b) {
      return await (await T(this, f, dn).call(this, b.target)).callFunction(b.functionDeclaration, b.awaitPromise, b.this, b.arguments, b.resultOwnership, b.serializationOptions, b.userActivation);
    }
    async evaluate(b) {
      return await (await T(this, f, dn).call(this, b.target)).evaluate(b.expression, b.awaitPromise, b.resultOwnership, b.serializationOptions, b.userActivation);
    }
    async disown(b) {
      const w = await T(this, f, dn).call(this, b.target);
      return await Promise.all(b.handles.map(async (v) => await w.disown(v))), {};
    }
    getRealms(b) {
      return b.context !== void 0 && e(this, o).getContext(b.context), { realms: e(this, h).findRealms({
        browsingContextId: b.context,
        type: b.type,
        isHidden: !1
      }).map((v) => v.realmInfo) };
    }
  }, r = new WeakMap(), o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c = new WeakMap(), m = new WeakMap(), f = new WeakSet(), qc = function(b) {
    const w = e(this, o).getContext(b), v = [
      w,
      ...e(this, o).getContext(b).allChildren
    ], p = /* @__PURE__ */ new Set();
    for (const I of v) {
      const n = e(this, h).findRealms({
        browsingContextId: I.id
      });
      for (const u of n)
        p.add(u);
    }
    for (const I of p)
      e(this, r).registerEvent({
        type: "event",
        method: i.ChromiumBidi.Script.EventNames.RealmCreated,
        params: I.realmInfo
      }, w.id);
    return Promise.resolve();
  }, dn = async function(b) {
    return "context" in b ? await e(this, o).getContext(b.context).getOrCreateUserSandbox(b.sandbox) : e(this, h).getRealm({
      realmId: b.realm,
      isHidden: !1
    });
  }, d);
  return Br.ScriptProcessor = t, Br;
}
var Fr = {}, pa;
function nh() {
  var t, r, o, h, a, jc, Uc, f;
  if (pa) return Fr;
  pa = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.SessionProcessor = void 0;
  const i = Se();
  let s = (f = class {
    constructor(g, d, C) {
      y(this, a);
      y(this, t);
      y(this, r);
      y(this, o);
      y(this, h, !1);
      P(this, t, g), P(this, r, d), P(this, o, C);
    }
    status() {
      return { ready: !1, message: "already connected" };
    }
    async new(g) {
      if (e(this, h))
        throw new Error("Session has been already created.");
      P(this, h, !0);
      const d = T(this, a, jc).call(this, g.capabilities);
      await e(this, o).call(this, d);
      const C = await e(this, r).sendCommand("Browser.getVersion");
      return {
        sessionId: "unknown",
        capabilities: {
          ...d,
          acceptInsecureCerts: d.acceptInsecureCerts ?? !1,
          browserName: C.product,
          browserVersion: C.revision,
          platformName: "",
          setWindowRect: !1,
          webSocketUrl: "",
          userAgent: C.userAgent
        }
      };
    }
    async subscribe(g, d = null) {
      return {
        subscription: await e(this, t).subscribe(g.events, g.contexts ?? [], g.userContexts ?? [], d)
      };
    }
    async unsubscribe(g, d = null) {
      return "subscriptions" in g ? (await e(this, t).unsubscribeByIds(g.subscriptions), {}) : (await e(this, t).unsubscribe(g.events, d), {});
    }
  }, t = new WeakMap(), r = new WeakMap(), o = new WeakMap(), h = new WeakMap(), a = new WeakSet(), jc = function(g) {
    const d = [];
    for (const b of g.firstMatch ?? [{}]) {
      const w = {
        ...g.alwaysMatch
      };
      for (const v of Object.keys(b)) {
        if (w[v] !== void 0)
          throw new i.InvalidArgumentException(`Capability ${v} in firstMatch is already defined in alwaysMatch`);
        w[v] = b[v];
      }
      d.push(w);
    }
    const C = d.find((b) => b.browserName === "chrome") ?? d[0] ?? {};
    return C.unhandledPromptBehavior = T(this, a, Uc).call(this, C.unhandledPromptBehavior), C;
  }, Uc = function(g) {
    if (g !== void 0) {
      if (typeof g == "object")
        return g;
      if (typeof g != "string")
        throw new i.InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' type: ${typeof g}`);
      switch (g) {
        // `beforeUnload: accept` has higher priority over string capability, as the latest
        // one is set to "fallbackDefault".
        // https://w3c.github.io/webdriver/#dfn-deserialize-as-an-unhandled-prompt-behavior
        // https://w3c.github.io/webdriver/#dfn-get-the-prompt-handler
        case "accept":
        case "accept and notify":
          return {
            default: "accept",
            beforeUnload: "accept"
          };
        case "dismiss":
        case "dismiss and notify":
          return {
            default: "dismiss",
            beforeUnload: "accept"
          };
        case "ignore":
          return {
            default: "ignore",
            beforeUnload: "accept"
          };
        default:
          throw new i.InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' value: ${g}`);
      }
    }
  }, f);
  return Fr.SessionProcessor = s, Fr;
}
var qr = {}, fa;
function ih() {
  var a, c, m, f, ln, ms, Lc, $c, hn, gi, v;
  if (fa) return qr;
  fa = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.StorageProcessor = void 0;
  const i = Se(), s = Lt(), t = qe(), r = Rc(), o = Gn();
  let h = (v = class {
    constructor(I, n, u) {
      y(this, f);
      y(this, a);
      y(this, c);
      y(this, m);
      P(this, c, n), P(this, a, I), P(this, m, u);
    }
    async deleteCookies(I) {
      const n = T(this, f, hn).call(this, I.partition);
      let u;
      try {
        u = await e(this, a).sendCommand("Storage.getCookies", {
          browserContextId: T(this, f, ms).call(this, n)
        });
      } catch (E) {
        throw T(this, f, ln).call(this, E) ? new i.NoSuchUserContextException(E.message) : E;
      }
      const D = u.cookies.filter(
        // CDP's partition key is the source origin. If the request specifies the
        // `sourceOrigin` partition key, only cookies with the requested source origin
        // are returned.
        (E) => {
          var l;
          return n.sourceOrigin === void 0 || ((l = E.partitionKey) == null ? void 0 : l.topLevelSite) === n.sourceOrigin;
        }
      ).filter((E) => {
        const l = (0, o.cdpToBiDiCookie)(E);
        return T(this, f, gi).call(this, l, I.filter);
      }).map((E) => ({
        ...E,
        // Set expiry to pass date to delete the cookie.
        expires: 1
      }));
      return await e(this, a).sendCommand("Storage.setCookies", {
        cookies: D,
        browserContextId: T(this, f, ms).call(this, n)
      }), {
        partitionKey: n
      };
    }
    async getCookies(I) {
      const n = T(this, f, hn).call(this, I.partition);
      let u;
      try {
        u = await e(this, a).sendCommand("Storage.getCookies", {
          browserContextId: T(this, f, ms).call(this, n)
        });
      } catch (E) {
        throw T(this, f, ln).call(this, E) ? new i.NoSuchUserContextException(E.message) : E;
      }
      return {
        cookies: u.cookies.filter(
          // CDP's partition key is the source origin. If the request specifies the
          // `sourceOrigin` partition key, only cookies with the requested source origin
          // are returned.
          (E) => {
            var l;
            return n.sourceOrigin === void 0 || ((l = E.partitionKey) == null ? void 0 : l.topLevelSite) === n.sourceOrigin;
          }
        ).map((E) => (0, o.cdpToBiDiCookie)(E)).filter((E) => T(this, f, gi).call(this, E, I.filter)),
        partitionKey: n
      };
    }
    async setCookie(I) {
      var D;
      const n = T(this, f, hn).call(this, I.partition), u = (0, o.bidiToCdpCookie)(I, n);
      try {
        await e(this, a).sendCommand("Storage.setCookies", {
          cookies: [u],
          browserContextId: T(this, f, ms).call(this, n)
        });
      } catch (E) {
        throw T(this, f, ln).call(this, E) ? new i.NoSuchUserContextException(E.message) : ((D = e(this, m)) == null || D.call(this, t.LogType.debugError, E), new i.UnableToSetCookieException(E.toString()));
      }
      return {
        partitionKey: n
      };
    }
  }, a = new WeakMap(), c = new WeakMap(), m = new WeakMap(), f = new WeakSet(), ln = function(I) {
    var n;
    return (n = I.message) == null ? void 0 : n.startsWith("Failed to find browser context for id");
  }, ms = function(I) {
    return I.userContext === "default" ? void 0 : I.userContext;
  }, Lc = function(I) {
    const n = I.context;
    return {
      userContext: e(this, c).getContext(n).userContext
    };
  }, $c = function(I) {
    var E;
    const n = /* @__PURE__ */ new Map();
    let u = I.sourceOrigin;
    if (u !== void 0) {
      const l = r.NetworkProcessor.parseUrlString(u);
      l.origin === "null" ? u = l.origin : u = `${l.protocol}//${l.hostname}`;
    }
    for (const [l, S] of Object.entries(I))
      l !== void 0 && S !== void 0 && !["type", "sourceOrigin", "userContext"].includes(l) && n.set(l, S);
    return n.size > 0 && ((E = e(this, m)) == null || E.call(this, t.LogType.debugInfo, `Unsupported partition keys: ${JSON.stringify(Object.fromEntries(n))}`)), {
      userContext: I.userContext ?? "default",
      ...u === void 0 ? {} : { sourceOrigin: u }
    };
  }, hn = function(I) {
    return I === void 0 ? { userContext: "default" } : I.type === "context" ? T(this, f, Lc).call(this, I) : ((0, s.assert)(I.type === "storageKey", "Unknown partition type"), T(this, f, $c).call(this, I));
  }, gi = function(I, n) {
    return n === void 0 ? !0 : (n.domain === void 0 || n.domain === I.domain) && (n.name === void 0 || n.name === I.name) && // `value` contains fields `type` and `value`.
    (n.value === void 0 || (0, o.deserializeByteValue)(n.value) === (0, o.deserializeByteValue)(I.value)) && (n.path === void 0 || n.path === I.path) && (n.size === void 0 || n.size === I.size) && (n.httpOnly === void 0 || n.httpOnly === I.httpOnly) && (n.secure === void 0 || n.secure === I.secure) && (n.sameSite === void 0 || n.sameSite === I.sameSite) && (n.expiry === void 0 || n.expiry === I.expiry);
  }, v);
  return qr.StorageProcessor = h, qr;
}
var jr = {}, ga;
function oh() {
  var t, r;
  if (ga) return jr;
  ga = 1, Object.defineProperty(jr, "__esModule", { value: !0 }), jr.WebExtensionProcessor = void 0;
  const i = Se();
  let s = (r = class {
    constructor(h) {
      y(this, t);
      P(this, t, h);
    }
    async install(h) {
      switch (h.extensionData.type) {
        case "archivePath":
        case "base64":
          throw new i.UnsupportedOperationException("Archived and Base64 extensions are not supported");
      }
      try {
        return {
          extension: (await e(this, t).sendCommand("Extensions.loadUnpacked", {
            path: h.extensionData.path
          })).id
        };
      } catch (a) {
        throw a.message.startsWith("invalid web extension") ? new i.InvalidWebExtensionException(a.message) : a;
      }
    }
    async uninstall(h) {
      try {
        return await e(this, t).sendCommand("Extensions.uninstall", {
          id: h.extension
        }), {};
      } catch (a) {
        throw a.message === "Uninstall failed. Reason: could not find extension." ? new i.NoSuchWebExtensionException("no such web extension") : a;
      }
    }
  }, t = new WeakMap(), r);
  return jr.WebExtensionProcessor = s, jr;
}
var Ur = {}, ma;
function oo() {
  var s, t, r;
  if (ma) return Ur;
  ma = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.OutgoingMessage = void 0;
  let i = (r = class {
    constructor(h, a = null) {
      y(this, s);
      y(this, t);
      P(this, s, h), P(this, t, a);
    }
    static createFromPromise(h, a) {
      return h.then((c) => c.kind === "success" ? {
        kind: "success",
        value: new r(c.value, a)
      } : c);
    }
    static createResolved(h, a = null) {
      return Promise.resolve({
        kind: "success",
        value: new r(h, a)
      });
    }
    get message() {
      return e(this, s);
    }
    get googChannel() {
      return e(this, t);
    }
  }, s = new WeakMap(), t = new WeakMap(), r);
  return Ur.OutgoingMessage = i, Ur;
}
var wa;
function ah() {
  var p, I, n, u, D, E, l, S, N, k, A, z, K, R, F, q, Hc, pn, H;
  if (wa) return xr;
  wa = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.CommandProcessor = void 0;
  const i = Se(), s = Xs(), t = qe(), r = Ll(), o = $l(), h = Hl(), a = zl(), c = Kl(), m = Zl(), f = Rc(), x = th(), g = sh(), d = nh(), C = ih(), b = oh(), w = oo();
  let v = (H = class extends s.EventEmitter {
    constructor(_, $, V, Q, ie, se, me, Ce, j, L, ae = new r.BidiNoOpParser(), we, be) {
      super();
      y(this, q);
      // keep-sorted start
      y(this, p);
      y(this, I);
      y(this, n);
      y(this, u);
      y(this, D);
      y(this, E);
      y(this, l);
      y(this, S);
      y(this, N);
      y(this, k);
      y(this, A);
      y(this, z);
      y(this, K);
      // keep-sorted end
      y(this, R);
      y(this, F);
      P(this, I, $), P(this, R, ae), P(this, F, be), P(this, p, j), P(this, n, new o.BrowserProcessor($, Q, Ce, L)), P(this, u, new a.BrowsingContextProcessor($, Q, L, Ce, V)), P(this, D, new h.CdpProcessor(Q, ie, _, $)), P(this, E, new c.EmulationProcessor(Q, L, Ce)), P(this, l, new m.InputProcessor(Q)), P(this, S, new f.NetworkProcessor(Q, me, L, Ce)), P(this, N, new x.PermissionsProcessor($)), P(this, k, new g.ScriptProcessor(V, Q, ie, se, L, be)), P(this, A, new d.SessionProcessor(V, $, we)), P(this, z, new C.StorageProcessor($, Q, be)), P(this, K, new b.WebExtensionProcessor($));
    }
    async processCommand(_) {
      var $;
      try {
        const V = await T(this, q, Hc).call(this, _), Q = {
          type: "success",
          id: _.id,
          result: V
        };
        this.emit("response", {
          message: w.OutgoingMessage.createResolved(Q, _["goog:channel"]),
          event: _.method
        });
      } catch (V) {
        if (V instanceof i.Exception)
          this.emit("response", {
            message: w.OutgoingMessage.createResolved(V.toErrorResponse(_.id), _["goog:channel"]),
            event: _.method
          });
        else {
          const Q = V;
          ($ = e(this, F)) == null || $.call(this, t.LogType.bidi, Q);
          const ie = e(this, I).isCloseError(V) ? new i.NoSuchFrameException("Browsing context is gone") : new i.UnknownErrorException(Q.message, Q.stack);
          this.emit("response", {
            message: w.OutgoingMessage.createResolved(ie.toErrorResponse(_.id), _["goog:channel"]),
            event: _.method
          });
        }
      }
    }
  }, p = new WeakMap(), I = new WeakMap(), n = new WeakMap(), u = new WeakMap(), D = new WeakMap(), E = new WeakMap(), l = new WeakMap(), S = new WeakMap(), N = new WeakMap(), k = new WeakMap(), A = new WeakMap(), z = new WeakMap(), K = new WeakMap(), R = new WeakMap(), F = new WeakMap(), q = new WeakSet(), Hc = async function(_) {
    switch (_.method) {
      // Bluetooth module
      // keep-sorted start block=yes
      case "bluetooth.disableSimulation":
        return await e(this, p).disableSimulation(e(this, R).parseDisableSimulationParameters(_.params));
      case "bluetooth.handleRequestDevicePrompt":
        return await e(this, p).handleRequestDevicePrompt(e(this, R).parseHandleRequestDevicePromptParams(_.params));
      case "bluetooth.simulateAdapter":
        return await e(this, p).simulateAdapter(e(this, R).parseSimulateAdapterParameters(_.params));
      case "bluetooth.simulateAdvertisement":
        return await e(this, p).simulateAdvertisement(e(this, R).parseSimulateAdvertisementParameters(_.params));
      case "bluetooth.simulateCharacteristic":
        return await e(this, p).simulateCharacteristic(e(this, R).parseSimulateCharacteristicParameters(_.params));
      case "bluetooth.simulateCharacteristicResponse":
        return await e(this, p).simulateCharacteristicResponse(e(this, R).parseSimulateCharacteristicResponseParameters(_.params));
      case "bluetooth.simulateDescriptor":
        return await e(this, p).simulateDescriptor(e(this, R).parseSimulateDescriptorParameters(_.params));
      case "bluetooth.simulateDescriptorResponse":
        return await e(this, p).simulateDescriptorResponse(e(this, R).parseSimulateDescriptorResponseParameters(_.params));
      case "bluetooth.simulateGattConnectionResponse":
        return await e(this, p).simulateGattConnectionResponse(e(this, R).parseSimulateGattConnectionResponseParameters(_.params));
      case "bluetooth.simulateGattDisconnection":
        return await e(this, p).simulateGattDisconnection(e(this, R).parseSimulateGattDisconnectionParameters(_.params));
      case "bluetooth.simulatePreconnectedPeripheral":
        return await e(this, p).simulatePreconnectedPeripheral(e(this, R).parseSimulatePreconnectedPeripheralParameters(_.params));
      case "bluetooth.simulateService":
        return await e(this, p).simulateService(e(this, R).parseSimulateServiceParameters(_.params));
      // keep-sorted end
      // Browser module
      // keep-sorted start block=yes
      case "browser.close":
        return e(this, n).close();
      case "browser.createUserContext":
        return await e(this, n).createUserContext(e(this, R).parseCreateUserContextParameters(_.params));
      case "browser.getClientWindows":
        return await e(this, n).getClientWindows();
      case "browser.getUserContexts":
        return await e(this, n).getUserContexts();
      case "browser.removeUserContext":
        return await e(this, n).removeUserContext(e(this, R).parseRemoveUserContextParameters(_.params));
      case "browser.setClientWindowState":
        throw e(this, R).parseSetClientWindowStateParameters(_.params), new i.UnsupportedOperationException(`Method ${_.method} is not implemented.`);
      case "browser.setDownloadBehavior":
        return await e(this, n).setDownloadBehavior(e(this, R).parseSetDownloadBehaviorParameters(_.params));
      // keep-sorted end
      // Browsing Context module
      // keep-sorted start block=yes
      case "browsingContext.activate":
        return await e(this, u).activate(e(this, R).parseActivateParams(_.params));
      case "browsingContext.captureScreenshot":
        return await e(this, u).captureScreenshot(e(this, R).parseCaptureScreenshotParams(_.params));
      case "browsingContext.close":
        return await e(this, u).close(e(this, R).parseCloseParams(_.params));
      case "browsingContext.create":
        return await e(this, u).create(e(this, R).parseCreateParams(_.params));
      case "browsingContext.getTree":
        return e(this, u).getTree(e(this, R).parseGetTreeParams(_.params));
      case "browsingContext.handleUserPrompt":
        return await e(this, u).handleUserPrompt(e(this, R).parseHandleUserPromptParams(_.params));
      case "browsingContext.locateNodes":
        return await e(this, u).locateNodes(e(this, R).parseLocateNodesParams(_.params));
      case "browsingContext.navigate":
        return await e(this, u).navigate(e(this, R).parseNavigateParams(_.params));
      case "browsingContext.print":
        return await e(this, u).print(e(this, R).parsePrintParams(_.params));
      case "browsingContext.reload":
        return await e(this, u).reload(e(this, R).parseReloadParams(_.params));
      case "browsingContext.setViewport":
        return await e(this, u).setViewport(e(this, R).parseSetViewportParams(_.params));
      case "browsingContext.traverseHistory":
        return await e(this, u).traverseHistory(e(this, R).parseTraverseHistoryParams(_.params));
      // keep-sorted end
      // CDP module
      // keep-sorted start block=yes
      case "goog:cdp.getSession":
        return e(this, D).getSession(e(this, R).parseGetSessionParams(_.params));
      case "goog:cdp.resolveRealm":
        return e(this, D).resolveRealm(e(this, R).parseResolveRealmParams(_.params));
      case "goog:cdp.sendCommand":
        return await e(this, D).sendCommand(e(this, R).parseSendCommandParams(_.params));
      // keep-sorted end
      // Emulation module
      // keep-sorted start block=yes
      case "emulation.setForcedColorsModeThemeOverride":
        throw e(this, R).parseSetForcedColorsModeThemeOverrideParams(_.params), new i.UnsupportedOperationException(`Method ${_.method} is not implemented.`);
      case "emulation.setGeolocationOverride":
        return await e(this, E).setGeolocationOverride(e(this, R).parseSetGeolocationOverrideParams(_.params));
      case "emulation.setLocaleOverride":
        return await e(this, E).setLocaleOverride(e(this, R).parseSetLocaleOverrideParams(_.params));
      case "emulation.setNetworkConditions":
        return await e(this, E).setNetworkConditions(e(this, R).parseSetNetworkConditionsParams(_.params));
      case "emulation.setScreenOrientationOverride":
        return await e(this, E).setScreenOrientationOverride(e(this, R).parseSetScreenOrientationOverrideParams(_.params));
      case "emulation.setScreenSettingsOverride":
        return await e(this, E).setScreenSettingsOverride(e(this, R).parseSetScreenSettingsOverrideParams(_.params));
      case "emulation.setScriptingEnabled":
        return await e(this, E).setScriptingEnabled(e(this, R).parseSetScriptingEnabledParams(_.params));
      case "emulation.setTimezoneOverride":
        return await e(this, E).setTimezoneOverride(e(this, R).parseSetTimezoneOverrideParams(_.params));
      case "emulation.setUserAgentOverride":
        return await e(this, E).setUserAgentOverrideParams(e(this, R).parseSetUserAgentOverrideParams(_.params));
      // keep-sorted end
      // Input module
      // keep-sorted start block=yes
      case "input.performActions":
        return await e(this, l).performActions(e(this, R).parsePerformActionsParams(_.params));
      case "input.releaseActions":
        return await e(this, l).releaseActions(e(this, R).parseReleaseActionsParams(_.params));
      case "input.setFiles":
        return await e(this, l).setFiles(e(this, R).parseSetFilesParams(_.params));
      // keep-sorted end
      // Network module
      // keep-sorted start block=yes
      case "network.addDataCollector":
        return await e(this, S).addDataCollector(e(this, R).parseAddDataCollectorParams(_.params));
      case "network.addIntercept":
        return await e(this, S).addIntercept(e(this, R).parseAddInterceptParams(_.params));
      case "network.continueRequest":
        return await e(this, S).continueRequest(e(this, R).parseContinueRequestParams(_.params));
      case "network.continueResponse":
        return await e(this, S).continueResponse(e(this, R).parseContinueResponseParams(_.params));
      case "network.continueWithAuth":
        return await e(this, S).continueWithAuth(e(this, R).parseContinueWithAuthParams(_.params));
      case "network.disownData":
        return e(this, S).disownData(e(this, R).parseDisownDataParams(_.params));
      case "network.failRequest":
        return await e(this, S).failRequest(e(this, R).parseFailRequestParams(_.params));
      case "network.getData":
        return await e(this, S).getData(e(this, R).parseGetDataParams(_.params));
      case "network.provideResponse":
        return await e(this, S).provideResponse(e(this, R).parseProvideResponseParams(_.params));
      case "network.removeDataCollector":
        return await e(this, S).removeDataCollector(e(this, R).parseRemoveDataCollectorParams(_.params));
      case "network.removeIntercept":
        return await e(this, S).removeIntercept(e(this, R).parseRemoveInterceptParams(_.params));
      case "network.setCacheBehavior":
        return await e(this, S).setCacheBehavior(e(this, R).parseSetCacheBehaviorParams(_.params));
      case "network.setExtraHeaders":
        return await e(this, S).setExtraHeaders(e(this, R).parseSetExtraHeadersParams(_.params));
      // keep-sorted end
      // Permissions module
      // keep-sorted start block=yes
      case "permissions.setPermission":
        return await e(this, N).setPermissions(e(this, R).parseSetPermissionsParams(_.params));
      // keep-sorted end
      // Script module
      // keep-sorted start block=yes
      case "script.addPreloadScript":
        return await e(this, k).addPreloadScript(e(this, R).parseAddPreloadScriptParams(_.params));
      case "script.callFunction":
        return await e(this, k).callFunction(e(this, R).parseCallFunctionParams(T(this, q, pn).call(this, _.params)));
      case "script.disown":
        return await e(this, k).disown(e(this, R).parseDisownParams(T(this, q, pn).call(this, _.params)));
      case "script.evaluate":
        return await e(this, k).evaluate(e(this, R).parseEvaluateParams(T(this, q, pn).call(this, _.params)));
      case "script.getRealms":
        return e(this, k).getRealms(e(this, R).parseGetRealmsParams(_.params));
      case "script.removePreloadScript":
        return await e(this, k).removePreloadScript(e(this, R).parseRemovePreloadScriptParams(_.params));
      // keep-sorted end
      // Session module
      // keep-sorted start block=yes
      case "session.end":
        throw new i.UnsupportedOperationException(`Method ${_.method} is not implemented.`);
      case "session.new":
        return await e(this, A).new(_.params);
      case "session.status":
        return e(this, A).status();
      case "session.subscribe":
        return await e(this, A).subscribe(e(this, R).parseSubscribeParams(_.params), _["goog:channel"]);
      case "session.unsubscribe":
        return await e(this, A).unsubscribe(e(this, R).parseUnsubscribeParams(_.params), _["goog:channel"]);
      // keep-sorted end
      // Storage module
      // keep-sorted start block=yes
      case "storage.deleteCookies":
        return await e(this, z).deleteCookies(e(this, R).parseDeleteCookiesParams(_.params));
      case "storage.getCookies":
        return await e(this, z).getCookies(e(this, R).parseGetCookiesParams(_.params));
      case "storage.setCookie":
        return await e(this, z).setCookie(e(this, R).parseSetCookieParams(_.params));
      // keep-sorted end
      // WebExtension module
      // keep-sorted start block=yes
      case "webExtension.install":
        return await e(this, K).install(e(this, R).parseInstallParams(_.params));
      case "webExtension.uninstall":
        return await e(this, K).uninstall(e(this, R).parseUninstallParams(_.params));
    }
    throw new i.UnknownCommandException(`Unknown command '${_ == null ? void 0 : _.method}'.`);
  }, // Workaround for as zod.union always take the first schema
  // https://github.com/w3c/webdriver-bidi/issues/635
  pn = function(_) {
    return typeof _ == "object" && _ && "target" in _ && typeof _.target == "object" && _.target && "context" in _.target && delete _.target.realm, _;
  }, H);
  return xr.CommandProcessor = v, xr;
}
var Lr = {}, va;
function ch() {
  var c, m, f, x, g, d, Vt, Xt, ws, mi, p;
  if (va) return Lr;
  va = 1, Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.BluetoothProcessor = void 0;
  const i = Se();
  class s {
    constructor(n, u) {
      X(this, "id");
      X(this, "uuid");
      this.id = n, this.uuid = u;
    }
  }
  class t extends s {
    constructor(u, D, E) {
      super(u, D);
      X(this, "characteristic");
      this.characteristic = E;
    }
  }
  class r extends s {
    constructor(u, D, E) {
      super(u, D);
      X(this, "descriptors", /* @__PURE__ */ new Map());
      X(this, "service");
      this.service = E;
    }
  }
  class o extends s {
    constructor(u, D, E) {
      super(u, D);
      X(this, "characteristics", /* @__PURE__ */ new Map());
      X(this, "device");
      this.device = E;
    }
  }
  class h {
    constructor(n) {
      X(this, "address");
      X(this, "services", /* @__PURE__ */ new Map());
      this.address = n;
    }
  }
  let a = (p = class {
    constructor(n, u) {
      y(this, d);
      y(this, c);
      y(this, m);
      y(this, f, /* @__PURE__ */ new Map());
      // A map from a characteristic id from CDP to its BluetoothCharacteristic object.
      y(this, x, /* @__PURE__ */ new Map());
      // A map from a descriptor id from CDP to its BluetoothDescriptor object.
      y(this, g, /* @__PURE__ */ new Map());
      P(this, c, n), P(this, m, u);
    }
    async simulateAdapter(n) {
      if (n.state === void 0)
        throw new i.InvalidArgumentException('Parameter "state" is required for creating a Bluetooth adapter');
      const u = e(this, m).getContext(n.context);
      return await u.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.disable"), e(this, f).clear(), e(this, x).clear(), e(this, g).clear(), await u.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.enable", {
        state: n.state,
        leSupported: n.leSupported ?? !0
      }), {};
    }
    async disableSimulation(n) {
      return await e(this, m).getContext(n.context).cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.disable"), e(this, f).clear(), e(this, x).clear(), e(this, g).clear(), {};
    }
    async simulatePreconnectedPeripheral(n) {
      if (e(this, f).has(n.address))
        throw new i.InvalidArgumentException(`Bluetooth device with address ${n.address} already exists`);
      return await e(this, m).getContext(n.context).cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulatePreconnectedPeripheral", {
        address: n.address,
        name: n.name,
        knownServiceUuids: n.knownServiceUuids,
        manufacturerData: n.manufacturerData
      }), e(this, f).set(n.address, new h(n.address)), {};
    }
    async simulateAdvertisement(n) {
      return await e(this, m).getContext(n.context).cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulateAdvertisement", {
        entry: n.scanEntry
      }), {};
    }
    async simulateCharacteristic(n) {
      const u = T(this, d, Vt).call(this, n.address), D = T(this, d, Xt).call(this, u, n.serviceUuid), E = e(this, m).getContext(n.context);
      switch (n.type) {
        case "add": {
          if (n.characteristicProperties === void 0)
            throw new i.InvalidArgumentException('Parameter "characteristicProperties" is required for adding a Bluetooth characteristic');
          if (D.characteristics.has(n.characteristicUuid))
            throw new i.InvalidArgumentException(`Characteristic with UUID ${n.characteristicUuid} already exists`);
          const l = await E.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.addCharacteristic", {
            serviceId: D.id,
            characteristicUuid: n.characteristicUuid,
            properties: n.characteristicProperties
          }), S = new r(l.characteristicId, n.characteristicUuid, D);
          return D.characteristics.set(n.characteristicUuid, S), e(this, x).set(S.id, S), {};
        }
        case "remove": {
          if (n.characteristicProperties !== void 0)
            throw new i.InvalidArgumentException('Parameter "characteristicProperties" should not be provided for removing a Bluetooth characteristic');
          const l = T(this, d, ws).call(this, D, n.characteristicUuid);
          return await E.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.removeCharacteristic", {
            characteristicId: l.id
          }), D.characteristics.delete(n.characteristicUuid), e(this, x).delete(l.id), {};
        }
        default:
          throw new i.InvalidArgumentException(`Parameter "type" of ${n.type} is not supported`);
      }
    }
    async simulateCharacteristicResponse(n) {
      const u = e(this, m).getContext(n.context), D = T(this, d, Vt).call(this, n.address), E = T(this, d, Xt).call(this, D, n.serviceUuid), l = T(this, d, ws).call(this, E, n.characteristicUuid);
      return await u.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulateCharacteristicOperationResponse", {
        characteristicId: l.id,
        type: n.type,
        code: n.code,
        ...n.data && {
          data: btoa(String.fromCharCode(...n.data))
        }
      }), {};
    }
    async simulateDescriptor(n) {
      const u = T(this, d, Vt).call(this, n.address), D = T(this, d, Xt).call(this, u, n.serviceUuid), E = T(this, d, ws).call(this, D, n.characteristicUuid), l = e(this, m).getContext(n.context);
      switch (n.type) {
        case "add": {
          if (E.descriptors.has(n.descriptorUuid))
            throw new i.InvalidArgumentException(`Descriptor with UUID ${n.descriptorUuid} already exists`);
          const S = await l.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.addDescriptor", {
            characteristicId: E.id,
            descriptorUuid: n.descriptorUuid
          }), N = new t(S.descriptorId, n.descriptorUuid, E);
          return E.descriptors.set(n.descriptorUuid, N), e(this, g).set(N.id, N), {};
        }
        case "remove": {
          const S = T(this, d, mi).call(this, E, n.descriptorUuid);
          return await l.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.removeDescriptor", {
            descriptorId: S.id
          }), E.descriptors.delete(n.descriptorUuid), e(this, g).delete(S.id), {};
        }
        default:
          throw new i.InvalidArgumentException(`Parameter "type" of ${n.type} is not supported`);
      }
    }
    async simulateDescriptorResponse(n) {
      const u = e(this, m).getContext(n.context), D = T(this, d, Vt).call(this, n.address), E = T(this, d, Xt).call(this, D, n.serviceUuid), l = T(this, d, ws).call(this, E, n.characteristicUuid), S = T(this, d, mi).call(this, l, n.descriptorUuid);
      return await u.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulateDescriptorOperationResponse", {
        descriptorId: S.id,
        type: n.type,
        code: n.code,
        ...n.data && {
          data: btoa(String.fromCharCode(...n.data))
        }
      }), {};
    }
    async simulateGattConnectionResponse(n) {
      return await e(this, m).getContext(n.context).cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulateGATTOperationResponse", {
        address: n.address,
        type: "connection",
        code: n.code
      }), {};
    }
    async simulateGattDisconnection(n) {
      return await e(this, m).getContext(n.context).cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulateGATTDisconnection", {
        address: n.address
      }), {};
    }
    async simulateService(n) {
      const u = T(this, d, Vt).call(this, n.address), D = e(this, m).getContext(n.context);
      switch (n.type) {
        case "add": {
          if (u.services.has(n.uuid))
            throw new i.InvalidArgumentException(`Service with UUID ${n.uuid} already exists`);
          const E = await D.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.addService", {
            address: n.address,
            serviceUuid: n.uuid
          });
          return u.services.set(n.uuid, new o(E.serviceId, n.uuid, u)), {};
        }
        case "remove": {
          const E = T(this, d, Xt).call(this, u, n.uuid);
          return await D.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.removeService", {
            serviceId: E.id
          }), u.services.delete(n.uuid), {};
        }
        default:
          throw new i.InvalidArgumentException(`Parameter "type" of ${n.type} is not supported`);
      }
    }
    onCdpTargetCreated(n) {
      n.cdpClient.on("DeviceAccess.deviceRequestPrompted", (u) => {
        e(this, c).registerEvent({
          type: "event",
          method: "bluetooth.requestDevicePromptUpdated",
          params: {
            context: n.id,
            prompt: u.id,
            devices: u.devices
          }
        }, n.id);
      }), n.browserCdpClient.on("BluetoothEmulation.gattOperationReceived", async (u) => {
        switch (u.type) {
          case "connection":
            e(this, c).registerEvent({
              type: "event",
              method: "bluetooth.gattConnectionAttempted",
              params: {
                context: n.id,
                address: u.address
              }
            }, n.id);
            return;
          case "discovery":
            await n.browserCdpClient.sendCommand("BluetoothEmulation.simulateGATTOperationResponse", {
              address: u.address,
              type: "discovery",
              code: 0
            });
        }
      }), n.browserCdpClient.on("BluetoothEmulation.characteristicOperationReceived", (u) => {
        if (!e(this, x).has(u.characteristicId))
          return;
        let D;
        if (u.type === "write") {
          if (u.writeType === "write-default-deprecated")
            return;
          D = u.writeType;
        } else
          D = u.type;
        const E = e(this, x).get(u.characteristicId);
        e(this, c).registerEvent({
          type: "event",
          method: "bluetooth.characteristicEventGenerated",
          params: {
            context: n.id,
            address: E.service.device.address,
            serviceUuid: E.service.uuid,
            characteristicUuid: E.uuid,
            type: D,
            ...u.data && {
              data: Array.from(atob(u.data), (l) => l.charCodeAt(0))
            }
          }
        }, n.id);
      }), n.browserCdpClient.on("BluetoothEmulation.descriptorOperationReceived", (u) => {
        if (!e(this, g).has(u.descriptorId))
          return;
        const D = e(this, g).get(u.descriptorId);
        e(this, c).registerEvent({
          type: "event",
          method: "bluetooth.descriptorEventGenerated",
          params: {
            context: n.id,
            address: D.characteristic.service.device.address,
            serviceUuid: D.characteristic.service.uuid,
            characteristicUuid: D.characteristic.uuid,
            descriptorUuid: D.uuid,
            type: u.type,
            ...u.data && {
              data: Array.from(atob(u.data), (E) => E.charCodeAt(0))
            }
          }
        }, n.id);
      });
    }
    async handleRequestDevicePrompt(n) {
      const u = e(this, m).getContext(n.context);
      return n.accept ? await u.cdpTarget.cdpClient.sendCommand("DeviceAccess.selectPrompt", {
        id: n.prompt,
        deviceId: n.device
      }) : await u.cdpTarget.cdpClient.sendCommand("DeviceAccess.cancelPrompt", {
        id: n.prompt
      }), {};
    }
  }, c = new WeakMap(), m = new WeakMap(), f = new WeakMap(), x = new WeakMap(), g = new WeakMap(), d = new WeakSet(), Vt = function(n) {
    const u = e(this, f).get(n);
    if (!u)
      throw new i.InvalidArgumentException(`Bluetooth device with address ${n} does not exist`);
    return u;
  }, Xt = function(n, u) {
    const D = n.services.get(u);
    if (!D)
      throw new i.InvalidArgumentException(`Service with UUID ${u} on device ${n.address} does not exist`);
    return D;
  }, ws = function(n, u) {
    const D = n.characteristics.get(u);
    if (!D)
      throw new i.InvalidArgumentException(`Characteristic with UUID ${u} does not exist for service ${n.uuid} on device ${n.device.address}`);
    return D;
  }, mi = function(n, u) {
    const D = n.descriptors.get(u);
    if (!D)
      throw new i.InvalidArgumentException(`Descriptor with UUID ${u} does not exist for characteristic ${n.uuid} on service ${n.service.uuid} on device ${n.service.device.address}`);
    return D;
  }, p);
  return Lr.BluetoothProcessor = a, Lr;
}
var $r = {}, Hr = {}, ya;
function uh() {
  if (ya) return Hr;
  ya = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.ContextConfig = void 0;
  let i = class zc {
    constructor() {
      // keep-sorted start block=yes
      X(this, "acceptInsecureCerts");
      X(this, "devicePixelRatio");
      X(this, "disableNetworkDurableMessages");
      X(this, "downloadBehavior");
      X(this, "emulatedNetworkConditions");
      // Extra headers are kept in CDP format.
      X(this, "extraHeaders");
      X(this, "geolocation");
      X(this, "locale");
      X(this, "prerenderingDisabled");
      X(this, "screenArea");
      X(this, "screenOrientation");
      X(this, "scriptingEnabled");
      // Timezone is kept in CDP format with GMT prefix for offset values.
      X(this, "timezone");
      X(this, "userAgent");
      X(this, "userPromptHandler");
      X(this, "viewport");
    }
    // keep-sorted end
    /**
     * Merges multiple `ContextConfig` objects. The configs are merged in the order they are
     * provided. For each property, the value from the last config that defines it will be
     * used. The final result will not contain any `undefined` or `null` properties.
     * `undefined` values are ignored. `null` values remove the already set value.
     */
    static merge(...t) {
      const r = new zc();
      for (const o of t)
        if (o)
          for (const h in o) {
            const a = o[h];
            a === null ? delete r[h] : a !== void 0 && (r[h] = a);
          }
      return r;
    }
  };
  return Hr.ContextConfig = i, Hr;
}
var Ca;
function dh() {
  var t, r, o, h, Kc, c;
  if (Ca) return $r;
  Ca = 1, Object.defineProperty($r, "__esModule", { value: !0 }), $r.ContextConfigStorage = void 0;
  const i = uh();
  let s = (c = class {
    constructor() {
      y(this, h);
      y(this, t, new i.ContextConfig());
      y(this, r, /* @__PURE__ */ new Map());
      y(this, o, /* @__PURE__ */ new Map());
    }
    /**
     * Updates the global configuration. Properties with `undefined` values in the
     * provided `config` are ignored.
     */
    updateGlobalConfig(f) {
      P(this, t, i.ContextConfig.merge(e(this, t), f));
    }
    /**
     * Updates the configuration for a specific browsing context. Properties with
     * `undefined` values in the provided `config` are ignored.
     */
    updateBrowsingContextConfig(f, x) {
      e(this, o).set(f, i.ContextConfig.merge(e(this, o).get(f), x));
    }
    /**
     * Updates the configuration for a specific user context. Properties with
     * `undefined` values in the provided `config` are ignored.
     */
    updateUserContextConfig(f, x) {
      e(this, r).set(f, i.ContextConfig.merge(e(this, r).get(f), x));
    }
    /**
     * Returns the current global configuration.
     */
    getGlobalConfig() {
      return e(this, t);
    }
    /**
     * Calculates the active configuration by merging global, user context, and
     * browsing context settings.
     */
    getActiveConfig(f, x) {
      let g = i.ContextConfig.merge(e(this, t), e(this, r).get(x));
      f !== void 0 && (g = i.ContextConfig.merge(g, e(this, o).get(f)));
      const d = T(this, h, Kc).call(this, f, x);
      return g.extraHeaders = Object.keys(d).length > 0 ? d : void 0, g;
    }
  }, t = new WeakMap(), r = new WeakMap(), o = new WeakMap(), h = new WeakSet(), /**
   * Extra headers is a special case. The headers from the different levels have to be
   * merged instead of being overridden.
   */
  Kc = function(f, x) {
    var b, w;
    const g = e(this, t).extraHeaders ?? {}, d = ((b = e(this, r).get(x)) == null ? void 0 : b.extraHeaders) ?? {}, C = f === void 0 ? {} : ((w = e(this, o).get(f)) == null ? void 0 : w.extraHeaders) ?? {};
    return { ...g, ...d, ...C };
  }, c);
  return $r.ContextConfigStorage = s, $r;
}
var zr = {}, ba;
function lh() {
  var t, r;
  if (ba) return zr;
  ba = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.UserContextStorage = void 0;
  const i = Se();
  let s = (r = class {
    constructor(h) {
      y(this, t);
      P(this, t, h);
    }
    async getUserContexts() {
      const h = await e(this, t).sendCommand("Target.getBrowserContexts");
      return [
        {
          userContext: "default"
        },
        ...h.browserContextIds.map((a) => ({
          userContext: a
        }))
      ];
    }
    async verifyUserContextIdList(h) {
      const a = /* @__PURE__ */ new Set();
      if (!h.length)
        return a;
      const c = await this.getUserContexts(), m = new Set(c.map((f) => f.userContext));
      for (const f of h) {
        if (!m.has(f))
          throw new i.NoSuchUserContextException(`User context ${f} not found`);
        a.add(f);
      }
      return a;
    }
  }, t = new WeakMap(), r);
  return zr.UserContextStorage = s, zr;
}
var Kr = {}, Kt = {}, Wr = {}, xa;
function Vn() {
  var s, t, r, o, h, a, c;
  if (xa) return Wr;
  xa = 1, Object.defineProperty(Wr, "__esModule", { value: !0 }), Wr.Deferred = void 0;
  let i = (s = Symbol.toStringTag, c = class {
    constructor() {
      y(this, t, !1);
      y(this, r);
      y(this, o);
      y(this, h);
      y(this, a);
      X(this, s, "Promise");
      P(this, r, new Promise((f, x) => {
        P(this, h, f), P(this, a, x);
      })), e(this, r).catch((f) => {
      });
    }
    get isFinished() {
      return e(this, t);
    }
    get result() {
      if (!e(this, t))
        throw new Error("Deferred is not finished yet");
      return e(this, o);
    }
    then(f, x) {
      return e(this, r).then(f, x);
    }
    catch(f) {
      return e(this, r).catch(f);
    }
    resolve(f) {
      P(this, o, f), e(this, t) || (P(this, t, !0), e(this, h).call(this, f));
    }
    reject(f) {
      e(this, t) || (P(this, t, !0), e(this, a).call(this, f));
    }
    finally(f) {
      return e(this, r).finally(f);
    }
  }, t = new WeakMap(), r = new WeakMap(), o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c);
  return Wr.Deferred = i, Wr;
}
var on = {}, Ea;
function Wc() {
  if (Ea) return on;
  Ea = 1, Object.defineProperty(on, "__esModule", { value: !0 }), on.getTimestamp = i;
  function i() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  return on;
}
var an = {}, Sa;
function hh() {
  if (Sa) return an;
  Sa = 1, Object.defineProperty(an, "__esModule", { value: !0 }), an.inchesFromCm = i;
  function i(s) {
    return s / 2.54;
  }
  return an;
}
var Gr = {}, Pa;
function Gc() {
  if (Pa) return Gr;
  Pa = 1, Object.defineProperty(Gr, "__esModule", { value: !0 }), Gr.getSharedId = s, Gr.parseSharedId = r;
  const i = "_element_";
  function s(o, h, a) {
    return `f.${o}.d.${h}.e.${a}`;
  }
  function t(o) {
    const h = o.match(new RegExp(`(.*)${i}(.*)`));
    if (!h)
      return null;
    const a = h[1], c = h[2];
    if (a === void 0 || c === void 0)
      return null;
    const m = parseInt(c ?? "");
    return isNaN(m) ? null : {
      documentId: a,
      backendNodeId: m
    };
  }
  function r(o) {
    const h = t(o);
    if (h !== null)
      return { ...h, frameId: void 0 };
    const a = o.match(/f\.(.*)\.d\.(.*)\.e\.([0-9]*)/);
    if (!a)
      return null;
    const c = a[1], m = a[2], f = a[3];
    if (c === void 0 || m === void 0 || f === void 0)
      return null;
    const x = parseInt(f ?? "");
    return isNaN(x) ? null : {
      frameId: c,
      documentId: m,
      backendNodeId: x
    };
  }
  return Gr;
}
var Vr = {}, Xr = {}, Ia;
function Qc() {
  var h, a, c, m, f, x, g, wi, C, Vc, vi, yi, Xc, Ci, bi, Jc, Yc, xi;
  if (Ia) return Xr;
  Ia = 1, Object.defineProperty(Xr, "__esModule", { value: !0 }), Xr.Realm = void 0;
  const i = Se(), s = qe(), t = wt(), r = Mc(), l = class l {
    constructor(N, k, A, z, K, R, F) {
      y(this, g);
      y(this, h);
      y(this, a);
      y(this, c);
      y(this, m);
      y(this, f);
      y(this, x);
      X(this, "realmStorage");
      P(this, h, N), P(this, a, k), P(this, c, A), P(this, m, z), P(this, f, K), P(this, x, R), this.realmStorage = F, this.realmStorage.addRealm(this);
    }
    cdpToBidiValue(N, k) {
      const A = this.serializeForBiDi(N.result.deepSerializedValue, /* @__PURE__ */ new Map());
      if (N.result.objectId) {
        const z = N.result.objectId;
        k === "root" ? (A.handle = z, this.realmStorage.knownHandlesToRealmMap.set(z, this.realmId)) : T(this, g, xi).call(this, z).catch((K) => {
          var R;
          return (R = e(this, m)) == null ? void 0 : R.call(this, s.LogType.debugError, K);
        });
      }
      return A;
    }
    isHidden() {
      return !1;
    }
    /**
     * Relies on the CDP to implement proper BiDi serialization, except:
     * * CDP integer property `backendNodeId` is replaced with `sharedId` of
     * `{documentId}_element_{backendNodeId}`;
     * * CDP integer property `weakLocalObjectReference` is replaced with UUID `internalId`
     * using unique-per serialization `internalIdMap`.
     * * CDP type `platformobject` is replaced with `object`.
     * @param deepSerializedValue - CDP value to be converted to BiDi.
     * @param internalIdMap - Map from CDP integer `weakLocalObjectReference` to BiDi UUID
     * `internalId`.
     */
    serializeForBiDi(N, k) {
      if (Object.hasOwn(N, "weakLocalObjectReference")) {
        const z = N.weakLocalObjectReference;
        k.has(z) || k.set(z, (0, t.uuidv4)()), N.internalId = k.get(z), delete N.weakLocalObjectReference;
      }
      if (N.type === "node" && N.value && Object.hasOwn(N.value, "frameId") && delete N.value.frameId, N.type === "platformobject")
        return { type: "object" };
      const A = N.value;
      if (A === void 0)
        return N;
      if (["array", "set", "htmlcollection", "nodelist"].includes(N.type))
        for (const z in A)
          A[z] = this.serializeForBiDi(A[z], k);
      if (["object", "map"].includes(N.type))
        for (const z in A)
          A[z] = [
            this.serializeForBiDi(A[z][0], k),
            this.serializeForBiDi(A[z][1], k)
          ];
      return N;
    }
    get realmId() {
      return e(this, x);
    }
    get executionContextId() {
      return e(this, c);
    }
    get origin() {
      return e(this, f);
    }
    get source() {
      return {
        realm: this.realmId
      };
    }
    get cdpClient() {
      return e(this, h);
    }
    get baseInfo() {
      return {
        realm: this.realmId,
        origin: this.origin
      };
    }
    async evaluate(N, k, A = "none", z = {}, K = !1, R = !1) {
      var q;
      const F = await this.cdpClient.sendCommand("Runtime.evaluate", {
        contextId: this.executionContextId,
        expression: N,
        awaitPromise: k,
        serializationOptions: T(q = l, C, bi).call(q, "deep", z),
        userGesture: K,
        includeCommandLineAPI: R
      });
      return F.exceptionDetails ? await T(this, g, Ci).call(this, F.exceptionDetails, 0, A) : {
        realm: this.realmId,
        result: this.cdpToBidiValue(F, A),
        type: "success"
      };
    }
    initialize() {
      this.isHidden() || T(this, g, wi).call(this, {
        type: "event",
        method: i.ChromiumBidi.Script.EventNames.RealmCreated,
        params: this.realmInfo
      });
    }
    /**
     * Serializes a given CDP object into BiDi, keeping references in the
     * target's `globalThis`.
     */
    async serializeCdpObject(N, k) {
      var K;
      const A = T(K = l, C, Vc).call(K, N), z = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
        functionDeclaration: String((R) => R),
        awaitPromise: !1,
        arguments: [A],
        serializationOptions: {
          serialization: "deep"
        },
        executionContextId: this.executionContextId
      });
      return this.cdpToBidiValue(z, k);
    }
    /**
     * Gets the string representation of an object. This is equivalent to
     * calling `toString()` on the object value.
     */
    async stringifyObject(N) {
      const { result: k } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
        functionDeclaration: String((A) => String(A)),
        awaitPromise: !1,
        arguments: [N],
        returnByValue: !0,
        executionContextId: this.executionContextId
      });
      return k.value;
    }
    async callFunction(N, k, A = {
      type: "undefined"
    }, z = [], K = "none", R = {}, F = !1) {
      var H;
      const q = `(...args) => {
      function callFunction(f, args) {
        const deserializedThis = args.shift();
        const deserializedArgs = args;
        return f.apply(deserializedThis, deserializedArgs);
      }
      return callFunction((
        ${N}
      ), args);
    }`, Z = [
        await this.deserializeForCdp(A),
        ...await Promise.all(z.map(async (U) => await this.deserializeForCdp(U)))
      ];
      let B;
      try {
        B = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: q,
          awaitPromise: k,
          arguments: Z,
          serializationOptions: T(H = l, C, bi).call(H, "deep", R),
          executionContextId: this.executionContextId,
          userGesture: F
        });
      } catch (U) {
        throw U.code === -32e3 && [
          "Could not find object with given id",
          "Argument should belong to the same JavaScript world as target object",
          "Invalid remote object id"
        ].includes(U.message) ? new i.NoSuchHandleException("Handle was not found.") : U;
      }
      return B.exceptionDetails ? await T(this, g, Ci).call(this, B.exceptionDetails, 1, K) : {
        type: "success",
        result: this.cdpToBidiValue(B, K),
        realm: this.realmId
      };
    }
    async deserializeForCdp(N) {
      if ("handle" in N && N.handle)
        return { objectId: N.handle };
      if ("handle" in N || "sharedId" in N)
        throw new i.NoSuchHandleException("Handle was not found.");
      switch (N.type) {
        case "undefined":
          return { unserializableValue: "undefined" };
        case "null":
          return { unserializableValue: "null" };
        case "string":
          return { value: N.value };
        case "number":
          return N.value === "NaN" ? { unserializableValue: "NaN" } : N.value === "-0" ? { unserializableValue: "-0" } : N.value === "Infinity" ? { unserializableValue: "Infinity" } : N.value === "-Infinity" ? { unserializableValue: "-Infinity" } : {
            value: N.value
          };
        case "boolean":
          return { value: !!N.value };
        case "bigint":
          return {
            unserializableValue: `BigInt(${JSON.stringify(N.value)})`
          };
        case "date":
          return {
            unserializableValue: `new Date(Date.parse(${JSON.stringify(N.value)}))`
          };
        case "regexp":
          return {
            unserializableValue: `new RegExp(${JSON.stringify(N.value.pattern)}, ${JSON.stringify(N.value.flags)})`
          };
        case "map": {
          const k = await T(this, g, vi).call(this, N.value), { result: A } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String((...z) => {
              const K = /* @__PURE__ */ new Map();
              for (let R = 0; R < z.length; R += 2)
                K.set(z[R], z[R + 1]);
              return K;
            }),
            awaitPromise: !1,
            arguments: k,
            returnByValue: !1,
            executionContextId: this.executionContextId
          });
          return { objectId: A.objectId };
        }
        case "object": {
          const k = await T(this, g, vi).call(this, N.value), { result: A } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String((...z) => {
              const K = {};
              for (let R = 0; R < z.length; R += 2) {
                const F = z[R];
                K[F] = z[R + 1];
              }
              return K;
            }),
            awaitPromise: !1,
            arguments: k,
            returnByValue: !1,
            executionContextId: this.executionContextId
          });
          return { objectId: A.objectId };
        }
        case "array": {
          const k = await T(this, g, yi).call(this, N.value), { result: A } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String((...z) => z),
            awaitPromise: !1,
            arguments: k,
            returnByValue: !1,
            executionContextId: this.executionContextId
          });
          return { objectId: A.objectId };
        }
        case "set": {
          const k = await T(this, g, yi).call(this, N.value), { result: A } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String((...z) => new Set(z)),
            awaitPromise: !1,
            arguments: k,
            returnByValue: !1,
            executionContextId: this.executionContextId
          });
          return { objectId: A.objectId };
        }
        case "channel":
          return { objectId: await new r.ChannelProxy(N.value, e(this, m)).init(this, e(this, a)) };
      }
      throw new Error(`Value ${JSON.stringify(N)} is not deserializable.`);
    }
    async disown(N) {
      this.realmStorage.knownHandlesToRealmMap.get(N) === this.realmId && (await T(this, g, xi).call(this, N), this.realmStorage.knownHandlesToRealmMap.delete(N));
    }
    dispose() {
      T(this, g, wi).call(this, {
        type: "event",
        method: i.ChromiumBidi.Script.EventNames.RealmDestroyed,
        params: {
          realm: this.realmId
        }
      });
    }
  };
  h = new WeakMap(), a = new WeakMap(), c = new WeakMap(), m = new WeakMap(), f = new WeakMap(), x = new WeakMap(), g = new WeakSet(), wi = function(N) {
    if (this.associatedBrowsingContexts.length === 0)
      e(this, a).registerGlobalEvent(N);
    else
      for (const k of this.associatedBrowsingContexts)
        e(this, a).registerEvent(N, k.id);
  }, C = new WeakSet(), Vc = function(N) {
    return N.objectId !== void 0 ? { objectId: N.objectId } : N.unserializableValue !== void 0 ? { unserializableValue: N.unserializableValue } : { value: N.value };
  }, vi = async function(N) {
    return (await Promise.all(N.map(async ([A, z]) => {
      let K;
      typeof A == "string" ? K = { value: A } : K = await this.deserializeForCdp(A);
      const R = await this.deserializeForCdp(z);
      return [K, R];
    }))).flat();
  }, yi = async function(N) {
    return await Promise.all(N.map((k) => this.deserializeForCdp(k)));
  }, Xc = async function(N, k, A) {
    var R;
    const z = ((R = N.stackTrace) == null ? void 0 : R.callFrames.map((F) => ({
      url: F.url,
      functionName: F.functionName,
      lineNumber: F.lineNumber - k,
      columnNumber: F.columnNumber
    }))) ?? [], K = N.exception;
    return {
      exception: await this.serializeCdpObject(K, A),
      columnNumber: N.columnNumber,
      lineNumber: N.lineNumber - k,
      stackTrace: {
        callFrames: z
      },
      text: await this.stringifyObject(K) || N.text
    };
  }, Ci = async function(N, k, A) {
    return {
      exceptionDetails: await T(this, g, Xc).call(this, N, k, A),
      realm: this.realmId,
      type: "exception"
    };
  }, bi = function(N, k) {
    var A, z;
    return {
      serialization: N,
      additionalParameters: T(A = l, C, Jc).call(A, k),
      ...T(z = l, C, Yc).call(z, k)
    };
  }, Jc = function(N) {
    const k = {};
    return N.maxDomDepth !== void 0 && (k.maxNodeDepth = N.maxDomDepth === null ? 1e3 : N.maxDomDepth), N.includeShadowTree !== void 0 && (k.includeShadowTree = N.includeShadowTree), k;
  }, Yc = function(N) {
    return N.maxObjectDepth === void 0 || N.maxObjectDepth === null ? {} : { maxDepth: N.maxObjectDepth };
  }, xi = async function(N) {
    try {
      await this.cdpClient.sendCommand("Runtime.releaseObject", {
        objectId: N
      });
    } catch (k) {
      if (!(k.code === -32e3 && k.message === "Invalid remote object id"))
        throw k;
    }
  }, y(l, C);
  let o = l;
  return Xr.Realm = o, Xr;
}
var _a;
function eu() {
  var o, h, a, Zc;
  if (_a) return Vr;
  _a = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.WindowRealm = void 0;
  const i = Se(), s = Qc(), t = Gc();
  class r extends s.Realm {
    constructor(x, g, d, C, b, w, v, p, I, n) {
      super(d, C, b, w, v, p, I);
      y(this, a);
      y(this, o);
      y(this, h);
      X(this, "sandbox");
      P(this, o, x), P(this, h, g), this.sandbox = n, this.initialize();
    }
    get browsingContext() {
      return e(this, h).getContext(e(this, o));
    }
    /**
     * Do not expose to user hidden realms.
     */
    isHidden() {
      return this.realmStorage.hiddenSandboxes.has(this.sandbox);
    }
    get associatedBrowsingContexts() {
      return [this.browsingContext];
    }
    get realmType() {
      return "window";
    }
    get realmInfo() {
      return {
        ...this.baseInfo,
        type: this.realmType,
        context: e(this, o),
        sandbox: this.sandbox
      };
    }
    get source() {
      return {
        realm: this.realmId,
        context: this.browsingContext.id
      };
    }
    serializeForBiDi(x, g) {
      const d = x.value;
      if (x.type === "node" && d !== void 0) {
        if (Object.hasOwn(d, "backendNodeId")) {
          let C = this.browsingContext.navigableId ?? "UNKNOWN";
          Object.hasOwn(d, "loaderId") && (C = d.loaderId, delete d.loaderId), x.sharedId = (0, t.getSharedId)(T(this, a, Zc).call(this, C), C, d.backendNodeId), delete d.backendNodeId;
        }
        if (Object.hasOwn(d, "children"))
          for (const C in d.children)
            d.children[C] = this.serializeForBiDi(d.children[C], g);
        Object.hasOwn(d, "shadowRoot") && d.shadowRoot !== null && (d.shadowRoot = this.serializeForBiDi(d.shadowRoot, g)), d.namespaceURI === "" && (d.namespaceURI = null);
      }
      return super.serializeForBiDi(x, g);
    }
    async deserializeForCdp(x) {
      if ("sharedId" in x && x.sharedId) {
        const g = (0, t.parseSharedId)(x.sharedId);
        if (g === null)
          throw new i.NoSuchNodeException(`SharedId "${x.sharedId}" was not found.`);
        const { documentId: d, backendNodeId: C } = g;
        if (this.browsingContext.navigableId !== d)
          throw new i.NoSuchNodeException(`SharedId "${x.sharedId}" belongs to different document. Current document is ${this.browsingContext.navigableId}.`);
        try {
          const { object: b } = await this.cdpClient.sendCommand("DOM.resolveNode", {
            backendNodeId: C,
            executionContextId: this.executionContextId
          });
          return { objectId: b.objectId };
        } catch (b) {
          throw b.code === -32e3 && b.message === "No node with given id found" ? new i.NoSuchNodeException(`SharedId "${x.sharedId}" was not found.`) : new i.UnknownErrorException(b.message, b.stack);
        }
      }
      return await super.deserializeForCdp(x);
    }
    async evaluate(x, g, d, C, b, w) {
      return await e(this, h).getContext(e(this, o)).targetUnblockedOrThrow(), await super.evaluate(x, g, d, C, b, w);
    }
    async callFunction(x, g, d, C, b, w, v) {
      return await e(this, h).getContext(e(this, o)).targetUnblockedOrThrow(), await super.callFunction(x, g, d, C, b, w, v);
    }
  }
  return o = new WeakMap(), h = new WeakMap(), a = new WeakSet(), Zc = function(x) {
    const g = e(this, h).getAllContexts().find((d) => d.navigableId === x);
    return (g == null ? void 0 : g.id) ?? "UNKNOWN";
  }, Vr.WindowRealm = r, Vr;
}
var et = {}, cn = {}, ka;
function ph() {
  if (ka) return cn;
  ka = 1, Object.defineProperty(cn, "__esModule", { value: !0 }), cn.urlMatchesAboutBlank = i;
  function i(s) {
    if (s === "")
      return !0;
    try {
      const t = new URL(s);
      return t.protocol.replace(/:$/, "").toLowerCase() === "about" && t.pathname.toLowerCase() === "blank" && t.username === "" && t.password === "" && t.host === "";
    } catch (t) {
      if (t instanceof TypeError)
        return !1;
      throw t;
    }
  }
  return cn;
}
var Ta;
function fh() {
  var f, x, g, d, C, b, fn, v, p, I, n, u, D, E, l, tu, N, k, Ei;
  if (Ta) return et;
  Ta = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.NavigationTracker = et.NavigationState = et.NavigationResult = void 0;
  const i = Se(), s = Vn(), t = qe(), r = Wc(), o = ph(), h = wt();
  class a {
    constructor(K, R) {
      X(this, "eventName");
      X(this, "message");
      this.eventName = K, this.message = R;
    }
  }
  et.NavigationResult = a;
  class c {
    constructor(K, R, F, q) {
      y(this, b);
      X(this, "navigationId", (0, h.uuidv4)());
      y(this, f);
      y(this, x, !1);
      y(this, g, new s.Deferred());
      X(this, "url");
      X(this, "loaderId");
      y(this, d);
      y(this, C);
      X(this, "committed", new s.Deferred());
      X(this, "isFragmentNavigation");
      P(this, f, R), this.url = K, P(this, d, F), P(this, C, q);
    }
    get finished() {
      return e(this, g);
    }
    navigationInfo() {
      return {
        context: e(this, f),
        navigation: this.navigationId,
        timestamp: (0, r.getTimestamp)(),
        url: this.url
      };
    }
    start() {
      // Initial navigation should not be reported.
      !e(this, d) && // No need in reporting started navigation twice.
      !e(this, x) && // No need for reporting fragment navigations. Step 13 vs step 16 of the spec:
      // https://html.spec.whatwg.org/#beginning-navigation:webdriver-bidi-navigation-started
      !this.isFragmentNavigation && e(this, C).registerEvent({
        type: "event",
        method: i.ChromiumBidi.BrowsingContext.EventNames.NavigationStarted,
        params: this.navigationInfo()
      }, e(this, f)), P(this, x, !0);
    }
    frameNavigated() {
      this.committed.resolve(), e(this, d) || e(this, C).registerEvent({
        type: "event",
        method: i.ChromiumBidi.BrowsingContext.EventNames.NavigationCommitted,
        params: this.navigationInfo()
      }, e(this, f));
    }
    fragmentNavigated() {
      this.committed.resolve(), T(this, b, fn).call(this, new a(
        "browsingContext.fragmentNavigated"
        /* NavigationEventName.FragmentNavigated */
      ));
    }
    load() {
      T(this, b, fn).call(this, new a(
        "browsingContext.load"
        /* NavigationEventName.Load */
      ));
    }
    fail(K) {
      T(this, b, fn).call(this, new a(this.committed.isFinished ? "browsingContext.navigationAborted" : "browsingContext.navigationFailed", K));
    }
  }
  f = new WeakMap(), x = new WeakMap(), g = new WeakMap(), d = new WeakMap(), C = new WeakMap(), b = new WeakSet(), fn = function(K) {
    P(this, x, !0), !e(this, d) && !e(this, g).isFinished && K.eventName !== "browsingContext.load" && e(this, C).registerEvent({
      type: "event",
      method: K.eventName,
      params: this.navigationInfo()
    }, e(this, f)), e(this, g).resolve(K);
  }, et.NavigationState = c;
  let m = (k = class {
    constructor(K, R, F, q) {
      y(this, l);
      y(this, v);
      y(this, p);
      y(this, I, /* @__PURE__ */ new Map());
      y(this, n);
      /**
       * Last committed navigation is committed, but is not guaranteed to be finished, as it
       * can still wait for `load` or `DOMContentLoaded` events.
       */
      y(this, u);
      /**
       * Pending navigation is a navigation that is started but not yet committed.
       */
      y(this, D);
      // Flags if the initial navigation to `about:blank` is in progress.
      y(this, E, !0);
      P(this, n, R), P(this, v, F), P(this, p, q), P(this, E, !0), P(this, u, new c(K, R, (0, o.urlMatchesAboutBlank)(K), e(this, v)));
    }
    /**
     * Returns current started ongoing navigation. It can be either a started pending
     * navigation, or one is already navigated.
     */
    get currentNavigationId() {
      var K;
      return ((K = e(this, D)) == null ? void 0 : K.isFragmentNavigation) === !1 ? e(this, D).navigationId : e(this, u).navigationId;
    }
    /**
     * Flags if the current navigation relates to the initial to `about:blank` navigation.
     */
    get isInitialNavigation() {
      return e(this, E);
    }
    /**
     * Url of the last navigated navigation.
     */
    get url() {
      return e(this, u).url;
    }
    /**
     * Creates a pending navigation e.g. when navigation command is called. Required to
     * provide navigation id before the actual navigation is started. It will be used when
     * navigation started. Can be aborted, failed, fragment navigated, or became a current
     * navigation.
     */
    createPendingNavigation(K, R = !1) {
      var q, Z;
      (q = e(this, p)) == null || q.call(this, t.LogType.debug, "createCommandNavigation"), P(this, E, R && e(this, E) && (0, o.urlMatchesAboutBlank)(K)), (Z = e(this, D)) == null || Z.fail("navigation canceled by concurrent navigation");
      const F = new c(K, e(this, n), e(this, E), e(this, v));
      return P(this, D, F), F;
    }
    dispose() {
      var K;
      (K = e(this, D)) == null || K.fail("navigation canceled by context disposal"), e(this, u).fail("navigation canceled by context disposal");
    }
    // Update the current url.
    onTargetInfoChanged(K) {
      var R;
      (R = e(this, p)) == null || R.call(this, t.LogType.debug, `onTargetInfoChanged ${K}`), e(this, u).url = K;
    }
    /**
     * @param {string} unreachableUrl indicated the navigation is actually failed.
     */
    frameNavigated(K, R, F) {
      var Z;
      if ((Z = e(this, p)) == null || Z.call(this, t.LogType.debug, `frameNavigated ${K}`), F !== void 0) {
        const B = e(this, I).get(R) ?? e(this, D) ?? this.createPendingNavigation(F, !0);
        B.url = F, B.start(), B.fail("the requested url is unreachable");
        return;
      }
      const q = T(this, l, tu).call(this, K, R);
      q !== e(this, u) && e(this, u).fail("navigation canceled by concurrent navigation"), q.url = K, q.loaderId = R, e(this, I).set(R, q), q.start(), q.frameNavigated(), P(this, u, q), e(this, D) === q && P(this, D, void 0);
    }
    navigatedWithinDocument(K, R) {
      var q, Z;
      if ((q = e(this, p)) == null || q.call(this, t.LogType.debug, `navigatedWithinDocument ${K}, ${R}`), e(this, u).url = K, R !== "fragment")
        return;
      const F = ((Z = e(this, D)) == null ? void 0 : Z.isFragmentNavigation) === !0 ? e(this, D) : new c(K, e(this, n), !1, e(this, v));
      F.fragmentNavigated(), F === e(this, D) && P(this, D, void 0);
    }
    /**
     * Required to mark navigation as fully complete.
     * TODO: navigation should be complete when it became the current one on
     * `Page.frameNavigated` or on navigating command finished with a new loader Id.
     */
    loadPageEvent(K) {
      var R, F;
      (R = e(this, p)) == null || R.call(this, t.LogType.debug, "loadPageEvent"), P(this, E, !1), (F = e(this, I).get(K)) == null || F.load();
    }
    /**
     * Fail navigation due to navigation command failed.
     */
    failNavigation(K, R) {
      var F;
      (F = e(this, p)) == null || F.call(this, t.LogType.debug, "failCommandNavigation"), K.fail(R);
    }
    /**
     * Updates the navigation's `loaderId` and sets it as current one, if it is a
     * cross-document navigation.
     */
    navigationCommandFinished(K, R) {
      var F;
      (F = e(this, p)) == null || F.call(this, t.LogType.debug, `finishCommandNavigation ${K.navigationId}, ${R}`), R !== void 0 && (K.loaderId = R, e(this, I).set(R, K)), K.isFragmentNavigation = R === void 0;
    }
    frameStartedNavigating(K, R, F) {
      var Z, B, H, U, Y, _;
      if ((Z = e(this, p)) == null || Z.call(this, t.LogType.debug, `frameStartedNavigating ${K}, ${R}`), e(this, D) && ((B = e(this, D)) == null ? void 0 : B.loaderId) !== void 0 && ((H = e(this, D)) == null ? void 0 : H.loaderId) !== R && ((U = e(this, D)) == null || U.fail("navigation canceled by concurrent navigation"), P(this, D, void 0)), e(this, I).has(R)) {
        const $ = e(this, I).get(R);
        $.isFragmentNavigation = T(Y = k, N, Ei).call(Y, F), P(this, D, $);
        return;
      }
      const q = e(this, D) ?? this.createPendingNavigation(K, !0);
      e(this, I).set(R, q), q.isFragmentNavigation = T(_ = k, N, Ei).call(_, F), q.url = K, q.loaderId = R, q.start();
    }
    /**
     * If there is a navigation with the loaderId equals to the network request id, it means
     * that the navigation failed.
     */
    networkLoadingFailed(K, R) {
      var F;
      (F = e(this, I).get(K)) == null || F.fail(R);
    }
  }, v = new WeakMap(), p = new WeakMap(), I = new WeakMap(), n = new WeakMap(), u = new WeakMap(), D = new WeakMap(), E = new WeakMap(), l = new WeakSet(), tu = function(K, R) {
    return e(this, I).has(R) ? e(this, I).get(R) : e(this, D) !== void 0 && e(this, D).loaderId === void 0 ? e(this, D) : this.createPendingNavigation(K, !0);
  }, N = new WeakSet(), Ei = function(K) {
    return ["historySameDocument", "sameDocument"].includes(K);
  }, y(k, N), k);
  return et.NavigationTracker = m, et;
}
var Da;
function cu() {
  var I, n, u, D, E, l, S, N, k, A, z, K, R, F, q, Z, B, H, U, gn, Si, Pi, V, ru, su, mn, Ii, nu, _i, iu, ou, au, lt;
  if (Da) return Kt;
  Da = 1;
  var i;
  Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.BrowsingContextImpl = void 0, Kt.serializeOrigin = d;
  const s = Se(), t = Lt(), r = Vn(), o = qe(), h = Wc(), a = hh(), c = wt(), m = Gc(), f = eu(), x = fh();
  let g = (I = class {
    constructor(O, G, te, he, ce, de, re, M, W, J, ee) {
      y(this, U);
      /** Direct children browsing contexts. */
      y(this, n, /* @__PURE__ */ new Set());
      /** The ID of this browsing context. */
      y(this, u);
      X(this, "userContext");
      // Used for running helper scripts.
      y(this, D, (0, c.uuidv4)());
      y(this, E, /* @__PURE__ */ new Map());
      /**
       * The ID of the parent browsing context.
       * If null, this is a top-level context.
       */
      y(this, l);
      y(this, S, null);
      y(this, N);
      y(this, k, {
        DOMContentLoaded: new r.Deferred(),
        load: new r.Deferred()
      });
      y(this, A);
      y(this, z, new r.Deferred());
      y(this, K);
      y(this, R);
      y(this, F);
      y(this, q);
      y(this, Z);
      y(this, B);
      // Set when the user prompt is opened. Required to provide the type in closing event.
      y(this, H);
      P(this, A, he), P(this, u, O), P(this, S, G), this.userContext = te, P(this, R, ce), P(this, K, de), P(this, Z, re), P(this, B, M), P(this, F, ee), P(this, N, J), e(this, Z).hiddenSandboxes.add(e(this, D)), P(this, q, new x.NavigationTracker(W, O, ce, ee));
    }
    static create(O, G, te, he, ce, de, re, M, W, J, ee) {
      var ge;
      const ne = new i(O, G, te, he, ce, de, re, M, W, J, ee);
      return T(ge = ne, U, Pi).call(ge), de.addContext(ne), ne.isTopLevelContext() || ne.parent.addChild(ne.id), ce.registerPromiseEvent(ne.targetUnblockedOrThrow().then(() => ({
        kind: "success",
        value: {
          type: "event",
          method: s.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
          params: {
            ...ne.serializeToBidiValue(),
            // Hack to provide the initial URL of the context, as it can be changed
            // between the page target is attached and unblocked, as the page is not
            // fully paused in MPArch session (https://crbug.com/372842894).
            // TODO: remove once https://crbug.com/372842894 is addressed.
            url: W
          }
        }
      }), (pe) => ({
        kind: "error",
        error: pe
      })), ne.id, s.ChromiumBidi.BrowsingContext.EventNames.ContextCreated), ne;
    }
    /**
     * @see https://html.spec.whatwg.org/multipage/document-sequences.html#navigable
     */
    get navigableId() {
      return e(this, l);
    }
    get navigationId() {
      return e(this, q).currentNavigationId;
    }
    dispose(O) {
      e(this, q).dispose(), e(this, Z).deleteRealms({
        browsingContextId: this.id
      }), this.isTopLevelContext() || e(this.parent, n).delete(this.id), T(this, U, nu).call(this), O && e(this, R).registerEvent({
        type: "event",
        method: s.ChromiumBidi.BrowsingContext.EventNames.ContextDestroyed,
        params: this.serializeToBidiValue(null)
      }, this.id), T(this, U, gn).call(this), e(this, R).clearBufferedEvents(this.id), e(this, K).deleteContextById(this.id);
    }
    /** Returns the ID of this context. */
    get id() {
      return e(this, u);
    }
    /** Returns the parent context ID. */
    get parentId() {
      return e(this, S);
    }
    /** Sets the parent context ID and updates parent's children. */
    set parentId(O) {
      var G;
      if (e(this, S) !== null) {
        (G = e(this, F)) == null || G.call(this, o.LogType.debugError, "Parent context already set");
        return;
      }
      P(this, S, O), this.isTopLevelContext() || this.parent.addChild(this.id);
    }
    /** Returns the parent context. */
    get parent() {
      return this.parentId === null ? null : e(this, K).getContext(this.parentId);
    }
    /** Returns all direct children contexts. */
    get directChildren() {
      return [...e(this, n)].map((O) => e(this, K).getContext(O));
    }
    /** Returns all children contexts, flattened. */
    get allChildren() {
      const O = this.directChildren;
      return O.concat(...O.map((G) => G.allChildren));
    }
    /**
     * Returns true if this is a top-level context.
     * This is the case whenever the parent context ID is null.
     */
    isTopLevelContext() {
      return e(this, S) === null;
    }
    get top() {
      let O = this, G = O.parent;
      for (; G; )
        O = G, G = O.parent;
      return O;
    }
    addChild(O) {
      e(this, n).add(O);
    }
    get cdpTarget() {
      return e(this, A);
    }
    updateCdpTarget(O) {
      P(this, A, O), T(this, U, Pi).call(this);
    }
    get url() {
      return e(this, q).url;
    }
    async lifecycleLoaded() {
      await e(this, k).load;
    }
    async targetUnblockedOrThrow() {
      const O = await e(this, A).unblocked;
      if (O.kind === "error")
        throw O.error;
    }
    /** Returns a sandbox for internal helper scripts which is not exposed to the user.*/
    async getOrCreateHiddenSandbox() {
      return await T(this, U, Si).call(this, e(this, D));
    }
    /** Returns a sandbox which is exposed to user. */
    async getOrCreateUserSandbox(O) {
      const G = await T(this, U, Si).call(this, O);
      if (G.isHidden())
        throw new s.NoSuchFrameException(`Realm "${O}" not found`);
      return G;
    }
    /**
     * Implements https://w3c.github.io/webdriver-bidi/#get-the-navigable-info.
     */
    serializeToBidiValue(O = 0, G = !0) {
      return {
        context: e(this, u),
        url: this.url,
        userContext: this.userContext,
        originalOpener: e(this, N) ?? null,
        clientWindow: `${this.cdpTarget.windowId}`,
        children: O === null || O > 0 ? this.directChildren.map((te) => te.serializeToBidiValue(O === null ? O : O - 1, !1)) : null,
        ...G ? { parent: e(this, S) } : {}
      };
    }
    onTargetInfoChanged(O) {
      e(this, q).onTargetInfoChanged(O.targetInfo.url);
    }
    async navigate(O, G) {
      try {
        new URL(O);
      } catch {
        throw new s.InvalidArgumentException(`Invalid URL: ${O}`);
      }
      const te = e(this, q).createPendingNavigation(O), he = (async () => {
        const de = await e(this, A).cdpClient.sendCommand("Page.navigate", {
          url: O,
          frameId: this.id
        });
        if (de.errorText)
          throw e(this, q).failNavigation(te, de.errorText), new s.UnknownErrorException(de.errorText);
        e(this, q).navigationCommandFinished(te, de.loaderId), T(this, U, mn).call(this, de.loaderId);
      })(), ce = await Promise.race([
        // No `loaderId` means same-document navigation.
        T(this, U, _i).call(this, G, he, te),
        // Throw an error if the navigation is canceled.
        te.finished
      ]);
      if (ce instanceof x.NavigationResult && // TODO: check after decision on the spec is done:
      //  https://github.com/w3c/webdriver-bidi/issues/799.
      (ce.eventName === "browsingContext.navigationAborted" || ce.eventName === "browsingContext.navigationFailed"))
        throw new s.UnknownErrorException(ce.message ?? "unknown exception");
      return {
        navigation: te.navigationId,
        // Url can change due to redirects. Get the one from commandNavigation.
        url: te.url
      };
    }
    // TODO: support concurrent navigations analogous to `navigate`.
    async reload(O, G) {
      await this.targetUnblockedOrThrow(), T(this, U, Ii).call(this);
      const te = e(this, q).createPendingNavigation(e(this, q).url), he = e(this, A).cdpClient.sendCommand("Page.reload", {
        ignoreCache: O
      }), ce = await Promise.race([
        // No `loaderId` means same-document navigation.
        T(this, U, _i).call(this, G, he, te),
        // Throw an error if the navigation is canceled.
        te.finished
      ]);
      if (ce instanceof x.NavigationResult && (ce.eventName === "browsingContext.navigationAborted" || ce.eventName === "browsingContext.navigationFailed"))
        throw new s.UnknownErrorException(ce.message ?? "unknown exception");
      return {
        navigation: te.navigationId,
        // Url can change due to redirects. Get the one from commandNavigation.
        url: te.url
      };
    }
    async setViewport(O, G, te) {
      const he = e(this, B).getActiveConfig(this.id, this.userContext);
      await this.cdpTarget.setDeviceMetricsOverride(O, G, te, he.screenArea ?? null);
    }
    async handleUserPrompt(O, G) {
      await e(this.top, A).cdpClient.sendCommand("Page.handleJavaScriptDialog", {
        accept: O ?? !0,
        promptText: G
      });
    }
    async activate() {
      await e(this, A).cdpClient.sendCommand("Page.bringToFront");
    }
    async captureScreenshot(O) {
      if (!this.isTopLevelContext())
        throw new s.UnsupportedOperationException(`Non-top-level 'context' (${O.context}) is currently not supported`);
      const G = C(O);
      let te = !1, he;
      switch (O.origin ?? (O.origin = "viewport"), O.origin) {
        case "document": {
          he = String(() => {
            const W = document.documentElement;
            return {
              x: 0,
              y: 0,
              width: W.scrollWidth,
              height: W.scrollHeight
            };
          }), te = !0;
          break;
        }
        case "viewport": {
          he = String(() => {
            const W = window.visualViewport;
            return {
              x: W.pageLeft,
              y: W.pageTop,
              width: W.width,
              height: W.height
            };
          });
          break;
        }
      }
      const de = await (await this.getOrCreateHiddenSandbox()).callFunction(he, !1);
      (0, t.assert)(de.type === "success");
      const re = b(de.result);
      (0, t.assert)(re);
      let M = re;
      if (O.clip) {
        const W = O.clip;
        O.origin === "viewport" && W.type === "box" && (W.x += re.x, W.y += re.y), M = v(await T(this, U, iu).call(this, W), re);
      }
      if (M.width === 0 || M.height === 0)
        throw new s.UnableToCaptureScreenException(`Unable to capture screenshot with zero dimensions: width=${M.width}, height=${M.height}`);
      return await e(this, A).cdpClient.sendCommand("Page.captureScreenshot", {
        clip: { ...M, scale: 1 },
        ...G,
        captureBeyondViewport: te
      });
    }
    async print(O) {
      var te, he, ce, de, re, M;
      if (!this.isTopLevelContext())
        throw new s.UnsupportedOperationException("Printing of non-top level contexts is not supported");
      const G = {};
      if (O.background !== void 0 && (G.printBackground = O.background), ((te = O.margin) == null ? void 0 : te.bottom) !== void 0 && (G.marginBottom = (0, a.inchesFromCm)(O.margin.bottom)), ((he = O.margin) == null ? void 0 : he.left) !== void 0 && (G.marginLeft = (0, a.inchesFromCm)(O.margin.left)), ((ce = O.margin) == null ? void 0 : ce.right) !== void 0 && (G.marginRight = (0, a.inchesFromCm)(O.margin.right)), ((de = O.margin) == null ? void 0 : de.top) !== void 0 && (G.marginTop = (0, a.inchesFromCm)(O.margin.top)), O.orientation !== void 0 && (G.landscape = O.orientation === "landscape"), ((re = O.page) == null ? void 0 : re.height) !== void 0 && (G.paperHeight = (0, a.inchesFromCm)(O.page.height)), ((M = O.page) == null ? void 0 : M.width) !== void 0 && (G.paperWidth = (0, a.inchesFromCm)(O.page.width)), O.pageRanges !== void 0) {
        for (const W of O.pageRanges) {
          if (typeof W == "number")
            continue;
          const J = W.split("-");
          if (J.length < 1 || J.length > 2)
            throw new s.InvalidArgumentException(`Invalid page range: ${W} is not a valid integer range.`);
          if (J.length === 1) {
            p(J[0] ?? "");
            continue;
          }
          let ee, ne;
          const [ge = "", pe = ""] = J;
          if (ge === "" ? ee = 1 : ee = p(ge), pe === "" ? ne = Number.MAX_SAFE_INTEGER : ne = p(pe), ee > ne)
            throw new s.InvalidArgumentException(`Invalid page range: ${ge} > ${pe}`);
        }
        G.pageRanges = O.pageRanges.join(",");
      }
      O.scale !== void 0 && (G.scale = O.scale), O.shrinkToFit !== void 0 && (G.preferCSSPageSize = !O.shrinkToFit);
      try {
        return {
          data: (await e(this, A).cdpClient.sendCommand("Page.printToPDF", G)).data
        };
      } catch (W) {
        throw W.message === "invalid print parameters: content area is empty" ? new s.UnsupportedOperationException(W.message) : W;
      }
    }
    async close() {
      await e(this, A).cdpClient.sendCommand("Page.close");
    }
    async traverseHistory(O) {
      if (O === 0)
        return;
      const G = await e(this, A).cdpClient.sendCommand("Page.getNavigationHistory"), te = G.entries[G.currentIndex + O];
      if (!te)
        throw new s.NoSuchHistoryEntryException(`No history entry at delta ${O}`);
      await e(this, A).cdpClient.sendCommand("Page.navigateToHistoryEntry", {
        entryId: te.id
      });
    }
    async toggleModulesIfNeeded() {
      await Promise.all([
        e(this, A).toggleNetworkIfNeeded(),
        e(this, A).toggleDeviceAccessIfNeeded(),
        e(this, A).togglePreloadIfNeeded()
      ]);
    }
    async locateNodes(O) {
      return await T(this, U, au).call(this, await e(this, z), O.locator, O.startNodes ?? [], O.maxNodeCount, O.serializationOptions);
    }
    async setTimezoneOverride(O) {
      await Promise.all(T(this, U, lt).call(this).map(async (G) => await G.setTimezoneOverride(O)));
    }
    async setLocaleOverride(O) {
      await Promise.all(T(this, U, lt).call(this).map(async (G) => await G.setLocaleOverride(O)));
    }
    async setGeolocationOverride(O) {
      await Promise.all(T(this, U, lt).call(this).map(async (G) => await G.setGeolocationOverride(O)));
    }
    async setScriptingEnabled(O) {
      await Promise.all(T(this, U, lt).call(this).map(async (G) => await G.setScriptingEnabled(O)));
    }
    async setUserAgentAndAcceptLanguage(O, G) {
      await Promise.all(T(this, U, lt).call(this).map(async (te) => await te.setUserAgentAndAcceptLanguage(O, G)));
    }
    async setEmulatedNetworkConditions(O) {
      await Promise.all(T(this, U, lt).call(this).map(async (G) => await G.setEmulatedNetworkConditions(O)));
    }
    async setExtraHeaders(O) {
      await Promise.all(T(this, U, lt).call(this).map(async (G) => await G.setExtraHeaders(O)));
    }
  }, n = new WeakMap(), u = new WeakMap(), D = new WeakMap(), E = new WeakMap(), l = new WeakMap(), S = new WeakMap(), N = new WeakMap(), k = new WeakMap(), A = new WeakMap(), z = new WeakMap(), K = new WeakMap(), R = new WeakMap(), F = new WeakMap(), q = new WeakMap(), Z = new WeakMap(), B = new WeakMap(), H = new WeakMap(), U = new WeakSet(), gn = function(O = !1) {
    this.directChildren.map((G) => G.dispose(O));
  }, Si = async function(O) {
    if (O === void 0 || O === "")
      return await e(this, z);
    let G = e(this, Z).findRealms({
      browsingContextId: this.id,
      sandbox: O
    });
    return G.length === 0 && (await e(this, A).cdpClient.sendCommand("Page.createIsolatedWorld", {
      frameId: this.id,
      worldName: O
    }), G = e(this, Z).findRealms({
      browsingContextId: this.id,
      sandbox: O
    }), (0, t.assert)(G.length !== 0)), G[0];
  }, Pi = function() {
    e(this, A).cdpClient.on("Network.loadingFailed", (O) => {
      e(this, q).networkLoadingFailed(O.requestId, O.errorText);
    }), e(this, A).cdpClient.on("Page.fileChooserOpened", (O) => {
      var te;
      if (this.id !== O.frameId)
        return;
      if (e(this, l) === void 0) {
        (te = e(this, F)) == null || te.call(this, o.LogType.debugError, "LoaderId should be defined when file upload is shown", O);
        return;
      }
      const G = O.backendNodeId === void 0 ? void 0 : {
        sharedId: (0, m.getSharedId)(this.id, e(this, l), O.backendNodeId)
      };
      e(this, R).registerEvent({
        type: "event",
        method: s.ChromiumBidi.Input.EventNames.FileDialogOpened,
        params: {
          context: this.id,
          multiple: O.mode === "selectMultiple",
          element: G
        }
      }, this.id);
    }), e(this, A).cdpClient.on("Page.frameNavigated", (O) => {
      this.id === O.frame.id && (e(this, q).frameNavigated(
        O.frame.url + (O.frame.urlFragment ?? ""),
        O.frame.loaderId,
        // `unreachableUrl` indicates if the navigation failed.
        O.frame.unreachableUrl
      ), T(this, U, gn).call(this), T(this, U, mn).call(this, O.frame.loaderId));
    }), e(this, A).cdpClient.on("Page.frameStartedNavigating", (O) => {
      this.id === O.frameId && e(this, q).frameStartedNavigating(O.url, O.loaderId, O.navigationType);
    }), e(this, A).cdpClient.on("Page.navigatedWithinDocument", (O) => {
      if (this.id === O.frameId && (e(this, q).navigatedWithinDocument(O.url, O.navigationType), O.navigationType === "historyApi")) {
        e(this, R).registerEvent({
          type: "event",
          method: "browsingContext.historyUpdated",
          params: {
            context: this.id,
            timestamp: (0, h.getTimestamp)(),
            url: e(this, q).url
          }
        }, this.id);
        return;
      }
    }), e(this, A).cdpClient.on("Page.lifecycleEvent", (O) => {
      if (this.id === O.frameId) {
        if (O.name === "init") {
          T(this, U, mn).call(this, O.loaderId);
          return;
        }
        if (O.name === "commit") {
          P(this, l, O.loaderId);
          return;
        }
        if (e(this, l) || P(this, l, O.loaderId), O.loaderId === e(this, l))
          switch (O.name) {
            case "DOMContentLoaded":
              e(this, q).isInitialNavigation || e(this, R).registerEvent({
                type: "event",
                method: s.ChromiumBidi.BrowsingContext.EventNames.DomContentLoaded,
                params: {
                  context: this.id,
                  navigation: e(this, q).currentNavigationId,
                  timestamp: (0, h.getTimestamp)(),
                  url: e(this, q).url
                }
              }, this.id), e(this, k).DOMContentLoaded.resolve();
              break;
            case "load":
              e(this, q).isInitialNavigation || e(this, R).registerEvent({
                type: "event",
                method: s.ChromiumBidi.BrowsingContext.EventNames.Load,
                params: {
                  context: this.id,
                  navigation: e(this, q).currentNavigationId,
                  timestamp: (0, h.getTimestamp)(),
                  url: e(this, q).url
                }
              }, this.id), e(this, q).loadPageEvent(O.loaderId), e(this, k).load.resolve();
              break;
          }
      }
    }), e(this, A).cdpClient.on("Runtime.executionContextCreated", (O) => {
      var W;
      const { auxData: G, name: te, uniqueId: he, id: ce } = O.context;
      if (!G || G.frameId !== this.id)
        return;
      let de, re;
      switch (G.type) {
        case "isolated":
          re = te, e(this, z).isFinished || (W = e(this, F)) == null || W.call(this, o.LogType.debugError, "Unexpectedly, isolated realm created before the default one"), de = e(this, z).isFinished ? e(this, z).result.origin : (
            // This fallback is not expected to be ever reached.
            ""
          );
          break;
        case "default":
          de = d(O.context.origin);
          break;
        default:
          return;
      }
      const M = new f.WindowRealm(this.id, e(this, K), e(this, A).cdpClient, e(this, R), ce, e(this, F), de, he, e(this, Z), re);
      G.isDefault && (e(this, z).resolve(M), Promise.all(e(this, A).getChannels().map((J) => J.startListenerFromWindow(M, e(this, R)))));
    }), e(this, A).cdpClient.on("Runtime.executionContextDestroyed", (O) => {
      e(this, z).isFinished && e(this, z).result.executionContextId === O.executionContextId && P(this, z, new r.Deferred()), e(this, Z).deleteRealms({
        cdpSessionId: e(this, A).cdpSessionId,
        executionContextId: O.executionContextId
      });
    }), e(this, A).cdpClient.on("Runtime.executionContextsCleared", () => {
      e(this, z).isFinished || e(this, z).reject(new s.UnknownErrorException("execution contexts cleared")), P(this, z, new r.Deferred()), e(this, Z).deleteRealms({
        cdpSessionId: e(this, A).cdpSessionId
      });
    }), e(this, A).cdpClient.on("Page.javascriptDialogClosed", (O) => {
      var te, he;
      if (O.frameId && this.id !== O.frameId || !O.frameId && e(this, S) && e(this, A).cdpClient !== ((te = e(this, K).getContext(e(this, S))) == null ? void 0 : te.cdpTarget.cdpClient))
        return;
      const G = O.result;
      e(this, H) === void 0 && ((he = e(this, F)) == null || he.call(this, o.LogType.debugError, "Unexpectedly no opening prompt event before closing one")), e(this, R).registerEvent({
        type: "event",
        method: s.ChromiumBidi.BrowsingContext.EventNames.UserPromptClosed,
        params: {
          context: this.id,
          accepted: G,
          // `lastUserPromptType` should never be undefined here, so fallback to
          // `UNKNOWN`. The fallback is required to prevent tests from hanging while
          // waiting for the closing event. The cast is required, as the `UNKNOWN` value
          // is not standard.
          type: e(this, H) ?? "UNKNOWN",
          userText: G && O.userInput ? O.userInput : void 0
        }
      }, this.id), P(this, H, void 0);
    }), e(this, A).cdpClient.on("Page.javascriptDialogOpening", (O) => {
      var he, ce;
      if (O.frameId && this.id !== O.frameId || !O.frameId && e(this, S) && e(this, A).cdpClient !== ((he = e(this, K).getContext(e(this, S))) == null ? void 0 : he.cdpTarget.cdpClient))
        return;
      const G = T(ce = i, V, ru).call(ce, O.type);
      P(this, H, G);
      const te = T(this, U, su).call(this, G);
      switch (e(this, R).registerEvent({
        type: "event",
        method: s.ChromiumBidi.BrowsingContext.EventNames.UserPromptOpened,
        params: {
          context: this.id,
          handler: te,
          type: G,
          message: O.message,
          ...O.type === "prompt" ? { defaultValue: O.defaultPrompt } : {}
        }
      }, this.id), te) {
        // Based on `unhandledPromptBehavior`, check if the prompt should be handled
        // automatically (`accept`, `dismiss`) or wait for the user to do it.
        case "accept":
          this.handleUserPrompt(!0);
          break;
        case "dismiss":
          this.handleUserPrompt(!1);
          break;
      }
    }), e(this, A).browserCdpClient.on("Browser.downloadWillBegin", (O) => {
      this.id === O.frameId && (e(this, E).set(O.guid, O.url), e(this, R).registerEvent({
        type: "event",
        method: s.ChromiumBidi.BrowsingContext.EventNames.DownloadWillBegin,
        params: {
          context: this.id,
          suggestedFilename: O.suggestedFilename,
          navigation: O.guid,
          timestamp: (0, h.getTimestamp)(),
          url: O.url
        }
      }, this.id));
    }), e(this, A).browserCdpClient.on("Browser.downloadProgress", (O) => {
      if (!e(this, E).has(O.guid) || O.state === "inProgress")
        return;
      const G = e(this, E).get(O.guid);
      switch (O.state) {
        case "canceled":
          e(this, R).registerEvent({
            type: "event",
            method: s.ChromiumBidi.BrowsingContext.EventNames.DownloadEnd,
            params: {
              status: "canceled",
              context: this.id,
              navigation: O.guid,
              timestamp: (0, h.getTimestamp)(),
              url: G
            }
          }, this.id);
          break;
        case "completed":
          e(this, R).registerEvent({
            type: "event",
            method: s.ChromiumBidi.BrowsingContext.EventNames.DownloadEnd,
            params: {
              filepath: O.filePath ?? null,
              status: "complete",
              context: this.id,
              navigation: O.guid,
              timestamp: (0, h.getTimestamp)(),
              url: G
            }
          }, this.id);
          break;
        default:
          throw new s.UnknownErrorException(`Unknown download state: ${O.state}`);
      }
    });
  }, V = new WeakSet(), ru = function(O) {
    switch (O) {
      case "alert":
        return "alert";
      case "beforeunload":
        return "beforeunload";
      case "confirm":
        return "confirm";
      case "prompt":
        return "prompt";
    }
  }, /**
   * Returns either custom UserContext's prompt handler, global or default one.
   */
  su = function(O) {
    var he, ce, de, re, M, W, J, ee;
    const G = "dismiss", te = e(this, B).getActiveConfig(this.top.id, this.userContext);
    switch (O) {
      case "alert":
        return ((he = te.userPromptHandler) == null ? void 0 : he.alert) ?? ((ce = te.userPromptHandler) == null ? void 0 : ce.default) ?? G;
      case "beforeunload":
        return ((de = te.userPromptHandler) == null ? void 0 : de.beforeUnload) ?? ((re = te.userPromptHandler) == null ? void 0 : re.default) ?? "accept";
      case "confirm":
        return ((M = te.userPromptHandler) == null ? void 0 : M.confirm) ?? ((W = te.userPromptHandler) == null ? void 0 : W.default) ?? G;
      case "prompt":
        return ((J = te.userPromptHandler) == null ? void 0 : J.prompt) ?? ((ee = te.userPromptHandler) == null ? void 0 : ee.default) ?? G;
    }
  }, mn = function(O) {
    O === void 0 || e(this, l) === O || (T(this, U, Ii).call(this), P(this, l, O), T(this, U, gn).call(this, !0));
  }, Ii = function() {
    var O, G;
    e(this, k).DOMContentLoaded.isFinished ? e(this, k).DOMContentLoaded = new r.Deferred() : (O = e(this, F)) == null || O.call(this, i.LOGGER_PREFIX, "Document changed (DOMContentLoaded)"), e(this, k).load.isFinished ? e(this, k).load = new r.Deferred() : (G = e(this, F)) == null || G.call(this, i.LOGGER_PREFIX, "Document changed (load)");
  }, nu = function() {
    e(this, k).DOMContentLoaded.isFinished || e(this, k).DOMContentLoaded.reject(new s.UnknownErrorException("navigation canceled")), e(this, k).load.isFinished || e(this, k).load.reject(new s.UnknownErrorException("navigation canceled"));
  }, _i = async function(O, G, te) {
    if (await Promise.all([te.committed, G]), O !== "none") {
      if (te.isFragmentNavigation === !0) {
        await te.finished;
        return;
      }
      if (O === "interactive") {
        await e(this, k).DOMContentLoaded;
        return;
      }
      if (O === "complete") {
        await e(this, k).load;
        return;
      }
      throw new s.InvalidArgumentException(`Wait condition ${O} is not supported`);
    }
  }, iu = async function(O) {
    switch (O.type) {
      case "box":
        return { x: O.x, y: O.y, width: O.width, height: O.height };
      case "element": {
        const G = await this.getOrCreateHiddenSandbox(), te = await G.callFunction(String((he) => he instanceof Element), !1, { type: "undefined" }, [O.element]);
        if (te.type === "exception")
          throw new s.NoSuchElementException(`Element '${O.element.sharedId}' was not found`);
        if ((0, t.assert)(te.result.type === "boolean"), !te.result.value)
          throw new s.NoSuchElementException(`Node '${O.element.sharedId}' is not an Element`);
        {
          const he = await G.callFunction(String((de) => {
            const re = de.getBoundingClientRect();
            return {
              x: re.x,
              y: re.y,
              height: re.height,
              width: re.width
            };
          }), !1, { type: "undefined" }, [O.element]);
          (0, t.assert)(he.type === "success");
          const ce = b(he.result);
          if (!ce)
            throw new s.UnableToCaptureScreenException(`Could not get bounding box for Element '${O.element.sharedId}'`);
          return ce;
        }
      }
    }
  }, ou = async function(O, G, te, he) {
    switch (G.type) {
      case "context":
        throw new Error("Unreachable");
      case "css":
        return {
          functionDeclaration: String((ce, de, ...re) => {
            const M = (J) => {
              if (!(J instanceof HTMLElement || J instanceof Document || J instanceof DocumentFragment || J instanceof SVGElement))
                throw new Error("startNodes in css selector should be HTMLElement, SVGElement or Document or DocumentFragment");
              return [...J.querySelectorAll(ce)];
            };
            re = re.length > 0 ? re : [document];
            const W = re.map((J) => (
              // TODO: stop search early if `maxNodeCount` is reached.
              M(J)
            )).flat(1);
            return de === 0 ? W : W.slice(0, de);
          }),
          argumentsLocalValues: [
            // `cssSelector`
            { type: "string", value: G.value },
            // `maxNodeCount` with `0` means no limit.
            { type: "number", value: te ?? 0 },
            // `startNodes`
            ...he
          ]
        };
      case "xpath":
        return {
          functionDeclaration: String((ce, de, ...re) => {
            const W = new XPathEvaluator().createExpression(ce), J = (ne) => {
              const ge = W.evaluate(ne, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE), pe = [];
              for (let ye = 0; ye < ge.snapshotLength; ye++)
                pe.push(ge.snapshotItem(ye));
              return pe;
            };
            re = re.length > 0 ? re : [document];
            const ee = re.map((ne) => (
              // TODO: stop search early if `maxNodeCount` is reached.
              J(ne)
            )).flat(1);
            return de === 0 ? ee : ee.slice(0, de);
          }),
          argumentsLocalValues: [
            // `xPathSelector`
            { type: "string", value: G.value },
            // `maxNodeCount` with `0` means no limit.
            { type: "number", value: te ?? 0 },
            // `startNodes`
            ...he
          ]
        };
      case "innerText":
        if (G.value === "")
          throw new s.InvalidSelectorException("innerText locator cannot be empty");
        return {
          functionDeclaration: String((ce, de, re, M, W, ...J) => {
            const ee = re ? ce.toUpperCase() : ce, ne = (pe, ye) => {
              var Le;
              const xe = [];
              if (pe instanceof DocumentFragment || pe instanceof Document)
                return [...pe.children].forEach((Ze) => (
                  // `currentMaxDepth` is not decremented intentionally according to
                  // https://github.com/w3c/webdriver-bidi/pull/713.
                  xe.push(...ne(Ze, ye))
                )), xe;
              if (!(pe instanceof HTMLElement))
                return [];
              const Pe = pe, Me = re ? (Le = Pe.innerText) == null ? void 0 : Le.toUpperCase() : Pe.innerText;
              if (!Me.includes(ee))
                return [];
              const Re = [];
              for (const Ue of Pe.children)
                Ue instanceof HTMLElement && Re.push(Ue);
              if (Re.length === 0)
                de && Me === ee ? xe.push(Pe) : de || xe.push(Pe);
              else {
                const Ue = (
                  // Don't search deeper if `maxDepth` is reached.
                  ye <= 0 ? [] : Re.map((Ze) => ne(Ze, ye - 1)).flat(1)
                );
                Ue.length === 0 ? (!de || Me === ee) && xe.push(Pe) : xe.push(...Ue);
              }
              return xe;
            };
            J = J.length > 0 ? J : [document];
            const ge = J.map((pe) => (
              // TODO: stop search early if `maxNodeCount` is reached.
              ne(pe, W)
            )).flat(1);
            return M === 0 ? ge : ge.slice(0, M);
          }),
          argumentsLocalValues: [
            // `innerTextSelector`
            { type: "string", value: G.value },
            // `fullMatch` with default `true`.
            { type: "boolean", value: G.matchType !== "partial" },
            // `ignoreCase` with default `false`.
            { type: "boolean", value: G.ignoreCase === !0 },
            // `maxNodeCount` with `0` means no limit.
            { type: "number", value: te ?? 0 },
            // `maxDepth` with default `1000` (same as default full serialization depth).
            { type: "number", value: G.maxDepth ?? 1e3 },
            // `startNodes`
            ...he
          ]
        };
      case "accessibility": {
        if (!G.value.name && !G.value.role)
          throw new s.InvalidSelectorException("Either name or role has to be specified");
        await Promise.all([
          e(this, A).cdpClient.sendCommand("Accessibility.enable"),
          e(this, A).cdpClient.sendCommand("Accessibility.getRootAXNode")
        ]);
        const ce = await O.evaluate(
          /* expression=*/
          "({getAccessibleName, getAccessibleRole})",
          /* awaitPromise=*/
          !1,
          "root",
          /* serializationOptions= */
          void 0,
          /* userActivation=*/
          !1,
          /* includeCommandLineApi=*/
          !0
        );
        if (ce.type !== "success")
          throw new Error("Could not get bindings");
        if (ce.result.type !== "object")
          throw new Error("Could not get bindings");
        return {
          functionDeclaration: String((de, re, M, W, ...J) => {
            const ee = [];
            let ne = !1;
            function ge(pe, ye) {
              if (!ne)
                for (const xe of pe) {
                  let Pe = !0;
                  if (ye.role) {
                    const Re = M.getAccessibleRole(xe);
                    ye.role !== Re && (Pe = !1);
                  }
                  if (ye.name) {
                    const Re = M.getAccessibleName(xe);
                    ye.name !== Re && (Pe = !1);
                  }
                  if (Pe) {
                    if (W !== 0 && ee.length === W) {
                      ne = !0;
                      break;
                    }
                    ee.push(xe);
                  }
                  const Me = [];
                  for (const Re of xe.children)
                    Re instanceof HTMLElement && Me.push(Re);
                  ge(Me, ye);
                }
            }
            return J = J.length > 0 ? J : Array.from(document.documentElement.children).filter((pe) => pe instanceof HTMLElement), ge(J, {
              role: re,
              name: de
            }), ee;
          }),
          argumentsLocalValues: [
            // `name`
            { type: "string", value: G.value.name || "" },
            // `role`
            { type: "string", value: G.value.role || "" },
            // `bindings`.
            { handle: ce.result.handle },
            // `maxNodeCount` with `0` means no limit.
            { type: "number", value: te ?? 0 },
            // `startNodes`
            ...he
          ]
        };
      }
    }
  }, au = async function(O, G, te, he, ce) {
    var W, J, ee;
    if (G.type === "context") {
      if (te.length !== 0)
        throw new s.InvalidArgumentException("Start nodes are not supported");
      const ne = G.value.context;
      if (!ne)
        throw new s.InvalidSelectorException("Invalid context");
      const pe = e(this, K).getContext(ne).parent;
      if (!pe)
        throw new s.InvalidArgumentException("This context has no container");
      try {
        const { backendNodeId: ye } = await e(pe, A).cdpClient.sendCommand("DOM.getFrameOwner", {
          frameId: ne
        }), { object: xe } = await e(pe, A).cdpClient.sendCommand("DOM.resolveNode", {
          backendNodeId: ye
        }), Pe = await O.callFunction("function () { return this; }", !1, { handle: xe.objectId }, [], "none", ce);
        if (Pe.type === "exception")
          throw new Error("Unknown exception");
        return { nodes: [Pe.result] };
      } catch {
        throw new s.InvalidArgumentException("Context does not exist");
      }
    }
    const de = await T(this, U, ou).call(this, O, G, he, te);
    ce = {
      ...ce,
      // The returned object is an array of nodes, so no need in deeper JS serialization.
      maxObjectDepth: 1
    };
    const re = await O.callFunction(de.functionDeclaration, !1, { type: "undefined" }, de.argumentsLocalValues, "none", ce);
    if (re.type !== "success")
      throw (W = e(this, F)) == null || W.call(this, i.LOGGER_PREFIX, "Failed locateNodesByLocator", re), // CSS selector.
      (J = re.exceptionDetails.text) != null && J.endsWith("is not a valid selector.") || // XPath selector.
      (ee = re.exceptionDetails.text) != null && ee.endsWith("is not a valid XPath expression.") ? new s.InvalidSelectorException(`Not valid selector ${typeof G.value == "string" ? G.value : JSON.stringify(G.value)}`) : re.exceptionDetails.text === "Error: startNodes in css selector should be HTMLElement, SVGElement or Document or DocumentFragment" ? new s.InvalidArgumentException("startNodes in css selector should be HTMLElement, SVGElement or Document or DocumentFragment") : new s.UnknownErrorException(`Unexpected error in selector script: ${re.exceptionDetails.text}`);
    if (re.result.type !== "array")
      throw new s.UnknownErrorException(`Unexpected selector script result type: ${re.result.type}`);
    return { nodes: re.result.value.map((ne) => {
      if (ne.type !== "node")
        throw new s.UnknownErrorException(`Unexpected selector script result element: ${ne.type}`);
      return ne;
    }) };
  }, lt = function() {
    const O = /* @__PURE__ */ new Set();
    return O.add(this.cdpTarget), this.allChildren.forEach((G) => O.add(G.cdpTarget)), Array.from(O);
  }, y(I, V), X(I, "LOGGER_PREFIX", `${o.LogType.debug}:browsingContext`), I);
  Kt.BrowsingContextImpl = g, i = g;
  function d(ue) {
    return ["://", ""].includes(ue) && (ue = "null"), ue;
  }
  function C(ue) {
    const { quality: O, type: G } = ue.format ?? {
      type: "image/png"
    };
    switch (G) {
      case "image/png":
        return { format: "png" };
      case "image/jpeg":
        return {
          format: "jpeg",
          ...O === void 0 ? {} : { quality: Math.round(O * 100) }
        };
      case "image/webp":
        return {
          format: "webp",
          ...O === void 0 ? {} : { quality: Math.round(O * 100) }
        };
    }
    throw new s.InvalidArgumentException(`Image format '${G}' is not a supported format`);
  }
  function b(ue) {
    var ce, de, re, M;
    if (ue.type !== "object" || ue.value === void 0)
      return;
    const O = (ce = ue.value.find(([W]) => W === "x")) == null ? void 0 : ce[1], G = (de = ue.value.find(([W]) => W === "y")) == null ? void 0 : de[1], te = (re = ue.value.find(([W]) => W === "height")) == null ? void 0 : re[1], he = (M = ue.value.find(([W]) => W === "width")) == null ? void 0 : M[1];
    if (!((O == null ? void 0 : O.type) !== "number" || (G == null ? void 0 : G.type) !== "number" || (te == null ? void 0 : te.type) !== "number" || (he == null ? void 0 : he.type) !== "number"))
      return {
        x: O.value,
        y: G.value,
        width: he.value,
        height: te.value
      };
  }
  function w(ue) {
    return {
      ...ue.width < 0 ? {
        x: ue.x + ue.width,
        width: -ue.width
      } : {
        x: ue.x,
        width: ue.width
      },
      ...ue.height < 0 ? {
        y: ue.y + ue.height,
        height: -ue.height
      } : {
        y: ue.y,
        height: ue.height
      }
    };
  }
  function v(ue, O) {
    ue = w(ue), O = w(O);
    const G = Math.max(ue.x, O.x), te = Math.max(ue.y, O.y);
    return {
      x: G,
      y: te,
      width: Math.max(Math.min(ue.x + ue.width, O.x + O.width) - G, 0),
      height: Math.max(Math.min(ue.y + ue.height, O.y + O.height) - te, 0)
    };
  }
  function p(ue) {
    if (ue = ue.trim(), !/^[0-9]+$/.test(ue))
      throw new s.InvalidArgumentException(`Invalid integer: ${ue}`);
    return parseInt(ue);
  }
  return Kt;
}
var Jr = {}, Na;
function gh() {
  var t, r, o;
  if (Na) return Jr;
  Na = 1, Object.defineProperty(Jr, "__esModule", { value: !0 }), Jr.WorkerRealm = void 0;
  const i = Qc();
  let s = (o = class extends i.Realm {
    constructor(c, m, f, x, g, d, C, b, w) {
      super(c, m, f, x, g, C, b);
      y(this, t);
      y(this, r);
      P(this, r, d), P(this, t, w), this.initialize();
    }
    get associatedBrowsingContexts() {
      return e(this, r).flatMap((c) => c.associatedBrowsingContexts);
    }
    get realmType() {
      return e(this, t);
    }
    get source() {
      var c;
      return {
        realm: this.realmId,
        // This is a hack to make Puppeteer able to track workers.
        // TODO: remove after Puppeteer tracks workers by owners and use the base version.
        context: (c = this.associatedBrowsingContexts[0]) == null ? void 0 : c.id
      };
    }
    get realmInfo() {
      const c = e(this, r).map((f) => f.realmId), { realmType: m } = this;
      switch (m) {
        case "dedicated-worker": {
          const f = c[0];
          if (f === void 0 || c.length !== 1)
            throw new Error("Dedicated worker must have exactly one owner");
          return {
            ...this.baseInfo,
            type: m,
            owners: [f]
          };
        }
        case "service-worker":
        case "shared-worker":
          return {
            ...this.baseInfo,
            type: m
          };
      }
    }
  }, t = new WeakMap(), r = new WeakMap(), o);
  return Jr.WorkerRealm = s, Jr;
}
var Yr = {}, Qr = {}, Zr = {}, Ra;
function mh() {
  if (Ra) return Zr;
  Ra = 1, Object.defineProperty(Zr, "__esModule", { value: !0 }), Zr.logMessageFormatter = r, Zr.getRemoteValuesText = a;
  const i = Lt(), s = ["%s", "%d", "%i", "%f", "%o", "%O", "%c"];
  function t(c) {
    return s.some((m) => c.includes(m));
  }
  function r(c) {
    let m = "";
    const f = c[0].value.toString(), x = c.slice(1, void 0), g = f.split(new RegExp(s.map((d) => `(${d})`).join("|"), "g"));
    for (const d of g)
      if (!(d === void 0 || d === ""))
        if (t(d)) {
          const C = x.shift();
          (0, i.assert)(C, `Less value is provided: "${a(c, !1)}"`), d === "%s" ? m += h(C) : d === "%d" || d === "%i" ? C.type === "bigint" || C.type === "number" || C.type === "string" ? m += parseInt(C.value.toString(), 10) : m += "NaN" : d === "%f" ? C.type === "bigint" || C.type === "number" || C.type === "string" ? m += parseFloat(C.value.toString()) : m += "NaN" : m += o(C);
        } else
          m += d;
    if (x.length > 0)
      throw new Error(`More value is provided: "${a(c, !1)}"`);
    return m;
  }
  function o(c) {
    var m;
    if (c.type !== "array" && c.type !== "bigint" && c.type !== "date" && c.type !== "number" && c.type !== "object" && c.type !== "string")
      return h(c);
    if (c.type === "bigint")
      return `${c.value.toString()}n`;
    if (c.type === "number")
      return c.value.toString();
    if (["date", "string"].includes(c.type))
      return JSON.stringify(c.value);
    if (c.type === "object")
      return `{${c.value.map((f) => `${JSON.stringify(f[0])}:${o(f[1])}`).join(",")}}`;
    if (c.type === "array")
      return `[${((m = c.value) == null ? void 0 : m.map((f) => o(f)).join(",")) ?? ""}]`;
    throw Error(`Invalid value type: ${c}`);
  }
  function h(c) {
    var m, f, x, g;
    if (!Object.hasOwn(c, "value"))
      return c.type;
    switch (c.type) {
      case "string":
      case "number":
      case "boolean":
      case "bigint":
        return String(c.value);
      case "regexp":
        return `/${c.value.pattern}/${c.value.flags ?? ""}`;
      case "date":
        return new Date(c.value).toString();
      case "object":
        return `Object(${((m = c.value) == null ? void 0 : m.length) ?? ""})`;
      case "array":
        return `Array(${((f = c.value) == null ? void 0 : f.length) ?? ""})`;
      case "map":
        return `Map(${(x = c.value) == null ? void 0 : x.length})`;
      case "set":
        return `Set(${(g = c.value) == null ? void 0 : g.length})`;
      default:
        return c.type;
    }
  }
  function a(c, m) {
    const f = c[0];
    return f ? f.type === "string" && t(f.value.toString()) && m ? r(c) : c.map((x) => h(x)).join(" ") : "";
  }
  return Zr;
}
var Oa;
function wh() {
  var m, f, x, g, d, uu, du, w, v, lu;
  if (Oa) return Qr;
  Oa = 1;
  var i;
  Object.defineProperty(Qr, "__esModule", { value: !0 }), Qr.LogManager = void 0;
  const s = Se(), t = qe(), r = mh();
  function o(I) {
    const n = I == null ? void 0 : I.callFrames.map((u) => ({
      columnNumber: u.columnNumber,
      functionName: u.functionName,
      lineNumber: u.lineNumber,
      url: u.url
    }));
    return n ? { callFrames: n } : void 0;
  }
  function h(I) {
    return ["error", "assert"].includes(I) ? "error" : ["debug", "trace"].includes(I) ? "debug" : ["warn", "warning"].includes(I) ? "warn" : "info";
  }
  function a(I) {
    switch (I) {
      case "warning":
        return "warn";
      case "startGroup":
        return "group";
      case "startGroupCollapsed":
        return "groupCollapsed";
      case "endGroup":
        return "groupEnd";
    }
    return I;
  }
  let c = (v = class {
    constructor(n, u, D, E) {
      y(this, d);
      y(this, m);
      y(this, f);
      y(this, x);
      y(this, g);
      P(this, x, n), P(this, f, u), P(this, m, D), P(this, g, E);
    }
    static create(n, u, D, E) {
      var S;
      const l = new i(n, u, D, E);
      return T(S = l, d, du).call(S), l;
    }
  }, m = new WeakMap(), f = new WeakMap(), x = new WeakMap(), g = new WeakMap(), d = new WeakSet(), uu = async function(n, u) {
    switch (n.type) {
      // TODO: Implement regexp, array, object, map and set heuristics base on
      //  preview.
      case "undefined":
        return { type: "undefined" };
      case "boolean":
        return { type: "boolean", value: n.value };
      case "string":
        return { type: "string", value: n.value };
      case "number":
        return { type: "number", value: n.unserializableValue ?? n.value };
      case "bigint":
        if (n.unserializableValue !== void 0 && n.unserializableValue[n.unserializableValue.length - 1] === "n")
          return {
            type: n.type,
            value: n.unserializableValue.slice(0, -1)
          };
        break;
      case "object":
        if (n.subtype === "null")
          return { type: "null" };
        break;
    }
    return await u.serializeCdpObject(
      n,
      "none"
      /* Script.ResultOwnership.None */
    );
  }, du = function() {
    e(this, x).cdpClient.on("Runtime.consoleAPICalled", (n) => {
      var E;
      const u = e(this, f).findRealm({
        cdpSessionId: e(this, x).cdpSessionId,
        executionContextId: n.executionContextId
      });
      if (u === void 0) {
        (E = e(this, g)) == null || E.call(this, t.LogType.cdp, n);
        return;
      }
      const D = Promise.all(n.args.map((l) => T(this, d, uu).call(this, l, u)));
      for (const l of u.associatedBrowsingContexts)
        e(this, m).registerPromiseEvent(D.then((S) => ({
          kind: "success",
          value: {
            type: "event",
            method: s.ChromiumBidi.Log.EventNames.LogEntryAdded,
            params: {
              level: h(n.type),
              source: u.source,
              text: (0, r.getRemoteValuesText)(S, !0),
              timestamp: Math.round(n.timestamp),
              stackTrace: o(n.stackTrace),
              type: "console",
              method: a(n.type),
              args: S
            }
          }
        }), (S) => ({
          kind: "error",
          error: S
        })), l.id, s.ChromiumBidi.Log.EventNames.LogEntryAdded);
    }), e(this, x).cdpClient.on("Runtime.exceptionThrown", (n) => {
      var D, E;
      const u = e(this, f).findRealm({
        cdpSessionId: e(this, x).cdpSessionId,
        executionContextId: n.exceptionDetails.executionContextId
      });
      if (u === void 0) {
        (D = e(this, g)) == null || D.call(this, t.LogType.cdp, n);
        return;
      }
      for (const l of u.associatedBrowsingContexts)
        e(this, m).registerPromiseEvent(T(E = i, w, lu).call(E, n, u).then((S) => ({
          kind: "success",
          value: {
            type: "event",
            method: s.ChromiumBidi.Log.EventNames.LogEntryAdded,
            params: {
              level: "error",
              source: u.source,
              text: S,
              timestamp: Math.round(n.timestamp),
              stackTrace: o(n.exceptionDetails.stackTrace),
              type: "javascript"
            }
          }
        }), (S) => ({
          kind: "error",
          error: S
        })), l.id, s.ChromiumBidi.Log.EventNames.LogEntryAdded);
    });
  }, w = new WeakSet(), lu = async function(n, u) {
    return n.exceptionDetails.exception ? u === void 0 ? JSON.stringify(n.exceptionDetails.exception) : await u.stringifyObject(n.exceptionDetails.exception) : n.exceptionDetails.text;
  }, y(v, w), v);
  return Qr.LogManager = c, i = c, Qr;
}
var ii = {}, es = {}, Ba;
function vh() {
  var o, h, a, c, m, f, wn, hu, d;
  if (Ba) return es;
  Ba = 1, Object.defineProperty(es, "__esModule", { value: !0 }), es.CollectorsStorage = void 0;
  const i = Js(), s = qe(), t = wt();
  let r = (d = class {
    constructor(b, w) {
      y(this, f);
      y(this, o, /* @__PURE__ */ new Map());
      y(this, h, /* @__PURE__ */ new Map());
      y(this, a, /* @__PURE__ */ new Map());
      y(this, c);
      y(this, m);
      P(this, c, b), P(this, m, w);
    }
    addDataCollector(b) {
      if (b.maxEncodedDataSize < 1 || b.maxEncodedDataSize > e(this, c))
        throw new i.InvalidArgumentException(`Max encoded data size should be between 1 and ${e(this, c)}`);
      const w = (0, t.uuidv4)();
      return e(this, o).set(w, b), w;
    }
    isCollected(b, w, v) {
      if (v !== void 0 && !e(this, o).has(v))
        throw new i.NoSuchNetworkCollectorException(`Unknown collector ${v}`);
      if (w === void 0)
        return this.isCollected(b, "response", v) || this.isCollected(b, "request", v);
      const p = T(this, f, wn).call(this, w).get(b);
      return p === void 0 || p.size === 0 ? !1 : v === void 0 ? !0 : !!p.has(v);
    }
    disownData(b, w, v) {
      var I, n;
      const p = T(this, f, wn).call(this, w);
      v !== void 0 && ((I = p.get(b)) == null || I.delete(v)), (v === void 0 || ((n = p.get(b)) == null ? void 0 : n.size) === 0) && p.delete(b);
    }
    collectIfNeeded(b, w, v, p) {
      const I = [...e(this, o).keys()].filter((n) => T(this, f, hu).call(this, n, b, w, v, p));
      I.length > 0 && T(this, f, wn).call(this, w).set(b.id, new Set(I));
    }
    removeDataCollector(b) {
      if (!e(this, o).has(b))
        throw new i.NoSuchNetworkCollectorException(`Collector ${b} does not exist`);
      e(this, o).delete(b);
      const w = [];
      for (const [v, p] of e(this, h))
        p.has(b) && (p.delete(b), p.size === 0 && (e(this, h).delete(v), w.push(v)));
      for (const [v, p] of e(this, a))
        p.has(b) && (p.delete(b), p.size === 0 && (e(this, a).delete(v), w.push(v)));
      return w;
    }
  }, o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c = new WeakMap(), m = new WeakMap(), f = new WeakSet(), wn = function(b) {
    switch (b) {
      case "response":
        return e(this, h);
      case "request":
        return e(this, a);
      default:
        throw new i.UnsupportedOperationException(`Unsupported data type ${b}`);
    }
  }, hu = function(b, w, v, p, I) {
    var u, D, E;
    const n = e(this, o).get(b);
    if (n === void 0)
      throw new i.NoSuchNetworkCollectorException(`Unknown collector ${b}`);
    return n.userContexts && !n.userContexts.includes(I) || n.contexts && !n.contexts.includes(p) || !n.dataTypes.includes(v) ? !1 : v === "request" && w.bodySize > n.maxEncodedDataSize ? ((u = e(this, m)) == null || u.call(this, s.LogType.debug, `Request's ${w.id} body size is too big for the collector ${b}`), !1) : v === "response" && w.encodedResponseBodySize > n.maxEncodedDataSize ? ((D = e(this, m)) == null || D.call(this, s.LogType.debug, `Request's ${w.id} response is too big for the collector ${b}`), !1) : ((E = e(this, m)) == null || E.call(this, s.LogType.debug, `Collector ${b} collected ${v} of ${w.id}`), !0);
  }, d);
  return es.CollectorsStorage = r, es;
}
var ts = {}, rs = {}, Aa;
function pu() {
  var s, t;
  if (Aa) return rs;
  Aa = 1, Object.defineProperty(rs, "__esModule", { value: !0 }), rs.DefaultMap = void 0;
  let i = (t = class extends Map {
    constructor(h, a) {
      super(a);
      /** The default value to return whenever a key is not present in the map. */
      y(this, s);
      P(this, s, h);
    }
    get(h) {
      return this.has(h) || this.set(h, e(this, s).call(this, h)), super.get(h);
    }
  }, s = new WeakMap(), t);
  return rs.DefaultMap = i, rs;
}
var Ma;
function yh() {
  var g, d, C, b, w, v, p, I, n, u, D, E, l, S, N, k, ki, Ti, fu, gu, mu, Di, vs, Jt, Ni, wu, vu, yu, Ri, bt, ze, vn, Oi, Yt, Qt, Zt, yn, Cu, bu, xu, Eu, Su, Pu, Iu, Cn, ce, _u;
  if (Ma) return ts;
  Ma = 1;
  var i;
  Object.defineProperty(ts, "__esModule", { value: !0 }), ts.NetworkRequest = void 0;
  const s = Se(), t = Lt(), r = pu(), o = Vn(), h = qe(), a = Gn(), c = new RegExp('(?<=realm=").*(?=")');
  let m = (g = class {
    constructor(M, W, J, ee, ne = 0, ge) {
      y(this, k);
      /**
       * Each network request has an associated request id, which is a string
       * uniquely identifying that request.
       *
       * The identifier for a request resulting from a redirect matches that of the
       * request that initiated it.
       */
      y(this, d);
      y(this, C);
      /**
       * Indicates the network intercept phase, if the request is currently blocked.
       * Undefined necessarily implies that the request is not blocked.
       */
      y(this, b);
      y(this, w, !1);
      y(this, v);
      y(this, p, {});
      y(this, I);
      y(this, n);
      y(this, u, {
        decodedSize: 0,
        encodedSize: 0
      });
      y(this, D);
      y(this, E);
      y(this, l);
      y(this, S);
      y(this, N, {
        [s.ChromiumBidi.Network.EventNames.AuthRequired]: !1,
        [s.ChromiumBidi.Network.EventNames.BeforeRequestSent]: !1,
        [s.ChromiumBidi.Network.EventNames.FetchError]: !1,
        [s.ChromiumBidi.Network.EventNames.ResponseCompleted]: !1,
        [s.ChromiumBidi.Network.EventNames.ResponseStarted]: !1
      });
      X(this, "waitNextPhase", new o.Deferred());
      P(this, d, M), P(this, D, W), P(this, E, J), P(this, l, ee), P(this, v, ne), P(this, S, ge);
    }
    get id() {
      return e(this, d);
    }
    get fetchId() {
      return e(this, C);
    }
    /**
     * When blocked returns the phase for it
     */
    get interceptPhase() {
      return e(this, b);
    }
    get url() {
      var J, ee, ne, ge, pe, ye, xe, Pe;
      const M = ((J = e(this, p).info) == null ? void 0 : J.request.urlFragment) ?? ((ee = e(this, p).paused) == null ? void 0 : ee.request.urlFragment) ?? "";
      return `${((ne = e(this, u).paused) == null ? void 0 : ne.request.url) ?? ((ge = e(this, I)) == null ? void 0 : ge.url) ?? ((pe = e(this, u).info) == null ? void 0 : pe.url) ?? ((ye = e(this, p).auth) == null ? void 0 : ye.request.url) ?? ((xe = e(this, p).info) == null ? void 0 : xe.request.url) ?? ((Pe = e(this, p).paused) == null ? void 0 : Pe.request.url) ?? i.unknownParameter}${M}`;
    }
    get redirectCount() {
      return e(this, v);
    }
    get cdpTarget() {
      return e(this, l);
    }
    /** CdpTarget can be changed when frame is moving out of process. */
    updateCdpTarget(M) {
      var W;
      M !== e(this, l) && ((W = e(this, S)) == null || W.call(this, h.LogType.debugInfo, `Request ${this.id} was moved from ${e(this, l).id} to ${M.id}`), P(this, l, M));
    }
    get cdpClient() {
      return e(this, l).cdpClient;
    }
    isRedirecting() {
      return !!e(this, p).info;
    }
    get bodySize() {
      var M, W, J, ee, ne;
      return typeof ((M = e(this, I)) == null ? void 0 : M.bodySize) == "number" ? e(this, I).bodySize : ((W = e(this, p).info) == null ? void 0 : W.request.postDataEntries) !== void 0 ? (0, a.bidiBodySizeFromCdpPostDataEntries)((J = e(this, p).info) == null ? void 0 : J.request.postDataEntries) : T(this, k, Di).call(this, (ee = e(this, p).info) == null ? void 0 : ee.request.headers) ?? T(this, k, Di).call(this, (ne = e(this, p).extraInfo) == null ? void 0 : ne.headers) ?? 0;
    }
    handleRedirect(M) {
      e(this, u).hasExtraInfo = !1, e(this, u).decodedSize = 0, e(this, u).encodedSize = 0, e(this, u).info = M.redirectResponse, T(this, k, ze).call(this, {
        wasRedirected: !0
      });
    }
    onRequestWillBeSentEvent(M) {
      e(this, p).info = M, e(this, E).collectIfNeeded(
        this,
        "request"
        /* Network.DataType.Request */
      ), T(this, k, ze).call(this);
    }
    onRequestWillBeSentExtraInfoEvent(M) {
      e(this, p).extraInfo = M, T(this, k, ze).call(this);
    }
    onResponseReceivedExtraInfoEvent(M) {
      M.statusCode >= 300 && M.statusCode <= 399 && e(this, p).info && M.headers.location === e(this, p).info.request.url || (e(this, u).extraInfo = M, T(this, k, ze).call(this));
    }
    onResponseReceivedEvent(M) {
      e(this, u).hasExtraInfo = M.hasExtraInfo, e(this, u).info = M.response, e(this, E).collectIfNeeded(
        this,
        "response"
        /* Network.DataType.Response */
      ), T(this, k, ze).call(this);
    }
    onServedFromCache() {
      P(this, w, !0), T(this, k, ze).call(this);
    }
    onLoadingFinishedEvent(M) {
      e(this, u).loadingFinished = M, T(this, k, ze).call(this);
    }
    onDataReceivedEvent(M) {
      e(this, u).decodedSize += M.dataLength, e(this, u).encodedSize += M.encodedDataLength;
    }
    onLoadingFailedEvent(M) {
      e(this, u).loadingFailed = M, T(this, k, ze).call(this), T(this, k, Qt).call(this, () => ({
        method: s.ChromiumBidi.Network.EventNames.FetchError,
        params: {
          ...T(this, k, Zt).call(this),
          errorText: M.errorText
        }
      }));
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-failRequest */
    async failRequest(M) {
      (0, t.assert)(e(this, C), "Network Interception not set-up."), await this.cdpClient.sendCommand("Fetch.failRequest", {
        requestId: e(this, C),
        errorReason: M
      }), P(this, b, void 0);
    }
    onRequestPaused(M) {
      P(this, C, M.requestId), M.responseStatusCode || M.responseErrorReason ? (e(this, u).paused = M, T(this, k, bt).call(this, "responseStarted") && // CDP may emit multiple events for a single request
      !e(this, N)[s.ChromiumBidi.Network.EventNames.ResponseStarted] && // Continue all response that have not enabled Network domain
      e(this, C) !== this.id ? P(this, b, "responseStarted") : T(this, k, Oi).call(this)) : (e(this, p).paused = M, T(this, k, bt).call(this, "beforeRequestSent") && // CDP may emit multiple events for a single request
      !e(this, N)[s.ChromiumBidi.Network.EventNames.BeforeRequestSent] && // Continue all requests that have not enabled Network domain
      e(this, C) !== this.id ? P(this, b, "beforeRequestSent") : T(this, k, vn).call(this)), T(this, k, ze).call(this);
    }
    onAuthRequired(M) {
      P(this, C, M.requestId), e(this, p).auth = M, T(this, k, bt).call(this, "authRequired") && // Continue all auth requests that have not enabled Network domain
      e(this, C) !== this.id ? (P(this, b, "authRequired"), T(this, k, ze).call(this)) : T(this, k, Yt).call(this, {
        response: "Default"
      }), T(this, k, Qt).call(this, () => ({
        method: s.ChromiumBidi.Network.EventNames.AuthRequired,
        params: {
          ...T(this, k, Zt).call(this, "authRequired"),
          response: T(this, k, yn).call(this)
        }
      }));
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueRequest */
    async continueRequest(M = {}) {
      const W = T(this, k, Cn).call(this, M.headers, M.cookies), J = (0, a.cdpFetchHeadersFromBidiNetworkHeaders)(W), ee = f(M.body);
      await T(this, k, vn).call(this, {
        url: M.url,
        method: M.method,
        headers: J,
        postData: ee
      }), P(this, I, {
        url: M.url,
        method: M.method,
        headers: M.headers,
        cookies: M.cookies,
        bodySize: x(M.body)
      });
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueResponse */
    async continueResponse(M = {}) {
      var W, J, ee;
      if (this.interceptPhase === "authRequired")
        if (M.credentials)
          await Promise.all([
            this.waitNextPhase,
            await T(this, k, Yt).call(this, {
              response: "ProvideCredentials",
              username: M.credentials.username,
              password: M.credentials.password
            })
          ]);
        else
          return await T(this, k, Yt).call(this, {
            response: "ProvideCredentials"
          });
      if (e(this, b) === "responseStarted") {
        const ne = T(this, k, Cn).call(this, M.headers, M.cookies), ge = (0, a.cdpFetchHeadersFromBidiNetworkHeaders)(ne);
        await T(this, k, Oi).call(this, {
          responseCode: M.statusCode ?? ((W = e(this, u).paused) == null ? void 0 : W.responseStatusCode),
          responsePhrase: M.reasonPhrase ?? ((J = e(this, u).paused) == null ? void 0 : J.responseStatusText),
          responseHeaders: ge ?? ((ee = e(this, u).paused) == null ? void 0 : ee.responseHeaders)
        }), P(this, n, {
          statusCode: M.statusCode,
          headers: ne
        });
      }
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueWithAuth */
    async continueWithAuth(M) {
      let W, J;
      if (M.action === "provideCredentials") {
        const { credentials: ne } = M;
        W = ne.username, J = ne.password;
      }
      const ee = (0, a.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction)(M.action);
      await T(this, k, Yt).call(this, {
        response: ee,
        username: W,
        password: J
      });
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-provideResponse */
    async provideResponse(M) {
      if ((0, t.assert)(e(this, C), "Network Interception not set-up."), this.interceptPhase === "authRequired")
        return await T(this, k, Yt).call(this, {
          response: "ProvideCredentials"
        });
      if (!M.body && !M.headers)
        return await T(this, k, vn).call(this);
      const W = T(this, k, Cn).call(this, M.headers, M.cookies), J = (0, a.cdpFetchHeadersFromBidiNetworkHeaders)(W), ee = M.statusCode ?? e(this, k, Jt) ?? 200;
      await this.cdpClient.sendCommand("Fetch.fulfillRequest", {
        requestId: e(this, C),
        responseCode: ee,
        responsePhrase: M.reasonPhrase,
        responseHeaders: J,
        body: f(M.body)
      }), P(this, b, void 0);
    }
    dispose() {
      this.waitNextPhase.reject(new Error("waitNextPhase disposed"));
    }
    get encodedResponseBodySize() {
      var M, W;
      return ((M = e(this, u).loadingFinished) == null ? void 0 : M.encodedDataLength) ?? ((W = e(this, u).info) == null ? void 0 : W.encodedDataLength) ?? e(this, u).encodedSize ?? 0;
    }
  }, d = new WeakMap(), C = new WeakMap(), b = new WeakMap(), w = new WeakMap(), v = new WeakMap(), p = new WeakMap(), I = new WeakMap(), n = new WeakMap(), u = new WeakMap(), D = new WeakMap(), E = new WeakMap(), l = new WeakMap(), S = new WeakMap(), N = new WeakMap(), k = new WeakSet(), ki = function() {
    return this.url.startsWith("data:");
  }, Ti = function() {
    return (
      // We can't intercept data urls from CDP
      T(this, k, ki).call(this) || // Cached requests never hit the network
      e(this, w)
    );
  }, fu = function() {
    var M, W, J, ee, ne;
    return ((M = e(this, I)) == null ? void 0 : M.method) ?? ((W = e(this, p).info) == null ? void 0 : W.request.method) ?? ((J = e(this, p).paused) == null ? void 0 : J.request.method) ?? ((ee = e(this, p).auth) == null ? void 0 : ee.request.method) ?? ((ne = e(this, u).paused) == null ? void 0 : ne.request.method);
  }, gu = function() {
    return !e(this, p).info || !e(this, p).info.loaderId || // When we navigate all CDP network events have `loaderId`
    // CDP's `loaderId` and `requestId` match when
    // that request triggered the loading
    e(this, p).info.loaderId !== e(this, p).info.requestId ? null : e(this, E).getNavigationId(e(this, k, vs) ?? void 0);
  }, mu = function() {
    let M = [];
    return e(this, p).extraInfo && (M = e(this, p).extraInfo.associatedCookies.filter(({ blockedReasons: W }) => !Array.isArray(W) || W.length === 0).map(({ cookie: W }) => (0, a.cdpToBiDiCookie)(W))), M;
  }, Di = function(M) {
    var W;
    if (M !== void 0 && M["Content-Length"] !== void 0) {
      const J = Number.parseInt(M["Content-Length"]);
      if (Number.isInteger(J))
        return J;
      (W = e(this, S)) == null || W.call(this, h.LogType.debugError, "Unexpected non-integer 'Content-Length' header");
    }
  }, vs = function() {
    var W, J, ee, ne, ge, pe, ye, xe, Pe, Me, Re;
    const M = ((W = e(this, u).paused) == null ? void 0 : W.frameId) ?? ((J = e(this, p).info) == null ? void 0 : J.frameId) ?? ((ee = e(this, p).paused) == null ? void 0 : ee.frameId) ?? ((ne = e(this, p).auth) == null ? void 0 : ne.frameId);
    if (M !== void 0)
      return M;
    if (((pe = (ge = e(this, p)) == null ? void 0 : ge.info) == null ? void 0 : pe.initiator.type) === "preflight" && ((xe = (ye = e(this, p)) == null ? void 0 : ye.info) == null ? void 0 : xe.initiator.requestId) !== void 0) {
      const Le = e(this, E).getRequestById((Me = (Pe = e(this, p)) == null ? void 0 : Pe.info) == null ? void 0 : Me.initiator.requestId);
      if (Le !== void 0)
        return ((Re = e(Le, p).info) == null ? void 0 : Re.frameId) ?? null;
    }
    return null;
  }, Jt = function() {
    var M, W, J, ee;
    return ((M = e(this, n)) == null ? void 0 : M.statusCode) ?? ((W = e(this, u).paused) == null ? void 0 : W.responseStatusCode) ?? ((J = e(this, u).extraInfo) == null ? void 0 : J.statusCode) ?? ((ee = e(this, u).info) == null ? void 0 : ee.status);
  }, Ni = function() {
    var W, J, ee;
    let M = [];
    if ((W = e(this, I)) != null && W.headers) {
      const ne = new r.DefaultMap(() => []);
      for (const ge of e(this, I).headers)
        ne.get(ge.name).push(ge.value.value);
      for (const [ge, pe] of ne.entries())
        M.push({
          name: ge,
          value: {
            type: "string",
            value: pe.join(`
`).trimEnd()
          }
        });
    } else
      M = [
        ...(0, a.bidiNetworkHeadersFromCdpNetworkHeaders)((J = e(this, p).info) == null ? void 0 : J.request.headers),
        ...(0, a.bidiNetworkHeadersFromCdpNetworkHeaders)((ee = e(this, p).extraInfo) == null ? void 0 : ee.headers)
      ];
    return M;
  }, wu = function() {
    var J;
    if (!e(this, u).info || !(e(this, k, Jt) === 401 || e(this, k, Jt) === 407))
      return;
    const M = e(this, k, Jt) === 401 ? "WWW-Authenticate" : "Proxy-Authenticate", W = [];
    for (const [ee, ne] of Object.entries(e(this, u).info.headers))
      ee.localeCompare(M, void 0, { sensitivity: "base" }) === 0 && W.push({
        scheme: ne.split(" ").at(0) ?? "",
        realm: ((J = ne.match(c)) == null ? void 0 : J.at(0)) ?? ""
      });
    return W;
  }, vu = function() {
    var W, J, ee, ne, ge, pe, ye, xe, Pe, Me, Re, Le, Ue, Ze, wr, Qs, Zs, vo, yo, Co, bo, xo;
    const M = (0, a.getTiming)((0, a.getTiming)((J = (W = e(this, u).info) == null ? void 0 : W.timing) == null ? void 0 : J.requestTime) - (0, a.getTiming)((ee = e(this, p).info) == null ? void 0 : ee.timestamp));
    return {
      // TODO: Verify this is correct
      timeOrigin: Math.round((0, a.getTiming)((ne = e(this, p).info) == null ? void 0 : ne.wallTime) * 1e3),
      // Timing baseline.
      // TODO: Verify this is correct.
      requestTime: 0,
      // TODO: set if redirect detected.
      redirectStart: 0,
      // TODO: set if redirect detected.
      redirectEnd: 0,
      // TODO: Verify this is correct
      // https://source.chromium.org/chromium/chromium/src/+/main:net/base/load_timing_info.h;l=145
      fetchStart: (0, a.getTiming)((pe = (ge = e(this, u).info) == null ? void 0 : ge.timing) == null ? void 0 : pe.workerFetchStart, M),
      // fetchStart: 0,
      dnsStart: (0, a.getTiming)((xe = (ye = e(this, u).info) == null ? void 0 : ye.timing) == null ? void 0 : xe.dnsStart, M),
      dnsEnd: (0, a.getTiming)((Me = (Pe = e(this, u).info) == null ? void 0 : Pe.timing) == null ? void 0 : Me.dnsEnd, M),
      connectStart: (0, a.getTiming)((Le = (Re = e(this, u).info) == null ? void 0 : Re.timing) == null ? void 0 : Le.connectStart, M),
      connectEnd: (0, a.getTiming)((Ze = (Ue = e(this, u).info) == null ? void 0 : Ue.timing) == null ? void 0 : Ze.connectEnd, M),
      tlsStart: (0, a.getTiming)((Qs = (wr = e(this, u).info) == null ? void 0 : wr.timing) == null ? void 0 : Qs.sslStart, M),
      requestStart: (0, a.getTiming)((vo = (Zs = e(this, u).info) == null ? void 0 : Zs.timing) == null ? void 0 : vo.sendStart, M),
      // https://source.chromium.org/chromium/chromium/src/+/main:net/base/load_timing_info.h;l=196
      responseStart: (0, a.getTiming)((Co = (yo = e(this, u).info) == null ? void 0 : yo.timing) == null ? void 0 : Co.receiveHeadersStart, M),
      responseEnd: (0, a.getTiming)((xo = (bo = e(this, u).info) == null ? void 0 : bo.timing) == null ? void 0 : xo.receiveHeadersEnd, M)
    };
  }, yu = function() {
    this.waitNextPhase.resolve(), this.waitNextPhase = new o.Deferred();
  }, Ri = function(M) {
    return T(this, k, Ti).call(this) || !e(this, l).isSubscribedTo(`network.${M}`) ? /* @__PURE__ */ new Set() : e(this, E).getInterceptsForPhase(this, M);
  }, bt = function(M) {
    return T(this, k, Ri).call(this, M).size > 0;
  }, ze = function(M = {}) {
    const W = (
      // Flush redirects
      M.wasRedirected || !!e(this, u).loadingFailed || T(this, k, ki).call(this) || !!e(this, p).extraInfo || // If the request is intercepted during the `authRequired` phase, there
      // will be no `Network.requestWillBeSentExtraInfo` CDP events.
      T(this, k, bt).call(this, "authRequired") || // Requests from cache don't have extra info
      e(this, w) || // Sometimes there is no extra info and the response
      // is the only place we can find out
      !!(e(this, u).info && !e(this, u).hasExtraInfo)
    ), J = T(this, k, Ti).call(this), ee = !J && T(this, k, bt).call(this, "beforeRequestSent"), ne = !ee || ee && !!e(this, p).paused;
    e(this, p).info && (ee ? ne : W) && T(this, k, Qt).call(this, T(this, k, Eu).bind(this));
    const ge = !!e(this, u).extraInfo || // Response from cache don't have extra info
    e(this, w) || // Don't expect extra info if the flag is false
    !!(e(this, u).info && !e(this, u).hasExtraInfo), pe = !J && T(this, k, bt).call(this, "responseStarted");
    (e(this, u).info || pe && e(this, u).paused) && T(this, k, Qt).call(this, T(this, k, Su).bind(this));
    const ye = !pe || pe && !!e(this, u).paused, xe = !!e(this, u).loadingFailed || !!e(this, u).loadingFinished;
    e(this, u).info && ge && ye && (xe || M.wasRedirected) && (T(this, k, Qt).call(this, T(this, k, Pu).bind(this)), e(this, E).disposeRequest(this.id));
  }, vn = async function(M = {}) {
    (0, t.assert)(e(this, C), "Network Interception not set-up."), await this.cdpClient.sendCommand("Fetch.continueRequest", {
      requestId: e(this, C),
      url: M.url,
      method: M.method,
      headers: M.headers,
      postData: M.postData
    }), P(this, b, void 0);
  }, Oi = async function({ responseCode: M, responsePhrase: W, responseHeaders: J } = {}) {
    (0, t.assert)(e(this, C), "Network Interception not set-up."), await this.cdpClient.sendCommand("Fetch.continueResponse", {
      requestId: e(this, C),
      responseCode: M,
      responsePhrase: W,
      responseHeaders: J
    }), P(this, b, void 0);
  }, Yt = async function(M) {
    (0, t.assert)(e(this, C), "Network Interception not set-up."), await this.cdpClient.sendCommand("Fetch.continueWithAuth", {
      requestId: e(this, C),
      authChallengeResponse: M
    }), P(this, b, void 0);
  }, Qt = function(M) {
    var J;
    let W;
    try {
      W = M();
    } catch (ee) {
      (J = e(this, S)) == null || J.call(this, h.LogType.debugError, ee);
      return;
    }
    T(this, k, Iu).call(this) || e(this, N)[W.method] && // Special case this event can be emitted multiple times
    W.method !== s.ChromiumBidi.Network.EventNames.AuthRequired || (T(this, k, yu).call(this), e(this, N)[W.method] = !0, e(this, k, vs) ? e(this, D).registerEvent(Object.assign(W, {
      type: "event"
    }), e(this, k, vs)) : e(this, D).registerGlobalEvent(Object.assign(W, {
      type: "event"
    })));
  }, Zt = function(M) {
    var J;
    const W = {
      isBlocked: !1
    };
    if (M) {
      const ee = T(this, k, Ri).call(this, M);
      W.isBlocked = ee.size > 0, W.isBlocked && (W.intercepts = [...ee]);
    }
    return {
      context: e(this, k, vs),
      navigation: e(this, k, gu),
      redirectCount: e(this, v),
      request: T(this, k, Cu).call(this),
      // Timestamp should be in milliseconds, while CDP provides it in seconds.
      timestamp: Math.round((0, a.getTiming)((J = e(this, p).info) == null ? void 0 : J.wallTime) * 1e3),
      // Contains isBlocked and intercepts
      ...W
    };
  }, yn = function() {
    var ge, pe, ye, xe, Pe, Me, Re, Le, Ue, Ze, wr;
    (ge = e(this, u).info) != null && ge.fromDiskCache && (e(this, u).extraInfo = void 0);
    const M = ((pe = e(this, u).info) == null ? void 0 : pe.headers) ?? {}, W = ((ye = e(this, u).extraInfo) == null ? void 0 : ye.headers) ?? {};
    for (const [Qs, Zs] of Object.entries(W))
      M[Qs] = Zs;
    const J = (0, a.bidiNetworkHeadersFromCdpNetworkHeaders)(M), ee = e(this, k, wu);
    return {
      ...{
        url: this.url,
        protocol: ((xe = e(this, u).info) == null ? void 0 : xe.protocol) ?? "",
        status: e(this, k, Jt) ?? -1,
        // TODO: Throw an exception or use some other status code?
        statusText: ((Pe = e(this, u).info) == null ? void 0 : Pe.statusText) || ((Me = e(this, u).paused) == null ? void 0 : Me.responseStatusText) || "",
        fromCache: ((Re = e(this, u).info) == null ? void 0 : Re.fromDiskCache) || ((Le = e(this, u).info) == null ? void 0 : Le.fromPrefetchCache) || e(this, w),
        headers: ((Ue = e(this, n)) == null ? void 0 : Ue.headers) ?? J,
        mimeType: ((Ze = e(this, u).info) == null ? void 0 : Ze.mimeType) || "",
        // TODO: this should be the size for the entire HTTP response.
        bytesReceived: this.encodedResponseBodySize,
        headersSize: (0, a.computeHeadersSize)(J),
        bodySize: this.encodedResponseBodySize,
        content: {
          size: e(this, u).decodedSize ?? 0
        },
        ...ee ? { authChallenges: ee } : {}
      },
      "goog:securityDetails": (wr = e(this, u).info) == null ? void 0 : wr.securityDetails
    };
  }, Cu = function() {
    var J, ee, ne, ge, pe, ye;
    const M = e(this, k, Ni);
    return {
      ...{
        request: e(this, d),
        url: this.url,
        method: e(this, k, fu) ?? i.unknownParameter,
        headers: M,
        cookies: e(this, k, mu),
        headersSize: (0, a.computeHeadersSize)(M),
        bodySize: this.bodySize,
        // TODO: populate
        destination: T(this, k, bu).call(this),
        // TODO: populate
        initiatorType: T(this, k, xu).call(this),
        timings: e(this, k, vu)
      },
      "goog:postData": (ee = (J = e(this, p).info) == null ? void 0 : J.request) == null ? void 0 : ee.postData,
      "goog:hasPostData": (ge = (ne = e(this, p).info) == null ? void 0 : ne.request) == null ? void 0 : ge.hasPostData,
      "goog:resourceType": (pe = e(this, p).info) == null ? void 0 : pe.type,
      "goog:resourceInitiator": (ye = e(this, p).info) == null ? void 0 : ye.initiator
    };
  }, /**
   * Heuristic trying to guess the destination.
   * Specification: https://fetch.spec.whatwg.org/#concept-request-destination.
   * Specified values: "audio", "audioworklet", "document", "embed", "font", "frame",
   * "iframe", "image", "json", "manifest", "object", "paintworklet", "report", "script",
   * "serviceworker", "sharedworker", "style", "track", "video", "webidentity", "worker",
   * "xslt".
   */
  bu = function() {
    var M, W;
    switch ((M = e(this, p).info) == null ? void 0 : M.type) {
      case "Script":
        return "script";
      case "Stylesheet":
        return "style";
      case "Image":
        return "image";
      case "Document":
        return ((W = e(this, p).info) == null ? void 0 : W.initiator.type) === "parser" ? "iframe" : "document";
      default:
        return "";
    }
  }, /**
   * Heuristic trying to guess the initiator type.
   * Specification: https://fetch.spec.whatwg.org/#request-initiator-type.
   * Specified values: "audio", "beacon", "body", "css", "early-hints", "embed", "fetch",
   * "font", "frame", "iframe", "image", "img", "input", "link", "object", "ping",
   * "script", "track", "video", "xmlhttprequest", "other".
   */
  xu = function() {
    var M, W, J, ee, ne, ge, pe, ye, xe, Pe;
    if (((M = e(this, p).info) == null ? void 0 : M.initiator.type) === "parser")
      switch ((W = e(this, p).info) == null ? void 0 : W.type) {
        case "Document":
          return "iframe";
        case "Font":
          return ((ee = (J = e(this, p).info) == null ? void 0 : J.initiator) == null ? void 0 : ee.url) === ((ne = e(this, p).info) == null ? void 0 : ne.documentURL) ? "font" : "css";
        case "Image":
          return ((pe = (ge = e(this, p).info) == null ? void 0 : ge.initiator) == null ? void 0 : pe.url) === ((ye = e(this, p).info) == null ? void 0 : ye.documentURL) ? "img" : "css";
        case "Script":
          return "script";
        case "Stylesheet":
          return "link";
        default:
          return null;
      }
    return ((Pe = (xe = e(this, p)) == null ? void 0 : xe.info) == null ? void 0 : Pe.type) === "Fetch" ? "fetch" : null;
  }, Eu = function() {
    var M;
    return (0, t.assert)(e(this, p).info, "RequestWillBeSentEvent is not set"), {
      method: s.ChromiumBidi.Network.EventNames.BeforeRequestSent,
      params: {
        ...T(this, k, Zt).call(this, "beforeRequestSent"),
        initiator: {
          type: T(M = i, ce, _u).call(M, e(this, p).info.initiator.type),
          columnNumber: e(this, p).info.initiator.columnNumber,
          lineNumber: e(this, p).info.initiator.lineNumber,
          stackTrace: e(this, p).info.initiator.stack,
          request: e(this, p).info.initiator.requestId
        }
      }
    };
  }, Su = function() {
    return {
      method: s.ChromiumBidi.Network.EventNames.ResponseStarted,
      params: {
        ...T(this, k, Zt).call(this, "responseStarted"),
        response: T(this, k, yn).call(this)
      }
    };
  }, Pu = function() {
    return {
      method: s.ChromiumBidi.Network.EventNames.ResponseCompleted,
      params: {
        ...T(this, k, Zt).call(this),
        response: T(this, k, yn).call(this)
      }
    };
  }, Iu = function() {
    var W, J;
    const M = "/favicon.ico";
    return ((W = e(this, p).paused) == null ? void 0 : W.request.url.endsWith(M)) ?? ((J = e(this, p).info) == null ? void 0 : J.request.url.endsWith(M)) ?? !1;
  }, Cn = function(M, W) {
    if (!M && !W)
      return;
    let J = M;
    const ee = (0, a.networkHeaderFromCookieHeaders)(W);
    return ee && !J && (J = e(this, k, Ni)), ee && J && (J.filter((ne) => ne.name.localeCompare("cookie", void 0, {
      sensitivity: "base"
    }) !== 0), J.push(ee)), J;
  }, ce = new WeakSet(), _u = function(M) {
    switch (M) {
      case "parser":
      case "script":
      case "preflight":
        return M;
      default:
        return "other";
    }
  }, y(g, ce), X(g, "unknownParameter", "UNKNOWN"), g);
  ts.NetworkRequest = m, i = m;
  function f(re) {
    let M;
    return (re == null ? void 0 : re.type) === "string" ? M = (0, a.stringToBase64)(re.value) : (re == null ? void 0 : re.type) === "base64" && (M = re.value), M;
  }
  function x(re) {
    return (re == null ? void 0 : re.type) === "string" ? re.value.length : (re == null ? void 0 : re.type) === "base64" ? atob(re.value).length : 0;
  }
  return ts;
}
var Fa;
function Du() {
  return Fa || (Fa = 1, (function(i) {
    var c, m, f, x, g, d, C, b, We, ku, Tu;
    Object.defineProperty(i, "__esModule", { value: !0 }), i.NetworkStorage = i.MAX_TOTAL_COLLECTED_SIZE = void 0;
    const s = Se(), t = wt(), r = vh(), o = yh(), h = Gn();
    i.MAX_TOTAL_COLLECTED_SIZE = 2e8;
    class a {
      constructor(n, u, D, E) {
        y(this, b);
        y(this, c);
        y(this, m);
        y(this, f);
        y(this, x);
        /**
         * A map from network request ID to Network Request objects.
         * Needed as long as information about requests comes from different events.
         */
        y(this, g, /* @__PURE__ */ new Map());
        /** A map from intercept ID to track active network intercepts. */
        y(this, d, /* @__PURE__ */ new Map());
        y(this, C, "default");
        P(this, c, u), P(this, m, n), P(this, f, new r.CollectorsStorage(i.MAX_TOTAL_COLLECTED_SIZE, E)), D.on("Target.detachedFromTarget", ({ sessionId: l }) => {
          this.disposeRequestMap(l);
        }), P(this, x, E);
      }
      onCdpTargetCreated(n) {
        const u = n.cdpClient, D = [
          [
            "Network.requestWillBeSent",
            (E) => {
              const l = this.getRequestById(E.requestId);
              l == null || l.updateCdpTarget(n), l && l.isRedirecting() ? (l.handleRedirect(E), this.disposeRequest(E.requestId), T(this, b, We).call(this, E.requestId, n, l.redirectCount + 1).onRequestWillBeSentEvent(E)) : T(this, b, We).call(this, E.requestId, n).onRequestWillBeSentEvent(E);
            }
          ],
          [
            "Network.requestWillBeSentExtraInfo",
            (E) => {
              const l = T(this, b, We).call(this, E.requestId, n);
              l.updateCdpTarget(n), l.onRequestWillBeSentExtraInfoEvent(E);
            }
          ],
          [
            "Network.responseReceived",
            (E) => {
              const l = T(this, b, We).call(this, E.requestId, n);
              l.updateCdpTarget(n), l.onResponseReceivedEvent(E);
            }
          ],
          [
            "Network.responseReceivedExtraInfo",
            (E) => {
              const l = T(this, b, We).call(this, E.requestId, n);
              l.updateCdpTarget(n), l.onResponseReceivedExtraInfoEvent(E);
            }
          ],
          [
            "Network.requestServedFromCache",
            (E) => {
              const l = T(this, b, We).call(this, E.requestId, n);
              l.updateCdpTarget(n), l.onServedFromCache();
            }
          ],
          [
            "Fetch.requestPaused",
            (E) => {
              const l = T(this, b, We).call(
                this,
                // CDP quirk if the Network domain is not present this is undefined
                E.networkId ?? E.requestId,
                n
              );
              l.updateCdpTarget(n), l.onRequestPaused(E);
            }
          ],
          [
            "Fetch.authRequired",
            (E) => {
              let l = this.getRequestByFetchId(E.requestId);
              l || (l = T(this, b, We).call(this, E.requestId, n)), l.updateCdpTarget(n), l.onAuthRequired(E);
            }
          ],
          [
            "Network.dataReceived",
            (E) => {
              const l = this.getRequestById(E.requestId);
              l == null || l.updateCdpTarget(n), l == null || l.onDataReceivedEvent(E);
            }
          ],
          [
            "Network.loadingFailed",
            (E) => {
              const l = T(this, b, We).call(this, E.requestId, n);
              l.updateCdpTarget(n), l.onLoadingFailedEvent(E);
            }
          ],
          [
            "Network.loadingFinished",
            (E) => {
              const l = this.getRequestById(E.requestId);
              l == null || l.updateCdpTarget(n), l == null || l.onLoadingFinishedEvent(E);
            }
          ]
        ];
        for (const [E, l] of D)
          u.on(E, l);
      }
      async getCollectedData(n) {
        if (!e(this, f).isCollected(n.request, n.dataType, n.collector))
          throw new s.NoSuchNetworkDataException(n.collector === void 0 ? `No collected ${n.dataType} data` : `Collector ${n.collector} didn't collect ${n.dataType} data`);
        if (n.disown && n.collector === void 0)
          throw new s.InvalidArgumentException("Cannot disown collected data without collector ID");
        const u = this.getRequestById(n.request);
        if (u === void 0)
          throw new s.NoSuchNetworkDataException(`No data for ${n.request}`);
        let D;
        switch (n.dataType) {
          case "response":
            D = await T(this, b, ku).call(this, u);
            break;
          case "request":
            D = await T(this, b, Tu).call(this, u);
            break;
          default:
            throw new s.UnsupportedOperationException(`Unsupported data type ${n.dataType}`);
        }
        return n.disown && n.collector !== void 0 && (e(this, f).disownData(u.id, n.dataType, n.collector), this.disposeRequest(u.id)), D;
      }
      collectIfNeeded(n, u) {
        e(this, f).collectIfNeeded(n, u, n.cdpTarget.topLevelId, n.cdpTarget.userContext);
      }
      getInterceptionStages(n) {
        const u = {
          request: !1,
          response: !1,
          auth: !1
        };
        for (const D of e(this, d).values())
          D.contexts && !D.contexts.includes(n) || (u.request || (u.request = D.phases.includes(
            "beforeRequestSent"
            /* Network.InterceptPhase.BeforeRequestSent */
          )), u.response || (u.response = D.phases.includes(
            "responseStarted"
            /* Network.InterceptPhase.ResponseStarted */
          )), u.auth || (u.auth = D.phases.includes(
            "authRequired"
            /* Network.InterceptPhase.AuthRequired */
          )));
        return u;
      }
      getInterceptsForPhase(n, u) {
        if (n.url === o.NetworkRequest.unknownParameter)
          return /* @__PURE__ */ new Set();
        const D = /* @__PURE__ */ new Set();
        for (const [E, l] of e(this, d).entries())
          if (!(!l.phases.includes(u) || l.contexts && !l.contexts.includes(n.cdpTarget.topLevelId))) {
            if (l.urlPatterns.length === 0) {
              D.add(E);
              continue;
            }
            for (const S of l.urlPatterns)
              if ((0, h.matchUrlPattern)(S, n.url)) {
                D.add(E);
                break;
              }
          }
        return D;
      }
      disposeRequestMap(n) {
        for (const u of e(this, g).values())
          u.cdpClient.sessionId === n && (e(this, g).delete(u.id), u.dispose());
      }
      /**
       * Adds the given entry to the intercept map.
       * URL patterns are assumed to be parsed.
       *
       * @return The intercept ID.
       */
      addIntercept(n) {
        const u = (0, t.uuidv4)();
        return e(this, d).set(u, n), u;
      }
      /**
       * Removes the given intercept from the intercept map.
       * Throws NoSuchInterceptException if the intercept does not exist.
       */
      removeIntercept(n) {
        if (!e(this, d).has(n))
          throw new s.NoSuchInterceptException(`Intercept '${n}' does not exist.`);
        e(this, d).delete(n);
      }
      getRequestsByTarget(n) {
        const u = [];
        for (const D of e(this, g).values())
          D.cdpTarget === n && u.push(D);
        return u;
      }
      getRequestById(n) {
        return e(this, g).get(n);
      }
      getRequestByFetchId(n) {
        for (const u of e(this, g).values())
          if (u.fetchId === n)
            return u;
      }
      addRequest(n) {
        e(this, g).set(n.id, n);
      }
      /**
       * Disposes the given request, if no collectors targeting it are left.
       */
      disposeRequest(n) {
        e(this, f).isCollected(n) || e(this, g).delete(n);
      }
      /**
       * Gets the virtual navigation ID for the given navigable ID.
       */
      getNavigationId(n) {
        var u;
        return n === void 0 ? null : ((u = e(this, c).findContext(n)) == null ? void 0 : u.navigationId) ?? null;
      }
      set defaultCacheBehavior(n) {
        P(this, C, n);
      }
      get defaultCacheBehavior() {
        return e(this, C);
      }
      addDataCollector(n) {
        return e(this, f).addDataCollector(n);
      }
      removeDataCollector(n) {
        e(this, f).removeDataCollector(n.collector).map((D) => this.disposeRequest(D));
      }
      disownData(n) {
        if (!e(this, f).isCollected(n.request, n.dataType, n.collector))
          throw new s.NoSuchNetworkDataException(`Collector ${n.collector} didn't collect ${n.dataType} data`);
        e(this, f).disownData(n.request, n.dataType, n.collector), this.disposeRequest(n.request);
      }
    }
    c = new WeakMap(), m = new WeakMap(), f = new WeakMap(), x = new WeakMap(), g = new WeakMap(), d = new WeakMap(), C = new WeakMap(), b = new WeakSet(), /**
     * Gets the network request with the given ID, if any.
     * Otherwise, creates a new network request with the given ID and cdp target.
     */
    We = function(n, u, D) {
      let E = this.getRequestById(n);
      return D === void 0 && E || (E = new o.NetworkRequest(n, e(this, m), this, u, D, e(this, x)), this.addRequest(E)), E;
    }, ku = async function(n) {
      try {
        const u = await n.cdpClient.sendCommand("Network.getResponseBody", { requestId: n.id });
        return {
          bytes: {
            type: u.base64Encoded ? "base64" : "string",
            value: u.body
          }
        };
      } catch (u) {
        throw u.code === -32e3 && u.message === "No resource with given identifier found" ? new s.NoSuchNetworkDataException("Response data was disposed") : u.code === -32001 ? new s.NoSuchNetworkDataException("Response data is disposed after the related page") : u;
      }
    }, Tu = async function(n) {
      return {
        bytes: {
          type: "string",
          value: (await n.cdpClient.sendCommand("Network.getRequestPostData", { requestId: n.id })).postData
        }
      };
    }, i.NetworkStorage = a;
  })(ii)), ii;
}
var qa;
function Ch() {
  var m, f, x, g, d, C, b, w, v, p, I, n, u, D, E, l, S, Nu, Bi, ys, Ru, Ou, Bu, Au, Mu, Fu, qu, ju, U;
  if (qa) return Yr;
  qa = 1, Object.defineProperty(Yr, "__esModule", { value: !0 }), Yr.CdpTarget = void 0;
  const i = mc(), s = Se(), t = Vn(), r = qe(), o = cu(), h = wh(), a = Du();
  let c = (U = class {
    constructor(_, $, V, Q, ie, se, me, Ce, j, L, ae, we) {
      y(this, S);
      y(this, m);
      X(this, "userContext");
      y(this, f);
      y(this, x);
      y(this, g);
      y(this, d);
      y(this, C);
      y(this, b);
      y(this, w);
      y(this, v);
      X(this, "contextConfigStorage");
      y(this, p, new t.Deferred());
      y(this, I);
      /**
       * Target's window id. Is filled when the CDP target is created and do not reflect
       * moving targets from one window to another. The actual values
       * will be set during `#unblock`.
       * */
      y(this, n);
      y(this, u, !1);
      y(this, D, !1);
      y(this, E, !1);
      y(this, l, {
        request: !1,
        response: !1,
        auth: !1
      });
      this.userContext = ae, P(this, m, _), P(this, f, $), P(this, x, V), P(this, g, Q), P(this, C, ie), P(this, d, se), P(this, b, me), P(this, v, L), P(this, w, Ce), this.contextConfigStorage = j, P(this, I, we);
    }
    static create(_, $, V, Q, ie, se, me, Ce, j, L, ae, we) {
      var ue, O;
      const be = new U(_, $, V, Q, se, ie, me, Ce, L, j, ae, we);
      return h.LogManager.create(be, ie, se, we), T(ue = be, S, Ru).call(ue), T(O = be, S, Nu).call(O), be;
    }
    /** Returns a deferred that resolves when the target is unblocked. */
    get unblocked() {
      return e(this, p);
    }
    get id() {
      return e(this, m);
    }
    get cdpClient() {
      return e(this, f);
    }
    get parentCdpClient() {
      return e(this, g);
    }
    get browserCdpClient() {
      return e(this, x);
    }
    /** Needed for CDP escape path. */
    get cdpSessionId() {
      return e(this, f).sessionId;
    }
    /**
     * Window id the target belongs to. If not known, returns 0.
     */
    get windowId() {
      var _;
      return e(this, n) === void 0 && ((_ = e(this, I)) == null || _.call(this, r.LogType.debugError, "Getting windowId before it was set, returning 0")), e(this, n) ?? 0;
    }
    async toggleFetchIfNeeded() {
      const _ = e(this, v).getInterceptionStages(this.topLevelId);
      if (e(this, l).request === _.request && e(this, l).response === _.response && e(this, l).auth === _.auth)
        return;
      const $ = [];
      if (P(this, l, _), (_.request || _.auth) && $.push({
        urlPattern: "*",
        requestStage: "Request"
      }), _.response && $.push({
        urlPattern: "*",
        requestStage: "Response"
      }), $.length)
        await e(this, f).sendCommand("Fetch.enable", {
          patterns: $,
          handleAuthRequests: _.auth
        });
      else {
        const V = e(this, v).getRequestsByTarget(this).filter((Q) => Q.interceptPhase);
        Promise.allSettled(V.map((Q) => Q.waitNextPhase)).then(async () => e(this, v).getRequestsByTarget(this).filter((ie) => ie.interceptPhase).length ? await this.toggleFetchIfNeeded() : await e(this, f).sendCommand("Fetch.disable")).catch((Q) => {
          var ie;
          (ie = e(this, I)) == null || ie.call(this, r.LogType.bidi, "Disable failed", Q);
        });
      }
    }
    /**
     * Toggles CDP "Fetch" domain and enable/disable network cache.
     */
    async toggleNetworkIfNeeded() {
      var _;
      try {
        await Promise.all([
          this.toggleSetCacheDisabled(),
          this.toggleFetchIfNeeded()
        ]);
      } catch ($) {
        if ((_ = e(this, I)) == null || _.call(this, r.LogType.debugError, $), !T(this, S, ys).call(this, $))
          throw $;
      }
    }
    async toggleSetCacheDisabled(_) {
      var Q;
      const $ = e(this, v).defaultCacheBehavior === "bypass", V = _ ?? $;
      if (e(this, D) !== V) {
        P(this, D, V);
        try {
          await e(this, f).sendCommand("Network.setCacheDisabled", {
            cacheDisabled: V
          });
        } catch (ie) {
          if ((Q = e(this, I)) == null || Q.call(this, r.LogType.debugError, ie), P(this, D, !V), !T(this, S, ys).call(this, ie))
            throw ie;
        }
      }
    }
    async toggleDeviceAccessIfNeeded() {
      var $;
      const _ = this.isSubscribedTo(i.Bluetooth.EventNames.RequestDevicePromptUpdated);
      if (e(this, u) !== _) {
        P(this, u, _);
        try {
          await e(this, f).sendCommand(_ ? "DeviceAccess.enable" : "DeviceAccess.disable");
        } catch (V) {
          if (($ = e(this, I)) == null || $.call(this, r.LogType.debugError, V), P(this, u, !_), !T(this, S, ys).call(this, V))
            throw V;
        }
      }
    }
    async togglePreloadIfNeeded() {
      var $;
      const _ = this.isSubscribedTo(i.Speculation.EventNames.PrefetchStatusUpdated);
      if (e(this, E) !== _) {
        P(this, E, _);
        try {
          await e(this, f).sendCommand(_ ? "Preload.enable" : "Preload.disable");
        } catch (V) {
          if (($ = e(this, I)) == null || $.call(this, r.LogType.debugError, V), P(this, E, !_), !T(this, S, ys).call(this, V))
            throw V;
        }
      }
    }
    async toggleNetwork() {
      var Q;
      const _ = e(this, v).getInterceptionStages(this.topLevelId), $ = Object.values(_).some((ie) => ie), V = e(this, l).request !== _.request || e(this, l).response !== _.response || e(this, l).auth !== _.auth;
      (Q = e(this, I)) == null || Q.call(this, r.LogType.debugInfo, "Toggle Network", `Fetch (${$}) ${V}`), $ && V && await T(this, S, Ou).call(this, _), !$ && V && await T(this, S, Bu).call(this);
    }
    /**
     * All the ProxyChannels from all the preload scripts of the given
     * BrowsingContext.
     */
    getChannels() {
      return e(this, b).find().flatMap((_) => _.channels);
    }
    async setDeviceMetricsOverride(_, $, V, Q) {
      if (_ === null && $ === null && V === null && Q === null) {
        await this.cdpClient.sendCommand("Emulation.clearDeviceMetricsOverride");
        return;
      }
      const ie = {
        width: (_ == null ? void 0 : _.width) ?? 0,
        height: (_ == null ? void 0 : _.height) ?? 0,
        deviceScaleFactor: $ ?? 0,
        screenOrientation: T(this, S, ju).call(this, V) ?? void 0,
        mobile: !1,
        screenWidth: Q == null ? void 0 : Q.width,
        screenHeight: Q == null ? void 0 : Q.height
      };
      await this.cdpClient.sendCommand("Emulation.setDeviceMetricsOverride", ie);
    }
    get topLevelId() {
      return e(this, w).findTopLevelContextId(this.id) ?? this.id;
    }
    isSubscribedTo(_) {
      return e(this, C).subscriptionManager.isSubscribedTo(_, this.topLevelId);
    }
    async setGeolocationOverride(_) {
      if (_ === null)
        await this.cdpClient.sendCommand("Emulation.clearGeolocationOverride");
      else if ("type" in _) {
        if (_.type !== "positionUnavailable")
          throw new s.UnknownErrorException(`Unknown geolocation error ${_.type}`);
        await this.cdpClient.sendCommand("Emulation.setGeolocationOverride", {});
      } else if ("latitude" in _)
        await this.cdpClient.sendCommand("Emulation.setGeolocationOverride", {
          latitude: _.latitude,
          longitude: _.longitude,
          accuracy: _.accuracy ?? 1,
          // `null` value is treated as "missing".
          altitude: _.altitude ?? void 0,
          altitudeAccuracy: _.altitudeAccuracy ?? void 0,
          heading: _.heading ?? void 0,
          speed: _.speed ?? void 0
        });
      else
        throw new s.UnknownErrorException("Unexpected geolocation coordinates value");
    }
    async setLocaleOverride(_) {
      _ === null ? await this.cdpClient.sendCommand("Emulation.setLocaleOverride", {}) : await this.cdpClient.sendCommand("Emulation.setLocaleOverride", {
        locale: _
      });
    }
    async setScriptingEnabled(_) {
      await this.cdpClient.sendCommand("Emulation.setScriptExecutionDisabled", {
        value: _ === !1
      });
    }
    async setTimezoneOverride(_) {
      _ === null ? await this.cdpClient.sendCommand("Emulation.setTimezoneOverride", {
        // If empty, disables the override and restores default host system timezone.
        timezoneId: ""
      }) : await this.cdpClient.sendCommand("Emulation.setTimezoneOverride", {
        timezoneId: _
      });
    }
    async setExtraHeaders(_) {
      await this.cdpClient.sendCommand("Network.setExtraHTTPHeaders", {
        headers: _
      });
    }
    async setUserAgentAndAcceptLanguage(_, $) {
      await this.cdpClient.sendCommand("Emulation.setUserAgentOverride", {
        userAgent: _ ?? "",
        acceptLanguage: $ ?? void 0
      });
    }
    async setEmulatedNetworkConditions(_) {
      if (_ !== null && _.type !== "offline")
        throw new s.UnsupportedOperationException(`Unsupported network conditions ${_.type}`);
      await Promise.all([
        this.cdpClient.sendCommand("Network.emulateNetworkConditionsByRule", {
          offline: (_ == null ? void 0 : _.type) === "offline",
          matchedNetworkConditions: [
            {
              urlPattern: "",
              latency: 0,
              downloadThroughput: -1,
              uploadThroughput: -1
            }
          ]
        }),
        this.cdpClient.sendCommand("Network.overrideNetworkState", {
          offline: (_ == null ? void 0 : _.type) === "offline",
          // TODO: restore the original `latency` value when emulation is removed.
          latency: 0,
          downloadThroughput: -1,
          uploadThroughput: -1
        })
      ]);
    }
  }, m = new WeakMap(), f = new WeakMap(), x = new WeakMap(), g = new WeakMap(), d = new WeakMap(), C = new WeakMap(), b = new WeakMap(), w = new WeakMap(), v = new WeakMap(), p = new WeakMap(), I = new WeakMap(), n = new WeakMap(), u = new WeakMap(), D = new WeakMap(), E = new WeakMap(), l = new WeakMap(), S = new WeakSet(), Nu = async function() {
    var V;
    const _ = this.contextConfigStorage.getActiveConfig(this.topLevelId, this.userContext), $ = await Promise.allSettled([
      e(this, f).sendCommand("Page.enable", {
        enableFileChooserOpenedEvent: !0
      }),
      ...T(this, S, qu).call(this) ? [] : [
        e(this, f).sendCommand("Page.setInterceptFileChooserDialog", {
          enabled: !0,
          // The intercepted dialog should be canceled.
          cancel: !0
        })
      ],
      // There can be some existing frames in the target, if reconnecting to an
      // existing browser instance, e.g. via Puppeteer. Need to restore the browsing
      // contexts for the frames to correctly handle further events, like
      // `Runtime.executionContextCreated`.
      // It's important to schedule this task together with enabling domains commands to
      // prepare the tree before the events (e.g. Runtime.executionContextCreated) start
      // coming.
      // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2282
      e(this, f).sendCommand("Page.getFrameTree").then((Q) => T(this, S, Bi).call(this, Q.frameTree)),
      e(this, f).sendCommand("Runtime.enable"),
      e(this, f).sendCommand("Page.setLifecycleEventsEnabled", {
        enabled: !0
      }),
      // Enabling CDP Network domain is required for navigation detection:
      // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2856.
      e(this, f).sendCommand("Network.enable", {
        // If `googDisableNetworkDurableMessages` flag is set, do not enable durable
        // messages.
        enableDurableMessages: _.disableNetworkDurableMessages !== !0,
        maxTotalBufferSize: a.MAX_TOTAL_COLLECTED_SIZE
      }).then(() => this.toggleNetworkIfNeeded()),
      e(this, f).sendCommand("Target.setAutoAttach", {
        autoAttach: !0,
        waitForDebuggerOnStart: !0,
        flatten: !0
      }),
      T(this, S, Au).call(this),
      T(this, S, Fu).call(this, _),
      T(this, S, Mu).call(this),
      e(this, f).sendCommand("Runtime.runIfWaitingForDebugger"),
      // Resume tab execution as well if it was paused by the debugger.
      e(this, g).sendCommand("Runtime.runIfWaitingForDebugger"),
      this.toggleDeviceAccessIfNeeded(),
      this.togglePreloadIfNeeded()
    ]);
    for (const Q of $)
      Q instanceof Error && ((V = e(this, I)) == null || V.call(this, r.LogType.debugError, "Error happened when configuring a new target", Q));
    e(this, p).resolve({
      kind: "success",
      value: void 0
    });
  }, Bi = function(_) {
    var Q;
    const $ = _.frame, V = e(this, w).findContext($.id);
    if (V !== void 0 && V.parentId === null && $.parentId !== null && $.parentId !== void 0 && (V.parentId = $.parentId), V === void 0 && $.parentId !== void 0) {
      const ie = e(this, w).getContext($.parentId);
      o.BrowsingContextImpl.create($.id, $.parentId, this.userContext, ie.cdpTarget, e(this, C), e(this, w), e(this, d), this.contextConfigStorage, $.url, void 0, e(this, I));
    }
    (Q = _.childFrames) == null || Q.map((ie) => T(this, S, Bi).call(this, ie));
  }, /**
   * Heuristic checking if the error is due to the session being closed. If so, ignore the
   * error.
   */
  ys = function(_) {
    const $ = _;
    return $.code === -32001 && $.message === "Session with given id not found." || e(this, f).isCloseError(_);
  }, Ru = function() {
    e(this, f).on("*", (_, $) => {
      typeof _ == "string" && e(this, C).registerEvent({
        type: "event",
        method: `goog:cdp.${_}`,
        params: {
          event: _,
          params: $,
          session: this.cdpSessionId
        }
      }, this.id);
    });
  }, Ou = async function(_) {
    const $ = [];
    if ((_.request || _.auth) && $.push({
      urlPattern: "*",
      requestStage: "Request"
    }), _.response && $.push({
      urlPattern: "*",
      requestStage: "Response"
    }), $.length) {
      const V = e(this, l);
      P(this, l, _);
      try {
        await e(this, f).sendCommand("Fetch.enable", {
          patterns: $,
          handleAuthRequests: _.auth
        });
      } catch {
        P(this, l, V);
      }
    }
  }, Bu = async function() {
    e(this, v).getRequestsByTarget(this).filter(($) => $.interceptPhase).length === 0 && (P(this, l, {
      request: !1,
      response: !1,
      auth: !1
    }), await e(this, f).sendCommand("Fetch.disable"));
  }, Au = async function() {
    const { windowId: _ } = await e(this, x).sendCommand("Browser.getWindowForTarget", { targetId: this.id });
    P(this, n, _);
  }, Mu = async function() {
    await Promise.all(e(this, b).find({
      // Needed for OOPIF
      targetId: this.topLevelId
    }).map((_) => _.initInTarget(this, !0)));
  }, Fu = async function(_) {
    const $ = [];
    $.push(e(this, f).sendCommand("Page.setPrerenderingAllowed", {
      isAllowed: !_.prerenderingDisabled
    }).catch(() => {
    })), (_.viewport !== void 0 || _.devicePixelRatio !== void 0 || _.screenOrientation !== void 0 || _.screenArea !== void 0) && $.push(this.setDeviceMetricsOverride(_.viewport ?? null, _.devicePixelRatio ?? null, _.screenOrientation ?? null, _.screenArea ?? null).catch(() => {
    })), _.geolocation !== void 0 && _.geolocation !== null && $.push(this.setGeolocationOverride(_.geolocation)), _.locale !== void 0 && $.push(this.setLocaleOverride(_.locale)), _.timezone !== void 0 && $.push(this.setTimezoneOverride(_.timezone)), _.extraHeaders !== void 0 && $.push(this.setExtraHeaders(_.extraHeaders)), (_.userAgent !== void 0 || _.locale !== void 0) && $.push(this.setUserAgentAndAcceptLanguage(_.userAgent, _.locale)), _.scriptingEnabled !== void 0 && $.push(this.setScriptingEnabled(_.scriptingEnabled)), _.acceptInsecureCerts !== void 0 && $.push(this.cdpClient.sendCommand("Security.setIgnoreCertificateErrors", {
      ignore: _.acceptInsecureCerts
    })), _.emulatedNetworkConditions !== void 0 && $.push(this.setEmulatedNetworkConditions(_.emulatedNetworkConditions)), await Promise.all($);
  }, qu = function() {
    var $, V;
    const _ = this.contextConfigStorage.getActiveConfig(this.topLevelId, this.userContext);
    return ((($ = _.userPromptHandler) == null ? void 0 : $.file) ?? ((V = _.userPromptHandler) == null ? void 0 : V.default) ?? "ignore") === "ignore";
  }, ju = function(_) {
    if (_ === null)
      return null;
    if (_.natural === "portrait")
      switch (_.type) {
        case "portrait-primary":
          return {
            angle: 0,
            type: "portraitPrimary"
          };
        case "landscape-primary":
          return {
            angle: 90,
            type: "landscapePrimary"
          };
        case "portrait-secondary":
          return {
            angle: 180,
            type: "portraitSecondary"
          };
        case "landscape-secondary":
          return {
            angle: 270,
            type: "landscapeSecondary"
          };
        default:
          throw new s.UnknownErrorException(`Unexpected screen orientation type ${_.type}`);
      }
    if (_.natural === "landscape")
      switch (_.type) {
        case "landscape-primary":
          return {
            angle: 0,
            type: "landscapePrimary"
          };
        case "portrait-primary":
          return {
            angle: 90,
            type: "portraitPrimary"
          };
        case "landscape-secondary":
          return {
            angle: 180,
            type: "landscapeSecondary"
          };
        case "portrait-secondary":
          return {
            angle: 270,
            type: "portraitSecondary"
          };
        default:
          throw new s.UnknownErrorException(`Unexpected screen orientation type ${_.type}`);
      }
    throw new s.UnknownErrorException(`Unexpected orientation natural ${_.natural}`);
  }, U);
  return Yr.CdpTarget = c, Yr;
}
var ja;
function bh() {
  var a, c, m, f, x, g, d, C, b, w, v, p, I, n, u, bn, Uu, Lu, $u, Hu, xn, A, Ai, zu, Ku, Wu, q;
  if (ja) return Kr;
  ja = 1, Object.defineProperty(Kr, "__esModule", { value: !0 }), Kr.CdpTargetManager = void 0;
  const i = qe(), s = cu(), t = gh(), r = Ch(), o = {
    service_worker: "service-worker",
    shared_worker: "shared-worker",
    worker: "dedicated-worker"
  };
  let h = (q = class {
    constructor(B, H, U, Y, _, $, V, Q, ie, se, me, Ce, j) {
      y(this, u);
      y(this, a);
      y(this, c);
      y(this, m, /* @__PURE__ */ new Set());
      y(this, f);
      y(this, x);
      y(this, g);
      y(this, d);
      y(this, C);
      y(this, b);
      y(this, w);
      y(this, v);
      y(this, p);
      y(this, I);
      y(this, n);
      y(this, A, /* @__PURE__ */ new Map());
      P(this, c, B), P(this, a, H), e(this, m).add(U), P(this, f, U), P(this, x, Y), P(this, g, _), P(this, b, me), P(this, d, V), P(this, v, Q), P(this, C, ie), P(this, p, se), P(this, w, $), P(this, I, Ce), P(this, n, j), T(this, u, bn).call(this, H);
    }
  }, a = new WeakMap(), c = new WeakMap(), m = new WeakMap(), f = new WeakMap(), x = new WeakMap(), g = new WeakMap(), d = new WeakMap(), C = new WeakMap(), b = new WeakMap(), w = new WeakMap(), v = new WeakMap(), p = new WeakMap(), I = new WeakMap(), n = new WeakMap(), u = new WeakSet(), /**
   * This method is called for each CDP session, since this class is responsible
   * for creating and destroying all targets and browsing contexts.
   */
  bn = function(B) {
    B.on("Target.attachedToTarget", (H) => {
      T(this, u, $u).call(this, H, B);
    }), B.on("Target.detachedFromTarget", T(this, u, zu).bind(this)), B.on("Target.targetInfoChanged", T(this, u, Ku).bind(this)), B.on("Inspector.targetCrashed", () => {
      T(this, u, Wu).call(this, B);
    }), B.on("Page.frameAttached", T(this, u, Uu).bind(this)), B.on("Page.frameSubtreeWillBeDetached", T(this, u, Lu).bind(this));
  }, Uu = function(B) {
    const H = e(this, g).findContext(B.parentFrameId);
    H !== void 0 && s.BrowsingContextImpl.create(
      B.frameId,
      B.parentFrameId,
      H.userContext,
      H.cdpTarget,
      e(this, x),
      e(this, g),
      e(this, w),
      e(this, v),
      // At this point, we don't know the URL of the frame yet, so it will be updated
      // later.
      "about:blank",
      void 0,
      e(this, n)
    );
  }, Lu = function(B) {
    var H;
    (H = e(this, g).findContext(B.frameId)) == null || H.dispose(!0);
  }, $u = function(B, H) {
    const { sessionId: U, targetInfo: Y } = B, _ = e(this, c).getCdpClient(U), $ = async () => {
      await _.sendCommand("Runtime.runIfWaitingForDebugger").then(() => H.sendCommand("Target.detachFromTarget", B)).catch((ie) => {
        var se;
        return (se = e(this, n)) == null ? void 0 : se.call(this, i.LogType.debugError, ie);
      });
    };
    if (e(this, f) === Y.targetId) {
      $();
      return;
    }
    const V = Y.type === "service_worker" ? `${H.sessionId}_${Y.targetId}` : Y.targetId;
    if (e(this, m).has(V))
      return;
    e(this, m).add(V);
    const Q = Y.browserContextId && Y.browserContextId !== e(this, I) ? Y.browserContextId : "default";
    switch (Y.type) {
      case "tab": {
        T(this, u, bn).call(this, _), (async () => await _.sendCommand("Target.setAutoAttach", {
          autoAttach: !0,
          waitForDebuggerOnStart: !0,
          flatten: !0
        }))();
        return;
      }
      case "page":
      case "iframe": {
        const ie = T(this, u, xn).call(this, _, H, Y, Q), se = e(this, g).findContext(Y.targetId);
        if (se && Y.type === "iframe")
          se.updateCdpTarget(ie);
        else {
          const me = T(this, u, Hu).call(this, Y, H.sessionId);
          s.BrowsingContextImpl.create(
            Y.targetId,
            me,
            Q,
            ie,
            e(this, x),
            e(this, g),
            e(this, w),
            e(this, v),
            // Hack: when a new target created, CDP emits targetInfoChanged with an empty
            // url, and navigates it to about:blank later. When the event is emitted for
            // an existing target (reconnect), the url is already known, and navigation
            // events will not be emitted anymore. Replacing empty url with `about:blank`
            // allows to handle both cases in the same way.
            // "7.3.2.1 Creating browsing contexts".
            // https://html.spec.whatwg.org/multipage/document-sequences.html#creating-browsing-contexts
            // TODO: check who to deal with non-null creator and its `creatorOrigin`.
            Y.url === "" ? "about:blank" : Y.url,
            Y.openerFrameId ?? Y.openerId,
            e(this, n)
          );
        }
        return;
      }
      case "service_worker":
      case "worker": {
        const ie = e(this, w).findRealm({
          cdpSessionId: H.sessionId,
          sandbox: null
          // Non-sandboxed realms.
        });
        if (!ie) {
          $();
          return;
        }
        const se = T(this, u, xn).call(this, _, H, Y, Q);
        T(this, u, Ai).call(this, o[Y.type], se, ie);
        return;
      }
      // In CDP, we only emit shared workers on the browser and not the set of
      // frames that use the shared worker. If we change this in the future to
      // behave like service workers (emits on both browser and frame targets),
      // we can remove this block and merge service workers with the above one.
      case "shared_worker": {
        const ie = T(this, u, xn).call(this, _, H, Y, Q);
        T(this, u, Ai).call(this, o[Y.type], ie);
        return;
      }
    }
    $();
  }, /** Try to find the parent browsing context ID for the given attached target. */
  Hu = function(B, H) {
    var Y;
    if (B.type !== "iframe")
      return null;
    const U = B.openerFrameId ?? B.openerId;
    return U !== void 0 ? U : H !== void 0 ? ((Y = e(this, g).findContextBySession(H)) == null ? void 0 : Y.id) ?? null : null;
  }, xn = function(B, H, U, Y) {
    T(this, u, bn).call(this, B), e(this, b).onCdpTargetCreated(U.targetId, Y);
    const _ = r.CdpTarget.create(U.targetId, B, e(this, a), H, e(this, w), e(this, x), e(this, b), e(this, g), e(this, d), e(this, v), Y, e(this, n));
    return e(this, d).onCdpTargetCreated(_), e(this, C).onCdpTargetCreated(_), e(this, p).onCdpTargetCreated(_), _;
  }, A = new WeakMap(), Ai = function(B, H, U) {
    H.cdpClient.on("Runtime.executionContextCreated", (Y) => {
      const { uniqueId: _, id: $, origin: V } = Y.context, Q = new t.WorkerRealm(H.cdpClient, e(this, x), $, e(this, n), (0, s.serializeOrigin)(V), U ? [U] : [], _, e(this, w), B);
      e(this, A).set(H.cdpSessionId, Q);
    });
  }, zu = function({ sessionId: B, targetId: H }) {
    H && e(this, b).find({ targetId: H }).map((_) => {
      _.dispose(H);
    });
    const U = e(this, g).findContextBySession(B);
    if (U) {
      U.dispose(!0);
      return;
    }
    const Y = e(this, A).get(B);
    Y && e(this, w).deleteRealms({
      cdpSessionId: Y.cdpClient.sessionId
    });
  }, Ku = function(B) {
    const H = e(this, g).findContext(B.targetInfo.targetId);
    H && H.onTargetInfoChanged(B);
  }, Wu = function(B) {
    const H = e(this, w).findRealms({
      cdpSessionId: B.sessionId
    });
    for (const U of H)
      U.dispose();
  }, q);
  return Kr.CdpTargetManager = h, Kr;
}
var ss = {}, Ua;
function xh() {
  var r, o, h;
  if (Ua) return ss;
  Ua = 1, Object.defineProperty(ss, "__esModule", { value: !0 }), ss.BrowsingContextStorage = void 0;
  const i = Se(), s = Xs();
  let t = (h = class {
    constructor() {
      /** Map from context ID to context implementation. */
      y(this, r, /* @__PURE__ */ new Map());
      /** Event emitter for browsing context storage eventsis not expected to be exposed to
       * the outside world. */
      y(this, o, new s.EventEmitter());
    }
    /** Gets all top-level contexts, i.e. those with no parent. */
    getTopLevelContexts() {
      return this.getAllContexts().filter((c) => c.isTopLevelContext());
    }
    /** Gets all contexts. */
    getAllContexts() {
      return Array.from(e(this, r).values());
    }
    /** Deletes the context with the given ID. */
    deleteContextById(c) {
      e(this, r).delete(c);
    }
    /** Deletes the given context. */
    deleteContext(c) {
      e(this, r).delete(c.id);
    }
    /** Tracks the given context. */
    addContext(c) {
      e(this, r).set(c.id, c), e(this, o).emit("added", {
        browsingContext: c
      });
    }
    /**
     * Waits for a context with the given ID to be added and returns it.
     */
    waitForContext(c) {
      return e(this, r).has(c) ? Promise.resolve(this.getContext(c)) : new Promise((m) => {
        const f = (x) => {
          x.browsingContext.id === c && (e(this, o).off("added", f), m(x.browsingContext));
        };
        e(this, o).on("added", f);
      });
    }
    /** Returns true whether there is an existing context with the given ID. */
    hasContext(c) {
      return e(this, r).has(c);
    }
    /** Gets the context with the given ID, if any. */
    findContext(c) {
      return e(this, r).get(c);
    }
    /** Returns the top-level context ID of the given context, if any. */
    findTopLevelContextId(c) {
      if (c === null)
        return null;
      const m = this.findContext(c);
      if (!m)
        return null;
      const f = m.parentId ?? null;
      return f === null ? c : this.findTopLevelContextId(f);
    }
    findContextBySession(c) {
      for (const m of e(this, r).values())
        if (m.cdpTarget.cdpSessionId === c)
          return m;
    }
    /** Gets the context with the given ID, if any, otherwise throws. */
    getContext(c) {
      const m = this.findContext(c);
      if (m === void 0)
        throw new i.NoSuchFrameException(`Context ${c} not found`);
      return m;
    }
    verifyTopLevelContextsList(c) {
      const m = /* @__PURE__ */ new Set();
      if (!c)
        return m;
      for (const f of c) {
        const x = this.getContext(f);
        if (x.isTopLevelContext())
          m.add(x);
        else
          throw new i.InvalidArgumentException(`Non top-level context '${f}' given.`);
      }
      return m;
    }
    verifyContextsList(c) {
      if (c.length)
        for (const m of c)
          this.getContext(m);
    }
  }, r = new WeakMap(), o = new WeakMap(), h);
  return ss.BrowsingContextStorage = t, ss;
}
var ns = {}, La;
function Eh() {
  var t, r;
  if (La) return ns;
  La = 1, Object.defineProperty(ns, "__esModule", { value: !0 }), ns.PreloadScriptStorage = void 0;
  const i = Js();
  let s = (r = class {
    constructor() {
      /** Tracks all BiDi preload scripts.  */
      y(this, t, /* @__PURE__ */ new Set());
    }
    /**
     * Finds all entries that match the given filter (OR logic).
     */
    find(h) {
      return h ? [...e(this, t)].filter((a) => !!(a.contexts === void 0 && a.userContexts === void 0 || h.targetId !== void 0 && a.targetIds.has(h.targetId))) : [...e(this, t)];
    }
    add(h) {
      e(this, t).add(h);
    }
    /** Deletes all BiDi preload script entries that match the given filter. */
    remove(h) {
      const a = [...e(this, t)].find((c) => c.id === h);
      if (a === void 0)
        throw new i.NoSuchScriptException(`No preload script with id '${h}'`);
      e(this, t).delete(a);
    }
    /** Gets the preload script with the given ID, if any, otherwise throws. */
    getPreloadScript(h) {
      const a = [...e(this, t)].find((c) => c.id === h);
      if (a === void 0)
        throw new i.NoSuchScriptException(`No preload script with id '${h}'`);
      return a;
    }
    onCdpTargetCreated(h, a) {
      const c = [...e(this, t)].filter((m) => {
        var f;
        return !m.userContexts && !m.contexts ? !0 : (f = m.userContexts) == null ? void 0 : f.includes(a);
      });
      for (const m of c)
        m.targetIds.add(h);
    }
  }, t = new WeakMap(), r);
  return ns.PreloadScriptStorage = s, ns;
}
var is = {}, $a;
function Sh() {
  var r, o, h;
  if ($a) return is;
  $a = 1, Object.defineProperty(is, "__esModule", { value: !0 }), is.RealmStorage = void 0;
  const i = Se(), s = eu();
  let t = (h = class {
    constructor() {
      /** Tracks handles and their realms sent to the client. */
      y(this, r, /* @__PURE__ */ new Map());
      /** Map from realm ID to Realm. */
      y(this, o, /* @__PURE__ */ new Map());
      /** List of the internal sandboxed realms which should not be reported to the user. */
      X(this, "hiddenSandboxes", /* @__PURE__ */ new Set());
    }
    get knownHandlesToRealmMap() {
      return e(this, r);
    }
    addRealm(c) {
      e(this, o).set(c.realmId, c);
    }
    /** Finds all realms that match the given filter. */
    findRealms(c) {
      const m = c.sandbox === null ? void 0 : c.sandbox;
      return Array.from(e(this, o).values()).filter((f) => !(c.realmId !== void 0 && c.realmId !== f.realmId || c.browsingContextId !== void 0 && !f.associatedBrowsingContexts.map((x) => x.id).includes(c.browsingContextId) || c.sandbox !== void 0 && (!(f instanceof s.WindowRealm) || m !== f.sandbox) || c.executionContextId !== void 0 && c.executionContextId !== f.executionContextId || c.origin !== void 0 && c.origin !== f.origin || c.type !== void 0 && c.type !== f.realmType || c.cdpSessionId !== void 0 && c.cdpSessionId !== f.cdpClient.sessionId || c.isHidden !== void 0 && c.isHidden !== f.isHidden()));
    }
    findRealm(c) {
      return this.findRealms(c)[0];
    }
    /** Gets the only realm that matches the given filter, if any, otherwise throws. */
    getRealm(c) {
      const m = this.findRealm(c);
      if (m === void 0)
        throw new i.NoSuchFrameException(`Realm ${JSON.stringify(c)} not found`);
      return m;
    }
    /** Deletes all realms that match the given filter. */
    deleteRealms(c) {
      this.findRealms(c).map((m) => {
        m.dispose(), e(this, o).delete(m.realmId), Array.from(this.knownHandlesToRealmMap.entries()).filter(([, f]) => f === m.realmId).map(([f]) => this.knownHandlesToRealmMap.delete(f));
      });
    }
  }, r = new WeakMap(), o = new WeakMap(), h);
  return is.RealmStorage = t, is;
}
var os = {}, as = {}, Ha;
function Ph() {
  var s, t, r;
  if (Ha) return as;
  Ha = 1, Object.defineProperty(as, "__esModule", { value: !0 }), as.Buffer = void 0;
  class i {
    /**
     * @param capacity The buffer capacity.
     * @param onItemRemoved Delegate called for each removed element.
     */
    constructor(h, a) {
      y(this, s);
      y(this, t, []);
      y(this, r);
      P(this, s, h), P(this, r, a);
    }
    get() {
      return e(this, t);
    }
    add(h) {
      var a;
      for (e(this, t).push(h); e(this, t).length > e(this, s); ) {
        const c = e(this, t).shift();
        c !== void 0 && ((a = e(this, r)) == null || a.call(this, c));
      }
    }
  }
  return s = new WeakMap(), t = new WeakMap(), r = new WeakMap(), as.Buffer = i, as;
}
var cs = {}, za;
function Ih() {
  var s, t, r;
  if (za) return cs;
  za = 1, Object.defineProperty(cs, "__esModule", { value: !0 }), cs.IdWrapper = void 0;
  let i = (s = class {
    constructor() {
      y(this, r);
      P(this, r, ++Eo(s, t)._);
    }
    get id() {
      return e(this, r);
    }
  }, t = new WeakMap(), r = new WeakMap(), y(s, t, 0), s);
  return cs.IdWrapper = i, cs;
}
var us = {}, Ka;
function _h() {
  if (Ka) return us;
  Ka = 1, Object.defineProperty(us, "__esModule", { value: !0 }), us.isCdpEvent = s, us.assertSupportedEvent = t;
  const i = Se();
  function s(r) {
    var o;
    return ((o = r.split(".").at(0)) == null ? void 0 : o.startsWith(i.ChromiumBidi.BiDiModule.Cdp)) ?? !1;
  }
  function t(r) {
    if (!i.ChromiumBidi.EVENT_NAMES.has(r) && !s(r))
      throw new i.InvalidArgumentException(`Unknown event: ${r}`);
  }
  return us;
}
var ut = {}, Wa;
function kh() {
  var m, f, x, g, En, C;
  if (Wa) return ut;
  Wa = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.SubscriptionManager = void 0, ut.cartesianProduct = t, ut.unrollEvents = r, ut.difference = a;
  const i = Se(), s = wt();
  function t(...b) {
    return b.reduce((w, v) => w.flatMap((p) => v.map((I) => [p, I].flat())));
  }
  function r(b) {
    const w = /* @__PURE__ */ new Set();
    function v(p) {
      for (const I of p)
        w.add(I);
    }
    for (const p of b)
      switch (p) {
        case i.ChromiumBidi.BiDiModule.Bluetooth:
          v(Object.values(i.ChromiumBidi.Bluetooth.EventNames));
          break;
        case i.ChromiumBidi.BiDiModule.BrowsingContext:
          v(Object.values(i.ChromiumBidi.BrowsingContext.EventNames));
          break;
        case i.ChromiumBidi.BiDiModule.Input:
          v(Object.values(i.ChromiumBidi.Input.EventNames));
          break;
        case i.ChromiumBidi.BiDiModule.Log:
          v(Object.values(i.ChromiumBidi.Log.EventNames));
          break;
        case i.ChromiumBidi.BiDiModule.Network:
          v(Object.values(i.ChromiumBidi.Network.EventNames));
          break;
        case i.ChromiumBidi.BiDiModule.Script:
          v(Object.values(i.ChromiumBidi.Script.EventNames));
          break;
        case i.ChromiumBidi.BiDiModule.Speculation:
          v(Object.values(i.ChromiumBidi.Speculation.EventNames));
          break;
        default:
          w.add(p);
      }
    return w.values();
  }
  let o = (C = class {
    constructor(w) {
      y(this, g);
      y(this, m, []);
      y(this, f, /* @__PURE__ */ new Set());
      y(this, x);
      P(this, x, w);
    }
    getGoogChannelsSubscribedToEvent(w, v) {
      const p = /* @__PURE__ */ new Set();
      for (const I of e(this, m))
        T(this, g, En).call(this, I, w, v) && p.add(I.googChannel);
      return Array.from(p);
    }
    getGoogChannelsSubscribedToEventGlobally(w) {
      const v = /* @__PURE__ */ new Set();
      for (const p of e(this, m))
        T(this, g, En).call(this, p, w) && v.add(p.googChannel);
      return Array.from(v);
    }
    isSubscribedTo(w, v) {
      for (const p of e(this, m))
        if (T(this, g, En).call(this, p, w, v))
          return !0;
      return !1;
    }
    /**
     * Subscribes to event in the given context and goog:channel.
     * @return {SubscriptionItem[]} List of
     * subscriptions. If the event is a whole module, it will return all the specific
     * events. If the contextId is null, it will return all the top-level contexts which were
     * not subscribed before the command.
     */
    subscribe(w, v, p, I) {
      const n = {
        id: (0, s.uuidv4)(),
        eventNames: new Set(r(w)),
        topLevelTraversableIds: new Set(v.map((u) => {
          const D = e(this, x).findTopLevelContextId(u);
          if (!D)
            throw new i.NoSuchFrameException(`Top-level navigable not found for context id ${u}`);
          return D;
        })),
        userContextIds: new Set(p),
        googChannel: I
      };
      return e(this, m).push(n), e(this, f).add(n.id), n;
    }
    /**
     * Unsubscribes atomically from all events in the given contexts and channel.
     *
     * This is a legacy spec branch to unsubscribe by attributes.
     */
    unsubscribe(w, v) {
      const p = new Set(r(w)), I = [], n = /* @__PURE__ */ new Set();
      for (const u of e(this, m)) {
        if (u.googChannel !== v) {
          I.push(u);
          continue;
        }
        if (u.userContextIds.size !== 0) {
          I.push(u);
          continue;
        }
        if (h(u.eventNames, p).size === 0) {
          I.push(u);
          continue;
        }
        if (u.topLevelTraversableIds.size !== 0) {
          I.push(u);
          continue;
        }
        const D = new Set(u.eventNames);
        for (const E of p)
          D.has(E) && (n.add(E), D.delete(E));
        D.size !== 0 && I.push({
          ...u,
          eventNames: D
        });
      }
      if (!c(n, p))
        throw new i.InvalidArgumentException("No subscription found");
      P(this, m, I);
    }
    /**
     * Unsubscribes by subscriptionId.
     */
    unsubscribeById(w) {
      const v = new Set(w);
      if (a(v, e(this, f)).size !== 0)
        throw new i.InvalidArgumentException("No subscription found");
      P(this, m, e(this, m).filter((I) => !v.has(I.id))), P(this, f, a(e(this, f), v));
    }
  }, m = new WeakMap(), f = new WeakMap(), x = new WeakMap(), g = new WeakSet(), En = function(w, v, p) {
    let I = !1;
    for (const n of w.eventNames)
      if (
        // Event explicitly subscribed
        n === v || // Event subscribed via module
        n === v.split(".").at(0) || // Event explicitly subscribed compared to module
        n.split(".").at(0) === v
      ) {
        I = !0;
        break;
      }
    if (!I)
      return !1;
    if (w.userContextIds.size !== 0) {
      if (!p)
        return !1;
      const n = e(this, x).findContext(p);
      return n ? w.userContextIds.has(n.userContext) : !1;
    }
    if (w.topLevelTraversableIds.size !== 0) {
      if (!p)
        return !1;
      const n = e(this, x).findTopLevelContextId(p);
      return n !== null && w.topLevelTraversableIds.has(n);
    }
    return !0;
  }, C);
  ut.SubscriptionManager = o;
  function h(b, w) {
    const v = /* @__PURE__ */ new Set();
    for (const p of b)
      w.has(p) && v.add(p);
    return v;
  }
  function a(b, w) {
    const v = /* @__PURE__ */ new Set();
    for (const p of b)
      w.has(p) || v.add(p);
    return v;
  }
  function c(b, w) {
    if (b.size !== w.size)
      return !1;
    for (const v of b)
      if (!w.has(v))
        return !1;
    return !0;
  }
  return ut;
}
var Ga;
function Th() {
  var d, C, b, w, v, p, I, n, u, D, E, l, Cs, N, Mi, Sn, Fi;
  if (Ga) return os;
  Ga = 1;
  var i;
  Object.defineProperty(os, "__esModule", { value: !0 }), os.EventManager = void 0;
  const s = Se(), t = Ph(), r = pu(), o = Xs(), h = Ih(), a = oo(), c = _h(), m = kh();
  class f {
    constructor(R, F) {
      y(this, d, new h.IdWrapper());
      y(this, C);
      y(this, b);
      P(this, b, R), P(this, C, F);
    }
    get id() {
      return e(this, d).id;
    }
    get contextId() {
      return e(this, C);
    }
    get event() {
      return e(this, b);
    }
  }
  d = new WeakMap(), C = new WeakMap(), b = new WeakMap();
  const x = /* @__PURE__ */ new Map([[s.ChromiumBidi.Log.EventNames.LogEntryAdded, 100]]);
  let g = (l = class extends o.EventEmitter {
    constructor(F, q) {
      super();
      y(this, N);
      /**
       * Maps event name to a set of contexts where this event already happened.
       * Needed for getting buffered events from all the contexts in case of
       * subscripting to all contexts.
       */
      y(this, w, new r.DefaultMap(() => /* @__PURE__ */ new Set()));
      /**
       * Maps `eventName` + `browsingContext` to buffer. Used to get buffered events
       * during subscription. Channel-agnostic.
       */
      y(this, v, /* @__PURE__ */ new Map());
      /**
       * Maps `eventName` + `browsingContext` to  Map of goog:channel to last id.
       * Used to avoid sending duplicated events when user
       * subscribes -> unsubscribes -> subscribes.
       */
      y(this, p, /* @__PURE__ */ new Map());
      y(this, I);
      y(this, n);
      /**
       * Map of event name to hooks to be called when client is subscribed to the event.
       */
      y(this, u);
      y(this, D);
      P(this, n, F), P(this, D, q), P(this, I, new m.SubscriptionManager(F)), P(this, u, new r.DefaultMap(() => []));
    }
    get subscriptionManager() {
      return e(this, I);
    }
    addSubscribeHook(F, q) {
      e(this, u).get(F).push(q);
    }
    registerEvent(F, q) {
      this.registerPromiseEvent(Promise.resolve({
        kind: "success",
        value: F
      }), q, F.method);
    }
    registerGlobalEvent(F) {
      this.registerGlobalPromiseEvent(Promise.resolve({
        kind: "success",
        value: F
      }), F.method);
    }
    registerPromiseEvent(F, q, Z) {
      const B = new f(F, q), H = e(this, I).getGoogChannelsSubscribedToEvent(Z, q);
      T(this, N, Mi).call(this, B, Z);
      for (const U of H)
        this.emit("event", {
          message: a.OutgoingMessage.createFromPromise(F, U),
          event: Z
        }), T(this, N, Sn).call(this, B, U, Z);
    }
    registerGlobalPromiseEvent(F, q) {
      const Z = new f(F, null), B = e(this, I).getGoogChannelsSubscribedToEventGlobally(q);
      T(this, N, Mi).call(this, Z, q);
      for (const H of B)
        this.emit("event", {
          message: a.OutgoingMessage.createFromPromise(F, H),
          event: q
        }), T(this, N, Sn).call(this, Z, H, q);
    }
    async subscribe(F, q, Z, B) {
      for (const $ of F)
        (0, c.assertSupportedEvent)($);
      if (Z.length && q.length)
        throw new s.InvalidArgumentException("Both userContexts and contexts cannot be specified.");
      e(this, n).verifyContextsList(q), await e(this, D).verifyUserContextIdList(Z);
      const H = new Set((0, m.unrollEvents)(F)), U = /* @__PURE__ */ new Map(), Y = new Set(q.length ? q.map(($) => {
        const V = e(this, n).findTopLevelContextId($);
        if (!V)
          throw new s.InvalidArgumentException("Invalid context id");
        return V;
      }) : e(this, n).getTopLevelContexts().map(($) => $.id));
      for (const $ of H) {
        const V = new Set(e(this, n).getTopLevelContexts().map((Q) => Q.id).filter((Q) => e(this, I).isSubscribedTo($, Q)));
        U.set($, (0, m.difference)(Y, V));
      }
      const _ = e(this, I).subscribe(F, q, Z, B);
      for (const $ of _.eventNames)
        for (const V of Y)
          for (const Q of T(this, N, Fi).call(this, $, V, B))
            this.emit("event", {
              message: a.OutgoingMessage.createFromPromise(Q.event, B),
              event: $
            }), T(this, N, Sn).call(this, Q, B, $);
      for (const [$, V] of U)
        for (const Q of V)
          e(this, u).get($).forEach((ie) => ie(Q));
      return await this.toggleModulesIfNeeded(), _.id;
    }
    async unsubscribe(F, q) {
      for (const Z of F)
        (0, c.assertSupportedEvent)(Z);
      e(this, I).unsubscribe(F, q), await this.toggleModulesIfNeeded();
    }
    async unsubscribeByIds(F) {
      e(this, I).unsubscribeById(F), await this.toggleModulesIfNeeded();
    }
    async toggleModulesIfNeeded() {
      await Promise.all(e(this, n).getAllContexts().map(async (F) => await F.toggleModulesIfNeeded()));
    }
    clearBufferedEvents(F) {
      var q;
      for (const Z of x.keys()) {
        const B = T(q = i, E, Cs).call(q, Z, F);
        e(this, v).delete(B);
      }
    }
  }, w = new WeakMap(), v = new WeakMap(), p = new WeakMap(), I = new WeakMap(), n = new WeakMap(), u = new WeakMap(), D = new WeakMap(), E = new WeakSet(), Cs = function(F, q) {
    return JSON.stringify({ eventName: F, browsingContext: q });
  }, N = new WeakSet(), /**
   * If the event is buffer-able, put it in the buffer.
   */
  Mi = function(F, q) {
    var B;
    if (!x.has(q))
      return;
    const Z = T(B = i, E, Cs).call(B, q, F.contextId);
    e(this, v).has(Z) || e(this, v).set(Z, new t.Buffer(x.get(q))), e(this, v).get(Z).add(F), e(this, w).get(q).add(F.contextId);
  }, /**
   * If the event is buffer-able, mark it as sent to the given contextId and goog:channel.
   */
  Sn = function(F, q, Z) {
    var Y, _;
    if (!x.has(Z))
      return;
    const B = T(Y = i, E, Cs).call(Y, Z, F.contextId), H = Math.max(((_ = e(this, p).get(B)) == null ? void 0 : _.get(q)) ?? 0, F.id), U = e(this, p).get(B);
    U ? U.set(q, H) : e(this, p).set(B, /* @__PURE__ */ new Map([[q, H]]));
  }, /**
   * Returns events which are buffered and not yet sent to the given goog:channel events.
   */
  Fi = function(F, q, Z) {
    var Y, _, $;
    const B = T(Y = i, E, Cs).call(Y, F, q), H = ((_ = e(this, p).get(B)) == null ? void 0 : _.get(Z)) ?? -1 / 0, U = (($ = e(this, v).get(B)) == null ? void 0 : $.get().filter((V) => V.id > H)) ?? [];
    return q === null && Array.from(e(this, w).get(F).keys()).filter((V) => (
      // Events without context are already in the result.
      V !== null && // Events from deleted contexts should not be sent.
      e(this, n).hasContext(V)
    )).map((V) => T(this, N, Fi).call(this, F, V, Z)).forEach((V) => U.push(...V)), U.sort((V, Q) => V.id - Q.id);
  }, y(l, E), l);
  return os.EventManager = g, i = g, os;
}
var ds = {}, Va;
function Dh() {
  var t, r, o;
  if (Va) return ds;
  Va = 1, Object.defineProperty(ds, "__esModule", { value: !0 }), ds.SpeculationProcessor = void 0;
  const i = qe();
  let s = (o = class {
    constructor(a, c) {
      y(this, t);
      y(this, r);
      P(this, t, a), P(this, r, c);
    }
    onCdpTargetCreated(a) {
      a.cdpClient.on("Preload.prefetchStatusUpdated", (c) => {
        var f;
        let m;
        switch (c.status) {
          case "Running":
            m = "pending";
            break;
          case "Ready":
            m = "ready";
            break;
          case "Success":
            m = "success";
            break;
          case "Failure":
            m = "failure";
            break;
          default:
            (f = e(this, r)) == null || f.call(this, i.LogType.debugWarn, `Unknown prefetch status: ${c.status}`);
            return;
        }
        e(this, t).registerEvent({
          type: "event",
          method: "speculation.prefetchStatusUpdated",
          params: {
            context: c.initiatingFrameId,
            url: c.prefetchUrl,
            status: m
          }
        }, a.id);
      });
    }
  }, t = new WeakMap(), r = new WeakMap(), o);
  return ds.SpeculationProcessor = s, ds;
}
var Xa;
function Nh() {
  var w, v, p, I, n, u, D, E, l, S, N, k, A, z, Gu, R, Vu;
  if (Xa) return yr;
  Xa = 1, Object.defineProperty(yr, "__esModule", { value: !0 }), yr.BidiServer = void 0;
  const i = Xs(), s = qe(), t = Al(), r = ah(), o = ch(), h = dh(), a = lh(), c = bh(), m = xh(), f = Du(), x = Eh(), g = Sh(), d = Th(), C = Dh();
  let b = (z = class extends i.EventEmitter {
    constructor(B, H, U, Y, _, $, V) {
      super();
      y(this, R);
      y(this, w);
      y(this, v);
      y(this, p);
      y(this, I);
      y(this, n, new m.BrowsingContextStorage());
      y(this, u, new g.RealmStorage());
      y(this, D, new x.PreloadScriptStorage());
      y(this, E);
      y(this, l);
      y(this, S);
      y(this, N, (B) => {
        e(this, p).processCommand(B).catch((H) => {
          var U;
          (U = e(this, S)) == null || U.call(this, s.LogType.debugError, H);
        });
      });
      y(this, k, async (B) => {
        const H = B.message;
        B.googChannel !== null && (H["goog:channel"] = B.googChannel), await e(this, v).sendMessage(H);
      });
      P(this, S, V), P(this, w, new t.ProcessingQueue(e(this, k), e(this, S))), P(this, v, B), e(this, v).setOnMessage(e(this, N));
      const Q = new h.ContextConfigStorage(), ie = new a.UserContextStorage(U);
      P(this, I, new d.EventManager(e(this, n), ie));
      const se = new f.NetworkStorage(e(this, I), e(this, n), U, V);
      P(this, E, new o.BluetoothProcessor(e(this, I), e(this, n))), P(this, l, new C.SpeculationProcessor(e(this, I), e(this, S))), P(this, p, new r.CommandProcessor(H, U, e(this, I), e(this, n), e(this, u), e(this, D), se, Q, e(this, E), ie, $, async (me) => {
        await U.sendCommand("Security.setIgnoreCertificateErrors", {
          ignore: me.acceptInsecureCerts ?? !1
        }), Q.updateGlobalConfig({
          acceptInsecureCerts: me.acceptInsecureCerts ?? !1,
          userPromptHandler: me.unhandledPromptBehavior,
          prerenderingDisabled: (me == null ? void 0 : me["goog:prerenderingDisabled"]) ?? !1,
          disableNetworkDurableMessages: me == null ? void 0 : me["goog:disableNetworkDurableMessages"]
        }), new c.CdpTargetManager(H, U, Y, e(this, I), e(this, n), e(this, u), se, Q, e(this, E), e(this, l), e(this, D), _, V), await U.sendCommand("Target.setDiscoverTargets", {
          discover: !0
        }), await U.sendCommand("Target.setAutoAttach", {
          autoAttach: !0,
          waitForDebuggerOnStart: !0,
          flatten: !0,
          // Browser session should attach to tab instead of the page, so that
          // prerendering is not blocked.
          filter: [
            {
              type: "page",
              exclude: !0
            },
            {}
          ]
        }), await T(this, R, Vu).call(this);
      }, e(this, S))), e(this, I).on("event", ({ message: me, event: Ce }) => {
        this.emitOutgoingMessage(me, Ce);
      }), e(this, p).on("response", ({ message: me, event: Ce }) => {
        this.emitOutgoingMessage(me, Ce);
      });
    }
    /**
     * Creates and starts BiDi Mapper instance.
     */
    static async createAndStart(B, H, U, Y, _, $) {
      const [V] = await Promise.all([
        T(this, A, Gu).call(this, U),
        // Required for `Browser.downloadWillBegin` events.
        U.sendCommand("Browser.setDownloadBehavior", {
          behavior: "default",
          eventsEnabled: !0
        })
      ]);
      return new z(B, H, U, Y, V, _, $);
    }
    /**
     * Sends BiDi message.
     */
    emitOutgoingMessage(B, H) {
      e(this, w).add(B, H);
    }
    close() {
      e(this, v).close();
    }
  }, w = new WeakMap(), v = new WeakMap(), p = new WeakMap(), I = new WeakMap(), n = new WeakMap(), u = new WeakMap(), D = new WeakMap(), E = new WeakMap(), l = new WeakMap(), S = new WeakMap(), N = new WeakMap(), k = new WeakMap(), A = new WeakSet(), Gu = async function(B) {
    const [{ defaultBrowserContextId: H, browserContextIds: U }, { targetInfos: Y }] = await Promise.all([
      B.sendCommand("Target.getBrowserContexts"),
      B.sendCommand("Target.getTargets")
    ]);
    if (H)
      return H;
    for (const _ of Y)
      if (_.browserContextId && !U.includes(_.browserContextId))
        return _.browserContextId;
    return "default";
  }, R = new WeakSet(), Vu = async function() {
    await Promise.all(e(this, n).getTopLevelContexts().map((B) => B.lifecycleLoaded()));
  }, y(z, A), z);
  return yr.BidiServer = b, yr;
}
var Ja;
function Rh() {
  return Ja || (Ja = 1, (function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 }), i.OutgoingMessage = i.EventEmitter = i.BidiServer = void 0;
    var s = Nh();
    Object.defineProperty(i, "BidiServer", { enumerable: !0, get: function() {
      return s.BidiServer;
    } });
    var t = Xs();
    Object.defineProperty(i, "EventEmitter", { enumerable: !0, get: function() {
      return t.EventEmitter;
    } });
    var r = oo();
    Object.defineProperty(i, "OutgoingMessage", { enumerable: !0, get: function() {
      return r.OutgoingMessage;
    } });
  })(Qn)), Qn;
}
var ao = Rh(), It, pt, st;
const Pt = class Pt extends Ud {
  constructor(t, r) {
    super();
    y(this, It, !1);
    y(this, pt);
    y(this, st, so.create());
    X(this, "frame");
    /**
     * @internal
     */
    X(this, "onClose", () => {
      Pt.sessions.delete(this.id()), P(this, It, !0);
    });
    if (this.frame = t, !this.frame.page().browser().cdpSupported)
      return;
    const o = this.frame.page().browser().connection;
    P(this, pt, o), r ? (e(this, st).resolve(r), Pt.sessions.set(r, this)) : (async () => {
      try {
        const { result: h } = await o.send("goog:cdp.getSession", {
          context: t._id
        });
        e(this, st).resolve(h.session), Pt.sessions.set(h.session, this);
      } catch (h) {
        e(this, st).reject(h);
      }
    })(), Pt.sessions.set(e(this, st).value(), this);
  }
  connection() {
  }
  get detached() {
    return e(this, It);
  }
  async send(t, r, o) {
    if (e(this, pt) === void 0)
      throw new fe("CDP support is required for this feature. The current browser does not support CDP.");
    if (e(this, It))
      throw new no(`Protocol error (${t}): Session closed. Most likely the page has been closed.`);
    const h = await e(this, st).valueOrThrow(), { result: a } = await e(this, pt).send("goog:cdp.sendCommand", {
      method: t,
      params: r,
      session: h
    }, o == null ? void 0 : o.timeout);
    return a.result;
  }
  async detach() {
    if (!(e(this, pt) === void 0 || e(this, pt).closed || e(this, It)))
      try {
        await this.frame.client.send("Target.detachFromTarget", {
          sessionId: this.id()
        });
      } finally {
        this.onClose();
      }
  }
  id() {
    const t = e(this, st).value();
    return typeof t == "string" ? t : "";
  }
};
It = new WeakMap(), pt = new WeakMap(), st = new WeakMap(), X(Pt, "sessions", /* @__PURE__ */ new Map());
let bs = Pt;
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const Oh = io("puppeteer:webDriverBiDi:SEND ►"), Bh = io("puppeteer:webDriverBiDi:RECV ◀");
var Ss, Ge, er, Ps, _t, Ve, Is, _s, qi;
class Ah extends ve {
  constructor(t, r, o, h = 0, a) {
    super();
    y(this, _s);
    y(this, Ss);
    y(this, Ge);
    y(this, er);
    y(this, Ps, 0);
    y(this, _t, !1);
    y(this, Ve);
    y(this, Is, []);
    P(this, Ss, t), P(this, er, h), P(this, Ps, a ?? 18e4), P(this, Ve, new Ld(o)), P(this, Ge, r), e(this, Ge).onmessage = this.onMessage.bind(this), e(this, Ge).onclose = this.unbind.bind(this);
  }
  get closed() {
    return e(this, _t);
  }
  get url() {
    return e(this, Ss);
  }
  pipeTo(t) {
    e(this, Is).push(t);
  }
  emit(t, r) {
    process.env.PUPPETEER_WEBDRIVER_BIDI_ONLY === "true" && T(this, _s, qi).call(this, r);
    for (const o of e(this, Is))
      o.emit(t, r);
    return super.emit(t, r);
  }
  send(t, r, o) {
    return e(this, _t) ? Promise.reject(new $d("Connection closed.")) : e(this, Ve).create(t, o ?? e(this, Ps), (h) => {
      const a = JSON.stringify({
        id: h,
        method: t,
        params: r
      });
      Oh(a), e(this, Ge).send(a);
    });
  }
  /**
   * @internal
   */
  async onMessage(t) {
    var o;
    e(this, er) && await new Promise((h) => setTimeout(h, e(this, er))), Bh(t);
    const r = JSON.parse(t);
    if ("type" in r)
      switch (r.type) {
        case "success":
          e(this, Ve).resolve(r.id, r);
          return;
        case "error":
          if (r.id === null)
            break;
          e(this, Ve).reject(r.id, Mh(r), `${r.error}: ${r.message}`);
          return;
        case "event":
          if (Fh(r)) {
            (o = bs.sessions.get(r.params.session)) == null || o.emit(r.params.event, r.params.params);
            return;
          }
          this.emit(r.method, r.params);
          return;
      }
    "id" in r && e(this, Ve).reject(r.id, `Protocol Error. Message is not in BiDi protocol format: '${t}'`, r.message), Ae(r);
  }
  /**
   * Unbinds the connection, but keeps the transport open. Useful when the transport will
   * be reused by other connection e.g. with different protocol.
   * @internal
   */
  unbind() {
    e(this, _t) || (P(this, _t, !0), e(this, Ge).onmessage = () => {
    }, e(this, Ge).onclose = () => {
    }, e(this, Ve).clear());
  }
  /**
   * Unbinds the connection and closes the transport.
   */
  dispose() {
    this.unbind(), e(this, Ge).close();
  }
  getPendingProtocolErrors() {
    return e(this, Ve).getPendingProtocolErrors();
  }
}
Ss = new WeakMap(), Ge = new WeakMap(), er = new WeakMap(), Ps = new WeakMap(), _t = new WeakMap(), Ve = new WeakMap(), Is = new WeakMap(), _s = new WeakSet(), qi = function(t) {
  for (const r in t)
    r.startsWith("goog:") ? delete t[r] : typeof t[r] == "object" && t[r] !== null && T(this, _s, qi).call(this, t[r]);
};
function Mh(i) {
  let s = `${i.error} ${i.message}`;
  return i.stacktrace && (s += ` ${i.stacktrace}`), s;
}
function Fh(i) {
  return i.method.startsWith("goog:cdp.");
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const qh = (i, ...s) => {
  io(`bidi:${i}`)(s);
};
async function kf(i) {
  const s = new Uh(), t = new jh(i), r = {
    send(a) {
      s.emitMessage(JSON.parse(a));
    },
    close() {
      h.close(), t.close(), i.dispose();
    },
    onmessage(a) {
    }
  };
  s.on("bidiResponse", (a) => {
    r.onmessage(JSON.stringify(a));
  });
  const o = new Ah(i.url(), r, i._idGenerator, i.delay, i.timeout), h = await ao.BidiServer.createAndStart(
    s,
    t,
    t.browserClient(),
    /* selfTargetId= */
    "",
    void 0,
    qh
  );
  return o;
}
var ks, kt, Tt;
class jh {
  constructor(s) {
    y(this, ks);
    y(this, kt, /* @__PURE__ */ new Map());
    y(this, Tt);
    P(this, ks, s), P(this, Tt, new Ya(s));
  }
  browserClient() {
    return e(this, Tt);
  }
  getCdpClient(s) {
    const t = e(this, ks).session(s);
    if (!t)
      throw new Error(`Unknown CDP session with id ${s}`);
    if (!e(this, kt).has(t)) {
      const r = new Ya(t, s, e(this, Tt));
      return e(this, kt).set(t, r), r;
    }
    return e(this, kt).get(t);
  }
  close() {
    e(this, Tt).close();
    for (const s of e(this, kt).values())
      s.close();
  }
}
ks = new WeakMap(), kt = new WeakMap(), Tt = new WeakMap();
var tr, Dt, Ts, Ds;
class Ya extends ao.EventEmitter {
  constructor(t, r, o) {
    super();
    y(this, tr, !1);
    y(this, Dt);
    X(this, "sessionId");
    y(this, Ts);
    y(this, Ds, (t, r) => {
      this.emit(t, r);
    });
    P(this, Dt, t), this.sessionId = r, P(this, Ts, o), e(this, Dt).on("*", e(this, Ds));
  }
  browserClient() {
    return e(this, Ts);
  }
  async sendCommand(t, ...r) {
    if (!e(this, tr))
      try {
        return await e(this, Dt).send(t, ...r);
      } catch (o) {
        if (e(this, tr))
          return;
        throw o;
      }
  }
  close() {
    e(this, Dt).off("*", e(this, Ds)), P(this, tr, !0);
  }
  isCloseError(t) {
    return t instanceof no;
  }
}
tr = new WeakMap(), Dt = new WeakMap(), Ts = new WeakMap(), Ds = new WeakMap();
var rr;
class Uh extends ao.EventEmitter {
  constructor() {
    super(...arguments);
    y(this, rr, async (t) => {
    });
  }
  emitMessage(t) {
    e(this, rr).call(this, t);
  }
  setOnMessage(t) {
    P(this, rr, t);
  }
  async sendMessage(t) {
    this.emit("bidiResponse", t);
  }
  close() {
    P(this, rr, async (t) => {
    });
  }
}
rr = new WeakMap();
/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Nt, Rt;
class Lh {
  constructor(s, t) {
    y(this, Nt);
    y(this, Rt);
    P(this, Rt, s), P(this, Nt, t);
  }
  async emulateAdapter(s, t = !0) {
    await e(this, Nt).send("bluetooth.simulateAdapter", {
      context: e(this, Rt),
      state: s,
      leSupported: t
    });
  }
  async disableEmulation() {
    await e(this, Nt).send("bluetooth.disableSimulation", {
      context: e(this, Rt)
    });
  }
  async simulatePreconnectedPeripheral(s) {
    await e(this, Nt).send("bluetooth.simulatePreconnectedPeripheral", {
      context: e(this, Rt),
      address: s.address,
      name: s.name,
      manufacturerData: s.manufacturerData,
      knownServiceUuids: s.knownServiceUuids
    });
  }
}
Nt = new WeakMap(), Rt = new WeakMap();
/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var ft, Ot, Ns, An, Xu;
class $h {
  constructor(s, t) {
    y(this, An);
    y(this, ft);
    y(this, Ot);
    y(this, Ns, !1);
    P(this, ft, t), P(this, Ot, s);
  }
  async waitForDevicePrompt(s, t) {
    const r = so.create({
      message: `Waiting for \`DeviceRequestPrompt\` failed: ${s}ms exceeded`,
      timeout: s
    }), o = (h) => {
      h.context === e(this, Ot) && (r.resolve(new Hh(e(this, Ot), h.prompt, e(this, ft), h.devices)), e(this, ft).off("bluetooth.requestDevicePromptUpdated", o));
    };
    return e(this, ft).on("bluetooth.requestDevicePromptUpdated", o), t && t.addEventListener("abort", () => {
      r.reject(t.reason);
    }, { once: !0 }), await T(this, An, Xu).call(this), await r.valueOrThrow();
  }
}
ft = new WeakMap(), Ot = new WeakMap(), Ns = new WeakMap(), An = new WeakSet(), Xu = async function() {
  e(this, Ns) || (P(this, Ns, !0), await e(this, ft).subscribe(["bluetooth.requestDevicePromptUpdated"], [e(this, Ot)]));
};
var sr, nr, ir;
class Hh extends Hd {
  constructor(t, r, o, h) {
    super();
    y(this, sr);
    y(this, nr);
    y(this, ir);
    P(this, sr, o), P(this, nr, r), P(this, ir, t), this.devices.push(...h.map((a) => ({
      id: a.id,
      name: a.name ?? "UNKNOWN"
    })));
  }
  async cancel() {
    await e(this, sr).send("bluetooth.handleRequestDevicePrompt", {
      context: e(this, ir),
      prompt: e(this, nr),
      accept: !1
    });
  }
  async select(t) {
    await e(this, sr).send("bluetooth.handleRequestDevicePrompt", {
      context: e(this, ir),
      prompt: e(this, nr),
      accept: !0,
      device: t.id
    });
  }
  waitForDevice() {
    throw new fe();
  }
}
sr = new WeakMap(), nr = new WeakMap(), ir = new WeakMap();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var zh = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, Kh = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
};
let Wh = (() => {
  var r, o, h, a, c, m, Ju, Pn, Yu, d;
  let i = ve, s = [], t;
  return d = class extends i {
    constructor(w) {
      super();
      y(this, m);
      y(this, r, zh(this, s));
      y(this, o);
      y(this, h);
      y(this, a, new Ye());
      y(this, c);
      P(this, h, w);
    }
    static from(w) {
      var p;
      const v = new d(w);
      return T(p = v, m, Ju).call(p), v;
    }
    get disposed() {
      return e(this, a).disposed;
    }
    get request() {
      return e(this, r);
    }
    get navigation() {
      return e(this, o);
    }
    dispose() {
      this[Te]();
    }
    [(t = [mt], Te)]() {
      e(this, a).dispose(), super[Te]();
    }
  }, r = new WeakMap(), o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c = new WeakMap(), m = new WeakSet(), Ju = function() {
    const w = e(this, a).use(new ve(e(this, h)));
    w.once("closed", () => {
      this.emit("failed", {
        url: e(this, h).url,
        timestamp: /* @__PURE__ */ new Date()
      }), this.dispose();
    }), w.on("request", ({ request: p }) => {
      if (p.navigation === void 0 || // If a request with a navigation ID comes in, then the navigation ID is
      // for this navigation.
      !T(this, m, Pn).call(this, p.navigation))
        return;
      P(this, r, p), this.emit("request", p), e(this, a).use(new ve(e(this, r))).on("redirect", (n) => {
        P(this, r, n);
      });
    });
    const v = e(this, a).use(new ve(e(this, m, Yu)));
    v.on("browsingContext.navigationStarted", (p) => {
      p.context !== e(this, h).id || e(this, o) !== void 0 || P(this, o, d.from(e(this, h)));
    });
    for (const p of [
      "browsingContext.domContentLoaded",
      "browsingContext.load"
    ])
      v.on(p, (I) => {
        I.context !== e(this, h).id || I.navigation === null || !T(this, m, Pn).call(this, I.navigation) || this.dispose();
      });
    for (const [p, I] of [
      ["browsingContext.fragmentNavigated", "fragment"],
      ["browsingContext.navigationFailed", "failed"],
      ["browsingContext.navigationAborted", "aborted"]
    ])
      v.on(p, (n) => {
        n.context !== e(this, h).id || // Note we don't check if `navigation` is null since `null` means the
        // fragment navigated.
        !T(this, m, Pn).call(this, n.navigation) || (this.emit(I, {
          url: n.url,
          timestamp: new Date(n.timestamp)
        }), this.dispose());
      });
  }, Pn = function(w) {
    return e(this, o) !== void 0 && !e(this, o).disposed ? !1 : e(this, c) === void 0 ? (P(this, c, w), !0) : e(this, c) === w;
  }, Yu = function() {
    return e(this, h).userContext.browser.session;
  }, (() => {
    const w = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    Kh(d, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (v) => "dispose" in v, get: (v) => v.dispose }, metadata: w }, null, s), w && Object.defineProperty(d, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: w });
  })(), d;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Gh = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, ls = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
}, ji;
let co = (() => {
  var c, m;
  let i = ve, s = [], t, r, o, h, a;
  return m = class extends i {
    constructor(g, d) {
      super();
      y(this, c, Gh(this, s));
      X(this, "disposables", new Ye());
      X(this, "id");
      X(this, "origin");
      X(this, "executionContextId");
      this.id = g, this.origin = d;
    }
    get disposed() {
      return e(this, c) !== void 0;
    }
    get target() {
      return { realm: this.id };
    }
    dispose(g) {
      P(this, c, g), this[Te]();
    }
    async disown(g) {
      await this.session.send("script.disown", {
        target: this.target,
        handles: g
      });
    }
    async callFunction(g, d, C = {}) {
      const { result: b } = await this.session.send("script.callFunction", {
        functionDeclaration: g,
        awaitPromise: d,
        target: this.target,
        ...C
      });
      return b;
    }
    async evaluate(g, d, C = {}) {
      const { result: b } = await this.session.send("script.evaluate", {
        expression: g,
        awaitPromise: d,
        target: this.target,
        ...C
      });
      return b;
    }
    async resolveExecutionContextId() {
      if (!this.executionContextId) {
        const { result: g } = await this.session.connection.send("goog:cdp.resolveRealm", { realm: this.id });
        this.executionContextId = g.executionContextId;
      }
      return this.executionContextId;
    }
    [(t = [mt], r = [le((g) => e(g, c))], o = [le((g) => e(g, c))], h = [le((g) => e(g, c))], a = [le((g) => e(g, c))], Te)]() {
      e(this, c) ?? P(this, c, "Realm already destroyed, probably because all associated browsing contexts closed."), this.emit("destroyed", { reason: e(this, c) }), this.disposables.dispose(), super[Te]();
    }
  }, c = new WeakMap(), (() => {
    const g = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    ls(m, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (d) => "dispose" in d, get: (d) => d.dispose }, metadata: g }, null, s), ls(m, null, r, { kind: "method", name: "disown", static: !1, private: !1, access: { has: (d) => "disown" in d, get: (d) => d.disown }, metadata: g }, null, s), ls(m, null, o, { kind: "method", name: "callFunction", static: !1, private: !1, access: { has: (d) => "callFunction" in d, get: (d) => d.callFunction }, metadata: g }, null, s), ls(m, null, h, { kind: "method", name: "evaluate", static: !1, private: !1, access: { has: (d) => "evaluate" in d, get: (d) => d.evaluate }, metadata: g }, null, s), ls(m, null, a, { kind: "method", name: "resolveExecutionContextId", static: !1, private: !1, access: { has: (d) => "resolveExecutionContextId" in d, get: (d) => d.resolveExecutionContextId }, metadata: g }, null, s), g && Object.defineProperty(m, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: g });
  })(), m;
})();
var Rs, Mn, Qu;
const lo = class lo extends co {
  constructor(t, r) {
    super("", "");
    y(this, Mn);
    X(this, "browsingContext");
    X(this, "sandbox");
    y(this, Rs, /* @__PURE__ */ new Map());
    this.browsingContext = t, this.sandbox = r;
  }
  static from(t, r) {
    var h;
    const o = new lo(t, r);
    return T(h = o, Mn, Qu).call(h), o;
  }
  get session() {
    return this.browsingContext.userContext.browser.session;
  }
  get target() {
    return { context: this.browsingContext.id, sandbox: this.sandbox };
  }
};
Rs = new WeakMap(), Mn = new WeakSet(), Qu = function() {
  this.disposables.use(new ve(this.browsingContext)).on("closed", ({ reason: o }) => {
    this.dispose(o);
  });
  const r = this.disposables.use(new ve(this.session));
  r.on("script.realmCreated", (o) => {
    o.type !== "window" || o.context !== this.browsingContext.id || o.sandbox !== this.sandbox || (this.id = o.realm, this.origin = o.origin, this.executionContextId = void 0, this.emit("updated", this));
  }), r.on("script.realmCreated", (o) => {
    if (o.type !== "dedicated-worker" || !o.owners.includes(this.id))
      return;
    const h = uo.from(this, o.realm, o.origin);
    e(this, Rs).set(h.id, h);
    const a = this.disposables.use(new ve(h));
    a.once("destroyed", () => {
      a.removeAllListeners(), e(this, Rs).delete(h.id);
    }), this.emit("worker", h);
  });
};
let Ui = lo;
var Os, Fn, Zu;
class uo extends co {
  constructor(t, r, o) {
    super(r, o);
    y(this, Fn);
    y(this, Os, /* @__PURE__ */ new Map());
    X(this, "owners");
    this.owners = /* @__PURE__ */ new Set([t]);
  }
  static from(t, r, o) {
    var a;
    const h = new ji(t, r, o);
    return T(a = h, Fn, Zu).call(a), h;
  }
  get session() {
    return this.owners.values().next().value.session;
  }
}
Os = new WeakMap(), Fn = new WeakSet(), Zu = function() {
  const t = this.disposables.use(new ve(this.session));
  t.on("script.realmDestroyed", (r) => {
    r.realm === this.id && this.dispose("Realm already destroyed.");
  }), t.on("script.realmCreated", (r) => {
    if (r.type !== "dedicated-worker" || !r.owners.includes(this.id))
      return;
    const o = ji.from(this, r.realm, r.origin);
    e(this, Os).set(o.id, o), this.disposables.use(new ve(o)).once("destroyed", () => {
      e(this, Os).delete(o.id);
    }), this.emit("worker", o);
  });
};
ji = uo;
var Bs, qn, ed;
const ho = class ho extends co {
  constructor(t, r, o) {
    super(r, o);
    y(this, qn);
    y(this, Bs, /* @__PURE__ */ new Map());
    X(this, "browser");
    this.browser = t;
  }
  static from(t, r, o) {
    var a;
    const h = new ho(t, r, o);
    return T(a = h, qn, ed).call(a), h;
  }
  get session() {
    return this.browser.session;
  }
};
Bs = new WeakMap(), qn = new WeakSet(), ed = function() {
  const t = this.disposables.use(new ve(this.session));
  t.on("script.realmDestroyed", (r) => {
    r.realm === this.id && this.dispose("Realm already destroyed.");
  }), t.on("script.realmCreated", (r) => {
    if (r.type !== "dedicated-worker" || !r.owners.includes(this.id))
      return;
    const o = uo.from(this, r.realm, r.origin);
    e(this, Bs).set(o.id, o), this.disposables.use(new ve(o)).once("destroyed", () => {
      e(this, Bs).delete(o.id);
    }), this.emit("worker", o);
  });
};
let Li = ho;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Vh = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, Xh = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
};
let Jh = (() => {
  var r, o, h, a, c, m, f, x, g, td, rt, b;
  let i = ve, s = [], t;
  return b = class extends i {
    constructor(p, I) {
      super();
      y(this, g);
      y(this, r, (Vh(this, s), null));
      y(this, o, null);
      y(this, h);
      y(this, a);
      y(this, c);
      y(this, m);
      y(this, f, new Ye());
      y(this, x);
      P(this, m, p), P(this, x, I);
    }
    static from(p, I) {
      var u;
      const n = new b(p, I);
      return T(u = n, g, td).call(u), n;
    }
    get disposed() {
      return e(this, f).disposed;
    }
    get error() {
      return e(this, h);
    }
    get headers() {
      return e(this, x).request.headers;
    }
    get id() {
      return e(this, x).request.request;
    }
    get initiator() {
      var p, I;
      return {
        ...e(this, x).initiator,
        // Initiator URL is not specified in BiDi.
        // @ts-expect-error non-standard property.
        url: (p = e(this, x).request["goog:resourceInitiator"]) == null ? void 0 : p.url,
        // @ts-expect-error non-standard property.
        stack: (I = e(this, x).request["goog:resourceInitiator"]) == null ? void 0 : I.stack
      };
    }
    get method() {
      return e(this, x).request.method;
    }
    get navigation() {
      return e(this, x).navigation ?? void 0;
    }
    get redirect() {
      return e(this, a);
    }
    get lastRedirect() {
      let p = e(this, a);
      for (; p; ) {
        if (p && !e(p, a))
          return p;
        p = e(p, a);
      }
      return p;
    }
    get response() {
      return e(this, c);
    }
    get url() {
      return e(this, x).request.url;
    }
    get isBlocked() {
      return e(this, x).isBlocked;
    }
    get resourceType() {
      return e(this, x).request["goog:resourceType"] ?? void 0;
    }
    get postData() {
      return e(this, x).request["goog:postData"] ?? void 0;
    }
    get hasPostData() {
      return (e(this, x).request.bodySize ?? 0) > 0;
    }
    async continueRequest({ url: p, method: I, headers: n, cookies: u, body: D }) {
      await e(this, g, rt).send("network.continueRequest", {
        request: this.id,
        url: p,
        method: I,
        headers: n,
        body: D,
        cookies: u
      });
    }
    async failRequest() {
      await e(this, g, rt).send("network.failRequest", {
        request: this.id
      });
    }
    async provideResponse({ statusCode: p, reasonPhrase: I, headers: n, body: u }) {
      await e(this, g, rt).send("network.provideResponse", {
        request: this.id,
        statusCode: p,
        reasonPhrase: I,
        headers: n,
        body: u
      });
    }
    async fetchPostData() {
      if (this.hasPostData)
        return e(this, o) || P(this, o, (async () => {
          const p = await e(this, g, rt).send("network.getData", {
            dataType: "request",
            request: this.id
          });
          if (p.result.bytes.type === "string")
            return p.result.bytes.value;
          throw new fe(`Collected request body data of type ${p.result.bytes.type} is not supported`);
        })()), await e(this, o);
    }
    async getResponseContent() {
      return e(this, r) || P(this, r, (async () => {
        try {
          const p = await e(this, g, rt).send("network.getData", {
            dataType: "response",
            request: this.id
          });
          return lc(p.result.bytes.value, p.result.bytes.type === "base64");
        } catch (p) {
          throw p instanceof Tn && p.originalMessage.includes("No resource with given identifier found") ? new Tn("Could not load response body for this request. This might happen if the request is a preflight request.") : p;
        }
      })()), await e(this, r);
    }
    async continueWithAuth(p) {
      p.action === "provideCredentials" ? await e(this, g, rt).send("network.continueWithAuth", {
        request: this.id,
        action: p.action,
        credentials: p.credentials
      }) : await e(this, g, rt).send("network.continueWithAuth", {
        request: this.id,
        action: p.action
      });
    }
    dispose() {
      this[Te]();
    }
    [(t = [mt], Te)]() {
      e(this, f).dispose(), super[Te]();
    }
    timing() {
      return e(this, x).request.timings;
    }
  }, r = new WeakMap(), o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c = new WeakMap(), m = new WeakMap(), f = new WeakMap(), x = new WeakMap(), g = new WeakSet(), td = function() {
    e(this, f).use(new ve(e(this, m))).once("closed", ({ reason: n }) => {
      P(this, h, n), this.emit("error", e(this, h)), this.dispose();
    });
    const I = e(this, f).use(new ve(e(this, g, rt)));
    I.on("network.beforeRequestSent", (n) => {
      if (n.context !== e(this, m).id || n.request.request !== this.id)
        return;
      const u = e(this, x).request.headers.find((l) => l.name.toLowerCase() === "authorization"), E = n.request.headers.find((l) => l.name.toLowerCase() === "authorization") && !u;
      n.redirectCount !== e(this, x).redirectCount + 1 && !E || (P(this, a, b.from(e(this, m), n)), this.emit("redirect", e(this, a)), this.dispose());
    }), I.on("network.authRequired", (n) => {
      n.context !== e(this, m).id || n.request.request !== this.id || // Don't try to authenticate for events that are not blocked
      !n.isBlocked || this.emit("authenticate", void 0);
    }), I.on("network.fetchError", (n) => {
      n.context !== e(this, m).id || n.request.request !== this.id || e(this, x).redirectCount !== n.redirectCount || (P(this, h, n.errorText), this.emit("error", e(this, h)), this.dispose());
    }), I.on("network.responseStarted", (n) => {
      n.context !== e(this, m).id || n.request.request !== this.id || e(this, x).redirectCount !== n.redirectCount || (P(this, c, n.response), e(this, x).request.timings = n.request.timings, this.emit("response", e(this, c)));
    }), I.on("network.responseCompleted", (n) => {
      n.context !== e(this, m).id || n.request.request !== this.id || e(this, x).redirectCount !== n.redirectCount || (P(this, c, n.response), e(this, x).request.timings = n.request.timings, this.emit("success", e(this, c)), !(e(this, c).status >= 300 && e(this, c).status < 400) && this.dispose());
    });
  }, rt = function() {
    return e(this, m).userContext.browser.session;
  }, (() => {
    const p = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    Xh(b, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (I) => "dispose" in I, get: (I) => I.dispose }, metadata: p }, null, s), p && Object.defineProperty(b, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: p });
  })(), b;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Yh = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, Qa = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
};
let Qh = (() => {
  var o, h, a, c, rd, $i, x;
  let i = ve, s = [], t, r;
  return x = class extends i {
    constructor(C, b) {
      super();
      y(this, c);
      y(this, o, Yh(this, s));
      y(this, h);
      y(this, a, new Ye());
      X(this, "browsingContext");
      X(this, "info");
      this.browsingContext = C, this.info = b;
    }
    static from(C, b) {
      var v;
      const w = new x(C, b);
      return T(v = w, c, rd).call(v), w;
    }
    get closed() {
      return e(this, o) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get handled() {
      return this.info.handler === "accept" || this.info.handler === "dismiss" ? !0 : e(this, h) !== void 0;
    }
    get result() {
      return e(this, h);
    }
    dispose(C) {
      P(this, o, C), this[Te]();
    }
    async handle(C = {}) {
      return await e(this, c, $i).send("browsingContext.handleUserPrompt", {
        ...C,
        context: this.info.context
      }), e(this, h);
    }
    [(t = [mt], r = [le((C) => e(C, o))], Te)]() {
      e(this, o) ?? P(this, o, "User prompt already closed, probably because the associated browsing context was destroyed."), this.emit("closed", { reason: e(this, o) }), e(this, a).dispose(), super[Te]();
    }
  }, o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c = new WeakSet(), rd = function() {
    e(this, a).use(new ve(this.browsingContext)).once("closed", ({ reason: w }) => {
      this.dispose(`User prompt already closed: ${w}`);
    }), e(this, a).use(new ve(e(this, c, $i))).on("browsingContext.userPromptClosed", (w) => {
      w.context === this.browsingContext.id && (P(this, h, w), this.emit("handled", w), this.dispose("User prompt already handled."));
    });
  }, $i = function() {
    return this.browsingContext.userContext.browser.session;
  }, (() => {
    const C = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    Qa(x, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (b) => "dispose" in b, get: (b) => b.dispose }, metadata: C }, null, s), Qa(x, null, r, { kind: "method", name: "handle", static: !1, private: !1, access: { has: (b) => "handle" in b, get: (b) => b.handle }, metadata: C }, null, s), C && Object.defineProperty(x, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: C });
  })(), x;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Zh = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, Ie = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
};
let ep = (() => {
  var K, R, F, q, Z, B, H, U, Y, _, $, sd, _e, Hi, se;
  let i = ve, s = [], t, r, o, h, a, c, m, f, x, g, d, C, b, w, v, p, I, n, u, D, E, l, S, N, k, A, z;
  return se = class extends i {
    constructor(j, L, ae, we, be) {
      super();
      y(this, $);
      y(this, K, Zh(this, s));
      y(this, R);
      y(this, F);
      y(this, q, /* @__PURE__ */ new Map());
      y(this, Z, new Ye());
      y(this, B, /* @__PURE__ */ new Map());
      y(this, H, /* @__PURE__ */ new Map());
      X(this, "defaultRealm");
      X(this, "id");
      X(this, "parent");
      X(this, "userContext");
      X(this, "originalOpener");
      y(this, U, { javaScriptEnabled: !0 });
      y(this, Y);
      y(this, _);
      P(this, F, we), this.id = ae, this.parent = L, this.userContext = j, this.originalOpener = be, this.defaultRealm = T(this, $, Hi).call(this), P(this, Y, new Lh(this.id, e(this, $, _e))), P(this, _, new $h(this.id, e(this, $, _e)));
    }
    static from(j, L, ae, we, be) {
      var O;
      const ue = new se(j, L, ae, we, be);
      return T(O = ue, $, sd).call(O), ue;
    }
    get children() {
      return e(this, q).values();
    }
    get closed() {
      return e(this, R) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get realms() {
      const j = this;
      return (function* () {
        yield j.defaultRealm, yield* e(j, B).values();
      })();
    }
    get top() {
      let j = this;
      for (let { parent: L } = j; L; { parent: L } = j)
        j = L;
      return j;
    }
    get url() {
      return e(this, F);
    }
    dispose(j) {
      P(this, R, j);
      for (const L of e(this, q).values())
        L.dispose("Parent browsing context was disposed");
      this[Te]();
    }
    async activate() {
      await e(this, $, _e).send("browsingContext.activate", {
        context: this.id
      });
    }
    async captureScreenshot(j = {}) {
      const { result: { data: L } } = await e(this, $, _e).send("browsingContext.captureScreenshot", {
        context: this.id,
        ...j
      });
      return L;
    }
    async close(j) {
      await Promise.all([...e(this, q).values()].map(async (L) => {
        await L.close(j);
      })), await e(this, $, _e).send("browsingContext.close", {
        context: this.id,
        promptUnload: j
      });
    }
    async traverseHistory(j) {
      await e(this, $, _e).send("browsingContext.traverseHistory", {
        context: this.id,
        delta: j
      });
    }
    async navigate(j, L) {
      await e(this, $, _e).send("browsingContext.navigate", {
        context: this.id,
        url: j,
        wait: L
      });
    }
    async reload(j = {}) {
      await e(this, $, _e).send("browsingContext.reload", {
        context: this.id,
        ...j
      });
    }
    async setCacheBehavior(j) {
      await e(this, $, _e).send("network.setCacheBehavior", {
        contexts: [this.id],
        cacheBehavior: j
      });
    }
    async print(j = {}) {
      const { result: { data: L } } = await e(this, $, _e).send("browsingContext.print", {
        context: this.id,
        ...j
      });
      return L;
    }
    async handleUserPrompt(j = {}) {
      await e(this, $, _e).send("browsingContext.handleUserPrompt", {
        context: this.id,
        ...j
      });
    }
    async setViewport(j = {}) {
      await e(this, $, _e).send("browsingContext.setViewport", {
        context: this.id,
        ...j
      });
    }
    async performActions(j) {
      await e(this, $, _e).send("input.performActions", {
        context: this.id,
        actions: j
      });
    }
    async releaseActions() {
      await e(this, $, _e).send("input.releaseActions", {
        context: this.id
      });
    }
    createWindowRealm(j) {
      return T(this, $, Hi).call(this, j);
    }
    async addPreloadScript(j, L = {}) {
      return await this.userContext.browser.addPreloadScript(j, {
        ...L,
        contexts: [this]
      });
    }
    async addIntercept(j) {
      const { result: { intercept: L } } = await this.userContext.browser.session.send("network.addIntercept", {
        ...j,
        contexts: [this.id]
      });
      return L;
    }
    async removePreloadScript(j) {
      await this.userContext.browser.removePreloadScript(j);
    }
    async setGeolocationOverride(j) {
      if (!("coordinates" in j))
        throw new Error("Missing coordinates");
      await this.userContext.browser.session.send("emulation.setGeolocationOverride", {
        coordinates: j.coordinates,
        contexts: [this.id]
      });
    }
    async setTimezoneOverride(j) {
      j != null && j.startsWith("GMT") && (j = j == null ? void 0 : j.replace("GMT", "")), await this.userContext.browser.session.send("emulation.setTimezoneOverride", {
        timezone: j ?? null,
        contexts: [this.id]
      });
    }
    async setScreenOrientationOverride(j) {
      await e(this, $, _e).send("emulation.setScreenOrientationOverride", {
        screenOrientation: j,
        contexts: [this.id]
      });
    }
    async getCookies(j = {}) {
      const { result: { cookies: L } } = await e(this, $, _e).send("storage.getCookies", {
        ...j,
        partition: {
          type: "context",
          context: this.id
        }
      });
      return L;
    }
    async setCookie(j) {
      await e(this, $, _e).send("storage.setCookie", {
        cookie: j,
        partition: {
          type: "context",
          context: this.id
        }
      });
    }
    async setFiles(j, L) {
      await e(this, $, _e).send("input.setFiles", {
        context: this.id,
        element: j,
        files: L
      });
    }
    async subscribe(j) {
      await e(this, $, _e).subscribe(j, [this.id]);
    }
    async addInterception(j) {
      await e(this, $, _e).subscribe(j, [this.id]);
    }
    [(t = [mt], r = [le((j) => e(j, R))], o = [le((j) => e(j, R))], h = [le((j) => e(j, R))], a = [le((j) => e(j, R))], c = [le((j) => e(j, R))], m = [le((j) => e(j, R))], f = [le((j) => e(j, R))], x = [le((j) => e(j, R))], g = [le((j) => e(j, R))], d = [le((j) => e(j, R))], C = [le((j) => e(j, R))], b = [le((j) => e(j, R))], w = [le((j) => e(j, R))], v = [le((j) => e(j, R))], p = [le((j) => e(j, R))], I = [le((j) => e(j, R))], n = [le((j) => e(j, R))], u = [le((j) => e(j, R))], D = [le((j) => e(j, R))], E = [le((j) => e(j, R))], l = [le((j) => e(j, R))], S = [le((j) => e(j, R))], N = [le((j) => e(j, R))], k = [le((j) => e(j, R))], Te)]() {
      e(this, R) ?? P(this, R, "Browsing context already closed, probably because the user context closed."), this.emit("closed", { reason: e(this, R) }), e(this, Z).dispose(), super[Te]();
    }
    async deleteCookie(...j) {
      await Promise.all(j.map(async (L) => {
        await e(this, $, _e).send("storage.deleteCookies", {
          filter: L,
          partition: {
            type: "context",
            context: this.id
          }
        });
      }));
    }
    async locateNodes(j, L) {
      return (await e(this, $, _e).send("browsingContext.locateNodes", {
        context: this.id,
        locator: j,
        startNodes: L.length ? L : void 0
      })).result.nodes;
    }
    async setJavaScriptEnabled(j) {
      await this.userContext.browser.session.send("emulation.setScriptingEnabled", {
        // Enabled `null` means `default`, `false` means `disabled`.
        enabled: j ? null : !1,
        contexts: [this.id]
      }), e(this, U).javaScriptEnabled = j;
    }
    isJavaScriptEnabled() {
      return e(this, U).javaScriptEnabled;
    }
    async setUserAgent(j) {
      await e(this, $, _e).send("emulation.setUserAgentOverride", {
        userAgent: j,
        contexts: [this.id]
      });
    }
    async setOfflineMode(j) {
      await e(this, $, _e).send("emulation.setNetworkConditions", {
        networkConditions: j ? {
          type: "offline"
        } : null,
        contexts: [this.id]
      });
    }
    get bluetooth() {
      return e(this, Y);
    }
    async waitForDevicePrompt(j, L) {
      return await e(this, _).waitForDevicePrompt(j, L);
    }
    async setExtraHTTPHeaders(j) {
      await e(this, $, _e).send("network.setExtraHeaders", {
        headers: Object.entries(j).map(([L, ae]) => (je(hc(ae), `Expected value of header "${L}" to be String, but "${typeof ae}" is found.`), {
          name: L.toLowerCase(),
          value: { type: "string", value: ae }
        })),
        contexts: [this.id]
      });
    }
  }, K = new WeakMap(), R = new WeakMap(), F = new WeakMap(), q = new WeakMap(), Z = new WeakMap(), B = new WeakMap(), H = new WeakMap(), U = new WeakMap(), Y = new WeakMap(), _ = new WeakMap(), $ = new WeakSet(), sd = function() {
    e(this, Z).use(new ve(this.userContext)).once("closed", ({ reason: ae }) => {
      this.dispose(`Browsing context already closed: ${ae}`);
    });
    const L = e(this, Z).use(new ve(e(this, $, _e)));
    L.on("input.fileDialogOpened", (ae) => {
      this.id === ae.context && this.emit("filedialogopened", ae);
    }), L.on("browsingContext.contextCreated", (ae) => {
      if (ae.parent !== this.id)
        return;
      const we = se.from(this.userContext, this, ae.context, ae.url, ae.originalOpener);
      e(this, q).set(ae.context, we);
      const be = e(this, Z).use(new ve(we));
      be.once("closed", () => {
        be.removeAllListeners(), e(this, q).delete(we.id);
      }), this.emit("browsingcontext", { browsingContext: we });
    }), L.on("browsingContext.contextDestroyed", (ae) => {
      ae.context === this.id && this.dispose("Browsing context already closed.");
    }), L.on("browsingContext.historyUpdated", (ae) => {
      ae.context === this.id && (P(this, F, ae.url), this.emit("historyUpdated", void 0));
    }), L.on("browsingContext.domContentLoaded", (ae) => {
      ae.context === this.id && (P(this, F, ae.url), this.emit("DOMContentLoaded", void 0));
    }), L.on("browsingContext.load", (ae) => {
      ae.context === this.id && (P(this, F, ae.url), this.emit("load", void 0));
    }), L.on("browsingContext.navigationStarted", (ae) => {
      if (ae.context !== this.id)
        return;
      for (const [be, ue] of e(this, H))
        ue.disposed && e(this, H).delete(be);
      if (e(this, K) !== void 0 && !e(this, K).disposed)
        return;
      P(this, K, Wh.from(this));
      const we = e(this, Z).use(new ve(e(this, K)));
      for (const be of ["fragment", "failed", "aborted"])
        we.once(be, ({ url: ue }) => {
          we[Te](), P(this, F, ue);
        });
      this.emit("navigation", { navigation: e(this, K) });
    }), L.on("network.beforeRequestSent", (ae) => {
      if (ae.context !== this.id || e(this, H).has(ae.request.request))
        return;
      const we = Jh.from(this, ae);
      e(this, H).set(we.id, we), this.emit("request", { request: we });
    }), L.on("log.entryAdded", (ae) => {
      ae.source.context === this.id && this.emit("log", { entry: ae });
    }), L.on("browsingContext.userPromptOpened", (ae) => {
      if (ae.context !== this.id)
        return;
      const we = Qh.from(this, ae);
      this.emit("userprompt", { userPrompt: we });
    });
  }, _e = function() {
    return this.userContext.browser.session;
  }, Hi = function(j) {
    const L = Ui.from(this, j);
    return L.on("worker", (ae) => {
      this.emit("worker", { realm: ae });
    }), L;
  }, (() => {
    const j = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    A = [le((L) => e(L, R))], z = [le((L) => e(L, R))], Ie(se, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (L) => "dispose" in L, get: (L) => L.dispose }, metadata: j }, null, s), Ie(se, null, r, { kind: "method", name: "activate", static: !1, private: !1, access: { has: (L) => "activate" in L, get: (L) => L.activate }, metadata: j }, null, s), Ie(se, null, o, { kind: "method", name: "captureScreenshot", static: !1, private: !1, access: { has: (L) => "captureScreenshot" in L, get: (L) => L.captureScreenshot }, metadata: j }, null, s), Ie(se, null, h, { kind: "method", name: "close", static: !1, private: !1, access: { has: (L) => "close" in L, get: (L) => L.close }, metadata: j }, null, s), Ie(se, null, a, { kind: "method", name: "traverseHistory", static: !1, private: !1, access: { has: (L) => "traverseHistory" in L, get: (L) => L.traverseHistory }, metadata: j }, null, s), Ie(se, null, c, { kind: "method", name: "navigate", static: !1, private: !1, access: { has: (L) => "navigate" in L, get: (L) => L.navigate }, metadata: j }, null, s), Ie(se, null, m, { kind: "method", name: "reload", static: !1, private: !1, access: { has: (L) => "reload" in L, get: (L) => L.reload }, metadata: j }, null, s), Ie(se, null, f, { kind: "method", name: "setCacheBehavior", static: !1, private: !1, access: { has: (L) => "setCacheBehavior" in L, get: (L) => L.setCacheBehavior }, metadata: j }, null, s), Ie(se, null, x, { kind: "method", name: "print", static: !1, private: !1, access: { has: (L) => "print" in L, get: (L) => L.print }, metadata: j }, null, s), Ie(se, null, g, { kind: "method", name: "handleUserPrompt", static: !1, private: !1, access: { has: (L) => "handleUserPrompt" in L, get: (L) => L.handleUserPrompt }, metadata: j }, null, s), Ie(se, null, d, { kind: "method", name: "setViewport", static: !1, private: !1, access: { has: (L) => "setViewport" in L, get: (L) => L.setViewport }, metadata: j }, null, s), Ie(se, null, C, { kind: "method", name: "performActions", static: !1, private: !1, access: { has: (L) => "performActions" in L, get: (L) => L.performActions }, metadata: j }, null, s), Ie(se, null, b, { kind: "method", name: "releaseActions", static: !1, private: !1, access: { has: (L) => "releaseActions" in L, get: (L) => L.releaseActions }, metadata: j }, null, s), Ie(se, null, w, { kind: "method", name: "createWindowRealm", static: !1, private: !1, access: { has: (L) => "createWindowRealm" in L, get: (L) => L.createWindowRealm }, metadata: j }, null, s), Ie(se, null, v, { kind: "method", name: "addPreloadScript", static: !1, private: !1, access: { has: (L) => "addPreloadScript" in L, get: (L) => L.addPreloadScript }, metadata: j }, null, s), Ie(se, null, p, { kind: "method", name: "addIntercept", static: !1, private: !1, access: { has: (L) => "addIntercept" in L, get: (L) => L.addIntercept }, metadata: j }, null, s), Ie(se, null, I, { kind: "method", name: "removePreloadScript", static: !1, private: !1, access: { has: (L) => "removePreloadScript" in L, get: (L) => L.removePreloadScript }, metadata: j }, null, s), Ie(se, null, n, { kind: "method", name: "setGeolocationOverride", static: !1, private: !1, access: { has: (L) => "setGeolocationOverride" in L, get: (L) => L.setGeolocationOverride }, metadata: j }, null, s), Ie(se, null, u, { kind: "method", name: "setTimezoneOverride", static: !1, private: !1, access: { has: (L) => "setTimezoneOverride" in L, get: (L) => L.setTimezoneOverride }, metadata: j }, null, s), Ie(se, null, D, { kind: "method", name: "setScreenOrientationOverride", static: !1, private: !1, access: { has: (L) => "setScreenOrientationOverride" in L, get: (L) => L.setScreenOrientationOverride }, metadata: j }, null, s), Ie(se, null, E, { kind: "method", name: "getCookies", static: !1, private: !1, access: { has: (L) => "getCookies" in L, get: (L) => L.getCookies }, metadata: j }, null, s), Ie(se, null, l, { kind: "method", name: "setCookie", static: !1, private: !1, access: { has: (L) => "setCookie" in L, get: (L) => L.setCookie }, metadata: j }, null, s), Ie(se, null, S, { kind: "method", name: "setFiles", static: !1, private: !1, access: { has: (L) => "setFiles" in L, get: (L) => L.setFiles }, metadata: j }, null, s), Ie(se, null, N, { kind: "method", name: "subscribe", static: !1, private: !1, access: { has: (L) => "subscribe" in L, get: (L) => L.subscribe }, metadata: j }, null, s), Ie(se, null, k, { kind: "method", name: "addInterception", static: !1, private: !1, access: { has: (L) => "addInterception" in L, get: (L) => L.addInterception }, metadata: j }, null, s), Ie(se, null, A, { kind: "method", name: "deleteCookie", static: !1, private: !1, access: { has: (L) => "deleteCookie" in L, get: (L) => L.deleteCookie }, metadata: j }, null, s), Ie(se, null, z, { kind: "method", name: "locateNodes", static: !1, private: !1, access: { has: (L) => "locateNodes" in L, get: (L) => L.locateNodes }, metadata: j }, null, s), j && Object.defineProperty(se, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: j });
  })(), se;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var tp = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, Wt = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
};
let Rn = (() => {
  var m, f, x, g, d, C, nd, xt;
  let i = ve, s = [], t, r, o, h, a, c;
  return m = class extends i {
    constructor(I, n) {
      super();
      y(this, C);
      y(this, f, tp(this, s));
      // Note these are only top-level contexts.
      y(this, x, /* @__PURE__ */ new Map());
      y(this, g, new Ye());
      y(this, d);
      X(this, "browser");
      P(this, d, n), this.browser = I;
    }
    static create(I, n) {
      var D;
      const u = new m(I, n);
      return T(D = u, C, nd).call(D), u;
    }
    get browsingContexts() {
      return e(this, x).values();
    }
    get closed() {
      return e(this, f) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get id() {
      return e(this, d);
    }
    dispose(I) {
      P(this, f, I), this[Te]();
    }
    async createBrowsingContext(I, n = {}) {
      var E;
      const { result: { context: u } } = await e(this, C, xt).send("browsingContext.create", {
        type: I,
        ...n,
        referenceContext: (E = n.referenceContext) == null ? void 0 : E.id,
        userContext: e(this, d)
      }), D = e(this, x).get(u);
      return je(D, "The WebDriver BiDi implementation is failing to create a browsing context correctly."), D;
    }
    async remove() {
      try {
        await e(this, C, xt).send("browser.removeUserContext", {
          userContext: e(this, d)
        });
      } finally {
        this.dispose("User context already closed.");
      }
    }
    async getCookies(I = {}, n = void 0) {
      const { result: { cookies: u } } = await e(this, C, xt).send("storage.getCookies", {
        ...I,
        partition: {
          type: "storageKey",
          userContext: e(this, d),
          sourceOrigin: n
        }
      });
      return u;
    }
    async setCookie(I, n) {
      await e(this, C, xt).send("storage.setCookie", {
        cookie: I,
        partition: {
          type: "storageKey",
          sourceOrigin: n,
          userContext: this.id
        }
      });
    }
    async setPermissions(I, n, u) {
      await e(this, C, xt).send("permissions.setPermission", {
        origin: I,
        descriptor: n,
        state: u,
        userContext: e(this, d)
      });
    }
    [(t = [mt], r = [le((I) => e(I, f))], o = [le((I) => e(I, f))], h = [le((I) => e(I, f))], a = [le((I) => e(I, f))], c = [le((I) => e(I, f))], Te)]() {
      e(this, f) ?? P(this, f, "User context already closed, probably because the browser disconnected/closed."), this.emit("closed", { reason: e(this, f) }), e(this, g).dispose(), super[Te]();
    }
  }, f = new WeakMap(), x = new WeakMap(), g = new WeakMap(), d = new WeakMap(), C = new WeakSet(), nd = function() {
    const I = e(this, g).use(new ve(this.browser));
    I.once("closed", ({ reason: u }) => {
      this.dispose(`User context was closed: ${u}`);
    }), I.once("disconnected", ({ reason: u }) => {
      this.dispose(`User context was closed: ${u}`);
    }), e(this, g).use(new ve(e(this, C, xt))).on("browsingContext.contextCreated", (u) => {
      if (u.parent || u.userContext !== e(this, d))
        return;
      const D = ep.from(this, void 0, u.context, u.url, u.originalOpener);
      e(this, x).set(D.id, D);
      const E = e(this, g).use(new ve(D));
      E.on("closed", () => {
        E.removeAllListeners(), e(this, x).delete(D.id);
      }), this.emit("browsingcontext", { browsingContext: D });
    });
  }, xt = function() {
    return this.browser.session;
  }, (() => {
    const I = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    Wt(m, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (n) => "dispose" in n, get: (n) => n.dispose }, metadata: I }, null, s), Wt(m, null, r, { kind: "method", name: "createBrowsingContext", static: !1, private: !1, access: { has: (n) => "createBrowsingContext" in n, get: (n) => n.createBrowsingContext }, metadata: I }, null, s), Wt(m, null, o, { kind: "method", name: "remove", static: !1, private: !1, access: { has: (n) => "remove" in n, get: (n) => n.remove }, metadata: I }, null, s), Wt(m, null, h, { kind: "method", name: "getCookies", static: !1, private: !1, access: { has: (n) => "getCookies" in n, get: (n) => n.getCookies }, metadata: I }, null, s), Wt(m, null, a, { kind: "method", name: "setCookie", static: !1, private: !1, access: { has: (n) => "setCookie" in n, get: (n) => n.setCookie }, metadata: I }, null, s), Wt(m, null, c, { kind: "method", name: "setPermissions", static: !1, private: !1, access: { has: (n) => "setPermissions" in n, get: (n) => n.setPermissions }, metadata: I }, null, s), I && Object.defineProperty(m, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: I });
  })(), X(m, "DEFAULT", "default"), m;
})();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ut, id, zi;
class Ys {
  static deserialize(s) {
    var t, r, o, h;
    if (!s) {
      Ae("Service did not produce a result.");
      return;
    }
    switch (s.type) {
      case "array":
        return (t = s.value) == null ? void 0 : t.map((a) => this.deserialize(a));
      case "set":
        return (r = s.value) == null ? void 0 : r.reduce((a, c) => a.add(this.deserialize(c)), /* @__PURE__ */ new Set());
      case "object":
        return (o = s.value) == null ? void 0 : o.reduce((a, c) => {
          const { key: m, value: f } = T(this, Ut, zi).call(this, c);
          return a[m] = f, a;
        }, {});
      case "map":
        return (h = s.value) == null ? void 0 : h.reduce((a, c) => {
          const { key: m, value: f } = T(this, Ut, zi).call(this, c);
          return a.set(m, f);
        }, /* @__PURE__ */ new Map());
      case "promise":
        return {};
      case "regexp":
        return new RegExp(s.value.pattern, s.value.flags);
      case "date":
        return new Date(s.value);
      case "undefined":
        return;
      case "null":
        return null;
      case "number":
        return T(this, Ut, id).call(this, s.value);
      case "bigint":
        return BigInt(s.value);
      case "boolean":
        return !!s.value;
      case "string":
        return s.value;
    }
    Ae(`Deserialization of type ${s.type} not supported.`);
  }
}
Ut = new WeakSet(), id = function(s) {
  switch (s) {
    case "-0":
      return -0;
    case "NaN":
      return NaN;
    case "Infinity":
      return 1 / 0;
    case "-Infinity":
      return -1 / 0;
    default:
      return s;
  }
}, zi = function([s, t]) {
  const r = typeof s == "string" ? s : this.deserialize(s), o = this.deserialize(t);
  return { key: r, value: o };
}, y(Ys, Ut);
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Xe, or;
const po = class po extends zd {
  constructor(t, r) {
    super();
    y(this, Xe);
    X(this, "realm");
    y(this, or, !1);
    P(this, Xe, t), this.realm = r;
  }
  static from(t, r) {
    return new po(t, r);
  }
  get disposed() {
    return e(this, or);
  }
  async jsonValue() {
    return await this.evaluate((t) => t);
  }
  asElement() {
    return null;
  }
  async dispose() {
    e(this, or) || (P(this, or, !0), await this.realm.destroyHandles([this]));
  }
  get isPrimitiveValue() {
    switch (e(this, Xe).type) {
      case "string":
      case "number":
      case "bigint":
      case "boolean":
      case "undefined":
      case "null":
        return !0;
      default:
        return !1;
    }
  }
  toString() {
    return this.isPrimitiveValue ? "JSHandle:" + Ys.deserialize(e(this, Xe)) : "JSHandle@" + e(this, Xe).type;
  }
  get id() {
    return "handle" in e(this, Xe) ? e(this, Xe).handle : void 0;
  }
  remoteValue() {
    return e(this, Xe);
  }
  remoteObject() {
    throw new fe("Not available in WebDriver BiDi");
  }
};
Xe = new WeakMap(), or = new WeakMap();
let jt = po;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var rp = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, Za = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
}, sp = function(i, s, t) {
  if (s != null) {
    if (typeof s != "object" && typeof s != "function") throw new TypeError("Object expected.");
    var r, o;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = s[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = s[Symbol.dispose], t && (o = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    o && (r = function() {
      try {
        o.call(this);
      } catch (h) {
        return Promise.reject(h);
      }
    }), i.stack.push({ value: s, dispose: r, async: t });
  } else t && i.stack.push({ async: !0 });
  return s;
}, np = /* @__PURE__ */ (function(i) {
  return function(s) {
    function t(a) {
      s.error = s.hasError ? new i(a, s.error, "An error was suppressed during disposal.") : a, s.hasError = !0;
    }
    var r, o = 0;
    function h() {
      for (; r = s.stack.pop(); )
        try {
          if (!r.async && o === 1) return o = 0, s.stack.push(r), Promise.resolve().then(h);
          if (r.dispose) {
            var a = r.dispose.call(r.value);
            if (r.async) return o |= 2, Promise.resolve(a).then(h, function(c) {
              return t(c), h();
            });
          } else o |= 1;
        } catch (c) {
          t(c);
        }
      if (o === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
      if (s.hasError) throw s.error;
    }
    return h();
  };
})(typeof SuppressedError == "function" ? SuppressedError : function(i, s, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = i, r.suppressed = s, r;
});
let xs = (() => {
  var o, h;
  let i = Kd, s = [], t, r;
  return h = class extends i {
    constructor(m, f) {
      super(jt.from(m, f));
      y(this, o, rp(this, s));
    }
    static from(m, f) {
      return new h(m, f);
    }
    get realm() {
      return this.handle.realm;
    }
    get frame() {
      return this.realm.environment;
    }
    remoteValue() {
      return this.handle.remoteValue();
    }
    async autofill(m) {
      const f = this.frame.client, g = (await f.send("DOM.describeNode", {
        objectId: this.handle.id
      })).node.backendNodeId, d = this.frame._id;
      await f.send("Autofill.trigger", {
        fieldId: g,
        frameId: d,
        card: m.creditCard
      });
    }
    async contentFrame() {
      const m = { stack: [], error: void 0, hasError: !1 };
      try {
        const x = sp(m, await this.evaluateHandle((g) => {
          if (g instanceof HTMLIFrameElement || g instanceof HTMLFrameElement)
            return g.contentWindow;
        }), !1).remoteValue();
        return x.type === "window" ? this.frame.page().frames().find((g) => g._id === x.value.context) ?? null : null;
      } catch (f) {
        m.error = f, m.hasError = !0;
      } finally {
        np(m);
      }
    }
    async uploadFile(...m) {
      const f = Wd.value.path;
      f && (m = m.map((x) => f.win32.isAbsolute(x) || f.posix.isAbsolute(x) ? x : f.resolve(x))), await this.frame.setFiles(this, m);
    }
    async *queryAXTree(m, f) {
      const x = await this.frame.locateNodes(this, {
        type: "accessibility",
        value: {
          role: f,
          name: m
        }
      });
      return yield* pc.map(x, (g) => Promise.resolve(h.from(g, this.realm)));
    }
    async backendNodeId() {
      if (!this.frame.page().browser().cdpSupported)
        throw new fe();
      if (e(this, o))
        return e(this, o);
      const { node: m } = await this.frame.client.send("DOM.describeNode", {
        objectId: this.handle.id
      });
      return P(this, o, m.backendNodeId), e(this, o);
    }
  }, o = new WeakMap(), (() => {
    const m = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    t = [le()], r = [le(), Gd], Za(h, null, t, { kind: "method", name: "autofill", static: !1, private: !1, access: { has: (f) => "autofill" in f, get: (f) => f.autofill }, metadata: m }, null, s), Za(h, null, r, { kind: "method", name: "contentFrame", static: !1, private: !1, access: { has: (f) => "contentFrame" in f, get: (f) => f.contentFrame }, metadata: m }, null, s), m && Object.defineProperty(h, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: m });
  })(), h;
})();
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var As;
const fo = class fo extends Vd {
  constructor(t) {
    super(t.info.type, t.info.message, t.info.defaultValue);
    y(this, As);
    P(this, As, t), this.handled = t.handled;
  }
  static from(t) {
    return new fo(t);
  }
  async handle(t) {
    await e(this, As).handle({
      accept: t.accept,
      userText: t.text
    });
  }
};
As = new WeakMap();
let Ki = fo;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var oi = function(i, s, t) {
  if (s != null) {
    if (typeof s != "object" && typeof s != "function") throw new TypeError("Object expected.");
    var r, o;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = s[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = s[Symbol.dispose], t && (o = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    o && (r = function() {
      try {
        o.call(this);
      } catch (h) {
        return Promise.reject(h);
      }
    }), i.stack.push({ value: s, dispose: r, async: t });
  } else t && i.stack.push({ async: !0 });
  return s;
}, ec = /* @__PURE__ */ (function(i) {
  return function(s) {
    function t(a) {
      s.error = s.hasError ? new i(a, s.error, "An error was suppressed during disposal.") : a, s.hasError = !0;
    }
    var r, o = 0;
    function h() {
      for (; r = s.stack.pop(); )
        try {
          if (!r.async && o === 1) return o = 0, s.stack.push(r), Promise.resolve().then(h);
          if (r.dispose) {
            var a = r.dispose.call(r.value);
            if (r.async) return o |= 2, Promise.resolve(a).then(h, function(c) {
              return t(c), h();
            });
          } else o |= 1;
        } catch (c) {
          t(c);
        }
      if (o === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
      if (s.hasError) throw s.error;
    }
    return h();
  };
})(typeof SuppressedError == "function" ? SuppressedError : function(i, s, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = i, r.suppressed = s, r;
}), gt, Ms, ar, cr, Fs, qs, Qe, od, ad, jn, cd, ud;
const go = class go {
  constructor(s, t, r, o = !1) {
    y(this, Qe);
    y(this, gt);
    X(this, "name");
    y(this, Ms);
    y(this, ar);
    y(this, cr);
    y(this, Fs, []);
    y(this, qs, new Ye());
    y(this, jn, async (s) => {
      const t = { stack: [], error: void 0, hasError: !1 };
      try {
        if (s.channel !== e(this, cr))
          return;
        const r = T(this, Qe, cd).call(this, s.source);
        if (!r)
          return;
        const o = oi(t, jt.from(s.data, r), !1), h = oi(t, new Ye(), !1), a = [];
        let c;
        try {
          const m = { stack: [], error: void 0, hasError: !1 };
          try {
            const f = oi(m, await o.evaluateHandle(([, , x]) => x), !1);
            for (const [x, g] of await f.getProperties()) {
              if (h.use(g), g instanceof xs) {
                a[+x] = g, h.use(g);
                continue;
              }
              a[+x] = g.jsonValue();
            }
            c = await e(this, Ms).call(this, ...await Promise.all(a));
          } catch (f) {
            m.error = f, m.hasError = !0;
          } finally {
            ec(m);
          }
        } catch (m) {
          try {
            m instanceof Error ? await o.evaluate(([, f], x, g, d) => {
              const C = new Error(g);
              C.name = x, d && (C.stack = d), f(C);
            }, m.name, m.message, m.stack) : await o.evaluate(([, f], x) => {
              f(x);
            }, m);
          } catch (f) {
            Ae(f);
          }
          return;
        }
        try {
          await o.evaluate(([m], f) => {
            m(f);
          }, c);
        } catch (m) {
          Ae(m);
        }
      } catch (r) {
        t.error = r, t.hasError = !0;
      } finally {
        ec(t);
      }
    });
    P(this, gt, s), this.name = t, P(this, Ms, r), P(this, ar, o), P(this, cr, `__puppeteer__${e(this, gt)._id}_page_exposeFunction_${this.name}`);
  }
  static async from(s, t, r, o = !1) {
    var a;
    const h = new go(s, t, r, o);
    return await T(a = h, Qe, od).call(a), h;
  }
  [Symbol.dispose]() {
    this[Symbol.asyncDispose]().catch(Ae);
  }
  async [Symbol.asyncDispose]() {
    e(this, qs).dispose(), await Promise.all(e(this, Fs).map(async ([s, t]) => {
      const r = e(this, ar) ? s.isolatedRealm() : s.mainRealm();
      try {
        await Promise.all([
          r.evaluate((o) => {
            delete globalThis[o];
          }, this.name),
          ...s.childFrames().map((o) => o.evaluate((h) => {
            delete globalThis[h];
          }, this.name)),
          s.browsingContext.removePreloadScript(t)
        ]);
      } catch (o) {
        Ae(o);
      }
    }));
  }
};
gt = new WeakMap(), Ms = new WeakMap(), ar = new WeakMap(), cr = new WeakMap(), Fs = new WeakMap(), qs = new WeakMap(), Qe = new WeakSet(), od = async function() {
  const s = e(this, Qe, ad), t = {
    type: "channel",
    value: {
      channel: e(this, cr),
      ownership: "root"
    }
  };
  e(this, qs).use(new ve(s)).on("script.message", e(this, jn));
  const o = fc(Xd((a) => {
    Object.assign(globalThis, {
      [PLACEHOLDER("name")]: function(...c) {
        return new Promise((m, f) => {
          a([m, f, c]);
        });
      }
    });
  }, { name: JSON.stringify(this.name) })), h = [e(this, gt)];
  for (const a of h)
    h.push(...a.childFrames());
  await Promise.all(h.map(async (a) => {
    const c = e(this, ar) ? a.isolatedRealm() : a.mainRealm();
    try {
      const [m] = await Promise.all([
        a.browsingContext.addPreloadScript(o, {
          arguments: [t],
          sandbox: c.sandbox
        }),
        c.realm.callFunction(o, !1, {
          arguments: [t]
        })
      ]);
      e(this, Fs).push([a, m]);
    } catch (m) {
      Ae(m);
    }
  }));
}, ad = function() {
  return e(this, gt).page().browser().connection;
}, jn = new WeakMap(), cd = function(s) {
  const t = T(this, Qe, ud).call(this, s.context);
  if (t)
    return t.realm(s.realm);
}, ud = function(s) {
  const t = [e(this, gt)];
  for (const r of t) {
    if (r._id === s)
      return r;
    t.push(...r.childFrames());
  }
};
let Es = go;
var ip = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, op = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
};
let tc = (() => {
  var r, o, h, a, c, dd, f;
  let i = Yd, s = [], t;
  return f = class extends i {
    constructor(d, C, b) {
      super();
      y(this, c);
      y(this, r, ip(this, s));
      y(this, o);
      y(this, h);
      y(this, a, !1);
      P(this, r, d), P(this, o, C), P(this, a, b);
      const w = d["goog:securityDetails"];
      b && w && P(this, h, new Jd(w));
    }
    /**
     * Returns a new BidiHTTPResponse or updates the existing one if it already exists.
     */
    static from(d, C, b) {
      var p;
      const w = C.response();
      if (w)
        return P(w, r, d), w;
      const v = new f(d, C, b);
      return T(p = v, c, dd).call(p), v;
    }
    remoteAddress() {
      return {
        ip: "",
        port: -1
      };
    }
    url() {
      return e(this, r).url;
    }
    status() {
      return e(this, r).status;
    }
    statusText() {
      return e(this, r).statusText;
    }
    headers() {
      const d = {};
      for (const C of e(this, r).headers)
        C.value.type === "string" && (d[C.name.toLowerCase()] = C.value.value);
      return d;
    }
    request() {
      return e(this, o);
    }
    fromCache() {
      return e(this, r).fromCache;
    }
    timing() {
      const d = e(this, o).timing();
      return {
        requestTime: d.requestTime,
        proxyStart: -1,
        proxyEnd: -1,
        dnsStart: d.dnsStart,
        dnsEnd: d.dnsEnd,
        connectStart: d.connectStart,
        connectEnd: d.connectEnd,
        sslStart: d.tlsStart,
        sslEnd: -1,
        workerStart: -1,
        workerReady: -1,
        workerFetchStart: -1,
        workerRespondWithSettled: -1,
        workerRouterEvaluationStart: -1,
        workerCacheLookupStart: -1,
        sendStart: d.requestStart,
        sendEnd: -1,
        pushStart: -1,
        pushEnd: -1,
        receiveHeadersStart: d.responseStart,
        receiveHeadersEnd: d.responseEnd
      };
    }
    frame() {
      return e(this, o).frame();
    }
    fromServiceWorker() {
      return !1;
    }
    securityDetails() {
      if (!e(this, a))
        throw new fe();
      return e(this, h) ?? null;
    }
    async content() {
      return await e(this, o).getResponseContent();
    }
  }, r = new WeakMap(), o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c = new WeakSet(), dd = function() {
    var d, C;
    e(this, r).fromCache && (e(this, o)._fromMemoryCache = !0, (d = e(this, o).frame()) == null || d.page().trustedEmitter.emit("requestservedfromcache", e(this, o))), (C = e(this, o).frame()) == null || C.page().trustedEmitter.emit("response", this);
  }, (() => {
    const d = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    t = [Qd], op(f, null, t, { kind: "method", name: "remoteAddress", static: !1, private: !1, access: { has: (C) => "remoteAddress" in C, get: (C) => C.remoteAddress }, metadata: d }, null, s), d && Object.defineProperty(f, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: d });
  })(), f;
})();
var Wi;
const ld = /* @__PURE__ */ new WeakMap();
var Bt, ur, Be, Ee, Un, pd, js, Ln;
class hd extends Po {
  constructor(t, r, o, h) {
    super();
    y(this, Un);
    y(this, Bt);
    y(this, ur, null);
    X(this, "id");
    y(this, Be);
    y(this, Ee);
    y(this, js, !1);
    y(this, Ln, async () => {
      if (!e(this, Be))
        return;
      const t = e(this, Be).page()._credentials;
      t && !e(this, js) ? (P(this, js, !0), e(this, Ee).continueWithAuth({
        action: "provideCredentials",
        credentials: {
          type: "password",
          username: t.username,
          password: t.password
        }
      })) : e(this, Ee).continueWithAuth({
        action: "cancel"
      });
    });
    ld.set(t, this), this.interception.enabled = o, P(this, Ee, t), P(this, Be, r), P(this, Bt, h ? e(h, Bt) : []), this.id = t.id;
  }
  static from(t, r, o, h) {
    var c;
    const a = new Wi(t, r, o, h);
    return T(c = a, Un, pd).call(c), a;
  }
  get client() {
    return e(this, Be).client;
  }
  canBeIntercepted() {
    return e(this, Ee).isBlocked;
  }
  interceptResolutionState() {
    return e(this, Ee).isBlocked ? super.interceptResolutionState() : { action: Zd.Disabled };
  }
  url() {
    return e(this, Ee).url;
  }
  resourceType() {
    if (!e(this, Be).page().browser().cdpSupported)
      throw new fe();
    return (e(this, Ee).resourceType || "other").toLowerCase();
  }
  method() {
    return e(this, Ee).method;
  }
  postData() {
    if (!e(this, Be).page().browser().cdpSupported)
      throw new fe();
    return e(this, Ee).postData;
  }
  hasPostData() {
    return e(this, Ee).hasPostData;
  }
  async fetchPostData() {
    return await e(this, Ee).fetchPostData();
  }
  headers() {
    const t = {};
    for (const r of e(this, Ee).headers)
      t[r.name.toLowerCase()] = r.value.value;
    return {
      ...t
    };
  }
  response() {
    return e(this, ur);
  }
  failure() {
    return e(this, Ee).error === void 0 ? null : { errorText: e(this, Ee).error };
  }
  isNavigationRequest() {
    return e(this, Ee).navigation !== void 0;
  }
  initiator() {
    var t;
    return {
      ...e(this, Ee).initiator,
      type: ((t = e(this, Ee).initiator) == null ? void 0 : t.type) ?? "other"
    };
  }
  redirectChain() {
    return e(this, Bt).slice();
  }
  frame() {
    return e(this, Be);
  }
  async _continue(t = {}) {
    const r = rc(t.headers);
    return this.interception.handled = !0, await e(this, Ee).continueRequest({
      url: t.url,
      method: t.method,
      body: t.postData ? {
        type: "base64",
        value: el(t.postData)
      } : void 0,
      headers: r.length > 0 ? r : void 0
    }).catch((o) => (this.interception.handled = !1, tl(o)));
  }
  async _abort() {
    return this.interception.handled = !0, await e(this, Ee).failRequest().catch((t) => {
      throw this.interception.handled = !1, t;
    });
  }
  async _respond(t, r) {
    this.interception.handled = !0;
    let o;
    t.body && (o = Po.getResponse(t.body));
    const h = rc(t.headers), a = h.some((m) => m.name === "content-length");
    t.contentType && h.push({
      name: "content-type",
      value: {
        type: "string",
        value: t.contentType
      }
    }), o != null && o.contentLength && !a && h.push({
      name: "content-length",
      value: {
        type: "string",
        value: String(o.contentLength)
      }
    });
    const c = t.status || 200;
    return await e(this, Ee).provideResponse({
      statusCode: c,
      headers: h.length > 0 ? h : void 0,
      reasonPhrase: rl[c],
      body: o != null && o.base64 ? {
        type: "base64",
        value: o == null ? void 0 : o.base64
      } : void 0
    }).catch((m) => {
      throw this.interception.handled = !1, m;
    });
  }
  timing() {
    return e(this, Ee).timing();
  }
  getResponseContent() {
    return e(this, Ee).getResponseContent();
  }
}
Bt = new WeakMap(), ur = new WeakMap(), Be = new WeakMap(), Ee = new WeakMap(), Un = new WeakSet(), pd = function() {
  e(this, Ee).on("redirect", (t) => {
    const r = Wi.from(t, e(this, Be), this.interception.enabled, this);
    e(this, Bt).push(this), t.once("success", () => {
      e(this, Be).page().trustedEmitter.emit("requestfinished", r);
    }), t.once("error", () => {
      e(this, Be).page().trustedEmitter.emit("requestfailed", r);
    }), r.finalizeInterceptions();
  }), e(this, Ee).once("response", (t) => {
    P(this, ur, tc.from(t, this, e(this, Be).page().browser().cdpSupported));
  }), e(this, Ee).once("success", (t) => {
    P(this, ur, tc.from(t, this, e(this, Be).page().browser().cdpSupported));
  }), e(this, Ee).on("authenticate", e(this, Ln)), e(this, Be).page().trustedEmitter.emit("request", this);
}, js = new WeakMap(), Ln = new WeakMap();
Wi = hd;
function rc(i) {
  const s = [];
  for (const [t, r] of Object.entries(i ?? []))
    if (!Object.is(r, void 0)) {
      const o = Array.isArray(r) ? r : [r];
      for (const h of o)
        s.push({
          name: t.toLowerCase(),
          value: {
            type: "string",
            value: String(h)
          }
        });
    }
  return s;
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class sc extends Error {
}
var mr, gd, md;
class fd {
  static serialize(s) {
    switch (typeof s) {
      case "symbol":
      case "function":
        throw new sc(`Unable to serializable ${typeof s}`);
      case "object":
        return T(this, mr, md).call(this, s);
      case "undefined":
        return {
          type: "undefined"
        };
      case "number":
        return T(this, mr, gd).call(this, s);
      case "bigint":
        return {
          type: "bigint",
          value: s.toString()
        };
      case "string":
        return {
          type: "string",
          value: s
        };
      case "boolean":
        return {
          type: "boolean",
          value: s
        };
    }
  }
}
mr = new WeakSet(), gd = function(s) {
  let t;
  return Object.is(s, -0) ? t = "-0" : Object.is(s, 1 / 0) ? t = "Infinity" : Object.is(s, -1 / 0) ? t = "-Infinity" : Object.is(s, NaN) ? t = "NaN" : t = s, {
    type: "number",
    value: t
  };
}, md = function(s) {
  if (s === null)
    return {
      type: "null"
    };
  if (Array.isArray(s))
    return {
      type: "array",
      value: s.map((r) => this.serialize(r))
    };
  if (sl(s)) {
    try {
      JSON.stringify(s);
    } catch (r) {
      throw r instanceof TypeError && r.message.startsWith("Converting circular structure to JSON") && (r.message += " Recursive objects are not allowed."), r;
    }
    const t = [];
    for (const r in s)
      t.push([this.serialize(r), this.serialize(s[r])]);
    return {
      type: "object",
      value: t
    };
  } else {
    if (nl(s))
      return {
        type: "regexp",
        value: {
          pattern: s.source,
          flags: s.flags
        }
      };
    if (il(s))
      return {
        type: "date",
        value: s.toISOString()
      };
  }
  throw new sc("Custom object serialization not possible. Use plain objects instead.");
}, y(fd, mr);
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
function ap(i) {
  if (i.exception.type === "object" && !("value" in i.exception))
    return new Error(i.text);
  if (i.exception.type !== "error")
    return Ys.deserialize(i.exception);
  const [s = "", ...t] = i.text.split(": "), r = t.join(": "), o = new Error(r);
  o.name = s;
  const h = [];
  if (i.stackTrace && h.length < Error.stackTraceLimit)
    for (const a of i.stackTrace.callFrames.reverse()) {
      if (un.isPuppeteerURL(a.url) && a.url !== un.INTERNAL_URL) {
        const c = un.parse(a.url);
        h.unshift(`    at ${a.functionName || c.functionName} (${c.functionName} at ${c.siteString}, <anonymous>:${a.lineNumber}:${a.columnNumber})`);
      } else
        h.push(`    at ${a.functionName || "<anonymous>"} (${a.url}:${a.lineNumber}:${a.columnNumber})`);
      if (h.length >= Error.stackTraceLimit)
        break;
    }
  return o.stack = [i.text, ...h].join(`
`), o;
}
function wd(i, s) {
  return (t) => {
    throw t instanceof Tn ? t.message += ` at ${i}` : t instanceof ol && (t.message = `Navigation timeout of ${s} ms exceeded`), t;
  };
}
var cp = function(i, s, t) {
  if (s != null) {
    if (typeof s != "object" && typeof s != "function") throw new TypeError("Object expected.");
    var r, o;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = s[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = s[Symbol.dispose], t && (o = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    o && (r = function() {
      try {
        o.call(this);
      } catch (h) {
        return Promise.reject(h);
      }
    }), i.stack.push({ value: s, dispose: r, async: t });
  } else t && i.stack.push({ async: !0 });
  return s;
}, up = /* @__PURE__ */ (function(i) {
  return function(s) {
    function t(a) {
      s.error = s.hasError ? new i(a, s.error, "An error was suppressed during disposal.") : a, s.hasError = !0;
    }
    var r, o = 0;
    function h() {
      for (; r = s.stack.pop(); )
        try {
          if (!r.async && o === 1) return o = 0, s.stack.push(r), Promise.resolve().then(h);
          if (r.dispose) {
            var a = r.dispose.call(r.value);
            if (r.async) return o |= 2, Promise.resolve(a).then(h, function(c) {
              return t(c), h();
            });
          } else o |= 1;
        } catch (c) {
          t(c);
        }
      if (o === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
      if (s.hasError) throw s.error;
    }
    return h();
  };
})(typeof SuppressedError == "function" ? SuppressedError : function(i, s, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = i, r.suppressed = s, r;
}), Us, Gi;
class vd extends al {
  constructor(t, r) {
    super(r);
    y(this, Us);
    X(this, "realm");
    X(this, "internalPuppeteerUtil");
    this.realm = t;
  }
  initialize() {
    this.realm.on("destroyed", ({ reason: t }) => {
      this.taskManager.terminateAll(new Error(t)), this.dispose();
    }), this.realm.on("updated", () => {
      this.internalPuppeteerUtil = void 0, this.taskManager.rerunAll();
    });
  }
  get puppeteerUtil() {
    const t = Promise.resolve();
    return cl.inject((r) => {
      this.internalPuppeteerUtil && this.internalPuppeteerUtil.then((o) => {
        o.dispose();
      }), this.internalPuppeteerUtil = t.then(() => this.evaluateHandle(r));
    }, !this.internalPuppeteerUtil), this.internalPuppeteerUtil;
  }
  async evaluateHandle(t, ...r) {
    return await T(this, Us, Gi).call(this, !1, t, ...r);
  }
  async evaluate(t, ...r) {
    return await T(this, Us, Gi).call(this, !0, t, ...r);
  }
  createHandle(t) {
    return (t.type === "node" || t.type === "window") && this instanceof qt ? xs.from(t, this) : jt.from(t, this);
  }
  async serializeAsync(t) {
    return t instanceof _o && (t = await t.get(this)), this.serialize(t);
  }
  serialize(t) {
    if (t instanceof jt || t instanceof xs) {
      if (t.realm !== this) {
        if (!(t.realm instanceof qt) || !(this instanceof qt))
          throw new Error("Trying to evaluate JSHandle from different global types. Usually this means you're using a handle from a worker in a page or vice versa.");
        if (t.realm.environment !== this.environment)
          throw new Error("Trying to evaluate JSHandle from different frames. Usually this means you're using a handle from a page on a different page.");
      }
      if (t.disposed)
        throw new Error("JSHandle is disposed!");
      return t.remoteValue();
    }
    return fd.serialize(t);
  }
  async destroyHandles(t) {
    if (this.disposed)
      return;
    const r = t.map(({ id: o }) => o).filter((o) => o !== void 0);
    r.length !== 0 && await this.realm.disown(r).catch((o) => {
      Ae(o);
    });
  }
  async adoptHandle(t) {
    return await this.evaluateHandle((r) => r, t);
  }
  async transferHandle(t) {
    if (t.realm === this)
      return t;
    const r = this.adoptHandle(t);
    return await t.dispose(), await r;
  }
}
Us = new WeakSet(), Gi = async function(t, r, ...o) {
  var x;
  const h = ul(((x = dl(r)) == null ? void 0 : x.toString()) ?? un.INTERNAL_URL);
  let a;
  const c = t ? "none" : "root", m = t ? {} : {
    maxObjectDepth: 0,
    maxDomDepth: 0
  };
  if (hc(r)) {
    const g = ko.test(r) ? r : `${r}
${h}
`;
    a = this.realm.evaluate(g, !0, {
      resultOwnership: c,
      userActivation: !0,
      serializationOptions: m
    });
  } else {
    let g = fc(r);
    g = ko.test(g) ? g : `${g}
${h}
`, a = this.realm.callFunction(
      g,
      /* awaitPromise= */
      !0,
      {
        // LazyArgs are used only internally and should not affect the order
        // evaluate calls for the public APIs.
        arguments: o.some((d) => d instanceof _o) ? await Promise.all(o.map((d) => this.serializeAsync(d))) : o.map((d) => this.serialize(d)),
        resultOwnership: c,
        userActivation: !0,
        serializationOptions: m
      }
    );
  }
  const f = await a;
  if ("type" in f && f.type === "exception")
    throw ap(f.exceptionDetails);
  return t ? Ys.deserialize(f.result) : this.createHandle(f.result);
};
var dr, $n, yd, lr;
const Hn = class Hn extends vd {
  constructor(t, r) {
    super(t, r.timeoutSettings);
    y(this, $n);
    y(this, dr);
    y(this, lr, !1);
    P(this, dr, r);
  }
  static from(t, r) {
    var h;
    const o = new Hn(t, r);
    return T(h = o, $n, yd).call(h), o;
  }
  get puppeteerUtil() {
    let t = Promise.resolve();
    return e(this, lr) || (t = Promise.all([
      Es.from(this.environment, "__ariaQuerySelector", Io.queryOne, !!this.sandbox),
      Es.from(this.environment, "__ariaQuerySelectorAll", async (r, o) => {
        const h = Io.queryAll(r, o);
        return await r.realm.evaluateHandle((...a) => a, ...await pc.collect(h));
      }, !!this.sandbox)
    ]), P(this, lr, !0)), t.then(() => super.puppeteerUtil);
  }
  get sandbox() {
    return this.realm.sandbox;
  }
  get environment() {
    return e(this, dr);
  }
  async adoptBackendNode(t) {
    const r = { stack: [], error: void 0, hasError: !1 };
    try {
      const { object: o } = await e(this, dr).client.send("DOM.resolveNode", {
        backendNodeId: t,
        executionContextId: await this.realm.resolveExecutionContextId()
      });
      return await cp(r, xs.from({
        handle: o.objectId,
        type: "node"
      }, this), !1).evaluateHandle((a) => a);
    } catch (o) {
      r.error = o, r.hasError = !0;
    } finally {
      up(r);
    }
  }
};
dr = new WeakMap(), $n = new WeakSet(), yd = function() {
  So(Hn.prototype, this, "initialize").call(this), this.realm.on("updated", () => {
    this.environment.clearDocumentHandle(), P(this, lr, !1);
  });
}, lr = new WeakMap();
let qt = Hn;
var Ls;
const mo = class mo extends vd {
  constructor(t, r) {
    super(t, r.timeoutSettings);
    y(this, Ls);
    P(this, Ls, r);
  }
  static from(t, r) {
    const o = new mo(t, r);
    return o.initialize(), o;
  }
  get environment() {
    return e(this, Ls);
  }
  async adoptBackendNode() {
    throw new Error("Cannot adopt DOM nodes into a worker.");
  }
};
Ls = new WeakMap();
let Vi = mo;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var $s, Hs;
const wo = class wo extends ll {
  constructor(t, r) {
    super(r.origin);
    y(this, $s);
    y(this, Hs);
    P(this, $s, t), P(this, Hs, Vi.from(r, this));
  }
  static from(t, r) {
    return new wo(t, r);
  }
  get frame() {
    return e(this, $s);
  }
  mainRealm() {
    return e(this, Hs);
  }
  get client() {
    throw new fe();
  }
};
$s = new WeakMap(), Hs = new WeakMap();
let Xi = wo;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var dp = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, Ct = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
}, nc = function(i, s, t) {
  return typeof s == "symbol" && (s = s.description ? "[".concat(s.description, "]") : ""), Object.defineProperty(i, "name", { configurable: !0, value: t ? "".concat(t, " ", s) : s });
};
function lp(i) {
  switch (i) {
    case "group":
      return "startGroup";
    case "groupCollapsed":
      return "startGroupCollapsed";
    case "groupEnd":
      return "endGroup";
    default:
      return i;
  }
}
let hp = (() => {
  var g, d, C, Cd, Ji, In, p, _n, kn, u;
  let i = hl, s = [], t, r, o, h, a, c, m, f, x;
  return u = class extends i {
    constructor(l, S) {
      super();
      y(this, C);
      y(this, g, dp(this, s));
      X(this, "browsingContext");
      y(this, d, /* @__PURE__ */ new WeakMap());
      X(this, "realms");
      X(this, "_id");
      X(this, "client");
      X(this, "accessibility");
      y(this, p, /* @__PURE__ */ new Map());
      P(this, g, l), this.browsingContext = S, this._id = S.id, this.client = new bs(this), this.realms = {
        default: qt.from(this.browsingContext.defaultRealm, this),
        internal: qt.from(this.browsingContext.createWindowRealm(`__puppeteer_internal_${Math.ceil(Math.random() * 1e4)}`), this)
      }, this.accessibility = new pl(this.realms.default, this._id);
    }
    static from(l, S) {
      var k;
      const N = new u(l, S);
      return T(k = N, C, Cd).call(k), N;
    }
    get timeoutSettings() {
      return this.page()._timeoutSettings;
    }
    mainRealm() {
      return this.realms.default;
    }
    isolatedRealm() {
      return this.realms.internal;
    }
    realm(l) {
      for (const S of Object.values(this.realms))
        if (S.realm.id === l)
          return S;
    }
    page() {
      let l = e(this, g);
      for (; l instanceof u; )
        l = e(l, g);
      return l;
    }
    url() {
      return this.browsingContext.url;
    }
    parentFrame() {
      return e(this, g) instanceof u ? e(this, g) : null;
    }
    childFrames() {
      return [...this.browsingContext.children].map((l) => e(this, d).get(l));
    }
    async goto(l, S = {}) {
      const [N] = await Promise.all([
        this.waitForNavigation(S),
        // Some implementations currently only report errors when the
        // readiness=interactive.
        //
        // Related: https://bugzilla.mozilla.org/show_bug.cgi?id=1846601
        this.browsingContext.navigate(
          l,
          "interactive"
          /* Bidi.BrowsingContext.ReadinessState.Interactive */
        ).catch((k) => {
          if (!(wl(k) && k.message.includes("net::ERR_HTTP_RESPONSE_CODE_FAILURE")) && !k.message.includes("navigation canceled") && !k.message.includes("Navigation was aborted by another navigation"))
            throw k;
        })
      ]).catch(wd(l, S.timeout ?? this.timeoutSettings.navigationTimeout()));
      return N;
    }
    async setContent(l, S = {}) {
      await Promise.all([
        this.setFrameContent(l),
        Nn(tn([
          e(this, C, _n).call(this, S),
          e(this, C, kn).call(this, S)
        ]))
      ]);
    }
    async waitForNavigation(l = {}) {
      const { timeout: S = this.timeoutSettings.navigationTimeout(), signal: N } = l, k = this.childFrames().map((A) => {
        var z;
        return T(z = A, C, In).call(z);
      });
      return await Nn(tn([
        vl(Ke(this.browsingContext, "navigation"), Ke(this.browsingContext, "historyUpdated").pipe(vr(() => ({ navigation: null })))).pipe(To()).pipe(Yn(({ navigation: A }) => A === null ? at(null) : e(this, C, _n).call(this, l).pipe(yl(() => k.length === 0 ? at(void 0) : tn(k)), St(Ke(A, "fragment"), Ke(A, "failed"), Ke(A, "aborted")), Yn(() => {
          if (A.request) {
            let z = function(K) {
              return A === null ? at(null) : K.response || K.error ? at(A) : K.redirect ? z(K.redirect) : Ke(K, "success").pipe(St(Ke(K, "error")), St(Ke(K, "redirect"))).pipe(Yn(() => z(K)));
            };
            return z(A.request);
          }
          return at(A);
        })))),
        e(this, C, kn).call(this, l)
      ]).pipe(vr(([A]) => {
        if (!A)
          return null;
        const z = A.request;
        if (!z)
          return null;
        const K = z.lastRedirect ?? z;
        return ld.get(K).response();
      }), St(Dn(S), Cl(N), T(this, C, In).call(this).pipe(vr(() => {
        throw new no("Frame detached.");
      })))));
    }
    waitForDevicePrompt(l = {}) {
      const { timeout: S = this.timeoutSettings.timeout(), signal: N } = l;
      return this.browsingContext.waitForDevicePrompt(S, N);
    }
    get detached() {
      return this.browsingContext.closed;
    }
    async exposeFunction(l, S) {
      if (e(this, p).has(l))
        throw new Error(`Failed to add page binding with name ${l}: globalThis['${l}'] already exists!`);
      const N = await Es.from(this, l, S);
      e(this, p).set(l, N);
    }
    async removeExposedFunction(l) {
      const S = e(this, p).get(l);
      if (!S)
        throw new Error(`Failed to remove page binding with name ${l}: window['${l}'] does not exists!`);
      e(this, p).delete(l), await S[Symbol.asyncDispose]();
    }
    async createCDPSession() {
      if (!this.page().browser().cdpSupported)
        throw new fe();
      return await this.page().browser().cdpConnection._createSession({ targetId: this._id });
    }
    async setFiles(l, S) {
      await this.browsingContext.setFiles(
        // SAFETY: ElementHandles are always remote references.
        l.remoteValue(),
        S
      );
    }
    async locateNodes(l, S) {
      return await this.browsingContext.locateNodes(
        S,
        // SAFETY: ElementHandles are always remote references.
        [l.remoteValue()]
      );
    }
  }, g = new WeakMap(), d = new WeakMap(), C = new WeakSet(), Cd = function() {
    for (const l of this.browsingContext.children)
      T(this, C, Ji).call(this, l);
    this.browsingContext.on("browsingcontext", ({ browsingContext: l }) => {
      T(this, C, Ji).call(this, l);
    }), this.browsingContext.on("closed", () => {
      for (const l of bs.sessions.values())
        l.frame === this && l.onClose();
      this.page().trustedEmitter.emit("framedetached", this);
    }), this.browsingContext.on("request", ({ request: l }) => {
      const S = hd.from(l, this, this.page().isNetworkInterceptionEnabled);
      l.once("success", () => {
        this.page().trustedEmitter.emit("requestfinished", S);
      }), l.once("error", () => {
        this.page().trustedEmitter.emit("requestfailed", S);
      }), S.finalizeInterceptions();
    }), this.browsingContext.on("navigation", ({ navigation: l }) => {
      l.once("fragment", () => {
        this.page().trustedEmitter.emit("framenavigated", this);
      });
    }), this.browsingContext.on("load", () => {
      this.page().trustedEmitter.emit("load", void 0);
    }), this.browsingContext.on("DOMContentLoaded", () => {
      this._hasStartedLoading = !0, this.page().trustedEmitter.emit("domcontentloaded", void 0), this.page().trustedEmitter.emit("framenavigated", this);
    }), this.browsingContext.on("userprompt", ({ userPrompt: l }) => {
      this.page().trustedEmitter.emit("dialog", Ki.from(l));
    }), this.browsingContext.on("log", ({ entry: l }) => {
      if (this._id === l.source.context)
        if (pp(l)) {
          const S = l.args.map((k) => this.mainRealm().createHandle(k)), N = S.reduce((k, A) => {
            const z = A instanceof jt && A.isPrimitiveValue ? Ys.deserialize(A.remoteValue()) : A.toString();
            return `${k} ${z}`;
          }, "").slice(1);
          this.page().trustedEmitter.emit("console", new fl(lp(l.method), N, S, gp(l.stackTrace), this));
        } else if (fp(l)) {
          const S = new Error(l.text ?? ""), N = S.message.split(`
`).length, k = S.stack.split(`
`).splice(0, N), A = [];
          if (l.stackTrace) {
            for (const z of l.stackTrace.callFrames)
              if (A.push(`    at ${z.functionName || "<anonymous>"} (${z.url}:${z.lineNumber + 1}:${z.columnNumber + 1})`), A.length >= Error.stackTraceLimit)
                break;
          }
          S.stack = [...k, ...A].join(`
`), this.page().trustedEmitter.emit("pageerror", S);
        } else
          Ae(`Unhandled LogEntry with type "${l.type}", text "${l.text}" and level "${l.level}"`);
    }), this.browsingContext.on("worker", ({ realm: l }) => {
      const S = Xi.from(this, l);
      l.on("destroyed", () => {
        this.page().trustedEmitter.emit("workerdestroyed", S);
      }), this.page().trustedEmitter.emit("workercreated", S);
    });
  }, Ji = function(l) {
    const S = u.from(this, l);
    return e(this, d).set(l, S), this.page().trustedEmitter.emit("frameattached", S), l.on("closed", () => {
      e(this, d).delete(l);
    }), S;
  }, In = function() {
    return gl(() => this.detached ? at(this) : Ke(
      this.page().trustedEmitter,
      "framedetached"
      /* PageEvent.FrameDetached */
    ).pipe(ml((l) => l === this)));
  }, p = new WeakMap(), _n = function() {
    return a.value;
  }, kn = function() {
    return m.value;
  }, (() => {
    const l = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    t = [vt], r = [vt], o = [vt], h = [vt], c = [vt], f = [vt], x = [vt], Ct(u, null, t, { kind: "method", name: "goto", static: !1, private: !1, access: { has: (S) => "goto" in S, get: (S) => S.goto }, metadata: l }, null, s), Ct(u, null, r, { kind: "method", name: "setContent", static: !1, private: !1, access: { has: (S) => "setContent" in S, get: (S) => S.setContent }, metadata: l }, null, s), Ct(u, null, o, { kind: "method", name: "waitForNavigation", static: !1, private: !1, access: { has: (S) => "waitForNavigation" in S, get: (S) => S.waitForNavigation }, metadata: l }, null, s), Ct(u, a = { value: nc(function(S = {}) {
      let { waitUntil: N = "load" } = S;
      const { timeout: k = this.timeoutSettings.navigationTimeout() } = S;
      Array.isArray(N) || (N = [N]);
      const A = /* @__PURE__ */ new Set();
      for (const z of N)
        switch (z) {
          case "load": {
            A.add("load");
            break;
          }
          case "domcontentloaded": {
            A.add("DOMContentLoaded");
            break;
          }
        }
      return A.size === 0 ? at(void 0) : tn([...A].map((z) => Ke(this.browsingContext, z))).pipe(vr(() => {
      }), To(), St(Dn(k), T(this, C, In).call(this).pipe(vr(() => {
        throw new Error("Frame detached.");
      }))));
    }, "#waitForLoad$") }, h, { kind: "method", name: "#waitForLoad$", static: !1, private: !0, access: { has: (S) => en(C, S), get: (S) => e(S, C, _n) }, metadata: l }, null, s), Ct(u, m = { value: nc(function(S = {}) {
      let { waitUntil: N = "load" } = S;
      Array.isArray(N) || (N = [N]);
      let k = 1 / 0;
      for (const A of N)
        switch (A) {
          case "networkidle0": {
            k = Math.min(0, k);
            break;
          }
          case "networkidle2": {
            k = Math.min(2, k);
            break;
          }
        }
      return k === 1 / 0 ? at(void 0) : this.page().waitForNetworkIdle$({
        idleTime: 500,
        timeout: S.timeout ?? this.timeoutSettings.timeout(),
        concurrency: k
      });
    }, "#waitForNetworkIdle$") }, c, { kind: "method", name: "#waitForNetworkIdle$", static: !1, private: !0, access: { has: (S) => en(C, S), get: (S) => e(S, C, kn) }, metadata: l }, null, s), Ct(u, null, f, { kind: "method", name: "setFiles", static: !1, private: !1, access: { has: (S) => "setFiles" in S, get: (S) => S.setFiles }, metadata: l }, null, s), Ct(u, null, x, { kind: "method", name: "locateNodes", static: !1, private: !1, access: { has: (S) => "locateNodes" in S, get: (S) => S.locateNodes }, metadata: l }, null, s), l && Object.defineProperty(u, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: l });
  })(), u;
})();
function pp(i) {
  return i.type === "console";
}
function fp(i) {
  return i.type === "javascript";
}
function gp(i) {
  const s = [];
  if (i)
    for (const t of i.callFrames)
      s.push({
        url: t.url,
        lineNumber: t.lineNumber,
        columnNumber: t.columnNumber
      });
  return s;
}
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Fe;
(function(i) {
  i.None = "none", i.Key = "key", i.Pointer = "pointer", i.Wheel = "wheel";
})(Fe || (Fe = {}));
var ke;
(function(i) {
  i.Pause = "pause", i.KeyDown = "keyDown", i.KeyUp = "keyUp", i.PointerUp = "pointerUp", i.PointerDown = "pointerDown", i.PointerMove = "pointerMove", i.Scroll = "scroll";
})(ke || (ke = {}));
const hs = (i) => {
  switch (i) {
    case "\r":
    case `
`:
      i = "Enter";
      break;
  }
  if ([...i].length === 1)
    return i;
  switch (i) {
    case "Cancel":
      return "";
    case "Help":
      return "";
    case "Backspace":
      return "";
    case "Tab":
      return "";
    case "Clear":
      return "";
    case "Enter":
      return "";
    case "Shift":
    case "ShiftLeft":
      return "";
    case "Control":
    case "ControlLeft":
      return "";
    case "Alt":
    case "AltLeft":
      return "";
    case "Pause":
      return "";
    case "Escape":
      return "";
    case "PageUp":
      return "";
    case "PageDown":
      return "";
    case "End":
      return "";
    case "Home":
      return "";
    case "ArrowLeft":
      return "";
    case "ArrowUp":
      return "";
    case "ArrowRight":
      return "";
    case "ArrowDown":
      return "";
    case "Insert":
      return "";
    case "Delete":
      return "";
    case "NumpadEqual":
      return "";
    case "Numpad0":
      return "";
    case "Numpad1":
      return "";
    case "Numpad2":
      return "";
    case "Numpad3":
      return "";
    case "Numpad4":
      return "";
    case "Numpad5":
      return "";
    case "Numpad6":
      return "";
    case "Numpad7":
      return "";
    case "Numpad8":
      return "";
    case "Numpad9":
      return "";
    case "NumpadMultiply":
      return "";
    case "NumpadAdd":
      return "";
    case "NumpadSubtract":
      return "";
    case "NumpadDecimal":
      return "";
    case "NumpadDivide":
      return "";
    case "F1":
      return "";
    case "F2":
      return "";
    case "F3":
      return "";
    case "F4":
      return "";
    case "F5":
      return "";
    case "F6":
      return "";
    case "F7":
      return "";
    case "F8":
      return "";
    case "F9":
      return "";
    case "F10":
      return "";
    case "F11":
      return "";
    case "F12":
      return "";
    case "Meta":
    case "MetaLeft":
      return "";
    case "ShiftRight":
      return "";
    case "ControlRight":
      return "";
    case "AltRight":
      return "";
    case "MetaRight":
      return "";
    case "Digit0":
      return "0";
    case "Digit1":
      return "1";
    case "Digit2":
      return "2";
    case "Digit3":
      return "3";
    case "Digit4":
      return "4";
    case "Digit5":
      return "5";
    case "Digit6":
      return "6";
    case "Digit7":
      return "7";
    case "Digit8":
      return "8";
    case "Digit9":
      return "9";
    case "KeyA":
      return "a";
    case "KeyB":
      return "b";
    case "KeyC":
      return "c";
    case "KeyD":
      return "d";
    case "KeyE":
      return "e";
    case "KeyF":
      return "f";
    case "KeyG":
      return "g";
    case "KeyH":
      return "h";
    case "KeyI":
      return "i";
    case "KeyJ":
      return "j";
    case "KeyK":
      return "k";
    case "KeyL":
      return "l";
    case "KeyM":
      return "m";
    case "KeyN":
      return "n";
    case "KeyO":
      return "o";
    case "KeyP":
      return "p";
    case "KeyQ":
      return "q";
    case "KeyR":
      return "r";
    case "KeyS":
      return "s";
    case "KeyT":
      return "t";
    case "KeyU":
      return "u";
    case "KeyV":
      return "v";
    case "KeyW":
      return "w";
    case "KeyX":
      return "x";
    case "KeyY":
      return "y";
    case "KeyZ":
      return "z";
    case "Semicolon":
      return ";";
    case "Equal":
      return "=";
    case "Comma":
      return ",";
    case "Minus":
      return "-";
    case "Period":
      return ".";
    case "Slash":
      return "/";
    case "Backquote":
      return "`";
    case "BracketLeft":
      return "[";
    case "Backslash":
      return "\\";
    case "BracketRight":
      return "]";
    case "Quote":
      return '"';
    default:
      throw new Error(`Unknown key: "${i}"`);
  }
};
var nt;
class mp extends bl {
  constructor(t) {
    super();
    y(this, nt);
    P(this, nt, t);
  }
  async down(t, r) {
    await e(this, nt).mainFrame().browsingContext.performActions([
      {
        type: Fe.Key,
        id: "__puppeteer_keyboard",
        actions: [
          {
            type: ke.KeyDown,
            value: hs(t)
          }
        ]
      }
    ]);
  }
  async up(t) {
    await e(this, nt).mainFrame().browsingContext.performActions([
      {
        type: Fe.Key,
        id: "__puppeteer_keyboard",
        actions: [
          {
            type: ke.KeyUp,
            value: hs(t)
          }
        ]
      }
    ]);
  }
  async press(t, r = {}) {
    const { delay: o = 0 } = r, h = [
      {
        type: ke.KeyDown,
        value: hs(t)
      }
    ];
    o > 0 && h.push({
      type: ke.Pause,
      duration: o
    }), h.push({
      type: ke.KeyUp,
      value: hs(t)
    }), await e(this, nt).mainFrame().browsingContext.performActions([
      {
        type: Fe.Key,
        id: "__puppeteer_keyboard",
        actions: h
      }
    ]);
  }
  async type(t, r = {}) {
    const { delay: o = 0 } = r, h = [...t].map(hs), a = [];
    if (o <= 0)
      for (const c of h)
        a.push({
          type: ke.KeyDown,
          value: c
        }, {
          type: ke.KeyUp,
          value: c
        });
    else
      for (const c of h)
        a.push({
          type: ke.KeyDown,
          value: c
        }, {
          type: ke.Pause,
          duration: o
        }, {
          type: ke.KeyUp,
          value: c
        });
    await e(this, nt).mainFrame().browsingContext.performActions([
      {
        type: Fe.Key,
        id: "__puppeteer_keyboard",
        actions: a
      }
    ]);
  }
  async sendCharacter(t) {
    if ([...t].length > 1)
      throw new Error("Cannot send more than 1 character.");
    await (await e(this, nt).focusedFrame()).isolatedRealm().evaluate(async (o) => {
      document.execCommand("insertText", !1, o);
    }, t);
  }
}
nt = new WeakMap();
const ai = (i) => {
  switch (i) {
    case ht.Left:
      return 0;
    case ht.Middle:
      return 1;
    case ht.Right:
      return 2;
    case ht.Back:
      return 3;
    case ht.Forward:
      return 4;
  }
};
var Je, At;
class wp extends xl {
  constructor(t) {
    super();
    y(this, Je);
    y(this, At, { x: 0, y: 0 });
    P(this, Je, t);
  }
  async reset() {
    P(this, At, { x: 0, y: 0 }), await e(this, Je).mainFrame().browsingContext.releaseActions();
  }
  async move(t, r, o = {}) {
    const h = e(this, At), a = {
      x: Math.round(t),
      y: Math.round(r)
    }, c = [], m = o.steps ?? 0;
    for (let f = 0; f < m; ++f)
      c.push({
        type: ke.PointerMove,
        x: h.x + (a.x - h.x) * (f / m),
        y: h.y + (a.y - h.y) * (f / m),
        origin: o.origin
      });
    c.push({
      type: ke.PointerMove,
      ...a,
      origin: o.origin
    }), P(this, At, a), await e(this, Je).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: "__puppeteer_mouse",
        actions: c
      }
    ]);
  }
  async down(t = {}) {
    await e(this, Je).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: "__puppeteer_mouse",
        actions: [
          {
            type: ke.PointerDown,
            button: ai(t.button ?? ht.Left)
          }
        ]
      }
    ]);
  }
  async up(t = {}) {
    await e(this, Je).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: "__puppeteer_mouse",
        actions: [
          {
            type: ke.PointerUp,
            button: ai(t.button ?? ht.Left)
          }
        ]
      }
    ]);
  }
  async click(t, r, o = {}) {
    const h = [
      {
        type: ke.PointerMove,
        x: Math.round(t),
        y: Math.round(r),
        origin: o.origin
      }
    ], a = {
      type: ke.PointerDown,
      button: ai(o.button ?? ht.Left)
    }, c = {
      type: ke.PointerUp,
      button: a.button
    };
    for (let m = 1; m < (o.count ?? 1); ++m)
      h.push(a, c);
    h.push(a), o.delay && h.push({
      type: ke.Pause,
      duration: o.delay
    }), h.push(c), await e(this, Je).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: "__puppeteer_mouse",
        actions: h
      }
    ]);
  }
  async wheel(t = {}) {
    await e(this, Je).mainFrame().browsingContext.performActions([
      {
        type: Fe.Wheel,
        id: "__puppeteer_wheel",
        actions: [
          {
            type: ke.Scroll,
            ...e(this, At) ?? {
              x: 0,
              y: 0
            },
            deltaX: t.deltaX ?? 0,
            deltaY: t.deltaY ?? 0
          }
        ]
      }
    ]);
  }
  drag() {
    throw new fe();
  }
  dragOver() {
    throw new fe();
  }
  dragEnter() {
    throw new fe();
  }
  drop() {
    throw new fe();
  }
  dragAndDrop() {
    throw new fe();
  }
}
Je = new WeakMap(), At = new WeakMap();
var zs, Ks, Ws, Mt, Ft, Gs, hr;
class vp {
  constructor(s, t, r, o, h, a) {
    y(this, zs, !1);
    y(this, Ks);
    y(this, Ws);
    y(this, Mt);
    y(this, Ft);
    y(this, Gs);
    y(this, hr);
    P(this, Ft, s), P(this, Gs, t), P(this, Ks, Math.round(o)), P(this, Ws, Math.round(h)), P(this, hr, a), P(this, Mt, `__puppeteer_finger_${r}`);
  }
  async start(s = {}) {
    if (e(this, zs))
      throw new Sl("Touch has already started");
    await e(this, Ft).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: e(this, Mt),
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            type: ke.PointerMove,
            x: e(this, Ks),
            y: e(this, Ws),
            origin: s.origin
          },
          {
            ...e(this, hr),
            type: ke.PointerDown,
            button: 0
          }
        ]
      }
    ]), P(this, zs, !0);
  }
  move(s, t) {
    const r = Math.round(s), o = Math.round(t);
    return e(this, Ft).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: e(this, Mt),
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            ...e(this, hr),
            type: ke.PointerMove,
            x: r,
            y: o
          }
        ]
      }
    ]);
  }
  async end() {
    await e(this, Ft).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: e(this, Mt),
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            type: ke.PointerUp,
            button: 0
          }
        ]
      }
    ]), e(this, Gs).removeHandle(this);
  }
}
zs = new WeakMap(), Ks = new WeakMap(), Ws = new WeakMap(), Mt = new WeakMap(), Ft = new WeakMap(), Gs = new WeakMap(), hr = new WeakMap();
var Vs;
class yp extends El {
  constructor(t) {
    super();
    y(this, Vs);
    P(this, Vs, t);
  }
  async touchStart(t, r, o = {}) {
    const h = this.idGenerator(), a = {
      width: 0.5 * 2,
      // 2 times default touch radius.
      height: 0.5 * 2,
      // 2 times default touch radius.
      pressure: 0.5,
      altitudeAngle: Math.PI / 2
    }, c = new vp(e(this, Vs), this, h, t, r, a);
    return await c.start(o), this.touches.push(c), c;
  }
}
Vs = new WeakMap();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Cp = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
}, ic = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, oc = function(i, s, t) {
  if (s != null) {
    if (typeof s != "object" && typeof s != "function") throw new TypeError("Object expected.");
    var r, o;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = s[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = s[Symbol.dispose], t && (o = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    o && (r = function() {
      try {
        o.call(this);
      } catch (h) {
        return Promise.reject(h);
      }
    }), i.stack.push({ value: s, dispose: r, async: t });
  } else t && i.stack.push({ async: !0 });
  return s;
}, ac = /* @__PURE__ */ (function(i) {
  return function(s) {
    function t(a) {
      s.error = s.hasError ? new i(a, s.error, "An error was suppressed during disposal.") : a, s.hasError = !0;
    }
    var r, o = 0;
    function h() {
      for (; r = s.stack.pop(); )
        try {
          if (!r.async && o === 1) return o = 0, s.stack.push(r), Promise.resolve().then(h);
          if (r.dispose) {
            var a = r.dispose.call(r.value);
            if (r.async) return o |= 2, Promise.resolve(a).then(h, function(c) {
              return t(c), h();
            });
          } else o |= 1;
        } catch (c) {
          t(c);
        }
      if (o === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
      if (s.hasError) throw s.error;
    }
    return h();
  };
})(typeof SuppressedError == "function" ? SuppressedError : function(i, s, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = i, r.suppressed = s, r;
});
let On = (() => {
  var o, h, a, c, m, f, x, g, d, bd, b, w, v, Yi, Qi, Zi, u;
  let i = Pl, s, t = [], r = [];
  return u = class extends i {
    constructor(l, S) {
      super();
      y(this, d);
      y(this, o, ic(this, t, new ve()));
      y(this, h, ic(this, r));
      y(this, a);
      y(this, c, null);
      y(this, m, /* @__PURE__ */ new Set());
      X(this, "keyboard");
      X(this, "mouse");
      X(this, "touchscreen");
      X(this, "tracing");
      X(this, "coverage");
      y(this, f);
      y(this, x);
      y(this, g, /* @__PURE__ */ new Set());
      /**
       * @internal
       */
      y(this, b);
      y(this, w);
      /**
       * @internal
       */
      X(this, "_credentials", null);
      y(this, v);
      P(this, h, l), P(this, a, hp.from(this, S)), P(this, f, new Il(e(this, a).client)), this.tracing = new _l(e(this, a).client), this.coverage = new kl(e(this, a).client), this.keyboard = new mp(this), this.mouse = new wp(this), this.touchscreen = new yp(this);
    }
    static from(l, S) {
      var k;
      const N = new u(l, S);
      return T(k = N, d, bd).call(k), N;
    }
    get trustedEmitter() {
      return e(this, o);
    }
    set trustedEmitter(l) {
      P(this, o, l);
    }
    _client() {
      return e(this, a).client;
    }
    async setUserAgent(l, S) {
      let N, k, A;
      if (typeof l == "string" ? (N = l, k = S) : (N = l.userAgent ?? await e(this, h).browser().userAgent(), k = l.userAgentMetadata, A = l.platform), !e(this, h).browser().cdpSupported && (k || A))
        throw new fe("Current Browser does not support `userAgentMetadata` or `platform`");
      if (e(this, h).browser().cdpSupported && (k || A))
        return await this._client().send("Network.setUserAgentOverride", {
          userAgent: N,
          userAgentMetadata: k,
          platform: A
        });
      const z = N !== "";
      N = N ?? await e(this, h).browser().userAgent(), await e(this, a).browsingContext.setUserAgent(z ? N : null);
      const K = (q) => {
        q && Object.defineProperty(navigator, "platform", {
          value: q,
          configurable: !0
        });
      }, R = [e(this, a)];
      for (const q of R)
        R.push(...q.childFrames());
      e(this, b) && await this.removeScriptToEvaluateOnNewDocument(e(this, b));
      const [F] = await Promise.all([
        z ? this.evaluateOnNewDocument(K, A || void 0) : void 0,
        // When we disable the UserAgent we want to
        // evaluate the original value in all Browsing Contexts
        ...R.map((q) => q.evaluate(K, A || void 0))
      ]);
      P(this, b, F == null ? void 0 : F.identifier);
    }
    async setBypassCSP(l) {
      await this._client().send("Page.setBypassCSP", { enabled: l });
    }
    async queryObjects(l) {
      je(!l.disposed, "Prototype JSHandle is disposed!"), je(l.id, "Prototype JSHandle must not be referencing primitive value");
      const S = await e(this, a).client.send("Runtime.queryObjects", {
        prototypeObjectId: l.id
      });
      return e(this, a).mainRealm().createHandle({
        type: "array",
        handle: S.objects.objectId
      });
    }
    browser() {
      return this.browserContext().browser();
    }
    browserContext() {
      return e(this, h);
    }
    mainFrame() {
      return e(this, a);
    }
    async emulateFocusedPage(l) {
      return await e(this, f).emulateFocus(l);
    }
    resize(l) {
      throw new fe();
    }
    windowId() {
      throw new fe();
    }
    openDevTools() {
      throw new fe();
    }
    async focusedFrame() {
      const l = { stack: [], error: void 0, hasError: !1 };
      try {
        const N = oc(l, await this.mainFrame().isolatedRealm().evaluateHandle(() => {
          let A = window;
          for (; (A.document.activeElement instanceof A.HTMLIFrameElement || A.document.activeElement instanceof A.HTMLFrameElement) && A.document.activeElement.contentWindow !== null; )
            A = A.document.activeElement.contentWindow;
          return A;
        }), !1).remoteValue();
        je(N.type === "window");
        const k = this.frames().find((A) => A._id === N.value.context);
        return je(k), k;
      } catch (S) {
        l.error = S, l.hasError = !0;
      } finally {
        ac(l);
      }
    }
    frames() {
      const l = [e(this, a)];
      for (const S of l)
        l.push(...S.childFrames());
      return l;
    }
    isClosed() {
      return e(this, a).detached;
    }
    async close(l) {
      const S = { stack: [], error: void 0, hasError: !1 };
      try {
        const N = oc(S, await e(this, h).waitForScreenshotOperations(), !1);
        try {
          await e(this, a).browsingContext.close(l == null ? void 0 : l.runBeforeUnload);
        } catch {
          return;
        }
      } catch (N) {
        S.error = N, S.hasError = !0;
      } finally {
        ac(S);
      }
    }
    async reload(l = {}) {
      const [S] = await Promise.all([
        e(this, a).waitForNavigation(l),
        e(this, a).browsingContext.reload({
          ignoreCache: l.ignoreCache ? !0 : void 0
        })
      ]).catch(wd(this.url(), l.timeout ?? this._timeoutSettings.navigationTimeout()));
      return S;
    }
    setDefaultNavigationTimeout(l) {
      this._timeoutSettings.setDefaultNavigationTimeout(l);
    }
    setDefaultTimeout(l) {
      this._timeoutSettings.setDefaultTimeout(l);
    }
    getDefaultTimeout() {
      return this._timeoutSettings.timeout();
    }
    getDefaultNavigationTimeout() {
      return this._timeoutSettings.navigationTimeout();
    }
    isJavaScriptEnabled() {
      return e(this, a).browsingContext.isJavaScriptEnabled();
    }
    async setGeolocation(l) {
      const { longitude: S, latitude: N, accuracy: k = 0 } = l;
      if (S < -180 || S > 180)
        throw new Error(`Invalid longitude "${S}": precondition -180 <= LONGITUDE <= 180 failed.`);
      if (N < -90 || N > 90)
        throw new Error(`Invalid latitude "${N}": precondition -90 <= LATITUDE <= 90 failed.`);
      if (k < 0)
        throw new Error(`Invalid accuracy "${k}": precondition 0 <= ACCURACY failed.`);
      return await e(this, a).browsingContext.setGeolocationOverride({
        coordinates: {
          latitude: l.latitude,
          longitude: l.longitude,
          accuracy: l.accuracy
        }
      });
    }
    async setJavaScriptEnabled(l) {
      return await e(this, a).browsingContext.setJavaScriptEnabled(l);
    }
    async emulateMediaType(l) {
      return await e(this, f).emulateMediaType(l);
    }
    async emulateCPUThrottling(l) {
      return await e(this, f).emulateCPUThrottling(l);
    }
    async emulateMediaFeatures(l) {
      return await e(this, f).emulateMediaFeatures(l);
    }
    async emulateTimezone(l) {
      return await e(this, a).browsingContext.setTimezoneOverride(l);
    }
    async emulateIdleState(l) {
      return await e(this, f).emulateIdleState(l);
    }
    async emulateVisionDeficiency(l) {
      return await e(this, f).emulateVisionDeficiency(l);
    }
    async setViewport(l) {
      if (!this.browser().cdpSupported) {
        const N = l != null && l.width && (l != null && l.height) ? {
          width: l.width,
          height: l.height
        } : null, k = l != null && l.deviceScaleFactor ? l.deviceScaleFactor : null, A = l ? l.isLandscape ? {
          natural: "landscape",
          type: "landscape-primary"
        } : {
          natural: "portrait",
          type: "portrait-primary"
        } : null;
        await Promise.all([
          e(this, a).browsingContext.setViewport({
            viewport: N,
            devicePixelRatio: k
          }),
          e(this, a).browsingContext.setScreenOrientationOverride(A)
        ]), P(this, c, l);
        return;
      }
      const S = await e(this, f).emulateViewport(l);
      P(this, c, l), S && await this.reload();
    }
    viewport() {
      return e(this, c);
    }
    async pdf(l = {}) {
      const { timeout: S = this._timeoutSettings.timeout(), path: N = void 0 } = l, { printBackground: k, margin: A, landscape: z, width: K, height: R, pageRanges: F, scale: q, preferCSSPageSize: Z } = Tl(l, "cm"), B = F ? F.split(", ") : [];
      await Nn(Do(this.mainFrame().isolatedRealm().evaluate(() => document.fonts.ready)).pipe(St(Dn(S))));
      const H = await Nn(Do(e(this, a).browsingContext.print({
        background: k,
        margin: A,
        orientation: z ? "landscape" : "portrait",
        page: {
          width: K,
          height: R
        },
        pageRanges: B,
        scale: q,
        shrinkToFit: !Z
      })).pipe(St(Dn(S)))), U = lc(H, !0);
      return await this._maybeWriteTypedArrayToFile(N, U), U;
    }
    async createPDFStream(l) {
      const S = await this.pdf(l);
      return new ReadableStream({
        start(N) {
          N.enqueue(S), N.close();
        }
      });
    }
    async _screenshot(l) {
      const { clip: S, type: N, captureBeyondViewport: k, quality: A } = l;
      if (l.omitBackground !== void 0 && l.omitBackground)
        throw new fe("BiDi does not support 'omitBackground'.");
      if (l.optimizeForSpeed !== void 0 && l.optimizeForSpeed)
        throw new fe("BiDi does not support 'optimizeForSpeed'.");
      if (l.fromSurface !== void 0 && !l.fromSurface)
        throw new fe("BiDi does not support 'fromSurface'.");
      if (S !== void 0 && S.scale !== void 0 && S.scale !== 1)
        throw new fe("BiDi does not support 'scale' in 'clip'.");
      let z;
      if (S)
        if (k)
          z = S;
        else {
          const [R, F] = await this.evaluate(() => {
            if (!window.visualViewport)
              throw new Error("window.visualViewport is not supported.");
            return [
              window.visualViewport.pageLeft,
              window.visualViewport.pageTop
            ];
          });
          z = {
            ...S,
            x: S.x - R,
            y: S.y - F
          };
        }
      return await e(this, a).browsingContext.captureScreenshot({
        origin: k ? "document" : "viewport",
        format: {
          type: `image/${N}`,
          ...A !== void 0 ? { quality: A / 100 } : {}
        },
        ...z ? { clip: { type: "box", ...z } } : {}
      });
    }
    async createCDPSession() {
      return await e(this, a).createCDPSession();
    }
    async bringToFront() {
      await e(this, a).browsingContext.activate();
    }
    async evaluateOnNewDocument(l, ...S) {
      const N = bp(l, ...S);
      return { identifier: await e(this, a).browsingContext.addPreloadScript(N) };
    }
    async removeScriptToEvaluateOnNewDocument(l) {
      await e(this, a).browsingContext.removePreloadScript(l);
    }
    async exposeFunction(l, S) {
      return await this.mainFrame().exposeFunction(l, "default" in S ? S.default : S);
    }
    isDragInterceptionEnabled() {
      return !1;
    }
    async setCacheEnabled(l) {
      if (!e(this, h).browser().cdpSupported) {
        await e(this, a).browsingContext.setCacheBehavior(l ? "default" : "bypass");
        return;
      }
      await this._client().send("Network.setCacheDisabled", {
        cacheDisabled: !l
      });
    }
    async cookies(...l) {
      const S = (l.length ? l : [this.url()]).map((k) => new URL(k));
      return (await e(this, a).browsingContext.getCookies()).map((k) => xd(k)).filter((k) => S.some((A) => Sp(k, A)));
    }
    isServiceWorkerBypassed() {
      throw new fe();
    }
    target() {
      throw new fe();
    }
    async waitForFileChooser(l = {}) {
      const { timeout: S = this._timeoutSettings.timeout() } = l, N = so.create({
        message: `Waiting for \`FileChooser\` failed: ${S}ms exceeded`,
        timeout: S
      });
      e(this, g).add(N), l.signal && l.signal.addEventListener("abort", () => {
        var k;
        N.reject((k = l.signal) == null ? void 0 : k.reason);
      }, { once: !0 }), e(this, a).browsingContext.once("filedialogopened", (k) => {
        if (!k.element)
          return;
        const A = new Dl(xs.from({
          sharedId: k.element.sharedId,
          handle: k.element.handle,
          type: "node"
        }, e(this, a).mainRealm()), k.multiple);
        for (const z of e(this, g))
          z.resolve(A), e(this, g).delete(z);
      });
      try {
        return await N.valueOrThrow();
      } catch (k) {
        throw e(this, g).delete(N), k;
      }
    }
    workers() {
      return [...e(this, m)];
    }
    get isNetworkInterceptionEnabled() {
      return !!e(this, w) || !!e(this, v);
    }
    async setRequestInterception(l) {
      P(this, w, await T(this, d, Yi).call(this, [
        "beforeRequestSent"
        /* Bidi.Network.InterceptPhase.BeforeRequestSent */
      ], e(this, w), l));
    }
    /**
     * @internal
     */
    async setExtraHTTPHeaders(l) {
      await e(this, a).browsingContext.setExtraHTTPHeaders(l);
    }
    async authenticate(l) {
      P(this, v, await T(this, d, Yi).call(this, [
        "authRequired"
        /* Bidi.Network.InterceptPhase.AuthRequired */
      ], e(this, v), !!l)), this._credentials = l;
    }
    setDragInterception() {
      throw new fe();
    }
    setBypassServiceWorker() {
      throw new fe();
    }
    async setOfflineMode(l) {
      return e(this, h).browser().cdpSupported ? (e(this, x) || P(this, x, {
        offline: !1,
        upload: -1,
        download: -1,
        latency: 0
      }), e(this, x).offline = l, await T(this, d, Qi).call(this)) : await e(this, a).browsingContext.setOfflineMode(l);
    }
    async emulateNetworkConditions(l) {
      if (!e(this, h).browser().cdpSupported) {
        if (!(l != null && l.offline) && (((l == null ? void 0 : l.upload) ?? -1) >= 0 || ((l == null ? void 0 : l.download) ?? -1) >= 0 || ((l == null ? void 0 : l.latency) ?? 0) > 0))
          throw new fe();
        return await e(this, a).browsingContext.setOfflineMode((l == null ? void 0 : l.offline) ?? !1);
      }
      return e(this, x) || P(this, x, {
        offline: (l == null ? void 0 : l.offline) ?? !1,
        upload: -1,
        download: -1,
        latency: 0
      }), e(this, x).upload = l ? l.upload : -1, e(this, x).download = l ? l.download : -1, e(this, x).latency = l ? l.latency : 0, e(this, x).offline = (l == null ? void 0 : l.offline) ?? !1, await T(this, d, Qi).call(this);
    }
    async setCookie(...l) {
      const S = this.url(), N = S.startsWith("http");
      for (const k of l) {
        let A = k.url || "";
        !A && N && (A = S), je(A !== "about:blank", `Blank page can not have cookie "${k.name}"`), je(!String.prototype.startsWith.call(A || "", "data:"), `Data URL page can not have cookie "${k.name}"`), je(k.partitionKey === void 0 || typeof k.partitionKey == "string", "BiDi only allows domain partition keys");
        const z = URL.canParse(A) ? new URL(A) : void 0, K = k.domain ?? (z == null ? void 0 : z.hostname);
        je(K !== void 0, "At least one of the url and domain needs to be specified");
        const R = {
          domain: K,
          name: k.name,
          value: {
            type: "string",
            value: k.value
          },
          ...k.path !== void 0 ? { path: k.path } : {},
          ...k.httpOnly !== void 0 ? { httpOnly: k.httpOnly } : {},
          ...k.secure !== void 0 ? { secure: k.secure } : {},
          ...k.sameSite !== void 0 ? { sameSite: Sd(k.sameSite) } : {},
          expiry: Pd(k.expires),
          // Chrome-specific properties.
          ...Ed(k, "sameParty", "sourceScheme", "priority", "url")
        };
        k.partitionKey !== void 0 ? await this.browserContext().userContext.setCookie(R, k.partitionKey) : await e(this, a).browsingContext.setCookie(R);
      }
    }
    async deleteCookie(...l) {
      await Promise.all(l.map(async (S) => {
        const N = S.url ?? this.url(), k = URL.canParse(N) ? new URL(N) : void 0, A = S.domain ?? (k == null ? void 0 : k.hostname);
        je(A !== void 0, "At least one of the url and domain needs to be specified");
        const z = {
          domain: A,
          name: S.name,
          ...S.path !== void 0 ? { path: S.path } : {}
        };
        await e(this, a).browsingContext.deleteCookie(z);
      }));
    }
    async removeExposedFunction(l) {
      await e(this, a).removeExposedFunction(l);
    }
    metrics() {
      throw new fe();
    }
    async goBack(l = {}) {
      return await T(this, d, Zi).call(this, -1, l);
    }
    async goForward(l = {}) {
      return await T(this, d, Zi).call(this, 1, l);
    }
    async waitForDevicePrompt(l = {}) {
      return await this.mainFrame().waitForDevicePrompt(l);
    }
    get bluetooth() {
      return this.mainFrame().browsingContext.bluetooth;
    }
  }, o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c = new WeakMap(), m = new WeakMap(), f = new WeakMap(), x = new WeakMap(), g = new WeakMap(), d = new WeakSet(), bd = function() {
    e(this, a).browsingContext.on("closed", () => {
      this.trustedEmitter.emit("close", void 0), this.trustedEmitter.removeAllListeners();
    }), this.trustedEmitter.on("workercreated", (l) => {
      e(this, m).add(l);
    }), this.trustedEmitter.on("workerdestroyed", (l) => {
      e(this, m).delete(l);
    });
  }, b = new WeakMap(), w = new WeakMap(), v = new WeakMap(), Yi = async function(l, S, N) {
    if (N && !S)
      return await e(this, a).browsingContext.addIntercept({
        phases: l
      });
    if (!N && S) {
      await e(this, a).browsingContext.userContext.browser.removeIntercept(S);
      return;
    }
    return S;
  }, Qi = async function() {
    e(this, x) && await this._client().send("Network.emulateNetworkConditions", {
      offline: e(this, x).offline,
      latency: e(this, x).latency,
      uploadThroughput: e(this, x).upload,
      downloadThroughput: e(this, x).download
    });
  }, Zi = async function(l, S) {
    const N = new AbortController();
    try {
      const [k] = await Promise.all([
        this.waitForNavigation({
          ...S,
          signal: N.signal
        }),
        e(this, a).browsingContext.traverseHistory(l)
      ]);
      return k;
    } catch (k) {
      throw N.abort(), k;
    }
  }, (() => {
    const l = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    s = [zn()], Cp(u, null, s, { kind: "accessor", name: "trustedEmitter", static: !1, private: !1, access: { has: (S) => "trustedEmitter" in S, get: (S) => S.trustedEmitter, set: (S, N) => {
      S.trustedEmitter = N;
    } }, metadata: l }, t, r), l && Object.defineProperty(u, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: l });
  })(), u;
})();
function bp(i, ...s) {
  return `() => {${Nl(i, ...s)}}`;
}
function xp(i, s) {
  const t = i.domain.toLowerCase(), r = s.hostname.toLowerCase();
  return t === r ? !0 : t.startsWith(".") && r.endsWith(t);
}
function Ep(i, s) {
  const t = s.pathname, r = i.path;
  return !!(t === r || t.startsWith(r) && (r.endsWith("/") || t[r.length] === "/"));
}
function Sp(i, s) {
  const t = new URL(s);
  return je(i !== void 0), xp(i, t) ? Ep(i, t) : !1;
}
function xd(i, s = !1) {
  const t = i[Bn + "partitionKey"];
  function r() {
    return typeof t == "string" ? { partitionKey: t } : typeof t == "object" && t !== null ? s ? {
      partitionKey: {
        sourceOrigin: t.topLevelSite,
        hasCrossSiteAncestor: t.hasCrossSiteAncestor ?? !1
      }
    } : {
      // TODO: a breaking change in Puppeteer is required to change
      // partitionKey type and report the composite partition key.
      partitionKey: t.topLevelSite
    } : {};
  }
  return {
    name: i.name,
    // Presents binary value as base64 string.
    value: i.value.value,
    domain: i.domain,
    path: i.path,
    size: i.size,
    httpOnly: i.httpOnly,
    secure: i.secure,
    sameSite: Ip(i.sameSite),
    expires: i.expiry ?? -1,
    session: i.expiry === void 0 || i.expiry <= 0,
    // Extending with CDP-specific properties with `goog:` prefix.
    ...Pp(i, "sameParty", "sourceScheme", "partitionKeyOpaque", "priority"),
    ...r()
  };
}
const Bn = "goog:";
function Pp(i, ...s) {
  const t = {};
  for (const r of s)
    i[Bn + r] !== void 0 && (t[r] = i[Bn + r]);
  return t;
}
function Ed(i, ...s) {
  const t = {};
  for (const r of s)
    i[r] !== void 0 && (t[Bn + r] = i[r]);
  return t;
}
function Ip(i) {
  return i === "strict" ? "Strict" : i === "lax" ? "Lax" : "None";
}
function Sd(i) {
  return i === "Strict" ? "strict" : i === "Lax" ? "lax" : "none";
}
function Pd(i) {
  return [void 0, -1].includes(i) ? void 0 : i;
}
function _p(i) {
  if (i === void 0 || typeof i == "string")
    return i;
  if (i.hasCrossSiteAncestor)
    throw new fe("WebDriver BiDi does not support `hasCrossSiteAncestor` yet.");
  return i.sourceOrigin;
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var pr;
class kp extends Kn {
  constructor(t) {
    super();
    y(this, pr);
    P(this, pr, t);
  }
  asPage() {
    throw new fe();
  }
  url() {
    return "";
  }
  createCDPSession() {
    throw new fe();
  }
  type() {
    return Wn.BROWSER;
  }
  browser() {
    return e(this, pr);
  }
  browserContext() {
    return e(this, pr).defaultBrowserContext();
  }
  opener() {
    throw new fe();
  }
}
pr = new WeakMap();
var it;
class Tp extends Kn {
  constructor(t) {
    super();
    y(this, it);
    P(this, it, t);
  }
  async page() {
    return e(this, it);
  }
  async asPage() {
    return On.from(this.browserContext(), e(this, it).mainFrame().browsingContext);
  }
  url() {
    return e(this, it).url();
  }
  createCDPSession() {
    return e(this, it).createCDPSession();
  }
  type() {
    return Wn.PAGE;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return e(this, it).browserContext();
  }
  opener() {
    throw new fe();
  }
}
it = new WeakMap();
var ot, fr;
class Dp extends Kn {
  constructor(t) {
    super();
    y(this, ot);
    y(this, fr);
    P(this, ot, t);
  }
  async page() {
    return e(this, fr) === void 0 && P(this, fr, On.from(this.browserContext(), e(this, ot).browsingContext)), e(this, fr);
  }
  async asPage() {
    return On.from(this.browserContext(), e(this, ot).browsingContext);
  }
  url() {
    return e(this, ot).url();
  }
  createCDPSession() {
    return e(this, ot).createCDPSession();
  }
  type() {
    return Wn.PAGE;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return e(this, ot).page().browserContext();
  }
  opener() {
    throw new fe();
  }
}
ot = new WeakMap(), fr = new WeakMap();
var gr;
class Np extends Kn {
  constructor(t) {
    super();
    y(this, gr);
    P(this, gr, t);
  }
  async page() {
    throw new fe();
  }
  async asPage() {
    throw new fe();
  }
  url() {
    return e(this, gr).url();
  }
  createCDPSession() {
    throw new fe();
  }
  type() {
    return Wn.OTHER;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return e(this, gr).frame.page().browserContext();
  }
  opener() {
    throw new fe();
  }
}
gr = new WeakMap();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Rp = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
}, cc = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, Op = function(i, s, t) {
  if (s != null) {
    if (typeof s != "object" && typeof s != "function") throw new TypeError("Object expected.");
    var r, o;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = s[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = s[Symbol.dispose], t && (o = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    o && (r = function() {
      try {
        o.call(this);
      } catch (h) {
        return Promise.reject(h);
      }
    }), i.stack.push({ value: s, dispose: r, async: t });
  } else t && i.stack.push({ async: !0 });
  return s;
}, Bp = /* @__PURE__ */ (function(i) {
  return function(s) {
    function t(a) {
      s.error = s.hasError ? new i(a, s.error, "An error was suppressed during disposal.") : a, s.hasError = !0;
    }
    var r, o = 0;
    function h() {
      for (; r = s.stack.pop(); )
        try {
          if (!r.async && o === 1) return o = 0, s.stack.push(r), Promise.resolve().then(h);
          if (r.dispose) {
            var a = r.dispose.call(r.value);
            if (r.async) return o |= 2, Promise.resolve(a).then(h, function(c) {
              return t(c), h();
            });
          } else o |= 1;
        } catch (c) {
          t(c);
        }
      if (o === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
      if (s.hasError) throw s.error;
    }
    return h();
  };
})(typeof SuppressedError == "function" ? SuppressedError : function(i, s, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = i, r.suppressed = s, r;
});
let Ap = (() => {
  var o, h, a, c, m, f, x, Id, eo, C;
  let i = Rl, s, t = [], r = [];
  return C = class extends i {
    constructor(v, p, I) {
      super();
      y(this, x);
      y(this, o, cc(this, t, new ve()));
      y(this, h, cc(this, r));
      y(this, a);
      // This is public because of cookies.
      X(this, "userContext");
      y(this, c, /* @__PURE__ */ new WeakMap());
      y(this, m, /* @__PURE__ */ new Map());
      y(this, f, []);
      P(this, h, v), this.userContext = p, P(this, a, I.defaultViewport);
    }
    static from(v, p, I) {
      var u;
      const n = new C(v, p, I);
      return T(u = n, x, Id).call(u), n;
    }
    get trustedEmitter() {
      return e(this, o);
    }
    set trustedEmitter(v) {
      P(this, o, v);
    }
    targets() {
      return [...e(this, m).values()].flatMap(([v, p]) => [v, ...p.values()]);
    }
    async newPage(v) {
      const p = { stack: [], error: void 0, hasError: !1 };
      try {
        const I = Op(p, await this.waitForScreenshotOperations(), !1), n = (v == null ? void 0 : v.type) === "window" ? "window" : "tab", u = await this.userContext.createBrowsingContext(n), D = e(this, c).get(u);
        if (!D)
          throw new Error("Page is not found");
        if (e(this, a))
          try {
            await D.setViewport(e(this, a));
          } catch {
          }
        return D;
      } catch (I) {
        p.error = I, p.hasError = !0;
      } finally {
        Bp(p);
      }
    }
    async close() {
      je(this.userContext.id !== Rn.DEFAULT, "Default BrowserContext cannot be closed!");
      try {
        await this.userContext.remove();
      } catch (v) {
        Ae(v);
      }
      e(this, m).clear();
    }
    browser() {
      return e(this, h);
    }
    async pages(v = !1) {
      return [...this.userContext.browsingContexts].map((p) => e(this, c).get(p));
    }
    async overridePermissions(v, p) {
      const I = new Set(p.map((n) => {
        if (!No.get(n))
          throw new Error("Unknown permission: " + n);
        return n;
      }));
      await Promise.all(Array.from(No.keys()).map((n) => {
        const u = this.userContext.setPermissions(
          v,
          {
            name: n
          },
          I.has(n) ? "granted" : "denied"
          /* Bidi.Permissions.PermissionState.Denied */
        );
        return e(this, f).push({ origin: v, permission: n }), I.has(n) ? u : u.catch(Ae);
      }));
    }
    async clearPermissionOverrides() {
      const v = e(this, f).map(({ permission: p, origin: I }) => this.userContext.setPermissions(
        I,
        {
          name: p
        },
        "prompt"
        /* Bidi.Permissions.PermissionState.Prompt */
      ).catch(Ae));
      P(this, f, []), await Promise.all(v);
    }
    get id() {
      if (this.userContext.id !== Rn.DEFAULT)
        return this.userContext.id;
    }
    async cookies() {
      return (await this.userContext.getCookies()).map((p) => xd(p, !0));
    }
    async setCookie(...v) {
      await Promise.all(v.map(async (p) => {
        const I = {
          domain: p.domain,
          name: p.name,
          value: {
            type: "string",
            value: p.value
          },
          ...p.path !== void 0 ? { path: p.path } : {},
          ...p.httpOnly !== void 0 ? { httpOnly: p.httpOnly } : {},
          ...p.secure !== void 0 ? { secure: p.secure } : {},
          ...p.sameSite !== void 0 ? { sameSite: Sd(p.sameSite) } : {},
          expiry: Pd(p.expires),
          // Chrome-specific properties.
          ...Ed(p, "sameParty", "sourceScheme", "priority", "url")
        };
        return await this.userContext.setCookie(I, _p(p.partitionKey));
      }));
    }
  }, o = new WeakMap(), h = new WeakMap(), a = new WeakMap(), c = new WeakMap(), m = new WeakMap(), f = new WeakMap(), x = new WeakSet(), Id = function() {
    for (const v of this.userContext.browsingContexts)
      T(this, x, eo).call(this, v);
    this.userContext.on("browsingcontext", ({ browsingContext: v }) => {
      const p = T(this, x, eo).call(this, v);
      if (v.originalOpener)
        for (const I of this.userContext.browsingContexts)
          I.id === v.originalOpener && e(this, c).get(I).trustedEmitter.emit("popup", p);
    }), this.userContext.on("closed", () => {
      this.trustedEmitter.removeAllListeners();
    });
  }, eo = function(v) {
    const p = On.from(this, v);
    e(this, c).set(v, p), p.trustedEmitter.on("close", () => {
      e(this, c).delete(v);
    });
    const I = new Tp(p), n = /* @__PURE__ */ new Map();
    return e(this, m).set(p, [I, n]), p.trustedEmitter.on("frameattached", (u) => {
      const D = u, E = new Dp(D);
      n.set(D, E), this.trustedEmitter.emit("targetcreated", E);
    }), p.trustedEmitter.on("framenavigated", (u) => {
      const D = u, E = n.get(D);
      E === void 0 ? this.trustedEmitter.emit("targetchanged", I) : this.trustedEmitter.emit("targetchanged", E);
    }), p.trustedEmitter.on("framedetached", (u) => {
      const D = u, E = n.get(D);
      E !== void 0 && (n.delete(D), this.trustedEmitter.emit("targetdestroyed", E));
    }), p.trustedEmitter.on("workercreated", (u) => {
      const D = u, E = new Np(D);
      n.set(D, E), this.trustedEmitter.emit("targetcreated", E);
    }), p.trustedEmitter.on("workerdestroyed", (u) => {
      const D = u, E = n.get(D);
      E !== void 0 && (n.delete(u), this.trustedEmitter.emit("targetdestroyed", E));
    }), p.trustedEmitter.on("close", () => {
      e(this, m).delete(p), this.trustedEmitter.emit("targetdestroyed", I);
    }), this.trustedEmitter.emit("targetcreated", I), p;
  }, (() => {
    const v = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    s = [zn()], Rp(C, null, s, { kind: "accessor", name: "trustedEmitter", static: !1, private: !1, access: { has: (p) => "trustedEmitter" in p, get: (p) => p.trustedEmitter, set: (p, I) => {
      p.trustedEmitter = I;
    } }, metadata: v }, t, r), v && Object.defineProperty(C, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: v });
  })(), C;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Mp = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, dt = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
}, Fp = function(i, s, t) {
  if (s != null) {
    if (typeof s != "object" && typeof s != "function") throw new TypeError("Object expected.");
    var r, o;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = s[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = s[Symbol.dispose], t && (o = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    o && (r = function() {
      try {
        o.call(this);
      } catch (h) {
        return Promise.reject(h);
      }
    }), i.stack.push({ value: s, dispose: r, async: t });
  } else t && i.stack.push({ async: !0 });
  return s;
}, qp = /* @__PURE__ */ (function(i) {
  return function(s) {
    function t(a) {
      s.error = s.hasError ? new i(a, s.error, "An error was suppressed during disposal.") : a, s.hasError = !0;
    }
    var r, o = 0;
    function h() {
      for (; r = s.stack.pop(); )
        try {
          if (!r.async && o === 1) return o = 0, s.stack.push(r), Promise.resolve().then(h);
          if (r.dispose) {
            var a = r.dispose.call(r.value);
            if (r.async) return o |= 2, Promise.resolve(a).then(h, function(c) {
              return t(c), h();
            });
          } else o |= 1;
        } catch (c) {
          t(c);
        }
      if (o === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
      if (s.hasError) throw s.error;
    }
    return h();
  };
})(typeof SuppressedError == "function" ? SuppressedError : function(i, s, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = i, r.suppressed = s, r;
});
let jp = (() => {
  var x, g, d, C, b, w, _d, kd, Td, to, u;
  let i = ve, s = [], t, r, o, h, a, c, m, f;
  return u = class extends i {
    constructor(l) {
      super();
      y(this, w);
      y(this, x, (Mp(this, s), !1));
      y(this, g);
      y(this, d, new Ye());
      y(this, C, /* @__PURE__ */ new Map());
      X(this, "session");
      y(this, b, /* @__PURE__ */ new Map());
      this.session = l;
    }
    static async from(l) {
      var N;
      const S = new u(l);
      return await T(N = S, w, _d).call(N), S;
    }
    get closed() {
      return e(this, x);
    }
    get defaultUserContext() {
      return e(this, C).get(Rn.DEFAULT);
    }
    get disconnected() {
      return e(this, g) !== void 0;
    }
    get disposed() {
      return this.disconnected;
    }
    get userContexts() {
      return e(this, C).values();
    }
    dispose(l, S = !1) {
      P(this, x, S), P(this, g, l), this[Te]();
    }
    async close() {
      try {
        await this.session.send("browser.close", {});
      } finally {
        this.dispose("Browser already closed.", !0);
      }
    }
    async addPreloadScript(l, S = {}) {
      var k;
      const { result: { script: N } } = await this.session.send("script.addPreloadScript", {
        functionDeclaration: l,
        ...S,
        contexts: (k = S.contexts) == null ? void 0 : k.map((A) => A.id)
      });
      return N;
    }
    async removeIntercept(l) {
      await this.session.send("network.removeIntercept", {
        intercept: l
      });
    }
    async removePreloadScript(l) {
      await this.session.send("script.removePreloadScript", {
        script: l
      });
    }
    async createUserContext(l) {
      var k, A, z;
      const S = l.proxyServer === void 0 ? void 0 : {
        proxyType: "manual",
        httpProxy: l.proxyServer,
        sslProxy: l.proxyServer,
        noProxy: l.proxyBypassList
      }, { result: { userContext: N } } = await this.session.send("browser.createUserContext", {
        proxy: S
      });
      if (((k = l.downloadBehavior) == null ? void 0 : k.policy) === "allowAndName")
        throw new fe("`allowAndName` is not supported in WebDriver BiDi");
      if (((A = l.downloadBehavior) == null ? void 0 : A.policy) === "allow") {
        if (l.downloadBehavior.downloadPath === void 0)
          throw new fe("`downloadPath` is required in `allow` download behavior");
        await this.session.send("browser.setDownloadBehavior", {
          downloadBehavior: {
            type: "allowed",
            destinationFolder: l.downloadBehavior.downloadPath
          },
          userContexts: [N]
        });
      }
      return ((z = l.downloadBehavior) == null ? void 0 : z.policy) === "deny" && await this.session.send("browser.setDownloadBehavior", {
        downloadBehavior: { type: "denied" },
        userContexts: [N]
      }), T(this, w, to).call(this, N);
    }
    async installExtension(l) {
      const { result: { extension: S } } = await this.session.send("webExtension.install", {
        extensionData: { type: "path", path: l }
      });
      return S;
    }
    async uninstallExtension(l) {
      await this.session.send("webExtension.uninstall", { extension: l });
    }
    [(t = [mt], r = [le((l) => e(l, g))], o = [le((l) => e(l, g))], h = [le((l) => e(l, g))], a = [le((l) => e(l, g))], c = [le((l) => e(l, g))], m = [le((l) => e(l, g))], f = [le((l) => e(l, g))], Te)]() {
      e(this, g) ?? P(this, g, "Browser was disconnected, probably because the session ended."), this.closed && this.emit("closed", { reason: e(this, g) }), this.emit("disconnected", { reason: e(this, g) }), e(this, d).dispose(), super[Te]();
    }
  }, x = new WeakMap(), g = new WeakMap(), d = new WeakMap(), C = new WeakMap(), b = new WeakMap(), w = new WeakSet(), _d = async function() {
    const l = e(this, d).use(new ve(this.session));
    l.once("ended", ({ reason: S }) => {
      this.dispose(S);
    }), l.on("script.realmCreated", (S) => {
      S.type === "shared-worker" && e(this, b).set(S.realm, Li.from(this, S.realm, S.origin));
    }), await T(this, w, kd).call(this), await T(this, w, Td).call(this);
  }, kd = async function() {
    const { result: { userContexts: l } } = await this.session.send("browser.getUserContexts", {});
    for (const S of l)
      T(this, w, to).call(this, S.userContext);
  }, Td = async function() {
    const l = /* @__PURE__ */ new Set();
    let S;
    {
      const N = { stack: [], error: void 0, hasError: !1 };
      try {
        Fp(N, new ve(this.session), !1).on("browsingContext.contextCreated", (z) => {
          l.add(z.context);
        });
        const { result: A } = await this.session.send("browsingContext.getTree", {});
        S = A.contexts;
      } catch (k) {
        N.error = k, N.hasError = !0;
      } finally {
        qp(N);
      }
    }
    for (const N of S)
      l.has(N.context) || this.session.emit("browsingContext.contextCreated", N), N.children && S.push(...N.children);
  }, to = function(l) {
    const S = Rn.create(this, l);
    e(this, C).set(S.id, S);
    const N = e(this, d).use(new ve(S));
    return N.once("closed", () => {
      N.removeAllListeners(), e(this, C).delete(S.id);
    }), S;
  }, (() => {
    const l = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    dt(u, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (S) => "dispose" in S, get: (S) => S.dispose }, metadata: l }, null, s), dt(u, null, r, { kind: "method", name: "close", static: !1, private: !1, access: { has: (S) => "close" in S, get: (S) => S.close }, metadata: l }, null, s), dt(u, null, o, { kind: "method", name: "addPreloadScript", static: !1, private: !1, access: { has: (S) => "addPreloadScript" in S, get: (S) => S.addPreloadScript }, metadata: l }, null, s), dt(u, null, h, { kind: "method", name: "removeIntercept", static: !1, private: !1, access: { has: (S) => "removeIntercept" in S, get: (S) => S.removeIntercept }, metadata: l }, null, s), dt(u, null, a, { kind: "method", name: "removePreloadScript", static: !1, private: !1, access: { has: (S) => "removePreloadScript" in S, get: (S) => S.removePreloadScript }, metadata: l }, null, s), dt(u, null, c, { kind: "method", name: "createUserContext", static: !1, private: !1, access: { has: (S) => "createUserContext" in S, get: (S) => S.createUserContext }, metadata: l }, null, s), dt(u, null, m, { kind: "method", name: "installExtension", static: !1, private: !1, access: { has: (S) => "installExtension" in S, get: (S) => S.installExtension }, metadata: l }, null, s), dt(u, null, f, { kind: "method", name: "uninstallExtension", static: !1, private: !1, access: { has: (S) => "uninstallExtension" in S, get: (S) => S.uninstallExtension }, metadata: l }, null, s), l && Object.defineProperty(u, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: l });
  })(), u;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var ci = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, Gt = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
};
let Up = (() => {
  var x, g, d, C, b, Dd, v;
  let i = ve, s = [], t, r = [], o = [], h, a, c, m, f;
  return v = class extends i {
    constructor(n, u) {
      super();
      y(this, b);
      y(this, x, ci(this, s));
      y(this, g, new Ye());
      y(this, d);
      X(this, "browser");
      y(this, C, ci(this, r, void 0));
      ci(this, o), P(this, d, u), this.connection = n;
    }
    static async from(n, u) {
      var l;
      const { result: D } = await n.send("session.new", {
        capabilities: u
      }), E = new v(n, D);
      return await T(l = E, b, Dd).call(l), E;
    }
    get connection() {
      return e(this, C);
    }
    set connection(n) {
      P(this, C, n);
    }
    get capabilities() {
      return e(this, d).capabilities;
    }
    get disposed() {
      return this.ended;
    }
    get ended() {
      return e(this, x) !== void 0;
    }
    get id() {
      return e(this, d).sessionId;
    }
    dispose(n) {
      P(this, x, n), this[Te]();
    }
    /**
     * Currently, there is a 1:1 relationship between the session and the
     * session. In the future, we might support multiple sessions and in that
     * case we always needs to make sure that the session for the right session
     * object is used, so we implement this method here, although it's not defined
     * in the spec.
     */
    async send(n, u) {
      return await this.connection.send(n, u);
    }
    async subscribe(n, u) {
      await this.send("session.subscribe", {
        events: n,
        contexts: u
      });
    }
    async addIntercepts(n, u) {
      await this.send("session.subscribe", {
        events: n,
        contexts: u
      });
    }
    async end() {
      try {
        await this.send("session.end", {});
      } finally {
        this.dispose("Session already ended.");
      }
    }
    [(t = [zn()], h = [mt], a = [le((n) => e(n, x))], c = [le((n) => e(n, x))], m = [le((n) => e(n, x))], f = [le((n) => e(n, x))], Te)]() {
      e(this, x) ?? P(this, x, "Session already destroyed, probably because the connection broke."), this.emit("ended", { reason: e(this, x) }), e(this, g).dispose(), super[Te]();
    }
  }, x = new WeakMap(), g = new WeakMap(), d = new WeakMap(), C = new WeakMap(), b = new WeakSet(), Dd = async function() {
    this.browser = await jp.from(this), e(this, g).use(this.browser).once("closed", ({ reason: D }) => {
      this.dispose(D);
    });
    const u = /* @__PURE__ */ new WeakSet();
    this.on("browsingContext.fragmentNavigated", (D) => {
      u.has(D) || (u.add(D), this.emit("browsingContext.navigationStarted", D), this.emit("browsingContext.fragmentNavigated", D));
    });
  }, (() => {
    const n = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    Gt(v, null, t, { kind: "accessor", name: "connection", static: !1, private: !1, access: { has: (u) => "connection" in u, get: (u) => u.connection, set: (u, D) => {
      u.connection = D;
    } }, metadata: n }, r, o), Gt(v, null, h, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (u) => "dispose" in u, get: (u) => u.dispose }, metadata: n }, null, s), Gt(v, null, a, { kind: "method", name: "send", static: !1, private: !1, access: { has: (u) => "send" in u, get: (u) => u.send }, metadata: n }, null, s), Gt(v, null, c, { kind: "method", name: "subscribe", static: !1, private: !1, access: { has: (u) => "subscribe" in u, get: (u) => u.subscribe }, metadata: n }, null, s), Gt(v, null, m, { kind: "method", name: "addIntercepts", static: !1, private: !1, access: { has: (u) => "addIntercepts" in u, get: (u) => u.addIntercepts }, metadata: n }, null, s), Gt(v, null, f, { kind: "method", name: "end", static: !1, private: !1, access: { has: (u) => "end" in u, get: (u) => u.end }, metadata: n }, null, s), n && Object.defineProperty(v, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: n });
  })(), v;
})();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Lp = function(i, s, t, r, o, h) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var c = r.kind, m = c === "getter" ? "get" : c === "setter" ? "set" : "value", f = !s && i ? r.static ? i : i.prototype : null, x = s || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}), g, d = !1, C = t.length - 1; C >= 0; C--) {
    var b = {};
    for (var w in r) b[w] = w === "access" ? {} : r[w];
    for (var w in r.access) b.access[w] = r.access[w];
    b.addInitializer = function(p) {
      if (d) throw new TypeError("Cannot add initializers after decoration has completed");
      h.push(a(p || null));
    };
    var v = (0, t[C])(c === "accessor" ? { get: x.get, set: x.set } : x[m], b);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (g = a(v.get)) && (x.get = g), (g = a(v.set)) && (x.set = g), (g = a(v.init)) && o.unshift(g);
    } else (g = a(v)) && (c === "field" ? o.unshift(g) : x[m] = g);
  }
  f && Object.defineProperty(f, r.name, x), d = !0;
}, uc = function(i, s, t) {
  for (var r = arguments.length > 2, o = 0; o < s.length; o++)
    t = r ? s[o].call(i, t) : s[o].call(i);
  return r ? t : void 0;
}, dc = function(i, s, t) {
  return typeof s == "symbol" && (s = s.description ? "[".concat(s.description, "]") : ""), Object.defineProperty(i, "name", { configurable: !0, value: t ? "".concat(t, " ", s) : s });
};
let Tf = (() => {
  var h, a, c, Et, Nd, x, g, d, C, b, w, v, p, Rd, Od, Bd, ro;
  let i = Ol, s, t = [], r = [], o;
  return h = class extends i {
    constructor(S, N) {
      super();
      y(this, c);
      X(this, "protocol", "webDriverBiDi");
      y(this, a, uc(this, t, new ve()));
      y(this, x, uc(this, r));
      y(this, g);
      y(this, d);
      y(this, C);
      y(this, b, /* @__PURE__ */ new WeakMap());
      y(this, w, new kp(this));
      y(this, v);
      y(this, p);
      P(this, x, N.process), P(this, g, N.closeCallback), P(this, d, S), P(this, C, N.defaultViewport), P(this, v, N.cdpConnection), P(this, p, N.networkEnabled);
    }
    static async create(S) {
      var A, z, K;
      const N = await Up.from(S.connection, {
        firstMatch: (A = S.capabilities) == null ? void 0 : A.firstMatch,
        alwaysMatch: {
          ...(z = S.capabilities) == null ? void 0 : z.alwaysMatch,
          // Capabilities that come from Puppeteer's API take precedence.
          acceptInsecureCerts: S.acceptInsecureCerts,
          unhandledPromptBehavior: {
            default: "ignore"
          },
          webSocketUrl: !0,
          // Puppeteer with WebDriver BiDi does not support prerendering
          // yet because WebDriver BiDi behavior is not specified. See
          // https://github.com/w3c/webdriver-bidi/issues/321.
          "goog:prerenderingDisabled": !0,
          // TODO: remove after Puppeteer rolled Chrome to 142 after Oct 28, 2025.
          "goog:disableNetworkDurableMessages": !0
        }
      });
      await N.subscribe((S.cdpConnection ? [...h.subscribeModules, ...h.subscribeCdpEvents] : h.subscribeModules).filter((R) => S.networkEnabled ? !0 : R !== "network" && R !== "goog:cdp.Network.requestWillBeSent")), await Promise.all([
        "request",
        "response"
        /* Bidi.Network.DataType.Response */
      ].map(
        // Data collectors might be not implemented for specific data type, so create them
        // separately and ignore protocol errors.
        async (R) => {
          try {
            await N.send("network.addDataCollector", {
              dataTypes: [R],
              // Buffer size of 20 MB is equivalent to the CDP:
              maxEncodedDataSize: 2e7
            });
          } catch (F) {
            if (F instanceof Tn)
              Ae(F);
            else
              throw F;
          }
        }
      ));
      const k = new h(N.browser, S);
      return T(K = k, c, Rd).call(K), k;
    }
    get cdpSupported() {
      return e(this, v) !== void 0;
    }
    get cdpConnection() {
      return e(this, v);
    }
    async userAgent() {
      return e(this, d).session.capabilities.userAgent;
    }
    get connection() {
      return e(this, d).session.connection;
    }
    wsEndpoint() {
      return this.connection.url;
    }
    async close() {
      var S;
      if (!this.connection.closed)
        try {
          await e(this, d).close(), await ((S = e(this, g)) == null ? void 0 : S.call(null));
        } catch (N) {
          Ae(N);
        } finally {
          this.connection.dispose();
        }
    }
    get connected() {
      return !e(this, d).disconnected;
    }
    process() {
      return e(this, x) ?? null;
    }
    async createBrowserContext(S = {}) {
      const N = await e(this, d).createUserContext(S);
      return T(this, c, ro).call(this, N);
    }
    async version() {
      return `${e(this, c, Od)}/${e(this, c, Bd)}`;
    }
    browserContexts() {
      return [...e(this, d).userContexts].map((S) => e(this, b).get(S));
    }
    defaultBrowserContext() {
      return e(this, b).get(e(this, d).defaultUserContext);
    }
    newPage() {
      return this.defaultBrowserContext().newPage();
    }
    installExtension(S) {
      return e(this, d).installExtension(S);
    }
    async uninstallExtension(S) {
      await e(this, d).uninstallExtension(S);
    }
    screens() {
      throw new fe();
    }
    addScreen(S) {
      throw new fe();
    }
    removeScreen(S) {
      throw new fe();
    }
    getWindowBounds(S) {
      throw new fe();
    }
    setWindowBounds(S, N) {
      throw new fe();
    }
    targets() {
      return [
        e(this, w),
        ...this.browserContexts().flatMap((S) => S.targets())
      ];
    }
    target() {
      return e(this, w);
    }
    async disconnect() {
      try {
        await e(this, d).session.end();
      } catch (S) {
        Ae(S);
      } finally {
        this.connection.dispose();
      }
    }
    get debugInfo() {
      return {
        pendingProtocolErrors: this.connection.getPendingProtocolErrors()
      };
    }
    isNetworkEnabled() {
      return e(this, p);
    }
  }, a = new WeakMap(), c = new WeakSet(), Et = function() {
    return o.get.call(this);
  }, Nd = function(S) {
    return o.set.call(this, S);
  }, x = new WeakMap(), g = new WeakMap(), d = new WeakMap(), C = new WeakMap(), b = new WeakMap(), w = new WeakMap(), v = new WeakMap(), p = new WeakMap(), Rd = function() {
    var S;
    for (const N of e(this, d).userContexts)
      T(this, c, ro).call(this, N);
    e(this, d).once("disconnected", () => {
      e(this, c, Et).emit("disconnected", void 0), e(this, c, Et).removeAllListeners();
    }), (S = e(this, x)) == null || S.once("close", () => {
      e(this, d).dispose("Browser process exited.", !0), this.connection.dispose();
    });
  }, Od = function() {
    return e(this, d).session.capabilities.browserName;
  }, Bd = function() {
    return e(this, d).session.capabilities.browserVersion;
  }, ro = function(S) {
    const N = Ap.from(this, S, {
      defaultViewport: e(this, C)
    });
    return e(this, b).set(S, N), N.trustedEmitter.on("targetcreated", (k) => {
      e(this, c, Et).emit("targetcreated", k);
    }), N.trustedEmitter.on("targetchanged", (k) => {
      e(this, c, Et).emit("targetchanged", k);
    }), N.trustedEmitter.on("targetdestroyed", (k) => {
      e(this, c, Et).emit("targetdestroyed", k);
    }), N;
  }, (() => {
    const S = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    s = [zn()], Lp(h, o = { get: dc(function() {
      return e(this, a);
    }, "#trustedEmitter", "get"), set: dc(function(N) {
      P(this, a, N);
    }, "#trustedEmitter", "set") }, s, { kind: "accessor", name: "#trustedEmitter", static: !1, private: !0, access: { has: (N) => en(c, N), get: (N) => e(N, c, Et), set: (N, k) => {
      P(N, c, k, Nd);
    } }, metadata: S }, t, r), S && Object.defineProperty(h, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: S });
  })(), X(h, "subscribeModules", [
    "browsingContext",
    "network",
    "log",
    "script",
    "input"
  ]), X(h, "subscribeCdpEvents", [
    // Coverage
    "goog:cdp.Debugger.scriptParsed",
    "goog:cdp.CSS.styleSheetAdded",
    "goog:cdp.Runtime.executionContextsCleared",
    // Tracing
    "goog:cdp.Tracing.tracingComplete",
    // TODO: subscribe to all CDP events in the future.
    "goog:cdp.Network.requestWillBeSent",
    "goog:cdp.Debugger.scriptParsed",
    "goog:cdp.Page.screencastFrame"
  ]), h;
})();
export {
  Tf as BidiBrowser,
  Ap as BidiBrowserContext,
  Ah as BidiConnection,
  xs as BidiElementHandle,
  hp as BidiFrame,
  qt as BidiFrameRealm,
  hd as BidiHTTPRequest,
  tc as BidiHTTPResponse,
  jt as BidiJSHandle,
  mp as BidiKeyboard,
  wp as BidiMouse,
  On as BidiPage,
  vd as BidiRealm,
  yp as BidiTouchscreen,
  Vi as BidiWorkerRealm,
  xd as bidiToPuppeteerCookie,
  Ed as cdpSpecificCookiePropertiesFromPuppeteerToBidi,
  kf as connectBidiOverCdp,
  Pd as convertCookiesExpiryCdpToBiDi,
  _p as convertCookiesPartitionKeyFromPuppeteerToBiDi,
  Sd as convertCookiesSameSiteCdpToBiDi,
  ld as requests
};
